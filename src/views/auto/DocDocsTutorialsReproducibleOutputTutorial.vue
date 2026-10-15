<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - Reproducible Obfuscated Output Tutorial</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Reproducible Obfuscated Output Tutorial</li>
          <li>Reproducible Obfuscated Output Tutorial This tutorial is divided into the following sections:</li>
          <li>Overview</li>
          <li>Additional Options</li>
          <li>Caution</li>
          <li>The files that you open for obfuscation of course must be absolutely identical across builds,</li>
          <li>Your ZKM Script must always use exactly the same settings,</li>
          <li>You must specify the ZKM_USE_PARALLEL =false configuration option,</li>
          <li>You must specify the ZKM_REPRODUCIBLE_RANDOM =true configuration option,</li>
          <li>You must set the ZKM_RANDOM_SEED configuration option to some consistent long value and</li>
          <li>You must specify a consistent last modified time on your ZKM Script saveAll statement so that all saved archive entries are given the same consistent last modified date,</li>
          <li>If there are nested archives which are being skipped and you require the skipped nested archives to retain their original last modified time then you must specify the ZKM_KEEP_SKIPPED_LAST_MODIFIED_DATE =true configuration option.</li>
        </ul>
        <p>This tutorial is divided into the following sections:</p>
        <p>There may be scenarios where you may require your obfuscated output to be reproducible at the byte level.</p>
        <p>For example, you may wish your ouput files to have exactly the same SHA-256 values across builds. You can achieve this using Zelix KlassMaster(TM) if the following requirements are satisfied.</p>
        <p>For example (in Windows(TM)), you could use a command line like the following.</p>
        <p>java -D"ZKM_USE_PARALLEL=false" -D"ZKM_REPRODUCIBLE_RANDOM=true" -D"ZKM_RANDOM_SEED=962008" -jar ZKM.jar MyScript.txt</p>
        <p>If you are specifying reproducible obfuscated output then you can optionally also specify additional options on your ZKM Script open statement.</p>
        <p>You can use the expectedInitial_SHA256 and expectedFinal_SHA256 parameters so that you can get a quick fatal error if the files you are opening for obfuscation or your saved obfuscated output is not exactly as expected.</p>
        <p>Even though you are specifying reproducible obfuscated output, you can also optionally specify randomize=true on your ZKM Script obfuscate statement.</p>
        <p>This is somewhat counter-inuitive but specifing randomize=true increases the initial degree of randomness for a given ZKM_RANDOM_SEED value without compromizing reproducibility provided the ZKM_REPRODUCIBLE_RANDOM =true option is also used.</p>
        <p>Randomness is essential for effective obfuscation. For this reason it is essential that your ZKM_RANDOM_SEED value be randomly generated and changed whenever it is practicable.</p>
        <p>The use of the obfuscate statement's randomize=true option (discussed above) is highly recommended.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - Reproducible Obfuscated Output Tutorial",
  "url": "https://zkm-web.vercel.app/docs/reproducibleOutputTutorial"
}, {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://zkm-web.vercel.app/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Docs",
      "item": "https://zkm-web.vercel.app/docs"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - Reproducible Obfuscated Output Tutorial"
    }
  ]
}]
useHead({
  title: 'Reproducible Obfuscated Output Tutorial | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - Reproducible Obfus | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/reproducibleOutputTutorial' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
