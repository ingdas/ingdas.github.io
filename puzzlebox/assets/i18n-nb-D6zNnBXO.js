import{t as e}from"./index-DIYwYEVR.js";var t=e({default:()=>n}),n="## Vanlige kontroller\n\n- **Nytt** gir deg et nytt puslespill, og **Start på nytt** tar deg tilbake til starten av\n  dette. **Angre** og **Gjør om** går gjennom trekkene dine, og også en omstart kan angres.\n- **Løs** viser svaret der puslespillet har en løsningsfunksjon. Det legges til som et trekk\n  du kan angre.\n- Et høyreklikk er den andre handlingen i de fleste puslespill — merking, flagging eller\n  dreining motsatt vei. Et midtklikk, der et puslespill bruker det, er den tredje.\n- **Type** bytter mellom ferdige størrelser og vanskelighetsgrader; med **Egendefinert…**\n  velger du selv.\n- **Del** viser koder du kan sende videre, slik at noen andre kan spille akkurat dette\n  puslespillet.\n\n### Tastatur (Keyboard)\n\n- **Nytt spill**: `N` · **Angre**: `U` eller `Ctrl+Z` · **Gjør om**: `R` eller `Ctrl+Y`\n- **Løs**: `Ctrl+S` (der det finnes). **Denne hjelpen**: `?`, og `Esc` lukker den. **Pause**: `Esc`.\n- I de fleste puslespill flytter piltastene en markør over brettet, `Enter` virker som et\n  venstreklikk der markøren står, og `Space` som et høyreklikk.\n- I menyene flytter piltastene fra ett kort eller én knapp til den neste, `Enter` velger\n  og `Esc` går tilbake.\n- En spillkontroller virker også: retningsknappene flytter, `A` velger eller klikker, `X`\n  er høyreklikket, `B` går tilbake, `Start` setter på pause, `LB` og `RB` angrer og gjør\n  om, og `Y` gir et hint.\n  I puslespill der du skriver inn tall, tar `RT` deg til tastene på skjermen og tilbake.\n",ee=e({default:()=>te}),te=`## På berøringsskjerm

- **Trykk** for hovedhandlingen og **trykk lenge** for den andre. Har et puslespill en
  tredje, trykker du med **to fingre**.
- Den første runde knappen i verktøylinjen (en prikk i en firkant) bytter om på de to, slik
  at handlingen du bruker mest, alltid er ett trykk unna; mens de er byttet om, lyser et
  lite flagg på den. Et langt trykk gjør da den andre.
- **Spre to fingre** på brettet for å gjøre rutene større på et stort rutenett, og **dra
  med to fingre** for å flytte deg rundt. Knip fingrene sammen igjen for å se hele
  puslespillet. Under **Pause** finner du de samme to størrelsene som knapper.
- **Pause** rommer resten av kontrollene: puslespilltypen, nytt puslespill, start på nytt, løs, del
  og Innstillinger for lyd og språk. Klokka står stille mens menyen er åpen.
`,ne=e({default:()=>re}),re=`# Svart boks

Noen kuler er gjemt inne i en skravert boks. Rundt boksen løper en ramme av laserporter.
Skyt en laser inn i boksen fra en hvilken som helst port, og se hva som kommer ut: regn ut
fra resultatene hvor kulene må ligge, merk dem, og få så svaret ditt sjekket.

En stråle går i rett linje med mindre en kule kommer i veien:

- En kule rett foran **sluker** strålen. Porten viser **H** (et treff).
- En kule på skrå foran **avbøyer** strålen 90° bort fra kulen. Kuler på begge
  diagonalene sender den rett tilbake. Avbøyningene kan følge etter hverandre, så en
  stråle kan rekke å vandre en del før den slipper ut.
- En stråle som kommer ut igjen av porten den gikk inn gjennom, er **reflektert** og vises
  som **R**. Det samme gjelder en stråle som ville blitt bøyd av allerede før den kom inn
  i boksen, fordi det ligger en kule på skrå ved siden av inngangen.
- Ellers dukker strålen opp et annet sted, og de to portene får samme **tall** (og samme
  farge), så du kan se hvor hvert skudd gikk inn og kom ut igjen.

Når du har merket riktig antall kuler, dukker det opp en grønn knapp øverst til venstre.
Klikk på den for å få svaret sjekket. Oppstillingen din teller som riktig hvis ingen laser
kan skille den fra datamaskinens — med flere kuler kan det finnes mer enn én oppstilling
som oppfører seg likt, og hvilken som helst av dem gir seier.

En feil oppstilling avslutter spillet og viser svaret, så sjekk bare når du er sikker:
kulene du fant, er svarte, gale merker er streket ut i rødt, kuler du overså, er
røde, hver laser du skjøt som oppstillingen din gir feil svar på, får en ring rundt seg,
og lasere du aldri skjøt, men som ville avslørt forskjellen, skytes nå og skrives i rødt.
Angre tar deg tilbake så du kan prøve videre. Løs gir opp og setter inn de virkelige
kulene.

## Kontroller

Statuslinjen teller kulene du har merket og laserne du har skutt, og etter en sjekk sier den
hvor mange av kulene dine som var feil, og hvor mange du bommet på.

### Mus og berøring

- **Klikk på en port** for å skyte en laser derfra. Klikk på en port du allerede har skutt
  fra, for å lyse opp begge endene av den strålen; klikk på den igjen, eller et annet sted,
  for å slukke lyset.
- **Klikk inne i boksen** for å merke en kule der; klikk på den igjen for å fjerne
  merket.
- **Høyreklikk på en rute** for å **låse** den, så du ikke endrer den ved et uhell;
  høyreklikk på den igjen for å låse opp. Høyreklikk på en port for å låse eller låse opp
  hele raden eller kolonnen ved siden av.
- **Klikk på knappen i hjørnet** for å få merkene dine sjekket.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør over boksen og portene.
- **Enter** virker som et venstreklikk: skyt, merk, eller sjekk når markøren står på
  knappen.
- **Space** virker som et høyreklikk og låser eller låser opp.

## Innstillinger

- **Bredde** og **høyde** på boksen. Hver rad og kolonne har en laserport i begge ender.
- **Antall kuler**: hvor mange kuler som er gjemt. Oppgi ett tall, eller et intervall som
  \`3-6\` og la datamaskinen velge; da må du regne ut antallet også, og sjekkeknappen dukker
  opp ved et hvilket som helst antall merker innenfor intervallet.
`,ie=e({default:()=>ae}),ae=`# Broer

Øyer med hvert sitt tall ligger spredt utover vannet. Knytt dem sammen med broer slik at:

- hver bro går rett bortover eller rett nedover mellom to øyer;
- tallet på en øy er nøyaktig hvor mange broer som berører den;
- to øyer kan knyttes sammen med parallelle broer, men med høyst to (denne grensen kan
  endres under Egendefinert…);
- ingen bro krysser en annen;
- alle øyer kan nås fra alle andre ved å gå over broer.

Feil vises i rødt: en øy med for mange broer, en øy som ikke lenger kan få nok (naboene
den har igjen, er fulle, eller de eneste veiene er sperret av andre broer eller av dine
egne «ingen bro»-merker), og en gruppe øyer som allerede er komplett, men avskåret fra
resten. Er løkker ikke tillatt, blir også broer som danner en løkke, markert i rødt.

## Kontroller

**Løs** fyller inn løsningen og fjerner broer som ikke hører hjemme.

### Mus og berøring

- **Dra** fra en øy mot en nabo for å legge en bro mellom dem. Du trenger bare å flytte
  langt nok til at retningen er tydelig; broen fester seg til den nærmeste øyen den veien.
  Dra en gang til for en parallell bro nummer to; drar du enda en gang når grensen er
  nådd, forsvinner alle sammen.
- **Dra med høyre knapp** på samme måte for å notere «ingen bro her», eller for å fjerne
  et slikt merke.
- **Klikk** på en øy for å merke den som ferdig. Den blir grå, og broene låses, så du ikke
  kan endre dem ved et uhell; klikk en gang til for å låse opp.
- **Viskelær** (viskelærknappen ved siden av Angre) gjør at du fjerner når du drar: dra fra en
  øy mot en nabo for å ta bort alle broene mellom dem, eller «ingen bro»-merket der. Trykk på
  den en gang til for å gå tilbake til å legge broer.
- **Hjelpelinjer** viser svake streker overalt der en bro kan gå, og skjuler dem igjen.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør fra øy til øy.
- **Enter** fulgt av en piltast legger en bro i den retningen; **Space** fulgt av en
  piltast legger et merke. Trykker du **Enter** to ganger, merkes øyen som ferdig.
- **E** er knappen **Viskelær** og **G** knappen **Hjelpelinjer**.

## Innstillinger

- Rutenettets **bredde** og **høyde**, minst 3 hver.
- **Vanskelighetsgrad**: på _Lett_ trenger du bare å se på én øy om gangen — der de broene
  den mangler, fyller nøyaktig plassen som er igjen, eller der tallet er for stort til at
  noen nabo kan hoppes over. På _Middels_ må du også tenke på enkeltforbindelser: hvilken
  bro som må være der fordi øyen ikke kan bli ferdig uten den, og (når løkker er forbudt)
  hvilke forbindelser som ville lukket en løkke. På _Vanskelig_ må du se ett skritt fram:
  ville denne broen gjort ferdig en gruppe øyer som er avskåret fra resten, eller latt en øy
  stå uten noe sted å gå? Hvert puslespill har nøyaktig én løsning.
- **Tillat løkker**: på som standard. Slår du det av, må det ferdige bronettet være et
  tre — ingen vei av broer kan føre tilbake dit den startet — og puslespillet lages slik
  at det kan løses med det for øye.
- **Maks. broer per retning**: grensen for parallelle broer, normalt 2. Færre gjør det
  lettere.
- **% øyruter**: omtrent hvor mye av rutenettet som blir øyer. Noen oppsett får ikke plass
  til så mange, så dette er en øvre grense.
- **Utvidelsesfaktor**: når kartet vokser, hvor sannsynlig det er at en ny øy legges så
  langt unna som mulig i stedet for et sted nærmere. Høye verdier gir glisne og lette
  puslespill; lave verdier gir tettpakkede.
`,oe=e({default:()=>r}),r=`# Terning

En figur står på et rutenett, og en håndfull av rutene er malt blå — nøyaktig like mange
som figuren har flater. Når du ruller figuren, vipper den over en av kantene på flaten den
står på, slik at neste flate kommer ned på naboruten. Hver gang den lander, bytter flaten
under og ruten den landet på farge: lander en blank flate på en blå rute, blir det blå med
opp på figuren; lander en blå flate på en blank rute, blir det blå liggende igjen der.
Puslespillet er løst når alle flatene er blå samtidig. Statuslinjen teller hvor mange
ganger du har rullet, så prøv å bli ferdig på så få rull som mulig.

Den klassiske utgaven ruller en terning på et kvadratisk rutenett. På et trekantet rutenett
kan du i stedet rulle et tetraeder, et oktaeder eller et ikosaeder. Husk at hver flate på et
rullende tetraeder aldri kan nå mer enn en fjerdedel av rutene, og at flatene på et oktaeder
veksler mellom trekantene som peker opp og dem som peker ned — de blå rutene er alltid
plassert slik at puslespillet kan fullføres.

## Kontroller

Det finnes ingen Løs-knapp for dette puslespillet. Når alle flatene er blå, kan du gjerne
rulle figuren videre uten at det ødelegger noe.

### Mus og berøring

- **Klikk** hvor som helst for å rulle figuren én rute i retning av musepekeren. På et
  kvadratisk rutenett vil det si opp, ned, til venstre eller til høyre; på et trekantet
  rutenett kan du velge mellom de tre naboene til trekanten figuren står på. Med klikk når
  du alle naboene figuren har, så dette alene er nok til å spille på alle rutenettene.

### Tastatur (Keyboard)

- **Piltastene** ruller figuren i de fire hovedretningene. På et trekantet rutenett har en
  trekant bare en nabo enten over eller under seg, så den andre loddrette piltasten gjør
  ingenting.
- **Home**, **Page Up**, **End** og **Page Down** (eller hjørnetastene på det numeriske
  tastaturet, 7, 9, 1 og 3) ruller diagonalt på de trekantede rutenettene og velger den
  kanten som ligger nærmest i den retningen.

## Innstillinger

- **Type figur**: tetraeder, terning, oktaeder eller ikosaeder. Terningen bruker et
  kvadratisk rutenett; de andre bruker et rutenett av trekanter.
- **Bredde / topp** og **Høyde / bunn**: for terningen er dette størrelsen på det
  kvadratiske rutenettet. For de trekantede rutenettene er det lengden på den øverste og den
  nederste kanten i en sekskantet arena (setter du en av dem til null, får du en vanlig
  trekant). Rutenettet må ha plass til alle de blå rutene pluss en tom startrute.
`,i=e({default:()=>a}),a=`# Dominosa

Et komplett sett dominoer — én for hvert tallpar fra 0 opp til det høyeste tallet,
dobbeltene medregnet — ble lagt ut slik at det fylte et rektangel. Så ble tallene skrevet
av, og dominoene tatt bort. Oppgaven din er å finne ut hvor de lå: del rutenettet opp i par
av naboruter, slik at hver domino i settet blir brukt nøyaktig én gang.

En domino som legges der tallparet allerede finnes et annet sted, vises i rødt, og det
samme gjør en udekket rute som ingen domino lenger kan nå.

## Kontroller

Puslespillet er ferdig når hver rute er dekket og ingen domino er rød. **Løs** legger ut
alle dominoene i løsningen og fjerner det du selv hadde lagt.

### Mus og berøring

- **Klikk** på grensen mellom to nabotall (eller i den halvdelen av en rute som ligger
  nærmest den grensen) for å legge en domino over dem. Klikk på den samme grensen igjen for
  å ta den bort. En domino som legges over en del av en annen, erstatter den.
- **Høyreklikk** på en grense for å tegne en blyantstrek over den, som et notat om at de to
  tallene **ikke** er én domino. Høyreklikk en gang til for å viske ut streken. Det går
  ikke an å tegne streker inntil en domino, og legger du en domino, blir strekene som rører
  den, visket ut.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør rundt i rutenettet og stopper både midt i rutene og på
  grensene mellom dem. På en grense tegner markøren omrisset av dominoen den ville lagt.
- **Enter** legger eller fjerner den dominoen, og **Space** tegner eller visker ut en strek
  der.

## Innstillinger

- **Høyeste tall på dominoene**: dominoene går fra 0-0 opp til N-N, og rutenettet er (N+2)
  ruter bredt og (N+1) ruter høyt, så et maksimum på 6 gir et 8×7-rutenett.
- **Vanskelighetsgrad**: hvor mye resonnering puslespillet krever. På **Veldig lett** finnes det
  alltid enten en domino med bare ett sted å ligge, eller en rute med bare én domino som kan
  dekke den. **Lett** legger til to nye argumenter: hver måte å dekke denne ruten på bruker den
  samme dominoen, så den dominoen kan ikke ligge noe annet sted; og en plassering som blir
  utelukket uansett hvor denne dominoen legges, er umulig. **Vanskelig** legger til telling (en
  domino som ville skåret av et oddetall ruter, er umulig; en samling ruter med det samme tallet
  kan gjøre krav på dominoene de deler), og på **Ekstrem** må du følge konsekvensene av en
  plassering til de kolliderer. Alle disse har nøyaktig én løsning. **Flertydig**-puslespill blir
  ikke sjekket i det hele tatt: de kan ha flere løsninger og kan kreve gjetting — finner du bare
  én gyldig oppdeling, har du vunnet.
`,o=e({default:()=>s}),s=`# Femten

Det klassiske skyvepuslespillet. Rutenettet er fylt med nummererte brikker og én tom
rute. Skyv brikker inn i hullet til tallene står i rekkefølge fra venstre mot høyre og
ovenfra og ned, med hullet nederst til høyre.

## Kontroller

**Løs** hopper rett til den ferdige oppstillingen. Den viser deg ikke hvordan du kommer
dit, men den er en hendig måte å nullstille på når du øver inn faste trekk.

### Mus og berøring

- **Klikk** på en hvilken som helst brikke i samme rad eller kolonne som hullet for å
  skyve den (og alt mellom den og hullet) på plass.

### Tastatur (Keyboard)

- **Piltastene** skyver en brikke inn i hullet i pilens retning: **pil opp** skyver
  brikken under hullet opp i hullet.

## Innstillinger

- **Bredde** og **høyde** på rutenettet (standard er det klassiske 4×4).
`,c=e({default:()=>l}),l=`# Utfylling

Noen ruter i rutenettet har allerede et siffer; resten er tomme. Skriv et siffer i hver
tomme rute slik at hver sammenhengende gruppe av like sifre dekker nøyaktig så mange ruter
som sifferet sier: hvert 3-tall hører til en gruppe på tre 3-tall, hvert 1-tall står alene,
og så videre. Ruter henger bare sammen gjennom sidene, ikke gjennom hjørnene. Derfor
rommer ingen rute et 0-tall, to 1-tall ligger aldri side om side, og ingen gruppe er større
enn ni ruter. Et oppgitt siffer trenger ikke være starten på gruppen sin: flere oppgitte
4-tall kan havne i samme gruppe, og en gruppe kan være helt uten oppgitte sifre.

Tykke streker dukker opp mellom ruter med ulike sifre, og rundt enhver gruppe som allerede
har riktig størrelse (eller er for stor). Et siffer blir rødt når gruppen har vokst seg
større enn sifferet, eller når den er stengt inne uten plass til å nå størrelsen sin. Dette
er puslespillet Nikoli har gitt ut som Fillomino.

## Kontroller

Oppgitte sifre er tegnet i blekk og kan ikke endres; dine egne sifre er blå. **Løs** fyller
inn løsningen.

### Mus og berøring

- **Klikk** på en tom rute for å velge den, og bruk så tastene på skjermen til å skrive
  inn et siffer. **⌫** på tastene tømmer utvalget igjen.
- **Dra** over flere ruter for å velge dem alle, slik at ett siffer fyller hver valgte rute
  på én gang.
- **Høyreklikk** på en rute for å legge den til utvalget uten å begynne på nytt; høyreklikk
  på en valgt rute igjen for å ta den ut av utvalget.
- **Fyll** (knappen ved siden av Angre) sprer et siffer: dra fra en rute som har et siffer, over
  rutene rundt, så får alle det sifferet når du slipper, uten at du trenger tastene. Klikk og
  dragninger som starter i en tom rute, velger fortsatt. Trykk på den igjen for å gå tilbake til
  å velge.

### Tastatur (Keyboard)

- Med én eller flere ruter valgt kan du **skrive et siffer** for å sette det inn i alle
  sammen. Sifferet \`0\`, eller **Backspace**, tømmer dem igjen.
- **Piltastene** flytter en tastaturmarkør, og et siffer du skriver, fyller ruten under den.
- **Space** eller **Enter** veksler ruten under markøren inn og ut av utvalget, slik at
  flere ruter kan fylles med ett tastetrykk.
- **F** er knappen **Fyll**.

## Innstillinger

- **Bredde** og **Høyde**: størrelsen på rutenettet. Grupper er aldri større enn den
  lengste siden (eller 9), så små rutenett bruker bare små sifre.
`,u=e({default:()=>d}),d=`# Vend

Et rutenett der noen ruter er tent og andre er mørke. Målet er å få alle til å lyse på én
gang. Trykker du på en rute, vender den mellom tent og mørk, men den vender også noen av
naboene sine: den lille figuren som er tegnet på hver rute, viser nøyaktig hvilke. Med
standardfigurene **Kryss** vender hvert trykk ruten selv og de fire naboene vannrett og
loddrett; med **Tilfeldig** har hver rute sitt eget uregelmessige mønster, så puslespillet
spilles ulikt hver gang.

Siden to trykk på den samme ruten opphever hverandre, og rekkefølgen på trykkene aldri
betyr noe, er en løsning bare et utvalg ruter som skal ha ett trykk hver.

## Kontroller

Statuslinjen teller trykkene dine. **Løs** tenner hele brettet og tegner røde omriss rundt
rutene den trykket på for å komme dit. Fortsetter du å trykke etterpå, følger de røde
omrissene med og viser hvilke ruter som fortsatt mangler et trykk for å komme tilbake til
den ferdige stillingen.

### Mus og berøring

- **Klikk** på en rute for å vende den.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør rundt i rutenettet; **Enter** eller **Space** trykker på
  ruten under markøren.

## Innstillinger

- **Bredde** og **høyde** på rutenettet, fra 2 opp til 10 ruter på hver side.
- **Figurtype**: _Kryss_ vender hver rute sammen med naboene vannrett og loddrett;
  _Tilfeldig_ gir hver rute en tilfeldig utvokst figur innenfor 3×3-blokken rundt den.
`,f=e({default:()=>p}),p=`# Flom

Rutenettet er et lappeteppe av tilfeldig fargede ruter. Du rår over ruten øverst til venstre
sammen med alle rutene som henger sammen med den gjennom en sti i samme farge. Hvert trekk
maler om hele denne sammenhengende flekken i en farge du velger, slik at naboruter i den
fargen også blir en del av flekken din. Fortsett til hele rutenettet har én farge.

Haken er grensen for antall trekk. Før du starter, løser spillet rutenettet selv og gir deg
sitt eget antall trekk pluss noen få ekstra; bruker du opp grensen før rutenettet er
ensfarget, er runden tapt. Du kan fortsatt fylle videre etterpå for å se rutenettet bli
ferdig, men det teller ikke lenger som en seier.

## Kontroller

Statuslinjen viser hvor mange trekk du har brukt av grensen. **Løs** lar løseren gjøre
rutenettet ferdig for deg; det teller som løst automatisk og ikke som en seier du har tatt
selv.

### Mus og berøring

- **Klikk** på en rute som har en annen farge enn flekken din, for å male flekken om i den
  fargen. Et klikk på en rute som allerede passer, gjør ingenting og koster ikke et trekk.
- **Hint** spiller løserens neste farge for deg, som et vanlig trekk du kan angre. Med noen
  få hint er seieren, og poenget, fortsatt ditt.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør rundt på rutenettet; **Enter** eller **Space** maler
  flekken om i fargen under markøren.

## Innstillinger

- **Bredde** og **høyde** på rutenettet, opptil 32 ruter i hver retning.
- **Farger**: hvor mange farger rutenettet bruker, fra 3 til 10. Færre farger gir færre valg
  og et lettere spill.
- **Ekstra trekk tillatt**: hvor mange ekstra trekk som legges til løserens egen løsning for
  å danne grensen. Med 0 må du være minst like effektiv som løseren; den er habil, men ikke
  perfekt, så det går an å slå den.
`,m=e({default:()=>h}),h=`# Galakser

Rutenettet er strødd med prikker, som kan ligge midt i en rute, på en linje mellom to
ruter eller i et hjørne der fire møtes. Tegn vegger langs linjene i rutenettet for å dele
det opp i områder, slik at hvert område inneholder nøyaktig én prikk, og den prikken er
områdets symmetrisenter: dreier du området 180° om prikken, må det lande nøyaktig oppå seg
selv. Hver eneste rute må havne i et område, så ingen områder kan bli stående uten prikk.

Puslespillene lages tilfeldig og har alltid én entydig løsning. Puslespillet er Nikolis
«Tentai Show», også kjent som Spiral Galaxies.

## Kontroller

Et område som er lukket og riktig — én prikk, i symmetrisenteret, ingen løse vegger inni —
blir skravert. En prikk blir rød når det går en vegg gjennom den, eller når den er den
eneste prikken i et lukket område som ikke er symmetrisk om den; et lukket område helt
uten prikk får skråstriper. Puslespillet er ferdig når alle rutene er skravert. **Løs**
tegner hele løsningen.

### Mus og berøring

- **Klikk** på en linje i rutenettet for å tegne en vegg der, eller klikk på en vegg for å
  fjerne den.
- **Dra fra en prikk** inn i en rute for å legge igjen en liten pil som peker tilbake mot
  prikken, som en påminnelse om at ruten hører til den prikkens galakse.
- **Dra med høyre knapp** i en pil som allerede ligger der, for å flytte den. Slipp den
  tilbake på prikken sin, eller dra den ut av rutenettet, for å kaste den; slipper du den på
  en rute som allerede har en pil, tar den plassen til den pilen.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør over både ruter, linjer og hjørner.
- **Enter** på en linje tegner eller fjerner veggen der; **Enter** på en prikk plukker opp
  en pil, som følger markøren til du trykker **Enter** igjen for å slippe den.

## Innstillinger

- **Bredde** og **høyde** på rutenettet, minst 3 hver. De ferdige oppsettene går fra 7×7
  til 15×15.
- **Vanskelighetsgrad** — _Middels_ kan løses skritt for skritt ut fra det symmetriregelen
  tvinger fram; på _Ekstrem_ kan du bli nødt til å prøve ut en antakelse og se hvor den fører
  hen.
`,g=e({default:()=>_}),_=`# Gjett

Datamaskinen har gjemt en rad med fargede pinner bak skjoldet øverst på brettet. Jobben din
er å gjenskape den nøyaktig, bare ut fra merkene du får for hvert gjett: en **svart** pinne
for hver pinne med riktig farge på riktig plass, og en **hul** pinne for hver ekstra pinne
som har en farge som finnes et annet sted i den skjulte raden. Merkene forteller deg
_hvor mange_ pinner som var riktige, ikke _hvilke_. Finn raden før du går tom for gjett,
så løftes skjoldet; går du tom, løftes det likevel og viser deg hva du gikk glipp av.

Dette er spillet Hasbro selger som _Mastermind_: seks farger, fire pinner og ti gjett. Alle
innstillinger kan endres.

## Kontroller

**Løs** løfter skjoldet og viser svaret; det avslutter spillet på samme måte som om du gikk
tom for gjett.

### Mus og berøring

- **Klikk** på en farge i paletten til venstre for å velge den (ringen viser hvilken), og
  **klikk så på en plass** i den aktuelle raden for å sette en pinne i den fargen. Et klikk
  på en pinne i et tidligere gjett velger fargen dens.
- **Dra** en pinne fra paletten, fra et tidligere gjett eller fra den aktuelle raden inn på
  en plass. Drar du en pinne ut av den aktuelle raden og slipper den et annet sted,
  forsvinner den.
- **Høyreklikk** på en plass for å tømme den.
- Når raden er full, lyser det lille merkefeltet til høyre for den opp: **klikk på det** for
  å levere gjettet.
- **Midtklikk** på en plass for å _holde_ på den pinnen: en pinne du holder på, følger med
  over i neste gjett etter vurderingen, så du slipper å bygge opp igjen pinnene du allerede
  stoler på. Gjør det samme en gang til for å slippe pinnen.
- **Behold** (knappen ved siden av Angre) gjør det samme med et vanlig klikk: mens den er på,
  holder eller slipper et klikk på en plass i den aktuelle raden pinnen der i stedet for å sette
  en farge. Klikk på paletten for å bytte farge som vanlig; trykk på **Behold** igjen for å gå
  tilbake til å sette pinner.
- **Bokstaver** i pausemenyen skriver en bokstav på hver pinne, i tilfelle noen av fargene
  ligner på hverandre for deg, og fjerner dem igjen.

### Tastatur (Keyboard)

- **Piltastene**: opp og ned velger en farge i paletten, venstre og høyre flytter en markør
  langs den aktuelle raden og, når raden er full, videre inn på merkefeltet.
- **Enter** eller **Space** setter den valgte fargen på plassen under markøren, eller
  leverer gjettet når markøren står på merkefeltet.
- **Backspace** eller \`D\` tømmer plassen under markøren.
- \`H\` holder eller slipper pinnen under markøren.
- \`K\` er knappen **Behold** og \`L\` knappen **Bokstaver**.

## Innstillinger

- **Farger**: hvor mange forskjellige farger den skjulte raden er satt sammen av, fra 2 til 10. Flere farger gjør raden vanskeligere å sirkle inn.
- **Pinner per gjett**: lengden på den skjulte raden.
- **Antall gjett**: hvor mange forsøk du får.
- **Tillat tomme plasser**: lar deg la plasser stå tomme i et gjett. En tom plass kan aldri gi
  treff, så det blir lettere å føle seg fram til fargene. Selve den skjulte raden har aldri
  tomme plasser.
- **Tillat gjentakelser**: lar den skjulte raden (og gjettene dine) bruke samme farge mer
  enn én gang. Slår du dette av, krymper antallet mulige rader betraktelig.
`,v=e({default:()=>y}),y=`# Treghet

Du er en ball på et rutenett strødd med hindringer, og du vil ha tak i hver eneste juvel på
brettet. Navnet sier det meste: så snart ballen begynner å rulle, stopper den ikke før noe
stopper den. Den ruller rett gjennom både juveler (som den samler opp underveis) og tomme
ruter, og den faller først til ro når den neste ruten er en vegg, eller når den lander på en
stoppkloss. Diagonale trekk presser seg mellom to vegger som bare berører hverandre i et
hjørne. Å rulle inn på en mine er dødelig, selv om det samme trekket nettopp tok den aller
siste juvelen.

Hvert puslespill lages slik at alle juvelene kan samles opp fra startruten, men ingenting
hindrer deg i å rulle ut i et hjørne av brettet der en juvel ikke lenger kan nås. Det er
ingen straff for å dø eller sette seg fast utover en dødsteller i statuslinjen: bare angre
og prøv en annen vei.

## Kontroller

**Angre** etter en mine, så kommer du videre fra før det fatale trekket. **Løs** finner en
rute fra der du står nå, som samler opp alle juvelene som er igjen, og ruller så ballen hele
veien for deg; Angre tar hele ruten tilbake i én omgang.

### Mus og berøring

- **Klikk** på en rute, og ballen setter av gårde i retning av den ruten sett fra seg selv,
  avrundet til den nærmeste av de åtte kompassretningene — diagonaler inkludert. Et klikk i
  margen utenfor rutenettet virker også, noe som er praktisk når ballen ligger helt inntil
  en kant.

### Tastatur (Keyboard)

- **Piltastene** ruller ballen opp, ned, til venstre eller til høyre.
- **Home**, **Page Up**, **End** og **Page Down** ruller den diagonalt (opp-venstre,
  opp-høyre, ned-venstre, ned-høyre). Det numeriske tastaturet virker slik det ser ut: 8 er
  opp, 3 er ned-høyre, og så videre; tallrekken gjør det samme.

## Innstillinger

- **Bredde** og **høyde** på rutenettet. Omtrent en femtedel av rutene er vegger, en
  femtedel stoppklosser, en femtedel miner og en femtedel juveler.
`,b=e({default:()=>x}),x=`# Keen

Fyll rutenettet med sifre fra 1 og opp til størrelsen på det, slik at hver rad og hver
kolonne inneholder hvert siffer nøyaktig én gang. Rutenettet er dessuten delt inn i tykt
innrammede «bur», og hvert av dem har en liten ledetråd i ruten øverst til venstre: et tall
og et regnetegn. Sifrene i buret skal gi det tallet med nettopp den regnearten:

- \`7+\` betyr at sifrene i buret lagt sammen gir 7.
- \`12×\` betyr at de ganget sammen gir 12.
- \`2−\` står alltid på et bur med to ruter og betyr at det ene sifferet er 2 større enn det
  andre (begge veier gjelder).
- \`3÷\` står på samme måte på to ruter og betyr at det ene sifferet er 3 ganger det andre.

I motsetning til Killer-modusen i Solo _kan_ et bur godt inneholde det samme sifferet to
ganger, så lenge de to ikke står i samme rad eller kolonne. Ingen sifre er gitt på forhånd;
ledetrådene er alt du får, og hvert puslespill har nøyaktig én løsning. Dette er puslespillet
som er utgitt som KenKen.

## Kontroller

Et siffer som står to ganger i samme rad eller kolonne, blir rødt, og det samme gjør
ledetråden i et bur som er helt utfylt uten å treffe tallet sitt. **Løs** fyller inn
løsningen.

### Mus og berøring

- **Klikk** på en rute for å velge den, og bruk så tastene til å skrive inn et siffer. Enda et
  klikk på den valgte ruten opphever valget.
- **⌫** på tastene tømmer den valgte ruten igjen, og **✎** slår på **blyantnotater**: det
  du velger, går da inn som et lite notat, og det samme sifferet en gang til visker notatet
  ut. Blyantnotater er bare til å tenke med; fyller du inn et siffer, forsvinner de.
- **Høyreklikk** på en tom rute for å velge den til blyantnotater med det samme.
- **Merker** i pausemenyen fyller hver tomme rute med et komplett sett blyantnotater.
- **Uthev** (forstørrelsesglasset ved siden av Angre) fremhever hver rute som har samme siffer
  som ruten du sist klikket på, og viser det sifferet i fet skrift blant blyantnotatene. Trykk
  på den igjen for å slå den av.

### Tastatur (Keyboard)

- **Skriv et siffer** for å fylle inn den valgte ruten, eller for å notere det der hvis ruten
  var valgt til blyantnotater.
- **Space** eller **Backspace** tømmer den valgte ruten (sifferet eller alle
  blyantnotatene i den).
- **Piltastene** flytter en tastaturmarkør, og sifrene du skriver, havner i ruten under den.
- **Enter** veksler markøren mellom vanlig utfylling og blyantnotater.
- **M** er knappen **Merker** og **L** knappen **Uthev**.

## Innstillinger

- **Størrelse på rutenettet**: fra 3 til 9. Sifre over 9 ville blitt uhåndterlige, så 9 er
  grensen.
- **Vanskelighetsgrad**: den vanskeligste typen resonnement puslespillet krever. _Lett_ krever
  bare at du finner ut hvilke sifre som i det hele tatt kan stå i et bur; _Middels_ krever at du
  holder styr på hvilken rute i buret hvert siffer kan sitte i; _Vanskelig_ legger til
  resonnement på tvers av bur (sifre som et bur må plassere i en rad, kan ikke stå andre steder i
  raden) og grupper av ruter som til sammen må romme bestemte sifre; _Ekspert_ legger til
  tvangskjeder; og _Ekstrem_-puslespill kan ikke gjøres ferdig uten å gjette og gå tilbake.
  Vanskeligere puslespill tar lengre tid å lage, og 3×3-rutenett går aldri forbi Middels.
- **Bare multiplikasjon**: hver ledetråd er et produkt, noe som fjerner de enkle burene på to
  ruter og gir et ganske annerledes puslespill.
`,S=e({default:()=>C}),C=`# Tenn lys

Et rutenett av hvite og svarte ruter. Sett lyspærer på de hvite rutene slik at hver eneste
hvite rute er opplyst. En pære lyser opp sin egen rute og skinner videre langs raden og
kolonnen sin til en svart rute eller kanten kommer i veien. Tre ting må stemme når du er
ferdig:

- hver hvite rute er opplyst;
- ingen pære blir opplyst av en annen pære, altså ingen to pærer ser hverandre langs en rad
  eller en kolonne;
- en svart rute med et tall har nøyaktig så mange pærer i rutene rett over, under, til
  venstre og til høyre for seg. Svarte ruter uten tall kan ha hvor mange pærer som helst
  ved siden av seg.

Opplyste ruter bades i gult. Pærer som skinner på hverandre, blir røde, og det samme gjør et
tall som ikke lenger kan oppfylles: det har allerede for mange pærer ved siden av seg, eller
det er ikke lenger plass til nok av dem.

## Kontroller

Puslespillet er ferdig når hele rutenettet gløder og ingenting vises i rødt. **Hint** setter
inn én pære — eller fjerner en som ikke hører med i svaret — og lar resten være opp til deg;
puslespillet fortsetter, og med noen få hint er seieren, og poenget, fortsatt ditt. **Løs**
setter inn alle pærene i en løsning og lar kryssene du selv har tegnet, bli stående.

### Mus og berøring

- **Klikk** på en hvit rute for å sette en pære der, og en gang til for å ta den bort.
- **Høyreklikk** på en hvit rute for å skrive inn et kryss som betyr «her kan det ikke stå
  en pære»; høyreklikk en gang til for å viske det ut. En rute med kryss tar ikke imot en
  pære før krysset er borte, og en rute med pære kan ikke krysses av.
- **Kryss** (kryssknappen ved siden av Angre) gjør at et vanlig klikk skriver inn eller visker
  ut et kryss i stedet for en pære, for når du utelukker mange ruter på en gang. Trykk på den
  igjen for å gå tilbake til pærer.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør rundt i rutenettet.
- **Enter** setter inn eller fjerner en pære under markøren, og **Space** (eller **I**)
  veksler et kryss der.
- **X** er knappen **Kryss**.

## Innstillinger

- **Bredde** og **høyde** på rutenettet.
- **% svarte ruter**: omtrent hvor stor del av rutenettet som er svart. Det er et ønske,
  ikke et løfte: kan det ikke lages et puslespill med den tettheten, bruker generatoren noen
  flere svarte ruter.
- **Symmetri**: mønsteret de svarte rutene følger — ingen, en speiling eller en rotasjon av
  to halvdeler, eller en 4-veis speiling eller rotasjon. 4-veis rotasjon krever et
  kvadratisk rutenett.
- **Vanskelighetsgrad**: På _Lett_ kommer du i mål ved å tenke på én rute av gangen og spørre
  hvilke ruter som må eller ikke kan romme en pære. På _Middels_ må du veie grupper av ruter mot
  hverandre («én av disse tre må være en pære, og det utelukker denne»). På _Vanskelig_ kan du
  måtte prøve en pære et sted og følge konsekvensene til noe går galt. Hvert puslespill har
  nøyaktig én løsning.
`,w=e({default:()=>T}),T=`# Løkker

Et rutenett av prikker, der noen av flatene mellom dem har et tall i seg. Tegn én eneste
lukket løkke langs de svake strekene mellom prikkene slik at:

- hver flate med tall har nøyaktig så mange av sidene sine på løkken;
- løkken aldri krysser eller berører seg selv — hver prikk har enten to streker eller
  ingen — og det finnes bare én løkke, uten løse ender eller løsrevne biter.

Den klassiske varianten bruker kvadrater, men det samme puslespillet fungerer på trekanter,
sekskanter og et dusin rarere flislegginger, der tallene godt kan gå forbi 4.

Streker som danner en gal løkke, eller som møtes tre i én prikk, blir røde; et tall med for
mange streker rundt seg, eller med for få mulige sider igjen, blir også rødt. Et tall blir
grått så snart det har nøyaktig riktig antall streker.

## Kontroller

**Løs** tegner hele løkken. Puslespillet er ferdig så snart løkken er komplett og alle
tallene stemmer; å krysse ut de ubrukte kantene er valgfritt.

### Mus og berøring

- **Klikk** på en svak kant for å tegne en strek på den; klikk på streken igjen for å
  fjerne den.
- **Høyreklikk** på en kant for å krysse den ut, altså merke den som helt sikkert ikke med
  i løkken; høyreklikk en gang til for å fjerne merket. Både et klikk og et høyreklikk
  fjerner dessuten et merke satt med den andre.
- **Kryss** (kryssknappen ved siden av Angre) gjør at et vanlig klikk krysser ut en kant, eller
  fjerner krysset, i stedet for å tegne en strek. Trykk på den igjen for å gå tilbake til å
  tegne streker.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør fra kant til kant; **Enter** tegner eller fjerner en
  strek på kanten under markøren, og **Space** krysser den ut eller fjerner krysset.
- **X** er knappen **Kryss**.

## Innstillinger

- **Bredde** og **høyde** på rutenettet, talt i flisleggingens egne ruter. For rutenettet
  av kvadrater er det rett og slett antall kvadrater bortover og nedover; andre
  flislegginger teller sine gjentakende enheter, så det faktiske antallet flater varierer.
- **Type rutenett**: _Kvadrater_, _Trekanter_ og _Bikube_ er de regelmessige
  flisleggingene. _Snub-kvadrat_, _Cairo_, _Stor-sekskantet_, _Åttekantet_, _Drager_,
  _Blomst_, _Tolvkantet_ og _Stor-tolvkantet_ blander former, og de to _Penrose_-mønstrene
  gjentar seg aldri.
- **Vanskelighetsgrad**: _Lett_ krever bare reglene selv — å telle strekene rundt et tall, huske
  at en prikk har to streker eller ingen, og ikke lukke løkken for tidlig. _Middels_ legger til
  resonnement om par av kanter som møtes i en prikk (høyst én, eller minst én, av de to er en
  strek). _Vanskelig_ lar slike slutninger følge hverandre fra prikk til prikk, som langs en
  diagonal rekke med 2-tall. _Ekspert_ holder i tillegg styr på kanter du vet er like eller
  motsatte av hverandre. Gjetting er aldri nødvendig; hvert puslespill har nøyaktig én løsning.
`,E=e({default:()=>D}),D=`# Magneter

Et rektangel er dekket av dominoer, tegnet bare som omriss. Hver domino er enten en magnet
— den ene halvdelen en \`+\`-pol, den andre en \`−\`-pol — eller tom, uten poler i det hele
tatt. Tallene rundt kanten sier hvor mange \`+\`-poler (over kolonnene og til venstre for
radene) og hvor mange \`−\`-poler (under kolonnene og til høyre for radene) hver linje har;
mangler tallet, er det ingen ledetråd for den linjen. Fyll inn hver eneste domino slik at
alle tallene stemmer og to like poler aldri ligger side om side: \`+\` må aldri berøre \`+\`,
og \`−\` må aldri berøre \`−\` over en dominogrense. Tomme dominoer er uvirksomme og kan ligge
inntil hva som helst.

Like poler som berører hverandre, vises i rødt. Et tall blir rødt når det ikke lenger kan
oppfylles — for mange poler allerede, eller for få og ingen steder igjen å legge flere —
og grått så snart det er nøyaktig oppfylt. Puslespillet er ferdig når hver domino er fylt
inn, alle tallene stemmer og ingenting er rødt.

## Kontroller

### Mus og berøring

- **Klikk** på en ledig halvdel av en domino for å gjøre den til \`+\`-polen (den andre
  halvdelen blir \`−\`). Klikk på samme halvdel igjen for å snu magneten rundt, og en tredje
  gang for å gjøre dominoen ledig igjen. Å klikke på en tom domino gjør ingenting.
- **Høyreklikk** på en ledig domino for å merke den som tom. Høyreklikk på den igjen for å
  bytte merket ut med spørsmålstegn, et notat om at dominoen helt sikkert er en magnet;
  høyreklikker du en tredje gang, blir den ledig igjen. Å høyreklikke på en magnet gjør
  ingenting.
- **Tom** (den skraverte dominoen ved siden av Angre) gjør at et vanlig klikk virker som
  et høyreklikk: det merker en domino som tom, så med spørsmålstegn, så ledig igjen. Trykk på
  den igjen for å gå tilbake til å plassere magneter.
- **Løs** fyller inn hele løsningen.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør rundt i rutenettet.
- **Enter** blar halvdelen under markøren gjennom \`+\`, \`−\` og ledig, akkurat som et
  venstreklikk gjør.
- **Space** blar dominoen under markøren gjennom tom, spørsmålstegn og ledig, akkurat som
  et høyreklikk gjør.
- **B** er knappen **Tom**.

## Innstillinger

- **Bredde** og **høyde** på rutenettet. Når arealet er et oddetall, blir én rute til
  overs og tegnet med skråstriper; den hører ikke til noen domino og teller som nøytral.
- **Vanskelighetsgrad**: På _Lett_ trenger du aldri å se på mer enn én linje eller én domino av
  gangen — et tall som allerede er oppfylt, et tall som trenger hver eneste kandidat som er
  igjen, eller en domino der ingen av halvdelene kan ta en gitt pol. På _Vanskelig_ må du i
  tillegg resonnere om hele dominoer som ligger langs en linje: en domino som må være en magnet,
  gir én pol av hvert slag uansett hvilken vei den snus, en linje som bare har plass til én tom
  rute igjen, kan ikke romme en tom domino på langs, og så videre. Hvert puslespill har nøyaktig
  én løsning.
- **Færre ledetråder**: fjern alle tall som ikke trengs for å løse puslespillet på den
  valgte vanskelighetsgraden, noe som gjør det atskillig vanskeligere å se hvor man skal
  begynne.
`,O=e({default:()=>k}),k=`# Kart

Et kart er delt inn i områder. Fargelegg hvert område med en av fire farger slik at to
områder som deler en grensestrekning, aldri har samme farge. Områder som bare møtes i et
hjørne, kan gjerne være like. Noen få områder er fargelagt på forhånd, og de er valgt slik
at det finnes nøyaktig én måte å gjøre kartet ferdig på.

To naboområder i samme farge blir merket med et rødt \`!\` på grensen mellom dem.

## Kontroller

**Løs** fargelegger hele løsningen. Kartet blinker når hvert område er fargelagt og
ingenting er rødt.

### Mus og berøring

- **Dra** en farge: start på et område (eller på en av fargeprøvene under kartet) og slipp
  på et annet område for å gi det den fargen. Drar du fra et tomt område, fra det tomme
  rommet rundt kartet eller fra viskelæret, tømmes området du slipper på.
- **Klikk på en fargeprøve** for å velge en farge, og **klikk** så på områder for å male
  dem; klikk på den valgte fargeprøven igjen for å velge den bort.
- **Dra en farge med høyre knapp** inn på et tomt område for å sette en liten prikk i den
  fargen der, som et notat om at området _kanskje_ har den fargen. Et område kan bære flere
  blyantprikker; drar du den samme fargen dit igjen, forsvinner prikken. Er en fargeprøve
  valgt, veksler **et høyreklikk** på et tomt område prikken av og på.
- **Tall** (i pausemenyen) viser et tall i hvert område, praktisk når du skal snakke om et
  puslespill med noen andre, og skjuler dem igjen.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør rundt på kartet; området den står i, får omriss. Tastene
  **1**–**4** fargelegger området, **Space** tømmer det, og **Enter** plukker opp fargen i
  det, slik at du kan bære den med deg med piltastene og slippe den med **Enter** (eller
  som en blyantprikk med **Space**). Trykker du **Enter** to ganger uten å flytte deg,
  tømmes området.
- **L** er knappen **Tall**.

## Innstillinger

- **Bredde** og **høyde** på rutenettet kartet er tegnet på, målt i ruter.
- **Områder**: hvor mange områder kartet er delt inn i.
- **Vanskelighetsgrad**: _Lett_ har alltid et område med bare én farge igjen. _Middels_ legger
  til resonnement om par av naboområder som må dele de samme to fargene mellom seg. _Vanskelig_
  krever kjeder av slike slutninger på tvers av kartet. Alle disse kan løses uten gjetting.
  _Ekstrem_ lover bare at løsningen er entydig; du må kanskje prøve en farge og følge den til noe
  går galt.
`,A=e({default:()=>j}),j=`# Miner

Et rutenett av tildekkede ruter skjuler et antall miner. Avdekk hver rute som _ikke_
rommer en mine. Hver rute du åpner, viser hvor mange av de åtte naboene som er miner;
åpner du en mine, er spillet tapt.

Det spesielle med denne utgaven er at du aldri trenger å gjette. Ingenting er avgjort før du klikker
første gang: minene blir lagt ut først da, og de legges slik at ruten du klikket på, er
tom, og slik at hele rutenettet kan regnes ut med ren logikk derfra. Står du fast,
finnes det alltid en trygg rute et sted som tallene allerede beviser.

Statuslinjen viser hvor mange flagg du har satt, målt mot antallet miner, og klokken
starter med det første klikket ditt. Treffer du en mine, avsløres resten av dem, og
flaggene som sto feil, blir krysset ut; du kan angre det fatale klikket og spille videre,
men dødsfallet huskes i statuslinjen.

## Kontroller

### Mus og berøring

- **Klikk** på en tildekket rute for å åpne den. Åpner du en tom rute (ingen miner ved
  siden av), åpnes naboene også, og så videre utover.
- **Høyreklikk** på en tildekket rute for å sette et flagg på en mistenkt mine, og en gang
  til for å fjerne det. Ruter med flagg kan ikke åpnes ved et uhell.
- **Klikk på et tall** som allerede har riktig antall flagg rundt seg, for å åpne alle de
  andre tildekkede naboene på én gang. Et **midtklikk** på tallet gjør det samme.
- **Hint** åpner én trygg rute — eller fjerner et flagg som ikke har noen mine under seg —
  og lar resten av rutenettet være opp til deg. Med noen få hint er seieren, og poenget,
  fortsatt ditt.
- **Løs** avslører hele oppstillingen og setter flagg på hver eneste mine. Det teller ikke
  som en seier du har vunnet selv.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør rundt i rutenettet.
- **Enter** virker som et venstreklikk på ruten under markøren: den åpner en tildekket
  rute, eller rydder rundt et tall der alle flaggene er på plass.
- **Space** setter eller fjerner et flagg, slik et høyreklikk gjør.

## Innstillinger

- **Bredde** og **høyde** på rutenettet.
- **Miner**: hvor mange miner som skal gjemmes. Du kan oppgi en prosentdel som \`20%\` i
  stedet for et antall. Svært høy tetthet gjør det tregt å finne rutenett som lar seg løse.
- **Garanter løsbarhet**: når den er slått på (standard), er oppstillingen garantert
  løsbar fra det første klikket ditt uten gjetting. Slå den av for helt vanlige tilfeldige
  rutenett, som kan gi deg kron og mynt til slutt.
`,M=e({default:()=>N}),N=`# Nett

Et nettverk av ledninger er lagt over et rutenett av kvadratiske brikker, og deretter er
hver brikke snurret rundt i tilfeldig retning. Drei brikkene tilbake, slik at alle henger
sammen i ett nettverk: hver ledningsende må møte en ledning på nabobrikken, og ingen
ledning kan bli stående og peke inn i en vegg. Det ferdige nettverket er et tre, så det har
ingen lukkede løkker.

Brikker som allerede er koblet til kildebrikken midt i rutenettet, tegnes i blått som en
hjelp; resten forblir grå. En ledning som inngår i en løkke, tegnes i rødt. Tykke svarte
streker mellom brikkene er barrierer: ingen ledning kan krysse dem, og det gir deg et hint
om hvordan brikkene på hver side må sitte. Statuslinjen viser hvor mange brikker som har
strøm akkurat nå.

## Kontroller

### Mus og berøring

- **Klikk** på en brikke for å dreie den mot klokken, og **høyreklikk** på den for å dreie
  den med klokken.
- **Midtklikk** på en brikke for å **låse** den når du er sikker på den. En låst brikke er
  skravert og dreier seg ikke før enda et midtklikk låser den opp. Et høyreklikk dreier
  brikken i stedet for å låse den, så et midtklikk er veien å gå her.
- **Lås** (hengelåsknappen ved siden av Angre) gjør at et vanlig klikk låser eller låser opp en
  brikke i stedet for å dreie den, noe som er enklere enn et midtklikk på en styreplate.
  Et høyreklikk dreier fortsatt brikken med klokken. Trykk på den igjen for å gå tilbake til å
  dreie.
- **Bland** snurrer hver ulåst brikke ut i en ny tilfeldig retning — en luftforandring når
  et puslespill har gått i stå.
- På et rutenett som går rundt, ruller de fire **pilknappene** utsnittet, slik at brikker på
  motsatte kanter kan komme side om side.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør rundt i rutenettet.
- **Enter** eller **A** dreier brikken under markøren mot klokken, **D** dreier den med
  klokken, og **F** dreier den en halv omgang.
- **Space**, **S** eller **L** låser brikken under markøren eller låser den opp. Med mus
  låser **Shift-klikk** også en brikke, akkurat som et midtklikk.
- **K** er knappen **Lås** og **J** knappen **Bland**.
- På et rutenett som går rundt, ruller **Shift + piltaster** utsnittet (det samme som de
  fire pilknappene), slik at brikker på motsatte kanter kan ses side om side.
  **Ctrl + piltaster** flytter kildebrikken som den blå markeringen sprer seg ut fra.

## Innstillinger

- **Bredde** og **høyde** på rutenettet, målt i brikker.
- **Vegger går rundt kantene**: ledninger kan løpe ut over den ene kanten av rutenettet og
  fortsette fra den motsatte.
- **Sannsynlighet for barrierer**: et tall fra 0 til 1 som sier hvor stor del av de
  ledningsfrie kantene som får en barriere. Barrierer endrer aldri hvor ledningene ligger:
  den samme tilfeldige startverdien gir alltid det samme rutenettet, så en høyere
  sannsynlighet legger bare til hint.
- **Garanter entydig løsning**: normalt er puslespillet laget slik at nøyaktig én plassering
  av brikkene virker. Slå det av for raskere generering og en og annen flertydig bit.
`,P=e({default:()=>F}),F=`# Nettskyv

Hver brikke bærer en bit ledning: en rett strekning, et hjørne, et T-kryss eller en løs
ende med en prikk på. Satt riktig sammen danner bitene ett nettverk som når hver eneste
brikke ut fra strømkilden på den skraverte midtbrikken, uten løkker og uten armer som
peker ut i ingenting. Rutenettet er blandet ved at hele rader og kolonner er skjøvet, så
det er også den eneste måten å rette det opp på: ingen brikke kan dreies, bare flyttes.

Brikker som har strøm akkurat nå, tegnes i blått; resten forblir grå. Tykke svarte vegger
mellom brikkene er barrierer. Ingenting kan kobles sammen på tvers av en barriere, så de
forteller deg hvor det ferdige nettverket helt sikkert ikke har noen forbindelse.

## Kontroller

### Mus og berøring

- **Klikk på** en pil ved siden av en rad eller kolonne for å skyve hele den linjen ett
  steg den veien pilen peker. Brikken som skyves ut i den ene enden, kommer inn igjen i
  den andre enden av den samme linjen. **Høyreklikk på** en pil for å skyve linjen andre
  veien.
- Midtraden og midtkolonnen har ingen piler: strømkilden flytter seg aldri.
- **Løs** hopper rett til det ferdige nettverket, så du kan sammenligne det med ditt eget
  forsøk.

### Tastatur (Keyboard)

- **Piltastene** flytter en markering rundt i ringen av piler.
- **Enter** skyver den markerte linjen den veien pilen peker, og **Space** skyver den
  motsatt vei.

## Innstillinger

- **Bredde** og **høyde** på rutenettet.
- **Vegger går rundt kantene**: når dette er på, fortsetter høyre kant borte til venstre
  og bunnen oppe i toppen, så ledninger (og barrierer) kan krysse kanten av rutenettet.
  Den stiplede rammen viser et rutenett som går rundt; en heltrukket tykk ramme er en
  vegg hele veien rundt.
- **Sannsynlighet for barrierer**: hvor mange av de ubrukte brikkekantene som får en
  barriere, fra 0 (ingen) til 1 (hver eneste kant det ferdige nettverket ikke bruker).
  Flere barrierer gjør puslespillet lettere. Barrierene velges uavhengig av resten av
  rutenettet, så den samme tilfeldige startverdien med høyere sannsynlighet for barrierer
  gir det samme puslespillet med flere hint.
- **Antall blandetrekk**: la det stå på 0 for en grundig blanding, eller sett et tall for
  å blande med nøyaktig så mange skyv. Da er målet å finne dem og skyve dem tilbake igjen;
  statuslinjen viser målet.
`,I=e({default:()=>L}),L=`# Mønster

Hver rute i rutenettet er i hemmelighet enten svart eller hvit. Tallene ved siden av hver
rad og over hver kolonne forteller deg hvor lange blokkene med svarte ruter i den linjen
er, i rekkefølge, med minst én hvit rute mellom to blokker som følger etter hverandre.
Fargelegg de svarte rutene slik at hver rad og hver kolonne stemmer med tallene sine.
Slike puslespill kalles gjerne nonogram eller picross.

Bildene her lages tilfeldig, så det finnes ingen figur å gjette seg til: alt må regnes ut
fra tallene. Hvert puslespill kontrolleres på forhånd for at det skal kunne løses ved å
tenke på én rad eller kolonne om gangen, så du aldri trenger å prøve deg fram.

Tallene for en linje blir grå når de svarte blokkene i linjen stemmer med dem, og røde
hvis blokkene du har fullført, umulig kan passe til tallene. Puslespillet er ferdig når
hver rad og kolonne stemmer med tallene sine; prikkene er bare der for å hjelpe deg å
huske.

## Kontroller

### Mus og berøring

- **Klikk** på en rute for å male den svart; klikk på en svart rute igjen for å tømme den.
- **Høyreklikk** på en rute for å sette en prikk i den, som betyr at du vet den er hvit;
  høyreklikk på en rute med prikk for å fjerne prikken.
- **Dra** for å male en rett rekke svarte ruter i én bevegelse, og **dra med høyre knapp**
  for å legge en rekke med prikker. Bare ruter som var i samme tilstand som den du startet
  på, blir berørt, så drar du en rad med prikker over de svarte rutene dine, får de stå i
  fred.
- **Midtklikk** på en rute for å nullstille den til ukjent. Med mus kan du dra med
  musehjulet holdt nede for å tømme et helt rektangel, uansett hva som står i det.
- **Viskelær** (viskelærknappen ved siden av Angre) gjør at venstre knapp gjør det samme: klikk
  på en rute for å nullstille den, eller dra for å tømme et helt rektangel. Trykk på den igjen
  for å gå tilbake til å male svart.
- **Hint** fyller inn én rute, alltid en som én enkelt rad eller kolonne avgjør alene — eller
  retter en rute som motsier svaret. Puslespillet fortsetter, og med noen få hint er seieren,
  og poenget, fortsatt ditt.
- **Løs** fyller inn hele bildet for deg.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør.
- **Enter** maler eller tømmer svart under markøren, og **Space** setter eller fjerner en
  prikk.
- Hold **Ctrl** mens du flytter markøren for å male svart underveis, **Shift** for å legge
  prikker, eller begge for å tømme.
- Med mus tømmer **Shift-klikk** ruter på samme måte som et midtklikk.
- **E** er knappen **Viskelær**.

## Innstillinger

- Rutenettets **bredde** og **høyde**. De ferdige størrelsene går fra 10×10 opp til 30×30;
  større rutenett tar litt lengre tid å lage.
`,R=e({default:()=>z}),z=`# Perle

Et rutenett der noen av rutene rommer en svart eller hvit perle. Tegn én lukket løkke som
går fra rutemidte til rutemidte, vannrett eller loddrett, uten å krysse seg selv eller
forgrene seg. Løkken trenger ikke å gå innom alle rutene, men den må gjennom hver eneste perle:

- ved en **svart perle** svinger løkken, og går så rett gjennom begge rutene som ligger
  ved siden av perlen langs løkken;
- ved en **hvit perle** går løkken rett gjennom, og svinger i minst én av de to rutene som
  ligger ved siden av perlen langs løkken.

Det er bare rutene løkken besøker rett før og rett etter en perle som teller – ikke alle
rutene som grenser til den i rutenettet.

En perle som allerede har fått regelen sin brutt, får en rød ring rundt seg. Så snart det
finnes en lukket løkke, tegnes alle streker utenfor den med rødt, og det samme gjør enhver
rute med tre eller flere streker.

## Kontroller

**Løs** tegner hele løkken. Puslespillet er ferdig når løkken er én enkelt lukket krets og
ingenting er rødt.

### Mus og berøring

- **Klikk** på en kant i rutenettet (nær grensen mellom to ruter) for å tegne en strek
  over den; klikk igjen for å fjerne den.
- **Dra** gjennom en rekke ruter for å tegne en hel serie streker på én gang. Drar du langs
  streker som allerede finnes, forsvinner de; drar du fra streker som finnes og videre ut i
  tomme ruter, sletter du først og tegner så. Gå tilbake over en rute du allerede har
  passert for å korte inn stien før du slipper; kom tilbake til ruten du startet i for å
  lukke løkken.
- **Høyreklikk** på en kant i rutenettet for å sette et lite kryss som betyr «ingen strek
  her»; det går ikke an å tegne streker over et kryss før det er fjernet.
  **Dra med høyre knapp** gjennom en rekke ruter for å sette kryss på hver kant du
  passerer.
- **Kryss** (kryssknappen ved siden av Angre) gjør at et vanlig klikk setter eller fjerner et
  kryss, og at en dragning legger en hel rekke av dem: som når du tegner, fjerner en dragning
  som starter på kryss, dem først, og den hopper over kanter som allerede har en strek. Trykk på
  den igjen for å gå tilbake til å tegne løkken.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør. **Ctrl+pil** tegner eller fjerner streken på den siden
  av markørruten, **Shift+pil** setter eller fjerner et kryss der. **Enter** starter en
  dragning med tastaturet fra markørruten: flytt med piltastene og trykk Enter igjen for å låse
  stien, eller **Space** for å forkaste den.
- **X** er knappen **Kryss**; når den er på, legger en dragning med tastaturet også kryss.

## Innstillinger

- **Bredde** og **høyde** på rutenettet, målt i ruter (minst fem hver vei).
- **Vanskelighetsgrad**: På _Lett_ løser du puslespillet ved å tenke over hver perle og
  rutene rett rundt den. På _Vrien_ må du i tillegg oppdage når en strek ville lukket en
  liten løkke for tidlig og latt andre perler bli stående utenfor. (Et 5×5-rutenett på
  Vrien lages som Lett, slik som i originalen.)
- **Tillat uløselige**: behold alle perlene løkken kan bære, i stedet for å skjære dem ned
  til et minimalt sett med én entydig løsning. En feilsøkingsinnstilling arvet fra
  originalen.
`,B=e({default:()=>V}),V=`# Pinner

Et brett fullt av pinner med ett tomt hull, eller noen få på et tilfeldig brett. En pinne kan hoppe vannrett eller
loddrett over en nabopinne og ned i det tomme hullet rett bak den; pinnen den hoppet over
blir fjernet. Fortsett å hoppe til bare én pinne står igjen på brettet.

Dette er det gamle brettspillet solitær (peg solitaire). **Kryss**-brettet er det kjente engelske
oppsettet, **Åttekant**-brettet det europeiske (som starter med det tomme hullet utenfor
midten, fordi det ikke kan fullføres fra midten), og **Tilfeldig**-brettene er rare fasonger
som datamaskinen dyrker fram. Blanke områder uten hull er rett og slett ikke en del av
brettet.

Du kan ikke kjøre deg fast for godt: er det ingen hopp igjen og mer enn én pinne står
tilbake, er spillet over, men Angre tar deg så langt tilbake du vil. Statuslinjen teller
pinnene som er igjen og trekkene du har gjort.

## Kontroller

### Mus og berøring

- **Dra** en pinne og slipp den i et tomt hull nøyaktig to ruter unna, på rett linje over
  en annen pinne. Alle andre slipp setter pinnen tilbake.
- Eller **klikk** på en pinne for å plukke den opp (den blir oransje, og hullene den kan
  lande i blir merket), og klikk så på hullet du vil hoppe til. Klikker du på samme pinne
  igjen, legger du den ned.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør rundt på brettet.
- **Enter** eller **Space** på en pinne plukker den opp; en piltast hopper den så i den
  retningen, hvis det er et lovlig trekk, og **Enter** en gang til legger den ned igjen.

## Innstillinger

- **Bredde** og **høyde** på brettet, minst 4 hver.
- **Type brett**: _Kryss_ og _Åttekant_ er de tradisjonelle oppsettene og finnes bare på
  7×7. _Tilfeldig_ lager en ny brettfasong hver gang, alltid en som kan reduseres til én
  pinne, fordi den ble bygget ved å kjøre hopp baklengs fra én.
`,H=e({default:()=>U}),U=`# Rekkevidde

Noen ruter i rutenettet inneholder et tall. Farg ruter svarte slik at fire ting holder
samtidig:

- ingen rute med tall er svart;
- ingen to svarte ruter berører hverandre langs en kant (hjørner er greit);
- de hvite rutene danner ett sammenhengende område, knyttet sammen kant mot kant;
- hvert tall teller de hvite rutene ruten selv kan se: seg selv, pluss alt på rett linje
  opp, ned, til venstre og til høyre helt til en svart rute eller kanten av rutenettet er i
  veien.

Dette er Nikolis _Kurodoko_, også kjent som _Kuromasu_ eller _Where is Black Cells_. Et tall
som allerede ser nok ruter, har en svart rute rett bortenfor hver strekning det kan se; et
tall som ville sett for mye hvis en enkelt ukjent rute var hvit, har en svart rute der i
stedet. Å farge en rute som er den eneste forbindelsen mellom to grupper hvite ruter, er
aldri riktig. Alle puslespill kan fullføres med slike resonnementer; du trenger aldri gjette.

Feil vises i rødt: svarte ruter som berører hverandre får en rød ramme rundt gruppen, hvite
ruter som er avskåret fra hovedområdet får et rødt omriss, og et tall blir rødt når det ikke
lenger kan se nok ruter eller allerede helt sikkert ser for mange. Puslespillet er ferdig
når ingen regel er brutt; du trenger ikke sette prikker i de hvite rutene.

## Kontroller

### Mus og berøring

- **Klikk** på en rute for å farge den svart. Klikk igjen for å gjøre den om til en prikk
  (en rute du vet er hvit), og en gang til for å tømme den.
- **Høyreklikk** på en rute for å gå den andre veien: prikk, så svart, så tom.
- **Dra** for å farge flere ruter på én gang, og **høyreklikk og dra** for å feie gjennom
  dem den andre veien. Bare ruter som så ut som den første fra start blir berørt, så et
  sveip med prikker lar de svarte rutene dine være i fred.
- **Viskelær** (viskelærknappen ved siden av Angre) gjør at et klikk tømmer en rute i stedet, og
  at en dragning tømmer hver svart rute og hver prikk den går over, uansett hva det er. Trykk på
  den igjen for å gå tilbake til å farge.
- **Hint** fyller inn én rute som følger av det som allerede står på brettet — eller retter
  opp en rute som strider mot løsningen. Puslespillet fortsetter, og med noen få hint er
  seieren, og poenget, fortsatt ditt.
- **Løs** fyller inn hele rutenettet og setter prikker i alle de hvite rutene.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør rundt i rutenettet.
- **Enter** virker som et venstreklikk på ruten under markøren og **Space** som
  et høyreklikk.
- **E** er knappen **Viskelær** og **H** knappen **Hint**.

## Innstillinger

- **Bredde** og **høyde** på rutenettet. De ferdige størrelsene går fra 9×6 til 16×11; alt
  opp til 30×30 kan lages, men bittesmå rutenett på én eller to ruter gir ingen rettferdige
  puslespill.
`,W=e({default:()=>G}),G=`# Rektangler

Noen ruter i rutenettet bærer et tall. Del hele rutenettet opp i rektangler slik at hvert
rektangel inneholder nøyaktig ett tall, og at tallet er arealet til rektangelet (bredden
ganger høyden). Et 6-tall ligger for eksempel i en blokk på 1×6, 2×3, 3×2 eller 6×1;
hvilken av dem, og hvor tallet ligger inne i den, må du regne ut fra naboene.

Puslespillene lages tilfeldig, og som standard plasseres tallene slik at bare én
oppdeling av rutenettet går opp. Det opprinnelige puslespillet kommer fra det japanske
bladet Nikoli, der det heter Shikaku.

## Kontroller

### Mus og berøring

- **Dra** over et område for å tegne et rektangel rundt det: omrisset tegnes, og alle
  streker inne i det fjernes. Drar du langs en rutelinje, tegnes akkurat den linjen.
- **Klikk** på en rutelinje for å legge til eller fjerne akkurat den kanten.
- **Dra med høyre knapp** over et område for å viske ut strekene inne i det uten å røre
  omrisset. **Et høyreklikk** på en rutelinje slår den av og på akkurat som et vanlig
  klikk.
- **Viskelær** (viskelærknappen ved siden av Angre) gjør at også en vanlig dragning visker ut:
  dra over et område for å fjerne strekene inne i det, eller klikk på en rutelinje for å fjerne
  den. Mens den er på, legger et klikk aldri til en strek. Trykk på den igjen for å gå tilbake
  til å tegne.
- **Løs** gjør hele oppdelingen for deg.

Mens du drar, vises omrisset av rektangelet du er i ferd med å tegne, og størrelsen står i
statuslinjen. Et ferdig rektangel med riktig størrelse blir skravert. Et lukket rektangel
som aldri kan bli riktig, blir markert: tallet blir rødt hvis rektangelet har feil
størrelse for det, og rektangelet får skråstriper hvis det ikke rommer noe tall i det hele
tatt. Puslespillet er ferdig når hver rute ligger inne i et riktig rektangel.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør.
- **Enter** begynner å dra et rektangel ut fra markøren; flytt markøren til det motsatte
  hjørnet og trykk **Enter** igjen for å tegne det.
- **Space** virker på samme måte, men visker i stedet ut det som er inne i rektangelet.
- **E** er knappen **Viskelær**.

## Innstillinger

- Rutenettets **bredde** og **høyde**. De ferdige størrelsene går fra 7×7 opp til 19×19.
- **Utvidelsesfaktor** — lag et mindre rutenett og strekk det til størrelsen du har bedt
  om, slik at puslespillet får færre og større rektangler. 0 (standarden) betyr ingen
  strekking; 0.5 gjør det første rutenettet to tredjedeler av den endelige størrelsen i
  hver retning. Store verdier etterlater bare en håndfull rektangler og gjør puslespillet
  trivielt.
- **Garanter entydig løsning** — normalt på. Slår du den av, plasseres tallene hvor som helst
  i rektanglene sine, noe som går raskere og kan gi puslespill med flere svar; enhver
  gyldig oppdeling teller da som løst.
`,se=e({default:()=>K}),K=`# Same Game

Brettet er fylt med fargede ruter. Finn en gruppe på to eller flere ruter i samme farge som
ligger inntil hverandre langs sidene, og fjern den; rutene over hullet faller ned, og når en
kolonne er tom, sklir kolonnene til høyre for den bortover og lukker igjen. Tøm hele brettet
for å vinne. Blir det ruter igjen uten at noen to naboruter har samme farge, er det ikke mer
du kan gjøre — angre og prøv en annen rekkefølge.

Store grupper er verdt mye mer enn små: å fjerne _n_ ruter gir (_n_ − 2)² poeng med vanlig
poenggivning, så et par gir ingenting, tre ruter ett poeng og ti ruter 64. Statuslinjen
viser poengsummen din, og når en gruppe er valgt, hvor mange ruter den har og hva den ville
gitt.

Hvert brett som lages (med mindre du slår av innstillingen), er bygd slik at det _kan_
tømmes helt — men å finne en rekkefølge som også gir mye poeng, er opp til deg.

Det finnes ingen Løs-knapp: maskinen vet godt at brettet kan tømmes, men den vil ikke
fortelle deg hvordan.

## Kontroller

### Mus og berøring

- **Klikk** på en rute for å velge hele gruppen den hører til; gruppen tegnes lysere med et
  tykt omriss. **Klikk på den valgte gruppen igjen** for å fjerne den. Klikker du et annet
  sted, flyttes markeringen i stedet.
- **Høyreklikk** på den valgte gruppen for å oppheve markeringen.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør rundt på brettet (den fortsetter rundt ved kantene).
- **Enter** velger gruppen under markøren, og trykker du en gang til, fjernes gruppen.
- **Space** på den valgte gruppen opphever markeringen.

## Innstillinger

- **Bredde** og **høyde** på brettet.
- **Antall farger**, fra 3 til 9 (2 er tillatt når løsbarhet ikke garanteres). Flere farger
  betyr mindre grupper og et vanskeligere brett.
- **Poengsystem**: _(n−2)²_, standarden, eller _(n−1)²_, som også belønner par.
- **Garanter løsbarhet**: når dette er slått på, bygges brettet baklengs fra et tomt
  brett, slik at det finnes minst én rekkefølge som tømmer det. Slå det av for et helt
  tilfeldig brett, som lages raskere og har en tendens til større områder, men som kanskje
  ikke kan tømmes i det hele tatt.
`,ce=e({default:()=>le}),le=`# Veiskilt

Hver rute har en pil, og noen få ruter har tall. Koble rutene sammen til én enkelt sti
nummerert 1 til N (der N er antall ruter), slik at etterfølgeren til hver rute ligger et
sted langs pilen dens: ruten med tallet 1 peker mot 2, som peker mot 3, og så videre. En
etterfølger kan ligge hvor som helst i pilens retning, ikke bare rett ved siden av. Den
siste ruten, som er merket med en stjerne, peker ingen steder.

Det første og det siste tallet er alltid synlige, og i tillegg nok av de andre til at
stien blir entydig. Hvert puslespill har nøyaktig én løsning, og den kan finnes med ren
tenkning.

Feil vises i rødt: to ruter som har fått samme tall, et tall der etterfølgeren ikke ligger
langs pilen, eller en kjede som løper forbi sitt eget tall. Puslespillet er ferdig når
tallene 1 til N løper gjennom hver eneste rute og ingenting er rødt.

## Kontroller

### Mus og berøring

- **Dra** fra en rute til en rute langs pilen dens for å gjøre den andre til etterfølger
  for den første. **Dra med høyre knapp** for å gå andre veien: fra en rute til ruten som
  skal komme før den.
- Når to koblede ruter rommer et tall, sprer tallet seg langs hele kjeden og vises i
  blått. En kjede uten tall ennå merkes med en bokstav og tillegg (\`a\`, \`a+1\`, \`a+2\`,
  ...); så snart den berører en rute med tall, blir bokstavene til tall. Kobler du en
  kjede til en rute som allerede er koblet, erstattes den gamle koblingen.
- Hver rute som fortsatt mangler en forgjenger, viser en liten prikk nederst til venstre,
  og en pil blekner så snart ruten har fått en etterfølger. Jobben er altså alltid å koble
  en tydelig pil til en rute med prikk.
- **Høyreklikk på** en rute for å fjerne begge koblingene dens. **Dra** en rute ut av
  brettet for å gjøre det samme, eller **dra med høyre knapp** ut av brettet for å bryte
  opp hele kjeden den hører til.
- **Bryt** (knappen med det brutte leddet ved siden av Angre) gjør at et klikk på en rute bryter
  opp hele kjeden dens, hver eneste kobling, og å dra en rute ut av brettet gjør det samme. Å
  dra fra rute til rute kobler dem fortsatt. Trykk på den igjen for å slå den av.
- **Løs** fyller inn hele stien.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør.
- **Enter** på en rute starter en kobling derfra; flytt markøren til etterfølgeren og
  trykk på **Enter** igjen for å lage koblingen (trykk på den samme ruten for å avbryte).
- **Space** eller **X** fjerner koblingene til ruten under markøren; **Shift + X** bryter
  opp hele kjeden dens.
- **B** er knappen **Bryt**.

## Innstillinger

- **Bredde** og **høyde** på rutenettet, fra 2 opp til 12 ruter (2×2 er for lite til å
  fungere).
- **Start og slutt i hjørnene**: når den er slått på, ligger 1 alltid i ruten øverst til
  venstre og N i den nederst til høyre. Ellers plasseres begge endene tilfeldig, men de
  vises fortsatt begge to.
`,ue=e({default:()=>de}),de=`# Singles

Hver rute i rutenettet rommer et tall. Sverte noen av rutene (så tallene deres skjules),
slik at tre ting gjelder samtidig:

- ingen tall dukker opp mer enn én gang blant de hvite rutene i en rad eller kolonne;
- ingen svarte ruter berører hverandre langs en kant (hjørner er greit);
- de hvite rutene danner til sammen ett sammenhengende område, koblet kant mot kant.

Dette er Nikolis _Hitori_. En god åpning er å lete etter to like tall med én rute mellom
seg: den ene i paret må være svart, så ruten i midten må være hvit. To like tall ved siden
av hverandre betyr at alle andre forekomster av det tallet i linjen deres er svarte.

Feil dukker opp i rødt: svarte ruter som berører hverandre, får en rød ramme rundt
gruppen, hvite ruter som er avskåret fra hovedområdet, får et rødt omriss, og to ruter med
ring som deler linje og har samme tall, tegnes i rødt.

Puslespillet er ferdig når ingen regel er brutt; du trenger ikke sette ring rundt de hvite.

## Kontroller

### Mus og berøring

- **Klikk på** en rute for å sverte den; klikk på den igjen for å gjøre den hvit igjen.
- **Høyreklikk på** et tall for å sette en ring rundt det og notere at det helt sikkert er
  hvitt; høyreklikk på det igjen for å fjerne ringen. Både et klikk og et høyreklikk
  fjerner merket ruten allerede har.
- **Løs** fyller inn hele rutenettet og setter ring rundt hver hvite rute.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør rundt i rutenettet (den fortsetter på den andre siden
  ved kantene).
- **Enter** sverter ruten under markøren eller gjør den hvit igjen, og **Space** setter
  eller fjerner ringen rundt den.

## Innstillinger

- **Bredde** og **høyde** på rutenettet, fra 2 opp til 20 for genererte puslespill.
- **Vanskelighetsgrad**: _Lett_ krever bare de direkte argumentene — en svart rute tvinger
  naboene til å bli hvite, et tall med ring tvinger tvillingene sine til å bli svarte,
  mønstrene med par-med-mellomrom og par-side-om-side, en hvit rute med bare én vei ut, og
  de små mønstrene i hjørnene. _Vrien_ krever i tillegg at du oppdager når det å sverte en
  rute ville dele det hvite området i to, og at du bruker par av par forskjøvet med én
  rute. Hvert puslespill har nøyaktig én løsning.
`,fe=e({default:()=>pe}),pe=`# Seksten

Et skyvepuslespill uten tom rute. Hver rute rommer en nummerert brikke, og i stedet for å
skyve én enkelt brikke skyver du en hel rad eller kolonne ett steg. Brikken som dyttes ut
over kanten, kommer rett inn igjen i motsatt ende av den samme linjen, som om rutenettet
var lagt rundt en smultring. Sorter brikkene slik at de teller oppover fra 1 i øverste
venstre hjørne, fra venstre mot høyre og så rad for rad.

## Kontroller

### Mus og berøring

- **Klikk** på en av pilene rundt kanten for å skyve raden eller kolonnen ett steg den
  veien pilen peker. **Høyreklikk** på en pil for å skyve linjen motsatt vei.
- **Løs** bytter rett og slett ut rutenettet med det ferdig sorterte. Du får ikke se veien
  dit, men du får et rent brett å prøve ut manøvrer på.

### Tastatur (Keyboard)

- **Piltastene** flytter en markering rundt ringen av piler langs kanten.
- **Enter** skyver den markerte linjen den veien pilen peker, og **Space** skyver den andre
  veien.

## Innstillinger

- **Bredde** og **høyde** på rutenettet. På rutenett der begge sider er oddetall, kan bare
  halvparten av alle oppstillinger nås, så generatoren deler bare ut slike som lar seg nå.
- **Antall blandetrekk**: la det stå på 0 for en helt tilfeldig oppstilling, eller sett et
  tall for å blande det sorterte rutenettet med nøyaktig så mange enkeltskyv. Da går det ut
  på å finne ut hvilke skyv som ble gjort, og ta dem tilbake på like mange trekk; jo flere
  blandetrekk du ber om, jo mer sannsynlig er det at det finnes en kortere løsning.
`,me=e({default:()=>he}),he=`# Skråstreker

Et rutenett av tomme ruter med innringede tall i noen av hjørnene. Tegn én diagonal strek
gjennom hver rute, den ene eller den andre veien, slik at:

- hvert innringet tall har nøyaktig så mange streker som møter hjørnepunktet sitt (et 4-tall
  sitter midt i et kryss, et 0-tall har alle streker rundt seg hellende bort fra seg);
- strekene aldri slutter seg sammen til en lukket løkke.

Et tall som allerede har for mange streker, eller som ikke lenger kan få nok, blir rødt, og
det samme gjør hver strek som er en del av en løkke. Puslespillet er løst når hver rute har
en strek, og ingenting er rødt.

## Kontroller

### Mus og berøring

- **Klikk** på en rute for å tegne en \`\\\` i den; klikk igjen for å gjøre den om til en \`/\`,
  og en gang til for å tømme ruten.
- **Et høyreklikk** går motsatt vei rundt: \`/\`, så \`\\\`, så tomt. Slik kan en rute settes
  begge veier med bare én knapp.
- **Løs** fyller ut hele rutenettet.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør rundt i rutenettet.
- **Enter** blar gjennom ruten under markøren som et venstreklikk, og **Space** som
  et høyreklikk.

## Innstillinger

- **Bredde** og **høyde** på rutenettet, i ruter.
- **Vanskelighetsgrad**: _Lett_-puslespill kan løses én rute om gangen — et tall som allerede
  er oppfylt eller som trenger hver eneste rute som er igjen, og ruter der den ene av de to
  strekene ville lukket en løkke. _Vanskelig_-puslespill krever i tillegg at du resonnerer om
  par av ruter som må skrå samme vei allerede før du vet hvilken vei det er, og om områder
  som en strek ville stengt av fra kanten av rutenettet. Du skal aldri måtte gjette; hvert
  puslespill har nøyaktig én løsning.
`,ge=e({default:()=>_e}),_e=`# Solo

Fyll det kvadratiske rutenettet med sifre slik at hver rad, hver kolonne og hver tykt
innrammede blokk inneholder hvert siffer nøyaktig én gang. Noen ruter er gitt som
ledetråder; resten er det opp til deg å finne ut av. Det vanlige 3×3-puslespillet er den
velkjente sudokuen, men blokkene kan også være rektangler (et 2×3-puslespill har seks
3×2-blokker), og rutenettet kan bli så stort som 16×16 — da står bokstavene a, b, c… for
sifrene over 9.

Tre varianter kan slås på:

- **X**: de to hoveddiagonalene, som er lett skravert, må hver inneholde alle sifrene i
  tillegg.
- **Jigsaw**: blokkene har uregelmessige former som varierer fra puslespill til
  puslespill.
- **Killer**: det finnes ingen ledetråder. I stedet er rutenettet delt inn i stiplede
  «bur», hvert merket med summen av sifrene inni. Et siffer kan ikke stå to ganger i samme bur.

Hvert puslespill har nøyaktig én løsning, og du kommer alltid fram til den med ren
resonnering på vanskelighetsgraden du valgte.

## Kontroller

Sifre som kolliderer med et likt siffer i raden, kolonnen, blokken, diagonalen eller buret
sitt, vises i rødt, og det samme gjør et bur der sifrene ikke går opp i summen sin.
**Hint** fyller inn én rute — den letteste som står åpen, eller det første sifferet som
motsier svaret — og lar resten være opp til deg; puslespillet fortsetter, og med noen få hint
er seieren, og poenget, fortsatt ditt. **Løs** fyller inn hele løsningen og avslutter
puslespillet.

### Mus og berøring

- **Venstreklikk på** en tom rute for å velge den, og bruk så tastene til å skrive inn et siffer
  (bokstavtastene er sifrene over 9). Å klikke på den valgte ruten igjen opphever valget.
- **⌫** blant tastene tømmer den valgte ruten igjen, og **✎** slår på blyantnotater, så
  det du velger deretter, går inn som et lite notat i stedet for et svar.
- **Høyreklikk på** en rute for å velge den for **blyantnotater** med en gang.
  Blyantnotater er bare der for å hjelpe deg å tenke; spillet bryr seg ikke om dem, og å
  fylle inn et siffer fjerner dem.
- **Merker** i pausemenyen fyller hver tomme rute med et fullt sett blyantnotater, for
  dem som liker å starte med alt og stryke ut kandidater etter hvert.
- **Uthev** (forstørrelsesglasset ved siden av Angre) fremhever hver rute som har samme siffer
  som ruten du sist klikket på, ledetrådene medregnet, og viser det sifferet i fet skrift blant
  blyantnotatene. Trykk på den igjen for å slå den av.

### Tastatur (Keyboard)

- **Skriv et siffer** (eller en bokstav for sifre over 9) for å fylle den valgte ruten.
- **Space** eller **Backspace** tømmer den valgte ruten (sifferet eller alle notatene i
  den).
- **Piltastene** flytter en tastaturmarkør. **Enter** veksler markøren mellom vanlig
  utfylling og blyantnotater, og sifrene du skriver, havner i ruten under den.
- **M** er **Merker**-knappen og **L** **Uthev**-knappen.

## Innstillinger

- **Kolonner** og **rader med underblokker**: rutenettet er like stort som produktet av
  dem, og hver blokk er like bred som antall rader og like høy som antall kolonner. I
  jigsaw-modus er produktet rett og slett størrelsen på rutenettet.
- **X**, **Jigsaw** og **Killer** slår på variantene som er beskrevet over.
  Killer-puslespill er begrenset til rutenett med høyst ni sifre.
- **Symmetri**: hvordan mønsteret av ledetråder speiler seg selv. Mer symmetri ser penere
  ut, men har lett for å gi flere ledetråder enn strengt tatt nødvendig.
- **Vanskelighetsgrad**: den vanskeligste typen resonnering puslespillet vil kreve. _Veldig lett_
  og _Lett_ har alltid en rute som kan fylles inn direkte; _Middels_ krever at du resonnerer om
  hvor et siffer kan stå på tvers av en blokk og en linje; _Vanskelig_ krever grupper av ruter
  som til sammen må romme bestemte sifre; _Ekspert_ legger til tvangskjeder; og på _Ekstrem_ kan
  puslespillene ikke fullføres uten å gjette og gå tilbake igjen. Vanskelige puslespill tar
  lengre tid å lage.
`,ve=e({default:()=>ye}),ye=`# Telt

Rutenettet er en campingplass: noen ruter rommer trær, resten er bar mark. Slå opp telt på
tomme ruter slik at:

- det er nøyaktig like mange telt som trær;
- hvert tre kan pares med sitt eget telt på en rute rett ved siden av seg (over, under,
  til venstre eller til høyre — ikke diagonalt). Et telt kan godt komme til å stå ved
  siden av andre trær også, men hvert telt hører til ett tre og hvert tre til ett telt;
- ingen telt berører hverandre, ikke engang i et hjørne;
- tallene langs høyre og nedre kant sier hvor mange telt det er i hver rad og kolonne.

Ledetrådene er bare tallene, så hele puslespillet handler om å regne ut hvor teltene må
stå. Alle puslespillene her kan løses med ren logikk, uten å gjette.

## Kontroller

Telt som berører hverandre, vises i rødt med et merke på den felles kanten eller det
felles hjørnet, og det samme gjør enhver gruppe telt med for få trær imellom seg, og
enhver gruppe trær som ikke lenger har plass til alle teltene sine. Et tall blir grått når
linjen har riktig antall telt, og rødt når det ikke lenger kan oppfylles. **Løs** slår opp
alle teltene for deg.

### Mus og berøring

- **Klikk** på en tom rute for å slå opp et telt der; klikk på teltet igjen for å fjerne
  det.
- **Høyreklikk** på en tom rute for å merke den som gress, altså at du er sikker på at det
  ikke skal stå noe telt der; høyreklikk på den igjen for å fjerne merket. Både et klikk
  og et høyreklikk tømmer en rute som allerede inneholder noe.
- **Dra med høyre knapp** langs en rad eller kolonne for å gjøre hver tomme rute du drar
  over til gress på én gang — nyttig når en linje skal gjøres ferdig etter at alle teltene
  er satt opp. Telt og merker som allerede står, får være i fred.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør.
- **Enter** slår opp eller fjerner et telt under markøren.
- **Space** setter eller fjerner gress under markøren.

## Innstillinger

- **Bredde** og **høyde** på rutenettet, fra 4 opp til 20 ruter.
- **Vanskelighetsgrad**: På _Lett_ gir puslespillene etter for opptelling og et blikk på
  hva hvert tre og telt trenger. På _Vrien_ må du i tillegg veie hvordan de mulige
  plasseringene i én linje begrenser naboene, og tenke over hvilke ruter trærne kan dele.
`,be=e({default:()=>xe}),xe=`# Tårn

Hver rute i rutenettet får et tårn, med en høyde fra 1 opp til størrelsen på rutenettet.
Hver rad og hver kolonne må inneholde hver høyde nøyaktig én gang. Tallene rundt kanten
forteller deg hvor mange tårn du ville sett hvis du så inn i den raden eller kolonnen fra
den siden: et tårn skjuler alle lavere tårn bak seg. En ledetråd som er lik størrelsen på
rutenettet, betyr at høydene stiger hele veien langs linjen; en ledetråd på 1 betyr at det
høyeste tårnet står helt ute ved den kanten.

Større og vanskeligere puslespill starter med noen tårn allerede bygget og utelater noen av
ledetrådene langs kanten. Sifre som kolliderer med et annet i samme rad eller kolonne, og
ledetråder som tårnene du har bygget så langt ikke lenger kan oppfylle, vises i rødt. Dette
puslespillet er bedre kjent som Skyscrapers.

## Kontroller

De oppgitte tårnene kan ikke endres, og **Løs** fyller inn svaret.

### Mus og berøring

- **Venstreklikk** på en rute for å velge den, og bruk så tastene på skjermen til å bygge
  et tårn av den høyden. **⌫** på tastene tømmer ruten igjen.
- **✎** på tastene slår på **blyantnotater**: det du velger, går da inn som et lite notat,
  ruten blir stående valgt så du kan legge til flere, og samme siffer en gang til visker ut
  det ene igjen. Fyller du inn et ekte siffer, viskes blyantnotatene i den ruten bort.
- **Høyreklikk** på en rute for å velge den for blyantnotater med en gang.
- **Merker** i pausemenyen fyller hver tomme rute med et fullt sett blyantnotater.
- **Uthev** (forstørrelsesglasset ved siden av Angre) fremhever hver rute som har samme høyde
  som ruten du sist klikket på, og viser den høyden i fet skrift blant blyantnotatene. Trykk på
  den igjen for å slå den av.

### Tastatur (Keyboard)

- **Skriv et siffer** for å bygge et tårn av den høyden i den valgte ruten. **Space** eller
  **Backspace** tømmer den.
- **Piltastene** flytter en tastaturmarkør. **Enter** veksler den mellom siffermodus og
  blyantnotatmodus; sifre skrives inn i den uthevede ruten, og markøren blir stående.
- **M** er knappen **Merker** og **L** knappen **Uthev**.

## Innstillinger

- **Størrelse på rutenettet** — fra 3 til 9. Tårn skrives inn som enkeltsifre, og derfor
  stopper det ved 9.
- **Vanskelighetsgrad** — På Lett trenger du bare de direkte følgene av hver ledetråd og av
  reglene for rader og kolonner. På Vanskelig må du vurdere hver eneste plassering en ledetråd
  tillater, og få øye på grupper av ruter som deler noen få kandidater. Ekspert legger til
  vanskeligere gruppelogikk og tvangskjeder, og på Ekstrem kan puslespillene ikke fullføres uten
  litt prøving og feiling, selv om løsningen fortsatt er entydig.
`,Se=e({default:()=>Ce}),Ce=`# Spor

En jernbane kommer inn i rutenettet fra venstre og forlater det nederst; begge endene vises
som skinner som løper ut av brettet. Fullfør sporet mellom dem. Sporet er én sammenhengende
rute uten forgreninger, løkker eller kryssinger, bygd bare av rette stykker og kvartsvinger,
så hver rute det er innom, har nøyaktig to skinner ut av seg. Noen få stykker er allerede
lagt på skraverte ruter og kan ikke endres. Tallet over hver kolonne og ved siden av hver
rad sier hvor mange ruter i den linjen det ferdige sporet går gjennom.

Tallene blir grå når linjen deres har riktig antall sporruter, og røde når en linje ikke
lenger kan gå opp: for mange sporruter, eller så mange utkryssede ruter at det ikke er nok
plass igjen. Ruter der skinnene møtes feil (tre skinner inn i én rute, en lukket løkke eller
spor til overs når inngangen og utgangen er koblet sammen), tegnes også i rødt.

## Kontroller

**Løs** legger hele sporet og fjerner de av merkene dine som motsier det. Puslespillet er
ferdig når ett ubrutt spor forbinder inngangen med utgangen og alle tallene er oppfylt.

### Mus og berøring

- **Dra** gjennom en rekke naboruter for å legge skinner mellom dem. Veien kan gjerne svinge
  rundt hjørner; drar du bare langs skinner som allerede ligger der, tar du dem opp igjen i
  stedet.
- **Klikk** nær en av sidene til en rute for å legge til eller fjerne en enkelt skinne
  gjennom den siden. Klikk på midten av en rute for å merke den med «her går sporet
  gjennom», uten å si gjennom hvilke sider — praktisk når du teller — og klikk en gang til
  for å fjerne merket.
- **Høyreklikk** nær en side for å tegne en kort strek som betyr «ingen skinne her»;
  høyreklikk på midten av en rute for å krysse ut hele ruten. **Dra med høyre knapp** langs
  en rad eller kolonne for å krysse ut (eller fjerne kryssene fra) en hel rekke ruter på én
  gang.
- **Viskelær** (viskelærknappen ved siden av Angre) gjør at et klikk eller en dragning visker
  ruter rene: hver rute den berører, mister skinnene sine, «ingen skinne»-strekene og merket
  eller krysset sitt. De oppgitte delene blir liggende. Trykk på den igjen for å gå tilbake til
  å legge spor.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør som stopper både på ruter og på sidene mellom dem.
  **Enter** virker som et klikk ved markøren og **Space** som et høyreklikk.
- **E** er knappen **Viskelær**.

## Innstillinger

- **Bredde** og **høyde** på rutenettet, minst fire av hver.
- **Vanskelighetsgrad**: På _Lett_ holder det å se på én rute eller én linje av gangen. På
  _Vrien_ må du i tillegg tenke over hvor den siste sporruten i
  en linje i det hele tatt kan ligge, og over løse skinneender som må føres videre langs
  eller på tvers av en linje. Hvert puslespill har nøyaktig én løsning.
- **Forby 1-tall ved siden av hverandre**: når dette er slått på (standard), har ikke to
  nabolinjer begge tallet 1, og det har verken inngangskolonnen eller utgangsraden. Det
  hindrer sporet i å løpe i lange kjedelige strekk langs kanten.
`,we=e({default:()=>Te}),Te=`# Drei

Et rutenett med nummererte brikker er blandet ved at kvadratiske blokker med brikker er
dreid rundt. Drei dem tilbake til tallene står i rekkefølge fra venstre mot høyre og
ovenfra og ned. I grunnspillet dreier hvert trekk en 2×2-blokk en kvart omdreining om
punktet der de fire brikkene møtes; større innstillinger dreier 3×3-blokker eller enda
større.

I variantene **med retning** bærer hver brikke en trekant, og puslespillet regnes først
som ferdig når alle trekantene peker opp. I varianten **bare rader** bærer brikkene
radnummeret sitt i stedet, så alle 1-erne trenger bare å komme til første rad, 2-erne til
andre, og så videre.

## Kontroller

**Løs** setter hver eneste brikke rett på plass igjen. Den viser deg ikke veien dit, men
det er en rask måte å få et rent rutenett på hvis du vil øve på en rekke dreininger.

### Mus og berøring

- **Klikk på** midten av en blokk for å dreie den mot klokken; **høyreklikk på** den for å dreie
  den med klokken. For 2×2-blokker er midten et hjørne der fire brikker møtes; for blokker med
  oddetallsstørrelse er det den midterste brikken. Et klikk ute mot kanten av rutenettet dreier
  blokken som ligger inntil den kanten.
- **Medurs** (knappen med dreiepilen ved siden av Angre) bytter om de to: et klikk dreier
  blokker med klokken og et høyreklikk mot klokken. Trykk på den igjen for å gå tilbake.

### Tastatur (Keyboard)

- **Piltastene** flytter en ramme på størrelse med én blokk rundt i rutenettet. **Enter**
  dreier den markerte blokken mot klokken, og **Space** dreier den med klokken.
- **A**, **B**, **C** og **D** dreier hjørneblokkene øverst til venstre, øverst til
  høyre, nederst til venstre og nederst til høyre mot klokken; hold **Shift** for med
  klokken.
- **T** er knappen **Medurs**.

## Innstillinger

- **Bredde** og **høyde** på rutenettet.
- **Størrelse på blokken som dreies**: siden i den kvadratiske blokken som ett trekk
  dreier (minst 2, og ikke større enn rutenettet).
- **Ett tall per rad**: en lettere variant der hver brikke i en rad har det samme tallet.
- **Retningen teller**: brikkene får trekanter og må alle ende med å peke opp.
- **Antall blandetrekk**: la det stå på 0 for en grundig blanding, eller oppgi et lite
  tall for å få et rutenett som er nøyaktig så mange dreininger fra å være løst. Da er
  målet ditt å finne de dreiningene og ta dem tilbake igjen, så en blanding på tre trekk
  fortjener et svar på tre trekk (selv om det av og til kan finnes en kortere vei).
`,Ee=e({default:()=>De}),De=`# Udøde

Rutenettet er en hjemsøkt speilsal. Hver rute uten speil skjuler ett av tre monstre: et
**spøkelse**, en **vampyr** eller en **zombie**. Oversikten øverst forteller hvor mange
det er igjen å plassere av hvert slag, og tallet ved hver kantposisjon sier hvor mange
monstre du ville sett hvis du kikket inn i rutenettet derfra og fulgte synslinjen mens den
spretter av de diagonale speilene.

Speil endrer det du får se. En vampyr har ikke noe speilbilde, så den telles bare så lenge
synslinjen ennå ikke har møtt et speil. Et spøkelse er det motsatte: usynlig sett rett
forfra, men det dukker opp så snart linjen er speilet. En zombie ses alltid. Krysser en
synslinje den samme ruten to ganger, telles monsteret der hver gang det er synlig. Plasser
alle monstrene slik at hvert kanttall og hver sum stemmer.

## Kontroller

Et kanttall blir grått så snart synslinjen går helt opp, og rødt når det ikke lenger kan
oppfylles; et tall i oversikten blir rødt når det er plassert for mange av det monsteret.
Blyantnotater er bare til eget bruk og påvirker aldri puslespillet.

### Mus og berøring

- **Venstreklikk** på en tom rute for å bla den gjennom spøkelse, vampyr, zombie og
  tilbake til tom. Ruten blir liggende markert.
- Tastene på skjermen velger et monster til den markerte ruten direkte, uten å bla seg
  fram til det; **⌫** tømmer ruten, blyantnotater og alt.
- **✎** blant tastene slår på **blyantnotater**: monsteret du velger, blir da lagt til i
  (eller tatt ut av) rutens liste over kandidater.
- **Høyreklikk** på en rute for å legge til blyantnotater én kandidat av gangen (spøkelse,
  så vampyr, så zombie, så tomt).
- **Synslinjer** (øyet ved siden av Angre) tegner synslinjene gjennom den markerte ruten, med
  knekk ved speilene, og ringer inn kanttallene i begge ender av hver linje. Mens den er på,
  følger et klikk på et kanttall tallets egen linje; klikk på det igjen for å slippe den. Trykk
  på **Synslinjer** igjen for å slå den av. Mens den er på, markerer et klikk på en rute
  som ikke er markert, bare ruten, så du kan følge en tom rute uten å fylle den; klikk på
  den igjen for å bytte den som vanlig.

### Tastatur (Keyboard)

- Piltastene flytter markeringen. Enter blar det markerte monsteret videre; Space blar
  blyantnotatene.
- \`G\`, \`V\`, \`Z\` (eller \`1\`, \`2\`, \`3\`) setter det monsteret i den markerte ruten, eller slår
  blyantnotatet av og på når markeringen er i blyantmodus. \`E\`, \`0\`, Backspace eller Delete
  tømmer ruten, blyantnotater og alt.
- \`S\` er knappen **Synslinjer**.

## Innstillinger

- **Bredde**, **Høyde** — størrelsen på rutenettet, fra 3×3 opp til 54 ruter i alt.
- **Vanskelighetsgrad** — på _Lett_ holder det å telle langs én synslinje av gangen; på
  _Normal_ må du veie kombinasjonene en hel bane tillater; _Vrien_ kan ikke fullføres uten
  at du prøver ut en gjetning.
`,Oe=e({default:()=>ke}),ke=`# Ulikhet

Fyll ut rutenettet slik at hver rad og hver kolonne inneholder hvert siffer fra 1 opp til
størrelsen på rutenettet nøyaktig én gang – et latinsk kvadrat – samtidig som tegnene
mellom naboruter holder.

I **Ulikhet**-modus er tegnene større enn-symboler: den åpne siden av en \`>\` vender mot
det største sifferet, og spissen peker mot det minste. Ikke alle nabopar har et tegn, og
jo vanskeligere puslespillet er, jo færre tegn finnes det.

I **Naboer**-modus er tegnene korte streker som betyr at de to sifrene skiller seg med
nøyaktig 1 (som 3 og 4). Her vises alltid hver eneste strek, så **fraværet** av en strek
mellom to ruter er også en ledetråd: de to sifrene følger helt sikkert ikke etter
hverandre.

Puslespillet går i avisene under navnet Futoshiki.

## Kontroller

Sifre som bryter en regel – et duplikat i en rad eller kolonne, eller et tegn som ikke
holder – vises med rødt, og det samme gjør tegnet det gjelder. Puslespillet er ferdig når
hver rute er fylt og ingenting er rødt.

### Mus og berøring

- **Venstreklikk** på en rute for å velge den, og bruk så tastene på skjermen til å
  fylle inn et siffer. **⌫** på tastene tømmer den valgte ruten igjen. Klikker du på den
  valgte ruten en gang til, blir den valgt bort.
- **✎** på tastene slår på **blyantnotater**: det du velger, blir da lagt til i (eller
  fjernet fra) en liten liste med muligheter i ruten i stedet for å bli svaret. Fyller du
  inn et svar i en rute, viskes blyantnotatene der ut.
- **Høyreklikk** på en rute for å velge den for blyantnotater med det samme.
- **Merker** i pausemenyen fyller hver tomme rute med alle mulige blyantnotater, klare til å
  strykes ut; **Hint** (lyspæren ved siden av Angre) gjør det samme, men utelater dem som enkel
  logikk allerede utelukker.
- **Uthev** (forstørrelsesglasset ved siden av Angre) fremhever hver rute som har samme siffer
  som ruten du sist klikket på, oppgitte sifre medregnet, og viser det sifferet i fet skrift
  blant blyantnotatene. Trykk på den igjen for å slå den av.

### Tastatur (Keyboard)

- **Skriv et siffer** for å fylle den valgte ruten; \`0\`, Space eller Backspace tømmer den.
- Piltastene flytter en markør rundt i rutenettet; Enter veksler markøren mellom å fylle
  inn sifre og å lage blyantnotater.
- \`M\` er **Merker**-knappen, \`H\` er **Hint** og \`L\` er **Uthev**.

## Innstillinger

- **Modus** – Ulikhet (større enn-tegn) eller Naboer (streker mellom sifre som følger
  etter hverandre).
- **Størrelse** – antall rader og kolonner, fra 3 til 9.
- **Vanskelighetsgrad** – hvor mye resonnering puslespillet krever. På **Veldig lett** trenger du
  aldri tegnene: i modusen Ulikhet finnes det ingen i det hele tatt, så du får rene latinske
  kvadrater, og i modusen Naboer tegnes strekene, men de gitte sifrene avgjør alt alene. På **Lett**
  trenger du bare den direkte betydningen av hvert tegn; på **Middels** må du se på grupper av ruter
  under ett; på **Vanskelig** kommer posisjonsbasert gruppelogikk og tvangskjeder i tillegg;
  **Ekstrem** (finnes under Egendefinert…) kan kreve prøving og feiling, men løsningen er fortsatt
  entydig.
`,Ae=e({default:()=>je}),je=`# Uregjerlig

Fargelegg hver rute i rutenettet enten svart eller hvit. Noen ruter er gitt som ledetråder
og kan ikke endres; resten starter grå og er dine å fylle inn. Når du er ferdig, må tre
ting stemme:

- hver rad inneholder like mange svarte ruter som hvite;
- hver kolonne inneholder like mange svarte ruter som hvite;
- ingen tre ruter etter hverandre i en rad eller kolonne har samme farge.

Feil dukker opp med rødt: en rekke på tre eller flere like ruter får en rød ramme, og en
rute får et rødt **!** når raden eller kolonnen den står i allerede har for mange av den
fargen. I den valgfrie varianten «unike rader og kolonner» kan ikke to rader følge det
samme mønsteret (og ikke to kolonner); linjer som er like, blir strøket over med rødt.

## Kontroller

Ledetrådsruter – de som er tegnet med en liten ramme inni – kan ikke endres. **Løs** fyller
ut hele rutenettet. Puslespillet er ferdig når hver rute er farget og ingenting vises med
rødt.

### Mus og berøring

- **Klikk** på en grå rute for å gjøre den svart; klikk igjen for hvit, og en gang til for
  å tømme den.
- **Høyreklikk** på en rute for å gå motsatt vei: hvit, så svart, så tom.
- **Midtklikk** på en rute for å tømme den direkte.
- **Viskelær** (viskelærknappen ved siden av Angre) gjør at et klikk tømmer en rute i stedet for
  å farge den. Trykk på den igjen for å gå tilbake til å farge.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør rundt i rutenettet.
- **Enter** veksler ruten under markøren som et klikk, og **Space** som et høyreklikk.
- **1** setter svart, **0** (eller **2**) setter hvit og **Backspace** tømmer.
- **E** er knappen **Viskelær**.

## Innstillinger

- **Bredde** og **høyde** på rutenettet. Begge må være partall og minst 6.
- **Unike rader og kolonner**: når dette er slått på, kan ikke to rader være like og
  ikke to kolonner være like (en rad kan fortsatt være lik en kolonne). Svært høye eller
  svært brede rutenett avvises i denne modusen, fordi det ikke finnes nok forskjellige
  linjer å ta av.
- **Vanskelighetsgrad**: På _Lett_ trengs det aldri mer enn to umiddelbare argumenter – to
  like ruter tvinger ruten ved siden av eller mellom dem over i den andre fargen, og en
  linje som allerede har sin andel av den ene fargen, får den andre fargen overalt ellers.
  På _Normal_ må du i tillegg tenke over hvor den siste ruten av en farge fortsatt kan
  ligge i en linje uten å lage en rekke på tre. Hvert puslespill har nøyaktig én løsning.
`,Me=e({default:()=>Ne}),Ne=`# Løs floken

En håndfull punkter er koblet sammen med rette linjer, og linjene ligger i én stor floke.
Flytt punktene rundt til ingen linjer krysser hverandre. Alle puslespill kan greies ut:
datamaskinen bygde grafen ut fra en oppstilling uten krysninger og blandet så punktene ut
på en sirkel.

Linjer som akkurat nå krysser en annen linje, tegnes i rødt, så floken krymper synlig mens
du jobber; puslespillet er løst når det ikke er noe rødt igjen. Løs skyver hvert eneste
punkt til en oppstilling datamaskinen vet fungerer.

## Kontroller

Angre tar tilbake ethvert trekk, også Løs.

### Mus og berøring

- **Dra** i et punkt og slipp det der du vil ha det. Punktet du tar tak i, blir oransje, og
  naboene blir blå. Slipper du et punkt ute i margen, havner det på kanten av brettet;
  slipper du det helt utenfor tegneflaten, blir flyttingen avbrutt.
- **Fest** (rutenettknappen ved siden av Angre) slår et festerutenett av og på: punkter du
  slipper, lander da midt i rutene som er merket med svake prikker — det er også slik løsningen
  er lagt ut. Knappen lyser så lenge rutenettet er på.

### Tastatur (Keyboard)

- **Piltastene** flytter en markør fra punkt til punkt i den retningen. **Enter** eller
  **Space** plukker punktet opp; piltastene bærer det så videre (en åttendedels rute per
  trykk, en hel rute med Shift, ett enkelt steg med Ctrl), og **Enter** eller **Space**
  slipper det ned igjen.
- \`G\` er **Fest**-knappen.

## Innstillinger

- **Antall punkter**: hvor mange punkter grafen har, minst 4. Flere punkter betyr flere
  linjer og en verre floke. Brettet vokser med antall punkter, så det er alltid plass til
  å spre dem ut.
`,Pe=e({$dir:()=>`ltr`,$locale:()=>`nb`,$name:()=>q,default:()=>Fe,games:()=>Q,messages:()=>X,status:()=>Z,touchPhrases:()=>Y,tutorials:()=>$,ui:()=>J}),q=`Norsk bokmål`,J=JSON.parse(`{"appName":"Puzzlebox","menu":{"title":"Puzzlebox","tagline":"{n} håndtegnede logikkoppgaver. Velg én og spill.","lockedNote":"Hvert puslespill du løser på egen hånd, gir deg ett poeng. Bruk poengene her til å låse opp nye puslespill.","language":"Språk","stat":{"credits":{"one":"★ {n} poeng","other":"★ {n} poeng"},"unlocked":"{n} av {total} låst opp","solved":"{n} løst","tight":{"credits":"★ {n}","unlocked":"{n}/{total}","solved":"✓ {n}","achievements":"{n}/{total}"},"achievements":"{n} av {total} prestasjoner"},"hint":{"allOpen":"Alt er åpent.","complete":"Du har låst opp hele samlingen!","spend":{"one":"Bruk et poeng nedenfor til å låse opp et puslespill.","other":"Bruk poeng nedenfor til å låse opp puslespill."},"earn":"Løs et puslespill på egen hånd, så får du et poeng."},"card":{"label":"{name}: {description}","labelLocked":"{name}: {description} (låst)","solvedTag":"✓ løst ×{n}","unlock":"Lås opp · 1 poeng","unlocked":"{name} er låst opp!","labelAlias":"{name} (også kjent som {alias}): {description}","labelLockedAlias":"{name} (også kjent som {alias}): {description} (låst)"},"noCredit":"Løs et puslespill på egen hånd for å få et poeng, og kom så tilbake for å låse opp dette.","surprise":"Overrask meg: åpne en tilfeldig gåte","search":{"placeholder":"Søk i puslespill","label":"Søk i puslespillene etter navn","clear":"Tøm søket","empty":"Ingen puslespill her heter «{q}». Prøv et annet navn."},"privacy":{"note":"Puzzlebox teller hvordan puslespillene blir spilt — aldri hvem som spiller dem — for å gjøre dem bedre."},"continue":"Fortsett","continueLabel":"Fortsett {name}","spend":"Bruk"},"notFound":{"title":"Dette puslespillet finnes ikke","body":"Vi har ikke noe puslespill som heter «{slug}».","back":"Tilbake til alle puslespill"},"locked":"{name} er fortsatt låst. Løs et puslespill for å få et poeng, og lås det så opp.","pageTitle":"{name} · Puzzlebox","topbar":{"back":"Alle puslespill","help":"Hjelp","creditsTitle":"Poeng låser opp nye puslespill. Løs et puslespill på egen hånd, så får du ett.","boardLabel":"Spillebrett for {name}"},"toolbar":{"type":"Type","custom":"Egendefinert…","new":"Nytt","newTitle":"Nytt spill (N)","restart":"Start på nytt","restartTitle":"Start dette puslespillet på nytt","undo":"Angre","undoTitle":"Angre (U, Ctrl+Z)","redo":"Gjør om","redoTitle":"Gjør om (R, Ctrl+Y)","solve":"Løs","solveTitle":"Vis løsningen (Ctrl+S)","gameId":"Del","gameIdTitle":"Del dette puslespillet, eller spill ett noen har sendt deg","keypad":"Taster","keypadTitle":"Vis taster på skjermen","zoomOut":"−","zoomOutTitle":"Mindre","zoomIn":"+","zoomInTitle":"Større","tapPlace":"Trykk: plasser","tapMark":"Trykk: merk","tapTitle":"Hva et vanlig trykk gjør","tapPlaceTitle":"Trykk plasserer, langt trykk merker. Trykk her for å bytte.","tapMarkTitle":"Trykk merker, langt trykk plasserer. Trykk her for å bytte.","hint":"Hint","hintTitle":"Avslører én rute, og du spiller videre. Med opptil {n} hint får du fortsatt poeng.","more":"Mer","pause":"Pause","pauseTitle":"Pausemeny (Esc)"},"pause":{"title":"På pause","resume":"Fortsett"},"pager":{"label":"Sider","prev":"Forrige side","next":"Neste side","page":"Side {n} av {total}"},"badge":{"won":"Løst!","lost":"Spillet er over"},"keypad":{"label":"Taster","clear":"Tøm","clearTitle":"Tøm den valgte ruten (Backspace)","pencil":"Blyantnotater","pencilOnTitle":"Tastene skriver blyantnotater. Trykk for å skrive svar igjen.","pencilOffTitle":"Slå på denne, så blir de neste tastetrykkene blyantnotater"},"drawer":{"title":"Slik spiller du {name}","close":"Lukk","replay":"▶ Se veiledningen på nytt","achievements":"Prestasjoner ({n}/{total})"},"dialog":{"ok":"OK","cancel":"Avbryt","customTitle":"{name}: egendefinert","gameIdTitle":"Del dette puslespillet","byDescription":"Som beskrivelse","bySeed":"Som tilfeldig startverdi","enterLabel":"Spill et bestemt puslespill: lim inn en kode","play":"Spill","copy":"Kopier","copied":"Kopiert","link":"Lenke","linkTitle":"Kopier en lenke som åpner akkurat dette puslespillet","linkPrompt":"Lenke til dette puslespillet","shareLead":"Send akkurat dette puslespillet til noen andre.","copyLink":"Kopier lenke","linkCopied":"Lenken er kopiert","codes":"Puslespillkoder","hintAd":{"title":"Ett hint til?","body":"Du har brukt opp de {n} gratis hintene dine. Tar du ett til, gir ikke dette puslespillet poeng — med mindre du ser en kort reklame for å beholde det.","watch":"Se en reklame, behold poenget","anyway":"Ta hintet likevel"},"badCode":"Den koden åpner ikke et {name}-puslespill. Sjekk at hele koden ble kopiert."},"toast":{"creditEarned":"+1 poeng","tutorialComplete":"Veiledningen er ferdig. Her er et nytt puslespill – løs det på egen hånd, så får du et poeng.","tutorialCompleteBack":"Veiledningen er ferdig. Tilbake til puslespillet ditt.","tutorialSkipped":"Du hoppet over veiledningen. Du kan se den igjen når som helst under Hjelp.","tapModeMark":"Trykk for å merke. Langt trykk gir hovedhandlingen.","tapModePlace":"Trykk gir hovedhandlingen. Langt trykk merker.","touchHint":"Trykk for å spille, langt trykk gir den andre handlingen. Den første runde knappen bytter om på de to.","hintNone":"Det er ikke mer å avsløre på dette brettet.","hintNoCredit":"Det er mer enn {n} hint, så dette puslespillet gir ikke poeng — men du kan fortsatt løse det ferdig.","hintAdFailed":"Ingen reklame var tilgjengelig, så ingenting er endret — hintet er der fortsatt hvis du vil ha det.","stuck":"Står du fast? Et hint avslører én rute, og oppgaven gir fortsatt poeng."},"tutorial":{"label":"Veiledning for {name}","step":"Steg {n} av {total}","next":"Neste","done":"Ferdig","skipStep":"Hopp over steget","skipTutorial":"Hopp over veiledningen","nice":"Bra!","offScript":"Ikke den: trekket er satt tilbake, så stegene fortsatt passer til brettet. Prøv det dette steget ber om.","offScriptRead":"Det er satt tilbake, så stegene fortsatt passer til brettet. Les dette steget først.","pointer":{"drag":"dra","rightClick":"høyreklikk","rightDrag":"dra med høyre knapp","middleClick":"midtklikk","longPress":"langt trykk","longPressDrag":"hold og dra","twoFingerTap":"trykk med to fingre"}},"splash":{"tagline":"Håndtegnede puslespill, klare til å spilles","skip":"Hopp over"},"help":{"keypad":{"heading":"Tastene","introTouch":"Tastene på skjermen skriver for deg","introPointer":"**Taster** i verktøylinjen viser taster på skjermen som skriver for deg","select":": velg først en rute på brettet, og trykk så på en tast.","clear":"- **⌫** tømmer den valgte ruten igjen.","pencil":"- **✎** slår på blyantnotater, slik at tastene skriver små notater i stedet for\\n  svar. Trykk en gang til for å gå tilbake til svar."}},"achievements":{"title":"Prestasjoner","summary":"{n} av {total} oppnådd","unlocked":"Prestasjon låst opp","secret":{"name":"Hemmelig prestasjon","description":"Fortsett å spille for å oppdage den."},"earnedOn":"Oppnådd {date}","progress":"{n} av {goal}","collection":"Samlingen","tier":{"bronze":"Bronse","silver":"Sølv","gold":"Gull"},"meta":{"first-solve":{"name":"De første skrittene","description":"Løs ditt første puslespill på egen hånd."},"solves-10":{"name":"Varm i trøya","description":"Løs 10 puslespill."},"solves-50":{"name":"Puslevane","description":"Løs 50 puslespill."},"solves-100":{"name":"Hundreklubben","description":"Løs 100 puslespill."},"solves-250":{"name":"Stormester","description":"Løs 250 puslespill."},"specialist":{"name":"Spesialist","description":"Løs 10 puslespill i det samme spillet."},"variety-3":{"name":"Smaksprøver","description":"Løs et puslespill i 3 forskjellige spill."},"variety-10":{"name":"Allsidig","description":"Løs et puslespill i 10 forskjellige spill."},"variety-all":{"name":"Hele esken","description":"Løs et puslespill i hvert spill i samlingen."},"unlock-first":{"name":"Ny hylle","description":"Lås opp ditt første spill med poeng."},"unlock-15":{"name":"En voksende samling","description":"Ha 15 spill låst opp."},"unlock-25":{"name":"Nøkkelknippe","description":"Ha 25 spill låst opp."},"unlock-all":{"name":"Hovednøkkel","description":"Lås opp hvert spill i samlingen."},"hardest-1":{"name":"Klar for en utfordring","description":"Løs et puslespill på et spills vanskeligste innstilling."},"hardest-10":{"name":"Toppjeger","description":"Løs den vanskeligste innstillingen i 10 forskjellige spill."},"hardest-all":{"name":"Urokkelig","description":"Løs den vanskeligste innstillingen i hvert spill."},"pure-1":{"name":"Rent ark","description":"Løs et puslespill uten å angre og uten hint."},"pure-25":{"name":"Rolig hånd","description":"Løs 25 puslespill uten å angre og uten hint."},"quick-draw":{"name":"Lynrask","description":"Løs et puslespill på 30 sekunder eller mindre."},"marathon":{"name":"Maraton","description":"Løs et puslespill etter å ha brukt mer enn 20 minutter på det."},"comeback":{"name":"Gi aldri opp","description":"Tap et puslespill, og kom så tilbake og løs det."},"second-thoughts":{"name":"Betenkeligheter","description":"Angre 100 ganger og løs likevel puslespillet."},"a-little-help":{"name":"Litt hjelp","description":"Ta et hint."},"oops":{"name":"Oi da","description":"Tap et puslespill."},"night-owl":{"name":"Nattugle","description":"Løs et puslespill mellom midnatt og klokka 5 om morgenen."},"on-a-roll":{"name":"I siget","description":"Løs 5 puslespill i én økt."},"days-3":{"name":"Stamgjest","description":"Spill på 3 forskjellige dager."},"days-7":{"name":"Hengiven","description":"Spill på 7 forskjellige dager."},"days-30":{"name":"En del av inventaret","description":"Spill på 30 forskjellige dager."},"quick-study":{"name":"Lærenem","description":"Spill en veiledning til ende."},"scholar":{"name":"Lærd","description":"Spill 10 forskjellige veiledninger til ende."},"collector-25":{"name":"Merkesamler","description":"Oppnå 25 prestasjoner."},"collector-60":{"name":"Troféskap","description":"Oppnå 60 prestasjoner."},"legend":{"name":"Puslelegende","description":"Oppnå alle de andre prestasjonene."}},"andMore":{"one":"{n} prestasjon låst opp","other":"{n} prestasjoner låst opp"}},"endgame":{"won":"Puslespillet er løst!","lost":"Spillet er over","credit":"★ +1 poeng — nok til å låse opp et nytt puslespill i samlingen.","wonNote":"Klar for det neste?","forfeitNote":"Dette puslespillet gir ikke poeng — løsningen ble vist underveis.","lostNote":"Den slapp unna. Vil du prøve en gang til?","next":"Neste puslespill","retry":"Prøv igjen","dismiss":"Lukk og se på brettet","time":"Tid","moves":"Trekk","hints":"Hint","best":"Beste {time}","newBest":"Ny rekord!","stars":"{n} av 3 stjerner","stepUp":"Prøv {preset} →"},"stage":{"generating":"Deler ut et nytt puslespill…"},"welcome":{"title":"Velg ditt første puslespill","subtitle":{"one":"{n} puslespill å begynne med. Velg det og spill.","other":"{n} puslespill å begynne med. Velg ett og spill."},"more":{"one":"…og {n} til å låse opp","other":"…og {n} til å låse opp"},"how":"Hvert puslespill du løser gir deg et poeng, og hvert poeng låser opp et nytt spill."},"gamepad":{"connected":"Kontroller tilkoblet"},"settings":{"title":"Innstillinger","done":"Ferdig","sound":"Lyd","volume":"Lydstyrke","reduceMotion":"Reduser bevegelse","vibration":"Vibrering","statistics":"Spillstatistikk","on":"På","off":"Av","portalMuted":"Nettstedet har slått av lyden."}}`),Y=[[`dra med høyre museknapp`,`dra med et langt trykk`],[`dra med høyre knapp`,`dra med et langt trykk`],[`drar med høyre knapp`,`drar med et langt trykk`],[`dra med midtre museknapp`,`dra med to fingre`],[`høyre museknapp`,`langt trykk`],[`høyre knapp`,`langt trykk`],[`midtre museknapp`,`to fingre`],[`midterste museknapp`,`to fingre`],[`venstre museknapp`,`trykk`],[`venstre knapp`,`trykk`],[`et høyreklikk`,`et langt trykk`],[`dobbeltklikker`,`dobbelttrykker`],[`dobbeltklikke`,`dobbelttrykke`],[`dobbeltklikk`,`dobbelttrykk`],[`høyreklikker du`,`trykker du lenge`],[`høyreklikker man`,`trykker man lenge`],[`høyreklikker`,`trykker lenge`],[`høyreklikke`,`trykke lenge`],[`høyreklikk`,`trykk lenge`],[`midtklikker du`,`trykker du med to fingre`],[`midtklikker man`,`trykker man med to fingre`],[`midtklikker`,`trykker med to fingre`],[`midtklikke`,`trykke med to fingre`],[`midtklikk`,`trykk med to fingre`],[`venstreklikker`,`trykker`],[`venstreklikke`,`trykke`],[`venstreklikk`,`trykk`],[`klikker`,`trykker`],[`klikke`,`trykke`],[`klikket`,`trykket`],[`klikking`,`trykking`],[`klikk`,`trykk`],[`musepekeren`,`fingeren`],[`musen`,`fingeren`]],X=JSON.parse(`{"4-way rotational symmetry needs a square grid":"4-veis rotasjonssymmetri krever et kvadratisk rutenett","A 2×2 grid is too small to make a puzzle from":"Et 2×2-rutenett er for lite til å lage et puslespill av","A cube rolling along a single row can never turn over all six faces":"En terning som ruller langs bare én rad, kan aldri snu alle seks flatene","A given piece leaves the grid":"En oppgitt brikke går utenfor rutenettet","A jigsaw block is too big":"En jigsaw-blokk er for stor","A jigsaw block is too small":"En jigsaw-blokk er for liten","A killer cage is too big":"Et bur er for stort","A killer cage is too small":"Et bur er for lite","A wrapping puzzle needs a width and height of at least 3 to have a unique solution":"Et puslespill som går rundt kantene, trenger bredde og høyde på minst 3 for å ha én entydig løsning","All parameters must be whole numbers":"Alle parametere må være hele tall","Already solved":"Allerede løst","An edge cannot join a point to itself":"En kant kan ikke koble et punkt til seg selv","Angle offset out of bounds.":"Vinkelforskyvningen er utenfor gyldig område.","At least one grid dimension must be greater than zero":"Minst én av dimensjonene i rutenettet må være større enn null","At least one of width and height for this grid type must be at least {0}":"For denne rutenettypen må bredden eller høyden være minst {0}","At least one of width and height must be greater than one":"Bredden eller høyden må være større enn én","Bad character in grid description":"Ugyldig tegn i rutenettbeskrivelsen","Bad mine layout in game description":"Ugyldig mineplassering i spillbeskrivelsen","Badly formatted move limit after grid description":"Feil format på trekkgrensen etter rutenettbeskrivelsen","Barrier probability must be a number between 0 and 1":"Sannsynligheten for barrierer må være et tall mellom 0 og 1","Barrier probability must be between 0 and 1":"Sannsynligheten for barrierer må være mellom 0 og 1","Blue cells are placed where some faces could never reach them":"Blå ruter er plassert der noen flater aldri kan nå dem","Both dimensions must be at least 2":"Begge dimensjonene må være minst 2","Both grid dimensions must be at least one":"Begge dimensjonene i rutenettet må være minst én","Bridges per direction must be between 1 and {0}":"Antall broer per retning må være mellom 1 og {0}","Can't create {0}×{1} puzzles":"Kan ikke lage puslespill på {0}×{1}","Clue did not provide 2 direction flags":"Ledetråden oppga ikke 2 retningsflagg","Clue is larger than the number of sides of its face":"Ledetråden er større enn antallet sider på flaten sin","Clue is missing its number":"Ledetråden mangler tallet sitt","Clue number out of range":"Ledetrådtallet er utenfor gyldig område","Colour out of range":"Fargen er utenfor gyldig område","Colour out of range in grid description":"Farge utenfor gyldig område i rutenettbeskrivelsen","Colours, pegs and guesses must be whole numbers":"Farger, pinner og gjett må være hele tall","Column counts inconsistent":"Kolonnetallene stemmer ikke overens","Could not four-colour the map":"Klarte ikke å fargelegge kartet med fire farger","Count is larger than the line it describes":"Tallet er større enn linjen det beskriver","Description contains a duplicate number":"Beskrivelsen inneholder et duplisert tall","Description contains a number larger than the grid":"Beskrivelsen inneholder et tall som er større enn rutenettet","Description contains a number out of range":"Beskrivelsen inneholder et tall utenfor gyldig område","Description contains a number that is too large":"Beskrivelsen inneholder et tall som er for stort","Description contains a repeated number":"Beskrivelsen inneholder et gjentatt tall","Description contains an unexpected character":"Beskrivelsen inneholder et uventet tegn","Description contains invalid characters":"Beskrivelsen inneholder ugyldige tegn","Description is corrupted":"Beskrivelsen er ødelagt","Description is longer than expected":"Beskrivelsen er lengre enn forventet","Description is shorter than expected":"Beskrivelsen er kortere enn forventet","Description is too long":"Beskrivelsen er for lang","Description is too short":"Beskrivelsen er for kort","Description marks cells beyond the grid as blue":"Beskrivelsen merker ruter utenfor rutenettet som blå","Description may only contain P, H and O":"Beskrivelsen kan bare inneholde P, H og O","Description must be a comma-separated list of numbers":"Beskrivelsen må være en kommaseparert liste med tall","Description must be exactly {0} characters":"Beskrivelsen må være nøyaktig {0} tegn","Description must be hex digits, a comma and a cell number":"Beskrivelsen må være heksadesimale sifre, et komma og et rutenummer","Description must be numbers each followed by an orientation letter (u, l, d or r)":"Beskrivelsen må være tall som hvert følges av en retningsbokstav (u, l, d eller r)","Description must be two hex strings separated by a comma":"Beskrivelsen må være to heksadesimale strenger atskilt med komma","Description must be {0} hexadecimal digits":"Beskrivelsen må være {0} heksadesimale sifre","Description must contain at least one edge":"Beskrivelsen må inneholde minst én kant","Description must contain at least one peg":"Beskrivelsen må inneholde minst én pinne","Description must contain at least two islands":"Beskrivelsen må inneholde minst to øyer","Description must contain each number from 1 to {0} exactly once":"Beskrivelsen må inneholde hvert tall fra 1 til {0} nøyaktig én gang","Description must contain each row number from 1 to {0} exactly {1} times":"Beskrivelsen må inneholde hvert radnummer fra 1 til {0} nøyaktig {1} ganger","Description must contain only digits":"Beskrivelsen kan bare inneholde sifre","Description must contain only numbers":"Beskrivelsen kan bare inneholde tall","Description must contain {0} numbers":"Beskrivelsen må inneholde {0} tall","Description must contain {0} tiles":"Beskrivelsen må inneholde {0} brikker","Description must mark exactly {0} cells blue":"Beskrivelsen må merke nøyaktig {0} ruter som blå","Description must start with {0} hex digits":"Beskrivelsen må starte med {0} heksadesimale sifre","Description places two islands next to each other":"Beskrivelsen plasserer to øyer ved siden av hverandre","Description repeats a colour although duplicates are disallowed":"Beskrivelsen gjentar en farge selv om duplikater ikke er tillatt","Description too long":"Beskrivelsen er for lang","Description too long for board size":"Beskrivelsen er for lang for brettstørrelsen","Description too short":"Beskrivelsen er for kort","Description too short for board size":"Beskrivelsen er for kort for brettstørrelsen","Digits in a {0}×{1} puzzle cannot exceed {2}":"Sifrene i et {0}×{1}-puslespill kan ikke overstige {2}","Disallowing duplicates requires at least as many colours as pegs":"Å forby duplikater krever minst like mange farger som pinner","Domino descriptions inconsistent":"Dominobeskrivelsene er inkonsistente","Dots too close together":"Prikkene ligger for tett","Duplicate edge in game description":"Duplisert kant i spillbeskrivelsen","Edge list defines the wrong number of regions":"Kantlisten definerer feil antall områder","Entrance square must contain a piece leaving the left edge":"Inngangsruten må inneholde en brikke som går ut av venstre kant","Every killer cage must have exactly one sum":"Hvert killer-bur må ha nøyaktig én sum","Exit square must contain a piece leaving the bottom edge":"Utgangsruten må inneholde en brikke som går ut av nedre kant","Expansion factor must be a number":"Utvidelsesfaktoren må være et tall","Expansion factor may not be negative":"Utvidelsesfaktoren kan ikke være negativ","Expansion factor must be from 0 to 100":"Utvidelsesfaktoren må være fra 0 til 100","Expected ',' after block structure description":"Forventet ',' etter blokkstrukturen","Expected ',' after grid description":"Forventet ',' etter rutenettbeskrivelsen","Expected a list of edges like 0-1,1-2 in game description":"Forventet en liste over kanter som 0-1,1-2 i spillbeskrivelsen","Expected comma before clue list":"Forventet komma før ledetrådlisten","Expected jigsaw block structure in game description":"Forventet jigsaw-blokkstruktur i spillbeskrivelsen","Expected killer cage structure in game description":"Forventet killer-burstruktur i spillbeskrivelsen","Expected killer clue grid in game description":"Forventet killer-ledetrådsrutenett i spillbeskrivelsen","Expected slashes between clues":"Forventet skråstreker mellom ledetrådene","Expecting number in game description":"Forventer et tall i spillbeskrivelsen","Extra moves must not be negative":"Antall ekstra trekk kan ikke være negativt","Extreme puzzles with more than {0} symbols take too long to generate":"Ekstreme puslespill med mer enn {0} symboler tar for lang tid å generere","Faulty game description":"Feil i spillbeskrivelsen","Flags contradicting each other":"Flaggene motsier hverandre","Flags go off grid":"Flaggene peker utenfor rutenettet","Game ID must include parameters":"Spill-ID-en må inneholde parametere","Game description contained unexpected characters":"Spillbeskrivelsen inneholdt uventede tegn","Game description contains an unexpected character":"Spillbeskrivelsen inneholder et uventet tegn","Game description contains no dots":"Spillbeskrivelsen inneholder ingen prikker","Game description contains unexpected characters":"Spillbeskrivelsen inneholder uventede tegn","Game description has {0} balls; expected {1}":"Spillbeskrivelsen har {0} kuler; forventet {1}","Game description is corrupted":"Spillbeskrivelsen er ødelagt","Game description is longer than expected":"Spillbeskrivelsen er lengre enn forventet","Game description is shorter than expected":"Spillbeskrivelsen er kortere enn forventet","Game description is the wrong length":"Spillbeskrivelsen har feil lengde","Game description is too long":"Spillbeskrivelsen er for lang","Game description is too short":"Spillbeskrivelsen er for kort","Game description is wrong length":"Spillbeskrivelsen har feil lengde","Game description longer than expected":"Spillbeskrivelsen er lengre enn forventet","Game description must be hexadecimal":"Spillbeskrivelsen må være heksadesimal","Game description shorter than expected":"Spillbeskrivelsen er kortere enn forventet","Game description too long":"Spillbeskrivelsen er for lang","Game is already solved":"Spillet er allerede løst","Grid area must be at least six squares":"Rutenettet må ha et areal på minst seks ruter","Grid area must be greater than 1":"Arealet av rutenettet må være større enn 1","Grid area must be greater than one":"Arealet av rutenettet må være større enn én","Grid description is the wrong length or not hexadecimal":"Rutenettbeskrivelsen har feil lengde eller er ikke heksadesimal","Grid description strings not used with this grid type":"Rutenettbeskrivelser brukes ikke med denne rutenettypen","Grid dimensions cannot be negative":"Dimensjonene i rutenettet kan ikke være negative","Grid dimensions must be at most {0}":"Dimensjonene i rutenettet kan være høyst {0}","Grid dimensions must be whole numbers":"Dimensjonene i rutenettet må være hele tall","Grid is too big":"Rutenettet er for stort","Grid must contain at least two squares":"Rutenettet må inneholde minst to ruter","Grid size must be between 3 and 9":"Størrelsen på rutenettet må være mellom 3 og 9","Grid size must be between {0} and {1}":"Størrelsen på rutenettet må være mellom {0} og {1}","Hard and Extreme puzzles are limited to a maximum number of {0}":"Puslespill på Vanskelig og Ekstrem er begrenset til høyst {0}","Height must be at least 3":"Høyden må være minst 3","Height must be at least five":"Høyden må være minst fem","Height must be at least one":"Høyden må være minst én","Height must be at least the rotating block size":"Høyden må være minst like stor som rotasjonsblokken","Height must be at least two":"Høyden må være minst to","Illegal grid type":"Ugyldig rutenettype","Incorrect number balance in game description":"Feil tallbalanse i spillbeskrivelsen","Initial x-coordinate was out of range":"Start-x-koordinaten var utenfor gyldig område","Initial y-coordinate was out of range":"Start-y-koordinaten var utenfor gyldig område","Internal error: solution is badly formatted":"Intern feil: løsningen er feil formatert","Invalid character in block structure specification":"Ugyldig tegn i blokkstrukturspesifikasjonen","Invalid character in game description":"Ugyldig tegn i spillbeskrivelsen","Invalid character in grid specification":"Ugyldig tegn i rutenettspesifikasjonen","Invalid character in number list":"Ugyldig tegn i tallisten","Invalid characters in game description":"Ugyldige tegn i spillbeskrivelsen","Invalid format grid description string.":"Ugyldig format på rutenettbeskrivelsen.","Invalid parameters: {0}":"Ugyldige parametere: {0}","Invalid syntax in game description":"Ugyldig syntaks i spillbeskrivelsen","Jigsaw puzzles with more than {0} symbols take too long to generate":"Jigsaw-puslespill med mer enn {0} symboler tar for lang tid å generere","Killer puzzle dimensions must be smaller than 10":"Dimensjonene i et killer-puslespill må være mindre enn 10","Malformed pending game description":"Feilformatert ventende spillbeskrivelse","Matrix description is the wrong length or not hexadecimal":"Matrisebeskrivelsen har feil lengde eller er ikke heksadesimal","Maximum face number must be a whole number":"Det høyeste tallet på dominobrikkene må være et helt tall","Maximum face number must be at least one":"Det høyeste tallet på dominobrikkene må være minst én","Maximum face number must be at most {0}":"Det høyeste tallet på dominobrikkene kan være høyst {0}","Maximum of 9 colours":"Høyst 9 farger","Medium puzzles need more than one bridge per direction, or loops disallowed":"Middels puslespill krever mer enn én bro per retning, eller at løkker ikke er tillatt","Mines solver opened a mine: inconsistent knowledge":"Løseren i Miner åpnet en mine: inkonsistent kunnskap","Minimum number of balls may not be greater than maximum":"Minste antall kuler kan ikke være større enn det høyeste","Missing grid description string.":"Rutenettbeskrivelsen mangler.","Missing separator":"Skilletegnet mangler","Monster numbers do not match grid spaces":"Antallet monstre stemmer ikke med antallet ledige ruter","More than one starting square specified":"Mer enn én startrute er oppgitt","Multiple solutions exist for this puzzle":"Dette puslespillet har flere løsninger","Must have at least five regions":"Det må være minst fem områder","Must have at least one guess":"Det må være minst ett gjett","Must have between {0} and {1} colours":"Det må være mellom {0} og {1} farger","No game set up to solve":"Det er ikke satt opp noe spill å løse","No gems specified":"Ingen juveler er oppgitt","No solution exists for this position":"Det finnes ingen løsning fra denne stillingen","No solution exists for this puzzle":"Det finnes ingen løsning på dette puslespillet","No solution found":"Fant ingen løsning","No starting square specified":"Ingen startrute er oppgitt","Not enough data in block structure specification":"For lite data i blokkstrukturspesifikasjonen","Not enough data in grid description":"For lite data i rutenettbeskrivelsen","Not enough data to fill grid":"For lite data til å fylle rutenettet","Not enough grid space to place all blue faces":"Ikke nok plass i rutenettet til alle de blå flatene","Not enough jigsaw blocks":"For få jigsaw-blokker","Not enough killer cages":"For få bur","Not enough numbers given after grid specification":"For få tall oppgitt etter rutenettspesifikasjonen","Not enough space to place the solid on an empty cell":"Ikke nok plass til å sette figuren på en tom rute","Number of colours must be at least three":"Antall farger må være minst tre","Number of colours must be at least two":"Antall farger må være minst to","Number of points must be a whole number":"Antall punkter må være et helt tall","Number of points must be at least {0}":"Antall punkter må være minst {0}","Number of points must be at most {0}":"Antall punkter kan være høyst {0}","Number of shuffling moves cannot be negative":"Antall blandetrekk kan ikke være negativt","Number of shuffling moves must be a whole number":"Antall blandetrekk må være et helt tall","Number of shuffling moves must be at most 10000":"Antall blandetrekk kan være høyst 10000","Number of shuffling moves must be at most {0}":"Antall blandetrekk kan være høyst {0}","Number out of range in game description":"Tall utenfor gyldig område i spillbeskrivelsen","Number too large":"Tallet er for stort","Out-of-range number in game description":"Tall utenfor gyldig område i spillbeskrivelsen","Out-of-range number in grid description":"Tall utenfor gyldig område i rutenettbeskrivelsen","Parameters must be whole numbers":"Parameterne må være hele tall","Patch coordinates do not identify a usable grid fragment":"Koordinatene peker ikke på et brukbart utsnitt av rutenettet","Patch offset out of bounds.":"Utsnittsforskyvningen er utenfor gyldig område.","Percentage of black squares must be between 5% and 100%":"Andelen svarte ruter må være mellom 5 % og 100 %","Percentage of islands must be from 1% to 30%":"Andelen øyer må være fra 1 % til 30 %","Puzzle is inconsistent":"Puslespillet er inkonsistent","Puzzle is too large":"Puslespillet er for stort","Puzzle is too long for unique-rows mode":"Puslespillet er for langt for modusen med unike rader","Puzzle is too tall for unique-rows mode":"Puslespillet er for høyt for modusen med unike rader","Puzzle is unsolvable":"Puslespillet kan ikke løses","Puzzle must have one entrance and one exit":"Puslespillet må ha én inngang og én utgang","Puzzles with more than {0} symbols take too long to generate":"Puslespill med mer enn {0} symboler tar for lang tid å generere","Random seed must not be empty":"Tilfeldig frø kan ikke være tomt","Rotating block size must be at least two":"Rotasjonsblokken må være minst to","Row counts inconsistent":"Radtallene stemmer ikke overens","Rows of blocks must be at least 1":"Antall rader med blokker må være minst 1","Scoring system not recognised":"Ukjent poengsystem","Size and difficulty must be whole numbers":"Størrelse og vanskelighetsgrad må være hele tall","Size must be at least 5 for Adjacent puzzles of this difficulty":"Størrelsen må være minst 5 for Naboer-puslespill på denne vanskelighetsgraden","Size must be between {0} and {1}":"Størrelsen må være mellom {0} og {1}","Solution not known for this puzzle":"Løsningen på dette puslespillet er ikke kjent","Solve operation failed":"Løs mislyktes","Solve operation produced an invalid move":"Løs ga et ugyldig trekk","Solver could not finish this grid":"Løseren klarte ikke å fullføre dette rutenettet","Solving algorithm cannot complete this puzzle":"Løsningsalgoritmen klarer ikke å fullføre dette puslespillet","Starting cell is outside the grid":"Startruten er utenfor rutenettet","Subtraction and division blocks must have area 2":"Blokker med subtraksjon og divisjon må dekke to ruter","That grid has too many faces to generate":"Det rutenettet har for mange flater til å kunne genereres","The Cross board is only available at {0}×{1}":"Kryss-brettet er bare tilgjengelig i {0}×{1}","The Octagon board is only available at {0}×{1}":"Åttekant-brettet er bare tilgjengelig i {0}×{1}","The ball has hit a mine; undo that move first":"Ballen har truffet en mine; angre det trekket først","The grid can have at most {0} squares":"Rutenettet kan ha høyst {0} ruter","The grid may have at most {0} squares":"Rutenettet kan ha høyst {0} ruter","The initial square contains a mine":"Startruten inneholder en mine","The solid cannot start on a blue cell":"Figuren kan ikke starte på en blå rute","The solution has already been revealed":"Løsningen er allerede vist","There must be at least one ball":"Det må være minst én kule","There must be at least one mine":"Det må være minst én mine","This arrangement cannot be solved":"Denne oppstillingen kan ikke løses","This game does not support the Solve operation":"Dette spillet støtter ikke Løs","This puzzle has no solution":"Dette puslespillet har ingen løsning","This puzzle instance contains a contradiction":"Dette puslespillet inneholder en selvmotsigelse","This puzzle is not self-consistent":"Dette puslespillet er ikke selvkonsistent","Too few clues for block structure":"For få ledetråder for blokkstrukturen","Too few clues for grid size":"For få ledetråder for størrelsen på rutenettet","Too little data in clue list":"For lite data i ledetrådlisten","Too little data in edge list":"For lite data i kantlisten","Too many balls to fit in the grid":"For mange kuler til å få plass i rutenettet","Too many clues for block structure":"For mange ledetråder for blokkstrukturen","Too many clues for grid size":"For mange ledetråder for størrelsen på rutenettet","Too many colours (at most {0})":"For mange farger (høyst {0})","Too many colours makes given grid size impossible":"For mange farger gjør den oppgitte størrelsen på rutenettet umulig","Too many guesses (at most {0})":"For mange gjett (høyst {0})","Too many jigsaw blocks":"For mange jigsaw-blokker","Too many killer cages":"For mange bur","Too many mines for grid size":"For mange miner for størrelsen på rutenettet","Too many pegs per guess (at most {0})":"For mange pinner per gjett (høyst {0})","Too many regions to fit in grid":"For mange områder til å få plass i rutenettet","Too much data in block structure specification":"For mye data i blokkstrukturspesifikasjonen","Too much data in clue list":"For mye data i ledetrådlisten","Too much data in edge list":"For mye data i kantlisten","Too much data to fill grid":"For mye data til å fylle rutenettet","Too much data to fit in grid":"For mye data til å få plass i rutenettet","Trivial solutions are uninteresting":"Trivielle løsninger er uinteressante","Unable to build a grid for these parameters":"Klarer ikke å bygge et rutenett med disse parameterne","Unable to build this grid":"Klarer ikke å bygge dette rutenettet","Unable to find a solution for this puzzle":"Finner ingen løsning på dette puslespillet","Unable to find a solution from this position":"Finner ingen løsning fra denne stillingen","Unable to find a solution to this puzzle":"Finner ingen løsning på dette puslespillet","Unable to find a unique solution for this puzzle":"Finner ingen entydig løsning på dette puslespillet","Unable to generate a puzzle of this size":"Klarer ikke å generere et puslespill i denne størrelsen","Unable to generate a puzzle with these parameters":"Klarer ikke å generere et puslespill med disse parameterne","Unable to solve this puzzle":"Klarer ikke å løse dette puslespillet","Unable to support more than {0} distinct symbols":"Støtter ikke mer enn {0} forskjellige symboler","Unable to work out any more of this puzzle":"Klarer ikke å finne ut mer av dette puslespillet","Unexpected additional character at end of game description":"Uventet ekstra tegn på slutten av spillbeskrivelsen","Unexpected additional data at end of game description":"Uventede ekstra data på slutten av spillbeskrivelsen","Unexpected character '{0}' in description":"Uventet tegn «{0}» i beskrivelsen","Unexpected character in clue list":"Uventet tegn i ledetrådlisten","Unexpected character in edge list":"Uventet tegn i kantlisten","Unexpected data at end of game description":"Uventede data på slutten av spillbeskrivelsen","Unknown board type":"Ukjent brettype","Unknown character in description":"Ukjent tegn i beskrivelsen","Unknown difficulty":"Ukjent vanskelighetsgrad","Unknown difficulty level":"Ukjent vanskelighetsnivå","Unknown difficulty rating":"Ukjent vanskelighetsgrad","Unknown shape type":"Ukjent formtype","Unknown symmetry":"Ukjent symmetri","Unknown symmetry type":"Ukjent symmetritype","Unrecognised character in game description":"Ukjent tegn i spillbeskrivelsen","Unrecognised characters in game description":"Ukjente tegn i spillbeskrivelsen","Unrecognised clue type":"Ukjent ledetrådtype","Unrecognised grid description.":"Ukjent rutenettbeskrivelse.","Unrecognised solid type":"Ukjent figurtype","Width and height cannot both be two":"Bredden og høyden kan ikke begge være to","Width and height for this grid type must both be at least {0}":"For denne rutenettypen må både bredden og høyden være minst {0}","Width and height must be at least two":"Bredden og høyden må være minst to","Width and height must be at least {0}":"Bredden og høyden må være minst {0}","Width and height must be at most twelve":"Bredden og høyden kan være høyst tolv","Width and height must be at most {0}":"Bredden og høyden kan være høyst {0}","Width and height must be at most {0} to generate a puzzle":"Bredden og høyden kan være høyst {0} for å kunne generere et puslespill","Width and height must be positive":"Bredden og høyden må være positive","Width and height must be whole numbers":"Bredden og høyden må være hele tall","Width and height must both be at least 3":"Både bredden og høyden må være minst 3","Width and height must both be at least four":"Både bredden og høyden må være minst fire","Width and height must both be at least one":"Både bredden og høyden må være minst én","Width and height must both be at least two":"Både bredden og høyden må være minst to","Width and height must both be even":"Både bredden og høyden må være partall","Width and height must both be greater than three":"Både bredden og høyden må være større enn tre","Width and height must both be greater than two":"Både bredden og høyden må være større enn to","Width and height must both be greater than zero":"Både bredden og høyden må være større enn null","Width and height must both be positive":"Både bredden og høyden må være positive","With three colours, a solvable grid may have at most {0} squares":"Med tre farger kan et løsbart rutenett ha høyst {0} ruter","Width must be at least 3":"Bredden må være minst 3","Width must be at least five":"Bredden må være minst fem","Width must be at least one":"Bredden må være minst én","Width must be at least the rotating block size":"Bredden må være minst like stor som rotasjonsblokken","Width must be at least two":"Bredden må være minst to","Width, height and ball counts must be whole numbers":"Bredde, høyde og antall kuler må være hele tall","Width, height and difficulty must be whole numbers":"Bredde, høyde og vanskelighetsgrad må være hele tall","Width, height and number of colours must be whole numbers":"Bredde, høyde og antall farger må være hele tall","Width, height, block size and move count must be whole numbers":"Bredde, høyde, blokkstørrelse og antall trekk må være hele tall","X puzzles need at least four symbols":"X-puslespill trenger minst fire symboler","X-diagonal jigsaw puzzles with more than {0} symbols take too long to generate":"Jigsaw-puslespill med X-diagonal og mer enn {0} symboler tar for lang tid å generere","You have hit a mine; undo that move first":"Du har truffet en mine; angre det trekket først","a cell may be a number position for only one rectangle":"en rute kan bare være tallposisjon for ett rektangel","at least one column contains more numbers than will fit":"minst én kolonne inneholder flere tall enn det er plass til","at least one row contains more numbers than will fit":"minst én rad inneholder flere tall enn det er plass til","cells are not adjacent":"rutene ligger ikke inntil hverandre","domino layout: no path between singletons":"dominooppsett: ingen vei mellom enkeltrutene","domino layout: stranded square cannot be paired":"dominooppsett: en isolert rute kan ikke pares","dot touches the outside twice":"prikken berører utsiden to ganger","dot with fewer than two edges":"prikk med færre enn to kanter","edge does not follow its face":"kanten følger ikke flaten sin","edge shared by three faces":"kant delt av tre flater","expected CxR or Nj":"forventet CxR eller Nj","expected WxH":"forventet WxH","expected WxHnN":"forventet WxHnN","expected a grid size":"forventet en størrelse på rutenettet","expected a maximum number":"forventet et maksimumstall","expected a number of points":"forventet et antall punkter","expected a solid letter followed by WxH":"forventet en figurbokstav etterfulgt av WxH","expected something like c6p4g10Bm":"forventet noe som c6p4g10Bm","expected w<W>h<H>m<MIN>M<MAX>":"forventet w<W>h<H>m<MIN>M<MAX>","generateKeen: solver disagrees with the square":"generateKeen: løseren er uenig med ruten","grid inconsistency while walking round a face":"inkonsistens i rutenettet under gjennomgang av en flate","inconsistent clues while assembling":"inkonsistente ledetråder under sammensetning","inconsistent distance field":"inkonsistent avstandsfelt","inconsistent face classes":"inkonsistente flateklasser","latin rectangle could not be extended":"det latinske rektangelet kunne ikke utvides","latinGenerate: no extension found":"latinGenerate: fant ingen utvidelse","latinSquare: rectangle could not be extended":"latinSquare: rektangelet kunne ikke utvides","line too long for solver":"linjen er for lang for løseren","no clue left to place":"ingen ledetråd igjen å plassere","no such laser: {0}":"ingen slik laser: {0}","rolled solid does not fit its destination":"den rullede figuren passer ikke på målruten","shown":"vist","too few row/column specifications":"for få rad-/kolonnespesifikasjoner","too many row/column specifications":"for mange rad-/kolonnespesifikasjoner","unrecognised character in game description":"ukjent tegn i spillbeskrivelsen","yes!":"ja!","9×9 Extreme puzzles take too long to generate; try 8×8 or Expert":"9×9-puslespill på Ekstrem tar for lang tid å generere; prøv 8×8 eller Ekspert"}`),Z={moves:`Trekk: {n}`,movesCompleted:{one:`Fullført på {n} trekk`,other:`Fullført på {n} trekk`},movesSinceSolve:`Trekk siden autoløsning: {n}`,completedMoves:`Fullført! Trekk: {n}`,solvedByComputer:`Løst av datamaskinen`,completed:`Fullført!`,completedPrefix:`Fullført! `,autoSolved:`Løst automatisk.`,autoSolvedPrefix:`Løst automatisk. `,autoSolverUsedPrefix:`Autoløser brukt. `,failedPrefix:`Ingen trekk igjen. `,dead:`Du gikk på en mine.`,target:` (mål {n})`},Q=JSON.parse(`{"blackbox":{"name":"Svart boks","description":"Finn de skjulte kulene ved å skyte lasere inn i boksen og se hvor de kommer ut igjen.","preset":{"5x5_3_balls":"5×5, 3 kuler","8x8_5_balls":"8×8, 5 kuler","8x8_3_6_balls":"8×8, 3-6 kuler","10x10_5_balls":"10×10, 5 kuler","10x10_4_10_balls":"10×10, 4-10 kuler"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"no_of_balls":{"name":"Antall kuler"}},"achievement":{"sparing_shots":{"name":"Sparsomme skudd","description":"Finn alle kulene mens du skyter lasere fra høyst halvparten av portene."},"pinpoint":{"name":"Blink","description":"Finn alle kulene i en boks på 8×8 eller større med høyst tre lasere per kule."},"shot_in_the_dark":{"name":"Skudd i blinde","description":"Få kulene dine sjekket uten å skyte en eneste laser, og ta feil."}},"status":{"correct":"RIKTIG!","wrong":{"one":"{wrong} feil og {n} kule du ikke fant.","other":"{wrong} feil og {n} kuler du ikke fant."},"marked":"Kuler merket: {n} / {range}  ·  Laserskudd: {fired}","tooMany":"  ·  {n} kuler for mange er merket.","check":"  ·  Klikk på knappen i hjørnet for å sjekke."}},"bridges":{"name":"Broer","alsoKnownAs":"Hashiwokakero, Hashi","description":"Koble øyene sammen med broer slik at alle tallene stemmer og ingen broer krysser hverandre.","preset":{"7x7_easy":"7×7 Lett","7x7_medium":"7×7 Middels","7x7_hard":"7×7 Vanskelig","10x10_easy":"10×10 Lett","10x10_medium":"10×10 Middels","10x10_hard":"10×10 Vanskelig","15x15_easy":"15×15 Lett","15x15_medium":"15×15 Middels","15x15_hard":"15×15 Vanskelig","10x10_medium_no_loops":"10×10 Middels, ingen løkker"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"difficulty":{"name":"Vanskelighetsgrad","choice":{"easy":"Lett","medium":"Middels","hard":"Vanskelig"}},"allow_loops":{"name":"Tillat løkker"},"max_bridges_per_direction":{"name":"Maks. broer per retning","choice":{"1":"1","2":"2","3":"3","4":"4"}},"of_island_squares":{"name":"% øyruter","choice":{"5":"5%","10":"10%","15":"15%","20":"20%","25":"25%","30":"30%"}},"expansion_factor":{"name":"Utvidelsesfaktor (%)","choice":{"0":"0%","10":"10%","20":"20%","30":"30%","40":"40%","50":"50%","60":"60%","70":"70%","80":"80%","90":"90%","100":"100%"}}},"action":{"e":{"label":"Viskelær","title":"Dra fra en øy for å fjerne broene dens i den retningen (E)"},"g":{"label":"Hjelpelinjer","title":"Vis eller skjul en svak strek overalt der en bro kan gå (G)"}},"achievement":{"no_markers":{"name":"Klart vann","description":"Løs et puslespill på 10×10 eller større uten å tegne et eneste «ingen bro»-merke."},"sure_footing":{"name":"Stø på foten","description":"Løs et Vanskelig puslespill på 10×10 eller større uten å fjerne en bro eller bruke Angre."}}},"cube":{"name":"Terning","description":"Rull en figur rundt på rutenettet og plukk opp alle de blå rutene med sideflatene.","preset":{"cube":"Terning","tetrahedron":"Tetraeder","octahedron":"Oktaeder","icosahedron":"Ikosaeder"},"config":{"type_of_solid":{"name":"Type figur","choice":{"tetrahedron":"Tetraeder","cube":"Terning","octahedron":"Oktaeder","icosahedron":"Ikosaeder"}},"width_top":{"name":"Bredde / topp"},"height_bottom":{"name":"Høyde / bunn"}},"achievement":{"short_haul":{"name":"Kort tur","description":"Gjør alle flatene på Terningen blå på høyst tjue rull."},"octahedron_ace":{"name":"Åtte flater i fart","description":"Gjør alle flatene på Oktaederet blå på høyst tretti rull."},"scenic_route":{"name":"Den store rundturen","description":"Rull figuren minst to hundre ganger før alle flatene er blå."}}},"dominosa":{"name":"Dominosa","description":"Finn ut hvor det blandede dominosettet ligger i et rutenett av tall.","preset":{"up_to_double_3":"Opp til dobbel-3","up_to_double_4":"Opp til dobbel-4","up_to_double_5":"Opp til dobbel-5","up_to_double_6":"Opp til dobbel-6","up_to_double_7":"Opp til dobbel-7","up_to_double_8":"Opp til dobbel-8","up_to_double_9":"Opp til dobbel-9"},"config":{"maximum_number_on_dominoes":{"name":"Høyeste tall på dominoene"},"difficulty":{"name":"Vanskelighetsgrad","choice":{"very_easy":"Veldig lett","easy":"Lett","hard":"Vanskelig","extreme":"Ekstrem","ambiguous":"Flertydig"}}},"achievement":{"no_lines":{"name":"Ingen blyant trengs","description":"Løs et sett på dobbel-6 eller større uten å tegne en eneste blyantstrek."},"one_click_each":{"name":"Ett klikk per brikke","description":"Løs et sett på dobbel-6 eller større med ett klikk per domino og uten Angre."},"doubles_first":{"name":"Doble først","description":"Legg alle doble brikker i settet før du legger noen annen domino."}}},"fifteen":{"name":"Femten","alsoKnownAs":"15-spillet, skyvepuslespill","description":"Skyv brikkene rundt til de ligger i riktig rekkefølge.","preset":{"3x3":"3×3","4x4":"4×4","5x5":"5×5"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"}},"achievement":{"short_shuffle":{"name":"Kort stokking","description":"Få orden på 4×4 på 100 trekk eller færre."},"five_flyer":{"name":"Fem ganger fem i fart","description":"Få orden på 5×5 på under tre minutter."},"scenic_route":{"name":"Den lange veien","description":"Bruk mer enn 300 trekk på å få orden på 3×3."}}},"filling":{"name":"Utfylling","alsoKnownAs":"Fillomino","description":"Fyll rutenettet slik at hver gruppe like sifre dekker nøyaktig så mange ruter.","preset":{"9x7":"9×7","13x9":"13×9","17x13":"17×13"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"}},"achievement":{"in_ink":{"name":"Skrevet med blekk","description":"Løs Utfylling uten å endre eller viske ut noe siffer, og uten Angre."},"one_stroke":{"name":"Alt i ett jafs","description":"Løs Utfylling på 13×9 eller større, og skriv hver gruppe med sifre i ett enkelt trekk."}},"action":{"f":{"label":"Fyll","title":"Dra fra et siffer for å skrive det inn i hver rute du passerer (F)"}}},"flip":{"name":"Vend","alsoKnownAs":"Lights Out","description":"Tenn alle rutene — hvert trykk vender også rutene rundt.","preset":{"3x3_crosses":"3×3 Kryss","4x4_crosses":"4×4 Kryss","5x5_crosses":"5×5 Kryss","3x3_random":"3×3 Tilfeldig","4x4_random":"4×4 Tilfeldig","5x5_random":"5×5 Tilfeldig"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"shape_type":{"name":"Figurtype","choice":{"crosses":"Kryss","random":"Tilfeldig"}}},"achievement":{"press_once":{"name":"Trykk én gang","description":"Tenn et brett på 4×4 eller større uten å trykke på noen rute to ganger."},"fewest_presses":{"name":"Minste innsats","description":"Tenn et 5×5-brett med færrest mulig trykk."}}},"flood":{"name":"Flom","alsoKnownAs":"Flood It","description":"Fyll rutenettet med farge fra hjørnet til alt har samme farge, før trekkene tar slutt.","preset":{"12x12_easy":"12×12 Lett","12x12_medium":"12×12 Middels","12x12_hard":"12×12 Vanskelig","16x16_medium":"16×16 Middels","16x16_hard":"16×16 Vanskelig","12x12_3_colours":"12×12, 3 farger","12x12_4_colours":"12×12, 4 farger"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"colours":{"name":"Farger"},"extra_moves_permitted":{"name":"Ekstra trekk tillatt"}},"achievement":{"spare_moves":{"name":"Trekk til overs","description":"Oversvøm rutenettet med minst tre trekk til overs."},"beat_the_solver":{"name":"Slå maskinen","description":"Oversvøm rutenettet på færre trekk enn datamaskinens egen løsning."},"one_colour_short":{"name":"Én farge for mye","description":"Gå tom for trekk med bare to farger igjen på rutenettet."}},"status":{"moves":"{n} / {limit} trekk"}},"galaxies":{"name":"Galakser","alsoKnownAs":"Spiral Galaxies, Tentai Show","description":"Del rutenettet i områder som hvert er symmetrisk rundt prikken sin.","preset":{"7x7_medium":"7×7 Middels","7x7_extreme":"7×7 Ekstrem","10x10_medium":"10×10 Middels","15x15_medium":"15×15 Middels"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"difficulty":{"name":"Vanskelighetsgrad","choice":{"medium":"Middels","extreme":"Ekstrem"}}},"achievement":{"no_arrows":{"name":"Ingen pekepinner","description":"Løs Galakser på 10×10 eller større uten å dra ut en eneste pil."},"steady_hand":{"name":"Faste stjerner","description":"Løs Galakser på 10×10 eller større uten å fjerne en vegg eller bruke Angre."}}},"guess":{"name":"Gjett","alsoKnownAs":"Mastermind","description":"Finn den skjulte raden med fargede pinner ut fra merkene gjettene dine gir.","preset":{"standard":"Standard","super":"Super"},"config":{"colours":{"name":"Farger"},"pegs_per_guess":{"name":"Pinner per gjett"},"guesses":{"name":"Antall gjett"},"allow_blanks":{"name":"Tillat tomme plasser"},"allow_duplicates":{"name":"Tillat gjentakelser"}},"action":{"k":{"label":"Behold","title":"Klikk på en pinne i raden din for å ta den med over i neste gjett (K)"},"l":{"label":"Bokstaver","title":"Merk pinnene med bokstaver (L)"}},"achievement":{"five_guesses":{"name":"Kodeknekker","description":"Finn den skjulte raden på fem gjett eller færre."},"super_sleuth":{"name":"Mesterdetektiv","description":"Finn den skjulte Super-raden med fem pinner på seks gjett eller færre."},"so_near":{"name":"Så nær","description":"Gå tom for gjett med alle pinner unntatt én på rett plass."}},"status":{"revealed":"Løsningen er avslørt","solved":{"one":"Løst på {n} gjett","other":"Løst på {n} gjett"},"outOfGuesses":"Ingen gjett igjen: løsningen er avslørt","guessN":"Gjett {n} av {total}"}},"inertia":{"name":"Treghet","description":"Rull en ball rundt i rutenettet og samle alle juvelene uten å treffe en mine.","preset":{"10x8":"10×8","15x12":"15×12","20x16":"20×16"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"}},"achievement":{"hat_trick":{"name":"Hattrick","description":"Samle opp tre eller flere juveler med ett enkelt rull med ballen."},"shortcut":{"name":"Snarvei","description":"Samle alle juvelene på et brett på 15×12 eller større på færre rull enn Løs ville brukt."},"last_gem_mine":{"name":"Pyrrhosseier","description":"Rull inn på en mine med det samme rullet som tar den aller siste juvelen."}},"status":{"gems":"Juveler: {n}","deaths":" · Dødsfall: {n}"}},"keen":{"name":"Keen","alsoKnownAs":"KenKen, Calcudoku","description":"Fyll ut det latinske kvadratet slik at hvert bur stemmer med regnestykket sitt.","preset":{"4x4_easy":"4×4 Lett","5x5_easy":"5×5 Lett","5x5_easy_x_only":"5×5 Lett, bare ×","6x6_easy":"6×6 Lett","6x6_medium":"6×6 Middels","6x6_medium_x_only":"6×6 Middels, bare ×","6x6_hard":"6×6 Vanskelig","6x6_expert":"6×6 Ekspert","6x6_extreme":"6×6 Ekstrem","9x9_medium":"9×9 Middels"},"config":{"grid_size":{"name":"Størrelse på rutenettet"},"difficulty":{"name":"Vanskelighetsgrad","choice":{"easy":"Lett","medium":"Middels","hard":"Vanskelig","expert":"Ekspert","extreme":"Ekstrem"}},"multiplication_only":{"name":"Bare multiplikasjon"}},"action":{"m":{"label":"Merker","title":"Skriv alle muligheter som blyantnotater i hver tomme rute (M)"},"l":{"label":"Uthev","title":"Fremhev hver rute med sifferet du sist rørte ved (L)"}},"achievement":{"no_pencil":{"name":"Hoderegning","description":"Løs en Keen på 6×6 eller større uten å skrive et eneste blyantnotat."},"products_only":{"name":"Rent produkt","description":"Løs en 6×6 Middels Keen med bare ganging."}}},"lightup":{"name":"Tenn lys","alsoKnownAs":"Akari","description":"Plasser lyspærer slik at hver rute blir opplyst og ingen pære lyser på en annen.","preset":{"7x7_easy":"7×7 Lett","7x7_medium":"7×7 Middels","7x7_hard":"7×7 Vanskelig","10x10_easy":"10×10 Lett","10x10_medium":"10×10 Middels","10x10_hard":"10×10 Vanskelig","14x14_easy":"14×14 Lett","14x14_medium":"14×14 Middels","14x14_hard":"14×14 Vanskelig"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"of_black_squares":{"name":"% svarte ruter"},"symmetry":{"name":"Symmetri","choice":{"none":"Ingen","2_way_mirror":"2-veis speiling","2_way_rotational":"2-veis rotasjon","4_way_mirror":"4-veis speiling","4_way_rotational":"4-veis rotasjon"}},"difficulty":{"name":"Vanskelighetsgrad","choice":{"easy":"Lett","medium":"Middels","hard":"Vanskelig"}}},"achievement":{"no_crosses":{"name":"Bare lys","description":"Løs Tenn lys på 10×10 eller større uten å sette et eneste kryss."},"no_takebacks":{"name":"En lys idé","description":"Løs en Vanskelig Tenn lys uten noen gang å ta bort en pære."}},"action":{"x":{"label":"Kryss","title":"Klikk setter kryss i stedet for pærer (X)"}}},"loopy":{"name":"Løkker","alsoKnownAs":"Slitherlink","description":"Tegn én lukket løkke slik at hvert tall viser hvor mange streker det har rundt seg.","preset":{"7x7_squares_easy":"7×7 Kvadrater Lett","10x10_squares_easy":"10×10 Kvadrater Lett","7x7_squares_medium":"7×7 Kvadrater Middels","10x10_squares_medium":"10×10 Kvadrater Middels","7x7_squares_expert":"7×7 Kvadrater Ekspert","10x10_squares_expert":"10×10 Kvadrater Ekspert","10x10_triangular_expert":"10×10 Trekanter Ekspert","12x10_honeycomb_expert":"12×10 Bikube Ekspert","7x7_snub_square_expert":"7×7 Snub-kvadrat Ekspert","9x9_cairo_expert":"9×9 Cairo Ekspert","5x4_great_hexagonal_expert":"5×4 Stor-sekskantet Ekspert","7x7_octagonal_expert":"7×7 Åttekantet Ekspert","5x5_kites_expert":"5×5 Drager Ekspert","5x5_floret_expert":"5×5 Blomst Ekspert","5x4_dodecagonal_expert":"5×4 Tolvkantet Ekspert","5x4_great_dodecagonal_expert":"5×4 Stor-tolvkantet Ekspert","10x10_penrose_kite_dart_expert":"10×10 Penrose (drage/pil) Ekspert","10x10_penrose_rhombs_expert":"10×10 Penrose (romber) Ekspert"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"grid_type":{"name":"Type rutenett","choice":{"squares":"Kvadrater","triangular":"Trekanter","honeycomb":"Bikube","snub_square":"Snub-kvadrat","cairo":"Cairo","great_hexagonal":"Stor-sekskantet","octagonal":"Åttekantet","kites":"Drager","floret":"Blomst","dodecagonal":"Tolvkantet","great_dodecagonal":"Stor-tolvkantet","penrose_kite_dart":"Penrose (drage/pil)","penrose_rhombs":"Penrose (romber)"}},"difficulty":{"name":"Vanskelighetsgrad","choice":{"easy":"Lett","medium":"Middels","hard":"Vanskelig","expert":"Ekspert"}}},"achievement":{"off_grid":{"name":"Utenfor rutenettet","description":"Løs Løkker på et hvilket som helst mønster unntatt kvadrater."},"no_crosses":{"name":"Bare løkken","description":"Løs Løkker på 10×10 uten å krysse ut en eneste kant."},"aperiodic":{"name":"Aperiodisk","description":"Løs Løkker med Penrose uten noen gang å fjerne en strek du har tegnet."}},"action":{"x":{"label":"Kryss","title":"Klikk krysser ut kanter i stedet for å tegne streker (X)"}}},"magnets":{"name":"Magneter","description":"Plasser magneter og tomme dominoer slik at poltallene går opp.","preset":{"6x5_easy":"6×5 Lett","6x5_hard":"6×5 Vanskelig","6x5_hard_strip_clues":"6×5 Vanskelig, færre ledetråder","8x7_easy":"8×7 Lett","8x7_hard":"8×7 Vanskelig","8x7_hard_strip_clues":"8×7 Vanskelig, færre ledetråder","10x9_hard":"10×9 Vanskelig","10x9_hard_strip_clues":"10×9 Vanskelig, færre ledetråder"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"difficulty":{"name":"Vanskelighetsgrad","choice":{"easy":"Lett","hard":"Vanskelig"}},"strip_clues":{"name":"Færre ledetråder"}},"achievement":{"no_flips":{"name":"Riktig vei","description":"Løs Magneter på 8×7 eller større uten noen gang å snu en magnet rundt."},"stripped":{"name":"Avisolerte ledninger","description":"Løs Magneter på 10×9 Vanskelig med færre ledetråder på under ti minutter."}},"action":{"b":{"label":"Tom","title":"Klikk merker dominoer som tomme i stedet for å plassere magneter (B)"}}},"map":{"name":"Kart","description":"Fargelegg kartet med fire farger slik at ingen naboområder får samme farge.","preset":{"20x15_easy_30_regions":"20×15 Lett, 30 områder","20x15_medium_30_regions":"20×15 Middels, 30 områder","20x15_hard_30_regions":"20×15 Vanskelig, 30 områder","20x15_extreme_30_regions":"20×15 Ekstrem, 30 områder","30x25_medium_75_regions":"30×25 Middels, 75 områder","30x25_hard_75_regions":"30×25 Vanskelig, 75 områder"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"regions":{"name":"Områder"},"difficulty":{"name":"Vanskelighetsgrad","choice":{"easy":"Lett","medium":"Middels","hard":"Vanskelig","extreme":"Ekstrem"}}},"achievement":{"no_dots":{"name":"Frihåndsatlas","description":"Løs et Kart på Vanskelig eller vanskeligere uten en eneste blyantprikk."},"steady_brush":{"name":"Stø pensel","description":"Løs et Kart på Ekstrem uten noen gang å endre fargen på et område."}},"action":{"l":{"label":"Tall","title":"Vis et tall i hvert område (L)"}}},"mines":{"name":"Miner","alsoKnownAs":"Minesweeper, Minesveiper","description":"Avdekk hver rute som ikke skjuler en mine — du trenger aldri å gjette.","preset":{"9x9_beginner_10_mines":"9×9 Nybegynner, 10 miner","9x9_35_mines":"9×9, 35 miner","16x16_intermediate_40_mines":"16×16 Middels, 40 miner","16x16_99_mines":"16×16, 99 miner","30x16_expert_99_mines":"30×16 Ekspert, 99 miner","30x16_170_mines":"30×16, 170 miner"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"mines":{"name":"Miner"},"ensure_solubility":{"name":"Garanter løsbarhet"}},"achievement":{"no_flags":{"name":"Uten flagg","description":"Vinn et spill Miner uten å sette et eneste flagg."},"expert_sweep":{"name":"Bombegruppa","description":"Vinn Ekspert-brettet på 30×16 på under fem minutter."},"so_close":{"name":"Hårfint","description":"Tråkk på en mine med høyst tre trygge ruter igjen å åpne."}},"status":{"marked":"Merket: {n} / {total}","deaths":" · Dødsfall: {n}"}},"net":{"name":"Nett","alsoKnownAs":"NetWalk","description":"Drei brikkene til hver eneste er koblet til midten.","preset":{"5x5":"5×5","7x7":"7×7","9x9":"9×9","11x11":"11×11","13x11":"13×11","5x5_wrapping":"5×5 rundtgående","7x7_wrapping":"7×7 rundtgående","9x9_wrapping":"9×9 rundtgående","11x11_wrapping":"11×11 rundtgående","13x11_wrapping":"13×11 rundtgående"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"walls_wrap_around":{"name":"Vegger går rundt kantene"},"barrier_probability":{"name":"Sannsynlighet for barrierer"},"ensure_unique_solution":{"name":"Garanter entydig løsning"}},"action":{"k":{"label":"Lås","title":"Klikk på brikker for å låse dem eller låse dem opp i stedet for å dreie dem (K)"},"j":{"label":"Bland","title":"Drei alle ulåste brikker tilfeldig (J)"},"scroll_left":{"label":"←","title":"Rull visningen til venstre (Shift+←)"},"scroll_up":{"label":"↑","title":"Rull visningen opp (Shift+↑)"},"scroll_down":{"label":"↓","title":"Rull visningen ned (Shift+↓)"},"scroll_right":{"label":"→","title":"Rull visningen til høyre (Shift+→)"}},"achievement":{"no_locks":{"name":"Ingenting under lås","description":"Løs et Nett på 9×9 eller større uten å låse en eneste brikke."},"not_a_turn_wasted":{"name":"Ikke én dreining for mye","description":"Løs et Nett på 9×9 eller større uten å dreie noen brikke mer enn nødvendig."},"jumbled":{"name":"Ristet om","description":"Trykk på Bland og løs likevel puslespillet."}},"status":{"active":"Aktive: {n}/{total}"}},"netslide":{"name":"Nettskyv","description":"Skyv rader og kolonner med nettbrikker til alt henger sammen.","preset":{"3x3_easy":"3×3 lett","3x3_medium":"3×3 middels","3x3_hard":"3×3 vanskelig","4x4_easy":"4×4 lett","4x4_medium":"4×4 middels","4x4_hard":"4×4 vanskelig","5x5_easy":"5×5 lett","5x5_medium":"5×5 middels","5x5_hard":"5×5 vanskelig"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"walls_wrap_around":{"name":"Vegger går rundt kantene"},"barrier_probability":{"name":"Sannsynlighet for barrierer"},"number_of_shuffling_moves":{"name":"Antall blandetrekk"}},"achievement":{"tidy_four":{"name":"Ryddig omkobling","description":"Løs et 4×4 Nettskyv på 18 skyv eller færre."},"lean_five":{"name":"Linjemontør","description":"Løs et 5×5 Nettskyv på 32 skyv eller færre."},"big_switch":{"name":"Den store bryteren","description":"Tenn hele nettverket med ett skyv når under halvparten av det var tent."}},"status":{"active":" · Aktive: {n}/{total}"}},"pattern":{"name":"Mønster","alsoKnownAs":"Nonogram, japansk kryssord, Picross","description":"Fyll inn rutenettet ut fra blokklengdene som er oppgitt for hver rad og kolonne.","preset":{"10x10":"10×10","15x15":"15×15","20x20":"20×20","25x25":"25×25","30x30":"30×30"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"}},"achievement":{"no_dots":{"name":"Ikke en prikk","description":"Løs et Mønster på 15×15 eller større uten å sette en eneste prikk."},"inked_in":{"name":"Trukket opp med blekk","description":"Løs et Mønster på 20×20 eller større uten noen gang å tømme en svart rute."}},"action":{"e":{"label":"Viskelær","title":"Klikk eller dra for å nullstille ruter til ukjent (E)"}}},"pearl":{"name":"Perle","alsoKnownAs":"Masyu","description":"Tegn én lukket løkke som går rett gjennom de hvite perlene og svinger ved de svarte.","preset":{"6x6_easy":"6×6 Lett","6x6_tricky":"6×6 Vrien","8x8_easy":"8×8 Lett","8x8_tricky":"8×8 Vrien","10x10_easy":"10×10 Lett","10x10_tricky":"10×10 Vrien","12x8_easy":"12×8 Lett","12x8_tricky":"12×8 Vrien"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"difficulty":{"name":"Vanskelighetsgrad","choice":{"easy":"Lett","tricky":"Vrien"}},"allow_unsoluble":{"name":"Tillat uløselige"}},"achievement":{"no_crosses":{"name":"Perlekjede","description":"Løs en Perle på 10×10 uten å sette et eneste kryss."},"one_stroke":{"name":"Ett strøk","description":"Tegn hele løkken i en Perle på 8×8 eller større i én eneste dragbevegelse."}},"action":{"x":{"label":"Kryss","title":"Klikk eller dra for å krysse ut kanter løkken ikke kan bruke (X)"}}},"pegs":{"name":"Pinner","alsoKnownAs":"Solitær, peg solitaire","description":"Hopp pinnene over hverandre til bare én er igjen.","preset":{"cross":"Kryss","octagon":"Åttekant","random_5x5":"Tilfeldig 5×5","random_7x7":"Tilfeldig 7×7","random_9x9":"Tilfeldig 9×9"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"board_type":{"name":"Type brett","choice":{"cross":"Kryss","octagon":"Åttekant","random":"Tilfeldig"}}},"achievement":{"dead_centre":{"name":"Midt i blinken","description":"Fullfør Kryss-brettet med den siste pinnen i det midterste hullet."},"hopscotch":{"name":"Paradis","description":"Vinn et spill Pinner der én pinne hopper fire ganger på rad."},"pegged_out":{"name":"Kjørt fast","description":"Sitt fast med ti eller flere pinner fortsatt på brettet."}},"status":{"stuck":"Ingen flere trekk — {n} pinner igjen","playing":"Pinner igjen: {n}  ·  Trekk: {moves}"}},"range":{"name":"Rekkevidde","alsoKnownAs":"Kurodoko, Kuromasu","description":"Farg ruter svarte slik at hvert tall ser nøyaktig så mange hvite ruter langs raden og kolonnen sin.","preset":{"9x6":"9×6","12x8":"12×8","13x9":"13×9","16x11":"16×11"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"}},"achievement":{"no_dots":{"name":"Ren kontrast","description":"Løs Rekkevidde på 13×9 eller større uten å sette en eneste prikk."},"quick_sight":{"name":"Skarpt blikk","description":"Løs Rekkevidde på 16×11 på under fem minutter."}},"action":{"e":{"label":"Viskelær","title":"Klikk eller dra for å fjerne svarte ruter og prikker (E)"}}},"rect":{"name":"Rektangler","alsoKnownAs":"Shikaku","description":"Del rutenettet i rektangler som hvert har ett tall, og tallet er lik arealet.","preset":{"7x7":"7×7","9x9":"9×9","11x11":"11×11","13x13":"13×13","15x15":"15×15","17x17":"17×17","19x19":"19×19"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"expansion_factor":{"name":"Utvidelsesfaktor"},"ensure_unique_solution":{"name":"Garanter entydig løsning"}},"achievement":{"clean_cuts":{"name":"Rene snitt","description":"Løs Rektangler på 11×11 eller større på ikke flere trekk enn det er tall."},"quick_carver":{"name":"Rask skjærer","description":"Løs Rektangler på 19×19 på under ti minutter."}},"status":{"drag":"{w}×{h} "},"action":{"e":{"label":"Viskelær","title":"Dra over et område for å fjerne strekene inne i det, eller klikk på en strek for å fjerne den (E)"}}},"samegame":{"name":"Same Game","alsoKnownAs":"Clickomania","description":"Tøm brettet ved å fjerne grupper av ruter i samme farge som ligger inntil hverandre.","preset":{"5x5_3_colours":"5×5, 3 farger","10x5_3_colours":"10×5, 3 farger","15x10_3_colours":"15×10, 3 farger","15x10_4_colours":"15×10, 4 farger","20x15_4_colours":"20×15, 4 farger"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"no_of_colours":{"name":"Antall farger"},"scoring_system":{"name":"Poengsystem","choice":{"n_1_2":"(n-1)^2","n_2_2":"(n-2)^2"}},"ensure_solubility":{"name":"Garanter løsbarhet"}},"achievement":{"avalanche":{"name":"Snøskred","description":"Fjern en gruppe på 25 ruter eller flere på én gang, og tøm så brettet."},"no_pairs":{"name":"Ingen par tillatt","description":"Tøm et brett på 15×10 eller større uten noen gang å fjerne et par."},"last_one":{"name":"Den siste ruten","description":"Sitt fast med bare én rute igjen på brettet."}},"status":{"score":"Poengsum: {n}","complete":"Brettet er ryddet! {score}","stuck":"Ingen trekk igjen. {score}","selected":"{score} · Valgt: {n} (+{points})"}},"signpost":{"name":"Veiskilt","description":"Koble rutene til én nummerert sti der hvert steg følger en pil.","preset":{"4x4":"4×4","4x4_free_ends":"4×4, frie ender","5x5":"5×5","5x5_free_ends":"5×5, frie ender","6x6":"6×6","7x7":"7×7"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"start_and_end_in_corners":{"name":"Start og slutt i hjørnene"}},"achievement":{"unbroken":{"name":"Ubrutt kjede","description":"Løs et Veiskilt uten noen gang å fjerne eller erstatte en kobling."},"in_order":{"name":"Rett gjennom","description":"Løs et Veiskilt på 6×6 eller større ved å koble stien i rekkefølge, fra 1 til stjernen."},"star_first":{"name":"Ønsk deg noe","description":"Lag din aller første kobling inn i stjernen, og løs så puslespillet."}},"action":{"b":{"label":"Bryt","title":"Klikk på en rute for å bryte opp hele kjeden dens (B)"}}},"singles":{"name":"Singles","alsoKnownAs":"Hitori","description":"Sverte ruter slik at ingen tall gjentas i en rad eller kolonne, uten å dele opp rutenettet.","preset":{"5x5_easy":"5×5 Lett","5x5_tricky":"5×5 Vrien","6x6_easy":"6×6 Lett","6x6_tricky":"6×6 Vrien","8x8_easy":"8×8 Lett","8x8_tricky":"8×8 Vrien","10x10_easy":"10×10 Lett","10x10_tricky":"10×10 Vrien","12x12_easy":"12×12 Lett","12x12_tricky":"12×12 Vrien"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"difficulty":{"name":"Vanskelighetsgrad","choice":{"easy":"Lett","tricky":"Vrien"}}},"achievement":{"no_circles":{"name":"Ingen ringer trengs","description":"Løs Singles på 8×8 eller større uten å sette ring rundt et eneste tall."},"sure_hand":{"name":"Sikker hånd","description":"Løs Singles på 10×10 eller større uten å gjøre en svertet rute hvit igjen."}}},"sixteen":{"name":"Seksten","description":"Skyv hele rader og kolonner rundt i rutenettet til brikkene står i rekkefølge.","preset":{"3x3":"3×3","4x3":"4×3","4x4":"4×4","5x4":"5×4","5x5":"5×5"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"number_of_shuffling_moves":{"name":"Antall blandetrekk"}},"achievement":{"lean_slides":{"name":"Sparsom skyver","description":"Få orden på 4×4 på 100 skyv eller færre."},"five_in_200":{"name":"Storsorterer","description":"Få orden på 5×5 på 200 skyv eller færre."},"round_the_doughnut":{"name":"Rundt smultringen","description":"Skyv én linje hele veien rundt til den er tilbake der den startet."}}},"slant":{"name":"Skråstreker","alsoKnownAs":"Gokigen Naname","description":"Tegn en diagonal i hver rute slik at tallene stemmer og det ikke dannes løkker.","preset":{"5x5_easy":"5×5 Lett","5x5_hard":"5×5 Vanskelig","8x8_easy":"8×8 Lett","8x8_hard":"8×8 Vanskelig","12x10_easy":"12×10 Lett","12x10_hard":"12×10 Vanskelig"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"difficulty":{"name":"Vanskelighetsgrad","choice":{"easy":"Lett","hard":"Vanskelig"}}},"achievement":{"no_loops":{"name":"Løkkefri","description":"Løs Skråstreker på 8×8 eller større uten noen gang å lukke en løkke."},"steady_hand":{"name":"Ingen tvil","description":"Løs Skråstreker på 12×10 uten å gå tilbake og endre en strek."}}},"solo":{"name":"Solo","alsoKnownAs":"Sudoku","description":"Fyll rutenettet slik at hver rad, kolonne og blokk har hvert siffer én gang.","preset":{"4x4_very_easy":"4×4 Veldig lett","6x6_easy":"6×6 Lett","9x9_very_easy":"9×9 Veldig lett","9x9_easy":"9×9 Lett","9x9_x_diagonal_easy":"9×9 X-diagonal Lett","9x9_medium":"9×9 Middels","9x9_hard":"9×9 Vanskelig","9x9_x_diagonal_hard":"9×9 X-diagonal Vanskelig","9x9_expert":"9×9 Ekspert","9x9_extreme":"9×9 Ekstrem","9x9_killer":"9×9 Killer","9x9_jigsaw_easy":"9×9 Jigsaw Lett","9x9_jigsaw_x_diagonal_easy":"9×9 Jigsaw X-diagonal Lett","9x9_jigsaw_hard":"9×9 Jigsaw Vanskelig","12x12_easy":"12×12 Lett","16x16_easy":"16×16 Lett"},"config":{"columns_of_sub_blocks":{"name":"Kolonner med underblokker"},"rows_of_sub_blocks":{"name":"Rader med underblokker"},"x_require_every_number_in_each_main_diagonal":{"name":"«X» (krev hvert tall i hver hoveddiagonal)"},"jigsaw_irregularly_shaped_sub_blocks":{"name":"Jigsaw (uregelmessig formede underblokker)"},"killer_digit_sums":{"name":"Killer (siffersummer)"},"symmetry":{"name":"Symmetri","choice":{"none":"Ingen","2_way_rotation":"2-veis rotasjon","4_way_rotation":"4-veis rotasjon","2_way_mirror":"2-veis speiling","2_way_diagonal_mirror":"2-veis diagonal speiling","4_way_mirror":"4-veis speiling","4_way_diagonal_mirror":"4-veis diagonal speiling","8_way_mirror":"8-veis speiling"}},"difficulty":{"name":"Vanskelighetsgrad","choice":{"very_easy":"Veldig lett","easy":"Lett","medium":"Middels","hard":"Vanskelig","expert":"Ekspert","extreme":"Ekstrem"}}},"action":{"m":{"label":"Merker","title":"Skriv alle muligheter som blyantnotater i hver tomme rute (M)"},"l":{"label":"Uthev","title":"Fremhev hver rute med sifferet du sist rørte ved (L)"}},"achievement":{"pen_only":{"name":"Penn, ikke blyant","description":"Løs en 9×9 Solo på Middels, Killer eller vanskeligere uten et eneste blyantnotat."},"no_second_thoughts":{"name":"Ingen anger","description":"Løs en 9×9 på Ekspert eller vanskeligere uten noen gang å endre eller tømme et siffer."}}},"tents":{"name":"Telt","alsoKnownAs":"Tents and Trees","description":"Slå opp et telt ved hvert tre uten at to telt rører hverandre.","preset":{"8x8_easy":"8×8 Lett","8x8_tricky":"8×8 Vrien","10x10_easy":"10×10 Lett","10x10_tricky":"10×10 Vrien","15x15_easy":"15×15 Lett","15x15_tricky":"15×15 Vrien"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"difficulty":{"name":"Vanskelighetsgrad","choice":{"easy":"Lett","tricky":"Vrien"}}},"achievement":{"no_grass":{"name":"Perfekt slått opp","description":"Løs Telt på 10×10 eller større uten å merke en eneste rute som gress."},"no_strikes":{"name":"Glade campinggjester","description":"Løs Telt på 15×15 uten noen gang å ta ned et telt."}}},"towers":{"name":"Tårn","alsoKnownAs":"Skyskrapere, Skyscrapers","description":"Bygg tårn slik at hver ledetråd langs kanten teller tårnene som er synlige derfra.","preset":{"4x4_easy":"4×4 Lett","5x5_easy":"5×5 Lett","5x5_hard":"5×5 Vanskelig","6x6_easy":"6×6 Lett","6x6_hard":"6×6 Vanskelig","6x6_expert":"6×6 Ekspert","6x6_extreme":"6×6 Ekstrem"},"config":{"grid_size":{"name":"Størrelse på rutenettet"},"difficulty":{"name":"Vanskelighetsgrad","choice":{"easy":"Lett","hard":"Vanskelig","expert":"Ekspert","extreme":"Ekstrem"}}},"action":{"m":{"label":"Merker","title":"Skriv alle muligheter som blyantnotater i hver tomme rute (M)"},"l":{"label":"Uthev","title":"Fremhev hver rute med sifferet du sist rørte ved (L)"}},"achievement":{"no_pencil":{"name":"Skyline i hodet","description":"Løs Tårn på 6×6 uten å skrive et eneste blyantnotat."},"clean_build":{"name":"Bygd for å vare","description":"Løs Tårn på 6×6 Ekspert eller Ekstrem uten å gå tilbake og endre et tårn."},"tallest_first":{"name":"De høyeste først","description":"Bygg alle de høyeste tårnene før alle andre, og løs så rutenettet."}}},"tracks":{"name":"Spor","alsoKnownAs":"Train Tracks","description":"Legg én sammenhengende jernbane fra inngangen til utgangen, slik at tallene stemmer.","preset":{"8x8_easy":"8×8 Lett","8x8_tricky":"8×8 Vrien","10x8_easy":"10×8 Lett","10x8_tricky":"10×8 Vrien","10x10_easy":"10×10 Lett","10x10_tricky":"10×10 Vrien","15x10_easy":"15×10 Lett","15x10_tricky":"15×10 Vrien","15x15_easy":"15×15 Lett","15x15_tricky":"15×15 Vrien"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"difficulty":{"name":"Vanskelighetsgrad","choice":{"easy":"Lett","tricky":"Vrien"}},"disallow_consecutive_1_clues":{"name":"Forby 1-tall ved siden av hverandre"}},"achievement":{"no_crosses":{"name":"Ingenting krysset ut","description":"Løs Spor på 10×10 eller større uten å krysse ut en rute eller en side."},"no_lift":{"name":"For full damp","description":"Løs Spor på 15×10 eller større uten noen gang å ta opp en skinne du har lagt."},"long_haul":{"name":"Langdistanse","description":"Legg skinner gjennom ti ruter i én dragbevegelse, og fullfør så linjen."}},"action":{"e":{"label":"Viskelær","title":"Klikk eller dra for å viske ruter rene (E)"}}},"twiddle":{"name":"Drei","description":"Drei kvadratiske blokker med brikker for å få tallene tilbake i riktig rekkefølge.","preset":{"3x3_rows_only":"3×3 bare rader","3x3_normal":"3×3 normal","3x3_orientable":"3×3 med retning","4x4_normal":"4×4 normal","4x4_orientable":"4×4 med retning","4x4_rotating_3x3_blocks":"4×4, 3×3-blokker dreies","5x5_rotating_3x3_blocks":"5×5, 3×3-blokker dreies","6x6_rotating_4x4_blocks":"6×6, 4×4-blokker dreies"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"rotating_block_size":{"name":"Størrelse på blokken som dreies"},"one_number_per_row":{"name":"Ett tall per rad"},"orientation_matters":{"name":"Retningen teller"},"number_of_shuffling_moves":{"name":"Antall blandetrekk"}},"achievement":{"few_turns":{"name":"Tjue dreininger","description":"Løs en 3×3 normal Drei på 20 dreininger eller færre."},"perfect_ten":{"name":"Perfekt tier","description":"Løs en 3×3 normal Drei på 10 dreininger eller færre."},"dizzy":{"name":"Rundt og rundt","description":"Drei én blokk samme vei fire ganger på rad, og løs så puslespillet."}},"action":{"t":{"label":"Medurs","title":"Bytt retningene: klikk dreier med klokken, høyreklikk mot klokken (T)"}}},"undead":{"name":"Udøde","alsoKnownAs":"Haunted Mirror Maze","description":"Plasser spøkelser, vampyrer og zombier slik at speilbildene stemmer.","preset":{"4x4_easy":"4×4 Lett","4x4_normal":"4×4 Normal","4x4_tricky":"4×4 Vrien","5x5_easy":"5×5 Lett","5x5_normal":"5×5 Normal","5x5_tricky":"5×5 Vrien","7x7_easy":"7×7 Lett","7x7_normal":"7×7 Normal"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"difficulty":{"name":"Vanskelighetsgrad","choice":{"easy":"Lett","normal":"Normal","tricky":"Vrien"}}},"keypad":{"g":"Spøkelse","v":"Vampyr","z":"Zombie"},"achievement":{"no_pencil":{"name":"Stol på øynene","description":"Løs Udøde på 5×5 eller større uten å lage et eneste blyantnotat."},"fearless":{"name":"Fryktløs","description":"Løs en Vrien Udøde uten å gå tilbake og endre et monster."}},"action":{"s":{"label":"Synslinjer","title":"Følg synslinjene gjennom en rute, eller fra et kanttall (S)"}}},"unequal":{"name":"Ulikhet","alsoKnownAs":"Futoshiki","description":"Fyll ut det latinske kvadratet slik at alle ulikhetstegnene stemmer.","preset":{"4x4_easy":"4×4 Lett","5x5_easy":"5×5 Lett","5x5_medium":"5×5 Middels","5x5_medium_adjacent":"5×5 Middels (Naboer)","5x5_hard":"5×5 Vanskelig","6x6_easy":"6×6 Lett","6x6_medium":"6×6 Middels","6x6_medium_adjacent":"6×6 Middels (Naboer)","6x6_hard":"6×6 Vanskelig","7x7_medium":"7×7 Middels","7x7_medium_adjacent":"7×7 Middels (Naboer)","7x7_hard":"7×7 Vanskelig"},"config":{"mode":{"name":"Modus","choice":{"unequal":"Ulikhet","adjacent":"Naboer"}},"size_s_s":{"name":"Størrelse (s*s)"},"difficulty":{"name":"Vanskelighetsgrad","choice":{"very_easy":"Veldig lett","easy":"Lett","medium":"Middels","hard":"Vanskelig","extreme":"Ekstrem"}}},"action":{"m":{"label":"Merker","title":"Skriv alle muligheter som blyantnotater i hver tomme rute (M)"},"h":{"label":"Hint","title":"Skriv inn blyantnotater for mulighetene som står igjen etter enkel logikk (H)"},"l":{"label":"Uthev","title":"Fremhev hver rute med sifferet du sist rørte ved (L)"}},"achievement":{"adjacent_bare":{"name":"Naboen","description":"Løs Ulikhet i Naboer-modus uten å skrive et eneste blyantnotat."},"extreme_bare":{"name":"Alt i hodet","description":"Løs en Ekstrem Ulikhet uten å skrive et eneste blyantnotat."}}},"unruly":{"name":"Uregjerlig","alsoKnownAs":"Binairo, Takuzu","description":"Fargelegg hver rute svart eller hvit, med like mange av hver i hver rad og kolonne og aldri tre på rad.","preset":{"8x8_easy":"8×8 Lett","8x8_normal":"8×8 Normal","10x10_easy":"10×10 Lett","10x10_normal":"10×10 Normal","14x14_easy":"14×14 Lett","14x14_normal":"14×14 Normal"},"config":{"width":{"name":"Bredde"},"height":{"name":"Høyde"},"unique_rows_and_columns":{"name":"Unike rader og kolonner"},"difficulty":{"name":"Vanskelighetsgrad","choice":{"easy":"Lett","normal":"Normal"}}},"achievement":{"no_threes":{"name":"Aldri tre","description":"Løs Uregjerlig på 10×10 eller større uten noen gang å lage tre på rad."},"first_time":{"name":"Svart på hvitt","description":"Løs Uregjerlig på 14×14 uten å gå tilbake og endre en rute."}},"action":{"e":{"label":"Viskelær","title":"Klikk på en rute for å tømme den (E)"}}},"untangle":{"name":"Løs floken","alsoKnownAs":"Planarity","description":"Dra punktene rundt til ingen linjer krysser hverandre.","preset":{"6_points":"6 punkter","10_points":"10 punkter","15_points":"15 punkter","20_points":"20 punkter","25_points":"25 punkter"},"config":{"number_of_points":{"name":"Antall punkter"}},"action":{"g":{"label":"Fest","title":"Fest punktene til et rutenett når du slipper dem (G)"}},"achievement":{"one_touch":{"name":"Lett på hånden","description":"Løs floken med 10 punkter eller flere uten å ta tak i det samme punktet to ganger."},"only_downhill":{"name":"Bare nedoverbakke","description":"Løs floken med 20 punkter eller flere uten at et trekk noen gang gir flere røde streker."}}}}`),$=JSON.parse('{"blackbox":{"step1":{"text":"Én kule gjemmer seg i denne 4×4-boksen. Skyt lasere inn fra prikkene rundt kanten, finn ut hvor den må være, merk den og klikk på knappen i hjørnet."},"step2":{"text":"Klikk på prikken på **venstre kant, på høyde med andre rad**. Strålen bøyes av på veien gjennom og kommer ut et annet sted; begge endene får samme tall."},"step3":{"text":"Skyt så fra prikken **øverst i andre kolonne**. En **H** betyr at strålen gikk rett inn i en kule og aldri kom ut."},"step4":{"text":"Skyt fra prikken **øverst i første kolonne** også. En **R** betyr at strålen spratt rett ut igjen, og det skjer når en kule ligger på skrå ved siden av porten."},"step5":{"text":"R-en gir en kule på skrå ved første kolonne, og H-en gir en rett nedover den andre: bare denne ruten oppfyller begge deler."},"step6":{"text":"**Klikk på den ruten** for å merke kulen din der."},"step7":{"text":"Alle kulene er merket, så **haken øverst til venstre** er aktiv. Klikk på den for å få svaret sjekket."},"step8":{"text":"Riktig. Underveis kan du **høyreklikke** på en rute for å låse den når du er sikker på at den er tom, og **Løs** røper svaret."}},"bridges":{"step1":{"text":"Tallet på hver øy sier hvor mange broer som skal ende der. Koble alle øyene sammen til ett nettverk, med høyst to broer mellom to øyer og ingen broer som krysser hverandre."},"step2":{"text":"**2-tallet nederst** har bare én øy på linje med seg: **4-tallet** øverst. **Dra** fra 2-tallet mot 4-tallet for å slå en bro over."},"step3":{"text":"Den skal ha to broer, og disse to øyene er det eneste stedet de kan gå. **Dra** på samme måte en gang til for å legge en parallell bro nummer to."},"step4":{"text":"Denne øyen er i mål. **Klikk** på den for å merke den som ferdig: den blir grå, og broene låses, så du ikke kommer borti dem ved et uhell."},"step5":{"text":"Ingen bro kan krysse en annen, så linjen mellom **de to 1-tallene** er død nå. **Dra med høyre knapp** fra 1-tallet til venstre mot det til høyre for å notere det."},"step6":{"text":"Hvert 1-tall har nå bare én vei ut, og de fire siste broene følger av det. **Løs** gjør puslespillet ferdig (og **G** viser hver linje en bro kan følge).","textTouch":"Hvert 1-tall har nå bare én vei ut, og de fire siste broene følger av det. **Løs** gjør puslespillet ferdig."}},"cube":{"step1":{"text":"Terningen har seks flater, og seks ruter er malt blå. Rull den rundt til hver flate har samlet én: hver gang den lander, bytter flaten under og ruten farge."},"step2":{"text":"Et klikk vipper terningen over kanten mot ruten du velger. **Klikk på den blå ruten rett under terningen** for å få fargen over på flaten som lander."},"step3":{"text":"Ruten den forlot, er blank nå — fargene bytter virkelig plass. **Klikk på den blå ruten til høyre** for å gjøre flate nummer to blå."},"step4":{"text":"**Piltastene** ruller terningen også. Trykk på **→** én gang for å plukke opp den tredje blå ruten.","textTouch":"Hver naborute er ett trykk unna. **Trykk på den neste blå ruten til høyre** for å plukke opp den tredje blå ruten."},"step5":{"text":"Tre flater blå, tre igjen — dette brettet kan klares på seks rull i alt, og statuslinjen teller dem. **Angre** tar ett tilbake hvis du ruller for langt."}},"dominosa":{"step1":{"text":"Tre dominoer — 0-0, 0-1 og 1-1 — ble lagt ut her og så tatt bort, slik at bare tallene står igjen. Del rutenettet i par, og legg hver av dem tilbake nøyaktig én gang."},"step2":{"text":"Ingen domino kan brukes to ganger. Å pare denne **0**-en med **1**-eren under ville gjort begge ytterkolonnene til en 0-1, så **høyreklikk** mellom dem for å notere at de ikke hører sammen."},"step3":{"text":"De eneste to **0**-ene som ligger inntil hverandre, er paret i øverste venstre hjørne, så det er der 0-0 hører hjemme. **Klikk på grensen mellom dem** for å legge den."},"step4":{"text":"På samme måte er de eneste **1**-erne som rører hverandre, de to nede til venstre. Klikk på grensen mellom dem for å legge 1-1."},"step5":{"text":"Da er høyre kolonne igjen til 0-1. Klikk på grensen mellom de to tallene der for å bli ferdig."},"step6":{"text":"Hver domino er brukt én gang. Klikk på en domino igjen for å løfte den av. En domino som er brukt to ganger, tegnes i rødt, og **Angre** tar deg tilbake gjennom trekkene."}},"fifteen":{"step1":{"text":"Skyv de nummererte brikkene inn i den tomme ruten til de står i rekkefølge fra **1 til 8**, med hullet nederst til høyre. Dette lille brettet er to trekk fra å være løst."},"step2":{"text":"Alle brikker i samme rad eller kolonne som hullet kan skyves. Klikk på **5** for å skyve den opp i hullet."},"step3":{"text":"Én til. Klikk på **8** for å fullføre raden."},"step4":{"text":"Løst! **Angre** og **Gjør om** går gjennom trekkene dine, og **Nytt** i pausemenyen gir deg et nytt puslespill. Piltastene skyver også en brikke inn i hullet, i pilens retning.","textTouch":"Løst! **Angre** og **Gjør om** går gjennom trekkene dine, og **Nytt** i pausemenyen gir deg et nytt puslespill. En hel rad eller kolonne skyves om gangen, så sikt på den ytterste brikken."}},"filling":{"step1":{"text":"Skriv et siffer i hver tomme rute slik at hver sammenhengende blokk av like sifre dekker nøyaktig så mange ruter som sifferet sier."},"step2":{"text":"**3**-tallet nederst i midtkolonnen kan bare vokse oppover, så blokken er hele den kolonnen. **Dra** fra den øverste ruten i den ned til den midterste, og trykk så på **3**.","textTouch":"**3**-tallet nederst i midtkolonnen kan bare vokse oppover. **Dra** fra den øverste ruten i den ned til den midterste, og trykk så på **3** på tastene."},"step3":{"text":"**2**-tallet i venstre kolonne mangler én makker, og ruten over er den eneste ledige. Klikk på den ruten og trykk på **2**.","textTouch":"**2**-tallet i venstre kolonne mangler én makker, og ruten over er den eneste ledige. Trykk på den ruten, og trykk så på **2** på tastene."},"step4":{"text":"Én rute igjen. Klikk på den og trykk på **1** for å se hvordan et galt siffer ser ut.","textTouch":"Én rute igjen. Trykk på den, og trykk så på **1** på tastene for å se hvordan et galt siffer ser ut."},"step5":{"text":"Rødt betyr umulig: de to **1**-tallene berører hverandre og ville blitt en blokk på to, og **2**-tallet øverst er stengt inne. Ruten er fortsatt valgt, så trykk på **Backspace** for å tømme den.","textTouch":"Rødt betyr umulig: de to **1**-tallene berører hverandre og ville blitt en blokk på to, og **2**-tallet øverst er stengt inne. Ruten er fortsatt valgt, så trykk på **⌫** på tastene for å tømme den."},"step6":{"text":"Den tomme ruten hører sammen med **2**-tallet over den i stedet. Klikk på den og trykk på **2** for å fullføre rutenettet.","textTouch":"Den tomme ruten hører sammen med **2**-tallet over den i stedet. Trykk på den, og trykk så på **2** på tastene for å fullføre rutenettet."},"step7":{"text":"Fylt. Tykke streker rammer inn hver ferdige blokk; **høyreklikker du**, legges ruter til utvalget én om gangen, og **Angre** tar tilbake en utfylling."}},"flip":{"step1":{"text":"Tenn alle de ni rutene. Trykker du på én, vendes den **og** rutene rundt, så tente ruter kan bli mørke igjen."},"step2":{"text":"Den lille figuren inni en rute viser hva den vender: den fylte blokken er ruten selv, omrissene er naboene."},"step3":{"text":"På tide å tenne dette brettet. Trykk på ruten **øverst til venstre**, den mørke i hjørnet."},"step4":{"text":"Hjørnet lyser, men de to naboene ble mørke. Trykk på ruten i **midten** nå."},"step5":{"text":"Nå er bare hjørnet nederst til høyre mørkt. Trykk på ruten **nederst til høyre** for å fullføre."},"step6":{"text":"Alt lyser! **Angre** tar tilbake et trykk, og du kan styre en markør med piltastene og trykke Enter i stedet for å klikke.","textTouch":"Alt lyser! **Angre** tar tilbake et trykk, og to trykk på samme rute opphever alltid hverandre, så rekkefølgen spiller ingen rolle."}},"flood":{"step1":{"text":"Ruten øverst til venstre er din, sammen med alt som henger sammen med den i samme farge. Hvert trekk maler om hele flekken, så naboruter i den nye fargen blir med. Gjør hele rutenettet ensfarget innenfor grensen på **fire trekk**."},"step2":{"text":"Flekken din er foreløpig bare det blå hjørnet. Klikk på den **røde** ruten ved siden av: flekken blir rød, og alle røde ruter den rører ved, blir med."},"step3":{"text":"Klikk nå på en **blå** rute i kanten av flekken din. En godt valgt farge kan spre seg langt utover rutenettet på ett trekk."},"step4":{"text":"Bare **grønn** er igjen utenfor flekken din. Ett klikk til tar med resten av rutenettet."},"step5":{"text":"Tre trekk av fire — statuslinjen holder tellingen. Går du tom før rutenettet er ensfarget, er runden tapt. Står du fast? Et **Hint** spiller én god farge for deg, og **Løs** gjør ferdig rutenettet — det teller som løst automatisk."}},"galaxies":{"step1":{"text":"To prikker, altså to galakser. Tegn vegger langs linjene i rutenettet slik at hver prikk havner midt i sitt eget område: dreier du et område 180° om prikken, må det lande nøyaktig oppå seg selv."},"step2":{"text":"Den venstre prikken ligger på en linje mellom to ruter, så galaksen dens må være de to venstre kolonnene. **Klikk** på linjen like til høyre for dem, i **øverste rad**."},"step3":{"text":"Prikkene fungerer også som notatblokk. **Dra** fra den høyre prikken inn i **ruten øverst til høyre** for å legge igjen en pil der, som merker ruten som en del av galaksen dens."},"step4":{"text":"Tilbake til veggen: **klikk** på den samme linjen én rad lenger ned, i **midterste rad**."},"step5":{"text":"Ett stykke gjenstår, i **nederste rad**. **Klikk** på det for å lukke begge galaksene."},"step6":{"text":"Begge områdene er skravert, så begge er riktige. **Løs** tegner hele løsningen, og et klikk på en vegg visker den ut igjen."}},"guess":{"step1":{"text":"To pinner er skjult bak spørsmålstegnene, i en eller annen rekkefølge av tre farger. Gjett en rad, les merkene den gir, og snevre inn mulighetene."},"step2":{"text":"**Dra** den øverste fargen ut av paletten og slipp den i **det venstre hullet** i raden med pilen."},"step3":{"text":"Du kan også velge en farge først og klikke på hullene med den. Klikk på **den andre fargen** i paletten."},"step4":{"text":"Klikk nå på **det høyre hullet** for å legge fargen der."},"step5":{"text":"Raden er full, så **den stiplede boksen** til høyre lyser opp. Klikk på den for å få gjettet vurdert."},"step6":{"text":"To **hule** merker betyr at begge fargene er med i svaret, men at ingen av dem står på riktig plass — et fylt merke ville vært riktig farge på riktig plass. Bytt om på dem og send inn igjen."},"step7":{"text":"Løst. **Løs** gir opp og viser svaret, og **L**-tasten setter bokstaver på pinnene hvis fargene er vanskelige å skille.","textTouch":"Løst. **Løs** gir opp og viser svaret, og **Behold** ved siden av Angre holder en pinne du stoler på, på plass til neste gjett."}},"inertia":{"step1":{"text":"Du er ballen i øvre venstre hjørne, og det er **tre juveler** å samle. Så snart ballen begynner å rulle, stopper den bare ved en vegg eller en stoppkloss — og en mine tar livet av den."},"step2":{"text":"Klikk på en rute til **høyre** for ballen. Den ruller den veien til kanten av brettet stopper den, og feier med seg juvelen den passerer."},"step3":{"text":"Klikk nå **under** ballen. Den tar den neste juvelen, og den brutte ringen to ruter ned — en stoppkloss — får den til å stanse."},"step4":{"text":"Pass på: den piggete tingen rett under ballen er en **mine**. Ruller du inn på en, er spillet slutt, og bare Angre får deg ut av det."},"step5":{"text":"Gå **diagonalt** i stedet: klikk på ruten to ned og to til venstre, så glir ballen forbi minen og bort til den siste juvelen."},"step6":{"text":"Alle tre juvelene — ferdig. **Angre** spoler tilbake et rull som gikk galt; piltastene ruller rett, og Home, Page Up, End og Page Down ruller diagonalt.","textTouch":"Alle tre juvelene — ferdig. **Angre** spoler tilbake et rull som gikk galt, og du kan også trykke utenfor rutenettet, noe som hjelper når ballen ligger inntil en kant."}},"keen":{"step1":{"text":"Fyll inn 1, 2 og 3 slik at hvert tall står én gang i hver rad og kolonne, og slik at sifrene i hvert tykt innrammede bur stemmer med regnestykket til buret."},"step2":{"text":"I **2×**-buret er produktet 2, så sifrene der er 1, 1 og 2. Et bur kan gjenta et siffer, men ikke i samme rad eller kolonne, så 2-tallet hører hjemme i hjørnet: klikk på den ruten og skriv **2**.","textTouch":"I **2×**-buret er produktet 2, så sifrene der er 1, 1 og 2. 2-tallet hører hjemme i hjørnet: trykk på den ruten, og trykk så på **2** på tastene."},"step3":{"text":"De to andre rutene i buret er 1-tallene. Klikk på ruten **til høyre for 2-tallet** og skriv **1**.","textTouch":"De to andre rutene i buret er 1-tallene. Trykk på ruten **til høyre for 2-tallet**, og trykk så på **1** på tastene."},"step4":{"text":"Øverste rad har allerede 2-tallet og 1-tallet sitt, så den siste ruten der må være 3-tallet. Klikk på **ruten øverst til høyre** og skriv **3**.","textTouch":"Øverste rad har allerede 2-tallet og 1-tallet sitt, så den siste ruten der må være 3-tallet. Trykk på **ruten øverst til høyre**, og trykk så på **3** på tastene."},"step5":{"text":"Gjetter du bare på en rute? **Høyreklikk** på midtruten og skriv **3** for å føre sifferet inn som et blyantnotat i stedet for å fylle det inn.","textTouch":"Gjetter du bare på en rute? **Trykk lenge** på midtruten og trykk på **3** for å notere sifferet i stedet for å fylle det inn. **✎**-tasten gjør det samme for en rute du har trykket på."},"step6":{"text":"Regn ut resten på samme måte; et siffer som gjentas i raden eller kolonnen sin, blir rødt, og det samme gjør et fullt bur som ikke stemmer med regnestykket sitt. I pausemenyen fører **Merker** inn alle muligheter som blyantnotater for deg, og **Løs** røper svaret."}},"lightup":{"step1":{"text":"Hver hvite rute må ende opp opplyst. En pære lyser opp sin egen rad og kolonne helt til en svart rute stopper strålen, og ingen pære får stå i lyset fra en annen."},"step2":{"text":"Et tall sier hvor mange pærer som ligger inntil den svarte ruten. Dette **2-tallet** har bare to hvite naboer, så begge må ha en pære: klikk på den til **høyre**."},"step3":{"text":"Legg merke til det gule skjæret som brer seg langs strålen. Klikk nå på ruten rett **under** 2-tallet for å sette pære nummer to."},"step4":{"text":"En **0** har ingen pærer inntil seg i det hele tatt. **Høyreklikk** på ruten over den for å sette et kryss: det minner deg bare om at det ikke kan stå en pære der."},"step5":{"text":"**1-tallet** vil ha nøyaktig én pære. Ruten under det er allerede opplyst, så en pære der ville stått i strålen — klikk på ruten til **venstre** for 1-tallet i stedet."},"step6":{"text":"To ruter i øverste rad er fortsatt mørke, og den ene har du krysset av. Klikk på **den andre**."},"step7":{"text":"Alle ruter opplyst, alle tall fornøyde. **Angre** tar tilbake en pære, og piltastene sammen med Enter og mellomrom setter pærer og kryss uten mus.","textTouch":"Alle ruter opplyst, alle tall fornøyde. **Angre** tar tilbake en pære, og et langt trykk krysser av ruter du har utelukket."}},"loopy":{"step1":{"text":"Tegn **én** lukket løkke langs de svake strekene mellom prikkene. Hvert tall sier hvor mange av rutens fire sider løkken bruker."},"step2":{"text":"Midtruten er merket **4**, så alle fire sidene er med i løkken. **Klikk** på den øverste siden for å tegne den første streken."},"step3":{"text":"Så den **venstre siden**. Klikker du på en strek igjen, viskes den ut."},"step4":{"text":"Hver prikk har to streker eller ingen, og prikken der de to møtes, er full. **Høyreklikk** på streken som går opp derfra, for å krysse den ut som ubrukelig."},"step5":{"text":"To sider igjen. **Klikk** på den nederste siden av midtruten."},"step6":{"text":"Og den **høyre siden** lukker den. Én løkke, ingen løse ender, og de fire **0**-tallene holder seg helt unna."},"step7":{"text":"Løst. **Angre** går tilbake gjennom strekene dine, og **Type** i pausemenyen bytter rutene ut med trekanter, sekskanter og enda rarere mønstre."}},"magnets":{"step1":{"text":"Hver domino er enten en magnet, med en **+**-halvdel og en **−**-halvdel, eller tom. Tallene teller **+**-polene (øverst og til venstre) og **−**-polene (nederst og til høyre) i hver linje, og like poler må aldri berøre hverandre."},"step2":{"text":"Nederste rad skal ha tre **−**-poler, og bare tre dominoer når ned i den, så hver må gi én. **Venstreklikk** på den øverste halvdelen av den stående dominoen for å gjøre den **+**, slik at **−** havner nedenfor."},"step3":{"text":"Da er den brede dominoen nederst til høyre også en magnet, og **0**-tallet over siste kolonne forbyr en **+** der. **Venstreklikk** på venstre halvdel for å legge **+** på den siden."},"step4":{"text":"Fjerde kolonne har nå sin ene **+** og skal ikke ha noen **−** i det hele tatt, så dominoen over kan ikke være noen av delene. **Høyreklikk** på den for å merke den som tom."},"step5":{"text":"Øverste rad mangler fortsatt en **+** og en **−** fra den brede dominoen til venstre. Høyre halvdel berører en **+**, og like poler kan ikke berøre hverandre — så **venstreklikk** på venstre halvdel."},"step6":{"text":"Én domino igjen. Første kolonne har brukt opp sin **+** øverst, så **+** her hører hjemme til høyre: **venstreklikk** på høyre halvdel for å bli ferdig."},"step7":{"text":"Løst! Klikker du på samme halvdel igjen, snus magneten rundt; høyreklikker du en gang til, står det igjen spørsmålstegn som notat om «magnet, men hvilken vei?», og **Angre** går et skritt tilbake."}},"map":{"step1":{"text":"Fargelegg hvert område slik at to områder som deler en grensestrekning, aldri får samme farge. Fire farger er alltid nok, og tre områder her er fortsatt tomme."},"step2":{"text":"Plukk opp en farge først: **klikk** på den **blå fargeprøven**, nummer to i raden under kartet."},"step3":{"text":"Med en farge i hånden kan du **høyreklikke** på et tomt område for å sette inn en liten prikk i den fargen — et notat om at området *kanskje* har den fargen. Prøv det på det høye området langs høyre side."},"step4":{"text":"Det er mer enn et kanskje: området grenser allerede til rødt, grønt og gult, så blått er det eneste som er igjen. **Klikk** på det for å fargelegge det."},"step5":{"text":"Du kan også **dra** en farge fra ett område til et annet. Det store området øverst berører nå rødt, grønt og blått, så **dra** gult opp dit fra det lille området nederst."},"step6":{"text":"Ett tomt område igjen, i **nedre venstre hjørne**: det grenser til grønt, blått og det nye gule, så det må være rødt. **Dra** rødt ned dit fra området i øvre høyre hjørne."},"step7":{"text":"Ferdig — en kollisjon ville vist et rødt **!** på grensen mellom de to områdene. **Angre** går tilbake, og piltastene sammen med **1**–**4** fargelegger helt uten mus.","textTouch":"Ferdig — en kollisjon ville vist et rødt **!** på grensen mellom de to områdene. **Angre** går tilbake, og viskelæret ytterst i raden tømmer et område du har ombestemt deg om."}},"mines":{"step1":{"text":"Hvert tall teller minene i de åtte rutene som rører det. To miner ligger skjult i den tildekkede blokken; avdekk alt annet uten å trå på en av dem."},"step2":{"text":"Denne **1**-eren rører bare én tildekket rute, så den ruten er en mine. **Høyreklikk** på den for å sette et flagg."},"step3":{"text":"**1**-eren under har nå den ene minen sin flagget, så resten av naboene er trygge. **Venstreklikk på det 1-tallet** for å åpne dem i én omgang."},"step4":{"text":"**2**-eren over blokken teller allerede ett flagg og har bare én tildekket rute igjen. **Høyreklikk** på den ruten."},"step5":{"text":"Begge minene er flagget, så den siste tildekkede ruten må være trygg. **Venstreklikk** på den for å gjøre rutenettet ferdig."},"step6":{"text":"Ryddet! Høyreklikker du på ruten igjen, fjernes flagget, og **Angre** redder deg hvis du skulle trå på en mine."}},"net":{"step1":{"text":"Hver brikke har en bit ledning, og hele nettet er dreid rundt tilfeldig. Drei brikkene til alle ni henger sammen med den merkede brikken i midten: **blå** ledninger har strøm, grå har det ikke."},"step2":{"text":"Brikken nederst til venstre peker ledningen rett inn i veggen. **Venstreklikk** på den for en kvart omdreining mot klokken, så ledningen når naboen til høyre."},"step3":{"text":"**Et høyreklikk** dreier en brikke andre veien. Gi brikken nederst til høyre én omdreining med klokken, så svinger ledningen rundt til venstre."},"step4":{"text":"Midtbrikken har ledninger på alle fire sider, så den kan ikke være feil. **Midtklikk** på den for å låse den, eller slå på **hengelåsen** ved siden av Angre og klikk på den: en låst brikke er skravert og nekter å dreie.","textTouch":"Midtbrikken har ledninger på alle fire sider, så den kan ikke være feil. Slå på **hengelåsen** ved siden av Angre og trykk på brikken for å låse den: en låst brikke er skravert og nekter å dreie."},"step5":{"text":"Én brikke igjen. Slå av **hengelåsen** og **venstreklikk** på brikken øverst til høyre for å svinge ledningen dens mot venstre og gi strøm til hele nettet.","textTouch":"Én brikke igjen. Slå av **hengelåsen** og trykk på brikken øverst til høyre for å svinge ledningen dens mot venstre og gi strøm til hele nettet."},"step6":{"text":"Alle ni brikkene har strøm. **Angre** går tilbake gjennom dreiningene dine; med tastaturet flytter piltastene en markør, og **A**, **D** og **F** dreier brikken under den.","textTouch":"Alle ni brikkene har strøm. **Angre** går tilbake gjennom dreiningene dine, en brikke du låser, er trygg mot bomtrykk, og **Bland** snurrer alle ulåste brikker på nytt."}},"netslide":{"step1":{"text":"Hver bit ledning må til slutt henge sammen med strømkilden. Blå ledninger har strøm, de grå har det ikke."},"step2":{"text":"Kilden sitter på midtbrikken. Den brikken flytter seg aldri, så midtraden og midtkolonnen har ingen piler — alt annet skyves rundt."},"step3":{"text":"Klikk på pilen til **venstre for nederste rad** for å skyve raden ett steg mot venstre; ledningen som faller av, dukker opp igjen til høyre."},"step4":{"text":"Nederste rad henger sammen nå, men den er fortsatt grå: ingenting knytter den oppover til kilden ennå."},"step5":{"text":"**Høyreklikk på** pilen **over tredje kolonne**. Et høyreklikk snur pilen, så kolonnen skyves nedover og de siste ledningene lyser opp."},"step6":{"text":"Alt har strøm! **Løs** viser et svar hvis du står fast, og **Type**-menyen har rutenett som går rundt, der ledninger løper ut på én kant og inn på den motsatte."}},"pattern":{"step1":{"text":"Tallene ved hver rad og kolonne er lengdene på de svarte blokkene i den linjen, i rekkefølge. Finn ut hvilke ruter som er svarte, og fyll dem inn."},"step2":{"text":"**Tredje kolonne** sier 1 2: én svart, et opphold, så to svarte. På fire ruter passer det bare på én måte, med paret nederst. **Dra** nedover over dem."},"step3":{"text":"Da må ruten over paret være oppholdet. **Høyreklikk** på den for å sette en prikk, som markerer en rute du vet er hvit."},"step4":{"text":"Og den øverste ruten i kolonnen er den enslige svarte i ledetråden. **Klikk** på den."},"step5":{"text":"**Siste kolonne** sier 3. Uansett hvor en blokk på tre ligger på fire ruter, dekker den alltid de to i midten, så **dra** nedover over dem."},"step6":{"text":"En ledetråd blir grå når linjen er ferdig. Fortsett å jobbe deg videre bit for bit, eller la **Løs** gjøre resten; midtklikk på en rute for å nullstille den til ukjent."}},"pearl":{"step1":{"text":"Tegn én lukket løkke fra midten av én rute til midten av den neste. Den trenger ikke å gå innom alle rutene, men den må gå gjennom hver eneste perle."},"step2":{"text":"En **hvit perle** betyr at løkken går rett gjennom den. På øverste rad er sidelengs den eneste rette veien, så **dra** fra ruten til venstre for perlen til ruten til høyre for den."},"step3":{"text":"Nå har perlen begge strekene sine, så ingenting mer kan gå ut fra den. **Høyreklikk** på kanten under den for å krysse ut den siden."},"step4":{"text":"Ved en **svart perle** svinger løkken, og så går den rett gjennom ruten på hver side av perlen. Perlen på **venstre kant** kan ikke svinge nedover – da måtte streken gå rett gjennom hjørnet nederst til venstre – så **klikk** på kanten til høyre for den."},"step5":{"text":"Da går løkken rett videre gjennom ruten ved siden av – og gjennom den hvite perlen bortenfor. **Dra** fra den ruten bort til fjerde kolonne."},"step6":{"text":"Fortsett å resonnere deg utover fra perlene; en perle får en rød ring rundt seg så snart regelen dens brytes. **Løs** tegner hele løkken hvis du vil se den."}},"pegs":{"step1":{"text":"En pinne hopper over en nabo og ned i det tomme hullet bak, og pinnen den hoppet over blir fjernet. Rydd dette lille brettet ned til **én pinne**: tre hopp."},"step2":{"text":"**Dra** pinnen øverst på stilken ned over naboen sin, ned i hullet nederst."},"step3":{"text":"Det går også an å klikke. Klikk på **pinnen til høyre** for å plukke den opp, og klikk så på hullet to ruter til venstre."},"step4":{"text":"Siste hopp: dra pinnen i **nederste venstre hjørne** over naboen sin og inn i midten."},"step5":{"text":"Én pinne igjen — løst. **Angre** tar et hopp tilbake når du kjører deg fast, og piltastene virker også: Enter plukker opp en pinne, og en piltast skyver den av gårde.","textTouch":"Én pinne igjen — løst. **Angre** tar et hopp tilbake hver gang du kjører deg fast, så langt tilbake du vil."}},"range":{"step1":{"text":"Farg ruter svarte slik at hvert tall er lik antallet hvite ruter det ser: seg selv, pluss hver rute på rett linje opp, ned, til venstre og til høyre helt til en svart rute eller kanten stopper blikket."},"step2":{"text":"Tallet **6** ser seks ruter akkurat nå — hele raden sin pluss de to under. Da kan ingenting i den raden eller kolonnen bli svart."},"step3":{"text":"Tallet **2** får bare se seg selv og én rute til, og ruten over må være hvit for 6-erens skyld. Så **klikk** på ruten til venstre for å farge den svart."},"step4":{"text":"Da er ruten øverst til høyre den ene hvite ruten 2-eren fortsatt ser. **Høyreklikk** på den for å sette en prikk, slik markerer du en rute du vet blir hvit."},"step5":{"text":"Tallet **3** ser allerede seg selv og de to rutene til venstre, så ruten til høyre må være svart. **Klikk** på den."},"step6":{"text":"Ferdig med to svarte ruter — prikkene er bare notater. **H** fyller inn én rute som følger av resten, og **Løs** setter prikker i hele rutenettet.","textTouch":"Ferdig med to svarte ruter — prikkene er bare notater. **Løs** setter prikker i hele rutenettet når du heller vil se svaret."}},"rect":{"step1":{"text":"Del dette rutenettet opp i rektangler slik at hvert rektangel rommer nøyaktig ett tall, og det tallet er hvor mange ruter rektangelet dekker."},"step2":{"text":"Et rektangel kan bare romme ett tall, og **3-tallet** ligger rett under **4-tallet** — så 4-tallet må ta hele den øverste raden. **Dra** fra 4-tallet bort til høyre ende av raden."},"step3":{"text":"Klikker du på én enkelt rutelinje, legges bare den kanten til eller fjernes. **Klikk** på linjen på høyre side av **3-tallet**."},"step4":{"text":"Et 9-tall kan bare være en 3×3-blokk, og det er bare én plass igjen til den. **Dra** over den uthevede blokken, fra ruten øverst til venstre til hjørnet nederst til høyre: da blir 3-tallet lukket inne også."},"step5":{"text":"Hver rute ligger i et rektangel med riktig størrelse. Å **dra med høyre knapp** visker ut linjene inne i et område, men lar omrisset stå, og **Angre** tar tilbake et strøk."}},"samegame":{"step1":{"text":"Tøm brettet ved å fjerne grupper på to eller flere ruter som ligger inntil hverandre og har samme farge. En gruppe på _n_ ruter gir (_n_ − 2)² poeng, så det er de store som teller."},"step2":{"text":"Klikk på en av de fire **røde** rutene øverst. Det første klikket velger bare gruppen: den lysner og får et tykt omriss."},"step3":{"text":"Klikk på den valgte gruppen igjen for å løfte den av brettet og få fire poeng. Ruter over et hull faller ned i det, og en tom kolonne trekker naboene inntil seg."},"step4":{"text":"Denne **grønne** ruten står helt alene. Ingen av naboene har samme farge, så den kan aldri velges — den må vente til brettet skyver en makker inntil den."},"step5":{"text":"Nå **det blå paret** som er markert her. Klikk på en av de to rutene for å velge begge."},"step6":{"text":"Ombestemt deg? **Høyreklikk** på markeringen for å slippe den igjen — ingenting fjernes før du klikker på den en gang til."},"step7":{"text":"Det er hele spillet. Hvert brett kan tømmes, så bare fortsett — **Angre** spoler tilbake når en rute blir stående alene, og det finnes ingen Løs-knapp som redder deg."}},"signpost":{"step1":{"text":"Hver rute har en pil. Koble alle seks til én kjede nummerert **1 til 6**, der hver rute følges av en rute et sted langs sin egen pil."},"step2":{"text":"Tallet **1** peker østover. **Dra** fra det til ruten til høyre for å gjøre den til nummer 2."},"step3":{"text":"Tallet **3** hektet seg på av seg selv, slik tall som følger etter hverandre og peker riktig vei alltid gjør. **Dra** nå ruten nederst til høyre bort på ruten til venstre for den."},"step4":{"text":"Ingen av de to har noe tall ennå, så paret merkes **a** og **a+1**. **Høyreklikk på** ruten i midten av nederste rad for å skille dem igjen."},"step5":{"text":"Ekte tall er bedre: **dra** tallet **3** ned på ruten under, som blir nummer 4."},"step6":{"text":"Siste kobling: **dra** den 4-eren bort på ruten til venstre. Den blir nummer 5, og 6-eren lukker stien av seg selv."},"step7":{"text":"Løst. Du kan **dra med høyre knapp** for å koble andre veien, fra en rute tilbake til den som kommer før, og **Løs** legger ut hele stien."}},"singles":{"step1":{"text":"Sverte ruter til ingen tall gjentas blant de hvite rutene i noen rad eller kolonne. To svarte ruter kan aldri dele en kant, og de hvite rutene må henge sammen i ett område."},"step2":{"text":"De to **4**-erne i denne raden har én rute mellom seg. Svertet du den, ville begge 4-erne blitt hvite, så den må være hvit selv — **høyreklikk på den** for å sette ring rundt."},"step3":{"text":"**3**-eren med ring er hvit for godt, og kolonnen har enda en 3-er øverst. **Venstreklikk på** den øverste for å sverte den."},"step4":{"text":"Svarte ruter berører aldri hverandre, så **4**-eren rett til høyre for den forblir hvit. **Venstreklikk på** den andre 4-eren i den siste kolonnen."},"step5":{"text":"Samme igjen: **2**-eren rett over den nye svarte ruten er hvit, og raden har enda en 2-er helt til venstre. **Venstreklikk på** den."},"step6":{"text":"Én igjen. **3**-eren over den svarte ruten er hvit, så den andre 3-eren nederst i kolonnen må bort. **Venstreklikk på den**."},"step7":{"text":"Løst, og de hvite rutene henger fortsatt sammen. Ringene er bare notater, og **Angre** går tilbake gjennom trekkene dine."}},"sixteen":{"step1":{"text":"Sett brikkene i rekkefølge, **1 til 9**, lest fra venstre mot høyre. Pilene langs kanten skyver en hel rad eller kolonne ett steg, og det som faller av, kommer inn igjen i andre enden."},"step2":{"text":"Klikk på pilen **over den andre kolonnen** for å skyve kolonnen ett steg opp; da er den midterste raden ferdig."},"step3":{"text":"Nå må den nederste raden flyttes mot høyre. **Høyreklikk** på pilen til **venstre for den nederste raden**: et høyreklikk sender linjen motsatt vei."},"step4":{"text":"Siste trekk: klikk på pilen til **venstre for den øverste raden** for å skyve den mot venstre og fullføre rutenettet."},"step5":{"text":"I rekkefølge! **Type** i pausemenyen byr på større rutenett, og med **Egendefinert…** der kan du få ett blandet med et fast antall trekk som du så skal nøste opp igjen."}},"slant":{"step1":{"text":"Tegn én diagonal gjennom hver rute. Et innringet tall teller strekene som møter hjørnet sitt, og strekene må aldri lukke en løkke."},"step2":{"text":"**0**-tallet øverst til venstre vil ikke ha noe som rører det, så den ene ruten det har, må helle andre veien. **Høyreklikk** på ruten for å tegne en `/`."},"step3":{"text":"**4**-tallet trenger en strek fra alle de fire rutene rundt seg. **Venstreklikk** på ruten over til venstre — et venstreklikk tegner en `\\\\`."},"step4":{"text":"Ruten over til høyre for **4**-tallet må i stedet helle ned mot venstre. **Høyreklikk** på den for å få en `/`."},"step5":{"text":"**1**-tallet på venstre kant har allerede den ene streken sin, fra ruten under. Så ruten over må helle bort fra det: **venstreklikk** på den for å få en `\\\\`."},"step6":{"text":"Fortsett på samme måte. Et tall som ikke lenger kan gå opp, blir rødt, og det samme gjør streker som er fanget i en lukket løkke. **Løs** i pausemenyen fyller ut resten."}},"solo":{"step1":{"text":"Hver rad, hver kolonne og hver innrammede **2×2-blokk** må ha 1, 2, 3 og 4 nøyaktig én gang. Tre ruter mangler i dette lille rutenettet."},"step2":{"text":"Denne **blokken** har allerede 2, 3 og 4, så den tomme ruten kan bare være **1**. Klikk på den ruten og trykk på **1**-tasten.","textTouch":"Denne **blokken** har allerede 2, 3 og 4, så den tomme ruten kan bare være **1**. Trykk på den ruten, og trykk så **1** på tastene."},"step3":{"text":"Usikker på en rute? **Høyreklikk på** denne tomme og trykk på **2** for å skrive sifferet inn som et notat.","textTouch":"Usikker på en rute? Trykk på denne tomme, slå på **✎** blant tastene, og trykk **2** for å skrive sifferet inn som et notat."},"step4":{"text":"Raden har allerede 3, 4 og 1, så notatet stemte. **Venstreklikk på** den samme ruten og trykk på **2** for å skrive inn svaret.","textTouch":"Raden har allerede 3, 4 og 1, så notatet stemte. Ruten er fortsatt valgt, så trykk **✎** for å slutte med blyantnotater og så **2** for å skrive inn svaret."},"step5":{"text":"Én rute igjen. Raden har allerede 4, 3 og 1 — klikk på den og trykk på sifferet som mangler.","textTouch":"Én rute igjen. Raden har allerede 4, 3 og 1 — trykk på den, og trykk så på sifferet som mangler blant tastene."},"step6":{"text":"Løst! **Angre** tar tilbake et feil siffer, og **M**-tasten skriver alle muligheter som blyantnotater i alle tomme ruter på én gang.","textTouch":"Løst! **Angre** tar tilbake et feil siffer, og **Merker** i pausemenyen skriver alle muligheter som blyantnotater i alle tomme ruter på én gang."}},"tents":{"step1":{"text":"Slå opp ett telt ved hvert tre — over, under, til venstre eller til høyre for det, aldri diagonalt. Ingen telt får berøre hverandre, og tallene teller teltene i hver rad og kolonne."},"step2":{"text":"**0**-tallet i enden av andre rad betyr at den raden ikke får noen telt. **Høyreklikk** på ruten ved siden av treet for å merke den som gress."},"step3":{"text":"Tredje kolonne er tom den også. **Dra med høyre knapp** fra den øverste ruten ned til tredje rad, så blir alle tre til gress på én gang."},"step4":{"text":"Treet nederst til høyre står i hjørnet med et annet tre ved siden av seg, så den eneste ledige naboen er over. **Venstreklikk** på den ruten for å slå opp et telt."},"step5":{"text":"Det teltet fyller tredje rad, så treet på venstre kant kan heller ikke få telt under seg. **Venstreklikk** på ruten øverst til venstre."},"step6":{"text":"Ett tre står fortsatt uten telt, og bare ruten til venstre for det er ledig. **Venstreklikk** på den, så er campingplassen ferdig."},"step7":{"text":"Løst! Klikker du på et telt eller et gressmerke igjen, forsvinner det; piltastene med Enter og mellomrom gjør samme jobb, og **Angre** går et skritt tilbake.","textTouch":"Løst! Trykker du på et telt eller et gressmerke igjen, forsvinner det, og **Angre** går et skritt tilbake."}},"towers":{"step1":{"text":"Hver rad og kolonne har ett tårn av hver høyde, 1 til 4. Et tall langs kanten teller tårnene du kan **se** derfra: et høyere tårn skjuler alle lavere tårn bak seg."},"step2":{"text":"Tallet **1** til høyre for øverste rad betyr at bare ett tårn er synlig fra den siden, så det nærmeste må være det høyeste. Klikk på den ruten og trykk **4**.","textTouch":"Tallet **1** til høyre for øverste rad betyr at bare ett tårn er synlig fra den siden, så det nærmeste må være det høyeste. Trykk på den ruten, og trykk så **4** på tastene."},"step3":{"text":"Du kan notere muligheter i stedet for å svare. **Høyreklikk** på den tomme ruten i venstre ende av øverste rad og trykk **1**.","textTouch":"Du kan notere muligheter i stedet for å svare. Trykk på den tomme ruten i venstre ende av øverste rad, slå på **✎** på tastene og trykk **1**."},"step4":{"text":"Tallet **4** til venstre for raden sier at alle fire tårnene er synlige, så de stiger 1-2-3-4 fra den enden. **Venstreklikk** på ruten og trykk **1** for å svare.","textTouch":"Tallet **4** til venstre for raden sier at alle fire tårnene er synlige, så de stiger 1-2-3-4 fra den enden. Ruten er fortsatt valgt, så trykk på **✎** for å slutte med blyantnotater og deretter **1** for å svare."},"step5":{"text":"Én rute igjen, og tallet **1** ved siden av raden setter igjen det høyeste tårnet nærmest. Klikk på den og trykk **4**.","textTouch":"Én rute igjen, og tallet **1** ved siden av raden setter igjen det høyeste tårnet nærmest. Trykk på den, og trykk så **4** på tastene."},"step6":{"text":"Løst! **Backspace** tømmer en rute du har fylt feil, og **Løs** i pausemenyen fullfører et puslespill som har slått deg.","textTouch":"Løst! **⌫** på tastene tømmer en rute du har fylt feil. I pausemenyen skriver **Merker** inn alle muligheter som blyantnotater, og **Løs** fullfører et puslespill som har slått deg."}},"tracks":{"step1":{"text":"Én jernbane går fra inngangen til venstre til utgangen nederst, og hver rute den er innom, har nøyaktig to skinner. Tallene sier hvor mange ruter i kolonnen eller raden sporet går gjennom."},"step2":{"text":"Inngangsstykket går allerede opp i **ruten øverst til venstre**, og oversiden og venstresiden av den ruten er kanten av rutenettet. Da må den andre skinnen gå til høyre: **klikk** litt til høyre for midten av ruten."},"step3":{"text":"Den **venstre kolonnen** har tallet **2**, og inngangen bruker allerede begge rutene, så ingenting går gjennom den nederste halvdelen. **Høyreklikk** på midten av en rute for å krysse den ut — dra med høyre knapp for å krysse ut en hel strekning."},"step4":{"text":"Den **høyre kolonnen** har tallet **4**, så sporet er innom hver eneste rute i den, og rutene øverst og nederst kan bare svinge innover. **Dra** fra ruten øverst til høyre helt ned til den nederst til høyre."},"step5":{"text":"**Nederste rad** trenger tre ruter, og den venstre kolonnen er ferdig, så hjørnet nederst til høyre ligger på sporet. Det kan ikke gå ut av rutenettet, så det svinger til venstre og opp: **klikk** på venstresiden av ruten."},"step6":{"text":"Tallene blir grå når raden eller kolonnen stemmer, og røde når den ikke kan gå opp. Fortsett rundt de løse endene, eller la **Løs** gjøre jernbanen ferdig."}},"twiddle":{"step1":{"text":"Få tallene tilbake i rekkefølge, **1 til 9**. Ett trekk dreier en kvadratisk blokk på fire brikker en kvart omdreining; tre dreininger fullfører dette brettet."},"step2":{"text":"Klikk på midten av de **fire brikkene øverst til venstre**. Et venstreklikk dreier blokken mot klokken, og da havner 1, 2, 3 langs toppen."},"step3":{"text":"**Høyreklikk på** midten av de **fire brikkene nederst til høyre** for å dreie den blokken med klokken i stedet."},"step4":{"text":"Avslutt med å klikke på midten av de **fire brikkene nederst til venstre**."},"step5":{"text":"Ferdig! **Type**-menyen har større blokker og en modus *med retning*, der hver brikke også må ende opp riktig vei."}},"undead":{"step1":{"text":"Fyll de fem tomme rutene med spøkelser, vampyrer og zombier — oversikten øverst sier hvor mange det er av hver. Hvert tall teller monstrene du ser langs den linjen, og speilene bøyer blikket ditt."},"step2":{"text":"Ser du inn fra **venstre for øverste rad**, ser du ingenting; speilet bøyer den samme linjen ut på toppen, der **1**-tallet ser ett monster. Bare et spøkelse gjemmer seg rett forfra og viser seg i et speil. **Klikk** på den ruten."},"step3":{"text":"**4**-tallet i hjørnet nederst til venstre sikksakker gjennom speilene forbi tre ruter og ser hver eneste av dem. Vampyrer forsvinner i speil, så den eneste vampyren må være den midterste ruten i venstre kolonne. **Klikk** på den."},"step4":{"text":"Et klikk blar bare gjennom monstrene. **Trykk på V** i stedet: G, V og Z setter et spøkelse, en vampyr eller en zombie rett inn i den markerte ruten.","textTouch":"Et trykk blar bare gjennom monstrene ett om gangen. Trykk heller på **Vampyr** på tastene: da havner monsteret rett i den markerte ruten."},"step5":{"text":"**Midterste rad** gir fri sikt uten speil, og begge **1**-tallene ser ett eneste monster — vampyren. Da må de to naboene være spøkelser. **Klikk** på ruten i midten."},"step6":{"text":"**Et høyreklikk** setter i stedet inn et lite blyantnotat uten å plassere noe. Prøv det på ruten til høyre i den raden; hver gang du høyreklikker, kommer neste monster."},"step7":{"text":"To ruter igjen: den med blyantnotatet er det tredje spøkelset, og den siste er zombien. Tall blir grå når linjen deres er i orden; **Løs** gjør labyrinten ferdig hvis du heller vil se på."}},"unequal":{"step1":{"text":"Hver rad og kolonne trenger 1, 2, 3 og 4 én gang hver – og hvert tegn mellom to ruter må peke mot det **minste** av de to tallene."},"step2":{"text":"Tegnet her peker mot høyre, så ruten til **venstre** har det største tallet. Denne raden mangler fortsatt en 2 og en 3: klikk på ruten til venstre og trykk **3**.","textTouch":"Tegnet her peker mot høyre, så ruten til **venstre** har det største tallet. Denne raden mangler fortsatt en 2 og en 3: trykk på ruten til venstre, og så på **3** på tastene."},"step3":{"text":"Ruten tegnet peker på, får det minste tallet. Klikk på den og trykk **2**.","textTouch":"Ruten tegnet peker på, får det minste tallet. Trykk på den, og så på **2** på tastene."},"step4":{"text":"Kolonnen har nå en 3, så denne ruten kan bare være en 2. **Høyreklikk** på den og trykk **2** for å skrive det inn som blyantnotat.","textTouch":"Kolonnen har nå en 3, så denne ruten kan bare være en 2. Trykk på den, slå på **✎** på tastene og trykk på **2** for å skrive det inn som blyantnotat."},"step5":{"text":"Et notat er ikke et svar. **Venstreklikk** på den samme ruten og trykk **2** for å gjøre det til svaret.","textTouch":"Et notat er ikke et svar. Ruten er fortsatt valgt, så trykk på **✎** for å slutte å skrive blyantnotater, og deretter på **2** for å gjøre det til svaret."},"step6":{"text":"Én rute igjen. Klikk på den og trykk **3** for å fullføre kvadratet.","textTouch":"Én rute igjen. Trykk på den, og så på **3** på tastene for å fullføre kvadratet."},"step7":{"text":"Løst! **Angre** tar tilbake et siffer, og **Løs** fyller inn svaret hvis et puslespill blir for vrient.","textTouch":"Løst! **Angre** tar tilbake et siffer, **Merker** og **Hint** skriver inn mulighetene som blyantnotater, og **Løs** fyller inn svaret hvis et puslespill blir for vrient."}},"unruly":{"step1":{"text":"Fargelegg hver rute svart eller hvit. Hver rad og kolonne trenger **tre av hver**, og ingen farge kan stå **tre ganger på rad**. Tre ruter er fortsatt ubestemte."},"step2":{"text":"Denne raden har allerede de tre hvite rutene sine, så den ubestemte må bli svart. **Venstreklikk** på den: et venstreklikk maler svart."},"step3":{"text":"Denne raden har allerede tre svarte, så den ubestemte ruten er hvit. **Høyreklikk** på den – et høyreklikk går motsatt vei og maler hvitt først."},"step4":{"text":"Den siste ubestemte ruten har to svarte til venstre for seg, og en tredje på rad er ikke lov. **Høyreklikk** på den for å male den hvit og fullføre rutenettet."},"step5":{"text":"Løst! Klikker du på en farget rute igjen, går den videre til den andre fargen og så tilbake til ubestemt, og **Angre** går bakover gjennom trekkene dine."}},"untangle":{"step1":{"text":"Seks punkter ligger i en ring, koblet sammen av åtte linjer. To par av dem krysser hverandre — de røde. Dra punktene rundt til det ikke er noe rødt igjen."},"step2":{"text":"Klikk først på **Fest**, rutenettknappen ved siden av Angre (eller trykk på **G**). Det slår på festerutenettet, så et punkt du slipper, lander på en av de svake prikkene midt i en rute."},"step3":{"text":"**Dra** punktet øverst i ringen bort i den tomme ruten i **hjørnet øverst til venstre**.","textTouch":"**Dra** punktet øverst i ringen bort på den tomme plassen i **hjørnet øverst til venstre** av brettet. Det trenger ikke lande helt nøyaktig — krysningen må bare bort."},"step4":{"text":"Én krysning igjen, borte til høyre. **Dra** det nederste punktet ned i det tomme **hjørnet nederst til høyre**.","textTouch":"Én krysning igjen, borte til høyre. **Dra** det nederste punktet ned i det tomme **hjørnet nederst til høyre** — den siste røde linjen forsvinner så snart den er klar av de andre."},"step5":{"text":"Floken er løst. **Løs** greier ut hvilken som helst floke for deg, og piltastene flytter en markør fra punkt til punkt, med Enter for å plukke opp et punkt og slippe det igjen.","textTouch":"Floken er løst. De røde linjene er de som fortsatt krysser, så fortsett å dra til ingen er igjen — eller la **Løs** greie ut floken for deg."}}}'),Fe={$locale:`nb`,$name:q,$dir:`ltr`,ui:J,touchPhrases:Y,messages:X,status:Z,games:Q,tutorials:$};export{g as A,ee as B,A as C,S as D,w as E,o as F,i as I,oe as L,f as M,u as N,b as O,c as P,ie as R,M as S,E as T,t as V,H as _,Ee as a,I as b,be as c,me as d,fe as f,W as g,se as h,Oe as i,m as j,v as k,ve as l,ce as m,Me as n,we as o,ue as p,Ae as r,Se as s,Pe as t,ge as u,B as v,O as w,P as x,R as y,ne as z};
//# sourceMappingURL=i18n-nb-D6zNnBXO.js.map