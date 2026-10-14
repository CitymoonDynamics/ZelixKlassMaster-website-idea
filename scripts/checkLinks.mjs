import { readFileSync, readdirSync, existsSync } from 'node:fs'

function walk(d) {
  let o = []
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = d + '/' + e.name
    if (e.isDirectory()) o = o.concat(walk(p))
    else if (p.endsWith('.html')) o.push(p)
  }
  return o
}

function resolveFile(link) {
  const path = link.split('#')[0].split('?')[0]
  if (!path || path.startsWith('http') || path.startsWith('mailto:')) return null
  if (path === '/') return 'dist/index.html'
  const clean = path.replace(/\/$/, '')
  if (existsSync('dist' + clean + '.html')) return 'dist' + clean + '.html'
  if (existsSync('dist' + clean + '/index.html')) return 'dist' + clean + '/index.html'
  if (existsSync('dist' + clean)) return 'dist' + clean
  return 'MISSING:' + path
}

const pages = walk('dist')
console.log('html pages in dist: ' + pages.length)
const broken = []
const external = new Set()
for (const p of pages) {
  const h = readFileSync(p, 'utf8')
  for (const m of h.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = m[1]
    if (/^https?:\/\//.test(url)) {
      if (!url.includes('zkm-web.vercel.app')) external.add(url)
      continue
    }
    if (url.startsWith('mailto:') || url.startsWith('#') || url.startsWith('data:')) continue
    const r = resolveFile(url)
    if (r && r.startsWith('MISSING')) broken.push(p.replace('dist', '') + ' -> ' + url)
  }
}
console.log('external urls: ' + [...external].join(', '))
console.log(broken.length ? 'BROKEN (' + broken.length + '):\n' + [...new Set(broken)].slice(0, 40).join('\n') : 'NO BROKEN LINKS')
console.log('404.html: ' + existsSync('dist/404.html'))
console.log('sitemap.xml: ' + existsSync('dist/sitemap.xml') + ', robots: ' + existsSync('dist/robots.txt') + ', llms: ' + existsSync('dist/llms.txt'))
