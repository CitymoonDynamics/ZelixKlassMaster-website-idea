<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - obfuscateReferencesInclude</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - obfuscateReferencesInclude</li>
          <li>The obfuscateReferencesInclude Statement The ZKM Script obfuscateReferencesInclude statement allows you to specify which field or method references (i.e. accesses or calls) you want to have obfuscated. Zelix KlassMaster(TM) obfuscates a field or method reference by replacing it with a Java Reflection API call and then String encrypting the field or method name. It has an effect only if your ZKM Script obfuscate statement has specified obfuscateReferences=normal . Successive obfuscateReferencesInclude statements have a cumulative effect . Once a specification has been set its effect can be</li>
          <li>reduced by an accompanying obfuscateReferencesExclude statement.</li>
          <li>removed entirely by a following resetObfuscateReferenceExclusions statement.</li>
          <li>Examples and Explanation</li>
          <li>Syntax</li>
          <li>The containedIn clause</li>
          <li>Field reference include parameters</li>
          <li>Method reference include parameters</li>
          <li>Its containing class must match any class include parameter component.</li>
          <li>Its annotations must match any specified method or method parameter level annotations.</li>
          <li>Its modifiers (e.g. public native ) must match all parameter method modifiers. So if the parameters are public static !synchronized then the method must be public , static and NOT synchronized to be matched.</li>
          <li>Its name must match the parameter method name.</li>
          <li>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist. (A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</li>
          <li>Its throws clause must contain all the classes specified in the include parameter's throw clause. So, if the include parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be matched.</li>
          <li>The reference must occur in a method which matches the &lt;containedInClause&gt; if it exists.</li>
          <li>Its annotations must match any specified field level annotations.</li>
          <li>Its modifiers (e.g. public volatile ) must match all parameter field modifiers. So if the parameters are public static !transient then the field must be public , static and NOT transient to be matched.</li>
          <li>Its type (e.g. int[] or java.lang.String) must match the parameter field type if it exists.</li>
          <li>Its name must match the parameter field name.</li>
        </ul>
        <pre class="code"><code>obfuscateReferencesInclude 
   *.* * and //Match references to all fields
   //Match references to all non-transient "int" fields matching "f*" which are in classes with the unqualified name "Class1"
   *.Class1 !transient int f* and 
   //Match references to all fields in java.lang.System where the reference occurs in a method within the "pack0" package
   containedIn{pack0.* *(*)} java.lang.System * and 
   *.* @*.MyAnnotation0 *;  //Match references to all fields annotated with a class matching "*.MyAnnotation0".</code></pre>
        <pre class="code"><code>obfuscateReferencesInclude 
   *.* *(*) and  //Match references to all methods
   //Match references to all non-static methods taking no parameters with names matching "m*"  
   //where the reference occurs in a method within the "pack0" package                        
   containedIn{pack0.* *(*)} *.* !static m*() and 
   //Match references to all non-static methods taking no parameters with names matching "m*"
   *.* !static m*()   and  
   //Match references to all "native" methods. Also match the containing class. *.*^ native *(*)  and  
   //Match references to all methods that throw "java.io.IOException". *.* *(*) throws java.io.IOException and  
   //Match references to all "abstract" methods that take a single String. *.* abstract *(java.lang.String) and 
   //Match references to all the methods of any class implementing "Serializable" in a package that matches "pack1.*"
   pack1.* implements java.io.Serializable *(*) and
   //Match references to all classes contained in a JAR file with a name matching "MyJar*.jar"
   "MyJar*.jar"!*.* and 
   //Match references to all methods annotated with a class matching "*.MyAnnotation0". *.* @*.MyAnnotation0 *(*) and
   //Match references to all methods in java.lang.System which occur in a method annotated
   //with a class matching "*.MyAnnotation0". containedIn{*.* @*.MyAnnotation0 *(*)} java.lang.System *(*);</code></pre>
        <p>The obfuscateReferencesInclude Statement</p>
        <p>The ZKM Script obfuscateReferencesInclude statement allows you to specify which field or method references (i.e. accesses or calls) you want to have obfuscated.</p>
        <p>Zelix KlassMaster(TM) obfuscates a field or method reference by replacing it with a Java Reflection API call and then String encrypting the field or method name.</p>
        <p>It has an effect only if your ZKM Script</p>
        <p>statement has specified obfuscateReferences=normal .</p>
        <p>Successive obfuscateReferencesInclude statements have a cumulative effect . Once a specification has been set its effect can be</p>
        <p>statement uses the obfuscateReferences=normal setting then you must specify which field and/or method references you want to obfuscate. Otherwise no reference obfuscation will be done.</p>
        <p>The remainder of this page is organized into the following sections.</p>
        <p>obfuscateReferencesInclude statement parameters must specify a field or a method reference. Both types may optionally start with a containedIn clause.</p>
        <p>Both the field and method reference include parameters below can have an initial containedIn clause.</p>
        <p>The containedIn clause specifies the methods containing the field or method reference that will obfuscated.</p>
        <p>Put another way, it specifies the methods from which the field or method is referenced.</p>
        <p>For example you could tell Zelix KlassMaster(TM) to obscure all references to methods of java.lang.System but only where those references are contained in methods within your class pack0.Class0 .</p>
        <p>Put informally (with mandatory components in bold), the syntax of the containedIn clause is:</p>
        <p>Or with the &lt;methodIncludeParameter&gt; expanded:</p>
        <p>containedIn{ &lt;classAnnotations&gt; &lt;classModifiers&gt; "&lt;archiveQualifier&gt;"!&lt;packageQualifiers&gt;.</p>
        <p>&lt;className&gt; &lt;extendsClause&gt; &lt;implementsClause&gt;</p>
        <p>&lt;methodAnnotations&gt; &lt;methodModifiers&gt; &lt;methodName&gt;( &lt;argumentTypes&gt; ) &lt;throwsClause&gt; }</p>
        <p>So you have a method specification within parentheses preceded by the keyword containedIn . If a obfuscateReferencesInclude statement doesn't have a containedIn clause then it is the same as if it has a containedIn clause like the following which specifies ALL methods. Such a containedIn clause is satisfied by all references.</p>
        <p>For a method containing a reference to be matched by a containedIn clause, all of the following must be true for the clause's &lt;methodIncludeParameter&gt;:</p>
        <p>Its modifiers (e.g. public native ) must match all parameter method modifiers.</p>
        <p>public , static and NOT synchronized to be matched.</p>
        <p>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist.</p>
        <p>(A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</p>
        <p>Its throws clause must contain all the classes specified in the include parameter's throw clause.</p>
        <p>So, if the include parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be matched.</p>
        <p>Put informally (with mandatory components in bold), the syntax is:</p>
        <p>&lt;containedInClause&gt; &lt;classAnnotations&gt; &lt;classModifiers&gt; "&lt;archiveQualifier&gt;"!&lt;packageQualifiers&gt;.</p>
        <p>&lt;fieldAnnotations&gt; &lt;fieldModifiers&gt; &lt;fieldType&gt; &lt;fieldName&gt;;</p>
        <p>For a field reference to be matched by the statement, all of the following must be true:</p>
        <p>Its modifiers (e.g. public volatile ) must match all parameter field modifiers.</p>
        <p>public , static and NOT transient to be matched.</p>
        <p>obfuscateReferencesInclude *.* * and //Match references to all fields</p>
        <p>//Match references to all non-transient "int" fields matching "f*" which are in classes with the unqualified name "Class1"</p>
        <p>//Match references to all fields in java.lang.System where the reference occurs in a method within the "pack0" package</p>
        <p>containedIn{pack0.* *(*)} java.lang.System * and *.* @*.MyAnnotation0 *; //Match references to all fields annotated with a class matching "*.MyAnnotation0".</p>
        <p>&lt;methodAnnotations&gt; &lt;methodModifiers&gt; &lt;methodName&gt;( &lt;argumentTypes&gt; ) &lt;throwsClause&gt; +signatureClasses;</p>
        <p>For a method to be matched by the statement, all of the following must be true:</p>
        <p>obfuscateReferencesInclude *.* *(*) and //Match references to all methods</p>
        <p>//Match references to all non-static methods taking no parameters with names matching "m*"</p>
        <p>//where the reference occurs in a method within the "pack0" package</p>
        <p>containedIn{pack0.* *(*)} *.* !static m*() and</p>
        <p>//Match references to all "native" methods. Also match the containing class.</p>
        <p>//Match references to all methods that throw "java.io.IOException".</p>
        <p>//Match references to all "abstract" methods that take a single String.</p>
        <p>//Match references to all the methods of any class implementing "Serializable" in a package that matches "pack1.*"</p>
        <p>pack1.* implements java.io.Serializable *(*) and</p>
        <p>//Match references to all classes contained in a JAR file with a name matching "MyJar*.jar"</p>
        <p>//Match references to all methods annotated with a class matching "*.MyAnnotation0".</p>
        <p>//Match references to all methods in java.lang.System which occur in a method annotated</p>
        <p>//with a class matching "*.MyAnnotation0".</p>
        <p>containedIn{*.* @*.MyAnnotation0 *(*)} java.lang.System *(*);</p>
        <p>" obfuscateReferencesInclude " includeParameter (" and " includeParameter) * ";"</p>
        <p>annotationSpecifier ::= ("@" [packageIncludeParameter] nameSpecifier) | annotationSpecifierAndList</p>
        <p>annotationSpecifierAndList ::= ["!"] "(" annotationSpecifierOrList ("&amp;&amp;" annotationSpecifierOrList)* ")"</p>
        <p>annotationSpecifierOrList ::= annotationSpecifier ("||" annotationSpecifier)*</p>
        <p>[annotationSpecifier] [["!"] " public " | " package "]</p>
        <p>[["!"] " abstract "] [["!"] " final "] [["!"] " interface "] [["!"] " synthetic "] [["!"] " enum "] [["!"] " annotation "]</p>
        <p>[" \" " archiveQualifier " \" " " ! "] [packageExcludeParameter ["."]] nameSpecifier ["+"] [containingClause]</p>
        <p>containedInClause ::= " containedIn " " { " " methodIncludeParameter " " } "</p>
        <p>containingClause ::= " containing " " { " " memberAndList " " } "</p>
        <p>[containedInClause] fieldIncludeParameter</p>
        <p>[containedInClause] methodIncludeParameter</p>
        <p>extendsClause ::= " extends " [annotationSpecifier] wildcardClassName</p>
        <p>classIncludeParameter [annotationSpecifier] [["!"] " public " | " protected "| " package "| " private "]</p>
        <p>[["!"] " static "] [["!"] " final "] [["!"] " transient "] [["!"] " volatile "] [["!"] " synthetic "] [["!"] " enum "]</p>
        <p>fullyQualifiedClassName ::= name ("." name) *</p>
        <p>implementsClause ::= " implements " [annotationSpecifier] wildcardClassName ("," [annotationSpecifier] wildcardClassName) *</p>
        <p>memberAndList ::= ["!"] "(" memberOrList ("&amp;&amp;" memberOrList)* ")"</p>
        <p>memberOrList ::= memberSpecifier ("||" memberSpecifier)*</p>
        <p>memberSpecifier ::= fieldIncludeParameter | methodIncludeParameter</p>
        <p>nameAndList ::= ["!"] "(" nameOrList ("&amp;&amp;" nameOrList)* ")"</p>
        <p>[["!"] " abstract "] [["!"] " static "] [["!"] " final "] [["!"] " native "] [["!"] " synchronized "] [["!"] " synthetic "] [["!"] " bridge "]</p>
        <p>nameSpecifier "(" [ "*" | (parameter ("," parameter) * )] ")" ["throws" wildcardClassName]</p>
        <p>name ::= (["0"-"9","a"-"z","A"-"Z","$","_"]) +</p>
        <p>i.e. a Java identifer (e.g. a package, class, field or method name) with no wildcards allowed</p>
        <p>nameOrList ::= nameSpecifier ("||" nameSpecifier)*</p>
        <p>nameSpecifier ::= wildcardName | nameAndList</p>
        <p>packageIncludeParameter ::= packageName | packageNameAndList</p>
        <p>packageName ::= wildcardName ("." wildcardName) * "."</p>
        <p>NB: the final "." is part of the package name</p>
        <p>packageNameAndList ::= ["!"] "(" packageNameOrList ("&amp;&amp;" packageNameOrList)* ")"</p>
        <p>packageNameOrList ::= packageIncludeParameter ("||" packageIncludeParameter)*</p>
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
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - obfuscateReferencesInclude",
  "url": "https://zkm-web.vercel.app/docs/obfuscateReferencesIncludeStatement"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - obfuscateReferencesInclude"
    }
  ]
}]
useHead({
  title: 'obfuscateReferencesInclude | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - obfuscateReference | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/obfuscateReferencesIncludeStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
