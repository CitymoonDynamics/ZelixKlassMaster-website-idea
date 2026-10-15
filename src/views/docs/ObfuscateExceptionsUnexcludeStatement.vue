<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - obfuscateExceptionsUnexclude</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - obfuscateExceptionsUnexclude</li>
          <li>The obfuscateExceptionsUnexclude Statement The ZKM Script obfuscateExceptionsUnexclude statement acts only on the set of excluded methods and classes created by an obfuscateExceptionsExclude statement. The statement removes specified methods and classes from the set of excluded methods and classes so that they become available once more for exception obfuscation by the ZKM Script obfuscate statement.</li>
          <li>The obfuscateExceptionsUnexclude statement is intended to be used in conjunction with a obfuscateExceptionsExclude statement to specify a final set of excluded methods and classes that would have been difficult to achieve using a obfuscateExceptionsExclude statement alone. Typically, in such cases, an initial obfuscateExceptionsExclude statement would set the broad exclusions and then the obfuscateExceptionsUnexclude statement would specify the exceptions to those broad exclusions.</li>
          <li>Successive obfuscateExceptionsUnexclude statements have a cumulative effect . The effect of all exclusions and unexclusions that have been set is removed by a resetObfuscateExceptionsExclusions statement.</li>
          <li>The remainder of this page is organized into the following sections.</li>
          <li>Examples and Explanation</li>
          <li>Syntax</li>
          <li>Class unexclude parameters</li>
          <li>Method unexclude parameters</li>
          <li>Its annotations must match any specified annotations.</li>
          <li>Its modifiers (e.g. public final ) must match all parameter modifiers. So if the parameters are public abstract !interface then the class must be public , abstract and NOT an interface to be excluded.</li>
          <li>If the parameter has an archive qualifier then the class must be contained in an archive which matches that archive qualifier.</li>
          <li>Its package qualifiers must match any specified package exclude parameter component. If there is no package exclude parameter component then the class must be in the default package.</li>
          <li>Its unqualified name must match the specified class name specification.</li>
          <li>If the parameter has a containing clause then the class must contain members which match the specified class</li>
          <li>If the parameter has an extends clause then the class must be a subclass of the specified class</li>
          <li>If the parameter has an implements clause then the class must directly or indirectly implement all of the specified interfaces</li>
        </ul>
        <pre class="code"><code>obfuscateExceptionsUnexclude 
         * and //unexclude all methods in all classes in default package
         *.Class1 and //unexclude all methods in all classes with the unqualified class name "Class1"
         //unexclude all methods in all classes that start with "Class" except for "Class0" and "Class1"
         *.(Class* &amp;&amp; !(Class0 || Class1)) and
         //unexclude all classes annotated which an annotation matching *.MyAnnotation0
         @*.MyAnnotation0 *.*;</code></pre>
        <ul>
          <li>Its containing class must match any class unexclude parameter component.</li>
          <li>Its annotations must match any specified method or method parameter level annotations.</li>
          <li>Its modifiers (e.g. public native ) must match all parameter method modifiers. So if the parameters are public static !synchronized then the method must be public , static and NOT synchronized to be excluded from obfuscation.</li>
          <li>Its name must match the parameter method name specification. The special name &lt;init&gt; matches all constructors and the special name &lt;clinit&gt; matches all static initializers.</li>
          <li>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist. (A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</li>
          <li>Its throws clause must contain all the classes specified in the obfuscateExceptionsExclude parameter's throw clause. So, if the obfuscateExceptionsExclude parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be excluded.</li>
        </ul>
        <pre class="code"><code>obfuscateExceptionsUnexclude 
         pack2.Class1 method1(int) and //Unexclude method1(int) in class pack2.Class1 from exception obfuscation
         *.* *(*) and //Unexclude all methods from exception obfuscation
         *.* &lt;init&gt;(*) and //Unexclude all contructors from exception obfuscation
         *.* &lt;clinit&gt;(*) and //Unexclude all static initializers from exception obfuscation
         *.* m*() and //Unexclude all methods taking no parameters with names matching "m*"
         *.* *(*) throws java.io.IOException and //Unexclude all methods that throw java.io.IOException. !(pack1*.)* (m* &amp;&amp; !(ma* || me*))() and //Unexclude all methods in packages that don't start with "pack1"
                                                 //and that have names that start with "m" but not "ma" or "me"
         *.* abstract *(java.lang.String) and //Unexclude the names of all "abstract" methods that
                                              //take a single String. //Unexclude all the methods of any class implementing "Serializable" in a package that matches "pack1.*"
         pack1.* implements java.io.Serializable *(*) and 
         "MyJar*.jar"!*.* and //Unexclude all classes contained in a JAR file with a name matching "MyJar*.jar"
         //Unexclude all methods annotated with a class matching *.MyAnnotation0. *.* @*.MyAnnotation0 *(*);</code></pre>
        <p>The obfuscateExceptionsUnexclude Statement</p>
        <p>The ZKM Script obfuscateExceptionsUnexclude statement acts only on the set of excluded methods and classes created by an</p>
        <p>statement. The statement removes specified methods and classes from the set of excluded methods and classes so that they become available once more for exception obfuscation by the ZKM Script</p>
        <p>The obfuscateExceptionsUnexclude statement is intended to be used in conjunction with a</p>
        <p>statement to specify a final set of excluded methods and classes that would have been difficult to achieve using a</p>
        <p>statement alone. Typically, in such cases, an initial</p>
        <p>statement would set the broad exclusions and then the obfuscateExceptionsUnexclude</p>
        <p>statement would specify the exceptions to those broad exclusions.</p>
        <p>Successive obfuscateExceptionsUnexclude statements have a cumulative effect . The effect of all exclusions and unexclusions that have been set is removed by a</p>
        <p>The syntax of the obfuscateExceptionsUnexclude statement is the same as that of the</p>
        <p>obfuscateExceptionsUnexclude statement parameters may be loosely categorized into the following groups</p>
        <p>Put informally (with mandatory components in bold), the syntax of a obfuscateExceptionsUnexclude class unexclude parameter is:</p>
        <p>&lt;classAnnotations&gt; &lt;classModifiers&gt; "&lt;archiveQualifier&gt;"!&lt;packageQualifiers&gt;.</p>
        <p>&lt;className&gt; &lt;containingClause&gt; &lt;extendsClause&gt; &lt;implementsClause&gt; ;</p>
        <p>For a class and all of its methods to be unexcluded from exception obfuscation, all of the following must be true:</p>
        <p>Its modifiers (e.g. public final ) must match all parameter modifiers.</p>
        <p>public , abstract and NOT an interface to be excluded.</p>
        <p>obfuscateExceptionsUnexclude * and //unexclude all methods in all classes in default package</p>
        <p>*.Class1 and //unexclude all methods in all classes with the unqualified class name "Class1"</p>
        <p>//unexclude all methods in all classes that start with "Class" except for "Class0" and "Class1"</p>
        <p>//unexclude all classes annotated which an annotation matching *.MyAnnotation0</p>
        <p>Put informally (with mandatory components in bold), the syntax of a obfuscateExceptionsUnexclude method unexclude parameter is:</p>
        <p>&lt;className&gt; &lt;extendsClause&gt; &lt;implementsClause&gt;</p>
        <p>&lt;methodAnnotations&gt; &lt;methodModifiers&gt; &lt;methodName&gt;( &lt;argumentTypes&gt; ) &lt;throwsClause&gt; +signatureClasses;</p>
        <p>For a method to be unexcluded from exception obfuscation, all of the following must be true:</p>
        <p>Its modifiers (e.g. public native ) must match all parameter method modifiers.</p>
        <p>public , static and NOT synchronized to be excluded from obfuscation.</p>
        <p>Its name must match the parameter method name specification.</p>
        <p>The special name &lt;init&gt; matches all constructors and the special name &lt;clinit&gt;</p>
        <p>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist.</p>
        <p>(A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</p>
        <p>Its throws clause must contain all the classes specified in the obfuscateExceptionsExclude parameter's throw clause.</p>
        <p>So, if the obfuscateExceptionsExclude parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be excluded.</p>
        <p>obfuscateExceptionsUnexclude pack2.Class1 method1(int) and //Unexclude method1(int) in class pack2.Class1 from exception obfuscation</p>
        <p>*.* *(*) and //Unexclude all methods from exception obfuscation</p>
        <p>*.* &lt;init&gt;(*) and //Unexclude all contructors from exception obfuscation</p>
        <p>*.* &lt;clinit&gt;(*) and //Unexclude all static initializers from exception obfuscation</p>
        <p>*.* m*() and //Unexclude all methods taking no parameters with names matching "m*"</p>
        <p>*.* *(*) throws java.io.IOException and //Unexclude all methods that throw java.io.IOException.</p>
        <p>!(pack1*.)* (m* &amp;&amp; !(ma* || me*))() and //Unexclude all methods in packages that don't start with "pack1"</p>
        <p>//and that have names that start with "m" but not "ma" or "me"</p>
        <p>*.* abstract *(java.lang.String) and //Unexclude the names of all "abstract" methods that</p>
        <p>//Unexclude all the methods of any class implementing "Serializable" in a package that matches "pack1.*"</p>
        <p>pack1.* implements java.io.Serializable *(*) and "MyJar*.jar"!*.* and //Unexclude all classes contained in a JAR file with a name matching "MyJar*.jar"</p>
        <p>//Unexclude all methods annotated with a class matching *.MyAnnotation0.</p>
        <p>" obfuscateExceptionsUnexclude " unexcludeParameter (" and " unexcludeParameter) * ";"</p>
        <p>annotationSpecifier ::= ("@" [packageUnexcludeParameter] nameSpecifier) | annotationSpecifierAndList</p>
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
        <p>classUnexcludeParameter [annotationSpecifier] [["!"] " public " | " protected "| " package "| " private "]</p>
        <p>[["!"] " abstract "] [["!"] " static "] [["!"] " final "] [["!"] " native "] [["!"] " synchronized "] [["!"] " synthetic "] [["!"] " bridge "]</p>
        <p>(nameSpecifier | "&lt;init&gt;" | "&lt;clinit&gt;") "(" [ "*" | (parameter ("," parameter) * )] ")"</p>
        <p>name ::= (["0"-"9","a"-"z","A"-"Z","$","_"]) +</p>
        <p>i.e. a Java identifer (e.g. a package, class, field or method name) with no wildcards allowed</p>
        <p>nameOrList ::= nameSpecifier ("||" nameSpecifier)*</p>
        <p>nameSpecifier ::= wildcardName | nameAndList</p>
        <p>packageUnexcludeParameter ::= packageName | packageNameAndList</p>
        <p>packageName ::= wildcardName ("." wildcardName) * "."</p>
        <p>NB: the final "." is part of the package name</p>
        <p>packageNameAndList ::= ["!"] "(" packageNameOrList ("&amp;&amp;" packageNameOrList)* ")"</p>
        <p>packageNameOrList ::= packageUnexcludeParameter ("||" packageUnexcludeParameter)*</p>
        <p>parameter ::= [annotationSpecifier] ("*" | "?" | type)</p>
        <p>(" byte " | " short " | " char " | " int " | " long " | " float " | " double "| " boolean " |</p>
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
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - obfuscateExceptionsUnexclude",
  "url": "https://zkm-web.vercel.app/docs/obfuscateExceptionsUnexcludeStatement"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - obfuscateExceptionsUnexclude"
    }
  ]
}]
useHead({
  title: 'obfuscateExceptionsUnexclude | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - obfuscateException | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/obfuscateExceptionsUnexcludeStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
