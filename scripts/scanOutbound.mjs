import { readFileSync, readdirSync } from 'node:fs'

function walk(d) {
  let o = []
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = d + '/' + e.name
    if (e.isDirectory()) o = o.concat(walk(p))
    else if (/\.(vue|ts)$/.test(p)) o.push(p)
  }
  return o
}
for (const p of walk('src')) {
  const t = readFileSync(p, 'utf8')
  const hits = t.match(/https?:\/\/(www\.)?zelix\.com[^\s"']*/g)
  if (hits) console.log(p + ': ' + [...new Set(hits)].join(' | '))
}
console.log('scan done')
