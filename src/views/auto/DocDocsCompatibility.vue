<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - Compatability</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Compatability</li>
          <li>Compatibility</li>
          <li>What do you need to run Zelix KlassMaster(TM)? Zelix KlassMaster(TM) is written entirely in Java 8 (i.e. JDK 1.8) and technically should run on any platform that supports a Java 8 or better Virtual Machine. However, note that Zelix KlassMaster(TM) version 10 or better requires a recent version of a Java 8 JVM or better to run. If you use an Oracle JVM earlier than 1.8.0_152 then you may get a JVM crash due to HotSpot bugs. Also note that Zelix KlassMaster(TM) version 27 currently may not run successfully on older versions (e.g. pre-Aug 2020) of the Eclipse OpenJ9 JVM due to a JVM bug.</li>
          <li>More generally, differences in the file systems and GUIs can also cause problems. Further, Zelix KlassMaster's flow obfuscation technology can expose bugs in some Just in Time (JIT) compilers.</li>
          <li>Zelix KlassMaster(TM) has been tested on:</li>
          <li>Windows 11(TM) 64bit using</li>
          <li>java version "1.8.0_503" Java HotSpot(TM) 64-Bit Server VM (build 25.503-b01, mixed mode)</li>
          <li>openjdk version "1.8.0_504" OpenJDK 64-Bit Server VM (Temurin)(build 25.504-b01, mixed mode)</li>
          <li>java version "11.0.32.1" 2026-08-18 LTS Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.32.1+1-LTS-5, mixed mode)</li>
          <li>java version "17.0.20.1" 2026-08-18 LTS Java HotSpot(TM) 64-Bit Server VM (build 17.0.20.1+1-LTS-4, mixed mode, sharing)</li>
          <li>java version "21.0.12.1" 2026-08-18 LTS Java HotSpot(TM) 64-Bit Server VM (build 21.0.12.1+1-LTS-4, mixed mode, sharing)</li>
          <li>java version "25.0.4.1" 2026-08-18 LTS Java HotSpot(TM) 64-Bit Server VM (build 25.0.4.1+1-LTS-5, mixed mode, sharing)</li>
          <li>openjdk version "25.0.4.1" 2026-08-18 LTS OpenJDK 64-Bit Server VM Temurin-25.0.4.1+1 (build 25.0.4.1+1-LTS, mixed mode, sharing)</li>
          <li>java version "26.0.2.1" 2026-08-18 Java HotSpot(TM) 64-Bit Server VM (build 26.0.2.1+1-7, mixed mode, sharing)</li>
          <li>openjdk version "26.0.2.1" 2026-08-18 OpenJDK 64-Bit Server VM Temurin-26.0.2.1+1 (build 26.0.2.1+1, mixed mode, sharing)</li>
          <li>openjdk version "27" 2026-09-15 OpenJDK 64-Bit Server VM (build 27+35-2325, mixed mode, sharing)</li>
          <li>Linux ( Xubuntu 22.04) using</li>
          <li>MacOS ( Tahoe 26.6.2) using</li>
        </ul>
        <h2>What can Zelix KlassMaster(TM) process?</h2>
        <p>What do you need to run Zelix KlassMaster(TM)?</p>
        <p>Zelix KlassMaster(TM) is written entirely in Java 8 (i.e. JDK 1.8) and technically should run on any platform that supports a Java 8 or better Virtual Machine.</p>
        <p>However, note that Zelix KlassMaster(TM) version 10 or better requires a recent version of a Java 8 JVM or better to run. If you use an Oracle JVM earlier than 1.8.0_152 then you may get a JVM crash due to HotSpot bugs.</p>
        <p>Also note that Zelix KlassMaster(TM) version 27 currently may not run successfully on older versions (e.g. pre-Aug 2020) of the Eclipse OpenJ9 JVM due to a JVM bug.</p>
        <p>However, Zelix KlassMaster(TM) 27 will not reliably run on IBM Semeru Runtimes that make use of the Eclipse OpenJ9 VM due to a suspected JIT compiler bug.</p>
        <p>If you use such a IBM Semeru Runtime then Zelix KlassMaster(TM) may throw an exception or the JVM may crash.</p>
        <p>Alternatively the obfuscated software produced may throw an exception or crash the JVM.</p>
        <p>This can be worked around by using the -Xint JVM command line option but at the cost of a dramatic loss of performance.</p>
        <p>The suspected JIT compiler bug has been reported to IBM.</p>
        <p>Zelix KlassMaster(TM) can process bytecode compiled for Java 9 through to 27 including modules.</p>
        <p>Of course, it can also process bytecode compiled for JDK 1.1.x, 1.2.x, 1.3.x, 1.4.x, 1.5.0, 1.6.0, 1.7.0 and 1.8.0 JVMs.</p>
        <p>However, it is highly recommended that you always set the internal classpath used by Zelix KlassMaster(TM) (i.e. the ZKM Script</p>
        <p>statement) to point to the bootstrap classes corresponding to the classes you are obfuscating.</p>
        <p>For Java 2 through to Java 8 that is the corresponding rt.jar . For Java 9 to Java 27 it is the corresponding lib\jrt-fs.jar file system.</p>
        <p>Note that if you use the Reference Obfuscation functionality on bytecode which is at the Java 8 level then your obfuscated bytecode will require a newer Java 8 or better JVM to run.</p>
        <p>For example, if you use an Oracle JVM earlier than 1.8.0_152 then you may get a JVM crash due to HotSpot bugs.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - Compatability",
  "url": "https://zkm-web.vercel.app/docs/compatibility"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - Compatability"
    }
  ]
}]
useHead({
  title: 'Compatability | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - Compatability | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/compatibility' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
