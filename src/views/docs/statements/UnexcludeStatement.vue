<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - unexclude</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - unexclude</li>
          <li>The unexclude Statement The ZKM Script unexclude statement acts only on the set of excluded names created by an exclude statement. The statement removes the names of specified objects from the set of excluded names so that they become available once more for renaming by the ZKM Script obfuscate statement.</li>
          <li>The unexclude statement is intended to be used in conjunction with a exclude statement to specify a final set of excluded names that would have been difficult to achieve using a exclude statement alone. Typically, in such cases, an initial exclude statement would set the broad exclusions and then the unexclude statement would specify the exceptions to those broad exclusions.</li>
          <li>Successive unexclude statements have a cumulative effect . The effect of all exclusions and unexclusions that have been set is removed by a resetExclusions statement.</li>
          <li>The remainder of this page is organized into the following sections.</li>
          <li>Examples and Explanation</li>
          <li>Syntax</li>
          <li>Package unexclude parameters</li>
          <li>Class unexclude parameters</li>
          <li>Field unexclude parameters</li>
          <li>Method unexclude parameters</li>
        </ul>
        <pre class="code"><code>unexclude pack1.pack2. and  //unexclude the package "pack1.pack2"
          *. and  //unexclude all packages
          p*1.*.p*1. and  //unexclude any package matching "p*1.*.p1"
          pack2.*. and  //unexclude all the sub-packages of "pack2"
          pack3.. and  //unexclude "pack3" and all sub-packages of "pack3"
          (pack4.*. &amp;&amp; !(pack3.pack0. || pack3.pack2.)); //unexclude all the sub-packages of "pack4" except for "pack0" and "pack2"</code></pre>
        <ul>
          <li>Its annotations must match any specified annotations.</li>
          <li>Its modifiers (e.g. public final ) must match all parameter modifiers. So if the parameters are public abstract !interface then the class must be public , abstract and NOT an interface to be unexcluded.</li>
          <li>If the parameter has an archive qualifier then the class must be contained in an archive which matches that archive qualifier.</li>
          <li>Its package qualifiers must match any specified package parameter component. If there is no package parameter component then the class must be in the default package.</li>
          <li>Its unqualified name must match the specified class name specification.</li>
          <li>If the parameter has a containing clause then the class must contain members which match the specified class</li>
          <li>If the parameter has an extends clause then the class must be a subclass of the specified class</li>
          <li>If the parameter has an implements clause then the class must directly or indirectly implement all of the specified interfaces</li>
        </ul>
        <pre class="code"><code>unexclude *          and         //unexclude all classes in the default package
          *.Class1   and         //unexclude all classes with the unqualified class name "Class1"
          pack1..*   and         //unexclude all classes in "pack1" ot any of its sub-packages
          public !final *.* and  //unexclude all public non-final classes
          //unexclude all "public abstract" classes that have an unqualified name matching "C*s" and extend "pack1.Class1". package abstract *.C*s extends pack1.Class1 and 
          //unexclude all classes in packages that start with the character "p" and also exclude the names of the enclosing packages. p*.^*     and 
          //unexclude all classes that implement Serializable and also exclude all field and method names
          *.* + implements java.io.Serializable and 
          //unexclude names of all classes that start with "Class" except for "Class0" and "Class1"
          *.(Class* &amp;&amp; !(Class0 || Class1)) and 
          "MyJar*.jar"!*.* and //unexclude all classes contained in a JAR file with a name matching "MyJar*.jar"
          @*.MyAnnotation0 *.*;  //unexclude all classes annotated which an annotation matching *.MyAnnotation0</code></pre>
        <ul>
          <li>Its containing class must match any class unexclude parameter component (see Class unexclude parameters ).</li>
          <li>Its annotations must match any specified field level annotations.</li>
          <li>Its modifiers (e.g. public volatile ) must match all parameter field modifiers. So if the parameters are public static !transient then the field must be public , static and NOT transient to be unexcluded.</li>
          <li>Its type (e.g. int[] or java.lang.String) must match the parameter field type if it exists.</li>
          <li>Its name must match the parameter field name.</li>
        </ul>
        <pre class="code"><code>unexclude *.* *                      and //unexclude all field names
          *.Class1 !transient int f* and //unexclude all non-transient "int" field names matching "f*"
                                         //in classes with the unqualified name "Class1"
          public *.*^ public volatile * and //unexclude all "public volatile" fields in
                                            //public classes. //Also unexclude the containing class names. *.* @*.MyAnnotation0 *;  //Exclude all fields annotated with a class matching *.MyAnnotation0.</code></pre>
        <ul>
          <li>Its annotations must match any specified method or method parameter level annotations.</li>
          <li>Its modifiers (e.g. public native ) must match all parameter method modifiers. So if the parameters are public static !synchronized then the method must be public , static and NOT synchronized to be unexcluded.</li>
          <li>Its name must match the parameter method name.</li>
          <li>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist. (A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</li>
          <li>Its throws clause must contain all the classes specified in the unexclude parameter's throw clause. So, if the unexclude parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be unexcluded.</li>
          <li>pack1.Class1 (because it is the return type of a matching method) and</li>
          <li>pack2.Class2 (because it is a parameter type of a matching method)</li>
        </ul>
        <pre class="code"><code>unexclude *.* *(*)          and  //unexclude all method names
          *.* !static m*()  and  //unexclude all non-static methods taking no parameters with names matching "m*"
          //unexclude all "native" methods. Also exclude the containing package and class names. *.^*^ native *(*)  and  
          *.* *(*) throws java.io.IOException and  //unexclude all methods that throw java.io.IOException. //unexclude the names of all "abstract" methods that take a single String. *.* abstract *(java.lang.String) and 
          pack1.Class1 *(*) +signatureClasses and //unexclude all method names in pack1.Class1 along with 
                                                  //the matching methods' return and parameter types
          //unexclude all the methods of any class implementing "Serializable" in a package that matches "pack1.*"
          pack1.* implements java.io.Serializable *(*) and 
          //unexclude all methods annotated with a class matching *.MyAnnotation0. *.* @*.MyAnnotation0 *(*);</code></pre>
        <p>The ZKM Script unexclude statement acts only on the set of excluded names created by an</p>
        <p>statement. The statement removes the names of specified objects from the set of excluded names so that they become available once more for renaming by the ZKM Script</p>
        <p>The unexclude statement is intended to be used in conjunction with a</p>
        <p>statement to specify a final set of excluded names that would have been difficult to achieve using a</p>
        <p>statement alone. Typically, in such cases, an initial</p>
        <p>statement would set the broad exclusions and then the unexclude</p>
        <p>statement would specify the exceptions to those broad exclusions.</p>
        <p>Successive unexclude statements have a cumulative effect . The effect of all exclusions and unexclusions that have been set is removed by a</p>
        <p>The syntax of the unexclude statement is the same as that of the</p>
        <p>unexclude statement has no class prefix and suffix (ie.</p>
        <p>unexclude statement parameters may be loosely categorized into the following groups</p>
        <p>Any package name matching a package unexclusion parameter is unexcluded. If a package level is specified by a simple "*" wildcard then it matches one or more levels.</p>
        <p>If the package parameter is a component of a class, field, method or class suffix unexclude parameter and the package parameter is followed by a</p>
        <p>then the name of the enclosing package is also unexcluded. Note that a package name specification always ends with a "." .</p>
        <p>If a package name specification ends with ".." then it specifies that package and all of its sub-packages.</p>
        <p>unexclude pack1.pack2. and //unexclude the package "pack1.pack2"</p>
        <p>p*1.*.p*1. and //unexclude any package matching "p*1.*.p1"</p>
        <p>pack2.*. and //unexclude all the sub-packages of "pack2"</p>
        <p>pack3.. and //unexclude "pack3" and all sub-packages of "pack3"</p>
        <p>(pack4.*. &amp;&amp; !(pack3.pack0. || pack3.pack2.)); //unexclude all the sub-packages of "pack4" except for "pack0" and "pack2"</p>
        <p>Put informally (with mandatory components in bold), the syntax is:</p>
        <p>&lt;classAnnotations&gt; &lt;classModifiers&gt; "&lt;archiveQualifier&gt;"!&lt;packageQualifiers&gt;.</p>
        <p>&lt;className&gt; &lt;containingClause&gt; &lt;extendsClause&gt; &lt;implementsClause&gt; ;</p>
        <p>For a class name to be unexcluded, all of the following must be true:</p>
        <p>Its modifiers (e.g. public final ) must match all parameter modifiers.</p>
        <p>public , abstract and NOT an interface to be unexcluded.</p>
        <p>Its package qualifiers must match any specified package parameter component.</p>
        <p>If there is no package parameter component then the class must be in the default package.</p>
        <p>If the class parameter is a component of a field or method unexclude parameter then a final "^" tag after the class name specification causes the enclosing class to be unexcluded.</p>
        <p>If a class unexclusion parameter's class name specification is followed by a "+" tag then the parameter also causes the names of all the fields and methods of the class to be unexcluded as well.</p>
        <p>unexclude * and //unexclude all classes in the default package</p>
        <p>*.Class1 and //unexclude all classes with the unqualified class name "Class1"</p>
        <p>pack1..* and //unexclude all classes in "pack1" ot any of its sub-packages</p>
        <p>public !final *.* and //unexclude all public non-final classes</p>
        <p>//unexclude all "public abstract" classes that have an unqualified name matching "C*s" and extend "pack1.Class1".</p>
        <p>package abstract *.C*s extends pack1.Class1 and</p>
        <p>//unexclude all classes in packages that start with the character "p" and also exclude the names of the enclosing packages.</p>
        <p>//unexclude all classes that implement Serializable and also exclude all field and method names</p>
        <p>*.* + implements java.io.Serializable and</p>
        <p>//unexclude names of all classes that start with "Class" except for "Class0" and "Class1"</p>
        <p>*.(Class* &amp;&amp; !(Class0 || Class1)) and "MyJar*.jar"!*.* and //unexclude all classes contained in a JAR file with a name matching "MyJar*.jar"</p>
        <p>@*.MyAnnotation0 *.*; //unexclude all classes annotated which an annotation matching *.MyAnnotation0</p>
        <p>&lt;className&gt; &lt;extendsClause&gt; &lt;implementsClause&gt;</p>
        <p>&lt;fieldAnnotations&gt; &lt;fieldModifiers&gt; &lt;fieldType&gt; &lt;fieldName&gt;;</p>
        <p>For a field name to be unexcluded, all of the following must be true:</p>
        <p>Its modifiers (e.g. public volatile ) must match all parameter field modifiers.</p>
        <p>public , static and NOT transient to be unexcluded.</p>
        <p>unexclude *.* * and //unexclude all field names</p>
        <p>*.Class1 !transient int f* and //unexclude all non-transient "int" field names matching "f*"</p>
        <p>//in classes with the unqualified name "Class1"</p>
        <p>public *.*^ public volatile * and //unexclude all "public volatile" fields in</p>
        <p>//Also unexclude the containing class names.</p>
        <p>*.* @*.MyAnnotation0 *; //Exclude all fields annotated with a class matching *.MyAnnotation0.</p>
        <p>&lt;methodAnnotations&gt; &lt;methodModifiers&gt; &lt;methodName&gt;( &lt;argumentTypes&gt; ) &lt;throwsClause&gt; +signatureClasses;</p>
        <p>For a method name to be unexcluded, all of the following must be true:</p>
        <p>Its modifiers (e.g. public native ) must match all parameter method modifiers.</p>
        <p>public , static and NOT synchronized to be unexcluded.</p>
        <p>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist.</p>
        <p>(A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</p>
        <p>Its throws clause must contain all the classes specified in the unexclude parameter's throw clause.</p>
        <p>So, if the unexclude parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be unexcluded.</p>
        <p>For consistency, the unexclude statement supports the special method names &lt;init&gt; and &lt;clinit&gt;</p>
        <p>which represent constructor and class initializer method names respectively. However, because constructor and class initializer names cannot be obfuscated, the syntax has no practical application for this statement.</p>
        <p>If a method unexclude parameter ends with the keyword +signatureClasses then, for each matching method, the fully qualified class names of the method's return and parameter types are also unexcluded from obfuscation. Types which are primitive are ignored. So, if a matching method has the signature</p>
        <p>then the +signatureClasses flag has the effect of excluding the fully qualified names:</p>
        <p>unexclude *.* *(*) and //unexclude all method names</p>
        <p>*.* !static m*() and //unexclude all non-static methods taking no parameters with names matching "m*"</p>
        <p>//unexclude all "native" methods. Also exclude the containing package and class names.</p>
        <p>*.^*^ native *(*) and *.* *(*) throws java.io.IOException and //unexclude all methods that throw java.io.IOException.</p>
        <p>//unexclude the names of all "abstract" methods that take a single String.</p>
        <p>*.* abstract *(java.lang.String) and pack1.Class1 *(*) +signatureClasses and //unexclude all method names in pack1.Class1 along with</p>
        <p>//the matching methods' return and parameter types</p>
        <p>//unexclude all the methods of any class implementing "Serializable" in a package that matches "pack1.*"</p>
        <p>pack1.* implements java.io.Serializable *(*) and</p>
        <p>//unexclude all methods annotated with a class matching *.MyAnnotation0.</p>
        <p>" unexclude " unexcludeParameter (" and " unexcludeParameter) * ";"</p>
        <p>annotationSpecifier ::= ("@" [packageExcludeParameter] nameSpecifier) | annotationSpecifierAndList</p>
        <p>annotationSpecifierAndList ::= ["!"] "(" annotationSpecifierOrList ("&amp;&amp;" annotationSpecifierOrList)* ")"</p>
        <p>annotationSpecifierOrList ::= annotationSpecifier ("||" annotationSpecifier)*</p>
        <p>[annotationSpecifier] [["!"] " public " | " package "]</p>
        <p>[["!"] " abstract "] [["!"] " final "] [["!"] " interface "] [["!"] " synthetic "] [["!"] " enum "] [["!"] " annotation "]</p>
        <p>[" \" " archiveQualifier " \" " " ! "] [packageExcludeParameter ["."]] nameSpecifier ["^"] ["+"] [containingClause]</p>
        <p>containingClause ::= " containing " " { " " memberAndList " " } "</p>
        <p>extendsClause ::= " extends " [annotationSpecifier] wildcardClassName</p>
        <p>classUnexcludeParameter [annotationSpecifier] [["!"] " public " | " protected "| " package "| " private "]</p>
        <p>[["!"] " static "] [["!"] " final "] [["!"] " transient "] [["!"] " volatile "] [["!"] " synthetic "] [["!"] " enum "]</p>
        <p>fullyQualifiedClassName ::= name ("." name) *</p>
        <p>implementsClause ::= " implements " [annotationSpecifier] wildcardClassName ("," [annotationSpecifier] wildcardClassName) *</p>
        <p>classUnexcludeParameter [["!"] " public " | " protected "| " package "| " private "]</p>
        <p>[["!"] " abstract "] [["!"] " static "] [["!"] " final "] [["!"] " native "] [["!"] " synchronized "] [["!"] " synthetic "] [["!"] " bridge "]</p>
        <p>nameSpecifier "(" [ "*" | (parameter ("," parameter) * )] ")" ["throws" wildcardClassName] ["+signatureClasses"]</p>
        <p>memberAndList ::= ["!"] "(" memberOrList ("&amp;&amp;" memberOrList)* ")"</p>
        <p>memberOrList ::= memberSpecifier ("||" memberSpecifier)*</p>
        <p>memberSpecifier ::= fieldExcludeParameter | methodExcludeParameter</p>
        <p>nameAndList ::= ["!"] "(" nameOrList ("&amp;&amp;" nameOrList)* ")"</p>
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
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - unexclude",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/unexcludeStatement"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - unexclude"
    }
  ]
}]
useHead({
  title: 'unexclude | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - unexclude | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/unexcludeStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
