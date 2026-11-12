import{t as e}from"./index-DIYwYEVR.js";var t=e({default:()=>n}),n="## Comenzi comune\n\n- **Nou** pregătește un puzzle nou, iar **Reia** te duce înapoi la începutul acestuia;\n  **Anulează** și **Refă** parcurg mutările tale, iar și o reluare poate fi anulată.\n- **Rezolvă** arată soluția, acolo unde puzzle-ul are una. Contează ca un pas pe care îl\n  poți anula.\n- Un clic dreapta este a doua acțiune în majoritatea puzzle-urilor — marcare, steguleț sau\n  rotire în sens invers. Un clic de mijloc, acolo unde un puzzle îl folosește, este a treia.\n- **Tip** alege între mărimi și dificultăți predefinite; **Personalizat…** îți permite să le\n  stabilești singur.\n- **Distribuie** arată coduri pe care le poți trimite ca altcineva să joace exact acest\n  puzzle.\n\n### Tastatură (Keyboard)\n\n- **Joc nou**: `N` · **Anulează**: `U` sau `Ctrl+Z` · **Refă**: `R` sau `Ctrl+Y`\n- **Rezolvă**: `Ctrl+S` (unde e disponibil). **Acest ajutor**: `?`, iar `Esc` îl închide. **Pauză**: `Esc`.\n- În majoritatea puzzle-urilor, tastele săgeți mută un cursor pe tablă, `Enter` face ce\n  face un clic stânga pe el, iar `Space` ce face un clic dreapta.\n- În meniuri, săgețile trec de la o carte sau un buton la următorul, `Enter` alege, iar\n  `Esc` te duce înapoi.\n- Merge și cu un controler: crucea direcțională mută, `A` alege sau dă clic, `X` e clicul\n  dreapta, `B` te duce înapoi, `Start` pune pauză, `LB` și `RB` anulează și refac, iar `Y`\n  dă un indiciu.\n  În puzzle-urile în care scrii cifre, `RT` te duce la tastele de pe ecran și înapoi.\n",ee=e({default:()=>te}),te=`## Pe un ecran tactil

- **Apasă** pentru acțiunea principală și **ține apăsat** pentru a doua. Acolo unde un
  puzzle are și o a treia, apasă cu **două degete**.
- Primul buton rotund din bara de instrumente (un punct într-un pătrat) le inversează pe cele
  două, ca acțiunea pe care o folosești cel mai des să fie mereu la o singură apăsare
  distanță; cât timp sunt inversate, pe el se aprinde un steguleț. Apăsarea lungă face
  atunci cealaltă acțiune.
- **Depărtează două degete** pe tablă ca să mărești căsuțele unei grile mari, apoi
  **trage cu două degete** ca să te deplasezi pe ea. Apropie degetele ca să vezi din nou
  tot puzzle-ul. Meniul **Pauză** are aceleași două mărimi și sub formă de butoane.
- **Pauză** conține restul comenzilor: tipul de puzzle, puzzle nou, reluare, rezolvare,
  distribuire și Setări pentru sunet și limbă. Cât timp meniul e deschis, ceasul stă pe loc.
`,ne=e({default:()=>re}),re=`# Cutia neagră

Câteva bile sunt ascunse într-o cutie umbrită. În jurul cutiei se află un cadru de porți
pentru laser. Trage cu laserul în cutie din orice poartă și urmărește ce iese: deduce din
rezultate unde trebuie să fie bilele, marchează-le, apoi cere verificarea răspunsului.

O rază merge în linie dreaptă, dacă nu îi iese o bilă în cale:

- O bilă aflată drept în față **absoarbe** raza. Poarta arată **H** (lovitură).
- O bilă aflată în diagonală în față **deviază** raza cu 90°, departe de bilă. Bilele de pe
  ambele diagonale o întorc direct înapoi. Devierile se pot înlănțui, așa că o rază poate
  rătăci înainte să iasă.
- O rază care iese înapoi prin poarta prin care a intrat este **reflectată** și e marcată
  cu **R**. La fel și o rază care ar fi deviată înainte să intre în cutie, pentru că o bilă
  stă în diagonală chiar lângă intrarea ei.
- Altfel, raza iese în altă parte, iar cele două porți primesc același **număr** (și aceeași
  culoare), ca să vezi pe unde a intrat și pe unde a ieșit fiecare rază.

Când ai marcat numărul corect de bile, în colțul din stânga sus apare un buton verde.
**Dă clic** pe el ca să verifici. Așezarea ta e considerată corectă dacă niciun laser n-ar
putea-o deosebi de cea a calculatorului — cu mai multe bile pot exista mai multe așezări
care se comportă la fel, și oricare dintre ele câștigă.

O așezare greșită încheie jocul și arată răspunsul, așa că verifică doar când ești sigur:
bilele găsite sunt negre, marcajele greșite sunt tăiate cu roșu, bilele ratate sunt roșii,
orice laser tras pe care așezarea ta îl explică greșit e încercuit, iar laserele netrase
care ar fi deosebit cele două așezări sunt trase acum și scrise cu roșu. **Anulează** te
duce înapoi ca să mai încerci. **Rezolvă** renunță și pune bilele adevărate.

## Comenzi

Bara de stare numără bilele marcate și laserele trase, iar după o verificare spune câte
dintre bilele tale au fost greșite și câte ai ratat.

### Mouse și atingere

- **Dă clic pe o poartă** ca să tragi un laser din ea. Dă clic pe o poartă deja folosită ca
  să aprinzi ambele capete ale razei; dă clic din nou pe ea, sau oriunde altundeva, ca să
  stingi lumina.
- **Dă clic în interiorul cutiei** ca să marchezi acolo o bilă; încă un clic șterge marcajul.
- **Dă clic dreapta pe o căsuță** ca să o **blochezi**, ca să n-o poți schimba din greșeală;
  încă un clic dreapta o deblochează. Un clic dreapta pe o poartă blochează sau deblochează
  tot rândul ori toată coloana de lângă ea.
- **Dă clic pe butonul din colț** ca să îți fie verificate marcajele.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor pe cutie și pe porțile ei.
- **Enter** face cât un clic stânga: trage, marchează sau verifică atunci când cursorul e pe
  buton.
- **Space** face cât un clic dreapta: blochează sau deblochează.

## Parametri

- **Lățime** și **Înălțime** a cutiei. Fiecare rând și fiecare coloană are câte o poartă
  pentru laser la ambele capete.
- **Nr. de bile**: câte bile sunt ascunse. Dă un singur număr sau un interval, de exemplu
  \`3-6\`, ca să aleagă calculatorul; atunci trebuie să deduci și numărul lor, iar butonul de
  verificare apare pentru orice număr de marcaje din interval.
`,ie=e({default:()=>ae}),ae=`# Poduri

Pe apă sunt risipite insule, fiecare cu un număr. Unește-le cu poduri astfel încât:

- fiecare pod să meargă drept orizontal sau drept vertical între două insule;
- numărul de pe o insulă să fie exact numărul de poduri care o ating;
- două insule să poată fi unite prin poduri paralele, dar prin cel mult două (limita se
  poate schimba în setările personalizate);
- niciun pod să nu încrucișeze altul;
- de pe orice insulă să poți ajunge pe oricare alta mergând pe poduri.

Greșelile apar cu roșu: o insulă cu prea multe poduri, o insulă care nu mai poate primi
destule (vecinii rămași sunt plini sau singurele drumuri sunt blocate de alte poduri ori de
propriile tale marcaje „fără pod”) și un grup de insule deja complet, dar izolat de restul.
Dacă buclele sunt interzise, podurile care formează o buclă sunt și ele roșii.

## Comenzi

**Rezolvă** completează soluția și elimină podurile care nu își au locul.

### Mouse și atingere

- **Trage** de la o insulă spre un vecin ca să pui un pod între ele. E destul să te miști
  cât să fie clară direcția; podul se prinde de cea mai apropiată insulă în acea parte.
  Trage din nou pentru un al doilea pod paralel; încă o tragere, când limita e atinsă, le
  elimină pe toate.
- **Trage cu butonul drept** la fel ca să notezi un marcaj „aici nu e pod” sau ca să ștergi
  unul.
- **Dă clic** pe o insulă ca să o marchezi drept terminată. Devine gri, iar podurile ei se
  blochează ca să nu le poți schimba din greșeală; încă un clic o deblochează.
- **Șterge** (butonul cu radieră de lângă Anulează) face ca tragerea să elimine: trage de la
  o insulă spre un vecin ca să scoți toate podurile dintre ele sau marcajul „aici nu e pod”
  de acolo. Apasă-l din nou ca să revii la pus poduri.
- **Ghidaje** arată linii palide oriunde ar putea trece un pod și le ascunde din nou.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor de la o insulă la alta.
- **Enter** urmat de o săgeată pune un pod în acea direcție; **Space** urmat de o săgeată
  pune un marcaj. Apăsând **Enter** de două ori marchezi insula drept terminată.
- **E** este butonul **Șterge**, iar **G** butonul **Ghidaje**.

## Parametri

- **Lățime** și **Înălțime** a grilei, cel puțin 3 fiecare.
- **Dificultate**: puzzle-urile _Ușor_ îți cer să te uiți doar la câte o insulă — acolo unde
  podurile rămase umplu exact locul liber sau unde numărul e prea mare ca să sari peste
  vreun vecin. Puzzle-urile _Mediu_ te pun să te gândești și la legături individuale: ce pod
  trebuie să existe pentru că insula nu poate fi completată fără el și (cu buclele
  interzise) ce legături ar închide o buclă. Puzzle-urile _Greu_ îți cer să privești cu un
  pas înainte: podul acesta ar completa un grup de insule izolat de restul sau ar lăsa o
  insulă fără ieșire? Fiecare puzzle are exact o soluție.
- **Permite bucle**: activat implicit. Dezactivat, rețeaua finală de poduri trebuie să fie un
  arbore — niciun drum pe poduri nu se poate întoarce de unde a pornit — iar puzzle-ul e
  construit astfel încât să poată fi rezolvat ținând cont de asta.
- **Max. poduri pe direcție**: limita de poduri paralele, de obicei 2. Mai puține înseamnă mai
  ușor.
- **% de căsuțe cu insule**: cam cât din grilă devine insule. Unele așezări nu încap în atâtea,
  așa că e o limită superioară.
- **Factor de extindere**: când harta crește, cât de probabil e ca o insulă nouă să fie pusă
  cât mai departe, nu undeva mai aproape. Valorile mari dau puzzle-uri mai rarefiate și mai
  ușoare; cele mici dau puzzle-uri aglomerate.
`,oe=e({default:()=>r}),r=`# Cubul

Un corp stă pe o grilă, iar câteva căsuțe ale grilei sunt vopsite în albastru — exact
atâtea câte fețe are corpul. Când rostogolești corpul, îl basculezi peste o muchie a feței
pe care stă, așa că fața următoare coboară pe căsuța vecină. De fiecare dată când aterizează,
fața de dedesubt și căsuța pe care a aterizat își schimbă culorile: dacă pui o față simplă pe
o căsuță albastră, albastrul trece pe corp; dacă pui o față albastră pe o căsuță simplă,
albastrul rămâne acolo. Puzzle-ul e gata când toate fețele sunt albastre în același timp.
Bara de stare numără rostogolirile, așa că încearcă să termini din cât mai puține.

Versiunea clasică rostogolește un cub pe o grilă pătrată. Pe o grilă triunghiulară poți
rostogoli în schimb un tetraedru, un octaedru sau un icosaedru. Ține minte că fiecare față a
unui tetraedru rostogolit poate ajunge doar la un sfert din căsuțe, iar fețele unui octaedru
alternează între triunghiurile cu vârful în sus și cele cu vârful în jos — căsuțele albastre
sunt puse mereu astfel încât puzzle-ul să poată fi terminat.

## Comenzi

Acest puzzle nu are butonul **Rezolvă**. Odată ce toate fețele sunt albastre, poți continua
să rostogolești corpul fără să strici nimic.

### Mouse și atingere

- **Dă clic** oriunde ca să rostogolești corpul cu o căsuță în direcția indicatorului. Pe o
  grilă pătrată asta înseamnă sus, jos, stânga sau dreapta; pe o grilă triunghiulară,
  triunghiul curent are trei vecini dintre care să alegi. Un clic ajunge la fiecare vecin al
  corpului, așa că doar cu asta poți juca pe oricare dintre grile.

### Tastatură (Keyboard)

- **Tastele săgeți** rostogolesc corpul în cele patru direcții principale. Pe o grilă
  triunghiulară un triunghi are vecin fie deasupra, fie dedesubt, așa că cealaltă tastă
  verticală nu face nimic.
- **Home**, **Page Up**, **End** și **Page Down** (sau tastele de colț ale tastaturii
  numerice, 7, 9, 1 și 3) rostogolesc în diagonală pe grilele triunghiulare, alegând muchia
  cea mai apropiată în acea direcție.

## Parametri

- **Tipul corpului**: tetraedru, cub, octaedru sau icosaedru. Cubul folosește o grilă
  pătrată; celelalte folosesc o grilă de triunghiuri.
- **Lățime / sus** și **Înălțime / jos**: pentru cub, mărimea grilei pătrate. Pentru grilele
  triunghiulare, acestea sunt lungimile laturilor de sus și de jos ale unei arene hexagonale
  (dacă pui una dintre ele pe zero, obții un simplu triunghi). Grila trebuie să lase loc
  pentru fiecare căsuță albastră plus o căsuță de pornire goală.
`,i=e({default:()=>a}),a=`# Dominosa

Un set complet de piese de domino — câte una pentru fiecare pereche de numere de la 0 până
la maxim, dublele incluse — a fost așezat astfel încât să umple un dreptunghi. Apoi numerele
au fost copiate, iar piesele luate. Treaba ta e să descoperi unde stăteau: împarte grila în
perechi de căsuțe alăturate astfel încât fiecare piesă din set să fie folosită exact o dată.

O piesă pusă acolo unde perechea ei de numere mai apare în altă parte e afișată cu roșu, la
fel ca o căsuță liberă pe care nu mai poate ajunge nicio piesă.

## Comenzi

Puzzle-ul e gata când fiecare căsuță e acoperită și nicio piesă nu e roșie. **Rezolvă** pune
toate piesele soluției și șterge ce ai așezat tu.

### Mouse și atingere

- **Dă clic** pe granița dintre două numere alăturate (sau în jumătatea de căsuță cea mai
  apropiată de acea graniță) ca să pui o piesă peste ele. Dă clic din nou pe aceeași graniță
  ca să o iei. O piesă pusă peste o parte din alta o înlocuiește.
- **Dă clic dreapta** pe o graniță ca să notezi o linie peste ea, semn că aceste două numere
  **nu** formează o piesă. Încă un clic dreapta șterge linia. Liniile nu se pot trage lângă o
  piesă, iar punerea unei piese șterge liniile care o ating.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor pe grilă, oprindu-se în centrele căsuțelor și pe granițele
  dintre ele. Pe o graniță, cursorul conturează piesa pe care ar pune-o.
- **Enter** pune sau ia piesa respectivă, iar **Space** trage sau șterge o linie acolo.

## Parametri

- **Numărul maxim de pe piese**: piesele merg de la 0-0 până la N-N, iar grila are (N+2)
  căsuțe lățime și (N+1) înălțime, deci un maxim de 6 dă o grilă de 8×7.
- **Dificultate**: cât raționament cere puzzle-ul. Puzzle-urile **Foarte ușor** au mereu
  doar o piesă cu un singur loc posibil sau o căsuță pe care o poate acoperi o singură
  piesă. **Ușor** adaugă încă două argumente: orice fel de a acoperi această căsuță
  folosește aceeași piesă, deci piesa nu poate sta în altă parte; și orice loc în care ar
  putea sta această piesă exclude acel loc. **Greu** adaugă numărarea (o piesă care ar izola
  un număr impar de căsuțe e imposibilă; un set de căsuțe cu același număr își poate
  revendica piesele comune), iar puzzle-urile **Extrem** îți cer să urmărești consecințele
  unei așezări până intră în conflict. Toate acestea au exact o soluție. Puzzle-urile
  **Ambiguu** nu sunt verificate deloc: pot avea mai multe soluții și pot cere ghicit —
  orice acoperire găsită câștigă.
`,o=e({default:()=>s}),s=`# Cincisprezece

Clasicul puzzle cu piese glisante. Grila e plină de piese numerotate și un singur loc gol.
Glisează piesele în gol până când numerele se citesc în ordine de la stânga la dreapta și de
sus în jos, cu golul în colțul din dreapta jos.

## Comenzi

**Rezolvă** sare direct la aranjamentul final. Nu îți arată cum să ajungi acolo, dar e o
resetare utilă când exersezi combinații de mutări.

### Mouse și atingere

- **Dă clic** pe orice piesă din același rând sau din aceeași coloană cu golul ca să o
  glisezi (împreună cu tot ce e între ea și gol) la locul ei.

### Tastatură (Keyboard)

- **Tastele săgeți** glisează o piesă în gol în direcția săgeții: **săgeata sus** mută în sus, în gol,
  piesa de sub el.

## Parametri

- **Lățime** și **Înălțime** a grilei (implicit, clasicul 4×4).
`,c=e({default:()=>l}),l=`# Umplere

Unele căsuțe ale grilei au deja o cifră; restul sunt goale. Scrie o cifră în fiecare căsuță
goală astfel încât fiecare grup legat de cifre egale să acopere exact atâtea căsuțe câte
spune cifra: fiecare 3 face parte dintr-un grup de trei de 3, fiecare 1 stă singur și așa mai
departe. Căsuțele sunt legate doar prin laturi, nu prin colțuri. De aici rezultă că nicio
căsuță nu conține 0, doi de 1 nu stau niciodată unul lângă altul și niciun grup nu are mai
mult de nouă căsuțe. O cifră dată nu trebuie să fie începutul grupului ei: mai mulți de 4
dați pot ajunge în același grup, iar un grup poate să nu conțină nicio cifră dată.

Între căsuțele cu cifre diferite apar linii groase, la fel și în jurul oricărui grup care are
deja mărimea potrivită (sau e prea mare). O cifră devine roșie când grupul ei a crescut peste
valoarea cifrei sau când a fost închis fără loc să ajungă la mărimea lui. Acesta este
puzzle-ul publicat de Nikoli sub numele Fillomino.

## Comenzi

Cifrele date sunt scrise cu cerneală și nu pot fi schimbate; cifrele tale sunt albastre.
**Rezolvă** completează soluția.

### Mouse și atingere

- **Dă clic** pe o căsuță goală ca să o selectezi, apoi folosește tastele de pe ecran ca să
  scrii o cifră. **⌫** de pe taste golește din nou selecția.
- **Trage** peste mai multe căsuțe ca să le selectezi pe toate, astfel încât o singură cifră
  să umple deodată fiecare căsuță selectată.
- **Un clic dreapta** adaugă o căsuță la selecție fără să o iei de la capăt;
  al doilea clic dreapta pe o căsuță selectată o scoate din nou din selecție.
- **Umple** (butonul de lângă Anulează) întinde o cifră: trage dintr-o căsuță care are deja
  una peste căsuțele din jur și toate primesc acea cifră când dai drumul, fără să mai ai
  nevoie de tastele de pe ecran. Clicurile și tragerile care încep pe o căsuță goală
  selectează în continuare. Apasă-l din nou ca să revii la selectare.

### Tastatură (Keyboard)

- Cu una sau mai multe căsuțe selectate, **tastează o cifră** ca să o scrii în toate. Cifra
  \`0\`, sau **Backspace**, le golește din nou.
- **Tastele săgeți** mută un cursor, iar cifra tastată umple căsuța de sub el.
- **Space** sau **Enter** adaugă sau scoate din selecție căsuța de sub cursor, așa că mai
  multe căsuțe pot fi umplute cu o singură apăsare de tastă.
- **F** este butonul **Umple**.

## Parametri

- **Lățime** și **Înălțime**: mărimea grilei. Grupurile nu sunt niciodată mai mari decât
  latura mai lungă (sau 9), așa că grilele mici folosesc doar cifre mici.
`,u=e({default:()=>d}),d=`# Întoarce

O grilă de căsuțe, unele aprinse și altele stinse. Scopul tău e să le aprinzi pe toate în
același timp. Apăsarea unei căsuțe o comută între aprins și stins, dar comută și unii dintre
vecinii ei: mica diagramă desenată pe fiecare căsuță arată exact care. Cu formele implicite
**Cruci**, fiecare apăsare comută căsuța și cei patru vecini ortogonali; cu formele
**Aleatoriu**, fiecare căsuță are propriul model neregulat, așa că puzzle-ul se joacă altfel
de fiecare dată.

Cum două apăsări pe aceeași căsuță se anulează, iar ordinea apăsărilor nu contează niciodată,
o soluție este doar un set de căsuțe de apăsat câte o dată.

## Comenzi

Bara de stare numără apăsările. **Rezolvă** aprinde toată tabla și conturează cu roșu
căsuțele pe care le-a apăsat ca să ajungă acolo. Dacă apeși în continuare căsuțe, contururile
roșii arată ce căsuțe mai trebuie apăsate ca să revii la starea finală.

### Mouse și atingere

- **Dă clic** pe o căsuță ca să o apeși.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor pe grilă; **Enter** sau **Space** apasă căsuța de sub
  cursor.

## Parametri

- **Lățime** și **Înălțime** a grilei, de la 2 la 10 căsuțe pe latură.
- **Tipul formei**: _Cruci_ comută fiecare căsuță împreună cu vecinii ei ortogonali;
  _Aleatoriu_ dă fiecărei căsuțe o formă crescută la întâmplare în blocul de 3×3 din jurul ei.
`,f=e({default:()=>p}),p=`# Inundație

Grila e un mozaic de căsuțe colorate la întâmplare. Tu controlezi căsuța din colțul din
stânga sus, împreună cu fiecare căsuță legată de ea printr-un drum de aceeași culoare. Fiecare
mutare revopsește toată această zonă legată într-o culoare aleasă de tine, așa că toate
căsuțele vecine de acea culoare intră și ele în zona ta. Continuă până când toată grila are o
singură culoare.

Capcana e limita de mutări. Înainte să începi, jocul rezolvă singur grila și îți dă numărul
lui de mutări plus câteva mutări de rezervă; dacă epuizezi limita înainte ca grila să fie
uniformă, runda e pierdută. Poți continua să umpli și după aceea ca să vezi grila terminată,
dar nu se mai socotește victorie.

## Comenzi

Bara de stare arată câte mutări ai folosit din limită. **Rezolvă** lasă rezolvitorul să
termine grila în locul tău; se socotește rezolvare automată, nu victoria ta.

### Mouse și atingere

- **Dă clic** pe orice căsuță a cărei culoare diferă de zona ta ca să revopsești zona în acea
  culoare. Un clic pe o căsuță care se potrivește deja nu face nimic și nu costă nicio mutare.
- **Indiciu** joacă pentru tine următoarea culoare a rezolvitorului, ca o mutare obișnuită pe
  care o poți anula. Cu câteva indicii, victoria și creditul ei rămân tot ale tale.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor pe grilă; **Enter** sau **Space** revopsește zona în
  culoarea de sub cursor.

## Parametri

- **Lățime** și **Înălțime** a grilei, până la 32 de căsuțe pe latură.
- **Culori**: câte culori folosește grila, de la 3 la 10. Mai puține culori înseamnă mai
  puține alegeri și un joc mai ușor.
- **Mutări suplimentare permise**: numărul de mutări de rezervă adăugate la lungimea soluției
  rezolvitorului ca să formeze limita. Cu 0 trebuie să fii cel puțin la fel de eficient ca
  rezolvitorul; e bun, dar nu perfect, așa că îl poți întrece.
`,m=e({default:()=>h}),h=`# Galaxii

Pe grilă sunt risipite puncte, care pot sta în mijlocul unei căsuțe, pe linia dintre două
căsuțe sau într-un colț unde se întâlnesc patru. Trasează pereți pe liniile grilei ca să
împarți grila în regiuni astfel încât fiecare regiune să conțină exact un punct, iar acel
punct să fie centrul de simetrie al regiunii: rotește regiunea cu 180° în jurul punctului ei
și trebuie să cadă exact peste ea însăși. Fiecare căsuță trebuie să ajungă într-o regiune,
așa că nicio regiune nu poate rămâne fără punct.

Puzzle-urile sunt generate la întâmplare, cu soluție unică. Puzzle-ul este „Tentai Show” de
la Nikoli, cunoscut și ca Spiral Galaxies.

## Comenzi

O regiune închisă și corectă — un punct, în centrul ei de simetrie, fără pereți rătăciți în
interior — este umbrită. Un punct devine roșu când un perete trece prin el sau când este
singurul punct dintr-o regiune închisă care nu e simetrică față de el; o regiune închisă fără
niciun punct este hașurată. Puzzle-ul e gata când fiecare căsuță e umbrită. **Rezolvă**
desenează soluția completă.

### Mouse și atingere

- **Dă clic** pe o linie a grilei ca să trasezi acolo un perete sau dă clic pe un perete ca să
  îl elimini.
- **Trage dintr-un punct** într-o căsuță ca să lași acolo o săgeată mică îndreptată spre
  punct, ca să îți amintești că acea căsuță aparține galaxiei punctului.
- **Trage cu butonul drept** o săgeată existentă ca să o muți. Las-o înapoi pe punctul ei sau
  trage-o în afara grilei ca să scapi de ea; lăsată pe o căsuță care are deja o săgeată, îi ia
  locul.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor deopotrivă pe căsuțe, linii și colțuri.
- **Enter** pe o linie trasează sau elimină peretele ei; **Enter** pe un punct ridică o
  săgeată, care urmează cursorul până apeși din nou **Enter** ca să o lași.

## Parametri

- **Lățime** și **Înălțime** a grilei, cel puțin 3 fiecare. Tipurile predefinite merg de la
  7×7 la 15×15.
- **Dificultate** — puzzle-urile _Mediu_ pot fi rezolvate pas cu pas din ce impune regula
  simetriei; cele _Extrem_ te pot obliga să încerci o presupunere și să vezi unde duce.
`,g=e({default:()=>_}),_=`# Ghicește

Calculatorul a ascuns un rând de pioni colorați în spatele scutului din partea de sus a
tablei. Treaba ta e să îl reproduci exact, folosind doar semnele primite la fiecare
încercare: un pion **negru** pentru fiecare pion de culoarea bună pe locul bun și un pion
**gol** pentru fiecare alt pion a cărui culoare apare în altă parte în rândul ascuns. Semnele
îți spun _câți_ pioni au fost corecți, nu _care_. Găsește rândul înainte să rămâi fără
încercări și scutul se ridică; dacă rămâi fără încercări, se ridică oricum, ca să vezi ce ai
ratat.

Acesta este jocul vândut de Hasbro sub numele _Mastermind_: șase culori, patru pioni și zece
încercări. Fiecare setare poate fi schimbată.

## Comenzi

**Rezolvă** ridică scutul și arată răspunsul; asta încheie jocul la fel ca atunci când rămâi
fără încercări.

### Mouse și atingere

- **Dă clic** pe o culoare din tava din stânga ca să o selectezi (inelul arată care), apoi
  **dă clic pe o gaură** din rândul curent ca să pui un pion de acea culoare. Un clic pe un pion
  dintr-o încercare anterioară îi selectează și el culoarea.
- **Trage** un pion din tavă, dintr-o încercare anterioară sau din rândul curent într-o gaură.
  Dacă tragi un pion afară din rândul curent și îl lași oriunde altundeva, îl elimini.
- **Dă clic dreapta** pe o gaură ca să o golești.
- Când rândul e complet, mica zonă de marcare din dreapta lui se aprinde: **dă clic pe ea** ca
  să trimiți încercarea.
- **Dă clic de mijloc** pe o gaură ca să _păstrezi_ acel pion: un pion păstrat e dus mai
  departe în încercarea următoare după marcare, așa că nu mai trebuie să refaci pionii în care
  ai deja încredere. Repetă ca să eliberezi pionul.
- **Păstrează** (butonul de lângă Anulează) face același lucru cu un clic simplu: cât e
  activ, un clic pe o gaură din rândul curent păstrează sau eliberează pionul din ea în loc
  să pună o culoare. Dă clic pe tavă ca să schimbi culoarea ca de obicei; apasă din nou
  **Păstrează** ca să revii la pus pioni.
- **Litere** din meniul de pauză scrie o literă pe fiecare pion, în caz că unele culori ți se
  par asemănătoare, și le șterge din nou.

### Tastatură (Keyboard)

- **Tastele săgeți**: sus și jos aleg o culoare din tavă, stânga și dreapta mută un cursor de-a
  lungul rândului curent și, după ce rândul e complet, pe zona de marcare.
- **Enter** sau **Space** pune culoarea selectată în gaura de sub cursor sau trimite încercarea
  când cursorul e pe zona de marcare.
- **Backspace** sau \`D\` golește gaura de sub cursor.
- \`H\` păstrează sau eliberează pionul de sub cursor.
- \`K\` este butonul **Păstrează**, iar \`L\` butonul **Litere**.

## Parametri

- **Culori**: din câte culori diferite e ales rândul ascuns, de la 2 la 10. Mai multe culori fac
  rândul mai greu de ghicit.
- **Pioni pe încercare**: lungimea rândului ascuns.
- **Încercări**: câte încercări ai.
- **Permite goluri**: îți permite să lași găuri goale într-o încercare. O gaură goală nu se
  potrivește niciodată, așa că e mai ușor să testezi culorile. Rândul ascuns nu are niciodată
  goluri.
- **Permite repetări**: permite rândului ascuns (și încercărilor tale) să folosească o culoare
  de mai multe ori. Dacă o dezactivezi, numărul de rânduri posibile scade considerabil.
`,v=e({default:()=>y}),y=`# Inerție

Ești o bilă pe o grilă plină de obstacole și vrei toate pietrele prețioase de pe tablă.
Șmecheria e în nume: odată ce bila pornește, nu se oprește până nu o oprește ceva. Trece
drept prin pietre prețioase (pe care le adună din mers) la fel ca prin căsuțe goale și se
oprește doar când următoarea căsuță e un perete sau când ajunge pe o oprire. Mutările pe
diagonală se strecoară printre doi pereți care se ating doar într-un colț. Dacă ajunge pe
o mină, e fatal, chiar dacă aceeași mutare a adunat ultima piatră prețioasă.

Fiecare puzzle este generat astfel încât toate pietrele prețioase să poată fi adunate
pornind din căsuța de start, dar nimic nu te împiedică să te rostogolești într-un colț al
tablei de unde o anumită piatră nu mai poate fi atinsă. Moartea sau blocajul nu au altă
penalizare decât un contor de decese în bara de stare: anulează și încearcă altă cale.

## Comenzi

**Anulează** după ce ai lovit o mină ca să continui de dinaintea mutării fatale.
**Rezolvă** găsește, de unde te afli, un traseu care adună toate pietrele prețioase rămase
și rostogolește bila pe el în locul tău; Anulează retrage tot traseul dintr-o dată.

### Mouse și atingere

- **Dă clic pe** o căsuță și bila pornește în direcția acelei căsuțe față de ea, rotunjită
  la cea mai apropiată dintre cele opt direcții ale busolei — inclusiv diagonalele.
  Merge și un clic în marginea din afara grilei, util când bila stă lângă o margine.

### Tastatură (Keyboard)

- **Tastele săgeți** rostogolesc bila în sus, în jos, la stânga sau la dreapta.
- **Home**, **Page Up**, **End** și **Page Down** o rostogolesc pe diagonală (sus-stânga,
  sus-dreapta, jos-stânga, jos-dreapta). Tastatura numerică funcționează cum arată: 8 e
  în sus, 3 e jos-dreapta și așa mai departe; rândul de cifre face la fel.

## Parametri

- **Lățime** și **Înălțime** ale grilei. Cam o cincime din căsuțe sunt pereți, o cincime
  opriri, o cincime mine și o cincime pietre prețioase.
`,b=e({default:()=>x}),x=`# Keen

Umple grila cu cifre de la 1 până la mărimea ei astfel încât fiecare rând și fiecare
coloană să conțină fiecare cifră exact o dată. Grila este împărțită și în „cuști” cu
contur gros, fiecare cu o mică indicație în căsuța din stânga sus: un rezultat și un semn
aritmetic. Cifrele din cușcă trebuie să dea acel rezultat prin acea operație:

- \`7+\` înseamnă că cifrele din cușcă au suma 7.
- \`12×\` înseamnă că produsul lor este 12.
- \`2−\` apare mereu într-o cușcă de două căsuțe și înseamnă că o cifră e cu 2 mai mare
  decât cealaltă (în orice ordine).
- \`3÷\` apare tot în două căsuțe și înseamnă că o cifră e de 3 ori cealaltă.

Spre deosebire de modul Killer din Solo, o cușcă _poate_ conține aceeași cifră de două
ori, cu condiția ca cele două să nu fie pe același rând sau pe aceeași coloană. Nu există
cifre date; ai doar indicațiile, iar fiecare puzzle are exact o soluție. Acesta este
puzzle-ul publicat sub numele KenKen.

## Comenzi

O cifră care apare de două ori pe rândul sau coloana ei se face roșie, la fel ca
indicația unei cuști complet completate care nu dă rezultatul. **Rezolvă** completează
soluția.

### Mouse și atingere

- **Dă clic pe** o căsuță ca s-o selectezi, apoi folosește tastele de pe ecran ca să scrii o
  cifră. Al doilea clic pe căsuța selectată o deselectează.
- **⌫** de pe taste golește din nou căsuța selectată, iar **✎** activează **notițele**:
  ce alegi apoi intră ca o mică notiță, iar aceeași cifră încă o dată o șterge. Notițele
  te ajută doar să gândești; când scrii o cifră, ele dispar.
- **Dă clic dreapta pe** o căsuță goală ca s-o selectezi direct pentru notițe.
- **Notițe** din meniul de pauză umple fiecare căsuță goală cu setul complet de
  notițe.
- **Evidențiază** (lupa de lângă Anulează) scoate în evidență fiecare căsuță care are
  aceeași cifră ca ultima căsuță pe care ai dat clic și arată acea cifră îngroșat printre
  notițe. Apasă-l din nou ca să-l oprești.

### Tastatură (Keyboard)

- **Tastează o cifră** ca să completezi căsuța selectată sau ca s-o notezi acolo, dacă
  aceasta a fost selectată pentru notițe.
- **Space** sau **Backspace** golește căsuța selectată (cifra sau toate notițele ei).
- **Tastele săgeți** mută un cursor, iar cifrele tastate intră în căsuța de sub el.
- **Enter** comută cursorul între scrierea normală și notițe.
- **M** este butonul **Notițe**, iar **L** butonul **Evidențiază**.

## Parametri

- **Mărimea grilei**: de la 3 la 9. Cifrele peste 9 ar fi greu de mânuit, așa că 9 e
  limita.
- **Dificultate**: cel mai greu tip de raționament de care are nevoie puzzle-ul. _Ușor_ îți
  cere doar să afli ce cifre pot apărea deloc într-o cușcă; _Mediu_ îți cere să urmărești în
  ce căsuță a unei cuști ar putea sta fiecare cifră; _Greu_ adaugă raționamente între cuști
  (cifrele pe care o cușcă trebuie să le pună pe un rând nu pot apărea în altă parte a
  rândului) și grupuri de căsuțe care își împart un grup de cifre; _Expert_ adaugă lanțuri
  de implicații; iar puzzle-urile _Extrem_ nu pot fi terminate fără încercări și reveniri.
  Puzzle-urile mai grele se generează mai greu, iar grilele 3×3 nu trec niciodată de Mediu.
- **Doar înmulțire**: fiecare indicație este un produs, ceea ce elimină perechile ușoare
  și face un puzzle destul de diferit.
`,S=e({default:()=>C}),C=`# Lumini

O grilă de căsuțe albe și negre. Pune becuri pe căsuțele albe astfel încât fiecare căsuță
albă să fie luminată. Un bec își luminează propria căsuță și strălucește de-a lungul
rândului și coloanei lui până când o căsuță neagră sau marginea îi stă în cale. La final
trebuie să fie adevărate trei lucruri:

- fiecare căsuță albă este luminată;
- niciun bec nu este luminat de alt bec, adică două becuri nu se văd pe același rând sau
  pe aceeași coloană;
- o căsuță neagră cu un număr are exact atâtea becuri în căsuțele imediat deasupra, sub,
  la stânga și la dreapta ei. Căsuțele negre fără număr pot avea oricâte becuri alături.

Căsuțele luminate sunt colorate în galben. Becurile care se luminează reciproc se fac
roșii, la fel ca un număr care nu mai poate fi respectat: are deja prea multe becuri
alături sau nu mai e loc pentru destule.

## Comenzi

Puzzle-ul e terminat când toată grila strălucește și nimic nu e roșu. **Indiciu** pune un
singur bec — sau scoate unul care nu face parte din soluție — și îți lasă restul;
puzzle-ul rămâne în joc, iar cu câteva indicii victoria și creditul ei rămân ale tale.
**Rezolvă** pune becurile unei soluții complete și lasă la locul lor crucile desenate de
tine.

### Mouse și atingere

- **Dă clic pe** o căsuță albă ca să pui un bec acolo și încă o dată ca să-l scoți.
- **Dă clic dreapta pe** o căsuță albă ca să notezi o cruce care înseamnă „aici nu poate
  sta un bec”; dă clic dreapta din nou ca s-o ștergi. O căsuță cu cruce nu primește bec
  până nu scoți crucea, iar o căsuță cu bec nu poate primi cruce.
- **Cruce** (butonul cu cruce de lângă Anulează) face ca un clic simplu să noteze sau să
  șteargă o cruce în loc de un bec, pentru când elimini multe căsuțe deodată. Apasă-l din
  nou ca să revii la becuri.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor pe grilă.
- **Enter** pune sau scoate un bec sub cursor, iar **Space** (sau **I**) pune sau scoate o
  cruce acolo.
- **X** este butonul **Cruce**.

## Parametri

- **Lățime** și **Înălțime** ale grilei.
- **% de căsuțe negre**: cam cât din grilă este negru. E o orientare, nu o promisiune:
  dacă la această densitate nu se poate face niciun puzzle, generatorul folosește câteva
  căsuțe negre în plus.
- **Simetrie**: modelul după care sunt așezate căsuțele negre — fără, oglindirea sau
  rotația a două jumătăți, ori oglindirea sau rotația în patru. Rotația de ordin 4 are
  nevoie de o grilă pătrată.
- **Dificultate**: puzzle-urile _Ușor_ se rezolvă judecând câte o căsuță pe rând, dacă
  trebuie sau nu poate avea un bec. Cele _Mediu_ îți cer să cântărești grupuri de căsuțe
  unele față de altele („una dintre acestea trei trebuie să fie bec, și asta o exclude pe
  aceasta”). Puzzle-urile _Greu_ pot cere să încerci un bec undeva și să urmărești
  consecințele până când ceva nu mai merge. Fiecare puzzle are exact o soluție.
`,w=e({default:()=>T}),T=`# Bucle

O grilă de puncte, cu numere în unele dintre spațiile dintre ele. Desenează o singură
buclă închisă de-a lungul liniilor palide dintre puncte astfel încât:

- fiecare spațiu numerotat să aibă exact atâtea laturi pe buclă;
- bucla să nu se încrucișeze și să nu se atingă niciodată — din fiecare punct pleacă fie
  două linii, fie niciuna — și să existe o singură buclă, fără capete libere sau bucăți
  separate.

Varianta clasică folosește pătrate, dar același puzzle merge și pe triunghiuri, hexagoane
și o duzină de pavaje mai ciudate, unde numerele pot trece mult de 4.

Liniile care formează o buclă greșită sau care se întâlnesc câte trei într-un punct se fac
roșii; un număr cu prea multe linii în jur sau cu prea puține laturi posibile rămase se
face și el roșu. Un număr devine gri când are exact numărul potrivit de linii.

## Comenzi

**Rezolvă** desenează toată bucla. Puzzle-ul e terminat de îndată ce bucla este completă
și fiecare număr este respectat; tăierea muchiilor nefolosite este opțională.

### Mouse și atingere

- **Dă clic pe** o muchie palidă ca să desenezi o linie pe ea; dă clic din nou pe linie
  ca s-o ștergi.
- **Dă clic dreapta pe** o muchie ca s-o tai, marcând-o ca sigur în afara buclei;
  dă clic dreapta din nou ca să ștergi semnul. Fiecare dintre cele două acțiuni șterge și semnul
  pus de cealaltă.
- **Taie** (butonul cu cruce de lângă Anulează) face ca un clic simplu să taie o muchie sau
  să-i șteargă semnul, în loc să deseneze o linie. Apasă-l din nou ca să revii la desenat
  linii.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor de la o muchie la alta; **Enter** desenează sau șterge
  o linie pe muchia de sub cursor, iar **Space** o taie sau șterge semnul.
- **X** este butonul **Taie**.

## Parametri

- **Lățime** și **Înălțime** ale grilei, numărate în celule ale pavajului. Pentru grila
  de pătrate este pur și simplu numărul de pătrate pe orizontală și pe verticală; celelalte
  pavaje își numără unitățile care se repetă, așa că numărul real de fețe variază.
- **Tipul grilei**: _Pătrate_, _Triunghiuri_ și _Fagure_ sunt pavajele regulate.
  _Pătrat snub_, _Cairo_, _Hexagonal mare_, _Octogonal_, _Romboizi_, _Floral_,
  _Dodecagonal_ și _Dodecagonal mare_ amestecă forme, iar cele două pavaje _Penrose_ nu se
  repetă deloc.
- **Dificultate**: puzzle-urile _Ușor_ au nevoie doar de reguli — numeri liniile din jurul
  unui număr, ții minte că dintr-un punct pleacă două linii sau niciuna și nu închizi bucla
  prea devreme. _Mediu_ adaugă raționamente despre perechi de muchii care se întâlnesc
  într-un punct (cel mult una, sau cel puțin una, din pereche este linie). _Greu_ lasă
  aceste fapte să se înlănțuie din punct în punct, ca de-a lungul unui șir diagonal de 2.
  _Expert_ urmărește și muchii despre care se știe că sunt egale sau opuse între ele. Nu
  trebuie să ghicești niciodată; fiecare puzzle are exact o soluție.
`,E=e({default:()=>D}),D=`# Magneți

Un dreptunghi a fost acoperit cu dominouri, arătate doar prin contur. Fiecare domino este
fie un magnet — o jumătate pol \`+\`, cealaltă pol \`−\` — fie o piesă goală, fără niciun pol.
Numerele de pe margine spun câți poli \`+\` (deasupra coloanelor și în stânga rândurilor)
și câți poli \`−\` (sub coloane și în dreapta rândurilor) are fiecare linie; un număr lipsă
înseamnă că linia nu are indicație. Completează fiecare domino astfel încât toate
numerele să fie respectate și doi poli de același fel să nu stea niciodată alături: \`+\`
nu are voie să atingă \`+\`, iar \`−\` nu are voie să atingă \`−\` peste granița dintre
dominouri. Piesele goale sunt inerte și pot sta lângă orice.

Polii de același fel care se ating apar în roșu. Un număr se face roșu când nu mai poate fi
respectat — are deja prea mulți poli sau prea puțini și nu mai e loc pentru alții — și gri
când este respectat exact. Puzzle-ul e terminat când fiecare domino e completat, fiecare
număr e respectat și nimic nu e roșu.

## Comenzi

### Mouse și atingere

- **Dă clic pe** o jumătate goală a unui domino ca s-o faci polul \`+\` (cealaltă jumătate
  devine \`−\`). Dă clic din nou pe aceeași jumătate ca să întorci magnetul și a treia oară
  ca să golești dominoul. Un clic pe un domino gol nu face nimic.
- **Dă clic dreapta pe** un domino gol ca să-l marchezi ca piesă goală. Dă clic dreapta
  din nou ca să înlocuiești piesa goală cu semne de întrebare, o notiță că dominoul este
  sigur un magnet; dă clic dreapta a treia oară ca să-l golești. Un clic dreapta pe un
  magnet nu face nimic.
- **Gol** (dominoul umbrit de lângă Anulează) face ca un clic simplu să facă ce face
  un clic dreapta: marchează un domino ca piesă goală, apoi cu semne de întrebare, apoi îl
  golește din nou. Apasă-l din nou ca să revii la pus magneți.
- **Rezolvă** completează toată soluția.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor pe grilă.
- **Enter** trece jumătatea de sub cursor prin \`+\`, \`−\` și gol, la fel ca un clic stânga.
- **Space** trece dominoul de sub cursor prin piesă goală, semn de întrebare și gol, la fel
  ca un clic dreapta.
- **B** este butonul **Gol**.

## Parametri

- **Lățime** și **Înălțime** ale grilei. Când aria e impară rămâne o căsuță în plus,
  desenată hașurat; nu aparține niciunui domino și contează ca neutră.
- **Dificultate**: puzzle-urile _Ușor_ îți cer mereu să te uiți la o singură linie sau un
  singur domino odată — un număr deja respectat, un număr care are nevoie de toți candidații
  rămași sau un domino în care niciuna dintre jumătăți nu poate primi un anumit pol.
  Puzzle-urile _Greu_ îți cer și să judeci dominouri întregi așezate de-a lungul unei linii:
  un domino care trebuie să fie magnet dă câte un pol de fiecare fel oricum l-ai întoarce, o
  linie cu un singur gol rămas nu poate avea un domino gol pe lungime și așa mai departe.
  Fiecare puzzle are exact o soluție.
- **Reduce indicațiile**: elimină fiecare număr care nu e necesar ca să rezolvi puzzle-ul
  la dificultatea aleasă, ceea ce face mult mai greu de văzut de unde să începi.
`,O=e({default:()=>k}),k=`# Harta

O hartă este împărțită în regiuni. Colorează fiecare regiune cu una din patru culori
astfel încât două regiuni care au în comun o bucată de graniță să nu aibă aceeași
culoare. Regiunile care se ating doar într-un colț pot avea aceeași culoare. Câteva
regiuni sunt colorate deja și sunt alese astfel încât harta să poată fi terminată într-un
singur fel.

Două regiuni vecine de aceeași culoare sunt semnalate cu un \`!\` roșu pe granița dintre
ele.

## Comenzi

**Rezolvă** colorează soluția completă. Harta clipește când fiecare regiune e colorată și
nimic nu e roșu.

### Mouse și atingere

- **Trage** o culoare: apasă pe o regiune (sau pe una dintre mostrele de culoare de sub
  hartă) și eliberează pe altă regiune ca să-i dai acea culoare. Dacă tragi dintr-o
  regiune goală, din spațiul gol din jurul hărții sau din mostra radieră, regiunea pe care
  lași se golește.
- **Dă clic pe o mostră** ca să alegi o culoare, apoi **dă clic pe** regiuni ca să le
  colorezi; dă clic din nou pe mostra aleasă ca s-o deselectezi.
- **Trage cu butonul drept** o culoare pe o regiune goală ca să notezi un punct mic de acea
  culoare, o notiță că regiunea _ar putea_ avea acea culoare. O regiune poate avea mai
  multe puncte-notiță; dacă tragi din nou aceeași culoare, punctul ei dispare. Cu o mostră
  aleasă, **dă clic dreapta pe** o regiune goală ca să pui sau să scoți punctul ei.
- **Numere** (din meniul de pauză) afișează un număr în fiecare regiune, util când discuți
  un puzzle cu altcineva, și le ascunde din nou.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor pe hartă; regiunea în care se află e conturată. Tastele
  **1**–**4** colorează acea regiune, **Space** o golește, iar **Enter** îi ia culoarea ca
  s-o poți duce cu tastele săgeți și s-o lași cu **Enter** (sau ca punct-notiță cu
  **Space**). Dacă apeși **Enter** de două ori fără să te miști, regiunea se golește.
- **L** este butonul **Numere**.

## Parametri

- **Lățime** și **Înălțime** ale grilei pe care e desenată harta, în căsuțe.
- **Regiuni**: în câte regiuni e împărțită harta.
- **Dificultate**: puzzle-urile _Ușor_ au mereu o regiune căreia i-a rămas o singură
  culoare. _Mediu_ adaugă raționamente despre perechi de regiuni vecine care trebuie să-și
  împartă aceleași două culori. _Greu_ are nevoie de lanțuri de astfel de deducții pe toată
  harta. Toate acestea se pot rezolva fără să ghicești. _Extrem_ promite doar că soluția e
  unică; s-ar putea să trebuiască să încerci o culoare și s-o urmărești până când ceva nu
  mai merge.
`,A=e({default:()=>j}),j=`# Mine

O grilă de căsuțe acoperite ascunde un număr de mine. Descoperă fiecare căsuță care _nu_
conține o mină. Fiecare căsuță deschisă arată câte dintre cele opt vecine ale ei sunt
mine; dacă deschizi o mină, ai pierdut.

Șmecheria acestei versiuni este că nu trebuie să ghicești niciodată. Nimic nu e hotărât
până la primul clic: abia atunci minele sunt așezate astfel încât căsuța aleasă să fie
goală și toată grila să poată fi dedusă de acolo prin logică pură. Dacă te simți blocat,
există mereu undeva o căsuță sigură pe care numerele o dovedesc deja.

Bara de stare arată câte stegulețe ai pus față de numărul de mine, iar ceasul pornește la
primul clic. Dacă lovești o mină, se dezvăluie toate celelalte și sunt tăiate stegulețele
greșite; poți anula mutarea fatală și continua, dar decesul rămâne în bara de stare.

## Comenzi

### Mouse și atingere

- **Dă clic pe** o căsuță acoperită ca s-o deschizi. O căsuță goală (fără mine vecine) își
  deschide și vecinele, și tot așa mai departe.
- **Dă clic dreapta pe** o căsuță acoperită ca să pui un steguleț pe o mină bănuită și
  încă o dată ca să-l scoți. Căsuțele cu steguleț nu pot fi deschise din greșeală.
- **Dă clic pe un număr** care are deja în jur numărul corect de stegulețe ca să-i deschizi
  dintr-odată toate celelalte vecine acoperite. Un clic de mijloc pe acel număr face
  același lucru.
- **Indiciu** deschide o căsuță sigură — sau scoate un steguleț sub care nu e nicio mină —
  și îți lasă restul grilei. Cu câteva indicii, victoria și creditul ei rămân ale tale.
- **Rezolvă** dezvăluie toată așezarea, cu steguleț pe fiecare mină. Asta nu se socotește
  o victorie a ta.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor pe grilă.
- **Enter** face ca un clic stânga pe căsuța de sub cursor: deschide o căsuță acoperită
  sau deschide vecinele unui număr care are toate stegulețele puse.
- **Space** pune sau scoate un steguleț, ca un clic dreapta.

## Parametri

- **Lățime** și **Înălțime** ale grilei.
- **Mine**: câte mine să fie ascunse. Poți da un procent, de exemplu \`20%\`, în loc de un
  număr. La densități foarte mari, grilele rezolvabile se găsesc greu.
- **Garantează rezolvabilitatea**: când e activă (implicit), așezarea poate fi rezolvată
  sigur de la primul clic fără să ghicești. Dezactiveaz-o pentru grile aleatorii obișnuite,
  care te pot lăsa la final cu o aruncare de monedă.
`,M=e({default:()=>N}),N=`# Rețea

O rețea de fire a fost întinsă pe o grilă de piese pătrate, apoi fiecare piesă a fost
rotită la întâmplare. Rotește piesele la loc astfel încât toate să formeze o singură rețea:
fiecare capăt de fir trebuie să întâlnească un fir pe piesa vecină și niciun fir nu are
voie să rămână îndreptat spre un perete. Rețeaua terminată este un arbore, deci nu are
bucle închise.

Piesele deja legate de piesa-sursă din mijlocul grilei sunt desenate cu albastru, ca
ghid; celelalte rămân gri. Un fir care face parte dintr-o buclă este desenat cu roșu.
Liniile negre groase dintre piese sunt bariere: niciun fir nu le poate traversa, ceea ce
îți dă un indiciu despre cum trebuie să stea piesele de pe fiecare parte. Bara de stare
arată câte piese sunt alimentate acum.

## Comenzi

### Mouse și atingere

- **Dă clic pe** o piesă ca s-o rotești în sens invers acelor de ceasornic și
  **dă clic dreapta pe** ea ca s-o rotești în sensul acelor de ceasornic.
- **Dă clic de mijloc pe** o piesă ca s-o **blochezi** când ești sigur de ea. O piesă
  blocată este umbrită și nu se mai rotește până nu o deblochezi cu încă un clic de mijloc.
  Un clic dreapta rotește piesa în loc s-o blocheze, așa că pentru blocare
  folosește un clic de mijloc.
- **Blochează** (butonul cu lacăt de lângă Anulează) face ca un clic simplu să blocheze sau
  să deblocheze o piesă în loc s-o rotească, ceea ce e mai ușor decât un clic de mijloc pe
  un touchpad. Un clic dreapta rotește în continuare piesa în sensul acelor de ceasornic.
  Apasă-l din nou ca să revii la rotit.
- **Amestecă** rotește fiecare piesă neblocată într-o nouă orientare aleatorie, pentru o
  schimbare de peisaj când te-ai împotmolit.
- Pe o grilă circulară, cele patru **butoane cu săgeți** derulează imaginea, ca piesele de
  pe margini opuse să poată fi aduse una lângă alta.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor pe grilă.
- **Enter** sau **A** rotește piesa de sub cursor în sens invers acelor de ceasornic, **D**
  o rotește în sensul acelor de ceasornic, iar **F** o întoarce pe jumătate.
- **Space**, **S** sau **L** blochează sau deblochează piesa de sub cursor. Cu mouse-ul,
  **Shift+clic** blochează și el o piesă, exact ca un clic de mijloc.
- **K** este butonul **Blochează**, iar **J** butonul **Amestecă**.
- Pe o grilă circulară, **Shift + tastele săgeți** derulează imaginea (la fel ca cele patru
  butoane cu săgeți), ca piesele de pe margini opuse să se vadă una lângă alta. **Ctrl +
  tastele săgeți** mută piesa-sursă de la care se întinde evidențierea albastră.

## Parametri

- **Lățime** și **Înălțime** ale grilei, în piese.
- **Marginile se unesc**: firele pot ieși pe o margine a grilei și continua de pe marginea
  opusă.
- **Probabilitatea barierelor**: un număr de la 0 la 1 care dă proporția de muchii fără fir
  care primesc o barieră. Barierele nu schimbă niciodată așezarea firelor: aceeași sămânță
  aleatorie dă mereu aceeași grilă, așa că o probabilitate mai mare doar adaugă indicii.
- **Garantează o soluție unică**: de obicei puzzle-ul e construit astfel încât o singură
  așezare a pieselor să funcționeze. Dezactiveaz-o pentru generare mai rapidă și, din când
  în când, câte o zonă ambiguă.
`,P=e({default:()=>F}),F=`# Rețea glisantă

Fiecare piesă are o bucată de fir: un segment drept, un colț, o ramificație în T sau un
capăt liber cu un punct. Puse cum trebuie, piesele formează o singură rețea care ajunge la
fiecare piesă de la sursa de curent de pe piesa umbrită din centru, fără bucle și fără
brațe îndreptate spre nimic. Grila a fost amestecată glisând rânduri și coloane întregi,
așa că doar așa o poți îndrepta: nicio piesă nu poate fi rotită, doar mutată.

Piesele care primesc acum curent sunt desenate cu albastru; celelalte rămân gri. Pereții
negri groși dintre piese sunt bariere. Nimic nu se poate lega peste o barieră, așa că ele
îți arată unde rețeaua terminată sigur nu are legătură.

## Comenzi

### Mouse și atingere

- **Dă clic pe** o săgeată de lângă un rând sau o coloană ca să glisezi toată linia cu un
  pas în direcția săgeții. Piesa împinsă afară la un capăt reintră la celălalt capăt al
  aceleiași linii. **Dă clic dreapta pe** o săgeată ca să glisezi linia în sens invers.
- Rândul și coloana din centru nu au săgeți: sursa de curent nu se mișcă niciodată.
- **Rezolvă** sare direct la rețeaua terminată, ca s-o poți compara cu încercarea ta.

### Tastatură (Keyboard)

- **Tastele săgeți** plimbă o evidențiere pe inelul de săgeți.
- **Enter** glisează linia evidențiată în direcția săgeții ei, iar **Space** o glisează
  înapoi.

## Parametri

- **Lățime** și **Înălțime** ale grilei.
- **Marginile se unesc**: când e activă, marginea dreaptă continuă pe cea stângă și cea de
  jos pe cea de sus, așa că firele (și barierele) pot trece peste marginea grilei. Cadrul
  punctat marchează o grilă circulară; un cadru gros continuu este un perete de jur
  împrejur.
- **Probabilitatea barierelor**: câte dintre muchiile nefolosite ale pieselor primesc o
  barieră, de la 0 (niciuna) la 1 (fiecare muchie pe care rețeaua terminată nu o
  folosește). Mai multe bariere fac puzzle-ul mai ușor. Barierele sunt alese independent de
  restul grilei, așa că aceeași sămânță aleatorie cu o probabilitate mai mare dă același
  puzzle cu mai multe indicii.
- **Număr de mutări de amestecare**: lasă 0 pentru o amestecare temeinică sau pune un
  număr ca să amesteci cu exact atâtea glisări. Scopul este atunci să le găsești și să le
  inversezi; bara de stare arată ținta.
`,I=e({default:()=>L}),L=`# Tipar

Fiecare căsuță a grilei este în secret fie neagră, fie albă. Numerele de lângă fiecare rând
și de deasupra fiecărei coloane îți spun lungimile secvențelor de căsuțe negre de pe acea
linie, în ordine, cu cel puțin o căsuță albă între două secvențe consecutive. Colorează
căsuțele negre astfel încât fiecare rând și fiecare coloană să se potrivească cu numerele
lor. Puzzle-urile de acest fel se numesc de obicei nonograme sau picross.

Imaginile de aici sunt generate la întâmplare, așa că nu ai ce desen să ghicești: totul
trebuie dedus din numere. Fiecare puzzle este verificat dinainte ca să poată fi rezolvat
judecând câte un rând sau o coloană pe rând, așa că nu trebuie niciodată să încerci la
noroc.

Numerele unei linii devin gri când secvențele negre de pe ea se potrivesc cu ele și roșii
dacă secvențele pe care le-ai terminat nu se pot potrivi în niciun fel cu numerele.
Puzzle-ul e terminat când fiecare rând și fiecare coloană se potrivesc cu numerele lor;
punctele sunt doar ca să te ajute să ții minte.

## Comenzi

### Mouse și atingere

- **Dă clic pe** o căsuță ca s-o colorezi în negru; dă clic din nou pe o căsuță neagră ca
  s-o golești.
- **Dă clic dreapta pe** o căsuță ca s-o marchezi cu un punct, adică știi că e albă;
  dă clic dreapta pe o căsuță cu punct ca s-o golești.
- **Trage** ca să colorezi dintr-odată o linie dreaptă de căsuțe negre și
  **trage cu butonul drept** ca să pui o linie de puncte. Sunt afectate doar căsuțele care erau în
  aceeași stare ca cea de la care ai pornit, așa că dacă tragi un rând de puncte peste
  căsuțele tale negre, acestea rămân neatinse.
- **Dă clic de mijloc pe** o căsuță ca s-o readuci la necunoscut. Cu mouse-ul, trăgând cu
  rotița apăsată golești un dreptunghi întreg, orice ar conține.
- **Șterge** (butonul cu radieră de lângă Anulează) face ca butonul stâng să facă același
  lucru: dă clic pe o căsuță ca s-o readuci la necunoscut sau trage ca să golești un
  dreptunghi întreg. Apasă-l din nou ca să revii la colorat în negru.
- **Indiciu** completează o căsuță, mereu una pe care un singur rând sau o singură coloană
  o decide de la sine — sau corectează o căsuță care contrazice soluția. Puzzle-ul rămâne
  în joc, iar cu câteva indicii victoria și creditul ei rămân ale tale.
- **Rezolvă** completează toată imaginea în locul tău.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor.
- **Enter** colorează sau golește negrul de sub cursor, iar **Space** pune sau scoate un
  punct.
- Ține apăsat **Ctrl** în timp ce muți cursorul ca să colorezi în negru pe drum, **Shift**
  ca să pui puncte sau pe amândouă ca să golești.
- Cu mouse-ul, **Shift+clic** golește căsuțe la fel ca un clic de mijloc.
- **E** este butonul **Șterge**.

## Parametri

- **Lățime** și **Înălțime** ale grilei. Presetările merg de la 10×10 până la 30×30;
  grilele mai mari se generează puțin mai greu.
`,R=e({default:()=>z}),z=`# Perle

O grilă de căsuțe, unele cu câte o perlă neagră sau albă. Desenează o singură buclă
închisă care merge din centrul unei căsuțe în centrul alteia, pe orizontală sau pe
verticală, fără să se încrucișeze sau să se ramifice. Bucla nu trebuie să treacă prin
toate căsuțele, dar trebuie să treacă prin fiecare perlă:

- la o **perlă neagră** bucla cotește, apoi trece drept prin ambele căsuțe vecine cu
  perla de-a lungul buclei;
- la o **perlă albă** bucla trece drept și cotește în cel puțin una dintre cele două
  căsuțe vecine cu perla de-a lungul buclei.

Contează doar căsuțele prin care trece bucla chiar înainte și după perlă, nu toate
căsuțele care o ating în grilă.

O perlă a cărei regulă este deja încălcată primește un halou roșu. De îndată ce există o
buclă închisă, fiecare segment din afara ei este desenat cu roșu, la fel ca orice căsuță
cu trei sau mai multe segmente.

## Comenzi

**Rezolvă** desenează toată bucla. Puzzle-ul este gata când bucla formează un singur
circuit închis și nimic nu e roșu.

### Mouse și atingere

- **Dă clic pe** o latură a grilei (lângă granița dintre două căsuțe) ca să desenezi un
  segment de buclă peste ea; dă clic din nou ca să-l ștergi.
- **Trage** printr-un șir de căsuțe ca să desenezi dintr-odată o porțiune întreagă de
  segmente. Tragerea peste segmente existente le șterge; o tragere care începe pe segmente
  existente și continuă în căsuțe goale întâi șterge, apoi desenează. Revino peste o căsuță
  prin care ai trecut deja ca să scurtezi traseul înainte să dai drumul; revino în căsuța
  din care ai pornit ca să închizi bucla.
- **Dă clic dreapta pe** o latură a grilei ca să pui un mic X care înseamnă „aici nu e
  segment”; nu poți desena un segment peste un X până nu îl ștergi.
  **Trage cu butonul drept** peste un șir de căsuțe ca să pui un X pe fiecare latură
  traversată.
- **Taie** (butonul cu cruce de lângă Anulează) face ca un clic simplu să pună sau să ridice
  un X, iar o tragere să pună un șir întreg: ca la desenat, o tragere care începe pe X-uri
  întâi le ridică, iar laturile care au deja un segment le sare. Apasă-l din nou ca să revii
  la desenat bucla.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor. **Ctrl+săgeată** desenează sau șterge segmentul de
  pe acea latură a căsuței cursorului, iar **Shift+săgeată** pune sau șterge acolo un X.
  **Enter** pornește o tragere cu tastatura din căsuța cursorului: mută-te cu săgețile și
  apasă din nou Enter ca să confirmi drumul sau **Space** ca să renunți la el.
- **X** este butonul **Taie**; cât e activ, și o tragere cu tastatura pune X-uri.

## Parametri

- **Lățime** și **Înălțime** ale grilei, în căsuțe (cel puțin cinci fiecare).
- **Dificultate**: puzzle-urile _Ușor_ se rezolvă judecând fiecare perlă și căsuțele de
  lângă ea. Puzzle-urile _Dificil_ cer să observi și când un segment ar închide prea
  devreme o buclă mică, lăsând alte perle izolate. (O grilă 5×5 Dificil este generată ca
  Ușor, ca în original.)
- **Permite nerezolvabile**: păstrează toate perlele pe care le permite bucla, în loc să le
  reducă la un set minim, cu soluție unică. O opțiune de depanare moștenită din original.
`,B=e({default:()=>V}),V=`# Țăruși

O tablă plină de țăruși, cu o gaură liberă, sau câteva pe o tablă aleatorie. Un țăruș poate sări pe orizontală
sau pe verticală peste un țăruș vecin, în gaura liberă aflată imediat dincolo de el;
țărușul peste care s-a sărit este scos. Continuă să sari până rămâne un singur țăruș pe
tablă.

Este vechiul joc de solitar cu țăruși. Tabla **Cruce** este așezarea englezească
cunoscută, tabla **Octogon** cea europeană (care începe cu gaura liberă în afara
centrului, pentru că din centru nu poate fi terminată), iar tablele **Aleatoriu** sunt
forme ciudate crescute de calculator. Zonele goale fără gaură pur și simplu nu fac parte
din tablă.

Nu poți rămâne blocat definitiv: dacă nu mai există nicio săritură și a rămas mai mult de
un țăruș, jocul se termină, dar Anulează te duce înapoi oricât de departe vrei. Bara de
stare numără țărușii rămași și mutările făcute.

## Comenzi

### Mouse și atingere

- **Trage** un țăruș și lasă-l într-o gaură liberă aflată exact la două căsuțe distanță,
  în linie dreaptă peste alt țăruș. Oriunde altundeva l-ai lăsa, țărușul revine la loc.
- Sau **dă clic pe** un țăruș ca să-l ridici (devine portocaliu și găurile în care poate
  ateriza sunt marcate), apoi dă clic pe gaura în care vrei să sară. Încă un clic pe
  același țăruș îl pune jos.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor pe tablă.
- **Enter** sau **Space** pe un țăruș îl ridică; o tastă săgeată îl face apoi să sară în
  acea direcție, dacă mutarea e permisă, iar **Enter** din nou îl pune jos.

## Parametri

- **Lățime** și **Înălțime** ale tablei, cel puțin 4 fiecare.
- **Tipul tablei**: _Cruce_ și _Octogon_ sunt așezările tradiționale și există doar la
  7×7. _Aleatoriu_ produce de fiecare dată altă formă de tablă, întotdeauna una care
  poate fi redusă la un singur țăruș, pentru că a fost construită făcând sărituri în
  sens invers pornind de la unul.
`,H=e({default:()=>U}),U=`# Rază

Unele căsuțe ale grilei conțin un număr. Înnegrește căsuțe astfel încât patru lucruri
să fie adevărate în același timp:

- nicio căsuță cu număr nu este neagră;
- nicio pereche de căsuțe negre nu se atinge pe o latură (colțurile sunt permise);
- toate căsuțele albe formează o singură regiune conectată, unite latură la latură;
- fiecare număr numără căsuțele albe pe care le vede propria lui căsuță: pe ea însăși,
  plus tot ce se află în linie dreaptă în sus, în jos, la stânga și la dreapta, până
  când o căsuță neagră sau marginea grilei îi stă în cale.

Acesta este _Kurodoko_ de la Nikoli, cunoscut și ca _Kuromasu_ sau _Where is Black
Cells_. Un număr care vede deja destule căsuțe are o căsuță neagră imediat după fiecare
șir pe care îl vede; un număr care ar vedea prea mult dacă o singură căsuță necunoscută
ar fi albă are acolo, de fapt, o căsuță neagră. Nu e niciodată corect să înnegrești o
căsuță care este singura legătură dintre două grupuri de căsuțe albe. Orice puzzle poate
fi terminat printr-un astfel de raționament; nu e nevoie să ghicești.

Greșelile apar cu roșu: căsuțele negre care se ating primesc un chenar roșu în jurul
grupului, căsuțele albe separate de regiunea principală primesc un contur roșu, iar un
număr devine roșu când nu mai poate vedea destule căsuțe sau vede sigur prea multe.
Puzzle-ul este gata când nicio regulă nu e încălcată; nu e nevoie să marchezi cu puncte
căsuțele albe.

## Comenzi

### Mouse și atingere

- **Dă clic pe** o căsuță ca s-o înnegrești. Dă clic din nou ca s-o transformi într-un
  punct (o căsuță despre care știi că e albă) și încă o dată ca s-o golești.
- **Clicul dreapta** parcurge stările în sens invers: punct, apoi negru, apoi gol.
- **Trage** ca să colorezi mai multe căsuțe dintr-odată și **trage cu butonul drept** ca
  să le parcurgi în sens invers. Sunt afectate doar căsuțele care erau la început la fel
  ca prima, așa că o tragere cu puncte îți lasă neatinse căsuțele negre.
- **Șterge** (butonul cu radieră de lângă Anulează) face ca un clic să golească o căsuță,
  iar o tragere să golească toate căsuțele negre și punctele peste care trece, oricare ar fi
  ele. Apasă-l din nou ca să revii la colorat.
- **Indiciu** completează o căsuță care decurge din ce e deja pe tablă — sau corectează o
  căsuță care contrazice soluția. Puzzle-ul rămâne în joc, iar cu câteva indicii victoria
  și creditul ei rămân tot ale tale.
- **Rezolvă** completează toată grila, marcând cu punct fiecare căsuță albă.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor pe grilă.
- **Enter** funcționează ca un clic stânga pe căsuța de sub cursor, iar **Space** ca
  un clic dreapta.
- **E** este butonul **Șterge**, iar **H** butonul **Indiciu**.

## Parametri

- **Lățime** și **Înălțime** ale grilei. Presetările merg de la 9×6 la 16×11; se poate
  genera orice până la 30×30, deși grilele minuscule de una sau două căsuțe nu au
  puzzle-uri corecte.
`,W=e({default:()=>G}),G=`# Dreptunghiuri

Unele căsuțe ale grilei au un număr. Împarte toată grila în dreptunghiuri astfel încât
fiecare dreptunghi să conțină exact un număr, iar acel număr să fie aria dreptunghiului
(lățimea înmulțită cu înălțimea). Un 6, de exemplu, stă într-un bloc de 1×6, 2×3, 3×2
sau 6×1; care dintre ele și unde anume stă numărul în el trebuie să deduci din vecini.

Puzzle-urile sunt generate aleatoriu și, implicit, numerele sunt plasate astfel încât o
singură împărțire a grilei să funcționeze. Puzzle-ul original vine din revista japoneză
Nikoli, unde este cunoscut ca Shikaku.

## Comenzi

### Mouse și atingere

- **Trage** peste o zonă ca să desenezi un dreptunghi în jurul ei: conturul lui este
  desenat, iar liniile din interior sunt șterse. Tragerea de-a lungul unei linii a grilei
  desenează doar acea linie.
- **Dă clic pe** o linie a grilei ca să adaugi sau să ștergi doar acea latură.
- **Trage cu butonul drept** peste o zonă ca să ștergi liniile din interiorul ei, lăsând
  conturul neatins. **Un clic dreapta** pe o linie a grilei o comută la fel
  ca un clic.
- **Șterge** (butonul cu radieră de lângă Anulează) face ca și o tragere obișnuită să
  șteargă: trage peste o zonă ca să ștergi liniile din interior sau dă clic pe o linie a
  grilei ca s-o elimini. Cât e activ, un clic nu adaugă niciodată o linie. Apasă-l din nou
  ca să revii la desenat.
- **Rezolvă** completează toată împărțirea în locul tău.

Cât timp tragi, dreptunghiul pe care urmează să-l desenezi este conturat, iar mărimea lui
apare în bara de stare. Un dreptunghi terminat, de mărimea potrivită, este umbrit. Un
dreptunghi închis care nu poate fi niciodată corect este semnalat: numărul lui devine
roșu dacă dreptunghiul are altă mărime decât el și este hașurat dacă nu conține niciun
număr. Puzzle-ul este complet când fiecare căsuță se află într-un dreptunghi corect.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor.
- **Enter** începe să tragă un dreptunghi pornind de la cursor; mută cursorul în colțul
  opus și apasă din nou **Enter** ca să-l desenezi.
- **Space** funcționează la fel, dar șterge interiorul dreptunghiului.
- **E** este butonul **Șterge**.

## Parametri

- **Lățime** și **Înălțime** ale grilei. Presetările merg de la 7×7 până la 19×19.
- **Factor de extindere** — generează o grilă mai mică și o întinde la mărimea cerută,
  astfel încât puzzle-ul să aibă mai puține dreptunghiuri, dar mai mari. 0 (implicit)
  înseamnă fără întindere; 0.5 face grila inițială cât două treimi din mărimea finală pe
  fiecare direcție. Valorile mari lasă doar câteva dreptunghiuri și fac puzzle-ul banal.
- **Garantează o soluție unică** — de obicei activată. Dacă o dezactivezi, numerele sunt
  plasate oriunde în dreptunghiurile lor, ceea ce e mai rapid și poate da puzzle-uri cu
  mai multe soluții; orice împărțire validă contează atunci ca rezolvare.
`,se=e({default:()=>K}),K=`# Same Game

Tabla este plină de căsuțe colorate. Alege un grup de două sau mai multe căsuțe de
aceeași culoare care se ating pe laturi și elimină-l; căsuțele de deasupra golului cad,
iar când o coloană se golește, coloanele din dreapta ei alunecă spre stânga ca să închidă
golul. Golește toată tabla ca să câștigi. Dacă rămân căsuțe, dar nicio pereche de căsuțe
alăturate nu are aceeași culoare, nu mai poți face nimic — anulează și încearcă altă
ordine.

Grupurile mari valorează mult mai mult decât cele mici: eliminarea a _n_ căsuțe aduce
(_n_ − 2)² puncte cu punctajul implicit, așa că o pereche nu valorează nimic, trei căsuțe
un punct, iar zece căsuțe 64. Bara de stare arată scorul și, cât timp un grup este
selectat, câte căsuțe are și cât ar aduce.

Fiecare tablă generată (dacă nu dezactivezi opțiunea) este construită astfel încât _să
poată_ fi golită complet — deși găsirea unei ordini care să aducă și un scor bun rămâne
treaba ta.

Nu există butonul Rezolvă: calculatorul știe că tabla poate fi golită, dar nu îți spune
cum.

## Comenzi

### Mouse și atingere

- **Dă clic pe** o căsuță ca să selectezi tot grupul din care face parte; grupul este
  desenat mai deschis, cu un contur gros. **Dă clic din nou pe grupul selectat** ca să-l
  elimini. Un clic în altă parte mută selecția.
- **Dă clic dreapta pe** grupul selectat ca să anulezi selecția.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor pe tablă (trecând peste margini pe partea opusă).
- **Enter** selectează grupul de sub cursor, iar apăsat din nou elimină grupul.
- **Space** pe grupul selectat anulează selecția.

## Parametri

- **Lățime** și **Înălțime** ale tablei.
- **Nr. de culori**, de la 3 la 9 (2 este permis când rezolvabilitatea nu e garantată).
  Mai multe culori înseamnă grupuri mai mici și o tablă mai grea.
- **Sistem de punctaj**: _(n−2)²_, implicit, sau _(n−1)²_, care răsplătește și perechile.
- **Garantează rezolvabilitatea**: când e bifată, tabla este generată pornind invers de la
  o tablă goală, astfel încât să existe cel puțin o secvență care o golește. Debifeaz-o
  pentru o tablă pur aleatorie, care se generează mai repede și tinde să aibă regiuni mai
  mari, dar s-ar putea să nu poată fi golită.
`,ce=e({default:()=>le}),le=`# Indicatoare

Fiecare căsuță are o săgeată, iar câteva căsuțe au numere. Unește căsuțele într-un
singur drum numerotat de la 1 la N (N fiind numărul de căsuțe) astfel încât succesorul
fiecărei căsuțe să se afle undeva pe direcția săgeții ei: căsuța cu numărul 1 arată spre
2, care arată spre 3 și așa mai departe. Un succesor poate fi la orice distanță în
direcția săgeții, nu doar alături. Ultima căsuță, marcată cu o stea, nu arată nicăieri.

Primul și ultimul număr sunt afișate întotdeauna, plus destule altele cât drumul să fie
unic. Fiecare puzzle are exact o soluție și poate fi găsit doar prin raționament.

Greșelile apar cu roșu: două căsuțe cu același număr, un număr al cărui succesor nu e pe
direcția săgeții lui sau un lanț care trece de numărul dat. Puzzle-ul este gata când
numerele de la 1 la N trec prin fiecare căsuță și nu e nimic roșu.

## Comenzi

### Mouse și atingere

- **Trage** dintr-o căsuță într-o căsuță aflată pe direcția săgeții ei ca s-o faci pe a
  doua succesorul primei. **Trage cu butonul drept** ca să legi invers: dintr-o căsuță
  spre căsuța care ar trebui să vină înaintea ei.
- Când două căsuțe legate includ un număr, numărul se propagă de-a lungul întregului lanț
  și apare cu albastru. Un lanț care nu are încă un număr este etichetat cu o literă și
  un decalaj (\`a\`, \`a+1\`, \`a+2\`, ...); de îndată ce atinge o căsuță numerotată, literele
  devin numere. Legarea unui lanț de o căsuță deja legată înlocuiește legătura veche.
- Fiecare căsuță care încă are nevoie de un predecesor are un mic punct în colțul din
  stânga jos, iar o săgeată pălește când căsuța ei are un succesor. Așa că treaba e mereu
  să legi o săgeată îngroșată de o căsuță cu punct.
- **Dă clic dreapta pe** o căsuță ca să-i ștergi ambele legături. **Trage** o căsuță în
  afara tablei ca să faci același lucru sau **trage cu butonul drept** o căsuță în afara
  tablei ca să-i desfaci tot lanțul.
- **Desface** (butonul cu legătura ruptă de lângă Anulează) face ca un clic pe o căsuță să-i
  desfacă tot lanțul, cu toate legăturile, iar tragerea unei căsuțe în afara tablei face
  același lucru. Tragerea de la o căsuță la alta le leagă în continuare. Apasă-l din nou ca
  să-l oprești.
- **Rezolvă** completează tot drumul.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor.
- **Enter** pe o căsuță pornește o legătură din ea; mută cursorul pe succesor și apasă din
  nou **Enter** ca să faci legătura (apasă-l pe aceeași căsuță ca să renunți).
- **Space** sau **X** șterge legăturile căsuței de sub cursor; **Shift + X** îi desface
  tot lanțul.
- **B** este butonul **Desface**.

## Parametri

- **Lățime** și **Înălțime** ale grilei, de la 2 până la 12 căsuțe (2×2 e prea mic ca să
  meargă).
- **Început și sfârșit în colțuri**: când e activat, 1 este mereu în căsuța din stânga sus
  și N în cea din dreapta jos. Altfel ambele capete sunt plasate aleatoriu, deși tot sunt
  afișate.
`,ue=e({default:()=>de}),de=`# Unice

Fiecare căsuță a grilei conține un număr. Înnegrește unele căsuțe (ascunzându-le
numerele) astfel încât trei lucruri să fie adevărate în același timp:

- niciun număr nu apare de mai multe ori printre căsuțele albe ale unui rând sau ale unei
  coloane;
- nicio pereche de căsuțe negre nu se atinge pe o latură (colțurile sunt permise);
- toate căsuțele albe formează o singură regiune conectată, unite latură la latură.

Acesta este _Hitori_ de la Nikoli. Un început bun este să cauți două numere egale cu o
căsuță între ele: unul din pereche trebuie să fie negru, deci căsuța din mijloc trebuie
să fie albă. Două numere egale alăturate înseamnă că orice altă copie a acelui număr de
pe linia lor este neagră.

Greșelile apar cu roșu: căsuțele negre care se ating primesc un chenar roșu în jurul
grupului, căsuțele albe separate de regiunea principală primesc un contur roșu, iar două
căsuțe încercuite de pe aceeași linie, cu același număr, sunt desenate cu roșu.

Puzzle-ul este gata când nicio regulă nu e încălcată; nu e nevoie să încercuiești
căsuțele albe.

## Comenzi

### Mouse și atingere

- **Dă clic pe** o căsuță ca s-o înnegrești; dă clic din nou ca s-o readuci.
- **Clicul dreapta** desenează un cerc în jurul unui număr ca să notezi că e sigur alb;
  dă clic dreapta din nou ca să ștergi cercul. Oricare dintre cele două acțiuni șterge
  semnul pe care îl are deja o căsuță.
- **Rezolvă** completează toată grila, încercuind fiecare căsuță albă.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor pe grilă (trecând peste margini pe partea opusă).
- **Enter** înnegrește sau readuce căsuța de sub cursor, iar **Space** o încercuiește sau
  îi scoate cercul.

## Parametri

- **Lățime** și **Înălțime** ale grilei, de la 2 până la 20 pentru puzzle-urile generate.
- **Dificultate**: puzzle-urile _Ușor_ cer doar argumentele directe — o căsuță neagră îi
  obligă pe vecini să fie albi, un număr încercuit își obligă dublurile să fie negre,
  tiparele „pereche cu un gol” și „pereche alăturată”, o căsuță albă cu o singură ieșire
  și micile tipare din colțuri. Puzzle-urile _Dificil_ cer să observi și când înnegrirea
  unei căsuțe ar tăia regiunea albă în două și să folosești perechi de perechi decalate cu
  o căsuță. Fiecare puzzle are exact o soluție.
`,fe=e({default:()=>pe}),pe=`# Șaisprezece

Un puzzle glisant fără nicio căsuță goală. Fiecare căsuță conține o piesă numerotată și,
în loc să glisezi o singură piesă, glisezi un rând sau o coloană întreagă cu un pas.
Piesa împinsă peste margine revine imediat la capătul opus al aceleiași linii, ca și cum
grila ar fi înfășurată pe o gogoașă. Ordonează piesele astfel încât să crească de la 1
în colțul din stânga sus, de la stânga la dreapta și apoi rând cu rând.

## Comenzi

### Mouse și atingere

- **Dă clic pe** una dintre săgețile de pe margine ca să glisezi acel rând sau acea
  coloană cu un pas în direcția săgeții. **Dă clic dreapta pe** o săgeată ca să glisezi
  linia în sens opus.
- **Rezolvă** înlocuiește pur și simplu grila cu cea ordonată. Nu îți arată un traseu,
  dar îți dă o tablă curată pe care să încerci manevre.

### Tastatură (Keyboard)

- **Tastele săgeți** mută o evidențiere de-a lungul săgeților de pe margine.
- **Enter** glisează linia evidențiată în direcția săgeții ei, iar **Space** o glisează
  invers.

## Parametri

- **Lățime** și **Înălțime** ale grilei. Pe grilele cu ambele laturi impare se poate
  ajunge doar la jumătate din toate aranjamentele, așa că generatorul oferă doar dintre
  cele accesibile.
- **Număr de mutări de amestecare**: lasă 0 pentru un aranjament complet aleatoriu sau
  alege un număr ca grila ordonată să fie amestecată cu exact atâtea glisări simple.
  Ideea este apoi să deduci ce glisări s-au făcut și să le anulezi în același număr de
  mutări; cu cât ceri mai multe mutări de amestecare, cu atât e mai probabil să existe o
  soluție mai scurtă.
`,me=e({default:()=>he}),he=`# Diagonale

O grilă de căsuțe goale, cu numere încercuite în unele dintre colțuri. Trasează câte o
linie diagonală prin fiecare căsuță, înclinată într-o parte sau în alta, astfel încât:

- fiecare număr încercuit să aibă exact atâtea linii care ating punctul lui de colț (un 4
  stă în mijlocul unui X, un 0 are toate liniile din jur înclinate în altă parte);
- liniile să nu se unească niciodată într-o buclă închisă.

Un număr care are deja prea multe linii sau care nu mai poate primi destule devine roșu,
la fel ca orice linie care face parte dintr-o buclă. Puzzle-ul este gata când fiecare
căsuță are o linie și nimic nu e roșu.

## Comenzi

### Mouse și atingere

- **Dă clic pe** o căsuță ca să desenezi în ea un \`\\\`; dă clic din nou ca s-o transformi
  în \`/\` și încă o dată ca s-o golești.
- **Clicul dreapta** parcurge stările în sens invers: \`/\`, apoi \`\\\`, apoi gol. Așa că o
  căsuță poate fi pusă în orice poziție folosind o singură acțiune.
- **Rezolvă** completează toată grila.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor pe grilă.
- **Enter** schimbă căsuța de sub cursor ca un clic stânga, iar **Space** ca
  un clic dreapta.

## Parametri

- **Lățime** și **Înălțime** ale grilei, în căsuțe.
- **Dificultate**: puzzle-urile _Ușor_ pot fi rezolvate câte o căsuță pe rând — un număr
  deja satisfăcut sau care are nevoie de toate căsuțele rămase și căsuțe în care una
  dintre cele două linii ar închide o buclă. Puzzle-urile _Greu_ cer și raționamente
  despre perechi de căsuțe care trebuie să se încline la fel chiar înainte să știi în ce
  parte, și despre regiuni pe care o linie le-ar izola de marginea grilei. Nu e nevoie
  niciodată să ghicești; fiecare puzzle are exact o soluție.
`,ge=e({default:()=>_e}),_e=`# Solo

Umple grila pătrată cu cifre astfel încât fiecare rând, fiecare coloană și fiecare bloc
cu contur îngroșat să conțină fiecare cifră exact o dată. Unele căsuțe sunt date ca
indicații; restul trebuie să le deduci tu. Puzzle-ul obișnuit 3×3 este binecunoscutul
Sudoku, dar blocurile pot fi și dreptunghiuri (un puzzle 2×3 are șase blocuri de 3×2), iar
grila poate ajunge până la 16×16, caz în care literele a, b, c… țin locul cifrelor mai mari
decât 9.

Se pot activa trei variante:

- **X**: cele două diagonale principale, ușor umbrite, trebuie să conțină și ele fiecare
  cifră.
- **Jigsaw**: blocurile au forme neregulate, diferite de la un puzzle la altul.
- **Killer**: nu există cifre date. În schimb, grila este împărțită în „cuști” punctate,
  fiecare marcată cu suma cifrelor din ea. Nicio cifră nu poate apărea de două ori într-o
  cușcă.

Fiecare puzzle are exact o soluție, la care se poate ajunge întotdeauna prin raționament
pur, la dificultatea aleasă.

## Comenzi

Cifrele care se ciocnesc cu o altă copie din rândul, coloana, blocul, diagonala sau cușca
lor apar în roșu, la fel ca o cușcă ale cărei cifre nu dau suma ei. **Indiciu** completează
o căsuță — cea mai ușoară rămasă liberă sau prima cifră care contrazice soluția — și îți
lasă restul; puzzle-ul rămâne în joc, iar cu câteva indicii victoria și creditul ei rămân
tot ale tale. **Rezolvă** completează toată soluția și încheie puzzle-ul.

### Mouse și atingere

- **Dă clic stânga** pe o căsuță goală ca s-o selectezi, apoi folosește tastele de pe ecran
  ca să scrii o cifră (tastele cu litere sunt cifrele de peste 9). Dacă dai clic din nou pe
  căsuța selectată, o deselectezi.
- **⌫** de pe taste golește din nou căsuța selectată, iar **✎** activează notițele, așa că
  ce alegi în continuare intră ca o mică însemnare, nu ca răspuns.
- **Dă clic dreapta** pe o căsuță ca s-o selectezi direct pentru **notițe**. Notițele sunt
  doar un ajutor pentru gândire; jocul nu ține cont de ele, iar completarea unei cifre le
  șterge.
- **Notițe** din meniul de pauză umple fiecare căsuță goală cu setul complet de
  notițe, pentru cei cărora le place să pornească de la toate variantele și să taie
  candidații.
- **Evidențiază** (lupa de lângă Anulează) scoate în evidență fiecare căsuță care are
  aceeași cifră ca ultima căsuță pe care ai dat clic, inclusiv cifrele date, și arată acea
  cifră îngroșat printre notițe. Apasă-l din nou ca să-l oprești.

### Tastatură (Keyboard)

- **Tastează o cifră** (sau o literă pentru cifrele de peste 9) ca să completezi căsuța
  selectată.
- **Space** sau **Backspace** golește căsuța selectată (cifra ei sau toate notițele).
- **Tastele săgeți** mută un cursor de tastatură. **Enter** comută cursorul între
  introducerea normală și notițe, iar cifrele tastate intră în căsuța de sub el.
- **M** este butonul **Notițe**, iar **L** butonul **Evidențiază**.

## Parametri

- **Coloane de sub-blocuri** și **Rânduri de sub-blocuri**: grila e atât de mare cât
  produsul lor, iar fiecare bloc are lățimea egală cu numărul de rânduri și înălțimea egală
  cu numărul de coloane. În modul jigsaw, produsul este pur și simplu mărimea grilei.
- **X**, **Jigsaw** și **Killer** activează variantele descrise mai sus. Puzzle-urile
  Killer sunt limitate la grile de cel mult nouă cifre.
- **Simetrie**: cum se oglindește modelul indicațiilor. Mai multă simetrie arată mai
  frumos, dar tinde să lase mai multe indicații decât ar fi strict necesar.
- **Dificultate**: cel mai greu tip de raționament pe care îl cere puzzle-ul. _Foarte ușor_
  și _Ușor_ au mereu o căsuță care se poate completa direct; _Mediu_ îți cere să judeci unde
  poate sta o cifră într-un bloc și o linie; _Greu_ cere grupuri de căsuțe care împreună își
  împart un set de cifre; _Expert_ adaugă lanțuri de implicații; iar puzzle-urile _Extrem_
  nu pot fi terminate fără încercări și reveniri.
  Puzzle-urile grele se generează mai greu.
`,ve=e({default:()=>ye}),ye=`# Corturi

Grila este un camping: unele căsuțe au copaci, iar restul sunt teren liber. Instalează
corturi pe căsuțele libere astfel încât:

- să fie exact atâtea corturi câți copaci;
- fiecare copac să poată fi împerecheat cu propriul cort, pe o căsuță chiar lângă el
  (deasupra, dedesubt, la stânga sau la dreapta — nu în diagonală). Un cort poate sta
  întâmplător și lângă alți copaci, dar fiecare cort aparține unui singur copac și fiecare
  copac unui singur cort;
- două corturi să nu se atingă, nici măcar într-un colț;
- numerele de pe marginile din dreapta și de jos să dea numărul de corturi de pe fiecare
  rând și coloană.

Indicațiile sunt doar numărătorile, așa că tot puzzle-ul constă în a deduce unde trebuie
să fie corturile. Fiecare puzzle de aici se poate rezolva doar prin raționament, fără să
ghicești.

## Comenzi

Corturile care se ating apar în roșu, cu un semn pe latura sau colțul comun, la fel ca
orice grup de corturi cu prea puțini copaci între ei sau orice grup de copaci care nu mai
are loc pentru toate corturile lui. O indicație devine gri când linia ei are numărul corect
de corturi și roșie când nu mai poate fi respectată. **Rezolvă** pune toate corturile în
locul tău.

### Mouse și atingere

- **Dă clic** pe o căsuță liberă ca să instalezi un cort acolo; dă clic din nou pe cort ca
  să-l scoți.
- **Dă clic dreapta** pe o căsuță liberă ca s-o marchezi cu iarbă, adică ești sigur că
  acolo nu vine niciun cort; dă clic dreapta din nou ca s-o golești. Atât un clic, cât și
  un clic dreapta golesc o căsuță care are deja ceva.
- **Trage cu butonul drept** de-a lungul unui rând sau al unei coloane ca să transformi
  dintr-odată în iarbă fiecare căsuță liberă peste care treci — util ca să închei o linie
  după ce i-ai pus toate corturile. Corturile și marcajele existente rămân neatinse.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor.
- **Enter** instalează sau scoate un cort sub cursor.
- **Space** marchează sau șterge iarba de sub cursor.

## Parametri

- **Lățime** și **Înălțime** ale grilei, între 4 și 20 de căsuțe.
- **Dificultate**: puzzle-urile _Ușor_ cedează la numărat și la privit ce îi trebuie
  fiecărui copac și cort. Puzzle-urile _Dificil_ îți cer în plus să cântărești cum
  așezările posibile de pe o linie le limitează pe cele vecine și să te gândești ce căsuțe
  pot împărți copacii între ei.
`,be=e({default:()=>xe}),xe=`# Turnuri

Fiecare căsuță a grilei primește un turn, cu o înălțime de la 1 până la mărimea grilei.
Fiecare rând și fiecare coloană trebuie să conțină fiecare înălțime exact o dată.
Numerele de pe margine îți spun câte turnuri ai vedea privind în acel rând sau coloană din
partea respectivă: un turn ascunde fiecare turn mai scund din spatele lui. O indicație
egală cu mărimea grilei înseamnă că înălțimile cresc de-a lungul întregii linii; o
indicație 1 înseamnă că turnul cel mai înalt stă chiar la acea margine.

Puzzle-urile mai mari și mai grele încep cu câteva turnuri deja construite și lasă deoparte
unele indicații de pe margine. Cifrele care se ciocnesc cu altele din rândul sau coloana
lor, precum și indicațiile pe care turnurile construite până acum nu le mai pot respecta,
apar în roșu. Puzzle-ul este mai cunoscut sub numele de Skyscrapers (Zgârie-nori).

## Comenzi

Turnurile date nu pot fi schimbate, iar **Rezolvă** completează soluția.

### Mouse și atingere

- **Dă clic stânga** pe o căsuță ca s-o selectezi, apoi folosește tastele de pe ecran ca
  să construiești un turn de acea înălțime. **⌫** de pe taste golește din nou căsuța.
- **✎** de pe taste activează **notițele**: ce alegi intră atunci ca o mică însemnare,
  căsuța rămâne selectată ca să poți adăuga mai multe, iar aceeași cifră încă o dată o
  șterge. Completarea unei cifre adevărate șterge notițele din acea căsuță.
- **Dă clic dreapta** pe o căsuță ca s-o selectezi direct pentru notițe.
- **Notițe** din meniul de pauză umple fiecare căsuță goală cu setul complet de
  notițe.
- **Evidențiază** (lupa de lângă Anulează) scoate în evidență fiecare căsuță care are
  aceeași înălțime ca ultima căsuță pe care ai dat clic și arată acea înălțime îngroșat
  printre notițe. Apasă-l din nou ca să-l oprești.

### Tastatură (Keyboard)

- **Tastează o cifră** ca să construiești un turn de acea înălțime în căsuța selectată.
  **Space** sau **Backspace** o golește.
- **Tastele săgeți** mută un cursor de tastatură. **Enter** îl comută între modul cifră și
  modul notițe; cifrele se scriu în căsuța evidențiată, iar cursorul rămâne pe loc.
- **M** este butonul **Notițe**, iar **L** butonul **Evidențiază**.

## Parametri

- **Mărimea grilei** — de la 3 la 9. Turnurile se introduc ca o singură cifră, de aceea
  limita este 9.
- **Dificultate** — puzzle-urile Ușor cer doar consecințele directe ale fiecărei indicații
  și ale regulilor pentru rânduri și coloane. Puzzle-urile Greu îți cer să iei în calcul
  fiecare aranjament permis de o indicație și să observi grupuri de căsuțe care își împart
  câțiva candidați. Expert adaugă raționamente mai grele pe grupuri și lanțuri de
  implicații, iar puzzle-urile Extrem nu pot fi terminate fără câteva încercări, deși
  soluția rămâne unică.
`,Se=e({default:()=>Ce}),Ce=`# Șine

O cale ferată intră în grilă prin stânga și iese prin partea de jos; ambele capete apar ca
șine care ies de pe tablă. Completează linia dintre ele. Traseul este un singur drum, fără
ramificații, bucle sau încrucișări, construit doar din bucăți drepte și curbe de un sfert
de cerc, așa că fiecare căsuță prin care trece are exact două șine care ies din ea. Câteva
bucăți sunt deja puse pe căsuțe umbrite și nu pot fi schimbate. Numărul de deasupra
fiecărei coloane și de lângă fiecare rând spune prin câte căsuțe ale acelei linii trece
traseul terminat.

Numerele devin gri când linia lor are numărul corect de căsuțe cu șine și roșii când linia
nu mai poate ieși: prea multe căsuțe cu șine sau atâtea căsuțe tăiate încât nu mai rămâne
destul loc. Căsuțele în care șinele se întâlnesc greșit (trei șine într-o căsuță, o buclă
închisă sau șine rămase după ce intrarea și ieșirea au fost unite) apar și ele în roșu.

## Comenzi

**Rezolvă** pune tot traseul, eliminând orice marcaj de-al tău care îl contrazice.
Puzzle-ul e terminat când un singur traseu neîntrerupt leagă intrarea de ieșire și toate
numerele sunt respectate.

### Mouse și atingere

- **Trage** printr-un șir de căsuțe vecine ca să pui șine între ele. Drumul poate coti;
  o tragere care urmează doar șine deja existente le ridică în schimb.
- **Dă clic** lângă latura unei căsuțe ca să adaugi sau să scoți o singură șină prin acea
  latură. Dă clic pe mijlocul unei căsuțe ca s-o marchezi cu „traseul trece pe aici”, fără
  să spui prin ce laturi — util la numărat — și dă clic din nou ca să ștergi marcajul.
- **Dă clic dreapta** lângă o latură ca să desenezi o bară scurtă care înseamnă „aici nu e
  șină”; dă clic dreapta pe mijlocul unei căsuțe ca s-o tai de tot.
  **Trage cu butonul drept** de-a lungul unui rând sau al unei coloane ca să tai (sau să anulezi tăierea) mai multor căsuțe deodată.
- **Șterge** (butonul cu radieră de lângă Anulează) face ca un clic sau o tragere să
  golească complet căsuțele: fiecare căsuță atinsă își pierde șinele, barele „aici nu e
  șină” și marcajul sau tăietura. Piesele date rămân. Apasă-l din nou ca să revii la pus
  șine.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor care se oprește pe căsuțe și pe laturile dintre ele.
  **Enter** acționează ca un clic la cursor, iar **Space** ca un clic dreapta.
- **E** este butonul **Șterge**.

## Parametri

- **Lățime** și **Înălțime** ale grilei, cel puțin patru fiecare.
- **Dificultate**: puzzle-urile _Ușor_ cedează dacă privești o singură căsuță sau o
  singură linie odată. Puzzle-urile _Dificil_ îți cer în plus să te gândești unde ar putea
  ajunge ultima căsuță cu șine a unei linii și la capetele libere de șină care trebuie
  continuate de-a lungul sau de-a curmezișul unei linii. Fiecare puzzle are exact o
  soluție.
- **Interzice indicații 1 consecutive**: când e activ (implicit), nicio pereche de linii
  vecine nu are amândouă indicația 1, și nici coloana de intrare sau rândul de ieșire nu o
  au. Astfel traseul nu merge pe linii drepte lungi și plictisitoare de-a lungul marginii.
`,we=e({default:()=>Te}),Te=`# Rotiri

O grilă de piese numerotate a fost amestecată prin rotirea unor blocuri pătrate de piese.
Rotește-le înapoi până când numerele se citesc în ordine, de la stânga la dreapta și de
sus în jos. În jocul de bază, fiecare mutare rotește un bloc 2×2 cu un sfert de tură în
jurul punctului în care se întâlnesc cele patru piese; setările mai mari rotesc blocuri de
3×3 sau chiar mai mari.

În variantele **cu orientare**, fiecare piesă poartă un triunghi, iar puzzle-ul se
consideră terminat doar când toate triunghiurile arată în sus. În varianta **doar
rânduri**, piesele poartă în schimb numărul rândului lor, așa că toți de 1 trebuie doar să
ajungă pe primul rând, toți de 2 pe al doilea și așa mai departe.

## Comenzi

**Rezolvă** pune imediat fiecare piesă la locul ei. Nu îți arată un drum, dar e o cale
rapidă de a obține o grilă curată pe care să exersezi o succesiune de rotiri.

### Mouse și atingere

- **Dă clic** în centrul unui bloc ca să-l rotești în sens invers acelor de ceasornic;
  **dă clic dreapta** ca să-l rotești în sensul acelor de ceasornic. La blocurile 2×2,
  centrul este colțul în care se întâlnesc patru piese; la blocurile de mărime impară este
  piesa din mijloc. Un clic mai spre marginea grilei rotește blocul lipit de acea margine.
- **Orar** (butonul cu săgeată circulară de lângă Anulează) inversează cele două sensuri:
  un clic rotește blocurile în sensul acelor de ceasornic, iar un clic dreapta în sens invers.
  Apasă-l din nou ca să revii.

### Tastatură (Keyboard)

- **Tastele săgeți** mută pe grilă un contur de mărimea unui bloc. **Enter** rotește
  blocul conturat în sens invers acelor de ceasornic, iar **Space** în sensul acelor de
  ceasornic.
- **A**, **B**, **C** și **D** rotesc în sens invers acelor de ceasornic blocurile din
  colțul stânga-sus, dreapta-sus, stânga-jos și dreapta-jos; ține apăsat **Shift** pentru
  sensul acelor de ceasornic.
- **T** este butonul **Orar**.

## Parametri

- **Lățime** și **Înălțime** ale grilei.
- **Mărimea blocului rotativ**: latura blocului pătrat pe care îl rotește o mutare (cel
  puțin 2 și nu mai mare decât grila).
- **Un număr pe rând**: o variantă mai ușoară în care toate piesele de pe un rând au
  același număr.
- **Orientarea contează**: piesele primesc triunghiuri și trebuie toate să ajungă cu
  vârful în sus.
- **Număr de mutări de amestecare**: lasă 0 pentru o amestecare temeinică sau dă un număr
  mic ca să obții o grilă aflată la exact atâtea rotiri de soluție. Scopul tău este atunci
  să găsești acele rotiri și să le anulezi, așa că o amestecare de trei mutări merită un
  răspuns de trei mutări (deși uneori poate exista un drum mai scurt).
`,Ee=e({default:()=>De}),De=`# Strigoi

Grila este o sală a oglinzilor bântuită. Fiecare căsuță fără oglindă ascunde unul din trei
monștri: o **fantomă**, un **vampir** sau un **zombi**. Legenda de deasupra grilei îți spune
câți din fiecare mai sunt de pus, iar numărul din fiecare poziție de pe margine spune câți
monștri ai vedea privind în grilă de acolo, urmând linia privirii pe măsură ce se reflectă
în oglinzile diagonale.

Oglinzile schimbă ce poți vedea. Un vampir nu are reflexie, așa că e numărat doar cât timp
linia privirii nu a întâlnit încă o oglindă. O fantomă e opusul: invizibilă când e privită
direct, apare doar după o reflexie. Un zombi se vede întotdeauna. Dacă o linie a privirii
trece de două ori prin aceeași căsuță, monstrul de acolo e numărat de fiecare dată când
este vizibil. Pune toți monștrii astfel încât fiecare număr de pe margine și fiecare total
să fie corecte.

## Comenzi

Un număr de pe margine devine gri când linia lui a privirii e complet explicată și roșu
când nu mai poate fi respectat; un număr din legendă devine roșu când ai pus prea mulți
monștri de acel fel. Notițele sunt doar pentru însemnările tale și nu influențează
niciodată puzzle-ul.

### Mouse și atingere

- **Dă clic stânga** pe o căsuță goală ca s-o treci prin fantomă, vampir, zombi și înapoi
  la gol. Căsuța rămâne evidențiată.
- Tastele de pe ecran aleg direct un monstru pentru căsuța evidențiată, fără să treci prin
  ceilalți; **⌫** golește căsuța, inclusiv notițele.
- **✎** de pe taste activează **notițele**: monstrul ales este atunci adăugat în (sau scos
  din) lista de candidați a căsuței.
- **Dă clic dreapta** pe o căsuță ca să adaugi notițe câte un candidat pe rând (fantomă,
  apoi vampir, apoi zombi, apoi golire).
- **Vedere** (ochiul de lângă Anulează) desenează liniile de vedere prin căsuța evidențiată,
  frânte în oglinzi, și încercuiește numerele de pe margine de la ambele capete ale
  fiecăreia. Cât e activ, un clic pe un număr de pe margine urmărește linia acelui număr;
  dă clic din nou ca s-o lași. Apasă din nou **Vedere** ca să-l oprești. Cât e activ,
  un clic pe o căsuță neevidențiată doar o evidențiază, ca să urmărești o căsuță goală
  fără s-o umpli; dă clic din nou ca s-o schimbi ca de obicei.

### Tastatură (Keyboard)

- Tastele săgeți mută evidențierea. Enter schimbă monstrul din căsuța evidențiată; Space
  schimbă notițele ei.
- \`G\`, \`V\`, \`Z\` (sau \`1\`, \`2\`, \`3\`) pun acel monstru în căsuța evidențiată sau îi comută
  notița când evidențierea e în modul notițe. \`E\`, \`0\`, Backspace sau Delete golesc
  căsuța, inclusiv notițele.
- \`S\` este butonul **Vedere**.

## Parametri

- **Lățime**, **Înălțime** — mărimea grilei, de la 3×3 până la 54 de căsuțe în total.
- **Dificultate** — puzzle-urile _Ușor_ cedează dacă numeri de-a lungul unei singure linii
  a privirii odată; cele _Normal_ îți cer să cântărești combinațiile permise de un drum
  întreg; puzzle-urile _Dificil_ nu pot fi terminate fără să încerci o ipoteză.
`,Oe=e({default:()=>ke}),ke=`# Inegal

Umple grila astfel încât fiecare rând și fiecare coloană să conțină fiecare cifră de la 1
până la mărimea grilei exact o dată — un pătrat latin — respectând semnele desenate între
căsuțele vecine.

În modul **Inegal**, semnele sunt simboluri „mai mare decât”: partea deschisă a lui \`>\`
este spre cifra mai mare, iar vârful spre cea mai mică. Nu fiecare pereche de vecine are
un semn, iar cu cât puzzle-ul e mai greu, cu atât sunt mai puține semne.

În modul **Alăturat**, semnele sunt bare scurte care înseamnă că cele două cifre diferă cu
exact unu (ca 3 și 4). Aici fiecare bară este mereu afișată, așa că și **lipsa** unei bare
între două căsuțe este o indicație: acele două cifre sigur nu sunt consecutive.

Puzzle-ul apare prin ziare sub numele Futoshiki.

## Comenzi

Cifrele care încalcă o regulă — o repetare pe rând sau coloană sau un semn nerespectat —
apar în roșu, la fel și semnul în cauză. Puzzle-ul e complet când fiecare căsuță e
completată și nimic nu e roșu.

### Mouse și atingere

- **Dă clic stânga** pe o căsuță ca s-o selectezi, apoi folosește tastele de pe ecran ca
  să scrii o cifră. **⌫** de pe taste golește din nou căsuța selectată. Dacă dai clic din
  nou pe căsuța selectată, o deselectezi.
- **✎** de pe taste activează **notițele**: ce alegi este atunci adăugat în (sau scos din)
  o mică listă de posibilități din căsuță, în loc să fie răspunsul. Completarea unei
  căsuțe îi șterge notițele.
- **Dă clic dreapta** pe o căsuță ca s-o selectezi direct pentru notițe.
- **Notițe** din meniul de pauză umple fiecare căsuță goală cu toate notițele posibile, gata
  să le tai; **Indiciu** (becul de lângă Anulează) face același lucru, dar lasă deoparte
  variantele pe care un raționament simplu le exclude deja.
- **Evidențiază** (lupa de lângă Anulează) scoate în evidență fiecare căsuță care are
  aceeași cifră ca ultima căsuță pe care ai dat clic, inclusiv cifrele date, și arată acea
  cifră îngroșat printre notițe. Apasă-l din nou ca să-l oprești.

### Tastatură (Keyboard)

- **Tastează o cifră** ca să completezi căsuța selectată; \`0\`, Space sau Backspace o
  golesc.
- Tastele săgeți mută un cursor pe grilă; Enter comută cursorul între scrierea cifrelor și
  notițe.
- \`M\` este butonul **Notițe**, \`H\` este **Indiciu**, iar \`L\` este **Evidențiază**.

## Parametri

- **Mod** — Inegal (semne „mai mare decât”) sau Alăturat (bare între cifre consecutive).
- **Mărime** — numărul de rânduri și coloane, de la 3 la 9.
- **Dificultate** — cât raționament cere puzzle-ul. Puzzle-urile **Foarte ușor** nu au niciodată
  nevoie de semne: în modul Inegal nu au deloc semne și sunt simple pătrate latine, iar în modul
  Alăturat barele sunt desenate, dar cifrele date sunt de ajuns singure. Puzzle-urile **Ușor** cer
  doar sensul direct al fiecărui semn; cele **Mediu** îți cer să iei în calcul grupuri de căsuțe
  împreună; cele **Greu** adaugă raționamente pe grupuri după poziție și lanțuri de implicații;
  puzzle-urile **Extrem** (disponibile din dialogul Personalizat…) pot cere încercări, deși soluția
  rămâne unică.
`,Ae=e({default:()=>je}),je=`# Rebel

Colorează fiecare căsuță a grilei fie în negru, fie în alb. Unele căsuțe sunt date ca
indicații și nu pot fi schimbate; restul încep gri și sunt ale tale de completat. Când ai
terminat, trebuie respectate trei lucruri:

- fiecare rând conține tot atâtea căsuțe negre câte albe;
- fiecare coloană conține tot atâtea căsuțe negre câte albe;
- nicio secvență de trei căsuțe consecutive pe un rând sau o coloană nu are aceeași
  culoare.

Greșelile apar în roșu: o secvență de trei sau mai multe căsuțe egale primește un chenar
roșu, iar o căsuță poartă un **!** roșu când rândul sau coloana ei are deja prea multe
căsuțe de acea culoare. În varianta opțională „rânduri și coloane unice”, două rânduri nu
pot avea același model (și nici două coloane); liniile identice sunt tăiate cu roșu.

## Comenzi

Căsuțele-indicație — cele desenate cu un mic chenar în interior — nu pot fi schimbate.
**Rezolvă** completează toată grila. Puzzle-ul e terminat când fiecare căsuță e colorată
și nimic nu apare în roșu.

### Mouse și atingere

- **Dă clic** pe o căsuță gri ca s-o faci neagră; dă clic din nou pentru alb și încă o
  dată ca s-o golești.
- **Un clic dreapta** schimbă în ordinea inversă: alb, apoi negru, apoi gol.
- **Un clic de mijloc** golește direct o căsuță.
- **Șterge** (butonul cu radieră de lângă Anulează) face ca un clic să golească o căsuță în
  loc s-o coloreze. Apasă-l din nou ca să revii la colorat.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor pe grilă.
- **Enter** schimbă căsuța de sub cursor ca un clic, iar **Space** ca un clic dreapta.
- **1** pune negru, **0** (sau **2**) pune alb, iar **Backspace** golește.
- **E** este butonul **Șterge**.

## Parametri

- **Lățime** și **Înălțime** ale grilei. Amândouă trebuie să fie pare și cel puțin 6.
- **Rânduri și coloane unice**: când e activat, două rânduri nu pot fi identice și nici
  două coloane (un rând poate totuși să semene cu o coloană). Grilele foarte înalte sau
  foarte late sunt refuzate în acest mod, pentru că nu există destule linii diferite.
- **Dificultate**: puzzle-urile _Ușor_ cer doar două argumente imediate — două căsuțe
  egale obligă căsuța de lângă sau dintre ele să fie de cealaltă culoare, iar o linie care
  are deja partea ei dintr-o culoare primește cealaltă culoare peste tot în rest.
  Puzzle-urile _Normal_ îți cer în plus să judeci unde mai poate sta ultima căsuță de o
  culoare pe o linie fără să creeze o secvență de trei. Fiecare puzzle are exact o
  soluție.
`,Me=e({default:()=>Ne}),Ne=`# Descâlcește

Câteva puncte sunt unite prin linii drepte, iar liniile sunt încâlcite. Mută punctele până
când nicio pereche de linii nu se mai încrucișează. Orice puzzle se poate descâlci:
calculatorul a construit graful dintr-o așezare fără încrucișări și apoi a amestecat
punctele pe un cerc.

Liniile care încrucișează în acest moment o altă linie sunt desenate cu roșu, așa că
încâlceala se micșorează vizibil pe măsură ce lucrezi; puzzle-ul e rezolvat când nu mai
rămâne nimic roșu. Rezolvă mută fiecare punct într-o așezare despre care calculatorul știe
că merge.

## Comenzi

Anulează retrage orice mutare, inclusiv Rezolvă.

### Mouse și atingere

- **Trage** un punct și lasă-l unde vrei. Punctul apucat devine portocaliu, iar vecinii lui
  albaștri. Dacă lași un punct pe margine, el ajunge la marginea tablei; dacă îl lași cu
  totul în afara zonei de joc, tragerea se anulează.
- **Aliniere** (butonul cu grilă de lângă Anulează) pornește și oprește o grilă de aliniere:
  punctele lăsate ajung atunci în centrele căsuțelor grilei marcate cu puncte palide, exact
  cum este așezată și soluția. Butonul rămâne aprins cât timp grila e pornită.

### Tastatură (Keyboard)

- **Tastele săgeți** mută un cursor de la un punct la altul în acea direcție. **Enter** sau
  **Space** ridică punctul; tastele săgeți îl poartă apoi (o optime de căsuță la fiecare
  apăsare de tastă, o căsuță întreagă cu Shift, un singur pas cu Ctrl), iar **Enter** sau
  **Space** îl lasă jos.
- \`G\` este butonul **Aliniere**.

## Parametri

- **Număr de puncte**: câte puncte are graful, cel puțin 4. Mai multe puncte înseamnă mai
  multe linii și o încâlceală mai grea. Tabla crește odată cu numărul de puncte, ca să fie
  mereu loc să le întinzi.
`,Pe=e({$dir:()=>`ltr`,$locale:()=>`ro`,$name:()=>q,default:()=>Fe,games:()=>Q,messages:()=>X,status:()=>Z,touchPhrases:()=>Y,tutorials:()=>$,ui:()=>J}),q=`Română`,J=JSON.parse(`{"appName":"Puzzlebox","menu":{"title":"Puzzlebox","tagline":"{n} puzzle-uri de logică desenate de mână. Alege unul și joacă.","lockedNote":"Fiecare puzzle terminat singur îți aduce un credit. Cheltuiește creditele aici ca să deblochezi puzzle-uri noi.","language":"Limbă","stat":{"credits":{"one":"★ {n} credit","few":"★ {n} credite","other":"★ {n} de credite"},"unlocked":"{n} din {total} deblocate","solved":"{n} rezolvate","tight":{"credits":"★ {n}","unlocked":"{n}/{total}","solved":"✓ {n}","achievements":"{n}/{total}"},"achievements":"{n} din {total} realizări"},"search":{"placeholder":"Caută puzzle-uri","label":"Caută puzzle-urile după nume","clear":"Șterge căutarea","empty":"Niciun puzzle nu se numește „{q}”. Încearcă alt nume."},"hint":{"allOpen":"Totul este deblocat.","complete":"Ai deblocat toată colecția!","spend":{"one":"Cheltuiește creditul mai jos ca să deblochezi un puzzle.","few":"Cheltuiește un credit mai jos ca să deblochezi puzzle-uri.","other":"Cheltuiește un credit mai jos ca să deblochezi puzzle-uri."},"earn":"Termină singur orice puzzle ca să câștigi un credit."},"card":{"label":"{name}: {description}","labelLocked":"{name}: {description} (blocat)","labelAlias":"{name} (cunoscut și ca {alias}): {description}","labelLockedAlias":"{name} (cunoscut și ca {alias}): {description} (blocat)","solvedTag":"✓ rezolvat ×{n}","unlock":"Deblochează · 1 credit","unlocked":"{name} a fost deblocat!"},"noCredit":"Rezolvă singur orice puzzle ca să câștigi un credit, apoi revino să-l deblochezi pe acesta.","surprise":"Surprinde-mă: deschide un puzzle la întâmplare","privacy":{"note":"Puzzlebox numără cum sunt jucate puzzle-urile — niciodată cine le joacă — ca să le facă mai bune."},"continue":"Continuă","continueLabel":"Continuă {name}","spend":"Cheltuiește"},"notFound":{"title":"Puzzle inexistent","body":"Nu avem niciun puzzle numit „{slug}”.","back":"Înapoi la toate puzzle-urile"},"locked":"{name} este încă blocat. Câștigă un credit terminând un puzzle, apoi deblochează-l.","pageTitle":"{name} · Puzzlebox","topbar":{"back":"Toate puzzle-urile","help":"Ajutor","creditsTitle":"Creditele deblochează puzzle-uri noi. Termină singur un puzzle ca să câștigi unul.","boardLabel":"Tabla de joc {name}"},"toolbar":{"type":"Tip","custom":"Personalizat…","new":"Nou","newTitle":"Joc nou (N)","restart":"Reia","restartTitle":"Reia acest puzzle de la început","undo":"Anulează","undoTitle":"Anulează (U, Ctrl+Z)","redo":"Refă","redoTitle":"Refă (R, Ctrl+Y)","hint":"Indiciu","hintTitle":"Dezvăluie o căsuță și joacă mai departe. Cu cel mult {n} indicii câștigi totuși un credit.","solve":"Rezolvă","solveTitle":"Arată soluția (Ctrl+S)","gameId":"Distribuie","gameIdTitle":"Distribuie acest puzzle sau joacă unul primit de la cineva","more":"Mai mult","pause":"Pauză","pauseTitle":"Meniul de pauză (Esc)","keypad":"Taste","keypadTitle":"Afișează taste pe ecran","zoomOut":"−","zoomOutTitle":"Mai mic","zoomIn":"+","zoomInTitle":"Mai mare","tapPlace":"Apăsare: pune","tapMark":"Apăsare: marchează","tapTitle":"Ce face o apăsare simplă","tapPlaceTitle":"Apăsarea pune; apăsarea lungă marchează. Apasă ca să schimbi.","tapMarkTitle":"Apăsarea marchează; apăsarea lungă pune. Apasă ca să schimbi."},"pause":{"title":"În pauză","resume":"Continuă"},"pager":{"label":"Pagini","prev":"Pagina anterioară","next":"Pagina următoare","page":"Pagina {n} din {total}"},"badge":{"won":"Rezolvat!","lost":"Joc terminat"},"stage":{"generating":"Se pregătește un puzzle nou…"},"endgame":{"won":"Puzzle rezolvat!","lost":"Joc terminat","credit":"★ +1 credit — destul ca să deblochezi un puzzle nou din colecție.","wonNote":"Gata pentru următorul?","forfeitNote":"Acest puzzle nu îți aduce un credit — soluția a fost arătată pe parcurs.","lostNote":"De data asta nu a mers. Mai încerci o dată?","next":"Puzzle-ul următor","retry":"Încearcă din nou","dismiss":"Închide și privește tabla","time":"Timp","moves":"Mutări","hints":"Indiciu","best":"Cel mai bun {time}","newBest":"Record nou!","stars":"{n} din 3 stele","stepUp":"Încearcă {preset} →"},"keypad":{"label":"Taste","clear":"Șterge","clearTitle":"Golește căsuța selectată (Backspace)","pencil":"Notițe","pencilOnTitle":"Tastele scriu notițe. Apasă ca să scrii din nou răspunsuri.","pencilOffTitle":"Activează ca următoarele taste să scrie notițe"},"drawer":{"title":"Cum se joacă {name}","close":"Închide","replay":"▶ Reia tutorialul","achievements":"Realizări ({n}/{total})"},"dialog":{"ok":"OK","cancel":"Anulează","customTitle":"{name}: personalizat","gameIdTitle":"Distribuie acest puzzle","shareLead":"Trimite exact acest puzzle altcuiva.","copyLink":"Copiază linkul","linkCopied":"Link copiat","codes":"Coduri de puzzle","byDescription":"După descriere","bySeed":"După sămânța aleatorie","enterLabel":"Joacă un anumit puzzle: lipește un cod","play":"Joacă","copy":"Copiază","copied":"Copiat","link":"Link","linkTitle":"Copiază un link care deschide exact acest puzzle","linkPrompt":"Link către acest puzzle","hintAd":{"title":"Încă un indiciu?","body":"Ai folosit cele {n} indicii gratuite. Încă unul înseamnă că acest puzzle nu îți va aduce un credit — dacă nu te uiți la o reclamă scurtă ca să-l păstrezi.","watch":"Vezi o reclamă, păstrează creditul","anyway":"Ia indiciul oricum"},"badCode":"Codul acesta nu deschide un puzzle {name}. Verifică dacă a fost copiat în întregime."},"toast":{"creditEarned":"+1 credit","tutorialComplete":"Tutorial terminat. Iată un puzzle nou; termină-l singur ca să câștigi un credit.","tutorialCompleteBack":"Tutorial terminat. Înapoi la puzzle-ul tău.","tutorialSkipped":"Tutorial sărit. Îl poți relua oricând din Ajutor.","tapModeMark":"Apăsarea marchează. Apăsarea lungă face acțiunea principală.","tapModePlace":"Apăsarea face acțiunea principală. Apăsarea lungă marchează.","touchHint":"Apasă ca să joci, ține apăsat pentru a doua acțiune. Primul buton rotund le inversează.","hintNone":"Nu mai e nimic de dezvăluit pe această tablă.","hintNoCredit":"Ai depășit {n} indicii, așa că acest puzzle nu îți va aduce un credit — dar tabla rămâne a ta până la capăt.","hintAdFailed":"Nu a fost disponibilă nicio reclamă, așa că nu s-a schimbat nimic — indiciul te așteaptă dacă îl vrei.","stuck":"Te-ai blocat? Un indiciu dezvăluie o căsuță, iar puzzle-ul îți aduce totuși creditul."},"tutorial":{"label":"Tutorial {name}","step":"Pasul {n} din {total}","next":"Înainte","done":"Gata","skipStep":"Sari pasul","skipTutorial":"Sari tutorialul","nice":"Bravo!","offScript":"Nu aceea: mutarea a fost anulată, ca pașii să se potrivească în continuare cu tabla. Încearcă ce cere acest pas.","offScriptRead":"Mutarea a fost anulată, ca pașii să se potrivească în continuare cu tabla. Citește mai întâi acest pas.","pointer":{"drag":"trage","rightClick":"clic dreapta","rightDrag":"trage cu butonul drept","middleClick":"clic de mijloc","longPress":"apăsare lungă","longPressDrag":"ține apăsat și trage","twoFingerTap":"apăsare cu două degete"}},"splash":{"tagline":"Puzzle-uri desenate de mână, gata de joc","skip":"Sari"},"help":{"keypad":{"heading":"Tastele de pe ecran","introTouch":"Tastele de pe ecran scriu în locul tău","introPointer":"**Taste** din bara de instrumente afișează pe ecran taste care scriu în locul tău","select":": alege întâi o căsuță pe tablă, apoi apasă o tastă.","clear":"- **⌫** golește din nou căsuța aleasă.","pencil":"- **✎** activează notițele, așa că tastele scriu mici însemnări în loc de\\n  răspunsuri. Apasă-l din nou ca să revii la răspunsuri."}},"achievements":{"title":"Realizări","summary":"{n} din {total} obținute","unlocked":"Realizare deblocată","secret":{"name":"Realizare secretă","description":"Joacă mai departe ca s-o descoperi."},"earnedOn":"Obținută pe {date}","progress":"{n} din {goal}","collection":"Colecția","tier":{"bronze":"Bronz","silver":"Argint","gold":"Aur"},"meta":{"first-solve":{"name":"Primii pași","description":"Rezolvă primul tău puzzle cu mâna ta."},"solves-10":{"name":"Încălzirea","description":"Rezolvă 10 puzzle-uri."},"solves-50":{"name":"Prins de joc","description":"Rezolvă 50 de puzzle-uri."},"solves-100":{"name":"Centurionul","description":"Rezolvă 100 de puzzle-uri."},"solves-250":{"name":"Mare maestru","description":"Rezolvă 250 de puzzle-uri."},"specialist":{"name":"Specialistul","description":"Rezolvă 10 puzzle-uri din același joc."},"variety-3":{"name":"Degustător","description":"Rezolvă câte un puzzle în 3 jocuri diferite."},"variety-10":{"name":"Omul orchestră","description":"Rezolvă câte un puzzle în 10 jocuri diferite."},"variety-all":{"name":"Toată cutia","description":"Rezolvă câte un puzzle în fiecare joc din colecție."},"unlock-first":{"name":"Raft nou","description":"Deblochează primul tău joc cu un credit."},"unlock-15":{"name":"Colecție în creștere","description":"Ajunge la 15 jocuri deblocate."},"unlock-25":{"name":"Inel de chei","description":"Ajunge la 25 de jocuri deblocate."},"unlock-all":{"name":"Cheia universală","description":"Deblochează fiecare joc din colecție."},"hardest-1":{"name":"Provocare acceptată","description":"Rezolvă un puzzle la cea mai grea setare a unui joc."},"hardest-10":{"name":"Vânător de piscuri","description":"Rezolvă cea mai grea setare din 10 jocuri diferite."},"hardest-all":{"name":"De neclintit","description":"Rezolvă cea mai grea setare din fiecare joc."},"pure-1":{"name":"Foaie curată","description":"Rezolvă un puzzle fără nicio anulare și fără niciun indiciu."},"pure-25":{"name":"Mână sigură","description":"Rezolvă 25 de puzzle-uri fără nicio anulare și fără niciun indiciu."},"quick-draw":{"name":"Tras din toc","description":"Rezolvă un puzzle în cel mult 30 de secunde."},"marathon":{"name":"Maraton","description":"Rezolvă un puzzle după ce ai stat peste 20 de minute pe el."},"comeback":{"name":"Nu renunța","description":"Pierde un puzzle, apoi revino și rezolvă-l."},"second-thoughts":{"name":"Răzgândiri","description":"Anulează de 100 de ori și rezolvă totuși puzzle-ul."},"a-little-help":{"name":"Un mic ajutor","description":"Folosește un indiciu."},"oops":{"name":"Ups","description":"Pierde un puzzle."},"night-owl":{"name":"Pasăre de noapte","description":"Rezolvă un puzzle între miezul nopții și ora 5 dimineața."},"on-a-roll":{"name":"Pe val","description":"Rezolvă 5 puzzle-uri într-o singură sesiune."},"days-3":{"name":"Obișnuit al casei","description":"Joacă în 3 zile diferite."},"days-7":{"name":"Devotat","description":"Joacă în 7 zile diferite."},"days-30":{"name":"Parte din mobilier","description":"Joacă în 30 de zile diferite."},"quick-study":{"name":"Învățăcel isteț","description":"Parcurge un tutorial până la capăt."},"scholar":{"name":"Erudit","description":"Parcurge 10 tutoriale diferite până la capăt."},"collector-25":{"name":"Colecționar de insigne","description":"Obține 25 de realizări."},"collector-60":{"name":"Vitrina cu trofee","description":"Obține 60 de realizări."},"legend":{"name":"Legenda puzzle-urilor","description":"Obține toate celelalte realizări."}},"andMore":{"one":"{n} realizare deblocată","few":"{n} realizări deblocate","other":"{n} de realizări deblocate"}},"welcome":{"title":"Alege-ți primul puzzle","subtitle":{"one":"{n} puzzle pentru început. Alege-l și joacă.","few":"{n} puzzle-uri pentru început. Alege unul și joacă.","other":"{n} de puzzle-uri pentru început. Alege unul și joacă."},"more":{"one":"…și încă {n} de deblocat","few":"…și încă {n} de deblocat","other":"…și încă {n} de deblocat"},"how":"Fiecare puzzle rezolvat îți aduce un credit, iar fiecare credit deblochează un joc nou."},"gamepad":{"connected":"Controler conectat"},"settings":{"title":"Setări","done":"Gata","sound":"Sunet","volume":"Volum","reduceMotion":"Reduce mișcarea","vibration":"Vibrații","statistics":"Statistici de joc","on":"Da","off":"Nu","portalMuted":"Site-ul a oprit sunetul."}}`),Y=[[`tragerea cu butonul drept`,`tragerea după o apăsare lungă`],[`tragere cu butonul drept`,`tragere după o apăsare lungă`],[`trăgând cu butonul drept`,`ținând apăsat și trăgând`],[`trage cu butonul drept`,`ține apăsat și trage`],[`al doilea clic dreapta`,`a doua apăsare lungă`],[`dând clic dreapta`,`ținând apăsat`],[`dă clic dreapta`,`ține apăsat`],[`dai clic dreapta`,`ții apăsat`],[`da clic dreapta`,`ține apăsat`],[`un clic dreapta`,`o apăsare lungă`],[`clicul dreapta`,`apăsarea lungă`],[`clicurile dreapta`,`apăsările lungi`],[`clicuri dreapta`,`apăsări lungi`],[`clic dreapta`,`apăsare lungă`],[`butonul drept`,`apăsarea lungă`],[`dând clic de mijloc`,`apăsând cu două degete`],[`dă clic de mijloc`,`apasă cu două degete`],[`un clic de mijloc`,`o apăsare cu două degete`],[`clicul de mijloc`,`apăsarea cu două degete`],[`clic de mijloc`,`apăsare cu două degete`],[`butonul din mijloc`,`apăsarea cu două degete`],[`dând clic stânga`,`apăsând`],[`dă clic stânga`,`apasă`],[`dai clic stânga`,`apeși`],[`un clic stânga`,`o apăsare`],[`clicul stânga`,`apăsarea`],[`clic stânga`,`apăsare`],[`butonul stâng`,`apăsarea`],[`dă dublu clic`,`apasă de două ori`],[`un dublu clic`,`o apăsare dublă`],[`dublu clic`,`apăsare dublă`],[`al doilea clic`,`a doua apăsare`],[`primul clic`,`prima apăsare`],[`dând clic`,`apăsând`],[`dă clic`,`apasă`],[`dai clic`,`apeși`],[`da clic`,`apăsa`],[`un clic`,`o apăsare`],[`clicului`,`apăsării`],[`clicurile`,`apăsările`],[`clicuri`,`apăsări`],[`clicul`,`apăsarea`],[`clic`,`apăsare`]],X=JSON.parse(`{"4-way rotational symmetry needs a square grid":"Simetria de rotație de ordin 4 necesită o grilă pătrată","A 2×2 grid is too small to make a puzzle from":"O grilă de 2×2 e prea mică pentru a face un puzzle din ea","A cube rolling along a single row can never turn over all six faces":"Un cub care se rostogolește pe un singur rând nu își poate întoarce niciodată toate cele șase fețe","A given piece leaves the grid":"O piesă dată iese din grilă","A jigsaw block is too big":"Un bloc jigsaw este prea mare","A jigsaw block is too small":"Un bloc jigsaw este prea mic","A killer cage is too big":"O cușcă killer este prea mare","A killer cage is too small":"O cușcă killer este prea mică","A wrapping puzzle needs a width and height of at least 3 to have a unique solution":"Un puzzle circular are nevoie de lățime și înălțime de cel puțin 3 ca să aibă soluție unică","All parameters must be whole numbers":"Toți parametrii trebuie să fie numere întregi","Already solved":"Deja rezolvat","An edge cannot join a point to itself":"O muchie nu poate uni un punct cu el însuși","Angle offset out of bounds.":"Decalajul unghiului este în afara limitelor.","At least one grid dimension must be greater than zero":"Cel puțin o dimensiune a grilei trebuie să fie mai mare decât zero","At least one of width and height for this grid type must be at least {0}":"Pentru acest tip de grilă, cel puțin una dintre lățime și înălțime trebuie să fie de cel puțin {0}","At least one of width and height must be greater than one":"Cel puțin una dintre lățime și înălțime trebuie să fie mai mare decât unu","Bad character in grid description":"Caracter greșit în descrierea grilei","Bad mine layout in game description":"Așezare greșită a minelor în descrierea jocului","Badly formatted move limit after grid description":"Limită de mutări formatată greșit după descrierea grilei","Barrier probability must be a number between 0 and 1":"Probabilitatea barierelor trebuie să fie un număr între 0 și 1","Barrier probability must be between 0 and 1":"Probabilitatea barierelor trebuie să fie între 0 și 1","Blue cells are placed where some faces could never reach them":"Căsuțele albastre sunt puse unde unele fețe nu le-ar putea atinge niciodată","Both dimensions must be at least 2":"Ambele dimensiuni trebuie să fie de cel puțin 2","Both grid dimensions must be at least one":"Ambele dimensiuni ale grilei trebuie să fie de cel puțin unu","Bridges per direction must be between 1 and {0}":"Numărul de poduri pe direcție trebuie să fie între 1 și {0}","Can't create {0}×{1} puzzles":"Nu se pot crea puzzle-uri de {0}×{1}","Clue did not provide 2 direction flags":"Indicația nu a furnizat 2 indicatori de direcție","Clue is larger than the number of sides of its face":"Indicația e mai mare decât numărul de laturi ale feței ei","Clue is missing its number":"Indicației îi lipsește numărul","Clue number out of range":"Numărul indicației este în afara intervalului","Colour out of range":"Culoare în afara intervalului","Colour out of range in grid description":"Culoare în afara intervalului în descrierea grilei","Colours, pegs and guesses must be whole numbers":"Culorile, pionii și încercările trebuie să fie numere întregi","Column counts inconsistent":"Numărătorile pe coloane sunt inconsecvente","Could not four-colour the map":"Harta nu a putut fi colorată cu patru culori","Count is larger than the line it describes":"Numărătoarea e mai mare decât linia pe care o descrie","Description contains a duplicate number":"Descrierea conține un număr duplicat","Description contains a number larger than the grid":"Descrierea conține un număr mai mare decât grila","Description contains a number out of range":"Descrierea conține un număr în afara intervalului","Description contains a number that is too large":"Descrierea conține un număr prea mare","Description contains a repeated number":"Descrierea conține un număr repetat","Description contains an unexpected character":"Descrierea conține un caracter neașteptat","Description contains invalid characters":"Descrierea conține caractere nevalide","Description is corrupted":"Descrierea este coruptă","Description is longer than expected":"Descrierea este mai lungă decât era de așteptat","Description is shorter than expected":"Descrierea este mai scurtă decât era de așteptat","Description is too long":"Descrierea este prea lungă","Description is too short":"Descrierea este prea scurtă","Description marks cells beyond the grid as blue":"Descrierea marchează ca albastre căsuțe din afara grilei","Description may only contain P, H and O":"Descrierea poate conține doar P, H și O","Description must be a comma-separated list of numbers":"Descrierea trebuie să fie o listă de numere separate prin virgule","Description must be exactly {0} characters":"Descrierea trebuie să aibă exact {0} caractere","Description must be hex digits, a comma and a cell number":"Descrierea trebuie să fie cifre hexazecimale, o virgulă și numărul unei căsuțe","Description must be numbers each followed by an orientation letter (u, l, d or r)":"Descrierea trebuie să fie numere urmate fiecare de o literă de orientare (u, l, d sau r)","Description must be two hex strings separated by a comma":"Descrierea trebuie să fie două șiruri hexazecimale separate printr-o virgulă","Description must be {0} hexadecimal digits":"Descrierea trebuie să aibă {0} cifre hexazecimale","Description must contain at least one edge":"Descrierea trebuie să conțină cel puțin o muchie","Description must contain at least one peg":"Descrierea trebuie să conțină cel puțin un țăruș","Description must contain at least two islands":"Descrierea trebuie să conțină cel puțin două insule","Description must contain each number from 1 to {0} exactly once":"Descrierea trebuie să conțină fiecare număr de la 1 la {0} exact o dată","Description must contain each row number from 1 to {0} exactly {1} times":"Descrierea trebuie să conțină fiecare număr de rând de la 1 la {0} exact de {1} ori","Description must contain only digits":"Descrierea trebuie să conțină doar cifre","Description must contain only numbers":"Descrierea trebuie să conțină doar numere","Description must contain {0} numbers":"Descrierea trebuie să conțină {0} numere","Description must contain {0} tiles":"Descrierea trebuie să conțină {0} piese","Description must mark exactly {0} cells blue":"Descrierea trebuie să marcheze exact {0} căsuțe ca albastre","Description must start with {0} hex digits":"Descrierea trebuie să înceapă cu {0} cifre hexazecimale","Description places two islands next to each other":"Descrierea pune două insule una lângă alta","Description repeats a colour although duplicates are disallowed":"Descrierea repetă o culoare deși repetările nu sunt permise","Description too long":"Descriere prea lungă","Description too long for board size":"Descriere prea lungă pentru mărimea tablei","Description too short":"Descriere prea scurtă","Description too short for board size":"Descriere prea scurtă pentru mărimea tablei","Digits in a {0}×{1} puzzle cannot exceed {2}":"Cifrele dintr-un puzzle de {0}×{1} nu pot depăși {2}","Disallowing duplicates requires at least as many colours as pegs":"Interzicerea repetărilor necesită cel puțin atâtea culori câți pioni sunt","Domino descriptions inconsistent":"Descrierile pieselor de domino sunt inconsecvente","Dots too close together":"Punctele sunt prea apropiate","Duplicate edge in game description":"Muchie duplicată în descrierea jocului","Edge list defines the wrong number of regions":"Lista de muchii definește un număr greșit de regiuni","Entrance square must contain a piece leaving the left edge":"Căsuța de intrare trebuie să conțină o piesă care iese prin marginea stângă","Every killer cage must have exactly one sum":"Fiecare cușcă killer trebuie să aibă exact o sumă","Exit square must contain a piece leaving the bottom edge":"Căsuța de ieșire trebuie să conțină o piesă care iese prin marginea de jos","Expansion factor must be a number":"Factorul de extindere trebuie să fie un număr","Expansion factor may not be negative":"Factorul de extindere nu poate fi negativ","Expansion factor must be from 0 to 100":"Factorul de extindere trebuie să fie între 0 și 100","Expected ',' after block structure description":"Se aștepta ',' după structura blocurilor","Expected ',' after grid description":"Se aștepta ',' după descrierea grilei","Expected a list of edges like 0-1,1-2 in game description":"Se aștepta în descrierea jocului o listă de muchii de forma 0-1,1-2","Expected comma before clue list":"Se aștepta o virgulă înainte de lista de indicații","Expected jigsaw block structure in game description":"Se aștepta structura blocurilor jigsaw în descrierea jocului","Expected killer cage structure in game description":"Se aștepta structura cuștilor killer în descrierea jocului","Expected killer clue grid in game description":"Se aștepta grila de indicații killer în descrierea jocului","Expected slashes between clues":"Se așteptau bare oblice între indicații","Expecting number in game description":"Se aștepta un număr în descrierea jocului","Extra moves must not be negative":"Mutările suplimentare nu pot fi negative","Extreme puzzles with more than {0} symbols take too long to generate":"Puzzle-urile de nivel Extrem cu mai mult de {0} simboluri durează prea mult de generat","Faulty game description":"Descriere a jocului defectă","Flags contradicting each other":"Indicatori care se contrazic","Flags go off grid":"Indicatorii ies din grilă","Game ID must include parameters":"ID-ul jocului trebuie să includă parametrii","Game description contained unexpected characters":"Descrierea jocului conținea caractere neașteptate","Game description contains an unexpected character":"Descrierea jocului conține un caracter neașteptat","Game description contains no dots":"Descrierea jocului nu conține niciun punct","Game description contains unexpected characters":"Descrierea jocului conține caractere neașteptate","Game description has {0} balls; expected {1}":"Descrierea jocului are {0} bile; se așteptau {1}","Game description is corrupted":"Descrierea jocului este coruptă","Game description is longer than expected":"Descrierea jocului este mai lungă decât era de așteptat","Game description is shorter than expected":"Descrierea jocului este mai scurtă decât era de așteptat","Game description is the wrong length":"Descrierea jocului are o lungime greșită","Game description is too long":"Descrierea jocului este prea lungă","Game description is too short":"Descrierea jocului este prea scurtă","Game description is wrong length":"Descrierea jocului are lungime greșită","Game description longer than expected":"Descrierea jocului e mai lungă decât era de așteptat","Game description must be hexadecimal":"Descrierea jocului trebuie să fie hexazecimală","Game description shorter than expected":"Descrierea jocului e mai scurtă decât era de așteptat","Game description too long":"Descrierea jocului e prea lungă","Game is already solved":"Jocul este deja rezolvat","Grid area must be at least six squares":"Aria grilei trebuie să fie de cel puțin șase căsuțe","Grid area must be greater than 1":"Aria grilei trebuie să fie mai mare decât 1","Grid area must be greater than one":"Aria grilei trebuie să fie mai mare decât unu","Grid description is the wrong length or not hexadecimal":"Descrierea grilei are o lungime greșită sau nu este hexazecimală","Grid description strings not used with this grid type":"Acest tip de grilă nu folosește descrieri de grilă","Grid dimensions cannot be negative":"Dimensiunile grilei nu pot fi negative","Grid dimensions must be at most {0}":"Dimensiunile grilei trebuie să fie de cel mult {0}","Grid dimensions must be whole numbers":"Dimensiunile grilei trebuie să fie numere întregi","Grid is too big":"Grila este prea mare","Grid must contain at least two squares":"Grila trebuie să conțină cel puțin două căsuțe","Grid size must be between 3 and 9":"Mărimea grilei trebuie să fie între 3 și 9","Grid size must be between {0} and {1}":"Mărimea grilei trebuie să fie între {0} și {1}","Hard and Extreme puzzles are limited to a maximum number of {0}":"Puzzle-urile Greu și Extrem sunt limitate la un număr maxim de {0}","Height must be at least 3":"Înălțimea trebuie să fie de cel puțin 3","Height must be at least five":"Înălțimea trebuie să fie de cel puțin cinci","Height must be at least one":"Înălțimea trebuie să fie de cel puțin unu","Height must be at least the rotating block size":"Înălțimea trebuie să fie cel puțin cât mărimea blocului rotativ","Height must be at least two":"Înălțimea trebuie să fie de cel puțin doi","Illegal grid type":"Tip de grilă nepermis","Incorrect number balance in game description":"Echilibru incorect al numerelor în descrierea jocului","Initial x-coordinate was out of range":"Coordonata x inițială era în afara intervalului","Initial y-coordinate was out of range":"Coordonata y inițială era în afara intervalului","Internal error: solution is badly formatted":"Eroare internă: soluția este formatată greșit","Invalid character in block structure specification":"Caracter nevalid în specificația structurii blocurilor","Invalid character in game description":"Caracter nevalid în descrierea jocului","Invalid character in grid specification":"Caracter nevalid în specificația grilei","Invalid character in number list":"Caracter nevalid în lista de numere","Invalid characters in game description":"Caractere nevalide în descrierea jocului","Invalid format grid description string.":"Șir de descriere a grilei cu format nevalid.","Invalid parameters: {0}":"Parametri nevalizi: {0}","Invalid syntax in game description":"Sintaxă nevalidă în descrierea jocului","Jigsaw puzzles with more than {0} symbols take too long to generate":"Puzzle-urile Jigsaw cu mai mult de {0} simboluri durează prea mult de generat","Killer puzzle dimensions must be smaller than 10":"Dimensiunile unui puzzle killer trebuie să fie mai mici decât 10","Malformed pending game description":"Descriere de joc în așteptare formatată greșit","Matrix description is the wrong length or not hexadecimal":"Descrierea matricei are o lungime greșită sau nu este hexazecimală","Maximum face number must be a whole number":"Numărul maxim de pe fețe trebuie să fie un număr întreg","Maximum face number must be at least one":"Numărul maxim de pe fețe trebuie să fie de cel puțin unu","Maximum face number must be at most {0}":"Numărul maxim de pe fețe trebuie să fie de cel mult {0}","Maximum of 9 colours":"Maximum 9 culori","Medium puzzles need more than one bridge per direction, or loops disallowed":"Puzzle-urile de dificultate Mediu au nevoie de mai mult de un pod pe direcție sau de bucle interzise","Mines solver opened a mine: inconsistent knowledge":"Rezolvitorul Mine a deschis o mină: informații inconsecvente","Minimum number of balls may not be greater than maximum":"Numărul minim de bile nu poate fi mai mare decât cel maxim","Missing grid description string.":"Lipsește șirul de descriere a grilei.","Missing separator":"Lipsește separatorul","Monster numbers do not match grid spaces":"Numerele monștrilor nu se potrivesc cu căsuțele grilei","More than one starting square specified":"Sunt specificate mai multe căsuțe de start","Multiple solutions exist for this puzzle":"Acest puzzle are mai multe soluții","Must have at least five regions":"Trebuie să existe cel puțin cinci regiuni","Must have at least one guess":"Trebuie să existe cel puțin o încercare","Must have between {0} and {1} colours":"Trebuie să existe între {0} și {1} culori","No game set up to solve":"Niciun joc pregătit de rezolvat","No gems specified":"Nu sunt specificate pietre prețioase","No solution exists for this position":"Nu există soluție din această poziție","No solution exists for this puzzle":"Nu există soluție pentru acest puzzle","No solution found":"Nu s-a găsit nicio soluție","No starting square specified":"Nu este specificată nicio căsuță de start","Not enough data in block structure specification":"Date insuficiente în specificația structurii blocurilor","Not enough data in grid description":"Date insuficiente în descrierea grilei","Not enough data to fill grid":"Date insuficiente pentru a umple grila","Not enough grid space to place all blue faces":"Nu este destul spațiu în grilă pentru toate fețele albastre","Not enough jigsaw blocks":"Prea puține blocuri jigsaw","Not enough killer cages":"Prea puține cuști killer","Not enough numbers given after grid specification":"Prea puține numere date după specificația grilei","Not enough space to place the solid on an empty cell":"Nu este destul spațiu pentru a pune corpul pe o căsuță goală","Number of colours must be at least three":"Numărul de culori trebuie să fie de cel puțin trei","Number of colours must be at least two":"Numărul de culori trebuie să fie de cel puțin două","Number of points must be a whole number":"Numărul de puncte trebuie să fie un număr întreg","Number of points must be at least {0}":"Numărul de puncte trebuie să fie de cel puțin {0}","Number of points must be at most {0}":"Numărul de puncte trebuie să fie de cel mult {0}","Number of shuffling moves cannot be negative":"Numărul de mutări de amestecare nu poate fi negativ","Number of shuffling moves must be a whole number":"Numărul de mutări de amestecare trebuie să fie un număr întreg","Number of shuffling moves must be at most 10000":"Numărul de mutări de amestecare trebuie să fie de cel mult 10000","Number of shuffling moves must be at most {0}":"Numărul de mutări de amestecare trebuie să fie de cel mult {0}","Number out of range in game description":"Număr în afara intervalului în descrierea jocului","Number too large":"Număr prea mare","Out-of-range number in game description":"Număr în afara intervalului în descrierea jocului","Out-of-range number in grid description":"Număr în afara intervalului în descrierea grilei","Parameters must be whole numbers":"Parametrii trebuie să fie numere întregi","Patch coordinates do not identify a usable grid fragment":"Coordonatele fragmentului nu identifică o bucată de grilă utilizabilă","Patch offset out of bounds.":"Decalajul fragmentului este în afara limitelor.","Percentage of black squares must be between 5% and 100%":"Procentul de căsuțe negre trebuie să fie între 5% și 100%","Percentage of islands must be from 1% to 30%":"Procentul de insule trebuie să fie între 1% și 30%","Puzzle is inconsistent":"Puzzle-ul este inconsecvent","Puzzle is too large":"Puzzle-ul este prea mare","Puzzle is too long for unique-rows mode":"Puzzle-ul este prea lung pentru modul cu rânduri unice","Puzzle is too tall for unique-rows mode":"Puzzle-ul este prea înalt pentru modul cu rânduri unice","Puzzle is unsolvable":"Puzzle-ul nu are rezolvare","Puzzle must have one entrance and one exit":"Puzzle-ul trebuie să aibă o intrare și o ieșire","Puzzles with more than {0} symbols take too long to generate":"Puzzle-urile cu mai mult de {0} simboluri durează prea mult de generat","Random seed must not be empty":"Sămânța aleatorie nu poate fi goală","Rotating block size must be at least two":"Mărimea blocului rotativ trebuie să fie de cel puțin doi","Row counts inconsistent":"Numărătorile pe rânduri sunt inconsecvente","Rows of blocks must be at least 1":"Rândurile de blocuri trebuie să fie cel puțin 1","Scoring system not recognised":"Sistem de punctaj necunoscut","Size and difficulty must be whole numbers":"Mărimea și dificultatea trebuie să fie numere întregi","Size must be at least 5 for Adjacent puzzles of this difficulty":"Mărimea trebuie să fie de cel puțin 5 pentru puzzle-urile Alăturat de această dificultate","Size must be between {0} and {1}":"Mărimea trebuie să fie între {0} și {1}","Solution not known for this puzzle":"Soluția acestui puzzle nu este cunoscută","Solve operation failed":"Rezolvarea a eșuat","Solve operation produced an invalid move":"Rezolvarea a produs o mutare nevalidă","Solver could not finish this grid":"Rezolvitorul nu a putut termina această grilă","Solving algorithm cannot complete this puzzle":"Algoritmul de rezolvare nu poate termina acest puzzle","Starting cell is outside the grid":"Căsuța de start este în afara grilei","Subtraction and division blocks must have area 2":"Blocurile de scădere și împărțire trebuie să aibă aria 2","That grid has too many faces to generate":"Grila are prea multe fețe pentru a fi generată","The Cross board is only available at {0}×{1}":"Tabla Cruce este disponibilă doar la {0}×{1}","The Octagon board is only available at {0}×{1}":"Tabla Octogon este disponibilă doar la {0}×{1}","The ball has hit a mine; undo that move first":"Bila a lovit o mină; anulează întâi mutarea aceea","The grid can have at most {0} squares":"Grila poate avea cel mult {0} căsuțe","The grid may have at most {0} squares":"Grila poate avea cel mult {0} căsuțe","The initial square contains a mine":"Căsuța inițială conține o mină","The solid cannot start on a blue cell":"Corpul nu poate porni de pe o căsuță albastră","The solution has already been revealed":"Soluția a fost deja dezvăluită","There must be at least one ball":"Trebuie să existe cel puțin o bilă","There must be at least one mine":"Trebuie să existe cel puțin o mină","This arrangement cannot be solved":"Această așezare nu poate fi rezolvată","This game does not support the Solve operation":"Acest joc nu permite rezolvarea","This puzzle has no solution":"Acest puzzle nu are soluție","This puzzle instance contains a contradiction":"Acest puzzle conține o contradicție","This puzzle is not self-consistent":"Acest puzzle nu este coerent","Too few clues for block structure":"Prea puține indicații pentru structura blocurilor","Too few clues for grid size":"Prea puține indicații pentru mărimea grilei","Too little data in clue list":"Prea puține date în lista de indicații","Too little data in edge list":"Prea puține date în lista de muchii","Too many balls to fit in the grid":"Prea multe bile ca să încapă în grilă","Too many clues for block structure":"Prea multe indicații pentru structura blocurilor","Too many clues for grid size":"Prea multe indicații pentru mărimea grilei","Too many colours (at most {0})":"Prea multe culori (cel mult {0})","Too many colours makes given grid size impossible":"Prea multe culori fac imposibilă mărimea de grilă dată","Too many guesses (at most {0})":"Prea multe încercări (cel mult {0})","Too many jigsaw blocks":"Prea multe blocuri jigsaw","Too many killer cages":"Prea multe cuști killer","Too many mines for grid size":"Prea multe mine pentru mărimea grilei","Too many pegs per guess (at most {0})":"Prea mulți pioni pe încercare (cel mult {0})","Too many regions to fit in grid":"Prea multe regiuni ca să încapă în grilă","Too much data in block structure specification":"Prea multe date în specificația structurii blocurilor","Too much data in clue list":"Prea multe date în lista de indicații","Too much data in edge list":"Prea multe date în lista de muchii","Too much data to fill grid":"Prea multe date pentru a umple grila","Too much data to fit in grid":"Prea multe date ca să încapă în grilă","Trivial solutions are uninteresting":"Soluțiile banale nu sunt interesante","Unable to build a grid for these parameters":"Nu se poate construi o grilă pentru acești parametri","Unable to build this grid":"Nu se poate construi această grilă","Unable to find a solution for this puzzle":"Nu s-a găsit o soluție pentru acest puzzle","Unable to find a solution from this position":"Nu s-a găsit o soluție din această poziție","Unable to find a solution to this puzzle":"Nu s-a găsit o soluție pentru acest puzzle","Unable to find a unique solution for this puzzle":"Nu s-a găsit o soluție unică pentru acest puzzle","Unable to generate a puzzle of this size":"Nu se poate genera un puzzle de această mărime","Unable to generate a puzzle with these parameters":"Nu se poate genera un puzzle cu acești parametri","Unable to solve this puzzle":"Acest puzzle nu poate fi rezolvat","Unable to support more than {0} distinct symbols":"Nu sunt acceptate mai mult de {0} simboluri distincte","Unable to work out any more of this puzzle":"Nu se mai poate deduce nimic din acest puzzle","Unexpected additional character at end of game description":"Caracter suplimentar neașteptat la finalul descrierii jocului","Unexpected additional data at end of game description":"Date suplimentare neașteptate la finalul descrierii jocului","Unexpected character '{0}' in description":"Caracter neașteptat '{0}' în descriere","Unexpected character in clue list":"Caracter neașteptat în lista de indicații","Unexpected character in edge list":"Caracter neașteptat în lista de muchii","Unexpected data at end of game description":"Date neașteptate la finalul descrierii jocului","Unknown board type":"Tip de tablă necunoscut","Unknown character in description":"Caracter necunoscut în descriere","Unknown difficulty":"Dificultate necunoscută","Unknown difficulty level":"Nivel de dificultate necunoscut","Unknown difficulty rating":"Grad de dificultate necunoscut","Unknown shape type":"Tip de formă necunoscut","Unknown symmetry":"Simetrie necunoscută","Unknown symmetry type":"Tip de simetrie necunoscut","Unrecognised character in game description":"Caracter nerecunoscut în descrierea jocului","Unrecognised characters in game description":"Caractere nerecunoscute în descrierea jocului","Unrecognised clue type":"Tip de indicație nerecunoscut","Unrecognised grid description.":"Descriere de grilă nerecunoscută.","Unrecognised solid type":"Tip de corp nerecunoscut","Width and height cannot both be two":"Lățimea și înălțimea nu pot fi ambele doi","Width and height for this grid type must both be at least {0}":"Pentru acest tip de grilă, lățimea și înălțimea trebuie să fie ambele de cel puțin {0}","Width and height must be at least two":"Lățimea și înălțimea trebuie să fie de cel puțin doi","Width and height must be at least {0}":"Lățimea și înălțimea trebuie să fie de cel puțin {0}","Width and height must be at most twelve":"Lățimea și înălțimea trebuie să fie de cel mult doisprezece","Width and height must be at most {0}":"Lățimea și înălțimea trebuie să fie de cel mult {0}","Width and height must be at most {0} to generate a puzzle":"Lățimea și înălțimea trebuie să fie de cel mult {0} pentru a genera un puzzle","Width and height must be positive":"Lățimea și înălțimea trebuie să fie pozitive","Width and height must be whole numbers":"Lățimea și înălțimea trebuie să fie numere întregi","Width and height must both be at least 3":"Lățimea și înălțimea trebuie să fie ambele de cel puțin 3","Width and height must both be at least four":"Lățimea și înălțimea trebuie să fie ambele de cel puțin patru","Width and height must both be at least one":"Lățimea și înălțimea trebuie să fie ambele de cel puțin unu","Width and height must both be at least two":"Lățimea și înălțimea trebuie să fie ambele de cel puțin doi","Width and height must both be even":"Lățimea și înălțimea trebuie să fie ambele pare","Width and height must both be greater than three":"Lățimea și înălțimea trebuie să fie ambele mai mari decât trei","Width and height must both be greater than two":"Lățimea și înălțimea trebuie să fie ambele mai mari decât doi","Width and height must both be greater than zero":"Lățimea și înălțimea trebuie să fie ambele mai mari decât zero","Width and height must both be positive":"Lățimea și înălțimea trebuie să fie ambele pozitive","With three colours, a solvable grid may have at most {0} squares":"Cu trei culori, o grilă rezolvabilă poate avea cel mult {0} pătrate","Width must be at least 3":"Lățimea trebuie să fie de cel puțin 3","Width must be at least five":"Lățimea trebuie să fie de cel puțin cinci","Width must be at least one":"Lățimea trebuie să fie de cel puțin unu","Width must be at least the rotating block size":"Lățimea trebuie să fie cel puțin cât mărimea blocului rotativ","Width must be at least two":"Lățimea trebuie să fie de cel puțin doi","Width, height and ball counts must be whole numbers":"Lățimea, înălțimea și numărul de bile trebuie să fie numere întregi","Width, height and difficulty must be whole numbers":"Lățimea, înălțimea și dificultatea trebuie să fie numere întregi","Width, height and number of colours must be whole numbers":"Lățimea, înălțimea și numărul de culori trebuie să fie numere întregi","Width, height, block size and move count must be whole numbers":"Lățimea, înălțimea, mărimea blocului și numărul de mutări trebuie să fie numere întregi","X puzzles need at least four symbols":"Puzzle-urile X au nevoie de cel puțin patru simboluri","X-diagonal jigsaw puzzles with more than {0} symbols take too long to generate":"Puzzle-urile Jigsaw cu diagonale X și mai mult de {0} simboluri durează prea mult de generat","You have hit a mine; undo that move first":"Ai călcat pe o mină; anulează întâi mutarea aceea","a cell may be a number position for only one rectangle":"o căsuță poate fi poziția numărului pentru un singur dreptunghi","at least one column contains more numbers than will fit":"cel puțin o coloană conține mai multe numere decât încap","at least one row contains more numbers than will fit":"cel puțin un rând conține mai multe numere decât încap","cells are not adjacent":"căsuțele nu sunt alăturate","domino layout: no path between singletons":"așezarea dominourilor: niciun drum între piesele izolate","domino layout: stranded square cannot be paired":"așezarea dominourilor: o căsuță izolată nu poate fi împerecheată","dot touches the outside twice":"punctul atinge exteriorul de două ori","dot with fewer than two edges":"punct cu mai puțin de două muchii","edge does not follow its face":"muchia nu își urmează fața","edge shared by three faces":"muchie comună pentru trei fețe","expected CxR or Nj":"se aștepta CxR sau Nj","expected WxH":"se aștepta WxH","expected WxHnN":"se aștepta WxHnN","expected a grid size":"se aștepta o mărime de grilă","expected a maximum number":"se aștepta un număr maxim","expected a number of points":"se aștepta un număr de puncte","expected a solid letter followed by WxH":"se aștepta litera unui corp urmată de WxH","expected something like c6p4g10Bm":"se aștepta ceva de forma c6p4g10Bm","expected w<W>h<H>m<MIN>M<MAX>":"se aștepta w<W>h<H>m<MIN>M<MAX>","generateKeen: solver disagrees with the square":"generateKeen: rezolvitorul nu este de acord cu pătratul","grid inconsistency while walking round a face":"inconsecvență a grilei la parcurgerea unei fețe","inconsistent clues while assembling":"indicații inconsecvente la asamblare","inconsistent distance field":"câmp de distanțe inconsecvent","inconsistent face classes":"clase de fețe inconsecvente","latin rectangle could not be extended":"dreptunghiul latin nu a putut fi extins","latinGenerate: no extension found":"latinGenerate: nu s-a găsit nicio extindere","latinSquare: rectangle could not be extended":"latinSquare: dreptunghiul nu a putut fi extins","line too long for solver":"linie prea lungă pentru rezolvitor","no clue left to place":"nu mai e nicio indicație de pus","no such laser: {0}":"nu există laserul: {0}","rolled solid does not fit its destination":"corpul rostogolit nu se potrivește la destinație","shown":"afișat","too few row/column specifications":"prea puține specificații de rând/coloană","too many row/column specifications":"prea multe specificații de rând/coloană","unrecognised character in game description":"caracter nerecunoscut în descrierea jocului","yes!":"da!","9×9 Extreme puzzles take too long to generate; try 8×8 or Expert":"Puzzle-urile 9×9 Extrem durează prea mult de generat; încearcă 8×8 sau Expert"}`),Z={moves:`Mutări: {n}`,movesCompleted:{one:`Terminat într-o mutare`,few:`Terminat în {n} mutări`,other:`Terminat în {n} de mutări`},movesSinceSolve:`Mutări de la rezolvarea automată: {n}`,completedMoves:`Terminat! Mutări: {n}`,solvedByComputer:`Rezolvat de calculator`,completed:`Terminat!`,completedPrefix:`Terminat! `,autoSolved:`Rezolvat automat.`,autoSolvedPrefix:`Rezolvat automat. `,autoSolverUsedPrefix:`S-a folosit rezolvarea automată. `,failedPrefix:`Nu mai ai mutări. `,dead:`Ai călcat pe o mină.`,target:` (țintă {n})`},Q=JSON.parse(`{"blackbox":{"name":"Cutia neagră","description":"Găsește bilele ascunse trăgând cu laserul în cutie și urmărind pe unde ies razele.","preset":{"5x5_3_balls":"5×5, 3 bile","8x8_5_balls":"8×8, 5 bile","8x8_3_6_balls":"8×8, 3-6 bile","10x10_5_balls":"10×10, 5 bile","10x10_4_10_balls":"10×10, 4-10 bile"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"no_of_balls":{"name":"Nr. de bile"}},"achievement":{"sparing_shots":{"name":"Focuri cu măsură","description":"Găsește toate bilele trăgând laserul din cel mult jumătate dintre porți."},"pinpoint":{"name":"Fix la țintă","description":"Găsește toate bilele într-o cutie de 8×8 sau mai mare, trăgând cel mult trei raze pentru fiecare bilă."},"shot_in_the_dark":{"name":"Tras în gol","description":"Cere verificarea bilelor fără să fi tras nicio rază și greșește."}},"status":{"correct":"CORECT!","wrong":{"one":"{wrong} greșite și {n} bilă ratată.","few":"{wrong} greșite și {n} bile ratate.","other":"{wrong} greșite și {n} de bile ratate."},"marked":"Bile marcate: {n} / {range}  ·  Raze trase: {fired}","tooMany":{"one":"  ·  {n} bilă marcată în plus.","few":"  ·  {n} bile marcate în plus.","other":"  ·  {n} de bile marcate în plus."},"check":"  ·  Dă clic pe butonul din colț ca să verifici."}},"bridges":{"name":"Poduri","alsoKnownAs":"Hashiwokakero, Hashi","description":"Unește insulele cu poduri astfel încât fiecare număr să fie respectat și nimic să nu se încrucișeze.","preset":{"7x7_easy":"7×7 Ușor","7x7_medium":"7×7 Mediu","7x7_hard":"7×7 Greu","10x10_easy":"10×10 Ușor","10x10_medium":"10×10 Mediu","10x10_hard":"10×10 Greu","15x15_easy":"15×15 Ușor","15x15_medium":"15×15 Mediu","15x15_hard":"15×15 Greu","10x10_medium_no_loops":"10×10 Mediu, fără bucle"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"difficulty":{"name":"Dificultate","choice":{"easy":"Ușor","medium":"Mediu","hard":"Greu"}},"allow_loops":{"name":"Permite bucle"},"max_bridges_per_direction":{"name":"Max. poduri pe direcție","choice":{"1":"1","2":"2","3":"3","4":"4"}},"of_island_squares":{"name":"% de căsuțe cu insule","choice":{"5":"5%","10":"10%","15":"15%","20":"20%","25":"25%","30":"30%"}},"expansion_factor":{"name":"Factor de extindere (%)","choice":{"0":"0%","10":"10%","20":"20%","30":"30%","40":"40%","50":"50%","60":"60%","70":"70%","80":"80%","90":"90%","100":"100%"}}},"action":{"g":{"label":"Ghidaje","title":"Arată sau ascunde o linie palidă oriunde ar putea trece un pod (G)"},"e":{"label":"Șterge","title":"Trage de la o insulă ca să elimini podurile în acea direcție (E)"}},"achievement":{"no_markers":{"name":"Ape limpezi","description":"Rezolvă un Poduri de 10×10 sau mai mare fără să notezi niciun marcaj „aici nu e pod”."},"sure_footing":{"name":"Pas sigur","description":"Rezolvă un Poduri Greu de 10×10 sau mai mare fără să elimini vreun pod și fără Anulează."}}},"cube":{"name":"Cubul","description":"Rostogolește un corp pe o grilă ca să aduni pe fețele lui toate căsuțele albastre.","preset":{"cube":"Cub","tetrahedron":"Tetraedru","octahedron":"Octaedru","icosahedron":"Icosaedru"},"config":{"type_of_solid":{"name":"Tipul corpului","choice":{"tetrahedron":"Tetraedru","cube":"Cub","octahedron":"Octaedru","icosahedron":"Icosaedru"}},"width_top":{"name":"Lățime / sus"},"height_bottom":{"name":"Înălțime / jos"}},"achievement":{"short_haul":{"name":"Drum scurt","description":"Termină Cubul cu toate fețele albastre în cel mult douăzeci de rostogoliri."},"octahedron_ace":{"name":"Opt fețe, iute","description":"Termină Octaedrul cu toate fețele albastre în cel mult treizeci de rostogoliri."},"scenic_route":{"name":"Marele tur","description":"Rostogolește corpul de cel puțin două sute de ori înainte ca toate fețele să fie albastre."}}},"dominosa":{"name":"Dominosa","description":"Descoperă unde stă setul amestecat de piese de domino într-o grilă de numere.","preset":{"up_to_double_3":"Până la dublu 3","up_to_double_4":"Până la dublu 4","up_to_double_5":"Până la dublu 5","up_to_double_6":"Până la dublu 6","up_to_double_7":"Până la dublu 7","up_to_double_8":"Până la dublu 8","up_to_double_9":"Până la dublu 9"},"config":{"maximum_number_on_dominoes":{"name":"Numărul maxim de pe piese"},"difficulty":{"name":"Dificultate","choice":{"very_easy":"Foarte ușor","easy":"Ușor","hard":"Greu","extreme":"Extrem","ambiguous":"Ambiguu"}}},"achievement":{"no_lines":{"name":"Fără creion","description":"Rezolvă un set până la dublu 6 sau mai mare fără să notezi nicio linie."},"one_click_each":{"name":"Câte un clic","description":"Rezolvă un set până la dublu 6 sau mai mare cu un clic pe piesă și fără Anulează."},"doubles_first":{"name":"Dublele întâi","description":"Pune toate dublele din set înaintea oricărei alte piese."}}},"fifteen":{"name":"Cincisprezece","alsoKnownAs":"Jocul 15, puzzle glisant","description":"Glisează piesele până le așezi în ordine.","preset":{"3x3":"3×3","4x4":"4×4","5x5":"5×5"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"}},"achievement":{"short_shuffle":{"name":"Amestec scurt","description":"Pune în ordine 4×4 în cel mult 100 de mutări."},"five_flyer":{"name":"Fulger pe 5×5","description":"Pune în ordine 5×5 în mai puțin de trei minute."},"scenic_route":{"name":"Drumul cel lung","description":"Folosește peste 300 de mutări ca să pui în ordine 3×3."}}},"filling":{"name":"Umplere","alsoKnownAs":"Fillomino","description":"Umple grila astfel încât fiecare grup de cifre egale să aibă exact atâtea căsuțe.","preset":{"9x7":"9×7","13x9":"13×9","17x13":"17×13"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"}},"action":{"f":{"label":"Umple","title":"Trage de la o cifră ca s-o scrii în fiecare căsuță prin care treci (F)"}},"achievement":{"in_ink":{"name":"Scris cu cerneală","description":"Rezolvă un Umplere fără să schimbi sau să ștergi vreo cifră și fără Anulează."},"one_stroke":{"name":"Dintr-o mișcare","description":"Rezolvă un Umplere de 13×9 sau mai mare scriind fiecare grup de cifre dintr-o singură mutare."}}},"flip":{"name":"Întoarce","alsoKnownAs":"Lights Out","description":"Aprinde toate căsuțele; fiecare apăsare le întoarce și pe cele din jur.","preset":{"3x3_crosses":"3×3 Cruci","4x4_crosses":"4×4 Cruci","5x5_crosses":"5×5 Cruci","3x3_random":"3×3 Aleatoriu","4x4_random":"4×4 Aleatoriu","5x5_random":"5×5 Aleatoriu"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"shape_type":{"name":"Tipul formei","choice":{"crosses":"Cruci","random":"Aleatoriu"}}},"achievement":{"press_once":{"name":"O singură apăsare","description":"Aprinde o tablă de 4×4 sau mai mare fără să apeși de două ori aceeași căsuță."},"fewest_presses":{"name":"Efort minim","description":"Aprinde o tablă de 5×5 cu cel mai mic număr posibil de apăsări."}}},"flood":{"name":"Inundație","alsoKnownAs":"Flood It","description":"Inundă grila din colț până devine toată de o singură culoare, în limita mutărilor.","preset":{"12x12_easy":"12×12 Ușor","12x12_medium":"12×12 Mediu","12x12_hard":"12×12 Greu","16x16_medium":"16×16 Mediu","16x16_hard":"16×16 Greu","12x12_3_colours":"12×12, 3 culori","12x12_4_colours":"12×12, 4 culori"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"colours":{"name":"Culori"},"extra_moves_permitted":{"name":"Mutări suplimentare permise"}},"achievement":{"spare_moves":{"name":"Mutări de rezervă","description":"Inundă grila având încă cel puțin trei mutări rămase."},"beat_the_solver":{"name":"Mai tare ca mașina","description":"Inundă grila în mai puține mutări decât soluția calculatorului."},"one_colour_short":{"name":"La o culoare distanță","description":"Rămâi fără mutări cu doar două culori rămase pe grilă."}},"status":{"moves":"{n} / {limit} mutări"}},"galaxies":{"name":"Galaxii","alsoKnownAs":"Spiral Galaxies, Tentai Show","description":"Împarte grila în regiuni, fiecare simetrică față de singurul punct din interiorul ei.","preset":{"7x7_medium":"7×7 Mediu","7x7_extreme":"7×7 Extrem","10x10_medium":"10×10 Mediu","15x15_medium":"15×15 Mediu"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"difficulty":{"name":"Dificultate","choice":{"medium":"Mediu","extreme":"Extrem"}}},"achievement":{"no_arrows":{"name":"Fără săgeți","description":"Rezolvă un Galaxii de 10×10 sau mai mare fără să tragi nicio săgeată."},"steady_hand":{"name":"Stele fixe","description":"Rezolvă un Galaxii de 10×10 sau mai mare fără să elimini vreun perete și fără Anulează."}}},"guess":{"name":"Ghicește","alsoKnownAs":"Mastermind","description":"Deduce rândul ascuns de pioni colorați din semnele primite la încercările tale.","preset":{"standard":"Standard","super":"Super"},"config":{"colours":{"name":"Culori"},"pegs_per_guess":{"name":"Pioni pe încercare"},"guesses":{"name":"Încercări"},"allow_blanks":{"name":"Permite goluri"},"allow_duplicates":{"name":"Permite repetări"}},"action":{"l":{"label":"Litere","title":"Etichetează pionii cu litere (L)"},"k":{"label":"Păstrează","title":"Dă clic pe un pion din rândul tău ca să-l duci în încercarea următoare (K)"}},"achievement":{"five_guesses":{"name":"Spărgător de coduri","description":"Găsește rândul ascuns din cel mult cinci încercări."},"super_sleuth":{"name":"Super detectiv","description":"Găsește rândul ascuns Super de cinci pioni din cel mult șase încercări."},"so_near":{"name":"Atât de aproape","description":"Rămâi fără încercări cu toți pionii la locul lor, în afară de unul."}},"status":{"revealed":"Soluție dezvăluită","solved":{"one":"Rezolvat dintr-o încercare","few":"Rezolvat din {n} încercări","other":"Rezolvat din {n} de încercări"},"outOfGuesses":"Nu mai ai încercări: soluția este dezvăluită","guessN":"Încercarea {n} din {total}"}},"inertia":{"name":"Inerție","description":"Rostogolește o bilă pe grilă ca să aduni toate pietrele prețioase fără să lovești o mină.","preset":{"10x8":"10×8","15x12":"15×12","20x16":"20×16"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"}},"achievement":{"hat_trick":{"name":"Lovitură triplă","description":"Adună trei pietre prețioase sau mai multe dintr-o singură rostogolire a bilei."},"shortcut":{"name":"Scurtătură","description":"Adună toate pietrele prețioase pe o tablă de 15×12 sau mai mare în mai puține rostogoliri decât Rezolvă."},"last_gem_mine":{"name":"Victorie à la Pirus","description":"Calcă pe o mină chiar cu rostogolirea care ia ultima piatră prețioasă."}},"status":{"gems":"Pietre prețioase: {n}","deaths":" · Decese: {n}"}},"keen":{"name":"Keen","alsoKnownAs":"KenKen, Calcudoku","description":"Completează pătratul latin astfel încât fiecare cușcă să dea rezultatul indicației ei.","preset":{"4x4_easy":"4×4 Ușor","5x5_easy":"5×5 Ușor","5x5_easy_x_only":"5×5 Ușor, doar ×","6x6_easy":"6×6 Ușor","6x6_medium":"6×6 Mediu","6x6_medium_x_only":"6×6 Mediu, doar ×","6x6_hard":"6×6 Greu","6x6_expert":"6×6 Expert","6x6_extreme":"6×6 Extrem","9x9_medium":"9×9 Mediu"},"config":{"grid_size":{"name":"Mărimea grilei"},"difficulty":{"name":"Dificultate","choice":{"easy":"Ușor","medium":"Mediu","hard":"Greu","expert":"Expert","extreme":"Extrem"}},"multiplication_only":{"name":"Doar înmulțire"}},"action":{"m":{"label":"Notițe","title":"Notează toate posibilitățile în fiecare căsuță goală (M)"},"l":{"label":"Evidențiază","title":"Evidențiază fiecare căsuță cu cifra pe care ai atins-o ultima dată (L)"}},"achievement":{"no_pencil":{"name":"Calcul mintal","description":"Rezolvă un Keen de 6×6 sau mai mare fără să scrii nicio notiță."},"products_only":{"name":"Doar produse","description":"Rezolvă un Keen 6×6 Mediu doar cu înmulțiri."}}},"lightup":{"name":"Lumini","alsoKnownAs":"Akari","description":"Pune becuri astfel încât fiecare căsuță să fie luminată și niciun bec să nu lumineze alt bec.","preset":{"7x7_easy":"7×7 Ușor","7x7_medium":"7×7 Mediu","7x7_hard":"7×7 Greu","10x10_easy":"10×10 Ușor","10x10_medium":"10×10 Mediu","10x10_hard":"10×10 Greu","14x14_easy":"14×14 Ușor","14x14_medium":"14×14 Mediu","14x14_hard":"14×14 Greu"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"of_black_squares":{"name":"% de căsuțe negre"},"symmetry":{"name":"Simetrie","choice":{"none":"Niciuna","2_way_mirror":"Oglindire dublă","2_way_rotational":"Rotație de ordin 2","4_way_mirror":"Oglindire cvadruplă","4_way_rotational":"Rotație de ordin 4"}},"difficulty":{"name":"Dificultate","choice":{"easy":"Ușor","medium":"Mediu","hard":"Greu"}}},"action":{"x":{"label":"Cruce","title":"Clicurile pun cruci în loc de becuri (X)"}},"achievement":{"no_crosses":{"name":"Doar lumini","description":"Rezolvă un Lumini de 10×10 sau mai mare fără să notezi nicio cruce."},"no_takebacks":{"name":"Idee luminoasă","description":"Rezolvă un Lumini Greu fără să scoți vreodată un bec."}}},"loopy":{"name":"Bucle","alsoKnownAs":"Slitherlink","description":"Desenează o singură buclă închisă astfel încât fiecare număr să numere liniile din jurul lui.","preset":{"7x7_squares_easy":"7×7 Pătrate Ușor","10x10_squares_easy":"10×10 Pătrate Ușor","7x7_squares_medium":"7×7 Pătrate Mediu","10x10_squares_medium":"10×10 Pătrate Mediu","7x7_squares_expert":"7×7 Pătrate Expert","10x10_squares_expert":"10×10 Pătrate Expert","10x10_triangular_expert":"10×10 Triunghiuri Expert","12x10_honeycomb_expert":"12×10 Fagure Expert","7x7_snub_square_expert":"7×7 Pătrat snub Expert","9x9_cairo_expert":"9×9 Cairo Expert","5x4_great_hexagonal_expert":"5×4 Hexagonal mare Expert","7x7_octagonal_expert":"7×7 Octogonal Expert","5x5_kites_expert":"5×5 Romboizi Expert","5x5_floret_expert":"5×5 Floral Expert","5x4_dodecagonal_expert":"5×4 Dodecagonal Expert","5x4_great_dodecagonal_expert":"5×4 Dodecagonal mare Expert","10x10_penrose_kite_dart_expert":"10×10 Penrose (zmeu/săgeată) Expert","10x10_penrose_rhombs_expert":"10×10 Penrose (romburi) Expert"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"grid_type":{"name":"Tipul grilei","choice":{"squares":"Pătrate","triangular":"Triunghiuri","honeycomb":"Fagure","snub_square":"Pătrat snub","cairo":"Cairo","great_hexagonal":"Hexagonal mare","octagonal":"Octogonal","kites":"Romboizi","floret":"Floral","dodecagonal":"Dodecagonal","great_dodecagonal":"Dodecagonal mare","penrose_kite_dart":"Penrose (zmeu/săgeată)","penrose_rhombs":"Penrose (romburi)"}},"difficulty":{"name":"Dificultate","choice":{"easy":"Ușor","medium":"Mediu","hard":"Greu","expert":"Expert"}}},"action":{"x":{"label":"Taie","title":"Clicurile taie muchii în loc să deseneze linii (X)"}},"achievement":{"off_grid":{"name":"Pe alte cărări","description":"Rezolvă un Bucle pe orice pavaj în afară de pătrate."},"no_crosses":{"name":"Doar bucla","description":"Rezolvă un Bucle de 10×10 fără să tai nicio muchie."},"aperiodic":{"name":"Pavaj aperiodic","description":"Rezolvă un Bucle Penrose fără să ștergi vreodată o linie desenată."}}},"magnets":{"name":"Magneți","description":"Pune magneți și piese goale în dominouri astfel încât numărul polilor să iasă corect.","preset":{"6x5_easy":"6×5 Ușor","6x5_hard":"6×5 Greu","6x5_hard_strip_clues":"6×5 Greu, indicații reduse","8x7_easy":"8×7 Ușor","8x7_hard":"8×7 Greu","8x7_hard_strip_clues":"8×7 Greu, indicații reduse","10x9_hard":"10×9 Greu","10x9_hard_strip_clues":"10×9 Greu, indicații reduse"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"difficulty":{"name":"Dificultate","choice":{"easy":"Ușor","hard":"Greu"}},"strip_clues":{"name":"Reduce indicațiile"}},"action":{"b":{"label":"Gol","title":"Clicurile marchează dominourile ca piese goale în loc să pună magneți (B)"}},"achievement":{"no_flips":{"name":"Pe partea bună","description":"Rezolvă un Magneți de 8×7 sau mai mare fără să întorci vreodată un magnet."},"stripped":{"name":"Fire dezizolate","description":"Rezolvă un Magneți 10×9 Greu cu indicații reduse în mai puțin de zece minute."}}},"map":{"name":"Harta","description":"Colorează harta cu patru culori astfel încât două regiuni vecine să nu aibă aceeași culoare.","preset":{"20x15_easy_30_regions":"20×15 Ușor, 30 de regiuni","20x15_medium_30_regions":"20×15 Mediu, 30 de regiuni","20x15_hard_30_regions":"20×15 Greu, 30 de regiuni","20x15_extreme_30_regions":"20×15 Extrem, 30 de regiuni","30x25_medium_75_regions":"30×25 Mediu, 75 de regiuni","30x25_hard_75_regions":"30×25 Greu, 75 de regiuni"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"regions":{"name":"Regiuni"},"difficulty":{"name":"Dificultate","choice":{"easy":"Ușor","medium":"Mediu","hard":"Greu","extreme":"Extrem"}}},"action":{"l":{"label":"Numere","title":"Afișează un număr în fiecare regiune (L)"}},"achievement":{"no_dots":{"name":"Atlas cu mâna liberă","description":"Rezolvă o Hartă Greu sau mai grea fără niciun punct-notiță."},"steady_brush":{"name":"Pensulă sigură","description":"Rezolvă o Hartă Extrem fără să schimbi vreodată culoarea unei regiuni."}}},"mines":{"name":"Mine","alsoKnownAs":"Minesweeper","description":"Descoperă toate căsuțele care nu ascund o mină; nu trebuie să ghicești niciodată.","preset":{"9x9_beginner_10_mines":"9×9 Începător, 10 mine","9x9_35_mines":"9×9, 35 de mine","16x16_intermediate_40_mines":"16×16 Intermediar, 40 de mine","16x16_99_mines":"16×16, 99 de mine","30x16_expert_99_mines":"30×16 Expert, 99 de mine","30x16_170_mines":"30×16, 170 de mine"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"mines":{"name":"Mine"},"ensure_solubility":{"name":"Garantează rezolvabilitatea"}},"achievement":{"no_flags":{"name":"Fără stegulețe","description":"Câștigă o partidă de Mine fără să pui niciun steguleț."},"expert_sweep":{"name":"Echipa de deminare","description":"Câștigă tabla Expert de 30×16 în mai puțin de cinci minute."},"so_close":{"name":"La un pas","description":"Calcă pe o mină când mai ai de deschis cel mult trei căsuțe sigure."}},"status":{"marked":"Marcate: {n} / {total}","deaths":" · Decese: {n}"}},"net":{"name":"Rețea","alsoKnownAs":"NetWalk","description":"Rotește piesele până când fiecare e legată prin fire de centru.","preset":{"5x5":"5×5","7x7":"7×7","9x9":"9×9","11x11":"11×11","13x11":"13×11","5x5_wrapping":"5×5 circular","7x7_wrapping":"7×7 circular","9x9_wrapping":"9×9 circular","11x11_wrapping":"11×11 circular","13x11_wrapping":"13×11 circular"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"walls_wrap_around":{"name":"Marginile se unesc"},"barrier_probability":{"name":"Probabilitatea barierelor"},"ensure_unique_solution":{"name":"Garantează o soluție unică"}},"action":{"j":{"label":"Amestecă","title":"Rotește la întâmplare fiecare piesă neblocată (J)"},"scroll_left":{"label":"←","title":"Derulează imaginea la stânga (Shift+←)"},"scroll_up":{"label":"↑","title":"Derulează imaginea în sus (Shift+↑)"},"scroll_down":{"label":"↓","title":"Derulează imaginea în jos (Shift+↓)"},"scroll_right":{"label":"→","title":"Derulează imaginea la dreapta (Shift+→)"},"k":{"label":"Blochează","title":"Dă clic pe piese ca să le blochezi sau să le deblochezi în loc să le rotești (K)"}},"achievement":{"no_locks":{"name":"Nimic sub cheie","description":"Rezolvă o Rețea de 9×9 sau mai mare fără să blochezi nicio piesă."},"not_a_turn_wasted":{"name":"Nicio rotire irosită","description":"Rezolvă o Rețea de 9×9 sau mai mare fără să rotești vreo piesă mai mult decât trebuie."},"jumbled":{"name":"Totul vraiște","description":"Apasă Amestecă și rezolvă totuși puzzle-ul."}},"status":{"active":"Active: {n}/{total}"}},"netslide":{"name":"Rețea glisantă","description":"Glisează rândurile și coloanele de piese de rețea până când totul este conectat.","preset":{"3x3_easy":"3×3 ușor","3x3_medium":"3×3 mediu","3x3_hard":"3×3 greu","4x4_easy":"4×4 ușor","4x4_medium":"4×4 mediu","4x4_hard":"4×4 greu","5x5_easy":"5×5 ușor","5x5_medium":"5×5 mediu","5x5_hard":"5×5 greu"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"walls_wrap_around":{"name":"Marginile se unesc"},"barrier_probability":{"name":"Probabilitatea barierelor"},"number_of_shuffling_moves":{"name":"Număr de mutări de amestecare"}},"achievement":{"tidy_four":{"name":"Recablare curată","description":"Rezolvă o Rețea glisantă 4×4 în cel mult 18 glisări."},"lean_five":{"name":"Electrician de linie","description":"Rezolvă o Rețea glisantă 5×5 în cel mult 32 de glisări."},"big_switch":{"name":"Marea comutare","description":"Aprinde toată rețeaua dintr-o glisare când era aprinsă mai puțin de jumătate."}},"status":{"active":" · Active: {n}/{total}"}},"pattern":{"name":"Tipar","alsoKnownAs":"Nonogram, Picross, Griddlers","description":"Colorează grila după lungimile secvențelor date pentru fiecare rând și coloană.","preset":{"10x10":"10×10","15x15":"15×15","20x20":"20×20","25x25":"25×25","30x30":"30×30"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"}},"action":{"e":{"label":"Șterge","title":"Dă clic sau trage ca să readuci căsuțele la necunoscut (E)"}},"achievement":{"no_dots":{"name":"Niciun punct","description":"Rezolvă un Tipar de 15×15 sau mai mare fără să pui niciun punct."},"inked_in":{"name":"Trecut în tuș","description":"Rezolvă un Tipar de 20×20 sau mai mare fără să golești vreodată o căsuță neagră."}}},"pearl":{"name":"Perle","alsoKnownAs":"Masyu","description":"Desenează o singură buclă închisă care trece drept prin perlele albe și cotește în cele negre.","preset":{"6x6_easy":"6×6 Ușor","6x6_tricky":"6×6 Dificil","8x8_easy":"8×8 Ușor","8x8_tricky":"8×8 Dificil","10x10_easy":"10×10 Ușor","10x10_tricky":"10×10 Dificil","12x8_easy":"12×8 Ușor","12x8_tricky":"12×8 Dificil"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"difficulty":{"name":"Dificultate","choice":{"easy":"Ușor","tricky":"Dificil"}},"allow_unsoluble":{"name":"Permite nerezolvabile"}},"action":{"x":{"label":"Taie","title":"Dă clic sau trage ca să tai laturile pe care bucla nu le poate folosi (X)"}},"achievement":{"no_crosses":{"name":"Șirag de perle","description":"Rezolvă un Perle de 10×10 fără să pui niciun X."},"one_stroke":{"name":"Dintr-o trăsătură","description":"Desenează toată bucla unui Perle de 8×8 sau mai mare dintr-o singură tragere."}}},"pegs":{"name":"Țăruși","alsoKnownAs":"Solitar, Peg solitaire","description":"Sari cu țărușii unul peste altul până rămâne doar unul.","preset":{"cross":"Cruce","octagon":"Octogon","random_5x5":"Aleatoriu 5×5","random_7x7":"Aleatoriu 7×7","random_9x9":"Aleatoriu 9×9"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"board_type":{"name":"Tipul tablei","choice":{"cross":"Cruce","octagon":"Octogon","random":"Aleatoriu"}}},"achievement":{"dead_centre":{"name":"Fix în centru","description":"Termină tabla Cruce cu ultimul țăruș în gaura din centru."},"hopscotch":{"name":"Șotron","description":"Câștigă o partidă de Țăruși cu un țăruș care sare de patru ori la rând."},"pegged_out":{"name":"Înțepenit","description":"Rămâi blocat cu zece țăruși sau mai mulți încă pe tablă."}},"status":{"stuck":{"one":"Nu mai sunt mutări — a rămas {n} țăruș","few":"Nu mai sunt mutări — au rămas {n} țăruși","other":"Nu mai sunt mutări — au rămas {n} de țăruși"},"playing":"Țăruși rămași: {n}  ·  Mutări: {moves}"}},"range":{"name":"Rază","alsoKnownAs":"Kurodoko, Kuromasu","description":"Înnegrește căsuțe astfel încât fiecare număr să vadă exact atâtea căsuțe albe pe rândul și coloana lui.","preset":{"9x6":"9×6","12x8":"12×8","13x9":"13×9","16x11":"16×11"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"}},"action":{"e":{"label":"Șterge","title":"Dă clic sau trage ca să golești căsuțele negre și punctele (E)"}},"achievement":{"no_dots":{"name":"Contrast pur","description":"Rezolvă un Rază de 13×9 sau mai mare fără să pui niciun punct."},"quick_sight":{"name":"Privire ageră","description":"Rezolvă un Rază de 16×11 în mai puțin de cinci minute."}}},"rect":{"name":"Dreptunghiuri","alsoKnownAs":"Shikaku","description":"Împarte grila în dreptunghiuri, fiecare cu un singur număr egal cu aria lui.","preset":{"7x7":"7×7","9x9":"9×9","11x11":"11×11","13x13":"13×13","15x15":"15×15","17x17":"17×17","19x19":"19×19"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"expansion_factor":{"name":"Factor de extindere"},"ensure_unique_solution":{"name":"Garantează o soluție unică"}},"action":{"e":{"label":"Șterge","title":"Trage peste o zonă ca să ștergi liniile din interior sau dă clic pe o linie ca s-o elimini (E)"}},"achievement":{"clean_cuts":{"name":"Tăieturi curate","description":"Rezolvă un Dreptunghiuri de 11×11 sau mai mare în cel mult atâtea mutări câte numere are."},"quick_carver":{"name":"Cioplitor iute","description":"Rezolvă un Dreptunghiuri de 19×19 în mai puțin de zece minute."}},"status":{"drag":"{w}×{h} "}},"samegame":{"name":"Same Game","alsoKnownAs":"Clickomania","description":"Golește tabla eliminând grupuri de căsuțe alăturate de aceeași culoare.","preset":{"5x5_3_colours":"5×5, 3 culori","10x5_3_colours":"10×5, 3 culori","15x10_3_colours":"15×10, 3 culori","15x10_4_colours":"15×10, 4 culori","20x15_4_colours":"20×15, 4 culori"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"no_of_colours":{"name":"Nr. de culori"},"scoring_system":{"name":"Sistem de punctaj","choice":{"n_1_2":"(n-1)^2","n_2_2":"(n-2)^2"}},"ensure_solubility":{"name":"Garantează rezolvabilitatea"}},"achievement":{"avalanche":{"name":"Avalanșă","description":"Elimină deodată un grup de 25 de căsuțe sau mai mult, apoi golește tabla."},"no_pairs":{"name":"Fără perechi","description":"Golește o tablă de 15×10 sau mai mare fără să elimini vreodată o pereche."},"last_one":{"name":"Ultima căsuță","description":"Rămâi blocat cu o singură căsuță pe tablă."}},"status":{"score":"Scor: {n}","complete":"Tablă golită! {score}","stuck":"Nu mai ai mutări. {score}","selected":"{score} · Selectate: {n} (+{points})"}},"signpost":{"name":"Indicatoare","description":"Leagă căsuțele într-un singur drum numerotat, fiecare pas urmând o săgeată.","preset":{"4x4":"4×4","4x4_free_ends":"4×4, capete libere","5x5":"5×5","5x5_free_ends":"5×5, capete libere","6x6":"6×6","7x7":"7×7"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"start_and_end_in_corners":{"name":"Început și sfârșit în colțuri"}},"action":{"b":{"label":"Desface","title":"Dă clic pe o căsuță ca să-i desfaci tot lanțul (B)"}},"achievement":{"unbroken":{"name":"Lanț neîntrerupt","description":"Rezolvă un Indicatoare fără să ștergi sau să înlocuiești vreodată o legătură."},"in_order":{"name":"Drept înainte","description":"Rezolvă un Indicatoare de 6×6 sau mai mare legând drumul în ordine, de la 1 la stea."},"star_first":{"name":"Pune-ți o dorință","description":"Fă-ți prima legătură spre stea, apoi rezolvă puzzle-ul."}}},"singles":{"name":"Unice","alsoKnownAs":"Hitori","description":"Înnegrește căsuțe astfel încât niciun număr să nu se repete pe rând sau coloană, fără a rupe grila.","preset":{"5x5_easy":"5×5 Ușor","5x5_tricky":"5×5 Dificil","6x6_easy":"6×6 Ușor","6x6_tricky":"6×6 Dificil","8x8_easy":"8×8 Ușor","8x8_tricky":"8×8 Dificil","10x10_easy":"10×10 Ușor","10x10_tricky":"10×10 Dificil","12x12_easy":"12×12 Ușor","12x12_tricky":"12×12 Dificil"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"difficulty":{"name":"Dificultate","choice":{"easy":"Ușor","tricky":"Dificil"}}},"achievement":{"no_circles":{"name":"Fără cercuri","description":"Rezolvă un Unice de 8×8 sau mai mare fără să încercuiești niciun număr."},"sure_hand":{"name":"Mână fermă","description":"Rezolvă un Unice de 10×10 sau mai mare fără să readuci vreo căsuță înnegrită."}}},"sixteen":{"name":"Șaisprezece","description":"Glisează rânduri și coloane întregi pe grilă ca să pui piesele în ordine.","preset":{"3x3":"3×3","4x3":"4×3","4x4":"4×4","5x4":"5×4","5x5":"5×5"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"number_of_shuffling_moves":{"name":"Număr de mutări de amestecare"}},"achievement":{"lean_slides":{"name":"Glisări cu socoteală","description":"Pune în ordine 4×4 în cel mult 100 de glisări."},"five_in_200":{"name":"Marele ordonator","description":"Pune în ordine 5×5 în cel mult 200 de glisări."},"round_the_doughnut":{"name":"Ocolul gogoșii","description":"Glisează o linie de jur împrejur până revine de unde a pornit."}}},"slant":{"name":"Diagonale","alsoKnownAs":"Gokigen Naname","description":"Trasează o diagonală în fiecare căsuță, respectând numerele și fără să formezi bucle.","preset":{"5x5_easy":"5×5 Ușor","5x5_hard":"5×5 Greu","8x8_easy":"8×8 Ușor","8x8_hard":"8×8 Greu","12x10_easy":"12×10 Ușor","12x10_hard":"12×10 Greu"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"difficulty":{"name":"Dificultate","choice":{"easy":"Ușor","hard":"Greu"}}},"achievement":{"no_loops":{"name":"Fără bucle","description":"Rezolvă un Diagonale de 8×8 sau mai mare fără să închizi vreodată o buclă."},"steady_hand":{"name":"Fără ezitări","description":"Rezolvă un Diagonale de 12×10 fără să revii ca să schimbi o linie."}}},"solo":{"name":"Solo","alsoKnownAs":"Sudoku","description":"Umple grila astfel încât fiecare rând, coloană și bloc să conțină fiecare cifră o dată.","preset":{"4x4_very_easy":"4×4 Foarte ușor","6x6_easy":"6×6 Ușor","9x9_very_easy":"9×9 Foarte ușor","9x9_easy":"9×9 Ușor","9x9_x_diagonal_easy":"9×9 Diagonale X Ușor","9x9_medium":"9×9 Mediu","9x9_hard":"9×9 Greu","9x9_x_diagonal_hard":"9×9 Diagonale X Greu","9x9_expert":"9×9 Expert","9x9_extreme":"9×9 Extrem","9x9_killer":"9×9 Killer","9x9_jigsaw_easy":"9×9 Jigsaw Ușor","9x9_jigsaw_x_diagonal_easy":"9×9 Jigsaw Diagonale X Ușor","9x9_jigsaw_hard":"9×9 Jigsaw Greu","12x12_easy":"12×12 Ușor","16x16_easy":"16×16 Ușor"},"config":{"columns_of_sub_blocks":{"name":"Coloane de sub-blocuri"},"rows_of_sub_blocks":{"name":"Rânduri de sub-blocuri"},"x_require_every_number_in_each_main_diagonal":{"name":"„X” (fiecare număr pe fiecare diagonală principală)"},"jigsaw_irregularly_shaped_sub_blocks":{"name":"Jigsaw (sub-blocuri de forme neregulate)"},"killer_digit_sums":{"name":"Killer (sume de cifre)"},"symmetry":{"name":"Simetrie","choice":{"none":"Niciuna","2_way_rotation":"Rotație de ordin 2","4_way_rotation":"Rotație de ordin 4","2_way_mirror":"Oglindire dublă","2_way_diagonal_mirror":"Oglindire diagonală dublă","4_way_mirror":"Oglindire cvadruplă","4_way_diagonal_mirror":"Oglindire diagonală cvadruplă","8_way_mirror":"Oglindire de ordin 8"}},"difficulty":{"name":"Dificultate","choice":{"very_easy":"Foarte ușor","easy":"Ușor","medium":"Mediu","hard":"Greu","expert":"Expert","extreme":"Extrem"}}},"action":{"m":{"label":"Notițe","title":"Notează toate posibilitățile în fiecare căsuță goală (M)"},"l":{"label":"Evidențiază","title":"Evidențiază fiecare căsuță cu cifra pe care ai atins-o ultima dată (L)"}},"achievement":{"pen_only":{"name":"Pix, nu creion","description":"Rezolvă un Solo 9×9 Mediu, Killer sau mai greu fără nicio notiță."},"no_second_thoughts":{"name":"Fără ezitare","description":"Rezolvă un 9×9 Expert sau mai greu fără să schimbi sau să ștergi vreodată o cifră."}}},"tents":{"name":"Corturi","alsoKnownAs":"Corturi și copaci","description":"Instalează câte un cort lângă fiecare copac, fără ca două corturi să se atingă.","preset":{"8x8_easy":"8×8 Ușor","8x8_tricky":"8×8 Dificil","10x10_easy":"10×10 Ușor","10x10_tricky":"10×10 Dificil","15x15_easy":"15×15 Ușor","15x15_tricky":"15×15 Dificil"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"difficulty":{"name":"Dificultate","choice":{"easy":"Ușor","tricky":"Dificil"}}},"achievement":{"no_grass":{"name":"Tabără perfectă","description":"Rezolvă un Corturi de 10×10 sau mai mare fără să marchezi nicio căsuță cu iarbă."},"no_strikes":{"name":"Camperi fericiți","description":"Rezolvă un Corturi de 15×15 fără să scoți vreodată un cort."}}},"towers":{"name":"Turnuri","alsoKnownAs":"Skyscrapers, Zgârie-nori","description":"Construiește turnuri astfel încât fiecare indicație de pe margine să numere turnurile vizibile de acolo.","preset":{"4x4_easy":"4×4 Ușor","5x5_easy":"5×5 Ușor","5x5_hard":"5×5 Greu","6x6_easy":"6×6 Ușor","6x6_hard":"6×6 Greu","6x6_expert":"6×6 Expert","6x6_extreme":"6×6 Extrem"},"config":{"grid_size":{"name":"Mărimea grilei"},"difficulty":{"name":"Dificultate","choice":{"easy":"Ușor","hard":"Greu","expert":"Expert","extreme":"Extrem"}}},"action":{"m":{"label":"Notițe","title":"Notează toate posibilitățile în fiecare căsuță goală (M)"},"l":{"label":"Evidențiază","title":"Evidențiază fiecare căsuță cu cifra pe care ai atins-o ultima dată (L)"}},"achievement":{"no_pencil":{"name":"Orizont mintal","description":"Rezolvă un Turnuri de 6×6 fără să scrii nicio notiță."},"clean_build":{"name":"Construit să dureze","description":"Rezolvă un Turnuri 6×6 Expert sau Extrem fără să revii ca să schimbi un turn."},"tallest_first":{"name":"Întâi cele mai înalte","description":"Construiește toate turnurile cele mai înalte înaintea oricărui altul, apoi rezolvă grila."}}},"tracks":{"name":"Șine","alsoKnownAs":"Train Tracks","description":"Construiește o singură cale ferată de la intrare la ieșire, respectând numerele.","preset":{"8x8_easy":"8×8 Ușor","8x8_tricky":"8×8 Dificil","10x8_easy":"10×8 Ușor","10x8_tricky":"10×8 Dificil","10x10_easy":"10×10 Ușor","10x10_tricky":"10×10 Dificil","15x10_easy":"15×10 Ușor","15x10_tricky":"15×10 Dificil","15x15_easy":"15×15 Ușor","15x15_tricky":"15×15 Dificil"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"difficulty":{"name":"Dificultate","choice":{"easy":"Ușor","tricky":"Dificil"}},"disallow_consecutive_1_clues":{"name":"Interzice indicații 1 consecutive"}},"action":{"e":{"label":"Șterge","title":"Dă clic sau trage ca să golești complet căsuțele (E)"}},"achievement":{"no_crosses":{"name":"Nimic tăiat","description":"Rezolvă un Șine de 10×10 sau mai mare fără să tai vreo căsuță sau vreo latură."},"no_lift":{"name":"Cu toată viteza","description":"Rezolvă un Șine de 15×10 sau mai mare fără să ridici vreodată o șină pusă."},"long_haul":{"name":"Cursă lungă","description":"Pune șine prin zece căsuțe dintr-o singură tragere, apoi completează linia."}}},"twiddle":{"name":"Rotiri","description":"Rotește blocuri pătrate de piese ca să readuci numerele în ordine.","preset":{"3x3_rows_only":"3×3 doar rânduri","3x3_normal":"3×3 normal","3x3_orientable":"3×3 cu orientare","4x4_normal":"4×4 normal","4x4_orientable":"4×4 cu orientare","4x4_rotating_3x3_blocks":"4×4, blocuri rotative 3×3","5x5_rotating_3x3_blocks":"5×5, blocuri rotative 3×3","6x6_rotating_4x4_blocks":"6×6, blocuri rotative 4×4"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"rotating_block_size":{"name":"Mărimea blocului rotativ"},"one_number_per_row":{"name":"Un număr pe rând"},"orientation_matters":{"name":"Orientarea contează"},"number_of_shuffling_moves":{"name":"Număr de mutări de amestecare"}},"action":{"t":{"label":"Orar","title":"Inversează sensurile: clicurile rotesc în sensul acelor de ceasornic, clicurile dreapta invers (T)"}},"achievement":{"few_turns":{"name":"Douăzeci de rotiri","description":"Rezolvă un Rotiri 3×3 normal în cel mult 20 de rotiri."},"perfect_ten":{"name":"Nota zece","description":"Rezolvă un Rotiri 3×3 normal în cel mult 10 rotiri."},"dizzy":{"name":"Învârteală","description":"Rotește același bloc în același sens de patru ori la rând, apoi rezolvă puzzle-ul."}}},"undead":{"name":"Strigoi","alsoKnownAs":"Haunted Mirror Maze","description":"Pune fantome, vampiri și zombi astfel încât să se potrivească cu ce se vede în oglinzi.","preset":{"4x4_easy":"4×4 Ușor","4x4_normal":"4×4 Normal","4x4_tricky":"4×4 Dificil","5x5_easy":"5×5 Ușor","5x5_normal":"5×5 Normal","5x5_tricky":"5×5 Dificil","7x7_easy":"7×7 Ușor","7x7_normal":"7×7 Normal"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"difficulty":{"name":"Dificultate","choice":{"easy":"Ușor","normal":"Normal","tricky":"Dificil"}}},"keypad":{"g":"Fantomă","v":"Vampir","z":"Zombi"},"action":{"s":{"label":"Vedere","title":"Urmărește liniile de vedere printr-o căsuță sau de la un număr de pe margine (S)"}},"achievement":{"no_pencil":{"name":"Crede-ți ochilor","description":"Rezolvă un Strigoi de 5×5 sau mai mare fără nicio notiță."},"fearless":{"name":"Fără frică","description":"Rezolvă un Strigoi Dificil fără să revii ca să schimbi un monstru."}}},"unequal":{"name":"Inegal","alsoKnownAs":"Futoshiki","description":"Completează pătratul latin astfel încât fiecare semn „mai mare decât” să fie respectat.","preset":{"4x4_easy":"4×4 Ușor","5x5_easy":"5×5 Ușor","5x5_medium":"5×5 Mediu","5x5_medium_adjacent":"5×5 Mediu (Alăturat)","5x5_hard":"5×5 Greu","6x6_easy":"6×6 Ușor","6x6_medium":"6×6 Mediu","6x6_medium_adjacent":"6×6 Mediu (Alăturat)","6x6_hard":"6×6 Greu","7x7_medium":"7×7 Mediu","7x7_medium_adjacent":"7×7 Mediu (Alăturat)","7x7_hard":"7×7 Greu"},"config":{"mode":{"name":"Mod","choice":{"unequal":"Inegal","adjacent":"Alăturat"}},"size_s_s":{"name":"Mărime (s*s)"},"difficulty":{"name":"Dificultate","choice":{"very_easy":"Foarte ușor","easy":"Ușor","medium":"Mediu","hard":"Greu","extreme":"Extrem"}}},"action":{"m":{"label":"Notițe","title":"Notează toate posibilitățile în fiecare căsuță goală (M)"},"h":{"label":"Indiciu","title":"Notează posibilitățile care rămân după un raționament simplu (H)"},"l":{"label":"Evidențiază","title":"Evidențiază fiecare căsuță cu cifra pe care ai atins-o ultima dată (L)"}},"achievement":{"adjacent_bare":{"name":"Ușă în ușă","description":"Rezolvă un Inegal în modul Alăturat fără să scrii nicio notiță."},"extreme_bare":{"name":"Totul din cap","description":"Rezolvă un Inegal Extrem fără să scrii nicio notiță."}}},"unruly":{"name":"Rebel","alsoKnownAs":"Binairo, Takuzu","description":"Colorează fiecare căsuță în negru sau alb, cu număr egal pe fiecare linie și niciodată trei la rând.","preset":{"8x8_easy":"8×8 Ușor","8x8_normal":"8×8 Normal","10x10_easy":"10×10 Ușor","10x10_normal":"10×10 Normal","14x14_easy":"14×14 Ușor","14x14_normal":"14×14 Normal"},"config":{"width":{"name":"Lățime"},"height":{"name":"Înălțime"},"unique_rows_and_columns":{"name":"Rânduri și coloane unice"},"difficulty":{"name":"Dificultate","choice":{"easy":"Ușor","normal":"Normal"}}},"action":{"e":{"label":"Șterge","title":"Dă clic pe o căsuță ca s-o golești (E)"}},"achievement":{"no_threes":{"name":"Niciodată trei","description":"Rezolvă un Rebel de 10×10 sau mai mare fără să faci vreodată trei la rând."},"first_time":{"name":"Alb pe negru","description":"Rezolvă un Rebel de 14×14 fără să revii ca să schimbi o căsuță."}}},"untangle":{"name":"Descâlcește","alsoKnownAs":"Planarity","description":"Mută punctele până când nicio pereche de linii nu se mai încrucișează.","preset":{"6_points":"6 puncte","10_points":"10 puncte","15_points":"15 puncte","20_points":"20 de puncte","25_points":"25 de puncte"},"config":{"number_of_points":{"name":"Număr de puncte"}},"action":{"g":{"label":"Aliniere","title":"Aliniază punctele lăsate pe o grilă (G)"}},"achievement":{"one_touch":{"name":"Atingere ușoară","description":"Descâlcește 10 puncte sau mai multe fără să apuci de două ori același punct."},"only_downhill":{"name":"Doar la vale","description":"Descâlcește 20 de puncte sau mai multe fără ca vreo mutare să adauge linii roșii."}}}}`),$=JSON.parse('{"blackbox":{"step1":{"text":"În această cutie de 4×4 se ascunde o bilă. Trage cu laserul din punctele de pe margine, deduce unde trebuie să fie, marcheaz-o și apasă butonul din colț."},"step2":{"text":"**Dă clic pe punctul de pe marginea stângă, în dreptul rândului al doilea**. Raza e deviată pe drum și iese în altă parte; ambele capete primesc același număr."},"step3":{"text":"Acum trage din punctul **de deasupra coloanei a doua**. Un **H** înseamnă că raza a lovit direct o bilă și nu a mai ieșit."},"step4":{"text":"Trage și din punctul **de deasupra primei coloane**. Un **R** înseamnă că raza s-a întors direct înapoi, ceea ce se întâmplă când o bilă stă în diagonală lângă orificiu."},"step5":{"text":"R-ul pune o bilă în diagonală lângă prima coloană, iar H-ul pune una drept în jos pe a doua: doar această căsuță le satisface pe amândouă."},"step6":{"text":"**Dă clic pe acea căsuță** ca să-ți marchezi bila acolo."},"step7":{"text":"Toate bilele sunt marcate, așa că **bifa din colțul din stânga sus** e activă. Dă clic pe ea ca să-ți fie verificat răspunsul."},"step8":{"text":"Corect. În timp ce lucrezi, **dă clic dreapta** pe o căsuță ca s-o blochezi cu lacăt când ești sigur că e goală, iar **Rezolvă** îți arată răspunsul."}},"bridges":{"step1":{"text":"Numărul fiecărei insule arată câte capete de pod vrea. Unește toate insulele într-o singură rețea, cu cel mult două poduri între o pereche și fără ca un pod să treacă peste altul."},"step2":{"text":"**2-ul de jos** are o singură insulă în linie cu el: **4-ul** de sus. **Trage** de la 2 spre 4 ca să arunci un pod peste."},"step3":{"text":"Vrea două capete de pod, iar perechea asta e singurul loc unde pot merge. **Trage** din nou în aceeași direcție pentru un al doilea pod, paralel."},"step4":{"text":"Insula aceea e gata. **Dă clic** pe ea ca s-o marchezi terminată: devine gri și podurile ei se blochează, ca să nu le strici din greșeală."},"step5":{"text":"Niciun pod nu poate trece peste altul, așa că legătura dintre **cei doi de 1** e acum imposibilă. **Trage cu butonul drept** de la 1-ul din stânga spre cel din dreapta ca să notezi asta."},"step6":{"text":"Fiecare 1 mai are acum o singură ieșire, iar cele patru poduri rămase decurg de aici. **Rezolvă** termină puzzle-ul (iar **G** arată fiecare linie pe care ar putea trece un pod).","textTouch":"Fiecare 1 mai are acum o singură ieșire, iar cele patru poduri rămase decurg de aici. **Rezolvă** termină puzzle-ul."}},"cube":{"step1":{"text":"Cubul are șase fețe, iar șase căsuțe sunt vopsite în albastru. Rostogolește-l până când fiecare față a adunat una: de fiecare dată când aterizează, fața de dedesubt și căsuța își schimbă culorile."},"step2":{"text":"Un clic răstoarnă cubul peste muchie spre căsuța aleasă. **Dă clic pe căsuța albastră chiar sub cub** ca să-i iei culoarea pe fața care aterizează."},"step3":{"text":"Căsuța părăsită e acum simplă — culorile chiar se schimbă între ele. **Dă clic pe căsuța albastră din dreapta** ca să faci albastră a doua față."},"step4":{"text":"Și **tastele săgeți** rostogolesc cubul. Apasă o dată **→** ca să iei a treia căsuță albastră.","textTouch":"Fiecare căsuță vecină e la o apăsare distanță. **Apasă pe următoarea căsuță albastră din dreapta** ca să iei a treia căsuță albastră."},"step5":{"text":"Trei fețe albastre, mai sunt trei — tabla asta se poate termina în șase rostogoliri în total, iar bara de stare le numără. **Anulează** îți dă una înapoi când mergi prea departe."}},"dominosa":{"step1":{"text":"Trei piese de domino — 0-0, 0-1 și 1-1 — au fost așezate aici și apoi luate, lăsând în urmă numerele. Împarte grila în perechi ca să pui fiecare piesă la loc exact o dată."},"step2":{"text":"Nicio piesă nu poate fi folosită de două ori. Dacă ai împerechea acest **0** cu **1**-ul de sub el, ambele coloane exterioare ar fi 0-1, așa că **dă clic dreapta** între ele ca să notezi că nu formează o pereche."},"step3":{"text":"Singurii doi **0** care se ating sunt perechea din colțul din stânga sus, deci acolo merge 0-0. **Dă clic pe granița dintre ei** ca s-o așezi."},"step4":{"text":"La fel, singurii **1** care se ating sunt cei doi din stânga jos. Dă clic pe granița dintre ei pentru 1-1."},"step5":{"text":"Rămâne coloana din dreapta pentru 0-1. Dă clic pe granița dintre cele două numere ale ei ca să termini."},"step6":{"text":"Fiecare piesă folosită o dată. Încă un clic pe o piesă o ridică, o piesă repetată e desenată cu roșu, iar **Anulează** te duce înapoi prin mutări."}},"fifteen":{"step1":{"text":"Glisează piesele numerotate în spațiul gol până când se citesc de la **1 la 8** în ordine, cu golul în colțul din dreapta jos. Tabla aceasta mică e la două mutări de final."},"step2":{"text":"Orice piesă de pe același rând sau aceeași coloană cu golul poate glisa. Dă clic pe **5** ca să-l împingi în sus, în gol."},"step3":{"text":"Încă una. Dă clic pe **8** ca să termini rândul."},"step4":{"text":"Rezolvat! **Anulează** și **Refă** parcurg mutările, iar **Nou**, din meniul de pauză, îți dă un puzzle nou. Și tastele săgeți glisează o piesă în gol, în direcția săgeții.","textTouch":"Rezolvat! **Anulează** și **Refă** parcurg mutările, iar **Nou**, din meniul de pauză, îți dă un puzzle nou. Un rând sau o coloană întreagă glisează deodată, așa că țintește piesa cea mai îndepărtată."}},"filling":{"step1":{"text":"Scrie o cifră în fiecare căsuță goală astfel încât fiecare bloc conectat de cifre egale să acopere exact atâtea căsuțe câte arată cifra."},"step2":{"text":"**3**-ul de la baza coloanei din mijloc poate crește doar în sus, așa că blocul lui e chiar coloana aceea. **Trage** din căsuța ei de sus până la cea din mijloc, apoi apasă **3**.","textTouch":"**3**-ul de la baza coloanei din mijloc poate crește doar în sus. **Trage** din căsuța ei de sus până la cea din mijloc, apoi apasă **3** pe taste."},"step3":{"text":"**2**-ul din coloana stângă are nevoie de un partener, iar căsuța de deasupra lui e singura liberă. Dă clic pe acea căsuță și apasă **2**.","textTouch":"**2**-ul din coloana stângă are nevoie de un partener, iar căsuța de deasupra lui e singura liberă. Apasă pe acea căsuță, apoi apasă **2** pe taste."},"step4":{"text":"A mai rămas o căsuță. Dă clic pe ea și apasă **1** ca să vezi cum arată o cifră greșită.","textTouch":"A mai rămas o căsuță. Apasă pe ea, apoi apasă **1** pe taste ca să vezi cum arată o cifră greșită."},"step5":{"text":"Roșu înseamnă imposibil: cei doi **1** se ating, ceea ce ar face un bloc de doi, iar **2**-ul de sus e închis între pereți. Căsuța aceea e încă selectată, așa că apasă **Backspace** ca s-o golești.","textTouch":"Roșu înseamnă imposibil: cei doi **1** se ating, ceea ce ar face un bloc de doi, iar **2**-ul de sus e închis între pereți. Căsuța aceea e încă selectată, așa că apasă **⌫** pe taste ca s-o golești."},"step6":{"text":"Căsuța goală face pereche, de fapt, cu **2**-ul de deasupra ei. Dă clic pe ea și apasă **2** ca să termini grila.","textTouch":"Căsuța goală face pereche, de fapt, cu **2**-ul de deasupra ei. Apasă pe ea, apoi apasă **2** pe taste ca să termini grila."},"step7":{"text":"Gata. Linii groase închid fiecare bloc terminat; **clicul dreapta** adaugă căsuțe la o selecție una câte una, iar **Anulează** retrage o completare."}},"flip":{"step1":{"text":"Aprinde toate cele nouă căsuțe. Apăsarea uneia o întoarce **și** pe cele din jurul ei, așa că o căsuță aprinsă se poate stinge din nou."},"step2":{"text":"Mica schemă din interiorul unei căsuțe arată ce întoarce: blocul plin e căsuța însăși, contururile sunt vecinele ei."},"step3":{"text":"E timpul s-o aprinzi pe aceasta. Apasă căsuța **din stânga sus**, cea întunecată din colț."},"step4":{"text":"Colțul s-a aprins, dar cele două vecine ale lui s-au stins. Apasă acum căsuța **din centru**."},"step5":{"text":"Doar colțul din dreapta jos a mai rămas stins. Apasă căsuța **din dreapta jos** ca să termini."},"step6":{"text":"Totul aprins! **Anulează** retrage o apăsare, iar în loc de clicuri poți muta un cursor cu tastele săgeți și apăsa Enter.","textTouch":"Totul aprins! **Anulează** retrage o apăsare, iar două apăsări pe aceeași căsuță se anulează mereu, așa că ordinea nu contează niciodată."}},"flood":{"step1":{"text":"Deții căsuța din stânga sus și tot ce e legat de ea în aceeași culoare. Fiecare mutare revopsește zona asta, așa că se alătură căsuțele vecine de noua culoare. Fă toată grila de o singură culoare în limita de **patru mutări**."},"step2":{"text":"Zona ta e deocamdată doar colțul albastru. Dă clic pe căsuța **roșie** de lângă el: zona devine roșie și toate căsuțele roșii pe care le atinge i se alătură."},"step3":{"text":"Acum dă clic pe o căsuță **albastră** de la marginea zonei tale. O culoare bine aleasă se poate întinde departe pe grilă într-o singură mutare."},"step4":{"text":"În afara zonei tale a mai rămas doar **verdele**. Încă un clic înghite restul grilei."},"step5":{"text":"Trei mutări din patru — bara de stare ține socoteala. Dacă rămâi fără mutări înainte ca grila să fie uniformă, runda e pierdută. Te-ai blocat? Un **Indiciu** joacă pentru tine o culoare bună, iar **Rezolvă** termină grila ca rezolvare automată."}},"galaxies":{"step1":{"text":"Două puncte, deci două galaxii. Desenează pereți pe liniile grilei astfel încât fiecare punct să ajungă în centrul propriei regiuni: rotită cu 180° în jurul punctului ei, o regiune trebuie să cadă exact peste ea însăși."},"step2":{"text":"Punctul din stânga stă pe o linie dintre două căsuțe, deci galaxia lui trebuie să fie cele două coloane din stânga. **Dă clic** pe linia grilei chiar la dreapta lor, pe **rândul de sus**."},"step3":{"text":"Punctele țin loc și de carnețel. **Trage** de la punctul din dreapta în **căsuța din dreapta sus** ca să lași acolo o săgeată care marchează căsuța ca parte a galaxiei lui."},"step4":{"text":"Înapoi la perete: **dă clic** pe aceeași linie a grilei cu un rând mai jos, pe **rândul din mijloc**."},"step5":{"text":"A mai rămas un segment, pe **rândul de jos**. **Dă clic** pe el ca să închizi ambele galaxii."},"step6":{"text":"Ambele regiuni sunt umbrite, deci ambele sunt corecte. **Rezolvă** desenează un răspuns întreg, iar un clic pe un perete îl șterge din nou."}},"guess":{"step1":{"text":"În spatele semnelor de întrebare se ascund doi pioni, într-o ordine oarecare din trei culori. Ghicește un rând, citește semnele primite și restrânge posibilitățile."},"step2":{"text":"**Trage** culoarea de sus din tavă și las-o în **gaura din stânga** a rândului cu săgeată."},"step3":{"text":"Poți și să alegi întâi o culoare și apoi să dai clic pe găuri cu ea. Dă clic pe **a doua culoare** din tavă."},"step4":{"text":"Acum dă clic pe **gaura din dreapta** ca să pui acolo culoarea."},"step5":{"text":"Rândul e plin, așa că **caseta punctată** din dreapta lui se aprinde. Dă clic pe ea ca să fie evaluată încercarea."},"step6":{"text":"Două semne **goale** înseamnă că ambele culori sunt în răspuns, dar niciuna nu e la locul ei — un semn plin ar însemna culoarea bună la locul bun. Inversează-le și trimite din nou."},"step7":{"text":"Rezolvat. **Rezolvă** renunță și arată răspunsul, iar tasta **L** pune litere pe pioni dacă culorile sunt greu de deosebit.","textTouch":"Rezolvat. **Rezolvă** renunță și arată răspunsul, iar **Păstrează**, de lângă Anulează, ține pe loc un pion de care ești sigur pentru următoarea încercare."}},"inertia":{"step1":{"text":"Tu ești bila din colțul din stânga sus și ai de adunat **trei pietre prețioase**. Odată pornită, bila se oprește doar la un perete sau la o oprire — iar o mină o distruge."},"step2":{"text":"Dă clic pe o căsuță **la dreapta** bilei. Se rostogolește în acea direcție până o oprește marginea tablei, luând piatra peste care trece."},"step3":{"text":"Acum dă clic **sub** bilă. Ia următoarea piatră, iar inelul rupt cu două căsuțe mai jos — o oprire — o oprește."},"step4":{"text":"Atenție: chestia țepoasă chiar sub bilă e o **mină**. Dacă te rostogolești pe una, jocul se termină și doar Anulează te mai scoate de acolo."},"step5":{"text":"Mergi mai bine **în diagonală**: dă clic pe căsuța cu două mai jos și două la stânga, iar bila alunecă pe lângă mină până la ultima piatră."},"step6":{"text":"Toate cele trei pietre — gata. **Anulează** derulează înapoi o rostogolire greșită; tastele săgeți rostogolesc drept, iar Home, Page Up, End și Page Down în diagonală.","textTouch":"Toate cele trei pietre — gata. **Anulează** derulează înapoi o rostogolire greșită, iar apăsarea în afara grilei merge și ea, ceea ce ajută când bila e lipită de o margine."}},"keen":{"step1":{"text":"Completează cu 1, 2 și 3 astfel încât fiecare să apară o dată pe fiecare rând și coloană, iar cifrele din fiecare cușcă cu contur gros să dea indicația ei aritmetică."},"step2":{"text":"Cușca **2×** are produsul 2, deci cifrele ei sunt 1, 1 și 2. O cușcă poate repeta o cifră, dar nu pe același rând sau aceeași coloană, așa că 2 merge în colț: dă clic pe acea căsuță și tastează **2**.","textTouch":"Cușca **2×** are produsul 2, deci cifrele ei sunt 1, 1 și 2. 2 merge în colț: apasă pe acea căsuță, apoi apasă **2** pe taste."},"step3":{"text":"Celelalte două căsuțe ale cuștii sunt cei doi de 1. Dă clic pe căsuța **din dreapta lui 2** și tastează **1**.","textTouch":"Celelalte două căsuțe ale cuștii sunt cei doi de 1. Apasă pe căsuța **din dreapta lui 2**, apoi apasă **1** pe taste."},"step4":{"text":"Rândul de sus are deja 2 și 1, deci ultima lui căsuță trebuie să fie 3. Dă clic pe **căsuța din dreapta sus** și tastează **3**.","textTouch":"Rândul de sus are deja 2 și 1, deci ultima lui căsuță trebuie să fie 3. Apasă pe **căsuța din dreapta sus**, apoi apasă **3** pe taste."},"step5":{"text":"Doar bănuiești ce e într-o căsuță? **Dă clic dreapta** pe căsuța din mijloc și tastează **3** ca să notezi cifra ca notiță, în loc s-o completezi.","textTouch":"Doar bănuiești ce e într-o căsuță? **Ține apăsat** pe căsuța din mijloc și apasă **3** ca să notezi cifra, în loc s-o completezi. Tasta **✎** face același lucru pentru o căsuță pe care ai apăsat."},"step6":{"text":"Rezolvă restul la fel; o cifră repetată pe rândul sau coloana ei devine roșie, la fel și o cușcă plină care nu dă indicația. În meniul de pauză, **Notițe** notează toate posibilitățile în locul tău, iar **Rezolvă** îți arată răspunsul."}},"lightup":{"step1":{"text":"Fiecare căsuță albă trebuie să ajungă luminată. Un bec își luminează rândul și coloana până când o căsuță neagră oprește raza, iar niciun bec nu poate sta în lumina altuia."},"step2":{"text":"Un număr arată câte becuri ating acea căsuță neagră. Acest **2** are doar două vecine albe, deci amândouă au bec: dă clic pe cea din **dreapta** lui."},"step3":{"text":"Observă lumina galbenă care se întinde de-a lungul razei. Acum dă clic pe căsuța chiar **de sub** 2 pentru al doilea bec."},"step4":{"text":"Un **0** nu atinge niciun bec. **Dă clic dreapta** pe căsuța de deasupra lui ca să notezi un X: îți amintește doar că acolo nu poate sta un bec."},"step5":{"text":"**1**-ul vrea exact un bec. Căsuța de sub el e deja luminată, așa că un bec acolo ar fi în rază — dă clic mai bine pe căsuța din **stânga** lui 1."},"step6":{"text":"Două căsuțe din rândul de sus sunt încă întunecate, iar pe una ai tăiat-o deja. Dă clic pe **cealaltă**."},"step7":{"text":"Fiecare căsuță luminată, fiecare număr mulțumit. **Anulează** retrage un bec, iar tastele săgeți cu Enter și Space pun becuri și X-uri fără mouse.","textTouch":"Fiecare căsuță luminată, fiecare număr mulțumit. **Anulează** retrage un bec, iar o apăsare lungă taie orice căsuță pe care ai exclus-o."}},"loopy":{"step1":{"text":"Desenează **o singură** buclă închisă pe liniile palide dintre puncte. Fiecare număr arată câte dintre cele patru laturi ale căsuței lui folosește bucla."},"step2":{"text":"Căsuța din mijloc are **4**, deci toate cele patru laturi ale ei sunt pe buclă. **Dă clic** pe latura ei de sus ca să desenezi prima linie."},"step3":{"text":"Acum **latura stângă**. Încă un clic pe o linie o șterge."},"step4":{"text":"Fiecare punct are două linii sau niciuna, iar punctul unde se întâlnesc cele două e complet. **Dă clic dreapta** pe linia care urcă din el ca s-o tai ca inutilizabilă."},"step5":{"text":"Mai sunt două laturi. **Dă clic** pe latura de jos a căsuței din mijloc."},"step6":{"text":"Iar **latura dreaptă** o închide. O buclă, fără capete libere, iar cei patru **0** rămân departe de ea."},"step7":{"text":"Rezolvat. **Anulează** te duce înapoi prin linii, iar **Tip** din meniul de pauză schimbă pătratele cu triunghiuri, hexagoane și pavaje mai ciudate."}},"magnets":{"step1":{"text":"Fiecare domino e fie un magnet, cu o jumătate **+** și una **−**, fie gol. Numerele arată câți poli **+** (sus și stânga) și câți poli **−** (jos și dreapta) are fiecare linie, iar polii de același fel nu se pot atinge niciodată."},"step2":{"text":"Rândul de jos vrea trei poli **−** și doar trei dominouri ajung în el, deci fiecare trebuie să dea unul. **Dă clic stânga** pe jumătatea de sus a dominoului vertical ca s-o faci **+**, trimițându-i **−**-ul jos."},"step3":{"text":"Deci și dominoul lat din dreapta jos e un magnet, iar **0**-ul de deasupra ultimei coloane interzice un **+** acolo. **Dă clic stânga** pe jumătatea lui stângă ca să pui **+**-ul pe partea aceea."},"step4":{"text":"A patra coloană are acum singurul ei **+** și nu vrea niciun **−**, deci dominoul de deasupra nu poate fi niciunul. **Dă clic dreapta** pe el ca să-l marchezi gol."},"step5":{"text":"Rândul de sus mai are nevoie de un **+** și un **−** de la dominoul lat din stânga. Jumătatea lui dreaptă atinge un **+**, iar polii de același fel nu se pot atinge — deci **dă clic stânga** pe jumătatea stângă."},"step6":{"text":"A mai rămas un domino. Prima coloană și-a folosit **+**-ul sus, deci **+**-ul de aici merge în dreapta: **dă clic stânga** pe jumătatea dreaptă ca să termini."},"step7":{"text":"Rezolvat! Încă un clic pe aceeași jumătate întoarce magnetul, al doilea clic dreapta lasă semne de întrebare ca să notezi „magnet, dar în ce sens?”, iar **Anulează** te duce înapoi."}},"map":{"step1":{"text":"Colorează fiecare regiune astfel încât două regiuni care au o bucată de graniță comună să nu aibă aceeași culoare. Patru culori ajung mereu, iar aici trei regiuni sunt încă necolorate."},"step2":{"text":"Ia întâi o culoare: **dă clic** pe **mostra albastră**, a doua din rândul de sub hartă."},"step3":{"text":"Cu o culoare în mână, **un clic dreapta** pe o regiune necolorată pune un punct din ea — o notiță că regiunea *ar putea* avea acea culoare. Încearcă pe regiunea înaltă din partea dreaptă."},"step4":{"text":"E mai mult decât un poate: regiunea aceea se învecinează deja cu roșu, verde și galben, deci rămâne doar albastrul. **Dă clic** pe ea ca s-o colorezi."},"step5":{"text":"Poți și să **tragi** o culoare dintr-o regiune în alta. Regiunea mare de sus atinge acum roșu, verde și albastru, așa că **trage** galbenul spre ea din regiunea mică de jos."},"step6":{"text":"A mai rămas o regiune necolorată, în **colțul din stânga jos**: se învecinează cu verde, albastru și noul galben, deci trebuie să fie roșie. **Trage** roșul spre ea din regiunea din colțul din dreapta sus."},"step7":{"text":"Gata — un conflict ar fi apărut ca un **!** roșu pe granița dintre cele două regiuni. **Anulează** te duce înapoi, iar tastele săgeți cu **1**–**4** colorează fără mouse.","textTouch":"Gata — un conflict ar fi apărut ca un **!** roșu pe granița dintre cele două regiuni. **Anulează** te duce înapoi, iar mostra-radieră de la capătul rândului șterge o regiune la care te-ai răzgândit."}},"mines":{"step1":{"text":"Fiecare număr arată câte mine sunt în cele opt căsuțe care îl ating. Sub blocul acoperit se ascund două mine; descoperă tot restul fără să calci pe vreuna."},"step2":{"text":"Acest **1** atinge o singură căsuță acoperită, deci acolo e o mină. **Dă clic dreapta** pe ea ca să pui un steguleț."},"step3":{"text":"**1**-ul de sub el are acum mina lui marcată, deci restul vecinelor lui sunt sigure. **Dă clic stânga pe acel 1** ca să le deschizi dintr-odată."},"step4":{"text":"**2**-ul de deasupra blocului are deja un steguleț și i-a mai rămas o singură căsuță acoperită. **Dă clic dreapta** pe acea căsuță."},"step5":{"text":"Ambele mine sunt marcate, deci ultima căsuță acoperită trebuie să fie sigură. **Dă clic stânga** pe ea ca să termini grila."},"step6":{"text":"Curățat. Al doilea clic dreapta scoate stegulețul, iar **Anulează** te salvează dacă vreodată calci pe o mină."}},"net":{"step1":{"text":"Fiecare piesă are o bucată de fir, iar toată rețeaua a fost rotită la întâmplare. Rotește piesele până când toate nouă atârnă de piesa marcată din mijloc: firele **albastre** sunt deja alimentate, cele gri nu."},"step2":{"text":"Piesa din stânga jos își îndreaptă firul direct spre perete. **Dă clic stânga** pe ea pentru un sfert de tură în sens invers acelor de ceasornic, ca firul să ajungă la vecina din dreapta."},"step3":{"text":"**Clicul dreapta** rotește o piesă în celălalt sens. Rotește piesa din dreapta jos o dată în sensul acelor de ceasornic, iar firul ei se întoarce spre stânga."},"step4":{"text":"Piesa din mijloc are fire pe toate cele patru laturi, deci nu poate fi greșită. **Dă clic de mijloc** pe ea ca s-o blochezi, sau activează **lacătul** de lângă Anulează și dă clic pe ea: o piesă blocată e umbrită și nu se mai rotește.","textTouch":"Piesa din mijloc are fire pe toate cele patru laturi, deci nu poate fi greșită. Activează **lacătul** de lângă Anulează și atinge piesa ca s-o blochezi: o piesă blocată e umbrită și nu se mai rotește."},"step5":{"text":"A mai rămas o piesă. Cu **lacătul** dezactivat, **dă clic stânga** pe colțul din dreapta sus ca să-i aduci firul spre stânga și să alimentezi toată rețeaua.","textTouch":"A mai rămas o piesă. Cu **lacătul** dezactivat, atinge colțul din dreapta sus ca să-i aduci firul spre stânga și să alimentezi toată rețeaua."},"step6":{"text":"Toate cele nouă piese sunt alimentate. **Anulează** te duce înapoi prin rotiri; de la tastatură, tastele săgeți mută un cursor, iar **A**, **D** și **F** rotesc piesa de sub el.","textTouch":"Toate cele nouă piese sunt alimentate. **Anulează** te duce înapoi prin rotiri, blocarea unei piese de care ești sigur o ferește de o apăsare rătăcită, iar **Amestecă** rotește din nou toate piesele neblocate."}},"netslide":{"step1":{"text":"Fiecare bucată de fir trebuie să ajungă legată de sursa de curent. Firele albastre sunt alimentate, cele gri, desenate cu creionul, nu."},"step2":{"text":"Sursa stă pe piesa din mijloc. Piesa aceea nu se mișcă niciodată, așa că rândul și coloana din mijloc nu au săgeți — tot restul glisează."},"step3":{"text":"Dă clic pe săgeata **din stânga rândului de jos** ca să glisezi rândul acela un pas la stânga; firul care cade de pe margine reapare în dreapta."},"step4":{"text":"Rândul de jos s-a unit acum, dar e tot gri: încă nimic nu-l leagă în sus de sursă."},"step5":{"text":"**Dă clic dreapta** pe săgeata **de deasupra coloanei a treia**. Un clic dreapta inversează o săgeată, așa că acea coloană glisează în jos și ultimele fire se aprind."},"step6":{"text":"Totul alimentat! **Rezolvă** arată un răspuns dacă te blochezi, iar meniul **Tip** are grile circulare, în care firele ies pe o margine și intră pe cealaltă."}},"pattern":{"step1":{"text":"Numerele de lângă fiecare rând și coloană sunt lungimile secvențelor ei negre, în ordine. Deduce care căsuțe sunt negre și colorează-le."},"step2":{"text":"**A treia coloană** are 1 2: o căsuță neagră, un gol, apoi două negre. În patru căsuțe asta încape într-un singur fel, cu perechea jos. **Trage** în jos peste ele."},"step3":{"text":"Asta face din căsuța de deasupra perechii golul. **Dă clic dreapta** pe ea ca să pui un punct, care marchează o căsuță despre care știi că e albă."},"step4":{"text":"Iar căsuța de sus a coloanei e căsuța neagră singuratică din indicație. **Dă clic** pe ea."},"step5":{"text":"**Ultima coloană** are 3. Oriunde ar sta o secvență de trei în patru căsuțe, acoperă mereu cele două din mijloc, așa că **trage** în jos peste ele."},"step6":{"text":"O indicație devine gri când linia ei e terminată. Continuă tot așa, sau lasă **Rezolvă** să termine puzzle-ul; un clic de mijloc readuce o căsuță la necunoscut."}},"pearl":{"step1":{"text":"Desenează o singură buclă închisă, din centrul unei căsuțe în centrul alteia. Nu trebuie să treacă prin toate căsuțele, dar trebuie să treacă prin fiecare perlă."},"step2":{"text":"O **perlă albă** înseamnă că bucla trece drept prin ea. Pe rândul de sus singura linie dreaptă posibilă e orizontală, așa că **trage** din căsuța din stânga perlei până în căsuța din dreapta ei."},"step3":{"text":"Perla are acum ambele segmente, deci nimic altceva nu mai poate pleca din ea. **Dă clic dreapta** pe latura de sub ea ca s-o tai."},"step4":{"text":"O **perlă neagră** cotește, iar bucla trece apoi drept prin căsuța de pe fiecare parte a ei. Cea de pe **marginea stângă** nu poate coti în jos — ar trebui o linie dreaptă prin colțul din stânga jos — așa că **dă clic** pe latura ei din dreapta."},"step5":{"text":"Deci căsuța de lângă ea merge drept mai departe — la fel și perla albă de după ea. **Trage** din căsuța aceea până la a patra coloană."},"step6":{"text":"Continuă pornind de la perle; o perlă primește un halou roșu imediat ce regula ei e încălcată. **Rezolvă** desenează toată bucla dacă vrei s-o vezi."}},"pegs":{"step1":{"text":"Un țăruș sare peste un vecin în gaura goală de dincolo, iar țărușul peste care a sărit e scos. Golește tabla asta mică până rămâne **un singur țăruș**: trei sărituri."},"step2":{"text":"**Trage** țărușul din vârful tulpinii în jos, peste vecinul lui, în gaura de jos."},"step3":{"text":"Merge și cu clicuri. Dă clic pe **țărușul din dreapta** ca să-l ridici, apoi dă clic pe gaura aflată cu două căsuțe în stânga lui."},"step4":{"text":"Ultima săritură: trage țărușul din **colțul din stânga jos** peste vecinul lui, în mijloc."},"step5":{"text":"Un singur țăruș — rezolvat. **Anulează** retrage o săritură când te blochezi, iar tastele săgeți merg și ele: Enter ridică un țăruș, apoi o săgeată îl împinge.","textTouch":"Un singur țăruș — rezolvat. **Anulează** retrage o săritură ori de câte ori te blochezi, cât de mult înapoi vrei."}},"range":{"step1":{"text":"Înnegrește căsuțe astfel încât fiecare număr să arate exact câte căsuțe albe vede căsuța lui: pe ea însăși, plus fiecare căsuță în linie în sus, în jos, la stânga și la dreapta, până o oprește o căsuță neagră sau marginea."},"step2":{"text":"**6**-ul vede acum șase căsuțe — tot rândul lui plus cele două de sub el. Deci nimic de pe acel rând sau acea coloană nu poate deveni negru."},"step3":{"text":"**2**-ul poate vedea doar pe el însuși și încă o căsuță, iar căsuța de deasupra lui trebuie să rămână albă pentru 6. Așa că **dă clic** pe căsuța din stânga lui ca s-o înnegrești."},"step4":{"text":"Rămâne căsuța din dreapta sus ca singura căsuță albă pe care 2 o mai vede. **Dă clic dreapta** pe ea ca să pui un punct, cu care notezi o căsuță despre care știi că rămâne albă."},"step5":{"text":"**3**-ul se vede deja pe el și cele două căsuțe din stânga lui, deci căsuța din dreapta lui trebuie să fie neagră. **Dă clic** pe ea."},"step6":{"text":"Terminat cu două căsuțe negre — punctele sunt doar notițe. **H** completează o căsuță care decurge din rest, iar **Rezolvă** pune puncte în toată grila.","textTouch":"Terminat cu două căsuțe negre — punctele sunt doar notițe. **Rezolvă** pune puncte în toată grila când preferi să vezi răspunsul."}},"rect":{"step1":{"text":"Taie grila în dreptunghiuri astfel încât fiecare dreptunghi să conțină exact un număr, iar acel număr să arate câte căsuțe acoperă dreptunghiul."},"step2":{"text":"Un dreptunghi poate conține un singur număr, iar **3**-ul stă chiar sub **4** — deci 4 trebuie să ia tot rândul de sus. **Trage** de la 4 până la capătul din dreapta al rândului."},"step3":{"text":"Un clic pe o singură linie a grilei adaugă sau șterge doar acea latură. **Dă clic** pe linia din dreapta lui **3**."},"step4":{"text":"Un 9 poate fi doar un bloc de 3×3 și mai e un singur loc pentru el. **Trage** peste blocul evidențiat, din căsuța lui din stânga sus până în colțul din dreapta jos: asta îl închide și pe 3."},"step5":{"text":"Fiecare căsuță e într-un dreptunghi de mărimea potrivită. **Tragerea cu butonul drept** șterge liniile din interiorul unei zone, dar îi lasă conturul, iar **Anulează** retrage o trăsătură."}},"samegame":{"step1":{"text":"Golește tabla eliminând grupuri de două sau mai multe căsuțe alăturate de aceeași culoare. Un grup de _n_ căsuțe aduce (_n_ − 2)² puncte, așa că grupurile mari contează."},"step2":{"text":"Dă clic pe oricare dintre cele patru căsuțe **roșii** de sus. Primul clic doar selectează grupul: se luminează și primește un contur gros."},"step3":{"text":"Dă clic din nou pe grupul selectat ca să-l scoți de pe tablă și să iei patru puncte. Căsuțele de deasupra unui gol cad în el, iar o coloană goală își trage vecinele spre ea."},"step4":{"text":"Această căsuță **verde** stă singură. Nimic de lângă ea nu are aceeași culoare, deci nu poate fi selectată — trebuie să aștepte până când tabla îi aduce un partener alături."},"step5":{"text":"Acum **perechea albastră** evidențiată aici. Dă clic pe oricare dintre cele două căsuțe ca să le selectezi pe amândouă."},"step6":{"text":"Te-ai răzgândit? **Dă clic dreapta** pe selecție ca s-o anulezi — nimic nu e eliminat până nu dai clic pe ea a doua oară."},"step7":{"text":"Asta e tot jocul. Orice tablă poate fi golită, așa că mergi mai departe — **Anulează** te duce înapoi când rămâne o căsuță izolată, și nu există niciun buton Rezolvă care să te salveze."}},"signpost":{"step1":{"text":"Fiecare căsuță are o săgeată. Unește toate cele șase într-un singur lanț numerotat de la **1 la 6**, în care fiecare căsuță e urmată de o căsuță aflată undeva pe direcția propriei săgeți."},"step2":{"text":"**1**-ul arată spre est. **Trage** de la el pe căsuța din dreapta lui ca s-o faci pe aceea 2."},"step3":{"text":"**3**-ul s-a legat singur, cum fac mereu numerele consecutive care arată în direcția bună. Acum **trage** căsuța din dreapta jos pe căsuța din stânga ei."},"step4":{"text":"Niciuna dintre cele două nu are încă un număr, așa că perechea e etichetată **a** și **a+1**. **Dă clic dreapta** pe căsuța din mijloc a rândului de jos ca să le desparți din nou."},"step5":{"text":"Numerele adevărate sunt mai bune: **trage** **3**-ul pe căsuța de sub el, care devine 4."},"step6":{"text":"Ultima legătură: **trage** acel 4 pe căsuța din stânga lui. Devine 5, iar 6 închide singur drumul."},"step7":{"text":"Rezolvat. **Tragerea cu butonul drept** leagă în sens invers, de la o căsuță înapoi la cea dinaintea ei, iar **Rezolvă** trasează tot drumul."}},"singles":{"step1":{"text":"Înnegrește căsuțe până când niciun număr nu se mai repetă printre căsuțele albe ale vreunui rând sau vreunei coloane. Două căsuțe negre nu pot avea o latură comună, iar căsuțele albe trebuie să rămână o singură regiune conectată."},"step2":{"text":"Cei doi **4** de pe acest rând au o căsuță între ei. Dacă ai înnegri-o, ambii 4 ar rămâne albi, deci ea însăși trebuie să fie albă — **dă clic dreapta** pe ea ca s-o încercuiești."},"step3":{"text":"**3**-ul încercuit e alb definitiv, iar coloana lui mai are un 3 sus. **Dă clic stânga** pe cel de sus ca să-l înnegrești."},"step4":{"text":"Căsuțele negre nu se ating niciodată, deci **4**-ul din dreapta lui rămâne alb. **Dă clic stânga** pe celălalt 4 din ultima coloană."},"step5":{"text":"Din nou la fel: **2**-ul de deasupra noii căsuțe negre e alb, iar rândul lui mai are un 2 în extremitatea stângă. **Dă clic stânga** pe acela."},"step6":{"text":"Încă unul. **3**-ul de deasupra acelei căsuțe negre e alb, deci celălalt 3, de la baza coloanei, trebuie să dispară. **Dă clic stânga** pe el."},"step7":{"text":"Rezolvat, iar căsuțele albe sunt încă toate legate. Cercurile sunt doar notițe, iar **Anulează** te duce înapoi prin mutări."}},"sixteen":{"step1":{"text":"Pune piesele în ordine, de la **1 la 9**, citind de la stânga la dreapta. Săgețile de pe margine glisează un rând sau o coloană întreagă cu un pas, iar ce cade de pe o parte revine pe partea opusă."},"step2":{"text":"Dă clic pe săgeata **de deasupra coloanei a doua** ca să glisezi coloana aceea în sus cu un pas; asta completează rândul din mijloc."},"step3":{"text":"Acum rândul de jos trebuie mutat la dreapta. **Dă clic dreapta** pe săgeata **din stânga rândului de jos**: un clic dreapta trimite linia în sens opus."},"step4":{"text":"Ultima: dă clic pe săgeata **din stânga rândului de sus** ca să-l glisezi la stânga și să termini grila."},"step5":{"text":"În ordine! **Tip** din meniul de pauză oferă grile mai mari, iar **Personalizat…** din el poate amesteca una cu un număr ales de mutări, pe care să le desfaci tu."}},"slant":{"step1":{"text":"Trasează câte o diagonală prin fiecare căsuță. Un număr încercuit arată câte linii îi ating colțul, iar liniile nu trebuie să închidă niciodată o buclă."},"step2":{"text":"**0**-ul din colțul din stânga sus nu vrea nimic care să-l atingă, deci singura lui căsuță trebuie să se încline invers. **Dă clic dreapta** pe acea căsuță ca să desenezi un `/`."},"step3":{"text":"**4**-ul are nevoie de câte o linie din toate cele patru căsuțe din jurul lui. **Dă clic stânga** pe cea din stânga sus față de el — un clic stânga desenează un `\\\\`."},"step4":{"text":"Căsuța din dreapta sus față de **4** trebuie să se încline, în schimb, în jos spre stânga. **Dă clic dreapta** pe ea pentru un `/`."},"step5":{"text":"**1**-ul de pe marginea stângă are deja singura lui linie, din căsuța de sub el. Deci căsuța de deasupra trebuie să se încline în sens opus: **dă clic stânga** pe ea pentru un `\\\\`."},"step6":{"text":"Continuă la fel. Un număr care nu mai poate fi satisfăcut devine roșu, la fel orice linie prinsă într-o buclă închisă. **Rezolvă** din meniul de pauză completează restul."}},"solo":{"step1":{"text":"Fiecare rând, fiecare coloană și fiecare **bloc de 2×2** conturat trebuie să conțină 1, 2, 3 și 4 exact o dată. Pe această grilă mică lipsesc trei căsuțe."},"step2":{"text":"Acest **bloc** are deja un 2, un 3 și un 4, deci căsuța lui goală poate fi doar **1**. Dă clic pe acea căsuță și apasă tasta **1**.","textTouch":"Acest **bloc** are deja un 2, un 3 și un 4, deci căsuța lui goală poate fi doar **1**. Apasă pe acea căsuță, apoi apasă **1** pe taste."},"step3":{"text":"Nu ești sigur de o căsuță? **Dă clic dreapta** pe această căsuță goală și apasă **2** ca să notezi cifra ca notiță.","textTouch":"Nu ești sigur de o căsuță? Apasă pe această căsuță goală, activează **✎** pe taste și apasă **2** ca să notezi cifra ca notiță."},"step4":{"text":"Rândul ei are deja 3, 4 și 1, deci notița era corectă. **Dă clic stânga** pe aceeași căsuță și apasă **2** ca să scrii răspunsul.","textTouch":"Rândul ei are deja 3, 4 și 1, deci notița era corectă. Căsuța e încă aleasă, așa că apasă **✎** ca să oprești notițele și apoi **2** ca să scrii răspunsul."},"step5":{"text":"A mai rămas o căsuță. Rândul ei are deja 4, 3 și 1 — dă clic pe ea și apasă cifra care lipsește.","textTouch":"A mai rămas o căsuță. Rândul ei are deja 4, 3 și 1 — apasă pe ea, apoi apasă cifra care lipsește pe taste."},"step6":{"text":"Rezolvat! **Anulează** retrage o cifră greșită, iar tasta **M** notează dintr-odată toate variantele în fiecare căsuță goală.","textTouch":"Rezolvat! **Anulează** retrage o cifră greșită, iar **Notițe** din meniul de pauză notează dintr-odată toate variantele în fiecare căsuță goală."}},"tents":{"step1":{"text":"Instalează câte un cort lângă fiecare copac — deasupra, dedesubt, la stânga sau la dreapta lui, niciodată în diagonală. Două corturi nu se pot atinge, iar numerele arată câte corturi are fiecare rând și coloană."},"step2":{"text":"**0**-ul de la capătul rândului al doilea înseamnă că rândul acela nu are corturi. **Dă clic dreapta** pe căsuța de lângă copac ca s-o marchezi ca iarbă."},"step3":{"text":"Și a treia coloană e goală. **Trage cu butonul drept** din căsuța ei de sus până la rândul al treilea ca să pui iarbă în toate trei dintr-odată."},"step4":{"text":"Copacul din dreapta jos stă în colț, cu un alt copac lângă el, deci singura lui vecină liberă e deasupra. **Dă clic stânga** pe acea căsuță ca să instalezi un cort."},"step5":{"text":"Cortul acela completează rândul al treilea, deci nici copacul de pe marginea stângă nu-și poate pune cortul dedesubt. **Dă clic stânga** pe căsuța din stânga sus."},"step6":{"text":"Un copac încă nu are cort și doar căsuța din stânga lui e liberă. **Dă clic stânga** pe ea ca să termini tabăra."},"step7":{"text":"Rezolvat! Încă un clic pe un cort sau pe o marcă de iarbă îl șterge, tastele săgeți cu Enter și Space fac același lucru, iar **Anulează** te duce înapoi.","textTouch":"Rezolvat! Încă o apăsare pe un cort sau pe o marcă de iarbă îl șterge, iar **Anulează** te duce înapoi."}},"towers":{"step1":{"text":"Fiecare rând și coloană are câte un turn de fiecare înălțime, de la 1 la 4. Un număr de pe margine arată câte turnuri **vezi** de acolo: un turn mai înalt le ascunde pe toate cele mai scunde din spatele lui."},"step2":{"text":"**1**-ul din dreapta rândului de sus înseamnă că din partea aceea se vede un singur turn, deci cel mai apropiat trebuie să fie cel mai înalt. Dă clic pe acea căsuță și apasă **4**.","textTouch":"**1**-ul din dreapta rândului de sus înseamnă că din partea aceea se vede un singur turn, deci cel mai apropiat trebuie să fie cel mai înalt. Apasă pe acea căsuță, apoi apasă **4** pe taste."},"step3":{"text":"Poți nota posibilități în loc să răspunzi. **Dă clic dreapta** pe căsuța goală de la capătul stâng al rândului de sus și apasă **1**.","textTouch":"Poți nota posibilități în loc să răspunzi. Apasă pe căsuța goală de la capătul stâng al rândului de sus, activează **✎** pe taste și apasă **1**."},"step4":{"text":"**4**-ul din stânga rândului spune că toate cele patru turnuri sunt vizibile, deci urcă 1-2-3-4 de la capătul acela. **Dă clic stânga** pe căsuță și apasă **1** ca să răspunzi.","textTouch":"**4**-ul din stânga rândului spune că toate cele patru turnuri sunt vizibile, deci urcă 1-2-3-4 de la capătul acela. Căsuța e încă aleasă, așa că apasă **✎** ca să oprești notițele și apoi **1** ca să răspunzi."},"step5":{"text":"A mai rămas o căsuță, iar **1**-ul de lângă rândul ei pune din nou cel mai înalt turn cel mai aproape. Dă clic pe ea și apasă **4**.","textTouch":"A mai rămas o căsuță, iar **1**-ul de lângă rândul ei pune din nou cel mai înalt turn cel mai aproape. Apasă pe ea, apoi apasă **4** pe taste."},"step6":{"text":"Rezolvat! **Backspace** golește o căsuță greșită, iar **Rezolvă** din meniul de pauză termină un puzzle care te-a învins.","textTouch":"Rezolvat! **⌫** de pe taste golește o căsuță greșită. În meniul de pauză, **Notițe** notează toate posibilitățile, iar **Rezolvă** termină un puzzle care te-a învins."}},"tracks":{"step1":{"text":"O singură cale ferată merge de la intrarea din stânga până la ieșirea de jos, iar fiecare căsuță prin care trece are exact două șine. Numerele arată prin câte căsuțe ale acelei coloane sau acelui rând trece linia."},"step2":{"text":"Piesa de intrare urcă deja în **căsuța din stânga sus**, iar laturile de sus și din stânga ale acelei căsuțe sunt marginea grilei. Deci a doua ei șină trebuie să meargă la dreapta: **dă clic** chiar la dreapta mijlocului ei."},"step3":{"text":"**Coloana stângă** are **2**, iar intrarea folosește deja ambele căsuțe, deci nimic nu trece prin jumătatea ei de jos. **Dă clic dreapta** pe mijlocul unei căsuțe ca s-o tai — o tragere cu butonul drept taie un șir întreg."},"step4":{"text":"**Coloana dreaptă** are **4**, deci linia trece prin fiecare căsuță a ei, iar căsuțele de sus și de jos pot coti doar spre interior. **Trage** din căsuța din dreapta sus până jos, în cea din dreapta jos."},"step5":{"text":"**Rândul de jos** are nevoie de trei căsuțe, iar coloana stângă e terminată, deci colțul din dreapta jos e pe linie. Nu poate ieși din grilă, deci cotește la stânga și în sus: **dă clic** pe latura lui stângă."},"step6":{"text":"Numerele devin gri când linia lor e corectă și roșii când nu mai poate ieși. Continuă de la capetele libere sau lasă **Rezolvă** să termine calea ferată."}},"twiddle":{"step1":{"text":"Readu numerele în ordine, de la **1 la 9**. O mutare rotește un bloc pătrat de patru piese cu un sfert de tură; trei rotiri termină tabla asta."},"step2":{"text":"Dă clic în mijlocul **celor patru piese din stânga sus**. Un clic stânga rotește blocul în sens invers acelor de ceasornic, ceea ce pune 1, 2, 3 pe rândul de sus."},"step3":{"text":"**Dă clic dreapta** în mijlocul **celor patru piese din dreapta jos** ca să rotești blocul acela în sensul acelor de ceasornic."},"step4":{"text":"Termină cu un clic stânga în mijlocul **celor patru piese din stânga jos**."},"step5":{"text":"Gata! Meniul **Tip** are blocuri mai mari și un mod *cu orientare*, în care fiecare piesă trebuie să ajungă și cu fața în sus."}},"undead":{"step1":{"text":"Umple cele cinci căsuțe goale cu fantome, vampiri și zombi — socoteala de sus arată câți din fiecare. Fiecare număr arată câți monștri se văd privind de-a lungul acelei linii, iar oglinzile îți deviază privirea."},"step2":{"text":"Privind **din stânga rândului de sus** nu vezi nimic; oglinda deviază aceeași linie în sus, unde **1**-ul vede un monstru. Doar o fantomă se ascunde privită direct și apare în oglindă. **Dă clic** pe acea căsuță."},"step3":{"text":"**4**-ul din colțul din stânga jos trece în zigzag prin oglinzi pe lângă trei căsuțe și le vede pe toate. Vampirii dispar în oglindă, deci singurul vampir trebuie să fie căsuța din mijloc a coloanei stângi. **Dă clic** pe ea."},"step4":{"text":"Un clic doar trece de la un monstru la altul. **Apasă V** în schimb: G, V și Z pun o fantomă, un vampir sau un zombi direct în căsuța evidențiată.","textTouch":"O apăsare doar trece de la un monstru la altul, câte unul. Apasă în schimb pe **Vampir** pe taste: pune monstrul direct în căsuța evidențiată."},"step5":{"text":"**Rândul din mijloc** e o privire dreaptă, fără oglinzi, iar ambii **1** văd un singur monstru — vampirul. Deci cele două vecine ale lui trebuie să fie fantome. **Dă clic** pe căsuța din centru."},"step6":{"text":"**Un clic dreapta** notează o mică notiță în loc să pună ceva. Încearcă pe căsuța din dreapta a acelui rând; fiecare clic dreapta adaugă următorul monstru."},"step7":{"text":"Mai sunt două căsuțe: cea cu notița e a treia fantomă, iar ultima e zombiul. Numerele devin gri când linia lor e rezolvată; **Rezolvă** termină labirintul dacă preferi să te uiți."}},"unequal":{"step1":{"text":"Fiecare rând și coloană are nevoie de 1, 2, 3 și 4, câte o dată — iar fiecare semn dintre două căsuțe trebuie să arate spre cea **mai mică** din pereche."},"step2":{"text":"Semnul de aici arată spre dreapta, deci căsuța din **stânga** e cea mai mare. Rândul mai are nevoie de un 2 și un 3: dă clic pe căsuța din stânga și apasă **3**.","textTouch":"Semnul de aici arată spre dreapta, deci căsuța din **stânga** e cea mai mare. Rândul mai are nevoie de un 2 și un 3: apasă pe căsuța din stânga, apoi apasă **3** pe taste."},"step3":{"text":"Căsuța spre care arată semnul primește numărul mai mic. Dă clic pe ea și apasă **2**.","textTouch":"Căsuța spre care arată semnul primește numărul mai mic. Apasă pe ea, apoi apasă **2** pe taste."},"step4":{"text":"Coloana ei are acum un 3, deci căsuța aceasta poate fi doar 2. **Dă clic dreapta** pe ea și apasă **2** ca să notezi asta ca notiță.","textTouch":"Coloana ei are acum un 3, deci căsuța aceasta poate fi doar 2. Apasă pe ea, activează **✎** pe taste și apasă **2** ca să notezi asta ca notiță."},"step5":{"text":"O notiță nu e un răspuns. **Dă clic stânga** pe aceeași căsuță și apasă **2** ca să confirmi.","textTouch":"O notiță nu e un răspuns. Căsuța e încă aleasă, așa că apasă **✎** ca să oprești notițele și apoi **2** ca să confirmi."},"step6":{"text":"A mai rămas o căsuță. Dă clic pe ea și apasă **3** ca să termini pătratul.","textTouch":"A mai rămas o căsuță. Apasă pe ea, apoi apasă **3** pe taste ca să termini pătratul."},"step7":{"text":"Rezolvat! **Anulează** retrage o cifră, iar **Rezolvă** completează răspunsul dacă un puzzle te învinge.","textTouch":"Rezolvat! **Anulează** retrage o cifră, **Notițe** și **Indiciu** notează posibilitățile, iar **Rezolvă** completează răspunsul dacă un puzzle te învinge."}},"unruly":{"step1":{"text":"Colorează fiecare căsuță în negru sau alb. Fiecare rând și coloană are nevoie de **trei din fiecare**, iar nicio culoare nu poate apărea de **trei ori la rând**. Trei căsuțe sunt încă nedecise."},"step2":{"text":"Rândul acesta are deja cele trei căsuțe albe, deci cea nedecisă trebuie să fie neagră. **Dă clic stânga** pe ea: un clic stânga colorează în negru."},"step3":{"text":"Rândul acesta are deja trei negre, deci căsuța lui nedecisă e albă. **Dă clic dreapta** pe ea — clicul dreapta merge în ordine inversă și colorează întâi în alb."},"step4":{"text":"Ultima căsuță nedecisă are două negre în stânga ei, iar a treia la rând nu e permisă. **Dă clic dreapta** pe ea ca s-o colorezi în alb și să termini grila."},"step5":{"text":"Rezolvat! Încă un clic pe o căsuță colorată o trece la cealaltă culoare și apoi înapoi la nedecis, iar **Anulează** te duce înapoi prin mutări."}},"untangle":{"step1":{"text":"Șase puncte stau pe un cerc, unite prin opt linii. Două perechi dintre ele se încrucișează — acelea sunt cele roșii. Trage punctele până nu mai rămâne nimic roșu."},"step2":{"text":"Întâi dă clic pe **Aliniere**, butonul cu grilă de lângă Anulează (sau apasă **G**). Asta pornește grila de aliniere, așa că un punct lăsat cade pe unul dintre punctele palide din centrul unei căsuțe."},"step3":{"text":"**Trage** punctul din vârful cercului în căsuța goală din **colțul din stânga sus**.","textTouch":"**Trage** punctul din vârful cercului în spațiul gol din **colțul din stânga sus** al tablei. Nu trebuie să ajungă într-un loc anume — trebuie doar să dispară încrucișarea."},"step4":{"text":"A mai rămas o încrucișare, în dreapta. **Trage** punctul cel mai de jos în **colțul din dreapta jos**, care e gol.","textTouch":"A mai rămas o încrucișare, în dreapta. **Trage** punctul cel mai de jos în **colțul din dreapta jos**, care e gol — ultima linie roșie dispare imediat ce nu se mai încrucișează."},"step5":{"text":"Descâlcit. **Rezolvă** desface orice încâlceală în locul tău, iar tastele săgeți mută un cursor de la un punct la altul, cu Enter ca să ridici și să lași un punct.","textTouch":"Descâlcit. Liniile roșii sunt cele care încă se încrucișează, așa că trage mai departe până nu mai rămâne niciuna — sau lasă **Rezolvă** să desfacă încâlceala în locul tău."}}}'),Fe={$locale:`ro`,$name:q,$dir:`ltr`,ui:J,touchPhrases:Y,messages:X,status:Z,games:Q,tutorials:$};export{g as A,ee as B,A as C,S as D,w as E,o as F,i as I,oe as L,f as M,u as N,b as O,c as P,ie as R,M as S,E as T,t as V,H as _,Ee as a,I as b,be as c,me as d,fe as f,W as g,se as h,Oe as i,m as j,v as k,ve as l,ce as m,Me as n,we as o,ue as p,Ae as r,Se as s,Pe as t,ge as u,B as v,O as w,P as x,R as y,ne as z};
//# sourceMappingURL=i18n-ro-DIta07Nq.js.map