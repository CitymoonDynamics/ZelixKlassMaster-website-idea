import { writeFile } from 'node:fs/promises'
import { mkdirSync } from 'node:fs'
import sharp from 'sharp'

const base = 'https://www.zelix.com/klassmaster/images/'
const files = [
  'image4.gif',
  'toolsStackTraceTranslate.gif',
  'stackTraceTranslate0.gif',
  'stackTraceTranslate1.gif',
  'stackTraceTranslate2.gif',
  'toolsZKMScriptHelper.gif',
  'ZKMScript0.gif',
  'firstsect.gif',
  'nextsect.gif',
  'whiteline.jpg'
]

mkdirSync('public/img', { recursive: true })

for (const f of files) {
  const name = f.replace(/\.[^.]+$/, '')
  try {
    const res = await fetch(base + f)
    if (!res.ok) {
      console.log('MISS ' + f)
      continue
    }
    const buf = Buffer.from(await res.arrayBuffer())
    await writeFile('assets-raw/' + f, buf)
    await sharp(buf, { animated: false }).avif({ quality: 55 }).toFile('public/img/' + name + '.avif')
    const meta = await sharp('public/img/' + name + '.avif').metadata()
    console.log('OK ' + name + '.avif ' + meta.width + 'x' + meta.height)
  } catch (e) {
    console.log('FAIL ' + f + ' ' + String(e).slice(0, 100))
  }
}
