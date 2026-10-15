<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - obfuscate</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - obfuscate</li>
          <li>The obfuscate Statement The ZKM Script obfuscate statement obfuscates all opened classes. Obfuscation includes:</li>
          <li>Obfuscating the control flow of all methods that have not been excluded by a preceding obfuscateFlowExclude statement.</li>
          <li>Changing the names of packages, classes, fields and methods that have not been excluded by a preceding exclude statement.</li>
          <li>Encrypting string literals that have not been excluded by a preceding stringEncryptionExclude statement.</li>
          <li>Encrypting integer constants that have not been excluded by a preceding integerEncryptionExclude statement.</li>
          <li>Encrypting long constants that have not been excluded by a preceding longEncryptionExclude statement.</li>
          <li>Collapsing the package structure. Excludes packages excluded by a preceding exclude statement.</li>
          <li>Deleting, scrambling or retaining line number tables.</li>
          <li>Deleting, obfuscating or retaining local variable tables.</li>
          <li>Automatically handling Java Reflection API calls which may be broken by obfuscation.</li>
          <li>Obfuscating field or method references that have been specified by a preceding obfuscateReferencesInclude and/or obfuscateReferencesExclude statement by replacing them Java Reflection API calls.</li>
          <li>Explanation</li>
          <li>Examples</li>
          <li>Syntax</li>
          <li>the name of the method is not obfuscated and</li>
          <li>the names of the containing class and package are not obfuscated.</li>
        </ul>
        <pre class="code"><code>obfuscate;                       //Obfuscate using the defaults

obfuscate changeLogFileOut=""    //Don't write to a change log file
          lineNumbers=scramble   //Scramble and keep the line number tables
          obfuscateFlow=none;    //Don't obfuscate control flow

obfuscate changeLogFileIn="ChangeLogIn.txt"   //Use ChangeLogIn.txt as the input change log
          changeLogFileOut="ChangeLog.txt"    //Write to change log file ChangeLog.txt
          obfuscateFlow=light                 //Light control flow obfuscation
          encryptStringLiterals=flowObfuscate //Encrypt String literals using a flow obfuscated decrypt method
          encryptIntegerConstants=normal //Encrypt integer constants
          collapsePackagesWithDefault="foo"   //Collapse packages into package "foo"
          newNamesPrefix="Z";                 //Prepend "Z" to every new obfuscated name

          //Use ChangeLogIn0.txt and ChangeLogIn1.txt as loose input change logs
obfuscate looseChangeLogFileIn="ChangeLogIn0.txt","ChangeLogIn1.txt";</code></pre>
        <ul>
          <li>changeLogFileNameIn is the name of the existing change log file from which the previously used name mapping details are to be read.</li>
          <li>changeLogFileNameOut is the name of the file to which the new change details are to be written.</li>
          <li>someExistingPackageName is the name of some package existing within your classes. If it is required, an AutoReflection(TM) or Reference Obfuscation lookup class will be put into this package.</li>
          <li>someAvailableHashAlgorithm is the name of some hash algorithm which will be available at runtime. Examples are "SHA-512", "SHA" and "MD5".</li>
          <li>somePackageName is the name of the package into which unexcluded packages should be collapsed. Can be "" to specify the Java default package. The specified package need not already exist.</li>
          <li>nameListFileName is a path to a text file in UTF-8 format specifying a list of obfuscated names to be used.</li>
          <li>someVersionDigit is the Java version level which should be assumed to be present at runtime. Examples are "6" and "7".</li>
        </ul>
        <p>The ZKM Script obfuscate statement obfuscates all opened classes. Obfuscation includes:</p>
        <p>Obfuscating the control flow of all methods that have not been excluded by a preceding</p>
        <p>Changing the names of packages, classes, fields and methods that have not been excluded by a preceding</p>
        <p>Encrypting string literals that have not been excluded by a preceding</p>
        <p>Encrypting integer constants that have not been excluded by a preceding</p>
        <p>Encrypting long constants that have not been excluded by a preceding</p>
        <p>Collapsing the package structure. Excludes packages excluded by a preceding</p>
        <p>Obfuscating field or method references that have been specified by a preceding</p>
        <p>statement by replacing them Java Reflection API calls.</p>
        <p>The remainder of this page is organized into the following sections.</p>
        <p>For a detailed explanation of the effect of the obfuscate statement and its parameters see the documentation for the interactive</p>
        <p>menu option . Functionality that is available only through the ZKM Script interface is documented below.</p>
        <p>The broad functionality provided by the changeLogFileIn parameter is available through the GUI interface but the ZKM Script interface allows you to specify more than one input change log. If more than one input change log is specified then the specified change logs are effectively merged. Change logs appearing first in the list have precedence over those appearing later in the list.</p>
        <p>The changeLogFileIn and looseChangeLogFileIn parameters are mutually exclusive.</p>
        <p>The functionality provided by the looseChangeLogFileIn parameter is available only through the ZKM Script interface.</p>
        <p>The functionality is the same as that provided by the changeLogFileIn except that the name obfuscation exclusion settings (see the</p>
        <p>statement) take precedence over the input change log mappings.</p>
        <p>The looseChangeLogFileIn and changeLogFileIn parameters are mutually exclusive.</p>
        <p>The functionality provided by the newNamesPrefix parameter is available only through the ZKM Script interface. It allows you to specify a short String prefix which will be prepended to all newly generated package, class, field and method names.</p>
        <p>It is highly recommended that the prefix be very short so that it doesn't increase the bytecode size any more than necessary.</p>
        <p>parameter is available only through the ZKM Script interface.</p>
        <p>By default, Zelix KlassMaster(TM) will use only legal ASCII obfuscated names.</p>
        <p>However, if you specify newNameCharacters=non-ASCII then obfuscated names will make use of the set of legal non-ASCII characters.</p>
        <p>Note that this feature may cause problems for JVMs prior to version 7. It is your responsibility to test the obfuscated bytecode.</p>
        <p>Also note that use of non-ASCII characters may cause difficulties in translating stack traces.</p>
        <p>The functionality provided by the allClassesOpened parameter is available only through the ZKM Script interface.</p>
        <p>When set to true, this option tells Zelix KlassMaster(TM) that not all the classes that make up the application have been opened for obfuscation.</p>
        <p>If this option is set to false then there must be an input change log specified which contains the mappings for all the unopened classes.</p>
        <p>Also, the classpath must allow the unobfuscated versions of all the unopened classes of the application to be located</p>
        <p>The functionality provided by the deriveGroupingsFromInputChangeLog parameter is available only through the ZKM Script interface.</p>
        <p>When set to true, this option tells Zelix KlassMaster(TM) that it should use the information in the input change log to determine the "groupings" of the classes.</p>
        <p>Normally, Zelix KlassMaster(TM) would determine the class groupings from the archive structure from which the classes have been opened.</p>
        <p>If this option is set to true then an input change log must be specified.</p>
        <p>There are five ways of dealing with methodParameters attributes.</p>
        <p>When you specify "delete" all methodParameters attribute information is deleted. You should use this setting in almost all cases.</p>
        <p>When you specify "obfuscate" all methodParameters attribute information is obfuscated.</p>
        <p>When you specify "keep" all methodParameters attribute information is retained. This can sometimes be useful for debugging purposes.</p>
        <p>When you specify "keepVisible" (the default) the methodParameters attribute method parameter variable names of public or protected methods are retained.</p>
        <p>When you specify "keepVisibleIfNotObfuscated" the methodParameters attribute method parameter variable names of public or protected methods are retained only if</p>
        <p>These two options can be of use when obfuscating a library that will be used within an IDE. Many IDE's will preview a method's signature including its parameter names.</p>
        <p>However, you should note that method parameter names may also be stored in the local variable tables and these are independently managed by the localVariables parameter.</p>
        <p>When set to true, this option tells Zelix KlassMaster(TM) to not reuse unqualified class names across packages.</p>
        <p>This option can be useful when a framework uses unqualified class names as identifiers in annotations or XML.</p>
        <p>When set to true, this option tells Zelix KlassMaster(TM) to not reuse obfuscated method names.</p>
        <p>This option is intended to be used only in special debugging scenarios in which it could make the interpretation of obfuscated stack traces easier.</p>
        <p>It is used to specify a text file in UTF-8 format which specifies a list of possible obfuscated names to be used when renaming packages.</p>
        <p>If the list is too short then Zelix KlassMaster(TM) will create the extra package names in the usual way.</p>
        <p>It is used to specify a text file in UTF-8 format which specifies a list of possible obfuscated names to be used when renaming classes.</p>
        <p>If the list is too short then Zelix KlassMaster(TM) will create the extra class names in the usual way.</p>
        <p>It is used to specify a text file in UTF-8 format which specifies a list of possible obfuscated names to be used when renaming fields.</p>
        <p>If the list is too short then Zelix KlassMaster(TM) will create the extra field names in the usual way.</p>
        <p>It is used to specify a text file in UTF-8 format which specifies a list of possible obfuscated names to be used when renaming methods.</p>
        <p>If the list is too short then Zelix KlassMaster(TM) will create the extra method names in the usual way.</p>
        <p>The contents of the files specified by the newPackageNameFile , newClassNameFile , newFieldNameFile or newMethodNameFile parameters may contain Java escape sequences like " \u53D82\u91CF ".</p>
        <p>parameter is available through the GUI interface but additional functionality provided by the obfuscateReferenceStructures and obfuscateReferencesPackage parameters and the obfuscateReferencesInclude and obfuscateReferencesExclude statements is available only through the ZKM Script interface.</p>
        <p>A field or method reference is a field access or a method call.</p>
        <p>See the Reference Obfuscation Tutorial for more detail.</p>
        <p>parameter is available through the GUI interface but additional functionality provided by the autoReflectionHash and autoReflectionPackage parameters and the accessedByReflection and accessedByReflectionExclude statements is available only through the ZKM Script interface.</p>
        <p>See the AutoReflection(TM) Tutorial for more detail.</p>
        <p>When set to normal , random or flowObfuscate , this option tells Zelix KlassMaster(TM) that it may change method parameters in support of the the String Encryption and Reference Obfuscation functions.</p>
        <p>Method parameters will only be changed in support of the String Encryption function if the enhanced setting has been selected.</p>
        <p>If methodParameterChanges=normal , methodParameterChanges=random or methodParameterChanges=flowObfuscate then, generally speaking, all methods will be considered as candidates for parameter changes subject to the effects of any preceding</p>
        <p>methodParameterChangesInclude or methodParameterChangesExclude statements.</p>
        <p>If there is not an active, preceding methodParameterChangesInclude or methodParameterChangesExclude statement then, again generally speaking, all methods will be considered as candidates for parameter changes.</p>
        <p>The random setting is the same as the normal setting but the additional parameters will be of a more random type and will be in a more random position but there may be a slight runtime performance cost.</p>
        <p>The flowObfuscate setting is the same as the random setting but a special kind of Flow Obfuscation may be applied. Again, there may be a runtime performance cost.</p>
        <p>The allowMethodParameterChanges parameter is now deprecated in favor of the</p>
        <p>The allowMethodParameterChanges=false setting is the equivalent of methodParameterChanges=none .</p>
        <p>The allowMethodParameterChanges=true setting is the equivalent of methodParameterChanges=normal .</p>
        <p>When set to normal this option tells Zelix KlassMaster(TM) that it may obfuscate method parameters to be a single Object[] parameter.</p>
        <p>If obfuscateParameters=normal then, generally speaking, all methods that will have their names obfuscated will be considered as candidates for parameter obfuscation subject to the effects of any preceding</p>
        <p>methodParameterObfuscationInclude or methodParameterObfuscationExclude statements.</p>
        <p>If there is not an active, preceding methodParameterObfuscationInclude or methodParameterObfuscationExclude statement then, again generally speaking, all methods that will have their names obfuscated will be considered as candidates for parameter changes.</p>
        <p>When set to true this option tells Zelix KlassMaster(TM) to make all classes public and not final. This can make it harder to analyze the structure of an application.</p>
        <p>The functionality provided by the legalIdentifiers parameter is available only through the ZKM Script interface.</p>
        <p>If you specify legalIdentifiers=false then Zelix KlassMaster(TM) will use numeric identifiers which would not be legal in the Java language.</p>
        <p>However, this could cause your bytecode to fail verification.</p>
        <p>The parameter is provided only for backwards compatibility reasons.</p>
        <p>It is recommended that you do NOT use this option .</p>
        <p>The functionality provided by the hideFieldNames and hideStaticMethodNames parameters are available only through the ZKM Script interface. Prior to Zelix KlassMaster(TM) v2.3.1, field and static method names were hidden by default. However, because of changes in the second edition of the Java Language Specification, the default was changed in Zelix KlassMaster(TM) v2.3.1 so that the names are not hidden.</p>
        <p>These parameters are provided to allow you to override the defaults for compatibility reasons.</p>
        <p>It is recommended that you do NOT use this option.</p>
        <p>The obfuscate statement has useful defaults which are as follows:</p>
        <p>obfuscateReferenceStructures=inSpecialClass</p>
        <p>obfuscate; //Obfuscate using the defaults</p>
        <p>obfuscate changeLogFileOut="" //Don't write to a change log file</p>
        <p>lineNumbers=scramble //Scramble and keep the line number tables</p>
        <p>obfuscateFlow=none; //Don't obfuscate control flow</p>
        <p>obfuscate changeLogFileIn="ChangeLogIn.txt" //Use ChangeLogIn.txt as the input change log</p>
        <p>changeLogFileOut="ChangeLog.txt" //Write to change log file ChangeLog.txt</p>
        <p>obfuscateFlow=light //Light control flow obfuscation</p>
        <p>encryptStringLiterals=flowObfuscate //Encrypt String literals using a flow obfuscated decrypt method</p>
        <p>encryptIntegerConstants=normal //Encrypt integer constants</p>
        <p>collapsePackagesWithDefault="foo" //Collapse packages into package "foo"</p>
        <p>newNamesPrefix="Z"; //Prepend "Z" to every new obfuscated name</p>
        <p>//Use ChangeLogIn0.txt and ChangeLogIn1.txt as loose input change logs</p>
        <p>obfuscate looseChangeLogFileIn="ChangeLogIn0.txt","ChangeLogIn1.txt";</p>
        <p>[" changeLogFileIn " "=" "\"" changeLogFileNameIn "\"" ("," "\"" changeLogFileNameIn "\"")*]</p>
        <p>[" looseChangeLogFileIn " "=" "\"" changeLogFileNameIn "\"" ("," "\"" changeLogFileNameIn "\"")*]</p>
        <p>[" changeLogFileOut " "=" "\"" changeLogFileNameOut "\""]</p>
        <p>[" aggressiveMethodRenaming " "=" (" true " | " false ")]</p>
        <p>[" newNameCharacters " "=" (" ASCII " | " non-ASCII ")]</p>
        <p>[" keepInnerClassInfo " "=" (" true " | " false | " ifNameNotObfuscated ")]</p>
        <p>[" keepGenericsInfo " "=" (" true " | " false ")]</p>
        <p>[" obfuscateFlow " "=" (" none " | " light " | " normal " | " aggressive ")]</p>
        <p>[" exceptionObfuscation " "=" (" none " | " light " | " heavy ")]</p>
        <p>[" encryptStringLiterals " "=" (" none " | " normal " | " aggressive " | " flowObfuscate " | " enhanced ")]</p>
        <p>[" encryptIntegerConstants " "=" (" none " | " normal " | " aggressive "]</p>
        <p>[" encryptLongConstants " "=" (" none " | " normal "]</p>
        <p>[" obfuscateReferences " "=" (" none " | " normal ")]</p>
        <p>[" obfuscateReferenceStructures " "=" (" inSpecialClass " | " inReferencingClasses ")]</p>
        <p>[" obfuscateReferencesPackage " "=" "\"" someExistingPackageName "\""]</p>
        <p>[" autoReflectionHandling " "=" (" none " | " normal ")]</p>
        <p>[" autoReflectionPackage " "=" "\"" someExistingPackageName "\""]</p>
        <p>[" autoReflectionHash " "=" "\"" someAvailableHashAlgorithm "\""]</p>
        <p>[" collapsePackagesWithDefault= " "=" "\"" somePackageName "\""</p>
        <p>[" mixedCaseClassNames " "=" (" true " | " false " | " ifInArchive ")]</p>
        <p>[" newPackageNameFile " "=" "\"" nameListFileName "\""]</p>
        <p>[" newClassNameFile " "=" "\"" nameListFileName "\""]</p>
        <p>[" newFieldNameFile " "=" "\"" nameListFileName "\""]</p>
        <p>[" newMethodNameFile " "=" "\"" nameListFileName "\""]</p>
        <p>[" lineNumbers " "=" (" delete " | " scramble " | " keep ")]</p>
        <p>[" localVariables " "=" (" delete " | " keepVisibleMethodParameters " | " keepVisibleMethodParametersIfNotObfuscated " | " keepMethodParametersIfNotObfuscated " | " obfuscate " | " keep ")]</p>
        <p>[" methodParameters " "=" (" delete " | " keepVisible " | " keepVisibleIfNotObfuscated " | " keepIfNotObfuscated " | " obfuscate " | " keep ")]</p>
        <p>[" newNamesPrefix= " "=" "\"" someShortString "\""</p>
        <p>[" randomize " "=" (" true " | " false ")]</p>
        <p>[" uniqueClassNames " "=" (" true " | " false ")]</p>
        <p>[" uniqueMethodNames " "=" (" true " | " false ")]</p>
        <p>[" methodParameterChanges " "=" (" none " | " normal " | " random " | " flowObfuscate ")]</p>
        <p>[" allowMethodParameterChanges " "=" (" true " | " false ")]</p>
        <p>[" methodParameterChangesPackage " "=" "\"" somePackageName "\""</p>
        <p>[" obfuscateParameters " "=" (" none " | " normal ")]</p>
        <p>[" makeClassesPublic " "=" (" true " | " false ")]</p>
        <p>[" allClassesOpened " "=" (" true " | " false ")]</p>
        <p>[" deriveGroupingsFromInputChangeLog " "=" (" true " | " false ")]</p>
        <p>[" keepBalancedLocks " "=" (" true " | " false ")]</p>
        <p>[" preverify " "=" (" true " | " false ")]</p>
        <p>[" legalIdentifiers " "=" (" true " | " false ")]</p>
        <p>[" assumeRuntimeVersion " "=" "\"" someVersionDigit "\""]</p>
        <p>[" hideFieldNames " "=" (" true " | " false ")]</p>
        <p>[" hideStaticMethodNames " "=" (" true " | " false ")] ";"</p>
        <p>somePackageName is the name of the package into which unexcluded packages should be collapsed.</p>
        <p>Can be "" to specify the Java default package. The specified package need not already exist.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - obfuscate",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/obfuscateStatement"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - obfuscate"
    }
  ]
}]
useHead({
  title: 'obfuscate | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - obfuscate | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/obfuscateStatement' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
