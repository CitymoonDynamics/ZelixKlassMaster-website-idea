<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - obfuscateReferencesExclude</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - obfuscateReferencesExclude</li>
          <li>The obfuscateReferencesExclude Statement The ZKM Script obfuscateReferencesExclude statement allows you to specify which field or method references (i.e. accesses or calls) you do not want to have obfuscated. Zelix KlassMaster(TM) obfuscates a field or method reference by replacing it with a Java Reflection API call and then String encrypting the field or method name. It has an effect only if your ZKM Script obfuscate statement has specified obfuscateReferences=normal . Successive obfuscateReferencesExclude statements have a cumulative effect .</li>
          <li>If a obfuscateReferencesExclude statement has an accompanying obfuscateReferencesInclude statement then the obfuscateReferencesExclude statement removes field and/or method references from the set of references matched by that obfuscateReferencesInclude statement. If there is no accompanying obfuscateReferencesInclude statement then the obfuscateReferencesExclude statement removes references from the set of all field and method references in your bytecode.</li>
          <li>Once a specification has been set its effect can be removed entirely by a following resetObfuscateReferenceExclusions statement.</li>
          <li>If your ZKM Script obfuscate statement uses the obfuscateReferences=normal setting then you must specify which field and/or method references you want to obfuscate. Otherwise no reference obfuscation will be done.</li>
          <li>The remainder of this page is organized into the following sections.</li>
          <li>Examples and Explanation</li>
          <li>Syntax</li>
          <li>The containedIn clause</li>
          <li>Field reference exclude parameters</li>
          <li>Method reference exclude parameters</li>
          <li>Its containing class must match any class exclude parameter component.</li>
          <li>Its annotations must match any specified method or method parameter level annotations.</li>
          <li>Its modifiers (e.g. public native ) must match all parameter method modifiers. So if the parameters are public static !synchronized then the method must be public , static and NOT synchronized to be matched.</li>
          <li>Its name must match the parameter method name.</li>
          <li>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist. (A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</li>
          <li>Its throws clause must contain all the classes specified in the exclude parameter's throw clause. So, if the exclude parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be matched.</li>
          <li>The reference must occur in a method which matches the &lt;containedInClause&gt; if it exists.</li>
          <li>Its annotations must match any specified field level annotations.</li>
          <li>Its modifiers (e.g. public volatile ) must match all parameter field modifiers. So if the parameters are public static !transient then the field must be public , static and NOT transient to be matched.</li>
          <li>Its type (e.g. int[] or java.lang.String) must match the parameter field type if it exists.</li>
          <li>Its name must match the parameter field name.</li>
        </ul>
        <pre class="code"><code>obfuscateReferencesExclude 
   *.* * and //Match references to all fields
   //Match references to all non-transient "int" fields matching "f*" which are in classes with the unqualified name "Class1"
   *.Class1 !transient int f* and 
   //Match references to all fields in java.lang.System where the reference occurs in a method within the "pack0" package
   containedIn{pack0.* *(*)} java.lang.System * and 
   *.* @*.MyAnnotation0 *;  //Match references to all fields annotated with a class matching "*.MyAnnotation0".</code></pre>
        <pre class="code"><code>obfuscateReferencesExclude 
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
        <p>The obfuscateReferencesExclude Statement</p>
        <p>The ZKM Script obfuscateReferencesExclude statement allows you to specify which field or method references (i.e. accesses or calls) you do not want to have obfuscated.</p>
        <p>Zelix KlassMaster(TM) obfuscates a field or method reference by replacing it with a Java Reflection API call and then String encrypting the field or method name.</p>
        <p>It has an effect only if your ZKM Script</p>
        <p>statement has specified obfuscateReferences=normal .</p>
        <p>Successive obfuscateReferencesExclude statements have a cumulative effect .</p>
        <p>If a obfuscateReferencesExclude statement has an accompanying</p>
        <p>statement then the obfuscateReferencesExclude statement removes field and/or method references from the set of references matched by that</p>
        <p>statement then the obfuscateReferencesExclude statement removes references from the set of all field and method references in your bytecode.</p>
        <p>Once a specification has been set its effect can be removed entirely by a following</p>
        <p>statement uses the obfuscateReferences=normal setting then you must specify which field and/or method references you want to obfuscate. Otherwise no reference obfuscation will be done.</p>
        <p>obfuscateReferencesExclude statement parameters must specify a field or a method reference. Both types may optionally start with a containedIn clause.</p>
        <p>Both the field and method reference exclude parameters below can have an initial containedIn clause.</p>
        <p>The containedIn clause specifies the methods containing the field or method reference that will obfuscated.</p>
        <p>Put another way, it specifies the methods from which the field or method is referenced.</p>
        <p>For example you could tell Zelix KlassMaster(TM) to obscure all references to methods of java.lang.System but only where those references are contained in methods within your class pack0.Class0 .</p>
        <p>Put informally (with mandatory components in bold), the syntax of the containedIn clause is:</p>
        <p>Or with the &lt;methodExcludeParameter&gt; expanded:</p>
        <p>containedIn{ &lt;classAnnotations&gt; &lt;classModifiers&gt; "&lt;archiveQualifier&gt;"!&lt;packageQualifiers&gt;.</p>
        <p>&lt;className&gt; &lt;extendsClause&gt; &lt;implementsClause&gt;</p>
        <p>&lt;methodAnnotations&gt; &lt;methodModifiers&gt; &lt;methodName&gt;( &lt;argumentTypes&gt; ) &lt;throwsClause&gt; }</p>
        <p>So you have a method specification within parentheses preceded by the keyword containedIn . If a obfuscateReferencesExclude statement doesn't have a containedIn clause then it is the same as if it has a containedIn clause like the following which specifies ALL methods. Such a containedIn clause is satisfied by all references.</p>
        <p>For a method containing a reference to be matched by a containedIn clause, all of the following must be true for the clause's &lt;methodExcludeParameter&gt;:</p>
        <p>Its modifiers (e.g. public native ) must match all parameter method modifiers.</p>
        <p>public , static and NOT synchronized to be matched.</p>
        <p>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist.</p>
        <p>(A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</p>
        <p>Its throws clause must contain all the classes specified in the exclude parameter's throw clause.</p>
        <p>So, if the exclude parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be matched.</p>
        <p>Put informally (with mandatory components in bold), the syntax is:</p>
        <p>&lt;containedInClause&gt; &lt;classAnnotations&gt; &lt;classModifiers&gt; "&lt;archiveQualifier&gt;"!&lt;packageQualifiers&gt;.</p>
        <p>&lt;fieldAnnotations&gt; &lt;fieldModifiers&gt; &lt;fieldType&gt; &lt;fieldName&gt;;</p>
        <p>For a field reference to be matched by the statement, all of the following must be true:</p>
        <p>Its modifiers (e.g. public volatile ) must match all parameter field modifiers.</p>
        <p>public , static and NOT transient to be matched.</p>
        <p>obfuscateReferencesExclude *.* * and //Match references to all fields</p>
        <p>//Match references to all non-transient "int" fields matching "f*" which are in classes with the unqualified name "Class1"</p>
        <p>//Match references to all fields in java.lang.System where the reference occurs in a method within the "pack0" package</p>
        <p>containedIn{pack0.* *(*)} java.lang.System * and *.* @*.MyAnnotation0 *; //Match references to all fields annotated with a class matching "*.MyAnnotation0".</p>
        <p>&lt;methodAnnotations&gt; &lt;methodModifiers&gt; &lt;methodName&gt;( &lt;argumentTypes&gt; ) &lt;throwsClause&gt; +signatureClasses;</p>
        <p>For a method to be matched by the statement, all of the following must be true:</p>
        <p>obfuscateReferencesExclude *.* *(*) and //Match references to all methods</p>
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
        <p>" obfuscateReferencesExclude " excludeParameter (" and " excludeParameter) * ";"</p>
        <p>annotationSpecifier ::= ("@" [packageExcludeParameter] nameSpecifier) | annotationSpecifierAndList</p>
        <p>annotationSpecifierAndList ::= ["!"] "(" annotationSpecifierOrList ("&amp;&amp;" annotationSpecifierOrList)* ")"</p>
        <p>annotationSpecifierOrList ::= annotationSpecifier ("||" annotationSpecifier)*</p>
        <p>[annotationSpecifier] [["!"] " public " | " package "]</p>
        <p>[["!"] " abstract "] [["!"] " final "] [["!"] " interface "] [["!"] " synthetic "] [["!"] " enum "] [["!"] " annotation "]</p>
        <p>[" \" " archiveQualifier " \" " " ! "] [packageExcludeParameter ["."]] nameSpecifier ["+"] [containingClause]</p>
        <p>containedInClause ::= " containedIn " " { " " methodExcludeParameter " " } "</p>
        <p>containingClause ::= " containing " " { " " memberAndList " " } "</p>
        <p>[containedInClause] fieldExcludeParameter</p>
        <p>[containedInClause] methodExcludeParameter</p>
        <p>extendsClause ::= " extends " [annotationSpecifier] wildcardClassName</p>
        <p>classExcludeParameter [annotationSpecifier] [["!"] " public " | " protected "| " package "| " private "]</p>
        <p>[["!"] " static "] [["!"] " final "] [["!"] " transient "] [["!"] " volatile "] [["!"] " synthetic "] [["!"] " enum "]</p>
        <p>fullyQualifiedClassName ::= name ("." name) *</p>
        <p>implementsClause ::= " implements " [annotationSpecifier] wildcardClassName ("," [annotationSpecifier] wildcardClassName) *</p>
        <p>memberAndList ::= ["!"] "(" memberOrList ("&amp;&amp;" memberOrList)* ")"</p>
        <p>memberOrList ::= memberSpecifier ("||" memberSpecifier)*</p>
        <p>memberSpecifier ::= fieldExcludeParameter | methodExcludeParameter</p>
        <p>nameAndList ::= ["!"] "(" nameOrList ("&amp;&amp;" nameOrList)* ")"</p>
        <p>[["!"] " abstract "] [["!"] " static "] [["!"] " final "] [["!"] " native "] [["!"] " synchronized "] [["!"] " synthetic "] [["!"] " bridge "]</p>
        <p>nameSpecifier "(" [ "*" | (parameter ("," parameter) * )] ")" ["throws" wildcardClassName]</p>
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
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM) - obfuscateReferencesExclude","url":"https://zkm-web.vercel.app/docs/obfuscateReferencesExcludeStatement"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - obfuscateReferencesExclude | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/obfuscateReferencesExcludeStatement' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
