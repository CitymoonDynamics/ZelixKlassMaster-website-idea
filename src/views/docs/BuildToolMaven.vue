<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Calling Zelix KlassMaster(TM) from Apache Maven</h1>
      <div class="panel">
        <h2>Apache Maven Example POM XML</h2>
        <pre class="code"><code>&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
  &lt;groupId&gt;com.zelix.plugins&lt;/groupId&gt;
  &lt;artifactId&gt;test&lt;/artifactId&gt;
  &lt;version&gt;1.0.4&lt;/version&gt;
  &lt;packaging&gt;jar&lt;/packaging&gt;
  &lt;name&gt;Test of ZelixKlassMasterMojo&lt;/name&gt;
  &lt;properties&gt;
      &lt;!-- These will be passed through to plugin as project properties --&gt;
      &lt;myProperty0&gt;true&lt;/myProperty0&gt;
      &lt;junit.version&gt;4.11&lt;/junit.version&gt;
      &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
      &lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt;
      &lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.source&gt;
   &lt;/properties&gt;
   &lt;dependencies&gt;
      &lt;dependency&gt;
         &lt;groupId&gt;junit&lt;/groupId&gt;
         &lt;artifactId&gt;junit&lt;/artifactId&gt;
         &lt;version&gt;${junit.version}&lt;/version&gt;
         &lt;scope&gt;compile&lt;/scope&gt;
      &lt;/dependency&gt;
   &lt;/dependencies&gt;
   &lt;build&gt;
   &lt;plugins&gt;
    &lt;plugin&gt;
      &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
      &lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
      &lt;version&gt;3.1&lt;/version&gt;
      &lt;configuration&gt;
         &lt;source&gt;1.8&lt;/source&gt;
         &lt;target&gt;1.8&lt;/target&gt;
      &lt;/configuration&gt;
    &lt;/plugin&gt;
    &lt;plugin&gt;
      &lt;groupId&gt;com.zelix.plugins&lt;/groupId&gt;
      &lt;artifactId&gt;zkm-plugin&lt;/artifactId&gt;
      &lt;version&gt;1.0.4&lt;/version&gt;
      &lt;dependencies&gt;
         &lt;dependency&gt;
            &lt;groupId&gt;com.zelix.plugins&lt;/groupId&gt;
            &lt;artifactId&gt;ZKM&lt;/artifactId&gt;
            &lt;version&gt;20.0.0&lt;/version&gt;
            &lt;scope&gt;system&lt;/scope&gt;
            &lt;systemPath&gt;${ZKM_HOME}/ZKM.jar&lt;/systemPath&gt;
         &lt;/dependency&gt;
      &lt;/dependencies&gt;
      &lt;executions&gt;
        &lt;execution&gt;
            &lt;phase&gt;package&lt;/phase&gt;
            &lt;goals&gt;&lt;goal&gt;obfuscate&lt;/goal&gt;&lt;/goals&gt;
        &lt;/execution&gt;
      &lt;/executions&gt;
      &lt;configuration&gt;
	 &lt;!-- Will be used to inject values into the plugin but will not be in project properties --&gt;
         &lt;isSkip&gt;false&lt;/isSkip&gt;
         &lt;scriptFile&gt;script.txt&lt;/scriptFile&gt;
         &lt;classpathLibs&gt;
            &lt;lib&gt;${java.home}/lib/rt.jar&lt;/lib&gt;
            &lt;lib&gt;D:\Java\apache-ant-1.9.2\lib\ant.jar&lt;/lib&gt;
         &lt;/classpathLibs&gt;
      &lt;/configuration&gt;
    &lt;/plugin&gt;
    &lt;/plugins&gt;
  &lt;/build&gt;
&lt;/project&gt;</code></pre>
        <h3>Example ZKM Script</h3>
        <pre class="code"><code>//System variables shown in blue. These will be replaced with their corresponding values. classpath "%classpathLibs%"
          "%compileArtifactPath%"
          "%pluginArtifactPath%"
          ;

open "%project.build.directory%%file.separator%%project.build.finalName%.%project.packaging%";

trimExclude *.*^ public static main(java.lang.String[]);

trim;

exclude     *.^*^ public static main(java.lang.String[]);

obfuscate   keepInnerClassInfo=false
            keepGenericsInfo=%myProperty0%
            obfuscateFlow=aggressive
            exceptionObfuscation=heavy
            encryptStringLiterals=flowObfuscate
            ;

saveAll   "%project.build.directory%";</code></pre>
        <h3>Apache Maven POM for ZelixKlassMasterMojo Plugin</h3>
        <pre class="code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;&lt;project&gt;
   &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
   &lt;groupId&gt;com.zelix.plugins&lt;/groupId&gt;
   &lt;artifactId&gt;zkm-plugin&lt;/artifactId&gt;
   &lt;version&gt;1.0.4&lt;/version&gt;
   &lt;packaging&gt;maven-plugin&lt;/packaging&gt;
   &lt;name&gt;Zelix KlassMaster Plugin&lt;/name&gt;
   &lt;description&gt;A Maven plugin for the Zelix KlassMaster Java obfuscator. Requires the ZKM_HOME system property to be set to the directory containing the ZKM.jar. Zelix KlassMaster is typically licensed to be installed and used on just one computer. It will typically not be possible to put it in a repository. &lt;/description&gt;
   &lt;/comments&gt;
   &lt;url&gt;https://www.zelix.com/klassmaster&lt;/url&gt;
   &lt;licenses&gt;
      &lt;license&gt;
         &lt;name&gt;GNU General Public License, version 3&lt;/name&gt;
         &lt;url&gt;http://www.gnu.org/licenses/gpl-3.0.txt&lt;/url&gt;
      &lt;/license&gt;
   &lt;/licenses&gt;
   &lt;properties&gt;
      &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
      &lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt;
      &lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.source&gt;
   &lt;/properties&gt;
   &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.apache.maven&lt;/groupId&gt;
            &lt;artifactId&gt;maven-plugin-api&lt;/artifactId&gt;
            &lt;version&gt;3.2.3&lt;/version&gt;
        &lt;/dependency&gt;
      &lt;dependency&gt;
         &lt;groupId&gt;org.apache.maven&lt;/groupId&gt;
         &lt;artifactId&gt;maven-project&lt;/artifactId&gt;
         &lt;version&gt;2.2.0&lt;/version&gt;
         &lt;type&gt;jar&lt;/type&gt;
         &lt;optional&gt;false&lt;/optional&gt;
      &lt;/dependency&gt;
      &lt;dependency&gt;
         &lt;groupId&gt;com.zelix.plugins&lt;/groupId&gt;
         &lt;artifactId&gt;ZKM&lt;/artifactId&gt;
         &lt;version&gt;20.0.0&lt;/version&gt;
         &lt;scope&gt;system&lt;/scope&gt;
         &lt;systemPath&gt;${ZKM_HOME}/ZKM.jar&lt;/systemPath&gt;
      &lt;/dependency&gt;
   &lt;/dependencies&gt;
&lt;/project&gt;</code></pre>
        <h3>Zelix KlassMaster Apache Maven Plugin - ZelixKlassMasterMojo</h3>
        <pre class="code"><code>All  Rights Reserved. *
 *                                                                             *
 * Licensed under the GNU General Public License, version 3                    *
 * http://www.gnu.org/licenses/gpl-3.0.txt                                     *
 * The license includes the following conditions. *
 *                                                                             *
 *  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY           *
 * APPLICABLE LAW. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM  *
 * IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF    *
 * ALL NECESSARY SERVICING, REPAIR OR CORRECTION. *
 *                                                                             *
 *-----------------------------------------------------------------------------*

package com.zelix.plugins;

import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugin.MojoFailureException;
import org.apache.maven.plugin.logging.Log;
import org.apache.maven.project.*;
import org.apache.maven.artifact.*;
import org.apache.maven.model.*;
import java.util.*;
import java.io.*;

/**
 * Allows the Zelix KlassMaster obfuscator to be called as part of a Maven build. *
 * @goal obfuscate
 * @phase package
 * @requiresDependencyResolution compile
 * @version 1.0.4
 */
public class ZelixKlassMasterMojo extends AbstractMojo{
 
   /**
   * If true then do not obfuscate. *
   * @parameter default-value=false
   */
   private boolean isSkip;
   
   /**
   * A ZKM Script file must be specified. *
   * @parameter default-value="${basedir}/script.txt"
   * @required
   */
   private File scriptFile;

   /**
   * Set the log file name. The file name can be relative or absolute. This parameter is optional. * The log file name will default to "ZKM_log.txt". *
   * @parameter default-value="${basedir}/ZKM_log.txt"
   */
   private String logFileName;

   /**
   * Set the trim log file name. The file name can be relative or absolute. This parameter is optional. * The trim log file name will default to "ZKM_TrimLog.txt". *
   * @parameter  default-value="${basedir}/ZKM_TrimLog.txt"
   */
   private String trimLogFileName;

   /**
   * Set the 'default exclusions' file name. The file name can be relative or absolute. This parameter is optional. * By default Zelix KlassMaster will look for a file named "defaultExclude.txt". *
   * @parameter  
   */
   private String defaultExcludeFileName;

   /**
   *</code></pre>
        <p>Java Obfuscator - Zelix KlassMaster(TM) - Calling from Apache Maven</p>
        <p>Zelix KlassMaster(TM) exposes a generic Java API that allows it to be called by a build tool.</p>
        <p>A basic Maven plugin for the Zelix KlassMaster(TM) obfuscator is built on this API and can be downloaded as zkm-plugin-1.0.4.jar</p>
        <p>The plugin can be installed into your environment using the following command where pathToDirectory is the absolute path to the directory containing the Zelix KlassMaster JAR ZKM.jar .</p>
        <p>mvn org.apache.maven.plugins:maven-install-plugin:2.5.2:install-file -D"file=zkm-plugin-1.0.4.jar" -D"ZKM_HOME= pathToDirectory "</p>
        <p>making use of the plugin and a corresponding ZKM Script .</p>
        <p>The plugin POM and the source code of the ZelixKlassMasterMojo also appear below.</p>
        <p>The parameters to the plugin correspond to the basic command line options .</p>
        <p>The ZKM Script referred to in the example</p>
        <p>typically makes use of System Variables which are basic project properties or that have been set in the pom XML.</p>
        <p>Note that when you use a pom which makes use of the Zelix KlassMaster Maven plugin you always need to have the ZKM_HOME system property set to the absolute path to the directory containing the Zelix KlassMaster JAR ZKM.jar as is shown below.</p>
        <p>mvn package -D"ZKM_HOME= pathToDirectory "</p>
        <p>Note that the project compile artifacts will be appended into a classpath string stored in the compileArtifactPath property.</p>
        <p>Similarly, the contents of the &lt;classpathLibs&gt; tag will be appended into a classpath string stored in the classpathLibs property.</p>
        <p>You can also set Special Configuration Options by setting System properties.</p>
        <p>&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt; &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt; &lt;groupId&gt;com.zelix.plugins&lt;/groupId&gt; &lt;artifactId&gt;test&lt;/artifactId&gt; &lt;version&gt;1.0.4&lt;/version&gt; &lt;packaging&gt;jar&lt;/packaging&gt; &lt;name&gt;Test of ZelixKlassMasterMojo&lt;/name&gt; &lt;properties&gt;</p>
        <p>&lt;!-- These will be passed through to plugin as project properties --&gt;</p>
        <p>&lt;junit.version&gt;4.11&lt;/junit.version&gt; &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt; &lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt; &lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.source&gt; &lt;/properties&gt; &lt;dependencies&gt; &lt;dependency&gt; &lt;groupId&gt;junit&lt;/groupId&gt; &lt;artifactId&gt;junit&lt;/artifactId&gt; &lt;version&gt;${junit.version}&lt;/version&gt; &lt;scope&gt;compile&lt;/scope&gt; &lt;/dependency&gt; &lt;/dependencies&gt; &lt;build&gt; &lt;plugins&gt; &lt;plugin&gt; &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt; &lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt; &lt;version&gt;3.1&lt;/version&gt; &lt;configuration&gt; &lt;source&gt;1.8&lt;/source&gt; &lt;target&gt;1.8&lt;/target&gt; &lt;/configuration&gt; &lt;/plugin&gt;</p>
        <p>&lt;systemPath&gt; ${ZKM_HOME}/ZKM.jar &lt;/systemPath&gt;</p>
        <p>&lt;!-- Will be used to inject values into the plugin but will not be in project properties --&gt;</p>
        <p>&lt;lib&gt; D:\Java\apache-ant-1.9.2\lib\ant.jar &lt;/lib&gt;</p>
        <p>//System variables shown in blue. These will be replaced with their corresponding values.</p>
        <p>classpath " %classpathLibs% " " %compileArtifactPath% " " %pluginArtifactPath% " ;</p>
        <p>%file.separator%%project.build.finalName% .</p>
        <p>trimExclude *.*^ public static main(java.lang.String[]);</p>
        <p>exclude *.^*^ public static main(java.lang.String[]);</p>
        <p>obfuscate keepInnerClassInfo=false keepGenericsInfo= %myProperty0%</p>
        <p>obfuscateFlow=aggressive exceptionObfuscation=heavy encryptStringLiterals=flowObfuscate ;</p>
        <p>&lt;?xml version="1.0" encoding="UTF-8"?&gt;&lt;project&gt; &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt; &lt;groupId&gt;com.zelix.plugins&lt;/groupId&gt; &lt;artifactId&gt;zkm-plugin&lt;/artifactId&gt; &lt;version&gt;1.0.4&lt;/version&gt; &lt;packaging&gt;maven-plugin&lt;/packaging&gt; &lt;name&gt;Zelix KlassMaster Plugin&lt;/name&gt; &lt;description&gt; A Maven plugin for the Zelix KlassMaster Java obfuscator.</p>
        <p>Requires the ZKM_HOME system property to be set to the directory containing the ZKM.jar.</p>
        <p>Zelix KlassMaster is typically licensed to be installed and used on just one computer.</p>
        <p>It will typically not be possible to put it in a repository.</p>
        <p>&lt;/description&gt; &lt;/comments&gt; &lt;url&gt;https://www.zelix.com/klassmaster&lt;/url&gt; &lt;licenses&gt; &lt;license&gt; &lt;name&gt;GNU General Public License, version 3&lt;/name&gt; &lt;url&gt;http://www.gnu.org/licenses/gpl-3.0.txt&lt;/url&gt; &lt;/license&gt; &lt;/licenses&gt; &lt;properties&gt; &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt; &lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt; &lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.source&gt; &lt;/properties&gt; &lt;dependencies&gt; &lt;dependency&gt; &lt;groupId&gt;org.apache.maven&lt;/groupId&gt; &lt;artifactId&gt;maven-plugin-api&lt;/artifactId&gt; &lt;version&gt;3.2.3&lt;/version&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;org.apache.maven&lt;/groupId&gt; &lt;artifactId&gt;maven-project&lt;/artifactId&gt; &lt;version&gt;2.2.0&lt;/version&gt; &lt;type&gt;jar&lt;/type&gt; &lt;optional&gt;false&lt;/optional&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;com.zelix.plugins&lt;/groupId&gt; &lt;artifactId&gt;ZKM&lt;/artifactId&gt; &lt;version&gt;20.0.0&lt;/version&gt; &lt;scope&gt;system&lt;/scope&gt;</p>
        <p>&lt;systemPath&gt;${ZKM_HOME}/ZKM.jar&lt;/systemPath&gt;</p>
        <p>&lt;/dependency&gt; &lt;/dependencies&gt; &lt;/project&gt;</p>
        <p>ZelixKlassMasterMojo is a basic Apache Maven mojo for the Zelix KlassMaster(TM) obfuscator.</p>
        <p>It passes in the calling pom's properties by default.</p>
        <p>* * * * Licensed under the GNU General Public License, version 3 * * http://www.gnu.org/licenses/gpl-3.0.txt * * The license includes the following conditions. * * * * THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY * * APPLICABLE LAW. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM * * IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF * * ALL NECESSARY SERVICING, REPAIR OR CORRECTION. * * * *-----------------------------------------------------------------------------*</p>
        <p>import org.apache.maven.plugin.AbstractMojo; import org.apache.maven.plugin.MojoExecutionException; import org.apache.maven.plugin.MojoFailureException; import org.apache.maven.plugin.logging.Log; import org.apache.maven.project.*; import org.apache.maven.artifact.*; import org.apache.maven.model.*; import java.util.*; import java.io.*;</p>
        <p>/** * Allows the Zelix KlassMaster obfuscator to be called as part of a Maven build.</p>
        <p>* * @goal obfuscate * @phase package * @requiresDependencyResolution compile * @version 1.0.4 */</p>
        <p>public class ZelixKlassMasterMojo extends AbstractMojo{</p>
        <p>/** * If true then do not obfuscate. * * @parameter default-value=false</p>
        <p>/** * A ZKM Script file must be specified.</p>
        <p>* * @parameter default-value="${basedir}/script.txt"</p>
        <p>/** * Set the log file name. The file name can be relative or absolute. This parameter is optional.</p>
        <p>* The log file name will default to "ZKM_log.txt".</p>
        <p>* * @parameter default-value="${basedir}/ZKM_log.txt"</p>
        <p>/** * Set the trim log file name. The file name can be relative or absolute. This parameter is optional.</p>
        <p>* The trim log file name will default to "ZKM_TrimLog.txt".</p>
        <p>* * @parameter default-value="${basedir}/ZKM_TrimLog.txt"</p>
        <p>/** * Set the 'default exclusions' file name. The file name can be relative or absolute. This parameter is optional.</p>
        <p>* By default Zelix KlassMaster will look for a file named "defaultExclude.txt".</p>
        <p>/** * Set the 'default trim exclusions' file name. The file name can be relative or absolute. Parameter is optional.</p>
        <p>* By default Zelix KlassMaster will look for a file named "defaultTrimExclude.txt".</p>
        <p>private String defaultTrimExcludeFileName;</p>
        <p>/** * Set the name of the default directory . The directory name can be relative or absolute.</p>
        <p>* If any of the log file, trim log file, 'default exclusion' file and the 'default trim exclusions' file names * are relative then they will be relative to this miscellaneous files directory. This parameter is optional.</p>
        <p>* The directory name will default to that of the "user.dir" system property.</p>
        <p>/** * Optional. Defaults to true. * * @parameter default-value=true</p>
        <p>/** * Optional. Defaults to false. * If true then Zelix KlassMaster will parse the ZKM Script but not execute it.</p>
        <p>/** * Optional. Any values will be used to be a classpath string which will be stored as * the "classpathLibs" property for use in the ZKM Script via a System Variable.</p>
        <p>/** * The Maven project reference where the plugin is currently being executed. The default value is populated from maven.</p>
        <p>* https://maven.apache.org/ref/3.2.3/apidocs/org/apache/maven/project/MavenProject.html * @parameter expression="${project}"</p>
        <p>/** * @parameter expression="${project.build.finalName}"</p>
        <p>/** * @parameter expression="${project.artifactId}"</p>
        <p>/** * @parameter expression="${project.packaging}"</p>
        <p>/** * @parameter expression="${project.build.outputDirectory}"</p>
        <p>/** * @parameter expression="${project.build.directory}"</p>
        <p>/** * @parameter expression="${project.version}"</p>
        <p>/** * @parameter expression="${basedir}"</p>
        <p>/** * The plugin dependencies. * * @parameter expression="${plugin.artifacts}"</p>
        <p>@Override public void execute() throws MojoExecutionException, MojoFailureException { Log log = getLog(); log.info("Zelix KlassMaster Plugin 1.0.4"); log.info("================================"); if (isSkip) { log.info("Skipping Zelix KlassMaster obfuscation because 'obfuscate.skip' is set to 'true'"); return; } if (scriptFile == null) { throw new MojoFailureException("ZKM Script file is null"); } if (!scriptFile.exists() || scriptFile.isDirectory()) { throw new MojoFailureException("'" + scriptFile.getAbsolutePath() + "' does not exist or is a directory"); }</p>
        <p>Properties extraProperties = new Properties();</p>
        <p>//add project properties to extraProperties</p>
        <p>for(Map.Entry entry : mavenProject.getProperties().entrySet()) { extraProperties.put(entry.getKey(), entry.getValue()); }</p>
        <p>//add configuration parameters to extraProperties mainly for debugging purposes</p>
        <p>extraProperties.put("isSkip", isSkip); if(scriptFile!=null) extraProperties.put("scriptFile", scriptFile.getAbsolutePath()); if(logFileName!=null) extraProperties.put("logFileName", logFileName); if(trimLogFileName!=null) extraProperties.put("trimLogFileName", trimLogFileName); if(defaultExcludeFileName!=null) extraProperties.put("defaultExcludeFileName", defaultExcludeFileName); if(defaultTrimExcludeFileName!=null)extraProperties.put("defaultTrimExcludeFileName", defaultTrimExcludeFileName); if(defaultDirectoryName!=null) extraProperties.put("defaultDirectoryName", defaultDirectoryName); extraProperties.put("isVerbose", isVerbose); extraProperties.put("isParseOnly", isParseOnly); //add project parameters extraProperties.put("basedir", basedir); extraProperties.put("project.build.finalName", buildFile); extraProperties.put("project.build.directory", buildDirectory); extraProperties.put("project.packaging", projectPackaging); extraProperties.put("project.build.outputDirectory", outputDirectory); extraProperties.put("project.artifactId", projectArtifactId); extraProperties.put("project.version", projectVersion); StringBuilder libBuilder = new StringBuilder();</p>
        <p>//build a classpath string from classpathLibs</p>
        <p>if (classpathLibs != null &amp;&amp; classpathLibs.length &gt; 0) { for (File lib : classpathLibs) { if (libBuilder.length() &gt; 0) { libBuilder.append(File.pathSeparator); } libBuilder.append(lib.getAbsolutePath()); } extraProperties.put("classpathLibs", libBuilder.toString()); }</p>
        <p>//build a classpath string from compile artifacts</p>
        <p>StringBuilder compileArtifactBuilder = new StringBuilder(); for (Object compileArtifact : mavenProject.getCompileArtifacts()) { File file = ((Artifact)compileArtifact).getFile(); if ((file != null) &amp;&amp; (file.exists())) { if (compileArtifactBuilder.length() &gt; 0) { compileArtifactBuilder.append(File.pathSeparator); } compileArtifactBuilder.append(file.getAbsolutePath()); } } extraProperties.put("compileArtifactPath", compileArtifactBuilder.toString());</p>
        <p>//build a classpath string from plugin artifacts</p>
        <p>StringBuilder pluginArtifactBuilder = new StringBuilder(); Set&lt;String&gt; artifactPathSet = new HashSet&lt;String&gt;(); for (Iterator i = pluginArtifacts.iterator(); i.hasNext();) { String artifactPath = ((Artifact)i.next()).getFile().getAbsolutePath(); if (artifactPathSet.add(artifactPath)) { if (pluginArtifactBuilder.length() &gt; 0) { pluginArtifactBuilder.append(File.pathSeparator); } pluginArtifactBuilder.append(artifactPath); } } extraProperties.put("pluginArtifactPath", pluginArtifactBuilder.toString()); try { com.zelix.ZKM.run(scriptFile.getAbsolutePath(), logFileName, trimLogFileName, defaultExcludeFileName, defaultTrimExcludeFileName, defaultDirectoryName, isVerbose, isParseOnly, extraProperties); } catch(Exception ex) { log.info(ex); throw new MojoFailureException(ex.toString()); } } }</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Calling Zelix KlassMaster(TM) from Apache Maven",
  "url": "https://zkm-web.vercel.app/docs/buildToolMaven"
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
      "name": "Calling Zelix KlassMaster(TM) from Apache Maven"
    }
  ]
}]
useHead({
  title: 'Calling Zelix KlassMaster(TM) from Apache Maven | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Calling Zelix KlassMaster(TM) from Apache Maven | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/buildToolMaven' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
