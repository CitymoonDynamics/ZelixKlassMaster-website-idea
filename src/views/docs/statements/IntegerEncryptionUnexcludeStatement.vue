<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster - integerEncryptionUnexclude</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster - integerEncryptionUnexclude</li>
          <li>The integerEncryptionUnexclude Statement (Note, generally speaking, any reference below to an integer constant should be taken to mean a reference to a byte, char, short or int constant. See Integer Constant Encryption tutorial for more detail.)</li>
          <li>The ZKM Script integerEncryptionUnexclude statement acts only on the set of excluded fields, methods and classes created by an integerEncryptionExclude statement. The statement removes specified fields, methods and classes from the set of excluded fields, methods and classes so that they become available once more for Integer Encryption by the ZKM Script obfuscate statement.</li>
          <li>The integerEncryptionUnexclude statement is intended to be used in conjunction with a integerEncryptionExclude statement to specify a final set of excluded fields, methods and classes that would have been difficult to achieve using a integerEncryptionExclude statement alone. Typically, in such cases, an initial integerEncryptionExclude statement would set the broad exclusions and then the integerEncryptionUnexclude statement would specify the exceptions to those broad exclusions.</li>
          <li>The remainder of this page is organized into the following sections.</li>
          <li>Explanation and Examples</li>
          <li>Syntax</li>
          <li>Class unexclude parameters</li>
          <li>Field unexclude parameters</li>
          <li>Method unexclude parameters</li>
          <li>Its annotations must match any specified annotations.</li>
          <li>The class's modifiers (e.g. public final ) must match all parameter modifiers. So if the parameters are public abstract !interface then the class must be public , abstract and NOT an interface to be excluded.</li>
          <li>If the parameter has an archive qualifier then the class must be contained in an archive which matches that archive qualifier.</li>
          <li>The class's package qualifiers must match any specified package exclude parameter component. If there is no package exclude parameter component then the class must be in the default package.</li>
          <li>The class's unqualified name must match the parameter's class name specifier.</li>
          <li>If the parameter has a containing clause then the class must contain members which match the specified class</li>
          <li>If the parameter has an extends clause then the class must be a subclass of the specified class</li>
          <li>If the parameter has an implements clause then the class must directly or indirectly implement all of the specified interfaces</li>
        </ul>
        <pre class="code"><code>integerEncryptionUnexclude 
          pack2.Class1 and //unexclude all integer constants in class pack2.Class1 from encryption
          *.* and //unexclude all integer constants in all classes from encryption
          //unexclude all integer constants in all classes contained in a JAR file with a name matching "MyJar*.jar"
          "MyJar*.jar"!*.* and 
          //unexclude all integer constants in all classes annotated which an annotation matching *.MyAnnotation0 
          @*.MyAnnotation0 *.*;</code></pre>
        <ul>
          <li>The field's containing class must match any class unexclude parameter component (see Class unexclude parameters ).</li>
          <li>The field's annotations must match any specified field level annotations.</li>
          <li>The field's modifiers (e.g. public volatile ) must match all parameter field modifiers. So if the parameters are public static !transient then the field must be public , static and NOT transient to be excluded.</li>
          <li>The field's type (e.g. int[] or java.lang.String) must match the parameter field type if it exists.</li>
          <li>The field's name must match the parameter field name specifier.</li>
        </ul>
        <pre class="code"><code>integerEncryptionUnexclude 
          *.* public static * and //unexclude integer constants that initialize 
                                  //public static fields in any class from encryption
          pack2.Class1 * and //unexclude integer constants that initialize any fields 
                             //in pack2.Class1 from encryption
          //unexclude integer constants that initialize any fields annotated with a class matching *.MyAnnotation0. *.* @*.MyAnnotation0 *;</code></pre>
        <ul>
          <li>The method's containing class must match any class unexclude parameter component (see Class exclude parameters ).</li>
          <li>The method's annotations must match any specified method level annotations.</li>
          <li>The method's modifiers (e.g. public synchronized ) must match all parameter method modifiers. So if the parameters are public static !synchronized then the method must be public , static and NOT synchronized to be unexcluded.</li>
          <li>Its name must match the parameter method name specification. The special name &lt;init&gt; matches all constructors and the special name &lt;clinit&gt; matches all static initializers.</li>
          <li>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist. (A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</li>
          <li>Its throws clause must contain all the classes specified in the integerEncryptionUnexclude parameter's throw clause. So, if the integerEncryptionUnexclude parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be unexcluded.</li>
        </ul>
        <pre class="code"><code>integerEncryptionUnexclude 
          *.* public static *(*) and //Unexclude integer constants referenced in any
                                     //public static method in any class from encryption
          pack2.Class1 *(*); //Unexclude integer constants referenced in any method
                             //in pack2.Class1 from encryption</code></pre>
        <p>The integerEncryptionUnexclude Statement</p>
        <p>(Note, generally speaking, any reference below to an integer constant should be taken to mean a reference to a byte, char, short or int constant.</p>
        <p>See Integer Constant Encryption tutorial for more detail.)</p>
        <p>The ZKM Script integerEncryptionUnexclude statement acts only on the set of excluded fields, methods and classes created by an</p>
        <p>statement. The statement removes specified fields, methods and classes from the set of excluded fields, methods and classes so that they become available once more for Integer Encryption by the ZKM Script</p>
        <p>The integerEncryptionUnexclude statement is intended to be used in conjunction with a</p>
        <p>statement to specify a final set of excluded fields, methods and classes that would have been difficult to achieve using a</p>
        <p>statement alone. Typically, in such cases, an initial</p>
        <p>statement would set the broad exclusions and then the integerEncryptionUnexclude</p>
        <p>statement would specify the exceptions to those broad exclusions.</p>
        <p>The syntax of the integerEncryptionUnexclude statement is the same as that of the</p>
        <p>statement. The integerEncryptionUnexclude statement parameters may be loosely categorized into the following groups</p>
        <p>Put informally (with mandatory components in bold), the syntax is:</p>
        <p>&lt;classAnnotations&gt; &lt;classModifiers&gt; "&lt;archiveQualifier&gt;"!&lt;packageQualifiers&gt;.</p>
        <p>&lt;className&gt; &lt;containingClause&gt; &lt;extendsClause&gt; &lt;implementsClause&gt; ;</p>
        <p>For a class to match a integerEncryptionUnexclude class unexclude parameter and therefore have all of its integer constants of the class unexcluded, all of the following must be true:</p>
        <p>The class's modifiers (e.g. public final ) must match all parameter modifiers.</p>
        <p>public , abstract and NOT an interface to be excluded.</p>
        <p>integerEncryptionUnexclude pack2.Class1 and //unexclude all integer constants in class pack2.Class1 from encryption</p>
        <p>*.* and //unexclude all integer constants in all classes from encryption</p>
        <p>//unexclude all integer constants in all classes contained in a JAR file with a name matching "MyJar*.jar"</p>
        <p>//unexclude all integer constants in all classes annotated which an annotation matching *.MyAnnotation0</p>
        <p>&lt;className&gt; &lt;extendsClause&gt; &lt;implementsClause&gt;</p>
        <p>&lt;fieldAnnotations&gt; &lt;fieldModifiers&gt; &lt;fieldType&gt; &lt;fieldName&gt;;</p>
        <p>For a field to match a integerEncryptionUnexclude field unexclude parameter and therefore have its intitialization integer constant unexcluded, all of the following must be true:</p>
        <p>The field's modifiers (e.g. public volatile ) must match all parameter field modifiers.</p>
        <p>public , static and NOT transient to be excluded.</p>
        <p>integerEncryptionUnexclude *.* public static * and //unexclude integer constants that initialize</p>
        <p>//public static fields in any class from encryption</p>
        <p>pack2.Class1 * and //unexclude integer constants that initialize any fields</p>
        <p>//unexclude integer constants that initialize any fields annotated with a class matching *.MyAnnotation0.</p>
        <p>&lt;methodAnnotations&gt; &lt;methodModifiers&gt; &lt;methodName&gt; ( &lt;argumentTypes&gt; ) &lt;throwsClause&gt;;</p>
        <p>For an integer constant referenced in a method to be unexcluded, all of the following must be true:</p>
        <p>The method's modifiers (e.g. public synchronized ) must match all parameter method modifiers.</p>
        <p>public , static and NOT synchronized to be unexcluded.</p>
        <p>Its name must match the parameter method name specification.</p>
        <p>The special name &lt;init&gt; matches all constructors and the special name &lt;clinit&gt;</p>
        <p>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist.</p>
        <p>(A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</p>
        <p>Its throws clause must contain all the classes specified in the integerEncryptionUnexclude parameter's throw clause.</p>
        <p>So, if the integerEncryptionUnexclude parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be unexcluded.</p>
        <p>integerEncryptionUnexclude *.* public static *(*) and //Unexclude integer constants referenced in any</p>
        <p>//public static method in any class from encryption</p>
        <p>pack2.Class1 *(*); //Unexclude integer constants referenced in any method</p>
        <p>" integerEncryptionUnexclude " unexcludeParameter (" and " unexcludeParameter) * ";"</p>
        <p>annotationSpecifier ::= ("@" [packageUnexcludeParameter] nameSpecifier) | annotationSpecifierAndList</p>
        <p>annotationSpecifierAndList ::= ["!"] "(" annotationSpecifierOrList ("&amp;&amp;" annotationSpecifierOrList)* ")"</p>
        <p>annotationSpecifierOrList ::= annotationSpecifier ("||" annotationSpecifier)*</p>
        <p>[annotationSpecifier] [["!"] " public " | " package "]</p>
        <p>[["!"] " abstract "] [["!"] " final "] [["!"] " interface "] [["!"] " synthetic "] [["!"] " enum "] [["!"] " annotation "]</p>
        <p>[" \" " archiveQualifier " \" " " ! "] [packageExcludeParameter ["."]] nameSpecifier [containingClause]</p>
        <p>containingClause ::= " containing " " { " " memberAndList " " } "</p>
        <p>extendsClause ::= " extends " [annotationSpecifier] wildcardClassName</p>
        <p>classUnexcludeParameter [annotationSpecifier] [["!"] " public " | " protected "| " package "| " private "]</p>
        <p>[["!"] " static "] [["!"] " final "] [["!"] " transient "] [["!"] " volatile "] [["!"] " synthetic "] [["!"] " enum "]</p>
        <p>classExcludeParameter [annotationSpecifier] [["!"] " public " | " protected "| " package "| " private "]</p>
        <p>[["!"] " abstract "] [["!"] " static "] [["!"] " final "] [["!"] " native "] [["!"] " synchronized "] [["!"] " synthetic "] [["!"] " bridge "]</p>
        <p>(nameSpecifier | "&lt;init&gt;" | "&lt;clinit&gt;") "(" [ "*" | (parameter ("," parameter) * )] ")"</p>
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
  "name": "Java Obfuscator - Zelix KlassMaster - integerEncryptionUnexclude",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/integerEncryptionUnexcludeStatement"
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
      "name": "Java Obfuscator - Zelix KlassMaster - integerEncryptionUnexclude"
    }
  ]
}]
useHead({
  title: 'integerEncryptionUnexclude | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster - integerEncryptionUnexc | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/integerEncryptionUnexcludeStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
