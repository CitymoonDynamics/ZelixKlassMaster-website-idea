import { writeFile } from 'node:fs/promises'
import { mkdirSync } from 'node:fs'
import sharp from 'sharp'

const base = 'https://www.zelix.com/klassmaster/images/'
const files = [
  'masthead.jpg',
  'Presentation3a.gif',
  'Licensees0a.gif',
  'tryIt.gif',
  'buyIt.gif',
  'Tab5aOn.jpg',
  'Tab5bOff.jpg',
  'Tab5cOff.jpg',
  'blueline.jpg',
  'sales.gif'
]

mkdirSync('public/img', { recursive: true })
mkdirSync('public/img/raw', { recursive: true })

for (const f of files) {
  const url = base + f
  const name = f.replace(/\.[^.]+$/, '')
  try {
    const res = await fetch(url)
    if (!res.ok) {
      console.log('MISS ' + url + ' status ' + res.status)
      continue
    }
    const buf = Buffer.from(await res.arrayBuffer())
    await writeFile('public/img/raw/' + f, buf)
    await sharp(buf, { animated: true }).avif({ quality: 55 }).toFile('public/img/' + name + '.avif')
    const meta = await sharp('public/img/' + name + '.avif').metadata()
    console.log('OK ' + name + '.avif ' + meta.width + 'x' + meta.height)
  } catch (e) {
    console.log('FAIL ' + url + ' ' + String(e).slice(0, 120))
  }
}
