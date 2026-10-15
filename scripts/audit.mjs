import { readFileSync, readdirSync } from 'node:fs'

const dir = 'src/views/auto'
const rows = readdirSync(dir)
  .filter((f) => f.endsWith('.vue'))
  .map((f) => {
    const v = readFileSync(dir + '/' + f, 'utf8')
    const tpl = v.slice(0, v.indexOf('</template>'))
    const text = tpl.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
    const js = /priceId|Paddle\.|console\.log|Checkout\.open|__doPostBack/.test(text) ? 1 : 0
    const h1 = (tpl.match(/<h1>(.*?)<\/h1>/) || [])[1] ?? ''
    return { f, chars: text.length, js, h1: h1.slice(0, 50) }
  })
rows.sort((a, b) => a.chars - b.chars)
console.log('THINNEST 15:')
for (const r of rows.slice(0, 15)) console.log(r.chars + ' chars, js=' + r.js + ' :: ' + r.f + ' :: ' + r.h1)
console.log('WITH JS CODE:')
for (const r of rows.filter((r) => r.js > 0)) console.log(r.chars + ' chars :: ' + r.f)
console.log('total views: ' + rows.length)
