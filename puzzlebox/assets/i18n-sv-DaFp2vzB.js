import{t as e}from"./index-DIYwYEVR.js";var t=e({default:()=>n}),n="## Gemensamma kontroller\n\n- **Nytt** ger ett nytt pussel och **Börja om** går tillbaka till början av det här. Med\n  **Ångra** och **Gör om** stegar du bakåt och framåt genom dina drag, och även en\n  omstart kan ångras.\n- **Lös** visar svaret när pusslet erbjuder ett. Det räknas som ett steg som du kan ångra.\n- I de flesta pussel är ett högerklick den andra åtgärden – att markera, flagga eller vrida\n  åt andra hållet. Ett mittenklick, där ett pussel använder ett, är den tredje.\n- **Typ** växlar mellan färdiga storlekar och svårighetsgrader; med **Anpassa…** väljer du\n  själv.\n- **Dela** visar koder som du kan skicka vidare, så att någon annan kan spela exakt det här\n  pusslet.\n\n### Tangentbord (Keyboard)\n\n- **Nytt spel**: `N` · **Ångra**: `U` eller `Ctrl+Z` · **Gör om**: `R` eller `Ctrl+Y`\n- **Lös**: `Ctrl+S` (där det finns). **Den här hjälpen**: `?`, och `Esc` stänger den igen. **Paus**: `Esc`.\n- I de flesta pussel flyttar piltangenterna en markör över spelplanen, `Enter` fungerar som\n  ett vänsterklick på den och `Space` som ett högerklick.\n- I menyerna flyttar piltangenterna från ett kort eller en knapp till nästa, `Enter`\n  väljer och `Esc` går tillbaka.\n- En handkontroll fungerar också: styrkorset flyttar, `A` väljer eller klickar, `X` är\n  högerklicket, `B` går tillbaka, `Start` pausar, `LB` och `RB` ångrar och gör om, och `Y`\n  ger en ledtråd.\n  I pussel där du skriver in siffror tar `RT` dig till knapparna på skärmen och tillbaka.\n",ee=e({default:()=>te}),te=`## På en pekskärm

- **Tryck** för huvudåtgärden och **tryck länge** för den andra. Har ett pussel en tredje
  åtgärd, tryck med **två fingrar**.
- Den första runda knappen i verktygsfältet (en prick i en ruta) byter plats på de två, så
  att den åtgärd du använder mest alltid bara är ett tryck bort; medan de är ombytta lyser
  en liten flagga på den. Ett långt tryck gör då den andra.
- **Nyp isär** på spelplanen för att göra rutorna i ett stort rutnät större, och **dra med
  två fingrar** för att flytta runt. Nyp ihop igen för att se hela pusslet. Under **Paus**
  finns samma två storlekar också som knappar.
- **Paus** innehåller resten av kontrollerna: pusseltyp, nytt pussel, börja om, lös, dela och
  Inställningar för ljud och språk. Klockan står still medan menyn är öppen.
`,ne=e({default:()=>re}),re=`# Svarta lådan

Några kulor ligger gömda i en skuggad låda. Runt lådan löper en ram av laserportar.
Skjut in en laserstråle i lådan från valfri port och se vad som kommer ut: lista ut
utifrån resultaten var kulorna måste ligga, markera dem och låt sedan kontrollera ditt
svar.

En stråle går rakt fram om ingen kula står i vägen:

- En kula rakt framför **absorberar** strålen. Porten visar **H** (en träff).
- En kula snett framför **avleder** strålen 90° bort från kulan. Kulor på båda
  diagonalerna vänder den rakt tillbaka. Avledningar kan följa på varandra, så en stråle
  kan vandra runt innan den kommer ut.
- En stråle som kommer ut genom samma port som den gick in i **reflekteras** och visas
  som **R**. Detsamma gäller en stråle som skulle avledas redan innan den kommit in i
  lådan, eftersom en kula ligger snett intill ingången.
- Annars kommer strålen ut någon annanstans, och de två portarna får samma **tal** (och
  samma färg), så att du ser var varje skott gick in och kom ut.

När du har markerat rätt antal kulor visas en grön knapp i det övre vänstra hörnet.
Klicka på den för att kontrollera. Din placering räknas som rätt om ingen laserstråle
skulle kunna skilja den från datorns – med flera kulor kan mer än en placering bete sig
likadant, och vilken som helst av dem vinner.

En felaktig placering avslutar spelet och visar svaret, så kontrollera bara när du är
säker: kulor du har hittat är svarta, felaktiga markeringar är överkryssade med rött,
missade kulor är röda, varje laserstråle du skjutit som din placering ger fel resultat
för är inringad, och strålar du aldrig sköt som skulle ha skilt de två placeringarna åt
skjuts nu och skrivs i rött. **Ångra** tar dig tillbaka så att du kan fortsätta försöka.
**Lös** ger upp och lägger dit de riktiga kulorna.

## Styrning

Statusraden räknar kulorna du har markerat och laserstrålarna du har skjutit, och efter
en kontroll anger den hur många av dina kulor som var fel och hur många du missade.

### Mus och pekskärm

- **Klicka på en port** för att skjuta en laserstråle därifrån. Klicka på en port som
  redan har skjutits för att tända båda ändarna av den strålen; klicka på den igen, eller
  någon annanstans, för att släcka.
- **Klicka inne i lådan** för att markera en kula där; klicka igen för att ta bort
  markeringen.
- **Högerklicka på en ruta** för att **låsa** den så att du inte ändrar den av misstag;
  högerklicka igen för att låsa upp. Ett högerklick på en port låser eller låser upp hela
  raden eller kolumnen bredvid den.
- **Klicka på hörnknappen** för att få dina markeringar kontrollerade.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör över lådan och dess portar.
- **Enter** fungerar som ett vänsterklick: skjut, markera eller kontrollera när markören
  står på knappen.
- **Space** fungerar som ett högerklick och låser eller låser upp.

## Inställningar

- **Bredd** och **Höjd** på lådan. Varje rad och kolumn har en laserport i båda ändar.
- **Antal kulor**: hur många kulor som är gömda. Ange ett enda tal, eller ett intervall
  som \`3-6\` för att låta datorn välja; då måste du också lista ut antalet, och
  kontrollknappen visas för varje antal markeringar inom intervallet.
`,ie=e({default:()=>ae}),ae=`# Broar

Öar, var och en med ett tal, ligger utspridda över vattnet. Förbind dem med broar så att:

- varje bro går rakt vågrätt eller rakt lodrätt mellan två öar;
- talet på en ö anger exakt hur många broar som ansluter till den;
- två öar får förbindas med parallella broar, men med högst två (gränsen kan ändras
  under **Anpassa…**);
- ingen bro korsar en annan;
- varje ö går att nå från alla andra genom att gå över broar.

Misstag visas i rött: en ö med för många broar, en ö som inte längre kan få tillräckligt
många (dess återstående grannar är fulla, eller de enda vägarna är blockerade av andra
broar eller av dina egna ”ingen bro”-markeringar), och en grupp öar som redan är klar men
avskuren från resten. Om slingor inte är tillåtna blir även broar som bildar en slinga
röda.

## Styrning

**Lös** fyller i lösningen och tar bort alla broar som inte hör dit.

### Mus och pekskärm

- **Dra** från en ö mot en granne för att lägga en bro mellan dem. Du behöver bara dra
  så långt att riktningen blir tydlig; bron fäster vid närmaste ö åt det hållet. Dra igen
  för en andra parallell bro; drar du en gång till när gränsen är nådd tas alla bort.
- **Högerdra** på samma sätt för att anteckna en ”ingen bro här”-markering, eller för att
  sudda ut en.
- **Klicka** på en ö för att markera den som klar. Den blir grå och dess broar låses så
  att du inte ändrar dem av misstag; klicka igen för att låsa upp.
- **Sudda** (suddgummiknappen bredvid Ångra) gör att dragningar tar bort i stället: dra från
  en ö mot en granne för att ta bort alla broar mellan dem, eller ”ingen bro”-markeringen
  där. Tryck på den igen för att gå tillbaka till att lägga broar.
- **Hjälplinjer** visar svaga linjer överallt där en bro skulle kunna gå, och döljer dem
  igen.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör från ö till ö.
- **Enter** följt av en pil lägger en bro åt det hållet; **Space** följt av en pil lägger
  en markering. Två tryck på **Enter** markerar ön som klar.
- **E** motsvarar knappen **Sudda** och **G** knappen **Hjälplinjer**.

## Inställningar

- **Bredd** och **Höjd** på rutnätet, minst 3 vardera.
- **Svårighetsgrad**: _Lätta_ pussel kräver bara att du tittar på en ö i taget – där dess
  återstående broar precis fyller det utrymme som finns kvar, eller där dess tal är för
  stort för att någon granne ska kunna hoppas över. _Medel_-pussel får dig också att
  fundera på enskilda förbindelser: vilken bro måste finnas eftersom ön inte kan bli klar
  utan den, och (när slingor är förbjudna) vilka förbindelser som skulle sluta en slinga.
  _Svåra_ pussel kräver att du tänker ett steg framåt: skulle den här bron göra klar en
  grupp öar som är avskuren från resten, eller lämna någon ö utan någonstans att ta
  vägen? Varje pussel har exakt en lösning.
- **Tillåt slingor**: på som standard. Avstängt måste det färdiga nätet av broar vara ett
  träd – ingen väg av broar får leda tillbaka dit den började – och pusslet skapas så att
  det kan lösas med det i åtanke.
- **Max. antal broar per riktning**: gränsen för parallella broar, normalt 2. Färre är
  lättare.
- **% rutor med ö**: ungefär hur stor del av rutnätet som blir öar. Vissa layouter
  rymmer inte så många, så det här är en övre gräns.
- **Expansionsfaktor**: när kartan växer, hur troligt det är att en ny ö placeras så
  långt bort som möjligt i stället för någonstans närmare. Höga värden ger glesare,
  lättare pussel; låga värden ger trängre.
`,oe=e({default:()=>r}),r=`# Kub

En kropp står på ett rutnät, och några av rutnätets rutor är målade blå – exakt lika
många som kroppen har sidor. När du rullar kroppen tippar den över en kant av sidan den
står på, så att nästa sida kommer ner på grannrutan. Varje gång den landar byter sidan
underst och rutan den landade på färg: landar en omålad sida på en blå ruta följer det
blå med kroppen; landar en blå sida på en omålad ruta lämnas det blå kvar. Pusslet är
löst när alla sidor är blå samtidigt. Statusraden räknar dina rullningar, så försök att
bli klar på så få som möjligt.

Den klassiska varianten rullar en kub på ett kvadratiskt rutnät. På ett triangulärt
rutnät kan du i stället rulla en tetraeder, en oktaeder eller en ikosaeder. Tänk på att
varje sida av en rullande tetraeder bara någonsin kan nå en fjärdedel av rutorna, och att
en oktaeders sidor växlar mellan uppåt- och nedåtpekande trianglar – de blå rutorna
placeras alltid så att pusslet går att lösa.

## Styrning

Det finns ingen **Lös**-knapp i det här pusslet. När alla sidor är blå kan du fortsätta
rulla kroppen runt utan att förstöra något.

### Mus och pekskärm

- **Klicka** var som helst för att rulla kroppen en ruta i riktning mot muspekaren. På ett
  kvadratiskt rutnät betyder det upp, ner, vänster eller höger; på ett triangulärt rutnät
  har den aktuella triangeln tre grannar att välja mellan. Ett klick når alla grannar
  kroppen har, så det räcker för att spela på alla rutnät.

### Tangentbord (Keyboard)

- **Piltangenterna** rullar kroppen i de fyra huvudriktningarna. På ett triangulärt
  rutnät har en triangel bara en granne antingen ovanför eller under sig, så den andra
  lodräta tangenten gör ingenting.
- **Home**, **Page Up**, **End** och **Page Down** (eller hörntangenterna på den numeriska
  knappsatsen, 7, 9, 1 och 3) rullar diagonalt på de triangulära rutnäten och väljer den
  kant som ligger närmast åt det hållet.

## Inställningar

- **Typ av kropp**: tetraeder, kub, oktaeder eller ikosaeder. Kuben använder ett
  kvadratiskt rutnät; de andra använder ett rutnät av trianglar.
- **Bredd / överkant** och **Höjd / nederkant**: för kuben storleken på det kvadratiska
  rutnätet. För de triangulära rutnäten är det längden på över- och nederkanten av en
  sexkantig arena (sätts en av dem till noll blir det en vanlig triangel). Rutnätet måste
  ha plats för alla blå rutor plus en tom startruta.
`,i=e({default:()=>a}),a=`# Dominosa

En hel uppsättning dominobrickor – en för varje talpar från 0 upp till det högsta, med
dubbletter – lades ut så att de fyllde en rektangel. Sedan skrevs talen av och brickorna
togs bort. Din uppgift är att lista ut var de låg: dela in rutnätet i par av intilliggande
rutor så att varje dominobricka i uppsättningen används exakt en gång.

En dominobricka som läggs där dess talpar redan förekommer någon annanstans visas i rött,
liksom en tom ruta som ingen dominobricka längre kan nå.

## Styrning

Pusslet är löst när varje ruta är täckt och ingen dominobricka är röd. **Lös** lägger ut
alla dominobrickor i lösningen och rensar bort det du själv har lagt.

### Mus och pekskärm

- **Klicka** på gränsen mellan två intilliggande tal (eller i den halva av en ruta som
  ligger närmast gränsen) för att lägga en dominobricka över dem. Klicka på samma gräns
  igen för att ta bort den. En dominobricka som läggs över en del av en annan ersätter
  den.
- **Högerklicka** på en gräns för att anteckna en linje över den, som en påminnelse om att
  de här två talen **inte** är en dominobricka. Högerklicka igen för att sudda ut linjen.
  Linjer kan inte ritas mot en dominobricka, och när du lägger en dominobricka suddas
  alla linjer som rör den ut.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör runt rutnätet och stannar på rutornas mitt och på
  gränserna mellan rutor. På en gräns ritar markören konturen av den dominobricka den
  skulle lägga.
- **Enter** lägger eller tar bort den dominobrickan och **Space** ritar eller suddar ut en
  linje där.

## Inställningar

- **Högsta tal på dominobrickorna**: brickorna går från 0-0 upp till N-N, och rutnätet
  är (N+2) rutor brett och (N+1) högt, så ett maximum på 6 ger ett rutnät på 8×7.
- **Svårighetsgrad**: hur mycket resonerande pusslet kräver. **Mycket lätt** har bara någonsin en
  dominobricka med en enda möjlig plats, eller en ruta som bara en dominobricka kan täcka.
  **Lätt** lägger till två argument till: varje sätt att täcka den här rutan använder samma
  dominobricka, så den brickan kan inte ligga någon annanstans; och varje plats där den här
  brickan skulle kunna ligga utesluter den platsen. **Svår** lägger till räkning (en dominobricka
  som skulle skära av ett udda antal rutor är omöjlig; en grupp rutor med samma tal kan göra
  anspråk på de brickor de delar), och **Extrem** kräver att du följer konsekvenserna av en
  placering tills de krockar. Alla dessa har exakt en lösning. **Tvetydiga** pussel kontrolleras
  inte alls: de kan ha flera lösningar och kan kräva gissningar – att hitta vilken täckning som
  helst vinner.
`,o=e({default:()=>s}),s=`# Femton

Det klassiska glidpusslet. Rutnätet är fyllt med numrerade brickor och en tom plats.
Skjut in brickor i luckan tills talen står i ordning från vänster till höger och uppifrån
och ner, med luckan i det nedre högra hörnet.

## Styrning

**Lös** hoppar direkt till den färdiga ordningen. Den visar inte hur du tar dig dit, men
den är en praktisk återställning när du övar in standarddrag.

### Mus och pekskärm

- **Klicka** på valfri bricka i samma rad eller kolumn som luckan för att skjuta den (och
  allt mellan den och luckan) på plats.

### Tangentbord (Keyboard)

- **Piltangenterna** skjuter en bricka in i luckan i pilens riktning: **pil upp** flyttar brickan
  under luckan upp i den.

## Inställningar

- **Bredd** och **Höjd** på rutnätet (standard är det klassiska 4×4).
`,c=e({default:()=>l}),l=`# Fyllning

Några rutor i rutnätet har redan en siffra; resten är tomma. Skriv en siffra i varje tom
ruta så att varje sammanhängande grupp av lika siffror täcker exakt så många rutor som
siffran säger: varje 3 hör till en grupp av tre 3:or, varje 1 står ensam, och så vidare.
Rutor räknas bara som sammanhängande via sidorna, inte via hörnen. Det följer att ingen
ruta innehåller 0, att två 1:or aldrig står sida vid sida och att ingen grupp är större än
nio rutor. En given siffra behöver inte vara början på sin grupp: flera givna 4:or kan
hamna i samma grupp, och en grupp kan helt sakna given siffra.

Tjocka linjer visas mellan rutor med olika siffror, och runt varje grupp som redan har
rätt storlek (eller är för stor). En siffra blir röd när dess grupp har vuxit sig större
än siffran, eller när den har murats in utan utrymme kvar att nå sin storlek. Det här är
pusslet som Nikoli ger ut som Fillomino.

## Styrning

Givna siffror är skrivna med bläck och kan inte ändras; dina egna siffror är blå. **Lös**
fyller i lösningen.

### Mus och pekskärm

- **Klicka** på en tom ruta för att välja den, och använd sedan knapparna på
  skärmen för att skriva in en siffra. **⌫** på knappsatsen tömmer det valda igen.
- **Dra** över flera rutor för att välja alla, så att en siffra fyller alla valda rutor på
  en gång.
- **Högerklicka** för att lägga till en ruta i urvalet utan att börja om; ett andra
  högerklick på en vald ruta tar bort den ur urvalet igen.
- **Fyll** (knappen bredvid Ångra) sprider en siffra: dra från en ruta som har en siffra
  över rutorna runt omkring, så får alla den siffran när du släpper, utan att du behöver
  knappsatsen. Klick och drag som börjar på en tom ruta väljer fortfarande rutor. Tryck på
  den igen för att gå tillbaka till att välja.

### Tangentbord (Keyboard)

- När en eller flera rutor är valda **skriver du en siffra** för att fylla i den i alla.
  Siffran \`0\`, eller **Backspace**, tömmer dem igen.
- **Piltangenterna** flyttar en tangentbordsmarkör, och en siffra du skriver fyller rutan
  under den.
- **Space** eller **Enter** lägger till eller tar bort rutan under markören ur urvalet, så
  att flera rutor kan fyllas med ett enda tangenttryck.
- **F** motsvarar knappen **Fyll**.

## Inställningar

- **Bredd** och **Höjd**: rutnätets storlek. Grupper är aldrig större än den längre sidan
  (eller 9), så små rutnät använder bara små siffror.
`,u=e({default:()=>d}),d=`# Vänd

Ett rutnät av rutor, några tända och några släckta. Målet är att tända alla på en gång.
När du trycker på en ruta växlar den mellan tänd och släckt, men den vänder också några
av sina grannar: det lilla diagrammet på varje ruta visar exakt vilka. Med standardformen
**Kors** vänder varje tryck rutan och dess fyra grannar rakt ovanför, under och vid
sidorna; med **Slumpmässig** form har varje ruta sitt eget oregelbundna mönster, så
pusslet spelar olika varje gång.

Eftersom två tryck på samma ruta tar ut varandra, och ordningen på trycken aldrig spelar
någon roll, är en lösning bara en mängd rutor att trycka på en gång var.

## Styrning

Statusraden räknar dina tryck. **Lös** tänder hela spelplanen och ramar in de rutor den
tryckte på för att komma dit med rött. Om du fortsätter att trycka på rutor efteråt visar
de röda ramarna vilka rutor som fortfarande behöver ett tryck för att återgå till det
lösta läget.

### Mus och pekskärm

- **Klicka** på en ruta för att trycka på den.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör runt rutnätet; **Enter** eller **Space** trycker på
  rutan under markören.

## Inställningar

- **Bredd** och **Höjd** på rutnätet, från 2 upp till 10 rutor per sida.
- **Formtyp**: _Kors_ vänder varje ruta tillsammans med dess raka grannar; _Slumpmässig_
  ger varje ruta en slumpmässigt framvuxen form inom 3×3-blocket runt den.
`,f=e({default:()=>p}),p=`# Översvämning

Rutnätet är ett lapptäcke av slumpmässigt färgade rutor. Du styr rutan i det övre vänstra
hörnet tillsammans med alla rutor som är förbundna med den via en väg av samma färg.
Varje drag målar om hela det sammanhängande området i en färg du väljer, så att alla
angränsande rutor med den färgen också blir en del av ditt område. Fortsätt tills hela
rutnätet har en enda färg.

Haken är draggränsen. Innan du börjar löser spelet rutnätet själv och ger dig sitt eget
antal drag plus några extra; förbrukar du gränsen innan rutnätet är enfärgat är omgången
förlorad. Du kan fortfarande fortsätta fylla efteråt för att se rutnätet klart, men det
räknas inte längre som en vinst.

## Styrning

Statusraden visar hur många drag du har använt av gränsen. **Lös** låter lösaren göra
klart rutnätet åt dig; det räknas som automatiskt löst och inte som din egen vinst.

### Mus och pekskärm

- **Klicka** på valfri ruta vars färg skiljer sig från ditt område för att måla om området
  i den färgen. Ett klick på en ruta som redan har samma färg gör ingenting och kostar
  inget drag.
- **Tips** spelar lösarens nästa färg åt dig, som ett vanligt drag du kan ångra. Några få
  tips gör att vinsten, och dess polett, fortfarande är din.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör runt rutnätet; **Enter** eller **Space** målar om
  området i färgen under markören.

## Inställningar

- **Bredd** och **Höjd** på rutnätet, upp till 32 rutor per sida.
- **Färger**: hur många färger rutnätet använder, från 3 till 10. Färre färger ger färre
  val och ett lättare spel.
- **Tillåtna extra drag**: antalet extra drag som läggs till lösarens egen lösningslängd
  för att bilda draggränsen. Med 0 måste du vara minst lika effektiv som lösaren; den är
  bra men inte perfekt, så det går att slå dess antal.
`,m=e({default:()=>h}),h=`# Galaxer

Rutnätet är bestrött med punkter, som kan sitta mitt i en ruta, på en linje mellan två
rutor eller i ett hörn där fyra rutor möts. Rita väggar längs rutnätets linjer för att
dela in rutnätet i områden så att varje område innehåller exakt en punkt, och så att den
punkten är områdets symmetricentrum: vrider du området 180° kring punkten måste det
hamna exakt på sig självt. Varje ruta måste till slut höra till något område, så inget
område får vara utan punkt.

Pusslen skapas slumpmässigt med en entydig lösning. Pusslet är Nikolis ”Tentai Show”,
även känt som Spiral Galaxies.

## Styrning

Ett område som är slutet och korrekt – en punkt, i sitt symmetricentrum, inga lösa väggar
inuti – skuggas. En punkt blir röd när en vägg går genom den, eller när den är den enda
punkten i ett slutet område som inte är symmetriskt kring den; ett slutet område utan
någon punkt alls blir streckat. Pusslet är löst när varje ruta är skuggad. **Lös** ritar
hela lösningen.

### Mus och pekskärm

- **Klicka** på en linje i rutnätet för att rita en vägg där, eller klicka på en vägg för
  att ta bort den.
- **Dra från en punkt** in i en ruta för att lämna en liten pil där som pekar tillbaka mot
  punkten, som en påminnelse om att rutan hör till den punktens galax.
- **Högerdra** en befintlig pil för att flytta den. Släpp den tillbaka på sin punkt, eller
  dra den utanför rutnätet, för att slänga den; släpps den på en ruta som redan har en
  pil tar den den pilens plats.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör över rutor, linjer och hörn.
- **Enter** på en linje ritar eller tar bort dess vägg; **Enter** på en punkt plockar upp
  en pil, som följer markören tills du trycker på **Enter** igen för att släppa den.

## Inställningar

- **Bredd** och **Höjd** på rutnätet, minst 3 vardera. De färdiga storlekarna går från
  7×7 till 15×15.
- **Svårighetsgrad** – på _Medel_ kan pusslen lösas steg för steg utifrån det som symmetriregeln
  tvingar fram; på _Extrem_ kan du behöva pröva ett antagande och se vart det leder.
`,g=e({default:()=>_}),_=`# Gissa

Datorn har gömt en rad färgade pinnar bakom skärmen längst upp på spelplanen. Din uppgift
är att återskapa den exakt, med hjälp av enbart markeringarna du får för varje gissning:
en **svart** pinne för varje pinne med rätt färg på rätt plats, och en **ihålig** pinne
för varje ytterligare pinne vars färg finns någon annanstans i den dolda raden.
Markeringarna säger _hur många_ pinnar som var rätt, inte _vilka_. Hitta raden innan
gissningarna tar slut, så lyfts skärmen; tar de slut lyfts den ändå, så att du ser vad
du missade.

Det här är spelet som Hasbro säljer som _Mastermind_: sex färger, fyra pinnar och tio
gissningar. Alla inställningar kan ändras.

## Styrning

**Lös** lyfter skärmen och visar svaret; det avslutar spelet precis som när gissningarna
tar slut.

### Mus och pekskärm

- **Klicka** på en färg i facket till vänster för att välja den (ringen visar vilken), och
  **klicka sedan på en plats** i den aktuella raden för att sätta en pinne i den färgen
  där. Ett klick på en pinne i en tidigare gissning väljer också dess färg.
- **Dra** en pinne från facket, från en tidigare gissning eller från den aktuella raden
  till en plats. Drar du en pinne ut ur den aktuella raden och släpper den någon
  annanstans tas den bort.
- **Högerklicka** på en plats för att tömma den.
- När raden är full tänds det lilla markeringsfältet till höger om den: **klicka på det**
  för att lämna in gissningen.
- **Mittenklicka** på en plats för att _behålla_ den pinnen: en behållen pinne förs över
  till nästa gissning efter markeringen, så att du slipper bygga upp de pinnar du redan
  litar på igen. Gör samma sak igen för att släppa pinnen.
- **Behåll** (knappen bredvid Ångra) gör samma sak med ett vanligt klick: medan den är på
  behåller eller släpper ett klick på en plats i den aktuella raden dess pinne i stället för
  att sätta en färg. Klicka i facket för att byta färg som vanligt; tryck på **Behåll** igen
  för att gå tillbaka till att sätta pinnar.
- **Bokstäver** i pausmenyn skriver en bokstav på varje pinne, ifall några av färgerna ser lika
  ut för dig, och tar bort dem igen.

### Tangentbord (Keyboard)

- **Piltangenterna**: upp och ner väljer en färg i facket, vänster och höger flyttar en
  markör längs den aktuella raden och, när raden är full, till markeringsfältet.
- **Enter** eller **Space** sätter den valda färgen på platsen under markören, eller
  lämnar in gissningen när markören står på markeringsfältet.
- **Backspace** eller \`D\` tömmer platsen under markören.
- \`H\` behåller eller släpper pinnen under markören.
- \`K\` motsvarar knappen **Behåll** och \`L\` knappen **Bokstäver**.

## Inställningar

- **Färger**: hur många olika färger den dolda raden väljs från, från 2 till 10. Fler
  färger gör raden svårare att ringa in.
- **Pinnar per gissning**: längden på den dolda raden.
- **Gissningar**: hur många försök du får.
- **Tillåt tomma platser**: låter dig lämna platser tomma i en gissning. En tom plats kan
  aldrig vara en träff, så det blir lättare att söka efter färger. Den dolda raden har
  själv aldrig tomma platser.
- **Tillåt dubbletter**: låter den dolda raden (och dina gissningar) använda en färg mer
  än en gång. Stängs det av minskar antalet möjliga rader avsevärt.
`,v=e({default:()=>y}),y=`# Tröghet

Du är en kula på ett rutnät fullt av hinder, och du vill ha varje ädelsten på spelplanen.
Haken ligger i namnet: när kulan väl börjar rulla stannar den inte förrän något stoppar
den. Den rullar rakt igenom ädelstenar (och samlar in dem på vägen) och tomma rutor
likaså, och den stannar bara när nästa ruta är en vägg eller när den hamnar på ett
stopp. Diagonala drag tar sig mellan två väggar som bara möts i ett hörn. Att rulla in på
en mina är dödligt, även om samma drag samlade in allra sista ädelstenen.

Varje pussel skapas så att alla ädelstenar går att samla in från startrutan, men inget
hindrar dig från att rulla in i ett hörn av spelplanen där någon ädelsten inte längre
går att nå. Det finns inget straff för att dö eller fastna, utöver en dödsräknare på
statusraden: ångra bara och prova en annan väg.

## Styrning

**Ångra** efter att du har träffat en mina för att fortsätta från före det ödesdigra
draget. **Lös** räknar ut en väg från där du står som samlar in alla återstående
ädelstenar och rullar sedan kulan längs den åt dig; Ångra tar tillbaka hela vägen på en
gång.

### Mus och pekskärm

- **Klicka** på en ruta så ger sig kulan av i den riktning rutan ligger i förhållande
  till kulan, avrundat till närmaste av de åtta väderstrecken – diagonaler inräknade.
  Ett klick i marginalen utanför rutnätet fungerar också, vilket är praktiskt när kulan
  ligger vid en kant.

### Tangentbord (Keyboard)

- **Piltangenterna** rullar kulan uppåt, nedåt, åt vänster eller åt höger.
- **Home**, **Page Up**, **End** och **Page Down** rullar den diagonalt (upp till
  vänster, upp till höger, ned till vänster, ned till höger). Det numeriska tangentbordet
  fungerar som det ser ut: 8 är uppåt, 3 är ned till höger och så vidare; sifferraden gör
  samma sak.

## Inställningar

- **Bredd** och **höjd** på rutnätet. Ungefär en femtedel av rutorna är väggar, en
  femtedel stopp, en femtedel minor och en femtedel ädelstenar.
`,b=e({default:()=>x}),x=`# Keen

Fyll rutnätet med siffror från 1 upp till dess storlek så att varje rad och varje kolumn
innehåller varje siffra exakt en gång. Rutnätet är dessutom indelat i ”burar” med kraftig
kontur, och var och en har en liten ledtråd i rutan längst upp till vänster: ett resultat
och ett räknetecken. Siffrorna i buren måste ge det resultatet med det räknesättet:

- \`7+\` betyder att siffrorna i buren blir 7 tillsammans.
- \`12×\` betyder att deras produkt är 12.
- \`2−\` står alltid på en bur med två rutor och betyder att den ena siffran är 2 större
  än den andra (åt vilket håll som helst).
- \`3÷\` står likaså på två rutor och betyder att den ena siffran är 3 gånger den andra.

Till skillnad från Solos Killer-läge _får_ en bur innehålla samma siffra två gånger, så
länge de två inte står i samma rad eller kolumn. Inga siffror är givna; ledtrådarna är
allt du får, och varje pussel har exakt en lösning. Det här är pusslet som ges ut som
KenKen.

## Styrning

En siffra som förekommer två gånger i sin rad eller kolumn blir röd, och det blir också
ledtråden för en bur som är helt ifylld men inte ger sitt resultat. **Lös** fyller i
lösningen.

### Mus och pekskärm

- **Klicka** på en ruta för att välja den och använd sedan knappsatsen på skärmen för att skriva
  in en siffra. Ett klick till på den valda rutan avmarkerar den.
- **⌫** på knappsatsen tömmer den valda rutan igen, och **✎** låser fast
  **anteckningar**: det du väljer hamnar då som en liten anteckning, och samma siffra en
  gång till suddar ut den. Anteckningar finns bara där för att hjälpa dig att tänka; när
  du fyller i en siffra försvinner de.
- **Högerklicka** på en tom ruta för att direkt välja den för anteckningar.
- **Kandidater** i pausmenyn fyller varje tom ruta med en fullständig uppsättning
  anteckningar.
- **Framhäv** (förstoringsglaset bredvid Ångra) framhäver alla rutor som har samma siffra
  som rutan du senast klickade på, och visar den siffran i fetstil bland anteckningarna.
  Tryck på den igen för att stänga av.

### Tangentbord (Keyboard)

- **Skriv en siffra** för att fylla i den valda rutan, eller för att anteckna den där om
  rutan valdes för anteckningar.
- **Space** eller **Backspace** tömmer den valda rutan (dess siffra eller alla dess
  anteckningar).
- **Piltangenterna** flyttar en markör, och siffror du skriver hamnar i rutan under den.
- **Enter** växlar markören mellan vanlig inmatning och anteckningar.
- **M** är knappen **Kandidater** och **L** knappen **Framhäv**.

## Inställningar

- **Rutnätets storlek**: från 3 till 9. Siffror över 9 skulle bli otympliga, så 9 är
  gränsen.
- **Svårighetsgrad**: den svåraste sortens slutledning pusslet kräver. _Lätt_ kräver bara att du
  räknar ut vilka siffror som över huvud taget kan finnas i en bur; _Medel_ kräver att du håller
  reda på vilken ruta i en bur varje siffra kan hamna i; _Svår_ lägger till slutledningar över
  flera burar (siffror som en bur måste placera i en rad kan inte finnas någon annanstans i den)
  och grupper av rutor som äger en grupp siffror; _Expert_ lägger till tvingande kedjor; och
  _Extrem_ går inte att lösa utan att gissa och backa. Svårare pussel tar längre tid att skapa,
  och 3×3-rutnät går aldrig över Medel.
- **Bara multiplikation**: varje ledtråd är en produkt, vilket tar bort de enkla
  dominoburarna och ger ett ganska annorlunda pussel.
`,S=e({default:()=>C}),C=`# Lys upp

Ett rutnät av vita och svarta rutor. Placera glödlampor på vita rutor så att varje vit
ruta är upplyst. En lampa lyser upp sin egen ruta och lyser längs sin rad och kolumn
tills en svart ruta eller kanten kommer i vägen. Tre saker måste gälla när du är klar:

- varje vit ruta är upplyst;
- ingen lampa lyses upp av en annan lampa, alltså ser inga två lampor varandra längs en
  rad eller kolumn;
- en svart ruta med ett tal har exakt så många lampor i rutorna direkt ovanför, under,
  till vänster och till höger om sig. Svarta rutor utan tal kan ha hur många lampor
  bredvid sig som helst.

Upplysta rutor färgas gula. Lampor som lyser på varandra blir röda, och det blir också ett
tal som inte längre kan uppfyllas: det har redan för många lampor bredvid sig, eller så
finns det inte längre plats för tillräckligt många.

## Styrning

Pusslet är löst när hela rutnätet lyser och inget visas i rött. **Tips** placerar en
enda lampa – eller tar bort en som lösningen inte har – och lämnar resten åt dig; pusslet
fortsätter, och med några få tips är vinsten och dess polett fortfarande din. **Lös**
fyller i lamporna för en hel lösning och låter alla kryss du har ritat ligga kvar.

### Mus och pekskärm

- **Klicka** på en vit ruta för att placera en lampa där, och en gång till för att ta
  bort den.
- **Högerklicka** på en vit ruta för att anteckna ett kryss som betyder ”här kan ingen
  lampa stå”; högerklicka igen för att sudda ut det. En kryssad ruta tar inte emot någon
  lampa förrän krysset är borta, och en ruta med en lampa kan inte kryssas.
- **Kryss** (kryssknappen bredvid Ångra) gör att ett vanligt klick antecknar eller suddar
  ett kryss i stället för en lampa, för när du utesluter många rutor på en gång. Tryck på
  den igen för att gå tillbaka till lampor.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör runt rutnätet.
- **Enter** placerar eller tar bort en lampa under markören, och **Space** (eller **I**)
  sätter eller tar bort ett kryss där.
- **X** är knappen **Kryss**.

## Inställningar

- **Bredd** och **höjd** på rutnätet.
- **% svarta rutor**: ungefär hur stor del av rutnätet som är svart. Det är en
  riktlinje, inget löfte: om inget pussel kan skapas med den tätheten använder
  generatorn några fler svarta rutor.
- **Symmetri**: mönstret som de svarta rutorna följer – ingen, en spegling eller rotation
  av två halvor, eller en fyrvägs spegling eller rotation. Fyrvägs rotation kräver ett
  kvadratiskt rutnät.
- **Svårighetsgrad**: _Lätt_ pussel löses med slutledningar om en ruta i taget, om vilka rutor
  som måste eller inte kan ha en lampa. _Medel_ kräver att du väger grupper av rutor mot varandra
  (”en av de här tre måste vara en lampa, och det utesluter den här”). _Svår_ pussel kan kräva
  att du provar en lampa någonstans och följer konsekvenserna tills något går fel. Varje pussel
  har exakt en lösning.
`,w=e({default:()=>T}),T=`# Slingor

Ett rutnät av punkter där några av utrymmena mellan dem har ett tal. Rita en enda sluten
slinga längs de svaga linjerna mellan punkterna så att:

- varje utrymme med ett tal har exakt så många av sina sidor på slingan;
- slingan aldrig korsar eller nuddar sig själv – varje punkt har antingen två linjer eller
  ingen – och det bara finns en slinga, utan lösa ändar eller separata delar.

Den klassiska varianten använder kvadrater, men samma pussel fungerar på trianglar,
sexhörningar och ett dussin märkligare mönster, där talen kan bli betydligt större än 4.

Linjer som bildar en felaktig slinga, eller där tre möts i en punkt, blir röda; ett tal
med för många linjer runt sig, eller för få möjliga sidor kvar, blir också rött. Ett tal
blir grått när det har exakt rätt antal linjer.

## Styrning

**Lös** ritar hela slingan. Pusslet är löst så snart slingan är sluten och varje tal
stämmer; att kryssa över de oanvända kanterna är frivilligt.

### Mus och pekskärm

- **Klicka** på en svag kant för att rita en linje på den; klicka på linjen igen för att
  ta bort den.
- **Högerklicka** på en kant för att kryssa över den och markera att den definitivt inte
  ingår i slingan; högerklicka igen för att ta bort markeringen. Både ett klick och
  ett högerklick tar också bort en markering som gjorts med det andra.
- **Kryss** (kryssknappen bredvid Ångra) gör att ett vanligt klick kryssar över en kant,
  eller tar bort krysset, i stället för att rita en linje. Tryck på den igen för att gå
  tillbaka till att rita linjer.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör från kant till kant; **Enter** ritar eller tar
  bort en linje på kanten under markören och **Space** kryssar över den eller tar bort
  krysset.
- **X** är knappen **Kryss**.

## Inställningar

- **Bredd** och **höjd** på rutnätet, räknat i mönstrets celler. För det kvadratiska
  rutnätet är det helt enkelt antalet rutor på bredden och på höjden; andra mönster
  räknar sina upprepade enheter, så det faktiska antalet ytor varierar.
- **Typ av rutnät**: _Kvadrater_, _Trianglar_ och _Bikaka_ är de regelbundna mönstren.
  _Snubbkvadrat_, _Kairo_, _Stor hexagonal_, _Oktagonal_, _Drakar_, _Blomma_,
  _Dodekagonal_ och _Stor dodekagonal_ blandar former, och de två _Penrose_-mönstren
  upprepas aldrig.
- **Svårighetsgrad**: _Lätt_ pussel kräver bara själva reglerna – att räkna linjerna runt ett
  tal, att komma ihåg att en punkt har två linjer eller ingen och att inte sluta slingan för
  tidigt. _Medel_ lägger till slutledningar om par av kanter som möts i en punkt (högst en, eller
  minst en, i paret är en linje). _Svår_ låter de fakta kedjas från punkt till punkt, som längs
  en diagonal rad av 2:or. _Expert_ håller också reda på kanter som man vet är lika med eller
  motsatta till varandra. Du behöver aldrig gissa; varje pussel har exakt en lösning.
`,E=e({default:()=>D}),D=`# Magneter

En rektangel har lagts med dominobrickor som bara syns som konturer. Varje dominobricka
är antingen en magnet – ena halvan en \`+\`-pol, den andra en \`−\`-pol – eller en tom bricka
utan poler alls. Talen runt kanten anger hur många \`+\`-poler (ovanför kolumnerna och till
vänster om raderna) och hur många \`−\`-poler (under kolumnerna och till höger om raderna)
varje linje innehåller; ett saknat tal betyder att den linjen saknar ledtråd. Fyll i
varje dominobricka så att alla antal stämmer och inga två lika poler någonsin ligger bredvid
varandra: \`+\` får aldrig nudda \`+\` och \`−\` får aldrig nudda \`−\` över en gräns mellan
dominobrickor. Tomma brickor är neutrala och får ligga bredvid vad som helst.

Lika poler som nuddar varandra visas i rött. Ett antal blir rött när det inte längre kan
uppfyllas – redan för många poler, eller för få och ingenstans kvar att lägga fler – och
grått när det stämmer exakt. Pusslet är löst när varje dominobricka är ifylld, varje
antal stämmer och inget är rött.

## Styrning

### Mus och pekskärm

- **Klicka** på en tom halva av en dominobricka för att göra den till \`+\`-polen (den
  andra halvan blir \`−\`). Klicka på samma halva igen för att vända magneten, och en
  tredje gång för att tömma dominobrickan. Ett klick på en tom bricka gör ingenting.
- **Högerklicka** på en tom dominobricka för att markera den som tom bricka. Högerklicka
  igen för att byta ut den mot frågetecken, en anteckning om att dominobrickan definitivt
  är en magnet; ett tredje högerklick tömmer den. Ett högerklick på en magnet gör
  ingenting.
- **Tom** (den skuggade dominobrickan bredvid Ångra) gör att ett vanligt klick gör samma sak
  som ett högerklick: markerar en dominobricka som tom bricka, sedan frågetecken, sedan
  ingenting igen. Tryck på den igen för att gå tillbaka till att placera magneter.
- **Lös** fyller i hela lösningen.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör runt rutnätet.
- **Enter** växlar halvan under markören mellan \`+\`, \`−\` och tom, precis som ett
  vänsterklick.
- **Space** växlar dominobrickan under markören mellan tom bricka, frågetecken och
  ingenting, precis som ett högerklick.
- **B** är knappen **Tom**.

## Inställningar

- **Bredd** och **höjd** på rutnätet. När arean är udda blir en ruta över och ritas
  streckad; den hör inte till någon dominobricka och räknas som neutral.
- **Svårighetsgrad**: _Lätt_ pussel kräver bara att du tittar på en linje eller en dominobricka i
  taget – ett antal som redan stämmer, ett antal som behöver alla återstående kandidater, eller
  en dominobricka där ingen av halvorna kan ta en viss pol. _Svår_ kräver också att du resonerar
  om hela dominobrickor som ligger längs en linje: en dominobricka som måste vara en magnet
  bidrar med en pol av varje sort hur den än vänds, en linje med bara en tom plats kvar kan inte
  rymma en tom bricka på längden, och så vidare. Varje pussel har exakt en lösning.
- **Gallra ledtrådar**: ta bort varje antal som inte behövs för att lösa pusslet på den
  valda svårighetsgraden, vilket gör det betydligt svårare att se var man ska börja.
`,O=e({default:()=>k}),k=`# Karta

En karta är indelad i områden. Färglägg varje område med en av fyra färger så att inga
två områden som delar en bit gräns har samma färg. Områden som bara möts i ett hörn får
ha samma färg. Några områden är redan färglagda åt dig, och de är valda så att det finns
exakt ett sätt att göra klart kartan.

Två angränsande områden med samma färg flaggas med ett rött \`!\` på gränsen mellan dem.

## Styrning

**Lös** färglägger hela lösningen. Kartan blinkar när varje område är färglagt och inget
är rött.

### Mus och pekskärm

- **Dra** en färg: tryck på ett område (eller på en av färgrutorna under kartan) och
  släpp på ett annat område för att ge det den färgen. Om du drar från ett ofärgat område,
  från det tomma utrymmet runt kartan eller från suddgummit töms området du släpper på.
- **Klicka på en färgruta** för att välja en färg och **klicka** sedan på områden för att
  måla dem; klicka på den valda färgrutan igen för att välja bort den.
- **Högerdra** en färg till ett ofärgat område för att anteckna en liten prick i den
  färgen, som en påminnelse om att området _kanske_ har den färgen. Ett område kan ha
  flera prickar; drar du samma färg igen tas pricken bort. Med en färgruta vald
  växlar ett vanligt **högerklick** på ett ofärgat område dess prick.
- **Nummer** (i pausmenyn) visar ett nummer i varje område, praktiskt när du pratar om ett
  pussel med någon annan, och döljer dem igen.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör runt kartan; området den står i får en kontur.
  Tangenterna **1**–**4** färglägger det området, **Space** tömmer det och **Enter** tar
  upp dess färg så att du kan bära den med piltangenterna och släppa den med **Enter**
  (eller som en prick med **Space**). Trycker du **Enter** två gånger utan att flytta dig
  töms området.
- **L** är knappen **Nummer**.

## Inställningar

- **Bredd** och **höjd** på rutnätet som kartan är ritad på, i rutor.
- **Områden**: hur många områden kartan delas in i.
- **Svårighetsgrad**: _Lätt_ pussel har alltid ett område som bara har en färg kvar. _Medel_
  lägger till slutledningar om par av angränsande områden som måste dela på samma två färger.
  _Svår_ kräver kedjor av sådana slutsatser över kartan. Alla dessa kan lösas utan att gissa.
  _Extrem_ lovar bara att lösningen är entydig; du kan behöva prova en färg och följa den tills
  något går fel.
`,A=e({default:()=>j}),j=`# Minröjning

Ett rutnät av täckta rutor döljer ett antal minor. Öppna varje ruta som _inte_ innehåller
en mina. Varje ruta du öppnar visar hur många av dess åtta grannar som är minor; öppnar
du en mina har du förlorat.

Det speciella med den här versionen är att du aldrig behöver gissa. Inget är bestämt
förrän ditt första klick: minorna läggs då ut så att rutan du klickade på är tom och hela
rutnätet kan lösas med ren logik därifrån. Om du någon gång känner dig fast finns det
alltid en säker ruta någonstans som talen redan bevisar.

Statusraden visar hur många flaggor du har satt ut jämfört med antalet minor, och klockan
startar vid ditt första klick. Om du träffar en mina visas resten av dem och felaktiga
flaggor kryssas över; du kan ångra det ödesdigra klicket och fortsätta, men dödsfallet
finns kvar på statusraden.

## Styrning

### Mus och pekskärm

- **Klicka** på en täckt ruta för att öppna den. När du öppnar en tom ruta (utan
  angränsande minor) öppnas också dess grannar, och så vidare utåt.
- **Högerklicka** på en täckt ruta för att sätta en flagga på en misstänkt mina, och igen
  för att ta bort den. Flaggade rutor kan inte öppnas av misstag.
- **Klicka på ett tal** som redan har rätt antal flaggor runt sig för att öppna alla dess
  andra täckta grannar på en gång. Ett **mittenklick** på talet gör samma sak.
- **Tips** öppnar en ruta som är säker – eller tar bort en flagga som inte har någon mina
  under sig – och lämnar resten av rutnätet åt dig. Med några få tips är vinsten och dess
  polett fortfarande din.
- **Lös** visar hela utlägget och flaggar varje mina. Det räknas inte som en egen vinst.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör runt rutnätet.
- **Enter** fungerar som ett vänsterklick på rutan under markören: den öppnar en täckt
  ruta, eller röjer runt ett tal vars flaggor alla är på plats.
- **Space** sätter ut eller tar bort en flagga, som ett högerklick.

## Inställningar

- **Bredd** och **höjd** på rutnätet.
- **Minor**: hur många minor som ska gömmas. Du kan ange en procentsats som \`20%\` i
  stället för ett antal. Mycket höga tätheter gör att lösbara rutnät tar lång tid att
  hitta.
- **Garantera lösbarhet**: när det är på (standard) är utlägget garanterat lösbart från
  ditt första klick utan att gissa. Stäng av det för vanliga slumpmässiga rutnät, som kan
  lämna dig med ett rent slantsinglande på slutet.
`,M=e({default:()=>N}),N=`# Nät

Ett nätverk av ledningar har lagts ut över ett rutnät av kvadratiska brickor, och sedan
har varje bricka vridits slumpmässigt. Vrid tillbaka brickorna så att alla sitter ihop i
ett enda nätverk: varje ledningsände måste mötas av en ledning på grannbrickan, och ingen
ledning får peka mot en vägg. Det färdiga nätverket är ett träd, så det har inga slutna
slingor.

Brickor som redan är kopplade till källbrickan i mitten av rutnätet ritas i blått som
vägledning; resten förblir grå. En ledning som ingår i en slinga ritas i rött. Kraftiga
svarta linjer mellan brickor är hinder: ingen ledning kan korsa dem, vilket ger dig en
ledtråd om hur brickorna på båda sidor måste ligga. Statusraden visar hur många brickor som
har ström just nu.

## Styrning

### Mus och pekskärm

- **Klicka** på en bricka för att vrida den moturs, **högerklicka** för att vrida den
  medurs.
- **Mittenklicka** på en bricka för att **låsa** den när du är säker på den. En låst
  bricka är skuggad och vrids inte förrän ett nytt mittenklick låser upp den.
  Ett högerklick vrider brickan i stället för att låsa den, så ett mittenklick är sättet att
  göra det.
- **Lås** (hänglåsknappen bredvid Ångra) gör att ett vanligt klick låser eller låser upp en
  bricka i stället för att vrida den, vilket är enklare än ett mittenklick på en styrplatta.
  Ett högerklick vrider fortfarande brickan medurs. Tryck på den igen för att gå tillbaka
  till att vrida.
- **Blanda** vrider varje olåst bricka till ett nytt slumpmässigt läge, för omväxlings
  skull när ett pussel har kört fast.
- På ett runtomgående rutnät rullar de fyra **pilknapparna** vyn, så att brickor på
  motsatta kanter kan hamna bredvid varandra.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör runt rutnätet.
- **Enter** eller **A** vrider brickan under markören moturs, **D** vrider den medurs och
  **F** vrider den ett halvt varv.
- **Space**, **S** eller **L** låser eller låser upp brickan under markören. Med en mus
  låser **Shift-klick** också en bricka, precis som ett mittenklick.
- **K** är knappen **Lås** och **J** knappen **Blanda**.
- På ett runtomgående rutnät rullar **Shift + piltangenterna** vyn (samma sak som de fyra
  pilknapparna) så att brickor på motsatta kanter syns bredvid varandra. **Ctrl +
  piltangenterna** flyttar källbrickan som den blå markeringen sprider sig från.

## Inställningar

- **Bredd** och **höjd** på rutnätet, i brickor.
- **Kanterna går runt**: ledningar får fortsätta ut över en kant av rutnätet och komma in
  igen från den motsatta kanten.
- **Sannolikhet för hinder**: ett tal från 0 till 1 som anger hur stor andel av kanterna
  utan ledning som får ett hinder. Hinder ändrar aldrig hur ledningarna ligger: samma
  slumpfrö ger alltid samma rutnät, så en högre sannolikhet ger bara fler ledtrådar.
- **Garantera entydig lösning**: normalt ordnas pusslet så att exakt ett läge för
  brickorna fungerar. Stäng av det för snabbare skapande och en och annan tvetydig del.
`,P=e({default:()=>F}),F=`# Glidnät

Varje bricka har en bit ledning: en rak sträcka, ett hörn, en T-korsning eller en lös
ände med en prick på. Rätt ihopsatta bildar bitarna ett enda nätverk som når varje bricka
från strömkällan på den skuggade mittbrickan, utan slingor och utan armar som pekar mot
ingenting. Rutnätet har blandats genom att hela rader och kolumner har skjutits, så det
är det enda sättet att ställa det till rätta: ingen bricka kan vridas, bara flyttas.

Brickor som har ström just nu ritas i blått; resten förblir grå. Kraftiga svarta väggar
mellan brickor är hinder. Inget kan kopplas ihop över ett hinder, så de visar var det
färdiga nätverket definitivt saknar förbindelse.

## Styrning

### Mus och pekskärm

- **Klicka** på en pil bredvid en rad eller kolumn för att skjuta hela den linjen ett
  steg åt det håll pilen pekar. Brickan som knuffas ut i ena änden kommer in igen i andra
  änden av samma linje. **Högerklicka** på en pil för att skjuta linjen åt andra hållet.
- Mittraden och mittkolumnen har inga pilar: strömkällan flyttas aldrig.
- **Lös** hoppar direkt till det färdiga nätverket så att du kan jämföra det med ditt eget
  försök.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markering runt ringen av pilar.
- **Enter** skjuter den markerade linjen åt det håll dess pil pekar och **Space** skjuter
  den baklänges.

## Inställningar

- **Bredd** och **höjd** på rutnätet.
- **Kanterna går runt**: när det är på fortsätter högerkanten på vänster sida och
  nederkanten upptill, så ledningar (och hinder) kan gå över rutnätets kant. Den
  streckade ramen markerar ett runtomgående rutnät; en heldragen kraftig ram är en vägg
  hela vägen runt.
- **Sannolikhet för hinder**: hur många av de oanvända brickkanterna som får ett hinder,
  från 0 (inga) till 1 (varje kant som det färdiga nätverket inte använder). Fler hinder
  gör pusslet lättare. Hindren väljs oberoende av resten av rutnätet, så samma slumpfrö
  med högre sannolikhet för hinder ger samma pussel med fler ledtrådar.
- **Antal blandningsdrag**: låt det stå på 0 för en grundlig blandning, eller ange ett tal
  för att blanda med exakt så många förskjutningar. Målet är då att hitta och backa dem;
  statusraden visar målet.
`,I=e({default:()=>L}),L=`# Mönster

Varje ruta i rutnätet är i hemlighet antingen svart eller vit. Talen bredvid varje rad och
ovanför varje kolumn anger längderna på serierna av svarta rutor i den linjen, i ordning,
med minst en vit ruta mellan två serier i följd. Fyll i de svarta rutorna så att varje rad
och varje kolumn stämmer med sina tal. Pussel av det här slaget brukar kallas nonogram,
picross eller japanska korsord.

Bilderna här skapas slumpmässigt, så det finns ingen bild att gissa sig till: allt måste
räknas ut från talen. Varje pussel kontrolleras i förväg så att det kan lösas genom att
resonera om en rad eller kolumn i taget, så du behöver aldrig prova dig fram.

En linjes tal blir grå när de svarta serierna i linjen stämmer med dem, och röda om
serierna du har gjort klart omöjligt kan passa talen. Pusslet är löst när varje rad och
kolumn stämmer med sina tal; prickar finns bara där för att hjälpa dig att minnas.

## Styrning

### Mus och pekskärm

- **Klicka** på en ruta för att måla den svart; klicka på en svart ruta igen för att
  tömma den.
- **Högerklicka** för att markera en ruta med en prick, som betyder att den är känd som
  vit; högerklicka på en ruta med prick för att tömma den.
- **Dra** för att måla en rak linje av svarta rutor på en gång, och **dra med höger musknapp**
  för att lägga en linje av prickar. Bara rutor som var i samma läge som den du
  började på påverkas, så om du drar en rad prickar över dina svarta rutor lämnas de
  ifred.
- **Mittenklicka** på en ruta för att sudda tillbaka den till okänd. Med mus töms en hel
  rektangel, vad den än innehåller, om du drar med scrollhjulet nedtryckt.
- **Sudda** (suddgummiknappen bredvid Ångra) gör att vänsterknappen gör samma sak: klicka på
  en ruta för att sudda den, eller dra för att tömma en hel rektangel. Tryck på den igen för
  att gå tillbaka till att måla svart.
- **Tips** fyller i en ruta, alltid en som en enda rad eller kolumn avgör på egen hand –
  eller rättar en ruta som motsäger lösningen. Pusslet fortsätter, och med några få tips
  är vinsten och dess polett fortfarande din.
- **Lös** fyller i hela bilden åt dig.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör.
- **Enter** målar eller tömmer svart under markören och **Space** sätter ut eller tar bort
  en prick.
- Håll ned **Ctrl** medan du flyttar markören för att måla svart längs vägen, **Shift**
  för att lägga prickar, eller båda för att tömma.
- Med en mus tömmer **Shift-klick** rutor precis som ett mittenklick.
- **E** är knappen **Sudda**.

## Inställningar

- **Bredd** och **höjd** på rutnätet. Förinställningarna går från 10×10 upp till 30×30;
  större rutnät tar lite längre tid att skapa.
`,R=e({default:()=>z}),z=`# Pärlor

Ett rutnät där en del rutor har en svart eller vit pärla. Rita en enda sluten slinga som
går från rutmitt till rutmitt, vågrätt eller lodrätt, utan att någonsin korsa sig själv
eller förgrena sig. Slingan behöver inte besöka varje ruta, men den måste gå genom varje
pärla:

- vid en **svart pärla** svänger slingan och går sedan rakt igenom båda rutorna bredvid
  pärlan längs slingan;
- vid en **vit pärla** går slingan rakt igenom och svänger i minst en av de två rutorna
  bredvid pärlan längs slingan.

Det är bara rutorna som slingan besöker precis före och efter en pärla som räknas, inte
varje ruta som gränsar till den i rutnätet.

En pärla vars regel redan är bruten får en röd gloria. Så snart det finns någon sluten
slinga ritas varje linjestycke utanför den i rött, och det gör även varje ruta med tre
eller fler linjestycken.

## Styrning

**Lös** ritar hela slingan. Pusslet är klart när slingan är en enda sluten krets och
ingenting är rött.

### Mus och pekskärm

- **Klicka** på en kant i rutnätet (nära gränsen mellan två rutor) för att rita ett
  linjestycke över den; klicka igen för att ta bort det.
- **Dra** genom en rad rutor för att rita en hel följd av linjestycken på en gång. Drar du
  längs befintliga linjestycken tas de bort; ett drag som börjar på befintliga linjestycken
  och fortsätter in i tomma rutor suddar först och ritar sedan. Gå tillbaka över en ruta du
  redan passerat för att korta vägen innan du släpper; gå tillbaka till rutan du började i
  för att sluta slingan.
- **Högerklicka** på en kant i rutnätet för att sätta ett litet kryss som betyder ”inget
  linjestycke här”; inga linjestycken kan ritas över ett kryss förrän det tas bort.
  **Högerdra** genom en följd av rutor för att sätta kryss på varje kant du passerar.
- **Kryss** (kryssknappen bredvid Ångra) gör att ett vanligt klick sätter eller tar bort ett
  kryss, och att ett drag lägger en hel rad av dem: precis som när du ritar tar ett drag som
  börjar på kryss först bort dem, och det hoppar över kanter som redan har ett linjestycke.
  Tryck på den igen för att gå tillbaka till att rita slingan.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör. **Ctrl+pil** ritar eller tar bort linjestycket på
  den sidan av markörens ruta, **Shift+pil** sätter eller tar bort ett kryss där. **Enter**
  börjar ett tangentbordsdrag från markörens ruta: flytta med pilarna och tryck på Enter
  igen för att bekräfta vägen, eller på **Space** för att avbryta den.
- **X** är knappen **Kryss**; när den är på lägger ett tangentbordsdrag också kryss.

## Inställningar

- **Bredd** och **höjd** på rutnätet, i rutor (minst fem vardera).
- **Svårighetsgrad**: _Lätt_ pussel löses genom att resonera om varje pärla och rutorna
  precis intill den. _Knepig_ pussel kräver dessutom att du märker när ett linjestycke
  skulle sluta en liten slinga för tidigt och lämna andra pärlor strandsatta. (Ett 5×5
  Knepig-rutnät genereras som Lätt, precis som i originalet.)
- **Tillåt olösbara**: behåll varje pärla som slingan stöder i stället för att gallra ner
  dem till en minimal, entydigt lösbar uppsättning. Ett felsökningsalternativ som ärvts
  från originalet.
`,B=e({default:()=>V}),V=`# Pinnar

En spelplan full av pinnar med ett tomt hål, eller några få på en slumpmässig spelplan. En pinne får hoppa vågrätt eller
lodrätt över en angränsande pinne ner i det tomma hålet direkt bakom den; pinnen som
hoppades över tas bort. Fortsätt hoppa tills bara en pinne är kvar på spelplanen.

Det här är det gamla spelet solitär. Spelplanen **Kors** är den välkända engelska
uppställningen, **Oktagon** den europeiska (som börjar med det tomma hålet vid sidan av
mitten, eftersom den inte går att lösa från mitten), och **Slumpmässig** ger udda former
som datorn har låtit växa fram. Tomma ytor utan hål hör helt enkelt inte till spelplanen.

Du kan inte fastna för gott: om inga hopp finns kvar och mer än en pinne återstår är
spelet slut, men Ångra tar dig tillbaka så långt du vill. Statusraden räknar pinnarna som
är kvar och dragen du har gjort.

## Styrning

### Mus och pekskärm

- **Dra** en pinne och släpp den i ett tomt hål exakt två rutor bort, i rak linje över en
  annan pinne. Släpper du den någon annanstans ställs pinnen tillbaka.
- Eller **klicka** på en pinne för att plocka upp den (den blir orange och hålen den kan
  landa i markeras), och klicka sedan på hålet den ska hoppa till. Ett klick på samma pinne
  igen lägger ner den.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör runt spelplanen.
- **Enter** eller **Space** på en pinne plockar upp den; en piltangent hoppar sedan med den
  åt det hållet, om det är ett tillåtet drag, och **Enter** igen lägger ner den.

## Inställningar

- **Bredd** och **höjd** på spelplanen, minst 4 vardera.
- **Typ av spelplan**: _Kors_ och _Oktagon_ är de traditionella uppställningarna och finns
  bara i 7×7. _Slumpmässig_ ger en ny form på spelplanen varje gång, alltid en som går att
  reducera till en enda pinne eftersom den byggdes genom att köra hopp baklänges från en.
`,H=e({default:()=>U}),U=`# Räckvidd

En del rutor i rutnätet har ett tal. Måla rutor svarta så att fyra saker gäller samtidigt:

- ingen ruta med tal är svart;
- inga två svarta rutor gränsar till varandra längs en kant (hörn går bra);
- alla vita rutor bildar ett enda sammanhängande område, förbundna kant mot kant;
- varje tal anger hur många vita rutor dess egen ruta kan se: sig själv, plus allt i rak
  linje uppåt, nedåt, åt vänster och åt höger tills en svart ruta eller rutnätets kant är
  i vägen.

Det här är Nikolis _Kurodoko_, även känt som _Kuromasu_ eller _Where is Black Cells_. Ett
tal som redan ser tillräckligt många rutor har en svart ruta precis efter varje följd det
kan se; ett tal som skulle se för mycket om en ensam okänd ruta vore vit har i stället en
svart ruta där. Att måla en ruta som är den enda länken mellan två grupper av vita rutor
är aldrig rätt. Varje pussel kan lösas med sådana resonemang; du behöver aldrig gissa.

Misstag visas i rött: svarta rutor som gränsar till varandra får en röd ram runt gruppen,
vita rutor som är avskurna från huvudområdet får en röd kontur, och ett tal blir rött när
det inte längre kan se tillräckligt många rutor eller redan säkert ser för många. Pusslet
är klart när ingen regel är bruten; du behöver inte pricka de vita rutorna.

## Styrning

### Mus och pekskärm

- **Klicka** på en ruta för att måla den svart. Klicka igen för att göra den till en prick
  (en ruta du vet är vit), och en gång till för att tömma den.
- **Högerklicka** för att gå åt andra hållet: prick, sedan svart, sedan tom.
- **Dra** för att måla flera rutor på en gång, och **högerdra** för att svepa dem åt andra
  hållet. Bara rutor som från början var likadana som den första påverkas, så ett svep med
  prickar lämnar dina svarta rutor i fred.
- **Sudda** (suddgummiknappen bredvid Ångra) gör att ett klick tömmer en ruta i stället, och
  att ett drag tömmer alla svarta rutor och prickar det passerar, vilka de än är. Tryck på
  den igen för att gå tillbaka till att måla.
- **Tips** fyller i en ruta som följer av det som redan finns på spelplanen – eller rättar
  en ruta som motsäger lösningen. Pusslet fortsätter, och med några få tips är vinsten, och
  dess polett, fortfarande din.
- **Lös** fyller i hela rutnätet och prickar varje vit ruta.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör runt rutnätet.
- **Enter** fungerar som ett vänsterklick på rutan under markören och **Space** som
  ett högerklick.
- **E** är knappen **Sudda** och **H** knappen **Tips**.

## Inställningar

- **Bredd** och **höjd** på rutnätet. De förinställda storlekarna går från 9×6 till 16×11;
  allt upp till 30×30 kan genereras, men pyttesmå rutnät med en eller två rutor har inga
  rättvisa pussel.
`,W=e({default:()=>G}),G=`# Rektanglar

En del rutor i rutnätet har ett tal. Dela in hela rutnätet i rektanglar så att varje
rektangel innehåller exakt ett tal, och det talet är rektangelns area (dess bredd gånger
dess höjd). En 6:a ligger till exempel i ett block på 1×6, 2×3, 3×2 eller 6×1; vilket, och
var talet ligger inuti det, får du lista ut utifrån grannarna.

Pusslen genereras slumpmässigt, och som standard placeras talen så att bara en indelning
av rutnätet fungerar. Originalpusslet kommer från den japanska tidningen Nikoli, där det
heter Shikaku.

## Styrning

### Mus och pekskärm

- **Dra** över en yta för att rita en rektangel runt den: dess kontur ritas och alla
  linjer inuti den tas bort. Drar du längs en linje i rutnätet ritas bara den linjen.
- **Klicka** på en linje i rutnätet för att lägga till eller ta bort just den kanten.
- **Högerdra** över en yta för att sudda linjerna inuti den men lämna konturen i fred. Ett
  **högerklick** på en linje i rutnätet växlar den precis som ett vanligt klick.
- **Sudda** (suddgummiknappen bredvid Ångra) gör att även ett vanligt drag suddar: dra över
  en yta för att sudda linjerna inuti den, eller klicka på en linje i rutnätet för att ta
  bort den. Medan den är på lägger ett klick aldrig till en linje. Tryck på den igen för att
  gå tillbaka till att rita.
- **Lös** fyller i hela indelningen åt dig.

Medan du drar visas konturen av rektangeln du är på väg att rita, och dess storlek visas i
statusraden. En färdig rektangel med rätt storlek skuggas. En sluten rektangel som aldrig
kan bli rätt flaggas: dess tal blir rött om rektangeln har fel storlek för det, och den
skrafferas om den inte innehåller något tal alls. Pusslet är klart när varje ruta ligger i
en korrekt rektangel.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör.
- **Enter** börjar dra ut en rektangel från markören; flytta markören till motsatt hörn och
  tryck på **Enter** igen för att rita den.
- **Space** fungerar likadant men suddar i stället rektangelns insida.
- **E** är knappen **Sudda**.

## Inställningar

- **Bredd** och **höjd** på rutnätet. De förinställda storlekarna går från 7×7 upp till
  19×19.
- **Expansionsfaktor** – generera ett mindre rutnät och sträck ut det till den begärda
  storleken, så att pusslet får färre och större rektanglar. 0 (standard) betyder ingen
  utsträckning; 0,5 gör det ursprungliga rutnätet två tredjedelar av den slutliga storleken
  i varje riktning. Stora värden lämnar bara en handfull rektanglar och gör pusslet
  trivialt.
- **Garantera entydig lösning** – normalt påslaget. Stänger du av det placeras talen var
  som helst i sina rektanglar, vilket går snabbare och kan ge pussel med flera lösningar;
  varje giltig indelning räknas då som löst.
`,se=e({default:()=>K}),K=`# Same Game

Spelplanen är fylld med färgade rutor. Välj ut en grupp av två eller fler rutor med samma
färg som gränsar till varandra längs sidorna och ta bort den; rutorna ovanför luckan
faller ner, och när en kolumn är tom glider kolumnerna till höger om den över och sluter
luckan. Töm hela spelplanen för att vinna. Blir det rutor kvar men inga två angränsande
rutor har samma färg finns det inget mer att göra – ångra och prova en annan ordning.

Stora grupper är värda mycket mer än små: att ta bort _n_ rutor ger (_n_ − 2)² poäng med
standardpoängsättningen, så ett par är inget värt, tre rutor en poäng och tio rutor 64.
Statusraden visar dina poäng och, medan en grupp är vald, hur många rutor den har och vad
den skulle ge.

Varje genererad spelplan (om du inte stänger av alternativet) byggs så att den _kan_
tömmas helt – men att hitta en ordning som också ger bra poäng är upp till dig.

Det finns ingen Lös-knapp: datorn vet att spelplanen kan tömmas, men den tänker inte
berätta hur.

## Styrning

### Mus och pekskärm

- **Klicka** på en ruta för att välja hela gruppen den tillhör; gruppen ritas ljusare med
  en tjock kontur. **Klicka på den valda gruppen igen** för att ta bort den. Klickar du
  någon annanstans flyttas valet i stället.
- **Högerklicka** på den valda gruppen för att avmarkera den.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör runt spelplanen (den går runt vid kanterna).
- **Enter** väljer gruppen under markören, och ett nytt tryck tar bort gruppen.
- **Space** på den valda gruppen avmarkerar den.

## Inställningar

- **Bredd** och **höjd** på spelplanen.
- **Antal färger**, från 3 till 9 (2 är tillåtet när lösbarhet inte garanteras). Fler
  färger betyder mindre grupper och en svårare spelplan.
- **Poängsystem**: _(n−2)²_, standard, eller _(n−1)²_, som även belönar par.
- **Garantera lösbarhet**: när rutan är ikryssad genereras spelplanen baklänges från en
  tom spelplan, så att det finns minst en följd som tömmer den. Kryssa ur den för en helt
  slumpmässig spelplan, som går snabbare att generera och brukar ha större områden, men
  som kanske inte går att tömma.
`,ce=e({default:()=>le}),le=`# Vägvisare

Varje ruta har en pil, och några rutor har tal. Förbind rutorna till en enda väg numrerad
från 1 till N (där N är antalet rutor) så att varje rutas efterföljare ligger någonstans
längs dess pil: rutan med nummer 1 pekar mot 2, som pekar mot 3, och så vidare. En
efterföljare kan ligga på vilket avstånd som helst i pilens riktning, inte bara bredvid.
Den sista rutan, märkt med en stjärna, pekar ingenstans.

Det första och det sista talet visas alltid, och tillräckligt många andra för att vägen ska
bli entydig. Varje pussel har exakt en lösning, och den kan hittas enbart genom
resonemang.

Misstag visas i rött: två rutor med samma tal, ett tal vars efterföljare inte ligger längs
dess pil, eller en kedja som går förbi sitt givna tal. Pusslet är klart när talen 1 till N
går genom varje ruta utan något rött någonstans.

## Styrning

### Mus och pekskärm

- **Dra** från en ruta till en ruta längs dess pil för att göra den andra till den förstas
  efterföljare. **Högerdra** går åt andra hållet: från en ruta till den ruta som ska komma
  före den.
- När två länkade rutor innehåller ett tal sprids talet längs hela kedjan och visas i blått.
  En kedja som ännu inte har något tal märks med en bokstav och förskjutningar (\`a\`, \`a+1\`,
  \`a+2\`, ...); så snart den når en numrerad ruta blir bokstäverna till tal. Länkar du en
  kedja till en ruta som redan är länkad ersätts den gamla länken.
- Varje ruta som fortfarande behöver en föregångare visar en liten prick i nedre vänstra
  hörnet, och en pil bleknar när dess ruta har fått en efterföljare. Uppgiften är alltså
  alltid att förbinda en tydlig pil med en ruta som har en prick.
- **Högerklicka** på en ruta för att ta bort båda dess länkar. **Dra** en ruta utanför
  spelplanen för att göra samma sak, eller **högerdra** den utanför spelplanen för att bryta
  upp hela dess kedja.
- **Bryt** (knappen med den brutna länken bredvid Ångra) gör att ett klick på en ruta bryter
  upp hela dess kedja, varenda länk, och att dra en ruta utanför spelplanen gör samma sak.
  Att dra från ruta till ruta länkar dem fortfarande. Tryck på den igen för att stänga av.
- **Lös** fyller i hela vägen.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör.
- **Enter** på en ruta börjar en länk från den; flytta markören till efterföljaren och tryck
  på **Enter** igen för att skapa länken (tryck på samma ruta för att avbryta).
- **Space** eller **X** tar bort länkarna från rutan under markören; **Shift + X** bryter upp
  hela dess kedja.
- **B** är knappen **Bryt**.

## Inställningar

- **Bredd** och **höjd** på rutnätet, från 2 upp till 12 rutor (2×2 är för litet för att
  fungera).
- **Start och slut i hörnen**: när det är valt ligger 1 alltid i rutan längst upp till
  vänster och N längst ner till höger. Annars placeras båda ändarna slumpmässigt, men båda
  visas fortfarande.
`,ue=e({default:()=>de}),de=`# Ensamma

Varje ruta i rutnätet har ett tal. Svärta några av rutorna (så att deras tal döljs) så att
tre saker gäller samtidigt:

- inget tal förekommer mer än en gång bland de vita rutorna i någon rad eller kolumn;
- inga två svarta rutor gränsar till varandra längs en kant (hörn går bra);
- alla vita rutor bildar ett enda sammanhängande område, förbundna kant mot kant.

Det här är Nikolis _Hitori_. En bra början är att leta efter två lika tal med en ruta
emellan: ett av dem måste vara svart, så rutan i mitten måste vara vit. Två lika tal sida
vid sida betyder att varje annan förekomst av det talet i deras linje är svart.

Misstag visas i rött: svarta rutor som gränsar till varandra får en röd ram runt gruppen,
vita rutor som är avskurna från huvudområdet får en röd kontur, och två inringade rutor med
samma tal i samma linje ritas i rött.

Pusslet är klart när ingen regel är bruten; du behöver inte ringa in de vita rutorna.

## Styrning

### Mus och pekskärm

- **Klicka** på en ruta för att svärta den; klicka igen för att återställa den.
- **Högerklicka** för att rita en ring runt ett tal och notera att det säkert är vitt;
  högerklicka igen för att ta bort ringen. Båda knapparna tar bort den markering en ruta
  redan har.
- **Lös** fyller i hela rutnätet och ringar in varje vit ruta.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör runt rutnätet (den går runt vid kanterna).
- **Enter** svärtar eller återställer rutan under markören, och **Space** ringar in den
  eller tar bort ringen.

## Inställningar

- **Bredd** och **höjd** på rutnätet, från 2 upp till 20 för genererade pussel.
- **Svårighetsgrad**: _Lätt_ pussel kräver bara de direkta slutsatserna – en svart ruta
  tvingar sina grannar att vara vita, ett inringat tal tvingar sina tvillingar att vara
  svarta, mönstren par-med-lucka och par-sida-vid-sida, en vit ruta med bara en väg ut, och
  de små mönstren i hörnen. _Knepig_ pussel kräver dessutom att du märker när en svärtad
  ruta skulle dela det vita området i två, och att du använder par av par förskjutna en
  ruta. Varje pussel har exakt en lösning.
`,fe=e({default:()=>pe}),pe=`# Sexton

Ett glidpussel utan tom ruta. Varje ruta har en numrerad bricka, och i stället för att
skjuta en enda bricka skjuter du en hel rad eller kolumn ett steg. Brickan som trycks ut
över kanten kommer direkt tillbaka in i andra änden av samma linje, som om rutnätet vore
lindat runt en munk. Sortera brickorna så att de räknas uppåt från 1 i övre vänstra hörnet,
från vänster till höger och sedan rad för rad.

## Styrning

### Mus och pekskärm

- **Klicka** på en av pilarna runt kanten för att skjuta den raden eller kolumnen ett steg
  i pilens riktning. **Högerklicka** på en pil för att skjuta linjen åt andra hållet.
- **Lös** byter helt enkelt ut rutnätet mot det ordnade. Den visar ingen väg dit, men du
  får en ren spelplan att prova manövrar på.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markering runt ringen av kantpilar.
- **Enter** skjuter den markerade linjen åt det håll pilen pekar och **Space** skjuter den
  åt andra hållet.

## Inställningar

- **Bredd** och **höjd** på rutnätet. På rutnät där båda sidorna är udda kan bara hälften av
  alla uppställningar nås, så generatorn delar bara ut sådana som går.
- **Antal blandningsdrag**: lämna på 0 för en helt slumpmässig uppställning, eller ange ett
  tal för att blanda det ordnade rutnätet med exakt så många enkla förskjutningar. Tanken är
  då att lista ut vilka förskjutningar som gjordes och ångra dem på lika många drag; ju fler
  blandningsdrag du begär, desto troligare är det att det finns en kortare lösning.
`,me=e({default:()=>he}),he=`# Snedstreck

Ett rutnät av tomma rutor med inringade tal i några av hörnen. Rita en diagonal linje genom
varje ruta, lutad åt något av hållen, så att:

- varje inringat tal har exakt så många linjer som rör vid dess hörnpunkt (en 4:a sitter
  mitt i ett kryss, en 0:a har alla närliggande linjer lutade bort från sig);
- linjerna aldrig bildar en sluten slinga.

Ett tal som redan har för många linjer, eller som inte längre kan få tillräckligt många,
blir rött, liksom varje linje som ingår i en slinga. Pusslet är klart när varje ruta har en
linje och ingenting är rött.

## Styrning

### Mus och pekskärm

- **Klicka** på en ruta för att rita ett \`\\\` i den; klicka igen för att göra det till ett
  \`/\`, och en gång till för att tömma rutan.
- **Högerklicka** för att gå åt andra hållet: \`/\`, sedan \`\\\`, sedan tomt. En ruta kan
  alltså ställas in åt båda hållen med bara en knapp.
- **Lös** fyller i hela rutnätet.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör runt rutnätet.
- **Enter** växlar rutan under markören som ett vänsterklick och **Space** som
  ett högerklick.

## Inställningar

- **Bredd** och **höjd** på rutnätet, i rutor.
- **Svårighetsgrad**: _Lätt_ pussel kan lösas en ruta i taget – ett tal som redan är
  uppfyllt eller som behöver varje återstående ruta, och rutor där en av de två linjerna
  skulle sluta en slinga. _Svår_ pussel kräver dessutom resonemang om par av rutor som måste
  luta åt samma håll redan innan du vet vilket håll det är, och om områden som en linje
  skulle stänga av från rutnätets kant. Du behöver aldrig gissa; varje pussel har exakt en
  lösning.
`,ge=e({default:()=>_e}),_e=`# Solo

Fyll det kvadratiska rutnätet med siffror så att varje rad, varje kolumn och varje block
med tjock kontur innehåller varje siffra exakt en gång. En del rutor är givna som
ledtrådar; resten får du lista ut själv. Det vanliga 3×3-pusslet är det välkända Sudoku,
men blocken kan också vara rektanglar (ett 2×3-pussel har sex block på 3×2), och rutnätet
kan vara så stort som 16×16, och då står bokstäverna a, b, c… för siffrorna över 9.

Tre varianter kan slås på:

- **X**: de två huvuddiagonalerna, som är svagt skuggade, måste också innehålla varje siffra.
- **Pusselbitar**: blocken är oregelbundna former som skiljer sig från pussel till pussel.
- **Killer**: det finns inga givna siffror. I stället är rutnätet indelat i streckade
  ”burar”, var och en märkt med summan av siffrorna i den. Ingen siffra får förekomma två
  gånger i en bur.

Varje pussel har exakt en lösning, och den kan alltid nås med rena resonemang på den
svårighetsgrad du valt.

## Styrning

Siffror som krockar med en annan likadan siffra i samma rad, kolumn, block, diagonal eller
bur visas i rött, liksom en bur vars siffror inte blir dess summa. **Tips** skriver in en
ruta – den lättaste som fortfarande är öppen, eller den första siffran som motsäger
lösningen – och lämnar resten åt dig; pusslet fortsätter, och med några få tips är vinsten,
och dess polett, fortfarande din. **Lös** fyller i hela lösningen och avslutar pusslet.

### Mus och pekskärm

- **Vänsterklicka** på en tom ruta för att välja den och använd sedan knappsatsen på skärmen för
  att skriva in en siffra (bokstavsknapparna är siffrorna över 9). Ett klick på den valda rutan
  igen avmarkerar den.
- **⌫** på knappsatsen tömmer den valda rutan igen, och **✎** låser fast anteckningsläget,
  så att det du väljer härnäst skrivs som en liten anteckning i stället för ett svar.
- **Högerklicka** på en ruta för att välja den direkt för **anteckningar**. Anteckningar
  finns bara där för att hjälpa dig tänka; spelet bryr sig inte om dem, och när du fyller i
  en siffra försvinner de.
- **Kandidater** i pausmenyn fyller varje tom ruta med en fullständig uppsättning
  anteckningar, för dig som gillar att börja med allt och stryka kandidater.
- **Framhäv** (förstoringsglaset bredvid Ångra) framhäver alla rutor som har samma siffra
  som rutan du senast klickade på, ledtrådar inräknade, och visar den siffran i fetstil
  bland anteckningarna. Tryck på den igen för att stänga av.

### Tangentbord (Keyboard)

- **Skriv en siffra** (eller en bokstav för siffror över 9) för att fylla i den valda rutan.
- **Space** eller **Backspace** tömmer den valda rutan (dess siffra eller alla dess
  anteckningar).
- **Piltangenterna** flyttar en tangentbordsmarkör. **Enter** växlar markören mellan vanlig
  inmatning och anteckningar, och siffror du skriver hamnar i rutan under den.
- **M** är knappen **Kandidater** och **L** knappen **Framhäv**.

## Inställningar

- **Kolumner** och **rader av delblock**: rutnätet är lika stort som deras produkt, och
  varje block är lika brett som antalet rader och lika högt som antalet kolumner. I
  pusselbitsläget är produkten helt enkelt rutnätets storlek.
- **X**, **Pusselbitar** och **Killer** slår på varianterna som beskrivs ovan. Killer-pussel
  är begränsade till rutnät med högst nio siffror.
- **Symmetri**: hur mönstret av ledtrådar speglar sig självt. Mer symmetri ser snyggare ut
  men brukar lämna fler ledtrådar än som egentligen behövs.
- **Svårighetsgrad**: det svåraste slags resonemang pusslet kommer att kräva. _Mycket lätt_ och
  _Lätt_ har alltid någon ruta som kan fyllas i direkt; _Medel_ kräver att du resonerar om var en
  siffra kan hamna i ett block och en linje; _Svår_ kräver grupper av rutor som tillsammans äger
  en grupp siffror; _Expert_ lägger till tvingande kedjor; och _Extrem_ går inte att lösa utan
  att gissa och backa. Svåra pussel tar längre tid att generera.
`,ve=e({default:()=>ye}),ye=`# Tält

Rutnätet är en campingplats: några rutor har träd, och resten är tom mark. Slå upp tält
på tomma rutor så att:

- det finns exakt lika många tält som träd;
- varje träd kan paras ihop med ett eget tält på en ruta direkt intill (ovanför,
  nedanför, till vänster eller till höger – inte diagonalt). Ett tält får råka stå bredvid
  andra träd också, men varje tält hör till ett träd och varje träd till ett tält;
- inga två tält rör vid varandra, inte ens i ett hörn;
- talen längs högra kanten och nederkanten anger antalet tält i varje rad och kolumn.

Ledtrådarna är bara antalen, så hela pusslet går ut på att lista ut var tälten måste stå.
Varje pussel här kan lösas med ren logik, utan att gissa.

## Styrning

Tält som rör vid varandra visas i rött med en markering på den gemensamma kanten eller
hörnet, och det gör även en grupp tält med för få träd mellan sig, eller en grupp träd
som inte längre har plats för alla sina tält. Ett antal blir grått när dess linje har
rätt antal tält och rött när det inte längre kan uppfyllas. **Lös** placerar ut alla
tält åt dig.

### Mus och pekskärm

- **Klicka** på en tom ruta för att slå upp ett tält där; klicka på tältet igen för att
  ta bort det.
- **Högerklicka** på en tom ruta för att markera den som gräs, alltså att du är säker på
  att inget tält står där; högerklicka igen för att rensa den. Både ett klick och
  ett högerklick rensar en ruta som redan innehåller något.
- **Högerdra** längs en rad eller kolumn för att göra alla tomma rutor du passerar till
  gräs på en gång – praktiskt för att avsluta en linje när alla dess tält är utplacerade.
  Tält och befintliga markeringar lämnas orörda.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör.
- **Enter** slår upp eller tar bort ett tält under markören.
- **Mellanslag** markerar eller rensar gräs under markören.

## Inställningar

- **Bredd** och **höjd** på rutnätet, från 4 upp till 20 rutor.
- **Svårighetsgrad**: _Lätta_ pussel löser du genom att räkna och titta på vad varje träd
  och tält behöver. _Knepiga_ pussel kräver också att du väger in hur de möjliga
  placeringarna i en linje begränsar grannlinjerna, och att du funderar på vilka rutor
  träden kan dela på.
`,be=e({default:()=>xe}),xe=`# Torn

Varje ruta i rutnätet får ett torn, med en höjd från 1 upp till rutnätets storlek. Varje
rad och varje kolumn måste innehålla varje höjd exakt en gång. Talen runt kanten anger
hur många torn du skulle se om du tittade in i raden eller kolumnen från det hållet: ett
torn döljer alla lägre torn bakom sig. En ledtråd som är lika med rutnätets storlek
betyder att höjderna stiger hela vägen längs linjen; en ledtråd på 1 betyder att det
högsta tornet står precis vid den kanten.

Större och svårare pussel börjar med några torn redan byggda och utelämnar några av
ledtrådarna vid kanten. Siffror som krockar med en annan i sin rad eller kolumn, och
ledtrådar som tornen hittills inte längre kan uppfylla, visas i rött. Pusslet är mer
känt som Skyskrapor.

## Styrning

De givna tornen kan inte ändras, och **Lös** fyller i svaret.

### Mus och pekskärm

- **Vänsterklicka** på en ruta för att välja den, och använd sedan knapparna på
  skärmen för att bygga ett torn med den höjden. **⌫** på knappsatsen tömmer rutan
  igen.
- **✎** på knappsatsen låser fast **anteckningar**: det du väljer skrivs då in som en liten
  anteckning, rutan förblir vald så att du kan lägga till flera, och samma siffra en gång
  till suddar ut den. När du fyller i en riktig siffra raderas anteckningarna i den rutan.
- **Högerklicka** på en ruta för att välja den för anteckningar direkt.
- **Kandidater** i pausmenyn fyller varje tom ruta med en full uppsättning
  anteckningar.
- **Framhäv** (förstoringsglaset bredvid Ångra) framhäver alla rutor som har samma höjd som
  rutan du senast klickade på, och visar den höjden i fetstil bland anteckningarna. Tryck på
  den igen för att stänga av.

### Tangentbord (Keyboard)

- **Skriv en siffra** för att bygga ett torn med den höjden i den valda rutan.
  **Mellanslag** eller **Backspace** rensar den.
- **Piltangenterna** flyttar en tangentbordsmarkör. **Enter** växlar den mellan siffer-
  och anteckningsläge; siffror skrivs in i den markerade rutan och markören stannar kvar.
- **M** är knappen **Kandidater** och **L** knappen **Framhäv**.

## Inställningar

- **Rutnätets storlek** – från 3 till 9. Tornen anges med en enda siffra, och därför är 9
  gränsen.
- **Svårighetsgrad** – Lätta pussel kräver bara de direkta följderna av varje ledtråd och av
  reglerna för rader och kolumner. Svåra pussel kräver att du överväger alla uppställningar en
  ledtråd tillåter och upptäcker grupper av rutor som delar några få kandidater. Expert lägger
  till svårare resonemang om grupper och tvingande kedjor, och pussel på Extrem går inte att lösa
  utan att pröva sig fram, även om lösningen fortfarande är entydig.
`,Se=e({default:()=>Ce}),Ce=`# Spår

En järnväg kommer in i rutnätet från vänster och lämnar det nedtill; båda ändarna visas
som räls som löper ut från spelplanen. Gör klart linjen mellan dem. Spåret är en enda
sträcka utan förgreningar, slingor eller korsningar, byggd bara av raka bitar och
kvartsvarvskurvor, så varje ruta det passerar har exakt två räls som leder ut ur den.
Några bitar ligger redan på skuggade rutor och kan inte ändras. Talet ovanför varje
kolumn och bredvid varje rad anger hur många rutor i den linjen det färdiga spåret går
genom.

Talen blir grå när deras linje har rätt antal spårrutor, och röda när en linje inte
längre kan gå ihop: för många spårrutor, eller så många överkryssade rutor att det inte
finns tillräckligt med plats kvar. Rutor där rälsen möts fel (tre räls in i samma ruta,
en sluten slinga, eller spår som blir över när ingång och utgång är ihopkopplade) ritas
också i rött.

## Styrning

**Lös** lägger hela spåret och tar bort alla dina markeringar som motsäger det. Pusslet
är klart när ett obrutet spår förbinder ingången med utgången och alla antal stämmer.

### Mus och pekskärm

- **Dra** genom en följd av intilliggande rutor för att lägga räls mellan dem. Vägen får
  svänga; ett drag som bara följer räls som redan finns tar i stället bort dem igen.
- **Klicka** nära sidan av en ruta för att lägga till eller ta bort en enskild räls
  genom den sidan. Klicka i mitten av en ruta för att markera den med ”spåret går här”
  utan att säga vilka sidor – praktiskt när du räknar – och klicka igen för att rensa
  markeringen.
- **Högerklicka** nära en sida för att rita ett kort streck som betyder ”ingen räls här”;
  högerklicka i mitten av en ruta för att kryssa över hela rutan. **Högerdra** längs en rad
  eller kolumn för att kryssa över (eller ta bort krysset från) en följd av rutor på en
  gång.
- **Sudda** (suddgummiknappen bredvid Ångra) gör att ett klick eller ett drag rensar rutor
  helt: varje ruta det rör vid förlorar sin räls, sina ”ingen räls”-streck och sin markering
  eller sitt kryss. De givna bitarna ligger kvar. Tryck på den igen för att gå tillbaka till
  att lägga räls.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör som stannar på rutor och på sidorna mellan dem.
  **Enter** fungerar som ett klick vid markören och **Mellanslag** som ett högerklick.
- **E** är knappen **Sudda**.

## Inställningar

- **Bredd** och **höjd** på rutnätet, minst fyra vardera.
- **Svårighetsgrad**: _Lätta_ pussel ger med sig om du tittar på en ruta eller en linje
  i taget. _Knepiga_ pussel kräver också att du funderar på var en linjes sista spårruta
  över huvud taget kan hamna, och på lösa rälsändar som måste fortsätta längs eller över
  en linje. Varje pussel har exakt en lösning.
- **Förbjud intilliggande 1-ledtrådar**: när det är påslaget (standard) har inga två
  angränsande linjer båda antalet 1, och inte heller ingångens kolumn eller utgångens
  rad. Det hindrar spåret från att löpa i långa, tråkiga raksträckor längs kanten.
`,we=e({default:()=>Te}),Te=`# Vrid

Ett rutnät av numrerade brickor har blandats genom att kvadratiska block av brickor
vridits. Vrid tillbaka dem tills talen står i ordning från vänster till höger och uppifrån
och ned. I grundspelet vrider varje drag ett 2×2-block ett kvarts varv kring punkten där
dess fyra brickor möts; större inställningar vrider 3×3-block eller ännu större.

I varianterna **med riktning** har varje bricka en triangel, och pusslet räknas bara som
klart när alla trianglar pekar uppåt. I varianten **bara rader** har brickorna i stället
sitt radnummer, så alla ettor behöver bara komma till första raden, tvåorna till den
andra och så vidare.

## Styrning

**Lös** sätter tillbaka varje bricka på sin plats direkt. Den visar ingen väg dit, men
det är ett snabbt sätt att få ett rent rutnät för att öva på en följd av vridningar.

### Mus och pekskärm

- **Klicka** i mitten av ett block för att vrida det moturs; **högerklicka** för att vrida det
  medurs. För 2×2-block är mitten ett hörn där fyra brickor möts; för udda blockstorlekar är det
  brickan i mitten. Ett klick ute mot kanten av rutnätet vrider blocket som ligger mot den
  kanten.
- **Medurs** (knappen med den böjda pilen bredvid Ångra) byter plats på de två: ett klick
  vrider block medurs och ett högerklick moturs. Tryck på den igen för att gå tillbaka.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en ram lika stor som ett block runt rutnätet. **Enter** vrider
  blocket inom ramen moturs och **Mellanslag** vrider det medurs.
- **A**, **B**, **C** och **D** vrider hörnblocken uppe till vänster, uppe till höger, nere
  till vänster och nere till höger moturs; håll ned **Shift** för medurs.
- **T** är knappen **Medurs**.

## Inställningar

- **Bredd** och **höjd** på rutnätet.
- **Storlek på roterande block**: sidan på det kvadratiska block som ett drag vrider (minst
  2, och inte större än rutnätet).
- **Ett tal per rad**: en enklare variant där alla brickor i en rad har samma tal.
- **Riktningen spelar roll**: brickorna får trianglar och måste alla till slut peka uppåt.
- **Antal blandningsdrag**: låt det stå på 0 för en grundlig blandning, eller ange ett
  litet tal för att få ett rutnät som är exakt så många vridningar från löst. Målet är då
  att hitta de vridningarna och ta tillbaka dem, så en blandning på tre drag förtjänar ett
  svar på tre drag (även om det ibland kan finnas en kortare väg).
`,Ee=e({default:()=>De}),De=`# Odöda

Rutnätet är en hemsökt spegelsal. Varje ruta utan spegel döljer ett av tre monster: ett
**spöke**, en **vampyr** eller en **zombie**. Förteckningen ovanför rutnätet visar hur
många av varje som återstår att placera, och talet vid varje plats längs kanten anger hur
många monster du skulle se om du tittade in i rutnätet därifrån, med siktlinjen som
studsar mot de diagonala speglarna.

Speglarna ändrar vad du kan se. En vampyr har ingen spegelbild, så den räknas bara så
länge siktlinjen inte har träffat någon spegel än. Ett spöke är tvärtom: osynligt när du
ser på det direkt, syns det bara efter en spegling. En zombie syns alltid. Om en
siktlinje korsar samma ruta två gånger räknas monstret där varje gång det syns. Placera
alla monster så att varje tal vid kanten och varje totalsumma stämmer.

## Styrning

Ett tal vid kanten blir grått när dess siktlinje är helt redovisad och rött när det inte
längre kan uppfyllas; ett antal i förteckningen blir rött när för många av det monstret
har placerats. Anteckningar är bara för dina egna noteringar och påverkar aldrig pusslet.

### Mus och pekskärm

- **Vänsterklicka** på en tom ruta för att växla den mellan spöke, vampyr, zombie och
  tillbaka till tom. Rutan förblir markerad.
- Knapparna på skärmen väljer ett monster direkt för den markerade rutan, utan att
  du behöver växla fram det; **⌫** tömmer rutan, anteckningar inräknade.
- **✎** på knappsatsen låser fast **anteckningar**: monstret du väljer läggs då till i
  (eller tas bort ur) rutans lista över kandidater.
- **Högerklicka** på en ruta för att lägga till anteckningar en kandidat i taget (spöke,
  sedan vampyr, sedan zombie, sedan rensa).
- **Sikt** (ögat bredvid Ångra) ritar siktlinjerna genom den markerade rutan, med knyckar i
  speglarna, och ringar in kanttalen i båda ändar av varje linje. Medan den är på följer ett
  klick på ett kanttal just det talets egen linje; klicka på det igen för att släppa den.
  Tryck på **Sikt** igen för att stänga av. Medan den är på markerar ett klick på en ruta
  som inte är markerad bara rutan, så att du kan följa en tom ruta utan att fylla den;
  klicka på den igen för att växla den som vanligt.

### Tangentbord (Keyboard)

- Piltangenterna flyttar markeringen. Enter växlar monstret i den markerade rutan;
  Mellanslag växlar dess anteckningar.
- \`G\`, \`V\`, \`Z\` (eller \`1\`, \`2\`, \`3\`) sätter det monstret i den markerade rutan, eller slår
  av och på dess anteckning när markeringen är i anteckningsläge. \`E\`, \`0\`, Backspace eller
  Delete rensar rutan, anteckningar inräknade.
- \`S\` är knappen **Sikt**.

## Inställningar

- **Bredd**, **Höjd** – rutnätets storlek, från 3×3 upp till 54 rutor totalt.
- **Svårighetsgrad** – _Lätta_ pussel löser du genom att räkna längs en siktlinje i taget;
  _Normala_ kräver att du väger de kombinationer som en hel väg tillåter; _Knepiga_ pussel
  går inte att lösa utan att pröva en gissning.
`,Oe=e({default:()=>ke}),ke=`# Olikheter

Fyll rutnätet så att varje rad och varje kolumn innehåller varje siffra från 1 upp till
rutnätets storlek exakt en gång – en latinsk kvadrat – samtidigt som tecknen mellan
intilliggande rutor respekteras.

I läget **Olikheter** är tecknen större än-tecken: den öppna sidan av ett \`>\` vetter mot
den större siffran och spetsen mot den mindre. Inte alla grannpar har ett tecken, och ju
svårare pusslet är, desto färre tecken finns det.

I läget **Grannar** är tecknen korta streck som betyder att de två siffrorna skiljer sig
med exakt ett (som 3 och 4). Här visas alltid varje streck, så **avsaknaden** av ett
streck mellan två rutor är också en ledtråd: de två siffrorna följer definitivt inte på
varandra.

Pusslet förekommer i tidningar under namnet Futoshiki.

## Styrning

Siffror som bryter mot en regel – en dubblett i en rad eller kolumn, eller ett tecken som
inte stämmer – visas i rött, liksom det felande tecknet. Pusslet är klart när varje ruta
är ifylld och inget är rött.

### Mus och pekskärm

- **Vänsterklicka** på en ruta för att välja den, och använd sedan knapparna på
  skärmen för att fylla i en siffra. **⌫** på knappsatsen rensar den valda rutan igen.
  Ett klick på den valda rutan en gång till avmarkerar den.
- **✎** på knappsatsen låser fast **anteckningar**: det du väljer läggs då till i (eller
  tas bort ur) en liten lista med möjligheter i rutan i stället för att bli svaret. När du
  fyller i en ruta raderas dess anteckningar.
- **Högerklicka** på en ruta för att välja den för anteckningar direkt.
- **Kandidater** i pausmenyn fyller varje tom ruta med alla möjliga anteckningar, redo för
  dig att stryka; **Tips** (glödlampan bredvid Ångra) gör samma sak men utelämnar dem som
  enkla slutsatser redan utesluter.
- **Framhäv** (förstoringsglaset bredvid Ångra) framhäver alla rutor som har samma siffra
  som rutan du senast klickade på, givna siffror inräknade, och visar den siffran i fetstil
  bland anteckningarna. Tryck på den igen för att stänga av.

### Tangentbord (Keyboard)

- **Skriv en siffra** för att fylla den valda rutan; \`0\`, Mellanslag eller Backspace
  rensar den.
- Piltangenterna flyttar en markör runt rutnätet; Enter växlar markören mellan att fylla i
  siffror och att göra anteckningar.
- \`M\` är knappen **Kandidater**, \`H\` är **Tips** och \`L\` är **Framhäv**.

## Inställningar

- **Läge** – Olikheter (större än-tecken) eller Grannar (streck mellan på varandra
  följande siffror).
- **Storlek** – antalet rader och kolumner, från 3 till 9.
- **Svårighetsgrad** – hur mycket resonerande pusslet kräver. **Mycket lätt** behöver aldrig
  tecknen: i läget Olikheter finns inga alls och pusslen är vanliga latinska kvadrater, och i läget
  Grannar ritas strecken ut, men de givna siffrorna avgör allt på egen hand. **Lätt** kräver bara
  den direkta betydelsen av varje tecken; **Medel** kräver att du ser på grupper av rutor
  tillsammans; **Svår** lägger till positionsbaserade resonemang om grupper och tvingande kedjor;
  **Extrem** (finns i dialogen Anpassa) kan kräva att du prövar dig fram, även om lösningen
  fortfarande är entydig.
`,Ae=e({default:()=>je}),je=`# Oregerlig

Färga varje ruta i rutnätet antingen svart eller vit. Några rutor är givna som
ledtrådar och kan inte ändras; resten börjar grå och är dina att fylla i. När du är klar
måste tre saker gälla:

- varje rad innehåller lika många svarta rutor som vita;
- varje kolumn innehåller lika många svarta rutor som vita;
- inga tre rutor i följd i en rad eller kolumn har samma färg.

Fel syns i rött: en följd av tre eller fler lika rutor får en röd ram, och en ruta får ett
rött **!** när dess rad eller kolumn redan har för många av den färgen. I den valfria
varianten ”unika rader och kolumner” får inga två rader ha samma mönster (och inte heller
två kolumner); likadana linjer stryks över i rött.

## Styrning

Ledtrådsrutor – de som ritas med en liten ram inuti – kan inte ändras. **Lös** fyller i
hela rutnätet. Pusslet är klart när varje ruta är färgad och inget visas i rött.

### Mus och pekskärm

- **Klicka** på en grå ruta för att göra den svart; klicka igen för vit, och en gång till
  för att rensa den.
- **Högerklicka** för att växla åt andra hållet: vit, sedan svart, sedan rensa.
- **Mittenklicka** för att rensa en ruta direkt.
- **Sudda** (suddgummiknappen bredvid Ångra) gör att ett klick rensar en ruta i stället för
  att färga den. Tryck på den igen för att gå tillbaka till att färga.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör runt rutnätet.
- **Enter** växlar rutan under markören som ett klick och **Mellanslag** som
  ett högerklick.
- **1** ger svart, **0** (eller **2**) ger vit och **Backspace** rensar.
- **E** är knappen **Sudda**.

## Inställningar

- **Bredd** och **höjd** på rutnätet. Båda måste vara jämna och minst 6.
- **Unika rader och kolumner**: när det är påslaget får inga två rader vara identiska och
  inga två kolumner vara identiska (en rad får fortfarande vara likadan som en kolumn).
  Mycket höga eller mycket breda rutnät nekas i det här läget eftersom det inte finns
  tillräckligt många olika linjer.
- **Svårighetsgrad**: _Lätta_ pussel kräver bara två omedelbara argument – två lika rutor
  tvingar rutan bredvid eller mellan dem till den andra färgen, och en linje som redan har
  sin andel av en färg får den andra färgen överallt annars. _Normala_ pussel kräver också
  att du resonerar om var den sista rutan av en färg fortfarande kan hamna i en linje utan
  att det bildas tre i rad. Varje pussel har exakt en lösning.
`,Me=e({default:()=>Ne}),Ne=`# Reda ut

Ett antal punkter är förbundna med raka linjer, och linjerna har trasslat ihop sig. Flytta
runt punkterna tills inga två linjer korsar varandra. Varje pussel går att reda ut: datorn
byggde grafen från en uppställning utan korsningar och blandade sedan ut punkterna på en
cirkel.

Linjer som just nu korsar en annan linje ritas i rött, så trasslet krymper synligt medan du
arbetar; pusslet är löst när inget rött finns kvar. Lös flyttar varje punkt till en
uppställning som datorn vet fungerar.

## Styrning

Ångra tar tillbaka vilket drag som helst, även Lös.

### Mus och pekskärm

- **Dra** en punkt och släpp den där du vill ha den. Punkten du tar tag i blir orange och
  dess grannar blå. Släpper du en punkt i marginalen hamnar den vid kanten av spelplanen;
  släpper du helt utanför ritytan avbryts draget.
- **Fäst** (rutnätsknappen bredvid Ångra) slår av och på ett fästrutnät: släppta punkter
  hamnar då i mitten av de rutor i rutnätet som är markerade med svaga prickar, vilket också
  är hur lösningen är upplagd. Knappen lyser så länge rutnätet är på.

### Tangentbord (Keyboard)

- **Piltangenterna** flyttar en markör från punkt till punkt i den riktningen. **Enter**
  eller **Mellanslag** plockar upp punkten; piltangenterna flyttar den sedan (en åttondels
  ruta per tryck, en hel ruta med Shift, ett enda steg med Ctrl) och **Enter** eller
  **Mellanslag** släpper den.
- \`G\` är knappen **Fäst**.

## Inställningar

- **Antal punkter**: hur många punkter grafen har, minst 4. Fler punkter betyder fler
  linjer och ett svårare trassel. Spelplanen växer med antalet punkter så att det alltid
  finns plats att sprida ut dem.
`,Pe=e({$dir:()=>`ltr`,$locale:()=>`sv`,$name:()=>q,default:()=>Fe,games:()=>Q,messages:()=>X,status:()=>Z,touchPhrases:()=>Y,tutorials:()=>$,ui:()=>J}),q=`Svenska`,J=JSON.parse(`{"appName":"Puzzlebox","menu":{"title":"Puzzlebox","tagline":"{n} handritade logiska pussel. Välj ett och spela.","lockedNote":"Varje pussel du löser på egen hand ger en polett. Använd poletterna här för att låsa upp nya pussel.","language":"Språk","stat":{"credits":{"one":"★ {n} polett","other":"★ {n} poletter"},"unlocked":"{n} av {total} upplåsta","solved":"{n} lösta","tight":{"credits":"★ {n}","unlocked":"{n}/{total}","solved":"✓ {n}","achievements":"{n}/{total}"},"achievements":"{n} av {total} prestationer"},"search":{"placeholder":"Sök pussel","label":"Sök bland pusslen efter namn","clear":"Rensa sökningen","empty":"Inget pussel här heter ”{q}”. Prova ett annat namn."},"hint":{"allOpen":"Allt är upplåst.","complete":"Du har låst upp hela samlingen!","spend":{"one":"Använd en polett nedan för att låsa upp ett pussel.","other":"Använd en polett nedan för att låsa upp pussel."},"earn":"Lös valfritt pussel på egen hand för att få en polett."},"card":{"label":"{name}: {description}","labelLocked":"{name}: {description} (låst)","labelAlias":"{name} (även känt som {alias}): {description}","labelLockedAlias":"{name} (även känt som {alias}): {description} (låst)","solvedTag":"✓ löst ×{n}","unlock":"Lås upp · 1 polett","unlocked":"{name} är upplåst!"},"noCredit":"Lös valfritt pussel på egen hand för att få en polett, och kom sedan tillbaka och lås upp det här.","surprise":"Överraska mig: öppna ett slumpat pussel","privacy":{"note":"Puzzlebox räknar hur pusslen spelas – aldrig vem som spelar dem – för att göra dem bättre."},"continue":"Fortsätt","continueLabel":"Fortsätt {name}","spend":"Använd"},"notFound":{"title":"Pusslet finns inte","body":"Vi har inget pussel som heter ”{slug}”.","back":"Tillbaka till alla pussel"},"locked":"{name} är fortfarande låst. Lös ett pussel för att få en polett och lås sedan upp det.","pageTitle":"{name} · Puzzlebox","topbar":{"back":"Alla pussel","help":"Hjälp","creditsTitle":"Poletter låser upp nya pussel. Lös ett pussel på egen hand för att få en.","boardLabel":"Spelplan för {name}"},"toolbar":{"type":"Typ","custom":"Anpassa…","new":"Nytt","newTitle":"Nytt spel (N)","restart":"Börja om","restartTitle":"Börja om det här pusslet","undo":"Ångra","undoTitle":"Ångra (U, Ctrl+Z)","redo":"Gör om","redoTitle":"Gör om (R, Ctrl+Y)","hint":"Tips","hintTitle":"Visa en ruta och spela vidare. Upp till {n} tips ger fortfarande en polett.","solve":"Lös","solveTitle":"Visa lösningen (Ctrl+S)","gameId":"Dela","gameIdTitle":"Dela det här pusslet, eller spela ett som någon har skickat till dig","more":"Mer","pause":"Paus","pauseTitle":"Pausmeny (Esc)","keypad":"Knappsats","keypadTitle":"Visa knappar på skärmen","zoomOut":"−","zoomOutTitle":"Mindre","zoomIn":"+","zoomInTitle":"Större","tapPlace":"Tryck: placera","tapMark":"Tryck: markera","tapTitle":"Vad ett vanligt tryck gör","tapPlaceTitle":"Tryck placerar, långt tryck markerar. Tryck för att byta.","tapMarkTitle":"Tryck markerar, långt tryck placerar. Tryck för att byta."},"pause":{"title":"Pausat","resume":"Fortsätt"},"pager":{"label":"Sidor","prev":"Föregående sida","next":"Nästa sida","page":"Sida {n} av {total}"},"badge":{"won":"Löst!","lost":"Spelet är slut"},"stage":{"generating":"Ett nytt pussel delas ut…"},"endgame":{"won":"Pusslet är löst!","lost":"Spelet är slut","credit":"★ +1 polett – tillräckligt för att låsa upp ett nytt pussel i samlingen.","wonNote":"Redo för nästa?","forfeitNote":"Det här pusslet ger ingen polett – lösningen visades på vägen.","lostNote":"Den gången gick det inte. Vill du försöka igen?","next":"Nästa pussel","retry":"Försök igen","dismiss":"Stäng och titta på spelplanen","time":"Tid","moves":"Drag","hints":"Tips","best":"Bästa {time}","newBest":"Nytt rekord!","stars":"{n} av 3 stjärnor","stepUp":"Prova {preset} →"},"keypad":{"label":"Knappsats","clear":"Rensa","clearTitle":"Töm den valda rutan (Backspace)","pencil":"Anteckningar","pencilOnTitle":"Tangenterna skrivs in som anteckningar. Tryck för att skriva svar igen.","pencilOffTitle":"Lås det här läget för att skriva in nästa tangenter som anteckningar"},"drawer":{"title":"Så spelar du {name}","close":"Stäng","replay":"▶ Spela upp genomgången igen","achievements":"Prestationer ({n}/{total})"},"dialog":{"ok":"OK","cancel":"Avbryt","customTitle":"{name}: anpassa","gameIdTitle":"Dela det här pusslet","shareLead":"Skicka exakt det här pusslet till någon annan.","copyLink":"Kopiera länk","linkCopied":"Länken är kopierad","codes":"Pusselkoder","byDescription":"Via beskrivning","bySeed":"Via slumpfrö","enterLabel":"Spela ett visst pussel: klistra in en kod","play":"Spela","copy":"Kopiera","copied":"Kopierad","link":"Länk","linkTitle":"Kopiera en länk som öppnar exakt det här pusslet","linkPrompt":"Länk till det här pusslet","hintAd":{"title":"Ett tips till?","body":"Du har använt dina {n} gratis tips. Ett till betyder att det här pusslet inte ger någon polett – om du inte tittar på en kort annons för att behålla den.","watch":"Titta på en annons och behåll poletten","anyway":"Ta tipset ändå"},"badCode":"Den koden öppnar inget {name}-pussel. Kontrollera att den kopierades i sin helhet."},"toast":{"creditEarned":"+1 polett","tutorialComplete":"Genomgången är klar. Här är ett nytt pussel – lös det på egen hand för att få en polett.","tutorialCompleteBack":"Genomgången är klar. Tillbaka till ditt pussel.","tutorialSkipped":"Genomgången hoppades över. Du kan spela upp den igen när du vill under Hjälp.","tapModeMark":"Tryck för att markera. Långt tryck för huvudåtgärden.","tapModePlace":"Tryck för huvudåtgärden. Långt tryck för att markera.","touchHint":"Tryck för att spela, långt tryck för den andra åtgärden. Den första runda knappen byter plats på dem.","hintNone":"Det finns inget mer att visa på den här spelplanen.","hintNoCredit":"Det är fler än {n} tips, så det här pusslet ger ingen polett – men du kan fortfarande lösa det klart.","hintAdFailed":"Ingen annons var tillgänglig, så inget har ändrats – tipset finns kvar om du vill ha det.","stuck":"Fastnat? Ett tips visar en ruta, och pusslet ger ändå sin polett."},"tutorial":{"label":"Genomgång av {name}","step":"Steg {n} av {total}","next":"Nästa","done":"Klar","skipStep":"Hoppa över steget","skipTutorial":"Hoppa över genomgången","nice":"Snyggt!","offScript":"Inte den: draget har tagits tillbaka så att stegen fortfarande stämmer med brädet. Prova det som det här steget ber om.","offScriptRead":"Det har tagits tillbaka så att stegen fortfarande stämmer med brädet. Läs det här steget först.","pointer":{"drag":"dra","rightClick":"högerklick","rightDrag":"högerdra","middleClick":"mittenklick","longPress":"långt tryck","longPressDrag":"långt tryck och dra","twoFingerTap":"tryck med två fingrar"}},"splash":{"tagline":"Handritade pussel, redo att spela","skip":"Hoppa över"},"help":{"keypad":{"heading":"Knappsatsen","introTouch":"Knapparna på skärmen skriver åt dig","introPointer":"**Knappsats** i verktygsfältet visar knappar på skärmen som skriver åt dig","select":": välj först en ruta på spelplanen och tryck sedan på en knapp.","clear":"- **⌫** tömmer den valda rutan igen.","pencil":"- **✎** låser fast anteckningsläget, så att knapparna skriver små anteckningar i stället\\n  för svar. Tryck på den igen för att gå tillbaka till svar."}},"achievements":{"title":"Prestationer","summary":"{n} av {total} uppnådda","unlocked":"Prestation upplåst","secret":{"name":"Hemlig prestation","description":"Fortsätt spela för att upptäcka den."},"earnedOn":"Uppnådd {date}","progress":"{n} av {goal}","collection":"Samlingen","tier":{"bronze":"Brons","silver":"Silver","gold":"Guld"},"meta":{"first-solve":{"name":"Första stegen","description":"Lös ditt första pussel på egen hand."},"solves-10":{"name":"Uppvärmd","description":"Lös 10 pussel."},"solves-50":{"name":"Pusselvana","description":"Lös 50 pussel."},"solves-100":{"name":"Hundraklubben","description":"Lös 100 pussel."},"solves-250":{"name":"Stormästare","description":"Lös 250 pussel."},"specialist":{"name":"Specialisten","description":"Lös 10 pussel i samma spel."},"variety-3":{"name":"Smakprov","description":"Lös ett pussel i 3 olika spel."},"variety-10":{"name":"Allsidig","description":"Lös ett pussel i 10 olika spel."},"variety-all":{"name":"Hela lådan","description":"Lös ett pussel i varje spel i samlingen."},"unlock-first":{"name":"Ny hylla","description":"Lås upp ditt första spel med en polett."},"unlock-15":{"name":"Växande samling","description":"Ha 15 spel upplåsta."},"unlock-25":{"name":"Nyckelknippa","description":"Ha 25 spel upplåsta."},"unlock-all":{"name":"Huvudnyckel","description":"Lås upp varje spel i samlingen."},"hardest-1":{"name":"Redo för en utmaning","description":"Lös ett pussel på ett spels svåraste inställning."},"hardest-10":{"name":"Toppbestigare","description":"Lös den svåraste inställningen i 10 olika spel."},"hardest-all":{"name":"Orubblig","description":"Lös den svåraste inställningen i varje spel."},"pure-1":{"name":"Rent blad","description":"Lös ett pussel utan att ångra och utan tips."},"pure-25":{"name":"Stadig hand","description":"Lös 25 pussel utan att ångra och utan tips."},"quick-draw":{"name":"Blixtsnabb","description":"Lös ett pussel på 30 sekunder eller mindre."},"marathon":{"name":"Maraton","description":"Lös ett pussel efter mer än 20 minuter med det."},"comeback":{"name":"Ge aldrig upp","description":"Förlora ett pussel, kom sedan tillbaka och lös det."},"second-thoughts":{"name":"Betänketid","description":"Ångra 100 gånger och lös ändå pusslet."},"a-little-help":{"name":"Lite hjälp","description":"Ta ett tips."},"oops":{"name":"Hoppsan","description":"Förlora ett pussel."},"night-owl":{"name":"Nattuggla","description":"Lös ett pussel mellan midnatt och klockan 5 på morgonen."},"on-a-roll":{"name":"I farten","description":"Lös 5 pussel i ett och samma pass."},"days-3":{"name":"Stamgäst","description":"Spela på 3 olika dagar."},"days-7":{"name":"Hängiven","description":"Spela på 7 olika dagar."},"days-30":{"name":"En del av inventarierna","description":"Spela på 30 olika dagar."},"quick-study":{"name":"Snabblärd","description":"Spela en genomgång till slutet."},"scholar":{"name":"Lärd","description":"Spela 10 olika genomgångar till slutet."},"collector-25":{"name":"Märkessamlare","description":"Uppnå 25 prestationer."},"collector-60":{"name":"Troféskåp","description":"Uppnå 60 prestationer."},"legend":{"name":"Pussellegend","description":"Uppnå alla andra prestationer."}},"andMore":{"one":"{n} prestation upplåst","other":"{n} prestationer upplåsta"}},"welcome":{"title":"Välj ditt första pussel","subtitle":{"one":"{n} pussel att börja med. Välj det och spela.","other":"{n} pussel att börja med. Välj ett och spela."},"more":{"one":"…och {n} till att låsa upp","other":"…och {n} till att låsa upp"},"how":"Varje pussel du löser ger dig en polett, och varje polett låser upp ett nytt spel."},"gamepad":{"connected":"Handkontroll ansluten"},"settings":{"title":"Inställningar","done":"Klar","sound":"Ljud","volume":"Volym","reduceMotion":"Minska rörelse","vibration":"Vibration","statistics":"Spelstatistik","on":"På","off":"Av","portalMuted":"Webbplatsen har stängt av ljudet."}}`),Y=[[`dra med höger musknapp`,`tryck länge och dra`],[`drar med höger musknapp`,`trycker länge och drar`],[`med höger musknapp`,`med ett långt tryck`],[`med vänster musknapp`,`med ett tryck`],[`med mittenknappen`,`med två fingrar`],[`höger musknapp`,`långt tryck`],[`vänster musknapp`,`tryck`],[`att högerklicka`,`att trycka länge`],[`kan högerklicka`,`kan trycka länge`],[`att högerdra`,`att trycka länge och dra`],[`ett högerklick`,`ett långt tryck`],[`högerklickar du`,`trycker du länge`],[`högerklickade`,`tryckte länge`],[`högerklickar`,`trycker länge`],[`högerklickat`,`tryckt länge`],[`högerklicka`,`tryck länge`],[`högerklick`,`långt tryck`],[`högerdrar`,`trycker länge och drar`],[`högerdra`,`tryck länge och dra`],[`att mittenklicka`,`att trycka med två fingrar`],[`ett mittenklick`,`ett tryck med två fingrar`],[`mittenklickar`,`trycker med två fingrar`],[`mittenklicka`,`tryck med två fingrar`],[`mittenklick`,`tryck med två fingrar`],[`att vänsterklicka`,`att trycka`],[`vänsterklickar`,`trycker`],[`vänsterklicka`,`tryck`],[`vänsterklick`,`tryck`],[`att dubbelklicka`,`att trycka två gånger`],[`dubbelklickar`,`trycker två gånger`],[`dubbelklicka`,`tryck två gånger`],[`dubbelklick`,`dubbeltryck`],[`att klicka`,`att trycka`],[`kan klicka`,`kan trycka`],[`klickade`,`tryckte`],[`klickar`,`trycker`],[`klickat`,`tryckt`],[`klicket`,`trycket`],[`klicken`,`trycken`],[`klicka`,`tryck`],[`klick`,`tryck`],[`muspekaren`,`fingret`],[`musen`,`fingret`]],X=JSON.parse(`{"4-way rotational symmetry needs a square grid":"Fyrvägs rotationssymmetri kräver ett kvadratiskt rutnät","A 2×2 grid is too small to make a puzzle from":"Ett 2×2-rutnät är för litet för att bli ett pussel","A cube rolling along a single row can never turn over all six faces":"En kub som rullar längs en enda rad kan aldrig vända alla sex sidorna","A given piece leaves the grid":"En given bit går utanför rutnätet","A jigsaw block is too big":"Ett pusselbitsblock är för stort","A jigsaw block is too small":"Ett pusselbitsblock är för litet","A killer cage is too big":"En killerbur är för stor","A killer cage is too small":"En killerbur är för liten","A wrapping puzzle needs a width and height of at least 3 to have a unique solution":"Ett runtomgående pussel behöver en bredd och höjd på minst 3 för att få en entydig lösning","All parameters must be whole numbers":"Alla parametrar måste vara heltal","Already solved":"Redan löst","An edge cannot join a point to itself":"En kant kan inte förbinda en punkt med sig själv","Angle offset out of bounds.":"Vinkelförskjutningen ligger utanför gränserna.","At least one grid dimension must be greater than zero":"Minst en av rutnätets dimensioner måste vara större än noll","At least one of width and height for this grid type must be at least {0}":"Minst en av bredden och höjden måste vara minst {0} för den här typen av rutnät","At least one of width and height must be greater than one":"Minst en av bredden och höjden måste vara större än ett","Bad character in grid description":"Ogiltigt tecken i rutnätets beskrivning","Bad mine layout in game description":"Ogiltig minplacering i spelbeskrivningen","Badly formatted move limit after grid description":"Felaktigt formaterad draggräns efter rutnätets beskrivning","Barrier probability must be a number between 0 and 1":"Sannolikheten för hinder måste vara ett tal mellan 0 och 1","Barrier probability must be between 0 and 1":"Sannolikheten för hinder måste vara mellan 0 och 1","Blue cells are placed where some faces could never reach them":"Blå rutor är placerade där vissa sidor aldrig kan nå dem","Both dimensions must be at least 2":"Båda dimensionerna måste vara minst 2","Both grid dimensions must be at least one":"Båda rutnätets dimensioner måste vara minst ett","Bridges per direction must be between 1 and {0}":"Antalet broar per riktning måste vara mellan 1 och {0}","Can't create {0}×{1} puzzles":"Det går inte att skapa pussel i storleken {0}×{1}","Clue did not provide 2 direction flags":"Ledtråden angav inte två riktningsflaggor","Clue is larger than the number of sides of its face":"Ledtråden är större än antalet sidor på dess yta","Clue is missing its number":"Ledtråden saknar sitt tal","Clue number out of range":"Ledtrådens tal ligger utanför intervallet","Colour out of range":"Färgen ligger utanför intervallet","Colour out of range in grid description":"Färg utanför intervallet i rutnätets beskrivning","Colours, pegs and guesses must be whole numbers":"Färger, pinnar och gissningar måste vara heltal","Column counts inconsistent":"Kolumnantalen stämmer inte överens","Could not four-colour the map":"Det gick inte att färglägga kartan med fyra färger","Count is larger than the line it describes":"Antalet är större än linjen det beskriver","Description contains a duplicate number":"Beskrivningen innehåller ett tal två gånger","Description contains a number larger than the grid":"Beskrivningen innehåller ett tal som är större än rutnätet","Description contains a number out of range":"Beskrivningen innehåller ett tal utanför intervallet","Description contains a number that is too large":"Beskrivningen innehåller ett tal som är för stort","Description contains a repeated number":"Beskrivningen innehåller ett upprepat tal","Description contains an unexpected character":"Beskrivningen innehåller ett oväntat tecken","Description contains invalid characters":"Beskrivningen innehåller ogiltiga tecken","Description is corrupted":"Beskrivningen är skadad","Description is longer than expected":"Beskrivningen är längre än väntat","Description is shorter than expected":"Beskrivningen är kortare än väntat","Description is too long":"Beskrivningen är för lång","Description is too short":"Beskrivningen är för kort","Description marks cells beyond the grid as blue":"Beskrivningen markerar rutor utanför rutnätet som blå","Description may only contain P, H and O":"Beskrivningen får bara innehålla P, H och O","Description must be a comma-separated list of numbers":"Beskrivningen måste vara en kommaseparerad lista med tal","Description must be exactly {0} characters":"Beskrivningen måste vara exakt {0} tecken lång","Description must be hex digits, a comma and a cell number":"Beskrivningen måste bestå av hexadecimala siffror, ett kommatecken och ett rutnummer","Description must be numbers each followed by an orientation letter (u, l, d or r)":"Beskrivningen måste bestå av tal som vart och ett följs av en riktningsbokstav (u, l, d eller r)","Description must be two hex strings separated by a comma":"Beskrivningen måste vara två hexadecimala strängar åtskilda av ett kommatecken","Description must be {0} hexadecimal digits":"Beskrivningen måste bestå av {0} hexadecimala siffror","Description must contain at least one edge":"Beskrivningen måste innehålla minst en kant","Description must contain at least one peg":"Beskrivningen måste innehålla minst en pinne","Description must contain at least two islands":"Beskrivningen måste innehålla minst två öar","Description must contain each number from 1 to {0} exactly once":"Beskrivningen måste innehålla varje tal från 1 till {0} exakt en gång","Description must contain each row number from 1 to {0} exactly {1} times":"Beskrivningen måste innehålla varje radnummer från 1 till {0} exakt {1} gånger","Description must contain only digits":"Beskrivningen får bara innehålla siffror","Description must contain only numbers":"Beskrivningen får bara innehålla tal","Description must contain {0} numbers":"Beskrivningen måste innehålla {0} tal","Description must contain {0} tiles":"Beskrivningen måste innehålla {0} brickor","Description must mark exactly {0} cells blue":"Beskrivningen måste markera exakt {0} rutor som blå","Description must start with {0} hex digits":"Beskrivningen måste börja med {0} hexadecimala siffror","Description places two islands next to each other":"Beskrivningen placerar två öar bredvid varandra","Description repeats a colour although duplicates are disallowed":"Beskrivningen upprepar en färg trots att dubbletter inte är tillåtna","Description too long":"Beskrivningen är för lång","Description too long for board size":"Beskrivningen är för lång för spelplanens storlek","Description too short":"Beskrivningen är för kort","Description too short for board size":"Beskrivningen är för kort för spelplanens storlek","Digits in a {0}×{1} puzzle cannot exceed {2}":"Siffrorna i ett {0}×{1}-pussel kan inte vara större än {2}","Disallowing duplicates requires at least as many colours as pegs":"Om dubbletter inte tillåts krävs minst lika många färger som pinnar","Domino descriptions inconsistent":"Dominobeskrivningarna stämmer inte överens","Dots too close together":"Punkterna ligger för nära varandra","Duplicate edge in game description":"Dubblerad kant i spelbeskrivningen","Edge list defines the wrong number of regions":"Kantlistan ger fel antal områden","Entrance square must contain a piece leaving the left edge":"Ingångsrutan måste innehålla en bit som går ut genom vänsterkanten","Every killer cage must have exactly one sum":"Varje killerbur måste ha exakt en summa","Exit square must contain a piece leaving the bottom edge":"Utgångsrutan måste innehålla en bit som går ut genom nederkanten","Expansion factor must be a number":"Expansionsfaktorn måste vara ett tal","Expansion factor may not be negative":"Expansionsfaktorn får inte vara negativ","Expansion factor must be from 0 to 100":"Expansionsfaktorn måste vara från 0 till 100","Expected ',' after block structure description":"Förväntade ',' efter blockstrukturen","Expected ',' after grid description":"Förväntade ',' efter rutnätets beskrivning","Expected a list of edges like 0-1,1-2 in game description":"Förväntade en lista med kanter som 0-1,1-2 i spelbeskrivningen","Expected comma before clue list":"Förväntade ett kommatecken före listan med ledtrådar","Expected jigsaw block structure in game description":"Förväntade en struktur för pusselbitsblock i spelbeskrivningen","Expected killer cage structure in game description":"Förväntade en struktur för killerburar i spelbeskrivningen","Expected killer clue grid in game description":"Förväntade ett rutnät med killerledtrådar i spelbeskrivningen","Expected slashes between clues":"Förväntade snedstreck mellan ledtrådarna","Expecting number in game description":"Förväntade ett tal i spelbeskrivningen","Extra moves must not be negative":"Antalet extra drag får inte vara negativt","Extreme puzzles with more than {0} symbols take too long to generate":"Extrema pussel med fler än {0} symboler tar för lång tid att skapa","Faulty game description":"Felaktig spelbeskrivning","Flags contradicting each other":"Flaggorna motsäger varandra","Flags go off grid":"Flaggorna går utanför rutnätet","Game ID must include parameters":"Spel-id:t måste innehålla parametrar","Game description contained unexpected characters":"Spelbeskrivningen innehöll oväntade tecken","Game description contains an unexpected character":"Spelbeskrivningen innehåller ett oväntat tecken","Game description contains no dots":"Spelbeskrivningen innehåller inga punkter","Game description contains unexpected characters":"Spelbeskrivningen innehåller oväntade tecken","Game description has {0} balls; expected {1}":"Spelbeskrivningen har {0} kulor; {1} förväntades","Game description is corrupted":"Spelbeskrivningen är skadad","Game description is longer than expected":"Spelbeskrivningen är längre än väntat","Game description is shorter than expected":"Spelbeskrivningen är kortare än väntat","Game description is the wrong length":"Spelbeskrivningen har fel längd","Game description is too long":"Spelbeskrivningen är för lång","Game description is too short":"Spelbeskrivningen är för kort","Game description is wrong length":"Spelbeskrivningen har fel längd","Game description longer than expected":"Spelbeskrivningen är längre än väntat","Game description must be hexadecimal":"Spelbeskrivningen måste vara hexadecimal","Game description shorter than expected":"Spelbeskrivningen är kortare än väntat","Game description too long":"Spelbeskrivningen är för lång","Game is already solved":"Spelet är redan löst","Grid area must be at least six squares":"Rutnätets yta måste vara minst sex rutor","Grid area must be greater than 1":"Rutnätets yta måste vara större än 1","Grid area must be greater than one":"Rutnätets yta måste vara större än ett","Grid description is the wrong length or not hexadecimal":"Rutnätets beskrivning har fel längd eller är inte hexadecimal","Grid description strings not used with this grid type":"Rutnätsbeskrivningar används inte med den här rutnätstypen","Grid dimensions cannot be negative":"Rutnätets dimensioner kan inte vara negativa","Grid dimensions must be at most {0}":"Rutnätets dimensioner får vara högst {0}","Grid dimensions must be whole numbers":"Rutnätets dimensioner måste vara heltal","Grid is too big":"Rutnätet är för stort","Grid must contain at least two squares":"Rutnätet måste innehålla minst två rutor","Grid size must be between 3 and 9":"Rutnätets storlek måste vara mellan 3 och 9","Grid size must be between {0} and {1}":"Rutnätets storlek måste vara mellan {0} och {1}","Hard and Extreme puzzles are limited to a maximum number of {0}":"Svåra och extrema pussel är begränsade till högsta talet {0}","Height must be at least 3":"Höjden måste vara minst 3","Height must be at least five":"Höjden måste vara minst fem","Height must be at least one":"Höjden måste vara minst ett","Height must be at least the rotating block size":"Höjden måste vara minst lika stor som det roterande blocket","Height must be at least two":"Höjden måste vara minst två","Illegal grid type":"Ogiltig typ av rutnät","Incorrect number balance in game description":"Felaktig balans mellan talen i spelbeskrivningen","Initial x-coordinate was out of range":"Startkoordinaten x låg utanför intervallet","Initial y-coordinate was out of range":"Startkoordinaten y låg utanför intervallet","Internal error: solution is badly formatted":"Internt fel: lösningen är felaktigt formaterad","Invalid character in block structure specification":"Ogiltigt tecken i beskrivningen av blockstrukturen","Invalid character in game description":"Ogiltigt tecken i spelbeskrivningen","Invalid character in grid specification":"Ogiltigt tecken i rutnätets beskrivning","Invalid character in number list":"Ogiltigt tecken i tallistan","Invalid characters in game description":"Ogiltiga tecken i spelbeskrivningen","Invalid format grid description string.":"Felaktigt formaterad beskrivning av rutnätet.","Invalid parameters: {0}":"Ogiltiga parametrar: {0}","Invalid syntax in game description":"Ogiltig syntax i spelbeskrivningen","Jigsaw puzzles with more than {0} symbols take too long to generate":"Pussel med pusselbitar och fler än {0} symboler tar för lång tid att skapa","Killer puzzle dimensions must be smaller than 10":"Killerpussel måste vara mindre än 10 i storlek","Malformed pending game description":"Felaktigt formaterad väntande spelbeskrivning","Matrix description is the wrong length or not hexadecimal":"Matrisbeskrivningen har fel längd eller är inte hexadecimal","Maximum face number must be a whole number":"Högsta tal på dominobrickorna måste vara ett heltal","Maximum face number must be at least one":"Högsta tal på dominobrickorna måste vara minst ett","Maximum face number must be at most {0}":"Högsta tal på dominobrickorna får vara högst {0}","Maximum of 9 colours":"Högst 9 färger","Medium puzzles need more than one bridge per direction, or loops disallowed":"Pussel på nivån Medel kräver mer än en bro per riktning, eller att slingor inte tillåts","Mines solver opened a mine: inconsistent knowledge":"Minröjningslösaren öppnade en mina: motsägelsefull kunskap","Minimum number of balls may not be greater than maximum":"Minsta antalet kulor får inte vara större än högsta","Missing grid description string.":"Beskrivning av rutnätet saknas.","Missing separator":"Avgränsare saknas","Monster numbers do not match grid spaces":"Antalet monster stämmer inte med de tomma rutorna i rutnätet","More than one starting square specified":"Mer än en startruta har angetts","Multiple solutions exist for this puzzle":"Det här pusslet har flera lösningar","Must have at least five regions":"Det måste finnas minst fem områden","Must have at least one guess":"Det måste finnas minst en gissning","Must have between {0} and {1} colours":"Antalet färger måste vara mellan {0} och {1}","No game set up to solve":"Inget spel att lösa","No gems specified":"Inga ädelstenar angivna","No solution exists for this position":"Det finns ingen lösning från den här ställningen","No solution exists for this puzzle":"Det här pusslet har ingen lösning","No solution found":"Ingen lösning hittades","No starting square specified":"Ingen startruta har angetts","Not enough data in block structure specification":"För lite data i beskrivningen av blockstrukturen","Not enough data in grid description":"För lite data i rutnätets beskrivning","Not enough data to fill grid":"För lite data för att fylla rutnätet","Not enough grid space to place all blue faces":"Det finns inte plats i rutnätet för alla blå sidor","Not enough jigsaw blocks":"För få pusselbitsblock","Not enough killer cages":"För få killerburar","Not enough numbers given after grid specification":"För få tal efter rutnätets beskrivning","Not enough space to place the solid on an empty cell":"Det finns inte plats att ställa kroppen på en tom ruta","Number of colours must be at least three":"Antalet färger måste vara minst tre","Number of colours must be at least two":"Antalet färger måste vara minst två","Number of points must be a whole number":"Antalet punkter måste vara ett heltal","Number of points must be at least {0}":"Antalet punkter måste vara minst {0}","Number of points must be at most {0}":"Antalet punkter får vara högst {0}","Number of shuffling moves cannot be negative":"Antalet blandningsdrag kan inte vara negativt","Number of shuffling moves must be a whole number":"Antalet blandningsdrag måste vara ett heltal","Number of shuffling moves must be at most 10000":"Antalet blandningsdrag får vara högst 10000","Number of shuffling moves must be at most {0}":"Antalet blandningsdrag får vara högst {0}","Number out of range in game description":"Tal utanför intervallet i spelbeskrivningen","Number too large":"Talet är för stort","Out-of-range number in game description":"Tal utanför intervallet i spelbeskrivningen","Out-of-range number in grid description":"Tal utanför intervallet i rutnätets beskrivning","Parameters must be whole numbers":"Parametrarna måste vara heltal","Patch coordinates do not identify a usable grid fragment":"Utsnittets koordinater motsvarar ingen användbar del av rutnätet","Patch offset out of bounds.":"Utsnittets förskjutning ligger utanför gränserna.","Percentage of black squares must be between 5% and 100%":"Andelen svarta rutor måste vara mellan 5 % och 100 %","Percentage of islands must be from 1% to 30%":"Andelen öar måste vara från 1 % till 30 %","Puzzle is inconsistent":"Pusslet är motsägelsefullt","Puzzle is too large":"Pusslet är för stort","Puzzle is too long for unique-rows mode":"Pusslet är för brett för läget med unika rader","Puzzle is too tall for unique-rows mode":"Pusslet är för högt för läget med unika rader","Puzzle is unsolvable":"Pusslet går inte att lösa","Puzzle must have one entrance and one exit":"Pusslet måste ha en ingång och en utgång","Puzzles with more than {0} symbols take too long to generate":"Pussel med fler än {0} symboler tar för lång tid att skapa","Random seed must not be empty":"Slumpfröet får inte vara tomt","Rotating block size must be at least two":"Det roterande blocket måste vara minst två stort","Row counts inconsistent":"Radantalen stämmer inte överens","Rows of blocks must be at least 1":"Antalet rader av block måste vara minst 1","Scoring system not recognised":"Poängsystemet känns inte igen","Size and difficulty must be whole numbers":"Storlek och svårighetsgrad måste vara heltal","Size must be at least 5 for Adjacent puzzles of this difficulty":"Storleken måste vara minst 5 för Grannar-pussel med den här svårighetsgraden","Size must be between {0} and {1}":"Storleken måste vara mellan {0} och {1}","Solution not known for this puzzle":"Lösningen på det här pusslet är okänd","Solve operation failed":"Det gick inte att lösa","Solve operation produced an invalid move":"Lösningen gav ett ogiltigt drag","Solver could not finish this grid":"Lösaren kunde inte slutföra det här rutnätet","Solving algorithm cannot complete this puzzle":"Lösningsalgoritmen kan inte slutföra det här pusslet","Starting cell is outside the grid":"Startrutan ligger utanför rutnätet","Subtraction and division blocks must have area 2":"Subtraktions- och divisionsburar måste ha storleken 2","That grid has too many faces to generate":"Det rutnätet har för många ytor för att kunna skapas","The Cross board is only available at {0}×{1}":"Korsspelplanen finns bara i storleken {0}×{1}","The Octagon board is only available at {0}×{1}":"Oktagonspelplanen finns bara i storleken {0}×{1}","The ball has hit a mine; undo that move first":"Kulan har träffat en mina; ångra det draget först","The grid can have at most {0} squares":"Rutnätet får ha högst {0} rutor","The grid may have at most {0} squares":"Rutnätet får ha högst {0} rutor","The initial square contains a mine":"Startrutan innehåller en mina","The solid cannot start on a blue cell":"Kroppen kan inte starta på en blå ruta","The solution has already been revealed":"Lösningen har redan visats","There must be at least one ball":"Det måste finnas minst en kula","There must be at least one mine":"Det måste finnas minst en mina","This arrangement cannot be solved":"Den här uppställningen går inte att lösa","This game does not support the Solve operation":"Det här spelet har inte stöd för att lösas","This puzzle has no solution":"Det här pusslet har ingen lösning","This puzzle instance contains a contradiction":"Det här pusslet innehåller en motsägelse","This puzzle is not self-consistent":"Det här pusslet är inte konsekvent","Too few clues for block structure":"För få ledtrådar för blockstrukturen","Too few clues for grid size":"För få ledtrådar för rutnätets storlek","Too little data in clue list":"För lite data i listan med ledtrådar","Too little data in edge list":"För lite data i kantlistan","Too many balls to fit in the grid":"För många kulor för att få plats i rutnätet","Too many clues for block structure":"För många ledtrådar för blockstrukturen","Too many clues for grid size":"För många ledtrådar för rutnätets storlek","Too many colours (at most {0})":"För många färger (högst {0})","Too many colours makes given grid size impossible":"Med för många färger går rutnätets storlek inte att använda","Too many guesses (at most {0})":"För många gissningar (högst {0})","Too many jigsaw blocks":"För många pusselbitsblock","Too many killer cages":"För många killerburar","Too many mines for grid size":"För många minor för rutnätets storlek","Too many pegs per guess (at most {0})":"För många pinnar per gissning (högst {0})","Too many regions to fit in grid":"För många områden för att få plats i rutnätet","Too much data in block structure specification":"För mycket data i beskrivningen av blockstrukturen","Too much data in clue list":"För mycket data i listan med ledtrådar","Too much data in edge list":"För mycket data i kantlistan","Too much data to fill grid":"För mycket data för att fylla rutnätet","Too much data to fit in grid":"För mycket data för att få plats i rutnätet","Trivial solutions are uninteresting":"Triviala lösningar är ointressanta","Unable to build a grid for these parameters":"Det gick inte att bygga ett rutnät med de här parametrarna","Unable to build this grid":"Det gick inte att bygga det här rutnätet","Unable to find a solution for this puzzle":"Det gick inte att hitta en lösning på det här pusslet","Unable to find a solution from this position":"Det gick inte att hitta en lösning från den här ställningen","Unable to find a solution to this puzzle":"Det gick inte att hitta en lösning på det här pusslet","Unable to find a unique solution for this puzzle":"Det gick inte att hitta en entydig lösning på det här pusslet","Unable to generate a puzzle of this size":"Det gick inte att skapa ett pussel i den här storleken","Unable to generate a puzzle with these parameters":"Det gick inte att skapa ett pussel med de här parametrarna","Unable to solve this puzzle":"Det gick inte att lösa det här pusslet","Unable to support more than {0} distinct symbols":"Högst {0} olika symboler stöds","Unable to work out any more of this puzzle":"Det går inte att komma längre i det här pusslet","Unexpected additional character at end of game description":"Oväntat extra tecken i slutet av spelbeskrivningen","Unexpected additional data at end of game description":"Oväntade extra data i slutet av spelbeskrivningen","Unexpected character '{0}' in description":"Oväntat tecken '{0}' i beskrivningen","Unexpected character in clue list":"Oväntat tecken i listan med ledtrådar","Unexpected character in edge list":"Oväntat tecken i kantlistan","Unexpected data at end of game description":"Oväntade data i slutet av spelbeskrivningen","Unknown board type":"Okänd typ av spelplan","Unknown character in description":"Okänt tecken i beskrivningen","Unknown difficulty":"Okänd svårighetsgrad","Unknown difficulty level":"Okänd svårighetsnivå","Unknown difficulty rating":"Okänd svårighetsklassning","Unknown shape type":"Okänd formtyp","Unknown symmetry":"Okänd symmetri","Unknown symmetry type":"Okänd typ av symmetri","Unrecognised character in game description":"Okänt tecken i spelbeskrivningen","Unrecognised characters in game description":"Okända tecken i spelbeskrivningen","Unrecognised clue type":"Okänd typ av ledtråd","Unrecognised grid description.":"Okänd rutnätsbeskrivning.","Unrecognised solid type":"Okänd typ av kropp","Width and height cannot both be two":"Bredden och höjden kan inte båda vara två","Width and height for this grid type must both be at least {0}":"Bredden och höjden måste båda vara minst {0} för den här typen av rutnät","Width and height must be at least two":"Bredden och höjden måste vara minst två","Width and height must be at least {0}":"Bredden och höjden måste vara minst {0}","Width and height must be at most twelve":"Bredden och höjden får vara högst tolv","Width and height must be at most {0}":"Bredden och höjden får vara högst {0}","Width and height must be at most {0} to generate a puzzle":"Bredden och höjden får vara högst {0} för att ett pussel ska kunna skapas","Width and height must be positive":"Bredden och höjden måste vara positiva","Width and height must be whole numbers":"Bredden och höjden måste vara heltal","Width and height must both be at least 3":"Bredden och höjden måste båda vara minst 3","Width and height must both be at least four":"Bredden och höjden måste båda vara minst fyra","Width and height must both be at least one":"Bredden och höjden måste båda vara minst ett","Width and height must both be at least two":"Bredden och höjden måste båda vara minst två","Width and height must both be even":"Bredden och höjden måste båda vara jämna","Width and height must both be greater than three":"Bredden och höjden måste båda vara större än tre","Width and height must both be greater than two":"Bredden och höjden måste båda vara större än två","Width and height must both be greater than zero":"Bredden och höjden måste båda vara större än noll","Width and height must both be positive":"Bredden och höjden måste båda vara positiva","With three colours, a solvable grid may have at most {0} squares":"Med tre färger får ett lösbart rutnät ha högst {0} rutor","Width must be at least 3":"Bredden måste vara minst 3","Width must be at least five":"Bredden måste vara minst fem","Width must be at least one":"Bredden måste vara minst ett","Width must be at least the rotating block size":"Bredden måste vara minst lika stor som det roterande blocket","Width must be at least two":"Bredden måste vara minst två","Width, height and ball counts must be whole numbers":"Bredd, höjd och antal kulor måste vara heltal","Width, height and difficulty must be whole numbers":"Bredd, höjd och svårighetsgrad måste vara heltal","Width, height and number of colours must be whole numbers":"Bredd, höjd och antal färger måste vara heltal","Width, height, block size and move count must be whole numbers":"Bredd, höjd, blockstorlek och antal drag måste vara heltal","X puzzles need at least four symbols":"X-pussel kräver minst fyra symboler","X-diagonal jigsaw puzzles with more than {0} symbols take too long to generate":"Pussel med pusselbitar, X-diagonal och fler än {0} symboler tar för lång tid att skapa","You have hit a mine; undo that move first":"Du har gått på en mina; ångra det draget först","a cell may be a number position for only one rectangle":"en ruta kan vara talets plats för bara en rektangel","at least one column contains more numbers than will fit":"minst en kolumn innehåller fler tal än som får plats","at least one row contains more numbers than will fit":"minst en rad innehåller fler tal än som får plats","cells are not adjacent":"rutorna ligger inte intill varandra","domino layout: no path between singletons":"dominouppläggning: ingen väg mellan ensamma rutor","domino layout: stranded square cannot be paired":"dominouppläggning: en isolerad ruta kan inte paras ihop","dot touches the outside twice":"punkten nuddar utsidan två gånger","dot with fewer than two edges":"punkt med färre än två kanter","edge does not follow its face":"kanten följer inte sin yta","edge shared by three faces":"kant som delas av tre ytor","expected CxR or Nj":"förväntade CxR eller Nj","expected WxH":"förväntade WxH","expected WxHnN":"förväntade WxHnN","expected a grid size":"förväntade en storlek på rutnätet","expected a maximum number":"förväntade ett högsta tal","expected a number of points":"förväntade ett antal punkter","expected a solid letter followed by WxH":"förväntade en bokstav för kroppen följd av WxH","expected something like c6p4g10Bm":"förväntade något i stil med c6p4g10Bm","expected w<W>h<H>m<MIN>M<MAX>":"förväntade w<W>h<H>m<MIN>M<MAX>","generateKeen: solver disagrees with the square":"generateKeen: lösaren håller inte med om kvadraten","grid inconsistency while walking round a face":"inkonsekvens i rutnätet vid gång runt en yta","inconsistent clues while assembling":"motsägelsefulla ledtrådar vid sammansättningen","inconsistent distance field":"inkonsekvent avståndsfält","inconsistent face classes":"inkonsekventa ytklasser","latin rectangle could not be extended":"den latinska rektangeln kunde inte utökas","latinGenerate: no extension found":"latinGenerate: ingen utökning hittades","latinSquare: rectangle could not be extended":"latinSquare: rektangeln kunde inte utökas","line too long for solver":"linjen är för lång för lösaren","no clue left to place":"ingen ledtråd kvar att placera","no such laser: {0}":"ingen sådan laser: {0}","rolled solid does not fit its destination":"den rullade kroppen passar inte på sin destination","shown":"visad","too few row/column specifications":"för få rad-/kolumnangivelser","too many row/column specifications":"för många rad-/kolumnangivelser","unrecognised character in game description":"okänt tecken i spelbeskrivningen","yes!":"ja!","9×9 Extreme puzzles take too long to generate; try 8×8 or Expert":"9×9-pussel på nivån Extrem tar för lång tid att skapa; prova 8×8 eller Expert"}`),Z={moves:`Drag: {n}`,movesCompleted:{one:`Klart på {n} drag`,other:`Klart på {n} drag`},movesSinceSolve:`Drag sedan automatisk lösning: {n}`,completedMoves:`Klart! Drag: {n}`,solvedByComputer:`Löst av datorn`,completed:`Klart!`,completedPrefix:`Klart! `,autoSolved:`Automatiskt löst.`,autoSolvedPrefix:`Automatiskt löst. `,autoSolverUsedPrefix:`Automatisk lösning använd. `,failedPrefix:`Slut på drag. `,dead:`Du gick på en mina.`,target:` (mål {n})`},Q=JSON.parse(`{"blackbox":{"name":"Svarta lådan","description":"Hitta de gömda kulorna genom att skjuta in laserstrålar i lådan och se var de kommer ut.","preset":{"5x5_3_balls":"5×5, 3 kulor","8x8_5_balls":"8×8, 5 kulor","8x8_3_6_balls":"8×8, 3–6 kulor","10x10_5_balls":"10×10, 5 kulor","10x10_4_10_balls":"10×10, 4–10 kulor"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"no_of_balls":{"name":"Antal kulor"}},"achievement":{"sparing_shots":{"name":"Sparsamma skott","description":"Hitta alla kulor och skjut laserstrålar från högst hälften av portarna."},"pinpoint":{"name":"Pricksäker","description":"Hitta alla kulor i en låda på 8×8 eller större med högst tre laserstrålar per kula."},"shot_in_the_dark":{"name":"Skott i mörkret","description":"Låt kontrollera dina kulor utan att skjuta en enda laserstråle, och ha fel."}},"status":{"correct":"RÄTT!","wrong":{"one":"{wrong} fel och {n} missad kula.","other":"{wrong} fel och {n} missade kulor."},"marked":"Markerade kulor: {n} / {range}  ·  Skjutna laserstrålar: {fired}","tooMany":"  ·  {n} kulor för mycket markerade.","check":"  ·  Klicka på hörnknappen för att kontrollera."}},"bridges":{"name":"Broar","alsoKnownAs":"Hashiwokakero, Hashi","description":"Förbind öarna med broar så att varje tal stämmer och inget korsar något annat.","preset":{"7x7_easy":"7×7 Lätt","7x7_medium":"7×7 Medel","7x7_hard":"7×7 Svår","10x10_easy":"10×10 Lätt","10x10_medium":"10×10 Medel","10x10_hard":"10×10 Svår","15x15_easy":"15×15 Lätt","15x15_medium":"15×15 Medel","15x15_hard":"15×15 Svår","10x10_medium_no_loops":"10×10 Medel, inga slingor"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"difficulty":{"name":"Svårighetsgrad","choice":{"easy":"Lätt","medium":"Medel","hard":"Svår"}},"allow_loops":{"name":"Tillåt slingor"},"max_bridges_per_direction":{"name":"Max. antal broar per riktning","choice":{"1":"1","2":"2","3":"3","4":"4"}},"of_island_squares":{"name":"% rutor med ö","choice":{"5":"5 %","10":"10 %","15":"15 %","20":"20 %","25":"25 %","30":"30 %"}},"expansion_factor":{"name":"Expansionsfaktor (%)","choice":{"0":"0 %","10":"10 %","20":"20 %","30":"30 %","40":"40 %","50":"50 %","60":"60 %","70":"70 %","80":"80 %","90":"90 %","100":"100 %"}}},"action":{"g":{"label":"Hjälplinjer","title":"Visa eller dölj en svag linje överallt där en bro skulle kunna gå (G)"},"e":{"label":"Sudda","title":"Dra från en ö för att ta bort broarna åt det hållet (E)"}},"achievement":{"no_markers":{"name":"Klart vatten","description":"Lös ett pussel på 10×10 eller större utan att rita en enda ”ingen bro”-markering."},"sure_footing":{"name":"Stadigt fotfäste","description":"Lös ett Svårt pussel på 10×10 eller större utan att ta bort en bro eller använda Ångra."}}},"cube":{"name":"Kub","description":"Rulla en kropp runt rutnätet och plocka upp varje blå ruta på dess sidor.","preset":{"cube":"Kub","tetrahedron":"Tetraeder","octahedron":"Oktaeder","icosahedron":"Ikosaeder"},"config":{"type_of_solid":{"name":"Typ av kropp","choice":{"tetrahedron":"Tetraeder","cube":"Kub","octahedron":"Oktaeder","icosahedron":"Ikosaeder"}},"width_top":{"name":"Bredd / överkant"},"height_bottom":{"name":"Höjd / nederkant"}},"achievement":{"short_haul":{"name":"Kort tur","description":"Gör alla sidor på Kuben blå på högst tjugo rullningar."},"octahedron_ace":{"name":"Åtta sidor i flygfart","description":"Gör alla sidor på Oktaedern blå på högst trettio rullningar."},"scenic_route":{"name":"Den stora rundturen","description":"Rulla kroppen minst tvåhundra gånger innan alla sidor är blå."}}},"dominosa":{"name":"Dominosa","description":"Ta reda på var den blandade uppsättningen dominobrickor ligger i ett rutnät av tal.","preset":{"up_to_double_3":"Upp till dubbel-3","up_to_double_4":"Upp till dubbel-4","up_to_double_5":"Upp till dubbel-5","up_to_double_6":"Upp till dubbel-6","up_to_double_7":"Upp till dubbel-7","up_to_double_8":"Upp till dubbel-8","up_to_double_9":"Upp till dubbel-9"},"config":{"maximum_number_on_dominoes":{"name":"Högsta tal på dominobrickorna"},"difficulty":{"name":"Svårighetsgrad","choice":{"very_easy":"Mycket lätt","easy":"Lätt","hard":"Svår","extreme":"Extrem","ambiguous":"Tvetydig"}}},"achievement":{"no_lines":{"name":"Ingen penna behövs","description":"Lös en sats på dubbel-6 eller större utan att anteckna en enda linje."},"one_click_each":{"name":"Ett klick per bricka","description":"Lös en sats på dubbel-6 eller större med ett klick per dominobricka och utan Ångra."},"doubles_first":{"name":"Dubbletter först","description":"Lägg alla dubbletter i satsen innan du lägger någon annan dominobricka."}}},"fifteen":{"name":"Femton","alsoKnownAs":"Femtonspelet, 15-pussel, glidpussel","description":"Skjut runt brickorna tills de ligger i ordning.","preset":{"3x3":"3×3","4x4":"4×4","5x5":"5×5"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"}},"achievement":{"short_shuffle":{"name":"Kort blandning","description":"Få ordning på 4×4 på 100 drag eller färre."},"five_flyer":{"name":"Fem gånger fem i flygfart","description":"Få ordning på 5×5 på under tre minuter."},"scenic_route":{"name":"Omvägen","description":"Använd mer än 300 drag för att få ordning på 3×3."}}},"filling":{"name":"Fyllning","alsoKnownAs":"Fillomino","description":"Fyll rutnätet så att varje grupp av lika siffror består av exakt så många rutor.","preset":{"9x7":"9×7","13x9":"13×9","17x13":"17×13"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"}},"action":{"f":{"label":"Fyll","title":"Dra från en siffra för att skriva in den i varje ruta du passerar (F)"}},"achievement":{"in_ink":{"name":"Skrivet med bläck","description":"Lös Fyllning utan att ändra eller sudda ut någon siffra, och utan Ångra."},"one_stroke":{"name":"Allt i ett svep","description":"Lös Fyllning på 13×9 eller större och skriv varje grupp siffror i ett enda drag."}}},"flip":{"name":"Vänd","alsoKnownAs":"Lights Out","description":"Tänd varje ruta – varje tryck vänder också rutorna runt omkring.","preset":{"3x3_crosses":"3×3 Kors","4x4_crosses":"4×4 Kors","5x5_crosses":"5×5 Kors","3x3_random":"3×3 Slumpmässig","4x4_random":"4×4 Slumpmässig","5x5_random":"5×5 Slumpmässig"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"shape_type":{"name":"Formtyp","choice":{"crosses":"Kors","random":"Slumpmässig"}}},"achievement":{"press_once":{"name":"Tryck en gång","description":"Tänd en spelplan på 4×4 eller större utan att trycka på någon ruta två gånger."},"fewest_presses":{"name":"Minsta möda","description":"Tänd en 5×5-spelplan med så få tryck som det över huvud taget går."}}},"flood":{"name":"Översvämning","alsoKnownAs":"Flood It","description":"Översvämma rutnätet från hörnet tills allt har samma färg, inom draggränsen.","preset":{"12x12_easy":"12×12 Lätt","12x12_medium":"12×12 Medel","12x12_hard":"12×12 Svår","16x16_medium":"16×16 Medel","16x16_hard":"16×16 Svår","12x12_3_colours":"12×12, 3 färger","12x12_4_colours":"12×12, 4 färger"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"colours":{"name":"Färger"},"extra_moves_permitted":{"name":"Tillåtna extra drag"}},"achievement":{"spare_moves":{"name":"Drag över","description":"Fyll rutnätet med minst tre drag till godo."},"beat_the_solver":{"name":"Slå maskinen","description":"Fyll rutnätet på färre drag än datorns egen lösning."},"one_colour_short":{"name":"En färg för mycket","description":"Få slut på drag med bara två färger kvar på rutnätet."}},"status":{"moves":"{n} / {limit} drag"}},"galaxies":{"name":"Galaxer","alsoKnownAs":"Spiral Galaxies, Tentai Show","description":"Dela in rutnätet i områden som vart och ett är symmetriskt kring den enda punkten i det.","preset":{"7x7_medium":"7×7 Medel","7x7_extreme":"7×7 Extrem","10x10_medium":"10×10 Medel","15x15_medium":"15×15 Medel"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"difficulty":{"name":"Svårighetsgrad","choice":{"medium":"Medel","extreme":"Extrem"}}},"achievement":{"no_arrows":{"name":"Inga pekpinnar","description":"Lös Galaxer på 10×10 eller större utan att dra ut en enda pil."},"steady_hand":{"name":"Fixstjärnor","description":"Lös Galaxer på 10×10 eller större utan att ta bort en vägg eller använda Ångra."}}},"guess":{"name":"Gissa","alsoKnownAs":"Mastermind","description":"Lista ut den dolda raden färgade pinnar utifrån markeringarna på dina gissningar.","preset":{"standard":"Standard","super":"Super"},"config":{"colours":{"name":"Färger"},"pegs_per_guess":{"name":"Pinnar per gissning"},"guesses":{"name":"Gissningar"},"allow_blanks":{"name":"Tillåt tomma platser"},"allow_duplicates":{"name":"Tillåt dubbletter"}},"action":{"l":{"label":"Bokstäver","title":"Märk pinnarna med bokstäver (L)"},"k":{"label":"Behåll","title":"Klicka på en pinne i din rad för att föra över den till nästa gissning (K)"}},"achievement":{"five_guesses":{"name":"Kodknäckare","description":"Hitta den dolda raden på fem gissningar eller färre."},"super_sleuth":{"name":"Mästerdetektiv","description":"Hitta den dolda Super-raden med fem pinnar på sex gissningar eller färre."},"so_near":{"name":"Så nära","description":"Få slut på gissningar med alla pinnar utom en på rätt plats."}},"status":{"revealed":"Lösningen visas","solved":{"one":"Löst på {n} gissning","other":"Löst på {n} gissningar"},"outOfGuesses":"Slut på gissningar: lösningen visas","guessN":"Gissning {n} av {total}"}},"inertia":{"name":"Tröghet","description":"Låt en kula glida runt rutnätet och samla alla ädelstenar utan att träffa en mina.","preset":{"10x8":"10×8","15x12":"15×12","20x16":"20×16"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"}},"achievement":{"hat_trick":{"name":"Hattrick","description":"Samla in tre ädelstenar eller fler med en enda rullning av kulan."},"shortcut":{"name":"Genväg","description":"Samla in alla ädelstenar på en spelplan på 15×12 eller större på färre rullningar än Lös skulle behöva."},"last_gem_mine":{"name":"Pyrrhusseger","description":"Rulla in på en mina med samma rullning som tar den allra sista ädelstenen."}},"status":{"gems":"Ädelstenar: {n}","deaths":" · Dödsfall: {n}"}},"keen":{"name":"Keen","alsoKnownAs":"KenKen, Calcudoku","description":"Fyll den latinska kvadraten så att varje bur uppfyller sin räkneledtråd.","preset":{"4x4_easy":"4×4 Lätt","5x5_easy":"5×5 Lätt","5x5_easy_x_only":"5×5 Lätt, bara ×","6x6_easy":"6×6 Lätt","6x6_medium":"6×6 Medel","6x6_medium_x_only":"6×6 Medel, bara ×","6x6_hard":"6×6 Svår","6x6_expert":"6×6 Expert","6x6_extreme":"6×6 Extrem","9x9_medium":"9×9 Medel"},"config":{"grid_size":{"name":"Rutnätets storlek"},"difficulty":{"name":"Svårighetsgrad","choice":{"easy":"Lätt","medium":"Medel","hard":"Svår","expert":"Expert","extreme":"Extrem"}},"multiplication_only":{"name":"Bara multiplikation"}},"action":{"m":{"label":"Kandidater","title":"Skriv in alla möjligheter som anteckningar i varje tom ruta (M)"},"l":{"label":"Framhäv","title":"Framhäv alla rutor med den siffra du senast rörde vid (L)"}},"achievement":{"no_pencil":{"name":"Huvudräkning","description":"Lös en Keen på 6×6 eller större utan att skriva en enda anteckning."},"products_only":{"name":"Ren produkt","description":"Lös en 6×6 Medel-Keen med bara multiplikation."}}},"lightup":{"name":"Lys upp","alsoKnownAs":"Akari","description":"Placera glödlampor så att varje ruta är upplyst och ingen lampa lyser på en annan.","preset":{"7x7_easy":"7×7 Lätt","7x7_medium":"7×7 Medel","7x7_hard":"7×7 Svår","10x10_easy":"10×10 Lätt","10x10_medium":"10×10 Medel","10x10_hard":"10×10 Svår","14x14_easy":"14×14 Lätt","14x14_medium":"14×14 Medel","14x14_hard":"14×14 Svår"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"of_black_squares":{"name":"% svarta rutor"},"symmetry":{"name":"Symmetri","choice":{"none":"Ingen","2_way_mirror":"Tvåvägs spegling","2_way_rotational":"Tvåvägs rotation","4_way_mirror":"Fyrvägs spegling","4_way_rotational":"Fyrvägs rotation"}},"difficulty":{"name":"Svårighetsgrad","choice":{"easy":"Lätt","medium":"Medel","hard":"Svår"}}},"action":{"x":{"label":"Kryss","title":"Klick sätter kryss i stället för lampor (X)"}},"achievement":{"no_crosses":{"name":"Bara ljus","description":"Lös Lys upp på 10×10 eller större utan att anteckna ett enda kryss."},"no_takebacks":{"name":"En ljus idé","description":"Lös en Svår Lys upp utan att någonsin ta bort en lampa."}}},"loopy":{"name":"Slingor","alsoKnownAs":"Slitherlink","description":"Rita en enda sluten slinga så att varje tal anger hur många linjer som omger det.","preset":{"7x7_squares_easy":"7×7 Kvadrater Lätt","10x10_squares_easy":"10×10 Kvadrater Lätt","7x7_squares_medium":"7×7 Kvadrater Medel","10x10_squares_medium":"10×10 Kvadrater Medel","7x7_squares_expert":"7×7 Kvadrater Expert","10x10_squares_expert":"10×10 Kvadrater Expert","10x10_triangular_expert":"10×10 Trianglar Expert","12x10_honeycomb_expert":"12×10 Bikaka Expert","7x7_snub_square_expert":"7×7 Snubbkvadrat Expert","9x9_cairo_expert":"9×9 Kairo Expert","5x4_great_hexagonal_expert":"5×4 Stor hexagonal Expert","7x7_octagonal_expert":"7×7 Oktagonal Expert","5x5_kites_expert":"5×5 Drakar Expert","5x5_floret_expert":"5×5 Blomma Expert","5x4_dodecagonal_expert":"5×4 Dodekagonal Expert","5x4_great_dodecagonal_expert":"5×4 Stor dodekagonal Expert","10x10_penrose_kite_dart_expert":"10×10 Penrose (drake/pil) Expert","10x10_penrose_rhombs_expert":"10×10 Penrose (romber) Expert"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"grid_type":{"name":"Typ av rutnät","choice":{"squares":"Kvadrater","triangular":"Trianglar","honeycomb":"Bikaka","snub_square":"Snubbkvadrat","cairo":"Kairo","great_hexagonal":"Stor hexagonal","octagonal":"Oktagonal","kites":"Drakar","floret":"Blomma","dodecagonal":"Dodekagonal","great_dodecagonal":"Stor dodekagonal","penrose_kite_dart":"Penrose (drake/pil)","penrose_rhombs":"Penrose (romber)"}},"difficulty":{"name":"Svårighetsgrad","choice":{"easy":"Lätt","medium":"Medel","hard":"Svår","expert":"Expert"}}},"action":{"x":{"label":"Kryss","title":"Klick kryssar över kanter i stället för att rita linjer (X)"}},"achievement":{"off_grid":{"name":"Utanför rutnätet","description":"Lös Slingor på en annan plattläggning än kvadrater."},"no_crosses":{"name":"Bara slingan","description":"Lös Slingor på 10×10 utan att kryssa över en enda kant."},"aperiodic":{"name":"Aperiodisk","description":"Lös Slingor med Penrose utan att någonsin ta bort en linje du ritat."}}},"magnets":{"name":"Magneter","description":"Placera magneter och tomma brickor i dominorutorna så att antalet poler stämmer.","preset":{"6x5_easy":"6×5 Lätt","6x5_hard":"6×5 Svår","6x5_hard_strip_clues":"6×5 Svår, gallrade ledtrådar","8x7_easy":"8×7 Lätt","8x7_hard":"8×7 Svår","8x7_hard_strip_clues":"8×7 Svår, gallrade ledtrådar","10x9_hard":"10×9 Svår","10x9_hard_strip_clues":"10×9 Svår, gallrade ledtrådar"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"difficulty":{"name":"Svårighetsgrad","choice":{"easy":"Lätt","hard":"Svår"}},"strip_clues":{"name":"Gallra ledtrådar"}},"action":{"b":{"label":"Tom","title":"Klick markerar dominobrickor som tomma i stället för att placera magneter (B)"}},"achievement":{"no_flips":{"name":"Rätt vänd","description":"Lös Magneter på 8×7 eller större utan att någonsin vända en magnet."},"stripped":{"name":"Avskalade trådar","description":"Lös Magneter på 10×9 Svår med gallrade ledtrådar på under tio minuter."}}},"map":{"name":"Karta","description":"Färglägg kartan med fyra färger så att inga två angränsande områden har samma färg.","preset":{"20x15_easy_30_regions":"20×15 Lätt, 30 områden","20x15_medium_30_regions":"20×15 Medel, 30 områden","20x15_hard_30_regions":"20×15 Svår, 30 områden","20x15_extreme_30_regions":"20×15 Extrem, 30 områden","30x25_medium_75_regions":"30×25 Medel, 75 områden","30x25_hard_75_regions":"30×25 Svår, 75 områden"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"regions":{"name":"Områden"},"difficulty":{"name":"Svårighetsgrad","choice":{"easy":"Lätt","medium":"Medel","hard":"Svår","extreme":"Extrem"}}},"action":{"l":{"label":"Nummer","title":"Visa ett nummer i varje område (L)"}},"achievement":{"no_dots":{"name":"Frihandsatlas","description":"Lös en Karta på Svår eller svårare utan en enda antecknad prick."},"steady_brush":{"name":"Stadig pensel","description":"Lös en Karta på Extrem utan att någonsin ändra ett områdes färg."}}},"mines":{"name":"Minröjning","alsoKnownAs":"Minesweeper","description":"Öppna varje ruta som inte är en mina – du behöver aldrig gissa.","preset":{"9x9_beginner_10_mines":"9×9 Nybörjare, 10 minor","9x9_35_mines":"9×9, 35 minor","16x16_intermediate_40_mines":"16×16 Medel, 40 minor","16x16_99_mines":"16×16, 99 minor","30x16_expert_99_mines":"30×16 Expert, 99 minor","30x16_170_mines":"30×16, 170 minor"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"mines":{"name":"Minor"},"ensure_solubility":{"name":"Garantera lösbarhet"}},"achievement":{"no_flags":{"name":"Flagglös","description":"Vinn en omgång Minröjning utan att sätta en enda flagga."},"expert_sweep":{"name":"Bombgruppen","description":"Vinn Expert-spelplanen på 30×16 på under fem minuter."},"so_close":{"name":"Så nära","description":"Kliv på en mina med högst tre säkra rutor kvar att öppna."}},"status":{"marked":"Markerade: {n} / {total}","deaths":" · Dödsfall: {n}"}},"net":{"name":"Nät","alsoKnownAs":"NetWalk","description":"Vrid brickorna tills alla är kopplade till mitten.","preset":{"5x5":"5×5","7x7":"7×7","9x9":"9×9","11x11":"11×11","13x11":"13×11","5x5_wrapping":"5×5 runtomgående","7x7_wrapping":"7×7 runtomgående","9x9_wrapping":"9×9 runtomgående","11x11_wrapping":"11×11 runtomgående","13x11_wrapping":"13×11 runtomgående"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"walls_wrap_around":{"name":"Kanterna går runt"},"barrier_probability":{"name":"Sannolikhet för hinder"},"ensure_unique_solution":{"name":"Garantera entydig lösning"}},"action":{"j":{"label":"Blanda","title":"Vrid alla olåsta brickor slumpmässigt (J)"},"scroll_left":{"label":"←","title":"Rulla vyn åt vänster (Shift+←)"},"scroll_up":{"label":"↑","title":"Rulla vyn uppåt (Shift+↑)"},"scroll_down":{"label":"↓","title":"Rulla vyn nedåt (Shift+↓)"},"scroll_right":{"label":"→","title":"Rulla vyn åt höger (Shift+→)"},"k":{"label":"Lås","title":"Klicka på brickor för att låsa eller låsa upp dem i stället för att vrida dem (K)"}},"achievement":{"no_locks":{"name":"Inget under lås","description":"Lös ett Nät på 9×9 eller större utan att låsa en enda bricka."},"not_a_turn_wasted":{"name":"Inte ett vrid för mycket","description":"Lös ett Nät på 9×9 eller större utan att vrida någon bricka mer än nödvändigt."},"jumbled":{"name":"Omskakad","description":"Tryck på Blanda och lös ändå pusslet."}},"status":{"active":"Aktiva: {n}/{total}"}},"netslide":{"name":"Glidnät","description":"Skjut rader och kolumner av nätbitar tills allt hänger ihop.","preset":{"3x3_easy":"3×3 lätt","3x3_medium":"3×3 medel","3x3_hard":"3×3 svår","4x4_easy":"4×4 lätt","4x4_medium":"4×4 medel","4x4_hard":"4×4 svår","5x5_easy":"5×5 lätt","5x5_medium":"5×5 medel","5x5_hard":"5×5 svår"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"walls_wrap_around":{"name":"Kanterna går runt"},"barrier_probability":{"name":"Sannolikhet för hinder"},"number_of_shuffling_moves":{"name":"Antal blandningsdrag"}},"achievement":{"tidy_four":{"name":"Prydlig omkoppling","description":"Lös ett 4×4 Glidnät på 18 skjut eller färre."},"lean_five":{"name":"Linjemontör","description":"Lös ett 5×5 Glidnät på 32 skjut eller färre."},"big_switch":{"name":"Den stora omkopplaren","description":"Tänd hela nätverket med ett enda skjut när mindre än hälften av det var tänt."}},"status":{"active":" · Aktiva: {n}/{total}"}},"pattern":{"name":"Mönster","alsoKnownAs":"Nonogram, Picross, Griddlers, japanska korsord","description":"Fyll i rutnätet utifrån längderna på sammanhängande rutor som anges för varje rad och kolumn.","preset":{"10x10":"10×10","15x15":"15×15","20x20":"20×20","25x25":"25×25","30x30":"30×30"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"}},"action":{"e":{"label":"Sudda","title":"Klicka eller dra för att sudda tillbaka rutor till okända (E)"}},"achievement":{"no_dots":{"name":"Inte en prick","description":"Lös ett Mönster på 15×15 eller större utan att sätta en enda prick."},"inked_in":{"name":"Svart på vitt","description":"Lös ett Mönster på 20×20 eller större utan att någonsin tömma en svart ruta."}}},"pearl":{"name":"Pärlor","alsoKnownAs":"Masyu","description":"Rita en enda sluten slinga som går rakt genom vita pärlor och svänger vid svarta.","preset":{"6x6_easy":"6×6 Lätt","6x6_tricky":"6×6 Knepig","8x8_easy":"8×8 Lätt","8x8_tricky":"8×8 Knepig","10x10_easy":"10×10 Lätt","10x10_tricky":"10×10 Knepig","12x8_easy":"12×8 Lätt","12x8_tricky":"12×8 Knepig"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"difficulty":{"name":"Svårighetsgrad","choice":{"easy":"Lätt","tricky":"Knepig"}},"allow_unsoluble":{"name":"Tillåt olösbara"}},"action":{"x":{"label":"Kryss","title":"Klicka eller dra för att kryssa över kanter som slingan inte kan använda (X)"}},"achievement":{"no_crosses":{"name":"Pärlband","description":"Lös Pärlor på 10×10 utan att sätta ett enda kryss."},"one_stroke":{"name":"I ett drag","description":"Rita hela slingan i Pärlor på 8×8 eller större med ett enda drag."}}},"pegs":{"name":"Pinnar","alsoKnownAs":"Solitär, Peg solitaire","description":"Hoppa med pinnarna över varandra tills bara en är kvar.","preset":{"cross":"Kors","octagon":"Oktagon","random_5x5":"Slumpmässig 5×5","random_7x7":"Slumpmässig 7×7","random_9x9":"Slumpmässig 9×9"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"board_type":{"name":"Typ av spelplan","choice":{"cross":"Kors","octagon":"Oktagon","random":"Slumpmässig"}}},"achievement":{"dead_centre":{"name":"Mitt i prick","description":"Avsluta Kors-spelplanen med den sista pinnen i mitthålet."},"hopscotch":{"name":"Hoppa hage","description":"Vinn en omgång Pinnar där en pinne hoppar fyra gånger i rad."},"pegged_out":{"name":"Fastkörd","description":"Kör fast med tio eller fler pinnar kvar på spelplanen."}},"status":{"stuck":"Inga fler drag – {n} pinnar kvar","playing":"Pinnar kvar: {n}  ·  Drag: {moves}"}},"range":{"name":"Räckvidd","alsoKnownAs":"Kurodoko, Kuromasu","description":"Måla rutor svarta så att varje tal ser exakt så många vita rutor längs sin rad och kolumn.","preset":{"9x6":"9×6","12x8":"12×8","13x9":"13×9","16x11":"16×11"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"}},"action":{"e":{"label":"Sudda","title":"Klicka eller dra för att ta bort svarta rutor och prickar (E)"}},"achievement":{"no_dots":{"name":"Ren kontrast","description":"Lös Räckvidd på 13×9 eller större utan att sätta en enda prick."},"quick_sight":{"name":"Skarp blick","description":"Lös Räckvidd på 16×11 på under fem minuter."}}},"rect":{"name":"Rektanglar","alsoKnownAs":"Shikaku","description":"Dela in rutnätet i rektanglar som var och en innehåller ett tal lika med dess area.","preset":{"7x7":"7×7","9x9":"9×9","11x11":"11×11","13x13":"13×13","15x15":"15×15","17x17":"17×17","19x19":"19×19"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"expansion_factor":{"name":"Expansionsfaktor"},"ensure_unique_solution":{"name":"Garantera entydig lösning"}},"action":{"e":{"label":"Sudda","title":"Dra över en yta för att sudda linjerna inuti den, eller klicka på en linje för att ta bort den (E)"}},"achievement":{"clean_cuts":{"name":"Rena snitt","description":"Lös Rektanglar på 11×11 eller större på inte fler drag än det finns tal."},"quick_carver":{"name":"Snabb snickare","description":"Lös Rektanglar på 19×19 på under tio minuter."}},"status":{"drag":"{w}×{h} "}},"samegame":{"name":"Same Game","alsoKnownAs":"Clickomania","description":"Töm spelplanen genom att ta bort grupper av sammanhängande rutor med samma färg.","preset":{"5x5_3_colours":"5×5, 3 färger","10x5_3_colours":"10×5, 3 färger","15x10_3_colours":"15×10, 3 färger","15x10_4_colours":"15×10, 4 färger","20x15_4_colours":"20×15, 4 färger"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"no_of_colours":{"name":"Antal färger"},"scoring_system":{"name":"Poängsystem","choice":{"n_1_2":"(n-1)^2","n_2_2":"(n-2)^2"}},"ensure_solubility":{"name":"Garantera lösbarhet"}},"achievement":{"avalanche":{"name":"Lavin","description":"Ta bort en grupp på 25 rutor eller fler i ett svep, och töm sedan spelplanen."},"no_pairs":{"name":"Inga par tillåtna","description":"Töm en spelplan på 15×10 eller större utan att någonsin ta bort ett par."},"last_one":{"name":"Den sista rutan","description":"Kör fast med bara en ruta kvar på spelplanen."}},"status":{"score":"Poäng: {n}","complete":"Planen är tömd! {score}","stuck":"Inga drag kvar. {score}","selected":"{score} · Valda: {n} (+{points})"}},"signpost":{"name":"Vägvisare","description":"Länka ihop rutorna till en numrerad väg där varje steg följer en pil.","preset":{"4x4":"4×4","4x4_free_ends":"4×4, fria ändar","5x5":"5×5","5x5_free_ends":"5×5, fria ändar","6x6":"6×6","7x7":"7×7"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"start_and_end_in_corners":{"name":"Start och slut i hörnen"}},"action":{"b":{"label":"Bryt","title":"Klicka på en ruta för att bryta upp hela dess kedja (B)"}},"achievement":{"unbroken":{"name":"Obruten kedja","description":"Lös en Vägvisare utan att någonsin ta bort eller byta ut en länk."},"in_order":{"name":"Rakt igenom","description":"Lös en Vägvisare på 6×6 eller större genom att länka vägen i ordning, från 1 till stjärnan."},"star_first":{"name":"Önska på en stjärna","description":"Gör din allra första länk in i stjärnan och lös sedan pusslet."}}},"singles":{"name":"Ensamma","alsoKnownAs":"Hitori","description":"Svärta rutor så att inget tal upprepas i en rad eller kolumn, utan att dela rutnätet.","preset":{"5x5_easy":"5×5 Lätt","5x5_tricky":"5×5 Knepig","6x6_easy":"6×6 Lätt","6x6_tricky":"6×6 Knepig","8x8_easy":"8×8 Lätt","8x8_tricky":"8×8 Knepig","10x10_easy":"10×10 Lätt","10x10_tricky":"10×10 Knepig","12x12_easy":"12×12 Lätt","12x12_tricky":"12×12 Knepig"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"difficulty":{"name":"Svårighetsgrad","choice":{"easy":"Lätt","tricky":"Knepig"}}},"achievement":{"no_circles":{"name":"Inga ringar behövs","description":"Lös Ensamma på 8×8 eller större utan att ringa in ett enda tal."},"sure_hand":{"name":"Säker hand","description":"Lös Ensamma på 10×10 eller större utan att återställa en svärtad ruta."}}},"sixteen":{"name":"Sexton","description":"Skjut hela rader och kolumner runt rutnätet för att få brickorna i ordning.","preset":{"3x3":"3×3","4x3":"4×3","4x4":"4×4","5x4":"5×4","5x5":"5×5"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"number_of_shuffling_moves":{"name":"Antal blandningsdrag"}},"achievement":{"lean_slides":{"name":"Snål skjutare","description":"Få ordning på 4×4 på 100 skjut eller färre."},"five_in_200":{"name":"Storsorterare","description":"Få ordning på 5×5 på 200 skjut eller färre."},"round_the_doughnut":{"name":"Runt munken","description":"Skjut en linje hela varvet runt tills den är tillbaka där den började."}}},"slant":{"name":"Snedstreck","alsoKnownAs":"Gokigen Naname","description":"Rita en diagonal i varje ruta så att talen stämmer och inga slingor bildas.","preset":{"5x5_easy":"5×5 Lätt","5x5_hard":"5×5 Svår","8x8_easy":"8×8 Lätt","8x8_hard":"8×8 Svår","12x10_easy":"12×10 Lätt","12x10_hard":"12×10 Svår"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"difficulty":{"name":"Svårighetsgrad","choice":{"easy":"Lätt","hard":"Svår"}}},"achievement":{"no_loops":{"name":"Slingfri","description":"Lös Snedstreck på 8×8 eller större utan att någonsin sluta en slinga."},"steady_hand":{"name":"Inga andra tankar","description":"Lös Snedstreck på 12×10 utan att gå tillbaka och ändra ett streck."}}},"solo":{"name":"Solo","alsoKnownAs":"Sudoku","description":"Fyll rutnätet så att varje rad, kolumn och block innehåller varje siffra en gång.","preset":{"4x4_very_easy":"4×4 Mycket lätt","6x6_easy":"6×6 Lätt","9x9_very_easy":"9×9 Mycket lätt","9x9_easy":"9×9 Lätt","9x9_x_diagonal_easy":"9×9 X-diagonal Lätt","9x9_medium":"9×9 Medel","9x9_hard":"9×9 Svår","9x9_x_diagonal_hard":"9×9 X-diagonal Svår","9x9_expert":"9×9 Expert","9x9_extreme":"9×9 Extrem","9x9_killer":"9×9 Killer","9x9_jigsaw_easy":"9×9 Pusselbitar Lätt","9x9_jigsaw_x_diagonal_easy":"9×9 Pusselbitar X-diagonal Lätt","9x9_jigsaw_hard":"9×9 Pusselbitar Svår","12x12_easy":"12×12 Lätt","16x16_easy":"16×16 Lätt"},"config":{"columns_of_sub_blocks":{"name":"Kolumner av delblock"},"rows_of_sub_blocks":{"name":"Rader av delblock"},"x_require_every_number_in_each_main_diagonal":{"name":"”X” (varje tal krävs i båda huvuddiagonalerna)"},"jigsaw_irregularly_shaped_sub_blocks":{"name":"Pusselbitar (oregelbundet formade delblock)"},"killer_digit_sums":{"name":"Killer (siffersummor)"},"symmetry":{"name":"Symmetri","choice":{"none":"Ingen","2_way_rotation":"Tvåvägs rotation","4_way_rotation":"Fyrvägs rotation","2_way_mirror":"Tvåvägs spegling","2_way_diagonal_mirror":"Tvåvägs diagonal spegling","4_way_mirror":"Fyrvägs spegling","4_way_diagonal_mirror":"Fyrvägs diagonal spegling","8_way_mirror":"Åttavägs spegling"}},"difficulty":{"name":"Svårighetsgrad","choice":{"very_easy":"Mycket lätt","easy":"Lätt","medium":"Medel","hard":"Svår","expert":"Expert","extreme":"Extrem"}}},"action":{"m":{"label":"Kandidater","title":"Skriv in alla möjligheter som anteckningar i varje tom ruta (M)"},"l":{"label":"Framhäv","title":"Framhäv alla rutor med den siffra du senast rörde vid (L)"}},"achievement":{"pen_only":{"name":"Penna, inte blyerts","description":"Lös en 9×9 Solo på Medel, Killer eller svårare utan en enda anteckning."},"no_second_thoughts":{"name":"Inget ångrande","description":"Lös en 9×9 på Expert eller svårare utan att någonsin ändra eller rensa en siffra."}}},"tents":{"name":"Tält","alsoKnownAs":"Tält och träd, Tents and Trees","description":"Slå upp ett tält bredvid varje träd utan att två tält rör vid varandra.","preset":{"8x8_easy":"8×8 Lätt","8x8_tricky":"8×8 Knepig","10x10_easy":"10×10 Lätt","10x10_tricky":"10×10 Knepig","15x15_easy":"15×15 Lätt","15x15_tricky":"15×15 Knepig"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"difficulty":{"name":"Svårighetsgrad","choice":{"easy":"Lätt","tricky":"Knepig"}}},"achievement":{"no_grass":{"name":"Perfekt uppslaget","description":"Lös Tält på 10×10 eller större utan att markera en enda ruta som gräs."},"no_strikes":{"name":"Glada campare","description":"Lös Tält på 15×15 utan att någonsin ta ner ett tält."}}},"towers":{"name":"Torn","alsoKnownAs":"Skyskrapor, Skyscrapers","description":"Bygg torn så att varje ledtråd vid kanten anger hur många torn som syns därifrån.","preset":{"4x4_easy":"4×4 Lätt","5x5_easy":"5×5 Lätt","5x5_hard":"5×5 Svår","6x6_easy":"6×6 Lätt","6x6_hard":"6×6 Svår","6x6_expert":"6×6 Expert","6x6_extreme":"6×6 Extrem"},"config":{"grid_size":{"name":"Rutnätets storlek"},"difficulty":{"name":"Svårighetsgrad","choice":{"easy":"Lätt","hard":"Svår","expert":"Expert","extreme":"Extrem"}}},"action":{"m":{"label":"Kandidater","title":"Skriv in alla möjligheter som anteckningar i varje tom ruta (M)"},"l":{"label":"Framhäv","title":"Framhäv alla rutor med den siffra du senast rörde vid (L)"}},"achievement":{"no_pencil":{"name":"Skyline i huvudet","description":"Lös Torn på 6×6 utan att skriva en enda anteckning."},"clean_build":{"name":"Byggt för att hålla","description":"Lös Torn på 6×6 Expert eller Extrem utan att gå tillbaka och ändra ett torn."},"tallest_first":{"name":"De högsta först","description":"Bygg alla de högsta tornen före alla andra och lös sedan rutnätet."}}},"tracks":{"name":"Spår","alsoKnownAs":"Tågspår, Train Tracks","description":"Lägg en enda järnväg från ingången till utgången så att antalen stämmer.","preset":{"8x8_easy":"8×8 Lätt","8x8_tricky":"8×8 Knepig","10x8_easy":"10×8 Lätt","10x8_tricky":"10×8 Knepig","10x10_easy":"10×10 Lätt","10x10_tricky":"10×10 Knepig","15x10_easy":"15×10 Lätt","15x10_tricky":"15×10 Knepig","15x15_easy":"15×15 Lätt","15x15_tricky":"15×15 Knepig"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"difficulty":{"name":"Svårighetsgrad","choice":{"easy":"Lätt","tricky":"Knepig"}},"disallow_consecutive_1_clues":{"name":"Förbjud intilliggande 1-ledtrådar"}},"action":{"e":{"label":"Sudda","title":"Klicka eller dra för att rensa rutor helt (E)"}},"achievement":{"no_crosses":{"name":"Inget överkryssat","description":"Lös Spår på 10×10 eller större utan att kryssa över en ruta eller en sida."},"no_lift":{"name":"Full fart framåt","description":"Lös Spår på 15×10 eller större utan att någonsin ta bort räls du lagt."},"long_haul":{"name":"Långdistans","description":"Lägg räls genom tio rutor i ett enda drag och gör sedan klart spåret."}}},"twiddle":{"name":"Vrid","description":"Vrid kvadratiska block av brickor för att få talen i ordning igen.","preset":{"3x3_rows_only":"3×3 bara rader","3x3_normal":"3×3 normal","3x3_orientable":"3×3 med riktning","4x4_normal":"4×4 normal","4x4_orientable":"4×4 med riktning","4x4_rotating_3x3_blocks":"4×4, roterande 3×3-block","5x5_rotating_3x3_blocks":"5×5, roterande 3×3-block","6x6_rotating_4x4_blocks":"6×6, roterande 4×4-block"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"rotating_block_size":{"name":"Storlek på roterande block"},"one_number_per_row":{"name":"Ett tal per rad"},"orientation_matters":{"name":"Riktningen spelar roll"},"number_of_shuffling_moves":{"name":"Antal blandningsdrag"}},"action":{"t":{"label":"Medurs","title":"Byt håll: klick vrider medurs, högerklick moturs (T)"}},"achievement":{"few_turns":{"name":"Tjugo vridningar","description":"Lös en 3×3 normal Vrid på 20 vridningar eller färre."},"perfect_ten":{"name":"Perfekt tia","description":"Lös en 3×3 normal Vrid på 10 vridningar eller färre."},"dizzy":{"name":"Runt, runt","description":"Vrid ett block åt samma håll fyra gånger i rad och lös sedan pusslet."}}},"undead":{"name":"Odöda","alsoKnownAs":"Haunted Mirror Maze","description":"Placera spöken, vampyrer och zombier så att det som syns i speglarna stämmer.","preset":{"4x4_easy":"4×4 Lätt","4x4_normal":"4×4 Normal","4x4_tricky":"4×4 Knepig","5x5_easy":"5×5 Lätt","5x5_normal":"5×5 Normal","5x5_tricky":"5×5 Knepig","7x7_easy":"7×7 Lätt","7x7_normal":"7×7 Normal"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"difficulty":{"name":"Svårighetsgrad","choice":{"easy":"Lätt","normal":"Normal","tricky":"Knepig"}}},"keypad":{"g":"Spöke","v":"Vampyr","z":"Zombie"},"action":{"s":{"label":"Sikt","title":"Följ siktlinjerna genom en ruta, eller från ett tal på kanten (S)"}},"achievement":{"no_pencil":{"name":"Lita på dina ögon","description":"Lös Odöda på 5×5 eller större utan att göra en enda anteckning."},"fearless":{"name":"Orädd","description":"Lös en Knepig Odöda utan att gå tillbaka och ändra ett monster."}}},"unequal":{"name":"Olikheter","alsoKnownAs":"Futoshiki","description":"Fyll i den latinska kvadraten så att varje större än-tecken stämmer.","preset":{"4x4_easy":"4×4 Lätt","5x5_easy":"5×5 Lätt","5x5_medium":"5×5 Medel","5x5_medium_adjacent":"5×5 Medel (Grannar)","5x5_hard":"5×5 Svår","6x6_easy":"6×6 Lätt","6x6_medium":"6×6 Medel","6x6_medium_adjacent":"6×6 Medel (Grannar)","6x6_hard":"6×6 Svår","7x7_medium":"7×7 Medel","7x7_medium_adjacent":"7×7 Medel (Grannar)","7x7_hard":"7×7 Svår"},"config":{"mode":{"name":"Läge","choice":{"unequal":"Olikheter","adjacent":"Grannar"}},"size_s_s":{"name":"Storlek (s*s)"},"difficulty":{"name":"Svårighetsgrad","choice":{"very_easy":"Mycket lätt","easy":"Lätt","medium":"Medel","hard":"Svår","extreme":"Extrem"}}},"action":{"m":{"label":"Kandidater","title":"Skriv in alla möjligheter som anteckningar i varje tom ruta (M)"},"h":{"label":"Tips","title":"Skriv in de möjligheter som enkla slutsatser lämnar kvar (H)"},"l":{"label":"Framhäv","title":"Framhäv alla rutor med den siffra du senast rörde vid (L)"}},"achievement":{"adjacent_bare":{"name":"Grannen","description":"Lös Olikheter i Grannar-läge utan att skriva en enda anteckning."},"extreme_bare":{"name":"Allt i huvudet","description":"Lös en Extrem Olikheter utan att skriva en enda anteckning."}}},"unruly":{"name":"Oregerlig","alsoKnownAs":"Binairo, Takuzu","description":"Färga varje ruta svart eller vit, lika många av varje i varje linje och aldrig tre i rad.","preset":{"8x8_easy":"8×8 Lätt","8x8_normal":"8×8 Normal","10x10_easy":"10×10 Lätt","10x10_normal":"10×10 Normal","14x14_easy":"14×14 Lätt","14x14_normal":"14×14 Normal"},"config":{"width":{"name":"Bredd"},"height":{"name":"Höjd"},"unique_rows_and_columns":{"name":"Unika rader och kolumner"},"difficulty":{"name":"Svårighetsgrad","choice":{"easy":"Lätt","normal":"Normal"}}},"action":{"e":{"label":"Sudda","title":"Klicka på en ruta för att rensa den (E)"}},"achievement":{"no_threes":{"name":"Aldrig tre","description":"Lös Oregerlig på 10×10 eller större utan att någonsin göra tre i rad."},"first_time":{"name":"Svart eller vitt","description":"Lös Oregerlig på 14×14 utan att gå tillbaka och ändra en ruta."}}},"untangle":{"name":"Reda ut","alsoKnownAs":"Planarity","description":"Dra runt punkterna tills inga två linjer korsar varandra.","preset":{"6_points":"6 punkter","10_points":"10 punkter","15_points":"15 punkter","20_points":"20 punkter","25_points":"25 punkter"},"config":{"number_of_points":{"name":"Antal punkter"}},"action":{"g":{"label":"Fäst","title":"Fäst släppta punkter mot ett rutnät (G)"}},"achievement":{"one_touch":{"name":"Lätt hand","description":"Red ut 10 punkter eller fler utan att ta tag i samma punkt två gånger."},"only_downhill":{"name":"Bara nedförsbacke","description":"Red ut 20 punkter eller fler utan att ett drag någonsin ger fler röda linjer."}}}}`),$=JSON.parse('{"blackbox":{"step1":{"text":"En kula gömmer sig i den här lådan på 4×4. Skjut in laserstrålar från punkterna runt kanten, lista ut var den måste ligga, markera den och tryck på hörnknappen."},"step2":{"text":"Klicka på punkten på **vänsterkanten, i höjd med andra raden**. Strålen böjs av på vägen och kommer ut någon annanstans; båda ändarna får samma nummer."},"step3":{"text":"Skjut nu från punkten **ovanför andra kolumnen**. Ett **H** betyder att strålen gick rakt in i en kula och aldrig kom ut."},"step4":{"text":"Skjut också från punkten **ovanför första kolumnen**. Ett **R** betyder att strålen studsade rakt tillbaka ut, vilket händer när en kula ligger diagonalt intill öppningen."},"step5":{"text":"R:et placerar en kula diagonalt intill första kolumnen, och H:et placerar en rakt ner i andra kolumnen: bara den här rutan uppfyller båda."},"step6":{"text":"**Klicka på den rutan** för att markera din kula där."},"step7":{"text":"Alla kulor är markerade, så **bocken i det övre vänstra hörnet** är aktiv. Klicka på den för att få ditt svar kontrollerat."},"step8":{"text":"Rätt. Medan du arbetar låser ett **högerklick** på en ruta den med ett hänglås när du är säker på att den är tom, och **Lös** avslöjar svaret."}},"bridges":{"step1":{"text":"Talet på varje ö anger hur många broändar den vill ha. Förbind alla öar till ett enda nätverk, med högst två broar mellan ett par öar och utan att någon bro korsar en annan."},"step2":{"text":"**Tvåan längst ner** har bara en ö i linje med sig: **fyran** högst upp. **Dra** från tvåan mot fyran för att slå en bro över."},"step3":{"text":"Den vill ha två broändar, och det här paret är det enda stället de kan hamna. **Dra** åt samma håll igen för en andra, parallell bro."},"step4":{"text":"Den ön är klar. **Klicka** på den för att markera den som färdig: den blir grå och dess broar låses, så att du inte råkar ändra dem."},"step5":{"text":"Ingen bro får korsa en annan, så linjen mellan **de två ettorna** är utesluten nu. **Högerdra** från den vänstra ettan mot den högra för att anteckna det."},"step6":{"text":"Varje etta har nu bara en väg ut, och de fyra återstående broarna följer av det. **Lös** gör klart pusslet (och **G** visar varje linje där en bro skulle kunna gå).","textTouch":"Varje etta har nu bara en väg ut, och de fyra återstående broarna följer av det. **Lös** gör klart pusslet."}},"cube":{"step1":{"text":"Kuben har sex sidor och sex rutor är målade blå. Rulla runt den tills varje sida har plockat upp en: varje gång den landar byter sidan underst och rutan färg med varandra."},"step2":{"text":"Ett klick tippar kuben över kanten mot rutan du väljer. **Klicka på den blå rutan precis under kuben** för att föra över dess färg till sidan som landar."},"step3":{"text":"Rutan den lämnade är vanlig nu – färgerna byter verkligen plats. **Klicka på den blå rutan till höger** för att göra en andra sida blå."},"step4":{"text":"**Piltangenterna** rullar också kuben. Tryck en gång på **→** för att plocka upp den tredje blå rutan.","textTouch":"Varje angränsande ruta är bara ett tryck bort. **Tryck på nästa blå ruta till höger** för att plocka upp den tredje blå rutan."},"step5":{"text":"Tre sidor blå, tre kvar – den här spelplanen kan lösas på sex rullningar totalt, och statusraden räknar dem. **Ångra** tar tillbaka en om du rullar för långt."}},"dominosa":{"step1":{"text":"Tre dominobrickor – 0-0, 0-1 och 1-1 – lades ut här och togs sedan bort, så att bara talen finns kvar. Dela in rutnätet i par så att var och en läggs tillbaka exakt en gång."},"step2":{"text":"Ingen dominobricka får användas två gånger. Om den här **nollan** paras ihop med **ettan** under den blir båda ytterkolumnerna en 0-1, så **högerklicka** mellan dem för att notera att de inte är ett par."},"step3":{"text":"De enda två **nollorna** som ligger intill varandra är paret i det övre vänstra hörnet, så där hamnar 0-0. **Klicka på gränsen mellan dem** för att lägga den."},"step4":{"text":"På samma sätt är de enda **ettorna** intill varandra de två längst ner till vänster. Klicka på gränsen mellan dem för 1-1."},"step5":{"text":"Då återstår den högra kolumnen för 0-1. Klicka på gränsen mellan dess två tal för att bli klar."},"step6":{"text":"Varje dominobricka är använd en gång. Klicka på en dominobricka igen för att lyfta bort den, en upprepad bricka ritas i rött, och **Ångra** stegar tillbaka genom dina drag."}},"fifteen":{"step1":{"text":"Skjut de numrerade brickorna in i den tomma platsen tills de visar **1 till 8** i ordning, med luckan i det nedre högra hörnet. Den här lilla spelplanen är två drag från mål."},"step2":{"text":"Alla brickor i samma rad eller kolumn som luckan kan skjutas. Klicka på **5:an** för att skjuta upp den i luckan."},"step3":{"text":"En till. Klicka på **8:an** för att göra klart raden."},"step4":{"text":"Löst! **Ångra** och **Gör om** stegar genom dina drag, och **Nytt** i pausmenyn ger ett nytt pussel. Piltangenterna skjuter också in en bricka i luckan, i pilens riktning.","textTouch":"Löst! **Ångra** och **Gör om** stegar genom dina drag, och **Nytt** i pausmenyn ger ett nytt pussel. En hel rad eller kolumn skjuts på en gång, så sikta på brickan längst bort."}},"filling":{"step1":{"text":"Skriv en siffra i varje tom ruta så att varje sammanhängande block av lika siffror täcker exakt så många rutor som siffran anger."},"step2":{"text":"**Trean** längst ner i mittenkolumnen kan bara växa uppåt, så dess block är den kolumnen. **Dra** från kolumnens översta ruta ner till den mittersta och tryck sedan på **3**.","textTouch":"**Trean** längst ner i mittenkolumnen kan bara växa uppåt. **Dra** från kolumnens översta ruta ner till den mittersta och tryck sedan på **3** på knappsatsen."},"step3":{"text":"**Tvåan** i vänstra kolumnen behöver en partner, och rutan ovanför är den enda lediga. Klicka på den rutan och tryck på **2**.","textTouch":"**Tvåan** i vänstra kolumnen behöver en partner, och rutan ovanför är den enda lediga. Tryck på den rutan och sedan på **2** på knappsatsen."},"step4":{"text":"En ruta kvar. Klicka på den och tryck på **1** för att se hur en felaktig siffra ser ut.","textTouch":"En ruta kvar. Tryck på den och sedan på **1** på knappsatsen för att se hur en felaktig siffra ser ut."},"step5":{"text":"Rött betyder omöjligt: de två **ettorna** ligger intill varandra, vilket skulle bli ett block på två, och **tvåan** högst upp är instängd. Rutan är fortfarande markerad, så tryck på **Backspace** för att tömma den.","textTouch":"Rött betyder omöjligt: de två **ettorna** ligger intill varandra, vilket skulle bli ett block på två, och **tvåan** högst upp är instängd. Rutan är fortfarande markerad, så tryck på **⌫** på knappsatsen för att tömma den."},"step6":{"text":"Den tomma rutan bildar i stället par med **tvåan** ovanför. Klicka på den och tryck på **2** för att fylla rutnätet.","textTouch":"Den tomma rutan bildar i stället par med **tvåan** ovanför. Tryck på den och sedan på **2** på knappsatsen för att fylla rutnätet."},"step7":{"text":"Klart. Tjocka linjer omger varje färdigt block; **högerklicka** för att lägga till rutor i en markering en i taget, och **Ångra** tar tillbaka en ifyllning."}},"flip":{"step1":{"text":"Tänd alla nio rutor. Ett klick på en ruta vänder den **och** rutorna runt den, så tända rutor kan slockna igen."},"step2":{"text":"Den lilla bilden i en ruta visar vad den vänder: det fyllda blocket är rutan själv, konturerna är dess grannar."},"step3":{"text":"Dags att tända den här. Klicka på rutan **uppe till vänster**, den mörka i hörnet."},"step4":{"text":"Hörnet är tänt, men dess två grannar slocknade. Klicka på **mittenrutan** härnäst."},"step5":{"text":"Bara det nedre högra hörnet är mörkt nu. Klicka på rutan **nere till höger** för att bli klar."},"step6":{"text":"Allt är tänt! **Ångra** tar tillbaka ett drag, och du kan styra en markör med piltangenterna och trycka på Enter i stället för att klicka.","textTouch":"Allt är tänt! **Ångra** tar tillbaka ett drag, och två tryck på samma ruta tar alltid ut varandra, så ordningen spelar aldrig någon roll."}},"flood":{"step1":{"text":"Du äger rutan uppe till vänster och allt som hänger ihop med den i samma färg. Varje drag målar om det området, så att angränsande rutor i den nya färgen ansluter. Gör hela rutnätet enfärgat inom gränsen på **fyra drag**."},"step2":{"text":"Ditt område är bara det blå hörnet än så länge. Klicka på den **röda** rutan intill: området blir rött och varje röd ruta det rör vid följer med."},"step3":{"text":"Klicka nu på en **blå** ruta vid kanten av ditt område. En väl vald färg kan sprida sig långt över rutnätet på ett enda drag."},"step4":{"text":"Bara **grönt** finns kvar utanför ditt område. Ett klick till sveper in resten av rutnätet."},"step5":{"text":"Tre drag av fyra – statusraden håller räkningen. Tar dragen slut innan rutnätet är enfärgat är omgången förlorad. Kört fast? Ett **Tips** spelar en bra färg åt dig, och **Lös** gör klart rutnätet som en automatisk lösning."}},"galaxies":{"step1":{"text":"Två punkter, alltså två galaxer. Rita väggar längs rutnätets linjer så att varje punkt hamnar i mitten av sitt eget område: vrid ett område 180° kring dess punkt, och det ska täcka exakt sig självt."},"step2":{"text":"Den vänstra punkten ligger på en linje mellan två rutor, så dess galax måste vara de två vänstra kolumnerna. **Klicka** på rutnätslinjen precis till höger om dem, i **översta raden**."},"step3":{"text":"Punkterna fungerar också som anteckningspapper. **Dra** från den högra punkten in i **rutan uppe till höger** för att lämna en pil där, som markerar att rutan hör till dess galax."},"step4":{"text":"Tillbaka till väggen: **klicka** på samma rutnätslinje en rad längre ner, i **mittenraden**."},"step5":{"text":"En bit kvar, i **nedersta raden**. **Klicka** på den för att stänga in båda galaxerna."},"step6":{"text":"Båda områdena är skuggade, så båda är rätt. **Lös** ritar ett helt svar, och ett klick på en vägg suddar ut den igen."}},"guess":{"step1":{"text":"Två pinnar är gömda bakom frågetecknen, i någon ordning av tre färger. Gissa en rad, läs av markeringarna den får och ringa in svaret."},"step2":{"text":"**Dra** den översta färgen ur facket och släpp den i **vänstra hålet** i raden med pilen."},"step3":{"text":"Du kan också välja en färg först och sedan lägga den i hål med ett klick. Klicka på den **andra färgen** i facket."},"step4":{"text":"Klicka nu på det **högra hålet** för att släppa i den färgen."},"step5":{"text":"Raden är full, så den **streckade rutan** till höger om den tänds. Klicka på den för att få gissningen bedömd."},"step6":{"text":"Två **ihåliga** markeringar betyder att båda färgerna finns i svaret men att ingen av dem står på rätt plats – en fylld markering betyder rätt färg på rätt plats. Byt plats på dem och skicka in igen."},"step7":{"text":"Löst. **Lös** ger upp och visar svaret, och tangenten **L** märker pinnarna med bokstäver om färgerna är svåra att skilja åt.","textTouch":"Löst. **Lös** ger upp och visar svaret, och **Behåll** bredvid Ångra håller kvar en pinne du litar på till nästa gissning."}},"inertia":{"step1":{"text":"Du är kulan i det övre vänstra hörnet, och det finns **tre ädelstenar** att samla. När kulan väl börjar rulla stannar den bara vid en vägg eller ett stopp – och en mina dödar den."},"step2":{"text":"Klicka på en ruta **till höger** om kulan. Den rullar åt det hållet tills spelplanens kant stoppar den och plockar upp ädelstenen den passerar."},"step3":{"text":"Klicka nu **under** kulan. Den tar nästa ädelsten, och den brutna ringen två rutor längre ner – ett stopp – får den att stanna."},"step4":{"text":"Försiktigt: den taggiga saken rakt under kulan är en **mina**. Rullar du på en är spelet slut, och bara Ångra tar dig ur det."},"step5":{"text":"Gå **diagonalt** i stället: klicka på rutan två steg ner och två åt vänster, så glider kulan förbi minan och fram till den sista ädelstenen."},"step6":{"text":"Alla tre ädelstenar – klart. **Ångra** spolar tillbaka en rullning som gick fel; piltangenterna rullar rakt och Home, Page Up, End och Page Down rullar diagonalt.","textTouch":"Alla tre ädelstenar – klart. **Ångra** spolar tillbaka en rullning som gick fel, och det går också att trycka utanför rutnätet, vilket hjälper när kulan ligger mot en kant."}},"keen":{"step1":{"text":"Fyll i 1, 2 och 3 så att varje siffra förekommer en gång i varje rad och kolumn, och så att siffrorna i varje bur med tjock kant uppfyller burens räkneledtråd."},"step2":{"text":"Buren **2×** har produkten 2, så dess siffror är 1, 1 och 2. En bur får upprepa en siffra, men inte i samma rad eller kolumn, så tvåan hör hemma i hörnet: klicka på den rutan och skriv **2**.","textTouch":"Buren **2×** har produkten 2, så dess siffror är 1, 1 och 2. Tvåan hör hemma i hörnet: tryck på den rutan och sedan på **2** på knappsatsen."},"step3":{"text":"Burens två andra rutor är ettorna. Klicka på rutan **till höger om tvåan** och skriv **1**.","textTouch":"Burens två andra rutor är ettorna. Tryck på rutan **till höger om tvåan** och sedan på **1** på knappsatsen."},"step4":{"text":"Översta raden har redan sin tvåa och sin etta, så den sista rutan i den måste vara trean. Klicka på **rutan uppe till höger** och skriv **3**.","textTouch":"Översta raden har redan sin tvåa och sin etta, så den sista rutan i den måste vara trean. Tryck på **rutan uppe till höger** och sedan på **3** på knappsatsen."},"step5":{"text":"Gissar du bara om en ruta? **Högerklicka** på mittenrutan och skriv **3** för att anteckna siffran i stället för att fylla i den.","textTouch":"Gissar du bara om en ruta? **Tryck länge** på mittenrutan och tryck på **3** för att anteckna siffran i stället för att fylla i den. Knappen **✎** gör samma sak för en ruta du har tryckt på."},"step6":{"text":"Lös resten på samma sätt; en siffra som upprepas i sin rad eller kolumn blir röd, och det blir även en full bur som inte uppfyller sin ledtråd. I pausmenyn skriver **Kandidater** in alla möjligheter åt dig, och **Lös** avslöjar svaret."}},"lightup":{"step1":{"text":"Varje vit ruta måste till slut vara upplyst. En lampa lyser upp sin egen rad och kolumn tills en svart ruta stoppar ljuset, och ingen lampa får stå i en annan lampas ljus."},"step2":{"text":"Ett tal anger hur många lampor som ligger intill den svarta rutan. Den här **tvåan** har bara två vita grannar, så båda har en lampa: klicka på den **till höger**."},"step3":{"text":"Lägg märke till det gula skenet som sprider sig längs ljusstrålen. Klicka nu på rutan precis **under** tvåan för dess andra lampa."},"step4":{"text":"En **nolla** har inga lampor alls intill sig. **Högerklicka** på rutan ovanför den för att anteckna ett kryss: det påminner dig bara om att ingen lampa kan stå där."},"step5":{"text":"**Ettan** vill ha exakt en lampa. Rutan under den är redan upplyst, så en lampa där skulle stå i ljuset – klicka i stället på rutan **till vänster** om ettan."},"step6":{"text":"Två rutor i översta raden är fortfarande mörka, och du har kryssat bort den ena. Klicka på den **andra**."},"step7":{"text":"Varje ruta upplyst, varje tal nöjt. **Ångra** tar tillbaka en lampa, och med piltangenterna, Enter och Space placerar du lampor och kryss utan mus.","textTouch":"Varje ruta upplyst, varje tal nöjt. **Ångra** tar tillbaka en lampa, och ett långt tryck kryssar bort en ruta du har uteslutit."}},"loopy":{"step1":{"text":"Rita **en** sluten slinga längs de svaga linjerna mellan punkterna. Varje tal anger hur många av rutans fyra sidor slingan använder."},"step2":{"text":"Mittenrutan har talet **4**, så alla fyra sidorna ingår i slingan. **Klicka** på dess översida för att rita den första linjen."},"step3":{"text":"Nu dess **vänstra sida**. Ett klick till på en linje suddar ut den."},"step4":{"text":"Varje punkt har två linjer eller ingen, och punkten där de två möts är full. **Högerklicka** på linjen som går uppåt från den för att kryssa bort den som oanvändbar."},"step5":{"text":"Två sidor kvar. **Klicka** på mittenrutans undersida."},"step6":{"text":"Och den **högra sidan** sluter den. En slinga, inga lösa ändar, och de fyra **nollorna** går fria från den."},"step7":{"text":"Löst. **Ångra** stegar tillbaka genom dina linjer, och **Typ** i pausmenyn byter ut kvadraterna mot trianglar, sexhörningar och ännu konstigare mönster."}},"magnets":{"step1":{"text":"Varje dominobricka är antingen en magnet, med en **+**-halva och en **−**-halva, eller tom. Talen anger antalet **+**-poler (överst och till vänster) och **−**-poler (nederst och till höger) i varje linje, och lika poler får aldrig ligga intill varandra."},"step2":{"text":"Den nedersta raden vill ha tre **−**-poler och bara tre dominobrickor når ner i den, så var och en måste ge en. **Vänsterklicka** på den övre halvan av den stående brickan för att göra den till **+**, så att dess **−** hamnar nedanför."},"step3":{"text":"Alltså är den liggande brickan längst ner till höger också en magnet, och **0** ovanför den sista kolumnen förbjuder ett **+** där. **Vänsterklicka** på dess vänstra halva för att lägga **+** på den sidan."},"step4":{"text":"Den fjärde kolumnen har nu sitt enda **+** och vill inte ha något **−** alls, så brickan ovanför kan inte vara någotdera. **Högerklicka** på den för att markera den som tom."},"step5":{"text":"Den översta raden behöver fortfarande ett **+** och ett **−** från den liggande brickan till vänster. Dess högra halva ligger intill ett **+**, och lika poler får inte röra vid varandra – så **vänsterklicka** på dess vänstra halva."},"step6":{"text":"En bricka kvar. Den första kolumnen har redan använt sitt **+** högst upp, så **+** här hör hemma till höger: **vänsterklicka** på den högra halvan för att bli klar."},"step7":{"text":"Löst! Klickar du på samma halva igen vänds magneten, ett andra högerklick sätter frågetecken som betyder ”magnet, men åt vilket håll?”, och **Ångra** tar ett steg tillbaka."}},"map":{"step1":{"text":"Färglägg varje område så att inga två områden som delar en bit gräns har samma färg. Fyra färger räcker alltid, och tre områden här är fortfarande tomma."},"step2":{"text":"Välj först en färg: **klicka** på den **blå färgrutan**, den andra i raden under kartan."},"step3":{"text":"När du har valt en färg skriver ett **högerklick** på ett tomt område in en prick i den färgen – en anteckning om att området *kanske* har den färgen. Prova på det höga området längs högerkanten."},"step4":{"text":"Det är mer än ett kanske: området gränsar redan till rött, grönt och gult, så blått är det enda som återstår. **Klicka** på det för att måla det."},"step5":{"text":"Du kan också **dra** en färg från ett område till ett annat. Det stora området tvärs över toppen gränsar nu till rött, grönt och blått, så **dra** gult upp dit från det lilla området längst ner."},"step6":{"text":"Ett tomt område kvar, i **nedre vänstra hörnet**: det gränsar till grönt, blått och det nya gula, så det måste bli rött. **Dra** rött ner dit från området i det övre högra hörnet."},"step7":{"text":"Klart – en krock hade visats som ett rött **!** på gränsen mellan de två områdena. **Ångra** tar ett steg tillbaka, och piltangenterna med **1**–**4** färglägger utan musen.","textTouch":"Klart – en krock hade visats som ett rött **!** på gränsen mellan de två områdena. **Ångra** tar ett steg tillbaka, och suddgummit sist i raden tömmer ett område som du har ångrat."}},"mines":{"step1":{"text":"Varje tal anger hur många minor som finns i de åtta rutorna runt det. Två minor gömmer sig under det täckta blocket – öppna allt annat utan att gå på någon."},"step2":{"text":"Den här **1**:an rör bara vid en täckt ruta, så den rutan är en mina. **Högerklicka** på den för att sätta ut en flagga."},"step3":{"text":"**1**:an under den har nu sin enda mina flaggad, så resten av dess grannar är säkra. **Vänsterklicka på den 1:an** för att öppna dem på en gång."},"step4":{"text":"**2**:an ovanför blocket har redan en flagga och bara en täckt ruta kvar. **Högerklicka** på den rutan."},"step5":{"text":"Båda minorna är flaggade, så den sista täckta rutan måste vara säker. **Vänsterklicka** på den för att röja klart rutnätet."},"step6":{"text":"Röjt. Ett andra högerklick tar bort en flagga igen, och **Ångra** räddar dig om du någon gång går på en mina."}},"net":{"step1":{"text":"Varje bricka har en bit ledning, och hela nätet har vridits slumpmässigt. Vrid brickorna tills alla nio hänger ihop med den markerade brickan i mitten: **blå** ledningar är redan strömförande, grå är det inte."},"step2":{"text":"Den nedre vänstra brickan pekar sin ledning rakt mot väggen. **Vänsterklicka** på den för ett kvarts varv moturs, så att ledningen når grannen till höger."},"step3":{"text":"Ett **högerklick** vrider en bricka åt andra hållet. Ge den nedre högra brickan ett varv medurs så svänger dess ledning runt åt vänster."},"step4":{"text":"Mittenbrickan har ledningar åt alla fyra håll, så den kan inte vara fel. **Mittenklicka** på den för att låsa den, eller slå på **hänglåset** bredvid Ångra och klicka på den: en låst bricka är skuggad och går inte att vrida.","textTouch":"Mittenbrickan har ledningar åt alla fyra håll, så den kan inte vara fel. Slå på **hänglåset** bredvid Ångra och tryck på brickan för att låsa den: en låst bricka är skuggad och går inte att vrida."},"step5":{"text":"En bricka kvar. Med **hänglåset** avslaget **vänsterklickar** du på det övre högra hörnet för att vrida dess ledning åt vänster och tända hela nätet.","textTouch":"En bricka kvar. Med **hänglåset** avslaget trycker du på det övre högra hörnet för att vrida dess ledning åt vänster och tända hela nätet."},"step6":{"text":"Alla nio brickor är strömförande. **Ångra** stegar tillbaka genom dina vridningar; med tangentbordet flyttar piltangenterna en markör, och **A**, **D** och **F** vrider brickan under den.","textTouch":"Alla nio brickor är strömförande. **Ångra** stegar tillbaka genom dina vridningar, en låst bricka du är säker på skyddas mot ett oavsiktligt tryck, och **Blanda** vrider alla olåsta brickor slumpmässigt igen."}},"netslide":{"step1":{"text":"Varje ledningsbit måste till slut vara kopplad till strömkällan. Blå ledningar är strömförande, grå blyertsledningar är det inte."},"step2":{"text":"Strömkällan sitter på mittenbrickan. Den brickan flyttas aldrig, så mittenraden och mittenkolumnen har inga pilar – allt annat glider runt."},"step3":{"text":"Klicka på pilen **till vänster om den nedersta raden** för att skjuta raden ett steg åt vänster; ledningen som faller av dyker upp igen till höger."},"step4":{"text":"Den nedersta raden hänger nu ihop, men den är fortfarande grå: inget kopplar den uppåt till strömkällan än."},"step5":{"text":"**Högerklicka** på pilen **ovanför den tredje kolumnen**. Ett högerklick vänder på pilen, så kolumnen glider nedåt och de sista ledningarna tänds."},"step6":{"text":"Allt är strömförande! **Lös** visar en lösning om du kör fast, och menyn **Typ** har runtomgående rutnät där ledningar går ut över en kant och in på den motsatta."}},"pattern":{"step1":{"text":"Talen bredvid varje rad och kolumn är längderna på dess svarta sträckor, i ordning. Lista ut vilka rutor som är svarta och fyll i dem."},"step2":{"text":"Den **tredje kolumnen** har 1 2: en svart, ett mellanrum och sedan två svarta. På fyra rutor går det bara på ett sätt, med paret längst ner. **Dra** nedåt över dem."},"step3":{"text":"Då är rutan ovanför paret mellanrummet. **Högerklicka** på den för att sätta en prick, som markerar en ruta du vet är vit."},"step4":{"text":"Och den översta rutan i kolumnen är ledtrådens ensamma svarta. **Klicka** på den."},"step5":{"text":"Den **sista kolumnen** har 3. Var en sträcka på tre än ligger bland fyra rutor täcker den alltid de två mittersta, så **dra** nedåt över dem."},"step6":{"text":"En ledtråd blir grå när dess linje är klar. Fortsätt nöta på så, eller låt **Lös** göra klart det här; ett mittenklick gör en ruta okänd igen."}},"pearl":{"step1":{"text":"Rita en sluten slinga från rutmitt till rutmitt. Den behöver inte besöka varje ruta, men den måste gå genom varje pärla."},"step2":{"text":"En **vit pärla** betyder att slingan går rakt igenom den. På den översta raden är det enda raka vägen i sidled, så **dra** från rutan till vänster om pärlan till rutan till höger om den."},"step3":{"text":"Den pärlan har nu båda sina bitar, så inget annat kan gå ut från den. **Högerklicka** på kanten under den för att stryka den sidan."},"step4":{"text":"En **svart pärla** svänger, och slingan går sedan rakt genom rutan på båda sidor om den. Den vid **vänsterkanten** kan inte svänga nedåt – det skulle kräva en rak linje genom det nedre vänstra hörnet – så **klicka** på dess högra kant."},"step5":{"text":"Alltså går rutan bredvid rakt vidare – och det gör även den vita pärlan bortom den. **Dra** från den rutan bort till den fjärde kolumnen."},"step6":{"text":"Fortsätt att arbeta utifrån pärlorna; en pärla får en röd gloria så fort dess regel bryts. **Lös** ritar hela slingan om du vill se den."}},"pegs":{"step1":{"text":"En pinne hoppar över en granne ner i det tomma hålet bakom, och pinnen den hoppade över tas bort. Rensa den här lilla spelplanen ner till **en pinne**: tre hopp."},"step2":{"text":"**Dra** pinnen högst upp på skaftet nedåt över sin granne, ner i hålet längst ner."},"step3":{"text":"Det går också med klick. Klicka på **pinnen till höger** för att plocka upp den, och klicka sedan på hålet två rutor till vänster om den."},"step4":{"text":"Sista hoppet: dra pinnen i **nedre vänstra hörnet** över sin granne in i mitten."},"step5":{"text":"En pinne kvar – löst. **Ångra** tar tillbaka ett hopp när du har kört fast, och piltangenterna fungerar också: Enter plockar upp en pinne och sedan skjuter en pil iväg den.","textTouch":"En pinne kvar – löst. **Ångra** tar tillbaka ett hopp när du har kört fast, så långt tillbaka du vill."}},"range":{"step1":{"text":"Måla rutor svarta så att varje tal anger exakt hur många vita rutor dess egen ruta ser: sig själv plus varje ruta i rak linje uppåt, nedåt, åt vänster och åt höger tills en svart ruta eller kanten stoppar blicken."},"step2":{"text":"**6**:an ser just nu sex rutor – hela sin rad plus de två under sig. Så ingenting i den raden eller kolumnen får bli svart."},"step3":{"text":"**2**:an får bara se sig själv och en ruta till, och rutan ovanför den måste förbli vit för 6:ans skull. Så **klicka** på rutan till vänster om den för att måla den svart."},"step4":{"text":"Då är rutan uppe till höger den enda vita ruta som 2:an fortfarande ser. **Högerklicka** på den för att sätta en prick – så antecknar du en ruta som du vet förblir vit."},"step5":{"text":"**3**:an ser redan sig själv och de två rutorna till vänster, så rutan till höger om den måste vara svart. **Klicka** på den."},"step6":{"text":"Klart med två svarta rutor – prickarna är bara anteckningar. **H** fyller i en ruta som följer av resten, och **Lös** prickar i hela rutnätet.","textTouch":"Klart med två svarta rutor – prickarna är bara anteckningar. **Lös** prickar i hela rutnätet när du hellre vill se svaret."}},"rect":{"step1":{"text":"Dela upp rutnätet i rektanglar så att varje rektangel innehåller exakt ett tal, och det talet anger hur många rutor rektangeln täcker."},"step2":{"text":"En rektangel får bara innehålla ett tal, och **3**:an sitter precis under **4**:an – så 4:an måste ta hela den översta raden. **Dra** från 4:an bort till radens högra ände."},"step3":{"text":"Ett klick på en enskild rutnätslinje lägger till eller tar bort just den kanten. **Klicka** på linjen på högra sidan av **3**:an."},"step4":{"text":"En 9:a kan bara vara ett 3×3-block, och det finns ett ställe kvar för det. **Dra** över det framhävda blocket, från dess övre vänstra ruta till det nedre högra hörnet: då stängs 3:an också in."},"step5":{"text":"Varje ruta ligger i en rektangel av rätt storlek. **Högerdra** för att sudda ut linjerna inuti ett område men behålla dess kontur, och **Ångra** tar tillbaka ett drag."}},"samegame":{"step1":{"text":"Töm spelplanen genom att ta bort grupper av två eller fler sammanhängande rutor med samma färg. En grupp på _n_ rutor ger (_n_ − 2)² poäng, så det är de stora som räknas."},"step2":{"text":"Klicka på någon av de fyra **röda** rutorna längs toppen. Det första klicket väljer bara gruppen: den ljusnar och får en kraftig kontur."},"step3":{"text":"Klicka på den valda gruppen igen för att lyfta bort den från spelplanen och få fyra poäng. Rutor ovanför ett hål faller ner i det, och en tom kolumn drar grannarna åt sidan."},"step4":{"text":"Den här **gröna** rutan står ensam. Inget bredvid den har samma färg, så den kan aldrig väljas – den får vänta tills spelplanen flyttar en partner bredvid den."},"step5":{"text":"Nu det **blå paret** som är markerat här. Klicka på någon av de två rutorna för att välja båda."},"step6":{"text":"Ångrat dig? **Högerklicka** på det valda för att släppa det igen – inget tas bort förrän du klickar på det en andra gång."},"step7":{"text":"Det är hela spelet. Varje spelplan går att tömma, så fortsätt – **Ångra** spolar tillbaka när en ruta blir strandsatt, och det finns ingen Lös-knapp som räddar dig."}},"signpost":{"step1":{"text":"Varje ruta har en pil. Länka ihop alla sex till en kedja numrerad **1 till 6**, där varje ruta följs av en ruta någonstans längs sin egen pil."},"step2":{"text":"**1**:an pekar österut. **Dra** från den till rutan till höger för att göra den till 2:an."},"step3":{"text":"**3**:an hakade på av sig själv, som tal som följer på varandra och pekar åt rätt håll alltid gör. **Dra** nu den nedre högra rutan till rutan till vänster om den."},"step4":{"text":"Ingen av de två har något tal än, så paret märks **a** och **a+1**. **Högerklicka** på mittenrutan i den nedersta raden för att dela på dem igen."},"step5":{"text":"Riktiga tal är bättre: **dra** **3**:an till rutan under den, som blir 4:an."},"step6":{"text":"Sista länken: **dra** den 4:an till rutan till vänster om den. Den blir 5:an, och 6:an sluter vägen av sig själv."},"step7":{"text":"Löst. **Högerdra** för att länka åt andra hållet, från en ruta tillbaka till den före, och **Lös** lägger ut hela vägen."}},"singles":{"step1":{"text":"Svärta rutor tills inget tal upprepas bland de vita rutorna i någon rad eller kolumn. Två svarta rutor får aldrig dela en kant, och de vita rutorna måste hänga ihop i ett enda område."},"step2":{"text":"De två **4**:orna i den här raden har en ruta mellan sig. Att svärta den rutan skulle lämna båda 4:orna vita, så den måste själv vara vit – **högerklicka** på den för att ringa in den."},"step3":{"text":"Den inringade **3**:an är vit för gott, och dess kolumn har en till 3:a högst upp. **Vänsterklicka** på den översta för att svärta den."},"step4":{"text":"Svarta rutor rör aldrig vid varandra, så **4**:an precis till höger om den förblir vit. **Vänsterklicka** på den andra 4:an i den sista kolumnen."},"step5":{"text":"Samma sak igen: **2**:an direkt ovanför din nya svarta ruta är vit, och dess rad har en till 2:a längst till vänster. **Vänsterklicka** på den."},"step6":{"text":"En kvar. **3**:an ovanför den svarta rutan är vit, så den andra 3:an längst ner i kolumnen måste bort. **Vänsterklicka** på den."},"step7":{"text":"Löst, och de vita rutorna hänger fortfarande ihop. Ringarna är bara anteckningar, och **Ångra** stegar tillbaka genom dina drag."}},"sixteen":{"step1":{"text":"Lägg brickorna i ordning, **1 till 9**, läst från vänster till höger. Pilarna runt kanten skjuter en hel rad eller kolumn ett steg, och det som faller av kommer tillbaka på andra sidan."},"step2":{"text":"Klicka på pilen **ovanför den andra kolumnen** för att skjuta kolumnen ett steg uppåt; då blir mittenraden klar."},"step3":{"text":"Nu behöver den nedersta raden flyttas åt höger. **Högerklicka** på pilen **till vänster om den nedersta raden**: ett högerklick skickar linjen åt motsatt håll."},"step4":{"text":"Sista draget: klicka på pilen **till vänster om den översta raden** för att skjuta den åt vänster och göra klart rutnätet."},"step5":{"text":"I ordning! **Typ** i pausmenyn har större rutnät, och med **Anpassa…** där kan du få ett rutnät blandat med ett bestämt antal drag som du sedan får reda ut."}},"slant":{"step1":{"text":"Rita en diagonal genom varje ruta. Ett inringat tal anger hur många linjer som rör vid dess hörn, och linjerna får aldrig sluta en slinga."},"step2":{"text":"**0**:an i övre vänstra hörnet vill inte att något rör vid den, så dess enda ruta måste luta åt andra hållet. **Högerklicka** på den rutan för att rita ett `/`."},"step3":{"text":"**4**:an behöver en linje från alla fyra rutorna runt sig. **Vänsterklicka** på den ovanför och till vänster om den – ett vänsterklick ritar ett `\\\\`."},"step4":{"text":"Rutan ovanför och till höger om **4**:an måste i stället luta nedåt åt vänster. **Högerklicka** på den för ett `/`."},"step5":{"text":"**1**:an vid vänsterkanten har redan sin enda linje, från rutan under den. Så rutan ovanför måste luta bort: **vänsterklicka** på den för ett `\\\\`."},"step6":{"text":"Fortsätt på samma sätt. Ett tal som inte längre kan gå ihop blir rött, och det blir även varje linje som ingår i en sluten slinga. **Lös** i pausmenyn fyller i resten."}},"solo":{"step1":{"text":"Varje rad, varje kolumn och varje inramat **2×2-block** måste innehålla 1, 2, 3 och 4 exakt en gång. Tre rutor saknas i det här lilla rutnätet."},"step2":{"text":"Det här **blocket** har redan en 2:a, en 3:a och en 4:a, så dess tomma ruta kan bara vara en **1**:a. Klicka på rutan och tryck på tangenten **1**.","textTouch":"Det här **blocket** har redan en 2:a, en 3:a och en 4:a, så dess tomma ruta kan bara vara en **1**:a. Tryck på rutan och sedan på **1** på knappsatsen."},"step3":{"text":"Osäker på en ruta? **Högerklicka** på den här tomma rutan och tryck på **2** för att skriva in siffran som en anteckning.","textTouch":"Osäker på en ruta? Tryck på den här tomma rutan, lås **✎** på knappsatsen och tryck på **2** för att skriva in siffran som en anteckning."},"step4":{"text":"Dess rad har redan 3, 4 och 1, så anteckningen stämde. **Vänsterklicka** på samma ruta och tryck på **2** för att skriva in svaret.","textTouch":"Dess rad har redan 3, 4 och 1, så anteckningen stämde. Rutan är fortfarande vald, så tryck på **✎** för att sluta anteckna och sedan på **2** för att skriva in svaret."},"step5":{"text":"En ruta kvar. Dess rad har redan 4, 3 och 1 – klicka på den och tryck på siffran som saknas.","textTouch":"En ruta kvar. Dess rad har redan 4, 3 och 1 – tryck på den och sedan på siffran som saknas på knappsatsen."},"step6":{"text":"Löst! **Ångra** tar tillbaka en felaktig siffra, och tangenten **M** skriver in alla möjligheter som anteckningar i varje tom ruta på en gång.","textTouch":"Löst! **Ångra** tar tillbaka en felaktig siffra, och **Kandidater** i pausmenyn skriver in alla möjligheter som anteckningar i varje tom ruta på en gång."}},"tents":{"step1":{"text":"Slå upp ett tält bredvid varje träd – ovanför, under, till vänster eller till höger om det, aldrig diagonalt. Inga två tält får röra vid varandra, och talen anger antalet tält i varje rad och kolumn."},"step2":{"text":"**0**:an i slutet av den andra raden betyder att raden inte får några tält. **Högerklicka** på rutan bredvid trädet för att markera den som gräs."},"step3":{"text":"Den tredje kolumnen är också tom. **Högerdra** från dess översta ruta ner till den tredje raden för att göra alla tre till gräs på en gång."},"step4":{"text":"Trädet nere till höger står i hörnet med ett annat träd bredvid sig, så dess enda lediga granne är ovanför. **Vänsterklicka** på den rutan för att slå upp ett tält."},"step5":{"text":"Det tältet fyller den tredje raden, så trädet vid vänsterkanten kan inte heller få sitt tält under sig. **Vänsterklicka** på den övre vänstra rutan."},"step6":{"text":"Ett träd har fortfarande inget tält, och bara rutan till vänster om det är ledig. **Vänsterklicka** på den för att göra klart tältplatsen."},"step7":{"text":"Löst! Klickar du på ett tält eller en gräsmarkering igen försvinner den, piltangenterna med Enter och Space gör samma sak, och **Ångra** tar ett steg tillbaka.","textTouch":"Löst! Trycker du på ett tält eller en gräsmarkering igen försvinner den, och **Ångra** tar ett steg tillbaka."}},"towers":{"step1":{"text":"Varje rad och kolumn har ett torn av varje höjd, 1 till 4. Ett tal vid kanten anger hur många torn du kan **se** därifrån: ett högre torn döljer alla lägre bakom sig."},"step2":{"text":"**1**:an till höger om den översta raden betyder att bara ett torn syns från det hållet, så det närmaste måste vara det högsta. Klicka på rutan och tryck på **4**.","textTouch":"**1**:an till höger om den översta raden betyder att bara ett torn syns från det hållet, så det närmaste måste vara det högsta. Tryck på rutan och sedan på **4** på knappsatsen."},"step3":{"text":"Du kan anteckna möjligheter i stället för att svara. **Högerklicka** på den tomma rutan längst till vänster i den översta raden och tryck på **1**.","textTouch":"Du kan anteckna möjligheter i stället för att svara. Tryck på den tomma rutan längst till vänster i den översta raden, lås **✎** på knappsatsen och tryck på **1**."},"step4":{"text":"**4**:an till vänster om raden säger att alla fyra torn syns, så de stiger 1-2-3-4 från det hållet. **Vänsterklicka** på rutan och tryck på **1** för att svara.","textTouch":"**4**:an till vänster om raden säger att alla fyra torn syns, så de stiger 1-2-3-4 från det hållet. Rutan är fortfarande vald, så tryck på **✎** för att sluta anteckna och sedan på **1** för att svara."},"step5":{"text":"En ruta kvar, och **1**:an bredvid dess rad placerar återigen det högsta tornet närmast. Klicka på den och tryck på **4**.","textTouch":"En ruta kvar, och **1**:an bredvid dess rad placerar återigen det högsta tornet närmast. Tryck på den och sedan på **4** på knappsatsen."},"step6":{"text":"Löst! **Backspace** tömmer en ruta du har fått fel, och **Lös** i pausmenyn gör klart ett pussel som har besegrat dig.","textTouch":"Löst! **⌫** på knappsatsen tömmer en ruta du har fått fel. I pausmenyn skriver **Kandidater** in alla möjligheter, och **Lös** gör klart ett pussel som har besegrat dig."}},"tracks":{"step1":{"text":"En järnväg går från ingången till vänster till utgången längst ner, och varje ruta den besöker har exakt två räls. Talen anger hur många rutor i kolumnen eller raden som linjen går genom."},"step2":{"text":"Ingångsbiten går redan upp i **den övre vänstra rutan**, och den rutans över- och vänstersida är rutnätets kant. Så dess andra räl måste gå åt höger: **klicka** strax till höger om dess mitt."},"step3":{"text":"Den **vänstra kolumnen** har talet **2** och ingången använder redan båda rutorna, så inget går genom dess nedre halva. **Högerklicka** mitt i en ruta för att kryssa för den – högerdra för att kryssa en hel sträcka."},"step4":{"text":"Den **högra kolumnen** har talet **4**, så linjen besöker varje ruta i den, och rutorna högst upp och längst ner kan bara svänga inåt. **Dra** från den övre högra rutan hela vägen ner till den nedre högra."},"step5":{"text":"Den **nedersta raden** behöver tre rutor och den vänstra kolumnen är klar, så det nedre högra hörnet ligger på linjen. Den kan inte lämna rutnätet, så den svänger åt vänster och uppåt: **klicka** på dess vänstra sida."},"step6":{"text":"Talen blir grå när deras linje stämmer och röda när den inte kan gå ihop. Fortsätt runt de lösa ändarna, eller låt **Lös** göra klart järnvägen."}},"twiddle":{"step1":{"text":"Få tillbaka talen i ordning, **1 till 9**. Ett drag vrider ett kvadratiskt block av fyra brickor ett kvarts varv; tre vridningar gör klart den här spelplanen."},"step2":{"text":"Klicka mitt i de **fyra övre vänstra brickorna**. Ett vänsterklick vrider blocket moturs, vilket lägger 1, 2, 3 längs toppen."},"step3":{"text":"**Högerklicka** mitt i de **fyra nedre högra brickorna** för att i stället vrida det blocket medurs."},"step4":{"text":"Avsluta med ett vänsterklick mitt i de **fyra nedre vänstra brickorna**."},"step5":{"text":"Klart! Menyn **Typ** har större block och ett läge *med riktning*, där varje bricka också måste hamna rätt vänd."}},"undead":{"step1":{"text":"Fyll de fem tomma rutorna med spöken, vampyrer och zombier – räkningen överst anger hur många av varje. Varje tal anger hur många monster som syns när man tittar längs den linjen, och speglarna böjer blicken."},"step2":{"text":"Tittar du in **från vänster i den översta raden** ser du ingenting; spegeln böjer samma linje ut upptill, där **1**:an ser ett monster. Bara ett spöke gömmer sig rakt framifrån men syns i en spegel. **Klicka** på den rutan."},"step3":{"text":"**4**:an i nedre vänstra hörnet sicksackar genom speglarna förbi tre rutor och ser varenda en. Vampyrer försvinner i en spegel, så den enda vampyren måste vara mittenrutan i den vänstra kolumnen. **Klicka** på den."},"step4":{"text":"Ett klick stegar bara igenom monstren. **Tryck på V** i stället: G, V och Z sätter ett spöke, en vampyr eller en zombie direkt i den markerade rutan.","textTouch":"Ett tryck stegar bara igenom monstren ett i taget. Tryck i stället på **Vampyr** på knappsatsen: då hamnar det monstret direkt i den markerade rutan."},"step5":{"text":"**Mittenraden** är en rak vy utan speglar och båda **1**:orna ser ett enda monster – vampyren. Så dess två grannar måste vara spöken. **Klicka** på mittenrutan."},"step6":{"text":"Ett **högerklick** skriver in en liten anteckning i stället för att placera något. Prova på den högra rutan i den raden; varje högerklick lägger till nästa monster."},"step7":{"text":"Två rutor kvar: den med anteckningen är det tredje spöket och den sista är zombien. Talen blir grå när deras linje är avgjord; **Lös** gör klart labyrinten om du hellre vill titta på."}},"unequal":{"step1":{"text":"Varje rad och kolumn behöver 1, 2, 3 och 4 en gång var – och varje tecken mellan två rutor måste peka mot den **mindre** av dem."},"step2":{"text":"Tecknet här pekar åt höger, så den **vänstra** rutan är den större. Raden behöver fortfarande en 2:a och en 3:a: klicka på den vänstra rutan och tryck på **3**.","textTouch":"Tecknet här pekar åt höger, så den **vänstra** rutan är den större. Raden behöver fortfarande en 2:a och en 3:a: tryck på den vänstra rutan och sedan på **3** på knappsatsen."},"step3":{"text":"Rutan som tecknet pekar mot får det mindre talet. Klicka på den och tryck på **2**.","textTouch":"Rutan som tecknet pekar mot får det mindre talet. Tryck på den och sedan på **2** på knappsatsen."},"step4":{"text":"Dess kolumn har nu en 3:a, så den här rutan kan bara vara en 2:a. **Högerklicka** på den och tryck på **2** för att skriva in det som en anteckning.","textTouch":"Dess kolumn har nu en 3:a, så den här rutan kan bara vara en 2:a. Tryck på den, lås **✎** på knappsatsen och tryck på **2** för att skriva in det som en anteckning."},"step5":{"text":"En anteckning är inget svar. **Vänsterklicka** på samma ruta och tryck på **2** för att bestämma dig.","textTouch":"En anteckning är inget svar. Rutan är fortfarande vald, så tryck på **✎** för att sluta anteckna och sedan på **2** för att bestämma dig."},"step6":{"text":"En ruta kvar. Klicka på den och tryck på **3** för att fylla kvadraten.","textTouch":"En ruta kvar. Tryck på den och sedan på **3** på knappsatsen för att fylla kvadraten."},"step7":{"text":"Löst! **Ångra** tar tillbaka en siffra, och **Lös** fyller i svaret om ett pussel besegrar dig.","textTouch":"Löst! **Ångra** tar tillbaka en siffra, **Kandidater** och **Tips** skriver in möjligheterna som anteckningar, och **Lös** fyller i svaret om ett pussel besegrar dig."}},"unruly":{"step1":{"text":"Färga varje ruta svart eller vit. Varje rad och kolumn behöver **tre av varje**, och ingen färg får förekomma **tre gånger i rad**. Tre rutor är fortfarande obestämda."},"step2":{"text":"Den här raden har redan sina tre vita rutor, så den obestämda måste vara svart. **Vänsterklicka** på den: ett vänsterklick målar svart."},"step3":{"text":"Den här raden har redan tre svarta, så dess obestämda ruta är vit. **Högerklicka** på den – ett högerklick går åt andra hållet och målar vitt först."},"step4":{"text":"Den sista obestämda rutan har två svarta till vänster, och en tredje i rad är inte tillåten. **Högerklicka** på den för att måla den vit och göra klart rutnätet."},"step5":{"text":"Löst! Klickar du på en färgad ruta igen byter den till den andra färgen och sedan tillbaka till obestämd, och **Ångra** stegar tillbaka genom dina drag."}},"untangle":{"step1":{"text":"Sex punkter sitter i en ring, förbundna av åtta linjer. Två par av dem korsar varandra – det är de röda. Dra runt punkterna tills inget rött är kvar."},"step2":{"text":"Klicka först på **Fäst**, rutnätsknappen bredvid Ångra (eller tryck på **G**). Det slår på fästrutnätet, så att en punkt du släpper hamnar på en av de svaga prickarna mitt i en ruta."},"step3":{"text":"**Dra** punkten högst upp i ringen till den tomma rutan i **övre vänstra hörnet**.","textTouch":"**Dra** punkten högst upp i ringen till det tomma utrymmet i spelplanens **övre vänstra hörn**. Den behöver inte hamna på något exakt ställe – korsningen måste bara försvinna."},"step4":{"text":"En korsning kvar, borta till höger. **Dra** den lägsta punkten till det tomma **nedre högra hörnet**.","textTouch":"En korsning kvar, borta till höger. **Dra** den lägsta punkten till det tomma **nedre högra hörnet** – den sista röda linjen försvinner så fort den är fri."},"step5":{"text":"Utrett. **Lös** reder ut vilket virrvarr som helst åt dig, och piltangenterna flyttar en markör från punkt till punkt, med Enter för att plocka upp och släppa en punkt.","textTouch":"Utrett. Röda linjer är de som fortfarande korsar varandra, så fortsätt dra tills inga är kvar – eller låt **Lös** reda ut virrvarret åt dig."}}}'),Fe={$locale:`sv`,$name:q,$dir:`ltr`,ui:J,touchPhrases:Y,messages:X,status:Z,games:Q,tutorials:$};export{g as A,ee as B,A as C,S as D,w as E,o as F,i as I,oe as L,f as M,u as N,b as O,c as P,ie as R,M as S,E as T,t as V,H as _,Ee as a,I as b,be as c,me as d,fe as f,W as g,se as h,Oe as i,m as j,v as k,ve as l,ce as m,Me as n,we as o,ue as p,Ae as r,Se as s,Pe as t,ge as u,B as v,O as w,P as x,R as y,ne as z};
//# sourceMappingURL=i18n-sv-DaFp2vzB.js.map