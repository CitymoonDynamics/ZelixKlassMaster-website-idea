<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - existingSerializedClasses</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - existingSerializedClasses</li>
          <li>The existingSerializedClasses Statement The ZKM Script existingSerializedClasses statement ensures that any changes made to the specified classes by subsequent Zelix KlassMaster(TM) trim and obfuscate statements will not break already existing serialized objects that are based upon the non-obfuscated class definition. For each class matched by the statement, Zelix KlassMaster(TM) will</li>
          <li>add name exclusions for</li>
          <li>the fully qualified name of the class</li>
          <li>the name of every field contained or inherited by the class</li>
          <li>the fully qualified class name of the type of each non-primitive field contained or inherited by the class</li>
          <li>add a serialVersionUID field to the class (if it doesn't already exist) set to a value based upon the non-obfuscated class definition.</li>
          <li>Explanation and Examples</li>
          <li>Syntax</li>
          <li>Its annotations must match any specified annotations.</li>
          <li>Its modifiers (e.g. public final ) must match all parameter modifiers. So if the parameters are public abstract !interface then the class must be public , abstract and NOT an interface to be excluded.</li>
          <li>If the parameter has an archive qualifier then the class must be contained in an archive which matches that archive qualifier.</li>
          <li>Its package qualifiers must match any specified package exclude parameter component. If there is no package exclude parameter component then the class must be in the default package.</li>
          <li>Its unqualified name must match the parameter's class name specifier.</li>
          <li>If the parameter has an extends clause then the class must be a subclass of the specified class</li>
          <li>If the parameter has an implements clause then the class must directly or indirectly implement all of the specified interfaces</li>
        </ul>
        <pre class="code"><code>existingSerializedClasses 
           pack2.Class1 and //Treat class pack2.Class1 as an existing serialized class
           pack3.* and //Treat all classes in package "pack3" as existing serialized classes
           //Treat all classes contained in a JAR file with a name matching "MyJar*.jar" as existing serialized classes
           "MyJar*.jar"!*.* and 
           //Treat all classes annotated which a class matching *.MyAnnotation0 as existing serialized classes
           @*.MyAnnotation0 *.*;</code></pre>
        <p>The ZKM Script existingSerializedClasses statement ensures that any changes made to the specified classes by subsequent Zelix KlassMaster(TM)</p>
        <p>statements will not break already existing serialized objects that are based upon the non-obfuscated class definition.</p>
        <p>For each class matched by the statement, Zelix KlassMaster(TM) will</p>
        <p>The statement has no impact in the case of specified classes that don't directly or indirectly implement java.io.Serializable .</p>
        <p>Successive existingSerializedClasses statements (in the same script) have a cumulative effect . Once an existing serialized class has been specified the only way to remove the specification is with a</p>
        <p>Put informally (with mandatory components in bold), the syntax for a class exclusion parameter is:</p>
        <p>&lt;classAnnotations&gt; &lt;classModifiers&gt; "&lt;archiveQualifier&gt;"!&lt;packageQualifiers&gt;.</p>
        <p>&lt;className&gt; &lt;extendsClause&gt; &lt;implementsClause&gt; ;</p>
        <p>For a class to be treated as a pre-existing serialized class, all of the following must be true:</p>
        <p>Its modifiers (e.g. public final ) must match all parameter modifiers.</p>
        <p>public , abstract and NOT an interface to be excluded.</p>
        <p>existingSerializedClasses pack2.Class1 and //Treat class pack2.Class1 as an existing serialized class</p>
        <p>pack3.* and //Treat all classes in package "pack3" as existing serialized classes</p>
        <p>//Treat all classes contained in a JAR file with a name matching "MyJar*.jar" as existing serialized classes</p>
        <p>//Treat all classes annotated which a class matching *.MyAnnotation0 as existing serialized classes</p>
        <p>" existingSerializedClasses " classExcludeParameter (" and " classExcludeParameter ) * ";"</p>
        <p>annotationSpecifier ::= ("@" [packageExcludeParameter] nameSpecifier) | annotationSpecifierAndList</p>
        <p>annotationSpecifierAndList ::= ["!"] "(" annotationSpecifierOrList ("&amp;&amp;" annotationSpecifierOrList)* ")"</p>
        <p>annotationSpecifierOrList ::= annotationSpecifier ("||" annotationSpecifier)*</p>
        <p>[annotationSpecifier] [["!"] " public " | " package "]</p>
        <p>[["!"] " abstract "] [["!"] " final "] [["!"] " interface "] [["!"] " synthetic "] [["!"] " enum "] [["!"] " annotation "]</p>
        <p>[" \" " archiveQualifier " \" " " ! "] [packageExcludeParameter ["."]] nameSpecifier [containingClause]</p>
        <p>extendsClause ::= " extends " [annotationSpecifier] wildcardClassName</p>
        <p>fullyQualifiedClassName ::= name ("." name) *</p>
        <p>implementsClause ::= " implements " [annotationSpecifier] wildcardClassName ("," [annotationSpecifier] wildcardClassName) *</p>
        <p>name ::= (["0"-"9","a"-"z","A"-"Z","$","_"]) +</p>
        <p>i.e. a Java identifer (e.g. a package, class, field or method name) with no wildcards allowed</p>
        <p>nameAndList ::= ["!"] "(" nameOrList ("&amp;&amp;" nameOrList)* ")"</p>
        <p>nameOrList ::= nameSpecifier ("||" nameSpecifier)*</p>
        <p>nameSpecifier ::= wildcardName | nameAndList</p>
        <p>packageExcludeParameter ::= packageName | packageNameAndList</p>
        <p>packageName ::= wildcardName ("." wildcardName) * "."</p>
        <p>NB: the final "." is part of the package name</p>
        <p>packageNameAndList ::= ["!"] "(" packageNameOrList ("&amp;&amp;" packageNameOrList)* ")"</p>
        <p>packageNameOrList ::= packageExcludeParameter ("||" packageExcludeParameter)*</p>
        <p>wildcardClassName ::= wildcardName ("." wildcardName) *</p>
        <p>wildcardName ::= (["*","0"-"9","a"-"z","A"-"Z","$","_"]) +</p>
        <p>i.e. a Java identifer (e.g. a package, class, field or method name) with the "*" wildcard allowed</p>
        <p>Where archiveQualifier is a relative or absolute archive path name with the "*" wildcard allowed. E.g. "/lib/*.jar" or "myJar0.jar"</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - existingSerializedClasses",
  "url": "https://zkm-web.vercel.app/docs/existingSerializedClassesStatement"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - existingSerializedClasses"
    }
  ]
}]
useHead({
  title: 'existingSerializedClasses | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - existingSerialized | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/existingSerializedClassesStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
