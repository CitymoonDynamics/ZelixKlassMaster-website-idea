<template>
  <div class="wrap">
    <section class="section">
      <h1>ZKM Java Obfuscator Features</h1>
      <p class="muted">Faithful summary of klassmaster/features.html and its 20 detail pages. First generation: Name Obfuscation. Second generation: Flow, String Encryption and Reference. Third generation: enhanced Flow built on Method Parameter Changing.</p>
      <div class="panel">
        <table class="list-table">
          <thead><tr><th>Feature</th><th>Category</th><th>Technical Description</th></tr></thead>
          <tbody>
            <tr v-for="f in items" :key="f.slug"><td><strong><RouterLink :to="'/features/' + f.slug">{{ f.name }}</RouterLink></strong></td><td>{{ f.cat }}</td><td>{{ f.desc }}</td></tr>
          </tbody>
        </table>
      </div>
      <h3>Engineering Notes</h3>
      <div class="panel">
        <dl>
          <dt>Aggressive String Encryption</dt><dd>Modes: normal, aggressive, flow obfuscate and enhanced. Method Parameter Changing hardens encryption against reversal.</dd>
          <dt>Selective Reference Obfuscation</dt><dd>Hides selected field accesses or method calls without breaking serialization or RMI.</dd>
          <dt>Trim and GC</dt><dd>Removes unused classes, fields and methods. ResourceBundles need explicit exclusions.</dd>
          <dt>ZKM Script</dt><dd>Reproducible scripting language. Minimal example under Docs. Supports environment variables and Ant, Maven and Gradle execution.</dd>
        </dl>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'
useHead({ title: 'Features | Zelix KlassMaster Java Obfuscator', meta: [{ name: 'description', content: 'All 20 Zelix KlassMaster protection features: Flow Obfuscation, String Encryption, Reference Obfuscation, Trim, ZKM Script and more.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/features.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/features' }] })
const items = [
  { slug: 'featuresNameObfuscation', name: 'Name Obfuscation', cat: 'Protection / Size', desc: 'Renames packages, classes, methods and fields. Shrinks bytecode.' },
  { slug: 'featuresFlowObfuscation', name: 'Flow Obfuscation', cat: 'Protection', desc: 'Rewrites control flow in second and third generation. Blocks decompilers.' },
  { slug: 'featuresExceptionObfuscation', name: 'Exception Obfuscation', cat: 'Protection', desc: 'Obfuscates exception handling and error paths.' },
  { slug: 'featuresStringEncryption', name: 'String Encryption', cat: 'Protection', desc: 'Encrypts string literals. Invented by Zelix.' },
  { slug: 'featuresIntegerEncryption', name: 'Integer Encryption', cat: 'Protection', desc: 'Encrypts int constants in bytecode.' },
  { slug: 'featuresLongEncryption', name: 'Long Encryption', cat: 'Protection', desc: 'Encrypts long constants in bytecode.' },
  { slug: 'featuresReferenceObfuscation', name: 'Reference Obfuscation', cat: 'Protection', desc: 'Hides field and method references selectively.' },
  { slug: 'featuresMethodParameterChanges', name: 'Method Parameter Changes', cat: 'Protection', desc: 'Changes signatures to harden encryption and references.' },
  { slug: 'featuresMethodParameterObfuscation', name: 'Method Parameter Obfuscation', cat: 'Protection', desc: 'Hides method parameter lists. Invented by Zelix.' },
  { slug: 'featuresAutoReflection', name: 'AutoReflection', cat: 'Usability', desc: 'Handles unresolved Reflection API calls automatically.' },
  { slug: 'featuresTrim', name: 'Trim', cat: 'Size', desc: 'Removes dead code: unused classes, fields and methods.' },
  { slug: 'featuresSmartSave', name: 'Smart Save', cat: 'Usability', desc: 'Updates JAR manifests, XML files and EJB descriptors on save.' },
  { slug: 'featuresZKMScript', name: 'ZKM Script', cat: 'Automation', desc: 'Powerful scripting to integrate obfuscation into the build.' },
  { slug: 'featuresLineNumberScrambling', name: 'Line Number Scrambling', cat: 'Maintenance', desc: 'Recover real line numbers without exposing code.' },
  { slug: 'featuresIncrementalObfuscation', name: 'Incremental Obfuscation', cat: 'Maintenance', desc: 'Consistent name mapping across releases.' },
  { slug: 'featuresStackTraceTranslate', name: 'Stack Trace Translate', cat: 'Maintenance', desc: 'GUI tool to decode obfuscated stack traces.' },
  { slug: 'featuresSupport', name: 'Serialization, RMI and Beans', cat: 'Compatibility', desc: 'Default exclusions for serialization and RMI.' },
  { slug: 'featuresJavaME', name: 'Java ME and JEE', cat: 'Compatibility', desc: 'Documented support for ME, JEE, Spring and Hibernate.' },
  { slug: 'featuresGUI', name: 'GUI', cat: 'Usability', desc: 'Graphic interface for new users and hierarchy review.' },
  { slug: 'featuresBuildTool', name: 'Build Tool Interface', cat: 'Automation', desc: 'Run from Ant, Maven and Gradle through the API.' }
]
</script>
