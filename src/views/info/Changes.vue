<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Reference</p>
      <h1>Java Obfuscator - Zelix KlassMaster - Change History</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster - Change History</li>
          <li>Overview FAQ Change History Documentation</li>
          <li>Change History In descending chronological order and with the major releases underlined .</li>
          <li>Version 27.0 release 0 (20 Sep 2026)</li>
          <li>Preliminary release validating support for Java 27.</li>
          <li>Enhances the Flow Obfuscation functionality to make its transformations more random.</li>
          <li>Enhances the Method Parameter Obfuscation functionality to make its transformations more random.</li>
          <li>Enhances the obfuscated name list functionality to support Java escape sequences.</li>
          <li>Improves support for the handling of OSGi blueprint XML.</li>
          <li>Changes the default of the ZKM Script obfuscate statement's methodParameters parameter from keepVisible to delete .</li>
          <li>Other minor changes and bug fixes.</li>
          <li>Note that this release will not run reliably on IBM Semeru Runtimes that make use of the Eclipse OpenJ9 VM due to a suspected JIT compiler bug.</li>
          <li>27.0.l Corrects a bug in the processing of properties files which could cause a large properties file to be truncated.</li>
          <li>Enhances the Method Parameter Changing functionality to make some of its transformations more random.</li>
        </ul>
        <h2>Version 26.0 release 0 (16 Mar 2026)</h2>
        <ul>
          <li>Preliminary release validating support for Java 26.</li>
          <li>Enhances the the classInitializationOrder statement so that it infers transitive relationships.</li>
          <li>Enhances the obfuscated name list functionality so that it affects the names of new fields and methods created by Zelix KlassMaster(TM).</li>
          <li>26.0.l Changes the obfuscated name list functionality. In some circumstances particular name entries of the lists will be used when constructing the names of new fields and methods created by Zelix KlassMaster(TM) only if:</li>
          <li>the name entry is no more than six characters in length and</li>
          <li>each character in the name entry is less than '\u03E8'</li>
          <li>26.0.2</li>
          <li>Corrects a potential NullPointerException in the Trim functionality.</li>
          <li>26.0.3</li>
          <li>Changes the obfuscated name list functionality by removing the name length and character limitations temporarily introduced in version 26.0.1.</li>
          <li>Corrects a bug in the renaming of fields which could result in an IllegalAccessError in certain unusual circumstances.</li>
        </ul>
        <h3>Version 25.0 release 0 (14 Sep 2025)</h3>
        <ul>
          <li>Preliminary release validating support for Java 25.</li>
          <li>Enhances the Method Parameter Changing functionality by allowing it to change the parameters of many lambda implementation methods.</li>
          <li>Enhances the Reproducible Obfuscated Output functionality by providing the ZKM_KEEP_SKIPPED_LAST_MODIFIED_DATE =true configuration option to allow you to retain the original last modified times of skipped nested archives and skipped XML, YAML and properties files.</li>
        </ul>
        <h3>Version 24.0 release 2 (09 May 2025)</h3>
        <ul>
          <li>Corrects a bug in the Integer Constant Encryption functionality in version 24.0.1 which could result in various exceptions when used in conjuction with certain other transformations. The exceptions are unpredictable but the most common examples are NullPointerExceptions, ArrayIndexOutOfBoundsExceptions and even ClassNotFoundExceptions.</li>
        </ul>
        <h3>Version 24.0 release 1 (18 Apr 2025)</h3>
        <ul>
          <li>Improves the usability of the String Encryption functionality by allowing for the exclusion and unexclusion of string literals referenced in specified methods in the ZKM Script stringEncryptionExclude and stringEncryptionUnexclude statements.</li>
          <li>Improves the usability of the Integer Constant Encryption functionality by allowing for the exclusion and unexclusion of integers constants referenced in specified methods in the ZKM Script integerEncryptionExclude and integerEncryptionUnexclude statements.</li>
          <li>Improves the usability of the Long Constant Encryption functionality by allowing for the exclusion and unexclusion of long constants referenced in specified methods in the ZKM Script longEncryptionExclude and longEncryptionUnexclude statements.</li>
        </ul>
        <h3>Version 24.0 release 0 (16 Mar 2025)</h3>
        <ul>
          <li>Preliminary release validating support for Java 24.</li>
        </ul>
        <h3>Version 23.0 release 2 (07 Feb 2025)</h3>
        <ul>
          <li>Corrects a bug in the processing specification annotations which could result in a ClassCastException.</li>
        </ul>
        <h3>Version 23.0 release 1 (20 Oct 2024)</h3>
        <ul>
          <li>Introduces the obfuscateExceptionsExclude , obfuscateExceptionsUnexclude and resetObfuscateExceptionsExclusions statements.</li>
          <li>Introduces the processing specification annotations that allow fine grained control of the Flow and Exception Obfuscation levels.</li>
        </ul>
        <h3>Version 23.0 release 0 (03 Oct 2024)</h3>
        <ul>
          <li>Preliminary release validating support for Java 23.</li>
        </ul>
        <h3>Version 22.0 release 3 (20 Jul 2024)</h3>
        <ul>
          <li>Corrects a bug which could result in a "VerifyError: Bad type on operand stack" error.</li>
        </ul>
        <h3>Version 22.0 release 2 (30 May 2024)</h3>
        <ul>
          <li>Corrects a bug in the ZKM Script removeMethodCalls statement which in certain scenarios could result in the wrong methods being reported as having been removed.</li>
        </ul>
        <h3>Version 22.0 release 1 (07 May 2024)</h3>
        <ul>
          <li>Improves the Stack Trace Translate Tool's translation of the enhanced NullPointerException line introduced in Java 15.</li>
        </ul>
        <h3>Version 22.0 release 0 (11 Mar 2024)</h3>
        <ul>
          <li>Provides support for Java 22.</li>
          <li>Enhances the ZKM Script obfuscate statement by introducing the makeClassesPublic parameter which optionally make all classes public and not final.</li>
          <li>Provides preliminary support for the String Templates functionality previewed again in Java 22.</li>
        </ul>
        <h3>Version 21.0 release 0 (15 Sep 2023)</h3>
        <ul>
          <li>Provides support for Java 21.</li>
          <li>Provides preliminary support for the Pattern Matching for switch functionality previewed again in Java 21.</li>
          <li>Provides preliminary support for the Record Patterns functionality previewed in Java 21.</li>
        </ul>
        <h3>Version 20.0 release 4 (18 Aug 2023)</h3>
        <ul>
          <li>Corrects a bug which can cause a VerifyError in the obfuscated bytecode when using Integer Constant Encryption and Long Constant Encryption in certain unusual scenarios.</li>
        </ul>
        <h3>Version 20.0 release 3 (09 May 2023)</h3>
        <ul>
          <li>Corrects a bug which can cause a NullPointerException when opening classes in the GUI interface with the "open nested archives" check box unchecked.</li>
        </ul>
        <h3>Version 20.0 release 2 (03 May 2023)</h3>
        <ul>
          <li>Corrects a bug which can cause an ArrayIndexOutOfBoundsException when a class is opened for obfuscation from more than one source while using parallel processing.</li>
        </ul>
        <h3>Version 20.0 release 1 (25 Apr 2023)</h3>
        <ul>
          <li>Corrects a bug which can occur when classes in the effective classpath are in the "BOOT-INF/classes" directory of an archive.</li>
        </ul>
        <h3>Version 20.0 release 0 (29 Mar 2023)</h3>
        <ul>
          <li>Introduces the ability to import and export classpaths from and to text files in the GUI interface.</li>
          <li>Enhances the ZKM Script open statement by introducing the "openNestedArchives" parameter. Provides a simpiler way of overriding the default behavior of opening all nested archives for processing.</li>
          <li>Provides support for Java 20 and preliminary support for the Pattern Matching for switch functionality previewed again in Java 20.</li>
        </ul>
        <h3>Version 19.0 release 5 (26 Mar 2023)</h3>
        <ul>
          <li>Corrects a bug in the copying across of "skipped" nested archive files.</li>
        </ul>
        <h3>Version 19.0 release 4 (28 Feb 2023)</h3>
        <ul>
          <li>Minor changes and bug fixes.</li>
        </ul>
        <h3>Version 19.0 release 3 (14 Feb 2023)</h3>
        <ul>
          <li>Corrects a bug which could affect processing of Spring XML files in rare scenarios.</li>
        </ul>
        <h3>Version 19.0 release 2 (03 Nov 2022)</h3>
        <h3>Version 19.0 release 1 (23 Oct 2022)</h3>
        <ul>
          <li>Corrects a bug in the GUI Build Helper tool which prevented progression beyond the "Class Open Warnings" window.</li>
        </ul>
        <h3>Version 19.0 release 0 (01 Sep 2022)</h3>
        <ul>
          <li>Introduces Long Constant Encryption functionality.</li>
          <li>Introduces support for Java 19 and preliminary support for the Pattern Matching for switch functionality previewed again in Java 19.</li>
        </ul>
        <h3>Version 18.0 release 0 (03 Apr 2022)</h3>
        <ul>
          <li>Introduces Integer Constant Encryption functionality.</li>
          <li>Introduces support for Java 18 and preliminary support for the Pattern Matching for switch functionality previewed in Java 18.</li>
          <li>release 1 Corrects a ClassCastException.</li>
          <li>release 2</li>
          <li>Support for modular, multi-release JAR files.</li>
          <li>release 3</li>
          <li>Minor bug fixes.</li>
          <li>release 4</li>
          <li>Minor bug fix.</li>
        </ul>
        <h3>Version 17.0 release 0 (28 Aug 2021)</h3>
        <ul>
          <li>Support for Java 17 and its Sealed Classes functionality.</li>
          <li>Introduces preliminary support for the Pattern Matching for switch functionality previewed in Java 17.</li>
          <li>Enhances the ZKM Script obfuscate statement by introducing the uniqueMethodNames and methodParameterChangesPackage parameters.</li>
          <li>Provides support for updating fully qualified class names contained in Yaml files or contained as values in properties files if those class names have been obfuscated.</li>
          <li>release 1 Introduces support for reproducible obfuscated output . Reproducible output is absolutely identical at the byte level across builds.</li>
          <li>Introduces the ZKM_REPRODUCIBLE_RANDOM special configuration option which must be set as a prerequisite for reproducible output.</li>
          <li>Enhances the ZKM Script open statement by introducing the expectedInitial_SHA256 and expectedFinal_SHA256 parameters.</li>
          <li>Enhances the ZKM Script saveAll statement by introducing the lastModifiedTime parameter which will set the last modified dates of JAR contents to a consistent value.</li>
          <li>Corrects some bugs in the translation of ProGuard style configuration.</li>
          <li>Works around a ArrayIndexOutOfBoundsException which can occur in String Encryption when processing bytecode generated by Kotlin.</li>
        </ul>
        <h3>Version 16.0 release 6 (29 Jul 2021)</h3>
        <ul>
          <li>Corrects a bug in the Name Obfuscation of Records which could cause a NullPointerException.</li>
        </ul>
        <h3>Version 16.0 release 5 (09 Jul 2021)</h3>
        <ul>
          <li>Corrects a bug in the Trim functionality's processessing of certain unusual lambda attributes that could result in an AbstractMethodError.</li>
        </ul>
        <h3>Version 16.0 release 4 (30 Jun 2021)</h3>
        <ul>
          <li>Corrects "Invalid Class index in Exception Entry" and "Illegal constant pool index in attribute" errors which could occur when processing highly unusual bytecode generated by Groovy.</li>
        </ul>
        <h3>Version 16.0 release 3 (29 Jun 2021)</h3>
        <ul>
          <li>Corrects a VerifyError bug which could occur in highly unusual bytecode generated by Groovy after that bytecode has been flow obfuscated.</li>
        </ul>
        <h3>Version 16.0 release 2 (07 Jun 2021)</h3>
        <ul>
          <li>Corrects a bug in the translation of ProGuard -adaptresourcefilenames and -adaptresourcefilecontents commands.</li>
        </ul>
        <h3>Version 16.0 release 1 (14 Apr 2021)</h3>
        <ul>
          <li>Corrects a bug in Method Parameter Obfuscation by excluding any method with parameter annotations from Method Parameter Obfuscation.</li>
          <li>Corrects a bug in the processing of the ZKM Script syntax that allows a more concise specification of a package and all of its packages. (E.g. pack1.pack2 .. )</li>
        </ul>
        <h3>Version 16.0 release 0 (15 Mar 2021)</h3>
        <ul>
          <li>Introduces support for the Records functionality introduced in Java 16.</li>
          <li>Continues preliminary support for the Sealed Classes functionality previewed again in Java 16.</li>
          <li>Introduces obfuscated name list functionality that allows control of the names given to obfuscated packages, classes, fields and methods by Zelix KlassMaster(TM)'s Name Obfuscation.</li>
          <li>Introduces the ability to tell Zelix KlassMaster(TM) to use non-ASCII obfuscated names when renaming packages, classes, fields and methods.</li>
          <li>Enhances Zelix KlassMaster(TM)'s Reference Obfuscation so that the pool entries it creates contain the minimum amount of type information.</li>
          <li>Increases the randomness of names given to obfuscated packages, classes, fields and methods by Zelix KlassMaster(TM)'s Name Obfuscation.</li>
          <li>Enhances the translation of ProGuard style configuration.</li>
        </ul>
        <h3>Version 15.0 release 2 (20 Nov 2020)</h3>
        <ul>
          <li>Corrects a "VerifyError: Bad type on operand stack" error which can occur in the obfuscated application if the Method Parameter Changing functionality is used.</li>
        </ul>
        <h3>Version 15.0 release 1 (06 Oct 2020)</h3>
        <ul>
          <li>Corrects a NullPointerException that could occur in the Trim functionality when a nested class is not opened for obfuscation yet its "outer" class is opened for obfuscation.</li>
        </ul>
        <h3>Version 15.0 release 0 (16 Aug 2020)</h3>
        <ul>
          <li>Introduces the optional Method Parameter Obfuscation functionality that obfuscates method parameter lists by replacing them with a single Object[] parameter. (E.g. void method(String, int, Customer) could become void b(Object[])</li>
          <li>Enhances Method Parameter Changing so that the flowObfuscate setting of the methodParameterChanges parameter can have a flow obfuscating effect without requiring the encryptStringLiterals parameter to be set to enhanced or the obfuscateReferences parameter to be set to normal . This makes the Method Parameter Changing based Flow Obfuscation an independent, fully fledged alternative to the original type of Flow Obfuscation.</li>
          <li>Introduces preliminary support for the Sealed Classes functionality previewed in Java 15.</li>
          <li>Improves preliminary support for the Records functionality previewed again in Java 15.</li>
          <li>Enhances the ZKM Script syntax to allow a more concise specification of a package and all of its packages. (E.g. pack1.pack2 .. )</li>
          <li>Enhances the ZKM Script open and classpath statements to allow the "*" wildcard to appear in the final directory qualifier. (E.g. "directory1/ * /*.jar")</li>
          <li>Enhances the ZKM Script obfuscate statement's collapsePackagesWithDefault parameter to allow the specification of a default package that has more than one package qualifier.</li>
        </ul>
        <h3>Version 14.0 release 6 (16 July 2020)</h3>
        <ul>
          <li>Corrects a possible cause of a BadPaddingException which can occur when a static inner class also has an EnclosingMethod attribute.</li>
          <li>Corrects a possible ConcurrentModificationException that can occur when obfuscating multi-release inner classes and removing their inner class information.</li>
          <li>Works around a possible "Cannot open a class with signature polymorphic methods in this version" error in the Stack Trace Translate Tool API .</li>
        </ul>
        <h3>Version 14.0 release 5 (23 May 2020)</h3>
        <ul>
          <li>Corrects a "Value '&lt;className&gt;' doesn't exist in value array" bug in Method Parameter Changing that could occur if processing multi-release JAR files.</li>
        </ul>
        <h3>Version 14.0 release 4 (20 May 2020)</h3>
        <ul>
          <li>Corrects a bug in the handling of ZKM Script statements appearing in the special ProGuard configuration translate ZKMScript.txt file that could result in the statement name being truncated in the final ZKM Script.</li>
          <li>Corrects a bug in the handling of a ignoreMissingReferences statement in the special ProGuard configuration translate ZKMScript.txt file which could occur when that statement has no parameters.</li>
        </ul>
        <h3>Version 14.0 release 3 (16 May 2020)</h3>
        <ul>
          <li>Corrects a bug in the translation of complex ProGuard -dontnote commands.</li>
          <li>Handles a NullPointerException that could occur in the parsing of XML files which are not "well formed".</li>
        </ul>
        <h3>Version 14.0 release 2 (22 Apr 2020)</h3>
        <ul>
          <li>Corrects a NullPointerException that could occur in the obfuscation step in certain unusual scenarios which typically would involve the use of the obfuscateReferenceStructures=inReferencingClasses setting on the ZKM Script obfuscate statement and the obfuscation of Java 7 classes.</li>
        </ul>
        <h3>Version 14.0 release 1 (02 Apr 2020)</h3>
        <ul>
          <li>Corrects a NullPointerException that could occur in the obfuscation step in certain unusual scenarios which typically would involve large and complex ZKM Script classpath and open statements.</li>
          <li>Adds validation to ensure that any method which takes no parameters doesn't have its ACC_VARARGS flag set.</li>
        </ul>
        <h3>Version 14.0 release 0 (10 Mar 2020)</h3>
        <ul>
          <li>Introduces preliminary support for the Records functionality previewed in Java 14.</li>
          <li>Introduces some shuffling of the constant pool entries to further complicate attempts to deobfuscate obfuscated classes.</li>
          <li>Enhances the ZKM Script open statement by introducing "file filter" functionality.</li>
          <li>Enhances the ZKM Script open statement by introducing improved wildcard matching between "skip" and "unskip" clauses.</li>
          <li>Enhances the ZKM Script saveAll statement by introducing the deleteXMLComments parameter.</li>
          <li>Corrects a bug in the ZKM Script saveAll statement that resulted in some parent directory entries being inappropriately deleted even though deleteEmptyDirectories=true was specified.</li>
          <li>Enhances the ZKMChangeLogConvert utility to write line numbers to the generated ProGuard style mapping file if the path to the obfuscated bytecode is specifed as a third parameter.</li>
          <li>Introduces basic support for file filters when translating ProGuard style configuration.</li>
          <li>Introduces some basic handling of bytecode produced by the Kotlin compiler. Only relatively simple cases handled.</li>
        </ul>
        <h3>Version 13.0 release 3 (06 Dec 2019)</h3>
        <ul>
          <li>Corrects a performance problem which could occur when many and/or large XML files are opened for processing.</li>
          <li>Improves handling of corrupt annotation entries by working around a possible NullPointerException.</li>
        </ul>
        <h3>Version 13.0 release 2 (20 Nov 2019)</h3>
        <ul>
          <li>Corrects a bug in the translation of the "-if" command in ProGuard style configuration.</li>
        </ul>
        <h3>Version 13.0 release 1 (17 Oct 2019)</h3>
        <ul>
          <li>Corrects a ClassCastException that could occur intermittently in Reference Obfuscated bytecode that is multi-threaded or uses parallel processing (including earlier releases of Zelix KlassMaster(TM) itself). The error message would typically be "ClassCastException: class java.lang.Class cannot be cast to class java.lang.String".</li>
          <li>Corrects a "Lexical error" that occurs when translating Proguard style configuration containing a -dontwarn statement that specifies "module-info".</li>
          <li>Provides a basic Zelix KlassMaster(TM) Gradle plugin .</li>
        </ul>
        <h3>Version 13.0 release 0 (08 Sep 2019)</h3>
        <ul>
          <li>Zelix KlassMaster(TM) enhanced to perform some processing in parallel by default where possible to reduce obfuscation time. The size of the reduction in obfuscation time could be more than 30% but it will depend upon The obfuscation options that have been selected,</li>
          <li>The number of processors that are available and</li>
          <li>The amount of heap space that is available.</li>
          <li>Introduces the ZKM_EXTRA_XML_FILE_TYPES special configuration option. It can be used to specify additional file types in a semicolon delimited list that Zelix KlassMaster should treat as generic XML files. (E.g. ZKM_EXTRA_XML_FILE_TYPES="*.foo;*.bar" )</li>
          <li>Introduces preliminary support for the updating of Eclipse E4 e4xmi XML files.</li>
          <li>Corrects a bug in the Stack Trace Translate Tool API .</li>
          <li>Corrects a bug in the translation of ProGuard style configuration.</li>
        </ul>
        <h3>Version 12.0 release 4 (13 Jul 2019)</h3>
        <ul>
          <li>Corrected a bug in XML file processing which could result in duplicate lines of character data.</li>
          <li>Enhances the Smart Save(TM) technology so that it will merge Service Provider configuration files that have the same name.</li>
        </ul>
        <h3>Version 12.0 release 3 (01 Jun 2019)</h3>
        <ul>
          <li>Corrected a bug which could cause a NullPointerException when an input change log and the allClassesOpened=false clause are specified on the obfuscate statement.</li>
        </ul>
        <h3>Version 12.0 release 2 (26 Mar 2019)</h3>
        <ul>
          <li>Corrected a bug which could cause an inappropriate "Duplicate unqualified archive names are not supported in the 'open' statement" error.</li>
        </ul>
        <h3>Version 12.0 release 1 (07 Mar 2019)</h3>
        <ul>
          <li>Enhanced the Method Parameter Changing functionality to make it thread-safe in heavily multi-threaded applications.</li>
        </ul>
        <h3>Version 12.0 release 0 (17 Feb 2019)</h3>
        <ul>
          <li>Enhanced the Flow Obfuscation functionality to make use of Reference Obfuscation in Java 8 or better bytecode if both Reference Obfuscation and Method Parameter Changing have also been specified. This further hardens Flow Obfuscation against deobfuscation.</li>
          <li>Enhanced the methodParameterChange parameter of the obfuscate statement to include the flowObfuscate setting. The flowObfuscate setting is the same as the random setting but it also applies a different type of flow obfuscation to suitable methods.</li>
          <li>Introduces the ZKM_MATCH_ON_ORIGINAL special configuration option which, when set, tells Zelix KlassMaster(TM)'s ZKM Script exclusion statements to match on original package, class, field and method names rather than their possibly obfuscated names. This option is only relevant if ZKM Script exclusion statements follow an obfuscate statement in the one ZKM Script.</li>
        </ul>
        <h3>Version 11.0 release 6 (03 Feb 2019)</h3>
        <ul>
          <li>Corrects a bug in the ZKM Script existingSerializedClasses statement which could cause incorrect processing of serialPersistentFields fields.</li>
          <li>release 6a Corrects another bug in the ZKM Script existingSerializedClasses statement which could cause incorrect processing of serialPersistentFields fields.</li>
          <li>release 6b</li>
          <li>Corrects a IllegalAccessException bug which could occur when Reference Obfuscation is used on classes in modular JAR files.</li>
        </ul>
        <h3>Version 11.0 release 5 (05 Dec 2018)</h3>
        <ul>
          <li>Corrects a bug in the ZKM Script ignoreMissingReferences statement and the processing of the ZKM_IGNORE_MISSING_MEMBERS special configuration option.</li>
        </ul>
        <h3>Version 11.0 release 4 (19 Nov 2018)</h3>
        <ul>
          <li>Corrects a bug in the translation of ProGuard "-dontwarn" commands which resulted in missing class members not being ignored.</li>
        </ul>
        <h3>Version 11.0 release 3 (01 Nov 2018)</h3>
        <ul>
          <li>Corrects a bug in the saveAll statement.</li>
        </ul>
        <h3>Version 11.0 release 2 (26 Oct 2018)</h3>
        <ul>
          <li>Corrects a bug that prevented the ZKM_TEST_HIERARCHY=false configuration option from having an effect.</li>
        </ul>
        <h3>Version 11.0 release 1 (06 Oct 2018)</h3>
        <ul>
          <li>Corrects a bug in the handling of FXML that could result in a spurious "Must specify a base directory" error.</li>
          <li>release 1a Corrects more bugs in the handling of FXML.</li>
        </ul>
        <h3>Version 11.0 release 0 (15 Aug 2018)</h3>
        <ul>
          <li>Implements preliminary support for Java 11 bytecode including JEP 181 and JEP 309 .</li>
          <li>Implements basic support for Multi-Release JAR files .</li>
          <li>Introduces the obfuscate statement methodParameterChange parameter which replaces the allowMethodParameterChange parameter. The methodParameterChange parameter provides the new random setting which can make the type and position of the additional parameters more random with a possible, slight cost to runtime performance.</li>
          <li>Introduces the classInitializationOrder statement which allows you to tell Zelix KlassMaster(TM) that certain classes are always initialized before some other class. Zelix KlassMaster(TM) may then be able to use this information to further "harden" its obfuscation.</li>
          <li>Removed the obfuscate statement obfuscateFlow=extraAggressive setting due to obscure JVM bugs.</li>
        </ul>
        <h3>Version 10.0 release 4 (14 Jul 2018)</h3>
        <ul>
          <li>Corrects a bug in the way that the fixedClasses statement interacts with the the Method Parameter Change functionality that could result in an exception such as a "BadPaddingException", an "ExceptionInInitializerError" or an "ArrayIndexOutOfBoundsException".</li>
          <li>release 4a Makes some changes in the handling of certain complex String literals.</li>
        </ul>
        <h3>Version 10.0 release 3 (20 Jun 2018)</h3>
        <ul>
          <li>Corrects a bug in the Stack Trace Translate Tool which results in an inappropriate "Check the classpath option and reopen classes. (2)" error.</li>
        </ul>
        <h3>Version 10.0 release 2 (05 Apr 2018)</h3>
        <ul>
          <li>Corrects a bug in the String Encryption functionality which could cause a "java.lang.IllegalStateException: Cipher not initialized" and/or a "javax.crypto.BadPaddingException: Given final block not properly padded" exception in multithreaded environments.</li>
          <li>Improves support for Spring XML configuration files.</li>
          <li>release 2a Corrects a bug in the translation of ProGuard style configuration.</li>
          <li>release 2b</li>
          <li>Makes changes to the Method Parameter Change functionality to reduce the chance of an unreasonable impact on the obfuscated application's start up time.</li>
          <li>Provides the "ZKM_METHOD_PARAM_CHANGING_LOOKUP" configuration option to optionally switch off a part of the Method Parameter Change functionality which could still cause an unreasonable delay in the obfuscated application's start up time in the case of very large applications.</li>
          <li>release 2c</li>
          <li>Corrects a bug which could result in an "Assert Failed: Insufficient entries" error.</li>
          <li>release 2d</li>
          <li>Makes changes to the Method Parameter Change functionality to reduce the chance of an unreasonable impact on a very large obfuscated application's start up time.</li>
        </ul>
        <h3>Version 10.0 release 1 (02 Apr 2018)</h3>
        <ul>
          <li>Corrects a bug in the handling of certain complex String literals.</li>
          <li>Improves support for ProGuard style configuration.</li>
        </ul>
        <h3>Version 10.0 release 0 (21 Mar 2018)</h3>
        <ul>
          <li>Enhances the Reference Obfuscation functionality to make use of the invokedynamic instruction where possible rather than the Reflection API. This can reduces the performance impact by a factor of about five. This allows the Reference Obfuscation functionality</li>
          <li>Enhances the String Encryption functionality to make use of the invokedynamic instruction where possible.</li>
          <li>Makes changes to the Method Parameter Change functionality to further harden it against being reversed.</li>
          <li>Provides preliminary support for the handling of Bean inheritance in Spring XML configuration files.</li>
          <li>NB: Zelix KlassMaster(TM) version 10 requires a newer version of a Java 8 JVM to run. If you use an Oracle JVM earlier than 1.8.0_152 then you may get a JVM crash due to HotSpot bugs.</li>
        </ul>
        <h3>Version 9.0 release 9 (11 Mar 2018)</h3>
        <ul>
          <li>Provides the "ZKM_XML_ASSERTS" configuration option to optionally switch off some asserts that may fail in Spring XML processing.</li>
          <li>Makes changes that reduce the risk of occasional NullPointerExceptions which may occur in Zelix KlassMaster(TM) processing due to HotSpot bugs.</li>
          <li>Corrects a bug in the translation and processing of ProGuard style configuration.</li>
          <li>release 9a Corrects a bug in the handling of certain complex String literals.</li>
        </ul>
        <h3>Version 9.0 release 8 (10 Jan 2018)</h3>
        <ul>
          <li>Corrects a NullPointerException which could occur if the "keepInnerClassInfo=ifNameNotObfuscated" setting is used.</li>
        </ul>
        <h3>Version 9.0 release 7 (14 Dec 2017)</h3>
        <ul>
          <li>Corrects a confusing ArrayIndexOutOfBoundsException which could occur if a method is too large after String Encryption.</li>
          <li>Corrects a bug in the handling of complex JAR manifest entries.</li>
        </ul>
        <h3>Version 9.0 release 6 (01 Dec 2017)</h3>
        <ul>
          <li>Corrects an ArrayIndexOutOfBoundsException which could occur if Zelix KlassMaster was executed more than once in the same process (E.g. Called twice within an Apache Ant build.xml).</li>
          <li>Corrects a possible IllegalAccessException "with modifiers 'protected static'" error.</li>
        </ul>
        <h3>Version 9.0 release 5 (17 Nov 2017)</h3>
        <ul>
          <li>Corrects the ZKM Script open statement so that it will accept files with the ".jmod" extension.</li>
          <li>Corrects bugs in the Stack Trace Translate Tool which could cause erroneous error messages when analyzing stack traces produced by a Java 9 JVM.</li>
        </ul>
        <h3>Version 9.0 release 4 (24 Oct 2017)</h3>
        <ul>
          <li>Corrects a bug which prevented some directory entries from being written to a saved JAR file.</li>
        </ul>
        <h3>Version 9.0 release 3 (05 Sep 2017)</h3>
        <ul>
          <li>Corrects a bug in the ZKM Script classpath statement which can occur when a relative path and a default directory are both specified.</li>
        </ul>
        <h3>Version 9.0 release 2 (11 Aug 2017)</h3>
        <h3>Version 9.0 release 1 (08 Aug 2017)</h3>
        <ul>
          <li>Corrects a bug which could cause some redundant directories to be written to a saved JAR file.</li>
        </ul>
        <h3>Version 9.0 release 0 (26 Jul 2017)</h3>
        <ul>
          <li>Implements preliminary support for the Java 9 bytecode including Java modules (i.e. Project Jigsaw).</li>
          <li>Introduces the optional Method Parameter Change functionality. It further "hardens" the existing enhanced String Encryption and Reference Obfuscation functions to make them more difficult to reverse.</li>
          <li>Introduces the Ignore Missing References functionality which allows you to specify class, method and field references that Zelix KlassMaster(TM) should ignore if it cannot find.</li>
          <li>Introduces the Remove Method Calls functionality which allows you to specify method calls that Zelix KlassMaster(TM) should remove if possible. This is intended to allow you to remove optional method calls such as debugging statements.</li>
          <li>Enhances the ZKM Script obfuscate statement by introducing the uniqueClassNames parameter. When set to true , this option tells Zelix KlassMaster(TM) to not reuse unqualified class names across packages. This option can be useful when a framework uses unqualified class names as identifiers in annotations or XML.</li>
          <li>Enhances the ZKM Script obfuscate statement by introducing the new "keepMethodParametersIfNotObfuscated" and "keepVisibleIfNotObfuscated" values for the existing localVariables and methodParameters parameters respectively. These options allow method parameter names to be retained even in methods which are not public or protected.</li>
          <li>Enhances the ZKM Script open statement to allow the "skipping" and "unskipping" of top level class and XML files.</li>
          <li>Enhances the ProGuard Configuration Translate tool to make use of the new Ignore Missing References and Remove Method Calls functionality.</li>
          <li>Enhances the ZKM Script unexclude statement to allow package names to be unexcluded.</li>
          <li>Now requires a Java 8 (i.e. JDK 1.8) JVM to run but still can process Java bytecode back to Java 1.1.</li>
        </ul>
        <h3>Version 8.0 release 9 (28 Apr 2017)</h3>
        <ul>
          <li>Corrects a bug which could cause a "VerifyError: Stack map does not match the one at exception handler" error.</li>
          <li>release 9b Makes changes that reduce the risk of occasional NullPointerExceptions which may occur in Zelix KlassMaster(TM) processing due to HotSpot bugs.</li>
        </ul>
        <h3>Version 8.0 release 8 (16 Dec 2016)</h3>
        <ul>
          <li>Corrects a bug which could cause a ClassCastException in JME bytecode containing dead code.</li>
        </ul>
        <h3>Version 8.0 release 7 (20 Sep 2016)</h3>
        <ul>
          <li>Enhances Zelix KlassMaster to better support idiosynchracies in ProGuard style configuration.</li>
          <li>release 7a Works around an inappropriate "Zelix KlassMaster is not thread safe" error which can occur in some scenarios.</li>
          <li>release 7b</li>
          <li>Corrects a bug in release 8.0.7 which could result in unintended broad exclusions when translating ProGuard style configuration.</li>
          <li>release 7c</li>
          <li>Corrects a bug in ZKM Script which causes a parse error if a specified package name contains the package qualifier "enhanced".</li>
          <li>release 7d to 7f</li>
          <li>Improvements to the way String Encryption handles very large Strings.</li>
          <li>Workaround for a HotSpot bug that can cause a spurious ClassCastException in unusual circumsatnces.</li>
        </ul>
        <h3>Version 8.0 release 6 (12 Sep 2016)</h3>
        <ul>
          <li>Corrects a bug which could cause a "Assert Failed: bean, factory-method" error when processing certain Spring XML files.</li>
        </ul>
        <h3>Version 8.0 release 5 (19 Aug 2016)</h3>
        <ul>
          <li>Corrects a bug which could cause a "Assert Failed: Duplicate class" error when using the package collapsing feature while specifying an input change log with incompatible package name mappings.</li>
        </ul>
        <h3>Version 8.0 release 4 (01 Aug 2016)</h3>
        <ul>
          <li>Corrects a bug which could cause a ClassNotFoundException when classes in a JAR file are not stored relative to the root directory (e.g. in a "/lib" directory).</li>
        </ul>
        <h3>Version 8.0 release 3 (29 Jul 2016)</h3>
        <ul>
          <li>Corrects the cause of a possible NullPointerException when processing Java 8 bytecode containing the MethodParameters attribute.</li>
        </ul>
        <h3>Version 8.0 release 2 (28 Apr 2016)</h3>
        <ul>
          <li>Corrects a bug which can result in JAR file corruption when opening classes from the file system and saving them to an archive in the Windows environment.</li>
        </ul>
        <h3>Version 8.0 release 1 (12 Mar 2016)</h3>
        <ul>
          <li>Enhances ProGuard Configuration File Translation so that additional paths can be appended to the generated classpath.</li>
        </ul>
        <h3>Version 8.0 release 0 (29 Dec 2015)</h3>
        <ul>
          <li>Implements the "hardening" of the existing Flow Obfuscation , Exception Obfuscation and String Encryption functions to make them more difficult to reverse.</li>
          <li>Enhances the String Encryption function with the introduction of the new "enhanced" option which provides enhanced encryption which is more difficult to reverse. The "enhanced" option has been made the default option instead of the "flowObfuscate" option.</li>
          <li>Enhances the String Encryption function to dramatically reduce the chances of a "Bytecode length greater than 65535" error when a class contains a very large number of String literals.</li>
          <li>Reduces some of the size limitations for the AutoReflection(TM) and Reference Obfuscation functions.</li>
          <li>Enhances the ZKM Script open statement by introducing "unskip" syntax which allows broad "skip" specifications to be modified by narrowing "unskip" specifications.</li>
          <li>Introduces a command line alternative to the ProGuard Configuration Translate tool .</li>
          <li>Introduces a command line tool to convert Zelix KlassMaster(TM) change logs into ProGuard mapping file format.</li>
          <li>Now requires a Java 7 (i.e. JDK 1.7) JVM to run.</li>
          <li>release 0a Corrects processing of XML files.</li>
          <li>release 0b</li>
          <li>Corrects processing of XML files.</li>
          <li>release 0c</li>
          <li>Corrects translation of ProGuard style configuration files.</li>
          <li>release 0d</li>
          <li>Corrects a cause of a NullPointerException when translating ProGuard style configuration.</li>
          <li>release 0e</li>
          <li>Provides alternative mechanisms for setting Special Configuration Options and System variables .</li>
          <li>release 0f</li>
          <li>Corrects a problem which could contribute to an "Invalid lambda deserialization" error.</li>
          <li>Corrects a problem which could occur when adjusting absolute paths to reflect obfuscated package names.</li>
        </ul>
        <h3>Version 7.0 release 16 (24 Dec 2015)</h3>
        <ul>
          <li>Corrects a possible NullPointerException when processing a ZKM Script stringEncryptionUnexclude statement.</li>
          <li>Improves the handling of Spring XML files.</li>
        </ul>
        <h3>Version 7.0 release 15 (07 Dec 2015)</h3>
        <ul>
          <li>Improves the handling of Android AndroidManifest.xml files.</li>
        </ul>
        <h3>Version 7.0 release 14 (27 Sep 2015)</h3>
        <ul>
          <li>Updates the translation of ProGuard style configuration files.</li>
        </ul>
        <h3>Version 7.0 release 13 (12 Sep 2015)</h3>
        <ul>
          <li>Corrects a problem in the handling of XML end tags.</li>
        </ul>
        <h3>Version 7.0 release 12 (20 Aug 2015)</h3>
        <ul>
          <li>Corrects a problem in the handling of certain MANIFEST.MF attribute values.</li>
        </ul>
        <h3>Version 7.0 release 11 (04 Aug 2015)</h3>
        <ul>
          <li>Corrects a problem with annotation values containing both '.' and '/' characters.</li>
        </ul>
        <h3>Version 7.0 release 10 (02 Jul 2015)</h3>
        <ul>
          <li>Corrects a problem which could cause a "ClassFormatError: Invalid constant pool index" runtime error message in certain unusual circumstances.</li>
        </ul>
        <h3>Version 7.0 release 9 (22 May 2015)</h3>
        <ul>
          <li>Corrects a problem which could cause a "Multiple 'property' definitions for property 'x'" runtime error message in certain unusual circumstances.</li>
          <li>release 9a Corrects another problem which could cause a "Multiple 'property' definitions for property 'x'" runtime error message in certain unusual circumstances.</li>
          <li>release 9b</li>
          <li>Corrects another problem which could cause a "Multiple 'property' definitions for property 'x'" runtime error message in certain unusual circumstances.</li>
          <li>Improves the handling of Hibernate XML files.</li>
          <li>release 9c</li>
          <li>Further improves the handling of Hibernate XML files.</li>
          <li>release 9d</li>
          <li>release 9e</li>
        </ul>
        <h3>Version 7.0 release 8 (11 May 2015)</h3>
        <ul>
          <li>Improves support for the Spring @ComponentScan annotation.</li>
          <li>Improves support for executable JAR files produced by Eclipse.</li>
        </ul>
        <h3>Version 7.0 release 7 (20 Apr 2015)</h3>
        <ul>
          <li>Corrects a "ClassFormatError: Short length on BootstrapMethods" error which could occur in certain circumstances.</li>
          <li>Corrects a source of a NullPointerException which could occur when using the GUI.</li>
        </ul>
        <h3>Version 7.0 release 6 (14 Apr 2015)</h3>
        <ul>
          <li>Corrects a bug in the handling of type annotations.</li>
          <li>Further reduces heap space usage. Reduction compared to version 6.1 now as much as 35% for version 6.1 functionality.</li>
        </ul>
        <h3>Version 7.0 release 5 (01 Apr 2015)</h3>
        <ul>
          <li>Corrects an "Ambiguous save file reference in 'saveAll' statement" error which can occur inappropriately.</li>
        </ul>
        <h3>Version 7.0 release 4 (31 Mar 2015)</h3>
        <ul>
          <li>Corrects a NullPointerException which can occur in the Android Studio environment.</li>
        </ul>
        <h3>Version 7.0 release 3 (20 Mar 2015)</h3>
        <ul>
          <li>Corrects bugs in the translation of FXML and Spring XML files.</li>
        </ul>
        <h3>Version 7.0 release 2 (18 Mar 2015)</h3>
        <ul>
          <li>Corrects bugs in the translation of ProGuard style "keep" commands.</li>
        </ul>
        <h3>Version 7.0 release 1 (04 Mar 2015)</h3>
        <ul>
          <li>Fixes a bug that can result in ResourceBundle.getBundle(String) Reflection API calls being incorrectly identified as unresolved.</li>
        </ul>
        <h3>Version 7.0 release 0 (10 Feb 2015)</h3>
        <ul>
          <li>Introduces Reference Obfuscation functionality. It allows you to selectively obscure field accesses and method calls in or to sensitive parts of your applications.</li>
          <li>Introduces the "extra aggressive" Flow Obfuscation option which provides deeper flow obfuscation.</li>
          <li>Enhances the ZKM Script exclusion syntax by introducing the archive qualifier . The archive qualifier allows you to specify classes contained in specific archive files. (E.g. "MyJar*.jar"!*.* )</li>
          <li>Reduces heap space usage by as much as 20%.</li>
        </ul>
        <h3>Version 6.1 release 9 (09 Feb 2015)</h3>
        <ul>
          <li>Corrects a NullPointerException in incremental obfuscation.</li>
          <li>release 9a Changes the default StackMapTable algorithm to work around a change in the Oracle verifier which could cause a "VerifyError: Inconsistent stackmap frames" error.</li>
        </ul>
        <h3>Version 6.1 release 8 (23 Nov 2014)</h3>
        <ul>
          <li>Corrects a bug in the handling of JAR file manifests.</li>
        </ul>
        <h3>Version 6.1 release 7 (30 Oct 2014)</h3>
        <ul>
          <li>Corrects an AutoReflection(TM) issue which could occur when the file encoding at the time of obfuscation differs from that at runtime.</li>
        </ul>
        <h3>Version 6.1 release 6 (13 Oct 2014)</h3>
        <ul>
          <li>Corrects an AutoReflection(TM) issue.</li>
        </ul>
        <h3>Version 6.1 release 5 (22 Aug 2014)</h3>
        <ul>
          <li>Improves the handling of FXML documents.</li>
        </ul>
        <h3>Version 6.1 release 4 (31 Jul 2014)</h3>
        <ul>
          <li>Improves the handling of JAR file manifests.</li>
        </ul>
        <h3>Version 6.1 release 3 (14 Apr 2014)</h3>
        <ul>
          <li>Corrects a problem which could cause a "ClassFormatError: StackMapTable format error" in certain unusual circumstances.</li>
          <li>Corrects a problem which could cause a NullPointerException when processing FXML.</li>
        </ul>
        <h3>Version 6.1 release 2 (10 Apr 2014)</h3>
        <ul>
          <li>Corrects a problem in version 6.1.1 which could cause a VerifyError or a "Stack mismatch" error if Zelix KlassMaster(TM) is run in verbose mode.</li>
          <li>Corrects another obscure cause of VerifyErrors or "Stack mismatch" errors.</li>
          <li>Corrects the handling of Java 8 "MethodParameter" attributes and enhances the obfuscate statement by introducing the methodParameters keyword.</li>
        </ul>
        <h3>Version 6.1 release 1 (03 Apr 2014)</h3>
        <ul>
          <li>Corrects a problem with the ProGuard Configuration Translate window.</li>
          <li>Corrects a problem in the AutoReflection(TM) functionality which could result in a VerifyError.</li>
          <li>Corrects a problem in the Change Log and Incremental Obfuscation functionality which could result in a "parse error".</li>
        </ul>
        <h3>Version 6.1 release 0 (14 Jan 2014)</h3>
        <ul>
          <li>Improves support for JavaFX and FXML.</li>
          <li>Enhances the obfuscate statement by introducing the " keepBalancedLocks " keyword to support the Android ART verifier. See the documentation for the Obfuscate Options dialog for more detail.</li>
        </ul>
        <h3>Version 6.0 release 2 (03 Dec 2013)</h3>
        <h3>Version 6.0 release 1 (10 Oct 2013)</h3>
        <ul>
          <li>Corrects a StringIndexOutOfBoundsException which could occur when processing a JAR file manifest containing a "Class-Path" attribute.</li>
          <li>Corrects an "Inconsistent stack heights" error which could occur in certain unusal circumstances.</li>
          <li>Sub-releases: sub-release 1a Corrects the cause of an "Invalid classpath" that could occur when a JAR in the classpath contains a complex "Class-Path" attribute.</li>
          <li>sub-release 1b</li>
          <li>Corrects a NullPointerException which could occur when processing dead code.</li>
          <li>sub-release 1c</li>
          <li>Corrects another "Inconsistent stack heights" error which could occur in certain unusal circumstances.</li>
          <li>Provides support for JavaFX manifests and preliminary support for FXML files.</li>
          <li>sub-release 1d</li>
          <li>Corrects a bug in the translation of the -keepattributes command in a ProGuard style configuration file.</li>
          <li>sub-release 1e</li>
          <li>Changes the ZKM_ADD_MANIFEST_CLASSPATHS configuration option so that it defaults to false.</li>
          <li>Corrects an issue where spurious output was written to System.err in certain situations.</li>
        </ul>
        <h3>Version 6.0 release 0 (19 Sep 2013)</h3>
        <ul>
          <li>Implements preliminary support for the Java 8 bytecode including the invokedynamic instruction.</li>
          <li>Introduces broad support for the ProGuard obfuscator's configuration and mapping files to allow much easier migration from ProGuard to Zelix KlassMaster(TM). This allows Zelix KlassMaster(TM) to execute most ProGuard configuration files and take the place of ProGuard in build environments such as the ADT (Android Development Tools) plugin for Eclipse.</li>
          <li>Introduces the GUI ProGuard Configuration Translate Tool which can translate the ProGuard obfuscator's configuration files into ZKM Script.</li>
          <li>Tweaks the Trim functionality and the handling of stack maps to further reduce the size of obfuscated bytecode.</li>
          <li>Enhances the saveAll statement to allow the specification of a default archive file as opposed to a default directory.</li>
          <li>Enhances the open statement by allow the use of wildcards such as "*.class" and "*.xml".</li>
          <li>Enhances the obfuscate statement by introducing the " mixedCaseClassNames " keyword to allow the use of mixed case obfuscated package and class names,</li>
          <li>the " preverify " keyword to allow you to switch off the preverification of bytecode in situations where the bytecode will not be run on a JVM.</li>
          <li>Enhances the syntax of all ZKM Script exclusion statements</li>
          <li>to allow annotations and wildcards to appear in extends and implements clauses.</li>
          <li>to allow exclusions based upon the presence or absence of the " synthetic ", " enum ", " bridge " or " annotation " attributes.</li>
          <li>Enhances the trim statement by adding the " deleteDebugExtensionAttributes " parameter to allow the removal of " SourceDebugExtensionAttribute " attributes.</li>
          <li>Removes the deprecated saveAllOld statement.</li>
        </ul>
        <h3>Version 5.5 release 9 (23 Jun 2013)</h3>
        <ul>
          <li>Corrects a bug in the processing of MANIFEST.MF files in certain unusual circumstances.</li>
        </ul>
        <h3>Version 5.5 release 8 (21 Mar 2013)</h3>
        <ul>
          <li>Modified to reduce heap and stack space requirements when processing very large and complex methods.</li>
        </ul>
        <h3>Version 5.5 release 7 (01 Mar 2013)</h3>
        <ul>
          <li>Corrects a bug which could cause a NullPointerException or perhaps a StackMapTable VerifyError in certain unusual classes.</li>
        </ul>
        <h3>Version 5.5 release 6 (25 Jan 2013)</h3>
        <ul>
          <li>Corrects a bug which could trigger a "VerifyError: ... Illegal return from subroutine" error in flow obfuscated bytecode.</li>
          <li>Corrects a bug which could cause a NullPointerException when attempting to list the contents of certain Windows directories.</li>
        </ul>
        <h3>Version 5.5 release 5 (28 Nov 2012)</h3>
        <ul>
          <li>Corrects a bug which could trigger a "VerifyError: Inconsistent stackmap frames" error in obfuscated bytecode.</li>
          <li>Corrects a bug which could cause a NullPointerException in the Stack Trace Translate Tool .</li>
        </ul>
        <h3>Version 5.5 release 4 (05 Oct 2012)</h3>
        <ul>
          <li>Corrects a bug in the processing of Spring and Hibernate configuration XML.</li>
          <li>release 4a Corrects a bug that could cause an "IllegalArgumentException: Comparison method violates its general contract!" error when running Zelix KlassMaster(TM) on Java 7.</li>
        </ul>
        <h3>Version 5.5 release 3 (18 Sep 2012)</h3>
        <ul>
          <li>Corrects a bug in the processing of exclusion parameters which specify a method parameter type which is an inner class. (E.g. "exclude *.* *(pack0.Class0$Inner0);")</li>
          <li>Corrects a bug that could cause a StackOverflowError in certain rare circumstances.</li>
        </ul>
        <h3>Version 5.5 release 2 (22 Aug 2012)</h3>
        <ul>
          <li>Corrects a bug that could cause a NullPointerException in certain circumstances when processing multi-dimensional arrays of primitive types.</li>
        </ul>
        <h3>Version 5.5 release 1 (24 May 2012)</h3>
        <ul>
          <li>Corrects a bug in the handling of META-INF/INDEX.LIST files.</li>
        </ul>
        <h3>Version 5.5 release 0 (15 Feb 2012)</h3>
        <ul>
          <li>Introduces the AutoReflection(TM) functionality which allows the automatic handling of any Java Reflection API calls that Zelix KlassMaster(TM) could not fully resolve. This invloves the enhancement of the obfuscate statement by introducing the "autoReflectionHandling" , "autoReflectionPackage" and "autoReflectionHash" parameters,</li>
          <li>the introduction of the accessedByReflection , accessedByReflectionExclude and resetAccessedByReflection statements.</li>
          <li>Enhances the obfuscate statement by introducing the "obfuscate" and "keep" values of the "localVariables" parameter. These new settings allow the local variable debugging information to be obfuscated or kept unchanged.</li>
          <li>Enhances the ZKM Script exclusion statements by introducing method parameter placeholders (i.e. '?') in the specification of method signatures. See ZKM Script Exclusions Tutorial for examples of the use of method parameter placeholders.</li>
          <li>Enhances the ZKM Script open statement's "skip" syntax so that you can tell Zelix KlassMaster(TM) to NOT open specified XML or TLD files.</li>
        </ul>
        <h3>Version 5.4 release 6 (11 Jun 2011)</h3>
        <ul>
          <li>Corrects a bug which can occur when the ZKM Script obfuscate statement's collapsePackagesWithDefault parameter is used when there are a number of "package-info" classes.</li>
          <li>Enhances the ZKM Script open statement's "skip" syntax processing so that the skipped archives and classes are prepended to the classpath in the order in which the parent archives appeared in the open statement rather than in an unpredictable order.</li>
        </ul>
        <h3>Version 5.4 release 5 (01 Mar 2011)</h3>
        <ul>
          <li>Corrects a bug in the handling of Hibernate and Spring XML property names.</li>
        </ul>
        <h3>Version 5.4 release 4 (11 Feb 2011)</h3>
        <ul>
          <li>Introduces the ZKM_IGNORE_MISSING_MEMBERS configuration option that tells Zelix KlassMaster(TM) to ignore missing fields and methods in classes in the classpath.</li>
          <li>Corrects a bug that prevented some class names in Hibernate and Spring XML from being translated to match obfuscated class names.</li>
        </ul>
        <h3>Version 5.4 release 3 (26 Nov 2010)</h3>
        <ul>
          <li>Corrects a bug that caused some class names in Hibernate and Android XML to be output using the '/' character as the package delimiter.</li>
          <li>Corrects a bug that caused class names appearing in Android XML files to not be translated in some scenarios.</li>
        </ul>
        <h3>Version 5.4 release 2 (28 Oct 2010)</h3>
        <ul>
          <li>Changed to read and write a MIDP JAD file using the UTF-8 character encoding by default.</li>
          <li>Introduces the ZKM_JAD_ENCODING configuration option that allows you to specify the character encoding to be used when reading and writing a MIDP JAD file.</li>
        </ul>
        <h3>Version 5.4 release 1 (11 Oct 2010)</h3>
        <ul>
          <li>Corrects a bug in the Exception Obfuscation functionality which could cause problems with pre-existing exception handlers.</li>
        </ul>
        <h3>Version 5.4 release 0 (17 Sep 2010)</h3>
        <ul>
          <li>Enhances the Smart Save(TM) technology so that it can better translate class, package, field and method names in Spring, Hibernate(TM), EJB, Ibatis(TM) and Android(TM) XML files.</li>
          <li>Enhances the obfuscate statement by introducing the "exceptionObfuscation" parameter. The Obfuscate Options dialog is similarly enhanced with the addition of the "Exception obfuscation" drop down list. These equivalent options enhance obfuscation by providing an additional kind of Flow Obfuscation.</li>
          <li>Enhances the ZKM Script exclusion statements by introducing the " containing" clause. The " containing" clause allows you to specify a class for exclusion or unexclusion based upon the methods or fields that it contains. (The exclusion statements are the trimExclude , trimUnexclude , exclude , unexclude , obfuscateFlowExclude , obfuscateFlowUnexclude , stringEncryptionExclude , stringEncryptionUnexclude , existingSerializedClasses , fixedClasses statements.) See ZKM Script Exclusions Tutorial for examples of the " containing" clause.</li>
          <li>Enhances the trim statement by introducing the deleteExceptionAttributes parameter. Similarly the Trim Options dialog is enhanced by the delete Exception attributes attribute. These equivalent enhancements can reduce the bytecode size without effecting the way the bytecode executes at runtime.</li>
          <li>Changes the Classpath , Select Output Change Log File and Change Logs dialogs to allow multiple selection.</li>
          <li>Changes the Open Classes to allow the selection of TLD files.</li>
          <li>Adds additional default exclusions and default Trim exclusions for the Java Persistence API.</li>
          <li>Removes the long deprecated "unobfuscate" statement from the ZKM Script language.</li>
        </ul>
        <h3>Version 5.3 release 3 (17 Aug 2010)</h3>
        <ul>
          <li>Corrects a bug that could cause the incorrect handling of some relative file paths begining with a directory that has the initial character '.'.</li>
          <li>Other minor bug fixes.</li>
        </ul>
        <h3>Version 5.3 release 2 (21 Apr 2010)</h3>
        <ul>
          <li>Corrects a bug that could cause an archive file specified in a classpath statement to remain locked after Zelix KlassMaster(TM) terminates.</li>
          <li>release 2a Corrects a bug that could cause a VerifyError error in obfuscated bytecode in certain unusual circumstances.</li>
          <li>Corrects a bug in the handling of Service Provider configuration files.</li>
        </ul>
        <h3>Version 5.3 release 1 (13 Jan 2010)</h3>
        <ul>
          <li>Corrects a bug that could cause a "Stack size too large" VerifyError after String encrypting certain unusual classes.</li>
        </ul>
        <h3>Version 5.3 release 0 (10 Dec 2009)</h3>
        <ul>
          <li>Introduces the obfuscateFlowUnexclude and stringEncryptionUnexclude statements.</li>
          <li>Enhances the saveAll statement to allow the specification of different save paths for specific opened files.</li>
          <li>Enhances the open statement to allow the opening of XML files direct from the file system.</li>
          <li>Enhanced to automatically prevent the renaming of the public static main(String[]) method in a class that appears in the Main-Class: attribute of a manifest file.</li>
          <li>Enhanced to update the names appearing in a INDEX.LIST file if necessary to match obfuscated name.</li>
        </ul>
        <h3>Version 5.2 release 4 (01 May 2009)</h3>
        <ul>
          <li>Corrects a bug that could cause a StringIndexOutOfBoundsException when opening classes.</li>
          <li>release 4a Corrects a bug that could cause a NoSuchFieldError error in obfuscated bytecode in certain unusual circumstances.</li>
          <li>release 4b Corrects a bug that could cause a VerifyError "Register &lt;n&gt; contains wrong type" in certain unusual obfuscated bytecode.</li>
          <li>release 4c Corrects a bug that could cause an assert failure when obfuscating complex generic inner classes.</li>
          <li>release 4d Corrects a bug that could cause a NullPointerException when processing complex generic classes.</li>
        </ul>
        <h3>Version 5.2 release 3 (05 Mar 2009)</h3>
        <ul>
          <li>Introduces the ZKM_DELETE_EMPTY_DIRECTORIES configuration option that allows you to tell Zelix KlassMaster(TM) to not copy empty directories to the obfuscated archive file.</li>
          <li>release 3a Corrects the ZKM_DELETE_EMPTY_DIRECTORIES configuration option so that it works correctly with the Trim function.</li>
        </ul>
        <h3>Version 5.2 release 2 (13 Feb 2009)</h3>
        <ul>
          <li>Corrects a "java.io.IOException: invalid manifest format" error that could occur.</li>
          <li>Introduces the ZKM_TEST_HIERARCHY configuration option that allows you to tell Zelix KlassMaster(TM) to not test for gaps in the inheritance hierarchy.</li>
          <li>release 2a Corrects a problem in the ZKM_TEST_HIERARCHY configuration option .</li>
        </ul>
        <h3>Version 5.2 release 1 (22 Jan 2009)</h3>
        <ul>
          <li>Improved handling of errors in the Apache Ant environment.</li>
          <li>release 1a Corrects a problem in the exclude statement's method name prefix exclusion functionality that could occur when linked field names are excluded from obfuscation.</li>
        </ul>
        <h3>Version 5.2 release 0 (29 Oct 2008)</h3>
        <ul>
          <li>Enhances the open statement by allowing the use of a wildcard to specify an archive file.</li>
          <li>Enhances Incremental Obfuscation functionality by ensuring that any line number mappings in input change logs are copied across to the output change log.</li>
          <li>Enhances the obfuscate statement's localVariables parameter by introducing the keepVisibleMethodParametersIfNotObfuscated setting. If the localVariables parameter is set to keepVisibleMethodParametersIfNotObfuscated , then the parameter variable names of public and protected methods are retained only if the name of the method is not obfuscated and</li>
          <li>the names of the containing class and package are not obfuscated.</li>
          <li>Enhances the Stack Trace Translate Tool and the Stack Trace Translate Tool API by allowing more than one change log to be specified.</li>
        </ul>
        <h3>Version 5.1 release 5 (19 Aug 2008)</h3>
        <ul>
          <li>Corrects a classpath problem that could occur when using the Stack Trace Translate Tool .</li>
        </ul>
        <h3>Version 5.1 release 4 (08 Aug 2008)</h3>
        <ul>
          <li>Corrects a "duplicate entry" bug that could occur when two classes with same name where "skipped" using the open statement.</li>
        </ul>
        <h3>Version 5.1 release 3 (27 Jun 2008)</h3>
        <ul>
          <li>Improves the handling of corrupt JAR file manifests.</li>
        </ul>
        <h3>Version 5.1 release 2 (05 Jun 2008)</h3>
        <ul>
          <li>Corrects a NullPointerException that could occur when using the obsolete "addCorruptInfo" parameter of the obfuscate statement.</li>
        </ul>
        <h3>Version 5.1 release 1 (29 Apr 2008)</h3>
        <ul>
          <li>Stops the creation of an empty file named "Z_log.txt".</li>
        </ul>
        <h3>Version 5.1 release 0 (07 Dec 2007)</h3>
        <ul>
          <li>Now requires a Java 5 (i.e. JDK 1.5) JVM to run.</li>
          <li>Enhanced to exclude statement to allow the the exclusion of method name prefixes such as get or set . The names of the methods with matching prefixes are then "linked" to the name of a matching field. See the exclusions tutorial for more detail.</li>
          <li>Enhanced the obfuscate statement by adding the localVariables parameter. When the localVariables parameter is set to keepVisibleMethodParameters , the parameter variable names of public or protected methods are retained. This is of use when obfuscating a library that will be used within an IDE.</li>
          <li>Introduces the ZKM_FIXED_TOTALLY_UNCHANGED configuration option that allows you to tell Zelix KlassMaster(TM) to copy across any classes that you have specified as "fixed" completely unchanged.</li>
          <li>Enhanced the fixed classes functionality so that the line numbers of a specified class are never scrambled.</li>
          <li>Enhanced to open statement's "skip" syntax so that you can tell Zelix KlassMaster(TM) to not open a specified class file in an archive file. The new syntax is the -"x.jar!com/mycompany/MyClass.class" .</li>
          <li>Enhanced to open statement's "skip" functionality so that skipped archives or class files are automatically added to the effective classpath.</li>
          <li>Introduces the ZKM_REFLECTION_WARNINGS configuration option that allows you to supress Java Reflection API warnings in the Zelix KlassMaster(TM) log.</li>
          <li>Introduces the ZKM_CREATE_BACKUP configuration option that allows you to prevent overwritten JAR files being backed up with the .BACKUP extension.</li>
        </ul>
        <h3>Version 5.0 release 7 (01 Nov 2007)</h3>
        <ul>
          <li>Corrected a bug that could cause a NullPointerException in the incremental obfuscation of very complex class hierarchies.</li>
        </ul>
        <h3>Version 5.0 release 6 (22 Oct 2007)</h3>
        <ul>
          <li>Corrected a bug that prevented the renaming of single classes interactively using the GUI.</li>
        </ul>
        <h3>Version 5.0 release 5 (19 Oct 2007)</h3>
        <ul>
          <li>Corrected a bug that could cause a NullPointerException in input change log processing.</li>
          <li>Corrected a bug that resulted the default directory specification being ignored in some circumstances in classpath processing.</li>
        </ul>
        <h3>Version 5.0 release 4 (26 Sep 2007)</h3>
        <h3>Version 5.0 release 3 (07 Jun 2007)</h3>
        <ul>
          <li>Corrected a bug that could cause problems with class suffix and prefix (i.e. &lt;link&gt; ) exclusions.</li>
        </ul>
        <h3>Version 5.0 release 2 (19 Jan 2007)</h3>
        <ul>
          <li>Corrected a bug that could cause an inappropriate "WARNING: Input change log &lt;ChangeLogName&gt; : Package &lt;PackageName&gt; no longer appears in the opened classes and will be assumed to be no longer used" message.</li>
        </ul>
        <h3>Version 5.0 release 1 (11 Dec 2006)</h3>
        <ul>
          <li>Corrected a bug that could cause an inappropriate "Check &lt;link&gt; search paths" message.</li>
        </ul>
        <h3>Version 5.0 release 0 (15 Nov 2006)</h3>
        <ul>
          <li>Now requires a JDK 1.4 JVM to run.</li>
          <li>Enhanced to process Java 6 ( JDK 1.6 ) classes. Obfuscated Java 6 bytecode will run correctly even if the -XX:-FailOverToOldVerifier JVM parameter is used.</li>
          <li>Enhances the ZKM Script exclusion statements such as trimExclude and exclude to allow exclusion based on class, field, method and method parameter annotations . Allows better automatic handling of EJB 3 applications.</li>
          <li>Enhances Incremental Obfuscation functionality to allow only part of an application to be opened. Requires the use of the new allClassesOpened parameter with the obfuscate statement.</li>
          <li>Enhances Incremental Obfuscation functionality so that any line number mappings present in an input change log will be enforced provided line number scrambling is specified in the corresponding obfuscate statement.</li>
          <li>Enhances the obfuscate statement by adding the randomize parameter which allows you to specify that new obfuscated name generation should be random (i.e. not consistent across releases).</li>
          <li>Enhances the obfuscate statement by adding the deriveGroupingsFromInputChangeLog parameter.</li>
          <li>Changes the default for the trim statement deleteAnnotationAttributes parameter from true to false .</li>
          <li>Changes the default for the obfuscate statement keepGenericsInfo parameter from false to true .</li>
          <li>ZKMTask Ant Task enhanced to allow easy setting of System properties</li>
          <li>Classpath functionality enhanced to search archives nested within other archives.</li>
        </ul>
        <h3>Version 4.5 release 1 (12 July 2006)</h3>
        <ul>
          <li>Enhances the handling of XML files.</li>
          <li>Corrects a bug in the ZKM Script open statement's nested archive exclusion.</li>
        </ul>
        <h3>Version 4.5 release 0 (19 April 2006)</h3>
        <ul>
          <li>Enhances Trim functionality by automatically excluding classes and some fields referenced by manifest or XML files.</li>
          <li>Enhances the ZKM Script classpath statement by allowing wildcards in the final qualifier of a file path. (e.g /lib/*.jar )</li>
          <li>Enhances the ZKM Script open statement by allowing wildcards in the final file name when excluding nested archives. (e.g -"x.ear!y.war!WEB-INF/lib/*.jar" )</li>
          <li>Introduces the ZKM_RANDOMIZE_OBFUSCATION configuration option that allows you to specify that new obfuscated name generation should be random (i.e. not consistent across releases).</li>
          <li>Corrects a NullPointerException which could occur in processing XML files during obfuscation.</li>
        </ul>
        <h3>Version 4.4 release 6 (02 November 2005)</h3>
        <ul>
          <li>Corrects bugs in the trimming and obfuscation of annotation attributes.</li>
          <li>Corrects a NullPointerException which could occur during obfuscation.</li>
          <li>release 4a Reports a fatal error if a file directly specified in a ZKM Script "open" statement does not exist or</li>
          <li>has an unrecognized file name suffix.</li>
          <li>Corrects an ArrayIndexOutOfBoundsException which could occur when opening certain unusual classes.</li>
          <li>Corrects a bug present since version 4.4.0 which prevented the "-dte" command line parameter from being processed.</li>
          <li>release 4b</li>
          <li>Corrects a NullPointerException which could occur during Name Obfuscation.</li>
          <li>release 4c</li>
          <li>Corrects a bug in the processing of some generics involving wildcards.</li>
          <li>release 4d</li>
          <li>Enhances the Change Log API.</li>
          <li>release 4e</li>
          <li>release 4f</li>
        </ul>
        <h3>Version 4.4 release 5 (12 October 2005)</h3>
        <ul>
          <li>Enhances Incremental Obfuscation to better handle the introduction of new fields in superclasses and interfaces.</li>
          <li>Improves reporting of ZKM Script warning and message counts to the command line.</li>
        </ul>
        <h3>Version 4.4 release 4 (12 August 2005)</h3>
        <ul>
          <li>Corrects a NullPointerException that could occur when obfuscating bytecode containing "dead code".</li>
          <li>Improves error reporting when obfuscating certain corrupted bytecode files.</li>
          <li>release 4a Corrects a spurious "ERROR: input change log '&lt;changeLogName&gt;': Class '&lt;className&gt;' appears more than once" message that could occur in very unusual circumstances.</li>
          <li>Corrects a StackOverflowError that could occur with certain complex exception handling.</li>
        </ul>
        <h3>Version 4.4 release 3 (19 July 2005)</h3>
        <ul>
          <li>Corrects a bug that could cause Zelix KlassMaster(TM) to perform very poorly when opening classes with certain unusually complex methods.</li>
        </ul>
        <h3>Version 4.4 release 2 (17 June 2005)</h3>
        <ul>
          <li>Introduces the -ro command prompt option to allow you to redirect stdout to a file.</li>
          <li>Enhances the Zelix KlassMaster(TM) build tool API to allow you to redirect stdout and/or stderr to files.</li>
          <li>Reports an error rather than a fatal error if part of the classpath in a ZKM Script "classpath" statement is invalid.</li>
          <li>release 2a Corrects a NullPointerException bug in the "Obfuscate Options" dialog.</li>
        </ul>
        <h3>Version 4.4 release 1 (24 May 2005)</h3>
        <ul>
          <li>Corrects a bug in the handling of UTF-16 XML files.</li>
        </ul>
        <h3>Version 4.4 release 0 (20 April 2005)</h3>
        <ul>
          <li>Introduces "loose" input change logs .</li>
          <li>Introduces the ability to specify more than one input change log.</li>
          <li>Makes minor changes to the Stack Trace Translate Tool API .</li>
        </ul>
        <h3>Version 4.3 release 6 (01 December 2004)</h3>
        <ul>
          <li>Corrects bugs in the handling of Annotations that could cause errors like "Invalid type index" or "Wrong type at constant pool index".</li>
          <li>release 6a Corrects a bug in the handling of complex annotations.</li>
          <li>Corrects a bug in Input Change Log processing which could occur if no methods appear in the change log.</li>
          <li>release 6d</li>
          <li>Corrects a bug in the handling of enums.</li>
        </ul>
        <h3>Version 4.3 release 5 (13 November 2004)</h3>
        <ul>
          <li>Corrects a bug that could cause an ArrayIndexOutOfBoundsException when trimming or obfuscating bytecode generated with the new JDK 1.5.</li>
        </ul>
        <h3>Version 4.3 release 4 (16 September 2004)</h3>
        <ul>
          <li>Corrects a bug that could cause a ClassCastException when trimming bytecode generated with the new JDK 1.5.</li>
        </ul>
        <h3>Version 4.3 release 3 (05 September 2004)</h3>
        <ul>
          <li>Enhances the obfuscate statement by adding the newNamesPrefix parameter that allows you to specify a prefix for all new obfuscated package, class, field and method names.</li>
          <li>Corrects a bug that could cause the Flow Obfuscation function to run very inefficiently when processing very deep implementation hierarchies.</li>
          <li>Introduces the ZKM_NEW_CHANGE_LOG_ENCODING configuration option that allows you to specify the character encoding to be used when generating a change log.</li>
        </ul>
        <h3>Version 4.3 release 2 (08 July 2004)</h3>
        <ul>
          <li>Allows you to choose whether you use aggressive method renaming. Aggressive method renaming was introduced with Zelix KlassMaster(TM) 4.3 and was initially switched on by default.</li>
          <li>Improves error handling in Zelix KlassMaster's XML parser.</li>
          <li>Fixes a bug in the way Zelix KlassMaster(TM) writes to JAR files.</li>
        </ul>
        <h3>Version 4.3 release 1 (29 June 2004)</h3>
        <ul>
          <li>Fixes a bug that could cause XML files to be written to the obfuscated archive using the wrong character encoding.</li>
          <li>Enhances the open statement with the -"x.ear!y.war!z.jar" syntax so that you can tell Zelix KlassMaster(TM) to not open a specified nested archive file.</li>
        </ul>
        <h3>Version 4.3 release 0 (16 June 2004)</h3>
        <ul>
          <li>Enhanced to support bytecode generated with the JDK 1.5 including ability to specify whether annotation attributes should be removed. The "deleteAnnotationAttributes" parameter has been added to the trim statement and "delete annotation attributes" option has been added to the Trim Options dialog.</li>
          <li>ability to specify whether generics information should be removed. The "keepGenericsInfo" parameter has been added to the obfuscate statement and "keep generics information" option has been added to the Obfuscate Options dialog.</li>
          <li>Adds the ability to retain inner class information only if the inner class has not been name obfuscated. The obfuscate statement's "keepInnerClassInfo" parameter has been given an extra value of "ifNameNotObfuscated" .</li>
          <li>Enhanced control flow analysis.</li>
        </ul>
        <h3>Version 4.2 release 4 (05 April 2004)</h3>
        <ul>
          <li>Corrects a bug that could result in a VerifyError in MIDlets obfuscated using the Zelix KlassMaster(TM) Wireless ToolKit Obfuscator Plugin.</li>
        </ul>
        <h3>Version 4.2 release 3 (11 March 2004)</h3>
        <ul>
          <li>Works around a bug in the IBM JVM 1.4 that could cause a VerifyError or IncompatibleClassChangeError in certain circumstances.</li>
        </ul>
        <h3>Version 4.2 release 2 (13 January 2004)</h3>
        <ul>
          <li>Corrects a NullPointerException that could occur during String encryption in certain unusual circumstances.</li>
        </ul>
        <h3>Version 4.2 release 1 (22 December 2003)</h3>
        <ul>
          <li>Corrects a NullPointerException that could occur when a class name is matched by an unresolved exclude statement &lt;link&gt; parameter and</li>
          <li>an existingSerializedClasses or a fixedClasses statement.</li>
        </ul>
        <h3>Version 4.2 release 0 (11 November 2003)</h3>
        <ul>
          <li>Enhances effectiveness the name obfuscation function by allowing the package structure to be collapsed. See the collapse packages documentation for more detail.</li>
          <li>Allows J2ME MIDlets to be obfuscated AFTER preverification. This simplifies the integration of Zelix KlassMaster(TM) into the J2ME build process. See the J2ME obfuscation tutorial for more detail.</li>
          <li>Attempts to automatically handle unrecognized, non-standard attributes within the bytecode.</li>
          <li>Improves the handling of String literals containing relative resource file paths.</li>
          <li>Name obfuscation enhanced to automatically exclude the name of the outer class if the name of an inner class has been excluded from being renamed and inner class format is being retained.</li>
        </ul>
        <h3>Version 4.1 release 2 (15 September 2003)</h3>
        <ul>
          <li>Corrects a bug that could cause an OutOfMemoryError if retaining inner class format when obfuscating.</li>
          <li>release 2a Corrects a bug that occurred when an identical class file was opened from different archives. The obfuscated class file was not being copied to each corresponding new archive.</li>
        </ul>
        <h3>Version 4.1 release 1 (05 August 2003)</h3>
        <ul>
          <li>Corrects a NullPointerException that could occur when opening classes which used the Java Reflection API to access a field named "TYPE".</li>
        </ul>
        <h3>Version 4.1 release 0 (24 July 2003)</h3>
        <ul>
          <li>Enhances String encryption to dramatically reduce its runtime performance impact,</li>
          <li>its side effects.</li>
          <li>Replaces the Change Log Translate tool with the Stack Trace Translate tool which</li>
          <li>translates an entire stack trace as a whole rather than one line at a time,</li>
          <li>can analyze the obfuscated bytecode to greatly improve the quality of the translation,</li>
          <li>has a Java API for programmatic access.</li>
          <li>Introduces the ZKM Script unexclude statement which operates on the results of exclude statements to allow finer control of name obfuscation exclusions.</li>
          <li>Introduces the ZKM Script trimUnexclude statement which operates on the results of trimExclude statements to allow finer control of trim exclusions.</li>
          <li>Adds a Sun J2ME Wireless Toolkit plugin .</li>
          <li>Adds the "-tl", "-de", "-dte" and "-dd" start up parameters to allow the specification of alternative trim log, default exclusion and default trim exclusion files.</li>
          <li>Automatically updates the directory qualifiers of Strings that refer to resource files to reflect obfuscated package names.</li>
          <li>Enhances the Java Reflection API analysis so that the Trim function works better with bytecode compiled with the Jikes compiler.</li>
          <li>Corrects the ZKM Script trim statement so that it takes account of preceding fixedClasses and exisitingSerializedClasses statements.</li>
          <li>Simplifies the Classpath dialog.</li>
          <li>Fixes a bug in the Trim function that prevented "unknown" attributes from being removed from fields and methods if the deletion of unknown attributes was specified.</li>
        </ul>
        <h3>Version 4.0 release 5 (16 June 2003)</h3>
        <ul>
          <li>Corrects a bug that could cause a spurious "Stack mismatch with types: ..." error when obfuscating classes compiled with Jikes.</li>
        </ul>
        <h3>Version 4.0 release 4 (18 April 2003)</h3>
        <ul>
          <li>Corrects a bug that prevented the ZKM Script "execute" statement from working in Windows XP.</li>
          <li>release 4a Works around a JBuilder problem that can occur when obfuscating inner class names.</li>
          <li>Adds additional default Trim exclusions for RMI applications.</li>
        </ul>
        <h3>Version 4.0 release 3 (15 Jan 2003)</h3>
        <ul>
          <li>Corrects a bug in the Trim function that could result in the inappropriate removal of some methods in certain unusually complex inheritance and implementation hierarchies.</li>
          <li>Broadens the exclusion parameters associated with the "Non-extensible class library" and "Extensible framework" application types on the "Trim Exclusions" and "Name Exclusions" windows.</li>
        </ul>
        <h3>Version 4.0 release 2 (10 Jan 2003)</h3>
        <ul>
          <li>Corrects a bug in the "Open Dialog Helper - Open Classes" window where clicking on the "Cancel" button disabled the browser window menus.</li>
          <li>Corrects a bug in the Name Obfuscation function that resulted in the fields of interfaces which had no implementors being always unobfuscated.</li>
          <li>Adds the exclusion of no-argument constructors to the defaultTrimExclude.txt file and to the internal default trim exclusions.</li>
        </ul>
        <h3>Version 4.0 release 1 (01 Jan 2003)</h3>
        <ul>
          <li>Corrects a performance problem in the Flow Obfuscation function which occurred when obfuscating a number of overlapping JAR files.</li>
          <li>Corrects a bug in the Flow Obfuscation function which occurred when obfuscating unusually complex overlapping JAR files.</li>
        </ul>
        <h3>Version 4.0 release 0 (22 Dec 2002)</h3>
        <ul>
          <li>Introduces the Trim function which removes unused classes, fields and methods. The Trim function consists of a GUI menu option and the new ZKM Script statements trimExclude , resetTrimExclusions and trim .</li>
          <li>Introduces the GUI Build Helper tool to guide users through the trim and obfuscate process.</li>
          <li>Introduces a help function to the GUI.</li>
          <li>Conversion of the GUI to Swing with general enhancements for improved functionality and ease of use.</li>
          <li>Enhancement of the Classpath dialog to allow multiple new items to be selected at once.</li>
          <li>Obfuscation enhanced to obfuscate the name of an inner class even though the name of the outer class has been excluded from being renamed.</li>
          <li>the Build tool interface enhanced to allow a Properties object to be passed to Zelix KlassMaster(TM) for use in substituting System Variables in the ZKM Script.</li>
          <li>ZKM Script exclude statement enhanced to allow class exclusion parameters that also exclude all the fields and methods of the matching class. Uses the "+" syntax.</li>
          <li>ZKM Script classpath statement enhanced to allow paths to be broken up as separate Strings on separate lines.</li>
          <li>ZKM Script saveAll statement asIs parameter enhanced to work at the level of the individual entries rather than the archive as a whole.</li>
          <li>Removes the public static main(java.lang.String[]) exclusion parameter from the defaultExclude.txt file and the internal default trim exclusions to allow more precise exclusions. This may make it necessary to modify some existing ZKM Scripts .</li>
          <li>File paths in ZKM Scripts now automatically translated at the time of execution from Windows format to Unix format and visa versa where possible.</li>
          <li>Introduces the groupings and resetGroupings statements.</li>
          <li>release 0a Adds the "*.* static createUI(javax.swing.JComponent)" parameter to the defaultExclude.txt and defaultTrimExclude.txt files,</li>
          <li>Removes a debug statement from the ZKMTask class included in the distribution.</li>
        </ul>
        <h3>Version 3.1 release 5 (03 Oct 2002)</h3>
        <ul>
          <li>Enhances the Smart Save(TM) technology so that it will generically translate class and package names in OSGi style manifest files.</li>
          <li>Corrects a bug that caused a NullPointerException when opening certain unusual classes.</li>
          <li>Corrects a bug that could cause an infinite loop when obfuscating extremely complicated class hierarchies.</li>
          <li>Corrects a bug that could cause a deadlock in the "parameter" sub-dialogs of the "Obfuscate Advanced Name Exclusions Options" dialog.</li>
          <li>release 5a corrects another bug that could cause an infinite loop when obfuscating extremely complicated class hierarchies.</li>
          <li>release 5b corrects a bug in the String encryption of public static fields in certain interfaces.</li>
          <li>release 5c corrects another bug that could cause an infinite loop when obfuscating extremely complicated class hierarchies.</li>
          <li>release 5d more gracefully handles the scenario where an inner class has been opened for obfuscation but its outer class has not.</li>
        </ul>
        <h3>Version 3.1 release 4 (29 Aug 2002)</h3>
        <ul>
          <li>Corrects a bug that could cause a StackOverflowError when certain unusual classes are being opened inside Zelix KlassMaster.</li>
        </ul>
        <h3>Version 3.1 release 3 (12 Jul 2002)</h3>
        <ul>
          <li>Introduces the "light" Flow Obfuscation option. Bytecode flow obfuscated with this option generally has significantly improved performance,</li>
          <li>is much less vulnerable to JIT compiler bugs that can cause problems in flow obfuscated bytecode.</li>
          <li>Corrects a bug in the obfuscation of some unusual classes compiled with the Sun JDK 1.4. The bug resulted in a NoSuchMethodError when the obfuscated bytecode was executed.</li>
          <li>Enhances the ZKM Script language, the Input Change Log functionality and the Change Log Translate tool so that they handle all Latin-1 characters that can legally be part of a Java identifier.</li>
          <li>Layout changes to improve the appearance and functionality of the Zelix KlassMaster(TM) GUI when run on Mac OS X.</li>
        </ul>
        <h3>Version 3.1 release 2 (22 May 2002)</h3>
        <ul>
          <li>Enhances the GUI classpath dialog.</li>
          <li>Corrects bugs in the existingSerializedClasses functionality that caused a "java.lang.ClassFormatError: ... (Illegal field modifiers: 0x18)" error in certain classes,</li>
          <li>caused a java.lang.ClassNotFoundException exception on deserialization of certain classes.</li>
          <li>Improves Zelix KlassMaster's ability to correctly set its default classpath in Mac OS X.</li>
          <li>Modifies the default exclusions so that</li>
          <li>public EJB Remote interface and Bean class methods are excluded from being renamed,</li>
          <li>the names of native method argument classes are excluded from being renamed.</li>
        </ul>
        <h3>Version 3.1 release 1 (27 Mar 2002)</h3>
        <ul>
          <li>Duplicates the ZKM class inside the package com.zelix so that it can be accessed by build tool classes. The JDK 1.4.0 Java compiler will not allow a class in the default package to be accessed from a class in some other package.</li>
          <li>Corrects a bug that caused a NullPointerException when opening certain classes.</li>
          <li>Corrects a bug that caused a ClassCastException if Zelix KlassMaster(TM) was run in verbose mode when the System Properties contained non-String keys or values.</li>
          <li>release 1a includes the class com.zelix.ZKM that was left out of the initial release.</li>
        </ul>
        <h3>Version 3.1 release 0 (13 Mar 2002)</h3>
        <ul>
          <li>Adds the fixedClasses and resetFixedClasses statements to the ZKM Script language. The fixedClasses statement allows you to effectively insulate specified classes from the effects of obfuscation. Can be useful in some JSP scenarios where the JSP servlet can be recompiled at runtime.</li>
          <li>Adds the +signatureClasses syntax to the ZKM Script exclude statement. In addition to excluding matching methods' names, the new syntax excludes the fully qualified names of matching method return and parameter classes.</li>
          <li>Enhances the default exclusions so that all essential RMI exclusions are handled automatically.</li>
          <li>Corrects a bug in the XML parser's handling of CDATA sections.</li>
        </ul>
        <h3>Version 3.0 release 0 (18 Jan 2002)</h3>
        <ul>
          <li>Now requires a Java 2 (JDK 1.2) JVM to run.</li>
          <li>Complete rewrite of the control flow analysis functionality to improve the effectiveness of flow obfuscation.</li>
          <li>Flow obfuscation functionality enhanced to automatically handle multiple archive files.</li>
          <li>Improves automatic handling of Java Reflection API calls. warnings reported only for those calls that could not be automatically handled.</li>
          <li>limited ability to automatically handle Reflection API calls that access fields or methods by name.</li>
          <li>Enhances the ZKM Script saveAll statement to give control over archive compression.</li>
          <li>Improves handling of classes compiled with the Sun JDK 1.4.</li>
          <li>Corrects a bug in the ZKM Script saveAll statement that prevented an archive from being saved over itself.</li>
          <li>Corrects a bug in the ZKM Script existingSerializedClasses statement so that interfaces are never treated as existing serialized classes.</li>
          <li>Changes the handling of class source names in change logs so that they are treated as simple Strings. Works around a problem with invalid source names in some bytecode.</li>
          <li>Other minor bug fixes and enhancements.</li>
        </ul>
        <h3>Version 2.7 release 5 (27 Nov 2001)</h3>
        <ul>
          <li>Corrects a flow obfuscation bug that could cause a "Incompatible object argument for method call" VerifyError.</li>
          <li>Slightly increases the possibility of flow obfuscation in simple methods.</li>
          <li>release 5a corrects a bug that resulted in a "Stack mismatch with primitive types" message at the time of flow obfuscation of certain complex methods.</li>
        </ul>
        <h3>Version 2.7 release 4 (14 Nov 2001)</h3>
        <ul>
          <li>Corrects ZKM Script bugs that resulted in the exclusion parameter '+' syntax not working for class names.</li>
          <li>field types in field exclusion parameters being ignored.</li>
          <li>Other minor enhancements.</li>
        </ul>
        <h3>Version 2.7 release 3 (05 Sep 2001)</h3>
        <ul>
          <li>Corrects a flow obfuscation bug that can cause a VerifyError in complex methods with unusual exception handling.</li>
        </ul>
        <h3>Version 2.7 release 2 (18 Jul 2001)</h3>
        <ul>
          <li>Deals with an idiosyncracy in the compiler of the Sun JDK 1.4.0 beta JDK.</li>
        </ul>
        <h3>Version 2.7 release 1 (12 Jul 2001)</h3>
        <ul>
          <li>Adds the existingSerializedClasses and resetExistingSerializedClasses statements to the ZKM Script language. These statements greatly simplify the obfuscation of classes with pre-existing serialized instances.</li>
          <li>Enhances the ZKM Script language exclusion statements by allowing complex package, class, field and method name specifications. For example (name* &amp;&amp; !(name1 || name2)) . See the exclusions tutorial for more detail.</li>
          <li>Enhances the ZKM Script language exclude statement by introducing the "^" tag that allows "containing object" exclusions in a more general fashion than is currently allowed by the "+" wildcard. See the exclusions tutorial for more detail.</li>
          <li>allowing an optional prefix to be specified in "class suffix exclude" (ie. &lt;link&gt; ) parameters. Again see the exclusions tutorial for more detail.</li>
          <li>Enhances the handling of JAR manifest entries by copying across non-standard attributes in the entry (ie. not main) sections. If the values of any such attributes are class names then they are translated to the corresponding obfuscated class name.</li>
          <li>Modifies the standard defaultExclude.txt file by:</li>
          <li>adding exclusions for RMI/IIOP "Stub" and "Tie" classes.</li>
          <li>making the existing exclusions for ordinary RMI "Stub" and "Skel" classes more precise to avoid overlap with the new RMI/IIOP exclusions.</li>
          <li>adding an exclusion for serialization related readObjectNoData methods.</li>
        </ul>
        <h3>Version 2.6 release 0 (24 Apr 2001)</h3>
        <ul>
          <li>Adds the stringEncryptionExclude and resetStringEncryptionExclusions statements to the ZKM Script language.</li>
          <li>Enhances the Smart Save(TM) technology. The principal enhancements are: Automatic handling of WAR (J2EE web applications) and EAR (J2EE application) archive files.</li>
          <li>Generic translation of non-standard XML files including the translation of attribute values.</li>
          <li>Saving of all META-INF directory files (except INDEX.LIST and signature files) to the new archive.</li>
          <li>Handling of nested archive files.</li>
          <li>Creation of a new archive file as uncompressed if the source archive is uncompressed.</li>
          <li>Enhancement of the ZKM Script language to allow the embedding of quotes within any String literal. An embedded quote can now be escaped as two quotes (ie. ""). This is particularly useful for the execute statement.</li>
          <li>Enhances the Name Exclusion Options and Advanced Name Exclusion Options dialogs so that previously entered options are used as the initial defaults.</li>
          <li>Corrects a bug in the handling of continued lines in META-INF/MANIFEST.MF files.</li>
          <li>Removes the Unobfuscate tool from the menu of the GUI since it is now obsolete and will not be enhanced.</li>
        </ul>
        <h3>Version 2.5 release 2 (28 Feb 2001)</h3>
        <ul>
          <li>Corrects a bug in the handling of JAR manifest "Name:" attributes which resulted in a StringIndexOutOfBoundsException when the attribute value was not a class file name.</li>
          <li>Enhances the handling of JAR manifest entries by copying across non-standard attributes in the main section. If the values of any such attributes are class names then they are translated to the corresponding obfuscated class name.</li>
          <li>Reduces the stack space required by Zelix KlassMaster's flow obfuscation functionality.</li>
        </ul>
        <h3>Version 2.5 release 0 (19 Feb 2001)</h3>
        <ul>
          <li>Introduces Smart Save(TM) which enhances the "save" functionality embodied in the File|SaveAll menu option and the ZKM Script saveAll statement. Details of the new functionality are: class files opened from zip or jar file archives will be saved to a corresponding zip or jar file archive in the nominated save directory,</li>
          <li>non-class files such as images and properties files, appearing in archive files from which at least one class has been opened, will be copied to the new archives after some path translation,</li>
          <li>manifest , EJB deployment descriptor and service provider files will be copied across after some name translation.</li>
          <li>class files opened from the directory system will continue to be saved to corresponding directories as in previous versions.</li>
          <li>Adds the saveAllOld statement to the ZKM Script language which provides exactly the same functionality as the preexisting saveAll statement.</li>
          <li>Adds the execute statement to the ZKM Script language. The execute statement allows the execution of basic operating system commands (eg. mkdir ) from within a ZKM Script. Again, see the documentation for more detail.</li>
          <li>Adds a parameter to the default exclusions so that the names of all methods</li>
          <li>declared in an interface that extends java.rmi.Remote</li>
          <li>that throw java.rmi.RemoteException</li>
          <li>Corrects a bug in flow obfuscation that could occur if a fully qualified class name started with character 'L'.</li>
          <li>Corrects a bug in the ZKM Script "open" statement that caused it to fail to recognize ".zip" and ".jar" extensions unless they were in lower case.</li>
        </ul>
        <h3>Version 2.4 release 1 (29 Jan 2001)</h3>
        <p>In descending chronological order and with the major releases underlined .</p>
        <p>Corrects a bug in the processing of properties files which could cause a large properties file to be truncated.</p>
        <p>Changes the obfuscated name list functionality. In some circumstances particular name entries of the lists will be used when constructing the names of new fields and methods created by Zelix KlassMaster(TM) only if:</p>
        <p>This change works around a possible NumberFormatException.</p>
        <p>Enhances the Reproducible Obfuscated Output functionality by providing the</p>
        <p>ZKM_KEEP_SKIPPED_LAST_MODIFIED_DATE =true configuration option to allow you to retain the original last modified times of skipped nested archives and skipped XML, YAML and properties files.</p>
        <p>Corrects a bug in the Integer Constant Encryption functionality in version 24.0.1 which could result in various exceptions when used in conjuction with certain other transformations.</p>
        <p>The exceptions are unpredictable but the most common examples are NullPointerExceptions, ArrayIndexOutOfBoundsExceptions and even ClassNotFoundExceptions.</p>
        <p>Improves the usability of the String Encryption functionality by allowing for the exclusion and unexclusion of string literals referenced in specified methods in the ZKM Script stringEncryptionExclude and</p>
        <p>Improves the usability of the Integer Constant Encryption functionality by allowing for the exclusion and unexclusion of integers constants referenced in specified methods in the ZKM Script integerEncryptionExclude and</p>
        <p>Improves the usability of the Long Constant Encryption functionality by allowing for the exclusion and unexclusion of long constants referenced in specified methods in the ZKM Script longEncryptionExclude and</p>
        <p>Introduces the obfuscateExceptionsExclude ,</p>
        <p>resetObfuscateExceptionsExclusions statements.</p>
        <p>Enhances the ZKM Script obfuscate statement by introducing the</p>
        <p>parameter which optionally make all classes public and not final.</p>
        <p>Corrects a bug which can cause a VerifyError in the obfuscated bytecode when using Integer Constant Encryption and</p>
        <p>Long Constant Encryption in certain unusual scenarios.</p>
        <p>Enhances the ZKM Script open statement by introducing the "openNestedArchives" parameter.</p>
        <p>Provides a simpiler way of overriding the default behavior of opening all nested archives for processing.</p>
        <p>and methodParameterChangesPackage parameters.</p>
        <p>Introduces support for reproducible obfuscated output . Reproducible output is absolutely identical at the byte level across builds.</p>
        <p>Corrects a bug in the processing of the ZKM Script syntax that allows a more concise specification of a package and all of its packages. (E.g.</p>
        <p>Corrects a "VerifyError: Bad type on operand stack" error which can occur in the obfuscated application if the</p>
        <p>Method Parameter Changing functionality is used.</p>
        <p>Introduces the optional Method Parameter Obfuscation functionality that obfuscates method parameter lists by replacing them with a single Object[] parameter.</p>
        <p>(E.g. void method(String, int, Customer) could become void b(Object[])</p>
        <p>Enhances Method Parameter Changing so that the flowObfuscate setting of the</p>
        <p>methodParameterChanges parameter can have a flow obfuscating effect without requiring the encryptStringLiterals parameter to be set to enhanced or the obfuscateReferences parameter to be set to normal .</p>
        <p>This makes the Method Parameter Changing based Flow Obfuscation an independent, fully fledged alternative to the original type of Flow Obfuscation.</p>
        <p>Enhances the ZKM Script syntax to allow a more concise specification of a package and all of its packages. (E.g.</p>
        <p>Enhances the ZKM Script open and classpath statements to allow the "*" wildcard to appear in the final directory qualifier. (E.g.</p>
        <p>Corrects a NullPointerException that could occur in the obfuscation step in certain unusual scenarios which typically would involve the use of the obfuscateReferenceStructures=inReferencingClasses</p>
        <p>setting on the ZKM Script obfuscate statement and the obfuscation of Java 7 classes.</p>
        <p>Corrects a ClassCastException that could occur intermittently in Reference Obfuscated bytecode that is multi-threaded or uses parallel processing (including earlier releases of Zelix KlassMaster(TM) itself).</p>
        <p>The error message would typically be "ClassCastException: class java.lang.Class cannot be cast to class java.lang.String".</p>
        <p>Zelix KlassMaster(TM) enhanced to perform some processing in parallel by default where possible to reduce obfuscation time.</p>
        <p>The size of the reduction in obfuscation time could be more than 30% but it will depend upon</p>
        <p>The obfuscation options that have been selected,</p>
        <p>Parallel processing can be disabled by setting the ZKM_USE_PARALLEL special configuration option to false .</p>
        <p>Introduces the ZKM_EXTRA_XML_FILE_TYPES special configuration option.</p>
        <p>It can be used to specify additional file types in a semicolon delimited list that Zelix KlassMaster should treat as generic XML files.</p>
        <p>(E.g. ZKM_EXTRA_XML_FILE_TYPES="*.foo;*.bar" )</p>
        <p>Enhanced the Flow Obfuscation functionality to make use of Reference Obfuscation in Java 8 or better bytecode if both Reference Obfuscation and Method Parameter Changing have also been specified.</p>
        <p>This further hardens Flow Obfuscation against deobfuscation.</p>
        <p>Enhanced the methodParameterChange parameter of the obfuscate statement to include the flowObfuscate setting.</p>
        <p>The flowObfuscate setting is the same as the random setting but it also applies a different type of flow obfuscation to suitable methods.</p>
        <p>Introduces the ZKM_MATCH_ON_ORIGINAL special configuration option which, when set, tells Zelix KlassMaster(TM)'s ZKM Script exclusion statements to match on original package, class, field and method names rather than their possibly obfuscated names.</p>
        <p>This option is only relevant if ZKM Script exclusion statements follow an obfuscate statement in the one ZKM Script.</p>
        <p>Corrects another bug in the ZKM Script existingSerializedClasses statement which could cause incorrect processing of serialPersistentFields fields.</p>
        <p>Corrects more bugs in the handling of FXML.</p>
        <p>Introduces the obfuscate statement methodParameterChange parameter which replaces the allowMethodParameterChange parameter.</p>
        <p>The methodParameterChange parameter provides the new random setting which can make the type and position of the additional parameters more random with a possible, slight cost to runtime performance.</p>
        <p>Introduces the classInitializationOrder statement which allows you to tell Zelix KlassMaster(TM) that certain classes are always initialized before some other class.</p>
        <p>Zelix KlassMaster(TM) may then be able to use this information to further "harden" its obfuscation.</p>
        <p>Makes some changes in the handling of certain complex String literals.</p>
        <p>Enhances the Reference Obfuscation functionality to make use of the invokedynamic instruction where possible rather than the Reflection API. This can reduces the performance impact by a factor of about five.</p>
        <p>This allows the Reference Obfuscation functionality to be used more widely without having an unacceptable impact on performance.</p>
        <p>Introduces the optional Method Parameter Change functionality.</p>
        <p>It further "hardens" the existing enhanced String Encryption and Reference Obfuscation functions to make them more difficult to reverse.</p>
        <p>Enhances the ZKM Script obfuscate statement by introducing the uniqueClassNames parameter.</p>
        <p>When set to true , this option tells Zelix KlassMaster(TM) to not reuse unqualified class names across packages.</p>
        <p>This option can be useful when a framework uses unqualified class names as identifiers in annotations or XML.</p>
        <p>Enhances the ZKM Script obfuscate statement by introducing the new "keepMethodParametersIfNotObfuscated" and "keepVisibleIfNotObfuscated" values for the existing localVariables and methodParameters parameters respectively.</p>
        <p>These options allow method parameter names to be retained even in methods which are not public or protected.</p>
        <p>Enhances the ProGuard Configuration Translate tool to make use of the new</p>
        <p>Ignore Missing References and Remove Method Calls functionality.</p>
        <p>Works around an inappropriate "Zelix KlassMaster is not thread safe" error which can occur in some scenarios.</p>
        <p>Enhances the String Encryption function with the introduction of the new "enhanced" option which provides enhanced encryption which is more difficult to reverse.</p>
        <p>The "enhanced" option has been made the default option instead of the "flowObfuscate" option.</p>
        <p>Introduces Reference Obfuscation functionality.</p>
        <p>It allows you to selectively obscure field accesses and method calls in or to sensitive parts of your applications.</p>
        <p>Enhances the ZKM Script exclusion syntax by introducing the archive qualifier . The archive qualifier allows you to specify classes contained in specific archive files. (E.g.</p>
        <p>Changes the default StackMapTable algorithm to work around a change in the Oracle verifier which could cause a "VerifyError: Inconsistent stackmap frames" error.</p>
        <p>Enhances the obfuscate statement by introducing the " keepBalancedLocks " keyword to support the Android ART verifier.</p>
        <p>See the documentation for the Obfuscate Options dialog for more detail.</p>
        <p>Corrects the cause of an "Invalid classpath" that could occur when a JAR in the classpath contains a complex "Class-Path" attribute.</p>
        <p>Introduces broad support for the ProGuard obfuscator's configuration and mapping files to allow much easier migration from ProGuard to Zelix KlassMaster(TM).</p>
        <p>This allows Zelix KlassMaster(TM) to execute most ProGuard configuration files and take the place of ProGuard in build environments such as the ADT (Android Development Tools) plugin for Eclipse.</p>
        <p>Enhances the obfuscate statement by introducing</p>
        <p>the " mixedCaseClassNames " keyword to allow the use of mixed case obfuscated package and class names,</p>
        <p>Corrects a bug that could cause an "IllegalArgumentException: Comparison method violates its general contract!" error when running Zelix KlassMaster(TM) on Java 7.</p>
        <p>Introduces the AutoReflection(TM) functionality which allows the automatic handling of any Java Reflection API calls that Zelix KlassMaster(TM) could not fully resolve.</p>
        <p>the enhancement of the obfuscate statement by introducing the "autoReflectionHandling" ,</p>
        <p>"autoReflectionPackage" and "autoReflectionHash" parameters,</p>
        <p>the introduction of the accessedByReflection , accessedByReflectionExclude and</p>
        <p>Enhances the obfuscate statement by introducing the "obfuscate" and "keep" values of the "localVariables" parameter.</p>
        <p>These new settings allow the local variable debugging information to be obfuscated or kept unchanged.</p>
        <p>Enhances the ZKM Script exclusion statements by introducing method parameter placeholders (i.e. '?') in the specification of method signatures.</p>
        <p>See ZKM Script Exclusions Tutorial for examples of the use of method parameter placeholders.</p>
        <p>Introduces the ZKM_IGNORE_MISSING_MEMBERS</p>
        <p>configuration option that tells Zelix KlassMaster(TM) to ignore missing fields and methods in classes in the classpath.</p>
        <p>configuration option that allows you to specify the character encoding to be used when reading and writing a MIDP JAD file.</p>
        <p>Enhances the obfuscate statement by introducing the "exceptionObfuscation" parameter.</p>
        <p>The Obfuscate Options dialog is similarly enhanced with the addition of the "Exception obfuscation" drop down list.</p>
        <p>These equivalent options enhance obfuscation by providing an additional kind of Flow Obfuscation.</p>
        <p>Enhances the ZKM Script exclusion statements by introducing the " containing" clause.</p>
        <p>The " containing" clause allows you to specify a class for exclusion or unexclusion based upon the methods or fields that it contains.</p>
        <p>statements.) See ZKM Script Exclusions Tutorial for examples of the " containing" clause.</p>
        <p>Enhances the trim statement by introducing the deleteExceptionAttributes parameter.</p>
        <p>Similarly the Trim Options dialog is enhanced by the delete Exception attributes attribute.</p>
        <p>These equivalent enhancements can reduce the bytecode size without effecting the way the bytecode executes at runtime.</p>
        <p>Corrects a bug that could cause a VerifyError error in obfuscated bytecode in certain unusual circumstances.</p>
        <p>Corrects a bug that could cause a NoSuchFieldError error in obfuscated bytecode in certain unusual circumstances.</p>
        <p>Corrects a bug that could cause a VerifyError "Register &lt;n&gt; contains wrong type" in certain unusual obfuscated bytecode.</p>
        <p>Corrects a bug that could cause an assert failure when obfuscating complex generic inner classes.</p>
        <p>Corrects a bug that could cause a NullPointerException when processing complex generic classes.</p>
        <p>Introduces the ZKM_DELETE_EMPTY_DIRECTORIES</p>
        <p>configuration option that allows you to tell Zelix KlassMaster(TM) to not copy empty directories to the obfuscated archive file.</p>
        <p>Corrects the ZKM_DELETE_EMPTY_DIRECTORIES</p>
        <p>configuration option so that it works correctly with the Trim function.</p>
        <p>configuration option that allows you to tell Zelix KlassMaster(TM) to not test for gaps in the inheritance hierarchy.</p>
        <p>Corrects a problem in the ZKM_TEST_HIERARCHY</p>
        <p>Corrects a problem in the exclude statement's method name prefix exclusion functionality that could occur when linked field names are excluded from obfuscation.</p>
        <p>Enhances the obfuscate statement's localVariables parameter by introducing the</p>
        <p>keepVisibleMethodParametersIfNotObfuscated setting.</p>
        <p>If the localVariables parameter is set to keepVisibleMethodParametersIfNotObfuscated , then the parameter variable names of public and protected methods are retained only if</p>
        <p>the name of the method is not obfuscated and</p>
        <p>by allowing more than one change log to be specified.</p>
        <p>Enhanced to exclude statement to allow the the exclusion of method name prefixes such as get or set .</p>
        <p>The names of the methods with matching prefixes are then "linked" to the name of a matching field.</p>
        <p>See the exclusions tutorial for more detail.</p>
        <p>Enhanced the obfuscate statement by adding the localVariables parameter.</p>
        <p>When the localVariables parameter is set to keepVisibleMethodParameters , the parameter variable names of public or protected methods are retained.</p>
        <p>This is of use when obfuscating a library that will be used within an IDE.</p>
        <p>Introduces the ZKM_FIXED_TOTALLY_UNCHANGED</p>
        <p>configuration option that allows you to tell Zelix KlassMaster(TM) to copy across any classes that you have specified as "fixed" completely unchanged.</p>
        <p>Enhanced to open statement's "skip" syntax so that you can tell Zelix KlassMaster(TM) to not open a specified class file in an archive file.</p>
        <p>The new syntax is the -"x.jar!com/mycompany/MyClass.class" .</p>
        <p>configuration option that allows you to supress Java Reflection API warnings in the Zelix KlassMaster(TM) log.</p>
        <p>configuration option that allows you to prevent overwritten JAR files being backed up with the .BACKUP extension.</p>
        <p>Corrected a bug that could cause problems with class suffix and prefix (i.e.</p>
        <p>Enhances the ZKM Script exclusion statements such as trimExclude and</p>
        <p>exclude to allow exclusion based on class, field, method and method parameter annotations .</p>
        <p>Allows better automatic handling of EJB 3 applications.</p>
        <p>Reports a fatal error if a file directly specified in a ZKM Script "open" statement</p>
        <p>Corrects a spurious "ERROR: input change log '&lt;changeLogName&gt;': Class '&lt;className&gt;' appears more than once" message that could occur in very unusual circumstances.</p>
        <p>command prompt option to allow you to redirect stdout to a file.</p>
        <p>Corrects a NullPointerException bug in the "Obfuscate Options" dialog.</p>
        <p>Corrects a bug in the handling of complex annotations.</p>
        <p>Enhances the obfuscate statement by adding the newNamesPrefix</p>
        <p>parameter that allows you to specify a prefix for all new obfuscated package, class, field and method names.</p>
        <p>Introduces the ZKM_NEW_CHANGE_LOG_ENCODING</p>
        <p>configuration option that allows you to specify the character encoding to be used when generating a change log.</p>
        <p>Allows you to choose whether you use aggressive method renaming.</p>
        <p>Aggressive method renaming was introduced with Zelix KlassMaster(TM) 4.3 and was initially switched on by default.</p>
        <p>Enhanced to support bytecode generated with the JDK 1.5 including</p>
        <p>ability to specify whether annotation attributes should be removed.</p>
        <p>The "deleteAnnotationAttributes" parameter has been added to the trim statement and</p>
        <p>"delete annotation attributes" option has been added to the Trim Options dialog.</p>
        <p>ability to specify whether generics information should be removed.</p>
        <p>The "keepGenericsInfo" parameter has been added to the obfuscate statement and</p>
        <p>"keep generics information" option has been added to the Obfuscate Options dialog.</p>
        <p>Adds the ability to retain inner class information only if the inner class has not been name obfuscated.</p>
        <p>The obfuscate statement's "keepInnerClassInfo" parameter has been given an extra value of "ifNameNotObfuscated" .</p>
        <p>Corrects a NullPointerException that could occur when a class name is matched by</p>
        <p>an unresolved exclude statement &lt;link&gt; parameter and</p>
        <p>Enhances effectiveness the name obfuscation function by allowing the package structure to be collapsed.</p>
        <p>See the collapse packages documentation for more detail.</p>
        <p>Allows J2ME MIDlets to be obfuscated AFTER preverification.</p>
        <p>This simplifies the integration of Zelix KlassMaster(TM) into the J2ME build process.</p>
        <p>See the J2ME obfuscation tutorial for more detail.</p>
        <p>Corrects a bug that occurred when an identical class file was opened from different archives.</p>
        <p>The obfuscated class file was not being copied to each corresponding new archive.</p>
        <p>Enhances String encryption to dramatically reduce</p>
        <p>Introduces the ZKM Script unexclude statement which operates on the results of</p>
        <p>exclude statements to allow finer control of name obfuscation exclusions.</p>
        <p>Introduces the ZKM Script trimUnexclude statement which operates on the results of</p>
        <p>trimExclude statements to allow finer control of trim exclusions.</p>
        <p>Works around a JBuilder problem that can occur when obfuscating inner class names.</p>
        <p>Introduces the Trim function which removes unused classes, fields and methods.</p>
        <p>The Trim function consists of a GUI menu option and the new ZKM Script statements</p>
        <p>Removes the public static main(java.lang.String[]) exclusion parameter from the defaultExclude.txt file and the internal default trim exclusions to allow more precise exclusions.</p>
        <p>This may make it necessary to modify some existing ZKM Scripts .</p>
        <p>Adds the "*.* static createUI(javax.swing.JComponent)" parameter to the defaultExclude.txt and defaultTrimExclude.txt files,</p>
        <p>Introduces the "light" Flow Obfuscation option. Bytecode flow obfuscated with this option generally</p>
        <p>Corrects bugs in the existingSerializedClasses functionality that</p>
        <p>caused a "java.lang.ClassFormatError: ... (Illegal field modifiers: 0x18)" error in certain classes,</p>
        <p>Duplicates the ZKM class inside the package com.zelix so that it can be accessed by build tool classes.</p>
        <p>The JDK 1.4.0 Java compiler will not allow a class in the default package to be accessed from a class in some other package.</p>
        <p>statements to the ZKM Script language. The fixedClasses statement allows you to effectively insulate specified classes from the effects of obfuscation. Can be useful in some JSP scenarios where the JSP servlet can be recompiled at runtime.</p>
        <p>Adds the +signatureClasses syntax to the ZKM Script</p>
        <p>statement. In addition to excluding matching methods' names, the new syntax excludes the fully qualified names of matching method return and parameter classes.</p>
        <p>Improves automatic handling of Java Reflection API calls.</p>
        <p>warnings reported only for those calls that could not be automatically handled.</p>
        <p>statement to give control over archive compression.</p>
        <p>statement that prevented an archive from being saved over itself.</p>
        <p>statement so that interfaces are never treated as existing serialized classes.</p>
        <p>Corrects ZKM Script bugs that resulted in</p>
        <p>the exclusion parameter '+' syntax not working for class names.</p>
        <p>statements to the ZKM Script language. These statements greatly simplify the obfuscation of classes with pre-existing serialized instances.</p>
        <p>Enhances the ZKM Script language exclusion statements by allowing complex package, class, field and method name specifications. For example (name* &amp;&amp; !(name1 || name2)) .</p>
        <p>introducing the "^" tag that allows "containing object" exclusions in a more general fashion than is currently allowed by the "+" wildcard.</p>
        <p>allowing an optional prefix to be specified in "class suffix exclude" (ie.</p>
        <p>&lt;link&gt; ) parameters. Again see the exclusions tutorial for more detail.</p>
        <p>Enhances the handling of JAR manifest entries by copying across non-standard attributes in the entry (ie. not main) sections.</p>
        <p>If the values of any such attributes are class names then they are translated to the corresponding obfuscated class name.</p>
        <p>Enhances the Smart Save(TM) technology. The principal enhancements are:</p>
        <p>Automatic handling of WAR (J2EE web applications) and EAR (J2EE application) archive files.</p>
        <p>Enhancement of the ZKM Script language to allow the embedding of quotes within any String literal.</p>
        <p>An embedded quote can now be escaped as two quotes (ie. "").</p>
        <p>Enhances the handling of JAR manifest entries by copying across non-standard attributes in the main section.</p>
        <p>Introduces Smart Save(TM) which enhances the "save" functionality embodied in the File|SaveAll menu option and the ZKM Script saveAll statement.</p>
        <p>class files opened from zip or jar file archives will be saved to a corresponding zip or jar file archive in the nominated save directory,</p>
        <p>Adds the execute statement to the ZKM Script language. The execute statement allows the execution of basic operating system commands (eg.</p>
        <p>mkdir ) from within a ZKM Script. Again, see the</p>
        <p>are, by default, excluded from being changed. This improves automatic support for RMI.</p>
        <p>Corrects a minor bug that resulted in change log method signatures being displayed in the change log using the obfuscated class names rather than the original class names.</p>
        <p>Enhances the Input Change Log and Flow Obfuscation functionalities to allow true incremental obfuscation of flow obfuscated bytecode.</p>
        <p>All classes must still be opened inside Zelix KlassMaster(TM) at the time of re-obfuscation but only the changed subset of re-obfuscated classes need to be replaced in the existing distribution jar. This allows the distribution of patches.</p>
        <p>Enhances the ZKM Script interface by introducing a Preprocessor which allows:</p>
        <p>Inclusion of one ZKM script inside another</p>
        <p>Substitution of environmental variables.</p>
        <p>Exposes an API that allows Zelix KlassMaster(TM) to be called by build tools such as Apache Ant.</p>
        <p>Enhances the default exclusions to exclude the renaming of certain EJB methods (eg. "create(*)" and "ejbCreate(*)").</p>
        <p>Corrects a bug in the Flow Obfuscation functionality that could cause IllegalAccessErrors if the flow obfuscated classes were run in application environments that used more than one class loader. This is typical of EJB server environments.</p>
        <p>Corrects a bug in the Flow Obfuscation functionality that could cause a runtime verification error of the form "Accessing value from uninitialized register" if more than 4,095 classes were opened at the time of obfuscation.</p>
        <p>Relaxes the parsing of input change logs to work around a bug in some Java compilers that use a fully qualified path in the class file SourceFile attribute of the form "pack1/pack2/ClassName.java".</p>
        <p>Enhances the name obfuscation functionality so that Zelix KlassMaster(TM) will always produce constant pool entries with a consistent order regardless of which Java VM is being used. This removes a source of variation that complicated configuration management based upon binary file comparisons.</p>
        <p>Corrects a bug in the handling of certain interface method references produced by the Jikes Java compiler.</p>
        <p>Catches exceptions sometimes thrown by the Microsoft VM when the Zelix KlassMaster(TM) user options are deserialized.</p>
        <p>Corrects a bug in the method name exclusion functionality that allowed a method exclusion parameter to take precedence over an input change log entry if the class containing the method name to be excluded didn't appear in the input change log.</p>
        <p>Corrects a bug in the method name obfuscation functionality that occurred when:</p>
        <p>a set of interfaces declaring the same method signature were "linked" to each other due to their positions in the inheritance hierarchy,</p>
        <p>one or more of the interfaces extended another interface that was</p>
        <p>not opened inside Zelix KlassMaster(TM) and</p>
        <p>Improves the ability of the Flow Obfuscation functionality to obfuscate classes compiled with the JDK 1.3 or Jikes compilers.</p>
        <p>Provides support for the draft second edition of the Java Language Specification.</p>
        <p>(The Jikes compiler already supports significant aspects of the draft.) This has involved:</p>
        <p>Switching off field and static method hiding by default.</p>
        <p>Adding the "hideFieldNames" and "hideStaticMethodNames" parameters to the ZKM Script "obfuscate" statement so that hiding can be optionally switched back on.</p>
        <p>Zelix KlassMaster(TM) v2.3.0 already provided effective support but there remained a risk that the Input Change Log functionality might not correctly handle all situations. This risk has now been removed regardless of whether or not fields and static methods are hidden.</p>
        <p>Further improves the handling of very complex interface relationships. This removes a cause of "Assert failed" errors.</p>
        <p>Corrects a bug that could result in an infinite loop if Zelix KlassMaster(TM) encountered certain cyclic interface dependencies.</p>
        <p>Corrects a bug that could result in VerifyErrors if a method with more than 256 local variables was flow obfuscated.</p>
        <p>Enhances Name Exclusion functionality by allowing:</p>
        <p>exclusion of class, field and method names that do NOT have a specified modifier (e.g.</p>
        <p>exclusion of method names where the method throws a specified exception or one of the exception's subclasses.</p>
        <p>Introduces Flow Obfuscation Exclusion functionality to the ZKM Script interface to allow specific methods or classes of methods to be excluded from flow obfuscation.</p>
        <p>Relaxes the parsing of Input Change Logs to allow partial change logs to be used.</p>
        <p>Introduces the "Flow Obfuscate" option to String Encryption to further protect the String Encryption decrypt methods from decompilation.</p>
        <p>Corrects the following bugs in the Name Exclusion functionality:</p>
        <p>exclusions based on "implements" clauses could fail in some cases where classes implemented more than one interface.</p>
        <p>exclusions based on complex wildcard combinations could sometimes fail.</p>
        <p>Corrects a bug in the Input Change Log functionality that could result in an "Assert failed" error in applications with complex interface relationships.</p>
        <p>Corrects a "NullPointerException" error in the Flow Obfuscation functionality that occurred when dead code was found in a particular position within methods.</p>
        <p>Works around a problem that WebLogic Servlet engines had with String Encrypted classes.</p>
        <p>Provides improved support for classes compiled using the Jikes compiler.</p>
        <p>Some GUI layout tweaks to improve cross-platform consistency.</p>
        <p>Release 0a switches on the new Name Exclusion functionality for the GUI interface.</p>
        <p>Introduces Input Change Log functionality. Allows consistent renaming across releases.</p>
        <p>Improves the Obfuscation function's handling of very complex inheritance and implementation relationships.</p>
        <p>Corrects a bug in Flow Obfuscation that caused a consistent IllegalAccessError in certain applications.</p>
        <p>Corrects a bug in the Obfuscation function that allowed it to generate some illegal names when obfuscating very large applications.</p>
        <p>Corrects a bug in the Change Log Translate function that caused a parse error if an original class, field or method was named "and".</p>
        <p>Many GUI layout tweaks to improve cross-platform consistency.</p>
        <p>Introduces "aggressive" String encryption. This option extends previous String encryption functionality by encrypting static final String field values in interfaces and classes.</p>
        <p>With this option String literal encryption has no exceptions.</p>
        <p>More gracefully handles the "&lt;classname&gt; not found. Check the classpath option and reload." error that could occur during flow obfuscation. Instead of abandoning obfuscation, Zelix KlassMaster(TM) will now skip flow obfuscation of the method in which the error occurred and present a warning message.</p>
        <p>More gracefully handles invalid classpaths in the "Options/Classpath" dialog.</p>
        <p>Includes Applet classes in the "Don't change main class name" list in the "Tools/Obfuscate" and "Tools/Unobfuscate" dialogs.</p>
        <p>The GUI now uses the local environment's foreground color as well as its background color so that users can use a setup like white on black without difficulty.</p>
        <p>Release 1a adjusts the nature of the warning message mentioned in point 2 above.</p>
        <p>Release 1b reduces the strength of the "aggressive" flow obfuscation to the level that it was in release 2.1.0. This was done to work around problems with the Microsoft VM JIT.</p>
        <p>Release 1c fixes a bug in the ZKM Script "classpath" statement which causes it to work incorrectly in Unix environments.</p>
        <p>Release 1f fixes a bug that caused Zelix KlassMaster(TM) to sometimes crash after it had removed "synthetic" methods.</p>
        <p>Release 1g reduces the size of the String decryption method.</p>
        <p>Release 1h removes unnecessary GUI initialization that caused problems when running from a UNIX script</p>
        <p>Release 1i performs an automatic search for the Java bootstrap classes</p>
        <p>Release 1j corrects a bug in the flow obfuscation logic that caused certain methods to fail verification</p>
        <p>Introduces flow obfuscation and includes some minor fixes.</p>
        <p>Fixes bugs in the Advanced Exclusion Options and Change Log Translate dialogs introduced by version 2.0 release 3.</p>
        <p>Contains a workaround for the Windows JDK 1.1.7 JIT bug.</p>
        <p>Corrects the handling of non-ASCII strings. Can now encrypt non-ASCII strings.</p>
        <p>Change to make the Garbage Collector's job easier when the Change Log Translate tool is used on large change logs.</p>
        <p>the ZKM Script Helper file generation tool.</p>
        <p>greatly enhanced exclusion functionality when obfuscating and unobfuscating.</p>
        <p>the option of retaining scrambled line numbers when obfuscating.</p>
        <p>the ability to open class files from zip and jar files.</p>
        <p>directory and file selection dialogs now default to the last directory used.</p>
        <p>enhanced method overloading when obfuscating.</p>
        <p>enhanced handling of complex interface relationships.</p>
        <p>Runtime String decryption algorithm improved to make it run almost twice as fast.</p>
        <p>Adjustment to a change in the JDK 1.1.6 handling of drive names in the Windows environment (which means that Zelix KlassMaster(TM) v2.0 will not work in Windows with the JDK 1.1.5 or less).</p>
        <p>Corrects a bug that caused a NullPointerException during obfuscation or unobfuscation when:</p>
        <p>a superclass or implemented interface is not opened inside Zelix KlassMaster(TM) and</p>
        <p>the superclass or interface is stored in a jar file that is stored in the classpath.</p>
        <p>Corrects a bug that caused a NullPointerException when opening classes that:</p>
        <p>contained at least one corrupt Inner Class Attribute table entry and</p>
        <p>contained at least one valid Inner Class Attribute table entry.</p>
        <p>Note that, amongst other things, Zelix KlassMaster(TM) treats Inner Class Attribute table entries as corrupt if they contain inner class names that do not start with the outer class name followed by a '$' character.</p>
        <p>has improved (but still fallible) handling of bytecode containing calls to the method Class.forName().</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster - Change History",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/page/changes"
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
      "name": "Reference",
      "item": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/reference"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Java Obfuscator - Zelix KlassMaster - Change History"
    }
  ]
}]
useHead({
  title: 'Change History | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster - Change History | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/reference.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/page/changes' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
