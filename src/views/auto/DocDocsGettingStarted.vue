<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - Getting Started</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Getting Started</li>
          <li>Getting Started</li>
          <li>Overview. This document consists of the following sections.</li>
          <li>Introduction,</li>
          <li>The Processing Sequence,</li>
          <li>Using the GUI,</li>
          <li>Creating your first ZKM Script,</li>
          <li>Executing your first ZKM Script and</li>
          <li>Which obfuscation options to use.</li>
        </ul>
        <h3>Introduction.</h3>
        <ul>
          <li>is more suited to the task of repeated obfuscation than is the GUI interface,</li>
          <li>is less prone to human error,</li>
          <li>provides extra functionality that is not available through the GUI interface,</li>
          <li>allows you to integrate the obfuscation step into an automated build process and</li>
          <li>allows us to exchange ZKM Scripts with you which makes the support process much, much easier.</li>
        </ul>
        <h3>The Processing Sequence.</h3>
        <ul>
          <li>Set the classpath that Zelix KlassMaster(TM) should use, ( GUI | ZKM Script )</li>
          <li>Open the classes that you wish to obfuscate, ( GUI | ZKM Script )</li>
          <li>Set your Trim exclusions, ( GUI | ZKM Script )</li>
          <li>Set your Trim options and perform the trimming, ( GUI | ZKM Script )</li>
          <li>Set your name obfuscation exclusions, ( GUI | ZKM Script )</li>
          <li>Set your obfuscation options and obfuscate, ( GUI | ZKM Script )</li>
          <li>Save your obfuscated classes. ( GUI | ZKM Script )</li>
        </ul>
        <h3>Using the GUI.</h3>
        <h3>Creating your first ZKM Script.</h3>
        <h3>Executing your first ZKM Script.</h3>
        <ul>
          <li>the effective exclude parameters (including the default exclusions) and</li>
          <li>which classes, fields or methods were directly matched by a particular exclusion parameter.</li>
        </ul>
        <pre class="code"><code>exclude 
   public *.^* and  //exclude names of public classes &amp; containing packages
   *.* public * and  //exclude public field names
   *.* protected * and  //exclude protected field names
   *.* public *(*) and  //exclude public method names
   *.* protected *(*)  //exclude protected method names
   ;</code></pre>
        <p>This document consists of the following sections.</p>
        <p>This document assumes that you have Zelix KlassMaster(TM) installed successfully. If you do not yet have Zelix KlassMaster(TM) running then see the Installation document.</p>
        <p>Zelix KlassMaster(TM) has two interfaces - the GUI interface and the command line</p>
        <p>ZKM Script interface. The GUI interface is provided as a way of quickly becoming familiar with the basic concepts of obfuscation and as a way of creating a simple ZKM Script.</p>
        <p>The ZKM Script interface is ultimately the preferred interface because it</p>
        <p>It is highly recommended that you open your classes for obfuscation using the same relative directory and/or archive structure that will be used at runtime.</p>
        <p>If you do this then your obfuscated application can be deployed in exactly the same way as the original, unobfuscated application.</p>
        <p>The basic Zelix KlassMaster(TM) processing sequence is as follows.</p>
        <p>You start the Zelix KlassMaster(TM) GUI by executing the Zelix KlassMaster(TM) JAR file without specifying a ZKM Script as the final command line option.</p>
        <p>As mentioned above, the GUI interface is provided as a way of quickly becoming familiar with the basic concepts of obfuscation and as a way of creating a simple ZKM Script.</p>
        <p>When you are getting started, it is recommended that you use the Build Helper tool which is in the "Tools" menu.</p>
        <p>The Build Helper will guide you through the basic steps of trimming and/or obfuscating your classes.</p>
        <p>It is highly recommended that you do not use the Trim function until you have your obfuscated application working.</p>
        <p>The Trim function can be more difficult to understand than obfuscation so it can help if you use it only when everything else is working.</p>
        <p>In the Build Helper , you can postpone the use of the Trim function by clicking on the button on the Trim Exclusions and Trim Options windows.</p>
        <p>You can create a basic ZKM Script by using the GUI Build Helper or the ZKM Script Helper tools.</p>
        <p>(The difference between the two is that the Build Helper</p>
        <p>actually performs the class processing in the background before giving you the opportunity to save the corresponding ZKM Script.) At the end of the Build Helper process you will see the button which will allow you to view and then save the equivalent ZKM Script.</p>
        <p>Once your ZKM Script is saved as a text file, you are free to then edit it using any simple text editor.</p>
        <p>Note that you cannot open a saved ZKM Script within the GUI Build Helper or the ZKM Script Helper tools.</p>
        <p>This is because ZKM Scripts can become arbitrarily complex and because they can contain functionality which is not supported by the GUI.</p>
        <p>First time users are sometimes initially puzzled by the ZKM Script exclusion syntax. This is because ZKM Script gives you very fine control over what is or isn't excluded.</p>
        <p>Therefore, it is highly recommended that you at least read the basic exclusions part of the ZKM Script Exclusions Tutorial</p>
        <p>before modifying your first ZKM Scripts. It actually isn't that complicated so it could save you a lot of trial and error.</p>
        <p>You can execute your saved ZKM Script from the command line or from within a build tool .</p>
        <p>If you find yourself needing to debug your ZKM Script then you may find it helpful to run Zelix KlassMaster(TM) using the "-v" (ie. verbose) command line option .</p>
        <p>This will result in a great deal of extra information being written to the Zelix KlassMaster(TM) log file which is named ZKM_log.txt by default. This extra information will include</p>
        <p>Obfuscation of even a mildly complicated application is not trivial. For this reason it is highly recommended that you start by using minimal obfuscation.</p>
        <p>Once you have your minimally obfuscated application working satisfactorily then you can iteratively increase the level of obfuscation.</p>
        <p>A safe way to start is by excluding all public classes and all public and protected fields and methods from Name Obfuscation.</p>
        <p>These are the recommended settings for an application which is an extensible framework but it is otherwise a relatively safe starting point for all applications.</p>
        <p>Using ZKM Script you can do this by using the following ZKM Script exclude statement.</p>
        <p>exclude public *.^* and //exclude names of public classes &amp; containing packages</p>
        <p>*.* public * and //exclude public field names</p>
        <p>*.* protected * and //exclude protected field names</p>
        <p>*.* public *(*) and //exclude public method names</p>
        <p>*.* protected *(*) //exclude protected method names</p>
        <p>Also, as mentioned above, it is highly recommended that you do not use the Trim function until you have your obfuscated application working.</p>
        <p>Once your obfuscated application is working you will find that your ZKM Script exclude statement exclusion parameters will provide an excellent guide to the necessary ZKM Script trimExclude statement parameters.</p>
        <p>Once you have your obfuscated application working satisfactorily, you should seriously consider using the Method Parameter Changes functionality.</p>
        <p>This functionality is essential if you wish reduce the risk of the String Encryption and</p>
        <p>Reference Obfuscation transformations being reversed. It also offers it own special form of Flow Obfuscation which is more difficult to reverse.</p>
        <p>Otherwise, see the answer to FAQ question 14 for guidance on the other obfuscation settings.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM) - Getting Started","url":"https://zkm-web.vercel.app/docs/gettingStarted"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - Getting Started | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/gettingStarted' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
