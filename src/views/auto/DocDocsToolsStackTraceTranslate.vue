<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - Stack Trace Translate</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Stack Trace Translate</li>
          <li>Tools | Stack Trace Translate</li>
          <li>Overview The "Stack Trace Translate" tool translates a stack trace produced by obfuscated bytecode by replacing obfuscated class and method names with the unobfuscated equivalents. If you used Zelix KlassMaster's line number scrambling feature then the scrambled line numbers will be translated to the original numbers. The tool reads the change log that you created when obfuscating your classes and, ideally, it will also analyze the obfuscated bytecode itself.</li>
          <li>By analyzing the obfuscated bytecode, the Stack Trace Translate tool can usually identify a single original method for each obfuscated method name in the stack trace, even if line numbers are not present in the stack trace . Alternatively, if you do not specify the path to your obfuscated bytecode, then the Stack Trace Translate tool will not be able to distinguish between overloaded obfuscated method names and it will have to present you with a list of possible alternative original method names.</li>
          <li>Note that there is also an API that allows you to call the Stack Trace Translate tool from another program.</li>
          <li>Obfuscated stack trace</li>
          <li>Exception in thread "main" java.lang.NullPointerException at a.a.c.a(c.java:7) at a.a.b.a(b.java:7) at a.a.a.a(a.java:3) at a.a.a.main(a.java:10)</li>
          <li>Translated stack trace if obfuscated bytecode is analyzed</li>
          <li>Exception in thread "main" java.lang.NullPointerException at com.mycompany.MyClass2.method1(String)(MyClass2.java:9) at com.mycompany.MyClass1.method1(String)(MyClass1.java:9) at com.mycompany.MyClass0.method1(String)(MyClass0.java:9) at com.mycompany.MyClass0.main(String[])(MyClass0.java:25)</li>
          <li>Translated stack trace if obfuscated bytecode is NOT analyzed</li>
          <li>NOTE: Obfuscated bytecode not analyzed so there could be multiple possible methods for each trace line. Exception in thread "main" java.lang.NullPointerException at com.mycompany.MyClass2.method1(String) method2() at com.mycompany.MyClass1.method1(String) method2() at com.mycompany.MyClass0.method1(String) method2() method3(String, int) at com.mycompany.MyClass0.main(String[])(MyClass0.java:25)</li>
          <li>Basics You can start the Stack Trace Translate tool at any time by selecting the "Tools | Stack Trace Translate" menu.</li>
          <li>The first step is to select your change log file by clicking on to the right of the in the "Change log file" label to browse for the file. You should select the change log that was produced when you obfuscated the bytecode that generated the stack trace. The selected file name will appear in the field to the left of the button. You must specify a change log.</li>
          <li>You can select more than one change log. However, you would only need to do that in unusual circumstances. For example, you would have to specify more than one change log if the bytecode that generated the stack trace consisted of a number of components which was obfuscated separately.</li>
          <li>It is highly recommended that you then specify the obfuscated bytecode classpath that the Stack Trace Translate tool should use to find the obfuscated bytecode that generated the stack trace. You do this by clicking on the to the right of the in the "Obfuscated bytecode" label.</li>
          <li>After clicking on the to the right of the in the "Obfuscated bytecode" label you will be presented with the Obfuscated Bytecode Classpath dialog that will allow you to specify</li>
          <li>the path to your obfuscated bytecode,</li>
          <li>the path to any class libraries that your obfuscated bytecode requires to be able to run,</li>
          <li>the path to the Java bootstrap classes (eg. java.lang.Object ).</li>
          <li>paste the stack trace that you wish to tranlsate into the "Paste original stack trace here" area,</li>
          <li>click on to obtain the translated details which appear in the "Translated stack trace will appear here" area.</li>
        </ul>
        <p>The "Stack Trace Translate" tool translates a stack trace produced by obfuscated bytecode by replacing obfuscated class and method names with the unobfuscated equivalents.</p>
        <p>If you used Zelix KlassMaster's line number scrambling feature then the scrambled line numbers will be translated to the original numbers.</p>
        <p>The tool reads the change log that you created when obfuscating your classes and, ideally, it will also analyze the obfuscated bytecode itself.</p>
        <p>By analyzing the obfuscated bytecode, the Stack Trace Translate tool can usually identify a single original method for each obfuscated method name in the stack trace,</p>
        <p>even if line numbers are not present in the stack trace .</p>
        <p>Alternatively, if you do not specify the path to your obfuscated bytecode, then the Stack Trace Translate tool will not be able to distinguish between overloaded obfuscated method names and it will have to present you with a list of possible alternative original method names.</p>
        <p>NOTE: Obfuscated bytecode not analyzed so there could be multiple possible methods for each trace line.</p>
        <p>Exception in thread "main" java.lang.NullPointerException at com.mycompany.MyClass2.method1(String) method2() at com.mycompany.MyClass1.method1(String) method2() at com.mycompany.MyClass0.method1(String) method2() method3(String, int) at com.mycompany.MyClass0.main(String[])(MyClass0.java:25)</p>
        <p>You can start the Stack Trace Translate tool at any time by selecting the "Tools | Stack Trace Translate" menu.</p>
        <p>The first step is to select your change log file by clicking on</p>
        <p>to the right of the in the "Change log file" label to browse for the file.</p>
        <p>You should select the change log that was produced when you obfuscated the bytecode that generated the stack trace.</p>
        <p>The selected file name will appear in the field to the left of the button. You must specify a change log.</p>
        <p>You can select more than one change log. However, you would only need to do that in unusual circumstances.</p>
        <p>For example, you would have to specify more than one change log if the bytecode that generated the stack trace consisted of a number of components which was obfuscated separately.</p>
        <p>It is highly recommended that you then specify the obfuscated bytecode classpath that the Stack Trace Translate tool should use to find the obfuscated bytecode that generated the stack trace.</p>
        <p>You do this by clicking on the to the right of the in the "Obfuscated bytecode" label.</p>
        <p>the path to the Java bootstrap classes (eg.</p>
        <p>Note that the classpath must allow the Stack Trace Translate tool to find java.lang.Object and all the classes that your application requires to be able to run.</p>
        <p>For Java 2 through to Java 8 java.lang.Object is in the corresponding rt.jar. For Java 9 to Java 27 you would add the corresponding lib\jrt-fs.jar to the obfuscated bytecode classpath.</p>
        <p>Note also that Zelix KlassMaster(TM) will look inside of any archives appearing in the specified classpath and recursively add any embedded archives to the effective classpath.</p>
        <p>So, if you have an archive myJar.jar in your obfuscated bytecode classpath which contains another archive named embedded.jar then both myJar.jar and embedded.jar will be in the effective classpath.</p>
        <p>You can import or export a classpath from or to a text file by clicking on the or buttons.</p>
        <p>If you choose to not set the obfuscated bytecode path then you should deselect the "Analyze obfuscated bytecode" checkbox so that the tool knows to ignore the classpath setting.</p>
        <p>click on to obtain the translated details which appear in the</p>
        <p>"Translated stack trace will appear here" area.</p>
        <p>Again, note that if you do not specify that the obfuscated bytecode be analyzed then more than one original method name may match each obfuscated method name in the stack trace.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM) - Stack Trace Translate","url":"https://zkm-web.vercel.app/docs/toolsStackTraceTranslate"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - Stack Trace Translate | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/toolsStackTraceTranslate' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
