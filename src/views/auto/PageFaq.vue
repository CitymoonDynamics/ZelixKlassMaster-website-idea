<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Reference</p>
      <h1>Answers</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - FAQ</li>
          <li>Overview FAQ Change History Documentation</li>
          <li>Zelix KlassMaster(TM) Java Obfuscator and Obfuscation FAQ</li>
          <li>Version 27.0</li>
          <li>How do I get started with Zelix KlassMaster(TM)?</li>
          <li>Why wont Zelix KlassMaster(TM) run?</li>
          <li>Does Zelix KlassMaster(TM) support Java 8 through to Java 27?</li>
          <li>What is the difference between the evaluation and licensed versions of Zelix KlassMaster?</li>
          <li>Will Zelix KlassMaster(TM) run in Windows, Mac OS X or Linux?</li>
          <li>Does Zelix KlassMaster(TM) support JEE(TM), Spring, Hibernate(TM), Java ME(TM) and Google Android(TM)?</li>
          <li>Why don't all names change when I obfuscate?</li>
          <li>Won't string encryption slow down my code and make it bigger?</li>
          <li>When I change a method name in one class, why do some methods in other classes also get renamed?</li>
          <li>When changing a method name, why do I get the message "New name clashes with a method in Class name " when the class mentioned doesn't seem to be related to the class that defines the method?</li>
          <li>After being obfuscated why does my code get the runtime errors "ClassFormatError", "VerifyError", "NoClassDefFoundError" or "Can't find class Classname "?</li>
          <li>Can Zelix KlassMaster(TM) automatically handle Java Reflection API calls?</li>
          <li>When I open some classes why do I get the "Class Open Warnings" window?</li>
          <li>When I open some classes why do I get the "Class Open Errors" window?</li>
          <li>What options should I use when obfuscating my classes?</li>
          <li>What can I do if I get an OutOfMemoryError or "Insufficient Memory to open classes" error?</li>
          <li>Why does Zelix KlassMaster(TM) run so slowly?</li>
          <li>How do I obfuscate classes with native methods?</li>
          <li>I used the Zelix KlassMaster(TM) ZKM Script Helper to create a ZKM Script file but when I run it I get warnings. Why?</li>
          <li>Can Zelix KlassMaster(TM) obfuscate JSPs?</li>
          <li>Won't flow obfuscation slow down my code and make it bigger?</li>
          <li>Can I tell Zelix KlassMaster(TM) not to flow obfuscate certain methods?</li>
          <li>Why aren't all my methods flow obfuscated?</li>
          <li>What is the difference between "normal", "aggressive", "flow obfuscate" and "enhanced" String encryption?</li>
          <li>After obfuscation, why don't my classes work properly?</li>
          <li>What does the message "WARNING: changeLogIn fileName : Method oldMethodName in class className1 is mapped to new name newMethodName1 but the corresponding method in class className2 is mapped to new name newMethodName2 . Using mapping of newMethodName2 for both methods" mean?</li>
          <li>How does the Input Change Log functionality interact with the name exclusion functionality?</li>
          <li>If I exclude a class from being obfuscated will the class's methods still be obfuscated?</li>
          <li>Can I edit a change log and then use it as an input change log so that I can predetermine new class, field or method names?</li>
          <li>I have a number of applets in the default package that I obfuscate separately. How do I stop Zelix KlassMaster(TM) from giving them the same name (e.g."a.class")?</li>
          <li>What is the easiest way of excluding non-static, non-transient fields from being renamed in serializable classes?</li>
          <li>My application will consist of a client jar file and server jar file which share some common classes. How do I obfuscate it?</li>
          <li>Does Zelix KlassMaster(TM) support incremental obfuscation?</li>
          <li>Can Zelix KlassMaster(TM) be called from a build tool such as Apache Ant?</li>
          <li>Can I access environment variables from within a ZKM Script?</li>
          <li>Our application uses Java Serialization. How does this impact obfuscation?</li>
          <li>Does Zelix KlassMaster(TM) support ResourceBundles as used in Localization and Internationalization?</li>
          <li>Why do I get a ClassCastException when I try to obfuscate bytecode compiled with Java 5 (i.e. JDK 1.5)?</li>
          <li>How do I refer to inner classes in ZKM Script statements?</li>
          <li>I am getting "Proguard returned with error code 1". How do I find out what is wrong?</li>
          <li>What settings do I use for Android&amp;#153 Apps?</li>
          <li>What are default exclusions?</li>
          <li>Won't the Reference Obfuscation function slow down my code and make it bigger?</li>
          <li>By how much will parallel processing reduce obfuscation time?</li>
          <li>What do the "API warnings detected during open" or "API calls detected that may not be handled automatically" messages mean?</li>
          <li>Does Zelix KlassMaster(TM) support Java bytecode generated from Kotlin(TM) source?</li>
        </ul>
        <h3>Answers</h3>
        <h3>Q0. How do I get started with Zelix KlassMaster(TM)?</h3>
        <h3>Q1. Why wont Zelix KlassMaster(TM) run?</h3>
        <ul>
          <li>You cannot run Zelix KlassMaster(TM) using a Java 7 or earier JVM. You need Java 8 (JDK 1.8 or better).</li>
          <li>Zelix KlassMaster(TM) may not run on your operating system. See the answer to Q4 .</li>
        </ul>
        <h3>Q2. Does Zelix KlassMaster(TM) support Java 8 through to Java 27?</h3>
        <p>Of course Zelix KlassMaster(TM) will also open and process Java 1.1 through to Java 8 bytecode. All you need to do is set the Zelix KlassMaster(TM) classpath to point to the appropriate bootstrap classes. For Java 2 through to Java 8 that is the corresponding rt.jar . For Java 9 to Java 27 it is the corresponding lib\jrt-fs.jar file system.</p>
        <h3>Q3. What is the difference between the evaluation and licensed versions of Zelix KlassMaster?</h3>
        <ul>
          <li>The evaluation version will flow obfuscate only one or two methods in each class.</li>
          <li>The evaluation version is time limited to thirty days.</li>
        </ul>
        <h3>Q4. Will Zelix KlassMaster(TM) run in Windows, Mac OS X or Linux?</h3>
        <ul>
          <li>Windows 11(TM) 64bit using java version "1.8.0_503" Java HotSpot(TM) 64-Bit Server VM (build 25.503-b01, mixed mode)</li>
          <li>openjdk version "1.8.0_504" OpenJDK 64-Bit Server VM (Temurin)(build 25.504-b01, mixed mode)</li>
          <li>java version "11.0.32.1" 2026-08-18 LTS Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.32.1+1-LTS-5, mixed mode)</li>
          <li>java version "17.0.20.1" 2026-08-18 LTS Java HotSpot(TM) 64-Bit Server VM (build 17.0.20.1+1-LTS-4, mixed mode, sharing)</li>
          <li>java version "21.0.12.1" 2026-08-18 LTS Java HotSpot(TM) 64-Bit Server VM (build 21.0.12.1+1-LTS-4, mixed mode, sharing)</li>
          <li>java version "25.0.4.1" 2026-08-18 LTS Java HotSpot(TM) 64-Bit Server VM (build 25.0.4.1+1-LTS-5, mixed mode, sharing)</li>
          <li>openjdk version "25.0.4.1" 2026-08-18 LTS OpenJDK 64-Bit Server VM Temurin-25.0.4.1+1 (build 25.0.4.1+1-LTS, mixed mode, sharing)</li>
          <li>java version "26.0.2.1" 2026-08-18 Java HotSpot(TM) 64-Bit Server VM (build 26.0.2.1+1-7, mixed mode, sharing)</li>
          <li>openjdk version "26.0.2.1" 2026-08-18 OpenJDK 64-Bit Server VM Temurin-26.0.2.1+1 (build 26.0.2.1+1, mixed mode, sharing)</li>
          <li>openjdk version "27" 2026-09-15 OpenJDK 64-Bit Server VM (build 27+35-2325, mixed mode, sharing)</li>
          <li>Linux ( Xubuntu 22.04) using</li>
          <li>java version "1.8.0_503" Java HotSpot(TM) 64-Bit Server VM (build 25.503-b01, mixed mode)</li>
          <li>MacOS ( Tahoe 26.6.2) using</li>
          <li>public class names and their containing package names,</li>
          <li>public field names,</li>
          <li>public method names.</li>
        </ul>
        <h3>Q6. Why don't all names change when I obfuscate?</h3>
        <ul>
          <li>The name is public or protected and your obfuscate options say that public or protected names shouldn't be changed.</li>
          <li>The name of a package scoped method is overridden to be protected or public in a subclass. If your obfuscate options say that protected or public method names shouldn't be changed then the overridden method name can't be changed without breaking the polymorphic link.</li>
          <li>The name of a method overrides a method in a superclass or implements a method in an interface but the superclass or interface hasn't been opened inside Zelix KlassMaster. In such cases the method name cannot be changed without breaking the polymorphic link.</li>
        </ul>
        <h3>Q7. Won't string encryption slow down my code and make it bigger?</h3>
        <h3>Q8. When I change a method name in one class, why do some methods in other classes also get renamed?</h3>
        <h3>Q9. When changing a method name, why do I get the message "New name clashes with a method in Class name " when the class mentioned doesn't seem to be related to the class that defines the method?</h3>
        <ul>
          <li>already exists in a class</li>
          <li>already exists in a superclass or subclass so that a new polymorphic relationship would be created.</li>
        </ul>
        <h3>Q10. After being obfuscated why does my code get the runtime errors "ClassFormatError", "VerifyError", "NoClassDefFoundError" or "Can't find class Classname "?</h3>
        <ul>
          <li>in JDK 1.1.7 or less, for applications run with the -verify switch</li>
          <li>in Java 2 or better by default unless you use the -Xverify:none switch</li>
          <li>is always switched on for Applets.</li>
        </ul>
        <h3>Q11. Can Zelix KlassMaster(TM) automatically handle Java Reflection API calls?</h3>
        <ul>
          <li>If you choose not to use the AutoReflection(TM) functionality and</li>
          <li>If a particular Reflection API call is not handled automatically by Zelix KlassMaster(TM) and</li>
          <li>That will break the obfuscated application</li>
        </ul>
        <h3>Q12. When I open some classes why do I get the "Class Open Warnings" window?</h3>
        <ul>
          <li>Class.forName(String)</li>
          <li>Class.getName()</li>
          <li>Class.getField(String)</li>
          <li>Class.getMethod(String)</li>
          <li>Class.getDeclaredField(String)</li>
          <li>Class.getDeclaredMethod(String)</li>
          <li>Field.getName()</li>
          <li>Method.getName()</li>
          <li>Constructor.getName()</li>
          <li>ClassLoader.loadClass(String,boolean)</li>
          <li>ClassLoader.defineClass()</li>
          <li>ClassLoader.findSystemClass(String)</li>
          <li>ClassLoader.findLoadedClass(String)</li>
          <li>RMIClassLoader.loadClass(String)</li>
          <li>RMIClassLoader.loadClass(URL, String)</li>
          <li>LoaderHandler.loadClass(String)</li>
          <li>LoaderHandler.loadClass(URL, String)</li>
          <li>EventSetDescriptor(Class, String, Class, String)</li>
          <li>EventSetDescriptor(Class, String, Class, String[], String, String)</li>
          <li>EventSetDescriptor(Class, String, Class, String[], String, String, String)</li>
          <li>the class in which the Reflection API method call appears</li>
          <li>the signature of the method in which the Reflection API method call appears</li>
          <li>the signature of the Reflection API method being called.</li>
        </ul>
        <h3>Q13. When I open some classes why do I get the "Class Open Errors" window?</h3>
        <ul>
          <li>appear in the same archive or</li>
          <li>are not absolutely identical.</li>
        </ul>
        <h3>Q14. What options should I use when obfuscating my classes?</h3>
        <h3>Trim function</h3>
        <h3>Inner classes</h3>
        <h3>Generics</h3>
        <h3>String Encryption</h3>
        <h3>Flow Obfuscation</h3>
        <h3>Reference Obfuscation</h3>
        <h3>Method Parameter Obfuscation</h3>
        <h3>Method Parameter Changes</h3>
        <h3>Application types</h3>
        <ul>
          <li>not obfuscate public class names</li>
          <li>not obfuscate public field or method names</li>
          <li>not obfuscate public or protected field or method names</li>
          <li>limit String encryption by either using the "normal" setting or</li>
          <li>using the "aggressive", "flowObfuscate" or "enhanced" settings but excluding all interfaces from String encryption using the ZKM Script stringEncryptionExclude statement. (e.g. " stringEncryptionExclude interface *.*;" )</li>
          <li>consider choosing the line numbers "scramble" option</li>
        </ul>
        <h3>Line numbers</h3>
        <h3>Local variables</h3>
        <h3>Method parameters</h3>
        <h3>Legal identifiers</h3>
        <h3>The bottom line</h3>
        <h3>Q15. What can I do if I get an OutOfMemoryError or "Insufficient Memory to open classes" error?</h3>
        <ul>
          <li>Give Java more memory to work with by using the -Xmx??m option where ?? represents the number of megabytes. (For example, the option -Xmx512m gives Java 512MB of heap space.)</li>
          <li>When you are running Zelix KlassMaster(TM) via Ant then you need to give more memory to Ant itself. An easy way of doing this is by setting the "ANT_OPTS" environment variable. e.g. set ANT_OPTS=-Xmx512m</li>
          <li>Use the "Tools/Garbage Collect" menu option or the gc ZKM Script statement after opening your classes and before obfuscating.</li>
          <li>Install more physical memory.</li>
        </ul>
        <h3>Q16. Why does Zelix KlassMaster(TM) run so slowly?</h3>
        <ul>
          <li>Your computer may have insufficient real memory installed. If your computer has to use virtual memory performance will be very poor. You will notice that the hard disk is being very heavily utilized.</li>
          <li>You are obfuscating while viewing a very large class or method. This results in reduced performance due to the overhead of updating the class or method details in the View Panel.</li>
        </ul>
        <h3>Q17. How do I obfuscate classes with native methods?</h3>
        <ul>
          <li>the names of the native methods themselves and</li>
          <li>the fully qualified names of the classes that contain them</li>
        </ul>
        <h3>Q18. I used the Zelix KlassMaster(TM) ZKM Script Helper to create a ZKM Script file but when I run it I get warnings. Why?</h3>
        <h3>Q19. Can Zelix KlassMaster(TM) obfuscate JSPs?</h3>
        <h3>Q20. Won't flow obfuscation slow down my code and make it bigger?</h3>
        <ul>
          <li>the bytecode that is being obfuscated,</li>
          <li>the JVM used to execute the bytecode,</li>
          <li>the flow obfuscation option used.</li>
          <li>use "light" flow obfuscation,</li>
          <li>use the ZKM Script obfuscateFlowExclude statement to exclude performance critical methods from flow obfuscation.</li>
        </ul>
        <h3>Q21. Can I tell Zelix KlassMaster(TM) not to flow obfuscate certain methods?</h3>
        <h3>Q22. Why aren't all my methods flow obfuscated?</h3>
        <h3>Q23.What is the difference between "normal", "aggressive", "flow obfuscate" and "enhanced" String encryption?</h3>
        <h3>Q24. After obfuscation, why don't my classes work properly?</h3>
        <ul>
          <li>You didn't open all your classes inside Zelix KlassMaster(TM) before obfuscating</li>
          <li>Your application Uses the Java(TM) Reflection API and</li>
          <li>Zelix KlassMaster(TM) has reported that there are some Reflection API calls in your bytecode that it may not be able to automatically handle and</li>
          <li>You didn't exclude the names of the classes, fields or methods that are accessed by those Reflection API calls.</li>
          <li>Upgrade to a more recent JIT. Of course it isn't always practical to ask your users to upgrade their JITs. JITs that are known to cause bugs with flow obfuscated bytecode are: Microsoft VMs earlier than 5.00.3167</li>
          <li>Symantec JITs earlier than 3.00.072b.</li>
          <li>some of the IBM 1.3 JVMs</li>
          <li>If you obfuscated with "aggressive" flow obfuscation, try the "normal" setting.</li>
          <li>If you obfuscated with "normal" flow obfuscation, try the "light" setting. The "light" setting should eliminate most problems.</li>
          <li>If you can identify the flow obfuscated method that is triggering the JIT bug then you can use the ZKM Script obfuscateFlowExclude statement to exclude that method from flow obfuscation.</li>
          <li>As a last resort you can switch off flow obfuscation altogether by using the "none" option.</li>
        </ul>
        <h3>Q25. What does the message "WARNING: changeLogIn fileName : Method oldMethodName in class className1 is mapped to new name newMethodName1 but the corresponding method in class className2 is mapped to new name newMethodName2 . Using mapping of newMethodName2 for both methods" mean?</h3>
        <ul>
          <li>you have directly edited the change log file and make some mistakes or</li>
          <li>your application has changed so that there are now polymorphic relationships between two or more methods that where previously unrelated.</li>
        </ul>
        <h3>Q26. How does the Input Change Log functionality interact with the name exclusion functionality?</h3>
        <ul>
          <li>the input change log contains inconsistent or conflicting information. For example if it contains duplicate new package, class, field or method names</li>
          <li>contains fully qualified new class names that conflict with the corresponding new package name</li>
          <li>the input change log contains information that cannot be validly applied to the opened classes. For example if it</li>
          <li>would incorrectly make or break a polymorphic relationship between methods.</li>
        </ul>
        <h3>Q27. If I exclude a class from being obfuscated will the class's methods still be obfuscated?</h3>
        <ul>
          <li>on the obfuscation of that class's field and method names or</li>
          <li>on the flow obfuscation or String encryption of any of its methods. To exclude methods from flow obfuscation you must use the ZKM Script obfuscateFlowExclude statement. To exclude String literals from encryption you must use the ZKM Script stringEncryptionExclude statement.</li>
        </ul>
        <h3>Q28. Can I edit a change log and then use it as an input change log so that I can predetermine new class, field or method names?</h3>
        <h3>Q29. I have a number of applets in the default package that I obfuscate separately. How do I stop Zelix KlassMaster(TM) from giving them the same name (e.g."a.class")?</h3>
        <h3>Q30. What is the easiest way of excluding non-static, non-transient fields from being renamed in serializable classes?</h3>
        <h3>Q31. My application will consist of a client jar file and server jar file which share some common classes. How do I obfuscate it?</h3>
        <ul>
          <li>Initially obfuscate your client and server jar files together in one pass generating an overall change log.</li>
          <li>If you make changes to only one of the jar files then obfuscate both your client and server jar files together in one pass once more using the change log generated in the step above as an input change log. Release just the changed jar.</li>
          <li>Use the change log generated in the second step as the new overall change log.</li>
        </ul>
        <h3>Q32. Does Zelix KlassMaster(TM) support incremental obfuscation?</h3>
        <ul>
          <li>consistent package, class, field and method renaming and</li>
          <li>consistent flow obfuscation</li>
        </ul>
        <h3>Q33. Can Zelix KlassMaster(TM) be called from a build tool such as Apache Ant?</h3>
        <h3>Q34. Can I access environment variables from within a ZKM Script?</h3>
        <h3>Q35. Our application uses Java Serialization. How does this impact obfuscation?</h3>
        <ul>
          <li>add name exclusions for the fully qualified name of the class</li>
          <li>the name of every field contained or inherited by the class</li>
          <li>the fully qualified class name of the type of each non-primitive field contained or inherited by the class</li>
          <li>add a serialVersionUID field to the class (if it doesn't already exist) set to a value based upon the non-obfuscated class definition.</li>
        </ul>
        <h3>Q36. Does Zelix KlassMaster(TM) support ResourceBundles as used in Localization and Internationalization?</h3>
        <h3>PropertyResourceBundles</h3>
        <ul>
          <li>Has a name containing an unqualified class name (e.g. "pack1.pack2. MyClass0 .properties") and</li>
          <li>The name of the class is used to get the name of the resource bundle (e.g. " ResourceBundle.getBundle(getClass().getName()) ")</li>
        </ul>
        <h3>ListResourceBundles</h3>
        <ul>
          <li>package1.Class1_de ,</li>
          <li>package1.Class1_de_DE ,</li>
          <li>package1.Class1_fr and</li>
          <li>package1.Class1_fr_CH</li>
        </ul>
        <pre class="code"><code>exclude *.&lt;link&gt;_de and
        *.&lt;link&gt;_de_DE and
        *.&lt;link&gt;_fr and
        *.&lt;link&gt;_fr_CH;</code></pre>
        <h3>Q37. Why do I get a ClassCastException when I try to obfuscate bytecode compiled with Java 5 (i.e. JDK 1.5)?</h3>
        <h3>Q38. How do I refer to inner classes in ZKM Script statements?</h3>
        <h3>Q39. I am getting "Proguard returned with error code 1". How do I find out what is wrong?</h3>
        <h3>Q40. What settings do I use for Android&amp;#153 Apps?</h3>
        <pre class="code"><code>classpath   "/usr/local/java/android-sdk/platforms/android-9/android.jar"
            ;

open        "bin/classes\*"
            "libs\*"
            ;

trimExclude 
   public *.^*^ extends android.app.Activity and 
   public *.^*^ extends android.app.Application and 
   public *.^*^ extends android.app.Service and 
   public *.^*^ extends android.content.BroadcastReceiver and 
   public *.^*^ extends android.content.ContentProvider and 
   public *.^*^ extends android.view.View public &lt;init&gt;(android.content.Context) and 
   public *.^*^ extends android.view.View public &lt;init&gt;(android.content.Context,android.util.AttributeSet) and 
   public *.^*^ extends android.view.View public &lt;init&gt;(android.content.Context,android.util.AttributeSet,int) and 
   public *.^*^ extends android.view.View public set*(*) and 
   *.^*^ containing {public &lt;init&gt;(android.content.Context,android.util.AttributeSet)} 
      public &lt;init&gt;(android.content.Context,android.util.AttributeSet) and 
   *.^*^ containing {public &lt;init&gt;(android.content.Context,android.util.AttributeSet,int)} 
      public &lt;init&gt;(android.content.Context,android.util.AttributeSet,int) and 
   *.* extends android.content.Context public *(android.view.View) and 
   *.* extends android.content.Context public *(android.view.MenuItem) and 
   *.* implements android.os.Parcelable static android.os.Parcelable$Creator CREATOR and 
   *.R$* public static * and 
   *.* @android.webkit.JavascriptInterface *(*)
   ;

trim        deleteDeprecatedAttributes=true
            deleteSourceFileAttributes=true
            deleteAnnotationAttributes=false
            deleteExceptionAttributes=true
            //deleteUnknownAttributes=true
            ;

exclude     
   public *.^*^ extends android.app.Activity and 
   public *.^*^ extends android.app.Application and 
   public *.^*^ extends android.app.Service and 
   public *.^*^ extends android.content.BroadcastReceiver and 
   public *.^*^ extends android.content.ContentProvider and 
   public *.^*^ extends android.view.View public &lt;init&gt;(android.content.Context) and 
   public *.^*^ extends android.view.View public &lt;init&gt;(android.content.Context,android.util.AttributeSet) and 
   public *.^*^ extends android.view.View public &lt;init&gt;(android.content.Context,android.util.AttributeSet,int) and 
   public *.^*^ extends android.view.View public set*(*) and 
   *.^*^ containing {public &lt;init&gt;(android.content.Context,android.util.AttributeSet)} 
      public &lt;init&gt;(android.content.Context,android.util.AttributeSet) and 
   *.^*^ containing {public &lt;init&gt;(android.content.Context,android.util.AttributeSet,int)} 
      public &lt;init&gt;(android.content.Context,android.util.AttributeSet,int) and 
   *.* extends android.content.Context public *(android.view.View) and 
   *.* extends android.content.Context public *(android.view.MenuItem) and 
   *.* implements android.os.Parcelable static android.os.Parcelable$Creator CREATOR and 
   *.R$* public static * and 
   *.* @android.webkit.JavascriptInterface *(*)
   ;

obfuscate   keepGenericsInfo=false
            keepInnerClassInfo=false
            obfuscateFlow=none //can change from none to light, normal or aggressive
            encryptStringLiterals=none //can change from none to normal, aggressive, flowObfuscate or enhanced
            exceptionObfuscation=none //can change from none to light or heavy
            autoReflectionHandling=none //can change from none to normal
            randomize=false //can change from false to true
            collapsePackagesWithDefault=""
            preverify=false //don't need to preverify if only used for Android
            mixedCaseClassNames=ifInArchive
            keepBalancedLocks=true //ensures compatibility with ART verifier
            ;

saveAll     archiveCompression=all
            "bin/classes-processed.jar"
            ;</code></pre>
        <h3>Q41. What are default exclusions?</h3>
        <h3>Q42. Won't the Reference Obfuscation function slow down my code and make it bigger?</h3>
        <h3>Q43. By how much will parallel processing reduce obfuscation time?</h3>
        <ul>
          <li>The obfuscation options that have been selected,</li>
          <li>The number of processors that are available and</li>
          <li>The amount of heap space that is available.</li>
        </ul>
        <h3>Q44. What do the "API warnings detected during open" or "API calls detected that may not be handled automatically" messages mean?</h3>
        <ul>
          <li>The name of the class being obfuscated which contains the unresolved Reflection API call,</li>
          <li>The name of the method being obfuscated which contains the unresolved Reflection API call and</li>
          <li>The signature the Reflection API call.</li>
          <li>The String returned by java.lang.Class.getName() is compared to another String containing a class name AND</li>
          <li>The second String is not effectively a String literal containing a full class name AND</li>
          <li>The class which has its named stored in the second String will have its name obfuscated.</li>
        </ul>
        <h3>Q45. Does Zelix KlassMaster(TM) support Java bytecode generated from Kotlin(TM) source?</h3>
        <pre class="code"><code>//Specify removal of non-essential validity check methods
removeMethodCallsInclude 
   kotlin.jvm.internal.Intrinsics throwUninitializedPropertyAccessException(java.lang.String) and
   kotlin.jvm.internal.Intrinsics checkExpressionValueIsNotNull(java.lang.Object, java.lang.String) and
   kotlin.jvm.internal.Intrinsics checkFieldIsNotNull(java.lang.Object, java.lang.String) and
   kotlin.jvm.internal.Intrinsics checkFieldIsNotNull(java.lang.Object, java.lang.String, java.lang.String) and
   kotlin.jvm.internal.Intrinsics checkNotNull(java.lang.Object) and
   kotlin.jvm.internal.Intrinsics checkNotNull(java.lang.Object, java.lang.String) and
   kotlin.jvm.internal.Intrinsics checkNotNullExpressionValue(java.lang.Object, java.lang.String) and
   kotlin.jvm.internal.Intrinsics checkNotNullParameter(java.lang.Object, java.lang.String) and
   kotlin.jvm.internal.Intrinsics checkParameterIsNotNull(java.lang.Object, java.lang.String) and
   kotlin.jvm.internal.Intrinsics checkReturnedValueIsNotNull(java.lang.Object, java.lang.String) and
   kotlin.jvm.internal.Intrinsics checkReturnedValueIsNotNull(java.lang.Object,java.lang.String,java.lang.String)
   ;

//"removeMethodCalls" statement should precede any "trim" or "obfuscate" statements. removeMethodCalls;

exclude kotlin.* + and //exclude all classes, fields and methods in kotlin package
        kotlin.*.* + and //exclude all classes, fields and methods in kotlin sub-packages
        org.jetbrains.kotlin.* + and //exclude all classes, fields and methods in package
        org.jetbrains.kotlin.*.* + //exclude all classes, fields and methods in packages
        ;</code></pre>
        <p>What does the message "WARNING: changeLogIn fileName : Method oldMethodName in class</p>
        <p>className1 is mapped to new name newMethodName1 but the corresponding method in class className2</p>
        <p>is mapped to new name newMethodName2 . Using mapping of newMethodName2 for both methods" mean?</p>
        <p>It is recommended that you initially use the GUI Build Helper tool to get a feeling for the processing sequence and then to create your first ZKM Script .</p>
        <p>It is also highly recommended that you at least read the basic exclusions part of the ZKM Script Exclusions Tutorial</p>
        <p>before modifying your first ZKM Scripts.</p>
        <p>See the Getting Started page of the documentation for more detail.</p>
        <p>If you are not getting a useful error message, try running with the -verify and -verbose switches of the JVM.</p>
        <p>Yes. Although, Zelix KlassMaster(TM) requires only a recent Java 8 JVM to run, it can handle Java 9 through to Java 27 bytecode including modules.</p>
        <p>Of course Zelix KlassMaster(TM) will also open and process Java 1.1 through to Java 8 bytecode.</p>
        <p>All you need to do is set the Zelix KlassMaster(TM) classpath to point to the appropriate bootstrap classes.</p>
        <p>For Java 2 through to Java 8 that is the corresponding rt.jar . For Java 9 to Java 27 it is the corresponding lib\jrt-fs.jar file system.</p>
        <p>The major differences between the evaluation version and the commercial version are as follows:</p>
        <p>Zelix KlassMaster(TM) is written entirely in Java 8 (i.e. JDK 1.8) and technically should run on any platform that supports a Java 8 or better Virtual Machine.</p>
        <p>However, note that Zelix KlassMaster(TM) version 10 or better requires a newer version of a Java 8 JVM to run. If you use an Oracle JVM earlier than 1.8.0_152 then you may get a JVM crash due to HotSpot bugs.</p>
        <p>Also note that Zelix KlassMaster(TM) version 27 currently may not run successfully on older versions (e.g. pre-Aug 2020) of the Eclipse OpenJ9 JVM due to a JVM bug.</p>
        <p>More generally, differences in the file systems and GUIs can also cause problems. Further, Zelix KlassMaster's flow obfuscation technology can expose bugs in some Just in Time (JIT) compilers.</p>
        <p>Zelix KlassMaster(TM) has been tested successfully using the following environments.</p>
        <p>However, Zelix KlassMaster(TM) 27 will not reliably run on IBM Semeru Runtimes that make use of the Eclipse OpenJ9 VM due to a suspected JIT compiler bug.</p>
        <p>If you use such a IBM Semeru Runtime then Zelix KlassMaster(TM) may throw an exception or the JVM may crash.</p>
        <p>Alternatively the obfuscated software produced may throw an exception or crash the JVM.</p>
        <p>This can be worked around by using the -Xint JVM command line option but at the cost of a dramatic loss of performance.</p>
        <p>The suspected JIT compiler bug has been reported to IBM.</p>
        <p>Yes. Zelix KlassMaster(TM) supports JEE .</p>
        <p>Its default exclusions and its SmartSave(TM) technology provide automatic support for servlets, the EJB 1 specification and the EJB 3 specification to the extent that you have used annotations rather than XML.</p>
        <p>If your application is an EJB 2 application that uses advanced features such as container managed persistence then we recommend that, for all classes directly related to the EJBs, you exclude</p>
        <p>If your EJB related classes are in specific packages then it should be quite easy to specify these exclusions in ZKM Script. Flow obfuscation and String encryption should cause no JEE problems.</p>
        <p>Yes. Zelix KlassMaster(TM) supports Spring and Hibernate(TM) by automatically updating the XML to reflect any obfuscated names. However, there are some minor qualifiactions .</p>
        <p>Yes. Zelix KlassMaster(TM) supports Java ME .</p>
        <p>There is a plugin for the Sun Java ME Wireless Toolkit.</p>
        <p>If you are not using the Sun Java ME Wireless Toolkit then see the Java ME obfuscation tutorial for more detail on the steps invloved.</p>
        <p>Yes. Zelix KlassMaster(TM) supports Google Android(TM) by obfuscating the Java class files before they are converted into an APK file. Depending on your build environment you may need to use of Zelix KlassMaster(TM)'s ProGuard compatibility .</p>
        <p>There are a number of reasons why all class, field or method names don't change when you obfuscate.</p>
        <p>The name of a package scoped method is overridden to be protected or public in a subclass.</p>
        <p>If your obfuscate options say that protected or public method names shouldn't be changed then the overridden method name can't be changed without breaking the polymorphic link.</p>
        <p>Encrypted strings are decrypted at runtime using code that has been added to your classes.</p>
        <p>This means that the classes will run slightly slower and will be bigger.</p>
        <p>How much slower and bigger depends on how many String literals there are in your bytecode and the option selected.</p>
        <p>Typically the performance impact is insignificant.</p>
        <p>The bytecode size increase if all Strings are encrypted is typically in the range of 10% to 30%.</p>
        <p>The enhanced setting will result in the biggest increase in bytecode size but it will also provide the best protection.</p>
        <p>It is recommended that you measure the impact on your classes.</p>
        <p>When you change a method name, Zelix KlassMaster(TM) automatically changes all method names that are polymorphically linked to that method. So overridden methods in superclasses and overriding methods in subclasses must also be renamed. If the method is an implementation of an interface method then the method in the interface and the corresponding methods in all classes that implement that interface must also be renamed. So the change can ripple across to different branches of the class hierarchy.</p>
        <p>The answer to Q8 explains how a method name change can ripple across to different branches of the class hierarchy. So Zelix KlassMaster(TM) must check that the new name wont clash with existing names in these other classes. A name clash occurs if the proposed new signature</p>
        <p>This will happen if you obfuscate your bytecode using Java illegal identifiers and you have run you code with verification switched on.</p>
        <p>You cannot use illegal identifiers if your classes must run after being verified.</p>
        <p>Alternatively, you will get such messages even when not runing with verification if you have renamed your highest level package qualifiers so that class names are Java illegal when fully qualified .</p>
        <p>For example a class named com.1.0 will cause no problems when running without verification but a class named 1.1.0 will cause problems.</p>
        <p>The short answer is yes. Zelix KlassMaster(TM)'s AutoReflection(TM) functionality can automatically handle Java Reflection API calls.</p>
        <p>However, it is highly recommended that you also explicitly specify the subset of classes, fields and methods that are accessed by unresolved Reflection API calls by using the</p>
        <p>accessedByReflection and/or accessedByReflectionExclude statements.</p>
        <p>If you choose not to use the AutoReflection(TM) functionality, Zelix KlassMaster(TM) can still automatically handle many simple Java Reflection API calls.</p>
        <p>When Zelix KlassMaster(TM) opens your classes, it detects Java Reflection API calls that access classes, fields or methods and it automatically looks for the source of the class, field or method name which is being passed to the Reflection API method.</p>
        <p>If Zelix KlassMaster(TM) can find a String literal which contains the name of the class, field or method then it is said to have "resolved" that call.</p>
        <p>Zelix KlassMaster(TM) automatically handles such resolved Reflection API calls by updating the String literal that holds the class, field or method name to reflect the corresponding obfuscated name.</p>
        <p>Regardless of whether or not you use the the AutoReflection(TM) functionality, if Zelix KlassMaster(TM) cannot fully resolve a Reflection API call then it lists the unresolved call in the Class Open Warnings window if you are using the GUI or in the Zelix KlassMaster(TM) log (which is named "ZKM_log.txt" by default) under the heading "API calls detected that may not be handled automatically...".</p>
        <p>Zelix KlassMaster(TM) may still be able to automatically process classes that appear in the Class Warnings list (even if not you don't use the AutoReflection(TM) functionality).</p>
        <p>For example, calls to Class.getName() are often made purely for debugging purposes.</p>
        <p>Also, in certain situations, Zelix KlassMaster(TM) can change the contents of a string containing a class name to match the new class name.</p>
        <p>In any case, the user must look at the way the call is used to determine if the class can be reliably processed automatically.</p>
        <p>then the package, class, field or method that is accessed by name by that call must be explicitly excluded from being renamed.</p>
        <p>When Zelix KlassMaster(TM) opens a class that it might not be able to trim or obfuscate reliably it reports the fact using the "Class Open Warnings" window.</p>
        <p>You may get the Class Open Warnings window when an opened class contains a Java Reflection API call to a method like one of the following:</p>
        <p>Note that the Class Open Warnings window lists</p>
        <p>Note that it does not name the class, field or method that is being accessed by name .</p>
        <p>Of course it cannot do that because the Reflection API call could not be fully analyzed.</p>
        <p>Please see the answer to Q11 for detail on what to do if you get "Class Open Warnings".</p>
        <p>Some obfuscators add corrupt information to bytecode files in the hope of confusing or crashing decompilers.</p>
        <p>Zelix KlassMaster(TM) detects this corrupt information and reports the fact using the Class Open Errors window?</p>
        <p>Corrupt Local Variable Table and Inner Class information is automatically removed.</p>
        <p>Zelix KlassMaster(TM) will also report the existence of duplicate classes if the classes</p>
        <p>Obfuscation of even a mildly complicated application is not trivial. For this reason it is highly recommended that you start by using minimal obfuscation.</p>
        <p>Once you have your minimally obfuscated application working satisfactorily then you can iteratively increase the level of obfuscation.</p>
        <p>Please see the Getting Started for some preliminary advice.</p>
        <p>It is highly recommended that you do not use the Trim function until you have your obfuscated application working.</p>
        <p>Once your obfuscated application is working you will find that your ZKM Script exclude statement exclusion parameters will provide an excellent guide to the necessary ZKM Script trimExclude statement parameters.</p>
        <p>Generally, you don't need to keep the inner class information so you select "false" in the "Keep inner class information" list.</p>
        <p>This will reduce the size of your bytecode. Typically, JVMs make no use of inner class information at runtime.</p>
        <p>However, compilers do make use of inner class information at compile time.</p>
        <p>So, if your classes form a library which third party classes will be compiled against and if some of your inner classes are exposed to the user then you will need to select either "true" or "if name not obfuscated" from the "Keep inner class information" list.</p>
        <p>Selecting "true" will preserve all inner class information.</p>
        <p>Similarly, you generally don't need to keep the generics information of your classes so you select "false" in the "Keep generics information" list.</p>
        <p>Typically, JVMs make no use of generics information at runtime and removing the generics information will reduce the size of your bytecode.</p>
        <p>However, compilers do make use of generics information at compile time.</p>
        <p>So, if your classes form a library which third party classes will be compiled against then you should select "true" from the "Keep generics information" list.</p>
        <p>The String Encryption "encrypt string literals" option is generally safe. However, use of the "aggressive", "flowObfuscate" or "enhanced" settings can, in certain unusual circumstances, result in the contents of public static final String fields of some interfaces not being accessible to classes outside of the set that you have obfuscated. If this happens, you will get a warning message in the Zelix KlassMaster(TM) log.</p>
        <p>Also, note that String encryption does make your bytecode larger and slightly slower (see the answer to Q7 ).</p>
        <p>For maximum resistance to deobfuscation, it is recommended that you use the "enhanced" setting along with the Method Parameter Changes functionality.</p>
        <p>If you are obfuscating an applet note that there are known bugs in the JITs of the early browsers that can be exposed by flow obfuscation.</p>
        <p>If you flow obfuscate using the "light" option then the risk of JIT problems will be greatly reduced.</p>
        <p>Nonetheless, if you flow obfuscate your applet then test it thoroughly.</p>
        <p>The Reference Obfuscation functionality when used in conjunction with the the Method Parameter Changes functionality can make decompiled bytecode very difficult to understand. However, its use of the Reflection API can slow your application down.</p>
        <p>The performance impact can be quite dramatic in the case of pre-Java 8 bytecode where the JVM's invokedynamic instruction is not available and the Reflection API must be used instead.</p>
        <p>It is recommended that you obfuscate only those references that are not accessed many times and which do not appear in performance critical areas of your code.</p>
        <p>For example, as a rule of thumb, we would suggest that you do not obfuscate a reference which will be used more than 75,000 times (1,000 times for pre-Java 8) within a short spell of processing.</p>
        <p>Typically you could safely obfuscate those "high level" references which occur only a limited number of times as a user enters sensitive parts of your application.</p>
        <p>Otherwise, it is generally recommended that you do not use Reference Obfuscation functionality until after you have your obfuscated application working satisfactorily using the more straightforward features.</p>
        <p>The Method Parameter Obfuscation functionality obfuscates method parameter lists by replacing them with a single Object[] parameter.</p>
        <p>Note that only methods that will have their names obfuscated will be eligible for method parameter obfuscation.</p>
        <p>The combination of method Name Obfuscation and Method Parameter Obfuscation reduces the comprehensibility of the Java source code produced by a decompiler.</p>
        <p>Method Parameter Obfuscation also obscures the changes made by the Method Parameter Changes functionality.</p>
        <p>Note that the Method Parameter Obfuscation functionality can have a significant performance impact.</p>
        <p>For this reason it is recommended that you exclude any performance critical methods from having their parameter lists obfuscated.</p>
        <p>The Method Parameter Changes functionality is essential if you want maximum protection against deobfuscation.</p>
        <p>As mentioned above, the functionality significantly hardens the String Encryption and Reference Obfuscation</p>
        <p>You could consider using the flowObfuscate setting which results in a special kind of Flow Obfuscation which is more difficult to reverse than the classic Flow Obfuscation.</p>
        <p>If your classes make up a self-contained application then it should be safe to change all package, class, field and method names other than those of the public static main(String[]) method and the class that contains it. You can achieve this by selecting the "Self contained application or applet" application type and by selecting your entry paint class in the "Don't change main class name" list.</p>
        <p>If you are obfuscating a set of classes that will be used by third parties as a non-extensible class library then you should</p>
        <p>You can achieve this is the GUI by selecting the "Non-extensible class library" application type.</p>
        <p>If you are obfuscating a set of classes that will be used by third parties as an extensible framework then you should</p>
        <p>You can achieve this is the GUI by selecting the "Extensible framework" application type.</p>
        <p>using the "aggressive", "flowObfuscate" or "enhanced" settings but excluding all interfaces from String encryption using the ZKM Script</p>
        <p>statement. (e.g. " stringEncryptionExclude interface *.*;" )</p>
        <p>If your classes form a complex EJB 2 application or (an EJB 3 application where you have used XML rather than annotations) then the easiest solution is to exclude all public classes, fields and methods that are directly related to the EJBs.</p>
        <p>Otherwise it should be safe to use light flow obfuscation and String encryption.</p>
        <p>If the size of your bytecode is critical then select the "delete" line numbers option.</p>
        <p>However, if you are obfuscating for a beta release or if the size of your code isn't critical then you can select the "scramble" line numbers option.</p>
        <p>The code will be larger but you will find crashes much easier to track down.</p>
        <p>By default, Zelix KlassMaster(TM) deletes all local variable information. This information is primary used for debugging purposes and is not essential at runtime.</p>
        <p>However, the localVariables parameter of the ZKM Script</p>
        <p>statement allows you to keep all or some of the local variable information or to obfuscate that information.</p>
        <p>When using ZKM Script, you generally should use the "delete" local variable setting (which is the default). This is particularly the case if the size of your bytecode is important.</p>
        <p>However, if you are obfuscating a class library and need the method signatures to be previewable in IDEs then you should use the "keepVisibleMethodParameters" or "keepVisibleMethodParametersIfNotObfuscated" settings. (If you are using Java 8 then see the "Method parameters" section below.) See the documentation for the</p>
        <p>You can use the "obfuscate" setting to slightly complicate any attempts at decompilation but this will result in increased bytecode size when compared to the use of the "delete" setting.</p>
        <p>Generally it is recommended that you never use the "keep" setting outside of your development environment.</p>
        <p>Java 8 introduced the optional MethodParameters attribute which stores the names of your method parameters and some access flag information.</p>
        <p>These attributes are created only if you specify the -parameters compiler option.</p>
        <p>However, if you are obfuscating a class library and need the method signatures to be previewable in IDEs then you should use the "keepVisible" or "keepVisibleIfNotObfuscated" settings.</p>
        <p>It is highly recommended that you always use the "legal identifiers" option.</p>
        <p>This option is now available only in ZKM Script and only for the purposes of backwards compatibility.</p>
        <p>If you are obfuscating an application that doesn't have to run with verification switched on then you can get extra protection with this option but they will cause problems with modern JVMs.</p>
        <p>Please note that whatever options you choose it remains your responsibility to fully test or retest your classes</p>
        <p>after they have been processed by Zelix KlassMaster(TM).</p>
        <p>Zelix KlassMaster(TM) holds a lot of information in memory for each class that it opens.</p>
        <p>So, the more classes you open and the more complicated those classes are the more memory you need.</p>
        <p>If Zelix KlassMaster(TM) tells you that there was insufficient memory to open your classes or if it crashes with an OutOfMemoryError then you can do one of the following:</p>
        <p>Give Java more memory to work with by using the -Xmx??m option where ?? represents the number of megabytes.</p>
        <p>(For example, the option -Xmx512m gives Java 512MB of heap space.)</p>
        <p>When you are running Zelix KlassMaster(TM) via Ant then you need to give more memory to Ant itself. An easy way of doing this is by setting the "ANT_OPTS" environment variable.</p>
        <p>It is not recommended that you make use of virtual memory (by giving Java more memory to work with than is physically installed.) Performance will be unreasonably degraded as memory is swapped to and from the disk.</p>
        <p>There are a number of reasons Zelix KlassMaster(TM) may run slowly.</p>
        <p>Zelix KlassMaster's default exclusions will automatically handle any native methods by ensuring that</p>
        <p>However, Zelix KlassMaster(TM) has no way of knowing if your native code accesses your Java fields or methods. If your native code does access any of your Java fields or methods then you will need to explicitly exclude the accessed member names and the fully qualified names of the classes that contain them from obfuscation.</p>
        <p>The current version of the ZKM Script Helper does not validate all of your choices to ensure they are not contradictory. For example, it will allow you to exclude final abstract methods even though such methods cannot exist. The parser will give you a warning in this case.</p>
        <p>Zelix KlassMaster(TM) cannot obfuscate JSP (Java Server Page) source but it can obfuscate the servlet that is generated from a JSP.</p>
        <p>However, problems can arise if a JSP servlet is automatically regenerated at runtime replacing the class produced by Zelix KlassMaster. If this can happen in your environment then you should specify your JSP servlet classes as "fixed" by using the ZKM Script fixedClasses statement. For example you could say:</p>
        <p>fixedClasses *.* implements javax.servlet.jsp.JspPage;</p>
        <p>Generally, Zelix KlassMaster's flow obfuscation will slightly increase the size of your bytecode and it will reduce its performance.</p>
        <p>It is a trade off between the degree of protection against decompilation and bytecode size and speed.</p>
        <p>The table below shows the approximate bytecode size increase in a compressed JAR file that could be expected for typical applications.</p>
        <p>Note that the size increase will vary from application to application and you should measure the impact on your bytecode.</p>
        <p>The performance impact of flow obfuscation varies depending upon</p>
        <p>When the HotSpot(TM) 1.8.0 JVMs are used, the performance impact for general purpose applications is insignificant.</p>
        <p>However, the performance impact on extremely CPU intensive applications will be greater.</p>
        <p>Also, the the impact when other JVMs (e.g IBM) using JIT compiler technology will be greater.</p>
        <p>Again, it is recommended that you measure the impact on your classes. If you experience an unacceptable performance impact then you should</p>
        <p>You can use the ZKM Script "obfuscateFlowExclude" statement to specify methods that you don't want flow obfuscated.</p>
        <p>This functionality is not yet available in the GUI interface. (Note that the name exclusion functionality has no impact at all on flow obfuscation.)</p>
        <p>Zelix KlassMaster(TM) only attempts to obfuscate the flow of methods that already have some control flow complexity.</p>
        <p>So methods without if , switch , while or for constructs will not be flow obfuscated. Also there are small percentage of methods with some control flow complexity that Zelix KlassMaster(TM) cannot yet flow obfuscate. Finally, note that the evaluation version will only flow obfuscate one or two methods in each opened class.</p>
        <p>"Normal" String encryption encrypts all String literals that are accessed by methods in the defining class.</p>
        <p>This can mean that the values of some final String fields were not obfuscated. For example, String constants in interfaces would typically not be encrypted.</p>
        <p>"Aggressive" String encryption uses a more sophisticated approach that can normally encrypt Strings even in interfaces.</p>
        <p>The "flow obfuscate" option is the same as the "aggressive" option but causes the runtime decryption instructions, that is inserted into your bytecode, to be flow obfuscated. This makes the decrypt instructions harder to decompile but it could cause problems with some JITs.</p>
        <p>Note that the limitations mentioned above for the "aggressive" option also apply for the "flow obfuscate" option.</p>
        <p>Note also that the String Encryption "flow obfuscate" option is quite independent of the general Flow Obfuscation functionality.</p>
        <p>You can choose to have one without the other.</p>
        <p>The "enhanced" option is the same as the "flow obfuscate" option but uses an extra decrypt key.</p>
        <p>This makes the String encryption harder to reverse.</p>
        <p>For maximum resistance against deobfuscation, it is recommended that you use the "enhanced" setting along with the Method Parameter Changes functionality.</p>
        <p>If you get any of the runtime errors "ClassFormatError", "VerifyError", "NoClassDefFoundError" or "Can't find class Classname " see the answer to Q10 .</p>
        <p>Another reasons for errors such as "NoClassDefFoundError", "Can't find class Classname " or "NoSuchMethodError" are:</p>
        <p>Please see the answer to Q12 for more detail.</p>
        <p>Finally, if you used Flow Obfuscation and your classes are causing the VM to crash (typically with a memory access error) or if you are getting an unexpected NullPointerException, you may be running foul of a bug in the JIT. To test this, run your application with the JIT switched off.</p>
        <p>If the problems occur only when the JIT is being used you should:</p>
        <p>Upgrade to a more recent JIT. Of course it isn't always practical to ask your users to upgrade their JITs. JITs that are known to cause bugs with flow obfuscated bytecode are:</p>
        <p>The warning message indicates that the method name mappings in the Input Change Log are inconsistent for the opened classes. This can happen if</p>
        <p>In either case, Zelix KlassMaster(TM) handles the situation automatically to ensure the obfuscated bytecode is OK.</p>
        <p>If you are using the GUI or if you specified an input change log using the changeLogFileIn parameter of the ZKM Script obfuscate statement then Zelix KlassMaster(TM) will always try to rename packages, classes, fields and methods to the names specified by the input change log. All the other statements such as the exclude and obfuscate statements remain fully active but generally they will only have impact on the names of packages, classes, fields and methods that do not already appear in the input change log.</p>
        <p>So, for example, if the input change log clashes with the exclusions that have been set (or haven't been set) then warnings will be generated but the input change log will be given priority. The only exceptions are where:</p>
        <p>the input change log contains inconsistent or conflicting information. For example if it</p>
        <p>contains duplicate new package, class, field or method names</p>
        <p>However, if you specified an input change log using the looseChangeLogFileIn parameter of the ZKM Script obfuscate statement then your exclusions will take precedence over the change log mappings.</p>
        <p>However, this could mean that the newly obfuscated classes will not be fully consistent with your previous release.</p>
        <p>Yes. If you specify a class in the exclude statement or using the GUI's Obfuscate Advanced Name Exclusion Options Dialog, you are excluding only the class name from obfuscation.</p>
        <p>Excluding a class name from obfuscation has no effect</p>
        <p>on the flow obfuscation or String encryption of any of its methods.</p>
        <p>To exclude methods from flow obfuscation you must use the ZKM Script</p>
        <p>statement. To exclude String literals from encryption you must use the ZKM Script</p>
        <p>Yes but be careful. If you are using a change log that was generated when you obfuscated a release of your application or applet then make sure you edit a copy.</p>
        <p>You may still need the original to interpret stack dumps from the released bytecode.</p>
        <p>Also, be careful when you choose you predetermined names. It's a complicated business - especially if you are predetermining method names.</p>
        <p>Zelix KlassMaster(TM) will perform a large number of cross checks on your input change log and on your opened classes but it may not check for every possible conflict. If Zelix KlassMaster(TM) gives you warnings then read them carefully.</p>
        <p>Note that Zelix KlassMaster's ZKM Script language allows you to specify more than one input change log. So you could specify an small, edited input change log that specifies only your changes followed by the full, original input change log. This can be a safer approach.</p>
        <p>It causes problems when different applets (or different classes used by different applets) are given the same name. Browsers and proxy servers can get confused. The recommended solution is to put your applets in different packages that are unique to your organisation and to exclude those package names from obfuscation. If you then obfuscate the package as a whole, then each class will be given a unique name within the name space of the package.</p>
        <p>However, it is recognized that, for various reasons, not everyone wants to do this. The best alternative way of handling this situation is to use Zelix KlassMaster's Input Change Log functionality. Perform a preliminary obfuscation with all of your applet classes opened inside Zelix KlassMaster. Don't bother saving the obfuscated classes. All you want is the "cross applet" change log with each class being given a unique name. Now obfuscate each of the individual applets using the "cross applet" change log as an input change log so that each class again gets its unique name. Retain the "cross applet" change log for use as an input change log in any subsequent releases of your applets. You only need save the individual applet change logs if you have used line number scrambling.</p>
        <p>Using the ZKM Script interface you can accomplish this easily with a statement like:</p>
        <p>exclude *.* implements java.io.Serializable !static !transient *;</p>
        <p>Using the GUI interface's Advanced Exclusion Options dialog, you can select "!static" and "!transient" from the drop down lists.</p>
        <p>Obfuscate your application as a whole in one pass. Zelix KlassMaster(TM) version 3 or better automatically handles issues relating to obfuscating multiple JAR files.</p>
        <p>If you will sometimes need to release just a changed client or server jar file then you should use Zelix KlassMaster's Input Change Log functionality to ensure consistent renaming across your releases. The steps are</p>
        <p>Yes. Zelix KlassMaster's Input Change Log functionality ensures</p>
        <p>across releases. It is generally recommended that you always open ALL the classes of the application inside Zelix KlassMaster.</p>
        <p>This gives Zelix KlassMaster(TM) the opportunity to ensure that all references are consistent.</p>
        <p>This is the case even if you are planning to distribute just the changed class subset in the form of some kind of patch.</p>
        <p>Zelix KlassMaster(TM) does provide some limited ability to obfuscate a subset of your application provided the mappings for the full application appears in an input change log.</p>
        <p>To do this you should set the allClassesOpened parameter of the</p>
        <p>and set the classpath so that the unobfuscated versions of all the unopened classes of the application can been located.</p>
        <p>However, if you are using the Trim function then you must still open your application as a whole.</p>
        <p>Yes. Zelix KlassMaster(TM) exposes a simple, generic Java API for use by build tools. It also provides an Ant task called ZKMTask.</p>
        <p>See the online documentation for a full description of the API and for extra detail on the Ant task definition.</p>
        <p>To access an enviroment variable such as PATH from within your ZKM script you should firstly add the environment variable to the System properties when you start Zelix KlassMaster. Use this syntax for Windows:</p>
        <p>If you running Zelix KlassMaster(TM) through Apache Ant then you can either add the environment variable to the Ant project properties or use the Zelix KlassMaster(TM) Ant task (ZKMTask) to add the environment variable to the System propeties. (See the online documentation for more detail.)</p>
        <p>Then access the variable in your ZKM Script by using the %...% delimiters. For example %PATH% .</p>
        <p>The Zelix KlassMaster(TM) preprocessor will perform the substitution.</p>
        <p>If you never have to deserialize a non-obfuscated class with a obfuscated class then Serialization presents no problems.</p>
        <p>Zelix KlassMaster(TM) will automatically handle the necessary exclusions using its defaults and its Input Change Log functionality can be used to ensure consistent renaming across releases.</p>
        <p>However, if you need to deserialize already existing (ie. unobfuscated) serialized instances using your obfuscated classes then your obfuscated classes need to be compatible for Serialization purposes with your unobfuscated classes.</p>
        <p>To achieve this compatibility you need to use the ZKM Script</p>
        <p>statement to specify the classes that have existing serialized instances.</p>
        <p>For each class matched by the statement, Zelix KlassMaster(TM) will</p>
        <p>The issue here is whether Zelix KlassMaster's obfuscation of class names will effect ResourceBundle.getBundle(String, Locale) calls.</p>
        <p>In the case of PropertyResourceBundles , because they are backed by properties files and don't involve Java class files, they are generally unaffected by obfuscation.</p>
        <p>For example, a properties file with the file name "pack1/pack2/dir3/MyProperties.properties" will be moved to be "a/a/dir3/MyProperties.properties"</p>
        <p>if the packages "pack1.pack2" are obfuscated to be "a.a".</p>
        <p>However, if a property file backing a PropertyResourceBundle</p>
        <p>Has a name containing an unqualified class name (e.g. "pack1.pack2.</p>
        <p>then the code will be broken if the unqualified class name is obfuscated.</p>
        <p>This because the properties file will be moved to reflect obfuscated package names but it will not be renamed to reflect an obfuscated unqualified class name.</p>
        <p>In such a case you must explicitly exclude the unqualified class name from being obfuscated.</p>
        <p>On the other hand, ListResourceBundles are backed by class files. If you create your ListResourceBundles by specifying the fully qualified base class name in a String literal and if the base class is within a package then Zelix KlassMaster(TM) will automatically change the value of the String literal to match the new obfuscated base class name. So the following code would be automatically handled (as far as the base class is concerned).</p>
        <p>ResourceBundle myBundle = ResourceBundle.getBundle("package1.Class1", myLocale);</p>
        <p>However, some additional work would still have to be done to handle the subsidiary ListResourceBundle classes such as</p>
        <p>Basically, a class suffix exclusion statement must be used for each language code, country code and locale variant combination to ensure that the subsidiary classes are renamed in synchronization with the base class with the suffixes being retained.</p>
        <p>An example ZKM Script exclusion statement would be:</p>
        <p>exclude *.&lt;link&gt;_de and *.&lt;link&gt;_de_DE and *.&lt;link&gt;_fr and *.&lt;link&gt;_fr_CH;</p>
        <p>If your organization uses a standard set of localizations, you could consider adding such an exclusion to your defaultExclude.txt file so that it is automatically applied.</p>
        <p>Otherwise, if your ListResourceBundle class names are not stored as fully qualified names in String literals or if the classes are not within packages then you would have to explicitly exclude the base class and subsidiary class names from being obfuscated.</p>
        <p>Another issue with ListResourceBundles is that they must be explicitly from being trimmed if you use the trim function. This can be done as follows.</p>
        <p>trimExclude *.* extends java.util.ListResourceBundle</p>
        <p>A ClassCastException can occur if you obfuscate bytecode compiled with the JDK 1.5 or better with Zelix KlassMaster(TM) 4.2 or earlier.</p>
        <p>It is due to the fact that the JDK 1.5 changed the JVM specification for the loading of constants in a fundamental way.</p>
        <p>Zelix KlassMaster(TM) (version 4.3 and better) has been enhanced to support bytecode created with the JDK 1.5.</p>
        <p>However, if you compile with the JDK 1.5 using the "-source 1.4 -target 1.4" parameters then you may still be able to use earlier versions of Zelix KlassMaster(TM) without further difficulties.</p>
        <p>Inner classes are compiled to be top level classes.</p>
        <p>If you have an inner class Inner within the class com.mycompany.Outer then that inner class Outer.Inner will be compiled to the class file com/mycompany/Outer$Inner.class .</p>
        <p>At the level of the bytecode, the name of that inner class will be com.mycompany.Outer$Inner . Note the presence of the '$' character in the unqualified class name.</p>      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{"@context":"https://schema.org","@type":"WebPage","name":"Answers","url":"https://zkm-web.vercel.app/page/faq"}, {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Why wont Zelix KlassMaster(TM) run?","acceptedAnswer":{"@type":"Answer","text":"You cannot run Zelix KlassMaster(TM) using a Java 7 or earier JVM. You need Java 8 (JDK 1.8 or better). Zelix KlassMaster(TM) may not run on your operating system. See the answer to Q4 ."}},{"@type":"Question","name":"Does Zelix KlassMaster(TM) support Java 8 through to Java 27?","acceptedAnswer":{"@type":"Answer","text":"Of course Zelix KlassMaster(TM) will also open and process Java 1.1 through to Java 8 bytecode. All you need to do is set the Zelix KlassMaster(TM) classpath to point to the appropriate bootstrap classes. For Java 2 through to Java 8 that is the corresponding rt.jar . For Java 9 to Java 27 it is the corresponding lib\\jrt-fs.jar file system."}},{"@type":"Question","name":"What is the difference between the evaluation and licensed versions of Zelix KlassMaster?","acceptedAnswer":{"@type":"Answer","text":"The evaluation version will flow obfuscate only one or two methods in each class. The evaluation version is time limited to thirty days."}},{"@type":"Question","name":"Will Zelix KlassMaster(TM) run in Windows, Mac OS X or Linux?","acceptedAnswer":{"@type":"Answer","text":"Windows 11(TM) 64bit using java version \"1.8.0_503\" Java HotSpot(TM) 64-Bit Server VM (build 25.503-b01, mixed mode) openjdk version \"1.8.0_504\" OpenJDK 64-Bit Server VM (Temurin)(build 25.504-b01, mixed mode) java version \"11.0.32.1\" 2026-08-18 LTS Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.32.1+1-LTS-5, mixed mode) java version \"17.0.20.1\" 2026-08-18 LTS Java HotSpot(TM) 64-Bit Server VM (build 17.0.20.1+1-LTS-4, mixed mode, sharing) java version \"21.0.12.1\" 2026-08-18 LTS Java HotSpot(TM) 64-Bit Server VM (build 21.0.12.1+1-LTS-4, mixed mode, sharing) java version \"25.0.4.1\" 2026-08-18 LTS Java HotSpot(TM) 64-Bit Server VM (build 25.0.4.1+1-LTS-5, mixed mode, sharing) openjdk version \"25.0.4.1\" 2026-08-18 LTS OpenJDK 64-Bit Server VM Temurin-25.0.4.1+1 (build 25.0.4.1+1-LTS, mix"}},{"@type":"Question","name":"Why don't all names change when I obfuscate?","acceptedAnswer":{"@type":"Answer","text":"The name is public or protected and your obfuscate options say that public or protected names shouldn't be changed. The name of a package scoped method is overridden to be protected or public in a subclass. If your obfuscate options say that protected or public method names shouldn't be changed then the overridden method name can't be changed without breaking the polymorphic link. The name of a method overrides a method in a superclass or implements a method in an interface but the superclass or interface hasn't been opened inside Zelix KlassMaster. In such cases the method name cannot be changed without breaking the polymorphic link."}},{"@type":"Question","name":"When changing a method name, why do I get the message \"New name clashes with a method in Class name \" when the class mentioned doesn't seem to be related to the class that defines the method?","acceptedAnswer":{"@type":"Answer","text":"already exists in a class already exists in a superclass or subclass so that a new polymorphic relationship would be created."}},{"@type":"Question","name":"After being obfuscated why does my code get the runtime errors \"ClassFormatError\", \"VerifyError\", \"NoClassDefFoundError\" or \"Can't find class Classname \"?","acceptedAnswer":{"@type":"Answer","text":"in JDK 1.1.7 or less, for applications run with the -verify switch in Java 2 or better by default unless you use the -Xverify:none switch is always switched on for Applets."}},{"@type":"Question","name":"Can Zelix KlassMaster(TM) automatically handle Java Reflection API calls?","acceptedAnswer":{"@type":"Answer","text":"If you choose not to use the AutoReflection(TM) functionality and If a particular Reflection API call is not handled automatically by Zelix KlassMaster(TM) and That will break the obfuscated application"}},{"@type":"Question","name":"When I open some classes why do I get the \"Class Open Warnings\" window?","acceptedAnswer":{"@type":"Answer","text":"Class.forName(String) Class.getField(String) Class.getMethod(String) Class.getDeclaredField(String) Class.getDeclaredMethod(String) Constructor.getName() ClassLoader.loadClass(String,boolean) ClassLoader.defineClass() ClassLoader.findSystemClass(String) ClassLoader.findLoadedClass(String) RMIClassLoader.loadClass(String) RMIClassLoader.loadClass(URL, String) LoaderHandler.loadClass(String) LoaderHandler.loadClass(URL, String) EventSetDescriptor(Class, String, Class, String) EventSetDescriptor(Class, String, Class, String[], String, String) EventSetDescriptor(Class, String, Class, String[], String, String, String) the class in which the Reflection API method call appears the signature of the method in which the Reflection API method call appears the signature of the Reflection API method be"}},{"@type":"Question","name":"When I open some classes why do I get the \"Class Open Errors\" window?","acceptedAnswer":{"@type":"Answer","text":"appear in the same archive or are not absolutely identical."}},{"@type":"Question","name":"What options should I use when obfuscating my classes?","acceptedAnswer":{"@type":"Answer","text":"not obfuscate public class names not obfuscate public field or method names not obfuscate public or protected field or method names limit String encryption by either using the \"normal\" setting or using the \"aggressive\", \"flowObfuscate\" or \"enhanced\" settings but excluding all interfaces from String encryption using the ZKM Script stringEncryptionExclude statement. (e.g. \" stringEncryptionExclude interface *.*;\" ) consider choosing the line numbers \"scramble\" option"}},{"@type":"Question","name":"What can I do if I get an OutOfMemoryError or \"Insufficient Memory to open classes\" error?","acceptedAnswer":{"@type":"Answer","text":"Give Java more memory to work with by using the -Xmx??m option where ?? represents the number of megabytes. (For example, the option -Xmx512m gives Java 512MB of heap space.) When you are running Zelix KlassMaster(TM) via Ant then you need to give more memory to Ant itself. An easy way of doing this is by setting the \"ANT_OPTS\" environment variable. e.g. set ANT_OPTS=-Xmx512m Use the \"Tools/Garbage Collect\" menu option or the gc ZKM Script statement after opening your classes and before obfuscating. Install more physical memory."}},{"@type":"Question","name":"Why does Zelix KlassMaster(TM) run so slowly?","acceptedAnswer":{"@type":"Answer","text":"Your computer may have insufficient real memory installed. If your computer has to use virtual memory performance will be very poor. You will notice that the hard disk is being very heavily utilized. You are obfuscating while viewing a very large class or method. This results in reduced performance due to the overhead of updating the class or method details in the View Panel."}},{"@type":"Question","name":"How do I obfuscate classes with native methods?","acceptedAnswer":{"@type":"Answer","text":"the names of the native methods themselves and the fully qualified names of the classes that contain them"}},{"@type":"Question","name":"Won't flow obfuscation slow down my code and make it bigger?","acceptedAnswer":{"@type":"Answer","text":"the bytecode that is being obfuscated, the JVM used to execute the bytecode, the flow obfuscation option used. use \"light\" flow obfuscation, use the ZKM Script obfuscateFlowExclude statement to exclude performance critical methods from flow obfuscation."}},{"@type":"Question","name":"After obfuscation, why don't my classes work properly?","acceptedAnswer":{"@type":"Answer","text":"You didn't open all your classes inside Zelix KlassMaster(TM) before obfuscating Your application Uses the Java(TM) Reflection API and Zelix KlassMaster(TM) has reported that there are some Reflection API calls in your bytecode that it may not be able to automatically handle and You didn't exclude the names of the classes, fields or methods that are accessed by those Reflection API calls. Upgrade to a more recent JIT. Of course it isn't always practical to ask your users to upgrade their JITs. JITs that are known to cause bugs with flow obfuscated bytecode are: Microsoft VMs earlier than 5.00.3167 Symantec JITs earlier than 3.00.072b. some of the IBM 1.3 JVMs If you obfuscated with \"aggressive\" flow obfuscation, try the \"normal\" setting. If you obfuscated with \"normal\" flow obfuscation, tr"}},{"@type":"Question","name":"What does the message \"WARNING: changeLogIn fileName : Method oldMethodName in class className1 is mapped to new name newMethodName1 but the corresponding method in class className2 is mapped to new name newMethodName2 . Using mapping of newMethodName2 for both methods\" mean?","acceptedAnswer":{"@type":"Answer","text":"you have directly edited the change log file and make some mistakes or your application has changed so that there are now polymorphic relationships between two or more methods that where previously unrelated."}},{"@type":"Question","name":"How does the Input Change Log functionality interact with the name exclusion functionality?","acceptedAnswer":{"@type":"Answer","text":"the input change log contains inconsistent or conflicting information. For example if it contains duplicate new package, class, field or method names contains fully qualified new class names that conflict with the corresponding new package name the input change log contains information that cannot be validly applied to the opened classes. For example if it would incorrectly make or break a polymorphic relationship between methods."}},{"@type":"Question","name":"If I exclude a class from being obfuscated will the class's methods still be obfuscated?","acceptedAnswer":{"@type":"Answer","text":"on the obfuscation of that class's field and method names or on the flow obfuscation or String encryption of any of its methods. To exclude methods from flow obfuscation you must use the ZKM Script obfuscateFlowExclude statement. To exclude String literals from encryption you must use the ZKM Script stringEncryptionExclude statement."}},{"@type":"Question","name":"My application will consist of a client jar file and server jar file which share some common classes. How do I obfuscate it?","acceptedAnswer":{"@type":"Answer","text":"Initially obfuscate your client and server jar files together in one pass generating an overall change log. If you make changes to only one of the jar files then obfuscate both your client and server jar files together in one pass once more using the change log generated in the step above as an input change log. Release just the changed jar. Use the change log generated in the second step as the new overall change log."}},{"@type":"Question","name":"Does Zelix KlassMaster(TM) support incremental obfuscation?","acceptedAnswer":{"@type":"Answer","text":"consistent package, class, field and method renaming and consistent flow obfuscation"}},{"@type":"Question","name":"Our application uses Java Serialization. How does this impact obfuscation?","acceptedAnswer":{"@type":"Answer","text":"add name exclusions for the fully qualified name of the class the name of every field contained or inherited by the class the fully qualified class name of the type of each non-primitive field contained or inherited by the class add a serialVersionUID field to the class (if it doesn't already exist) set to a value based upon the non-obfuscated class definition."}},{"@type":"Question","name":"Does Zelix KlassMaster(TM) support ResourceBundles as used in Localization and Internationalization?","acceptedAnswer":{"@type":"Answer","text":"Has a name containing an unqualified class name (e.g. \"pack1.pack2. MyClass0 .properties\") and The name of the class is used to get the name of the resource bundle (e.g. \" ResourceBundle.getBundle(getClass().getName()) \") package1.Class1_de_DE , package1.Class1_fr and package1.Class1_fr_CH"}},{"@type":"Question","name":"By how much will parallel processing reduce obfuscation time?","acceptedAnswer":{"@type":"Answer","text":"The obfuscation options that have been selected, The number of processors that are available and The amount of heap space that is available."}},{"@type":"Question","name":"What do the \"API warnings detected during open\" or \"API calls detected that may not be handled automatically\" messages mean?","acceptedAnswer":{"@type":"Answer","text":"The name of the class being obfuscated which contains the unresolved Reflection API call, The name of the method being obfuscated which contains the unresolved Reflection API call and The signature the Reflection API call. The String returned by java.lang.Class.getName() is compared to another String containing a class name AND The second String is not effectively a String literal containing a full class name AND The class which has its named stored in the second String will have its name obfuscated."}},{"@type":"Question","name":"Does Zelix KlassMaster(TM) support Java bytecode generated from Kotlin(TM) source?","acceptedAnswer":{"@type":"Answer","text":"What does the message \"WARNING: changeLogIn fileName : Method oldMethodName in class className1 is mapped to new name newMethodName1 but the corresponding method in class className2 is mapped to new name newMethodName2 . Using mapping of newMethodName2 for both methods\" mean? It is recommended that you initially use the GUI Build Helper tool to get a feeling for the processing sequence and then to create your first ZKM Script . It is also highly recommended that you at least read the basic exclusions part of the ZKM Script Exclusions Tutorial before modifying your first ZKM Scripts. See the Getting Started page of the documentation for more detail. If you are not getting a useful error message, try running with the -verify and -verbose switches of the JVM. Yes. Although, Zelix KlassMaster("}}]}]
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - FAQ | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/reference.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/page/faq' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
