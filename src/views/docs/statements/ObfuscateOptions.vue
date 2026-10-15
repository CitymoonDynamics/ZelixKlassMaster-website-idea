<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Obfuscate Control Flow</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Obfuscate Options</li>
          <li>Obfuscate Options</li>
          <li>Overview Zelix KlassMaster(TM) provides the following obfuscation options.</li>
          <li>Use input change log file</li>
          <li>Produce a change log file</li>
          <li>Obfuscate Control flow</li>
          <li>Exception obfuscation</li>
          <li>Encrypt String literals</li>
          <li>Encrypt integer constants</li>
          <li>Encrypt long constants</li>
          <li>Mixed case class names</li>
          <li>Collapse packages</li>
          <li>Aggressive method renaming</li>
          <li>Randomize</li>
          <li>Keep inner class information</li>
          <li>Keep generics information</li>
          <li>Local variable tables</li>
          <li>Line number tables</li>
          <li>Obfuscate references</li>
          <li>Auto reflection handling</li>
          <li>Method parameter changes</li>
          <li>Keep balanced locks</li>
          <li>Preverify</li>
          <li>Default exclusions</li>
        </ul>
        <h2>Obfuscate Control Flow</h2>
        <ul>
          <li>the bytecode that is being obfuscated,</li>
          <li>the JVM used to execute the bytecode,</li>
          <li>the flow obfuscation option used.</li>
          <li>use light flow obfuscation,</li>
          <li>use the ZKM Script obfuscateFlowExclude statement to exclude performance critical methods from flow obfuscation.</li>
          <li>is cumulative . That is, if you obfuscate more than once with the "Encrypt String literals" option set to normal , aggressive or flow obfuscate then your string literals will be encrypted more than once. Any performance and size penalty will be compounded.</li>
          <li>is not irreversible . Don't rely on it to protect highly sensitive data.</li>
          <li>the name of the method is not obfuscated and</li>
          <li>the names of the containing class and package are not obfuscated.</li>
          <li>"enhanced" String Encryption or</li>
          <li>Integer Constant Encryption or</li>
          <li>Reference Obfuscation or</li>
          <li>The obfuscate statement has its methodParameterChanges parameter set to flowObfuscate .</li>
          <li>not changing the " _Stub ", " _Skel ", " BeanInfo " or " Customizer " class name suffixes and by maintaining the necessary class name correspondence.</li>
          <li>not changing the names of your RMI remote methods.</li>
          <li>automatically adjusting the values of your BeanInfo Class beanClass</li>
          <li>Class customizerClass</li>
          <li>not changing the static long serialVersionUID field name.</li>
          <li>not changing the names of critical EJB methods such as create(*) and ejbCreate(*) .</li>
        </ul>
        <p>Zelix KlassMaster(TM) provides the following obfuscation options.</p>
        <p>Note that there is no name obfuscation option. Generally speaking, all package, class, field and method names not excluded using the</p>
        <p>Obfuscate Name Exclusions dialog will be obfuscated.</p>
        <p>If you select "use input change log file" Zelix KlassMaster(TM) will read the name change details from the existing change log file that you named in the input field to the right of the option.</p>
        <p>This ensures consistent renaming across releases which can be vital in certain situations (e.g. RMI and serialization).</p>
        <p>If you select "produce a change log file" Zelix KlassMaster(TM) will write the name change details to a change log file . The change log file will be given the name that you entered in the input field to the right of the option.</p>
        <p>It is recommended that you always select this option .</p>
        <p>With a change log, you can use the Stack Trace Translate tool to translate obfuscated stack traces.</p>
        <p>Without a change log, debugging the stack traces caused by uncaught exceptions is extremely difficult if not impossible.</p>
        <p>Also, you can use the change log as an input change log when you obfuscate your next release so that the same obfuscated names will be used.</p>
        <p>Note that only the latest changes will appear in the file. If you obfuscate twice with the same change log file name then only the second set of name changes will be retained. Also, if the change log out file name is the same as the input change log file name then, after it has been read, the original file will be overwritten with the new change details.</p>
        <p>If you select light , normal or aggressive in the "Obfuscate Control Flow" list, Zelix KlassMaster(TM) will obfuscate most selection (eg. if...else) and loop (eg. while or for) constructs so that they cannot be directly decompiled back to the Java language. Selecting aggressive results in more flow obfuscation than would be done if you selected normal .</p>
        <p>Selecting normal results in more flow obfuscation than would be done if you selected light .</p>
        <p>To switch off flow obfuscation, you should select none in the "Obfuscate Control Flow" list.</p>
        <p>The disadvantages of flow obfuscation are that your bytecode will run slower and will be slightly larger.</p>
        <p>It is a trade off between the degree of protection against decompilation and bytecode size and speed.</p>
        <p>The table below shows the approximate bytecode size increase that could be expected in a compressed JAR file for typical applications.</p>
        <p>Note that the size increase will vary from application to application and you should measure the impact on your bytecode.</p>
        <p>The performance impact of flow obfuscation varies depending upon</p>
        <p>When the HotSpot(TM) JVM is used, the approximate performance impact for general purpose applications is shown in the table below.</p>
        <p>Again, it is recommended that you measure the impact on your classes. If you experience an unacceptable performance impact then you should</p>
        <p>Also, flow obfuscation can expose bugs in some JVMs and particularly in some JITs. This is more likely to happen if you use the aggressive option and it is much less likely to occur if you use the light option.</p>
        <p>Be sure to test your code in every environment in which it must run.</p>
        <p>NB: The previously supported extraAggressive option is now deprecated because of the presence JVM bugs.</p>
        <p>If you select light or heavy in the "Exception obfuscation" list, Zelix KlassMaster(TM) will perform a kind of flow obfuscation which involves exceptions. If you select heavy then the obfuscation will be more aggressive.</p>
        <p>Note that Exception Obfuscation interacts with both Flow Obfuscation and String Encryption.</p>
        <p>If you use Flow Obfuscation and/or String Encryption then the intensity of any Exception Obfuscation will be increased.</p>
        <p>Similarly, the more aggressive the Flow Obfuscation and/or String Encryption you select then the more intense the Exception Obfuscation that will be possible.</p>
        <p>The disadvantage of Exception obfuscation is that your bytecode may run slower and it will be larger.</p>
        <p>The more intense the Exception Obfuscation then the greater the bytecode size increase will be.</p>
        <p>Exception Obfuscation is not normally affected by the ZKM Script obfuscateFlowExclude statement.</p>
        <p>Its effect is normally all or nothing. However, you can use the special ZKM_TREAT_EXCEPTION_OBFUSCATION_AS_FLOW_OBFUSCATION configuration option to ask Zelix KlassMaster(TM) to make Exception Obfuscation subject to the obfuscateFlowExclude statement.</p>
        <p>When the "Encrypt String literals" option is set to normal , Zelix KlassMaster(TM) will replace your string literals with encrypted strings and add instructions to your bytecode that will decrypt the strings at runtime.</p>
        <p>The aggressive setting goes further by removing any static final String constants that can be left unencrypted when the normal setting is used. The compatibility of the aggressive setting depends upon the compiler that generated the bytecode. It works fine with the Oracle and IBM compilers that we have tested.</p>
        <p>If you use another compiler and experience problems with your aggressive string encrypted bytecode then use the normal setting instead.</p>
        <p>The flow obfuscate setting is the same as the aggressive setting except that it flow obfuscates the decryption methods automatically inserted into your bytecode. This makes the decryption methods harder to decompile but, as with all flow obfuscation, it can expose bugs in some VMs and JITs. Note that the String Encryption flow obfuscate setting is quite independent of the Obfuscate Control Flow option.</p>
        <p>The enhanced setting is the same as the flow obfuscate setting except that it provides enhanced encryption which is more difficult to reverse.</p>
        <p>It is the recommended setting if you do not need to compile against any obfuscated classes and if an greater increase in bytecode size is tolerable.</p>
        <p>To switch off String encryption, you should set the "Encrypt String literals" option to none .</p>
        <p>The advantage of string encryption is that the Java source produced by a decompiler is much less comprehensible if the string literals are gibberish. The disadvantages are that your code will slightly slower and will be a little larger.</p>
        <p>Typically, the performance cost is insignificant. The bytecode size increase is typically in the range of about 5% to 10% but it ulimately depends on the number of String literals in your application. It is recommended that you measure the impact on your classes.</p>
        <p>Note that the string encryption used by Zelix KlassMaster(TM)</p>
        <p>is cumulative . That is, if you obfuscate more than once with the</p>
        <p>"Encrypt String literals" option set to normal , aggressive or flow obfuscate then your string literals will be encrypted more than once. Any performance and size penalty will be compounded.</p>
        <p>Generally speaking, any in this section to an integer constant should be taken to mean a reference to a byte, char, short or int constant.</p>
        <p>Reference types like Byte, Character, Short an Integer are not treated as integer constants.</p>
        <p>When the "Encrypt Integer Constants" option is set to normal , Zelix KlassMaster(TM) will replace your integer constants with encrypted equivalents and add instructions to your bytecode that will decrypt the integers at runtime.</p>
        <p>Any integer fields which are directly initialized with a value other than -1, 0 or 1 will have their initialization values encrypted.</p>
        <p>Also, if there is a reference in a method to an integer constant that is less than Short.MIN_VALUE and greater than Short.MAX_VALUE, then that integer value will be encrypted.</p>
        <p>With the aggressive setting (as with the normal setting) any integer, byte, char or short fields which are directly initialized with a value other than -1, 0 or 1 will have their initialization values encrypted.</p>
        <p>However, unlike the normal setting, if there is a reference in a method to an integer constant that is less than -1 and greater than 5, then that integer value will be encrypted.</p>
        <p>To switch off Integer encryption, you should set the "Encrypt Integer Constants" option to none .</p>
        <p>The advantage of integer constant encryption is that the Java source produced by a decompiler is much less comprehensible if the integer constants are disguised. The disadvantages are that your code will slightly slower and will be a little larger.</p>
        <p>Typically, the performance cost is insignificant. The bytecode size increase is typically in the range of about 5% to 10% but it ulimately depends on the number of integer constants in your application. It is recommended that you measure the impact on your classes.</p>
        <p>Note that the integer constant encryption used by Zelix KlassMaster(TM) is not irreversible . Don't rely on it to protect highly sensitive data.</p>
        <p>When the "Encrypt Long Constants" option is set to normal , Zelix KlassMaster(TM) will replace your long constants with encrypted equivalents and add instructions to your bytecode that will decrypt the integers at runtime.</p>
        <p>Any integer fields which are directly initialized with a value other than 0 or 1 will have their initialization values encrypted.</p>
        <p>Also, if there is a reference in a method to an integer constant other than 0 or 1 then that long value will be encrypted.</p>
        <p>To switch off Long Encryption, you should set the "Encrypt Long Constants" option to none .</p>
        <p>The advantage of long constant encryption is that the Java source produced by a decompiler is much less comprehensible if the long constants are disguised. The disadvantages are that your code will slightly slower and will be a little larger.</p>
        <p>Typically, the performance cost is insignificant. The bytecode size increase is typically in the range of about 5% to 10% but it ulimately depends heavily on the number of long constants in your application. It is recommended that you measure the impact on your classes.</p>
        <p>Note that the long constant encryption used by Zelix KlassMaster(TM) is not irreversible . Don't rely on it to protect highly sensitive data.</p>
        <p>The Java(TM) environment is case sensitive. However, the file systems of some operating systems (e.g. Windows(TM)) are not.</p>
        <p>So if classes are going to be stored directly in the file system of a non-case sensitive operating system then the obfuscated names of those classes should be different other than just in case.</p>
        <p>On the otherhand, if your obfuscated classes will always be stored within an archive (e.g. JAR file) then you can reduce the size of your application by using mixed case obfuscated class names.</p>
        <p>The "Mixed case class names" drop down list allows you to specify how Zelix KlassMaster(TM) generated new, obfuscated class names.</p>
        <p>If you select true then obfuscated class names will aways be generated using mixed case.</p>
        <p>If you select false then obfuscated class names will be generated using only lower case.</p>
        <p>If you select if only in archive then obfuscated class names will be generated using mixed case only for those classes which appear only inside of archive files.</p>
        <p>When the "collapse packages" box is selected, Zelix KlassMaster(TM) will recursively collapse subpackages into their superpackages.</p>
        <p>Effectively, classes in subpackages will be moved into their superpackages.</p>
        <p>By reducing the overall length of the package names,</p>
        <p>this option reduces the length of fully qualified class names and therefore reduces the size of the bytecode.</p>
        <p>Packages whose names have been excluded from being changed are never collapsed.</p>
        <p>So packages with excluded superpackages will be collapsed into the nearest excluded superpackage.</p>
        <p>If a package has no excluded superpackage then it will be collapsed into the package specified in the "Default name" field that appears to the immediate right of the "Collapse packages" box.</p>
        <p>If the "Default name" field is empty then packages with no excluded superpackage will be collapsed into the Java default package "" (which is no package at all).</p>
        <p>The specified package need not already exist.</p>
        <p>Remember that one of the purposes served by package names is to ensure that fully qualified class names are unique.</p>
        <p>If you collapse your packages into the Java default package (ie. no package) then Zelix KlassMaster(TM) will ensure that your class names are unique within your application.</p>
        <p>However, you must be sure that there will be no runtime name clashes with other default package classes in the runtime classpath.</p>
        <p>Take as an example the following set of packages.</p>
        <p>2. exclude the com.mycompany package name from being excluded</p>
        <p>3. enter foo into the "Default name" field</p>
        <p>then the packages will be collapsed as follows</p>
        <p>Typically you would only collapse the package structure if your obfuscated classes were self contained.</p>
        <p>The following settings are typical for the different application types.</p>
        <p>If you select this option, Zelix KlassMaster(TM) will rename your methods more aggressively.</p>
        <p>The resulting bytecode will run without problem but you may have difficulties compiling Java source against your obfuscated bytecode.</p>
        <p>Select this option only if your application is stand-alone and self-contained. Do not select this option if your classes make up an extensible framework or a class library.</p>
        <p>When selected, this option tells Zelix KlassMaster(TM) to generate new obfuscated names in a random fashion.</p>
        <p>By default, if the opened classes are unchanged, Zelix KlassMaster(TM) will generate the same obfuscated names.</p>
        <p>The JDK 1.1 introduced inner classes. At the level of the bytecode, inner classes are distinguished by the structure of their names and by the presence of a few attributes. This inner class information is not critical to the running of your bytecode. It is provided for the use of compilers and debuggers and similar utilities.</p>
        <p>If you select "true" in the "keep inner class information" list then Zelix KlassMaster(TM) will retain this inner class information in all inner classes. If you select "false" then Zelix KlassMaster(TM) will delete this inner class information from all inner classes. Finally, if you select "ifNameNotObfuscated" then Zelix KlassMaster(TM) will retain this information in all inner classes that do not have their names obfuscated and it will delete it in all others.</p>
        <p>The rationale of the "ifNameNotObfuscated" setting is that you are unlikely to have changed the name of an inner class that needs to be accessed by a compiler or utility.</p>
        <p>Because inner class information is not used at runtime, it is generally suggested that you select "false".</p>
        <p>However, if you or your customers must compile classes against your obfuscated inner classes then you must select "true" or at least "ifNameNotObfuscated".</p>
        <p>The JDK 1.5 introduced generics. At the level of the bytecode, generics information is stored in special attributes. As in the case of inner class information, generics information is not critical to the running of your bytecode but is provided for the use of compilers and debuggers and similar utilities.</p>
        <p>If you select "true" in the "keep generics information" list then Zelix KlassMaster(TM) will retain this information in all classes. If you select "false" then Zelix KlassMaster(TM) will delete this information from all classes.</p>
        <p>Because generics information is not used at runtime, it is generally suggested that you select "false".</p>
        <p>However, if you or your customers must compile classes against your obfuscated classes that make use of the genericity of those classes then you must select "true". Some JEE environments may also require that generics information be retained.</p>
        <p>Java compilers can optionally include local variable tables in your bytecode that store the local variable names that you used in your source code.</p>
        <p>The names that you give your method parameters are also local variables.</p>
        <p>This local variable information can be useful when you are debugging your code but it can also make the job of a decomplier that much easier.</p>
        <p>Zelix KlassMaster(TM) gives you six ways of dealing with local variable tables. These options appear in the "Local variable tables" drop down list.</p>
        <p>When you select "delete" (the default) all local variable information is deleted. You should use this setting in almost all cases.</p>
        <p>When you select "keepVisibleMethodParameters" the method parameter variable names of public or protected methods are retained.</p>
        <p>When you select "keepVisibleMethodParametersIfNotObfuscated" the method parameter variable names of public or protected methods are retained only if</p>
        <p>When you select "keepMethodParametersIfNotObfuscated" the method parameter variable names of all methods, regardless of their access modifiers, are retained only if</p>
        <p>These last three options can be of use when obfuscating a library that will be used within an IDE. Many IDE's will preview a method's signature including its parameter names.</p>
        <p>The "obfuscate" setting tells Zelix KlassMaster(TM) to obfuscate the local variable names.</p>
        <p>Obfuscated local variable names will typically take up less space than meaningful variable names but they will take up more space than would be the case if the "delete" setting was used.</p>
        <p>The final "keep" setting is not recommended and is provided only for those rare cases where it may temporarily make debugging easier.</p>
        <p>However, you should note that method parameter names may also be stored in the methodParameters attribute. These can be independently managed using the obfuscate statement.</p>
        <p>Java compilers can optionally include line number tables in your bytecode that map bytecode instructions to source code line numbers. If your code contains line number information and it experiences an uncaught exception at runtime then the corresponding source code line number is displayed by the Virtual Machine.</p>
        <p>However, line number tables can also provide clues to decompliers.</p>
        <p>Zelix KlassMaster(TM) gives you three ways of dealing with line number tables. These options appear in the drop down list. If you select delete , Zelix KlassMaster(TM) will remove all line number debugging information. This reduces the size of your bytecode but it can make it difficult to analyze the stack traces produced by uncaught exceptions. This is especially the case in obfuscated code where many methods share the same name.</p>
        <p>If you select scramble , Zelix KlassMaster(TM) will mix-up the line number table entries and write the mapping of the new to original line numbers to the nominated change log file. This gives decompilers little extra information while allowing you to determine the source code line numbers in stack traces.</p>
        <p>tool makes the translation of scrambled to original line number easy. However, scrambled line numbers will make your bytecode larger.</p>
        <p>The third choice is to select keep . Zelix KlassMaster(TM) will leave the existing line number tables as they are.</p>
        <p>Any stack traces will give the original source line numbers and your bytecode will be slightly smaller than if you had scrambled the line numbers. However, unscrambled line number tables can give decompilers valuable information about the structure of your original code.</p>
        <p>In all cases, if there is no line number information in the bytecode, this option will have no effect.</p>
        <p>Note also that most JVMs will not display line numbers in a stack trace unless a Source File attribute is present in that class.</p>
        <p>So if you want to keep or scramble your line numbers and you are also using Zelix KlassMaster(TM)'s Trim option then you should not specify the deletion of Source File attributes.</p>
        <p>If you select this option, Zelix KlassMaster(TM) will obfuscate the field or method references that you specify in the next window.</p>
        <p>A field or method reference is a field access or a method call. Zelix KlassMaster(TM) obfuscates references by replacing them with Reflection API calls.</p>
        <p>The ZKM Script interface provides additional reference obfuscation functionality in the form of the obfuscate ,</p>
        <p>obfuscateReferencesInclude and obfuscateReferencesExclude statements.</p>
        <p>See the Reference Obfuscation Tutorial for more detail.</p>
        <p>If you select this option, Zelix KlassMaster(TM) will automatically handle Java Reflection API calls which access classes, fields or methods.</p>
        <p>Only those Reflection API calls which Zelix KlassMaster(TM) has not been able to fully resolve will need to be handled.</p>
        <p>Reflection API calls which have not been fully resolved will be listed in the Class Open Warnings window.</p>
        <p>The ZKM Script interface provides additional AutoReflection(TM) functionality in the form of the obfuscate ,</p>
        <p>accessedByReflection and accessedByReflectionExclude statements.</p>
        <p>See the AutoReflection(TM) Tutorial for more detail on the AutoReflection(TM) function.</p>
        <p>If you select normal or random from this list then Zelix KlassMaster will add special additional parameters to some of your methods.</p>
        <p>The random setting will make the type and position of the additional parameters more random with a possible, slight cost to runtime performance.</p>
        <p>This is explained in the Method Parameter Changes Tutorial .</p>
        <p>As is explained in the tutorial, this option is only relevant if you are also using</p>
        <p>If you allow Zelix KlassMaster to add additional method parameters then it can make its "enhanced" String Encryption ,</p>
        <p>Integer Constant Encryption and Reference Obfuscation much more difficult to reverse.</p>
        <p>The flowObfuscate setting is the same as the random setting but a special kind of Flow Obfuscation may be applied at a possible cost to runtime performance.</p>
        <p>The disadvantage is that it interlinks your classes such that the obfuscated application must be released as a whole and will not be suitable for "patching" with changed subsets of the classes.</p>
        <p>If you select "keep balanced locks" then Zelix KlassMaster(TM) will maintain "structured locking".</p>
        <p>You should select this box if your classes will be used to generate bytecode for the Android ART verifier.</p>
        <p>If you select "preverify" then Zelix KlassMaster(TM) will fully preverify your classes.</p>
        <p>This is essential if your classes were compiled by a Java 6 or better compiler and if you will be running your bytecode on a JVM.</p>
        <p>So you should always select this check box except for special situations where your bytecode will be further processed (e.g. into Android dex bytecode) in a way that does not require preverification.</p>
        <p>Zelix KlassMaster(TM) excludes some class, method and field names by default ( see</p>
        <p>). For example it supports RMI , JavaBeans (TM) and EJBs (TM) by:</p>
        <p>automatically adjusting the values of your BeanInfo</p>
        <p>static fields to reflect the new class names.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Obfuscate Control Flow",
  "url": "https://zkm-web.vercel.app/docs/obfuscateOptions"
}, {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://zkm-web.vercel.app/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Docs",
      "item": "https://zkm-web.vercel.app/docs"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Obfuscate Control Flow"
    }
  ]
}]
useHead({
  title: 'Obfuscate Control Flow | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Obfuscate Control Flow | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/obfuscateOptions' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
