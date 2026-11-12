import{t as e}from"./index-DIYwYEVR.js";var t=e({default:()=>n}),n="## Általános irányítás\n\n- Az **Új** friss rejtvényt oszt, az **Elölről** pedig visszaállítja ezt a kezdőállapotra;\n  a **Vissza** és az **Előre** végiglépked a lépéseiden, és még az újrakezdés is\n  visszavonható.\n- A **Megoldás** megmutatja a választ, ha a rejtvénynél van ilyen. Ez is egy lépésnek\n  számít, amelyet vissza tudsz vonni.\n- A legtöbb rejtvényben a jobb gombos kattintás a második művelet – jelölés, zászló vagy\n  fordított irányú forgatás. A középső gombos kattintás, ahol van ilyen, a harmadik.\n- A **Típus** a kész méretek és nehézségi szintek között vált; az **Egyéni…** alatt pedig\n  magad állíthatod be őket.\n- A **Megosztás** olyan kódokat mutat, amelyeket elküldhetsz másoknak, hogy ők is pontosan\n  ezt a rejtvényt játszhassák.\n\n### Billentyűzet (Keyboard)\n\n- **Új játék**: `N` · **Vissza**: `U` vagy `Ctrl+Z` · **Előre**: `R` vagy `Ctrl+Y`\n- **Megoldás**: `Ctrl+S` (ahol van ilyen). **Ez a súgó**: `?`, az `Esc` pedig bezárja. **Szünet**: `Esc`.\n- A legtöbb rejtvényben a nyílbillentyűk kurzort mozgatnak a táblán, az `Enter` ott úgy\n  működik, mint egy kattintás, a `Space` pedig mint egy jobb gombos kattintás.\n- A menükben a nyílbillentyűk kártyáról kártyára, gombról gombra léptetnek, az `Enter`\n  kiválaszt, az `Esc` pedig visszalép.\n- Kontrollerrel is megy: az irányítókereszt mozgat, az `A` kiválaszt vagy kattint, az `X`\n  a jobb gombos kattintás, a `B` visszalép, a `Start` szünetel, az `LB` és az `RB`\n  visszavon és újra megcsinál, az `Y` pedig tippet ad.\n  Azokban a rejtvényekben, ahová számokat írsz, az `RT` a képernyőn lévő gombokhoz visz, és vissza.\n",ee=e({default:()=>te}),te=`## Érintőképernyőn

- **Koppints** a fő művelethez, és **koppints hosszan** a másodikhoz. Ha egy rejtvénynek
  harmadik művelete is van, azt **két ujjal** koppintva éred el.
- Az eszköztár első kerek gombja (egy pötty egy négyzetben) felcseréli a kettőt, így mindig
  egyetlen koppintásra van az a művelet, amelyiket a legtöbbet használod; amíg fel vannak
  cserélve, egy világító zászló látszik rajta. A hosszú koppintás ilyenkor a másikat végzi.
- **Csippentsd szét** a táblát, hogy egy nagy rács mezői nagyobbak legyenek, aztán **két
  ujjal húzva** mozoghatsz rajta. Csippentsd össze, ha újra az egész rejtvényt látnád. A
  **Szünet** gomb alatt ugyanez a két méretezés gombként is megvan.
- A **Szünet** gomb alatt van a többi vezérlő: a rejtvény típusa, új rejtvény, elölről, megoldás,
  megosztás és a Beállítások a hanghoz és a nyelvhez. Amíg a menü nyitva van, az óra áll.
`,ne=e({default:()=>re}),re=`# Fekete doboz

Egy besatírozott dobozban golyók rejtőznek. A dobozt lézernyílásokból álló keret veszi
körül. Lőj be egy lézert a dobozba bármelyik nyílásból, és figyeld, mi jön ki: az
eredményekből következtesd ki, hol lehetnek a golyók, jelöld be őket, aztán ellenőriztesd
a megoldásodat.

A sugár egyenes vonalban halad, hacsak nem kerül egy golyó az útjába:

- A közvetlenül előtte álló golyó **elnyeli** a sugarat. A nyílásban **H** jelenik meg
  (találat).
- Az átlósan előtte álló golyó 90°-kal **eltéríti** a sugarat, a golyótól elfelé. Ha
  mindkét átlón van golyó, a sugár egyenesen visszafordul. Az eltérítések láncolódhatnak,
  így a sugár bolyonghat egy darabig, mielőtt kilép.
- Az a sugár, amelyik ugyanabból a nyílásból jön ki, amelyiken bement, **visszaverődik**,
  ezt **R** jelzi. Ugyanez történik azzal a sugárral, amelyet még a dobozba lépés előtt
  eltérítene egy golyó, mert az a belépési helye mellett ül átlósan.
- Egyébként a sugár valahol máshol bukkan elő, és a két nyílás ugyanazt a **számot** (és
  ugyanazt a színt) kapja, így látod, melyik lövés hol ment be és hol jött ki.

Ha a golyók megfelelő számát megjelölted, a bal felső sarokban megjelenik egy zöld gomb.
Kattints rá az ellenőrzéshez. Az elrendezésed akkor számít helyesnek, ha semmilyen lézer
nem tudja megkülönböztetni a gépétől – több golyó esetén előfordulhat, hogy egynél több
elrendezés viselkedik ugyanúgy, és bármelyikkel nyersz.

A hibás elrendezés véget vet a játéknak és felfedi a választ, ezért csak akkor
ellenőrizz, ha biztos vagy a dolgodban: a megtalált golyók feketék, a téves jelölések
pirossal át vannak húzva, a kihagyott golyók pirosak, minden általad kilőtt lézer, amelyet
az elrendezésed rosszul ad vissza, be van karikázva, a soha ki nem lőtt lézerek pedig,
amelyek elárulták volna a két elrendezés különbségét, most sülnek el, pirossal kiírva.
A Vissza gombbal visszaléphetsz, hogy tovább próbálkozz. A Megoldás feladja a játszmát, és
beteszi az igazi golyókat.

## Irányítás

Az állapotsor számolja a megjelölt golyókat és a kilőtt lézereket, ellenőrzés után pedig
azt is megmutatja, hány golyód volt rossz helyen, és hányat hagytál ki.

### Egér és érintés

- **Kattints egy nyílásra**, hogy lézert lőj ki belőle. Egy már kilőtt nyílásra kattintva
  a sugár mindkét vége világít; kattints rá újra, vagy bárhová máshová, hogy kialudjon a
  fény.
- **Kattints a dobozba**, hogy golyót jelölj oda; újabb kattintás törli a jelölést.
- **Kattints jobb gombbal egy mezőre**, hogy **lezárd**, és véletlenül se tudd megváltoztatni;
  újabb jobb gombos kattintás feloldja. A nyíláson végzett jobb gombos kattintás a mellette lévő egész
  sort vagy oszlopot lezárja, illetve feloldja.
- **Kattints a sarokban lévő gombra**, hogy ellenőriztesd a jelöléseidet.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** kurzort mozgatnak a dobozon és a nyílásain.
- Az **Enter** ugyanúgy hat, mint egy kattintás: lő, jelöl, vagy ellenőriz, ha a kurzor a
  gombon áll.
- A **Space** úgy hat, mint egy jobb gombos kattintás: lezár vagy felold.

## Beállítások

- A doboz **szélessége** és **magassága**. Minden sor és oszlop mindkét végén van egy
  lézernyílás.
- **Golyók száma**: hány golyó rejtőzik. Adj meg egyetlen számot, vagy egy intervallumot,
  például \`3-6\`, és akkor a gép választ; ilyenkor a darabszámot is ki kell találnod, és az
  ellenőrző gomb az intervallumon belüli bármennyi jelölésnél megjelenik.
`,ie=e({default:()=>ae}),ae=`# Hidak

A vízen szigetek szóródnak szét, mindegyiken egy számmal. Kösd össze őket hidakkal úgy,
hogy:

- minden híd egyenesen, vízszintesen vagy függőlegesen fusson két sziget között;
- a szigeten álló szám pontosan annyi legyen, ahány híd hozzáér;
- két szigetet párhuzamos hidak is összeköthetnek, de legfeljebb kettő (ez a korlát az
  egyéni beállításokban módosítható);
- egyetlen híd se keresztezzen egy másikat;
- minden sziget elérhető legyen bármelyik másikból a hidakon átsétálva.

A hibák pirosan látszanak: a túl sok hidat kapott sziget, az a sziget, amelyik már nem tud
eleget összeszedni (a maradék szomszédai betelnek, vagy az egyetlen útvonalat más hidak,
illetve a saját „itt nincs híd” jelöléseid zárják el), és az a szigetcsoport, amelyik már
kész, de el van vágva a többitől. Ha a hurkok tiltottak, a hurkot alkotó hidak is pirosak.

## Irányítás

A **Megoldás** kitölti a megoldást, és eltávolítja azokat a hidakat, amelyek nem tartoznak
oda.

### Egér és érintés

- **Húzz** egy szigettől valamelyik szomszédja felé, hogy hidat verj közéjük. Épp csak
  annyit kell mozdulnod, hogy az irány egyértelmű legyen; a híd az arrafelé eső
  legközelebbi szigethez ugrik. Húzz még egyszer a második párhuzamos hídért; ha a korlát
  betelt, egy újabb húzás mindet eltünteti.
- **Jobb gombbal húzz** ugyanígy, hogy beceruzázz egy „itt nincs híd” jelölést, vagy
  hogy letöröld.
- **Kattints** egy szigetre, hogy késznek jelöld. Szürke lesz, a hídjai pedig lezárulnak,
  hogy véletlenül se tudd megváltoztatni őket; újabb kattintás feloldja.
- A **Radír** (a radír gomb a Vissza mellett) a húzást eltávolításra állítja át: húzz egy
  szigettől egy szomszédja felé, és eltűnik az összes híd kettejük között, vagy az ott
  lévő „itt nincs híd” jelölés. Nyomd meg újra, hogy ismét hidakat építs.
- A **Segédvonalak** halvány vonalakat mutat mindenütt, ahová híd kerülhet, és el is rejti
  őket.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** szigetről szigetre mozgatják a kurzort.
- Az **Enter**, majd egy nyíl hidat épít abba az irányba; a **Space**, majd egy nyíl
  jelölést tesz oda. Az **Enter** kétszeri megnyomása késznek jelöli a szigetet.
- Az **E** a **Radír**, a **G** a **Segédvonalak** gomb.

## Beállítások

- A rács **szélessége** és **magassága**, legalább 3-3.
- **Nehézség**: a _Könnyű_ rejtvényeknél elég egyszerre egyetlen szigetet nézned – ahol a
  hátralévő hídjai pontosan kitöltik a maradék helyet, vagy ahol a száma túl nagy ahhoz,
  hogy bármelyik szomszédot ki lehessen hagyni. A _Közepes_ rejtvények az egyes
  összeköttetésekről is gondolkodtatnak: melyik hídnak kell ott lennie, mert nélküle nem
  teljesíthető a sziget, és (tiltott hurkok mellett) melyik összeköttetés zárna hurkot.
  A _Nehéz_ rejtvények egy lépéssel előbbre nézetnek: vajon ez a híd olyan szigetcsoportot
  zárna-e le, amely el van vágva a többitől, vagy hagyna-e valamelyik szigetet út nélkül?
  Minden rejtvénynek pontosan egy megoldása van.
- **Hurkok engedélyezése**: alapból bekapcsolva. Kikapcsolva a kész hídhálózatnak fának
  kell lennie – hidak mentén haladva nem juthatsz vissza oda, ahonnan indultál –, és a
  rejtvény úgy készül, hogy ezt figyelembe véve megoldható legyen.
- **Max. híd irányonként**: a párhuzamos hidak korlátja, alapesetben 2. A kevesebb
  könnyebb.
- **Szigetmezők aránya (%)**: nagyjából a rács mekkora része lesz sziget. Egyes elrendezésekbe
  nem fér be ennyi, úgyhogy ez csak felső korlát.
- **Tágítási tényező (%)**: a térkép növesztésekor mekkora eséllyel kerül egy új sziget a
  lehető legmesszebbre ahelyett, hogy közelebb bukkanna fel. A magas értékek ritkább,
  könnyebb rejtvényeket adnak; az alacsonyak zsúfoltakat.
`,oe=e({default:()=>r}),r=`# Kocka

Egy test áll a rácson, és a rács néhány mezője kékre van festve – pontosan annyi, ahány
lapja a testnek van. A gördítés átbillenti a testet annak a lapnak az egyik éle fölött,
amelyiken áll, így a sorban következő lap ér le a szomszédos mezőre. Amikor leér, az alul
lévő lap és a mező, amelyre érkezett, színt cserél: ha sima lap érkezik kék mezőre, a kék
felkerül a testre; ha kék lap érkezik sima mezőre, a kék ott marad. A rejtvény akkor kész,
ha egyszerre minden lap kék. Az állapotsor számolja a gördítéseidet, úgyhogy próbálj minél
kevesebből végezni.

A klasszikus változatban egy kocka gurul négyzetrácson. Háromszögrácson helyette
tetraédert, oktaédert vagy ikozaédert gördíthetsz. Tartsd észben, hogy egy guruló
tetraéder minden lapja csak a mezők negyedét érheti el valaha, az oktaéder lapjai pedig
felváltva a felfelé és a lefelé álló háromszögekre kerülnek – a kék mezők mindig úgy
vannak elhelyezve, hogy a rejtvény befejezhető legyen.

## Irányítás

Ehhez a rejtvényhez nincs Megoldás gomb. Ha már minden lap kék, tovább gördítheted a
testet anélkül, hogy elrontanád.

### Egér és érintés

- **Kattints** bárhová, és a test egy mezőt gördül abba az irányba, amerre kattintottál.
  Négyzetrácson ez fel, le, balra vagy jobbra jelent; háromszögrácson az aktuális
  háromszögnek három szomszédja közül választhatsz. A kattintás a test minden szomszédját
  eléri, így önmagában is elég bármelyik rácson játszani.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** a négy fő irányba gördítik a testet. Háromszögrácson egy
  háromszögnek vagy csak fölötte, vagy csak alatta van szomszédja, így a másik függőleges
  billentyű nem csinál semmit.
- A **Home**, a **Page Up**, az **End** és a **Page Down** (vagy a numerikus billentyűzet
  sarokbillentyűi: 7, 9, 1 és 3) átlósan gördítenek a háromszögrácsokon, mindig az arra
  eső legközelebbi élt választva.

## Beállítások

- **Test típusa**: tetraéder, kocka, oktaéder vagy ikozaéder. A kocka négyzetrácsot
  használ; a többi háromszögekből álló rácsot.
- **Szélesség / felső** és **Magasság / alsó**: a kockánál a négyzetrács mérete. A
  háromszögrácsoknál ez egy hatszögletű pálya felső és alsó élének hossza (ha valamelyiket
  nullára állítod, sima háromszöget kapsz). A rácsnak minden kék mezőnek és egy üres
  kezdőmezőnek is helyet kell hagynia.
`,i=e({default:()=>a}),a=`# Dominosa

Egy teljes dominókészletet – minden számpárból egyet 0-tól a maximumig, a duplákkal együtt
– kiraktak úgy, hogy kitöltsön egy téglalapot. Aztán lemásolták a számokat, a dominókat
pedig elvették. A te dolgod kitalálni, hol feküdtek: oszd fel a rácsot szomszédos
mezőpárokra úgy, hogy a készlet minden dominója pontosan egyszer szerepeljen.

Pirosan látszik az a dominó, amelynek a számpárja már máshol is szerepel, és az a csupasz
mező is, amelyet már egyetlen dominó sem érhet el.

## Irányítás

A rejtvény akkor kész, ha minden mező le van fedve, és egyetlen dominó sem piros. A
**Megoldás** lefekteti a megoldás összes dominóját, letörölve mindent, amit lehelyeztél.

### Egér és érintés

- **Kattints** két szomszédos szám határára (vagy a mezőnek az ehhez a határhoz közelebbi
  felére), hogy dominót fektess rájuk. Ugyanarra a határra újra kattintva leveszed. Az a
  dominó, amelyet egy másik egy részére fektetsz, leváltja azt.
- **Kattints jobb gombbal** egy határra, hogy vonalat ceruzázz át rajta, jelezve: ez a két szám
  **nem** egy dominó. Újabb jobb gombos kattintás letörli a vonalat. Dominó határára nem húzhatsz
  vonalat, és egy dominó lefektetése törli a hozzáérő vonalakat.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** a rácson mozgatják a kurzort, megállva a mezők közepén és a mezők
  közötti határokon. Egy határon a kurzor körberajzolja azt a dominót, amelyet lefektetne.
- Az **Enter** lefekteti vagy leveszi azt a dominót, a **Space** pedig vonalat húz oda,
  illetve letörli.

## Beállítások

- **Legnagyobb szám a dominókon**: a dominók 0-0-tól N-N-ig mennek, a rács pedig
  (N+2) mező széles és (N+1) mező magas, így a 6-os maximum egy 8×7-es rácsot ad.
- **Nehézség**: mennyi következtetést kíván a rejtvény. A **Nagyon könnyű** rejtvényekben mindig
  akad olyan dominó, amelynek egyetlen helye van, vagy olyan mező, amelyet egyetlen dominó fedhet
  le. A **Könnyű** két további érvet vesz hozzá: ennek a mezőnek minden lefedési módja ugyanazt a
  dominót használja, tehát az a dominó máshová nem kerülhet; illetve ez a dominó bárhová is
  kerülne, mindenképp kizár egy adott helyet. A **Nehéz** hozzáveszi a számolást (az a dominó,
  amely páratlan számú mezőt vágna le, lehetetlen; az ugyanazt a számot mutató mezők egy
  csoportja lefoglalhatja a közös dominóikat), az **Extrém** rejtvényeknél pedig egy lehelyezés
  következményeit kell végigkövetned, amíg egymásnak nem ütköznek. Ezeknek mind pontosan egy
  megoldásuk van. A **Többértelmű** rejtvényeket egyáltalán nem ellenőrzi a program: több
  megoldásuk is lehet, és találgatásra is szükség lehet – bármelyik lefedés megtalálása győzelem.
`,o=e({default:()=>s}),s=`# Tizenöt

A klasszikus tologatós rejtvény. A rácsot számozott lapkák töltik meg, és marad egy üres
hely. Told a lapkákat az üres helyre, amíg a számok balról jobbra és fentről lefelé
sorrendben nem állnak, az üres hely pedig a jobb alsó sarokba nem kerül.

## Irányítás

A **Megoldás** egyből a kész elrendezésre ugrik. Nem mutatja meg, hogyan juss el odáig, de
jól jön, ha bevett lépéssorokat szeretnél gyakorolni.

### Egér és érintés

- **Kattints** bármelyik lapkára, amelyik az üres hellyel azonos sorban vagy oszlopban
  van, hogy azt (és mindent közte és az üres hely között) a helyére told.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** a nyíl irányába tolnak egy lapkát az üres helyre: a **felfelé nyíl** az üres
  hely alatti lapkát tolja fel a helyére.

## Beállítások

- A rács **szélessége** és **magassága** (az alapértelmezés a klasszikus 4×4).
`,c=e({default:()=>l}),l=`# Kitöltés

A rács néhány mezőjében már áll egy számjegy; a többi üres. Írj minden üres mezőbe egy
számjegyet úgy, hogy az azonos számjegyekből álló összefüggő csoportok pontosan annyi
mezőt fedjenek, amennyit a számjegy mond: minden 3 egy három 3-asból álló csoporthoz
tartozik, minden 1 egyedül áll, és így tovább. A mezők csak az oldalaikon át számítanak
összefüggőnek, a sarkaikon át nem. Ebből következik, hogy egyetlen mezőben sincs 0, két
1-es sosem áll egymás mellett, és egyetlen csoport sem nagyobb kilenc mezőnél. A megadott
számjegynek nem kell a csoportja kezdetének lennie: több megadott 4-es is kerülhet egy
csoportba, és lehet olyan csoport is, amelyben egyetlen megadott számjegy sincs.

Vastag vonalak jelennek meg az eltérő számjegyű mezők között, és minden olyan csoport
körül, amelyik már a megfelelő méretű (vagy túl nagy). Egy számjegy pirosra vált, ha a
csoportja nagyobbra nőtt a számjegynél, vagy ha úgy falazták körbe, hogy már nincs helye
elérni a saját méretét. Ez az a rejtvény, amelyet a Nikoli Fillomino néven ad ki.

## Irányítás

A megadott számjegyek tintával vannak írva, és nem változtathatók; a sajátjaid kékek. A
**Megoldás** kitölti a megoldást.

### Egér és érintés

- **Kattints** egy üres mezőre, hogy kijelöld, majd a képernyőn lévő billentyűkkel írj bele
  egy számjegyet. A billentyűkön a **⌫** újra kiüríti a kijelölést.
- **Húzz** végig több mezőn, hogy mindet kijelöld, így egyetlen számjegy egyszerre tölti
  ki az összes kijelölt mezőt.
- A **jobb gombos kattintás** úgy ad hozzá egy mezőt a kijelöléshez, hogy nem kell elölről
  kezdened; egy kijelölt mezőn a második jobb gombos kattintás kiveszi a mezőt a kijelölésből.
- A **Kitöltés** (a gomb a Vissza mellett) szétteríti a számjegyet: húzz egy számjegyet
  tartalmazó mezőtől a körülötte lévő mezőkön át, és elengedéskor mind megkapják azt a
  számjegyet, a billentyűk nélkül is. Az üres mezőn induló kattintások és húzások továbbra
  is kijelölnek. Nyomd meg újra, hogy ismét kijelölj.

### Billentyűzet (Keyboard)

- Ha egy vagy több mező ki van jelölve, **üss le egy számjegyet**, hogy mindegyikbe
  beírd. A \`0\` számjegy vagy a **Backspace** újra kiüríti őket.
- A **nyílbillentyűk** billentyűzetkurzort mozgatnak, és a leütött számjegy az alatta lévő
  mezőt tölti ki.
- A **Space** vagy az **Enter** a kurzor alatti mezőt beteszi a kijelölésbe, illetve
  kiveszi belőle, így több mező is kitölthető egyetlen billentyűleütéssel.
- Az **F** a **Kitöltés** gomb.

## Beállítások

- **Szélesség** és **Magasság**: a rács mérete. A csoportok sosem nagyobbak a hosszabb
  oldalnál (vagy 9-nél), így a kis rácsokon csak kis számjegyek szerepelnek.
`,u=e({default:()=>d}),d=`# Átfordítás

Mezőkből álló rács, néhány mező világít, a többi sötét. A célod, hogy egyszerre mind
világítson. Egy mező megnyomása átbillenti világos és sötét között, de néhány szomszédját
is átbillenti: a mezőkre rajzolt kis ábra pontosan megmutatja, melyeket. Az alapértelmezett
**Keresztek** alakzatokkal minden megnyomás a mezőt és a négy oldalszomszédját fordítja át;
a **Véletlen** alakzatokkal minden mezőnek saját szabálytalan mintája van, így a rejtvény
minden alkalommal másképp játszódik.

Mivel egy mező kétszeri megnyomása kioltja önmagát, és a megnyomások sorrendje sosem
számít, a megoldás nem más, mint azoknak a mezőknek a halmaza, amelyeket egyszer-egyszer
meg kell nyomni.

## Irányítás

Az állapotsor számolja a megnyomásaidat. A **Megoldás** felkapcsolja az egész táblát, és
pirossal keretezi azokat a mezőket, amelyeket ehhez megnyomott. Ha utána tovább nyomkodod
a mezőket, a piros keretek követik, mely mezőkön kell még nyomni ahhoz, hogy visszatérj a
kész állapotba.

### Egér és érintés

- **Kattints** egy mezőre, hogy megnyomd.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** a rácson mozgatják a kurzort; az **Enter** vagy a **Space**
  megnyomja a kurzor alatti mezőt.

## Beállítások

- A rács **szélessége** és **magassága**, oldalanként 2-től 10 mezőig.
- **Alakzat típusa**: a _Keresztek_ minden mezőt az oldalszomszédaival együtt fordít át; a
  _Véletlen_ minden mezőnek véletlenszerűen növesztett alakzatot ad a körülötte lévő 3×3-as
  blokkon belül.
`,f=e({default:()=>p}),p=`# Elárasztás

A rács véletlenszerű színű mezők tarka kavalkádja. A bal felső sarokban lévő mezőt
irányítod, és vele együtt minden olyan mezőt, amelyet azonos színű út köt hozzá. Minden
lépés az egész összefüggő foltot átfesti egy általad választott színre, így az adott színű
szomszédos mezők is a foltod részévé válnak. Addig folytasd, amíg az egész rács egyszínű
nem lesz.

A bökkenő a lépéskorlát. Mielőtt elkezdenéd, a játék maga is megoldja a rácsot, és a saját
lépésszámát adja neked néhány tartalék lépéssel megtoldva; ha elfogy a keret, mielőtt a
rács egyszínű lenne, elvesztetted a kört. Utána is tovább festhetsz, hogy lásd a rácsot
elkészülni, de az már nem számít győzelemnek.

## Irányítás

Az állapotsor mutatja, hány lépést használtál el a keretből. A **Megoldás** a megoldóval
fejezteti be a rácsot; ez automatikus megoldásnak számít, nem a te győzelmednek.

### Egér és érintés

- **Kattints** bármelyik mezőre, amelynek a színe eltér a foltodétól, hogy a foltot arra a
  színre fesd át. Egy már egyező színű mezőre kattintva nem történik semmi, és lépésbe sem
  kerül.
- A **Tipp** helyetted lejátssza a megoldó következő színét, közönséges lépésként, amelyet
  visszavonhatsz. Néhány tipp után is a tiéd marad a győzelem, és vele a kredit is.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** a rácson mozgatják a kurzort; az **Enter** vagy a **Space** a
  kurzor alatti színre festi át a foltot.

## Beállítások

- A rács **szélessége** és **magassága**, oldalanként legfeljebb 32 mező.
- **Színek**: hány színt használ a rács, 3-tól 10-ig. A kevesebb szín kevesebb választást
  és könnyebb játékot jelent.
- **Engedélyezett többletlépések**: ennyi tartalék lépés adódik a megoldó saját
  megoldásának hosszához, és ez adja ki a lépéskorlátot. 0-val legalább olyan hatékonynak
  kell lenned, mint a megoldó; az elég jó, de nem tökéletes, úgyhogy meg lehet verni
  a lépésszámát.
`,m=e({default:()=>h}),h=`# Galaxisok

A rácsot pontok pettyezik: egy pont ülhet egy mező közepén, két mező közötti vonalon, vagy
olyan sarkon, ahol négy mező találkozik. Húzz falakat a rácsvonalak mentén, hogy
tartományokra szabdald a rácsot úgy, hogy minden tartomány pontosan egy pontot
tartalmazzon, és az a pont legyen a tartomány szimmetriaközéppontja: a tartományt a pontja
körül 180°-kal elforgatva pontosan önmagára kell esnie. Minden mezőnek valamelyik
tartományba kell kerülnie, így egyetlen tartomány sem maradhat pont nélkül.

A rejtvények véletlenszerűen készülnek, egyértelmű megoldással. Ez a Nikoli „Tentai Show”
nevű rejtvénye, más néven Spiral Galaxies.

## Irányítás

A lezárt és helyes tartomány – egyetlen pont, a szimmetriaközéppontjában, benne kósza falak
nélkül – árnyékolva jelenik meg. Egy pont pirosra vált, ha fal fut át rajta, vagy ha egy
olyan lezárt tartomány egyetlen pontja, amely nem szimmetrikus rá; az egyáltalán pontot nem
tartalmazó lezárt tartomány vonalkázva látszik. A rejtvény akkor teljes, ha minden mező
árnyékolt. A **Megoldás** megrajzolja a teljes megoldást.

### Egér és érintés

- **Kattints** egy rácsvonalra, hogy falat húzz oda, vagy kattints egy falra, hogy
  eltávolítsd.
- **Húzz egy pontból** egy mezőbe, hogy kis nyilat hagyj ott, amely visszamutat a pontra,
  emlékeztetőül, hogy a mező annak a pontnak a galaxisához tartozik.
- **Jobb gombbal húzd** el a meglévő nyilat, hogy áthelyezd. Ha visszaejted a pontjára,
  vagy lehúzod a rácsról, eldobod; ha olyan mezőre ejted, ahol már van nyíl, annak a helyére
  kerül.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** egyaránt mozgatják a kurzort mezőkön, vonalakon és sarkokon.
- Az **Enter** egy vonalon megrajzolja vagy eltünteti az ottani falat; az **Enter** egy
  ponton felvesz egy nyilat, amely követi a kurzort, amíg újabb **Enter**-rel le nem
  teszed.

## Beállítások

- A rács **szélessége** és **magassága**, legalább 3-3. Az előre beállított méretek 7×7-től
  15×15-ig terjednek.
- **Nehézség** – a _Közepes_ rejtvények lépésről lépésre megoldhatók abból, amit a
  szimmetriaszabály kikényszerít; az _Extrém_ rejtvényeknél előfordulhat, hogy fel kell tenned
  valamit, és megnézni, hová vezet.
`,g=e({default:()=>_}),_=`# Kitalálás

A gép színes bábuk egy sorát rejtette el a tábla tetején lévő takarás mögé. A te dolgod,
hogy pontosan visszaadd, kizárólag azokból a jelekből, amelyeket minden tippedre kapsz:
egy **fekete** bábu jár minden olyan bábuért, amely jó helyen jó színű, és egy **üres**
bábu minden további olyanért, amelynek a színe máshol szerepel a rejtett sorban. A jelek
azt mondják meg, _hány_ bábu volt jó, nem azt, hogy _melyek_. Ha megtalálod a sort, mielőtt
kifogynál a tippekből, felemelkedik a takarás; ha kifogysz, akkor is felemelkedik, hogy
lásd, mit hagytál ki.

Ez az a játék, amelyet a Hasbro _Mastermind_ néven árul: hat szín, négy bábu és tíz tipp.
Minden beállítás módosítható.

## Irányítás

A **Megoldás** felemeli a takarást és megmutatja a választ; ez ugyanúgy véget vet a
játéknak, mintha kifogytál volna a tippekből.

### Egér és érintés

- **Kattints** egy színre a bal oldali tálcán, hogy kiválaszd (a gyűrű mutatja, melyiket),
  majd **kattints egy helyre** az aktuális sorban, hogy odategyél egy olyan színű bábut.
  Egy korábbi tippben lévő bábura kattintva szintén kiválasztod a színét.
- **Húzz** egy bábut a tálcáról, egy korábbi tippből vagy az aktuális sorból egy helyre. Ha
  egy bábut kihúzol az aktuális sorból, és bárhová máshová ejted, eltűnik.
- **Kattints jobb gombbal** egy helyre, hogy kiürítsd.
- Ha a sor kész, a tőle jobbra lévő kis értékelőmező kigyullad: **kattints rá**, hogy beadd
  a tippet.
- **Kattints a középső gombbal** egy helyre, hogy _megtartsd_ az ott lévő bábut: a megtartott bábu az
  értékelés után átkerül a következő tippbe, így nem kell újra kiraknod azokat, amelyekben
  már bízol. Ismételd meg, hogy elengedd a bábut.
- A **Megtartás** (a gomb a Vissza mellett) ugyanezt teszi egy sima kattintással: amíg be van
  kapcsolva, az aktuális sor egy helyére kattintva megtartod vagy elengeded a bábuját
  ahelyett, hogy színt tennél oda. A színváltáshoz kattints a tálcára a szokott módon;
  nyomd meg újra a **Megtartás** gombot, hogy ismét bábukat rakj le.
- A szünetmenü **Betűk** gombja minden bábura ráír egy betűt, arra az esetre, ha egyes színek
  hasonlónak tűnnek neked, és le is szedi őket.

### Billentyűzet (Keyboard)

- **Nyílbillentyűk**: a fel és a le színt választ a tálcán, a balra és a jobbra a kurzort
  mozgatja az aktuális sor mentén, és ha a sor kész, tovább az értékelőmezőre.
- Az **Enter** vagy a **Space** a kiválasztott színt teszi a kurzor alatti helyre, vagy
  beadja a tippet, ha a kurzor az értékelőmezőn áll.
- A **Backspace** vagy a \`D\` kiüríti a kurzor alatti helyet.
- A \`H\` megtartja vagy elengedi a kurzor alatti bábut.
- A \`K\` a **Megtartás**, az \`L\` a **Betűk** gomb.

## Beállítások

- **Színek**: hány különböző színből válogat a rejtett sor, 2-től 10-ig. Több szín mellett
  nehezebb behatárolni a sort.
- **Bábuk tippenként**: a rejtett sor hossza.
- **Tippek**: hány próbálkozásod van.
- **Üres helyek engedélyezése**: megengedi, hogy egy tippben üresen hagyj helyeket. Az üres
  hely sosem lehet találat, így könnyebb színekre tapogatózni. Maga a rejtett sor sosem
  tartalmaz üres helyet.
- **Ismétlődés engedélyezése**: megengedi, hogy a rejtett sor (és a tippjeid) egy színt
  többször is használjanak. Kikapcsolva jelentősen csökken a lehetséges sorok száma.
`,v=e({default:()=>y}),y=`# Tehetetlenség

Egy akadályokkal teleszórt rácson te vagy a golyó, és a tábla összes drágakövét meg akarod
szerezni. A csavar ott van a névben: ha a golyó egyszer elindul, addig gurul, amíg valami
meg nem állítja. Éppúgy átgurul a drágaköveken – menet közben felszedve őket –, mint az üres
mezőkön, és csak akkor áll meg, ha a következő mező fal, vagy ha megállóra fut. Az átlós
lépések két olyan fal között is átpréselődnek, amelyek csak a sarkukkal érnek össze. Aknára
gurulni végzetes, még akkor is, ha ugyanaz a lépés szedte fel az utolsó drágakövet.

Minden rejtvény úgy készül, hogy a kezdőmezőről az összes drágaköve összeszedhető legyen, de
semmi nem akadályoz meg abban, hogy a tábla olyan sarkába gurulj, ahonnan valamelyik drágakő
már nem érhető el. A halálnak és a beszorulásnak nincs más büntetése, mint egy halálszámláló
az állapotsoron: vonj vissza egy lépést, és próbáld másképp.

## Irányítás

Akna után a **Vissza** gombbal a végzetes lépés előttről folytathatod. A **Megoldás** kiszámol
egy útvonalat onnan, ahol éppen állsz, amely összeszedi az összes maradék drágakövet, majd
végig is gurítja rajta a golyót; a Vissza egyetlen mozdulattal visszavonja az egész útvonalat.

### Egér és érintés

- **Kattints** egy mezőre, és a golyó abba az irányba indul el, amerre az a mező hozzá képest
  van, a nyolc égtáj közül a legközelebbire kerekítve – az átlósakat is beleértve. A rácson
  kívüli margóra adott kattintás is működik, ami jól jön, amikor a golyó a tábla szélén áll.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** felfelé, lefelé, balra vagy jobbra gurítják a golyót.
- A **Home**, a **Page Up**, az **End** és a **Page Down** átlósan gurítja: balra föl, jobbra
  föl, balra le, jobbra le. A numerikus billentyűzet úgy működik, ahogy kinéz: a 8 fölfelé, a
  3 jobbra le, és így tovább; a felső számsor ugyanezt teszi.

## Beállítások

- A rács **szélessége** és **magassága**. A mezők nagyjából egyötöde fal, egyötöde megálló,
  egyötöde akna és egyötöde drágakő.
`,b=e({default:()=>x}),x=`# Keen

Töltsd ki a rácsot 1-től a rács méretéig terjedő számjegyekkel úgy, hogy minden sorban és
minden oszlopban minden számjegy pontosan egyszer szerepeljen. A rácsot ezen felül vastagon
körberajzolt „ketrecek” osztják fel, és mindegyik ketrec bal felső mezőjében ott egy kis
nyom: egy érték és egy műveleti jel. A ketrec számjegyeinek ezzel a művelettel ki kell adniuk
azt az értéket:

- a \`7+\` azt jelenti, hogy a ketrec számjegyeinek összege 7;
- a \`12×\` azt, hogy a szorzatuk 12;
- a \`2−\` mindig kétmezős ketrecen áll, és azt jelenti, hogy az egyik számjegy 2-vel nagyobb a
  másiknál (bármelyik irányban);
- a \`3÷\` szintén kétmezős, és azt jelenti, hogy az egyik számjegy a másik háromszorosa.

A Solo Killer módjától eltérően egy ketrecben _előfordulhat_ ugyanaz a számjegy kétszer is,
ha a két példány nem esik azonos sorba vagy oszlopba. Előre megadott számjegyek nincsenek; a
nyomokon kívül semmit nem kapsz, és minden rejtvénynek pontosan egy megoldása van. Ez a
rejtvény KenKen néven jelenik meg.

## Irányítás

Az a számjegy, amely kétszer szerepel a sorában vagy az oszlopában, pirosra vált, és így jár
annak a ketrecnek a nyoma is, amely teljesen ki van töltve, de nem jön ki belőle az érték. A
**Megoldás** beírja a megoldást.

### Egér és érintés

- **Kattints** egy mezőre a kijelöléséhez, majd a képernyőn lévő billentyűkkel írj bele egy
  számjegyet. A kijelölt mezőre adott újabb kattintás megszünteti a kijelölést.
- A billentyűsor **⌫** gombja újra kiüríti a kijelölt mezőt, a **✎** pedig bekapcsolja a
  **ceruzajeleket**: amit ezután választasz, kis jegyzetként kerül be, és ugyanaz a számjegy
  még egyszer ki is radírozza azt a jegyzetet. A ceruzajelek csak a gondolkodásodat segítik;
  ha beírsz egy számjegyet, eltűnnek.
- **Kattints jobb gombbal** egy üres mezőre, és rögtön ceruzajelekhez jelölöd ki.
- A szünetmenü **Jelek** gombja minden üres mezőt teleír a ceruzajelek teljes készletével.
- A **Kiemelés** (a nagyító a Vissza mellett) kiemel minden mezőt, amelyben ugyanaz a
  számjegy áll, mint a legutóbb kattintott mezőben, és a ceruzajelek között is félkövéren
  mutatja azt a számjegyet. Nyomd meg újra a kikapcsoláshoz.

### Billentyűzet (Keyboard)

- **Írj be egy számjegyet**, és a kijelölt mezőbe kerül – vagy jegyzetként, ha a mező
  ceruzajelekhez van kijelölve.
- A **Space** vagy a **Backspace** kiüríti a kijelölt mezőt (a számjegyét vagy az összes
  ceruzajelét).
- A **nyílbillentyűk** egy billentyűzetkurzort mozgatnak, és a beírt számjegyek az alatta lévő
  mezőbe kerülnek.
- Az **Enter** a normál és a ceruzajeles beírás között vált.
- Az **M** a **Jelek**, az **L** a **Kiemelés** gomb.

## Beállítások

- **Rács mérete**: 3-tól 9-ig. A 9 fölötti számjegyek nehézkesek lennének, ezért 9 a felső
  határ.
- **Nehézség**: a legnehezebb gondolatmenet, amire a rejtvényhez szükség van. A _Könnyű_ szinten
  csak azt kell kitalálnod, hogy egyáltalán mely számjegyek kerülhetnek egy ketrecbe; a _Közepes_
  már azt is számon tartatja veled, melyik számjegy a ketrec melyik mezőjén állhat; a _Nehéz_
  hozzáteszi a ketreceken átívelő következtetéseket (amit egy ketrecnek egy adott sorba kell
  tennie, az a sor többi részén nem szerepelhet) és az egy számjegykészletet lefoglaló
  mezőcsoportokat; a _Szakértő_ kényszerláncokat is bevet; az _Extrém_ rejtvények pedig
  találgatás és visszalépés nélkül nem fejezhetők be. A nehezebb rejtvények elkészítése tovább
  tart, a 3×3-as rácsok pedig sosem mennek a Közepes fölé.
- **Csak szorzás**: minden nyom szorzat, ami elveszi a könnyű kétmezős ketreceket, és egészen
  másfajta rejtvényt eredményez.
`,S=e({default:()=>C}),C=`# Világítás

Fehér és fekete mezőkből álló rács. Tegyél izzókat a fehér mezőkre úgy, hogy minden fehér
mező világos legyen. Az izzó megvilágítja a saját mezőjét, és végigvilágít a sorában és az
oszlopában, amíg egy fekete mező vagy a tábla széle útját nem állja. A végén három dolognak
kell teljesülnie:

- minden fehér mező világos;
- egyik izzót sem világítja meg másik izzó, vagyis nincs két olyan izzó, amelyik egy soron
  vagy egy oszlopon keresztül látja egymást;
- a számot viselő fekete mező mellett pontosan annyi izzó áll a közvetlenül fölötte, alatta,
  tőle balra és tőle jobbra lévő mezőkön. A szám nélküli fekete mezők mellett akárhány izzó
  lehet.

A világos mezőket sárga fény önti el. Az egymásra világító izzók pirosra váltanak, és így jár
az a szám is, amely már nem teljesíthető: vagy túl sok izzó áll mellette, vagy már nincs hely
elég izzónak.

## Irányítás

A rejtvény akkor kész, ha az egész rács világít, és semmi nem látszik pirosan. A **Tipp**
lerak egyetlen izzót – vagy kivesz egyet, amely nincs benne a megoldásban –, a többit pedig
rád hagyja; a rejtvény folytatódik, és néhány tipp után is a tiéd a győzelem és a kredit.
A **Megoldás**
berakja egy megoldás izzóit, és a helyükön hagyja a te keresztjeidet.

### Egér és érintés

- **Kattints** egy fehér mezőre, hogy izzót tegyél rá, és még egyszer, hogy elvedd.
- **Kattints jobb gombbal** egy fehér mezőre, és keresztet ceruzázol be rá, ami azt jelenti: „ide nem
  jöhet izzó”; újabb jobb gombos kattintás letörli. A megkeresztezett mezőre addig nem kerülhet izzó,
  amíg le nem veszed róla a keresztet, izzós mezőt pedig nem lehet megkeresztezni.
- A **Kereszt** (a kereszt gomb a Vissza mellett) bekapcsolásával egy sima kattintás izzó
  helyett keresztet ceruzáz be vagy töröl le – jól jön, ha egyszerre sok mezőt zársz ki.
  Nyomd meg újra, hogy ismét izzókat tegyél.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** egy kurzort mozgatnak a rácson.
- Az **Enter** izzót tesz a kurzor alá vagy elveszi onnan, a **Space** (vagy az **I**) pedig
  keresztet rak oda, illetve levesz.
- Az **X** a **Kereszt** gomb.

## Beállítások

- A rács **szélessége** és **magassága**.
- **Fekete mezők aránya (%)**: nagyjából mekkora része legyen fekete a rácsnak. Ez csak
  útmutatás, nem ígéret: ha ekkora sűrűséggel nem készíthető rejtvény, a generátor tesz bele
  még néhány fekete mezőt.
- **Szimmetria**: a mintázat, amit a fekete mezők követnek – nincs, két fél tükrözése vagy
  forgatása, illetve négyirányú tükrözés vagy forgatás. A négyirányú forgatáshoz négyzet alakú
  rács kell.
- **Nehézség**: a _Könnyű_ rejtvényekhez elég egyszerre egy mezőről végiggondolni, hogy izzót
  kell-e rá tenni, vagy nem kerülhet rá. A _Közepes_ rejtvényekhez mezőcsoportokat kell egymáshoz
  mérned („e három közül az egyik biztosan izzó, tehát ez itt kiesik”). A _Nehéz_ rejtvényeknél
  előfordulhat, hogy ki kell próbálnod valahol egy izzót, és követned kell a következményeit,
  amíg valami el nem romlik. Minden rejtvénynek pontosan egy megoldása van.
`,w=e({default:()=>T}),T=`# Hurkok

Pontokból álló rács, a közöttük lévő mezők némelyikében egy-egy szám. Rajzolj egyetlen zárt
hurkot a pontokat összekötő halvány vonalak mentén úgy, hogy:

- minden számozott mezőnek pontosan annyi oldala essen a hurokra, amennyit a száma mond;
- a hurok soha ne keresztezze és ne érintse önmagát – minden pontban vagy két vonal fut össze,
  vagy egy sem –, és csak egyetlen hurok legyen, laza végek és különálló darabok nélkül.

A klasszikus változat négyzetekkel dolgozik, de ugyanez a rejtvény működik háromszögeken,
hatszögeken és egy tucat furcsább kirakáson is, ahol a számok jóval 4 fölé is mehetnek.

A rossz hurkot alkotó vonalak, illetve azok, amelyekből három fut össze egy pontban, pirosra
váltanak; és pirosra vált az a szám is, amely körül túl sok vonal van, vagy már túl kevés
lehetséges oldal maradt. A szám szürkére vált, amint pontosan a megfelelő számú vonal van
körülötte.

## Irányítás

A **Megoldás** megrajzolja az egész hurkot. A rejtvény kész, amint a hurok teljes, és minden
szám teljesül; a fel nem használt élek kihúzása nem kötelező.

### Egér és érintés

- **Kattints** egy halvány élre, és vonal lesz belőle; a vonalra újra kattintva eltűnik.
- **Kattints jobb gombbal** egy élre, hogy kihúzd, vagyis megjelöld: biztosan nem része a huroknak;
  újabb jobb gombos kattintás törli a jelölést. Egy kattintás és egy jobb gombos kattintás egyaránt törli a
  másikkal tett jelölést is.
- A **Kereszt** (a kereszt gomb a Vissza mellett) bekapcsolásával egy sima kattintás
  vonalrajzolás helyett kihúzza az élt, vagy törli a jelölést. Nyomd meg újra, hogy ismét
  vonalakat rajzolj.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** élről élre mozgatják a kurzort; az **Enter** vonalat rajzol a kurzor
  alatti élre vagy leveszi onnan, a **Space** pedig kihúzza az élt, illetve törli a jelölést.
- Az **X** a **Kereszt** gomb.

## Beállítások

- A rács **szélessége** és **magassága**, a kirakás egységeiben számolva. Négyzetes rácsnál ez
  egyszerűen a négyzetek száma vízszintesen és függőlegesen; a többi kirakás az ismétlődő
  egységeit számolja, így a lapok tényleges száma változó.
- **Rács típusa**: a _Négyzetek_, a _Háromszöges_ és a _Méhsejt_ a szabályos kirakások. A
  _Tompított négyzetes_, a _Kairói_, a _Nagy hatszöges_, a _Nyolcszöges_, a _Sárkányok_, a
  _Rozetta_, a _Tizenkétszöges_ és a _Nagy tizenkétszöges_ többféle alakzatot kever, a két
  _Penrose_-kirakás pedig egyáltalán nem ismétlődik.
- **Nehézség**: a _Könnyű_ rejtvényekhez elegendők maguk a szabályok – megszámolni egy szám körül
  a vonalakat, észben tartani, hogy egy pontban két vonal van vagy egy sem, és nem bezárni a
  hurkot túl korán. A _Közepes_ hozzáteszi az egy pontban találkozó élpárokról szóló
  következtetéseket (a pár legfeljebb egyik, illetve legalább egyik tagja vonal). A _Nehéz_
  szinten ezek a tények pontról pontra láncolódnak, például egy átlósan sorakozó 2-es soron
  végig. A _Szakértő_ ezen felül számon tartja az egymással biztosan egyenlő vagy ellentétes
  éleket is. Találgatásra soha nincs szükség; minden rejtvénynek pontosan egy megoldása van.
`,E=e({default:()=>D}),D=`# Mágnesek

Egy téglalapot dominókkal raktak ki, amelyeknek csak a körvonala látszik. Minden dominó vagy
mágnes – az egyik fele \`+\` pólus, a másik \`−\` pólus –, vagy üres lap, pólusok nélkül. A tábla
szélén álló számok megmondják, hány \`+\` pólus (az oszlopok fölött és a sorok bal oldalán) és
hány \`−\` pólus (az oszlopok alatt és a sorok jobb oldalán) van az adott vonalban; a hiányzó
szám azt jelenti, hogy arra a vonalra nincs nyom. Töltsd ki az összes dominót úgy, hogy minden
szám kijöjjön, és két azonos pólus soha ne kerüljön egymás mellé: \`+\` sosem érhet \`+\`-hoz és
\`−\` sosem \`−\`-hoz a dominók határán át. Az üres lapok semlegesek, bármi mellé kerülhetnek.

Az egymáshoz érő azonos pólusok pirosan látszanak. Egy szám akkor vált pirosra, ha már nem
teljesíthető – vagy túl sok a pólus, vagy túl kevés, és nincs hova több –, és akkor szürkére,
amikor pontosan teljesül. A rejtvény akkor kész, ha minden dominó ki van töltve, minden szám
kijön, és semmi nem piros.

## Irányítás

### Egér és érintés

- **Kattints** egy dominó kitöltetlen felére, és az lesz a \`+\` pólus (a másik fele \`−\` lesz).
  Ugyanarra a félre újra kattintva megfordítod a mágnest, harmadszorra pedig kiürül a dominó.
  Az üres lapnak jelölt dominóra kattintva nem történik semmi.
- **Kattints jobb gombbal** egy kitöltetlen dominóra, hogy üres lapnak jelöld. Újabb jobb gombos kattintásra az
  üres lap helyére kérdőjelek kerülnek – ez azt jegyzi meg, hogy a dominó biztosan mágnes –, a
  harmadik jobb gombos kattintás pedig kiüríti. Mágnesre jobb gombbal kattintva nem történik semmi.
- Az **Üres** (az árnyékolt dominó a Vissza mellett) bekapcsolásával már egy sima kattintás
  is üres lapnak jelöli a dominót, aztán kérdőjeleket tesz rá, aztán újra kiüríti. Nyomd
  meg újra, hogy ismét mágneseket rakj le.
- A **Megoldás** kitölti az egész megoldást.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** egy kurzort mozgatnak a rácson.
- Az **Enter** a kurzor alatti felet a \`+\`, a \`−\` és a kitöltetlen állapot között lépteti,
  ugyanúgy, ahogy a kattintás.
- A **Space** a kurzor alatti dominót az üres lap, a kérdőjel és a kitöltetlen állapot között
  lépteti, ugyanúgy, ahogy a jobb gombos kattintás.
- A **B** az **Üres** gomb.

## Beállítások

- A rács **szélessége** és **magassága**. Ha a terület páratlan, egy mező kimarad, és sraffozva
  jelenik meg; egyik dominóhoz sem tartozik, és semlegesnek számít.
- **Nehézség**: a _Könnyű_ rejtvényekhez mindig elég egyszerre egy vonalat vagy egy dominót
  nézned – egy szám, amely már teljesült, egy szám, amelyhez minden maradék jelölt kell, vagy egy
  dominó, amelynek egyik felére sem kerülhet egy adott pólus. A _Nehéz_ rejtvényekhez egész
  dominókról is gondolkodnod kell, ahogy egy vonal mentén fekszenek: az a dominó, amely biztosan
  mágnes, akárhogy is áll, mindkét fajta pólusból ad egyet; abban a vonalban, ahol már csak
  egyetlen üres lapos mező marad, a hosszában fekvő dominó nem lehet üres lap; és így tovább.
  Minden rejtvénynek pontosan egy megoldása van.
- **Ritkított nyomok**: eltűnik minden olyan szám, amelyre a választott nehézségen nincs
  szükség a megoldáshoz, így jóval nehezebb meglátni, hol kezdj hozzá.
`,O=e({default:()=>k}),k=`# Térkép

Egy térkép tartományokra van osztva. Színezd ki mindegyik tartományt a négy szín egyikével
úgy, hogy két olyan tartomány, amely egy határszakaszon osztozik, ne legyen azonos színű. Azok
a tartományok, amelyek csak egy sarokban érintkeznek, lehetnek egyformák. Néhány tartomány már
ki van színezve, mégpedig úgy megválasztva, hogy pontosan egyféleképpen lehessen befejezni a
térképet.

Két azonos színű szomszédos tartományt piros \`!\` jelöl a köztük lévő határon.

## Irányítás

A **Megoldás** kiszínezi a teljes megoldást. A térkép felvillan, amint minden tartomány ki van
színezve, és semmi nem piros.

### Egér és érintés

- **Húzz** át egy színt: nyomj rá egy tartományra (vagy a térkép alatti egyik
  színmintára), és engedd el egy másik tartományon, hogy azt a színt kapja. Ha üres
  tartományból, a térkép körüli üres helyről vagy a radír-színmintáról húzol, kiürül az a
  tartomány, amelyikre ejted.
- **Kattints egy színmintára** a szín kiválasztásához, majd **kattints** a tartományokra, hogy
  kiszínezd őket; a kiválasztott színmintára újra kattintva megszünteted a választást.
- **Jobb gombbal húzz** egy színt egy üres tartományra, és egy kis pontot ceruzázol be
  abban a színben – ez azt jegyzi meg, hogy a tartomány _lehet_, hogy ilyen színű. Egy
  tartomány több ceruzapontot is viselhet; ha ugyanazt a színt még egyszer odahúzod, a pontja
  eltűnik. Ha ki van választva egy színminta, akkor egy üres tartományon egy sima
  **jobb gombos kattintás** is be- és kikapcsolja a pontját.
- A **Számok** (a szünetmenüben) minden tartományba számot ír, ami jól jön, ha valaki
  mással beszélgetsz egy rejtvényről, és el is rejti őket.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** egy kurzort mozgatnak a térképen; az a tartomány, amelyikben áll,
  körvonalat kap. Az **1**–**4** billentyű kiszínezi ezt a tartományt, a **Space** kiüríti, az
  **Enter** pedig felveszi a színét, így a nyílbillentyűkkel magaddal viheted, és az **Enter**
  gombbal leteheted (vagy a **Space** gombbal ceruzapontként). Ha kétszer megnyomod az
  **Enter** gombot anélkül, hogy elmozdulnál, kiürül a tartomány.
- Az **L** a **Számok** gomb.

## Beállítások

- Annak a rácsnak a **szélessége** és **magassága**, amelyre a térkép rajzolódik, mezőkben.
- **Tartományok**: hány tartományra van vágva a térkép.
- **Nehézség**: a _Könnyű_ rejtvényekben mindig van olyan tartomány, amelynek már csak egy szín
  marad. A _Közepes_ hozzáteszi a szomszédos tartománypárokról szóló következtetéseket,
  amelyeknek ugyanazon a két színen kell osztozniuk. A _Nehéz_ ilyen következtetések láncait
  kívánja meg a térképen keresztül. Mindez találgatás nélkül megoldható. Az _Extrém_ csak annyit
  ígér, hogy a megoldás egyértelmű; lehet, hogy ki kell próbálnod egy színt, és követned kell,
  amíg valami el nem romlik.
`,A=e({default:()=>j}),j=`# Aknák

Lefedett mezőkből álló rács rejt magában néhány aknát. Nyiss fel minden olyan mezőt, amely
alatt _nincs_ akna. Minden felnyitott mező megmutatja, hogy a nyolc szomszédja közül hány akna; ha
aknát nyitsz ki, elveszíted a játszmát.

Ebben a változatban az a csavar, hogy sosem kell találgatnod. Az első kattintás előtt semmi
nincs eldöntve: az aknák csak akkor kerülnek a helyükre, mégpedig úgy, hogy az a mező,
amelyikre az első kattintás esett, üres legyen, és onnantól az egész rács tiszta
következtetéssel kibogozható legyen. Ha valaha úgy érzed, elakadtál, mindig van valahol egy
biztonságos mező, amit a számok már bizonyítanak.

Az állapotsor mutatja, hány zászlót tűztél ki az aknák számához képest, az óra pedig az első
kattintással indul. Ha aknára lépsz, a többi is előbukkan, a rossz helyre tett zászlókat
pedig áthúzza a játék; a végzetes kattintást visszavonhatod és folytathatod, de az állapotsor
megjegyzi a halált.

## Irányítás

### Egér és érintés

- **Kattints** egy lefedett mezőre, hogy felnyisd. Ha üres mezőt nyitsz fel (nincs mellette
  akna), a szomszédai is felnyílnak, és így tovább kifelé.
- **Kattints jobb gombbal** egy lefedett mezőre, hogy zászlót tűzz egy gyanús aknára, és még egyszer,
  hogy elvedd. A megjelölt mezőket nem lehet véletlenül felnyitni.
- **Kattints egy számra**, amely körül már a megfelelő számú zászló áll, és egy csapásra
  felnyílik az összes többi lefedett szomszédja. Egy **középső gombos kattintás** ugyanezen a számon
  ugyanazt teszi.
- A **Tipp** felnyit egy biztonságos mezőt – vagy levesz egy zászlót, amely alatt nincs
  akna –, a rács többi részét pedig rád hagyja. Néhány tipp után is a tiéd a győzelem és a
  kredit.
- A **Megoldás** felfedi az egész elrendezést, és minden aknára zászlót tesz. Ez nem számít
  saját győzelemnek.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** egy kurzort mozgatnak a rácson.
- Az **Enter** úgy hat a kurzor alatti mezőre, mint egy kattintás: felnyit egy lefedett mezőt,
  vagy kitakarít egy olyan szám körül, amelynek már minden zászlaja a helyén van.
- A **Space** zászlót tűz ki vagy vesz le, ugyanúgy, ahogy a jobb gombos kattintás.

## Beállítások

- A rács **szélessége** és **magassága**.
- **Aknák**: hány akna rejtőzzön a rácsban. Darabszám helyett százalékot is megadhatsz, például
  \`20%\`-ot. Nagyon nagy sűrűségnél sokáig tart megoldható rácsot találni.
- **Megoldhatóság biztosítása**: ha be van kapcsolva (ez az alapértelmezés), az elrendezés az
  első kattintás után garantáltan megoldható találgatás nélkül. Kapcsold ki, és közönséges
  véletlen rácsokat kapsz, amelyeknél a végén könnyen maradhat egy tiszta fej-vagy-írás.
`,M=e({default:()=>N}),N=`# Hálózat

Négyzetes lapkákból álló rácsra vezetékhálózatot fektettek, majd minden lapkát véletlenszerűen
elforgattak. Forgasd vissza a lapkákat, amíg mind egyetlen hálózattá nem áll össze: minden
vezetékvégnek a szomszédos lapka vezetékébe kell futnia, és egyetlen vezeték sem mutathat
falnak. A kész hálózat fa, tehát nincs benne zárt hurok.

Azok a lapkák, amelyek már össze vannak kötve a rács közepén álló forráslapkával, kék színnel
látszanak – ez a segítség; a többi szürke marad. A hurok részét alkotó vezeték piros. A lapkák
közötti vastag fekete vonalak falak: vezeték nem mehet át rajtuk, ami nyomot ad arról, hogyan
kell a két oldalukon álló lapkáknak állniuk. Az állapotsor mutatja, hány lapka van éppen áram
alatt.

## Irányítás

### Egér és érintés

- **Kattints** egy lapkára, és az óramutató járásával ellentétesen fordul; **kattints jobb gombbal**,
  és az óramutató járásával megegyezően.
- **Kattints a középső gombbal** egy lapkára, hogy **rögzítsd**, ha már biztos vagy benne. A rögzített lapka
  árnyékolt, és nem fordul el, amíg egy újabb középső gombos kattintás fel nem oldja. A jobb gombos kattintás
  elforgatja a lapkát ahelyett, hogy rögzítené, tehát a rögzítés a középső gombos kattintás dolga.
- A **Rögzítés** (a lakat gomb a Vissza mellett) bekapcsolásával egy sima kattintás
  elforgatás helyett rögzíti vagy feloldja a lapkát – érintőpadon ez könnyebb, mint a
  középső gombos kattintás. A jobb gombos kattintás továbbra is az óramutató járásával
  megegyezően forgat. Nyomd meg újra, hogy ismét forgass.
- A **Keverés** minden nem rögzített lapkát friss, véletlen állásba forgat – jó kis
  frissítés, ha megakadt egy rejtvény.
- Körbeérő rácson a négy **nyílgomb** görgeti a nézetet, így az ellentétes széleken lévő lapkák
  egymás mellé hozhatók.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** egy kurzort mozgatnak a rácson.
- Az **Enter** vagy az **A** az óramutató járásával ellentétesen forgatja a kurzor alatti
  lapkát, a **D** az óramutató járásával megegyezően, az **F** pedig félfordulattal.
- A **Space**, az **S** vagy az **L** rögzíti a kurzor alatti lapkát, illetve feloldja. Egérrel
  a **Shift-kattintás** is rögzít egy lapkát, pontosan úgy, mint a középső gombos kattintás.
- A **K** a **Rögzítés**, a **J** a **Keverés** gomb.
- Körbeérő rácson a **Shift + nyílbillentyűk** görgetik a nézetet (ugyanúgy, ahogy a négy
  nyílgomb), így az ellentétes széleken lévő lapkák egymás mellett láthatók.
  A **Ctrl + nyílbillentyűk** azt a forráslapkát mozgatják, ahonnan a kék kiemelés terjed.

## Beállítások

- A rács **szélessége** és **magassága** lapkákban.
- **A falak körbeérnek**: a vezetékek a rács egyik szélén kifuthatnak, és a szemközti szélen
  folytatódhatnak.
- **Falak valószínűsége**: 0 és 1 közötti szám, amely megadja, hogy a vezeték nélküli élek
  mekkora hányada kap falat. A falak sosem változtatnak a vezetékek elrendezésén: ugyanaz a
  véletlenmag mindig ugyanazt a rácsot adja, tehát a valószínűség növelése csak nyomokat tesz
  hozzá.
- **Egyértelmű megoldás biztosítása**: a rejtvény rendes esetben úgy készül, hogy a lapkáknak
  pontosan egy állása jó. Kapcsold ki gyorsabb generáláshoz és néhanapján egy-egy többértelmű
  folthoz.
`,P=e({default:()=>F}),F=`# Csúszóhálózat

Minden lapkán van egy darabka vezeték: egyenes szakasz, sarok, T-elágazás vagy ponttal lezárt
szabad vég. Helyesen összerakva a darabok egyetlen hálózatot alkotnak, amely az árnyékolt
középső lapkán ülő áramforrástól minden lapkát elér, hurkok nélkül, és anélkül, hogy bármelyik
ág a semmibe mutatna. A rácsot egész sorok és oszlopok tologatásával keverték össze, tehát csak
így lehet rendbe is tenni: lapkát forgatni nem lehet, csak mozgatni.

A jelenleg áram alatt lévő lapkák kékek, a többi szürke marad. A lapkák közötti vastag fekete
vonalak falak. Falon át semmi nem kapcsolódhat, tehát megmondják, hol nincs biztosan
összeköttetés a kész hálózatban.

## Irányítás

### Egér és érintés

- **Kattints** egy sor vagy oszlop melletti nyílra, és az egész vonal egy lépést tolódik arra,
  amerre a nyíl mutat. A végén kilökött lapka ugyanennek a vonalnak a másik végén jön vissza.
  **Kattints jobb gombbal** egy nyílra, hogy a vonalat a másik irányba told.
- A középső sor és oszlop mellett nincs nyíl: az áramforrás sosem mozdul.
- A **Megoldás** egyből a kész hálózatra ugrik, hogy összevethesd a saját próbálkozásoddal.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** a nyilak gyűrűje mentén léptetik a kiemelést.
- Az **Enter** a kiemelt vonalat a nyila irányába tolja, a **Space** pedig visszafelé.

## Beállítások

- A rács **szélessége** és **magassága**.
- **A falak körbeérnek**: ha be van kapcsolva, a jobb szél balra folytatódik, az alsó pedig
  felül, így a vezetékek (és a falak) átléphetik a rács szélét. A szaggatott keret körbeérő
  rácsot jelöl; a folytonos vastag keret körben fal.
- **Falak valószínűsége**: a lapkák használaton kívüli élei közül hány kap falat, 0-tól (egy
  sem) 1-ig (minden él, amit a kész hálózat nem használ). Minél több a fal, annál könnyebb a
  rejtvény. A falak a rács többi részétől függetlenül dőlnek el, tehát ugyanaz a véletlenmag
  nagyobb falvalószínűséggel ugyanazt a rejtvényt adja, csak több nyommal.
- **Keverő lépések száma**: hagyd 0-n az alapos összekeveréshez, vagy adj meg egy számot, és
  pontosan ennyi tolással keveredik össze a tábla. Ilyenkor az a cél, hogy megtaláld és
  visszacsináld őket; az állapotsor mutatja a célt.
`,I=e({default:()=>L}),L=`# Minta

A rács minden mezője titokban vagy fekete, vagy fehér. Az egyes sorok mellett és az oszlopok
fölött álló számok sorrendben megadják az adott vonalban lévő fekete blokkok hosszát, azzal,
hogy két egymást követő blokk között legalább egy fehér mező van. Színezd be a fekete mezőket
úgy, hogy minden sor és minden oszlop egyezzen a saját számaival. Az ilyen rejtvényeket
általában nonogramnak vagy picrossnak hívják.

Az itteni képek véletlenszerűen készülnek, tehát nincs kitalálható ábra: mindent a számokból
kell kikövetkeztetned. Minden rejtvényt előre ellenőrzünk, hogy egyszerre egy sorról vagy
oszlopról gondolkodva megoldható legyen, így sosem kell próbálgatnod.

Egy vonal számai szürkére váltanak, amint a vonalban lévő fekete blokkok megfelelnek nekik, és
pirosra, ha a már kész blokkok sehogy sem illenek a számokhoz. A rejtvény akkor kész, ha minden
sor és oszlop egyezik a számaival; a pontok csak az emlékezetedet segítik.

## Irányítás

### Egér és érintés

- **Kattints** egy mezőre, hogy feketére színezd; a fekete mezőre újra kattintva kiürül.
- **Kattints jobb gombbal**, hogy pontot tegyél egy mezőre, ami azt jelenti: biztosan fehér; a pontos
  mezőre jobb gombbal kattintva kiürül.
- **Húzással** egy szuszra egy egyenes sornyi mezőt színezhetsz feketére,
  **jobb gombbal húzva** pedig egy sornyi pontot rakhatsz le. Csak azok a mezők változnak,
  amelyek ugyanabban az állapotban voltak, mint amelyiken elindultál, tehát ha egy pontsort
  húzol végig a fekete mezőid fölött, azok érintetlenek maradnak.
- **Kattints a középső gombbal** egy mezőre, hogy visszatöröld ismeretlenre. Egérrel a görgőt
  lenyomva tartva húzhatsz is: így egy egész téglalapot kiürítesz, bármi is van benne.
- A **Radír** (a radír gomb a Vissza mellett) bekapcsolásával a sima kattintás is ugyanezt teszi:
  kattints egy mezőre a törléséhez, vagy húzz, hogy egy egész téglalapot kiüríts. Nyomd meg
  újra, hogy ismét feketére színezz.
- A **Tipp** kitölt egy mezőt – mindig olyat, amelyet egyetlen sor vagy oszlop már
  önmagában eldönt –, vagy kijavít egy olyat, amely ellentmond a megoldásnak. A rejtvény
  folytatódik, és néhány tipp után is a tiéd a győzelem és a kredit.
- A **Megoldás** kitölti helyetted az egész képet.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** mozgatják a kurzort.
- Az **Enter** feketére színezi a kurzor alatti mezőt vagy törli, a **Space** pedig pontot rak
  oda, illetve levesz.
- Tartsd nyomva a **Ctrl** billentyűt a kurzor mozgatása közben, és útközben feketére színez, a
  **Shift** pontokat rak le, a kettő együtt pedig töröl.
- Egérrel a **Shift-kattintás** ugyanúgy kiüríti a mezőket, mint a középső gombos kattintás.
- Az **E** a **Radír** gomb.

## Beállítások

- A rács **szélessége** és **magassága**. Az előre beállított méretek 10×10-től 30×30-ig mennek; a
  nagyobb rácsok elkészítése kicsit tovább tart.
`,R=e({default:()=>z}),z=`# Gyöngyök

Mezőkből álló rács, néhány mezőben egy fekete vagy fehér gyönggyel. Rajzolj egyetlen zárt
hurkot, amely mezőközépről mezőközépre halad, vízszintesen vagy függőlegesen, sosem
keresztezi önmagát és nem is ágazik el. A huroknak nem kell minden mezőt érintenie, de
minden gyöngyön át kell haladnia:

- a **fekete gyöngynél** a hurok fordul, majd egyenesen fut át mindkét mezőn, amely a
  hurok mentén a gyöngy mellett van;
- a **fehér gyöngynél** a hurok egyenesen halad át, és a gyöngy melletti két mező közül
  legalább az egyikben fordul.

Csak azok a mezők számítanak, amelyeket a hurok közvetlenül a gyöngy előtt és után érint,
nem pedig minden mező, amely a rácsban hozzáér.

Az a gyöngy, amelynek a szabálya már sérül, piros glóriát kap. Amint bármilyen zárt hurok
létrejön, a rajta kívüli összes szakasz pirosan látszik, ahogy minden olyan mező is,
amelyben három vagy több szakasz fut össze.

## Irányítás

A **Megoldás** megrajzolja az egész hurkot. A rejtvény akkor kész, ha a hurok egyetlen
zárt kör, és semmi sem piros.

### Egér és érintés

- **Kattints** egy rácsélre (két mező határának közelébe), hogy hurokszakaszt rajzolj rá;
  újabb kattintásra eltűnik.
- **Húzz** végig egymást követő mezőkön, hogy egyszerre rajzolj meg egy egész szakaszsorozatot.
  Ha meglévő szakaszok mentén húzol, azok eltűnnek; ha a húzás meglévő szakaszokon indul, majd
  üres mezőkre fut tovább, előbb töröl, aztán rajzol. Ha visszahúzol egy már érintett mezőre,
  lerövidítheted az útvonalat, mielőtt elengeded; ha visszatérsz arra a mezőre, ahonnan indultál,
  bezárod a hurkot.
- **Kattints jobb gombbal** egy rácsélre, hogy kis keresztet tegyél rá, ami azt jelenti: „ide nem
  jön szakasz”; kereszten át nem lehet szakaszt húzni, amíg le nem szeded.
  **Jobb gombbal húzd** végig több mezőn, hogy minden érintett élre keresztet tegyél.
- A **Kereszt** (a kereszt gomb a Vissza mellett) bekapcsolásával egy sima kattintás keresztet
  tesz le vagy szed fel, egy húzás pedig egy egész sort rak le belőlük: ahogy a
  rajzolásnál, a kereszteken induló húzás előbb felszedi őket, és átugorja azokat az
  éleket, amelyeken már van szakasz. Nyomd meg újra, hogy ismét a hurkot rajzold.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** mozgatnak egy kurzort. A **Ctrl+nyíl** megrajzolja vagy törli a
  szakaszt a kurzormező adott oldalán, a **Shift+nyíl** keresztet tesz oda vagy szed le
  onnan. Az **Enter** billentyűs húzást indít a kurzormezőről: mozogj a
  nyílbillentyűkkel, és nyomd meg újra az Enter billentyűt az útvonal rögzítéséhez, vagy a
  **Space**-t, ha inkább elveted.
- Az **X** a **Kereszt** gomb; bekapcsolva a billentyűs húzás is kereszteket rak le.

## Beállítások

- A rács **szélessége** és **magassága** mezőben (legalább öt-öt).
- **Nehézség**: a _Könnyű_ rejtvényeket az egyes gyöngyök és a közvetlenül mellettük lévő
  mezők végiggondolásával oldod meg. A _Trükkös_ rejtvényeknél azt is észre kell venned,
  mikor zárna be egy szakasz túl korán egy kis hurkot, magukra hagyva a többi gyöngyöt.
  (Az 5×5-ös trükkös rács könnyűként készül, ahogy az eredetiben is.)
- **Megoldhatatlan is lehet**: minden gyöngy megmarad, amit a hurok elbír, ahelyett hogy a
  program a legszűkebb, egyértelműen megoldható készletre nyesné őket. Az eredetiből
  örökölt hibakereső beállítás.
`,B=e({default:()=>V}),V=`# Bábuk

Bábukkal teli tábla egy üres lyukkal, véletlen táblán néhánnyal. Egy bábu átugorhat vízszintesen vagy
függőlegesen egy szomszédos bábun a közvetlenül mögötte lévő üres lyukba; az átugrott bábu
lekerül a tábláról. Ugorj tovább, amíg egyetlen bábu marad a táblán.

Ez a régi bábuugratós játék, a peg solitaire. A **Kereszt** tábla az ismerős angol
elrendezés, a **Nyolcszög** az európai (ezen az üres lyuk nem középen van, mert középről
indulva nem lehet befejezni), a **Véletlen** táblák pedig a gép által növesztett furcsa
alakzatok. Az üres, lyuk nélküli területek egyszerűen nem tartoznak a táblához.

Véglegesen nem tudsz elakadni: ha nincs több ugrás, és egynél több bábu maradt, a játszma
véget ér, de a Vissza akármeddig visszavisz. Az állapotsor a maradék bábukat és a megtett
lépéseket számolja.

## Irányítás

### Egér és érintés

- **Húzz** egy bábut, és ejtsd egy pontosan két mezővel arrébb lévő üres lyukba, egyenes
  vonalban, egy másik bábu felett. Bárhová máshová ejtve a bábu visszakerül a helyére.
- Vagy **kattints** egy bábura, hogy felvedd (narancssárga lesz, és megjelölődnek a
  lyukak, ahová leérkezhet), majd kattints arra a lyukra, ahová ugrasson. Ha ugyanarra a
  bábura kattintasz újra, leteszed.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** mozgatnak egy kurzort a táblán.
- Az **Enter** vagy a **Space** felveszi a kurzor alatti bábut; ezután egy nyíl abba az
  irányba ugratja, ha az szabályos lépés, az újabb **Enter** pedig visszateszi.

## Beállítások

- A tábla **szélessége** és **magassága**, legalább 4-4.
- **Tábla típusa**: a _Kereszt_ és a _Nyolcszög_ a hagyományos elrendezések, és csak
  7×7-ben érhetők el. A _Véletlen_ minden alkalommal más alakú táblát ad, mindig olyat,
  amely egyetlen bábuig fogyasztható, mert az ugrásokat visszafelé lejátszva épült fel.
`,H=e({default:()=>U}),U=`# Látótávolság

A rács néhány mezőjében szám áll. Feketíts be mezőket úgy, hogy egyszerre négy dolog
teljesüljön:

- számot tartalmazó mező nem lehet fekete;
- két fekete mező nem érhet össze éllel (sarokkal igen);
- a fehér mezők egyetlen összefüggő tartományt alkotnak, élekkel összekapcsolva;
- minden szám azt adja meg, hány fehér mezőt lát a saját mezője: önmagát, plusz mindent
  egyenes vonalban felfelé, lefelé, balra és jobbra, amíg egy fekete mező vagy a rács
  széle útját nem állja.

Ez a Nikoli _Kurodoko_ nevű rejtvénye, más néven _Kuromasu_ vagy _Where is Black Cells_.
Ha egy szám már pontosan eleget lát, akkor minden belátott sávja után közvetlenül fekete
mező áll; ha pedig egy szám túl sokat látna abban az esetben, ha egy magányos ismeretlen
mező fehér volna, akkor oda fekete mező kerül. Sosem helyes olyan mezőt befeketíteni,
amely két fehér csoport egyetlen összekötő kapcsa. Minden rejtvény befejezhető ilyen
gondolatmenetekkel; tippelni sosem kell.

A hibák pirosan látszanak: az összeérő fekete mezők köré piros keret kerül, a fő
tartományról leszakadt fehér mezők piros körvonalat kapnak, és pirosra vált az a szám,
amely már nem láthat elég mezőt, vagy amely biztosan túl sokat lát. A rejtvény akkor kész,
ha egyetlen szabály sem sérül; a fehér mezőket nem kell kipontozni.

## Irányítás

### Egér és érintés

- **Kattints** egy mezőre, hogy befeketítsd. Újabb kattintásra pont lesz belőle (vagyis
  olyan mező, amelyről tudod, hogy fehér), még egyre pedig üres.
- A **jobb gombos kattintás** visszafelé lépteti: előbb pont, aztán fekete, aztán üres.
- **Húzással** több mezőt festhetsz be egy menetben, **jobb gombbal húzva** pedig
  fordított sorrendben söpörheted végig őket. Csak azok a mezők változnak, amelyek
  ugyanolyanok voltak, mint az első, így egy pontozó söprés békén hagyja a fekete mezőidet.
- A **Radír** (a radír gomb a Vissza mellett) bekapcsolásával egy kattintás inkább kiüríti a
  mezőt, egy húzás pedig minden fekete mezőt és pontot, amelyen áthalad, akármelyik is.
  Nyomd meg újra, hogy ismét fess.
- A **Tipp** kitölt egy olyan mezőt, amely a táblán lévőkből már következik — vagy kijavít
  egy mezőt, amely ellentmond a megoldásnak. A rejtvény játékban marad, és néhány tipp után
  is a tiéd marad a győzelem, és vele a kredit is.
- A **Megoldás** kitölti az egész rácsot, minden fehér mezőt kipontozva.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** mozgatnak egy kurzort a rácson.
- Az **Enter** úgy hat a kurzor alatti mezőre, mint egy kattintás, a **Space** pedig mint
  egy jobb gombos kattintás.
- Az **E** a **Radír**, a **H** a **Tipp** gomb.

## Beállítások

- A rács **szélessége** és **magassága**. Az előre beállított méretek 9×6-tól 16×11-ig terjednek; 30×30-ig
  bármi generálható, bár az egy-két mezős apró rácsokhoz nincs tisztességes rejtvény.
`,W=e({default:()=>G}),G=`# Téglalapok

A rács néhány mezőjében szám áll. Oszd fel az egész rácsot téglalapokra úgy, hogy minden
téglalapban pontosan egy szám legyen, és az a szám a téglalap területe (a szélessége
szorozva a magasságával). Egy 6-os például 1×6-os, 2×3-as, 3×2-es vagy 6×1-es tömbben ül;
hogy melyikben, és hol áll benne a szám, azt a szomszédokból kell kihoznod.

A rejtvények véletlenszerűen készülnek, és a számok alapesetben úgy kerülnek a helyükre,
hogy a rácsnak csak egyetlen felosztása jó. Az eredeti rejtvény a japán Nikoli magazinból
származik, ahol Shikaku néven ismerik.

## Irányítás

### Egér és érintés

- **Húzz** végig egy területen, hogy téglalapot rajzolj köré: a körvonala megjelenik, a
  belsejében lévő vonalak pedig eltűnnek. Ha egy rácsvonal mentén húzol, csak azt az egy
  vonalat rajzolod meg.
- **Kattints** egy rácsvonalra, hogy hozzáadd vagy elvedd azt az egy élt.
- **Jobb gombbal húzz** végig egy területen, hogy a benne lévő vonalakat töröld, a
  körvonalát viszont békén hagyd. Rácsvonalon a **jobb gombos kattintás** ugyanúgy vált, mint egy
  sima kattintás.
- A **Radír** (a radír gomb a Vissza mellett) bekapcsolásával a sima húzás is töröl: húzz
  végig egy területen, hogy a benne lévő vonalakat töröld, vagy kattints egy rácsvonalra,
  hogy eltávolítsd. Amíg be van kapcsolva, a kattintás sosem ad hozzá vonalat. Nyomd meg
  újra, hogy ismét rajzolj.
- A **Megoldás** kitölti helyetted az egész felosztást.

Húzás közben a készülő téglalap körvonala látszik, a mérete pedig megjelenik az
állapotsorban. A megfelelő méretű, kész téglalap árnyékolást kap. A már biztosan hibás
zárt téglalapot a program megjelöli: a száma pirosra vált, ha a téglalap rossz méretű
hozzá, és sraffozást kap, ha egyáltalán nincs benne szám. A rejtvény akkor kész, ha minden
mező egy helyes téglalapon belül van.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** mozgatnak egy kurzort.
- Az **Enter** téglalap húzását indítja a kurzortól; vidd a kurzort a szemközti sarokba, és
  nyomd meg újra az **Enter** billentyűt a megrajzolásához.
- A **Space** ugyanígy működik, csak a téglalap belsejét törli.
- Az **E** a **Radír** gomb.

## Beállítások

- A rács **szélessége** és **magassága**. Az előre beállított méretek 7×7-től 19×19-ig mennek.
- **Tágítási tényező** – kisebb rácsot generál, majd a kért méretre nyújtja, így a
  rejtvényben kevesebb, de nagyobb téglalap lesz. A 0 (az alapérték) azt jelenti, hogy
  nincs nyújtás; 0,5 esetén a kiinduló rács mindkét irányban a végleges méret kétharmada.
  A nagy értékektől már csak néhány téglalap marad, és a rejtvény triviálissá válik.
- **Egyértelmű megoldás biztosítása** – alapból be van kapcsolva. Kikapcsolva a számok
  bárhová kerülhetnek a téglalapjukon belül, ami gyorsabb, és több megoldású rejtvényeket
  is adhat; ilyenkor bármely érvényes felosztás megoldásnak számít.
`,se=e({default:()=>K}),K=`# Azonos színek

A tábla tele van színes mezőkkel. Válassz ki egy csoportot két vagy több azonos színű,
oldalukkal összeérő mezőből, és tüntesd el; a rés fölötti mezők leesnek, és ha egy oszlop
kiürül, a tőle jobbra lévők átcsúsznak, hogy bezárják a hézagot. Akkor nyersz, ha az egész
táblát letakarítottad. Ha maradnak mezők, de két összeérő mező sem azonos színű, nincs mit
tenni – vonj vissza, és próbáld más sorrendben.

A nagy csoportok sokkal többet érnek a kicsiknél: _n_ mező eltüntetése (_n_ − 2)² pontot
hoz az alapértelmezett pontozással, tehát egy pár semmit, három mező egy pontot, tíz mező
64-et. Az állapotsor a pontszámodat mutatja, kijelölt csoport esetén pedig azt is, hány
mezőből áll, és mennyit érne.

Minden generált tábla (hacsak ki nem kapcsolod ezt a beállítást) úgy készül, hogy teljesen
_le lehessen_ takarítani – bár olyan sorrendet találni, amely egyben jó pontszámot is ad,
már a te dolgod.

Megoldás gomb nincs: a gép tudja, hogy a tábla letakarítható, de nem árulja el, hogyan.

## Irányítás

### Egér és érintés

- **Kattints** egy mezőre, hogy kijelöld az egész csoportot, amelyhez tartozik; a csoport
  világosabban, vastag körvonallal jelenik meg. **Kattints újra a kijelölt csoportra**, és
  eltűnik. Ha máshová kattintasz, a kijelölés csak arrébb kerül.
- **Kattints jobb gombbal** a kijelölt csoportra, ha meg akarod szüntetni a kijelölést.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** mozgatnak egy kurzort a táblán (a széleken átfordulva).
- Az **Enter** kijelöli a kurzor alatti csoportot, újabb megnyomásra pedig eltünteti.
- A **Space** a kijelölt csoporton megszünteti a kijelölést.

## Beállítások

- A tábla **szélessége** és **magassága**.
- **Színek száma**, 3-tól 9-ig (a 2 akkor megengedett, ha nincs bekapcsolva a
  megoldhatóság biztosítása). Több szín kisebb csoportokat és nehezebb táblát jelent.
- **Pontozás**: _(n−2)²_ az alapértelmezett, vagy _(n−1)²_, amely a párokat is jutalmazza.
- **Megoldhatóság biztosítása**: bekapcsolva a tábla üres tábláról visszafelé épül fel, így
  legalább egy letakarító sorrend biztosan létezik. Kikapcsolva sima véletlen táblát kapsz,
  amely gyorsabban készül el, és általában nagyobb tartományok vannak rajta, viszont
  előfordulhat, hogy nem takarítható le.
`,ce=e({default:()=>le}),le=`# Útjelző

Minden mezőn van egy nyíl, és néhány mezőn szám is. Fűzd a mezőket egyetlen, 1-től N-ig
számozott útvonalba (N a mezők száma) úgy, hogy minden mező rákövetkezője valahol a saját
nyila mentén legyen: az 1-es mező a 2-es felé mutat, az a 3-as felé, és így tovább. A
rákövetkező a nyíl irányában bármilyen messze lehet, nem csak közvetlenül mellette. Az
utolsó mező, amelyen csillag van, sehová sem mutat.

Az első és az utolsó szám mindig látszik, és mellettük annyi másik, hogy az útvonal
egyértelmű legyen. Minden rejtvénynek pontosan egy megoldása van, és pusztán logikával
megtalálható.

A hibák pirosan látszanak: két azonos számot kapott mező, olyan szám, amelynek a
rákövetkezője nem a nyila mentén van, vagy olyan lánc, amely túlfut a megadott számán. A
rejtvény akkor kész, ha az 1-től N-ig tartó számok végigfutnak minden mezőn, és sehol
nincs piros.

## Irányítás

### Egér és érintés

- **Húzz** az egyik mezőről a nyila mentén egy másikra, hogy a második az első
  rákövetkezője legyen. Ha **jobb gombbal húzol**, fordított irányba dolgozol: egy
  mezőről arra a mezőre, amelynek előtte kell jönnie.
- Ha két összekapcsolt mező közül az egyikben szám van, a szám végigterjed az egész
  láncon, és kéken jelenik meg. Az olyan lánc, amelyben még nincs szám, betűt és
  eltolásokat kap címkének (\`a\`, \`a+1\`, \`a+2\`, ...); amint hozzáér egy számozott mezőhöz, a
  betűkből számok lesznek. Ha egy láncot olyan mezőre fűzöl, amely már össze van kötve, az
  új kapcsolat lép a régi helyébe.
- Minden mező, amelynek még hiányzik az előzménye, kis pontot mutat a bal alsó sarkában, a
  nyíl pedig elhalványul, amint a mezőjének van rákövetkezője. A feladat tehát mindig az,
  hogy egy erős nyilat köss össze egy pontozott mezővel.
- **Kattints jobb gombbal** egy mezőre, hogy mindkét kapcsolatát megszüntesd. **Húzd** le a mezőt a
  tábláról, és ugyanez történik, vagy **jobb gombbal húzd** le a tábláról, hogy az egész
  láncát szétbontsd.
- A **Szétbontás** (a szakadt lánc gomb a Vissza mellett) bekapcsolásával egy mezőre kattintva
  az egész láncát szétbontod, minden kapcsolatával együtt, és ha lehúzol egy mezőt a
  tábláról, ugyanez történik. A mezőről mezőre húzás továbbra is összeköti őket. Nyomd meg
  újra a kikapcsoláshoz.
- A **Megoldás** kitölti a teljes útvonalat.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** mozgatnak egy kurzort.
- Egy mezőn az **Enter** kapcsolatot indít onnan; vidd a kurzort a rákövetkezőre, és nyomd
  meg újra az **Enter** billentyűt a kapcsolat létrehozásához (ugyanazon a mezőn megnyomva
  megszakítod).
- A **Space** vagy az **X** megszünteti a kurzor alatti mező kapcsolatait; a **Shift + X**
  az egész láncát szétbontja.
- A **B** a **Szétbontás** gomb.

## Beállítások

- A rács **szélessége** és **magassága**, 2-től 12 mezőig (a 2×2 túl kicsi ahhoz, hogy
  működjön).
- **Kezdet és vég a sarkokban**: ha be van kapcsolva, az 1 mindig a bal felső, az N pedig a
  jobb alsó mezőben van. Különben mindkét vég véletlenszerű helyre kerül, de így is
  látszik mindkettő.
`,ue=e({default:()=>de}),de=`# Egyediek

A rács minden mezőjében szám áll. Sötétíts el néhány mezőt (elrejtve a bennük álló
számot) úgy, hogy egyszerre három dolog teljesüljön:

- egyetlen sor és egyetlen oszlop fehér mezői között sem szerepelhet ugyanaz a szám
  többször;
- két fekete mező nem érhet össze éllel (sarokkal igen);
- a fehér mezők egyetlen összefüggő tartományt alkotnak, élekkel összekapcsolva.

Ez a Nikoli _Hitori_ nevű rejtvénye. Jó kezdés két olyan egyforma számot keresni, amely
között egy mező van: a párból az egyiknek feketének kell lennie, tehát a köztük lévő mező
biztosan fehér. Ha két egyforma szám közvetlenül egymás mellett áll, akkor a soruk vagy
oszlopuk minden további ilyen száma fekete.

A hibák pirosan látszanak: az összeérő fekete mezők köré piros keret kerül, a fő
tartományról leszakadt fehér mezők piros körvonalat kapnak, és pirosan jelenik meg két
bekarikázott mező, ha egy vonalban vannak, és ugyanaz a szám áll bennük.

A rejtvény akkor kész, ha egyetlen szabály sem sérül; a fehér mezőket nem kell bekarikázni.

## Irányítás

### Egér és érintés

- **Kattints** egy mezőre, hogy elsötétítsd; újabb kattintásra visszaáll.
- A **jobb gombos kattintás** kört rajzol a szám köré, ezzel rögzítve, hogy az a mező biztosan
  fehér; újabb jobb gombos kattintásra a kör eltűnik. Bármelyik kattintás törli azt a jelet, amely
  már a mezőn van.
- A **Megoldás** kitölti az egész rácsot, minden fehér mezőt bekarikázva.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** mozgatnak egy kurzort a rácson (a széleken átfordulva).
- Az **Enter** elsötétíti vagy visszaállítja a kurzor alatti mezőt, a **Space** pedig
  bekarikázza, illetve leveszi róla a kört.

## Beállítások

- A rács **szélessége** és **magassága**, generált rejtvényeknél 2-től 20-ig.
- **Nehézség**: a _Könnyű_ rejtvényekhez csak a közvetlen érvek kellenek – egy fekete mező
  fehérré teszi a szomszédait, egy bekarikázott szám feketévé az ikreit, ott van a köztes
  mezős pár és az egymás melletti pár mintája, az egyetlen kijáratú fehér mező, valamint a
  sarkokban előforduló kis minták. A _Trükkös_ rejtvényeknél azt is észre kell venned,
  mikor vágná ketté egy mező elsötétítése a fehér tartományt, és egy mezővel eltolt
  párokból álló párokat is használnod kell. Minden rejtvénynek pontosan egy megoldása van.
`,fe=e({default:()=>pe}),pe=`# Tizenhat

Tologatós rejtvény üres mező nélkül. Minden mezőben egy számozott lapka ül, és egyetlen
lapka helyett egy egész sort vagy oszlopot tolsz el egy lépéssel. A szélen kitolt lapka
rögtön visszajön ugyanannak a vonalnak a másik végén, mintha a rácsot egy fánkra tekerték
volna. Rendezd a lapkákat úgy, hogy a bal felső saroktól kezdve 1-től sorban kövessék
egymást, balról jobbra, majd soronként lefelé.

## Irányítás

### Egér és érintés

- **Kattints** a szélen lévő nyilak egyikére, hogy azt a sort vagy oszlopot egy lépéssel
  eltold a nyíl irányába. A nyílon a **jobb gombos kattintás** az ellenkező irányba tolja a
  vonalat.
- A **Megoldás** egyszerűen a rendezett rácsra cseréli a táblát. Utat nem mutat hozzá, de
  tiszta táblát ad, amelyen manővereket próbálgathatsz.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** a szélen körbefutó nyilak gyűrűjén léptetik a kiemelést.
- Az **Enter** a kiemelt vonalat a nyila irányába tolja, a **Space** pedig az ellenkező
  irányba.

## Beállítások

- A rács **szélessége** és **magassága**. Azokon a rácsokon, ahol mindkét oldal páratlan,
  az összes elrendezésnek csak a fele érhető el, ezért a generátor mindig csak olyat ad,
  amelyik kirakható.
- **Keverő lépések száma**: hagyd 0-n a teljesen véletlenszerű elrendezéshez, vagy adj meg
  egy számot, és a program pontosan ennyi egyszeres tolással keveri össze a rendezett
  rácsot. Ilyenkor az a feladat, hogy kitaláld, mely tolások történtek, és ugyanennyi
  lépésben visszacsináld őket; minél több keverő lépést kérsz, annál valószínűbb, hogy
  létezik rövidebb megoldás is.
`,me=e({default:()=>he}),he=`# Átlók

Üres mezőkből álló rács, néhány sarkán bekarikázott számmal. Húzz minden mezőbe egy átlót,
bármelyik irányba, úgy hogy:

- minden bekarikázott számhoz pontosan annyi vonal érjen hozzá a sarokpontjában (a 4 egy
  kereszt közepén ül, a 0 körül minden közeli vonal elfelé dől);
- a vonalak sehol ne álljanak össze zárt hurokká.

Az a szám, amelynek már túl sok vonala van, vagy amely már nem kaphat eleget, pirosra
vált, és pirosan látszik minden hurokban részt vevő vonal is. A rejtvény akkor kész, ha
minden mezőben van vonal, és semmi sem piros.

## Irányítás

### Egér és érintés

- **Kattints** egy mezőre, hogy \`\\\` kerüljön bele; újabb kattintásra \`/\` lesz belőle, még
  egyre pedig üres.
- A **jobb gombos kattintás** visszafelé lépteti: \`/\`, aztán \`\\\`, aztán üres. Így a mezőt bármelyik
  irányba beállíthatod akár csak jobb gombos kattintással is.
- A **Megoldás** kitölti az egész rácsot.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** mozgatnak egy kurzort a rácson.
- Az **Enter** úgy lépteti a kurzor alatti mezőt, mint egy kattintás, a **Space** pedig
  mint egy jobb gombos kattintás.

## Beállítások

- A rács **szélessége** és **magassága** mezőben.
- **Nehézség**: a _Könnyű_ rejtvények mezőről mezőre haladva megoldhatók – egy szám, amely
  már teljesült, vagy amelynek minden maradék mezőre szüksége van, illetve azok a mezők,
  ahol a két vonal egyike hurkot zárna be. A _Nehéz_ rejtvényekhez arról is gondolkodnod
  kell, mely mezőpárok dőlnek szükségszerűen ugyanabba az irányba még azelőtt, hogy tudnád,
  melyikbe, és milyen tartományokat zárna el egy vonal a rács szélétől. Tippelni sosem
  kell; minden rejtvénynek pontosan egy megoldása van.
`,ge=e({default:()=>_e}),_e=`# Solo

Töltsd ki a négyzetes rácsot számjegyekkel úgy, hogy minden sorban, minden oszlopban és
minden vastagon körberajzolt blokkban minden számjegy pontosan egyszer szerepeljen. Néhány
mező nyomként előre adott; a többit neked kell kitalálnod. A szokásos 3×3-as rejtvény a
jól ismert sudoku, de a blokkok téglalapok is lehetnek (egy 2×3-as rejtvényben hat darab
3×2-es blokk van), a rács pedig akár 16×16-os is lehet – ilyenkor az a, b, c… betűk állnak
a 9 fölötti számjegyek helyett.

Három változat kapcsolható be:

- **X**: a két fő átlónak, amelyek halványan árnyékoltak, szintén tartalmaznia kell minden
  számjegyet.
- **Kirakós**: a blokkok szabálytalan alakúak, és rejtvényről rejtvényre változnak.
- **Killer**: nincsenek előre adott számjegyek. Helyettük a rács szaggatott vonalú
  „ketrecekre” oszlik, mindegyiken a benne álló számjegyek összegével. Egy ketrecben
  ugyanaz a számjegy nem fordulhat elő kétszer.

Minden rejtvénynek pontosan egy megoldása van, és az a választott nehézségi szinten mindig
tiszta logikával elérhető.

## Irányítás

Pirosan jelennek meg azok a számjegyek, amelyek ütköznek egy másikkal a sorukban,
oszlopukban, blokkjukban, átlójukban vagy ketrecükben, ahogy az a ketrec is, amelyben a
számjegyek nem adják ki az összeget. A **Tipp** kitölt egy mezőt – a legkönnyebbet a még
nyitottak közül, vagy az első olyan számjegyet javítja, amely ellentmond a megoldásnak –,
a többit pedig rád hagyja; a rejtvény folytatódik, és néhány tipp után is a tiéd a győzelem
és a kredit. A **Megoldás** beírja a teljes megoldást, és lezárja a rejtvényt.

### Egér és érintés

- **Kattints** egy üres mezőre, hogy kijelöld, majd írj bele számjegyet a képernyőn lévő
  billentyűkkel (a betűk a 9 fölötti számjegyek). Ha még egyszer kattintasz a kijelölt mezőre,
  megszűnik a kijelölés.
- A billentyűkön a **⌫** újra kiüríti a kijelölt mezőt, a **✎** pedig bekapcsolva tartja
  a ceruzajeleket, így a következő választásod kis jegyzetként kerül be, nem válaszként.
- **Kattints jobb gombbal** egy mezőre, hogy rögtön **ceruzajelekhez** jelöld ki. A ceruzajelek
  csak a gondolkodást segítik; a játék nem törődik velük, és egy beírt számjegy letörli
  őket.
- A szünetmenü **Jelek** gombja minden üres mezőt feltölt a teljes ceruzajel-készlettel –
  azoknak, akik szívesen indulnak mindenből, és onnan húzzák ki a jelölteket.
- A **Kiemelés** (a nagyító a Vissza mellett) kiemel minden mezőt, amelyben ugyanaz a
  számjegy áll, mint a legutóbb kattintott mezőben – a megadottakat is –, és a ceruzajelek
  között is félkövéren mutatja azt a számjegyet. Nyomd meg újra a kikapcsoláshoz.

### Billentyűzet (Keyboard)

- **Írj be egy számjegyet** (vagy betűt a 9 fölötti számjegyekhez) a kijelölt mező
  kitöltéséhez.
- A **Space** vagy a **Backspace** kiüríti a kijelölt mezőt (a számjegyét vagy az összes
  ceruzajelét).
- A **nyílbillentyűk** billentyűzetkurzort mozgatnak. Az **Enter** normál beírás és
  ceruzajel között váltja a kurzort, a beírt számjegyek pedig az alatta lévő mezőbe
  kerülnek.
- Az **M** a **Jelek**, az **L** a **Kiemelés** gomb.

## Beállítások

- **Blokkoszlopok száma** és **Blokksorok száma**: a rács akkora, amennyi a kettő szorzata,
  és minden blokk annyi mező széles, ahány blokksor van, és annyi mező magas, ahány
  blokkoszlop. Kirakós
  módban a szorzat egyszerűen a rács mérete.
- Az **X**, a **Kirakós** és a **Killer** a fent leírt változatokat kapcsolja be. A killer
  rejtvények legfeljebb kilenc számjegyű rácsokra korlátozódnak.
- **Szimmetria**: az, hogy a nyomok mintázata hogyan tükrözi önmagát. Több szimmetriától
  szebb a kép, de általában több nyom marad a táblán, mint amennyi feltétlenül kellene.
- **Nehézség**: a legnehezebb gondolatmenet, amelyet a rejtvény megkövetel. A _Nagyon könnyű_ és
  a _Könnyű_ szinten mindig van olyan mező, amely közvetlenül kitölthető; a _Közepes_ szinten
  végig kell gondolnod, hová kerülhet egy számjegy egy blokkon és egy vonalon át; a _Nehéz_ olyan
  mezőhalmazokat kíván, amelyek együtt birtokolnak egy számjegyhalmazt; a _Szakértő_ még
  kényszerláncokat is hozzátesz; az _Extrém_ rejtvények pedig tippelés és visszalépés nélkül nem
  fejezhetők be. A nehéz rejtvények generálása tovább tart.
`,ve=e({default:()=>ye}),ye=`# Sátrak

A rács egy kemping: néhány mezőn fa áll, a többi üres terület. Verj sátrakat az üres
mezőkre úgy, hogy:

- pontosan annyi sátor legyen, ahány fa;
- minden fához tartozzon egy saját sátor a közvetlenül mellette lévő mezők egyikén
  (fölötte, alatta, tőle balra vagy jobbra – átlósan nem). Egy sátor véletlenül más fák
  mellett is állhat, de minden sátor egy fához tartozik, és minden fa egy sátorhoz;
- két sátor soha ne érjen össze, még sarokkal sem;
- a jobb oldali és az alsó szélen álló számok megadják, hány sátor van az egyes sorokban
  és oszlopokban.

A nyomok csak ezek a darabszámok, így az egész rejtvény arról szól, hogy kitaláld, hová
kell kerülniük a sátraknak. Itt minden rejtvény megoldható tiszta logikával, találgatás
nélkül.

## Irányítás

Az egymáshoz érő sátrak pirosan jelennek meg, a közös szélükön vagy sarkukon egy
jelöléssel; ugyanígy minden olyan sátorcsoport, amelyhez túl kevés fa tartozik, és minden
olyan facsoport, amelynek már nem marad hely az összes sátrához. Egy szám szürkére vált,
amint a vonalában pontosan annyi sátor áll, és pirosra, ha már nem teljesíthető. A
**Megoldás** felállítja helyetted az összes sátrat.

### Egér és érintés

- **Kattints** egy üres mezőre, hogy sátrat verj oda; a sátorra újra kattintva eltűnik.
- **Kattints jobb gombbal** egy üres mezőre, hogy fűnek jelöld, vagyis biztos vagy benne, hogy oda
  nem kerül sátor; újabb jobb gombos kattintásra a jelölés eltűnik. Egy már foglalt mezőt akár
  kattintással, akár jobb gombos kattintással ki lehet üríteni.
- **Jobb gombbal húzd** végig egy soron vagy oszlopon, hogy egyetlen mozdulattal fűvé
  váljon minden útba eső üres mező – jól jön, ha egy vonal összes sátra már megvan. A
  sátrakat és a meglévő jelöléseket békén hagyja.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** mozgatják a kurzort.
- Az **Enter** sátrat ver a kurzor alatti mezőre, vagy elveszi onnan.
- A **Space** fűnek jelöli a kurzor alatti mezőt, vagy törli a jelölést.

## Beállítások

- A rács **szélessége** és **magassága**, 4-től 20 mezőig.
- **Nehézség**: a _Könnyű_ rejtvények megadják magukat a számolgatásnak és annak, ha
  végignézed, mire van szüksége az egyes fáknak és sátraknak. A _Trükkös_ rejtvényeknél
  azt is mérlegelned kell, hogy egy vonal lehetséges elrendezései hogyan szorítják meg a
  szomszédait, és végig kell gondolnod, mely mezőkön osztozhatnak a fák.
`,be=e({default:()=>xe}),xe=`# Tornyok

A rács minden mezőjére egy torony kerül, amelynek magassága 1 és a rács mérete közé esik.
Minden sorban és minden oszlopban minden magasságnak pontosan egyszer kell szerepelnie. A
szélen álló számok azt mondják meg, hány tornyot látnál, ha arról az oldalról néznél be az
adott sorba vagy oszlopba: egy torony eltakar minden mögötte álló alacsonyabbat. A rács
méretével egyenlő nyom azt jelenti, hogy a magasságok végig növekednek a vonal mentén; az
1-es nyom pedig azt, hogy a legmagasabb torony közvetlenül annál a szélnél áll.

A nagyobb és nehezebb rejtvények néhány már felépített toronnyal indulnak, és elhagynak
pár szélső nyomot. Pirosan látszanak azok a számjegyek, amelyek ütköznek egy másikkal a
sorukban vagy oszlopukban, és azok a nyomok, amelyeket az eddig felépített tornyok már nem
tudnak teljesíteni. Ez a rejtvény Skyscrapers néven ismertebb.

## Irányítás

Az előre megadott tornyokat nem lehet megváltoztatni, a **Megoldás** pedig kitölti a
választ.

### Egér és érintés

- **Kattints** egy mezőre, hogy kijelöld, majd a képernyőn lévő billentyűkkel építs oda
  ilyen magas tornyot. A billentyűsor **⌫** gombja üríti ki újra a mezőt.
- A billentyűsor **✎** gombja bekapcsolja a **ceruzajeleket**: amit ezután választasz, kis
  jegyzetként kerül be, a mező kijelölve marad, így többet is felvehetsz, és ugyanaz a
  számjegy még egyszer kiradírozza. Ha valódi számjegyet írsz be, az letörli a mező
  ceruzajeleit.
- **Kattints jobb gombbal** egy mezőre, hogy rögtön ceruzajelekhez jelöld ki.
- A szünetmenü **Jelek** gombja minden üres mezőt feltölt a ceruzajelek teljes
  készletével.
- A **Kiemelés** (a nagyító a Vissza mellett) kiemel minden mezőt, amelyben ugyanakkora
  magasság áll, mint a legutóbb kattintott mezőben, és a ceruzajelek között is félkövéren
  mutatja azt a magasságot. Nyomd meg újra a kikapcsoláshoz.

### Billentyűzet (Keyboard)

- **Írj be egy számjegyet**, hogy a kijelölt mezőre ilyen magas tornyot építs. A **Space**
  vagy a **Backspace** kiüríti a mezőt.
- A **nyílbillentyűk** mozgatnak egy billentyűzetkurzort. Az **Enter** a számjegy- és a
  ceruzajelmód között kapcsol; a beírt számjegyek a kiemelt mezőbe kerülnek, a kurzor
  pedig a helyén marad.
- Az **M** a **Jelek**, az **L** a **Kiemelés** gomb.

## Beállítások

- **Rács mérete** — 3-tól 9-ig. A tornyokat egyetlen számjeggyel adod meg, ezért van a
  határ 9-nél.
- **Nehézség** — a Könnyű rejtvényekhez elég az egyes nyomok, valamint a sor- és oszlopszabály
  közvetlen következményeit végigvinni. A Nehéz rejtvényeknél végig kell gondolnod minden
  elrendezést, amit egy nyom megenged, és észre kell venned azokat a mezőcsoportokat, amelyek
  néhány közös jelölten osztoznak. A Szakértő még nehezebb halmazokoskodást és kényszerláncokat
  tesz hozzá, az Extrém rejtvények pedig nem fejezhetők be egy kis próbálgatás nélkül – bár a
  megoldás így is egyértelmű.
`,Se=e({default:()=>Ce}),Ce=`# Sínek

A vasút balról érkezik a rácsba, és alul hagyja el; mindkét végét a tábláról lefutó sínek
jelzik. Építsd ki közöttük a pályát. A sín egyetlen útvonal, elágazás, hurok és
kereszteződés nélkül, és csak egyenes darabokból és negyedfordulós ívekből áll, így minden
érintett mezőből pontosan két sín vezet ki. Néhány darab már le van fektetve a szürke
mezőkön, ezeken nem lehet változtatni. Az egyes oszlopok fölött és a sorok mellett álló
szám megadja, hány mezőn halad át az adott vonalban a kész sín.

A számok szürkére váltanak, ha a vonalukban már pontosan annyi sínmező van, és pirosra, ha
a vonal már sehogy sem jöhet ki: túl sok a sínmező, vagy annyi a kihúzott mező, hogy nem
marad elég hely. Pirosan rajzolódnak ki azok a mezők is, ahol a sínek rosszul találkoznak
(három sín fut egy mezőbe, zárt hurok jön létre, vagy a bejárat és a kijárat összekötése
után fölösleges sín marad).

## Irányítás

A **Megoldás** lefekteti a teljes pályát, és eltávolítja azokat a jelöléseidet, amelyek
ellentmondanak neki. A rejtvény akkor kész, ha egyetlen megszakítatlan sín köti össze a
bejáratot a kijárattal, és minden szám teljesül.

### Egér és érintés

- **Húzz** végig egymás melletti mezők során, hogy sínt fektess közéjük. Az útvonal
  kanyarodhat is; ha a húzás csak már meglévő síneket követ, azokat inkább felszedi.
- **Kattints** egy mező széléhez közel, hogy sínt adj hozzá azon az oldalon, vagy elvedd
  onnan. A mező közepére kattintva „itt átmegy a sín” jelölést teszel, anélkül hogy
  megmondanád, mely oldalakon – ez jól jön a számoláshoz –, és újabb kattintásra eltűnik a
  jelölés.
- **Kattints jobb gombbal** egy oldal közelébe, hogy rövid vonással jelöld: „itt nincs sín”; a mező
  közepén jobb gombbal kattintva az egész mezőt kihúzod. **Jobb gombbal húzd** végig egy soron
  vagy oszlopon, hogy egyszerre több mezőt húzz ki (vagy vegyél vissza).
- A **Radír** (a radír gomb a Vissza mellett) bekapcsolásával egy kattintás vagy húzás tisztára
  törli a mezőket: minden érintett mező elveszíti a sínjeit, az „itt nincs sín” vonásait és a
  jelölését vagy keresztjét. A megadott darabok maradnak. Nyomd meg újra, hogy ismét sínt
  fektess.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** olyan kurzort mozgatnak, amely a mezőkön és a köztük lévő oldalakon
  is megáll. Az **Enter** ugyanaz, mint egy kattintás a kurzor helyén, a **Space** pedig,
  mint egy jobb gombos kattintás.
- Az **E** a **Radír** gomb.

## Beállítások

- A rács **szélessége** és **magassága**, mindkettő legalább négy.
- **Nehézség**: a _Könnyű_ rejtvények megadják magukat, ha egyszerre egy mezőt vagy egy
  vonalat nézel. A _Trükkös_ rejtvényeknél azt is végig kell gondolnod, hová kerülhet még
  egy vonal utolsó sínmezője, és mi legyen azokkal a szabadon maradt sínvégekkel,
  amelyeket egy vonal mentén vagy azon keresztül tovább kell vinni. Minden rejtvénynek
  pontosan egy megoldása van.
- **Szomszédos 1-es nyomok tiltása**: ha be van kapcsolva (ez az alapértelmezés), nincs
  két olyan szomszédos vonal, amelynek egyaránt 1 a száma, és nem 1-es a bejárat oszlopa
  és a kijárat sora sem. Ez megakadályozza, hogy a sín hosszú, unalmas egyenesekben fusson
  a tábla szélén.
`,we=e({default:()=>Te}),Te=`# Forgatás

Egy számozott lapkákból álló rácsot négyzetes lapkablokkok forgatásával kevertek össze.
Forgasd vissza őket, amíg a számok balról jobbra és fentről lefelé sorrendbe nem állnak.
Az alapjátékban minden lépés negyed fordulattal elforgat egy 2×2-es blokkot a négy lapka
közös sarokpontja körül; a nagyobb beállítások 3×3-as vagy még nagyobb blokkokat
forgatnak.

A **forgásérzékeny** változatokban minden lapkán van egy háromszög, és a rejtvény csak akkor
számít késznek, ha minden háromszög felfelé mutat. A **csak sorok** változatban a lapkákon
a saját soruk száma áll, így az összes 1-esnek elég az első sorba jutnia, a 2-eseknek a
másodikba, és így tovább.

## Irányítás

A **Megoldás** minden lapkát egyből visszatesz a helyére. Az útvonalat nem mutatja meg, de
gyorsan tiszta rácsot ad, ha forgatássorozatokat akarsz gyakorolni.

### Egér és érintés

- **Kattints** egy blokk közepére, hogy az óramutató járásával ellentétesen fordítsd el;
  **kattints jobb gombbal**, hogy az óramutató járásával megegyezően. A 2×2-es blokkoknál a közép
  az a sarok, ahol négy lapka találkozik; páratlan blokkméretnél a középső lapka. Ha a rács széle
  felé kattintasz, az a blokk fordul el, amelyik annál a szélnél fekszik.
- A **Jobbra** (a forgó nyíl gomb a Vissza mellett) felcseréli a két irányt: a kattintás az
  óramutató járásával megegyezően forgatja a blokkokat, a jobb gombos kattintás pedig
  ellentétesen. Nyomd meg újra, hogy visszaváltson.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** egy blokknyi méretű keretet mozgatnak a rácson. Az **Enter** az
  óramutató járásával ellentétesen, a **Space** azzal megegyezően forgatja el a
  bekeretezett blokkot.
- Az **A**, **B**, **C** és **D** a bal felső, a jobb felső, a bal alsó és a jobb alsó
  sarokban lévő blokkot forgatja az óramutató járásával ellentétesen; ha közben nyomva
  tartod a **Shift**-et, azzal megegyezően.
- A **T** a **Jobbra** gomb.

## Beállítások

- A rács **szélessége** és **magassága**.
- **Forgatott blokk mérete**: annak a négyzet alakú blokknak az oldalhossza, amelyet egy
  lépés elforgat (legalább 2, és nem nagyobb a rácsnál).
- **Soronként egy szám**: könnyebb változat, amelyben egy sor minden lapkáján ugyanaz a
  szám áll.
- **Az állás is számít**: a lapkákra háromszög kerül, és a végén mindnek felfelé kell
  mutatnia.
- **Keverő lépések száma**: hagyd 0-n az alapos kevergetéshez, vagy adj meg egy kis
  számot, hogy a rács pontosan ennyi forgatásra legyen a megoldottól. Ilyenkor az a
  feladatod, hogy megtaláld és visszacsináld ezeket a forgatásokat, tehát egy háromlépéses
  keverés háromlépéses választ érdemel (bár néha akad rövidebb út is).
`,Ee=e({default:()=>De}),De=`# Élőholtak

A rács egy kísértetjárta tükörterem. Minden tükör nélküli mező egyet rejt a három szörny
közül: **szellemet**, **vámpírt** vagy **zombit**. A rács fölötti jelmagyarázat megmondja,
melyikből hány van még hátra, a szélek mentén álló számok pedig azt, hány szörnyet látnál,
ha onnan néznél be a rácsba, követve a látóvonalat, ahogy az az átlós tükrökről
visszaverődik.

A tükrök megváltoztatják, mit látsz. A vámpírnak nincs tükörképe, ezért csak addig számít
bele, amíg a látóvonalad még nem ért tükörhöz. A szellem épp fordítva: közvetlenül nézve
láthatatlan, és csak egy visszaverődés után bukkan elő. A zombi mindig látszik. Ha egy
látóvonal kétszer halad át ugyanazon a mezőn, az ott lévő szörny minden alkalommal
beleszámít, amikor látható. Úgy helyezd el az összes szörnyet, hogy minden szélső szám és
minden összesítés stimmeljen.

## Irányítás

Egy szélső szám szürkére vált, amint a látóvonalán minden a helyére került, és pirosra, ha
már nem teljesíthető; a jelmagyarázatban egy darabszám pirosra vált, ha az adott szörnyből
túl sokat helyeztél el. A ceruzajelek csak a saját jegyzeteidet szolgálják, a rejtvényre
soha nincsenek hatással.

### Egér és érintés

- **Kattints** egy üres mezőre, hogy szellem, vámpír, zombi és üres között léptesd. A mező
  kiemelve marad.
- A képernyőn lévő billentyűk közvetlenül, léptetés nélkül választ szörnyet a kiemelt
  mezőre; a **⌫** kiüríti a mezőt, a ceruzajelekkel együtt.
- A billentyűsor **✎** gombja bekapcsolja a **ceruzajeleket**: a választott szörny ezután
  bekerül a mező jelöltjei közé (vagy kikerül onnan).
- **Kattints jobb gombbal** egy mezőre, hogy egyesével vedd fel a ceruzajeleket (előbb szellem,
  aztán vámpír, aztán zombi, aztán üres).
- A **Látóvonal** (a szem a Vissza mellett) megrajzolja a kiemelt mezőn átmenő látóvonalakat,
  a tükröknél megtörve, és mindegyik két végén bekarikázza a szélső számokat. Amíg be van
  kapcsolva, egy szélső számra kattintva annak a saját látóvonalát követed; újabb
  kattintással elengeded. Nyomd meg újra a **Látóvonal** gombot a kikapcsoláshoz. Amíg be
  van kapcsolva, egy nem kiemelt mezőre kattintva csak kiemeled, így egy üres mezőt
  kitöltés nélkül is követhetsz; újabb kattintással a szokásos módon váltod.

### Billentyűzet (Keyboard)

- A nyílbillentyűk mozgatják a kiemelést. Az Enter a kiemelt mező szörnyét lépteti, a
  Space a ceruzajeleit.
- A \`G\`, \`V\`, \`Z\` (vagy az \`1\`, \`2\`, \`3\`) azt a szörnyet teszi a kiemelt mezőre, illetve
  átkapcsolja a ceruzajelét, ha a kiemelés ceruzamódban van. Az \`E\`, \`0\`, a Backspace vagy
  a Delete kiüríti a mezőt, a ceruzajelekkel együtt.
- Az \`S\` a **Látóvonal** gomb.

## Beállítások

- **Szélesség**, **Magasság** — a rács mérete, 3×3-tól összesen 54 mezőig.
- **Nehézség** — a _Könnyű_ rejtvények elesnek attól, ha egyszerre egy látóvonal mentén
  számolgatsz; a _Normál_ rejtvényeknél mérlegelned kell, milyen kombinációkat enged meg
  egy teljes útvonal; a _Trükkös_ rejtvények nem fejezhetők be találgatás nélkül.
`,Oe=e({default:()=>ke}),ke=`# Egyenlőtlen

Töltsd ki a rácsot úgy, hogy minden sorban és minden oszlopban pontosan egyszer
szerepeljen minden számjegy 1-től a rács méretéig – vagyis latin négyzetet kapj –, és
közben tartsd tiszteletben a szomszédos mezők közé rajzolt jeleket.

**Egyenlőtlen** módban a jelek nagyobb-mint jelek: a \`>\` nyitott oldala a nagyobb számjegy
felé néz, a csúcsa pedig a kisebb felé. Nem minden szomszédos pár között van jel, és minél
nehezebb a rejtvény, annál kevesebb van belőlük.

**Szomszédos** módban a jelek rövid vonások, amelyek azt jelentik, hogy a két számjegy
pontosan eggyel tér el egymástól (mint a 3 és a 4). Itt minden vonás mindig látszik, ezért
a vonás **hiánya** két mező között szintén nyom: az a két számjegy biztosan nem
szomszédos.

A rejtvény Futoshiki néven jelenik meg az újságokban.

## Irányítás

Pirosan látszanak a szabályt sértő számjegyek – egy sorban vagy oszlopban ismétlődő szám,
vagy egy nem teljesülő jel –, és maga a megsértett jel is. A rejtvény akkor kész, ha
minden mező ki van töltve, és semmi sem piros.

### Egér és érintés

- **Kattints** egy mezőre, hogy kijelöld, majd a képernyőn lévő billentyűkkel írj bele
  egy számjegyet. A billentyűsor **⌫** gombja üríti ki újra a kijelölt mezőt. Ha
  másodszor is a kijelölt mezőre kattintasz, a kijelölés megszűnik.
- A billentyűsor **✎** gombja bekapcsolja a **ceruzajeleket**: amit ezután választasz,
  bekerül a mezőben lévő lehetőségek kis listájába (vagy kikerül onnan), ahelyett hogy
  válaszként kerülne be. Ha kitöltesz egy mezőt, a ceruzajelei letörlődnek.
- **Kattints jobb gombbal** egy mezőre, hogy rögtön ceruzajelekhez jelöld ki.
- A szünetmenü **Jelek** gombja minden üres mezőt feltölt az összes lehetséges
  ceruzajellel, hogy aztán kihúzogathasd őket; a **Tipp** (a villanykörte a Vissza mellett)
  ugyanezt teszi, de kihagyja azokat, amelyeket az egyszerű logika már kizár.
- A **Kiemelés** (a nagyító a Vissza mellett) kiemel minden mezőt, amelyben ugyanaz a
  számjegy áll, mint a legutóbb kattintott mezőben – a megadottakat is –, és a ceruzajelek
  között is félkövéren mutatja azt a számjegyet. Nyomd meg újra a kikapcsoláshoz.

### Billentyűzet (Keyboard)

- **Írj be egy számjegyet** a kijelölt mező kitöltéséhez; a \`0\`, a Space vagy a Backspace
  kiüríti.
- A nyílbillentyűk mozgatnak egy kurzort a rácson; az Enter a számjegybeírás és a
  ceruzajelezés között kapcsolja át a kurzort.
- Az \`M\` a **Jelek**, a \`H\` a **Tipp**, az \`L\` pedig a **Kiemelés** gomb.

## Beállítások

- **Mód** — Egyenlőtlen (nagyobb-mint jelek) vagy Szomszédos (vonások az egymást követő
  számjegyek között).
- **Méret** — a sorok és oszlopok száma, 3-tól 9-ig.
- **Nehézség** — mennyi gondolkodást kíván a rejtvény. A **Nagyon könnyű** rejtvényekhez sosem
  kellenek a jelek: Egyenlőtlen módban egyáltalán nincsenek jelek, ezek sima latin négyzetek,
  Szomszédos módban pedig a vonások ott vannak, de egyedül a megadott számjegyek is eldöntik a
  megoldást. A **Könnyű** rejtvényekhez elég az egyes jelek közvetlen jelentése; a **Közepes**
  rejtvényeknél mezőcsoportokat kell együtt szemügyre venned; a **Nehéz** ehhez pozíció alapú
  halmazokoskodást és kényszerláncokat tesz hozzá; az **Extrém** rejtvényekhez (az egyéni
  beállítások ablakából érhetők el) próbálgatás is kellhet – bár a megoldás így is egyértelmű.
`,Ae=e({default:()=>je}),je=`# Rakoncátlan

Színezd a rács minden mezőjét feketére vagy fehérre. Néhány mező nyomként adott, ezeken
nem lehet változtatni; a többi szürkén indul, és rád vár. Amikor kész vagy, három dolognak
kell teljesülnie:

- minden sorban ugyanannyi fekete mező van, mint fehér;
- minden oszlopban ugyanannyi fekete mező van, mint fehér;
- egy sorban vagy oszlopban nincs három egymás melletti azonos színű mező.

A hibák pirosan látszanak: a három vagy több egyforma mezőből álló sorozat piros keretet
kap, egy mezőn pedig piros **!** jelenik meg, ha a sorában vagy oszlopában már túl sok van
abból a színből. A választható „egyedi sorok és oszlopok” változatban nem lehet két sor
ugyanolyan mintájú (és két oszlop sem); az egyező vonalakat piros áthúzás jelöli.

## Irányítás

A nyommezőket – azokat, amelyeken belül egy kis keret is látszik – nem lehet
megváltoztatni. A **Megoldás** kitölti az egész rácsot. A rejtvény akkor kész, ha minden
mező színt kapott, és semmi sem piros.

### Egér és érintés

- **Kattints** egy szürke mezőre, hogy fekete legyen; újabb kattintásra fehér lesz, még
  egyre pedig üres.
- A **jobb gombos kattintás** visszafelé lépteti: fehér, aztán fekete, aztán üres.
- A **középső gombos kattintás** egyből kiüríti a mezőt.
- A **Radír** (a radír gomb a Vissza mellett) bekapcsolásával a kattintás színezés helyett
  kiüríti a mezőt. Nyomd meg újra, hogy ismét színezz.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** mozgatnak egy kurzort a rácson.
- Az **Enter** úgy lépteti a kurzor alatti mezőt, mint egy kattintás, a **Space** pedig,
  mint egy jobb gombos kattintás.
- Az **1** feketére, a **0** (vagy a **2**) fehérre állítja, a **Backspace** pedig
  kiüríti.
- Az **E** a **Radír** gomb.

## Beállítások

- A rács **szélessége** és **magassága**. Mindkettőnek párosnak és legalább 6-nak kell
  lennie.
- **Egyedi sorok és oszlopok**: ha be van kapcsolva, nem lehet két azonos sor és nem lehet
  két azonos oszlop (egy sor és egy oszlop azért még megegyezhet). A nagyon magas vagy
  nagyon széles rácsokat ez a mód visszautasítja, mert nincs elég különböző vonal.
- **Nehézség**: a _Könnyű_ rejtvényekhez mindig csak két azonnali érvelés kell – két
  egyforma mező a mellettük vagy a köztük lévő mezőt a másik színre kényszeríti, és az a
  vonal, amelyben az egyik színből már megvan a kellő mennyiség, mindenhol máshol a másik
  színt kapja. A _Normál_ rejtvényeknél arról is gondolkodnod kell, hová kerülhet még egy
  vonalban az adott szín utolsó mezője úgy, hogy ne jöjjön létre hármas sorozat. Minden
  rejtvénynek pontosan egy megoldása van.
`,Me=e({default:()=>Ne}),Ne=`# Kibogozás

Néhány pontot egyenes vonalak kötnek össze, és a vonalak összegabalyodtak. Mozgasd addig a
pontokat, amíg semelyik két vonal nem keresztezi egymást. Minden rejtvény kibogozható: a
gép egy keresztezésmentes elrendezésből építette fel a gráfot, majd a pontokat összekeverve
egy körre rakta.

Pirosan látszik minden vonal, amely éppen keresztez egy másikat, így a gubanc látványosan
fogy, ahogy haladsz; a rejtvény akkor van megoldva, ha nem maradt piros. A Megoldás minden
pontot olyan elrendezésbe csúsztat, amelyről a gép tudja, hogy jó.

## Irányítás

A Vissza bármelyik lépést visszavonja, a Megoldást is.

### Egér és érintés

- **Húzd** el a pontot, és engedd el ott, ahol szeretnéd. A megfogott pont narancssárgára
  vált, a szomszédai pedig kékre. Ha a margóra ejted a pontot, a tábla szélére kerül; ha
  teljesen a vásznon kívül engeded el, a húzás megszakad.
- Az **Illesztés** (a rács gomb a Vissza mellett) be- és kikapcsolja a rácsra illesztést: az
  elejtett pontok ilyenkor a halvány pontokkal jelölt rácsmezők közepére ugranak, és a
  megoldás is így épül fel. A gomb addig világít, amíg a rács be van kapcsolva.

### Billentyűzet (Keyboard)

- A **nyílbillentyűk** pontról pontra mozgatják a kurzort az adott irányba. Az **Enter**
  vagy a **Space** felveszi a pontot; ezután a nyílbillentyűk viszik (nyomásonként egy
  nyolcad mezőnyit, a Shift billentyűvel egy egész mezőt, a Ctrl billentyűvel egyetlen
  lépést), az **Enter** vagy a **Space** pedig leteszi.
- A \`G\` az **Illesztés** gomb.

## Beállítások

- **Pontok száma**: hány pontja van a gráfnak, legalább 4. Több pont több vonalat és
  nehezebb gubancot jelent. A tábla együtt nő a pontok számával, így mindig van hely
  szétteríteni őket.
`,Pe=e({$dir:()=>`ltr`,$locale:()=>`hu`,$name:()=>q,default:()=>Fe,games:()=>Q,messages:()=>X,status:()=>Z,touchPhrases:()=>Y,tutorials:()=>$,ui:()=>J}),q=`Magyar`,J=JSON.parse(`{"appName":"Puzzlebox","menu":{"title":"Puzzlebox","tagline":"{n} kézzel rajzolt logikai rejtvény. Válassz egyet, és kezdheted!","lockedNote":"Minden saját kezűleg megoldott rejtvény egy kreditet ér. A kreditekből itt oldhatsz fel új rejtvényeket.","language":"Nyelv","stat":{"credits":{"one":"★ {n} kredit","other":"★ {n} kredit"},"unlocked":"{n} / {total} feloldva","solved":"{n} megoldva","tight":{"credits":"★ {n}","unlocked":"{n}/{total}","solved":"✓ {n}","achievements":"{n}/{total}"},"achievements":"{n} / {total} teljesítmény"},"hint":{"allOpen":"Minden nyitva van.","complete":"Az egész gyűjteményt feloldottad!","spend":{"one":"Lent egy kreditért feloldhatsz egy rejtvényt.","other":"Lent a kreditjeidért újabb rejtvényeket oldhatsz fel."},"earn":"Oldj meg saját kezűleg bármelyik rejtvényt, és kapsz egy kreditet."},"card":{"label":"{name}: {description}","labelLocked":"{name}: {description} (zárolva)","solvedTag":"✓ megoldva ×{n}","unlock":"Feloldás · 1 kredit","unlocked":"{name} feloldva!","labelAlias":"{name} (más néven {alias}): {description}","labelLockedAlias":"{name} (más néven {alias}): {description} (zárolva)"},"noCredit":"Oldj meg saját kezűleg bármelyik rejtvényt, és a kapott kredittel ezt is feloldhatod.","surprise":"Lepj meg: véletlen feladvány megnyitása","search":{"placeholder":"Rejtvények keresése","label":"Rejtvények keresése név szerint","clear":"Keresés törlése","empty":"Nincs „{q}” nevű rejtvény. Próbálj másik nevet."},"privacy":{"note":"A Puzzlebox azt számolja, hogyan játsszák a rejtvényeit – azt soha, hogy ki játssza –, hogy még jobbá tehesse őket."},"continue":"Folytatás","continueLabel":"Folytatás: {name}","spend":"Beváltás"},"notFound":{"title":"Nincs ilyen rejtvény","body":"Nincs „{slug}” nevű rejtvényünk.","back":"Vissza az összes rejtvényhez"},"locked":"{name}: ez a rejtvény még zárolva van. Oldj meg egy másikat, és a kapott kredittel feloldhatod.","pageTitle":"{name} · Puzzlebox","topbar":{"back":"Összes rejtvény","help":"Súgó","creditsTitle":"A kreditek új rejtvényeket oldanak fel. Oldj meg egy rejtvényt saját kezűleg, és kapsz egyet.","boardLabel":"{name} játéktábla"},"toolbar":{"type":"Típus","custom":"Egyéni…","new":"Új","newTitle":"Új játék (N)","restart":"Elölről","restartTitle":"A rejtvény újrakezdése","undo":"Vissza","undoTitle":"Visszavonás (U, Ctrl+Z)","redo":"Előre","redoTitle":"Ismétlés (R, Ctrl+Y)","solve":"Megoldás","solveTitle":"A megoldás megmutatása (Ctrl+S)","gameId":"Megosztás","gameIdTitle":"Oszd meg ezt a rejtvényt, vagy játssz azzal, amit küldtek neked","keypad":"Billentyűk","keypadTitle":"Képernyő-billentyűk megjelenítése","zoomOut":"−","zoomOutTitle":"Kisebb","zoomIn":"+","zoomInTitle":"Nagyobb","tapPlace":"Koppintás: lerak","tapMark":"Koppintás: jelöl","tapTitle":"Mit csinál az egyszerű koppintás","tapPlaceTitle":"Koppintás: lerak, hosszú koppintás: jelöl. Koppints ide a váltáshoz.","tapMarkTitle":"Koppintás: jelöl, hosszú koppintás: lerak. Koppints ide a váltáshoz.","hint":"Tipp","hintTitle":"Felfed egy mezőt, és játszhatsz tovább. {n} tippig még jár a kredit.","more":"Több","pause":"Szünet","pauseTitle":"Szünet menü (Esc)"},"pause":{"title":"Szüneteltetve","resume":"Folytatás"},"pager":{"label":"Oldalak","prev":"Előző oldal","next":"Következő oldal","page":"{n}. oldal / {total}"},"badge":{"won":"Megoldva!","lost":"Vége a játéknak"},"stage":{"generating":"Új rejtvény osztása…"},"keypad":{"label":"Billentyűk","clear":"Törlés","clearTitle":"A kijelölt mező törlése (Backspace)","pencil":"Ceruzajelek","pencilOnTitle":"A billentyűk most ceruzajelet írnak. Koppints ide, ha újra válaszokat írnál.","pencilOffTitle":"Kapcsold be, és a következő billentyűk ceruzajelként kerülnek be"},"drawer":{"title":"Játékleírás: {name}","close":"Bezárás","replay":"▶ A bemutató újra","achievements":"Teljesítmények ({n}/{total})"},"dialog":{"ok":"OK","cancel":"Mégse","customTitle":"{name}: egyéni","gameIdTitle":"Rejtvény megosztása","byDescription":"Leírás szerint","bySeed":"Véletlenmag szerint","enterLabel":"Egy adott rejtvény: illeszd be a kódját","play":"Játék","copy":"Másolás","copied":"Másolva","link":"Link","linkTitle":"Link másolása, amely pontosan ezt a rejtvényt nyitja meg","linkPrompt":"Link erre a rejtvényre","shareLead":"Küldd el pontosan ezt a rejtvényt valaki másnak.","copyLink":"Link másolása","linkCopied":"Link másolva","codes":"Rejtvénykódok","hintAd":{"title":"Még egy tipp?","body":"Elfogyott az összes ingyenes tipped ({n}). Ha kérsz még egyet, ez a rejtvény már nem hoz kreditet — hacsak nem nézel meg egy rövid hirdetést.","watch":"Hirdetés megnézése, kredit megtartása","anyway":"Kérem a tippet így is"},"badCode":"Ez a kód nem nyit meg {name} rejtvényt. Ellenőrizd, hogy a teljes kódot másoltad-e be."},"toast":{"creditEarned":"+1 kredit","tutorialComplete":"Vége a bemutatónak. Itt egy friss rejtvény: oldd meg saját kezűleg, és kapsz egy kreditet.","tutorialCompleteBack":"Vége a bemutatónak. Vissza a rejtvényedhez.","tutorialSkipped":"Bemutató kihagyva. A Súgóból bármikor újrajátszhatod.","tapModeMark":"A koppintás most jelöl. A fő művelethez koppints hosszan.","tapModePlace":"A koppintás most a fő művelet. A jelöléshez koppints hosszan.","touchHint":"Koppints a játékhoz, a második művelethez koppints hosszan. Az első kerek gomb felcseréli a kettőt.","hintNone":"Ezen a táblán már nincs mit felfedni.","hintNoCredit":"Ez már több mint {n} tipp, így ez a rejtvény nem hoz kreditet — de a táblát nyugodtan befejezheted.","hintAdFailed":"Nem volt elérhető hirdetés, így nem változott semmi — a tipp továbbra is kérhető.","stuck":"Elakadtál? Egy tipp felfed egy mezőt, és a feladványért így is jár a kredit."},"tutorial":{"label":"{name} bemutató","step":"{n}/{total}. lépés","next":"Tovább","done":"Kész","skipStep":"Lépés kihagyása","skipTutorial":"Bemutató kihagyása","nice":"Szép!","offScript":"Nem ez: a lépést visszavontuk, hogy a lépések továbbra is illeszkedjenek a táblához. Próbáld azt, amit ez a lépés kér.","offScriptRead":"Ezt visszavontuk, hogy a lépések továbbra is illeszkedjenek a táblához. Előbb olvasd el ezt a lépést.","pointer":{"drag":"húzás","rightClick":"jobb gomb","rightDrag":"húzás jobb gombbal","middleClick":"középső gomb","longPress":"hosszú koppintás","longPressDrag":"hosszan nyomva húzás","twoFingerTap":"kétujjas koppintás"}},"splash":{"tagline":"Kézzel rajzolt rejtvények, játékra készen","skip":"Kihagyás"},"help":{"keypad":{"heading":"A képernyő-billentyűzet","introTouch":"A képernyőn lévő billentyűk írnak helyetted","introPointer":"Az eszköztár **Billentyűk** gombja billentyűket tesz a képernyőre, amelyek írnak helyetted","select":": előbb válassz egy mezőt a táblán, aztán nyomj meg egy billentyűt.","clear":"- **⌫** újra kiüríti a választott mezőt.","pencil":"- **✎** bekapcsolja a ceruzajeleket, így a billentyűk válasz helyett apró jegyzetként\\n  kerülnek be. Nyomd meg újra, ha újra válaszokat írnál."}},"endgame":{"won":"Rejtvény megoldva!","lost":"Vége a játéknak","credit":"★ +1 kredit — épp elég egy új rejtvény feloldásához.","wonNote":"Jöhet a következő?","forfeitNote":"Ez a rejtvény nem hoz kreditet — a megoldás közben már megjelent.","lostNote":"Ez most nem jött össze. Megpróbálod újra?","next":"Következő rejtvény","retry":"Újra","dismiss":"Bezárás, megnézem a táblát","time":"Idő","moves":"Lépések","hints":"Tipp","best":"Legjobb {time}","newBest":"Új rekord!","stars":"{n} / 3 csillag","stepUp":"Próbáld ki: {preset} →"},"achievements":{"title":"Teljesítmények","summary":"{n} / {total} megszerezve","unlocked":"Teljesítmény feloldva","secret":{"name":"Titkos teljesítmény","description":"Játssz tovább, hogy felfedezd."},"earnedOn":"Megszerezve: {date}","progress":"{n} / {goal}","collection":"A gyűjtemény","tier":{"bronze":"Bronz","silver":"Ezüst","gold":"Arany"},"meta":{"first-solve":{"name":"Első lépések","description":"Oldd meg az első rejtvényedet saját kezűleg."},"solves-10":{"name":"Bemelegítés","description":"Oldj meg 10 rejtvényt."},"solves-50":{"name":"Rejtvényfüggő","description":"Oldj meg 50 rejtvényt."},"solves-100":{"name":"Centurió","description":"Oldj meg 100 rejtvényt."},"solves-250":{"name":"Nagymester","description":"Oldj meg 250 rejtvényt."},"specialist":{"name":"Specialista","description":"Oldj meg 10 rejtvényt ugyanabban a játékban."},"variety-3":{"name":"Kóstolgató","description":"Oldj meg egy-egy rejtvényt 3 különböző játékban."},"variety-10":{"name":"Sokoldalú","description":"Oldj meg egy-egy rejtvényt 10 különböző játékban."},"variety-all":{"name":"Az egész doboz","description":"Oldj meg egy-egy rejtvényt a gyűjtemény minden játékában."},"unlock-first":{"name":"Új polc","description":"Oldd fel az első játékodat egy kredittel."},"unlock-15":{"name":"Gyarapodó gyűjtemény","description":"Legyen 15 feloldott játékod."},"unlock-25":{"name":"Kulcscsomó","description":"Legyen 25 feloldott játékod."},"unlock-all":{"name":"Mesterkulcs","description":"Oldd fel a gyűjtemény összes játékát."},"hardest-1":{"name":"Jöhet a kihívás","description":"Oldj meg egy rejtvényt egy játék legnehezebb beállításán."},"hardest-10":{"name":"Csúcsvadász","description":"Oldd meg 10 különböző játék legnehezebb beállítását."},"hardest-all":{"name":"Rendíthetetlen","description":"Oldd meg minden játék legnehezebb beállítását."},"pure-1":{"name":"Tiszta lap","description":"Oldj meg egy rejtvényt visszavonás és tipp nélkül."},"pure-25":{"name":"Biztos kéz","description":"Oldj meg 25 rejtvényt visszavonás és tipp nélkül."},"quick-draw":{"name":"Villámkezű","description":"Oldj meg egy rejtvényt legfeljebb 30 másodperc alatt."},"marathon":{"name":"Maraton","description":"Oldj meg egy rejtvényt, miután több mint 20 percet töltöttél vele."},"comeback":{"name":"Sosem adom fel","description":"Veszíts el egy rejtvényt, aztán térj vissza, és oldd meg."},"second-thoughts":{"name":"Meggondoltam magam","description":"Vonj vissza 100-szor, és mégis oldd meg a rejtvényt."},"a-little-help":{"name":"Egy kis segítség","description":"Kérj egy tippet."},"oops":{"name":"Hoppá","description":"Veszíts el egy rejtvényt."},"night-owl":{"name":"Éjjeli bagoly","description":"Oldj meg egy rejtvényt éjfél és hajnali 5 óra között."},"on-a-roll":{"name":"Lendületben","description":"Oldj meg 5 rejtvényt egy ültő helyedben."},"days-3":{"name":"Törzsvendég","description":"Játssz 3 különböző napon."},"days-7":{"name":"Elkötelezett","description":"Játssz 7 különböző napon."},"days-30":{"name":"Már a bútorhoz tartozik","description":"Játssz 30 különböző napon."},"quick-study":{"name":"Gyors tanuló","description":"Játssz végig egy bemutatót."},"scholar":{"name":"Szorgalmas diák","description":"Játssz végig 10 különböző bemutatót."},"collector-25":{"name":"Jelvénygyűjtő","description":"Szerezz 25 teljesítményt."},"collector-60":{"name":"Trófeás vitrin","description":"Szerezz 60 teljesítményt."},"legend":{"name":"Rejtvénylegenda","description":"Szerezd meg az összes többi teljesítményt."}},"andMore":{"one":"{n} teljesítmény feloldva","other":"{n} teljesítmény feloldva"}},"welcome":{"title":"Válaszd ki az első rejtvényed","subtitle":{"one":"{n} rejtvény a kezdéshez. Válaszd ki, és játssz.","other":"{n} rejtvény a kezdéshez. Válassz egyet, és játssz."},"more":{"one":"…és még {n} feloldásra vár","other":"…és még {n} feloldásra vár"},"how":"Minden megoldott rejtvényért kapsz egy kreditet, és minden kredit felold egy új játékot."},"gamepad":{"connected":"Kontroller csatlakoztatva"},"settings":{"title":"Beállítások","done":"Kész","sound":"Hang","volume":"Hangerő","reduceMotion":"Kevesebb mozgás","vibration":"Rezgés","statistics":"Játékstatisztika","on":"Be","off":"Ki","portalMuted":"Az oldal kikapcsolta a hangot."}}`),Y=[[`kattints rá jobb gombbal`,`koppints rá hosszan`],[`kattints jobb gombbal`,`koppints hosszan`],[`kattints rá a középső gombbal`,`koppints rá két ujjal`],[`kattints a középső gombbal`,`koppints két ujjal`],[`jobb gombbal kattintva`,`hosszan koppintva`],[`középső gombbal kattintva`,`két ujjal koppintva`],[`jobb gombbal húzol`,`hosszan nyomva húzol`],[`jobb gombbal húzva`,`hosszan nyomva húzva`],[`jobb gombbal húzz`,`hosszan nyomva húzz`],[`jobb gombbal húzd`,`hosszan nyomva húzd`],[`jobb gombos kattintással`,`hosszú koppintással`],[`jobb gombos kattintásra`,`hosszú koppintásra`],[`jobb gombos kattintást`,`hosszú koppintást`],[`jobb gombos kattintás`,`hosszú koppintás`],[`középső gombos kattintással`,`kétujjas koppintással`],[`középső gombos kattintásra`,`kétujjas koppintásra`],[`középső gombos kattintást`,`kétujjas koppintást`],[`középső gombos kattintás`,`kétujjas koppintás`],[`bármelyik gombbal`,`sima vagy hosszú nyomással`],[`kattintásokat`,`koppintásokat`],[`kattintások`,`koppintások`],[`kattintással`,`koppintással`],[`kattintásra`,`koppintásra`],[`kattintást`,`koppintást`],[`kattintáskor`,`koppintáskor`],[`kattintásig`,`koppintásig`],[`kattintásod`,`koppintásod`],[`kattintás`,`koppintás`],[`kattintani`,`koppintani`],[`kattintasz`,`koppintasz`],[`kattintottál`,`koppintottál`],[`kattintott`,`koppintott`],[`kattinthatsz`,`koppinthatsz`],[`kattintgatva`,`koppintgatva`],[`kattintgatsz`,`koppintgatsz`],[`kattintgat`,`koppintgat`],[`kattintva`,`koppintva`],[`kattintsd`,`koppintsd`],[`kattints`,`koppints`],[`kattintod`,`koppintod`],[`kattint`,`koppint`]],X=JSON.parse(`{"4-way rotational symmetry needs a square grid":"A négyirányú forgásszimmetriához négyzetes rács kell","A 2×2 grid is too small to make a puzzle from":"A 2×2-es rács túl kicsi egy rejtvényhez","A cube rolling along a single row can never turn over all six faces":"Egyetlen sor mentén gördülő kocka sosem forgatja át mind a hat lapját","A given piece leaves the grid":"Egy megadott sínelem kivezet a rácsból","A jigsaw block is too big":"Az egyik kirakós blokk túl nagy","A jigsaw block is too small":"Az egyik kirakós blokk túl kicsi","A killer cage is too big":"Az egyik ketrec túl nagy","A killer cage is too small":"Az egyik ketrec túl kicsi","A wrapping puzzle needs a width and height of at least 3 to have a unique solution":"A körbeérő rejtvény csak legalább 3 szélesség és magasság mellett lehet egyértelmű","All parameters must be whole numbers":"Minden érték egész szám legyen","Already solved":"Már megoldva","An edge cannot join a point to itself":"Egy él nem kötheti össze a pontot önmagával","Angle offset out of bounds.":"A szögeltolás kívül esik a megengedett tartományon.","At least one grid dimension must be greater than zero":"A rács legalább egyik mérete legyen nullánál nagyobb","At least one of width and height for this grid type must be at least {0}":"Ennél a rácstípusnál a szélesség vagy a magasság legalább {0} legyen","At least one of width and height must be greater than one":"A szélesség vagy a magasság legyen egynél nagyobb","Bad character in grid description":"Hibás karakter a rácsleírásban","Bad mine layout in game description":"Hibás aknaelrendezés a játékleírásban","Badly formatted move limit after grid description":"Hibás formátumú lépéskorlát a rácsleírás után","Barrier probability must be a number between 0 and 1":"A falak valószínűsége 0 és 1 közötti szám legyen","Barrier probability must be between 0 and 1":"A falak valószínűsége 0 és 1 között legyen","Blue cells are placed where some faces could never reach them":"Kék mezők olyan helyre kerültek, ahová egyes lapok sosem érhetnek el","Both dimensions must be at least 2":"Mindkét méret legalább 2 legyen","Both grid dimensions must be at least one":"A rács mindkét mérete legalább egy legyen","Bridges per direction must be between 1 and {0}":"Az irányonkénti hidak száma 1 és {0} között legyen","Can't create {0}×{1} puzzles":"{0}×{1} méretű rejtvény nem hozható létre","Clue did not provide 2 direction flags":"A nyom nem adott meg 2 irányjelzőt","Clue is larger than the number of sides of its face":"A nyom nagyobb, mint a lapjának oldalszáma","Clue is missing its number":"A nyomból hiányzik a szám","Clue number out of range":"A nyom száma tartományon kívül esik","Colour out of range":"A szín tartományon kívül esik","Colour out of range in grid description":"Tartományon kívüli szín a rácsleírásban","Colours, pegs and guesses must be whole numbers":"A színek, a bábuk és a tippek egész számok legyenek","Column counts inconsistent":"Az oszlopok számai ellentmondásosak","Could not four-colour the map":"A térképet nem sikerült négy színnel kiszínezni","Count is larger than the line it describes":"A szám nagyobb, mint az általa jelölt sor vagy oszlop","Description contains a duplicate number":"A leírás ismétlődő számot tartalmaz","Description contains a number larger than the grid":"A leírás a rácsnál nagyobb számot tartalmaz","Description contains a number out of range":"A leírás tartományon kívüli számot tartalmaz","Description contains a number that is too large":"A leírás túl nagy számot tartalmaz","Description contains a repeated number":"A leírásban ismétlődik egy szám","Description contains an unexpected character":"A leírás váratlan karaktert tartalmaz","Description contains invalid characters":"A leírás érvénytelen karaktereket tartalmaz","Description is corrupted":"A leírás sérült","Description is longer than expected":"A leírás hosszabb a vártnál","Description is shorter than expected":"A leírás rövidebb a vártnál","Description is too long":"A leírás túl hosszú","Description is too short":"A leírás túl rövid","Description marks cells beyond the grid as blue":"A leírás a rácson kívüli mezőket jelöl kéknek","Description may only contain P, H and O":"A leírás csak P, H és O betűket tartalmazhat","Description must be a comma-separated list of numbers":"A leírás vesszővel elválasztott számok listája legyen","Description must be exactly {0} characters":"A leírás pontosan {0} karakter legyen","Description must be hex digits, a comma and a cell number":"A leírás hexadecimális jegyekből, egy vesszőből és egy mezőszámból álljon","Description must be numbers each followed by an orientation letter (u, l, d or r)":"A leírás számokból álljon, mindegyik után egy irányjelző betűvel (u, l, d vagy r)","Description must be two hex strings separated by a comma":"A leírás két, vesszővel elválasztott hexadecimális szövegből álljon","Description must be {0} hexadecimal digits":"A leírás {0} hexadecimális jegyből álljon","Description must contain at least one edge":"A leírásnak legalább egy élt tartalmaznia kell","Description must contain at least one peg":"A leírásnak legalább egy bábut tartalmaznia kell","Description must contain at least two islands":"A leírásnak legalább két szigetet tartalmaznia kell","Description must contain each number from 1 to {0} exactly once":"A leírásban minden 1 és {0} közötti szám pontosan egyszer szerepeljen","Description must contain each row number from 1 to {0} exactly {1} times":"A leírásban minden 1 és {0} közötti sorszám pontosan {1} alkalommal szerepeljen","Description must contain only digits":"A leírás csak számjegyeket tartalmazhat","Description must contain only numbers":"A leírás csak számokat tartalmazhat","Description must contain {0} numbers":"A leírásnak {0} számot kell tartalmaznia","Description must contain {0} tiles":"A leírásnak {0} lapkát kell tartalmaznia","Description must mark exactly {0} cells blue":"A leírás pontosan {0} mezőt jelöljön kéknek","Description must start with {0} hex digits":"A leírás {0} hexadecimális jeggyel kezdődjön","Description places two islands next to each other":"A leírás két szigetet egymás mellé helyez","Description repeats a colour although duplicates are disallowed":"A leírás megismétel egy színt, pedig az ismétlődés nem engedélyezett","Description too long":"Túl hosszú leírás","Description too long for board size":"A leírás túl hosszú a tábla méretéhez","Description too short":"Túl rövid leírás","Description too short for board size":"A leírás túl rövid a tábla méretéhez","Digits in a {0}×{1} puzzle cannot exceed {2}":"{0}×{1} méretű rejtvényben a számjegyek felső határa {2}","Disallowing duplicates requires at least as many colours as pegs":"Ismétlődés nélkül legalább annyi szín kell, ahány bábu van","Domino descriptions inconsistent":"Ellentmondó dominóleírások","Dots too close together":"A pontok túl közel vannak egymáshoz","Duplicate edge in game description":"Ismétlődő él a játékleírásban","Edge list defines the wrong number of regions":"Az éllista rossz számú tartományt ad ki","Entrance square must contain a piece leaving the left edge":"A bejárati mezőn olyan sínelem legyen, amely a bal szélen kivezet","Every killer cage must have exactly one sum":"Minden killer ketrecnek pontosan egy összege legyen","Exit square must contain a piece leaving the bottom edge":"A kijárati mezőn olyan sínelem legyen, amely az alsó szélen kivezet","Expansion factor must be a number":"A tágítási tényezőnek számnak kell lennie","Expansion factor may not be negative":"A tágítási tényező nem lehet negatív","Expansion factor must be from 0 to 100":"A tágítási tényező 0 és 100 között legyen","Expected ',' after block structure description":"A blokkszerkezet után ',' várható","Expected ',' after grid description":"A rács leírása után ',' karakternek kell következnie","Expected a list of edges like 0-1,1-2 in game description":"A játékleírásban 0-1,1-2 alakú éllista várható","Expected comma before clue list":"A nyomlista előtt vessző várható","Expected jigsaw block structure in game description":"A játékleírásban kirakós blokkszerkezet várható","Expected killer cage structure in game description":"A játékleírásban killer ketrecszerkezet várható","Expected killer clue grid in game description":"A játékleírásban killer nyomrács várható","Expected slashes between clues":"A nyomok között perjelek várhatók","Expecting number in game description":"A játékleírásban szám várható","Extra moves must not be negative":"A többletlépések száma nem lehet negatív","Extreme puzzles with more than {0} symbols take too long to generate":"Túl sokáig tart olyan extrém rejtvényt előállítani, amelyben több mint {0} jel van","Faulty game description":"Hibás játékleírás","Flags contradicting each other":"Az irányjelzők ellentmondanak egymásnak","Flags go off grid":"Az irányjelzők kivezetnek a rácsból","Game ID must include parameters":"A rejtvénykódnak az értékeket is tartalmaznia kell","Game description contained unexpected characters":"A játékleírás váratlan karaktereket tartalmazott","Game description contains an unexpected character":"A játékleírás váratlan karaktert tartalmaz","Game description contains no dots":"A játékleírásban egyetlen pont sincs","Game description contains unexpected characters":"A játékleírás váratlan karaktereket tartalmaz","Game description has {0} balls; expected {1}":"A játékleírásban {0} golyó van; a várt szám {1}","Game description is corrupted":"A játékleírás sérült","Game description is longer than expected":"A játékleírás hosszabb a vártnál","Game description is shorter than expected":"A játékleírás rövidebb a vártnál","Game description is the wrong length":"A játékleírás hossza hibás","Game description is too long":"A játékleírás túl hosszú","Game description is too short":"A játékleírás túl rövid","Game description is wrong length":"A játékleírás hossza nem megfelelő","Game description longer than expected":"A játékleírás a vártnál hosszabb","Game description must be hexadecimal":"A játékleírás hexadecimális legyen","Game description shorter than expected":"A játékleírás a vártnál rövidebb","Game description too long":"Túl hosszú játékleírás","Game is already solved":"A játék már meg van oldva","Grid area must be at least six squares":"A rács területe legalább hat mező legyen","Grid area must be greater than 1":"A rács területe legyen 1-nél nagyobb","Grid area must be greater than one":"A rács területe legyen egynél nagyobb","Grid description is the wrong length or not hexadecimal":"A rácsleírás hossza hibás, vagy nem hexadecimális","Grid description strings not used with this grid type":"Ez a rácstípus nem használ rácsleírást","Grid dimensions cannot be negative":"A rács méretei nem lehetnek negatívak","Grid dimensions must be at most {0}":"A rács méretei legfeljebb {0} lehetnek","Grid dimensions must be whole numbers":"A rács méretei egész számok legyenek","Grid is too big":"A rács túl nagy","Grid must contain at least two squares":"A rácsnak legalább két mezőt kell tartalmaznia","Grid size must be between 3 and 9":"A rács mérete 3 és 9 között legyen","Grid size must be between {0} and {1}":"A rács mérete {0} és {1} között legyen","Hard and Extreme puzzles are limited to a maximum number of {0}":"A Nehéz és az Extrém rejtvényeknél a legnagyobb szám {0} lehet","Height must be at least 3":"A magasság legalább 3 legyen","Height must be at least five":"A magasság legalább öt legyen","Height must be at least one":"A magasság legalább egy legyen","Height must be at least the rotating block size":"A magasság legalább a forgatott blokk mérete legyen","Height must be at least two":"A magasság legalább kettő legyen","Illegal grid type":"Érvénytelen rácstípus","Incorrect number balance in game description":"Hibás számarány a játékleírásban","Initial x-coordinate was out of range":"A kezdő x-koordináta tartományon kívül esett","Initial y-coordinate was out of range":"A kezdő y-koordináta tartományon kívül esett","Internal error: solution is badly formatted":"Belső hiba: a megoldás formátuma hibás","Invalid character in block structure specification":"Érvénytelen karakter a blokkszerkezet megadásában","Invalid character in game description":"Érvénytelen karakter a játékleírásban","Invalid character in grid specification":"Érvénytelen karakter a rács megadásában","Invalid character in number list":"Érvénytelen karakter a számlistában","Invalid characters in game description":"Érvénytelen karakterek a játékleírásban","Invalid format grid description string.":"Érvénytelen formátumú rácsleírás.","Invalid parameters: {0}":"Érvénytelen értékek: {0}","Invalid syntax in game description":"Érvénytelen szintaxis a játékleírásban","Jigsaw puzzles with more than {0} symbols take too long to generate":"Túl sokáig tart olyan kirakós rejtvényt előállítani, amelyben több mint {0} jel van","Killer puzzle dimensions must be smaller than 10":"A killer rejtvény méretei 10-nél kisebbek legyenek","Malformed pending game description":"Hibás formátumú függőben lévő játékleírás","Matrix description is the wrong length or not hexadecimal":"A mátrixleírás hossza hibás, vagy nem hexadecimális","Maximum face number must be a whole number":"A dominókon szereplő legnagyobb szám egész legyen","Maximum face number must be at least one":"A dominókon szereplő legnagyobb szám legalább egy legyen","Maximum face number must be at most {0}":"A dominókon szereplő legnagyobb szám legfeljebb {0} lehet","Maximum of 9 colours":"Legfeljebb 9 szín","Medium puzzles need more than one bridge per direction, or loops disallowed":"A Közepes rejtvényekhez irányonként több híd kell, vagy tiltsd le a hurkokat","Mines solver opened a mine: inconsistent knowledge":"Az aknamegoldó aknát nyitott meg: ellentmondó ismeretek","Minimum number of balls may not be greater than maximum":"A golyók legkisebb száma nem lehet nagyobb a legnagyobbnál","Missing grid description string.":"Hiányzik a rácsleírás.","Missing separator":"Hiányzó elválasztó","Monster numbers do not match grid spaces":"A szörnyek száma nem egyezik a rácsban lévő helyekkel","More than one starting square specified":"Egynél több kezdőmező van megadva","Multiple solutions exist for this puzzle":"Ennek a rejtvénynek több megoldása van","Must have at least five regions":"Legalább öt tartomány kell","Must have at least one guess":"Legalább egy tipp kell","Must have between {0} and {1} colours":"A színek száma {0} és {1} között legyen","No game set up to solve":"Nincs megoldandó játék","No gems specified":"Nincs megadva drágakő","No solution exists for this position":"Ebből az állásból nincs megoldás","No solution exists for this puzzle":"Ennek a rejtvénynek nincs megoldása","No solution found":"Nem található megoldás","No starting square specified":"Nincs megadva kezdőmező","Not enough data in block structure specification":"Túl kevés adat a blokkszerkezet megadásában","Not enough data in grid description":"Túl kevés adat a rácsleírásban","Not enough data to fill grid":"Túl kevés adat a rács kitöltéséhez","Not enough grid space to place all blue faces":"Nincs elég hely a rácsban az összes kék lap elhelyezéséhez","Not enough jigsaw blocks":"Túl kevés kirakós blokk","Not enough killer cages":"Túl kevés ketrec","Not enough numbers given after grid specification":"Túl kevés szám a rács megadása után","Not enough space to place the solid on an empty cell":"Nincs elég hely a test üres mezőre állításához","Number of colours must be at least three":"A színek száma legalább három legyen","Number of colours must be at least two":"A színek száma legalább kettő legyen","Number of points must be a whole number":"A pontok száma egész szám legyen","Number of points must be at least {0}":"A pontok száma legalább {0} legyen","Number of points must be at most {0}":"A pontok száma legfeljebb {0} lehet","Number of shuffling moves cannot be negative":"A keverő lépések száma nem lehet negatív","Number of shuffling moves must be a whole number":"A keverő lépések száma egész szám legyen","Number of shuffling moves must be at most 10000":"A keverő lépések száma legfeljebb 10000 lehet","Number of shuffling moves must be at most {0}":"A keverő lépések száma legfeljebb {0} lehet","Number out of range in game description":"Tartományon kívüli szám a játékleírásban","Number too large":"Túl nagy szám","Out-of-range number in game description":"Tartományon kívül eső szám a játékleírásban","Out-of-range number in grid description":"Tartományon kívül eső szám a rácsleírásban","Parameters must be whole numbers":"Az értékek egész számok legyenek","Patch coordinates do not identify a usable grid fragment":"A folt koordinátái nem jelölnek ki használható rácsrészletet","Patch offset out of bounds.":"A folt eltolása kívül esik a megengedett tartományon.","Percentage of black squares must be between 5% and 100%":"A fekete mezők aránya 5% és 100% között legyen","Percentage of islands must be from 1% to 30%":"A szigetek aránya 1% és 30% között legyen","Puzzle is inconsistent":"A rejtvény ellentmondásos","Puzzle is too large":"A rejtvény túl nagy","Puzzle is too long for unique-rows mode":"A rejtvény túl széles az egyedi sorok módhoz","Puzzle is too tall for unique-rows mode":"A rejtvény túl magas az egyedi sorok módhoz","Puzzle is unsolvable":"A rejtvény megoldhatatlan","Puzzle must have one entrance and one exit":"A rejtvénynek egy bejárata és egy kijárata legyen","Puzzles with more than {0} symbols take too long to generate":"Túl sokáig tart olyan rejtvényt előállítani, amelyben több mint {0} jel van","Random seed must not be empty":"A véletlenmag nem lehet üres","Rotating block size must be at least two":"A forgatott blokk mérete legalább kettő legyen","Row counts inconsistent":"A sorok számai ellentmondásosak","Rows of blocks must be at least 1":"A blokkok sorainak száma legalább 1 legyen","Scoring system not recognised":"Ismeretlen pontozási rendszer","Size and difficulty must be whole numbers":"A méret és a nehézség egész szám legyen","Size must be at least 5 for Adjacent puzzles of this difficulty":"Az ilyen nehézségű Szomszédos rejtvényeknél a méret legalább 5 legyen","Size must be between {0} and {1}":"A méret {0} és {1} között legyen","Solution not known for this puzzle":"Ehhez a rejtvényhez nem ismert megoldás","Solve operation failed":"A megoldás nem sikerült","Solve operation produced an invalid move":"A megoldás érvénytelen lépést adott","Solver could not finish this grid":"A megoldó nem tudta befejezni ezt a rácsot","Solving algorithm cannot complete this puzzle":"A megoldó algoritmus nem tudja befejezni ezt a rejtvényt","Starting cell is outside the grid":"A kezdőmező a rácson kívül van","Subtraction and division blocks must have area 2":"A kivonásos és az osztásos blokkok 2 mezőből álljanak","That grid has too many faces to generate":"Ennek a rácsnak túl sok lapja van az előállításhoz","The Cross board is only available at {0}×{1}":"A kereszt alakú tábla csak {0}×{1} méretben érhető el","The Octagon board is only available at {0}×{1}":"A nyolcszögletű tábla csak {0}×{1} méretben érhető el","The ball has hit a mine; undo that move first":"A golyó aknára futott; előbb vond vissza azt a lépést","The grid can have at most {0} squares":"A rácsban legfeljebb {0} mező lehet","The grid may have at most {0} squares":"A rácsnak legfeljebb {0} mezője lehet","The initial square contains a mine":"A kezdőmezőben akna van","The solid cannot start on a blue cell":"A test nem indulhat kék mezőről","The solution has already been revealed":"A megoldást már felfedted","There must be at least one ball":"Legalább egy golyó kell","There must be at least one mine":"Legalább egy akna kell","This arrangement cannot be solved":"Ez az elrendezés nem oldható meg","This game does not support the Solve operation":"Ebben a játékban nem használható a Megoldás","This puzzle has no solution":"A rejtvénynek nincs megoldása","This puzzle instance contains a contradiction":"Ez a rejtvénypéldány ellentmondást tartalmaz","This puzzle is not self-consistent":"Ez a rejtvény önmagában ellentmondásos","Too few clues for block structure":"Túl kevés nyom a blokkszerkezethez","Too few clues for grid size":"Túl kevés nyom a rács méretéhez","Too little data in clue list":"Túl kevés adat a nyomlistában","Too little data in edge list":"Túl kevés adat az éllistában","Too many balls to fit in the grid":"Túl sok golyó, nem fér el a rácsban","Too many clues for block structure":"Túl sok nyom a blokkszerkezethez","Too many clues for grid size":"Túl sok nyom a rács méretéhez","Too many colours (at most {0})":"Túl sok szín (legfeljebb {0})","Too many colours makes given grid size impossible":"Ennyi szín mellett a megadott rácsméret lehetetlen","Too many guesses (at most {0})":"Túl sok tipp (legfeljebb {0})","Too many jigsaw blocks":"Túl sok kirakós blokk","Too many killer cages":"Túl sok ketrec","Too many mines for grid size":"Túl sok akna a rács méretéhez","Too many pegs per guess (at most {0})":"Túl sok bábu tippenként (legfeljebb {0})","Too many regions to fit in grid":"Túl sok tartomány, nem fér el a rácsban","Too much data in block structure specification":"Túl sok adat a blokkszerkezet megadásában","Too much data in clue list":"Túl sok adat a nyomlistában","Too much data in edge list":"Túl sok adat az éllistában","Too much data to fill grid":"Túl sok adat a rács kitöltéséhez","Too much data to fit in grid":"Túl sok adat, nem fér el a rácsban","Trivial solutions are uninteresting":"A triviális megoldások érdektelenek","Unable to build a grid for these parameters":"Ezekkel az értékekkel nem építhető rács","Unable to build this grid":"Ez a rács nem építhető meg","Unable to find a solution for this puzzle":"Ehhez a rejtvényhez nem sikerült megoldást találni","Unable to find a solution from this position":"Ebből az állásból nem sikerült megoldást találni","Unable to find a solution to this puzzle":"Nem sikerült megoldást találni erre a rejtvényre","Unable to find a unique solution for this puzzle":"Ehhez a rejtvényhez nem sikerült egyértelmű megoldást találni","Unable to generate a puzzle of this size":"Ilyen méretű rejtvényt nem sikerült előállítani","Unable to generate a puzzle with these parameters":"Ezekkel az értékekkel nem sikerült rejtvényt előállítani","Unable to solve this puzzle":"Ez a rejtvény nem oldható meg","Unable to support more than {0} distinct symbols":"Legfeljebb {0} különböző jel támogatott","Unable to work out any more of this puzzle":"Ebből a rejtvényből nem vezethető le több","Unexpected additional character at end of game description":"Váratlan többletkarakter a játékleírás végén","Unexpected additional data at end of game description":"Váratlan többletadat a játékleírás végén","Unexpected character '{0}' in description":"Váratlan „{0}” karakter a leírásban","Unexpected character in clue list":"Váratlan karakter a nyomlistában","Unexpected character in edge list":"Váratlan karakter az éllistában","Unexpected data at end of game description":"Váratlan adat a játékleírás végén","Unknown board type":"Ismeretlen táblatípus","Unknown character in description":"Ismeretlen karakter a leírásban","Unknown difficulty":"Ismeretlen nehézség","Unknown difficulty level":"Ismeretlen nehézségi szint","Unknown difficulty rating":"Ismeretlen nehézségi fokozat","Unknown shape type":"Ismeretlen alaktípus","Unknown symmetry":"Ismeretlen szimmetria","Unknown symmetry type":"Ismeretlen szimmetriatípus","Unrecognised character in game description":"Ismeretlen karakter a játékleírásban","Unrecognised characters in game description":"Ismeretlen karakterek a játékleírásban","Unrecognised clue type":"Ismeretlen nyomtípus","Unrecognised grid description.":"Ismeretlen rácsleírás.","Unrecognised solid type":"Ismeretlen testtípus","Width and height cannot both be two":"A szélesség és a magasság nem lehet egyszerre kettő","Width and height for this grid type must both be at least {0}":"Ennél a rácstípusnál a szélesség és a magasság is legalább {0} legyen","Width and height must be at least two":"A szélesség és a magasság legalább kettő legyen","Width and height must be at least {0}":"A szélesség és a magasság legalább {0} legyen","Width and height must be at most twelve":"A szélesség és a magasság legfeljebb tizenkettő lehet","Width and height must be at most {0}":"A szélesség és a magasság legfeljebb {0} lehet","Width and height must be at most {0} to generate a puzzle":"A rejtvény előállításához a szélesség és a magasság legfeljebb {0} lehet","Width and height must be positive":"A szélesség és a magasság pozitív legyen","Width and height must be whole numbers":"A szélesség és a magasság egész szám legyen","Width and height must both be at least 3":"A szélesség és a magasság is legalább 3 legyen","Width and height must both be at least four":"A szélesség és a magasság is legalább négy legyen","Width and height must both be at least one":"A szélesség és a magasság is legalább egy legyen","Width and height must both be at least two":"A szélesség és a magasság is legalább kettő legyen","Width and height must both be even":"A szélesség és a magasság is páros legyen","Width and height must both be greater than three":"A szélesség és a magasság is legyen háromnál nagyobb","Width and height must both be greater than two":"A szélesség és a magasság is legyen kettőnél nagyobb","Width and height must both be greater than zero":"A szélesség és a magasság is legyen nullánál nagyobb","Width and height must both be positive":"A szélesség és a magasság is pozitív legyen","With three colours, a solvable grid may have at most {0} squares":"Három színnel egy megoldható rács legfeljebb {0} mezőből állhat","Width must be at least 3":"A szélesség legalább 3 legyen","Width must be at least five":"A szélesség legalább öt legyen","Width must be at least one":"A szélesség legalább egy legyen","Width must be at least the rotating block size":"A szélesség legalább a forgatott blokk mérete legyen","Width must be at least two":"A szélesség legalább kettő legyen","Width, height and ball counts must be whole numbers":"A szélesség, a magasság és a golyók száma egész szám legyen","Width, height and difficulty must be whole numbers":"A szélesség, a magasság és a nehézség egész szám legyen","Width, height and number of colours must be whole numbers":"A szélesség, a magasság és a színek száma egész szám legyen","Width, height, block size and move count must be whole numbers":"A szélesség, a magasság, a blokkméret és a lépésszám egész szám legyen","X puzzles need at least four symbols":"Az X rejtvényekhez legalább négy jel kell","X-diagonal jigsaw puzzles with more than {0} symbols take too long to generate":"Túl sokáig tart olyan X-átlós kirakós rejtvényt előállítani, amelyben több mint {0} jel van","You have hit a mine; undo that move first":"Aknára léptél; előbb vond vissza azt a lépést","a cell may be a number position for only one rectangle":"egy mező csak egy téglalap számát hordozhatja","at least one column contains more numbers than will fit":"legalább egy oszlopban több szám van, mint amennyi elfér","at least one row contains more numbers than will fit":"legalább egy sorban több szám van, mint amennyi elfér","cells are not adjacent":"a mezők nem szomszédosak","domino layout: no path between singletons":"dominóelrendezés: nincs út a magányos mezők között","domino layout: stranded square cannot be paired":"dominóelrendezés: a magára maradt mező nem párosítható","dot touches the outside twice":"a pont kétszer érinti a külső területet","dot with fewer than two edges":"kettőnél kevesebb éllel rendelkező pont","edge does not follow its face":"az él nem követi a lapját","edge shared by three faces":"három lap osztozik egy élen","expected CxR or Nj":"CxR vagy Nj várható","expected WxH":"WxH várható","expected WxHnN":"WxHnN várható","expected a grid size":"rácsméret várható","expected a maximum number":"legnagyobb szám várható","expected a number of points":"a pontok száma várható","expected a solid letter followed by WxH":"testbetű, majd WxH várható","expected something like c6p4g10Bm":"valami ilyesmi várható: c6p4g10Bm","expected w<W>h<H>m<MIN>M<MAX>":"w<W>h<H>m<MIN>M<MAX> várható","generateKeen: solver disagrees with the square":"generateKeen: a megoldó ellentmond a négyzetnek","grid inconsistency while walking round a face":"ellentmondás a rácsban egy lap körbejárása közben","inconsistent clues while assembling":"ellentmondó nyomok összeállítás közben","inconsistent distance field":"ellentmondó távolságmező","inconsistent face classes":"ellentmondó laposztályok","latin rectangle could not be extended":"a latin téglalapot nem sikerült kiterjeszteni","latinGenerate: no extension found":"latinGenerate: nem található kiterjesztés","latinSquare: rectangle could not be extended":"latinSquare: a téglalapot nem sikerült kiterjeszteni","line too long for solver":"a vonal túl hosszú a megoldónak","no clue left to place":"nem maradt elhelyezhető nyom","no such laser: {0}":"nincs ilyen lézer: {0}","rolled solid does not fit its destination":"a gördített test nem illeszkedik a célhelyére","shown":"felfedve","too few row/column specifications":"túl kevés sor-/oszlopmegadás","too many row/column specifications":"túl sok sor-/oszlopmegadás","unrecognised character in game description":"ismeretlen karakter a játékleírásban","yes!":"igen!","9×9 Extreme puzzles take too long to generate; try 8×8 or Expert":"A 9×9-es Extrém rejtvények előállítása túl sokáig tart; próbáld a 8×8-at vagy a Szakértőt"}`),Z={moves:`Lépések: {n}`,movesCompleted:{one:`Kész, {n} lépésből`,other:`Kész, {n} lépésből`},movesSinceSolve:`Lépések az automatikus megoldás óta: {n}`,completedMoves:`Kész! Lépések: {n}`,solvedByComputer:`A gép oldotta meg`,completed:`Kész!`,completedPrefix:`Kész! `,autoSolved:`Automatikusan megoldva.`,autoSolvedPrefix:`Automatikusan megoldva. `,autoSolverUsedPrefix:`Automatikus megoldóval. `,failedPrefix:`Elfogytak a lépések. `,dead:`Aknára léptél.`,target:` (cél: {n})`},Q=JSON.parse(`{"blackbox":{"name":"Fekete doboz","description":"Találd meg a rejtett golyókat: lőj lézereket a dobozba, és figyeld, hol jönnek ki.","preset":{"5x5_3_balls":"5×5, 3 golyó","8x8_5_balls":"8×8, 5 golyó","8x8_3_6_balls":"8×8, 3-6 golyó","10x10_5_balls":"10×10, 5 golyó","10x10_4_10_balls":"10×10, 4-10 golyó"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"no_of_balls":{"name":"Golyók száma"}},"status":{"correct":"HELYES!","wrong":{"one":"{wrong} rossz jelölés, {n} golyó hiányzik.","other":"{wrong} rossz jelölés, {n} golyó hiányzik."},"marked":"Megjelölt golyók: {n} / {range}  ·  Kilőtt lézerek: {fired}","tooMany":"  ·  {n} golyóval túl sok a jelölés.","check":"  ·  Nyomd meg a sarokgombot az ellenőrzéshez."},"achievement":{"sparing_shots":{"name":"Takarékos lövések","description":"Találd meg az összes golyót úgy, hogy a nyílásoknak legfeljebb a feléből lősz ki lézert."},"pinpoint":{"name":"Hajszálpontosan","description":"Találd meg az összes golyót egy legalább 8×8-as dobozban, golyónként legfeljebb három lézerrel."},"shot_in_the_dark":{"name":"Lövés a sötétbe","description":"Ellenőriztesd a golyóidat egyetlen lézer kilövése nélkül – és tévedj."}}},"bridges":{"name":"Hidak","alsoKnownAs":"Hashiwokakero, Hashi","description":"Kösd össze a szigeteket hidakkal úgy, hogy minden szám kijöjjön, és a hidak ne keresztezzék egymást.","preset":{"7x7_easy":"7×7 könnyű","7x7_medium":"7×7 közepes","7x7_hard":"7×7 nehéz","10x10_easy":"10×10 könnyű","10x10_medium":"10×10 közepes","10x10_hard":"10×10 nehéz","15x15_easy":"15×15 könnyű","15x15_medium":"15×15 közepes","15x15_hard":"15×15 nehéz","10x10_medium_no_loops":"10×10 közepes, hurkok nélkül"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"difficulty":{"name":"Nehézség","choice":{"easy":"Könnyű","medium":"Közepes","hard":"Nehéz"}},"allow_loops":{"name":"Hurkok engedélyezése"},"max_bridges_per_direction":{"name":"Max. híd irányonként","choice":{"1":"1","2":"2","3":"3","4":"4"}},"of_island_squares":{"name":"Szigetmezők aránya (%)","choice":{"5":"5%","10":"10%","15":"15%","20":"20%","25":"25%","30":"30%"}},"expansion_factor":{"name":"Tágítási tényező (%)","choice":{"0":"0%","10":"10%","20":"20%","30":"30%","40":"40%","50":"50%","60":"60%","70":"70%","80":"80%","90":"90%","100":"100%"}}},"action":{"g":{"label":"Segédvonalak","title":"Halvány vonal mutatása vagy elrejtése ott, ahol híd lehet (G)"},"e":{"label":"Radír","title":"Húzz egy szigettől, hogy abba az irányba eltávolítsd a hídjait (E)"}},"achievement":{"no_markers":{"name":"Tiszta vizek","description":"Oldj meg egy legalább 10×10-es rejtvényt egyetlen „itt nincs híd” jelölés nélkül."},"sure_footing":{"name":"Biztos lábakon","description":"Oldj meg egy legalább 10×10-es nehéz rejtvényt úgy, hogy egyetlen hidat sem bontasz le, és nem használod a visszavonást."}}},"cube":{"name":"Kocka","description":"Görgess egy testet a rácson, hogy a lapjaira minden kék mezőt felszedj.","preset":{"cube":"Kocka","tetrahedron":"Tetraéder","octahedron":"Oktaéder","icosahedron":"Ikozaéder"},"config":{"type_of_solid":{"name":"Test típusa","choice":{"tetrahedron":"Tetraéder","cube":"Kocka","octahedron":"Oktaéder","icosahedron":"Ikozaéder"}},"width_top":{"name":"Szélesség / felső"},"height_bottom":{"name":"Magasság / alsó"}},"achievement":{"short_haul":{"name":"Rövid út","description":"Fejezd be a Kockát úgy, hogy minden lapja kék, legfeljebb húsz gurítással."},"octahedron_ace":{"name":"Nyolc lap, gyorsan","description":"Fejezd be az Oktaédert úgy, hogy minden lapja kék, legfeljebb harminc gurítással."},"scenic_route":{"name":"Nagy körút","description":"Gurítsd a testet legalább kétszázszor, mielőtt minden lapja kék lesz."}}},"dominosa":{"name":"Dominosa","description":"Találd meg, hol fekszik az összekevert dominókészlet a számok rácsában.","preset":{"up_to_double_3":"Dupla 3-ig","up_to_double_4":"Dupla 4-ig","up_to_double_5":"Dupla 5-ig","up_to_double_6":"Dupla 6-ig","up_to_double_7":"Dupla 7-ig","up_to_double_8":"Dupla 8-ig","up_to_double_9":"Dupla 9-ig"},"config":{"maximum_number_on_dominoes":{"name":"Legnagyobb szám a dominókon"},"difficulty":{"name":"Nehézség","choice":{"very_easy":"Nagyon könnyű","easy":"Könnyű","hard":"Nehéz","extreme":"Extrém","ambiguous":"Többértelmű"}}},"achievement":{"no_lines":{"name":"Ceruza nélkül","description":"Oldj meg egy legalább dupla 6-os készletet úgy, hogy egyetlen vonalat sem ceruzázol be."},"one_click_each":{"name":"Dominónként egy kattintás","description":"Oldj meg egy legalább dupla 6-os készletet dominónként egy kattintással, visszavonás nélkül."},"doubles_first":{"name":"Előbb a duplák","description":"Fektesd le a készlet összes dupláját, mielőtt bármely más dominót lefektetnél."}}},"fifteen":{"name":"Tizenöt","alsoKnownAs":"Tili-toli, 15-ös kirakó","description":"Tologasd a lapkákat, amíg sorba nem rendeződnek.","preset":{"3x3":"3×3","4x4":"4×4","5x5":"5×5"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"}},"achievement":{"short_shuffle":{"name":"Gyors rendrakás","description":"Rakd sorba a 4×4-est legfeljebb 100 lépésből."},"five_flyer":{"name":"Ötször öt, szélsebesen","description":"Rakd sorba az 5×5-öst három percen belül."},"scenic_route":{"name":"A kerülőút","description":"Használj több mint 300 lépést a 3×3-as sorba rakásához."}}},"filling":{"name":"Kitöltés","alsoKnownAs":"Fillomino","description":"Töltsd ki a rácsot úgy, hogy minden azonos számjegyekből álló csoport pontosan annyi mezőből álljon.","preset":{"9x7":"9×7","13x9":"13×9","17x13":"17×13"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"}},"achievement":{"in_ink":{"name":"Tintával írva","description":"Oldj meg egy rejtvényt úgy, hogy egyetlen számjegyet sem írsz át vagy törölsz, és nem használod a visszavonást."},"one_stroke":{"name":"Mindet egy lendülettel","description":"Oldj meg egy legalább 13×9-es rejtvényt úgy, hogy minden számjegycsoportot egyetlen lépésben írsz be."}},"action":{"f":{"label":"Kitöltés","title":"Húzz egy számjegytől, hogy beírd minden mezőbe, amelyen áthaladsz (F)"}}},"flip":{"name":"Átfordítás","alsoKnownAs":"Lights Out","description":"Világítsd ki az összes mezőt; minden nyomás a körülötte lévőket is átfordítja.","preset":{"3x3_crosses":"3×3 keresztek","4x4_crosses":"4×4 keresztek","5x5_crosses":"5×5 keresztek","3x3_random":"3×3 véletlen","4x4_random":"4×4 véletlen","5x5_random":"5×5 véletlen"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"shape_type":{"name":"Alakzat típusa","choice":{"crosses":"Keresztek","random":"Véletlen"}}},"achievement":{"press_once":{"name":"Csak egyszer","description":"Világítsd ki a legalább 4×4-es táblát úgy, hogy egyetlen mezőt sem nyomsz meg kétszer."},"fewest_presses":{"name":"Legkisebb erőfeszítés","description":"Világítsd ki az 5×5-ös táblát a lehető legkevesebb megnyomással."}}},"flood":{"name":"Elárasztás","alsoKnownAs":"Flood It","description":"Áraszd el a rácsot a sarokból, amíg egyszínű nem lesz — a megengedett lépésszámon belül.","preset":{"12x12_easy":"12×12 könnyű","12x12_medium":"12×12 közepes","12x12_hard":"12×12 nehéz","16x16_medium":"16×16 közepes","16x16_hard":"16×16 nehéz","12x12_3_colours":"12×12, 3 szín","12x12_4_colours":"12×12, 4 szín"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"colours":{"name":"Színek"},"extra_moves_permitted":{"name":"Engedélyezett többletlépések"}},"status":{"moves":"{n} / {limit} lépés"},"achievement":{"spare_moves":{"name":"Tartalék lépések","description":"Áraszd el a rácsot úgy, hogy legalább három lépésed megmaradjon."},"beat_the_solver":{"name":"Ember a gép felett","description":"Áraszd el a rácsot kevesebb lépésből, mint a számítógép saját megoldása."},"one_colour_short":{"name":"Egy szín híján","description":"Fogyj ki a lépésekből úgy, hogy már csak két szín maradt a rácson."}}},"galaxies":{"name":"Galaxisok","alsoKnownAs":"Spiral Galaxies, Tentai Show","description":"Oszd fel a rácsot tartományokra úgy, hogy mindegyik szimmetrikus legyen a benne lévő egyetlen pontra.","preset":{"7x7_medium":"7×7 közepes","7x7_extreme":"7×7 extrém","10x10_medium":"10×10 közepes","15x15_medium":"15×15 közepes"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"difficulty":{"name":"Nehézség","choice":{"medium":"Közepes","extreme":"Extrém"}}},"achievement":{"no_arrows":{"name":"Nyilak nélkül","description":"Oldj meg egy legalább 10×10-es rejtvényt úgy, hogy egyetlen nyilat sem húzol ki."},"steady_hand":{"name":"Állócsillagok","description":"Oldj meg egy legalább 10×10-es rejtvényt úgy, hogy egyetlen falat sem törölsz, és nem használod a visszavonást."}}},"guess":{"name":"Kitalálás","alsoKnownAs":"Mastermind","description":"Fejtsd meg a rejtett színsort a tippjeidre kapott jelekből.","preset":{"standard":"Standard","super":"Szuper"},"config":{"colours":{"name":"Színek"},"pegs_per_guess":{"name":"Bábuk tippenként"},"guesses":{"name":"Tippek"},"allow_blanks":{"name":"Üres helyek engedélyezése"},"allow_duplicates":{"name":"Ismétlődés engedélyezése"}},"action":{"l":{"label":"Betűk","title":"A bábuk jelölése betűkkel (L)"},"k":{"label":"Megtartás","title":"Kattints egy bábura a sorodban, hogy átkerüljön a következő tippbe (K)"}},"status":{"revealed":"A megoldás felfedve","solved":{"one":"Megoldva {n} tippből","other":"Megoldva {n} tippből"},"outOfGuesses":"Elfogytak a tippek: a megoldás felfedve","guessN":"{n}/{total}. tipp"},"achievement":{"five_guesses":{"name":"Kódfejtő","description":"Találd ki a rejtett sort legfeljebb öt tippből."},"super_sleuth":{"name":"Szuperdetektív","description":"Találd ki a Szuper mód ötbábus rejtett sorát legfeljebb hat tippből."},"so_near":{"name":"Majdnem sikerült","description":"Fogyj ki a tippekből úgy, hogy egy kivételével minden bábu a helyén van."}}},"inertia":{"name":"Tehetetlenség","description":"Csúsztass egy golyót a rácson, és gyűjts össze minden drágakövet anélkül, hogy aknába futnál.","preset":{"10x8":"10×8","15x12":"15×12","20x16":"20×16"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"}},"status":{"gems":"Drágakövek: {n}","deaths":" · Elvesztett életek: {n}"},"achievement":{"hat_trick":{"name":"Mesterhármas","description":"Gyűjts össze legalább három drágakövet a golyó egyetlen gurításával."},"shortcut":{"name":"Levágott kanyar","description":"Gyűjtsd össze az összes drágakövet egy legalább 15×12-es táblán kevesebb gurításból, mint a Megoldás."},"last_gem_mine":{"name":"Pürrhoszi győzelem","description":"Gurulj aknára ugyanazzal a gurítással, amellyel a legutolsó drágakövet is felszeded."}}},"keen":{"name":"Keen","alsoKnownAs":"KenKen, Calcudoku","description":"Töltsd ki a latin négyzetet úgy, hogy minden ketrecben kijöjjön a megadott eredmény.","preset":{"4x4_easy":"4×4 könnyű","5x5_easy":"5×5 könnyű","5x5_easy_x_only":"5×5 könnyű, csak ×","6x6_easy":"6×6 könnyű","6x6_medium":"6×6 közepes","6x6_medium_x_only":"6×6 közepes, csak ×","6x6_hard":"6×6 nehéz","6x6_expert":"6×6 szakértő","6x6_extreme":"6×6 extrém","9x9_medium":"9×9 közepes"},"config":{"grid_size":{"name":"Rács mérete"},"difficulty":{"name":"Nehézség","choice":{"easy":"Könnyű","medium":"Közepes","hard":"Nehéz","expert":"Szakértő","extreme":"Extrém"}},"multiplication_only":{"name":"Csak szorzás"}},"action":{"m":{"label":"Jelek","title":"Minden lehetőség beírása ceruzajelként minden üres mezőbe (M)"},"l":{"label":"Kiemelés","title":"Kiemel minden mezőt, amelyben a legutóbb érintett számjegy áll (L)"}},"achievement":{"no_pencil":{"name":"Fejszámolás","description":"Oldj meg egy legalább 6×6-os rejtvényt egyetlen ceruzajel nélkül."},"products_only":{"name":"Tiszta szorzat","description":"Oldj meg egy 6×6 közepes rejtvényt csak szorzással."}}},"lightup":{"name":"Világítás","alsoKnownAs":"Akari, Bijutsukan","description":"Helyezz el izzókat úgy, hogy minden mező világos legyen, és egyik izzó se világítson a másikra.","preset":{"7x7_easy":"7×7 könnyű","7x7_medium":"7×7 közepes","7x7_hard":"7×7 nehéz","10x10_easy":"10×10 könnyű","10x10_medium":"10×10 közepes","10x10_hard":"10×10 nehéz","14x14_easy":"14×14 könnyű","14x14_medium":"14×14 közepes","14x14_hard":"14×14 nehéz"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"of_black_squares":{"name":"Fekete mezők aránya (%)"},"symmetry":{"name":"Szimmetria","choice":{"none":"Nincs","2_way_mirror":"Kétirányú tükrözés","2_way_rotational":"Kétirányú forgatás","4_way_mirror":"Négyirányú tükrözés","4_way_rotational":"Négyirányú forgatás"}},"difficulty":{"name":"Nehézség","choice":{"easy":"Könnyű","medium":"Közepes","hard":"Nehéz"}}},"achievement":{"no_crosses":{"name":"Csak izzók","description":"Oldj meg egy legalább 10×10-es rejtvényt egyetlen kereszt nélkül."},"no_takebacks":{"name":"Fényes ötlet","description":"Oldj meg egy nehéz rejtvényt úgy, hogy egyetlen izzót sem veszel el."}},"action":{"x":{"label":"Kereszt","title":"A kattintás izzó helyett keresztet tesz (X)"}}},"loopy":{"name":"Hurkok","alsoKnownAs":"Slitherlink","description":"Rajzolj egyetlen zárt hurkot úgy, hogy minden szám a körülötte futó vonalakat számolja.","preset":{"7x7_squares_easy":"7×7 négyzetes, könnyű","10x10_squares_easy":"10×10 négyzetes, könnyű","7x7_squares_medium":"7×7 négyzetes, közepes","10x10_squares_medium":"10×10 négyzetes, közepes","7x7_squares_expert":"7×7 négyzetes, szakértő","10x10_squares_expert":"10×10 négyzetes, szakértő","10x10_triangular_expert":"10×10 háromszöges, szakértő","12x10_honeycomb_expert":"12×10 méhsejt, szakértő","7x7_snub_square_expert":"7×7 tompított négyzetes, szakértő","9x9_cairo_expert":"9×9 kairói, szakértő","5x4_great_hexagonal_expert":"5×4 nagy hatszöges, szakértő","7x7_octagonal_expert":"7×7 nyolcszöges, szakértő","5x5_kites_expert":"5×5 sárkányos, szakértő","5x5_floret_expert":"5×5 rozettás, szakértő","5x4_dodecagonal_expert":"5×4 tizenkétszöges, szakértő","5x4_great_dodecagonal_expert":"5×4 nagy tizenkétszöges, szakértő","10x10_penrose_kite_dart_expert":"10×10 Penrose (sárkány/nyíl), szakértő","10x10_penrose_rhombs_expert":"10×10 Penrose (rombuszok), szakértő"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"grid_type":{"name":"Rács típusa","choice":{"squares":"Négyzetek","triangular":"Háromszöges","honeycomb":"Méhsejt","snub_square":"Tompított négyzetes","cairo":"Kairói","great_hexagonal":"Nagy hatszöges","octagonal":"Nyolcszöges","kites":"Sárkányok","floret":"Rozetta","dodecagonal":"Tizenkétszöges","great_dodecagonal":"Nagy tizenkétszöges","penrose_kite_dart":"Penrose (sárkány/nyíl)","penrose_rhombs":"Penrose (rombuszok)"}},"difficulty":{"name":"Nehézség","choice":{"easy":"Könnyű","medium":"Közepes","hard":"Nehéz","expert":"Szakértő"}}},"achievement":{"off_grid":{"name":"Rácson kívül","description":"Oldj meg egy rejtvényt a négyzetestől eltérő rácson."},"no_crosses":{"name":"Csak a hurok","description":"Oldj meg egy 10×10-es rejtvényt úgy, hogy egyetlen élt sem húzol ki."},"aperiodic":{"name":"Aperiodikus","description":"Oldj meg egy Penrose-rejtvényt úgy, hogy egyetlen meghúzott vonalat sem törölsz."}},"action":{"x":{"label":"Kereszt","title":"A kattintás vonal rajzolása helyett kihúzza az éleket (X)"}}},"magnets":{"name":"Mágnesek","description":"Tegyél a dominók helyére mágneseket vagy üres lapokat úgy, hogy a pólusok száma mindenhol stimmeljen.","preset":{"6x5_easy":"6×5 könnyű","6x5_hard":"6×5 nehéz","6x5_hard_strip_clues":"6×5 nehéz, ritkított nyomok","8x7_easy":"8×7 könnyű","8x7_hard":"8×7 nehéz","8x7_hard_strip_clues":"8×7 nehéz, ritkított nyomok","10x9_hard":"10×9 nehéz","10x9_hard_strip_clues":"10×9 nehéz, ritkított nyomok"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"difficulty":{"name":"Nehézség","choice":{"easy":"Könnyű","hard":"Nehéz"}},"strip_clues":{"name":"Ritkított nyomok"}},"achievement":{"no_flips":{"name":"Jó irányban","description":"Oldj meg egy legalább 8×7-es rejtvényt úgy, hogy egyetlen mágnest sem fordítasz meg."},"stripped":{"name":"Csupasz vezetékek","description":"Oldj meg egy 10×9 nehéz, ritkított nyomos rejtvényt tíz percen belül."}},"action":{"b":{"label":"Üres","title":"A kattintás mágnes helyett üres lapnak jelöli a dominót (B)"}}},"map":{"name":"Térkép","description":"Színezd ki a térképet négy színnel úgy, hogy két szomszédos tartomány se legyen azonos.","preset":{"20x15_easy_30_regions":"20×15 könnyű, 30 tartomány","20x15_medium_30_regions":"20×15 közepes, 30 tartomány","20x15_hard_30_regions":"20×15 nehéz, 30 tartomány","20x15_extreme_30_regions":"20×15 extrém, 30 tartomány","30x25_medium_75_regions":"30×25 közepes, 75 tartomány","30x25_hard_75_regions":"30×25 nehéz, 75 tartomány"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"regions":{"name":"Tartományok"},"difficulty":{"name":"Nehézség","choice":{"easy":"Könnyű","medium":"Közepes","hard":"Nehéz","extreme":"Extrém"}}},"achievement":{"no_dots":{"name":"Szabadkézi atlasz","description":"Oldj meg egy nehéz vagy annál nehezebb rejtvényt egyetlen ceruzapont nélkül."},"steady_brush":{"name":"Biztos ecset","description":"Oldj meg egy extrém rejtvényt úgy, hogy egyetlen tartomány színét sem változtatod meg."}},"action":{"l":{"label":"Számok","title":"Szám megjelenítése minden tartományban (L)"}}},"mines":{"name":"Aknák","alsoKnownAs":"Aknakereső, Minesweeper","description":"Fedj fel minden mezőt, amely alatt nincs akna; találgatni sosem kell.","preset":{"9x9_beginner_10_mines":"9×9 Kezdő, 10 akna","9x9_35_mines":"9×9, 35 akna","16x16_intermediate_40_mines":"16×16 Haladó, 40 akna","16x16_99_mines":"16×16, 99 akna","30x16_expert_99_mines":"30×16 Profi, 99 akna","30x16_170_mines":"30×16, 170 akna"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"mines":{"name":"Aknák"},"ensure_solubility":{"name":"Megoldhatóság biztosítása"}},"status":{"marked":"Megjelölve: {n} / {total}","deaths":" · Robbanások: {n}"},"achievement":{"no_flags":{"name":"Zászló nélkül","description":"Nyerj meg egy játékot egyetlen zászló lerakása nélkül."},"expert_sweep":{"name":"Tűzszerész","description":"Nyerd meg a 30×16-os Profi táblát öt percen belül."},"so_close":{"name":"Egy hajszálon múlt","description":"Lépj aknára úgy, hogy legfeljebb három biztonságos mező maradt felfedetlenül."}}},"net":{"name":"Hálózat","alsoKnownAs":"NetWalk","description":"Forgasd a lapkákat, amíg mindegyik a központhoz nem kapcsolódik.","preset":{"5x5":"5×5","7x7":"7×7","9x9":"9×9","11x11":"11×11","13x11":"13×11","5x5_wrapping":"5×5 körbeérő","7x7_wrapping":"7×7 körbeérő","9x9_wrapping":"9×9 körbeérő","11x11_wrapping":"11×11 körbeérő","13x11_wrapping":"13×11 körbeérő"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"walls_wrap_around":{"name":"A falak körbeérnek"},"barrier_probability":{"name":"Falak valószínűsége"},"ensure_unique_solution":{"name":"Egyértelmű megoldás biztosítása"}},"action":{"j":{"label":"Keverés","title":"Minden nem rögzített lapka véletlenszerű elforgatása (J)"},"scroll_left":{"label":"←","title":"A nézet görgetése balra (Shift+←)"},"scroll_up":{"label":"↑","title":"A nézet görgetése felfelé (Shift+↑)"},"scroll_down":{"label":"↓","title":"A nézet görgetése lefelé (Shift+↓)"},"scroll_right":{"label":"→","title":"A nézet görgetése jobbra (Shift+→)"},"k":{"label":"Rögzítés","title":"A kattintás forgatás helyett rögzíti vagy feloldja a lapkákat (K)"}},"status":{"active":"Aktív: {n}/{total}"},"achievement":{"no_locks":{"name":"Lakat nélkül","description":"Oldj meg egy legalább 9×9-es rejtvényt egyetlen lapka rögzítése nélkül."},"not_a_turn_wasted":{"name":"Egy fordulat sem hiába","description":"Oldj meg egy legalább 9×9-es rejtvényt úgy, hogy egyetlen lapkát sem forgatsz többet a szükségesnél."},"jumbled":{"name":"Összerázva","description":"Nyomd meg a Keverés gombot, és utána is oldd meg a rejtvényt."}}},"netslide":{"name":"Csúszóhálózat","description":"Tologasd a hálózatdarabok sorait és oszlopait, amíg minden össze nem kapcsolódik.","preset":{"3x3_easy":"3×3 könnyű","3x3_medium":"3×3 közepes","3x3_hard":"3×3 nehéz","4x4_easy":"4×4 könnyű","4x4_medium":"4×4 közepes","4x4_hard":"4×4 nehéz","5x5_easy":"5×5 könnyű","5x5_medium":"5×5 közepes","5x5_hard":"5×5 nehéz"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"walls_wrap_around":{"name":"A falak körbeérnek"},"barrier_probability":{"name":"Falak valószínűsége"},"number_of_shuffling_moves":{"name":"Keverő lépések száma"}},"status":{"active":" · Aktív: {n}/{total}"},"achievement":{"tidy_four":{"name":"Takaros bekötés","description":"Oldj meg egy 4×4-es rejtvényt legfeljebb 18 csúsztatásból."},"lean_five":{"name":"Vonalszerelő","description":"Oldj meg egy 5×5-ös rejtvényt legfeljebb 32 csúsztatásból."},"big_switch":{"name":"A nagy kapcsolás","description":"Helyezd áram alá az egész hálózatot egyetlen csúsztatással, amikor még a felénél kevesebb volt áram alatt."}}},"pattern":{"name":"Minta","alsoKnownAs":"Grafilogika, japán rejtvény, Nonogram","description":"Töltsd ki a rácsot a sorokhoz és oszlopokhoz megadott blokkhosszak alapján.","preset":{"10x10":"10×10","15x15":"15×15","20x20":"20×20","25x25":"25×25","30x30":"30×30"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"}},"achievement":{"no_dots":{"name":"Egy pont sem","description":"Oldj meg egy legalább 15×15-ös rejtvényt egyetlen pont lerakása nélkül."},"inked_in":{"name":"Kitintázva","description":"Oldj meg egy legalább 20×20-as rejtvényt úgy, hogy egyetlen fekete mezőt sem törölsz."}},"action":{"e":{"label":"Radír","title":"Kattintással vagy húzással ismeretlenre törlöd a mezőket (E)"}}},"pearl":{"name":"Gyöngyök","alsoKnownAs":"Masyu","description":"Rajzolj egyetlen zárt hurkot, amely a fehér gyöngyökön egyenesen halad át, a feketéknél pedig befordul.","preset":{"6x6_easy":"6×6 könnyű","6x6_tricky":"6×6 trükkös","8x8_easy":"8×8 könnyű","8x8_tricky":"8×8 trükkös","10x10_easy":"10×10 könnyű","10x10_tricky":"10×10 trükkös","12x8_easy":"12×8 könnyű","12x8_tricky":"12×8 trükkös"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"difficulty":{"name":"Nehézség","choice":{"easy":"Könnyű","tricky":"Trükkös"}},"allow_unsoluble":{"name":"Megoldhatatlan is lehet"}},"achievement":{"no_crosses":{"name":"Gyöngysor","description":"Oldj meg egy 10×10-es rejtvényt egyetlen kereszt nélkül."},"one_stroke":{"name":"Egy vonással","description":"Rajzold meg egy legalább 8×8-as rejtvény teljes hurkát egyetlen húzással."}},"action":{"x":{"label":"Kereszt","title":"Kattintással vagy húzással kihúzod az éleket, amelyeket a hurok nem használhat (X)"}}},"pegs":{"name":"Bábuk","alsoKnownAs":"Solitaire, szoliter, remetejáték","description":"Ugrasd át a bábukat egymáson, amíg csak egy marad.","preset":{"cross":"Kereszt","octagon":"Nyolcszög","random_5x5":"Véletlen 5×5","random_7x7":"Véletlen 7×7","random_9x9":"Véletlen 9×9"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"board_type":{"name":"Tábla típusa","choice":{"cross":"Kereszt","octagon":"Nyolcszög","random":"Véletlen"}}},"status":{"stuck":"Nincs több lépés – {n} bábu maradt","playing":"Maradék bábuk: {n}  ·  Lépések: {moves}"},"achievement":{"dead_centre":{"name":"Pont középen","description":"Fejezd be a Kereszt táblát úgy, hogy az utolsó bábu a középső lyukban álljon."},"hopscotch":{"name":"Ugróiskola","description":"Nyerj meg egy játékot úgy, hogy egy bábu négyszer ugrik egymás után."},"pegged_out":{"name":"Beragadva","description":"Akadj el úgy, hogy még legalább tíz bábu van a táblán."}}},"range":{"name":"Látótávolság","alsoKnownAs":"Kurodoko, Kuromasu","description":"Feketíts be mezőket úgy, hogy minden szám pontosan annyi fehér mezőt lásson a sorában és az oszlopában.","preset":{"9x6":"9×6","12x8":"12×8","13x9":"13×9","16x11":"16×11"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"}},"achievement":{"no_dots":{"name":"Tiszta kontraszt","description":"Oldj meg egy legalább 13×9-es rejtvényt egyetlen pont lerakása nélkül."},"quick_sight":{"name":"Sasszem","description":"Oldj meg egy 16×11-es rejtvényt öt percen belül."}},"action":{"e":{"label":"Radír","title":"Kattintással vagy húzással törlöd a fekete mezőket és a pontokat (E)"}}},"rect":{"name":"Téglalapok","alsoKnownAs":"Shikaku","description":"Oszd fel a rácsot téglalapokra úgy, hogy mindegyikben egyetlen szám legyen, és az a téglalap területét adja meg.","preset":{"7x7":"7×7","9x9":"9×9","11x11":"11×11","13x13":"13×13","15x15":"15×15","17x17":"17×17","19x19":"19×19"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"expansion_factor":{"name":"Tágítási tényező"},"ensure_unique_solution":{"name":"Egyértelmű megoldás biztosítása"}},"status":{"drag":"{w}×{h} "},"achievement":{"clean_cuts":{"name":"Tiszta vágások","description":"Oldj meg egy legalább 11×11-es rejtvényt legfeljebb annyi lépésből, ahány szám van rajta."},"quick_carver":{"name":"Gyors szabász","description":"Oldj meg egy 19×19-es rejtvényt tíz percen belül."}},"action":{"e":{"label":"Radír","title":"Húzz végig egy területen a benne lévő vonalak törléséhez, vagy kattints egy vonalra az eltávolításához (E)"}}},"samegame":{"name":"Azonos színek","alsoKnownAs":"SameGame, Clickomania","description":"Ürítsd ki a táblát: tüntesd el az egymáshoz érő, azonos színű mezők csoportjait.","preset":{"5x5_3_colours":"5×5, 3 szín","10x5_3_colours":"10×5, 3 szín","15x10_3_colours":"15×10, 3 szín","15x10_4_colours":"15×10, 4 szín","20x15_4_colours":"20×15, 4 szín"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"no_of_colours":{"name":"Színek száma"},"scoring_system":{"name":"Pontozás","choice":{"n_1_2":"(n-1)^2","n_2_2":"(n-2)^2"}},"ensure_solubility":{"name":"Megoldhatóság biztosítása"}},"status":{"score":"Pontszám: {n}","complete":"Üres a tábla! {score}","stuck":"Nincs több lépés. {score}","selected":"{score} · Kijelölve: {n} (+{points})"},"achievement":{"avalanche":{"name":"Lavina","description":"Távolíts el egyszerre egy legalább 25 mezős csoportot, majd ürítsd ki a táblát."},"no_pairs":{"name":"Párok nélkül","description":"Ürítsd ki a legalább 15×10-es táblát úgy, hogy egyetlen párt sem távolítasz el."},"last_one":{"name":"Az utolsó mező","description":"Akadj el úgy, hogy egyetlen mező maradt a táblán."}}},"signpost":{"name":"Útjelző","description":"Fűzd fel a mezőket egyetlen számozott útra úgy, hogy minden lépés a nyíl irányába haladjon.","preset":{"4x4":"4×4","4x4_free_ends":"4×4, szabad végek","5x5":"5×5","5x5_free_ends":"5×5, szabad végek","6x6":"6×6","7x7":"7×7"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"start_and_end_in_corners":{"name":"Kezdet és vég a sarkokban"}},"achievement":{"unbroken":{"name":"Töretlen lánc","description":"Oldj meg egy rejtvényt úgy, hogy egyetlen kapcsolatot sem bontasz fel vagy cserélsz le."},"in_order":{"name":"Egyenesen végig","description":"Oldj meg egy legalább 6×6-os rejtvényt úgy, hogy az utat sorban kötöd össze, 1-től a csillagig."},"star_first":{"name":"Hullócsillag","description":"Az első kapcsolatod a csillagba vezessen, aztán oldd meg a rejtvényt."}},"action":{"b":{"label":"Szétbontás","title":"Kattints egy mezőre, hogy az egész láncát szétbontsd (B)"}}},"singles":{"name":"Egyediek","alsoKnownAs":"Hitori","description":"Sötétíts el mezőket úgy, hogy egy sorban és egy oszlopban se ismétlődjön szám, és a rács ne essen szét.","preset":{"5x5_easy":"5×5 könnyű","5x5_tricky":"5×5 trükkös","6x6_easy":"6×6 könnyű","6x6_tricky":"6×6 trükkös","8x8_easy":"8×8 könnyű","8x8_tricky":"8×8 trükkös","10x10_easy":"10×10 könnyű","10x10_tricky":"10×10 trükkös","12x12_easy":"12×12 könnyű","12x12_tricky":"12×12 trükkös"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"difficulty":{"name":"Nehézség","choice":{"easy":"Könnyű","tricky":"Trükkös"}}},"achievement":{"no_circles":{"name":"Karikák nélkül","description":"Oldj meg egy legalább 8×8-as rejtvényt egyetlen szám bekarikázása nélkül."},"sure_hand":{"name":"Határozott kéz","description":"Oldj meg egy legalább 10×10-es rejtvényt úgy, hogy egyetlen befeketített mezőt sem állítasz vissza."}}},"sixteen":{"name":"Tizenhat","description":"Tolj egész sorokat és oszlopokat körbe a rácson, hogy sorrendbe rakd a lapkákat.","preset":{"3x3":"3×3","4x3":"4×3","4x4":"4×4","5x4":"5×4","5x5":"5×5"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"number_of_shuffling_moves":{"name":"Keverő lépések száma"}},"achievement":{"lean_slides":{"name":"Takarékos csúsztató","description":"Rakd sorba a 4×4-est legfeljebb 100 csúsztatásból."},"five_in_200":{"name":"Nagy rendező","description":"Rakd sorba az 5×5-öst legfeljebb 200 csúsztatásból."},"round_the_doughnut":{"name":"Körbe a fánkon","description":"Csúsztass körbe egy sort vagy oszlopot, amíg vissza nem ér oda, ahonnan indult."}}},"slant":{"name":"Átlók","alsoKnownAs":"Gokigen Naname","description":"Húzz átlót minden mezőbe úgy, hogy a számok stimmeljenek, és ne keletkezzen hurok.","preset":{"5x5_easy":"5×5 könnyű","5x5_hard":"5×5 nehéz","8x8_easy":"8×8 könnyű","8x8_hard":"8×8 nehéz","12x10_easy":"12×10 könnyű","12x10_hard":"12×10 nehéz"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"difficulty":{"name":"Nehézség","choice":{"easy":"Könnyű","hard":"Nehéz"}}},"achievement":{"no_loops":{"name":"Hurokmentes","description":"Oldj meg egy legalább 8×8-as rejtvényt úgy, hogy egyszer sem zársz be hurkot."},"steady_hand":{"name":"Elsőre jó","description":"Oldj meg egy 12×10-es rejtvényt úgy, hogy egyetlen vonalat sem változtatsz meg utólag."}}},"solo":{"name":"Solo","alsoKnownAs":"Sudoku","description":"Töltsd ki a rácsot úgy, hogy minden sorban, oszlopban és blokkban minden számjegy pontosan egyszer szerepeljen.","preset":{"4x4_very_easy":"4×4 nagyon könnyű","6x6_easy":"6×6 könnyű","9x9_very_easy":"9×9 nagyon könnyű","9x9_easy":"9×9 könnyű","9x9_x_diagonal_easy":"9×9 X, könnyű","9x9_medium":"9×9 közepes","9x9_hard":"9×9 nehéz","9x9_x_diagonal_hard":"9×9 X, nehéz","9x9_expert":"9×9 szakértő","9x9_extreme":"9×9 extrém","9x9_killer":"9×9 killer","9x9_jigsaw_easy":"9×9 kirakós, könnyű","9x9_jigsaw_x_diagonal_easy":"9×9 kirakós X, könnyű","9x9_jigsaw_hard":"9×9 kirakós, nehéz","12x12_easy":"12×12 könnyű","16x16_easy":"16×16 könnyű"},"config":{"columns_of_sub_blocks":{"name":"Blokkoszlopok száma"},"rows_of_sub_blocks":{"name":"Blokksorok száma"},"x_require_every_number_in_each_main_diagonal":{"name":"„X” (minden szám szerepeljen mindkét fő átlóban)"},"jigsaw_irregularly_shaped_sub_blocks":{"name":"Kirakós (szabálytalan alakú blokkok)"},"killer_digit_sums":{"name":"Killer (számjegyösszegek)"},"symmetry":{"name":"Szimmetria","choice":{"none":"Nincs","2_way_rotation":"Kétirányú forgatás","4_way_rotation":"Négyirányú forgatás","2_way_mirror":"Kétirányú tükrözés","2_way_diagonal_mirror":"Kétirányú átlós tükrözés","4_way_mirror":"Négyirányú tükrözés","4_way_diagonal_mirror":"Négyirányú átlós tükrözés","8_way_mirror":"Nyolcirányú tükrözés"}},"difficulty":{"name":"Nehézség","choice":{"very_easy":"Nagyon könnyű","easy":"Könnyű","medium":"Közepes","hard":"Nehéz","expert":"Szakértő","extreme":"Extrém"}}},"action":{"m":{"label":"Jelek","title":"Minden lehetőség beírása ceruzajelként minden üres mezőbe (M)"},"l":{"label":"Kiemelés","title":"Kiemel minden mezőt, amelyben a legutóbb érintett számjegy áll (L)"}},"achievement":{"pen_only":{"name":"Toll, ceruza nélkül","description":"Oldj meg egy 9×9 közepes, killer vagy annál nehezebb rejtvényt egyetlen ceruzajel nélkül."},"no_second_thoughts":{"name":"Semmi habozás","description":"Oldj meg egy 9×9 szakértő vagy annál nehezebb rejtvényt úgy, hogy egyetlen számjegyet sem írsz át vagy törölsz."}}},"tents":{"name":"Sátrak","alsoKnownAs":"Tents and Trees","description":"Verj sátrat minden fa mellé úgy, hogy két sátor se érjen össze.","preset":{"8x8_easy":"8×8 könnyű","8x8_tricky":"8×8 trükkös","10x10_easy":"10×10 könnyű","10x10_tricky":"10×10 trükkös","15x15_easy":"15×15 könnyű","15x15_tricky":"15×15 trükkös"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"difficulty":{"name":"Nehézség","choice":{"easy":"Könnyű","tricky":"Trükkös"}}},"achievement":{"no_grass":{"name":"Tökéletes tábor","description":"Oldj meg egy legalább 10×10-es rejtvényt úgy, hogy egyetlen mezőt sem jelölsz fűnek."},"no_strikes":{"name":"Boldog táborozók","description":"Oldj meg egy 15×15-ös rejtvényt úgy, hogy egyetlen sátrat sem bontasz le."}}},"towers":{"name":"Tornyok","alsoKnownAs":"Felhőkarcolók, Skyscrapers","description":"Építs tornyokat úgy, hogy minden szélső nyom az onnan látható tornyok számát adja.","preset":{"4x4_easy":"4×4 könnyű","5x5_easy":"5×5 könnyű","5x5_hard":"5×5 nehéz","6x6_easy":"6×6 könnyű","6x6_hard":"6×6 nehéz","6x6_expert":"6×6 szakértő","6x6_extreme":"6×6 extrém"},"config":{"grid_size":{"name":"Rács mérete"},"difficulty":{"name":"Nehézség","choice":{"easy":"Könnyű","hard":"Nehéz","expert":"Szakértő","extreme":"Extrém"}}},"action":{"m":{"label":"Jelek","title":"Minden lehetőség beírása ceruzajelként minden üres mezőbe (M)"},"l":{"label":"Kiemelés","title":"Kiemel minden mezőt, amelyben a legutóbb érintett számjegy áll (L)"}},"achievement":{"no_pencil":{"name":"Látkép fejben","description":"Oldj meg egy 6×6-os rejtvényt egyetlen ceruzajel nélkül."},"clean_build":{"name":"Időtálló","description":"Oldj meg egy 6×6 szakértő vagy extrém rejtvényt úgy, hogy egyetlen tornyot sem változtatsz meg utólag."},"tallest_first":{"name":"Előbb a legmagasabbak","description":"Építsd fel az összes legmagasabb tornyot minden más előtt, aztán oldd meg a rácsot."}}},"tracks":{"name":"Sínek","alsoKnownAs":"Train Tracks","description":"Fektess egyetlen vasútvonalat a bejárattól a kijáratig, a megadott számokkal egyezően.","preset":{"8x8_easy":"8×8 könnyű","8x8_tricky":"8×8 trükkös","10x8_easy":"10×8 könnyű","10x8_tricky":"10×8 trükkös","10x10_easy":"10×10 könnyű","10x10_tricky":"10×10 trükkös","15x10_easy":"15×10 könnyű","15x10_tricky":"15×10 trükkös","15x15_easy":"15×15 könnyű","15x15_tricky":"15×15 trükkös"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"difficulty":{"name":"Nehézség","choice":{"easy":"Könnyű","tricky":"Trükkös"}},"disallow_consecutive_1_clues":{"name":"Szomszédos 1-es nyomok tiltása"}},"achievement":{"no_crosses":{"name":"Semmi sincs kihúzva","description":"Oldj meg egy legalább 10×10-es rejtvényt úgy, hogy egyetlen mezőt vagy oldalt sem húzol ki."},"no_lift":{"name":"Teljes gőzzel előre","description":"Oldj meg egy legalább 15×10-es rejtvényt úgy, hogy egyetlen lerakott sínt sem szedsz fel."},"long_haul":{"name":"Hosszú út","description":"Rakj le síneket tíz mezőn át egyetlen húzással, aztán fejezd be a vonalat."}},"action":{"e":{"label":"Radír","title":"Kattintással vagy húzással tisztára törlöd a mezőket (E)"}}},"twiddle":{"name":"Forgatás","description":"Forgasd a lapkák négyzetes blokkjait, hogy a számok visszakerüljenek sorrendbe.","preset":{"3x3_rows_only":"3×3 csak sorok","3x3_normal":"3×3 normál","3x3_orientable":"3×3 forgásérzékeny","4x4_normal":"4×4 normál","4x4_orientable":"4×4 forgásérzékeny","4x4_rotating_3x3_blocks":"4×4, forgó 3×3-as blokkok","5x5_rotating_3x3_blocks":"5×5, forgó 3×3-as blokkok","6x6_rotating_4x4_blocks":"6×6, forgó 4×4-as blokkok"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"rotating_block_size":{"name":"Forgatott blokk mérete"},"one_number_per_row":{"name":"Soronként egy szám"},"orientation_matters":{"name":"Az állás is számít"},"number_of_shuffling_moves":{"name":"Keverő lépések száma"}},"achievement":{"few_turns":{"name":"Húsz fordulat","description":"Oldj meg egy 3×3 normál rejtvényt legfeljebb 20 forgatásból."},"perfect_ten":{"name":"Tökéletes tízes","description":"Oldj meg egy 3×3 normál rejtvényt legfeljebb 10 forgatásból."},"dizzy":{"name":"Körbe-körbe","description":"Forgass el egy blokkot négyszer egymás után ugyanabba az irányba, aztán oldd meg a rejtvényt."}},"action":{"t":{"label":"Jobbra","title":"Irányok felcserélése: a kattintás az óramutató járásával megegyezően, a jobb gombos kattintás ellentétesen forgat (T)"}}},"undead":{"name":"Élőholtak","alsoKnownAs":"Haunted Mirror Maze","description":"Helyezz el szellemeket, vámpírokat és zombikat úgy, hogy a tükrökben látott számok stimmeljenek.","preset":{"4x4_easy":"4×4 könnyű","4x4_normal":"4×4 normál","4x4_tricky":"4×4 trükkös","5x5_easy":"5×5 könnyű","5x5_normal":"5×5 normál","5x5_tricky":"5×5 trükkös","7x7_easy":"7×7 könnyű","7x7_normal":"7×7 normál"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"difficulty":{"name":"Nehézség","choice":{"easy":"Könnyű","normal":"Normál","tricky":"Trükkös"}}},"keypad":{"g":"Szellem","v":"Vámpír","z":"Zombi"},"achievement":{"no_pencil":{"name":"Higgy a szemednek","description":"Oldj meg egy legalább 5×5-ös rejtvényt egyetlen ceruzajel nélkül."},"fearless":{"name":"Rettenthetetlen","description":"Oldj meg egy trükkös rejtvényt úgy, hogy egyetlen szörnyet sem változtatsz meg utólag."}},"action":{"s":{"label":"Látóvonal","title":"A látóvonalak követése egy mezőn át vagy egy szélső számtól (S)"}}},"unequal":{"name":"Egyenlőtlen","alsoKnownAs":"Futoshiki","description":"Egészítsd ki a latin négyzetet úgy, hogy minden nagyobb-jel teljesüljön.","preset":{"4x4_easy":"4×4 könnyű","5x5_easy":"5×5 könnyű","5x5_medium":"5×5 közepes","5x5_medium_adjacent":"5×5 közepes (szomszédos)","5x5_hard":"5×5 nehéz","6x6_easy":"6×6 könnyű","6x6_medium":"6×6 közepes","6x6_medium_adjacent":"6×6 közepes (szomszédos)","6x6_hard":"6×6 nehéz","7x7_medium":"7×7 közepes","7x7_medium_adjacent":"7×7 közepes (szomszédos)","7x7_hard":"7×7 nehéz"},"config":{"mode":{"name":"Mód","choice":{"unequal":"Egyenlőtlen","adjacent":"Szomszédos"}},"size_s_s":{"name":"Méret (s*s)"},"difficulty":{"name":"Nehézség","choice":{"very_easy":"Nagyon könnyű","easy":"Könnyű","medium":"Közepes","hard":"Nehéz","extreme":"Extrém"}}},"action":{"m":{"label":"Jelek","title":"Minden lehetőség beírása ceruzajelként minden üres mezőbe (M)"},"h":{"label":"Tipp","title":"Csak az egyszerű logika után megmaradó lehetőségek beírása ceruzajelként (H)"},"l":{"label":"Kiemelés","title":"Kiemel minden mezőt, amelyben a legutóbb érintett számjegy áll (L)"}},"achievement":{"adjacent_bare":{"name":"Jó szomszédság","description":"Oldj meg egy rejtvényt Szomszédos módban egyetlen ceruzajel nélkül."},"extreme_bare":{"name":"Minden fejben","description":"Oldj meg egy extrém rejtvényt egyetlen ceruzajel nélkül."}}},"unruly":{"name":"Rakoncátlan","alsoKnownAs":"Binairo, Takuzu","description":"Színezz minden mezőt feketére vagy fehérre: soronként és oszloponként egyenlő számban, és sose legyen három egyforma egymás mellett.","preset":{"8x8_easy":"8×8 könnyű","8x8_normal":"8×8 normál","10x10_easy":"10×10 könnyű","10x10_normal":"10×10 normál","14x14_easy":"14×14 könnyű","14x14_normal":"14×14 normál"},"config":{"width":{"name":"Szélesség"},"height":{"name":"Magasság"},"unique_rows_and_columns":{"name":"Egyedi sorok és oszlopok"},"difficulty":{"name":"Nehézség","choice":{"easy":"Könnyű","normal":"Normál"}}},"achievement":{"no_threes":{"name":"Sosem három","description":"Oldj meg egy legalább 10×10-es rejtvényt úgy, hogy soha nem kerül három egyforma egymás mellé."},"first_time":{"name":"Fekete-fehér","description":"Oldj meg egy 14×14-es rejtvényt úgy, hogy egyetlen mezőt sem változtatsz meg utólag."}},"action":{"e":{"label":"Radír","title":"Kattints egy mezőre a kiürítéséhez (E)"}}},"untangle":{"name":"Kibogozás","alsoKnownAs":"Planarity","description":"Húzogasd a pontokat, amíg sehol sem keresztezik egymást a vonalak.","preset":{"6_points":"6 pont","10_points":"10 pont","15_points":"15 pont","20_points":"20 pont","25_points":"25 pont"},"config":{"number_of_points":{"name":"Pontok száma"}},"action":{"g":{"label":"Illesztés","title":"Az elejtett pontok rácsra illesztése (G)"}},"achievement":{"one_touch":{"name":"Könnyed érintés","description":"Bogozz ki legalább 10 pontot úgy, hogy egyetlen pontot sem veszel fel kétszer."},"only_downhill":{"name":"Csak lejtmenet","description":"Bogozz ki legalább 20 pontot úgy, hogy egyetlen lépés se növelje a piros vonalak számát."}}}}`),$=JSON.parse('{"blackbox":{"step1":{"text":"Ebben a 4×4-es dobozban egy golyó rejtőzik. Lőj be lézereket a szélen álló pontokból, gondold ki, hol kell lennie, jelöld meg, és nyomd meg a sarokgombot."},"step2":{"text":"Kattints a **bal szélen, a második sor magasságában** álló pontra. A sugár útközben elhajlik, és máshol jön ki; a két végét ugyanaz a szám jelöli."},"step3":{"text":"Most lőj a **második oszlop tetején** álló pontból. A **H** azt jelenti, hogy a sugár egyenesen egy golyóba futott, és soha nem jött ki."},"step4":{"text":"Lőj az **első oszlop tetején** álló pontból is. Az **R** azt jelenti, hogy a sugár rögtön visszapattant; ez akkor történik, ha a nyílás mellett átlósan golyó áll."},"step5":{"text":"Az R szerint az első oszlop mellett átlósan van egy golyó, a H szerint pedig a második oszlopban lefelé: csak ez az egy mező felel meg mindkettőnek."},"step6":{"text":"**Kattints arra a mezőre**, hogy odajelöld a golyót."},"step7":{"text":"Minden golyó meg van jelölve, így a **bal felső sarokban lévő pipa** aktív. Kattints rá, és a játék ellenőrzi a válaszodat."},"step8":{"text":"Helyes! Játék közben **jobb gombbal kattintva** lelakatolhatod azt a mezőt, amelyről már biztosan tudod, hogy üres, a **Megoldás** pedig elárulja a választ."}},"bridges":{"step1":{"text":"Minden szigeten a szám azt mondja meg, hány hídvéget kér. Kösd egyetlen hálózattá az összes szigetet: két sziget közé legfeljebb két híd kerülhet, és hidak nem keresztezhetik egymást."},"step2":{"text":"Az **alsó 2**-essel csak egy sziget van egy vonalban: a felső **4**-es. **Húzz** a 2-estől a 4-es felé, és átdobsz egy hidat."},"step3":{"text":"Két hídvéget kér, és csak ez az egy pár jöhet szóba. **Húzz** még egyszer ugyanúgy egy második, párhuzamos hídért."},"step4":{"text":"Ez a sziget kész. **Kattints** rá, hogy késznek jelöld: szürke lesz, a hídjai pedig rögzülnek, így véletlenül sem tudod elrontani őket."},"step5":{"text":"Hidak nem keresztezhetik egymást, így a **két 1-es** közötti összeköttetés már szóba sem jöhet. **Jobb gombbal húzz** a bal 1-estől a jobb felé, hogy ezt beceruzázd."},"step6":{"text":"Mindegyik 1-esnek egy kijárata maradt, és ebből következik a maradék négy híd. A **Megoldás** befejezi a rejtvényt (a **G** pedig megmutat minden vonalat, amerre híd futhat).","textTouch":"Mindegyik 1-esnek egy kijárata maradt, és ebből következik a maradék négy híd. A **Megoldás** befejezi a rejtvényt."}},"cube":{"step1":{"text":"A kockának hat lapja van, és hat mező kék. Görgesd addig, amíg minden lap össze nem szed egyet: valahányszor letoppan, az alsó lap és a mező színt cserél."},"step2":{"text":"Egy kattintás a választott mező felé billenti át a kockát az élén. **Kattints a kocka alatti kék mezőre**, hogy a színe a leérkező lapra kerüljön."},"step3":{"text":"Az elhagyott mező most üres — a színek tényleg cserélődnek. **Kattints a jobbra lévő kék mezőre**, hogy egy második lap is kék legyen."},"step4":{"text":"A **nyílbillentyűk** is görgetik a kockát. Nyomd meg egyszer a **→** gombot, és felszeded a harmadik kék mezőt.","textTouch":"Minden szomszédos mező egyetlen koppintásnyira van. **Koppints a jobbra következő kék mezőre**, és felszeded a harmadik kék mezőt."},"step5":{"text":"Három lap kék, három van hátra — ez a tábla összesen hat gördüléssel megoldható, és az állapotsor számolja őket. A **Vissza** visszavesz egyet, ha túllőttél a célon."}},"dominosa":{"step1":{"text":"Három dominót — 0-0, 0-1 és 1-1 — raktak ki ide, majd elvették őket, csak a számaik maradtak. Oszd párokra a rácsot, hogy mindegyik pontosan egyszer kerüljön vissza."},"step2":{"text":"Egy dominó sem használható kétszer. Ha ezt a **0**-t az alatta lévő **1**-essel pároznád, mindkét szélső oszlop 0-1 lenne, ezért **kattints jobb gombbal** közéjük, jelezve, hogy nem alkotnak párt."},"step3":{"text":"Az egyetlen két egymáshoz érő **0** a bal felső sarokban van, tehát oda kerül a 0-0. **Kattints a köztük lévő határra**, és lerakod."},"step4":{"text":"Ugyanígy az egyetlen két egymáshoz érő **1**-es a bal alsó részen van. Kattints a köztük lévő határra az 1-1-ért."},"step5":{"text":"Így a jobb oldali oszlop marad a 0-1-nek. Kattints a két száma közötti határra, és kész."},"step6":{"text":"Minden dominó pontosan egyszer szerepel. Kattints újra egy dominóra, ha felvennéd; az ismétlődő pirosan látszik, a **Vissza** pedig visszalépked a lépéseiden."}},"fifteen":{"step1":{"text":"Told a számozott lapkákat az üres helyre, amíg **1-től 8-ig** sorrendben nem állnak, és a rés a jobb alsó sarokba nem kerül. Ez a kis tábla két lépésre van a megoldástól."},"step2":{"text":"A réssel egy sorban vagy oszlopban álló bármelyik lapka csúsztatható. Kattints az **5**-ösre, hogy felfelé told a résbe."},"step3":{"text":"Még egy. Kattints a **8**-asra, és kész a sor."},"step4":{"text":"Megoldva! A **Vissza** és az **Előre** végiglépked a lépéseiden, a szünetmenü **Új** gombja pedig friss rejtvényt oszt. A nyílbillentyűkkel is betolhatsz egy lapkát a résbe, a nyíl irányába.","textTouch":"Megoldva! A **Vissza** és az **Előre** végiglépked a lépéseiden, a szünetmenü **Új** gombja pedig friss rejtvényt oszt. Egész sor vagy oszlop csúszik egyszerre, úgyhogy a távolabbi lapkát célozd."}},"filling":{"step1":{"text":"Írj számjegyet minden üres mezőbe úgy, hogy az azonos számjegyekből álló, összefüggő blokkok pontosan annyi mezőt fedjenek, amennyit a számjegyük mond."},"step2":{"text":"A középső oszlop alján álló **3**-as csak felfelé nőhet, tehát a blokkja maga az oszlop. **Húzz** a legfelső mezőjétől a középsőig, majd nyomd meg a **3**-ast.","textTouch":"A középső oszlop alján álló **3**-as csak felfelé nőhet. **Húzz** a legfelső mezőjétől a középsőig, majd koppints a billentyűk közül a **3**-asra."},"step3":{"text":"A bal oszlopban álló **2**-esnek egy társ kell, és csak a fölötte lévő mező szabad. Kattints arra a mezőre, és nyomd meg a **2**-est.","textTouch":"A bal oszlopban álló **2**-esnek egy társ kell, és csak a fölötte lévő mező szabad. Koppints arra a mezőre, majd a billentyűsoron a **2**-esre."},"step4":{"text":"Egy mező maradt. Kattints rá, és nyomd meg az **1**-est, hogy lásd, hogy néz ki egy rossz számjegy.","textTouch":"Egy mező maradt. Koppints rá, majd a billentyűsoron az **1**-esre, hogy lásd, hogy néz ki egy rossz számjegy."},"step5":{"text":"A piros lehetetlent jelent: az a két **1**-es érintkezik, ami kétmezős blokk lenne, a felső **2**-es pedig be van falazva. Az a mező még ki van jelölve, úgyhogy nyomd meg a **Backspace**-t, hogy kiürítsd.","textTouch":"A piros lehetetlent jelent: az a két **1**-es érintkezik, ami kétmezős blokk lenne, a felső **2**-es pedig be van falazva. Az a mező még ki van jelölve, úgyhogy koppints a billentyűsoron a **⌫** gombra, hogy kiürítsd."},"step6":{"text":"Az az üres mező inkább a fölötte lévő **2**-essel áll párba. Kattints rá, és nyomd meg a **2**-est, hogy befejezd a rácsot.","textTouch":"Az az üres mező inkább a fölötte lévő **2**-essel áll párba. Koppints rá, majd a billentyűsoron a **2**-esre, hogy befejezd a rácsot."},"step7":{"text":"Kitöltve. Vastag vonalak zárják körbe a kész blokkokat; a **jobb gombos kattintás** egyesével ad mezőket a kijelöléshez, a **Vissza** pedig visszavon egy kitöltést."}},"flip":{"step1":{"text":"Világítsd ki mind a kilenc mezőt. Ha megnyomsz egyet, önmagát **és** a körülötte lévőket is átfordítja, így a világos mezők újra elsötétülhetnek."},"step2":{"text":"A mezőben álló kis ábra mutatja, mit fordít át: a tömör négyzet maga a mező, a körvonalasak a szomszédai."},"step3":{"text":"Ideje kivilágítani. Nyomd meg a **bal felső** mezőt, a sötétet a sarokban."},"step4":{"text":"A sarok világít, de a két szomszédja elsötétült. Most nyomd meg a **középső** mezőt."},"step5":{"text":"Már csak a jobb alsó sarok sötét. Nyomd meg a **jobb alsó** mezőt, és kész."},"step6":{"text":"Minden világít! A **Vissza** visszavon egy nyomást, és a nyílbillentyűkkel kurzort is mozgathatsz, kattintás helyett Enterrel.","textTouch":"Minden világít! A **Vissza** visszavon egy nyomást, és ugyanannak a mezőnek a kétszeri megnyomása mindig kioltja egymást, úgyhogy a sorrend soha nem számít."}},"flood":{"step1":{"text":"A tiéd a bal felső mező és minden vele azonos színben összefüggő mező. Minden lépés átfesti ezt a foltot, így a hozzá érő, új színű mezők is csatlakoznak. Tedd az egész rácsot egyszínűvé **négy lépésen** belül."},"step2":{"text":"A foltod egyelőre csak az a kék sarok. Kattints a mellette lévő **piros** mezőre: a folt piros lesz, és minden hozzá érő piros mező is vele jön."},"step3":{"text":"Most kattints egy **kék** mezőre a foltod szélén. Egy jól választott szín egyetlen lépéssel messzire szétterjedhet a rácson."},"step4":{"text":"A foltodon kívül már csak a **zöld** maradt. Még egy kattintás, és a rács többi része is beolvad."},"step5":{"text":"Négyből három lépés — az állapotsor számolja őket. Ha elfogynak, mielőtt a rács egyszínű lenne, elvesztetted a kört. Elakadtál? A **Tipp** lejátszik helyetted egy jó színt, a **Megoldás** pedig automatikusan befejezi a rácsot."}},"galaxies":{"step1":{"text":"Két pont, tehát két galaxis. Rajzolj falakat a rácsvonalak mentén úgy, hogy minden pont a saját tartománya közepére kerüljön: ha a tartományt 180°-kal elforgatod a pontja körül, pontosan önmagára kell esnie."},"step2":{"text":"A bal oldali pont két mező közötti vonalon ül, így a galaxisa csak a két bal oldali oszlop lehet. **Kattints** a tőlük jobbra futó rácsvonalra, a **felső sorban**."},"step3":{"text":"A pontokkal jegyzetelni is lehet. **Húzz** a jobb oldali pontból a **jobb felső mezőbe**, hogy nyilat hagyj ott: ezzel jelölöd, hogy az a mező a galaxisához tartozik."},"step4":{"text":"Vissza a falhoz: **kattints** ugyanarra a rácsvonalra egy sorral lejjebb, a **középső sorban**."},"step5":{"text":"Egy szakasz maradt, az **alsó sorban**. **Kattints** rá, és mindkét galaxis bezárul."},"step6":{"text":"Mindkét tartomány árnyékolt, tehát mindkettő helyes. A **Megoldás** kirajzolja a teljes választ, egy falra kattintva pedig újra letörlöd."}},"guess":{"step1":{"text":"A kérdőjelek mögött két bábu rejtőzik, három szín valamilyen sorrendjében. Tippelj egy sort, olvasd le a rá kapott jeleket, és szűkítsd a kört."},"step2":{"text":"**Húzd** ki a legfelső színt a tálcáról, és ejtsd a nyíllal jelölt sor **bal oldali lyukába**."},"step3":{"text":"Előbb színt is választhatsz, és azzal kattinthatsz a lyukakra. Kattints a tálca **második színére**."},"step4":{"text":"Most kattints a **jobb oldali lyukra**, hogy beejtsd azt a színt."},"step5":{"text":"A sor tele van, így a jobb oldalán álló **szaggatott doboz** kigyullad. Kattints rá, és a játék kiértékeli a tippedet."},"step6":{"text":"Két **üres** jel azt jelenti, hogy mindkét szín szerepel a válaszban, de egyik sincs a helyén — a tömör jel jó színt és jó helyet jelentene. Cseréld meg őket, és küldd be újra."},"step7":{"text":"Megoldva. A **Megoldás** feladja és megmutatja a választ, az **L** billentyű pedig betűkkel jelöli a bábukat, ha nehéz megkülönböztetni a színeket.","textTouch":"Megoldva. A **Megoldás** feladja és megmutatja a választ, a Vissza melletti **Megtartás** pedig a helyén tartja azt a bábut, amelyben biztos vagy, a következő tippedhez."}},"inertia":{"step1":{"text":"Te vagy a bal felső sarokban lévő golyó, és **három drágakövet** kell összeszedned. Ha a golyó egyszer elindul, csak falnál vagy megállítónál áll meg — az akna pedig végez vele."},"step2":{"text":"Kattints egy mezőre a golyótól **jobbra**. Arra gurul, amíg a tábla széle meg nem állítja, és útközben felsöpri a drágakövet."},"step3":{"text":"Most kattints a golyó **alá**. Felszedi a következő drágakövet, és a két mezővel lejjebb lévő szaggatott gyűrű — egy megállító — megállítja."},"step4":{"text":"Vigyázz: a golyó alatt közvetlenül álló tüskés valami egy **akna**. Ha ráhajtasz, vége a játéknak, és csak a **Vissza** segít ki belőle."},"step5":{"text":"Menj inkább **átlósan**: kattints a két mezővel lejjebb és két mezővel balra lévő mezőre, és a golyó elcsúszik az akna mellett az utolsó drágakőre."},"step6":{"text":"Mindhárom drágakő megvan. A **Vissza** visszatekeri az elrontott gurulást; a nyílbillentyűk egyenesen, a Home, Page Up, End és Page Down pedig átlósan gurítanak.","textTouch":"Mindhárom drágakő megvan. A **Vissza** visszatekeri az elrontott gurulást, és a rácson kívülre koppintás is működik, ami sokat segít, ha a golyó a szélnek támaszkodik."}},"keen":{"step1":{"text":"Írd be az 1-est, 2-est és 3-ast úgy, hogy mindegyik pontosan egyszer szerepeljen minden sorban és oszlopban, és hogy minden vastagon keretezett ketrecben kijöjjön a megadott eredmény."},"step2":{"text":"A **2×** ketrec szorzata 2, tehát a számjegyei 1, 1 és 2. Egy ketrecben ismétlődhet számjegy, sorban vagy oszlopban viszont nem, így a 2-es a sarokba való: kattints arra a mezőre, és írd be a **2**-est.","textTouch":"A **2×** ketrec szorzata 2, tehát a számjegyei 1, 1 és 2. A 2-es a sarokba való: koppints arra a mezőre, majd a billentyűk közül a **2**-esre."},"step3":{"text":"A ketrec másik két mezőjében az 1-esek állnak. Kattints a **2-estől jobbra** lévő mezőre, és írd be az **1**-est.","textTouch":"A ketrec másik két mezőjében az 1-esek állnak. Koppints a **2-estől jobbra** lévő mezőre, majd a billentyűsoron az **1**-esre."},"step4":{"text":"A felső sorban már megvan a 2-es és az 1-es, tehát az utolsó mezőjében a 3-asnak kell állnia. Kattints a **jobb felső mezőre**, és írd be a **3**-ast.","textTouch":"A felső sorban már megvan a 2-es és az 1-es, tehát az utolsó mezőjében a 3-asnak kell állnia. Koppints a **jobb felső mezőre**, majd a billentyűsoron a **3**-asra."},"step5":{"text":"Csak tippelsz egy mezőnél? **Kattints jobb gombbal** a középső mezőre, és írd be a **3**-ast: így a számjegy ceruzajelként, jegyzetként kerül be, nem valódi válaszként.","textTouch":"Csak tippelsz egy mezőnél? **Koppints hosszan** a középső mezőre, és koppints a **3**-asra: így a számjegy jegyzetként kerül be, nem kitöltésként. A **✎** gomb ugyanezt teszi azzal a mezővel, amelyre koppintottál."},"step6":{"text":"A többit ugyanígy fejtsd ki; a sorában vagy oszlopában ismétlődő számjegy pirosra vált, és így jár a tele ketrec is, amelyikben nem jön ki az eredmény. A szünetmenüben a **Jelek** minden lehetőséget beceruzáz helyetted, a **Megoldás** pedig elárulja a választ."}},"lightup":{"step1":{"text":"Minden fehér mezőnek világosnak kell lennie a végén. Egy izzó a saját sorát és oszlopát világítja meg, amíg egy fekete mező el nem zárja a fényt, és egyik izzó sem állhat egy másik fényében."},"step2":{"text":"A szám azt mondja meg, hány izzó érinti azt a fekete mezőt. Ennek a **2**-esnek csak két fehér szomszédja van, tehát mindkettőben izzó áll: kattints a **jobb oldalira**."},"step3":{"text":"Figyeld, ahogy a sárga fény végigfut a sugár mentén. Most kattints a 2-es **alatti** mezőre a második izzóért."},"step4":{"text":"A **0**-t egyetlen izzó sem érinti. **Kattints jobb gombbal** a fölötte lévő mezőre, hogy keresztet ceruzázz be: ez csak emlékeztet, hogy oda nem kerülhet izzó."},"step5":{"text":"Az **1**-es pontosan egy izzót kér. Az alatta lévő mező már világos, tehát az ott álló izzó a fénybe kerülne — kattints inkább az 1-estől **balra** lévő mezőre."},"step6":{"text":"A felső sorban még két mező sötét, és az egyiket már kihúztad. Kattints a **másikra**."},"step7":{"text":"Minden mező világos, minden szám elégedett. A **Vissza** visszavesz egy izzót, a nyílbillentyűk pedig az Enterrel és a Space-szel billentyűzetről raknak le izzót és keresztet.","textTouch":"Minden mező világos, minden szám elégedett. A **Vissza** visszavesz egy izzót, a hosszú koppintás pedig kihúzza azokat a mezőket, amelyeket kizártál."}},"loopy":{"step1":{"text":"Rajzolj **egyetlen** zárt hurkot a pontok közötti halvány vonalak mentén. Minden szám megmondja, hogy a mezője négy oldala közül hányat használ a hurok."},"step2":{"text":"A középső mező **4**-es, tehát mind a négy oldala a hurok része. **Kattints** a felső oldalára, és megrajzolod az első vonalat."},"step3":{"text":"Most a **bal oldalára**. Ha újra egy vonalra kattintasz, letörlöd."},"step4":{"text":"Minden pontból két vonal indul, vagy egy sem, és az a pont, ahol ez a kettő találkozik, betelt. **Kattints jobb gombbal** a belőle felfelé futó vonalra, hogy használhatatlanként kihúzd."},"step5":{"text":"Két oldal maradt. **Kattints** a középső mező alsó oldalára."},"step6":{"text":"A **jobb oldal** pedig lezárja. Egyetlen hurok, sehol egy laza vég, és a négy **0** mellett nem fut vonal."},"step7":{"text":"Megoldva. A **Vissza** visszalépked a vonalaidon, a szünetmenü **Típus** gombja pedig háromszögekre, hatszögekre és furcsább csempézésekre cseréli a négyzeteket."}},"magnets":{"step1":{"text":"Minden dominó vagy mágnes — egy **+** és egy **−** féllel —, vagy üres lap. A számok az egyes sorok és oszlopok **+** pólusait (fent és balra), illetve **−** pólusait (lent és jobbra) számolják, és azonos pólusok soha nem érhetnek össze."},"step2":{"text":"Az alsó sor három **−** pólust kér, és csak három dominó ér bele, tehát mindegyiknek adnia kell egyet. **Kattints** az álló dominó felső felére, hogy az **+** legyen, a **−** pedig lecsússzon az alsó sorba."},"step3":{"text":"Így a jobb alsó fekvő dominó is mágnes, az utolsó oszlop fölötti **0** pedig megtiltja ott a **+**-t. **Kattints** a bal felére, hogy a **+** arra az oldalra kerüljön."},"step4":{"text":"A negyedik oszlopnak most megvan az egy **+**-a, és egyáltalán nem kér **−**-t, tehát a fölötte lévő dominó egyik sem lehet. **Kattints rá jobb gombbal**, hogy üresnek jelöld."},"step5":{"text":"A felső sornak még kell egy **+** és egy **−** a bal oldali fekvő dominótól. A jobb fele egy **+**-hoz ér, azonos pólusok pedig nem érintkezhetnek — tehát **kattints** a bal felére."},"step6":{"text":"Egy dominó maradt. Az első oszlop már elhasználta a **+**-át fent, tehát itt a **+** a jobb oldalra való: **kattints** a jobb felére, és kész."},"step7":{"text":"Megoldva! Ha újra ugyanarra a félre kattintasz, megfordul a mágnes; a második jobb gombos kattintás kérdőjeleket hagy — „mágnes, de melyik irányban?” —, a **Vissza** pedig visszalépked."}},"map":{"step1":{"text":"Színezz ki minden tartományt úgy, hogy két közös határszakaszon osztozó tartomány soha ne legyen azonos színű. Négy szín mindig elég, és itt még három tartomány üres."},"step2":{"text":"Előbb vegyél fel egy színt: **kattints** a **kék mintára**, a térkép alatti sor másodikjára."},"step3":{"text":"Ha van szín a kezedben, egy üres tartományon a **jobb gombos kattintás** beceruzáz belőle egy pöttyöt — ez jegyzet arról, hogy a tartomány *talán* olyan színű. Próbáld ki a jobb oldalon végigfutó magas tartományon."},"step4":{"text":"Ez több mint talán: az a tartomány már határos a pirossal, a zölddel és a sárgával, tehát csak a kék marad. **Kattints** rá, és kifested."},"step5":{"text":"Egy színt **húzással** is átvihetsz egyik tartományból a másikba. A felül végigfutó nagy tartomány most a pirossal, a zölddel és a kékkel érintkezik, tehát **húzd** fel rá a sárgát az alul lévő kis tartományból."},"step6":{"text":"Egy üres maradt, a **bal alsó sarokban**: a zölddel, a kékkel és azzal az új sárgával határos, tehát csak piros lehet. **Húzd** rá a pirosat a jobb felső sarokban lévő tartományból."},"step7":{"text":"Kész — ütközésnél piros **!** jelent volna meg a két tartomány határán. A **Vissza** visszalépked, a nyílbillentyűk pedig az **1**–**4** gombokkal billentyűzetről színeznek.","textTouch":"Kész — ütközésnél piros **!** jelent volna meg a két tartomány határán. A **Vissza** visszalépked, a sor végén lévő radír minta pedig letörli azt a tartományt, amelyiknél meggondoltad magad."}},"mines":{"step1":{"text":"Minden szám a körülötte lévő nyolc mezőben rejtőző aknákat számolja. A letakart tömb alatt két akna lapul; fedd fel az összes többi mezőt úgy, hogy egyikre se lépj rá."},"step2":{"text":"Ez az **1**-es csak egyetlen letakart mezőhöz ér, tehát az a mező akna. **Kattints rá jobb gombbal**, és tűzz ki egy zászlót."},"step3":{"text":"Az alatta lévő **1**-es egyetlen aknája már meg van jelölve, tehát a többi szomszédja biztonságos. **Kattints arra az 1-esre**, és egyszerre felnyitod őket."},"step4":{"text":"A tömb fölötti **2**-es már egy zászlót számol, és egyetlen letakart mezője maradt. **Kattints jobb gombbal** arra a mezőre."},"step5":{"text":"Mindkét akna meg van jelölve, tehát az utolsó letakart mező biztosan tiszta. **Kattints** rá, és kész a rács."},"step6":{"text":"Tiszta a terep! A második jobb gombos kattintás leveszi a zászlót, a **Vissza** pedig kiment, ha mégis aknára lépnél."}},"net":{"step1":{"text":"Minden lapkán van egy darab vezeték, és az egész hálózatot véletlenszerűen megforgatták. Forgasd a lapkákat, amíg mind a kilenc a középen megjelölt lapkáról nem lóg: a **kék** vezetékek már élnek, a szürkék nem."},"step2":{"text":"A bal alsó lapka vezetéke egyenesen a falnak áll. **Kattints** rá egy negyed fordulatért az óramutató járásával ellentétesen, így a vezeték eléri a jobb oldali szomszédját."},"step3":{"text":"A **jobb gombos kattintás** a másik irányba forgat. Fordítsd el a jobb alsó lapkát egyszer az óramutató járása szerint, és a vezetéke balra fordul."},"step4":{"text":"A középső lapkán mind a négy oldalon van vezeték, tehát nem lehet rossz. **Kattints rá a középső gombbal**, vagy kapcsold be a Vissza melletti **lakatot**, és kattints rá, hogy rögzítsd: a rögzített lapka árnyékolt, és nem forog.","textTouch":"A középső lapkán mind a négy oldalon van vezeték, tehát nem lehet rossz. Kapcsold be a Vissza melletti **lakatot**, és koppints a lapkára, hogy rögzítsd: a rögzített lapka árnyékolt, és nem forog."},"step5":{"text":"Egy lapka maradt. Kikapcsolt **lakattal** **kattints** a jobb felső sarokra, hogy a vezetéke balra forduljon, és az egész hálózat kigyulladjon.","textTouch":"Egy lapka maradt. Kikapcsolt **lakattal** koppints a jobb felső sarokra, hogy a vezetéke balra forduljon, és az egész hálózat kigyulladjon."},"step6":{"text":"Mind a kilenc lapka él. A **Vissza** visszalépked a fordulataidon; billentyűzetről a nyílbillentyűk mozgatják a kurzort, az **A**, a **D** és az **F** pedig forgatja alatta a lapkát.","textTouch":"Mind a kilenc lapka él. A **Vissza** visszalépked a fordulataidon, a biztosra vett lapka rögzítése megvédi egy elkószált koppintástól, a **Keverés** pedig újra megpörget minden nem rögzített lapkát."}},"netslide":{"step1":{"text":"Minden vezetékdarabnak az áramforráshoz kell kapcsolódnia a végén. A kék vezetékek élnek, a szürke ceruzásak nem."},"step2":{"text":"Az áramforrás a középső lapkán ül. Az a lapka soha nem mozdul, ezért a középső sorban és oszlopban nincsenek nyilak — minden más körbecsúsztatható."},"step3":{"text":"Kattints az **alsó sortól balra** lévő nyílra, hogy a sort egy lépéssel balra told; a lecsúszó vezeték jobb oldalt bukkan fel újra."},"step4":{"text":"Az alsó sor most összeáll, de még szürke: semmi sem köti felfelé az áramforráshoz."},"step5":{"text":"**Kattints jobb gombbal** a **harmadik oszlop fölötti** nyílra. A jobb gombos kattintás megfordítja a nyilat, így az oszlop lefelé csúszik, és az utolsó vezetékek is kigyulladnak."},"step6":{"text":"Minden él! A **Megoldás** mutat egy megoldást, ha elakadsz, a **Típus** menüben pedig körbeérő rácsok is vannak, ahol a vezetékek az egyik szélen kifutva a másikon jönnek vissza."}},"pattern":{"step1":{"text":"A sorok és oszlopok mellett álló számok a fekete blokkjaik hosszai, sorrendben. Fejtsd ki, mely mezők feketék, és töltsd ki őket."},"step2":{"text":"A **harmadik oszlop** 1 2-t mond: egy fekete, egy hézag, majd két fekete. Négy mezőben ez csak egyféleképpen fér el, a párossal alul. **Húzz** végig rajtuk lefelé."},"step3":{"text":"Így a páros fölötti mező lesz a hézag. **Kattints rá jobb gombbal** egy pöttyért: ezzel jelölöd azt a mezőt, amelyikről tudod, hogy fehér."},"step4":{"text":"Az oszlop legfelső mezője pedig a nyom magányos feketéje. **Kattints** rá."},"step5":{"text":"Az **utolsó oszlop** 3-at mond. Négy mezőben egy hármas blokk bárhol álljon is, mindig lefedi a középső kettőt, tehát **húzz** végig azokon."},"step6":{"text":"A nyom szürkére vált, amint a sora kész. Csipegesd tovább ugyanígy, vagy hagyd, hogy a **Megoldás** fejezze be ezt; a középső gombos kattintás visszaállít egy mezőt ismeretlenre."}},"pearl":{"step1":{"text":"Rajzolj egyetlen zárt hurkot mezőközépről mezőközépre. Nem kell minden mezőt érintenie, de minden gyöngyön át kell haladnia."},"step2":{"text":"A **fehér gyöngy** azt jelenti, hogy a hurok egyenesen halad át rajta. A felső sorban csak oldalirányban lehet egyenes, tehát **húzz** a gyöngytől balra lévő mezőtől a tőle jobbra lévőig."},"step3":{"text":"Ennek a gyöngynek most megvan mindkét szakasza, tehát semmi más nem indulhat ki belőle. **Kattints jobb gombbal** az alatta lévő élre, hogy kihúzd azt az oldalt."},"step4":{"text":"A **fekete gyöngyben** a hurok fordul, utána pedig mindkét szomszédos mezőn egyenesen halad át. A **bal szélen** álló nem fordulhat lefelé — ahhoz egyenes vonal kellene a bal alsó sarkon át —, tehát **kattints** a jobb oldali élére."},"step5":{"text":"Így a mellette lévő mezőn egyenesen fut tovább — és a mögötte lévő fehér gyöngyön is. **Húzz** attól a mezőtől a negyedik oszlopig."},"step6":{"text":"Dolgozz tovább a gyöngyökből kiindulva; a gyöngy piros glóriát kap abban a pillanatban, amikor a szabálya sérül. A **Megoldás** kirajzolja az egész hurkot, ha látni akarod."}},"pegs":{"step1":{"text":"Egy bábu átugorja a szomszédját a mögötte lévő üres lyukba, az átugrott bábut pedig leszedjük. Tisztítsd le ezt a kis táblát **egyetlen bábuig**: három ugrás."},"step2":{"text":"**Húzd** a szár tetején álló bábut lefelé, a szomszédján át az alul lévő lyukba."},"step3":{"text":"Kattintással is megy. Kattints a **jobb oldali bábura**, hogy felvedd, majd a tőle két mezővel balra lévő lyukra."},"step4":{"text":"Utolsó ugrás: húzd a **bal alsó sarokban** álló bábut a szomszédján át középre."},"step5":{"text":"Egy bábu maradt — megoldva. A **Vissza** visszavon egy ugrást, ha zsákutcába jutottál, és a nyílbillentyűk is működnek: az Enter felveszi a bábut, egy nyíl pedig meglöki.","textTouch":"Egy bábu maradt — megoldva. A **Vissza** annyi ugrást von vissza, amennyit csak akarsz, valahányszor zsákutcába jutsz."}},"range":{"step1":{"text":"Feketíts be mezőket úgy, hogy minden szám pontosan annyi fehér mezőt lásson a saját mezőjéből: önmagát, plusz minden mezőt fel, le, balra és jobbra, amíg egy fekete mező vagy a tábla széle meg nem állítja."},"step2":{"text":"A **6**-os most hat mezőt lát — az egész sorát és az alatta lévő két mezőt. Tehát abban a sorban és oszlopban semmi sem lehet fekete."},"step3":{"text":"A **2**-es csak önmagát és még egy mezőt láthatja, a fölötte lévő mezőnek pedig fehérnek kell maradnia a 6-os miatt. Ezért **kattints** a tőle balra lévő mezőre, és feketítsd be."},"step4":{"text":"Így a jobb felső mező marad az egyetlen fehér mező, amelyet a 2-es még lát. **Kattints rá jobb gombbal** egy ceruzapöttyért: így jelölöd azt a mezőt, amelyikről tudod, hogy fehér marad."},"step5":{"text":"A **3**-as már látja önmagát és a tőle balra lévő két mezőt, tehát a jobbra lévő mezőnek feketének kell lennie. **Kattints** rá."},"step6":{"text":"Két fekete mezővel kész — a pöttyök csak jegyzetek. A **H** kitölt egy mezőt, amely a többiből következik, a **Megoldás** pedig az egész rácsot kipöttyözi.","textTouch":"Két fekete mezővel kész — a pöttyök csak jegyzetek. A **Megoldás** az egész rácsot kipöttyözi, ha inkább látnád a választ."}},"rect":{"step1":{"text":"Vágd fel ezt a rácsot téglalapokra úgy, hogy minden téglalapban pontosan egy szám álljon, és az a szám adja meg, hány mezőt fed a téglalap."},"step2":{"text":"Egy téglalapban csak egy szám állhat, és a **3**-as közvetlenül a **4**-es alatt ül — tehát a 4-esnek az egész felső sort el kell foglalnia. **Húzz** a 4-estől a sor jobb szélső mezőjéig."},"step3":{"text":"Egyetlen rácsvonalra kattintva pontosan azt az egy élt teszed hozzá vagy veszed le. **Kattints** a **3**-astól jobbra futó vonalra."},"step4":{"text":"A 9-es csak 3×3-as blokk lehet, és egyetlen hely maradt neki. **Húzz** végig a kiemelt blokkon, a bal felső mezőjétől a jobb alsó sarkáig: ezzel a 3-ast is bekeríted."},"step5":{"text":"Minden mező a megfelelő méretű téglalapban van. Ha **jobb gombbal húzol**, letörlöd egy terület belső vonalait, de a körvonala megmarad; a **Vissza** pedig visszavon egy húzást."}},"samegame":{"step1":{"text":"Ürítsd ki a táblát: vegyél le két vagy több egymáshoz érő, azonos színű mezőből álló csoportokat. Egy _n_ mezős csoport (_n_ − 2)² pontot ér, tehát a nagyok számítanak igazán."},"step2":{"text":"Kattints a felül sorakozó négy **piros** mező bármelyikére. Az első kattintás csak kijelöli a csoportot: kivilágosodik, és vastag körvonalat kap."},"step3":{"text":"Kattints újra a kijelölt csoportra, hogy leemeld a tábláról, és négy pontot szerezz. A rés fölötti mezők beleesnek, az üres oszlop pedig maga mellé húzza a szomszédait."},"step4":{"text":"Ez a **zöld** mező magában áll. Semmi mellette nem azonos színű, tehát nem lehet kijelölni — várnia kell, amíg a tábla mozgása mellé sodor egy társat."},"step5":{"text":"Most az itt kiemelt **kék pár**. Kattints a két mező bármelyikére, és mindkettőt kijelölöd."},"step6":{"text":"Meggondoltad magad? **Kattints jobb gombbal** a kijelölésre, és elengeded — semmi nem tűnik el, amíg másodszor is rá nem kattintasz."},"step7":{"text":"Ennyi az egész játék. Minden tábla kiüríthető, úgyhogy csak tovább — a **Vissza** visszatekeri, ha magára hagysz egy mezőt, és nincs Megoldás gomb, ami kimentene."}},"signpost":{"step1":{"text":"Minden mezőn van egy nyíl. Fűzd mind a hatot egyetlen, **1-től 6-ig** számozott láncba, amelyben minden mezőt olyan mező követ, amely a saját nyila mentén fekszik valahol."},"step2":{"text":"Az **1**-es kelet felé mutat. **Húzz** róla a tőle jobbra lévő mezőre, hogy az legyen a 2-es."},"step3":{"text":"A **3**-as magától kapcsolódott, ahogy az egymást követő, jó irányba mutató számok mindig. Most **húzd** a jobb alsó mezőt a tőle balra lévőre."},"step4":{"text":"Egyiküknek sincs még száma, ezért a pár **a** és **a+1** jelölést kap. **Kattints jobb gombbal** az alsó sor középső mezőjére, hogy újra szétválaszd őket."},"step5":{"text":"A valódi számok jobbak: **húzd** a **3**-ast az alatta lévő mezőre, amiből 4-es lesz."},"step6":{"text":"Utolsó láncszem: **húzd** azt a 4-est a tőle balra lévő mezőre. Abból 5-ös lesz, a 6-os pedig magától zárja az útvonalat."},"step7":{"text":"Megoldva. Ha **jobb gombbal húzol**, a másik irányba kapcsolsz — egy mezőről az előtte állóra —, a **Megoldás** pedig kirakja a teljes útvonalat."}},"singles":{"step1":{"text":"Sötétíts el mezőket, amíg egyetlen sor vagy oszlop fehér mezői között sem ismétlődik szám. Két fekete mezőnek soha nem lehet közös éle, a fehér mezőknek pedig egyetlen összefüggő tartományt kell alkotniuk."},"step2":{"text":"Ebben a sorban a két **4**-es között egy mező van. Ha azt a mezőt elsötétítenéd, mindkét 4-es fehér maradna, tehát neki magának kell fehérnek lennie — **kattints rá jobb gombbal**, hogy bekarikázd."},"step3":{"text":"Az a bekarikázott **3**-as véglegesen fehér, az oszlopában pedig fent van egy másik 3-as. **Kattints** a felsőre, hogy elsötétítsd."},"step4":{"text":"A fekete mezők soha nem érnek össze, tehát a tőle jobbra lévő **4**-es fehér marad. **Kattints** az utolsó oszlop másik 4-esére."},"step5":{"text":"Ugyanez újra: az új fekete meződ fölött közvetlenül álló **2**-es fehér, a sorában pedig bal szélen van egy másik 2-es. **Kattints** arra."},"step6":{"text":"Egy maradt. A fekete mező fölötti **3**-as fehér, tehát az oszlop alján álló másik 3-asnak mennie kell. **Kattints** rá."},"step7":{"text":"Megoldva, és a fehér mezők továbbra is összefüggnek. A karikák csak jegyzetek, a **Vissza** pedig végigsétál visszafelé a lépéseiden."}},"sixteen":{"step1":{"text":"Rakd sorrendbe a lapkákat, **1-től 9-ig**, balról jobbra olvasva. A szélen lévő nyilak egy egész sort vagy oszlopot tolnak egy lépéssel, és ami lecsúszik, a túloldalon jön vissza."},"step2":{"text":"Kattints a **második oszlop fölötti** nyílra, hogy az oszlopot egy lépéssel feljebb told; ezzel kész a középső sor."},"step3":{"text":"Most az alsó sort kell jobbra tolni. **Kattints jobb gombbal** az **alsó sortól balra** lévő nyílra: a jobb gombos kattintás az ellenkező irányba küldi a sort."},"step4":{"text":"Az utolsó: kattints a **felső sortól balra** lévő nyílra, hogy balra told, és kész a rács."},"step5":{"text":"Sorrendben! A szünetmenü **Típus** listájában nagyobb rácsok is vannak, az **Egyéni…** pedig megadott számú keverőlépéssel össze is kever neked egy rácsot, hogy visszacsináld."}},"slant":{"step1":{"text":"Húzz egy átlót minden mezőn keresztül. A bekarikázott szám a sarkát érintő vonalakat számolja, és a vonalak soha nem zárhatnak hurkot."},"step2":{"text":"A bal felső sarokban álló **0** nem tűr maga mellett vonalat, tehát az egyetlen mezőjének a másik irányba kell dőlnie. **Kattints jobb gombbal** arra a mezőre, és rajzolsz egy `/` jelet."},"step3":{"text":"A **4**-eshez mind a négy körülötte lévő mezőből vonal kell. **Kattints** a fölötte és tőle balra lévőre — a kattintás `\\\\` jelet rajzol."},"step4":{"text":"A **4**-es fölött és tőle jobbra lévő mezőnek viszont balra lefelé kell dőlnie. **Kattints rá jobb gombbal** egy `/` jelért."},"step5":{"text":"A bal szélen álló **1**-esnek már megvan az egyetlen vonala, az alatta lévő mezőből. Tehát a fölötte lévő mezőnek el kell dőlnie tőle: **kattints** rá egy `\\\\` jelért."},"step6":{"text":"Folytasd ugyanígy. Az a szám, amely már nem jöhet ki, pirosra vált, és így jár minden vonal is, amely zárt hurokba került. A szünetmenü **Megoldás** gombja kitölti a többit."}},"solo":{"step1":{"text":"Minden sorban, minden oszlopban és minden bekeretezett **2×2-es blokkban** pontosan egyszer kell szerepelnie az 1-esnek, 2-esnek, 3-asnak és 4-esnek. Ezen a kis rácson három mező hiányzik."},"step2":{"text":"Ebben a **blokkban** már van 2-es, 3-as és 4-es, tehát az üres mezőjébe csak **1**-es kerülhet. Kattints arra a mezőre, és nyomd meg az **1**-es billentyűt.","textTouch":"Ebben a **blokkban** már van 2-es, 3-as és 4-es, tehát az üres mezőjébe csak **1**-es kerülhet. Koppints arra a mezőre, majd a billentyűk közül az **1**-esre."},"step3":{"text":"Nem vagy biztos egy mezőben? **Kattints jobb gombbal** erre az üresre, és nyomd meg a **2**-est, hogy jegyzetként ceruzázd be a számjegyet.","textTouch":"Nem vagy biztos egy mezőben? Koppints erre az üresre, rögzítsd a billentyűsoron a **✎** gombot, és koppints a **2**-esre, hogy jegyzetként kerüljön be a számjegy."},"step4":{"text":"A sorában már ott a 3-as, a 4-es és az 1-es, tehát a jegyzet jó volt. **Kattints** ugyanarra a mezőre, és nyomd meg a **2**-est, hogy beírd a választ.","textTouch":"A sorában már ott a 3-as, a 4-es és az 1-es, tehát a jegyzet jó volt. A mező még ki van választva, úgyhogy koppints a **✎** gombra, hogy kikapcsold a ceruzát, majd a **2**-esre, hogy beírd a választ."},"step5":{"text":"Egy mező maradt. A sorában már ott a 4-es, a 3-as és az 1-es — kattints rá, és nyomd meg a hiányzó számjegyet.","textTouch":"Egy mező maradt. A sorában már ott a 4-es, a 3-as és az 1-es — koppints rá, majd a billentyűsoron a hiányzó számjegyre."},"step6":{"text":"Megoldva! A **Vissza** visszavon egy rossz számjegyet, az **M** billentyű pedig egyszerre beceruzáz minden lehetőséget minden üres mezőbe.","textTouch":"Megoldva! A **Vissza** visszavon egy rossz számjegyet, a szünetmenü **Jelek** gombja pedig egyszerre beceruzáz minden lehetőséget minden üres mezőbe."}},"tents":{"step1":{"text":"Verj egy sátrat minden fa mellé — fölé, alá, tőle balra vagy jobbra, átlósan soha. Két sátor nem érhet össze, a számok pedig a sorokban és oszlopokban álló sátrakat számolják."},"step2":{"text":"A második sor végén álló **0** azt jelenti, hogy abba a sorba nem kerül sátor. **Kattints jobb gombbal** a fa melletti mezőre, hogy fűnek jelöld."},"step3":{"text":"A harmadik oszlop is üres. **Jobb gombbal húzz** a legfelső mezőjétől a harmadik sorig, hogy egyszerre mind a hármat befüvesítsd."},"step4":{"text":"A jobb alsó fa a sarokban áll, mellette egy másik fa, tehát az egyetlen szabad szomszédja fölötte van. **Kattints** arra a mezőre, és verj oda sátrat."},"step5":{"text":"Az a sátor betölti a harmadik sort, tehát a bal szélen álló fa sátra sem kerülhet a fa alá. **Kattints** a bal felső mezőre."},"step6":{"text":"Egy fának még nincs sátra, és csak a tőle balra lévő mező szabad. **Kattints** rá, és kész a tábor."},"step7":{"text":"Megoldva! Ha újra egy sátorra vagy fűjelre kattintasz, letörlöd; a nyílbillentyűk az Enterrel és a Space-szel ugyanezt teszik, a **Vissza** pedig visszalépked.","textTouch":"Megoldva! Ha újra egy sátorra vagy fűjelre koppintasz, letörlöd, a **Vissza** pedig visszalépked."}},"towers":{"step1":{"text":"Minden sorban és oszlopban egy-egy torony áll minden magasságból, 1-től 4-ig. A szélen álló szám azt számolja, hány tornyot **látsz** onnan: a magasabb torony minden mögötte álló alacsonyabbat eltakar."},"step2":{"text":"A felső sor jobb oldalán álló **1**-es azt jelenti, hogy arról az oldalról csak egy torony látszik, tehát a legközelebbinek a legmagasabbnak kell lennie. Kattints arra a mezőre, és nyomd meg a **4**-est.","textTouch":"A felső sor jobb oldalán álló **1**-es azt jelenti, hogy arról az oldalról csak egy torony látszik, tehát a legközelebbinek a legmagasabbnak kell lennie. Koppints arra a mezőre, majd a billentyűk közül a **4**-esre."},"step3":{"text":"Válasz helyett le is jegyezheted a lehetőségeket. **Kattints jobb gombbal** a felső sor bal szélén álló üres mezőre, és nyomd meg az **1**-est.","textTouch":"Válasz helyett le is jegyezheted a lehetőségeket. Koppints a felső sor bal szélén álló üres mezőre, rögzítsd a billentyűsoron a **✎** gombot, és koppints az **1**-esre."},"step4":{"text":"A sor bal oldalán álló **4**-es azt mondja, mind a négy torony látszik, tehát arról a végről 1-2-3-4 sorrendben emelkednek. **Kattints** a mezőre, és nyomd meg az **1**-est a válaszhoz.","textTouch":"A sor bal oldalán álló **4**-es azt mondja, mind a négy torony látszik, tehát arról a végről 1-2-3-4 sorrendben emelkednek. A mező még ki van választva, úgyhogy koppints a **✎** gombra, hogy kikapcsold a ceruzát, majd az **1**-esre a válaszhoz."},"step5":{"text":"Egy mező maradt, és a sora mellett álló **1**-es megint a legmagasabb tornyot teszi legközelebb. Kattints rá, és nyomd meg a **4**-est.","textTouch":"Egy mező maradt, és a sora mellett álló **1**-es megint a legmagasabb tornyot teszi legközelebb. Koppints rá, majd a billentyűsoron a **4**-esre."},"step6":{"text":"Megoldva! A **Backspace** kiüríti az elrontott mezőt, a szünetmenü **Megoldás** gombja pedig befejezi a rejtvényt, ha az kifogott rajtad.","textTouch":"Megoldva! A billentyűsoron a **⌫** kiüríti az elrontott mezőt. A szünetmenüben a **Jelek** minden lehetőséget beceruzáz, a **Megoldás** pedig befejezi a rejtvényt, ha az kifogott rajtad."}},"tracks":{"step1":{"text":"Egyetlen vasútvonal fut a bal oldali bejárattól az alsó kijáratig, és minden érintett mezőn pontosan két sín van. A számok megmondják, hány mezőn halad át a vonal az adott oszlopban vagy sorban."},"step2":{"text":"A bejárati elem már felfut a **bal felső mezőbe**, annak a mezőnek pedig a felső és a bal oldala a rács széle. Tehát a második síndarabjának jobbra kell mennie: **kattints** kicsivel a közepétől jobbra."},"step3":{"text":"A **bal oszlop** száma **2**, és a bejárat már mindkét mezőt használja, tehát az alsó felén nem fut semmi. **Kattints jobb gombbal** egy mező közepére, hogy kihúzd — ha **jobb gombbal húzol**, egy egész szakaszt kihúzol."},"step4":{"text":"A **jobb oszlop** száma **4**, tehát a vonal minden mezőjét érinti, a tetején és az alján álló mezők pedig csak befelé fordulhatnak. **Húzz** a jobb felső mezőtől végig le a jobb alsóig."},"step5":{"text":"Az **alsó sornak** három mező kell, és a bal oszlop kész, tehát a jobb alsó sarok a vonalon van. Nem hagyhatja el a rácsot, tehát balra és felfelé fordul: **kattints** a bal oldalára."},"step6":{"text":"A számok szürkére váltanak, ha a soruk rendben van, és pirosra, ha nem jöhet ki. Dolgozz tovább a laza végeknél, vagy hagyd, hogy a **Megoldás** fejezze be a vasutat."}},"twiddle":{"step1":{"text":"Rakd vissza a számokat sorrendbe, **1-től 9-ig**. Egy lépés négy lapkából álló négyzetes blokkot forgat negyed fordulattal; ez a tábla három fordulattal kész."},"step2":{"text":"Kattints a **bal felső négy lapka** közepére. A kattintás az óramutató járásával ellentétesen forgatja azt a blokkot, amitől az 1, 2, 3 a felső sorba kerül."},"step3":{"text":"**Kattints jobb gombbal** a **jobb alsó négy lapka** közepére, hogy azt a blokkot az óramutató járása szerint forgasd."},"step4":{"text":"Fejezd be egy kattintással a **bal alsó négy lapka** közepén."},"step5":{"text":"Kész! A **Típus** menüben nagyobb blokkok is vannak, és egy *forgásérzékeny* mód, ahol minden lapkának a megfelelő állásban is kell végeznie."}},"undead":{"step1":{"text":"Töltsd fel az öt üres mezőt szellemekkel, vámpírokkal és zombikkal — a fenti számláló megmondja, melyikből hány kell. Minden szám az adott irányból benézve látható szörnyeket számolja, a tükrök pedig megtörik a tekintetedet."},"step2":{"text":"A **felső sor bal oldaláról** benézve semmit sem látsz; a tükör ugyanezt a vonalat felül vezeti ki, ahol az **1**-es egy szörnyet lát. Csak a szellem rejtőzik el szemből, és látszik a tükörben. **Kattints** arra a mezőre."},"step3":{"text":"A bal alsó sarokban álló **4**-es cikcakkban halad a tükrökön át három mező mellett, és mindegyiket látja. A vámpírok eltűnnek a tükörben, tehát az egyetlen vámpír csak a bal oszlop középső mezője lehet. **Kattints** rá."},"step4":{"text":"A kattintás csak végiglépteti a szörnyeket. Inkább **nyomd meg a V-t**: a G, a V és a Z egyből szellemet, vámpírt vagy zombit tesz a kiemelt mezőbe.","textTouch":"A koppintás egyszerre csak egyet lép a szörnyek között. Koppints inkább a billentyűk közül a **Vámpír** gombra: ez egyenesen a kiemelt mezőbe teszi azt a szörnyet."},"step5":{"text":"A **középső sorban** tükör nélkül, egyenesen lehet végignézni, és mindkét **1**-es egyetlen szörnyet lát — a vámpírt. Tehát a két szomszédjának szellemnek kell lennie. **Kattints** a középső mezőre."},"step6":{"text":"A **jobb gombos kattintás** nem tesz le semmit, hanem apró jegyzetet ceruzáz be. Próbáld ki a sor jobb oldali mezőjén; minden jobb gombos kattintás a következő szörnyet adja hozzá."},"step7":{"text":"Két mező maradt: a ceruzajeles a harmadik szellem, az utolsó pedig a zombi. A számok elszürkülnek, amint a soruk eldőlt; a **Megoldás** befejezi a labirintust, ha inkább néznéd."}},"unequal":{"step1":{"text":"Minden sorba és oszlopba egyszer kell az 1-es, 2-es, 3-as és 4-es — és a két mező közötti minden jelnek a **kisebbik** felé kell mutatnia."},"step2":{"text":"Az itteni jel jobbra mutat, tehát a **bal** mező a nagyobb. Ebbe a sorba még egy 2-es és egy 3-as kell: kattints a bal mezőre, és nyomd meg a **3**-ast.","textTouch":"Az itteni jel jobbra mutat, tehát a **bal** mező a nagyobb. Ebbe a sorba még egy 2-es és egy 3-as kell: koppints a bal mezőre, majd a billentyűk közül a **3**-asra."},"step3":{"text":"Az a mező kapja a kisebb számot, amelyikre a jel mutat. Kattints rá, és nyomd meg a **2**-est.","textTouch":"Az a mező kapja a kisebb számot, amelyikre a jel mutat. Koppints rá, majd a billentyűsoron a **2**-esre."},"step4":{"text":"Az oszlopában már van 3-as, tehát ez a mező csak 2-es lehet. **Kattints rá jobb gombbal**, és nyomd meg a **2**-est, hogy jegyzetként beceruzázd.","textTouch":"Az oszlopában már van 3-as, tehát ez a mező csak 2-es lehet. Koppints rá, rögzítsd a billentyűsoron a **✎** gombot, és koppints a **2**-esre, hogy jegyzetként beceruzázd."},"step5":{"text":"A jegyzet nem válasz. **Kattints** ugyanarra a mezőre, és nyomd meg a **2**-est, hogy véglegesítsd.","textTouch":"A jegyzet nem válasz. A mező még ki van választva, úgyhogy koppints a **✎** gombra, hogy kikapcsold a ceruzát, majd a **2**-esre, hogy véglegesítsd."},"step6":{"text":"Egy mező maradt. Kattints rá, és nyomd meg a **3**-ast, hogy kész legyen a négyzet.","textTouch":"Egy mező maradt. Koppints rá, majd a billentyűsoron a **3**-asra, hogy kész legyen a négyzet."},"step7":{"text":"Megoldva! A **Vissza** visszavon egy számjegyet, a **Megoldás** pedig kitölti a választ, ha egy rejtvény kifog rajtad.","textTouch":"Megoldva! A **Vissza** visszavon egy számjegyet, a **Jelek** és a **Tipp** beceruzázza a lehetőségeket, a **Megoldás** pedig kitölti a választ, ha egy rejtvény kifog rajtad."}},"unruly":{"step1":{"text":"Színezz minden mezőt feketére vagy fehérre. Minden sorba és oszlopba **háromnak-háromnak** kell kerülnie, és egyik szín sem szerepelhet **háromszor egymás után**. Három mező még eldöntetlen."},"step2":{"text":"Ebben a sorban már megvan a három fehér mező, tehát az eldöntetlennek feketének kell lennie. **Kattints** rá: a kattintás feketére fest."},"step3":{"text":"Ebben a sorban már három fekete van, tehát az eldöntetlen mezője fehér. **Kattints rá jobb gombbal** — a jobb gombos kattintás fordított sorrendben halad, és először fehérre fest."},"step4":{"text":"Az utolsó eldöntetlen mezőtől balra két fekete áll, harmadik egymás után pedig nem jöhet. **Kattints rá jobb gombbal**, fesd fehérre, és kész a rács."},"step5":{"text":"Megoldva! Ha újra egy színes mezőre kattintasz, továbblép a másik színre, majd vissza az eldöntetlenre, a **Vissza** pedig visszalépked a lépéseiden."}},"untangle":{"step1":{"text":"Hat pont ül egy körön, nyolc vonal köti össze őket. Két párjuk keresztezi egymást — ezek a pirosak. Húzogasd a pontokat, amíg egy piros sem marad."},"step2":{"text":"Először kattints az **Illesztés** gombra, a rácsos gombra a Vissza mellett (vagy nyomd meg a **G**-t). Ez bekapcsolja az illesztőrácsot, így az elengedett pont a mezők közepén lévő halvány pontok egyikére ugrik."},"step3":{"text":"**Húzd** a kör tetején lévő pontot a **bal felső sarokban** lévő üres mezőbe.","textTouch":"**Húzd** a kör tetején lévő pontot a tábla **bal felső sarkában** lévő üres helyre. Nem kell pontosan eltalálnia semmit — csak a keresztezésnek kell megszűnnie."},"step4":{"text":"Egy keresztezés maradt, jobb oldalt. **Húzd** a legalsó pontot az üres **jobb alsó sarokba**.","textTouch":"Egy keresztezés maradt, jobb oldalt. **Húzd** a legalsó pontot az üres **jobb alsó sarokba** — az utolsó piros vonal eltűnik, amint megszűnik a keresztezés."},"step5":{"text":"Kibogozva. A **Megoldás** bármilyen gubancot kibont helyetted, a nyílbillentyűk pedig pontról pontra mozgatják a kurzort, az Enterrel pedig felveszed és leteszed a pontot.","textTouch":"Kibogozva. A piros vonalak azok, amelyek még keresztezik egymást, úgyhogy húzogass, amíg egy sem marad — vagy hagyd, hogy a **Megoldás** bontsa ki a gubancot."}}}'),Fe={$locale:`hu`,$name:q,$dir:`ltr`,ui:J,touchPhrases:Y,messages:X,status:Z,games:Q,tutorials:$};export{g as A,ee as B,A as C,S as D,w as E,o as F,i as I,oe as L,f as M,u as N,b as O,c as P,ie as R,M as S,E as T,t as V,H as _,Ee as a,I as b,be as c,me as d,fe as f,W as g,se as h,Oe as i,m as j,v as k,ve as l,ce as m,Me as n,we as o,ue as p,Ae as r,Se as s,Pe as t,ge as u,B as v,O as w,P as x,R as y,ne as z};
//# sourceMappingURL=i18n-hu-Cq0sqElI.js.map