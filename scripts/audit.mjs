import { readFileSync, readdirSync } from 'node:fs'
const files = readdirSync('public/content').filter((f) => f.endsWith('.json') && f !== 'index.json')
const rows = files.map((f) => {
  const d = JSON.parse(readFileSync('public/content/' + f, 'utf8'))
  const chars = d.blocks.reduce((n, b) => n + b.text.length, 0)
  const js = d.blocks.filter((b) => /[{}`;]/.test(b.text) && /(function|priceId|token|Paddle|var |let )/.test(b.text)).length
  return { f, blocks: d.blocks.length, chars, js }
})
rows.sort((a, b) => a.chars - b.chars)
console.log('THINNEST 15:')
for (const r of rows.slice(0, 15)) console.log(r.chars + ' chars, ' + r.blocks + ' blocks, js=' + r.js + ' :: ' + r.f)
console.log('WITH JS CODE:')
for (const r of rows.filter((r) => r.js > 0)) console.log(r.chars + ' chars, js=' + r.js + ' :: ' + r.f)
