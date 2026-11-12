import{t as e}from"./index-DIYwYEVR.js";var t=e({default:()=>n}),n="## Yleiset ohjaimet\n\n- **Uusi** jakaa uuden pulman ja **Aloita alusta** palauttaa tämän pulman alkuun.\n  **Kumoa** ja **Tee uudelleen** liikkuvat siirroissasi taakse ja eteen, ja myös alusta\n  aloittamisen voi kumota.\n- **Ratkaise** näyttää vastauksen pulmissa, joissa se on mahdollista. Se lasketaan\n  siirroksi, jonka voit kumota.\n- Useimmissa pulmissa napsautus hiiren oikealla tekee toisen toiminnon: merkitsee,\n  liputtaa tai kääntää toiseen suuntaan. Jos pulmassa on kolmaskin toiminto, sen tekee\n  napsautus hiiren keskipainikkeella.\n- **Tyyppi** vaihtaa valmiiden kokojen ja vaikeustasojen välillä; **Mukauta…** antaa\n  valita ne itse.\n- **Jaa** näyttää koodit, joiden avulla joku toinen voi pelata juuri tätä pulmaa.\n\n### Näppäimistö (Keyboard)\n\n- **Uusi peli**: `N` · **Kumoa**: `U` tai `Ctrl+Z` · **Tee uudelleen**: `R` tai `Ctrl+Y`\n- **Ratkaise**: `Ctrl+S` (jos pulmassa on se). **Tämä ohje**: `?`, ja `Esc` sulkee sen. **Tauko**: `Esc`.\n- Useimmissa pulmissa nuolinäppäimet liikuttavat kohdistinta laudalla. `Enter` toimii\n  kohdistimen kohdalla kuin hiiren vasen painike ja `Space` kuin hiiren oikea.\n- Valikoissa nuolinäppäimet siirtävät kortilta tai painikkeelta seuraavalle, `Enter`\n  valitsee ja `Esc` palaa takaisin.\n- Myös peliohjain käy: ristiohjain liikuttaa, `A` valitsee tai napsauttaa, `X` on hiiren\n  oikea painike, `B` palaa takaisin, `Start` keskeyttää, `LB` ja `RB` kumoavat ja tekevät\n  uudelleen, ja `Y` antaa vihjeen.\n  Pulmissa, joihin kirjoitetaan numeroita, `RT` vie näytön näppäimiin ja takaisin.\n",ee=e({default:()=>te}),te=`## Kosketusnäytöllä

- **Napauta**, niin teet päätoiminnon, ja **paina pitkään**, niin teet toisen. Jos
  pulmassa on kolmaskin toiminto, napauta **kahdella sormella**.
- Työkalurivin ensimmäinen pyöreä painike (piste neliön sisällä) vaihtaa nämä kaksi
  päittäin, joten eniten käyttämäsi toiminto on aina yhden napautuksen päässä; niin kauan
  kuin ne ovat vaihdettuina, painikkeessa palaa pieni lippu. Pitkä painallus tekee silloin
  sen toisen.
- **Nipistä** lautaa, niin ison ruudukon ruudut suurenevat, ja **vedä kahdella sormella**,
  niin liikut laudalla. Nipistä takaisin kasaan, niin näet koko pulman taas.
  **Tauko**-valikossa samat kaksi kokoa ovat myös painikkeina.
- **Tauko** kokoaa loput ohjaimista: pulman tyypin, uuden pulman, alusta aloittamisen, ratkaisun,
  jakamisen sekä Asetukset äänelle ja kielelle. Kello pysähtyy siksi aikaa, kun valikko on auki.
`,ne=e({default:()=>re}),re=`# Musta laatikko

Varjostetun laatikon sisään on piilotettu muutama pallo. Laatikkoa kiertää kehys, jossa on
laserportteja. Ammu laser laatikkoon mistä tahansa portista ja katso, mitä tulee ulos:
päättele tuloksista, missä pallojen täytyy olla, merkitse ne ja pyydä sitten
tarkistus.

Säde kulkee suoraan, ellei pallo ole sen tiellä:

- Suoraan edessä oleva pallo **nielaisee** säteen. Portti näyttää **H**:n (osuma).
- Viistosti edessä oleva pallo **taittaa** sädettä 90° pallosta poispäin. Jos palloja on
  viistosti edessä molemmin puolin, säde kääntyy suoraan takaisin. Taitokset voivat
  ketjuuntua, joten säde voi mutkitella laatikossa ennen kuin se pääsee ulos.
- Säde, joka tulee ulos samasta portista kuin meni sisään, on **heijastunut**, ja siitä
  kertoo **R**. **R** tulee myös silloin, kun säde taittuisi jo ennen kuin pääsee laatikkoon,
  koska pallo on viistosti heti sen sisääntulokohdan vieressä.
- Muuten säde tulee ulos jostakin muualta, ja molemmat portit saavat saman **numeron** (ja
  saman värin), joten näet, mistä kukin laukaus meni sisään ja mistä se tuli ulos.

Kun olet merkinnyt oikean määrän palloja, vasempaan yläkulmaan ilmestyy vihreä painike.
Napsauta sitä, niin merkintäsi tarkistetaan. Asettelusi hyväksytään, jos mikään
laser ei erota sitä tietokoneen asettelusta. Kun palloja on useita, samalla tavalla
toimivia asetteluja voi olla monta, ja millä tahansa niistä voitat.

Väärä asettelu päättää pelin ja paljastaa vastauksen, joten tarkista vasta, kun olet varma:
löytämäsi pallot ovat mustia, väärät merkinnät yliviivataan punaisella, huomaamatta
jääneet pallot ovat punaisia, jokainen ampumasi laser, joka ei sovi asetteluusi,
saa ympärilleen renkaan, ja ne laserit, joita et ampunut mutta jotka olisivat erottaneet
asettelut toisistaan, ammutaan nyt ja kirjoitetaan punaisella. **Kumoa** palauttaa sinut
yrittämään uudelleen. **Ratkaise** luovuttaa ja asettaa oikeat pallot paikoilleen.

## Ohjaimet

Tilarivi laskee merkitsemäsi pallot ja ampumasi laserit, ja tarkistuksen jälkeen se kertoo,
montako palloistasi oli väärin ja montako jäi löytämättä.

### Hiiri ja kosketus

- **Napsauta porttia**, niin siitä lähtee laser. Kun napsautat jo ammuttua porttia, sen
  säteen molemmat päät syttyvät; napsauta sitä uudelleen tai mihin tahansa muualle, niin
  valo sammuu.
- **Napsauta laatikon sisällä**, niin siihen tulee pallon merkki; napsauta uudelleen, niin
  merkki häviää.
- **Napsauta hiiren oikealla** ruutua, niin se **lukittuu** eikä muutu vahingossa; toinen
  napsautus hiiren oikealla avaa lukon. Kun napsautat hiiren oikealla porttia, lukitset
  tai avaat koko sen vieressä olevan rivin tai sarakkeen.
- **Napsauta kulman painiketta**, niin merkintäsi tarkistetaan.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** liikuttavat kohdistinta laatikossa ja sen porteissa.
- **Enter** toimii kuin hiiren vasen painike: ampuu, merkitsee tai tarkistaa, kun
  kohdistin on painikkeen kohdalla.
- **Space** toimii kuin hiiren oikea painike eli lukitsee ja avaa lukon.

## Asetukset

- **Leveys** ja **Korkeus**: laatikon koko. Jokaisen rivin ja sarakkeen molemmissa päissä on
  laserportti.
- **Pallojen määrä**: montako palloa on piilossa. Anna yksi luku, tai väli kuten \`3-6\`,
  jolloin tietokone arpoo määrän. Silloin joudut päättelemään myös pallojen
  määrän, ja tarkistuspainike ilmestyy, kun merkintöjä on mikä tahansa välin luku.
`,ie=e({default:()=>ae}),ae=`# Sillat

Veden päälle on ripoteltu saaria, joista jokaisella on luku. Yhdistä ne silloilla niin,
että:

- jokainen silta kulkee suoraan vaakaan tai suoraan pystyyn kahden saaren välillä;
- saaren luku kertoo tarkalleen, montako siltaa siihen liittyy;
- kaksi saarta saa yhdistää rinnakkaisilla silloilla, mutta enintään kahdella (rajaa
  voi muuttaa **Mukauta…**-asetuksista);
- yksikään silta ei risteä toisen kanssa;
- jokaiselta saarelta pääsee kaikille muille siltoja pitkin.

Virheet näkyvät punaisena: saari, jossa on liikaa siltoja, saari, joka ei enää saa
tarpeeksi (jäljellä olevat naapurit ovat täynnä tai ainoat reitit ovat muiden siltojen tai
omien ”ei siltaa” -merkintöjesi tukkimia), ja saariryhmä, joka on jo valmis mutta erossa
muista. Jos silmukat on kielletty, myös silmukan muodostavat sillat ovat punaisia.

## Ohjaimet

**Ratkaise** täyttää ratkaisun ja poistaa sillat, jotka eivät siihen kuulu.

### Hiiri ja kosketus

- **Vedä** saarelta naapuria kohti, niin niiden välille syntyy silta. Riittää, että liikutat
  osoitinta sen verran, että suunta on selvä; silta napsahtaa siihen suuntaan lähimpänä olevaan
  saareen. Vedä uudestaan, niin saat toisen rinnakkaisen sillan; kun raja on täynnä, vielä
  yksi veto poistaa ne kaikki.
- **Vedä hiiren oikealla** samalla tavalla, niin merkitset ”tähän ei siltaa” — tai pyyhit
  merkinnän pois.
- **Napsauta** saarta, niin merkitset sen valmiiksi. Se muuttuu harmaaksi ja sen sillat
  lukittuvat, etkä voi muuttaa niitä vahingossa; napsauta uudelleen, niin lukko aukeaa.
- **Pyyhi** (pyyhekumipainike Kumoa-painikkeen vieressä) vaihtaa vedon poistamiseen: vedä
  saarelta naapuria kohti, niin niiden väliltä poistuvat kaikki sillat tai siellä oleva
  ”ei siltaa” -merkintä. Paina painiketta uudelleen, niin palaat rakentamaan siltoja.
- **Apuviivat** näyttää himmeän viivan kaikkialla, minne silta voisi tulla, ja
  piilottaa ne taas.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät kohdistinta saarelta saarelle.
- **Enter** ja sen perään nuoli rakentaa sillan siihen suuntaan; **Space** ja nuoli tekee
  merkinnän. Kaksi **Enter**-painallusta merkitsee saaren valmiiksi.
- **E** toimii kuten **Pyyhi**-painike ja **G** kuten **Apuviivat**-painike.

## Asetukset

- Ruudukon **Leveys** ja **Korkeus**, kumpikin vähintään 3.
- **Vaikeustaso**: _Helppo_-pulmissa riittää katsoa yhtä saarta kerrallaan — milloin sen
  jäljellä olevat sillat täyttävät tasan jäljellä olevan tilan, tai milloin sen luku on
  niin iso, ettei yhtäkään naapuria voi ohittaa. _Keskivaikeat_ pulmat panevat miettimään myös
  yksittäisiä yhteyksiä: mikä silta on pakko rakentaa, koska saarta ei muuten saa valmiiksi,
  ja (kun silmukat on kielletty) mitkä yhteydet sulkisivat silmukan. _Vaikeat_ vaativat
  katsomaan askeleen eteenpäin: tekisikö tämä silta valmiiksi saariryhmän, joka jää muista
  erilleen, vai jättäisikö se jonkin saaren umpikujaan? Jokaisella pulmalla on tasan yksi
  ratkaisu.
- **Salli silmukat**: oletuksena päällä. Kun asetus on pois päältä, valmiin siltaverkon on oltava puu:
  mikään siltareitti ei saa palata lähtöpaikkaansa. Pulma on tehty niin, että tätä
  sääntöä voi käyttää päättelyssä.
- **Siltoja enintään yhteen suuntaan**: rinnakkaisten siltojen raja, normaalisti 2. Pienempi
  luku helpottaa.
- **Saariruutujen osuus (%)**: suunnilleen kuinka suuri osa ruudukosta muuttuu saariksi.
  Kaikkiin asetelmiin niin montaa ei mahdu, joten tämä on yläraja.
- **Laajennuskerroin (%)**: kuinka todennäköisesti karttaa kasvatettaessa uusi saari
  sijoittuu mahdollisimman kauas eikä jonnekin lähemmäs. Suuret arvot antavat väljempiä ja
  helpompia pulmia, pienet ahtaita.
`,oe=e({default:()=>r}),r=`# Kuutio

Ruudukolla on kappale, ja osa ruuduista on maalattu sinisiksi — täsmälleen yhtä monta
kuin kappaleessa on tahkoja. Kun vierität kappaletta, se kaatuu pohjatahkonsa yhden
särmän yli, ja seuraava tahko laskeutuu viereiseen ruutuun. Aina kun kappale laskeutuu,
alle jäävä tahko ja ruutu vaihtavat värejä: väritön tahko sinisellä ruudulla poimii
sinisen mukaansa, ja sininen tahko värittömällä ruudulla jättää sinisen siihen. Pulma on valmis, kun kaikki
tahkot ovat yhtä aikaa sinisiä. Tilarivi laskee vierityksesi, joten yritä pärjätä
mahdollisimman vähillä.

Klassisessa versiossa kuutio vierii neliöruudukolla. Kolmioruudukolla voit vierittää
sen sijaan tetraedria, oktaedria tai ikosaedria. Muista, että vierivän tetraedrin kukin tahko
yltää vain neljäsosaan ruuduista ja että oktaedrin tahkot vuorottelevat ylös- ja alaspäin
osoittavien kolmioiden välillä. Siniset ruudut sijoitetaan kuitenkin aina niin, että
pulman voi ratkaista.

## Ohjaimet

Tässä pulmassa ei ole **Ratkaise**-painiketta. Kun kaikki tahkot ovat sinisiä, voit
vierittää kappaletta vapaasti, eikä valmis ratkaisu hajoa.

### Hiiri ja kosketus

- **Napsauta** mitä tahansa kohtaa, niin kappale vierii yhden ruudun sitä kohti.
  Neliöruudukolla se tarkoittaa ylös, alas, vasemmalle tai oikealle; kolmioruudukolla
  kolmiolla on kolme naapuria, joista valita. Napsauttamalla pääset jokaiseen
  naapuriruutuun, joten sillä pärjää kaikilla ruudukoilla.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** vierittävät kappaletta neljään pääsuuntaan. Kolmioruudukolla
  kolmiolla on naapuri vain joko ylä- tai alapuolellaan, joten toinen pystynuoli ei tee
  mitään.
- **Home**, **Page Up**, **End** ja **Page Down** (tai numeronäppäimistön kulmanäppäimet
  7, 9, 1 ja 3) vierittävät kolmioruudukoilla vinottain ja valitsevat sen särmän, joka on
  lähinnä sitä suuntaa.

## Asetukset

- **Kappaleen tyyppi**: tetraedri, kuutio, oktaedri tai ikosaedri. Kuutio käyttää
  neliöruudukkoa, muut kolmioruudukkoa.
- **Leveys / yläosa** ja **Korkeus / alaosa**: kuutiolla nämä ovat neliöruudukon mitat.
  Kolmioruudukoilla ne ovat kuusikulmaisen pelialueen ylä- ja alareunan pituudet (jos
  asetat toisen nollaksi, saat pelkän kolmion). Ruudukkoon on mahduttava jokainen sininen ruutu
  ja lisäksi tyhjä lähtöruutu.
`,i=e({default:()=>a}),a=`# Dominosa

Täysi dominosarja — yksi domino jokaiselle lukuparille nollasta suurimpaan, tuplat mukaan
lukien — aseteltiin täyttämään suorakulmio. Sitten luvut kirjattiin ylös ja dominot
vietiin pois. Sinun tehtäväsi on päätellä, missä ne olivat: jaa ruudukko vierekkäisten
ruutujen pareiksi niin, että jokaista sarjan dominoa käytetään tasan kerran.

Domino, jonka lukupari on jo käytössä muualla, näkyy punaisena — samoin paljas ruutu,
johon mikään domino ei enää yllä.

## Ohjaimet

Pulma on valmis, kun jokainen ruutu on peitetty eikä yksikään domino ole punainen.
**Ratkaise** asettaa kaikki ratkaisun dominot ja poistaa ne, jotka olit itse
asettanut.

### Hiiri ja kosketus

- **Napsauta** kahden vierekkäisen luvun väliä (tai ruudun sitä puoliskoa, joka on lähinnä
  tuota väliä), niin niiden päälle tulee domino. Napsauta samaa väliä uudelleen, niin
  domino häviää. Jos asetat dominon osittain toisen päälle, uusi korvaa vanhan.
- **Napsauta hiiren oikealla** väliä, niin siihen piirtyy viiva merkiksi siitä, että nämä
  kaksi lukua **eivät** ole sama domino. Napsauta hiiren oikealla uudelleen, niin viiva
  häviää. Viivaa ei voi piirtää dominoa vasten, ja dominon asettaminen pyyhkii kaikki
  siihen koskettavat viivat.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** liikuttavat kohdistinta ruudukossa; se pysähtyy ruutujen keskelle ja
  niiden välisille rajoille. Rajalla kohdistin piirtää ääriviivat siitä dominosta, jonka
  se asettaisi.
- **Enter** asettaa tai poistaa tuon dominon ja **Space** piirtää tai pyyhkii viivan
  siihen.

## Asetukset

- **Dominojen suurin numero**: dominot ovat 0-0:sta N-N:ään, ja ruudukko on (N+2)
  ruutua leveä ja (N+1) korkea, joten suurin numero 6 antaa 8×7-ruudukon.
- **Vaikeustaso**: kuinka paljon päättelyä pulma vaatii. **Erittäin helppo** -pulmissa on aina
  joko domino, jolle on vain yksi paikka, tai ruutu, jonka voi peittää vain yhdellä dominolla.
  **Helppo** tuo mukaan kaksi uutta päättelyä: jos kaikki tavat peittää tämä ruutu käyttävät
  samaa dominoa, se domino ei mene minnekään muualle, ja jos jokainen paikka, johon tämä domino
  kävisi, sulkee saman kohdan pois, se kohta on poissa laskuista. **Vaikea** lisää laskemisen
  (domino, joka eristäisi parittoman määrän ruutuja, on mahdoton; samaa lukua näyttävät ruudut
  voivat varata keskenään jakamansa dominot), ja **Äärimmäinen** vaatii seuraamaan yhden siirron
  seurauksia niin pitkälle, että syntyy ristiriita. Näillä kaikilla on tasan yksi ratkaisu.
  **Monitulkintaisia** pulmia ei tarkisteta lainkaan: niillä voi olla useita ratkaisuja ja ne
  voivat vaatia arvausta — mikä tahansa toimiva peitto voittaa.
`,o=e({default:()=>s}),s=`# Viisitoista

Klassinen liukupalapeli. Ruudukko on täynnä numeroituja laattoja, ja yksi paikka on
tyhjä. Liu'uta laattoja aukkoon, kunnes numerot ovat järjestyksessä vasemmalta oikealle ja
ylhäältä alas ja aukko on oikeassa alakulmassa.

## Ohjaimet

**Ratkaise** hyppää suoraan valmiiseen asetelmaan. Se ei näytä, miten sinne päästään,
mutta sillä on kätevä aloittaa puhtaalta pöydältä, kun harjoittelet tuttuja siirtosarjoja.

### Hiiri ja kosketus

- **Napsauta** mitä tahansa laattaa, joka on samalla rivillä tai samassa sarakkeessa kuin
  aukko, niin se liukuu aukkoon ja vie mukanaan kaikki välissä olevat laatat.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** liu'uttavat laatan aukkoon nuolen suuntaan: **ylänuoli** siirtää aukon alla
  olevan laatan ylös aukkoon.

## Asetukset

- Ruudukon **Leveys** ja **Korkeus** (oletuksena klassinen 4×4).
`,c=e({default:()=>l}),l=`# Täyttö

Osassa ruudukon ruutuja on jo numero, loput ovat tyhjiä. Kirjoita jokaiseen tyhjään
ruutuun numero niin, että jokainen yhtenäinen samojen numeroiden ryhmä peittää tasan niin
monta ruutua kuin numero sanoo: jokainen 3 kuuluu kolmen 3:n ryhmään, jokainen 1 on yksin,
ja niin edelleen. Ruudut ovat yhteydessä toisiinsa vain sivujensa, eivät kulmiensa kautta.
Siksi yhdessäkään ruudussa ei ole nollaa, kaksi ykköstä ei ole koskaan vierekkäin eikä
yksikään ryhmä ole yli yhdeksän ruudun kokoinen. Valmiiksi annettu numero ei välttämättä
ole ryhmänsä alku: useampi annettu 4 voi päätyä samaan ryhmään, eikä
ryhmässä tarvitse olla yhtäkään annettua numeroa.

Paksut viivat ilmestyvät eri numeroita sisältävien ruutujen väliin sekä jokaisen jo
oikean kokoisen (tai liian ison) ryhmän ympärille. Numero muuttuu punaiseksi, kun sen
ryhmä on kasvanut numeroa suuremmaksi tai kun ryhmä on jäänyt saarroksiin eikä sillä
ole enää tilaa kasvaa täyteen kokoonsa. Tämä on sama pulma, jonka Nikoli julkaisee nimellä
Fillomino.

## Ohjaimet

Valmiiksi annetut numerot on piirretty musteella, eikä niitä voi muuttaa; omat numerosi
ovat sinisiä. **Ratkaise** täyttää ratkaisun.

### Hiiri ja kosketus

- **Napsauta** tyhjää ruutua, niin valitset sen, ja kirjoita sitten numero näytön
  näppäimillä. Näppäinrivin **⌫** tyhjentää valinnan taas.
- **Vedä** usean ruudun yli, niin valitset ne kaikki ja voit täyttää ne yhdellä numerolla
  kerralla.
- **Napsauta hiiren oikealla** ruutua, niin lisäät sen valintaan aloittamatta alusta. Kun
  napsautat hiiren oikealla jo valittua ruutua, se poistuu valinnasta.
- **Täytä** (painike Kumoa-painikkeen vieressä) levittää numeroa: vedä numeron sisältävästä
  ruudusta sen ympärillä olevien ruutujen yli, niin ne kaikki saavat saman numeron, kun
  päästät irti — näytön näppäimiä ei tarvita. Kun napsautat tai vedät tyhjästä ruudusta,
  valitset edelleen. Paina painiketta uudelleen, niin palaat valitsemaan.

### Näppäimistö (Keyboard)

- Kun yksi tai useampi ruutu on valittuna, **kirjoita numero**, niin se tulee niihin
  kaikkiin. Numero \`0\` tai **Backspace** tyhjentää ne taas.
- **Nuolinäppäimet** liikuttavat näppäimistön kohdistinta, ja kirjoittamasi numero täyttää
  sen alla olevan ruudun.
- **Space** tai **Enter** lisää kohdistimen alla olevan ruudun valintaan tai poistaa sen
  siitä, jolloin useamman ruudun voi täyttää yhdellä painalluksella.
- **F** vastaa **Täytä**-painiketta.

## Asetukset

- **Leveys** ja **Korkeus**: ruudukon koko. Ryhmät eivät ole koskaan pidempää sivua (tai
  yhdeksää ruutua) suurempia, joten pienissä ruudukoissa käytetään vain pieniä numeroita.
`,u=e({default:()=>d}),d=`# Käännä

Ruudukossa on ruutuja, joista osa palaa ja osa on pimeänä. Tavoitteesi on saada kaikki
palamaan yhtä aikaa. Ruudun painaminen sytyttää tai sammuttaa sen, mutta
kääntää myös osan naapureista: jokaiseen ruutuun piirretty pieni kuvio kertoo tarkalleen
mitkä. Oletuskuviolla **Ristit** jokainen painallus kääntää ruudun ja sen neljä
sivunaapuria; kuviolla **Satunnainen** jokaisella ruudulla on oma epäsäännöllinen
kuvionsa, joten peli on joka kerta erilainen.

Koska saman ruudun painaminen kahdesti kumoaa itsensä eikä painallusten järjestyksellä ole
väliä, ratkaisu on pelkkä joukko ruutuja, joista kutakin painetaan kerran.

## Ohjaimet

Tilarivi laskee painalluksesi. **Ratkaise** sytyttää koko laudan ja reunustaa punaisella
ne ruudut, joita se painoi. Jos jatkat ruutujen painamista sen jälkeen,
punaiset reunukset näyttävät, mitä ruutuja pitää vielä painaa, jotta lauta palaa
valmiiseen tilaan.

### Hiiri ja kosketus

- **Napsauta** ruutua, niin painat sitä.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** liikuttavat kohdistinta ruudukossa; **Enter** tai **Space** painaa
  kohdistimen alla olevaa ruutua.

## Asetukset

- **Leveys** ja **Korkeus**: ruudukon koko, 2–10 ruutua kummallakin sivulla.
- **Kuvion tyyppi**: _Ristit_ kääntää jokaisen ruudun yhdessä sen sivunaapureiden kanssa;
  _Satunnainen_ antaa jokaiselle ruudulle satunnaisesti kasvatetun kuvion sitä ympäröivän
  3×3-lohkon sisällä.
`,f=e({default:()=>p}),p=`# Tulva

Ruudukko on kirjava tilkkutäkki satunnaisen värisiä ruutuja. Hallussasi on
vasemman yläkulman ruutu ja kaikki ruudut, jotka ovat siinä kiinni samanväristen
ruutujen kautta. Jokainen siirto maalaa koko tämän yhtenäisen laikun valitsemallasi värillä,
jolloin sen väriset naapuriruudut liittyvät laikkuusi. Jatka, kunnes koko ruudukko
on yhtä väriä.

Juju on siirtorajassa. Peli ratkaisee ruudukon ensin itse ja antaa sinulle oman
siirtomääränsä ja lisäksi muutaman varasiirron; jos siirrot loppuvat ennen kuin ruudukko on
yksivärinen, hävisit kierroksen. Voit silti jatkaa ja täyttää ruudukon loppuun, mutta
voitoksi se ei enää kelpaa.

## Ohjaimet

Tilarivi kertoo, montako siirtoa olet käyttänyt ja paljonko niitä on käytössä. **Ratkaise** antaa ratkaisijan
viimeistellä ruudukon puolestasi; se lasketaan automaattiratkaisuksi eikä
omaksi voitoksesi.

### Hiiri ja kosketus

- **Napsauta** mitä tahansa ruutua, jonka väri poikkeaa laikkusi väristä, niin laikku
  muuttuu sen väriseksi. Jos napsautat ruutua, joka on jo samaa väriä, mitään ei tapahdu
  eikä siirtoa kulu.
- **Vihje** pelaa puolestasi ratkaisijan seuraavan värin tavallisena siirtona, jonka voit
  kumota. Muutaman vihjeen jälkeenkin voitto — ja siitä saatava tähti — on sinun.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** liikuttavat kohdistinta ruudukossa; **Enter** tai **Space** maalaa
  laikun kohdistimen alla olevalla värillä.

## Asetukset

- **Leveys** ja **Korkeus**: ruudukon koko, enintään 32 ruutua kummallakin sivulla.
- **Värit**: montako väriä ruudukossa on, 3–10. Mitä vähemmän värejä, sitä vähemmän
  vaihtoehtoja ja sitä helpompi peli.
- **Sallitut lisäsiirrot**: montako varasiirtoa ratkaisijan oman ratkaisun pituuteen
  lisätään siirtorajaksi. Nollalla sinun on oltava vähintään yhtä tehokas kuin
  ratkaisija; se pelaa hyvin muttei täydellisesti, joten sen tuloksen voi päihittää.
`,m=e({default:()=>h}),h=`# Galaksit

Ruudukkoon on siroteltu pisteitä. Piste voi olla keskellä ruutua, kahden ruudun välisellä
viivalla tai kulmassa, jossa neljä ruutua kohtaa. Piirrä ruudukon viivoja pitkin seiniä ja
jaa ruudukko alueisiin niin, että jokaisessa alueessa on tasan yksi piste ja se on alueen
symmetriakeskus: kun aluetta kääntää 180° pisteen ympäri, sen on osuttava tarkalleen
itsensä päälle. Jokaisen ruudun on kuuluttava johonkin alueeseen, joten yksikään alue ei
saa jäädä ilman pistettä.

Pulmat luodaan satunnaisesti, ja jokaisella on vain yksi ratkaisu. Kyseessä on Nikolin
”Tentai Show”, joka tunnetaan myös nimellä Spiral Galaxies.

## Ohjaimet

Suljettu ja oikea alue — yksi piste symmetriakeskuksena eikä ylimääräisiä seiniä
sisällä — sävytetään. Piste muuttuu punaiseksi, jos sen läpi kulkee seinä tai jos se on
suljetun alueen ainoa piste mutta alue ei ole symmetrinen sen suhteen. Suljettu alue,
jossa ei ole pistettä lainkaan, viivoitetaan. Pulma on valmis, kun jokainen ruutu on
sävytetty. **Ratkaise** piirtää koko ratkaisun.

### Hiiri ja kosketus

- **Napsauta** ruudukon viivaa, niin siihen tulee seinä. Seinää napsauttamalla se poistuu.
- **Vedä pisteestä** ruutuun, niin ruutuun jää pieni nuoli, joka osoittaa takaisin pisteeseen. Se
  muistuttaa, että ruutu kuuluu tuon pisteen galaksiin.
- **Vedä hiiren oikealla** olemassa olevaa nuolta, niin se siirtyy. Pudota se takaisin
  pisteensä päälle tai vedä se ruudukon ulkopuolelle, niin se heitetään pois; jos pudotat
  sen ruutuun, jossa on jo nuoli, se tulee sen nuolen tilalle.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** liikuttavat kohdistinta ruuduissa, viivoilla ja kulmissa.
- **Enter** viivan kohdalla piirtää seinän tai poistaa sen. **Enter** pisteen kohdalla
  poimii nuolen, joka seuraa kohdistinta, kunnes pudotat sen painamalla **Enter**
  uudelleen.

## Asetukset

- Ruudukon **leveys** ja **korkeus**, kumpikin vähintään 3. Valmiit koot ovat 7×7–15×15.
- **Vaikeustaso** — _Keskivaikea_-pulmat ratkeavat askel kerrallaan pelkän symmetriasäännön
  avulla. _Äärimmäinen_-pulmissa voi joutua tekemään oletuksen ja katsomaan, mihin se johtaa.
`,g=e({default:()=>_}),_=`# Arvaa

Tietokone on piilottanut rivin värinappuloita laudan yläreunan suojuksen taakse. Sinun
tehtäväsi on arvata rivi täsmälleen oikein pelkästään niiden merkkien avulla, jotka saat
kustakin arvauksesta: **musta** nappula jokaisesta nappulasta, joka on oikeaa väriä ja
oikealla paikalla, ja **ontto** nappula jokaisesta muusta nappulasta, jonka väri löytyy
piilorivistä jostain muualta. Merkit kertovat, _montako_ nappulaa osui, mutta eivät sitä,
_mitkä_. Jos löydät rivin ennen kuin arvaukset loppuvat, suojus nousee. Jos arvaukset
loppuvat, suojus nousee silti, niin näet oikean vastauksen.

Hasbro myy tätä peliä nimellä _Mastermind_: kuusi väriä, neljä nappulaa ja kymmenen
arvausta. Kaikkia asetuksia voi muuttaa.

## Ohjaimet

**Ratkaise** nostaa suojuksen ja näyttää vastauksen. Peli päättyy siihen samalla tavalla
kuin arvausten loppuessa.

### Hiiri ja kosketus

- **Napsauta** väriä vasemman reunan lokerikossa, niin se valitaan (rengas näyttää
  valitun värin), ja **napsauta paikkaa** nykyisellä rivillä, niin siihen tulee sen
  värinen nappula. Myös aiemman arvauksen nappulaa napsauttamalla saat sen värin
  valituksi.
- **Vedä** nappula lokerikosta, aiemmasta arvauksesta tai nykyiseltä riviltä haluamaasi
  paikkaan. Jos vedät nappulan pois nykyiseltä riviltä ja pudotat sen muualle, se poistuu.
- **Napsauta hiiren oikealla** paikkaa, niin se tyhjenee.
- Kun rivi on täynnä, sen oikealla puolella oleva pieni tarkistusalue syttyy:
  **napsauta sitä**, niin arvaus tarkistetaan.
- **Napsauta hiiren keskipainikkeella** paikkaa, niin nappula _lukittuu_: lukittu
  nappula siirtyy tarkistuksen jälkeen mukana seuraavaan arvaukseen, joten varmoja
  nappuloita ei tarvitse asetella uudestaan. Tee sama uudestaan, niin lukitus poistuu.
- **Lukitse** (painike Kumoa-painikkeen vieressä) tekee saman tavallisella napsautuksella:
  kun se on päällä, nykyisen rivin paikan napsauttaminen lukitsee sen nappulan tai
  vapauttaa sen sen sijaan, että asettaisi värin. Väriä vaihdetaan lokerikosta tavalliseen
  tapaan; paina **Lukitse** uudelleen, niin palaat asettamaan nappuloita.
- Taukovalikon **Kirjaimet** kirjoittaa jokaiseen nappulaan kirjaimen siltä varalta, että
  jotkin värit näyttävät sinusta samanlaisilta, ja ottaa kirjaimet taas pois.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet**: ylös ja alas valitsevat värin lokerikosta, vasen ja oikea siirtävät
  kohdistinta nykyisellä rivillä ja rivin täytyttyä myös tarkistusalueelle.
- **Enter** tai **välilyönti** asettaa valitun värin kohdistimen kohdalle tai lähettää
  arvauksen, kun kohdistin on tarkistusalueella.
- **Backspace** tai \`D\` tyhjentää kohdistimen kohdalla olevan paikan.
- \`H\` lukitsee kohdistimen kohdalla olevan nappulan tai vapauttaa sen.
- \`K\` vastaa **Lukitse**-painiketta ja \`L\` **Kirjaimet**-painiketta.

## Asetukset

- **Värit**: montako eri väriä piilorivissä voi olla, 2–10. Mitä enemmän värejä, sitä
  vaikeampi rivi on selvittää.
- **Nappuloita rivissä**: piilorivin pituus.
- **Arvauksia**: montako yritystä saat.
- **Salli tyhjät**: arvaukseen saa jättää tyhjiä paikkoja. Tyhjä paikka ei koskaan osu,
  joten värien kokeileminen helpottuu. Piilorivissä itsessään ei ole koskaan tyhjiä.
- **Salli toistuvat värit**: piilorivi (ja arvauksesi) saa käyttää samaa väriä useammin
  kuin kerran. Kun asetus on pois päältä, mahdollisia rivejä on huomattavasti vähemmän.
`,v=e({default:()=>y}),y=`# Hitaus

Olet pallo esteitä täynnä olevalla ruudukolla, ja tavoitteesi on kerätä laudalta kaikki
jalokivet. Juju on nimessä: kun pallo lähtee vierimään, se ei pysähdy ennen kuin jokin
pysäyttää sen. Se vierii suoraan niin jalokivien (ja kerää ne ohi mennessään) kuin
tyhjien ruutujenkin yli ja pysähtyy vasta, kun seuraavassa ruudussa on seinä tai kun se
osuu pysäyttimeen. Vinottain pallo pujahtaa kahden seinän välistä, jos seinät koskettavat
toisiaan vain kulmista. Miinaan vieriminen on kohtalokasta, vaikka samalla siirrolla
keräisit viimeisenkin jalokiven.

Jokainen pulma on luotu niin, että kaikki jalokivet voi kerätä aloitusruudusta lähtien,
mutta mikään ei estä sinua vierimästä nurkkaan, josta jotakin jalokiveä ei enää saa. Kuolemasta
tai jumiin jäämisestä ei seuraa muuta rangaistusta kuin tilarivin kuolemalaskuri: kumoa
vain ja kokeile toista reittiä.

## Ohjaimet

**Kumoa** miinaan osumisen jälkeen, niin jatkat tilanteesta ennen kohtalokasta siirtoa.
**Ratkaise** etsii nykyisestä paikasta reitin, joka kerää kaikki jäljellä olevat
jalokivet, ja vierittää pallon sitä pitkin puolestasi. Kumoa peruu koko reitin kerralla.

### Hiiri ja kosketus

- **Napsauta** ruutua, niin pallo lähtee sitä kohti. Suunta pyöristetään lähimpään
  kahdeksasta ilmansuunnasta, vinottaiset mukaan lukien. Voit napsauttaa myös ruudukon
  ulkopuolista reunusta, mikä on kätevää, kun pallo on reunalla.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** vierittävät palloa ylös, alas, vasemmalle ja oikealle.
- **Home**, **Page Up**, **End** ja **Page Down** vierittävät sitä vinottain
  (ylävasemmalle, yläoikealle, alavasemmalle, alaoikealle). Numeronäppäimistö toimii niin
  kuin näppäinten sijainnista voi arvata: 8 on ylös, 3 alaoikealle ja niin edelleen.
  Numerorivi toimii samoin.

## Asetukset

- Ruudukon **leveys** ja **korkeus**. Noin viidesosa ruuduista on seiniä, viidesosa
  pysäyttimiä, viidesosa miinoja ja viidesosa jalokiviä.
`,b=e({default:()=>x}),x=`# Keen

Täytä ruudukko numeroilla ykkösestä ruudukon kokoon asti niin, että jokaisella rivillä ja
jokaisessa sarakkeessa on jokainen numero tasan kerran. Ruudukko on lisäksi jaettu
paksuin viivoin rajattuihin alueisiin, ja kunkin alueen vasemmassa yläruudussa on pieni
vihje: luku ja laskutoimituksen merkki. Alueen numeroista on saatava tuo luku kyseisellä
laskutoimituksella:

- \`7+\` tarkoittaa, että alueen numeroiden summa on 7.
- \`12×\` tarkoittaa, että niiden tulo on 12.
- \`2−\` on aina kahden ruudun alueessa ja tarkoittaa, että toinen numero on 2 suurempi kuin
  toinen (kumpi tahansa päin).
- \`3÷\` on samoin kahden ruudun alueessa ja tarkoittaa, että toinen numero on 3 kertaa
  toinen.

Toisin kuin Solon Killer-tilassa, alueessa _saa_ olla sama numero kahdesti, kunhan ne
eivät ole samalla rivillä tai samassa sarakkeessa. Valmiita numeroita ei anneta, vaan
vihjeet ovat ainoa apusi. Jokaisella pulmalla on tasan yksi ratkaisu. Pulma tunnetaan
myös nimellä KenKen.

## Ohjaimet

Numero, joka esiintyy rivillään tai sarakkeessaan kahdesti, muuttuu punaiseksi. Samoin
käy täyden alueen vihjeelle, jos alueen numerot eivät täsmää siihen. **Ratkaise** täyttää
ratkaisun.

### Hiiri ja kosketus

- **Napsauta** ruutua, niin se valitaan, ja kirjoita numero näytön näppäimillä. Kun napsautat
  valittua ruutua uudestaan, valinta poistuu.
- Näppäinten **⌫** tyhjentää valitun ruudun, ja **✎** kytkee **kynämerkinnät** päälle:
  valitsemasi numero menee silloin ruutuun pienenä muistiinpanona, ja saman numeron
  valitseminen uudestaan pyyhkii sen pois. Kynämerkinnät ovat vain ajattelun tukena, ja
  ne poistuvat, kun ruutuun kirjoitetaan numero.
- **Napsauta hiiren oikealla** tyhjää ruutua, niin se valitaan suoraan kynämerkintöjä
  varten.
- Taukovalikon **Merkinnät** täyttää jokaisen tyhjän ruudun kaikilla mahdollisilla
  kynämerkinnöillä.
- **Korosta** (suurennuslasi Kumoa-painikkeen vieressä) nostaa esiin viimeksi
  napsauttamasi ruudun numeron: jokainen ruutu, jossa sama numero on, korostuu, ja
  numero näkyy lihavoituna kynämerkintöjen joukossa. Paina painiketta uudelleen, niin
  korostus poistuu.

### Näppäimistö (Keyboard)

- **Kirjoita numero**, niin se menee valittuun ruutuun — tai kynämerkinnäksi, jos ruutu
  valittiin kynämerkintöjä varten.
- **Välilyönti** tai **Backspace** tyhjentää valitun ruudun (numeron tai kaikki sen
  kynämerkinnät).
- **Nuolinäppäimet** liikuttavat kohdistinta, ja kirjoittamasi numerot menevät sen
  kohdalla olevaan ruutuun.
- **Enter** vaihtaa kohdistimen tavallisten numeroiden ja kynämerkintöjen välillä.
- **M** vastaa **Merkinnät**-painiketta ja **L** **Korosta**-painiketta.

## Asetukset

- **Ruudukon koko**: 3–9. Yhdeksää suuremmat numerot olisivat hankalia, joten 9 on
  yläraja.
- **Vaikeustaso**: vaikein päättely, jota pulma vaatii. _Helppo_ vaatii vain selvittämään, mitä
  numeroita alueeseen ylipäätään voi tulla. _Keskivaikea_ vaatii seuraamaan, mihin alueen ruutuun
  kukin numero voi osua. _Vaikea_ lisää alueiden välistä päättelyä (numerot, jotka alueen on
  sijoitettava tietylle riville, eivät voi olla muualla sillä rivillä) sekä ruutujoukkoja, joille
  tietty numerojoukko on varattu. _Asiantuntija_ lisää pakottavat päättelyketjut, ja
  _Äärimmäinen_-pulmia ei saa valmiiksi ilman arvaamista ja peruuttamista. Vaikeampien pulmien
  luominen kestää kauemmin, eivätkä 3×3-ruudukot ole koskaan _Keskivaikea_-tasoa vaikeampia.
- **Vain kertolasku**: jokainen vihje on tulo. Helpot kahden ruudun vihjeet jäävät pois, ja
  pulmasta tulee melko erilainen.
`,S=e({default:()=>C}),C=`# Valaise

Ruudukossa on valkoisia ja mustia ruutuja. Sijoita lamppuja valkoisiin ruutuihin niin,
että jokainen valkoinen ruutu valaistuu. Lamppu valaisee oman ruutunsa ja loistaa pitkin
riviään ja sarakettaan, kunnes musta ruutu tai ruudukon reuna tulee vastaan. Valmiissa
pulmassa kolmen asian on oltava kunnossa:

- jokainen valkoinen ruutu on valaistu;
- mikään lamppu ei ole toisen lampun valossa, eli kaksi lamppua ei koskaan näe toisiaan
  samalla rivillä tai samassa sarakkeessa;
- numeroidun mustan ruudun vieressä — suoraan sen ylä- ja alapuolella sekä vasemmalla ja
  oikealla — on tasan niin monta lamppua kuin numero kertoo. Numerottomien mustien
  ruutujen vieressä lamppuja saa olla kuinka monta tahansa.

Valaistut ruudut hohtavat keltaisina. Toisiaan valaisevat lamput muuttuvat punaisiksi, ja
niin muuttuu myös numero, joka ei voi enää toteutua: sen vieressä on jo liikaa lamppuja,
tai tilaa ei ole enää tarpeeksi.

## Ohjaimet

Pulma on valmis, kun koko ruudukko hohtaa eikä missään näy punaista. **Vihje** asettaa
yhden lampun — tai poistaa lampun, jota ratkaisussa ei ole — ja jättää loput sinulle. Peli
jatkuu, ja muutaman vihjeen jälkeen voitto ja sen tuoma tähti ovat yhä sinun.
**Ratkaise** täyttää koko ratkaisun lamput ja jättää piirtämäsi ristit paikoilleen.

### Hiiri ja kosketus

- **Napsauta** valkoista ruutua, niin siihen tulee lamppu. Napsauta uudestaan, niin
  lamppu poistuu.
- **Napsauta hiiren oikealla** valkoista ruutua, niin siihen tulee risti merkiksi siitä,
  ettei siihen voi tulla lamppua. Tee sama uudestaan, niin risti pyyhkiytyy pois.
  Ristittyyn ruutuun ei voi asettaa lamppua ennen kuin risti on poistettu, eikä
  lampulliseen ruutuun voi merkitä ristiä.
- **Risti** (ristipainike Kumoa-painikkeen vieressä) saa tavallisen napsautuksen lisäämään
  tai pyyhkimään ristin lampun sijaan, kun suljet pois monta ruutua kerralla. Paina
  painiketta uudelleen, niin palaat lamppuihin.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** liikuttavat kohdistinta ruudukossa.
- **Enter** asettaa lampun kohdistimen kohdalle tai poistaa sen, ja **välilyönti** (tai
  **I**) lisää ristin tai poistaa sen.
- **X** vastaa **Risti**-painiketta.

## Asetukset

- Ruudukon **leveys** ja **korkeus**.
- **Mustien ruutujen osuus (%)**: suunnilleen kuinka suuri osa ruudukosta on mustaa. Tämä
  on toive eikä lupaus: jos pulmaa ei saada luotua tuolla tiheydellä, mustia ruutuja
  tulee muutama enemmän.
- **Symmetria**: kuvio, jota mustat ruudut noudattavat — ei symmetriaa, kahden puoliskon
  peilaus tai kierto (_2-suuntainen_) tai neljän suunnan peilaus tai kierto
  (_4-suuntainen_). _4-suuntainen kierto_ vaatii neliön muotoisen ruudukon.
- **Vaikeustaso**: _Helppo_-pulmat ratkeavat päättelemällä ruutu kerrallaan, mihin lampun on
  pakko tulla ja mihin se ei voi tulla. _Keskivaikea_ vaatii vertailemaan ruutujoukkoja keskenään
  (”yhdessä näistä kolmesta on oltava lamppu, joten tähän ei voi tulla”). _Vaikea_-pulmissa voi
  joutua kokeilemaan lamppua johonkin ja seuraamaan seurauksia, kunnes jokin menee pieleen.
  Jokaisella pulmalla on tasan yksi ratkaisu.
`,w=e({default:()=>T}),T=`# Silmukka

Ruudukossa on pisteitä, ja osassa niiden välisistä ruuduista on luku. Piirrä pisteiden
välisiä himmeitä viivoja pitkin yksi suljettu silmukka niin, että:

- jokaisen numeroidun ruudun sivuista tasan niin moni kuin luku kertoo kuuluu silmukkaan;
- silmukka ei koskaan risteä eikä kosketa itseään — jokaisessa pisteessä on joko kaksi
  viivaa tai ei yhtään — ja silmukoita on vain yksi, ilman irrallisia päitä tai erillisiä
  palasia.

Perinteisessä versiossa ruudut ovat neliöitä, mutta sama pulma toimii myös kolmioilla,
kuusikulmioilla ja tusinalla oudompia laatoituksia, joissa luvut voivat olla paljon
suurempia kuin 4.

Viivat, jotka muodostavat väärän silmukan tai joita kohtaa kolme samassa pisteessä,
muuttuvat punaisiksi. Punaiseksi muuttuu myös luku, jonka ympärillä on liikaa viivoja tai
jolle ei ole enää tarpeeksi mahdollisia sivuja jäljellä. Luku harmaantuu, kun sen ympärillä
on juuri oikea määrä viivoja.

## Ohjaimet

**Ratkaise** piirtää koko silmukan. Pulma on valmis heti, kun silmukka on kokonainen ja
jokainen luku täsmää. Käyttämättömiä sivuja ei tarvitse rastia.

### Hiiri ja kosketus

- **Napsauta** himmeää sivua, niin siihen piirtyy viiva. Napsauta viivaa uudestaan, niin
  se poistuu.
- **Napsauta hiiren oikealla** sivua, niin siihen tulee rasti merkiksi siitä, ettei se
  varmasti kuulu silmukkaan. Tee sama uudestaan, niin rasti poistuu. Kumpi tahansa
  napsautus poistaa myös toisella tehdyn merkinnän.
- **Rasti** (rastipainike Kumoa-painikkeen vieressä) saa tavallisen napsautuksen
  rastimaan sivun tai poistamaan rastin viivan piirtämisen sijaan. Paina painiketta
  uudelleen, niin palaat piirtämään viivoja.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät kohdistinta sivulta toiselle. **Enter** piirtää viivan
  kohdistimen kohdalle tai poistaa sen, ja **välilyönti** lisää rastin tai poistaa sen.
- **X** vastaa **Rasti**-painiketta.

## Asetukset

- Ruudukon **leveys** ja **korkeus** laatoituksen yksikköinä. Neliöruudukossa se on
  yksinkertaisesti ruutujen määrä vaaka- ja pystysuunnassa. Muissa laatoituksissa lasketaan
  toistuvia kuvioita, joten ruutujen todellinen määrä vaihtelee.
- **Ruudukon tyyppi**: _Neliöt_, _Kolmiot_ ja _Hunajakenno_ ovat säännöllisiä
  laatoituksia. _Snub-neliö_, _Cairo_, _Suuri kuusikulmio_, _Kahdeksankulmiot_, _Leijat_,
  _Kukka_, _Kaksitoistakulmiot_ ja _Suuri kaksitoistakulmio_ yhdistelevät eri muotoja, ja
  kaksi _Penrose_-laatoitusta eivät toistu koskaan.
- **Vaikeustaso**: _Helppo_-pulmiin riittävät pelkät säännöt — viivojen laskeminen luvun
  ympäriltä, muistisääntö ”pisteessä kaksi viivaa tai ei yhtään” ja se, ettei silmukkaa suljeta
  liian aikaisin. _Keskivaikea_ lisää päättelyä pisteessä kohtaavista sivupareista (parista
  enintään yksi tai vähintään yksi on viiva). _Vaikea_ ketjuttaa näitä päätelmiä pisteestä
  toiseen, esimerkiksi vinottaista kakkosjonoa pitkin. _Asiantuntija_ pitää lisäksi kirjaa
  sivuista, joiden tiedetään olevan keskenään samanlaisia tai vastakkaisia. Arvaamista ei tarvita
  koskaan, ja jokaisella pulmalla on tasan yksi ratkaisu.
`,E=e({default:()=>D}),D=`# Magneetit

Suorakulmio on laatoitettu dominoilla, joista näkyvät vain ääriviivat. Jokainen domino on
joko magneetti — toinen puolisko \`+\`-napa ja toinen \`−\`-napa — tai tyhjä, jossa ei ole
napoja lainkaan. Reunojen luvut kertovat, montako \`+\`-napaa (sarakkeiden yläpuolella ja
rivien vasemmalla puolella) ja montako \`−\`-napaa (sarakkeiden alapuolella ja rivien
oikealla puolella) kullakin rivillä ja sarakkeessa on. Jos luku puuttuu, siitä rivistä tai
sarakkeesta ei ole vihjettä. Täytä jokainen domino niin, että kaikki luvut täsmäävät eikä
kaksi samanlaista napaa ole koskaan vierekkäin: \`+\` ei saa koskettaa toista \`+\`-napaa
eikä \`−\` toista \`−\`-napaa dominon rajan yli. Tyhjät dominot ovat neutraaleja ja saavat
olla minkä tahansa vieressä.

Toisiaan koskettavat samanlaiset navat näkyvät punaisina. Luku muuttuu punaiseksi, kun se
ei voi enää täsmätä — napoja on jo liikaa, tai niitä on liian vähän eikä lisää mahdu
mihinkään — ja harmaaksi, kun se täsmää. Pulma on valmis, kun jokainen domino on
täytetty, kaikki luvut täsmäävät eikä missään näy punaista.

## Ohjaimet

### Hiiri ja kosketus

- **Napsauta** dominon tyhjää puoliskoa, niin siitä tulee \`+\`-napa (ja toisesta
  puoliskosta \`−\`). Napsauta samaa puoliskoa uudestaan, niin magneetti kääntyy toisin
  päin, ja kolmannella kerralla domino tyhjenee. Tyhjäksi merkityn dominon
  napsauttaminen ei tee mitään.
- **Napsauta hiiren oikealla** täyttämätöntä dominoa, niin se merkitään tyhjäksi. Tee
  sama uudestaan, niin tyhjän merkinnän tilalle tulee kysymysmerkit, eli muistiinpano
  siitä, että domino on varmasti magneetti. Kolmas kerta tyhjentää dominon. Magneettiin
  tämä ei vaikuta.
- **Tyhjä** (sävytetty domino Kumoa-painikkeen vieressä) saa tavallisen napsautuksen
  toimimaan kuten napsautus hiiren oikealla: domino merkitään tyhjäksi, sitten
  kysymysmerkeillä ja sitten taas täyttämättömäksi. Paina painiketta uudelleen, niin palaat
  asettamaan magneetteja.
- **Ratkaise** täyttää koko ratkaisun.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät kohdistinta ruudukossa.
- **Enter** vaihtaa kohdistimen kohdalla olevan puoliskon järjestyksessä \`+\`, \`−\` ja
  täyttämätön, aivan kuten tavallinen napsautus.
- **Välilyönti** vaihtaa kohdistimen kohdalla olevan dominon järjestyksessä tyhjä,
  kysymysmerkki ja täyttämätön, aivan kuten napsautus hiiren oikealla.
- **B** vastaa **Tyhjä**-painiketta.

## Asetukset

- Ruudukon **leveys** ja **korkeus**. Jos pinta-ala on pariton, yksi ruutu jää yli ja
  piirretään viivoitettuna. Se ei kuulu mihinkään dominoon ja on neutraali.
- **Vaikeustaso**: _Helppo_-pulmissa riittää aina katsoa yhtä riviä, saraketta tai dominoa
  kerrallaan — lukua, joka jo täsmää, lukua, joka tarvitsee kaikki jäljellä olevat paikat, tai
  dominoa, jonka kumpaankaan puoliskoon tietty napa ei sovi. _Vaikea_ vaatii lisäksi päättelyä
  kokonaisista dominoista rivin tai sarakkeen suuntaan: varmasti magneetiksi tietty domino antaa
  yhden kumpaakin napaa, oli se kummin päin tahansa, eikä rivillä, jolle mahtuu enää yksi tyhjä,
  voi olla pitkittäin makaavaa tyhjää dominoa, ja niin edelleen. Jokaisella pulmalla on tasan
  yksi ratkaisu.
- **Karsi vihjeitä**: poistaa kaikki luvut, joita ei valitulla vaikeustasolla tarvita
  ratkaisemiseen. Silloin on paljon vaikeampi nähdä, mistä aloittaa.
`,O=e({default:()=>k}),k=`# Kartta

Kartta on jaettu alueisiin. Väritä jokainen alue yhdellä neljästä väristä niin, ettei
kahdella alueella, joilla on yhteistä rajaa, ole samaa väriä. Pelkästään kulmista
toisiaan koskettavat alueet saavat olla samanvärisiä. Muutama alue on väritetty valmiiksi,
ja ne on valittu niin, että kartan voi värittää loppuun vain yhdellä tavalla.

Jos kaksi naapurialuetta ovat samanvärisiä, niiden väliselle rajalle tulee punainen
\`!\`-merkki.

## Ohjaimet

**Ratkaise** värittää koko ratkaisun. Kartta välähtää, kun jokainen alue on väritetty eikä
missään näy punaista.

### Hiiri ja kosketus

- **Vedä** väri paikalleen: paina aluetta (tai jotakin kartan alla olevaa värilaikkua) ja
  päästä irti toisen alueen kohdalla, niin se saa saman värin. Jos vedät värittämättömältä
  alueelta, kartan ympäriltä tai pyyhekumilaikusta, alue, johon pudotat, tyhjenee.
- **Napsauta värilaikkua**, niin väri valitaan, ja **napsauta** sitten alueita, niin ne
  saavat sen värin. Kun napsautat valittua laikkua uudestaan, valinta poistuu.
- **Vedä hiiren oikealla** väri värittämättömälle alueelle, niin siihen tulee pieni sen
  värinen piste merkiksi siitä, että alue _voi_ olla sitä väriä. Alueella voi olla monta
  pistettä, ja kun vedät saman värin uudestaan, sen piste poistuu. Kun värilaikku on
  valittuna, pelkkä **napsautus hiiren oikealla** värittämättömään alueeseen lisää tai
  poistaa pisteen.
- **Numerot** (taukovalikossa) näyttää jokaisessa alueessa numeron, mikä helpottaa
  pulmasta juttelemista jonkun toisen kanssa, ja piilottaa numerot taas.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät kohdistinta kartalla, ja alue, jossa kohdistin on,
  korostetaan ääriviivalla. Näppäimet **1**–**4** värittävät alueen, **välilyönti**
  tyhjentää sen ja **Enter** poimii sen värin. Sen jälkeen voit kuljettaa väriä
  nuolinäppäimillä ja pudottaa sen painamalla **Enter** (tai pisteeksi painamalla
  **välilyöntiä**). Jos painat **Enter** kahdesti liikkumatta välillä, alue tyhjenee.
- **L** vastaa **Numerot**-painiketta.

## Asetukset

- Kartan pohjana olevan ruudukon **leveys** ja **korkeus** ruutuina.
- **Alueet**: moneenko alueeseen kartta jaetaan.
- **Vaikeustaso**: _Helppo_-pulmissa on aina jokin alue, jolle on jäljellä vain yksi väri.
  _Keskivaikea_ lisää päättelyä naapurialueiden pareista, joiden on jaettava samat kaksi väriä
  keskenään. _Vaikea_ vaatii tällaisten päätelmien ketjuja kartan halki. Kaikki nämä ratkeavat
  arvaamatta. _Äärimmäinen_ lupaa vain, että ratkaisu on yksikäsitteinen: voit joutua kokeilemaan
  jotakin väriä ja seuraamaan sitä, kunnes jokin menee pieleen.
`,A=e({default:()=>j}),j=`# Miinat

Peitettyjen ruutujen alle on kätketty miinoja. Avaa jokainen ruutu, jossa _ei_ ole
miinaa. Jokainen avaamasi ruutu kertoo, montako miinaa sen kahdeksassa naapuriruudussa
on. Jos avaat miinan, häviät.

Tässä versiossa on yksi erikoisuus: sinun ei tarvitse koskaan arvata. Mitään ei päätetä
ennen ensimmäistä napsautusta. Vasta silloin miinat asetellaan niin, että napsauttamasi
ruutu on tyhjä ja koko ruudukon voi ratkaista siitä eteenpäin pelkällä päättelyllä. Jos
tuntuu, että olet jumissa, jossain on aina turvallinen ruutu, jonka luvut jo paljastavat.

Tilarivi näyttää, montako lippua olet asettanut ja montako miinaa ruudukossa on, ja kello
lähtee käyntiin ensimmäisestä napsautuksesta. Kun osut miinaan, loputkin miinat
paljastuvat ja väärät liput rastitetaan. Voit kumota kohtalokkaan napsautuksen ja jatkaa,
mutta kuolema jää muistiin tilariville.

## Ohjaimet

### Hiiri ja kosketus

- **Napsauta** peitettyä ruutua, niin se avautuu. Jos ruutu on tyhjä (naapureissa ei ole
  miinoja), myös sen naapurit avautuvat, ja niin edelleen ulospäin.
- **Napsauta hiiren oikealla** peitettyä ruutua, niin epäillyn miinan päälle tulee lippu.
  Tee sama uudestaan, niin lippu poistuu. Liputettua ruutua ei voi avata vahingossa.
- **Napsauta lukua**, jonka ympärillä on jo oikea määrä lippuja, niin kaikki sen muut
  peitetyt naapurit avautuvat kerralla. **Napsautus hiiren keskipainikkeella** luvun
  kohdalla tekee saman.
- **Vihje** avaa yhden turvallisen ruudun — tai poistaa lipun, jonka alla ei ole miinaa —
  ja jättää loput sinulle. Muutaman vihjeen jälkeen voitto ja sen tuoma tähti ovat yhä
  sinun.
- **Ratkaise** paljastaa koko ruudukon ja liputtaa jokaisen miinan. Sitä ei lasketa omaksi
  voitoksesi.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät kohdistinta ruudukossa.
- **Enter** toimii kohdistimen kohdalla kuin tavallinen napsautus: se avaa peitetyn
  ruudun tai avaa luvun ympäriltä, kun kaikki sen liput ovat paikoillaan.
- **Välilyönti** asettaa tai poistaa lipun, kuten hiiren oikea painike.

## Asetukset

- Ruudukon **leveys** ja **korkeus**.
- **Miinat**: montako miinaa piilotetaan. Määrän sijaan voit antaa myös prosenttiosuuden,
  esimerkiksi \`20%\`. Jos miinoja on hyvin tiheässä, ratkeavan ruudukon löytäminen kestää.
- **Varmista ratkeavuus**: kun asetus on päällä (oletus), ruudukko on taatusti
  ratkaistavissa ensimmäisestä napsautuksesta alkaen ilman arvaamista. Ota se pois
  päältä, jos haluat tavallisia satunnaisia ruudukoita — niissä lopussa voi joutua
  heittämään kolikkoa.
`,M=e({default:()=>N}),N=`# Verkko

Neliölaattojen ruudukkoon on rakennettu johtoverkko, ja sitten jokaista laattaa on
käännetty satunnaisesti. Käännä laatat takaisin niin, että ne kaikki liittyvät yhdeksi
verkoksi: jokaisen johdonpään on kohdattava naapurilaatan johto, eikä yksikään johto saa
jäädä osoittamaan seinään. Valmis verkko on puu, joten siinä ei ole suljettuja silmukoita.

Laatat, jotka on jo kytketty ruudukon keskellä olevaan lähdelaattaan, näkyvät avuksesi
sinisinä, ja loput pysyvät harmaina. Silmukkaan kuuluva johto piirretään punaisena.
Laattojen väliset paksut mustat viivat ovat esteitä: mikään johto ei kulje niiden yli,
mikä vihjaa, miten niiden molemmin puolin olevien laattojen on oltava. Tilarivi näyttää,
montako laattaa on tällä hetkellä kytketty.

## Ohjaimet

### Hiiri ja kosketus

- **Napsauta** laattaa, niin se kääntyy vastapäivään. **Napsauta hiiren oikealla**, niin
  se kääntyy myötäpäivään.
- **Napsauta hiiren keskipainikkeella** laattaa, niin se **lukittuu**, kun olet siitä
  varma. Lukittu laatta on sävytetty eikä käänny, ennen kuin avaat lukituksen samalla
  tavalla. **Napsautus hiiren oikealla** kääntää laattaa eikä lukitse sitä, joten
  lukitseminen onnistuu vain näin.
- **Lukitse** (riippulukkopainike Kumoa-painikkeen vieressä) saa tavallisen napsautuksen
  lukitsemaan laatan tai avaamaan sen lukituksen kääntämisen sijaan, mikä on
  kosketuslevyllä helpompaa kuin keskipainike. Napsautus hiiren oikealla kääntää laattaa
  edelleen myötäpäivään. Paina painiketta uudelleen, niin palaat kääntämään.
- **Sekoita** kääntää jokaisen lukitsemattoman laatan uuteen satunnaiseen asentoon, kun
  kaipaat vaihtelua jumiin jääneeseen pulmaan.
- Kiertyvässä ruudukossa neljä **nuolipainiketta** vierittää näkymää, niin vastakkaisten
  reunojen laatat saa vierekkäin.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät kohdistinta ruudukossa.
- **Enter** tai **A** kääntää kohdistimen kohdalla olevaa laattaa vastapäivään, **D**
  myötäpäivään ja **F** puoli kierrosta.
- **Välilyönti**, **S** tai **L** lukitsee kohdistimen kohdalla olevan laatan tai avaa sen
  lukituksen. Hiirellä myös **Shift+napsautus** lukitsee laatan, aivan kuten hiiren
  keskipainike.
- **K** vastaa **Lukitse**-painiketta ja **J** **Sekoita**-painiketta.
- Kiertyvässä ruudukossa **Shift + nuolinäppäimet** vierittävät näkymää (kuten neljä
  nuolipainiketta), niin vastakkaisten reunojen laatat näkyvät vierekkäin. **Ctrl +
  nuolinäppäimet** siirtävät lähdelaattaa, josta sininen korostus leviää.

## Asetukset

- Ruudukon **leveys** ja **korkeus** laattoina.
- **Seinät kiertyvät ympäri**: johdot voivat jatkua ruudukon reunan yli vastakkaiselle
  reunalle.
- **Esteiden todennäköisyys**: luku 0:n ja 1:n väliltä. Se kertoo, kuinka suuri osa
  johdottomista laattojen välisistä rajoista saa esteen. Esteet eivät koskaan muuta
  johtojen asettelua: sama satunnaissiemen antaa aina saman ruudukon, joten
  todennäköisyyden nostaminen vain lisää vihjeitä.
- **Varmista yksikäsitteinen ratkaisu**: tavallisesti pulma tehdään niin, että vain yksi
  laattojen asento toimii. Ota asetus pois päältä, jos haluat pulmat nopeammin ja siedät
  sen, että joskus jokin kohta voi ratketa kahdella tavalla.
`,P=e({default:()=>F}),F=`# Liukuverkko

Jokaisessa laatassa on pala johdotusta: suora pätkä, kulma, T-risteys tai pisteeseen
päättyvä umpipää. Oikein koottuina palat muodostavat yhden verkon, joka vie virran
sävytetyn keskilaatan virtalähteestä jokaiseen laattaan – ilman silmukoita ja ilman
tyhjyyteen osoittavia haaroja. Ruudukko on sekoitettu liu'uttamalla kokonaisia rivejä ja
sarakkeita, joten samalla tavalla se myös korjataan: laattoja ei voi kääntää, vain
siirtää.

Laatat, joihin virta juuri nyt kulkee, näkyvät sinisinä; muut ovat harmaita. Laattojen
väliset paksut mustat seinät ovat esteitä. Esteen yli ei kulje mikään yhteys, joten ne
kertovat, missä valmiissa verkossa ei varmasti ole liitosta.

## Ohjaimet

### Hiiri ja kosketus

- **Napsauta** rivin tai sarakkeen vieressä olevaa nuolta, niin koko rivi tai sarake
  liukuu askeleen nuolen suuntaan. Päästä ulos työntyvä laatta tulee takaisin saman rivin
  tai sarakkeen toisesta päästä. **Napsauta hiiren oikealla** nuolta, niin liuku menee
  vastakkaiseen suuntaan.
- Keskirivillä ja -sarakkeella ei ole nuolia: virtalähde ei liiku koskaan.
- **Ratkaise** näyttää heti valmiin verkon, niin voit verrata sitä omaan yritykseesi.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät korostusta reunan nuolten ympäri.
- **Enter** liu'uttaa korostettua riviä tai saraketta nuolen suuntaan ja **välilyönti**
  päinvastaiseen suuntaan.

## Asetukset

- Ruudukon **Leveys** ja **Korkeus**.
- **Seinät kiertyvät ympäri**: kun tämä on päällä, oikea reuna jatkuu vasemmalta ja
  alareuna ylhäältä, joten johdot (ja esteet) voivat kulkea ruudukon reunan yli.
  Katkoviivainen kehys tarkoittaa kiertyvää ruudukkoa; yhtenäinen paksu kehys on seinä
  joka puolella.
- **Esteiden todennäköisyys**: kuinka moneen käyttämättömään laatan reunaan tulee este,
  nollasta (ei yhteenkään) ykköseen (jokaiseen reunaan, jota valmis verkko ei käytä). Mitä
  enemmän esteitä, sitä helpompi pulma. Esteet arvotaan muusta ruudukosta erillään, joten
  sama satunnaissiemen suuremmalla todennäköisyydellä antaa saman pulman, mutta enemmän
  vihjeitä.
- **Sekoitussiirtojen määrä**: jätä nollaan, niin ruudukko sekoitetaan perusteellisesti,
  tai anna luku, niin sekoitukseen käytetään tasan niin monta liu'utusta. Silloin
  tavoitteena on löytää ja perua ne; tilarivi näyttää tavoitteen.
`,I=e({default:()=>L}),L=`# Kuvio

Ruudukon jokainen ruutu on salaa joko musta tai valkoinen. Rivien vieressä ja sarakkeiden
yläpuolella olevat luvut kertovat järjestyksessä, kuinka pitkiä mustien ruutujen jaksoja
kyseisellä rivillä tai sarakkeessa on; peräkkäisten jaksojen välissä on aina vähintään
yksi valkoinen ruutu. Väritä mustat ruudut niin, että jokainen rivi ja sarake vastaa
lukujaan. Tällaisia pulmia kutsutaan yleensä japanilaisiksi ristikoiksi, nonogrammeiksi
tai picrossiksi.

Kuvat arvotaan satunnaisesti, joten kuvaa ei voi arvata: kaikki on pääteltävä luvuista.
Jokainen pulma tarkistetaan etukäteen, jotta se ratkeaa päättelemällä yksi rivi tai sarake
kerrallaan – kokeilemaan ei tarvitse ryhtyä.

Rivin tai sarakkeen luvut muuttuvat harmaiksi, kun sen mustat jaksot vastaavat niitä, ja
punaisiksi, jos valmiit jaksot eivät mitenkään sovi lukuihin. Pulma on ratkaistu, kun
jokainen rivi ja sarake vastaa lukujaan; pisteet ovat vain muistin tukena.

## Ohjaimet

### Hiiri ja kosketus

- **Napsauta** ruutua, niin se muuttuu mustaksi; napsauta mustaa ruutua uudelleen, niin se
  tyhjenee.
- **Napsauta hiiren oikealla**, niin ruutuun tulee piste merkiksi siitä, että ruutu on
  varmasti valkoinen. Pisteellisessä ruudussa sama toiminto poistaa pisteen.
- **Vedä**, niin maalaat kerralla suoran jonon mustia ruutuja, ja **vedä hiiren oikealla**,
  niin saat jonon pisteitä. Muutos koskee vain ruutuja, jotka olivat samassa tilassa kuin
  aloitusruutu, joten pistejonon vetäminen mustien ruutujen yli ei muuta niitä.
- **Napsauta hiiren keskipainikkeella** ruutua, niin se palautuu tuntemattomaksi. Hiirellä voit
  myös vetää rulla pohjaan painettuna, jolloin tyhjennät kokonaisen suorakulmion sen sisällöstä
  välittämättä.
- **Pyyhi** (pyyhekumipainike Kumoa-painikkeen vieressä) saa vasemman painikkeen tekemään
  saman: napsauta ruutua, niin se tyhjenee, tai vedä, niin tyhjennät kokonaisen
  suorakulmion. Paina painiketta uudelleen, niin palaat maalaamaan mustaa.
- **Vihje** täyttää yhden ruudun – aina sellaisen, jonka yksi rivi tai sarake ratkaisee
  yksinään – tai korjaa ruudun, joka on ristiriidassa ratkaisun kanssa. Peli jatkuu, ja
  muutaman vihjeen jälkeen voitto ja sen tähti ovat yhä sinun.
- **Ratkaise** täyttää koko kuvan puolestasi.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät kohdistinta.
- **Enter** maalaa kohdistimen ruudun mustaksi tai tyhjentää sen, ja **välilyönti** lisää
  tai poistaa pisteen.
- Pidä **Ctrl** pohjassa kohdistinta siirtäessäsi, niin maalaat mustaa matkan varrelle;
  **Shift** jättää pisteitä, ja molemmat yhdessä tyhjentävät.
- Hiirellä **Shift+napsautus** tyhjentää ruutuja samoin kuin hiiren keskipainike.
- **E** vastaa **Pyyhi**-painiketta.

## Asetukset

- Ruudukon **Leveys** ja **Korkeus**. Valmiit koot ovat 10×10:stä 30×30:een; isompien
  ruudukoiden luominen kestää hetken pidempään.
`,R=e({default:()=>z}),z=`# Helmet

Ruudukon joissakin ruuduissa on musta tai valkoinen helmi. Piirrä yksi suljettu silmukka,
joka kulkee ruudun keskeltä toisen ruudun keskelle vaaka- tai pystysuunnassa, risteämättä
ja haarautumatta. Silmukan ei tarvitse käydä joka ruudussa, mutta jokaisen helmen kautta
sen on kuljettava:

- **mustassa helmessä** silmukka kääntyy ja kulkee sitten suoraan molempien viereisten
  ruutujen läpi, joihin se helmestä jatkaa;
- **valkoisessa helmessä** silmukka kulkee suoraan läpi ja kääntyy ainakin toisessa
  niistä kahdesta ruudusta, joihin se helmestä jatkaa.

Merkitystä on vain ruuduilla, joissa silmukka käy juuri ennen helmeä ja heti sen jälkeen –
ei kaikilla helmen vieressä olevilla ruuduilla.

Helmi, jonka sääntö on jo rikottu, saa punaisen kehän. Heti kun ruudukossa on jokin
suljettu silmukka, kaikki sen ulkopuoliset pätkät näkyvät punaisina, samoin jokainen ruutu,
jossa on kolme pätkää tai enemmän.

## Ohjaimet

**Ratkaise** piirtää koko silmukan. Pulma on ratkaistu, kun silmukka on yksi suljettu
lenkki eikä missään näy punaista.

### Hiiri ja kosketus

- **Napsauta** ruutujen välistä reunaa (kahden ruudun rajan tuntumassa), niin sen yli
  piirtyy silmukan pätkä; napsauta uudelleen, niin se poistuu.
- **Vedä** ruutujen läpi, niin piirrät monta pätkää kerralla. Vetäminen valmiita pätkiä pitkin
  pyyhkii ne pois; jos veto alkaa valmiilta pätkiltä ja jatkuu tyhjiin ruutuihin, se ensin
  pyyhkii ja sitten piirtää. Voit lyhentää reittiä ennen irti päästämistä palaamalla jo
  ohittamasi ruudun päälle; palaamalla ruutuun, josta aloitit, suljet silmukan.
- **Napsauta hiiren oikealla** ruutujen välistä reunaa, niin siihen tulee pieni risti:
  ”tähän ei tule pätkää”. Ristin yli ei voi piirtää, ennen kuin risti on poistettu.
  **Vedä hiiren oikealla** ruutujen yli, niin jokaiseen ylitettyyn reunaan tulee risti.
- **Risti** (ristipainike Kumoa-painikkeen vieressä) saa tavallisen napsautuksen lisäämään
  tai poistamaan ristin ja vedon lisäämään kokonaisen jonon ristejä: kuten piirtäessä,
  valmiista risteistä alkava veto poistaa ne ensin, ja veto ohittaa reunat, joilla on jo
  pätkä. Paina painiketta uudelleen, niin palaat piirtämään silmukkaa.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät kohdistinta. **Ctrl+nuoli** piirtää tai poistaa pätkän
  kohdistinruudun kyseiselle sivulle, **Shift+nuoli** lisää tai poistaa sinne ristin.
  **Enter** aloittaa näppäimistöllä vedon kohdistinruudusta: liiku nuolilla ja hyväksy
  reitti painamalla uudelleen Enteriä, tai hylkää se **välilyönnillä**.
- **X** vastaa **Risti**-painiketta; kun se on päällä, myös näppäimistöveto lisää ristejä.

## Asetukset

- Ruudukon **Leveys** ja **Korkeus** ruutuina (kumpikin vähintään viisi).
- **Vaikeustaso**: _Helppo_-pulmat ratkeavat päättelemällä jokaisesta helmestä ja sen
  vieressä olevista ruuduista. _Kinkkinen_ vaatii lisäksi huomaamaan, milloin pätkä
  sulkisi pienen silmukan liian aikaisin ja jättäisi muita helmiä sen ulkopuolelle.
  (5×5-kokoinen Kinkkinen luodaan Helppona, kuten alkuperäisessäkin.)
- **Salli ratkeamattomat**: säilytä kaikki helmet, jotka silmukkaan sopivat, sen sijaan
  että ne karsittaisiin pienimmäksi joukoksi, jolla on yksikäsitteinen ratkaisu.
  Alkuperäisestä peritty virheenetsintävalinta.
`,B=e({default:()=>V}),V=`# Nappulat

Lauta on täynnä nappuloita, ja yksi reikä on tyhjä, satunnaisella laudalla muutama. Nappula saa hypätä vaaka- tai
pystysuunnassa viereisen nappulan yli suoraan sen takana olevaan tyhjään reikään; yli
hypätty nappula poistetaan. Hypi, kunnes laudalla on jäljellä vain yksi nappula.

Tämä on vanha kunnon lautapasianssi (peg solitaire). **Risti**-lauta on tuttu englantilainen
muoto ja **Kahdeksankulmio** eurooppalainen (siinä tyhjä reikä on sivussa keskeltä, koska
keskeltä aloittaen peliä ei saa läpi). **Satunnainen**-laudat ovat tietokoneen
kasvattamia omituisia muotoja. Tyhjät kohdat, joissa ei ole reikää, eivät kuulu lautaan.

Pysyvästi jumiin et voi jäädä: jos hyppyjä ei ole jäljellä ja nappuloita on enemmän kuin
yksi, peli päättyy, mutta **Kumoa** vie taaksepäin niin pitkälle kuin haluat. Tilarivi
näyttää jäljellä olevat nappulat ja tehdyt siirrot.

## Ohjaimet

### Hiiri ja kosketus

- **Vedä** nappula ja pudota se tyhjään reikään, joka on tasan kahden ruudun päässä
  suorassa linjassa toisen nappulan takana. Muualle pudotettu nappula palaa paikalleen.
- Tai **napsauta** nappulaa, niin nostat sen (se muuttuu oranssiksi ja reiät, joihin se
  voi hypätä, merkitään), ja napsauta sitten reikää, johon haluat hypätä. Saman nappulan
  napsauttaminen uudelleen laskee sen takaisin.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät kohdistinta laudalla.
- **Enter** tai **välilyönti** nappulan kohdalla nostaa sen; sen jälkeen nuolinäppäin
  hyppää sillä siihen suuntaan, jos siirto on sallittu, ja uusi **Enter** laskee sen
  takaisin.

## Asetukset

- Laudan **Leveys** ja **Korkeus**, kumpikin vähintään 4.
- **Laudan tyyppi**: _Risti_ ja _Kahdeksankulmio_ ovat perinteiset muodot, ja niitä saa
  vain koossa 7×7. _Satunnainen_ antaa joka kerta erimuotoisen laudan – aina sellaisen,
  jonka voi tyhjentää yhteen nappulaan, koska se on rakennettu tekemällä hyppyjä
  takaperin yhdestä nappulasta alkaen.
`,H=e({default:()=>U}),U=`# Näkyvyys

Joissakin ruudukon ruuduissa on luku. Väritä ruutuja mustiksi niin, että neljä sääntöä
pätee yhtä aikaa:

- yksikään lukuruutu ei ole musta;
- kaksi mustaa ruutua ei saa koskettaa toisiaan sivuittain (kulmittain saa);
- valkoiset ruudut muodostavat yhden yhtenäisen alueen, jossa ruudut liittyvät toisiinsa
  sivuistaan;
- jokainen luku kertoo, montako valkoista ruutua sen oma ruutu näkee: itsensä sekä kaiken
  suoraan ylös, alas, vasemmalle ja oikealle, kunnes musta ruutu tai ruudukon reuna tulee
  vastaan.

Tämä on Nikolin _Kurodoko_, joka tunnetaan myös nimillä _Kuromasu_ ja _Where is Black
Cells_. Jos luku näkee jo tarpeeksi ruutuja, jokaisen sen näkemän jonon perässä on musta
ruutu. Jos luku näkisi liikaa, mikäli yksittäinen tuntematon ruutu olisi valkoinen, siinä
ruudussa on musta. Ruutua, joka on ainoa yhteys kahden valkoisen ryhmän välillä, ei
koskaan saa värittää mustaksi. Jokainen pulma ratkeaa tällaisella päättelyllä; arvata ei
tarvitse.

Virheet näkyvät punaisina: toisiaan koskettavien mustien ruutujen ryhmä saa punaisen
kehyksen, pääalueesta erilleen jääneet valkoiset ruudut saavat punaisen ääriviivan, ja
luku muuttuu punaiseksi, kun se ei voi enää nähdä tarpeeksi ruutuja tai näkee jo varmasti
liikaa. Pulma on ratkaistu, kun mitään sääntöä ei ole rikottu; valkoisiin ruutuihin ei
tarvitse merkitä pisteitä.

## Ohjaimet

### Hiiri ja kosketus

- **Napsauta** ruutua, niin se muuttuu mustaksi. Napsauta uudelleen, niin siihen tulee
  piste (ruutu, jonka tiedät valkoiseksi), ja vielä kerran, niin se tyhjenee.
- **Napsauta hiiren oikealla**, niin järjestys on päinvastainen: piste, sitten musta,
  sitten tyhjä.
- **Vedä**, niin muutat monta ruutua kerralla, ja **vedä hiiren oikealla**, niin ne
  vaihtuvat toiseen suuntaan. Muutos koskee vain ruutuja, jotka olivat alussa samanlaisia
  kuin ensimmäinen, joten pisteitä vetämällä et koske mustiin ruutuihisi.
- **Pyyhi** (pyyhekumipainike Kumoa-painikkeen vieressä) saa napsautuksen tyhjentämään
  ruudun ja vedon tyhjentämään kaikki mustat ruudut ja pisteet, joiden yli se kulkee,
  olivatpa ne kumpia tahansa. Paina painiketta uudelleen, niin palaat maalaamaan.
- **Vihje** täyttää yhden ruudun, joka seuraa siitä, mitä laudalla jo on — tai korjaa
  ruudun, joka on ristiriidassa ratkaisun kanssa. Pulma jatkuu, ja muutaman vihjeen
  jälkeenkin voitto — ja siitä saatava tähti — on sinun.
- **Ratkaise** täyttää koko ruudukon ja merkitsee jokaisen valkoisen ruudun pisteellä.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät kohdistinta ruudukossa.
- **Enter** toimii kohdistimen ruudussa kuin hiiren vasen painike ja **välilyönti** kuin
  oikea.
- **E** vastaa **Pyyhi**-painiketta ja **H** **Vihje**-painiketta.

## Asetukset

- Ruudukon **Leveys** ja **Korkeus**. Valmiit koot ovat 9×6:sta 16×11:een; luoda voi mitä
  tahansa 30×30:een asti, mutta yhden tai kahden ruudun pikkuruudukoista ei saa reiluja
  pulmia.
`,W=e({default:()=>G}),G=`# Suorakulmiot

Joissakin ruudukon ruuduissa on luku. Jaa koko ruudukko suorakulmioihin niin, että
jokaisessa suorakulmiossa on tasan yksi luku ja se luku on suorakulmion pinta-ala
(leveys kertaa korkeus). Esimerkiksi 6 on 1×6-, 2×3-, 3×2- tai 6×1-kokoisessa palassa;
se, mikä niistä ja missä kohtaa palaa luku on, selviää naapureista päättelemällä.

Pulmat luodaan satunnaisesti, ja oletuksena luvut sijoitetaan niin, että vain yksi jako
toimii. Pulma on alun perin japanilaisesta Nikoli-lehdestä, jossa sen nimi on Shikaku.

## Ohjaimet

### Hiiri ja kosketus

- **Vedä** alueen yli, niin sen ympärille piirtyy suorakulmio: ääriviivat piirretään ja
  sisään jääneet viivat poistetaan. Ruudukon viivaa pitkin vetäminen piirtää vain sen
  viivan.
- **Napsauta** ruudukon viivaa, niin lisäät tai poistat juuri sen yhden reunan.
- **Vedä hiiren oikealla** alueen yli, niin sen sisällä olevat viivat pyyhkiytyvät pois,
  mutta ääriviivat jäävät. **Napsautus hiiren oikealla** ruudukon viivaan lisää tai
  poistaa sen samoin kuin tavallinen napsautus.
- **Pyyhi** (pyyhekumipainike Kumoa-painikkeen vieressä) saa tavallisenkin vedon
  pyyhkimään: vedä alueen yli, niin sen sisällä olevat viivat poistuvat, tai napsauta
  ruudukon viivaa, niin se poistuu. Kun painike on päällä, napsautus ei koskaan lisää
  viivaa. Paina painiketta uudelleen, niin palaat piirtämään.
- **Ratkaise** tekee koko jaon puolestasi.

Vedon aikana piirrettävän suorakulmion ääriviivat näkyvät, ja sen koko näkyy tilarivillä.
Oikean kokoinen valmis suorakulmio sävytetään. Suljettu suorakulmio, joka ei voi koskaan
olla oikein, merkitään: sen luku muuttuu punaiseksi, jos suorakulmio on sille väärän
kokoinen, ja suorakulmio viivoitetaan, jos siinä ei ole lukua ollenkaan. Pulma on
ratkaistu, kun jokainen ruutu on oikeanlaisen suorakulmion sisällä.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät kohdistinta.
- **Enter** aloittaa suorakulmion vetämisen kohdistimesta; siirrä kohdistin vastakkaiseen
  kulmaan ja piirrä suorakulmio painamalla uudelleen **Enter**.
- **Välilyönti** toimii samoin, mutta pyyhkii suorakulmion sisältä.
- **E** vastaa **Pyyhi**-painiketta.

## Asetukset

- Ruudukon **Leveys** ja **Korkeus**. Valmiit koot ovat 7×7:stä 19×19:ään.
- **Laajennuskerroin** – luo pienempi ruudukko ja venytä se pyydettyyn kokoon, jolloin
  pulmassa on vähemmän mutta isompia suorakulmioita. 0 (oletus) tarkoittaa, ettei venytetä
  lainkaan; 0,5 tekee alkuruudukosta kaksi kolmasosaa lopullisesta koosta kumpaankin
  suuntaan. Suurilla arvoilla suorakulmioita jää vain kourallinen ja pulmasta tulee
  lastenleikkiä.
- **Varmista yksikäsitteinen ratkaisu** – yleensä päällä. Kun otat sen pois, luvut voivat
  olla missä tahansa kohtaa suorakulmiotaan. Luominen on nopeampaa, mutta pulmalla voi olla
  useita ratkaisuja – silloin mikä tahansa sääntöjen mukainen jako kelpaa.
`,se=e({default:()=>K}),K=`# Samegame

Lauta on täynnä värillisiä ruutuja. Valitse vähintään kahden samanvärisen ruudun ryhmä,
jonka ruudut koskettavat toisiaan sivuistaan, ja poista se. Aukon yläpuolella olevat
ruudut putoavat alas, ja kun sarake tyhjenee, sen oikealla puolella olevat sarakkeet
liukuvat täyttämään aukon. Tyhjennä koko lauta, niin voitat. Jos ruutuja on jäljellä,
mutta mitkään kaksi vierekkäistä ruutua eivät ole samanvärisiä, et voi enää tehdä mitään –
kumoa ja kokeile toista järjestystä.

Isot ryhmät ovat paljon arvokkaampia kuin pienet: _n_ ruudun poistaminen tuo
oletuspisteytyksellä (_n_ − 2)² pistettä, joten pari ei tuo mitään, kolme ruutua yhden
pisteen ja kymmenen ruutua 64. Tilarivi näyttää pisteesi ja, kun ryhmä on valittuna,
montako ruutua siinä on ja paljonko se toisi.

Jokainen luotu lauta rakennetaan niin, että sen _voi_ tyhjentää kokonaan (ellet poista
asetusta käytöstä) – mutta hyvin pisteitä tuovan järjestyksen löytäminen jää sinulle.

**Ratkaise**-painiketta ei ole: tietokone tietää, että lauta on tyhjennettävissä, mutta
se ei kerro, miten.

## Ohjaimet

### Hiiri ja kosketus

- **Napsauta** ruutua, niin koko sen ryhmä valitaan; ryhmä näkyy vaaleampana ja paksun
  ääriviivan ympäröimänä. **Napsauta valittua ryhmää uudelleen**, niin se poistuu.
  Napsautus muualle siirtää valinnan.
- **Napsauta hiiren oikealla** valittua ryhmää, niin valinta poistuu.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät kohdistinta laudalla (reunan yli kohdistin siirtyy
  vastakkaiselle puolelle).
- **Enter** valitsee kohdistimen kohdalla olevan ryhmän, ja toinen painallus poistaa sen.
- **Välilyönti** valitun ryhmän kohdalla poistaa valinnan.

## Asetukset

- Laudan **leveys** ja **korkeus**.
- **Värien määrä** 3–9 (2 on sallittu, jos ratkeavuutta ei varmisteta). Mitä enemmän
  värejä, sitä pienempiä ryhmiä ja sitä vaikeampi lauta.
- **Pisteytystapa**: oletuksena _(n−2)²_ tai _(n−1)²_, joka palkitsee myös pareista.
- **Varmista ratkeavuus**: kun tämä on valittuna, lauta rakennetaan takaperin tyhjästä
  laudasta, joten ainakin yksi tapa tyhjentää se on olemassa. Poista valinta, niin saat
  tavallisen satunnaisen laudan: se syntyy nopeammin ja siinä on usein isompia alueita,
  mutta sitä ei välttämättä voi tyhjentää.
`,ce=e({default:()=>le}),le=`# Tienviitta

Jokaisessa ruudussa on nuoli, ja muutamassa ruudussa myös luku. Yhdistä ruudut yhdeksi
reitiksi, joka on numeroitu 1:stä N:ään (N on ruutujen määrä), niin että jokaisen ruudun
seuraaja on jossakin sen nuolen suunnassa: ruutu 1 osoittaa kohti kakkosta, kakkonen
kohti kolmosta ja niin edelleen. Seuraaja voi olla nuolen suunnassa kuinka kaukana
tahansa, ei vain vieressä. Viimeinen ruutu on merkitty tähdellä, eikä se osoita
mihinkään.

Ensimmäinen ja viimeinen luku näytetään aina, ja muita juuri niin monta, että reitti on
yksikäsitteinen. Jokaisella pulmalla on tasan yksi ratkaisu, ja sen löytää pelkällä
päättelyllä.

Virheet näkyvät punaisina: kaksi ruutua, joilla on sama luku; luku, jonka seuraaja ei ole
sen nuolen suunnassa; tai ketju, joka jatkuu annetun lukunsa ohi. Pulma on ratkaistu, kun
luvut 1–N kulkevat jokaisen ruudun kautta eikä punaista näy missään.

## Ohjaimet

### Hiiri ja kosketus

- **Vedä** ruudusta toiseen ruutuun sen nuolen suunnassa, niin jälkimmäisestä tulee
  ensimmäisen seuraaja. **Vedä hiiren oikealla**, niin yhdistät toiseen suuntaan: ruudusta
  siihen ruutuun, jonka pitäisi tulla ennen sitä.
- Kun yhdistettyjen ruutujen joukossa on luku, numerointi leviää koko ketjuun ja näkyy
  sinisenä. Ketju, jossa ei vielä ole lukua, merkitään kirjaimella ja lisäyksillä (\`a\`,
  \`a+1\`, \`a+2\`, ...); heti kun se liittyy numeroituun ruutuun, kirjaimet muuttuvat
  luvuiksi. Jos liität ketjun ruutuun, joka on jo yhdistetty, vanha yhteys korvautuu.
- Jokaisessa ruudussa, joka vielä tarvitsee edeltäjän, on pieni piste vasemmassa
  alakulmassa, ja nuoli haalistuu, kun sen ruudulla on seuraaja. Tehtävä on siis aina
  yhdistää tumma nuoli pisteelliseen ruutuun.
- **Napsauta hiiren oikealla** ruutua, niin sen molemmat yhteydet poistuvat. **Vedä**
  ruutu laudan ulkopuolelle, niin käy samoin, tai **vedä hiiren oikealla** se laudan
  ulkopuolelle, niin koko ketju hajoaa.
- **Katkaise** (katkenneen lenkin painike Kumoa-painikkeen vieressä) saa ruudun
  napsautuksen hajottamaan sen koko ketjun, joka ikisen yhteyden, ja ruudun vetäminen laudan
  ulkopuolelle tekee saman. Vetäminen ruudusta ruutuun yhdistää ne edelleen. Paina
  painiketta uudelleen, niin toiminto kytkeytyy pois.
- **Ratkaise** täyttää koko reitin.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät kohdistinta.
- **Enter** ruudun kohdalla aloittaa siitä yhteyden; siirrä kohdistin seuraajaan ja tee
  yhteys painamalla uudelleen **Enter** (samassa ruudussa painettuna se peruu).
- **Välilyönti** tai **X** poistaa kohdistimen ruudun yhteydet; **Shift + X** hajottaa
  koko ketjun.
- **B** vastaa **Katkaise**-painiketta.

## Asetukset

- Ruudukon **Leveys** ja **Korkeus**, 2–12 ruutua (2×2 on liian pieni toimiakseen).
- **Alku ja loppu kulmissa**: kun tämä on valittuna, 1 on aina vasemmassa yläkulmassa ja N
  oikeassa alakulmassa. Muuten molemmat päät sijoitetaan satunnaisesti, mutta ne
  näytetään silti.
`,ue=e({default:()=>de}),de=`# Singles

Ruudukon jokaisessa ruudussa on luku. Väritä osa ruuduista mustiksi (niiden luvut
peittyvät) niin, että kolme sääntöä pätee yhtä aikaa:

- mikään luku ei esiinny rivin tai sarakkeen valkoisissa ruuduissa useammin kuin kerran;
- kaksi mustaa ruutua ei saa koskettaa toisiaan sivuittain (kulmittain saa);
- valkoiset ruudut muodostavat yhden yhtenäisen alueen, jossa ruudut liittyvät toisiinsa
  sivuistaan.

Tämä on Nikolin _Hitori_. Hyvä aloitus on etsiä kaksi samaa lukua, joiden välissä on yksi
ruutu: toisen niistä on oltava musta, joten välissä olevan ruudun on oltava valkoinen. Jos
taas kaksi samaa lukua on vierekkäin, kaikki muut saman luvun esiintymät samalla rivillä
tai sarakkeessa ovat mustia.

Virheet näkyvät punaisina: toisiaan koskettavien mustien ruutujen ryhmä saa punaisen
kehyksen, pääalueesta erilleen jääneet valkoiset ruudut saavat punaisen ääriviivan, ja
kaksi ympyröityä ruutua, joissa on sama luku samalla rivillä tai sarakkeessa, näkyvät
punaisina.

Pulma on ratkaistu, kun mitään sääntöä ei ole rikottu; valkoisia ruutuja ei tarvitse
ympyröidä.

## Ohjaimet

### Hiiri ja kosketus

- **Napsauta** ruutua, niin se muuttuu mustaksi; napsauta uudelleen, niin se palautuu.
- **Napsauta hiiren oikealla**, niin luvun ympärille tulee ympyrä merkiksi siitä, että
  ruutu on varmasti valkoinen; tee sama uudelleen, niin ympyrä poistuu. Jos ruudussa on
  jo jokin merkintä, kumpi tahansa napsautus poistaa sen.
- **Ratkaise** täyttää koko ruudukon ja ympyröi jokaisen valkoisen ruudun.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät kohdistinta ruudukossa (reunan yli kohdistin siirtyy
  vastakkaiselle puolelle).
- **Enter** värittää kohdistimen ruudun mustaksi tai palauttaa sen, ja **välilyönti**
  ympyröi sen tai poistaa ympyrän.

## Asetukset

- Ruudukon **Leveys** ja **Korkeus**, luoduissa pulmissa 2–20.
- **Vaikeustaso**: _Helppo_-pulmiin riittävät suorat päätelmät – musta ruutu pakottaa
  naapurinsa valkoisiksi, ympyröity luku pakottaa samat luvut mustiksi, lisäksi välin
  päässä oleva pari ja vierekkäinen pari, valkoinen ruutu, jolla on vain yksi
  ulospääsy, sekä pienet kulmakuviot. _Kinkkinen_ vaatii lisäksi huomaamaan, milloin
  ruudun värittäminen mustaksi katkaisisi valkoisen alueen kahtia, ja hyödyntämään
  parien pareja, jotka ovat yhden ruudun verran lomittain. Jokaisella pulmalla on tasan
  yksi ratkaisu.
`,fe=e({default:()=>pe}),pe=`# Kuusitoista

Liukupalapeli ilman tyhjää ruutua. Jokaisessa ruudussa on numeroitu laatta, ja yksittäisen
laatan sijaan liu'utat kokonaista riviä tai saraketta askeleen kerrallaan. Reunan yli
työntyvä laatta tulee heti takaisin saman rivin tai sarakkeen toisesta päästä, ikään kuin
ruudukko olisi kiedottu donitsin ympärille. Järjestä laatat niin, että ne etenevät
ykkösestä alkaen vasemmasta yläkulmasta vasemmalta oikealle ja rivi kerrallaan alaspäin.

## Ohjaimet

### Hiiri ja kosketus

- **Napsauta** jotakin reunan nuolista, niin rivi tai sarake liukuu askeleen nuolen
  suuntaan. **Napsauta hiiren oikealla** nuolta, niin se liukuu vastakkaiseen suuntaan.
- **Ratkaise** vain vaihtaa tilalle järjestetyn ruudukon. Se ei näytä reittiä, mutta
  antaa puhtaan laudan, jolla voit kokeilla liikesarjoja.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät korostusta reunan nuolten ympäri.
- **Enter** liu'uttaa korostettua riviä tai saraketta nuolen suuntaan ja **välilyönti**
  toiseen suuntaan.

## Asetukset

- Ruudukon **Leveys** ja **Korkeus**. Jos molemmat sivut ovat parittomia, vain puolet
  kaikista järjestyksistä on mahdollisia, joten peli antaa aina vain sellaisia, jotka
  saa ratkaistua.
- **Sekoitussiirtojen määrä**: jätä nollaan, niin järjestys arvotaan täysin
  satunnaisesti, tai anna luku, niin järjestetty ruudukko sekoitetaan tasan niin
  monella yksittäisellä liu'utuksella. Silloin ideana on päätellä, mitkä liu'utukset
  tehtiin, ja perua ne yhtä monella siirrolla; mitä enemmän sekoitussiirtoja pyydät,
  sitä todennäköisemmin on olemassa lyhyempikin ratkaisu.
`,me=e({default:()=>he}),he=`# Vinoviivat

Ruudukko on täynnä tyhjiä ruutuja, ja osassa kulmapisteistä on ympyröity luku. Piirrä joka
ruudun läpi yksi vinoviiva, kumpaan suuntaan tahansa, niin että:

- jokaista ympyröityä lukua koskettaa sen kulmapisteessä täsmälleen se määrä viivoja
  (nelonen on ristin keskellä, nollan ympärillä taas kaikki lähiviivat kallistuvat
  siitä poispäin);
- viivat eivät koskaan muodosta suljettua silmukkaa.

Luku, jolla on jo liikaa viivoja tai joka ei enää voi saada niitä tarpeeksi, muuttuu
punaiseksi, samoin kuin jokainen silmukkaan kuuluva viiva. Pulma on valmis, kun jokaisessa
ruudussa on viiva eikä mikään ole punaisena.

## Ohjaimet

### Hiiri ja kosketus

- **Napsauta** ruutua, niin siihen tulee \`\\\`; napsauta uudelleen, niin siitä tulee \`/\`,
  ja vielä kerran, niin ruutu tyhjenee.
- **Napsautus hiiren oikealla** kiertää toiseen suuntaan: \`/\`, sitten \`\\\`, sitten tyhjä.
  Kummallakin tavalla saat siis ruutuun kumman tahansa viivan.
- **Ratkaise** täyttää koko ruudukon.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät kohdistinta ruudukossa.
- **Enter** kierrättää kohdistimen alla olevaa ruutua kuten hiiren vasen painike ja
  **välilyönti** kuten hiiren oikea painike.

## Asetukset

- **Leveys** ja **Korkeus** — ruudukon mitat ruutuina.
- **Vaikeustaso**: _Helppo_-pulmat ratkeavat ruutu kerrallaan: riittää katsoa lukuja, jotka ovat jo
  täynnä tai tarvitsevat kaikki jäljellä olevat ruutunsa, ja ruutuja, joissa toinen
  kahdesta viivasta sulkisi silmukan. _Vaikea_-pulmissa pitää lisäksi päätellä ruutupareista,
  joiden on kallistuttava samaan suuntaan jo ennen kuin tiedät kummin päin, sekä
  alueista, jotka viiva sulkisi irti ruudukon reunasta. Arvata ei tarvitse koskaan;
  jokaisella pulmalla on täsmälleen yksi ratkaisu.
`,ge=e({default:()=>_e}),_e=`# Solo

Täytä neliönmuotoinen ruudukko numeroilla niin, että jokaisella rivillä, jokaisessa
sarakkeessa ja jokaisessa paksusti rajatussa lohkossa on jokainen numero täsmälleen
kerran. Osa ruuduista on annettu vihjeinä; loput saat päätellä itse. Tavallinen
3×3-pulma on tuttu sudoku, mutta lohkot voivat olla myös suorakulmioita (2×3-pulmassa on
kuusi 3×2-lohkoa), ja ruudukko voi olla jopa 16×16, jolloin kirjaimet a, b, c… tarkoittavat
yhdeksää suurempia numeroita.

Kolme muunnelmaa voi kytkeä päälle:

- **”X”**: molemmat päälävistäjät on sävytetty vaaleiksi, ja niilläkin on oltava jokainen
  numero.
- **Jigsaw**: lohkot ovat epäsäännöllisen muotoisia ja vaihtelevat pulmasta toiseen.
- **Killer**: vihjenumeroita ei ole lainkaan. Sen sijaan ruudukko on jaettu katkoviivoin
  rajattuihin alueisiin, ja jokaiseen alueeseen on merkitty sen numeroiden summa. Sama
  numero ei saa esiintyä alueella kahdesti.

Jokaisella pulmalla on täsmälleen yksi ratkaisu, ja siihen pääsee aina pelkällä
päättelyllä valitsemallasi vaikeustasolla.

## Ohjaimet

Numerot, joilla on sama pari rivillä, sarakkeessa, lohkossa, lävistäjällä tai alueella,
näkyvät punaisina, samoin alue, jonka numerot eivät anna oikeaa summaa. **Vihje**
kirjoittaa yhden ruudun — helpoimman vielä avoimen tai ensimmäisen numeron, joka on
ristiriidassa ratkaisun kanssa — ja jättää loput sinulle; peli jatkuu, ja muutaman vihjeen
jälkeen voitto ja sen tähti ovat yhä sinun. **Ratkaise** täyttää koko ratkaisun ja päättää
pulman.

### Hiiri ja kosketus

- **Napsauta** tyhjää ruutua, niin se valitaan, ja kirjoita numero näytön näppäimillä
  (kirjainnäppäimet ovat yhdeksää suurempia numeroita). Kun napsautat valittua ruutua uudelleen,
  valinta poistuu.
- **⌫** tyhjentää valitun ruudun, ja **✎** kytkee kynämerkinnät päälle, jolloin seuraava
  valintasi menee pieneksi muistiinpanoksi eikä vastaukseksi.
- **Napsauta hiiren oikealla** ruutua, niin se valitaan suoraan **kynämerkintöjä** varten.
  Kynämerkinnät ovat vain ajattelun tukena: peli ei välitä niistä, ja numeron
  kirjoittaminen pyyhkii ne pois.
- Taukovalikon **Merkinnät** täyttää jokaiseen tyhjään ruutuun kaikki vaihtoehdot
  kynämerkinnöiksi niille, jotka haluavat aloittaa kaikesta ja karsia vaihtoehtoja pois.
- **Korosta** (suurennuslasi Kumoa-painikkeen vieressä) nostaa esiin viimeksi
  napsauttamasi ruudun numeron: jokainen ruutu, jossa sama numero on (vihjeet mukaan lukien), korostuu, ja
  numero näkyy lihavoituna kynämerkintöjen joukossa. Paina painiketta uudelleen, niin
  korostus poistuu.

### Näppäimistö (Keyboard)

- **Kirjoita numero** (tai kirjain, jos numero on yli 9), niin se menee valittuun ruutuun.
- **Välilyönti** tai **Backspace** tyhjentää valitun ruudun (sen numeron tai kaikki sen
  kynämerkinnät).
- **Nuolinäppäimet** liikuttavat kohdistinta. **Enter** vaihtaa kohdistimen tavallisen
  syötön ja kynämerkintöjen välillä, ja kirjoitetut numerot menevät kohdistimen ruutuun.
- **M** on sama kuin **Merkinnät**-painike ja **L** sama kuin **Korosta**-painike.

## Asetukset

- **Alilohkojen sarakkeita** ja **Alilohkojen rivejä**: ruudukon koko on näiden tulo, ja
  jokainen lohko on rivien määrän levyinen ja sarakkeiden määrän korkuinen.
  Jigsaw-tilassa tulo on yksinkertaisesti ruudukon koko.
- **”X”**, **Jigsaw** ja **Killer** kytkevät päälle yllä kuvatut muunnelmat.
  Killer-pulmissa numeroita voi olla enintään yhdeksän.
- **Symmetria**: miten vihjeiden kuvio toistuu peilikuvana. Runsas symmetria näyttää
  kauniilta, mutta vihjeitä jää yleensä enemmän kuin olisi tarpeen.
- **Vaikeustaso**: vaikein päättely, jota pulma vaatii. Tasoilla _Erittäin helppo_ ja _Helppo_ on
  aina jokin ruutu, jonka voi täyttää suoraan; _Keskivaikea_ vaatii päättelemään, mihin numero
  voi mennä lohkossa ja rivillä tai sarakkeessa; _Vaikea_ vaatii ruutujoukkoja, joille tietyt
  numerot on varattu; _Asiantuntija_ tuo mukaan pakotusketjut, eikä _Äärimmäinen_-pulmia saa
  ratkaistua ilman arvaamista ja peruuttamista. Vaikeiden pulmien luominen kestää kauemmin.
`,ve=e({default:()=>ye}),ye=`# Teltat

Ruudukko on leirintäalue: osassa ruuduista kasvaa puu, loput ovat tyhjää maata. Pystytä
telttoja tyhjiin ruutuihin niin, että:

- telttoja on täsmälleen yhtä monta kuin puita;
- jokaiselle puulle löytyy oma teltta suoraan sen vierestä (ylhäältä, alhaalta,
  vasemmalta tai oikealta — ei vinottain). Teltta voi sattua olemaan muidenkin puiden
  vieressä, mutta jokainen teltta kuuluu yhdelle puulle ja jokainen puu yhdelle teltalle;
- teltat eivät kosketa toisiaan, eivät edes kulmittain;
- oikeassa reunassa ja alareunassa olevat luvut kertovat, montako telttaa kullakin
  rivillä ja kussakin sarakkeessa on.

Vihjeinä on vain lukumääriä, joten koko pulma on sen päättelyä, missä telttojen on
pakko olla. Jokainen pulma ratkeaa pelkällä päättelyllä, ilman arvailua.

## Ohjaimet

Toisiaan koskettavat teltat näkyvät punaisina, ja yhteinen reuna tai kulma merkitään;
punaisina näkyvät myös telttajoukot, joille ei ole tarpeeksi puita, ja puujoukot, joiden kaikille
teltoille ei enää ole tilaa. Luku harmaantuu, kun sen rivillä tai sarakkeessa on oikea määrä
telttoja, ja muuttuu punaiseksi, kun se ei voi enää täyttyä. **Ratkaise** pystyttää kaikki
teltat puolestasi.

### Hiiri ja kosketus

- **Napsauta** tyhjää ruutua, niin siihen nousee teltta; napsauta telttaa uudelleen, niin
  se katoaa.
- **Napsauta hiiren oikealla** tyhjää ruutua, niin se merkitään nurmeksi: olet varma, ettei
  siihen tule telttaa. Toinen napsautus hiiren oikealla poistaa merkin. Ruudun, jossa on jo
  jotakin, voi tyhjentää kummalla tavalla tahansa.
- **Vedä hiiren oikealla** riviä tai saraketta pitkin, niin jokainen matkalle osuva tyhjä ruutu
  muuttuu kerralla nurmeksi — kätevää, kun rivin tai sarakkeen kaikki teltat on jo sijoitettu.
  Telttoihin ja valmiisiin merkintöihin ei kosketa.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** liikuttavat kohdistinta.
- **Enter** pystyttää tai poistaa teltan kohdistimen kohdalla.
- **Välilyönti** merkitsee tai poistaa nurmen kohdistimen kohdalla.

## Asetukset

- **Leveys** ja **Korkeus** — ruudukon mitat, 4–20 ruutua kumpikin.
- **Vaikeustaso**: _Helppo_-pulmat ratkeavat laskemalla ja katsomalla, mitä kukin puu ja
  teltta tarvitsee. _Kinkkinen_-pulmissa pitää lisäksi punnita, miten yhden rivin tai sarakkeen
  mahdolliset sijoittelut rajoittavat naapureitaan, ja miettiä, mitä ruutuja puut
  voivat jakaa keskenään.
`,be=e({default:()=>xe}),xe=`# Tornit

Jokaiseen ruudukon ruutuun tulee torni, jonka korkeus on vähintään 1 ja enintään ruudukon koko.
Jokaisella rivillä ja jokaisessa sarakkeessa on oltava jokainen korkeus täsmälleen kerran.
Reunojen luvut kertovat, montako tornia näkisit, jos katsoisit riviä tai saraketta siltä
puolelta: torni peittää taakseen jokaisen matalamman tornin. Ruudukon koon suuruinen vihje
tarkoittaa, että tornit kasvavat koko rivin tai sarakkeen matkan; vihje 1 tarkoittaa, että korkein
torni on heti siinä reunassa.

Isommissa ja vaikeammissa pulmissa osa torneista on jo valmiiksi rakennettu ja osa
reunavihjeistä puuttuu. Numerot, jotka ovat ristiriidassa rivinsä tai sarakkeensa toisen
numeron kanssa, sekä vihjeet, joita tähän mennessä rakennetut tornit eivät enää voi
toteuttaa, näkyvät punaisina. Tämä pulma tunnetaan paremmin nimellä Skyscrapers.

## Ohjaimet

Valmiiksi annettuja torneja ei voi muuttaa, ja **Ratkaise** täyttää vastauksen.

### Hiiri ja kosketus

- **Napsauta** ruutua, niin se valitaan, ja rakenna sitten näytön
  näppäimillä sen korkuinen torni. **⌫** tyhjentää ruudun taas.
- **✎** kytkee **kynämerkinnät** päälle: valintasi menee silloin pieneksi
  muistiinpanoksi, ruutu pysyy valittuna, joten merkintöjä voi lisätä useita, ja sama numero
  uudelleen pyyhkii sen pois. Oikean numeron kirjoittaminen pyyhkii sen ruudun
  kynämerkinnät.
- **Napsauta hiiren oikealla** ruutua, niin se valitaan suoraan kynämerkintöjä varten.
- Taukovalikon **Merkinnät** täyttää jokaiseen tyhjään ruutuun kaikki vaihtoehdot
  kynämerkinnöiksi.
- **Korosta** (suurennuslasi Kumoa-painikkeen vieressä) nostaa esiin viimeksi
  napsauttamasi ruudun korkeuden: jokainen ruutu, jossa on yhtä korkea torni, korostuu, ja
  korkeus näkyy lihavoituna kynämerkintöjen joukossa. Paina painiketta uudelleen, niin
  korostus poistuu.

### Näppäimistö (Keyboard)

- **Kirjoita numero**, niin valittuun ruutuun rakentuu sen korkuinen torni. **Välilyönti** tai
  **Backspace** tyhjentää sen.
- **Nuolinäppäimet** liikuttavat näppäimistökohdistinta. **Enter** vaihtaa sen numero- ja
  kynämerkintätilan välillä; numerot kirjoittuvat korostettuun ruutuun, eikä kohdistin
  liiku mihinkään.
- **M** on sama kuin **Merkinnät**-painike ja **L** sama kuin **Korosta**-painike.

## Asetukset

- **Ruudukon koko** — 3–9. Tornit syötetään yksittäisinä numeroina, ja siksi
  yhdeksän on yläraja.
- **Vaikeustaso** — _Helppo_-pulmiin riittävät kunkin vihjeen sekä rivi- ja sarakesääntöjen
  suorat seuraukset. _Vaikea_-pulmissa on syytä käydä läpi kaikki asetelmat, jotka vihje sallii,
  ja bongata ruutujoukot, joilla on vain muutama yhteinen vaihtoehto. _Asiantuntija_ lisää
  vaikeampaa joukkopäättelyä ja pakotusketjuja, eikä _Äärimmäinen_-pulmia saa maaliin ilman
  kokeilua ja erehdystä, vaikka ratkaisu on silti yksikäsitteinen.
`,Se=e({default:()=>Ce}),Ce=`# Kiskot

Rautatie tulee ruudukkoon vasemmasta reunasta ja poistuu alareunasta; molemmat päät
näkyvät laudan ulkopuolelle jatkuvina kiskoina. Täydennä rata niiden välille. Rata on yksi
yhtenäinen reitti ilman haaroja, silmukoita tai risteyksiä, ja se rakentuu pelkistä suorista
paloista ja neljännesmutkista, joten jokaisesta sen kulkemasta ruudusta lähtee täsmälleen
kaksi kiskoa. Muutama pala on jo valmiiksi paikallaan varjostetuissa ruuduissa, eikä niitä
voi muuttaa. Kunkin sarakkeen yläpuolella ja kunkin rivin vieressä oleva luku kertoo,
monenko sen rivin tai sarakkeen ruudun läpi valmis rata kulkee.

Luku harmaantuu, kun sen rivillä tai sarakkeessa on oikea määrä rataruutuja, ja muuttuu
punaiseksi, kun se ei voi enää toteutua: rataruutuja on liikaa tai yliviivattuja ruutuja niin monta,
ettei tilaa jää tarpeeksi. Myös ruudut, joissa kiskot kohtaavat huonosti (kolme kiskoa
samaan ruutuun, umpinainen silmukka tai ylimääräistä rataa sen jälkeen, kun sisääntulo ja
uloskäynti on yhdistetty), piirretään punaisina.

## Ohjaimet

**Ratkaise** rakentaa koko radan valmiiksi ja poistaa ne merkintäsi, jotka ovat sen kanssa
ristiriidassa. Pulma on valmis, kun yhtenäinen rata yhdistää sisääntulon uloskäyntiin ja
jokainen lukumäärä täyttyy.

### Hiiri ja kosketus

- **Vedä** vierekkäisten ruutujen jonon läpi, niin niiden välille syntyy kiskot. Reitti
  saa kääntyä kulmista; jos veto kulkee pelkästään jo olemassa olevia kiskoja pitkin, se
  nostaa ne sen sijaan pois.
- **Napsauta** lähellä ruudun sivua, niin sen sivun läpi kulkeva yksittäinen kisko syntyy
  tai katoaa. Napsauta ruudun keskeltä, niin ruutu merkitään ”radan kulkemaksi”
  kertomatta, mitä sivuja pitkin — kätevää laskemiseen — ja napsauta uudelleen, niin
  merkki katoaa.
- **Napsauta hiiren oikealla** lähellä sivua, niin siihen tulee lyhyt poikkiviiva merkitsemään
  ”ei kiskoa tähän”; napsautus hiiren oikealla ruudun keskellä yliviivaa koko ruudun.
  **Vedä hiiren oikealla** riviä tai saraketta pitkin, niin yliviivaat monta ruutua kerralla —
  tai poistat yliviivaukset.
- **Pyyhi** (pyyhekumipainike Kumoa-painikkeen vieressä) saa napsautuksen tai vedon
  pyyhkimään ruudut puhtaiksi: jokaisesta ruudusta, johon se osuu, poistuvat kiskot, ”ei
  kiskoa” -viivat sekä merkki tai yliviivaus. Valmiiksi annetut palat jäävät. Paina
  painiketta uudelleen, niin palaat rakentamaan rataa.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** liikuttavat kohdistinta, joka pysähtyy ruutuihin ja niiden välisiin
  sivuihin. **Enter** toimii kohdistimen kohdalla kuin hiiren vasen painike ja **välilyönti**
  kuin hiiren oikea painike.
- **E** vastaa **Pyyhi**-painiketta.

## Asetukset

- **Leveys** ja **Korkeus** — ruudukon mitat, kumpikin vähintään neljä.
- **Vaikeustaso**: _Helppo_-pulmat ratkeavat, kun katsoo yhtä ruutua tai yhtä riviä tai saraketta
  kerrallaan. _Kinkkinen_-pulmissa pitää lisäksi miettiä, mihin rivin tai sarakkeen viimeinen
  rataruutu ylipäätään mahtuisi, ja pohtia irrallisia kiskonpäitä, joita on jatkettava
  rivin tai sarakkeen suuntaan tai sen poikki. Jokaisella pulmalla on täsmälleen yksi ratkaisu.
- **Estä peräkkäiset 1-vihjeet**: kun tämä on päällä (oletuksena on), kahdella vierekkäisellä
  rivillä tai sarakkeella ei voi molemmilla olla lukua 1, eikä sisääntulon sarakkeella tai
  uloskäynnin rivillä voi olla lukua 1. Näin rata ei jää kulkemaan pitkiä tylsiä suoria
  reunaa pitkin.
`,we=e({default:()=>Te}),Te=`# Pyöritys

Numeroitujen laattojen ruudukko on sekoitettu kääntelemällä neliönmuotoisia laattalohkoja.
Käännä ne takaisin, kunnes numerot ovat järjestyksessä vasemmalta oikealle ja ylhäältä
alas. Perusversiossa jokainen siirto kääntää 2×2-lohkoa neljänneskierroksen sen pisteen
ympäri, jossa lohkon neljä laattaa kohtaavat; isommilla asetuksilla käännetään 3×3-lohkoja
tai vielä suurempia.

**Suunnattava**-muunnelmissa jokaisessa laatassa on kolmio, eikä pulma ole ratkaistu
ennen kuin kaikki kolmiot osoittavat ylöspäin. **Vain rivit** -muunnelmassa laatoissa on
niiden oma rivinumero, joten kaikkien ykkösten pitää vain päästä ensimmäiselle riville,
kakkosten toiselle ja niin edelleen.

## Ohjaimet

**Ratkaise** palauttaa jokaisen laatan suoraan paikalleen. Se ei näytä reittiä, mutta sillä
saa nopeasti puhtaan ruudukon, jolla harjoitella käännössarjaa.

### Hiiri ja kosketus

- **Napsauta** lohkon keskikohtaa, niin se kääntyy vastapäivään; **napsauta hiiren oikealla**,
  niin se kääntyy myötäpäivään. 2×2-lohkoissa keskikohta on kulma, jossa neljä laattaa kohtaa;
  parittomilla lohkokoilla se on keskimmäinen laatta. Napsautus ruudukon reunan tuntumassa
  kääntää sitä lohkoa, joka on kyseistä reunaa vasten.
- **Myötäpäivään** (kääntyvän nuolen painike Kumoa-painikkeen vieressä) vaihtaa suunnat
  keskenään: napsautus kääntää lohkoja myötäpäivään ja napsautus hiiren oikealla
  vastapäivään. Paina painiketta uudelleen, niin palaat takaisin.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät ruudukossa yhden lohkon kokoista kehystä. **Enter** kääntää
  kehystettyä lohkoa vastapäivään ja **välilyönti** myötäpäivään.
- **A**, **B**, **C** ja **D** kääntävät vasemman ylä-, oikean ylä-, vasemman ala- ja
  oikean alakulman lohkoa vastapäivään; **Shift** pohjassa käännös menee myötäpäivään.
- **T** vastaa **Myötäpäivään**-painiketta.

## Asetukset

- Ruudukon **Leveys** ja **Korkeus**.
- **Kääntyvän lohkon koko**: sen neliölohkon sivu, jonka yksi siirto kääntää (vähintään 2
  eikä ruudukkoa suurempi).
- **Yksi numero riviä kohti**: helpompi muunnelma, jossa rivin kaikilla laatoilla on sama
  numero.
- **Suunnalla on väliä**: laatat saavat kolmiot, ja niiden kaikkien on lopuksi osoitettava
  ylöspäin.
- **Sekoitussiirtojen määrä**: jätä nollaksi, niin sekoitus on perusteellinen, tai anna pieni
  luku, jolloin ruudukko on täsmälleen sen verran käännöksiä ratkaisusta. Tehtäväsi on
  silloin löytää nuo käännökset ja kumota ne, joten kolmen siirron sekoitus ansaitsee kolmen
  siirron vastauksen (vaikka joskus lyhyempikin reitti voi olla olemassa).
`,Ee=e({default:()=>De}),De=`# Epäkuolleet

Ruudukko on kummitteleva peilisali. Jokainen ruutu, jossa ei ole peiliä, kätkee yhden
kolmesta hirviöstä: **aaveen**, **vampyyrin** tai **zombin**. Ruudukon yläpuolella oleva
selite kertoo, montako kutakin on vielä sijoittamatta, ja jokaisen reunapaikan luku kertoo,
montako hirviötä siitä kohdasta ruudukkoon katsoessa näkyisi, kun katselinja kimpoilee
vinoista peileistä.

Peilit muuttavat sitä, mitä näet. Vampyyrillä ei ole peilikuvaa, joten se lasketaan mukaan
vain niin kauan kuin katselinja ei ole vielä osunut peiliin. Aave on päinvastoin: suoraan
katsottuna se on näkymätön ja tulee esiin vasta heijastuksen jälkeen. Zombi näkyy aina. Jos
katselinja kulkee saman ruudun läpi kahdesti, siinä oleva hirviö lasketaan joka kerta, kun
se on näkyvissä. Sijoita kaikki hirviöt niin, että jokainen reunaluku ja jokainen
kokonaismäärä täsmää.

## Ohjaimet

Reunaluku harmaantuu, kun sen katselinja on kokonaan selvitetty, ja muuttuu punaiseksi, kun
se ei voi enää mitenkään täsmätä; selitteen luku muuttuu punaiseksi, kun
kyseistä hirviötä on sijoitettu liikaa. Kynämerkinnät ovat vain omia muistiinpanojasi
eivätkä koskaan vaikuta pulmaan.

### Hiiri ja kosketus

- **Napsauta** tyhjää ruutua, niin siihen vaihtuu vuorotellen aave, vampyyri, zombi
  ja taas tyhjä. Ruutu jää korostetuksi.
- Näytön näppäimillä valitset hirviön korostettuun ruutuun suoraan, ilman
  kierrättämistä; **⌫** tyhjentää ruudun kynämerkintöineen.
- **✎** kytkee **kynämerkinnät** päälle: valitsemasi hirviö lisätään silloin
  ruudun ehdokaslistaan (tai poistetaan siitä).
- **Napsauta hiiren oikealla** ruutua, niin kynämerkintöjä tulee yksi ehdokas kerrallaan
  (ensin aave, sitten vampyyri, sitten zombi, sitten tyhjennys).
- **Katse** (silmä Kumoa-painikkeen vieressä) piirtää korostetun ruudun kautta kulkevat
  katselinjat peilien kohdalta taittuen ja ympyröi kunkin linjan molemmissa päissä olevat
  reunaluvut. Kun se on päällä, reunaluvun napsauttaminen näyttää juuri sen luvun linjan;
  napsauta uudelleen, niin linja vapautuu. Paina **Katse** uudelleen, niin toiminto
  kytkeytyy pois. Kun se on päällä, korostamattoman ruudun napsauttaminen vain korostaa
  sen, joten voit tutkia tyhjää ruutua täyttämättä sitä; napsauta uudelleen, niin ruutu
  vaihtuu tavalliseen tapaan.

### Näppäimistö (Keyboard)

- Nuolinäppäimet siirtävät korostusta. Enter kierrättää korostetun ruudun hirviötä; välilyönti
  kierrättää sen kynämerkintöjä.
- \`G\`, \`V\`, \`Z\` (tai \`1\`, \`2\`, \`3\`) asettavat kyseisen hirviön korostettuun ruutuun tai
  kytkevät sen kynämerkinnän päälle ja pois, kun korostus on kynätilassa. \`E\`, \`0\`,
  Backspace tai Delete tyhjentää ruudun kynämerkintöineen.
- \`S\` vastaa **Katse**-painiketta.

## Asetukset

- **Leveys**, **Korkeus** — ruudukon koko, vähintään 3×3 ja enintään 54 ruutua yhteensä.
- **Vaikeustaso** — _Helppo_-pulmat ratkeavat laskemalla yhtä katselinjaa kerrallaan;
  _Normaali_-pulmissa pitää punnita, mitä yhdistelmiä koko reitti sallii; _Kinkkinen_-pulmia
  ei saa ratkaistua ilman arvaamista.
`,Oe=e({default:()=>ke}),ke=`# Epäyhtälöt

Täytä ruudukko niin, että jokaisella rivillä ja jokaisessa sarakkeessa on täsmälleen kerran
jokainen numero ykkösestä ruudukon kokoon asti — eli latinalainen neliö — ja niin, että
naapuriruutujen väliin piirretyt merkit pitävät paikkansa.

**Epäyhtälö**-tilassa merkit ovat suuruusmerkkejä: \`>\`-merkin avoin puoli on
suuremman numeron puolella ja kärki osoittaa pienempään. Kaikkien naapureiden välissä ei ole merkkiä, ja mitä
vaikeampi pulma, sitä vähemmän merkkejä siinä on.

**Vierekkäiset**-tilassa merkit ovat lyhyitä palkkeja, jotka tarkoittavat, että kaksi
numeroa eroavat täsmälleen yhdellä (kuten 3 ja 4). Tässä tilassa jokainen palkki on aina
näkyvissä, joten myös palkin **puuttuminen** kahden ruudun välistä on vihje: nuo kaksi
numeroa eivät varmasti ole peräkkäisiä.

Sanomalehdissä pulma tunnetaan nimellä Futoshiki.

## Ohjaimet

Sääntöä rikkovat numerot — sama numero kahdesti rivillä tai sarakkeessa tai merkki, joka
ei pidä paikkaansa — näkyvät punaisina, samoin rikottu merkki. Pulma on valmis, kun jokainen ruutu
on täytetty eikä mikään ole punaisena.

### Hiiri ja kosketus

- **Napsauta** ruutua, niin se valitaan; täytä sitten numero näytön
  näppäimillä. **⌫** tyhjentää valitun ruudun taas. Valitun ruudun
  napsauttaminen toiseen kertaan poistaa valinnan.
- **✎** kytkee **kynämerkinnät** päälle: valintasi lisätään silloin ruudun
  pieneen vaihtoehtolistaan (tai poistetaan siitä) sen sijaan, että se täyttäisi ruudun.
  Ruudun täyttäminen pyyhkii sen kynämerkinnät.
- **Napsauta hiiren oikealla** ruutua, niin se valitaan suoraan kynämerkintöjä varten.
- Taukovalikon **Merkinnät** täyttää jokaiseen tyhjään ruutuun kaikki mahdolliset
  kynämerkinnät valmiiksi yliviivattaviksi; **Vihje** (hehkulamppu Kumoa-painikkeen
  vieressä) tekee saman mutta jättää pois ne, jotka helppo päättely jo sulkee pois.
- **Korosta** (suurennuslasi Kumoa-painikkeen vieressä) nostaa esiin viimeksi
  napsauttamasi ruudun numeron: jokainen ruutu, jossa sama numero on (annetut numerot mukaan lukien), korostuu, ja
  numero näkyy lihavoituna kynämerkintöjen joukossa. Paina painiketta uudelleen, niin
  korostus poistuu.

### Näppäimistö (Keyboard)

- **Kirjoita numero**, niin se menee valittuun ruutuun; \`0\`, välilyönti tai Backspace tyhjentää
  sen.
- Nuolinäppäimet siirtävät kohdistinta ruudukossa; Enter vaihtaa kohdistimen numeroiden
  täyttämisen ja kynämerkintöjen teon välillä.
- \`M\` on sama kuin **Merkinnät**-painike, \`H\` sama kuin **Vihje** ja \`L\` sama kuin **Korosta**.

## Asetukset

- **Tila** — Epäyhtälö (suuruusmerkit) tai Vierekkäiset (palkit peräkkäisten numeroiden
  välissä).
- **Koko** — rivien ja sarakkeiden määrä, 3–9.
- **Vaikeustaso** — kuinka paljon päättelyä pulma vaatii. **Erittäin helppo** -pulmissa merkkejä ei
  koskaan tarvita: Epäyhtälö-tilassa niitä ei ole lainkaan, vaan pulmat ovat pelkkiä latinalaisia
  neliöitä, ja Vierekkäiset-tilassa palkit piirretään, mutta annetut numerot ratkaisevat yksinään.
  **Helppo**-pulmissa riittää kunkin merkin suora merkitys; **Keskivaikea**-pulmissa ruutuja pitää
  tarkastella joukkoina; **Vaikea** tuo mukaan sijaintiin perustuvan joukkopäättelyn ja
  pakotusketjut; **Äärimmäinen**-pulmat (valittavissa kohdasta **Mukauta…**) voivat vaatia kokeilua
  ja erehdystä, vaikka ratkaisu on silti yksikäsitteinen.
`,Ae=e({default:()=>je}),je=`# Kuriton

Väritä ruudukon jokainen ruutu joko mustaksi tai valkoiseksi. Osa ruuduista on annettu
vihjeinä eikä niitä voi muuttaa; loput ovat aluksi harmaita ja sinun täytettävissäsi. Kun
olet valmis, kolmen ehdon on täytyttävä:

- jokaisella rivillä on yhtä monta mustaa ruutua kuin valkoista;
- jokaisessa sarakkeessa on yhtä monta mustaa ruutua kuin valkoista;
- rivillä tai sarakkeessa ei ole kolmea peräkkäistä samanväristä ruutua.

Virheet näkyvät punaisella: kolmen tai useamman samanvärisen ruudun jono saa punaisen
kehyksen, ja ruutuun ilmestyy punainen **!**, kun sen rivillä tai sarakkeessa on jo liikaa
sitä väriä. Valinnaisessa ”Ainutkertaiset rivit ja sarakkeet” -muunnelmassa kahdella rivillä
ei saa olla samaa kuviota (eikä kahdella sarakkeella); samanlaiset rivit tai sarakkeet
yliviivataan punaisella.

## Ohjaimet

Vihjeruutuja — niitä, joiden sisällä on pieni kehys — ei voi muuttaa. **Ratkaise** täyttää
koko ruudukon. Pulma on valmis, kun jokainen ruutu on väritetty eikä mikään näy punaisena.

### Hiiri ja kosketus

- **Napsauta** harmaata ruutua, niin siitä tulee musta; napsauta uudelleen, niin siitä tulee
  valkoinen, ja vielä kerran, niin se tyhjenee.
- **Napsautus hiiren oikealla** kiertää toiseen suuntaan: ensin valkoinen, sitten musta, sitten
  tyhjä.
- **Napsautus hiiren keskipainikkeella** tyhjentää ruudun suoraan.
- **Pyyhi** (pyyhekumipainike Kumoa-painikkeen vieressä) saa napsautuksen tyhjentämään
  ruudun värittämisen sijaan. Paina painiketta uudelleen, niin palaat värittämään.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät kohdistinta ruudukossa.
- **Enter** kiertää kohdistimen alla olevaa ruutua kuten hiiren vasen painike ja **välilyönti**
  kuten hiiren oikea painike.
- **1** asettaa mustan, **0** (tai **2**) valkoisen ja **Backspace** tyhjentää.
- **E** vastaa **Pyyhi**-painiketta.

## Asetukset

- Ruudukon **Leveys** ja **Korkeus**. Kummankin on oltava parillinen ja vähintään 6.
- **Ainutkertaiset rivit ja sarakkeet**: kun tämä on päällä, kaksi riviä ei saa
  olla samanlaisia, eikä myöskään kaksi saraketta (rivi saa silti olla
  samanlainen kuin sarake). Hyvin korkeat tai hyvin leveät ruudukot eivät kelpaa tässä
  tilassa, koska erilaisia rivejä tai sarakkeita ei riittäisi kaikille.
- **Vaikeustaso**: _Helppo_-pulmissa riittää aina kaksi suoraa päättelyä — kaksi
  samanväristä ruutua pakottavat vieressä tai välissä olevan ruudun toiseen väriin, ja
  rivi tai sarake, jossa on jo täysi määrä yhtä väriä, saa kaikkiin muihin ruutuihin toisen
  värin.
  _Normaali_-pulmissa pitää lisäksi päätellä, mihin rivin tai sarakkeen viimeinen tietynvärinen ruutu
  vielä mahtuu ilman, että syntyy kolmen jono. Jokaisella pulmalla on täsmälleen yksi
  ratkaisu.
`,Me=e({default:()=>Ne}),Ne=`# Selvitä solmu

Kourallinen pisteitä on yhdistetty suorilla viivoilla, ja viivat ovat solmussa. Siirtele
pisteitä, kunnes mitkään kaksi viivaa eivät risteä. Jokainen solmu on avattavissa: tietokone
rakensi verkon asetelmasta, jossa risteyksiä ei ollut, ja sekoitti sitten pisteet ympyrän
kehälle.

Viivat, jotka juuri nyt risteävät jonkin toisen viivan kanssa, on piirretty punaisella,
joten solmu hellittää silminnähden työn edetessä; pulma on ratkaistu, kun punaista ei ole enää
jäljellä. **Ratkaise** liu'uttaa jokaisen pisteen asetelmaan, jonka tietokone tietää toimivaksi.

## Ohjaimet

**Kumoa** peruu minkä tahansa siirron, myös **Ratkaise**-painikkeen tekemän.

### Hiiri ja kosketus

- **Vedä** pistettä ja päästä irti siinä kohdassa, mihin haluat sen. Piste, johon tartut,
  muuttuu oranssiksi ja sen naapurit sinisiksi. Marginaaliin pudotettu piste asettuu laudan
  reunaan; jos päästät irti kokonaan piirtoalueen ulkopuolella, veto peruuntuu.
- **Ruudukko** (ruudukkopainike Kumoa-painikkeen vieressä) kytkee tarttumaruudukon päälle
  ja pois: pudotetut pisteet asettuvat silloin himmeillä pisteillä merkittyjen ruutujen
  keskikohtiin, ja niin on ratkaisukin aseteltu. Painike pysyy valaistuna niin kauan kuin
  ruudukko on päällä.

### Näppäimistö (Keyboard)

- **Nuolinäppäimet** siirtävät kohdistinta pisteestä toiseen kyseiseen suuntaan. **Enter**
  tai **välilyönti** nostaa pisteen; sen jälkeen nuolinäppäimet kuljettavat sitä (kahdeksasosan
  ruudusta kerrallaan, kokonaisen ruudun Shiftin kanssa, yhden askeleen Ctrlin kanssa), ja
  **Enter** tai **välilyönti** pudottaa sen.
- \`G\` on **Ruudukko**-painike.

## Asetukset

- **Pisteiden määrä**: montako pistettä verkossa on, vähintään 4. Mitä enemmän pisteitä,
  sitä enemmän viivoja ja sitä pahempi solmu. Lauta kasvaa pisteiden määrän mukana, joten
  tilaa levittelyyn riittää aina.
`,Pe=e({$dir:()=>`ltr`,$locale:()=>`fi`,$name:()=>q,default:()=>Fe,games:()=>Q,messages:()=>X,status:()=>Z,touchPhrases:()=>Y,tutorials:()=>$,ui:()=>J}),q=`Suomi`,J=JSON.parse(`{"appName":"Puzzlebox","menu":{"title":"Puzzlebox","tagline":"{n} käsin piirrettyä logiikkapulmaa. Valitse yksi ja pelaa.","lockedNote":"Jokaisesta itse ratkaisemastasi pulmasta saat tähden. Avaa tähdillä täältä uusia pulmia.","language":"Kieli","stat":{"credits":{"one":"★ {n} tähti","other":"★ {n} tähteä"},"unlocked":"{n}/{total} avattu","solved":"{n} ratkaistu","tight":{"credits":"★ {n}","unlocked":"{n}/{total}","solved":"✓ {n}","achievements":"{n}/{total}"},"achievements":"{n}/{total} saavutusta"},"hint":{"allOpen":"Kaikki pulmat ovat auki.","complete":"Olet avannut koko kokoelman!","spend":{"one":"Avaa tähdelläsi alta uusi pulma.","other":"Avaa tähdilläsi alta uusia pulmia."},"earn":"Ratkaise mikä tahansa pulma itse, niin saat tähden."},"card":{"label":"{name}: {description}","labelLocked":"{name}: {description} (lukossa)","solvedTag":"✓ ratkaistu ×{n}","unlock":"Avaa · 1 tähti","unlocked":"{name} avattu!","labelAlias":"{name} (tunnetaan myös nimellä {alias}): {description}","labelLockedAlias":"{name} (tunnetaan myös nimellä {alias}): {description} (lukossa)"},"noCredit":"Ratkaise jokin pulma itse, niin saat tähden. Palaa sitten avaamaan tämä.","surprise":"Yllätä minut: avaa satunnainen pulma","search":{"placeholder":"Hae pulmia","label":"Hae pulmia nimellä","clear":"Tyhjennä haku","empty":"Pulmaa nimeltä ”{q}” ei löytynyt. Kokeile toista nimeä."},"privacy":{"note":"Puzzlebox laskee, miten sen pulmia pelataan – ei koskaan sitä, kuka niitä pelaa – jotta niistä tulisi entistä parempia."},"continue":"Jatka","continueLabel":"Jatka: {name}","spend":"Käytä"},"notFound":{"title":"Pulmaa ei löytynyt","body":"Meillä ei ole pulmaa nimeltä ”{slug}”.","back":"Takaisin kaikkiin pulmiin"},"locked":"{name} on vielä lukossa. Ratkaise jokin pulma, niin saat tähden, jolla voit avata sen.","pageTitle":"{name} · Puzzlebox","topbar":{"back":"Kaikki pulmat","help":"Ohje","creditsTitle":"Tähdillä avataan uusia pulmia. Ratkaise pulma itse, niin saat tähden.","boardLabel":"Pelilauta: {name}"},"toolbar":{"type":"Tyyppi","custom":"Mukauta…","new":"Uusi","newTitle":"Uusi peli (N)","restart":"Aloita alusta","restartTitle":"Aloita tämä pulma alusta","undo":"Kumoa","undoTitle":"Kumoa (U, Ctrl+Z)","redo":"Tee uudelleen","redoTitle":"Tee uudelleen (R, Ctrl+Y)","solve":"Ratkaise","solveTitle":"Näytä ratkaisu (Ctrl+S)","gameId":"Jaa","gameIdTitle":"Jaa tämä pulma tai pelaa pulmaa, jonka joku lähetti sinulle","keypad":"Näppäimet","keypadTitle":"Näytä näytön näppäimet","zoomOut":"−","zoomOutTitle":"Pienemmäksi","zoomIn":"+","zoomInTitle":"Suuremmaksi","tapPlace":"Napautus: aseta","tapMark":"Napautus: merkitse","tapTitle":"Mitä tavallinen napautus tekee","tapPlaceTitle":"Napautus asettaa, pitkä painallus merkitsee. Vaihda napauttamalla.","tapMarkTitle":"Napautus merkitsee, pitkä painallus asettaa. Vaihda napauttamalla.","hint":"Vihje","hintTitle":"Paljastaa yhden ruudun, ja peli jatkuu. Tähden saa vielä, jos vihjeitä on enintään {n}.","more":"Lisää","pause":"Tauko","pauseTitle":"Taukovalikko (Esc)"},"pause":{"title":"Tauolla","resume":"Jatka"},"pager":{"label":"Sivut","prev":"Edellinen sivu","next":"Seuraava sivu","page":"Sivu {n}/{total}"},"badge":{"won":"Ratkaistu!","lost":"Peli päättyi"},"stage":{"generating":"Jaetaan uutta pulmaa…"},"keypad":{"label":"Näppäimet","clear":"Tyhjennä","clearTitle":"Tyhjennä valittu ruutu (Backspace)","pencil":"Kynämerkinnät","pencilOnTitle":"Näppäimet kirjoittavat kynämerkintöjä. Napauta, niin kirjoitat taas vastauksia.","pencilOffTitle":"Kytke päälle, niin seuraavat näppäimet kirjoittavat kynämerkintöjä"},"drawer":{"title":"Näin pelaat: {name}","close":"Sulje","replay":"▶ Katso opastus uudelleen","achievements":"Saavutukset ({n}/{total})"},"dialog":{"ok":"OK","cancel":"Peruuta","customTitle":"{name}: mukautettu","gameIdTitle":"Jaa tämä pulma","byDescription":"Kuvauksena","bySeed":"Satunnaissiemenenä","enterLabel":"Pelaa tiettyä pulmaa: liitä koodi","play":"Pelaa","copy":"Kopioi","copied":"Kopioitu","link":"Linkki","linkTitle":"Kopioi linkki, joka avaa juuri tämän pulman","linkPrompt":"Linkki tähän pulmaan","shareLead":"Lähetä juuri tämä pulma jollekin toiselle.","copyLink":"Kopioi linkki","linkCopied":"Linkki kopioitu","codes":"Pulman koodit","hintAd":{"title":"Vielä yksi vihje?","body":"Olet käyttänyt kaikki {n} ilmaista vihjettä. Jos otat vielä yhden, tästä pulmasta ei saa tähteä — ellet katso lyhyttä mainosta, jolloin tähti säilyy.","watch":"Katso mainos, pidä tähti","anyway":"Ota vihje silti"},"badCode":"Tällä koodilla ei avaudu {name}-pulmaa. Tarkista, että se on kopioitu kokonaan."},"toast":{"creditEarned":"+1 tähti","tutorialComplete":"Opastus käyty. Tässä uusi pulma: ratkaise se itse, niin saat tähden.","tutorialCompleteBack":"Opastus käyty. Takaisin pulmaasi.","tutorialSkipped":"Opastus ohitettu. Voit katsoa sen milloin tahansa uudelleen Ohjeesta.","tapModeMark":"Napautus merkitsee. Pitkä painallus tekee päätoiminnon.","tapModePlace":"Napautus tekee päätoiminnon. Pitkä painallus merkitsee.","touchHint":"Pelaa napauttamalla, pitkä painallus tekee toisen toiminnon. Ensimmäinen pyöreä painike vaihtaa ne päittäin.","hintNone":"Tällä laudalla ei ole enää mitään paljastettavaa.","hintNoCredit":"Vihjeitä on nyt yli {n}, joten tästä pulmasta ei saa tähteä — voit silti ratkaista sen loppuun.","hintAdFailed":"Mainosta ei ollut saatavilla, joten mikään ei muuttunut — vihje on yhä tarjolla, jos haluat sen.","stuck":"Jumissa? Vihje paljastaa yhden ruudun, ja pulmasta saa silti tähden."},"tutorial":{"label":"Opastus: {name}","step":"Vaihe {n}/{total}","next":"Seuraava","done":"Valmis","skipStep":"Ohita vaihe","skipTutorial":"Ohita opastus","nice":"Hienoa!","offScript":"Ei tuo: siirto peruttiin, jotta vaiheet vastaavat yhä lautaa. Kokeile sitä, mitä tämä vaihe pyytää.","offScriptRead":"Se peruttiin, jotta vaiheet vastaavat yhä lautaa. Lue ensin tämä vaihe.","pointer":{"drag":"vedä","rightClick":"hiiren oikea","rightDrag":"veto hiiren oikealla","middleClick":"hiiren keskipainike","longPress":"pitkä painallus","longPressDrag":"pitkä painallus + veto","twoFingerTap":"kahden sormen napautus"}},"splash":{"tagline":"Käsin piirrettyjä pulmia, valmiina pelattaviksi","skip":"Ohita"},"help":{"keypad":{"heading":"Näppäimet","introTouch":"Näytön näppäimet kirjoittavat puolestasi","introPointer":"Työkalurivin **Näppäimet** tuo näytölle näppäimiä, jotka kirjoittavat puolestasi","select":": valitse ensin ruutu laudalta ja paina sitten näppäintä.","clear":"- **⌫** tyhjentää valitun ruudun taas.","pencil":"- **✎** lukitsee kynämerkinnät päälle, jolloin näppäimet kirjoittavat vastausten\\n  sijaan pieniä muistiinpanoja. Paina uudelleen, niin palaat vastauksiin."}},"achievements":{"title":"Saavutukset","summary":"{n}/{total} ansaittu","unlocked":"Saavutus avattu","secret":{"name":"Salainen saavutus","description":"Jatka pelaamista, niin löydät sen."},"earnedOn":"Ansaittu {date}","progress":"{n}/{goal}","collection":"Kokoelma","tier":{"bronze":"Pronssi","silver":"Hopea","gold":"Kulta"},"meta":{"first-solve":{"name":"Ensiaskeleet","description":"Ratkaise ensimmäinen pulmasi itse."},"solves-10":{"name":"Lämmittely","description":"Ratkaise 10 pulmaa."},"solves-50":{"name":"Pulmakoukussa","description":"Ratkaise 50 pulmaa."},"solves-100":{"name":"Sadan kerho","description":"Ratkaise 100 pulmaa."},"solves-250":{"name":"Suurmestari","description":"Ratkaise 250 pulmaa."},"specialist":{"name":"Erikoisosaaja","description":"Ratkaise 10 pulmaa samassa pelissä."},"variety-3":{"name":"Maistelija","description":"Ratkaise pulma 3 eri pelissä."},"variety-10":{"name":"Monipuolinen","description":"Ratkaise pulma 10 eri pelissä."},"variety-all":{"name":"Koko laatikko","description":"Ratkaise pulma kokoelman jokaisessa pelissä."},"unlock-first":{"name":"Uusi hylly","description":"Avaa ensimmäinen pelisi tähdellä."},"unlock-15":{"name":"Kasvava kokoelma","description":"Pidä 15 peliä avattuna."},"unlock-25":{"name":"Avainnippu","description":"Pidä 25 peliä avattuna."},"unlock-all":{"name":"Yleisavain","description":"Avaa kokoelman jokainen peli."},"hardest-1":{"name":"Haaste vastaanotettu","description":"Ratkaise pulma pelin vaikeimmalla asetuksella."},"hardest-10":{"name":"Huippujen valloittaja","description":"Ratkaise vaikein asetus 10 eri pelissä."},"hardest-all":{"name":"Horjumaton","description":"Ratkaise vaikein asetus jokaisessa pelissä."},"pure-1":{"name":"Puhtaat paperit","description":"Ratkaise pulma ilman kumoamista tai vihjettä."},"pure-25":{"name":"Vakaa käsi","description":"Ratkaise 25 pulmaa ilman kumoamista tai vihjettä."},"quick-draw":{"name":"Salamannopea","description":"Ratkaise pulma enintään 30 sekunnissa."},"marathon":{"name":"Maraton","description":"Ratkaise pulma, jonka parissa olet ollut yli 20 minuuttia."},"comeback":{"name":"Ei koskaan luovuteta","description":"Häviä pulma, palaa sitten ja ratkaise se."},"second-thoughts":{"name":"Toisin ajatuksin","description":"Kumoa 100 kertaa ja ratkaise pulma silti."},"a-little-help":{"name":"Pieni apu","description":"Ota vihje."},"oops":{"name":"Hups","description":"Häviä pulma."},"night-owl":{"name":"Yökyöpeli","description":"Ratkaise pulma keskiyön ja kello 5:n välillä."},"on-a-roll":{"name":"Vauhdissa","description":"Ratkaise 5 pulmaa yhdellä istumalla."},"days-3":{"name":"Vakiokävijä","description":"Pelaa 3 eri päivänä."},"days-7":{"name":"Omistautunut","description":"Pelaa 7 eri päivänä."},"days-30":{"name":"Osa kalustoa","description":"Pelaa 30 eri päivänä."},"quick-study":{"name":"Nopea oppija","description":"Katso opastus loppuun."},"scholar":{"name":"Oppinut","description":"Katso 10 eri opastusta loppuun."},"collector-25":{"name":"Merkkien keräilijä","description":"Ansaitse 25 saavutusta."},"collector-60":{"name":"Pokaalikaappi","description":"Ansaitse 60 saavutusta."},"legend":{"name":"Pulmalegenda","description":"Ansaitse kaikki muut saavutukset."}},"andMore":{"one":"{n} saavutus avattu","other":"{n} saavutusta avattu"}},"endgame":{"won":"Pulma ratkaistu!","lost":"Peli päättyi","credit":"★ +1 tähti — sillä voit avata kokoelmasta uuden pulman.","wonNote":"Valmiina seuraavaan?","forfeitNote":"Tästä pulmasta ei saa tähteä — ratkaisu näytettiin jo matkan varrella.","lostNote":"Nyt ei onnistunut. Yritetäänkö uudestaan?","next":"Seuraava pulma","retry":"Yritä uudelleen","dismiss":"Sulje ja katsele lautaa","time":"Aika","moves":"Siirrot","hints":"Vihje","best":"Paras {time}","newBest":"Uusi ennätys!","stars":"{n}/3 tähteä","stepUp":"Kokeile: {preset} →"},"welcome":{"title":"Valitse ensimmäinen pulmasi","subtitle":{"one":"{n} pulma alkuun. Valitse se ja pelaa.","other":"{n} pulmaa alkuun. Valitse yksi ja pelaa."},"more":{"one":"…ja {n} lisää avattavaksi","other":"…ja {n} lisää avattavaksi"},"how":"Jokaisesta ratkaisemastasi pulmasta saat tähden, ja jokainen tähti avaa uuden pelin."},"gamepad":{"connected":"Peliohjain yhdistetty"},"settings":{"title":"Asetukset","done":"Valmis","sound":"Ääni","volume":"Äänenvoimakkuus","reduceMotion":"Vähennä liikettä","vibration":"Värinä","statistics":"Pelitilastot","on":"Päällä","off":"Pois","portalMuted":"Sivusto on mykistänyt äänen."}}`),Y=[[`kummalla tahansa hiiren painikkeella`,`sormella`],[`vetämällä hiiren oikealla`,`painamalla pitkään ja vetämällä`],[`veto hiiren oikealla`,`pitkä painallus ja veto`],[`vedät hiiren oikealla`,`painat pitkään ja vedät`],[`vedä hiiren oikealla`,`paina pitkään ja vedä`],[`napsauttamalla hiiren keskipainikkeella`,`napauttamalla kahdella sormella`],[`napsautus hiiren keskipainikkeella`,`kahden sormen napautus`],[`napsautat hiiren keskipainikkeella`,`napautat kahdella sormella`],[`napsauta hiiren keskipainikkeella`,`napauta kahdella sormella`],[`napsauttaminen hiiren oikealla`,`pitkään painaminen`],[`napsauttamalla hiiren oikealla`,`painamalla pitkään`],[`napsautus hiiren oikealla`,`pitkä painallus`],[`napsautat hiiren oikealla`,`painat pitkään`],[`napsauta hiiren oikealla`,`paina pitkään`],[`napsauttamalla hiiren vasemmalla`,`napauttamalla`],[`napsautus hiiren vasemmalla`,`napautus`],[`napsautat hiiren vasemmalla`,`napautat`],[`napsauta hiiren vasemmalla`,`napauta`],[`kaksoisnapsautus`,`kaksoisnapautus`],[`kaksoisnapsauta`,`kaksoisnapauta`],[`napsauttaminen`,`napauttaminen`],[`napsauttamalla`,`napauttamalla`],[`napsautuksesta`,`napautuksesta`],[`napsautuksella`,`napautuksella`],[`napsauttamasi`,`napauttamasi`],[`napsautuksen`,`napautuksen`],[`napsautusta`,`napautusta`],[`napsauttaa`,`napauttaa`],[`napsautus`,`napautus`],[`napsautat`,`napautat`],[`napsauta`,`napauta`]],X=JSON.parse(`{"4-way rotational symmetry needs a square grid":"Nelinkertainen kiertosymmetria vaatii neliönmuotoisen ruudukon","A 2×2 grid is too small to make a puzzle from":"2×2-ruudukko on liian pieni pulmaksi","A cube rolling along a single row can never turn over all six faces":"Yhtä riviä pitkin vierivä kuutio ei koskaan käännä kaikkia kuutta tahkoaan","A given piece leaves the grid":"Annettu palanen jää ruudukon ulkopuolelle","A jigsaw block is too big":"Jigsaw-lohko on liian suuri","A jigsaw block is too small":"Jigsaw-lohko on liian pieni","A killer cage is too big":"Killer-alue on liian suuri","A killer cage is too small":"Killer-alue on liian pieni","A wrapping puzzle needs a width and height of at least 3 to have a unique solution":"Ympäri kiertyvä pulma tarvitsee vähintään leveyden ja korkeuden 3, jotta ratkaisu on yksikäsitteinen","All parameters must be whole numbers":"Kaikkien arvojen on oltava kokonaislukuja","Already solved":"Jo ratkaistu","An edge cannot join a point to itself":"Kaari ei voi yhdistää pistettä itseensä","Angle offset out of bounds.":"Kulman siirtymä on sallitun alueen ulkopuolella.","At least one grid dimension must be greater than zero":"Ainakin toisen ruudukon mitan on oltava nollaa suurempi","At least one of width and height for this grid type must be at least {0}":"Tässä ruudukkotyypissä leveyden tai korkeuden on oltava vähintään {0}","At least one of width and height must be greater than one":"Leveyden tai korkeuden on oltava suurempi kuin yksi","Bad character in grid description":"Virheellinen merkki ruudukon kuvauksessa","Bad mine layout in game description":"Virheellinen miinojen asettelu pelin kuvauksessa","Badly formatted move limit after grid description":"Väärin muotoiltu siirtoraja ruudukon kuvauksen jälkeen","Barrier probability must be a number between 0 and 1":"Esteiden todennäköisyyden on oltava luku väliltä 0–1","Barrier probability must be between 0 and 1":"Esteiden todennäköisyyden on oltava väliltä 0–1","Blue cells are placed where some faces could never reach them":"Sinisiä ruutuja on sijoitettu paikkoihin, joihin osa tahkoista ei koskaan yltäisi","Both dimensions must be at least 2":"Molempien mittojen on oltava vähintään 2","Both grid dimensions must be at least one":"Ruudukon molempien mittojen on oltava vähintään yksi","Bridges per direction must be between 1 and {0}":"Siltoja yhteen suuntaan on oltava 1–{0}","Can't create {0}×{1} puzzles":"Kokoa {0}×{1} olevia pulmia ei voi luoda","Clue did not provide 2 direction flags":"Vihje ei antanut kahta suuntalippua","Clue is larger than the number of sides of its face":"Vihje on suurempi kuin sen alueen sivujen määrä","Clue is missing its number":"Vihjeestä puuttuu numero","Clue number out of range":"Vihjeen numero on sallitun alueen ulkopuolella","Colour out of range":"Väri on sallitun alueen ulkopuolella","Colour out of range in grid description":"Väri on sallitun alueen ulkopuolella ruudukon kuvauksessa","Colours, pegs and guesses must be whole numbers":"Värien, nappuloiden ja arvausten on oltava kokonaislukuja","Column counts inconsistent":"Sarakkeiden lukumäärät ovat ristiriidassa","Could not four-colour the map":"Kartan neliväritys ei onnistunut","Count is larger than the line it describes":"Lukumäärä on suurempi kuin rivi, jota se kuvaa","Description contains a duplicate number":"Kuvauksessa on sama numero kahdesti","Description contains a number larger than the grid":"Kuvauksessa on ruudukkoa suurempi numero","Description contains a number out of range":"Kuvauksessa on numero sallitun alueen ulkopuolelta","Description contains a number that is too large":"Kuvauksessa on liian suuri numero","Description contains a repeated number":"Kuvauksessa toistuu sama numero","Description contains an unexpected character":"Kuvauksessa on odottamaton merkki","Description contains invalid characters":"Kuvauksessa on kelvottomia merkkejä","Description is corrupted":"Kuvaus on vioittunut","Description is longer than expected":"Kuvaus on odotettua pidempi","Description is shorter than expected":"Kuvaus on odotettua lyhyempi","Description is too long":"Kuvaus on liian pitkä","Description is too short":"Kuvaus on liian lyhyt","Description marks cells beyond the grid as blue":"Kuvaus merkitsee sinisiksi ruutuja ruudukon ulkopuolelta","Description may only contain P, H and O":"Kuvauksessa saa olla vain kirjaimia P, H ja O","Description must be a comma-separated list of numbers":"Kuvauksen on oltava pilkuilla eroteltu lista numeroita","Description must be exactly {0} characters":"Kuvauksessa on oltava tasan {0} merkkiä","Description must be hex digits, a comma and a cell number":"Kuvauksen on oltava heksanumeroita, pilkku ja ruudun numero","Description must be numbers each followed by an orientation letter (u, l, d or r)":"Kuvauksen on oltava numeroita, joista kutakin seuraa suuntakirjain (u, l, d tai r)","Description must be two hex strings separated by a comma":"Kuvauksen on oltava kaksi pilkulla eroteltua heksajonoa","Description must be {0} hexadecimal digits":"Kuvauksen on oltava {0} heksanumeroa","Description must contain at least one edge":"Kuvauksessa on oltava ainakin yksi kaari","Description must contain at least one peg":"Kuvauksessa on oltava ainakin yksi nappula","Description must contain at least two islands":"Kuvauksessa on oltava ainakin kaksi saarta","Description must contain each number from 1 to {0} exactly once":"Kuvauksessa on oltava jokainen luku 1–{0} täsmälleen kerran","Description must contain each row number from 1 to {0} exactly {1} times":"Kuvauksessa on oltava jokainen rivinumero 1–{0} täsmälleen {1} kertaa","Description must contain only digits":"Kuvauksessa saa olla vain numeroita","Description must contain only numbers":"Kuvauksessa saa olla vain lukuja","Description must contain {0} numbers":"Kuvauksessa on oltava {0} lukua","Description must contain {0} tiles":"Kuvauksessa on oltava {0} laattaa","Description must mark exactly {0} cells blue":"Kuvauksen on merkittävä sinisiksi tasan {0} ruutua","Description must start with {0} hex digits":"Kuvauksen on alettava {0} heksanumerolla","Description places two islands next to each other":"Kuvaus asettaa kaksi saarta vierekkäin","Description repeats a colour although duplicates are disallowed":"Kuvauksessa toistuu väri, vaikka toistuvat värit eivät ole sallittuja","Description too long":"Kuvaus on liian pitkä","Description too long for board size":"Kuvaus on liian pitkä laudan kokoon nähden","Description too short":"Kuvaus on liian lyhyt","Description too short for board size":"Kuvaus on liian lyhyt laudan kokoon nähden","Digits in a {0}×{1} puzzle cannot exceed {2}":"{0}×{1}-pulman numerot eivät voi ylittää lukua {2}","Disallowing duplicates requires at least as many colours as pegs":"Jos toistuvia värejä ei sallita, värejä on oltava vähintään yhtä monta kuin nappuloita","Domino descriptions inconsistent":"Dominojen kuvaukset ovat ristiriidassa","Dots too close together":"Pisteet ovat liian lähellä toisiaan","Duplicate edge in game description":"Sama kaari kahdesti pelin kuvauksessa","Edge list defines the wrong number of regions":"Kaarilista määrittelee väärän määrän alueita","Entrance square must contain a piece leaving the left edge":"Sisääntuloruudussa on oltava palanen, joka lähtee vasemmasta reunasta","Every killer cage must have exactly one sum":"Jokaisella killer-alueella on oltava tasan yksi summa","Exit square must contain a piece leaving the bottom edge":"Uloskäyntiruudussa on oltava palanen, joka lähtee alareunasta","Expansion factor must be a number":"Laajennuskertoimen on oltava luku","Expansion factor may not be negative":"Laajennuskerroin ei voi olla negatiivinen","Expansion factor must be from 0 to 100":"Laajennuskertoimen on oltava 0–100","Expected ',' after block structure description":"Lohkorakenteen jälkeen odotettiin merkkiä ','","Expected ',' after grid description":"Ruudukon kuvauksen jälkeen odotettiin merkkiä ','","Expected a list of edges like 0-1,1-2 in game description":"Pelin kuvauksessa odotettiin kaarilistaa muotoa 0-1,1-2","Expected comma before clue list":"Ennen vihjelistaa odotettiin pilkkua","Expected jigsaw block structure in game description":"Pelin kuvauksessa odotettiin jigsaw-lohkorakennetta","Expected killer cage structure in game description":"Pelin kuvauksessa odotettiin killer-aluerakennetta","Expected killer clue grid in game description":"Pelin kuvauksessa odotettiin killer-vihjeruudukkoa","Expected slashes between clues":"Vihjeiden välissä odotettiin kauttaviivoja","Expecting number in game description":"Pelin kuvauksessa odotettiin lukua","Extra moves must not be negative":"Lisäsiirrot eivät voi olla negatiivisia","Extreme puzzles with more than {0} symbols take too long to generate":"Äärimmäisten pulmien luonti kestää liian kauan, jos symboleja on yli {0}","Faulty game description":"Viallinen pelin kuvaus","Flags contradicting each other":"Liput ovat ristiriidassa keskenään","Flags go off grid":"Liput menevät ruudukon ulkopuolelle","Game ID must include parameters":"Pulman koodissa on oltava myös arvot","Game description contained unexpected characters":"Pelin kuvauksessa oli odottamattomia merkkejä","Game description contains an unexpected character":"Pelin kuvauksessa on odottamaton merkki","Game description contains no dots":"Pelin kuvauksessa ei ole yhtään pistettä","Game description contains unexpected characters":"Pelin kuvauksessa on odottamattomia merkkejä","Game description has {0} balls; expected {1}":"Pelin kuvauksessa on {0} palloa; odotettiin {1}","Game description is corrupted":"Pelin kuvaus on vioittunut","Game description is longer than expected":"Pelin kuvaus on odotettua pidempi","Game description is shorter than expected":"Pelin kuvaus on odotettua lyhyempi","Game description is the wrong length":"Pelin kuvaus on väärän pituinen","Game description is too long":"Pelin kuvaus on liian pitkä","Game description is too short":"Pelin kuvaus on liian lyhyt","Game description is wrong length":"Pelin kuvaus on väärän mittainen","Game description longer than expected":"Pelin kuvaus on odotettua pidempi","Game description must be hexadecimal":"Pelin kuvauksen on oltava heksadesimaalia","Game description shorter than expected":"Pelin kuvaus on odotettua lyhyempi","Game description too long":"Pelin kuvaus on liian pitkä","Game is already solved":"Peli on jo ratkaistu","Grid area must be at least six squares":"Ruudukon pinta-alan on oltava vähintään kuusi ruutua","Grid area must be greater than 1":"Ruudukon pinta-alan on oltava suurempi kuin 1","Grid area must be greater than one":"Ruudukon pinta-alan on oltava suurempi kuin yksi","Grid description is the wrong length or not hexadecimal":"Ruudukon kuvaus on väärän mittainen tai ei ole heksadesimaalia","Grid description strings not used with this grid type":"Tämä ruudukkotyyppi ei käytä ruudukon kuvauksia","Grid dimensions cannot be negative":"Ruudukon mitat eivät voi olla negatiivisia","Grid dimensions must be at most {0}":"Ruudukon mitat saavat olla enintään {0}","Grid dimensions must be whole numbers":"Ruudukon mittojen on oltava kokonaislukuja","Grid is too big":"Ruudukko on liian suuri","Grid must contain at least two squares":"Ruudukossa on oltava vähintään kaksi ruutua","Grid size must be between 3 and 9":"Ruudukon koon on oltava 3–9","Grid size must be between {0} and {1}":"Ruudukon koon on oltava {0}–{1}","Hard and Extreme puzzles are limited to a maximum number of {0}":"Vaikea- ja Äärimmäinen-tasolla suurin numero saa olla enintään {0}","Height must be at least 3":"Korkeuden on oltava vähintään 3","Height must be at least five":"Korkeuden on oltava vähintään viisi","Height must be at least one":"Korkeuden on oltava vähintään yksi","Height must be at least the rotating block size":"Korkeuden on oltava vähintään kääntyvän lohkon kokoinen","Height must be at least two":"Korkeuden on oltava vähintään kaksi","Illegal grid type":"Kelvoton ruudukkotyyppi","Incorrect number balance in game description":"Lukujen tasapaino ei täsmää pelin kuvauksessa","Initial x-coordinate was out of range":"Aloituksen x-koordinaatti oli sallitun alueen ulkopuolella","Initial y-coordinate was out of range":"Aloituksen y-koordinaatti oli sallitun alueen ulkopuolella","Internal error: solution is badly formatted":"Sisäinen virhe: ratkaisu on väärin muotoiltu","Invalid character in block structure specification":"Kelvoton merkki lohkorakenteen määrittelyssä","Invalid character in game description":"Kelvoton merkki pelin kuvauksessa","Invalid character in grid specification":"Kelvoton merkki ruudukon määrittelyssä","Invalid character in number list":"Kelvoton merkki lukulistassa","Invalid characters in game description":"Kelvottomia merkkejä pelin kuvauksessa","Invalid format grid description string.":"Ruudukon kuvausmerkkijono on väärän muotoinen.","Invalid parameters: {0}":"Virheelliset arvot: {0}","Invalid syntax in game description":"Kelvoton syntaksi pelin kuvauksessa","Jigsaw puzzles with more than {0} symbols take too long to generate":"Jigsaw-pulmien luonti kestää liian kauan, jos symboleja on yli {0}","Killer puzzle dimensions must be smaller than 10":"Killer-pulman mittojen on oltava alle 10","Malformed pending game description":"Viallinen odottava pelin kuvaus","Matrix description is the wrong length or not hexadecimal":"Matriisin kuvaus on väärän mittainen tai ei ole heksadesimaalia","Maximum face number must be a whole number":"Suurimman silmäluvun on oltava kokonaisluku","Maximum face number must be at least one":"Suurimman silmäluvun on oltava vähintään yksi","Maximum face number must be at most {0}":"Suurin silmäluku saa olla enintään {0}","Maximum of 9 colours":"Enintään 9 väriä","Medium puzzles need more than one bridge per direction, or loops disallowed":"Keskivaikea-pulmissa siltoja on sallittava useampi kuin yksi suuntaansa, tai silmukat on kiellettävä","Mines solver opened a mine: inconsistent knowledge":"Miinojen ratkaisija avasi miinan: tiedot ovat ristiriidassa","Minimum number of balls may not be greater than maximum":"Pallojen vähimmäismäärä ei voi olla enimmäismäärää suurempi","Missing grid description string.":"Ruudukon kuvausmerkkijono puuttuu.","Missing separator":"Erotin puuttuu","Monster numbers do not match grid spaces":"Hirviöiden määrä ei vastaa ruudukon tyhjiä ruutuja","More than one starting square specified":"Aloitusruutuja on määritelty useampi kuin yksi","Multiple solutions exist for this puzzle":"Tällä pulmalla on useita ratkaisuja","Must have at least five regions":"Alueita on oltava vähintään viisi","Must have at least one guess":"Arvauksia on oltava vähintään yksi","Must have between {0} and {1} colours":"Värejä on oltava {0}–{1}","No game set up to solve":"Ratkaistavaa peliä ei ole","No gems specified":"Jalokiviä ei ole määritelty","No solution exists for this position":"Tähän asemaan ei ole ratkaisua","No solution exists for this puzzle":"Tähän pulmaan ei ole ratkaisua","No solution found":"Ratkaisua ei löytynyt","No starting square specified":"Aloitusruutua ei ole määritelty","Not enough data in block structure specification":"Lohkorakenteen määrittelyssä on liian vähän tietoa","Not enough data in grid description":"Ruudukon kuvauksessa on liian vähän tietoa","Not enough data to fill grid":"Tieto ei riitä ruudukon täyttämiseen","Not enough grid space to place all blue faces":"Ruudukossa ei ole tilaa kaikille sinisille tahkoille","Not enough jigsaw blocks":"Jigsaw-lohkoja on liian vähän","Not enough killer cages":"Killer-alueita on liian vähän","Not enough numbers given after grid specification":"Ruudukon määrittelyn jälkeen annettiin liian vähän lukuja","Not enough space to place the solid on an empty cell":"Kappaleelle ei ole tilaa aloittaa tyhjästä ruudusta","Number of colours must be at least three":"Värejä on oltava vähintään kolme","Number of colours must be at least two":"Värejä on oltava vähintään kaksi","Number of points must be a whole number":"Pisteiden määrän on oltava kokonaisluku","Number of points must be at least {0}":"Pisteitä on oltava vähintään {0}","Number of points must be at most {0}":"Pisteitä saa olla enintään {0}","Number of shuffling moves cannot be negative":"Sekoitussiirtojen määrä ei voi olla negatiivinen","Number of shuffling moves must be a whole number":"Sekoitussiirtojen määrän on oltava kokonaisluku","Number of shuffling moves must be at most 10000":"Sekoitussiirtoja saa olla enintään 10000","Number of shuffling moves must be at most {0}":"Sekoitussiirtoja saa olla enintään {0}","Number out of range in game description":"Luku sallitun alueen ulkopuolelta pelin kuvauksessa","Number too large":"Luku on liian suuri","Out-of-range number in game description":"Luku sallitun alueen ulkopuolelta pelin kuvauksessa","Out-of-range number in grid description":"Luku sallitun alueen ulkopuolelta ruudukon kuvauksessa","Parameters must be whole numbers":"Arvojen on oltava kokonaislukuja","Patch coordinates do not identify a usable grid fragment":"Palan koordinaatit eivät osoita kelvolliseen ruudukon osaan","Patch offset out of bounds.":"Palan siirtymä on sallitun alueen ulkopuolella.","Percentage of black squares must be between 5% and 100%":"Mustien ruutujen osuuden on oltava 5–100 %","Percentage of islands must be from 1% to 30%":"Saarten osuuden on oltava 1–30 %","Puzzle is inconsistent":"Pulma on ristiriitainen","Puzzle is too large":"Pulma on liian suuri","Puzzle is too long for unique-rows mode":"Pulma on liian pitkä ainutkertaisten rivien tilaan","Puzzle is too tall for unique-rows mode":"Pulma on liian korkea ainutkertaisten rivien tilaan","Puzzle is unsolvable":"Pulma on ratkeamaton","Puzzle must have one entrance and one exit":"Pulmassa on oltava yksi sisääntulo ja yksi uloskäynti","Puzzles with more than {0} symbols take too long to generate":"Pulmien luonti kestää liian kauan, jos symboleja on yli {0}","Random seed must not be empty":"Satunnaissiemen ei saa olla tyhjä","Rotating block size must be at least two":"Kääntyvän lohkon koon on oltava vähintään kaksi","Row counts inconsistent":"Rivien lukumäärät ovat ristiriidassa","Rows of blocks must be at least 1":"Lohkorivejä on oltava vähintään 1","Scoring system not recognised":"Pisteytystapaa ei tunnistettu","Size and difficulty must be whole numbers":"Koon ja vaikeustason on oltava kokonaislukuja","Size must be at least 5 for Adjacent puzzles of this difficulty":"Tämän vaikeustason Vierekkäiset-pulmissa koon on oltava vähintään 5","Size must be between {0} and {1}":"Koon on oltava {0}–{1}","Solution not known for this puzzle":"Tämän pulman ratkaisua ei tunneta","Solve operation failed":"Ratkaiseminen epäonnistui","Solve operation produced an invalid move":"Ratkaiseminen tuotti virheellisen siirron","Solver could not finish this grid":"Ratkaisija ei saanut tätä ruudukkoa valmiiksi","Solving algorithm cannot complete this puzzle":"Ratkaisualgoritmi ei saa tätä pulmaa valmiiksi","Starting cell is outside the grid":"Aloitusruutu on ruudukon ulkopuolella","Subtraction and division blocks must have area 2":"Vähennys- ja jakolaskualueiden koon on oltava 2 ruutua","That grid has too many faces to generate":"Ruudukossa on liian monta aluetta luotavaksi","The Cross board is only available at {0}×{1}":"Ristinmuotoinen lauta on saatavilla vain koossa {0}×{1}","The Octagon board is only available at {0}×{1}":"Kahdeksankulmainen lauta on saatavilla vain koossa {0}×{1}","The ball has hit a mine; undo that move first":"Pallo on osunut miinaan; kumoa ensin se siirto","The grid can have at most {0} squares":"Ruudukossa saa olla enintään {0} ruutua","The grid may have at most {0} squares":"Ruudukossa saa olla enintään {0} ruutua","The initial square contains a mine":"Aloitusruudussa on miina","The solid cannot start on a blue cell":"Kappale ei voi aloittaa siniseltä ruudulta","The solution has already been revealed":"Ratkaisu on jo paljastettu","There must be at least one ball":"Palloja on oltava vähintään yksi","There must be at least one mine":"Miinoja on oltava vähintään yksi","This arrangement cannot be solved":"Tätä asetelmaa ei voi ratkaista","This game does not support the Solve operation":"Tässä pelissä ei voi käyttää Ratkaise-toimintoa","This puzzle has no solution":"Tällä pulmalla ei ole ratkaisua","This puzzle instance contains a contradiction":"Tässä pulmassa on ristiriita","This puzzle is not self-consistent":"Tämä pulma ei ole ristiriidaton","Too few clues for block structure":"Lohkorakenteeseen nähden liian vähän vihjeitä","Too few clues for grid size":"Ruudukon kokoon nähden liian vähän vihjeitä","Too little data in clue list":"Vihjelistassa on liian vähän tietoa","Too little data in edge list":"Kaarilistassa on liian vähän tietoa","Too many balls to fit in the grid":"Palloja on liikaa ruudukkoon nähden","Too many clues for block structure":"Lohkorakenteeseen nähden liikaa vihjeitä","Too many clues for grid size":"Ruudukon kokoon nähden liikaa vihjeitä","Too many colours (at most {0})":"Liikaa värejä (enintään {0})","Too many colours makes given grid size impossible":"Näin monella värillä annettu ruudukon koko on mahdoton","Too many guesses (at most {0})":"Liikaa arvauksia (enintään {0})","Too many jigsaw blocks":"Jigsaw-lohkoja on liikaa","Too many killer cages":"Killer-alueita on liikaa","Too many mines for grid size":"Miinoja on liikaa ruudukon kokoon nähden","Too many pegs per guess (at most {0})":"Liikaa nappuloita rivissä (enintään {0})","Too many regions to fit in grid":"Alueita on liikaa ruudukkoon mahtuakseen","Too much data in block structure specification":"Lohkorakenteen määrittelyssä on liikaa tietoa","Too much data in clue list":"Vihjelistassa on liikaa tietoa","Too much data in edge list":"Kaarilistassa on liikaa tietoa","Too much data to fill grid":"Ruudukon täyttämiseen on liikaa tietoa","Too much data to fit in grid":"Tietoa on liikaa ruudukkoon mahtuakseen","Trivial solutions are uninteresting":"Triviaalit ratkaisut ovat tylsiä","Unable to build a grid for these parameters":"Näillä arvoilla ei voi rakentaa ruudukkoa","Unable to build this grid":"Tätä ruudukkoa ei voi rakentaa","Unable to find a solution for this puzzle":"Tähän pulmaan ei löydy ratkaisua","Unable to find a solution from this position":"Tästä asemasta ei löydy ratkaisua","Unable to find a solution to this puzzle":"Tähän pulmaan ei löydy ratkaisua","Unable to find a unique solution for this puzzle":"Tähän pulmaan ei löydy yksikäsitteistä ratkaisua","Unable to generate a puzzle of this size":"Tämänkokoista pulmaa ei voi luoda","Unable to generate a puzzle with these parameters":"Näillä arvoilla ei voi luoda pulmaa","Unable to solve this puzzle":"Tätä pulmaa ei voi ratkaista","Unable to support more than {0} distinct symbols":"Yli {0} erilaista symbolia ei tueta","Unable to work out any more of this puzzle":"Tästä pulmasta ei saa selvitettyä enempää","Unexpected additional character at end of game description":"Odottamaton ylimääräinen merkki pelin kuvauksen lopussa","Unexpected additional data at end of game description":"Odottamatonta ylimääräistä tietoa pelin kuvauksen lopussa","Unexpected character '{0}' in description":"Odottamaton merkki ”{0}” kuvauksessa","Unexpected character in clue list":"Odottamaton merkki vihjelistassa","Unexpected character in edge list":"Odottamaton merkki kaarilistassa","Unexpected data at end of game description":"Odottamatonta tietoa pelin kuvauksen lopussa","Unknown board type":"Tuntematon lautatyyppi","Unknown character in description":"Tuntematon merkki kuvauksessa","Unknown difficulty":"Tuntematon vaikeustaso","Unknown difficulty level":"Tuntematon vaikeustaso","Unknown difficulty rating":"Tuntematon vaikeusluokitus","Unknown shape type":"Tuntematon muototyyppi","Unknown symmetry":"Tuntematon symmetria","Unknown symmetry type":"Tuntematon symmetriatyyppi","Unrecognised character in game description":"Tunnistamaton merkki pelin kuvauksessa","Unrecognised characters in game description":"Tunnistamattomia merkkejä pelin kuvauksessa","Unrecognised clue type":"Tunnistamaton vihjetyyppi","Unrecognised grid description.":"Tuntematon ruudukon kuvaus.","Unrecognised solid type":"Tunnistamaton kappaletyyppi","Width and height cannot both be two":"Leveys ja korkeus eivät voi molemmat olla kaksi","Width and height for this grid type must both be at least {0}":"Tässä ruudukkotyypissä leveyden ja korkeuden on oltava vähintään {0}","Width and height must be at least two":"Leveyden ja korkeuden on oltava vähintään kaksi","Width and height must be at least {0}":"Leveyden ja korkeuden on oltava vähintään {0}","Width and height must be at most twelve":"Leveys ja korkeus saavat olla enintään kaksitoista","Width and height must be at most {0}":"Leveys ja korkeus saavat olla enintään {0}","Width and height must be at most {0} to generate a puzzle":"Leveys ja korkeus saavat olla enintään {0}, jotta pulman voi luoda","Width and height must be positive":"Leveyden ja korkeuden on oltava positiivisia","Width and height must be whole numbers":"Leveyden ja korkeuden on oltava kokonaislukuja","Width and height must both be at least 3":"Sekä leveyden että korkeuden on oltava vähintään 3","Width and height must both be at least four":"Sekä leveyden että korkeuden on oltava vähintään neljä","Width and height must both be at least one":"Sekä leveyden että korkeuden on oltava vähintään yksi","Width and height must both be at least two":"Sekä leveyden että korkeuden on oltava vähintään kaksi","Width and height must both be even":"Sekä leveyden että korkeuden on oltava parillisia","Width and height must both be greater than three":"Sekä leveyden että korkeuden on oltava suurempia kuin kolme","Width and height must both be greater than two":"Sekä leveyden että korkeuden on oltava suurempia kuin kaksi","Width and height must both be greater than zero":"Sekä leveyden että korkeuden on oltava suurempia kuin nolla","Width and height must both be positive":"Sekä leveyden että korkeuden on oltava positiivisia","With three colours, a solvable grid may have at most {0} squares":"Kolmella värillä ratkaistavassa ruudukossa voi olla enintään {0} ruutua","Width must be at least 3":"Leveyden on oltava vähintään 3","Width must be at least five":"Leveyden on oltava vähintään viisi","Width must be at least one":"Leveyden on oltava vähintään yksi","Width must be at least the rotating block size":"Leveyden on oltava vähintään kääntyvän lohkon kokoinen","Width must be at least two":"Leveyden on oltava vähintään kaksi","Width, height and ball counts must be whole numbers":"Leveyden, korkeuden ja pallomäärien on oltava kokonaislukuja","Width, height and difficulty must be whole numbers":"Leveyden, korkeuden ja vaikeustason on oltava kokonaislukuja","Width, height and number of colours must be whole numbers":"Leveyden, korkeuden ja värien määrän on oltava kokonaislukuja","Width, height, block size and move count must be whole numbers":"Leveyden, korkeuden, lohkon koon ja siirtojen määrän on oltava kokonaislukuja","X puzzles need at least four symbols":"X-pulmat tarvitsevat vähintään neljä symbolia","X-diagonal jigsaw puzzles with more than {0} symbols take too long to generate":"X-lävistäjillä varustettujen Jigsaw-pulmien luonti kestää liian kauan, jos symboleja on yli {0}","You have hit a mine; undo that move first":"Olet osunut miinaan; kumoa ensin se siirto","a cell may be a number position for only one rectangle":"ruutu voi olla vain yhden suorakulmion numeroruutu","at least one column contains more numbers than will fit":"ainakin yhdessä sarakkeessa on enemmän lukuja kuin siihen mahtuu","at least one row contains more numbers than will fit":"ainakin yhdellä rivillä on enemmän lukuja kuin siihen mahtuu","cells are not adjacent":"ruudut eivät ole vierekkäin","domino layout: no path between singletons":"dominoasettelu: yksinäisten ruutujen välillä ei ole polkua","domino layout: stranded square cannot be paired":"dominoasettelu: eristynyttä ruutua ei voi parittaa","dot touches the outside twice":"piste koskettaa ulkopuolta kahdesti","dot with fewer than two edges":"pisteessä on alle kaksi kaarta","edge does not follow its face":"kaari ei seuraa aluettaan","edge shared by three faces":"kolme aluetta jakaa saman kaaren","expected CxR or Nj":"odotettiin muotoa CxR tai Nj","expected WxH":"odotettiin muotoa WxH","expected WxHnN":"odotettiin muotoa WxHnN","expected a grid size":"odotettiin ruudukon kokoa","expected a maximum number":"odotettiin enimmäismäärää","expected a number of points":"odotettiin pisteiden määrää","expected a solid letter followed by WxH":"odotettiin kappaleen kirjainta ja sen perään muotoa WxH","expected something like c6p4g10Bm":"odotettiin jotain muotoa c6p4g10Bm","expected w<W>h<H>m<MIN>M<MAX>":"odotettiin muotoa w<W>h<H>m<MIN>M<MAX>","generateKeen: solver disagrees with the square":"generateKeen: ratkaisija on eri mieltä ruudusta","grid inconsistency while walking round a face":"ruudukon ristiriita aluetta kierrettäessä","inconsistent clues while assembling":"ristiriitaisia vihjeitä koottaessa","inconsistent distance field":"ristiriitainen etäisyyskenttä","inconsistent face classes":"ristiriitaiset alueluokat","latin rectangle could not be extended":"latinalaista suorakulmiota ei voitu laajentaa","latinGenerate: no extension found":"latinGenerate: laajennusta ei löytynyt","latinSquare: rectangle could not be extended":"latinSquare: suorakulmiota ei voitu laajentaa","line too long for solver":"rivi on liian pitkä ratkaisijalle","no clue left to place":"ei enää vihjettä sijoitettavaksi","no such laser: {0}":"tuntematon laser: {0}","rolled solid does not fit its destination":"vieritetty kappale ei sovi kohteeseensa","shown":"paljastettu","too few row/column specifications":"liian vähän rivi-/sarakemäärittelyjä","too many row/column specifications":"liian monta rivi-/sarakemäärittelyä","unrecognised character in game description":"tunnistamaton merkki pelin kuvauksessa","yes!":"kyllä!","9×9 Extreme puzzles take too long to generate; try 8×8 or Expert":"9×9-kokoisten Äärimmäinen-pulmien luonti kestää liian kauan; kokeile kokoa 8×8 tai tasoa Asiantuntija"}`),Z={moves:`Siirtoja: {n}`,movesCompleted:{one:`Valmis {n} siirrolla`,other:`Valmis {n} siirrolla`},movesSinceSolve:`Siirtoja automaattiratkaisun jälkeen: {n}`,completedMoves:`Valmis! Siirtoja: {n}`,solvedByComputer:`Tietokone ratkaisi tämän`,completed:`Valmis!`,completedPrefix:`Valmis! `,autoSolved:`Ratkaistu automaattisesti.`,autoSolvedPrefix:`Ratkaistu automaattisesti. `,autoSolverUsedPrefix:`Automaattiratkaisijaa käytetty. `,failedPrefix:`Siirrot loppuivat. `,dead:`Astuit miinaan.`,target:` (tavoite {n})`},Q=JSON.parse(`{"blackbox":{"name":"Musta laatikko","description":"Etsi piilotetut pallot ampumalla lasereita laatikkoon ja katsomalla, mistä ne tulevat ulos.","preset":{"5x5_3_balls":"5×5, 3 palloa","8x8_5_balls":"8×8, 5 palloa","8x8_3_6_balls":"8×8, 3-6 palloa","10x10_5_balls":"10×10, 5 palloa","10x10_4_10_balls":"10×10, 4-10 palloa"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"no_of_balls":{"name":"Pallojen määrä"}},"achievement":{"sparing_shots":{"name":"Säästeliäs ampuja","description":"Löydä kaikki pallot ampumalla lasereita enintään puolesta porteista."},"pinpoint":{"name":"Tarkka osuma","description":"Löydä kaikki pallot vähintään 8×8-kokoisesta laatikosta ampumalla enintään kolme laseria palloa kohden."},"shot_in_the_dark":{"name":"Laukaus pimeään","description":"Tarkistuta pallosi ampumatta yhtään laseria, ja erehdy."}},"status":{"correct":"OIKEIN!","wrong":{"one":"{wrong} väärin, {n} pallo löytämättä.","other":"{wrong} väärin, {n} palloa löytämättä."},"marked":"Palloja merkitty: {n} / {range}  ·  Lasereita ammuttu: {fired}","tooMany":"  ·  {n} palloa liikaa merkittynä.","check":"  ·  Tarkista kulman painikkeesta."}},"bridges":{"name":"Sillat","alsoKnownAs":"Hashiwokakero, Hashi","description":"Yhdistä saaret silloilla niin, että jokaisen luku täyttyy eikä yksikään silta risteä toisen kanssa.","preset":{"7x7_easy":"7×7 Helppo","7x7_medium":"7×7 Keskivaikea","7x7_hard":"7×7 Vaikea","10x10_easy":"10×10 Helppo","10x10_medium":"10×10 Keskivaikea","10x10_hard":"10×10 Vaikea","15x15_easy":"15×15 Helppo","15x15_medium":"15×15 Keskivaikea","15x15_hard":"15×15 Vaikea","10x10_medium_no_loops":"10×10 Keskivaikea, ei silmukoita"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"difficulty":{"name":"Vaikeustaso","choice":{"easy":"Helppo","medium":"Keskivaikea","hard":"Vaikea"}},"allow_loops":{"name":"Salli silmukat"},"max_bridges_per_direction":{"name":"Siltoja enintään yhteen suuntaan","choice":{"1":"1","2":"2","3":"3","4":"4"}},"of_island_squares":{"name":"Saariruutujen osuus (%)","choice":{"5":"5%","10":"10%","15":"15%","20":"20%","25":"25%","30":"30%"}},"expansion_factor":{"name":"Laajennuskerroin (%)","choice":{"0":"0%","10":"10%","20":"20%","30":"30%","40":"40%","50":"50%","60":"60%","70":"70%","80":"80%","90":"90%","100":"100%"}}},"action":{"e":{"label":"Pyyhi","title":"Vedä saarelta, niin sen sillat siihen suuntaan poistuvat (E)"},"g":{"label":"Apuviivat","title":"Näytä tai piilota himmeät apuviivat kaikkiin paikkoihin, joihin silta voisi tulla (G)"}},"achievement":{"no_markers":{"name":"Kirkkaat vedet","description":"Ratkaise vähintään 10×10-kokoinen pulma merkitsemättä yhtään ”ei siltaa” -merkintää."},"sure_footing":{"name":"Varma askel","description":"Ratkaise vähintään 10×10-kokoinen Vaikea pulma poistamatta siltaa ja käyttämättä Kumoa-toimintoa."}}},"cube":{"name":"Kuutio","description":"Vieritä kappaletta ruudukolla ja kerää kaikki siniset ruudut sen tahkoille.","preset":{"cube":"Kuutio","tetrahedron":"Tetraedri","octahedron":"Oktaedri","icosahedron":"Ikosaedri"},"config":{"type_of_solid":{"name":"Kappaleen tyyppi","choice":{"tetrahedron":"Tetraedri","cube":"Kuutio","octahedron":"Oktaedri","icosahedron":"Ikosaedri"}},"width_top":{"name":"Leveys / yläosa"},"height_bottom":{"name":"Korkeus / alaosa"}},"achievement":{"short_haul":{"name":"Lyhyt matka","description":"Tee Kuution kaikista tahkoista sinisiä enintään kahdellakymmenellä vierityksellä."},"octahedron_ace":{"name":"Kahdeksan tahkoa lennossa","description":"Tee Oktaedrin kaikista tahkoista sinisiä enintään kolmellakymmenellä vierityksellä."},"scenic_route":{"name":"Suuri kiertomatka","description":"Vieritä kappaletta vähintään kaksisataa kertaa, ennen kuin kaikki tahkot ovat sinisiä."}}},"dominosa":{"name":"Dominosa","description":"Selvitä, miten sekoitettu dominosarja on aseteltu lukuruudukkoon.","preset":{"up_to_double_3":"Enintään tupla-3","up_to_double_4":"Enintään tupla-4","up_to_double_5":"Enintään tupla-5","up_to_double_6":"Enintään tupla-6","up_to_double_7":"Enintään tupla-7","up_to_double_8":"Enintään tupla-8","up_to_double_9":"Enintään tupla-9"},"config":{"maximum_number_on_dominoes":{"name":"Dominojen suurin numero"},"difficulty":{"name":"Vaikeustaso","choice":{"very_easy":"Erittäin helppo","easy":"Helppo","hard":"Vaikea","extreme":"Äärimmäinen","ambiguous":"Monitulkintainen"}}},"achievement":{"no_lines":{"name":"Ei kynää tarvita","description":"Ratkaise vähintään tupla-6-sarja piirtämättä yhtään viivaa."},"one_click_each":{"name":"Yksi napsautus kutakin","description":"Ratkaise vähintään tupla-6-sarja yhdellä napsautuksella dominoa kohden ja ilman kumoamista."},"doubles_first":{"name":"Tuplat ensin","description":"Aseta sarjan kaikki tuplat ennen yhtäkään muuta dominoa."}}},"fifteen":{"name":"Viisitoista","alsoKnownAs":"15-peli, liukupalapeli","description":"Liu'uta laattoja, kunnes ne ovat järjestyksessä.","preset":{"3x3":"3×3","4x4":"4×4","5x5":"5×5"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"}},"achievement":{"short_shuffle":{"name":"Lyhyt sekoitus","description":"Järjestä 4×4 enintään 100 siirrolla."},"five_flyer":{"name":"Viisi kertaa viisi lennossa","description":"Järjestä 5×5 alle kolmessa minuutissa."},"scenic_route":{"name":"Maisemareitti","description":"Käytä yli 300 siirtoa 3×3:n järjestämiseen."}}},"filling":{"name":"Täyttö","alsoKnownAs":"Fillomino","description":"Täytä ruudukko niin, että jokainen samojen numeroiden ryhmä on täsmälleen sen numeron kokoinen.","preset":{"9x7":"9×7","13x9":"13×9","17x13":"17×13"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"}},"achievement":{"in_ink":{"name":"Musteella kirjoitettu","description":"Ratkaise Täyttö muuttamatta tai pyyhkimättä yhtään numeroa ja ilman kumoamista."},"one_stroke":{"name":"Kukin kerralla","description":"Ratkaise vähintään 13×9-kokoinen Täyttö kirjoittamalla jokainen numeroryhmä yhdellä siirrolla."}},"action":{"f":{"label":"Täytä","title":"Vedä numerosta, niin se kirjoittuu jokaiseen ruutuun, jonka yli kuljet (F)"}}},"flip":{"name":"Käännä","alsoKnownAs":"Lights Out","description":"Sytytä kaikki ruudut. Jokainen painallus kääntää myös ympäröivät ruudut.","preset":{"3x3_crosses":"3×3 Ristit","4x4_crosses":"4×4 Ristit","5x5_crosses":"5×5 Ristit","3x3_random":"3×3 Satunnainen","4x4_random":"4×4 Satunnainen","5x5_random":"5×5 Satunnainen"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"shape_type":{"name":"Kuvion tyyppi","choice":{"crosses":"Ristit","random":"Satunnainen"}}},"achievement":{"press_once":{"name":"Yksi painallus","description":"Sytytä vähintään 4×4-kokoinen lauta painamatta mitään ruutua kahdesti."},"fewest_presses":{"name":"Pienin vaiva","description":"Sytytä 5×5-lauta pienimmällä mahdollisella määrällä painalluksia."}}},"flood":{"name":"Tulva","alsoKnownAs":"Flood It","description":"Levitä väriä kulmasta, kunnes koko ruudukko on yhtä väriä. Siirtoja on rajallisesti.","preset":{"12x12_easy":"12×12 Helppo","12x12_medium":"12×12 Keskivaikea","12x12_hard":"12×12 Vaikea","16x16_medium":"16×16 Keskivaikea","16x16_hard":"16×16 Vaikea","12x12_3_colours":"12×12, 3 väriä","12x12_4_colours":"12×12, 4 väriä"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"colours":{"name":"Värit"},"extra_moves_permitted":{"name":"Sallitut lisäsiirrot"}},"achievement":{"spare_moves":{"name":"Siirtoja säästössä","description":"Täytä ruudukko niin, että siirtoja jää vähintään kolme jäljelle."},"beat_the_solver":{"name":"Kone voitettu","description":"Täytä ruudukko vähemmillä siirroilla kuin tietokoneen oma ratkaisu."},"one_colour_short":{"name":"Yksi väri liikaa","description":"Käytä kaikki siirrot, kun ruudukossa on jäljellä enää kaksi väriä."}},"status":{"moves":"{n} / {limit} siirtoa"}},"galaxies":{"name":"Galaksit","alsoKnownAs":"Spiral Galaxies, Tentai Show","description":"Jaa ruudukko alueisiin, joista jokainen on symmetrinen sisällään olevan pisteen suhteen.","preset":{"7x7_medium":"7×7 Keskivaikea","7x7_extreme":"7×7 Äärimmäinen","10x10_medium":"10×10 Keskivaikea","15x15_medium":"15×15 Keskivaikea"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"difficulty":{"name":"Vaikeustaso","choice":{"medium":"Keskivaikea","extreme":"Äärimmäinen"}}},"achievement":{"no_arrows":{"name":"Ei viittoja","description":"Ratkaise vähintään 10×10-kokoinen Galaksit vetämättä yhtään nuolta."},"steady_hand":{"name":"Kiintotähdet","description":"Ratkaise vähintään 10×10-kokoinen Galaksit poistamatta seinää ja käyttämättä Kumoa-toimintoa."}}},"guess":{"name":"Arvaa","alsoKnownAs":"Mastermind","description":"Päättele piilotettu väririvi arvauksistasi saamiesi merkkien avulla.","preset":{"standard":"Vakio","super":"Super"},"config":{"colours":{"name":"Värit"},"pegs_per_guess":{"name":"Nappuloita rivissä"},"guesses":{"name":"Arvauksia"},"allow_blanks":{"name":"Salli tyhjät"},"allow_duplicates":{"name":"Salli toistuvat värit"}},"action":{"k":{"label":"Lukitse","title":"Napsauta rivisi nappulaa, niin se siirtyy mukana seuraavaan arvaukseen (K)"},"l":{"label":"Kirjaimet","title":"Merkitse nappulat kirjaimin (L)"}},"achievement":{"five_guesses":{"name":"Koodinmurtaja","description":"Löydä piilotettu rivi enintään viidellä arvauksella."},"super_sleuth":{"name":"Mestarietsivä","description":"Löydä Super-tason viiden nappulan piilotettu rivi enintään kuudella arvauksella."},"so_near":{"name":"Niin lähellä","description":"Käytä kaikki arvaukset, kun kaikki nappulat yhtä lukuun ottamatta ovat oikeilla paikoillaan."}},"status":{"revealed":"Ratkaisu paljastettu","solved":{"one":"Ratkaistu {n} arvauksella","other":"Ratkaistu {n} arvauksella"},"outOfGuesses":"Arvaukset loppuivat: tässä ratkaisu","guessN":"Arvaus {n}/{total}"}},"inertia":{"name":"Hitaus","description":"Liu'uta palloa ruudukossa ja kerää kaikki jalokivet osumatta miinaan.","preset":{"10x8":"10×8","15x12":"15×12","20x16":"20×16"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"}},"achievement":{"hat_trick":{"name":"Hattutemppu","description":"Kerää vähintään kolme jalokiveä yhdellä pallon vierityksellä."},"shortcut":{"name":"Oikotie","description":"Kerää vähintään 15×12-kokoisen laudan kaikki jalokivet vähemmillä siirroilla kuin Ratkaise tarvitsisi."},"last_gem_mine":{"name":"Pyrrhoksen voitto","description":"Vieri miinaan samalla siirrolla, jolla keräät viimeisenkin jalokiven."}},"status":{"gems":"Jalokiviä: {n}","deaths":" · Kuolemia: {n}"}},"keen":{"name":"Keen","alsoKnownAs":"KenKen, Calcudoku","description":"Täytä latinalainen neliö niin, että jokaisen alueen numerot täsmäävät sen laskuvihjeeseen.","preset":{"4x4_easy":"4×4 Helppo","5x5_easy":"5×5 Helppo","5x5_easy_x_only":"5×5 Helppo, vain ×","6x6_easy":"6×6 Helppo","6x6_medium":"6×6 Keskivaikea","6x6_medium_x_only":"6×6 Keskivaikea, vain ×","6x6_hard":"6×6 Vaikea","6x6_expert":"6×6 Asiantuntija","6x6_extreme":"6×6 Äärimmäinen","9x9_medium":"9×9 Keskivaikea"},"config":{"grid_size":{"name":"Ruudukon koko"},"difficulty":{"name":"Vaikeustaso","choice":{"easy":"Helppo","medium":"Keskivaikea","hard":"Vaikea","expert":"Asiantuntija","extreme":"Äärimmäinen"}},"multiplication_only":{"name":"Vain kertolasku"}},"action":{"m":{"label":"Merkinnät","title":"Merkitse kaikki vaihtoehdot jokaiseen tyhjään ruutuun (M)"},"l":{"label":"Korosta","title":"Nosta esiin kaikki ruudut, joissa on viimeksi koskettamasi numero (L)"}},"achievement":{"no_pencil":{"name":"Päässälaskija","description":"Ratkaise vähintään 6×6-kokoinen Keen tekemättä yhtään kynämerkintää."},"products_only":{"name":"Pelkkä tulo","description":"Ratkaise 6×6 Keskivaikea Keen pelkällä kertolaskulla."}}},"lightup":{"name":"Valaise","alsoKnownAs":"Akari","description":"Sijoita lamput niin, että jokainen ruutu valaistuu eikä yksikään lamppu paista toiseen.","preset":{"7x7_easy":"7×7 Helppo","7x7_medium":"7×7 Keskivaikea","7x7_hard":"7×7 Vaikea","10x10_easy":"10×10 Helppo","10x10_medium":"10×10 Keskivaikea","10x10_hard":"10×10 Vaikea","14x14_easy":"14×14 Helppo","14x14_medium":"14×14 Keskivaikea","14x14_hard":"14×14 Vaikea"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"of_black_squares":{"name":"Mustien ruutujen osuus (%)"},"symmetry":{"name":"Symmetria","choice":{"none":"Ei","2_way_mirror":"2-suuntainen peilaus","2_way_rotational":"2-suuntainen kierto","4_way_mirror":"4-suuntainen peilaus","4_way_rotational":"4-suuntainen kierto"}},"difficulty":{"name":"Vaikeustaso","choice":{"easy":"Helppo","medium":"Keskivaikea","hard":"Vaikea"}}},"achievement":{"no_crosses":{"name":"Pelkkää valoa","description":"Ratkaise vähintään 10×10-kokoinen Valaise merkitsemättä yhtään ristiä."},"no_takebacks":{"name":"Valoisa idea","description":"Ratkaise Vaikea Valaise poistamatta kertaakaan lamppua."}},"action":{"x":{"label":"Risti","title":"Napsautukset lisäävät ristejä lamppujen sijaan (X)"}}},"loopy":{"name":"Silmukka","alsoKnownAs":"Slitherlink","description":"Piirrä yksi suljettu silmukka niin, että jokainen luku kertoo ympärillään olevien viivojen määrän.","preset":{"7x7_squares_easy":"7×7 Neliöt Helppo","10x10_squares_easy":"10×10 Neliöt Helppo","7x7_squares_medium":"7×7 Neliöt Keskivaikea","10x10_squares_medium":"10×10 Neliöt Keskivaikea","7x7_squares_expert":"7×7 Neliöt Asiantuntija","10x10_squares_expert":"10×10 Neliöt Asiantuntija","10x10_triangular_expert":"10×10 Kolmiot Asiantuntija","12x10_honeycomb_expert":"12×10 Hunajakenno Asiantuntija","7x7_snub_square_expert":"7×7 Snub-neliö Asiantuntija","9x9_cairo_expert":"9×9 Cairo Asiantuntija","5x4_great_hexagonal_expert":"5×4 Suuri kuusikulmio Asiantuntija","7x7_octagonal_expert":"7×7 Kahdeksankulmiot Asiantuntija","5x5_kites_expert":"5×5 Leijat Asiantuntija","5x5_floret_expert":"5×5 Kukka Asiantuntija","5x4_dodecagonal_expert":"5×4 Kaksitoistakulmiot Asiantuntija","5x4_great_dodecagonal_expert":"5×4 Suuri kaksitoistakulmio Asiantuntija","10x10_penrose_kite_dart_expert":"10×10 Penrose (leija/nuoli) Asiantuntija","10x10_penrose_rhombs_expert":"10×10 Penrose (vinoneliöt) Asiantuntija"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"grid_type":{"name":"Ruudukon tyyppi","choice":{"squares":"Neliöt","triangular":"Kolmiot","honeycomb":"Hunajakenno","snub_square":"Snub-neliö","cairo":"Cairo","great_hexagonal":"Suuri kuusikulmio","octagonal":"Kahdeksankulmiot","kites":"Leijat","floret":"Kukka","dodecagonal":"Kaksitoistakulmiot","great_dodecagonal":"Suuri kaksitoistakulmio","penrose_kite_dart":"Penrose (leija/nuoli)","penrose_rhombs":"Penrose (vinoneliöt)"}},"difficulty":{"name":"Vaikeustaso","choice":{"easy":"Helppo","medium":"Keskivaikea","hard":"Vaikea","expert":"Asiantuntija"}}},"achievement":{"off_grid":{"name":"Ruudukon ulkopuolella","description":"Ratkaise Silmukka millä tahansa muulla laatoituksella kuin neliöillä."},"no_crosses":{"name":"Pelkkä silmukka","description":"Ratkaise 10×10 Silmukka merkitsemättä yhtään sivua rastilla."},"aperiodic":{"name":"Jaksoton","description":"Ratkaise Penrose-Silmukka poistamatta kertaakaan piirtämääsi viivaa."}},"action":{"x":{"label":"Rasti","title":"Napsautukset rastivat sivuja viivojen piirtämisen sijaan (X)"}}},"magnets":{"name":"Magneetit","description":"Sijoita dominoihin magneetit ja tyhjät niin, että napojen määrät täsmäävät.","preset":{"6x5_easy":"6×5 Helppo","6x5_hard":"6×5 Vaikea","6x5_hard_strip_clues":"6×5 Vaikea, karsitut vihjeet","8x7_easy":"8×7 Helppo","8x7_hard":"8×7 Vaikea","8x7_hard_strip_clues":"8×7 Vaikea, karsitut vihjeet","10x9_hard":"10×9 Vaikea","10x9_hard_strip_clues":"10×9 Vaikea, karsitut vihjeet"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"difficulty":{"name":"Vaikeustaso","choice":{"easy":"Helppo","hard":"Vaikea"}},"strip_clues":{"name":"Karsi vihjeitä"}},"achievement":{"no_flips":{"name":"Oikein päin","description":"Ratkaise vähintään 8×7-kokoinen Magneetit kääntämättä kertaakaan magneettia toisin päin."},"stripped":{"name":"Paljaat johdot","description":"Ratkaise 10×9 Vaikea Magneetit karsituilla vihjeillä alle kymmenessä minuutissa."}},"action":{"b":{"label":"Tyhjä","title":"Napsautukset merkitsevät dominoja tyhjiksi magneettien asettamisen sijaan (B)"}}},"map":{"name":"Kartta","description":"Väritä kartta neljällä värillä niin, ettei kahdella naapurialueella ole samaa väriä.","preset":{"20x15_easy_30_regions":"20×15 Helppo, 30 aluetta","20x15_medium_30_regions":"20×15 Keskivaikea, 30 aluetta","20x15_hard_30_regions":"20×15 Vaikea, 30 aluetta","20x15_extreme_30_regions":"20×15 Äärimmäinen, 30 aluetta","30x25_medium_75_regions":"30×25 Keskivaikea, 75 aluetta","30x25_hard_75_regions":"30×25 Vaikea, 75 aluetta"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"regions":{"name":"Alueet"},"difficulty":{"name":"Vaikeustaso","choice":{"easy":"Helppo","medium":"Keskivaikea","hard":"Vaikea","extreme":"Äärimmäinen"}}},"achievement":{"no_dots":{"name":"Vapaalla kädellä","description":"Ratkaise Vaikea tai vaikeampi Kartta ilman yhtäkään kynäpistettä."},"steady_brush":{"name":"Vakaa sivellin","description":"Ratkaise Äärimmäinen Kartta muuttamatta kertaakaan alueen väriä."}},"action":{"l":{"label":"Numerot","title":"Näytä numero jokaisessa alueessa (L)"}}},"mines":{"name":"Miinat","alsoKnownAs":"Miinaharava, Minesweeper","description":"Paljasta jokainen ruutu, jossa ei ole miinaa; arvata ei tarvitse koskaan.","preset":{"9x9_beginner_10_mines":"9×9 Aloittelija, 10 miinaa","9x9_35_mines":"9×9, 35 miinaa","16x16_intermediate_40_mines":"16×16 Keskitaso, 40 miinaa","16x16_99_mines":"16×16, 99 miinaa","30x16_expert_99_mines":"30×16 Asiantuntija, 99 miinaa","30x16_170_mines":"30×16, 170 miinaa"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"mines":{"name":"Miinat"},"ensure_solubility":{"name":"Varmista ratkeavuus"}},"achievement":{"no_flags":{"name":"Liputon","description":"Voita Miinat-peli asettamatta yhtään lippua."},"expert_sweep":{"name":"Pommiryhmä","description":"Voita 30×16 Asiantuntija -lauta alle viidessä minuutissa."},"so_close":{"name":"Hilkulla","description":"Astu miinaan, kun avattavia turvallisia ruutuja on jäljellä enintään kolme."}},"status":{"marked":"Merkitty: {n} / {total}","deaths":" · Kuolemia: {n}"}},"net":{"name":"Verkko","alsoKnownAs":"NetWalk","description":"Käännä laattoja, kunnes jokainen on kytketty keskustaan.","preset":{"5x5":"5×5","7x7":"7×7","9x9":"9×9","11x11":"11×11","13x11":"13×11","5x5_wrapping":"5×5 kiertyvä","7x7_wrapping":"7×7 kiertyvä","9x9_wrapping":"9×9 kiertyvä","11x11_wrapping":"11×11 kiertyvä","13x11_wrapping":"13×11 kiertyvä"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"walls_wrap_around":{"name":"Seinät kiertyvät ympäri"},"barrier_probability":{"name":"Esteiden todennäköisyys"},"ensure_unique_solution":{"name":"Varmista yksikäsitteinen ratkaisu"}},"action":{"k":{"label":"Lukitse","title":"Napsautukset lukitsevat laattoja tai avaavat niiden lukituksen kääntämisen sijaan (K)"},"j":{"label":"Sekoita","title":"Käännä jokaista lukitsematonta laattaa satunnaisesti (J)"},"scroll_left":{"label":"←","title":"Vieritä näkymää vasemmalle (Shift+←)"},"scroll_up":{"label":"↑","title":"Vieritä näkymää ylös (Shift+↑)"},"scroll_down":{"label":"↓","title":"Vieritä näkymää alas (Shift+↓)"},"scroll_right":{"label":"→","title":"Vieritä näkymää oikealle (Shift+→)"}},"achievement":{"no_locks":{"name":"Ei mitään lukossa","description":"Ratkaise vähintään 9×9-kokoinen Verkko lukitsematta yhtään laattaa."},"not_a_turn_wasted":{"name":"Ei turhaa kääntöä","description":"Ratkaise vähintään 9×9-kokoinen Verkko kääntämättä mitään laattaa enempää kuin tarvitsee."},"jumbled":{"name":"Sekaisin","description":"Paina Sekoita ja ratkaise pulma silti."}},"status":{"active":"Kytketty: {n}/{total}"}},"netslide":{"name":"Liukuverkko","description":"Liu'uta verkkopalasten rivejä ja sarakkeita, kunnes kaikki on yhdistetty.","preset":{"3x3_easy":"3×3 helppo","3x3_medium":"3×3 keskivaikea","3x3_hard":"3×3 vaikea","4x4_easy":"4×4 helppo","4x4_medium":"4×4 keskivaikea","4x4_hard":"4×4 vaikea","5x5_easy":"5×5 helppo","5x5_medium":"5×5 keskivaikea","5x5_hard":"5×5 vaikea"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"walls_wrap_around":{"name":"Seinät kiertyvät ympäri"},"barrier_probability":{"name":"Esteiden todennäköisyys"},"number_of_shuffling_moves":{"name":"Sekoitussiirtojen määrä"}},"achievement":{"tidy_four":{"name":"Siisti kytkentä","description":"Ratkaise 4×4 Liukuverkko enintään 18 liu'utuksella."},"lean_five":{"name":"Linja-asentaja","description":"Ratkaise 5×5 Liukuverkko enintään 32 liu'utuksella."},"big_switch":{"name":"Suuri kytkin","description":"Sytytä koko verkko yhdellä liu'utuksella, kun alle puolet siitä oli valaistuna."}},"status":{"active":" · Kytketty: {n}/{total}"}},"pattern":{"name":"Kuvio","alsoKnownAs":"Japanilainen ristikko, nonogrammi, Picross","description":"Täytä ruudukko: rivien ja sarakkeiden luvut kertovat mustien jaksojen pituudet.","preset":{"10x10":"10×10","15x15":"15×15","20x20":"20×20","25x25":"25×25","30x30":"30×30"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"}},"achievement":{"no_dots":{"name":"Ei pistettäkään","description":"Ratkaise vähintään 15×15-kokoinen Kuvio asettamatta yhtään pistettä."},"inked_in":{"name":"Musteella vedetty","description":"Ratkaise vähintään 20×20-kokoinen Kuvio tyhjentämättä kertaakaan mustaa ruutua."}},"action":{"e":{"label":"Pyyhi","title":"Napsauta tai vedä, niin ruudut palautuvat tuntemattomiksi (E)"}}},"pearl":{"name":"Helmet","alsoKnownAs":"Masyu","description":"Piirrä yksi suljettu silmukka, joka kulkee suoraan valkoisten helmien läpi ja kääntyy mustissa.","preset":{"6x6_easy":"6×6 Helppo","6x6_tricky":"6×6 Kinkkinen","8x8_easy":"8×8 Helppo","8x8_tricky":"8×8 Kinkkinen","10x10_easy":"10×10 Helppo","10x10_tricky":"10×10 Kinkkinen","12x8_easy":"12×8 Helppo","12x8_tricky":"12×8 Kinkkinen"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"difficulty":{"name":"Vaikeustaso","choice":{"easy":"Helppo","tricky":"Kinkkinen"}},"allow_unsoluble":{"name":"Salli ratkeamattomat"}},"achievement":{"no_crosses":{"name":"Helminauha","description":"Ratkaise 10×10 Helmet asettamatta yhtään ristiä."},"one_stroke":{"name":"Yhdellä vedolla","description":"Piirrä vähintään 8×8-kokoisen Helmet-pulman koko silmukka yhdellä vedolla."}},"action":{"x":{"label":"Risti","title":"Napsauta tai vedä, niin rastit reunat, joita silmukka ei voi käyttää (X)"}}},"pegs":{"name":"Nappulat","alsoKnownAs":"Lautapasianssi, erakkopeli, Solitaire","description":"Hypi nappuloilla toistensa yli, kunnes jäljellä on vain yksi.","preset":{"cross":"Risti","octagon":"Kahdeksankulmio","random_5x5":"Satunnainen 5×5","random_7x7":"Satunnainen 7×7","random_9x9":"Satunnainen 9×9"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"board_type":{"name":"Laudan tyyppi","choice":{"cross":"Risti","octagon":"Kahdeksankulmio","random":"Satunnainen"}}},"achievement":{"dead_centre":{"name":"Napakymppi","description":"Päätä Risti-lauta niin, että viimeinen nappula on keskimmäisessä reiässä."},"hopscotch":{"name":"Ruutuhyppely","description":"Voita Nappulat-peli, jossa yksi nappula hyppää neljä kertaa peräkkäin."},"pegged_out":{"name":"Jumissa","description":"Jää jumiin, kun laudalla on vielä vähintään kymmenen nappulaa."}},"status":{"stuck":"Ei enää siirtoja — {n} nappulaa jäljellä","playing":"Nappuloita jäljellä: {n}  ·  Siirtoja: {moves}"}},"range":{"name":"Näkyvyys","alsoKnownAs":"Kurodoko, Kuromasu","description":"Väritä ruutuja mustiksi niin, että jokainen luku näkee rivillään ja sarakkeessaan täsmälleen sen verran valkoisia ruutuja.","preset":{"9x6":"9×6","12x8":"12×8","13x9":"13×9","16x11":"16×11"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"}},"achievement":{"no_dots":{"name":"Puhdas kontrasti","description":"Ratkaise vähintään 13×9-kokoinen Näkyvyys asettamatta yhtään pistettä."},"quick_sight":{"name":"Tarkka silmä","description":"Ratkaise 16×11 Näkyvyys alle viidessä minuutissa."}},"action":{"e":{"label":"Pyyhi","title":"Napsauta tai vedä, niin mustat ruudut ja pisteet poistuvat (E)"}}},"rect":{"name":"Suorakulmiot","alsoKnownAs":"Shikaku","description":"Jaa ruudukko suorakulmioihin, joissa kussakin on yksi luku: suorakulmion pinta-ala.","preset":{"7x7":"7×7","9x9":"9×9","11x11":"11×11","13x13":"13×13","15x15":"15×15","17x17":"17×17","19x19":"19×19"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"expansion_factor":{"name":"Laajennuskerroin"},"ensure_unique_solution":{"name":"Varmista yksikäsitteinen ratkaisu"}},"achievement":{"clean_cuts":{"name":"Siistit leikkaukset","description":"Ratkaise vähintään 11×11-kokoinen Suorakulmiot enintään yhtä monella siirrolla kuin siinä on lukuja."},"quick_carver":{"name":"Nopea leikkaaja","description":"Ratkaise 19×19 Suorakulmiot alle kymmenessä minuutissa."}},"status":{"drag":"{w}×{h} "},"action":{"e":{"label":"Pyyhi","title":"Vedä alueen yli, niin sen sisäviivat poistuvat, tai napsauta viivaa, niin se poistuu (E)"}}},"samegame":{"name":"Samegame","alsoKnownAs":"Clickomania","description":"Tyhjennä lauta poistamalla vierekkäisten samanväristen ruutujen ryhmiä.","preset":{"5x5_3_colours":"5×5, 3 väriä","10x5_3_colours":"10×5, 3 väriä","15x10_3_colours":"15×10, 3 väriä","15x10_4_colours":"15×10, 4 väriä","20x15_4_colours":"20×15, 4 väriä"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"no_of_colours":{"name":"Värien määrä"},"scoring_system":{"name":"Pisteytystapa","choice":{"n_1_2":"(n-1)^2","n_2_2":"(n-2)^2"}},"ensure_solubility":{"name":"Varmista ratkeavuus"}},"achievement":{"avalanche":{"name":"Lumivyöry","description":"Poista kerralla vähintään 25 ruudun ryhmä ja tyhjennä sitten lauta."},"no_pairs":{"name":"Ei pareja","description":"Tyhjennä vähintään 15×10-kokoinen lauta poistamatta kertaakaan paria."},"last_one":{"name":"Viimeinen ruutu","description":"Jää jumiin, kun laudalla on jäljellä vain yksi ruutu."}},"status":{"score":"Pisteet: {n}","complete":"Lauta tyhjä! {score}","stuck":"Ei siirtoja jäljellä. {score}","selected":"{score} · Valittuna: {n} (+{points})"}},"signpost":{"name":"Tienviitta","description":"Yhdistä ruudut yhdeksi numeroiduksi poluksi, jossa jokainen askel seuraa nuolta.","preset":{"4x4":"4×4","4x4_free_ends":"4×4, vapaat päät","5x5":"5×5","5x5_free_ends":"5×5, vapaat päät","6x6":"6×6","7x7":"7×7"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"start_and_end_in_corners":{"name":"Alku ja loppu kulmissa"}},"achievement":{"unbroken":{"name":"Katkeamaton ketju","description":"Ratkaise Tienviitta poistamatta tai korvaamatta kertaakaan yhteyttä."},"in_order":{"name":"Suoraan läpi","description":"Ratkaise vähintään 6×6-kokoinen Tienviitta yhdistämällä reitti järjestyksessä luvusta 1 tähteen asti."},"star_first":{"name":"Toive tähdelle","description":"Tee aivan ensimmäinen yhteytesi tähteen ja ratkaise sitten pulma."}},"action":{"b":{"label":"Katkaise","title":"Napsauta ruutua, niin sen koko ketju hajoaa (B)"}}},"singles":{"name":"Singles","alsoKnownAs":"Hitori","description":"Väritä ruutuja mustiksi niin, ettei mikään luku toistu rivillä tai sarakkeessa eikä ruudukko hajoa osiin.","preset":{"5x5_easy":"5×5 Helppo","5x5_tricky":"5×5 Kinkkinen","6x6_easy":"6×6 Helppo","6x6_tricky":"6×6 Kinkkinen","8x8_easy":"8×8 Helppo","8x8_tricky":"8×8 Kinkkinen","10x10_easy":"10×10 Helppo","10x10_tricky":"10×10 Kinkkinen","12x12_easy":"12×12 Helppo","12x12_tricky":"12×12 Kinkkinen"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"difficulty":{"name":"Vaikeustaso","choice":{"easy":"Helppo","tricky":"Kinkkinen"}}},"achievement":{"no_circles":{"name":"Ei ympyröitä","description":"Ratkaise vähintään 8×8-kokoinen Singles ympyröimättä yhtään lukua."},"sure_hand":{"name":"Varma käsi","description":"Ratkaise vähintään 10×10-kokoinen Singles palauttamatta yhtään mustattua ruutua."}}},"sixteen":{"name":"Kuusitoista","description":"Liu'uta kokonaisia rivejä ja sarakkeita ja järjestä laatat.","preset":{"3x3":"3×3","4x3":"4×3","4x4":"4×4","5x4":"5×4","5x5":"5×5"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"number_of_shuffling_moves":{"name":"Sekoitussiirtojen määrä"}},"achievement":{"lean_slides":{"name":"Säästeliäs liu'uttaja","description":"Järjestä 4×4 enintään 100 liu'utuksella."},"five_in_200":{"name":"Suuri lajittelija","description":"Järjestä 5×5 enintään 200 liu'utuksella."},"round_the_doughnut":{"name":"Donitsin ympäri","description":"Liu'uta yksi rivi koko kierros, kunnes se on takaisin lähtöpaikassaan."}}},"slant":{"name":"Vinoviivat","alsoKnownAs":"Gokigen Naname","description":"Piirrä jokaiseen ruutuun vinoviiva niin, että luvut täsmäävät eikä silmukoita synny.","preset":{"5x5_easy":"5×5 Helppo","5x5_hard":"5×5 Vaikea","8x8_easy":"8×8 Helppo","8x8_hard":"8×8 Vaikea","12x10_easy":"12×10 Helppo","12x10_hard":"12×10 Vaikea"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"difficulty":{"name":"Vaikeustaso","choice":{"easy":"Helppo","hard":"Vaikea"}}},"achievement":{"no_loops":{"name":"Silmukaton","description":"Ratkaise vähintään 8×8-kokoinen Vinoviivat sulkematta kertaakaan silmukkaa."},"steady_hand":{"name":"Ei epäröintiä","description":"Ratkaise 12×10 Vinoviivat palaamatta muuttamaan yhtään viivaa."}}},"solo":{"name":"Solo","alsoKnownAs":"Sudoku","description":"Täytä ruudukko niin, että jokaisella rivillä, sarakkeessa ja lohkossa on jokainen numero tasan kerran.","preset":{"4x4_very_easy":"4×4 Erittäin helppo","6x6_easy":"6×6 Helppo","9x9_very_easy":"9×9 Erittäin helppo","9x9_easy":"9×9 Helppo","9x9_x_diagonal_easy":"9×9 Helppo X","9x9_medium":"9×9 Keskivaikea","9x9_hard":"9×9 Vaikea","9x9_x_diagonal_hard":"9×9 Vaikea X","9x9_expert":"9×9 Asiantuntija","9x9_extreme":"9×9 Äärimmäinen","9x9_killer":"9×9 Killer","9x9_jigsaw_easy":"9×9 Jigsaw Helppo","9x9_jigsaw_x_diagonal_easy":"9×9 Jigsaw Helppo X","9x9_jigsaw_hard":"9×9 Jigsaw Vaikea","12x12_easy":"12×12 Helppo","16x16_easy":"16×16 Helppo"},"config":{"columns_of_sub_blocks":{"name":"Alilohkojen sarakkeita"},"rows_of_sub_blocks":{"name":"Alilohkojen rivejä"},"x_require_every_number_in_each_main_diagonal":{"name":"”X” (jokainen numero kummallakin päälävistäjällä)"},"jigsaw_irregularly_shaped_sub_blocks":{"name":"Jigsaw (epäsäännölliset alilohkot)"},"killer_digit_sums":{"name":"Killer (numerosummat)"},"symmetry":{"name":"Symmetria","choice":{"none":"Ei","2_way_rotation":"2-suuntainen kierto","4_way_rotation":"4-suuntainen kierto","2_way_mirror":"2-suuntainen peilaus","2_way_diagonal_mirror":"2-suuntainen lävistäjäpeilaus","4_way_mirror":"4-suuntainen peilaus","4_way_diagonal_mirror":"4-suuntainen lävistäjäpeilaus","8_way_mirror":"8-suuntainen peilaus"}},"difficulty":{"name":"Vaikeustaso","choice":{"very_easy":"Erittäin helppo","easy":"Helppo","medium":"Keskivaikea","hard":"Vaikea","expert":"Asiantuntija","extreme":"Äärimmäinen"}}},"action":{"m":{"label":"Merkinnät","title":"Merkitse kaikki vaihtoehdot jokaiseen tyhjään ruutuun (M)"},"l":{"label":"Korosta","title":"Nosta esiin kaikki ruudut, joissa on viimeksi koskettamasi numero (L)"}},"achievement":{"pen_only":{"name":"Kynä, ei lyijykynää","description":"Ratkaise 9×9 Solo tasolla Keskivaikea, Killer tai vaikeampi ilman yhtäkään kynämerkintää."},"no_second_thoughts":{"name":"Ei katumista","description":"Ratkaise 9×9 Asiantuntija tai vaikeampi muuttamatta tai tyhjentämättä kertaakaan numeroa."}}},"tents":{"name":"Teltat","alsoKnownAs":"Tents and Trees","description":"Pystytä teltta jokaisen puun viereen niin, etteivät teltat kosketa toisiaan.","preset":{"8x8_easy":"8×8 Helppo","8x8_tricky":"8×8 Kinkkinen","10x10_easy":"10×10 Helppo","10x10_tricky":"10×10 Kinkkinen","15x15_easy":"15×15 Helppo","15x15_tricky":"15×15 Kinkkinen"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"difficulty":{"name":"Vaikeustaso","choice":{"easy":"Helppo","tricky":"Kinkkinen"}}},"achievement":{"no_grass":{"name":"Täydellinen leiri","description":"Ratkaise vähintään 10×10-kokoinen Teltat merkitsemättä yhtään ruutua nurmeksi."},"no_strikes":{"name":"Iloiset leiriläiset","description":"Ratkaise 15×15 Teltat purkamatta kertaakaan telttaa."}}},"towers":{"name":"Tornit","alsoKnownAs":"Pilvenpiirtäjät, Skyscrapers","description":"Rakenna tornit niin, että jokainen reunavihje kertoo sieltä näkyvien tornien määrän.","preset":{"4x4_easy":"4×4 Helppo","5x5_easy":"5×5 Helppo","5x5_hard":"5×5 Vaikea","6x6_easy":"6×6 Helppo","6x6_hard":"6×6 Vaikea","6x6_expert":"6×6 Asiantuntija","6x6_extreme":"6×6 Äärimmäinen"},"config":{"grid_size":{"name":"Ruudukon koko"},"difficulty":{"name":"Vaikeustaso","choice":{"easy":"Helppo","hard":"Vaikea","expert":"Asiantuntija","extreme":"Äärimmäinen"}}},"action":{"m":{"label":"Merkinnät","title":"Merkitse kaikki vaihtoehdot jokaiseen tyhjään ruutuun (M)"},"l":{"label":"Korosta","title":"Nosta esiin kaikki ruudut, joissa on viimeksi koskettamasi numero (L)"}},"achievement":{"no_pencil":{"name":"Siluetti päässä","description":"Ratkaise 6×6 Tornit tekemättä yhtään kynämerkintää."},"clean_build":{"name":"Kestämään rakennettu","description":"Ratkaise 6×6 Asiantuntija tai Äärimmäinen Tornit palaamatta muuttamaan yhtään tornia."},"tallest_first":{"name":"Korkeimmat ensin","description":"Rakenna kaikki korkeimmat tornit ennen muita ja ratkaise sitten ruudukko."}}},"tracks":{"name":"Kiskot","alsoKnownAs":"Train Tracks","description":"Rakenna yksi rautatie sisääntulosta uloskäyntiin niin, että luvut täsmäävät.","preset":{"8x8_easy":"8×8 Helppo","8x8_tricky":"8×8 Kinkkinen","10x8_easy":"10×8 Helppo","10x8_tricky":"10×8 Kinkkinen","10x10_easy":"10×10 Helppo","10x10_tricky":"10×10 Kinkkinen","15x10_easy":"15×10 Helppo","15x10_tricky":"15×10 Kinkkinen","15x15_easy":"15×15 Helppo","15x15_tricky":"15×15 Kinkkinen"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"difficulty":{"name":"Vaikeustaso","choice":{"easy":"Helppo","tricky":"Kinkkinen"}},"disallow_consecutive_1_clues":{"name":"Estä peräkkäiset 1-vihjeet"}},"achievement":{"no_crosses":{"name":"Ei yliviivauksia","description":"Ratkaise vähintään 10×10-kokoinen Kiskot yliviivaamatta yhtään ruutua tai sivua."},"no_lift":{"name":"Täyttä höyryä","description":"Ratkaise vähintään 15×10-kokoinen Kiskot nostamatta kertaakaan pois asettamaasi kiskoa."},"long_haul":{"name":"Pitkä veto","description":"Aseta kiskot kymmenen ruudun läpi yhdellä vedolla ja viimeistele sitten rata."}},"action":{"e":{"label":"Pyyhi","title":"Napsauta tai vedä, niin ruudut pyyhkiytyvät puhtaiksi (E)"}}},"twiddle":{"name":"Pyöritys","description":"Kierrä neliönmuotoisia laattalohkoja ja palauta luvut järjestykseen.","preset":{"3x3_rows_only":"3×3 vain rivit","3x3_normal":"3×3 normaali","3x3_orientable":"3×3 suunnattava","4x4_normal":"4×4 normaali","4x4_orientable":"4×4 suunnattava","4x4_rotating_3x3_blocks":"4×4, kääntyvät 3×3-lohkot","5x5_rotating_3x3_blocks":"5×5, kääntyvät 3×3-lohkot","6x6_rotating_4x4_blocks":"6×6, kääntyvät 4×4-lohkot"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"rotating_block_size":{"name":"Kääntyvän lohkon koko"},"one_number_per_row":{"name":"Yksi numero riviä kohti"},"orientation_matters":{"name":"Suunnalla on väliä"},"number_of_shuffling_moves":{"name":"Sekoitussiirtojen määrä"}},"achievement":{"few_turns":{"name":"Kaksikymmentä kääntöä","description":"Ratkaise 3×3 normaali Pyöritys enintään 20 käännöllä."},"perfect_ten":{"name":"Täysi kymppi","description":"Ratkaise 3×3 normaali Pyöritys enintään 10 käännöllä."},"dizzy":{"name":"Ympäri ja ympäri","description":"Käännä yhtä lohkoa samaan suuntaan neljä kertaa peräkkäin ja ratkaise sitten pulma."}},"action":{"t":{"label":"Myötäpäivään","title":"Vaihda suunnat: napsautus kääntää myötäpäivään, oikea napsautus vastapäivään (T)"}}},"undead":{"name":"Epäkuolleet","alsoKnownAs":"Haunted Mirror Maze","description":"Sijoita aaveet, vampyyrit ja zombit niin, että peileissä näkyvät hirviöt täsmäävät lukuihin.","preset":{"4x4_easy":"4×4 Helppo","4x4_normal":"4×4 Normaali","4x4_tricky":"4×4 Kinkkinen","5x5_easy":"5×5 Helppo","5x5_normal":"5×5 Normaali","5x5_tricky":"5×5 Kinkkinen","7x7_easy":"7×7 Helppo","7x7_normal":"7×7 Normaali"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"difficulty":{"name":"Vaikeustaso","choice":{"easy":"Helppo","normal":"Normaali","tricky":"Kinkkinen"}}},"keypad":{"g":"Aave","v":"Vampyyri","z":"Zombi"},"achievement":{"no_pencil":{"name":"Luota silmiisi","description":"Ratkaise vähintään 5×5-kokoinen Epäkuolleet tekemättä yhtään kynämerkintää."},"fearless":{"name":"Peloton","description":"Ratkaise Kinkkinen Epäkuolleet palaamatta muuttamaan yhtään hirviötä."}},"action":{"s":{"label":"Katse","title":"Näytä ruudun kautta tai reunaluvusta lähtevät katselinjat (S)"}}},"unequal":{"name":"Epäyhtälöt","alsoKnownAs":"Futoshiki","description":"Täydennä latinalainen neliö niin, että jokainen suuruusmerkki pitää paikkansa.","preset":{"4x4_easy":"4×4 Helppo","5x5_easy":"5×5 Helppo","5x5_medium":"5×5 Keskivaikea","5x5_medium_adjacent":"5×5 Keskivaikea (Vierekkäiset)","5x5_hard":"5×5 Vaikea","6x6_easy":"6×6 Helppo","6x6_medium":"6×6 Keskivaikea","6x6_medium_adjacent":"6×6 Keskivaikea (Vierekkäiset)","6x6_hard":"6×6 Vaikea","7x7_medium":"7×7 Keskivaikea","7x7_medium_adjacent":"7×7 Keskivaikea (Vierekkäiset)","7x7_hard":"7×7 Vaikea"},"config":{"mode":{"name":"Tila","choice":{"unequal":"Epäyhtälö","adjacent":"Vierekkäiset"}},"size_s_s":{"name":"Koko (s*s)"},"difficulty":{"name":"Vaikeustaso","choice":{"very_easy":"Erittäin helppo","easy":"Helppo","medium":"Keskivaikea","hard":"Vaikea","extreme":"Äärimmäinen"}}},"action":{"m":{"label":"Merkinnät","title":"Merkitse kaikki vaihtoehdot jokaiseen tyhjään ruutuun (M)"},"h":{"label":"Vihje","title":"Merkitse vaihtoehdot, jotka helppo päättely jättää jäljelle (H)"},"l":{"label":"Korosta","title":"Nosta esiin kaikki ruudut, joissa on viimeksi koskettamasi numero (L)"}},"achievement":{"adjacent_bare":{"name":"Naapurit","description":"Ratkaise Epäyhtälöt Vierekkäiset-tilassa tekemättä yhtään kynämerkintää."},"extreme_bare":{"name":"Kaikki päässä","description":"Ratkaise Äärimmäinen Epäyhtälöt tekemättä yhtään kynämerkintää."}}},"unruly":{"name":"Kuriton","alsoKnownAs":"Binairo, Takuzu","description":"Väritä ruudut mustiksi tai valkoisiksi: joka rivillä ja sarakkeessa yhtä monta kumpaakin, eikä koskaan kolmea samaa peräkkäin.","preset":{"8x8_easy":"8×8 Helppo","8x8_normal":"8×8 Normaali","10x10_easy":"10×10 Helppo","10x10_normal":"10×10 Normaali","14x14_easy":"14×14 Helppo","14x14_normal":"14×14 Normaali"},"config":{"width":{"name":"Leveys"},"height":{"name":"Korkeus"},"unique_rows_and_columns":{"name":"Ainutkertaiset rivit ja sarakkeet"},"difficulty":{"name":"Vaikeustaso","choice":{"easy":"Helppo","normal":"Normaali"}}},"achievement":{"no_threes":{"name":"Ei koskaan kolmea","description":"Ratkaise vähintään 10×10-kokoinen Kuriton tekemättä kertaakaan kolmen suoraa."},"first_time":{"name":"Mustaa valkoisella","description":"Ratkaise 14×14 Kuriton palaamatta muuttamaan yhtään ruutua."}},"action":{"e":{"label":"Pyyhi","title":"Napsauta ruutua, niin se tyhjenee (E)"}}},"untangle":{"name":"Selvitä solmu","alsoKnownAs":"Planarity","description":"Vedä pisteitä paikoilleen, kunnes yksikään viiva ei risteä toisen kanssa.","preset":{"6_points":"6 pistettä","10_points":"10 pistettä","15_points":"15 pistettä","20_points":"20 pistettä","25_points":"25 pistettä"},"config":{"number_of_points":{"name":"Pisteiden määrä"}},"action":{"g":{"label":"Ruudukko","title":"Kiinnitä pudotetut pisteet ruudukkoon (G)"}},"achievement":{"one_touch":{"name":"Kevyt kosketus","description":"Selvitä vähintään 10 pisteen solmu tarttumatta samaan pisteeseen kahdesti."},"only_downhill":{"name":"Vain alamäkeä","description":"Selvitä vähintään 20 pisteen solmu niin, ettei yksikään siirto lisää punaisia viivoja."}}}}`),$=JSON.parse('{"blackbox":{"step1":{"text":"Tähän 4×4-laatikkoon on piilotettu yksi pallo. Ammu lasereita reunan pisteistä, päättele, missä pallon on oltava, merkitse se ja paina kulman painiketta."},"step2":{"text":"Napsauta pistettä **vasemmassa reunassa, toisen rivin kohdalla**. Säde taipuu matkalla ja tulee ulos muualta; molempiin päihin tulee sama numero."},"step3":{"text":"Ammu nyt **toisen sarakkeen yläpään** pisteestä. **H** tarkoittaa, että säde osui suoraan palloon eikä tullut enää ulos."},"step4":{"text":"Ammu myös **ensimmäisen sarakkeen yläpään** pisteestä. **R** tarkoittaa, että säde kimposi suoraan takaisin ulos — niin käy, kun pallo on vinottain aukon vieressä."},"step5":{"text":"R sijoittaa pallon vinottain ensimmäisen sarakkeen viereen ja H jonnekin toiseen sarakkeeseen: vain tämä ruutu täyttää molemmat ehdot."},"step6":{"text":"**Napsauta sitä ruutua**, niin merkitset pallon siihen."},"step7":{"text":"Kaikki pallot on merkitty, joten **vasemman yläkulman väkänen** on nyt käytettävissä. Napsauta sitä, niin vastauksesi tarkistetaan."},"step8":{"text":"Oikein! Kun olet varma, että ruutu on tyhjä, voit lukita sen: **napsauta hiiren oikealla** sitä. **Ratkaise** taas paljastaa vastauksen."}},"bridges":{"step1":{"text":"Saaren numero kertoo, montako sillanpäätä se haluaa. Liitä kaikki saaret yhdeksi verkoksi niin, että saariparin välillä on enintään kaksi siltaa eikä yksikään silta risteä toisen kanssa."},"step2":{"text":"**Alimmalla 2:lla** on samassa linjassa vain yksi saari: ylhäällä oleva **4**. **Vedä** 2:sta kohti 4:ää, niin rakennat sillan niiden välille."},"step3":{"text":"Se haluaa kaksi sillanpäätä, ja tämä pari on ainoa paikka niille. **Vedä** samalla tavalla uudestaan, niin saat toisen, rinnakkaisen sillan."},"step4":{"text":"Se saari on valmis. **Napsauta** sitä, niin merkitset sen valmiiksi: se harmaantuu ja sen sillat lukittuvat, etkä sotke niitä vahingossa."},"step5":{"text":"Sillat eivät saa risteillä, joten **kahden 1:n** välille ei voi enää tulla siltaa. **Vedä hiiren oikealla** vasemmasta 1:stä kohti oikeaa, niin merkitset sen."},"step6":{"text":"Kummallakin 1:llä on nyt vain yksi suunta, ja siitä selviävät loput neljä siltaa. **Ratkaise** vie pulman loppuun (ja **G** näyttää kaikki linjat, joille silta voisi tulla).","textTouch":"Kummallakin 1:llä on nyt vain yksi suunta, ja siitä selviävät loput neljä siltaa. **Ratkaise** vie pulman loppuun."}},"cube":{"step1":{"text":"Kuutiolla on kuusi tahkoa ja kuusi ruutua on maalattu sinisiksi. Vieritä sitä, kunnes jokainen tahko on kerännyt yhden: joka kerta kun kuutio laskeutuu, alla oleva tahko ja ruutu vaihtavat värit keskenään."},"step2":{"text":"Napsautus kallistaa kuution reunansa yli kohti valitsemaasi ruutua. **Napsauta kuution alapuolella olevaa sinistä ruutua**, niin sen väri siirtyy alas laskeutuvaan tahkoon."},"step3":{"text":"Ruutu, jolta kuutio lähti, on nyt tyhjä — värit todella vaihtuvat. **Napsauta oikeanpuoleista sinistä ruutua**, niin toinenkin tahko muuttuu siniseksi."},"step4":{"text":"Myös **nuolinäppäimet** vierittävät kuutiota. Paina **→** kerran, niin poimit kolmannen sinisen ruudun.","textTouch":"Jokainen naapuriruutu on yhden napautuksen päässä. **Napauta seuraavaa sinistä ruutua oikealla**, niin poimit kolmannen sinisen ruudun."},"step5":{"text":"Kolme tahkoa sinisenä, kolme jäljellä — tämä lauta ratkeaa kaikkiaan kuudella vierityksellä, ja tilarivi laskee ne. **Kumoa** ottaa yhden takaisin, jos menet yli."}},"dominosa":{"step1":{"text":"Tähän aseteltiin kolme dominoa — 0-0, 0-1 ja 1-1 — ja ne otettiin pois, mutta numerot jäivät. Jaa ruudukko pareiksi ja pane jokainen domino takaisin täsmälleen kerran."},"step2":{"text":"Samaa dominoa ei saa käyttää kahdesti. Jos tämä **0** olisi pari allaan olevan **1**:n kanssa, molemmista reunasarakkeista tulisi 0-1, joten **napsauta hiiren oikealla** niiden välistä rajaa ja merkitse, etteivät ne ole pari."},"step3":{"text":"Ainoat kaksi toisiaan koskettavaa **0**:aa ovat vasemmassa yläkulmassa, joten sinne 0-0 kuuluu. **Napsauta niiden välistä rajaa**, niin asetat sen."},"step4":{"text":"Samoin ainoat toisiaan koskettavat **1**:t ovat vasemmalla alhaalla. Napsauta niiden välistä rajaa, niin saat 1-1:n."},"step5":{"text":"Jäljelle jää oikeanpuoleinen sarake 0-1:lle. Napsauta sen kahden numeron välistä rajaa, niin pulma on valmis."},"step6":{"text":"Jokainen domino käytetty kerran. Napsauta dominoa uudestaan, niin nostat sen pois; kahdesti esiintyvä piirtyy punaisena, ja **Kumoa** peruu siirtojasi."}},"fifteen":{"step1":{"text":"Liu\'uta numerolaattoja tyhjään tilaan, kunnes ne ovat järjestyksessä **1–8** ja aukko on oikeassa alakulmassa. Tämä pikkulauta on kahden siirron päässä valmiista."},"step2":{"text":"Mikä tahansa laatta samalla rivillä tai samassa sarakkeessa aukon kanssa voi liukua. Napsauta **5**:ttä, niin työnnät sen ylös aukkoon."},"step3":{"text":"Vielä yksi. Napsauta **8**:aa, niin rivi on valmis."},"step4":{"text":"Ratkaistu! **Kumoa** ja **Tee uudelleen** liikkuvat siirroissasi taakse- ja eteenpäin, ja taukovalikon **Uusi** tuo uuden pulman. Myös nuolinäppäimillä voi liu\'uttaa laatan aukkoon nuolen suuntaan.","textTouch":"Ratkaistu! **Kumoa** ja **Tee uudelleen** liikkuvat siirroissasi taakse- ja eteenpäin, ja taukovalikon **Uusi** tuo uuden pulman. Koko rivi tai sarake liukuu kerralla, joten tähtää kauimmaiseen laattaan."}},"filling":{"step1":{"text":"Kirjoita jokaiseen tyhjään ruutuun numero niin, että jokainen yhtenäinen samojen numeroiden lohko kattaa täsmälleen niin monta ruutua kuin numero sanoo."},"step2":{"text":"Keskisarakkeen alalaidan **3** voi kasvaa vain ylöspäin, joten sen lohko on koko sarake. **Vedä** sarakkeen ylimmästä ruudusta keskimmäiseen ja paina sitten **3**.","textTouch":"Keskisarakkeen alalaidan **3** voi kasvaa vain ylöspäin. **Vedä** sarakkeen ylimmästä ruudusta keskimmäiseen ja napauta sitten näppäimistä **3**."},"step3":{"text":"Vasemman sarakkeen **2** tarvitsee yhden kumppanin, ja sen yläpuolinen ruutu on ainoa vapaa. Napsauta sitä ruutua ja paina **2**.","textTouch":"Vasemman sarakkeen **2** tarvitsee yhden kumppanin, ja sen yläpuolinen ruutu on ainoa vapaa. Napauta sitä ruutua ja napauta sitten laudan alta **2**."},"step4":{"text":"Yksi ruutu jäljellä. Napsauta sitä ja paina **1**, niin näet miltä väärä numero näyttää.","textTouch":"Yksi ruutu jäljellä. Napauta sitä ja napauta laudan alta **1**, niin näet miltä väärä numero näyttää."},"step5":{"text":"Punainen tarkoittaa mahdotonta: nuo kaksi **1**:tä koskettavat toisiaan, jolloin syntyisi kahden lohko, ja ylhäällä oleva **2** jää muurin taakse. Ruutu on yhä valittuna, joten tyhjennä se painamalla **Backspace**.","textTouch":"Punainen tarkoittaa mahdotonta: nuo kaksi **1**:tä koskettavat toisiaan, jolloin syntyisi kahden lohko, ja ylhäällä oleva **2** jää muurin taakse. Ruutu on yhä valittuna, joten tyhjennä se laudan alta **⌫**:llä."},"step6":{"text":"Tyhjä ruutu pariutuukin yläpuolisen **2**:n kanssa. Napsauta sitä ja paina **2**, niin ruudukko on valmis.","textTouch":"Tyhjä ruutu pariutuukin yläpuolisen **2**:n kanssa. Napauta sitä ja napauta laudan alta **2**, niin ruudukko on valmis."},"step7":{"text":"Täynnä! Paksut viivat rajaavat jokaisen valmiin lohkon; **napsautus hiiren oikealla** lisää ruutuja valintaan yksi kerrallaan, ja **Kumoa** peruu täytön."}},"flip":{"step1":{"text":"Sytytä kaikki yhdeksän ruutua. Ruudun painaminen kääntää sen **ja** sen ympärillä olevat ruudut, joten palavat ruudut voivat sammua taas."},"step2":{"text":"Ruudun sisällä oleva pikkukuva näyttää, mitä se kääntää: umpinainen laatikko on ruutu itse, ääriviivat ovat sen naapurit."},"step3":{"text":"Nyt sytytetään. Paina **vasemman yläkulman** ruutua, sitä pimeää."},"step4":{"text":"Kulma palaa, mutta sen kaksi naapuria pimenivät. Paina seuraavaksi **keskimmäistä** ruutua."},"step5":{"text":"Enää oikea alakulma on pimeänä. Paina **oikean alakulman** ruutua, niin kaikki palaa."},"step6":{"text":"Kaikki palaa! **Kumoa** peruu painalluksen, ja voit ohjata kohdistinta nuolinäppäimillä ja painaa Enteriä napsautuksen sijaan.","textTouch":"Kaikki palaa! **Kumoa** peruu painalluksen, ja saman ruudun painaminen kahdesti kumoutuu aina itsestään, joten järjestyksellä ei ole väliä."}},"flood":{"step1":{"text":"Hallitset vasemman yläkulman ruutua ja kaikkea siihen liittyvää samanväristä aluetta. Jokainen siirto maalaa tämän laikun uudelleen, ja siihen koskettavat uudenväriset ruudut liittyvät mukaan. Tee koko ruudukosta yksivärinen enintään **neljällä siirrolla**."},"step2":{"text":"Laikkusi on toistaiseksi vain tuo yksi sininen kulma. Napsauta sen vieressä olevaa **punaista** ruutua: laikku muuttuu punaiseksi ja jokainen sen koskettama punainen ruutu tulee mukaan."},"step3":{"text":"Napsauta nyt **sinistä** ruutua laikkusi reunalla. Hyvin valittu väri voi levitä ketjuna pitkälle ruudukon poikki yhdellä siirrolla."},"step4":{"text":"Laikun ulkopuolelle jää enää **vihreää**. Yksi napsautus lisää pyyhkäisee lopun ruudukosta mukaan."},"step5":{"text":"Kolme siirtoa neljästä — tilarivi pitää lukua. Jos siirrot loppuvat ennen kuin ruudukko on yksivärinen, hävisit kierroksen. Jumissa? **Vihje** pelaa puolestasi yhden hyvän värin, ja **Ratkaise** viimeistelee ruudukon automaattisesti."}},"galaxies":{"step1":{"text":"Kaksi pistettä, siis kaksi galaksia. Piirrä seiniä ruudukon viivoja pitkin niin, että jokainen piste päätyy oman alueensa keskipisteeksi: käännä aluetta 180° sen pisteen ympäri, ja sen on osuttava täsmälleen itsensä päälle."},"step2":{"text":"Vasen piste on kahden ruudun välisellä viivalla, joten sen galaksin on oltava kaksi vasemmanpuoleista saraketta. **Napsauta** ruudukon viivaa heti niiden oikealla puolella, **ylimmällä rivillä**."},"step3":{"text":"Pisteet toimivat myös muistilappuna. **Vedä** oikeanpuoleisesta pisteestä **oikeaan yläkulman ruutuun**, niin jätät sinne nuolen, joka merkitsee ruudun osaksi sen galaksia."},"step4":{"text":"Takaisin seinään: **napsauta** samaa ruudukon viivaa yhtä riviä alempana, **keskirivillä**."},"step5":{"text":"Yksi pätkä jäljellä, **alimmalla rivillä**. **Napsauta** sitä, niin molemmat galaksit sulkeutuvat."},"step6":{"text":"Molemmat alueet on sävytetty, eli ne ovat oikein. **Ratkaise** piirtää koko vastauksen, ja seinän napsauttaminen pyyhkii sen taas pois."}},"guess":{"step1":{"text":"Kysymysmerkkien takana on kaksi nappulaa kolmesta väristä jossain järjestyksessä. Arvaa rivi, katso, mitä merkkejä se saa, ja rajaa vaihtoehtoja."},"step2":{"text":"**Vedä** ylin väri lokerikosta ja pudota se nuolella merkityn rivin **vasempaan reikään**."},"step3":{"text":"Voit myös poimia värin ensin ja napsauttaa sillä reikiä. Napsauta lokerikon **toista väriä**."},"step4":{"text":"Napsauta nyt **oikeanpuoleista reikää**, niin väri putoaa siihen."},"step5":{"text":"Rivi on täynnä, joten sen oikealla puolella oleva **katkoviivalaatikko** syttyy. Napsauta sitä, niin arvauksesi arvioidaan."},"step6":{"text":"Kaksi **onttoa** merkkiä tarkoittaa, että molemmat värit ovat vastauksessa, mutta kumpikaan ei ole oikealla paikalla — umpinainen merkki tarkoittaisi oikeaa väriä oikealla paikalla. Vaihda ne keskenään ja tarkista uudestaan."},"step7":{"text":"Ratkaistu. **Ratkaise** luovuttaa ja näyttää vastauksen, ja **L**-näppäin merkitsee nappulat kirjaimin, jos värejä on vaikea erottaa.","textTouch":"Ratkaistu. **Ratkaise** luovuttaa ja näyttää vastauksen, ja Kumoa-painikkeen vieressä oleva **Lukitse** pitää varman nappulan paikallaan seuraavaa arvausta varten."}},"inertia":{"step1":{"text":"Sinä olet vasemman yläkulman pallo, ja kerättävänä on **kolme jalokiveä**. Kun pallo lähtee vierimään, se pysähtyy vasta seinään tai pysäyttimeen — ja miina tappaa sen."},"step2":{"text":"Napsauta jotain ruutua pallon **oikealla puolella**. Pallo vierii sinne päin, kunnes laudan reuna pysäyttää sen, ja korjaa matkalta jalokiven."},"step3":{"text":"Napsauta nyt pallon **alapuolelle**. Se poimii seuraavan jalokiven, ja kahden ruudun päässä oleva rikkonainen rengas — pysäytin — pysäyttää sen."},"step4":{"text":"Varo: piikikäs otus suoraan pallon alapuolella on **miina**. Sen päälle vieriminen päättää pelin, ja vain Kumoa pelastaa siitä."},"step5":{"text":"Mene sen sijaan **vinottain**: napsauta ruutua kaksi alas ja kaksi vasemmalle, niin pallo liukuu miinan ohi viimeiselle jalokivelle."},"step6":{"text":"Kaikki kolme jalokiveä — valmista. **Kumoa** kelaa väärin menneen vierityksen takaisin; nuolinäppäimet vierittävät suoraan ja Home, Page Up, End ja Page Down vinottain.","textTouch":"Kaikki kolme jalokiveä — valmista. **Kumoa** kelaa väärin menneen vierityksen takaisin, ja ruudukon ulkopuolelle napauttaminen toimii sekin, mikä auttaa kun pallo on reunaa vasten."}},"keen":{"step1":{"text":"Täytä 1, 2 ja 3 niin, että kukin esiintyy kerran joka rivillä ja sarakkeessa ja että paksusti rajatun alueen numerot toteuttavat sen laskuvihjeen."},"step2":{"text":"**2×**-alueen tulo on 2, joten sen numerot ovat 1, 1 ja 2. Alueessa numero saa toistua, mutta ei rivillä tai sarakkeessa, joten 2 kuuluu kulmaan: napsauta sitä ruutua ja kirjoita **2**.","textTouch":"**2×**-alueen tulo on 2, joten sen numerot ovat 1, 1 ja 2. Kakkonen kuuluu kulmaan: napauta sitä ruutua ja napauta näppäimistä **2**."},"step3":{"text":"Alueen kaksi muuta ruutua ovat ykkösiä. Napsauta ruutua **2:n oikealla puolella** ja kirjoita **1**.","textTouch":"Alueen kaksi muuta ruutua ovat ykkösiä. Napauta ruutua **2:n oikealla puolella** ja napauta sitten laudan alta **1**."},"step4":{"text":"Ylärivillä on jo 2 ja 1, joten sen viimeisen ruudun on oltava 3. Napsauta **oikeaa yläkulman ruutua** ja kirjoita **3**.","textTouch":"Ylärivillä on jo 2 ja 1, joten sen viimeisen ruudun on oltava 3. Napauta **oikeaa yläkulman ruutua** ja napauta sitten laudan alta **3**."},"step5":{"text":"Pelkkä arvausko? **Napsauta hiiren oikealla** keskimmäistä ruutua ja kirjoita **3**, niin numero jää kynämerkinnäksi eikä vastaukseksi.","textTouch":"Pelkkä arvausko? **Paina pitkään** keskimmäistä ruutua ja napauta **3**, niin numero jää kynämerkinnäksi eikä vastaukseksi. **✎**-näppäin tekee saman napauttamallesi ruudulle."},"step6":{"text":"Päättele loput samalla tavalla; rivillään tai sarakkeessaan toistuva numero muuttuu punaiseksi, samoin täysi alue, joka ei täsmää vihjeeseensä. Taukovalikossa **Merkinnät** merkitsee kaikki vaihtoehdot puolestasi, ja **Ratkaise** paljastaa vastauksen."}},"lightup":{"step1":{"text":"Jokaisen valkoisen ruudun on lopulta oltava valaistu. Lamppu valaisee oman rivinsä ja sarakkeensa, kunnes musta ruutu katkaisee säteen, eikä yksikään lamppu saa seistä toisen valossa."},"step2":{"text":"Luku kertoo, montako lamppua koskettaa mustaa ruutua. Tällä **2**:lla on vain kaksi valkoista naapuria, joten molemmissa on lamppu: napsauta sitä, joka on sen **oikealla puolella**."},"step3":{"text":"Huomaa keltainen hohde, joka leviää sädettä pitkin. Napsauta nyt ruutua heti **2:n alapuolella**, niin saat sen toisen lampun."},"step4":{"text":"**0** ei kosketa yhtäkään lamppua. **Napsauta hiiren oikealla** sen yläpuolista ruutua, niin merkitset siihen ristin: se vain muistuttaa, ettei sinne mahdu lamppua."},"step5":{"text":"**1** haluaa tasan yhden lampun. Sen alapuolinen ruutu on jo valaistu, joten siinä oleva lamppu olisi säteessä — napsauta sen sijaan ruutua **1:n vasemmalla puolella**."},"step6":{"text":"Ylärivillä on yhä kaksi pimeää ruutua, ja toisen niistä olet jo rastinut. Napsauta **toista**."},"step7":{"text":"Jokainen ruutu valaistu, jokainen luku tyytyväinen. **Kumoa** ottaa lampun takaisin, ja nuolinäppäimet yhdessä Enterin ja välilyönnin kanssa asettavat lamput ja ristit ilman hiirtä.","textTouch":"Jokainen ruutu valaistu, jokainen luku tyytyväinen. **Kumoa** ottaa lampun takaisin, ja pitkä painallus rastii pois ruudun, jonka olet sulkenut pois."}},"loopy":{"step1":{"text":"Piirrä **yksi** suljettu silmukka pisteiden välisiä himmeitä viivoja pitkin. Jokainen luku kertoo, montako oman ruutunsa neljästä sivusta silmukka käyttää."},"step2":{"text":"Keskimmäisessä ruudussa on **4**, joten kaikki sen neljä sivua kuuluvat silmukkaan. **Napsauta** sen yläsivua, niin piirrät ensimmäisen viivan."},"step3":{"text":"Sitten sen **vasen sivu**. Viivan napsauttaminen uudestaan pyyhkii sen pois."},"step4":{"text":"Jokaisessa pisteessä on kaksi viivaa tai ei yhtään, ja piste jossa nuo kaksi kohtaavat on täynnä. **Napsauta hiiren oikealla** siitä ylös lähtevää viivaa, niin rastit sen käyttökelvottomaksi."},"step5":{"text":"Kaksi sivua jäljellä. **Napsauta** keskimmäisen ruudun alasivua."},"step6":{"text":"Ja **oikea sivu** sulkee sen. Yksi silmukka, ei irrallisia päitä, ja neljä **0**:aa pysyy siitä erossa."},"step7":{"text":"Ratkaistu. **Kumoa** peruu viivojasi, ja taukovalikon **Tyyppi** vaihtaa neliöt kolmioihin, kuusikulmioihin ja oudompiin laatoituksiin."}},"magnets":{"step1":{"text":"Jokainen domino on joko magneetti, jolla on **+**-puolisko ja **−**-puolisko, tai tyhjä. Luvut laskevat jokaisen linjan **+**-navat (ylhäällä ja vasemmalla) ja **−**-navat (alhaalla ja oikealla), eivätkä samanlaiset navat saa koskaan koskettaa toisiaan."},"step2":{"text":"Alarivi haluaa kolme **−**-napaa, ja siihen ulottuu vain kolme dominoa, joten kunkin on annettava yksi. **Napsauta hiiren vasemmalla** pystydominon yläpuoliskoa, niin siitä tulee **+** ja sen **−** lähtee alakertaan."},"step3":{"text":"Niinpä oikean alakulman leveä domino on sekin magneetti, ja viimeisen sarakkeen yläpuolinen **0** kieltää **+**:n siellä. **Napsauta hiiren vasemmalla** sen vasenta puoliskoa, niin **+** tulee sille puolelle."},"step4":{"text":"Neljännellä sarakkeella on nyt yksi **+** eikä se halua yhtään **−**:ää, joten yläpuolinen domino ei voi olla kumpaakaan. **Napsauta hiiren oikealla** sitä, niin merkitset sen tyhjäksi."},"step5":{"text":"Ylärivi tarvitsee yhä yhden **+**:n ja yhden **−**:n vasemmalla olevalta leveältä dominolta. Sen oikea puolisko koskettaa **+**:aa, eivätkä samanlaiset navat saa koskettaa — joten **napsauta hiiren vasemmalla** sen vasenta puoliskoa."},"step6":{"text":"Yksi domino jäljellä. Ensimmäinen sarake on käyttänyt **+**:nsa ylhäällä, joten tässä **+** kuuluu oikealle: **napsauta hiiren vasemmalla** oikeaa puoliskoa, niin homma on valmis."},"step7":{"text":"Ratkaistu! Saman puoliskon napsauttaminen uudestaan kääntää magneetin toisin päin, toinen napsautus hiiren oikealla jättää kysymysmerkit merkiksi ”magneetti, mutta kummin päin?”, ja **Kumoa** peruu."}},"map":{"step1":{"text":"Väritä jokainen alue niin, ettei kahdella rajapätkän jakavalla alueella ole samaa väriä. Neljä väriä riittää aina, ja täällä kolme aluetta on yhä tyhjänä."},"step2":{"text":"Poimi ensin väri: **napsauta** **sinistä värilaikkua**, joka on toisena kartan alla olevassa rivissä."},"step3":{"text":"Kun väri on kädessä, **napsautus hiiren oikealla** tyhjään alueeseen jättää siitä pisteen — muistiinpanon siitä, että alue *voisi* olla sen värinen. Kokeile sitä oikean reunan korkeaan alueeseen."},"step4":{"text":"Se on enemmän kuin ehkä: alue rajautuu jo punaiseen, vihreään ja keltaiseen, joten jäljelle jää vain sininen. **Napsauta** sitä, niin maalaat sen."},"step5":{"text":"Voit myös **vetää** värin alueelta toiselle. Ylälaidan iso alue koskettaa nyt punaista, vihreää ja sinistä, joten **vedä** siihen keltainen alhaalla olevalta pieneltä alueelta."},"step6":{"text":"Yksi tyhjä jäljellä, **vasemmassa alakulmassa**: se rajautuu vihreään, siniseen ja tuohon uuteen keltaiseen, joten sen on oltava punainen. **Vedä** siihen punainen oikean yläkulman alueelta."},"step7":{"text":"Valmista — törmäys olisi näyttänyt punaisen **!**-merkin alueiden välisellä rajalla. **Kumoa** peruu, ja nuolinäppäimet yhdessä **1**–**4**:n kanssa värittävät ilman hiirtä.","textTouch":"Valmista — törmäys olisi näyttänyt punaisen **!**-merkin alueiden välisellä rajalla. **Kumoa** peruu, ja rivin lopussa oleva pyyhekumi tyhjentää alueen, jonka suhteen muutit mielesi."}},"mines":{"step1":{"text":"Jokainen luku laskee miinat kahdeksassa sitä koskettavassa ruudussa. Peitetyn lohkon alle kätkeytyy kaksi miinaa; paljasta kaikki muu astumatta niiden päälle."},"step2":{"text":"Tämä **1** koskettaa vain yhtä peitettyä ruutua, joten siinä on miina. **Napsauta hiiren oikealla** sitä, niin asetat lipun."},"step3":{"text":"Sen alapuolisella **1**:llä on nyt ainoa miinansa liputettuna, joten loput naapurit ovat turvallisia. **Napsauta hiiren vasemmalla sitä 1:tä**, niin avaat ne kerralla."},"step4":{"text":"Lohkon yläpuolinen **2** laskee jo yhden lipun, ja peitettyjä ruutuja on jäljellä yksi. **Napsauta hiiren oikealla** sitä ruutua."},"step5":{"text":"Molemmat miinat on liputettu, joten viimeisen peitetyn ruudun on oltava turvallinen. **Napsauta hiiren vasemmalla** sitä, niin ruudukko on valmis."},"step6":{"text":"Tyhjennetty! Toinen napsautus hiiren oikealla poistaa lipun, ja **Kumoa** pelastaa, jos joskus astut miinaan."}},"net":{"step1":{"text":"Jokaisella laatalla on pätkä johtoa, ja koko verkko on pyöräytetty umpimähkään. Käännä laattoja, kunnes kaikki yhdeksän riippuvat keskellä merkitystä laatasta: **siniset** johdot ovat jo jännitteisiä, harmaat eivät."},"step2":{"text":"Vasemman alakulman laatta osoittaa johtonsa suoraan seinään. **Napsauta hiiren vasemmalla** sitä, niin se kääntyy neljänneskierroksen vastapäivään ja johto yltää oikealla olevaan naapuriin."},"step3":{"text":"**Napsautus hiiren oikealla** kääntää laattaa toiseen suuntaan. Käännä oikean alakulman laattaa kerran myötäpäivään, niin sen johto kääntyy vasemmalle."},"step4":{"text":"Keskilaatalla on johdot kaikilla neljällä sivulla, joten se ei voi olla väärin. **Napsauta sitä hiiren keskipainikkeella** tai kytke Kumoa-painikkeen vieressä oleva **riippulukko** päälle ja napsauta sitä, niin se lukittuu: lukittu laatta on sävytetty eikä suostu kääntymään.","textTouch":"Keskilaatalla on johdot kaikilla neljällä sivulla, joten se ei voi olla väärin. Kytke Kumoa-painikkeen vieressä oleva **riippulukko** päälle ja napauta laattaa, niin se lukittuu: lukittu laatta on sävytetty eikä suostu kääntymään."},"step5":{"text":"Yksi laatta yli. Kun **riippulukko** on pois päältä, **napsauta hiiren vasemmalla** oikeaa yläkulmaa, niin sen johto kääntyy vasemmalle ja koko verkko syttyy.","textTouch":"Yksi laatta yli. Kun **riippulukko** on pois päältä, napauta oikeaa yläkulmaa, niin sen johto kääntyy vasemmalle ja koko verkko syttyy."},"step6":{"text":"Kaikki yhdeksän laattaa ovat jännitteisiä. **Kumoa** peruu käännöksiäsi; näppäimistöllä nuolinäppäimet siirtävät kohdistinta ja **A**, **D** ja **F** kääntävät sen alla olevaa laattaa.","textTouch":"Kaikki yhdeksän laattaa ovat jännitteisiä. **Kumoa** peruu käännöksiäsi, varman laatan lukitseminen suojaa sen harhanapautukselta, ja **Sekoita** pyöräyttää kaikki lukitsemattomat laatat uudestaan."}},"netslide":{"step1":{"text":"Jokaisen johtopätkän on lopulta liityttävä virtalähteeseen. Siniset johdot ovat jännitteisiä, harmaat kynäjäljet eivät."},"step2":{"text":"Lähde on keskilaatalla. Se laatta ei liiku koskaan, joten keskirivillä ja -sarakkeella ei ole nuolia — kaikki muu liukuu ympäri."},"step3":{"text":"Napsauta nuolta **alimman rivin vasemmalla puolella**, niin rivi liukuu askeleen vasemmalle; pudonnut johto ilmestyy takaisin oikealta."},"step4":{"text":"Alarivi liittyy nyt yhteen, mutta se on yhä harmaa: mikään ei vielä yhdistä sitä ylöspäin lähteeseen."},"step5":{"text":"**Napsauta hiiren oikealla** nuolta **kolmannen sarakkeen yläpuolella**. Napsautus hiiren oikealla kääntää nuolen suunnan, joten sarake liukuu alas ja viimeiset johdot syttyvät."},"step6":{"text":"Kaikki jännitteisiä! **Ratkaise** näyttää vastauksen, jos jäät jumiin, ja **Tyyppi**-valikossa on kiertyviä ruudukkoja, joissa johdot kulkevat reunan yli toiselle puolelle."}},"pattern":{"step1":{"text":"Rivin ja sarakkeen vierellä olevat luvut ovat sen mustien jaksojen pituudet järjestyksessä. Päättele, mitkä ruudut ovat mustia, ja täytä ne."},"step2":{"text":"**Kolmannessa sarakkeessa** lukee 1 2: yksi musta, väli, sitten kaksi mustaa. Neljään ruutuun se sopii vain yhdellä tavalla, pari alimmaisena. **Vedä** niiden yli alaspäin."},"step3":{"text":"Näin parin yläpuolisesta ruudusta tulee väli. **Napsauta hiiren oikealla** sitä, niin siihen tulee piste, joka merkitsee varmasti valkoisen ruudun."},"step4":{"text":"Ja sarakkeen ylin ruutu on vihjeen yksinäinen musta. **Napsauta** sitä."},"step5":{"text":"**Viimeisessä sarakkeessa** lukee 3. Missä tahansa kolmen jakso neljässä ruudussa onkin, se peittää aina kaksi keskimmäistä, joten **vedä** niiden yli alaspäin."},"step6":{"text":"Vihje harmaantuu, kun sen rivi tai sarake on valmis. Jatka samaan malliin tai anna **Ratkaise**-painikkeen viimeistellä tämä; napsautus hiiren keskipainikkeella palauttaa ruudun tuntemattomaksi."}},"pearl":{"step1":{"text":"Piirrä yksi suljettu silmukka ruudun keskeltä ruudun keskelle. Sen ei tarvitse käydä joka ruudussa, mutta sen on kuljettava jokaisen helmen kautta."},"step2":{"text":"**Valkoinen helmi** tarkoittaa, että silmukka kulkee suoraan sen läpi. Ylärivillä ainoa suora on sivusuunta, joten **vedä** helmen vasemmalta puolelta ruutuun sen oikealla puolella."},"step3":{"text":"Helmellä on nyt molemmat pätkänsä, joten siitä ei lähde enää mitään muuta. **Napsauta hiiren oikealla** sen alapuolista särmää, niin rastit sen sivun pois."},"step4":{"text":"**Musta helmi** kääntyy, ja silmukka kulkee sitten suoraan sen molemmin puolin olevien ruutujen läpi. **Vasemmassa reunassa** oleva ei voi kääntyä alas — se vaatisi suoran viivan vasemman alakulman läpi — joten **napsauta** sen oikeanpuoleista särmää."},"step5":{"text":"Niinpä sen viereinen ruutu jatkaa suoraan — ja niin jatkaa sen takana oleva valkoinen helmikin. **Vedä** siitä ruudusta neljänteen sarakkeeseen asti."},"step6":{"text":"Jatka päättelyä helmistä ulospäin; helmi saa punaisen kehän heti kun sen sääntö rikkoutuu. **Ratkaise** piirtää koko silmukan, jos haluat nähdä sen."}},"pegs":{"step1":{"text":"Nappula hyppää naapurinsa yli takana olevaan tyhjään reikään, ja ylihypätty nappula poistetaan. Tyhjennä tämä pikkulauta **yhteen nappulaan**: kolme hyppyä."},"step2":{"text":"**Vedä** varren huipulla oleva nappula alas naapurinsa yli pohjalla olevaan reikään."},"step3":{"text":"Napsauttaminen toimii sekin. Napsauta **oikeanpuoleista nappulaa**, niin poimit sen, ja napsauta sitten reikää kaksi ruutua sen vasemmalla puolella."},"step4":{"text":"Viimeinen hyppy: vedä **vasemman alakulman** nappula naapurinsa yli keskelle."},"step5":{"text":"Yksi nappula jäljellä — ratkaistu. **Kumoa** peruu hypyn, kun ajat itsesi umpikujaan, ja nuolinäppäimetkin toimivat: Enter poimii nappulan ja nuoli työntää sitä.","textTouch":"Yksi nappula jäljellä — ratkaistu. **Kumoa** peruu hypyn aina kun ajat itsesi umpikujaan, niin pitkälle taaksepäin kuin haluat."}},"range":{"step1":{"text":"Väritä ruutuja mustiksi niin, että jokainen luku vastaa tarkalleen niiden valkoisten ruutujen määrää, jotka sen oma ruutu näkee: itsensä sekä jokaisen ruudun linjassa ylös, alas, vasemmalle ja oikealle, kunnes musta ruutu tai reuna pysäyttää katseen."},"step2":{"text":"**6** näkee juuri nyt kuusi ruutua — koko rivinsä sekä kaksi allaan. Siispä mikään sillä rivillä tai siinä sarakkeessa ei saa mustua."},"step3":{"text":"**2** saa nähdä vain itsensä ja yhden ruudun lisää, ja sen yläpuolisen ruudun on pysyttävä valkoisena 6:n takia. **Napsauta** siis sen vasemmalla puolella olevaa ruutua, niin se mustuu."},"step4":{"text":"Näin oikean yläkulman ruutu jää ainoaksi valkoiseksi ruuduksi, jonka 2 vielä näkee. **Napsauta hiiren oikealla** sitä, niin siihen tulee piste — näin merkitset ruudun, jonka tiedät pysyvän valkoisena."},"step5":{"text":"**3** näkee jo itsensä ja kaksi ruutua vasemmallaan, joten sen oikealla puolella olevan ruudun on oltava musta. **Napsauta** sitä."},"step6":{"text":"Valmista kahdella mustalla ruudulla — pisteet ovat pelkkiä muistiinpanoja. **H** täyttää yhden ruudun, joka seuraa muista, ja **Ratkaise** täplittää koko ruudukon.","textTouch":"Valmista kahdella mustalla ruudulla — pisteet ovat pelkkiä muistiinpanoja. **Ratkaise** täplittää koko ruudukon, kun haluat mieluummin nähdä vastauksen."}},"rect":{"step1":{"text":"Paloittele tämä ruudukko suorakulmioihin niin, että jokaisessa suorakulmiossa on tasan yksi luku ja se luku kertoo, montako ruutua suorakulmio peittää."},"step2":{"text":"Suorakulmiossa saa olla vain yksi luku, ja **3** on suoraan **4**:n alla — joten 4:n on otettava koko ylärivi. **Vedä** 4:stä rivin oikeaan päähän."},"step3":{"text":"Yhden ruudukkoviivan napsauttaminen lisää tai poistaa vain sen yhden särmän. **Napsauta** viivaa **3**:n oikealla puolella."},"step4":{"text":"9 voi olla vain 3×3-lohko, ja sille on jäljellä yksi paikka. **Vedä** valaistun lohkon yli sen vasemmasta yläruudusta oikeaan alakulmaan: samalla 3 jää aitaukseensa."},"step5":{"text":"Jokainen ruutu on oikean kokoisessa suorakulmiossa. **Vedä hiiren oikealla**, niin pyyhit alueen sisäiset viivat mutta jätät ääriviivat, ja **Kumoa** peruu vedon."}},"samegame":{"step1":{"text":"Tyhjennä lauta poistamalla vähintään kahden toisiinsa koskettavan samanvärisen ruudun ryhmiä. _n_ ruudun ryhmä antaa (_n_ − 2)² pistettä, joten isot ryhmät ratkaisevat."},"step2":{"text":"Napsauta mitä tahansa ylälaidan neljästä **punaisesta** ruudusta. Ensimmäinen napsautus vain valitsee ryhmän: se vaalenee ja saa paksun ääriviivan."},"step3":{"text":"Napsauta valittua ryhmää uudestaan, niin se nousee laudalta ja tuo neljä pistettä. Aukon yläpuoliset ruudut putoavat siihen, ja tyhjä sarake vetää naapurinsa vierelleen."},"step4":{"text":"Tämä **vihreä** ruutu on yksin. Mikään sen vieressä ei ole samanvärinen, joten sitä ei voi valita — sen on odotettava, kunnes lauta siirtää kumppanin sen viereen."},"step5":{"text":"Nyt tässä korostettu **sininen pari**. Napsauta kumpaa tahansa ruutua, niin valitset molemmat."},"step6":{"text":"Muutitko mielesi? **Napsauta hiiren oikealla** valintaa, niin se vapautuu — mitään ei poisteta ennen kuin napsautat toisen kerran."},"step7":{"text":"Siinä koko peli. Jokainen lauta on tyhjennettävissä, joten jatka vain — **Kumoa** kelaa taaksepäin, kun jätät ruudun yksin, eikä Ratkaise-painiketta ole pelastamassa."}},"signpost":{"step1":{"text":"Jokaisessa ruudussa on nuoli. Liitä kaikki kuusi yhdeksi ketjuksi, joka on numeroitu **1–6** ja jossa jokaista ruutua seuraa ruutu jossakin sen oman nuolen suunnassa."},"step2":{"text":"**1** osoittaa itään. **Vedä** siitä oikealla olevaan ruutuun, niin siitä tulee 2."},"step3":{"text":"**3** tarttui perään, kuten peräkkäiset ja oikeaan suuntaan osoittavat luvut aina tekevät. **Vedä** nyt oikean alakulman ruutu sen vasemmalla puolella olevaan ruutuun."},"step4":{"text":"Kummallakaan niistä ei ole vielä numeroa, joten pari on merkitty **a** ja **a+1**. **Napsauta hiiren oikealla** alarivin keskimmäistä ruutua, niin ne irtoavat taas toisistaan."},"step5":{"text":"Oikeat numerot ovat parempia: **vedä** **3** allaan olevaan ruutuun, josta tulee 4."},"step6":{"text":"Viimeinen lenkki: **vedä** tuo 4 sen vasemmalla puolella olevaan ruutuun. Siitä tulee 5, ja 6 sulkee polun itsestään."},"step7":{"text":"Ratkaistu. **Vedä hiiren oikealla**, niin yhdistät toiseen suuntaan, ruudusta sitä edeltävään, ja **Ratkaise** näyttää koko polun."}},"singles":{"step1":{"text":"Mustaa ruutuja, kunnes yksikään luku ei toistu minkään rivin tai sarakkeen valkoisissa ruuduissa. Kahdella mustalla ruudulla ei saa koskaan olla yhteistä särmää, ja valkoisten ruutujen on pysyttävä yhtenä yhtenäisenä alueena."},"step2":{"text":"Tämän rivin kahden **4**:n välissä on yksi ruutu. Sen mustaaminen jättäisi molemmat 4:t valkoisiksi, joten sen on itsensä oltava valkoinen — **napsauta hiiren oikealla** sitä, niin ympyröit sen."},"step3":{"text":"Ympyröity **3** on lopullisesti valkoinen, ja sen sarakkeen ylälaidassa on toinen 3. **Napsauta hiiren vasemmalla** ylintä, niin se mustuu."},"step4":{"text":"Mustat ruudut eivät koskaan kosketa, joten heti sen oikealla puolella oleva **4** pysyy valkoisena. **Napsauta hiiren vasemmalla** viimeisen sarakkeen toista 4:ää."},"step5":{"text":"Sama uudestaan: suoraan uuden mustan ruutusi yläpuolella oleva **2** on valkoinen, ja sen rivillä on toinen 2 aivan vasemmalla. **Napsauta hiiren vasemmalla** sitä."},"step6":{"text":"Yksi jäljellä. Tuon mustan ruudun yläpuolinen **3** on valkoinen, joten sarakkeen alalaidan toisen 3:n on lähdettävä. **Napsauta hiiren vasemmalla** sitä."},"step7":{"text":"Ratkaistu, ja valkoiset ruudut ovat yhä kaikki kiinni toisissaan. Ympyrät ovat pelkkiä muistiinpanoja, ja **Kumoa** kulkee siirtojesi läpi taaksepäin."}},"sixteen":{"step1":{"text":"Järjestä laatat, **1–9**, vasemmalta oikealle luettuna. Reunan nuolet liu\'uttavat koko riviä tai saraketta askeleen, ja mikä putoaa pois, palaa vastakkaiselta puolelta."},"step2":{"text":"Napsauta nuolta **toisen sarakkeen yläpuolella**, niin sarake liukuu askeleen ylös; keskirivi valmistuu."},"step3":{"text":"Nyt alarivin on siirryttävä oikealle. **Napsauta hiiren oikealla** nuolta **alimman rivin vasemmalla puolella**: napsautus hiiren oikealla lähettää linjan vastakkaiseen suuntaan."},"step4":{"text":"Viimeinen: napsauta nuolta **ylimmän rivin vasemmalla puolella**, niin rivi liukuu vasemmalle ja ruudukko on valmis."},"step5":{"text":"Järjestyksessä! Taukovalikon **Tyyppi** tarjoaa isompia ruudukkoja, ja sen **Mukauta…**-kohta voi sekoittaa ruudukon valitulla määrällä siirtoja, jotka saat sitten purkaa."}},"slant":{"step1":{"text":"Piirrä jokaisen ruudun läpi yksi vinoviiva. Ympyröity luku kertoo, montako viivaa koskettaa sen kulmaa, eivätkä viivat saa koskaan sulkea silmukkaa."},"step2":{"text":"Vasemman yläkulman **0** ei halua mitään koskettamaan itseään, joten sen ainoan ruudun on kallistuttava toisin päin. **Napsauta hiiren oikealla** sitä ruutua, niin piirtyy `/`."},"step3":{"text":"**4** tarvitsee viivan kaikista neljästä ympäröivästä ruudusta. **Napsauta hiiren vasemmalla** sitä, joka on sen yläpuolella ja vasemmalla — napsautus hiiren vasemmalla piirtää `\\\\`."},"step4":{"text":"**4**:n yläpuolella ja oikealla olevan ruudun on kallistuttava alas vasemmalle. **Napsauta hiiren oikealla** sitä, niin saat `/`."},"step5":{"text":"Vasemman reunan **1**:llä on jo ainoa viivansa, alapuolisesta ruudusta. Yläpuolisen ruudun on siis kallistuttava poispäin: **napsauta hiiren vasemmalla** sitä, niin saat `\\\\`."},"step6":{"text":"Jatka samalla tavalla. Luku, joka ei enää voi toteutua, muuttuu punaiseksi, samoin jokainen suljettuun silmukkaan jäänyt viiva. Taukovalikon **Ratkaise** täyttää loput."}},"solo":{"step1":{"text":"Jokaisella rivillä, jokaisessa sarakkeessa ja jokaisessa rajatussa **2×2-lohkossa** on oltava 1, 2, 3 ja 4 tasan kerran. Tästä pikkuruudukosta puuttuu kolme ruutua."},"step2":{"text":"Tässä **lohkossa** on jo 2, 3 ja 4, joten sen tyhjä ruutu voi olla vain **1**. Napsauta sitä ruutua ja paina **1**-näppäintä.","textTouch":"Tässä **lohkossa** on jo 2, 3 ja 4, joten sen tyhjä ruutu voi olla vain **1**. Napauta sitä ruutua ja napauta näppäimistä **1**."},"step3":{"text":"Etkö ole varma ruudusta? **Napsauta hiiren oikealla** tätä tyhjää ja paina **2**, niin numero jää kynämerkinnäksi.","textTouch":"Etkö ole varma ruudusta? Napauta tätä tyhjää, lukitse laudan alta **✎** ja napauta **2**, niin numero jää kynämerkinnäksi."},"step4":{"text":"Sen rivillä on jo 3, 4 ja 1, joten muistiinpano osui oikeaan. **Napsauta hiiren vasemmalla** samaa ruutua ja paina **2**, niin kirjoitat vastauksen.","textTouch":"Sen rivillä on jo 3, 4 ja 1, joten muistiinpano osui oikeaan. Ruutu on yhä valittuna, joten napauta **✎** pois päältä ja sitten **2**, niin kirjoitat vastauksen."},"step5":{"text":"Yksi ruutu jäljellä. Sen rivillä on jo 4, 3 ja 1 — napsauta sitä ja paina puuttuvaa numeroa.","textTouch":"Yksi ruutu jäljellä. Sen rivillä on jo 4, 3 ja 1 — napauta sitä ja napauta sitten puuttuvaa numeroa laudan alta."},"step6":{"text":"Ratkaistu! **Kumoa** peruu väärän numeron, ja **M**-näppäin merkitsee kaikki vaihtoehdot jokaiseen tyhjään ruutuun kerralla.","textTouch":"Ratkaistu! **Kumoa** peruu väärän numeron, ja taukovalikon **Merkinnät** merkitsee kaikki vaihtoehdot jokaiseen tyhjään ruutuun kerralla."}},"tents":{"step1":{"text":"Pystytä yksi teltta jokaisen puun viereen — sen ylä-, ala-, vasemmalle tai oikealle puolelle, ei koskaan vinottain. Kaksi telttaa ei saa koskettaa toisiaan, ja luvut kertovat telttojen määrän kullakin rivillä ja sarakkeessa."},"step2":{"text":"Toisen rivin päässä oleva **0** tarkoittaa, ettei rivi saa yhtään telttaa. **Napsauta hiiren oikealla** puun vieressä olevaa ruutua, niin merkitset sen nurmeksi."},"step3":{"text":"Kolmas sarake on sekin tyhjä. **Vedä hiiren oikealla** sen ylimmästä ruudusta kolmanteen riviin, niin nurmetat kaikki kolme kerralla."},"step4":{"text":"Oikean alakulman puu on nurkassa toinen puu vieressään, joten sen ainoa vapaa naapuri on yläpuolella. **Napsauta hiiren vasemmalla** sitä ruutua, niin pystytät teltan."},"step5":{"text":"Teltta täyttää kolmannen rivin, joten vasemman reunan puukaan ei voi leiriytyä sen alle. **Napsauta hiiren vasemmalla** vasenta yläkulman ruutua."},"step6":{"text":"Yhdellä puulla ei vieläkään ole telttaa, ja vain sen vasemmalla puolella oleva ruutu on vapaa. **Napsauta hiiren vasemmalla** sitä, niin leiri on valmis."},"step7":{"text":"Ratkaistu! Teltan tai nurmimerkin napsauttaminen uudestaan poistaa sen, nuolinäppäimet yhdessä Enterin ja välilyönnin kanssa tekevät saman, ja **Kumoa** peruu.","textTouch":"Ratkaistu! Teltan tai nurmimerkin napauttaminen uudestaan poistaa sen, ja **Kumoa** peruu."}},"towers":{"step1":{"text":"Jokaisella rivillä ja jokaisessa sarakkeessa on yksi torni kutakin korkeutta, 1–4. Reunan luku kertoo, montako tornia sieltä **näkyy**: korkeampi torni piilottaa kaikki matalammat takanaan."},"step2":{"text":"Ylärivin oikeassa reunassa oleva **1** tarkoittaa, että siltä puolelta näkyy vain yksi torni, joten lähimmän on oltava korkein. Napsauta sitä ruutua ja paina **4**.","textTouch":"Ylärivin oikeassa reunassa oleva **1** tarkoittaa, että siltä puolelta näkyy vain yksi torni, joten lähimmän on oltava korkein. Napauta sitä ruutua ja napauta näppäimistä **4**."},"step3":{"text":"Voit kirjata vaihtoehtoja ylös vastaamisen sijaan. **Napsauta hiiren oikealla** ylärivin vasemman pään tyhjää ruutua ja paina **1**.","textTouch":"Voit kirjata vaihtoehtoja ylös vastaamisen sijaan. Napauta ylärivin vasemman pään tyhjää ruutua, lukitse laudan alta **✎** ja napauta **1**."},"step4":{"text":"Rivin vasemmassa reunassa oleva **4** kertoo, että kaikki neljä tornia näkyvät, joten ne nousevat 1-2-3-4 siitä päästä. **Napsauta hiiren vasemmalla** ruutua ja paina **1**, niin vastaat siihen.","textTouch":"Rivin vasemmassa reunassa oleva **4** kertoo, että kaikki neljä tornia näkyvät, joten ne nousevat 1-2-3-4 siitä päästä. Ruutu on yhä valittuna, joten napauta **✎** pois päältä ja sitten **1**."},"step5":{"text":"Yksi ruutu jäljellä, ja rivin vieressä oleva **1** asettaa taas korkeimman tornin lähimmäksi. Napsauta sitä ja paina **4**.","textTouch":"Yksi ruutu jäljellä, ja rivin vieressä oleva **1** asettaa taas korkeimman tornin lähimmäksi. Napauta sitä ja napauta laudan alta **4**."},"step6":{"text":"Ratkaistu! **Backspace** tyhjentää väärin menneen ruudun, ja taukovalikon **Ratkaise** vie loppuun pulman, joka on voittanut sinut.","textTouch":"Ratkaistu! Laudan alta **⌫** tyhjentää väärin menneen ruudun. Taukovalikon **Merkinnät** merkitsee kaikki vaihtoehdot, ja **Ratkaise** vie loppuun pulman, joka on voittanut sinut."}},"tracks":{"step1":{"text":"Yksi rautatie kulkee vasemman reunan sisääntulosta alareunan uloskäyntiin, ja jokaisessa sen käyttämässä ruudussa on tasan kaksi kiskonpäätä. Luvut kertovat, montako sarakkeen tai rivin ruutua rata läpäisee."},"step2":{"text":"Sisääntulopala nousee jo **vasempaan yläkulman ruutuun**, ja sen ruudun ylä- ja vasen sivu ovat ruudukon reunaa. Sen toisen kiskon on siis mentävä oikealle: **napsauta** heti sen keskikohdan oikealta puolelta."},"step3":{"text":"**Vasemman sarakkeen** luku on **2**, ja sisääntulo käyttää jo molemmat ruudut, joten sen alaosan läpi ei kulje mitään. **Napsauta hiiren oikealla** ruudun keskeltä, niin rastit sen — **veto hiiren oikealla** rastii koko jakson."},"step4":{"text":"**Oikean sarakkeen** luku on **4**, joten rata käy sen jokaisessa ruudussa, ja sen ylin ja alin ruutu voivat kääntyä vain sisäänpäin. **Vedä** oikeasta yläkulman ruudusta aivan alas oikeaan alakulman ruutuun."},"step5":{"text":"**Alarivi** tarvitsee kolme ruutua ja vasen sarake on valmis, joten oikea alakulma on radalla. Se ei voi poistua ruudukosta, joten se kääntyy vasemmalle ja ylös: **napsauta** sen vasenta sivua."},"step6":{"text":"Luvut harmaantuvat, kun niiden linja on oikein, ja punastuvat, kun se ei voi toteutua. Jatka irrallisista päistä tai anna **Ratkaise**-painikkeen viimeistellä rautatie."}},"twiddle":{"step1":{"text":"Palauta luvut järjestykseen, **1–9**. Yksi siirto kiertää neljän laatan neliölohkoa neljänneskierroksen; kolme käännöstä vie tämän laudan maaliin."},"step2":{"text":"Napsauta **vasemman yläkulman neljän laatan** keskeltä. Napsautus hiiren vasemmalla kääntää lohkoa vastapäivään, jolloin 1, 2 ja 3 asettuvat ylös."},"step3":{"text":"**Napsauta hiiren oikealla** **oikean alakulman neljän laatan** keskeltä, niin lohko kääntyykin myötäpäivään."},"step4":{"text":"Viimeistele napsauttamalla hiiren vasemmalla **vasemman alakulman neljän laatan** keskeltä."},"step5":{"text":"Valmista! **Tyyppi**-valikossa on isompia lohkoja ja *suunnattava* tila, jossa jokaisen laatan on myös päädyttävä oikein päin."}},"undead":{"step1":{"text":"Täytä viisi tyhjää ruutua aaveilla, vampyyreillä ja zombeilla — ylälaidan laskuri kertoo, montako kutakin. Jokainen luku kertoo, montako hirviötä kyseistä linjaa pitkin katsoen näkyy, ja peilit taittavat katseesi."},"step2":{"text":"**Ylärivin vasemmalta** sisään katsoessasi et näe mitään; peili taittaa saman linjan ulos ylhäältä, missä **1** näkee yhden hirviön. Vain aave piiloutuu suoraan katsottaessa mutta näkyy peilissä. **Napsauta** sitä ruutua."},"step3":{"text":"Vasemman alakulman **4** siksakkaa peilien kautta kolmen ruudun ohi ja näkee ne kaikki. Vampyyrit katoavat peilistä, joten ainoan vampyyrin on oltava vasemman sarakkeen keskimmäinen ruutu. **Napsauta** sitä."},"step4":{"text":"Napsautus vain selaa hirviöitä eteenpäin. **Paina V** sen sijaan: G, V ja Z pudottavat aaveen, vampyyrin tai zombin suoraan korostettuun ruutuun.","textTouch":"Napautus vain selaa hirviöitä yksi kerrallaan. Napauta sen sijaan näppäimistä **Vampyyri**, niin se hirviö menee suoraan korostettuun ruutuun."},"step5":{"text":"**Keskirivi** on suora, peilitön näkymä ja molemmat **1**:t näkevät yhden hirviön — vampyyrin. Sen kahden naapurin on siis oltava aaveita. **Napsauta** keskimmäistä ruutua."},"step6":{"text":"**Napsautus hiiren oikealla** kirjaa pienen muistiinpanon sen sijaan, että asettaisi mitään. Kokeile sitä rivin oikeanpuoleiseen ruutuun; jokainen napsautus hiiren oikealla lisää seuraavan hirviön."},"step7":{"text":"Kaksi ruutua jäljellä: muistiinpanon ruutu on kolmas aave ja viimeinen on zombi. Luvut harmaantuvat, kun niiden linja on selvä; **Ratkaise** vie sokkelon loppuun, jos katsot mieluummin vierestä."}},"unequal":{"step1":{"text":"Jokainen rivi ja sarake tarvitsee 1:n, 2:n, 3:n ja 4:n kerran kunkin — ja jokaisen kahden ruudun välisen merkin on osoitettava parin **pienempään**."},"step2":{"text":"Tässä merkki osoittaa oikealle, joten **vasen** ruutu on isompi. Tältä riviltä puuttuu vielä 2 ja 3: napsauta vasenta ruutua ja paina **3**.","textTouch":"Tässä merkki osoittaa oikealle, joten **vasen** ruutu on isompi. Tältä riviltä puuttuu vielä 2 ja 3: napauta vasenta ruutua ja napauta näppäimistä **3**."},"step3":{"text":"Ruutu, johon merkki osoittaa, saa pienemmän luvun. Napsauta sitä ja paina **2**.","textTouch":"Ruutu, johon merkki osoittaa, saa pienemmän luvun. Napauta sitä ja napauta sitten laudan alta **2**."},"step4":{"text":"Sen sarakkeessa on nyt 3, joten tämä ruutu voi olla vain 2. **Napsauta hiiren oikealla** sitä ja paina **2**, niin merkintä jää kynällä.","textTouch":"Sen sarakkeessa on nyt 3, joten tämä ruutu voi olla vain 2. Napauta sitä, lukitse laudan alta **✎** ja napauta **2**, niin merkintä jää kynällä."},"step5":{"text":"Muistiinpano ei ole vastaus. **Napsauta hiiren vasemmalla** samaa ruutua ja paina **2**, niin sitoudut siihen.","textTouch":"Muistiinpano ei ole vastaus. Ruutu on yhä valittuna, joten napauta **✎** pois päältä ja sitten **2**, niin sitoudut siihen."},"step6":{"text":"Yksi ruutu jäljellä. Napsauta sitä ja paina **3**, niin neliö on valmis.","textTouch":"Yksi ruutu jäljellä. Napauta sitä ja napauta laudan alta **3**, niin neliö on valmis."},"step7":{"text":"Ratkaistu! **Kumoa** peruu numeron, ja **Ratkaise** täyttää vastauksen, jos pulma voittaa sinut.","textTouch":"Ratkaistu! **Kumoa** peruu numeron, **Merkinnät** ja **Vihje** merkitsevät vaihtoehdot, ja **Ratkaise** täyttää vastauksen, jos pulma voittaa sinut."}},"unruly":{"step1":{"text":"Väritä jokainen ruutu mustaksi tai valkoiseksi. Jokainen rivi ja sarake tarvitsee **kolme kumpaakin**, eikä sama väri saa esiintyä **kolmesti peräkkäin**. Kolme ruutua on yhä auki."},"step2":{"text":"Tällä rivillä on jo kolme valkoista ruutua, joten auki oleva on musta. **Napsauta hiiren vasemmalla** sitä: napsautus hiiren vasemmalla maalaa mustaa."},"step3":{"text":"Tällä rivillä on jo kolme mustaa, joten sen auki oleva ruutu on valkoinen. **Napsauta hiiren oikealla** sitä — napsautus hiiren oikealla kiertää toiseen suuntaan ja maalaa ensin valkoista."},"step4":{"text":"Viimeisen auki olevan ruudun vasemmalla puolella on kaksi mustaa, eikä kolmatta peräkkäin sallita. **Napsauta hiiren oikealla** sitä, niin se maalautuu valkoiseksi ja ruudukko on valmis."},"step5":{"text":"Ratkaistu! Väritetyn ruudun napsauttaminen uudestaan vaihtaa sen toiseen väriin ja sitten takaisin auki olevaksi, ja **Kumoa** peruu siirtojasi."}},"untangle":{"step1":{"text":"Kuusi pistettä on renkaassa, kahdeksan viivan yhdistäminä. Kaksi viivaparia risteää — ne ovat punaisia. Vedä pisteitä, kunnes punaista ei ole jäljellä."},"step2":{"text":"Napsauta ensin **Ruudukko**-painiketta Kumoa-painikkeen vierestä (tai paina **G**). Se kytkee tarttumaruudukon päälle, jolloin pudottamasi piste asettuu johonkin ruudun keskellä olevaan himmeään pisteeseen."},"step3":{"text":"**Vedä** renkaan ylin piste **vasemman yläkulman** tyhjään ruutuun.","textTouch":"**Vedä** renkaan ylin piste laudan **vasemman yläkulman** tyhjään tilaan. Sen ei tarvitse osua mihinkään tarkasti — risteyksen on vain hävittävä."},"step4":{"text":"Yksi risteys jäljellä, oikealla. **Vedä** alin piste tyhjään **oikeaan alakulmaan**.","textTouch":"Yksi risteys jäljellä, oikealla. **Vedä** alin piste tyhjään **oikeaan alakulmaan** — viimeinen punainen viiva katoaa heti kun se on selvä."},"step5":{"text":"Solmu auki. **Ratkaise** levittää minkä tahansa sotkun puolestasi, ja nuolinäppäimet siirtävät kohdistinta pisteestä toiseen, Enterillä poimit pisteen ja pudotat sen.","textTouch":"Solmu auki. Punaiset viivat ovat niitä, jotka yhä risteävät, joten jatka vetämistä kunnes niitä ei ole — tai anna **Ratkaise**-painikkeen levittää sotku."}}}'),Fe={$locale:`fi`,$name:q,$dir:`ltr`,ui:J,touchPhrases:Y,messages:X,status:Z,games:Q,tutorials:$};export{g as A,ee as B,A as C,S as D,w as E,o as F,i as I,oe as L,f as M,u as N,b as O,c as P,ie as R,M as S,E as T,t as V,H as _,Ee as a,I as b,be as c,me as d,fe as f,W as g,se as h,Oe as i,m as j,v as k,ve as l,ce as m,Me as n,we as o,ue as p,Ae as r,Se as s,Pe as t,ge as u,B as v,O as w,P as x,R as y,ne as z};
//# sourceMappingURL=i18n-fi-1FO4r-iO.js.map