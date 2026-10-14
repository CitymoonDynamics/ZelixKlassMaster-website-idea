<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - methodParameterObfuscationExclude</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - methodParameterObfuscationExclude</li>
          <li>The methodParameterObfuscationExclude Statement The ZKM Script methodParameterObfuscationExclude statement allows you to specify which methods should NOT be considered as being available for parameter list obfuscation . Method parameters may be changed by following a obfuscate statement which has its obfuscateParameters parameter set to normal . Successive methodParameterObfuscationExclude statements have a cumulative effect . Once a specification has been set its effect can be removed entirely by a following resetMethodParameterObfuscationExclusions statement.</li>
          <li>Examples and Explanation</li>
          <li>Syntax</li>
          <li>Its containing class must match any class include parameter component.</li>
          <li>Its annotations must match any specified method or method parameter level annotations.</li>
          <li>Its modifiers (e.g. public native ) must match all parameter method modifiers. So if the parameters are public static !synchronized then the method must be public , static and NOT synchronized to be matched.</li>
          <li>Its name must match the parameter method name.</li>
          <li>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist. (A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</li>
          <li>Its throws clause must contain all the classes specified in the include parameter's throw clause. So, if the include parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be matched.</li>
        </ul>
        <pre class="code"><code>methodParameterObfuscationExclude *.* *(*)          and  //Match references to all methods
                              *.* !static m*()  and  //Match references to all non-static methods taking no parameters with names matching "m*"
                              //Match references to all "native" methods. Also match the containing class. *.*^ native *(*)  and  
                              *.* *(*) throws java.io.IOException and  //Match references to all methods that throw "java.io.IOException". //Match references to all "abstract" methods that  take a single String. *.* abstract *(java.lang.String) and 
                              //Match references to all the methods of any class implementing "Serializable" in a package that matches "pack1.*"
                              pack1.* implements java.io.Serializable *(*) and
                              //Match references to all methods annotated with a class matching "*.MyAnnotation0". *.* @*.MyAnnotation0 *(*); and</code></pre>
        <p>The methodParameterObfuscationExclude Statement</p>
        <p>The ZKM Script methodParameterObfuscationExclude statement allows you to specify which methods should NOT be considered as being available for parameter list obfuscation .</p>
        <p>Method parameters may be changed by following a</p>
        <p>statement which has its obfuscateParameters parameter set to normal .</p>
        <p>Successive methodParameterObfuscationExclude statements have a cumulative effect . Once a specification has been set its effect can be removed entirely by a following</p>
        <p>resetMethodParameterObfuscationExclusions</p>
        <p>If there is a methodParameterObfuscationExclude statement without a</p>
        <p>statement then the methodParameterObfuscationExclude statement will be applied against the set of all methods to reduce the available set.</p>
        <p>If there is a methodParameterObfuscationExclude statement and a</p>
        <p>statement will be applied first against the set of all methods and then the methodParameterObfuscationExclude statement will be applied against the set of methods specified by the</p>
        <p>Note that if there is neither a methodParameterObfuscationExclude statement or a</p>
        <p>statement will default to treating all methods that will have their names obfuscated as candidates.</p>
        <p>The remainder of this page is organized into the following sections.</p>
        <p>methodParameterObfuscationExclude statement parameters must specify methods.</p>
        <p>Put informally (with mandatory components in bold), the syntax is:</p>
        <p>&lt;classAnnotations&gt; &lt;classModifiers&gt; &lt;packageQualifiers&gt;.</p>
        <p>&lt;className&gt; &lt;extendsClause&gt; &lt;implementsClause&gt;</p>
        <p>&lt;methodAnnotations&gt; &lt;methodModifiers&gt; &lt;methodName&gt;( &lt;argumentTypes&gt; ) &lt;throwsClause&gt; +signatureClasses;</p>
        <p>For a method to be matched by the statement, all of the following must be true:</p>
        <p>Its modifiers (e.g. public native ) must match all parameter method modifiers.</p>
        <p>public , static and NOT synchronized to be matched.</p>
        <p>Its argument types (e.g. int[], java.lang.String ) must match the parameter argument types if they exist.</p>
        <p>(A single parameter argument type of "*" matches any method argument types including no arguments.) If the parameter has no argument type then the method must take no arguments.</p>
        <p>Its throws clause must contain all the classes specified in the include parameter's throw clause.</p>
        <p>So, if the include parameter's throws clause is throws java.io.IOException then the method must throw java.io.IOException or one of its subclasses to be matched.</p>
        <p>methodParameterObfuscationExclude *.* *(*) and //Match references to all methods</p>
        <p>*.* !static m*() and //Match references to all non-static methods taking no parameters with names matching "m*"</p>
        <p>//Match references to all "native" methods. Also match the containing class.</p>
        <p>*.*^ native *(*) and *.* *(*) throws java.io.IOException and //Match references to all methods that throw "java.io.IOException".</p>
        <p>//Match references to all "abstract" methods that take a single String.</p>
        <p>//Match references to all the methods of any class implementing "Serializable" in a package that matches "pack1.*"</p>
        <p>pack1.* implements java.io.Serializable *(*) and</p>
        <p>//Match references to all methods annotated with a class matching "*.MyAnnotation0".</p>
        <p>" methodParameterObfuscationExclude " methodExcludeParameter (" and " methodExcludeParameter) * ";"</p>
        <p>annotationSpecifier ::= ("@" [packageExcludeParameter] nameSpecifier) | annotationSpecifierAndList</p>
        <p>annotationSpecifierAndList ::= ["!"] "(" annotationSpecifierOrList ("&amp;&amp;" annotationSpecifierOrList)* ")"</p>
        <p>annotationSpecifierOrList ::= annotationSpecifier ("||" annotationSpecifier)*</p>
        <p>[annotationSpecifier] [["!"] " public " | " package "]</p>
        <p>[["!"] " abstract "] [["!"] " final "] [["!"] " interface "] [["!"] " synthetic "] [["!"] " enum "] [["!"] " annotation "]</p>
        <p>[packageExcludeParameter ["."]] nameSpecifier ["^"] ["+"] [extendsClause] [implementsClause]</p>
        <p>containingClause ::= " containing " " { " " memberAndList " " } "</p>
        <p>extendsClause ::= " extends " [annotationSpecifier] wildcardClassName</p>
        <p>fullyQualifiedClassName ::= name ("." name) *</p>
        <p>implementsClause ::= " implements " [annotationSpecifier] wildcardClassName ("," [annotationSpecifier] wildcardClassName) *</p>
        <p>memberAndList ::= ["!"] "(" memberOrList ("&amp;&amp;" memberOrList)* ")"</p>
        <p>memberOrList ::= memberSpecifier ("||" memberSpecifier)*</p>
        <p>memberSpecifier ::= methodExcludeParameter</p>
        <p>nameAndList ::= ["!"] "(" nameOrList ("&amp;&amp;" nameOrList)* ")"</p>
        <p>classExcludeParameter [annotationSpecifier] [["!"] " public " | " protected "| " package "| " private "]</p>
        <p>[["!"] " abstract "] [["!"] " static "] [["!"] " final "] [["!"] " native "] [["!"] " synchronized "] [["!"] " synthetic "] [["!"] " bridge "]</p>
        <p>nameSpecifier "(" [ "*" | (parameter ("," parameter) * )] ")" ["throws" wildcardClassName]</p>
        <p>name ::= (["0"-"9","a"-"z","A"-"Z","$","_"]) +</p>
        <p>i.e. a Java identifer (e.g. a package, class or method name) with no wildcards allowed</p>
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
        <p>i.e. a Java identifer (e.g. a package, class or method name) with the "*" wildcard allowed</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Java Obfuscator - Zelix KlassMaster(TM) - methodParameterObfuscationExclude","url":"https://zkm-web.vercel.app/docs/methodParameterObfuscationExcludeStatement"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - methodParameterObfuscationExclude | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/methodParameterObfuscationExcludeStatement' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
