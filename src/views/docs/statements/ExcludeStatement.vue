<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - exclude</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - exclude</li>
          <li>The exclude Statement The ZKM Script exclude statement excludes the names of specified objects from being renamed by the Zelix KlassMaster(TM) obfuscate statement. Successive exclude statements have a cumulative effect . Once an exclusion has been set its effect can be</li>
          <li>reduced by a following unexclude statement.</li>
          <li>removed entirely by a following resetExclusions statement.</li>
          <li>Examples and Explanation</li>
          <li>Syntax</li>
          <li>Package exclude parameters</li>
          <li>Class exclude parameters</li>
          <li>Field exclude parameters</li>
          <li>Method exclude parameters</li>
          <li>Method prefix exclude parameters</li>
          <li>Class suffix exclude parameters</li>
        </ul>
        <pre class="code"><code>exclude pack1.pack2. and  //exclude the package "pack1.pack2"
        *. and  //exclude all packages
        p*1.*.p*1. and  //exclude any package matching "p*1.*.p1"
        pack2.*. and  //exclude all the sub-packages of "pack2"
        pack3.. and  //exclude "pack3" and all sub-packages of "pack3"
        (pack4.*. &amp;&amp; !(pack3.pack0. || pack3.pack2.)); //exclude all the sub-packages of "pack4" except for "pack0" and "pack2"</code></pre>
        <ul>
          <li>Its annotations must match any specified annotations.</li>
          <li>Its modifiers (e.g. public final ) must match all parameter modifiers. So if the parameters are public abstract !interface then the class must be public , abstract and NOT an interface to be excluded.</li>
          <li>If the parameter has an archive qualifier then the class must be contained in an archive which matches that archive qualifier.</li>
          <li>Its package qualifiers must match any specified package exclude parameter component (see Package exclude parameters ). If there is no package exclude parameter component then the class must be in the default package.</li>
          <li>Its unqualified name must match the specified class name specification.</li>
          <li>If the parameter has a containing clause then the class must contain members which match the specified class</li>
          <li>If the parameter has an extends clause then the class must be a subclass of the specified class</li>
          <li>If the parameter has an implements clause then the class must directly or indirectly implement all of the specified interfaces</li>
        </ul>
        <pre class="code"><code>exclude *          and         //exclude all classes in the default package
        *.Class1   and         //exclude all classes with the unqualified class name "Class1"
        pack1.pack2..*   and   //exclude all classes in "pack1.pack2" or any of its sub-packages
        public !final *.* and  //exclude all public non-final classes
        //exclude all "public abstract" classes that have an unqualified name matching "C*s" and extend "pack1.Class1". package abstract *.C*s extends pack1.Class1 and 
        //exclude all classes in packages that start with the character "p" and also exclude the names of the enclosing packages. p*.^*     and 
        "MyJar*.jar"!*.* and //exclude all classes contained in a JAR file with a name matching "MyJar*.jar"
        //exclude all classes that implement Serializable and also exclude all field and method names
        *.* + implements java.io.Serializable and 
        //exclude names of all classes that start with "Class" except for "Class0" and "Class1"
        *.(Class* &amp;&amp; !(Class0 || Class1)) and 
        @*.MyAnnotation0 *.*  and //exclude all classes annotated which an annotation matching *.MyAnnotation0
        *.* containing{native *(*)};  //exclude all classes containing a native method</code></pre>
        <ul>
          <li>Its containing class must match any class exclude parameter component (see Class exclude parameters ).</li>
          <li>Its annotations must match any specified field level annotations.</li>
          <li>Its modifiers (e.g. public volatile ) must match all parameter field modifiers. So if the parameters are public static !transient then the field must be public , static and NOT transient to be excluded.</li>
          <li>Its type (e.g. int[] or java.lang.String) must match the parameter field type if it exists.</li>
          <li>Its name must match the parameter field name.</li>
        </ul>
        <pre class="code"><code>exclude *.* *   and //Exclude all field names
        *.Class1 !transient int f* and //Exclude all non-transient "int" field names matching "f*" 
                                       //in classes with the unqualified name "Class1"
        public *.^*^ public volatile * and //Exclude all "public volatile" fields in
                                           //public classes. //Also exclude the containing package and class names. "MyJar*.jar"!*.* * and //exclude all fields contained in a JAR file with a name matching "MyJar*.jar"
        *.* @*.MyAnnotation0 *;  //Exclude all fields annotated with a class matching *.MyAnnotation0.</code></pre>
        <ul>
          <li>Its annotations must match any specified method or method parameter level annotations.</li>
          <li>Its modifiers (e.g. public native ) must match all parameter method modifiers. So if the parameters are public static !synchronized then the method must be public , static and NOT synchronized to be excluded.</li>
          <li>Its name must match the parameter method name.</li>
          <li>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist. (A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</li>
          <li>Its throws clause must contain all the classes specified in the exclude parameter's throw clause. So, if the exclude parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be excluded.</li>
          <li>pack1.Class1 (because it is the return type of a matching method) and</li>
          <li>pack2.Class2 (because it is a parameter type of a matching method)</li>
        </ul>
        <pre class="code"><code>exclude *.* *(*)           and  //Exclude all method names
        *.* !static m*()   and  //Exclude all non-static methods taking no parameters with names matching "m*"
        //Exclude all "native" methods. Also exclude the containing package and class names. *.^*^ native *(*)  and  
        *.* *(*) throws java.io.IOException and  //Exclude all methods that throw java.io.IOException. //Exclude the names of all "abstract" methods that take a single String. *.* abstract *(java.lang.String) and 
        pack1.Class1 *(*) +signatureClasses and //Exclude all method names in pack1.Class1 along with 
                                                //the matching methods' return and parameter types
        //Exclude all the methods of any class implementing "Serializable" in a package that matches "pack1.*"
        pack1.* implements java.io.Serializable *(*) and 
        //Exclude all methods annotated with a class matching *.MyAnnotation0. "MyJar*.jar"!*.* *(*) and //exclude all methods contained in a JAR file with a name matching "MyJar*.jar"
        *.* @*.MyAnnotation0 *(*);</code></pre>
        <ul>
          <li>its specified prefix is excluded from being renamed</li>
          <li>if a field X can be found in in the class containing the matching method or</li>
          <li>in the hierarchy of the class containing the matching method</li>
          <li>Its name must start with the specified prefix.</li>
          <li>All the above conditions for exclusion of the method name's prefix are met.</li>
          <li>The field's original name equals the non-prefix and non-suffix part of the method's name.</li>
          <li>The field is contained in the class containing the matching method or</li>
          <li>the hierarchy of the class containing the matching method.</li>
        </ul>
        <pre class="code"><code>exclude *.* get&lt;link&gt;() and //Exclude the "get" prefix in all method names starting with "get" that take no parameters
        *.* set&lt;link&gt;(java.lang.String); //Exclude "set" prefix in all methods starting with "set" which take a single String parameter</code></pre>
        <ul>
          <li>its specified suffix is excluded from being renamed</li>
          <li>if present, its specified prefix is excluded from being renamed</li>
          <li>if a class X can be found that has an unqualified name matching the non-prefix and non-suffix part of the matching class's name then the non-prefix and non-suffix part of the matching class's name will be renamed to the new name of the class X .</li>
          <li>RMI (e.g. the _Stub and _Skel suffixes) and</li>
          <li>Java Beans (e.g. the BeanInfo and Customizer suffixes) scenarios.</li>
          <li>The class's package qualifiers must match any specified package exclude parameter component (see Package exclude parameters ). If there is no package exclude parameter component then the class must be in the default package.</li>
          <li>If a prefix is present then class's unqualified name must start with the specified prefix.</li>
          <li>The class's unqualified name must end with the specified suffix.</li>
          <li>All the above conditions for exclusion of the class name's suffix are met.</li>
          <li>The other class's original name equals the non-prefix and non-suffix part of the class's name.</li>
          <li>The other class is contained in the same package as the class or</li>
          <li>a package that matches one of the packages specified in the search path.</li>
        </ul>
        <pre class="code"><code>exclude *._&lt;link&gt;_Skel and //Exclude the "_" prefix and the "_Skel" suffix in all classes 
                           //with unqualified names starting with "_" and ending with "_Skel"                        
        &lt;link&gt;BeanInfo search pack1.*, pack2 and 
                           //Exclude the "BeanInfo" suffix in all classes that end with it
                           //that are in the default package. Search packages matching
                           //"pack1.*" or "pack2" for a class with an original name
                           //matching the non-suffix part of the class name. pack1.&lt;link&gt;X implements pack2.Class2;   
                           //Exclude the "X" suffix in all classes that end with it
                           //that are in "pack1" and implement "pack2.Class".</code></pre>
        <p>The ZKM Script exclude statement excludes the names of specified objects from being renamed by the Zelix KlassMaster(TM)</p>
        <p>statement. Successive exclude statements have a cumulative effect . Once an exclusion has been set its effect can be</p>
        <p>The remainder of this page is organized into the following sections.</p>
        <p>exclude statement parameters may be loosely categorized into the following groups</p>
        <p>Any package name matching a package exclusion parameter is excluded. If a package level is specified by a simple "*" wildcard then it matches one or more levels.</p>
        <p>If the package parameter is a component of a class, field, method or class suffix exclude parameter and the package parameter is followed by a</p>
        <p>then the name of the enclosing package is also excluded. Note that a package name specification always ends with a "." .</p>
        <p>If a package name specification ends with ".." then it specifies that package and all of its sub-packages.</p>
        <p>exclude pack1.pack2. and //exclude the package "pack1.pack2"</p>
        <p>p*1.*.p*1. and //exclude any package matching "p*1.*.p1"</p>
        <p>pack2.*. and //exclude all the sub-packages of "pack2"</p>
        <p>pack3.. and //exclude "pack3" and all sub-packages of "pack3"</p>
        <p>(pack4.*. &amp;&amp; !(pack3.pack0. || pack3.pack2.)); //exclude all the sub-packages of "pack4" except for "pack0" and "pack2"</p>
        <p>Put informally (with mandatory components in bold), the syntax is:</p>
        <p>&lt;classAnnotations&gt; &lt;classModifiers&gt; "&lt;archiveQualifier&gt;"!&lt;packageQualifiers&gt;.</p>
        <p>&lt;className&gt; &lt;containingClause&gt; &lt;extendsClause&gt; &lt;implementsClause&gt; ;</p>
        <p>For a class name to be excluded, all of the following must be true of a class:</p>
        <p>Its modifiers (e.g. public final ) must match all parameter modifiers.</p>
        <p>public , abstract and NOT an interface to be excluded.</p>
        <p>If the class parameter is a component of a field or method exclude parameter then a final "^" tag after the class name specification causes the enclosing class to be excluded.</p>
        <p>If a class exclusion parameter's class name specification is followed by a "+" tag then the parameter also causes the names of all the fields and methods of the class to be excluded.</p>
        <p>exclude * and //exclude all classes in the default package</p>
        <p>*.Class1 and //exclude all classes with the unqualified class name "Class1"</p>
        <p>pack1.pack2..* and //exclude all classes in "pack1.pack2" or any of its sub-packages</p>
        <p>public !final *.* and //exclude all public non-final classes</p>
        <p>//exclude all "public abstract" classes that have an unqualified name matching "C*s" and extend "pack1.Class1".</p>
        <p>package abstract *.C*s extends pack1.Class1 and</p>
        <p>//exclude all classes in packages that start with the character "p" and also exclude the names of the enclosing packages.</p>
        <p>p*.^* and "MyJar*.jar"!*.* and //exclude all classes contained in a JAR file with a name matching "MyJar*.jar"</p>
        <p>//exclude all classes that implement Serializable and also exclude all field and method names</p>
        <p>*.* + implements java.io.Serializable and</p>
        <p>//exclude names of all classes that start with "Class" except for "Class0" and "Class1"</p>
        <p>*.(Class* &amp;&amp; !(Class0 || Class1)) and @*.MyAnnotation0 *.* and //exclude all classes annotated which an annotation matching *.MyAnnotation0</p>
        <p>*.* containing{native *(*)}; //exclude all classes containing a native method</p>
        <p>&lt;className&gt; &lt;extendsClause&gt; &lt;implementsClause&gt;</p>
        <p>&lt;fieldAnnotations&gt; &lt;fieldModifiers&gt; &lt;fieldType&gt; &lt;fieldName&gt;;</p>
        <p>For a field name to be excluded, all of the following must be true:</p>
        <p>Its modifiers (e.g. public volatile ) must match all parameter field modifiers.</p>
        <p>public , static and NOT transient to be excluded.</p>
        <p>exclude *.* * and //Exclude all field names</p>
        <p>*.Class1 !transient int f* and //Exclude all non-transient "int" field names matching "f*"</p>
        <p>//in classes with the unqualified name "Class1"</p>
        <p>public *.^*^ public volatile * and //Exclude all "public volatile" fields in</p>
        <p>//Also exclude the containing package and class names.</p>
        <p>"MyJar*.jar"!*.* * and //exclude all fields contained in a JAR file with a name matching "MyJar*.jar"</p>
        <p>*.* @*.MyAnnotation0 *; //Exclude all fields annotated with a class matching *.MyAnnotation0.</p>
        <p>&lt;methodAnnotations&gt; &lt;methodModifiers&gt; &lt;methodName&gt;( &lt;argumentTypes&gt; ) &lt;throwsClause&gt; +signatureClasses;</p>
        <p>For a method name to be excluded, all of the following must be true:</p>
        <p>Its modifiers (e.g. public native ) must match all parameter method modifiers.</p>
        <p>public , static and NOT synchronized to be excluded.</p>
        <p>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist.</p>
        <p>(A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</p>
        <p>Its throws clause must contain all the classes specified in the exclude parameter's throw clause.</p>
        <p>So, if the exclude parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be excluded.</p>
        <p>For consistency, the exclude statement supports the special method names &lt;init&gt; and &lt;clinit&gt;</p>
        <p>which represent constructor and class initializer method names respectively. However, because constructor and class initializer names cannot be obfuscated, the syntax has no practical application for this statement.</p>
        <p>If a method exclude parameter ends with the keyword +signatureClasses then, for each matching method, the fully qualified class names of the method's return and parameter types are also excluded from obfuscation. Types which are primitive are ignored. So, if a matching method has the signature</p>
        <p>then the +signatureClasses flag has the effect of excluding the fully qualified names:</p>
        <p>exclude *.* *(*) and //Exclude all method names</p>
        <p>*.* !static m*() and //Exclude all non-static methods taking no parameters with names matching "m*"</p>
        <p>//Exclude all "native" methods. Also exclude the containing package and class names.</p>
        <p>*.^*^ native *(*) and *.* *(*) throws java.io.IOException and //Exclude all methods that throw java.io.IOException.</p>
        <p>//Exclude the names of all "abstract" methods that take a single String.</p>
        <p>*.* abstract *(java.lang.String) and pack1.Class1 *(*) +signatureClasses and //Exclude all method names in pack1.Class1 along with</p>
        <p>//the matching methods' return and parameter types</p>
        <p>//Exclude all the methods of any class implementing "Serializable" in a package that matches "pack1.*"</p>
        <p>pack1.* implements java.io.Serializable *(*) and</p>
        <p>//Exclude all methods annotated with a class matching *.MyAnnotation0.</p>
        <p>"MyJar*.jar"!*.* *(*) and //exclude all methods contained in a JAR file with a name matching "MyJar*.jar"</p>
        <p>If a method name starts with the method prefix exclude parameter</p>
        <p>in the class containing the matching method or</p>
        <p>that has name matching the non-prefix part of the matching method's name then the non-prefix part of the matching method's name will be renamed to the new name of the field X .</p>
        <p>For example, let's say we have a class that contains a method named getTime() and a field named time and we specify a method prefix exclude parameter get&lt;link&gt;() . The prefix is get .</p>
        <p>If the field time is renamed to x then the method getTime() will be renamed to getX() ;</p>
        <p>&lt;methodAnnotations&gt; &lt;methodModifiers&gt; &lt;prefix&gt;&lt;methodName&gt;( &lt;argumentTypes&gt; ) &lt;throwsClause&gt;</p>
        <p>For a method name prefix to be excluded, all of the following must be true:</p>
        <p>For the non-prefix part of the method name to be renamed to match the new name of a field, all of the following must be true:</p>
        <p>the class containing the matching method or</p>
        <p>exclude *.* get&lt;link&gt;() and //Exclude the "get" prefix in all method names starting with "get" that take no parameters</p>
        <p>*.* set&lt;link&gt;(java.lang.String); //Exclude "set" prefix in all methods starting with "set" which take a single String parameter</p>
        <p>If a class matches a class suffix exclude parameter</p>
        <p>For example, for a class suffix exclude parameter _&lt;link&gt;_Skel the prefix is _ and the suffix is _Skel .</p>
        <p>A hypothetical class named _Class1_Skel matches the parameter so the prefix and suffix parts of the name will be retained.</p>
        <p>The non-prefix and non-suffix part of the matching class name _Class1_Skel is "Class1".</p>
        <p>If there is a class in the same package or in a package matching any of the search clause packages named Class1 and if, when obfuscating, Class1 is renamed to abc</p>
        <p>then the class _Class1_Skel will be renamed to _abc_Skel .</p>
        <p>The class suffix exclude parameter is useful for situations in the:</p>
        <p>&lt;classAnnotations&gt; &lt;packageQualifiers&gt;.&lt;prefix&gt; &lt;link&gt;&lt;suffix&gt; &lt;extendsClause&gt; &lt;implementsClause&gt; &lt;searchClause&gt; ;</p>
        <p>For the class suffix of a class to be excluded, all of the following must be true:</p>
        <p>For the non-prefix and non-suffix part of the class name to be renamed to match that of another class, all of the following must be true:</p>
        <p>exclude *._&lt;link&gt;_Skel and //Exclude the "_" prefix and the "_Skel" suffix in all classes</p>
        <p>//with unqualified names starting with "_" and ending with "_Skel"</p>
        <p>&lt;link&gt;BeanInfo search pack1.*, pack2 and</p>
        <p>//Exclude the "BeanInfo" suffix in all classes that end with it</p>
        <p>//that are in the default package. Search packages matching</p>
        <p>//"pack1.*" or "pack2" for a class with an original name</p>
        <p>//matching the non-suffix part of the class name.</p>
        <p>//Exclude the "X" suffix in all classes that end with it</p>
        <p>//that are in "pack1" and implement "pack2.Class".</p>
        <p>" exclude " excludeParameter (" and " excludeParameter) * ";"</p>
        <p>annotationSpecifier ::= ("@" [packageExcludeParameter] nameSpecifier) | annotationSpecifierAndList</p>
        <p>annotationSpecifierAndList ::= ["!"] "(" annotationSpecifierOrList ("&amp;&amp;" annotationSpecifierOrList)* ")"</p>
        <p>annotationSpecifierOrList ::= annotationSpecifier ("||" annotationSpecifier)*</p>
        <p>[annotationSpecifier] [["!"] " public " | " package "]</p>
        <p>[["!"] " abstract "] [["!"] " final "] [["!"] " interface "] [["!"] " synthetic "] [["!"] " enum "] [["!"] " annotation "]</p>
        <p>[" \" " archiveQualifier " \" " " ! "] [packageExcludeParameter ["."] ["^"]] nameSpecifier ["^"] ["+"] [containingClause]</p>
        <p>[annotationSpecifier] [packageExcludeParameter] wildcardName " &lt;link&gt; " name [extendsClause] [implementsClause]</p>
        <p>containingClause ::= " containing " " { " " memberAndList " " } "</p>
        <p>extendsClause ::= " extends " [annotationSpecifier] wildcardClassName</p>
        <p>classExcludeParameter [annotationSpecifier] [["!"] " public " | " protected "| " package "| " private "]</p>
        <p>[["!"] " static "] [["!"] " final "] [["!"] " transient "] [["!"] " volatile "] [["!"] " synthetic "] [["!"] " enum "]</p>
        <p>fullyQualifiedClassName ::= name ("." name) *</p>
        <p>implementsClause ::= " implements " [annotationSpecifier] wildcardClassName ("," [annotationSpecifier] wildcardClassName) *</p>
        <p>[["!"] " abstract "] [["!"] " static "] [["!"] " final "] [["!"] " native "] [["!"] " synchronized "] [["!"] " synthetic "] [["!"] " bridge "]</p>
        <p>nameSpecifier "(" [ "*" | (parameter ("," parameter) * )] ")" ["throws" wildcardClassName] ["+signatureClasses"]</p>
        <p>[["!"] " abstract "] [["!"] " static "] [["!"] " final "][["!"] " native "] [["!"] " synchronized "]</p>
        <p>name " &lt;link&gt; " "(" [ "*" | (parameter ("," parameter) * )] ")" ["throws" wildcardClassName]</p>
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
        <p>searchClause ::= " search " packageName ("," packageName) *</p>
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
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - exclude",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/excludeStatement"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - exclude"
    }
  ]
}]
useHead({
  title: 'exclude | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - exclude | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/excludeStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
