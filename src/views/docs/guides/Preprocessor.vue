<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM)</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM)</li>
          <li>The ZKM Preprocessor The ZKM preprocessor processes a ZKM Script before it is parsed and executed. The preprocessor</li>
          <li>actions system variables by replacing them with their equivalent value.</li>
          <li>actions include directives by replacing them with the contents of the file specified by the directive.</li>
          <li>the contents of the properties as delivered to Zelix KlassMaster(TM) and</li>
          <li>the expanded ZKM Script</li>
        </ul>
        <h2>System Variables</h2>
        <ul>
          <li>firstly in the extra properties (if they were passed in via the build tool API ) and then,</li>
          <li>the System properties</li>
        </ul>
        <h3>Include Directives</h3>
        <h3>Apache Ant Example</h3>
        <pre class="code"><code>///// Start ZKM Script TestScript.txt /////
classpath "%MY_CLASSPATH%";

open        "%OPEN_CLASSES%";



obfuscate   changeLogFileOut="ChangeLog.txt"
            obfuscateFlow=aggressive
            encryptStringLiterals=flowObfuscate
            lineNumbers=delete;

saveAll     "%SAVE_PATH%";
///// End ZKM Script TestScript.txt /////</code></pre>
        <pre class="code"><code>///// Start Include file ZKMExclude.txt /////
exclude     *.* public static main{java.lang.String[]);
///// End Include file ZKMExclude.txt /////</code></pre>
        <pre class="code"><code>///// Start build.xml /////
&lt;?xml version="1.0"?&gt;

&lt;project name="ZKMTask" default="main" basedir="."&gt;
  &lt;!-- Add a project property --&gt;
  &lt;property name="OPEN_CLASSES" value="\Projects\MyJar.jar"/&gt;

  &lt;path id="ZKM_classpath"&gt;
	&lt;fileset dir="\JDK\j2sdkee1.4\lib" includes="j2ee.jar"/&gt;
	&lt;fileset dir="\JDK\WTK21\wtklib\" includes="kenv.zip"/&gt;
  &lt;/path&gt;
  &lt;!-- Add a project property --&gt;
  &lt;property name="MY_CLASSPATH" refid="ZKM_classpath"/&gt;

  &lt;taskdef name="ZKM" classname="ZKMTask"/&gt;

  &lt;target name="main"&gt;
    &lt;ZKM scriptFileName="\Projects\TestScript.txt" 
          logFileName="ZKM_log1.txt" 
          trimLogFileName="ZKM_TrimLog1.txt" 
          defaultExcludeFileName="defaultExclude0.txt" 
          defaultTrimExcludeFileName="\Projects\defaultTrimExclude0.txt" 
          isParseOnly="false"
          isVerbose="true" 
     &gt;
        &lt;!-- Add a System property --&gt;
        &lt;sysproperty key="SAVE_PATH" value="\Projects\save" /&gt;
     &lt;/ZKM&gt;
  &lt;/target&gt;
&lt;/project&gt;
///// End build.xml /////</code></pre>
        <pre class="code"><code>///// Start ZKM Script TestScript.txt /////
classpath "C:\JDK\j2sdkee1.4\lib\j2ee.jar;C:\JDK\WTK21\wtklib\kenv.zip";

open        "\Projects\MyJar.jar";

///// Start Include file ZKMExclude.txt /////
exclude     *.* public static main{java.lang.String[]);
///// End Include file ZKMExclude.txt /////

obfuscate   changeLogFileOut="ChangeLog.txt"
            obfuscateFlow=aggressive
            encryptStringLiterals=flowObfuscate
            lineNumbers=delete;

saveAll     "\Projects\save";
///// End ZKM Script TestScript.txt /////</code></pre>
        <p>The ZKM preprocessor processes a ZKM Script before it is parsed and executed. The preprocessor</p>
        <p>System variables are replaced before include directives are actioned so an include directive may make use of a system variable.</p>
        <p>Also, an included file may itself contain include directives.</p>
        <p>An Apache Ant example of the use of system variables in the Apache Ant environment are shown at the bottom of this page.</p>
        <p>Note that if you start Zelix KlassMaster(TM) using the " -v " (ie. verbose) parameter then</p>
        <p>will be written to the Zelix KlassMaster(TM) log file which is named ZKM_log.txt by default. This can be very handy for debugging purposes.</p>
        <p>for a key equal to the variable name. If the key exists then the preprocessor replaces the variable with the corresponding value retrieved from the properties.</p>
        <p>For example, if there is a key my_home in the System properties associated with the value /projects/home</p>
        <p>then the preprocessor takes the script fragment</p>
        <p>System variables can refer to the standard contents of System properties like java.home as %java.home% .</p>
        <p>You can add your own variables to the System properties by using the</p>
        <p>syntax when you start Zelix KlassMaster. For example:</p>
        <p>java -Dmy_home=/projects/home -jar ZKM.jar</p>
        <p>Note that the command line processor of your operating system may require to use slightly different syntax. For example, in the Windows environment, if you are executing Zelix KlassMaster(TM) through a batch or command file, then you will need to enclose the name value pair in double quotes as follows.</p>
        <p>java -D"my_home=/projects/home" -jar ZKM.jar</p>
        <p>If for some reason you cannot use the command line to set System properties then there are two alternative approaches.</p>
        <p>One is to set the property as an environmental variable and also set the ZKM_LOAD_ENV_VARIABLES=true environmental variable to tell Zelix KlassMaster(TM) to load all environmental variables into System properties.</p>
        <p>The second alternative approach is to place the property into a file named "ZKM_System.properties" in the working directory (i.e.</p>
        <p>"user.dir" ). If Zelix KlassMaster(TM) finds such a property file then it will load its contents into System properties. The command line approach takes precedence over the environmental variable approach and the "ZKM_System.properties" approach takes precedence over the command line approach.</p>
        <p>To refer to an environment variables such as PATH use the following syntax to put the value into System properties.</p>
        <p>is the name of the file to be included. The file name can be relative (to the current directory) or absolute. For example, the include directive</p>
        <p>Will be replaced by the contents of the file "fragment.txt". As mentioned above, include directives can make use of system variables as in the following example:</p>
        <p>Below is an example ZKM Script. %MY_CLASSPATH% , %OPEN_CLASSES% and %SAVE_PATH% are system variables .</p>
        <p>In the Apache Ant environment, the Zelix KlassMaster(TM) Ant task ZKMTask passes the Ant project properties through to Zelix KlassMaster(TM) (as the "extra properties" in the Zelix KlassMaster(TM) build tool API).</p>
        <p>So, when the ZKM Script is executed, the ZKM Preprocessor will replace the system variables in the script with the value stored under the corresponding key in either the System Properties or the Apache Ant project properties.</p>
        <p>is an include directive . When the ZKM Script is executed, the ZKM Preprocessor will replace the directive with the contents of the specified file "ZKMExclude.txt".</p>
        <p>///// Start ZKM Script TestScript.txt ///// classpath " %MY_CLASSPATH% ";</p>
        <p>obfuscate changeLogFileOut="ChangeLog.txt" obfuscateFlow=aggressive encryptStringLiterals=flowObfuscate lineNumbers=delete;</p>
        <p>saveAll " %SAVE_PATH% "; ///// End ZKM Script TestScript.txt /////</p>
        <p>Below are the contents of the file "ZKMExclude.txt". The include directive in the ZKM Script above says that "ZKMExclude.txt" should be included in the script.</p>
        <p>///// Start Include file ZKMExclude.txt ///// exclude *.* public static main{java.lang.String[]); ///// End Include file ZKMExclude.txt /////</p>
        <p>Below are the contents of the Apache Ant build file "build.xml".</p>
        <p>The places where the three system variables are given values (by the addition of key/value pairs to either the Ant project properties or the system properties) appear in bold .</p>
        <p>///// Start build.xml ///// &lt;?xml version="1.0"?&gt;</p>
        <p>&lt;project name="ZKMTask" default="main" basedir="."&gt; &lt;!-- Add a project property --&gt;</p>
        <p>&lt;property name="OPEN_CLASSES" value="\Projects\MyJar.jar"/&gt;</p>
        <p>&lt;path id="ZKM_classpath"&gt; &lt;fileset dir="\JDK\j2sdkee1.4\lib" includes="j2ee.jar"/&gt; &lt;fileset dir="\JDK\WTK21\wtklib\" includes="kenv.zip"/&gt; &lt;/path&gt; &lt;!-- Add a project property --&gt;</p>
        <p>&lt;property name="MY_CLASSPATH" refid="ZKM_classpath"/&gt;</p>
        <p>&lt;taskdef name="ZKM" classname="ZKMTask"/&gt;</p>
        <p>&lt;target name="main"&gt; &lt;ZKM scriptFileName="\Projects\TestScript.txt" logFileName="ZKM_log1.txt" trimLogFileName="ZKM_TrimLog1.txt" defaultExcludeFileName="defaultExclude0.txt" defaultTrimExcludeFileName="\Projects\defaultTrimExclude0.txt" isParseOnly="false" isVerbose="true" &gt; &lt;!-- Add a System property --&gt;</p>
        <p>&lt;sysproperty key="SAVE_PATH" value="\Projects\save" /&gt;</p>
        <p>&lt;/ZKM&gt; &lt;/target&gt; &lt;/project&gt; ///// End build.xml /////</p>
        <p>The ZKM Preprocessor expands the ZKM Script to what appears below. The places where the three system variables were give values appear in bold .</p>
        <p>The included file contents are shown in italics .</p>
        <p>///// Start ZKM Script TestScript.txt ///// classpath " C:\JDK\j2sdkee1.4\lib\j2ee.jar;C:\JDK\WTK21\wtklib\kenv.zip ";</p>
        <p>saveAll " \Projects\save "; ///// End ZKM Script TestScript.txt /////</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM)",
  "url": "https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/preprocessor"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM)"
    }
  ]
}]
useHead({
  title: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster2345678914',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://citymoondynamics.github.io/ZelixKlassMaster-website-idea/docs/preprocessor' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
