<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Default trim exclusion parameters</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Trim Exclusions</li>
          <li>Trim Exclusions</li>
          <li>Overview The Zelix KlassMaster(TM) "Trim" tool removes unused classes, fields and methods. Trim exclusions specify the classes, fields and methods that should not be removed by the "Trim" tool. Zelix KlassMaster(TM) has inbuilt default trim exclusions that, along with your "Application type" and "Application entry point" settings, are adequate for most purposes. So you do not have to explicitly exclude every class, field and method that you know is "used". See the Method exclusion parameters section for an explanation of how implicit exclusion works.</li>
          <li>Class exclusion parameters An exclusion parameter that excludes a class prevents that class from being removed. However, in itself it will not prevent the fields and the methods of that class from being removed.</li>
          <li>Field exclusion parameters An exclusion parameter that excludes a field prevents that field from being removed provided its containing class is not removed. So excluding a field will not in itself prevent the containing class from being removed.</li>
          <li>Method exclusion parameters Similarly, an exclusion parameter that excludes a method prevents that method from being removed provided its containing class is not removed. So, as with fields, excluding a method will not in itself prevent its containing class from being removed.</li>
          <li>If a method and its containing class are explicitly or implicitly excluded then all the classes, fields and methods that that method accesses will implicitly be excluded from being trimmed. So, for a simple, self contained application, if the public static main(java.lang.String[]) method and its containing class are excluded then all the classes, fields and methods directly or indirectly accessed by the public static main(java.lang.String[]) method will be implicitly excluded from being trimmed. This will result in all the "used" classes, fields and methods being excluded and all the "unused" classes, fields and methods being removed.</li>
          <li>Exclusion parameter list</li>
          <li>Add button</li>
          <li>Modify button</li>
          <li>Delete button</li>
          <li>Explanation area</li>
          <li>Application type list</li>
          <li>Application entry point class list</li>
          <li>Test button</li>
          <li>Skip button</li>
        </ul>
        <h2>Default trim exclusion parameters</h2>
        <p>The Zelix KlassMaster(TM) "Trim" tool removes unused classes, fields and methods. Trim exclusions specify the classes, fields and methods that</p>
        <p>should not be removed by the "Trim" tool.</p>
        <p>Zelix KlassMaster(TM) has inbuilt default trim exclusions that, along with your "Application type" and</p>
        <p>"Application entry point" settings, are adequate for most purposes. So you do not have to explicitly exclude every class, field and method that you know is "used".</p>
        <p>See the Method exclusion parameters section for an explanation of how implicit exclusion works.</p>
        <p>An exclusion parameter that excludes a class prevents that class from being removed. However, in itself it will not prevent the fields and the methods of that class from being removed.</p>
        <p>An exclusion parameter that excludes a field prevents that field from being removed provided its containing class is not removed.</p>
        <p>So excluding a field will not in itself prevent the containing class from being removed.</p>
        <p>Similarly, an exclusion parameter that excludes a method prevents that method from being removed provided its containing class is not removed.</p>
        <p>So, as with fields, excluding a method will not in itself prevent its containing class from being removed.</p>
        <p>If a method and its containing class are explicitly or implicitly excluded then all the classes, fields and methods that that method accesses will implicitly be excluded from being trimmed.</p>
        <p>So, for a simple, self contained application, if the public static main(java.lang.String[]) method and its containing class are excluded then all the classes, fields and methods directly or indirectly accessed by the public static main(java.lang.String[]) method will be implicitly excluded from being trimmed.</p>
        <p>This will result in all the "used" classes, fields and methods being excluded and all the "unused" classes, fields and methods being removed.</p>
        <p>Shows the current exclusion parameters. Any default exclusion parameters will appear as disabled items.</p>
        <p>Although the form of the exclusion parameters is the</p>
        <p>syntax (where "*" is a wildcard), you do not need to know this syntax.</p>
        <p>Click this button to add an exclusion parameter to the "Exclusion parameter" list.</p>
        <p>It will open the "Trim Exclude Parameter Type" dialog.</p>
        <p>Click this button to modify the selected exclusion parameter in the "Exclusion parameter" list.</p>
        <p>Click this button to delete the selected exclusion parameter in the "Exclusion parameter" list.</p>
        <p>Displays a plain language explanation of the effect of the selected exclusion parameter in the "Exclusion parameter" list.</p>
        <p>This list adds standard exclusion parameters to the "Exclusion parameter" list based upon the application type.</p>
        <p>The added exclusion parameters are based on the access modifiers of your classes, fields and methods.</p>
        <p>Your application is a "non-extensible library" if it does not form a complete application in its own right but rather is intended to be used by other developers as part of their application without them having to extend any of your classes. An example is a 3rd party statistics library.</p>
        <p>This setting of the "Application type" list means that your public classes, fields and methods need to be accessible to other classes but your classes will not be extended or implemented by other classes. It adds exclusion parameters that will prevent your public classes, fields and methods</p>
        <p>Your application is an "extensible framework" if it does not form a complete application in its own right but rather is intended to be extended by other developers to become part of their application. The key difference between an "extensible framework" and a "non-extensible library" is that an "extensible framework" has classes that are abstract which need to be extended before they can do real work.</p>
        <p>This setting of the "Application type" list means that your public classes, fields and methods and protected fields and methods need to be accessible to other classes because your classes will be extended or implemented by other classes.</p>
        <p>It adds exclusion parameters that will prevent your public classes, fields and methods and protected fields and methods from being removed.</p>
        <p>This setting of the "Application type" list adds exclusion parameters that will prevent your classes that extend javax.microedition.midlet.MIDlet from being removed.</p>
        <p>Your application is an "Self contained application or applet" if it forms a complete functioning product in its own right.</p>
        <p>If you select this setting of the "Application type" list no extra exclusion parameters will be added to the "Exclusion parameter" list.</p>
        <p>Instead, you need to select the application entry point or Applet class in the Application entry point class list .</p>
        <p>This list adds an exclusion parameter that excludes the selected "entry point" class from being removed. The contents of the list consist of all the opened classes that contain the public static main(java.lang.String[]) method or that extend java.applet.Applet .</p>
        <p>If your application contains more than one entry point then you will need to exclude these additional entry points by adding custom exclude parameters using the Add button .</p>
        <p>Click this button to test the effect of the current exclusion parameters in the "Exclusion parameter" list on your opened classes.</p>
        <p>You will be given a report of what would be trimmed given the current parameters. Your classes will not be effected.</p>
        <p>Note: this button will not be present inside the "ZKM Script Helper" dialog sequence.</p>
        <p>Click this button to skip the trim exclusion step.</p>
        <p>Note: this button will only be present if you are within a multi-step "helper" dialog sequence.</p>
        <p>Zelix KlassMaster(TM) has some default trim exclusions that are applied everytime you trim.</p>
        <p>However, you may override these defaults with your own. By default, Zelix KlassMaster looks for a file in the current user directory named "defaultTrimExclude.txt" . If it finds the file then it will use its contents as the default trim exclusions.</p>
        <p>If the defaultTrimExclude.txt file doesn't exist then Zelix KlassMaster(TM) applies its predefined internal default trim exclusions.</p>
        <p>If the defaultTrimExclude.txt file exists but is is empty then there are no default trim exclusions.</p>
        <p>The default trim exclusion parameters appear as disabled list entries in the "Exclusion parameter list" .</p>
        <p>They can only be altered by editing the "defaultTrimExclude.txt" file. They cannot be altered by using this dialog.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Default trim exclusion parameters",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/trimExclude"
}, {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Docs",
      "item": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Default trim exclusion parameters"
    }
  ]
}]
useHead({
  title: 'Default trim exclusion parameters | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Default trim exclusion parameters | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/trimExclude' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
