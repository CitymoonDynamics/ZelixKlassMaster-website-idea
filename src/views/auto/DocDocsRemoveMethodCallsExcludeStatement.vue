<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - removeMethodCallsExclude</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - removeMethodCallsExclude</li>
          <li>The removeMethodCallsExclude Statement The ZKM Script removeMethodCallsExclude statement allows you to specify method calls that you DON'T want to have removed from your classes by a following removeMethodCalls statement. It is intended to be used for the removal of "optional" method calls which have no effect such as debugging statements. However, Zelix KlassMaster(TM) will not remove method calls in cases where the method returns an object which is actually used (as opposed to being popped off the stack). Successive removeMethodCallsExclude statements have a cumulative effect . Once a specification has been set its effect can be removed entirely by a following resetRemoveMethodCalls statement.</li>
          <li>Examples and Explanation</li>
          <li>Syntax</li>
          <li>The containedIn clause</li>
          <li>Method reference include parameters</li>
          <li>Its containing class must match any class include parameter component.</li>
          <li>Its annotations must match any specified method or method parameter level annotations.</li>
          <li>Its modifiers (e.g. public native ) must match all parameter method modifiers. So if the parameters are public static !synchronized then the method must be public , static and NOT synchronized to be matched.</li>
          <li>Its name must match the parameter method name.</li>
          <li>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist. (A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</li>
          <li>Its throws clause must contain all the classes specified in the include parameter's throw clause. So, if the include parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be matched.</li>
          <li>The reference must occur in a method which matches the &lt;containedInClause&gt; if it exists.</li>
        </ul>
        <pre class="code"><code>removeMethodCallsExclude *.* *(*)           and  //Match references to all methods
                         containedIn{pack0.* *(*)} *.* !static m*() and //Match references to all non-static methods taking no parameters with names matching "m*"
						                        //where the reference occurs in a method within the "pack0" package
                         *.* !static m*()   and  //Match references to all non-static methods taking no parameters with names matching "m*"
                         //Match references to all "native" methods. Also match the containing class. *.*^ native *(*)  and  
                         *.* *(*) throws java.io.IOException and  //Match references to all methods that throw "java.io.IOException". //Match references to all "abstract" methods that  take a single String. *.* abstract *(java.lang.String) and 
                         //Match references to all methods in pack1.Class1 along with the matching methods' return and parameter types
                         //Match references to all the methods of any class implementing "Serializable" in a package that matches "pack1.*"
                         pack1.* implements java.io.Serializable *(*) and
                         //Match references to all methods annotated with a class matching "*.MyAnnotation0". *.* @*.MyAnnotation0 *(*) and
                         //Match references to all methods in java.lang.System which occur in a method annotated with a class matching "*.MyAnnotation0". containedIn{*.* @*.MyAnnotation0 *(*)} java.lang.System *(*);</code></pre>
        <p>The ZKM Script removeMethodCallsExclude statement allows you to specify method calls that you DON'T want to have removed from your classes by a following</p>
        <p>statement. It is intended to be used for the removal of "optional" method calls which have no effect such as debugging statements.</p>
        <p>However, Zelix KlassMaster(TM) will not remove method calls in cases where the method returns an object which is actually used (as opposed to being popped off the stack).</p>
        <p>Successive removeMethodCallsExclude statements have a cumulative effect . Once a specification has been set its effect can be removed entirely by a following</p>
        <p>If there is a removeMethodCallsExclude statement without a</p>
        <p>statement then the removeMethodCallsExclude statement will be applied against the set of all method calls.</p>
        <p>statement and a removeMethodCallsExclude statement then the</p>
        <p>statement will be applied first against the set of all method calls and then the removeMethodCallsExclude</p>
        <p>statement will be applied against the set of method calls specified by the</p>
        <p>The remainder of this page is organized into the following sections.</p>
        <p>removeMethodCallsExclude statement parameters must specify methods. They may optionally start with a containedIn clause.</p>
        <p>The method reference include parameters below can have an initial containedIn clause.</p>
        <p>The containedIn clause specifies the methods containing the method calls that you don't want to be removed.</p>
        <p>Put another way, it specifies the methods which make the method call which you don't want to have removed.</p>
        <p>For example you could tell Zelix KlassMaster(TM) to not remove any calls to methods of java.lang.System but only where those calls are contained in methods within your class pack0.Class0 .</p>
        <p>Put informally (with mandatory components in bold), the syntax of the containedIn clause is:</p>
        <p>Or with the &lt;methodIncludeParameter&gt; expanded:</p>
        <p>containedIn{ &lt;classAnnotations&gt; &lt;classModifiers&gt; &lt;packageQualifiers&gt;.</p>
        <p>&lt;className&gt; &lt;extendsClause&gt; &lt;implementsClause&gt;</p>
        <p>&lt;methodAnnotations&gt; &lt;methodModifiers&gt; &lt;methodName&gt;( &lt;argumentTypes&gt; ) &lt;throwsClause&gt; }</p>
        <p>So you have a method specification within parentheses preceded by the keyword containedIn . If a removeMethodCallsExclude statement doesn't have a containedIn clause then it is the same as if it has a containedIn clause like the following which specifies ALL methods. Such a containedIn clause is satisfied by all references.</p>
        <p>For a method containing a reference to be matched by a containedIn clause, all of the following must be true for the clause's &lt;methodIncludeParameter&gt;:</p>
        <p>Its modifiers (e.g. public native ) must match all parameter method modifiers.</p>
        <p>public , static and NOT synchronized to be matched.</p>
        <p>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist.</p>
        <p>(A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</p>
        <p>Its throws clause must contain all the classes specified in the include parameter's throw clause.</p>
        <p>So, if the include parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be matched.</p>
        <p>Put informally (with mandatory components in bold), the syntax is:</p>
        <p>&lt;containedInClause&gt; &lt;classAnnotations&gt; &lt;classModifiers&gt; &lt;packageQualifiers&gt;.</p>
        <p>&lt;methodAnnotations&gt; &lt;methodModifiers&gt; &lt;methodName&gt;( &lt;argumentTypes&gt; ) &lt;throwsClause&gt; +signatureClasses;</p>
        <p>For a method to be matched by the statement, all of the following must be true:</p>
        <p>removeMethodCallsExclude *.* *(*) and //Match references to all methods</p>
        <p>containedIn{pack0.* *(*)} *.* !static m*() and //Match references to all non-static methods taking no parameters with names matching "m*"</p>
        <p>//where the reference occurs in a method within the "pack0" package</p>
        <p>*.* !static m*() and //Match references to all non-static methods taking no parameters with names matching "m*"</p>
        <p>//Match references to all "native" methods. Also match the containing class.</p>
        <p>*.*^ native *(*) and *.* *(*) throws java.io.IOException and //Match references to all methods that throw "java.io.IOException".</p>
        <p>//Match references to all "abstract" methods that take a single String.</p>
        <p>//Match references to all methods in pack1.Class1 along with the matching methods' return and parameter types</p>
        <p>//Match references to all the methods of any class implementing "Serializable" in a package that matches "pack1.*"</p>
        <p>pack1.* implements java.io.Serializable *(*) and</p>
        <p>//Match references to all methods annotated with a class matching "*.MyAnnotation0".</p>
        <p>//Match references to all methods in java.lang.System which occur in a method annotated with a class matching "*.MyAnnotation0".</p>
        <p>containedIn{*.* @*.MyAnnotation0 *(*)} java.lang.System *(*);</p>
        <p>" removeMethodCallsExclude " includeParameter (" and " includeParameter) * ";"</p>
        <p>annotationSpecifier ::= ("@" [packageIncludeParameter] nameSpecifier) | annotationSpecifierAndList</p>
        <p>annotationSpecifierAndList ::= ["!"] "(" annotationSpecifierOrList ("&amp;&amp;" annotationSpecifierOrList)* ")"</p>
        <p>annotationSpecifierOrList ::= annotationSpecifier ("||" annotationSpecifier)*</p>
        <p>[annotationSpecifier] [["!"] " public " | " package "]</p>
        <p>[["!"] " abstract "] [["!"] " final "] [["!"] " interface "] [["!"] " synthetic "] [["!"] " enum "] [["!"] " annotation "]</p>
        <p>[packageIncludeParameter] nameSpecifier ["^"] ["+"] [extendsClause] [implementsClause]</p>
        <p>containedInClause ::= " containedIn " " { " " methodIncludeParameter " " } "</p>
        <p>containingClause ::= " containing " " { " " memberAndList " " } "</p>
        <p>[containedInClause] methodIncludeParameter</p>
        <p>extendsClause ::= " extends " [annotationSpecifier] wildcardClassName</p>
        <p>fullyQualifiedClassName ::= name ("." name) *</p>
        <p>implementsClause ::= " implements " [annotationSpecifier] wildcardClassName ("," [annotationSpecifier] wildcardClassName) *</p>
        <p>memberAndList ::= ["!"] "(" memberOrList ("&amp;&amp;" memberOrList)* ")"</p>
        <p>memberOrList ::= memberSpecifier ("||" memberSpecifier)*</p>
        <p>memberSpecifier ::= methodIncludeParameter</p>
        <p>nameAndList ::= ["!"] "(" nameOrList ("&amp;&amp;" nameOrList)* ")"</p>
        <p>classIncludeParameter [annotationSpecifier] [["!"] " public " | " protected "| " package "| " private "]</p>
        <p>[["!"] " abstract "] [["!"] " static "] [["!"] " final "] [["!"] " native "] [["!"] " synchronized "] [["!"] " synthetic "] [["!"] " bridge "]</p>
        <p>nameSpecifier "(" [ "*" | (parameter ("," parameter) * )] ")" ["throws" wildcardClassName]</p>
        <p>name ::= (["0"-"9","a"-"z","A"-"Z","$","_"]) +</p>
        <p>i.e. a Java identifer (e.g. a package, class or method name) with no wildcards allowed</p>
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
        <p>i.e. a Java identifer (e.g. a package, class or method name) with the "*" wildcard allowed</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM) - removeMethodCallsExclude","url":"https://zkm-web.vercel.app/docs/removeMethodCallsExcludeStatement"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - removeMethodCallsExclude | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/removeMethodCallsExcludeStatement' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
