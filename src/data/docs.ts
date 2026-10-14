import { sourceUrls } from './sourceSitemap'

export interface DocEntry {
  slug: string
  kind: 'tutorial' | 'statement' | 'tool'
  title: string
  source: string
  summary: string
}

function titleOf(slug: string): string {
  return slug
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^(.)/, (c) => c.toUpperCase())
}

const summaries: Record<string, string> = {
  index: 'Documentation index. Entry point to tutorials, statement reference and GUI tools.',
  gettingStarted: 'Install, open classes, run the first obfuscation and save output with a mapping file.',
  install: 'Installation steps and JRE requirements for Windows, macOS and Linux.',
  compatibility: 'Supported Java versions, frameworks and bytecode sources including Kotlin.',
  stringEncryptionTutorial: 'Walks through string encryption modes and exclusion setup.',
  integerEncryptionTutorial: 'Walks through integer constant encryption and exclusions.',
  longEncryptionTutorial: 'Walks through long constant encryption and exclusions.',
  methodParameterChangesTutorial: 'Shows how signature changes harden encryption and references.',
  methodParameterObfuscationTutorial: 'Shows how to hide parameter lists safely.',
  referenceObfuscationTutorial: 'Shows selective reference hiding with includes and excludes.',
  trimTutorial: 'Shows dead code removal with entry point exclusions.',
  exclusionsTutorial: 'Master class on exclude and unexclude statements.',
  autoReflectionTutorial: 'Shows automatic handling of Reflection API calls.',
  incrementalObfuscation: 'Keeps mappings stable across releases with change logs.',
  jmeTutorial: 'Settings for Java ME and constrained devices.',
  proGuardTranslateTutorial: 'Converts ProGuard style mappings for stack trace decoding.',
  obfuscationSettingsAnnotationsTutorial: 'Controls obfuscation with source annotations.',
  reproducibleOutputTutorial: 'Produces byte identical output for auditable builds.',
  langZKMScript: 'Full ZKM Script language reference.',
  preprocessor: 'Script preprocessing with variables and conditional blocks.',
  buildToolApi: 'API for calling ZKM from custom build tooling.',
  buildToolAnt: 'Runs ZKM Scripts from Apache Ant.',
  buildToolGradle: 'Runs ZKM Scripts from Gradle.',
  buildToolMaven: 'Runs ZKM Scripts from Maven.',
  toolsZKMScriptHelper: 'GUI helper that generates ZKM Scripts from visual choices.',
  toolsStackTraceTranslate: 'GUI tool that decodes obfuscated stack traces with the mapping file.',
  toolsBuildHelper: 'GUI helper for build tool integration setup.',
  toolsProGuardTranslate: 'GUI tool for ProGuard mapping conversion.',
  toolsTrim: 'GUI panel for trim configuration and preview.',
  toolsObfuscate: 'GUI panel that runs the obfuscation pass.',
  mainFrame: 'Main application window and menu layout.',
  hierarchyPane: 'Class hierarchy browser for selecting obfuscation targets.',
  viewPane: 'Bytecode and mapping preview pane.',
  fileOpen: 'File open dialog and classpath resolution.',
  fileSaveAll: 'Save dialog that writes output archives and mapping files.',
  loadWarnings: 'Meaning of Class Open Warnings and how to fix them.',
  loadErrors: 'Meaning of Class Open Errors and how to fix them.',
  classProperties: 'Per class obfuscation properties in the GUI.',
  fieldProperties: 'Per field obfuscation properties in the GUI.',
  methodProperties: 'Per method obfuscation properties in the GUI.',
  constantProperties: 'Per constant encryption properties in the GUI.',
  trimExclude: 'GUI editor for trim exclusions.',
  obfuscateReferencesInclude: 'GUI editor for reference obfuscation includes.',
  jmePlugin: 'Plugin settings for Java ME builds.',
  chnglg1: 'Change log format version 1 used for incremental builds.'
}

function describe(slug: string, kind: DocEntry['kind']): string {
  if (summaries[slug]) return summaries[slug]
  const lower = slug.toLowerCase()
  if (lower.startsWith('reset')) return 'ZKM Script statement. Clears a previously set exclusion group so later rules start clean.'
  if (lower.endsWith('exclude') || lower.includes('exclude')) return 'ZKM Script statement. Excludes matching classes, fields or methods from an obfuscation pass.'
  if (lower.endsWith('unexclude') || lower.includes('unexclude')) return 'ZKM Script statement. Re includes items that an earlier exclusion removed.'
  if (lower.endsWith('include') || lower.includes('include')) return 'ZKM Script statement. Forces matching items into an obfuscation pass.'
  if (kind === 'tool') return 'GUI reference page for this ZKM workbench panel.'
  return 'ZKM Script statement reference. Exact syntax and options on the original documentation page.'
}

export const docEntries: DocEntry[] = sourceUrls
  .filter((u) => u.loc.includes('/docs/') && !u.loc.endsWith('/docs/index.html'))
  .map((u) => {
    const file = u.loc.split('/').pop() ?? ''
    const slug = file.replace(/\.html$/, '')
    const kind: DocEntry['kind'] =
      u.loc.includes('/tutorials/') ? 'tutorial' : u.section === 'DocGui' ? 'tool' : 'statement'
    return { slug, kind, title: titleOf(slug), source: u.loc, summary: describe(slug, kind) }
  })
  .sort((a, b) => a.slug.localeCompare(b.slug))

export function docBySlug(slug: string): DocEntry | undefined {
  return docEntries.find((d) => d.slug === slug)
}
