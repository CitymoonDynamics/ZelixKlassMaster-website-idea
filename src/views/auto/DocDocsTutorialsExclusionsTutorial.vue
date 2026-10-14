<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Basic exclusions</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Exclusions Tutorial</li>
          <li>ZKM Script Exclusions Tutorial</li>
          <li>Introduction The ZKM Script language contains a number of statements that rely on the concept of package, class, field or method exclusion. These statements include</li>
          <li>ignoreMissingReferences</li>
          <li>trimExclude</li>
          <li>trimUnexclude</li>
          <li>exclude</li>
          <li>unexclude</li>
          <li>obfuscateFlowExclude</li>
          <li>obfuscateFlowUnexclude</li>
          <li>obfuscateExceptionsExclude</li>
          <li>obfuscateExceptionsUnexclude</li>
          <li>stringEncryptionExclude</li>
          <li>stringEncryptionUnexclude</li>
          <li>integerEncryptionExclude</li>
          <li>integerEncryptionUnexclude</li>
          <li>longEncryptionExclude</li>
          <li>longEncryptionUnexclude</li>
          <li>existingSerializedClasses</li>
          <li>fixedClasses</li>
          <li>accessedByReflection</li>
          <li>accessedByReflectionExclude</li>
          <li>obfuscateReferencesInclude</li>
          <li>obfuscateReferencesExclude</li>
          <li>methodParameterChangesInclude</li>
          <li>methodParameterChangesExclude</li>
          <li>removeMethodCallsInclude</li>
          <li>removeMethodCallsExclude</li>
          <li>basic exclusions</li>
          <li>containing object exclusions</li>
          <li>contained object exclusions</li>
          <li>complex name specifications</li>
          <li>exclusions based on annotations</li>
          <li>exclusion of annotations</li>
          <li>exclusions based on references by annotations</li>
          <li>exclusions based on the contained members</li>
          <li>method signature class exclusions (ie. +signatureClasses )</li>
          <li>method prefix (linked) exclusions</li>
          <li>class suffix (linked) exclusions</li>
          <li>exclusion troubleshooting</li>
        </ul>
        <h3>Basic exclusions</h3>
        <h3>Package exclusion parameters</h3>
        <h3>Class exclusion parameters</h3>
        <ul>
          <li>the optional &lt;packageQualifiers&gt;. component has the same syntax as a package exclusion parameter .</li>
          <li>class modifiers can be negated by using the "!" character.</li>
          <li>classes specified in the &lt;extendsClause&gt; and &lt;implementsClause&gt; components must be fully qualified but they can contain the "*" wildcard.</li>
        </ul>
        <h3>Field exclusion parameters</h3>
        <ul>
          <li>the &lt;annotations&gt; &lt;classModifiers&gt; &lt;packageQualifiers&gt;. &lt;className&gt; &lt;extendsClause&gt; &lt;implementsClause&gt; component has the same syntax as a class exclusion parameter . It specifies the containing class.</li>
          <li>the field modifiers can be negated by using the "!" character.</li>
          <li>if the &lt;fieldType&gt; is non-primitive then the class name must be fully qualified .</li>
        </ul>
        <h3>Method exclusion parameters</h3>
        <ul>
          <li>the method modifiers can be negated by using the "!" character.</li>
          <li>the special &lt;methodName&gt; &lt;init&gt; means "method constructor".</li>
          <li>the special &lt;methodName&gt; &lt;clinit&gt; means "class initializer method".</li>
          <li>if any of the &lt;argumentTypes&gt; is non-primitive then the class name must be fully qualified .</li>
          <li>the absence of a &lt;argumentTypes&gt; component means "no arguments".</li>
          <li>a simple "*" means "no or any arguments".</li>
          <li>a "?" (i.e. a method parameter placeholder) can be used in a comma delimited &lt;argumentTypes&gt; list to match any single parameter type.</li>
        </ul>
        <h3>Containing objects exclusions</h3>
        <ul>
          <li>the name of the class that contains the field or method and/or</li>
          <li>the name of the package that contains the field or method</li>
        </ul>
        <h3>Contained objects exclusions</h3>
        <h3>Complex name specifications</h3>
        <ul>
          <li>the highest level of a complex specification is always enclosed in brackets (ie. "(...)").</li>
          <li>the negation character "!" must always immediately precede the opening "(" of a bracket pair.</li>
          <li>a complex name specification is either a package, class, field or method name specification. It cannot be a mixture of these name types.</li>
          <li>"&amp;&amp;" takes precedence over "||" . So (x || y &amp;&amp; z) is equivalent to (x || (y &amp;&amp; z)) .</li>
        </ul>
        <h3>Exclusions based on annotations</h3>
        <ul>
          <li>the highest level of a complex annotation specification is always enclosed in brackets (ie. "(...)").</li>
          <li>"&amp;&amp;" takes precedence over "||" . So (@x || @y &amp;&amp; @z) is equivalent to (@x || (@y &amp;&amp; @z)) .</li>
        </ul>
        <h3>Exclusion of annotations</h3>
        <h3>Exclusions based on references by annotations</h3>
        <ul>
          <li>have a name matching "*"</li>
          <li>are in a package matching "*"</li>
          <li>are referenced by the "foo" attribute of the annotation class pack2.MyAnnotation0 which annotates an opened class or one of its fields, methods or method parameters</li>
          <li>This kind of an exclusion is a class level exclusion like any other.</li>
          <li>It is the referenced class which is being excluded and not the class that actually has the referencing annotation.</li>
          <li>The default annotation attribute name is "value". So, if a class was annotated as @pack2.MyAnnotation0(pack1.Class0.class) then the exclusion would be @pack2.MyAnnotation0(value=*.*)</li>
        </ul>
        <h3>Exclusions based on contained members</h3>
        <ul>
          <li>the highest level of a complex member specification is always enclosed in brackets (ie. "(...)").</li>
        </ul>
        <h3>Method signature class exclusions ( +signatureClasses )</h3>
        <ul>
          <li>pack1.Class1 (because it is the return type of a matching method) and</li>
          <li>pack2.Class2 (because it is a parameter type of a matching method)</li>
        </ul>
        <h3>Method prefix (linked) exclusions</h3>
        <ul>
          <li>a "*" &lt;argumentTypes&gt; component means "no or any arguments".</li>
          <li>a "*" can also be used in a comma delimited &lt;argumentTypes&gt; list to match any single parameter type.</li>
        </ul>
        <h3>Class suffix (linked) exclusions</h3>
        <ul>
          <li>the optional &lt;packageQualifiers&gt; component has the same syntax as a package exclusion parameter .</li>
          <li>the packages specified in the &lt;searchClause&gt; component can contain wildcards.</li>
        </ul>
        <h3>Exclusion Troubleshooting</h3>
        <ul>
          <li>Java Reflection API accesses to classes, fields and methods that Zelix KlassMaster(TM) was unable to fully resolve. (If Zelix KlassMaster(TM) was unable to fully resolve a Reflection API call then it will report the fact in the Class Open Warnings dialog or the Zelix KlassMaster(TM) log.}</li>
          <li>Specialized APIs (not catered for by the existing default exclusions) that directly access your classes, fields or methods.</li>
          <li>the effective exclude parameters (including the default exclusions)</li>
          <li>which classes, fields or methods were directly matched by a particular exclusion parameter.</li>
        </ul>
        <p>The ZKM Script language contains a number of statements that rely on the concept of package, class, field or method exclusion. These statements include</p>
        <p>All these statements operate by specifying certain objects (ie. packages, classes, fields or methods) that are to be excluded (or unexcluded) from some aspect of the operation of the ZKM Script</p>
        <p>statement. All of the statements listed above use the same syntax for specifying objects for exclusion (or unexclusion).</p>
        <p>This tutorial focuses on the more complicated aspects of that syntax and gives some examples based on typical scenarios.</p>
        <p>The documentation specific to each statement does a good job of explaining basic exclusions and this tutorial assumes that you have already looked at these basic explanations and examples.</p>
        <p>Similarly, if you need a explanation of the effect of any of the listed statements you should see the documentation for that statement.</p>
        <p>Generally speaking, an exclusion parameter specifies either a package, a class, a field or a method.</p>
        <p>The simplest package exclusion parameter simply specifies a package name. For example, the parameter pack1.pack2.</p>
        <p>explicitly specifies one particular package. Of course, basic package exclusions become more powerful when the "*" wildcard is used.</p>
        <p>all packages with names starting with "pack1"</p>
        <p>pack1 and all sub-packages of package pack1</p>
        <p>Note that in ZKM Script the final "." character is part of the package name . The importance of this point will become clearer when we look at containing object exclusions and complex name specifications .</p>
        <p>Informally (with mandatory components in bold), the syntax of a class exclusion parameter is:</p>
        <p>&lt;annotations&gt; &lt;classModifiers&gt; "&lt;archiveQualifier&gt;"!&lt;packageQualifiers&gt;.</p>
        <p>&lt;className&gt; &lt;extendsClause&gt; &lt;implementsClause&gt;</p>
        <p>classes specified in the &lt;extendsClause&gt; and &lt;implementsClause&gt; components must be fully qualified</p>
        <p>just the one class Class1 that is in the default package</p>
        <p>just the one class Class1 that is in the package pack1</p>
        <p>all classes that are in the default package</p>
        <p>all classes that are in any package other than the default package</p>
        <p>all classes that are in the package pack1 or in any sub-package of pack1</p>
        <p>all classes contained in a JAR file with a name matching "MyJar*.jar"</p>
        <p>all classes annotated by a class matching pack2.MyAnnotation0 that are in any package other than the default package</p>
        <p>public !final *.* extends java.util.Observable</p>
        <p>all public, non-final classes that are in any package other than the default package and extend (directly or indirectly) java.util.Observable</p>
        <p>p*.C* implements java.io.Serializable, java.util.Observer</p>
        <p>all classes with names starting with "C" that are in any package starting with "p" and that implement (directly or indirectly) both java.io.Serializable and java.util.Observer</p>
        <p>Informally (with mandatory components in bold), the syntax of a field exclusion parameter is:</p>
        <p>&lt;annotations&gt; &lt;classModifiers&gt; &lt;packageQualifiers&gt;.</p>
        <p>&lt;annotations&gt; &lt;fieldModifiers&gt; &lt;fieldType&gt; &lt;fieldName&gt;</p>
        <p>the &lt;annotations&gt; &lt;classModifiers&gt; &lt;packageQualifiers&gt;.</p>
        <p>component has the same syntax as a class exclusion parameter . It specifies the containing class.</p>
        <p>just the one field field1 in the one class Class1 that is in the default package</p>
        <p>all the int fields starting with "f" in the one class pack1.Class1</p>
        <p>*.* implements java.io.Serializable !static !transient *</p>
        <p>all the non-static and non-transient fields in classes that implement java.io.Serializable</p>
        <p>all the private String[] fields in public classes that are in any package other than the default package</p>
        <p>public *.* @pack2.MyAnnotation0 private int *</p>
        <p>all the private int fields annotated with a class matching pack2.MyAnnotation0 in public classes that are in any package other than the default package</p>
        <p>Informally (with mandatory components in bold), the syntax of a method exclusion parameter is:</p>
        <p>&lt;annotations&gt; &lt;methodModifiers&gt; &lt;methodName&gt;( &lt;argumentTypes&gt; ) &lt;throwsClause&gt;</p>
        <p>&lt;clinit&gt; means "class initializer method".</p>
        <p>just the one method method1() that takes no parameters in the one class Class1 that is in the default package</p>
        <p>all the methods starting with "m" with any or no parameters in the one class pack1.Class1</p>
        <p>all public methods with any or no parameters that are annotated with the class pack2.MyAnnotation0 and appear in any class and package except the default package</p>
        <p>all methods which take an int , any second parameter and a String and which appear in any class and package except the default package</p>
        <p>all methods which take exactly two parameters and which appear in any class and package except the default package</p>
        <p>all methods which take an int parameter followed by a parameter of any type which is annotated with the class pack2.MyAnnotation0 and which appear in any class and package except the default package</p>
        <p>all the non-public and final methods in classes with package scope</p>
        <p>*.* public static main(java.lang.String[])</p>
        <p>all the public, static main(String[]) methods in classes that are in any package other than the default package</p>
        <p>*.* *(int, java.lang.String) throws java.lang.Exception</p>
        <p>all the methods that take an int and a String as a argument and throw a java.lang.Exception or one of its subclasses</p>
        <p>As mentioned above, an exclusion parameter generally specifies either a package, a class, a field or a method. However, with the</p>
        <p>statement there is a way to specify a class name exclusion parameter that also excludes the name of the package that contains the class. Similarly, you can specify field and method exclusion parameters that exclude</p>
        <p>To do this you append a "^" character to the end of the package or class name.</p>
        <p>the one class Class1 in the package pack1 . Also "matches" the containing package pack1 .</p>
        <p>Note that the "^" follows the package name and that the package name includes the final "." character.</p>
        <p>the one method method1() that takes no parameters in the one class Class1 that is in the default package. Also "matches" the containing class Class1</p>
        <p>all methods in any class that is not in the default package.</p>
        <p>Also "matches" the packages and classes that contain a method.</p>
        <p>all methods in any class that is in pack1 or any of its sub-packages.</p>
        <p>statement there is a way to specify a class name exclusion parameter that also excludes the names of all the fields and methods contained in the class.</p>
        <p>To do this you follow the class name specification with a "+" character. You can either append the character directly or separate it with a space.</p>
        <p>the one class Class1 in the package pack1 . Also "matches" all the fields and methods of pack1.Class1</p>
        <p>all classes in the package pack1 that implement pack2.Class2 .</p>
        <p>Also "matches" all the fields and methods of any matched classes.</p>
        <p>Wherever a package, class, field or method name can appear in an exclusion statement, you can use a complex name specification. A complex name specification allows you to use &amp;&amp; (ie. "and") and || (ie. "or") conditions and negation to more succinctly express complex specifications.</p>
        <p>any class Class1 in either of the packages pack1 or pack2 .</p>
        <p>Note that the package names end with the "." character.</p>
        <p>(pack1.*. &amp;&amp; !(pack1.pack1. || pack1.pack3.))*</p>
        <p>any class in a sub-package of pack1 but not pack1.pack1 or pack1.pack3 .</p>
        <p>any field in a class in package pack1 except those in a class named Class1 .</p>
        <p>(pack1. || pack1.*.)(C* || D*) (m* || n*)(*)</p>
        <p>any method starting with either "m" or "n" that is in a class starting with either "C" or "D" that is in the package pack1 or one of its sub-packages.</p>
        <p>The final (*) specifies that the any method argument types will match.</p>
        <p>Also matches the containing package because of the "^" character.</p>
        <p>You can exclude packages, classes, fields and methods based upon the presence or absence of annotations at the class, field, method or method parameter level.</p>
        <p>You can use the "*" wildcard and the &amp;&amp; (i.e. "and"), || (i.e. "or") and !</p>
        <p>(i.e. negation) syntax to form complex annotation specifications.</p>
        <p>As with complex name specifications, useful points to note are:</p>
        <p>Note that the annotation's package qualifiers must be either explicitly specified or implicitly specified via a wildcard.</p>
        <p>Also, Zelix KlassMaster(TM) can only match exclusions involving annotations if those annotations are actually in the class file.</p>
        <p>Annotations that have a RetentionPolicy of SOURCE are discared by the compiler and are not compiled into the class file that is generated.</p>
        <p>So you can only usefully specify exclusions using annotations if those annotations have a RetentionPolicy of CLASS or RUNTIME.</p>
        <p>all classes annotated with pack2.MyAnnotation0 that are in any package other than the default package.</p>
        <p>all fields annotated with pack2.MyAnnotation0 that are in any class in any package other than the default package.</p>
        <p>all methods with any or no parameters annotated with pack2.MyAnnotation0 that are in any class in any package other than the default package.</p>
        <p>all methods with a single int parameter which is annotated with pack2.MyAnnotation0 that are in any class in any package other than the default package.</p>
        <p>(@pack2.MyAnnotation0 &amp;&amp; !(@pack2.MyAnnotation1)) *.*</p>
        <p>all classes annotated with pack2.MyAnnotation0 AND NOT annotated with pack2.MyAnnotation1 that are in any package other than the default package.</p>
        <p>all classes NOT annotated with any class and that are in any package other than the default package.</p>
        <p>If an annotation class name appears totally by itself (without modifiers, field or method specifications, extends or implements clauses etc.) then it is interpreted in a special way.</p>
        <p>exclude pack1.Class1 implements java.lang.annotation.Annotation;</p>
        <p>However, the main reason for the syntax is that in the</p>
        <p>statements the syntax has an addtional special meaning.</p>
        <p>it also means that annotations matching the specified class(es) should not be removed where they otherwise would have been if the</p>
        <p>the syntax removes from the set of exclusions created by the corresponding</p>
        <p>As mentioned above, the annotation class specification must appear by itself but it can contain wildcards.</p>
        <p>In some unusual circumstances, you may need to exclude a class that is not directly annotated but rather is referenced by an annotation on another class.</p>
        <p>For example, you may have a class pack1.Class0 that is not directly annotated but another class pack0.Class1 is annotated in the following way.</p>
        <p>@pack2.MyAnnotation0(foo=pack1.Class0.class)</p>
        <p>So, the annotation of pack1.Class1 refers to pack1.Class0 . You can specify the exclusion of the referenced class in the following way.</p>
        <p>The above exclusion parameter matches all classes that</p>
        <p>The default annotation attribute name is "value". So, if a class was annotated as @pack2.MyAnnotation0(pack1.Class0.class)</p>
        <p>then the exclusion would be @pack2.MyAnnotation0(value=*.*)</p>
        <p>all classes referenced by the "foo" attribute of the annotation class pack2.MyAnnotation0 in some annotation appearing in an opened class.</p>
        <p>@pack2.*(value=*.*^) extends pack2.Class2 public *(*)</p>
        <p>all public methods in any classes referenced by the default "value" attribute of any annotation class matching pack2.* and which extends pack2.Class2 . Also exclude the containing classes.</p>
        <p>You can exclude classes based upon the presence or absence of specified fields or method within the classes.</p>
        <p>(i.e. negation) syntax to form complex member specifications.</p>
        <p>Note that the member specifications are enclosed in braces (i.e curly brackets) that follow the "containing".</p>
        <p>If you use complex member specifications within a containing clause, useful points to note are:</p>
        <p>all classes containing a String array field with a name starting with "m".</p>
        <p>all classes containing a method starting with "x" and a field starting with "y".</p>
        <p>all classes that do not contain an annotated method.</p>
        <p>If a ZKM Script exclude statement method parameter ends with the keyword +signatureClasses then, for each matching method, the fully qualified class names of the method's return and parameter types are also excluded from obfuscation. Types which are primitive are ignored. So, given an exclude statement</p>
        <p>exclude *.* method1(*) +signatureClasses;</p>
        <p>matches the exclusion parameter then, in addition to excluding the name of the method, the +signatureClasses flag has the effect of excluding the fully qualified class names:</p>
        <p>Some features of the Java language create dependencies between method and field names. For example, Java Beans have getter and setter methods which have a correspondence between the method name and the name of the field that is accessed. So you will have the method getTime() returning the value of the field time .</p>
        <p>At the time of obfuscation, you may not want the prefix get to be changed or the correspondence with the field name to be broken.</p>
        <p>statement provides the special method prefix exclusion parameter to deal with these situations.</p>
        <p>Using the example of a class that contains a method named getTime() and a field named time then we specify a method prefix exclude parameter get&lt;link&gt;() . The prefix is get .</p>
        <p>If the field time is renamed to x then the method getTime() will be renamed to getX() .</p>
        <p>Informally (with mandatory components in bold), the syntax is:</p>
        <p>&lt;classAnnotations&gt; &lt;classModifiers&gt; &lt;packageQualifiers&gt;.</p>
        <p>&lt;methodAnnotations&gt; &lt;methodModifiers&gt; &lt;prefix&gt;&lt;methodName&gt;( &lt;argumentTypes&gt; ) &lt;throwsClause&gt;</p>
        <p>Exclude the "get" prefix in all method names starting with "get" that take no parameters that are in any class in any package other than the default package.</p>
        <p>Exclude the "set" prefix in all method names starting with "set" that take any or no parameters that are in any class in any package other than the default package.</p>
        <p>Exclude the "set" prefix in all method names starting with "set" that take a single String parameter that are in any class in any package other than the default package.</p>
        <p>Some features of the Java language create dependencies between class names. For example, the RMI "stub" class of a class Class1 must be named</p>
        <p>Class1_Stub . For RMI/IIOP the "stub" class must be named _Class1_Stub . So we have a situation where for some classes a suffix (eg. "_Stub") and perhaps a prefix (eg. "_") must not be changed during obfuscation. Also, we have a situation where the core part of a class name (ie. non-prefix and non-suffix) must always match the name of some other class.</p>
        <p>statement provides the special class suffix exclusion parameter to deal with these situations.</p>
        <p>&lt;packageQualifiers&gt;.&lt;prefix&gt; &lt;link&gt;&lt;suffix&gt; &lt;extendsClause&gt; &lt;implementsClause&gt; &lt;searchClause&gt;</p>
        <p>Let's take the following classes as our example set.</p>
        <p>pack1.Class1_X is matched because it has the "_X" suffix and it isn't in the default package.</p>
        <p>The non-suffix part of the name is Class1 . Zelix KlassMaster(TM) looks in the same package for a class named</p>
        <p>Class1 and finds pack1.Class1 . If the name of pack1.Class1 is obfuscated to be</p>
        <p>pack1.c then the name of pack1.Class1_X will be obfuscated to be pack1.c_X</p>
        <p>pack1._Class2_Y is matched because it has the "_" prefix and the "_Y" suffix and it is in a package starting with "p".</p>
        <p>The non-prefix, non-suffix part of the name is Class2 . Zelix KlassMaster(TM) looks in the same package for a class named</p>
        <p>Class2 and finds pack1.Class2 . If the name of pack1.Class2 is obfuscated to be</p>
        <p>pack1.c then the name of pack1._Class2_Y will be obfuscated to be pack1._c_Y</p>
        <p>pack1.Class3_Z is matched because it has the "_Z" suffix and it is in the pack1 package.</p>
        <p>The non-suffix part of the name is Class3 . Zelix KlassMaster(TM) looks in the same package for a class named</p>
        <p>Class3 but cannot find one. It then looks at the package specified in the search clause and finds pack1.pack2.Class3 .</p>
        <p>If the name of pack1.pack2.Class3 is obfuscated to be</p>
        <p>pack1.pack2.c then the name of pack1.Class3_Z will be obfuscated to be pack1.c_Z</p>
        <p>You may have to do a little experimentation with your exclusions. Some scenarios that can cause problems are</p>
        <p>Java Reflection API accesses to classes, fields and methods that Zelix KlassMaster(TM) was unable to fully resolve.</p>
        <p>(If Zelix KlassMaster(TM) was unable to fully resolve a Reflection API call then it will report the fact in the Class Open Warnings dialog or the Zelix KlassMaster(TM) log.}</p>
        <p>In such cases the best solution is to add explicit exclusions.</p>
        <p>If you find yourself needing to debug your exclusions when running a ZKM Script then you may find it helpful to run Zelix KlassMaster(TM) using the "-v" (ie. verbose) parameter.</p>
        <p>This will result in a great deal of extra information being written to the log. This extra information will include</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Basic exclusions","url":"https://zkm-web.vercel.app/docs/exclusionsTutorial"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - Exclusions Tutorial | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/exclusionsTutorial' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
