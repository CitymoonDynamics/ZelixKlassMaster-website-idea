import { readFileSync, readdirSync, existsSync } from 'node:fs'

function walk(d) {
  let o = []
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = d + '/' + e.name
    if (e.isDirectory()) o = o.concat(walk(p))
    else o.push(p)
  }
  return o
}

const problems = []
const ok = (c, msg) => {
  if (!c) problems.push(msg)
}

// 1. Secrets scan
for (const p of walk('src')) {
  const t = readFileSync(p, 'utf8')
  if (/pri_01|live_[0-9a-f]{10,}|sk_live|pk_live|api[_-]?key\s*[:=]\s*['"][^'"]{8,}/i.test(t)) {
    ok(false, 'POSSIBLE SECRET in ' + p)
  }
}

// 2. Every sitemap local path must be a real route
const routesSrc = readFileSync('src/router.ts', 'utf8') + '\n' + readFileSync('src/autoRoutes.ts', 'utf8')
const routePaths = new Set([...routesSrc.matchAll(/path: '([^']+)'/g)].map((m) => m[1]))
import('./src/data/sourceSitemap.ts').catch(() => {})
const sm = readFileSync('src/data/sourceSitemap.ts', 'utf8')
const locs = [...sm.matchAll(/loc: '([^']+)'/g)].map((m) => m[1])
function local(loc) {
  const m = loc.match(/klassmaster\/(features[A-Za-z]+\.html)$/)
  if (m) return '/features/' + m[1].replace(/\.html$/, '')
  const d = loc.match(/klassmaster\/docs\/(?:tutorials\/)?([A-Za-z0-9]+\.html)$/)
  if (d) return '/docs/' + d[1].replace(/\.html$/, '')
  if (/klassmaster\/(index\.html)?$/.test(loc) || loc === 'https://www.zelix.com/') return '/'
  if (/features\.html$/.test(loc)) return '/features'
  if (/docs\/index\.html$/.test(loc)) return '/docs'
  const p = loc.match(/klassmaster\/([A-Za-z]+)\.html$/)
  if (p) {
    const map = { order: 'order', upgrades: 'upgrades', support: 'support', FAQ: 'faq', changes: 'changes', contactUs: 'contact', mailList: 'maillist', privacy: 'privacy', refunds: 'refunds', legals: 'terms', commercialLicense: 'license' }
    if (map[p[1]]) return '/page/' + map[p[1]]
  }
  return '???' + loc
}
let mapped = 0
for (const loc of locs) {
  const l = local(loc)
  if (l.startsWith('???')) ok(false, 'UNMAPPED ' + loc)
  else if (!routePaths.has(l)) ok(false, 'MISSING ROUTE ' + l + ' for ' + loc)
  else mapped++
}
console.log('mapped ' + mapped + '/' + locs.length)

// 3. Every auto route must have its vue file
const autoSrc = readFileSync('src/autoRoutes.ts', 'utf8')
for (const m of autoSrc.matchAll(/import\('([^']+)'\)/g)) {
  const f = 'src/' + m[1].replace('./', '')
  if (!existsSync(f)) ok(false, 'MISSING VIEW FILE ' + f)
}

// 4. Every img src must exist
for (const p of walk('src')) {
  if (!p.endsWith('.vue')) continue
  const t = readFileSync(p, 'utf8')
  for (const m of t.matchAll(/<img[^>]*src="([^"]+)"/g)) {
    const s = m[1]
    if (s.startsWith('/')) {
      if (!existsSync('public' + s)) ok(false, 'MISSING IMG ' + s + ' in ' + p)
      if (!s.endsWith('.avif') && !s.endsWith('.ico')) ok(false, 'NOT AVIF ' + s + ' in ' + p)
    }
  }
}

// 5. Em dashes anywhere in src
for (const p of walk('src')) {
  if (/[—–]/.test(readFileSync(p, 'utf8'))) ok(false, 'EMDASH in ' + p)
}

// 6. Outbound links rendered in views
for (const p of walk('src/views')) {
  const t = readFileSync(p, 'utf8')
  const outs = [...t.matchAll(/(href|to)="https?:\/\/[^"]*"/g)].map((x) => x[0])
  const bad = outs.filter((u) => u.includes('zelix.com'))
  if (bad.length) ok(false, 'OUTBOUND in ' + p + ': ' + bad.join(','))
}

console.log(problems.length ? 'PROBLEMS:\n' + problems.join('\n') : 'ALL CHECKS PASSED')
