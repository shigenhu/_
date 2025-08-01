<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="nl_BE">
<context>
    <name>About</name>   
    <message>
        <location filename="about.ui" line="14"/>
        <source>About Cppcheck</source>
        <translation>Over Cppcheck</translation>
    </message>
    <message>
        <location filename="about.ui" line="64"/>
        <source>Version %1</source>
        <translation>Versie %1</translation>
    </message>
    <message>
        <location filename="about.ui" line="71"/>
        <source>Cppcheck - A tool for static C/C++ code analysis.</source>
        <translation>Cppcheck - Een tool voor statische C/C++ code analyse.</translation>
    </message>
    <message>
        <location filename="about.ui" line="81"/>
        <source>Copyright © 2007-%1 Cppcheck team.</source>
        <oldsource>Copyright © 2007-2021 Cppcheck team.</oldsource>
        <translation type="unfinished">Copyright © 2007-2021 het cppcheck team.</translation>
    </message>
    <message>
        <location filename="about.ui" line="91"/>
        <source>This program is licensed under the terms
of the GNU General Public License version 3</source>
        <translation>Dit programma is beschikbaar onder te termen
van de GNU General Public License versie 3</translation>
    </message>
    <message>
        <location filename="about.ui" line="102"/>
        <source>Visit Cppcheck homepage at %1</source>
        <translation>Bezoek de Cppcheck homepage op %1</translation>
    </message>
    <message>
        <location filename="about.ui" line="115"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Many thanks to these libraries that we use:&lt;/p&gt;&lt;ul style=&quot;margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; -qt-list-indent: 1;&quot;&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;PCRE&lt;/li&gt;&lt;li style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;PicoJSON&lt;/li&gt;&lt;li style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Qt&lt;/li&gt;&lt;li style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;TinyXML2&lt;/li&gt;&lt;li style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Boost&lt;/li&gt;&lt;/ul&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <oldsource>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Many thanks to these libraries that we use:&lt;/p&gt;&lt;ul style=&quot;margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; -qt-list-indent: 1;&quot;&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;pcre&lt;/li&gt;&lt;li style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;picojson&lt;/li&gt;&lt;li style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;qt&lt;/li&gt;&lt;li style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;tinyxml2&lt;/li&gt;&lt;/ul&gt;&lt;/body&gt;&lt;/html&gt;</oldsource>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ApplicationDialog</name>
    <message>
        <location filename="applicationdialog.ui" line="23"/>
        <source>Add an application</source>
        <translation>Voeg een nieuwe applicatie toe</translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="41"/>
        <source>Here you can add an application that can open error files. Specify a name for the application, the application executable and command line parameters for the application.

The following texts in parameters are replaced with appropriate values when application is executed:
(file) - Filename containing the error
(line) - Line number containing the error
(message) - Error message
(severity) - Error severity

Example opening a file with Kate and make Kate scroll to the correct line:
Executable: kate
Parameters: -l(line) (file)</source>
        <translation>Hier kunt u toepassingen toevoegen die de foute bestanden kan openen. Geef naam op van de toepassing, het uitvoerbare bestand en command lijn parameters voor de toepassing

De volgende tekst in de parameters word vervangen door de juiste waarden wanneer de toepassing wordt uitgevoerd:
(bestand) - Bestandsnaam waarin de fout zit
(lijn) - Lijnnummer waar de fout zit
(bericht) Foutmelding
(ernst) Ernst van foutmelding

Voorbeeld een bestand openen met KonOs2 en laat KonOs2 scrollen naar de juiste lijn:
Uitvoerbaar: KonOs2
Parameters: -l(lijn) (bestand)</translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="76"/>
        <source>&amp;Name:</source>
        <translation>&amp;Naam:</translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="86"/>
        <source>&amp;Executable:</source>
        <translation>&amp;Uitvoerbaar:</translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="96"/>
        <source>&amp;Parameters:</source>
        <translation></translation>
    </message>
    <message>
        <location filename="applicationdialog.ui" line="138"/>
        <source>Browse</source>
        <translation>Bladeren</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="65"/>
        <source>Executable files (*.exe);;All files(*.*)</source>
        <translation>Uitvoerbare bestanden (*.exe);;Alle bestanden(*.*)</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="68"/>
        <source>Select viewer application</source>
        <translation>Selecteer applicatie</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="83"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="84"/>
        <source>You must specify a name, a path and optionally parameters for the application!</source>
        <translation>Geef een naam op, een pad en eventueel parameters voor de toepassing!</translation>
    </message>
</context>
<context>
    <name>ComplianceReportDialog</name>
    <message>
        <location filename="compliancereportdialog.ui" line="14"/>
        <source>Compliance Report</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="compliancereportdialog.ui" line="29"/>
        <source>Project name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="compliancereportdialog.ui" line="22"/>
        <source>Project version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="compliancereportdialog.ui" line="42"/>
        <source>Coding Standard</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="compliancereportdialog.ui" line="50"/>
        <source>Misra C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="compliancereportdialog.ui" line="55"/>
        <source>Cert C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="compliancereportdialog.ui" line="60"/>
        <source>Cert C++</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="compliancereportdialog.ui" line="70"/>
        <source>List of files with md5 checksums</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="compliancereportdialog.cpp" line="133"/>
        <source>Compliance report</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="compliancereportdialog.cpp" line="135"/>
        <source>HTML files (*.html)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="compliancereportdialog.cpp" line="176"/>
        <location filename="compliancereportdialog.cpp" line="239"/>
        <source>Save compliance report</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="compliancereportdialog.cpp" line="177"/>
        <source>Failed to import &apos;%1&apos; (%2), can not show files in compliance report</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FileViewDialog</name>
    <message>
        <location filename="fileviewdialog.cpp" line="53"/>
        <source>Could not find the file: %1</source>
        <oldsource>Could not find the file:
</oldsource>
        <translation>Kon het bestand niet vinden: %1</translation>
    </message>
    <message>
        <location filename="fileviewdialog.cpp" line="57"/>
        <location filename="fileviewdialog.cpp" line="71"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="fileviewdialog.cpp" line="67"/>
        <source>Could not read the file: %1</source>
        <translation>Kon het bestand niet lezen: %1</translation>
    </message>
</context>
<context>
    <name>HelpDialog</name>
    <message>
        <location filename="helpdialog.ui" line="14"/>
        <source>Cppcheck GUI help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="34"/>
        <source>Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="helpdialog.ui" line="44"/>
        <source>Index</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="helpdialog.cpp" line="84"/>
        <source>Helpfile &apos;%1&apos; was not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="helpdialog.cpp" line="86"/>
        <source>Cppcheck</source>
        <translation type="unfinished">Cppcheck</translation>
    </message>
</context>
<context>
    <name>LibraryAddFunctionDialog</name>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="23"/>
        <source>Add function</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="34"/>
        <source>Function name(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="44"/>
        <source>Number of arguments</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LibraryDialog</name>
    <message>
        <location filename="librarydialog.ui" line="14"/>
        <source>Library Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="22"/>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="29"/>
        <source>Save</source>
        <translation type="unfinished">Opslaan</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="36"/>
        <source>Save as</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="62"/>
        <source>Functions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="71"/>
        <source>Sort</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="111"/>
        <source>Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="131"/>
        <source>Filter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="164"/>
        <source>Comments</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="204"/>
        <source>noreturn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="212"/>
        <source>False</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="217"/>
        <source>True</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="222"/>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="232"/>
        <source>return value must be used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="239"/>
        <source>ignore function in leaks checking</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="246"/>
        <source>Arguments</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="258"/>
        <source>Edit</source>
        <translation type="unfinished">Bewerk</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="98"/>
        <location filename="librarydialog.cpp" line="170"/>
        <source>Library files (*.cfg)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="100"/>
        <source>Open library file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="111"/>
        <location filename="librarydialog.cpp" line="123"/>
        <location filename="librarydialog.cpp" line="160"/>
        <source>Cppcheck</source>
        <translation type="unfinished">Cppcheck</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="112"/>
        <source>Cannot open file %1.</source>
        <oldsource>Can not open file %1.</oldsource>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="124"/>
        <source>Failed to load %1. %2.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="161"/>
        <source>Cannot save file %1.</source>
        <oldsource>Can not save file %1.</oldsource>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="173"/>
        <source>Save the library as</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LibraryEditArgDialog</name>
    <message>
        <location filename="libraryeditargdialog.ui" line="14"/>
        <source>Edit argument</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="20"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;
&lt;p&gt;Is bool value allowed? For instance result from comparison or from &apos;!&apos; operator.&lt;/p&gt;
&lt;p&gt;Typically, set this if the argument is a pointer, size, etc.&lt;/p&gt;
&lt;p&gt;Example:&lt;/p&gt;
&lt;pre&gt;    memcmp(x, y, i == 123);   // last argument should not have a bool value&lt;/pre&gt;
&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="28"/>
        <source>Not bool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="35"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;
&lt;p&gt;Is a null parameter value allowed?&lt;/p&gt;
&lt;p&gt;Typically this should be used on any pointer parameter that does not allow null.&lt;/p&gt;
&lt;p&gt;Example:&lt;/p&gt;
&lt;pre&gt;    strcpy(x,y); // neither x or y is allowed to be null.&lt;/pre&gt;
&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="43"/>
        <source>Not null</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="50"/>
        <source>Not uninit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="57"/>
        <source>String</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="70"/>
        <source>Format string</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="92"/>
        <source>Min size of buffer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="101"/>
        <location filename="libraryeditargdialog.ui" line="203"/>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="109"/>
        <location filename="libraryeditargdialog.ui" line="214"/>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="114"/>
        <location filename="libraryeditargdialog.ui" line="219"/>
        <source>argvalue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="119"/>
        <location filename="libraryeditargdialog.ui" line="224"/>
        <source>mul</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="124"/>
        <location filename="libraryeditargdialog.ui" line="229"/>
        <source>strlen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="132"/>
        <location filename="libraryeditargdialog.ui" line="237"/>
        <source>Arg</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="159"/>
        <location filename="libraryeditargdialog.ui" line="264"/>
        <source>Arg2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="194"/>
        <source>and</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="310"/>
        <source>Valid values</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="mainwindow.ui" line="26"/>
        <location filename="mainwindow.ui" line="685"/>
        <location filename="mainwindow.cpp" line="452"/>
        <location filename="mainwindow.cpp" line="639"/>
        <location filename="mainwindow.cpp" line="718"/>
        <location filename="mainwindow.cpp" line="823"/>
        <location filename="mainwindow.cpp" line="845"/>
        <location filename="mainwindow.cpp" line="1430"/>
        <location filename="mainwindow.cpp" line="1559"/>
        <location filename="mainwindow.cpp" line="1891"/>
        <location filename="mainwindow.cpp" line="1899"/>
        <location filename="mainwindow.cpp" line="1947"/>
        <location filename="mainwindow.cpp" line="1956"/>
        <location filename="mainwindow.cpp" line="2028"/>
        <location filename="mainwindow.cpp" line="2102"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="208"/>
        <source>A&amp;nalyze</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="264"/>
        <source>Standard</source>
        <translation>Standaard</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="132"/>
        <source>&amp;File</source>
        <translation>&amp;Bestand</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="152"/>
        <source>&amp;View</source>
        <translation>&amp;Weergave</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="156"/>
        <source>&amp;Toolbars</source>
        <translation>&amp;Werkbalken</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="212"/>
        <source>C++ standard</source>
        <translation>C++standaard</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="224"/>
        <source>&amp;C standard</source>
        <oldsource>C standard</oldsource>
        <translation type="unfinished">C standaard</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="251"/>
        <source>&amp;Edit</source>
        <translation>Be&amp;werken</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="312"/>
        <source>&amp;License...</source>
        <translation>&amp;Licentie...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="317"/>
        <source>A&amp;uthors...</source>
        <translation>A&amp;uteurs...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="326"/>
        <source>&amp;About...</source>
        <translation>&amp;Over...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="331"/>
        <source>&amp;Files...</source>
        <translation>&amp;Bestanden...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="334"/>
        <location filename="mainwindow.ui" line="337"/>
        <source>Analyze files</source>
        <oldsource>Check files</oldsource>
        <translation type="unfinished">Controleer bestanden</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="340"/>
        <source>Ctrl+F</source>
        <translation>Ctrl+F</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="349"/>
        <source>&amp;Directory...</source>
        <translation>&amp;Mappen...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="352"/>
        <location filename="mainwindow.ui" line="355"/>
        <source>Analyze directory</source>
        <oldsource>Check directory</oldsource>
        <translation type="unfinished">Controleer Map</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="358"/>
        <source>Ctrl+D</source>
        <translation>Ctrl+D</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="370"/>
        <source>Ctrl+R</source>
        <translation>Ctrl+R</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="388"/>
        <source>&amp;Stop</source>
        <translation>&amp;Stop</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="391"/>
        <location filename="mainwindow.ui" line="394"/>
        <source>Stop analysis</source>
        <oldsource>Stop checking</oldsource>
        <translation type="unfinished">Stop controle</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="397"/>
        <source>Esc</source>
        <translation>Esc</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="406"/>
        <source>&amp;Save results to file...</source>
        <translation>&amp;Resultaten opslaan...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="409"/>
        <source>Ctrl+S</source>
        <translation>Ctrl+S</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="414"/>
        <source>&amp;Quit</source>
        <translation>&amp;Afsluiten</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="426"/>
        <source>&amp;Clear results</source>
        <translation>&amp;Resultaten wissen</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="435"/>
        <source>&amp;Preferences</source>
        <translation>&amp;Voorkeuren</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="468"/>
        <location filename="mainwindow.ui" line="471"/>
        <location filename="mainwindow.cpp" line="2326"/>
        <source>Show errors</source>
        <translation>Toon fouten</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="614"/>
        <location filename="mainwindow.ui" line="617"/>
        <location filename="mainwindow.cpp" line="2327"/>
        <source>Show warnings</source>
        <translation>Toon waarschuwingen</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="632"/>
        <location filename="mainwindow.ui" line="635"/>
        <source>Show performance warnings</source>
        <translation>Toon presentatie waarschuwingen</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="643"/>
        <source>Show &amp;hidden</source>
        <translation>Toon &amp;verborgen</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="949"/>
        <location filename="mainwindow.cpp" line="990"/>
        <source>Information</source>
        <translation>Informatie</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="658"/>
        <source>Show information messages</source>
        <translation>Toon informatie bericht</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="673"/>
        <source>Show portability warnings</source>
        <translation>Toon portabiliteit waarschuwingen</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="688"/>
        <source>Show Cppcheck results</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="700"/>
        <source>Clang</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="703"/>
        <source>Show Clang results</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="711"/>
        <source>&amp;Filter</source>
        <translation>&amp;Filter</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="714"/>
        <source>Filter results</source>
        <translation>Filter resultaten</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="730"/>
        <source>Windows 32-bit ANSI</source>
        <translation>Windows 32-bit ANSI</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="738"/>
        <source>Windows 32-bit Unicode</source>
        <translation></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="746"/>
        <source>Unix 32-bit</source>
        <translation></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="754"/>
        <source>Unix 64-bit</source>
        <translation></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="762"/>
        <source>Windows 64-bit</source>
        <translation></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="848"/>
        <source>&amp;Print...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="851"/>
        <source>Print the Current Report</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="856"/>
        <source>Print Pre&amp;view...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="859"/>
        <source>Open a Print Preview Dialog for the Current Results</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="867"/>
        <source>Open library editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="476"/>
        <source>&amp;Check all</source>
        <translation>&amp;Controleer alles</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="84"/>
        <source>Checking for updates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="100"/>
        <source>Hide</source>
        <translation type="unfinished">Verberg</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="164"/>
        <location filename="mainwindow.ui" line="969"/>
        <source>Report</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="301"/>
        <source>Filter</source>
        <translation></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="367"/>
        <source>&amp;Reanalyze modified files</source>
        <oldsource>&amp;Recheck modified files</oldsource>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="379"/>
        <source>Reanal&amp;yze all files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="417"/>
        <source>Ctrl+Q</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="447"/>
        <source>Style war&amp;nings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="465"/>
        <source>E&amp;rrors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="481"/>
        <source>&amp;Uncheck all</source>
        <translation>Selecteer &amp;niets</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="486"/>
        <source>Collapse &amp;all</source>
        <translation>Alles Inkl&amp;appen</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="491"/>
        <source>&amp;Expand all</source>
        <translation>Alles &amp;Uitklappen</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="499"/>
        <source>&amp;Standard</source>
        <translation>&amp;Standaard</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="502"/>
        <source>Standard items</source>
        <translation>Standaard items</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="518"/>
        <source>Toolbar</source>
        <translation>Werkbalk</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="526"/>
        <source>&amp;Categories</source>
        <translation>&amp;Categorieën</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="529"/>
        <source>Error categories</source>
        <translation>Foute Categorieën</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="534"/>
        <source>&amp;Open XML...</source>
        <translation></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="543"/>
        <source>Open P&amp;roject File...</source>
        <translation>Open P&amp;oject bestand...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="546"/>
        <source>Ctrl+Shift+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="555"/>
        <source>Sh&amp;ow Scratchpad...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="560"/>
        <source>&amp;New Project File...</source>
        <translation>&amp;Nieuw Project Bestand...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="563"/>
        <source>Ctrl+Shift+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="568"/>
        <source>&amp;Log View</source>
        <translation>&amp;Log weergave</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="571"/>
        <source>Log View</source>
        <translation>Log weergave</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="579"/>
        <source>C&amp;lose Project File</source>
        <translation>&amp;Sluit Project Bestand</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="587"/>
        <source>&amp;Edit Project File...</source>
        <translation>&amp;Bewerk Project Bestand...</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="599"/>
        <source>&amp;Statistics</source>
        <translation>&amp;Statistieken</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="611"/>
        <source>&amp;Warnings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="629"/>
        <source>Per&amp;formance warnings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="655"/>
        <source>&amp;Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="670"/>
        <source>&amp;Portability</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="770"/>
        <source>P&amp;latforms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="784"/>
        <source>C++&amp;11</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="795"/>
        <source>C&amp;99</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="803"/>
        <source>&amp;Posix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="811"/>
        <source>C&amp;11</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="835"/>
        <source>&amp;C89</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="843"/>
        <source>&amp;C++03</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="864"/>
        <source>&amp;Library Editor...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="875"/>
        <source>&amp;Auto-detect language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="883"/>
        <source>&amp;Enforce C++</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="891"/>
        <source>E&amp;nforce C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="902"/>
        <source>C++14</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="910"/>
        <source>Reanalyze and check library</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="918"/>
        <source>Check configuration (defines, includes)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="926"/>
        <source>C++17</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="937"/>
        <source>C++20</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="964"/>
        <source>Compliance report...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="977"/>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="985"/>
        <source>Misra C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="993"/>
        <source>Misra C++ 2008</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="1001"/>
        <source>Cert C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="1009"/>
        <source>Cert C++</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="1017"/>
        <source>Misra C++ 2023</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="1025"/>
        <source>Autosar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="507"/>
        <source>&amp;Contents</source>
        <translation>&amp;Inhoud</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="282"/>
        <source>Categories</source>
        <translation>Categorieën</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="450"/>
        <location filename="mainwindow.ui" line="453"/>
        <source>Show style warnings</source>
        <translation>Toon stijl waarschuwingen</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="510"/>
        <source>Open the help contents</source>
        <translation>Open de help inhoud</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="513"/>
        <source>F1</source>
        <translation></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="198"/>
        <source>&amp;Help</source>
        <translation>&amp;Help</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="149"/>
        <location filename="mainwindow.cpp" line="1737"/>
        <source>Quick Filter:</source>
        <translation>Snel Filter:</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="794"/>
        <source>Select configuration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="824"/>
        <source>Found project file: %1

Do you want to load this project file instead?</source>
        <translation>Project bestand gevonden: %1
Wilt u dit project laden in plaats van?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="958"/>
        <source>File not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="961"/>
        <source>Bad XML</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="964"/>
        <source>Missing attribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="967"/>
        <source>Bad attribute value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="979"/>
        <source>Duplicate define</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="990"/>
        <source>Failed to load the selected library &apos;%1&apos;.
%2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1001"/>
        <source>File not found: &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1024"/>
        <source>Failed to load/setup addon %1: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1046"/>
        <source>Failed to load %1. Your Cppcheck installation is broken. You can use --data-dir=&lt;directory&gt; at the command line to specify where this file is located. Please note that --data-dir is supposed to be used by installation scripts and therefore the GUI does not start when it is used, all that happens is that the setting is configured.

Analysis is aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1056"/>
        <source>Failed to load %1 - %2

Analysis is aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1066"/>
        <location filename="mainwindow.cpp" line="1162"/>
        <source>%1

Analysis is aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1611"/>
        <source>License</source>
        <translation>Licentie</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1618"/>
        <source>Authors</source>
        <translation>Auteurs</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1633"/>
        <source>Save the report file</source>
        <translation>Rapport opslaan </translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1446"/>
        <location filename="mainwindow.cpp" line="1640"/>
        <source>XML files (*.xml)</source>
        <translation>XML bestanden (*.xml)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="447"/>
        <source>There was a problem with loading the editor application settings.

This is probably because the settings were changed between the Cppcheck versions. Please check (and fix) the editor application settings, otherwise the editor program might not start correctly.</source>
        <translation>Er was een probleem met het laden van de bewerker instellingen.

Dit is waarschijnlijk omdat de instellingen zijn gewijzigd tussen de versies van cppcheck. Controleer (en maak) de bewerker instellingen, anders zal de bewerker niet correct starten.</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="719"/>
        <source>You must close the project file before selecting new files or directories!</source>
        <translation>Je moet project bestanden sluiten voordat je nieuwe bestanden of mappen selekteerd!</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="949"/>
        <source>The library &apos;%1&apos; contains unknown elements:
%2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="970"/>
        <source>Unsupported format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="973"/>
        <source>Duplicate platform type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="976"/>
        <source>Platform type redefined</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="982"/>
        <source>Unknown element</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="985"/>
        <source>Unknown issue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1046"/>
        <location filename="mainwindow.cpp" line="1056"/>
        <location filename="mainwindow.cpp" line="1066"/>
        <location filename="mainwindow.cpp" line="1162"/>
        <source>Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1448"/>
        <source>Open the report file</source>
        <translation>Open het rapport bestand</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1644"/>
        <source>Text files (*.txt)</source>
        <translation>Tekst bestanden (*.txt)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1648"/>
        <source>CSV files (*.csv)</source>
        <translation>CSV bestanden (*.csv)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1776"/>
        <source>Project files (*.cppcheck);;All files(*.*)</source>
        <translation>Project bestanden (*.cppcheck);;Alle bestanden(*.*)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1778"/>
        <source>Select Project File</source>
        <translation>Selecteer project bestand</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="230"/>
        <location filename="mainwindow.cpp" line="1739"/>
        <location filename="mainwindow.cpp" line="1806"/>
        <location filename="mainwindow.cpp" line="1996"/>
        <source>Project:</source>
        <translation>Project:</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="640"/>
        <source>No suitable files found to analyze!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="733"/>
        <source>C/C++ Source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="734"/>
        <source>Compile database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="735"/>
        <source>Visual Studio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="736"/>
        <source>Borland C++ Builder 6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="739"/>
        <source>Select files to analyze</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="754"/>
        <source>Select directory to analyze</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="794"/>
        <source>Select the configuration that will be analyzed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="846"/>
        <source>Found project files from the directory.

Do you want to proceed analysis without using any of these project files?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1431"/>
        <source>Current results will be cleared.

Opening a new XML file will clear current results.
Do you want to proceed?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1555"/>
        <source>Analyzer is running.

Do you want to stop the analysis and exit Cppcheck?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1597"/>
        <source>About</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1631"/>
        <source>XML files (*.xml);;Text files (*.txt);;CSV files (*.csv)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1671"/>
        <source>Cannot generate a compliance report right now, an analysis must finish successfully. Try to reanalyze the code and ensure there are no critical errors.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1892"/>
        <source>Build dir &apos;%1&apos; does not exist, create it?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1900"/>
        <source>To check the project using addons, you need a build directory.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1932"/>
        <source>Failed to open file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1935"/>
        <source>Unknown project file format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1938"/>
        <source>Failed to import project file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1948"/>
        <source>Failed to import &apos;%1&apos;: %2

Analysis is stopped.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1957"/>
        <source>Failed to import &apos;%1&apos; (%2), analysis is stopped</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1981"/>
        <source>Project files (*.cppcheck)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1983"/>
        <source>Select Project Filename</source>
        <translation>Selecteer project bestandsnaam</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="2029"/>
        <source>No project file loaded</source>
        <translation>Geen project bestand geladen</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="2097"/>
        <source>The project file

%1

 could not be found!

Do you want to remove the file from the recently used projects -list?</source>
        <translation>Het project bestand

%1

Kan niet worden gevonden!
Wilt u het bestand van de onlangs gebruikte project verwijderen -lijst?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="2257"/>
        <source>Install</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="2261"/>
        <source>New version available: %1. %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="2299"/>
        <source>Show Mandatory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="2300"/>
        <source>Show Required</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="2301"/>
        <source>Show Advisory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="2302"/>
        <source>Show Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="2319"/>
        <source>Show L1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="2320"/>
        <source>Show L2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="2321"/>
        <source>Show L3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="2328"/>
        <source>Show style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="2329"/>
        <source>Show portability</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="2330"/>
        <source>Show performance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="2331"/>
        <source>Show information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.cpp" line="106"/>
        <source>Cppcheck GUI.

Syntax:
    cppcheck-gui [OPTIONS] [files or paths]

Options:
    -h, --help              Print this help
    -p &lt;file&gt;               Open given project file and start checking it
    -l &lt;file&gt;               Open given results xml file
    -d &lt;directory&gt;          Specify the directory that was checked to generate the results xml specified with -l
    -v, --version           Show program version
    --data-dir=&lt;directory&gt;  This option is for installation scripts so they can configure the directory where
                            datafiles are located (translations, cfg). The GUI is not started when this option
                            is used.</source>
        <oldsource>Cppcheck GUI.

Syntax:
    cppcheck-gui [OPTIONS] [files or paths]

Options:
    -h, --help              Print this help
    -p &lt;file&gt;               Open given project file and start checking it
    -l &lt;file&gt;               Open given results xml file
    -d &lt;directory&gt;          Specify the directory that was checked to generate the results xml specified with -l
    -v, --version           Show program version
    --data-dir=&lt;directory&gt;  Specify directory where GUI datafiles are located (translations, cfg)</oldsource>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.cpp" line="121"/>
        <source>Cppcheck GUI - Command line parameters</source>
        <translation>Cppcheck GUI - Command lijn parameters</translation>
    </message>
</context>
<context>
    <name>NewSuppressionDialog</name>
    <message>
        <location filename="newsuppressiondialog.ui" line="17"/>
        <source>New suppression</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.ui" line="25"/>
        <source>Error ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.ui" line="32"/>
        <source>File name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.ui" line="42"/>
        <source>Line number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.ui" line="52"/>
        <source>Symbol name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="newsuppressiondialog.cpp" line="83"/>
        <source>Edit suppression</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Platforms</name>
    <message>
        <location filename="platforms.cpp" line="38"/>
        <source>Native</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="39"/>
        <source>Unix 32-bit</source>
        <translation></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="40"/>
        <source>Unix 64-bit</source>
        <translation></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="41"/>
        <source>Windows 32-bit ANSI</source>
        <translation></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="42"/>
        <source>Windows 32-bit Unicode</source>
        <translation></translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="43"/>
        <source>Windows 64-bit</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>ProjectFile</name>
    <message>
        <location filename="projectfile.ui" line="14"/>
        <source>Project File</source>
        <translation>Project Bestand</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="24"/>
        <source>Paths and Defines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="30"/>
        <source>Import Project (Visual studio / compile database/ Borland C++ Builder 6)</source>
        <oldsource>Import Project (Visual studio / compile database)</oldsource>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="231"/>
        <source>Defines must be separated by a semicolon. Example: DEF1;DEF2=5;DEF3=int</source>
        <oldsource>Defines must be separated by a semicolon &apos;;&apos;</oldsource>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="389"/>
        <source>Note: Put your own custom .cfg files in the same folder as the project file. You should see them above.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="655"/>
        <source>If tags are added, you will be able to right click on warnings and set one of these tags. You can manually categorize warnings.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="665"/>
        <source>Exclude source files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="676"/>
        <source>Exclude folder...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="683"/>
        <source>Exclude file...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="833"/>
        <source>Misra C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="841"/>
        <source>2012</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="846"/>
        <location filename="projectfile.ui" line="914"/>
        <source>2023</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="876"/>
        <source>MISRA rule texts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="883"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copy/paste the text from Appendix A &amp;quot;Summary of guidelines&amp;quot; from the MISRA C 2012 pdf to a text file.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="890"/>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="73"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;You have a choice:&lt;/p&gt;&lt;p&gt; * Analyze all Debug and Release configurations&lt;/p&gt;&lt;p&gt; * Only analyze the first matching Debug configuration&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="60"/>
        <location filename="projectfile.ui" line="422"/>
        <location filename="projectfile.ui" line="616"/>
        <source>Browse...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="76"/>
        <source>Analyze all Visual Studio configurations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="113"/>
        <source>Selected VS Configurations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="147"/>
        <source>Paths:</source>
        <translation>Paden:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="181"/>
        <location filename="projectfile.ui" line="296"/>
        <source>Add...</source>
        <translation>Toevoegen...</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="188"/>
        <location filename="projectfile.ui" line="303"/>
        <location filename="projectfile.ui" line="690"/>
        <source>Edit</source>
        <translation>Bewerk</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="195"/>
        <location filename="projectfile.ui" line="310"/>
        <location filename="projectfile.ui" line="697"/>
        <location filename="projectfile.ui" line="740"/>
        <source>Remove</source>
        <translation>Verwijder</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="242"/>
        <source>Undefines:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="252"/>
        <source>Undefines must be separated by a semicolon. Example: UNDEF1;UNDEF2;UNDEF3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="265"/>
        <source>Include Paths:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="362"/>
        <source>Types and Functions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="403"/>
        <location filename="projectfile.ui" line="488"/>
        <source>Analysis</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="415"/>
        <source>This is a workfolder that Cppcheck will use for various purposes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="432"/>
        <source>Parser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="438"/>
        <source>Cppcheck (built in)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="458"/>
        <source>Check level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="464"/>
        <source>Reduced -- meant for usage where developer wants results directly. Limited and faster analysis with fewer results.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="471"/>
        <source>Normal -- meant for normal analysis in CI. Analysis should finish in reasonable time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="478"/>
        <source>Exhaustive -- meant for nightly builds etc. Analysis time can be longer (10x slower than compilation is OK).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="497"/>
        <source>Check that each class has a safe public interface</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="513"/>
        <source>Limit analysis</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="529"/>
        <source>Check code in unused templates (should be ON normally, however in theory you can safely ignore warnings in unused templates)</source>
        <oldsource>Check code in unused templates  (slower and less accurate analysis)</oldsource>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="541"/>
        <source>Max CTU depth</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="607"/>
        <source>Premium License</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="765"/>
        <source>Enable inline suppressions</source>
        <translation type="unfinished">Schakel inline suppressies in</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="851"/>
        <source>2025</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="901"/>
        <source>Misra C++</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="909"/>
        <source>2008</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="937"/>
        <source>Cert C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="946"/>
        <source>CERT-INT35-C:  int precision (if size equals precision, you can leave empty)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="965"/>
        <source>Autosar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="981"/>
        <source>Bug hunting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="991"/>
        <source>External tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="330"/>
        <source>Up</source>
        <translation>Omhoog</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="337"/>
        <source>Down</source>
        <translation>Omlaag</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="368"/>
        <source>Platform</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="448"/>
        <source>Clang (experimental)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="494"/>
        <source>If you want to design your classes to be as flexible and robust as possible then the public interface must be very robust. Cppcheck will asumme that arguments can take *any* value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="519"/>
        <source>Check code in headers  (should be ON normally. if you want a limited quick analysis then turn this OFF)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="572"/>
        <source>Max recursion in template instantiation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="627"/>
        <source>Warning options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="633"/>
        <source>Root path:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="639"/>
        <source>Filepaths in warnings will be relative to this path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="649"/>
        <source>Warning tags (separated by semicolon)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="409"/>
        <source>Cppcheck build dir (whole program analysis, incremental analysis, statistics, etc)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="380"/>
        <source>Libraries</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="722"/>
        <source>Suppressions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="733"/>
        <source>Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="786"/>
        <location filename="projectfile.ui" line="792"/>
        <source>Addons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="798"/>
        <source>Note: Addons require &lt;a href=&quot;https://www.python.org/&quot;&gt;Python&lt;/a&gt; being installed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="808"/>
        <source>Y2038</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="815"/>
        <source>Thread safety</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="825"/>
        <source>Coding standards</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="958"/>
        <source>Cert C++</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="975"/>
        <source>Bug hunting (Premium)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="1004"/>
        <source>Clang analyzer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="997"/>
        <source>Clang-tidy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="221"/>
        <source>Defines:</source>
        <translation>Omschrijft:</translation>
    </message>
</context>
<context>
    <name>ProjectFileDialog</name>
    <message>
        <location filename="projectfiledialog.cpp" line="119"/>
        <source>Project file: %1</source>
        <translation>Project Bestand %1</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="585"/>
        <source>Select Cppcheck build dir</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="854"/>
        <source>Select include directory</source>
        <translation>Selecteer include map</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="834"/>
        <source>Select a directory to check</source>
        <translation>Selecteer een map om te controleren</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="392"/>
        <source>Note: Open source Cppcheck does not fully implement Misra C 2012</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="454"/>
        <source>Clang-tidy (not found)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="624"/>
        <source>Visual Studio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="625"/>
        <source>Compile database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="626"/>
        <source>Borland C++ Builder 6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="627"/>
        <source>Import Project</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="874"/>
        <source>Select directory to ignore</source>
        <translation>Selecteer een map om te negeren</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="882"/>
        <source>Source files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="883"/>
        <source>All files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="884"/>
        <source>Exclude file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="967"/>
        <source>Select MISRA rule texts file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="969"/>
        <source>MISRA rule texts file (%1)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="translationhandler.cpp" line="87"/>
        <source>Unknown language specified!</source>
        <translation>Onbekende taal gekozen!</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="113"/>
        <source>Language file %1 not found!</source>
        <oldsource>Language file %1.qm not found!</oldsource>
        <translation>Kon het taalbestand niet vinden: %1!</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="118"/>
        <source>Failed to load translation for language %1 from file %2</source>
        <oldsource>Failed to load translation for language %1 from file %2.qm</oldsource>
        <translation>Kon de vertaling voor taal %1 in bestand %2 niet laden</translation>
    </message>
    <message>
        <location filename="cppchecklibrarydata.cpp" line="43"/>
        <source>line %1: Unhandled element %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="cppchecklibrarydata.cpp" line="48"/>
        <source>line %1: Mandatory attribute &apos;%2&apos; missing in &apos;%3&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="280"/>
        <source> (Not found)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="76"/>
        <source>Thin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="78"/>
        <source>ExtraLight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="80"/>
        <source>Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="82"/>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="84"/>
        <source>Medium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="86"/>
        <source>DemiBold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="88"/>
        <source>Bold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="90"/>
        <source>ExtraBold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstylecontrols.cpp" line="92"/>
        <source>Black</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="81"/>
        <source>Editor Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="84"/>
        <source>Editor Background Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="87"/>
        <source>Highlight Background Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="90"/>
        <source>Line Number Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="93"/>
        <source>Line Number Background Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="96"/>
        <source>Keyword Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="99"/>
        <source>Keyword Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="102"/>
        <source>Class Foreground Color</source>
        <oldsource>Class ForegroundColor</oldsource>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="105"/>
        <source>Class Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="108"/>
        <source>Quote Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="111"/>
        <source>Quote Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="114"/>
        <source>Comment Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="117"/>
        <source>Comment Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="120"/>
        <source>Symbol Foreground Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="123"/>
        <source>Symbol Background Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="126"/>
        <source>Symbol Font Weight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="146"/>
        <source>Set to Default Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="codeeditstyledialog.cpp" line="148"/>
        <source>Set to Default Dark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="132"/>
        <source>File</source>
        <translation type="unfinished">Bestand</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="133"/>
        <source>Line</source>
        <translation type="unfinished">Regel</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="134"/>
        <source>Severity</source>
        <translation type="unfinished">Ernst</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="135"/>
        <source>Classification</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="136"/>
        <source>Level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="137"/>
        <source>Inconclusive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="138"/>
        <source>Summary</source>
        <translation type="unfinished">Overzicht</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="139"/>
        <source>Id</source>
        <translation type="unfinished">Id</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="140"/>
        <source>Guideline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="141"/>
        <source>Rule</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="142"/>
        <source>Since date</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="143"/>
        <source>Tags</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="144"/>
        <source>CWE</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QPlatformTheme</name>
    <message>
        <location filename="translationhandler.cpp" line="37"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="38"/>
        <source>Cancel</source>
        <translation>Annuleer</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="39"/>
        <source>Close</source>
        <translation>Sluit</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="40"/>
        <source>Save</source>
        <translation>Opslaan</translation>
    </message>
</context>
<context>
    <name>ResultsTree</name>
    <message>
        <source>File</source>
        <translation type="vanished">Bestand</translation>
    </message>
    <message>
        <source>Severity</source>
        <translation type="vanished">Ernst</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="vanished">Regel</translation>
    </message>
    <message>
        <source>Summary</source>
        <translation type="vanished">Overzicht</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="260"/>
        <source>Undefined file</source>
        <translation>Niet gedefinieerd bestand</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="752"/>
        <source>Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="945"/>
        <source>Could not find file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="949"/>
        <source>Please select the folder &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="950"/>
        <source>Select Directory &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="952"/>
        <source>Please select the directory where file is located.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="460"/>
        <source>debug</source>
        <translation></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="386"/>
        <source>note</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="751"/>
        <source>Recheck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="753"/>
        <source>Hide</source>
        <translation>Verberg</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="754"/>
        <source>Hide all with id</source>
        <translation>Verberg alles met id</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="773"/>
        <source>Suppress selected id(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="755"/>
        <source>Open containing folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="463"/>
        <source>internal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="794"/>
        <source>Tag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="796"/>
        <source>No tag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="827"/>
        <location filename="resultstree.cpp" line="841"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="828"/>
        <source>No editor application configured.

Configure the editor application for Cppcheck in preferences/Applications.</source>
        <oldsource>Configure the text file viewer program in Cppcheck preferences/Applications.</oldsource>
        <translation>Er is geen bewerker toepassing geconfigureerd.

Configureer de bewerker toepassing voor cppcheck in voorkeuren/Applicaties.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="842"/>
        <source>No default editor application selected.

Please select the default editor application in preferences/Applications.</source>
        <translation>Geen standaard bewerker geselecteerd.
Selecteer de standaard bewerker in voorkeuren/Applicaties.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="868"/>
        <source>Could not find the file!</source>
        <translation>Kon het bestand niet vinden!</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="931"/>
        <source>Could not start %1

Please check the application path and parameters are correct.</source>
        <translation>Kon applicatie %1 niet starten

Gelieve te controleren of de het pad en de parameters correct zijn.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="953"/>
        <source>Select Directory</source>
        <translation>Selecteer map</translation>
    </message>
    <message>
        <source>Id</source>
        <translation type="vanished">Id</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="442"/>
        <source>style</source>
        <translation>Stijlfouten</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="445"/>
        <source>error</source>
        <translation>Fouten</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="448"/>
        <source>warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="451"/>
        <source>performance</source>
        <translation>Presentatie</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="454"/>
        <source>portability</source>
        <translation>Portabiliteit</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="457"/>
        <source>information</source>
        <translation>Informatie</translation>
    </message>
</context>
<context>
    <name>ResultsView</name>
    <message>
        <location filename="resultsview.cpp" line="252"/>
        <source>Print Report</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="271"/>
        <source>No errors found, nothing to print.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="323"/>
        <source>%p% (%1 of %2 files checked)</source>
        <translation>%p% (%1 van %2 bestanden gecontroleerd)</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="347"/>
        <location filename="resultsview.cpp" line="358"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="348"/>
        <source>No errors found.</source>
        <translation>Geen fouten gevonden.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="355"/>
        <source>Errors were found, but they are configured to be hidden.
To toggle what kind of errors are shown, open view menu.</source>
        <translation>Fouten werden gevonden, maar volgens de configuratie zijn deze verborgen.
Gebruik het uitzicht menu om te selecteren welke fouten getoond worden.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="404"/>
        <location filename="resultsview.cpp" line="423"/>
        <source>Failed to read the report.</source>
        <translation>Kon rapport niet lezen.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="411"/>
        <source>XML format version 1 is no longer supported.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="472"/>
        <source>First included by</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="477"/>
        <source>Id</source>
        <translation>Id</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="479"/>
        <source>Bug hunting analysis is incomplete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="553"/>
        <source>Clear Log</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="554"/>
        <source>Copy this Log entry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="555"/>
        <source>Copy complete Log</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="563"/>
        <source>Analysis was stopped</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="577"/>
        <source>There was a critical error with id &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="579"/>
        <source>when checking %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="581"/>
        <source>when checking a file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="582"/>
        <source>Analysis was aborted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="234"/>
        <location filename="resultsview.cpp" line="242"/>
        <source>Failed to save the report.</source>
        <translation>Kon het rapport niet opslaan.</translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="26"/>
        <source>Results</source>
        <translation>Resultaten</translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="60"/>
        <source>Critical errors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="92"/>
        <source>Analysis Log</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="resultsview.ui" line="114"/>
        <source>Warning Details</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScratchPad</name>
    <message>
        <location filename="scratchpad.ui" line="14"/>
        <source>Scratchpad</source>
        <translation>Scratchpad</translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="20"/>
        <source>Copy or write some C/C++ code here:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="37"/>
        <source>Optionally enter a filename (mainly for automatic language detection) and click on &quot;Check&quot;:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="71"/>
        <source>filename</source>
        <translation>bestandsnaam</translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="78"/>
        <source>Check</source>
        <translation>Controleer</translation>
    </message>
</context>
<context>
    <name>Settings</name>
    <message>
        <location filename="settings.ui" line="14"/>
        <source>Preferences</source>
        <translation>Instellingen</translation>
    </message>
    <message>
        <location filename="settings.ui" line="24"/>
        <source>General</source>
        <translation>Algemeen</translation>
    </message>
    <message>
        <location filename="settings.ui" line="202"/>
        <source>Add...</source>
        <translation>Toevoegen...</translation>
    </message>
    <message>
        <location filename="settings.ui" line="41"/>
        <source>Number of threads: </source>
        <translation>Aantal threads: </translation>
    </message>
    <message>
        <location filename="settings.ui" line="85"/>
        <source>Ideal count:</source>
        <translation>Ideale telling:</translation>
    </message>
    <message>
        <location filename="settings.ui" line="114"/>
        <source>Force checking all #ifdef configurations</source>
        <oldsource>Check all #ifdef configurations</oldsource>
        <translation>Controleer alle #ifdef combinaties</translation>
    </message>
    <message>
        <location filename="settings.ui" line="121"/>
        <source>Show full path of files</source>
        <translation>Toon het volledige pad van bestanden</translation>
    </message>
    <message>
        <location filename="settings.ui" line="128"/>
        <source>Show &quot;No errors found&quot; message when no errors found</source>
        <translation>Toon &quot;Geen fouten gevonden&quot; indien geen fouten gevonden werden</translation>
    </message>
    <message>
        <location filename="settings.ui" line="135"/>
        <source>Display error Id in column &quot;Id&quot;</source>
        <translation>Toon fout ld in kolom &quot;Id&quot;</translation>
    </message>
    <message>
        <location filename="settings.ui" line="142"/>
        <source>Enable inline suppressions</source>
        <translation>Schakel inline suppressies in</translation>
    </message>
    <message>
        <location filename="settings.ui" line="149"/>
        <source>Check for inconclusive errors also</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="156"/>
        <source>Show statistics on check completion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="163"/>
        <source>Check for updates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="183"/>
        <source>Show internal warnings in log</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="294"/>
        <source>Addons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="300"/>
        <source>Python binary (leave this empty to use python in the PATH)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="311"/>
        <location filename="settings.ui" line="352"/>
        <location filename="settings.ui" line="397"/>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="330"/>
        <source>MISRA addon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="338"/>
        <source>MISRA rule texts file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="345"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copy/paste the text from Appendix A &amp;quot;Summary of guidelines&amp;quot; from the MISRA C 2012 pdf to a text file.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="378"/>
        <source>Clang</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="384"/>
        <source>Clang path (leave empty to use system PATH)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="407"/>
        <source>Visual Studio headers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="413"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Paths to Visual Studio headers, separated by semicolon &apos;;&apos;.&lt;/p&gt;&lt;p&gt;You can open a Visual Studio command prompt, write &amp;quot;SET INCLUDE&amp;quot;. Then copy/paste the paths.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="443"/>
        <source>Code Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="449"/>
        <source>Code Editor Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="455"/>
        <source>System Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="462"/>
        <source>Default Light Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="469"/>
        <source>Default Dark Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="478"/>
        <source>Custom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settings.ui" line="216"/>
        <source>Remove</source>
        <translation>Verwijder</translation>
    </message>
    <message>
        <location filename="settings.ui" line="191"/>
        <source>Applications</source>
        <translation>Applicaties</translation>
    </message>
    <message>
        <location filename="settings.ui" line="209"/>
        <location filename="settings.ui" line="485"/>
        <source>Edit...</source>
        <translation>Bewerk...</translation>
    </message>
    <message>
        <location filename="settings.ui" line="223"/>
        <source>Set as default</source>
        <translation>Instellen als standaard</translation>
    </message>
    <message>
        <location filename="settings.ui" line="246"/>
        <source>Reports</source>
        <translation>Rapporten</translation>
    </message>
    <message>
        <location filename="settings.ui" line="252"/>
        <source>Save all errors when creating report</source>
        <translation>Alle fouten opslaan</translation>
    </message>
    <message>
        <location filename="settings.ui" line="259"/>
        <source>Save full path to files in reports</source>
        <translation>Volledig pad opslaan</translation>
    </message>
    <message>
        <location filename="settings.ui" line="280"/>
        <source>Language</source>
        <translation>Taal</translation>
    </message>
</context>
<context>
    <name>SettingsDialog</name>
    <message>
        <location filename="settingsdialog.cpp" line="126"/>
        <source>N/A</source>
        <translation></translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="237"/>
        <source>The executable file &quot;%1&quot; is not available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="248"/>
        <source>Add a new application</source>
        <translation>Nieuwe applicatie toevoegen</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="278"/>
        <source>Modify an application</source>
        <translation>Applicatie wijzigen</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="283"/>
        <source> [Default]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="308"/>
        <source>[Default]</source>
        <translation>[Standaard]</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="363"/>
        <source>Select python binary</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="370"/>
        <source>Select MISRA File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="401"/>
        <source>Select clang path</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>StatsDialog</name>
    <message>
        <location filename="statsdialog.ui" line="14"/>
        <location filename="statsdialog.ui" line="248"/>
        <location filename="statsdialog.cpp" line="187"/>
        <location filename="statsdialog.cpp" line="234"/>
        <source>Statistics</source>
        <translation>Statistieken</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="27"/>
        <location filename="statsdialog.cpp" line="225"/>
        <source>Project</source>
        <translation>Project</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="33"/>
        <source>Project:</source>
        <translation>Project:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="53"/>
        <source>Paths:</source>
        <translation>Paden:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="85"/>
        <source>Include paths:</source>
        <translation>Bevat paden:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="108"/>
        <source>Defines:</source>
        <translation>Omschrijft:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="131"/>
        <source>Undefines:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="165"/>
        <location filename="statsdialog.cpp" line="230"/>
        <source>Previous Scan</source>
        <translation>Vorige scan</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="171"/>
        <source>Path Selected:</source>
        <translation>Pad Geselekteerd:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="181"/>
        <source>Number of Files Scanned:</source>
        <translation>Aantal bestanden gescanned:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="201"/>
        <source>Scan Duration:</source>
        <translation>Scan tijd:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="254"/>
        <source>Errors:</source>
        <translation>Fouten:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="271"/>
        <source>Warnings:</source>
        <translation>Waarschuwingen:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="288"/>
        <source>Stylistic warnings:</source>
        <translation>Stilistisch waarschuwingen:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="305"/>
        <source>Portability warnings:</source>
        <translation>Portabiliteit waarschuwingen:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="322"/>
        <source>Performance issues:</source>
        <translation>Presentatie problemen:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="339"/>
        <source>Information messages:</source>
        <translation>Informatie bericht:</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="356"/>
        <source>Active checkers:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="374"/>
        <source>Checkers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="399"/>
        <source>History</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="405"/>
        <source>File:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="443"/>
        <source>Copy to Clipboard</source>
        <translation>Kopieer naar Clipbord</translation>
    </message>
    <message>
        <location filename="statsdialog.ui" line="450"/>
        <source>Pdf Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="163"/>
        <source>1 day</source>
        <translation>1 dag</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="163"/>
        <source>%1 days</source>
        <translation>%1 dagen</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="165"/>
        <source>1 hour</source>
        <translation>1 uur</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="165"/>
        <source>%1 hours</source>
        <translation>%1 uren</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="167"/>
        <source>1 minute</source>
        <translation>1 minuut</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="167"/>
        <source>%1 minutes</source>
        <translation>%1 minuten</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="169"/>
        <source>1 second</source>
        <translation>1 seconde</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="169"/>
        <source>%1 seconds</source>
        <translation>%1 secondes</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="173"/>
        <source>0.%1 seconds</source>
        <translation>0.%1 secondes</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="175"/>
        <source> and </source>
        <translation> en </translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="202"/>
        <source>Export PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="224"/>
        <source>Project Settings</source>
        <translation>Project instellingen</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="226"/>
        <source>Paths</source>
        <translation>Paden</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="227"/>
        <source>Include paths</source>
        <translation>Bevat paden</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="228"/>
        <source>Defines</source>
        <translation>Omschrijft</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="229"/>
        <source>Undefines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="231"/>
        <source>Path selected</source>
        <translation>Pad Geselekteerd</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="232"/>
        <source>Number of files scanned</source>
        <translation>Aantal bestanden gescanned</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="233"/>
        <source>Scan duration</source>
        <translation>Scan tijd</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="189"/>
        <location filename="statsdialog.cpp" line="235"/>
        <source>Errors</source>
        <translation>Fouten</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="116"/>
        <source>File: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="116"/>
        <source>No cppcheck build dir</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="191"/>
        <location filename="statsdialog.cpp" line="236"/>
        <source>Warnings</source>
        <translation>Waarschuwingen</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="193"/>
        <location filename="statsdialog.cpp" line="237"/>
        <source>Style warnings</source>
        <translation>Stijl waarschuwingen</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="195"/>
        <location filename="statsdialog.cpp" line="238"/>
        <source>Portability warnings</source>
        <translation>Portabiliteit waarschuwingen</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="197"/>
        <location filename="statsdialog.cpp" line="239"/>
        <source>Performance warnings</source>
        <translation>Presentatie waarschuwingen</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="199"/>
        <location filename="statsdialog.cpp" line="240"/>
        <source>Information messages</source>
        <translation>Informatie bericht</translation>
    </message>
</context>
<context>
    <name>ThreadResult</name>
    <message>
        <location filename="threadresult.cpp" line="45"/>
        <source>%1 of %2 files checked</source>
        <translation>%1 van %2 bestanden gecontroleerd</translation>
    </message>
</context>
<context>
    <name>TranslationHandler</name>
    <message>
        <location filename="translationhandler.cpp" line="126"/>
        <source>Failed to change the user interface language:

%1

The user interface language has been reset to English. Open the Preferences-dialog to select any of the available languages.</source>
        <translation>Mislukt om de gebruikers taal te wijzigen:

%1

De gebruikerstaal is gereset naar Engels. Open het dialoogvenster om een van de beschikbare talen te selecteren.</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="132"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
</context>
<context>
    <name>TxtReport</name>
    <message>
        <location filename="txtreport.cpp" line="74"/>
        <source>inconclusive</source>
        <translation>Onduidelijk</translation>
    </message>
</context>
<context>
    <name>toFilterString</name>
    <message>
        <location filename="common.cpp" line="58"/>
        <source>All supported files (%1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="common.cpp" line="63"/>
        <source>All files (%1)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
