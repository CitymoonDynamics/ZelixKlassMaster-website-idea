<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - ignoreMissingReferences</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - ignoreMissingReferences</li>
          <li>The ignoreMissingReferences Statement The ZKM Script ignoreMissingReferences statement specifies classes, fields and methods which can be ignored if they cannot be found by Zelix KlassMaster(TM) when executing a open , trim or obfuscate statement. Successive ignoreMissingReferences statements have a cumulative effect . Once a specification has been set its effect can be removed entirely by a following resetIgnoreMissingReferences statement.</li>
          <li>Note that the ignoreMissingReferences statement must precede your ZKM Script open statement. Missing classes, fields and methods are often first detected at that stage.</li>
          <li>Also note that if you use this statement then Zelix KlassMaster(TM) may not be able to process your classes correctly. You should only use the statement if you are sure that the missing classes, fields and methods are really irrelevant to your classes.</li>
          <li>In any case, there are some scenarios where Zelix KlassMaster(TM) cannot ignore a missing class, field or method. For example, Zelix KlassMaster(TM) cannot ignore a missing class if it is extended by a class that has been opened for obfuscation.</li>
          <li>The remainder of this page is organized into the following sections.</li>
          <li>Examples and Explanation</li>
          <li>Syntax</li>
          <li>No parameters specified</li>
          <li>Class specification parameters</li>
          <li>Field specification parameters</li>
          <li>Method specification parameters</li>
          <li>Its package qualifiers must match any specified package parameter component. If there is no package parameter component then the class must be in the default package.</li>
          <li>Its unqualified name must match the specified class name specification.</li>
        </ul>
        <pre class="code"><code>ignoreMissingReferences *        and  //Ignore all missing classes in the default package
                        *.Class1 and  //Ignore all missing classes with the unqualified class name "Class1"
                        pack0.*.* and //Ignore all missing classes in a sub-package of "pack0"
                        pack1..*; //Ignore all missing classes in "pack1" or any sub-package of "pack1"</code></pre>
        <ul>
          <li>Its containing class must match any class parameter component (see Class specification parameters ).</li>
          <li>Its name must match the parameter field name.</li>
        </ul>
        <pre class="code"><code>ignoreMissingReferences 
   *.* *       and //Ignore all missing fields
   *.Class1 f* and //Ignore all missing fields matching "f*" in classes with the unqualified name "Class1"
   @*.* public *.* * //Ignore all missing fields in public classes with an annotation. ;</code></pre>
        <ul>
          <li>Its name must match the parameter method name.</li>
          <li>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist. (A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</li>
        </ul>
        <pre class="code"><code>ignoreMissingReferences 
   *.* *(*)     and  //Ignore all missing methods
   *.* &lt;init&gt;() and  //Ignore all missing no argument constructors
   //Ignore all missing the methods of any class implementing "Serializable" in a package that matches "pack1.*"
   pack1.* implements java.io.Serializable *(*)
   ;</code></pre>
        <p>The ZKM Script ignoreMissingReferences statement specifies classes, fields and methods which can be ignored if they cannot be found by Zelix KlassMaster(TM) when executing a</p>
        <p>statement. Successive ignoreMissingReferences statements have a cumulative effect . Once a specification has been set its effect can be removed entirely by a following</p>
        <p>Note that the ignoreMissingReferences statement must precede your ZKM Script</p>
        <p>statement. Missing classes, fields and methods are often first detected at that stage.</p>
        <p>Also note that if you use this statement then Zelix KlassMaster(TM) may not be able to process your classes correctly.</p>
        <p>You should only use the statement if you are sure that the missing classes, fields and methods are really irrelevant to your classes.</p>
        <p>In any case, there are some scenarios where Zelix KlassMaster(TM) cannot ignore a missing class, field or method.</p>
        <p>For example, Zelix KlassMaster(TM) cannot ignore a missing class if it is extended by a class that has been opened for obfuscation.</p>
        <p>ignoreMissingReferences statement parameters may be loosely categorized into the following groups</p>
        <p>If the ignoreMissingReferences statement appears with no parameters at all then it is the same as specifying that all missing classes, fields and methods should be ignored.</p>
        <p>Put informally (with mandatory components in bold), the syntax is:</p>
        <p>Note that because the specification is for a class which cannot be found , only limited specifications are possible. For a class to be specified, all of the following must be true:</p>
        <p>Its package qualifiers must match any specified package parameter component.</p>
        <p>If there is no package parameter component then the class must be in the default package.</p>
        <p>If a class specification parameter's class name specification is followed by a "+" tag then the parameter also causes references to any missing fields and methods of the class to be ignored.</p>
        <p>ignoreMissingReferences * and //Ignore all missing classes in the default package</p>
        <p>*.Class1 and //Ignore all missing classes with the unqualified class name "Class1"</p>
        <p>pack0.*.* and //Ignore all missing classes in a sub-package of "pack0"</p>
        <p>pack1..*; //Ignore all missing classes in "pack1" or any sub-package of "pack1"</p>
        <p>&lt;classAnnotations&gt; &lt;classModifiers&gt; "&lt;archiveQualifier&gt;"!&lt;packageQualifiers&gt;.</p>
        <p>&lt;className&gt; &lt;extendsClause&gt; &lt;implementsClause&gt;</p>
        <p>Note that because the specification is for a field which cannot be found , only limited field specific specifications are possible. For a field to be specified, all of the following must be true:</p>
        <p>ignoreMissingReferences *.* * and //Ignore all missing fields</p>
        <p>*.Class1 f* and //Ignore all missing fields matching "f*" in classes with the unqualified name "Class1"</p>
        <p>@*.* public *.* * //Ignore all missing fields in public classes with an annotation.</p>
        <p>Note that because the specification is for a method which cannot be found , only limited method specific specifications are possible. For a method to be specified, all of the following must be true:</p>
        <p>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist.</p>
        <p>(A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</p>
        <p>The ignoreMissingReferences statement supports the special method name &lt;init&gt; which represents a constructor.</p>
        <p>ignoreMissingReferences *.* *(*) and //Ignore all missing methods</p>
        <p>*.* &lt;init&gt;() and //Ignore all missing no argument constructors</p>
        <p>//Ignore all missing the methods of any class implementing "Serializable" in a package that matches "pack1.*"</p>
        <p>pack1.* implements java.io.Serializable *(*) ;</p>
        <p>" ignoreMissingReferences " specificationParameter (" and " specificationParameter) * ";"</p>
        <p>annotationSpecifier ::= ("@" [packageExcludeParameter] nameSpecifier) | annotationSpecifierAndList</p>
        <p>annotationSpecifierAndList ::= ["!"] "(" annotationSpecifierOrList ("&amp;&amp;" annotationSpecifierOrList)* ")"</p>
        <p>annotationSpecifierOrList ::= annotationSpecifier ("||" annotationSpecifier)*</p>
        <p>[annotationSpecifier] [["!"] " public " | " package "]</p>
        <p>[["!"] " abstract "] [["!"] " final "] [["!"] " interface "] [["!"] " synthetic "] [["!"] " enum "] [["!"] " annotation "]</p>
        <p>[" \" " archiveQualifier " \" " " ! "] [packageExcludeParameter ["."]] nameSpecifier ["^"] ["+"] [containingClause]</p>
        <p>containingClause ::= " containing " " { " " memberAndList " " } "</p>
        <p>extendsClause ::= " extends " [annotationSpecifier] wildcardClassName</p>
        <p>fieldSpecificationParameter ::= classSpecificationParameter nameSpecifier</p>
        <p>fullyQualifiedClassName ::= name ("." name) *</p>
        <p>implementsClause ::= " implements " [annotationSpecifier] wildcardClassName ("," [annotationSpecifier] wildcardClassName) *</p>
        <p>memberAndList ::= ["!"] "(" memberOrList ("&amp;&amp;" memberOrList)* ")"</p>
        <p>memberOrList ::= memberSpecifier ("||" memberSpecifier)*</p>
        <p>memberSpecifier ::= fieldSpecificationParameter | methodSpecificationParameter</p>
        <p>nameAndList ::= ["!"] "(" nameOrList ("&amp;&amp;" nameOrList)* ")"</p>
        <p>methodSpecificationParameter ::= classSpecificationParameter nameSpecifier "(" [ "*" | (parameter ("," parameter))] ")"</p>
        <p>name ::= (["0"-"9","a"-"z","A"-"Z","$","_"]) +</p>
        <p>i.e. a Java identifer (e.g. a package, class, field or method name) with no wildcards allowed</p>
        <p>nameOrList ::= nameSpecifier ("||" nameSpecifier)*</p>
        <p>nameSpecifier ::= wildcardName | nameAndList</p>
        <p>packageExcludeParameter ::= packageName | packageNameAndList</p>
        <p>packageName ::= wildcardName ("." wildcardName) * "."</p>
        <p>NB: the final "." is part of the package name</p>
        <p>packageNameAndList ::= ["!"] "(" packageNameOrList ("&amp;&amp;" packageNameOrList)* ")"</p>
        <p>packageNameOrList ::= packageExcludeParameter ("||" packageExcludeParameter)*</p>
        <p>parameter ::= [annotationSpecifier] ("*" | "?" | type)</p>
        <p>(" byte " | " short " | " char " | " int " | " long " | " float " | " double "| " boolean " |</p>
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
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - ignoreMissingReferences",
  "url": "https://zkm-web.vercel.app/docs/ignoreMissingReferencesStatement"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - ignoreMissingReferences"
    }
  ]
}]
useHead({
  title: 'ignoreMissingReferences | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - ignoreMissingRefer | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/ignoreMissingReferencesStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
