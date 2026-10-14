import { writeFile, mkdir, rm } from 'node:fs/promises'
import { readFileSync } from 'node:fs'

const src = readFileSync('src/data/sourceSitemap.ts', 'utf8')
const locs = [...src.matchAll(/loc: '([^']+)'/g)].map((m) => m[1])

const ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'",
  nbsp: ' ', trade: '(TM)', copy: '(c)', reg: '(R)',
  hellip: '...', mdash: '-', ndash: '-', rsquo: "'", lsquo: "'",
  ldquo: '"', rdquo: '"', sbquo: "'", bdquo: '"'
}
const WIN1252 = {
  128: 'EUR', 130: ',', 131: 'f', 132: ',,', 133: '...', 134: '+', 135: '++',
  136: '^', 137: '%', 138: 'S', 139: '<', 140: 'OE', 142: 'Z',
  145: "'", 146: "'", 147: '"', 148: '"', 149: '-', 150: '-', 151: '-',
  152: '~', 153: '(TM)', 154: 's', 155: '>', 156: 'oe', 158: 'z', 159: 'Y'
}

function cleanInline(s) {
  return s
    .replace(/&([a-z]+);/g, (m, e) => (ENTITIES[e] !== undefined ? ENTITIES[e] : ' '))
    .replace(/&#(\d+);/g, (_, n) => {
      const c = Number(n)
      if (c === 8212 || c === 8211 || c === 150 || c === 151) return '-'
      if (c >= 128 && c <= 159) return WIN1252[c] || ''
      return c >= 32 && c < 0x10ffff ? String.fromCodePoint(c) : ''
    })
    .replace(/\s+/g, ' ')
    .trim()
}

function looksLikeJs(text) {
  return /(priceId|Paddle\.|function\s*\(|console\.log|Checkout\.open|__doPostBack|var\s+\w+\s*=|let\s+\w+\s*=\s*\[)/.test(text)
}

function textOf(html) {
  return cleanInline(html.replace(/<[^>]+>/g, ' '))
}

function extract(html) {
  const title = textOf((html.match(/<title>([\s\S]*?)<\/title>/i) || ['', ''])[1])
  let body = html
  body = body.replace(/<script[\s\S]*?<\/script\s*>/gi, ' ')
  body = body.replace(/<style[\s\S]*?<\/style\s*>/gi, ' ')
  body = body.replace(/<!--[\s\S]*?-->/g, ' ')
  body = body.replace(/<table[^>]*class="[^"]*(featuresMenu|navbar|footerTable)[^"]*"[^>]*>[\s\S]*?<\/table\s*>/gi, ' ')
  const blocks = []
  const seen = new Set()
  const stripCopyright = (text) =>
    text
      .split(/(?<=[.!?])\s+/)
      .filter((s) => !/copyright|all rights reserved/i.test(s))
      .join(' ')
      .trim()
  const push = (tag, text) => {
    text = stripCopyright(text)
    if (text.length < 3 || text.length > 4000) return
    if (/^(home|features|try it|buy it|upgrade it|support|contact us)$/i.test(text)) return
    if (looksLikeJs(text)) return
    if (seen.has(text)) return
    seen.add(text)
    blocks.push({ tag, text })
  }
  body = body.replace(/<\/?(table|tbody|thead|tfoot|tr|td|th)[^>]*>/gi, '\n')
  const tokenRe = /<(h1|h2|h3|h4|pre|ul|ol|p|li|dt|dd)[^>]*>([\s\S]*?)<\/\1>/gi
  let m
  while ((m = tokenRe.exec(body)) !== null) {
    if (blocks.length >= 800) break
    const tag = m[1].toLowerCase()
    const inner = m[2]
    if (tag === 'pre') {
      const code = inner
        .replace(/<[^>]+>/g, '')
        .replace(/&([a-z]+);/g, (x, e) => (ENTITIES[e] !== undefined ? ENTITIES[e] : ' '))
        .replace(/[ \t]+\n/g, '\n')
        .trim()
      if (code.length >= 3 && !looksLikeJs(code)) push('pre', code.slice(0, 4000))
      continue
    }
    if (tag === 'ul' || tag === 'ol') {
      const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi
      let li
      while ((li = liRe.exec(inner)) !== null) {
        const t = textOf(li[1])
        if (t && !/^(home|features|try it|buy it|upgrade it|support|contact us|overview)$/i.test(t)) push('li', t)
      }
      continue
    }
    const split = inner.split(/<(br|p|li|tr|h\d|dt|dd)[^>]*>/i)
    for (const part of split) {
      const t = textOf(part)
      if (!t) continue
      push(tag === 'li' ? 'li' : tag === 'h4' ? 'h3' : tag, t)
    }
  }
  const looseLines = body
    .replace(/<[^>]+>/g, '\n')
    .split('\n')
    .map((l) => cleanInline(l))
  let para = ''
  const flush = () => {
    const t = para.trim()
    para = ''
    if (t.length >= 40) push('p', t)
  }
  for (const line of looseLines) {
    if (!line) {
      flush()
      continue
    }
    if (/^(home|features|try it|buy it|upgrade it|support|contact us|overview)$/i.test(line)) continue
    para += (para ? ' ' : '') + line
    if (/[.!?]$/.test(line) && para.length >= 40) flush()
  }
  flush()
  return { title, blocks }
}

function pascal(s) {
  return s.replace(/(^|__)([a-zA-Z0-9])/g, (_, p, c) => c.toUpperCase()).replace(/[^A-Za-z0-9]/g, '')
}

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function renderBlocks(blocks) {
  let out = ''
  let i = 0
  while (i < blocks.length) {
    const b = blocks[i]
    if (b.tag === 'h1') {
      i++
    } else if (b.tag === 'h2' || b.tag === 'h3') {
      out += `        <h3>${escHtml(b.text)}</h3>\n`
      i++
    } else if (b.tag === 'pre') {
      out += `        <pre class="code"><code>${escHtml(b.text)}</code></pre>\n`
      i++
    } else if (b.tag === 'li') {
      out += '        <ul>\n'
      while (i < blocks.length && blocks[i].tag === 'li') {
        out += `          <li>${escHtml(blocks[i].text)}</li>\n`
        i++
      }
      out += '        </ul>\n'
    } else if (b.tag === 'row') {
      out += `        <p class="rowline">${escHtml(b.text)}</p>\n`
      i++
    } else {
      out += `        <p>${escHtml(b.text)}</p>\n`
      i++
    }
  }
  return out
}

await rm('src/views/auto', { recursive: true, force: true })
await mkdir('src/views/auto', { recursive: true })

function parseFeatures() {
  const out = {}
  const featSrc = readFileSync('src/data/features.ts', 'utf8')
  const parts = featSrc.split("slug: '").slice(1)
  for (const p of parts) {
    const slug = p.slice(0, p.indexOf("'"))
    const title = (p.match(/title: '((?:[^'\\]|\\.)*)'/) || [])[1] || ''
    const bodyM = p.match(/body: \[([\s\S]*?)\],\s*\n/)
    const body = []
    if (bodyM) {
      for (const m of bodyM[1].matchAll(/'((?:[^'\\]|\\.)*)'/g)) {
        body.push(m[1].replace(/\\'/g, "'").replace(/\\n/g, '\n'))
      }
    }
    const script = (p.match(/script: '((?:[^'\\]|\\.)*)'/) || [])[1] || ''
    const img = (p.match(/img: '((?:[^'\\]|\\.)*)'/) || [])[1] || ''
    const imgAlt = (p.match(/imgAlt: '((?:[^'\\]|\\.)*)'/) || [])[1] || ''
    out[slug] = { title, body, script: script.replace(/\\n/g, '\n'), img, imgAlt }
  }
  return out
}

const curated = parseFeatures()

const routes = []
let ok = 0
for (const loc of locs) {
  if (loc === 'https://www.zelix.com/') continue
  const rel = loc.replace('https://www.zelix.com/', '').replace(/\.html$/, '')
  const parts = rel.split('/')
  let routePath
  let comp
  let crumb
  if (parts[1] === 'index') continue
  if (parts[1] === 'features' && parts.length === 2) continue
  if (parts[1] === 'docs' && parts[2] === 'index') continue
  if (parts[0] === 'klassmaster' && parts[1].startsWith('features') && parts.length === 2) {
    const slug = parts[1]
    routePath = '/features/' + slug
    comp = 'Feature' + pascal(slug)
    crumb = 'Features'
  } else if (parts[1] === 'docs') {
    const page = parts[parts.length - 1]
    routePath = '/docs/' + page
    comp = 'Doc' + pascal(parts.slice(1).join('__'))
    crumb = 'Docs'
  } else if (parts.length === 2) {
    const name = parts[1]
    const map = {
      order: 'order', upgrades: 'upgrades', support: 'support', FAQ: 'faq',
      changes: 'changes', contactUs: 'contact', mailList: 'maillist',
      privacy: 'privacy', refunds: 'refunds', legals: 'terms', commercialLicense: 'license'
    }
    if (!map[name]) continue
    routePath = '/page/' + map[name]
    comp = 'Page' + pascal(map[name])
    crumb = 'Reference'
  } else {
    continue
  }
  try {
    const r = await fetch(loc)
    if (!r.ok) throw new Error('status ' + r.status)
    const data = extract(await r.text())
    const h1 = data.blocks.find((b) => b.tag === 'h1')?.text || data.blocks.find((b) => b.tag === 'h2')?.text || data.title || comp
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: h1,
      url: 'https://zkm-web.vercel.app' + routePath
    }
    const cur = curated[parts[1]] || null
    const pageTitle = (cur && cur.title) || h1
    const headTitle = JSON.stringify((data.title || pageTitle).slice(0, 120) + ' | Zelix KlassMaster')
    const ogSection = routePath.startsWith('/features') ? 'features' : routePath.startsWith('/docs') ? 'docs' : 'reference'
    const curatedHtml =
      cur && cur.body.length
        ? cur.body.map((t) => `        <p>${escHtml(t)}</p>\n`).join('') +
          (cur.img ? `        <img src="${cur.img}" alt="${escHtml(cur.imgAlt || cur.title)}" loading="lazy" style="max-width: 100%; border: 1px solid #d7dee5;">\n` : '') +
          (cur.script ? `        <h3>ZKM Script Sample</h3>\n        <pre class="code"><code>${escHtml(cur.script)}</code></pre>\n` : '')
        : ''
    const content =
      `<template>\n` +
      `  <div class="wrap">\n` +
      `    <section class="section">\n` +
      `      <p class="muted">${escHtml(crumb)}</p>\n` +
      `      <h1>${escHtml(pageTitle)}</h1>\n` +
      `      <div class="panel">\n` +
      curatedHtml +
      (curatedHtml ? `      </div>\n      <div class="panel" style="margin-top: 20px;">\n        <h2>Complete Local Copy</h2>\n` : '') +
      renderBlocks(data.blocks) +
      `      </div>\n` +
      `    </section>\n` +
      `  </div>\n` +
      `</template>\n\n` +
      `<script setup lang="ts">\n` +
      `import { useHead } from '@unhead/vue'\n` +
      `const schema = ${JSON.stringify(schema).replace(/<\//g, '<\\/')}\n` +
      `useHead({ title: ${headTitle}, meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/${ogSection}.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app${routePath}' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })\n` +
      `</` + `script>\n`
    await writeFile('src/views/auto/' + comp + '.vue', content)
    routes.push({ path: routePath, comp, title: data.title || h1 })
    ok++
    if (ok % 20 === 0) console.log(ok + ' views')
  } catch (e) {
    console.log('FAIL ' + loc + ' ' + String(e).slice(0, 80))
  }
}

const routeLines = routes
  .map((x) => `  { path: '${x.path}', component: () => import('./views/auto/${x.comp}.vue'), meta: { title: ${JSON.stringify(x.title.slice(0, 120) + ' | Zelix KlassMaster')}, desc: 'Complete local copy of this Zelix KlassMaster reference page.' } },`)
  .join('\n')
await writeFile(
  'src/autoRoutes.ts',
  `export const autoRoutes = [\n${routeLines}\n]\n`
)
console.log('views: ' + ok + ', routes: ' + routes.length)
