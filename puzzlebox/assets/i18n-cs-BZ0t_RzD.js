import{t as e}from"./index-DIYwYEVR.js";var t=e({default:()=>n}),n="## Společné ovládání\n\n- **Nová** rozdá čerstvý hlavolam a **Restart** vrátí tenhle zpátky na začátek; **Zpět** a\n  **Znovu** procházejí vašimi tahy a vzít zpět jde i restart.\n- **Vyřešit** ukáže řešení tam, kde ho hlavolam nabízí. Přidá to krok, který jde vzít zpět.\n- **Kliknutím pravým tlačítkem** se ve většině hlavolamů dělá druhá akce – označení, vlajka\n  nebo otočení na druhou stranu. **Kliknutím prostředním tlačítkem** ta třetí, pokud ji\n  hlavolam má.\n- **Typ** přepíná mezi přednastavenými velikostmi a obtížnostmi; ve **Vlastní…** si\n  nastavíte vlastní.\n- **Sdílet** ukáže kódy, které můžete poslat dál, aby si někdo jiný zahrál přesně tenhle\n  hlavolam.\n\n### Klávesnice (Keyboard)\n\n- **Nová hra**: `N` · **Zpět**: `U` nebo `Ctrl+Z` · **Znovu**: `R` nebo `Ctrl+Y`\n- **Vyřešit**: `Ctrl+S` (kde je k dispozici). **Tahle nápověda**: `?`, zavře ji `Esc`. **Pauza**: `Esc`.\n- Ve většině hlavolamů posouvají šipky kurzor po hrací ploše, `Enter` na něm funguje jako\n  kliknutí levým tlačítkem a `Space` jako kliknutí pravým.\n- V nabídkách přesouvají šipky výběr z karty nebo tlačítka na další, `Enter` vybírá\n  a `Esc` vrací zpět.\n- Funguje i herní ovladač: křížový ovladač posouvá, `A` vybírá nebo kliká, `X` je\n  kliknutí pravým, `B` vrací zpět, `Start` pozastaví hru, `LB` a `RB` vracejí a opakují\n  tahy a `Y` dá nápovědu.\n  V hlavolamech, do kterých se píšou čísla, tě `RT` přenese na klávesy na obrazovce a zpět.\n",ee=e({default:()=>te}),te=`## Na dotykové obrazovce

- **Klepnutím** provedete hlavní akci, **dlouhým klepnutím** tu druhou. Když má hlavolam
  i třetí, klepněte **dvěma prsty**.
- První kulaté tlačítko na liště (tečka ve čtverci) obě akce prohodí, takže ta, kterou
  používáte nejvíc, je vždycky na jedno klepnutí; dokud jsou prohozené, svítí na něm
  vlaječka. Dlouhé klepnutí pak udělá tu druhou.
- **Roztažením dvou prstů** zvětšíte políčka velké mřížky a **tažením dvěma prsty** se po
  ní pak posouváte. Stažením prstů k sobě uvidíte zase celý hlavolam. V nabídce **Pauza**
  najdete totéž zvětšení a zmenšení jako tlačítka.
- **Pauza** skrývá zbytek ovládání: typ hlavolamu, nový hlavolam, restart, řešení, sdílení a
  Nastavení zvuku a jazyka. Dokud je nabídka otevřená, čas stojí.
`,ne=e({default:()=>re}),re=`# Černá skříňka

Uvnitř stínované skříňky se ukrývá několik koulí. Kolem skříňky vede rámeček s laserovými
otvory. Vystřelte z kteréhokoli otvoru laser dovnitř a sledujte, co vyjde ven: z výsledků
odvoďte, kde koule musí ležet, označte je a pak si nechte odpověď zkontrolovat.

Paprsek letí přímo, dokud mu do cesty nevstoupí koule:

- Koule rovnou před paprskem ho **pohltí**. Otvor ukáže **H** (zásah).
- Koule úhlopříčně před paprskem ho **odkloní** o 90° pryč od sebe. Koule na obou
  úhlopříčkách ho pošlou rovnou zpátky. Odklony se mohou řetězit, takže paprsek si to
  uvnitř může pěkně proplétat, než vyletí ven.
- Paprsek, který vyjde tímtéž otvorem, kterým vlétl, je **odražený** a značí se **R**.
  Totéž platí pro paprsek, který by se odklonil dřív, než do skříňky vůbec vstoupí,
  protože úhlopříčně vedle jeho otvoru leží koule.
- Jinak paprsek vyjde někde jinde a oba otvory dostanou stejné **číslo** (a stejnou
  barvu), takže je hned vidět, kudy který výstřel vlétl a kudy vylétl.

Jakmile označíte správný počet koulí, objeví se v levém horním rohu zelené tlačítko.
Kliknutím na ně řešení zkontrolujete. Vaše rozmístění platí za správné, pokud ho žádný
laser nedokáže odlišit od rozmístění počítače – při více koulích může být rozmístění se
stejným chováním několik a vyhrává kterékoli z nich.

Špatné rozmístění hru ukončí a ukáže odpověď, takže kontrolujte, teprve až si budete
jistí: nalezené koule jsou černé, chybné značky přeškrtnuté červeně, přehlédnuté koule
červené, každý váš výstřel, který vaše rozmístění vyhodnocuje jinak, dostane kroužek, a
lasery, které jste nevystřelili a které by obě rozmístění odlišily, se vystřelí teď a
zapíšou červeně. **Zpět** vás vrátí, ať můžete zkoušet dál; **Vyřešit** to vzdá a doplní
skutečné koule.

## Ovládání

Stavový řádek počítá označené koule a vystřelené lasery a po kontrole řekne, kolik vašich
koulí bylo špatně a kolik jste jich minuli.

### Myš a dotyk

- **Klikněte na otvor** a vystřelte z něj laser. Kliknutím na otvor, ze kterého už se
  střílelo, se rozsvítí oba konce toho paprsku; dalším kliknutím na něj, nebo kamkoli jinam,
  světlo zhasnete.
- **Klikněte dovnitř skříňky** a označte tam kouli; dalším kliknutím značku zase zrušíte.
- **Klikněte pravým tlačítkem** na políčko a **zamkněte** ho, ať ho omylem nezměníte;
  dalším kliknutím pravým tlačítkem ho odemknete. Kliknutím pravým tlačítkem na otvor
  zamknete nebo odemknete celý řádek či sloupec vedle něj.
- **Klikněte na tlačítko v rohu** a nechte si značky zkontrolovat.

### Klávesnice (Keyboard)

- **Šipky** posouvají kurzor po skříňce a jejích otvorech.
- **Enter** funguje jako kliknutí levým tlačítkem: vystřelí, označí kouli, nebo spustí
  kontrolu, když kurzor stojí na tlačítku.
- **Mezerník** funguje jako kliknutí pravým tlačítkem, tedy zamyká a odemyká.

## Nastavení

- **Šířka** a **výška** skříňky. Každý řádek i sloupec má na obou koncích laserový otvor.
- **Počet koulí**: kolik koulí je schovaných. Zadejte jedno číslo, nebo rozsah jako \`3-6\`
  a nechte volbu na počítači; pak musíte odvodit i jejich počet a kontrolní tlačítko se
  objeví u každého počtu značek v rozsahu.
`,ie=e({default:()=>ae}),ae=`# Mosty

Po vodě jsou roztroušené ostrovy a každý nese číslo. Pospojujte je mosty tak, aby:

- každý most vedl rovně vodorovně nebo rovně svisle mezi dvěma ostrovy;
- číslo na ostrově přesně odpovídalo počtu mostů, které se ho dotýkají;
- dva ostrovy spojovaly nanejvýš dva souběžné mosty (tenhle limit se dá změnit ve
  vlastním nastavení);
- se žádné dva mosty nekřížily;
- se z každého ostrova dalo po mostech dojít na kterýkoli jiný.

Chyby se ukazují červeně: ostrov s příliš mnoha mosty, ostrov, který už jich nemůže dostat
dost (jeho zbylí sousedé jsou plní, nebo jsou jediné cesty zatarasené jinými mosty či
vašimi vlastními značkami „tudy most nevede“), a skupina ostrovů, která je sice hotová, ale
odříznutá od zbytku. Když jsou smyčky zakázané, jsou červené i mosty, které smyčku tvoří.

## Ovládání

**Vyřešit** doplní řešení a odstraní mosty, které do něj nepatří.

### Myš a dotyk

- **Táhněte** od ostrova směrem k sousedovi a postavte mezi ně most. Stačí popojet
  natolik, aby byl směr jasný; most sám doskočí k nejbližšímu ostrovu tím směrem. Dalším
  tažením postavíte druhý souběžný most, a když takhle táhnete ještě jednou po dosažení
  limitu, všechny mosty zase zmizí.
- **Táhněte pravým tlačítkem** stejným způsobem a poznamenáte si značku „tudy most
  nevede“, případně ji smažete.
- **Klikněte** na ostrov a označte ho jako hotový. Zšedne a jeho mosty se zamknou, takže
  je omylem nezměníte; dalším kliknutím ho zase odemknete.
- **Guma** (tlačítko s gumou vedle Zpět) přepne tažení na odebírání: táhněte od ostrova
  k sousedovi a odeberete všechny mosty mezi nimi, případně tamní značku „tudy most
  nevede“. Dalším stiskem se vrátíte ke stavění mostů.
- **Pomocné čáry** ukážou slabé čáry všude, kudy by most mohl vést, a zase je schovají.

### Klávesnice (Keyboard)

- **Šipky** posouvají kurzor od ostrova k ostrovu.
- **Enter** a po něm šipka postaví most tím směrem; **Mezerník** a po něm šipka položí
  značku. Dvojí stisk **Enteru** označí ostrov jako hotový.
- **E** je tlačítko **Guma** a **G** tlačítko **Pomocné čáry**.

## Nastavení

- **Šířka** a **výška** mřížky, obojí alespoň 3.
- **Obtížnost**: _Snadné_ hlavolamy se řeší pohledem na jeden ostrov po druhém – buď jeho
  zbývající mosty přesně zaplní volné místo, nebo je jeho číslo tak velké, že se nedá
  žádného souseda vynechat. _Střední_ vás navíc nutí přemýšlet o jednotlivých spojeních:
  který most tam musí být, protože bez něj ostrov nedokončíte, a (při zakázaných
  smyčkách) která spojení by smyčku uzavřela. _Těžké_ vyžadují pohled o krok dopředu:
  uzavřel by tenhle most skupinu ostrovů odříznutou od zbytku, nebo nechal některý ostrov
  bez východiska? Každý hlavolam má právě jedno řešení.
- **Povolit smyčky**: standardně zapnuto. Po vypnutí musí být hotová síť mostů strom –
  žádná cesta po mostech nesmí vést zpátky tam, kde začala – a hlavolam je vytvořený tak,
  aby se s tímhle pravidlem dal vyřešit.
- **Max. mostů jedním směrem**: limit souběžných mostů, obvykle 2. Méně znamená snazší hru.
- **% políček s ostrovy**: zhruba jak velká část mřížky se stane ostrovy. Některé mapy
  tolik ostrovů nepojmou, takže jde spíš o horní hranici.
- **Faktor rozšíření**: jak pravděpodobně se při růstu mapy nový ostrov umístí co nejdál
  místo někam blíž. Vysoké hodnoty dávají řidší a snazší hlavolamy, nízké pěkně nacpané.
`,oe=e({default:()=>r}),r=`# Kostka

Na mřížce stojí těleso a hrstka políček je natřená modře – přesně tolik, kolik má těleso
stěn. Kutálení těleso překlopí přes jednu hranu stěny, na které stojí, takže na sousední
políčko dosedne další stěna v pořadí. Při každém dopadu si spodní stěna a políčko pod ní
vymění barvu: dosedne-li čistá stěna na modré políčko, modrá se odnese na tělese;
dosedne-li modrá stěna na čisté políčko, modrá tam zůstane. Hlavolam je hotový, když jsou
modré všechny stěny naráz. Stavový řádek počítá vaše kutálení, tak zkuste hlavolam
zvládnout na co nejméně tahů.

Klasická verze kutálí krychlí po čtvercové mřížce. Na trojúhelníkové mřížce si můžete
zakutálet se čtyřstěnem, osmistěnem nebo dvacetistěnem. Mějte na paměti, že každá stěna
kutálejícího se čtyřstěnu dosáhne jen na čtvrtinu políček a že stěny osmistěnu se střídají
mezi trojúhelníky mířícími nahoru a dolů – modrá políčka jsou vždycky rozmístěná tak, aby
šel hlavolam dokončit.

## Ovládání

Tenhle hlavolam nemá tlačítko Vyřešit. Až budou všechny stěny modré, můžete s tělesem
klidně kutálet dál, nic tím nepokazíte.

### Myš a dotyk

- **Klikněte** kamkoli a těleso se překulí o jedno políčko směrem k ukazateli. Na
  čtvercové mřížce to znamená nahoru, dolů, doleva nebo doprava; na trojúhelníkové má
  aktuální trojúhelník na výběr tři sousedy. Kliknutím se dostanete na každého souseda,
  takže samo o sobě stačí na kteroukoli mřížku.

### Klávesnice (Keyboard)

- **Šipky** kutálejí tělesem ve čtyřech hlavních směrech. Na trojúhelníkové mřížce má
  trojúhelník souseda buď jen nad sebou, nebo jen pod sebou, takže druhá svislá klávesa
  neudělá nic.
- **Home**, **Page Up**, **End** a **Page Down** (nebo rohové klávesy numerické
  klávesnice 7, 9, 1 a 3) kutálejí na trojúhelníkových mřížkách šikmo a vyberou vždy tu
  hranu, která leží tím směrem nejblíž.

## Nastavení

- **Druh tělesa**: čtyřstěn, krychle, osmistěn nebo dvacetistěn. Krychle používá
  čtvercovou mřížku, ostatní mřížku z trojúhelníků.
- **Šířka / horní hrana** a **Výška / dolní hrana**: u krychle jde o velikost čtvercové
  mřížky. U trojúhelníkových mřížek jsou to délky horní a dolní hrany šestiúhelníkové
  arény (když jednu z nich nastavíte na nulu, dostanete prostý trojúhelník). Mřížka musí
  pojmout všechna modrá políčka a k tomu jedno prázdné, ze kterého se startuje.
`,i=e({default:()=>a}),a=`# Dominosa

Celá sada domina – jedna kostka pro každou dvojici čísel od 0 až po zvolené maximum,
dvojité včetně – byla poskládaná do obdélníku. Pak někdo čísla opsal a kostky sebral. Vaším
úkolem je zjistit, kde ležely: rozdělte mřížku na dvojice sousedních políček tak, aby se
každá kostka ze sady použila právě jednou.

Kostka položená tam, kde se její dvojice čísel už jinde objevuje, se kreslí červeně, a
stejně tak holé políčko, na které už žádná kostka nedosáhne.

## Ovládání

Hlavolam je hotový, když je každé políčko zakryté a žádná kostka není červená. **Vyřešit**
položí všechny kostky řešení a smaže, co jste stihli rozestavět.

### Myš a dotyk

- **Klikněte** na hranici mezi dvěma sousedními čísly (nebo do té poloviny políčka, která
  je k hranici blíž) a položte přes ně kostku. Dalším kliknutím na tutéž hranici ji zase
  sundáte. Kostka položená přes část jiné tu původní nahradí.
- **Klikněte pravým tlačítkem** na hranici a načrtněte přes ni čáru jako poznámku, že tahle
  dvě čísla **netvoří** kostku. Dalším kliknutím pravým tlačítkem čáru smažete. Čáru nelze
  nakreslit podél položené kostky a položení kostky smaže všechny čáry, kterých se dotýká.

### Klávesnice (Keyboard)

- **Šipky** posouvají kurzor po mřížce a zastavují se na středech políček i na hranicích
  mezi nimi. Na hranici kurzor obkreslí kostku, kterou by položil.
- **Enter** kostku položí nebo sundá a **Mezerník** tam nakreslí či smaže čáru.

## Nastavení

- **Nejvyšší číslo na kostkách**: kostky jdou od 0-0 až po N-N a mřížka je (N+2) políček
  široká a (N+1) vysoká, takže maximum 6 dává mřížku 8×7.
- **Obtížnost**: kolik úvah je potřeba. **Velmi snadná** zadání si vystačí s tím, že pro nějakou
  kostku existuje jediné místo nebo že nějaké políčko zakryje jediná kostka. **Snadná** přidávají
  dvě další úvahy: když každý způsob zakrytí tohohle políčka používá tutéž kostku, nikam jinam ta
  kostka nepůjde; a když každé možné umístění téhle kostky vylučuje určité místo, je to místo
  vyloučené. **Těžká** přidávají počítání (kostka, která by odřízla lichý počet políček, je
  nemožná; skupina políček se stejným číslem si může nárokovat kostky, o které se dělí) a
  **Extrémní** zadání po vás chtějí sledovat důsledky nějakého umístění, dokud se navzájem
  nesrazí. Všechna tahle zadání mají právě jedno řešení. **Nejednoznačné** hlavolamy se
  nekontrolují vůbec: mohou mít víc řešení a může být potřeba hádat – vyhrává jakékoli nalezené
  rozdělení.
`,o=e({default:()=>s}),s=`# Patnáctka

Klasický posouvací hlavolam. Mřížka je zaplněná očíslovanými dlaždicemi a jedním prázdným
místem. Posouvejte dlaždice do mezery, dokud čísla nejdou po pořádku zleva doprava a shora
dolů, s mezerou v pravém dolním rohu.

## Ovládání

**Vyřešit** skočí rovnou na hotové uspořádání. Neukáže vám, jak se tam dostat, ale hodí se
jako rychlý návrat, když si chcete nacvičit oblíbené sekvence tahů.

### Myš a dotyk

- **Klikněte** na kteroukoli dlaždici ve stejném řádku nebo sloupci jako mezera a ona se
  do ní posune i se vším, co mezi ní a mezerou leží.

### Klávesnice (Keyboard)

- **Šipky** zasunou do mezery dlaždici ve směru šipky: **šipka nahoru** posune dlaždici pod
  mezerou nahoru do ní.

## Nastavení

- **Šířka** a **výška** mřížky (standardně klasická 4×4).
`,c=e({default:()=>l}),l=`# Výplň

V některých políčkách mřížky už číslice je, ostatní jsou prázdná. Do každého prázdného
políčka napište číslici tak, aby každá souvislá skupina stejných číslic zabírala přesně
tolik políček, kolik ta číslice říká: každá 3 patří do skupiny tří trojek, každá 1 stojí
sama a tak dál. Políčka se počítají jako spojená jen přes strany, ne přes rohy. Z toho
plyne, že v žádném políčku není 0, dvě jedničky nikdy neleží vedle sebe a žádná skupina
nemá víc než devět políček. Zadaná číslice nemusí být začátkem své skupiny: několik
zadaných čtyřek může skončit v jedné skupině a skupina se klidně obejde i bez jediné
zadané číslice.

Mezi políčky s různými číslicemi se objevují silné čáry, stejně tak kolem každé skupiny,
která už má správnou velikost (nebo je moc velká). Číslice zčervená, když její skupina
přerostla svou hodnotu nebo když ji někdo zazdil a ona už na svou velikost nemá kam růst.
Tenhle hlavolam vydává Nikoli pod názvem Fillomino.

## Ovládání

Zadané číslice jsou kreslené inkoustem a nejdou změnit; ty vaše jsou modré. **Vyřešit**
doplní řešení.

### Myš a dotyk

- **Klikněte** na prázdné políčko a vyberte ho, pak číslici napište klávesami na
  obrazovce. **⌫** na klávesnici výběr zase vyprázdní.
- **Táhněte** přes několik políček a vyberete je všechna; jedna číslice je pak vyplní
  najednou.
- **Klikněte pravým tlačítkem** a přidejte políčko do výběru, aniž byste začínali znovu;
  dalším kliknutím pravým tlačítkem na vybrané políčko ho z výběru zase vyjmete.
- **Vyplnit** (tlačítko vedle Zpět) rozlévá číslici: táhněte z políčka, ve kterém nějaká
  je, přes okolní políčka a po puštění dostanou všechna tutéž číslici, bez klávesnice na
  obrazovce. Kliknutí a tažení, která začnou na prázdném políčku, dál vybírají. Dalším
  stiskem se vrátíte k vybírání.

### Klávesnice (Keyboard)

- Když je vybrané jedno políčko nebo víc, **napište číslici** a zapíše se do všech.
  Číslice \`0\` nebo **Backspace** je zase vyprázdní.
- **Šipky** posouvají kurzor a číslice, kterou napíšete, vyplní políčko pod ním.
- **Mezerník** nebo **Enter** přepíná políčko pod kurzorem ve výběru, takže se dá vyplnit
  několik políček jediným stiskem.
- **F** je tlačítko **Vyplnit**.

## Nastavení

- **Šířka** a **výška**: velikost mřížky. Skupiny nikdy nejsou větší než delší strana
  (nebo 9), takže malé mřížky si vystačí s malými číslicemi.
`,u=e({default:()=>d}),d=`# Překlápění

Mřížka políček, některá svítí a některá jsou tmavá. Vaším cílem je rozsvítit je všechna
naráz. Stisk políčko rozsvítí, nebo zhasne, ale překlopí i některé jeho sousedy:
malý obrázek nakreslený na každém políčku ukazuje, které přesně. Se standardními tvary
**Kříže** každý stisk překlopí políčko a jeho čtyři sousedy do stran; s tvary **Náhodné**
má každé políčko svůj vlastní nepravidelný vzorec, takže se hra pokaždé hraje jinak.

Protože se dvojí stisk téhož políčka vyruší a na pořadí stisků nikdy nezáleží, je řešením
prostě množina políček, které je potřeba jednou stisknout.

## Ovládání

Stavový řádek počítá vaše stisky. **Vyřešit** rozsvítí celou plochu a červeně obtáhne
políčka, která k tomu bylo potřeba stisknout. Když pak mačkáte dál, červené obrysy ukazují, která políčka
je ještě potřeba stisknout, abyste se vrátili do hotového stavu.

### Myš a dotyk

- **Klikněte** na políčko a stisknete ho.

### Klávesnice (Keyboard)

- **Šipky** posouvají kurzor po mřížce; **Enter** nebo **Mezerník** stiskne políčko pod
  kurzorem.

## Nastavení

- **Šířka** a **výška** mřížky, od 2 do 10 políček na stranu.
- **Druh tvarů**: _Kříže_ překlápějí každé políčko spolu se sousedy do stran; _Náhodné_
  dávají každému políčku náhodně vyrostlý tvar uvnitř bloku 3×3 kolem něj.
`,f=e({default:()=>p}),p=`# Záplava

Mřížka je slepenec náhodně obarvených políček. Ovládáte políčko v levém horním rohu a s
ním každé políčko, ke kterému od něj vede cesta ve stejné barvě. Každý tah přebarví celou
tuhle souvislou skvrnu na barvu, kterou zvolíte, takže se k ní přidají i sousední políčka
té barvy. Pokračujte, dokud nebude celá mřížka jednobarevná.

Háček je v limitu tahů. Než začnete, hra si mřížku sama vyřeší a dá vám svůj počet tahů
plus pár navíc; když limit vyčerpáte dřív, než bude mřížka jednolitá, kolo je prohrané.
Přebarvovat můžete i potom, abyste plochu viděli dokončenou, ale za výhru už se to nepočítá.

## Ovládání

Stavový řádek ukazuje, kolik tahů z limitu jste spotřebovali. **Vyřešit** nechá mřížku
dokončit řešitelem; počítá se to jako automatické vyřešení, ne jako vaše výhra.

### Myš a dotyk

- **Klikněte** na kterékoli políčko jiné barvy, než má vaše skvrna, a přebarvěte skvrnu na
  tuhle barvu. Kliknutím na políčko, které už barvou sedí, se nestane nic a o tah
  nepřijdete.
- **Tip** za vás zahraje další barvu podle řešitele, jako obyčejný tah, který jde vzít zpět.
  Pár tipů vás o výhru ani o její kredit nepřipraví.

### Klávesnice (Keyboard)

- **Šipky** posouvají kurzor po mřížce; **Enter** nebo **Mezerník** přebarví skvrnu na
  barvu pod kurzorem.

## Nastavení

- **Šířka** a **výška** mřížky, až 32 políček na stranu.
- **Barvy**: kolik barev mřížka používá, od 3 do 10. Méně barev znamená méně možností a
  snazší hru.
- **Tahy navíc**: kolik tahů se přidá k délce řešitelova vlastního řešení, aby vznikl
  limit. S 0 musíte být aspoň tak úsporní jako řešitel; je slušný, ale ne dokonalý, takže
  se dá překonat.
`,m=e({default:()=>h}),h=`# Galaxie

Po mřížce jsou rozseté tečky, které mohou sedět uprostřed políčka, na čáře mezi dvěma
políčky nebo v rohu, kde se čtyři setkávají. Kreslete zdi podél čar mřížky a rozdělte
plochu na oblasti tak, aby každá oblast obsahovala právě jednu tečku a ta tečka byla jejím
středem souměrnosti: otočte oblast o 180° kolem její tečky a musí padnout přesně sama na
sebe. Každé políčko musí skončit v nějaké oblasti, takže žádná oblast nesmí zůstat bez
tečky.

Hlavolamy se generují náhodně a mají jediné řešení. Jde o hlavolam „Tentai Show“ od
vydavatelství Nikoli, známý také jako Spiral Galaxies.

## Ovládání

Oblast, která je uzavřená a správná – jedna tečka, ta ve středu souměrnosti, uvnitř žádné
zbloudilé zdi – se podbarví. Tečka zčervená, když jí prochází zeď nebo když je jedinou
tečkou uzavřené oblasti, která podle ní souměrná není; uzavřená oblast úplně bez tečky se
vyšrafuje. Hlavolam je hotový, když jsou podbarvená všechna políčka. **Vyřešit**
nakreslí celé řešení.

### Myš a dotyk

- **Klikněte** na čáru mřížky a nakreslete tam zeď, nebo klikněte na zeď a smažte ji.
- **Táhněte od tečky** do políčka a zanechte tam malou šipku mířící zpátky na tečku, jako
  připomínku, že políčko patří do její galaxie.
- **Táhněte pravým tlačítkem** za existující šipku a přesuňte ji. Pusťte ji zpátky na její
  tečku, nebo ji vytáhněte mimo mřížku, a zahodíte ji; puštěná na políčko, kde už šipka je,
  zaujme její místo.

### Klávesnice (Keyboard)

- **Šipky** posouvají kurzor přes políčka, čáry i rohy.
- **Enter** na čáře nakreslí nebo smaže zeď; **Enter** na tečce zvedne šipku, která pak
  jde za kurzorem, dokud ji dalším **Enterem** nepustíte.

## Nastavení

- **Šířka** a **výška** mřížky, obojí alespoň 3. Přednastavené velikosti jdou od 7×7 do
  15×15.
- **Obtížnost** – _Střední_ zadání se dají řešit krok za krokem z toho, co si pravidlo
  souměrnosti vynutí; u _Extrémní_ obtížnosti může být potřeba něco si tipnout a sledovat, kam to
  povede.
`,g=e({default:()=>_}),_=`# Uhodni

Počítač schoval za clonu nahoře na hrací ploše řadu barevných kolíků. Vaším úkolem je
přesně ji zopakovat, a to jen podle značek, které za každý pokus dostanete: **černý**
kolík za každý kolík správné barvy na správném místě a **prázdný** kolík za každý další
kolík, jehož barva se ve skryté řadě objevuje někde jinde. Značky prozradí, _kolik_ kolíků
sedělo, ne _které_. Trefte řadu dřív, než vám dojdou pokusy, a clona se zvedne; když
dojdou, zvedne se stejně, aby vám ukázala, co jste minuli.

Tuhle hru prodává Hasbro pod názvem _Mastermind_ (u nás ji znáte jako _Logik_): šest barev, čtyři kolíky a deset pokusů.
Všechno se dá přenastavit.

## Ovládání

**Vyřešit** zvedne clonu a ukáže odpověď; hra tím končí stejně, jako by vám došly pokusy.

### Myš a dotyk

- **Klikněte** na barvu v paletě vlevo a vyberte ji (kroužek ukazuje kterou), pak
  **klikněte na dírku** v aktuální řadě a vložte tam kolík té barvy. Kliknutím na kolík ve
  starším pokusu vyberete i jeho barvu.
- **Táhněte** kolík z palety, ze staršího pokusu nebo z aktuální řady do dírky. Když kolík
  vytáhnete z aktuální řady a pustíte kdekoli jinde, zmizí.
- **Klikněte pravým tlačítkem** na dírku a vyprázdněte ji.
- Jakmile je řada úplná, rozsvítí se vpravo od ní malé hodnoticí pole: **klikněte na ně** a
  pokus se vyhodnotí.
- **Klikněte prostředním tlačítkem** na dírku a kolík _přidržíte_: přidržený kolík se po
  vyhodnocení přenese do dalšího pokusu, takže nemusíte znovu skládat to, čemu už věříte.
  Dalším takovým kliknutím ho zase uvolníte.
- **Přidržet** (tlačítko vedle Zpět) dělá totéž obyčejným kliknutím: dokud je zapnuté,
  kliknutí na dírku v aktuální řadě kolík přidrží nebo uvolní, místo aby vkládalo barvu.
  Barvu měníte kliknutím do palety jako obvykle; dalším stiskem **Přidržet** se vrátíte
  ke vkládání kolíků.
- **Písmena** v nabídce Pauza napíšou na každý kolík písmeno, kdyby se vám některé barvy
  pletly, a zase ho sundají.

### Klávesnice (Keyboard)

- **Šipky**: nahoru a dolů vybírají barvu v paletě, doleva a doprava posouvají kurzor po
  aktuální řadě a po jejím zaplnění i na hodnoticí pole.
- **Enter** nebo **Mezerník** vloží vybranou barvu do dírky pod kurzorem, nebo pokus
  odešle, když kurzor stojí na hodnoticím poli.
- **Backspace** nebo \`D\` vyprázdní dírku pod kurzorem.
- \`H\` přidrží nebo uvolní kolík pod kurzorem.
- \`K\` je tlačítko **Přidržet** a \`L\` tlačítko **Písmena**.

## Nastavení

- **Barvy**: z kolika různých barev je skrytá řada složená, od 2 do 10. Čím víc barev, tím
  hůř se řada odhaluje.
- **Kolíků na pokus**: délka skryté řady.
- **Počet pokusů**: kolik pokusů dostanete.
- **Povolit prázdná místa**: umožní nechat v pokusu dírky prázdné. Prázdná dírka se nikdy
  netrefí, takže se s ní snáz oťukávají barvy. Skrytá řada sama prázdná místa nikdy nemá.
- **Povolit opakování barev**: dovolí skryté řadě (a vašim pokusům) použít barvu víckrát.
  Vypnutím se počet možných řad pořádně smrskne.
`,v=e({default:()=>y}),y=`# Setrvačnost

Jste kulička na mřížce plné překážek a chcete posbírat všechny drahokamy na hrací ploše.
Háček je v názvu: jakmile se kulička rozjede, sama od sebe se už nezastaví. Projede
skrz drahokamy (a cestou je sebere) i prázdná políčka a stojí až tehdy, když je dalším
políčkem zeď nebo když dosedne na zarážku. Úhlopříčné tahy se protáhnou i mezi dvěma zdmi,
které se dotýkají jen rohem. Najet na minu je smrtelné, i kdyby tentýž tah sebral úplně
poslední drahokam.

Každý hlavolam vzniká tak, aby se všechny jeho drahokamy daly posbírat z výchozího políčka,
nic vám ale nebrání zajet do rohu hrací plochy, odkud už na některý drahokam nedosáhnete. Za
smrt ani za uvíznutí není žádný postih kromě počítadla úmrtí ve stavovém řádku: prostě
vezměte tah zpět a zkuste to jinudy.

## Ovládání

**Zpět** po nájezdu na minu vás vrátí před osudný tah. **Vyřešit** najde z místa, kde právě
jste, trasu přes všechny zbývající drahokamy a kuličku po ní projede; **Zpět** vezme celou
trasu naráz.

### Myš a dotyk

- **Klikněte** na políčko a kulička se rozjede směrem k němu, zaokrouhleno na nejbližší
  z osmi světových stran – úhlopříčky nevyjímaje. Kliknout jde i na okraj mimo mřížku,
  což se hodí, když kulička stojí u kraje.

### Klávesnice (Keyboard)

- **Šipky** rozjedou kuličku nahoru, dolů, doleva nebo doprava.
- **Home**, **Page Up**, **End** a **Page Down** ji pošlou úhlopříčně (vlevo nahoru, vpravo
  nahoru, vlevo dolů, vpravo dolů). Numerická klávesnice funguje, jak vypadá: 8 je nahoru,
  3 vpravo dolů a tak dál; číselná řada dělá totéž.

## Nastavení

- **Šířka** a **Výška** mřížky. Zhruba pětina políček jsou zdi, pětina zarážky, pětina miny
  a pětina drahokamy.
`,b=e({default:()=>x}),x=`# Keen

Vyplňte mřížku číslicemi od 1 až do její velikosti tak, aby každý řádek i každý sloupec
obsahoval každou číslici právě jednou. Mřížka je navíc rozdělená do silně orámovaných „klecí“
a každá z nich nese v levém horním políčku malé vodítko: součet a početní znaménko. Číslice
v kleci musí tou operací dát právě tento výsledek:

- \`7+\` znamená, že se číslice v kleci sečtou na 7.
- \`12×\` znamená, že se vynásobí na 12.
- \`2−\` je vždycky na kleci o dvou políčkách a znamená, že jedna číslice je o 2 větší než druhá
  (v libovolném pořadí).
- \`3÷\` je také na dvou políčkách a znamená, že jedna číslice je trojnásobkem druhé.

Na rozdíl od režimu Killer v Solu _smí_ klec obsahovat tutéž číslici dvakrát, pokud ovšem obě
kopie neleží v jednom řádku nebo sloupci. Žádné číslice nejsou předepsané; vodítka jsou vše,
co dostanete, a každý hlavolam má právě jedno řešení. Tenhle hlavolam vychází pod názvem
KenKen.

## Ovládání

Číslice, která se v řádku či sloupci objeví dvakrát, zčervená, a stejně tak vodítko klece,
která je celá vyplněná, ale nedává svůj výsledek. **Vyřešit** doplní řešení.

### Myš a dotyk

- **Klikněte** na políčko a vyberte ho, pak na klávesnici na obrazovce napište číslici. Dalším
  kliknutím na vybrané políčko výběr zrušíte.
- **⌫** na klávesnici vybrané políčko zase vyprázdní a **✎** zapne **tužkové poznámky**:
  co pak vyberete, zapíše se jako drobná poznámka a tatáž číslice znovu ji smaže. Tužkové
  poznámky jsou tu jen pro vaše přemýšlení; vyplněná číslice je smaže.
- **Klikněte pravým tlačítkem** na prázdné políčko a vyberete ho rovnou pro tužkové poznámky.
- **Poznámky** v nabídce Pauza vyplní každé prázdné políčko kompletní sadou tužkových
  poznámek.
- **Zvýraznit** (lupa vedle Zpět) vyznačí každé políčko se stejnou číslicí, jako má
  políčko, na které jste naposledy klikli, a mezi tužkovými poznámkami tu číslici ukáže
  tučně. Dalším stiskem ho vypnete.

### Klávesnice (Keyboard)

- **Napište číslici** a vyplníte vybrané políčko – nebo si ji tam poznamenáte, pokud bylo
  políčko vybrané pro tužkové poznámky.
- **Mezerník** nebo **Backspace** vybrané políčko vyčistí (jeho číslici i všechny poznámky).
- **Šipky** posouvají kurzor a číslice, které píšete, padají do políčka pod ním.
- **Enter** přepíná kurzor mezi běžným zápisem a tužkovými poznámkami.
- **M** je tlačítko **Poznámky** a **L** tlačítko **Zvýraznit**.

## Nastavení

- **Velikost mřížky**: od 3 do 9. Číslice nad 9 by se nedaly rozumně zapsat, takže je 9 strop.
- **Obtížnost**: nejtěžší druh úvahy, který je k vyluštění potřeba. _Snadná_ vyžaduje nanejvýš
  zjistit, které číslice vůbec můžou být v kleci; _Střední_ chce sledovat, ve kterém políčku
  klece může která číslice sedět; _Těžká_ přidává úvahy napříč klecemi (číslice, které klec musí
  umístit do jednoho řádku, nemůžou být jinde) a skupiny políček vlastnící skupinu číslic;
  _Expertní_ přidává vynucené řetězce a _Extrémní_ zadání se bez tipování a vracení nedají
  dokončit. Těžší hlavolamy se generují déle a mřížky 3×3 nikdy nepřekročí Střední.
- **Jen násobení**: každé vodítko je součin, což odstraní snadná dvoupolíčková zadání a udělá
  z toho dost jiný hlavolam.
`,S=e({default:()=>C}),C=`# Rozsviť

Mřížka bílých a černých políček. Rozmístěte žárovky na bílá políčka tak, aby svítilo každé
bílé políčko. Žárovka osvětlí své vlastní políčko a svítí podél svého řádku a sloupce, dokud
jí nepřekáží černé políčko nebo okraj. Na konci musí platit tři věci:

- každé bílé políčko svítí;
- žádnou žárovku neosvětluje jiná, tedy žádné dvě žárovky na sebe podél řádku či sloupce
  nevidí;
- černé políčko s číslem má přesně tolik žárovek v políčkách přímo nad sebou, pod sebou,
  nalevo a napravo. Černá políčka bez čísla můžou mít vedle sebe žárovek kolik chtějí.

Osvětlená políčka jsou přelitá žlutou. Žárovky, které na sebe svítí, zčervenají, a stejně tak
číslo, které už nemůže vyjít: buď má vedle sebe žárovek příliš mnoho, nebo už pro ně není
dost místa.

## Ovládání

Hlavolam je hotový, když se rozzáří celá mřížka a nic nesvítí červeně. **Tip**
položí jednu žárovku – nebo odebere takovou, která do řešení nepatří – a zbytek nechá na
vás; hra běží dál a s pár tipy vám výhra i kredit zůstanou. **Vyřešit** doplní
žárovky jednoho řešení a křížky, které jste si udělali, nechá být.

### Myš a dotyk

- **Klikněte** na bílé políčko a položíte tam žárovku, dalším kliknutím ji zase seberete.
- **Klikněte pravým tlačítkem** na bílé políčko a uděláte si křížek ve smyslu „sem žádná
  žárovka nemůže“; dalším kliknutím pravým tlačítkem ho smažete. Na políčko s křížkem
  žárovku nepoložíte, dokud křížek nezmizí, a políčko s žárovkou se křížkovat nedá.
- **Křížek** (tlačítko s křížkem vedle Zpět) zařídí, že obyčejné kliknutí udělá nebo smaže
  křížek místo žárovky – hodí se, když vylučujete hodně políček naráz. Dalším stiskem se
  vrátíte k žárovkám.

### Klávesnice (Keyboard)

- **Šipky** posouvají kurzor po mřížce.
- **Enter** položí nebo sebere žárovku pod kurzorem a **Mezerník** (nebo **I**) tam přepíná
  křížek.
- **X** je tlačítko **Křížek**.

## Nastavení

- **Šířka** a **Výška** mřížky.
- **% černých políček**: zhruba jak velká část mřížky bude černá. Je to přání, ne slib: pokud
  při téhle hustotě nejde žádný hlavolam sestavit, generátor přidá o pár černých políček víc.
- **Symetrie**: vzor, kterým se černá políčka řídí – žádný, zrcadlení nebo otočení dvou
  polovin, případně čtyřnásobné zrcadlení či otočení. Čtyřnásobné otočení potřebuje čtvercovou
  mřížku.
- **Obtížnost**: _Snadná_ zadání padnou úvahou o jednom políčku po druhém, kde žárovka být musí a
  kde nemůže. _Střední_ chtějí poměřovat celé skupiny políček proti sobě („jedno z těchhle tří
  musí být žárovka, a to tuhle možnost vylučuje“). _Těžká_ si můžou vyžádat, že někam žárovku
  zkusíte dát a sledujete důsledky, dokud se něco nerozbije. Každý hlavolam má právě jedno
  řešení.
`,w=e({default:()=>T}),T=`# Smyčka

Mřížka teček a v některých mezerách mezi nimi číslo. Nakreslete jedinou uzavřenou smyčku po
slabých čarách mezi tečkami tak, aby:

- každá očíslovaná mezera měla na smyčce přesně tolik svých stran, kolik říká její číslo;
- smyčka sama sebe nikdy nekřížila ani se nedotýkala – každá tečka má buď dvě čáry, nebo
  žádnou – a aby byla jenom jedna, bez volných konců a oddělených kousků.

Klasická verze používá čtverce, ale tentýž hlavolam funguje i na trojúhelnících,
šestiúhelnících a tuctu podivnějších dláždění, kde čísla klidně přelezou 4.

Čáry, které tvoří špatnou smyčku nebo se sbíhají tři v jedné tečce, zčervenají; číslo, které
má kolem sebe čar příliš mnoho nebo už mu nezbývá dost možných stran, zčervená také. Jakmile
má číslo kolem sebe přesně správný počet čar, zešedne.

## Ovládání

**Vyřešit** nakreslí celou smyčku. Hlavolam je hotový, jakmile je smyčka celá a všechna čísla
sedí; škrtat nepoužité hrany je dobrovolné.

### Myš a dotyk

- **Klikněte** na slabou hranu a nakreslíte na ní čáru; dalším kliknutím na tutéž čáru ji
  smažete.
- **Klikněte pravým tlačítkem** na hranu a škrtnete ji jako jistě mimo smyčku; dalším
  kliknutím pravým tlačítkem značku smažete. Kliknutím levým i pravým tlačítkem navíc
  smažete značku udělanou tím druhým.
- **Škrtat** (tlačítko s křížkem vedle Zpět) zařídí, že obyčejné kliknutí hranu škrtne nebo
  škrt zruší, místo aby kreslilo čáru. Dalším stiskem se vrátíte ke kreslení čar.

### Klávesnice (Keyboard)

- **Šipky** posouvají kurzor od hrany k hraně; **Enter** na hraně pod kurzorem čáru nakreslí
  nebo smaže a **Mezerník** ji škrtne nebo škrt zruší.
- **X** je tlačítko **Škrtat**.

## Nastavení

- **Šířka** a **Výška** mřížky, počítané v buňkách dláždění. U čtvercové mřížky je to prostě
  počet čtverců na šířku a na výšku; ostatní dláždění počítají své opakující se jednotky,
  takže se skutečný počet ploch liší.
- **Typ mřížky**: _Čtverce_, _Trojúhelníky_ a _Plástev_ jsou pravidelná dláždění. _Kosý
  čtverec_, _Cairo_, _Velký šestiúhelník_, _Osmiúhelníky_, _Draci_, _Květ_, _Dvanáctiúhelníky_
  a _Velký dvanáctiúhelník_ míchají tvary a obě dláždění _Penrose_ se neopakují vůbec.
- **Obtížnost**: _Snadná_ zadání vystačí se samotnými pravidly – spočítat čáry kolem čísla,
  pamatovat si, že tečka má dvě čáry nebo žádnou, a neuzavřít smyčku předčasně. _Střední_ přidává
  úvahy o dvojicích hran scházejících se v tečce (nanejvýš jedna, nebo aspoň jedna z dvojice je
  čára). _Těžká_ nechává tyhle poznatky řetězit od tečky k tečce, třeba podél úhlopříčné řady
  dvojek. _Expertní_ navíc sleduje hrany, o kterých se ví, že jsou si rovné nebo opačné. Tipovat
  není nikdy potřeba; každý hlavolam má právě jedno řešení.
`,E=e({default:()=>D}),D=`# Magnety

Obdélník je vydlážděný dominy, ze kterých vidíte jen obrysy. Každé domino je buď magnet –
jedna půlka pól \`+\`, druhá pól \`−\` – nebo neutrální, úplně bez pólů. Čísla po obvodu říkají,
kolik pólů \`+\` (nad sloupci a nalevo od řádků) a kolik pólů \`−\` (pod sloupci a napravo od
řádků) v každé řadě je; chybějící číslo znamená, že pro tu řadu vodítko není. Vyplňte každé
domino tak, aby všechny počty seděly a aby dva stejné póly nikdy neležely vedle sebe: \`+\` se
nikdy nesmí přes hranici domin dotýkat \`+\` a \`−\` se nesmí dotýkat \`−\`. Neutrální domina
nemají póly a můžou sousedit s čímkoli.

Dotýkající se stejné póly svítí červeně. Počet zčervená, když už nemůže vyjít – pólů je
příliš mnoho, nebo je jich málo a není kam další dát – a zešedne, jakmile sedí přesně.
Hlavolam je hotový, když je každé domino vyplněné, každý počet sedí a nic není červené.

## Ovládání

### Myš a dotyk

- **Klikněte** na prázdnou půlku domina a udělá se z ní pól \`+\` (druhá půlka bude \`−\`).
  Dalším kliknutím na tutéž půlku magnet otočíte a třetím domino vyprázdníte. Kliknutím na
  neutrální domino se nestane nic.
- **Klikněte pravým tlačítkem** na nevyplněné domino a označíte ho jako neutrální. Dalším
  kliknutím pravým tlačítkem se neutrální domino změní na otazníky, tedy poznámku, že domino
  je určitě magnet; třetí kliknutí pravým tlačítkem ho vyprázdní. Na magnet
  kliknutí pravým tlačítkem nemá vliv.
- **Neutrální** (vystínované domino vedle Zpět) zařídí, že obyčejné kliknutí udělá totéž co
  kliknutí pravým tlačítkem: označí domino jako neutrální, pak otazníky, pak zase prázdné.
  Dalším stiskem se vrátíte ke kladení magnetů.
- **Vyřešit** doplní celé řešení.

### Klávesnice (Keyboard)

- **Šipky** posouvají kurzor po mřížce.
- **Enter** přepíná půlku pod kurzorem mezi \`+\`, \`−\` a prázdnou, přesně jako
  kliknutí levým tlačítkem.
- **Mezerník** přepíná domino pod kurzorem mezi neutrálním, otazníkem a nevyplněným, přesně jako
  kliknutí pravým tlačítkem.
- **B** je tlačítko **Neutrální**.

## Nastavení

- **Šířka** a **Výška** mřížky. Když je plocha lichá, jedno políčko zbude a nakreslí se
  šrafovaně; nepatří k žádnému dominu a počítá se jako neutrální.
- **Obtížnost**: _Snadná_ zadání potřebují vždycky jen pohled na jednu řadu nebo jedno domino –
  počet, který už je naplněný, počet, který spotřebuje všechny zbývající možnosti, nebo domino,
  jehož ani jedna půlka nemůže vzít daný pól. _Těžká_ chtějí navíc uvažovat o celých dominech
  ležících podél řady: domino, které musí být magnet, dodá jeden pól od každého druhu bez ohledu
  na otočení, v řadě, kde smí zbýt už jen jedno neutrální políčko, nemůže podélně ležet neutrální
  domino, a tak dál. Každý hlavolam má právě jedno řešení.
- **Jen nutná vodítka**: odstraní každý počet, který k vyluštění na zvolené obtížnosti není
  potřeba, takže je pak podstatně těžší najít, kde začít.
`,O=e({default:()=>k}),k=`# Mapa

Mapa je rozdělená na oblasti. Obarvěte každou oblast jednou ze čtyř barev tak, aby žádné dvě
oblasti se společným kusem hranice neměly stejnou barvu. Oblasti, které se dotýkají jen
rohem, stejnou barvu mít smějí. Pár oblastí je obarvených předem a jsou vybrané tak, aby se
mapa dala dokončit jediným způsobem.

Dvě sousední oblasti ve stejné barvě dostanou na společné hranici červený \`!\`.

## Ovládání

**Vyřešit** vybarví celé řešení. Mapa blikne, jakmile je každá oblast obarvená a nic není
červené.

### Myš a dotyk

- **Přetáhněte** barvu: stiskněte v nějaké oblasti (nebo na některém čtverečku pod mapou)
  a pusťte v jiné oblasti, které tím barvu dáte. Tažení z prázdné oblasti, z volného místa
  kolem mapy nebo z gumy oblast, na kterou pustíte, vyčistí.
- **Klikněte na čtvereček** a vyberete barvu, pak **klikněte** na oblasti a vybarvíte je;
  dalším kliknutím na vybraný čtvereček výběr zrušíte.
- **Táhněte pravým tlačítkem** barvu do prázdné oblasti a uděláte v ní malou tečku té barvy,
  poznámku, že oblast _možná_ bude mít tuhle barvu. Oblast může nést několik tužkových
  teček; tažení téže barvy znovu její tečku odstraní. Když máte vybraný čtvereček, přepne
  tečku i prosté **kliknutí pravým tlačítkem** do prázdné oblasti.
- **Čísla** (v nabídce Pauza) ukážou v každé oblasti číslo, což se hodí, když se o hlavolamu
  s někým bavíte, a zase je schovají.

### Klávesnice (Keyboard)

- **Šipky** posouvají kurzor po mapě; oblast, ve které je, se orámuje. Klávesy **1**–**4** ji
  obarví, **Mezerník** ji vyčistí a **Enter** její barvu zvedne, takže si ji můžete odnést
  šipkami a položit klávesou **Enter** (nebo jako tužkovou tečku **mezerníkem**). Dvojí
  stisk klávesy **Enter** bez pohybu oblast vyčistí.
- **L** je tlačítko **Čísla**.

## Nastavení

- **Šířka** a **Výška** mřížky, na které je mapa nakreslená, v políčkách.
- **Oblasti**: na kolik oblastí je mapa rozstříhaná.
- **Obtížnost**: _Snadná_ zadání mají vždycky oblast, které zbývá jediná barva. _Střední_ přidává
  úvahy o dvojicích sousedních oblastí, které si mezi sebe musí rozdělit tytéž dvě barvy. _Těžká_
  potřebuje řetězce takových úvah napříč mapou. Všechny tyhle jdou vyluštit bez tipování.
  _Extrémní_ slibuje jen tolik, že řešení je jediné; možná budete muset barvu zkusit a sledovat
  ji, dokud se něco nerozbije.
`,A=e({default:()=>j}),j=`# Miny

Mřížka zakrytých políček ukrývá několik min. Odkryjte každé políčko, ve kterém mina _není_.
Každé otevřené políčko ukáže, kolik z jeho osmi sousedů jsou miny; otevřete minu a je po hře.

Zvláštnost téhle verze je, že nikdy nemusíte hádat. Než poprvé kliknete, není nic
rozhodnuté: miny se rozmístí až pak, a to tak, aby políčko, na které jste klikli, bylo prázdné
a celá mřížka se dala odtud dolomit čistou úvahou. Kdykoli máte pocit, že jste v koncích,
někde vždycky je bezpečné políčko, které už čísla dokazují.

Stavový řádek ukazuje, kolik vlajek jste zapíchli, proti počtu min, a hodiny se rozběhnou
s vaším prvním kliknutím. Nášlap na minu odhalí i všechny ostatní a přeškrtne vlajky, které
byly špatně; ten osudný tah můžete vzít zpět a hrát dál, ale úmrtí zůstane zapsané ve
stavovém řádku.

## Ovládání

### Myš a dotyk

- **Klikněte** na zakryté políčko a otevřete ho. Otevření prázdného políčka (bez min
  v sousedství) otevře i jeho sousedy, a tak dál směrem ven.
- **Klikněte pravým tlačítkem** na zakryté políčko a zapíchněte do něj vlajku jako varování před minou,
  dalším kliknutím ji zase seberete. Políčka s vlajkou nejde otevřít omylem.
- **Klikněte na číslo**, které už má kolem sebe správný počet vlajek, a naráz otevřete
  všechny jeho ostatní zakryté sousedy. Totéž udělá **kliknutí prostředním tlačítkem** na to
  číslo.
- **Tip** otevře jedno bezpečné políčko – nebo sebere vlajku, pod kterou žádná mina není –
  a zbytek mřížky nechá na vás. S pár tipy vám výhra i kredit zůstanou.
- **Vyřešit** odhalí celé rozmístění a označí každou minu. Jako vaše vlastní výhra se to
  nepočítá.

### Klávesnice (Keyboard)

- **Šipky** posouvají kurzor po mřížce.
- **Enter** funguje jako kliknutí levým tlačítkem na políčko pod kurzorem: otevře zakryté
  políčko, nebo vyčistí okolí čísla, které má všechny vlajky na místě.
- **Mezerník** zapíchne nebo sebere vlajku, stejně jako kliknutí pravým tlačítkem.

## Nastavení

- **Šířka** a **Výška** mřížky.
- **Miny**: kolik min se má schovat. Místo počtu můžete zadat procenta, třeba \`20%\`. Při
  hodně vysoké hustotě trvá dlouho, než se najde řešitelná mřížka.
- **Zaručit řešitelnost**: když je zapnuté (což je výchozí stav), rozmístění se zaručeně dá
  vyluštit od chvíle, kdy poprvé kliknete, bez hádání. Vypněte ho pro obyčejné náhodné
  mřížky, kde na vás na konci může zbýt hod mincí.
`,M=e({default:()=>N}),N=`# Síť

Přes mřížku čtvercových dlaždic je natažená síť drátů a pak se každá dlaždice náhodně
protočila. Otočte je zpátky tak, aby byly všechny spojené do jediné sítě: každý konec drátu
musí potkat drát na sousední dlaždici a žádný drát nesmí zůstat namířený do zdi. Hotová síť je
strom, takže nemá žádné uzavřené smyčky.

Dlaždice, které už jsou připojené ke zdroji uprostřed mřížky, se pro orientaci kreslí modře;
zbytek zůstává šedý. Drát, který je součástí smyčky, je červený. Silné černé čáry mezi
dlaždicemi jsou bariéry: nemůže je překročit žádný drát, což vám napovídá, jak musí dlaždice
po obou stranách sedět. Stavový řádek ukazuje, kolik dlaždic je právě pod proudem.

## Ovládání

### Myš a dotyk

- **Klikněte** na dlaždici a otočíte ji proti směru hodinových ručiček,
  **klikněte pravým tlačítkem** a otočí se po směru.
- **Klikněte prostředním tlačítkem** na dlaždici a **zamknete** ji, jakmile jste si jí jistí.
  Zamčená dlaždice je stínovaná a neotočí se, dokud ji další kliknutí prostředním tlačítkem
  neodemkne. Kliknutí pravým tlačítkem dlaždicí otáčí,
  nezamyká ji, takže zamknout jde jedině kliknutím prostředním tlačítkem.
- **Zamknout** (tlačítko se zámkem vedle Zpět) zařídí, že obyčejné kliknutí dlaždici zamkne
  nebo odemkne, místo aby jí otáčelo – na touchpadu je to snazší
  než kliknutí prostředním tlačítkem. Kliknutí pravým tlačítkem dlaždici dál otáčí po směru. Dalším stiskem se
  vrátíte k otáčení.
- **Zamíchat** protočí každou nezamčenou dlaždici do nové náhodné polohy, když se hlavolam
  zasekl a chcete změnu.
- U mřížky s přechodem přes okraje posouvají pohled čtyři **tlačítka se šipkami**, takže
  můžete dostat dlaždice z protilehlých okrajů vedle sebe.

### Klávesnice (Keyboard)

- **Šipky** posouvají kurzor po mřížce.
- **Enter** nebo **A** otočí dlaždici pod kurzorem proti směru hodinových ručiček, **D** ji
  otočí po směru a **F** o půl otáčky.
- **Mezerník**, **S** nebo **L** dlaždici pod kurzorem zamkne či odemkne. S myší dlaždici zamkne
  i **Shift-kliknutí**, přesně jako kliknutí prostředním tlačítkem.
- **K** je tlačítko **Zamknout** a **J** tlačítko **Zamíchat**.
- U mřížky s přechodem přes okraje posouvají pohled **Shift + šipky** (totéž co čtyři
  tlačítka se šipkami), takže dlaždice z protilehlých okrajů uvidíte vedle sebe. **Ctrl +
  šipky** posouvají zdrojovou dlaždici, ze které se modré zvýraznění šíří.

## Nastavení

- **Šířka** a **Výška** mřížky v dlaždicích.
- **Přechod přes okraje**: dráty smějí vyběhnout jedním okrajem mřížky a pokračovat
  z protilehlého.
- **Pravděpodobnost bariér**: číslo od 0 do 1 udávající, jaká část hran bez drátu dostane
  bariéru. Bariéry nikdy nemění rozvržení drátů: totéž náhodné semínko dá vždycky tutéž
  mřížku, takže vyšší pravděpodobnost jen přidává vodítka.
- **Zaručit jediné řešení**: normálně je hlavolam poskládaný tak, aby fungovalo právě jedno
  rozestavení dlaždic. Vypněte to pro rychlejší generování a občasné nejednoznačné místo.
`,P=e({default:()=>F}),F=`# Posuvná síť

Každá dlaždice nese kus vedení: rovný úsek, roh, odbočku ve tvaru T nebo volný konec
s tečkou. Správně poskládané dílky tvoří jedinou síť, která z napájecího zdroje na stínované
prostřední dlaždici dosáhne na každou dlaždici, bez smyček a bez ramen mířících do prázdna.
Mřížka je rozházená posouváním celých řádků a sloupců, takže jinak než posouváním ji nedáte
do pořádku: dlaždicemi se otáčet nedá, jen se hýbou.

Dlaždice, které právě dostávají proud, jsou modré; zbytek zůstává šedý. Silné černé zdi mezi
dlaždicemi jsou bariéry. Přes bariéru se nedá nic spojit, takže vám prozrazují, kde hotová síť
určitě žádný spoj nemá.

## Ovládání

### Myš a dotyk

- **Klikněte** na šipku vedle řádku nebo sloupce a posunete celou řadu o krok tam, kam šipka
  ukazuje. Dlaždice vytlačená z jednoho konce se vrátí na druhém konci téže řady.
  **Klikněte pravým tlačítkem** na šipku a řada se posune opačně.
- Prostřední řádek a sloupec šipky nemají: napájecí zdroj se nikdy nehýbe.
- **Vyřešit** skočí rovnou na hotovou síť, abyste ji mohli porovnat se svým pokusem.

### Klávesnice (Keyboard)

- **Šipky** posouvají zvýraznění po prstenci šipek.
- **Enter** posune zvýrazněnou řadu tam, kam její šipka ukazuje, a **Mezerník** ji posune zpátky.

## Nastavení

- **Šířka** a **Výška** mřížky.
- **Přechod přes okraje**: když je zapnutý, pravý okraj pokračuje vlevo a spodní nahoře,
  takže vedení (a bariéry) můžou přejít přes okraj mřížky. Přerušovaný rám značí mřížku
  s přechodem přes okraje; plný silný rám je zeď kolem dokola.
- **Pravděpodobnost bariér**: kolik nevyužitých hran dlaždic dostane bariéru, od 0 (žádná)
  do 1 (každá hrana, kterou hotová síť nepoužívá). Čím víc bariér, tím je hlavolam snazší.
  Bariéry se vybírají nezávisle na zbytku mřížky, takže totéž náhodné semínko s vyšší
  pravděpodobností bariér dá tentýž hlavolam, jen s víc vodítky.
- **Počet míchacích tahů**: nechte 0 pro pořádné rozházení, nebo zadejte číslo a mřížka se
  rozhází přesně tolika posuny. Úkolem pak je najít je a vrátit; stavový řádek ukazuje cíl.
`,I=e({default:()=>L}),L=`# Vzor

Každé políčko mřížky je tajně buď černé, nebo bílé. Čísla vedle každého řádku a nad každým
sloupcem vám prozradí délky úseků černých políček v té řadě, popořadě, s aspoň jedním bílým
políčkem mezi sousedními úseky. Vybarvěte černá políčka tak, aby každý řádek i každý sloupec
seděl se svými čísly. Tenhle druh hlavolamu se obvykle jmenuje nonogram nebo picross.

Obrázky se tu generují náhodně, takže není co uhodnout: všechno se musí odvodit z čísel. Každý
hlavolam se předem ověří, aby se dal vyluštit úvahou vždy jen o jednom řádku či sloupci, takže
nikdy nemusíte nic zkoušet naslepo.

Čísla řady zešednou, jakmile jim černé úseky v té řadě odpovídají, a zčervenají, když už se
hotové úseky do čísel nemůžou vejít. Hlavolam je hotový, když každý řádek a sloupec sedí se
svými čísly; tečky jsou tu jen pro vaši paměť.

## Ovládání

### Myš a dotyk

- **Klikněte** na políčko a vybarvíte ho černě; dalším kliknutím na černé políčko ho zase
  vyčistíte.
- **Klikněte pravým tlačítkem** a označíte políčko tečkou ve smyslu „tohle je jistě bílé“;
  dalším kliknutím pravým tlačítkem na políčko s tečkou ho vyčistíte.
- **Táhněte** a vybarvíte rovnou řadu černých políček naráz, **táhněte pravým tlačítkem**
  a položíte řadu teček. Změní se jen políčka, která byla ve stejném stavu jako to, na kterém
  jste začali, takže tažení teček přes vaše černá políčka se jich nedotkne.
- **Klikněte prostředním tlačítkem** na políčko a vrátíte ho na neznámé. S myší pak tažením se
  stisknutým kolečkem vyčistíte celý obdélník, ať je v něm cokoli.
- **Guma** (tlačítko s gumou vedle Zpět) zařídí, že totéž dělá levé tlačítko: kliknutím
  políčko vyčistíte, tažením vyčistíte celý obdélník. Dalším stiskem se vrátíte
  k vybarvování černou.
- **Tip** vyplní jedno políčko, a to vždycky takové, které rozhodne jediný řádek nebo sloupec
  sám o sobě – nebo opraví políčko, které odporuje řešení. Hra běží dál a s pár tipy vám
  výhra i kredit zůstanou.
- **Vyřešit** za vás vyplní celý obrázek.

### Klávesnice (Keyboard)

- **Šipky** posouvají kurzor.
- **Enter** pod kurzorem vybarví nebo vyčistí černou a **Mezerník** položí či sebere tečku.
- Držte **Ctrl** při pohybu kurzoru a budete cestou vybarvovat černě, **Shift** a budete klást
  tečky, obojí naráz a budete čistit.
- S myší vyčistí políčka i **Shift-kliknutí**, stejně jako kliknutí prostředním tlačítkem.
- **E** je tlačítko **Guma**.

## Nastavení

- **Šířka** a **Výška** mřížky. Přednastavené velikosti jdou od 10×10 až po 30×30; větší
  mřížky se generují o něco déle.
`,R=e({default:()=>z}),z=`# Perly

Mřížka políček, na některých leží černá nebo bílá perla. Nakreslete jednu uzavřenou
smyčku, která vede od středu políčka ke středu políčka vodorovně nebo svisle a nikdy se
nekříží ani nevětví. Smyčka nemusí projít každým políčkem, ale musí projít každou perlou:

- u **černé perly** smyčka zatáčí a pak projde rovně oběma políčky, která k perle po
  smyčce přiléhají;
- u **bílé perly** smyčka projde rovně a aspoň v jednom ze dvou políček, která k perle po
  smyčce přiléhají, zatočí.

Počítají se jen políčka, kterými smyčka projde těsně před perlou a hned po ní, ne všechna
políčka, která s perlou v mřížce sousedí.

Perla, u které je pravidlo už porušené, dostane červenou svatozář. Jakmile vznikne nějaká
uzavřená smyčka, vykreslí se každý úsek mimo ni červeně, a stejně tak každé políčko se
třemi a více úseky.

## Ovládání

**Vyřešit** nakreslí celou smyčku. Hlavolam je hotový, když je smyčka jediným uzavřeným
okruhem a nic není červené.

### Myš a dotyk

- **Klikněte** na hranu mřížky (poblíž rozhraní dvou políček) a nakreslíte přes ni úsek
  smyčky; dalším kliknutím ho zase odeberete.
- **Táhněte** přes řadu políček a nakreslíte celý běh úseků najednou. Tažení po existujících
  úsecích je maže; tažení, které začne na existujících úsecích a pokračuje do prázdných políček,
  nejdřív maže a pak kreslí. Vrátíte-li se přes políčko, kterým jste už prošli, cestu ještě před
  puštěním zkrátíte; vrátíte-li se na políčko, odkud jste začali, uzavřete smyčku.
- **Klikněte pravým tlačítkem** na hranu mřížky a umístíte tam křížek ve významu „tudy
  úsek nevede“; přes křížek se kreslit nedá, dokud ho neodeberete.
  **Tažením pravým tlačítkem** přes řadu políček dáte křížek na každou hranu, přes kterou
  přejedete.
- **Křížek** (tlačítko s křížkem vedle Zpět) zařídí, že obyčejné kliknutí křížek umístí nebo
  sebere a tažení jich položí celou řadu: stejně jako u kreslení tažení, které začne na
  křížcích, je nejdřív sbírá, a hrany, na kterých už úsek je, přeskočí. Dalším stiskem se
  vrátíte ke kreslení smyčky.

### Klávesnice (Keyboard)

- **Šipky** pohybují kurzorem. **Ctrl+šipka** nakreslí nebo odebere úsek na té straně
  políčka s kurzorem, **Shift+šipka** tam umístí nebo odebere křížek. **Enter** spustí
  tažení z políčka s kurzorem: pohybujte se šipkami a dalším stiskem Enter cestu
  potvrdíte, nebo ji **mezerníkem** zahodíte.
- **X** je tlačítko **Křížek**; když je zapnuté, i tažení z klávesnice klade křížky.

## Nastavení

- **Šířka** a **výška** mřížky v políčkách (nejméně pět v každém směru).
- **Obtížnost**: _Snadné_ hlavolamy vyřešíte úvahami o každé perle a o políčkách hned
  vedle ní. _Záludné_ navíc chtějí, abyste si všimli, kdy by úsek předčasně uzavřel malou
  smyčku a ostatní perly nechal stranou. (Mřížka 5×5 Záludná se generuje jako Snadná,
  stejně jako v originále.)
- **Povolit neřešitelné**: ponechá všechny perly, které smyčka unese, místo aby je ořezal
  na minimální, jednoznačně řešitelnou sadu. Ladicí volba zděděná z originálu.
`,B=e({default:()=>V}),V=`# Kolíky

Hrací plocha plná kolíků s jednou prázdnou dírkou, na náhodné ploše s několika. Kolík smí vodorovně nebo svisle
přeskočit sousedního kolíka do prázdné dírky hned za ním; přeskočený kolík se odebere.
Skákejte tak dlouho, dokud na ploše nezůstane jediný kolík.

Je to stará hra solitér. Plocha **Kříž** je známé anglické uspořádání, **Osmiúhelník** to
evropské (které začíná s prázdnou dírkou mimo střed, protože ze středu se dohrát nedá) a
**Náhodné** plochy jsou podivné tvary vypěstované počítačem. Prázdná místa bez dírky
prostě nejsou součástí plochy.

Nadobro se zaseknout nemůžete: když nezbývá žádný skok a kolíků je víc než jeden, hra
sice končí, ale **Zpět** vás vrátí, jak daleko chcete. Stavový řádek počítá zbývající
kolíky a odehrané tahy.

## Ovládání

### Myš a dotyk

- **Přetáhněte** kolík a pusťte ho na prázdnou dírku přesně o dvě políčka dál, v přímé
  linii přes jiný kolík. Při každém jiném puštění se kolík vrátí zpátky.
- Nebo **klikněte** na kolík, tím ho zvednete (zoranžoví a vyznačí se dírky, kam může
  doskočit), a pak klikněte na dírku, do které má skočit. Dalším kliknutím na týž kolík
  ho zase položíte.

### Klávesnice (Keyboard)

- **Šipky** pohybují kurzorem po ploše.
- **Enter** nebo **mezerník** na kolíku ho zvedne; šipka s ním pak skočí daným směrem,
  pokud je takový tah možný, a další **Enter** ho zase položí.

## Nastavení

- **Šířka** a **výška** plochy, nejméně 4 v každém směru.
- **Typ hrací plochy**: _Kříž_ a _Osmiúhelník_ jsou tradiční uspořádání a jsou k dispozici
  jen v 7×7. _Náhodná_ vytvoří pokaždé jiný tvar plochy, vždycky takový, který se dá
  zredukovat na jediný kolík – vznikl totiž tak, že se skoky pouštěly pozpátku od něj.
`,H=e({default:()=>U}),U=`# Dohled

Na některých políčkách mřížky je číslo. Začerněte políčka tak, aby zároveň platily čtyři
věci:

- žádné políčko s číslem není černé;
- žádná dvě černá políčka spolu nesousedí hranou (rohem to nevadí);
- bílá políčka tvoří jednu souvislou oblast spojenou po hranách;
- každé číslo udává počet bílých políček, na která jeho vlastní políčko vidí: sebe sama
  plus všechno v přímé linii nahoru, dolů, doleva a doprava, dokud nepřekáží černé políčko
  nebo okraj mřížky.

Tohle je _Kurodoko_ od Nikoli, známé také jako _Kuromasu_ nebo _Where is Black Cells_.
Číslo, které už vidí dost políček, má hned za každým svým výhledem černé políčko; číslo,
které by vidělo příliš mnoho, kdyby jedno neznámé políčko bylo bílé, má černé políčko
právě tam. Začernit políčko, které je jedinou spojkou mezi dvěma skupinami bílých políček,
není nikdy správně. Každý hlavolam se dá dokončit takovými úvahami; hádat není potřeba.

Chyby se ukazují červeně: černá políčka, která se dotýkají, dostanou kolem skupiny červený
rámeček, bílá políčka odříznutá od hlavní oblasti červený obrys, a číslo zčervená, jakmile
už nemůže vidět dost políček nebo jich už jistě vidí příliš. Hlavolam je hotový, když není
porušené žádné pravidlo; bílá políčka vytečkovávat nemusíte.

## Ovládání

### Myš a dotyk

- **Klikněte** na políčko a začerníte ho. Dalším kliknutím se z něj stane tečka (políčko,
  o kterém víte, že je bílé), a ještě dalším se vyprázdní.
- **Pravým tlačítkem** se prochází opačně: tečka, pak černá, pak prázdno.
- **Táhněte** a začerníte několik políček najednou, **tažením pravým tlačítkem** je
  projedete opačně. Mění se jen políčka, která byla na začátku stejná jako to první, takže
  tažení teček nechá vaše černá políčka na pokoji.
- **Guma** (tlačítko s gumou vedle Zpět) zařídí, že kliknutí políčko místo toho vyčistí
  a tažení vyčistí všechna černá políčka i tečky, přes které vede, ať jsou jakákoli.
  Dalším stiskem se vrátíte k vybarvování.
- **Tip** doplní jedno políčko, které vyplývá z toho, co už na ploše je – nebo opraví
  políčko, které odporuje řešení. Hlavolam se hraje dál a pár tipů vás o výhru ani o její
  kredit nepřipraví.
- **Vyřešit** vyplní celou mřížku a vytečkuje každé bílé políčko.

### Klávesnice (Keyboard)

- **Šipky** pohybují kurzorem po mřížce.
- **Enter** funguje jako kliknutí levým tlačítkem na políčko pod kurzorem a **mezerník**
  jako kliknutí pravým.
- **E** je tlačítko **Guma** a **H** tlačítko **Tip**.

## Nastavení

- **Šířka** a **výška** mřížky. Přednastavené velikosti jdou od 9×6 po 16×11; vygenerovat
  jde cokoli až do 30×30, i když v drobných mřížkách o jednom dvou políčkách žádný
  poctivý hlavolam není.
`,W=e({default:()=>G}),G=`# Obdélníky

Na některých políčkách mřížky je číslo. Rozřežte celou mřížku na obdélníky tak, aby každý
obdélník obsahoval přesně jedno číslo a to číslo bylo jeho obsahem (šířka krát výška).
Šestka tedy sedí v bloku 1×6, 2×3, 3×2 nebo 6×1; ve kterém a kde přesně v něm číslo leží,
to už musíte vyvodit ze sousedů.

Hlavolamy se generují náhodně a čísla se ve výchozím nastavení rozmisťují tak, aby vyšlo
jediné rozdělení mřížky. Původní hlavolam pochází z japonského časopisu Nikoli, kde se mu
říká Shikaku.

## Ovládání

### Myš a dotyk

- **Táhněte** přes oblast a nakreslíte kolem ní obdélník: vykreslí se jeho obrys a čáry
  uvnitř zmizí. Tažení po čáře mřížky nakreslí jen tuhle jednu čáru.
- **Klikněte** na čáru mřížky a tuhle jedinou hranu přidáte nebo odeberete.
- **Tažením pravým tlačítkem** přes oblast vymažete čáry uvnitř, ale její obrys necháte
  být. **Kliknutím pravým tlačítkem** na čáru mřížky ji přepnete stejně jako obyčejným
  kliknutím.
- **Guma** (tlačítko s gumou vedle Zpět) zařídí, že i obyčejné tažení maže: táhněte přes
  oblast a vymažete čáry uvnitř, nebo klikněte na čáru mřížky a odeberete ji. Dokud je
  zapnutá, kliknutí čáru nikdy nepřidá. Dalším stiskem se vrátíte ke kreslení.
- **Vyřešit** za vás doplní celé rozdělení.

Během tažení se obdélník, který se chystáte nakreslit, obtáhne a jeho rozměr se ukáže ve
stavovém řádku. Hotový obdélník správné velikosti se vystínuje. Uzavřený obdélník, který
už nemůže být správně, se označí: jeho číslo zčervená, pokud mu velikost nesedí, a
vyšrafuje se, pokud v něm žádné číslo není. Hlavolam je hotový, když je každé políčko ve
správném obdélníku.

### Klávesnice (Keyboard)

- **Šipky** pohybují kurzorem.
- **Enter** začne z kurzoru vytahovat obdélník; přesuňte kurzor do protějšího rohu a
  dalším **Enterem** ho nakreslete.
- **Mezerník** funguje stejně, ale vnitřek obdélníku místo toho vymaže.
- **E** je tlačítko **Guma**.

## Nastavení

- **Šířka** a **výška** mřížky. Přednastavené velikosti jdou od 7×7 po 19×19.
- **Faktor roztažení** – vygeneruje menší mřížku a roztáhne ji na požadovanou velikost,
  takže hlavolam má méně, ale větších obdélníků. 0 (výchozí) znamená žádné roztahování;
  0,5 udělá počáteční mřížku dvoutřetinovou v každém směru. Velké hodnoty nechají jen
  hrstku obdélníků a hlavolam zbanalizují.
- **Zaručit jediné řešení** – normálně zapnuté. Po vypnutí se čísla umístí kamkoli ve
  svých obdélnících, což je rychlejší a může dát hlavolamy s několika řešeními; za
  vyřešené se pak počítá každé platné rozdělení.
`,se=e({default:()=>K}),K=`# Samegame

Hrací plocha je plná barevných políček. Vyberte skupinu dvou a více políček stejné barvy,
která se navzájem dotýkají stranami, a odeberte ji; políčka nad mezerou spadnou dolů, a
jakmile se vyprázdní celý sloupec, sloupce napravo se posunou a mezeru zavřou. Vyprázdněte
celou plochu a vyhrajete. Když políčka zbydou, ale žádná dvě sousední nemají stejnou
barvu, nedá se už nic dělat – vraťte se zpátky a zkuste jiné pořadí.

Velké skupiny mají mnohem větší cenu než malé: odebrání _n_ políček dá při výchozím
bodování (_n_ − 2)² bodů, takže dvojice je za nic, tři políčka za jeden bod a deset
políček za 64. Stavový řádek ukazuje vaše skóre, a když je nějaká skupina vybraná, taky
kolik má políček a co by za ni bylo.

Každá vygenerovaná plocha (pokud tu volbu nevypnete) je postavená tak, aby _šla_ celá
vyprázdnit – najít pořadí, které k tomu ještě dobře boduje, je ovšem na vás.

Tlačítko Vyřešit tu není: počítač ví, že plocha jde vyprázdnit, ale neprozradí jak.

## Ovládání

### Myš a dotyk

- **Klikněte** na políčko a vyberete celou skupinu, do které patří; skupina se vykreslí
  světleji a se silným obrysem. **Dalším kliknutím na vybranou skupinu** ji odeberete.
  Kliknutím jinam výběr jen přesunete.
- **Klikněte pravým tlačítkem** na vybranou skupinu a výběr zrušíte.

### Klávesnice (Keyboard)

- **Šipky** pohybují kurzorem po ploše (na okrajích přeskočí na druhou stranu).
- **Enter** vybere skupinu pod kurzorem, a když ho stisknete znovu, skupinu odebere.
- **Mezerník** na vybrané skupině výběr zruší.

## Nastavení

- **Šířka** a **výška** hrací plochy.
- **Počet barev**, od 3 do 9 (2 jsou povolené, když se nezaručuje řešitelnost). Víc barev
  znamená menší skupiny a těžší plochu.
- **Bodování**: _(n−2)²_ jako výchozí, nebo _(n−1)²_, které odmění i dvojice.
- **Zaručit řešitelnost**: když je zaškrtnuté, plocha se generuje pozpátku od prázdné, aby
  existovalo aspoň jedno pořadí, kterým se dá vyprázdnit. Odškrtněte ho pro obyčejnou
  náhodnou plochu, která se generuje rychleji a mívá větší oblasti, ale nemusí jít
  vyprázdnit.
`,ce=e({default:()=>le}),le=`# Rozcestník

Na každém políčku je šipka a na několika políčkách je číslo. Spojte políčka do jediné
cesty číslované od 1 do N (N je počet políček) tak, aby následník každého políčka ležel
někde ve směru jeho šipky: políčko s číslem 1 míří na dvojku, ta míří na trojku a tak
dál. Následník může být v daném směru libovolně daleko, nejen hned vedle. Poslední
políčko, označené hvězdičkou, nemíří nikam.

První a poslední číslo je vždycky vidět, a k tomu tolik dalších, aby byla cesta
jednoznačná. Každý hlavolam má právě jedno řešení a dá se najít pouhou úvahou.

Chyby se ukazují červeně: dvě políčka se stejným číslem, číslo, jehož následník neleží ve
směru šipky, nebo řetěz, který přeběhne své zadané číslo. Hlavolam je hotový, když čísla
1 až N procházejí každým políčkem a nikde není červená.

## Ovládání

### Myš a dotyk

- **Táhněte** z políčka na políčko ve směru jeho šipky a druhé se stane následníkem
  prvního. **Tažení pravým tlačítkem** funguje opačně: z políčka na to, které mu má
  předcházet.
- Když je v dvojici spojených políček číslo, rozšíří se po celém řetězu a zobrazí se
  modře. Řetěz, který ještě číslo nemá, se označuje písmenem a posuny (\`a\`, \`a+1\`, \`a+2\`,
  …); jakmile se dotkne políčka s číslem, změní se písmena na čísla. Napojením řetězu na
  políčko, které už je spojené, se staré spojení nahradí.
- Každé políčko, kterému ještě chybí předchůdce, má v levém dolním rohu tečku a šipka
  vybledne, jakmile její políčko následníka má. Úkol tedy pořád zní: spojit výraznou šipku
  s tečkovaným políčkem.
- **Klikněte pravým tlačítkem** na políčko a odeberete obě jeho spojení. Totéž udělá
  **přetažení** políčka mimo plochu, a **tažením pravým tlačítkem** mimo plochu rozpojíte
  celý jeho řetěz.
- **Rozpojit** (tlačítko s přetrženým článkem vedle Zpět) zařídí, že kliknutí na políčko
  rozpojí celý jeho řetěz, všechna jeho spojení, a stejně tak přetažení políčka mimo
  plochu. Tažení z políčka na políčko je dál spojuje. Dalším stiskem ho vypnete.
- **Vyřešit** doplní celou cestu.

### Klávesnice (Keyboard)

- **Šipky** pohybují kurzorem.
- **Enter** na políčku z něj začne spojení; přesuňte kurzor na následníka a dalším
  **Enterem** spojení vytvořte (stiskem na stejném políčku ho zrušíte).
- **Mezerník** nebo **X** odebere spojení políčka pod kurzorem; **Shift + X** rozpojí celý
  jeho řetěz.
- **B** je tlačítko **Rozpojit**.

## Nastavení

- **Šířka** a **výška** mřížky, od 2 do 12 políček (2×2 je na hlavolam moc malé).
- **Začátek a konec v rozích**: když je zapnuté, 1 je vždycky v levém horním políčku a N v
  pravém dolním. Jinak se oba konce umístí náhodně, i když jsou pořád vidět.
`,ue=e({default:()=>de}),de=`# Jedináčci

Na každém políčku mřížky je číslo. Začerněte některá políčka (a schovejte tak jejich
čísla) tak, aby zároveň platily tři věci:

- mezi bílými políčky žádného řádku ani sloupce se žádné číslo neobjeví víc než jednou;
- žádná dvě černá políčka spolu nesousedí hranou (rohem to nevadí);
- bílá políčka tvoří jednu souvislou oblast spojenou po hranách.

Tohle je _Hitori_ od Nikoli. Dobrý začátek je hledat dvě stejná čísla s jedním políčkem
mezi nimi: jedno z dvojice musí být černé, takže políčko uprostřed musí být bílé. Dvě
stejná čísla vedle sebe znamenají, že každý další výskyt toho čísla v jejich linii je
černý.

Chyby se ukazují červeně: černá políčka, která se dotýkají, dostanou kolem skupiny červený
rámeček, bílá políčka odříznutá od hlavní oblasti červený obrys, a dvě zakroužkovaná
políčka se stejným číslem ve společné linii se vykreslí červeně.

Hlavolam je hotový, když není porušené žádné pravidlo; bílá políčka kroužkovat nemusíte.

## Ovládání

### Myš a dotyk

- **Klikněte** na políčko a začerníte ho; dalším kliknutím ho zase obnovíte.
- **Pravým tlačítkem** se kolem čísla nakreslí kroužek, kterým se poznamenává, že je
  políčko jistě bílé; dalším kliknutím pravým tlačítkem kroužek zmizí. Obě tlačítka
  smažou značku, kterou už políčko má.
- **Vyřešit** vyplní celou mřížku a zakroužkuje každé bílé políčko.

### Klávesnice (Keyboard)

- **Šipky** pohybují kurzorem po mřížce (na okrajích přeskočí na druhou stranu).
- **Enter** začerní nebo obnoví políčko pod kurzorem a **mezerník** ho zakroužkuje nebo
  kroužek sundá.

## Nastavení

- **Šířka** a **výška** mřížky, u generovaných hlavolamů od 2 do 20.
- **Obtížnost**: _Snadné_ hlavolamy si vystačí s přímými argumenty – černé políčko nutí
  sousedy do bílé, zakroužkované číslo nutí své dvojníky do černé, dále vzorec dvojice s
  mezerou a dvojice vedle sebe, bílé políčko s jedinou cestou ven a drobné vzorce v rozích.
  _Záludné_ navíc chtějí, abyste si všimli, kdy by začernění políčka rozťalo bílou oblast
  na dvě, a abyste využili dvojice dvojic posunuté o jedno políčko. Každý hlavolam má
  právě jedno řešení.
`,fe=e({default:()=>pe}),pe=`# Šestnáctka

Posuvný hlavolam bez prázdného políčka. Na každém políčku je číslovaná dlaždice, a místo
jedné dlaždice posouváte celý řádek nebo sloupec o jeden krok. Dlaždice vytlačená přes
okraj se rovnou vrátí na opačném konci téže linie, jako by byla mřížka natažená na
koblize. Seřaďte dlaždice tak, aby počítaly od 1 v levém horním rohu, zleva doprava a pak
po řádcích.

## Ovládání

### Myš a dotyk

- **Klikněte** na některou ze šipek kolem okraje a posunete ten řádek nebo sloupec o krok
  ve směru šipky. **Klikněte pravým tlačítkem** na šipku a linie se posune opačně.
- **Vyřešit** prostě nahradí mřížku tou seřazenou. Cestu vám neukáže, ale dá vám čistou
  plochu na zkoušení manévrů.

### Klávesnice (Keyboard)

- **Šipky** posouvají zvýraznění po prstenci šipek na okraji.
- **Enter** posune zvýrazněnou linii ve směru její šipky a **mezerník** opačně.

## Nastavení

- **Šířka** a **výška** mřížky. V mřížkách, kde jsou obě strany liché, je dosažitelná jen
  polovina všech uspořádání, takže generátor rozdává vždycky jen ta dosažitelná.
- **Počet míchacích tahů**: nechte 0 pro zcela náhodné uspořádání, nebo zadejte číslo
  a seřazená mřížka se zamíchá přesně tolika jednotlivými posuny. Úkolem pak je přijít na
  to, které posuny to byly, a vrátit je stejným počtem tahů; čím víc míchacích tahů si
  vyžádáte, tím pravděpodobněji existuje i kratší řešení.
`,me=e({default:()=>he}),he=`# Šikmo

Mřížka prázdných políček se zakroužkovanými čísly v některých rozích. Nakreslete v každém
políčku jednu úhlopříčku, nakloněnou tak či onak, aby:

- u každého zakroužkovaného čísla se jeho rohového bodu dotýkalo přesně tolik čar (čtyřka
  sedí uprostřed kříže, u nuly se všechny čáry kolem naklánějí pryč);
- se čáry nikdy nespojily do uzavřené smyčky.

Číslo, které už má čar příliš, nebo které jich naopak nemůže dostat dost, zčervená, a
stejně tak každá čára, která je součástí smyčky. Hlavolam je hotový, když má každé políčko
čáru a nic není červené.

## Ovládání

### Myš a dotyk

- **Klikněte** na políčko a nakreslíte v něm \`\\\`; dalším kliknutím se změní na \`/\` a
  ještě dalším se vymaže.
- **Pravým tlačítkem** se prochází opačně: \`/\`, pak \`\\\`, pak prázdno. Ke každému stavu
  se tak dostanete oběma způsoby.
- **Vyřešit** vyplní celou mřížku.

### Klávesnice (Keyboard)

- **Šipky** pohybují kurzorem po mřížce.
- **Enter** přepíná políčko pod kurzorem jako kliknutí levým tlačítkem a **mezerník** jako
  kliknutí pravým.

## Nastavení

- **Šířka** a **výška** mřížky v políčkách.
- **Obtížnost**: _Snadné_ hlavolamy se dají řešit políčko po políčku – číslo, které už je
  splněné nebo které potřebuje všechna zbývající políčka, a políčka, kde by jedna ze dvou
  čar uzavřela smyčku. _Těžké_ navíc chtějí úvahy o dvojicích políček, která se musí
  naklonit stejně, ještě než víte kam, a o oblastech, které by čára odřízla od okraje
  mřížky. Hádat není nikdy potřeba; každý hlavolam má právě jedno řešení.
`,ge=e({default:()=>_e}),_e=`# Solo

Vyplňte čtvercovou mřížku číslicemi tak, aby každý řádek, každý sloupec a každý silně
orámovaný blok obsahoval každou číslici právě jednou. Některá políčka jsou zadaná jako
vodítka, zbytek je na vás. Obvyklý hlavolam 3×3 je známé sudoku, ale bloky můžou být i
obdélníky (hlavolam 2×3 má šest bloků 3×2) a mřížka může být až 16×16 – v tom případě
zastupují číslice nad 9 písmena a, b, c…

Zapnout se dají tři varianty:

- **X**: obě hlavní úhlopříčky, lehce vystínované, musí každá obsahovat také všechny
  číslice.
- **Jigsaw**: bloky jsou nepravidelné tvary, které se hlavolam od hlavolamu liší.
- **Killer**: žádné zadané číslice nejsou. Místo toho je mřížka rozdělená na čárkované
  „klece“, z nichž každá je označená součtem číslic uvnitř. V kleci se žádná číslice nesmí
  objevit dvakrát.

Každý hlavolam má právě jedno řešení a vždycky se k němu dá dojít čirou úvahou na
obtížnosti, kterou jste zvolili.

## Ovládání

Číslice, které se bijí s jinou stejnou ve svém řádku, sloupci, bloku, úhlopříčce nebo
kleci, se zobrazí červeně, a stejně tak klec, jejíž číslice nedávají zadaný součet.
**Tip** vepíše jedno políčko – to nejsnazší, které ještě zbývá, nebo první číslici, která
odporuje řešení – a zbytek nechá na vás; hra běží dál a s pár tipy vám výhra i kredit
zůstanou. **Vyřešit** doplní celé řešení a hlavolam ukončí.

### Myš a dotyk

- **Klikněte levým tlačítkem** na prázdné políčko, tím ho vyberete, a pak číslici zapište
  klávesnicí na obrazovce (písmenné klávesy jsou číslice nad 9). Dalším kliknutím na vybrané
  políčko výběr zrušíte.
- **⌫** na klávesnici vybrané políčko zase vyprázdní a **✎** zapne tužkové poznámky, takže
  co zvolíte dál, se zapíše jako malá poznámka místo odpovědi.
- **Klikněte pravým tlačítkem** na políčko a vyberete ho rovnou pro **tužkové poznámky**.
  Poznámky jsou tu jen na přemýšlení; hra si jich nevšímá a zapsáním číslice se smažou.
- **Poznámky** v nabídce Pauza vyplní každé prázdné políčko plnou sadou tužkových poznámek – pro
  ty, kdo rádi začínají od všeho a kandidáty postupně škrtají.
- **Zvýraznit** (lupa vedle Zpět) vyznačí každé políčko se stejnou číslicí, jako má
  políčko, na které jste naposledy klikli, zadaná čísla včetně, a mezi tužkovými
  poznámkami tu číslici ukáže tučně. Dalším stiskem ho vypnete.

### Klávesnice (Keyboard)

- **Napište číslici** (nebo písmeno pro číslice nad 9) a vyplníte vybrané políčko.
- **Mezerník** nebo **Backspace** vybrané políčko vymaže (jeho číslici nebo všechny jeho
  tužkové poznámky).
- **Šipky** pohybují klávesovým kurzorem. **Enter** přepíná kurzor mezi normálním zápisem
  a tužkovými poznámkami a psané číslice jdou do políčka pod ním.
- **M** je tlačítko **Poznámky** a **L** tlačítko **Zvýraznit**.

## Nastavení

- **Sloupce** a **řádky podbloků**: mřížka je velká jako jejich součin a každý blok je
  tak široký, kolik je řádků, a tak vysoký, kolik je sloupců. V režimu Jigsaw je součin
  prostě velikost mřížky.
- **X**, **Jigsaw** a **Killer** zapínají varianty popsané výše. Hlavolamy Killer jsou
  omezené na mřížky s nejvýše devíti číslicemi.
- **Symetrie**: jak se vzor vodítek zrcadlí sám v sobě. Víc symetrie vypadá hezčí, ale
  bývá u ní víc vodítek, než by bylo nutně potřeba.
- **Obtížnost**: nejtěžší druh úvahy, který bude hlavolam vyžadovat. _Velmi snadná_ a _Snadná_
  zadání mají vždycky nějaké políčko, které jde vyplnit rovnou; _Střední_ chce úvahy o tom, kam
  se v bloku a v linii vejde daná číslice; _Těžká_ chce skupiny políček, které si mezi sebou
  rozeberou sadu číslic; _Expertní_ přidává vynucovací řetězce a _Extrémní_ hlavolamy se bez
  hádání a vracení dokončit nedají. Těžké hlavolamy se generují déle.
`,ve=e({default:()=>ye}),ye=`# Stany

Mřížka je tábořiště: na některých políčkách rostou stromy, zbytek je volná půda. Postavte
stany na prázdná políčka tak, aby platilo:

- stanů je přesně tolik co stromů;
- ke každému stromu se dá přiřadit jeho vlastní stan na políčku hned vedle něj (nad ním,
  pod ním, vlevo nebo vpravo – ne úhlopříčně). Stan může náhodou stát i vedle dalších
  stromů, ale každý stan patří jednomu stromu a každý strom jednomu stanu;
- žádné dva stany se nedotýkají, ani rohem;
- čísla podél pravého a dolního okraje udávají počet stanů v každém řádku a sloupci.

Vodítka jsou jen ty počty, celý hlavolam je tedy o tom vydedukovat, kde stany musí stát.
Každý zdejší hlavolam se dá vyřešit pouhou úvahou, bez hádání.

## Ovládání

Stany, které se navzájem dotýkají, se ukážou červeně se značkou na společné hraně nebo
rohu, a stejně tak každá skupina stanů, na kterou mezi nimi nezbývá dost stromů, i každá
skupina stromů, která už nemá kam všechny své stany postavit. Číslo zšedne, jakmile má
jeho řada správný počet stanů, a zčervená, jakmile už splnit nejde. **Vyřešit** rozestaví
všechny stany za vás.

### Myš a dotyk

- **Klikněte** na prázdné políčko a postavte tam stan; dalším kliknutím na stan ho zase
  odstraníte.
- **Klikněte pravým tlačítkem** na prázdné políčko a označte ho jako trávu, tedy že tam
  podle vás žádný stan nestojí; dalším kliknutím pravým tlačítkem značku smažete. Políčko,
  na kterém už něco je, vyprázdní kliknutí levým i pravým tlačítkem.
- **Přetáhněte pravým tlačítkem** podél řádku nebo sloupce a proměňte naráz v trávu každé
  prázdné políčko, přes které přejedete – hodí se to na dokončení řady, ve které už stojí
  všechny stany. Stanů a hotových značek se to nedotkne.

### Klávesnice (Keyboard)

- **Šipky** posouvají kurzor.
- **Enter** postaví nebo odstraní stan pod kurzorem.
- **Mezerník** označí nebo smaže trávu pod kurzorem.

## Nastavení

- **Šířka** a **výška** mřížky, od 4 do 20 políček.
- **Obtížnost**: _Snadné_ hlavolamy zdoláte počítáním a pohledem na to, co který strom
  a stan potřebuje. _Záludné_ po vás navíc chtějí zvážit, jak možná rozestavění v jedné řadě
  svazují její sousedy, a přemýšlet o tom, která políčka si stromy mohou dělit.
`,be=e({default:()=>xe}),xe=`# Věže

Na každé políčko mřížky patří věž vysoká od 1 až po velikost mřížky. Každý řádek a každý
sloupec musí obsahovat každou výšku právě jednou. Čísla kolem okraje říkají, kolik věží
byste viděli při pohledu do toho řádku či sloupce z té strany: věž schová každou nižší věž
za sebou. Vodítko rovné velikosti mřížky znamená, že výšky po celé řadě stoupají; vodítko 1
znamená, že nejvyšší věž stojí hned u toho okraje.

Větší a těžší hlavolamy začínají s několika už postavenými věžemi a některá vodítka u okraje
vynechávají. Číslice, které si odporují s jinou ve svém řádku nebo sloupci, a vodítka, která
už zatím postavené věže nemohou splnit, se ukazují červeně. Tenhle hlavolam je známější pod
názvem Mrakodrapy.

## Ovládání

Zadané věže se měnit nedají a **Vyřešit** doplní řešení.

### Myš a dotyk

- **Klikněte levým tlačítkem** na políčko a vyberte ho, pak klávesami na obrazovce
  postavte věž té výšky. **⌫** na klávesnici políčko zase vyprázdní.
- **✎** na klávesnici zapne **tužkové poznámky**: co pak zvolíte, půjde dovnitř jako malá
  poznámka, políčko zůstane vybrané, takže jich můžete přidat několik, a tatáž číslice
  znovu jednu zase smaže. Vyplnění opravdové číslice tužkové poznámky v tom políčku smaže.
- **Klikněte pravým tlačítkem** na políčko a vyberte ho rovnou pro tužkové poznámky.
- **Poznámky** v nabídce Pauza zaplní každé prázdné políčko celou sadou tužkových poznámek.
- **Zvýraznit** (lupa vedle Zpět) vyznačí každé políčko se stejnou výškou, jako má políčko,
  na které jste naposledy klikli, a mezi tužkovými poznámkami tu výšku ukáže tučně.
  Dalším stiskem ho vypnete.

### Klávesnice (Keyboard)

- **Napište číslici** a ve vybraném políčku postavíte věž té výšky. **Mezerník** nebo
  **Backspace** ho vyprázdní.
- **Šipky** posouvají klávesový kurzor. **Enter** ho přepíná mezi číslicemi a tužkovými
  poznámkami; číslice se píšou do zvýrazněného políčka a kurzor zůstává na místě.
- **M** je tlačítko **Poznámky** a **L** tlačítko **Zvýraznit**.

## Nastavení

- **Velikost mřížky** – od 3 do 9. Věže se zadávají jako jednotlivé číslice, proto je
  9 strop.
- **Obtížnost** – Snadné hlavolamy potřebují jen přímé důsledky každého vodítka a pravidel pro
  řádky a sloupce. Těžké chtějí, abyste zvážili každé uspořádání, které vodítko dovoluje, a našli
  skupiny políček sdílejících pár kandidátů. Expertní přidává složitější úvahy o skupinách a
  vynucené řetězce a Extrémní hlavolamy se bez trochy zkoušení dokončit nedají, i když řešení je
  pořád jediné.
`,Se=e({default:()=>Ce}),Ce=`# Koleje

Trať vjíždí do mřížky zleva a odjíždí dole; oba konce jsou nakreslené jako koleje mizící
z hrací plochy. Doplňte trať mezi nimi. Je to jediná cesta bez odboček, smyček a křížení,
postavená jen z rovných kusů a čtvrtkruhových oblouků, takže z každého políčka, kterým
projde, vedou přesně dvě koleje. Pár kusů je už položených na šedých políčkách a měnit se
nedají. Číslo nad každým sloupcem a vedle každého řádku říká, kolika políčky té řady
hotová trať prochází.

Čísla zšednou, jakmile jejich řada obsahuje správný počet políček s tratí, a zčervenají,
když už řada vyjít nemůže: buď je políček s tratí moc, nebo je tolik přeškrtnutých, že už
nezbývá dost místa. Políčka, kde se koleje potkávají špatně (tři koleje do jednoho políčka,
uzavřená smyčka nebo trať, která přebude, jakmile jsou vjezd s výjezdem spojené), se také
kreslí červeně.

## Ovládání

**Vyřešit** položí celou trať a odstraní všechny vaše značky, které jí odporují. Hlavolam
je hotový, když vjezd s výjezdem spojuje jediná nepřerušená trať a všechna čísla sedí.

### Myš a dotyk

- **Táhněte** přes úsek sousedních políček a položte mezi nimi koleje. Cesta může zatáčet;
  tažení, které jde jen po už položených kolejích, je naopak zase zvedne.
- **Klikněte** u strany políčka a přidáte nebo odeberete jednu kolej vedoucí tou stranou.
  Kliknutím doprostřed políčka ho označíte jako „tudy trať vede“, aniž byste říkali kudy
  přesně – hodí se to na počítání – a dalším kliknutím značku smažete.
- **Klikněte pravým tlačítkem** u strany a nakreslíte krátkou čárku znamenající „tady kolej
  nevede“; kliknutím pravým tlačítkem doprostřed políčka přeškrtnete celé políčko.
  **Tažením pravým tlačítkem** podél řádku či sloupce přeškrtnete (nebo odškrtnete) celý
  úsek políček naráz.
- **Guma** (tlačítko s gumou vedle Zpět) zařídí, že kliknutí nebo tažení políčka vyčistí:
  každé políčko, kterého se dotkne, přijde o koleje, o čárky „tady kolej nevede“ i o svou
  značku či přeškrtnutí. Zadané díly zůstanou. Dalším stiskem se vrátíte ke kladení trati.

### Klávesnice (Keyboard)

- **Šipky** posouvají kurzor, který se zastavuje na políčkách i na stranách mezi nimi.
  **Enter** funguje jako kliknutí na kurzoru a **Mezerník** jako kliknutí pravým tlačítkem.
- **E** je tlačítko **Guma**.

## Nastavení

- **Šířka** a **výška** mřížky, obojí aspoň čtyři.
- **Obtížnost**: _Snadné_ hlavolamy zdoláte pohledem na jedno políčko nebo jednu řadu po
  druhé. _Záludné_ po vás navíc chtějí promyslet, kam ještě může přijít poslední políčko
  s tratí v dané řadě, a co s volnými konci kolejí, které musí pokračovat podél řady nebo
  napříč. Každý hlavolam má právě jedno řešení.
- **Zakázat sousední vodítka 1**: když je zapnuté (výchozí stav), nejsou dvě sousední řady
  obě počítané na 1 a není takový ani sloupec s vjezdem či řádek s výjezdem. Trať tak
  nejezdí v dlouhých nudných rovinkách podél okraje.
`,we=e({default:()=>Te}),Te=`# Otočka

Mřížka očíslovaných dlaždic se rozházela otáčením čtvercových bloků. Otáčejte s nimi
zpátky, dokud čísla nepůjdou po pořádku zleva doprava a shora dolů. V základní hře otočí
každý tah blok 2×2 o čtvrt otáčky kolem bodu, kde se jeho čtyři dlaždice stýkají; větší
nastavení otáčejí bloky 3×3 i většími.

Ve variantách **s orientací** nese každá dlaždice trojúhelník a hlavolam se počítá za
hotový, teprve když všechny trojúhelníky míří nahoru. Ve variantě **jen řádky** mají
dlaždice místo pořadí číslo svého řádku, takže všechny jedničky se musí jen dostat do
prvního řádku, dvojky do druhého a tak dál.

## Ovládání

**Vyřešit** vrátí každou dlaždici rovnou na místo. Cestu vám neukáže, ale je to rychlý
způsob, jak si srovnat mřížku a nacvičovat sled otoček.

### Myš a dotyk

- **Klikněte** doprostřed bloku a otočíte ho proti směru hodinových ručiček;
  **kliknutím pravým tlačítkem** ho otočíte po směru. U bloků 2×2 je střed roh, kde se stýkají
  čtyři dlaždice; u lichých velikostí bloku je to prostřední dlaždice. Kliknutím blíž k okraji
  mřížky otočíte blok, který u toho okraje leží.
- **Po směru** (tlačítko s otáčivou šipkou vedle Zpět) oba směry prohodí: kliknutí otáčí bloky
  po směru hodinových ručiček a kliknutí pravým tlačítkem proti směru. Dalším stiskem se vrátíte.

### Klávesnice (Keyboard)

- **Šipky** posouvají po mřížce obrys velký jako jeden blok. **Enter** otočí obrysem
  vyznačený blok proti směru hodinových ručiček a **Mezerník** po směru.
- **A**, **B**, **C** a **D** otáčejí rohovými bloky vlevo nahoře, vpravo nahoře, vlevo
  dole a vpravo dole proti směru hodinových ručiček; s podrženým **Shiftem** po směru.
- **T** je tlačítko **Po směru**.

## Nastavení

- **Šířka** a **výška** mřížky.
- **Velikost otáčeného bloku**: strana čtvercového bloku, kterým jeden tah otočí (aspoň 2
  a ne větší než mřížka).
- **Jedno číslo na řádek**: snazší varianta, ve které mají všechny dlaždice v řádku stejné
  číslo.
- **Záleží na orientaci**: dlaždice dostanou trojúhelníky a všechny musí skončit špičkou
  nahoru.
- **Počet míchacích tahů**: nechte na 0 pro pořádné zamíchání, nebo zadejte malé číslo
  a dostanete mřížku vzdálenou přesně tolik otoček od řešení. Vaším cílem pak je ty otočky
  najít a vrátit, takže třítahové zamíchání si zaslouží třítahovou odpověď (i když občas
  může existovat i kratší cesta).
`,Ee=e({default:()=>De}),De=`# Nemrtví

Mřížka je strašidelná zrcadlová síň. Na každém políčku bez zrcadla se schovává jedna ze tří
příšer: **duch**, **upír** nebo **zombie**. Legenda nad mřížkou říká, kolik jich od každého
druhu ještě zbývá rozmístit, a číslo na každé pozici u okraje udává, kolik příšer byste
odtud při pohledu do mřížky viděli, jak se váš pohled odráží od šikmých zrcadel.

Zrcadla mění, co je vidět. Upír nemá odraz, takže se počítá jen do chvíle, než pohled
narazí na zrcadlo. Duch je přesný opak: zpříma je neviditelný a ukáže se až po odrazu.
Zombie je vidět vždycky. Když pohled projde stejným políčkem dvakrát, počítá se tamní
příšera pokaždé, když je vidět. Rozmístěte všechny příšery tak, aby sedělo každé číslo
u okraje i každý součet.

## Ovládání

Číslo u okraje zšedne, jakmile je jeho pohled beze zbytku vyřešený, a zčervená, když už
splnit nejde; počet v legendě zčervená, když je té příšery rozmístěno moc. Tužkové poznámky
slouží jen vám a na hlavolam nemají vliv.

### Myš a dotyk

- **Klikněte levým tlačítkem** na prázdné políčko a přepínejte je dokola mezi duchem,
  upírem, zombie a prázdnem. Políčko zůstane zvýrazněné.
- Klávesy na obrazovce vyberou příšeru pro zvýrazněné políčko rovnou, bez přepínání;
  **⌫** políčko vyprázdní, tužkové poznámky včetně.
- **✎** na klávesnici zapne **tužkové poznámky**: zvolená příšera se pak přidá do seznamu
  kandidátů toho políčka (nebo se z něj odebere).
- **Klikněte pravým tlačítkem** na políčko a přidávejte tužkové poznámky po jednom
  kandidátovi (duch, pak upír, pak zombie, pak prázdno).
- **Pohled** (oko vedle Zpět) nakreslí linie pohledu přes zvýrazněné políčko, lámané
  na zrcadlech, a zakroužkuje čísla u okraje na obou koncích každé z nich. Dokud je
  zapnutý, kliknutím na číslo u okraje vykreslíte jeho vlastní linii; dalším kliknutím ji
  pustíte. Dalším stiskem **Pohled** ho vypnete. Dokud je zapnutý, kliknutí na
  nezvýrazněné políčko ho jen zvýrazní, takže prázdné políčko prozkoumáte, aniž byste ho
  vyplnili; dalším kliknutím ho přepnete jako obvykle.

### Klávesnice (Keyboard)

- Šipky posouvají zvýraznění. Enter přepíná příšeru ve zvýrazněném políčku dokola, mezerník
  totéž s jeho tužkovými poznámkami.
- \`G\`, \`V\`, \`Z\` (nebo \`1\`, \`2\`, \`3\`) vloží tu příšeru do zvýrazněného políčka, nebo přepnou
  její tužkovou poznámku, když je zvýraznění v režimu tužky. \`E\`, \`0\`, Backspace nebo
  Delete políčko vyprázdní, tužkové poznámky včetně.
- \`S\` je tlačítko **Pohled**.

## Nastavení

- **Šířka**, **Výška** – velikost mřížky, od 3×3 až po 54 políček celkem.
- **Obtížnost** – _Snadné_ hlavolamy padnou počítáním podél jednoho pohledu po druhém;
  _Normální_ po vás chtějí zvážit kombinace, které celá dráha dovoluje; _Záludné_ se bez
  zkoušení naslepo dokončit nedají.
`,Oe=e({default:()=>ke}),ke=`# Nerovnosti

Zaplňte mřížku tak, aby každý řádek a každý sloupec obsahoval každou číslici od 1 až po
velikost mřížky právě jednou – tedy latinský čtverec – a aby přitom platily znaky nakreslené
mezi sousedními políčky.

V režimu **Nerovnosti** jsou znaky symboly „větší než“: otevřená strana \`>\` míří k větší
číslici a špička k menší. Znak nenese každá dvojice sousedů, a čím těžší hlavolam, tím míň
znaků je.

V režimu **Sousední** jsou znaky krátké čárky znamenající, že se obě číslice liší přesně
o jedna (jako 3 a 4). Tady je každá čárka vždycky vidět, takže vodítkem je i **chybějící**
čárka mezi dvěma políčky: ty dvě číslice rozhodně nejsou po sobě jdoucí.

V novinách se tenhle hlavolam objevuje pod názvem Futoshiki.

## Ovládání

Číslice, které porušují pravidlo – duplicita v řádku či sloupci nebo neplatný znak – se
ukazují červeně a s nimi i provinilý znak. Hlavolam je hotový, když je každé políčko
zaplněné a nic nesvítí červeně.

### Myš a dotyk

- **Klikněte levým tlačítkem** na políčko a vyberte ho, pak klávesami na obrazovce
  doplňte číslici. **⌫** na klávesnici vybrané políčko zase vyprázdní. Dalším kliknutím na
  vybrané políčko výběr zrušíte.
- **✎** na klávesnici zapne **tužkové poznámky**: co pak zvolíte, se místo odpovědi přidá
  do malého seznamu možností v políčku (nebo se z něj odebere). Vyplnění políčka jeho
  tužkové poznámky smaže.
- **Klikněte pravým tlačítkem** na políčko a vyberte ho rovnou pro tužkové poznámky.
- **Poznámky** v nabídce Pauza zaplní každé prázdné políčko všemi možnými tužkovými
  poznámkami, připravenými k vyškrtávání; **Tip** (žárovka vedle Zpět) udělá totéž, ale
  vynechá ty, které snadná úvaha už vylučuje.
- **Zvýraznit** (lupa vedle Zpět) vyznačí každé políčko se stejnou číslicí, jako má
  políčko, na které jste naposledy klikli, zadané číslice včetně, a mezi tužkovými
  poznámkami tu číslici ukáže tučně. Dalším stiskem ho vypnete.

### Klávesnice (Keyboard)

- **Napište číslici** a vyplníte vybrané políčko; \`0\`, mezerník nebo Backspace ho vyprázdní.
- Šipky posouvají kurzor po mřížce; Enter přepíná kurzor mezi vyplňováním číslic
  a psaním tužkových poznámek.
- \`M\` je tlačítko **Poznámky**, \`H\` je **Tip** a \`L\` je **Zvýraznit**.

## Nastavení

- **Režim** – Nerovnosti (znaky „větší než“) nebo Sousední (čárky mezi po sobě jdoucími
  číslicemi).
- **Velikost** – počet řádků a sloupců, od 3 do 9.
- **Obtížnost** – kolik úvah hlavolam potřebuje. **Velmi snadná** zadání znaky nikdy nepotřebují: v
  režimu Nerovnosti nemají žádné a jsou to prosté latinské čtverce, v režimu Sousední se čárky
  kreslí, ale rozhodnou už samotné zadané číslice. **Snadná** potřebují jen přímý význam každého
  znaku; **Střední** po vás chtějí uvažovat o skupinách políček dohromady; **Těžká** přidávají úvahy
  o skupinách podle pozice a vynucené řetězce; **Extrémní** zadání (dostupná z dialogu vlastního
  nastavení) mohou vyžadovat zkoušení, i když řešení je pořád jediné.
`,Ae=e({default:()=>je}),je=`# Neposeda

Obarvěte každé políčko mřížky černě, nebo bíle. Některá políčka jsou zadaná jako vodítka
a měnit se nedají; zbytek začíná šedý a je na vás. Až budete hotoví, musí platit tři věci:

- v každém řádku je stejně černých políček jako bílých;
- v každém sloupci je stejně černých políček jako bílých;
- žádná tři políčka za sebou v řádku ani ve sloupci nemají stejnou barvu.

Chyby svítí červeně: řada tří a více stejných políček dostane červený rámeček a políčko
nese červený **!**, když už jeho řádek nebo sloupec obsahuje té barvy moc. Ve volitelné
variantě „jedinečné řádky a sloupce“ nesmějí dva řádky mít stejný vzor (a stejně tak dva
sloupce); shodné řady se červeně přeškrtnou.

## Ovládání

Políčka s vodítkem – ta nakreslená s malým rámečkem uvnitř – se měnit nedají. **Vyřešit**
vyplní celou mřížku. Hlavolam je hotový, když je každé políčko obarvené a nic nesvítí
červeně.

### Myš a dotyk

- **Klikněte** na šedé políčko a bude černé; dalším kliknutím bílé a ještě jedním zase
  prázdné.
- **Kliknutí pravým tlačítkem** jde opačným pořadím: bílá, pak černá, pak prázdno.
- **Kliknutím prostředním tlačítkem** políčko vyprázdníte rovnou.
- **Guma** (tlačítko s gumou vedle Zpět) zařídí, že kliknutí políčko vyprázdní, místo aby ho
  obarvilo. Dalším stiskem se vrátíte k obarvování.

### Klávesnice (Keyboard)

- **Šipky** posouvají kurzor po mřížce.
- **Enter** přepíná políčko pod kurzorem jako kliknutí a **Mezerník** jako
  kliknutí pravým tlačítkem.
- **1** dá černou, **0** (nebo **2**) bílou a **Backspace** políčko vyprázdní.
- **E** je tlačítko **Guma**.

## Nastavení

- **Šířka** a **výška** mřížky. Obojí musí být sudé a aspoň 6.
- **Jedinečné řádky a sloupce**: když je zapnuté, nesmějí být dva řádky shodné a stejně tak
  dva sloupce (řádek se pořád může shodovat se sloupcem). Hodně vysoké nebo hodně široké
  mřížky se v tomhle režimu odmítají, protože není dost různých řad, aby to vyšlo.
- **Obtížnost**: _Snadné_ hlavolamy potřebují vždycky jen dvě okamžité úvahy – dvě stejná
  políčka nutí to vedle nich nebo mezi nimi do druhé barvy a řada, která už má svůj příděl
  jedné barvy, dostane všude jinde barvu druhou. _Normální_ po vás navíc chtějí promyslet,
  kam ještě v řadě může přijít poslední políčko dané barvy, aby nevznikla trojice za sebou.
  Každý hlavolam má právě jedno řešení.
`,Me=e({default:()=>Ne}),Ne=`# Rozplétání

Hrstku bodů spojují rovné čáry a ty jsou pořádně zamotané. Přesouvejte body tak dlouho, až
se žádné dvě čáry nekříží. Rozplést jde každý hlavolam: počítač postavil graf z rozložení
bez křížení a teprve pak body rozházel po kružnici.

Čáry, které se právě kříží s jinou, se kreslí červeně, takže motanice viditelně ubývá, jak
pracujete; hlavolam je vyřešený, když nezbývá nic červeného. Vyřešit posune každý bod do
rozložení, o kterém počítač ví, že vyjde.

## Ovládání

Zpět vezme zpátky každý tah, i Vyřešit.

### Myš a dotyk

- **Přetáhněte** bod a pusťte ho tam, kde ho chcete mít. Uchopený bod zoranžoví a jeho
  sousedé zmodrají. Když bod pustíte na okraji, sedne si na kraj hrací plochy; když ho
  pustíte úplně mimo plátno, tažení se zruší.
- **Přichytit** (tlačítko s mřížkou vedle Zpět) zapíná a vypíná přichytávací mřížku: puštěné
  body pak přistávají ve středech políček označených slabými tečkami, což je i způsob,
  jakým je rozložené řešení. Dokud je mřížka zapnutá, tlačítko svítí.

### Klávesnice (Keyboard)

- **Šipky** posouvají kurzor od bodu k bodu daným směrem. **Enter** nebo **Mezerník** bod
  zvedne; šipky ho pak nesou (o osminu políčka na stisk, s Shiftem o celé políčko, s Ctrl
  o jediný krok) a **Enter** nebo **Mezerník** ho položí.
- \`G\` je tlačítko **Přichytit**.

## Nastavení

- **Počet bodů**: kolik bodů graf má, aspoň 4. Víc bodů znamená víc čar a horší motanici.
  Hrací plocha s počtem bodů roste, takže je vždycky kam je rozprostřít.
`,Pe=e({$dir:()=>`ltr`,$locale:()=>`cs`,$name:()=>q,default:()=>Fe,games:()=>X,messages:()=>Q,status:()=>Y,touchPhrases:()=>$,tutorials:()=>Z,ui:()=>J}),q=`Čeština`,J=JSON.parse(`{"appName":"Puzzlebox","menu":{"title":"Puzzlebox","tagline":{"one":"{n} ručně kreslený logický hlavolam. Vyberte si a hrajte.","few":"{n} ručně kreslené logické hlavolamy. Vyberte si a hrajte.","many":"{n} ručně kresleného logického hlavolamu. Vyberte si a hrajte.","other":"{n} ručně kreslených logických hlavolamů. Vyberte si a hrajte."},"lockedNote":"Za každý hlavolam, který dokončíte sami, dostanete kredit. Tady kredity utratíte za odemčení nových hlavolamů.","language":"Jazyk","stat":{"credits":{"one":"★ {n} kredit","few":"★ {n} kredity","many":"★ {n} kreditu","other":"★ {n} kreditů"},"unlocked":"Odemčeno: {n} z {total}","solved":"Vyřešeno: {n}","tight":{"credits":"★ {n}","unlocked":"{n}/{total}","solved":"✓ {n}","achievements":"{n}/{total}"},"achievements":"Úspěchy: {n} z {total}"},"hint":{"allOpen":"Všechno je odemčené.","complete":"Odemkli jste celou sbírku!","spend":{"one":"Utraťte kredit a odemkněte si dole nový hlavolam.","few":"Utraťte kredity a odemkněte si dole nové hlavolamy.","many":"Utraťte kredity a odemkněte si dole nové hlavolamy.","other":"Utraťte kredity a odemkněte si dole nové hlavolamy."},"earn":"Dokončete jakýkoli hlavolam sami a získáte kredit."},"card":{"label":"{name}: {description}","labelLocked":"{name}: {description} (zamčeno)","solvedTag":"✓ vyřešeno ×{n}","unlock":"Odemknout · 1 kredit","unlocked":"Odemčeno: {name}!","labelAlias":"{name} (známý také jako {alias}): {description}","labelLockedAlias":"{name} (známý také jako {alias}): {description} (zamčeno)"},"noCredit":"Vyřešte sami jakýkoli hlavolam, získáte kredit – a pak se sem pro tenhle vraťte.","surprise":"Překvapte mě: otevřít náhodný hlavolam","search":{"placeholder":"Hledat hlavolamy","label":"Hledat hlavolamy podle názvu","clear":"Smazat hledání","empty":"Žádný zdejší hlavolam se nejmenuje „{q}“. Zkuste jiný název."},"privacy":{"note":"Puzzlebox sleduje, jak se jeho hlavolamy hrají – nikdy ne, kdo je hraje –, aby je mohl vylepšovat."},"continue":"Pokračovat","continueLabel":"Pokračovat: {name}","spend":"Utratit"},"notFound":{"title":"Takový hlavolam neznáme","body":"Hlavolam „{slug}“ u nás není.","back":"Zpět na všechny hlavolamy"},"locked":"Hlavolam {name} je zatím zamčený. Dokončete nějaký jiný, získáte kredit a pak si ho odemknete.","pageTitle":"{name} · Puzzlebox","topbar":{"back":"Všechny hlavolamy","help":"Nápověda","creditsTitle":"Za kredity se odemykají nové hlavolamy. Jeden dostanete za každý hlavolam, který dokončíte sami.","boardLabel":"Hrací plocha hlavolamu {name}"},"toolbar":{"type":"Typ","custom":"Vlastní…","new":"Nová","newTitle":"Nová hra (N)","restart":"Restart","restartTitle":"Začít tenhle hlavolam znovu","undo":"Zpět","undoTitle":"Zpět (U, Ctrl+Z)","redo":"Znovu","redoTitle":"Znovu (R, Ctrl+Y)","solve":"Vyřešit","solveTitle":"Ukázat řešení (Ctrl+S)","gameId":"Sdílet","gameIdTitle":"Sdílejte tenhle hlavolam, nebo si zahrajte ten, který vám někdo poslal","keypad":"Klávesnice","keypadTitle":"Zobrazit klávesy na obrazovce","zoomOut":"−","zoomOutTitle":"Zmenšit","zoomIn":"+","zoomInTitle":"Zvětšit","tapPlace":"Klepnutí: položit","tapMark":"Klepnutí: označit","tapTitle":"Co dělá obyčejné klepnutí","tapPlaceTitle":"Klepnutí pokládá, dlouhé klepnutí označuje. Klepnutím sem to prohodíte.","tapMarkTitle":"Klepnutí označuje, dlouhé klepnutí pokládá. Klepnutím sem to prohodíte.","hint":"Tip","hintTitle":{"one":"Odhalí jedno políčko a hrajete dál. Kredit dostanete, i když použijete až {n} tip.","few":"Odhalí jedno políčko a hrajete dál. Kredit dostanete, i když použijete až {n} tipy.","many":"Odhalí jedno políčko a hrajete dál. Kredit dostanete, i když použijete až {n} tipu.","other":"Odhalí jedno políčko a hrajete dál. Kredit dostanete, i když použijete až {n} tipů."},"more":"Více","pause":"Pauza","pauseTitle":"Menu pauzy (Esc)"},"pause":{"title":"Pozastaveno","resume":"Pokračovat"},"pager":{"label":"Stránky","prev":"Předchozí stránka","next":"Další stránka","page":"Stránka {n} z {total}"},"badge":{"won":"Vyřešeno!","lost":"Konec hry"},"keypad":{"label":"Klávesnice","clear":"Smazat","clearTitle":"Vymazat vybrané políčko (Backspace)","pencil":"Tužkové poznámky","pencilOnTitle":"Klávesy se zapisují jako tužkové poznámky. Klepnutím se vrátíte k odpovědím.","pencilOffTitle":"Zapněte a další klávesy se zapíšou jako tužkové poznámky"},"drawer":{"title":"Jak se hraje {name}","close":"Zavřít","replay":"▶ Přehrát tutoriál znovu","achievements":"Úspěchy ({n}/{total})"},"dialog":{"ok":"OK","cancel":"Zrušit","customTitle":"{name}: vlastní nastavení","gameIdTitle":"Sdílet tenhle hlavolam","byDescription":"Podle popisu","bySeed":"Podle náhodného semínka","enterLabel":"Zahrát si konkrétní hlavolam: vložte kód","play":"Hrát","copy":"Kopírovat","copied":"Zkopírováno","link":"Odkaz","linkTitle":"Zkopírovat odkaz, který otevře přesně tenhle hlavolam","linkPrompt":"Odkaz na tenhle hlavolam","shareLead":"Pošlete přesně tenhle hlavolam někomu dalšímu.","copyLink":"Kopírovat odkaz","linkCopied":"Odkaz zkopírován","codes":"Kódy hlavolamu","hintAd":{"title":"Ještě jeden tip?","body":{"one":"Vyčerpali jste {n} tip zdarma. S dalším už tenhle hlavolam kredit nepřinese – ledaže si pustíte krátkou reklamu a kredit si necháte.","few":"Vyčerpali jste {n} tipy zdarma. S dalším už tenhle hlavolam kredit nepřinese – ledaže si pustíte krátkou reklamu a kredit si necháte.","many":"Vyčerpali jste {n} tipu zdarma. S dalším už tenhle hlavolam kredit nepřinese – ledaže si pustíte krátkou reklamu a kredit si necháte.","other":"Vyčerpali jste {n} tipů zdarma. S dalším už tenhle hlavolam kredit nepřinese – ledaže si pustíte krátkou reklamu a kredit si necháte."},"watch":"Pustit reklamu a nechat si kredit","anyway":"Přesto si tip vzít"},"badCode":"Tento kód neotevře hlavolam {name}. Zkontrolujte, že je zkopírovaný celý."},"toast":{"creditEarned":"+1 kredit","tutorialComplete":"Tutoriál hotov. Tady je čerstvý hlavolam – dokončete ho sami a získáte kredit.","tutorialCompleteBack":"Tutoriál hotov. Vracíte se ke svému hlavolamu.","tutorialSkipped":"Tutoriál přeskočen. Kdykoli si ho můžete pustit znovu z Nápovědy.","tapModeMark":"Klepnutí označuje. Hlavní akce je na dlouhé klepnutí.","tapModePlace":"Klepnutí dělá hlavní akci. Dlouhé klepnutí označuje.","touchHint":"Klepnutím hrajete, dlouhým klepnutím provedete druhou akci. První kulaté tlačítko obě akce prohodí.","hintNone":"Na hrací ploše už není co odhalit.","hintNoCredit":"Tipů už bylo víc než {n}, takže tenhle hlavolam kredit nepřinese – dohrát ho ale pořád můžete.","hintAdFailed":"Žádná reklama nebyla k dispozici, takže se nic nezměnilo – tip tu na vás pořád čeká.","stuck":"Nevíte kudy kam? Tip odhalí jedno políčko a kredit za hlavolam vám zůstane."},"tutorial":{"label":"Tutoriál: {name}","step":"Krok {n} z {total}","next":"Další","done":"Hotovo","skipStep":"Přeskočit krok","skipTutorial":"Přeskočit tutoriál","nice":"Paráda!","offScript":"Tohle ne: tah byl vrácen, aby kroky dál odpovídaly desce. Zkuste to, o co žádá tento krok.","offScriptRead":"Tah byl vrácen, aby kroky dál odpovídaly desce. Nejdřív si přečtěte tento krok.","pointer":{"drag":"tažení","rightClick":"pravé tlačítko","rightDrag":"tažení pravým","middleClick":"prostřední tlačítko","longPress":"dlouhé klepnutí","longPressDrag":"dlouhé klepnutí a tažení","twoFingerTap":"dvěma prsty"}},"splash":{"tagline":"Ručně kreslené hlavolamy, připravené ke hře","skip":"Přeskočit"},"help":{"keypad":{"heading":"Klávesnice","introTouch":"Klávesy na obrazovce píšou za vás","introPointer":"**Klávesnice** v liště zobrazí klávesy na obrazovce, které píšou za vás","select":": nejdřív vyberte políčko na hrací ploše, pak stiskněte klávesu.","clear":"- **⌫** vybrané políčko zase vyprázdní.","pencil":"- **✎** zapne tužkové poznámky, takže se klávesy zapisují jako malé poznámky místo\\n  odpovědí. Dalším stiskem se vrátíte k odpovědím."}},"stage":{"generating":"Rozdávám nový hlavolam…"},"endgame":{"won":"Hlavolam vyřešen!","lost":"Konec hry","credit":"★ +1 kredit – přesně tolik, kolik stojí odemčení nového hlavolamu.","wonNote":"Pustíte se do dalšího?","forfeitNote":"Tenhle hlavolam kredit nepřinese – řešení se cestou už ukázalo.","lostNote":"Tenhle utekl. Dáte mu ještě šanci?","next":"Další hlavolam","retry":"Zkusit znovu","dismiss":"Zavřít a podívat se na hrací plochu","time":"Čas","moves":"Tahy","hints":"Tip","best":"Nejlepší {time}","newBest":"Nový rekord!","stars":"{n} ze 3 hvězd","stepUp":"Zkus {preset} →"},"achievements":{"title":"Úspěchy","summary":"Získáno: {n} z {total}","unlocked":"Úspěch odemčen","secret":{"name":"Tajný úspěch","description":"Hrajte dál a objevíte ho."},"earnedOn":"Získáno {date}","progress":"{n} z {goal}","collection":"Celá sbírka","tier":{"bronze":"Bronz","silver":"Stříbro","gold":"Zlato"},"meta":{"first-solve":{"name":"První krůčky","description":"Vyřešte svůj první hlavolam vlastní hlavou."},"solves-10":{"name":"Zahřívací kolo","description":"Vyřešte 10 hlavolamů."},"solves-50":{"name":"Hlavolamový zvyk","description":"Vyřešte 50 hlavolamů."},"solves-100":{"name":"Setník","description":"Vyřešte 100 hlavolamů."},"solves-250":{"name":"Velmistr","description":"Vyřešte 250 hlavolamů."},"specialist":{"name":"Specialista","description":"Vyřešte 10 hlavolamů v téže hře."},"variety-3":{"name":"Ochutnávka","description":"Vyřešte hlavolam ve 3 různých hrách."},"variety-10":{"name":"Všestranný","description":"Vyřešte hlavolam v 10 různých hrách."},"variety-all":{"name":"Celá krabice","description":"Vyřešte hlavolam v každé hře ze sbírky."},"unlock-first":{"name":"Nová police","description":"Odemkněte za kredit svou první hru."},"unlock-15":{"name":"Rostoucí sbírka","description":"Mějte odemčených 15 her."},"unlock-25":{"name":"Svazek klíčů","description":"Mějte odemčených 25 her."},"unlock-all":{"name":"Univerzální klíč","description":"Odemkněte všechny hry ve sbírce."},"hardest-1":{"name":"Výzva přijata","description":"Vyřešte hlavolam v nejtěžším nastavení hry."},"hardest-10":{"name":"Dobyvatel vrcholů","description":"Vyřešte nejtěžší nastavení v 10 různých hrách."},"hardest-all":{"name":"Neotřesitelný","description":"Vyřešte nejtěžší nastavení každé hry."},"pure-1":{"name":"Čistý štít","description":"Vyřešte hlavolam bez jediného kroku zpět a bez tipu."},"pure-25":{"name":"Pevná ruka","description":"Vyřešte 25 hlavolamů bez jediného kroku zpět a bez tipu."},"quick-draw":{"name":"Rychlá ruka","description":"Vyřešte hlavolam za 30 sekund nebo rychleji."},"marathon":{"name":"Maratonec","description":"Vyřešte hlavolam, nad kterým jste strávili přes 20 minut."},"comeback":{"name":"Nikdy se nevzdávej","description":"Prohrajte hlavolam, pak se k němu vraťte a vyřešte ho."},"second-thoughts":{"name":"Rozmýšlení","description":"Vraťte tah 100krát a hlavolam přesto vyřešte."},"a-little-help":{"name":"Malá pomoc","description":"Vezměte si tip."},"oops":{"name":"Jejda","description":"Prohrajte hlavolam."},"night-owl":{"name":"Noční sova","description":"Vyřešte hlavolam mezi půlnocí a pátou ranní."},"on-a-roll":{"name":"V ráži","description":"Vyřešte 5 hlavolamů na jeden zátah."},"days-3":{"name":"Stálý host","description":"Hrajte ve 3 různých dnech."},"days-7":{"name":"Oddaný hráč","description":"Hrajte v 7 různých dnech."},"days-30":{"name":"Patří k inventáři","description":"Hrajte ve 30 různých dnech."},"quick-study":{"name":"Rychlé učení","description":"Projděte tutoriál až do konce."},"scholar":{"name":"Učenec","description":"Projděte až do konce 10 různých tutoriálů."},"collector-25":{"name":"Sběratel odznaků","description":"Získejte 25 úspěchů."},"collector-60":{"name":"Vitrína trofejí","description":"Získejte 60 úspěchů."},"legend":{"name":"Legenda hlavolamů","description":"Získejte všechny ostatní úspěchy."}},"andMore":{"one":"Odemčen {n} úspěch","few":"Odemčeny {n} úspěchy","many":"Odemčeno {n} úspěchu","other":"Odemčeno {n} úspěchů"}},"welcome":{"title":"Vyberte si první hlavolam","subtitle":{"one":"{n} hlavolam na začátek. Vyberte si a hrajte.","few":"{n} hlavolamy na začátek. Vyberte si jeden a hrajte.","many":"{n} hlavolamu na začátek. Vyberte si jeden a hrajte.","other":"{n} hlavolamů na začátek. Vyberte si jeden a hrajte."},"more":{"one":"…a {n} další k odemčení","few":"…a {n} další k odemčení","many":"…a {n} dalšího k odemčení","other":"…a {n} dalších k odemčení"},"how":"Každý vyřešený hlavolam vám dá kredit a každý kredit odemkne novou hru."},"gamepad":{"connected":"Ovladač připojen"},"settings":{"title":"Nastavení","done":"Hotovo","sound":"Zvuk","volume":"Hlasitost","reduceMotion":"Omezit pohyb","vibration":"Vibrace","statistics":"Statistiky hraní","on":"Zap.","off":"Vyp.","portalMuted":"Web má zvuk vypnutý."}}`),Y={moves:{one:`{n} tah`,few:`{n} tahy`,many:`{n} tahu`,other:`{n} tahů`},movesCompleted:{one:`Dokončeno na {n} tah`,few:`Dokončeno na {n} tahy`,many:`Dokončeno na {n} tahu`,other:`Dokončeno na {n} tahů`},movesSinceSolve:`Tahů od automatického vyřešení: {n}`,completedMoves:`Dokončeno! Tahů: {n}`,solvedByComputer:`Vyřešeno počítačem`,completed:`Dokončeno!`,completedPrefix:`Dokončeno! `,autoSolved:`Vyřešeno automaticky.`,autoSolvedPrefix:`Vyřešeno automaticky. `,autoSolverUsedPrefix:`Použit automatický řešitel. `,failedPrefix:`Došly tahy. `,dead:`Šlápli jste na minu.`,target:` (cíl {n})`},X=JSON.parse(`{"blackbox":{"name":"Černá skříňka","description":"Najděte skryté koule: střílejte do skříňky lasery a sledujte, kudy paprsky vyjdou ven.","preset":{"5x5_3_balls":"5×5, 3 koule","8x8_5_balls":"8×8, 5 koulí","8x8_3_6_balls":"8×8, 3-6 koulí","10x10_5_balls":"10×10, 5 koulí","10x10_4_10_balls":"10×10, 4-10 koulí"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"no_of_balls":{"name":"Počet koulí"}},"status":{"correct":"SPRÁVNĚ!","wrong":{"one":"{wrong} špatně a {n} přehlédnutá koule.","few":"{wrong} špatně a {n} přehlédnuté koule.","many":"{wrong} špatně a {n} přehlédnuté koule.","other":"{wrong} špatně a {n} přehlédnutých koulí."},"marked":"Označeno koulí: {n} / {range}  ·  Vystřeleno laserů: {fired}","tooMany":"  ·  Označených koulí je o {n} víc.","check":"  ·  Zkontrolujte tlačítkem v rohu."},"achievement":{"sparing_shots":{"name":"Šetrná střelba","description":"Najděte všechny koule a střílejte lasery nanejvýš z poloviny portů."},"pinpoint":{"name":"Přesně na cíl","description":"Najděte všechny koule ve skříňce 8×8 nebo větší a vystřelte nanejvýš tři lasery na každou kouli."},"shot_in_the_dark":{"name":"Rána naslepo","description":"Nechte zkontrolovat své koule, aniž byste vystřelili jediný laser, a netrefte se."}}},"bridges":{"name":"Mosty","alsoKnownAs":"Hashiwokakero, Hashi","description":"Pospojujte ostrovy mosty tak, aby každé číslo sedělo a nic se nekřížilo.","preset":{"7x7_easy":"7×7 Snadná","7x7_medium":"7×7 Střední","7x7_hard":"7×7 Těžká","10x10_easy":"10×10 Snadná","10x10_medium":"10×10 Střední","10x10_hard":"10×10 Těžká","15x15_easy":"15×15 Snadná","15x15_medium":"15×15 Střední","15x15_hard":"15×15 Těžká","10x10_medium_no_loops":"10×10 Střední, bez smyček"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"difficulty":{"name":"Obtížnost","choice":{"easy":"Snadná","medium":"Střední","hard":"Těžká"}},"allow_loops":{"name":"Povolit smyčky"},"max_bridges_per_direction":{"name":"Max. mostů jedním směrem","choice":{"1":"1","2":"2","3":"3","4":"4"}},"of_island_squares":{"name":"% políček s ostrovy","choice":{"5":"5%","10":"10%","15":"15%","20":"20%","25":"25%","30":"30%"}},"expansion_factor":{"name":"Faktor rozšíření (%)","choice":{"0":"0%","10":"10%","20":"20%","30":"30%","40":"40%","50":"50%","60":"60%","70":"70%","80":"80%","90":"90%","100":"100%"}}},"action":{"g":{"label":"Pomocné čáry","title":"Zobrazí nebo skryje slabou čáru všude, kudy by mohl vést most (G)"},"e":{"label":"Guma","title":"Tažením od ostrova odeberete jeho mosty tím směrem (E)"}},"achievement":{"no_markers":{"name":"Čisté vody","description":"Vyřešte hlavolam 10×10 nebo větší bez jediné značky „tudy most nevede“."},"sure_footing":{"name":"Pevná půda pod nohama","description":"Vyřešte Těžký hlavolam 10×10 nebo větší, aniž byste odstranili most nebo použili Zpět."}}},"cube":{"name":"Kostka","description":"Kutálejte těleso po mřížce a posbírejte na jeho stěny všechna modrá políčka.","preset":{"cube":"Krychle","tetrahedron":"Čtyřstěn","octahedron":"Osmistěn","icosahedron":"Dvacetistěn"},"config":{"type_of_solid":{"name":"Druh tělesa","choice":{"tetrahedron":"Čtyřstěn","cube":"Krychle","octahedron":"Osmistěn","icosahedron":"Dvacetistěn"}},"width_top":{"name":"Šířka / horní hrana"},"height_bottom":{"name":"Výška / dolní hrana"}},"achievement":{"short_haul":{"name":"Krátká trasa","description":"Dokončete Krychli se všemi stěnami modrými nanejvýš na dvacet převalení."},"octahedron_ace":{"name":"Osm stěn v cuku letu","description":"Dokončete Osmistěn se všemi stěnami modrými nanejvýš na třicet převalení."},"scenic_route":{"name":"Velká okružní cesta","description":"Převalte těleso aspoň dvěstěkrát, než budou všechny stěny modré."}}},"dominosa":{"name":"Dominosa","description":"Najděte, kde v mřížce čísel leží zamíchané kostky domina.","preset":{"up_to_double_3":"Až po dvojitou 3","up_to_double_4":"Až po dvojitou 4","up_to_double_5":"Až po dvojitou 5","up_to_double_6":"Až po dvojitou 6","up_to_double_7":"Až po dvojitou 7","up_to_double_8":"Až po dvojitou 8","up_to_double_9":"Až po dvojitou 9"},"config":{"maximum_number_on_dominoes":{"name":"Nejvyšší číslo na kostkách"},"difficulty":{"name":"Obtížnost","choice":{"very_easy":"Velmi snadná","easy":"Snadná","hard":"Těžká","extreme":"Extrémní","ambiguous":"Nejednoznačná"}}},"achievement":{"no_lines":{"name":"Bez tužky","description":"Vyřešte sadu po dvojitou 6 nebo větší, aniž byste načrtli jedinou čáru."},"one_click_each":{"name":"Jedno kliknutí na kostku","description":"Vyřešte sadu po dvojitou 6 nebo větší jedním kliknutím na každou kostku a bez Zpět."},"doubles_first":{"name":"Dvojité napřed","description":"Položte všechny dvojité kostky ze sady dřív než jakoukoli jinou."}}},"fifteen":{"name":"Patnáctka","description":"Posouvejte dlaždice tak dlouho, až budou seřazené.","preset":{"3x3":"3×3","4x4":"4×4","5x5":"5×5"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"}},"alsoKnownAs":"Posuvný hlavolam, 15 puzzle","achievement":{"short_shuffle":{"name":"Krátké přeskládání","description":"Srovnejte 4×4 na 100 tahů nebo méně."},"five_flyer":{"name":"Bleskurychlá pětka","description":"Srovnejte 5×5 za méně než tři minuty."},"scenic_route":{"name":"Oklikou","description":"Srovnejte 3×3 na víc než 300 tahů."}}},"filling":{"name":"Výplň","alsoKnownAs":"Fillomino","description":"Vyplňte mřížku tak, aby každá skupina stejných číslic měla přesně tolik políček.","preset":{"9x7":"9×7","13x9":"13×9","17x13":"17×13"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"}},"achievement":{"in_ink":{"name":"Psáno inkoustem","description":"Vyřešte Výplň, aniž byste změnili nebo smazali jedinou číslici, a bez Zpět."},"one_stroke":{"name":"Každá naráz","description":"Vyřešte Výplň 13×9 nebo větší a každou skupinu číslic napište jediným tahem."}},"action":{"f":{"label":"Vyplnit","title":"Tažením z číslice ji zapíšete do každého políčka, přes které vedete (F)"}}},"flip":{"name":"Překlápění","alsoKnownAs":"Lights Out","description":"Rozsviťte všechna políčka; každý stisk překlopí i políčka kolem něj.","preset":{"3x3_crosses":"3×3 Kříže","4x4_crosses":"4×4 Kříže","5x5_crosses":"5×5 Kříže","3x3_random":"3×3 Náhodné","4x4_random":"4×4 Náhodné","5x5_random":"5×5 Náhodné"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"shape_type":{"name":"Druh tvarů","choice":{"crosses":"Kříže","random":"Náhodné"}}},"achievement":{"press_once":{"name":"Jen jednou","description":"Rozsviťte plochu 4×4 nebo větší, aniž byste kterékoli políčko stiskli dvakrát."},"fewest_presses":{"name":"Nejmenší námaha","description":"Rozsviťte plochu 5×5 nejmenším možným počtem stisknutí."}}},"flood":{"name":"Záplava","alsoKnownAs":"Flood It","description":"Zaplavujte mřížku z rohu, dokud nebude celá jednobarevná – a vejděte se do limitu tahů.","preset":{"12x12_easy":"12×12 Snadná","12x12_medium":"12×12 Střední","12x12_hard":"12×12 Těžká","16x16_medium":"16×16 Střední","16x16_hard":"16×16 Těžká","12x12_3_colours":"12×12, 3 barvy","12x12_4_colours":"12×12, 4 barvy"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"colours":{"name":"Barvy"},"extra_moves_permitted":{"name":"Tahy navíc"}},"status":{"moves":"{n} / {limit} tahů"},"achievement":{"spare_moves":{"name":"Tahy v záloze","description":"Zaplavte mřížku a nechte si aspoň tři tahy navíc."},"beat_the_solver":{"name":"Lepší než stroj","description":"Zaplavte mřížku na méně tahů, než potřebuje řešení počítače."},"one_colour_short":{"name":"O barvu vedle","description":"Dojdou vám tahy, když na mřížce zbývají jen dvě barvy."}}},"galaxies":{"name":"Galaxie","alsoKnownAs":"Spiral Galaxies, Tentai Show","description":"Rozdělte mřížku na oblasti; každá musí být souměrná podle své jediné tečky.","preset":{"7x7_medium":"7×7 Střední","7x7_extreme":"7×7 Extrémní","10x10_medium":"10×10 Střední","15x15_medium":"15×15 Střední"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"difficulty":{"name":"Obtížnost","choice":{"medium":"Střední","extreme":"Extrémní"}}},"achievement":{"no_arrows":{"name":"Bez ukazatelů","description":"Vyřešte Galaxie 10×10 nebo větší, aniž byste vytáhli jedinou šipku."},"steady_hand":{"name":"Stálice","description":"Vyřešte Galaxie 10×10 nebo větší, aniž byste odstranili stěnu nebo použili Zpět."}}},"guess":{"name":"Uhodni","alsoKnownAs":"Logik, Mastermind","description":"Podle značek u svých pokusů odhalte skrytou řadu barevných kolíků.","preset":{"standard":"Standardní","super":"Super"},"config":{"colours":{"name":"Barvy"},"pegs_per_guess":{"name":"Kolíků na pokus"},"guesses":{"name":"Počet pokusů"},"allow_blanks":{"name":"Povolit prázdná místa"},"allow_duplicates":{"name":"Povolit opakování barev"}},"action":{"l":{"label":"Písmena","title":"Označí kolíky písmeny (L)"},"k":{"label":"Přidržet","title":"Kliknutím na kolík ve své řadě ho přenesete do dalšího pokusu (K)"}},"status":{"revealed":"Řešení odhaleno","solved":{"one":"Vyřešeno na {n} pokus","few":"Vyřešeno na {n} pokusy","many":"Vyřešeno na {n} pokusu","other":"Vyřešeno na {n} pokusů"},"outOfGuesses":"Došly pokusy: řešení je odhaleno","guessN":"Pokus {n} z {total}"},"achievement":{"five_guesses":{"name":"Luštitel kódů","description":"Najděte skrytou řadu na pět pokusů nebo méně."},"super_sleuth":{"name":"Superdetektiv","description":"Najděte skrytou řadu pěti kolíků ve hře Super na šest pokusů nebo méně."},"so_near":{"name":"Tak blízko","description":"Vyčerpejte pokusy, když jsou na správném místě všechny kolíky až na jeden."}}},"inertia":{"name":"Setrvačnost","description":"Rozjíždějte kuličku po mřížce, posbírejte všechny drahokamy a nenarazte na minu.","preset":{"10x8":"10×8","15x12":"15×12","20x16":"20×16"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"}},"status":{"gems":"Drahokamy: {n}","deaths":" · Úmrtí: {n}"},"achievement":{"hat_trick":{"name":"Hattrick","description":"Seberte tři nebo více drahokamů jediným kutálením koule."},"shortcut":{"name":"Zkratka","description":"Seberte všechny drahokamy na ploše 15×12 nebo větší na méně kutálení, než by potřebovalo Vyřešit."},"last_gem_mine":{"name":"Pyrrhovo vítězství","description":"Najeďte na minu tímtéž kutálením, kterým seberete úplně poslední drahokam."}}},"keen":{"name":"Keen","alsoKnownAs":"KenKen, Calcudoku","description":"Vyplňte latinský čtverec tak, aby každá klec vyšla podle svého početního vodítka.","preset":{"4x4_easy":"4×4 Snadná","5x5_easy":"5×5 Snadná","5x5_easy_x_only":"5×5 Snadná, jen ×","6x6_easy":"6×6 Snadná","6x6_medium":"6×6 Střední","6x6_medium_x_only":"6×6 Střední, jen ×","6x6_hard":"6×6 Těžká","6x6_expert":"6×6 Expertní","6x6_extreme":"6×6 Extrémní","9x9_medium":"9×9 Střední"},"config":{"grid_size":{"name":"Velikost mřížky"},"difficulty":{"name":"Obtížnost","choice":{"easy":"Snadná","medium":"Střední","hard":"Těžká","expert":"Expertní","extreme":"Extrémní"}},"multiplication_only":{"name":"Jen násobení"}},"action":{"m":{"label":"Poznámky","title":"Vepíše do každého prázdného políčka všechny možnosti (M)"},"l":{"label":"Zvýraznit","title":"Vyznačí každé políčko s číslicí, na kterou jste sáhli naposledy (L)"}},"achievement":{"no_pencil":{"name":"Počty z hlavy","description":"Vyřešte Keen 6×6 nebo větší bez jediné tužkové poznámky."},"products_only":{"name":"Čistý součin","description":"Vyřešte Keen 6×6 Střední jen s násobením."}}},"lightup":{"name":"Rozsviť","alsoKnownAs":"Akari","description":"Rozmístěte žárovky tak, aby svítilo každé políčko a žádná žárovka nesvítila na jinou.","preset":{"7x7_easy":"7×7 Snadná","7x7_medium":"7×7 Střední","7x7_hard":"7×7 Těžká","10x10_easy":"10×10 Snadná","10x10_medium":"10×10 Střední","10x10_hard":"10×10 Těžká","14x14_easy":"14×14 Snadná","14x14_medium":"14×14 Střední","14x14_hard":"14×14 Těžká"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"of_black_squares":{"name":"% černých políček"},"symmetry":{"name":"Symetrie","choice":{"none":"Žádná","2_way_mirror":"2násobné zrcadlení","2_way_rotational":"2násobná rotace","4_way_mirror":"4násobné zrcadlení","4_way_rotational":"4násobná rotace"}},"difficulty":{"name":"Obtížnost","choice":{"easy":"Snadná","medium":"Střední","hard":"Těžká"}}},"achievement":{"no_crosses":{"name":"Jen světla","description":"Vyřešte Rozsviť 10×10 nebo větší bez jediného křížku."},"no_takebacks":{"name":"Světlý nápad","description":"Vyřešte Těžkou Rozsviť, aniž byste kdy odebrali žárovku."}},"action":{"x":{"label":"Křížek","title":"Kliknutí kladou křížky místo žárovek (X)"}}},"loopy":{"name":"Smyčka","alsoKnownAs":"Slitherlink","description":"Nakreslete jednu uzavřenou smyčku tak, aby u každého čísla sedělo, kolik čar ho obepíná.","preset":{"7x7_squares_easy":"7×7 Čtverce Snadná","10x10_squares_easy":"10×10 Čtverce Snadná","7x7_squares_medium":"7×7 Čtverce Střední","10x10_squares_medium":"10×10 Čtverce Střední","7x7_squares_expert":"7×7 Čtverce Expertní","10x10_squares_expert":"10×10 Čtverce Expertní","10x10_triangular_expert":"10×10 Trojúhelníky Expertní","12x10_honeycomb_expert":"12×10 Plástev Expertní","7x7_snub_square_expert":"7×7 Kosý čtverec Expertní","9x9_cairo_expert":"9×9 Cairo Expertní","5x4_great_hexagonal_expert":"5×4 Velký šestiúhelník Expertní","7x7_octagonal_expert":"7×7 Osmiúhelníky Expertní","5x5_kites_expert":"5×5 Draci Expertní","5x5_floret_expert":"5×5 Květ Expertní","5x4_dodecagonal_expert":"5×4 Dvanáctiúhelníky Expertní","5x4_great_dodecagonal_expert":"5×4 Velký dvanáctiúhelník Expertní","10x10_penrose_kite_dart_expert":"10×10 Penrose (drak/šipka) Expertní","10x10_penrose_rhombs_expert":"10×10 Penrose (kosočtverce) Expertní"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"grid_type":{"name":"Typ mřížky","choice":{"squares":"Čtverce","triangular":"Trojúhelníky","honeycomb":"Plástev","snub_square":"Kosý čtverec","cairo":"Cairo","great_hexagonal":"Velký šestiúhelník","octagonal":"Osmiúhelníky","kites":"Draci","floret":"Květ","dodecagonal":"Dvanáctiúhelníky","great_dodecagonal":"Velký dvanáctiúhelník","penrose_kite_dart":"Penrose (drak/šipka)","penrose_rhombs":"Penrose (kosočtverce)"}},"difficulty":{"name":"Obtížnost","choice":{"easy":"Snadná","medium":"Střední","hard":"Těžká","expert":"Expertní"}}},"achievement":{"off_grid":{"name":"Mimo čtverce","description":"Vyřešte Smyčku na jiném dláždění než čtvercovém."},"no_crosses":{"name":"Jen smyčka","description":"Vyřešte Smyčku 10×10, aniž byste odškrtli jedinou hranu."},"aperiodic":{"name":"Neperiodický","description":"Vyřešte Smyčku Penrose, aniž byste kdy smazali čáru, kterou jste nakreslili."}},"action":{"x":{"label":"Škrtat","title":"Kliknutí hrany škrtají místo kreslení čar (X)"}}},"magnets":{"name":"Magnety","description":"Rozmístěte do domin magnety a neutrální kusy tak, aby počty pólů seděly.","preset":{"6x5_easy":"6×5 Snadná","6x5_hard":"6×5 Těžká","6x5_hard_strip_clues":"6×5 Těžká, jen nutná vodítka","8x7_easy":"8×7 Snadná","8x7_hard":"8×7 Těžká","8x7_hard_strip_clues":"8×7 Těžká, jen nutná vodítka","10x9_hard":"10×9 Těžká","10x9_hard_strip_clues":"10×9 Těžká, jen nutná vodítka"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"difficulty":{"name":"Obtížnost","choice":{"easy":"Snadná","hard":"Těžká"}},"strip_clues":{"name":"Jen nutná vodítka"}},"achievement":{"no_flips":{"name":"Správně natočeno","description":"Vyřešte Magnety 8×7 nebo větší, aniž byste kdy magnet otočili."},"stripped":{"name":"Holé dráty","description":"Vyřešte Těžké Magnety 10×9 jen s nutnými vodítky za méně než deset minut."}},"action":{"b":{"label":"Neutrální","title":"Kliknutí označují domina jako neutrální místo kladení magnetů (B)"}}},"map":{"name":"Mapa","description":"Obarvěte mapu čtyřmi barvami tak, aby žádné dvě sousední oblasti nebyly stejné.","preset":{"20x15_easy_30_regions":"20×15 Snadná, 30 oblastí","20x15_medium_30_regions":"20×15 Střední, 30 oblastí","20x15_hard_30_regions":"20×15 Těžká, 30 oblastí","20x15_extreme_30_regions":"20×15 Extrémní, 30 oblastí","30x25_medium_75_regions":"30×25 Střední, 75 oblastí","30x25_hard_75_regions":"30×25 Těžká, 75 oblastí"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"regions":{"name":"Oblasti"},"difficulty":{"name":"Obtížnost","choice":{"easy":"Snadná","medium":"Střední","hard":"Těžká","extreme":"Extrémní"}}},"achievement":{"no_dots":{"name":"Atlas od ruky","description":"Vyřešte Mapu Těžkou nebo těžší bez jediné tužkové tečky."},"steady_brush":{"name":"Jistý štětec","description":"Vyřešte Extrémní Mapu, aniž byste kdy změnili barvu oblasti."}},"action":{"l":{"label":"Čísla","title":"Ukáže v každé oblasti číslo (L)"}}},"mines":{"name":"Miny","alsoKnownAs":"Hledání min, Minesweeper","description":"Odkryjte všechna políčka bez miny; hádat nikdy nemusíte.","preset":{"9x9_beginner_10_mines":"9×9 Začátečník, 10 min","9x9_35_mines":"9×9, 35 min","16x16_intermediate_40_mines":"16×16 Pokročilý, 40 min","16x16_99_mines":"16×16, 99 min","30x16_expert_99_mines":"30×16 Expert, 99 min","30x16_170_mines":"30×16, 170 min"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"mines":{"name":"Miny"},"ensure_solubility":{"name":"Zaručit řešitelnost"}},"status":{"marked":"Označeno: {n} / {total}","deaths":" · Úmrtí: {n}"},"achievement":{"no_flags":{"name":"Bez vlajek","description":"Vyhrajte hru Miny, aniž byste položili jedinou vlajku."},"expert_sweep":{"name":"Pyrotechnik","description":"Vyhrajte plochu 30×16 Expert za méně než pět minut."},"so_close":{"name":"Tak těsně","description":"Šlápněte na minu, když zbývají odkrýt nanejvýš tři bezpečná políčka."}}},"net":{"name":"Síť","alsoKnownAs":"NetWalk","description":"Otáčejte dlaždicemi, dokud nebude každá připojená ke středu.","preset":{"5x5":"5×5","7x7":"7×7","9x9":"9×9","11x11":"11×11","13x11":"13×11","5x5_wrapping":"5×5 přes okraje","7x7_wrapping":"7×7 přes okraje","9x9_wrapping":"9×9 přes okraje","11x11_wrapping":"11×11 přes okraje","13x11_wrapping":"13×11 přes okraje"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"walls_wrap_around":{"name":"Přechod přes okraje"},"barrier_probability":{"name":"Pravděpodobnost bariér"},"ensure_unique_solution":{"name":"Zaručit jediné řešení"}},"action":{"j":{"label":"Zamíchat","title":"Náhodně otočí všechny nezamčené dlaždice (J)"},"scroll_left":{"label":"←","title":"Posune pohled doleva (Shift+←)"},"scroll_up":{"label":"↑","title":"Posune pohled nahoru (Shift+↑)"},"scroll_down":{"label":"↓","title":"Posune pohled dolů (Shift+↓)"},"scroll_right":{"label":"→","title":"Posune pohled doprava (Shift+→)"},"k":{"label":"Zamknout","title":"Kliknutí dlaždice zamykají a odemykají místo otáčení (K)"}},"status":{"active":"Aktivní: {n}/{total}"},"achievement":{"no_locks":{"name":"Nic pod zámkem","description":"Vyřešte Síť 9×9 nebo větší, aniž byste zamkli jedinou dlaždici."},"not_a_turn_wasted":{"name":"Ani otočka navíc","description":"Vyřešte Síť 9×9 nebo větší, aniž byste kteroukoli dlaždici otočili víckrát, než je třeba."},"jumbled":{"name":"Pořádně zamícháno","description":"Stiskněte Zamíchat a hlavolam přesto vyřešte."}}},"netslide":{"name":"Posuvná síť","description":"Posouvejte řádky a sloupce dílků sítě, dokud nebude vše propojené.","preset":{"3x3_easy":"3×3 snadná","3x3_medium":"3×3 střední","3x3_hard":"3×3 těžká","4x4_easy":"4×4 snadná","4x4_medium":"4×4 střední","4x4_hard":"4×4 těžká","5x5_easy":"5×5 snadná","5x5_medium":"5×5 střední","5x5_hard":"5×5 těžká"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"walls_wrap_around":{"name":"Přechod přes okraje"},"barrier_probability":{"name":"Pravděpodobnost bariér"},"number_of_shuffling_moves":{"name":"Počet míchacích tahů"}},"status":{"active":" · Aktivní: {n}/{total}"},"achievement":{"tidy_four":{"name":"Úhledné přepojení","description":"Vyřešte Posuvnou síť 4×4 na 18 posunů nebo méně."},"lean_five":{"name":"Montér vedení","description":"Vyřešte Posuvnou síť 5×5 na 32 posunů nebo méně."},"big_switch":{"name":"Velký vypínač","description":"Rozsviťte celou síť jedním posunem, když svítila méně než polovina."}}},"pattern":{"name":"Vzor","alsoKnownAs":"Nonogram, malovaná křížovka, Picross","description":"Vyplňte mřížku podle délek úseků zadaných u každého řádku a sloupce.","preset":{"10x10":"10×10","15x15":"15×15","20x20":"20×20","25x25":"25×25","30x30":"30×30"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"}},"achievement":{"no_dots":{"name":"Ani tečka","description":"Vyřešte Vzor 15×15 nebo větší bez jediné tečky."},"inked_in":{"name":"Vytaženo tuší","description":"Vyřešte Vzor 20×20 nebo větší, aniž byste kdy smazali černé políčko."}},"action":{"e":{"label":"Guma","title":"Kliknutím nebo tažením vrátíte políčka na neznámé (E)"}}},"pearl":{"name":"Perly","alsoKnownAs":"Masyu","description":"Nakreslete jedinou uzavřenou smyčku, která bílými perlami projde rovně a u černých zahne.","preset":{"6x6_easy":"6×6 Snadná","6x6_tricky":"6×6 Záludná","8x8_easy":"8×8 Snadná","8x8_tricky":"8×8 Záludná","10x10_easy":"10×10 Snadná","10x10_tricky":"10×10 Záludná","12x8_easy":"12×8 Snadná","12x8_tricky":"12×8 Záludná"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"difficulty":{"name":"Obtížnost","choice":{"easy":"Snadná","tricky":"Záludná"}},"allow_unsoluble":{"name":"Povolit neřešitelné"}},"achievement":{"no_crosses":{"name":"Šňůra perel","description":"Vyřešte Perly 10×10 bez jediného křížku."},"one_stroke":{"name":"Jedním tahem","description":"Nakreslete celou smyčku Perel 8×8 nebo větších jediným tažením."}},"action":{"x":{"label":"Křížek","title":"Kliknutím nebo tažením škrtnete hrany, kudy smyčka vést nemůže (X)"}}},"pegs":{"name":"Kolíky","alsoKnownAs":"Solitér, peg solitaire","description":"Přeskakujte kolíky jeden přes druhý, dokud nezůstane jediný.","preset":{"cross":"Kříž","octagon":"Osmiúhelník","random_5x5":"Náhodná 5×5","random_7x7":"Náhodná 7×7","random_9x9":"Náhodná 9×9"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"board_type":{"name":"Typ hrací plochy","choice":{"cross":"Kříž","octagon":"Osmiúhelník","random":"Náhodná"}}},"status":{"stuck":"Žádné další tahy – zbývá kolíků: {n}","playing":"Zbývá kolíků: {n}  ·  Tahů: {moves}"},"achievement":{"dead_centre":{"name":"Přesně doprostřed","description":"Dokončete plochu Kříž s posledním kolíkem v prostřední dírce."},"hopscotch":{"name":"Skákací panák","description":"Vyhrajte hru Kolíky, v níž jeden kolík skočí čtyřikrát za sebou."},"pegged_out":{"name":"Zakolíkováno","description":"Uvízněte s deseti nebo více kolíky na ploše."}}},"range":{"name":"Dohled","alsoKnownAs":"Kurodoko, Kuromasu","description":"Začerněte políčka tak, aby každé číslo vidělo ve svém řádku a sloupci přesně tolik bílých políček.","preset":{"9x6":"9×6","12x8":"12×8","13x9":"13×9","16x11":"16×11"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"}},"achievement":{"no_dots":{"name":"Čistý kontrast","description":"Vyřešte Dohled 13×9 nebo větší bez jediné tečky."},"quick_sight":{"name":"Bystré oko","description":"Vyřešte Dohled 16×11 za méně než pět minut."}},"action":{"e":{"label":"Guma","title":"Kliknutím nebo tažením vyčistíte černá políčka a tečky (E)"}}},"rect":{"name":"Obdélníky","alsoKnownAs":"Shikaku","description":"Rozdělte mřížku na obdélníky tak, aby v každém bylo jediné číslo rovné jeho obsahu.","preset":{"7x7":"7×7","9x9":"9×9","11x11":"11×11","13x13":"13×13","15x15":"15×15","17x17":"17×17","19x19":"19×19"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"expansion_factor":{"name":"Faktor roztažení"},"ensure_unique_solution":{"name":"Zaručit jediné řešení"}},"status":{"drag":"{w}×{h} "},"achievement":{"clean_cuts":{"name":"Čisté řezy","description":"Vyřešte Obdélníky 11×11 nebo větší na nejvýš tolik tahů, kolik mají čísel."},"quick_carver":{"name":"Rychlý řezbář","description":"Vyřešte Obdélníky 19×19 za méně než deset minut."}},"action":{"e":{"label":"Guma","title":"Tažením přes oblast vymažete čáry uvnitř, kliknutím na čáru ji odeberete (E)"}}},"samegame":{"name":"Samegame","alsoKnownAs":"Clickomania","description":"Vyprázdněte hrací plochu odebíráním skupin sousedících políček stejné barvy.","preset":{"5x5_3_colours":"5×5, 3 barvy","10x5_3_colours":"10×5, 3 barvy","15x10_3_colours":"15×10, 3 barvy","15x10_4_colours":"15×10, 4 barvy","20x15_4_colours":"20×15, 4 barvy"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"no_of_colours":{"name":"Počet barev"},"scoring_system":{"name":"Bodování","choice":{"n_1_2":"(n-1)^2","n_2_2":"(n-2)^2"}},"ensure_solubility":{"name":"Zaručit řešitelnost"}},"status":{"score":"Skóre: {n}","complete":"Plocha vyčištěna! {score}","stuck":"Už není kam táhnout. {score}","selected":"{score} · Vybráno: {n} (+{points})"},"achievement":{"avalanche":{"name":"Lavina","description":"Odstraňte naráz skupinu 25 nebo více políček a pak vyčistěte plochu."},"no_pairs":{"name":"Dvojice zakázány","description":"Vyčistěte plochu 15×10 nebo větší, aniž byste kdy odstranili dvojici."},"last_one":{"name":"Poslední políčko","description":"Uvízněte s jediným políčkem na ploše."}}},"signpost":{"name":"Rozcestník","description":"Spojte políčka do jediné číslované cesty, kde každý krok vede po šipce.","preset":{"4x4":"4×4","4x4_free_ends":"4×4, volné konce","5x5":"5×5","5x5_free_ends":"5×5, volné konce","6x6":"6×6","7x7":"7×7"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"start_and_end_in_corners":{"name":"Začátek a konec v rozích"}},"achievement":{"unbroken":{"name":"Nepřetržitý řetěz","description":"Vyřešte Rozcestník, aniž byste kdy odstranili nebo nahradili spojení."},"in_order":{"name":"Rovnou za nosem","description":"Vyřešte Rozcestník 6×6 nebo větší a spojujte cestu popořadě, od 1 až k hvězdě."},"star_first":{"name":"Přání pod hvězdou","description":"Udělejte své úplně první spojení do hvězdy a pak hlavolam vyřešte."}},"action":{"b":{"label":"Rozpojit","title":"Kliknutím na políčko rozpojíte celý jeho řetěz (B)"}}},"singles":{"name":"Jedináčci","alsoKnownAs":"Hitori","description":"Začerněte políčka tak, aby se v řádku ani sloupci neopakovalo žádné číslo a mřížka zůstala vcelku.","preset":{"5x5_easy":"5×5 Snadná","5x5_tricky":"5×5 Záludná","6x6_easy":"6×6 Snadná","6x6_tricky":"6×6 Záludná","8x8_easy":"8×8 Snadná","8x8_tricky":"8×8 Záludná","10x10_easy":"10×10 Snadná","10x10_tricky":"10×10 Záludná","12x12_easy":"12×12 Snadná","12x12_tricky":"12×12 Záludná"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"difficulty":{"name":"Obtížnost","choice":{"easy":"Snadná","tricky":"Záludná"}}},"achievement":{"no_circles":{"name":"Bez kroužků","description":"Vyřešte Jedináčky 8×8 nebo větší, aniž byste zakroužkovali jediné číslo."},"sure_hand":{"name":"Jistá ruka","description":"Vyřešte Jedináčky 10×10 nebo větší, aniž byste obnovili začerněné políčko."}}},"sixteen":{"name":"Šestnáctka","description":"Posouvejte celé řádky a sloupce dokola, dokud nebudou dlaždice v pořadí.","preset":{"3x3":"3×3","4x3":"4×3","4x4":"4×4","5x4":"5×4","5x5":"5×5"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"number_of_shuffling_moves":{"name":"Počet míchacích tahů"}},"achievement":{"lean_slides":{"name":"Úsporný posun","description":"Srovnejte 4×4 na 100 posunů nebo méně."},"five_in_200":{"name":"Velký třídič","description":"Srovnejte 5×5 na 200 posunů nebo méně."},"round_the_doughnut":{"name":"Kolem dokola","description":"Posouvejte jednu řadu celou dokola, až bude zase tam, kde začala."}}},"slant":{"name":"Šikmo","alsoKnownAs":"Gokigen Naname","description":"Nakreslete v každém políčku úhlopříčku tak, aby seděla čísla a nevznikla žádná smyčka.","preset":{"5x5_easy":"5×5 Snadná","5x5_hard":"5×5 Těžká","8x8_easy":"8×8 Snadná","8x8_hard":"8×8 Těžká","12x10_easy":"12×10 Snadná","12x10_hard":"12×10 Těžká"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"difficulty":{"name":"Obtížnost","choice":{"easy":"Snadná","hard":"Těžká"}}},"achievement":{"no_loops":{"name":"Bez smyček","description":"Vyřešte Šikmo 8×8 nebo větší, aniž byste kdy uzavřeli smyčku."},"steady_hand":{"name":"Bez váhání","description":"Vyřešte Šikmo 12×10, aniž byste se vraceli ke změně čáry."}}},"solo":{"name":"Solo","alsoKnownAs":"Sudoku","description":"Vyplňte mřížku tak, aby každý řádek, sloupec i blok obsahoval každou číslici právě jednou.","preset":{"4x4_very_easy":"4×4 Velmi snadná","6x6_easy":"6×6 Snadná","9x9_very_easy":"9×9 Velmi snadná","9x9_easy":"9×9 Snadná","9x9_x_diagonal_easy":"9×9 Snadná X","9x9_medium":"9×9 Střední","9x9_hard":"9×9 Těžká","9x9_x_diagonal_hard":"9×9 Těžká X","9x9_expert":"9×9 Expertní","9x9_extreme":"9×9 Extrémní","9x9_killer":"9×9 Killer","9x9_jigsaw_easy":"9×9 Jigsaw Snadná","9x9_jigsaw_x_diagonal_easy":"9×9 Jigsaw Snadná X","9x9_jigsaw_hard":"9×9 Jigsaw Těžká","12x12_easy":"12×12 Snadná","16x16_easy":"16×16 Snadná"},"config":{"columns_of_sub_blocks":{"name":"Sloupce podbloků"},"rows_of_sub_blocks":{"name":"Řádky podbloků"},"x_require_every_number_in_each_main_diagonal":{"name":"„X“ (každé číslo i v obou hlavních úhlopříčkách)"},"jigsaw_irregularly_shaped_sub_blocks":{"name":"Jigsaw (nepravidelné podbloky)"},"killer_digit_sums":{"name":"Killer (součty číslic)"},"symmetry":{"name":"Symetrie","choice":{"none":"Žádná","2_way_rotation":"2násobná rotace","4_way_rotation":"4násobná rotace","2_way_mirror":"2násobné zrcadlení","2_way_diagonal_mirror":"2násobné úhlopříčné zrcadlení","4_way_mirror":"4násobné zrcadlení","4_way_diagonal_mirror":"4násobné úhlopříčné zrcadlení","8_way_mirror":"8násobné zrcadlení"}},"difficulty":{"name":"Obtížnost","choice":{"very_easy":"Velmi snadná","easy":"Snadná","medium":"Střední","hard":"Těžká","expert":"Expertní","extreme":"Extrémní"}}},"action":{"m":{"label":"Poznámky","title":"Vepíše do každého prázdného políčka všechny možnosti (M)"},"l":{"label":"Zvýraznit","title":"Vyznačí každé políčko s číslicí, na kterou jste sáhli naposledy (L)"}},"achievement":{"pen_only":{"name":"Pero, žádná tužka","description":"Vyřešte Solo 9×9 Střední, Killer nebo těžší bez jediné tužkové poznámky."},"no_second_thoughts":{"name":"Bez druhých myšlenek","description":"Vyřešte 9×9 Expertní nebo těžší, aniž byste kdy změnili nebo smazali číslici."}}},"tents":{"name":"Stany","alsoKnownAs":"Tents and Trees","description":"Postavte ke každému stromu jeden stan tak, aby se žádné dva stany nedotýkaly.","preset":{"8x8_easy":"8×8 Snadná","8x8_tricky":"8×8 Záludná","10x10_easy":"10×10 Snadná","10x10_tricky":"10×10 Záludná","15x15_easy":"15×15 Snadná","15x15_tricky":"15×15 Záludná"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"difficulty":{"name":"Obtížnost","choice":{"easy":"Snadná","tricky":"Záludná"}}},"achievement":{"no_grass":{"name":"Postaveno na jedničku","description":"Vyřešte Stany 10×10 nebo větší, aniž byste jediné políčko označili jako trávu."},"no_strikes":{"name":"Spokojení táborníci","description":"Vyřešte Stany 15×15, aniž byste kdy sbalili stan."}}},"towers":{"name":"Věže","alsoKnownAs":"Mrakodrapy, Skyscrapers","description":"Postavte věže tak, aby každé číslo u okraje sedělo s počtem věží, které jsou odtud vidět.","preset":{"4x4_easy":"4×4 Snadná","5x5_easy":"5×5 Snadná","5x5_hard":"5×5 Těžká","6x6_easy":"6×6 Snadná","6x6_hard":"6×6 Těžká","6x6_expert":"6×6 Expertní","6x6_extreme":"6×6 Extrémní"},"config":{"grid_size":{"name":"Velikost mřížky"},"difficulty":{"name":"Obtížnost","choice":{"easy":"Snadná","hard":"Těžká","expert":"Expertní","extreme":"Extrémní"}}},"action":{"m":{"label":"Poznámky","title":"Vepíše do každého prázdného políčka všechny možnosti (M)"},"l":{"label":"Zvýraznit","title":"Vyznačí každé políčko s číslicí, na kterou jste sáhli naposledy (L)"}},"achievement":{"no_pencil":{"name":"Panorama z hlavy","description":"Vyřešte Věže 6×6 bez jediné tužkové poznámky."},"clean_build":{"name":"Postaveno napořád","description":"Vyřešte Věže 6×6 Expertní nebo Extrémní, aniž byste se vraceli ke změně věže."},"tallest_first":{"name":"Nejvyšší napřed","description":"Postavte všechny nejvyšší věže dřív než kteroukoli jinou a pak mřížku vyřešte."}}},"tracks":{"name":"Koleje","alsoKnownAs":"Train Tracks","description":"Položte jedinou trať od vjezdu k výjezdu tak, aby seděla všechna čísla.","preset":{"8x8_easy":"8×8 Snadná","8x8_tricky":"8×8 Záludná","10x8_easy":"10×8 Snadná","10x8_tricky":"10×8 Záludná","10x10_easy":"10×10 Snadná","10x10_tricky":"10×10 Záludná","15x10_easy":"15×10 Snadná","15x10_tricky":"15×10 Záludná","15x15_easy":"15×15 Snadná","15x15_tricky":"15×15 Záludná"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"difficulty":{"name":"Obtížnost","choice":{"easy":"Snadná","tricky":"Záludná"}},"disallow_consecutive_1_clues":{"name":"Zakázat sousední vodítka 1"}},"achievement":{"no_crosses":{"name":"Nic neodškrtnuto","description":"Vyřešte Koleje 10×10 nebo větší, aniž byste odškrtli políčko nebo hranu."},"no_lift":{"name":"Plnou parou vpřed","description":"Vyřešte Koleje 15×10 nebo větší, aniž byste kdy zvedli položenou kolej."},"long_haul":{"name":"Dálková trať","description":"Položte koleje přes deset políček jedním tažením a pak trať dokončete."}},"action":{"e":{"label":"Guma","title":"Kliknutím nebo tažením políčka vyčistíte (E)"}}},"twiddle":{"name":"Otočka","description":"Otáčením čtvercových bloků dlaždic vraťte čísla zpátky do pořadí.","preset":{"3x3_rows_only":"3×3 jen řádky","3x3_normal":"3×3 normální","3x3_orientable":"3×3 s orientací","4x4_normal":"4×4 normální","4x4_orientable":"4×4 s orientací","4x4_rotating_3x3_blocks":"4×4, otáčení bloků 3×3","5x5_rotating_3x3_blocks":"5×5, otáčení bloků 3×3","6x6_rotating_4x4_blocks":"6×6, otáčení bloků 4×4"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"rotating_block_size":{"name":"Velikost otáčeného bloku"},"one_number_per_row":{"name":"Jedno číslo na řádek"},"orientation_matters":{"name":"Záleží na orientaci"},"number_of_shuffling_moves":{"name":"Počet míchacích tahů"}},"achievement":{"few_turns":{"name":"Dvacet otoček","description":"Vyřešte Otočku 3×3 normální na 20 otočení nebo méně."},"perfect_ten":{"name":"Perfektní desítka","description":"Vyřešte Otočku 3×3 normální na 10 otočení nebo méně."},"dizzy":{"name":"Točí se mi hlava","description":"Otočte jeden blok stejným směrem čtyřikrát za sebou a pak hlavolam vyřešte."}},"action":{"t":{"label":"Po směru","title":"Prohodit směry: kliknutí otáčí po směru hodinových ručiček, pravé tlačítko proti směru (T)"}}},"undead":{"name":"Nemrtví","alsoKnownAs":"Haunted Mirror Maze","description":"Rozmístěte duchy, upíry a zombie tak, aby sedělo, co je vidět v zrcadlech.","preset":{"4x4_easy":"4×4 Snadná","4x4_normal":"4×4 Normální","4x4_tricky":"4×4 Záludná","5x5_easy":"5×5 Snadná","5x5_normal":"5×5 Normální","5x5_tricky":"5×5 Záludná","7x7_easy":"7×7 Snadná","7x7_normal":"7×7 Normální"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"difficulty":{"name":"Obtížnost","choice":{"easy":"Snadná","normal":"Normální","tricky":"Záludná"}}},"keypad":{"g":"Duch","v":"Upír","z":"Zombie"},"achievement":{"no_pencil":{"name":"Věř svým očím","description":"Vyřešte Nemrtvé 5×5 nebo větší bez jediné tužkové poznámky."},"fearless":{"name":"Nebojácný","description":"Vyřešte Záludné Nemrtvé, aniž byste se vraceli ke změně příšery."}},"action":{"s":{"label":"Pohled","title":"Vykreslí linie pohledu přes políčko nebo od čísla u okraje (S)"}}},"unequal":{"name":"Nerovnosti","alsoKnownAs":"Futoshiki","description":"Doplňte latinský čtverec tak, aby platil každý znak nerovnosti.","preset":{"4x4_easy":"4×4 Snadná","5x5_easy":"5×5 Snadná","5x5_medium":"5×5 Střední","5x5_medium_adjacent":"5×5 Střední (Sousední)","5x5_hard":"5×5 Těžká","6x6_easy":"6×6 Snadná","6x6_medium":"6×6 Střední","6x6_medium_adjacent":"6×6 Střední (Sousední)","6x6_hard":"6×6 Těžká","7x7_medium":"7×7 Střední","7x7_medium_adjacent":"7×7 Střední (Sousední)","7x7_hard":"7×7 Těžká"},"config":{"mode":{"name":"Režim","choice":{"unequal":"Nerovnosti","adjacent":"Sousední"}},"size_s_s":{"name":"Velikost (s*s)"},"difficulty":{"name":"Obtížnost","choice":{"very_easy":"Velmi snadná","easy":"Snadná","medium":"Střední","hard":"Těžká","extreme":"Extrémní"}}},"action":{"m":{"label":"Poznámky","title":"Vepíše do každého prázdného políčka všechny možnosti (M)"},"h":{"label":"Tip","title":"Vepíše možnosti, které zbydou po snadných úvahách (H)"},"l":{"label":"Zvýraznit","title":"Vyznačí každé políčko s číslicí, na kterou jste sáhli naposledy (L)"}},"achievement":{"adjacent_bare":{"name":"Hned vedle","description":"Vyřešte Nerovnosti v režimu Sousední bez jediné tužkové poznámky."},"extreme_bare":{"name":"Všechno v hlavě","description":"Vyřešte Extrémní Nerovnosti bez jediné tužkové poznámky."}}},"unruly":{"name":"Neposeda","alsoKnownAs":"Binairo, Takuzu","description":"Obarvěte každé políčko černě nebo bíle: v každé řadě stejně od obou barev a nikdy tři stejná za sebou.","preset":{"8x8_easy":"8×8 Snadná","8x8_normal":"8×8 Normální","10x10_easy":"10×10 Snadná","10x10_normal":"10×10 Normální","14x14_easy":"14×14 Snadná","14x14_normal":"14×14 Normální"},"config":{"width":{"name":"Šířka"},"height":{"name":"Výška"},"unique_rows_and_columns":{"name":"Jedinečné řádky a sloupce"},"difficulty":{"name":"Obtížnost","choice":{"easy":"Snadná","normal":"Normální"}}},"achievement":{"no_threes":{"name":"Nikdy tři","description":"Vyřešte Neposedu 10×10 nebo větší, aniž byste kdy udělali tři v řadě."},"first_time":{"name":"Černé na bílém","description":"Vyřešte Neposedu 14×14, aniž byste se vraceli ke změně políčka."}},"action":{"e":{"label":"Guma","title":"Kliknutím políčko vyprázdníte (E)"}}},"untangle":{"name":"Rozplétání","alsoKnownAs":"Planarity","description":"Přetahujte body tak dlouho, až se žádné dvě čáry nebudou křížit.","preset":{"6_points":"6 bodů","10_points":"10 bodů","15_points":"15 bodů","20_points":"20 bodů","25_points":"25 bodů"},"config":{"number_of_points":{"name":"Počet bodů"}},"action":{"g":{"label":"Přichytit","title":"Přichytávat puštěné body k mřížce (G)"}},"achievement":{"one_touch":{"name":"Lehký dotek","description":"Rozpleťte 10 nebo více bodů, aniž byste kterýkoli bod vzali dvakrát."},"only_downhill":{"name":"Jen z kopce","description":"Rozpleťte 20 nebo více bodů, aniž by kterýkoli tah přidal červené čáry."}}}}`),Z=JSON.parse('{"blackbox":{"step1":{"text":"V této skříňce 4×4 se ukrývá jedna koule. Střílejte lasery z teček po obvodu, odvoďte, kde koule musí být, označte ji a stiskněte tlačítko v rohu."},"step2":{"text":"Klikněte na tečku na **levém okraji, v úrovni druhého řádku**. Paprsek se cestou ohne a vyjde ven jinde; oba konce dostanou stejné číslo."},"step3":{"text":"Teď vystřelte z tečky **nahoře nad druhým sloupcem**. **H** znamená, že paprsek narazil přímo do koule a už nevyšel ven."},"step4":{"text":"Vystřelte i z tečky **nahoře nad prvním sloupcem**. **R** znamená, že se paprsek odrazil rovnou zpátky – to se stane, když koule leží úhlopříčně vedle otvoru."},"step5":{"text":"Podle R leží koule úhlopříčně vedle prvního sloupce a podle H přímo dole ve druhém: obojímu vyhovuje jediné políčko."},"step6":{"text":"**Klikněte na to políčko** a označte tam svou kouli."},"step7":{"text":"Všechny koule jsou označené, takže **fajfka v levém horním rohu** ožila. Klikněte na ni a nechte si odpověď zkontrolovat."},"step8":{"text":"Správně. Při hraní **klikněte pravým tlačítkem** na políčko, o kterém víte, že je prázdné, a zamknete ho; **Vyřešit** odpověď prozradí."}},"bridges":{"step1":{"text":"Číslo na ostrově říká, kolik konců mostů k němu má vést. Spojte všechny ostrovy do jedné sítě: mezi dvojicí nanejvýš dva mosty a žádné křížení."},"step2":{"text":"**Dvojka dole** má v přímce jediný ostrov: **čtyřku** nahoře. **Táhněte** od dvojky ke čtyřce a přehoďte mezi nimi most."},"step3":{"text":"Chce dva konce mostů a jinam než sem se nevejdou. **Táhněte** stejně ještě jednou a postavte druhý, souběžný most."},"step4":{"text":"Tenhle ostrov je hotový. **Klikněte** na něj a označte ho jako dokončený: zšedne a jeho mosty se zamknou, takže je omylem nerozházíte."},"step5":{"text":"Žádný most se nesmí křížit s jiným, takže spojnice mezi **oběma jedničkami** je mrtvá. **Táhněte pravým tlačítkem** od levé jedničky k pravé a poznamenejte si to."},"step6":{"text":"Každá jednička má teď jedinou cestu ven a zbylé čtyři mosty už z toho vyplývají. **Vyřešit** hlavolam dokončí (a **G** ukáže každou čáru, kudy by most mohl vést).","textTouch":"Každá jednička má teď jedinou cestu ven a zbylé čtyři mosty už z toho vyplývají. **Vyřešit** hlavolam dokončí."}},"cube":{"step1":{"text":"Krychle má šest stěn a modrých políček je také šest. Kutálejte s ní, dokud si každá stěna jedno neodnese: při každém dopadu si spodní stěna a políčko vymění barvu."},"step2":{"text":"Kliknutím se krychle překlopí přes hranu směrem k políčku, které vyberete. **Klikněte na modré políčko hned pod krychlí** a jeho barvu si odnese stěna, která dopadne."},"step3":{"text":"Políčko, ze kterého se odkutálela, je teď prázdné – barvy se opravdu mění. **Klikněte na modré políčko vpravo** a zmodrá druhá stěna."},"step4":{"text":"Krychlí kutálejí i **šipky**. Jedním stiskem **→** seberte třetí modré políčko.","textTouch":"Každé sousední políčko je na jedno klepnutí. **Klepněte na další modré políčko vpravo** a seberte třetí modré políčko."},"step5":{"text":"Tři stěny modré, tři zbývají – tuhle plochu zvládnete celkem na šest kutálení a stavový řádek je počítá. **Zpět** jedno vrátí, když to přeženete."}},"dominosa":{"step1":{"text":"Ležely tu tři kostky domina – 0-0, 0-1 a 1-1 – a pak je někdo sebral a nechal jen čísla. Rozdělte mřížku na dvojice a vraťte každou z nich přesně jednou zpátky."},"step2":{"text":"Žádná kostka se nesmí použít dvakrát. Kdyby tahle **0** patřila k **1** pod sebou, byl by z obou krajních sloupců 0-1 – **klikněte pravým tlačítkem** mezi ně a poznamenejte si, že dvojici netvoří."},"step3":{"text":"Jediné dvě **nuly**, které spolu sousedí, jsou ty v levém horním rohu – právě tam patří 0-0. **Klikněte na hranici mezi nimi** a položte ji."},"step4":{"text":"Stejně tak jediné sousedící **jedničky** jsou ty vlevo dole. Klikněte na hranici mezi nimi a máte 1-1."},"step5":{"text":"Na 0-1 zbývá pravý sloupec. Klikněte na hranici mezi jeho dvěma čísly a je hotovo."},"step6":{"text":"Každá kostka právě jednou. Dalším kliknutím kostku zase sundáte, opakovaná se kreslí červeně a **Zpět** vás vrátí o tah."}},"fifteen":{"step1":{"text":"Posouvejte očíslované dlaždice do prázdného místa, dokud nepůjdou po sobě **od 1 do 8** a mezera nebude v pravém dolním rohu. Téhle plošce chybí do konce dva tahy."},"step2":{"text":"Posunout se dá každá dlaždice ve stejném řádku nebo sloupci jako mezera. Klikněte na **5** a vysuňte ji nahoru do mezery."},"step3":{"text":"Ještě jednu. Klikněte na **8** a řádek je hotový."},"step4":{"text":"Vyřešeno! **Zpět** a **Znovu** vás provedou tahy sem a tam, **Nová** v nabídce pauzy rozdá čerstvý hlavolam. Dlaždici do mezery zasunete i šipkami, a to ve směru šipky.","textTouch":"Vyřešeno! **Zpět** a **Znovu** vás provedou tahy sem a tam, **Nová** v nabídce pauzy rozdá čerstvý hlavolam. Celý řádek nebo sloupec se posune najednou, takže miřte na tu vzdálenější dlaždici."}},"filling":{"step1":{"text":"Do každého prázdného políčka napište číslici tak, aby každý souvislý blok stejných číslic zabíral přesně tolik políček, kolik ta číslice říká."},"step2":{"text":"**Trojka** na patě prostředního sloupce může růst jen nahoru, takže jejím blokem je celý ten sloupec. **Táhněte** od jeho horního políčka dolů k prostřednímu a pak stiskněte **3**.","textTouch":"**Trojka** na patě prostředního sloupce může růst jen nahoru, takže jejím blokem je celý ten sloupec. **Táhněte** od jeho horního políčka dolů k prostřednímu a pak klepněte na **3** na klávesnici."},"step3":{"text":"**Dvojka** v levém sloupci potřebuje jednoho parťáka a volné je jen políčko nad ní. Klikněte na to políčko a stiskněte **2**.","textTouch":"**Dvojka** v levém sloupci potřebuje jednoho parťáka a volné je jen políčko nad ní. Klepněte na to políčko a pak na **2** na klávesnici."},"step4":{"text":"Zbývá jedno políčko. Klikněte na ně a stiskněte **1**, ať vidíte, jak vypadá špatná číslice.","textTouch":"Zbývá jedno políčko. Klepněte na ně a pak na **1** na klávesnici, ať vidíte, jak vypadá špatná číslice."},"step5":{"text":"Červená znamená nemožné: ty dvě **jedničky** spolu sousedí, což by dalo blok o dvou políčkách, a **dvojka** nahoře je zazděná. To políčko je pořád vybrané, takže stiskněte **Backspace** a vyprázdněte ho.","textTouch":"Červená znamená nemožné: ty dvě **jedničky** spolu sousedí, což by dalo blok o dvou políčkách, a **dvojka** nahoře je zazděná. To políčko je pořád vybrané, takže klepněte na **⌫** na klávesnici a vyprázdněte ho."},"step6":{"text":"Prázdné políčko se místo toho spáruje s **dvojkou** nad sebou. Klikněte na ně a stiskněte **2**, tím mřížku dokončíte.","textTouch":"Prázdné políčko se místo toho spáruje s **dvojkou** nad sebou. Klepněte na ně a pak na **2** na klávesnici, tím mřížku dokončíte."},"step7":{"text":"Vyplněno. Silné čáry obkreslují každý hotový blok. **Klikněte pravým tlačítkem**, chcete-li přidávat políčka do výběru po jednom, a **Zpět** vezme vyplnění zpátky."}},"flip":{"step1":{"text":"Rozsviťte všech devět políček. Stisk překlopí políčko **i** políčka kolem něj, takže rozsvícená mohou zase zhasnout."},"step2":{"text":"Malý obrázek uvnitř políčka ukazuje, co všechno překlopí: plný čtvereček je políčko samo, obrysy jsou jeho sousedé."},"step3":{"text":"Tak s chutí do toho. Stiskněte políčko **vlevo nahoře**, to tmavé v rohu."},"step4":{"text":"Roh svítí, ale jeho dva sousedé zhasli. Teď stiskněte **prostřední** políčko."},"step5":{"text":"Tmavý zůstal jen pravý dolní roh. Stiskněte políčko **vpravo dole** a je to."},"step6":{"text":"Všechno svítí! **Zpět** vezme stisk zpátky a místo klikání můžete kurzor vodit šipkami a mačkat Enter.","textTouch":"Všechno svítí! **Zpět** vezme stisk zpátky a dvojí stisk téhož políčka se vždycky vyruší, takže na pořadí nezáleží."}},"flood":{"step1":{"text":"Patří vám levé horní políčko a všechno, co je s ním spojené stejnou barvou. Každý tah tuhle skvrnu přebarví, takže se k ní přidají sousední políčka nové barvy. Sjednoťte celou mřížku do **čtyř tahů**."},"step2":{"text":"Zatím je vaší skvrnou jen ten modrý roh. Klikněte na **červené** políčko vedle něj: skvrna zčervená a vezme s sebou každé červené políčko, kterého se dotýká."},"step3":{"text":"Teď klikněte na **modré** políčko na okraji své skvrny. Dobře zvolená barva se dokáže rozběhnout přes půl mřížky na jediný tah."},"step4":{"text":"Mimo skvrnu zůstala už jen **zelená**. Ještě jednou klikněte a zbytek mřížky je váš."},"step5":{"text":"Tři tahy ze čtyř – stavový řádek je hlídá. Když dojdou dřív, než bude mřížka jednobarevná, kolo je prohrané. Zasekli jste se? **Tip** za vás zahraje jednu dobrou barvu a **Vyřešit** dokončí mřížku jako automatické řešení."}},"galaxies":{"step1":{"text":"Dvě tečky, tedy dvě galaxie. Kreslete zdi podél čar mřížky tak, aby každá tečka skončila ve středu své vlastní oblasti: otočte oblast o 180° kolem její tečky a musí padnout přesně sama na sebe."},"step2":{"text":"Levá tečka sedí na čáře mezi dvěma políčky, takže její galaxií musí být oba levé sloupce. **Klikněte** na čáru mřížky hned napravo od nich, v **horním řádku**."},"step3":{"text":"Tečky slouží i jako poznámkový blok. **Táhněte** od pravé tečky do **pravého horního políčka** a zanechte tam šipku – tím políčko označíte jako součást její galaxie."},"step4":{"text":"Zpátky ke zdi: **klikněte** na tutéž čáru mřížky o řádek níž, v **prostředním řádku**."},"step5":{"text":"Zbývá jeden úsek, ve **spodním řádku**. **Klikněte** na něj a obě galaxie se uzavřou."},"step6":{"text":"Obě oblasti jsou podbarvené, takže obě sedí. **Vyřešit** nakreslí celé řešení a kliknutím na zeď ji zase smažete."}},"guess":{"step1":{"text":"Za otazníky se skrývají dva kolíky ve třech možných barvách. Tipněte si řadu, přečtěte si značky, které dostane, a zužujte možnosti."},"step2":{"text":"**Přetáhněte** horní barvu z palety a pusťte ji do **levé dírky** v řadě se šipkou."},"step3":{"text":"Barvu si můžete taky nejdřív vybrat a pak s ní klikat do dírek. Klikněte na **druhou barvu** v paletě."},"step4":{"text":"Teď klikněte na **pravou dírku** a barvu do ní vložte."},"step5":{"text":"Řada je plná, takže **přerušovaný rámeček** vpravo od ní se rozsvítil. Klikněte na něj a nechte si pokus ohodnotit."},"step6":{"text":"Dvě **prázdné** značky znamenají, že obě barvy v řešení jsou, ale ani jedna nesedí na svém místě – plná značka by byla správná barva na správném místě. Prohoďte je a odešlete znovu."},"step7":{"text":"Vyřešeno. **Vyřešit** to vzdá a ukáže odpověď, a klávesa **L** popíše kolíky písmeny, když se vám barvy pletou.","textTouch":"Vyřešeno. **Vyřešit** to vzdá a ukáže odpověď, a **Přidržet** vedle Zpět ponechá kolík, kterému věříte, na místě i pro další pokus."}},"inertia":{"step1":{"text":"Jste kulička v levém horním rohu a čekají na vás **tři drahokamy**. Jakmile se kulička rozjede, zastaví ji až zeď nebo zarážka – a mina ji zabije."},"step2":{"text":"Klikněte na políčko **napravo** od kuličky. Rozjede se tím směrem, dokud ji nezastaví okraj hrací plochy, a cestou sebere drahokam."},"step3":{"text":"Teď klikněte **pod** kuličku. Sebere další drahokam a o dvě políčka níž ji zastaví přerušený kroužek – zarážka."},"step4":{"text":"Pozor: ta ostnatá věc přímo pod kuličkou je **mina**. Najet na ni znamená konec hry a vytáhne vás z toho jedině **Zpět**."},"step5":{"text":"Jeďte raději **úhlopříčně**: klikněte na políčko dvě dolů a dvě doleva a kulička minu objede rovnou na poslední drahokam."},"step6":{"text":"Všechny tři drahokamy – hotovo. **Zpět** vrátí nepovedený rozjezd; šipky posílají kuličku rovně a Home, Page Up, End a Page Down úhlopříčně.","textTouch":"Všechny tři drahokamy – hotovo. **Zpět** vrátí nepovedený rozjezd a klepnout můžete i mimo mřížku, což pomůže, když je kulička u okraje."}},"keen":{"step1":{"text":"Doplňte 1, 2 a 3 tak, aby se každá objevila jednou v každém řádku i sloupci a aby číslice v každé silně orámované kleci vyšly podle jejího početního vodítka."},"step2":{"text":"Klec **2×** dává po vynásobení 2, takže v ní jsou číslice 1, 1 a 2. Klec smí číslici zopakovat, ale ne v jednom řádku či sloupci – dvojka tedy patří do rohu: klikněte na to políčko a napište **2**.","textTouch":"Klec **2×** dává po vynásobení 2, takže v ní jsou číslice 1, 1 a 2. Dvojka patří do rohu: klepněte na to políčko a pak na **2** na klávesnici."},"step3":{"text":"Zbylá dvě políčka klece patří jedničkám. Klikněte na políčko **napravo od dvojky** a napište **1**.","textTouch":"Zbylá dvě políčka klece patří jedničkám. Klepněte na políčko **napravo od dvojky** a pak na **1** na klávesnici."},"step4":{"text":"V horním řádku už dvojka i jednička jsou, poslední políčko v něm tedy musí být trojka. Klikněte na **pravé horní políčko** a napište **3**.","textTouch":"V horním řádku už dvojka i jednička jsou, poslední políčko v něm tedy musí být trojka. Klepněte na **pravé horní políčko** a pak na **3** na klávesnici."},"step5":{"text":"Jenom tipujete? **Klikněte pravým tlačítkem** na prostřední políčko a napište **3** – číslice se zapíše jako tužková poznámka místo pořádné odpovědi.","textTouch":"Jenom tipujete? **Dlouze klepněte** na prostřední políčko a klepněte na **3** – číslice se zapíše jako poznámka místo pořádné odpovědi. Klávesa **✎** udělá totéž pro políčko, na které jste klepli."},"step6":{"text":"Zbytek dolušťte stejně; číslice zopakovaná v řádku nebo sloupci zčervená a stejně tak plná klec, která nesedí se svým vodítkem. V nabídce Pauza vám **Poznámky** vepíšou všechny možnosti a **Vyřešit** odpověď prozradí."}},"lightup":{"step1":{"text":"Nakonec musí svítit každé bílé políčko. Žárovka osvětluje svůj řádek a sloupec, dokud paprsek nezastaví černé políčko, a žádná žárovka nesmí stát ve světle jiné."},"step2":{"text":"Číslo říká, kolik žárovek se dotýká toho černého políčka. Tahle **2** má jen dva bílé sousedy, takže v obou je žárovka: klikněte na toho **napravo**."},"step3":{"text":"Všimněte si žlutého nádechu, který se šíří po paprsku. Teď klikněte na políčko hned **pod** dvojkou a dejte jí druhou žárovku."},"step4":{"text":"**0** se nedotýká žádné žárovky. **Klikněte pravým tlačítkem** na políčko nad ní a udělejte si křížek: připomíná vám, že tam žárovka nemůže."},"step5":{"text":"**1** chce přesně jednu žárovku. Políčko pod ní už svítí, takže by tam žárovka stála v paprsku – klikněte místo toho na políčko **nalevo** od jedničky."},"step6":{"text":"V horním řádku jsou pořád dvě tmavá políčka a jedno z nich máte odškrtnuté. Klikněte na to **druhé**."},"step7":{"text":"Všechna políčka svítí a všechna čísla jsou spokojená. **Zpět** vezme žárovku zase pryč a se šipkami, Enterem a mezerníkem se obejdete i bez myši.","textTouch":"Všechna políčka svítí a všechna čísla jsou spokojená. **Zpět** vezme žárovku zase pryč a dlouhým klepnutím odškrtnete políčko, které jste vyloučili."}},"loopy":{"step1":{"text":"Nakreslete **jednu** uzavřenou smyčku po slabých čarách mezi tečkami. Každé číslo říká, kolik ze čtyř stran svého čtverce smyčka použije."},"step2":{"text":"Prostřední čtverec je označený **4**, takže na smyčce leží všechny čtyři jeho strany. **Klikněte** na jeho horní stranu a nakreslete první čáru."},"step3":{"text":"Teď jeho **levou stranu**. Dalším kliknutím čáru zase smažete."},"step4":{"text":"Každá tečka má dvě čáry, nebo žádnou, a tečka, kde se ty dvě potkávají, je plná. **Klikněte pravým tlačítkem** na čáru vedoucí od ní nahoru a škrtněte ji jako nepoužitelnou."},"step5":{"text":"Zbývají dvě strany. **Klikněte** na spodní stranu prostředního čtverce."},"step6":{"text":"A **pravá strana** ji uzavře. Jedna smyčka, žádné volné konce a čtyři **nuly** zůstaly mimo ni."},"step7":{"text":"Vyřešeno. **Zpět** vás vrátí po jednotlivých čarách a **Typ** v nabídce Pauza vymění čtverce za trojúhelníky, šestiúhelníky a další podivná dláždění."}},"magnets":{"step1":{"text":"Každé domino je buď magnet s půlkou **+** a půlkou **−**, nebo neutrální. Čísla počítají póly **+** (nahoře a vlevo) a póly **−** (dole a vpravo) v každé řadě a stejné póly se nikdy nesmějí dotýkat."},"step2":{"text":"Spodní řádek chce tři póly **−** a zasahují do něj jen tři domina, takže každé musí jeden dodat. **Klikněte levým tlačítkem** na horní půlku stojatého domina, aby se z ní stalo **+** a jeho **−** spadlo dolů."},"step3":{"text":"I ležaté domino vpravo dole je tedy magnet a **0** nad posledním sloupcem tam **+** zakazuje. **Klikněte levým tlačítkem** na jeho levou půlku a dejte **+** na tuhle stranu."},"step4":{"text":"Čtvrtý sloupec má teď své jediné **+** a žádné **−** nechce, takže domino nad ním nemůže být ani jedno. **Klikněte pravým tlačítkem** a označte ho jako neutrální."},"step5":{"text":"Horní řádek pořád potřebuje jedno **+** a jedno **−** od ležatého domina vlevo. Jeho pravá půlka se dotýká **+** a stejné póly se dotýkat nesmějí – **klikněte levým tlačítkem** na jeho levou půlku."},"step6":{"text":"Zbývá jedno domino. První sloupec už své **+** utratil nahoře, takže zdejší **+** patří doprava: **klikněte levým tlačítkem** na pravou půlku a je hotovo."},"step7":{"text":"Vyřešeno! Dalším kliknutím na tutéž půlku magnet otočíte, druhým kliknutím pravým tlačítkem zůstanou otazníky ve smyslu „magnet, ale jak?“, a **Zpět** vás vrátí o krok."}},"map":{"step1":{"text":"Obarvěte každou oblast tak, aby žádné dvě oblasti se společným kusem hranice neměly stejnou barvu. Čtyři barvy vždycky stačí a tři oblasti tu jsou zatím prázdné."},"step2":{"text":"Nejdřív si vezměte barvu: **klikněte** na **modrý čtvereček**, druhý v řadě pod mapou."},"step3":{"text":"S barvou v ruce si **kliknutím pravým tlačítkem** do prázdné oblasti uděláte barevnou tečku – poznámku, že oblast *možná* bude mít tuhle barvu. Zkuste to na vysoké oblasti u pravého okraje."},"step4":{"text":"Není to jenom možnost: ta oblast už sousedí s červenou, zelenou i žlutou, takže zbývá jedině modrá. **Klikněte** na ni a vybarvěte ji."},"step5":{"text":"Barvu můžete taky **přetáhnout** z jedné oblasti do druhé. Velká oblast nahoře se teď dotýká červené, zelené i modré, takže na ni **přetáhněte** žlutou z malé oblasti dole."},"step6":{"text":"Zbývá jedna prázdná oblast v **levém dolním rohu**: sousedí se zelenou, modrou a tou novou žlutou, takže musí být červená. **Přetáhněte** na ni červenou z oblasti v pravém horním rohu."},"step7":{"text":"Hotovo – kolize by na hranici mezi oběma oblastmi ukázala červený **!**. **Zpět** vás vrátí o krok a se šipkami a klávesami **1**–**4** obarvíte i bez myši.","textTouch":"Hotovo – kolize by na hranici mezi oběma oblastmi ukázala červený **!**. **Zpět** vás vrátí o krok a gumou na konci řady smažete oblast, kterou jste si rozmysleli."}},"mines":{"step1":{"text":"Každé číslo počítá miny v osmi políčkách, která se ho dotýkají. Pod zakrytým blokem se schovávají dvě miny; odkryjte všechno ostatní a na žádnou nešlápněte."},"step2":{"text":"Tahle **1** se dotýká jediného zakrytého políčka, takže je v něm mina. **Klikněte pravým tlačítkem** a zapíchněte do něj vlajku."},"step3":{"text":"**1** pod ní má teď svou jedinou minu označenou, takže zbytek jejích sousedů je bezpečný. **Klikněte levým tlačítkem na tuhle 1** a otevřete je naráz."},"step4":{"text":"**2** nad blokem už jednu vlajku napočítala a zbývá jí jediné zakryté políčko. **Klikněte pravým tlačítkem** na ně."},"step5":{"text":"Obě miny jsou označené, takže poslední zakryté políčko musí být bezpečné. **Klikněte levým tlačítkem** a mřížku dokončete."},"step6":{"text":"Vyčištěno. Druhým kliknutím pravým tlačítkem vlajku zase sundáte a **Zpět** vás zachrání, kdybyste na minu přece jen šlápli."}},"net":{"step1":{"text":"Každá dlaždice nese kus drátu a celá síť se náhodně protočila. Otáčejte dlaždicemi, dokud nebude všech devět viset na dlaždici označené uprostřed: **modré** dráty už jsou pod proudem, šedé ne."},"step2":{"text":"Levá dolní dlaždice míří drátem rovnou do zdi. **Klikněte levým tlačítkem** a otočte ji o čtvrt otáčky proti směru hodinových ručiček, aby drát dosáhl na souseda vpravo."},"step3":{"text":"**Klikněte pravým tlačítkem** a dlaždice se otočí na druhou stranu. Otočte pravou dolní dlaždici jednou po směru hodinových ručiček a její drát se stočí doleva."},"step4":{"text":"Prostřední dlaždice má dráty na všech čtyřech stranách, takže nemůže být špatně. **Klikněte na ni prostředním tlačítkem**, nebo zapněte **zámek** vedle tlačítka Zpět a klikněte na ni, a zamkněte ji: zamčená dlaždice je stínovaná a otočit se nenechá.","textTouch":"Prostřední dlaždice má dráty na všech čtyřech stranách, takže nemůže být špatně. Zapněte **zámek** vedle tlačítka Zpět a klepnutím dlaždici zamkněte: zamčená dlaždice je stínovaná a otočit se nenechá."},"step5":{"text":"Zbývá jedna dlaždice. Se **zámkem** vypnutým **klikněte levým tlačítkem** na pravý horní roh, drát se stočí doleva a celá síť se rozsvítí.","textTouch":"Zbývá jedna dlaždice. Se **zámkem** vypnutým klepněte na pravý horní roh, drát se stočí doleva a celá síť se rozsvítí."},"step6":{"text":"Všech devět dlaždic je pod proudem. **Zpět** vás vrátí po jednotlivých otáčkách; na klávesnici pohybují šipky kurzorem a **A**, **D** a **F** otáčejí dlaždicí pod ním.","textTouch":"Všech devět dlaždic je pod proudem. **Zpět** vás vrátí po jednotlivých otáčkách, zamčení jisté dlaždice ji ochrání před omylem a **Zamíchat** znovu protočí všechny nezamčené."}},"netslide":{"step1":{"text":"Každý kousek drátu musí nakonec viset na zdroji. Modré dráty jsou pod proudem, šedé tužkové ne."},"step2":{"text":"Zdroj sedí na prostřední dlaždici. Ta se nikdy nehýbe, takže prostřední řádek a sloupec nemají šipky – všechno ostatní se posouvá."},"step3":{"text":"Klikněte na šipku **nalevo od spodního řádku** a posuňte ten řádek o krok doleva; drát, který vypadne, se objeví zase vpravo."},"step4":{"text":"Spodní řádek teď drží pohromadě, ale pořád je šedý: nahoru ke zdroji ho zatím nic nepřipojuje."},"step5":{"text":"**Klikněte pravým tlačítkem** na šipku **nad třetím sloupcem**. Kliknutím pravým tlačítkem se šipka obrátí, takže se sloupec posune dolů a poslední dráty se rozsvítí."},"step6":{"text":"Všechno svítí! **Vyřešit** ukáže řešení, když uvíznete, a v nabídce **Typ** najdete mřížky s přechodem přes okraje, kde dráty vybíhají z jedné strany a vracejí se z druhé."}},"pattern":{"step1":{"text":"Čísla vedle každého řádku a sloupce udávají délky jeho černých úseků, popořadě. Zjistěte, která políčka jsou černá, a vybarvěte je."},"step2":{"text":"**Třetí sloupec** říká 1 2: jedno černé, mezera a pak dvě černá. Do čtyř políček se to vejde jediným způsobem, s dvojicí až dole. **Přetáhněte** přes ně směrem dolů."},"step3":{"text":"Políčko nad dvojicí je tím pádem ta mezera. **Klikněte pravým tlačítkem** a udělejte na něm tečku, která značí jistě bílé políčko."},"step4":{"text":"A horní políčko toho sloupce je osamocené černé z vodítka. **Klikněte** na ně."},"step5":{"text":"**Poslední sloupec** říká 3. Ať úsek tří políček leží ve čtyřech jakkoli, vždycky pokryje ty dvě prostřední – **přetáhněte** tedy dolů přes ně."},"step6":{"text":"Vodítko zešedne, jakmile je jeho řada hotová. Pokračujte stejně dál, nebo tenhle nechte dokončit tlačítkem **Vyřešit**; kliknutím prostředním tlačítkem vrátíte políčko zpátky na neznámé."}},"pearl":{"step1":{"text":"Nakreslete jednu uzavřenou smyčku od středu políčka ke středu políčka. Nemusí projít každým políčkem, ale musí projít každou perlou."},"step2":{"text":"**Bílá perla** znamená, že smyčka jí projde rovně. V horním řádku vede rovná čára jedině do stran, takže **táhněte** z políčka nalevo od té perly na políčko napravo od ní."},"step3":{"text":"Perla už má oba své úseky, takže z ní nic dalšího nevede. **Klikněte pravým tlačítkem** na hranu pod ní a přeškrtněte tuhle stranu."},"step4":{"text":"**Černá perla** zatáčí a smyčka pak projde rovně políčkem po každé její straně. Ta na **levém okraji** nemůže zahnout dolů – to by chtělo rovnou čáru přes levý dolní roh – takže **klikněte** na její pravou hranu."},"step5":{"text":"Sousední políčko tedy pokračuje rovně – a bílá perla za ním taky. **Táhněte** z toho políčka až do čtvrtého sloupce."},"step6":{"text":"Postupujte dál od perly k perle; jakmile se u perly poruší pravidlo, dostane červenou svatozář. **Vyřešit** nakreslí celou smyčku, když si ji chcete prohlédnout."}},"pegs":{"step1":{"text":"Kolík přeskočí souseda do prázdné dírky za ním a přeskočený kolík zmizí. Vyprázdněte tuhle malou plochu až na **jediný kolík**: tři skoky."},"step2":{"text":"**Přetáhněte** kolík na vrcholu stonku dolů přes souseda do dírky vespod."},"step3":{"text":"Jde to i klikáním. Klikněte na **pravý kolík**, tím ho zvednete, a pak klikněte na dírku o dvě políčka nalevo."},"step4":{"text":"Poslední skok: přetáhněte kolík v **levém dolním rohu** přes souseda doprostřed."},"step5":{"text":"Zbyl jeden kolík – vyřešeno. **Zpět** vrátí skok, když se zaseknete, a fungují i šipky: Enter kolík zvedne a šipka ho pak pošle na cestu.","textTouch":"Zbyl jeden kolík – vyřešeno. **Zpět** vrátí skok, kdykoli se zaseknete, a to klidně hodně dozadu."}},"range":{"step1":{"text":"Začerněte políčka tak, aby každé číslo udávalo přesný počet bílých políček, na která jeho políčko vidí: sebe sama plus všechna políčka v přímé linii nahoru, dolů, doleva a doprava, dokud je nezastaví černé políčko nebo okraj."},"step2":{"text":"**Šestka** teď vidí na šest políček – celý svůj řádek plus dvě pod sebou. V tom řádku ani sloupci tedy nesmí nic zčernat."},"step3":{"text":"**Dvojka** smí vidět jen sebe a jedno další políčko a to nad ní musí kvůli šestce zůstat bílé. **Klikněte** proto na políčko nalevo od ní a začerněte ho."},"step4":{"text":"Tím zbývá pravé horní políčko jako jediné bílé, na které dvojka ještě vidí. **Klikněte pravým tlačítkem** na toto políčko a udělejte tečku – tak se značí políčko, o kterém víte, že zůstane bílé."},"step5":{"text":"**Trojka** už vidí sebe a dvě políčka nalevo, takže políčko napravo od ní musí být černé. **Klikněte** na něj."},"step6":{"text":"Hotovo se dvěma černými políčky – tečky jsou jen poznámky. **H** doplní jedno políčko, které vyplývá ze zbytku, a **Vyřešit** vytečkuje celou mřížku.","textTouch":"Hotovo se dvěma černými políčky – tečky jsou jen poznámky. **Vyřešit** vytečkuje celou mřížku, když chcete radši rovnou vidět řešení."}},"rect":{"step1":{"text":"Rozřežte tuhle mřížku na obdélníky tak, aby v každém bylo přesně jedno číslo a to číslo říkalo, kolik políček obdélník zabírá."},"step2":{"text":"V obdélníku smí být jen jedno číslo a **trojka** sedí přímo pod **čtyřkou** – čtyřka si tedy musí vzít celý horní řádek. **Táhněte** od čtyřky až na pravý konec toho řádku."},"step3":{"text":"Kliknutím na jednu čáru mřížky přidáte nebo odeberete právě tuhle hranu. **Klikněte** na čáru napravo od **trojky**."},"step4":{"text":"Devítka může být jedině blok 3×3 a zbývá pro ni jediné místo. **Táhněte** přes zvýrazněný blok z jeho levého horního políčka do pravého dolního rohu: tím se ohradí i trojka."},"step5":{"text":"Každé políčko je v obdélníku správné velikosti. **Tažením pravým tlačítkem** vymažete čáry uvnitř oblasti, ale obrys zůstane, a **Zpět** vrátí poslední tah."}},"samegame":{"step1":{"text":"Vyprázdněte hrací plochu odebíráním skupin dvou a více sousedících políček stejné barvy. Skupina _n_ políček dá (_n_ − 2)² bodů, takže se vyplatí ty velké."},"step2":{"text":"Klikněte na kterékoli ze čtyř **červených** políček nahoře. Prvním kliknutím skupinu jen vyberete: zesvětlá a dostane silný obrys."},"step3":{"text":"Klikněte na vybranou skupinu ještě jednou, tím ji z plochy sundáte a získáte čtyři body. Políčka nad mezerou spadnou dolů a prázdný sloupec k sobě přitáhne sousedy."},"step4":{"text":"Tohle **zelené** políčko je osamocené. Nic vedle něj nemá jeho barvu, takže ho nejde vybrat – musí počkat, až mu přesun políček přisune parťáka."},"step5":{"text":"Teď ta zvýrazněná **modrá dvojice**. Klikněte na kterékoli z těch dvou políček a vyberete obě."},"step6":{"text":"Rozmysleli jste si to? **Klikněte pravým tlačítkem** na výběr a zase ho pusťte – dokud na skupinu nekliknete podruhé, nic nezmizí."},"step7":{"text":"A to je celá hra. Každá plocha jde vyprázdnit, tak vydržte – **Zpět** vás vrátí, když nějaké políčko osamotíte, a žádné tlačítko Vyřešit tu na pomoc není."}},"signpost":{"step1":{"text":"Na každém políčku je šipka. Spojte všech šest do jediného řetězu číslovaného **od 1 do 6**, kde po každém políčku následuje políčko někde ve směru jeho šipky."},"step2":{"text":"**Jednička** míří na východ. **Táhněte** z ní na políčko napravo a udělejte z něj dvojku."},"step3":{"text":"**Trojka** se připojila sama, jak to čísla jdoucí po sobě a mířící správným směrem vždycky dělají. Teď **přetáhněte** pravé dolní políčko na políčko nalevo od něj."},"step4":{"text":"Ani jedno z těch dvou zatím nemá číslo, takže je dvojice označená **a** a **a+1**. **Klikněte pravým tlačítkem** na prostřední políčko spodního řádku a zase je rozpojte."},"step5":{"text":"Skutečná čísla jsou lepší: **táhněte** z **trojky** na políčko pod ní, z něj se stane čtyřka."},"step6":{"text":"Poslední spojení: **táhněte** z té čtyřky na políčko nalevo. Stane se z něj pětka a šestka cestu uzavře sama."},"step7":{"text":"Vyřešeno. **Tažením pravým tlačítkem** se spojuje opačně, od políčka zpátky k tomu předchozímu, a **Vyřešit** vyskládá celou cestu."}},"singles":{"step1":{"text":"Černěte políčka tak dlouho, dokud se mezi bílými políčky žádného řádku ani sloupce neopakuje číslo. Dvě černá políčka spolu nikdy nesmí sousedit hranou a bílá políčka musí zůstat jednou souvislou oblastí."},"step2":{"text":"Dvě **čtyřky** v tomhle řádku mají mezi sebou jedno políčko. Kdyby zčernalo, zůstaly by obě čtyřky bílé, takže musí být bílé samo – **klikněte pravým tlačítkem** a zakroužkujte ho."},"step3":{"text":"Zakroužkovaná **trojka** je bílá natrvalo a v jejím sloupci je nahoře další trojka. **Klikněte levým tlačítkem** na tu horní a začerněte ji."},"step4":{"text":"Černá políčka spolu nesousedí, takže **čtyřka** hned napravo od ní zůstává bílá. **Klikněte levým tlačítkem** na druhou čtyřku v posledním sloupci."},"step5":{"text":"A znovu: **dvojka** přímo nad novým černým políčkem je bílá a v jejím řádku je úplně vlevo další dvojka. **Klikněte levým tlačítkem** na ni."},"step6":{"text":"Zbývá jedna. **Trojka** nad tím černým políčkem je bílá, takže druhá trojka na konci sloupce musí pryč. **Klikněte levým tlačítkem** na ni."},"step7":{"text":"Vyřešeno a bílá políčka jsou pořád propojená. Kroužky jsou jen poznámky a **Zpět** vás provede tahy nazpátek."}},"sixteen":{"step1":{"text":"Seřaďte dlaždice **od 1 do 9**, jak se čte zleva doprava. Šipky po okrajích posunou celý řádek nebo sloupec o krok a co vypadne, vrátí se na druhé straně."},"step2":{"text":"Klikněte na šipku **nad druhým sloupcem** a posuňte ten sloupec o krok nahoru; tím se dokončí prostřední řádek."},"step3":{"text":"Teď je potřeba posunout spodní řádek doprava. **Klikněte pravým tlačítkem** na šipku **nalevo od spodního řádku**: pravým tlačítkem se linie posílá opačným směrem."},"step4":{"text":"A poslední: klikněte na šipku **nalevo od horního řádku**, posuňte ho doleva a mřížka je hotová."},"step5":{"text":"Seřazeno! **Typ** v nabídce Pauza nabízí větší mřížky a jeho **Vlastní…** vám jednu zamíchá zadaným počtem tahů, které pak rozmotáte."}},"slant":{"step1":{"text":"Nakreslete v každém políčku jednu úhlopříčku. Zakroužkované číslo počítá čáry, které se dotýkají jeho rohu, a čáry nikdy nesmí uzavřít smyčku."},"step2":{"text":"**Nula** v levém horním rohu nechce, aby se jí něco dotýkalo, takže její jediné políčko se musí naklonit opačně. **Klikněte pravým tlačítkem** na to políčko a nakreslete `/`."},"step3":{"text":"**Čtyřka** potřebuje čáru ze všech čtyř políček kolem sebe. **Klikněte levým tlačítkem** na to nad ní a nalevo – levým tlačítkem se kreslí `\\\\`."},"step4":{"text":"Políčko nad **čtyřkou** a napravo se naopak musí naklonit doleva dolů. **Klikněte pravým tlačítkem** na něj a udělejte `/`."},"step5":{"text":"**Jednička** na levém okraji už svou jedinou čáru má, z políčka pod sebou. Políčko nad ní se tedy musí naklonit pryč: **klikněte levým tlačítkem** a udělejte `\\\\`."},"step6":{"text":"Pokračujte stejně. Číslo, které už nemůže vyjít, zčervená, a stejně tak každá čára chycená v uzavřené smyčce. **Vyřešit** v nabídce Pauza doplní zbytek."}},"solo":{"step1":{"text":"Každý řádek, každý sloupec i každý orámovaný **blok 2×2** musí obsahovat 1, 2, 3 a 4 právě jednou. V téhle malé mřížce chybí tři políčka."},"step2":{"text":"Tenhle **blok** už má 2, 3 i 4, takže jeho prázdné políčko může být jedině **1**. Klikněte na to políčko a stiskněte klávesu **1**.","textTouch":"Tenhle **blok** už má 2, 3 i 4, takže jeho prázdné políčko může být jedině **1**. Klepněte na to políčko a pak na **1** na klávesnici."},"step3":{"text":"Nejste si políčkem jistí? **Klikněte pravým tlačítkem** na tohle prázdné a stiskněte **2**, tím si číslici zapíšete jako poznámku.","textTouch":"Nejste si políčkem jistí? Klepněte na tohle prázdné, na klávesnici zapněte **✎** a klepnutím na **2** si číslici zapíšete jako poznámku."},"step4":{"text":"V jeho řádku už jsou 3, 4 a 1, takže poznámka byla správná. **Klikněte levým tlačítkem** na stejné políčko a stiskněte **2**, tím zapíšete odpověď.","textTouch":"V jeho řádku už jsou 3, 4 a 1, takže poznámka byla správná. Políčko je pořád vybrané, takže klepnutím na **✎** poznámky vypnete a **2** zapíše odpověď."},"step5":{"text":"Zbývá jedno políčko. V jeho řádku už jsou 4, 3 a 1 – klikněte na něj a stiskněte chybějící číslici.","textTouch":"Zbývá jedno políčko. V jeho řádku už jsou 4, 3 a 1 – klepněte na něj a pak na chybějící číslici na klávesnici."},"step6":{"text":"Vyřešeno! **Zpět** vezme špatnou číslici nazpátek a klávesa **M** vepíše do všech prázdných políček najednou všechny možnosti.","textTouch":"Vyřešeno! **Zpět** vezme špatnou číslici nazpátek a **Poznámky** v nabídce Pauza vepíšou do všech prázdných políček najednou všechny možnosti."}},"tents":{"step1":{"text":"Ke každému stromu postavte jeden stan – nad něj, pod něj, vlevo nebo vpravo od něj, nikdy úhlopříčně. Žádné dva stany se nesmějí dotýkat a čísla udávají počet stanů v každém řádku a sloupci."},"step2":{"text":"**0** na konci druhého řádku znamená, že v tom řádku žádný stan nestojí. **Klikněte pravým tlačítkem** na políčko vedle stromu a označte ho jako trávu."},"step3":{"text":"Třetí sloupec je také prázdný. **Přetáhněte pravým tlačítkem** od jeho horního políčka dolů do třetího řádku a zatravněte všechna tři naráz."},"step4":{"text":"Strom vpravo dole stojí v rohu a vedle sebe má druhý strom, takže jediné volné sousední políčko je nad ním. **Klikněte levým tlačítkem** na to políčko a postavte stan."},"step5":{"text":"Tímto stanem je třetí řádek plný, takže ani strom u levého okraje nemůže tábořit pod sebou. **Klikněte levým tlačítkem** na políčko vlevo nahoře."},"step6":{"text":"Jeden strom pořád nemá stan a volné je u něj jen políčko nalevo. **Klikněte levým tlačítkem** na ně a tábořiště je hotové."},"step7":{"text":"Vyřešeno! Dalším kliknutím na stan nebo na trávu značku zase smažete, šipky s Enterem a mezerníkem dělají totéž a **Zpět** vás vrátí o krok.","textTouch":"Vyřešeno! Dalším klepnutím na stan nebo na trávu značku zase smažete a **Zpět** vás vrátí o krok."}},"towers":{"step1":{"text":"V každém řádku i sloupci stojí jedna věž od každé výšky, od 1 do 4. Číslo u okraje říká, kolik věží je odtud **vidět**: vyšší věž schová každou nižší za sebou."},"step2":{"text":"**1** vpravo u horního řádku znamená, že je z té strany vidět jediná věž – ta nejbližší tedy musí být nejvyšší. Klikněte na to políčko a stiskněte **4**.","textTouch":"**1** vpravo u horního řádku znamená, že je z té strany vidět jediná věž – ta nejbližší tedy musí být nejvyšší. Klepněte na to políčko a pak na **4** na klávesnici."},"step3":{"text":"Místo odpovědi si můžete možnosti jen poznamenat. **Klikněte pravým tlačítkem** na prázdné políčko na levém konci horního řádku a stiskněte **1**.","textTouch":"Místo odpovědi si můžete možnosti jen poznamenat. Klepněte na prázdné políčko na levém konci horního řádku, zapněte **✎** na klávesnici a klepněte na **1**."},"step4":{"text":"**4** vlevo u řádku říká, že jsou vidět všechny čtyři věže – z té strany tedy stoupají 1-2-3-4. **Klikněte levým tlačítkem** na políčko a stiskněte **1**, tím na něj odpovíte.","textTouch":"**4** vlevo u řádku říká, že jsou vidět všechny čtyři věže – z té strany tedy stoupají 1-2-3-4. Políčko je pořád vybrané, takže klepnutím na **✎** vypněte tužku a pak klepněte na **1**."},"step5":{"text":"Zbývá jedno políčko a **1** u jeho řádku zase staví nejvyšší věž nejblíž. Klikněte na ně a stiskněte **4**.","textTouch":"Zbývá jedno políčko a **1** u jeho řádku zase staví nejvyšší věž nejblíž. Klepněte na ně a pak na **4** na klávesnici."},"step6":{"text":"Vyřešeno! **Backspace** vyprázdní políčko, které jste trefili špatně, a **Vyřešit** v nabídce Pauza dokončí hlavolam, který vás přemohl.","textTouch":"Vyřešeno! **⌫** na klávesnici vyprázdní políčko, které jste trefili špatně. V nabídce Pauza **Poznámky** vepíšou tužkou všechny možnosti a **Vyřešit** dokončí hlavolam, který vás přemohl."}},"tracks":{"step1":{"text":"Jedna trať vede od vjezdu vlevo k výjezdu dole a každé políčko, kterým projde, má přesně dvě koleje. Čísla říkají, kolika políčky toho sloupce nebo řádku trať prochází."},"step2":{"text":"Kus u vjezdu už vede nahoru do **políčka vlevo nahoře** a horní i levá strana tohoto políčka jsou okraj mřížky. Jeho druhá kolej tedy musí vést doprava: **klikněte** kousek napravo od jeho středu."},"step3":{"text":"**Levý sloupec** je počítaný na **2** a vjezd už obě políčka zabral, takže jeho spodní polovinou nic neprochází. **Klikněte pravým tlačítkem** doprostřed políčka a přeškrtněte ho – tažením pravým tlačítkem přeškrtnete celý úsek."},"step4":{"text":"**Pravý sloupec** je počítaný na **4**, trať tedy navštíví každé jeho políčko a horní i dolní z nich se může stočit jen dovnitř. **Táhněte** od políčka vpravo nahoře až dolů k tomu vpravo dole."},"step5":{"text":"**Spodní řádek** potřebuje tři políčka a levý sloupec je hotový, takže roh vpravo dole na trati leží. Z mřížky vyjet nemůže, a tak se stáčí doleva a nahoru: **klikněte** na jeho levou stranu."},"step6":{"text":"Čísla zšednou, když jejich řada sedí, a zčervenají, když už vyjít nemůže. Pokračujte podle volných konců, nebo trať dokončete tlačítkem **Vyřešit**."}},"twiddle":{"step1":{"text":"Vraťte čísla do pořadí, **od 1 do 9**. Jeden tah otočí čtvercový blok čtyř dlaždic o čtvrt otáčky; tuhle hrací plochu srovnají tři otočky."},"step2":{"text":"Klikněte doprostřed **čtyř dlaždic vlevo nahoře**. Kliknutím levým tlačítkem se blok otočí proti směru hodinových ručiček, čímž se nahoru dostane 1, 2, 3."},"step3":{"text":"**Klikněte pravým tlačítkem** doprostřed **čtyř dlaždic vpravo dole**, ten blok se otočí po směru hodinových ručiček."},"step4":{"text":"Dokončete to kliknutím levým tlačítkem doprostřed **čtyř dlaždic vlevo dole**."},"step5":{"text":"Hotovo! V nabídce **Typ** najdete větší bloky i režim *s orientací*, kde musí každá dlaždice nakonec stát správně nahoru."}},"undead":{"step1":{"text":"Zaplňte pět prázdných políček duchy, upíry a zombie – přehled nahoře říká, kolik jich od každého druhu je. Každé číslo počítá příšery viděné podél té řady a zrcadla váš pohled ohýbají."},"step2":{"text":"Při pohledu **zleva do horního řádku** nevidíte nic; zrcadlo tutéž řadu vyvede nahoře ven, kde **1** jednu příšeru vidí. Zpříma se schová jen duch, a ten se v zrcadle ukáže. **Klikněte** na to políčko."},"step3":{"text":"**4** v levém dolním rohu se přes zrcadla klikatí kolem tří políček a vidí každé z nich. Upír se v zrcadle ztratí, takže jediný upír musí být prostřední políčko levého sloupce. **Klikněte** na ně."},"step4":{"text":"Kliknutím se příšery jen přepínají dokola. Místo toho **stiskněte V**: klávesy G, V a Z vloží do zvýrazněného políčka rovnou ducha, upíra nebo zombie.","textTouch":"Klepnutím se příšery přepínají jen po jedné. Klepněte radši na klávesnici na **Upír**: tahle příšera se tím vloží rovnou do zvýrazněného políčka."},"step5":{"text":"**Prostřední řádek** je přímý pohled bez zrcadel a obě **1** vidí jedinou příšeru – upíra. Jeho dva sousedé tedy musí být duchové. **Klikněte** na prostřední políčko."},"step6":{"text":"**Kliknutím pravým tlačítkem** se místo příšery vepíše malá poznámka. Zkuste to na pravém políčku toho řádku; každé další kliknutí pravým tlačítkem přidá další příšeru."},"step7":{"text":"Zbývají dvě políčka: to s tužkovou poznámkou je třetí duch a poslední je zombie. Čísla zšednou, jakmile je jejich řada vyřešená; **Vyřešit** dokončí bludiště za vás, pokud se chcete jen dívat."}},"unequal":{"step1":{"text":"Každý řádek a sloupec potřebuje jednou 1, 2, 3 a 4 – a každý znak mezi dvěma políčky musí ukazovat na to **menší** z dvojice."},"step2":{"text":"Znak tady ukazuje doprava, takže **levé** políčko je to větší. Tomuhle řádku ještě chybí 2 a 3: klikněte na levé políčko a stiskněte **3**.","textTouch":"Znak tady ukazuje doprava, takže **levé** políčko je to větší. Tomuhle řádku ještě chybí 2 a 3: klepněte na levé políčko a pak na **3** na klávesnici."},"step3":{"text":"Políčko, na které znak ukazuje, dostane menší číslo. Klikněte na ně a stiskněte **2**.","textTouch":"Políčko, na které znak ukazuje, dostane menší číslo. Klepněte na ně a pak na **2** na klávesnici."},"step4":{"text":"V jeho sloupci už je 3, takže tohle políčko může být jen 2. **Klikněte pravým tlačítkem** na ně a stiskněte **2**, tím si to poznamenáte tužkou.","textTouch":"V jeho sloupci už je 3, takže tohle políčko může být jen 2. Klepněte na ně, zapněte **✎** na klávesnici a klepněte na **2**, tím si to poznamenáte tužkou."},"step5":{"text":"Poznámka není odpověď. **Klikněte levým tlačítkem** na totéž políčko a stiskněte **2**, ať to platí naostro.","textTouch":"Poznámka není odpověď. Políčko je pořád vybrané, takže klepnutím na **✎** vypněte tužku a pak klepněte na **2**, ať to platí naostro."},"step6":{"text":"Zbývá jedno políčko. Klikněte na ně a stiskněte **3**, tím čtverec dokončíte.","textTouch":"Zbývá jedno políčko. Klepněte na ně a pak na **3** na klávesnici, tím čtverec dokončíte."},"step7":{"text":"Vyřešeno! **Zpět** vezme číslici zpátky a **Vyřešit** doplní řešení, když vás hlavolam přemůže.","textTouch":"Vyřešeno! **Zpět** vezme číslici zpátky, **Poznámky** a **Tip** vepíšou tužkou možnosti a **Vyřešit** doplní řešení, když vás hlavolam přemůže."}},"unruly":{"step1":{"text":"Obarvěte každé políčko černě nebo bíle. Každý řádek a sloupec potřebuje **tři od každé barvy** a žádná barva nesmí stát **třikrát za sebou**. Tři políčka jsou zatím nerozhodnutá."},"step2":{"text":"Tenhle řádek už má svá tři bílá políčka, takže to nerozhodnuté musí být černé. **Klikněte levým tlačítkem** na ně: kliknutí levým tlačítkem maluje černě."},"step3":{"text":"Tenhle řádek už má tři černá políčka, takže to nerozhodnuté je bílé. **Klikněte pravým tlačítkem** na ně – pravé tlačítko jde opačným pořadím a maluje nejdřív bíle."},"step4":{"text":"Poslední nerozhodnuté políčko má nalevo dvě černá a třetí v řadě není dovolené. **Klikněte pravým tlačítkem** na ně, obarvíte ho bíle a mřížka je hotová."},"step5":{"text":"Vyřešeno! Dalším kliknutím na obarvené políčko přepnete na druhou barvu a pak zpátky na nerozhodnuto, a **Zpět** vás provede tahy pozpátku."}},"untangle":{"step1":{"text":"Na kružnici sedí šest bodů spojených osmi čarami. Dvě dvojice se kříží – to jsou ty červené. Přetahujte body, dokud žádná červená nezbude."},"step2":{"text":"Nejdřív klikněte na **Přichytit**, tlačítko s mřížkou vedle tlačítka Zpět (nebo stiskněte **G**). Tím zapnete přichytávací mřížku, takže puštěný bod přistane na některé ze slabých teček uprostřed políček."},"step3":{"text":"**Přetáhněte** bod na vrcholu kružnice do prázdného políčka v **levém horním rohu**.","textTouch":"**Přetáhněte** bod na vrcholu kružnice do prázdného místa v **levém horním rohu** hrací plochy. Nemusí přistát nikde přesně – stačí, aby zmizelo křížení."},"step4":{"text":"Zbývá jedno křížení, tamhle vpravo. **Přetáhněte** nejnižší bod do prázdného **pravého dolního rohu**.","textTouch":"Zbývá jedno křížení, tamhle vpravo. **Přetáhněte** nejnižší bod do prázdného **pravého dolního rohu** – poslední červená čára zmizí, jakmile bude volno."},"step5":{"text":"Rozpleteno. **Vyřešit** vám každou motanici rozmotá a šipky posouvají kurzor od bodu k bodu, přičemž Enter bod zvedne a zase položí.","textTouch":"Rozpleteno. Červené jsou ty čáry, které se pořád kříží, takže přetahujte dál, dokud žádná nezbude – nebo motanici rozmotejte tlačítkem **Vyřešit**."}}}'),Q=JSON.parse(`{"4-way rotational symmetry needs a square grid":"Čtyřsměrná rotační symetrie vyžaduje čtvercovou mřížku","A 2×2 grid is too small to make a puzzle from":"Mřížka 2×2 je na hlavolam příliš malá","A cube rolling along a single row can never turn over all six faces":"Krychle kutálená po jediném řádku nikdy nevystřídá všech šest stěn","A given piece leaves the grid":"Zadaný dílek vede mimo mřížku","A jigsaw block is too big":"Jeden z bloků Jigsaw je příliš velký","A jigsaw block is too small":"Jeden z bloků Jigsaw je příliš malý","A killer cage is too big":"Jedna z klecí je příliš velká","A killer cage is too small":"Jedna z klecí je příliš malá","A wrapping puzzle needs a width and height of at least 3 to have a unique solution":"Hlavolam s přechodem přes okraje potřebuje šířku i výšku alespoň 3, aby měl jediné řešení","All parameters must be whole numbers":"Všechny parametry musí být celá čísla","Already solved":"Už je vyřešeno","An edge cannot join a point to itself":"Hrana nemůže spojovat bod sám se sebou","Angle offset out of bounds.":"Posun úhlu je mimo rozsah.","At least one grid dimension must be greater than zero":"Alespoň jeden rozměr mřížky musí být větší než nula","At least one of width and height for this grid type must be at least {0}":"U tohoto typu mřížky musí být šířka nebo výška alespoň {0}","At least one of width and height must be greater than one":"Šířka nebo výška musí být větší než jedna","Bad character in grid description":"Chybný znak v popisu mřížky","Bad mine layout in game description":"Chybné rozložení min v popisu hry","Badly formatted move limit after grid description":"Chybně zapsaný limit tahů za popisem mřížky","Barrier probability must be a number between 0 and 1":"Pravděpodobnost bariér musí být číslo mezi 0 a 1","Barrier probability must be between 0 and 1":"Pravděpodobnost bariér musí být mezi 0 a 1","Blue cells are placed where some faces could never reach them":"Modrá políčka leží tam, kam se některé stěny nikdy nedostanou","Both dimensions must be at least 2":"Oba rozměry musí být alespoň 2","Both grid dimensions must be at least one":"Oba rozměry mřížky musí být alespoň jedna","Bridges per direction must be between 1 and {0}":"Počet mostů na jeden směr musí být mezi 1 a {0}","Can't create {0}×{1} puzzles":"Hlavolam o rozměrech {0}×{1} nelze vytvořit","Clue did not provide 2 direction flags":"Vodítko neobsahuje 2 příznaky směru","Clue is larger than the number of sides of its face":"Vodítko je větší než počet stran své plochy","Clue is missing its number":"Vodítku chybí číslo","Clue number out of range":"Číslo vodítka je mimo rozsah","Colour out of range":"Barva je mimo rozsah","Colour out of range in grid description":"Barva mimo rozsah v popisu mřížky","Colours, pegs and guesses must be whole numbers":"Barvy, kolíky a pokusy musí být celá čísla","Column counts inconsistent":"Počty ve sloupcích si odporují","Could not four-colour the map":"Mapu se nepodařilo obarvit čtyřmi barvami","Count is larger than the line it describes":"Počet je větší než řada, kterou popisuje","Description contains a duplicate number":"Popis obsahuje duplicitní číslo","Description contains a number larger than the grid":"Popis obsahuje číslo větší než mřížka","Description contains a number out of range":"Popis obsahuje číslo mimo rozsah","Description contains a number that is too large":"Popis obsahuje příliš velké číslo","Description contains a repeated number":"Popis obsahuje opakované číslo","Description contains an unexpected character":"Popis obsahuje neočekávaný znak","Description contains invalid characters":"Popis obsahuje neplatné znaky","Description is corrupted":"Popis je poškozený","Description is longer than expected":"Popis je delší, než se čekalo","Description is shorter than expected":"Popis je kratší, než se čekalo","Description is too long":"Popis je příliš dlouhý","Description is too short":"Popis je příliš krátký","Description marks cells beyond the grid as blue":"Popis označuje jako modrá i políčka mimo mřížku","Description may only contain P, H and O":"Popis smí obsahovat jen P, H a O","Description must be a comma-separated list of numbers":"Popis musí být seznam čísel oddělených čárkami","Description must be exactly {0} characters":"Délka popisu musí být přesně {0}","Description must be hex digits, a comma and a cell number":"Popis musí být šestnáctkové číslice, čárka a číslo políčka","Description must be numbers each followed by an orientation letter (u, l, d or r)":"Popis musí být čísla, za každým písmeno směru (u, l, d nebo r)","Description must be two hex strings separated by a comma":"Popis musí být dva šestnáctkové řetězce oddělené čárkou","Description must be {0} hexadecimal digits":"Popis musí mít tento počet šestnáctkových číslic: {0}","Description must contain at least one edge":"Popis musí obsahovat alespoň jednu hranu","Description must contain at least one peg":"Popis musí obsahovat alespoň jeden kolík","Description must contain at least two islands":"Popis musí obsahovat alespoň dva ostrovy","Description must contain each number from 1 to {0} exactly once":"Popis musí obsahovat každé číslo od 1 do {0} právě jednou","Description must contain each row number from 1 to {0} exactly {1} times":"Popis musí obsahovat každé číslo řádku od 1 do {0} právě {1}×","Description must contain only digits":"Popis smí obsahovat jen číslice","Description must contain only numbers":"Popis smí obsahovat jen čísla","Description must contain {0} numbers":"Počet čísel v popisu musí být {0}","Description must contain {0} tiles":"Počet dlaždic v popisu musí být {0}","Description must mark exactly {0} cells blue":"Počet modrých políček v popisu musí být přesně {0}","Description must start with {0} hex digits":"Popis musí začínat šestnáctkovými číslicemi (počet: {0})","Description places two islands next to each other":"Popis umisťuje dva ostrovy vedle sebe","Description repeats a colour although duplicates are disallowed":"Popis opakuje barvu, ačkoli opakování není povoleno","Description too long":"Popis je příliš dlouhý","Description too long for board size":"Popis je na tuto velikost hrací plochy příliš dlouhý","Description too short":"Popis je příliš krátký","Description too short for board size":"Popis je na tuto velikost hrací plochy příliš krátký","Digits in a {0}×{1} puzzle cannot exceed {2}":"Číslice v hlavolamu {0}×{1} nesmí přesáhnout {2}","Disallowing duplicates requires at least as many colours as pegs":"Bez opakování musí být barev alespoň tolik jako kolíků","Domino descriptions inconsistent":"Popisy domin si odporují","Dots too close together":"Tečky jsou příliš blízko u sebe","Duplicate edge in game description":"Duplicitní hrana v popisu hry","Edge list defines the wrong number of regions":"Seznam hran určuje špatný počet oblastí","Entrance square must contain a piece leaving the left edge":"Vstupní políčko musí obsahovat dílek vedoucí přes levý okraj","Every killer cage must have exactly one sum":"Každá klec musí mít právě jeden součet","Exit square must contain a piece leaving the bottom edge":"Výstupní políčko musí obsahovat dílek vedoucí přes dolní okraj","Expansion factor must be a number":"Faktor roztažení musí být číslo","Expansion factor may not be negative":"Faktor roztažení nesmí být záporný","Expansion factor must be from 0 to 100":"Faktor rozšíření musí být od 0 do 100","Expected ',' after block structure description":"Za strukturou bloků se očekávala ','","Expected ',' after grid description":"Za popisem mřížky se očekává ','","Expected a list of edges like 0-1,1-2 in game description":"V popisu hry se očekává seznam hran jako 0-1,1-2","Expected comma before clue list":"Před seznamem vodítek se očekává čárka","Expected jigsaw block structure in game description":"V popisu hry se očekává struktura nepravidelných bloků","Expected killer cage structure in game description":"V popisu hry se očekává struktura klecí","Expected killer clue grid in game description":"V popisu hry se očekává mřížka součtů klecí","Expected slashes between clues":"Mezi vodítky se očekávají lomítka","Expecting number in game description":"V popisu hry se očekává číslo","Extra moves must not be negative":"Počet tahů navíc nesmí být záporný","Extreme puzzles with more than {0} symbols take too long to generate":"Extrémní hlavolamy s více než {0} symboly se generují příliš dlouho","Faulty game description":"Vadný popis hry","Flags contradicting each other":"Příznaky si odporují","Flags go off grid":"Příznaky míří mimo mřížku","Game ID must include parameters":"ID hry musí obsahovat parametry","Game description contained unexpected characters":"Popis hry obsahoval neočekávané znaky","Game description contains an unexpected character":"Popis hry obsahuje neočekávaný znak","Game description contains no dots":"Popis hry neobsahuje žádné tečky","Game description contains unexpected characters":"Popis hry obsahuje neočekávané znaky","Game description has {0} balls; expected {1}":"Počet koulí v popisu hry: {0}; očekáváno {1}","Game description is corrupted":"Popis hry je poškozený","Game description is longer than expected":"Popis hry je delší, než se čekalo","Game description is shorter than expected":"Popis hry je kratší, než se čekalo","Game description is the wrong length":"Popis hry má špatnou délku","Game description is too long":"Popis hry je příliš dlouhý","Game description is too short":"Popis hry je příliš krátký","Game description is wrong length":"Popis hry má špatnou délku","Game description longer than expected":"Popis hry je delší, než se čekalo","Game description must be hexadecimal":"Popis hry musí být šestnáctkový","Game description shorter than expected":"Popis hry je kratší, než se čekalo","Game description too long":"Popis hry je příliš dlouhý","Game is already solved":"Hra je už vyřešená","Grid area must be at least six squares":"Mřížka musí mít alespoň šest políček","Grid area must be greater than 1":"Plocha mřížky musí být větší než 1","Grid area must be greater than one":"Plocha mřížky musí být větší než jedna","Grid description is the wrong length or not hexadecimal":"Popis mřížky má špatnou délku nebo není šestnáctkový","Grid description strings not used with this grid type":"Tento typ mřížky popisy mřížky nepoužívá","Grid dimensions cannot be negative":"Rozměry mřížky nesmí být záporné","Grid dimensions must be at most {0}":"Rozměry mřížky smí být nejvýše {0}","Grid dimensions must be whole numbers":"Rozměry mřížky musí být celá čísla","Grid is too big":"Mřížka je příliš velká","Grid must contain at least two squares":"Mřížka musí mít alespoň dvě políčka","Grid size must be between 3 and 9":"Velikost mřížky musí být mezi 3 a 9","Grid size must be between {0} and {1}":"Velikost mřížky musí být mezi {0} a {1}","Hard and Extreme puzzles are limited to a maximum number of {0}":"Hlavolamy s obtížností Těžká a Extrémní mají nejvyšší číslo omezené na {0}","Height must be at least 3":"Výška musí být alespoň 3","Height must be at least five":"Výška musí být alespoň pět","Height must be at least one":"Výška musí být alespoň jedna","Height must be at least the rotating block size":"Výška musí být alespoň jako velikost otáčeného bloku","Height must be at least two":"Výška musí být alespoň dva","Illegal grid type":"Neplatný typ mřížky","Incorrect number balance in game description":"Nesprávná bilance čísel v popisu hry","Initial x-coordinate was out of range":"Počáteční souřadnice x byla mimo rozsah","Initial y-coordinate was out of range":"Počáteční souřadnice y byla mimo rozsah","Internal error: solution is badly formatted":"Vnitřní chyba: řešení má chybný formát","Invalid character in block structure specification":"Neplatný znak v zápisu struktury bloků","Invalid character in game description":"Neplatný znak v popisu hry","Invalid character in grid specification":"Neplatný znak v zápisu mřížky","Invalid character in number list":"Neplatný znak v seznamu čísel","Invalid characters in game description":"Neplatné znaky v popisu hry","Invalid format grid description string.":"Neplatný formát řetězce s popisem mřížky.","Invalid parameters: {0}":"Neplatné parametry: {0}","Invalid syntax in game description":"Neplatná syntaxe v popisu hry","Jigsaw puzzles with more than {0} symbols take too long to generate":"Jigsaw hlavolamy s více než {0} symboly se generují příliš dlouho","Killer puzzle dimensions must be smaller than 10":"Rozměry hlavolamu Killer musí být menší než 10","Malformed pending game description":"Poškozený rozpracovaný popis hry","Matrix description is the wrong length or not hexadecimal":"Popis matice má špatnou délku nebo není šestnáctkový","Maximum face number must be a whole number":"Nejvyšší číslo na kostkách musí být celé číslo","Maximum face number must be at least one":"Nejvyšší číslo na kostkách musí být alespoň jedna","Maximum face number must be at most {0}":"Nejvyšší číslo na kostkách smí být nejvýše {0}","Maximum of 9 colours":"Nejvýše 9 barev","Medium puzzles need more than one bridge per direction, or loops disallowed":"Hlavolamy s obtížností Střední potřebují víc než jeden most na směr, nebo zakázané smyčky","Mines solver opened a mine: inconsistent knowledge":"Řešitel min otevřel minu: nekonzistentní znalosti","Minimum number of balls may not be greater than maximum":"Nejmenší počet koulí nesmí být větší než největší","Missing grid description string.":"Chybí řetězec s popisem mřížky.","Missing separator":"Chybí oddělovač","Monster numbers do not match grid spaces":"Počty příšer neodpovídají volným políčkům mřížky","More than one starting square specified":"Je zadáno víc než jedno startovní políčko","Multiple solutions exist for this puzzle":"Tento hlavolam má víc řešení","Must have at least five regions":"Musí být alespoň pět oblastí","Must have at least one guess":"Musí být alespoň jeden pokus","Must have between {0} and {1} colours":"Barev musí být mezi {0} a {1}","No game set up to solve":"Není připravená žádná hra k vyřešení","No gems specified":"Nejsou zadané žádné drahokamy","No solution exists for this position":"Pro tuto pozici neexistuje řešení","No solution exists for this puzzle":"Pro tento hlavolam neexistuje řešení","No solution found":"Řešení nenalezeno","No starting square specified":"Není zadané startovní políčko","Not enough data in block structure specification":"V zápisu struktury bloků je málo dat","Not enough data in grid description":"V popisu mřížky je málo dat","Not enough data to fill grid":"Na vyplnění mřížky je málo dat","Not enough grid space to place all blue faces":"V mřížce není dost místa pro všechny modré stěny","Not enough jigsaw blocks":"Příliš málo bloků Jigsaw","Not enough killer cages":"Příliš málo klecí","Not enough numbers given after grid specification":"Za zápisem mřížky je zadáno málo čísel","Not enough space to place the solid on an empty cell":"Není dost místa, kam těleso postavit na prázdné políčko","Number of colours must be at least three":"Počet barev musí být alespoň tři","Number of colours must be at least two":"Počet barev musí být alespoň dva","Number of points must be a whole number":"Počet bodů musí být celé číslo","Number of points must be at least {0}":"Počet bodů musí být alespoň {0}","Number of points must be at most {0}":"Počet bodů smí být nejvýše {0}","Number of shuffling moves cannot be negative":"Počet míchacích tahů nesmí být záporný","Number of shuffling moves must be a whole number":"Počet míchacích tahů musí být celé číslo","Number of shuffling moves must be at most 10000":"Počet míchacích tahů smí být nejvýše 10\xA0000","Number of shuffling moves must be at most {0}":"Počet míchacích tahů smí být nejvýše {0}","Number out of range in game description":"Číslo mimo rozsah v popisu hry","Number too large":"Příliš velké číslo","Out-of-range number in game description":"Číslo mimo rozsah v popisu hry","Out-of-range number in grid description":"Číslo mimo rozsah v popisu mřížky","Parameters must be whole numbers":"Parametry musí být celá čísla","Patch coordinates do not identify a usable grid fragment":"Souřadnice výřezu neurčují použitelný kus mřížky","Patch offset out of bounds.":"Posun výřezu je mimo rozsah.","Percentage of black squares must be between 5% and 100%":"Podíl černých políček musí být mezi 5 % a 100 %","Percentage of islands must be from 1% to 30%":"Podíl ostrovů musí být od 1 % do 30 %","Puzzle is inconsistent":"Hlavolam si odporuje","Puzzle is too large":"Hlavolam je příliš velký","Puzzle is too long for unique-rows mode":"Hlavolam je pro režim jedinečných řádků příliš dlouhý","Puzzle is too tall for unique-rows mode":"Hlavolam je pro režim jedinečných řádků příliš vysoký","Puzzle is unsolvable":"Hlavolam je neřešitelný","Puzzle must have one entrance and one exit":"Hlavolam musí mít jeden vstup a jeden výstup","Puzzles with more than {0} symbols take too long to generate":"Hlavolamy s více než {0} symboly se generují příliš dlouho","Random seed must not be empty":"Náhodné semínko nesmí být prázdné","Rotating block size must be at least two":"Velikost otáčeného bloku musí být alespoň dva","Row counts inconsistent":"Počty v řádcích si odporují","Rows of blocks must be at least 1":"Řádků bloků musí být alespoň 1","Scoring system not recognised":"Neznámý způsob bodování","Size and difficulty must be whole numbers":"Velikost a obtížnost musí být celá čísla","Size must be at least 5 for Adjacent puzzles of this difficulty":"Pro hlavolamy typu Sousední musí být při této obtížnosti velikost alespoň 5","Size must be between {0} and {1}":"Velikost musí být mezi {0} a {1}","Solution not known for this puzzle":"Řešení tohoto hlavolamu není známé","Solve operation failed":"Řešení se nezdařilo","Solve operation produced an invalid move":"Řešení vytvořilo neplatný tah","Solver could not finish this grid":"Řešitel tuto mřížku nedokázal dokončit","Solving algorithm cannot complete this puzzle":"Řešicí algoritmus tento hlavolam nedokáže dokončit","Starting cell is outside the grid":"Startovní políčko leží mimo mřížku","Subtraction and division blocks must have area 2":"Bloky s odčítáním a dělením musí mít plochu 2","That grid has too many faces to generate":"Ta mřížka má příliš mnoho ploch, nelze ji vygenerovat","The Cross board is only available at {0}×{1}":"Hrací plocha „Kříž“ je k dispozici jen ve velikosti {0}×{1}","The Octagon board is only available at {0}×{1}":"Hrací plocha „Osmiúhelník“ je k dispozici jen ve velikosti {0}×{1}","The ball has hit a mine; undo that move first":"Kulička narazila na minu; nejdřív ten tah vraťte zpět","The grid can have at most {0} squares":"Počet políček mřížky smí být nejvýše {0}","The grid may have at most {0} squares":"Počet políček mřížky smí být nejvýše {0}","The initial square contains a mine":"Na startovním políčku je mina","The solid cannot start on a blue cell":"Těleso nemůže začínat na modrém políčku","The solution has already been revealed":"Řešení už bylo odhaleno","There must be at least one ball":"Musí tu být alespoň jedna koule","There must be at least one mine":"Musí tu být alespoň jedna mina","This arrangement cannot be solved":"Toto rozestavení nejde vyřešit","This game does not support the Solve operation":"Tahle hra funkci Vyřešit nepodporuje","This puzzle has no solution":"Tento hlavolam nemá řešení","This puzzle instance contains a contradiction":"Toto zadání hlavolamu obsahuje spor","This puzzle is not self-consistent":"Tento hlavolam si sám odporuje","Too few clues for block structure":"Na tuto strukturu bloků je vodítek příliš málo","Too few clues for grid size":"Na tuto velikost mřížky je vodítek příliš málo","Too little data in clue list":"V seznamu vodítek je málo dat","Too little data in edge list":"V seznamu hran je málo dat","Too many balls to fit in the grid":"Tolik koulí se do mřížky nevejde","Too many clues for block structure":"Na tuto strukturu bloků je vodítek příliš mnoho","Too many clues for grid size":"Na tuto velikost mřížky je vodítek příliš mnoho","Too many colours (at most {0})":"Příliš mnoho barev (nejvýše {0})","Too many colours makes given grid size impossible":"Při tolika barvách zadaná velikost mřížky nejde vytvořit","Too many guesses (at most {0})":"Příliš mnoho pokusů (nejvýše {0})","Too many jigsaw blocks":"Příliš mnoho bloků Jigsaw","Too many killer cages":"Příliš mnoho klecí","Too many mines for grid size":"Na tuto velikost mřížky je min příliš mnoho","Too many pegs per guess (at most {0})":"Příliš mnoho kolíků na jeden pokus (nejvýše {0})","Too many regions to fit in grid":"Tolik oblastí se do mřížky nevejde","Too much data in block structure specification":"V zápisu struktury bloků je příliš mnoho dat","Too much data in clue list":"V seznamu vodítek je příliš mnoho dat","Too much data in edge list":"V seznamu hran je příliš mnoho dat","Too much data to fill grid":"Na vyplnění mřížky je příliš mnoho dat","Too much data to fit in grid":"Tolik dat se do mřížky nevejde","Trivial solutions are uninteresting":"Triviální řešení nejsou zajímavá","Unable to build a grid for these parameters":"Pro tyto parametry se nepodařilo sestavit mřížku","Unable to build this grid":"Tuto mřížku se nepodařilo sestavit","Unable to find a solution for this puzzle":"Pro tento hlavolam se nepodařilo najít řešení","Unable to find a solution from this position":"Z této pozice se nepodařilo najít řešení","Unable to find a solution to this puzzle":"Řešení tohoto hlavolamu se nepodařilo najít","Unable to find a unique solution for this puzzle":"Pro tento hlavolam se nepodařilo najít jediné řešení","Unable to generate a puzzle of this size":"Hlavolam této velikosti se nepodařilo vygenerovat","Unable to generate a puzzle with these parameters":"S těmito parametry se nepodařilo vygenerovat hlavolam","Unable to solve this puzzle":"Tento hlavolam se nepodařilo vyřešit","Unable to support more than {0} distinct symbols":"Počet různých symbolů smí být nejvýše {0}","Unable to work out any more of this puzzle":"Víc už z tohoto hlavolamu odvodit nejde","Unexpected additional character at end of game description":"Neočekávaný znak navíc na konci popisu hry","Unexpected additional data at end of game description":"Neočekávaná data navíc na konci popisu hry","Unexpected character '{0}' in description":"Neočekávaný znak „{0}“ v popisu","Unexpected character in clue list":"Neočekávaný znak v seznamu vodítek","Unexpected character in edge list":"Neočekávaný znak v seznamu hran","Unexpected data at end of game description":"Neočekávaná data na konci popisu hry","Unknown board type":"Neznámý typ hrací plochy","Unknown character in description":"Neznámý znak v popisu","Unknown difficulty":"Neznámá obtížnost","Unknown difficulty level":"Neznámá úroveň obtížnosti","Unknown difficulty rating":"Neznámé hodnocení obtížnosti","Unknown shape type":"Neznámý typ tvaru","Unknown symmetry":"Neznámá symetrie","Unknown symmetry type":"Neznámý typ symetrie","Unrecognised character in game description":"Nerozpoznaný znak v popisu hry","Unrecognised characters in game description":"Nerozpoznané znaky v popisu hry","Unrecognised clue type":"Nerozpoznaný typ vodítka","Unrecognised grid description.":"Nerozpoznaný popis mřížky.","Unrecognised solid type":"Nerozpoznaný typ tělesa","Width and height cannot both be two":"Šířka a výška nemohou být obě dva","Width and height for this grid type must both be at least {0}":"U tohoto typu mřížky musí být šířka i výška alespoň {0}","Width and height must be at least two":"Šířka a výška musí být alespoň dva","Width and height must be at least {0}":"Šířka a výška musí být alespoň {0}","Width and height must be at most twelve":"Šířka a výška smí být nejvýše dvanáct","Width and height must be at most {0}":"Šířka a výška smí být nejvýše {0}","Width and height must be at most {0} to generate a puzzle":"Aby šel hlavolam vygenerovat, smí být šířka a výška nejvýše {0}","Width and height must be positive":"Šířka a výška musí být kladné","Width and height must be whole numbers":"Šířka a výška musí být celá čísla","Width and height must both be at least 3":"Šířka i výška musí být alespoň 3","Width and height must both be at least four":"Šířka i výška musí být alespoň čtyři","Width and height must both be at least one":"Šířka i výška musí být alespoň jedna","Width and height must both be at least two":"Šířka i výška musí být alespoň dva","Width and height must both be even":"Šířka i výška musí být sudé","Width and height must both be greater than three":"Šířka i výška musí být větší než tři","Width and height must both be greater than two":"Šířka i výška musí být větší než dva","Width and height must both be greater than zero":"Šířka i výška musí být větší než nula","Width and height must both be positive":"Šířka i výška musí být kladné","With three colours, a solvable grid may have at most {0} squares":"Se třemi barvami smí mít řešitelná mřížka nejvýše {0} polí","Width must be at least 3":"Šířka musí být alespoň 3","Width must be at least five":"Šířka musí být alespoň pět","Width must be at least one":"Šířka musí být alespoň jedna","Width must be at least the rotating block size":"Šířka musí být alespoň jako velikost otáčeného bloku","Width must be at least two":"Šířka musí být alespoň dva","Width, height and ball counts must be whole numbers":"Šířka, výška a počty koulí musí být celá čísla","Width, height and difficulty must be whole numbers":"Šířka, výška a obtížnost musí být celá čísla","Width, height and number of colours must be whole numbers":"Šířka, výška a počet barev musí být celá čísla","Width, height, block size and move count must be whole numbers":"Šířka, výška, velikost bloku a počet tahů musí být celá čísla","X puzzles need at least four symbols":"Hlavolamy X potřebují alespoň čtyři symboly","X-diagonal jigsaw puzzles with more than {0} symbols take too long to generate":"Jigsaw hlavolamy s diagonálami X a více než {0} symboly se generují příliš dlouho","You have hit a mine; undo that move first":"Šlápli jste na minu; nejdřív ten tah vraťte zpět","a cell may be a number position for only one rectangle":"políčko může nést číslo jen pro jeden obdélník","at least one column contains more numbers than will fit":"alespoň jeden sloupec obsahuje víc čísel, než se do něj vejde","at least one row contains more numbers than will fit":"alespoň jeden řádek obsahuje víc čísel, než se do něj vejde","cells are not adjacent":"políčka spolu nesousedí","domino layout: no path between singletons":"rozložení domin: mezi osamocenými políčky nevede cesta","domino layout: stranded square cannot be paired":"rozložení domin: osamocené políčko nelze spárovat","dot touches the outside twice":"tečka se dvakrát dotýká vnějšku","dot with fewer than two edges":"tečka s méně než dvěma hranami","edge does not follow its face":"hrana nekopíruje svou plochu","edge shared by three faces":"hranu sdílejí tři plochy","expected CxR or Nj":"očekáváno CxR nebo Nj","expected WxH":"očekáváno WxH","expected WxHnN":"očekáváno WxHnN","expected a grid size":"očekávána velikost mřížky","expected a maximum number":"očekáváno nejvyšší číslo","expected a number of points":"očekáván počet bodů","expected a solid letter followed by WxH":"očekáváno písmeno tělesa a za ním WxH","expected something like c6p4g10Bm":"očekáváno něco jako c6p4g10Bm","expected w<W>h<H>m<MIN>M<MAX>":"očekáváno w<W>h<H>m<MIN>M<MAX>","generateKeen: solver disagrees with the square":"generateKeen: řešitel nesouhlasí s políčkem","grid inconsistency while walking round a face":"nekonzistentní mřížka při obcházení plochy","inconsistent clues while assembling":"nekonzistentní vodítka při sestavování","inconsistent distance field":"nekonzistentní pole vzdáleností","inconsistent face classes":"nekonzistentní třídy ploch","latin rectangle could not be extended":"latinský obdélník nelze rozšířit","latinGenerate: no extension found":"latinGenerate: nenalezeno žádné rozšíření","latinSquare: rectangle could not be extended":"latinSquare: obdélník nelze rozšířit","line too long for solver":"řada je pro řešitele příliš dlouhá","no clue left to place":"nezbylo žádné vodítko k umístění","no such laser: {0}":"takový laser neexistuje: {0}","rolled solid does not fit its destination":"překulené těleso se do cíle nevejde","shown":"odhaleno","too few row/column specifications":"příliš málo zápisů řádků/sloupců","too many row/column specifications":"příliš mnoho zápisů řádků/sloupců","unrecognised character in game description":"nerozpoznaný znak v popisu hry","yes!":"ano!","9×9 Extreme puzzles take too long to generate; try 8×8 or Expert":"Hlavolamy 9×9 s obtížností Extrémní se generují příliš dlouho; zkuste 8×8 nebo Expertní"}`),$=[[`kliknutí levým i pravým tlačítkem`,`klepnutí i dlouhé klepnutí`],[`kliknutím levým i pravým tlačítkem`,`klepnutím i dlouhým klepnutím`],[`přetáhněte pravým tlačítkem`,`dlouze klepněte a přetáhněte`],[`táhněte pravým tlačítkem`,`dlouze klepněte a táhněte`],[`tažením pravým tlačítkem`,`dlouhým klepnutím a tažením`],[`tažení pravým tlačítkem`,`dlouhé klepnutí a tažení`],[`klikněte pravým tlačítkem`,`dlouze klepněte`],[`kliknutím pravým tlačítkem`,`dlouhým klepnutím`],[`kliknutí pravým tlačítkem`,`dlouhé klepnutí`],[`kliknete pravým tlačítkem`,`dlouze klepnete`],[`klikněte prostředním tlačítkem`,`klepněte dvěma prsty`],[`kliknutím prostředním tlačítkem`,`klepnutím dvěma prsty`],[`kliknutí prostředním tlačítkem`,`klepnutí dvěma prsty`],[`klikněte levým tlačítkem`,`klepněte`],[`kliknutím levým tlačítkem`,`klepnutím`],[`kliknutí levým tlačítkem`,`klepnutí`],[`pravým tlačítkem`,`dlouhým klepnutím`],[`prostředním tlačítkem`,`klepnutím dvěma prsty`],[`levým tlačítkem`,`klepnutím`],[`pravé tlačítko`,`dlouhé klepnutí`],[`prostřední tlačítko`,`klepnutí dvěma prsty`],[`obě tlačítka`,`obě gesta`],[`dvojklikem`,`dvojitým klepnutím`],[`dvojklik`,`dvojité klepnutí`],[`nekliknete`,`neklepnete`],[`klikněte`,`klepněte`],[`kliknete`,`klepnete`],[`kliknout`,`klepnout`],[`klikáním`,`klepáním`],[`klikání`,`klepání`],[`kliknutím`,`klepnutím`],[`kliknutí`,`klepnutí`],[`klikat`,`klepat`],[`klikli`,`klepli`]],Fe={$locale:`cs`,$name:q,$dir:`ltr`,ui:J,status:Y,games:X,tutorials:Z,messages:Q,touchPhrases:$};export{g as A,ee as B,A as C,S as D,w as E,o as F,i as I,oe as L,f as M,u as N,b as O,c as P,ie as R,M as S,E as T,t as V,H as _,Ee as a,I as b,be as c,me as d,fe as f,W as g,se as h,Oe as i,m as j,v as k,ve as l,ce as m,Me as n,we as o,ue as p,Ae as r,Se as s,Pe as t,ge as u,B as v,O as w,P as x,R as y,ne as z};
//# sourceMappingURL=i18n-cs-BZ0t_RzD.js.map