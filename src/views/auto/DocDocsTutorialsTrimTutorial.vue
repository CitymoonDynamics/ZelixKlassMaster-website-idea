<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - Trim Tutorial</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Trim Tutorial</li>
          <li>Trim Tutorial This tutorial is divided into the following sections:</li>
          <li>Overview</li>
          <li>How Trim Exclusions Works</li>
          <li>Default Trim Exclusions</li>
          <li>Trim Exclusions Using the GUI</li>
          <li>Trim Exclusion Troubleshooting</li>
          <li>Any class, field or method that is not explicitly or implicitly excluded will be deleted. So if you have no trim exclusions then every class, field and method will be deleted.</li>
          <li>If a class is implicitly or explicitly excluded then it will not be deleted. However, its fields and methods will be deleted unless they are otherwise excluded.</li>
          <li>If a field is implicitly or explicitly excluded and its containing class has also been implicitly or explicitly excluded then the field will not be deleted.</li>
          <li>If a method is implicitly or explicitly excluded and its containing class has also been implicitly or explicitly excluded then the method will not be deleted and</li>
          <li>all the classes, fields and methods directly or indirectly accessed by the method will be implicitly excluded from being trimmed.</li>
          <li>They override a method in a class that has not been opened for trimming. For example, if an opened class contains the method hashCode() then that method will be implicitly excluded because it overrides the corresponding method in java.lang.Object (which presumably has not been opened for obfuscation).</li>
          <li>They override a method that has been explicitly or implicitly excluded.</li>
          <li>For example, if you explicitly exclude the method method1() in a particular interface then the method method1() will be implicitly excluded in all classes that implement that interface.</li>
        </ul>
        <h3>Trimming "classic" applications</h3>
        <ul>
          <li>the public static main(java.lang.String[]) method and</li>
          <li>the class that contains the public static main(java.lang.String[]) method.</li>
        </ul>
        <pre class="code"><code>trimExclude com.mycompany.MyMainClass^ public static main(java.lang.String[]);</code></pre>
        <h3>Trimming applets</h3>
        <pre class="code"><code>trimExclude com.mycompany.Applet;</code></pre>
        <h3>Trimming class libraries and extensible frameworks</h3>
        <ul>
          <li>public classes and</li>
          <li>public fields and methods and the classes containing them</li>
        </ul>
        <pre class="code"><code>trimExclude public *.* and   //public classes in all packages
            *.* public * and //public fields in all classes in all packages
            *.* public *(*); //public methods in all classes in all packages</code></pre>
        <ul>
          <li>protected fields and methods and the classes containing them</li>
        </ul>
        <pre class="code"><code>trimExclude public *.* and      //public classes in all packages
            *.* public * and    //public fields in all classes in all packages
            *.* protected * and //protected fields in all classes in all packages
            *.* public *(*) and //public methods in all classes in all packages
            *.* protected *(*); //protected methods in all classes in all packages</code></pre>
        <ul>
          <li>set the Application Type to "Self contained application or applet"</li>
          <li>select the class containing the main(java.lang.String[]) method in the Application Entry Point Class list.</li>
          <li>select the applet class in the Application Entry Point Class list.</li>
          <li>set the Application Type to "Non-extensible class library"</li>
          <li>set the Application Entry Point Class to "none" .</li>
          <li>set the Application Type to "Extensible framework"</li>
          <li>Java Reflection API accesses to classes, fields and methods that Zelix KlassMaster(TM) was unable to fully resolve. (If Zelix KlassMaster(TM) was unable to fully resolve a Reflection API call then it will report the fact in the Class Open Warnings dialog or the Zelix KlassMaster(TM) log.}</li>
          <li>Specialized APIs (not catered for by the existing default exclusions) that directly access your classes, fields or methods.</li>
          <li>the effective trim exclude parameters (including the default exclusions)</li>
          <li>which classes, fields and methods were directly matched by an exclusion parameter</li>
          <li>which classes, fields and methods were deleted as part of the trim process.</li>
        </ul>
        <p>This tutorial is divided into the following sections:</p>
        <p>The Zelix KlassMaster(TM) Trim function deletes unused classes, fields and methods. It can also optionally delete specified attributes within bytecode.</p>
        <p>By doing this the Trim function reduces the overall size of your application.</p>
        <p>Trim exclusions specify the classes, fields and methods that should not be deleted by the "Trim" function.</p>
        <p>By default, the Trim function will delete all classes, fields and methods that have not been explicitly or implicitly excluded from being trimmed.</p>
        <p>If there are no trim exclusions at all then the Trim function will delete ALL opened classes along with their fields and methods.</p>
        <p>So, the way to understand the Trim function is to understand how trim exclusions are processed.</p>
        <p>If a method is implicitly or explicitly excluded and its containing class has also been implicitly or explicitly excluded then</p>
        <p>They override a method in a class that has not been opened for trimming.</p>
        <p>For example, if an opened class contains the method hashCode() then that method will be implicitly excluded because it overrides the corresponding method in java.lang.Object (which presumably has not been opened for obfuscation).</p>
        <p>For example, if you explicitly exclude the method</p>
        <p>in a particular interface then the method</p>
        <p>will be implicitly excluded in all classes that implement that interface.</p>
        <p>It is very important to note that the exclusion of classes and the fields and methods they contain are handled separately.</p>
        <p>As indicated by point 2 above, the exclusion of a class does not in itself exclude the fields and methods of that class.</p>
        <p>Also, as indicated by points 3 and 4 above, the exclusion of a field or method does not in itself exclude the class containing the field or method.</p>
        <p>This separation gives you the flexibility to specify that if a class contains a field named serialVersionUID</p>
        <p>and the class is not going to be deleted then do not delete the field named serialVersionUID .</p>
        <p>The final thing to note is that, as indicated by point 4b above, Zelix KlassMaster(TM) will trace all possible lines of execution from all methods that will not be deleted and implicitly exclude all classes, fields and methods that can be accessed directly or indirectly by the methods. This means that you do not have to explicitly exclude all classes, fields and methods that should not be deleted. Typically, you only need to explicitly exclude the "entry point" methods and the classes that contain them.</p>
        <p>If you are obfuscating a classic application with one public static main(java.lang.String[])</p>
        <p>method which is the only "entry point" into the application then you only need to explicitly exclude</p>
        <p>the public static main(java.lang.String[])</p>
        <p>the class that contains the public static main(java.lang.String[])</p>
        <p>Because the method public static main(java.lang.String[])</p>
        <p>will not be deleted, Zelix KlassMaster(TM) will trace all classes, fields and methods that are accessed directly or directly from that method and implicitly exclude them.</p>
        <p>A typical ZKM Script trimExclude statement for a classic application would be</p>
        <p>containing object exclusion tag that specifies that the containing class should also be excluded.</p>
        <p>If your application is a straightforward Applet then you only need to explicitly exclude the Applet class itself. The</p>
        <p>methods will be implicitly excluded because they override methods in the java.applet.Applet API (see point 5a above).</p>
        <p>Zelix KlassMaster(TM) will then implicitly exclude all classes, fields and methods accessed directly or indirectly by these methods.</p>
        <p>A typical ZKM Script trimExclude statement for an applet would be</p>
        <p>If you are trimming a class library then you need to exclude the classes, fields and methods that can be accessed by an application using the class library.</p>
        <p>Typically that means that you should exclude</p>
        <p>A typical ZKM Script trimExclude statement for a non-extensible class library would be</p>
        <p>trimExclude public *.* and //public classes in all packages *.* public * and //public fields in all classes in all packages *.* public *(*); //public methods in all classes in all packages</p>
        <p>If the class library is really an extensible framework then you typically should also exclude</p>
        <p>A typical ZKM Script trimExclude statement for an extensible framework would be</p>
        <p>trimExclude public *.* and //public classes in all packages *.* public * and //public fields in all classes in all packages *.* protected * and //protected fields in all classes in all packages *.* public *(*) and //public methods in all classes in all packages *.* protected *(*); //protected methods in all classes in all packages</p>
        <p>Zelix KlassMaster(TM) has some default trim exclusions that are applied everytime you trim.</p>
        <p>These default exclusions cover a number of APIs such as Serialization and RMI.</p>
        <p>For example, static final long serialVersionUID fields are excluded by default.</p>
        <p>The default exclusions are intended to free you from the need to specify general purposes exclusions that apply to a wide range of applications.</p>
        <p>However, you will almost always have to explicitly exclude you "entry point" methods and the classes that contain them.</p>
        <p>You may override these defaults with your own.</p>
        <p>Zelix KlassMaster(TM) looks for a file in the default directory (which is the current working directory unless you have specified otherwise) named "defaultTrimExclude.txt" .</p>
        <p>This file should either be empty or contain a single ZKM Script "trimeExclude" statement.</p>
        <p>If Zelix KlassMaster(TM) finds the file then it will use its contents as the default trim exclusions.</p>
        <p>If the defaultTrimExclude.txt file doesn't exist then Zelix KlassMaster(TM) applies its predefined internal default trim exclusions that are identical to those in the original defaultTrimExclude.txt file.</p>
        <p>If the defaultTrimExclude.txt file exists but is is empty then there are no default trim exclusions.</p>
        <p>Note that, in the Zelix KlassMaster(TM) GUI, the default trim exclusion parameters appear as disabled list entries in the "Exclusion parameter list" of the "Trim Exclusions" window.</p>
        <p>These disabled entries can only be altered by editing the "defaultTrimExclude.txt" file.</p>
        <p>method which is the only "entry point" into the application then you should</p>
        <p>method in the Application Entry Point Class list.</p>
        <p>If you are obfuscating an applet then you should</p>
        <p>If you are obfuscating a class library that is NOT going to be extended by your users then you should</p>
        <p>If you are obfuscating a class library that IS going to be extended by your users then you should</p>
        <p>The settings discussed above will be adequate for relatively straightforward applications. However, more complex application may require extra trim exclusions.</p>
        <p>You may even have to do a little experimentation with your trim exclusions. Some scenarios that can cause problems are</p>
        <p>Java Reflection API accesses to classes, fields and methods that Zelix KlassMaster(TM) was unable to fully resolve.</p>
        <p>(If Zelix KlassMaster(TM) was unable to fully resolve a Reflection API call then it will report the fact in the Class Open Warnings dialog or the Zelix KlassMaster(TM) log.}</p>
        <p>In such cases the best solution is to add explicit trim exclusions to tell Zelix KlassMaster(TM) that additional classes, fields or methods are indeed accessed.</p>
        <p>If you find yourself needing to debug your trim exclusions when running a ZKM Script then you may find it helpful to run Zelix KlassMaster(TM) using the "-v" (ie. verbose) parameter.</p>
        <p>This will result in a great deal of extra information being written to the log. This extra information will include</p>
        <p>Note that the list of trimmed classes, fields and methods is also written to the ZKM_TrimLog.txt file regardless of how you start Zelix KlassMaster.</p>
        <p>When debugging your trim exclusions, it can also be very useful to temporarily halt any name obfuscation by excluding all class, field and method names or by simply commenting out your "obfuscate" statement.</p>
        <p>With name obfuscation suspended any runtime stack traces you are getting will specify real class, field and methods names which usually makes the root cause of any trim problem obvious.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM) - Trim Tutorial","url":"https://zkm-web.vercel.app/docs/trimTutorial"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - Trim Tutorial | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/trimTutorial' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
