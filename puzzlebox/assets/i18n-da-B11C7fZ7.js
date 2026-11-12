import{t as e}from"./index-DIYwYEVR.js";var t=e({default:()=>n}),n="## Generel styring\n\n- **Nyt** giver et nyt puslespil, og **Genstart** sætter dette tilbage til start. Med\n  **Fortryd** og **Gentag** går du frem og tilbage gennem dine træk, og selv en genstart\n  kan fortrydes.\n- **Løs** viser svaret, hvis puslespillet har et. Det tæller som et træk, du kan fortryde.\n- I de fleste puslespil er et højreklik den anden handling — at markere, sætte flag eller\n  dreje den anden vej. Bruger et puslespil også et midterklik, er det den tredje.\n- **Type** skifter mellem de faste størrelser og sværhedsgrader; under **Tilpas…** kan du\n  selv bestemme.\n- **Del** viser koder, du kan sende videre, så en anden kan spille præcis dette puslespil.\n\n### Tastatur (Keyboard)\n\n- **Nyt spil**: `N` · **Fortryd**: `U` eller `Ctrl+Z` · **Gentag**: `R` eller `Ctrl+Y`\n- **Løs**: `Ctrl+S` (hvor det findes). **Denne hjælp**: `?`, og `Esc` lukker den igen. **Pause**: `Esc`.\n- I de fleste puslespil flytter piletasterne en markør rundt på brættet, `Enter` virker\n  som et venstreklik på den, og `Space` som et højreklik.\n- I menuerne flytter piletasterne fra ét kort eller én knap til den næste, `Enter` vælger,\n  og `Esc` går tilbage.\n- En controller virker også: retningsknapperne flytter, `A` vælger eller klikker, `X` er\n  højreklikket, `B` går tilbage, `Start` sætter på pause, `LB` og `RB` fortryder og\n  gentager, og `Y` giver et hint.\n  I puslespil, hvor du skriver tal, tager `RT` dig til tasterne på skærmen og tilbage.\n",ee=e({default:()=>te}),te=`## På en touchskærm

- **Tryk** for hovedhandlingen og **tryk længe** for den anden. Har et puslespil en
  tredje, så tryk med **to fingre**.
- Den første runde knap i værktøjslinjen (en prik i en firkant) bytter om på de to, så den
  handling, du bruger mest, altid kun er ét tryk væk; mens de er byttet om, lyser et lille
  flag på den. Et langt tryk gør så det andet.
- **Spred to fingre** på brættet for at gøre felterne i et stort gitter større, og **træk
  med to fingre** for at flytte rundt. Knib fingrene sammen igen for at se hele
  puslespillet. Under **Pause** findes de samme to størrelser også som knapper.
- **Pause** rummer resten af knapperne: puslespillets type, nyt puslespil, genstart, løs, del og
  Indstillinger for lyd og sprog. Uret står stille, mens menuen er åben.
`,ne=e({default:()=>re}),re=`# Sort boks

Nogle kugler er gemt inde i en skraveret boks. Rundt om boksen løber en ramme af laserporte.
Skyd en laser ind i boksen fra en vilkårlig port, og se hvad der kommer ud: regn ud af
resultaterne, hvor kuglerne må ligge, markér dem, og få så dit svar tjekket.

En stråle bevæger sig i en lige linje, medmindre en kugle kommer i vejen:

- En kugle lige forude **opsluger** strålen. Porten viser **H** (et træf).
- En kugle skråt forude **afbøjer** strålen 90° væk fra kuglen. Kugler på begge diagonaler
  sender den lige tilbage. Afbøjninger kan følge efter hinanden, så en stråle kan nå at flakke
  rundt, før den slipper ud.
- En stråle, der kommer ud af den samme port, som den gik ind ad, er **reflekteret** og vises
  som **R**. Det samme gælder en stråle, der ville blive afbøjet, allerede inden den kom ind i
  boksen, fordi der ligger en kugle skråt ved siden af indgangen.
- Ellers dukker strålen op et andet sted, og de to porte får det samme **tal** (og den samme
  farve), så du kan se, hvor hvert skud gik ind og kom ud igen.

Når du har markeret det rigtige antal kugler, dukker der en grøn knap op i øverste venstre
hjørne. Klik på den for at få tjekket efter. Din opstilling tæller som rigtig, hvis ingen laser
kan kende forskel på den og computerens — med flere kugler kan der være mere end én opstilling,
der opfører sig ens, og de vinder alle sammen.

En forkert opstilling afslutter spillet og viser svaret, så tjek kun efter, når du er sikker:
kugler, du fandt, er sorte, forkerte markeringer er streget ud med rødt, oversete kugler er
røde, hver laser du har skudt, som ikke passer med din opstilling, får en ring om sig, og lasere du
aldrig skød, men som ville have afsløret forskellen, bliver skudt nu og skrevet med rødt.
Fortryd fører dig tilbage, så du kan prøve videre. Løs giver op og sætter de rigtige kugler
ind.

## Styring

Statuslinjen tæller de kugler, du har markeret, og de lasere, du har skudt, og efter et tjek
siger den, hvor mange af dine kugler der var forkerte, og hvor mange du missede.

### Mus og berøring

- **Klik på en port** for at skyde en laser derfra. Klik på en port, der allerede er skudt fra,
  for at lyse begge ender af den stråle op; klik på den igen, eller et hvilket som helst andet
  sted, for at slukke lyset.
- **Klik inde i boksen** for at markere en kugle der; klik igen for at fjerne markeringen.
- **Højreklik på et felt** for at **låse** det, så du ikke kommer til at ændre det ved et
  uheld; højreklik igen for at låse op. Et højreklik på en port låser eller låser op for hele
  rækken eller kolonnen ved siden af.
- **Klik på knappen i hjørnet** for at få dine markeringer tjekket.

### Tastatur (Keyboard)

- **Piletasterne** flytter en markør hen over boksen og dens porte.
- **Enter** virker som et venstreklik: skyd, markér, eller tjek når markøren står på knappen.
- **Space** virker som et højreklik og låser eller låser op.

## Indstillinger

- **Bredde** og **højde** på boksen. Hver række og kolonne har en laserport i begge ender.
- **Antal kugler**: hvor mange kugler der er gemt. Angiv et enkelt tal, eller et interval som
  \`3-6\` og lad computeren vælge; så skal du også regne antallet ud, og tjekknappen dukker op
  ved ethvert antal markeringer inden for intervallet.
`,ie=e({default:()=>ae}),ae=`# Broer

Øer, der hver bærer et tal, ligger spredt ud over vandet. Forbind dem med broer, sådan at:

- hver bro går lige vandret eller lige lodret mellem to øer;
- tallet på en ø er præcis det antal broer, der rører den;
- to øer må forbindes med parallelle broer, men højst to (den grænse kan du ændre under
  Tilpas…);
- ingen bro krydser en anden;
- man kan komme fra enhver ø til enhver anden ved at gå over broerne.

Fejl vises med rødt: en ø med for mange broer, en ø der ikke længere kan nå op på nok (dens
resterende naboer er fyldte, eller de eneste ruter er spærret af andre broer eller af dine egne
“ingen bro”-markeringer), og en gruppe øer, der er færdig, men afskåret fra resten. Hvis løkker
ikke er tilladt, er broer, der danner en løkke, også røde.

## Styring

**Løs** lægger løsningen ind og fjerner de broer, der ikke hører til.

### Mus og berøring

- **Træk** fra en ø hen mod en nabo for at lægge en bro mellem dem. Du skal kun bevæge dig
  langt nok til, at retningen er klar; broen hopper på plads ved den nærmeste ø den vej. Træk
  igen for at få bro nummer to ved siden af; trækker du en gang mere, når grænsen er nået,
  forsvinder de alle sammen.
- **Højreklik og træk** på samme måde for at notere en “ingen bro her”-markering med blyant,
  eller for at viske en ud.
- **Klik** på en ø for at markere den som færdig. Den bliver grå, og dens broer låses, så du
  ikke kommer til at ændre dem ved et uheld; klik igen for at låse op.
- **Viskelæder** (viskelæderknappen ved siden af Fortryd) får et træk til at fjerne i stedet:
  træk fra en ø hen mod en nabo for at fjerne alle broer mellem dem, eller
  “ingen bro”-markeringen der. Tryk på den igen for at gå tilbage til at lægge broer.
- **Hjælpelinjer** viser svage streger alle de steder, hvor en bro kunne gå, og skjuler dem
  igen.

### Tastatur (Keyboard)

- **Piletasterne** flytter en markør fra ø til ø.
- **Enter** efterfulgt af en piletast lægger en bro i den retning; **Space** efterfulgt af en
  piletast lægger en markering. Trykker du **Enter** to gange, markeres øen som færdig.
- **E** er knappen **Viskelæder** og **G** knappen **Hjælpelinjer**.

## Indstillinger

- **Bredde** og **højde** på gitteret, mindst 3 hver.
- **Sværhedsgrad**: på _Let_ skal du kun kigge på én ø ad gangen — hvor dens resterende broer
  præcis udfylder den plads, der er tilbage, eller hvor dens tal er for stort til at springe en
  nabo over. På _Middel_ skal du også tænke over de enkelte forbindelser: hvilken bro der må
  være der, fordi øen ikke kan blive færdig uden den, og (når løkker er forbudt) hvilke
  forbindelser der ville lukke en løkke. På _Svær_ skal du kigge et skridt frem: ville denne
  bro fuldende en gruppe øer, der er afskåret fra resten, eller efterlade en ø uden nogen
  steder at gå hen? Hvert puslespil har præcis én løsning.
- **Tillad løkker**: slået til som standard. Slår du det fra, skal det færdige net af broer
  være et træ — ingen vej ad broer må føre tilbage til sit udgangspunkt — og puslespillet
  laves, så det kan løses med netop det for øje.
- **Maks. broer pr. retning**: grænsen for parallelle broer, normalt 2. Færre gør det lettere.
- **% øfelter**: cirka hvor stor en del af gitteret der bliver til øer. Nogle opstillinger kan
  ikke rumme så mange, så det er en øvre grænse.
- **Udvidelsesfaktor**: når kortet vokser, hvor sandsynligt det er, at en ny ø placeres så
  langt væk som muligt frem for et sted tættere på. Høje værdier giver mere spredte og lettere
  puslespil; lave værdier giver tætpakkede.
`,oe=e({default:()=>r}),r=`# Terning

Et legeme står på et gitter, og en håndfuld af gitterets felter er malet blå — præcis lige så
mange, som legemet har flader. Når du ruller legemet, vipper det hen over en af kanterne på den
flade, det står på, så den næste flade lander på nabofeltet. Hver gang det lander, bytter
fladen nedenunder og feltet, det landede på, farve: lander en tom flade på et blåt felt, følger
det blå med op på legemet; lander en blå flade på et tomt felt, bliver det blå tilbage.
Puslespillet er løst, når alle flader er blå på én gang. Statuslinjen tæller dine rul, så prøv
at blive færdig på så få som muligt.

Den klassiske udgave ruller en terning på et kvadratisk gitter. På et trekantet gitter kan du i
stedet rulle et tetraeder, et oktaeder eller et ikosaeder. Husk, at hver flade på et rullende
tetraeder kun nogensinde kan nå en fjerdedel af felterne, og at et oktaeders flader skiftevis
lander på de opad- og nedadvendte trekanter — de blå felter placeres altid sådan, at
puslespillet kan gøres færdigt.

## Styring

Der er ingen Løs-knap til det her puslespil. Når alle flader er blå, må du gerne rulle legemet
videre rundt, uden at det går galt.

### Mus og berøring

- **Klik** hvor som helst for at rulle legemet ét felt i retning af musemarkøren. På et kvadratisk
  gitter vil det sige op, ned, til venstre eller til højre; på et trekantet gitter har den
  aktuelle trekant tre naboer at vælge imellem. Et klik kan nå hver eneste nabo, legemet har,
  så det alene er nok til at spille på alle gittertyperne.

### Tastatur (Keyboard)

- **Piletasterne** ruller legemet i de fire hovedretninger. På et trekantet gitter har en
  trekant kun en nabo enten over eller under sig, så den anden lodrette tast gør ingenting.
- **Home**, **Page Up**, **End** og **Page Down** (eller hjørnetasterne på det numeriske
  tastatur, 7, 9, 1 og 3) ruller diagonalt på de trekantede gitre og vælger den kant, der
  ligger nærmest den vej.

## Indstillinger

- **Type legeme**: tetraeder, terning, oktaeder eller ikosaeder. Terningen bruger et
  kvadratisk gitter; de andre bruger et gitter af trekanter.
- **Bredde / top** og **Højde / bund**: for terningen er det størrelsen på det kvadratiske
  gitter. For de trekantede gitre er det længden af den øverste og nederste kant i en
  sekskantet arena (sætter du en af dem til nul, får du en almindelig trekant). Gitteret skal
  have plads til hvert blåt felt plus et tomt startfelt.
`,i=e({default:()=>a}),a=`# Dominosa

Et komplet sæt dominoer — én for hvert talpar fra 0 op til det højeste tal, dobbelterne med —
blev lagt ud, så det udfyldte et rektangel. Så blev tallene skrevet af, og dominoerne fjernet.
Din opgave er at regne ud, hvor de lå: del gitteret op i par af felter, der ligger ved siden af
hinanden, så hver domino i sættet bruges præcis én gang.

En domino, der er lagt et sted, hvor dens talpar allerede optræder et andet sted, vises med
rødt, og det samme gør et bart felt, som ingen domino længere kan nå.

## Styring

Puslespillet er løst, når alle felter er dækket, og ingen domino er rød. **Løs** lægger alle
løsningens dominoer og rydder det, du selv havde lagt.

### Mus og berøring

- **Klik** på grænsen mellem to nabotal (eller i den halvdel af et felt, der ligger tættest på
  grænsen) for at lægge en domino hen over dem. Klik på den samme grænse igen for at tage den
  væk. En domino, der lægges hen over en del af en anden, erstatter den.
- **Højreklik** på en grænse for at tegne en blyantsstreg hen over den, som en note om at de to
  tal **ikke** er én domino. Højreklik igen for at viske stregen ud. Der kan ikke tegnes
  streger op ad en domino, og lægger du en domino, viskes de streger, der rører den, ud.

### Tastatur (Keyboard)

- **Piletasterne** flytter en markør rundt på gitteret og stopper både midt i felterne og på
  grænserne mellem dem. På en grænse tegner markøren omridset af den domino, den ville lægge.
- **Enter** lægger eller fjerner den domino, og **Space** tegner eller visker en streg der.

## Indstillinger

- **Højeste tal på dominoerne**: dominoerne går fra 0-0 op til N-N, og gitteret er (N+2) felter
  bredt og (N+1) felter højt, så et maksimum på 6 giver et 8×7-gitter.
- **Sværhedsgrad**: hvor meget tankearbejde puslespillet kræver. På **Meget let** er der altid
  enten en domino med kun ét sted at ligge eller et felt med kun én domino, der kan dække det.
  **Let** lægger to argumenter til: hver måde at dække dette felt på bruger den samme domino, så
  den domino kan ikke ligge andre steder; og hvert sted, denne domino kunne ligge, udelukker
  netop den plads. **Svær** lægger optælling til (en domino, der ville skære et ulige antal
  felter fra, er umulig; en samling felter med det samme tal kan gøre krav på de dominoer, de
  deler), og på **Ekstrem** skal du følge konsekvenserne af en placering, indtil de støder
  sammen. Alle disse har præcis én løsning. **Flertydig** bliver slet ikke tjekket: de kan have
  flere løsninger og kan kræve gætteri — finder du bare én gyldig opdeling, har du vundet.
`,o=e({default:()=>s}),s=`# Femten

Det klassiske skydepuslespil. Gitteret er fyldt med nummererede brikker og ét tomt felt. Skub
brikker ind i hullet, indtil tallene står i rækkefølge fra venstre mod højre og oppefra og ned,
med hullet i nederste højre hjørne.

## Styring

**Løs** springer direkte til den færdige opstilling. Den viser dig ikke, hvordan man kommer
derhen, men den er en nem måde at starte forfra på, når du vil øve faste trækfølger.

### Mus og berøring

- **Klik** på en hvilken som helst brik i samme række eller kolonne som hullet for at skubbe
  den (og alt mellem den og hullet) på plads.

### Tastatur (Keyboard)

- **Piletasterne** skubber en brik ind i hullet i pilens retning: **pil op** flytter brikken under
  hullet op i det.

## Indstillinger

- **Bredde** og **højde** på gitteret (standarden er det klassiske 4×4).
`,c=e({default:()=>l}),l=`# Udfyldning

Nogle felter i gitteret har allerede et ciffer; resten er tomme. Skriv et ciffer i hvert tomt
felt, så hver sammenhængende gruppe af ens cifre dækker præcis så mange felter, som cifferet
siger: hvert 3-tal hører til en gruppe med tre 3-taller, hvert 1-tal står alene, og så videre.
Felter tæller kun som forbundne gennem siderne, ikke gennem hjørnerne. Deraf følger, at intet
felt indeholder et 0, at to 1-taller aldrig ligger side om side, og at ingen gruppe er større
end ni felter. Et givet ciffer behøver ikke være starten på sin gruppe: flere givne 4-taller
kan ende i den samme gruppe, og en gruppe kan sagtens slet ikke indeholde et givet ciffer.

Kraftige streger dukker op mellem felter med forskellige cifre og rundt om enhver gruppe, der
allerede har den rigtige størrelse (eller er for stor). Et ciffer bliver rødt, når dets gruppe
er vokset sig større end cifferet, eller når det er muret inde uden plads til at nå sin
størrelse. Det er det puslespil, Nikoli udgiver som Fillomino.

## Styring

Givne cifre er tegnet med blæk og kan ikke ændres; dine egne cifre er blå. **Løs** udfylder
løsningen.

### Mus og berøring

- **Klik** på et tomt felt for at vælge det, og brug så tasterne på skærmen til at skrive et
  ciffer ind. **⌫** på tasterne tømmer det valgte igen.
- **Træk** hen over flere felter for at vælge dem alle, så ét ciffer udfylder alle de valgte
  felter på én gang.
- Et **højreklik** lægger et felt til det valgte uden at begynde forfra; et højreklik mere på et
  valgt felt tager det ud af det valgte igen.
- **Udfyld** (knappen ved siden af Fortryd) spreder et ciffer: træk fra et felt, der har et,
  hen over felterne omkring det, og de får alle det ciffer, når du slipper — uden brug af
  tasterne. Klik og træk, der starter på et tomt felt, vælger stadig. Tryk på den igen for at
  gå tilbage til at vælge.

### Tastatur (Keyboard)

- Når ét eller flere felter er valgt, **skriv et ciffer** for at sætte det i dem alle. Cifferet
  \`0\` eller **Backspace** tømmer dem igen.
- **Piletasterne** flytter en tastaturmarkør, og et ciffer, du skriver, udfylder feltet under
  den.
- **Space** eller **Enter** slår feltet under markøren til og fra i det valgte, så flere felter
  kan fyldes med ét tastetryk.
- **F** er knappen **Udfyld**.

## Indstillinger

- **Bredde** og **Højde**: gitterets størrelse. Grupper er aldrig større end den længste side
  (eller 9), så små gitre bruger kun små cifre.
`,u=e({default:()=>d}),d=`# Vend

Et gitter af felter, nogle tændte og nogle mørke. Målet er at få dem alle til at lyse på én
gang. Trykker du på et felt, vender det mellem tændt og mørkt, men det vender også nogle af
sine naboer: den lille tegning på hvert felt viser præcis hvilke. Med standardfigurerne
**Kryds** vender hvert tryk feltet selv og dets fire naboer vandret og lodret; med
**Tilfældig** har hvert felt sit eget uregelmæssige mønster, så puslespillet spiller anderledes
hver gang.

Da to tryk på det samme felt ophæver hinanden, og rækkefølgen af tryk aldrig betyder noget, er
en løsning bare et sæt felter, der hver skal have ét tryk.

## Styring

Statuslinjen tæller dine tryk. **Løs** tænder hele brættet og tegner røde omrids om de felter,
den trykkede på for at nå dertil. Bliver du ved med at trykke bagefter, følger de røde omrids
med og viser, hvilke felter der stadig mangler et tryk for at nå tilbage til den færdige
stilling.

### Mus og berøring

- **Klik** på et felt for at trykke på det.

### Tastatur (Keyboard)

- **Piletasterne** flytter en markør rundt på gitteret; **Enter** eller **Space** trykker på
  feltet under markøren.

## Indstillinger

- **Bredde** og **højde** på gitteret, fra 2 op til 10 felter på hver led.
- **Figurtype**: _Kryds_ vender hvert felt sammen med dets naboer vandret og lodret;
  _Tilfældig_ giver hvert felt en tilfældigt vokset figur inden for 3×3-blokken omkring det.
`,f=e({default:()=>p}),p=`# Oversvømmelse

Gitteret er et kludetæppe af tilfældigt farvede felter. Du råder over feltet i øverste venstre
hjørne og alle de felter, der hænger sammen med det gennem en sti af samme farve. Hvert træk
maler hele den sammenhængende plet om i en farve, du vælger, så nabofelter i den farve også
bliver en del af din plet. Bliv ved, indtil hele gitteret har én farve.

Hagen ved det er grænsen for antal træk. Inden du går i gang, løser spillet selv gitteret og
giver dig sit eget antal træk plus et par ekstra; bruger du grænsen op, før gitteret er
ensfarvet, er runden tabt. Du kan stadig fylde videre bagefter for at se gitteret blive
færdigt, men det tæller ikke længere som en sejr.

## Styring

Statuslinjen viser, hvor mange træk du har brugt af grænsen. **Løs** lader løseren gøre
gitteret færdigt for dig; det tæller som autoløst og ikke som din egen sejr.

### Mus og berøring

- **Klik** på et felt med en anden farve end din plet for at male pletten om i den farve. Et
  klik på et felt, der allerede passer, gør ingenting og koster ikke et træk.
- **Tip** spiller løserens næste farve for dig som et almindeligt træk, du kan fortryde. Et
  par tip tager hverken sejren eller dens point fra dig.

### Tastatur (Keyboard)

- **Piletasterne** flytter en markør rundt på gitteret; **Enter** eller **Space** maler pletten
  om i farven under markøren.

## Indstillinger

- **Bredde** og **højde** på gitteret, op til 32 felter på hver led.
- **Farver**: hvor mange farver gitteret bruger, fra 3 til 10. Færre farver giver færre valg og
  et lettere spil.
- **Ekstra træk tilladt**: hvor mange ekstra træk der lægges oven i løserens egen løsning for
  at danne grænsen. Med 0 skal du være mindst lige så effektiv som løseren; den er habil, men
  ikke perfekt, så det kan lade sig gøre at slå den.
`,m=e({default:()=>h}),h=`# Galakser

Gitteret er strøet med prikker, som kan sidde midt i et felt, på en linje mellem to felter
eller i et hjørne, hvor fire mødes. Tegn mure langs gitterlinjerne, så gitteret deles op i
områder, hvor hvert område indeholder præcis én prik, og den prik er områdets symmetricentrum:
drejer du området 180° om prikken, skal det lande præcis oven i sig selv. Hvert eneste felt
skal ende i et område, så intet område må stå uden en prik.

Puslespillene laves tilfældigt og har altid én entydig løsning. Puslespillet er Nikolis “Tentai
Show”, også kendt som Spiral Galaxies.

## Styring

Et område, der er lukket og rigtigt — én prik, i symmetricentrum, ingen løse mure indeni —
bliver skygget. En prik bliver rød, når der løber en mur gennem den, eller når den er den
eneste prik i et lukket område, der ikke er symmetrisk om den; et lukket område helt uden
prikker bliver skraveret. Puslespillet er løst, når alle felter er skyggede. **Løs** tegner
hele løsningen.

### Mus og berøring

- **Klik** på en gitterlinje for at tegne en mur der, eller klik på en mur for at fjerne den.
- **Træk fra en prik** ind i et felt for at efterlade en lille pil, der peger tilbage mod
  prikken, som en påmindelse om at feltet hører til den prikkes galakse.
- **Højreklik og træk** i en pil, der allerede ligger der, for at flytte den. Slip den på sin
  egen prik igen, eller træk den ud af gitteret, for at smide den væk; slipper du den på et
  felt, der allerede har en pil, tager den pilens plads.

### Tastatur (Keyboard)

- **Piletasterne** flytter en markør hen over både felter, linjer og hjørner.
- **Enter** på en linje tegner eller fjerner dens mur; **Enter** på en prik samler en pil op,
  som følger markøren, indtil du trykker **Enter** igen for at slippe den.

## Indstillinger

- **Bredde** og **højde** på gitteret, mindst 3 hver. De faste opsætninger går fra 7×7 til
  15×15.
- **Sværhedsgrad** — _Middel_ kan løses skridt for skridt ud fra det, symmetrireglen tvinger
  frem; på _Ekstrem_ kan du blive nødt til at prøve en antagelse af og se, hvor den fører hen.
`,g=e({default:()=>_}),_=`# Gæt

Computeren har gemt en række farvede pinde bag skjoldet øverst på brættet. Din opgave er at
gengive den præcis, alene ud fra de mærker du får for hvert gæt: en **sort** pind for hver pind
i den rigtige farve på den rigtige plads, og en **hul** pind for hver yderligere pind, hvis
farve findes et andet sted i den skjulte række. Mærkerne fortæller dig _hvor mange_ pinde der
var rigtige, ikke _hvilke_. Find rækken, før du løber tør for gæt, og skjoldet løftes; løber du
tør, løftes det alligevel og viser dig, hvad du gik glip af.

Det er det spil, Hasbro sælger som _Mastermind_: seks farver, fire pinde og ti gæt. Alle
indstillinger kan ændres.

## Styring

**Løs** løfter skjoldet og viser svaret; det afslutter spillet, præcis som hvis du var løbet
tør for gæt.

### Mus og berøring

- **Klik** på en farve i bakken til venstre for at vælge den (ringen viser hvilken), og **klik
  så på en plads** i den aktuelle række for at sætte en pind i den farve. Et klik på en pind i
  et tidligere gæt vælger også dens farve.
- **Træk** en pind fra bakken, fra et tidligere gæt eller fra den aktuelle række hen på en
  plads. Trækker du en pind ud af den aktuelle række og slipper den et andet sted, forsvinder
  den.
- **Højreklik** på en plads for at tømme den.
- Når rækken er fuld, lyser det lille mærkefelt til højre for den op: **klik på det** for at
  aflevere gættet.
- **Midterklik** på en plads for at _holde_ den pind: en holdt pind følger med over i næste gæt
  efter bedømmelsen, så du slipper for at bygge de pinde op igen, du allerede stoler på. Gør
  det igen for at slippe pinden.
- **Behold** (knappen ved siden af Fortryd) gør det samme med et almindeligt klik: mens den
  er slået til, holder eller slipper et klik på en plads i den aktuelle række dens pind i
  stedet for at sætte en farve. Klik på bakken for at skifte farve som sædvanlig; tryk på
  **Behold** igen for at gå tilbage til at sætte pinde.
- **Bogstaver** i pausemenuen skriver et bogstav på hver pind, hvis nogle af farverne ligner
  hinanden for dig, og fjerner dem igen.

### Tastatur (Keyboard)

- **Piletasterne**: op og ned vælger en farve i bakken, venstre og højre flytter en markør
  langs den aktuelle række og, når rækken er fuld, videre ind på mærkefeltet.
- **Enter** eller **Space** sætter den valgte farve i pladsen under markøren, eller afleverer
  gættet, når markøren står på mærkefeltet.
- **Backspace** eller \`D\` tømmer pladsen under markøren.
- \`H\` holder eller slipper pinden under markøren.
- \`K\` er knappen **Behold** og \`L\` knappen **Bogstaver**.

## Indstillinger

- **Farver**: hvor mange forskellige farver den skjulte række vælges fra, fra 2 til 10. Flere
  farver gør rækken sværere at indkredse.
- **Pinde pr. gæt**: længden af den skjulte række.
- **Gæt**: hvor mange forsøg du får.
- **Tillad tomme pladser**: lader dig lade pladser stå tomme i et gæt. En tom plads kan aldrig
  give et match, så det gør det lettere at føle sig frem til farverne. Selve den skjulte række
  har aldrig tomme pladser.
- **Tillad gentagelser**: lader den skjulte række (og dine gæt) bruge den samme farve mere end
  én gang. Slår du det fra, skrumper antallet af mulige rækker betydeligt.
`,v=e({default:()=>y}),y=`# Inerti

Du er en kugle på et gitter spækket med forhindringer, og du vil have fat i hver eneste
ædelsten på brættet. Navnet siger det hele: så snart kuglen begynder at rulle, stopper den
ikke, før noget stopper den. Den triller lige igennem både ædelstene (som den samler op
undervejs) og tomme felter, og den falder først til ro, når det næste felt er en mur, eller
når den lander på en stopklods. Diagonale træk maser sig ind mellem to mure, der kun rører
hinanden i et hjørne. At rulle ind i en mine er dødeligt — også selvom det samme træk lige
har samlet den allersidste ædelsten op.

Hvert puslespil bliver lavet, så alle dets ædelstene kan samles op fra startfeltet, men
intet forhindrer dig i at rulle ud i et hjørne af brættet, hvorfra en ædelsten ikke længere
kan nås. Der er ingen straf for at dø eller sætte sig fast ud over en dødstæller i
statuslinjen: bare fortryd og prøv en anden vej.

## Styring

**Fortryd** efter en mine, så du kan køre videre fra før det fatale træk. **Løs** finder en
rute fra der, hvor du er nu, som samler alle de resterende ædelstene op, og ruller så kuglen
hele vejen for dig; Fortryd tager hele ruten tilbage på én gang.

### Mus og berøring

- **Klik** på et felt, og kuglen sætter af sted i retning af det felt set fra sig selv,
  rundet af til den nærmeste af de otte kompasretninger — diagonaler inklusive. Et klik i
  margenen uden for gitteret virker også, hvilket er praktisk, når kuglen ligger helt ude
  ved en kant.

### Tastatur (Keyboard)

- **Piletaster** ruller kuglen op, ned, til venstre eller til højre.
- **Home**, **Page Up**, **End** og **Page Down** ruller den diagonalt (op-venstre,
  op-højre, ned-venstre, ned-højre). Det numeriske tastatur virker, som det ser ud: 8 er op,
  3 er ned-højre, og så videre; talrækken gør det samme.

## Indstillinger

- Gitterets **bredde** og **højde**. Cirka en femtedel af felterne er mure, en femtedel
  stopklodser, en femtedel miner og en femtedel ædelstene.
`,b=e({default:()=>x}),x=`# Keen

Fyld gitteret med cifre fra 1 op til dets størrelse, så hver række og hver kolonne
indeholder hvert ciffer præcis én gang. Gitteret er desuden delt op i kraftigt optrukne
"bure", der hver har en lille ledetråd i sit øverste venstre felt: et tal og et regnetegn.
Cifrene i buret skal give det tal med netop den regneart:

- \`7+\` betyder, at cifrene i buret lagt sammen giver 7.
- \`12×\` betyder, at de ganget sammen giver 12.
- \`2−\` står altid på et bur med to felter og betyder, at det ene ciffer er 2 større end det
  andet (begge veje gælder).
- \`3÷\` står ligeledes på to felter og betyder, at det ene ciffer er 3 gange det andet.

I modsætning til Solos Killer-tilstand _må_ et bur godt rumme det samme ciffer to gange, så
længe de to udgaver ikke står i samme række eller kolonne. Der er ingen givne cifre;
ledetrådene er alt, hvad du får, og hvert puslespil har præcis én løsning. Det er det
puslespil, der udgives som KenKen.

## Styring

Et ciffer, der optræder to gange i sin række eller kolonne, bliver rødt, og det samme gør
ledetråden i et bur, der er helt udfyldt uden at ramme sit tal. **Løs** udfylder løsningen.

### Mus og berøring

- **Klik** på et felt for at vælge det, og brug så tasterne til at skrive et ciffer ind. Endnu et
  klik på det valgte felt fravælger det.
- **⌫** på tasterne tømmer det valgte felt igen, og **✎** slår **blyantsnoter** til: det, du
  vælger, ryger så ind som en lille note, og det samme ciffer igen visker noten ud.
  Blyantsnoter er kun til at tænke med; udfylder du et rigtigt ciffer, ryger de.
- **Højreklik** på et tomt felt for at vælge det til blyantsnoter med det samme.
- **Noter** i pausemenuen fylder hvert tomt felt med et komplet sæt blyantsnoter.
- **Fremhæv** (forstørrelsesglasset ved siden af Fortryd) fremhæver hvert felt med samme
  ciffer som det felt, du sidst valgte, og viser det ciffer med fed skrift blandt
  blyantsnoterne. Tryk på den igen for at slå den fra.

### Tastatur (Keyboard)

- **Skriv et ciffer** for at udfylde det valgte felt, eller for at notere det der, hvis
  feltet var valgt til blyantsnoter.
- **Space** eller **Backspace** rydder det valgte felt (dets ciffer eller alle dets
  blyantsnoter).
- **Piletaster** flytter en tastaturmarkør, og de cifre, du skriver, ryger ned i feltet
  under den.
- **Enter** skifter markøren mellem almindelig indtastning og blyantsnoter.
- **M** er knappen **Noter** og **L** knappen **Fremhæv**.

## Indstillinger

- **Gitterstørrelse**: fra 3 til 9. Cifre over 9 ville være uhåndterlige, så 9 er grænsen.
- **Sværhedsgrad**: den sværeste slags ræsonnement, puslespillet kræver. _Let_ kræver kun, at du
  regner ud, hvilke cifre der overhovedet kan stå i et bur; _Middel_ kræver, at du holder styr
  på, hvilket felt i buret hvert ciffer kan sidde på; _Svær_ lægger ræsonnement på tværs af bure
  oveni (cifre, som et bur skal placere i en række, kan ikke stå andre steder i rækken) og sæt af
  felter, der ejer et sæt cifre; _Ekspert_ tilføjer tvangskæder; og _Ekstrem_ kan ikke gøres
  færdig uden at gætte og gå tilbage igen. Sværere puslespil tager længere tid at lave, og
  3×3-gitre går aldrig ud over Middel.
- **Kun multiplikation**: hver ledetråd er et produkt, hvilket fjerner de nemme dominoer og
  giver et ret anderledes puslespil.
`,S=e({default:()=>C}),C=`# Tænd lys

Et gitter af hvide og sorte felter. Sæt pærer på de hvide felter, så hvert eneste hvidt felt
er oplyst. En pære lyser sit eget felt op og skinner videre langs sin række og kolonne,
indtil et sort felt eller kanten kommer i vejen. Tre ting skal passe, når du er færdig:

- hvert hvidt felt er oplyst;
- ingen pære bliver oplyst af en anden pære, altså ingen to pærer kan se hinanden langs en
  række eller kolonne;
- et sort felt med et tal har præcis så mange pærer i felterne lige over, under, til venstre
  og til højre for sig. Sorte felter uden tal må have et hvilket som helst antal pærer ved
  siden af sig.

Oplyste felter bades i gult. Pærer, der skinner på hinanden, bliver røde, og det samme gør
et tal, der ikke længere kan opfyldes: det har allerede for mange pærer ved siden af sig,
eller der er ikke længere plads til nok af dem.

## Styring

Puslespillet er færdigt, når hele gitteret gløder, og intet er rødt. **Tip** sætter én enkelt
pære — eller fjerner en, som løsningen ikke har — og overlader resten til dig; puslespillet
fortsætter, og med et par tip er sejren, og pointet, stadig dit. **Løs** sætter pærerne fra
en hel løsning ind og lader de kryds, du selv har tegnet, blive stående.

### Mus og berøring

- **Klik** på et hvidt felt for at sætte en pære der, og igen for at tage den væk.
- **Højreklik** på et hvidt felt for at notere et kryds med blyant, altså "her kan der ikke
  stå en pære"; højreklik igen for at viske det ud. Et felt med kryds tager ikke imod en
  pære, før krydset er væk, og et felt med en pære kan ikke få kryds.
- **Kryds** (krydsknappen ved siden af Fortryd) får et almindeligt klik til at notere eller
  viske et kryds i stedet for en pære — til når du udelukker mange felter på én gang. Tryk
  på den igen for at gå tilbage til pærer.

### Tastatur (Keyboard)

- **Piletaster** flytter en markør rundt i gitteret.
- **Enter** sætter en pære under markøren eller fjerner den, og **Space** (eller **I**) slår
  et kryds til og fra der.
- **X** er knappen **Kryds**.

## Indstillinger

- Gitterets **bredde** og **højde**.
- **% sorte felter**: cirka hvor stor en del af gitteret der er sort. Det er et ønske, ikke
  et løfte: kan der ikke laves et puslespil med den tæthed, bruger generatoren et par sorte
  felter mere.
- **Symmetri**: mønsteret, som de sorte felter følger — ingen, et spejl eller en rotation af
  to halvdele, eller et firdobbelt spejl eller en firdobbelt rotation. Firdobbelt rotation
  kræver et kvadratisk gitter.
- **Sværhedsgrad**: _Let_ falder for ræsonnement ét felt ad gangen om, hvilke felter der skal
  eller ikke kan rumme en pære. _Middel_ kræver, at du vejer sæt af felter op mod hinanden ("en
  af de her tre skal være en pære, og det udelukker den her"). _Svær_ kan kræve, at du prøver en
  pære et sted og følger konsekvenserne, indtil noget går galt. Hvert puslespil har præcis én
  løsning.
`,w=e({default:()=>T}),T=`# Løkker

Et gitter af prikker, hvor nogle af mellemrummene mellem dem rummer et tal. Tegn én enkelt
lukket løkke langs de svage streger mellem prikkerne, sådan at:

- hvert mellemrum med et tal har præcis så mange af sine sider på løkken;
- løkken hverken krydser eller rører sig selv — hver prik har enten to streger eller ingen —
  og der er kun én løkke, uden løse ender eller løsrevne stumper.

Den klassiske udgave bruger kvadrater, men det samme puslespil virker på trekanter,
sekskanter og et dusin mærkeligere fliselægninger, hvor tallene kan komme et godt stykke
over 4.

Streger, der danner en forkert løkke, eller som mødes tre om en prik, bliver røde; et tal
med for mange streger omkring sig, eller med for få mulige sider tilbage, bliver også rødt.
Et tal bliver gråt, så snart det har præcis det rigtige antal streger.

## Styring

**Løs** tegner hele løkken. Puslespillet er færdigt, så snart løkken er hel og alle tal er
opfyldt; det er valgfrit at strege de ubrugte kanter ud.

### Mus og berøring

- **Klik** på en svag kant for at tegne en streg på den; klik på stregen igen for at fjerne
  den.
- **Højreklik** på en kant for at strege den ud og markere, at den helt sikkert ikke er en
  del af løkken; højreklik igen for at fjerne markeringen. Både et klik og et højreklik
  fjerner også en markering, som den anden har lavet.
- **Kryds** (krydsknappen ved siden af Fortryd) får et almindeligt klik til at strege en kant
  ud, eller rydde den, i stedet for at tegne en streg. Tryk på den igen for at gå tilbage til
  at tegne streger.

### Tastatur (Keyboard)

- **Piletaster** flytter en markør fra kant til kant; **Enter** tegner eller fjerner en
  streg på kanten under markøren, og **Space** streger den ud eller rydder den igen.
- **X** er knappen **Kryds**.

## Indstillinger

- Gitterets **bredde** og **højde**, målt i fliselægningens celler. For det kvadratiske
  gitter er det simpelthen antallet af felter på tværs og ned; andre fliselægninger tæller
  deres gentagne enheder, så det faktiske antal flader varierer.
- **Gittertype**: _Kvadrater_, _Trekanter_ og _Bikube_ er de regelmæssige fliselægninger.
  _Snub-kvadrat_, _Cairo_, _Stor-sekskantet_, _Ottekantet_, _Drager_, _Blomst_,
  _Tolvkantet_ og _Stor-tolvkantet_ blander former, og de to _Penrose_-fliselægninger
  gentager sig aldrig.
- **Sværhedsgrad**: _Let_ kræver kun reglerne selv — at tælle stregerne omkring et tal, at huske
  at en prik har to streger eller ingen, og ikke at lukke løkken for tidligt. _Middel_ tilføjer
  ræsonnement om par af kanter, der mødes ved en prik (højst én, eller mindst én, af parret er en
  streg). _Svær_ lader den slags kendsgerninger hoppe videre fra prik til prik, som langs en
  diagonal stribe af 2-taller. _Ekspert_ holder desuden styr på kanter, der vides at være ens
  eller modsatte. Der kræves aldrig gætteri; hvert puslespil har præcis én løsning.
`,E=e({default:()=>D}),D=`# Magneter

Et rektangel er lagt med dominoer, der kun vises som omrids. Hver domino er enten en magnet
— den ene halvdel en \`+\`-pol, den anden en \`−\`-pol — eller en blank uden poler overhovedet.
Tallene rundt om kanten fortæller, hvor mange \`+\`-poler (over kolonnerne og til venstre for
rækkerne) og hvor mange \`−\`-poler (under kolonnerne og til højre for rækkerne) hver linje
rummer; mangler et tal, er der ingen ledetråd for den linje. Udfyld hver domino, så alle
tallene passer, og så to ens poler aldrig ligger side om side: \`+\` må aldrig røre \`+\`, og
\`−\` må aldrig røre \`−\` hen over en dominogrænse. Blanke er neutrale og må ligge ved siden af
hvad som helst.

Ens poler, der rører hinanden, vises med rødt. Et tal bliver rødt, når det ikke længere kan
opfyldes — for mange poler allerede, eller for få og ingen steder tilbage at putte flere —
og gråt, så snart det passer præcis. Puslespillet er færdigt, når hver domino er udfyldt,
hvert tal passer, og intet er rødt.

## Styring

### Mus og berøring

- **Klik** på en tom halvdel af en domino for at gøre den til \`+\`-polen (den anden halvdel
  bliver \`−\`). Klik på den samme halvdel igen for at vende magneten om, og en tredje gang
  for at tømme dominoen. Klikker du på en blank domino, sker der ingenting.
- **Højreklik** på en tom domino for at markere den som blank. Højreklik igen for at
  erstatte den blanke med spørgsmålstegn, altså en note om at dominoen helt sikkert er en
  magnet; et tredje højreklik tømmer den. Højreklikker du på en magnet, sker der ingenting.
- **Blank brik** (den skraverede domino ved siden af Fortryd) får et almindeligt klik til
  at gøre det, et højreklik gør: markere en domino som blank, så spørgsmålstegn, så tom igen.
  Tryk på den igen for at gå tilbage til at placere magneter.
- **Løs** udfylder hele løsningen.

### Tastatur (Keyboard)

- **Piletaster** flytter en markør rundt i gitteret.
- **Enter** skifter halvdelen under markøren mellem \`+\`, \`−\` og tom, præcis som et
  venstreklik gør.
- **Space** skifter dominoen under markøren mellem blank, spørgsmålstegn og tom, præcis som
  et højreklik gør.
- **B** er knappen **Blank brik**.

## Indstillinger

- Gitterets **bredde** og **højde**. Er arealet ulige, bliver ét felt til overs og tegnes
  skraveret; det hører ikke til nogen domino og tæller som neutralt.
- **Sværhedsgrad**: _Let_ kræver kun, at du kigger på én linje eller én domino ad gangen — et
  tal, der allerede passer, et tal, der har brug for hver eneste kandidat der er tilbage, eller
  en domino, hvor ingen af halvdelene kan tage en bestemt pol. _Svær_ kræver desuden, at du
  tænker over hele dominoer, der ligger langs en linje: en domino, der skal være en magnet,
  leverer én pol af hver slags, uanset hvordan den vendes, en linje med kun én blank tilbage kan
  ikke rumme en blank domino på langs, og så videre. Hvert puslespil har præcis én løsning.
- **Færre ledetråde**: alle tal, der ikke er nødvendige for at løse puslespillet på den
  valgte sværhedsgrad, ryger ud, hvilket gør det noget sværere at se, hvor man skal begynde.
`,O=e({default:()=>k}),k=`# Kort

Et kort er delt op i områder. Farv hvert område med en af fire farver, så to områder, der
deler et stykke grænse, aldrig har samme farve. Områder, der kun rører hinanden i et hjørne,
må gerne være ens. Nogle få områder er farvet på forhånd, og de er valgt, så der er præcis
én måde at gøre kortet færdigt på.

To naboområder i samme farve markeres med et rødt \`!\` på grænsen mellem dem.

## Styring

**Løs** farvelægger hele løsningen. Kortet blinker, når hvert område er farvet, og intet er
rødt.

### Mus og berøring

- **Træk** en farve: tryk på et område (eller på en af farveprøverne under kortet) og slip
  på et andet område for at give det den farve. Trækker du fra et tomt område, fra det tomme
  rum omkring kortet eller fra viskelæderet, ryddes det område, du slipper på.
- **Klik på en farveprøve** for at vælge en farve, og **klik** så på områder for at male
  dem; klik på den valgte farveprøve igen for at fravælge den.
- **Højreklik og træk** en farve ind på et tomt område for at notere en lille prik i den
  farve, altså en note om at området _måske_ har den farve. Et område kan bære flere
  blyantsprikker; trækker du den samme farve derind igen, forsvinder prikken. Med en
  farveprøve valgt kan et almindeligt **højreklik** på et tomt område slå prikken til og
  fra.
- **Numre** (i pausemenuen) viser et tal i hvert område — praktisk, når du skal snakke om et
  puslespil med en anden — og skjuler dem igen.

### Tastatur (Keyboard)

- **Piletaster** flytter en markør rundt på kortet; det område, den står i, får omrids.
  Tasterne **1**–**4** farver det område, **Space** rydder det, og **Enter** samler dets
  farve op, så du kan bære den med dig med piletasterne og sætte den af med **Enter** (eller
  som en blyantsprik med **Space**). Trykker du på **Enter** to gange uden at flytte dig,
  ryddes området.
- **L** er knappen **Numre**.

## Indstillinger

- **Bredde** og **højde** på det gitter, kortet er tegnet på, målt i felter.
- **Områder**: hvor mange områder kortet er skåret op i.
- **Sværhedsgrad**: på _Let_ er der altid et område, der kun har én farve tilbage. _Middel_
  tilføjer ræsonnement om par af naboområder, der må deles om de samme to farver. _Svær_ kræver
  kæder af den slags slutninger på tværs af kortet. Alt det kan løses uden at gætte. _Ekstrem_
  lover kun, at løsningen er entydig; du kan blive nødt til at prøve en farve og følge den,
  indtil noget går galt.
`,A=e({default:()=>j}),j=`# Miner

Et gitter af tildækkede felter skjuler et antal miner. Afdæk hvert felt, der _ikke_ rummer
en mine. Hvert felt, du åbner, viser, hvor mange af dets otte naboer der er miner; åbner du
en mine, er spillet tabt.

Det særlige ved denne udgave er, at du aldrig behøver at gætte. Intet er afgjort, før du klikker
første gang: minerne bliver først lagt ud der, og de lægges, så det felt, du klikker på, er
tomt, og så hele gitteret kan regnes ud af ren logik derfra. Føler du dig fastlåst, er der
altid et sikkert felt et sted, som tallene allerede beviser.

Statuslinjen viser, hvor mange flag du har plantet, i forhold til antallet af miner, og uret
starter med dit første klik. Rammer du en mine, afsløres resten af dem, og de flag, der sad
forkert, streges ud; du kan fortryde det fatale klik og spille videre, men dødsfaldet huskes
i statuslinjen.

## Styring

### Mus og berøring

- **Klik** på et tildækket felt for at åbne det. Åbner du et tomt felt (ingen miner ved
  siden af), åbnes dets naboer også, og så videre udad.
- **Højreklik** på et tildækket felt for at plante et flag på en mistænkt mine, og igen for
  at fjerne det. Felter med flag kan ikke åbnes ved et uheld.
- **Klik på et tal**, der allerede har det rigtige antal flag omkring sig, for at åbne alle
  dets øvrige tildækkede naboer på én gang. Et **midterklik** på tallet gør det samme.
- **Tip** åbner ét felt, der er sikkert — eller fjerner et flag, der ikke har nogen mine
  under sig — og overlader resten af gitteret til dig. Med et par tip er sejren, og pointet,
  stadig dit.
- **Løs** afslører hele opstillingen og sætter flag på hver mine. Det tæller ikke som en
  sejr, du selv har vundet.

### Tastatur (Keyboard)

- **Piletaster** flytter en markør rundt i gitteret.
- **Enter** virker som et venstreklik på feltet under markøren: det åbner et tildækket felt
  eller rydder rundt om et tal, hvis flag alle er på plads.
- **Space** planter eller fjerner et flag, ligesom et højreklik gør.

## Indstillinger

- Gitterets **bredde** og **højde**.
- **Miner**: hvor mange miner der skal gemmes. Du må gerne angive en procentdel som \`20%\` i
  stedet for et antal. Meget høje tætheder gør det langsomt at finde gitre, der kan løses.
- **Garantér løsbarhed**: når den er slået til (standard), er opstillingen garanteret løsbar fra
  dit første klik uden gætteri. Slå den fra for helt almindelige tilfældige gitre, som kan
  efterlade dig med en plat eller krone til sidst.
`,M=e({default:()=>N}),N=`# Net

Et netværk af ledninger er lagt hen over et gitter af kvadratiske brikker, og derefter er
hver brik snurret rundt på må og få. Drej brikkerne tilbage, så de alle sammen hænger sammen
i ét netværk: hver ledningsende skal møde en ledning på nabobrikken, og ingen ledning må
blive stående og pege ind i en mur. Det færdige netværk er et træ, så det har ingen lukkede
løkker.

Brikker, der allerede er forbundet til kildebrikken midt i gitteret, tegnes blå som en
hjælp; resten forbliver grå. En ledning, der indgår i en løkke, tegnes rød. Kraftige sorte
streger mellem brikkerne er barrierer: ingen ledning kan krydse dem, hvilket giver dig et
fingerpeg om, hvordan brikkerne på hver side skal sidde. Statuslinjen viser, hvor mange brikker
der har strøm lige nu.

## Styring

### Mus og berøring

- **Klik** på en brik for at dreje den mod uret, **højreklik** for at dreje den med uret.
- **Midterklik** på en brik for at **låse** den, når du er sikker på den. En låst brik er
  skraveret og drejer sig ikke, før endnu et midterklik låser den op. Et højreklik drejer
  brikken i stedet for at låse den, så et midterklik er vejen frem her.
- **Lås** (hængelåsknappen ved siden af Fortryd) får et almindeligt klik til at låse en brik
  eller låse den op i stedet for at dreje den, hvilket er nemmere end et midterklik på en
  pegeplade. Et højreklik drejer stadig brikken med uret. Tryk på den igen for at gå
  tilbage til at dreje.
- **Bland** snurrer hver ulåst brik ud i en frisk tilfældig retning — en luftforandring, når
  et puslespil er gået i stå.
- På et gitter, der går rundt, ruller de fire **pileknapper** udsynet, så brikker på modsatte
  kanter kan komme til at ligge side om side.

### Tastatur (Keyboard)

- **Piletaster** flytter en markør rundt i gitteret.
- **Enter** eller **A** drejer brikken under markøren mod uret, **D** drejer den med uret,
  og **F** drejer den en halv omgang.
- **Space**, **S** eller **L** låser brikken under markøren eller låser den op. Med en mus
  låser **Shift-klik** også en brik, præcis som et midterklik.
- **K** er knappen **Lås** og **J** knappen **Bland**.
- På et gitter, der går rundt, ruller **Shift + piletaster** udsynet (det samme som de fire
  pileknapper), så brikker på modsatte kanter kan ses side om side. **Ctrl + piletaster**
  flytter den kildebrik, som den blå fremhævning breder sig ud fra.

## Indstillinger

- Gitterets **bredde** og **højde** i brikker.
- **Rundtgående kanter**: ledninger må løbe ud over den ene kant af gitteret og fortsætte
  fra den modsatte.
- **Sandsynlighed for barrierer**: et tal fra 0 til 1, der siger, hvor stor en del af de
  ledningsfrie kanter der får en barriere. Barrierer ændrer aldrig ledningernes placering:
  den samme tilfældige startværdi giver altid det samme gitter, så en højere sandsynlighed
  kun giver flere fingerpeg.
- **Garantér entydig løsning**: normalt er puslespillet lavet, så præcis én opstilling af
  brikkerne virker. Slå det fra for hurtigere generering og en enkelt tvetydig plet i ny og
  næ.
`,P=e({default:()=>F}),F=`# Netskub

Hver brik bærer et stykke ledningsnet: et lige stykke, et hjørne, et T-kryds eller en løs
ende med en prik på. Sat rigtigt sammen danner stykkerne ét netværk, der når hver eneste
brik fra strømkilden på den skraverede midterbrik, uden løkker og uden arme, der peger ud i
ingenting. Gitteret er rodet sammen ved at skubbe hele rækker og kolonner, så det er også
den eneste måde at rette op på det: ingen brik kan drejes, kun flyttes.

Brikker, der har strøm lige nu, tegnes blå; resten forbliver grå. Kraftige sorte mure mellem
brikkerne er barrierer. Intet kan forbindes hen over en barriere, så de fortæller dig, hvor
det færdige netværk helt sikkert ikke har nogen forbindelse.

## Styring

### Mus og berøring

- **Klik** på en pil ved siden af en række eller kolonne for at skubbe hele den linje ét
  trin den vej, pilen peger. Den brik, der skubbes ud i den ene ende, kommer ind igen i den
  anden ende af samme linje. **Højreklik** på en pil for at skubbe linjen den anden vej.
- Midterrækken og midterkolonnen har ingen pile: strømkilden flytter sig aldrig.
- **Løs** springer direkte til det færdige netværk, så du kan sammenligne det med dit eget
  forsøg.

### Tastatur (Keyboard)

- **Piletaster** går rundt med en fremhævning i ringen af pile.
- **Enter** skubber den fremhævede linje den vej, dens pil peger, og **Space** skubber den
  baglæns.

## Indstillinger

- Gitterets **bredde** og **højde**.
- **Rundtgående kanter**: når den er slået til, fortsætter højre kant ovre til venstre og
  bunden oppe i toppen, så ledninger (og barrierer) kan krydse gitterets kant. Den stiplede
  ramme viser et gitter, der går rundt; en massiv kraftig ramme er en mur hele vejen rundt.
- **Sandsynlighed for barrierer**: hvor mange af de ubrugte brikkanter der får en barriere, fra 0
  (ingen) til 1 (hver eneste kant, det færdige netværk ikke bruger). Flere barrierer gør
  puslespillet lettere. Barriererne vælges uafhængigt af resten af gitteret, så den samme
  tilfældige startværdi med en højere sandsynlighed for barrierer giver det samme puslespil med
  flere fingerpeg.
- **Antal blandetræk**: lad den stå på 0 for en grundig sammenrodning, eller angiv et tal
  for at rode gitteret sammen med præcis så mange skub. Så er målet at finde dem og køre dem
  baglæns igen; statuslinjen viser målet.
`,I=e({default:()=>L}),L=`# Mønster

Hvert felt i gitteret er i hemmelighed enten sort eller hvidt. Tallene ved siden af hver
række og over hver kolonne fortæller, hvor lange striberne af sorte felter i den linje er,
i rækkefølge, med mindst ét hvidt felt mellem to striber i træk. Farv de sorte felter, så
hver række og hver kolonne stemmer med sine tal. Den slags puslespil kaldes som regel
nonogrammer eller picross.

Billederne her laves tilfældigt, så der er ikke noget motiv at gætte på: alt skal regnes ud
fra tallene. Hvert puslespil er tjekket på forhånd, så det kan løses ved at se på én række
eller kolonne ad gangen — du skal aldrig prøve dig frem.

En linjes tal bliver grå, når de sorte striber i linjen passer med dem, og røde, hvis de
striber, du har lavet, umuligt kan passe med tallene. Puslespillet er løst, når hver række
og hver kolonne stemmer med sine tal; prikkerne er kun til for at hjælpe din hukommelse.

## Styring

### Mus og berøring

- **Klik** på et felt for at farve det sort; klik på et sort felt igen for at rydde det.
- **Højreklik** for at sætte en prik i et felt — det betyder, at feltet vides at være hvidt;
  højreklik på et felt med prik for at rydde det.
- **Træk** for at farve en lige linje af sorte felter på én gang, og **højreklik og træk**
  for at lægge en linje af prikker. Kun felter, der var i samme tilstand som det, du startede
  på, bliver ændret, så en stribe prikker hen over dine sorte felter lader dem være i fred.
- **Midterklik** på et felt for at viske det tilbage til ukendt. Med en mus ryddes et helt
  rektangel, uanset hvad der står i det, når du trækker med musehjulet trykket ned.
- **Viskelæder** (viskelæderknappen ved siden af Fortryd) får venstre knap til at gøre det
  samme: klik på et felt for at viske det ud, eller træk for at rydde et helt rektangel. Tryk
  på den igen for at gå tilbage til at farve sort.
- **Tip** udfylder ét felt — altid et, som en enkelt række eller kolonne afgør helt af sig
  selv — eller retter et felt, der strider mod svaret. Puslespillet fortsætter, og med et
  par tip er sejren, og pointet, stadig dit.
- **Løs** udfylder hele billedet for dig.

### Tastatur (Keyboard)

- **Piletasterne** flytter en markør.
- **Enter** farver sort eller rydder feltet under markøren, og **Space** sætter eller fjerner
  en prik.
- Hold **Ctrl** nede, mens du flytter markøren, for at farve sort undervejs, **Shift** for at
  lægge prikker, eller begge for at rydde.
- Med mus rydder **Shift-klik** felter præcis som et midterklik.
- **E** er knappen **Viskelæder**.

## Indstillinger

- Gitterets **bredde** og **højde**. De faste størrelser går fra 10×10 op til 30×30; større
  gitre tager lidt længere tid at generere.
`,R=e({default:()=>z}),z=`# Perle

Et gitter af felter, hvor nogle rummer en sort eller hvid perle. Tegn én lukket løkke, der
løber fra feltmidte til feltmidte, vandret eller lodret, uden at krydse sig selv eller
forgrene sig. Løkken behøver ikke besøge alle felter, men den skal igennem hver eneste
perle:

- ved en **sort perle** drejer løkken og løber derefter lige igennem begge de felter, der
  ligger ved siden af perlen langs løkken;
- ved en **hvid perle** løber løkken lige igennem og drejer i mindst ét af de to felter, der
  ligger ved siden af perlen langs løkken.

Det er kun de felter, løkken besøger lige før og lige efter en perle, der tæller — ikke alle
de felter, der rører den i gitteret.

En perle, hvis regel allerede er brudt, får en rød glorie. Så snart der findes en lukket
løkke, tegnes alle linjestykker uden for den med rødt, og det samme gør ethvert felt med tre
eller flere linjestykker.

## Styring

**Løs** tegner hele løkken. Puslespillet er løst, når løkken er ét enkelt lukket kredsløb,
og intet er rødt.

### Mus og berøring

- **Klik** på en gitterkant (tæt på grænsen mellem to felter) for at tegne et linjestykke
  hen over den; klik igen for at fjerne det.
- **Træk** gennem en række felter for at tegne en hel stribe linjestykker på én gang. Trækker du
  langs eksisterende linjestykker, forsvinder de; et træk, der starter på eksisterende
  linjestykker og fortsætter ud i tomme felter, sletter først og tegner så. Gå tilbage hen over
  et felt, du allerede har passeret, for at forkorte ruten, før du slipper; gå tilbage til
  feltet, du startede fra, for at lukke løkken.
- **Højreklik** på en gitterkant for at sætte et lille kryds, der betyder “intet linjestykke
  her”; der kan ikke tegnes linjestykker hen over et kryds, før det er fjernet.
  **Højreklik og træk** gennem en række felter for at sætte kryds på hver kant, du
  passerer.
- **Kryds** (krydsknappen ved siden af Fortryd) får et almindeligt klik til at sætte eller
  fjerne et kryds, og et træk til at lægge en hel række af dem: ligesom når du tegner,
  fjerner et træk, der starter på kryds, dem først, og det springer over kanter, der
  allerede har et linjestykke. Tryk på den igen for at gå tilbage til at tegne løkken.

### Tastatur (Keyboard)

- **Piletasterne** flytter en markør. **Ctrl+pil** tegner eller fjerner linjestykket på den
  side af markørens felt, **Shift+pil** sætter eller fjerner et kryds der. **Enter** starter
  et træk med tastaturet fra markørens felt: flyt med piletasterne, og tryk på Enter igen
  for at låse ruten fast, eller **Space** for at opgive den.
- **X** er knappen **Kryds**; når den er slået til, lægger et træk med tastaturet også kryds.

## Indstillinger

- Gitterets **bredde** og **højde** i felter (mindst fem hver).
- **Sværhedsgrad**: På _Let_ løser du puslespillet ved at tænke over hver perle og felterne
  lige omkring den. På _Drilsk_ skal du også opdage, når et linjestykke ville lukke en lille
  løkke for tidligt og efterlade andre perler strandet. (Et 5×5-gitter på Drilsk genereres
  som Let, ligesom i originalen.)
- **Tillad uløselige**: behold alle de perler, løkken kan bære, i stedet for at skære dem
  ned til et minimalt sæt med én entydig løsning. En fejlfindingsindstilling arvet fra
  originalen.
`,B=e({default:()=>V}),V=`# Pinde

Et bræt fuldt af pinde med ét tomt hul, eller nogle få på et tilfældigt bræt. En pind må hoppe vandret eller lodret hen
over en nabopind og lande i det tomme hul lige bagved; pinden, der blev hoppet over,
fjernes. Bliv ved med at hoppe, indtil der kun er én pind tilbage på brættet.

Det er det gamle spil pindesolitaire. **Kryds**-brættet er det velkendte engelske layout,
**Ottekant**-brættet det europæiske (som starter med det tomme hul væk fra midten, fordi
det ikke kan gøres færdigt fra midten), og **Tilfældig** giver sære former, som computeren
har dyrket frem. Tomme områder uden hul er ganske enkelt ikke en del af brættet.

Du kan ikke køre uigenkaldeligt fast: er der ingen hop tilbage, og står der mere end én
pind, er spillet slut, men Fortryd fører dig så langt tilbage, du har lyst til.
Statuslinjen tæller de pinde, der er tilbage, og de træk, du har lavet.

## Styring

### Mus og berøring

- **Træk** en pind, og slip den i et tomt hul præcis to felter væk, på en lige linje hen
  over en anden pind. Ethvert andet slip sætter pinden tilbage.
- Eller **klik** på en pind for at samle den op (den bliver orange, og de huller, den kan
  lande i, markeres), og klik så på det hul, den skal hoppe til. Klikker du på den samme
  pind igen, lægger du den ned igen.

### Tastatur (Keyboard)

- **Piletasterne** flytter en markør rundt på brættet.
- **Enter** eller **Space** på en pind samler den op; en piletast hopper den så i den
  retning, hvis det er et lovligt træk, og **Enter** igen lægger den ned igen.

## Indstillinger

- Brættets **bredde** og **højde**, mindst 4 hver.
- **Brættype**: _Kryds_ og _Ottekant_ er de traditionelle layouts og findes kun i 7×7.
  _Tilfældig_ laver en ny brætform hver gang — altid en, der kan skæres ned til én enkelt
  pind, fordi den er bygget ved at køre hop baglæns fra netop sådan en.
`,H=e({default:()=>U}),U=`# Rækkevidde

Nogle felter i gitteret rummer et tal. Farv felter sorte, så fire ting gælder på én gang:

- intet felt med tal er sort;
- to sorte felter rører aldrig hinanden langs en kant (hjørner er fine);
- de hvide felter danner tilsammen ét sammenhængende område, samlet kant mod kant;
- hvert tal tæller de hvide felter, som dets eget felt kan se: sig selv plus alt i lige
  linje op, ned, til venstre og til højre, indtil et sort felt eller kanten af gitteret er i
  vejen.

Det er Nikolis _Kurodoko_, også kendt som _Kuromasu_ eller _Where is Black Cells_. Et tal,
der allerede ser felter nok, har et sort felt lige efter hver stribe, det kan se; et tal,
der ville se for meget, hvis et enkelt ukendt felt var hvidt, har et sort felt netop der.
Det er aldrig rigtigt at farve et felt, som er den eneste forbindelse mellem to grupper af
hvide felter. Hvert eneste puslespil kan gøres færdigt med den slags ræsonnementer; du
behøver ikke gætte.

Fejl vises med rødt: sorte felter, der rører hinanden, får en rød ramme om gruppen, hvide
felter, der er skåret af fra hovedområdet, får en rød kontur, og et tal bliver rødt, når det
ikke længere kan se felter nok eller allerede med sikkerhed ser for mange. Puslespillet er
løst, når ingen regel er brudt; du behøver ikke sætte prikker i de hvide felter.

## Styring

### Mus og berøring

- **Klik** på et felt for at farve det sort. Klik igen for at gøre det til en prik (et felt,
  du ved er hvidt), og en gang til for at rydde det.
- Et **højreklik** kører den anden vej rundt: prik, så sort, så tomt.
- **Træk** for at farve flere felter på én gang, og **højreklik og træk** for at feje dem
  den anden vej rundt. Kun felter, der startede ligesom det første, bliver ændret, så en
  stribe prikker lader dine sorte felter være i fred.
- **Viskelæder** (viskelæderknappen ved siden af Fortryd) får et klik til at rydde et felt i
  stedet, og et træk til at rydde hvert sort felt og hver prik, det passerer, uanset hvilke
  de er. Tryk på den igen for at gå tilbage til at farve.
- **Tip** udfylder ét felt, som følger af det, der allerede står på brættet — eller retter et
  felt, der strider mod løsningen. Puslespillet kører videre, og et par tip tager hverken
  sejren eller dens point fra dig.
- **Løs** udfylder hele gitteret og sætter prik i hvert hvidt felt.

### Tastatur (Keyboard)

- **Piletasterne** flytter en markør rundt i gitteret.
- **Enter** virker som et venstreklik på feltet under markøren og **Space** som
  et højreklik.
- **E** er knappen **Viskelæder** og **H** knappen **Tip**.

## Indstillinger

- Gitterets **bredde** og **højde**. De faste størrelser går fra 9×6 til 16×11; alt op til
  30×30 kan genereres, men bittesmå gitre på et eller to felter giver ingen fair puslespil.
`,W=e({default:()=>G}),G=`# Rektangler

Nogle felter i gitteret bærer et tal. Skær hele gitteret op i rektangler, så hvert rektangel
rummer præcis ét tal, og det tal er rektanglets areal (bredden gange højden). Et 6-tal
sidder for eksempel i en blok på 1×6, 2×3, 3×2 eller 6×1; hvilken af dem, og hvor tallet
sidder inde i den, må du regne ud fra naboerne.

Puslespillene laves tilfældigt, og som udgangspunkt placeres tallene, så kun én opdeling af
gitteret går op. Det oprindelige puslespil kommer fra det japanske blad Nikoli, hvor det
hedder Shikaku.

## Styring

### Mus og berøring

- **Træk** hen over et område for at tegne et rektangel om det: konturen tegnes, og alle
  streger inde i det fjernes. Trækker du langs en gitterlinje, tegnes netop den linje.
- **Klik** på en gitterlinje for at tilføje eller fjerne netop den kant.
- **Højreklik og træk** hen over et område for at slette stregerne inde i det uden at røre
  konturen. Et **højreklik** på en gitterlinje slår den til og fra præcis som et almindeligt
  klik.
- **Viskelæder** (viskelæderknappen ved siden af Fortryd) får et almindeligt træk til også at
  slette: træk hen over et område for at fjerne stregerne inde i det, eller klik på en
  gitterlinje for at fjerne den. Mens den er slået til, tilføjer et klik aldrig en streg.
  Tryk på den igen for at gå tilbage til at tegne.
- **Løs** laver hele opdelingen for dig.

Mens du trækker, vises konturen af det rektangel, du er ved at tegne, og størrelsen står i
statuslinjen. Et færdigt rektangel i den rigtige størrelse bliver tonet. Et lukket
rektangel, der aldrig kan blive rigtigt, bliver markeret: tallet bliver rødt, hvis
rektanglet har den forkerte størrelse til det, og rektanglet bliver skraveret, hvis det slet
ikke rummer noget tal. Puslespillet er løst, når hvert felt ligger inde i et rigtigt
rektangel.

### Tastatur (Keyboard)

- **Piletasterne** flytter en markør.
- **Enter** begynder at trække et rektangel ud fra markøren; flyt markøren til det modsatte
  hjørne, og tryk på **Enter** igen for at tegne det.
- **Space** gør det samme, men sletter i stedet det, der er inde i rektanglet.
- **E** er knappen **Viskelæder**.

## Indstillinger

- Gitterets **bredde** og **højde**. De faste størrelser går fra 7×7 op til 19×19.
- **Udvidelsesfaktor** — generér et mindre gitter, og stræk det op til den ønskede
  størrelse, så puslespillet får færre og større rektangler. 0 (standarden) betyder ingen
  strækning; 0.5 gør det første gitter to tredjedele af den endelige størrelse i hver
  retning. Store værdier efterlader kun en håndfuld rektangler og gør puslespillet trivielt.
- **Garantér entydig løsning** — normalt slået til. Slår du den fra, placeres tallene hvor som
  helst i deres rektangler, hvilket går hurtigere og kan give puslespil med flere svar;
  enhver gyldig opdeling tæller så som løst.
`,se=e({default:()=>K}),K=`# SameGame

Brættet er fyldt med farvede felter. Find en gruppe på to eller flere felter i samme farve,
der rører hinanden langs siderne, og fjern den; felterne over hullet falder ned, og når en
kolonne er tom, skubber kolonnerne til højre for den sig over og lukker hullet. Ryd hele
brættet for at vinde. Er der felter tilbage, men har ingen to felter, der rører hinanden,
samme farve, kan du ikke gøre mere — fortryd, og prøv en anden rækkefølge.

Store grupper er meget mere værd end små: at fjerne _n_ felter giver (_n_ − 2)² point med
den almindelige pointgivning, så et par giver ingenting, tre felter ét point og ti felter 64.
Statuslinjen viser dine point og, når en gruppe er valgt, hvor mange felter den har, og hvad
den ville give.

Hvert genereret bræt (medmindre du slår indstillingen fra) er bygget, så det _kan_ ryddes
helt — men at finde en rækkefølge, der også giver mange point, er op til dig.

Der er ingen Løs-knap: computeren ved godt, at brættet kan ryddes, men den vil ikke fortælle
dig hvordan.

## Styring

### Mus og berøring

- **Klik** på et felt for at vælge hele den gruppe, det hører til; gruppen tegnes lysere med
  en kraftig kontur. **Klik på den valgte gruppe igen** for at fjerne den. Klikker du et
  andet sted, flytter markeringen sig i stedet.
- **Højreklik** på den valgte gruppe for at fravælge den.

### Tastatur (Keyboard)

- **Piletasterne** flytter en markør rundt på brættet (den fortsætter om på den anden side
  ved kanterne).
- **Enter** vælger gruppen under markøren, og trykker du igen, fjernes gruppen.
- **Space** på den valgte gruppe fravælger den.

## Indstillinger

- Brættets **bredde** og **højde**.
- **Antal farver**, fra 3 til 9 (2 er tilladt, når løsbarhed ikke er garanteret). Flere farver
  betyder mindre grupper og et sværere bræt.
- **Pointsystem**: _(n−2)²_, standarden, eller _(n−1)²_, som også belønner par.
- **Garantér løsbarhed**: når den er slået til, bygges brættet baglæns fra et tomt bræt, så der
  findes mindst én rækkefølge, som rydder det. Slå den fra for et helt tilfældigt bræt, som
  er hurtigere at generere og har tendens til større områder, men måske slet ikke kan
  ryddes.
`,ce=e({default:()=>le}),le=`# Vejskilt

Hvert felt bærer en pil, og nogle få felter bærer tal. Forbind felterne til én enkelt sti
nummereret 1 til N (N er antallet af felter), så hvert felts efterfølger ligger et sted
langs dets pil: feltet med 1 peger mod 2, som peger mod 3, og så videre. En efterfølger må
ligge hvor som helst i pilens retning, ikke kun lige ved siden af. Det sidste felt, der er
mærket med en stjerne, peger ingen steder hen.

Det første og det sidste tal er altid vist, og desuden nok af de andre til at gøre stien
entydig. Hvert puslespil har præcis én løsning, og den kan findes med ren tankevirksomhed.

Fejl vises med rødt: to felter med samme tal, et tal, hvis efterfølger ikke ligger langs
pilen, eller en kæde, der løber forbi sit eget tal. Puslespillet er løst, når tallene 1 til
N løber gennem hvert eneste felt, og intet er rødt.

## Styring

### Mus og berøring

- **Træk** fra et felt til et felt langs dets pil for at gøre det andet til efterfølger for
  det første. **Højreklik og træk** går den anden vej: fra et felt til det felt, der skal
  komme før det.
- Når to forbundne felter rummer et tal, breder tallet sig langs hele kæden og vises med
  blåt. En kæde uden tal endnu får et bogstav med tillæg som mærke (\`a\`, \`a+1\`, \`a+2\`, ...);
  så snart den rører et felt med tal, bliver bogstaverne til tal. Forbinder du en kæde til
  et felt, der allerede er forbundet, erstattes den gamle forbindelse.
- Hvert felt, der stadig mangler en forgænger, viser en lille prik i nederste venstre
  hjørne, og en pil falmer, når dens felt har fået en efterfølger. Så opgaven er altid at
  forbinde en kraftig pil med et felt med prik.
- **Højreklik** på et felt for at fjerne begge dets forbindelser. **Træk** et felt ud af
  brættet for at gøre det samme, eller **højreklik og træk** det ud af brættet for at bryde
  hele dets kæde op.
- **Bryd** (knappen med det brudte led ved siden af Fortryd) får et klik på et felt til at
  bryde hele dets kæde op, hvert eneste led, og at trække et felt ud af brættet gør det
  samme. Træk fra felt til felt forbinder dem stadig. Tryk på den igen for at slå den fra.
- **Løs** udfylder hele stien.

### Tastatur (Keyboard)

- **Piletasterne** flytter en markør.
- **Enter** på et felt starter en forbindelse derfra; flyt markøren til efterfølgeren, og
  tryk på **Enter** igen for at lave forbindelsen (tryk på det samme felt for at fortryde).
- **Space** eller **X** fjerner forbindelserne for feltet under markøren; **Shift + X**
  bryder hele dets kæde op.
- **B** er knappen **Bryd**.

## Indstillinger

- Gitterets **bredde** og **højde**, fra 2 op til 12 felter (2×2 er for lille til at kunne
  fungere).
- **Start og slut i hjørnerne**: når den er slået til, ligger 1 altid i øverste venstre felt
  og N i nederste højre. Ellers placeres begge ender tilfældigt, men de vises stadig begge
  to.
`,ue=e({default:()=>de}),de=`# Singles

Hvert felt i gitteret rummer et tal. Sortlæg nogle af felterne (så deres tal skjules), så
tre ting gælder på én gang:

- intet tal optræder mere end én gang blandt de hvide felter i en række eller kolonne;
- to sorte felter rører aldrig hinanden langs en kant (hjørner er fine);
- de hvide felter danner tilsammen ét sammenhængende område, samlet kant mod kant.

Det er Nikolis _Hitori_. En god åbning er at lede efter to ens tal med ét felt imellem: det
ene af parret skal være sort, så feltet i midten må være hvidt. To ens tal side om side
betyder, at alle andre eksemplarer af det tal i deres linje er sorte.

Fejl vises med rødt: sorte felter, der rører hinanden, får en rød ramme om gruppen, hvide
felter, der er skåret af fra hovedområdet, får en rød kontur, og to felter med ring om, som
deler linje og har det samme tal, tegnes med rødt.

Puslespillet er løst, når ingen regel er brudt; du behøver ikke sætte ring om de hvide.

## Styring

### Mus og berøring

- **Klik** på et felt for at sortlægge det; klik igen for at få det tilbage.
- Et **højreklik** tegner en ring om et tal for at notere, at det med sikkerhed er hvidt;
  højreklik igen for at fjerne ringen. Begge knapper rydder det mærke, feltet allerede har.
- **Løs** udfylder hele gitteret og sætter ring om hvert hvidt felt.

### Tastatur (Keyboard)

- **Piletasterne** flytter en markør rundt i gitteret (den fortsætter om på den anden side
  ved kanterne).
- **Enter** sortlægger feltet under markøren eller får det tilbage, og **Space** sætter
  eller fjerner ringen om det.

## Indstillinger

- Gitterets **bredde** og **højde**, fra 2 op til 20 for genererede puslespil.
- **Sværhedsgrad**: På _Let_ skal du kun bruge de direkte argumenter — et sort felt tvinger
  sine naboer til at være hvide, et tal med ring om tvinger sine tvillinger til at være
  sorte, mønstrene med par-med-mellemrum og par-side-om-side, et hvidt felt med kun én vej
  ud og de små mønstre i hjørnerne. På _Drilsk_ skal du også opdage, når det ville skære det
  hvide område over at sortlægge et felt, og bruge par af par forskudt med ét felt. Hvert
  puslespil har præcis én løsning.
`,fe=e({default:()=>pe}),pe=`# Seksten

Et skydepuslespil uden tomt felt. Hvert felt rummer en nummereret brik, og i stedet for at
skubbe en enkelt brik skubber du en hel række eller kolonne ét trin. Den brik, der skubbes
ud over kanten, kommer straks ind igen i den modsatte ende af samme linje, som om gitteret
var viklet om en doughnut. Sortér brikkerne, så de tæller op fra 1 i øverste venstre hjørne,
fra venstre mod højre og så række for række.

## Styring

### Mus og berøring

- **Klik** på en af pilene langs kanten for at skubbe den række eller kolonne ét trin i
  pilens retning. **Højreklik** på en pil for at skubbe linjen den modsatte vej.
- **Løs** bytter ganske enkelt gitteret ud med det sorterede. Den viser dig ikke vejen
  derhen, men den giver dig et rent bræt at prøve manøvrer af på.

### Tastatur (Keyboard)

- **Piletasterne** flytter en fremhævning rundt i ringen af pile langs kanten.
- **Enter** skubber den fremhævede linje den vej, dens pil peger, og **Space** skubber den
  den anden vej.

## Indstillinger

- Gitterets **bredde** og **højde**. På gitre, hvor begge sider er ulige, kan kun halvdelen
  af alle opstillinger nås, så generatoren deler kun dem ud, der kan.
- **Antal blandetræk**: lad den stå på 0 for en helt tilfældig opstilling, eller sæt et tal
  for at rode det sorterede gitter sammen med præcis så mange enkelte skub. Så går det ud på
  at regne ud, hvilke skub der blev lavet, og fortryde dem på det samme antal træk; jo flere
  blandetræk du beder om, jo større er chancen for, at der findes en kortere løsning.
`,me=e({default:()=>he}),he=`# Skråstreger

Et gitter af tomme felter med indringede tal i nogle af hjørnerne. Tegn én diagonal streg
gennem hvert felt, den ene eller den anden vej, så:

- hvert indringet tal har præcis så mange streger, der rører dets hjørnepunkt (et 4-tal
  sidder midt i et kryds, et 0-tal har alle streger omkring sig hældende væk fra sig);
- stregerne aldrig slutter sig sammen til en lukket løkke.

Et tal, der allerede har for mange streger, eller som ikke længere kan nå nok, bliver rødt,
og det samme gør hver streg, der er en del af en løkke. Puslespillet er løst, når hvert felt
har en streg, og intet er rødt.

## Styring

### Mus og berøring

- **Klik** på et felt for at tegne en \`\\\` i det; klik igen for at gøre den til en \`/\`, og en
  gang til for at rydde feltet.
- Et **højreklik** kører den anden vej rundt: \`/\`, så \`\\\`, så tomt. På den måde kan et felt
  sættes begge veje med én knap alene.
- **Løs** udfylder hele gitteret.

### Tastatur (Keyboard)

- **Piletasterne** flytter en markør rundt i gitteret.
- **Enter** kører feltet under markøren rundt ligesom et venstreklik og **Space** ligesom
  et højreklik.

## Indstillinger

- Gitterets **bredde** og **højde** i felter.
- **Sværhedsgrad**: På _Let_ kan puslespillet løses ét felt ad gangen — et tal, der allerede
  er opfyldt eller har brug for hvert eneste felt, der er tilbage, og felter, hvor den ene
  af de to streger ville lukke en løkke. På _Svær_ skal du også ræsonnere om par af felter,
  der må skråne ens, allerede før du ved hvilken vej, og om områder, som en streg ville
  lukke af fra kanten af gitteret. Der skal aldrig gættes; hvert puslespil har præcis én
  løsning.
`,ge=e({default:()=>_e}),_e=`# Solo

Fyld det kvadratiske gitter med cifre, så hver række, hver kolonne og hver kraftigt
optrukket blok indeholder hvert ciffer præcis én gang. Nogle felter er givet som ledetråde;
resten er dine at regne ud. Det normale 3×3-puslespil er det velkendte sudoku, men blokkene
kan også være rektangler (et 2×3-puslespil har seks 3×2-blokke), og gitteret kan blive helt
op til 16×16, hvor bogstaverne a, b, c… træder i stedet for cifrene over 9.

Tre varianter kan slås til:

- **X**: de to hoveddiagonaler, der er let skraverede, skal også hver især indeholde hvert
  ciffer.
- **Jigsaw**: blokkene er uregelmæssige figurer, der skifter fra puslespil til puslespil.
- **Killer**: der er ingen ledetrådscifre. I stedet er gitteret delt op i stiplede "bure",
  der hver er mærket med summen af cifrene indeni. Intet ciffer må optræde to gange i et
  bur.

Hvert puslespil har præcis én løsning, og den kan altid nås med ren tankekraft på den
sværhedsgrad, du har valgt.

## Styring

Cifre, der støder sammen med et magen til i deres række, kolonne, blok, diagonal eller bur,
vises med rødt, og det samme gør et bur, hvis cifre ikke giver den rigtige sum. **Tip**
skriver ét felt ind — det letteste, der stadig er åbent, eller det første ciffer, der strider
mod svaret — og overlader resten til dig; puslespillet fortsætter, og med et par tip er
sejren, og pointet, stadig dit. **Løs** fylder hele løsningen ud og afslutter puslespillet.

### Mus og berøring

- **Venstreklik** på et tomt felt for at vælge det, og brug så tasterne til at skrive et ciffer
  ind (bogstavtasterne er cifrene over 9). Klikker du på det valgte felt igen, bliver det
  fravalgt.
- **⌫** på tasterne tømmer det valgte felt igen, og **✎** låser blyantsnoter fast, så det,
  du vælger derefter, ryger ind som en lille note i stedet for et svar.
- **Højreklik** på et felt for at vælge det til **blyantsnoter** med det samme. Blyantsnoter
  er der kun for at hjælpe dine tanker på vej; spillet tager sig ikke af dem, og skriver du
  et ciffer ind, forsvinder de.
- **Noter** i pausemenuen fylder hvert tomt felt med et fuldt sæt blyantsnoter — for dem,
  der bedst kan lide at starte med det hele og strege kandidater ud.
- **Fremhæv** (forstørrelsesglasset ved siden af Fortryd) fremhæver hvert felt med samme
  ciffer som det felt, du sidst valgte, de givne cifre medregnet, og viser det ciffer
  med fed skrift blandt blyantsnoterne. Tryk på den igen for at slå den fra.

### Tastatur (Keyboard)

- **Tast et ciffer** (eller et bogstav for cifre over 9) for at fylde det valgte felt ud.
- **Space** eller **Backspace** rydder det valgte felt (dets ciffer eller alle dets
  blyantsnoter).
- **Piletaster** flytter en tastaturmarkør. **Enter** skifter markøren mellem almindelig
  indtastning og blyantsnoter, og de cifre, du taster, ryger ned i feltet under den.
- **M** er knappen **Noter** og **L** knappen **Fremhæv**.

## Indstillinger

- **Kolonner** og **rækker af underblokke**: gitteret er lige så stort som deres produkt, og
  hver blok er lige så bred som antallet af rækker og lige så høj som antallet af kolonner.
  I jigsaw-tilstand er produktet simpelthen gitterets størrelse.
- **X**, **Jigsaw** og **Killer** slår varianterne ovenfor til. Killer-puslespil er
  begrænset til gitre med højst ni cifre.
- **Symmetri**: hvordan mønsteret af ledetråde spejler sig selv. Mere symmetri ser pænere
  ud, men efterlader som regel flere ledetråde end strengt nødvendigt.
- **Sværhedsgrad**: den sværeste slags ræsonnement, puslespillet vil kræve. På _Meget let_ og
  _Let_ er der altid et felt, der kan fyldes ud direkte; på _Middel_ skal du tænke over, hvor et
  ciffer kan ligge på tværs af en blok og en linje; på _Svær_ skal du finde sæt af felter, der
  tilsammen ejer et sæt cifre; _Ekspert_ lægger tvangskæder oveni; og på _Ekstrem_ kan
  puslespillet ikke gøres færdigt uden at gætte og gå tilbage igen. Svære puslespil tager længere
  tid at lave.
`,ve=e({default:()=>ye}),ye=`# Telte

Gitteret er en campingplads: nogle felter rummer træer, resten er bar jord. Slå telte op på
tomme felter, så:

- der er præcis lige så mange telte som træer;
- hvert træ kan parres med sit eget telt på et felt lige ved siden af (over, under, til
  venstre eller til højre — ikke diagonalt). Et telt kan sagtens også komme til at stå ved
  siden af andre træer, men hvert telt hører til ét træ og hvert træ til ét telt;
- ingen to telte rører hinanden, ikke engang i et hjørne;
- tallene langs højre og nederste kant fortæller, hvor mange telte der er i hver række og
  kolonne.

Ledetrådene er kun tallene, så hele puslespillet handler om at regne ud, hvor teltene skal
stå. Alle puslespil her kan løses med ren logik, uden at gætte.

## Styring

Telte, der rører hinanden, vises med rødt og et mærke på den fælles kant eller det fælles
hjørne, og det samme gør enhver gruppe telte med for få træer imellem sig og enhver gruppe
træer, der ikke længere har plads til alle sine telte. Et tal bliver gråt, når dets linje
har det rigtige antal telte, og rødt, når det ikke længere kan opfyldes. **Løs** sætter alle
teltene op for dig.

### Mus og berøring

- **Klik** på et tomt felt for at slå et telt op der; klik på teltet igen for at fjerne det.
- **Højreklik** på et tomt felt for at markere det som græs, altså at du er sikker på, at
  der ikke skal stå et telt; højreklik igen for at rydde det. Både et klik og et højreklik
  rydder et felt, der allerede indeholder noget.
- **Højreklik og træk** langs en række eller kolonne for at gøre hvert tomt felt, du kommer
  forbi, til græs på én gang — smart, når en linje skal gøres færdig, efter at alle dens
  telte er sat. Telte og eksisterende markeringer får lov at være.

### Tastatur (Keyboard)

- **Piletaster** flytter en markør.
- **Enter** slår et telt op under markøren eller fjerner det igen.
- **Space** sætter eller rydder græs under markøren.

## Indstillinger

- **Bredde** og **højde** på gitteret, fra 4 op til 20 felter.
- **Sværhedsgrad**: På _Let_ giver puslespillene efter for optælling og for et blik på, hvad
  hvert træ og telt har brug for. På _Drilsk_ skal du også veje, hvordan de mulige
  placeringer i én linje begrænser naboerne, og tænke over, hvilke felter træerne kan deles
  om.
`,be=e({default:()=>xe}),xe=`# Tårne

Hvert felt i gitteret får et tårn med en højde fra 1 op til gitterets størrelse. Hver række
og hver kolonne skal indeholde hver højde præcis én gang. Tallene rundt om kanten fortæller,
hvor mange tårne du ville se, hvis du kiggede ind i den række eller kolonne fra den side: et
tårn skjuler alle lavere tårne bag sig. En ledetråd, der er lig med gitterets størrelse,
betyder, at højderne stiger hele vejen langs linjen; en ledetråd på 1 betyder, at det
højeste tårn står helt ude ved kanten.

Større og sværere puslespil starter med nogle tårne allerede bygget og udelader nogle af
kantledetrådene. Cifre, der støder sammen med et andet i deres række eller kolonne, og
ledetråde, som de tårne, der er bygget indtil videre, ikke længere kan opfylde, vises med
rødt. Dette puslespil er bedre kendt som Skyscrapers.

## Styring

De givne tårne kan ikke ændres, og **Løs** fylder svaret ud.

### Mus og berøring

- **Venstreklik** på et felt for at vælge det, og brug så tasterne på skærmen til at
  bygge et tårn i den højde. **⌫** på tasterne tømmer feltet igen.
- **✎** på tasterne låser **blyantsnoter** fast: det, du så vælger, ryger ind som en lille
  note, feltet bliver ved med at være valgt, så du kan tilføje flere, og det samme ciffer
  igen visker en note ud. Skriver du et rigtigt ciffer ind, tørres blyantsnoterne i feltet
  væk.
- **Højreklik** på et felt for at vælge det til blyantsnoter med det samme.
- **Noter** i pausemenuen fylder hvert tomt felt med et fuldt sæt blyantsnoter.
- **Fremhæv** (forstørrelsesglasset ved siden af Fortryd) fremhæver hvert felt med samme
  højde som det felt, du sidst valgte, og viser den højde med fed skrift blandt
  blyantsnoterne. Tryk på den igen for at slå den fra.

### Tastatur (Keyboard)

- **Tast et ciffer** for at bygge et tårn i den højde i det valgte felt. **Space** eller
  **Backspace** rydder det.
- **Piletaster** flytter en tastaturmarkør. **Enter** skifter den mellem cifre og
  blyantsnoter; cifre, du taster, ryger ind i det fremhævede felt, og markøren bliver
  stående.
- **M** er knappen **Noter** og **L** knappen **Fremhæv**.

## Indstillinger

- **Gitterstørrelse** — fra 3 til 9. Tårne skrives som enkelte cifre, og derfor stopper det
  ved 9.
- **Sværhedsgrad** — På Let rækker de direkte følger af hver ledetråd og af række- og
  kolonnereglerne. På Svær skal du overveje enhver opstilling, en ledetråd tillader, og få øje på
  sæt af felter, der deles om nogle få kandidater. Ekspert lægger sværere sæt-ræsonnement og
  tvangskæder oveni, og på Ekstrem kan puslespillet ikke gøres færdigt uden at prøve sig lidt
  frem, selvom løsningen stadig er entydig.
`,Se=e({default:()=>Ce}),Ce=`# Spor

En jernbane kommer ind i gitteret fra venstre og forlader det forneden; begge ender er vist
som skinner, der løber ud af brættet. Færdiggør sporet mellem dem. Sporet er én
sammenhængende rute uden forgreninger, løkker eller krydsninger, bygget udelukkende af lige
stykker og kvartsvingskurver, så hvert felt, det besøger, har præcis to skinner ud af sig.
Nogle få stykker er allerede lagt på skraverede felter og kan ikke ændres. Tallet over hver
kolonne og ved siden af hver række siger, hvor mange felter i den linje det færdige spor
løber igennem.

Tal bliver grå, når deres linje har det rigtige antal sporfelter, og røde, når en linje ikke
længere kan gå op: for mange sporfelter, eller så mange overstregede felter, at der ikke er
plads nok tilbage. Felter, hvor skinnerne mødes forkert (tre skinner ind i ét felt, en
lukket løkke eller spor til overs, når indgang og udgang er forbundet), tegnes også med
rødt.

## Styring

**Løs** lægger hele sporet og fjerner de af dine markeringer, der modsiger det. Puslespillet
er færdigt, når ét ubrudt spor forbinder indgangen med udgangen, og alle tal er opfyldt.

### Mus og berøring

- **Træk** gennem en stribe nabofelter for at lægge skinner mellem dem. Vejen må gerne dreje
  om hjørner; et træk, der kun følger skinner, som allerede ligger der, tager dem op igen i
  stedet.
- **Klik** tæt på en af et felts sider for at tilføje eller fjerne en enkelt skinne gennem
  den side. Klik midt i et felt for at markere det som "her går sporet igennem" uden at sige
  gennem hvilke sider — praktisk, når du tæller — og klik igen for at fjerne markeringen.
- **Højreklik** tæt på en side for at tegne en kort streg, der betyder "ingen skinne her";
  højreklik midt i et felt for at strege hele feltet ud. **Højreklik og træk** langs en
  række eller kolonne for at strege en stribe felter ud (eller fjerne stregerne) på én gang.
- **Viskelæder** (viskelæderknappen ved siden af Fortryd) får et klik eller et træk til at
  viske felter helt rene: hvert felt, det rører, mister sine skinner, sine "ingen
  skinne"-streger og sin markering eller sit kryds. De givne stykker bliver liggende. Tryk på
  den igen for at gå tilbage til at lægge spor.

### Tastatur (Keyboard)

- **Piletaster** flytter en markør, der standser både på felter og på siderne mellem dem.
  **Enter** virker som et klik ved markøren og **Space** som et højreklik.
- **E** er knappen **Viskelæder**.

## Indstillinger

- **Bredde** og **højde** på gitteret, mindst fire af hver.
- **Sværhedsgrad**: På _Let_ giver puslespillene efter, hvis du kigger på ét felt eller én
  linje ad gangen. På _Drilsk_ skal du også tænke over, hvor en linjes sidste sporfelt
  overhovedet kan ligge, og over løse skinneender, der skal føres videre langs eller på
  tværs af en linje. Hvert puslespil har præcis én løsning.
- **Forbyd 1-ledetråde ved siden af hinanden**: når det er slået til (standard), har ingen
  to nabolinjer begge tallet 1, og det har hverken indgangskolonnen eller udgangsrækken. Det
  holder sporet fra at løbe i lange kedelige lige stræk langs kanten.
`,we=e({default:()=>Te}),Te=`# Drej

Et gitter af nummererede brikker er blevet rodet sammen ved at dreje kvadratiske blokke af
brikker. Drej dem tilbage, indtil tallene står i rækkefølge fra venstre mod højre og oppefra
og ned. I grundspillet drejer hvert træk en 2×2-blok en kvart omgang om det punkt, hvor dens
fire brikker mødes; med større indstillinger drejer man 3×3-blokke eller endnu større.

I varianterne **med retning** bærer hver brik en trekant, og puslespillet tæller først
som færdigt, når alle trekanter peger opad. I varianten **kun rækker** bærer brikkerne i
stedet deres rækkenummer, så alle 1-tallerne bare skal ned i første række, 2-tallerne i
anden og så videre.

## Styring

**Løs** sætter hver eneste brik direkte på plads igen. Den viser dig ikke vejen derhen, men
det er en hurtig måde at få et rent gitter, hvis du vil øve en række drejninger.

### Mus og berøring

- **Klik** midt i en blok for at dreje den mod uret; **højreklik** for at dreje den med uret. For
  2×2-blokke er midten et hjørne, hvor fire brikker mødes; for ulige blokstørrelser er det den
  midterste brik. Et klik ude mod kanten af gitteret drejer den blok, der ligger op ad den kant.
- **Med uret** (knappen med den drejende pil ved siden af Fortryd) bytter de to om: et klik
  drejer blokke med uret og et højreklik mod uret. Tryk på den igen for at gå tilbage.

### Tastatur (Keyboard)

- **Piletaster** flytter en ramme på størrelse med én blok rundt i gitteret. **Enter** drejer
  den markerede blok mod uret, og **Space** drejer den med uret.
- **A**, **B**, **C** og **D** drejer hjørneblokkene øverst til venstre, øverst til højre,
  nederst til venstre og nederst til højre mod uret; hold **Shift** nede for med uret.
- **T** er knappen **Med uret**.

## Indstillinger

- **Bredde** og **højde** på gitteret.
- **Størrelse på roterende blok**: siden i den kvadratiske blok, som ét træk drejer (mindst 2 og
  ikke større end gitteret).
- **Ét tal pr. række**: en lettere variant, hvor alle brikker i en række har det samme tal.
- **Retningen tæller**: brikkerne får trekanter og skal alle ende med at pege opad.
- **Antal blandetræk**: lad den stå på 0 for en grundig blanding, eller giv et lille tal for
  at få et gitter, der er præcis så mange drejninger fra at være løst. Så går din opgave ud
  på at finde de drejninger og fortryde dem, så en blanding på tre træk fortjener et
  svar på tre træk (selvom der somme tider findes en kortere vej).
`,Ee=e({default:()=>De}),De=`# Udøde

Gitteret er et hjemsøgt spejlkabinet. Hvert felt uden spejl skjuler et af tre monstre: et
**spøgelse**, en **vampyr** eller en **zombie**. Oversigten over gitteret fortæller, hvor
mange der mangler at blive placeret af hver slags, og tallet ved hver kantposition siger,
hvor mange monstre du ville se, hvis du kiggede ind i gitteret derfra og fulgte synslinjen,
mens den kastes videre af de skrå spejle.

Spejle ændrer, hvad du kan se. En vampyr har intet spejlbillede, så den tælles kun, så længe
din synslinje endnu ikke har mødt et spejl. Et spøgelse er det modsatte: usynligt, når man
ser direkte på det, dukker det først op efter en spejling. En zombie ses altid. Krydser en
synslinje det samme felt to gange, tælles monsteret der hver gang, det er synligt. Placér
alle monstrene, så hvert kanttal og hver optælling passer.

## Styring

Et kanttal bliver gråt, når der er fuldt styr på dets synslinje, og rødt, når det ikke
længere kan opfyldes; et tal i oversigten bliver rødt, når der er placeret for mange af det
monster. Blyantsnoter er kun til dine egne notater og påvirker aldrig puslespillet.

### Mus og berøring

- **Venstreklik** på et tomt felt for at skifte det gennem spøgelse, vampyr, zombie og
  tilbage til tomt. Feltet bliver ved med at være fremhævet.
- Tasterne på skærmen vælger et monster til det fremhævede felt direkte, uden at du skal
  skifte hen til det; **⌫** tømmer feltet, blyantsnoter og det hele.
- **✎** på tasterne låser **blyantsnoter** fast: det monster, du vælger, bliver så føjet til
  (eller taget ud af) feltets liste over kandidater.
- **Højreklik** på et felt for at tilføje blyantsnoter én kandidat ad gangen (spøgelse, så
  vampyr, så zombie, så tomt).
- **Sigtelinjer** (øjet ved siden af Fortryd) tegner sigtelinjerne gennem det fremhævede
  felt, knækket ved spejlene, og sætter ring om kanttallene i begge ender af hver. Mens den
  er slået til, følger et klik på et kanttal det tals egen linje; klik på det igen for at
  slippe det. Tryk på **Sigtelinjer** igen for at slå den fra. Mens den er slået til,
  fremhæver et klik på et felt, der ikke er fremhævet, kun feltet, så du kan følge et tomt
  felt uden at fylde det; klik på det igen for at skifte det som sædvanligt.

### Tastatur (Keyboard)

- Piletaster flytter fremhævningen. Enter skifter det fremhævede monster; Space skifter dets
  blyantsnoter.
- \`G\`, \`V\`, \`Z\` (eller \`1\`, \`2\`, \`3\`) sætter det monster i det fremhævede felt eller slår
  dets blyantsnote til og fra, når fremhævningen er i blyanttilstand. \`E\`, \`0\`, Backspace
  eller Delete rydder feltet, blyantsnoter og det hele.
- \`S\` er knappen **Sigtelinjer**.

## Indstillinger

- **Bredde**, **Højde** — gitterets størrelse, fra 3×3 op til 54 felter i alt.
- **Sværhedsgrad** — på _Let_ falder puslespillene for optælling langs én synslinje ad
  gangen; på _Normal_ skal du veje de kombinationer, en hel bane tillader; på _Drilsk_ kan
  puslespillet ikke gøres færdigt uden at afprøve et gæt.
`,Oe=e({default:()=>ke}),ke=`# Ulighed

Fyld gitteret, så hver række og hver kolonne indeholder hvert ciffer fra 1 op til gitterets
størrelse præcis én gang — et latinsk kvadrat — samtidig med at du respekterer de tegn, der
er tegnet mellem nabofelter.

I tilstanden **Ulighed** er tegnene større end-tegn: den åbne side af et \`>\` vender mod det
største ciffer, og spidsen vender mod det mindste. Ikke alle nabopar har et tegn, og jo
sværere puslespillet er, jo færre tegn er der.

I tilstanden **Naboer** er tegnene korte streger, der betyder, at de to cifre adskiller sig
med præcis én (som 3 og 4). Her vises hver eneste streg altid, så **fraværet** af en streg
mellem to felter også er en ledetråd: de to cifre følger helt sikkert ikke efter hinanden.

Puslespillet optræder i aviser under navnet Futoshiki.

## Styring

Cifre, der bryder en regel — en dublet i en række eller kolonne, eller et tegn, der ikke
holder — vises med rødt, og det gør det tegn, der bliver brudt, også. Puslespillet er
færdigt, når hvert felt er fyldt ud, og intet er rødt.

### Mus og berøring

- **Venstreklik** på et felt for at vælge det, og brug så tasterne på skærmen til at
  skrive et ciffer ind. **⌫** på tasterne rydder det valgte felt igen. Klikker du på det
  valgte felt en gang til, bliver det fravalgt.
- **✎** på tasterne låser **blyantsnoter** fast: det, du vælger, bliver så føjet til (eller
  fjernet fra) en lille liste over muligheder i feltet i stedet for at svare på det. Fylder
  du et felt ud, tørres dets blyantsnoter væk.
- **Højreklik** på et felt for at vælge det til blyantsnoter med det samme.
- **Noter** i pausemenuen fylder hvert tomt felt med alle mulige blyantsnoter, klar til at
  du kan strege ud; **Tip** (pæren ved siden af Fortryd) gør det samme, men udelader dem,
  som let ræsonnement allerede udelukker.
- **Fremhæv** (forstørrelsesglasset ved siden af Fortryd) fremhæver hvert felt med samme
  ciffer som det felt, du sidst valgte, de givne cifre medregnet, og viser det ciffer
  med fed skrift blandt blyantsnoterne. Tryk på den igen for at slå den fra.

### Tastatur (Keyboard)

- **Tast et ciffer** for at fylde det valgte felt ud; \`0\`, Space eller Backspace rydder det.
- Piletasterne flytter en markør rundt i gitteret; Enter skifter markøren mellem at skrive
  cifre og at lave blyantsnoter.
- \`M\` er knappen **Noter**, \`H\` er **Tip**, og \`L\` er **Fremhæv**.

## Indstillinger

- **Tilstand** — Ulighed (større end-tegn) eller Naboer (streger mellem cifre, der følger
  efter hinanden).
- **Størrelse** — antallet af rækker og kolonner, fra 3 til 9.
- **Sværhedsgrad** — hvor meget ræsonnement puslespillet kræver. **Meget let** får aldrig brug for
  tegnene: i tilstanden Ulighed er der slet ingen, og det er rene latinske kvadrater, og i
  tilstanden Naboer tegnes stregerne, men de givne cifre afgør det hele alene. På **Let** rækker den
  direkte betydning af hvert tegn; på **Middel** skal du se sæt af felter under ét; på **Svær**
  kommer positionsbaseret sæt-ræsonnement og tvangskæder til; **Ekstrem** (som findes i dialogen
  Tilpas…) kan kræve lidt prøven sig frem, men løsningen er stadig entydig.
`,Ae=e({default:()=>je}),je=`# Uregerlig

Farv hvert felt i gitteret enten sort eller hvidt. Nogle felter er givet som ledetråde og
kan ikke ændres; resten starter grå og er dine at fylde ud. Når du er færdig, skal tre ting
passe:

- hver række indeholder lige så mange sorte felter som hvide;
- hver kolonne indeholder lige så mange sorte felter som hvide;
- ingen tre felter i træk i en række eller kolonne har samme farve.

Fejl dukker op med rødt: en stribe på tre eller flere ens felter får en rød ramme, og et
felt får et rødt **!**, når dets række eller kolonne allerede har for mange af den farve. I
den valgfrie variant "entydige rækker og kolonner" må ingen to rækker følge det samme mønster
(og ingen to kolonner); linjer, der er ens, streges over med rødt.

## Styring

Ledetrådsfelter — dem, der er tegnet med en lille ramme indeni — kan ikke ændres. **Løs**
fylder hele gitteret ud. Puslespillet er færdigt, når hvert felt er farvet, og intet vises
med rødt.

### Mus og berøring

- **Klik** på et gråt felt for at gøre det sort; klik igen for hvidt og en gang mere for at
  rydde det.
- Et **højreklik** skifter den anden vej: hvidt, så sort, så tomt.
- **Midterklik** rydder et felt direkte.
- **Viskelæder** (viskelæderknappen ved siden af Fortryd) får et klik til at rydde et felt i
  stedet for at farve det. Tryk på den igen for at gå tilbage til at farve.

### Tastatur (Keyboard)

- **Piletaster** flytter en markør rundt i gitteret.
- **Enter** skifter feltet under markøren ligesom et klik, og **Space** ligesom
  et højreklik.
- **1** sætter sort, **0** (eller **2**) sætter hvidt, og **Backspace** rydder.
- **E** er knappen **Viskelæder**.

## Indstillinger

- **Bredde** og **højde** på gitteret. Begge skal være lige tal og mindst 6.
- **Entydige rækker og kolonner**: når det er slået til, må ingen to rækker være ens, og ingen
  to kolonner være ens (en række må stadig gerne matche en kolonne). Meget høje eller meget
  brede gitre bliver afvist i denne tilstand, fordi der ikke er nok forskellige linjer at
  tage af.
- **Sværhedsgrad**: På _Let_ skal der aldrig mere end to umiddelbare argumenter til — to ens
  felter tvinger feltet ved siden af eller imellem dem over i den anden farve, og en linje,
  der allerede har sin andel af den ene farve, får den anden farve alle andre steder. På
  _Normal_ skal du også tænke over, hvor det sidste felt af en farve stadig kan ligge i en
  linje uden at lave en stribe på tre. Hvert puslespil har præcis én løsning.
`,Me=e({default:()=>Ne}),Ne=`# Optrævl

En håndfuld punkter er forbundet med rette linjer, og linjerne ligger i ét stort virvar.
Flyt rundt på punkterne, indtil ingen to linjer krydser hinanden. Alle puslespil kan trævles
op: computeren har bygget grafen ud fra en opstilling uden krydsninger og derefter blandet
punkterne ud på en cirkel.

Linjer, der lige nu krydser en anden linje, tegnes med rødt, så virvaret skrumper synligt,
mens du arbejder; puslespillet er løst, når der ikke er mere rødt tilbage. Løs skubber hvert
punkt hen i en opstilling, som computeren ved fungerer.

## Styring

Fortryd tager ethvert træk tilbage, også Løs.

### Mus og berøring

- **Træk** i et punkt og slip det, hvor du vil have det. Det punkt, du tager fat i, bliver
  orange, og dets naboer bliver blå. Slipper du et punkt ude i margenen, lander det på
  kanten af brættet; slipper du helt uden for tegnefladen, bliver trækket annulleret.
- **Fanggitter** (gitterknappen ved siden af Fortryd) slår et fanggitter til og fra: punkter,
  du slipper, lander så midt i de gitterfelter, der er markeret med svage prikker — det er
  også sådan, løsningen er lagt ud. Knappen lyser, mens gitteret er slået til.

### Tastatur (Keyboard)

- **Piletaster** flytter en markør fra punkt til punkt i den retning. **Enter** eller
  **Space** samler punktet op; piletasterne bærer det så videre (en ottendedel felt pr.
  tryk, et helt felt med Shift, et enkelt skridt med Ctrl), og **Enter** eller **Space**
  sætter det ned igen.
- \`G\` er knappen **Fanggitter**.

## Indstillinger

- **Antal punkter**: hvor mange punkter grafen har, mindst 4. Flere punkter betyder flere
  linjer og et værre virvar. Brættet vokser med antallet af punkter, så der altid er plads
  til at sprede dem ud.
`,Pe=e({$dir:()=>`ltr`,$locale:()=>`da`,$name:()=>q,default:()=>Fe,games:()=>Q,messages:()=>X,status:()=>Z,touchPhrases:()=>Y,tutorials:()=>$,ui:()=>J}),q=`Dansk`,J=JSON.parse(`{"appName":"Puzzlebox","menu":{"title":"Puzzlebox","tagline":"{n} håndtegnede logikpuslespil. Vælg et, og gå i gang.","lockedNote":"Hvert puslespil, du løser selv, giver et point. Brug dine point her til at åbne nye puslespil.","language":"Sprog","stat":{"credits":{"one":"★ {n} point","other":"★ {n} point"},"unlocked":"{n} af {total} låst op","solved":"{n} løst","tight":{"credits":"★ {n}","unlocked":"{n}/{total}","solved":"✓ {n}","achievements":"{n}/{total}"},"achievements":"{n} af {total} præstationer"},"hint":{"allOpen":"Alt er åbent.","complete":"Du har låst op for hele samlingen!","spend":{"one":"Brug et point herunder til at låse et puslespil op.","other":"Brug dine point herunder til at låse puslespil op."},"earn":"Løs et puslespil selv, så tjener du et point."},"card":{"label":"{name}: {description}","labelLocked":"{name}: {description} (låst)","solvedTag":"✓ løst ×{n}","unlock":"Lås op · 1 point","unlocked":"{name} er låst op!","labelAlias":"{name} (også kendt som {alias}): {description}","labelLockedAlias":"{name} (også kendt som {alias}): {description} (låst)"},"noCredit":"Løs et puslespil selv for at tjene et point, og kom så tilbage og lås dette op.","surprise":"Overrask mig: åbn en tilfældig gåde","search":{"placeholder":"Søg i puslespil","label":"Søg i puslespillene efter navn","clear":"Ryd søgningen","empty":"Der er intet puslespil, der hedder “{q}”. Prøv et andet navn."},"privacy":{"note":"Puzzlebox tæller, hvordan puslespillene bliver spillet — aldrig hvem der spiller dem — for at gøre dem bedre."},"continue":"Fortsæt","continueLabel":"Fortsæt {name}","spend":"Brug"},"notFound":{"title":"Sådan et puslespil findes ikke","body":"Vi har ikke noget puslespil, der hedder “{slug}”.","back":"Tilbage til alle puslespil"},"locked":"{name} er stadig låst. Tjen et point ved at løse et puslespil, og lås det så op.","pageTitle":"{name} · Puzzlebox","topbar":{"back":"Alle puslespil","help":"Hjælp","creditsTitle":"Point låser nye puslespil op. Løs et puslespil selv, så tjener du et.","boardLabel":"Spillebræt til {name}"},"toolbar":{"type":"Type","custom":"Tilpas…","new":"Nyt","newTitle":"Nyt spil (N)","restart":"Genstart","restartTitle":"Start dette puslespil forfra","undo":"Fortryd","undoTitle":"Fortryd (U, Ctrl+Z)","redo":"Gentag","redoTitle":"Gentag (R, Ctrl+Y)","solve":"Løs","solveTitle":"Vis løsningen (Ctrl+S)","gameId":"Del","gameIdTitle":"Del dette puslespil, eller spil et, nogen har sendt dig","keypad":"Taster","keypadTitle":"Vis taster på skærmen","zoomOut":"−","zoomOutTitle":"Mindre","zoomIn":"+","zoomInTitle":"Større","tapPlace":"Tryk: placér","tapMark":"Tryk: markér","tapTitle":"Hvad et almindeligt tryk gør","tapPlaceTitle":"Tryk placerer; langt tryk markerer. Tryk for at bytte om.","tapMarkTitle":"Tryk markerer; langt tryk placerer. Tryk for at bytte om.","hint":"Tip","hintTitle":"Afslør ét felt og spil videre. Op til {n} tip giver stadig point.","more":"Mere","pause":"Pause","pauseTitle":"Pausemenu (Esc)"},"pause":{"title":"På pause","resume":"Fortsæt"},"pager":{"label":"Sider","prev":"Forrige side","next":"Næste side","page":"Side {n} af {total}"},"badge":{"won":"Løst!","lost":"Spillet er slut"},"keypad":{"label":"Taster","clear":"Ryd","clearTitle":"Ryd det valgte felt (Backspace)","pencil":"Blyantsnoter","pencilOnTitle":"Tasterne skriver blyantsnoter. Tryk for at skrive svar igen.","pencilOffTitle":"Slå til, så de næste taster skriver blyantsnoter"},"drawer":{"title":"Sådan spiller du {name}","close":"Luk","replay":"▶ Se vejledningen igen","achievements":"Præstationer ({n}/{total})"},"dialog":{"ok":"OK","cancel":"Annullér","customTitle":"{name}: tilpasset","gameIdTitle":"Del dette puslespil","byDescription":"Som beskrivelse","bySeed":"Som tilfældig startværdi","enterLabel":"Spil et bestemt puslespil: indsæt en kode","play":"Spil","copy":"Kopiér","copied":"Kopieret","link":"Link","linkTitle":"Kopiér et link, der åbner præcis dette puslespil","linkPrompt":"Link til dette puslespil","shareLead":"Send præcis dette puslespil til en anden.","copyLink":"Kopiér link","linkCopied":"Link kopieret","codes":"Puslespilskoder","hintAd":{"title":"Et tip mere?","body":"Du har brugt dine {n} gratis tip. Tager du et til, giver dette puslespil ikke point — medmindre du ser en kort reklame og beholder pointet.","watch":"Se en reklame, behold pointet","anyway":"Tag tippet alligevel"},"badCode":"Den kode åbner ikke et {name}-puslespil. Tjek, at den er kopieret helt."},"toast":{"creditEarned":"+1 point","tutorialComplete":"Vejledningen er slut. Her er et friskt puslespil; løs det selv, så tjener du et point.","tutorialCompleteBack":"Vejledningen er slut. Tilbage til dit puslespil.","tutorialSkipped":"Vejledningen er sprunget over. Du kan altid se den igen under Hjælp.","tapModeMark":"Tryk for at markere. Langt tryk giver hovedhandlingen.","tapModePlace":"Tryk giver hovedhandlingen. Langt tryk markerer.","touchHint":"Tryk for at spille, langt tryk giver den anden handling. Den første runde knap bytter om på de to.","hintNone":"Der er ikke mere at afsløre på dette bræt.","hintNoCredit":"Det er mere end {n} tip, så dette puslespil giver ikke point — men brættet er stadig dit at gøre færdigt.","hintAdFailed":"Der var ingen reklame tilgængelig, så intet er ændret — tippet står der stadig, hvis du vil have det.","stuck":"Sidder du fast? Et tip afslører ét felt, og opgaven giver stadig sit point."},"tutorial":{"label":"Vejledning til {name}","step":"Trin {n} af {total}","next":"Næste","done":"Færdig","skipStep":"Spring trin over","skipTutorial":"Spring vejledning over","nice":"Flot!","offScript":"Ikke den: trækket er sat tilbage, så trinene stadig passer til brættet. Prøv det, dette trin beder om.","offScriptRead":"Det er sat tilbage, så trinene stadig passer til brættet. Læs dette trin først.","pointer":{"drag":"træk","rightClick":"højreklik","rightDrag":"højreklik og træk","middleClick":"midterklik","longPress":"langt tryk","longPressDrag":"langt tryk og træk","twoFingerTap":"tryk med to fingre"}},"splash":{"tagline":"Håndtegnede puslespil, klar til at spille","skip":"Spring over"},"help":{"keypad":{"heading":"Tasterne","introTouch":"Tasterne på skærmen skriver for dig","introPointer":"**Taster** i værktøjslinjen viser taster på skærmen, som skriver for dig","select":": vælg først et felt på brættet, og tryk så på en tast.","clear":"- **⌫** tømmer det valgte felt igen.","pencil":"- **✎** låser blyantsnoter fast, så tasterne skriver små noter i stedet for\\n  svar. Tryk igen for at skrive svar."}},"achievements":{"title":"Præstationer","summary":"{n} af {total} opnået","unlocked":"Præstation låst op","secret":{"name":"Hemmelig præstation","description":"Bliv ved med at spille for at opdage den."},"earnedOn":"Opnået {date}","progress":"{n} af {goal}","collection":"Samlingen","tier":{"bronze":"Bronze","silver":"Sølv","gold":"Guld"},"meta":{"first-solve":{"name":"De første skridt","description":"Løs dit første puslespil på egen hånd."},"solves-10":{"name":"Varmet op","description":"Løs 10 puslespil."},"solves-50":{"name":"Puslevanen","description":"Løs 50 puslespil."},"solves-100":{"name":"Hundrede i hus","description":"Løs 100 puslespil."},"solves-250":{"name":"Stormester","description":"Løs 250 puslespil."},"specialist":{"name":"Specialisten","description":"Løs 10 puslespil i det samme spil."},"variety-3":{"name":"Smagsprøver","description":"Løs et puslespil i 3 forskellige spil."},"variety-10":{"name":"Alsidig","description":"Løs et puslespil i 10 forskellige spil."},"variety-all":{"name":"Hele kassen","description":"Løs et puslespil i hvert spil i samlingen."},"unlock-first":{"name":"Ny hylde","description":"Lås dit første spil op med point."},"unlock-15":{"name":"En voksende samling","description":"Hav 15 spil låst op."},"unlock-25":{"name":"Nøglering","description":"Hav 25 spil låst op."},"unlock-all":{"name":"Hovednøgle","description":"Lås hvert spil i samlingen op."},"hardest-1":{"name":"Klar på en udfordring","description":"Løs et puslespil på et spils sværeste indstilling."},"hardest-10":{"name":"Tindebestiger","description":"Løs den sværeste indstilling i 10 forskellige spil."},"hardest-all":{"name":"Urokkelig","description":"Løs den sværeste indstilling i hvert spil."},"pure-1":{"name":"Rent bord","description":"Løs et puslespil uden at fortryde og uden et tip."},"pure-25":{"name":"Rolig hånd","description":"Løs 25 puslespil uden at fortryde og uden et tip."},"quick-draw":{"name":"Lynhurtig","description":"Løs et puslespil på 30 sekunder eller mindre."},"marathon":{"name":"Maraton","description":"Løs et puslespil, efter du har brugt mere end 20 minutter på det."},"comeback":{"name":"Giv aldrig op","description":"Tab et puslespil, og kom så tilbage og løs det."},"second-thoughts":{"name":"Betænkeligheder","description":"Fortryd 100 gange, og løs alligevel puslespillet."},"a-little-help":{"name":"Lidt hjælp","description":"Tag et tip."},"oops":{"name":"Ups","description":"Tab et puslespil."},"night-owl":{"name":"Natugle","description":"Løs et puslespil mellem midnat og kl. 5 om morgenen."},"on-a-roll":{"name":"I stødet","description":"Løs 5 puslespil i én omgang."},"days-3":{"name":"Stamgæst","description":"Spil på 3 forskellige dage."},"days-7":{"name":"Hengiven","description":"Spil på 7 forskellige dage."},"days-30":{"name":"En del af inventaret","description":"Spil på 30 forskellige dage."},"quick-study":{"name":"Lærenem","description":"Spil en vejledning til ende."},"scholar":{"name":"Lærd","description":"Spil 10 forskellige vejledninger til ende."},"collector-25":{"name":"Mærkesamler","description":"Opnå 25 præstationer."},"collector-60":{"name":"Trofæskab","description":"Opnå 60 præstationer."},"legend":{"name":"Puslelegende","description":"Opnå alle andre præstationer."}},"andMore":{"one":"{n} præstation låst op","other":"{n} præstationer låst op"}},"stage":{"generating":"Deler et nyt puslespil ud…"},"endgame":{"won":"Puslespillet er løst!","lost":"Spillet er slut","credit":"★ +1 point — nok til at åbne et nyt puslespil i samlingen.","wonNote":"Klar til det næste?","forfeitNote":"Dette puslespil giver ikke point — løsningen blev vist undervejs.","lostNote":"Den slap væk. Skal vi prøve igen?","next":"Næste puslespil","retry":"Prøv igen","dismiss":"Luk og se på brættet","time":"Tid","moves":"Træk","hints":"Tip","best":"Bedste {time}","newBest":"Ny rekord!","stars":"{n} af 3 stjerner","stepUp":"Prøv {preset} →"},"welcome":{"title":"Vælg dit første puslespil","subtitle":{"one":"{n} puslespil at starte med. Vælg det, og spil.","other":"{n} puslespil at starte med. Vælg et, og spil."},"more":{"one":"…og {n} mere at låse op","other":"…og {n} mere at låse op"},"how":"Hvert puslespil, du løser, giver et point, og hvert point låser et nyt spil op."},"gamepad":{"connected":"Controller tilsluttet"},"settings":{"title":"Indstillinger","done":"Færdig","sound":"Lyd","volume":"Lydstyrke","reduceMotion":"Reducer bevægelse","vibration":"Vibration","statistics":"Spilstatistik","on":"Til","off":"Fra","portalMuted":"Siden har slået lyden fra."}}`),Y=[[`et **højreklik og træk`,`et **langt tryk og træk`],[`et højreklik og træk`,`et langt tryk og træk`],[`et **højreklik`,`et **langt tryk`],[`almindeligt **højreklik`,`almindeligt **langt tryk`],[`et højreklik`,`et langt tryk`],[`andet højreklik`,`andet langt tryk`],[`tredje højreklik`,`tredje langt tryk`],[`hvert højreklik`,`hvert langt tryk`],[`højreklikker du`,`trykker du længe`],[`højreklikker`,`trykker længe`],[`højreklikke`,`trykke længe`],[`højreklikket`,`trykket længe`],[`højreklik`,`tryk længe`],[`højre museknap`,`langt tryk`],[`et midterklik`,`et tryk med to fingre`],[`midterklikker du`,`trykker du med to fingre`],[`midterklikker`,`trykker med to fingre`],[`midterklikke`,`trykke med to fingre`],[`midterklik`,`tryk med to fingre`],[`midterste museknap`,`to fingre`],[`dobbeltklikker`,`dobbelttrykker`],[`dobbeltklikke`,`dobbelttrykke`],[`dobbeltklik`,`dobbelttryk`],[`venstreklikker`,`trykker`],[`venstreklikke`,`trykke`],[`venstreklik`,`tryk`],[`venstre museknap`,`tryk`],[`klikker`,`trykker`],[`klikke`,`trykke`],[`klikket`,`trykket`],[`klik`,`tryk`],[`musemarkøren`,`fingeren`],[`musen`,`fingeren`]],X=JSON.parse(`{"4-way rotational symmetry needs a square grid":"4-vejs rotationssymmetri kræver et kvadratisk gitter","A 2×2 grid is too small to make a puzzle from":"Et 2×2-gitter er for lille til at lave et puslespil af","A cube rolling along a single row can never turn over all six faces":"En terning, der ruller langs en enkelt række, kan aldrig vende alle seks sider","A given piece leaves the grid":"Et givet sporstykke fører ud af gitteret","A jigsaw block is too big":"En jigsaw-blok er for stor","A jigsaw block is too small":"En jigsaw-blok er for lille","A killer cage is too big":"Et bur er for stort","A killer cage is too small":"Et bur er for lille","A wrapping puzzle needs a width and height of at least 3 to have a unique solution":"Et puslespil, der går rundt om kanten, kræver en bredde og højde på mindst 3 for at have en entydig løsning","All parameters must be whole numbers":"Alle parametre skal være hele tal","Already solved":"Allerede løst","An edge cannot join a point to itself":"En kant kan ikke forbinde et punkt med sig selv","Angle offset out of bounds.":"Vinkelforskydningen er uden for området.","At least one grid dimension must be greater than zero":"Mindst én gitterdimension skal være større end nul","At least one of width and height for this grid type must be at least {0}":"For denne gittertype skal bredde eller højde være mindst {0}","At least one of width and height must be greater than one":"Bredde eller højde skal være større end én","Bad character in grid description":"Ugyldigt tegn i gitterbeskrivelsen","Bad mine layout in game description":"Ugyldig mineplacering i spilbeskrivelsen","Badly formatted move limit after grid description":"Forkert formateret trækgrænse efter gitterbeskrivelsen","Barrier probability must be a number between 0 and 1":"Sandsynlighed for barrierer skal være et tal mellem 0 og 1","Barrier probability must be between 0 and 1":"Sandsynlighed for barrierer skal være mellem 0 og 1","Blue cells are placed where some faces could never reach them":"Blå felter er placeret, hvor nogle af terningens sider aldrig kan nå dem","Both dimensions must be at least 2":"Begge dimensioner skal være mindst 2","Both grid dimensions must be at least one":"Begge gitterdimensioner skal være mindst én","Bridges per direction must be between 1 and {0}":"Broer pr. retning skal være mellem 1 og {0}","Can't create {0}×{1} puzzles":"Kan ikke lave puslespil på {0}×{1}","Clue did not provide 2 direction flags":"Ledetråden angav ikke 2 retningsflag","Clue is larger than the number of sides of its face":"Ledetråden er større end antallet af sider på dens flade","Clue is missing its number":"Ledetråden mangler sit tal","Clue number out of range":"Ledetrådens tal er uden for området","Colour out of range":"Farven er uden for området","Colour out of range in grid description":"Farve uden for området i gitterbeskrivelsen","Colours, pegs and guesses must be whole numbers":"Farver, pinde og gæt skal være hele tal","Column counts inconsistent":"Kolonnetallene passer ikke sammen","Could not four-colour the map":"Kunne ikke farvelægge kortet med fire farver","Count is larger than the line it describes":"Tallet er større end den linje, det beskriver","Description contains a duplicate number":"Beskrivelsen indeholder et tal to gange","Description contains a number larger than the grid":"Beskrivelsen indeholder et tal, der er større end gitteret","Description contains a number out of range":"Beskrivelsen indeholder et tal uden for området","Description contains a number that is too large":"Beskrivelsen indeholder et tal, der er for stort","Description contains a repeated number":"Beskrivelsen indeholder et gentaget tal","Description contains an unexpected character":"Beskrivelsen indeholder et uventet tegn","Description contains invalid characters":"Beskrivelsen indeholder ugyldige tegn","Description is corrupted":"Beskrivelsen er beskadiget","Description is longer than expected":"Beskrivelsen er længere end forventet","Description is shorter than expected":"Beskrivelsen er kortere end forventet","Description is too long":"Beskrivelsen er for lang","Description is too short":"Beskrivelsen er for kort","Description marks cells beyond the grid as blue":"Beskrivelsen markerer felter uden for gitteret som blå","Description may only contain P, H and O":"Beskrivelsen må kun indeholde P, H og O","Description must be a comma-separated list of numbers":"Beskrivelsen skal være en kommasepareret liste af tal","Description must be exactly {0} characters":"Beskrivelsen skal være præcis {0} tegn","Description must be hex digits, a comma and a cell number":"Beskrivelsen skal være hexcifre, et komma og et feltnummer","Description must be numbers each followed by an orientation letter (u, l, d or r)":"Beskrivelsen skal være tal, der hver især er efterfulgt af et retningsbogstav (u, l, d eller r)","Description must be two hex strings separated by a comma":"Beskrivelsen skal være to hexstrenge adskilt af et komma","Description must be {0} hexadecimal digits":"Beskrivelsen skal være {0} hexadecimale cifre","Description must contain at least one edge":"Beskrivelsen skal indeholde mindst én kant","Description must contain at least one peg":"Beskrivelsen skal indeholde mindst én pind","Description must contain at least two islands":"Beskrivelsen skal indeholde mindst to øer","Description must contain each number from 1 to {0} exactly once":"Beskrivelsen skal indeholde hvert tal fra 1 til {0} præcis én gang","Description must contain each row number from 1 to {0} exactly {1} times":"Beskrivelsen skal indeholde hvert rækkenummer fra 1 til {0} præcis {1} gange","Description must contain only digits":"Beskrivelsen må kun indeholde cifre","Description must contain only numbers":"Beskrivelsen må kun indeholde tal","Description must contain {0} numbers":"Beskrivelsen skal indeholde {0} tal","Description must contain {0} tiles":"Beskrivelsen skal indeholde {0} brikker","Description must mark exactly {0} cells blue":"Beskrivelsen skal markere præcis {0} felter blå","Description must start with {0} hex digits":"Beskrivelsen skal starte med {0} hexcifre","Description places two islands next to each other":"Beskrivelsen placerer to øer ved siden af hinanden","Description repeats a colour although duplicates are disallowed":"Beskrivelsen gentager en farve, selvom gentagelser ikke er tilladt","Description too long":"Beskrivelsen er for lang","Description too long for board size":"Beskrivelsen er for lang til brættets størrelse","Description too short":"Beskrivelsen er for kort","Description too short for board size":"Beskrivelsen er for kort til brættets størrelse","Digits in a {0}×{1} puzzle cannot exceed {2}":"Cifre i et {0}×{1}-puslespil må ikke overstige {2}","Disallowing duplicates requires at least as many colours as pegs":"Uden gentagelser skal der være mindst lige så mange farver som pinde","Domino descriptions inconsistent":"Dominobeskrivelserne stemmer ikke overens","Dots too close together":"Prikkerne sidder for tæt på hinanden","Duplicate edge in game description":"Gentaget kant i spilbeskrivelsen","Edge list defines the wrong number of regions":"Kantlisten definerer det forkerte antal områder","Entrance square must contain a piece leaving the left edge":"Indgangsfeltet skal indeholde et sporstykke, der fører ud gennem venstre kant","Every killer cage must have exactly one sum":"Hvert Killer-bur skal have præcis én sum","Exit square must contain a piece leaving the bottom edge":"Udgangsfeltet skal indeholde et sporstykke, der fører ud gennem nederste kant","Expansion factor must be a number":"Udvidelsesfaktoren skal være et tal","Expansion factor may not be negative":"Udvidelsesfaktoren må ikke være negativ","Expansion factor must be from 0 to 100":"Udvidelsesfaktoren skal være fra 0 til 100","Expected ',' after block structure description":"Forventede ',' efter blokstrukturen","Expected ',' after grid description":"Forventede ',' efter gitterbeskrivelsen","Expected a list of edges like 0-1,1-2 in game description":"Forventede en liste af kanter som 0-1,1-2 i spilbeskrivelsen","Expected comma before clue list":"Forventede et komma før ledetrådslisten","Expected jigsaw block structure in game description":"Forventede en Jigsaw-blokstruktur i spilbeskrivelsen","Expected killer cage structure in game description":"Forventede en Killer-burstruktur i spilbeskrivelsen","Expected killer clue grid in game description":"Forventede et Killer-ledetrådsgitter i spilbeskrivelsen","Expected slashes between clues":"Forventede skråstreger mellem ledetrådene","Expecting number in game description":"Forventede et tal i spilbeskrivelsen","Extra moves must not be negative":"Ekstra træk må ikke være negativt","Extreme puzzles with more than {0} symbols take too long to generate":"Ekstreme puslespil med mere end {0} symboler tager for lang tid at generere","Faulty game description":"Fejlbehæftet spilbeskrivelse","Flags contradicting each other":"Flagene modsiger hinanden","Flags go off grid":"Flagene peger ud af gitteret","Game ID must include parameters":"Spil-id'et skal indeholde parametre","Game description contained unexpected characters":"Spilbeskrivelsen indeholdt uventede tegn","Game description contains an unexpected character":"Spilbeskrivelsen indeholder et uventet tegn","Game description contains no dots":"Spilbeskrivelsen indeholder ingen prikker","Game description contains unexpected characters":"Spilbeskrivelsen indeholder uventede tegn","Game description has {0} balls; expected {1}":"Spilbeskrivelsen har {0} kugler; forventede {1}","Game description is corrupted":"Spilbeskrivelsen er beskadiget","Game description is longer than expected":"Spilbeskrivelsen er længere end forventet","Game description is shorter than expected":"Spilbeskrivelsen er kortere end forventet","Game description is the wrong length":"Spilbeskrivelsen har den forkerte længde","Game description is too long":"Spilbeskrivelsen er for lang","Game description is too short":"Spilbeskrivelsen er for kort","Game description is wrong length":"Spilbeskrivelsen har forkert længde","Game description longer than expected":"Spilbeskrivelsen er længere end forventet","Game description must be hexadecimal":"Spilbeskrivelsen skal være hexadecimal","Game description shorter than expected":"Spilbeskrivelsen er kortere end forventet","Game description too long":"Spilbeskrivelsen er for lang","Game is already solved":"Spillet er allerede løst","Grid area must be at least six squares":"Gitterets areal skal være mindst seks felter","Grid area must be greater than 1":"Gitterets areal skal være større end 1","Grid area must be greater than one":"Gitterets areal skal være større end én","Grid description is the wrong length or not hexadecimal":"Gitterbeskrivelsen har den forkerte længde eller er ikke hexadecimal","Grid description strings not used with this grid type":"Gitterbeskrivelser bruges ikke med denne gittertype","Grid dimensions cannot be negative":"Gitterdimensioner kan ikke være negative","Grid dimensions must be at most {0}":"Gitterdimensioner skal være højst {0}","Grid dimensions must be whole numbers":"Gitterdimensioner skal være hele tal","Grid is too big":"Gitteret er for stort","Grid must contain at least two squares":"Gitteret skal indeholde mindst to felter","Grid size must be between 3 and 9":"Gitterstørrelse skal være mellem 3 og 9","Grid size must be between {0} and {1}":"Gitterstørrelse skal være mellem {0} og {1}","Hard and Extreme puzzles are limited to a maximum number of {0}":"Svær- og Ekstrem-puslespil er begrænset til et højeste tal på {0}","Height must be at least 3":"Højden skal være mindst 3","Height must be at least five":"Højden skal være mindst fem","Height must be at least one":"Højden skal være mindst én","Height must be at least the rotating block size":"Højden skal være mindst lig med størrelsen på den roterende blok","Height must be at least two":"Højden skal være mindst to","Illegal grid type":"Ugyldig gittertype","Incorrect number balance in game description":"Forkert talbalance i spilbeskrivelsen","Initial x-coordinate was out of range":"Den første x-koordinat var uden for området","Initial y-coordinate was out of range":"Den første y-koordinat var uden for området","Internal error: solution is badly formatted":"Intern fejl: løsningen har et forkert format","Invalid character in block structure specification":"Ugyldigt tegn i blokstrukturangivelsen","Invalid character in game description":"Ugyldigt tegn i spilbeskrivelsen","Invalid character in grid specification":"Ugyldigt tegn i gitterangivelsen","Invalid character in number list":"Ugyldigt tegn i tallisten","Invalid characters in game description":"Ugyldige tegn i spilbeskrivelsen","Invalid format grid description string.":"Ugyldigt format på gitterbeskrivelsen.","Invalid parameters: {0}":"Ugyldige parametre: {0}","Invalid syntax in game description":"Ugyldig syntaks i spilbeskrivelsen","Jigsaw puzzles with more than {0} symbols take too long to generate":"Jigsaw-puslespil med mere end {0} symboler tager for lang tid at generere","Killer puzzle dimensions must be smaller than 10":"Dimensionerne i et Killer-puslespil skal være mindre end 10","Malformed pending game description":"Fejlformet ventende spilbeskrivelse","Matrix description is the wrong length or not hexadecimal":"Matrixbeskrivelsen har den forkerte længde eller er ikke hexadecimal","Maximum face number must be a whole number":"Højeste tal på dominoerne skal være et helt tal","Maximum face number must be at least one":"Højeste tal på dominoerne skal være mindst én","Maximum face number must be at most {0}":"Højeste tal på dominoerne skal være højst {0}","Maximum of 9 colours":"Højst 9 farver","Medium puzzles need more than one bridge per direction, or loops disallowed":"Middel-puslespil kræver mere end én bro pr. retning eller at løkker ikke er tilladt","Mines solver opened a mine: inconsistent knowledge":"Mineløseren åbnede en mine: inkonsistent viden","Minimum number of balls may not be greater than maximum":"Det mindste antal kugler må ikke være større end det største","Missing grid description string.":"Gitterbeskrivelsen mangler.","Missing separator":"Manglende separator","Monster numbers do not match grid spaces":"Antallet af monstre passer ikke til pladserne i gitteret","More than one starting square specified":"Der er angivet mere end ét startfelt","Multiple solutions exist for this puzzle":"Der findes flere løsninger på dette puslespil","Must have at least five regions":"Der skal være mindst fem områder","Must have at least one guess":"Der skal være mindst ét gæt","Must have between {0} and {1} colours":"Der skal være mellem {0} og {1} farver","No game set up to solve":"Der er intet spil sat op til at blive løst","No gems specified":"Der er ikke angivet nogen ædelsten","No solution exists for this position":"Der findes ingen løsning på denne stilling","No solution exists for this puzzle":"Der findes ingen løsning på dette puslespil","No solution found":"Ingen løsning fundet","No starting square specified":"Der er ikke angivet noget startfelt","Not enough data in block structure specification":"Ikke nok data i blokstrukturangivelsen","Not enough data in grid description":"Ikke nok data i gitterbeskrivelsen","Not enough data to fill grid":"Ikke nok data til at fylde gitteret","Not enough grid space to place all blue faces":"Ikke nok plads i gitteret til at placere alle blå sider","Not enough jigsaw blocks":"For få jigsaw-blokke","Not enough killer cages":"For få bure","Not enough numbers given after grid specification":"Ikke nok tal angivet efter gitterspecifikationen","Not enough space to place the solid on an empty cell":"Ikke plads nok til at placere legemet på et tomt felt","Number of colours must be at least three":"Antal farver skal være mindst tre","Number of colours must be at least two":"Antal farver skal være mindst to","Number of points must be a whole number":"Antal punkter skal være et helt tal","Number of points must be at least {0}":"Antal punkter skal være mindst {0}","Number of points must be at most {0}":"Antal punkter skal være højst {0}","Number of shuffling moves cannot be negative":"Antal blandetræk kan ikke være negativt","Number of shuffling moves must be a whole number":"Antal blandetræk skal være et helt tal","Number of shuffling moves must be at most 10000":"Antal blandetræk skal være højst 10000","Number of shuffling moves must be at most {0}":"Antal blandetræk skal være højst {0}","Number out of range in game description":"Tal uden for gyldigt område i spilbeskrivelsen","Number too large":"Tallet er for stort","Out-of-range number in game description":"Tal uden for det gyldige område i spilbeskrivelsen","Out-of-range number in grid description":"Tal uden for det gyldige område i gitterbeskrivelsen","Parameters must be whole numbers":"Parametrene skal være hele tal","Patch coordinates do not identify a usable grid fragment":"Udsnitskoordinaterne angiver ikke et brugbart stykke gitter","Patch offset out of bounds.":"Udsnittets forskydning er uden for grænserne.","Percentage of black squares must be between 5% and 100%":"Andelen af sorte felter skal være mellem 5% og 100%","Percentage of islands must be from 1% to 30%":"Andelen af øer skal være fra 1% til 30%","Puzzle is inconsistent":"Puslespillet er selvmodsigende","Puzzle is too large":"Puslespillet er for stort","Puzzle is too long for unique-rows mode":"Puslespillet er for langt til tilstanden med unikke rækker","Puzzle is too tall for unique-rows mode":"Puslespillet er for højt til tilstanden med unikke rækker","Puzzle is unsolvable":"Puslespillet kan ikke løses","Puzzle must have one entrance and one exit":"Puslespillet skal have én indgang og én udgang","Puzzles with more than {0} symbols take too long to generate":"Puslespil med mere end {0} symboler tager for lang tid at generere","Random seed must not be empty":"Den tilfældige startværdi må ikke være tom","Rotating block size must be at least two":"Rotationsblokkens størrelse skal være mindst to","Row counts inconsistent":"Rækketallene passer ikke sammen","Rows of blocks must be at least 1":"Antal rækker af blokke skal være mindst 1","Scoring system not recognised":"Ukendt pointsystem","Size and difficulty must be whole numbers":"Størrelse og sværhedsgrad skal være hele tal","Size must be at least 5 for Adjacent puzzles of this difficulty":"Størrelsen skal være mindst 5 til Naboer-puslespil med denne sværhedsgrad","Size must be between {0} and {1}":"Størrelsen skal være mellem {0} og {1}","Solution not known for this puzzle":"Løsningen til dette puslespil kendes ikke","Solve operation failed":"Løsningen mislykkedes","Solve operation produced an invalid move":"Løsningen gav et ugyldigt træk","Solver could not finish this grid":"Løseren kunne ikke gøre dette gitter færdigt","Solving algorithm cannot complete this puzzle":"Løsningsalgoritmen kan ikke fuldføre dette puslespil","Starting cell is outside the grid":"Startfeltet ligger uden for gitteret","Subtraction and division blocks must have area 2":"Subtraktions- og divisionsblokke skal have arealet 2","That grid has too many faces to generate":"Det gitter har for mange flader til at kunne genereres","The Cross board is only available at {0}×{1}":"Kryds-brættet findes kun i {0}×{1}","The Octagon board is only available at {0}×{1}":"Ottekant-brættet findes kun i {0}×{1}","The ball has hit a mine; undo that move first":"Kuglen har ramt en mine; fortryd det træk først","The grid can have at most {0} squares":"Gitteret kan højst have {0} felter","The grid may have at most {0} squares":"Gitteret må højst have {0} felter","The initial square contains a mine":"Startfeltet indeholder en mine","The solid cannot start on a blue cell":"Legemet kan ikke starte på et blåt felt","The solution has already been revealed":"Løsningen er allerede afsløret","There must be at least one ball":"Der skal være mindst én kugle","There must be at least one mine":"Der skal være mindst én mine","This arrangement cannot be solved":"Denne opstilling kan ikke løses","This game does not support the Solve operation":"Dette spil understøtter ikke Løs","This puzzle has no solution":"Dette puslespil har ingen løsning","This puzzle instance contains a contradiction":"Dette puslespil indeholder en modsigelse","This puzzle is not self-consistent":"Dette puslespil modsiger sig selv","Too few clues for block structure":"For få ledetråde til blokstrukturen","Too few clues for grid size":"For få ledetråde til gitterstørrelsen","Too little data in clue list":"For lidt data i ledetrådslisten","Too little data in edge list":"For lidt data i kantlisten","Too many balls to fit in the grid":"For mange kugler til at være i gitteret","Too many clues for block structure":"For mange ledetråde til blokstrukturen","Too many clues for grid size":"For mange ledetråde til gitterstørrelsen","Too many colours (at most {0})":"For mange farver (højst {0})","Too many colours makes given grid size impossible":"For mange farver gør den angivne gitterstørrelse umulig","Too many guesses (at most {0})":"For mange gæt (højst {0})","Too many jigsaw blocks":"For mange jigsaw-blokke","Too many killer cages":"For mange bure","Too many mines for grid size":"For mange miner til gitterstørrelsen","Too many pegs per guess (at most {0})":"For mange pinde pr. gæt (højst {0})","Too many regions to fit in grid":"For mange områder til at være i gitteret","Too much data in block structure specification":"For meget data i blokstrukturspecifikationen","Too much data in clue list":"For meget data i ledetrådslisten","Too much data in edge list":"For meget data i kantlisten","Too much data to fill grid":"For meget data til at udfylde gitteret","Too much data to fit in grid":"For meget data til at være i gitteret","Trivial solutions are uninteresting":"Trivielle løsninger er uinteressante","Unable to build a grid for these parameters":"Kan ikke bygge et gitter med disse parametre","Unable to build this grid":"Kan ikke bygge dette gitter","Unable to find a solution for this puzzle":"Kan ikke finde en løsning på dette puslespil","Unable to find a solution from this position":"Kan ikke finde en løsning fra denne stilling","Unable to find a solution to this puzzle":"Kan ikke finde en løsning til dette puslespil","Unable to find a unique solution for this puzzle":"Kan ikke finde en entydig løsning på dette puslespil","Unable to generate a puzzle of this size":"Kan ikke generere et puslespil i denne størrelse","Unable to generate a puzzle with these parameters":"Kan ikke generere et puslespil med disse parametre","Unable to solve this puzzle":"Kan ikke løse dette puslespil","Unable to support more than {0} distinct symbols":"Kan ikke håndtere mere end {0} forskellige symboler","Unable to work out any more of this puzzle":"Kan ikke regne mere af dette puslespil ud","Unexpected additional character at end of game description":"Uventet ekstra tegn i slutningen af spilbeskrivelsen","Unexpected additional data at end of game description":"Uventede ekstra data i slutningen af spilbeskrivelsen","Unexpected character '{0}' in description":"Uventet tegn '{0}' i beskrivelsen","Unexpected character in clue list":"Uventet tegn i ledetrådslisten","Unexpected character in edge list":"Uventet tegn i kantlisten","Unexpected data at end of game description":"Uventede data i slutningen af spilbeskrivelsen","Unknown board type":"Ukendt brættype","Unknown character in description":"Ukendt tegn i beskrivelsen","Unknown difficulty":"Ukendt sværhedsgrad","Unknown difficulty level":"Ukendt sværhedsniveau","Unknown difficulty rating":"Ukendt sværhedsvurdering","Unknown shape type":"Ukendt figurtype","Unknown symmetry":"Ukendt symmetri","Unknown symmetry type":"Ukendt symmetritype","Unrecognised character in game description":"Ukendt tegn i spilbeskrivelsen","Unrecognised characters in game description":"Ukendte tegn i spilbeskrivelsen","Unrecognised clue type":"Ukendt ledetrådstype","Unrecognised grid description.":"Ukendt gitterbeskrivelse.","Unrecognised solid type":"Ukendt legemetype","Width and height cannot both be two":"Bredde og højde kan ikke begge være to","Width and height for this grid type must both be at least {0}":"Bredde og højde skal begge være mindst {0} for denne gittertype","Width and height must be at least two":"Bredde og højde skal være mindst to","Width and height must be at least {0}":"Bredde og højde skal være mindst {0}","Width and height must be at most twelve":"Bredde og højde skal være højst tolv","Width and height must be at most {0}":"Bredde og højde skal være højst {0}","Width and height must be at most {0} to generate a puzzle":"Bredde og højde skal være højst {0} for at kunne generere et puslespil","Width and height must be positive":"Bredde og højde skal være positive","Width and height must be whole numbers":"Bredde og højde skal være hele tal","Width and height must both be at least 3":"Bredde og højde skal begge være mindst 3","Width and height must both be at least four":"Bredde og højde skal begge være mindst fire","Width and height must both be at least one":"Bredde og højde skal begge være mindst én","Width and height must both be at least two":"Bredde og højde skal begge være mindst to","Width and height must both be even":"Bredde og højde skal begge være lige tal","Width and height must both be greater than three":"Bredde og højde skal begge være større end tre","Width and height must both be greater than two":"Bredde og højde skal begge være større end to","Width and height must both be greater than zero":"Bredde og højde skal begge være større end nul","Width and height must both be positive":"Bredde og højde skal begge være positive","With three colours, a solvable grid may have at most {0} squares":"Med tre farver må et løseligt gitter højst have {0} felter","Width must be at least 3":"Bredden skal være mindst 3","Width must be at least five":"Bredden skal være mindst fem","Width must be at least one":"Bredden skal være mindst én","Width must be at least the rotating block size":"Bredden skal være mindst lige så stor som rotationsblokken","Width must be at least two":"Bredden skal være mindst to","Width, height and ball counts must be whole numbers":"Bredde, højde og antal kugler skal være hele tal","Width, height and difficulty must be whole numbers":"Bredde, højde og sværhedsgrad skal være hele tal","Width, height and number of colours must be whole numbers":"Bredde, højde og antal farver skal være hele tal","Width, height, block size and move count must be whole numbers":"Bredde, højde, blokstørrelse og antal træk skal være hele tal","X puzzles need at least four symbols":"X-puslespil kræver mindst fire symboler","X-diagonal jigsaw puzzles with more than {0} symbols take too long to generate":"Jigsaw-puslespil med X-diagonaler og mere end {0} symboler tager for lang tid at generere","You have hit a mine; undo that move first":"Du har ramt en mine; fortryd det træk først","a cell may be a number position for only one rectangle":"et felt må kun være talposition for ét rektangel","at least one column contains more numbers than will fit":"mindst én kolonne indeholder flere tal, end der er plads til","at least one row contains more numbers than will fit":"mindst én række indeholder flere tal, end der er plads til","cells are not adjacent":"felterne er ikke naboer","domino layout: no path between singletons":"dominoopstilling: ingen vej mellem enkeltfelter","domino layout: stranded square cannot be paired":"dominoopstilling: strandet felt kan ikke parres","dot touches the outside twice":"prikken rører ydersiden to gange","dot with fewer than two edges":"prik med færre end to kanter","edge does not follow its face":"kanten følger ikke sin flade","edge shared by three faces":"kant delt af tre flader","expected CxR or Nj":"forventede CxR eller Nj","expected WxH":"forventede WxH","expected WxHnN":"forventede WxHnN","expected a grid size":"forventede en gitterstørrelse","expected a maximum number":"forventede et maksimumtal","expected a number of points":"forventede et antal punkter","expected a solid letter followed by WxH":"forventede et legemebogstav efterfulgt af WxH","expected something like c6p4g10Bm":"forventede noget i stil med c6p4g10Bm","expected w<W>h<H>m<MIN>M<MAX>":"forventede w<W>h<H>m<MIN>M<MAX>","generateKeen: solver disagrees with the square":"generateKeen: løseren er uenig med feltet","grid inconsistency while walking round a face":"uoverensstemmelse i gitteret under gennemgang af en flade","inconsistent clues while assembling":"modstridende ledetråde under samlingen","inconsistent distance field":"inkonsistent afstandsfelt","inconsistent face classes":"inkonsistente fladeklasser","latin rectangle could not be extended":"det latinske rektangel kunne ikke udvides","latinGenerate: no extension found":"latinGenerate: ingen udvidelse fundet","latinSquare: rectangle could not be extended":"latinSquare: rektanglet kunne ikke udvides","line too long for solver":"linjen er for lang for løseren","no clue left to place":"ingen ledetråd tilbage at placere","no such laser: {0}":"ingen sådan laser: {0}","rolled solid does not fit its destination":"det rullede legeme passer ikke til sin destination","shown":"vist","too few row/column specifications":"for få række-/kolonneangivelser","too many row/column specifications":"for mange række-/kolonneangivelser","unrecognised character in game description":"ukendt tegn i spilbeskrivelsen","yes!":"ja!","9×9 Extreme puzzles take too long to generate; try 8×8 or Expert":"9×9 Ekstrem-puslespil tager for lang tid at generere; prøv 8×8 eller Ekspert"}`),Z={moves:`Træk: {n}`,movesCompleted:{one:`Fuldført på {n} træk`,other:`Fuldført på {n} træk`},movesSinceSolve:`Træk siden autoløsning: {n}`,completedMoves:`Fuldført! Træk: {n}`,solvedByComputer:`Løst af computeren`,completed:`Fuldført!`,completedPrefix:`Fuldført! `,autoSolved:`Løst automatisk.`,autoSolvedPrefix:`Løst automatisk. `,autoSolverUsedPrefix:`Autoløser brugt. `,failedPrefix:`Ikke flere træk. `,dead:`Du ramte en mine.`,target:` (mål {n})`},Q=JSON.parse(`{"blackbox":{"name":"Sort boks","description":"Find de skjulte kugler ved at skyde lasere ind i boksen og se, hvor de kommer ud.","preset":{"5x5_3_balls":"5×5, 3 kugler","8x8_5_balls":"8×8, 5 kugler","8x8_3_6_balls":"8×8, 3-6 kugler","10x10_5_balls":"10×10, 5 kugler","10x10_4_10_balls":"10×10, 4-10 kugler"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"no_of_balls":{"name":"Antal kugler"}},"achievement":{"sparing_shots":{"name":"Sparsomme skud","description":"Find alle kugler, mens du skyder lasere fra højst halvdelen af portene."},"pinpoint":{"name":"Præcist ramt","description":"Find alle kugler i en boks på 8×8 eller større med højst tre lasere pr. kugle."},"shot_in_the_dark":{"name":"Skud i blinde","description":"Få dine kugler tjekket uden at skyde en eneste laser, og tag fejl."}},"status":{"correct":"RIGTIGT!","wrong":{"one":"{wrong} fejl og {n} overset kugle.","other":"{wrong} fejl og {n} oversete kugler."},"marked":"Markerede kugler: {n} / {range}  ·  Affyrede lasere: {fired}","tooMany":"  ·  {n} for mange markeret.","check":"  ·  Klik på hjørneknappen for at tjekke."}},"bridges":{"name":"Broer","alsoKnownAs":"Hashiwokakero, Hashi","description":"Forbind øerne med broer, så alle tal passer, og intet krydser.","preset":{"7x7_easy":"7×7 Let","7x7_medium":"7×7 Middel","7x7_hard":"7×7 Svær","10x10_easy":"10×10 Let","10x10_medium":"10×10 Middel","10x10_hard":"10×10 Svær","15x15_easy":"15×15 Let","15x15_medium":"15×15 Middel","15x15_hard":"15×15 Svær","10x10_medium_no_loops":"10×10 Middel, ingen løkker"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"difficulty":{"name":"Sværhedsgrad","choice":{"easy":"Let","medium":"Middel","hard":"Svær"}},"allow_loops":{"name":"Tillad løkker"},"max_bridges_per_direction":{"name":"Maks. broer pr. retning","choice":{"1":"1","2":"2","3":"3","4":"4"}},"of_island_squares":{"name":"% øfelter","choice":{"5":"5%","10":"10%","15":"15%","20":"20%","25":"25%","30":"30%"}},"expansion_factor":{"name":"Udvidelsesfaktor (%)","choice":{"0":"0%","10":"10%","20":"20%","30":"30%","40":"40%","50":"50%","60":"60%","70":"70%","80":"80%","90":"90%","100":"100%"}}},"action":{"g":{"label":"Hjælpelinjer","title":"Vis eller skjul en svag streg alle steder, hvor en bro kan gå (G)"},"e":{"label":"Viskelæder","title":"Træk fra en ø for at fjerne dens broer i den retning (E)"}},"achievement":{"no_markers":{"name":"Klart vand","description":"Løs et puslespil på 10×10 eller større uden at tegne en eneste \\"ingen bro\\"-markering."},"sure_footing":{"name":"Sikker på benene","description":"Løs et Svær-puslespil på 10×10 eller større uden at fjerne en bro eller bruge Fortryd."}}},"cube":{"name":"Terning","description":"Rul et legeme rundt på gitteret, og saml alle blå felter op på siderne.","preset":{"cube":"Terning","tetrahedron":"Tetraeder","octahedron":"Oktaeder","icosahedron":"Ikosaeder"},"config":{"type_of_solid":{"name":"Type legeme","choice":{"tetrahedron":"Tetraeder","cube":"Terning","octahedron":"Oktaeder","icosahedron":"Ikosaeder"}},"width_top":{"name":"Bredde / top"},"height_bottom":{"name":"Højde / bund"}},"achievement":{"short_haul":{"name":"Kort tur","description":"Gør alle flader på Terningen blå på højst tyve rul."},"octahedron_ace":{"name":"Otte flader i fart","description":"Gør alle flader på Oktaederet blå på højst tredive rul."},"scenic_route":{"name":"Den store rundtur","description":"Rul legemet mindst to hundrede gange, før alle flader er blå."}}},"dominosa":{"name":"Dominosa","description":"Find ud af, hvor det blandede sæt dominoer ligger i gitteret af tal.","preset":{"up_to_double_3":"Op til dobbelt-3","up_to_double_4":"Op til dobbelt-4","up_to_double_5":"Op til dobbelt-5","up_to_double_6":"Op til dobbelt-6","up_to_double_7":"Op til dobbelt-7","up_to_double_8":"Op til dobbelt-8","up_to_double_9":"Op til dobbelt-9"},"config":{"maximum_number_on_dominoes":{"name":"Højeste tal på dominoerne"},"difficulty":{"name":"Sværhedsgrad","choice":{"very_easy":"Meget let","easy":"Let","hard":"Svær","extreme":"Ekstrem","ambiguous":"Flertydig"}}},"achievement":{"no_lines":{"name":"Ingen blyant nødvendig","description":"Løs et sæt på dobbelt-6 eller større uden at tegne en eneste blyantsstreg."},"one_click_each":{"name":"Ét klik pr. brik","description":"Løs et sæt på dobbelt-6 eller større med ét klik pr. domino og uden Fortryd."},"doubles_first":{"name":"Dobbelte først","description":"Læg alle dobbelte brikker i sættet, før du lægger nogen anden domino."}}},"fifteen":{"name":"Femten","alsoKnownAs":"15-spillet, skydepuslespil","description":"Skub brikkerne rundt, indtil de ligger i rækkefølge.","preset":{"3x3":"3×3","4x4":"4×4","5x5":"5×5"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"}},"achievement":{"short_shuffle":{"name":"Kort blanding","description":"Sæt 4×4 i orden på 100 træk eller færre."},"five_flyer":{"name":"Fem gange fem i fart","description":"Sæt 5×5 i orden på under tre minutter."},"scenic_route":{"name":"Den lange vej","description":"Brug mere end 300 træk på at sætte 3×3 i orden."}}},"filling":{"name":"Udfyldning","alsoKnownAs":"Fillomino","description":"Udfyld gitteret, så hver gruppe af ens cifre fylder præcis så mange felter.","preset":{"9x7":"9×7","13x9":"13×9","17x13":"17×13"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"}},"achievement":{"in_ink":{"name":"Skrevet med blæk","description":"Løs Udfyldning uden at ændre eller viske noget ciffer ud, og uden Fortryd."},"one_stroke":{"name":"Alt i ét hug","description":"Løs Udfyldning på 13×9 eller større, og skriv hver gruppe af cifre i ét enkelt træk."}},"action":{"f":{"label":"Udfyld","title":"Træk fra et ciffer for at skrive det i hvert felt, du passerer (F)"}}},"flip":{"name":"Vend","alsoKnownAs":"Lights Out","description":"Tænd alle felter — hvert tryk vender også felterne omkring det.","preset":{"3x3_crosses":"3×3 Kryds","4x4_crosses":"4×4 Kryds","5x5_crosses":"5×5 Kryds","3x3_random":"3×3 Tilfældig","4x4_random":"4×4 Tilfældig","5x5_random":"5×5 Tilfældig"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"shape_type":{"name":"Figurtype","choice":{"crosses":"Kryds","random":"Tilfældig"}}},"achievement":{"press_once":{"name":"Tryk én gang","description":"Tænd et bræt på 4×4 eller større uden at trykke på noget felt to gange."},"fewest_presses":{"name":"Mindste indsats","description":"Tænd et 5×5-bræt med det færrest mulige antal tryk."}}},"flood":{"name":"Oversvømmelse","alsoKnownAs":"Flood It","description":"Oversvøm gitteret fra hjørnet, til alt har samme farve — inden for trækgrænsen.","preset":{"12x12_easy":"12×12 Let","12x12_medium":"12×12 Middel","12x12_hard":"12×12 Svær","16x16_medium":"16×16 Middel","16x16_hard":"16×16 Svær","12x12_3_colours":"12×12, 3 farver","12x12_4_colours":"12×12, 4 farver"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"colours":{"name":"Farver"},"extra_moves_permitted":{"name":"Ekstra træk tilladt"}},"achievement":{"spare_moves":{"name":"Træk til overs","description":"Oversvøm gitteret med mindst tre træk til overs."},"beat_the_solver":{"name":"Slå maskinen","description":"Oversvøm gitteret på færre træk end computerens egen løsning."},"one_colour_short":{"name":"Én farve for meget","description":"Løb tør for træk med kun to farver tilbage på gitteret."}},"status":{"moves":"{n} / {limit} træk"}},"galaxies":{"name":"Galakser","alsoKnownAs":"Spiral Galaxies, Tentai Show","description":"Del gitteret op i områder, der hver især er symmetriske om prikken indeni.","preset":{"7x7_medium":"7×7 Middel","7x7_extreme":"7×7 Ekstrem","10x10_medium":"10×10 Middel","15x15_medium":"15×15 Middel"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"difficulty":{"name":"Sværhedsgrad","choice":{"medium":"Middel","extreme":"Ekstrem"}}},"achievement":{"no_arrows":{"name":"Ingen pegepinde","description":"Løs Galakser på 10×10 eller større uden at trække en eneste pil ud."},"steady_hand":{"name":"Faste stjerner","description":"Løs Galakser på 10×10 eller større uden at fjerne en mur eller bruge Fortryd."}}},"guess":{"name":"Gæt","alsoKnownAs":"Mastermind","description":"Find den skjulte række af farvede pinde ud fra markeringerne på dine gæt.","preset":{"standard":"Standard","super":"Super"},"config":{"colours":{"name":"Farver"},"pegs_per_guess":{"name":"Pinde pr. gæt"},"guesses":{"name":"Gæt"},"allow_blanks":{"name":"Tillad tomme pladser"},"allow_duplicates":{"name":"Tillad gentagelser"}},"action":{"l":{"label":"Bogstaver","title":"Mærk pindene med bogstaver (L)"},"k":{"label":"Behold","title":"Klik på en pind i din række for at tage den med over i næste gæt (K)"}},"achievement":{"five_guesses":{"name":"Kodeknækker","description":"Find den skjulte række på fem gæt eller færre."},"super_sleuth":{"name":"Mesterdetektiv","description":"Find den skjulte Super-række med fem pinde på seks gæt eller færre."},"so_near":{"name":"Så tæt på","description":"Løb tør for gæt med alle pinde undtagen én på rette plads."}},"status":{"revealed":"Løsningen er afsløret","solved":{"one":"Løst på {n} gæt","other":"Løst på {n} gæt"},"outOfGuesses":"Ikke flere gæt: løsningen er afsløret","guessN":"Gæt {n} af {total}"}},"inertia":{"name":"Inerti","description":"Send en kugle hen over gitteret, og saml alle ædelsten uden at ramme en mine.","preset":{"10x8":"10×8","15x12":"15×12","20x16":"20×16"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"}},"achievement":{"hat_trick":{"name":"Hattrick","description":"Saml tre eller flere ædelstene op med ét enkelt rul med kuglen."},"shortcut":{"name":"Genvej","description":"Saml alle ædelstene på et bræt på 15×12 eller større på færre rul, end Løs ville bruge."},"last_gem_mine":{"name":"Pyrrhussejr","description":"Rul ind i en mine med det samme rul, som samler den allersidste ædelsten op."}},"status":{"gems":"Ædelsten: {n}","deaths":" · Tabte liv: {n}"}},"keen":{"name":"Keen","alsoKnownAs":"KenKen, Calcudoku","description":"Udfyld det latinske kvadrat, så hvert bur passer med sit regnestykke.","preset":{"4x4_easy":"4×4 Let","5x5_easy":"5×5 Let","5x5_easy_x_only":"5×5 Let, kun ×","6x6_easy":"6×6 Let","6x6_medium":"6×6 Middel","6x6_medium_x_only":"6×6 Middel, kun ×","6x6_hard":"6×6 Svær","6x6_expert":"6×6 Ekspert","6x6_extreme":"6×6 Ekstrem","9x9_medium":"9×9 Middel"},"config":{"grid_size":{"name":"Gitterstørrelse"},"difficulty":{"name":"Sværhedsgrad","choice":{"easy":"Let","medium":"Middel","hard":"Svær","expert":"Ekspert","extreme":"Ekstrem"}},"multiplication_only":{"name":"Kun multiplikation"}},"action":{"m":{"label":"Noter","title":"Notér alle muligheder med blyant i alle tomme felter (M)"},"l":{"label":"Fremhæv","title":"Fremhæv alle felter med det ciffer, du sidst rørte (L)"}},"achievement":{"no_pencil":{"name":"Hovedregning","description":"Løs en Keen på 6×6 eller større uden at skrive en eneste blyantsnote."},"products_only":{"name":"Rent produkt","description":"Løs en 6×6 Middel Keen kun med gange."}}},"lightup":{"name":"Tænd lys","alsoKnownAs":"Akari","description":"Placér pærer, så hvert felt er oplyst, og ingen pære lyser på en anden.","preset":{"7x7_easy":"7×7 Let","7x7_medium":"7×7 Middel","7x7_hard":"7×7 Svær","10x10_easy":"10×10 Let","10x10_medium":"10×10 Middel","10x10_hard":"10×10 Svær","14x14_easy":"14×14 Let","14x14_medium":"14×14 Middel","14x14_hard":"14×14 Svær"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"of_black_squares":{"name":"% sorte felter"},"symmetry":{"name":"Symmetri","choice":{"none":"Ingen","2_way_mirror":"2-vejs spejling","2_way_rotational":"2-vejs rotation","4_way_mirror":"4-vejs spejling","4_way_rotational":"4-vejs rotation"}},"difficulty":{"name":"Sværhedsgrad","choice":{"easy":"Let","medium":"Middel","hard":"Svær"}}},"achievement":{"no_crosses":{"name":"Kun lys","description":"Løs Tænd lys på 10×10 eller større uden at sætte et eneste kryds."},"no_takebacks":{"name":"En lys idé","description":"Løs en Svær Tænd lys uden nogensinde at fjerne en pære."}},"action":{"x":{"label":"Kryds","title":"Klik sætter kryds i stedet for pærer (X)"}}},"loopy":{"name":"Løkker","alsoKnownAs":"Slitherlink","description":"Tegn én lukket løkke, så hvert tal passer med antallet af streger omkring det.","preset":{"7x7_squares_easy":"7×7 Kvadrater Let","10x10_squares_easy":"10×10 Kvadrater Let","7x7_squares_medium":"7×7 Kvadrater Middel","10x10_squares_medium":"10×10 Kvadrater Middel","7x7_squares_expert":"7×7 Kvadrater Ekspert","10x10_squares_expert":"10×10 Kvadrater Ekspert","10x10_triangular_expert":"10×10 Trekanter Ekspert","12x10_honeycomb_expert":"12×10 Bikube Ekspert","7x7_snub_square_expert":"7×7 Snub-kvadrat Ekspert","9x9_cairo_expert":"9×9 Cairo Ekspert","5x4_great_hexagonal_expert":"5×4 Stor-sekskantet Ekspert","7x7_octagonal_expert":"7×7 Ottekantet Ekspert","5x5_kites_expert":"5×5 Drager Ekspert","5x5_floret_expert":"5×5 Blomst Ekspert","5x4_dodecagonal_expert":"5×4 Tolvkantet Ekspert","5x4_great_dodecagonal_expert":"5×4 Stor-tolvkantet Ekspert","10x10_penrose_kite_dart_expert":"10×10 Penrose (drage/pil) Ekspert","10x10_penrose_rhombs_expert":"10×10 Penrose (rhomber) Ekspert"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"grid_type":{"name":"Gittertype","choice":{"squares":"Kvadrater","triangular":"Trekanter","honeycomb":"Bikube","snub_square":"Snub-kvadrat","cairo":"Cairo","great_hexagonal":"Stor-sekskantet","octagonal":"Ottekantet","kites":"Drager","floret":"Blomst","dodecagonal":"Tolvkantet","great_dodecagonal":"Stor-tolvkantet","penrose_kite_dart":"Penrose (drage/pil)","penrose_rhombs":"Penrose (rhomber)"}},"difficulty":{"name":"Sværhedsgrad","choice":{"easy":"Let","medium":"Middel","hard":"Svær","expert":"Ekspert"}}},"achievement":{"off_grid":{"name":"Uden for gitteret","description":"Løs Løkker på en hvilken som helst flisetype undtagen kvadrater."},"no_crosses":{"name":"Bare løkken","description":"Løs Løkker på 10×10 uden at strege en eneste kant ud."},"aperiodic":{"name":"Aperiodisk","description":"Løs Løkker med Penrose uden nogensinde at fjerne en streg, du har tegnet."}},"action":{"x":{"label":"Kryds","title":"Klik krydser kanter ud i stedet for at tegne streger (X)"}}},"magnets":{"name":"Magneter","description":"Placér magneter og tomme felter i dominoerne, så poltallene går op.","preset":{"6x5_easy":"6×5 Let","6x5_hard":"6×5 Svær","6x5_hard_strip_clues":"6×5 Svær, færre ledetråde","8x7_easy":"8×7 Let","8x7_hard":"8×7 Svær","8x7_hard_strip_clues":"8×7 Svær, færre ledetråde","10x9_hard":"10×9 Svær","10x9_hard_strip_clues":"10×9 Svær, færre ledetråde"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"difficulty":{"name":"Sværhedsgrad","choice":{"easy":"Let","hard":"Svær"}},"strip_clues":{"name":"Færre ledetråde"}},"achievement":{"no_flips":{"name":"Rigtigt vendt","description":"Løs Magneter på 8×7 eller større uden nogensinde at vende en magnet om."},"stripped":{"name":"Afisolerede ledninger","description":"Løs Magneter på 10×9 Svær med færre ledetråde på under ti minutter."}},"action":{"b":{"label":"Blank brik","title":"Klik markerer dominobrikker som blanke i stedet for at placere magneter (B)"}}},"map":{"name":"Kort","description":"Farvelæg kortet med fire farver, så ingen naboområder får samme farve.","preset":{"20x15_easy_30_regions":"20×15 Let, 30 områder","20x15_medium_30_regions":"20×15 Middel, 30 områder","20x15_hard_30_regions":"20×15 Svær, 30 områder","20x15_extreme_30_regions":"20×15 Ekstrem, 30 områder","30x25_medium_75_regions":"30×25 Middel, 75 områder","30x25_hard_75_regions":"30×25 Svær, 75 områder"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"regions":{"name":"Områder"},"difficulty":{"name":"Sværhedsgrad","choice":{"easy":"Let","medium":"Middel","hard":"Svær","extreme":"Ekstrem"}}},"achievement":{"no_dots":{"name":"Frihåndsatlas","description":"Løs et Kort på Svær eller sværere uden en eneste blyantsprik."},"steady_brush":{"name":"Rolig pensel","description":"Løs et Kort på Ekstrem uden nogensinde at ændre et områdes farve."}},"action":{"l":{"label":"Numre","title":"Vis et nummer i hvert område (L)"}}},"mines":{"name":"Miner","alsoKnownAs":"Minestryger, Minesweeper","description":"Afdæk alle felter, der ikke er miner — du skal aldrig gætte.","preset":{"9x9_beginner_10_mines":"9×9 Begynder, 10 miner","9x9_35_mines":"9×9, 35 miner","16x16_intermediate_40_mines":"16×16 Øvet, 40 miner","16x16_99_mines":"16×16, 99 miner","30x16_expert_99_mines":"30×16 Ekspert, 99 miner","30x16_170_mines":"30×16, 170 miner"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"mines":{"name":"Miner"},"ensure_solubility":{"name":"Garantér løsbarhed"}},"achievement":{"no_flags":{"name":"Uden flag","description":"Vind et spil Miner uden at plante et eneste flag."},"expert_sweep":{"name":"Bombegruppen","description":"Vind Ekspert-brættet på 30×16 på under fem minutter."},"so_close":{"name":"Så tæt på","description":"Træd på en mine med højst tre sikre felter tilbage at åbne."}},"status":{"marked":"Markeret: {n} / {total}","deaths":" · Tabte liv: {n}"}},"net":{"name":"Net","alsoKnownAs":"NetWalk","description":"Drej brikkerne, indtil alle er forbundet til midten.","preset":{"5x5":"5×5","7x7":"7×7","9x9":"9×9","11x11":"11×11","13x11":"13×11","5x5_wrapping":"5×5 rundtgående","7x7_wrapping":"7×7 rundtgående","9x9_wrapping":"9×9 rundtgående","11x11_wrapping":"11×11 rundtgående","13x11_wrapping":"13×11 rundtgående"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"walls_wrap_around":{"name":"Rundtgående kanter"},"barrier_probability":{"name":"Sandsynlighed for barrierer"},"ensure_unique_solution":{"name":"Garantér entydig løsning"}},"action":{"j":{"label":"Bland","title":"Drej alle ulåste brikker tilfældigt (J)"},"scroll_left":{"label":"←","title":"Rul billedet til venstre (Shift+←)"},"scroll_up":{"label":"↑","title":"Rul billedet op (Shift+↑)"},"scroll_down":{"label":"↓","title":"Rul billedet ned (Shift+↓)"},"scroll_right":{"label":"→","title":"Rul billedet til højre (Shift+→)"},"k":{"label":"Lås","title":"Klik på brikker for at låse eller låse dem op i stedet for at dreje dem (K)"}},"achievement":{"no_locks":{"name":"Intet under lås","description":"Løs et Net på 9×9 eller større uden at låse en eneste brik."},"not_a_turn_wasted":{"name":"Ingen spildte drej","description":"Løs et Net på 9×9 eller større uden at dreje nogen brik mere end nødvendigt."},"jumbled":{"name":"Rystet godt og grundigt","description":"Tryk på Bland, og løs alligevel puslespillet."}},"status":{"active":"Aktive: {n}/{total}"}},"netslide":{"name":"Netskub","description":"Skub rækker og kolonner af netbrikker, indtil alt hænger sammen.","preset":{"3x3_easy":"3×3 let","3x3_medium":"3×3 middel","3x3_hard":"3×3 svær","4x4_easy":"4×4 let","4x4_medium":"4×4 middel","4x4_hard":"4×4 svær","5x5_easy":"5×5 let","5x5_medium":"5×5 middel","5x5_hard":"5×5 svær"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"walls_wrap_around":{"name":"Rundtgående kanter"},"barrier_probability":{"name":"Sandsynlighed for barrierer"},"number_of_shuffling_moves":{"name":"Antal blandetræk"}},"achievement":{"tidy_four":{"name":"Pæn omkobling","description":"Løs et 4×4 Netskub på 18 skub eller færre."},"lean_five":{"name":"Linjemontør","description":"Løs et 5×5 Netskub på 32 skub eller færre."},"big_switch":{"name":"Den store kontakt","description":"Tænd hele netværket med ét skub, når under halvdelen af det var tændt."}},"status":{"active":" · Aktive: {n}/{total}"}},"pattern":{"name":"Mønster","alsoKnownAs":"Nonogram, japansk krydsord, Picross","description":"Udfyld gitteret ud fra bloklængderne, der står ved hver række og kolonne.","preset":{"10x10":"10×10","15x15":"15×15","20x20":"20×20","25x25":"25×25","30x30":"30×30"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"}},"achievement":{"no_dots":{"name":"Ikke en prik","description":"Løs et Mønster på 15×15 eller større uden at sætte en eneste prik."},"inked_in":{"name":"Trukket op med blæk","description":"Løs et Mønster på 20×20 eller større uden nogensinde at rydde et sort felt."}},"action":{"e":{"label":"Viskelæder","title":"Klik eller træk for at viske felter tilbage til ukendt (E)"}}},"pearl":{"name":"Perle","alsoKnownAs":"Masyu","description":"Tegn én lukket løkke, der går lige gennem de hvide perler og drejer ved de sorte.","preset":{"6x6_easy":"6×6 Let","6x6_tricky":"6×6 Drilsk","8x8_easy":"8×8 Let","8x8_tricky":"8×8 Drilsk","10x10_easy":"10×10 Let","10x10_tricky":"10×10 Drilsk","12x8_easy":"12×8 Let","12x8_tricky":"12×8 Drilsk"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"difficulty":{"name":"Sværhedsgrad","choice":{"easy":"Let","tricky":"Drilsk"}},"allow_unsoluble":{"name":"Tillad uløselige"}},"achievement":{"no_crosses":{"name":"Perlekæde","description":"Løs en Perle på 10×10 uden at sætte et eneste kryds."},"one_stroke":{"name":"Ét strøg","description":"Tegn hele løkken i en Perle på 8×8 eller større i ét enkelt træk."}},"action":{"x":{"label":"Kryds","title":"Klik eller træk for at krydse kanter af, som løkken ikke kan bruge (X)"}}},"pegs":{"name":"Pinde","alsoKnownAs":"Solitaire, eneboerspillet","description":"Spring pindene over hinanden, indtil kun én er tilbage.","preset":{"cross":"Kryds","octagon":"Ottekant","random_5x5":"Tilfældig 5×5","random_7x7":"Tilfældig 7×7","random_9x9":"Tilfældig 9×9"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"board_type":{"name":"Brættype","choice":{"cross":"Kryds","octagon":"Ottekant","random":"Tilfældig"}}},"achievement":{"dead_centre":{"name":"Lige i midten","description":"Afslut Kryds-brættet med den sidste pind i det midterste hul."},"hopscotch":{"name":"Hinkeleg","description":"Vind et spil Pinde, hvor én pind hopper fire gange i træk."},"pegged_out":{"name":"Kørt fast","description":"Sid fast med ti eller flere pinde stadig på brættet."}},"status":{"stuck":"Ingen flere træk — {n} pinde tilbage","playing":"Pinde tilbage: {n}  ·  Træk: {moves}"}},"range":{"name":"Rækkevidde","alsoKnownAs":"Kurodoko, Kuromasu","description":"Farv felter sorte, så hvert tal ser præcis så mange hvide felter i sin række og kolonne.","preset":{"9x6":"9×6","12x8":"12×8","13x9":"13×9","16x11":"16×11"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"}},"achievement":{"no_dots":{"name":"Ren kontrast","description":"Løs Rækkevidde på 13×9 eller større uden at sætte en eneste prik."},"quick_sight":{"name":"Skarpt blik","description":"Løs Rækkevidde på 16×11 på under fem minutter."}},"action":{"e":{"label":"Viskelæder","title":"Klik eller træk for at fjerne sorte felter og prikker (E)"}}},"rect":{"name":"Rektangler","alsoKnownAs":"Shikaku","description":"Del gitteret op i rektangler, der hver rummer ét tal svarende til deres areal.","preset":{"7x7":"7×7","9x9":"9×9","11x11":"11×11","13x13":"13×13","15x15":"15×15","17x17":"17×17","19x19":"19×19"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"expansion_factor":{"name":"Udvidelsesfaktor"},"ensure_unique_solution":{"name":"Garantér entydig løsning"}},"achievement":{"clean_cuts":{"name":"Rene snit","description":"Løs Rektangler på 11×11 eller større på ikke flere træk, end der er tal."},"quick_carver":{"name":"Hurtig skærer","description":"Løs Rektangler på 19×19 på under ti minutter."}},"status":{"drag":"{w}×{h} "},"action":{"e":{"label":"Viskelæder","title":"Træk over et område for at fjerne stregerne inden i det, eller klik på en streg for at fjerne den (E)"}}},"samegame":{"name":"SameGame","alsoKnownAs":"Clickomania","description":"Ryd brættet ved at fjerne grupper af ensfarvede felter, der rører hinanden.","preset":{"5x5_3_colours":"5×5, 3 farver","10x5_3_colours":"10×5, 3 farver","15x10_3_colours":"15×10, 3 farver","15x10_4_colours":"15×10, 4 farver","20x15_4_colours":"20×15, 4 farver"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"no_of_colours":{"name":"Antal farver"},"scoring_system":{"name":"Pointsystem","choice":{"n_1_2":"(n-1)^2","n_2_2":"(n-2)^2"}},"ensure_solubility":{"name":"Garantér løsbarhed"}},"achievement":{"avalanche":{"name":"Lavine","description":"Fjern en gruppe på 25 felter eller flere på én gang, og ryd så brættet."},"no_pairs":{"name":"Ingen par tilladt","description":"Ryd et bræt på 15×10 eller større uden nogensinde at fjerne et par."},"last_one":{"name":"Det sidste felt","description":"Sid fast med kun ét felt tilbage på brættet."}},"status":{"score":"Point: {n}","complete":"Brættet er ryddet! {score}","stuck":"Ingen træk tilbage. {score}","selected":"{score} · Valgt: {n} (+{points})"}},"signpost":{"name":"Vejskilt","description":"Forbind felterne til én nummereret sti, hvor hvert skridt følger en pil.","preset":{"4x4":"4×4","4x4_free_ends":"4×4, frie ender","5x5":"5×5","5x5_free_ends":"5×5, frie ender","6x6":"6×6","7x7":"7×7"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"start_and_end_in_corners":{"name":"Start og slut i hjørnerne"}},"achievement":{"unbroken":{"name":"Ubrudt kæde","description":"Løs et Vejskilt uden nogensinde at fjerne eller erstatte en forbindelse."},"in_order":{"name":"Lige igennem","description":"Løs et Vejskilt på 6×6 eller større ved at forbinde stien i rækkefølge, fra 1 til stjernen."},"star_first":{"name":"Ønsk dig noget","description":"Lav din allerførste forbindelse ind i stjernen, og løs så puslespillet."}},"action":{"b":{"label":"Bryd","title":"Klik på et felt for at bryde hele dets kæde op (B)"}}},"singles":{"name":"Singles","alsoKnownAs":"Hitori","description":"Farv felter sorte, så intet tal gentages i en række eller kolonne, uden at gitteret deles.","preset":{"5x5_easy":"5×5 Let","5x5_tricky":"5×5 Drilsk","6x6_easy":"6×6 Let","6x6_tricky":"6×6 Drilsk","8x8_easy":"8×8 Let","8x8_tricky":"8×8 Drilsk","10x10_easy":"10×10 Let","10x10_tricky":"10×10 Drilsk","12x12_easy":"12×12 Let","12x12_tricky":"12×12 Drilsk"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"difficulty":{"name":"Sværhedsgrad","choice":{"easy":"Let","tricky":"Drilsk"}}},"achievement":{"no_circles":{"name":"Ingen ringe nødvendige","description":"Løs Singles på 8×8 eller større uden at sætte ring om et eneste tal."},"sure_hand":{"name":"Sikker hånd","description":"Løs Singles på 10×10 eller større uden at få et sortlagt felt tilbage."}}},"sixteen":{"name":"Seksten","description":"Skub hele rækker og kolonner rundt i gitteret, indtil brikkerne står i rækkefølge.","preset":{"3x3":"3×3","4x3":"4×3","4x4":"4×4","5x4":"5×4","5x5":"5×5"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"number_of_shuffling_moves":{"name":"Antal blandetræk"}},"achievement":{"lean_slides":{"name":"Sparsom skubber","description":"Sæt 4×4 i orden på 100 skub eller færre."},"five_in_200":{"name":"Stor sorterer","description":"Sæt 5×5 i orden på 200 skub eller færre."},"round_the_doughnut":{"name":"Hele vejen rundt","description":"Skub én linje hele vejen rundt, til den er tilbage, hvor den startede."}}},"slant":{"name":"Skråstreger","alsoKnownAs":"Gokigen Naname","description":"Tegn en diagonal i hvert felt, så tallene passer, og der ikke opstår løkker.","preset":{"5x5_easy":"5×5 Let","5x5_hard":"5×5 Svær","8x8_easy":"8×8 Let","8x8_hard":"8×8 Svær","12x10_easy":"12×10 Let","12x10_hard":"12×10 Svær"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"difficulty":{"name":"Sværhedsgrad","choice":{"easy":"Let","hard":"Svær"}}},"achievement":{"no_loops":{"name":"Løkkefri","description":"Løs Skråstreger på 8×8 eller større uden nogensinde at lukke en løkke."},"steady_hand":{"name":"Ingen tvivl","description":"Løs Skråstreger på 12×10 uden at gå tilbage og ændre en streg."}}},"solo":{"name":"Solo","alsoKnownAs":"Sudoku","description":"Udfyld gitteret, så hver række, kolonne og blok rummer hvert ciffer én gang.","preset":{"4x4_very_easy":"4×4 Meget let","6x6_easy":"6×6 Let","9x9_very_easy":"9×9 Meget let","9x9_easy":"9×9 Let","9x9_x_diagonal_easy":"9×9 Let X","9x9_medium":"9×9 Middel","9x9_hard":"9×9 Svær","9x9_x_diagonal_hard":"9×9 Svær X","9x9_expert":"9×9 Ekspert","9x9_extreme":"9×9 Ekstrem","9x9_killer":"9×9 Killer","9x9_jigsaw_easy":"9×9 Jigsaw Let","9x9_jigsaw_x_diagonal_easy":"9×9 Jigsaw Let X","9x9_jigsaw_hard":"9×9 Jigsaw Svær","12x12_easy":"12×12 Let","16x16_easy":"16×16 Let"},"config":{"columns_of_sub_blocks":{"name":"Kolonner af underblokke"},"rows_of_sub_blocks":{"name":"Rækker af underblokke"},"x_require_every_number_in_each_main_diagonal":{"name":"\\"X\\" (kræv hvert tal i hver hoveddiagonal)"},"jigsaw_irregularly_shaped_sub_blocks":{"name":"Jigsaw (uregelmæssigt formede underblokke)"},"killer_digit_sums":{"name":"Killer (ciffersummer)"},"symmetry":{"name":"Symmetri","choice":{"none":"Ingen","2_way_rotation":"2-vejs rotation","4_way_rotation":"4-vejs rotation","2_way_mirror":"2-vejs spejling","2_way_diagonal_mirror":"2-vejs diagonal spejling","4_way_mirror":"4-vejs spejling","4_way_diagonal_mirror":"4-vejs diagonal spejling","8_way_mirror":"8-vejs spejling"}},"difficulty":{"name":"Sværhedsgrad","choice":{"very_easy":"Meget let","easy":"Let","medium":"Middel","hard":"Svær","expert":"Ekspert","extreme":"Ekstrem"}}},"action":{"m":{"label":"Noter","title":"Notér alle muligheder med blyant i hvert tomt felt (M)"},"l":{"label":"Fremhæv","title":"Fremhæv alle felter med det ciffer, du sidst rørte (L)"}},"achievement":{"pen_only":{"name":"Pen, ikke blyant","description":"Løs en 9×9 Solo på Middel, Killer eller sværere uden en eneste blyantsnote."},"no_second_thoughts":{"name":"Ingen fortrydelse","description":"Løs en 9×9 på Ekspert eller sværere uden nogensinde at ændre eller rydde et ciffer."}}},"tents":{"name":"Telte","alsoKnownAs":"Tents and Trees","description":"Slå et telt op ved hvert træ, uden at to telte rører hinanden.","preset":{"8x8_easy":"8×8 Let","8x8_tricky":"8×8 Drilsk","10x10_easy":"10×10 Let","10x10_tricky":"10×10 Drilsk","15x15_easy":"15×15 Let","15x15_tricky":"15×15 Drilsk"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"difficulty":{"name":"Sværhedsgrad","choice":{"easy":"Let","tricky":"Drilsk"}}},"achievement":{"no_grass":{"name":"Perfekt slået op","description":"Løs Telte på 10×10 eller større uden at markere et eneste felt som græs."},"no_strikes":{"name":"Glade campister","description":"Løs Telte på 15×15 uden nogensinde at tage et telt ned."}}},"towers":{"name":"Tårne","alsoKnownAs":"Skyskrabere, Skyscrapers","description":"Byg tårne, så hver ledetråd langs kanten tæller de tårne, man kan se derfra.","preset":{"4x4_easy":"4×4 Let","5x5_easy":"5×5 Let","5x5_hard":"5×5 Svær","6x6_easy":"6×6 Let","6x6_hard":"6×6 Svær","6x6_expert":"6×6 Ekspert","6x6_extreme":"6×6 Ekstrem"},"config":{"grid_size":{"name":"Gitterstørrelse"},"difficulty":{"name":"Sværhedsgrad","choice":{"easy":"Let","hard":"Svær","expert":"Ekspert","extreme":"Ekstrem"}}},"action":{"m":{"label":"Noter","title":"Notér alle muligheder med blyant i hvert tomt felt (M)"},"l":{"label":"Fremhæv","title":"Fremhæv alle felter med det ciffer, du sidst rørte (L)"}},"achievement":{"no_pencil":{"name":"Skyline i hovedet","description":"Løs Tårne på 6×6 uden at skrive en eneste blyantsnote."},"clean_build":{"name":"Bygget til at holde","description":"Løs Tårne på 6×6 Ekspert eller Ekstrem uden at gå tilbage og ændre et tårn."},"tallest_first":{"name":"De højeste først","description":"Byg alle de højeste tårne før alle andre, og løs så gitteret."}}},"tracks":{"name":"Spor","alsoKnownAs":"Train Tracks","description":"Læg én sammenhængende jernbane fra indgangen til udgangen, så tallene passer.","preset":{"8x8_easy":"8×8 Let","8x8_tricky":"8×8 Drilsk","10x8_easy":"10×8 Let","10x8_tricky":"10×8 Drilsk","10x10_easy":"10×10 Let","10x10_tricky":"10×10 Drilsk","15x10_easy":"15×10 Let","15x10_tricky":"15×10 Drilsk","15x15_easy":"15×15 Let","15x15_tricky":"15×15 Drilsk"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"difficulty":{"name":"Sværhedsgrad","choice":{"easy":"Let","tricky":"Drilsk"}},"disallow_consecutive_1_clues":{"name":"Forbyd 1-ledetråde ved siden af hinanden"}},"achievement":{"no_crosses":{"name":"Intet streget ud","description":"Løs Spor på 10×10 eller større uden at krydse et felt eller en side ud."},"no_lift":{"name":"Fuld damp frem","description":"Løs Spor på 15×10 eller større uden nogensinde at tage en skinne op, du har lagt."},"long_haul":{"name":"Den lange strækning","description":"Læg skinner gennem ti felter i ét træk, og gør så linjen færdig."}},"action":{"e":{"label":"Viskelæder","title":"Klik eller træk for at viske felter helt rene (E)"}}},"twiddle":{"name":"Drej","description":"Drej kvadratiske blokke af brikker for at få tallene i rækkefølge igen.","preset":{"3x3_rows_only":"3×3 kun rækker","3x3_normal":"3×3 normal","3x3_orientable":"3×3 med retning","4x4_normal":"4×4 normal","4x4_orientable":"4×4 med retning","4x4_rotating_3x3_blocks":"4×4, roterende 3×3-blokke","5x5_rotating_3x3_blocks":"5×5, roterende 3×3-blokke","6x6_rotating_4x4_blocks":"6×6, roterende 4×4-blokke"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"rotating_block_size":{"name":"Størrelse på roterende blok"},"one_number_per_row":{"name":"Ét tal pr. række"},"orientation_matters":{"name":"Retningen tæller"},"number_of_shuffling_moves":{"name":"Antal blandetræk"}},"achievement":{"few_turns":{"name":"Tyve drej","description":"Løs en 3×3 normal Drej på 20 drej eller færre."},"perfect_ten":{"name":"Perfekt ti","description":"Løs en 3×3 normal Drej på 10 drej eller færre."},"dizzy":{"name":"Rundt og rundt","description":"Drej én blok samme vej fire gange i træk, og løs så puslespillet."}},"action":{"t":{"label":"Med uret","title":"Byt om på retningerne: klik drejer med uret, højreklik mod uret (T)"}}},"undead":{"name":"Udøde","alsoKnownAs":"Haunted Mirror Maze","description":"Placér spøgelser, vampyrer og zombier, så det, spejlene viser, passer.","preset":{"4x4_easy":"4×4 Let","4x4_normal":"4×4 Normal","4x4_tricky":"4×4 Drilsk","5x5_easy":"5×5 Let","5x5_normal":"5×5 Normal","5x5_tricky":"5×5 Drilsk","7x7_easy":"7×7 Let","7x7_normal":"7×7 Normal"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"difficulty":{"name":"Sværhedsgrad","choice":{"easy":"Let","normal":"Normal","tricky":"Drilsk"}}},"keypad":{"g":"Spøgelse","v":"Vampyr","z":"Zombie"},"achievement":{"no_pencil":{"name":"Stol på dine øjne","description":"Løs Udøde på 5×5 eller større uden at lave en eneste blyantsnote."},"fearless":{"name":"Frygtløs","description":"Løs en Drilsk Udøde uden at gå tilbage og ændre et monster."}},"action":{"s":{"label":"Sigtelinjer","title":"Følg sigtelinjerne gennem et felt eller fra et kanttal (S)"}}},"unequal":{"name":"Ulighed","alsoKnownAs":"Futoshiki","description":"Udfyld det latinske kvadrat, så alle ulighedstegn passer.","preset":{"4x4_easy":"4×4 Let","5x5_easy":"5×5 Let","5x5_medium":"5×5 Middel","5x5_medium_adjacent":"5×5 Middel (Naboer)","5x5_hard":"5×5 Svær","6x6_easy":"6×6 Let","6x6_medium":"6×6 Middel","6x6_medium_adjacent":"6×6 Middel (Naboer)","6x6_hard":"6×6 Svær","7x7_medium":"7×7 Middel","7x7_medium_adjacent":"7×7 Middel (Naboer)","7x7_hard":"7×7 Svær"},"config":{"mode":{"name":"Tilstand","choice":{"unequal":"Ulighed","adjacent":"Naboer"}},"size_s_s":{"name":"Størrelse (s*s)"},"difficulty":{"name":"Sværhedsgrad","choice":{"very_easy":"Meget let","easy":"Let","medium":"Middel","hard":"Svær","extreme":"Ekstrem"}}},"action":{"m":{"label":"Noter","title":"Notér alle muligheder med blyant i hvert tomt felt (M)"},"h":{"label":"Tip","title":"Notér de muligheder, som simpel logik efterlader (H)"},"l":{"label":"Fremhæv","title":"Fremhæv alle felter med det ciffer, du sidst rørte (L)"}},"achievement":{"adjacent_bare":{"name":"Naboen","description":"Løs Ulighed i Naboer-tilstand uden at skrive en eneste blyantsnote."},"extreme_bare":{"name":"Alt i hovedet","description":"Løs en Ekstrem Ulighed uden at skrive en eneste blyantsnote."}}},"unruly":{"name":"Uregerlig","alsoKnownAs":"Binairo, Takuzu","description":"Farv hvert felt sort eller hvidt med lige mange af hver i hver linje og aldrig tre ens i træk.","preset":{"8x8_easy":"8×8 Let","8x8_normal":"8×8 Normal","10x10_easy":"10×10 Let","10x10_normal":"10×10 Normal","14x14_easy":"14×14 Let","14x14_normal":"14×14 Normal"},"config":{"width":{"name":"Bredde"},"height":{"name":"Højde"},"unique_rows_and_columns":{"name":"Entydige rækker og kolonner"},"difficulty":{"name":"Sværhedsgrad","choice":{"easy":"Let","normal":"Normal"}}},"achievement":{"no_threes":{"name":"Aldrig tre","description":"Løs Uregerlig på 10×10 eller større uden nogensinde at lave tre på stribe."},"first_time":{"name":"Sort på hvidt","description":"Løs Uregerlig på 14×14 uden at gå tilbage og ændre et felt."}},"action":{"e":{"label":"Viskelæder","title":"Klik på et felt for at rydde det (E)"}}},"untangle":{"name":"Optrævl","alsoKnownAs":"Planarity","description":"Træk punkterne rundt, indtil ingen streger krydser hinanden.","preset":{"6_points":"6 punkter","10_points":"10 punkter","15_points":"15 punkter","20_points":"20 punkter","25_points":"25 punkter"},"config":{"number_of_points":{"name":"Antal punkter"}},"action":{"g":{"label":"Fanggitter","title":"Lad punkter, du slipper, fanges af et gitter (G)"}},"achievement":{"one_touch":{"name":"Let på hånden","description":"Optrævl 10 punkter eller flere uden at tage fat i det samme punkt to gange."},"only_downhill":{"name":"Kun ned ad bakke","description":"Optrævl 20 punkter eller flere, uden at et træk nogensinde giver flere røde streger."}}}}`),$=JSON.parse('{"blackbox":{"step1":{"text":"Én kugle gemmer sig i denne 4×4-boks. Skyd lasere ind fra prikkerne langs kanten, regn ud hvor den må være, markér den, og tryk på knappen i hjørnet."},"step2":{"text":"Klik på prikken på **venstre kant ud for anden række**. Strålen bøjes undervejs og kommer ud et andet sted; begge ender får samme tal."},"step3":{"text":"Skyd nu fra prikken **øverst i anden kolonne**. Et **H** betyder, at strålen ramte en kugle direkte og aldrig kom ud."},"step4":{"text":"Skyd også fra prikken **øverst i første kolonne**. Et **R** betyder, at strålen røg lige ud igen — det sker, når en kugle ligger diagonalt ved siden af porten."},"step5":{"text":"R\'et placerer en kugle diagonalt ved første kolonne, og H\'et placerer en lige ned ad den anden: kun dette felt opfylder begge dele."},"step6":{"text":"**Klik på det felt** for at markere din kugle der."},"step7":{"text":"Alle kugler er markeret, så **fluebenet i øverste venstre hjørne** er aktivt. Klik på det for at få dit svar tjekket."},"step8":{"text":"Rigtigt! Undervejs kan du **højreklikke** på et felt for at låse det, når du er sikker på, at det er tomt, og **Løs** afslører svaret."}},"bridges":{"step1":{"text":"Tallet på en ø siger, hvor mange broender den vil have. Forbind alle øer til ét netværk, med højst to broer mellem to øer og ingen broer, der krydser hinanden."},"step2":{"text":"**2-tallet nederst** har kun én ø på linje med sig: **4-tallet** øverst. **Træk** fra 2-tallet mod 4-tallet for at slå en bro."},"step3":{"text":"Den vil have to broender, og det par er det eneste sted, de kan ligge. **Træk** samme vej igen for endnu en parallel bro."},"step4":{"text":"Den ø er færdig. **Klik** på den for at markere den som færdig: den bliver grå, og dens broer låses, så du ikke kommer til at rykke ved dem."},"step5":{"text":"Ingen bro må krydse en anden, så linjen mellem **de to 1-taller** er død nu. **Højreklik og træk** fra det venstre 1-tal mod det højre for at notere det."},"step6":{"text":"Hvert 1-tal har nu kun én udvej, og de fire sidste broer følger af det. **Løs** gør puslespillet færdigt (og **G** viser alle linjer, en bro kunne følge).","textTouch":"Hvert 1-tal har nu kun én udvej, og de fire sidste broer følger af det. **Løs** gør puslespillet færdigt."}},"cube":{"step1":{"text":"Terningen har seks sider, og seks felter er malet blå. Rul den rundt, til hver side har samlet ét: hver gang den lander, bytter den nederste side og feltet farve."},"step2":{"text":"Et klik vipper terningen over kanten mod det felt, du vælger. **Klik på det blå felt lige under terningen** for at få dets farve over på den side, der lander."},"step3":{"text":"Feltet, den forlod, er blankt nu — farverne bytter virkelig plads. **Klik på det blå felt til højre** for at gøre side nummer to blå."},"step4":{"text":"**Piletasterne** ruller også terningen. Tryk på **→** én gang for at samle det tredje blå felt op.","textTouch":"Hvert nabofelt er ét tryk væk. **Tryk på det næste blå felt til højre** for at samle det tredje blå felt op."},"step5":{"text":"Tre sider blå, tre tilbage — dette bræt kan klares på seks rul i alt, og statuslinjen tæller dem. **Fortryd** tager et rul tilbage, hvis du ruller for langt."}},"dominosa":{"step1":{"text":"Tre dominoer — 0-0, 0-1 og 1-1 — lå her og blev fjernet igen, så kun tallene står tilbage. Del gitteret op i par, så hver af dem kommer tilbage præcis én gang."},"step2":{"text":"Ingen domino må bruges to gange. Hvis dette **0** blev parret med **1-tallet** under det, ville begge yderkolonner blive en 0-1, så **højreklik** mellem dem for at notere, at de ikke er et par."},"step3":{"text":"De eneste to **0**-taller, der rører hinanden, er parret i øverste venstre hjørne, så der skal 0-0 ligge. **Klik på grænsen mellem dem** for at lægge den."},"step4":{"text":"På samme måde er de eneste **1**-taller, der rører hinanden, de to nederst til venstre. Klik på grænsen mellem dem for at lægge 1-1."},"step5":{"text":"Så er der kun højre kolonne tilbage til 0-1. Klik på grænsen mellem dens to tal for at gøre det færdigt."},"step6":{"text":"Hver domino brugt én gang. Klik på en domino igen for at tage den op, en gentaget domino tegnes med rødt, og **Fortryd** går tilbage gennem dine træk."}},"fifteen":{"step1":{"text":"Skub de nummererede brikker ind i det tomme felt, til de står **1 til 8** i rækkefølge med hullet i nederste højre hjørne. Dette lille bræt er to træk fra at være færdigt."},"step2":{"text":"Alle brikker i samme række eller kolonne som hullet kan skubbes. Klik på **5-tallet** for at skubbe det op i hullet."},"step3":{"text":"Én mere. Klik på **8-tallet** for at gøre rækken færdig."},"step4":{"text":"Løst! **Fortryd** og **Gentag** går gennem dine træk, og **Nyt** i pausemenuen giver et friskt puslespil. Piletasterne skubber også en brik ind i hullet, i pilens retning.","textTouch":"Løst! **Fortryd** og **Gentag** går gennem dine træk, og **Nyt** i pausemenuen giver et friskt puslespil. En hel række eller kolonne skubbes på én gang, så sigt efter den fjerneste brik."}},"filling":{"step1":{"text":"Skriv et ciffer i hvert tomt felt, så hver sammenhængende blok af ens cifre dækker præcis så mange felter, som cifferet siger."},"step2":{"text":"**3-tallet** nederst i midterkolonnen kan kun vokse opad, så dens blok er hele kolonnen. **Træk** fra kolonnens øverste felt ned til det midterste, og tryk så på **3**.","textTouch":"**3-tallet** nederst i midterkolonnen kan kun vokse opad. **Træk** fra kolonnens øverste felt ned til det midterste, og tryk så på **3** på tasterne."},"step3":{"text":"**2-tallet** i venstre kolonne mangler én makker, og feltet over det er det eneste ledige. Klik på det felt, og tryk på **2**.","textTouch":"**2-tallet** i venstre kolonne mangler én makker, og feltet over det er det eneste ledige. Tryk på det felt, og tryk så på **2** på tasterne."},"step4":{"text":"Ét felt tilbage. Klik på det, og tryk på **1** for at se, hvordan et forkert ciffer ser ud.","textTouch":"Ét felt tilbage. Tryk på det, og tryk så på **1** på tasterne for at se, hvordan et forkert ciffer ser ud."},"step5":{"text":"Rødt betyder umuligt: de to **1**-taller rører hinanden og ville danne en blok på to, og **2-tallet** øverst er lukket inde. Feltet er stadig valgt, så tryk på **Backspace** for at tømme det.","textTouch":"Rødt betyder umuligt: de to **1**-taller rører hinanden og ville danne en blok på to, og **2-tallet** øverst er lukket inde. Feltet er stadig valgt, så tryk på **⌫** på tasterne for at tømme det."},"step6":{"text":"Det tomme felt hører sammen med **2-tallet** over det i stedet. Klik på det, og tryk på **2** for at gøre gitteret færdigt.","textTouch":"Det tomme felt hører sammen med **2-tallet** over det i stedet. Tryk på det, og tryk så på **2** på tasterne for at gøre gitteret færdigt."},"step7":{"text":"Udfyldt! Tykke streger lukker om hver færdig blok; et **højreklik** føjer felter til en markering ét ad gangen, og **Fortryd** tager en udfyldning tilbage."}},"flip":{"step1":{"text":"Tænd alle ni felter. Når du trykker på ét, vender det **og** felterne omkring det, så tændte felter kan blive mørke igen."},"step2":{"text":"Det lille diagram inde i et felt viser, hvad det vender: den fyldte klods er feltet selv, omridsene er dets naboer."},"step3":{"text":"Så skal der tændes. Tryk på feltet **øverst til venstre**, det mørke i hjørnet."},"step4":{"text":"Hjørnet er tændt, men dets to naboer blev mørke. Tryk så på **midterfeltet**."},"step5":{"text":"Nu er kun nederste højre hjørne mørkt. Tryk på feltet **nederst til højre** for at gøre det færdigt."},"step6":{"text":"Alt er tændt! **Fortryd** tager et tryk tilbage, og du kan styre en markør med piletasterne og trykke på Enter i stedet for at klikke.","textTouch":"Alt er tændt! **Fortryd** tager et tryk tilbage, og to tryk på samme felt ophæver altid hinanden, så rækkefølgen er ligegyldig."}},"flood":{"step1":{"text":"Du ejer feltet øverst til venstre og alt, der hænger sammen med det i samme farve. Hvert træk maler den plet om, så tilstødende felter i den nye farve slutter sig til. Gør hele gitteret ensfarvet inden for grænsen på **fire træk**."},"step2":{"text":"Din plet er indtil videre kun det blå hjørne. Klik på det **røde** felt ved siden af: pletten bliver rød, og alle røde felter, den rører, kommer med."},"step3":{"text":"Klik nu på et **blåt** felt i kanten af din plet. En velvalgt farve kan brede sig langt hen over gitteret på ét træk."},"step4":{"text":"Kun **grøn** er tilbage uden for din plet. Ét klik mere tager resten af gitteret med."},"step5":{"text":"Tre træk ud af fire — statuslinjen holder tællingen. Løber du tør, før gitteret er ensfarvet, er runden tabt. Sidder du fast? Et **Tip** spiller én god farve for dig, og **Løs** gør gitteret færdigt som en autoløsning."}},"galaxies":{"step1":{"text":"To prikker, altså to galakser. Tegn mure langs gitterlinjerne, så hver prik ender i midten af sit eget område: drej et område 180° om dets prik, og det skal lande præcis på sig selv."},"step2":{"text":"Den venstre prik sidder på en linje mellem to felter, så dens galakse må være de to venstre kolonner. **Klik** på gitterlinjen lige til højre for dem i **øverste række**."},"step3":{"text":"Prikker fungerer også som notesblok. **Træk** fra den højre prik ind i **feltet øverst til højre** for at efterlade en pil, der markerer feltet som en del af dens galakse."},"step4":{"text":"Tilbage til muren: **klik** på den samme gitterlinje én række længere nede, i **midterste række**."},"step5":{"text":"Ét stykke mangler, i **nederste række**. **Klik** på det for at lukke begge galakser."},"step6":{"text":"Begge områder er skraverede, så begge er rigtige. **Løs** tegner en hel løsning, og et klik på en mur visker den ud igen."}},"guess":{"step1":{"text":"To pinde gemmer sig bag spørgsmålstegnene — en kombination af tre mulige farver. Gæt en række, læs de mærker den giver, og indsnævr mulighederne."},"step2":{"text":"**Træk** den øverste farve ud af bakken, og slip den i **det venstre hul** i rækken med pilen."},"step3":{"text":"Du kan også vælge en farve først og klikke i hullerne med den. Klik på **den anden farve** i bakken."},"step4":{"text":"Klik nu på **det højre hul** for at lægge farven i."},"step5":{"text":"Rækken er fuld, så **den stiplede kasse** til højre lyser op. Klik på den for at få gættet bedømt."},"step6":{"text":"To **hule** mærker betyder, at begge farver er med i svaret, men ingen af dem står rigtigt — et fyldt mærke ville være rigtig farve på rigtig plads. Byt om på dem, og send gættet igen."},"step7":{"text":"Løst! **Løs** giver op og viser svaret, og **L**-tasten sætter bogstaver på pindene, hvis farverne er svære at skelne.","textTouch":"Løst! **Løs** giver op og viser svaret, og **Behold** ved siden af Fortryd holder en pind, du stoler på, på plads til dit næste gæt."}},"inertia":{"step1":{"text":"Du er kuglen i øverste venstre hjørne, og der er **tre ædelstene** at samle. Når kuglen først ruller, standser den kun ved en mur eller et stop — og en mine slår den ihjel."},"step2":{"text":"Klik på et felt til **højre** for kuglen. Den ruller den vej, indtil brættets kant stopper den, og samler ædelstenen op undervejs."},"step3":{"text":"Klik nu **under** kuglen. Den tager den næste ædelsten, og den brudte ring to felter nede — et stop — bringer den til standsning."},"step4":{"text":"Pas på: den piggede tingest lige under kuglen er en **mine**. Ruller du ind på en, er spillet slut, og kun Fortryd redder dig ud."},"step5":{"text":"Gå **diagonalt** i stedet: klik på feltet to ned og to til venstre, så glider kuglen forbi minen hen til den sidste ædelsten."},"step6":{"text":"Alle tre ædelstene — færdig! **Fortryd** spoler et mislykket rul tilbage; piletasterne ruller lige, og Home, Page Up, End og Page Down ruller diagonalt.","textTouch":"Alle tre ædelstene — færdig! **Fortryd** spoler et mislykket rul tilbage, og du kan også trykke uden for gitteret, hvilket hjælper, når kuglen ligger op ad en kant."}},"keen":{"step1":{"text":"Udfyld med 1, 2 og 3, så hvert tal optræder én gang i hver række og kolonne, og så cifrene i hvert kraftigt optegnet bur passer med burets regnestykke."},"step2":{"text":"**2×**-buret ganger op til 2, så dets cifre er 1, 1 og 2. Et bur må gentage et ciffer, men ikke i samme række eller kolonne, så 2-tallet hører til i hjørnet: klik på det felt, og tast **2**.","textTouch":"**2×**-buret ganger op til 2, så dets cifre er 1, 1 og 2. 2-tallet hører til i hjørnet: tryk på det felt, og tryk så på **2** på tasterne."},"step3":{"text":"Burets to andre felter er 1-tallerne. Klik på feltet **til højre for 2-tallet**, og tast **1**.","textTouch":"Burets to andre felter er 1-tallerne. Tryk på feltet **til højre for 2-tallet**, og tryk så på **1** på tasterne."},"step4":{"text":"Øverste række har allerede sit 2-tal og sit 1-tal, så det sidste felt må være 3-tallet. Klik på **feltet øverst til højre**, og tast **3**.","textTouch":"Øverste række har allerede sit 2-tal og sit 1-tal, så det sidste felt må være 3-tallet. Tryk på **feltet øverst til højre**, og tryk så på **3** på tasterne."},"step5":{"text":"Er du kun ved at gætte på et felt? **Højreklik** på midterfeltet, og tast **3** for at notere cifferet med blyant i stedet for at skrive det ind.","textTouch":"Er du kun ved at gætte på et felt? **Tryk længe** på midterfeltet, og tryk på **3** for at notere cifferet i stedet for at skrive det ind. **✎**-tasten gør det samme for et felt, du har trykket på."},"step6":{"text":"Regn resten ud på samme måde; et ciffer, der gentages i sin række eller kolonne, bliver rødt, og det samme gør et fyldt bur, der ikke rammer sin ledetråd. I pausemenuen sætter **Noter** alle muligheder ind med blyant for dig, og **Løs** afslører svaret."}},"lightup":{"step1":{"text":"Alle hvide felter skal ende med at være oplyst. En pære lyser sin egen række og kolonne op, indtil et sort felt spærrer for strålen, og ingen pære må stå i en andens lys."},"step2":{"text":"Et tal siger, hvor mange pærer der rører det sorte felt. Dette **2-tal** har kun to hvide naboer, så begge skal have en pære: klik på den til **højre**."},"step3":{"text":"Læg mærke til det gule skær, der breder sig langs strålen. Klik nu på feltet lige **under** 2-tallet for at sætte pære nummer to."},"step4":{"text":"Et **0** rører slet ingen pærer. **Højreklik** på feltet over det for at sætte et kryds: det minder dig bare om, at der ikke kan stå en pære."},"step5":{"text":"**1-tallet** vil have præcis én pære. Feltet under det er allerede oplyst, så en pære der ville stå i strålen — klik på feltet til **venstre** for 1-tallet i stedet."},"step6":{"text":"To felter i øverste række er stadig mørke, og du har krydset det ene af. Klik på **det andet**."},"step7":{"text":"Alle felter oplyst, alle tal tilfredse! **Fortryd** tager en pære tilbage, og piletasterne sammen med Enter og mellemrum sætter pærer og krydser uden mus.","textTouch":"Alle felter oplyst, alle tal tilfredse! **Fortryd** tager en pære tilbage, og et langt tryk krydser ethvert felt af, som du har udelukket."}},"loopy":{"step1":{"text":"Tegn **én** lukket løkke langs de svage streger mellem prikkerne. Hvert tal fortæller, hvor mange af sit felts fire sider løkken bruger."},"step2":{"text":"Midterfeltet er mærket **4**, så alle fire sider er med i løkken. **Klik** på dets øverste side for at tegne den første streg."},"step3":{"text":"Og nu dets **venstre side**. Klikker du på en streg igen, viskes den ud."},"step4":{"text":"Hver prik har enten to streger eller ingen, og prikken hvor de to mødes, er fuld. **Højreklik** på stregen op derfra for at strege den ud som ubrugelig."},"step5":{"text":"To sider tilbage. **Klik** på midterfeltets nederste side."},"step6":{"text":"Og den **højre side** lukker den. Én løkke, ingen løse ender, og de fire **0**’er holder sig helt fri."},"step7":{"text":"Løst. **Fortryd** går tilbage gennem dine streger, og **Type** i pausemenuen bytter felterne ud med trekanter, sekskanter og endnu mærkeligere mønstre."}},"magnets":{"step1":{"text":"Hver domino er enten en magnet med en **+**-halvdel og en **−**-halvdel, eller også er den tom. Tallene tæller **+**-polerne (foroven og til venstre) og **−**-polerne (forneden og til højre) i hver linje, og ens poler må aldrig røre hinanden."},"step2":{"text":"Nederste række skal have tre **−**-poler, og kun tre dominoer når ned i den, så hver må give én. **Venstreklik** på den øverste halvdel af den stående domino for at gøre den **+**, så dens **−** ryger nedenunder."},"step3":{"text":"Så er den brede domino nederst til højre også en magnet, og **0**’et over sidste kolonne forbyder et **+** der. **Venstreklik** på dens venstre halvdel for at lægge **+** på den side."},"step4":{"text":"Fjerde kolonne har nu sit ene **+** og skal slet ingen **−** have, så dominoen ovenover kan ikke være nogen af delene. **Højreklik** på den for at markere den som tom."},"step5":{"text":"Øverste række mangler stadig et **+** og et **−** fra den brede domino til venstre. Dens højre halvdel rører et **+**, og ens poler må ikke røre hinanden — så **venstreklik** på dens venstre halvdel."},"step6":{"text":"Én domino tilbage. Første kolonne har brugt sit **+** øverst, så **+**’et her hører til i højre side: **venstreklik** på den højre halvdel for at gøre det færdigt."},"step7":{"text":"Løst! Klikker du på samme halvdel igen, vendes magneten om, et andet højreklik efterlader spørgsmålstegn til at notere \\"magnet, men hvilken vej?\\", og **Fortryd** går tilbage."}},"map":{"step1":{"text":"Farv hvert område, så to områder med et stykke fælles grænse aldrig får samme farve. Fire farver er altid nok, og tre områder her er stadig tomme."},"step2":{"text":"Tag først en farve op: **klik** på den **blå farveprøve**, nummer to i rækken under kortet."},"step3":{"text":"Med en farve i hånden kan du **højreklikke** på et tomt område for at notere en prik i den farve — en note om, at området *måske* har den farve. Prøv det på det høje område i højre side."},"step4":{"text":"Det er mere end et måske: området grænser allerede op til rød, grøn og gul, så blå er det eneste tilbage. **Klik** på det for at farve det."},"step5":{"text":"Du kan også **trække** en farve fra ét område over i et andet. Det store område øverst rører nu rød, grøn og blå, så **træk** gul op til det fra det lille område nederst."},"step6":{"text":"Ét tomt område tilbage, i **nederste venstre hjørne**: det grænser op til grøn, blå og den nye gule, så det må være rødt. **Træk** rød ned til det fra området i øverste højre hjørne."},"step7":{"text":"Færdig — et sammenstød ville have vist et rødt **!** på grænsen mellem de to områder. **Fortryd** går tilbage, og piletasterne med **1**–**4** farver helt uden mus.","textTouch":"Færdig — et sammenstød ville have vist et rødt **!** på grænsen mellem de to områder. **Fortryd** går tilbage, og viskelæderet for enden af rækken renser et område, du har ombestemt dig om."}},"mines":{"step1":{"text":"Hvert tal tæller minerne i de otte felter, der rører det. To miner gemmer sig under den tildækkede klump; afdæk alt andet uden at træde på en af dem."},"step2":{"text":"Dette **1**-tal rører kun ét tildækket felt, så det felt er en mine. **Højreklik** på det for at plante et flag."},"step3":{"text":"**1**-tallet nedenunder har nu sin ene mine markeret, så resten af naboerne er sikre. **Venstreklik på det 1-tal** for at åbne dem alle på én gang."},"step4":{"text":"**2**-tallet over klumpen tæller allerede ét flag og har kun ét tildækket felt tilbage. **Højreklik** på det felt."},"step5":{"text":"Begge miner er markeret, så det sidste tildækkede felt må være sikkert. **Venstreklik** på det for at gøre gitteret færdigt."},"step6":{"text":"Ryddet. Et andet højreklik tager flaget af igen, og **Fortryd** redder dig, hvis du kommer til at træde på en mine."}},"net":{"step1":{"text":"Hver brik bærer et stykke ledning, og hele nettet er drejet tilfældigt rundt. Drej brikkerne, indtil alle ni hænger på den markerede brik i midten: **blå** ledninger har strøm, de grå har ikke."},"step2":{"text":"Brikken nederst til venstre peger sin ledning lige ind i væggen. **Venstreklik** på den for en kvart omgang mod uret, så ledningen når naboen til højre."},"step3":{"text":"Et **højreklik** drejer en brik den anden vej. Giv brikken nederst til højre én omgang med uret, så svinger dens ledning om til venstre."},"step4":{"text":"Midterbrikken har ledninger på alle fire sider, så den kan ikke være forkert. **Midterklik** på den for at låse den, eller slå **hængelåsen** ved siden af Fortryd til og klik på den: en låst brik er skygget og nægter at dreje.","textTouch":"Midterbrikken har ledninger på alle fire sider, så den kan ikke være forkert. Slå **hængelåsen** ved siden af Fortryd til, og tryk på brikken for at låse den: en låst brik er skygget og nægter at dreje."},"step5":{"text":"Én brik tilbage. Med **hængelåsen** slået fra **venstreklikker** du på hjørnet øverst til højre for at få dens ledning rundt til venstre og tænde hele nettet.","textTouch":"Én brik tilbage. Med **hængelåsen** slået fra trykker du på hjørnet øverst til højre for at få dens ledning rundt til venstre og tænde hele nettet."},"step6":{"text":"Alle ni brikker har strøm. **Fortryd** går tilbage gennem dine drejninger; på tastaturet flytter piletasterne en markør, og **A**, **D** og **F** drejer brikken under den.","textTouch":"Alle ni brikker har strøm. **Fortryd** går tilbage gennem dine drejninger, en lås på en brik du er sikker på holder den fri af forkerte tryk, og **Bland** snurrer alle ulåste brikker rundt igen."}},"netslide":{"step1":{"text":"Hvert stykke ledning skal ende med at hænge sammen med strømkilden. Blå ledninger har strøm, de grå har ikke."},"step2":{"text":"Kilden sidder på midterbrikken. Den brik flytter sig aldrig, så den midterste række og kolonne har ingen pile — alt andet kan skubbes rundt."},"step3":{"text":"Klik på pilen til **venstre for nederste række** for at skubbe rækken ét skridt til venstre; ledningen, der falder af, dukker op igen i højre side."},"step4":{"text":"Nederste række hænger sammen nu, men den er stadig grå: intet forbinder den opad til kilden endnu."},"step5":{"text":"**Højreklik** på pilen **over tredje kolonne**. Et højreklik vender pilen om, så kolonnen skubbes nedad, og de sidste ledninger tændes."},"step6":{"text":"Alt har strøm! **Løs** viser et svar, hvis du sidder fast, og menuen **Type** har gitre, der går rundt, så ledninger løber ud ad den ene kant og ind ad den anden."}},"pattern":{"step1":{"text":"Tallene ved hver række og kolonne er længderne af dens sorte striber, i rækkefølge. Regn ud, hvilke felter der er sorte, og farv dem."},"step2":{"text":"**Tredje kolonne** siger 1 2: ét sort, et mellemrum, så to sorte. På fire felter passer det kun på én måde, med parret nederst. **Træk** ned hen over dem."},"step3":{"text":"Så er feltet over parret mellemrummet. **Højreklik** på det for at sætte en prik, som markerer et felt, du ved er hvidt."},"step4":{"text":"Og øverste felt i kolonnen er ledetrådens enlige sorte. **Klik** på det."},"step5":{"text":"**Sidste kolonne** siger 3. Uanset hvor en stribe på tre ligger i fire felter, dækker den altid de to midterste, så **træk** ned hen over dem."},"step6":{"text":"En ledetråd bliver grå, når dens linje er færdig. Bliv ved på den måde, eller lad **Løs** gøre denne færdig; et midterklik nulstiller et felt til ukendt."}},"pearl":{"step1":{"text":"Tegn én lukket løkke fra feltmidte til feltmidte. Den behøver ikke besøge hvert felt, men den skal igennem hver eneste perle."},"step2":{"text":"En **hvid perle** betyder, at løkken går lige igennem den. I øverste række er den eneste lige vej vandret, så **træk** fra feltet til venstre for perlen til feltet til højre for den."},"step3":{"text":"Perlen har nu begge sine stykker, så intet andet kan gå fra den. **Højreklik** på kanten nedenunder for at strege den side ud."},"step4":{"text":"En **sort perle** drejer, og løkken går så lige igennem feltet på hver side af den. Den på **venstre kant** kan ikke dreje nedad — det ville kræve en lige streg gennem nederste venstre hjørne — så **klik** på dens højre kant."},"step5":{"text":"Så fortsætter feltet ved siden af lige ud — og det gør den hvide perle længere ude også. **Træk** fra det felt over til fjerde kolonne."},"step6":{"text":"Arbejd videre ud fra perlerne; en perle får en rød ring i det øjeblik dens regel brydes. **Løs** tegner hele løkken, hvis du vil se den."}},"pegs":{"step1":{"text":"En pind hopper over en nabo ned i det tomme hul bagved, og pinden, den hoppede over, fjernes. Ryd dette lille bræt ned til **én pind**: tre hop."},"step2":{"text":"**Træk** pinden øverst på stilken ned over sin nabo og ned i hullet nederst."},"step3":{"text":"Du kan også klikke. Klik på **pinden til højre** for at samle den op, og klik så på hullet to felter til venstre."},"step4":{"text":"Sidste hop: træk pinden i **nederste venstre hjørne** over sin nabo ind i midten."},"step5":{"text":"Én pind tilbage — løst. **Fortryd** tager et hop tilbage, når du kører fast, og piletasterne virker også: Enter samler en pind op, og en pil skubber den af sted.","textTouch":"Én pind tilbage — løst. **Fortryd** tager et hop tilbage, hver gang du kører fast — så langt tilbage du vil."}},"range":{"step1":{"text":"Farv felter sorte, så hvert tal præcis tæller de hvide felter, dets eget felt kan se: sig selv plus hvert felt i lige linje op, ned, til venstre og til højre, indtil et sort felt eller kanten stopper det."},"step2":{"text":"**6**-tallet kan se seks felter lige nu — hele sin række plus de to nedenunder. Så intet i den række eller kolonne må blive sort."},"step3":{"text":"**2**-tallet må kun se sig selv og ét felt mere, og feltet ovenover skal blive hvidt for 6-tallets skyld. Så **klik** på feltet til venstre for det for at farve det sort."},"step4":{"text":"Så er feltet øverst til højre det ene hvide felt, 2-tallet stadig ser. **Højreklik** på det for at sætte en prik — sådan noterer du et felt, du ved bliver hvidt."},"step5":{"text":"**3**-tallet ser allerede sig selv og de to felter til venstre, så feltet til højre må være sort. **Klik** på det."},"step6":{"text":"Færdig med to sorte felter — prikkerne er kun noter. **H** udfylder ét felt, der følger af resten, og **Løs** prikker hele gitteret ud.","textTouch":"Færdig med to sorte felter — prikkerne er kun noter. **Løs** prikker hele gitteret ud, hvis du hellere vil se svaret."}},"rect":{"step1":{"text":"Del gitteret op i rektangler, så hvert rektangel rummer præcis ét tal, og det tal er antallet af felter, rektanglet dækker."},"step2":{"text":"Et rektangel må kun rumme ét tal, og **3**-tallet sidder lige under **4**-tallet — så 4-tallet må tage hele øverste række. **Træk** fra 4-tallet hen til rækkens højre ende."},"step3":{"text":"Klikker du på en enkelt gitterlinje, tilføjes eller fjernes præcis den kant. **Klik** på linjen til højre for **3**-tallet."},"step4":{"text":"Et 9-tal kan kun være en 3×3-blok, og der er ét sted tilbage til den. **Træk** hen over den fremhævede blok, fra dens øverste venstre felt til nederste højre hjørne: det lukker også 3-tallet inde."},"step5":{"text":"Hvert felt ligger i et rektangel af den rigtige størrelse. Et **højreklik og træk** visker stregerne inde i et område ud, men lader omridset stå, og **Fortryd** tager den sidste streg tilbage."}},"samegame":{"step1":{"text":"Ryd brættet ved at fjerne grupper på to eller flere felter, der rører hinanden og har samme farve. En gruppe på _n_ felter giver (_n_ − 2)² point, så det er de store, der tæller."},"step2":{"text":"Klik på et af de fire **røde** felter øverst. Klikker du første gang, markeres gruppen kun: den lysner og får et tykt omrids."},"step3":{"text":"Klik på den markerede gruppe igen for at løfte den af brættet og score fire point. Felter over et hul falder ned i det, og en tom kolonne trækker naboerne ind."},"step4":{"text":"Dette **grønne** felt står helt alene. Intet ved siden af har samme farve, så det kan aldrig markeres — det må vente, til brættet skubber en makker hen til det."},"step5":{"text":"Nu **det blå par**, der er fremhævet her. Klik på et af de to felter for at markere dem begge."},"step6":{"text":"Ombestemt dig? **Højreklik** på markeringen for at slippe den igen — intet fjernes, før du klikker på den anden gang."},"step7":{"text":"Det er hele spillet. Ethvert bræt kan ryddes, så bare fortsæt — **Fortryd** spoler tilbage, når du strander et felt, og der er ingen Løs-knap til at redde dig."}},"signpost":{"step1":{"text":"Hvert felt bærer en pil. Saml alle seks til én kæde nummereret **1 til 6**, hvor hvert felt efterfølges af et felt, der ligger et sted langs dets egen pil."},"step2":{"text":"**1**-tallet peger mod øst. **Træk** fra det over på feltet til højre, så det bliver 2-tallet."},"step3":{"text":"**3**-tallet hægtede sig selv på, som tal der følger hinanden og peger den rigtige vej, altid gør. **Træk** nu feltet nederst til højre over på feltet til venstre for det."},"step4":{"text":"Ingen af de to har et tal endnu, så parret hedder **a** og **a+1**. **Højreklik** på det midterste felt i nederste række for at rive dem fra hinanden igen."},"step5":{"text":"Rigtige tal er bedre: **træk** **3**-tallet over på feltet nedenunder, som bliver 4-tallet."},"step6":{"text":"Sidste led: **træk** det 4-tal over på feltet til venstre. Det bliver 5-tallet, og 6-tallet lukker stien af sig selv."},"step7":{"text":"Løst. Et **højreklik og træk** forbinder den anden vej, fra et felt tilbage til det foregående, og **Løs** lægger hele stien ud."}},"singles":{"step1":{"text":"Farv felter sorte, indtil intet tal gentages blandt de hvide felter i nogen række eller kolonne. To sorte felter må aldrig dele en kant, og de hvide felter skal hænge sammen i ét område."},"step2":{"text":"De to **4**-taller i denne række har ét felt imellem sig. Blev det felt sort, ville begge 4-taller være hvide, så det må selv være hvidt — **højreklik** på det for at sætte en ring om det."},"step3":{"text":"Det indringede **3**-tal er hvidt for altid, og øverst i kolonnen står der endnu et 3-tal. **Venstreklik** på det øverste for at farve det sort."},"step4":{"text":"Sorte felter rører aldrig hinanden, så **4**-tallet lige til højre for det bliver hvidt. **Venstreklik** på det andet 4-tal i den sidste kolonne."},"step5":{"text":"Samme igen: **2**-tallet lige over dit nye sorte felt er hvidt, og længst til venstre i rækken står der endnu et 2-tal. **Venstreklik** på det."},"step6":{"text":"Én tilbage. **3**-tallet over det sorte felt er hvidt, så det andet 3-tal nederst i kolonnen må væk. **Venstreklik** på det."},"step7":{"text":"Løst — og de hvide felter hænger stadig sammen. Ringe er kun noter, og **Fortryd** går tilbage gennem dine træk."}},"sixteen":{"step1":{"text":"Sæt brikkerne i rækkefølge, **1 til 9**, læst fra venstre mod højre. Pilene langs kanten skubber en hel række eller kolonne ét trin, og det, der falder ud, kommer ind i den anden ende."},"step2":{"text":"Klik på pilen **over den anden kolonne** for at skubbe kolonnen ét trin op; så er den midterste række på plads."},"step3":{"text":"Nu skal den nederste række til højre. **Højreklik** på pilen til **venstre for den nederste række** — når du højreklikker, sendes linjen den modsatte vej."},"step4":{"text":"Sidste træk. Klik på pilen til **venstre for den øverste række** for at skubbe den til venstre og gøre gitteret færdigt."},"step5":{"text":"I rækkefølge! **Type** i pausemenuen byder på større gitre, og med dens **Tilpas…** kan du få et gitter blandet med et fast antal træk, som du så skal rede ud igen."}},"slant":{"step1":{"text":"Tegn én diagonal gennem hvert felt. Et indringet tal tæller de streger, der rører dets hjørne, og stregerne må aldrig lukke en løkke."},"step2":{"text":"**0**-tallet i øverste venstre hjørne vil ikke røres af noget, så dets ene felt må hælde den anden vej. **Højreklik** på feltet for at tegne en `/`."},"step3":{"text":"**4**-tallet skal have en streg fra alle fire felter omkring sig. **Venstreklik** på feltet oven over til venstre — sådan tegner du en `\\\\`."},"step4":{"text":"Feltet oven over til højre for **4**-tallet skal i stedet hælde ned mod venstre. **Højreklik** på det for at få en `/`."},"step5":{"text":"**1**-tallet på venstre kant har allerede sin ene streg, fra feltet nedenunder. Så feltet ovenover må hælde væk: **venstreklik** på det for at få en `\\\\`."},"step6":{"text":"Fortsæt på samme måde. Et tal, der ikke længere kan gå op, bliver rødt, og det samme gør streger, der er fanget i en lukket løkke. **Løs** i pausemenuen udfylder resten."}},"solo":{"step1":{"text":"Hver række, hver kolonne og hver optrukket **2×2-blok** skal rumme 1, 2, 3 og 4 præcis én gang. Der mangler tre felter i dette lille gitter."},"step2":{"text":"Denne **blok** har allerede et 2-, et 3- og et 4-tal, så dens tomme felt kan kun være et **1**-tal. Klik på feltet, og tryk på tasten **1**.","textTouch":"Denne **blok** har allerede et 2-, et 3- og et 4-tal, så dens tomme felt kan kun være et **1**-tal. Tryk på feltet, og tryk så på **1** på tasterne."},"step3":{"text":"Usikker på et felt? **Højreklik** på dette tomme felt, og tryk på **2** for at notere cifret med blyant.","textTouch":"Usikker på et felt? Tryk på dette tomme felt, slå **✎** til på tasterne, og tryk på **2** for at notere cifret med blyant."},"step4":{"text":"Rækken har allerede 3, 4 og 1, så noten var rigtig. **Venstreklik** på det samme felt, og tryk på **2** for at skrive svaret ind.","textTouch":"Rækken har allerede 3, 4 og 1, så noten var rigtig. Feltet er stadig valgt, så tryk på **✎** for at slå blyanten fra, og derefter på **2** for at skrive svaret ind."},"step5":{"text":"Ét felt tilbage. Rækken har allerede 4, 3 og 1. Klik på det, og tryk på det manglende ciffer.","textTouch":"Ét felt tilbage. Rækken har allerede 4, 3 og 1. Tryk på det, og tryk så på det manglende ciffer på tasterne."},"step6":{"text":"Løst! **Fortryd** tager et forkert ciffer tilbage, og tasten **M** noterer alle muligheder i alle tomme felter på én gang.","textTouch":"Løst! **Fortryd** tager et forkert ciffer tilbage, og **Noter** i pausemenuen skriver alle muligheder ind i alle tomme felter på én gang."}},"tents":{"step1":{"text":"Slå ét telt op ved siden af hvert træ — over, under, til venstre eller til højre for det, aldrig diagonalt. Ingen telte må røre hinanden, og tallene tæller teltene i hver række og kolonne."},"step2":{"text":"**0**-tallet for enden af den anden række betyder, at rækken ikke får nogen telte. **Højreklik** på feltet ved siden af træet for at markere det som græs."},"step3":{"text":"Den tredje kolonne er også tom. **Højreklik og træk** fra dens øverste felt ned til tredje række, så bliver alle tre til græs på én gang."},"step4":{"text":"Træet nederst til højre står i hjørnet med endnu et træ ved siden af sig, så dets eneste frie nabo er ovenover. **Venstreklik** på det felt for at slå et telt op."},"step5":{"text":"Det telt fylder tredje række, så træet på venstre kant kan heller ikke få telt nedenunder. **Venstreklik** på feltet øverst til venstre."},"step6":{"text":"Ét træ mangler stadig sit telt, og kun feltet til venstre for det er frit. **Venstreklik** på det, og campingpladsen er færdig."},"step7":{"text":"Løst! Klikker du på et telt eller en græsmarkering igen, fjernes den; piletasterne med Enter og mellemrum gør det samme, og **Fortryd** går et skridt tilbage.","textTouch":"Løst! Trykker du på et telt eller en græsmarkering igen, fjernes den, og **Fortryd** går et skridt tilbage."}},"towers":{"step1":{"text":"Hver række og kolonne rummer ét tårn af hver højde, 1 til 4. Et tal ude i kanten tæller de tårne, du kan **se** derfra: et højere tårn skjuler alle lavere bag sig."},"step2":{"text":"**1**-tallet til højre for den øverste række betyder, at kun ét tårn er synligt fra den side, så det nærmeste må være det højeste. Klik på feltet, og tryk på **4**.","textTouch":"**1**-tallet til højre for den øverste række betyder, at kun ét tårn er synligt fra den side, så det nærmeste må være det højeste. Tryk på feltet, og tryk så på **4** på tasterne."},"step3":{"text":"Du kan notere muligheder i stedet for at svare. **Højreklik** på det tomme felt yderst til venstre i den øverste række, og tryk på **1**.","textTouch":"Du kan notere muligheder i stedet for at svare. Tryk på det tomme felt yderst til venstre i den øverste række, slå **✎** til på tasterne, og tryk på **1**."},"step4":{"text":"**4**-tallet til venstre for rækken siger, at alle fire tårne er synlige, så de stiger 1-2-3-4 fra den ende. **Venstreklik** på feltet, og tryk på **1** for at svare.","textTouch":"**4**-tallet til venstre for rækken siger, at alle fire tårne er synlige, så de stiger 1-2-3-4 fra den ende. Feltet er stadig valgt, så tryk på **✎** for at slå blyanten fra, og derefter på **1** for at svare."},"step5":{"text":"Ét felt tilbage, og **1**-tallet ved rækken sætter igen det højeste tårn nærmest. Klik på det, og tryk på **4**.","textTouch":"Ét felt tilbage, og **1**-tallet ved rækken sætter igen det højeste tårn nærmest. Tryk på det, og tryk så på **4** på tasterne."},"step6":{"text":"Løst! **Backspace** tømmer et felt, du har taget fejl af, og **Løs** i pausemenuen gør et puslespil færdigt, når det har slået dig.","textTouch":"Løst! **⌫** på tasterne tømmer et felt, du har taget fejl af. I pausemenuen skriver **Noter** alle muligheder ind med blyant, og **Løs** gør et puslespil færdigt, når det har slået dig."}},"tracks":{"step1":{"text":"Én jernbane løber fra indgangen til venstre til udgangen i bunden, og hvert felt, den besøger, har præcis to skinner. Tallene siger, hvor mange felter i kolonnen eller rækken sporet går igennem."},"step2":{"text":"Indgangsstykket løber allerede op i **feltet øverst til venstre**, og feltets top og venstre side er gitterets kant. Så dets anden skinne må gå til højre: **klik** lige til højre for midten af feltet."},"step3":{"text":"Den **venstre kolonne** tæller **2**, og indgangen bruger allerede begge felter, så der løber intet gennem den nederste halvdel. **Højreklik** midt i et felt for at krydse det ud — med et højreklik og træk krydser du en hel stribe ud."},"step4":{"text":"Den **højre kolonne** tæller **4**, så sporet besøger hvert eneste felt i den, og felterne øverst og nederst kan kun dreje indad. **Træk** fra feltet øverst til højre hele vejen ned til det nederst til højre."},"step5":{"text":"Den **nederste række** skal bruge tre felter, og den venstre kolonne er færdig, så hjørnet nederst til højre ligger på sporet. Det kan ikke forlade gitteret, så det drejer til venstre og op: **klik** på dets venstre side."},"step6":{"text":"Tallene bliver grå, når deres linje passer, og røde, når den ikke kan gå op. Fortsæt rundt om de løse ender, eller lad **Løs** gøre jernbanen færdig."}},"twiddle":{"step1":{"text":"Få tallene tilbage i rækkefølge, **1 til 9**. Ét træk drejer en kvadratisk blok på fire brikker en kvart omgang; tre drejninger gør dette bræt færdigt."},"step2":{"text":"Klik midt i de **fire brikker øverst til venstre**. Et venstreklik drejer blokken mod uret, og så ligger 1, 2, 3 langs toppen."},"step3":{"text":"**Højreklik** midt i de **fire brikker nederst til højre** for i stedet at dreje blokken med uret."},"step4":{"text":"Slut af med et venstreklik midt i de **fire brikker nederst til venstre**."},"step5":{"text":"Færdig! **Type**-menuen har større blokke og en tilstand *med retning*, hvor hver brik også skal ende med at vende rigtigt."}},"undead":{"step1":{"text":"Fyld de fem tomme felter med spøgelser, vampyrer og zombier — optællingen øverst siger, hvor mange der er af hver. Hvert tal tæller de monstre, man ser langs den linje, og spejlene bøjer dit blik."},"step2":{"text":"Kigger du ind fra **venstre for den øverste række**, ser du ingenting; spejlet bøjer den samme linje ud foroven, hvor **1**-tallet ser ét monster. Kun et spøgelse gemmer sig forfra og viser sig i et spejl. **Klik** på det felt."},"step3":{"text":"**4**-tallet i nederste venstre hjørne zigzagger gennem spejlene forbi tre felter og ser dem alle sammen. Vampyrer forsvinder i et spejl, så den eneste vampyr må være det midterste felt i venstre kolonne. **Klik** på det."},"step4":{"text":"Et klik bladrer bare gennem monstrene. **Tryk på V** i stedet: G, V og Z sætter et spøgelse, en vampyr eller en zombie direkte i det fremhævede felt.","textTouch":"Et tryk bladrer bare gennem monstrene ét ad gangen. Tryk i stedet på **Vampyr** på tasterne: så lander monsteret direkte i det markerede felt."},"step5":{"text":"Den **midterste række** er et lige kig uden spejle, og begge **1**-taller ser ét enkelt monster — vampyren. Så dens to naboer må være spøgelser. **Klik** på midterfeltet."},"step6":{"text":"Et **højreklik** noterer i stedet et lille mærke med blyant uden at placere noget. Prøv det på feltet til højre i rækken; hvert højreklik tilføjer det næste monster."},"step7":{"text":"To felter tilbage: det med blyantsnoten er det tredje spøgelse, og det sidste er zombien. Tal bliver grå, når deres linje går op; **Løs** gør labyrinten færdig, hvis du hellere vil se på."}},"unequal":{"step1":{"text":"Hver række og kolonne skal have 1, 2, 3 og 4 én gang hver — og hvert tegn mellem to felter skal pege på det **mindste** af de to."},"step2":{"text":"Tegnet her peger til højre, så det **venstre** felt er det største. Rækken mangler stadig et 2-tal og et 3-tal. Klik på det venstre felt, og tryk på **3**.","textTouch":"Tegnet her peger til højre, så det **venstre** felt er det største. Rækken mangler stadig et 2-tal og et 3-tal. Tryk på det venstre felt, og tryk så på **3** på tasterne."},"step3":{"text":"Feltet, som tegnet peger på, får det mindste tal. Klik på det, og tryk på **2**.","textTouch":"Feltet, som tegnet peger på, får det mindste tal. Tryk på det, og tryk så på **2** på tasterne."},"step4":{"text":"Kolonnen har nu et 3-tal, så dette felt kan kun være et 2-tal. **Højreklik** på det, og tryk på **2** for at notere det med blyant.","textTouch":"Kolonnen har nu et 3-tal, så dette felt kan kun være et 2-tal. Tryk på det, slå **✎** til på tasterne, og tryk på **2** for at notere det med blyant."},"step5":{"text":"En note er ikke et svar. **Venstreklik** på det samme felt, og tryk på **2** for at gøre det til svaret.","textTouch":"En note er ikke et svar. Feltet er stadig valgt, så tryk på **✎** for at slå blyanten fra, og derefter på **2** for at gøre det til svaret."},"step6":{"text":"Ét felt tilbage. Klik på det, og tryk på **3** for at gøre gitteret færdigt.","textTouch":"Ét felt tilbage. Tryk på det, og tryk så på **3** på tasterne for at gøre gitteret færdigt."},"step7":{"text":"Løst! **Fortryd** tager et ciffer tilbage, og **Løs** udfylder svaret, hvis et puslespil slår dig.","textTouch":"Løst! **Fortryd** tager et ciffer tilbage, **Noter** og **Tip** skriver mulighederne ind med blyant, og **Løs** udfylder svaret, hvis et puslespil slår dig."}},"unruly":{"step1":{"text":"Farv hvert felt sort eller hvidt. Hver række og kolonne skal have **tre af hver**, og ingen farve må optræde **tre gange i træk**. Tre felter er stadig ubestemte."},"step2":{"text":"Denne række har allerede sine tre hvide felter, så det ubestemte må være sort. **Venstreklik** på det — et venstreklik maler sort."},"step3":{"text":"Denne række har allerede tre sorte, så dens ubestemte felt er hvidt. **Højreklik** på det — når du højreklikker, går det den anden vej rundt og maler hvidt først."},"step4":{"text":"Det sidste ubestemte felt har to sorte til venstre for sig, og en tredje i træk er ikke tilladt. **Højreklik** på det for at male det hvidt og gøre gitteret færdigt."},"step5":{"text":"Løst! Klikker du på et farvet felt igen, skifter det videre til den anden farve og derefter tilbage til ubestemt, og **Fortryd** går tilbage gennem dine træk."}},"untangle":{"step1":{"text":"Seks punkter ligger i en ring, forbundet af otte streger. To par af dem krydser hinanden — det er de røde. Træk punkter rundt, indtil der ikke er mere rødt tilbage."},"step2":{"text":"Klik først på **Fanggitter**, gitterknappen ved siden af Fortryd (eller tryk på **G**). Det slår fanggitteret til, så et punkt, du slipper, lander på en af de svage prikker midt i et felt."},"step3":{"text":"**Træk** punktet øverst i ringen ind i det tomme felt i **øverste venstre hjørne**.","textTouch":"**Træk** punktet øverst i ringen ind i det tomme område i brættets **øverste venstre hjørne**. Det behøver ikke lande præcist — krydsningen skal bare væk."},"step4":{"text":"Én krydsning tilbage, ovre til højre. **Træk** det nederste punkt ind i det tomme **nederste højre hjørne**.","textTouch":"Én krydsning tilbage, ovre til højre. **Træk** det nederste punkt ind i det tomme **nederste højre hjørne** — den sidste røde streg forsvinder, så snart den er fri."},"step5":{"text":"Optrævlet! **Løs** breder ethvert virvar ud for dig, og piletasterne flytter en markør fra punkt til punkt, hvor Enter samler et punkt op og sætter det ned igen.","textTouch":"Optrævlet! Røde streger er dem, der stadig krydser, så bliv ved med at trække, indtil ingen er tilbage — eller lad **Løs** brede virvaret ud for dig."}}}'),Fe={$locale:`da`,$name:q,$dir:`ltr`,ui:J,touchPhrases:Y,messages:X,status:Z,games:Q,tutorials:$};export{g as A,ee as B,A as C,S as D,w as E,o as F,i as I,oe as L,f as M,u as N,b as O,c as P,ie as R,M as S,E as T,t as V,H as _,Ee as a,I as b,be as c,me as d,fe as f,W as g,se as h,Oe as i,m as j,v as k,ve as l,ce as m,Me as n,we as o,ue as p,Ae as r,Se as s,Pe as t,ge as u,B as v,O as w,P as x,R as y,ne as z};
//# sourceMappingURL=i18n-da-B11C7fZ7.js.map