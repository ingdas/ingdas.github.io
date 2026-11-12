import{t as e}from"./index-DIYwYEVR.js";var t=e({default:()=>n}),n="## Comandi comuni\n\n- **Nuovo** prepara un altro rompicapo e **Ricomincia** riporta questo all’inizio;\n  **Annulla** e **Ripeti** ripercorrono le tue mosse, e anche **Ricomincia** si può\n  annullare.\n- **Risolvi** mostra la soluzione, nei rompicapi che ne hanno una. Conta come una mossa,\n  quindi puoi annullarla.\n- **Fai clic destro** per la seconda azione, che nella maggior parte dei rompicapi è\n  segnare, mettere una bandierina o girare al contrario. La terza, dove c’è, si fa con il\n  **clic centrale**.\n- **Tipo** passa da una dimensione o difficoltà predefinita all’altra; con\n  **Personalizzato…** scegli le tue.\n- **Condividi** mostra i codici da mandare a qualcuno perché giochi esattamente questo\n  rompicapo.\n\n### Tastiera (Keyboard)\n\n- **Nuova partita**: `N` · **Annulla**: `U` o `Ctrl+Z` · **Ripeti**: `R` o `Ctrl+Y`\n- **Risolvi**: `Ctrl+S` (dove disponibile). **Questo aiuto**: `?`, e `Esc` lo chiude. **Pausa**: `Esc`.\n- Nella maggior parte dei rompicapi i tasti freccia spostano un cursore sul tabellone,\n  `Enter` fa da clic sinistro e `Space` da clic destro.\n- Nei menu i tasti freccia passano da una carta o da un pulsante al successivo, `Enter`\n  sceglie e `Esc` torna indietro.\n- Funziona anche un controller: la croce direzionale sposta, `A` sceglie o fa clic, `X` è\n  il clic destro, `B` torna indietro, `Start` mette in pausa, `LB` e `RB` annullano e\n  ripetono, e `Y` dà un suggerimento.\n  Nei rompicapi in cui si scrivono numeri, `RT` porta ai tasti sullo schermo e ritorno.\n",ee=e({default:()=>te}),te=`## Su uno schermo tattile

- **Tocca** per l’azione principale e **tieni premuto** per la seconda. Dove un rompicapo ne
  ha una terza, tocca con **due dita**.
- Il primo pulsante rotondo nella barra degli strumenti (un punto in un quadrato) scambia le
  due azioni, così quella che usi di più è sempre a un tocco di distanza; finché sono
  scambiate, mostra una bandierina accesa. A quel punto il tocco prolungato fa l’altra.
- **Allarga con due dita** il tabellone per ingrandire le caselle di una griglia grande,
  poi **trascina con due dita** per spostarti. Avvicina le dita per rivedere tutto il
  rompicapo. Nel menu **Pausa** ci sono anche i pulsanti **−** e **+** per fare lo stesso.
- **Pausa** contiene il resto dei comandi: il tipo di rompicapo, nuovo rompicapo, ricomincia,
  risolvi, condividi e le Impostazioni di suono e lingua. Finché il menu è aperto, l’orologio si ferma.
`,ne=e({default:()=>re}),re=`# Scatola nera

Alcune palline sono nascoste dentro una scatola ombreggiata. Tutt’attorno alla scatola corre
una cornice di porte laser. Spara un laser nella scatola da una porta qualsiasi e guarda
che cosa ne esce: deduci dai risultati dove devono trovarsi le palline, segnane la posizione e
poi fai verificare la tua risposta.

Un raggio viaggia in linea retta finché una pallina non gli si mette di traverso:

- Una pallina proprio davanti **assorbe** il raggio. La porta mostra **H** (hit, un colpo).
- Una pallina in diagonale davanti **devia** il raggio di 90° allontanandolo dalla pallina. Con
  una pallina su entrambe le diagonali il raggio torna indietro di netto. Le deviazioni
  possono concatenarsi, così un raggio può vagare parecchio prima di uscire.
- Un raggio che riesce dalla stessa porta da cui è entrato è **riflesso**, indicato con una
  **R**. Lo è anche un raggio che verrebbe deviato prima ancora di entrare nella scatola,
  perché una pallina si trova in diagonale accanto al suo ingresso.
- Altrimenti il raggio esce da un’altra parte e le due porte ricevono lo stesso **numero**
  (e lo stesso colore), così vedi da dove ogni tiro è entrato ed è uscito.

Quando hai segnato il numero giusto di palline, nell’angolo in alto a sinistra compare un
pulsante verde. Fai clic per verificare. La tua disposizione conta come corretta se nessun
laser saprebbe distinguerla da quella del computer: con più palline ci può essere più di una
disposizione che si comporta allo stesso modo, e vince una qualsiasi di esse.

Una disposizione sbagliata chiude la partita e mostra la risposta, quindi verifica solo
quando sei sicuro: le palline che hai trovato sono nere, i segni sbagliati sono barrati in
rosso, le palline mancate sono rosse, ogni laser che hai sparato e che la tua disposizione
sbaglia viene cerchiato, e i laser che non hai mai sparato e che avrebbero distinto le due
disposizioni vengono sparati adesso e scritti in rosso. Annulla ti riporta indietro per
continuare a provare. Risolvi si arrende e mette al loro posto le palline vere.

## Comandi

La barra di stato conta le palline che hai segnato e i laser che hai sparato, e dopo una
verifica dice quante delle tue palline erano sbagliate e quante ne hai mancate.

### Mouse e tocco

- **Fai clic su una porta** per sparare un laser da lì. Fai clic su una porta già usata per
  illuminare entrambe le estremità di quel raggio; fai clic di nuovo, o in un punto qualsiasi,
  per spegnere la luce.
- **Fai clic dentro la scatola** per segnare lì una pallina; fai clic di nuovo per togliere
  il segno.
- **Fai clic destro su una casella** per **bloccarla**, così non la cambi per sbaglio;
  fai clic destro di nuovo per sbloccarla. Fai clic destro su una porta per bloccare o
  sbloccare l’intera riga o colonna che le sta accanto.
- **Fai clic su quel pulsante nell’angolo** per far verificare i tuoi segni.

### Tastiera (Keyboard)

- **I tasti freccia** muovono un cursore sulla scatola e sulle sue porte.
- **Enter** fa da clic sinistro: spara, segna oppure verifica quando il cursore è sul
  pulsante.
- **Space** fa da clic destro e blocca o sblocca.

## Parametri

- **Larghezza** e **altezza** della scatola. Ogni riga e ogni colonna ha una porta laser a
  entrambe le estremità.
- **N. di palline**: quante palline sono nascoste. Indica un solo numero, oppure un intervallo
  come \`3-6\` per lasciare la scelta al computer; in quel caso devi ricavare anche il
  conteggio, e il pulsante di verifica compare per qualsiasi numero di segni compreso
  nell’intervallo.
`,ie=e({default:()=>ae}),ae=`# Ponti

Sull’acqua sono sparse delle isole, ognuna con un numero. Collegale con dei ponti in modo
che:

- ogni ponte corra dritto in orizzontale o dritto in verticale fra due isole;
- il numero su un’isola dica esattamente quanti ponti la toccano;
- due isole possano essere unite da ponti paralleli, ma non da più di due (questo limite
  si può cambiare nelle impostazioni personalizzate);
- nessun ponte incroci un altro;
- ogni isola sia raggiungibile da ogni altra camminando sui ponti.

Gli errori compaiono in rosso: un’isola con troppi ponti, un’isola che non può più averne
abbastanza (i vicini che le restano sono al completo, oppure le uniche vie sono bloccate
da altri ponti o dai tuoi segni «qui niente ponte»), e un gruppo di isole già completo ma
tagliato fuori dal resto. Se gli anelli non sono ammessi, diventano rossi anche i ponti
che formano un anello.

## Comandi

**Risolvi** inserisce la soluzione, togliendo i ponti che non ne fanno parte.

### Mouse e tocco

- **Trascina** da un’isola verso una vicina per posare un ponte fra le due. Basta muoversi
  quanto serve a rendere chiara la direzione: il ponte si aggancia all’isola più vicina in quel
  senso. Trascina di nuovo per un secondo ponte parallelo; trascinando ancora una volta,
  quando il limite è raggiunto, li togli tutti.
- **Trascina con il destro** allo stesso modo per annotare un segno «qui niente ponte», o
  per cancellarlo.
- **Fai clic su** un’isola per segnarla come finita. Diventa grigia e i suoi ponti si
  bloccano, così non li cambi per sbaglio; fai clic di nuovo per sbloccarla.
- **Gomma** (il pulsante con la gomma accanto ad Annulla) fa sì che trascinare tolga invece di
  posare: trascina da un’isola verso una vicina per togliere tutti i ponti fra le due, o il
  segno «qui niente ponte» che c’è lì. Premilo di nuovo per tornare a posare ponti.
- **Guide** mostra linee tenui ovunque un ponte possa passare, e le nasconde di nuovo.

### Tastiera (Keyboard)

- **I tasti freccia** spostano un cursore da un’isola all’altra.
- **Enter** seguito da una freccia posa un ponte in quella direzione; **Space** seguito da
  una freccia posa un segno. Premendo **Enter** due volte segni l’isola come finita.
- **E** è il pulsante **Gomma** e **G** il pulsante **Guide**.

## Parametri

- **Larghezza** e **altezza** della griglia, almeno 3 ciascuna.
- **Difficoltà**: i rompicapi _Facile_ chiedono solo di guardare un’isola per volta: quando
  i ponti che le mancano riempiono esattamente lo spazio rimasto, o quando il suo numero è
  troppo grande per saltare un vicino. I rompicapi _Medio_ ti fanno ragionare anche sui
  singoli collegamenti: quale ponte deve esserci perché senza di esso l’isola non si può
  completare e, se gli anelli sono vietati, quali collegamenti chiuderebbero un anello. I
  rompicapi _Difficile_ chiedono di guardare un passo più in là: questo ponte completerebbe
  un gruppo di isole tagliato fuori dal resto, o lascerebbe qualche isola senza sbocchi?
  Ogni rompicapo ha esattamente una soluzione.
- **Consenti anelli**: attivo di default. Disattivandolo, la rete finita di ponti deve
  essere un albero — nessun percorso di ponti può riportare al punto di partenza — e il
  rompicapo è costruito in modo da poter essere risolto tenendone conto.
- **Max. ponti per direzione**: il limite di ponti paralleli, di norma 2. Meno ponti
  rendono il gioco più facile.
- **% di caselle isola**: all’incirca quanta parte della griglia diventa isole. Certe
  disposizioni non riescono a contenerne così tante, quindi è un limite massimo.
- **Fattore di espansione**: mentre la mappa cresce, quanto è probabile che una nuova isola
  finisca il più lontano possibile invece che da qualche parte più vicino. Valori alti
  danno rompicapi più radi e facili; valori bassi ne danno di affollati.
`,oe=e({default:()=>r}),r=`# Cubo

Un solido poggia su una griglia e alcune caselle della griglia sono dipinte di blu:
esattamente tante quante sono le facce del solido. Far rotolare il solido lo ribalta oltre
un lato della faccia su cui poggia, così che la faccia successiva scenda sulla casella
accanto. A ogni atterraggio la faccia di sotto e la casella su cui è sceso si scambiano il
colore: se una faccia bianca finisce su una casella blu, il blu se ne va sul solido; se
una faccia blu finisce su una casella bianca, il blu resta lì. Il rompicapo è finito
quando tutte le facce sono blu nello stesso momento. La barra di stato conta i tuoi
rotolamenti, quindi cerca di finire con il minor numero possibile.

La versione classica fa rotolare un cubo su una griglia quadrata. Su una griglia
triangolare puoi far rotolare invece un tetraedro, un ottaedro o un icosaedro. Tieni
presente che ogni faccia di un tetraedro che rotola può raggiungere solo un quarto delle
caselle, e che le facce di un ottaedro si alternano fra i triangoli con la punta in su e
quelli con la punta in giù: le caselle blu sono sempre messe in modo che il rompicapo si
possa finire.

## Comandi

Per questo rompicapo non c’è il pulsante Risolvi. Una volta che tutte le facce sono blu,
puoi continuare a far rotolare il solido in giro senza rovinare nulla.

### Mouse e tocco

- **Fai clic** in un punto qualsiasi per far rotolare il solido di una casella nella
  direzione del puntatore. Su una griglia quadrata significa su, giù, a sinistra o a
  destra; su una griglia triangolare il triangolo attuale ha tre vicini fra cui scegliere.
  Un clic raggiunge ogni vicino del solido, quindi questo da solo basta per giocare su
  tutte le griglie.

### Tastiera (Keyboard)

- **I tasti freccia** fanno rotolare il solido nelle quattro direzioni principali. Su una
  griglia triangolare un triangolo ha un vicino solo sopra oppure solo sotto, quindi
  l’altro tasto verticale non fa nulla.
- **Home**, **Page Up**, **End** e **Page Down** (oppure i tasti d’angolo del tastierino
  numerico, 7, 9, 1 e 3) fanno rotolare in diagonale sulle griglie triangolari, scegliendo
  il lato che in quella direzione si trova più vicino.

## Parametri

- **Tipo di solido**: tetraedro, cubo, ottaedro o icosaedro. Il cubo usa una griglia
  quadrata; gli altri usano una griglia di triangoli.
- **Larghezza / lato superiore** e **Altezza / lato inferiore**: per il cubo, la dimensione
  della griglia quadrata. Per le griglie triangolari sono le lunghezze del lato superiore e
  del lato inferiore di un’arena esagonale (mettendone uno a zero si ottiene un semplice
  triangolo). La griglia deve lasciare posto a tutte le caselle blu più una casella vuota
  di partenza.
`,i=e({default:()=>a}),a=`# Dominosa

Un set completo di tessere del domino — una per ogni coppia di numeri da 0 fino al
massimo, doppi compresi — è stato disposto a riempire un rettangolo. Poi i numeri sono
stati ricopiati e le tessere portate via. Il tuo compito è capire dove stavano: dividi la
griglia in coppie di caselle adiacenti in modo che ogni tessera del set sia usata
esattamente una volta.

Una tessera posata dove la sua coppia di numeri compare già altrove è mostrata in rosso, e
lo stesso vale per una casella scoperta che nessuna tessera può più raggiungere.

## Comandi

Il rompicapo è finito quando ogni casella è coperta e nessuna tessera è rossa. **Risolvi**
posa tutte le tessere della soluzione, cancellando quelle che avevi messo tu.

### Mouse e tocco

- **Fai clic su** un confine fra due numeri adiacenti (o sulla metà di casella più vicina a
  quel confine) per posarci sopra una tessera. Un altro clic sullo stesso confine la
  toglie. Una tessera posata sopra parte di un’altra la sostituisce.
- **Fai clic destro su** un confine per tracciarci sopra una linea a matita, come nota che
  quei due numeri **non** formano una tessera. Fai clic destro di nuovo per cancellare la
  linea. Le linee non si possono tracciare contro una tessera, e posare una tessera
  cancella le linee che la toccano.

### Tastiera (Keyboard)

- **I tasti freccia** muovono un cursore per la griglia, fermandosi al centro delle caselle
  e sui confini fra una casella e l’altra. Su un confine il cursore disegna il contorno
  della tessera che poserebbe.
- **Enter** posa o toglie quella tessera e **Space** traccia o cancella lì una linea.

## Parametri

- **Numero massimo sulle tessere**: le tessere vanno da 0-0 fino a N-N, e la griglia è
  larga (N+2) caselle e alta (N+1), quindi un massimo di 6 dà una griglia 8×7.
- **Difficoltà**: quanto ragionamento serve. I rompicapi **Facilissimo** hanno sempre e solo una
  tessera con un unico posto dove andare, o una casella con un’unica tessera che la può coprire.
  **Facile** aggiunge altri due ragionamenti: ogni modo di coprire questa casella usa la stessa
  tessera, quindi quella tessera non va da nessun’altra parte; e ogni posto in cui questa tessera
  potrebbe andare esclude quel punto. **Difficile** aggiunge il conteggio (una tessera che
  taglierebbe fuori un numero dispari di caselle è impossibile; un insieme di caselle con lo
  stesso numero può rivendicare le tessere che si spartisce) e i rompicapi **Estremo** ti
  chiedono di seguire le conseguenze di una posa finché non portano a una contraddizione. Tutti
  questi hanno esattamente una soluzione. I rompicapi **Ambiguo** non sono controllati affatto:
  possono avere più soluzioni e possono richiedere qualche tentativo alla cieca — basta trovare
  una copertura qualsiasi per vincere.
`,o=e({default:()=>s}),s=`# Quindici

Il classico rompicapo a scorrimento. La griglia è piena di tessere numerate e di uno
spazio vuoto. Fai scorrere le tessere nel vuoto finché i numeri non si leggono in ordine
da sinistra a destra e dall’alto in basso, con il vuoto nell’angolo in basso a destra.

## Comandi

**Risolvi** salta dritto alla disposizione finale. Non ti mostra come arrivarci, ma è un
comodo azzeramento per esercitarti con le manovre standard.

### Mouse e tocco

- **Fai clic su** una tessera qualsiasi che si trovi nella stessa riga o colonna del vuoto
  per farla scorrere al suo posto, insieme a tutto quello che sta fra lei e il vuoto.

### Tastiera (Keyboard)

- **I tasti freccia** fanno scorrere una tessera nel vuoto nella direzione della freccia:
  la **freccia su** sposta in su, dentro il vuoto, la tessera che gli sta sotto.

## Parametri

- **Larghezza** e **altezza** della griglia (il valore predefinito è il classico 4×4).
`,c=e({default:()=>l}),l=`# Riempimento

Alcune caselle della griglia contengono già una cifra; le altre sono vuote. Scrivi una
cifra in ogni casella vuota in modo che ogni gruppo connesso di cifre uguali copra
esattamente tante caselle quante ne dice la cifra: ogni 3 fa parte di un gruppo di tre 3,
ogni 1 sta da solo, e così via. Le caselle contano come connesse solo attraverso i lati,
non attraverso gli angoli. Ne segue che nessuna casella contiene uno 0, che due 1 non
stanno mai fianco a fianco e che nessun gruppo è più grande di nove caselle. Una cifra
data non deve per forza essere l’inizio del suo gruppo: più 4 dati possono finire in un
solo gruppo, e un gruppo può anche non contenere nessuna cifra data.

Linee spesse compaiono fra caselle con cifre diverse e attorno a ogni gruppo che ha già la
dimensione giusta (o è troppo grande). Una cifra diventa rossa quando il suo gruppo è
cresciuto oltre la cifra stessa, oppure quando è stata murata senza più spazio per
raggiungere la sua dimensione. È il rompicapo pubblicato da Nikoli con il nome Fillomino.

## Comandi

Le cifre date sono disegnate a inchiostro e non si possono cambiare; le tue cifre sono
blu. **Risolvi** inserisce la soluzione.

### Mouse e tocco

- **Fai clic su** una casella vuota per selezionarla, poi usa i tasti sullo
  schermo per scriverci dentro una cifra. **⌫** sul tastierino svuota di nuovo la
  selezione.
- **Trascina** su più caselle per selezionarle tutte, così che una sola cifra riempia
  insieme ogni casella selezionata.
- **Fai clic destro su** una casella per aggiungerla alla selezione senza ricominciare da
  capo; fai clic destro di nuovo su una casella selezionata per toglierla dalla selezione.
- **Riempi** (il pulsante accanto ad Annulla) propaga una cifra: trascina da una casella che ne
  contiene una sulle caselle intorno, e quando lasci la presa ricevono tutte quella cifra,
  senza bisogno del tastierino. I clic e i trascinamenti che partono da una casella vuota
  continuano a selezionare. Premilo di nuovo per tornare a selezionare.

### Tastiera (Keyboard)

- Con una o più caselle selezionate, **digita una cifra** per scriverla in tutte quante. La
  cifra \`0\`, oppure **Backspace**, le svuota di nuovo.
- **I tasti freccia** muovono un cursore da tastiera, e una cifra che digiti riempie la
  casella sotto di esso.
- **Space** o **Enter** aggiunge alla selezione la casella sotto il cursore, o la toglie,
  così più caselle si possono riempire con un solo tasto.
- **F** è il pulsante **Riempi**.

## Parametri

- **Larghezza** e **Altezza**: la dimensione della griglia. I gruppi non sono mai più
  grandi del lato più lungo (o di 9), quindi le griglie piccole usano solo cifre piccole.
`,u=e({default:()=>d}),d=`# Ribalta

Una griglia di caselle, alcune accese e altre spente. Il tuo scopo è accenderle tutte
insieme. Premere una casella la ribalta fra accesa e spenta, ma ribalta anche alcune delle
sue vicine: il piccolo schema disegnato su ogni casella mostra esattamente quali. Con le
forme **Croci**, quelle predefinite, ogni pressione ribalta la casella e le sue quattro
vicine ortogonali; con le forme **Casuali** ogni casella ha il suo motivo irregolare,
quindi il rompicapo si gioca in modo diverso ogni volta.

Siccome premere due volte una casella annulla l’effetto, e l’ordine delle pressioni non
conta mai, una soluzione è semplicemente un insieme di caselle da premere una volta
ciascuna.

## Comandi

La barra di stato conta le tue pressioni. **Risolvi** accende tutto il tabellone e
contorna in rosso le caselle che ha premuto per arrivarci. Se poi continui a premere
caselle, i contorni rossi tengono traccia di quali caselle vanno ancora premute per
tornare allo stato finale.

### Mouse e tocco

- **Fai clic su** una casella per premerla.

### Tastiera (Keyboard)

- **I tasti freccia** muovono un cursore per la griglia; **Enter** o **Space** preme la
  casella sotto il cursore.

## Parametri

- **Larghezza** e **altezza** della griglia, da 2 fino a 10 caselle per lato.
- **Tipo di forma**: _Croci_ ribalta ogni casella insieme alle sue vicine ortogonali;
  _Casuale_ dà a ogni casella una forma cresciuta a caso dentro il blocco 3×3 che la
  circonda.
`,f=e({default:()=>p}),p=`# Inondazione

La griglia è un mosaico di caselle colorate a caso. Tu controlli la casella nell’angolo in
alto a sinistra insieme a ogni casella collegata a essa da un percorso dello stesso
colore. Ogni mossa ridipinge tutta quella macchia connessa in un colore a tua scelta, così
anche le caselle vicine di quel colore entrano a far parte della tua macchia. Vai avanti
finché l’intera griglia non è di un colore solo.

Il trucco sta nel limite di mosse. Prima che tu cominci, il gioco risolve da sé la griglia
e ti concede il proprio numero di mosse più qualche mossa di scorta; se esaurisci il
limite prima che la griglia sia uniforme, la partita è persa. Puoi comunque continuare a
riempire per vedere la griglia finita, ma non conta più come vittoria.

## Comandi

La barra di stato mostra quante mosse hai usato sul totale consentito. **Risolvi** lascia
che sia il risolutore a finire la griglia per te: conta come risolto in automatico e non
come una tua vittoria.

### Mouse e tocco

- **Fai clic su** una casella qualsiasi il cui colore sia diverso da quello della tua
  macchia per ridipingere la macchia in quel colore. Un clic su una casella che ha già lo
  stesso colore non fa nulla e non costa una mossa.
- **Aiutino** gioca per te il prossimo colore del risolutore, come una mossa normale che
  puoi annullare. Con qualche aiutino la vittoria, e il suo credito, restano tuoi.

### Tastiera (Keyboard)

- **I tasti freccia** muovono un cursore per la griglia; **Enter** o **Space** ridipinge la
  macchia con il colore sotto il cursore.

## Parametri

- **Larghezza** e **altezza** della griglia, fino a 32 caselle per lato.
- **Colori**: quanti colori usa la griglia, da 3 a 10. Meno colori significano meno scelte
  e una partita più facile.
- **Mosse extra consentite**: il numero di mosse di scorta aggiunte alla lunghezza della
  soluzione del risolutore per formare il limite di mosse. Con 0 devi essere efficiente
  almeno quanto il risolutore; è bravo ma non perfetto, quindi battere il suo conteggio è
  possibile.
`,m=e({default:()=>h}),h=`# Galassie

La griglia è cosparsa di punti, che possono trovarsi al centro di una casella, su una linea
tra due caselle o su un angolo dove quattro si incontrano. Traccia dei muri lungo le linee
della griglia per ritagliarla in regioni, in modo che ogni regione contenga esattamente un
punto e che quel punto ne sia il centro di simmetria: ruota la regione di 180° attorno al
suo punto e deve ricadere esattamente su sé stessa. Ogni casella deve finire in qualche
regione, quindi nessuna regione può restare senza punto.

I rompicapi sono generati a caso con una soluzione unica. È il «Tentai Show» di Nikoli,
noto anche come Spiral Galaxies.

## Comandi

Una regione chiusa e corretta — un solo punto, nel suo centro di simmetria, nessun muro
vagante all’interno — viene ombreggiata. Un punto diventa rosso quando un muro lo
attraversa, o quando è l’unico punto di una regione chiusa che non è simmetrica rispetto a
lui; una regione chiusa che non contiene alcun punto viene tratteggiata. Il rompicapo è
completo quando ogni casella è ombreggiata. **Risolvi** traccia la soluzione completa.

### Mouse e tocco

- **Fai clic su** una linea della griglia per tracciarvi un muro, oppure fai clic su un
  muro per rimuoverlo.
- **Trascina da un punto** dentro una casella per lasciarvi una piccola freccia rivolta verso il
  punto, come promemoria che la casella appartiene alla galassia di quel punto.
- **Trascina con il destro** una freccia esistente per spostarla. Lasciala di nuovo sul suo
  punto, oppure trascinala fuori dalla griglia, per buttarla via; se la lasci su una casella
  che ha già una freccia, prende il posto di quella freccia.

### Tastiera (Keyboard)

- I **tasti freccia** spostano un cursore su caselle, linee e angoli allo stesso modo.
- **Enter** su una linea traccia o rimuove il suo muro; **Enter** su un punto raccoglie una
  freccia, che segue il cursore finché non premi di nuovo **Enter** per lasciarla cadere.

## Parametri

- **Larghezza** e **altezza** della griglia, almeno 3 ciascuna. I preset vanno da 7×7 a
  15×15.
- **Difficoltà** — i rompicapi _Medio_ si risolvono passo dopo passo a partire da ciò che la
  regola di simmetria impone; quelli _Estremo_ possono richiedere di provare un’ipotesi e vedere
  dove porta.
`,g=e({default:()=>_}),_=`# Indovina

Il computer ha nascosto una fila di pioli colorati dietro lo schermo in cima al tabellone.
Il tuo compito è riprodurla esattamente, usando solo i segni che ricevi a ogni tentativo:
un piolo **nero** per ogni piolo del colore giusto al posto giusto, e un piolo **vuoto**
per ogni altro piolo il cui colore compare da qualche altra parte nella fila nascosta. I
segni ti dicono _quanti_ pioli erano giusti, non _quali_. Trova la fila prima di esaurire i
tentativi e lo schermo si solleva; se li esaurisci si solleva comunque, per mostrarti che
cosa ti è sfuggito.

Questo è il gioco venduto dalla Hasbro come _Mastermind_: sei colori, quattro pioli e dieci
tentativi. Ogni impostazione si può cambiare.

## Comandi

**Risolvi** solleva lo schermo e mostra la risposta; così la partita finisce esattamente
come se avessi esaurito i tentativi.

### Mouse e tocco

- **Fai clic su** un colore nel vassoio a sinistra per selezionarlo (l’anello mostra
  quale), poi **fai clic su un foro** della fila corrente per posarvi un piolo di quel
  colore. Anche un clic su un piolo di un tentativo precedente ne seleziona il colore.
- **Trascina** un piolo dal vassoio, da un tentativo precedente o dalla fila corrente
  dentro un foro. Se trascini un piolo fuori dalla fila corrente e lo lasci altrove, lo
  togli.
- **Fai clic destro su** un foro per svuotarlo.
- Quando la fila è completa, la piccola area di valutazione alla sua destra si illumina:
  **fai clic su** quell’area per inviare il tentativo.
- **Fai clic centrale su** un foro per _trattenere_ quel piolo: un piolo trattenuto
  passa nel tentativo successivo dopo la valutazione, il che ti risparmia di ricostruire i
  pioli di cui ti fidi già. Ripeti per liberarlo.
- **Trattieni** (il pulsante accanto ad Annulla) fa lo stesso con un clic normale: finché è attivo,
  un clic su un foro della fila corrente trattiene o libera il suo piolo invece di posare un
  colore. Per cambiare colore usa il vassoio come al solito; premi di nuovo **Trattieni** per
  tornare a posare pioli.
- **Lettere** nel menu di pausa scrive una lettera su ogni piolo, nel caso alcuni colori ti
  sembrino uguali, e poi le toglie di nuovo.

### Tastiera (Keyboard)

- **Tasti freccia**: su e giù scelgono un colore nel vassoio, sinistra e destra spostano un
  cursore lungo la fila corrente e, quando la fila è completa, fino all’area di valutazione.
- **Enter** o **Space** mette il colore selezionato nel foro sotto il cursore, oppure
  invia il tentativo quando il cursore è sull’area di valutazione.
- **Backspace** o \`D\` svuota il foro sotto il cursore.
- \`H\` trattiene o libera il piolo sotto il cursore.
- \`K\` è il pulsante **Trattieni** e \`L\` il pulsante **Lettere**.

## Parametri

- **Colori**: quanti colori diversi può usare la fila nascosta, da 2 a 10. Più colori
  rendono la fila più difficile da inchiodare.
- **Pioli per tentativo**: la lunghezza della fila nascosta.
- **Tentativi**: quante prove hai a disposizione.
- **Consenti spazi vuoti**: ti permette di lasciare fori vuoti in un tentativo. Un foro vuoto
  non può mai corrispondere, quindi così è più facile sondare i colori. La fila nascosta,
  invece, non ha mai vuoti.
- **Consenti duplicati**: permette alla fila nascosta (e ai tuoi tentativi) di usare uno
  stesso colore più di una volta. Disattivarlo riduce parecchio il numero di file possibili.
`,v=e({default:()=>y}),y=`# Inerzia

Sei una pallina su una griglia disseminata di ostacoli e vuoi tutte le gemme del tabellone.
Il guaio è già nel nome: una volta che la pallina comincia a rotolare non si ferma finché
qualcosa non la ferma. Attraversa dritta sia le gemme (raccogliendole al passaggio) sia le
caselle vuote, e si arresta solo quando la casella successiva è un muro o quando finisce su
un fermo. Le mosse diagonali si infilano tra due muri che si toccano solo per un angolo.
Rotolare su una mina è fatale, anche se quella stessa mossa ha raccolto l’ultima gemma.

Ogni rompicapo è generato in modo che tutte le sue gemme si possano raccogliere partendo
dalla casella iniziale, ma niente ti impedisce di rotolare in un angolo del tabellone da
cui qualche gemma non è più raggiungibile. Morire o restare bloccato non comporta altra
penalità che un contatore di morti nella barra di stato: annulla e prova un’altra strada.

## Comandi

**Annulla** dopo aver colpito una mina per riprendere da prima della mossa fatale.
**Risolvi** calcola, dal punto in cui sei, un percorso che raccoglie tutte le gemme rimaste
e ci fa rotolare la pallina per te; Annulla riporta indietro l’intero percorso in un colpo
solo.

### Mouse e tocco

- **Fai clic su** una casella e la pallina parte nella direzione di quella casella rispetto
  a sé stessa, arrotondata alla più vicina delle otto direzioni della bussola — diagonali
  comprese. Funziona anche un clic nel margine fuori dalla griglia, il che è comodo quando
  la pallina è su un bordo.

### Tastiera (Keyboard)

- I **tasti freccia** fanno rotolare la pallina in su, in giù, a sinistra o a destra.
- **Home**, **Page Up**, **End** e **Page Down** la fanno rotolare in diagonale (in alto a
  sinistra, in alto a destra, in basso a sinistra, in basso a destra). Il tastierino
  numerico funziona come appare: 8 è su, 3 è in basso a destra, e così via; anche la fila
  dei numeri fa lo stesso.

## Parametri

- **Larghezza** e **altezza** della griglia. Circa un quinto delle caselle sono muri, un
  quinto fermi, un quinto mine e un quinto gemme.
`,b=e({default:()=>x}),x=`# Keen

Riempi la griglia con cifre da 1 fino alla sua dimensione, in modo che ogni riga e ogni
colonna contengano ciascuna cifra esattamente una volta. La griglia è anche divisa in
«gabbie» dal contorno marcato, ognuna con un piccolo indizio nella casella in alto a
sinistra: un totale e un segno aritmetico. Le cifre della gabbia devono dare quel totale
usando quell’operazione:

- \`7+\` significa che le cifre della gabbia sommate danno 7.
- \`12×\` significa che moltiplicate danno 12.
- \`2−\` sta sempre su una gabbia di due caselle e significa che una cifra supera l’altra di
  2 (in un verso o nell’altro).
- \`3÷\` sta anch’esso su due caselle e significa che una cifra è il triplo dell’altra.

A differenza della modalità Killer di Solo, una gabbia _può_ contenere due volte la stessa
cifra, purché le due copie non siano nella stessa riga o colonna. Non ci sono cifre già
date; gli indizi sono tutto quello che hai, e ogni rompicapo ha esattamente una soluzione.
È il rompicapo pubblicato con il nome di KenKen.

## Comandi

Una cifra che compare due volte nella sua riga o nella sua colonna diventa rossa, e così
l’indizio di una gabbia riempita del tutto che però non raggiunge il suo totale.
**Risolvi** inserisce la soluzione.

### Mouse e tocco

- **Fai clic su** una casella per selezionarla, poi usa il tastierino sullo schermo per scrivervi
  una cifra. Un secondo clic sulla casella selezionata la deseleziona.
- **⌫** sul tastierino svuota di nuovo la casella selezionata, e **✎** attiva le
  **annotazioni a matita**: quello che scegli poi entra come piccola nota, e la stessa
  cifra ancora una volta cancella quella nota. Le annotazioni a matita servono solo a
  farti ragionare; inserire una cifra le cancella.
- **Fai clic destro su** una casella vuota per selezionarla subito per le annotazioni a
  matita.
- **Annotazioni** nel menu di pausa riempie ogni casella vuota con l’insieme
  completo di annotazioni a matita.
- **Evidenzia** (la lente accanto ad Annulla) mette in risalto ogni casella che contiene la stessa
  cifra dell’ultima casella su cui hai fatto clic, e mostra quella cifra in grassetto fra le
  annotazioni a matita. Premilo di nuovo per disattivarlo.

### Tastiera (Keyboard)

- **Digita una cifra** per riempire la casella selezionata, o per annotarla lì se la
  casella era selezionata per le annotazioni a matita.
- **Space** o **Backspace** svuota la casella selezionata (la sua cifra o tutte le sue
  annotazioni a matita).
- I **tasti freccia** spostano un cursore da tastiera, e le cifre che digiti finiscono
  nella casella sotto di esso.
- **Enter** fa passare il cursore dall’inserimento normale alle annotazioni a matita e
  viceversa.
- **M** è il pulsante **Annotazioni** e **L** il pulsante **Evidenzia**.

## Parametri

- **Dimensione della griglia**: da 3 a 9. Cifre oltre il 9 sarebbero scomode, quindi 9 è il
  limite.
- **Difficoltà**: il tipo di ragionamento più difficile che il rompicapo richiede. _Facile_
  chiede al massimo di capire quali cifre possano comparire in una gabbia; _Medio_ richiede di
  seguire quale casella della gabbia ogni cifra potrebbe occupare; _Difficile_ aggiunge
  ragionamenti fra gabbie diverse (le cifre che una gabbia deve piazzare in una riga non possono
  stare altrove in quella riga) e insiemi di caselle che si accaparrano un insieme di cifre;
  _Esperto_ aggiunge le catene di forzatura; e i rompicapi _Estremo_ non si possono finire senza
  tirare a indovinare e tornare sui propri passi. I rompicapi più difficili richiedono più tempo
  per essere generati, e le griglie 3×3 non vanno mai oltre Medio.
- **Solo moltiplicazione**: ogni indizio è un prodotto, il che elimina le facili gabbie da
  due caselle e dà un rompicapo piuttosto diverso.
`,S=e({default:()=>C}),C=`# Luci

Una griglia di caselle bianche e nere. Piazza delle lampadine sulle caselle bianche in modo
che ogni casella bianca sia illuminata. Una lampadina illumina la propria casella e brilla
lungo la sua riga e la sua colonna finché una casella nera o il bordo non le sbarrano la
strada. Alla fine devono valere tre cose:

- ogni casella bianca è illuminata;
- nessuna lampadina è illuminata da un’altra, cioè due lampadine non si vedono mai lungo
  una riga o una colonna;
- una casella nera con un numero ha esattamente quel numero di lampadine nelle caselle
  subito sopra, sotto, a sinistra e a destra. Le caselle nere senza numero possono avere
  accanto quante lampadine si vuole.

Le caselle illuminate sono immerse nel giallo. Le lampadine che si illuminano a vicenda
diventano rosse, e così un numero che non può più essere soddisfatto: ha già troppe
lampadine accanto, oppure non c’è più posto per averne abbastanza.

## Comandi

Il rompicapo è finito quando tutta la griglia risplende e non c’è più nulla di rosso.
**Aiutino** piazza una sola lampadina — o ne toglie una che nella soluzione non c’è — e
lascia il resto a te: il rompicapo resta in gioco, e con pochi aiutini la vittoria, e il
suo credito, restano tuoi. **Risolvi** inserisce le lampadine di una soluzione, lasciando al
loro posto le croci che hai disegnato.

### Mouse e tocco

- **Fai clic su** una casella bianca per metterci una lampadina, e di nuovo per toglierla.
- **Fai clic destro su** una casella bianca per segnarvi a matita una croce che significa
  «qui non può andare nessuna lampadina»; per cancellarla, fai clic destro su quella
  casella un’altra volta. Una casella con la croce non accetta lampadine finché la croce
  non viene tolta, e una casella con una lampadina non si può segnare con una croce.
- **Croce** (il pulsante con la croce accanto ad Annulla) fa sì che un clic normale segni o cancelli
  una croce invece di una lampadina, utile quando stai escludendo molte caselle in una volta.
  Premilo di nuovo per tornare alle lampadine.

### Tastiera (Keyboard)

- I **tasti freccia** spostano un cursore sulla griglia.
- **Enter** mette o toglie una lampadina sotto il cursore, e **Space** (oppure **I**) mette
  o toglie lì una croce.
- **X** è il pulsante **Croce**.

## Parametri

- **Larghezza** e **altezza** della griglia.
- **% di caselle nere**: all’incirca quanta parte della griglia è nera. È un’indicazione,
  non una promessa: se a quella densità non si riesce a costruire un rompicapo, il
  generatore usa qualche casella nera in più.
- **Simmetria**: lo schema che seguono le caselle nere — nessuno, uno specchio o una
  rotazione di due metà, oppure uno specchio o una rotazione a quattro vie. La rotazione a
  quattro vie richiede una griglia quadrata.
- **Difficoltà**: i rompicapi _Facile_ cedono a ragionamenti su una casella alla volta, su quali
  caselle debbano o non possano ospitare una lampadina. Quelli _Medio_ ti chiedono di soppesare
  insiemi di caselle l’uno contro l’altro («una di queste tre deve essere una lampadina, e questo
  esclude quell’altra»). I rompicapi _Difficile_ possono richiedere di provare una lampadina da
  qualche parte e seguirne le conseguenze finché qualcosa non va storto. Ogni rompicapo ha
  esattamente una soluzione.
`,w=e({default:()=>T}),T=`# Anelli

Una griglia di punti, con un numero in alcuni degli spazi fra loro. Traccia un unico anello
chiuso lungo le linee tenui fra i punti, in modo che:

- ogni spazio numerato abbia esattamente quel numero di suoi lati sull’anello;
- l’anello non si incroci né si tocchi mai — ogni punto ha due linee oppure nessuna — e ci
  sia un solo anello, senza estremità libere né pezzi separati.

La versione classica usa quadrati, ma lo stesso rompicapo funziona su triangoli, esagoni e
una dozzina di tassellature più strane, dove i numeri possono andare ben oltre il 4.

Le linee che formano un anello sbagliato, o che si incontrano in tre in un punto, diventano
rosse; anche un numero con troppe linee attorno, o con troppo pochi lati ancora possibili,
diventa rosso. Un numero diventa grigio non appena ha esattamente il numero giusto di
linee.

## Comandi

**Risolvi** traccia l’intero anello. Il rompicapo è finito non appena l’anello è completo e
ogni numero è soddisfatto; sbarrare i lati inutilizzati è facoltativo.

### Mouse e tocco

- **Fai clic su** un lato tenue per tracciarvi una linea; fai clic su quella linea
  un’altra volta per rimuoverla.
- **Fai clic destro su** un lato per sbarrarlo, segnandolo come sicuramente fuori
  dall’anello; fai clic destro su quel lato un’altra volta per togliere il segno.
  Fai clic su un lato sbarrato e il segno se ne va, e fai clic destro su un lato con una linea e la
  linea se ne va.
- **Croce** (il pulsante con la croce accanto ad Annulla) fa sì che un clic normale sbarri un lato, o
  lo liberi, invece di tracciare una linea. Premilo di nuovo per tornare a tracciare linee.

### Tastiera (Keyboard)

- I **tasti freccia** spostano un cursore di lato in lato; **Enter** traccia o rimuove una
  linea sul lato sotto il cursore e **Space** lo sbarra o lo libera.
- **X** è il pulsante **Croce**.

## Parametri

- **Larghezza** e **altezza** della griglia, contate in celle della tassellatura. Per la
  griglia quadrata è semplicemente il numero di quadrati in orizzontale e in verticale; le
  altre tassellature contano le loro unità ripetute, quindi il numero effettivo di facce
  varia.
- **Tipo di griglia**: _Quadrati_, _Triangolare_ e _Nido d’ape_ sono le tassellature
  regolari. _Quadrato camuso_, _Cairo_, _Grande esagonale_, _Ottagonale_, _Aquiloni_,
  _Rosetta_, _Dodecagonale_ e _Grande dodecagonale_ mescolano forme diverse, e le due
  tassellature di _Penrose_ non si ripetono affatto.
- **Difficoltà**: i rompicapi _Facile_ richiedono soltanto le regole in sé — contare le linee
  attorno a un numero, ricordare che un punto ha due linee o nessuna, e non chiudere l’anello
  troppo presto. _Medio_ aggiunge ragionamenti sulle coppie di lati che si incontrano in un punto
  (al più uno, o almeno uno, dei due è una linea). _Difficile_ lascia che questi fatti si
  concatenino di punto in punto, come lungo una fila diagonale di 2. _Esperto_ tiene traccia
  anche dei lati che si sanno uguali oppure opposti fra loro. Non serve mai tirare a indovinare;
  ogni rompicapo ha esattamente una soluzione.
`,E=e({default:()=>D}),D=`# Magneti

Un rettangolo è stato ricoperto di domino, mostrati solo come contorni. Ogni domino è o un
magnete — una metà polo \`+\`, l’altra polo \`−\` — oppure un pezzo neutro, senza alcun polo. I
numeri lungo il bordo dicono quanti poli \`+\` (sopra le colonne e a sinistra delle righe) e
quanti poli \`−\` (sotto le colonne e a destra delle righe) contiene ciascuna linea; un
numero mancante vuol dire nessun indizio per quella linea. Riempi ogni domino in modo che
tutti i conteggi tornino e che due poli uguali non si trovino mai fianco a fianco: \`+\` non
deve mai toccare \`+\` e \`−\` non deve mai toccare \`−\` attraverso il confine fra due domino. I
neutri sono inerti e possono stare accanto a qualsiasi cosa.

I poli uguali che si toccano vengono mostrati in rosso. Un conteggio diventa rosso quando
non può più essere rispettato — troppi poli già presenti, oppure troppo pochi e senza più
spazio per aggiungerne — e grigio quando è esattamente soddisfatto. Il rompicapo è finito
quando ogni domino è riempito, ogni conteggio è rispettato e non c’è nulla di rosso.

## Comandi

### Mouse e tocco

- **Fai clic su** una metà vuota di un domino per farne il polo \`+\` (l’altra metà diventa
  \`−\`). Fai clic su quella stessa metà un’altra volta per capovolgere il magnete, e una
  terza volta per svuotare il domino. Fai clic su un domino neutro e non succede nulla.
- **Fai clic destro su** un domino vuoto per segnarlo come neutro. Fai clic destro su quel
  domino un’altra volta per sostituire il neutro con dei punti interrogativi, una nota che
  dice che il domino è di sicuro un magnete; una terza volta lo svuota. Fai clic destro su
  un magnete e non succede nulla.
- **Neutro** (il domino ombreggiato accanto ad Annulla) fa sì che un clic normale segni il domino
  come neutro, poi con i punti interrogativi, poi di nuovo vuoto. Premilo di nuovo per
  tornare a posare magneti.
- **Risolvi** inserisce l’intera soluzione.

### Tastiera (Keyboard)

- I **tasti freccia** spostano un cursore sulla griglia.
- **Enter** fa passare la metà sotto il cursore per \`+\`, \`−\` e vuoto, esattamente come fa
  un clic sinistro.
- **Space** fa passare il domino sotto il cursore per neutro, punto interrogativo e vuoto,
  esattamente come quando fai clic destro su quel domino.
- **B** è il pulsante **Neutro**.

## Parametri

- **Larghezza** e **altezza** della griglia. Quando l’area è dispari avanza una casella,
  disegnata tratteggiata; non appartiene a nessun domino e conta come neutra.
- **Difficoltà**: i rompicapi _Facile_ chiedono al massimo di guardare una linea o un domino alla
  volta — un conteggio già soddisfatto, un conteggio che ha bisogno di tutti i candidati rimasti,
  o un domino nessuna delle cui metà può prendere un certo polo. I rompicapi _Difficile_ ti
  chiedono anche di ragionare su interi domino disposti lungo una linea: un domino che deve
  essere un magnete fornisce un polo di ciascun tipo comunque lo si giri, una linea in cui resta
  un solo spazio neutro non può ospitare un domino neutro per il lungo, e così via. Ogni
  rompicapo ha esattamente una soluzione.
- **Riduci gli indizi**: toglie ogni conteggio che non serve a risolvere il rompicapo alla
  difficoltà scelta, il che rende parecchio più difficile capire da dove cominciare.
`,O=e({default:()=>k}),k=`# Mappa

Una mappa è divisa in regioni. Colora ogni regione con uno di quattro colori in modo che
due regioni che condividono un tratto di confine non abbiano mai lo stesso colore. Le
regioni che si toccano solo in un angolo possono avere lo stesso colore. Alcune regioni
sono già colorate per te, e sono scelte in modo che ci sia esattamente un modo di
completare la mappa.

Due regioni vicine dello stesso colore vengono segnalate con un \`!\` rosso sul confine fra
loro.

## Comandi

**Risolvi** colora l’intera soluzione. La mappa lampeggia quando ogni regione è colorata e
non c’è nulla di rosso.

### Mouse e tocco

- **Trascina** un colore: premi su una regione (o su uno dei campioni sotto la mappa) e
  rilascia su un’altra regione per darle quel colore. Se trascini da una regione senza
  colore, dallo spazio vuoto attorno alla mappa o dal campione gomma, la regione su cui
  lasci il colore si svuota.
- **Fai clic su un campione** per selezionare un colore, poi **fai clic su** una regione
  per dipingerla; fai clic su quel campione un’altra volta per deselezionarlo.
- **Trascina con il destro** un colore su una regione senza colore per segnarvi a matita un
  puntino di quel colore, annotando che la regione _potrebbe_ essere di quel colore. Una
  regione può portare più puntini a matita; trascinando di nuovo lo stesso colore ne togli
  il puntino. Con un campione selezionato, **fai clic destro su** una regione senza colore
  per mettere o togliere il suo puntino.
- **Numeri** (nel menu di pausa) mostra un numero in ogni regione, comodo per parlare di un
  rompicapo con qualcun altro, e poi li nasconde di nuovo.

### Tastiera (Keyboard)

- I **tasti freccia** spostano un cursore sulla mappa; la regione in cui si trova viene
  contornata. I tasti **1**–**4** colorano quella regione, **Space** la svuota ed **Enter**
  ne raccoglie il colore, così puoi portarlo in giro con i tasti freccia e lasciarlo con
  **Enter** (oppure come puntino a matita con **Space**). Premere **Enter** due volte senza
  spostarsi svuota la regione.
- **L** è il pulsante **Numeri**.

## Parametri

- **Larghezza** e **altezza** della griglia su cui è disegnata la mappa, in caselle.
- **Regioni**: in quante regioni viene tagliata la mappa.
- **Difficoltà**: nei rompicapi _Facile_ c’è sempre una regione a cui resta un solo colore
  possibile. _Medio_ aggiunge ragionamenti su coppie di regioni vicine che devono spartirsi gli
  stessi due colori. _Difficile_ richiede catene di deduzioni del genere attraverso la mappa.
  Tutti questi si risolvono senza tirare a indovinare. _Estremo_ promette soltanto che la
  soluzione è unica; potresti dover provare un colore e seguirlo finché qualcosa non va storto.
`,A=e({default:()=>j}),j=`# Mine

Una griglia di caselle coperte nasconde un certo numero di mine. Scopri ogni casella che
_non_ contiene una mina. Ogni casella che apri mostra quante delle sue otto vicine sono
mine; apri una mina e la partita è persa.

La particolarità di questa versione è che non devi mai tirare a indovinare. Niente è
deciso prima del tuo primo clic: le mine vengono poi disposte in modo che la casella
scelta con quel clic sia vuota e che da lì tutta la griglia si possa ricavare per pura
deduzione. Se ti senti bloccato, da qualche parte c’è sempre una casella sicura che i
numeri dimostrano già.

La barra di stato mostra quante bandierine hai piantato rispetto al numero di mine, e
l’orologio parte con il tuo primo clic. Colpire una mina rivela tutte le altre e sbarra
le bandierine sbagliate; puoi annullare il clic fatale e proseguire, ma la morte resta
segnata nella barra di stato.

## Comandi

### Mouse e tocco

- **Fai clic su** una casella coperta per aprirla. Aprire una casella vuota (nessuna mina
  vicina) apre anche le sue vicine, e così via verso l’esterno.
- **Fai clic destro su** una casella coperta per piantare una bandierina su una mina
  sospetta, e di nuovo per toglierla. Le caselle con la bandierina non si possono aprire
  per sbaglio.
- **Fai clic su un numero** che ha già intorno il numero giusto di bandierine per aprire
  in un colpo solo tutte le altre vicine coperte. Lo stesso fa **il clic centrale** su
  quel numero.
- **Aiutino** apre una casella sicura — o toglie una bandierina che non ha una mina sotto —
  e lascia a te il resto della griglia. Con pochi aiutini la vittoria, e il suo credito,
  restano tuoi.
- **Risolvi** rivela tutta la disposizione e mette una bandierina su ogni mina. Non conta
  come una tua vittoria.

### Tastiera (Keyboard)

- **I tasti freccia** spostano un cursore sulla griglia.
- **Enter** funziona come un clic sinistro sulla casella sotto il cursore: apre una
  casella coperta, oppure sgombra intorno a un numero le cui bandierine sono tutte al
  loro posto.
- **Space** pianta o toglie una bandierina, esattamente come quando fai clic destro.

## Parametri

- **Larghezza** e **altezza** della griglia.
- **Mine**: quante mine nascondere. Puoi indicare una percentuale come \`20%\` invece di un
  conteggio. Con densità molto alte le griglie risolvibili diventano lente da trovare.
- **Garantisci la risolvibilità**: quando è attivo (impostazione predefinita), la
  disposizione è garantita risolvibile dal tuo primo clic senza tirare a indovinare.
  Disattivalo per griglie casuali normali, che alla fine possono lasciarti a testa o
  croce.
`,M=e({default:()=>N}),N=`# Rete

Una rete di fili è stata stesa su una griglia di tessere quadrate e poi ogni tessera è
stata girata a caso. Rimetti a posto le tessere in modo che siano tutte unite in un’unica
rete: ogni estremità di filo deve incontrare un filo sulla tessera vicina e nessun filo
deve restare puntato contro un muro. La rete finita è un albero, quindi non ha anelli
chiusi.

Le tessere già collegate alla tessera sorgente al centro della griglia sono disegnate in
blu, come guida; le altre restano grigie. Un filo che fa parte di un anello è disegnato in
rosso. Le linee nere spesse tra le tessere sono barriere: nessun filo può attraversarle, e
questo ti suggerisce come devono stare le tessere ai due lati. La barra di stato mostra
quante tessere sono alimentate in questo momento.

## Comandi

### Mouse e tocco

- **Fai clic su** una tessera per girarla in senso antiorario, **fai clic destro** per
  girarla in senso orario.
- **Fai clic centrale su** una tessera per **bloccarla** quando ne sei sicuro. Una tessera
  bloccata è ombreggiata e non gira più finché un altro clic centrale non la sblocca. Se
  fai clic destro, la tessera gira invece di bloccarsi: per bloccarla serve
  il clic centrale.
- **Blocca** (il pulsante con il lucchetto accanto ad Annulla) fa sì che un clic normale blocchi o
  sblocchi una tessera invece di girarla, più comodo del clic centrale su un trackpad. Il
  clic destro continua a girare la tessera in senso orario. Premilo di nuovo per tornare a
  girare.
- **Rimescola** rimette ogni tessera non bloccata in un nuovo orientamento casuale, per
  cambiare aria quando un rompicapo si è arenato.
- Su una griglia con bordi collegati, i quattro **pulsanti freccia** fanno scorrere la vista,
  così puoi affiancare tessere che stanno su bordi opposti.

### Tastiera (Keyboard)

- **I tasti freccia** spostano un cursore sulla griglia.
- **Enter** o **A** girano in senso antiorario la tessera sotto il cursore, **D** la gira
  in senso orario e **F** la gira di mezzo giro.
- **Space**, **S** o **L** bloccano o sbloccano la tessera sotto il cursore. Con il mouse,
  anche **Shift+clic** blocca una tessera, esattamente come il clic centrale.
- **K** è il pulsante **Blocca** e **J** il pulsante **Rimescola**.
- Su una griglia con bordi collegati, **Shift + i tasti freccia** fanno scorrere la vista (come
  i quattro pulsanti freccia), così le tessere sui bordi opposti si vedono affiancate.
  **Ctrl + i tasti freccia** spostano la tessera sorgente da cui si diffonde
  l’evidenziazione blu.

## Parametri

- **Larghezza** e **altezza** della griglia, in tessere.
- **Bordi collegati**: i fili possono uscire da un lato della griglia e continuare
  dal lato opposto.
- **Probabilità di barriera**: un numero da 0 a 1 che indica la quota di lati senza filo
  che ricevono una barriera. Le barriere non cambiano mai la disposizione dei fili: lo
  stesso seme casuale dà sempre la stessa griglia, quindi alzare la probabilità aggiunge
  soltanto indizi.
- **Garantisci soluzione unica**: normalmente il rompicapo è costruito in modo che
  funzioni una sola disposizione delle tessere. Disattivalo per una generazione più veloce
  e qualche zona ambigua ogni tanto.
`,P=e({default:()=>F}),F=`# Rete scorrevole

Ogni tessera porta un pezzo di cablaggio: un tratto dritto, una curva, un incrocio a T o
un’estremità libera con un punto sopra. Messi insieme come si deve, i pezzi formano
un’unica rete che raggiunge ogni tessera partendo dalla sorgente di corrente sulla tessera
centrale ombreggiata, senza anelli e senza bracci puntati nel vuoto. La griglia è stata
scombinata facendo scorrere righe e colonne intere, e quello è l’unico modo per rimetterla
a posto: nessuna tessera si può girare, si può solo spostare.

Le tessere che in questo momento ricevono corrente sono disegnate in blu; le altre restano
grigie. I muri neri spessi tra le tessere sono barriere. Attraverso una barriera non si
collega niente, quindi ti dicono dove la rete finita di sicuro non ha alcun collegamento.

## Comandi

### Mouse e tocco

- **Fai clic su** una freccia accanto a una riga o a una colonna per far scorrere di un
  passo tutta quella linea nel verso indicato dalla freccia. La tessera spinta fuori da un
  capo rientra dall’altro capo della stessa linea. **Fai clic destro su** una freccia per
  far scorrere la linea nel verso opposto.
- La riga e la colonna centrali non hanno frecce: la sorgente di corrente non si sposta
  mai.
- **Risolvi** salta direttamente alla rete finita, così puoi confrontarla con il tuo
  tentativo.

### Tastiera (Keyboard)

- **I tasti freccia** spostano un’evidenziazione lungo l’anello di frecce.
- **Enter** fa scorrere la linea evidenziata nel verso della sua freccia e **Space** la fa
  scorrere all’indietro.

## Parametri

- **Larghezza** e **altezza** della griglia.
- **Bordi collegati**: quando è attivo, il bordo destro continua a sinistra e quello
  inferiore in alto, così il cablaggio (e le barriere) può attraversare il bordo della
  griglia. La cornice tratteggiata indica una griglia con bordi collegati; una cornice spessa e
  continua è un muro tutt’intorno.
- **Probabilità di barriera**: quanti dei lati di tessera inutilizzati ricevono una
  barriera, da 0 (nessuno) a 1 (ogni lato che la rete finita non usa). Più barriere ci
  sono, più il rompicapo è facile. Le barriere sono scelte indipendentemente dal resto
  della griglia, quindi lo stesso seme casuale con una probabilità di barriera più alta dà
  lo stesso rompicapo con più indizi.
- **Numero di mosse di mescolamento**: lascia 0 per un mescolamento accurato, oppure
  indica un numero per mescolare con esattamente quel numero di scorrimenti. Lo scopo
  diventa allora trovarli e invertirli; la barra di stato mostra l’obiettivo.
`,I=e({default:()=>L}),L=`# Motivo

Ogni casella della griglia è di nascosto nera oppure bianca. I numeri accanto a ogni riga
e sopra ogni colonna ti dicono le lunghezze delle sequenze di caselle nere in quella
linea, nell’ordine, con almeno una casella bianca tra due sequenze consecutive. Colora di
nero le caselle giuste, in modo che ogni riga e ogni colonna torni con i suoi numeri. I
rompicapi di questo tipo si chiamano di solito crucipixel, nonogrammi o picross.

Le immagini qui sono generate a caso, quindi non c’è nessun disegno da indovinare: tutto
va ricavato dai numeri. Ogni rompicapo è verificato in anticipo per essere certi che si
possa risolvere ragionando su una riga o una colonna alla volta, così non devi mai andare
per tentativi.

I numeri di una linea diventano grigi quando le sequenze nere di quella linea li rispecchiano,
e rossi quando le sequenze che hai completato non possono in alcun modo tornare con i
numeri. Il rompicapo è finito quando ogni riga e ogni colonna torna con i suoi numeri; i
punti servono solo ad aiutarti a ricordare.

## Comandi

### Mouse e tocco

- **Fai clic su** una casella per colorarla di nero; un altro clic su una casella nera la
  svuota.
- **Fai clic destro su** una casella per segnarla con un punto, cioè per dire che la sai
  bianca; fai clic destro su una casella con il punto per svuotarla.
- **Trascina** per colorare di nero una linea dritta di caselle in un colpo solo, e
  **trascina con il destro** per posare una linea di punti. Vengono modificate solo le
  caselle che erano nello stesso stato di quella da cui sei partito, quindi trascinare una
  fila di punti sopra le tue caselle nere le lascia stare.
- **Fai clic centrale su** una casella per riportarla allo stato sconosciuto. Con il mouse,
  trascinando con la rotellina premuta si svuota un intero rettangolo, qualunque cosa contenga.
- **Gomma** (il pulsante con la gomma accanto ad Annulla) fa fare la stessa cosa al clic normale:
  fai clic su una casella per riportarla a sconosciuta, o trascina per svuotare un intero
  rettangolo. Premilo di nuovo per tornare a colorare di nero.
- **Aiutino** riempie una casella, sempre una che una sola riga o colonna determina da sé
  — oppure corregge una casella che contraddice la soluzione. Il rompicapo resta in gioco,
  e con pochi aiutini la vittoria, e il suo credito, restano tuoi.
- **Risolvi** completa per te tutto il disegno.

### Tastiera (Keyboard)

- **I tasti freccia** spostano un cursore.
- **Enter** colora di nero o svuota la casella sotto il cursore e **Space** mette o toglie
  un punto.
- Tieni premuto **Ctrl** mentre muovi il cursore per colorare di nero lungo il percorso,
  **Shift** per posare punti, o entrambi per svuotare.
- Con il mouse, **Shift+clic** svuota le caselle esattamente come il clic centrale.
- **E** è il pulsante **Gomma**.

## Parametri

- **Larghezza** e **altezza** della griglia. I preset vanno da 10×10 fino a 30×30; le
  griglie più grandi richiedono un po’ più di tempo per essere generate.
`,R=e({default:()=>z}),z=`# Perle

Una griglia di caselle, alcune delle quali contengono una perla nera o bianca. Traccia un
unico anello chiuso che corra da centro di casella a centro di casella, in orizzontale o
in verticale, senza mai incrociarsi né ramificarsi. L’anello non deve per forza passare da
ogni casella, ma deve passare da ogni perla:

- su una **perla nera** l’anello svolta, e poi prosegue dritto attraverso entrambe le
  caselle che stanno accanto alla perla lungo l’anello;
- su una **perla bianca** l’anello prosegue dritto, e svolta in almeno una delle due
  caselle che stanno accanto alla perla lungo l’anello.

Contano solo le caselle che l’anello visita subito prima e subito dopo una perla, non
tutte quelle che la toccano nella griglia.

Una perla la cui regola è già violata riceve un alone rosso. Non appena esiste un anello
chiuso, ogni segmento fuori da esso viene disegnato in rosso, e così ogni casella con tre
o più segmenti.

## Comandi

**Risolvi** traccia tutto l’anello. Il rompicapo è finito quando l’anello è un unico
circuito chiuso e non c’è più niente di rosso.

### Mouse e tocco

- **Fai clic su** un lato della griglia (vicino al confine tra due caselle) per tracciarci
  sopra un segmento dell’anello; un altro clic lo toglie.
- **Trascina** attraverso una serie di caselle per tracciare in una volta sola tutta una fila di
  segmenti. Trascinare lungo segmenti già presenti li cancella; un trascinamento che parte su
  segmenti già presenti e prosegue in caselle vuote prima cancella e poi traccia. Torna indietro
  su una casella già percorsa per accorciare il percorso prima di lasciare la presa; torna alla
  casella da cui sei partito per chiudere l’anello.
- **Fai clic destro su** un lato della griglia per mettere una crocetta che vuol dire
  «qui nessun segmento»: finché non la togli, su quel lato non si possono tracciare
  segmenti.
  **Trascina con il destro** su una fila di caselle per mettere una crocetta su ogni lato
  che attraversi.
- **Croce** (il pulsante con la croce accanto ad Annulla) fa sì che un clic normale metta o tolga una
  crocetta, e che un trascinamento ne posi una fila intera: come quando tracci, un
  trascinamento che parte da crocette prima le toglie, e salta i lati che hanno già un
  segmento. Premilo di nuovo per tornare a tracciare l’anello.

### Tastiera (Keyboard)

- **I tasti freccia** spostano un cursore. **Ctrl+freccia** traccia o toglie il segmento
  su quel lato della casella del cursore, **Shift+freccia** mette o toglie lì una
  crocetta. **Enter** avvia dal cursore un trascinamento da tastiera: muoviti con le
  frecce e premi di nuovo Enter per confermare il percorso, oppure **Space** per
  abbandonarlo.
- **X** è il pulsante **Croce**; quando è attivo, anche un trascinamento da tastiera posa
  crocette.

## Parametri

- **Larghezza** e **altezza** della griglia, in caselle (almeno cinque ciascuna).
- **Difficoltà**: nel livello _Facile_ i rompicapi si risolvono ragionando su ogni perla e
  sulle caselle che le stanno subito accanto. Nel livello _Impegnativo_ devi anche
  accorgerti di quando un segmento chiuderebbe troppo presto un anello piccolo, lasciando
  fuori altre perle. (Una griglia 5×5 Impegnativo viene generata come Facile, come
  nell’originale.)
- **Consenti irrisolvibili**: tiene ogni perla che l’anello sopporta invece di ridurle a
  un insieme minimo con soluzione unica. Un’opzione di debug ereditata dall’originale.
`,B=e({default:()=>V}),V=`# Pioli

Un tabellone pieno di pioli con un buco vuoto, o qualcuno in più su un tabellone casuale. Un piolo può saltare in orizzontale o
in verticale sopra un piolo vicino e finire nel buco vuoto subito oltre; il piolo
scavalcato viene tolto. Continua a saltare finché sul tabellone resta un solo piolo.

È il vecchio gioco del solitario dei pioli. Il tabellone **Croce** è il classico schema
inglese, il tabellone **Ottagono** è quello europeo (che parte con il buco vuoto fuori
centro, perché dal centro non si riesce a finire), e i tabelloni **Casuale** sono forme
strane fatte crescere dal computer. Le zone vuote senza buco semplicemente non fanno parte
del tabellone.

Non puoi restare bloccato per sempre: se non resta nessun salto e c’è più di un piolo, la
partita è finita, ma Annulla ti riporta indietro quanto vuoi. La barra di stato conta i
pioli rimasti e le mosse fatte.

## Comandi

### Mouse e tocco

- **Trascina** un piolo e lascialo su un buco vuoto esattamente due caselle più in là, in
  linea retta e scavalcando un altro piolo. Ogni altro rilascio rimette il piolo a posto.
- Oppure **fai clic su** un piolo per prenderlo (diventa arancione e i buchi in cui può
  atterrare vengono segnati), poi fai clic su quel buco per saltarci dentro. Un altro clic
  sullo stesso piolo lo riappoggia.

### Tastiera (Keyboard)

- **I tasti freccia** spostano un cursore sul tabellone.
- **Enter** o **Space** su un piolo lo prendono; un tasto freccia lo fa poi saltare in
  quella direzione, se la mossa è consentita, e **Enter** di nuovo lo riappoggia.

## Parametri

- **Larghezza** e **altezza** del tabellone, almeno 4 ciascuna.
- **Tipo di tabellone**: _Croce_ e _Ottagono_ sono gli schemi tradizionali e sono
  disponibili solo a 7×7. _Casuale_ produce ogni volta una forma di tabellone diversa,
  sempre una che si può ridurre a un solo piolo, perché è stata costruita eseguendo i
  salti a ritroso a partire da lì.
`,H=e({default:()=>U}),U=`# Portata

Alcune caselle della griglia contengono un numero. Colora di nero le caselle in modo che
valgano quattro cose insieme:

- nessuna casella con un numero è nera;
- due caselle nere non si toccano mai lungo un lato (gli angoli vanno bene);
- le caselle bianche formano tutte un’unica regione connessa, unite lato a lato;
- ogni numero conta le caselle bianche che la sua casella riesce a vedere: sé stessa, più
  tutto quello che sta in linea retta in su, in giù, a sinistra e a destra finché non si
  mette di mezzo una casella nera o il bordo della griglia.

Questo è il _Kurodoko_ di Nikoli, noto anche come _Kuromasu_ o _Where is Black Cells_. Un
numero che vede già abbastanza caselle ha una casella nera subito dopo ogni tratto che
riesce a vedere; un numero che vedrebbe troppo se una singola casella sconosciuta fosse
bianca ha invece lì una casella nera. Colorare una casella che è l’unico collegamento tra
due gruppi di caselle bianche non è mai giusto. Ogni rompicapo si può finire con questo
tipo di ragionamento; non serve tirare a indovinare.

Gli errori si vedono in rosso: le caselle nere che si toccano ricevono una cornice rossa
intorno al gruppo, le caselle bianche tagliate fuori dalla regione principale ricevono un
contorno rosso, e un numero diventa rosso quando non riesce più a vedere abbastanza
caselle oppure ne vede già sicuramente troppe. Il rompicapo è finito quando nessuna regola
è violata; non serve mettere un punto sulle caselle bianche.

## Comandi

### Mouse e tocco

- **Fai clic su** una casella per colorarla di nero. Un altro clic la trasforma in un
  punto (una casella che sai bianca) e un altro ancora la svuota.
- **Fai clic destro** per percorrere il ciclo al contrario: prima il punto, poi il nero,
  poi la casella vuota.
- **Trascina** per colorare più caselle in un colpo solo, e **trascina con il destro** per
  spazzarle nell’altro verso. Vengono modificate solo le caselle che all’inizio erano come
  la prima, quindi una passata di punti lascia stare le tue caselle nere.
- **Gomma** (il pulsante con la gomma accanto ad Annulla) fa sì che un clic svuoti invece la casella,
  e che un trascinamento svuoti ogni casella nera e ogni punto su cui passa, qualunque sia.
  Premilo di nuovo per tornare a colorare.
- **Aiutino** completa una casella che si deduce da quello che è già sul tabellone, oppure
  corregge una casella che contraddice la soluzione. Il rompicapo resta in gioco, e con
  qualche aiutino la vittoria, e il suo credito, restano tuoi.
- **Risolvi** completa tutta la griglia, mettendo un punto su ogni casella bianca.

### Tastiera (Keyboard)

- **I tasti freccia** spostano un cursore sulla griglia.
- **Enter** funziona come un clic sinistro sulla casella sotto il cursore e **Space** come
  quando fai clic destro.
- **E** è il pulsante **Gomma** e **H** il pulsante **Aiutino**.

## Parametri

- **Larghezza** e **altezza** della griglia. I preset vanno da 9×6 a 16×11; si può
  generare qualsiasi dimensione fino a 30×30, anche se le griglie minuscole di una o due
  caselle non danno rompicapi onesti.
`,W=e({default:()=>G}),G=`# Rettangoli

Alcune caselle della griglia portano un numero. Dividi tutta la griglia in rettangoli in
modo che ogni rettangolo contenga esattamente un numero e che quel numero sia l’area del
rettangolo (la larghezza per l’altezza). Un 6, per esempio, sta in un blocco 1×6, 2×3, 3×2
o 6×1; quale sia, e dove stia il numero al suo interno, tocca a te ricavarlo dai vicini.

I rompicapi sono generati a caso e, per impostazione predefinita, i numeri sono messi in
modo che funzioni una sola divisione della griglia. Il rompicapo originale viene dalla
rivista giapponese Nikoli, dove si chiama Shikaku.

## Comandi

### Mouse e tocco

- **Trascina** su un’area per disegnarci intorno un rettangolo: ne viene tracciato il
  contorno e ogni linea al suo interno viene tolta. Trascinare lungo una linea della
  griglia traccia solo quella linea.
- **Fai clic su** una linea della griglia per aggiungere o togliere quel singolo lato.
- **Trascina con il destro** su un’area per cancellare le linee al suo interno lasciando
  stare il contorno. Se **fai clic destro** su una linea della griglia, la aggiungi o la
  togli, proprio come con un clic normale.
- **Gomma** (il pulsante con la gomma accanto ad Annulla) fa cancellare anche il trascinamento
  normale: trascina su un’area per togliere le linee al suo interno, o fai clic su una linea
  della griglia per toglierla. Finché è attivo, un clic non aggiunge mai una linea. Premilo di
  nuovo per tornare a disegnare.
- **Risolvi** completa per te tutta la divisione.

Mentre trascini, il rettangolo che stai per disegnare viene contornato e la sua dimensione
è mostrata nella barra di stato. Un rettangolo finito della dimensione giusta viene
ombreggiato. Un rettangolo chiuso che non potrà mai andare bene viene segnalato: il suo
numero diventa rosso se la dimensione è quella sbagliata, ed è tratteggiato se non
contiene alcun numero. Il rompicapo è completo quando ogni casella sta dentro un
rettangolo corretto.

### Tastiera (Keyboard)

- **I tasti freccia** spostano un cursore.
- **Enter** avvia il trascinamento di un rettangolo a partire dal cursore; sposta il
  cursore sull’angolo opposto e premi di nuovo **Enter** per disegnarlo.
- **Space** funziona allo stesso modo, ma cancella l’interno del rettangolo.
- **E** è il pulsante **Gomma**.

## Parametri

- **Larghezza** e **altezza** della griglia. I preset vanno da 7×7 fino a 19×19.
- **Fattore di espansione** — genera una griglia più piccola e la allarga fino alla
  dimensione richiesta, così il rompicapo ha rettangoli meno numerosi e più grandi. 0
  (l’impostazione predefinita) vuol dire nessun allargamento; 0.5 rende la griglia
  iniziale due terzi della dimensione finale in ogni direzione. Valori grandi lasciano
  solo una manciata di rettangoli e rendono il rompicapo banale.
- **Garantisci soluzione unica** — normalmente attivo. Disattivandolo i numeri vengono
  messi in un punto qualsiasi dei loro rettangoli, il che è più rapido e può dare
  rompicapi con più risposte; in quel caso conta come risolta qualunque divisione valida.
`,se=e({default:()=>K}),K=`# Same Game

Il tabellone è pieno di caselle colorate. Individua un gruppo di due o più caselle dello
stesso colore che si toccano lungo i lati e rimuovilo; le caselle sopra il vuoto scendono
e, quando una colonna resta vuota, le colonne alla sua destra scorrono verso sinistra per
chiuderla. Svuota tutto il tabellone per vincere. Se restano delle caselle ma nessuna
coppia di caselle adiacenti ha lo stesso colore, non puoi più fare nulla: annulla e prova
un altro ordine.

I gruppi grandi valgono molto più di quelli piccoli: rimuovere _n_ caselle vale
(_n_ − 2)² punti con il punteggio predefinito, quindi una coppia non vale nulla, tre
caselle valgono un punto e dieci caselle 64. La barra di stato mostra il tuo punteggio e,
quando un gruppo è selezionato, quante caselle contiene e quanto ti farebbe guadagnare.

Ogni tabellone generato (a meno che tu non disattivi l’opzione) è costruito in modo da
_poter_ essere svuotato del tutto, anche se trovare un ordine che dia pure un buon
punteggio sta a te.

Non c’è il pulsante Risolvi: il computer sa che il tabellone si può svuotare, ma non ti
dirà come.

## Comandi

### Mouse e tocco

- **Fai clic su** una casella per selezionare tutto il gruppo a cui appartiene; il gruppo
  viene disegnato più chiaro e con un contorno spesso. **Fai clic su quel gruppo un’altra
  volta** per rimuoverlo. Un clic altrove sposta invece la selezione.
- **Fai clic destro su** quel gruppo per deselezionarlo.

### Tastiera (Keyboard)

- **I tasti freccia** muovono un cursore sul tabellone (passando da un bordo all’altro).
- **Enter** seleziona il gruppo sotto il cursore e, premuto di nuovo, lo rimuove.
- **Space** sul gruppo selezionato lo deseleziona.

## Parametri

- **Larghezza** e **altezza** del tabellone.
- **N. di colori**, da 3 a 9 (2 è ammesso quando non si garantisce la risolvibilità).
  Più colori significano gruppi più piccoli e un tabellone più difficile.
- **Sistema di punteggio**: _(n−2)²_, quello predefinito, oppure _(n−1)²_, che premia
  anche le coppie.
- **Garantisci la risolvibilità**: quando è selezionata, il tabellone viene generato a
  ritroso a partire da un tabellone vuoto, così esiste almeno una sequenza che lo svuota.
  Disattivala per un tabellone casuale semplice, più rapido da generare e con regioni
  tendenzialmente più grandi, ma che potrebbe essere impossibile da svuotare.
`,ce=e({default:()=>le}),le=`# Segnavia

Ogni casella porta una freccia e alcune caselle portano un numero. Unisci le caselle in un
unico percorso numerato da 1 a N (dove N è il numero di caselle) in modo che il successore
di ogni casella si trovi da qualche parte lungo la sua freccia: la casella numerata 1 punta
verso il 2, che punta verso il 3, e così via. Il successore può stare a qualsiasi distanza
nella direzione della freccia, non solo nella casella accanto. L’ultima casella, segnata
con una stella, non punta da nessuna parte.

Il primo e l’ultimo numero sono sempre mostrati, insieme a quanti altri bastano a rendere
unico il percorso. Ogni rompicapo ha esattamente una soluzione e si può trovare con il solo
ragionamento.

Gli errori sono mostrati in rosso: due caselle con lo stesso numero, un numero il cui
successore non sta lungo la sua freccia, oppure una catena che va oltre il numero che le è
stato assegnato. Il rompicapo è finito quando i numeri da 1 a N attraversano ogni casella e
non resta nulla di rosso.

## Comandi

### Mouse e tocco

- **Trascina** da una casella a un’altra lungo la sua freccia per rendere la seconda il
  successore della prima. **Trascina con il destro** per fare il contrario: da una casella
  a quella che deve venire prima di essa.
- Quando due caselle collegate comprendono un numero, il numero si propaga a tutta la
  catena e viene mostrato in blu. Una catena ancora senza numero è etichettata con una
  lettera e uno scostamento (\`a\`, \`a+1\`, \`a+2\`, ...); appena tocca una casella numerata le
  lettere diventano numeri. Collegare una catena a una casella già collegata sostituisce il
  vecchio collegamento.
- Ogni casella a cui manca ancora un predecessore mostra un puntino nell’angolo in basso a
  sinistra, e una freccia sbiadisce quando la sua casella ha un successore. Il lavoro è
  quindi sempre quello di unire una freccia marcata a una casella con il puntino.
- **Fai clic destro su** una casella per rimuovere entrambi i suoi collegamenti.
  **Trascina** una casella fuori dal tabellone per ottenere lo stesso effetto, oppure
  **trascina con il destro** fuori dal tabellone per spezzare tutta la sua catena.
- **Spezza** (il pulsante con l’anello spezzato accanto ad Annulla) fa sì che un clic su una casella
  spezzi tutta la sua catena, ogni collegamento, e trascinare una casella fuori dal tabellone
  fa lo stesso. Trascinare da una casella all’altra continua a collegarle. Premilo di nuovo
  per disattivarlo.
- **Risolvi** completa l’intero percorso.

### Tastiera (Keyboard)

- **I tasti freccia** muovono un cursore.
- **Enter** su una casella avvia un collegamento da lì; porta il cursore sul successore e
  premi di nuovo **Enter** per creare il collegamento (premilo sulla stessa casella per
  annullare).
- **Space** o **X** rimuovono i collegamenti della casella sotto il cursore; **Shift + X**
  ne spezza tutta la catena.
- **B** è il pulsante **Spezza**.

## Parametri

- **Larghezza** e **altezza** della griglia, da 2 fino a 12 caselle (2×2 è troppo piccola
  per funzionare).
- **Inizio e fine negli angoli**: quando è attivo, l’1 sta sempre nella casella in alto a
  sinistra e N in quella in basso a destra. Altrimenti i due estremi vengono collocati a
  caso, ma restano comunque mostrati.
`,ue=e({default:()=>de}),de=`# Singoli

Ogni casella della griglia contiene un numero. Annerisci alcune caselle (nascondendone il
numero) in modo che valgano tre cose insieme:

- nessun numero compare più di una volta tra le caselle bianche di una stessa riga o
  colonna;
- due caselle nere non si toccano mai lungo un lato (gli angoli vanno bene);
- le caselle bianche formano tutte un’unica regione connessa, unita lato contro lato.

Questo è l’_Hitori_ di Nikoli. Una buona apertura è cercare due numeri uguali separati da
una casella: uno dei due deve essere nero, quindi la casella in mezzo è per forza bianca.
Due numeri uguali affiancati significano che ogni altra copia di quel numero nella loro
linea è nera.

Gli errori si vedono in rosso: le caselle nere che si toccano ricevono una cornice rossa
attorno al gruppo, le caselle bianche tagliate fuori dalla regione principale ricevono un
contorno rosso, e due caselle cerchiate che condividono una linea con lo stesso numero sono
disegnate in rosso.

Il rompicapo è finito quando nessuna regola è infranta; non serve cerchiare le bianche.

## Comandi

### Mouse e tocco

- **Fai clic su** una casella per annerirla; fai clic un’altra volta per ripristinarla.
- **Fai clic destro** per disegnare un cerchio attorno a un numero e annotare che è
  sicuramente bianco; fai clic destro un’altra volta per togliere il cerchio. Fai clic o
  fai clic destro per cancellare il segno che una casella ha già.
- **Risolvi** riempie tutta la griglia e cerchia ogni casella bianca.

### Tastiera (Keyboard)

- **I tasti freccia** muovono un cursore nella griglia (passando da un bordo all’altro).
- **Enter** annerisce o ripristina la casella sotto il cursore e **Space** la cerchia o le
  toglie il cerchio.

## Parametri

- **Larghezza** e **altezza** della griglia, da 2 fino a 20 per i rompicapi generati.
- **Difficoltà**: i rompicapi _Facile_ richiedono solo gli argomenti diretti — una casella
  nera obbliga le sue vicine a essere bianche, un numero cerchiato obbliga i suoi gemelli a
  essere neri, i motivi della coppia separata da una casella e della coppia affiancata, una
  casella bianca con una sola via d’uscita e i piccoli motivi negli angoli. I rompicapi
  _Impegnativo_ richiedono anche di accorgersi di quando annerire una casella taglierebbe
  in due la regione bianca, e di usare coppie di coppie sfalsate di una casella. Ogni
  rompicapo ha esattamente una soluzione.
`,fe=e({default:()=>pe}),pe=`# Sedici

Un rompicapo a scorrimento senza casella vuota. Ogni casella contiene una tessera numerata
e, invece di far scorrere una singola tessera, fai scorrere di un passo un’intera riga o
colonna. La tessera spinta oltre il bordo rientra subito dall’estremità opposta della
stessa linea, come se la griglia fosse avvolta attorno a una ciambella. Ordina le tessere
in modo che contino a partire da 1 dall’angolo in alto a sinistra, da sinistra a destra e
poi riga dopo riga.

## Comandi

### Mouse e tocco

- **Fai clic su** una delle frecce lungo il bordo per far scorrere quella riga o colonna di
  un passo nella direzione indicata dalla freccia. **Fai clic destro su** una freccia per
  far scorrere la linea nel verso opposto.
- **Risolvi** si limita a sostituire la griglia con quella ordinata. Non ti mostra un
  percorso, ma ti dà un tabellone pulito su cui provare le manovre.

### Tastiera (Keyboard)

- **I tasti freccia** spostano un’evidenziazione lungo l’anello di frecce del bordo.
- **Enter** fa scorrere la linea evidenziata nel verso della sua freccia e **Space** la fa
  scorrere nell’altro.

## Parametri

- **Larghezza** e **altezza** della griglia. Sulle griglie con entrambi i lati dispari si
  può raggiungere solo metà di tutte le disposizioni, perciò il generatore ne distribuisce
  soltanto di raggiungibili.
- **Numero di mosse di mescolamento**: lascia 0 per una disposizione del tutto casuale,
  oppure imposta un numero per mescolare la griglia ordinata con esattamente quel numero di
  scorrimenti singoli. L’idea è poi capire quali scorrimenti sono stati fatti e disfarli
  nello stesso numero di mosse; più mosse di mescolamento chiedi, più è probabile che
  esista una soluzione più corta.
`,me=e({default:()=>he}),he=`# Diagonali

Una griglia di caselle vuote con numeri cerchiati su alcuni dei suoi angoli. Traccia una
linea diagonale in ogni casella, inclinata in un senso o nell’altro, in modo che:

- ogni numero cerchiato abbia esattamente quel numero di linee che toccano il suo angolo
  (un 4 sta in mezzo a una croce, uno 0 ha ogni linea vicina inclinata dalla parte
  opposta);
- le linee non si uniscano mai in un anello chiuso.

Un numero che ha già troppe linee, o che non può più averne abbastanza, diventa rosso, e
così ogni linea che fa parte di un anello. Il rompicapo è finito quando ogni casella ha una
linea e non c’è più nulla di rosso.

## Comandi

### Mouse e tocco

- **Fai clic su** una casella per tracciarci un \`\\\`; fai clic un’altra volta per
  trasformarlo in \`/\`, e un’altra ancora per cancellarlo.
- **Fai clic destro** per percorrere il ciclo al contrario: \`/\`, poi \`\\\`, poi vuoto. Una
  casella si può quindi impostare in entrambi i sensi con un solo tasto.
- **Risolvi** riempie tutta la griglia.

### Tastiera (Keyboard)

- **I tasti freccia** muovono un cursore nella griglia.
- **Enter** fa avanzare la casella sotto il cursore come un clic sinistro e **Space** come
  un clic destro.

## Parametri

- **Larghezza** e **altezza** della griglia, in caselle.
- **Difficoltà**: i rompicapi _Facile_ si risolvono una casella alla volta — un numero già
  soddisfatto oppure che ha bisogno di tutte le caselle rimaste, e le caselle in cui una
  delle due linee chiuderebbe un anello. I rompicapi _Difficile_ richiedono anche di
  ragionare su coppie di caselle che devono inclinarsi nello stesso senso ancora prima che
  tu sappia quale, e sulle regioni che una linea isolerebbe dal bordo della griglia. Non
  serve mai tirare a indovinare; ogni rompicapo ha esattamente una soluzione.
`,ge=e({default:()=>_e}),_e=`# Solo

Riempi la griglia quadrata di cifre in modo che ogni riga, ogni colonna e ogni blocco dal
contorno marcato contengano ciascuna cifra esattamente una volta. Alcune caselle sono date
come indizi; le altre stanno a te. Il normale rompicapo 3×3 è il Sudoku che tutti
conoscono, ma i blocchi possono anche essere rettangolari (un rompicapo 2×3 ha sei blocchi
3×2) e la griglia può arrivare a 16×16, dove le lettere a, b, c… sostituiscono le cifre
oltre il 9.

Si possono attivare tre varianti:

- **X**: anche le due diagonali principali, leggermente ombreggiate, devono contenere
  ciascuna cifra.
- **Jigsaw**: i blocchi sono forme irregolari che cambiano da un rompicapo all’altro.
- **Killer**: non ci sono cifre date. La griglia è invece divisa in «gabbie» tratteggiate,
  ognuna contrassegnata con la somma delle cifre che contiene. Nessuna cifra può comparire
  due volte in una gabbia.

Ogni rompicapo ha esattamente una soluzione e la si raggiunge sempre con il puro
ragionamento, alla difficoltà che hai scelto.

## Comandi

Le cifre che si scontrano con un’altra copia nella loro riga, colonna, blocco, diagonale o
gabbia sono mostrate in rosso, come pure una gabbia le cui cifre non danno la somma
indicata. **Aiutino** scrive una casella — la più facile ancora aperta, o la prima cifra che
contraddice la soluzione — e lascia il resto a te: il rompicapo resta in gioco, e con pochi
aiutini la vittoria, e il suo credito, restano tuoi. **Risolvi** inserisce l’intera
soluzione e chiude il rompicapo.

### Mouse e tocco

- **Fai clic su** una casella vuota per selezionarla, poi usa il tastierino sullo schermo per
  scriverci una cifra (i tasti con le lettere sono le cifre oltre il 9). Un altro clic sulla
  casella selezionata la deseleziona.
- **⌫** sul tastierino svuota di nuovo la casella selezionata e **✎** attiva le
  annotazioni a matita, così quello che scegli poi entra come piccola nota invece che come
  risposta.
- **Fai clic destro su** una casella per selezionarla subito per le **annotazioni a
  matita**. Le annotazioni servono solo ad aiutarti a ragionare; il gioco non ne tiene
  conto e inserire una cifra le cancella.
- **Annotazioni** nel menu di pausa riempie ogni casella vuota con l’insieme
  completo delle annotazioni a matita, per chi preferisce partire da tutto e depennare i
  candidati.
- **Evidenzia** (la lente accanto ad Annulla) mette in risalto ogni casella che contiene la stessa
  cifra dell’ultima casella su cui hai fatto clic, indizi compresi, e mostra quella cifra in
  grassetto fra le annotazioni a matita. Premilo di nuovo per disattivarlo.

### Tastiera (Keyboard)

- **Digita una cifra** (o una lettera per le cifre oltre il 9) per riempire la casella
  selezionata.
- **Space** o **Backspace** svuotano la casella selezionata (la sua cifra o tutte le sue
  annotazioni a matita).
- **I tasti freccia** muovono un cursore da tastiera. **Enter** fa passare il cursore fra
  l’inserimento normale e quello a matita, e le cifre digitate finiscono nella casella su
  cui si trova.
- **M** è il pulsante **Annotazioni** e **L** il pulsante **Evidenzia**.

## Parametri

- **Colonne** e **righe di sottoblocchi**: la griglia è grande quanto il loro prodotto e
  ogni blocco è largo quanto il numero di righe e alto quanto il numero di colonne. In
  modalità jigsaw il prodotto è semplicemente la dimensione della griglia.
- **X**, **Jigsaw** e **Killer** attivano le varianti descritte sopra. I rompicapi killer
  sono limitati a griglie di al massimo nove cifre.
- **Simmetria**: come il motivo degli indizi si rispecchia. Più simmetria è più bella da
  vedere, ma tende a lasciare più indizi dello stretto necessario.
- **Difficoltà**: il tipo di ragionamento più difficile che il rompicapo richiederà.
  _Facilissimo_ e _Facile_ hanno sempre una casella che si può riempire direttamente; _Medio_
  richiede di ragionare su dove una cifra può andare fra un blocco e una linea; _Difficile_
  richiede insiemi di caselle che insieme si accaparrano un insieme di cifre; _Esperto_ aggiunge
  le catene di forzatura; e i rompicapi _Estremo_ non si possono finire senza tirare a indovinare
  e tornare sui propri passi. I rompicapi difficili richiedono più tempo per essere generati.
`,ve=e({default:()=>ye}),ye=`# Tende

La griglia è un campeggio: alcune caselle contengono alberi, le altre sono terreno libero.
Pianta le tende sulle caselle vuote in modo che:

- ci siano esattamente tante tende quanti alberi;
- ogni albero possa essere abbinato a una tenda tutta sua su una casella immediatamente
  accanto (sopra, sotto, a sinistra o a destra — non in diagonale). Una tenda può capitare
  accanto anche ad altri alberi, ma ogni tenda appartiene a un albero e ogni albero a una
  tenda;
- due tende non si tocchino mai, nemmeno per un angolo;
- i numeri lungo il bordo destro e quello inferiore diano il numero di tende in ogni riga e
  in ogni colonna.

Gli indizi sono soltanto i conteggi, quindi tutto il rompicapo sta nel capire dove devono
stare le tende. Ogni rompicapo qui si risolve con il solo ragionamento, senza tirare a
indovinare.

## Comandi

Le tende che si toccano sono mostrate in rosso con un contrassegno sul lato o sull’angolo
condiviso, e lo stesso vale per qualsiasi gruppo di tende con troppo pochi alberi fra loro,
o per qualsiasi gruppo di alberi che non ha più spazio per tutte le sue tende. Un conteggio
diventa grigio quando la sua linea ha il numero giusto di tende e rosso quando non può più
essere soddisfatto. **Risolvi** piazza tutte le tende al posto tuo.

### Mouse e tocco

- **Fai clic su** una casella vuota per piantarci una tenda; fai clic un’altra volta per
  toglierla.
- **Fai clic destro su** una casella vuota per segnarla come erba, cioè per dire che sei
  sicuro che lì non va nessuna tenda; fai clic destro un’altra volta per cancellare il
  segno. Fai clic o fai clic destro per svuotare una casella che contiene già qualcosa.
- **Trascina con il destro** lungo una riga o una colonna per trasformare in erba, in un
  colpo solo, ogni casella vuota su cui passi — comodo per completare una linea quando
  tutte le sue tende sono già piazzate. Le tende e i segni già presenti restano intatti.

### Tastiera (Keyboard)

- **I tasti freccia** muovono un cursore.
- **Enter** pianta o toglie una tenda sotto il cursore.
- **Space** segna o cancella l’erba sotto il cursore.

## Parametri

- **Larghezza** e **altezza** della griglia, da 4 fino a 20 caselle.
- **Difficoltà**: i rompicapi _Facile_ cedono al conteggio e all’osservazione di ciò che
  serve a ogni albero e a ogni tenda. I rompicapi _Impegnativo_ richiedono anche di
  valutare come le collocazioni possibili in una linea vincolino quelle vicine, e di
  pensare a quali caselle gli alberi possono condividere.
`,be=e({default:()=>xe}),xe=`# Torri

Ogni casella della griglia riceve una torre, con un’altezza da 1 fino alla dimensione della
griglia. Ogni riga e ogni colonna devono contenere ciascuna altezza esattamente una volta.
I numeri lungo il bordo ti dicono quante torri vedresti guardando dentro quella riga o
colonna da quel lato: una torre nasconde ogni torre più bassa dietro di sé. Un indizio pari
alla dimensione della griglia significa che le altezze salgono per tutta la linea; un
indizio uguale a 1 significa che la torre più alta sta proprio su quel bordo.

I rompicapi più grandi e più difficili partono con alcune torri già costruite e tralasciano
qualche indizio sul bordo. Le cifre che si scontrano con un’altra nella loro riga o colonna,
e gli indizi che le torri costruite finora non possono più soddisfare, sono mostrati in
rosso. Questo rompicapo è più noto come Skyscrapers.

## Comandi

Le torri date non si possono cambiare e **Risolvi** inserisce la risposta.

### Mouse e tocco

- **Fai clic su** una casella per selezionarla, poi usa i tasti sullo schermo
  per costruire una torre di quell’altezza. **⌫** sul tastierino svuota di nuovo la
  casella.
- **✎** sul tastierino attiva le **annotazioni a matita**: quello che scegli poi entra come
  piccola nota, la casella resta selezionata così puoi aggiungerne diverse, e la stessa
  cifra ripetuta ne cancella una. Inserire una cifra vera cancella le annotazioni a matita
  in quella casella.
- **Fai clic destro su** una casella per selezionarla subito per le annotazioni a matita.
- **Annotazioni** nel menu di pausa riempie ogni casella vuota con l’insieme
  completo delle annotazioni a matita.
- **Evidenzia** (la lente accanto ad Annulla) mette in risalto ogni casella che contiene la stessa
  altezza dell’ultima casella su cui hai fatto clic, e mostra quell’altezza in grassetto fra
  le annotazioni a matita. Premilo di nuovo per disattivarlo.

### Tastiera (Keyboard)

- **Digita una cifra** per costruire una torre di quell’altezza nella casella selezionata.
  **Space** o **Backspace** la svuotano.
- **I tasti freccia** muovono un cursore da tastiera. **Enter** lo fa passare dalla
  modalità cifra a quella a matita; le cifre digitate entrano nella casella evidenziata e
  il cursore resta dov’è.
- **M** è il pulsante **Annotazioni** e **L** il pulsante **Evidenzia**.

## Parametri

- **Dimensione della griglia** — da 3 a 9. Le torri si inseriscono come cifre singole, ed è
  per questo che il limite è 9.
- **Difficoltà** — i rompicapi Facile richiedono solo le conseguenze dirette di ogni indizio e
  delle regole di riga e colonna. I rompicapi Difficile vogliono che tu consideri ogni
  disposizione permessa da un indizio e che individui insiemi di caselle che condividono pochi
  candidati. Esperto aggiunge ragionamenti sugli insiemi più difficili e catene di forzatura, e i
  rompicapi Estremo non si possono finire senza qualche tentativo ed errore, anche se la
  soluzione resta comunque unica.
`,Se=e({default:()=>Ce}),Ce=`# Binari

Una ferrovia entra nella griglia da sinistra ed esce dal basso; le due estremità sono
mostrate come rotaie che proseguono fuori dal tabellone. Completa la linea che le unisce.
Il tracciato è un percorso unico, senza diramazioni, anelli o incroci, costruito solo con
pezzi diritti e curve a un quarto di giro, così ogni casella che attraversa ha esattamente
due rotaie che ne escono. Alcuni pezzi sono già posati su caselle ombreggiate e non si
possono cambiare. Il numero sopra ogni colonna e accanto a ogni riga dice per quante
caselle di quella linea passa il tracciato finito.

I numeri diventano grigi quando la loro linea contiene il giusto numero di caselle di
binario, e rossi quando una linea non può più tornare: troppe caselle di binario, oppure
tante caselle barrate da non lasciare più spazio a sufficienza. Anche le caselle in cui le
rotaie si incontrano male (tre rotaie in una stessa casella, un anello chiuso, o del
binario che avanza una volta collegati l’ingresso e l’uscita) sono disegnate in rosso.

## Comandi

**Risolvi** posa il tracciato completo, togliendo le tue marcature che lo contraddicono. Il
rompicapo è finito quando un unico binario ininterrotto collega l’ingresso all’uscita e
ogni conteggio torna.

### Mouse e tocco

- **Trascina** attraverso una serie di caselle vicine per posare le rotaie fra di esse. Il
  percorso può svoltare negli angoli; un trascinamento che segue soltanto rotaie già
  presenti le toglie invece di posarle.
- **Fai clic** vicino al lato di una casella per aggiungere o togliere una singola rotaia
  attraverso quel lato. Fai clic al centro di una casella per segnarla come «qui passa il
  tracciato» senza dire da quali lati — comodo per contare — e fai clic di nuovo per
  cancellare la marcatura.
- **Fai clic destro** vicino a un lato per tracciare una barretta che significa «niente
  rotaia qui»; fai clic destro al centro di una casella per barrarla tutta.
  **Trascina con il destro** lungo una riga o una colonna per barrare (o togliere la
  barratura a) una serie di caselle in un colpo solo.
- **Gomma** (il pulsante con la gomma accanto ad Annulla) fa sì che un clic o un trascinamento ripulisca
  le caselle: ogni casella toccata perde le sue rotaie, le barrette «niente rotaia» e la sua
  marcatura o barratura. I pezzi dati restano. Premilo di nuovo per tornare a posare binari.

### Tastiera (Keyboard)

- **I tasti freccia** spostano un cursore che si ferma sulle caselle e sui lati fra di
  esse. **Enter** funziona come un clic nel punto del cursore e **Space** come clic destro.
- **E** è il pulsante **Gomma**.

## Parametri

- **Larghezza** e **altezza** della griglia, almeno quattro ciascuna.
- **Difficoltà**: i rompicapi _Facile_ si lasciano risolvere guardando una casella o una
  linea alla volta. Quelli _Impegnativo_ chiedono anche di pensare a dove possa mai finire
  l’ultima casella di binario di una linea, e alle estremità libere di rotaia che vanno
  proseguite lungo una linea o attraverso di essa. Ogni rompicapo ha esattamente una
  soluzione.
- **Vieta indizi 1 consecutivi**: quando è attivo (impostazione predefinita), due linee
  vicine non valgono mai 1 tutte e due, e non lo valgono né la colonna d’ingresso né la
  riga d’uscita. Così il tracciato non fila in lunghi rettilinei noiosi lungo il bordo.
`,we=e({default:()=>Te}),Te=`# Rotazioni

Una griglia di tessere numerate è stata mescolata ruotando blocchi quadrati di tessere.
Riportale a posto finché i numeri non si leggono in ordine da sinistra a destra e dall’alto
in basso. Nel gioco di base ogni mossa ruota un blocco 2×2 di un quarto di giro attorno al
punto in cui si incontrano le sue quattro tessere; le impostazioni più grandi ruotano
blocchi 3×3 o anche maggiori.

Nelle varianti **orientabili** ogni tessera porta un triangolo e il rompicapo conta come
finito solo quando tutti i triangoli puntano verso l’alto. Nella variante **solo righe** le
tessere portano invece il numero della loro riga, così tutti gli 1 devono soltanto arrivare
nella prima riga, i 2 nella seconda e così via.

## Comandi

**Risolvi** rimette subito ogni tessera al suo posto. Non ti mostra un percorso, ma è un
modo rapido per avere una griglia pulita su cui esercitarti con una sequenza di rotazioni.

### Mouse e tocco

- **Fai clic** al centro di un blocco per ruotarlo in senso antiorario; **fai clic destro** per
  ruotarlo in senso orario. Nei blocchi 2×2 il centro è l’angolo in cui si incontrano quattro
  tessere; nei blocchi di dimensione dispari è la tessera di mezzo. Un clic verso il bordo della
  griglia ruota il blocco addossato a quel bordo.
- **Orario** (il pulsante con la freccia circolare accanto ad Annulla) inverte i due sensi: un
  clic ruota i blocchi in senso orario e un clic destro in senso antiorario. Premilo di nuovo
  per tornare indietro.

### Tastiera (Keyboard)

- **I tasti freccia** spostano nella griglia un contorno grande quanto un blocco. **Enter**
  ruota in senso antiorario il blocco contornato e **Space** lo ruota in senso orario.
- **A**, **B**, **C** e **D** ruotano in senso antiorario i blocchi d’angolo in alto a
  sinistra, in alto a destra, in basso a sinistra e in basso a destra; tieni premuto
  **Shift** per il senso orario.
- **T** è il pulsante **Orario**.

## Parametri

- **Larghezza** e **altezza** della griglia.
- **Dimensione del blocco rotante**: il lato del blocco quadrato che una mossa ruota
  (almeno 2 e non più grande della griglia).
- **Un numero per riga**: una variante più facile in cui tutte le tessere di una riga hanno
  lo stesso numero.
- **L’orientamento conta**: le tessere ricevono dei triangoli e alla fine devono puntare
  tutte verso l’alto.
- **Numero di mosse di mescolamento**: lascialo a 0 per un mescolamento accurato, oppure
  indica un numero piccolo per avere una griglia che dista esattamente quel numero di
  rotazioni dalla soluzione. Il tuo scopo è allora trovare quelle rotazioni e disfarle,
  così un mescolamento di tre mosse merita una risposta di tre mosse (anche se a volte può
  esistere un percorso più breve).
`,Ee=e({default:()=>De}),De=`# Non morti

La griglia è una sala degli specchi infestata. Ogni casella senza specchio nasconde uno di
tre mostri: un **fantasma**, un **vampiro** o uno **zombie**. La legenda sopra la griglia ti
dice quanti ne restano da piazzare per ciascun tipo, e il numero in ogni posizione di bordo
dice quanti mostri vedresti guardando dentro la griglia da lì, seguendo la linea di vista
mentre rimbalza sugli specchi diagonali.

Gli specchi cambiano quello che si vede. Il vampiro non ha riflesso, quindi viene contato
solo finché la tua linea di vista non ha ancora incontrato uno specchio. Il fantasma è il
contrario: invisibile se guardato direttamente, compare solo dopo un riflesso. Lo zombie si
vede sempre. Se una linea di vista attraversa due volte la stessa casella, il mostro che si
trova lì viene contato ogni volta che è visibile. Piazza tutti i mostri in modo che ogni
numero di bordo e ogni totale tornino.

## Comandi

Un numero di bordo diventa grigio quando la sua linea di vista è del tutto spiegata e rosso
quando non può più essere soddisfatto; un conteggio della legenda diventa rosso quando sono
stati piazzati troppi mostri di quel tipo. Le annotazioni a matita servono solo ai tuoi
appunti e non hanno mai effetto sul rompicapo.

### Mouse e tocco

- **Fai clic su** una casella vuota per passare in sequenza da fantasma a vampiro, a zombie
  e di nuovo a vuota. La casella resta evidenziata.
- I tasti sullo schermo scelgono direttamente un mostro per la casella
  evidenziata, senza scorrere fino a lui; **⌫** svuota la casella, annotazioni a matita
  comprese.
- **✎** sul tastierino attiva le **annotazioni a matita**: il mostro che scegli viene allora
  aggiunto all’elenco dei candidati della casella, o ne viene tolto.
- **Fai clic destro su** una casella per aggiungere le annotazioni a matita un candidato
  alla volta (fantasma, poi vampiro, poi zombie, poi niente).
- **Vista** (l’occhio accanto ad Annulla) traccia le linee di vista che passano per la casella
  evidenziata, piegandole sugli specchi, e cerchia i numeri di bordo alle due estremità di
  ciascuna. Finché è attivo, un clic su un numero di bordo traccia la linea di quel numero;
  un altro clic la lascia andare. Premi di nuovo **Vista** per disattivarlo. Finché è
  attivo, un clic su una casella non evidenziata si limita a evidenziarla, così puoi
  seguire una casella vuota senza riempirla; un altro clic la fa scorrere come al solito.

### Tastiera (Keyboard)

- I tasti freccia spostano l’evidenziazione. Enter fa scorrere il mostro evidenziato; Space
  fa scorrere le sue annotazioni a matita.
- \`G\`, \`V\`, \`Z\` (oppure \`1\`, \`2\`, \`3\`) mettono quel mostro nella casella evidenziata, o ne
  attivano e disattivano l’annotazione a matita quando l’evidenziazione è in modalità
  matita. \`E\`, \`0\`, Backspace o Delete svuotano la casella, annotazioni a matita comprese.
- \`S\` è il pulsante **Vista**.

## Parametri

- **Larghezza**, **Altezza** — la dimensione della griglia, da 3×3 fino a 54 caselle in
  tutto.
- **Difficoltà** — i rompicapi _Facile_ cedono contando lungo una linea di vista alla
  volta; quelli _Normale_ chiedono di soppesare le combinazioni che un intero percorso
  consente; quelli _Impegnativo_ non si finiscono senza tentare un’ipotesi.
`,Oe=e({default:()=>ke}),ke=`# Disuguaglianze

Riempi la griglia in modo che ogni riga e ogni colonna contengano una sola volta ciascuna
cifra da 1 fino alla dimensione della griglia — un quadrato latino — rispettando i segni
disegnati fra le caselle vicine.

Nella modalità **Disuguaglianze** i segni sono simboli di maggiore: il lato aperto di un \`>\`
guarda verso la cifra più grande e la punta verso quella più piccola. Non tutte le coppie
di caselle vicine portano un segno, e più il rompicapo è difficile, meno segni ci sono.

Nella modalità **Adiacenti** i segni sono barrette che vogliono dire che le due cifre
differiscono esattamente di uno (come 3 e 4). Qui ogni barretta è sempre mostrata, quindi
anche l’**assenza** di una barretta fra due caselle è un indizio: quelle due cifre di sicuro
non sono consecutive.

Sui giornali il rompicapo compare con il nome Futoshiki.

## Comandi

Le cifre che infrangono una regola — un doppione in una riga o in una colonna, oppure un
segno che non regge — sono mostrate in rosso, e così il segno che non torna. Il rompicapo è
completo quando ogni casella è riempita e non c’è più niente di rosso.

### Mouse e tocco

- **Fai clic su** una casella per selezionarla, poi usa i tasti sullo schermo per
  inserirvi una cifra. **⌫** sul tastierino svuota di nuovo la casella selezionata. Un secondo
  clic sulla casella selezionata la deseleziona.
- **✎** sul tastierino attiva le **annotazioni a matita**: quello che scegli viene allora
  aggiunto a un piccolo elenco di possibilità nella casella, o ne viene tolto, invece di dare
  la risposta. Riempire una casella cancella le sue annotazioni a matita.
- **Fai clic destro su** una casella per selezionarla subito per le annotazioni a matita.
- **Annotazioni** nel menu di pausa riempie ogni casella vuota con tutte le annotazioni a
  matita possibili, pronte da depennare; **Aiutino** (la lampadina accanto ad Annulla) fa lo stesso ma
  tralascia quelle che un ragionamento facile esclude già.
- **Evidenzia** (la lente accanto ad Annulla) mette in risalto ogni casella che contiene la stessa
  cifra dell’ultima casella su cui hai fatto clic, cifre date comprese, e mostra quella cifra
  in grassetto fra le annotazioni a matita. Premilo di nuovo per disattivarlo.

### Tastiera (Keyboard)

- **Digita una cifra** per riempire la casella selezionata; \`0\`, Space o Backspace la svuota.
- I tasti freccia spostano un cursore nella griglia; Enter fa passare il cursore
  dall’inserimento delle cifre alle annotazioni a matita.
- \`M\` è il pulsante **Annotazioni**, \`H\` è **Aiutino** e \`L\` è **Evidenzia**.

## Parametri

- **Modalità** — Disuguaglianze (segni di maggiore) o Adiacenti (barrette fra cifre
  consecutive).
- **Dimensione** — il numero di righe e di colonne, da 3 a 9.
- **Difficoltà** — quanto ragionamento chiede il rompicapo. I rompicapi **Facilissimo** non hanno
  mai bisogno dei segni: in modalità Disuguaglianze non ne hanno nessuno e sono semplici quadrati
  latini, in modalità Adiacenti le barrette sono disegnate ma bastano le cifre date. Quelli
  **Facile** richiedono solo il significato diretto di ogni segno; quelli **Medio** chiedono di
  considerare insieme gruppi di caselle; quelli **Difficile** aggiungono il ragionamento sugli
  insiemi in base alla posizione e le catene di forzatura; i rompicapi **Estremo** (disponibili
  dalla finestra personalizzata) possono richiedere tentativi ed errori, anche se la soluzione resta
  unica.
`,Ae=e({default:()=>je}),je=`# Indisciplinato

Colora di nero o di bianco ogni casella della griglia. Alcune caselle sono date come indizio
e non si possono cambiare; le altre partono grigie e tocca a te riempirle. Quando hai finito
devono valere tre cose:

- ogni riga contiene tante caselle nere quante bianche;
- ogni colonna contiene tante caselle nere quante bianche;
- non ci sono tre caselle consecutive dello stesso colore in una riga o in una colonna.

Gli errori si vedono in rosso: una fila di tre o più caselle uguali riceve una cornice
rossa, e una casella porta un **!** rosso quando la sua riga o la sua colonna contiene già
troppe caselle di quel colore. Nella variante facoltativa «righe e colonne uniche» due righe
non possono seguire lo stesso motivo (e nemmeno due colonne); le linee uguali vengono
barrate in rosso.

## Comandi

Le caselle indizio — quelle disegnate con una cornicetta all’interno — non si possono
cambiare. **Risolvi** riempie tutta la griglia. Il rompicapo è finito quando ogni casella è
colorata e non c’è più niente di rosso.

### Mouse e tocco

- **Fai clic su** una casella grigia per renderla nera; fai clic di nuovo per il bianco e
  ancora una volta per svuotarla.
- **Fai clic destro** per scorrere nell’altro verso: prima bianco, poi nero, poi vuoto.
- **Fai clic centrale su** una casella per svuotarla subito.
- **Gomma** (il pulsante con la gomma accanto ad Annulla) fa sì che un clic svuoti la casella invece
  di colorarla. Premilo di nuovo per tornare a colorare.

### Tastiera (Keyboard)

- **I tasti freccia** spostano un cursore nella griglia.
- **Enter** fa scorrere la casella sotto il cursore come un clic e **Space** come
  clic destro.
- **1** dà il nero, **0** (o **2**) dà il bianco e **Backspace** svuota.
- **E** è il pulsante **Gomma**.

## Parametri

- **Larghezza** e **altezza** della griglia. Devono essere entrambe pari e almeno 6.
- **Righe e colonne uniche**: quando è attivo, due righe non possono essere identiche e
  nemmeno due colonne (una riga può però coincidere con una colonna). In questa modalità le
  griglie molto alte o molto larghe vengono rifiutate, perché non ci sono abbastanza linee
  diverse per tutte.
- **Difficoltà**: i rompicapi _Facile_ chiedono sempre e solo due ragionamenti immediati —
  due caselle uguali costringono la casella accanto o quella in mezzo al colore opposto, e
  una linea che ha già la sua parte di un colore prende ovunque l’altro colore. Quelli
  _Normale_ chiedono anche di capire dove possa ancora andare l’ultima casella di un colore
  in una linea senza creare una fila di tre. Ogni rompicapo ha esattamente una soluzione.
`,Me=e({default:()=>Ne}),Ne=`# Districa

Una manciata di punti è unita da linee dritte, e le linee sono aggrovigliate. Sposta i punti
finché non ci sono più due linee che si incrociano. Ogni rompicapo si può districare: il
computer ha costruito il grafo da una disposizione senza incroci e poi ha sparpagliato i
punti su un cerchio.

Le linee che al momento ne incrociano un’altra sono disegnate in rosso, così il groviglio si
riduce a vista d’occhio mentre lavori; il rompicapo è risolto quando non resta più niente di
rosso. Risolvi fa scivolare ogni punto in una disposizione che il computer sa funzionare.

## Comandi

Annulla ritira qualsiasi mossa, compresa quella di Risolvi.

### Mouse e tocco

- **Trascina** un punto e lascialo dove vuoi. Il punto che afferri diventa arancione e i
  suoi vicini blu. Se lasci un punto nel margine, finisce sul bordo del tabellone; se lo
  lasci del tutto fuori dall’area di disegno, il trascinamento viene annullato.
- **Aggancia** (il pulsante con la griglia accanto ad Annulla) attiva e disattiva una griglia
  magnetica: i punti lasciati cadere atterrano allora al centro delle caselle segnate da
  puntini tenui, che è anche il modo in cui è disposta la soluzione. Il pulsante resta acceso
  finché la griglia è attiva.

### Tastiera (Keyboard)

- **I tasti freccia** spostano un cursore da un punto all’altro in quella direzione.
  **Enter** o **Space** raccolgono il punto; i tasti freccia poi lo portano in giro (un
  ottavo di casella a pressione, una casella intera con Shift, un solo passo con Ctrl) e
  **Enter** o **Space** lo lasciano cadere.
- \`G\` è il pulsante **Aggancia**.

## Parametri

- **Numero di punti**: quanti punti ha il grafo, almeno 4. Più punti significano più linee e
  un groviglio più difficile. Il tabellone cresce con il numero di punti, così c’è sempre
  spazio per distanziarli.
`,Pe=e({$dir:()=>`ltr`,$locale:()=>`it`,$name:()=>q,default:()=>Fe,games:()=>Q,messages:()=>X,status:()=>Z,touchPhrases:()=>Y,tutorials:()=>$,ui:()=>J}),q=`Italiano`,J=JSON.parse(`{"appName":"Puzzlebox","menu":{"title":"Puzzlebox","tagline":"{n} rompicapi di logica disegnati a mano. Scegline uno e gioca.","lockedNote":"Ogni rompicapo che completi a mano ti fa guadagnare un credito. Spendi i crediti qui per aprire nuovi rompicapi.","language":"Lingua","stat":{"credits":{"one":"★ {n} credito","other":"★ {n} crediti"},"unlocked":"{n} di {total} sbloccati","solved":"{n} risolti","tight":{"credits":"★ {n}","unlocked":"{n}/{total}","solved":"✓ {n}","achievements":"{n}/{total}"},"achievements":"{n} di {total} obiettivi"},"hint":{"allOpen":"È tutto sbloccato.","complete":"Hai sbloccato l’intera raccolta!","spend":{"one":"Spendi un credito qui sotto per sbloccare un rompicapo.","other":"Spendi i crediti qui sotto per sbloccare altri rompicapi."},"earn":"Completa a mano un rompicapo qualsiasi per guadagnare un credito."},"card":{"label":"{name}: {description}","labelLocked":"{name}: {description} (bloccato)","solvedTag":"✓ risolto ×{n}","unlock":"Sblocca · 1 credito","unlocked":"Hai sbloccato {name}!","labelAlias":"{name} (noto anche come {alias}): {description}","labelLockedAlias":"{name} (noto anche come {alias}): {description} (bloccato)"},"noCredit":"Risolvi a mano un rompicapo qualsiasi per guadagnare un credito, poi torna a sbloccare questo.","surprise":"Sorprendimi: apri un rompicapo a caso","search":{"placeholder":"Cerca rompicapi","label":"Cerca i rompicapi per nome","clear":"Cancella la ricerca","empty":"Qui non c’è nessun rompicapo che si chiami «{q}». Prova un altro nome."},"privacy":{"note":"Puzzlebox conta come vengono giocati i suoi rompicapi — mai chi ci gioca — per renderli migliori."},"continue":"Continua","continueLabel":"Continua {name}","spend":"Spendi"},"notFound":{"title":"Rompicapo inesistente","body":"Non abbiamo nessun rompicapo chiamato «{slug}».","back":"Torna a tutti i rompicapi"},"locked":"Il rompicapo {name} è ancora bloccato. Guadagna un credito completando un rompicapo, poi sbloccalo.","pageTitle":"{name} · Puzzlebox","topbar":{"back":"Tutti i rompicapi","help":"Aiuto","creditsTitle":"I crediti sbloccano nuovi rompicapi. Completa a mano un rompicapo per guadagnarne uno.","boardLabel":"Tabellone di {name}"},"toolbar":{"type":"Tipo","custom":"Personalizzato…","new":"Nuovo","newTitle":"Nuova partita (N)","restart":"Ricomincia","restartTitle":"Ricomincia questo rompicapo","undo":"Annulla","undoTitle":"Annulla (U, Ctrl+Z)","redo":"Ripeti","redoTitle":"Ripeti (R, Ctrl+Y)","solve":"Risolvi","solveTitle":"Mostra la soluzione (Ctrl+S)","gameId":"Condividi","gameIdTitle":"Condividi questo rompicapo, o gioca quello che ti hanno mandato","keypad":"Tastierino","keypadTitle":"Mostra i tasti sullo schermo","zoomOut":"−","zoomOutTitle":"Più piccolo","zoomIn":"+","zoomInTitle":"Più grande","tapPlace":"Tocco: posiziona","tapMark":"Tocco: segna","tapTitle":"Che cosa fa un tocco semplice","tapPlaceTitle":"Il tocco posiziona, il tocco prolungato segna. Tocca per invertire.","tapMarkTitle":"Il tocco segna, il tocco prolungato posiziona. Tocca per invertire.","hint":"Aiutino","hintTitle":"Rivela una casella e continua a giocare. Con al massimo {n} aiutini guadagni comunque il credito.","more":"Altro","pause":"Pausa","pauseTitle":"Menu di pausa (Esc)"},"pause":{"title":"In pausa","resume":"Riprendi"},"pager":{"label":"Pagine","prev":"Pagina precedente","next":"Pagina successiva","page":"Pagina {n} di {total}"},"badge":{"won":"Risolto!","lost":"Partita persa"},"stage":{"generating":"Preparo un nuovo rompicapo…"},"keypad":{"label":"Tastierino","clear":"Cancella","clearTitle":"Svuota la casella selezionata (Backspace)","pencil":"Annotazioni a matita","pencilOnTitle":"I tasti scrivono annotazioni a matita. Tocca per tornare alle risposte.","pencilOffTitle":"Attivalo per scrivere i prossimi tasti come annotazioni a matita"},"drawer":{"title":"Come giocare a {name}","close":"Chiudi","replay":"▶ Rivedi il tutorial","achievements":"Obiettivi ({n}/{total})"},"dialog":{"ok":"OK","cancel":"Annulla","customTitle":"{name}: personalizzato","gameIdTitle":"Condividi questo rompicapo","byDescription":"Per descrizione","bySeed":"Per seme casuale","enterLabel":"Gioca un rompicapo preciso: incolla un codice","play":"Gioca","copy":"Copia","copied":"Copiato","link":"Link","linkTitle":"Copia un link che apre esattamente questo rompicapo","linkPrompt":"Link a questo rompicapo","shareLead":"Manda esattamente questo rompicapo a qualcun altro.","copyLink":"Copia link","linkCopied":"Link copiato","codes":"Codici del rompicapo","hintAd":{"title":"Un altro aiutino?","body":"Hai usato i tuoi {n} aiutini gratuiti. Con un altro, questo rompicapo non ti farà guadagnare il credito, a meno che tu non guardi una breve pubblicità per tenerlo.","watch":"Guarda la pubblicità e tieni il credito","anyway":"Prendi comunque l’aiutino"},"badCode":"Questo codice non apre un rompicapo di {name}. Controlla di averlo copiato per intero."},"toast":{"creditEarned":"+1 credito","tutorialComplete":"Tutorial completato. Ecco un rompicapo nuovo: completalo a mano per guadagnare un credito.","tutorialCompleteBack":"Tutorial completato. Torni al tuo rompicapo.","tutorialSkipped":"Tutorial saltato. Puoi rivederlo quando vuoi da Aiuto.","tapModeMark":"Tocca per segnare. Tieni premuto per l’azione principale.","tapModePlace":"Tocca per l’azione principale. Tieni premuto per segnare.","touchHint":"Tocca per giocare, tieni premuto per la seconda azione. Il primo pulsante rotondo scambia le due azioni.","hintNone":"Su questo tabellone non c’è più niente da rivelare.","hintNoCredit":"Hai superato i {n} aiutini, quindi questo rompicapo non ti farà guadagnare il credito. Puoi comunque finirlo.","hintAdFailed":"Nessuna pubblicità disponibile, quindi non è cambiato nulla: l’aiutino è ancora lì, se lo vuoi.","stuck":"Bloccato? Un aiutino rivela una casella e il rompicapo ti dà comunque il suo credito."},"tutorial":{"label":"Tutorial di {name}","step":"Passo {n} di {total}","next":"Avanti","done":"Fatto","skipStep":"Salta il passo","skipTutorial":"Salta il tutorial","nice":"Ottimo!","offScript":"Non quella: la mossa è stata annullata, così i passi corrispondono ancora al tabellone. Prova quello che chiede questo passo.","offScriptRead":"È stata annullata, così i passi corrispondono ancora al tabellone. Leggi prima questo passo.","pointer":{"drag":"trascina","rightClick":"clic destro","rightDrag":"trascina con il destro","middleClick":"clic centrale","longPress":"tieni premuto","longPressDrag":"trascina tenendo premuto","twoFingerTap":"tocca con due dita"}},"splash":{"tagline":"Rompicapi disegnati a mano, pronti da giocare","skip":"Salta"},"help":{"keypad":{"heading":"Il tastierino","introTouch":"I tasti sullo schermo scrivono al posto tuo","introPointer":"**Tastierino** nella barra degli strumenti mostra sullo schermo dei tasti che scrivono al posto tuo","select":": scegli prima una casella sul tabellone, poi premi un tasto.","clear":"- **⌫** svuota di nuovo la casella scelta.","pencil":"- **✎** attiva le annotazioni a matita, così i tasti scrivono piccole note invece\\n  di risposte. Premilo di nuovo per tornare alle risposte."}},"achievements":{"title":"Obiettivi","summary":"{n} di {total} ottenuti","unlocked":"Obiettivo sbloccato","secret":{"name":"Obiettivo segreto","description":"Continua a giocare per scoprirlo."},"earnedOn":"Ottenuto il {date}","progress":"{n} di {goal}","collection":"La collezione","tier":{"bronze":"Bronzo","silver":"Argento","gold":"Oro"},"meta":{"first-solve":{"name":"Primi passi","description":"Risolvi il tuo primo rompicapo da solo."},"solves-10":{"name":"Riscaldamento","description":"Risolvi 10 rompicapi."},"solves-50":{"name":"Il vizio del rompicapo","description":"Risolvi 50 rompicapi."},"solves-100":{"name":"Centurione","description":"Risolvi 100 rompicapi."},"solves-250":{"name":"Gran maestro","description":"Risolvi 250 rompicapi."},"specialist":{"name":"Specialista","description":"Risolvi 10 rompicapi nello stesso gioco."},"variety-3":{"name":"Assaggiatore","description":"Risolvi un rompicapo in 3 giochi diversi."},"variety-10":{"name":"Tuttofare","description":"Risolvi un rompicapo in 10 giochi diversi."},"variety-all":{"name":"Tutta la scatola","description":"Risolvi un rompicapo in ogni gioco della collezione."},"unlock-first":{"name":"Nuovo scaffale","description":"Sblocca il tuo primo gioco con un credito."},"unlock-15":{"name":"Collezione in crescita","description":"Arriva a 15 giochi sbloccati."},"unlock-25":{"name":"Portachiavi","description":"Arriva a 25 giochi sbloccati."},"unlock-all":{"name":"Passe-partout","description":"Sblocca ogni gioco della collezione."},"hardest-1":{"name":"Sfida accettata","description":"Risolvi un rompicapo al livello più difficile di un gioco."},"hardest-10":{"name":"Cacciatore di vette","description":"Risolvi il livello più difficile di 10 giochi diversi."},"hardest-all":{"name":"Incrollabile","description":"Risolvi il livello più difficile di ogni gioco."},"pure-1":{"name":"Foglio pulito","description":"Risolvi un rompicapo senza annullare e senza aiutini."},"pure-25":{"name":"Mano ferma","description":"Risolvi 25 rompicapi senza annullare e senza aiutini."},"quick-draw":{"name":"Pistolero lampo","description":"Risolvi un rompicapo in 30 secondi o meno."},"marathon":{"name":"Maratona","description":"Risolvi un rompicapo dopo averci passato più di 20 minuti."},"comeback":{"name":"Mai arrendersi","description":"Perdi un rompicapo, poi torna e risolvilo."},"second-thoughts":{"name":"Ripensamenti","description":"Annulla 100 volte e risolvi comunque il rompicapo."},"a-little-help":{"name":"Una spintarella","description":"Usa un aiutino."},"oops":{"name":"Ops","description":"Perdi un rompicapo."},"night-owl":{"name":"Nottambulo","description":"Risolvi un rompicapo tra mezzanotte e le 5 del mattino."},"on-a-roll":{"name":"In serie","description":"Risolvi 5 rompicapi in una sola sessione."},"days-3":{"name":"Habitué","description":"Gioca in 3 giorni diversi."},"days-7":{"name":"Affezionato","description":"Gioca in 7 giorni diversi."},"days-30":{"name":"Parte dell’arredamento","description":"Gioca in 30 giorni diversi."},"quick-study":{"name":"Impari in fretta","description":"Segui un tutorial fino alla fine."},"scholar":{"name":"Erudito","description":"Segui 10 tutorial diversi fino alla fine."},"collector-25":{"name":"Collezionista di medaglie","description":"Ottieni 25 obiettivi."},"collector-60":{"name":"Bacheca dei trofei","description":"Ottieni 60 obiettivi."},"legend":{"name":"Leggenda del rompicapo","description":"Ottieni tutti gli altri obiettivi."}},"andMore":{"one":"{n} obiettivo sbloccato","other":"{n} obiettivi sbloccati"}},"endgame":{"won":"Rompicapo risolto!","lost":"Partita persa","credit":"★ +1 credito: quanto basta per sbloccare un nuovo rompicapo della raccolta.","wonNote":"Passiamo al prossimo?","forfeitNote":"Questo rompicapo non ti fa guadagnare il credito: la soluzione è già stata mostrata strada facendo.","lostNote":"Stavolta è andata male. Ci riprovi?","next":"Prossimo rompicapo","retry":"Riprova","dismiss":"Chiudi e guarda il tabellone","time":"Tempo","moves":"Mosse","hints":"Aiutino","best":"Record {time}","newBest":"Nuovo record!","stars":"{n} stelle su 3","stepUp":"Prova {preset} →"},"welcome":{"title":"Scegli il tuo primo rompicapo","subtitle":{"one":"{n} rompicapo per cominciare. Sceglilo e gioca.","other":"{n} rompicapi per cominciare. Scegline uno e gioca."},"more":{"one":"…e {n} altro da sbloccare","other":"…e altri {n} da sbloccare"},"how":"Ogni rompicapo che risolvi ti fa guadagnare un credito, e ogni credito sblocca un nuovo gioco."},"gamepad":{"connected":"Controller collegato"},"settings":{"title":"Impostazioni","done":"Fatto","sound":"Suono","volume":"Volume","reduceMotion":"Riduci animazioni","vibration":"Vibrazione","statistics":"Statistiche di gioco","on":"Sì","off":"No","portalMuted":"Il sito ha disattivato l’audio."}}`),Y=[[`trascinamento con il tasto destro`,`trascinamento tenendo premuto`],[`trascinamento con il destro`,`trascinamento tenendo premuto`],[`trascina con il tasto destro`,`trascina tenendo premuto`],[`trascina con il destro`,`trascina tenendo premuto`],[`trascinare con il destro`,`trascinare tenendo premuto`],[`fai clic destro`,`tieni premuto`],[`fare clic destro`,`tenere premuto`],[`facendo clic destro`,`tenendo premuto`],[`clicca con il destro`,`tieni premuto`],[`clic destro`,`tocco prolungato`],[`tasto destro`,`tocco prolungato`],[`fai clic centrale sul`,`tocca con due dita il`],[`fai clic centrale sullo`,`tocca con due dita lo`],[`fai clic centrale sulla`,`tocca con due dita la`],[`fai clic centrale sui`,`tocca con due dita i`],[`fai clic centrale sugli`,`tocca con due dita gli`],[`fai clic centrale sulle`,`tocca con due dita le`],[`fai clic centrale sull`,`tocca con due dita l`],[`fai clic centrale su`,`tocca con due dita`],[`fai clic centrale`,`fai un tocco con due dita`],[`clic centrale`,`tocco con due dita`],[`tasto centrale`,`tocco con due dita`],[`fai doppio clic sul`,`tocca due volte il`],[`fai doppio clic sullo`,`tocca due volte lo`],[`fai doppio clic sulla`,`tocca due volte la`],[`fai doppio clic sui`,`tocca due volte i`],[`fai doppio clic sugli`,`tocca due volte gli`],[`fai doppio clic sulle`,`tocca due volte le`],[`fai doppio clic sull`,`tocca due volte l`],[`fai doppio clic su`,`tocca due volte`],[`fai doppio clic`,`fai un doppio tocco`],[`doppio clic`,`doppio tocco`],[`fai clic sinistro sul`,`tocca il`],[`fai clic sinistro sullo`,`tocca lo`],[`fai clic sinistro sulla`,`tocca la`],[`fai clic sinistro sui`,`tocca i`],[`fai clic sinistro sugli`,`tocca gli`],[`fai clic sinistro sulle`,`tocca le`],[`fai clic sinistro sull`,`tocca l`],[`fai clic sinistro su`,`tocca`],[`fai clic sinistro`,`fai un tocco`],[`clic sinistro`,`tocco`],[`tasto sinistro`,`tocco`],[`fai clic sul`,`tocca il`],[`fai clic sullo`,`tocca lo`],[`fai clic sulla`,`tocca la`],[`fai clic sui`,`tocca i`],[`fai clic sugli`,`tocca gli`],[`fai clic sulle`,`tocca le`],[`fai clic sull`,`tocca l`],[`fai clic su`,`tocca`],[`fai clic di nuovo`,`tocca di nuovo`],[`fai clic un’altra volta`,`tocca un’altra volta`],[`fai clic`,`fai un tocco`],[`fare clic sul`,`toccare il`],[`fare clic sulla`,`toccare la`],[`fare clic sull`,`toccare l`],[`fare clic su`,`toccare`],[`fare clic`,`fare un tocco`],[`facendo clic sul`,`toccando il`],[`facendo clic sulla`,`toccando la`],[`facendo clic sull`,`toccando l`],[`facendo clic su`,`toccando`],[`facendo clic`,`toccando`],[`clicca sul`,`tocca il`],[`clicca sulla`,`tocca la`],[`clicca sull`,`tocca l`],[`clicca su`,`tocca`],[`clicca`,`tocca`],[`cliccare`,`toccare`],[`cliccando`,`toccando`],[`clic`,`tocco`]],X=JSON.parse(`{"4-way rotational symmetry needs a square grid":"La simmetria rotazionale a 4 vie richiede una griglia quadrata","A 2×2 grid is too small to make a puzzle from":"Una griglia 2×2 è troppo piccola per creare un rompicapo","A cube rolling along a single row can never turn over all six faces":"Un cubo che rotola lungo una sola riga non può mai mostrare tutte e sei le facce","A given piece leaves the grid":"Un pezzo dato esce dalla griglia","A jigsaw block is too big":"Un blocco jigsaw è troppo grande","A jigsaw block is too small":"Un blocco jigsaw è troppo piccolo","A killer cage is too big":"Una gabbia è troppo grande","A killer cage is too small":"Una gabbia è troppo piccola","A wrapping puzzle needs a width and height of at least 3 to have a unique solution":"Un rompicapo con bordi collegati richiede larghezza e altezza di almeno 3 per avere una soluzione unica","All parameters must be whole numbers":"Tutti i parametri devono essere numeri interi","Already solved":"Già risolto","An edge cannot join a point to itself":"Un arco non può collegare un punto a se stesso","Angle offset out of bounds.":"Scostamento angolare fuori dai limiti.","At least one grid dimension must be greater than zero":"Almeno una dimensione della griglia deve essere maggiore di zero","At least one of width and height for this grid type must be at least {0}":"Almeno una tra larghezza e altezza per questo tipo di griglia deve essere almeno {0}","At least one of width and height must be greater than one":"Almeno una tra larghezza e altezza deve essere maggiore di uno","Bad character in grid description":"Carattere non valido nella descrizione della griglia","Bad mine layout in game description":"Disposizione delle mine non valida nella descrizione della partita","Badly formatted move limit after grid description":"Limite di mosse formattato male dopo la descrizione della griglia","Barrier probability must be a number between 0 and 1":"La probabilità delle barriere deve essere un numero tra 0 e 1","Barrier probability must be between 0 and 1":"La probabilità delle barriere deve essere compresa tra 0 e 1","Blue cells are placed where some faces could never reach them":"Le caselle blu sono posizionate dove alcune facce non potrebbero mai raggiungerle","Both dimensions must be at least 2":"Entrambe le dimensioni devono essere almeno 2","Both grid dimensions must be at least one":"Entrambe le dimensioni della griglia devono essere almeno uno","Bridges per direction must be between 1 and {0}":"I ponti per direzione devono essere tra 1 e {0}","Can't create {0}×{1} puzzles":"Impossibile creare rompicapi {0}×{1}","Clue did not provide 2 direction flags":"L’indizio non fornisce 2 indicatori di direzione","Clue is larger than the number of sides of its face":"L’indizio è maggiore del numero di lati della sua faccia","Clue is missing its number":"All’indizio manca il numero","Clue number out of range":"Numero dell’indizio fuori intervallo","Colour out of range":"Colore fuori intervallo","Colour out of range in grid description":"Colore fuori intervallo nella descrizione della griglia","Colours, pegs and guesses must be whole numbers":"Colori, pioli e tentativi devono essere numeri interi","Column counts inconsistent":"Conteggi delle colonne incoerenti","Could not four-colour the map":"Impossibile colorare la mappa con quattro colori","Count is larger than the line it describes":"Il conteggio è maggiore della linea che descrive","Description contains a duplicate number":"La descrizione contiene un numero duplicato","Description contains a number larger than the grid":"La descrizione contiene un numero maggiore della griglia","Description contains a number out of range":"La descrizione contiene un numero fuori intervallo","Description contains a number that is too large":"La descrizione contiene un numero troppo grande","Description contains a repeated number":"La descrizione contiene un numero ripetuto","Description contains an unexpected character":"La descrizione contiene un carattere imprevisto","Description contains invalid characters":"La descrizione contiene caratteri non validi","Description is corrupted":"La descrizione è corrotta","Description is longer than expected":"La descrizione è più lunga del previsto","Description is shorter than expected":"La descrizione è più corta del previsto","Description is too long":"La descrizione è troppo lunga","Description is too short":"La descrizione è troppo corta","Description marks cells beyond the grid as blue":"La descrizione segna come blu caselle oltre la griglia","Description may only contain P, H and O":"La descrizione può contenere solo P, H e O","Description must be a comma-separated list of numbers":"La descrizione deve essere un elenco di numeri separati da virgole","Description must be exactly {0} characters":"La descrizione deve avere esattamente {0} caratteri","Description must be hex digits, a comma and a cell number":"La descrizione deve essere composta da cifre esadecimali, una virgola e un numero di casella","Description must be numbers each followed by an orientation letter (u, l, d or r)":"La descrizione deve essere composta da numeri, ciascuno seguito da una lettera di orientamento (u, l, d o r)","Description must be two hex strings separated by a comma":"La descrizione deve essere composta da due stringhe esadecimali separate da una virgola","Description must be {0} hexadecimal digits":"La descrizione deve avere {0} cifre esadecimali","Description must contain at least one edge":"La descrizione deve contenere almeno un arco","Description must contain at least one peg":"La descrizione deve contenere almeno un piolo","Description must contain at least two islands":"La descrizione deve contenere almeno due isole","Description must contain each number from 1 to {0} exactly once":"La descrizione deve contenere ogni numero da 1 a {0} esattamente una volta","Description must contain each row number from 1 to {0} exactly {1} times":"La descrizione deve contenere ogni numero di riga da 1 a {0} esattamente {1} volte","Description must contain only digits":"La descrizione deve contenere solo cifre","Description must contain only numbers":"La descrizione deve contenere solo numeri","Description must contain {0} numbers":"La descrizione deve contenere {0} numeri","Description must contain {0} tiles":"La descrizione deve contenere {0} tessere","Description must mark exactly {0} cells blue":"La descrizione deve segnare esattamente {0} caselle come blu","Description must start with {0} hex digits":"La descrizione deve iniziare con {0} cifre esadecimali","Description places two islands next to each other":"La descrizione colloca due isole una accanto all’altra","Description repeats a colour although duplicates are disallowed":"La descrizione ripete un colore benché i duplicati non siano ammessi","Description too long":"Descrizione troppo lunga","Description too long for board size":"Descrizione troppo lunga per la dimensione del tabellone","Description too short":"Descrizione troppo corta","Description too short for board size":"Descrizione troppo corta per la dimensione del tabellone","Digits in a {0}×{1} puzzle cannot exceed {2}":"Le cifre in un rompicapo {0}×{1} non possono superare {2}","Disallowing duplicates requires at least as many colours as pegs":"Vietare i duplicati richiede almeno tanti colori quanti pioli","Domino descriptions inconsistent":"Descrizioni dei domino incoerenti","Dots too close together":"Punti troppo vicini tra loro","Duplicate edge in game description":"Arco duplicato nella descrizione della partita","Edge list defines the wrong number of regions":"L’elenco degli archi definisce un numero errato di regioni","Entrance square must contain a piece leaving the left edge":"La casella d’ingresso deve contenere un pezzo che esce dal lato sinistro","Every killer cage must have exactly one sum":"Ogni gabbia killer deve avere esattamente una somma","Exit square must contain a piece leaving the bottom edge":"La casella d’uscita deve contenere un pezzo che esce dal lato inferiore","Expansion factor must be a number":"Il fattore di espansione deve essere un numero","Expansion factor may not be negative":"Il fattore di espansione non può essere negativo","Expansion factor must be from 0 to 100":"Il fattore di espansione deve essere compreso tra 0 e 100","Expected ',' after block structure description":"Attesa ',' dopo la struttura dei blocchi","Expected ',' after grid description":"Atteso ',' dopo la descrizione della griglia","Expected a list of edges like 0-1,1-2 in game description":"Nella descrizione della partita è previsto un elenco di archi come 0-1,1-2","Expected comma before clue list":"È prevista una virgola prima dell’elenco degli indizi","Expected jigsaw block structure in game description":"Nella descrizione della partita è prevista una struttura di blocchi jigsaw","Expected killer cage structure in game description":"Nella descrizione della partita è prevista una struttura di gabbie killer","Expected killer clue grid in game description":"Nella descrizione della partita è prevista una griglia di indizi killer","Expected slashes between clues":"Sono previste barre oblique tra gli indizi","Expecting number in game description":"Nella descrizione della partita è previsto un numero","Extra moves must not be negative":"Le mosse extra non possono essere negative","Extreme puzzles with more than {0} symbols take too long to generate":"I rompicapi di livello Estremo con più di {0} simboli richiedono troppo tempo per essere generati","Faulty game description":"Descrizione della partita difettosa","Flags contradicting each other":"Indicatori in contraddizione tra loro","Flags go off grid":"Gli indicatori escono dalla griglia","Game ID must include parameters":"Il codice del rompicapo deve includere i parametri","Game description contained unexpected characters":"La descrizione della partita conteneva caratteri imprevisti","Game description contains an unexpected character":"La descrizione della partita contiene un carattere imprevisto","Game description contains no dots":"La descrizione della partita non contiene punti","Game description contains unexpected characters":"La descrizione della partita contiene caratteri imprevisti","Game description has {0} balls; expected {1}":"La descrizione della partita ha {0} palline; ne erano previste {1}","Game description is corrupted":"La descrizione della partita è corrotta","Game description is longer than expected":"La descrizione della partita è più lunga del previsto","Game description is shorter than expected":"La descrizione della partita è più corta del previsto","Game description is the wrong length":"La descrizione della partita ha una lunghezza errata","Game description is too long":"La descrizione della partita è troppo lunga","Game description is too short":"La descrizione della partita è troppo corta","Game description is wrong length":"La descrizione della partita ha lunghezza errata","Game description longer than expected":"Descrizione della partita più lunga del previsto","Game description must be hexadecimal":"La descrizione della partita deve essere esadecimale","Game description shorter than expected":"Descrizione della partita più corta del previsto","Game description too long":"Descrizione della partita troppo lunga","Game is already solved":"La partita è già risolta","Grid area must be at least six squares":"L’area della griglia deve essere di almeno sei caselle","Grid area must be greater than 1":"L’area della griglia deve essere maggiore di 1","Grid area must be greater than one":"L’area della griglia deve essere maggiore di uno","Grid description is the wrong length or not hexadecimal":"La descrizione della griglia ha lunghezza errata o non è esadecimale","Grid description strings not used with this grid type":"Le descrizioni della griglia non si usano con questo tipo di griglia","Grid dimensions cannot be negative":"Le dimensioni della griglia non possono essere negative","Grid dimensions must be at most {0}":"Le dimensioni della griglia devono essere al massimo {0}","Grid dimensions must be whole numbers":"Le dimensioni della griglia devono essere numeri interi","Grid is too big":"La griglia è troppo grande","Grid must contain at least two squares":"La griglia deve contenere almeno due caselle","Grid size must be between 3 and 9":"La dimensione della griglia deve essere compresa tra 3 e 9","Grid size must be between {0} and {1}":"La dimensione della griglia deve essere compresa tra {0} e {1}","Hard and Extreme puzzles are limited to a maximum number of {0}":"I rompicapi Difficili ed Estremi sono limitati a un numero massimo di {0}","Height must be at least 3":"L’altezza deve essere almeno 3","Height must be at least five":"L’altezza deve essere almeno cinque","Height must be at least one":"L’altezza deve essere almeno uno","Height must be at least the rotating block size":"L’altezza deve essere almeno pari alla dimensione del blocco rotante","Height must be at least two":"L’altezza deve essere almeno due","Illegal grid type":"Tipo di griglia non consentito","Incorrect number balance in game description":"Bilanciamento dei numeri errato nella descrizione della partita","Initial x-coordinate was out of range":"La coordinata x iniziale era fuori intervallo","Initial y-coordinate was out of range":"La coordinata y iniziale era fuori intervallo","Internal error: solution is badly formatted":"Errore interno: la soluzione è formattata male","Invalid character in block structure specification":"Carattere non valido nella specifica della struttura dei blocchi","Invalid character in game description":"Carattere non valido nella descrizione della partita","Invalid character in grid specification":"Carattere non valido nella specifica della griglia","Invalid character in number list":"Carattere non valido nell’elenco dei numeri","Invalid characters in game description":"Caratteri non validi nella descrizione della partita","Invalid format grid description string.":"Formato della stringa di descrizione della griglia non valido.","Invalid parameters: {0}":"Parametri non validi: {0}","Invalid syntax in game description":"Sintassi non valida nella descrizione della partita","Jigsaw puzzles with more than {0} symbols take too long to generate":"I rompicapi Jigsaw con più di {0} simboli richiedono troppo tempo per essere generati","Killer puzzle dimensions must be smaller than 10":"Le dimensioni di un rompicapo killer devono essere inferiori a 10","Malformed pending game description":"Descrizione della partita in sospeso malformata","Matrix description is the wrong length or not hexadecimal":"La descrizione della matrice ha lunghezza errata o non è esadecimale","Maximum face number must be a whole number":"Il numero massimo sulle tessere deve essere un numero intero","Maximum face number must be at least one":"Il numero massimo sulle tessere deve essere almeno uno","Maximum face number must be at most {0}":"Il numero massimo sulle tessere deve essere al massimo {0}","Maximum of 9 colours":"Massimo 9 colori","Medium puzzles need more than one bridge per direction, or loops disallowed":"I rompicapi Medi richiedono più di un ponte per direzione, oppure gli anelli disattivati","Mines solver opened a mine: inconsistent knowledge":"Il risolutore delle mine ha aperto una mina: conoscenza incoerente","Minimum number of balls may not be greater than maximum":"Il numero minimo di palline non può essere maggiore del massimo","Missing grid description string.":"Stringa di descrizione della griglia mancante.","Missing separator":"Separatore mancante","Monster numbers do not match grid spaces":"I numeri dei mostri non corrispondono agli spazi della griglia","More than one starting square specified":"È stata indicata più di una casella iniziale","Multiple solutions exist for this puzzle":"Esistono più soluzioni per questo rompicapo","Must have at least five regions":"Devono esserci almeno cinque regioni","Must have at least one guess":"Deve esserci almeno un tentativo","Must have between {0} and {1} colours":"I colori devono essere tra {0} e {1}","No game set up to solve":"Nessuna partita da risolvere","No gems specified":"Nessuna gemma indicata","No solution exists for this position":"Non esiste alcuna soluzione per questa posizione","No solution exists for this puzzle":"Non esiste alcuna soluzione per questo rompicapo","No solution found":"Nessuna soluzione trovata","No starting square specified":"Nessuna casella iniziale indicata","Not enough data in block structure specification":"Dati insufficienti nella specifica della struttura dei blocchi","Not enough data in grid description":"Dati insufficienti nella descrizione della griglia","Not enough data to fill grid":"Dati insufficienti per riempire la griglia","Not enough grid space to place all blue faces":"Spazio insufficiente nella griglia per collocare tutte le facce blu","Not enough jigsaw blocks":"Non ci sono abbastanza blocchi jigsaw","Not enough killer cages":"Non ci sono abbastanza gabbie","Not enough numbers given after grid specification":"Numeri insufficienti dopo la specifica della griglia","Not enough space to place the solid on an empty cell":"Spazio insufficiente per collocare il solido su una casella vuota","Number of colours must be at least three":"Il numero di colori deve essere almeno tre","Number of colours must be at least two":"Il numero di colori deve essere almeno due","Number of points must be a whole number":"Il numero di punti deve essere un numero intero","Number of points must be at least {0}":"Il numero di punti deve essere almeno {0}","Number of points must be at most {0}":"Il numero di punti deve essere al massimo {0}","Number of shuffling moves cannot be negative":"Il numero di mosse di mescolamento non può essere negativo","Number of shuffling moves must be a whole number":"Il numero di mosse di mescolamento deve essere un numero intero","Number of shuffling moves must be at most 10000":"Il numero di mosse di mescolamento deve essere al massimo 10000","Number of shuffling moves must be at most {0}":"Il numero di mosse di mescolamento deve essere al massimo {0}","Number out of range in game description":"Numero fuori intervallo nella descrizione della partita","Number too large":"Numero troppo grande","Out-of-range number in game description":"Numero fuori intervallo nella descrizione della partita","Out-of-range number in grid description":"Numero fuori intervallo nella descrizione della griglia","Parameters must be whole numbers":"I parametri devono essere numeri interi","Patch coordinates do not identify a usable grid fragment":"Le coordinate della porzione non identificano un frammento di griglia utilizzabile","Patch offset out of bounds.":"Scostamento della porzione fuori dai limiti.","Percentage of black squares must be between 5% and 100%":"La percentuale di caselle nere deve essere compresa tra 5% e 100%","Percentage of islands must be from 1% to 30%":"La percentuale di isole deve essere dall’1% al 30%","Puzzle is inconsistent":"Il rompicapo è incoerente","Puzzle is too large":"Il rompicapo è troppo grande","Puzzle is too long for unique-rows mode":"Il rompicapo è troppo lungo per la modalità a righe uniche","Puzzle is too tall for unique-rows mode":"Il rompicapo è troppo alto per la modalità a righe uniche","Puzzle is unsolvable":"Il rompicapo non è risolvibile","Puzzle must have one entrance and one exit":"Il rompicapo deve avere un ingresso e un’uscita","Puzzles with more than {0} symbols take too long to generate":"I rompicapi con più di {0} simboli richiedono troppo tempo per essere generati","Random seed must not be empty":"Il seme casuale non può essere vuoto","Rotating block size must be at least two":"La dimensione del blocco rotante deve essere almeno due","Row counts inconsistent":"Conteggi delle righe incoerenti","Rows of blocks must be at least 1":"Le righe di blocchi devono essere almeno 1","Scoring system not recognised":"Sistema di punteggio non riconosciuto","Size and difficulty must be whole numbers":"La dimensione e la difficoltà devono essere numeri interi","Size must be at least 5 for Adjacent puzzles of this difficulty":"La dimensione deve essere almeno 5 per i rompicapi Adiacenti di questa difficoltà","Size must be between {0} and {1}":"La dimensione deve essere compresa tra {0} e {1}","Solution not known for this puzzle":"Soluzione non nota per questo rompicapo","Solve operation failed":"Risoluzione non riuscita","Solve operation produced an invalid move":"La risoluzione ha prodotto una mossa non valida","Solver could not finish this grid":"Il risolutore non è riuscito a completare questa griglia","Solving algorithm cannot complete this puzzle":"L’algoritmo di risoluzione non può completare questo rompicapo","Starting cell is outside the grid":"La casella iniziale è fuori dalla griglia","Subtraction and division blocks must have area 2":"I blocchi di sottrazione e divisione devono avere area 2","That grid has too many faces to generate":"Quella griglia ha troppe facce per essere generata","The Cross board is only available at {0}×{1}":"Il tabellone a croce è disponibile solo in formato {0}×{1}","The Octagon board is only available at {0}×{1}":"Il tabellone ottagonale è disponibile solo in formato {0}×{1}","The ball has hit a mine; undo that move first":"La pallina ha colpito una mina; annulla prima quella mossa","The grid can have at most {0} squares":"La griglia può avere al massimo {0} caselle","The grid may have at most {0} squares":"La griglia può avere al massimo {0} caselle","The initial square contains a mine":"La casella iniziale contiene una mina","The solid cannot start on a blue cell":"Il solido non può iniziare su una casella blu","The solution has already been revealed":"La soluzione è già stata rivelata","There must be at least one ball":"Deve esserci almeno una pallina","There must be at least one mine":"Deve esserci almeno una mina","This arrangement cannot be solved":"Questa disposizione non può essere risolta","This game does not support the Solve operation":"Questo gioco non supporta Risolvi","This puzzle has no solution":"Questo rompicapo non ha soluzione","This puzzle instance contains a contradiction":"Questa istanza del rompicapo contiene una contraddizione","This puzzle is not self-consistent":"Questo rompicapo non è autocoerente","Too few clues for block structure":"Troppo pochi indizi per la struttura dei blocchi","Too few clues for grid size":"Troppo pochi indizi per la dimensione della griglia","Too little data in clue list":"Troppo pochi dati nell’elenco degli indizi","Too little data in edge list":"Troppo pochi dati nell’elenco degli archi","Too many balls to fit in the grid":"Troppe palline per entrare nella griglia","Too many clues for block structure":"Troppi indizi per la struttura dei blocchi","Too many clues for grid size":"Troppi indizi per la dimensione della griglia","Too many colours (at most {0})":"Troppi colori (al massimo {0})","Too many colours makes given grid size impossible":"Troppi colori rendono impossibile la dimensione della griglia indicata","Too many guesses (at most {0})":"Troppi tentativi (al massimo {0})","Too many jigsaw blocks":"Troppi blocchi jigsaw","Too many killer cages":"Troppe gabbie","Too many mines for grid size":"Troppe mine per la dimensione della griglia","Too many pegs per guess (at most {0})":"Troppi pioli per tentativo (al massimo {0})","Too many regions to fit in grid":"Troppe regioni per entrare nella griglia","Too much data in block structure specification":"Troppi dati nella specifica della struttura dei blocchi","Too much data in clue list":"Troppi dati nell’elenco degli indizi","Too much data in edge list":"Troppi dati nell’elenco degli archi","Too much data to fill grid":"Troppi dati per riempire la griglia","Too much data to fit in grid":"Troppi dati per entrare nella griglia","Trivial solutions are uninteresting":"Le soluzioni banali non sono interessanti","Unable to build a grid for these parameters":"Impossibile costruire una griglia con questi parametri","Unable to build this grid":"Impossibile costruire questa griglia","Unable to find a solution for this puzzle":"Impossibile trovare una soluzione per questo rompicapo","Unable to find a solution from this position":"Impossibile trovare una soluzione da questa posizione","Unable to find a solution to this puzzle":"Impossibile trovare una soluzione a questo rompicapo","Unable to find a unique solution for this puzzle":"Impossibile trovare una soluzione unica per questo rompicapo","Unable to generate a puzzle of this size":"Impossibile generare un rompicapo di questa dimensione","Unable to generate a puzzle with these parameters":"Impossibile generare un rompicapo con questi parametri","Unable to solve this puzzle":"Impossibile risolvere questo rompicapo","Unable to support more than {0} distinct symbols":"Impossibile gestire più di {0} simboli distinti","Unable to work out any more of this puzzle":"Impossibile dedurre altro di questo rompicapo","Unexpected additional character at end of game description":"Carattere aggiuntivo imprevisto alla fine della descrizione della partita","Unexpected additional data at end of game description":"Dati aggiuntivi imprevisti alla fine della descrizione della partita","Unexpected character '{0}' in description":"Carattere «{0}» imprevisto nella descrizione","Unexpected character in clue list":"Carattere imprevisto nell’elenco degli indizi","Unexpected character in edge list":"Carattere imprevisto nell’elenco degli archi","Unexpected data at end of game description":"Dati imprevisti alla fine della descrizione della partita","Unknown board type":"Tipo di tabellone sconosciuto","Unknown character in description":"Carattere sconosciuto nella descrizione","Unknown difficulty":"Difficoltà sconosciuta","Unknown difficulty level":"Livello di difficoltà sconosciuto","Unknown difficulty rating":"Valutazione della difficoltà sconosciuta","Unknown shape type":"Tipo di forma sconosciuto","Unknown symmetry":"Simmetria sconosciuta","Unknown symmetry type":"Tipo di simmetria sconosciuto","Unrecognised character in game description":"Carattere non riconosciuto nella descrizione della partita","Unrecognised characters in game description":"Caratteri non riconosciuti nella descrizione della partita","Unrecognised clue type":"Tipo di indizio non riconosciuto","Unrecognised grid description.":"Descrizione della griglia non riconosciuta.","Unrecognised solid type":"Tipo di solido non riconosciuto","Width and height cannot both be two":"Larghezza e altezza non possono essere entrambe due","Width and height for this grid type must both be at least {0}":"Larghezza e altezza per questo tipo di griglia devono essere entrambe almeno {0}","Width and height must be at least two":"Larghezza e altezza devono essere almeno due","Width and height must be at least {0}":"Larghezza e altezza devono essere almeno {0}","Width and height must be at most twelve":"Larghezza e altezza devono essere al massimo dodici","Width and height must be at most {0}":"Larghezza e altezza devono essere al massimo {0}","Width and height must be at most {0} to generate a puzzle":"Larghezza e altezza devono essere al massimo {0} per generare un rompicapo","Width and height must be positive":"Larghezza e altezza devono essere positive","Width and height must be whole numbers":"Larghezza e altezza devono essere numeri interi","Width and height must both be at least 3":"Larghezza e altezza devono essere entrambe almeno 3","Width and height must both be at least four":"Larghezza e altezza devono essere entrambe almeno quattro","Width and height must both be at least one":"Larghezza e altezza devono essere entrambe almeno uno","Width and height must both be at least two":"Larghezza e altezza devono essere entrambe almeno due","Width and height must both be even":"Larghezza e altezza devono essere entrambe pari","Width and height must both be greater than three":"Larghezza e altezza devono essere entrambe maggiori di tre","Width and height must both be greater than two":"Larghezza e altezza devono essere entrambe maggiori di due","Width and height must both be greater than zero":"Larghezza e altezza devono essere entrambe maggiori di zero","Width and height must both be positive":"Larghezza e altezza devono essere entrambe positive","With three colours, a solvable grid may have at most {0} squares":"Con tre colori, una griglia risolvibile può avere al massimo {0} caselle","Width must be at least 3":"La larghezza deve essere almeno 3","Width must be at least five":"La larghezza deve essere almeno cinque","Width must be at least one":"La larghezza deve essere almeno uno","Width must be at least the rotating block size":"La larghezza deve essere almeno pari alla dimensione del blocco rotante","Width must be at least two":"La larghezza deve essere almeno due","Width, height and ball counts must be whole numbers":"Larghezza, altezza e numero di palline devono essere numeri interi","Width, height and difficulty must be whole numbers":"Larghezza, altezza e difficoltà devono essere numeri interi","Width, height and number of colours must be whole numbers":"Larghezza, altezza e numero di colori devono essere numeri interi","Width, height, block size and move count must be whole numbers":"Larghezza, altezza, dimensione del blocco e numero di mosse devono essere numeri interi","X puzzles need at least four symbols":"I rompicapi X richiedono almeno quattro simboli","X-diagonal jigsaw puzzles with more than {0} symbols take too long to generate":"I rompicapi Jigsaw con diagonali X e più di {0} simboli richiedono troppo tempo per essere generati","You have hit a mine; undo that move first":"Hai colpito una mina; annulla prima quella mossa","a cell may be a number position for only one rectangle":"una casella può essere la posizione del numero di un solo rettangolo","at least one column contains more numbers than will fit":"almeno una colonna contiene più numeri di quanti ne entrino","at least one row contains more numbers than will fit":"almeno una riga contiene più numeri di quanti ne entrino","cells are not adjacent":"le caselle non sono adiacenti","domino layout: no path between singletons":"disposizione dei domino: nessun percorso tra i singoletti","domino layout: stranded square cannot be paired":"disposizione dei domino: casella isolata non accoppiabile","dot touches the outside twice":"il punto tocca l’esterno due volte","dot with fewer than two edges":"punto con meno di due archi","edge does not follow its face":"l’arco non segue la sua faccia","edge shared by three faces":"arco condiviso da tre facce","expected CxR or Nj":"previsto CxR o Nj","expected WxH":"previsto WxH","expected WxHnN":"previsto WxHnN","expected a grid size":"prevista una dimensione della griglia","expected a maximum number":"previsto un numero massimo","expected a number of points":"previsto un numero di punti","expected a solid letter followed by WxH":"prevista una lettera di solido seguita da WxH","expected something like c6p4g10Bm":"previsto qualcosa come c6p4g10Bm","expected w<W>h<H>m<MIN>M<MAX>":"previsto w<W>h<H>m<MIN>M<MAX>","generateKeen: solver disagrees with the square":"generateKeen: il risolutore non concorda con il quadrato","grid inconsistency while walking round a face":"incoerenza della griglia mentre si percorre una faccia","inconsistent clues while assembling":"indizi incoerenti durante l’assemblaggio","inconsistent distance field":"campo delle distanze incoerente","inconsistent face classes":"classi di facce incoerenti","latin rectangle could not be extended":"impossibile estendere il rettangolo latino","latinGenerate: no extension found":"latinGenerate: nessuna estensione trovata","latinSquare: rectangle could not be extended":"latinSquare: impossibile estendere il rettangolo","line too long for solver":"linea troppo lunga per il risolutore","no clue left to place":"nessun indizio rimasto da collocare","no such laser: {0}":"laser inesistente: {0}","rolled solid does not fit its destination":"il solido rotolato non entra nella sua destinazione","shown":"svelata","too few row/column specifications":"troppo poche specifiche di riga/colonna","too many row/column specifications":"troppe specifiche di riga/colonna","unrecognised character in game description":"carattere non riconosciuto nella descrizione della partita","yes!":"sì!","9×9 Extreme puzzles take too long to generate; try 8×8 or Expert":"I rompicapi 9×9 Estremo richiedono troppo tempo per essere generati; prova 8×8 o Esperto"}`),Z={moves:`Mosse: {n}`,movesCompleted:{one:`Completato in {n} mossa`,other:`Completato in {n} mosse`},movesSinceSolve:`Mosse dopo la risoluzione automatica: {n}`,completedMoves:`Completato! Mosse: {n}`,solvedByComputer:`Risolto dal computer`,completed:`Completato!`,completedPrefix:`Completato! `,autoSolved:`Risolto automaticamente.`,autoSolvedPrefix:`Risolto automaticamente. `,autoSolverUsedPrefix:`Usato il risolutore automatico. `,failedPrefix:`Mosse finite. `,dead:`Hai pestato una mina.`,target:` (obiettivo {n})`},Q=JSON.parse(`{"blackbox":{"name":"Scatola nera","description":"Trova le palline nascoste sparando laser dentro la scatola e guardando dove riemergono.","preset":{"5x5_3_balls":"5×5, 3 palline","8x8_5_balls":"8×8, 5 palline","8x8_3_6_balls":"8×8, 3-6 palline","10x10_5_balls":"10×10, 5 palline","10x10_4_10_balls":"10×10, 4-10 palline"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"no_of_balls":{"name":"N. di palline"}},"achievement":{"sparing_shots":{"name":"Colpi contati","description":"Trova tutte le palline sparando laser da non più di metà delle porte."},"pinpoint":{"name":"Centro perfetto","description":"Trova tutte le palline in una scatola 8×8 o più grande, sparando al massimo tre laser per pallina."},"shot_in_the_dark":{"name":"Colpo alla cieca","description":"Fai verificare le tue palline senza aver sparato un solo laser, e sbaglia."}},"status":{"correct":"CORRETTO!","wrong":{"one":"{wrong} sbagliate e {n} pallina mancata.","other":"{wrong} sbagliate e {n} palline mancate."},"marked":"Palline segnate: {n} / {range}  ·  Laser sparati: {fired}","tooMany":"  ·  {n} palline segnate di troppo.","check":"  ·  Usa il pulsante nell’angolo per controllare."}},"bridges":{"name":"Ponti","alsoKnownAs":"Hashiwokakero, Hashi","description":"Collega le isole con dei ponti in modo che ogni numero torni e nulla si incroci.","preset":{"7x7_easy":"7×7 Facile","7x7_medium":"7×7 Medio","7x7_hard":"7×7 Difficile","10x10_easy":"10×10 Facile","10x10_medium":"10×10 Medio","10x10_hard":"10×10 Difficile","15x15_easy":"15×15 Facile","15x15_medium":"15×15 Medio","15x15_hard":"15×15 Difficile","10x10_medium_no_loops":"10×10 Medio, senza anelli"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"difficulty":{"name":"Difficoltà","choice":{"easy":"Facile","medium":"Medio","hard":"Difficile"}},"allow_loops":{"name":"Consenti anelli"},"max_bridges_per_direction":{"name":"Max. ponti per direzione","choice":{"1":"1","2":"2","3":"3","4":"4"}},"of_island_squares":{"name":"% di caselle isola","choice":{"5":"5%","10":"10%","15":"15%","20":"20%","25":"25%","30":"30%"}},"expansion_factor":{"name":"Fattore di espansione (%)","choice":{"0":"0%","10":"10%","20":"20%","30":"30%","40":"40%","50":"50%","60":"60%","70":"70%","80":"80%","90":"90%","100":"100%"}}},"action":{"g":{"label":"Guide","title":"Mostra o nascondi una linea tenue dove potrebbe passare un ponte (G)"},"e":{"label":"Gomma","title":"Trascina da un’isola per togliere i suoi ponti in quella direzione (E)"}},"achievement":{"no_markers":{"name":"Acque libere","description":"Risolvi un Ponti 10×10 o più grande senza annotare nemmeno un segno «qui niente ponte»."},"sure_footing":{"name":"Passo sicuro","description":"Risolvi un Ponti 10×10 o più grande Difficile senza togliere un ponte e senza usare Annulla."}}},"cube":{"name":"Cubo","description":"Fai rotolare un solido su una griglia per raccogliere sulle sue facce ogni casella blu.","preset":{"cube":"Cubo","tetrahedron":"Tetraedro","octahedron":"Ottaedro","icosahedron":"Icosaedro"},"config":{"type_of_solid":{"name":"Tipo di solido","choice":{"tetrahedron":"Tetraedro","cube":"Cubo","octahedron":"Ottaedro","icosahedron":"Icosaedro"}},"width_top":{"name":"Larghezza / lato superiore"},"height_bottom":{"name":"Altezza / lato inferiore"}},"achievement":{"short_haul":{"name":"Tragitto breve","description":"Completa il Cubo con tutte le facce blu in non più di venti mosse."},"octahedron_ace":{"name":"Otto facce al volo","description":"Completa l’Ottaedro con tutte le facce blu in non più di trenta mosse."},"scenic_route":{"name":"Il giro lungo","description":"Fai rotolare il solido almeno duecento volte prima che tutte le facce siano blu."}}},"dominosa":{"name":"Dominosa","description":"Scopri dove si trova il set mescolato di tessere del domino in una griglia di numeri.","preset":{"up_to_double_3":"Fino al doppio 3","up_to_double_4":"Fino al doppio 4","up_to_double_5":"Fino al doppio 5","up_to_double_6":"Fino al doppio 6","up_to_double_7":"Fino al doppio 7","up_to_double_8":"Fino al doppio 8","up_to_double_9":"Fino al doppio 9"},"config":{"maximum_number_on_dominoes":{"name":"Numero massimo sulle tessere"},"difficulty":{"name":"Difficoltà","choice":{"very_easy":"Facilissimo","easy":"Facile","hard":"Difficile","extreme":"Estremo","ambiguous":"Ambiguo"}}},"achievement":{"no_lines":{"name":"Niente matita","description":"Risolvi un set fino al doppio 6 o più grande senza tracciare una sola linea a matita."},"one_click_each":{"name":"Un clic a tessera","description":"Risolvi un set fino al doppio 6 o più grande con un clic per tessera e senza Annulla."},"doubles_first":{"name":"Prima i doppi","description":"Posa tutti i doppi del set prima di qualsiasi altra tessera."}}},"fifteen":{"name":"Quindici","alsoKnownAs":"Gioco del 15, rompicapo del 15","description":"Fai scorrere le tessere per rimetterle in ordine.","preset":{"3x3":"3×3","4x4":"4×4","5x5":"5×5"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"}},"achievement":{"short_shuffle":{"name":"Rimescolata breve","description":"Rimetti in ordine il 4×4 in 100 mosse o meno."},"five_flyer":{"name":"Fulmine sul 5×5","description":"Rimetti in ordine il 5×5 in meno di tre minuti."},"scenic_route":{"name":"La strada panoramica","description":"Impiega più di 300 mosse per rimettere in ordine il 3×3."}}},"filling":{"name":"Riempimento","alsoKnownAs":"Fillomino","description":"Riempi la griglia in modo che ogni gruppo di cifre uguali sia grande esattamente così.","preset":{"9x7":"9×7","13x9":"13×9","17x13":"17×13"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"}},"achievement":{"in_ink":{"name":"Scritto a penna","description":"Risolvi un Riempimento senza cambiare né cancellare nessuna cifra, e senza Annulla."},"one_stroke":{"name":"Tutto in una volta","description":"Risolvi un Riempimento 13×9 o più grande scrivendo ogni gruppo di cifre con una sola mossa."}},"action":{"f":{"label":"Riempi","title":"Trascina da una cifra per scriverla in ogni casella su cui passi (F)"}}},"flip":{"name":"Ribalta","alsoKnownAs":"Lights Out","description":"Accendi ogni casella: ogni pressione ribalta anche le caselle intorno.","preset":{"3x3_crosses":"3×3 Croci","4x4_crosses":"4×4 Croci","5x5_crosses":"5×5 Croci","3x3_random":"3×3 Casuale","4x4_random":"4×4 Casuale","5x5_random":"5×5 Casuale"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"shape_type":{"name":"Tipo di forma","choice":{"crosses":"Croci","random":"Casuale"}}},"achievement":{"press_once":{"name":"Una pressione sola","description":"Accendi un tabellone 4×4 o più grande senza premere due volte la stessa casella."},"fewest_presses":{"name":"Minimo sforzo","description":"Accendi un tabellone 5×5 con il minor numero possibile di pressioni."}}},"flood":{"name":"Inondazione","alsoKnownAs":"Flood It","description":"Inonda la griglia dall’angolo finché non è tutta di un colore, entro il limite di mosse.","preset":{"12x12_easy":"12×12 Facile","12x12_medium":"12×12 Medio","12x12_hard":"12×12 Difficile","16x16_medium":"16×16 Medio","16x16_hard":"16×16 Difficile","12x12_3_colours":"12×12, 3 colori","12x12_4_colours":"12×12, 4 colori"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"colours":{"name":"Colori"},"extra_moves_permitted":{"name":"Mosse extra consentite"}},"achievement":{"spare_moves":{"name":"Mosse d’avanzo","description":"Inonda la griglia con almeno tre mosse d’avanzo."},"beat_the_solver":{"name":"Meglio della macchina","description":"Inonda la griglia in meno mosse della soluzione del computer."},"one_colour_short":{"name":"Per un colore","description":"Resta senza mosse con solo due colori rimasti sulla griglia."}},"status":{"moves":"{n} / {limit} mosse"}},"galaxies":{"name":"Galassie","alsoKnownAs":"Spiral Galaxies, Tentai Show","description":"Dividi la griglia in regioni, ognuna simmetrica rispetto all’unico punto che contiene.","preset":{"7x7_medium":"7×7 Medio","7x7_extreme":"7×7 Estremo","10x10_medium":"10×10 Medio","15x15_medium":"15×15 Medio"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"difficulty":{"name":"Difficoltà","choice":{"medium":"Medio","extreme":"Estremo"}}},"achievement":{"no_arrows":{"name":"Niente frecce","description":"Risolvi un Galassie 10×10 o più grande senza trascinare una sola freccia."},"steady_hand":{"name":"Stelle fisse","description":"Risolvi un Galassie 10×10 o più grande senza rimuovere un muro e senza usare Annulla."}}},"guess":{"name":"Indovina","alsoKnownAs":"Mastermind","description":"Ricava la fila nascosta di pioli colorati dai segni lasciati sui tuoi tentativi.","preset":{"standard":"Standard","super":"Super"},"config":{"colours":{"name":"Colori"},"pegs_per_guess":{"name":"Pioli per tentativo"},"guesses":{"name":"Tentativi"},"allow_blanks":{"name":"Consenti spazi vuoti"},"allow_duplicates":{"name":"Consenti duplicati"}},"action":{"l":{"label":"Lettere","title":"Etichetta i pioli con delle lettere (L)"},"k":{"label":"Trattieni","title":"Fai clic su un piolo della tua fila per portarlo nel tentativo successivo (K)"}},"achievement":{"five_guesses":{"name":"Decifratore","description":"Trova la fila nascosta in cinque tentativi o meno."},"super_sleuth":{"name":"Super segugio","description":"Trova la fila nascosta Super di cinque pioli in sei tentativi o meno."},"so_near":{"name":"Così vicino","description":"Esaurisci i tentativi con tutti i pioli al posto giusto tranne uno."}},"status":{"revealed":"Soluzione svelata","solved":{"one":"Risolto in {n} tentativo","other":"Risolto in {n} tentativi"},"outOfGuesses":"Tentativi esauriti: ecco la soluzione","guessN":"Tentativo {n} di {total}"}},"inertia":{"name":"Inerzia","description":"Fai scivolare una pallina sulla griglia per raccogliere ogni gemma senza finire su una mina.","preset":{"10x8":"10×8","15x12":"15×12","20x16":"20×16"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"}},"achievement":{"hat_trick":{"name":"Tripletta","description":"Raccogli tre gemme o più con un solo tiro della pallina."},"shortcut":{"name":"Scorciatoia","description":"Raccogli tutte le gemme su un tabellone 15×12 o più grande in meno tiri di Risolvi."},"last_gem_mine":{"name":"Vittoria di Pirro","description":"Finisci su una mina con lo stesso tiro che raccoglie l’ultima gemma."}},"status":{"gems":"Gemme: {n}","deaths":" · Morti: {n}"}},"keen":{"name":"Keen","alsoKnownAs":"KenKen, Calcudoku","description":"Riempi il quadrato latino in modo che ogni gabbia rispetti il suo indizio aritmetico.","preset":{"4x4_easy":"4×4 Facile","5x5_easy":"5×5 Facile","5x5_easy_x_only":"5×5 Facile, solo ×","6x6_easy":"6×6 Facile","6x6_medium":"6×6 Medio","6x6_medium_x_only":"6×6 Medio, solo ×","6x6_hard":"6×6 Difficile","6x6_expert":"6×6 Esperto","6x6_extreme":"6×6 Estremo","9x9_medium":"9×9 Medio"},"config":{"grid_size":{"name":"Dimensione della griglia"},"difficulty":{"name":"Difficoltà","choice":{"easy":"Facile","medium":"Medio","hard":"Difficile","expert":"Esperto","extreme":"Estremo"}},"multiplication_only":{"name":"Solo moltiplicazione"}},"action":{"m":{"label":"Annotazioni","title":"Annota a matita ogni possibilità in ogni casella vuota (M)"},"l":{"label":"Evidenzia","title":"Metti in risalto ogni casella con la cifra che hai toccato per ultima (L)"}},"achievement":{"no_pencil":{"name":"Calcolo mentale","description":"Risolvi un Keen 6×6 o più grande senza scrivere una sola annotazione a matita."},"products_only":{"name":"Solo prodotti","description":"Risolvi un Keen 6×6 Medio con sole moltiplicazioni."}}},"lightup":{"name":"Luci","alsoKnownAs":"Akari, Light Up","description":"Sistema le lampadine in modo che ogni casella sia illuminata e nessuna lampadina ne illumini un’altra.","preset":{"7x7_easy":"7×7 Facile","7x7_medium":"7×7 Medio","7x7_hard":"7×7 Difficile","10x10_easy":"10×10 Facile","10x10_medium":"10×10 Medio","10x10_hard":"10×10 Difficile","14x14_easy":"14×14 Facile","14x14_medium":"14×14 Medio","14x14_hard":"14×14 Difficile"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"of_black_squares":{"name":"% di caselle nere"},"symmetry":{"name":"Simmetria","choice":{"none":"Nessuna","2_way_mirror":"Speculare a 2 vie","2_way_rotational":"Rotazionale a 2 vie","4_way_mirror":"Speculare a 4 vie","4_way_rotational":"Rotazionale a 4 vie"}},"difficulty":{"name":"Difficoltà","choice":{"easy":"Facile","medium":"Medio","hard":"Difficile"}}},"achievement":{"no_crosses":{"name":"Solo luci","description":"Risolvi un Luci 10×10 o più grande senza segnare una sola croce."},"no_takebacks":{"name":"Idea luminosa","description":"Risolvi un Luci Difficile senza mai togliere una lampadina."}},"action":{"x":{"label":"Croce","title":"I clic mettono croci invece di lampadine (X)"}}},"loopy":{"name":"Anelli","alsoKnownAs":"Slitherlink","description":"Traccia un unico anello chiuso in modo che ogni numero conti le linee che lo circondano.","preset":{"7x7_squares_easy":"7×7 Quadrati Facile","10x10_squares_easy":"10×10 Quadrati Facile","7x7_squares_medium":"7×7 Quadrati Medio","10x10_squares_medium":"10×10 Quadrati Medio","7x7_squares_expert":"7×7 Quadrati Esperto","10x10_squares_expert":"10×10 Quadrati Esperto","10x10_triangular_expert":"10×10 Triangolare Esperto","12x10_honeycomb_expert":"12×10 Nido d’ape Esperto","7x7_snub_square_expert":"7×7 Quadrato camuso Esperto","9x9_cairo_expert":"9×9 Cairo Esperto","5x4_great_hexagonal_expert":"5×4 Grande esagonale Esperto","7x7_octagonal_expert":"7×7 Ottagonale Esperto","5x5_kites_expert":"5×5 Aquiloni Esperto","5x5_floret_expert":"5×5 Rosetta Esperto","5x4_dodecagonal_expert":"5×4 Dodecagonale Esperto","5x4_great_dodecagonal_expert":"5×4 Grande dodecagonale Esperto","10x10_penrose_kite_dart_expert":"10×10 Penrose (aquilone/dardo) Esperto","10x10_penrose_rhombs_expert":"10×10 Penrose (rombi) Esperto"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"grid_type":{"name":"Tipo di griglia","choice":{"squares":"Quadrati","triangular":"Triangolare","honeycomb":"Nido d’ape","snub_square":"Quadrato camuso","cairo":"Cairo","great_hexagonal":"Grande esagonale","octagonal":"Ottagonale","kites":"Aquiloni","floret":"Rosetta","dodecagonal":"Dodecagonale","great_dodecagonal":"Grande dodecagonale","penrose_kite_dart":"Penrose (aquilone/dardo)","penrose_rhombs":"Penrose (rombi)"}},"difficulty":{"name":"Difficoltà","choice":{"easy":"Facile","medium":"Medio","hard":"Difficile","expert":"Esperto"}}},"achievement":{"off_grid":{"name":"Fuori dagli schemi","description":"Risolvi un Anelli su qualsiasi tassellatura diversa dai quadrati."},"no_crosses":{"name":"Solo l’anello","description":"Risolvi un Anelli 10×10 senza sbarrare un solo lato."},"aperiodic":{"name":"Aperiodico","description":"Risolvi un Anelli Penrose senza mai rimuovere una linea tracciata."}},"action":{"x":{"label":"Croce","title":"I clic sbarrano i lati invece di tracciare linee (X)"}}},"magnets":{"name":"Magneti","description":"Sistema magneti e pezzi neutri nei domino in modo che i conteggi dei poli tornino.","preset":{"6x5_easy":"6×5 Facile","6x5_hard":"6×5 Difficile","6x5_hard_strip_clues":"6×5 Difficile, indizi ridotti","8x7_easy":"8×7 Facile","8x7_hard":"8×7 Difficile","8x7_hard_strip_clues":"8×7 Difficile, indizi ridotti","10x9_hard":"10×9 Difficile","10x9_hard_strip_clues":"10×9 Difficile, indizi ridotti"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"difficulty":{"name":"Difficoltà","choice":{"easy":"Facile","hard":"Difficile"}},"strip_clues":{"name":"Riduci gli indizi"}},"achievement":{"no_flips":{"name":"Dal verso giusto","description":"Risolvi un Magneti 8×7 o più grande senza mai capovolgere un magnete."},"stripped":{"name":"Fili scoperti","description":"Risolvi un Magneti 10×9 Difficile con indizi ridotti in meno di dieci minuti."}},"action":{"b":{"label":"Neutro","title":"I clic segnano i domino come neutri invece di posare magneti (B)"}}},"map":{"name":"Mappa","description":"Colora la mappa con quattro colori senza che due regioni confinanti coincidano.","preset":{"20x15_easy_30_regions":"20×15 Facile, 30 regioni","20x15_medium_30_regions":"20×15 Medio, 30 regioni","20x15_hard_30_regions":"20×15 Difficile, 30 regioni","20x15_extreme_30_regions":"20×15 Estremo, 30 regioni","30x25_medium_75_regions":"30×25 Medio, 75 regioni","30x25_hard_75_regions":"30×25 Difficile, 75 regioni"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"regions":{"name":"Regioni"},"difficulty":{"name":"Difficoltà","choice":{"easy":"Facile","medium":"Medio","hard":"Difficile","extreme":"Estremo"}}},"achievement":{"no_dots":{"name":"Atlante a mano libera","description":"Risolvi una Mappa Difficile o più difficile senza un solo puntino a matita."},"steady_brush":{"name":"Pennello sicuro","description":"Risolvi una Mappa Estremo senza mai cambiare il colore di una regione."}},"action":{"l":{"label":"Numeri","title":"Mostra un numero in ogni regione (L)"}}},"mines":{"name":"Mine","alsoKnownAs":"Campo minato, Prato fiorito","description":"Scopri ogni casella che non nasconde una mina: non devi mai tirare a indovinare.","preset":{"9x9_beginner_10_mines":"9×9 Principiante, 10 mine","9x9_35_mines":"9×9, 35 mine","16x16_intermediate_40_mines":"16×16 Intermedio, 40 mine","16x16_99_mines":"16×16, 99 mine","30x16_expert_99_mines":"30×16 Esperto, 99 mine","30x16_170_mines":"30×16, 170 mine"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"mines":{"name":"Mine"},"ensure_solubility":{"name":"Garantisci la risolvibilità"}},"achievement":{"no_flags":{"name":"Senza bandierine","description":"Vinci una partita a Mine senza piantare una sola bandierina."},"expert_sweep":{"name":"Artificiere","description":"Vinci il tabellone Esperto 30×16 in meno di cinque minuti."},"so_close":{"name":"Per un pelo","description":"Calpesta una mina quando restano da aprire non più di tre caselle sicure."}},"status":{"marked":"Segnate: {n} / {total}","deaths":" · Morti: {n}"}},"net":{"name":"Rete","alsoKnownAs":"NetWalk","description":"Ruota le tessere finché ognuna non è collegata al centro.","preset":{"5x5":"5×5","7x7":"7×7","9x9":"9×9","11x11":"11×11","13x11":"13×11","5x5_wrapping":"5×5 con bordi collegati","7x7_wrapping":"7×7 con bordi collegati","9x9_wrapping":"9×9 con bordi collegati","11x11_wrapping":"11×11 con bordi collegati","13x11_wrapping":"13×11 con bordi collegati"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"walls_wrap_around":{"name":"Bordi collegati"},"barrier_probability":{"name":"Probabilità di barriera"},"ensure_unique_solution":{"name":"Garantisci soluzione unica"}},"action":{"j":{"label":"Rimescola","title":"Ruota a caso ogni tessera non bloccata (J)"},"scroll_left":{"label":"←","title":"Sposta la vista a sinistra (Shift+←)"},"scroll_up":{"label":"↑","title":"Sposta la vista in alto (Shift+↑)"},"scroll_down":{"label":"↓","title":"Sposta la vista in basso (Shift+↓)"},"scroll_right":{"label":"→","title":"Sposta la vista a destra (Shift+→)"},"k":{"label":"Blocca","title":"Fai clic sulle tessere per bloccarle o sbloccarle invece di girarle (K)"}},"achievement":{"no_locks":{"name":"Niente sotto chiave","description":"Risolvi una Rete 9×9 o più grande senza bloccare una sola tessera."},"not_a_turn_wasted":{"name":"Nessun giro sprecato","description":"Risolvi una Rete 9×9 o più grande senza girare una tessera più del necessario."},"jumbled":{"name":"Tutto sottosopra","description":"Premi Rimescola e risolvi comunque il rompicapo."}},"status":{"active":"Attive: {n}/{total}"}},"netslide":{"name":"Rete scorrevole","description":"Fai scorrere righe e colonne di pezzi di rete finché tutto non è collegato.","preset":{"3x3_easy":"3×3 facile","3x3_medium":"3×3 medio","3x3_hard":"3×3 difficile","4x4_easy":"4×4 facile","4x4_medium":"4×4 medio","4x4_hard":"4×4 difficile","5x5_easy":"5×5 facile","5x5_medium":"5×5 medio","5x5_hard":"5×5 difficile"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"walls_wrap_around":{"name":"Bordi collegati"},"barrier_probability":{"name":"Probabilità di barriera"},"number_of_shuffling_moves":{"name":"Numero di mosse di mescolamento"}},"achievement":{"tidy_four":{"name":"Ricablaggio pulito","description":"Risolvi una Rete scorrevole 4×4 in 18 scorrimenti o meno."},"lean_five":{"name":"Guardalinee","description":"Risolvi una Rete scorrevole 5×5 in 32 scorrimenti o meno."},"big_switch":{"name":"Il grande scambio","description":"Accendi tutta la rete con un solo scorrimento quando ne era accesa meno di metà."}},"status":{"active":" · Attive: {n}/{total}"}},"pattern":{"name":"Motivo","alsoKnownAs":"Crucipixel, Picross, Nonogramma","description":"Riempi la griglia partendo dalle lunghezze delle serie indicate per ogni riga e colonna.","preset":{"10x10":"10×10","15x15":"15×15","20x20":"20×20","25x25":"25×25","30x30":"30×30"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"}},"achievement":{"no_dots":{"name":"Neanche un punto","description":"Risolvi un Motivo 15×15 o più grande senza posare un solo punto."},"inked_in":{"name":"Ripassato a china","description":"Risolvi un Motivo 20×20 o più grande senza mai svuotare una casella nera."}},"action":{"e":{"label":"Gomma","title":"Fai clic o trascina per riportare le caselle a sconosciute (E)"}}},"pearl":{"name":"Perle","alsoKnownAs":"Masyu","description":"Traccia un unico anello chiuso che passa dritto sulle perle bianche e gira su quelle nere.","preset":{"6x6_easy":"6×6 Facile","6x6_tricky":"6×6 Impegnativo","8x8_easy":"8×8 Facile","8x8_tricky":"8×8 Impegnativo","10x10_easy":"10×10 Facile","10x10_tricky":"10×10 Impegnativo","12x8_easy":"12×8 Facile","12x8_tricky":"12×8 Impegnativo"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"difficulty":{"name":"Difficoltà","choice":{"easy":"Facile","tricky":"Impegnativo"}},"allow_unsoluble":{"name":"Consenti irrisolvibili"}},"achievement":{"no_crosses":{"name":"Filo di perle","description":"Risolvi un Perle 10×10 senza mettere una sola crocetta."},"one_stroke":{"name":"Tutto d’un tratto","description":"Traccia l’intero anello di un Perle 8×8 o più grande con un solo trascinamento."}},"action":{"x":{"label":"Croce","title":"Fai clic o trascina per sbarrare i lati che l’anello non può usare (X)"}}},"pegs":{"name":"Pioli","alsoKnownAs":"Solitario, Solitario inglese","description":"Fai saltare i pioli uno sopra l’altro finché non ne resta uno solo.","preset":{"cross":"Croce","octagon":"Ottagono","random_5x5":"Casuale 5×5","random_7x7":"Casuale 7×7","random_9x9":"Casuale 9×9"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"board_type":{"name":"Tipo di tabellone","choice":{"cross":"Croce","octagon":"Ottagono","random":"Casuale"}}},"achievement":{"dead_centre":{"name":"Centro esatto","description":"Finisci il tabellone Croce con l’ultimo piolo nel buco centrale."},"hopscotch":{"name":"Campana","description":"Vinci una partita a Pioli con un piolo che salta quattro volte di fila."},"pegged_out":{"name":"Inchiodato","description":"Resta bloccato con dieci pioli o più ancora sul tabellone."}},"status":{"stuck":"Niente più mosse — restano {n} pioli","playing":"Pioli rimasti: {n}  ·  Mosse: {moves}"}},"range":{"name":"Portata","alsoKnownAs":"Kurodoko, Kuromasu","description":"Annerisci le caselle in modo che ogni numero veda esattamente altrettante caselle bianche lungo la sua riga e la sua colonna.","preset":{"9x6":"9×6","12x8":"12×8","13x9":"13×9","16x11":"16×11"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"}},"achievement":{"no_dots":{"name":"Contrasto puro","description":"Risolvi un Portata 13×9 o più grande senza posare un solo punto."},"quick_sight":{"name":"Colpo d’occhio","description":"Risolvi un Portata 16×11 in meno di cinque minuti."}},"action":{"e":{"label":"Gomma","title":"Fai clic o trascina per togliere caselle nere e punti (E)"}}},"rect":{"name":"Rettangoli","alsoKnownAs":"Shikaku","description":"Dividi la griglia in rettangoli, ognuno contenente un numero pari alla sua area.","preset":{"7x7":"7×7","9x9":"9×9","11x11":"11×11","13x13":"13×13","15x15":"15×15","17x17":"17×17","19x19":"19×19"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"expansion_factor":{"name":"Fattore di espansione"},"ensure_unique_solution":{"name":"Garantisci soluzione unica"}},"achievement":{"clean_cuts":{"name":"Tagli netti","description":"Risolvi un Rettangoli 11×11 o più grande in non più mosse di quanti numeri contiene."},"quick_carver":{"name":"Intagliatore lampo","description":"Risolvi un Rettangoli 19×19 in meno di dieci minuti."}},"status":{"drag":"{w}×{h} "},"action":{"e":{"label":"Gomma","title":"Trascina su un’area per togliere le linee al suo interno, o fai clic su una linea per toglierla (E)"}}},"samegame":{"name":"Same Game","alsoKnownAs":"Clickomania","description":"Svuota il tabellone togliendo gruppi di caselle adiacenti dello stesso colore.","preset":{"5x5_3_colours":"5×5, 3 colori","10x5_3_colours":"10×5, 3 colori","15x10_3_colours":"15×10, 3 colori","15x10_4_colours":"15×10, 4 colori","20x15_4_colours":"20×15, 4 colori"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"no_of_colours":{"name":"N. di colori"},"scoring_system":{"name":"Sistema di punteggio","choice":{"n_1_2":"(n-1)^2","n_2_2":"(n-2)^2"}},"ensure_solubility":{"name":"Garantisci la risolvibilità"}},"achievement":{"avalanche":{"name":"Valanga","description":"Rimuovi un gruppo di 25 caselle o più in un colpo solo, poi ripulisci il tabellone."},"no_pairs":{"name":"Coppie vietate","description":"Ripulisci un tabellone 15×10 o più grande senza mai rimuovere una coppia."},"last_one":{"name":"L’ultima casella","description":"Resta bloccato con una sola casella rimasta sul tabellone."}},"status":{"score":"Punteggio: {n}","complete":"Tabellone ripulito! {score}","stuck":"Non ci sono più mosse. {score}","selected":"{score} · Selezionate: {n} (+{points})"}},"signpost":{"name":"Segnavia","description":"Collega le caselle in un unico percorso numerato, seguendo a ogni passo una freccia.","preset":{"4x4":"4×4","4x4_free_ends":"4×4, estremi liberi","5x5":"5×5","5x5_free_ends":"5×5, estremi liberi","6x6":"6×6","7x7":"7×7"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"start_and_end_in_corners":{"name":"Inizio e fine negli angoli"}},"achievement":{"unbroken":{"name":"Catena intatta","description":"Risolvi un Segnavia senza mai rimuovere o sostituire un collegamento."},"in_order":{"name":"Dritto al punto","description":"Risolvi un Segnavia 6×6 o più grande collegando il percorso in ordine, da 1 alla stella."},"star_first":{"name":"Esprimi un desiderio","description":"Fai del tuo primissimo collegamento uno verso la stella, poi risolvi il rompicapo."}},"action":{"b":{"label":"Spezza","title":"Fai clic su una casella per spezzare tutta la sua catena (B)"}}},"singles":{"name":"Singoli","alsoKnownAs":"Hitori","description":"Annerisci le caselle in modo che nessun numero si ripeta in una riga o in una colonna, senza spezzare la griglia.","preset":{"5x5_easy":"5×5 Facile","5x5_tricky":"5×5 Impegnativo","6x6_easy":"6×6 Facile","6x6_tricky":"6×6 Impegnativo","8x8_easy":"8×8 Facile","8x8_tricky":"8×8 Impegnativo","10x10_easy":"10×10 Facile","10x10_tricky":"10×10 Impegnativo","12x12_easy":"12×12 Facile","12x12_tricky":"12×12 Impegnativo"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"difficulty":{"name":"Difficoltà","choice":{"easy":"Facile","tricky":"Impegnativo"}}},"achievement":{"no_circles":{"name":"Niente cerchi","description":"Risolvi un Singoli 8×8 o più grande senza cerchiare un solo numero."},"sure_hand":{"name":"Mano sicura","description":"Risolvi un Singoli 10×10 o più grande senza ripristinare una casella annerita."}}},"sixteen":{"name":"Sedici","description":"Fai scorrere righe e colonne intere attorno alla griglia per mettere in ordine le tessere.","preset":{"3x3":"3×3","4x3":"4×3","4x4":"4×4","5x4":"5×4","5x5":"5×5"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"number_of_shuffling_moves":{"name":"Numero di mosse di mescolamento"}},"achievement":{"lean_slides":{"name":"Scorrimento parco","description":"Rimetti in ordine il 4×4 in 100 scorrimenti o meno."},"five_in_200":{"name":"Grande riordinatore","description":"Rimetti in ordine il 5×5 in 200 scorrimenti o meno."},"round_the_doughnut":{"name":"Il giro della ciambella","description":"Fai scorrere una linea per un giro completo finché non torna al punto di partenza."}}},"slant":{"name":"Diagonali","alsoKnownAs":"Gokigen Naname","description":"Traccia una diagonale in ogni casella, rispettando i numeri e senza formare anelli.","preset":{"5x5_easy":"5×5 Facile","5x5_hard":"5×5 Difficile","8x8_easy":"8×8 Facile","8x8_hard":"8×8 Difficile","12x10_easy":"12×10 Facile","12x10_hard":"12×10 Difficile"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"difficulty":{"name":"Difficoltà","choice":{"easy":"Facile","hard":"Difficile"}}},"achievement":{"no_loops":{"name":"Niente anelli","description":"Risolvi un Diagonali 8×8 o più grande senza mai chiudere un anello."},"steady_hand":{"name":"Senza esitazioni","description":"Risolvi un Diagonali 12×10 senza tornare indietro a cambiare una linea."}}},"solo":{"name":"Solo","alsoKnownAs":"Sudoku","description":"Riempi la griglia in modo che ogni riga, colonna e blocco contenga ogni cifra una sola volta.","preset":{"4x4_very_easy":"4×4 Facilissimo","6x6_easy":"6×6 Facile","9x9_very_easy":"9×9 Facilissimo","9x9_easy":"9×9 Facile","9x9_x_diagonal_easy":"9×9 Diagonali X Facile","9x9_medium":"9×9 Medio","9x9_hard":"9×9 Difficile","9x9_x_diagonal_hard":"9×9 Diagonali X Difficile","9x9_expert":"9×9 Esperto","9x9_extreme":"9×9 Estremo","9x9_killer":"9×9 Killer","9x9_jigsaw_easy":"9×9 Jigsaw Facile","9x9_jigsaw_x_diagonal_easy":"9×9 Jigsaw Diagonali X Facile","9x9_jigsaw_hard":"9×9 Jigsaw Difficile","12x12_easy":"12×12 Facile","16x16_easy":"16×16 Facile"},"config":{"columns_of_sub_blocks":{"name":"Colonne di sottoblocchi"},"rows_of_sub_blocks":{"name":"Righe di sottoblocchi"},"x_require_every_number_in_each_main_diagonal":{"name":"\\"X\\" (ogni numero in ciascuna diagonale principale)"},"jigsaw_irregularly_shaped_sub_blocks":{"name":"Jigsaw (sottoblocchi di forma irregolare)"},"killer_digit_sums":{"name":"Killer (somme di cifre)"},"symmetry":{"name":"Simmetria","choice":{"none":"Nessuna","2_way_rotation":"Rotazione a 2 vie","4_way_rotation":"Rotazione a 4 vie","2_way_mirror":"Speculare a 2 vie","2_way_diagonal_mirror":"Speculare diagonale a 2 vie","4_way_mirror":"Speculare a 4 vie","4_way_diagonal_mirror":"Speculare diagonale a 4 vie","8_way_mirror":"Speculare a 8 vie"}},"difficulty":{"name":"Difficoltà","choice":{"very_easy":"Facilissimo","easy":"Facile","medium":"Medio","hard":"Difficile","expert":"Esperto","extreme":"Estremo"}}},"action":{"m":{"label":"Annotazioni","title":"Annota a matita ogni possibilità in ogni casella vuota (M)"},"l":{"label":"Evidenzia","title":"Metti in risalto ogni casella con la cifra che hai toccato per ultima (L)"}},"achievement":{"pen_only":{"name":"Penna, niente matita","description":"Risolvi un Solo 9×9 Medio, Killer o più difficile senza una sola annotazione a matita."},"no_second_thoughts":{"name":"Senza ripensarci","description":"Risolvi un 9×9 Esperto o più difficile senza mai cambiare o cancellare una cifra."}}},"tents":{"name":"Tende","alsoKnownAs":"Tende e alberi, campeggio","description":"Pianta una tenda accanto a ogni albero senza che due tende si tocchino.","preset":{"8x8_easy":"8×8 Facile","8x8_tricky":"8×8 Impegnativo","10x10_easy":"10×10 Facile","10x10_tricky":"10×10 Impegnativo","15x15_easy":"15×15 Facile","15x15_tricky":"15×15 Impegnativo"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"difficulty":{"name":"Difficoltà","choice":{"easy":"Facile","tricky":"Impegnativo"}}},"achievement":{"no_grass":{"name":"Campeggio perfetto","description":"Risolvi un Tende 10×10 o più grande senza segnare una sola casella come erba."},"no_strikes":{"name":"Campeggiatori felici","description":"Risolvi un Tende 15×15 senza mai togliere una tenda."}}},"towers":{"name":"Torri","alsoKnownAs":"Grattacieli, Skyscrapers","description":"Costruisci le torri in modo che ogni indizio sul bordo conti le torri visibili da lì.","preset":{"4x4_easy":"4×4 Facile","5x5_easy":"5×5 Facile","5x5_hard":"5×5 Difficile","6x6_easy":"6×6 Facile","6x6_hard":"6×6 Difficile","6x6_expert":"6×6 Esperto","6x6_extreme":"6×6 Estremo"},"config":{"grid_size":{"name":"Dimensione della griglia"},"difficulty":{"name":"Difficoltà","choice":{"easy":"Facile","hard":"Difficile","expert":"Esperto","extreme":"Estremo"}}},"action":{"m":{"label":"Annotazioni","title":"Annota a matita ogni possibilità in ogni casella vuota (M)"},"l":{"label":"Evidenzia","title":"Metti in risalto ogni casella con la cifra che hai toccato per ultima (L)"}},"achievement":{"no_pencil":{"name":"Skyline mentale","description":"Risolvi un Torri 6×6 senza scrivere una sola annotazione a matita."},"clean_build":{"name":"Fatto per durare","description":"Risolvi un Torri 6×6 Esperto o Estremo senza tornare indietro a cambiare una torre."},"tallest_first":{"name":"Prima le più alte","description":"Costruisci tutte le torri più alte prima delle altre, poi risolvi la griglia."}}},"tracks":{"name":"Binari","alsoKnownAs":"Train Tracks","description":"Posa un unico binario dall’ingresso all’uscita, rispettando i conteggi.","preset":{"8x8_easy":"8×8 Facile","8x8_tricky":"8×8 Impegnativo","10x8_easy":"10×8 Facile","10x8_tricky":"10×8 Impegnativo","10x10_easy":"10×10 Facile","10x10_tricky":"10×10 Impegnativo","15x10_easy":"15×10 Facile","15x10_tricky":"15×10 Impegnativo","15x15_easy":"15×15 Facile","15x15_tricky":"15×15 Impegnativo"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"difficulty":{"name":"Difficoltà","choice":{"easy":"Facile","tricky":"Impegnativo"}},"disallow_consecutive_1_clues":{"name":"Vieta indizi 1 consecutivi"}},"achievement":{"no_crosses":{"name":"Niente barrato","description":"Risolvi un Binari 10×10 o più grande senza barrare una casella o un lato."},"no_lift":{"name":"A tutto vapore","description":"Risolvi un Binari 15×10 o più grande senza mai togliere una rotaia posata."},"long_haul":{"name":"Lunga percorrenza","description":"Posa rotaie attraverso dieci caselle con un solo trascinamento, poi completa la linea."}},"action":{"e":{"label":"Gomma","title":"Fai clic o trascina per ripulire le caselle (E)"}}},"twiddle":{"name":"Rotazioni","description":"Ruota blocchi quadrati di tessere per rimettere i numeri in ordine.","preset":{"3x3_rows_only":"3×3 solo righe","3x3_normal":"3×3 normale","3x3_orientable":"3×3 orientabile","4x4_normal":"4×4 normale","4x4_orientable":"4×4 orientabile","4x4_rotating_3x3_blocks":"4×4, blocchi rotanti 3×3","5x5_rotating_3x3_blocks":"5×5, blocchi rotanti 3×3","6x6_rotating_4x4_blocks":"6×6, blocchi rotanti 4×4"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"rotating_block_size":{"name":"Dimensione del blocco rotante"},"one_number_per_row":{"name":"Un numero per riga"},"orientation_matters":{"name":"L’orientamento conta"},"number_of_shuffling_moves":{"name":"Numero di mosse di mescolamento"}},"achievement":{"few_turns":{"name":"Venti rotazioni","description":"Risolvi un Rotazioni 3×3 normale in 20 rotazioni o meno."},"perfect_ten":{"name":"Dieci e lode","description":"Risolvi un Rotazioni 3×3 normale in 10 rotazioni o meno."},"dizzy":{"name":"Gira e rigira","description":"Ruota lo stesso blocco nello stesso verso quattro volte di fila, poi risolvi il rompicapo."}},"action":{"t":{"label":"Orario","title":"Inverti i sensi: i clic ruotano in senso orario, i clic destri in senso antiorario (T)"}}},"undead":{"name":"Non morti","description":"Sistema fantasmi, vampiri e zombie in modo che corrispondano a ciò che si vede negli specchi.","preset":{"4x4_easy":"4×4 Facile","4x4_normal":"4×4 Normale","4x4_tricky":"4×4 Impegnativo","5x5_easy":"5×5 Facile","5x5_normal":"5×5 Normale","5x5_tricky":"5×5 Impegnativo","7x7_easy":"7×7 Facile","7x7_normal":"7×7 Normale"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"difficulty":{"name":"Difficoltà","choice":{"easy":"Facile","normal":"Normale","tricky":"Impegnativo"}}},"keypad":{"g":"Fantasma","v":"Vampiro","z":"Zombie"},"achievement":{"no_pencil":{"name":"Fidati dei tuoi occhi","description":"Risolvi un Non morti 5×5 o più grande senza una sola annotazione a matita."},"fearless":{"name":"Senza paura","description":"Risolvi un Non morti Impegnativo senza tornare indietro a cambiare un mostro."}},"alsoKnownAs":"Labirinto di specchi infestato","action":{"s":{"label":"Vista","title":"Traccia le linee di vista che passano per una casella o partono da un numero di bordo (S)"}}},"unequal":{"name":"Disuguaglianze","alsoKnownAs":"Futoshiki","description":"Completa il quadrato latino in modo che ogni segno di maggiore sia rispettato.","preset":{"4x4_easy":"4×4 Facile","5x5_easy":"5×5 Facile","5x5_medium":"5×5 Medio","5x5_medium_adjacent":"5×5 Medio (Adiacenti)","5x5_hard":"5×5 Difficile","6x6_easy":"6×6 Facile","6x6_medium":"6×6 Medio","6x6_medium_adjacent":"6×6 Medio (Adiacenti)","6x6_hard":"6×6 Difficile","7x7_medium":"7×7 Medio","7x7_medium_adjacent":"7×7 Medio (Adiacenti)","7x7_hard":"7×7 Difficile"},"config":{"mode":{"name":"Modalità","choice":{"unequal":"Disuguaglianze","adjacent":"Adiacenti"}},"size_s_s":{"name":"Dimensione (s*s)"},"difficulty":{"name":"Difficoltà","choice":{"very_easy":"Facilissimo","easy":"Facile","medium":"Medio","hard":"Difficile","extreme":"Estremo"}}},"action":{"m":{"label":"Annotazioni","title":"Annota a matita ogni possibilità in ogni casella vuota (M)"},"h":{"label":"Aiutino","title":"Annota le possibilità che il ragionamento semplice lascia aperte (H)"},"l":{"label":"Evidenzia","title":"Metti in risalto ogni casella con la cifra che hai toccato per ultima (L)"}},"achievement":{"adjacent_bare":{"name":"Porta accanto","description":"Risolvi un Disuguaglianze in modalità Adiacenti senza scrivere una sola annotazione a matita."},"extreme_bare":{"name":"Tutto a mente","description":"Risolvi un Disuguaglianze Estremo senza scrivere una sola annotazione a matita."}}},"unruly":{"name":"Indisciplinato","alsoKnownAs":"Takuzu, Binairo","description":"Colora ogni casella di nero o di bianco, con lo stesso numero di ciascuno in ogni linea e mai tre di fila.","preset":{"8x8_easy":"8×8 Facile","8x8_normal":"8×8 Normale","10x10_easy":"10×10 Facile","10x10_normal":"10×10 Normale","14x14_easy":"14×14 Facile","14x14_normal":"14×14 Normale"},"config":{"width":{"name":"Larghezza"},"height":{"name":"Altezza"},"unique_rows_and_columns":{"name":"Righe e colonne uniche"},"difficulty":{"name":"Difficoltà","choice":{"easy":"Facile","normal":"Normale"}}},"achievement":{"no_threes":{"name":"Mai tre","description":"Risolvi un Indisciplinato 10×10 o più grande senza mai fare tre uguali in fila."},"first_time":{"name":"Bianco e nero","description":"Risolvi un Indisciplinato 14×14 senza tornare indietro a cambiare una casella."}},"action":{"e":{"label":"Gomma","title":"Fai clic su una casella per svuotarla (E)"}}},"untangle":{"name":"Districa","alsoKnownAs":"Planarity","description":"Trascina i punti finché non ci sono più linee che si incrociano.","preset":{"6_points":"6 punti","10_points":"10 punti","15_points":"15 punti","20_points":"20 punti","25_points":"25 punti"},"config":{"number_of_points":{"name":"Numero di punti"}},"action":{"g":{"label":"Aggancia","title":"Aggancia a una griglia i punti lasciati cadere (G)"}},"achievement":{"one_touch":{"name":"Tocco leggero","description":"Districa 10 punti o più senza prendere due volte lo stesso punto."},"only_downhill":{"name":"Sempre in discesa","description":"Districa 20 punti o più senza che una mossa aggiunga mai linee rosse."}}}}`),$=JSON.parse('{"blackbox":{"step1":{"text":"In questa scatola 4×4 si nasconde una pallina. Spara i laser dai punti lungo il bordo, deduci dove deve trovarsi, segnane la posizione e premi il pulsante nell’angolo."},"step2":{"text":"Fai clic sul punto del **bordo sinistro, all’altezza della seconda riga**. Il raggio viene deviato mentre attraversa la scatola ed esce da un’altra parte; ai due estremi viene dato lo stesso numero."},"step3":{"text":"Ora spara dal punto in **cima alla seconda colonna**. Una **H** significa che il raggio è finito dritto contro una pallina e non è più uscito."},"step4":{"text":"Spara anche dal punto in **cima alla prima colonna**. Una **R** significa che il raggio è rimbalzato subito indietro, cosa che succede quando una pallina si trova in diagonale accanto al punto d’ingresso."},"step5":{"text":"La R mette una pallina in diagonale accanto alla prima colonna e la H ne mette una dritta lungo la seconda: solo questa casella soddisfa entrambe."},"step6":{"text":"**Fai clic su quella casella** per segnare lì la tua pallina."},"step7":{"text":"Tutte le palline sono segnate, quindi il **segno di spunta nell’angolo in alto a sinistra** è attivo: fai clic per far controllare la tua risposta."},"step8":{"text":"Corretto. Mentre giochi, **fai clic destro** su una casella per chiuderla con un lucchetto quando sei sicuro che sia vuota, e **Risolvi** svela la risposta."}},"bridges":{"step1":{"text":"Il numero di ogni isola dice quante estremità di ponte le servono. Unisci tutte le isole in un’unica rete, con al massimo due ponti tra una coppia e senza che un ponte ne incroci un altro."},"step2":{"text":"Il **2 in basso** ha una sola isola allineata con sé: il **4** in cima. **Trascina** dal 2 verso il 4 per gettare un ponte."},"step3":{"text":"Vuole due estremità di ponte, e quella coppia è l’unico posto in cui possono andare. **Trascina** di nuovo allo stesso modo per un secondo ponte parallelo."},"step4":{"text":"Quell’isola è a posto. **Fai clic sull’isola** per segnarla come finita: diventa grigia e i suoi ponti si bloccano, così non puoi rovinarli per sbaglio."},"step5":{"text":"Nessun ponte può incrociarne un altro, quindi il collegamento tra i **due 1** ormai è escluso. **Trascina con il destro** dall’1 di sinistra verso quello di destra per segnarlo."},"step6":{"text":"Ora ogni 1 ha una sola via d’uscita, e da lì si ricavano i quattro ponti restanti. **Risolvi** completa il rompicapo (e **G** mostra tutte le linee dove potrebbe passare un ponte).","textTouch":"Ora ogni 1 ha una sola via d’uscita, e da lì si ricavano i quattro ponti restanti. **Risolvi** completa il rompicapo."}},"cube":{"step1":{"text":"Il cubo ha sei facce e sei caselle sono dipinte di blu. Fallo rotolare finché ogni faccia non ne ha raccolta una: a ogni atterraggio la faccia sotto e la casella si scambiano il colore."},"step2":{"text":"Un clic fa ribaltare il cubo verso la casella che scegli. **Fai clic sulla casella blu appena sotto il cubo** per portarne il colore sulla faccia che atterra."},"step3":{"text":"La casella che ha lasciato ora è tornata normale: i colori si scambiano davvero. **Fai clic sulla casella blu a destra** per colorare di blu una seconda faccia."},"step4":{"text":"Anche i **tasti freccia** fanno rotolare il cubo. Premi **→** una volta per raccogliere la terza casella blu.","textTouch":"Ogni casella vicina è a un tocco di distanza. **Tocca la casella blu successiva a destra** per raccogliere la terza casella blu."},"step5":{"text":"Tre facce blu, ne mancano tre: questo tabellone si completa in sei rotolamenti in tutto, e la barra di stato li conta. **Annulla** ne toglie uno se vai troppo in là."}},"dominosa":{"step1":{"text":"Qui erano state disposte tre tessere del domino — 0-0, 0-1 e 1-1 — e poi tolte, lasciando i loro numeri. Dividi la griglia in coppie per rimetterle ognuna esattamente una volta."},"step2":{"text":"Nessuna tessera può essere usata due volte. Accoppiare questo **0** con l’**1** sotto di esso renderebbe entrambe le colonne esterne uno 0-1, quindi **fai clic destro** tra i due per annotare che non sono una coppia."},"step3":{"text":"Gli unici due **0** che si toccano sono la coppia nell’angolo in alto a sinistra: è lì che va lo 0-0. **Fai clic sul confine tra i due** per posarlo."},"step4":{"text":"Allo stesso modo gli unici **1** che si toccano sono i due in basso a sinistra. Fai clic sul confine tra loro per l’1-1."},"step5":{"text":"Resta la colonna di destra per lo 0-1. Fai clic sul confine tra i suoi due numeri per finire."},"step6":{"text":"Ogni tessera è usata una sola volta. Un altro clic su una tessera la toglie, una tessera ripetuta viene disegnata in rosso, e **Annulla** ripercorre a ritroso le tue mosse."}},"fifteen":{"step1":{"text":"Fai scorrere le tessere numerate nello spazio vuoto finché non si leggono **da 1 a 8** in ordine, con il buco nell’angolo in basso a destra. Questo tabellone è a due mosse dalla fine."},"step2":{"text":"Può scorrere qualsiasi tessera nella stessa riga o colonna del buco. Fai clic sul **5** per spingerlo su nel buco."},"step3":{"text":"Ancora una. Fai clic sull’**8** per completare la riga."},"step4":{"text":"Risolto! **Annulla** e **Ripeti** ripercorrono le tue mosse, e **Nuovo**, nel menu di pausa, ti dà un altro rompicapo. Anche i tasti freccia fanno scorrere una tessera nel buco, nella direzione della freccia.","textTouch":"Risolto! **Annulla** e **Ripeti** ripercorrono le tue mosse, e **Nuovo**, nel menu di pausa, ti dà un altro rompicapo. Un’intera riga o colonna scorre in un colpo solo, quindi punta alla tessera più lontana."}},"filling":{"step1":{"text":"Scrivi una cifra in ogni casella vuota, in modo che ogni blocco connesso di cifre uguali copra esattamente tante caselle quante ne dice la cifra."},"step2":{"text":"Il **3** ai piedi della colonna centrale può crescere solo verso l’alto, quindi il suo blocco è quella colonna. **Trascina** dalla casella in cima fino a quella di mezzo, poi premi **3**.","textTouch":"Il **3** ai piedi della colonna centrale può crescere solo verso l’alto, quindi il suo blocco è quella colonna. **Trascina** dalla casella in cima fino a quella di mezzo, poi tocca **3** sul tastierino."},"step3":{"text":"Il **2** nella colonna di sinistra ha bisogno di un compagno e la casella sopra di esso è l’unica libera. Fai clic su quella casella e premi **2**.","textTouch":"Il **2** nella colonna di sinistra ha bisogno di un compagno e la casella sopra di esso è l’unica libera. Tocca quella casella, poi tocca **2** sul tastierino."},"step4":{"text":"Resta una casella. Fai clic sulla casella rimasta e premi **1** per vedere che aspetto ha una cifra sbagliata.","textTouch":"Resta una casella. Toccala, poi tocca **1** sul tastierino per vedere che aspetto ha una cifra sbagliata."},"step5":{"text":"Il rosso significa impossibile: quei due **1** si toccano, il che formerebbe un blocco di due, e il **2** in cima resta murato. Quella casella è ancora selezionata, quindi premi **Backspace** per svuotarla.","textTouch":"Il rosso significa impossibile: quei due **1** si toccano, il che formerebbe un blocco di due, e il **2** in cima resta murato. Quella casella è ancora selezionata, quindi tocca **⌫** sul tastierino per svuotarla."},"step6":{"text":"Quella casella vuota si accoppia invece con il **2** sopra di essa. Fai clic sulla casella e premi **2** per completare la griglia.","textTouch":"Quella casella vuota si accoppia invece con il **2** sopra di essa. Toccala, poi tocca **2** sul tastierino per completare la griglia."},"step7":{"text":"Griglia piena. Linee spesse racchiudono ogni blocco finito; il **clic destro** aggiunge caselle a una selezione una alla volta, e **Annulla** toglie l’ultimo inserimento."}},"flip":{"step1":{"text":"Accendi tutte e nove le caselle. Premere una casella ribalta lei **e** quelle intorno, quindi una casella accesa può tornare spenta."},"step2":{"text":"Il piccolo diagramma dentro una casella mostra che cosa ribalta: il blocco pieno è la casella stessa, i contorni sono le sue vicine."},"step3":{"text":"È ora di accenderla. Premi la casella in **alto a sinistra**, quella scura nell’angolo."},"step4":{"text":"L’angolo è acceso, ma le sue due vicine si sono spente. Premi ora la casella **centrale**."},"step5":{"text":"Adesso è scuro solo l’angolo in basso a destra. Premi la casella in **basso a destra** per finire."},"step6":{"text":"Tutte accese! **Annulla** ritira una pressione, e puoi guidare un cursore con i tasti freccia e premere Enter invece di fare clic.","textTouch":"Tutte accese! **Annulla** ritira una pressione, e premere due volte la stessa casella si annulla sempre, quindi l’ordine non conta mai."}},"flood":{"step1":{"text":"Possiedi la casella in alto a sinistra e tutto ciò che le è unito nello stesso colore. Ogni mossa ridipinge quella macchia, così le caselle vicine del nuovo colore si uniscono. Rendi tutta la griglia di un solo colore entro il limite di **quattro mosse**."},"step2":{"text":"Per ora la tua macchia è solo quell’angolo blu. Fai clic sulla casella **rossa** accanto: la macchia diventa rossa e ogni casella rossa che tocca viene con lei."},"step3":{"text":"Ora fai clic su una casella **blu** al bordo della tua macchia. Un colore scelto bene può propagarsi lontano nella griglia in una sola mossa."},"step4":{"text":"Fuori dalla tua macchia resta solo il **verde**. Un altro clic ingloba tutto il resto della griglia."},"step5":{"text":"Tre mosse su quattro: la barra di stato tiene il conto. Se le esaurisci prima che la griglia sia di un solo colore, la partita è persa. Ti sei bloccato? Un **Aiutino** gioca per te un colore giusto, e **Risolvi** finisce la griglia come risoluzione automatica."}},"galaxies":{"step1":{"text":"Due punti, quindi due galassie. Traccia dei muri lungo le linee della griglia in modo che ogni punto finisca al centro della propria regione: ruota una regione di 180° attorno al suo punto e deve ricadere esattamente su se stessa."},"step2":{"text":"Il punto di sinistra sta su una linea tra due caselle, quindi la sua galassia deve essere le due colonne di sinistra. **Fai clic sulla linea** della griglia appena a destra di esse, nella **riga in alto**."},"step3":{"text":"I punti fanno anche da bloc-notes. **Trascina** dal punto di destra dentro la **casella in alto a destra** per lasciarci una freccia, segnando quella casella come parte della sua galassia."},"step4":{"text":"Torniamo al muro: **fai clic sulla stessa linea** una riga più giù, nella **riga di mezzo**."},"step5":{"text":"Resta un segmento, nella **riga in basso**. **Fai clic sul segmento** per chiudere entrambe le galassie."},"step6":{"text":"Entrambe le regioni sono ombreggiate, quindi sono entrambe giuste. **Risolvi** disegna una soluzione intera, e un clic su un muro lo cancella di nuovo."}},"guess":{"step1":{"text":"Dietro i punti interrogativi si nascondono due pioli, in un certo ordine di tre colori. Prova una fila, guarda i segni che ottiene e restringi il campo."},"step2":{"text":"**Trascina** il colore in cima fuori dal vassoio e lascialo nel **foro di sinistra** della fila con la freccia."},"step3":{"text":"Puoi anche scegliere prima un colore e poi usarlo sui fori. Fai clic sul **secondo colore** del vassoio."},"step4":{"text":"Ora fai clic sul **foro di destra** per lasciarci quel colore."},"step5":{"text":"La fila è piena, quindi il **riquadro tratteggiato** alla sua destra si accende. Fai clic sul riquadro per far valutare il tentativo."},"step6":{"text":"Due segni **vuoti** significano che entrambi i colori sono nella risposta, ma nessuno dei due sta al posto giusto: un segno pieno sarebbe colore giusto, posto giusto. Scambiali e invia di nuovo."},"step7":{"text":"Risolto. **Risolvi** si arrende e mostra la risposta, e il tasto **L** mette una lettera sui pioli se i colori sono difficili da distinguere.","textTouch":"Risolto. **Risolvi** si arrende e mostra la risposta, e **Trattieni**, accanto ad Annulla, tiene al suo posto un piolo di cui sei sicuro per il tentativo successivo."}},"inertia":{"step1":{"text":"Tu sei la pallina nell’angolo in alto a sinistra e ci sono **tre gemme** da raccogliere. Una volta partita, la pallina si ferma solo contro un muro o su un fermo — e una mina la uccide."},"step2":{"text":"Fai clic su una casella alla **destra** della pallina. Rotola in quella direzione finché il bordo del tabellone non la ferma, raccogliendo la gemma che incontra."},"step3":{"text":"Ora fai clic **sotto** la pallina. Prende la gemma successiva e l’anello spezzato due caselle più giù — un fermo — la blocca."},"step4":{"text":"Attenzione: l’affare spinoso subito sotto la pallina è una **mina**. Rotolarci sopra chiude la partita, e solo Annulla ti tira fuori."},"step5":{"text":"Vai invece in **diagonale**: fai clic sulla casella due giù e due a sinistra, e la pallina scivola oltre la mina fino all’ultima gemma."},"step6":{"text":"Tutte e tre le gemme: fatto. **Annulla** riavvolge un rotolamento andato male; i tasti freccia fanno rotolare la pallina dritta, e Home, Page Up, End e Page Down in diagonale.","textTouch":"Tutte e tre le gemme: fatto. **Annulla** riavvolge un rotolamento andato male, e funziona anche toccare fuori dalla griglia, il che aiuta quando la pallina è contro un bordo."}},"keen":{"step1":{"text":"Inserisci 1, 2 e 3 in modo che ognuno compaia una volta per riga e per colonna, e che le cifre di ogni gabbia dal contorno spesso soddisfino il suo indizio aritmetico."},"step2":{"text":"Il prodotto della gabbia **2×** è 2, quindi le sue cifre sono 1, 1 e 2. Una gabbia può ripetere una cifra, ma non lungo una riga o una colonna, quindi il 2 va nell’angolo: fai clic su quella casella e digita **2**.","textTouch":"Il prodotto della gabbia **2×** è 2, quindi le sue cifre sono 1, 1 e 2. Il 2 va nell’angolo: tocca quella casella, poi tocca **2** sul tastierino."},"step3":{"text":"Le altre due caselle della gabbia sono gli 1. Fai clic sulla casella **a destra del 2** e digita **1**.","textTouch":"Le altre due caselle della gabbia sono gli 1. Tocca la casella **a destra del 2**, poi tocca **1** sul tastierino."},"step4":{"text":"La riga in alto ha già il suo 2 e il suo 1, quindi l’ultima casella deve essere il 3. Fai clic sulla **casella in alto a destra** e digita **3**.","textTouch":"La riga in alto ha già il suo 2 e il suo 1, quindi l’ultima casella deve essere il 3. Tocca la **casella in alto a destra**, poi tocca **3** sul tastierino."},"step5":{"text":"Su una casella stai solo tirando a indovinare? **Fai clic destro** sulla casella di mezzo e digita **3** per annotare quella cifra a matita invece di scriverla.","textTouch":"Su una casella stai solo tirando a indovinare? **Tieni premuta** la casella di mezzo e tocca **3** per annotare quella cifra invece di scriverla. Il tasto **✎** fa lo stesso per una casella che hai toccato."},"step6":{"text":"Ricava il resto allo stesso modo: una cifra ripetuta nella sua riga o colonna diventa rossa, e così una gabbia piena che non rispetta il suo indizio. Nel menu di pausa, **Annotazioni** annota per te ogni possibilità, e **Risolvi** svela la risposta."}},"lightup":{"step1":{"text":"Ogni casella bianca deve finire illuminata. Una lampadina illumina la propria riga e la propria colonna finché una casella nera non blocca il raggio, e nessuna lampadina può stare nella luce di un’altra."},"step2":{"text":"Un numero dice quante lampadine toccano quella casella nera. Questo **2** ha solo due vicine bianche, quindi entrambe ospitano una lampadina: fai clic su quella alla sua **destra**."},"step3":{"text":"Nota il velo giallo che si stende lungo il raggio. Ora fai clic sulla casella appena **sotto** il 2 per la sua seconda lampadina."},"step4":{"text":"Uno **0** non tocca nessuna lampadina. **Fai clic destro** sulla casella sopra di esso per annotare una croce: ti ricorda soltanto che lì non può andare nessuna lampadina."},"step5":{"text":"L’**1** vuole esattamente una lampadina. La casella sotto di esso è già illuminata, quindi una lampadina lì finirebbe nel raggio: fai clic invece sulla casella alla **sinistra** dell’1."},"step6":{"text":"Due caselle della riga in alto sono ancora scure e una l’hai già esclusa. Fai clic sull’**altra**."},"step7":{"text":"Ogni casella illuminata, ogni numero soddisfatto. **Annulla** ritira una lampadina, e i tasti freccia con Enter e Space piazzano lampadine e croci senza mouse.","textTouch":"Ogni casella illuminata, ogni numero soddisfatto. **Annulla** ritira una lampadina, e un tocco prolungato sbarra qualsiasi casella che hai escluso."}},"loopy":{"step1":{"text":"Traccia **un solo** anello chiuso lungo le linee tenui tra i punti. Ogni numero dice quanti dei quattro lati della sua casella sono usati dall’anello."},"step2":{"text":"La casella di mezzo è segnata **4**, quindi tutti e quattro i suoi lati stanno sull’anello. **Fai clic sul lato superiore** per tracciare la prima linea."},"step3":{"text":"Ora il suo **lato sinistro**. Un altro clic su una linea la cancella."},"step4":{"text":"Ogni punto ha due linee oppure nessuna, e il punto dove quelle due si incontrano è pieno. **Fai clic destro** sulla linea che sale da lì per sbarrarla come inutilizzabile."},"step5":{"text":"Restano due lati. **Fai clic sul lato inferiore** della casella di mezzo."},"step6":{"text":"E il **lato destro** lo chiude. Un solo anello, nessun capo sciolto, e i quattro **0** ne restano fuori."},"step7":{"text":"Risolto. **Annulla** ripercorre le tue linee, e **Tipo**, nel menu di pausa, scambia i quadrati con triangoli, esagoni e tassellature ancora più strane."}},"magnets":{"step1":{"text":"Ogni tessera è un magnete, con una metà **+** e una metà **−**, oppure è neutra. I numeri contano i poli **+** (in alto e a sinistra) e i poli **−** (in basso e a destra) di ogni linea, e poli uguali non possono mai toccarsi."},"step2":{"text":"La riga in basso vuole tre poli **−** e solo tre tessere arrivano fin lì, quindi ognuna deve darne uno. **Fai clic sinistro** sulla metà superiore della tessera verticale per renderla **+**, mandando il suo **−** di sotto."},"step3":{"text":"Quindi anche la tessera larga in basso a destra è un magnete, e lo **0** sopra l’ultima colonna vieta un **+** lì. **Fai clic sinistro** sulla sua metà di sinistra per mettere il **+** da quel lato."},"step4":{"text":"La quarta colonna ora ha il suo unico **+** e non vuole nessun **−**, quindi la tessera sopra non può essere né l’uno né l’altro. **Fai clic destro** sulla tessera per segnarla come neutra."},"step5":{"text":"Alla riga in alto servono ancora un **+** e un **−** dalla tessera larga di sinistra. La sua metà destra tocca un **+**, e poli uguali non possono toccarsi: quindi **fai clic sinistro** sulla sua metà di sinistra."},"step6":{"text":"Resta una tessera. La prima colonna ha già speso il suo **+** in alto, quindi qui il **+** va a destra: **fai clic sinistro** sulla metà di destra per finire."},"step7":{"text":"Risolto! Un altro clic sulla stessa metà gira il magnete, un secondo clic destro lascia dei punti interrogativi per annotare «magnete, ma in che verso?», e **Annulla** torna indietro."}},"map":{"step1":{"text":"Colora ogni regione in modo che due regioni che condividono un tratto di confine non coincidano. Quattro colori bastano sempre, e qui tre regioni sono ancora vuote."},"step2":{"text":"Prima prendi in mano un colore: **fai clic sul campione blu**, il secondo della fila sotto la mappa."},"step3":{"text":"Con un colore in mano, un **clic destro** su una regione vuota ci annota un puntino: la nota che quella regione *potrebbe* essere di quel colore. Provalo sulla regione alta lungo il lato destro."},"step4":{"text":"È più di un forse: quella regione confina già con rosso, verde e giallo, quindi resta solo il blu. **Fai clic sulla regione** per dipingerla."},"step5":{"text":"Puoi anche **trascinare** un colore da una regione all’altra. La grande regione in cima ora tocca rosso, verde e blu, quindi **trascina** il giallo fin lassù dalla piccola regione in basso."},"step6":{"text":"Resta una regione vuota, nell’**angolo in basso a sinistra**: confina con verde, blu e quel nuovo giallo, quindi deve essere rossa. **Trascina** il rosso fin lì dalla regione nell’angolo in alto a destra."},"step7":{"text":"Fatto: un conflitto avrebbe mostrato un **!** rosso sul confine tra le due regioni. **Annulla** torna indietro, e i tasti freccia con **1**–**4** colorano senza mouse.","textTouch":"Fatto: un conflitto avrebbe mostrato un **!** rosso sul confine tra le due regioni. **Annulla** torna indietro, e il campione con la gomma in fondo alla fila ripulisce una regione su cui hai cambiato idea."}},"mines":{"step1":{"text":"Ogni numero conta le mine nelle otto caselle che lo toccano. Sotto il blocco coperto si nascondono due mine: scopri tutto il resto senza calpestarne una."},"step2":{"text":"Questo **1** tocca una sola casella coperta, quindi quella casella è una mina. **Fai clic destro** sulla casella per piantarci una bandierina."},"step3":{"text":"L’**1** più sotto ha già la sua mina segnata, quindi le altre vicine sono sicure. **Fai clic sinistro su quell’1** per aprirle tutte in un colpo solo."},"step4":{"text":"Il **2** sopra il blocco conta già una bandierina e ha una sola casella coperta rimasta. **Fai clic destro** su quella casella."},"step5":{"text":"Entrambe le mine sono segnate, quindi l’ultima casella coperta è per forza sicura. **Fai clic sinistro sulla casella** per completare la griglia."},"step6":{"text":"Campo ripulito. Un secondo clic destro toglie di nuovo la bandierina, e **Annulla** ti salva se mai calpesti una mina."}},"net":{"step1":{"text":"Ogni tessera porta un pezzo di filo, e tutta la rete è stata girata a caso. Ruota le tessere finché tutte e nove non sono collegate alla tessera segnata al centro: i fili **blu** sono già alimentati, quelli grigi no."},"step2":{"text":"La tessera in basso a sinistra punta il filo dritto contro il muro. **Fai clic sinistro** sulla tessera per un quarto di giro antiorario, così il filo raggiunge la vicina di destra."},"step3":{"text":"Il **clic destro** gira una tessera nell’altro verso. Dai alla tessera in basso a destra un giro orario e il suo filo si volta verso sinistra."},"step4":{"text":"La tessera di mezzo ha fili su tutti e quattro i lati, quindi non può essere sbagliata. **Fai clic centrale** sulla tessera per bloccarla, oppure attiva il **lucchetto** accanto ad Annulla e fai clic sulla tessera: una tessera bloccata è ombreggiata e si rifiuta di girare.","textTouch":"La tessera di mezzo ha fili su tutti e quattro i lati, quindi non può essere sbagliata. Attiva il **lucchetto** accanto ad Annulla e tocca la tessera per bloccarla: una tessera bloccata è ombreggiata e si rifiuta di girare."},"step5":{"text":"Resta una tessera. Con il **lucchetto** disattivato, **fai clic sinistro** sull’angolo in alto a destra per portarne il filo verso sinistra e accendere tutta la rete.","textTouch":"Resta una tessera. Con il **lucchetto** disattivato, tocca l’angolo in alto a destra per portarne il filo verso sinistra e accendere tutta la rete."},"step6":{"text":"Tutte e nove le tessere sono alimentate. **Annulla** ripercorre i tuoi giri; con la tastiera, i tasti freccia muovono un cursore e **A**, **D** e **F** girano la tessera che sta sotto.","textTouch":"Tutte e nove le tessere sono alimentate. **Annulla** ripercorre i tuoi giri, bloccare una tessera di cui sei sicuro la protegge da un tocco involontario, e **Rimescola** rigira tutte le tessere non bloccate."}},"netslide":{"step1":{"text":"Ogni pezzo di filo deve finire collegato alla fonte di energia. I fili blu sono alimentati, quelli grigi a matita no."},"step2":{"text":"La fonte sta sulla tessera di mezzo. Quella tessera non si muove mai, quindi la riga e la colonna centrali non hanno frecce: tutto il resto scorre."},"step3":{"text":"Fai clic sulla freccia **a sinistra della riga in basso** per far scorrere quella riga di un passo verso sinistra; il filo che cade fuori ricompare a destra."},"step4":{"text":"Ora la riga in basso si unisce, ma è ancora grigia: niente la collega verso l’alto alla fonte."},"step5":{"text":"**Fai clic destro** sulla freccia **sopra la terza colonna**. Un clic destro inverte una freccia, quindi quella colonna scorre in giù e gli ultimi fili si accendono."},"step6":{"text":"Tutto alimentato! **Risolvi** mostra una soluzione se ti blocchi, e il menu **Tipo** ha griglie con bordi collegati, dove i fili escono da un bordo e rientrano da quello opposto."}},"pattern":{"step1":{"text":"I numeri accanto a ogni riga e a ogni colonna sono le lunghezze delle sue serie nere, in ordine. Deduci quali caselle sono nere e riempile."},"step2":{"text":"La **terza colonna** dice 1 2: una nera, uno spazio, poi due nere. In quattro caselle ci sta in un solo modo, con la coppia in fondo. **Trascina** verso il basso su di esse."},"step3":{"text":"Quindi lo spazio è la casella sopra la coppia. **Fai clic destro** sulla casella per metterci un puntino, che segna una casella che sai essere bianca."},"step4":{"text":"E la casella in cima a quella colonna è la nera solitaria dell’indizio. **Fai clic sulla casella**."},"step5":{"text":"L’**ultima colonna** dice 3. Ovunque stia una serie di tre in quattro caselle, copre sempre le due di mezzo: quindi **trascina** verso il basso su quelle."},"step6":{"text":"Un indizio diventa grigio quando la sua linea è finita. Continua così, un pezzo alla volta, oppure lascia che **Risolvi** completi questo rompicapo; un clic centrale riporta una casella allo stato incerto."}},"pearl":{"step1":{"text":"Traccia un solo anello chiuso, da centro di casella a centro di casella. Non deve passare per tutte le caselle, ma deve passare per ogni perla."},"step2":{"text":"Una **perla bianca** vuol dire che l’anello ci passa dritto attraverso. Nella riga in alto l’unico passaggio dritto possibile è in orizzontale, quindi **trascina** dalla casella a sinistra di quella perla alla casella alla sua destra."},"step3":{"text":"Quella perla ora ha entrambi i suoi segmenti, quindi non può uscirne nient’altro. **Fai clic destro** sul lato sotto di essa per sbarrarlo."},"step4":{"text":"Una **perla nera** gira, e l’anello prosegue poi dritto attraverso la casella su entrambi i suoi lati. Quella sul **bordo sinistro** non può girare in giù — servirebbe una linea dritta attraverso l’angolo in basso a sinistra — quindi **fai clic sul suo lato destro**."},"step5":{"text":"Quindi la casella accanto tira dritto, e così anche la perla bianca oltre di essa. **Trascina** da quella casella fino alla quarta colonna."},"step6":{"text":"Continua a ragionare a partire dalle perle: una perla prende un alone rosso nel momento in cui la sua regola salta. **Risolvi** disegna l’anello intero, se vuoi vederlo."}},"pegs":{"step1":{"text":"Un piolo salta oltre un vicino nel buco vuoto al di là, e il piolo scavalcato viene tolto. Riduci questo piccolo tabellone a **un solo piolo**: tre salti."},"step2":{"text":"**Trascina** il piolo in cima al gambo verso il basso, oltre il suo vicino, dentro il buco in fondo."},"step3":{"text":"Funziona anche il clic. Fai clic sul **piolo di destra** per raccoglierlo, poi fai clic sul buco due caselle più a sinistra."},"step4":{"text":"Ultimo salto: trascina il piolo nell’**angolo in basso a sinistra** oltre il suo vicino, fino in mezzo."},"step5":{"text":"Un piolo rimasto: risolto. **Annulla** ritira un salto quando ti incastri, e funzionano anche i tasti freccia: Enter raccoglie un piolo, poi una freccia lo spinge.","textTouch":"Un piolo rimasto: risolto. **Annulla** ritira un salto ogni volta che ti incastri, indietro quanto vuoi."}},"range":{"step1":{"text":"Annerisci le caselle in modo che ogni numero conti esattamente le caselle bianche che la sua casella vede: se stessa, più ogni casella in linea in alto, in basso, a sinistra e a destra, finché una casella nera o il bordo non la fermano."},"step2":{"text":"Il **6** al momento vede sei caselle: tutta la sua riga più le due sotto di sé. Quindi in quella riga e in quella colonna nulla può diventare nero."},"step3":{"text":"Il **2** può vedere solo se stesso e una casella in più, e la casella sopra di esso deve restare bianca per via del 6. Quindi **fai clic sulla casella** alla sua sinistra per annerirla."},"step4":{"text":"Resta la casella in alto a destra come unica casella bianca che il 2 vede ancora. **Fai clic destro** sulla casella per annotarci un puntino: è così che si segna una casella che sai restare bianca."},"step5":{"text":"Il **3** vede già se stesso e le due caselle alla sua sinistra, quindi la casella alla sua destra deve essere nera. **Fai clic sulla casella**."},"step6":{"text":"Finito con due caselle nere: i puntini sono solo note. **H** riempie una casella che si deduce dal resto, e **Risolvi** mette i puntini su tutta la griglia.","textTouch":"Finito con due caselle nere: i puntini sono solo note. **Risolvi** mette i puntini su tutta la griglia, se preferisci vedere la risposta."}},"rect":{"step1":{"text":"Taglia questa griglia in rettangoli, in modo che ogni rettangolo contenga esattamente un numero e che quel numero indichi quante caselle copre il rettangolo."},"step2":{"text":"Un rettangolo può contenere un solo numero, e il **3** sta proprio sotto il **4**: quindi il 4 deve prendersi tutta la riga in alto. **Trascina** dal 4 fino all’estremità destra di quella riga."},"step3":{"text":"Un clic su una singola linea della griglia aggiunge o toglie soltanto quel lato. **Fai clic** sulla linea sul lato destro del **3**."},"step4":{"text":"Un 9 può essere solo un blocco 3×3, e resta un posto solo dove metterlo. **Trascina** attraverso il blocco illuminato, dalla sua casella in alto a sinistra all’angolo in basso a destra: così anche il 3 resta chiuso dentro."},"step5":{"text":"Ogni casella sta in un rettangolo della misura giusta. Un **trascinamento con il destro** cancella le linee dentro un’area ma ne lascia il contorno, e **Annulla** ritira un tratto."}},"samegame":{"step1":{"text":"Svuota il tabellone togliendo gruppi di due o più caselle adiacenti che condividono il colore. Un gruppo di _n_ caselle vale (_n_ − 2)², quindi quelli che contano sono i gruppi grandi."},"step2":{"text":"Fai clic su una qualsiasi delle quattro caselle **rosse** in alto. Il primo clic seleziona soltanto il gruppo: si schiarisce e prende un contorno spesso."},"step3":{"text":"Un altro clic sul gruppo selezionato lo toglie dal tabellone e ti fa guadagnare quattro punti. Le caselle sopra un buco ci cadono dentro, e le colonne vicine scorrono a chiudere una colonna vuota."},"step4":{"text":"Questa casella **verde** sta per conto suo. Nulla accanto a lei ne condivide il colore, quindi non potrà mai essere selezionata: deve aspettare che i movimenti del tabellone le portino accanto una compagna."},"step5":{"text":"Ora la **coppia blu** evidenziata qui. Fai clic su una delle due caselle per selezionarle entrambe."},"step6":{"text":"Cambiato idea? **Fai clic destro** sulla selezione per lasciarla andare: nulla viene rimosso prima del secondo clic."},"step7":{"text":"Il gioco è tutto qui. Ogni tabellone può essere svuotato, quindi vai avanti: **Annulla** riavvolge quando lasci una casella isolata, e non c’è nessun pulsante Risolvi a salvarti."}},"signpost":{"step1":{"text":"Ogni casella porta una freccia. Unisci tutte e sei in un’unica catena numerata **da 1 a 6**, dove ogni casella è seguita da una casella che sta da qualche parte lungo la propria freccia."},"step2":{"text":"L’**1** punta a est. **Trascina** da esso sulla casella alla sua destra per farne il 2."},"step3":{"text":"Il **3** si è agganciato da solo, come fanno sempre i numeri che si susseguono e puntano nel verso giusto. Ora **trascina** la casella in basso a destra su quella alla sua sinistra."},"step4":{"text":"Nessuna delle due ha ancora un numero, quindi la coppia è etichettata **a** e **a+1**. **Fai clic destro** sulla casella di mezzo della riga in basso per separarle di nuovo."},"step5":{"text":"Meglio i numeri veri: **trascina** il **3** sulla casella sotto di esso, che diventa il 4."},"step6":{"text":"Ultimo anello: **trascina** quel 4 sulla casella alla sua sinistra. Diventa il 5, e il 6 chiude il percorso da solo."},"step7":{"text":"Risolto. Un **trascinamento con il destro** collega nel verso opposto, da una casella a quella che la precede, e **Risolvi** stende l’intero percorso."}},"singles":{"step1":{"text":"Annerisci delle caselle finché nessun numero risulta ripetuto tra le caselle bianche di una riga o di una colonna. Due caselle nere non possono mai condividere un lato, e le caselle bianche devono restare un’unica regione connessa."},"step2":{"text":"I due **4** di questa riga hanno una casella in mezzo. Annerire quella casella lascerebbe bianchi entrambi i 4, quindi deve essere bianca lei stessa: **fai clic destro** sulla casella per cerchiarla."},"step3":{"text":"Quel **3** cerchiato è bianco per sempre, e la sua colonna ha un altro 3 in cima. **Fai clic sinistro** su quello in cima per annerirlo."},"step4":{"text":"Le caselle nere non si toccano mai, quindi il **4** subito a destra resta bianco. **Fai clic sinistro** sull’altro 4 di quell’ultima colonna."},"step5":{"text":"Di nuovo lo stesso ragionamento: il **2** proprio sopra la tua nuova casella nera è bianco, e la sua riga ha un altro 2 all’estrema sinistra. **Fai clic sinistro** su quello."},"step6":{"text":"Ne resta uno. Il **3** sopra quella casella nera è bianco, quindi deve sparire l’altro 3 ai piedi della colonna. **Fai clic sinistro** sul 3 in fondo."},"step7":{"text":"Risolto, e le caselle bianche sono ancora tutte unite. I cerchi sono solo note, e **Annulla** ripercorre a ritroso le tue mosse."}},"sixteen":{"step1":{"text":"Metti le tessere in ordine, **da 1 a 9**, leggendo da sinistra a destra. Le frecce lungo il bordo fanno scorrere un’intera riga o colonna di un passo, e ciò che cade fuori rientra dall’altra parte."},"step2":{"text":"Fai clic sulla freccia **sopra la seconda colonna** per far salire quella colonna di un passo: così si completa la riga di mezzo."},"step3":{"text":"Ora la riga in basso deve spostarsi a destra. **Fai clic destro** sulla freccia **a sinistra della riga in basso**: un clic destro manda la linea nel verso opposto."},"step4":{"text":"L’ultima: fai clic sulla freccia **a sinistra della riga in alto** per farla scorrere a sinistra e completare la griglia."},"step5":{"text":"In ordine! **Tipo**, nel menu di pausa, offre griglie più grandi, e la sua voce **Personalizzato…** può mescolarne una con un numero di mosse a scelta, che poi toccherà a te disfare."}},"slant":{"step1":{"text":"Traccia una diagonale in ogni casella. Un numero cerchiato conta le linee che toccano il suo angolo, e le linee non devono mai chiudere un anello."},"step2":{"text":"Lo **0** nell’angolo in alto a sinistra non vuole nulla che lo tocchi, quindi la sua unica casella deve pendere dall’altra parte. **Fai clic destro** sulla casella per disegnare una `/`."},"step3":{"text":"Il **4** ha bisogno di una linea da tutte e quattro le caselle intorno. **Fai clic sinistro** su quella sopra e a sinistra di esso: un clic sinistro disegna una `\\\\`."},"step4":{"text":"La casella sopra e a destra del **4** deve invece pendere verso il basso a sinistra. **Fai clic destro** sulla casella per una `/`."},"step5":{"text":"L’**1** sul bordo sinistro ha già la sua unica linea, quella della casella sotto. Quindi la casella sopra deve pendere dall’altra parte: **fai clic sinistro** sulla casella per una `\\\\`."},"step6":{"text":"Continua allo stesso modo. Un numero che non può più tornare diventa rosso, e così ogni linea presa in un anello chiuso. **Risolvi**, nel menu di pausa, riempie il resto."}},"solo":{"step1":{"text":"Ogni riga, ogni colonna e ogni **blocco 2×2** contornato deve contenere 1, 2, 3 e 4 esattamente una volta. In questa piccola griglia mancano tre caselle."},"step2":{"text":"Questo **blocco** ha già un 2, un 3 e un 4, quindi la sua casella vuota può essere solo un **1**. Fai clic su quella casella e premi il tasto **1**.","textTouch":"Questo **blocco** ha già un 2, un 3 e un 4, quindi la sua casella vuota può essere solo un **1**. Tocca quella casella, poi tocca **1** sul tastierino."},"step3":{"text":"Non sei sicuro di una casella? **Fai clic destro** su questa casella vuota e premi **2** per annotare la cifra a matita.","textTouch":"Non sei sicuro di una casella? Tocca questa casella vuota, attiva **✎** sul tastierino e tocca **2** per annotare la cifra a matita."},"step4":{"text":"La sua riga contiene già 3, 4 e 1, quindi la nota era giusta. **Fai clic sinistro** sulla stessa casella e premi **2** per scrivere la risposta.","textTouch":"La sua riga contiene già 3, 4 e 1, quindi la nota era giusta. La casella è ancora selezionata, quindi tocca **✎** per smettere di annotare e poi **2** per scrivere la risposta."},"step5":{"text":"Resta una casella. La sua riga ha già 4, 3 e 1: fai clic sulla casella e premi la cifra mancante.","textTouch":"Resta una casella. La sua riga ha già 4, 3 e 1: toccala, poi tocca la cifra mancante sul tastierino."},"step6":{"text":"Risolto! **Annulla** ritira una cifra sbagliata, e il tasto **M** annota tutte le possibilità in ogni casella vuota in un colpo solo.","textTouch":"Risolto! **Annulla** ritira una cifra sbagliata, e **Annotazioni**, nel menu di pausa, annota tutte le possibilità in ogni casella vuota in un colpo solo."}},"tents":{"step1":{"text":"Pianta una tenda accanto a ogni albero — sopra, sotto, a sinistra o a destra, mai in diagonale. Due tende non possono toccarsi, e i numeri contano le tende di ogni riga e colonna."},"step2":{"text":"Lo **0** in fondo alla seconda riga significa che quella riga non prende tende. **Fai clic destro** sulla casella accanto all’albero per segnarla come erba."},"step3":{"text":"Anche la terza colonna è vuota. **Trascina con il destro** dalla sua casella in cima fino alla terza riga per coprire d’erba tutte e tre in un colpo solo."},"step4":{"text":"L’albero in basso a destra sta nell’angolo con un altro albero accanto, quindi la sua unica vicina libera è quella sopra. **Fai clic sinistro** su quella casella per piantare una tenda."},"step5":{"text":"Quella tenda riempie la terza riga, quindi nemmeno l’albero sul bordo sinistro può avere la sua tenda sotto. **Fai clic sinistro** sulla casella in alto a sinistra."},"step6":{"text":"Un albero è ancora senza tenda, e solo la casella alla sua sinistra è libera. **Fai clic sinistro** sulla casella per completare il campeggio."},"step7":{"text":"Risolto! Un altro clic su una tenda o su un segno d’erba lo cancella, i tasti freccia con Enter e Space fanno lo stesso lavoro, e **Annulla** torna indietro.","textTouch":"Risolto! Toccare di nuovo una tenda o un segno d’erba lo cancella, e **Annulla** torna indietro."}},"towers":{"step1":{"text":"Ogni riga e ogni colonna contiene una torre di ciascuna altezza, da 1 a 4. Un numero lungo il bordo conta le torri che si **vedono** da lì: una torre più alta nasconde tutte quelle più basse dietro di sé."},"step2":{"text":"L’**1** a destra della riga in alto significa che da quel lato si vede una sola torre, quindi la più vicina deve essere la più alta. Fai clic su quella casella e premi **4**.","textTouch":"L’**1** a destra della riga in alto significa che da quel lato si vede una sola torre, quindi la più vicina deve essere la più alta. Tocca quella casella, poi tocca **4** sul tastierino."},"step3":{"text":"Invece di rispondere puoi annotare le possibilità. **Fai clic destro** sulla casella vuota all’estremità sinistra della riga in alto e premi **1**.","textTouch":"Invece di rispondere puoi annotare le possibilità. Tocca la casella vuota all’estremità sinistra della riga in alto, attiva **✎** sul tastierino e tocca **1**."},"step4":{"text":"Il **4** a sinistra della riga dice che si vedono tutte e quattro le torri, quindi da quel capo salgono 1-2-3-4. **Fai clic sinistro** sulla casella e premi **1** per rispondere.","textTouch":"Il **4** a sinistra della riga dice che si vedono tutte e quattro le torri, quindi da quel capo salgono 1-2-3-4. La casella è ancora selezionata, quindi tocca **✎** per smettere di annotare e poi **1** per rispondere."},"step5":{"text":"Resta una casella, e l’**1** accanto alla sua riga mette di nuovo la torre più alta più vicina. Fai clic sulla casella e premi **4**.","textTouch":"Resta una casella, e l’**1** accanto alla sua riga mette di nuovo la torre più alta più vicina. Toccala, poi tocca **4** sul tastierino."},"step6":{"text":"Risolto! **Backspace** svuota una casella che hai sbagliato, e **Risolvi**, nel menu di pausa, completa un rompicapo che ti ha battuto.","textTouch":"Risolto! **⌫** sul tastierino svuota una casella che hai sbagliato. Nel menu di pausa, **Annotazioni** annota ogni possibilità e **Risolvi** completa un rompicapo che ti ha battuto."}},"tracks":{"step1":{"text":"Un’unica ferrovia corre dall’ingresso a sinistra all’uscita in basso, e ogni casella che attraversa ha esattamente due rotaie. I numeri dicono per quante caselle di quella colonna o riga passa la linea."},"step2":{"text":"Il pezzo d’ingresso sale già nella **casella in alto a sinistra**, e il lato superiore e quello sinistro di quella casella sono il bordo della griglia. Quindi la sua seconda rotaia deve andare a destra: **fai clic** appena a destra del suo centro."},"step3":{"text":"La **colonna di sinistra** è contata **2** e l’ingresso usa già entrambe le caselle, quindi nella sua metà inferiore non passa nulla. **Fai clic destro** al centro di una casella per sbarrarla: un trascinamento con il destro sbarra un’intera serie."},"step4":{"text":"La **colonna di destra** è contata **4**, quindi la linea visita ogni sua casella, e le caselle in cima e in fondo possono solo girare verso l’interno. **Trascina** dalla casella in alto a destra fino in fondo, a quella in basso a destra."},"step5":{"text":"Alla **riga in basso** servono tre caselle e la colonna di sinistra è finita, quindi l’angolo in basso a destra sta sulla linea. Non può uscire dalla griglia, quindi gira a sinistra e sale: **fai clic** sul suo lato sinistro."},"step6":{"text":"I conteggi diventano grigi quando la loro linea è giusta e rossi quando non può tornare. Continua a partire dai capi sciolti, oppure lascia che **Risolvi** finisca la ferrovia."}},"twiddle":{"step1":{"text":"Rimetti i numeri in ordine, **da 1 a 9**. Una mossa ruota di un quarto di giro un blocco quadrato di quattro tessere; tre giri chiudono questo tabellone."},"step2":{"text":"Fai clic in mezzo alle **quattro tessere in alto a sinistra**. Un clic sinistro gira quel blocco in senso antiorario, il che mette 1, 2, 3 lungo la riga in alto."},"step3":{"text":"**Fai clic destro** in mezzo alle **quattro tessere in basso a destra** per girare invece quel blocco in senso orario."},"step4":{"text":"Chiudi con un clic sinistro in mezzo alle **quattro tessere in basso a sinistra**."},"step5":{"text":"Fatto! Il menu **Tipo** ha blocchi più grandi e una modalità *orientabile*, in cui anche ogni tessera deve finire dritta."}},"undead":{"step1":{"text":"Riempi le cinque caselle vuote con fantasmi, vampiri e zombie: il conto in cima dice quanti ce ne sono di ciascuno. Ogni numero conta i mostri che si vedono guardando lungo quella linea, e gli specchi piegano lo sguardo."},"step2":{"text":"Guardando da **sinistra della riga in alto** non vedi nulla; lo specchio piega quella stessa linea verso l’alto, dove l’**1** vede un mostro. Solo un fantasma è invisibile di fronte e compare in uno specchio. **Fai clic su quella casella**."},"step3":{"text":"Il **4** nell’angolo in basso a sinistra zigzaga tra gli specchi oltre tre caselle e le vede tutte e tre. I vampiri spariscono in uno specchio, quindi l’unico vampiro deve essere la casella di mezzo della colonna di sinistra. **Fai clic sulla casella**."},"step4":{"text":"Un clic scorre soltanto tra i mostri. **Premi invece V**: G, V e Z fanno cadere un fantasma, un vampiro o uno zombie dritto nella casella evidenziata.","textTouch":"Un tocco scorre tra i mostri uno alla volta. Tocca invece **Vampiro** sul tastierino: mette quel mostro direttamente nella casella evidenziata."},"step5":{"text":"La **riga di mezzo** è una vista dritta, senza specchi, ed entrambi gli **1** vedono un solo mostro: il vampiro. Quindi le sue due vicine devono essere fantasmi. **Fai clic sulla casella centrale**."},"step6":{"text":"Un **clic destro** annota un piccolo appunto invece di piazzare qualcosa. Provalo sulla casella di destra di quella riga: ogni clic destro aggiunge il mostro successivo."},"step7":{"text":"Restano due caselle: quella con l’appunto è il terzo fantasma e l’ultima è lo zombie. I numeri sbiadiscono quando la loro linea è a posto; **Risolvi** finisce il labirinto se preferisci guardare."}},"unequal":{"step1":{"text":"A ogni riga e a ogni colonna servono 1, 2, 3 e 4 una volta ciascuno — e ogni segno tra due caselle deve puntare alla **più piccola** delle due."},"step2":{"text":"Il segno qui punta a destra, quindi la casella di **sinistra** è la più grande. A questa riga servono ancora un 2 e un 3: fai clic sulla casella di sinistra e premi **3**.","textTouch":"Il segno qui punta a destra, quindi la casella di **sinistra** è la più grande. A questa riga servono ancora un 2 e un 3: tocca la casella di sinistra, poi tocca **3** sul tastierino."},"step3":{"text":"La casella verso cui punta il segno prende il numero più piccolo. Fai clic sulla casella e premi **2**.","textTouch":"La casella verso cui punta il segno prende il numero più piccolo. Toccala, poi tocca **2** sul tastierino."},"step4":{"text":"La sua colonna ha ormai un 3, quindi questa casella può essere solo un 2. **Fai clic destro** sulla casella e premi **2** per annotarlo a matita.","textTouch":"La sua colonna ha ormai un 3, quindi questa casella può essere solo un 2. Toccala, attiva **✎** sul tastierino e tocca **2** per annotarlo a matita."},"step5":{"text":"Una nota non è una risposta. **Fai clic sinistro** sulla stessa casella e premi **2** per confermarla.","textTouch":"Una nota non è una risposta. La casella è ancora selezionata, quindi tocca **✎** per smettere di annotare e poi **2** per confermarla."},"step6":{"text":"Resta una casella. Fai clic sulla casella e premi **3** per completare il quadrato.","textTouch":"Resta una casella. Toccala, poi tocca **3** sul tastierino per completare il quadrato."},"step7":{"text":"Risolto! **Annulla** ritira una cifra, e **Risolvi** riempie la risposta se un rompicapo ti batte.","textTouch":"Risolto! **Annulla** ritira una cifra, **Annotazioni** e **Aiutino** annotano le possibilità, e **Risolvi** riempie la risposta se un rompicapo ti batte."}},"unruly":{"step1":{"text":"Colora ogni casella di nero o di bianco. A ogni riga e a ogni colonna servono **tre caselle di ciascun colore**, e nessun colore può comparire **tre volte di fila**. Tre caselle sono ancora indecise."},"step2":{"text":"Questa riga ha già le sue tre caselle bianche, quindi quella indecisa deve essere nera. **Fai clic sinistro** sulla casella: il clic sinistro dipinge di nero."},"step3":{"text":"Questa riga ha già tre caselle nere, quindi la sua casella indecisa è bianca. **Fai clic destro** sulla casella: il clic destro va nel verso opposto e dipinge prima di bianco."},"step4":{"text":"L’ultima casella indecisa ha due caselle nere alla sua sinistra, e una terza di fila non è ammessa. **Fai clic destro** sulla casella per dipingerla di bianco e completare la griglia."},"step5":{"text":"Risolto! Un altro clic su una casella colorata la porta all’altro colore e poi di nuovo a indecisa, e **Annulla** ripercorre a ritroso le tue mosse."}},"untangle":{"step1":{"text":"Sei punti stanno su un anello, uniti da otto linee. Due coppie di linee si incrociano: sono quelle rosse. Trascina i punti finché non resta più nulla di rosso."},"step2":{"text":"Prima fai clic su **Aggancia**, il pulsante a griglia accanto ad Annulla (oppure premi **G**). Così si accende la griglia magnetica, e un punto che lasci cadere atterra su uno dei puntini tenui al centro di una casella."},"step3":{"text":"**Trascina** il punto in cima all’anello dentro la casella vuota nell’**angolo in alto a sinistra**.","textTouch":"**Trascina** il punto in cima all’anello dentro lo spazio vuoto nell’**angolo in alto a sinistra** del tabellone. Non deve atterrare in un posto preciso: basta che l’incrocio sparisca."},"step4":{"text":"Resta un incrocio, laggiù a destra. **Trascina** il punto più in basso nell’**angolo in basso a destra** vuoto.","textTouch":"Resta un incrocio, laggiù a destra. **Trascina** il punto più in basso nell’**angolo in basso a destra** vuoto: l’ultima linea rossa sparisce appena è libera."},"step5":{"text":"Districato. **Risolvi** ti sbroglia qualsiasi groviglio, e i tasti freccia muovono un cursore di punto in punto, con Enter per raccoglierne uno e lasciarlo.","textTouch":"Districato. Le linee rosse sono quelle che ancora si incrociano, quindi continua a trascinare finché non ne resta nessuna — oppure lascia che **Risolvi** sbrogli il groviglio per te."}}}'),Fe={$locale:`it`,$name:q,$dir:`ltr`,ui:J,touchPhrases:Y,messages:X,status:Z,games:Q,tutorials:$};export{g as A,ee as B,A as C,S as D,w as E,o as F,i as I,oe as L,f as M,u as N,b as O,c as P,ie as R,M as S,E as T,t as V,H as _,Ee as a,I as b,be as c,me as d,fe as f,W as g,se as h,Oe as i,m as j,v as k,ve as l,ce as m,Me as n,we as o,ue as p,Ae as r,Se as s,Pe as t,ge as u,B as v,O as w,P as x,R as y,ne as z};
//# sourceMappingURL=i18n-it-DxeHuSGs.js.map