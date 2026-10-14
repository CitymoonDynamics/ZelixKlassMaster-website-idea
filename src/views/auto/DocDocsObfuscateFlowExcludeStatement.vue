<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - obfuscateFlowExclude</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - obfuscateFlowExclude</li>
          <li>The obfuscateFlowExclude Statement The ZKM Script obfuscateFlowExclude statement excludes the specified methods from being flow obfuscated by the Zelix KlassMaster(TM) obfuscate statement. It has no impact if the obfuscate statement's obfuscateFlow parameter is set to none . Successive obfuscateFlowExclude statements have a cumulative effect . Once an exclusion has been set the only way to remove it is with a resetObfuscateFlowExclusions statement.</li>
          <li>The remainder of this page is organized into the following sections.</li>
          <li>Explanation and Examples</li>
          <li>Syntax</li>
          <li>all of the methods of any matching classes will be excluded from flow obfuscation.</li>
          <li>no special flow obfuscation fields will be added to matching classes.</li>
          <li>Class exclude parameters</li>
          <li>Method exclude parameters</li>
          <li>Its annotations must match any specified annotations.</li>
          <li>Its modifiers (e.g. public final ) must match all parameter modifiers. So if the parameters are public abstract !interface then the class must be public , abstract and NOT an interface to be excluded.</li>
          <li>If the parameter has an archive qualifier then the class must be contained in an archive which matches that archive qualifier.</li>
          <li>Its package qualifiers must match any specified package exclude parameter component. If there is no package exclude parameter component then the class must be in the default package.</li>
          <li>Its unqualified name must match the specified class name specification.</li>
          <li>If the parameter has a containing clause then the class must contain members which match the specified class</li>
          <li>If the parameter has an extends clause then the class must be a subclass of the specified class</li>
          <li>If the parameter has an implements clause then the class must directly or indirectly implement all of the specified interfaces</li>
        </ul>
        <pre class="code"><code>obfuscateFlowExclude 
         * and //exclude all methods in all classes in default package
         *.Class1 and //exclude all methods in all classes with the unqualified class name "Class1"
         //exclude all methods in all classes that start with "Class" except for "Class0" and "Class1"
         *.(Class* &amp;&amp; !(Class0 || Class1)) and
         "MyJar*.jar"!*.* and //exclude all classes contained in a JAR file with a name matching "MyJar*.jar"
         //exclude all classes annotated which an annotation matching *.MyAnnotation0
         @*.MyAnnotation0 *.*;</code></pre>
        <ul>
          <li>Its containing class must match any class exclude parameter component.</li>
          <li>Its annotations must match any specified method or method parameter level annotations.</li>
          <li>Its modifiers (e.g. public native ) must match all parameter method modifiers. So if the parameters are public static !synchronized then the method must be public , static and NOT synchronized to be excluded from obfuscation.</li>
          <li>Its name must match the parameter method name specification. The special name &lt;init&gt; matches all constructors and the special name &lt;clinit&gt; matches all static initializers.</li>
          <li>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist. (A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</li>
          <li>Its throws clause must contain all the classes specified in the obfuscateFlowExclude parameter's throw clause. So, if the obfuscateFlowExclude parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be excluded.</li>
        </ul>
        <pre class="code"><code>obfuscateFlowExclude 
         pack2.Class1 method1(int) and //Exclude method1(int) in class pack2.Class1 from flow obfuscation
         *.* *(*) and //Exclude all methods from flow obfuscation
         *.* &lt;init&gt;(*) and //Exclude all contructors from flow obfuscation
         *.* &lt;clinit&gt;(*) and //Exclude all static initializers from flow obfuscation
         *.* m*() and //Exclude all methods taking no parameters with names matching "m*"
         *.* *(*) throws java.io.IOException and //Exclude all methods that throw java.io.IOException. !(pack1*.)* (m* &amp;&amp; !(ma* || me*))() and //Exclude all methods in packages that don't start with "pack1"
                                                 //and that have names that start with "m" but not "ma" or "me"
         *.* abstract *(java.lang.String) and //Exclude the names of all "abstract" methods that
                                              //take a single String. //Exclude all the methods of any class implementing "Serializable" in a package that matches "pack1.*"
          pack1.* implements java.io.Serializable *(*) and 
          //Exclude all methods annotated with a class matching *.MyAnnotation0. *.* @*.MyAnnotation0 *(*);</code></pre>
        <p>The ZKM Script obfuscateFlowExclude statement excludes the specified methods from being flow obfuscated by the Zelix KlassMaster(TM)</p>
        <p>obfuscate statement's obfuscateFlow parameter is set to none .</p>
        <p>Successive obfuscateFlowExclude statements have a cumulative effect . Once an exclusion has been set the only way to remove it is with a</p>
        <p>The primary effect of the obfuscateFlowExclude statement is to exclude methods from flow obfuscation.</p>
        <p>You can use either class or method parameters. If you use a class parameter then</p>
        <p>obfuscateFlowExclude statement parameters may be loosely categorized into the following groups</p>
        <p>Put informally (with mandatory components in bold), the syntax of an obfuscateFlowExclude class parameter is:</p>
        <p>&lt;classAnnotations&gt; &lt;classModifiers&gt; "&lt;archiveQualifier&gt;"!&lt;packageQualifiers&gt;.</p>
        <p>&lt;className&gt; &lt;containingClause&gt; &lt;extendsClause&gt; &lt;implementsClause&gt; ;</p>
        <p>For a class and all of its methods to be excluded from flow obfuscation, all of the following must be true:</p>
        <p>Its modifiers (e.g. public final ) must match all parameter modifiers.</p>
        <p>public , abstract and NOT an interface to be excluded.</p>
        <p>obfuscateFlowExclude * and //exclude all methods in all classes in default package</p>
        <p>*.Class1 and //exclude all methods in all classes with the unqualified class name "Class1"</p>
        <p>//exclude all methods in all classes that start with "Class" except for "Class0" and "Class1"</p>
        <p>*.(Class* &amp;&amp; !(Class0 || Class1)) and "MyJar*.jar"!*.* and //exclude all classes contained in a JAR file with a name matching "MyJar*.jar"</p>
        <p>//exclude all classes annotated which an annotation matching *.MyAnnotation0</p>
        <p>Put informally (with mandatory components in bold), the syntax of an obfuscateFlowExclude method parameter is:</p>
        <p>&lt;className&gt; &lt;extendsClause&gt; &lt;implementsClause&gt;</p>
        <p>&lt;methodAnnotations&gt; &lt;methodModifiers&gt; &lt;methodName&gt;( &lt;argumentTypes&gt; ) &lt;throwsClause&gt; +signatureClasses;</p>
        <p>For a method to be excluded from flow obfuscation, all of the following must be true:</p>
        <p>Its modifiers (e.g. public native ) must match all parameter method modifiers.</p>
        <p>public , static and NOT synchronized to be excluded from obfuscation.</p>
        <p>Its name must match the parameter method name specification.</p>
        <p>The special name &lt;init&gt; matches all constructors and the special name &lt;clinit&gt;</p>
        <p>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist.</p>
        <p>(A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</p>
        <p>Its throws clause must contain all the classes specified in the obfuscateFlowExclude parameter's throw clause.</p>
        <p>So, if the obfuscateFlowExclude parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be excluded.</p>
        <p>obfuscateFlowExclude pack2.Class1 method1(int) and //Exclude method1(int) in class pack2.Class1 from flow obfuscation</p>
        <p>*.* *(*) and //Exclude all methods from flow obfuscation</p>
        <p>*.* &lt;init&gt;(*) and //Exclude all contructors from flow obfuscation</p>
        <p>*.* &lt;clinit&gt;(*) and //Exclude all static initializers from flow obfuscation</p>
        <p>*.* m*() and //Exclude all methods taking no parameters with names matching "m*"</p>
        <p>*.* *(*) throws java.io.IOException and //Exclude all methods that throw java.io.IOException.</p>
        <p>!(pack1*.)* (m* &amp;&amp; !(ma* || me*))() and //Exclude all methods in packages that don't start with "pack1"</p>
        <p>//and that have names that start with "m" but not "ma" or "me"</p>
        <p>*.* abstract *(java.lang.String) and //Exclude the names of all "abstract" methods that</p>
        <p>//Exclude all the methods of any class implementing "Serializable" in a package that matches "pack1.*"</p>
        <p>pack1.* implements java.io.Serializable *(*) and</p>
        <p>//Exclude all methods annotated with a class matching *.MyAnnotation0.</p>
        <p>" obfuscateFlowExclude " excludeParameter (" and " excludeParameter) * ";"</p>
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
        <p>classExcludeParameter [annotationSpecifier] [["!"] " public " | " protected "| " package "| " private "]</p>
        <p>[["!"] " abstract "] [["!"] " static "] [["!"] " final "] [["!"] " native "] [["!"] " synchronized "] [["!"] " synthetic "] [["!"] " bridge "]</p>
        <p>(nameSpecifier | "&lt;init&gt;" | "&lt;clinit&gt;") "(" [ "*" | (parameter ("," parameter) * )] ")"</p>
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
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM) - obfuscateFlowExclude","url":"https://zkm-web.vercel.app/docs/obfuscateFlowExcludeStatement"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - obfuscateFlowExclude | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/obfuscateFlowExcludeStatement' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
