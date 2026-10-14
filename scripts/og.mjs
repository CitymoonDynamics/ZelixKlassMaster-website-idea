import { mkdir } from 'node:fs/promises'
import sharp from 'sharp'

const sections = {
  home: 'Java Protection',
  features: '20 Features',
  pricing: 'USD 290 and Up',
  docs: 'Docs and ZKM Script',
  support: 'Support and FAQ',
  contact: 'Contact Sales',
  legal: 'Terms and Privacy',
  sitemap: 'Full Sitemap',
  reference: 'Reference'
}

function textSvg(title) {
  const esc = title.replace(/&/g, '&amp;').replace(/</g, '&lt;')
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<text x="300" y="270" font-family="Arial, sans-serif" font-size="52" font-weight="bold" fill="#16202b">Zelix KlassMaster</text>
<text x="300" y="380" font-family="Arial, sans-serif" font-size="88" font-weight="bold" fill="#171AD0">${esc}</text>
<text x="300" y="440" font-family="Arial, sans-serif" font-size="30" fill="#4b5a68">Heavy duty Java obfuscator since 1997</text>
<rect x="300" y="480" width="180" height="6" fill="#171AD0"/>
</svg>`)
}

await mkdir('public/og', { recursive: true })
const logo = await sharp('assets-raw/logo.png').resize(128, 128, { kernel: 'nearest' }).png().toBuffer()
for (const [name, title] of Object.entries(sections)) {
  await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#ffffff' } })
    .composite([
      { input: logo, left: 120, top: 200 },
      { input: textSvg(title), left: 0, top: 0 }
    ])
    .png()
    .toFile(`public/og/${name}.png`)
  console.log('og/' + name + '.png')
}
