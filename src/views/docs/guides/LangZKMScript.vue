<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - ZKM Script</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - ZKM Script</li>
          <li>The ZKM Script Language The ZKM Script language is used to write scripts that automate the process of using Zelix KlassMaster. They allow you to integrate Zelix KlassMaster(TM) into your development procedures. A quick way to experiment with and learn the language is by using the interactive "ZKM Script Helper" tool.</li>
          <li>A ZKM Script consists of a sequence of comments and ZKM Script statements . White space is ignored and note that ZKM Script is case sensitive. ZKM Script comments are identical to Java comments. You can use "//" to comment a line or "/* ... */" to comment a block.</li>
          <li>Preprocessor directives are not part of the ZKM Script language. They are actioned by the preprocessor prior to the ZKM Script being parsed and executed. The ZKM Script interpreter doesn't understand and normally will never see preprocessor directives.</li>
          <li>In describing the syntax of ZKM Script statements the following notation is used:</li>
          <li>X | Y | Z means X or Y or Z</li>
          <li>[X] means X is optional</li>
          <li>(X) * means zero or more occurrences of X</li>
          <li>(X) + means one or more occurrences of X</li>
          <li>X means X is a key word</li>
          <li>classpath</li>
          <li>ignoreMissingReferences</li>
          <li>resetIgnoreMissingReferences</li>
          <li>open</li>
          <li>trimExclude</li>
          <li>trimUnexclude</li>
          <li>resetTrimExclusions</li>
          <li>trim</li>
          <li>removeMethodCallsInclude</li>
          <li>removeMethodCallsExclude</li>
          <li>resetRemoveMethodCalls</li>
          <li>removeMethodCalls</li>
          <li>exclude</li>
          <li>unexclude</li>
          <li>resetExclusions</li>
          <li>obfuscateFlowExclude</li>
          <li>obfuscateFlowUnexclude</li>
          <li>resetObfuscateFlowExclusions</li>
          <li>obfuscateExceptionsExclude</li>
          <li>obfuscateExceptionsUnexclude</li>
          <li>resetObfuscateExceptionsExclusions</li>
          <li>stringEncryptionExclude</li>
          <li>stringEncryptionUnexclude</li>
          <li>resetStringEncryptionExclusions</li>
          <li>integerEncryptionExclude</li>
          <li>integerEncryptionUnexclude</li>
          <li>resetIntegerEncryptionExclusions</li>
          <li>longEncryptionExclude</li>
          <li>longEncryptionUnexclude</li>
          <li>resetLong EncryptionExclusions</li>
          <li>existingSerializedClasses</li>
          <li>resetExistingSerializedClasses</li>
          <li>fixedClasses</li>
          <li>resetFixedClasses</li>
          <li>groupings</li>
          <li>resetGroupings</li>
          <li>classInitializationOrder</li>
          <li>resetClassInitializationOrder</li>
          <li>accessedByReflection statement</li>
          <li>accessedByReflectionExclude statement</li>
          <li>resetAccessedByReflection statement</li>
          <li>obfuscateReferencesInclude statement</li>
          <li>obfuscateReferencesExclude statement</li>
          <li>resetObfuscateReferenceExclusions statement</li>
          <li>methodParameterChangesInclude</li>
          <li>methodParameterChangesExclude</li>
          <li>resetMethodParameterChangesExclusions</li>
          <li>methodParameterObfuscationInclude</li>
          <li>methodParameterObfuscationExclude</li>
          <li>resetMethodParameterObfuscationExclusions</li>
          <li>obfuscate</li>
          <li>saveAll</li>
          <li>execute</li>
          <li>print</li>
        </ul>
        <h2>An example using every statement and parameter with color coding</h2>
        <pre class="code"><code>/*****************************************************************************/
/* Sample ZKM Script using every statement and parameter                     */
/*****************************************************************************/

classpath   ".;c:\jdk1.8.0\jre\lib\rt.jar";

ignoreMissingReferences   pack9.Class9 *(*); //ignore missing methods in pack9.Class9
                                             //must precede the open statement

open  openNestedArchives=true //open nested archives. This is the default. "c:\directory1\Class1.class" //load a specific class
      "c:\directory1\MyZip.zip"    //load all classes in a zip file
      "c:\directory1\MyJar.jar"    //load all classes in a jar file
      "c:\directory2"              //load all classes in a specific directory
      "c:\directory3\*";           //load all classes in a directory and its subdirectories

trimExclude pack1.Class1^ public static main(java.lang.String[]) and
            pack2.*.* public *(*);  

trimUnexclude pack2.pack3.* public method(*); //Don't exclude public methods in pack2.pack3

trim        deleteSourceFileAttributes=false  //could be omitted. Default is false
            deleteDeprecatedAttributes=true   //could be omitted. Default is true
            deleteAnnotationsAttributes=false //could be omitted. Default is false
            deleteExceptionAttributes=false //could be omitted. Default is false
            deleteUnknownAttributes=false;    //could be omitted. Default is false 

removeMethodCallsInclude java.lang.System print*(*); //Remove System print calls

//Don't remove printStackTrace calls
removeMethodCallsExclude java.lang.System printStackTrace(*);

removeMethodCalls java.lang.System printStackTrace(*); //Remove the specified method calls

//Remove effect of preceding removeMethodCallsInclude &amp; removeMethodCallsExclude
resetRemoveMethodCalls; 

exclude     p*2.* and
            p*.C*1 and
            *.Class2 implements pack3.Class3, pack4.Class4 and
            @pack2.MyAnnotation *.* @pack2.MyAnnotation *(@*.* int, *) and
            public abstract *.* private transient java.lang.String f* and
            *.* extends pack2.Class2 public native m*(*) and
            *.&lt;link&gt;_Skel implements pack3.Class3 search pack4, pack4.p*5;

unexclude   pack2.Class4; //Don't exclude pack2.Class4

obfuscateFlowExclude 
   pack2.Class2 method1() and //Don't flow obfuscate method1() in Class2
   pack1.* *(*) and //Don't flow obfuscate any method in package pack1
   pack1.*; //Don't flow obfuscate methods or add special members to pack1 classes

obfuscateFlowUnexclude pack1.Class0 foo(int); //Unexclude method "foo(int)" in pack1.Class0

obfuscateExceptionsExclude 
   pack2.Class2 method1() and //Don't exception obfuscate method1() in Class2
   pack1.* *(*) and //Don't exception obfuscate any method in package pack1
   pack1.*; //Don't exception obfuscate methods or add special members to pack1 classes

obfuscateExceptionsUnexclude *.* foo(int); //Unexclude all methods "foo(int)"

stringEncryptionExclude pack2.Class2 and //Don't string encrypt any String literals in Class2
                        *.* public * and //Don't string encrypt the value of any public field
                        *.* public *(*); //Don't string encrypt Strings in any public method

stringEncryptionUnexclude pack2.Class2 foo; //Unexclude field "foo" in pack2.Class2


integerEncryptionExclude pack2.Class2 and //Don't encrypt any integer constants in Class2
                        *.* public * and //Don't integer encrypt the value of any public field
                        *.* public *(*); //Don't integer encrypt integers in any public method

integerEncryptionUnexclude pack2.Class2 foo; //Unexclude field "foo" in pack2.Class2


longEncryptionExclude pack2.Class2 and //Don't encrypt any long constants in Class2
                        *.* public * and //Don't long encrypt the value o</code></pre>
        <p>The ZKM Script language is used to write scripts that automate the process of using Zelix KlassMaster.</p>
        <p>They allow you to integrate Zelix KlassMaster(TM) into your development procedures. A quick way to experiment with and learn the language is by using the interactive</p>
        <p>A ZKM Script consists of a sequence of comments and ZKM Script statements . White space is ignored and note that ZKM Script is case sensitive.</p>
        <p>ZKM Script comments are identical to Java comments. You can use</p>
        <p>are not part of the ZKM Script language. They are actioned by the preprocessor prior to the ZKM Script being parsed and executed. The ZKM Script interpreter doesn't understand and normally will never see preprocessor directives.</p>
        <p>A ZKM Script statement is always terminated by a</p>
        <p>/*****************************************************************************/ /* Sample ZKM Script using every statement and parameter */ /*****************************************************************************/</p>
        <p>classpath ".;c:\jdk1.8.0\jre\lib\rt.jar";</p>
        <p>ignoreMissingReferences pack9.Class9 *(*); //ignore missing methods in pack9.Class9</p>
        <p>open openNestedArchives=true //open nested archives. This is the default.</p>
        <p>"c:\directory1\Class1.class" //load a specific class</p>
        <p>"c:\directory1\MyZip.zip" //load all classes in a zip file</p>
        <p>"c:\directory1\MyJar.jar" //load all classes in a jar file</p>
        <p>"c:\directory2" //load all classes in a specific directory</p>
        <p>"c:\directory3\*"; //load all classes in a directory and its subdirectories</p>
        <p>trimExclude pack1.Class1^ public static main(java.lang.String[]) and pack2.*.* public *(*);</p>
        <p>trimUnexclude pack2.pack3.* public method(*); //Don't exclude public methods in pack2.pack3</p>
        <p>trim deleteSourceFileAttributes=false //could be omitted. Default is false</p>
        <p>deleteDeprecatedAttributes=true //could be omitted. Default is true</p>
        <p>deleteAnnotationsAttributes=false //could be omitted. Default is false</p>
        <p>deleteExceptionAttributes=false //could be omitted. Default is false</p>
        <p>deleteUnknownAttributes=false; //could be omitted. Default is false</p>
        <p>removeMethodCallsInclude java.lang.System print*(*); //Remove System print calls</p>
        <p>removeMethodCallsExclude java.lang.System printStackTrace(*);</p>
        <p>removeMethodCalls java.lang.System printStackTrace(*); //Remove the specified method calls</p>
        <p>//Remove effect of preceding removeMethodCallsInclude &amp; removeMethodCallsExclude</p>
        <p>exclude p*2.* and p*.C*1 and *.Class2 implements pack3.Class3, pack4.Class4 and @pack2.MyAnnotation *.* @pack2.MyAnnotation *(@*.* int, *) and public abstract *.* private transient java.lang.String f* and *.* extends pack2.Class2 public native m*(*) and *.&lt;link&gt;_Skel implements pack3.Class3 search pack4, pack4.p*5;</p>
        <p>unexclude pack2.Class4; //Don't exclude pack2.Class4</p>
        <p>pack2.Class2 method1() and //Don't flow obfuscate method1() in Class2</p>
        <p>pack1.* *(*) and //Don't flow obfuscate any method in package pack1</p>
        <p>pack1.*; //Don't flow obfuscate methods or add special members to pack1 classes</p>
        <p>obfuscateFlowUnexclude pack1.Class0 foo(int); //Unexclude method "foo(int)" in pack1.Class0</p>
        <p>pack2.Class2 method1() and //Don't exception obfuscate method1() in Class2</p>
        <p>pack1.* *(*) and //Don't exception obfuscate any method in package pack1</p>
        <p>pack1.*; //Don't exception obfuscate methods or add special members to pack1 classes</p>
        <p>obfuscateExceptionsUnexclude *.* foo(int); //Unexclude all methods "foo(int)"</p>
        <p>stringEncryptionExclude pack2.Class2 and //Don't string encrypt any String literals in Class2</p>
        <p>*.* public * and //Don't string encrypt the value of any public field</p>
        <p>*.* public *(*); //Don't string encrypt Strings in any public method</p>
        <p>stringEncryptionUnexclude pack2.Class2 foo; //Unexclude field "foo" in pack2.Class2</p>
        <p>integerEncryptionExclude pack2.Class2 and //Don't encrypt any integer constants in Class2</p>
        <p>*.* public * and //Don't integer encrypt the value of any public field</p>
        <p>*.* public *(*); //Don't integer encrypt integers in any public method</p>
        <p>integerEncryptionUnexclude pack2.Class2 foo; //Unexclude field "foo" in pack2.Class2</p>
        <p>longEncryptionExclude pack2.Class2 and //Don't encrypt any long constants in Class2</p>
        <p>*.* public * and //Don't long encrypt the value of any public field</p>
        <p>*.* public *(*); //Don't long encrypt longs in any public method</p>
        <p>longEncryptionUnexclude pack2.Class2 foo; //Unexclude field "foo" in pack2.Class2</p>
        <p>//Changes to pack2.Class2 must be Serialization compatible</p>
        <p>fixedClasses pack2.Class2; //Insulates pack2.Class2 from any obfuscation</p>
        <p>groupings {pack1.* and pack2.*} //1st grouping contains pack1 and pack2 classes</p>
        <p>{pack3.* and pack4.*}; //2nd grouping contains pack3 and pack4 classes</p>
        <p>//Asserts that ClassA always initialized before ClassB</p>
        <p>classInitializationOrder pack3.ClassA &gt; pack3.ClassB;</p>
        <p>//All methods in pack1.Class2 named "foo" accessed by Reflection</p>
        <p>accessedByReflection pack1.Class2 foo(*);</p>
        <p>accessedByReflectionExclude pack1.Class2 foo(int[]); //foo(int[]) NOT accessed by Reflection</p>
        <p>//Obfuscate all references to a java.lang.System method contained in class "pack0.Class0"</p>
        <p>obfuscateReferencesInclude containedIn{pack0.Class0 *(*)} java.lang.System *(*);</p>
        <p>//Exclude references to any method named "println" in java.lang.System that //are contained in class "pack0.Class0"</p>
        <p>obfuscateReferencesExclude containedIn{pack0.Class0 *(*)} java.lang.System println(*);</p>
        <p>//All methods in pack1.Class3 named "bar"</p>
        <p>methodParameterChangesInclude pack1.Class3 bar(*);</p>
        <p>methodParameterChangesExclude pack1.Class3 bar(int[]); //Exclude bar(int[])</p>
        <p>methodParameterObfuscationInclude pack1.Class3 bar(*);</p>
        <p>methodParameterObfuscationExclude pack1.Class3 bar(int[]); //Exclude bar(int[])</p>
        <p>obfuscate changeLogFileIn="ChangeLogIn.txt" //omit parameter if no input change log</p>
        <p>changeLogFileOut="ChangeLog.txt" //could be omitted. Default is ChangeLog.txt</p>
        <p>aggressiveMethodRenaming=false //could be omitted. Default is false</p>
        <p>keepInnerClassInfo=false //could be omitted. Default is false</p>
        <p>keepGenericsInfo=true //could be omitted. Default is true</p>
        <p>obfuscateFlow=light //could be omitted. Default is light</p>
        <p>encryptStringLiterals=enhanced //could be omitted. Default is enhanced</p>
        <p>encryptIntegerConstants=aggressive //Default is none</p>
        <p>encryptLongConstants=normal //Default is none</p>
        <p>exceptionObfuscation=light //could be omitted. Default is light</p>
        <p>autoReflectionHandling=normal //Default is none for backwards compatibility</p>
        <p>autoReflectionPackage="pack0" //Put autoReflection lookup class into package "pack0"</p>
        <p>autoReflectionHash="SHA-512" //Use SHA-512 hash in autoReflection lookup class</p>
        <p>collapsePackagesWithDefault="xyz" //Default is to not collapse packages</p>
        <p>obfuscateReferences=normal; //Obsfuscate references</p>
        <p>obfuscateReferenceStructures=inSpecialClass //Default is to use a special class</p>
        <p>obfuscateReferencesPackage="pack0" //Put special lookup class into package "pack0"</p>
        <p>lineNumbers=delete //could be omitted. Default is delete</p>
        <p>localVariables=delete //could be omitted. Default is delete</p>
        <p>methodParameters=keepVisible //could be omitted. Default is keepVisible</p>
        <p>mixedCaseClassNames=ifInArchive //could be omitted. Default is ifInArchive</p>
        <p>newNameCharacters=ASCII //could be omitted. Default is ASCII</p>
        <p>newNamesPrefix="Z" //Prefix all newly generated names with "Z"</p>
        <p>randomize=false //could be omitted. Default is false</p>
        <p>uniqueClassNames=false //could be omitted. Default is false</p>
        <p>uniqueMethodNames=false //could be omitted. Default is false</p>
        <p>newPackageNameFile="obfuscatedPackageNames.txt" //List of obfuscated package names</p>
        <p>newClassNameFile="obfuscatedClassNames.txt" //List of obfuscated class names</p>
        <p>newFieldNameFile="obfuscatedFieldNames.txt" //List of obfuscated field names</p>
        <p>newMethodNameFile="obfuscatedMethodNames.txt" //List of obfuscated method names</p>
        <p>allowMethodParameterChanges=false //Deprecated - Use methodParameterChanges instead.</p>
        <p>methodParameterChanges=none //could be omitted. Default is none</p>
        <p>methodParameterChangesPackage="pack0" //Put lookup class into package "pack0"</p>
        <p>obfuscateParameters=none //could be omitted. Default is none</p>
        <p>makeClassesPublic=false //could be omitted. Default is false</p>
        <p>allClassesOpened=true //could be omitted. Default is true</p>
        <p>deriveGroupingsFromInputChangeLog=false //could be omitted. Default is false</p>
        <p>keepBalancedLocks=false //could be omitted. Default is false</p>
        <p>preverify=true //could be omitted. Default is true</p>
        <p>assumeRuntimeVersion="8" //Default derived from lowest opened class version</p>
        <p>hideStaticMethodNames=false; // Deprecated</p>
        <p>resetTrimExclusions ; //remove the effect of any preceding trimExclude statement</p>
        <p>resetExclusions ; //remove the effect of any preceding exclude statement</p>
        <p>resetObfuscateFlowExclusions ; //remove effect of any preceding obfuscateFlowExclude statement</p>
        <p>//remove effect of any preceding obfuscateExceptionsExclude statement</p>
        <p>resetStringEncryptionExclusions ; //remove effect of any preceding stringEncryptionExclude</p>
        <p>resetIntegerEncryptionExclusions ; //remove effect of any preceding integerEncryptionExclude</p>
        <p>resetLongEncryptionExclusions ; //remove effect of any preceding longEncryptionExclude</p>
        <p>resetExistingSerializedClasses ; //remove effect of any preceding existingSerializedClasses</p>
        <p>resetFixedClasses ; //remove effect of any preceding fixedClasses</p>
        <p>resetGroupings ; //remove effect of any preceding groupings</p>
        <p>resetClassInitializationOrder ; //remove effect of any preceding classInitializationOrder</p>
        <p>//remove effect of any preceding accessedByReflection and accessedByReflectionExclude</p>
        <p>//remove effect of any preceding obfuscateReferencesInclude and obfuscateReferencesExclude</p>
        <p>resetIgnoreMissingReferences ; //remove effect of any preceding ignoreMissingReferences</p>
        <p>//remove effect of any preceding methodParameterChangeInclude or methodParameterChangeExclude</p>
        <p>//remove effect of any preceding methodParameterObfuscationInclude //or methodParameterObfuscationExclude</p>
        <p>resetMethodParameterObfuscationExclusions ;</p>
        <p>gc 500; //500 could have been omitted. 500ms sleep is the default.</p>
        <p>print "About to obfuscate a second time"; //prints to standard out and the log</p>
        <p>execute "deltree /Y c:\Temp"; //executes a simple OS command</p>
        <p>saveAll archiveCompression=asIs deleteEmptyDirectories=false deleteXMLComments=false "c:\Temp";</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - ZKM Script",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/langZKMScript"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - ZKM Script"
    }
  ]
}]
useHead({
  title: 'ZKM Script | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - ZKM Script | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/langZKMScript' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
