import { writeFileSync, mkdirSync, readFileSync } from 'node:fs'

const SITE_URL = (readFileSync('.env', 'utf8').match(/^SITE_URL=(.+)$/m) || [])[1]?.trim()
  ?? process.env.SITE_URL
  ?? 'https://zkm-web.vercel.app'
const base = SITE_URL
const date = new Date().toISOString().slice(0, 10)
const routes = ['', '/features', '/pricing', '/docs', '/support', '/contact', '/legal', '/sitemap',
  '/page/order', '/page/upgrades', '/page/support', '/page/faq', '/page/changes',
  '/page/contact', '/page/maillist', '/page/privacy', '/page/refunds', '/page/terms', '/page/license']

const featSrc = readFileSync('src/data/features.ts', 'utf8')
for (const m of featSrc.matchAll(/slug:\s*'([^']+)'/g)) {
  routes.push('/features/' + m[1])
}

const sitemapSrc = readFileSync('src/data/sourceSitemap.ts', 'utf8')
for (const m of sitemapSrc.matchAll(/klassmaster\/docs\/(?:tutorials\/)?([^"'\s/]+\.html)/g)) {
  routes.push('/docs/' + m[1].replace(/\.html$/, ''))
}

const seen = [...new Set(routes)]
const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  seen.map((r) => `  <url><loc>${base}${r === '' ? '/' : r}</loc><lastmod>${date}</lastmod></url>`).join('\n') +
  '\n</urlset>\n'

mkdirSync('dist', { recursive: true })
writeFileSync('dist/sitemap.xml', xml)
console.log('sitemap written with ' + seen.length + ' urls')

const llms =
  '# Zelix KlassMaster\n\n' +
  'Heavy duty Java obfuscator since 1997. Flow Obfuscation, string and constant encryption, Reference Obfuscation, Trim and ZKM Script. Licenses from USD 290.\n\n' +
  '## Pages\n\n' +
  seen.map((r) => `- ${base}${r === '' ? '/' : r}`).join('\n') +
  '\n'
writeFileSync('public/llms.txt', llms)
writeFileSync('dist/llms.txt', llms)
console.log('llms.txt written')
