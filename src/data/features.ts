export interface FeatureDetail {
  slug: string
  title: string
  source: string
  body: string[]
  script: string
  img?: string
  imgAlt?: string
}

export const features: FeatureDetail[] = [
  {
    slug: 'featuresNameObfuscation',
    title: 'Name Obfuscation',
    source: 'https://www.zelix.com/klassmaster/featuresNameObfuscation.html',
    body: [
      'First generation obfuscation. Renames packages, classes, methods and fields to short identifiers.',
      'Shorter names shrink class files, so this feature protects and optimizes at the same time.',
      'Overloaded and inherited names are resolved so renamed hierarchies stay consistent.'
    ],
    script: 'exclude "com.acme.api.*";'
  },
  {
    slug: 'featuresFlowObfuscation',
    title: 'Flow Obfuscation',
    source: 'https://www.zelix.com/klassmaster/featuresFlowObfuscation.html',
    body: [
      'Second generation control flow rewriting. Plain bytecode becomes goto heavy logic that decompilers cannot structure.',
      'Third generation flow builds on Method Parameter Changing for stronger opaque predicates.',
      'Methods can be excluded per package when flow rewriting costs too much performance.'
    ],
    script: 'obfuscateFlowExclude "com.acme.hotpath.*";'
  },
  {
    slug: 'featuresExceptionObfuscation',
    title: 'Exception Obfuscation',
    source: 'https://www.zelix.com/klassmaster/featuresExceptionObfuscation.html',
    body: [
      'Obfuscates exception handlers and error paths, which attackers often read first.',
      'Try catch ranges are restructured while preserving exact runtime semantics.'
    ],
    script: 'obfuscateExceptionsExclude "com.acme.api.*";'
  },
  {
    slug: 'featuresStringEncryption',
    title: 'String Encryption',
    source: 'https://www.zelix.com/klassmaster/featuresStringEncryption.html',
    body: [
      'Encrypts string literals. Zelix invented this technique for Java obfuscators.',
      'Modes: normal, aggressive, flow obfuscate and enhanced. Stronger modes cost size and CPU.',
      'Method Parameter Changing hardens encrypted strings against static decryption.'
    ],
    script: 'stringEncryption "aggressive";'
  },
  {
    slug: 'featuresIntegerEncryption',
    title: 'Integer Encryption',
    source: 'https://www.zelix.com/klassmaster/featuresIntegerEncryption.html',
    body: [
      'Encrypts int constants so magic numbers and keys do not appear in bytecode.',
      'Decryption happens at runtime through generated helper logic.'
    ],
    script: 'integerEncryption;'
  },
  {
    slug: 'featuresLongEncryption',
    title: 'Long Encryption',
    source: 'https://www.zelix.com/klassmaster/featuresLongEncryption.html',
    body: [
      'Encrypts long constants the same way integer encryption covers int values.',
      'Covers timestamps, serial keys and 64 bit magic numbers.'
    ],
    script: 'longEncryptionExclude "com.acme.proto.*";'
  },
  {
    slug: 'featuresReferenceObfuscation',
    title: 'Reference Obfuscation',
    source: 'https://www.zelix.com/klassmaster/featuresReferenceObfuscation.html',
    body: [
      'Hides selected field accesses and method calls behind indirection.',
      'Applied selectively so serialization, RMI and frameworks keep working.',
      'Pairs with Method Parameter Changing for resistance against analysis.'
    ],
    script: 'obfuscateReferencesExclude "com.acme.api.*";'
  },
  {
    slug: 'featuresMethodParameterChanges',
    title: 'Method Parameter Changes',
    source: 'https://www.zelix.com/klassmaster/featuresMethodParameterChanges.html',
    body: [
      'Changes method signatures by adding, removing or reordering parameters.',
      'Dramatically hardens string encryption, constant encryption and reference obfuscation.',
      'Foundation of the third generation flow obfuscation.'
    ],
    script: 'methodParameterChangesExclude "com.acme.api.*";'
  },
  {
    slug: 'featuresMethodParameterObfuscation',
    title: 'Method Parameter Obfuscation',
    source: 'https://www.zelix.com/klassmaster/featuresMethodParameterObfuscation.html',
    body: [
      'Hides method parameter lists. Invented by Zelix.',
      'Callers and targets are rewritten together so behavior is unchanged.'
    ],
    script: 'methodParameterObfuscationExclude "com.acme.api.*";'
  },
  {
    slug: 'featuresAutoReflection',
    title: 'AutoReflection',
    source: 'https://www.zelix.com/klassmaster/featuresAutoReflection.html',
    body: [
      'Detects Reflection API calls that static analysis cannot fully resolve.',
      'Handles them automatically instead of forcing manual exclusions.',
      'Saves days of configuration on reflection heavy codebases.'
    ],
    script: 'accessedByReflection "com.acme.plugin.*";'
  },
  {
    slug: 'featuresTrim',
    title: 'Trim',
    source: 'https://www.zelix.com/klassmaster/featuresTrim.html',
    body: [
      'Removes unused classes, fields and methods to shrink output JARs.',
      'Entry points and reflection targets need explicit exclusions.',
      'Usually combined with Name Obfuscation for maximum size reduction.'
    ],
    script: 'trimExclude "com.acme.Main";\ntrim;'
  },
  {
    slug: 'featuresSmartSave',
    title: 'Smart Save',
    source: 'https://www.zelix.com/klassmaster/featuresSmartSave.html',
    body: [
      'Updates JAR manifests, XML descriptors and resource references on save.',
      'Handles EJB deployment descriptors and renamed main classes.',
      'Prevents broken archives after aggressive renaming.'
    ],
    script: 'saveAll "dist/app-obf.jar" "dist/map.log";'
  },
  {
    slug: 'featuresZKMScript',
    title: 'ZKM Script Language',
    source: 'https://www.zelix.com/klassmaster/featuresZKMScript.html',
    body: [
      'Powerful scripting language that automates the whole obfuscation process.',
      'Scripts are reproducible and version controllable, unlike GUI clicks.',
      'Supports environment variables, preprocessing and build tool execution.'
    ],
    script: 'open "build/classes" "com.acme.*";\ntrim;\nsaveAll "dist/app-obf.jar";',
    img: '/img/ZKMScript0.avif',
    imgAlt: 'ZKM Script Helper screenshot'
  },
  {
    slug: 'featuresLineNumberScrambling',
    title: 'Line Number Scrambling',
    source: 'https://www.zelix.com/klassmaster/featuresLineNumberScrambling.html',
    body: [
      'Scrambles line number tables so beta stack traces reveal nothing.',
      'Real line numbers are recoverable with the mapping file.',
      'Lets beta customers report crashes without leaking source structure.'
    ],
    script: 'saveAll "dist/app-beta.jar" "dist/map.log";'
  },
  {
    slug: 'featuresIncrementalObfuscation',
    title: 'Incremental Obfuscation',
    source: 'https://www.zelix.com/klassmaster/featuresIncrementalObfuscation.html',
    body: [
      'Keeps name mappings stable across releases using the previous change log.',
      'Patches and plugins built against older releases keep linking.',
      'Feed the prior map.log as input change log on every release build.'
    ],
    script: 'open "build/classes" "com.acme.*";'
  },
  {
    slug: 'featuresStackTraceTranslate',
    title: 'Stack Trace Translate',
    source: 'https://www.zelix.com/klassmaster/featuresStackTraceTranslate.html',
    body: [
      'GUI tool that decodes obfuscated stack traces back to real names.',
      'Loads the mapping file produced during the obfuscated build.',
      'Makes production debugging effortless after full renaming.'
    ],
    script: 'saveAll "dist/app-obf.jar" "dist/map.log";',
    img: '/img/stackTraceTranslate0.avif',
    imgAlt: 'Stack Trace Translate tool screenshot'
  },
  {
    slug: 'featuresSupport',
    title: 'Serialization, RMI and Beans',
    source: 'https://www.zelix.com/klassmaster/featuresSupport.html',
    body: [
      'Default exclusions keep Serializable fields, RMI stubs and bean accessors working.',
      'Existing serialized classes can be pinned with dedicated statements.',
      'Review warnings when custom serialization logic is present.'
    ],
    script: 'existingSerializedClasses "com.acme.model.*";'
  },
  {
    slug: 'featuresJavaME',
    title: 'Java ME and JEE',
    source: 'https://www.zelix.com/klassmaster/featuresJavaME.html',
    body: [
      'Documented settings for Java ME, JEE, Spring, Hibernate and Android.',
      'Default exclusions cover common framework entry points.',
      'The FAQ lists exact settings for Android apps.'
    ],
    script: 'exclude "com.acme.entities.*";'
  },
  {
    slug: 'featuresGUI',
    title: 'GUI Interface',
    source: 'https://www.zelix.com/klassmaster/featuresGUI.html',
    body: [
      'Graphic interface for new users: hierarchy pane, view pane and property editors.',
      'ZKM Script Helper generates scripts from GUI choices.',
      'Class Open Warnings and Errors surface classpath problems early.'
    ],
    script: '// Generated by the ZKM Script Helper',
    img: '/img/image4.avif',
    imgAlt: 'Zelix KlassMaster GUI screenshot'
  },
  {
    slug: 'featuresBuildTool',
    title: 'Build Tool Interface',
    source: 'https://www.zelix.com/klassmaster/featuresBuildTool.html',
    body: [
      'Runs ZKM Scripts from Ant, Maven and Gradle.',
      'Obfuscation becomes one step of the CI pipeline.',
      'API access available for custom build tooling.'
    ],
    script: '// Called from build.xml, pom.xml or build.gradle'
  }
]
