<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - stringEncryptionExclude</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - stringEncryptionExclude</li>
          <li>The stringEncryptionExclude Statement The ZKM Script stringEncryptionExclude statement excludes specified String literals from being encrypted by the Zelix KlassMaster(TM) obfuscate statement. If an exclusion parameter is at the class level (i.e. a classExcludeParameter ) then all the String literals within the specified class or classes will be excluded from String encryption. If an exclusion parameter is at the field level (i.e. a fieldExcludeParameter ) then the initial values of matching String fields will not be String encrypted. If an exclusion parameter is at the method level (i.e. a methodExcludeParameter ) then all of the String literals referenced by matching methods will not be String encrypted.</li>
          <li>There is a subtle distinction here. If you exclude at the class level then you are excluding all the string literals of that class from String encryption. So "stringEncryptionExclude *.*" is equivalent to "stringEncryptionExclude *.* * and *.* *(*)" .</li>
          <li>The statement has no impact if the obfuscate statement's encryptStringLiterals parameter is set to none . Similarly, a parameter that specifies a non-String field or a String field that is not initialized has no impact. Successive stringEncryptionExclude statements have a cumulative effect . Once an exclusion has been set the only way to remove it is with a resetStringEncryptionExclusions statement.</li>
          <li>The remainder of this page is organized into the following sections.</li>
          <li>Explanation and Examples</li>
          <li>Syntax</li>
          <li>Class exclude parameters</li>
          <li>Field exclude parameters</li>
          <li>Method exclude parameters</li>
          <li>Its annotations must match any specified annotations.</li>
          <li>The class's modifiers (e.g. public final ) must match all parameter modifiers. So if the parameters are public abstract !interface then the class must be public , abstract and NOT an interface to be excluded.</li>
          <li>If the parameter has an archive qualifier then the class must be contained in an archive which matches that archive qualifier.</li>
          <li>The class's package qualifiers must match any specified package exclude parameter component. If there is no package exclude parameter component then the class must be in the default package.</li>
          <li>The class's unqualified name must match the parameter's class name specifier.</li>
          <li>If the parameter has a containing clause then the class must contain members which match the specified class</li>
          <li>If the parameter has an extends clause then the class must be a subclass of the specified class</li>
          <li>If the parameter has an implements clause then the class must directly or indirectly implement all of the specified interfaces</li>
        </ul>
        <pre class="code"><code>stringEncryptionExclude 
          pack2.Class1 and //Exclude all string literals in class pack2.Class1 from encryption
          *.* and //Exclude all string literals in all classes from encryption
          //Exclude all string literals in all classes contained in a JAR file with a name matching "MyJar*.jar"
          "MyJar*.jar"!*.* and 
          //Exclude all string literals in all classes annotated which an annotation matching *.MyAnnotation0 
          @*.MyAnnotation0 *.*;</code></pre>
        <ul>
          <li>The field's containing class must match any class exclude parameter component (see Class exclude parameters ).</li>
          <li>The field's annotations must match any specified field level annotations.</li>
          <li>The field's modifiers (e.g. public volatile ) must match all parameter field modifiers. So if the parameters are public static !transient then the field must be public , static and NOT transient to be excluded.</li>
          <li>The field's type (e.g. int[] or java.lang.String) must match the parameter field type if it exists.</li>
          <li>The field's name must match the parameter field name specifier.</li>
        </ul>
        <pre class="code"><code>stringEncryptionExclude 
          *.* public static * and //Exclude string literals that initialize 
                                  //public static fields in any class from encryption
          pack2.Class1 * and //Exclude string literals that initialize any fields 
                             //in pack2.Class1 from encryption
          //Exclude string literals that initialize any fields annotated with a class matching *.MyAnnotation0. *.* @*.MyAnnotation0 *;</code></pre>
        <ul>
          <li>The method's containing class must match any class exclude parameter component (see Class exclude parameters ).</li>
          <li>The method's annotations must match any specified field level annotations.</li>
          <li>The method's modifiers (e.g. public volatile ) must match all parameter field modifiers. So if the parameters are public static !synchronized then the method must be public , static and NOT synchronized to be excluded.</li>
          <li>Its name must match the parameter method name specification. The special name &lt;init&gt; matches all constructors and the special name &lt;clinit&gt; matches all static initializers.</li>
          <li>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist. (A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</li>
          <li>Its throws clause must contain all the classes specified in the stringEncryptionExclude parameter's throw clause. So, if the stringEncryptionExclude parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be excluded.</li>
        </ul>
        <pre class="code"><code>stringEncryptionExclude 
          *.* public static *(*) and //Exclude string literals referenced in any
                                     //public static method in any class from encryption
          pack2.Class1 *(*); //Exclude string literals referenced in any method
                             //in pack2.Class1 from encryption</code></pre>
        <p>The ZKM Script stringEncryptionExclude statement excludes specified String literals from being encrypted by the Zelix KlassMaster(TM)</p>
        <p>statement. If an exclusion parameter is at the class level (i.e. a classExcludeParameter ) then all the String literals within the specified class or classes will be excluded from String encryption. If an exclusion parameter is at the field level (i.e. a fieldExcludeParameter ) then the initial values of matching String fields will not be String encrypted.</p>
        <p>If an exclusion parameter is at the method level (i.e. a methodExcludeParameter ) then all of the String literals referenced by matching methods will not be String encrypted.</p>
        <p>There is a subtle distinction here. If you exclude at the class level then you are excluding all the string literals of that class from String encryption.</p>
        <p>So "stringEncryptionExclude *.*" is equivalent to "stringEncryptionExclude *.* * and *.* *(*)" .</p>
        <p>The statement has no impact if the obfuscate statement's encryptStringLiterals parameter is set to none .</p>
        <p>Similarly, a parameter that specifies a non-String field or a String field that is not initialized has no impact.</p>
        <p>Successive stringEncryptionExclude statements have a cumulative effect . Once an exclusion has been set the only way to remove it is with a</p>
        <p>stringEncryptionExclude statement parameters may be loosely categorized into the following groups</p>
        <p>Put informally (with mandatory components in bold), the syntax is:</p>
        <p>&lt;classAnnotations&gt; &lt;classModifiers&gt; "&lt;archiveQualifier&gt;"!&lt;packageQualifiers&gt;.</p>
        <p>&lt;className&gt; &lt;containingClause&gt; &lt;extendsClause&gt; &lt;implementsClause&gt; ;</p>
        <p>For all the String literals in a class to be excluded, all of the following must be true:</p>
        <p>The class's modifiers (e.g. public final ) must match all parameter modifiers.</p>
        <p>public , abstract and NOT an interface to be excluded.</p>
        <p>stringEncryptionExclude pack2.Class1 and //Exclude all string literals in class pack2.Class1 from encryption</p>
        <p>*.* and //Exclude all string literals in all classes from encryption</p>
        <p>//Exclude all string literals in all classes contained in a JAR file with a name matching "MyJar*.jar"</p>
        <p>//Exclude all string literals in all classes annotated which an annotation matching *.MyAnnotation0</p>
        <p>&lt;className&gt; &lt;extendsClause&gt; &lt;implementsClause&gt;</p>
        <p>&lt;fieldAnnotations&gt; &lt;fieldModifiers&gt; &lt;fieldType&gt; &lt;fieldName&gt;;</p>
        <p>For the intitialization String literal of a field to be excluded, all of the following must be true:</p>
        <p>The field's modifiers (e.g. public volatile ) must match all parameter field modifiers.</p>
        <p>public , static and NOT transient to be excluded.</p>
        <p>stringEncryptionExclude *.* public static * and //Exclude string literals that initialize</p>
        <p>//public static fields in any class from encryption</p>
        <p>pack2.Class1 * and //Exclude string literals that initialize any fields</p>
        <p>//Exclude string literals that initialize any fields annotated with a class matching *.MyAnnotation0.</p>
        <p>&lt;methodAnnotations&gt; &lt;methodModifiers&gt; &lt;methodName&gt; ( &lt;argumentTypes&gt; ) &lt;throwsClause&gt;;</p>
        <p>For a String literal referenced in a method to be excluded, all of the following must be true:</p>
        <p>The method's modifiers (e.g. public volatile ) must match all parameter field modifiers.</p>
        <p>public , static and NOT synchronized to be excluded.</p>
        <p>Its name must match the parameter method name specification.</p>
        <p>The special name &lt;init&gt; matches all constructors and the special name &lt;clinit&gt;</p>
        <p>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist.</p>
        <p>(A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</p>
        <p>Its throws clause must contain all the classes specified in the stringEncryptionExclude parameter's throw clause.</p>
        <p>So, if the stringEncryptionExclude parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be excluded.</p>
        <p>stringEncryptionExclude *.* public static *(*) and //Exclude string literals referenced in any</p>
        <p>//public static method in any class from encryption</p>
        <p>pack2.Class1 *(*); //Exclude string literals referenced in any method</p>
        <p>" stringEncryptionExclude " excludeParameter (" and " excludeParameter) * ";"</p>
        <p>annotationSpecifier ::= ("@" [packageExcludeParameter] nameSpecifier) | annotationSpecifierAndList</p>
        <p>annotationSpecifierAndList ::= ["!"] "(" annotationSpecifierOrList ("&amp;&amp;" annotationSpecifierOrList)* ")"</p>
        <p>annotationSpecifierOrList ::= annotationSpecifier ("||" annotationSpecifier)*</p>
        <p>[annotationSpecifier] [["!"] " public " | " package "]</p>
        <p>[["!"] " abstract "] [["!"] " final "] [["!"] " interface "] [["!"] " synthetic "] [["!"] " enum "] [["!"] " annotation "]</p>
        <p>[" \" " archiveQualifier " \" " " ! "] [packageExcludeParameter ["."]] nameSpecifier [containingClause]</p>
        <p>containingClause ::= " containing " " { " " memberAndList " " } "</p>
        <p>extendsClause ::= " extends " [annotationSpecifier] wildcardClassName</p>
        <p>classExcludeParameter [annotationSpecifier] [["!"] " public " | " protected "| " package "| " private "]</p>
        <p>[["!"] " static "] [["!"] " final "] [["!"] " transient "] [["!"] " volatile "] [["!"] " synthetic "] [["!"] " enum "]</p>
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
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - stringEncryptionExclude",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/stringEncryptionExcludeStatement"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - stringEncryptionExclude"
    }
  ]
}]
useHead({
  title: 'stringEncryptionExclude | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - stringEncryptionEx | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/stringEncryptionExcludeStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
