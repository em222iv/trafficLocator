trafficLocator
==============
<h1>Refklention</h1>

<4>Vad finns det för krav du måste anpassa dig efter i de olika API:erna?</h4>

<p>
Materialet som tillhandahålls via API får inte användas på ett sådant sätt att det skulle kunna skada Sveriges Radios oberoende eller trovärdighet.
</p>
<p>
I Google maps måste man ha en API key och tänka på följande:
-Modify your application so that your usage is less than 25 000 map loads per day.
-Enroll for automated billing of excess map loads in the Google APIs Console.
-Purchase a Google Maps API for Work license.
</p>

<p>
Annars kan man få köpa uttökade möjligheter att använda APIet.
</p>

<h4>Hur och hur länga cachar du ditt data för att slippa anropa API:erna i onödan?</h4>

<p>
Jag förvarar data i en JSON-fil. Med phps inbyggda "filemtime" kollar jag hur länge sedan det var filen var ändrad i. överstiger det 5 minuter så görs ett nytt kall.
</p>


<h4>Vad finns det för risker med din applikation?<h/4>
<p>
</p>



<h4>Hur har du tänkt kring säkerheten i din applikation?</h4>
<p>
Jag tänkte att faran kan ligga i mitt kall från SR. så jag har satt en strip_tags innan datat sparas och kan skrivas ut.
Men jag använder mig också av textContent när jag visar data, vilket inte är känsligt mot scripter och liknande. det blir bara en sträng.
</p>


<h4>Hur har du tänkt kring optimeringen i din applikation?</h4>
<p>
Jag har försökt rensa dubbelkod, minimera antalet loopar och krävande funktioner, delat upp kod i olika funktioner för att göra den tydlig.
Jag har också minifierat de ramverk jag använder mig av.
</p>
