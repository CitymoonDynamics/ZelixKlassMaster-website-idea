<template>
  <div class="wrap">
    <section class="section">
      <p class="muted">Docs</p>
      <h1>Java Obfuscator - Zelix KlassMaster(TM) - Stack Trace Translate</h1>
      <div class="panel">
        <ul>
          <li>Java Obfuscator - Zelix KlassMaster(TM) - Stack Trace Translate</li>
          <li>Zelix KlassMaster(TM) - Stacktrace Translate Tool API The Zelix KlassMaster(TM) Stack Trace Translate tool exposes an API that allows it to be called by a Java class. The API is described below along with a very simple example and slightly more complicated log4J SimpleLayout and JDK 1.4 logging SimpleFormatter examples.</li>
          <li>package com.zelix; public class ZKMStackTraceTranslate public static final int NO_PARAM_TYPES public static final int UNQUALIFIED_PARAM_TYPES public static final int FULL_PARAM_TYPES public ZKMStackTraceTranslate(String changeLogFileName) public ZKMStackTraceTranslate(String[] changeLogFileNameArray) public ZKMStackTraceTranslate(String changeLogFileName, String bytecodeClasspath) public ZKMStackTraceTranslate(String[] changeLogFileNameArray, String bytecodeClasspath) public String getTranslatedStackTrace(String stackTrace) public String getTranslatedStackTrace(String stackTrace, boolean useBytecodeClasspath) public String getTranslatedStackTrace(String stackTrace, boolean useBytecodeClasspath, int paramDisplayType) public String getOldClassName(String newClassName) public String getOldMethodSignatures(String oldClassName, String newMethodName) public void close() Parameters: changeLogFileName Either changeLogFileName or changeLogFileNameArray must be present. The path name of the change log to use. May be relative or absolute. If the path is relative, it will be interpreted as being relative to the current working directory.</li>
          <li>You should specify the change log that was produced when you obfuscated the bytecode which produced the stack trace. changeLogFileNameArray Either changeLogFileName or changeLogFileNameArray must be present. An array of path names of the change logs to use. Names may be relative or absolute. If the path is relative, it will be interpreted as being relative to the current working directory.</li>
          <li>You should only need to specify more than one change log if you obfuscated the bytecode that generated the stack trace in separate steps each of which obfuscated only part of the bytecode. bytecodeClasspath Optional but highly recommended. A standard Java classpath String that must include.</li>
          <li>the obfuscated bytecode that generated the stack trace</li>
          <li>any supporting JAR files required by your obfuscated bytecode to run.</li>
        </ul>
        <h2>Simple Stand Alone Example</h2>
        <pre class="code"><code>import com.zelix.ZKMStackTraceTranslate;

ZKMStackTraceTranslate translator = new ZKMStackTraceTranslate("/projects/ChangeLog.txt", 
                                                               "/projects/MyApplication.jar:/projects/SomeClassLibrary.jar");
String translatedStackTrace = translator.getTranslatedStackTrace(myStackTraceString);</code></pre>
        <h3>Example Log4J SimpleLayout</h3>
        <pre class="code"><code>changeLogFileName = /Projects/changeLog1.txt
obfuscatedBytecodeClasspath = /Projects/MyApplication.jar:SomeClassLibrary.jar</code></pre>
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

package examples.log4j;

import java.io.*;
import java.text.*;
import java.util.*;
import org.apache.log4j.*;
import org.apache.log4j.spi.*;
import com.zelix.ZKMStackTraceTranslate;

/**
* Formats a LoggingEvent in a simple format. * Translates obfuscated class and method names in a stack trace to original names. * A ZKMStackTraceTranslate is cheap to construct but expensive if it actually formats something. * Whether you really need to translate obfuscated stack traces as they happen is your decision. */
public class ZKMSimpleLayout extends SimpleLayout {

   private static final String DATE_FORMAT = "yyyy.MM.dd HH:mm:ss";
   private static final String SPACE = " ";
   private static final SimpleDateFormat dateFormat;
   private Date date = new Date();
   private static ZKMStackTraceTranslate stackTraceTranslate;

   static {
      dateFormat = new SimpleDateFormat("yyyy.MM.dd HH:mm:ss");
      dateFormat.setTimeZone(TimeZone.getDefault());
      // Get change log file name &amp; classpath to obfuscated bytecode &amp; supporting classes from properties file. ResourceBundle resourceBundle = ResourceBundle.getBundle("examples.log4j.ZKMSimpleFormatter");      
      stackTraceTranslate = new ZKMStackTraceTranslate(resourceBundle.getString("changeLogFileName"), 
                                                       resourceBundle.getString("obfuscatedBytecodeClasspath"));
   }

   /**
   * Format the specified LoggingEvent. * If any Throwable while translating then try again without translating. *
   * @param Log event to format. * @return Formatted log event. */
   public String format(LoggingEvent event) {
      StringBuffer buffer = new StringBuffer();
      try {
         //format with translation
         formatHelper(event, buffer, true);
      }
      catch(Throwable th) {  
         th.printStackTrace(System.err);
         buffer.setLength(0);
         //1st write the throwable... StringWriter sw = new StringWriter();
         PrintWriter pw = new PrintWriter(sw);
         th.printStackTrace(pw);
         pw.close();
         buffer.append(sw.toString());
         buffer.append(LINE_SEP);
         buffer.append(LINE_SEP);
         //2nd write the event without translation... formatHelper(event, buffer, false);
      }
      return buffer.toString();
   }
   
   /**
   * Does the actual formatting. *
   * @param event LoggingEvent to format. * @param buffer Formatted details appended to the StringBuffer. * @param isTranslate If true then class and method name translation will be attempted. */
   private void formatHelper(LoggingEvent event, StringBuffer buffer, boolean isTranslate) {
      date.setTime(System.currentTimeMillis());
      buffer.append(dateFormat.format(date));
      buffer.append(SPACE);
      buffer.append(event.getLevel().to</code></pre>
        <h3>Example JDK 1.4 Logging SimpleFormatter</h3>
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

package examples.logging;

import java.util.logging.*;
import java.io.*;
import java.text.*;
import java.util.*;
import com.zelix.ZKMStackTraceTranslate;

/**
* Formats a LogRecord in a simple format. * Translates obfuscated class and method names in a stack trace to original names. * A ZKMStackTraceTranslate is cheap to construct but expensive if it actually formats something. * Whether you really need to translate obfuscated stack traces as they happen is your decision. */
public class ZKMSimpleFormatter extends Formatter {

   private static final String DATE_FORMAT = "yyyy.MM.dd HH:mm:ss";
   private static final String SPACE = " ";
   private static final String LINE_SEP = System.getProperty("line.separator");
   private static final SimpleDateFormat dateFormat;
   private Date date = new Date();
   private static ZKMStackTraceTranslate stackTraceTranslate;

   static {
      dateFormat = new SimpleDateFormat("yyyy.MM.dd HH:mm:ss");
      dateFormat.setTimeZone(TimeZone.getDefault());
      // Get change log file name &amp; classpath to obfuscated bytecode &amp; supporting classes from properties file. ResourceBundle resourceBundle = ResourceBundle.getBundle("examples.logging.ZKMSimpleFormatter");      
      stackTraceTranslate = new ZKMStackTraceTranslate(resourceBundle.getString("changeLogFileName"), 
                                                       resourceBundle.getString("obfuscatedBytecodeClasspath"));
   }
   
   /**
   * Format the specified LogRecord. If any Throwable while translating then try again without translating. *
   * @param Log record to format. * @return Formatted log record. */
   public synchronized String format(LogRecord record) {
      StringBuffer buffer = new StringBuffer();
      try {
         //format with translation
         formatHelper(record, buffer, true);
      }
      catch(Throwable th) {         
         buffer.setLength(0);
         //1st write the throwable... StringWriter sw = new StringWriter();
         PrintWriter pw = new PrintWriter(sw);
         th.printStackTrace(pw);
         pw.close();
         buffer.append(sw.toString());
         buffer.append(LINE_SEP);
         buffer.append(LINE_SEP);
         //2nd write the record without translation... formatHelper(record, buffer, false);
      }
      return buffer.toString();
   }
   
   /**
   * Does the actual formatting. *
   * @param Log record to format. * @param buffer Formatted details appended to the StringBuffer. * @param isTranslate If true then class and method name translation will be attempted. */
   private void formatHelper(LogRecord record, StringBuffer buffer, boolean isTranslate) {
      date.setTime(record.getMillis());
      buffer.append(dateFormat.format(date));
      buffer.append(SPACE);
      String sourceClassName = r</code></pre>
        <p>Zelix KlassMaster(TM) - Stacktrace Translate Tool API</p>
        <p>The Zelix KlassMaster(TM) Stack Trace Translate tool exposes an API that allows it to be called by a Java class.</p>
        <p>The API is described below along with a very simple example and slightly more complicated log4J SimpleLayout and JDK 1.4 logging SimpleFormatter examples.</p>
        <p>public static final int NO_PARAM_TYPES public static final int UNQUALIFIED_PARAM_TYPES public static final int FULL_PARAM_TYPES</p>
        <p>public ZKMStackTraceTranslate(String changeLogFileName)</p>
        <p>public ZKMStackTraceTranslate(String[] changeLogFileNameArray)</p>
        <p>public ZKMStackTraceTranslate(String changeLogFileName, String bytecodeClasspath)</p>
        <p>public ZKMStackTraceTranslate(String[] changeLogFileNameArray, String bytecodeClasspath)</p>
        <p>public String getTranslatedStackTrace(String stackTrace)</p>
        <p>public String getTranslatedStackTrace(String stackTrace, boolean useBytecodeClasspath)</p>
        <p>public String getTranslatedStackTrace(String stackTrace, boolean useBytecodeClasspath, int paramDisplayType)</p>
        <p>public String getOldClassName(String newClassName)</p>
        <p>public String getOldMethodSignatures(String oldClassName, String newMethodName)</p>
        <p>Either changeLogFileName or changeLogFileNameArray must be present. The path name of the change log to use. May be relative or absolute.</p>
        <p>If the path is relative, it will be interpreted as being relative to the current working directory.</p>
        <p>You should specify the change log that was produced when you obfuscated the bytecode which produced the stack trace.</p>
        <p>Either changeLogFileName or changeLogFileNameArray must be present. An array of path names of the change logs to use. Names may be relative or absolute.</p>
        <p>You should only need to specify more than one change log if you obfuscated the bytecode that generated the stack trace in separate steps each of which obfuscated only part of the bytecode.</p>
        <p>Optional but highly recommended. A standard Java classpath String that must include.</p>
        <p>Note also that Zelix KlassMaster(TM) will look inside of any archives appearing in the specified classpath and recursively add any embedded archives to the effective classpath.</p>
        <p>So, if you have an archive myJar.jar in your bytecodeClasspath which contains another archive named embedded.jar then both myJar.jar and embedded.jar will be in the effective classpath.</p>
        <p>Mandatory. The stack trace that you wish to translate.</p>
        <p>Indicates whether the bytecode in the bytecodeClassPath provided should be analyzed.</p>
        <p>If you have specified a bytecode classpath then it is recommended that useBytecodeClasspath be true</p>
        <p>which specifies that no method parameter types should be displayed in the translated stack trace.</p>
        <p>which specifies that unqualified method parameter types should be displayed in the translated stack trace. This is the default.</p>
        <p>which specifies that fully qualified method parameter types should be displayed in the translated stack trace.</p>
        <p>import com.zelix.ZKMStackTraceTranslate;</p>
        <p>ZKMStackTraceTranslate translator = new ZKMStackTraceTranslate("/projects/ChangeLog.txt", "/projects/MyApplication.jar:/projects/SomeClassLibrary.jar"); String translatedStackTrace = translator.getTranslatedStackTrace(myStackTraceString);</p>
        <p>changeLogFileName = /Projects/changeLog1.txt obfuscatedBytecodeClasspath = /Projects/MyApplication.jar:SomeClassLibrary.jar</p>
        <p>* * You are free to use this software with or without modifications * subject to the following conditions.</p>
        <p>* * THIS SOFTWARE IS PROVIDED "AS IS," WITHOUT A WARRANTY OF ANY KIND.</p>
        <p>* ZELIX PTY LTD MAKES NO WARRANTIES, EITHER EXPRESS OR IMPLIED, WITH * RESPECT TO THIS SOFTWARE INCLUDING BUT NOT LIMITED TO ANY WARRANTY * OF MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE.</p>
        <p>* ZELIX PTY LTD DOES NOT WARRANT THAT THE OPERATION OF THE SOFTWARE WILL * BE UNINTERRUPTED OR ERROR-FREE, OR THAT DEFECTS IN THE SOFTWARE WILL * BE CORRECTED. YOU THE USER ARE SOLELY RESPONSIBLE FOR DETERMINING THE * APPROPRIATENESS OF THE SOFTWARE FOR YOUR USE AND ACCEPT FULL RESPONSIBILITY * FOR ALL RISKS ASSOCIATED WITH ITS USE. ZELIX PTY LTD IS NOT AND WILL * NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR INCIDENTAL DAMAGES * (INCLUDING LOSS OF PROFITS OR INTERRUPTION OF BUSINESS) HOWEVER CAUSED * EVEN IF ZELIX PTY LTD HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
        <p>import java.io.*; import java.text.*; import java.util.*; import org.apache.log4j.*; import org.apache.log4j.spi.*; import com.zelix.ZKMStackTraceTranslate;</p>
        <p>/** * Formats a LoggingEvent in a simple format.</p>
        <p>* Translates obfuscated class and method names in a stack trace to original names.</p>
        <p>* A ZKMStackTraceTranslate is cheap to construct but expensive if it actually formats something.</p>
        <p>* Whether you really need to translate obfuscated stack traces as they happen is your decision.</p>
        <p>public class ZKMSimpleLayout extends SimpleLayout {</p>
        <p>private static final String DATE_FORMAT = "yyyy.MM.dd HH:mm:ss"; private static final String SPACE = " "; private static final SimpleDateFormat dateFormat; private Date date = new Date(); private static ZKMStackTraceTranslate stackTraceTranslate;</p>
        <p>static { dateFormat = new SimpleDateFormat("yyyy.MM.dd HH:mm:ss"); dateFormat.setTimeZone(TimeZone.getDefault());</p>
        <p>// Get change log file name &amp; classpath to obfuscated bytecode &amp; supporting classes from properties file.</p>
        <p>ResourceBundle resourceBundle = ResourceBundle.getBundle("examples.log4j.ZKMSimpleFormatter"); stackTraceTranslate = new ZKMStackTraceTranslate(resourceBundle.getString("changeLogFileName"), resourceBundle.getString("obfuscatedBytecodeClasspath")); }</p>
        <p>/** * Format the specified LoggingEvent.</p>
        <p>* If any Throwable while translating then try again without translating.</p>
        <p>* * @param Log event to format. * @return Formatted log event.</p>
        <p>public String format(LoggingEvent event) { StringBuffer buffer = new StringBuffer(); try {</p>
        <p>formatHelper(event, buffer, true); } catch(Throwable th) { th.printStackTrace(System.err); buffer.setLength(0);</p>
        <p>StringWriter sw = new StringWriter(); PrintWriter pw = new PrintWriter(sw); th.printStackTrace(pw); pw.close(); buffer.append(sw.toString()); buffer.append(LINE_SEP); buffer.append(LINE_SEP);</p>
        <p>//2nd write the event without translation...</p>
        <p>formatHelper(event, buffer, false); } return buffer.toString(); }</p>
        <p>/** * Does the actual formatting. * * @param event LoggingEvent to format.</p>
        <p>* @param buffer Formatted details appended to the StringBuffer.</p>
        <p>* @param isTranslate If true then class and method name translation will be attempted.</p>
        <p>private void formatHelper(LoggingEvent event, StringBuffer buffer, boolean isTranslate) { date.setTime(System.currentTimeMillis()); buffer.append(dateFormat.format(date)); buffer.append(SPACE); buffer.append(event.getLevel().toString()); buffer.append(": "); buffer.append(event.getLoggerName()); LocationInfo locationInfo = event.getLocationInformation(); if (locationInfo != null) { String className = locationInfo.getClassName(); if (className != null) { buffer.append(" - "); if (isTranslate) { className = stackTraceTranslate.getOldClassName(className); } buffer.append(className); String methodName = locationInfo.getMethodName(); if (methodName != null) { buffer.append(SPACE); if (isTranslate) { methodName = stackTraceTranslate.getOldMethodSignatures(className, methodName); } buffer.append(methodName); } } } buffer.append(LINE_SEP); buffer.append(event.getMessage()); ThrowableInformation throwableInformation = event.getThrowableInformation(); if (throwableInformation != null) { Throwable th = throwableInformation.getThrowable(); if (th != null) { buffer.append(LINE_SEP); StringWriter sw = new StringWriter(); PrintWriter pw = new PrintWriter(sw); th.printStackTrace(pw); pw.close(); String stackTrace = sw.toString(); if (isTranslate) { stackTrace = stackTraceTranslate.getTranslatedStackTrace(stackTrace); } buffer.append(stackTrace); } } buffer.append(LINE_SEP); }</p>
        <p>public boolean ignoresThrowable() { return false; } }</p>
        <p>Contents of ZKMSimpleFormatter.properties</p>
        <p>import java.util.logging.*; import java.io.*; import java.text.*; import java.util.*; import com.zelix.ZKMStackTraceTranslate;</p>
        <p>/** * Formats a LogRecord in a simple format.</p>
        <p>public class ZKMSimpleFormatter extends Formatter {</p>
        <p>private static final String DATE_FORMAT = "yyyy.MM.dd HH:mm:ss"; private static final String SPACE = " "; private static final String LINE_SEP = System.getProperty("line.separator"); private static final SimpleDateFormat dateFormat; private Date date = new Date(); private static ZKMStackTraceTranslate stackTraceTranslate;</p>
        <p>ResourceBundle resourceBundle = ResourceBundle.getBundle("examples.logging.ZKMSimpleFormatter"); stackTraceTranslate = new ZKMStackTraceTranslate(resourceBundle.getString("changeLogFileName"), resourceBundle.getString("obfuscatedBytecodeClasspath")); }</p>
        <p>/** * Format the specified LogRecord. If any Throwable while translating then try again without translating.</p>
        <p>* * @param Log record to format. * @return Formatted log record.</p>
        <p>public synchronized String format(LogRecord record) { StringBuffer buffer = new StringBuffer(); try {</p>
        <p>formatHelper(record, buffer, true); } catch(Throwable th) { buffer.setLength(0);</p>
        <p>//2nd write the record without translation...</p>
        <p>formatHelper(record, buffer, false); } return buffer.toString(); }</p>
        <p>/** * Does the actual formatting. * * @param Log record to format.</p>
        <p>private void formatHelper(LogRecord record, StringBuffer buffer, boolean isTranslate) { date.setTime(record.getMillis()); buffer.append(dateFormat.format(date)); buffer.append(SPACE); String sourceClassName = record.getSourceClassName(); if (sourceClassName != null) { if (isTranslate) { sourceClassName = stackTraceTranslate.getOldClassName(sourceClassName); } buffer.append(sourceClassName); } else { buffer.append(record.getLoggerName()); } String sourceMethodName = record.getSourceMethodName(); if (sourceMethodName != null) { buffer.append(SPACE); if (sourceClassName != null) { if (isTranslate) { sourceMethodName = stackTraceTranslate.getOldMethodSignatures(sourceClassName, sourceMethodName); } } buffer.append(sourceMethodName); } buffer.append(LINE_SEP); String message = formatMessage(record); buffer.append(record.getLevel().getLocalizedName()); buffer.append(": "); buffer.append(message); buffer.append(LINE_SEP); if (record.getThrown() != null) { StringWriter sw = new StringWriter(); PrintWriter pw = new PrintWriter(sw); record.getThrown().printStackTrace(pw); pw.close(); String stackTrace = sw.toString(); if (isTranslate) { stackTrace = stackTraceTranslate.getTranslatedStackTrace(stackTrace); } buffer.append(stackTrace); } } }</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
const schema = [{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Java Obfuscator - Zelix KlassMaster(TM) - Stack Trace Translate",
  "url": "https://zkm-web.vercel.app/docs/stackTraceTranslateApi"
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
      "name": "Java Obfuscator - Zelix KlassMaster(TM) - Stack Trace Translate"
    }
  ]
}]
useHead({
  title: 'Stack Trace Translate | Zelix KlassMaster',
  meta: [{ name: 'description', content: 'Java Obfuscator - Zelix KlassMaster(TM) - Stack Trace Transl | Zelix KlassMaster' },
    { property: 'og:image', content: 'https://zkm-web.vercel.app/og/docs.png' }
  ],
  link: [{ rel: 'canonical', href: 'https://zkm-web.vercel.app/docs/stackTraceTranslateApi' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
})
</script>
