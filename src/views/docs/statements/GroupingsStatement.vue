<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - groupings</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - groupings</li>
          <li>The groupings Statement Zelix KlassMaster's(TM) flow obfuscation functionality (initiated through the obfuscate statement) needs to know how classes will be grouped at runtime. This knowledge allows it to avoid creating any inappropriate interdependencies between classes. It will not create an interdependency across groupings.</li>
          <li>Normally, Zelix KlassMaster(TM) assumes that the groupings implicit in the JAR files from which the classes were opened specify the groupings that will exist at runtime. However, in some environments this may not be enough because</li>
          <li>the JAR structure from which the classes are loaded does not reflect the runtime JAR structure or</li>
          <li>there are implicit groupings within a JAR file. That is, in certain scenarios (eg. certain runtime classpath settings), only a subset of the classes within a JAR file can be accessed.</li>
          <li>Explanation</li>
          <li>Examples</li>
          <li>Syntax</li>
          <li>Its annotations must match any specified annotations.</li>
          <li>Its modifiers (e.g. public final ) must match all parameter modifiers. So if the parameters are public abstract !interface then the class must be public , abstract and NOT an interface to be excluded.</li>
          <li>If the parameter has an archive qualifier then the class must be contained in an archive which matches that archive qualifier.</li>
          <li>Its package qualifiers must match any specified package exclude parameter component. If there is no package exclude parameter component then the class must be in the default package.</li>
          <li>Its unqualified name must match the parameter's class name specifier.</li>
          <li>If the parameter has a containing clause then the class must contain members which match the specified class</li>
          <li>If the parameter has an extends clause then the class must be a subclass of the specified class</li>
          <li>If the parameter has an implements clause then the class must directly or indirectly implement all of the specified interfaces</li>
        </ul>
        <pre class="code"><code>groupings {pack1.* and pack2.*} //Classes in packages pack1 and pack2
          //Classes in package pack3 and all classes annotated which an annotation matching *.MyAnnotation0
          //form the 2nd grouping
          {pack3.* and @*.MyAnnotation0 *.*};
 
groupings {pack1.* and pack.*.*} //Classes in package pack1 and its subpackages
          {pack3.!(Class1)} //Classes in package pack3 except Class1
          {pack3.Class1}; //Class pack3.Class1 forms its own one class grouping</code></pre>
        <p>Zelix KlassMaster's(TM) flow obfuscation functionality (initiated through the</p>
        <p>statement) needs to know how classes will be grouped at runtime. This knowledge allows it to avoid creating any inappropriate interdependencies between classes.</p>
        <p>It will not create an interdependency across groupings.</p>
        <p>Normally, Zelix KlassMaster(TM) assumes that the groupings implicit in the JAR files from which the classes were opened specify the groupings that will exist at runtime.</p>
        <p>However, in some environments this may not be enough because</p>
        <p>there are implicit groupings within a JAR file.</p>
        <p>That is, in certain scenarios (eg. certain runtime classpath settings), only a subset of the classes within a JAR file can be accessed.</p>
        <p>The ZKM Script groupings statement allows you to specify groupings in addition to those implicit in the JAR files.</p>
        <p>The remainder of this page is organized into the following sections.</p>
        <p>The groupings statement consists of a series of class specifications separated by the and keyword grouped inside of curly brackets (ie.</p>
        <p>"{...}" ). Informally (with mandatory components in bold), the syntax for a class specification is:</p>
        <p>&lt;classAnnotations&gt; &lt;classModifiers&gt; "&lt;archiveQualifier&gt;"!&lt;packageQualifiers&gt;.</p>
        <p>&lt;className&gt; &lt;containingClause&gt; &lt;extendsClause&gt; &lt;implementsClause&gt; ;</p>
        <p>For a class to match a class specification, all of the following must be true:</p>
        <p>Its modifiers (e.g. public final ) must match all parameter modifiers.</p>
        <p>public , abstract and NOT an interface to be excluded.</p>
        <p>groupings {pack1.* and pack2.*} //Classes in packages pack1 and pack2</p>
        <p>//Classes in package pack3 and all classes annotated which an annotation matching *.MyAnnotation0</p>
        <p>groupings {pack1.* and pack.*.*} //Classes in package pack1 and its subpackages</p>
        <p>{pack3.!(Class1)} //Classes in package pack3 except Class1</p>
        <p>{pack3.Class1}; //Class pack3.Class1 forms its own one class grouping</p>
        <p>annotationSpecifier ::= ("@" [packageExcludeParameter] nameSpecifier) | annotationSpecifierAndList</p>
        <p>annotationSpecifierAndList ::= ["!"] "(" annotationSpecifierOrList ("&amp;&amp;" annotationSpecifierOrList)* ")"</p>
        <p>annotationSpecifierOrList ::= annotationSpecifier ("||" annotationSpecifier)*</p>
        <p>grouping ::= "{" classExcludeParameter (" and " classExcludeParameter ) * "}"</p>
        <p>[annotationSpecifier] [["!"] " public " | " package "]</p>
        <p>[["!"] " abstract "] [["!"] " final "] [["!"] " interface "] [["!"] " synthetic "] [["!"] " enum "] [["!"] " annotation "]</p>
        <p>[" \" " archiveQualifier " \" " " ! "] [packageExcludeParameter ["."]] nameSpecifier [containingClause]</p>
        <p>containingClause ::= " containing " " { " " memberAndList " " } "</p>
        <p>extendsClause ::= " extends " [annotationSpecifier] wildcardClassName</p>
        <p>fullyQualifiedClassName ::= name ("." name) *</p>
        <p>implementsClause ::= " implements " [annotationSpecifier] wildcardClassName ("," [annotationSpecifier] wildcardClassName) *</p>
        <p>memberAndList ::= ["!"] "(" memberOrList ("&amp;&amp;" memberOrList)* ")"</p>
        <p>memberOrList ::= memberSpecifier ("||" memberSpecifier)*</p>
        <p>memberSpecifier ::= fieldExcludeParameter | methodExcludeParameter</p>
        <p>nameAndList ::= ["!"] "(" nameOrList ("&amp;&amp;" nameOrList)* ")"</p>
        <p>name ::= (["0"-"9","a"-"z","A"-"Z","$","_"]) +</p>
        <p>i.e. a Java identifer (e.g. a package, class, field or method name) with no wildcards allowed</p>
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
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - groupings",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/groupingsStatement"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - groupings"
    }
  ]
}]
useHead({
  title: 'groupings | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - groupings | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/groupingsStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
