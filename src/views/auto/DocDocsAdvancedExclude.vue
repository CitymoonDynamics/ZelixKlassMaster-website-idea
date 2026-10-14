<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - Name Exclusions</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Name Exclusions</li>
          <li>Obfuscate Name Exclusions</li>
          <li>Overview The Zelix KlassMaster(TM) "Obfuscate" tool renames packages, classes, fields and methods. Name exclusions specify the package, class, field and method names that should not be renamed by the "Obfuscate" tool. Zelix KlassMaster(TM) has inbuilt default (name) exclusion parameters that, along with your "Application type" , "Exclude package qualifiers" and "Don't change main class name" settings, are adequate for most purposes.</li>
          <li>However, the "Obfuscate Name Exclusions" window also allows you to interactively construct precise custom exclusion specifications. Exclude parameters may be added, modified and deleted from the list. If an exclusion parameter is selected in the list, an explanation of its exclusion effect appears in the lower pane.</li>
          <li>Just before this dialog is displayed, all the classes specified by the earlier "Open Classes" dialog are partially opened so that the "don't change main class name" list can be populated and so that any package names you enter in the "exclude package qualifiers" field can be validated. So, if you wish to make use of these options, your class files must already exist in the specified directories and/or archive files.</li>
          <li>Exclusion parameter list</li>
          <li>Add button</li>
          <li>Modify button</li>
          <li>Delete button</li>
          <li>Explanation area</li>
          <li>Application type list</li>
          <li>Exclude package qualifiers list</li>
          <li>Don't change main class name list</li>
          <li>Default exclusion parameters</li>
        </ul>
        <p>The Zelix KlassMaster(TM) "Obfuscate" tool renames packages, classes, fields and methods.</p>
        <p>Name exclusions specify the package, class, field and method names that should not be renamed by the "Obfuscate" tool.</p>
        <p>Zelix KlassMaster(TM) has inbuilt default (name) exclusion parameters that, along with your "Application type" ,</p>
        <p>"Exclude package qualifiers" and "Don't change main class name" settings, are adequate for most purposes.</p>
        <p>However, the "Obfuscate Name Exclusions" window also allows you to interactively construct precise custom exclusion specifications.</p>
        <p>Exclude parameters may be added, modified and deleted from the list.</p>
        <p>If an exclusion parameter is selected in the list, an explanation of its exclusion effect appears in the lower pane.</p>
        <p>Shows the current exclusion parameters. Any default exclusion parameters will appear as disabled items.</p>
        <p>Although the form of the exclusion parameters is the</p>
        <p>syntax (where "*" is a wildcard), you do not need to know this syntax.</p>
        <p>Click this button to add an exclusion parameter to the "Exclusion parameter" list.</p>
        <p>It will open the "Exclusion Parameter Type" dialog.</p>
        <p>Click this button to modify the selected exclusion parameter in the "Exclusion parameter" list.</p>
        <p>Click this button to delete the selected exclusion parameter in the "Exclusion parameter" list.</p>
        <p>Displays a plain language explanation of the effect of the selected exclusion parameter in the "Exclusion parameter" list.</p>
        <p>This list adds standard exclusion parameters to the "Exclusion parameter" list based upon the application type.</p>
        <p>The added exclusion parameters are based on the access modifiers of your classes, fields and methods.</p>
        <p>Your application is a "non-extensible library" if it does not form a complete application in its own right but rather is intended to be used by other developers as part of their application without them having to extend any of your classes. An example is a 3rd party statistics library.</p>
        <p>This setting of the "Application type" list means that your public classes, fields and methods need to be accessible to other classes but your classes will not be extended or implemented by other classes. It adds exclusion parameters that prevent your public classes, fields and methods from being renamed.</p>
        <p>Your application is an "extensible framework" if it does not form a complete application in its own right but rather is intended to be extended by other developers to become part of their application. The key difference between an "extensible framework" and a "non-extensible library" is that an "extensible framework" has classes that are abstract which need to be extended before they can do real work.</p>
        <p>This setting of the "Application type" list means that your public classes, fields and methods and protected fields and methods need to be accessible to other classes because your classes will be extended or implemented by other classes. It adds exclusion parameters that prevent your public classes, fields and methods and protected fields and methods from being renamed.</p>
        <p>This setting of the "Application type" list adds exclusion parameters that will prevent your classes that extend javax.microedition.midlet.MIDlet from being renamed.</p>
        <p>This setting of the "Application type" list means that your classes are self contained. It does not add any exclusion parameters to the</p>
        <p>"Exclusion parameter" list. Instead, you need to select the application entry point or Applet class in the Don't change main class name list .</p>
        <p>This list contains the package names of all the classes that have been opened in Zelix KlassMaster.</p>
        <p>If you select a package name, then an exclusion parameter will be added to the "Exclusion parameter" list that will exclude that package from being renamed. Alternatively, if you select the special</p>
        <p>item then an exclusion parameter will be added that will exclude all package names from being renamed.</p>
        <p>For example, if your classes are within the package "com.mycompany" then typically you will want to exclude that package from being renamed. This would eliminate the risk of class name clashes when your classes appear in the same classpath as classes produced and obfuscated by other companies.</p>
        <p>This list adds an exclusion parameter that excludes the selected "entry point" class from being renamed.</p>
        <p>The contents of the list consist of all the opened classes that contain the public static main(java.lang.String[]) method or that extend java.applet.Applet .</p>
        <p>If your application contains more than one entry point then you will need to exclude these additional entry points by adding custom exclude parameters using the Add button .</p>
        <p>Zelix KlassMaster(TM) has some default exclusions that are applied everytime you obfuscate.</p>
        <p>However, you may override these defaults with your own. Zelix KlassMaster looks for a file in the current user directory named "defaultExclude.txt" . If it finds the file then it will use its contents as the default exclusions.</p>
        <p>If the defaultExclude.txt file doesn't exist then Zelix KlassMaster(TM) applies its predefined internal default exclusions.</p>
        <p>If the defaultExclude.txt file exists but is is empty then there are no default exclusions.</p>
        <p>The default exclusion parameters appear as disabled list entries in the "Exclusion parameter list" .</p>
        <p>They can only be altered by editing the "defaultExclude.txt" file.</p>
        <p>They cannot be altered by using this dialog.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM) - Name Exclusions","url":"https://zkm-web.vercel.app/docs/advancedExclude"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - Name Exclusions | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/advancedExclude' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
