import { readFileSync, writeFileSync } from 'node:fs'

function faqPairs(template) {
  const lines = template.split('\n')
  const pairs = []
  let current = null
  for (const line of lines) {
    const q = line.match(/<h3>Q\d+\.\s*(.*?)<\/h3>/)
    if (q) {
      current = { name: q[1].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'), answers: [] }
      pairs.push(current)
      continue
    }
    const p = line.match(/<(?:p|li)>(.*?)<\/(?:p|li)>/) || line.match(/<code>(.*?)<\/code>/)
    if (p && current) {
      const t = p[1].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
      if (t.length > 20 && !/^(home|features|try it|buy it|upgrade it|support|contact us|overview)$/i.test(t)) current.answers.push(t)
    }
  }
  return pairs
    .filter((x) => x.answers.length)
    .map((x) => ({
      '@type': 'Question',
      name: x.name,
      acceptedAnswer: { '@type': 'Answer', text: x.answers.join(' ').slice(0, 800) }
    }))
}

export function faqSchema(template) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqPairs(template)
  }
}

const isCli = process.argv[1] && process.argv[1].endsWith('faqSchema.mjs')
if (isCli) {
  const file = 'src/views/auto/PageFaq.vue'
  let vue = readFileSync(file, 'utf8')
  const tpl = vue.slice(0, vue.indexOf('</template>'))
  const faq = faqSchema(tpl)
  console.log('pairs: ' + faq.mainEntity.length)
  const cur = (vue.match(/const schema = (.*?)\nuseHead/) || [])[1]
  if (!cur) {
    console.log('NOSCHEMA')
    process.exit(1)
  }
  const web = cur.startsWith('[') ? cur.slice(1, cur.indexOf('}, {')) + '}' : cur
  const schemaLine = `const schema = [${web}, ${JSON.stringify(faq)}]`
  vue = vue.replace(/const schema = .*?\nuseHead/, () => schemaLine + '\nuseHead')
  writeFileSync(file, vue)
  console.log('faq schema injected')
}
