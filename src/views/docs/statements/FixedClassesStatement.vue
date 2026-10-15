<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - fixedClasses</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - fixedClasses</li>
          <li>The fixedClasses Statement The ZKM Script fixedClasses statement ensures that specified classes are effectively insulated from the major effects of any subsequent Zelix KlassMaster(TM) trim or obfuscate statements. The effect is that a "fixed" class produced by Zelix KlassMaster can be replaced with the original class file without effecting the obfuscated application. This effect is useful in scenarios where particular classes may be recompiled automatically at runtime replacing the class produced by Zelix KlassMaster. This can happen with JSP servlets.</li>
          <li>Note that the specified classes may still be changed slightly. For example some debugging information can be removed. More significantly, inner class and generics information can still be removed. This information is generally only used by compilers and debuggers so this would typically not be a problem. However, you can prevent the removal of inner class and generics information from effecting your fixed classes by specifying "keepInnerClassInfo=ifNameNotObfuscated" and "keepGenericsInfo=true" on your obfuscate statement.</li>
          <li>Also, the fixedClasses statement has no effect of the operation of the removeMethodCalls statement.</li>
          <li>However, if the ZKM_FIXED_TOTALLY_UNCHANGED configuration option is specified then the specified classes will be copied across completely unchanged .</li>
          <li>For each class matched by the statement, Zelix KlassMaster(TM) will</li>
          <li>add name exclusions for</li>
          <li>the fully qualified names of the class, its direct superclass and its directly implemented interfaces</li>
          <li>the names of every field and method contained in the class</li>
          <li>the names of any other class, field or method referred to by the class</li>
          <li>add a Flow Obfuscation exclusion</li>
          <li>add a String Encryption exclusion</li>
          <li>add a Integer Encryption exclusion</li>
          <li>add a Long Encryption exclusion</li>
          <li>add a Reference Obfuscation exclusion</li>
          <li>add a Method Parameter Changes exclusion</li>
          <li>add a Method Parameter Obfuscation exclusion</li>
          <li>Explanation and Examples</li>
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
        <pre class="code"><code>fixedClasses pack2.Class1 and //Treat class pack2.Class1 as a fixed class
             pack3.* and //Treat all classes in package "pack3" as fixed classes
             //Treat all classes contained in a JAR file with a name matching "MyJar*.jar" as fixed classes
             "MyJar*.jar"!*.* and 
             //Treat all classes annotated which an annotation matching *.MyAnnotation0 as fixed classes
             @*.MyAnnotation0 *.*;</code></pre>
        <p>The ZKM Script fixedClasses statement ensures that specified classes are effectively insulated from the major effects of any subsequent Zelix KlassMaster(TM)</p>
        <p>statements. The effect is that a "fixed" class produced by Zelix KlassMaster can be replaced with the original class file without effecting the obfuscated application. This effect is useful in scenarios where particular classes may be recompiled automatically at runtime replacing the class produced by Zelix KlassMaster. This can happen with JSP servlets.</p>
        <p>Note that the specified classes may still be changed slightly. For example some debugging information can be removed.</p>
        <p>More significantly, inner class and generics information can still be removed. This information is generally only used by compilers and debuggers so this would typically not be a problem. However, you can prevent the removal of inner class and generics information from effecting your fixed classes by specifying "keepInnerClassInfo=ifNameNotObfuscated" and "keepGenericsInfo=true" on your</p>
        <p>Also, the fixedClasses statement has no effect of the operation of the</p>
        <p>However, if the ZKM_FIXED_TOTALLY_UNCHANGED</p>
        <p>configuration option is specified then the specified classes will be copied across</p>
        <p>Successive fixedClasses statements (in the same script) have a cumulative effect . Once a fixed class has been specified the only way to remove the specification is with a</p>
        <p>The remainder of this page is organized into the following sections.</p>
        <p>Put informally (with mandatory components in bold), the syntax for a class exclusion parameter is:</p>
        <p>&lt;classAnnotations&gt; &lt;classModifiers&gt; "&lt;archiveQualifier&gt;"!&lt;packageQualifiers&gt;.</p>
        <p>&lt;className&gt; &lt;containingClause&gt; &lt;extendsClause&gt; &lt;implementsClause&gt; ;</p>
        <p>For a class to be treated as a fixed class, all of the following must be true:</p>
        <p>Its modifiers (e.g. public final ) must match all parameter modifiers.</p>
        <p>public , abstract and NOT an interface to be excluded.</p>
        <p>fixedClasses pack2.Class1 and //Treat class pack2.Class1 as a fixed class</p>
        <p>pack3.* and //Treat all classes in package "pack3" as fixed classes</p>
        <p>//Treat all classes contained in a JAR file with a name matching "MyJar*.jar" as fixed classes</p>
        <p>//Treat all classes annotated which an annotation matching *.MyAnnotation0 as fixed classes</p>
        <p>" fixedClasses " classExcludeParameter (" and " classExcludeParameter ) * ";"</p>
        <p>annotationSpecifier ::= ("@" [packageExcludeParameter] nameSpecifier) | annotationSpecifierAndList</p>
        <p>annotationSpecifierAndList ::= ["!"] "(" annotationSpecifierOrList ("&amp;&amp;" annotationSpecifierOrList)* ")"</p>
        <p>annotationSpecifierOrList ::= annotationSpecifier ("||" annotationSpecifier)*</p>
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
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - fixedClasses",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/fixedClassesStatement"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - fixedClasses"
    }
  ]
}]
useHead({
  title: 'fixedClasses | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - fixedClasses | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/fixedClassesStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
