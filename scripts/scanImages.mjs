const pages = [
  'https://www.zelix.com/klassmaster/featuresGUI.html',
  'https://www.zelix.com/klassmaster/docs/toolsStackTraceTranslate.html',
  'https://www.zelix.com/klassmaster/docs/mainFrame.html',
  'https://www.zelix.com/klassmaster/docs/hierarchyPane.html',
  'https://www.zelix.com/klassmaster/docs/gettingStarted.html',
  'https://www.zelix.com/klassmaster/docs/toolsZKMScriptHelper.html',
  'https://www.zelix.com/klassmaster/docs/index.html'
]
const found = new Map()
for (const u of pages) {
  try {
    const r = await fetch(u)
    const t = await r.text()
    for (const m of t.matchAll(/src="([^"]+\.(?:gif|jpg|png))"/g)) {
      const abs = new URL(m[1], u).href
      if (!found.has(abs)) found.set(abs, u)
    }
  } catch {
    console.log('FAIL ' + u)
  }
}
for (const [k, v] of found) console.log(k + '  FROM ' + v)
