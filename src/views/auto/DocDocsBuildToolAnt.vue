<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Calling Zelix KlassMaster(TM) from Apache Ant</h1>
      <div class="panel">
        <h2>Calling Zelix KlassMaster(TM) from Apache Ant</h2>
        <h3>Apache Ant Example build XML</h3>
        <pre class="code"><code>&lt;?xml version="1.0"?&gt;
&lt;project name="ZKMTask" default="main" basedir="."&gt;
  &lt;property name="LOGS_DIR" value="logs"/&gt;
  &lt;property name="OPEN_CLASSES" value="\Projects\MyJar.jar"/&gt;
  &lt;property name="SAVE_DIR" value="\projects\obfuscated"/&gt;

  &lt;path id="ZKM_classpath"&gt;
	&lt;fileset dir="C:\JDK\j2sdkee1.4\lib" includes="j2ee.jar"/&gt;
	&lt;fileset dir="C:\JDK\WTK21\wtklib\" includes="kenv.zip"/&gt;
        &lt;fileset dir="D:\Java\apache-ant-1.6.5\lib\" includes="ant.jar" /&gt;
  &lt;/path&gt;
  &lt;property name="myClasspath" refid="ZKM_classpath"/&gt;
  
  &lt;taskdef name="ZKM" classname="ZKMTask" classpath="ZKM.jar"/&gt;
  &lt;target name="main"&gt;
     &lt;!-- Attributes correspond to Zelix KlassMaster&amp;#153; command line options. scriptFileName is only mandatory attribute --&gt;
     &lt;ZKM scriptFileName="myZKMScript.txt"
          logFileName="ZKM_log.txt" 
          trimLogFileName="ZKM_TrimLog.txt" 
          defaultExcludeFileName="defaultExclude.txt" 
          defaultTrimExcludeFileName="defaultTrimExclude.txt" 
          defaultDirectoryName="." 
          isParseOnly="false" 
          isVerbose="true" 
     &gt;
        &lt;!--  the sysproperty tag provides an easy way of setting a System property --&gt;
        &lt;sysproperty key="ZKM_NEW_CHANGE_LOG_ENCODING" value="UTF-16" /&gt; 
    &lt;/ZKM&gt;		
  &lt;/target&gt;
&lt;/project&gt;</code></pre>
        <h3>Example ZKM Script</h3>
        <pre class="code"><code>//"myClasspath" is a property passed in from the build XML
classpath "%myClasspath%";

//"OPEN_CLASSES" is a property passed in from the build XML
open        "%OPEN_CLASSES%";

trimExclude *.*^ public static main(java.lang.String[]);

trim;

exclude     *.^*^ public static main(java.lang.String[]);

obfuscate   keepInnerClassInfo=false
            keepGenericsInfo=true
            obfuscateFlow=aggressive
            exceptionObfuscation=heavy
            encryptStringLiterals=flowObfuscate
            preverify=true
            ;

//"SAVE_DIR" is a property passed in from the build XML
saveAll     "%SAVE_DIR%";</code></pre>
        <h3>Apache Ant Task Definition</h3>
        <pre class="code"><code>All  Rights Reserved. *
 * You are free to use this software with or without modifications
 * subject to the following conditions. *
 * THIS SOFTWARE IS PROVIDED "AS IS," WITHOUT A WARRANTY OF ANY KIND. * ZELIX PTY LTD MAKES NO WARRANTIES, EITHER EXPRESS OR IMPLIED, WITH
 * RESPECT TO THIS SOFTWARE INCLUDING BUT NOT LIMITED TO ANY WARRANTY
 * OF MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE. * ZELIX PTY LTD DOES NOT WARRANT THAT THE OPERATION OF THE SOFTWARE WILL
 * BE UNINTERRUPTED OR ERROR-FREE, OR THAT DEFECTS IN THE SOFTWARE WILL
 * BE CORRECTED. YOU THE USER ARE SOLELY RESPONSIBLE FOR DETERMINING THE
 * APPROPRIATENESS OF THE SOFTWARE FOR YOUR USE AND ACCEPT FULL RESPONSIBILITY
 * FOR ALL RISKS ASSOCIATED WITH ITS USE. ZELIX PTY LTD IS NOT AND WILL
 * NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR INCIDENTAL DAMAGES
 * (INCLUDING LOSS OF PROFITS OR INTERRUPTION OF BUSINESS) HOWEVER CAUSED
 * EVEN IF ZELIX PTY LTD HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. */

import org.apache.tools.ant.*;
import java.util.*;

public class ZKMTask extends Task {

   private static final String TRUE = "true";
   private static final String YES = "yes";
   private String scriptFileName;
   private String logFileName;
   private String trimLogFileName;
   private String defaultExcludeFileName;
   private String defaultTrimExcludeFileName;
   private String defaultDirectoryName;
   private boolean isVerbose = false;
   private boolean isParseOnly = false;

   /**
   * A ZKM Script file name must be specified. */
   public void setScriptFileName(String scriptFileName) {
      this.scriptFileName = scriptFileName;
   }

   /**
   * Set the log file name. The file name can be relative or absolute. Optional. * The log file name will default to "ZKM_log.txt". */
   public void setLogFileName(String logFileName) {
      this.logFileName = logFileName;
   }

   /**
   * Set the trim log file name. The file name can be relative or absolute. Optional. * The trim log file name will default to "ZKM_TrimLog.txt". */
   public void setTrimLogFileName(String trimLogFileName) {
      this.trimLogFileName = trimLogFileName;
   }

   /**
   * Set the 'default exclusions' file name. The file name can be relative or absolute. Optional. * By default Zelix KlassMaster will look for a file named "defaultExclude.txt". */
   public void setDefaultExcludeFileName(String defaultExcludeFileName) {
      this.defaultExcludeFileName = defaultExcludeFileName;
   }

   /**
   * Set the 'default trim exclusions' file name. The file name can be relative or absolute. Optional. * By default Zelix KlassMaster will look for a file named "defaultTrimExclude.txt". */
   public void setDefaultTrimExcludeFileName(String defaultTrimExcludeFileName) {
      this.defaultTrimExcludeFileName = defaultTrimExcludeFileName;
   }

   /**
   * Set the 'default method parameter changes exclusions' file name. The file name can be relative or absolute. Optional. * By default Zelix KlassMaster will look for a file named "defaultMethodParameterChangesExclude.txt". */
   public void setDefaultMethodParameterChangesExcludeFileName(String defaultMethodParameterChangesExcludeFileName) {
      this.defaultMethodParameterChangesExcludeFileName = defaultMethodParameterChangesExcludeFileName;
   }

   /**
   * Set the 'default method parameter obfuscation exclusions' file name. The file name can be relative or absolute. Optional. * By default Zelix KlassMaster will look for a file named "defaultMethodParameterObfuscationExclude.txt". */
   public void setDefaultMethodParameterObfuscationExcludeFileName(String defaultMethodParameterObfuscationExcludeFileName) {
      this.defaultMethodParameterObfuscationExcludeFileName = defaultMethodParameterObfuscationExcludeFileName;
   }

   /**</code></pre>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - Calling from Apache Ant</p>
        <p>Zelix KlassMaster(TM) exposes a generic Java API that allows it to be called by a build tool.</p>
        <p>A simple Ant task for the Zelix KlassMaster(TM) obfuscator is built on this API and is already included in the ZKM.jar file.</p>
        <p>with a corresponding ZKM Script and the source code of the Ant task ZKMTask appear below.</p>
        <p>The attributes to the ZKMTask task correspond to the basic command line options .</p>
        <p>The ZKM Script referred to in the build XML typically makes use of System Variables that have been set in the build XML.</p>
        <p>You can also set Special Configuration Options by setting System properties.</p>
        <p>&lt;?xml version="1.0"?&gt; &lt;project name="ZKMTask" default="main" basedir="."&gt; &lt;property name="LOGS_DIR" value="logs"/&gt; &lt;property name="OPEN_CLASSES" value="\Projects\MyJar.jar"/&gt; &lt;property name="SAVE_DIR" value="\projects\obfuscated"/&gt;</p>
        <p>&lt;path id="ZKM_classpath"&gt; &lt;fileset dir="C:\JDK\j2sdkee1.4\lib" includes="j2ee.jar"/&gt; &lt;fileset dir="C:\JDK\WTK21\wtklib\" includes="kenv.zip"/&gt; &lt;fileset dir="D:\Java\apache-ant-1.6.5\lib\" includes="ant.jar" /&gt; &lt;/path&gt; &lt;property name="myClasspath" refid="ZKM_classpath"/&gt;</p>
        <p>&lt;taskdef name="ZKM" classname="ZKMTask" classpath="ZKM.jar"/&gt; &lt;target name="main"&gt;</p>
        <p>&lt;!-- Attributes correspond to Zelix KlassMaster(TM) command line options.</p>
        <p>scriptFileName is only mandatory attribute --&gt;</p>
        <p>&lt;ZKM scriptFileName="myZKMScript.txt" logFileName="ZKM_log.txt" trimLogFileName="ZKM_TrimLog.txt" defaultExcludeFileName="defaultExclude.txt" defaultTrimExcludeFileName="defaultTrimExclude.txt" defaultDirectoryName="." isParseOnly="false" isVerbose="true" &gt;</p>
        <p>&lt;!-- the sysproperty tag provides an easy way of setting a System property --&gt;</p>
        <p>&lt;sysproperty key="ZKM_NEW_CHANGE_LOG_ENCODING" value="UTF-16" /&gt; &lt;/ZKM&gt; &lt;/target&gt; &lt;/project&gt;</p>
        <p>//"myClasspath" is a property passed in from the build XML</p>
        <p>//"OPEN_CLASSES" is a property passed in from the build XML</p>
        <p>trimExclude *.*^ public static main(java.lang.String[]);</p>
        <p>exclude *.^*^ public static main(java.lang.String[]);</p>
        <p>obfuscate keepInnerClassInfo=false keepGenericsInfo=true obfuscateFlow=aggressive exceptionObfuscation=heavy encryptStringLiterals=flowObfuscate preverify=true ;</p>
        <p>//"SAVE_DIR" is a property passed in from the build XML</p>
        <p>ZKMTask is a simple Ant task definition for the Zelix KlassMaster(TM) obfuscator.</p>
        <p>It passes in the Ant Project properties by default. It can be modified to pass in Properties of your own choosing.</p>
        <p>The compiled version of this class is already included in the ZKM.jar file.</p>
        <p>* * You are free to use this software with or without modifications * subject to the following conditions.</p>
        <p>* * THIS SOFTWARE IS PROVIDED "AS IS," WITHOUT A WARRANTY OF ANY KIND.</p>
        <p>* ZELIX PTY LTD MAKES NO WARRANTIES, EITHER EXPRESS OR IMPLIED, WITH * RESPECT TO THIS SOFTWARE INCLUDING BUT NOT LIMITED TO ANY WARRANTY * OF MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE.</p>
        <p>* ZELIX PTY LTD DOES NOT WARRANT THAT THE OPERATION OF THE SOFTWARE WILL * BE UNINTERRUPTED OR ERROR-FREE, OR THAT DEFECTS IN THE SOFTWARE WILL * BE CORRECTED. YOU THE USER ARE SOLELY RESPONSIBLE FOR DETERMINING THE * APPROPRIATENESS OF THE SOFTWARE FOR YOUR USE AND ACCEPT FULL RESPONSIBILITY * FOR ALL RISKS ASSOCIATED WITH ITS USE. ZELIX PTY LTD IS NOT AND WILL * NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR INCIDENTAL DAMAGES * (INCLUDING LOSS OF PROFITS OR INTERRUPTION OF BUSINESS) HOWEVER CAUSED * EVEN IF ZELIX PTY LTD HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
        <p>import org.apache.tools.ant.*; import java.util.*;</p>
        <p>private static final String TRUE = "true"; private static final String YES = "yes"; private String scriptFileName; private String logFileName; private String trimLogFileName; private String defaultExcludeFileName; private String defaultTrimExcludeFileName; private String defaultDirectoryName; private boolean isVerbose = false; private boolean isParseOnly = false;</p>
        <p>/** * A ZKM Script file name must be specified.</p>
        <p>public void setScriptFileName(String scriptFileName) { this.scriptFileName = scriptFileName; }</p>
        <p>/** * Set the log file name. The file name can be relative or absolute. Optional.</p>
        <p>* The log file name will default to "ZKM_log.txt".</p>
        <p>public void setLogFileName(String logFileName) { this.logFileName = logFileName; }</p>
        <p>/** * Set the trim log file name. The file name can be relative or absolute. Optional.</p>
        <p>* The trim log file name will default to "ZKM_TrimLog.txt".</p>
        <p>public void setTrimLogFileName(String trimLogFileName) { this.trimLogFileName = trimLogFileName; }</p>
        <p>/** * Set the 'default exclusions' file name. The file name can be relative or absolute. Optional.</p>
        <p>* By default Zelix KlassMaster will look for a file named "defaultExclude.txt".</p>
        <p>public void setDefaultExcludeFileName(String defaultExcludeFileName) { this.defaultExcludeFileName = defaultExcludeFileName; }</p>
        <p>/** * Set the 'default trim exclusions' file name. The file name can be relative or absolute. Optional.</p>
        <p>* By default Zelix KlassMaster will look for a file named "defaultTrimExclude.txt".</p>
        <p>public void setDefaultTrimExcludeFileName(String defaultTrimExcludeFileName) { this.defaultTrimExcludeFileName = defaultTrimExcludeFileName; }</p>
        <p>/** * Set the 'default method parameter changes exclusions' file name. The file name can be relative or absolute. Optional.</p>
        <p>* By default Zelix KlassMaster will look for a file named "defaultMethodParameterChangesExclude.txt".</p>
        <p>public void setDefaultMethodParameterChangesExcludeFileName(String defaultMethodParameterChangesExcludeFileName) { this.defaultMethodParameterChangesExcludeFileName = defaultMethodParameterChangesExcludeFileName; }</p>
        <p>/** * Set the 'default method parameter obfuscation exclusions' file name. The file name can be relative or absolute. Optional.</p>
        <p>* By default Zelix KlassMaster will look for a file named "defaultMethodParameterObfuscationExclude.txt".</p>
        <p>public void setDefaultMethodParameterObfuscationExcludeFileName(String defaultMethodParameterObfuscationExcludeFileName) { this.defaultMethodParameterObfuscationExcludeFileName = defaultMethodParameterObfuscationExcludeFileName; }</p>
        <p>/** * Set the name of the default directory . The directory name can be relative or absolute.</p>
        <p>* If any of the log file, trim log file, 'default exclusion' file and the 'default trim exclusions' file names are relative then * they will be relative to this miscellaneous files directory. Optional.</p>
        <p>* The directory name will default to that of the current working directory.</p>
        <p>public void setDefaultDirectoryName(String defaultDirectoryName) { this.defaultDirectoryName = defaultDirectoryName; }</p>
        <p>/** * Optional. Defaults to false. * If true then Zelix KlassMaster will parse the ZKM Script but not execute it.</p>
        <p>* @param isParseOnlyString Should be "true" or "false" */</p>
        <p>public void setIsVerbose(String isVerboseString) { if (isVerboseString != null) { if (isVerboseString.equalsIgnoreCase(TRUE) || isVerboseString.equalsIgnoreCase(YES)) { isVerbose = true; } } }</p>
        <p>/** * Optional. Defaults to false. * @param isParseOnlyString Should be "true" or "false" */</p>
        <p>public void setIsParseOnly(String isParseOnlyString) { if (isParseOnlyString != null) { if (isParseOnlyString.equalsIgnoreCase(TRUE) || isParseOnlyString.equalsIgnoreCase(YES)) { isParseOnly = true; } } }</p>
        <p>public void execute() throws BuildException { if (scriptFileName == null || scriptFileName.length() == 0) { throw new BuildException("Missing or empty ZKM Script file name"); } if (sysproperties != null) { Properties systemProperties = System.getProperties(); for (Iterator it=sysproperties.iterator(); it.hasNext(); ) { Sysproperty sysproperty = (Sysproperty)it.next(); systemProperties.put(sysproperty.getKey(), sysproperty.getValue()); } }</p>
        <p>try { com.zelix.ZKM.run(scriptFileName, logFileName, trimLogFileName, defaultExcludeFileName, defaultTrimExcludeFileName, defaultDirectoryName, isVerbose, isParseOnly, project.getProperties()); } catch(Exception ex) { ex.printStackTrace(); throw new BuildException(ex.toString()); } }</p>
        <p>ArrayList sysproperties = new ArrayList();</p>
        <p>public Sysproperty createSysproperty() { Sysproperty sysproperty = new Sysproperty(); sysproperties.add(sysproperty); return sysproperty; }</p>
        <p>public class Sysproperty { private String key; private String value;</p>
        <p>public void setKey(String key) { this.key = key; }</p>
        <p>public void setValue(String value) { this.value = value; }</p>
        <p>public String getValue() { return value; } } }</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = {"@context":"https://schema.org","@type":"WebPage","name":"Calling Zelix KlassMaster(TM) from Apache Ant","url":"https://zkm-web.vercel.app/docs/buildToolAnt"}
useHead({ title: 'Java Obfuscator - Zelix KlassMaster(TM) - Calling from Apache Ant | Zelix KlassMaster', meta: [{ name: 'description', content: 'Complete local copy of this Zelix KlassMaster reference page.' }, { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }], link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/buildToolAnt' }], script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }] })
</script>
