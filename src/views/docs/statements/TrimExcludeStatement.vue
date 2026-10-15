<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - trimExclude</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - trimExclude</li>
          <li>The trimExclude Statement The ZKM Script trimExclude statement excludes the specified objects from being removed by the Zelix KlassMaster(TM) trim statement. Successive trimExclude statements have a cumulative effect . Once an exclusion has been set its effect can be</li>
          <li>reduced by a following trimUnexclude statement.</li>
          <li>removed entirely by a following resetTrimExclusions statement.</li>
          <li>has itself been explicitly or implicitly excluded and</li>
          <li>is contained in a class that has been explicitly or implicitly excluded.</li>
          <li>Examples and Explanation</li>
          <li>Syntax</li>
          <li>Class exclude parameters</li>
          <li>Field exclude parameters</li>
          <li>Method exclude parameters</li>
          <li>Annotation exclude parameters</li>
          <li>Its annotations must match any specified annotations.</li>
          <li>Its modifiers (e.g. public final ) must match all parameter modifiers. So if the parameters are public abstract !interface then the class must be public , abstract and NOT an interface to be excluded.</li>
          <li>If the parameter has an archive qualifier then the class must be contained in an archive which matches that archive qualifier.</li>
          <li>Its package qualifiers must match any specified package exclude parameter component. If there is no package exclude parameter component then the class must be in the default package.</li>
          <li>Its unqualified name must match the specified class name specification.</li>
          <li>If the parameter has a containing clause then the class must contain members which match the specified class</li>
          <li>If the parameter has an extends clause then the class must be a subclass of the specified class</li>
          <li>If the parameter has an implements clause then the class must directly or indirectly implement all of the specified interfaces</li>
        </ul>
        <pre class="code"><code>trimExclude *          and         //exclude all classes in the default package
            *.Class1   and         //exclude all classes with the unqualified class name "Class1"
            public !final *.* and  //exclude all public non-final classes
            package abstract *.C*s extends pack1.Class1 and 
                           //exclude all "public abstract" classes that
                           //have an unqualified name matching "C*s" and extend "pack1.Class1". p*.*     and //exclude all classes in packages that start with the character "p"
            //exclude all classes with the unqualified class name "Class1" also exclude all fields and methods of those classes
            *.* Class2 + and 
            //exclude all classes with a name that start with "Class" except for "Class0" and "Class1"
            *.(Class* &amp;&amp; !(Class0 || Class1)) and 
            "MyJar*.jar"!*.* and //exclude all classes contained in a JAR file with a name matching "MyJar*.jar"
            @*.MyAnnotation0 *.*;  //exclude all classes annotated which an annotation matching *.MyAnnotation0</code></pre>
        <ul>
          <li>Its containing class must match any class exclude parameter component (see Class exclude parameters ).</li>
          <li>Its annotations must match any specified field level annotations.</li>
          <li>Its modifiers (e.g. public volatile ) must match all parameter field modifiers. So if the parameters are public static !transient then the field must be public , static and NOT transient to be excluded.</li>
          <li>Its type (e.g. int[] or java.lang.String) must match the parameter field type if it exists.</li>
          <li>Its name must match the parameter field name.</li>
        </ul>
        <pre class="code"><code>trimExclude *.* *                      and //Exclude all fields
            *.Class1 !transient int f* and //Exclude all non-transient "int" fields matching "f*"
                                           //in classes with the unqualified name "Class1"
            public *.*^ public volatile * and //Exclude all "public volatile" fields in
                                              //public classes. //Also exclude the containing class. *.* @*.MyAnnotation0 *;  //Exclude all fields annotated with a class matching *.MyAnnotation0.</code></pre>
        <ul>
          <li>Its annotations must match any specified method or method parameter level annotations.</li>
          <li>Its modifiers (e.g. public native ) must match all parameter method modifiers. So if the parameters are public static !synchronized then the method must be public , static and NOT synchronized to be excluded.</li>
          <li>Its name must match the parameter method name.</li>
          <li>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist. (A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</li>
          <li>Its throws clause must contain all the classes specified in the exclude parameter's throw clause. So, if the exclude parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be excluded.</li>
        </ul>
        <pre class="code"><code>trimExclude *.* *(*)           and  //Exclude all methods
            *.* !static m*()   and  //Exclude all non-static methods taking no parameters with names matching "m*"
            *.* public &lt;init&gt;() and  //Exclude all public no argument constructors
            //Exclude all "native" methods. Also exclude the containing class. *.*^ native *(*)  and  
            *.* *(*) throws java.io.IOException and  //Exclude all methods that throw java.io.IOException. //Exclude all "abstract" methods that  take a single String. *.* abstract *(java.lang.String) and 
            //Exclude all methods in pack1.Class1 along with the matching methods' return and parameter types
            pack1.Class1 *(*) +signatureClasses and 
            //Exclude all the methods of any class implementing "Serializable" in a package that matches "pack1.*"
            pack1.* implements java.io.Serializable *(*) and
            //Exclude all methods annotated with a class matching *.MyAnnotation0. *.* @*.MyAnnotation0 *(*);</code></pre>
        <pre class="code"><code>trimExclude @pack0.AnnotationClass0 and //Don't remove any pack0.AnnotationClass0 annotations
            @*.MyAnnotation1; //Don't remove any annotations matching *.MyAnnotation1</code></pre>
        <p>The ZKM Script trimExclude statement excludes the specified objects from being removed by the Zelix KlassMaster(TM)</p>
        <p>statement. Successive trimExclude statements have a cumulative effect . Once an exclusion has been set its effect can be</p>
        <p>Note that the exclusion of a field or method is not enough in itself to prevent the field or method's containing class, and therefore the specified field or method, from being removed.</p>
        <p>The containing class must also be explicitly or implicitly excluded. A class, field or method is implicitly excluded if it is accessed by a method that</p>
        <p>So, for a standalone application, if the initial public static main(String[]) method is explicitly excluded along with its containing class then Zelix KlassMaster(TM) will implicitly exclude every class, field and method that is accessed directly or indirectly by the initial main method.</p>
        <p>The remainder of this page is organized into the following sections.</p>
        <p>trimExclude statement parameters may be loosely categorized into the following groups</p>
        <p>Put informally (with mandatory components in bold), the syntax is:</p>
        <p>&lt;classAnnotations&gt; &lt;classModifiers&gt; "&lt;archiveQualifier&gt;"!&lt;packageQualifiers&gt;.</p>
        <p>&lt;className&gt; &lt;containingClause&gt; &lt;extendsClause&gt; &lt;implementsClause&gt; ;</p>
        <p>For a class to be excluded, all of the following must be true:</p>
        <p>Its modifiers (e.g. public final ) must match all parameter modifiers.</p>
        <p>public , abstract and NOT an interface to be excluded.</p>
        <p>Its package qualifiers must match any specified package exclude parameter component.</p>
        <p>If there is no package exclude parameter component then the class must be in the default package.</p>
        <p>If the class parameter is a component of a field or method exclude parameter then a final "^" tag after the class name specification causes the enclosing class to be excluded.</p>
        <p>If a class exclusion parameter's class name specification is followed by a "+" tag then the parameter also causes the names of all the fields and methods of the class to be excluded.</p>
        <p>trimExclude * and //exclude all classes in the default package</p>
        <p>*.Class1 and //exclude all classes with the unqualified class name "Class1"</p>
        <p>public !final *.* and //exclude all public non-final classes</p>
        <p>package abstract *.C*s extends pack1.Class1 and</p>
        <p>//exclude all "public abstract" classes that</p>
        <p>//have an unqualified name matching "C*s" and extend "pack1.Class1".</p>
        <p>p*.* and //exclude all classes in packages that start with the character "p"</p>
        <p>//exclude all classes with the unqualified class name "Class1" also exclude all fields and methods of those classes</p>
        <p>//exclude all classes with a name that start with "Class" except for "Class0" and "Class1"</p>
        <p>*.(Class* &amp;&amp; !(Class0 || Class1)) and "MyJar*.jar"!*.* and //exclude all classes contained in a JAR file with a name matching "MyJar*.jar"</p>
        <p>@*.MyAnnotation0 *.*; //exclude all classes annotated which an annotation matching *.MyAnnotation0</p>
        <p>&lt;className&gt; &lt;extendsClause&gt; &lt;implementsClause&gt;</p>
        <p>&lt;fieldAnnotations&gt; &lt;fieldModifiers&gt; &lt;fieldType&gt; &lt;fieldName&gt;;</p>
        <p>For a field to be excluded, all of the following must be true:</p>
        <p>Its modifiers (e.g. public volatile ) must match all parameter field modifiers.</p>
        <p>public , static and NOT transient to be excluded.</p>
        <p>trimExclude *.* * and //Exclude all fields</p>
        <p>*.Class1 !transient int f* and //Exclude all non-transient "int" fields matching "f*"</p>
        <p>//in classes with the unqualified name "Class1"</p>
        <p>public *.*^ public volatile * and //Exclude all "public volatile" fields in</p>
        <p>*.* @*.MyAnnotation0 *; //Exclude all fields annotated with a class matching *.MyAnnotation0.</p>
        <p>&lt;methodAnnotations&gt; &lt;methodModifiers&gt; &lt;methodName&gt;( &lt;argumentTypes&gt; ) &lt;throwsClause&gt; +signatureClasses;</p>
        <p>For a method to be excluded, all of the following must be true:</p>
        <p>Its modifiers (e.g. public native ) must match all parameter method modifiers.</p>
        <p>public , static and NOT synchronized to be excluded.</p>
        <p>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist.</p>
        <p>(A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</p>
        <p>Its throws clause must contain all the classes specified in the exclude parameter's throw clause.</p>
        <p>So, if the exclude parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be excluded.</p>
        <p>The trimExclude statement supports the special method names &lt;init&gt; and &lt;clinit&gt;</p>
        <p>which represent constructor and class initializer method names respectively. However, class initializers are automatically excluded from being trimmed in any case.</p>
        <p>trimExclude *.* *(*) and //Exclude all methods</p>
        <p>*.* !static m*() and //Exclude all non-static methods taking no parameters with names matching "m*"</p>
        <p>*.* public &lt;init&gt;() and //Exclude all public no argument constructors</p>
        <p>//Exclude all "native" methods. Also exclude the containing class.</p>
        <p>*.*^ native *(*) and *.* *(*) throws java.io.IOException and //Exclude all methods that throw java.io.IOException.</p>
        <p>//Exclude all "abstract" methods that take a single String.</p>
        <p>//Exclude all methods in pack1.Class1 along with the matching methods' return and parameter types</p>
        <p>//Exclude all the methods of any class implementing "Serializable" in a package that matches "pack1.*"</p>
        <p>pack1.* implements java.io.Serializable *(*) and</p>
        <p>//Exclude all methods annotated with a class matching *.MyAnnotation0.</p>
        <p>An annotation exclude parameter is fundamentally different from the Class exclude , Field exclude and Method exclude</p>
        <p>parameters discussed above. An annotation exclude parameter tells Zelix KlassMaster(TM) to not delete specified annotations appearing on classes, fields or methods that would otherwise be removed if the</p>
        <p>trimExclude @pack0.AnnotationClass0 and //Don't remove any pack0.AnnotationClass0 annotations</p>
        <p>@*.MyAnnotation1; //Don't remove any annotations matching *.MyAnnotation1</p>
        <p>" trimExclude " excludeParameter (" and " excludeParameter) * ";"</p>
        <p>annotationExclusionParameter ::= "@" wildcardClassName</p>
        <p>annotationSpecifier ::= ("@" [packageExcludeParameter] nameSpecifier) | annotationSpecifierAndList</p>
        <p>annotationSpecifierAndList ::= ["!"] "(" annotationSpecifierOrList ("&amp;&amp;" annotationSpecifierOrList)* ")"</p>
        <p>annotationSpecifierOrList ::= annotationSpecifier ("||" annotationSpecifier)*</p>
        <p>[annotationSpecifier] [["!"] " public " | " package "]</p>
        <p>[["!"] " abstract "] [["!"] " final "] [["!"] " interface "] [["!"] " synthetic "] [["!"] " enum "] [["!"] " annotation "]</p>
        <p>[" \" " archiveQualifier " \" " " ! "] [packageExcludeParameter ["."]] nameSpecifier ["^"] ["+"] [containingClause]</p>
        <p>containingClause ::= " containing " " { " " memberAndList " " } "</p>
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
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - trimExclude",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/trimExcludeStatement"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - trimExclude"
    }
  ]
}]
useHead({
  title: 'trimExclude | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - trimExclude | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/trimExcludeStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
