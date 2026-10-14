import { readFileSync, readdirSync } from 'node:fs'

const VOID = new Set(['img', 'br', 'input', 'meta', 'link', 'hr'])
const dir = 'src/views/auto'
for (const f of readdirSync(dir).filter((x) => x.endsWith('.vue'))) {
  const src = readFileSync(dir + '/' + f, 'utf8')
  const tpl = src.slice(0, src.indexOf('</template>'))
  const stack = []
  const errors = []
  const re = /<(\/?)(template|div|section|p|ul|ol|li|h1|h2|h3|pre|code|img|br|input|span|a|button|form|label|select|option|textarea)\b([^>]*?)(\/?)>/g
  let m
  while ((m = re.exec(tpl)) !== null) {
    const [, close, tag, , selfClose] = m
    if (VOID.has(tag) || selfClose === '/') continue
    if (close === '/') {
      if (stack.length && stack[stack.length - 1] === tag) stack.pop()
      else errors.push(`stray </${tag}> (stack: ${stack.slice(-2).join(',') || 'empty'})`)
    } else {
      stack.push(tag)
    }
  }
  for (const t of stack) errors.push(`unclosed <${t}>`)
  if (errors.length) {
    console.log('=== ' + f)
    for (const e of errors.slice(0, 8)) console.log('  ' + e)
  }
}
console.log('scan done')
