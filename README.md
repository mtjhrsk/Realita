Realita
=======

rozšíření pro Chrome, které některé běžné výrazy vkládá do uvozovek

Pôvodná česká verzia - Michal Kašpárek
http://www.finmag.cz/cs/finmag/kaleidoskop/strcte-si-experty-i-krizi-do-uvozovek/

HOW TO PACKAGE
===============
Chrome - modify version in manifest.json, copy skript.js into 'chromium' folder, open unpacked extension in Chrome and package it there

Firefox - modify version in install.rdf, copy skript.js into 'firefox/resources/realita/data', zip the *contents* of 'firefox' folder (i.e. install.rdf etc. is at the root of the zip file, not in firefox.zip>firefox) and rename the .zip into 'Realita.xpi'.