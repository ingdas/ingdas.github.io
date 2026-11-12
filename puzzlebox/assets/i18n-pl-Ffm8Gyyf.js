import{t as e}from"./index-DIYwYEVR.js";var t=e({default:()=>n}),n="## Wspólne sterowanie\n\n- **Nowa** losuje nową łamigłówkę, a **Od nowa** wraca do początku obecnej; **Cofnij**\n  i **Ponów** cofają i przywracają kolejne ruchy, a nawet start od nowa da się cofnąć.\n- **Rozwiąż** pokazuje odpowiedź tam, gdzie łamigłówka ją oferuje. Dodaje krok, który da się cofnąć.\n- Kliknięcie prawym przyciskiem to w większości łamigłówek druga akcja — oznaczanie,\n  stawianie flagi albo obrót w przeciwną stronę. Kliknięcie środkowym przyciskiem, jeśli\n  łamigłówka z niego korzysta, to trzecia.\n- **Rodzaj** przełącza między gotowymi rozmiarami i trudnościami; **Własne…** pozwala\n  ustawić wszystko po swojemu.\n- **Udostępnij** pokazuje kody i odnośnik, dzięki którym ktoś inny zagra dokładnie w tę\n  łamigłówkę.\n\n### Klawiatura (Keyboard)\n\n- **Nowa gra**: `N` · **Cofnij**: `U` lub `Ctrl+Z` · **Ponów**: `R` lub `Ctrl+Y`\n- **Rozwiąż**: `Ctrl+S` (tam, gdzie jest dostępne). **Ta pomoc**: `?`, a `Esc` ją zamyka. **Pauza**: `Esc`.\n- W większości łamigłówek klawisze strzałek przesuwają kursor po planszy, `Enter` działa\n  na nim jak kliknięcie lewym przyciskiem myszy, a `Space` jak kliknięcie prawym.\n- W menu strzałki przenoszą z jednej karty lub przycisku na następny, `Enter` wybiera,\n  a `Esc` cofa.\n- Działa też kontroler: krzyżak przesuwa, `A` wybiera lub klika, `X` to kliknięcie prawym,\n  `B` cofa, `Start` pauzuje, `LB` i `RB` cofają i ponawiają ruchy, a `Y` daje podpowiedź.\n  W łamigłówkach, w które wpisuje się liczby, `RT` przenosi do klawiszy na ekranie i z powrotem.\n",ee=e({default:()=>te}),te=`## Na ekranie dotykowym

- **Stuknij**, aby wykonać główną akcję, a **przytrzymaj**, aby wykonać tę drugą. Jeśli
  łamigłówka ma trzecią, stuknij ją **dwoma palcami**.
- Pierwszy okrągły przycisk na pasku narzędzi (kropka w kwadracie) zamienia te dwie
  miejscami, więc akcja, której używasz najczęściej, jest zawsze na jedno stuknięcie; dopóki
  są zamienione, świeci się na nim chorągiewka. Przytrzymanie robi wtedy tę drugą.
- **Rozsuń dwa palce** na planszy, aby powiększyć pola dużej siatki, a potem **przesuwaj
  dwoma palcami**, aby się po niej poruszać. Zsuń palce, aby znów zobaczyć całą łamigłówkę.
  Przyciski **−** i **+** w menu **Pauza** robią to samo.
- **Pauza** mieści resztę sterowania: rodzaj łamigłówki, nową łamigłówkę, start od nowa,
  rozwiązanie, udostępnianie i Ustawienia dźwięku i języka. Dopóki menu jest otwarte, zegar stoi.
`,ne=e({default:()=>re}),re=`# Czarna skrzynka

Wewnątrz zacienionej skrzynki ukryto kilka kulek. Dookoła skrzynki biegnie ramka z portami
laserowymi. Wystrzel laser do skrzynki z dowolnego portu i zobacz, co z niej wyjdzie: na
podstawie wyników ustal, gdzie muszą być kulki, zaznacz je, a potem oddaj swoją odpowiedź
do sprawdzenia.

Wiązka biegnie po linii prostej, chyba że na drodze stanie jej kulka:

- Kulka na wprost **pochłania** wiązkę. Port pokazuje wtedy **H** (trafienie).
- Kulka po skosie z przodu **odchyla** wiązkę o 90° w bok od siebie. Kulki na obu
  przekątnych zawracają ją prosto z powrotem. Odchylenia mogą się łączyć w łańcuch, więc
  wiązka potrafi trochę pokluczyć, zanim wyjdzie.
- Wiązka, która wychodzi tym samym portem, którym weszła, jest **odbita** i oznaczona jako
  **R**. Tak samo dzieje się z wiązką, która zostałaby odchylona, jeszcze zanim wejdzie do
  skrzynki, bo tuż po skosie od jej wejścia leży kulka.
- W pozostałych przypadkach wiązka wychodzi gdzie indziej, a oba porty dostają tę samą
  **liczbę** (i ten sam kolor), więc widać, którędy każdy strzał wszedł i którędy wyszedł.

Kiedy zaznaczysz właściwą liczbę kulek, w lewym górnym rogu pojawi się zielony przycisk.
Kliknij go, aby sprawdzić. Twój układ liczy się jako poprawny, jeśli żaden laser nie
odróżniłby go od układu komputera — przy kilku kulkach może istnieć więcej niż jeden układ
zachowujący się tak samo, a wygrywa każdy z nich.

Błędny układ kończy grę i pokazuje odpowiedź, więc sprawdzaj dopiero wtedy, gdy masz
pewność: znalezione kulki są czarne, błędne zaznaczenia przekreślone na czerwono, a
pominięte kulki czerwone; każdy wystrzelony przez ciebie laser, z którym twój układ się
rozmija, jest obwiedziony kółkiem, a lasery, których nie wystrzelono, a które
odróżniłyby oba układy, są wystrzeliwane teraz i wypisane na czerwono. **Cofnij** pozwala
wrócić i próbować dalej. **Rozwiąż** poddaje grę i wstawia prawdziwe kulki.

## Sterowanie

Pasek stanu zlicza zaznaczone kulki i wystrzelone lasery, a po sprawdzeniu podaje, ile
twoich kulek było błędnych, a ile pominięto.

### Mysz i dotyk

- **Kliknij port**, aby wystrzelić z niego laser. Kliknij port, z którego już strzelano,
  aby podświetlić oba końce tej wiązki; kliknij go ponownie albo gdziekolwiek indziej, aby
  zgasić podświetlenie.
- **Kliknij wewnątrz skrzynki**, aby zaznaczyć tam kulkę; kliknij ponownie, aby usunąć
  zaznaczenie.
- **Kliknij prawym przyciskiem pole**, aby je **zablokować** i nie zmienić go przez
  przypadek; kliknij prawym przyciskiem ponownie, aby je odblokować.
  Kliknięcie prawym przyciskiem na porcie blokuje lub odblokowuje cały wiersz albo całą
  kolumnę obok niego.
- **Kliknij przycisk w rogu**, aby oddać swoje zaznaczenia do sprawdzenia.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor po skrzynce i jej portach.
- **Enter** działa jak kliknięcie lewym przyciskiem: strzela, zaznacza albo sprawdza, gdy
  kursor stoi na przycisku.
- **Spacja** działa jak kliknięcie prawym przyciskiem, czyli blokuje i odblokowuje.

## Ustawienia

- **Szerokość** i **wysokość** skrzynki. Każdy wiersz i każda kolumna ma port laserowy po
  obu stronach.
- **Liczba kulek**: ile kulek jest ukrytych. Podaj jedną liczbę albo zakres, na przykład
  \`3-6\`, i pozwól komputerowi wybrać; wtedy musisz ustalić także samą liczbę, a przycisk
  sprawdzania pojawia się przy każdej liczbie zaznaczeń mieszczącej się w zakresie.
`,ie=e({default:()=>ae}),ae=`# Mosty

Po wodzie rozrzucone są wyspy, każda z własną liczbą. Połącz je mostami tak, aby:

- każdy most biegł prosto w poziomie albo prosto w pionie między dwiema wyspami;
- liczba na wyspie mówiła dokładnie, ile mostów jej dotyka;
- dwie wyspy można było połączyć równoległymi mostami, ale nie więcej niż dwoma (ten limit
  da się zmienić we własnych ustawieniach);
- żaden most nie przecinał innego;
- z każdej wyspy dało się dojść po mostach do każdej innej.

Błędy widać na czerwono: wyspa z nadmiarem mostów, wyspa, która nie może już zebrać ich
dość (pozostali sąsiedzi są pełni albo jedyne trasy blokują inne mosty lub twoje własne
znaczniki „tu nie ma mostu”), oraz grupa wysp, która jest już kompletna, ale odcięta od
reszty. Jeśli pętle są zabronione, mosty tworzące pętlę też są czerwone.

## Sterowanie

**Rozwiąż** wypełnia rozwiązanie i usuwa wszystkie mosty, które do niego nie należą.

### Mysz i dotyk

- **Przeciągnij** z wyspy w stronę sąsiada, aby położyć między nimi most. Wystarczy ruch na
  tyle duży, by kierunek był jasny; most przyskakuje do najbliższej wyspy w tę stronę.
  Przeciągnij ponownie, aby dołożyć drugi równoległy most; kolejne przeciągnięcie po
  osiągnięciu limitu usuwa je wszystkie.
- **Przeciągnij prawym przyciskiem** tak samo, aby zanotować ołówkiem znacznik „tu nie ma
  mostu” albo go wymazać.
- **Kliknij** wyspę, aby oznaczyć ją jako gotową. Zrobi się szara, a jej mosty zostaną
  zablokowane, żeby nie zmienić ich przez przypadek; kliknij ponownie, aby je odblokować.
- **Gumka** (przycisk z gumką obok Cofnij) sprawia, że przeciąganie usuwa: przeciągnij z wyspy w
  stronę sąsiada, aby zabrać wszystkie mosty między nimi albo znacznik „tu nie ma mostu”.
  Naciśnij go ponownie, aby wrócić do kładzenia mostów.
- **Prowadnice** pokazują blade linie wszędzie tam, gdzie mógłby stanąć most, i chowają je
  z powrotem.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor z wyspy na wyspę.
- **Enter**, a po nim strzałka, kładzie most w tym kierunku; **Spacja**, a po niej strzałka,
  stawia znacznik. Dwukrotne naciśnięcie **Enter** oznacza wyspę jako gotową.
- **E** to przycisk **Gumka**, a **G** przycisk **Prowadnice**.

## Ustawienia

- **Szerokość** i **wysokość** siatki, co najmniej 3 każda.
- **Trudność**: przy poziomie _Łatwy_ wystarczy patrzeć na jedną wyspę naraz — tam, gdzie
  jej pozostałe mosty dokładnie wypełniają wolne miejsce, albo gdzie jej liczba jest za
  duża, by pominąć któregokolwiek sąsiada. Poziom _Średni_ każe myśleć także o
  pojedynczych połączeniach: który most musi istnieć, bo bez niego wyspy nie da się
  domknąć, oraz (przy zabronionych pętlach) które połączenia zamknęłyby pętlę. Poziom
  _Trudny_ wymaga spojrzenia o krok naprzód: czy ten most domknie grupę wysp odciętą od
  reszty albo zostawi którąś wyspę bez dojścia? Każda łamigłówka ma dokładnie jedno
  rozwiązanie.
- **Zezwól na pętle**: domyślnie włączone. Po wyłączeniu gotowa sieć mostów musi być
  drzewem — żadna droga po mostach nie może wrócić tam, gdzie się zaczęła — a łamigłówka
  jest układana tak, by dało się ją z tą zasadą rozwiązać.
- **Maks. mostów w jednym kierunku**: limit mostów równoległych, zwykle 2. Mniej znaczy
  łatwiej.
- **% pól z wyspami**: mniej więcej jaka część siatki staje się wyspami. Niektóre układy
  nie pomieszczą aż tylu, więc jest to górna granica.
- **Współczynnik rozrostu**: jak bardzo prawdopodobne jest przy rozrastaniu mapy, że nowa
  wyspa trafi jak najdalej, a nie gdzieś bliżej. Wysokie wartości dają rzadsze, łatwiejsze
  łamigłówki; niskie — zatłoczone.
`,oe=e({default:()=>r}),r=`# Sześcian

Na siatce spoczywa bryła, a garść pól siatki jest pomalowana na niebiesko — dokładnie tyle,
ile bryła ma ścian. Turlanie przewraca bryłę przez jedną z krawędzi ściany, na której
stoi, tak że na sąsiednie pole opada kolejna ściana. Za każdym lądowaniem ściana pod spodem
i pole, na które trafiła, wymieniają się kolorami: postaw zwykłą ścianę na niebieskim polu,
a niebieski zejdzie na bryłę; postaw niebieską ścianę na zwykłym polu, a niebieski zostanie
na planszy. Łamigłówka jest skończona, gdy wszystkie ściany są niebieskie naraz. Pasek
stanu liczy twoje ruchy, więc staraj się skończyć w jak najmniejszej ich liczbie.

W klasycznej wersji po kwadratowej siatce turla się sześcian. Na siatce trójkątnej możesz
zamiast tego turlać czworościan, ośmiościan albo dwudziestościan. Pamiętaj, że każda ściana
turlającego się czworościanu może dotrzeć najwyżej do jednej czwartej pól, a ściany
ośmiościanu na przemian trafiają na trójkąty skierowane w górę i w dół — niebieskie pola są
zawsze rozstawione tak, żeby dało się łamigłówkę skończyć.

## Sterowanie

W tej łamigłówce nie ma przycisku Rozwiąż. Gdy wszystkie ściany są już niebieskie, możesz
dalej turlać bryłę dookoła, nic tym nie psując.

### Mysz i dotyk

- **Kliknij** gdziekolwiek, aby przeturlać bryłę o jedno pole w stronę wskazanego miejsca.
  Na kwadratowej siatce oznacza to w górę, w dół, w lewo albo w prawo; na siatce trójkątnej
  bieżący trójkąt ma do wyboru trzech sąsiadów. Kliknięciem można dosięgnąć każdego
  sąsiada, jakiego bryła ma, więc to w zupełności wystarczy do gry na dowolnej siatce.

### Klawiatura (Keyboard)

- **Klawisze strzałek** turlają bryłę w czterech głównych kierunkach. Na siatce trójkątnej
  trójkąt ma sąsiada albo nad sobą, albo pod sobą, więc drugi z pionowych klawiszy nic nie
  robi.
- **Home**, **Page Up**, **End** i **Page Down** (albo narożne klawisze klawiatury
  numerycznej: 7, 9, 1 i 3) turlają po skosie na siatkach trójkątnych, wybierając tę
  krawędź, która leży w danym kierunku najbliżej.

## Ustawienia

- **Rodzaj bryły**: czworościan, sześcian, ośmiościan albo dwudziestościan. Sześcian używa
  siatki kwadratowej; pozostałe bryły — siatki z trójkątów.
- **Szerokość / góra** i **Wysokość / dół**: dla sześcianu to rozmiar kwadratowej siatki.
  Na siatkach trójkątnych są to długości górnej i dolnej krawędzi sześciokątnej areny
  (ustawienie jednej z nich na zero daje zwykły trójkąt). Siatka musi pomieścić wszystkie
  niebieskie pola oraz jedno puste pole startowe.
`,i=e({default:()=>a}),a=`# Dominosa

Pełny komplet kostek domina — po jednej na każdą parę liczb od 0 do maksimum, z dubletami
włącznie — ułożono tak, by wypełnić prostokąt. Potem przepisano same liczby, a kostki
zabrano. Twoim zadaniem jest ustalić, gdzie leżały: podziel siatkę na pary sąsiadujących
pól tak, aby każda kostka z kompletu została użyta dokładnie raz.

Kostka położona tam, gdzie jej para liczb pojawia się już gdzie indziej, jest pokazana na
czerwono; tak samo puste pole, do którego żadna kostka nie może już dosięgnąć.

## Sterowanie

Łamigłówka jest skończona, gdy wszystkie pola są przykryte i żadna kostka nie jest
czerwona. **Rozwiąż** układa wszystkie kostki rozwiązania i usuwa wszystko, co było
ułożone wcześniej.

### Mysz i dotyk

- **Kliknij** granicę między dwiema sąsiadującymi liczbami (albo tę połowę pola, która jest
  bliżej tej granicy), aby położyć na nich kostkę. Kliknij tę samą granicę ponownie, aby
  kostkę zabrać. Kostka położona na części innej kostki zastępuje ją.
- **Kliknij prawym przyciskiem** granicę, aby przekreślić ją ołówkiem — jako notatkę, że te
  dwie liczby **nie** tworzą jednej kostki. Kliknij prawym przyciskiem ponownie, aby
  wymazać kreskę. Kreski nie da się narysować w miejscu zajętym przez kostkę, a położenie
  kostki wymazuje wszystkie kreski, których ona dotyka.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor po siatce, zatrzymując się na środkach pól i na
  granicach między nimi. Na granicy kursor obrysowuje kostkę, którą by tam położył.
- **Enter** kładzie lub zdejmuje tę kostkę, a **Spacja** rysuje albo wymazuje tam kreskę.

## Ustawienia

- **Największa liczba na kostkach**: kostki są od 0-0 do N-N, a siatka ma (N+2) pól
  szerokości i (N+1) wysokości, więc maksimum 6 daje siatkę 8×7.
- **Trudność**: ile rozumowania wymaga łamigłówka. Na poziomie **Bardzo łatwy** zawsze
  znajdzie się kostka mająca tylko jedno możliwe miejsce albo pole, które może przykryć
  tylko jedna kostka. Poziom **Łatwy** dokłada dwa kolejne argumenty: każdy sposób
  przykrycia tego pola używa tej samej kostki, więc ta kostka nie trafi nigdzie indziej;
  oraz każde możliwe położenie tej kostki wyklucza tamto miejsce. Poziom **Trudny** dodaje
  liczenie (kostka, która odcięłaby nieparzystą liczbę pól, jest niemożliwa; zbiór pól z tą
  samą liczbą może zagarnąć wspólne dla nich kostki), a poziom **Ekstremalny** każe śledzić
  skutki jakiegoś ułożenia aż do sprzeczności. Wszystkie one mają dokładnie jedno
  rozwiązanie. Łamigłówki na poziomie **Niejednoznaczny** nie są w ogóle sprawdzane: mogą
  mieć wiele rozwiązań i mogą wymagać zgadywania — wygrywa znalezienie dowolnego pokrycia.
`,o=e({default:()=>s}),s=`# Piętnastka

Klasyczna układanka przesuwna. Siatka jest wypełniona ponumerowanymi kafelkami i jedną
pustą luką. Wsuwaj kafelki w lukę, aż liczby ustawią się po kolei od lewej do prawej i z
góry na dół, a luka znajdzie się w prawym dolnym rogu.

## Sterowanie

**Rozwiąż** przeskakuje prosto do gotowego ułożenia. Nie pokazuje, jak się tam dostać, ale
jest wygodnym resetem, gdy ćwiczysz wyuczone sekwencje ruchów.

### Mysz i dotyk

- **Kliknij** dowolny kafelek w tym samym wierszu lub tej samej kolumnie co luka, aby
  wsunąć go (razem ze wszystkim między nim a luką) na miejsce.

### Klawiatura (Keyboard)

- **Klawisze strzałek** wsuwają kafelek w lukę w kierunku strzałki: **strzałka w górę** przesuwa kafelek
  spod luki w górę, w lukę.

## Ustawienia

- **Szerokość** i **wysokość** siatki (domyślnie klasyczne 4×4).
`,c=e({default:()=>l}),l=`# Wypełnianie

W części pól siatki stoją już cyfry; reszta jest pusta. Wpisz cyfrę w każde puste pole tak,
aby każda spójna grupa jednakowych cyfr obejmowała dokładnie tyle pól, ile mówi cyfra:
każda 3 należy do grupy trzech trójek, każda 1 stoi sama i tak dalej. Pola liczą się jako
połączone tylko bokami, nie rogami. Wynika stąd, że w żadnym polu nie stoi 0, dwie jedynki
nigdy nie sąsiadują ze sobą, a żadna grupa nie jest większa niż dziewięć pól. Dana z góry
cyfra nie musi być początkiem swojej grupy: kilka danych czwórek może wylądować w jednej
grupie, a grupa może też nie zawierać żadnej danej cyfry.

Grube linie pojawiają się między polami o różnych cyfrach oraz wokół każdej grupy, która ma
już właściwy rozmiar (albo jest za duża). Cyfra robi się czerwona, gdy jej grupa urosła
ponad wartość cyfry albo gdy została zamurowana i nie ma już miejsca, by dorosnąć do
swojego rozmiaru. To łamigłówka wydawana przez Nikoli pod nazwą Fillomino.

## Sterowanie

Cyfry dane z góry są narysowane atramentem i nie da się ich zmienić; twoje własne cyfry są
niebieskie. **Rozwiąż** wypełnia rozwiązanie.

### Mysz i dotyk

- **Kliknij** puste pole, aby je wybrać, a potem wpisz cyfrę klawiszami na ekranie. **⌫**
  na tej klawiaturze znów opróżnia zaznaczenie.
- **Przeciągnij** po kilku polach, aby zaznaczyć je wszystkie, dzięki czemu jedna cyfra
  wypełni każde zaznaczone pole naraz.
- **Kliknij prawym przyciskiem**, aby dołożyć pole do zaznaczenia bez zaczynania od nowa;
  drugie kliknięcie prawym przyciskiem na zaznaczonym polu znów je z zaznaczenia usuwa.
- **Wypełnij** (przycisk obok Cofnij) rozprowadza cyfrę: przeciągnij z pola, w którym jest
  cyfra, po polach wokół, a gdy puścisz, wszystkie dostaną tę cyfrę, bez sięgania po klawiaturę.
  Kliknięcia i przeciągnięcia zaczęte na pustym polu nadal zaznaczają. Naciśnij go ponownie, aby
  wrócić do zaznaczania.

### Klawiatura (Keyboard)

- Gdy zaznaczone jest jedno pole lub więcej, **wpisz cyfrę**, aby wstawić ją do wszystkich.
  Cyfra \`0\` albo **Backspace** znów je opróżnia.
- **Klawisze strzałek** przesuwają kursor klawiatury, a wpisana cyfra wypełnia pole pod
  nim.
- **Spacja** lub **Enter** przełącza obecność pola pod kursorem w zaznaczeniu, dzięki czemu
  kilka pól można wypełnić jednym naciśnięciem klawisza.
- **F** to przycisk **Wypełnij**.

## Ustawienia

- **Szerokość** i **Wysokość**: rozmiar siatki. Grupy nigdy nie są większe niż dłuższy bok
  (ani niż 9), więc na małych siatkach występują tylko małe cyfry.
`,u=e({default:()=>d}),d=`# Przełączanie

Siatka pól, część zapalonych, część ciemnych. Twoim celem jest zapalić wszystkie naraz.
Naciśnięcie pola przełącza je między zapalonym a ciemnym, ale przełącza też część jego
sąsiadów: mały rysunek narysowany na każdym polu pokazuje dokładnie których. Przy
domyślnych kształtach **Krzyże** każde naciśnięcie przełącza pole i jego czterech sąsiadów
w pionie i w poziomie; przy kształtach **Losowe** każde pole ma swój własny nieregularny
wzór, więc każda rozgrywka wygląda inaczej.

Ponieważ dwukrotne naciśnięcie pola się znosi, a kolejność naciśnięć nigdy nie ma
znaczenia, rozwiązanie to po prostu zbiór pól, z których każde trzeba nacisnąć raz.

## Sterowanie

Pasek stanu liczy twoje naciśnięcia. **Rozwiąż** zapala całą planszę i obwodzi na czerwono
pola, które w tym celu nacisnął. Jeśli potem naciskasz kolejne pola, czerwone obwódki
pokazują, które pola wciąż wymagają naciśnięcia, by wrócić do stanu końcowego.

### Mysz i dotyk

- **Kliknij** pole, aby je nacisnąć.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor po siatce; **Enter** lub **Spacja** naciska pole
  pod kursorem.

## Ustawienia

- **Szerokość** i **wysokość** siatki, od 2 do 10 pól na bok.
- **Rodzaj kształtu**: _Krzyże_ przełącza każde pole razem z jego sąsiadami w pionie i w
  poziomie; _Losowe_ daje każdemu polu losowo wygenerowany kształt w obrębie bloku 3×3 wokół
  niego.
`,f=e({default:()=>p}),p=`# Zalew

Siatka to mozaika losowo pokolorowanych pól. Sterujesz polem w lewym górnym rogu wraz z
każdym polem połączonym z nim ścieżką w tym samym kolorze. Każdy ruch przemalowuje całą tę
połączoną plamę na wybrany przez ciebie kolor, więc sąsiednie pola w tym kolorze też stają
się jej częścią. Kontynuuj, aż cała siatka będzie miała jeden kolor.

Haczyk tkwi w limicie ruchów. Zanim zaczniesz, gra sama rozwiązuje siatkę i daje ci swoją
liczbę ruchów plus kilka zapasowych; jeśli wyczerpiesz limit, zanim siatka stanie się
jednolita, runda jest przegrana. Możesz potem dalej zalewać planszę, aby zobaczyć siatkę
skończoną, ale nie liczy się to już jako wygrana.

## Sterowanie

Pasek stanu pokazuje, ile ruchów z limitu już wykorzystano. **Rozwiąż** pozwala komputerowi
dokończyć siatkę za ciebie; liczy się to jako rozwiązanie automatyczne, a nie twoja
wygrana.

### Mysz i dotyk

- **Kliknij** dowolne pole w kolorze innym niż twoja plama, aby przemalować plamę na ten
  kolor. Kliknięcie pola, które już pasuje, nic nie robi i nie kosztuje ruchu.
- **Podpowiedź** zagrywa za ciebie następny kolor wybrany przez komputer, jako zwykły ruch,
  który możesz cofnąć. Kilka podpowiedzi nie odbiera ci wygranej ani gwiazdki za nią.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor po siatce; **Enter** lub **Spacja** przemalowuje
  plamę na kolor pod kursorem.

## Ustawienia

- **Szerokość** i **wysokość** siatki, do 32 pól na bok.
- **Kolory**: ilu kolorów używa siatka, od 3 do 10. Mniej kolorów oznacza mniej możliwości
  i łatwiejszą grę.
- **Dodatkowe dozwolone ruchy**: liczba zapasowych ruchów doliczanych do długości
  rozwiązania znalezionego przez komputer; razem dają limit ruchów. Przy 0 musisz zagrać co
  najmniej tak sprawnie jak komputer; gra on nieźle, ale nie idealnie, więc da się go
  pobić.
`,m=e({default:()=>h}),h=`# Galaktyki

Po siatce rozsypane są kropki, które mogą leżeć na środku pola, na linii między dwoma
polami albo w rogu, w którym stykają się cztery pola. Rysuj ściany wzdłuż linii siatki,
aby podzielić siatkę na obszary tak, by każdy obszar zawierał dokładnie jedną kropkę, a ta
kropka była jego środkiem symetrii: po obrocie obszaru o 180° wokół jego kropki musi on
trafić dokładnie sam w siebie. Każde pole musi ostatecznie należeć do jakiegoś obszaru,
więc żaden obszar nie może zostać bez kropki.

Łamigłówki powstają losowo i mają jedno rozwiązanie. To łamigłówka Nikoli „Tentai Show”,
znana też jako Spiral Galaxies (galaktyki spiralne).

## Sterowanie

Obszar, który jest zamknięty i poprawny — jedna kropka, w jego środku symetrii, bez
zbędnych ścian w środku — jest zacieniowany. Kropka czerwienieje, gdy przechodzi przez nią
ściana albo gdy jest jedyną kropką w zamkniętym obszarze, który nie jest wobec niej
symetryczny; zamknięty obszar bez żadnej kropki jest zakreskowany. Łamigłówka jest
skończona, gdy wszystkie pola są zacieniowane. **Rozwiąż** rysuje pełne rozwiązanie.

### Mysz i dotyk

- **Kliknij** linię siatki, aby narysować tam ścianę, albo kliknij ścianę, aby ją usunąć.
- **Przeciągnij od kropki** na pole, aby zostawić tam małą strzałkę wskazującą z powrotem na
  kropkę, jako przypomnienie, że pole należy do galaktyki tej kropki.
- **Przeciągnij prawym przyciskiem** istniejącą strzałkę, aby ją przenieść. Upuść ją z
  powrotem na jej kropce albo przeciągnij poza siatkę, aby się jej pozbyć; upuszczona na
  pole, na którym jest już strzałka, zajmuje jej miejsce.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor po polach, liniach i rogach na równi.
- **Enter** na linii rysuje lub usuwa jej ścianę; **Enter** na kropce podnosi strzałkę,
  która podąża za kursorem, dopóki nie naciśniesz **Enter** ponownie, aby ją upuścić.

## Ustawienia

- **Szerokość** i **wysokość** siatki, każda co najmniej 3. Gotowe ustawienia sięgają od
  7×7 do 15×15.
- **Trudność** — łamigłówki na poziomie _Średni_ da się rozwiązywać krok po kroku, wprost z
  tego, co wymusza reguła symetrii; te na poziomie _Ekstremalny_ mogą wymagać przyjęcia
  założenia i sprawdzenia, dokąd prowadzi.
`,g=e({default:()=>_}),_=`# Zgadnij

Komputer ukrył rząd kolorowych kołków za osłoną u góry planszy. Twoim zadaniem jest
odtworzyć go dokładnie, korzystając wyłącznie z ocen, jakie dostajesz za każdą próbę:
**czarny** kołek za każdy kołek we właściwym kolorze na właściwym miejscu i **pusty**
kołek za każdy kolejny kołek, którego kolor występuje gdzie indziej w ukrytym rzędzie.
Oceny mówią ci, _ile_ kołków było trafionych, a nie _które_. Znajdź rząd, zanim skończą ci
się próby, a osłona się podniesie; jeśli próby się skończą, podniesie się i tak, aby
pokazać, co ci umknęło.

To gra sprzedawana przez Hasbro jako _Mastermind_: sześć kolorów, cztery kołki i dziesięć
prób. Każde ustawienie można zmienić.

## Sterowanie

**Rozwiąż** podnosi osłonę i pokazuje odpowiedź; kończy to grę tak samo jak wyczerpanie
prób.

### Mysz i dotyk

- **Kliknij** kolor na tacce po lewej, aby go wybrać (obwódka pokazuje który), a potem
  **kliknij gniazdo** w bieżącym rzędzie, aby postawić kołek w tym kolorze. Kliknięcie
  kołka we wcześniejszej próbie również wybiera jego kolor.
- **Przeciągnij** kołek z tacki, z wcześniejszej próby albo z bieżącego rzędu do gniazda.
  Przeciągnięcie kołka poza bieżący rząd i upuszczenie go gdziekolwiek indziej usuwa go.
- **Kliknij prawym przyciskiem** gniazdo, aby je opróżnić.
- Gdy rząd jest kompletny, mały obszar oceny po jego prawej stronie się rozświetla:
  **kliknij go**, aby zgłosić próbę.
- **Kliknij środkowym przyciskiem** gniazdo, aby _zachować_ ten kołek: zachowany kołek
  przechodzi po ocenie do następnej próby, co oszczędza odtwarzania kołków, którym już
  ufasz. Zrób to jeszcze raz, aby zwolnić kołek.
- **Zachowaj** (przycisk obok Cofnij) robi to samo zwykłym kliknięciem: gdy jest włączony,
  kliknięcie gniazda w bieżącym rzędzie zachowuje lub zwalnia jego kołek, zamiast stawiać kolor.
  Kolor zmieniasz jak zwykle, klikając tackę; naciśnij **Zachowaj** ponownie, aby wrócić do
  stawiania kołków.
- **Litery** w menu pauzy wypisują literę na każdym kołku, na wypadek gdyby niektóre kolory
  wyglądały dla ciebie podobnie, i zdejmują je z powrotem.

### Klawiatura (Keyboard)

- **Klawisze strzałek**: góra i dół wybierają kolor na tacce, lewo i prawo przesuwają
  kursor wzdłuż bieżącego rzędu, a gdy rząd jest kompletny — także na obszar oceny.
- **Enter** lub **Spacja** umieszcza wybrany kolor w gnieździe pod kursorem albo zgłasza
  próbę, gdy kursor jest na obszarze oceny.
- **Backspace** albo \`D\` opróżnia gniazdo pod kursorem.
- \`H\` zachowuje lub zwalnia kołek pod kursorem.
- \`K\` to przycisk **Zachowaj**, a \`L\` przycisk **Litery**.

## Ustawienia

- **Kolory**: z ilu różnych kolorów układany jest ukryty rząd, od 2 do 10. Więcej kolorów
  utrudnia namierzenie rzędu.
- **Kołki na próbę**: długość ukrytego rzędu.
- **Próby**: ile masz podejść.
- **Zezwól na puste**: pozwala zostawiać w próbie puste gniazda. Puste gniazdo nigdy nie
  może być trafieniem, więc ułatwia to sondowanie kolorów. Sam ukryty rząd nigdy nie ma
  pustych miejsc.
- **Zezwól na powtórzenia**: pozwala, aby ukryty rząd (i twoje próby) używały koloru
  więcej niż raz. Wyłączenie tego znacznie zmniejsza liczbę możliwych rzędów.
`,v=e({default:()=>y}),y=`# Bezwładność

Jesteś kulką na siatce usianej przeszkodami i chcesz zebrać każdy klejnot na planszy.
Haczyk kryje się w nazwie: gdy kulka raz ruszy, nie zatrzyma się, dopóki coś jej nie
zatrzyma. Przetacza się prosto zarówno przez klejnoty (zbierając je po drodze), jak i
przez puste pola, a staje dopiero wtedy, gdy następne pole jest ścianą albo gdy wpadnie na
blokadę. Ruchy po skosie przeciskają się między dwiema ścianami stykającymi się tylko
rogiem. Wtoczenie się na minę jest śmiertelne, nawet jeśli ten sam ruch zebrał ostatni
klejnot.

Każda łamigłówka powstaje tak, aby wszystkie jej klejnoty dało się zebrać z pola
startowego, ale nic nie stoi na przeszkodzie, żeby wtoczyć się w róg planszy, z którego
któregoś klejnotu nie da się już osiągnąć. Za śmierć czy utknięcie nie ma innej kary niż
licznik zgonów na pasku stanu: po prostu cofnij ruch i spróbuj inaczej.

## Sterowanie

**Cofnij** po wpadnięciu na minę pozwala grać dalej sprzed feralnego ruchu. **Rozwiąż**
wyznacza z twojego bieżącego położenia trasę zbierającą wszystkie pozostałe klejnoty, a
potem przetacza po niej kulkę za ciebie; Cofnij wycofuje całą trasę za jednym razem.

### Mysz i dotyk

- **Kliknij** pole, a kulka ruszy w kierunku tego pola względem siebie, zaokrąglonym do
  najbliższego z ośmiu kierunków świata — łącznie ze skosami. Kliknięcie na marginesie
  poza siatką też działa, co bywa przydatne, gdy kulka stoi przy krawędzi.

### Klawiatura (Keyboard)

- **Klawisze strzałek** toczą kulkę w górę, w dół, w lewo lub w prawo.
- **Home**, **Page Up**, **End** i **Page Down** toczą ją po skosie (w lewo-górę,
  w prawo-górę, w lewo-dół, w prawo-dół). Klawiatura numeryczna działa tak, jak wygląda:
  8 to góra, 3 to prawy dolny skos i tak dalej; rząd cyfr robi to samo.

## Ustawienia

- **Szerokość** i **wysokość** siatki. Mniej więcej jedna piąta pól to ściany, jedna piąta
  blokady, jedna piąta miny, a jedna piąta klejnoty.
`,b=e({default:()=>x}),x=`# Keen

Wypełnij siatkę cyframi od 1 do jej rozmiaru tak, aby w każdym wierszu i każdej kolumnie
każda cyfra wystąpiła dokładnie raz. Siatka jest dodatkowo podzielona na grubo obrysowane
„klatki”, z których każda niesie małą wskazówkę w swoim lewym górnym polu: wynik i znak
działania. Cyfry w klatce muszą dać ten wynik przy użyciu tego działania:

- \`7+\` oznacza, że cyfry w klatce sumują się do 7.
- \`12×\` oznacza, że mnożą się do 12.
- \`2−\` występuje zawsze na klatce z dwóch pól i oznacza, że jedna cyfra jest o 2 większa
  od drugiej (w dowolną stronę).
- \`3÷\` również dotyczy dwóch pól i oznacza, że jedna cyfra jest 3 razy większa od drugiej.

Inaczej niż w trybie Killer w Solo, klatka _może_ zawierać tę samą cyfrę dwa razy, o ile
oba wystąpienia nie leżą w tym samym wierszu ani w tej samej kolumnie. Nie ma żadnych cyfr
danych z góry; wskazówki to wszystko, co dostajesz, a każda łamigłówka ma dokładnie jedno
rozwiązanie. To łamigłówka publikowana jako KenKen.

## Sterowanie

Cyfra, która pojawia się dwa razy w swoim wierszu lub swojej kolumnie, czerwienieje,
podobnie jak wskazówka klatki, która jest całkowicie wypełniona, ale nie daje swojego
wyniku. **Rozwiąż** wpisuje rozwiązanie.

### Mysz i dotyk

- **Kliknij** pole, aby je wybrać, a potem użyj klawiatury na ekranie, aby wpisać cyfrę.
  Drugie kliknięcie wybranego pola cofa wybór.
- **⌫** na klawiaturze znów opróżnia wybrane pole, a **✎** włącza na stałe **notatki
  ołówkiem**: to, co wtedy wybierzesz, trafia tam jako mała notatka, a ta sama cyfra
  ponownie tę notatkę wymazuje. Notatki ołówkiem są tylko po to, aby ci pomóc myśleć;
  wpisanie cyfry je czyści.
- **Kliknij prawym przyciskiem** puste pole, aby od razu wybrać je do notatek ołówkiem.
- **Notatki** w menu pauzy wypełniają każde puste pole pełnym zestawem notatek
  ołówkiem.
- **Wyróżnij** (przycisk z lupą obok Cofnij) wyróżnia każde pole z tą samą cyfrą co ostatnio
  kliknięte pole i pokazuje tę cyfrę pogrubioną wśród notatek ołówkiem. Naciśnij go ponownie,
  aby to wyłączyć.

### Klawiatura (Keyboard)

- **Wpisz cyfrę**, aby wypełnić wybrane pole albo aby zanotować ją tam, gdy pole zostało
  wybrane do notatek ołówkiem.
- **Spacja** lub **Backspace** czyści wybrane pole (jego cyfrę albo wszystkie jego notatki
  ołówkiem).
- **Klawisze strzałek** przesuwają kursor klawiatury, a wpisywane cyfry trafiają do pola
  pod nim.
- **Enter** przełącza kursor między zwykłym wpisywaniem a notatkami ołówkiem.
- **M** to przycisk **Notatki**, a **L** przycisk **Wyróżnij**.

## Ustawienia

- **Rozmiar siatki**: od 3 do 9. Cyfry powyżej 9 byłyby niewygodne, więc 9 to granica.
- **Trudność**: najtrudniejszy rodzaj rozumowania, jakiego wymaga łamigłówka. Poziom _Łatwy_
  każe jedynie ustalać, które cyfry w ogóle mogą wystąpić w klatce; _Średni_ wymaga
  śledzenia, które pole klatki może zająć każda cyfra; _Trudny_ dokłada rozumowanie
  obejmujące kilka klatek (cyfry, które klatka musi umieścić w danym wierszu, nie mogą stać
  nigdzie indziej w tym wierszu) oraz zbiory pól, do których należy zbiór cyfr; _Ekspercki_
  dokłada łańcuchy wymuszeń; a łamigłówek na poziomie _Ekstremalny_ nie da się skończyć bez
  zgadywania i nawracania. Trudniejsze łamigłówki generują się dłużej, a siatki 3×3 nigdy
  nie wychodzą poza poziom Średni.
- **Tylko mnożenie**: każda wskazówka jest iloczynem, co usuwa łatwe klatki dwupolowe i
  daje całkiem inną łamigłówkę.
`,S=e({default:()=>C}),C=`# Rozświetl

Siatka białych i czarnych pól. Rozstawiaj żarówki na białych polach tak, aby każde białe
pole było oświetlone. Żarówka oświetla własne pole i świeci wzdłuż swojego wiersza i swojej
kolumny, dopóki nie stanie jej na drodze czarne pole albo krawędź. Na koniec muszą być
spełnione trzy warunki:

- każde białe pole jest oświetlone;
- żadna żarówka nie jest oświetlana przez inną, czyli żadne dwie żarówki nie widzą się
  wzdłuż wiersza ani kolumny;
- czarne pole z liczbą ma dokładnie tyle żarówek na polach bezpośrednio nad nim, pod nim,
  po jego lewej i po jego prawej stronie. Czarne pola bez liczby mogą mieć obok siebie
  dowolną liczbę żarówek.

Oświetlone pola są zalane żółcią. Żarówki, które świecą na siebie nawzajem, czerwienieją,
podobnie jak liczba, której nie da się już spełnić: ma już obok siebie za dużo żarówek
albo nie ma już miejsca na tyle, ile trzeba.

## Sterowanie

Łamigłówka jest skończona, gdy cała siatka świeci i nic nie jest pokazane na czerwono.
**Podpowiedź** stawia jedną żarówkę — albo zabiera taką, której nie ma w rozwiązaniu — a resztę
zostawia tobie; gra toczy się dalej, a po kilku podpowiedziach wygrana i gwiazdka wciąż
należą do ciebie. **Rozwiąż** wstawia żarówki jednego z rozwiązań, zostawiając na miejscu narysowane przez
ciebie krzyżyki.

### Mysz i dotyk

- **Kliknij** białe pole, aby postawić tam żarówkę, i jeszcze raz, aby ją zabrać.
- **Kliknij prawym przyciskiem** białe pole, aby zanotować ołówkiem krzyżyk oznaczający
  „tu nie może stanąć żarówka”; kliknij prawym przyciskiem ponownie, aby go wymazać. Pole
  z krzyżykiem nie przyjmie żarówki, dopóki krzyżyk nie zniknie, a na polu z żarówką nie
  da się postawić krzyżyka.
- **Krzyżyk** (przycisk z krzyżykiem obok Cofnij) sprawia, że zwykłe kliknięcie notuje ołówkiem
  lub wymazuje krzyżyk zamiast żarówki — przydaje się, gdy wykluczasz naraz wiele pól. Naciśnij
  go ponownie, aby wrócić do żarówek.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor po siatce.
- **Enter** stawia lub usuwa żarówkę pod kursorem, a **Spacja** (albo **I**) przełącza tam
  krzyżyk.
- **X** to przycisk **Krzyżyk**.

## Ustawienia

- **Szerokość** i **wysokość** siatki.
- **% czarnych pól**: mniej więcej jaka część siatki jest czarna. To wskazówka, a nie
  obietnica: jeśli przy takim zagęszczeniu nie da się ułożyć żadnej łamigłówki, generator
  użyje kilku czarnych pól więcej.
- **Symetria**: wzór, według którego układają się czarne pola — brak, odbicie lub obrót
  dwóch połówek albo czterokrotne odbicie lub obrót. Obrót czterokrotny wymaga kwadratowej
  siatki.
- **Trudność**: łamigłówki na poziomie _Łatwy_ poddają się rozumowaniu pole po polu o tym,
  które pola muszą, a które nie mogą mieć żarówki. Te na poziomie _Średni_ wymagają
  zestawiania ze sobą całych zbiorów pól („jedno z tych trzech musi być żarówką, a to
  wyklucza tamto”). Łamigłówki na poziomie _Trudny_ mogą wymagać postawienia gdzieś żarówki
  na próbę i śledzenia konsekwencji, aż coś się nie zgodzi. Każda łamigłówka ma dokładnie
  jedno rozwiązanie.
`,w=e({default:()=>T}),T=`# Pętla

Siatka kropek, a w niektórych polach między nimi widnieje liczba. Narysuj jedną zamkniętą
pętlę wzdłuż delikatnych linii między kropkami tak, aby:

- każde pole z liczbą miało dokładnie tyle swoich boków na pętli;
- pętla nigdy się nie przecinała ani nie dotykała samej siebie — każda kropka ma albo dwie
  linie, albo żadnej — i aby pętla była tylko jedna, bez luźnych końców i osobnych
  kawałków.

Klasyczna wersja korzysta z kwadratów, ale ta sama łamigłówka działa też na trójkątach,
sześciokątach i tuzinie dziwniejszych parkietaży, w których liczby potrafią sięgać znacznie
powyżej 4.

Linie tworzące błędną pętlę albo schodzące się po trzy w jednej kropce robią się czerwone;
liczba, wokół której jest zbyt wiele linii albo której zostało zbyt mało możliwych boków,
też robi się czerwona. Liczba szarzeje, gdy ma wokół siebie dokładnie tyle linii, ile
trzeba.

## Sterowanie

**Rozwiąż** rysuje całą pętlę. Łamigłówka jest ukończona, gdy tylko pętla jest zamknięta, a
każda liczba się zgadza; skreślanie nieużywanych krawędzi jest nieobowiązkowe.

### Mysz i dotyk

- **Kliknij** delikatną krawędź, aby narysować na niej linię; kliknij tę linię ponownie,
  aby ją usunąć.
- **Kliknij prawym przyciskiem** krawędź, aby ją skreślić, czyli oznaczyć jako na pewno
  nienależącą do pętli; kliknij prawym przyciskiem ponownie, aby zdjąć to oznaczenie.
  Zarówno kliknięcie, jak i kliknięcie prawym przyciskiem usuwa też oznaczenie zostawione
  przez to drugie.
- **Krzyżyk** (przycisk z krzyżykiem obok Cofnij) sprawia, że zwykłe kliknięcie skreśla krawędź
  albo czyści skreślenie, zamiast rysować linię. Naciśnij go ponownie, aby wrócić do rysowania
  linii.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor od krawędzi do krawędzi; **Enter** rysuje lub
  usuwa linię na krawędzi pod kursorem, a **Spacja** skreśla ją albo czyści skreślenie.
- **X** to przycisk **Krzyżyk**.

## Ustawienia

- **Szerokość** i **wysokość** siatki, liczone w polach parkietażu. Dla siatki kwadratowej
  jest to po prostu liczba kwadratów w poziomie i w pionie; inne parkietaże liczą swoje
  powtarzalne jednostki, więc rzeczywista liczba ścianek bywa różna.
- **Rodzaj siatki**: _Kwadratowa_, _Trójkątna_ i _Plaster miodu_ to parkietaże regularne.
  _Ścięta kwadratowa_, _Kairska_, _Wielka sześciokątna_, _Ośmiokątna_, _Latawce_,
  _Rozetka_, _Dwunastokątna_ i _Wielka dwunastokątna_ mieszają kształty, a dwa parkietaże
  _Penrose_ nie powtarzają się w ogóle.
- **Trudność**: łamigłówki na poziomie _Łatwy_ wymagają tylko samych reguł — policzenia
  linii wokół liczby, pamiętania, że kropka ma dwie linie albo żadnej, i niezamykania pętli
  za wcześnie. _Średni_ dokłada rozumowanie o parach krawędzi schodzących się w kropce (co
  najwyżej jedna albo co najmniej jedna z pary jest linią). _Trudny_ pozwala takim faktom
  przechodzić z kropki na kropkę, na przykład wzdłuż ukośnego ciągu dwójek. _Ekspercki_
  śledzi dodatkowo krawędzie, o których wiadomo, że są sobie równe albo przeciwne.
  Zgadywanie nigdy nie jest potrzebne; każda łamigłówka ma dokładnie jedno rozwiązanie.
`,E=e({default:()=>D}),D=`# Magnesy

Prostokąt został wyłożony kostkami domina, pokazanymi jedynie jako obrysy. Każda kostka
jest albo magnesem — jedna połowa to biegun \`+\`, druga biegun \`−\` — albo kostką pustą, bez
żadnych biegunów. Liczby wokół krawędzi mówią, ile biegunów \`+\` (nad kolumnami i na lewo od
wierszy) i ile biegunów \`−\` (pod kolumnami i na prawo od wierszy) mieści każda linia; brak
liczby oznacza brak wskazówki dla tej linii. Wypełnij każdą kostkę tak, aby wszystkie
liczby się zgadzały i aby żadne dwa jednakowe bieguny nigdy nie leżały obok siebie: \`+\`
nigdy nie może dotykać \`+\`, a \`−\` nie może dotykać \`−\` przez granicę kostek. Puste kostki
są obojętne i mogą sąsiadować z czymkolwiek.

Stykające się jednakowe bieguny są pokazane na czerwono. Liczba robi się czerwona, gdy nie
da się jej już spełnić — biegunów jest za dużo albo za mało i nie ma ich już gdzie dołożyć
— a szarzeje, gdy zostanie dokładnie spełniona. Łamigłówka jest ukończona, gdy każda kostka
jest wypełniona, każda liczba się zgadza i nic nie jest czerwone.

## Sterowanie

### Mysz i dotyk

- **Kliknij** niewypełnioną połowę kostki, aby zrobić z niej biegun \`+\` (druga połowa
  staje się \`−\`). Kliknij tę samą połowę ponownie, aby odwrócić magnes, a za trzecim razem
  kostka zostanie opróżniona. Kliknięcie kostki oznaczonej jako pusta nic nie daje.
- **Kliknij prawym przyciskiem** niewypełnioną kostkę, aby oznaczyć ją jako pustą.
  Kliknij prawym przyciskiem ponownie, aby w miejsce pustej kostki pojawiły się znaki
  zapytania — notatka, że kostka na pewno jest magnesem; za trzecim razem kostka znów
  będzie niewypełniona. Kliknięcie prawym przyciskiem magnesu nic nie daje.
- **Pusta** (przycisk z zacieniowaną kostką obok Cofnij) sprawia, że zwykłe kliknięcie działa
  jak kliknięcie prawym przyciskiem: oznacza kostkę jako pustą, potem stawia znaki zapytania, a
  potem znów ją opróżnia. Naciśnij go ponownie, aby wrócić do stawiania magnesów.
- **Rozwiąż** wypełnia całe rozwiązanie.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor po siatce.
- **Enter** przełącza połowę pod kursorem kolejno na \`+\`, \`−\` i stan pusty, dokładnie tak
  jak kliknięcie lewym przyciskiem.
- **Spacja** przełącza kostkę pod kursorem kolejno na pustą, ze znakami zapytania i
  niewypełnioną, dokładnie tak jak kliknięcie prawym przyciskiem.
- **B** to przycisk **Pusta**.

## Ustawienia

- **Szerokość** i **wysokość** siatki. Gdy liczba pól jest nieparzysta, jedno pole zostaje
  wolne i jest rysowane w kreskę; nie należy do żadnej kostki i liczy się jako neutralne.
- **Trudność**: łamigłówki na poziomie _Łatwy_ wymagają zawsze patrzenia tylko na jedną
  linię lub jedną kostkę naraz — na liczbę, która jest już spełniona, na liczbę, która
  potrzebuje wszystkich pozostałych kandydatów, albo na kostkę, której żadna połowa nie może
  przyjąć danego bieguna. Poziom _Trudny_ wymaga dodatkowo rozumowania o całych kostkach
  leżących wzdłuż linii: kostka, która musi być magnesem, dostarcza po jednym biegunie
  każdego rodzaju, jakkolwiek by ją obrócić, w linii, w której ma zostać puste tylko jedno
  pole, nie zmieści się pusta kostka ułożona wzdłuż niej, i tak dalej. Każda łamigłówka ma
  dokładnie jedno rozwiązanie.
- **Okrojone wskazówki**: usuwa każdą liczbę, która nie jest potrzebna do rozwiązania
  łamigłówki na wybranym poziomie trudności, przez co znacznie trudniej znaleźć punkt
  zaczepienia.
`,O=e({default:()=>k}),k=`# Mapa

Mapa jest podzielona na obszary. Pokoloruj każdy obszar jednym z czterech kolorów tak, aby
żadne dwa obszary mające wspólny odcinek granicy nie miały tego samego koloru. Obszary
stykające się tylko rogiem mogą mieć ten sam kolor. Kilka obszarów jest pokolorowanych z
góry, a dobrano je tak, że mapę można dokończyć dokładnie na jeden sposób.

Dwa sąsiadujące obszary w tym samym kolorze są oznaczone czerwonym \`!\` na granicy między
nimi.

## Sterowanie

**Rozwiąż** koloruje całe rozwiązanie. Mapa błyska, gdy każdy obszar jest pokolorowany i
nic nie jest czerwone.

### Mysz i dotyk

- **Przeciągnij** kolor: naciśnij na obszarze (albo na jednej z próbek pod mapą) i puść na
  innym obszarze, aby nadać mu ten kolor. Przeciągnięcie z niepokolorowanego obszaru, z
  pustej przestrzeni wokół mapy albo z próbki gumki czyści obszar, na którym upuścisz
  kolor.
- **Kliknij próbkę**, aby wybrać kolor, a potem **kliknij** obszary, aby je pomalować;
  kliknij wybraną próbkę ponownie, aby ją odznaczyć.
- **Przeciągnij prawym przyciskiem** kolor na niepokolorowany obszar, aby zanotować
  ołówkiem małą kropkę w tym kolorze, czyli zapisać, że obszar _może_ być w tym kolorze.
  Obszar może nosić kilka kropek ołówkiem; ponowne przeciągnięcie tego samego koloru usuwa
  jego kropkę. Gdy próbka jest wybrana, zwykłe **kliknięcie prawym przyciskiem** na
  niepokolorowanym obszarze przełącza jego kropkę.
- **Numery** (w menu pauzy) pokazują numer w każdym obszarze, co ułatwia rozmowę o łamigłówce z
  kimś innym, i chowają je z powrotem.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor po mapie; obszar, w którym się on znajduje, jest
  obrysowany. Klawisze **1**–**4** kolorują ten obszar, **Spacja** go czyści, a **Enter**
  podnosi jego kolor, dzięki czemu możesz przenieść go klawiszami strzałek i upuścić
  klawiszem **Enter** (albo jako kropkę ołówkiem **spacją**). Dwukrotne
  naciśnięcie **Enter** bez przemieszczania kursora czyści obszar.
- **L** to przycisk **Numery**.

## Ustawienia

- **Szerokość** i **wysokość** siatki, na której narysowana jest mapa, w polach.
- **Obszary**: na ile obszarów pocięta jest mapa.
- **Trudność**: w łamigłówkach na poziomie _Łatwy_ zawsze jest obszar, któremu został tylko
  jeden możliwy kolor. _Średni_ dokłada rozumowanie o parach sąsiadujących obszarów, które
  muszą podzielić między siebie te same dwa kolory. _Trudny_ wymaga łańcuchów takich
  wniosków przez całą mapę. Wszystkie te poziomy da się rozwiązać bez zgadywania.
  _Ekstremalny_ obiecuje jedynie, że rozwiązanie jest jednoznaczne; czasem trzeba spróbować
  jakiegoś koloru i śledzić go, aż coś się nie zgodzi.
`,A=e({default:()=>j}),j=`# Miny

Siatka zakrytych pól kryje pewną liczbę min. Odkryj każde pole, pod którym _nie_ ma miny.
Każde otwarte pole pokazuje, ile spośród jego ośmiu sąsiadów to miny; otwarcie miny
oznacza przegraną.

Haczyk w tej wersji polega na tym, że nigdy nie musisz zgadywać. Nic nie jest przesądzone
aż do twojego pierwszego kliknięcia: dopiero wtedy miny zostają rozłożone tak, aby pole
wskazane kliknięciem było puste, a całą siatkę dało się od tego miejsca wywnioskować
czystym rozumowaniem. Jeśli kiedykolwiek utkniesz, gdzieś zawsze jest bezpieczne pole,
które liczby już udowadniają.

Pasek stanu pokazuje, ile flag już stoi w stosunku do liczby min, a zegar
rusza z twoim pierwszym kliknięciem. Trafienie na minę odsłania wszystkie pozostałe i
przekreśla błędnie postawione flagi; możesz cofnąć to fatalne kliknięcie i grać dalej, ale
zgon zostaje zapamiętany na pasku stanu.

## Sterowanie

### Mysz i dotyk

- **Kliknij** zakryte pole, aby je otworzyć. Otwarcie pustego pola (bez min w sąsiedztwie)
  otwiera także jego sąsiadów, i tak dalej na zewnątrz.
- **Kliknij prawym przyciskiem** zakryte pole, aby postawić flagę na podejrzewanej minie, i
  jeszcze raz, aby ją zdjąć. Pól z flagą nie da się otworzyć przez przypadek.
- **Kliknij liczbę**, wokół której stoi już właściwa liczba flag, aby za jednym razem
  otworzyć wszystkich jej pozostałych zakrytych sąsiadów. To samo robi
  **kliknięcie środkowym przyciskiem** na takiej liczbie.
- **Podpowiedź** odkrywa jedno bezpieczne pole — albo zdejmuje flagę, pod którą nie ma miny
  — a resztę siatki zostawia tobie. Po kilku podpowiedziach wygrana i gwiazdka wciąż
  należą do ciebie.
- **Rozwiąż** odsłania cały układ i oznacza flagą każdą minę. Nie liczy się to jako twoja
  własna wygrana.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor po siatce.
- **Enter** działa jak kliknięcie lewym przyciskiem na polu pod kursorem: otwiera zakryte
  pole albo odsłania okolicę liczby, przy której wszystkie flagi są już na miejscu.
- **Spacja** stawia flagę lub ją zdejmuje, tak jak kliknięcie prawym przyciskiem.

## Ustawienia

- **Szerokość** i **wysokość** siatki.
- **Miny**: ile min ukryć. Zamiast liczby możesz podać procent, na przykład \`20%\`. Przy
  bardzo dużych gęstościach znalezienie rozwiązywalnej siatki trwa długo.
- **Zapewnij rozwiązywalność**: gdy jest włączone (domyślnie), układ na pewno da się
  rozwiązać od pierwszego kliknięcia bez zgadywania. Wyłącz je, aby dostać zwykłe losowe
  siatki, które na koniec mogą zostawić cię z rzutem monetą.
`,M=e({default:()=>N}),N=`# Sieć

Przez siatkę kwadratowych kafelków poprowadzono sieć przewodów, a potem każdy kafelek
obrócono losowo. Obróć kafelki z powrotem tak, aby wszystkie połączyły się w jedną sieć:
każdy koniec przewodu musi trafić na przewód sąsiedniego kafelka i żaden przewód nie może
wskazywać ściany. Gotowa sieć jest drzewem, więc nie ma w niej zamkniętych pętli.

Kafelki już podłączone do kafelka źródłowego na środku siatki są dla orientacji rysowane na
niebiesko; reszta pozostaje szara. Przewód należący do pętli jest rysowany na czerwono.
Grube czarne linie między kafelkami to bariery: żaden przewód nie może ich przeciąć, co
podpowiada, jak muszą stać kafelki po obu stronach. Pasek stanu pokazuje, ile kafelków jest
w tej chwili zasilanych.

## Sterowanie

### Mysz i dotyk

- **Kliknij** kafelek, aby obrócić go przeciwnie do ruchu wskazówek zegara, a
  **kliknij prawym przyciskiem**, aby obrócić go zgodnie z ruchem wskazówek zegara.
- **Kliknij środkowym przyciskiem** kafelek, aby nałożyć na niego **blokadę**, gdy masz już co do
  niego pewność. Zablokowany kafelek jest zacieniowany i nie obróci się, dopóki kolejne
  kliknięcie środkowym przyciskiem go nie odblokuje. Kliknięcie prawym przyciskiem obraca
  kafelek, zamiast go blokować, więc do zablokowania służy właśnie
  kliknięcie środkowym przyciskiem.
- **Blokada** (przycisk z kłódką obok Cofnij) sprawia, że zwykłe kliknięcie blokuje lub
  odblokowuje kafelek zamiast go obracać, co na gładziku jest łatwiejsze niż
  kliknięcie środkowym przyciskiem. Kliknięcie prawym przyciskiem nadal obraca kafelek zgodnie z
  ruchem wskazówek zegara. Naciśnij go ponownie, aby wrócić do obracania.
- **Zamieszaj** obraca każdy niezablokowany kafelek w nowe losowe położenie — dla odmiany,
  gdy łamigłówka utknęła w miejscu.
- Na zawijanej siatce cztery **przyciski strzałek** przewijają widok, dzięki czemu kafelki
  z przeciwnych krawędzi można zestawić obok siebie.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor po siatce.
- **Enter** lub **A** obraca kafelek pod kursorem przeciwnie do ruchu wskazówek zegara,
  **D** obraca go zgodnie z ruchem wskazówek zegara, a **F** obraca go o pół obrotu.
- **Spacja**, **S** lub **L** blokuje albo odblokowuje kafelek pod kursorem. Przy użyciu
  myszy **Shift+kliknięcie** także blokuje kafelek, dokładnie tak jak
  kliknięcie środkowym przyciskiem.
- **K** to przycisk **Blokada**, a **J** przycisk **Zamieszaj**.
- Na zawijanej siatce **Shift + klawisze strzałek** przewijają widok (tak samo jak cztery
  przyciski strzałek), dzięki czemu kafelki z przeciwnych krawędzi widać obok siebie.
  **Ctrl + klawisze strzałek** przesuwają kafelek źródłowy, od którego rozchodzi się
  niebieskie podświetlenie.

## Ustawienia

- **Szerokość** i **wysokość** siatki w kafelkach.
- **Zawijanie krawędzi**: przewody mogą wybiegać poza jedną krawędź siatki i wracać z
  przeciwnej.
- **Prawdopodobieństwo bariery**: liczba od 0 do 1 określająca, jaka część krawędzi bez
  przewodów dostaje barierę. Bariery nigdy nie zmieniają układu przewodów: to samo losowe
  ziarno zawsze daje tę samą siatkę, więc podniesienie prawdopodobieństwa tylko dokłada
  podpowiedzi.
- **Zapewnij jedno rozwiązanie**: normalnie łamigłówka jest ułożona tak, że pasuje
  dokładnie jedno ustawienie kafelków. Wyłącz to ustawienie, aby generowanie było szybsze,
  kosztem sporadycznych niejednoznacznych fragmentów.
`,P=e({default:()=>F}),F=`# Przesuwna sieć

Każdy kafelek nosi fragment okablowania: prosty odcinek, zakręt, trójnik albo ślepy koniec
z kropką. Poskładane właściwie, fragmenty tworzą jedną sieć, która ze źródła zasilania na
zacienionym środkowym kafelku dociera do każdego kafelka, bez pętli i bez ramion
wskazujących w próżnię. Siatka została pomieszana przesuwaniem całych wierszy i kolumn,
więc tylko w ten sposób da się ją naprawić: żadnego kafelka nie można obrócić, można go
jedynie przesunąć.

Kafelki, które obecnie otrzymują zasilanie, są rysowane na niebiesko; reszta pozostaje
szara. Grube czarne ściany między kafelkami to bariery. Przez barierę nic się nie połączy,
więc bariery mówią ci, gdzie gotowa sieć na pewno nie ma połączenia.

## Sterowanie

### Mysz i dotyk

- **Kliknij** strzałkę obok wiersza lub kolumny, aby przesunąć całą tę linię o jeden krok w
  stronę, którą wskazuje strzałka. Kafelek wypchnięty z jednego końca wraca z drugiego
  końca tej samej linii. **Kliknij prawym przyciskiem** strzałkę, aby przesunąć linię w
  drugą stronę.
- Środkowy wiersz i środkowa kolumna nie mają strzałek: źródło zasilania nigdy się nie
  rusza.
- **Rozwiąż** przeskakuje prosto do gotowej sieci, żeby można ją było porównać z własną
  próbą.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają podświetlenie po pierścieniu strzałek.
- **Enter** przesuwa podświetloną linię w stronę wskazywaną przez jej strzałkę, a **Spacja**
  przesuwa ją w przeciwną.

## Ustawienia

- **Szerokość** i **wysokość** siatki.
- **Zawijanie krawędzi**: gdy jest włączone, prawa krawędź ma ciąg dalszy po lewej, a
  dolna u góry, więc okablowanie (i bariery) mogą przechodzić przez krawędź siatki.
  Przerywana ramka oznacza siatkę zawijaną; ciągła gruba ramka to ściana dookoła.
- **Prawdopodobieństwo bariery**: ile z nieużywanych krawędzi kafelków dostaje barierę, od
  0 (żadna) do 1 (każda krawędź, której gotowa sieć nie używa). Więcej barier ułatwia
  łamigłówkę. Bariery są dobierane niezależnie od reszty siatki, więc to samo losowe ziarno
  z wyższym prawdopodobieństwem bariery daje tę samą łamigłówkę z większą liczbą
  podpowiedzi.
- **Liczba ruchów tasujących**: zostaw 0, aby siatka została porządnie pomieszana, albo
  podaj liczbę, aby pomieszać ją dokładnie tyloma przesunięciami. Celem jest wtedy
  odnalezienie ich i odwrócenie; pasek stanu pokazuje cel.
`,I=e({default:()=>L}),L=`# Wzór

Każde pole siatki jest w tajemnicy czarne albo białe. Liczby obok każdego wiersza i nad
każdą kolumną podają długości serii czarnych pól w tej linii, po kolei, z co najmniej
jednym białym polem między kolejnymi seriami. Zamaluj czarne pola tak, aby każdy wiersz i
każda kolumna zgadzały się ze swoimi liczbami. Łamigłówki tego rodzaju nazywa się zwykle
nonogramami albo picrossem.

Obrazki powstają tu losowo, więc nie ma żadnego rysunku do odgadnięcia: wszystko trzeba
wywnioskować z liczb. Każda łamigłówka jest z góry sprawdzana, aby dało się ją rozwiązać,
rozważając po jednym wierszu albo po jednej kolumnie naraz — nigdy nie musisz niczego
próbować na chybił trafił.

Liczby przy linii szarzeją, gdy czarne serie w tej linii do nich pasują, i czerwienieją,
gdy gotowe już serie nie mogą się w te liczby zmieścić. Łamigłówka jest skończona, gdy
każdy wiersz i każda kolumna pasuje do swoich liczb; kropki są tylko po to, aby ci pomóc
zapamiętać.

## Sterowanie

### Mysz i dotyk

- **Kliknij** pole, aby zamalować je na czarno; kliknij czarne pole ponownie, aby je
  wyczyścić.
- **Kliknij prawym przyciskiem**, aby oznaczyć pole kropką, czyli że na pewno jest białe;
  kliknij prawym przyciskiem pole z kropką, aby je wyczyścić.
- **Przeciągnij**, aby zamalować za jednym razem prostą linię czarnych pól, a
  **przeciągnij prawym przyciskiem**, aby położyć linię kropek. Zmieniają się tylko pola,
  które były w tym samym stanie co to, od którego zaczynasz, więc przeciągnięcie rzędu
  kropek po twoich czarnych polach zostawia je w spokoju.
- **Kliknij środkowym przyciskiem** pole, aby wymazać je z powrotem do stanu nieznanego.
  Przy użyciu myszy przeciąganie z wciśniętym kółkiem czyści cały prostokąt, cokolwiek w nim
  jest.
- **Gumka** (przycisk z gumką obok Cofnij) sprawia, że lewy przycisk robi to samo: kliknij pole,
  aby je wymazać, albo przeciągnij, aby wyczyścić cały prostokąt. Naciśnij go ponownie, aby
  wrócić do zamalowywania na czarno.
- **Podpowiedź** wypełnia jedno pole, zawsze takie, które rozstrzyga sam jeden wiersz albo
  jedna kolumna — albo poprawia pole sprzeczne z rozwiązaniem. Gra toczy się dalej, a po
  kilku podpowiedziach wygrana i gwiazdka wciąż należą do ciebie.
- **Rozwiąż** wypełnia za ciebie cały obrazek.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor.
- **Enter** zamalowuje pole pod kursorem na czarno albo je czyści, a **Spacja** stawia lub
  usuwa kropkę.
- Przytrzymaj **Ctrl** przy przesuwaniu kursora, aby zamalowywać po drodze na czarno,
  **Shift**, aby kłaść kropki, albo oba naraz, aby czyścić.
- Przy myszy **Shift+kliknięcie** czyści pola dokładnie tak, jak robi to
  kliknięcie środkowym przyciskiem.
- **E** to przycisk **Gumka**.

## Ustawienia

- **Szerokość** i **wysokość** siatki. Gotowe rozmiary sięgają od 10×10 do 30×30; większe
  siatki generują się nieco dłużej.
`,R=e({default:()=>z}),z=`# Perły

Siatka pól, z których niektóre kryją czarną albo białą perłę. Narysuj jedną zamkniętą
pętlę biegnącą od środka pola do środka pola, poziomo albo pionowo, nigdy się nie
przecinając ani nie rozgałęziając. Pętla nie musi odwiedzić każdego pola, ale musi
przechodzić przez każdą perłę:

- przy **czarnej perle** pętla skręca, a potem biegnie prosto przez oba pola sąsiadujące
  z perłą wzdłuż pętli;
- przy **białej perle** pętla biegnie prosto, a skręca w co najmniej jednym z dwóch pól
  sąsiadujących z perłą wzdłuż pętli.

Liczą się tylko pola, które pętla odwiedza tuż przed perłą i tuż po niej, a nie każde
pole stykające się z nią w siatce.

Perła, której reguła jest już złamana, dostaje czerwoną poświatę. Gdy tylko powstanie
jakakolwiek zamknięta pętla, każdy odcinek poza nią jest rysowany na czerwono, a razem z
nim każde pole z trzema albo więcej odcinkami.

## Sterowanie

**Rozwiąż** rysuje całą pętlę. Łamigłówka jest skończona, gdy pętla tworzy jeden zamknięty
obwód i nic nie jest czerwone.

### Mysz i dotyk

- **Kliknij** krawędź siatki (blisko granicy między dwoma polami), aby narysować w poprzek
  niej odcinek pętli; kliknij ponownie, aby go usunąć.
- **Przeciągnij** przez szereg pól, aby narysować od razu cały ciąg odcinków. Przeciąganie
  wzdłuż istniejących odcinków usuwa je; przeciągnięcie, które zaczyna się na istniejących
  odcinkach i biegnie dalej w puste pola, najpierw wymazuje, a potem rysuje. Wróć nad pole,
  które masz już za sobą, aby skrócić ścieżkę, zanim puścisz; wróć na pole startowe, aby
  zamknąć pętlę.
- **Kliknij prawym przyciskiem** krawędź siatki, aby postawić mały krzyżyk oznaczający
  „tu nie ma odcinka”; przez krzyżyk nie da się poprowadzić odcinka, dopóki go nie
  usuniesz.
  **Przeciągnij prawym przyciskiem** przez ciąg pól, aby postawić krzyżyk na każdej
  krawędzi, którą miniesz.
- **Krzyżyk** (przycisk z krzyżykiem obok Cofnij) sprawia, że zwykłe kliknięcie stawia lub
  zdejmuje krzyżyk, a przeciągnięcie kładzie cały ich rząd: tak jak przy rysowaniu,
  przeciągnięcie zaczęte na krzyżykach najpierw je zdejmuje, a krawędzie, na których już jest
  odcinek, pomija. Naciśnij go ponownie, aby wrócić do rysowania pętli.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor. **Ctrl+strzałka** rysuje lub usuwa odcinek po
  tej stronie pola z kursorem, **Shift+strzałka** stawia tam lub usuwa krzyżyk. **Enter**
  rozpoczyna przeciąganie z klawiatury od pola z kursorem: przesuwaj się strzałkami i
  naciśnij Enter ponownie, aby zatwierdzić ścieżkę, albo **Spacja**, aby z niej
  zrezygnować.
- **X** to przycisk **Krzyżyk**; gdy jest włączony, przeciąganie z klawiatury też kładzie
  krzyżyki.

## Ustawienia

- **Szerokość** i **wysokość** siatki, w polach (co najmniej pięć każda).
- **Trudność**: na poziomie _Łatwy_ łamigłówki rozwiązuje się, rozważając każdą perłę i
  pola tuż obok niej. Na poziomie _Podchwytliwy_ trzeba dodatkowo zauważyć, kiedy odcinek
  zamknąłby małą pętlę za wcześnie, zostawiając inne perły na lodzie. (Siatka 5×5 na
  poziomie Podchwytliwy jest generowana jako Łatwy, tak jak w oryginale.)
- **Zezwól na nierozwiązywalne**: zachowuje każdą perłę, którą pętla utrzymuje, zamiast
  przycinać je do minimalnego zestawu dającego jedno rozwiązanie. Opcja do debugowania,
  odziedziczona po oryginale.
`,B=e({default:()=>V}),V=`# Kołki

Plansza pełna kołków z jednym pustym otworem, a na losowej planszy z kilkoma. Kołek może przeskoczyć poziomo albo pionowo
nad sąsiednim kołkiem do pustego otworu tuż za nim; przeskoczony kołek zostaje zdjęty.
Skacz dalej, aż na planszy zostanie tylko jeden kołek.

To stara gra zwana samotnikiem (peg solitaire). Plansza **Krzyż** to znany układ
angielski, plansza **Ośmiokąt** — europejski (zaczyna się z pustym otworem poza środkiem,
bo od środka nie da się jej skończyć), a plansze **Losowa** to dziwaczne kształty
wygenerowane przez komputer. Puste obszary bez otworu po prostu nie należą do planszy.

Nie da się utknąć na dobre: jeśli nie został żaden skok, a kołków jest więcej niż jeden,
gra się kończy, ale Cofnij zabiera cię wstecz tak daleko, jak chcesz. Pasek stanu liczy
pozostałe kołki i wykonane ruchy.

## Sterowanie

### Mysz i dotyk

- **Przeciągnij** kołek i upuść go na pustym otworze dokładnie dwa pola dalej, w linii
  prostej nad innym kołkiem. Każde inne upuszczenie odkłada kołek na miejsce.
- Albo **kliknij** kołek, aby go podnieść (zrobi się pomarańczowy, a możliwe otwory do
  lądowania zostaną oznaczone), a potem kliknij otwór, do którego chcesz skoczyć. Ponowne
  kliknięcie tego samego kołka odkłada go.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor po planszy.
- **Enter** albo **Spacja** na kołku podnosi go; klawisz strzałki przeskakuje nim wtedy w
  danym kierunku, o ile to dozwolony ruch, a ponowny **Enter** odkłada go z powrotem.

## Ustawienia

- **Szerokość** i **wysokość** planszy, każda co najmniej 4.
- **Rodzaj planszy**: _Krzyż_ i _Ośmiokąt_ to tradycyjne układy, dostępne tylko w
  rozmiarze 7×7. _Losowa_ daje za każdym razem inny kształt planszy, zawsze taki, który da
  się zredukować do jednego kołka, bo powstał przez odtwarzanie skoków wstecz od
  pojedynczego kołka.
`,H=e({default:()=>U}),U=`# Zasięg

Niektóre pola siatki kryją liczbę. Zamaluj pola na czarno tak, aby zachodziły naraz
cztery rzeczy:

- żadne pole z liczbą nie jest czarne;
- żadne dwa czarne pola nie stykają się bokiem (rogi są w porządku);
- wszystkie białe pola tworzą jeden spójny obszar, połączony bok w bok;
- każda liczba zlicza białe pola, które widzi jej własne pole: samo siebie oraz wszystko
  w linii prostej w górę, w dół, w lewo i w prawo, aż drogę zagrodzi czarne pole albo
  krawędź siatki.

To _Kurodoko_ wydawnictwa Nikoli, znane też jako _Kuromasu_ albo _Where is Black Cells_.
Liczba, która widzi już dość pól, ma czarne pole tuż za każdym ciągiem, jaki widzi;
liczba, która widziałaby za dużo, gdyby jedno nieznane pole było białe, ma tam zamiast
tego czarne pole. Zamalowanie pola będącego jedynym łącznikiem między dwiema grupami
białych pól nigdy nie jest właściwe. Każdą łamigłówkę da się skończyć takim rozumowaniem;
nie trzeba zgadywać.

Błędy widać na czerwono: stykające się czarne pola dostają czerwoną ramkę wokół grupy,
białe pola odcięte od głównego obszaru dostają czerwony obrys, a liczba czerwienieje, gdy
nie może już zobaczyć dość pól albo na pewno widzi ich za dużo. Łamigłówka jest skończona,
gdy żadna reguła nie jest złamana; nie trzeba stawiać kropek na białych polach.

## Sterowanie

### Mysz i dotyk

- **Kliknij** pole, aby zamalować je na czarno. Kliknij ponownie, aby zamienić je w kropkę
  (pole, o którym wiesz, że jest białe), a jeszcze raz, aby je wyczyścić.
- **Kliknij prawym przyciskiem**, aby przechodzić przez te stany w drugą stronę: najpierw
  kropka, potem czerń, potem puste pole.
- **Przeciągnij**, aby zamalować kilka pól za jednym razem, albo
  **przeciągnij prawym przyciskiem**, aby przejechać po nich w drugą stronę. Zmieniają się
  tylko pola, które na początku wyglądały tak jak pierwsze, więc przejazd z kropkami
  zostawia twoje czarne pola w spokoju.
- **Gumka** (przycisk z gumką obok Cofnij) sprawia, że kliknięcie zamiast tego czyści pole, a
  przeciągnięcie czyści każde czarne pole i każdą kropkę, przez które przejdzie, bez względu na
  to, co to jest. Naciśnij go ponownie, aby wrócić do malowania.
- **Podpowiedź** wypełnia jedno pole, które wynika już z tego, co jest na planszy — albo
  poprawia pole, które przeczy rozwiązaniu. Łamigłówka toczy się dalej, a kilka podpowiedzi
  nie odbiera ci wygranej ani gwiazdki za nią.
- **Rozwiąż** wypełnia całą siatkę, stawiając kropkę na każdym białym polu.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor po siatce.
- **Enter** działa na polu pod kursorem jak kliknięcie lewym przyciskiem, a **Spacja** jak
  kliknięcie prawym przyciskiem.
- **E** to przycisk **Gumka**, a **H** przycisk **Podpowiedź**.

## Ustawienia

- **Szerokość** i **wysokość** siatki. Gotowe rozmiary biegną od 9×6 do 16×11; wygenerować
  da się wszystko do 30×30, choć maleńkie siatki o jednym czy dwóch polach nie dają
  uczciwych łamigłówek.
`,W=e({default:()=>G}),G=`# Prostokąty

Niektóre pola siatki noszą liczbę. Potnij całą siatkę na prostokąty tak, aby każdy
prostokąt zawierał dokładnie jedną liczbę, a ta liczba była jego polem powierzchni
(szerokość razy wysokość). Szóstka na przykład siedzi w bloku 1×6, 2×3, 3×2 albo 6×1;
w którym z nich i gdzie leży w nim sama liczba, masz wywnioskować z sąsiadów.

Łamigłówki powstają losowo, a domyślnie liczby są rozmieszczone tak, że pasuje tylko jeden
podział siatki. Oryginał pochodzi z japońskiego magazynu Nikoli, gdzie nosi nazwę Shikaku.

## Sterowanie

### Mysz i dotyk

- **Przeciągnij** po obszarze, aby narysować wokół niego prostokąt: powstaje jego obrys, a
  wszystkie linie w środku znikają. Przeciągnięcie wzdłuż linii siatki rysuje tylko tę
  jedną linię.
- **Kliknij** linię siatki, aby dodać albo usunąć tę pojedynczą krawędź.
- **Przeciągnij prawym przyciskiem** przez obszar, aby wymazać linie w jego wnętrzu,
  zostawiając sam obrys w spokoju. **Kliknięcie prawym przyciskiem** linii siatki
  przełącza ją tak samo jak zwykłe kliknięcie.
- **Gumka** (przycisk z gumką obok Cofnij) sprawia, że także zwykłe przeciąganie wymazuje:
  przeciągnij przez obszar, aby wyczyścić linie w jego wnętrzu, albo kliknij linię siatki, aby
  ją usunąć. Gdy gumka jest włączona, kliknięcie nigdy nie dodaje linii. Naciśnij przycisk
  ponownie, aby wrócić do rysowania.
- **Rozwiąż** wypełnia za ciebie cały podział.

Gdy przeciągasz, prostokąt, który zaraz narysujesz, jest obrysowany, a jego rozmiar
pokazuje pasek stanu. Gotowy prostokąt o właściwym rozmiarze zostaje zacieniowany.
Zamknięty prostokąt, który nigdy nie może być poprawny, jest oznaczany: jego liczba
czerwienieje, jeśli rozmiar do niej nie pasuje, a sam prostokąt jest kreskowany, jeśli w
ogóle nie zawiera liczby. Łamigłówka jest ukończona, gdy każde pole leży wewnątrz
poprawnego prostokąta.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor.
- **Enter** zaczyna wyciąganie prostokąta od kursora; przesuń kursor do przeciwległego
  rogu i naciśnij **Enter** ponownie, aby go narysować.
- **Spacja** działa tak samo, ale zamiast tego wymazuje wnętrze prostokąta.
- **E** to przycisk **Gumka**.

## Ustawienia

- **Szerokość** i **wysokość** siatki. Gotowe rozmiary sięgają od 7×7 do 19×19.
- **Współczynnik rozrostu** — generuje mniejszą siatkę i rozciąga ją do żądanego rozmiaru,
  dzięki czemu łamigłówka ma mniej prostokątów, za to większych. 0 (domyślnie) oznacza
  brak rozciągania; 0,5 sprawia, że początkowa siatka ma w każdym kierunku dwie trzecie
  ostatecznego rozmiaru. Duże wartości zostawiają zaledwie garstkę prostokątów i czynią
  łamigłówkę trywialną.
- **Zapewnij jedno rozwiązanie** — zwykle włączone. Po wyłączeniu liczby trafiają w
  dowolne miejsce swoich prostokątów, co idzie szybciej i może dawać łamigłówki z kilkoma
  odpowiedziami; za rozwiązanie liczy się wtedy każdy poprawny podział.
`,se=e({default:()=>K}),K=`# Same Game

Plansza jest wypełniona kolorowymi polami. Wypatrz grupę dwóch albo więcej pól w tym samym
kolorze, które stykają się bokami, i usuń ją; pola nad luką opadają, a gdy kolumna zrobi
się pusta, kolumny po jej prawej przesuwają się, aby ją zamknąć. Wyczyść całą planszę, aby
wygrać. Jeśli pola zostały, ale żadne dwa stykające się pola nie mają wspólnego koloru,
nie da się już nic zrobić — cofnij i spróbuj innej kolejności.

Większe grupy są warte znacznie więcej niż małe: usunięcie _n_ pól daje przy domyślnej
punktacji (_n_ − 2)² punktów, więc para nie jest warta nic, trzy pola jeden punkt, a
dziesięć pól 64. Pasek stanu pokazuje twój wynik, a gdy grupa jest zaznaczona — ile ma pól
i ile by za nią przypadło.

Każda wygenerowana plansza (o ile nie wyłączysz tej opcji) jest zbudowana tak, że _da się_
ją wyczyścić do końca — choć znalezienie kolejności, która przy okazji dobrze punktuje,
zależy już od ciebie.

Nie ma przycisku Rozwiąż: komputer wie, że planszę da się wyczyścić, ale nie powie ci jak.

## Sterowanie

### Mysz i dotyk

- **Kliknij** pole, aby zaznaczyć całą grupę, do której ono należy; grupa jest rysowana
  jaśniej i z grubym obrysem. **Kliknij zaznaczoną grupę ponownie**, aby ją usunąć.
  Kliknięcie gdzie indziej przenosi tylko zaznaczenie.
- **Kliknij prawym przyciskiem** zaznaczoną grupę, aby cofnąć zaznaczenie.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor po planszy (zawijając się na krawędziach).
- **Enter** zaznacza grupę pod kursorem, a naciśnięty ponownie usuwa ją.
- **Spacja** na zaznaczonej grupie cofa zaznaczenie.

## Ustawienia

- **Szerokość** i **wysokość** planszy.
- **Liczba kolorów**, od 3 do 9 (2 jest dozwolone, gdy rozwiązywalność nie jest
  zapewniona). Więcej kolorów oznacza mniejsze grupy i trudniejszą planszę.
- **System punktacji**: _(n−2)²_, domyślny, albo _(n−1)²_, który nagradza też pary.
- **Zapewnij rozwiązywalność**: gdy zaznaczone, plansza jest generowana wstecz od pustej
  planszy, tak aby istniała co najmniej jedna sekwencja czyszcząca. Odznacz to, aby dostać
  zwykłą losową planszę, która generuje się szybciej i zwykle ma większe obszary, ale
  której może się nie dać wyczyścić.
`,ce=e({default:()=>le}),le=`# Drogowskaz

Na każdym polu jest strzałka, a na kilku polach są liczby. Połącz pola w jedną ścieżkę
ponumerowaną od 1 do N (gdzie N to liczba pól) tak, aby następnik każdego pola leżał
gdzieś wzdłuż jego strzałki: pole z numerem 1 wskazuje na 2, które wskazuje na 3, i tak
dalej. Następnik może być w dowolnej odległości w kierunku strzałki, nie tylko tuż obok.
Ostatnie pole, oznaczone gwiazdką, nie wskazuje nigdzie.

Pierwsza i ostatnia liczba są zawsze pokazane, a do tego tyle innych, żeby ścieżka była
jednoznaczna. Każda łamigłówka ma dokładnie jedno rozwiązanie i można je znaleźć samym
rozumowaniem.

Błędy są pokazywane na czerwono: dwa pola z tą samą liczbą, liczba, której następnik nie
leży wzdłuż jej strzałki, albo łańcuch przebiegający poza swoją zadaną liczbę. Łamigłówka
jest skończona, gdy liczby od 1 do N przechodzą przez wszystkie pola i nigdzie nie ma
czerwieni.

## Sterowanie

### Mysz i dotyk

- **Przeciągnij** z jednego pola na pole leżące wzdłuż jego strzałki, aby to drugie stało
  się następnikiem pierwszego. **Przeciągnij prawym przyciskiem**, aby zrobić to w drugą
  stronę: z pola na pole, które ma je poprzedzać.
- Gdy wśród połączonych pól znajdzie się liczba, rozchodzi się ona po całym łańcuchu i
  jest pokazywana na niebiesko. Łańcuch, który nie ma jeszcze liczby, jest opisany literą
  z przesunięciami (\`a\`, \`a+1\`, \`a+2\`, ...); w chwili, gdy dotknie ponumerowanego pola,
  litery zamieniają się w liczby. Podłączenie łańcucha do pola, które już ma połączenie,
  zastępuje to stare połączenie.
- Każde pole, któremu wciąż brakuje poprzednika, ma małą kropkę w lewym dolnym rogu, a
  strzałka blaknie, gdy jej pole ma już następnik. Zadanie sprowadza się więc zawsze do
  łączenia wyraźnej strzałki z polem z kropką.
- **Kliknij prawym przyciskiem** pole, aby usunąć oba jego połączenia. **Przeciągnij**
  pole poza planszę, aby zrobić to samo, albo **przeciągnij prawym przyciskiem** poza
  planszę, aby rozbić cały jego łańcuch.
- **Rozbij** (przycisk z pękniętym ogniwem obok Cofnij) sprawia, że kliknięcie pola rozbija cały
  jego łańcuch, co do jednego połączenia, a przeciągnięcie pola poza planszę robi to samo.
  Przeciąganie z pola na pole nadal je łączy. Naciśnij go ponownie, aby go wyłączyć.
- **Rozwiąż** uzupełnia całą ścieżkę.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor.
- **Enter** na polu rozpoczyna od niego połączenie; przesuń kursor na następnik i naciśnij
  **Enter** ponownie, aby je utworzyć (naciśnięcie na tym samym polu anuluje).
- **Spacja** lub **X** usuwa połączenia pola pod kursorem, a **Shift + X** rozbija cały
  jego łańcuch.
- **B** to przycisk **Rozbij**.

## Ustawienia

- **Szerokość** i **wysokość** siatki, od 2 do 12 pól (2×2 jest za małe, żeby działało).
- **Początek i koniec w rogach**: gdy jest włączone, 1 zawsze stoi w lewym górnym polu, a
  N w prawym dolnym. W przeciwnym razie oba końce trafiają w losowe miejsca, choć nadal
  oba są pokazane.
`,ue=e({default:()=>de}),de=`# Jedynacy

W każdym polu siatki jest liczba. Zaczernij część pól (ukrywając ich liczby) tak, aby
jednocześnie zachodziły trzy rzeczy:

- żadna liczba nie pojawia się więcej niż raz wśród białych pól danego wiersza ani danej
  kolumny;
- żadne dwa czarne pola nie stykają się bokiem (rogi są w porządku);
- wszystkie białe pola tworzą jeden spójny obszar, połączony bok w bok.

To jest _Hitori_ wydawnictwa Nikoli. Dobre otwarcie to szukanie dwóch takich samych liczb
przedzielonych jednym polem: jedna z tej pary musi być czarna, więc pole pośrodku musi być
białe. Dwie takie same liczby obok siebie oznaczają, że każda inna kopia tej liczby w ich
linii jest czarna.

Błędy widać na czerwono: stykające się czarne pola dostają czerwoną ramkę wokół grupy,
białe pola odcięte od głównego obszaru dostają czerwony kontur, a dwa otoczone kółkiem
pola z tą samą liczbą w jednej linii są rysowane na czerwono.

Łamigłówka jest skończona, gdy żadna reguła nie jest złamana; białych pól nie trzeba
zakreślać.

## Sterowanie

### Mysz i dotyk

- **Kliknij** pole, aby je zaczernić; kliknij ponownie, aby je przywrócić.
- **Kliknij prawym przyciskiem**, aby otoczyć liczbę kółkiem i zapisać, że pole na pewno
  jest białe; kolejne kliknięcie prawym przyciskiem usuwa kółko. Zarówno kliknięcie, jak i
  kliknięcie prawym przyciskiem czyści znak, który pole już ma.
- **Rozwiąż** wypełnia całą siatkę, zakreślając kółkiem każde białe pole.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor po siatce (zawijając się na krawędziach).
- **Enter** zaczernia lub przywraca pole pod kursorem, a **Spacja** zakreśla je kółkiem
  albo to kółko usuwa.

## Ustawienia

- **Szerokość** i **wysokość** siatki, od 2 do 20 dla generowanych łamigłówek.
- **Trudność**: łamigłówki na poziomie _Łatwy_ wymagają tylko bezpośrednich argumentów —
  czarne pole wymusza białych sąsiadów, otoczona kółkiem liczba wymusza zaczernienie swoich
  bliźniaczek, do tego para przedzielona polem, para obok siebie, białe pole z tylko jednym
  wyjściem i drobne układy w rogach. Łamigłówki na poziomie _Podchwytliwy_ wymagają
  dodatkowo zauważenia, kiedy zaczernienie pola przecięłoby biały obszar na dwoje, oraz
  korzystania z par par przesuniętych o jedno pole. Każda łamigłówka ma dokładnie jedno
  rozwiązanie.
`,fe=e({default:()=>pe}),pe=`# Szesnastka

Układanka przesuwna bez pustego pola. W każdym polu leży ponumerowany kafelek i zamiast
przesuwać pojedynczy kafelek, przesuwasz o jeden krok cały wiersz albo całą kolumnę.
Kafelek wypchnięty poza krawędź wraca od razu z drugiego końca tej samej linii, tak jakby
siatka była owinięta wokół pączka. Uporządkuj kafelki tak, aby liczyły od 1 w lewym górnym
rogu, od lewej do prawej, a potem wiersz po wierszu.

## Sterowanie

### Mysz i dotyk

- **Kliknij** jedną ze strzałek przy krawędzi, aby przesunąć ten wiersz lub tę kolumnę o
  jeden krok w stronę, którą wskazuje strzałka. **Kliknij prawym przyciskiem** strzałkę,
  aby przesunąć linię w przeciwną stronę.
- **Rozwiąż** po prostu zastępuje siatkę tą uporządkowaną. Nie pokaże ci drogi, ale daje
  czystą planszę do wypróbowywania manewrów.

### Klawiatura (Keyboard)

- **Klawisze strzałek** prowadzą podświetlenie po pierścieniu strzałek na krawędziach.
- **Enter** przesuwa podświetloną linię w stronę wskazywaną przez jej strzałkę, a **Spacja**
  w drugą stronę.

## Ustawienia

- **Szerokość** i **wysokość** siatki. Na siatkach, w których obie strony są nieparzyste,
  osiągalna jest tylko połowa wszystkich ułożeń, więc generator rozdaje wyłącznie te, które
  da się osiągnąć.
- **Liczba ruchów tasujących**: zostaw 0, aby dostać całkowicie losowe ułożenie, albo podaj
  liczbę, aby wymieszać uporządkowaną siatkę dokładnie tyloma pojedynczymi przesunięciami.
  Chodzi wtedy o to, żeby wydedukować, jakie przesunięcia wykonano, i cofnąć je w tej samej
  liczbie ruchów; im więcej ruchów tasujących zamówisz, tym większa szansa, że istnieje
  krótsze rozwiązanie.
`,me=e({default:()=>he}),he=`# Ukośniki

Siatka pustych pól z liczbami w kółkach na części jej narożników. Narysuj w każdym polu
jedną linię po przekątnej, nachyloną w jedną albo w drugą stronę, tak aby:

- każda liczba w kółku miała dokładnie tyle linii dotykających jej punktu narożnego (4
  siedzi pośrodku krzyża, a przy 0 wszystkie pobliskie linie odchylają się od niego);
- linie nigdy nie łączyły się w zamkniętą pętlę.

Liczba, która ma już za dużo linii albo która nie może już zebrać ich dość, robi się
czerwona; tak samo każda linia będąca częścią pętli. Łamigłówka jest skończona, gdy każde
pole ma linię i nic nie jest czerwone.

## Sterowanie

### Mysz i dotyk

- **Kliknij** pole, aby narysować w nim \`\\\`; kliknij ponownie, aby zamienić to na \`/\`, i
  jeszcze raz, aby wyczyścić.
- **Kliknięcie prawym przyciskiem** przechodzi przez te stany w drugą stronę: \`/\`, potem
  \`\\\`, potem pusto. Dzięki temu pole da się ustawić w dowolną stronę samym kliknięciem
  albo samym kliknięciem prawym przyciskiem.
- **Rozwiąż** wypełnia całą siatkę.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor po siatce.
- **Enter** przełącza pole pod kursorem tak jak kliknięcie lewym przyciskiem, a **Spacja**
  tak jak kliknięcie prawym przyciskiem.

## Ustawienia

- **Szerokość** i **wysokość** siatki, w polach.
- **Trudność**: łamigłówki na poziomie _Łatwy_ da się rozwiązywać pole po polu — liczba,
  która jest już spełniona albo która potrzebuje wszystkich pozostałych pól, oraz pola, w
  których jedna z dwóch linii zamknęłaby pętlę. Łamigłówki na poziomie _Trudny_ wymagają
  dodatkowo rozumowania o parach pól, które muszą być nachylone tak samo, jeszcze zanim
  wiadomo w którą stronę, oraz o obszarach, które linia odcięłaby od krawędzi siatki.
  Zgadywanie nigdy nie jest potrzebne; każda łamigłówka ma dokładnie jedno rozwiązanie.
`,ge=e({default:()=>_e}),_e=`# Solo

Wypełnij kwadratową siatkę cyframi tak, aby każdy wiersz, każda kolumna i każdy grubo
obrysowany blok zawierały każdą cyfrę dokładnie raz. Część pól jest dana jako wskazówki;
resztę trzeba wydedukować. Zwykła łamigłówka 3×3 to znajome sudoku, ale bloki mogą też
być prostokątami (łamigłówka 2×3 ma sześć bloków 3×2), a siatka może mieć nawet 16×16, a
wtedy litery a, b, c… zastępują cyfry powyżej 9.

Można włączyć trzy warianty:

- **X**: obie główne przekątne, lekko zacienione, też muszą zawierać każdą cyfrę.
- **Jigsaw**: bloki mają nieregularne kształty, inne w każdej łamigłówce.
- **Killer**: nie ma żadnych cyfr-wskazówek. Zamiast tego siatka jest podzielona na
  „klatki” rysowane przerywaną linią, każda opisana sumą cyfr w jej wnętrzu. Żadna cyfra
  nie może pojawić się w klatce dwa razy.

Każda łamigłówka ma dokładnie jedno rozwiązanie i zawsze da się do niego dojść czystym
rozumowaniem na wybranym przez ciebie poziomie trudności.

## Sterowanie

Cyfry, które kolidują z inną kopią w swoim wierszu, kolumnie, bloku, na przekątnej albo w
klatce, są pokazywane na czerwono; tak samo klatka, której cyfry nie sumują się do jej
sumy. **Podpowiedź** wpisuje jedno pole — najłatwiejsze z wciąż otwartych albo pierwszą
cyfrę sprzeczną z rozwiązaniem — a resztę zostawia tobie; gra toczy się dalej, a po kilku
podpowiedziach wygrana i gwiazdka wciąż należą do ciebie. **Rozwiąż** wpisuje całe
rozwiązanie i kończy łamigłówkę.

### Mysz i dotyk

- **Kliknij lewym przyciskiem** puste pole, aby je wybrać, a potem wpisz cyfrę za pomocą
  klawiatury na ekranie (klawisze z literami to cyfry powyżej 9). Ponowne kliknięcie
  wybranego pola cofa wybór.
- **⌫** na klawiaturze znów opróżnia wybrane pole, a **✎** włącza na stałe notatki
  ołówkiem, więc to, co wybierzesz dalej, trafi tam jako mała notatka zamiast odpowiedzi.
- **Kliknij prawym przyciskiem** pole, aby od razu wybrać je do **notatek ołówkiem**.
  Notatki ołówkiem są tylko po to, żeby pomóc ci myśleć; gra nie zwraca na nie uwagi, a
  wpisanie cyfry je czyści.
- **Notatki** w menu pauzy wypełniają każde puste pole pełnym zestawem notatek
  ołówkiem — dla tych, którzy lubią zaczynać od wszystkiego i skreślać kandydatów.
- **Wyróżnij** (przycisk z lupą obok Cofnij) wyróżnia każde pole z tą samą cyfrą co ostatnio
  kliknięte pole, łącznie ze wskazówkami, i pokazuje tę cyfrę pogrubioną wśród notatek ołówkiem.
  Naciśnij go ponownie, aby to wyłączyć.

### Klawiatura (Keyboard)

- **Wpisz cyfrę** (albo literę dla cyfr powyżej 9), aby wypełnić wybrane pole.
- **Spacja** lub **Backspace** czyści wybrane pole (jego cyfrę albo wszystkie jego notatki
  ołówkiem).
- **Klawisze strzałek** przesuwają kursor klawiatury. **Enter** przełącza kursor między
  wpisywaniem zwykłym a notatkami ołówkiem, a wpisywane cyfry trafiają do pola pod nim.
- **M** to przycisk **Notatki**, a **L** przycisk **Wyróżnij**.

## Ustawienia

- **Kolumny** i **wiersze podbloków**: siatka jest tak duża jak ich iloczyn, a każdy blok
  jest tak szeroki jak liczba wierszy i tak wysoki jak liczba kolumn. W trybie jigsaw
  iloczyn to po prostu rozmiar siatki.
- **X**, **Jigsaw** i **Killer** włączają opisane wyżej warianty. Łamigłówki killer są
  ograniczone do siatek o najwyżej dziewięciu cyfrach.
- **Symetria**: to, jak wzór wskazówek odbija się sam w sobie. Więcej symetrii wygląda
  ładniej, ale zwykle zostawia więcej wskazówek, niż jest ściśle potrzebne.
- **Trudność**: najtrudniejszy rodzaj rozumowania, jakiego łamigłówka będzie wymagać. Na
  poziomach _Bardzo łatwy_ i _Łatwy_ zawsze jest jakieś pole, które da się wypełnić wprost;
  _Średni_ wymaga rozumowania o tym, gdzie cyfra może trafić w obrębie bloku i linii;
  _Trudny_ wymaga zbiorów pól, które wspólnie zajmują pewien zbiór cyfr; _Ekspercki_ dokłada
  łańcuchy wymuszeń; a łamigłówek na poziomie _Ekstremalny_ nie da się skończyć bez
  zgadywania i cofania się. Trudne łamigłówki generują się dłużej.
`,ve=e({default:()=>ye}),ye=`# Namioty

Siatka to pole namiotowe: na części pól rosną drzewa, a reszta to pusty grunt. Rozstaw
namioty na pustych polach tak, aby:

- namiotów było dokładnie tyle, ile drzew;
- każde drzewo dało się połączyć w parę z własnym namiotem na polu bezpośrednio przy nim
  (nad, pod, po lewej albo po prawej — nie po skosie). Namiot może przypadkiem sąsiadować
  także z innymi drzewami, ale każdy namiot należy do jednego drzewa, a każde drzewo do
  jednego namiotu;
- żadne dwa namioty się nie stykały, nawet rogami;
- liczby przy prawej i dolnej krawędzi podawały liczbę namiotów w każdym wierszu i każdej
  kolumnie.

Wskazówkami są tylko te liczby, więc cała łamigłówka polega na wydedukowaniu, gdzie muszą
stanąć namioty. Każdą tutejszą łamigłówkę da się rozwiązać samym rozumowaniem, bez
zgadywania.

## Sterowanie

Namioty, które się stykają, są pokazywane na czerwono ze znacznikiem na wspólnym boku lub
rogu; tak samo każda grupa namiotów, dla której jest za mało drzew, i każda grupa drzew,
która nie ma już miejsca na wszystkie swoje namioty. Liczba szarzeje, gdy jej linia ma
właściwą liczbę namiotów, i czerwienieje, gdy nie da się jej już spełnić. **Rozwiąż**
rozstawia za ciebie wszystkie namioty.

### Mysz i dotyk

- **Kliknij** puste pole, aby rozbić tam namiot; kliknij namiot ponownie, aby go usunąć.
- **Kliknij prawym przyciskiem** puste pole, aby oznaczyć je jako trawę, czyli miejsce, w
  którym na pewno nie stanie namiot; kolejne kliknięcie prawym przyciskiem to znowu
  czyści. Zarówno kliknięcie, jak i kliknięcie prawym przyciskiem czyści pole, na którym
  już coś jest.
- **Przeciągnij prawym przyciskiem** wzdłuż wiersza lub kolumny, aby za jednym razem
  zamienić w trawę każde puste pole, przez które przejedziesz — przydaje się do domykania
  linii, w której wszystkie namioty są już rozstawione. Namioty i istniejące znaki
  zostają nietknięte.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor.
- **Enter** rozbija albo usuwa namiot pod kursorem.
- **Spacja** zaznacza albo czyści trawę pod kursorem.

## Ustawienia

- **Szerokość** i **wysokość** siatki, od 4 do 20 pól.
- **Trudność**: łamigłówki na poziomie _Łatwy_ poddają się liczeniu i przyglądaniu się
  temu, czego potrzebuje każde drzewo i każdy namiot. Łamigłówki na poziomie
  _Podchwytliwy_ wymagają dodatkowo rozważenia, jak możliwe rozstawienia w jednej linii
  ograniczają jej sąsiadki, oraz zastanowienia się, którymi polami drzewa mogą się dzielić.
`,be=e({default:()=>xe}),xe=`# Wieże

Na każdym polu siatki staje wieża o wysokości od 1 do rozmiaru siatki. Każdy wiersz i każda
kolumna musi zawierać każdą wysokość dokładnie raz. Liczby wokół krawędzi mówią, ile wież
zobaczysz, patrząc w ten wiersz lub w tę kolumnę z danej strony: wieża zasłania każdą niższą
wieżę za sobą. Wskazówka równa rozmiarowi siatki oznacza, że wysokości rosną przez całą
długość linii; wskazówka 1 oznacza, że najwyższa wieża stoi tuż przy tej krawędzi.

Większe i trudniejsze łamigłówki zaczynają się z kilkoma wieżami już postawionymi i pomijają
część wskazówek na krawędziach. Cyfry, które kłócą się z inną w swoim wierszu lub swojej
kolumnie, oraz wskazówki, których postawione dotąd wieże nie mogą już spełnić, są pokazane na
czerwono. Ta łamigłówka jest lepiej znana jako Skyscrapers.

## Sterowanie

Wież danych na starcie nie da się zmienić, a **Rozwiąż** wpisuje odpowiedź.

### Mysz i dotyk

- **Kliknij lewym przyciskiem** pole, aby je wybrać, a potem użyj klawiszy na ekranie, aby
  postawić wieżę o tej wysokości. **⌫** na klawiaturze znów opróżnia pole.
- **✎** na klawiaturze włącza na stałe **notatki ołówkiem**: to, co wybierzesz, trafia wtedy
  do pola jako mała notatka, pole pozostaje wybrane, więc możesz dodać ich kilka, a ta sama
  cyfra jeszcze raz jedną wymazuje. Wpisanie prawdziwej cyfry ściera notatki ołówkiem w tym
  polu.
- **Kliknij prawym przyciskiem** pole, aby od razu wybrać je do notatek ołówkiem.
- **Notatki** w menu pauzy wypełniają każde puste pole pełnym zestawem notatek ołówkiem.
- **Wyróżnij** (przycisk z lupą obok Cofnij) wyróżnia każde pole z tą samą wysokością co
  ostatnio kliknięte pole i pokazuje tę wysokość pogrubioną wśród notatek ołówkiem. Naciśnij go
  ponownie, aby to wyłączyć.

### Klawiatura (Keyboard)

- **Wpisz cyfrę**, aby postawić wieżę o tej wysokości w wybranym polu. **Spacja** lub
  **Backspace** je czyści.
- **Klawisze strzałek** przesuwają kursor klawiatury. **Enter** przełącza go między cyframi a
  notatkami ołówkiem; wpisywane cyfry trafiają do podświetlonego pola, a kursor zostaje na
  miejscu.
- **M** to przycisk **Notatki**, a **L** przycisk **Wyróżnij**.

## Ustawienia

- **Rozmiar siatki** — od 3 do 9. Wieże wpisuje się pojedynczymi cyframi i dlatego na 9 się
  kończy.
- **Trudność** — na poziomie Łatwy wystarczą bezpośrednie skutki każdej wskazówki oraz reguł
  wiersza i kolumny. Poziom Trudny każe ci rozważyć każde ustawienie, na które pozwala
  wskazówka, i wypatrywać grup pól dzielących kilku kandydatów. Ekspercki dokłada
  trudniejsze rozumowanie o zbiorach i łańcuchy wymuszeń, a łamigłówek na poziomie
  Ekstremalny nie da się skończyć bez odrobiny prób i błędów, choć rozwiązanie wciąż jest
  jedno.
`,Se=e({default:()=>Ce}),Ce=`# Tory

Kolej wjeżdża na siatkę z lewej strony i opuszcza ją na dole; oba końce widać jako szyny
wybiegające poza planszę. Uzupełnij linię między nimi. Tor to jedna trasa bez odgałęzień,
pętli i skrzyżowań, zbudowana wyłącznie z prostych odcinków i ćwierćkolistych łuków, więc z
każdego pola, przez które przechodzi, wychodzą dokładnie dwie szyny. Kilka odcinków leży już
na zacieniowanych polach i nie da się ich zmienić. Liczba nad każdą kolumną i obok każdego
wiersza mówi, przez ile pól tej linii przebiega gotowy tor.

Liczby szarzeją, gdy ich linia ma już właściwą liczbę pól z torem, a czerwienieją, gdy linia
nie może się już udać: za dużo pól z torem albo tyle skreślonych pól, że nie zostaje dość
miejsca. Pola, na których szyny łączą się źle (trzy szyny w jednym polu, zamknięta pętla albo
tor zostający luzem po połączeniu wjazdu z wyjazdem), też są rysowane na czerwono.

## Sterowanie

**Rozwiąż** układa cały tor, usuwając te twoje oznaczenia, które są z nim sprzeczne.
Łamigłówka jest skończona, gdy jeden nieprzerwany tor łączy wjazd z wyjazdem i każda liczba
się zgadza.

### Mysz i dotyk

- **Przeciągnij** przez ciąg sąsiadujących pól, aby ułożyć między nimi szyny. Droga może
  skręcać; przeciągnięcie, które biegnie wyłącznie po już istniejących szynach, zamiast tego
  je zdejmuje.
- **Kliknij** blisko boku pola, aby dodać lub usunąć pojedynczą szynę przez ten bok. Kliknij
  środek pola, aby oznaczyć je jako „tędy biegnie tor”, bez wskazywania, którymi bokami —
  przydaje się przy liczeniu — a kolejne kliknięcie usuwa to oznaczenie.
- **Kliknij prawym przyciskiem** blisko boku, aby narysować krótką kreskę oznaczającą „tu
  nie ma szyny”; kliknij prawym przyciskiem środek pola, aby skreślić całe pole.
  **Przeciągnij prawym przyciskiem** wzdłuż wiersza lub kolumny, aby naraz skreślić ciąg
  pól albo cofnąć te skreślenia.
- **Gumka** (przycisk z gumką obok Cofnij) sprawia, że kliknięcie lub przeciągnięcie czyści pola
  do czysta: każde dotknięte pole traci szyny, kreski „tu nie ma szyny” oraz oznaczenie lub
  skreślenie. Elementy dane z góry zostają. Naciśnij go ponownie, aby wrócić do układania toru.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor, który zatrzymuje się na polach i na bokach między
  nimi. **Enter** działa w miejscu kursora jak kliknięcie, a **Spacja** jak
  kliknięcie prawym przyciskiem.
- **E** to przycisk **Gumka**.

## Ustawienia

- **Szerokość** i **wysokość** siatki, co najmniej cztery każda.
- **Trudność**: łamigłówki na poziomie _Łatwy_ poddają się, gdy patrzysz na jedno pole albo
  jedną linię naraz. Na poziomie _Podchwytliwy_ trzeba dodatkowo pomyśleć, gdzie w ogóle może
  wypaść ostatnie pole z torem w danej linii, oraz o luźnych końcach szyn, które muszą być
  poprowadzone wzdłuż linii albo w poprzek niej. Każda łamigłówka ma dokładnie jedno
  rozwiązanie.
- **Bez sąsiadujących wskazówek 1**: gdy jest włączone (domyślnie), żadne dwie sąsiadujące
  linie nie mają obie liczby 1, i nie ma jej też ani kolumna z wjazdem, ani wiersz z wyjazdem.
  Dzięki temu tor nie biegnie długimi nudnymi prostymi wzdłuż krawędzi.
`,we=e({default:()=>Te}),Te=`# Obrotka

Siatka ponumerowanych kafelków została pomieszana obracaniem kwadratowych bloków kafelków.
Obracaj je z powrotem, aż liczby ułożą się po kolei od lewej do prawej i z góry na dół. W
podstawowej grze każdy ruch obraca blok 2×2 o ćwierć obrotu wokół punktu, w którym stykają
się jego cztery kafelki; większe ustawienia obracają bloki 3×3 albo jeszcze większe.

W wariantach **z orientacją** każdy kafelek nosi trójkąt, a łamigłówka liczy się jako
skończona dopiero wtedy, gdy wszystkie trójkąty wskazują w górę. W wariancie **tylko wiersze**
kafelki noszą zamiast tego numer swojego wiersza, więc wszystkie jedynki muszą tylko dotrzeć
do pierwszego wiersza, dwójki do drugiego i tak dalej.

## Sterowanie

**Rozwiąż** odstawia każdy kafelek prosto na swoje miejsce. Nie pokaże ci drogi, ale to szybki
sposób na czystą siatkę do ćwiczenia serii obrotów.

### Mysz i dotyk

- **Kliknij** w środku bloku, aby obrócić go przeciwnie do ruchu wskazówek zegara;
  **kliknij prawym przyciskiem**, aby obrócić go zgodnie z ruchem wskazówek zegara. Przy
  blokach 2×2 środkiem jest róg, w którym stykają się cztery kafelki; przy nieparzystych
  rozmiarach bloku jest nim środkowy kafelek. Kliknięcie bliżej krawędzi siatki obraca blok,
  który przylega do tej krawędzi.
- **W prawo** (przycisk z obracającą się strzałką obok Cofnij) zamienia kierunki: kliknięcie
  obraca bloki zgodnie z ruchem wskazówek zegara, a kliknięcie prawym przyciskiem przeciwnie.
  Naciśnij go ponownie, aby wrócić.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają po siatce obramowanie wielkości jednego bloku. **Enter**
  obraca obramowany blok przeciwnie do ruchu wskazówek zegara, a **Spacja** zgodnie z ruchem
  wskazówek zegara.
- **A**, **B**, **C** i **D** obracają bloki w rogu lewym górnym, prawym górnym, lewym dolnym
  i prawym dolnym przeciwnie do ruchu wskazówek zegara; przytrzymaj **Shift**, aby obrócić
  zgodnie z ruchem wskazówek zegara.
- **T** to przycisk **W prawo**.

## Ustawienia

- **Szerokość** i **wysokość** siatki.
- **Rozmiar obracanego bloku**: bok kwadratowego bloku obracanego jednym ruchem (co najmniej
  2 i nie większy niż siatka).
- **Jedna liczba na wiersz**: łatwiejszy wariant, w którym każdy kafelek w wierszu ma tę samą
  liczbę.
- **Orientacja ma znaczenie**: kafelki dostają trójkąty i wszystkie muszą na koniec wskazywać
  w górę.
- **Liczba ruchów tasujących**: zostaw 0, aby potasować dokładnie, albo podaj małą liczbę,
  żeby dostać siatkę oddaloną od rozwiązania dokładnie o tyle obrotów. Twoim celem jest
  wtedy znaleźć te obroty i je cofnąć, więc tasowanie trzema ruchami zasługuje na odpowiedź
  w trzech ruchach (choć czasem może istnieć krótsza droga).
`,Ee=e({default:()=>De}),De=`# Nieumarli

Siatka to nawiedzony gabinet luster. Każde pole bez lustra kryje jednego z trzech potworów:
**ducha**, **wampira** albo **zombie**. Legenda nad siatką mówi, ile sztuk każdego rodzaju
zostało jeszcze do rozstawienia, a liczba przy każdym miejscu na krawędzi mówi, ile potworów
zobaczysz, patrząc stamtąd w głąb siatki i śledząc linię wzroku, gdy odbija się ona od
ukośnych luster.

Lustra zmieniają to, co widać. Wampir nie ma odbicia, więc liczy się tylko dopóty, dopóki
twoja linia wzroku nie napotkała jeszcze lustra. Duch jest odwrotnie: niewidoczny, gdy patrzy
się wprost na niego, pokazuje się dopiero po odbiciu. Zombie widać zawsze. Jeśli linia wzroku
przecina to samo pole dwa razy, stojący tam potwór liczy się za każdym razem, gdy jest
widoczny. Rozstaw wszystkie potwory tak, aby każda liczba na krawędzi i każda suma się
zgadzały.

## Sterowanie

Liczba na krawędzi szarzeje, gdy jej linia wzroku jest w pełni rozliczona, a czerwienieje, gdy
nie da się jej już spełnić; liczba w legendzie czerwienieje, gdy postawiono za dużo potworów
danego rodzaju. Notatki ołówkiem służą tylko tobie i nigdy nie wpływają na łamigłówkę.

### Mysz i dotyk

- **Kliknij lewym przyciskiem** puste pole, aby przełączać je kolejno na ducha, wampira,
  zombie i z powrotem na puste. Pole pozostaje podświetlone.
- Klawisze na ekranie od razu wybierają potwora dla podświetlonego pola, bez przechodzenia po
  kolei; **⌫** opróżnia pole razem z notatkami ołówkiem.
- **✎** na klawiaturze włącza na stałe **notatki ołówkiem**: wybrany potwór jest wtedy
  dodawany do listy kandydatów w polu (albo z niej usuwany).
- **Kliknij prawym przyciskiem** pole, aby dodawać notatki ołówkiem po jednym kandydacie
  (duch, potem wampir, potem zombie, potem czysto).
- **Wzrok** (przycisk z okiem obok Cofnij) rysuje linie wzroku przechodzące przez podświetlone
  pole, załamujące się na lustrach, i obwodzi liczby na krawędziach na obu końcach każdej z
  nich. Gdy jest włączony, kliknięcie liczby na krawędzi pokazuje jej własną linię; kliknij ją
  ponownie, aby ją zwolnić. Naciśnij **Wzrok** ponownie, aby go wyłączyć. Gdy jest
  włączony, kliknięcie niepodświetlonego pola tylko je podświetla, więc możesz prześledzić
  puste pole bez wypełniania go; kliknij je ponownie, aby jak zwykle je przełączyć.

### Klawiatura (Keyboard)

- Klawisze strzałek przesuwają podświetlenie. Enter przełącza kolejno potwora w podświetlonym
  polu; spacja przełącza jego notatki ołówkiem.
- \`G\`, \`V\`, \`Z\` (albo \`1\`, \`2\`, \`3\`) wstawiają danego potwora do podświetlonego pola albo
  przełączają jego notatkę ołówkiem, gdy podświetlenie jest w trybie notatek. \`E\`, \`0\`,
  Backspace lub Delete czyści pole razem z notatkami ołówkiem.
- \`S\` to przycisk **Wzrok**.

## Ustawienia

- **Szerokość**, **Wysokość** — rozmiar siatki, od 3×3 do 54 pól łącznie.
- **Trudność** — łamigłówki na poziomie _Łatwy_ padają, gdy liczysz wzdłuż jednej linii wzroku
  naraz; na poziomie _Normalny_ trzeba rozważyć kombinacje, na które pozwala cała ścieżka;
  łamigłówek na poziomie _Podchwytliwy_ nie da się skończyć bez zgadywania na próbę.
`,Oe=e({default:()=>ke}),ke=`# Nierówności

Wypełnij siatkę tak, aby każdy wiersz i każda kolumna zawierały każdą cyfrę od 1 do rozmiaru
siatki dokładnie raz — tworząc kwadrat łaciński — przy zachowaniu znaków narysowanych między
sąsiadującymi polami.

W trybie **Nierówności** znakami są symbole większości: otwarta strona \`>\` zwrócona jest ku
większej cyfrze, a ostrze ku mniejszej. Nie każda para sąsiadów ma znak, a im trudniejsza
łamigłówka, tym mniej znaków.

W trybie **Sąsiedztwo** znakami są krótkie kreski oznaczające, że dwie cyfry różnią się
dokładnie o jeden (jak 3 i 4). Tutaj każda kreska jest zawsze pokazana, więc **brak** kreski
między dwoma polami też jest wskazówką: te dwie cyfry na pewno nie są kolejne.

Łamigłówka pojawia się w gazetach pod nazwą Futoshiki.

## Sterowanie

Cyfry łamiące regułę — powtórzenie w wierszu lub kolumnie albo znak, który się nie zgadza —
są pokazane na czerwono, tak samo jak sam wadliwy znak. Łamigłówka jest kompletna, gdy każde
pole jest wypełnione i nic nie jest czerwone.

### Mysz i dotyk

- **Kliknij lewym przyciskiem** pole, aby je wybrać, a potem użyj klawiszy na ekranie,
  aby wpisać cyfrę. **⌫** na klawiaturze znów czyści wybrane pole. Kliknięcie wybranego
  pola po raz drugi cofa wybór.
- **✎** na klawiaturze włącza na stałe **notatki ołówkiem**: to, co wybierzesz, jest wtedy
  dodawane do małej listy możliwości w polu (albo z niej usuwane) zamiast być odpowiedzią.
  Wypełnienie pola ściera jego notatki ołówkiem.
- **Kliknij prawym przyciskiem** pole, aby od razu wybrać je do notatek ołówkiem.
- **Notatki** w menu pauzy wypełniają każde puste pole wszystkimi możliwymi notatkami ołówkiem,
  gotowymi do skreślania; **Podpowiedź** (przycisk z żarówką obok Cofnij) robi to samo, ale
  pomija te, które łatwe rozumowanie już wyklucza.
- **Wyróżnij** (przycisk z lupą obok Cofnij) wyróżnia każde pole z tą samą cyfrą co ostatnio
  kliknięte pole, łącznie z cyframi danymi z góry, i pokazuje tę cyfrę pogrubioną wśród notatek
  ołówkiem. Naciśnij go ponownie, aby to wyłączyć.

### Klawiatura (Keyboard)

- **Wpisz cyfrę**, aby wypełnić wybrane pole; \`0\`, spacja lub Backspace je czyści.
- Klawisze strzałek przesuwają kursor po siatce; Enter przełącza kursor między wpisywaniem
  cyfr a robieniem notatek ołówkiem.
- \`M\` to przycisk **Notatki**, \`H\` to **Podpowiedź**, a \`L\` to **Wyróżnij**.

## Ustawienia

- **Tryb** — Nierówności (znaki większości) albo Sąsiedztwo (kreski między kolejnymi cyframi).
- **Rozmiar** — liczba wierszy i kolumn, od 3 do 9.
- **Trudność** — ile rozumowania wymaga łamigłówka. Łamigłówki na poziomie **Bardzo łatwy** nigdy
  nie wymagają znaków: w trybie Nierówności nie mają ich wcale i są zwykłymi kwadratami łacińskimi,
  a w trybie Sąsiedztwo kreski są narysowane, ale o wszystkim rozstrzygają same podane cyfry. Na
  poziomie **Łatwy** wystarczy bezpośrednie znaczenie każdego znaku; poziom **Średni** wymaga
  rozważania grup pól razem; **Trudny** dokłada rozumowanie o zbiorach oparte na położeniu oraz
  łańcuchy wymuszeń; łamigłówki na poziomie **Ekstremalny** (dostępne w oknie ustawień własnych)
  mogą wymagać prób i błędów, choć rozwiązanie wciąż jest jedno.
`,Ae=e({default:()=>je}),je=`# Niesforne

Pokoloruj każde pole siatki na czarno albo na biało. Część pól jest dana jako wskazówki i nie
da się ich zmienić; reszta zaczyna jako szara i to ty ją wypełniasz. Gdy skończysz, muszą
zachodzić trzy rzeczy:

- każdy wiersz zawiera tyle samo czarnych pól co białych;
- każda kolumna zawiera tyle samo czarnych pól co białych;
- żadne trzy kolejne pola w wierszu ani w kolumnie nie mają tego samego koloru.

Błędy widać na czerwono: ciąg trzech lub więcej jednakowych pól dostaje czerwoną ramkę, a pole
nosi czerwony **!**, gdy jego wiersz lub kolumna ma już za dużo pól tego koloru. W opcjonalnym
wariancie „niepowtarzalne wiersze i kolumny” żadne dwa wiersze nie mogą mieć tego samego
układu (i żadne dwie kolumny); pasujące do siebie linie są przekreślone na czerwono.

## Sterowanie

Pól ze wskazówkami — tych narysowanych z małą ramką w środku — nie da się zmienić. **Rozwiąż**
wypełnia całą siatkę. Łamigłówka jest skończona, gdy każde pole jest pokolorowane i nic nie
jest pokazane na czerwono.

### Mysz i dotyk

- **Kliknij** szare pole, aby zrobić je czarnym; kliknij ponownie, aby zrobić je białym, a
  jeszcze raz, aby je wyczyścić.
- **Kliknięcie prawym przyciskiem** przechodzi w drugą stronę: biały, potem czarny, potem
  czysto.
- **Kliknięcie środkowym przyciskiem** czyści pole od razu.
- **Gumka** (przycisk z gumką obok Cofnij) sprawia, że kliknięcie czyści pole zamiast je
  kolorować. Naciśnij go ponownie, aby wrócić do kolorowania.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor po siatce.
- **Enter** przełącza pole pod kursorem jak kliknięcie, a **Spacja** jak
  kliknięcie prawym przyciskiem.
- **1** ustawia czarny, **0** (albo **2**) ustawia biały, a **Backspace** czyści.
- **E** to przycisk **Gumka**.

## Ustawienia

- **Szerokość** i **wysokość** siatki. Obie muszą być parzyste i wynosić co najmniej 6.
- **Niepowtarzalne wiersze i kolumny**: gdy jest włączone, żadne dwa wiersze nie mogą być
  identyczne i żadne dwie kolumny nie mogą być identyczne (wiersz nadal może pokrywać się z
  kolumną). Bardzo wysokie albo bardzo szerokie siatki są w tym trybie odrzucane, bo nie ma
  dość różnych linii dla wszystkich.
- **Trudność**: łamigłówki na poziomie _Łatwy_ potrzebują wyłącznie dwóch natychmiastowych
  argumentów — dwa jednakowe pola wymuszają drugi kolor na polu obok nich lub między nimi, a
  linia, która ma już swoją porcję jednego koloru, dostaje wszędzie indziej kolor drugi. Na
  poziomie _Normalny_ trzeba dodatkowo rozumować, gdzie w linii może jeszcze trafić ostatnie
  pole danego koloru, żeby nie powstał ciąg trzech. Każda łamigłówka ma dokładnie jedno
  rozwiązanie.
`,Me=e({default:()=>Ne}),Ne=`# Rozplątywanie

Garść punktów jest połączona prostymi liniami, a linie są splątane. Poprzestawiaj punkty tak,
aby żadne dwie linie się nie przecinały. Każdą łamigłówkę da się rozplątać: komputer zbudował
graf z układu bez przecięć, a potem rozrzucił punkty po okręgu.

Linie, które przecinają teraz inną linię, są rysowane na czerwono, więc splot maleje w oczach,
gdy pracujesz; łamigłówka jest rozwiązana, gdy nie zostaje nic czerwonego. Rozwiąż przesuwa
każdy punkt do układu, o którym komputer wie, że działa.

## Sterowanie

Cofnij odwraca każdy ruch, także Rozwiąż.

### Mysz i dotyk

- **Przeciągnij** punkt i puść go tam, gdzie ma być. Chwycony punkt robi się pomarańczowy, a
  jego sąsiedzi niebiescy. Upuszczenie punktu na marginesie umieszcza go na krawędzi planszy;
  puszczenie zupełnie poza obszarem rysowania anuluje przeciąganie.
- **Przyciąganie** (przycisk z siatką obok Cofnij) włącza i wyłącza siatkę przyciągania:
  upuszczone punkty lądują wtedy na środkach pól siatki zaznaczonych bladymi kropkami — tak samo
  ułożone jest też rozwiązanie. Przycisk świeci, dopóki siatka jest włączona.

### Klawiatura (Keyboard)

- **Klawisze strzałek** przesuwają kursor od punktu do punktu w danym kierunku. **Enter** lub
  **Spacja** podnosi punkt; klawisze strzałek przenoszą go wtedy (o jedną ósmą pola na
  naciśnięcie, o całe pole z Shiftem, o pojedynczy krok z Ctrl), a **Enter** lub **Spacja** go
  upuszcza.
- \`G\` to przycisk **Przyciąganie**.

## Ustawienia

- **Liczba punktów**: ile punktów ma graf, co najmniej 4. Więcej punktów oznacza więcej
  linii i trudniejszy splot. Plansza rośnie razem z liczbą punktów, więc zawsze jest
  miejsce, żeby je rozsunąć.
`,Pe=e({$dir:()=>`ltr`,$locale:()=>`pl`,$name:()=>q,default:()=>Fe,games:()=>Q,messages:()=>X,status:()=>Z,touchPhrases:()=>Y,tutorials:()=>$,ui:()=>J}),q=`Polski`,J=JSON.parse(`{"appName":"Puzzlebox","menu":{"title":"Puzzlebox","tagline":{"one":"{n} ręcznie rysowana łamigłówka logiczna. Wybierz i graj.","few":"{n} ręcznie rysowane łamigłówki logiczne. Wybierz i graj.","many":"{n} ręcznie rysowanych łamigłówek logicznych. Wybierz i graj.","other":"{n} ręcznie rysowanej łamigłówki logicznej. Wybierz i graj."},"lockedNote":"Każda łamigłówka ukończona samodzielnie daje gwiazdkę. Wydawaj tu gwiazdki, aby otwierać nowe łamigłówki.","language":"Język","stat":{"credits":{"one":"★ {n} gwiazdka","few":"★ {n} gwiazdki","many":"★ {n} gwiazdek","other":"★ {n} gwiazdki"},"unlocked":"odblokowane: {n} z {total}","solved":"rozwiązane: {n}","tight":{"credits":"★ {n}","unlocked":"{n}/{total}","solved":"✓ {n}","achievements":"{n}/{total}"},"achievements":"osiągnięcia: {n} z {total}"},"hint":{"allOpen":"Wszystko jest otwarte.","complete":"Cała kolekcja została odblokowana!","spend":{"one":"Wydaj gwiazdkę poniżej, aby odblokować łamigłówkę.","few":"Masz gwiazdki do wydania — odblokuj poniżej kolejne łamigłówki.","many":"Masz gwiazdki do wydania — odblokuj poniżej kolejne łamigłówki.","other":"Masz gwiazdki do wydania — odblokuj poniżej kolejne łamigłówki."},"earn":"Ukończ samodzielnie dowolną łamigłówkę, aby zdobyć gwiazdkę."},"card":{"label":"{name}: {description}","labelLocked":"{name}: {description} (zablokowana)","solvedTag":"✓ rozwiązane ×{n}","unlock":"Odblokuj · 1 gwiazdka","unlocked":"Odblokowano: {name}!","labelAlias":"{name}, inaczej {alias}: {description}","labelLockedAlias":"{name}, inaczej {alias}: {description} (zablokowana)"},"noCredit":"Rozwiąż samodzielnie dowolną łamigłówkę, aby zdobyć gwiazdkę, a potem wróć i odblokuj tę.","surprise":"Zaskocz mnie: otwórz losową łamigłówkę","search":{"placeholder":"Szukaj łamigłówek","label":"Szukaj łamigłówek po nazwie","clear":"Wyczyść wyszukiwanie","empty":"Żadna łamigłówka nie nazywa się „{q}”. Spróbuj innej nazwy."},"privacy":{"note":"Puzzlebox zlicza, jak rozgrywane są łamigłówki — nigdy to, kto w nie gra — żeby je ulepszać."},"continue":"Kontynuuj","continueLabel":"Kontynuuj: {name}","spend":"Wydaj"},"notFound":{"title":"Nie ma takiej łamigłówki","body":"Nie mamy łamigłówki o nazwie „{slug}”.","back":"Wróć do wszystkich łamigłówek"},"locked":"Łamigłówka {name} jest jeszcze zablokowana. Zdobądź gwiazdkę, kończąc dowolną łamigłówkę, a potem ją odblokuj.","pageTitle":"{name} · Puzzlebox","topbar":{"back":"Wszystkie łamigłówki","help":"Pomoc","creditsTitle":"Gwiazdki odblokowują nowe łamigłówki. Ukończ łamigłówkę samodzielnie, aby zdobyć gwiazdkę.","boardLabel":"Plansza: {name}"},"toolbar":{"type":"Rodzaj","custom":"Własne…","new":"Nowa","newTitle":"Nowa gra (N)","restart":"Od nowa","restartTitle":"Zacznij tę łamigłówkę od nowa","undo":"Cofnij","undoTitle":"Cofnij (U, Ctrl+Z)","redo":"Ponów","redoTitle":"Ponów (R, Ctrl+Y)","solve":"Rozwiąż","solveTitle":"Pokaż rozwiązanie (Ctrl+S)","gameId":"Udostępnij","gameIdTitle":"Udostępnij tę łamigłówkę albo zagraj w tę, którą ktoś ci przysłał","keypad":"Klawiatura","keypadTitle":"Pokaż klawisze na ekranie","zoomOut":"−","zoomOutTitle":"Pomniejsz","zoomIn":"+","zoomInTitle":"Powiększ","tapPlace":"Dotyk: stawia","tapMark":"Dotyk: oznacza","tapTitle":"Co robi zwykłe stuknięcie","tapPlaceTitle":"Stuknięcie stawia, przytrzymanie oznacza. Stuknij, aby zamienić.","tapMarkTitle":"Stuknięcie oznacza, przytrzymanie stawia. Stuknij, aby zamienić.","hint":"Podpowiedź","hintTitle":"Odsłania jedno pole, a ty grasz dalej. Jeśli użyjesz najwyżej {n} podpowiedzi, wciąż zdobędziesz gwiazdkę.","more":"Więcej","pause":"Pauza","pauseTitle":"Menu pauzy (Esc)"},"pause":{"title":"Wstrzymano","resume":"Wznów"},"pager":{"label":"Strony","prev":"Poprzednia strona","next":"Następna strona","page":"Strona {n} z {total}"},"badge":{"won":"Rozwiązane!","lost":"Koniec gry"},"stage":{"generating":"Losuję nową łamigłówkę…"},"keypad":{"label":"Klawiatura","clear":"Wyczyść","clearTitle":"Wyczyść wybrane pole (Backspace)","pencil":"Notatki ołówkiem","pencilOnTitle":"Klawisze wpisują notatki ołówkiem. Stuknij, aby znów wpisywać odpowiedzi.","pencilOffTitle":"Włącz, aby kolejne klawisze wpisywały notatki ołówkiem"},"drawer":{"title":"Jak grać: {name}","close":"Zamknij","replay":"▶ Obejrzyj samouczek jeszcze raz","achievements":"Osiągnięcia ({n}/{total})"},"dialog":{"ok":"OK","cancel":"Anuluj","customTitle":"{name}: ustawienia własne","gameIdTitle":"Udostępnij tę łamigłówkę","byDescription":"Według opisu","bySeed":"Według losowego ziarna","enterLabel":"Zagraj w konkretną łamigłówkę: wklej kod","play":"Graj","copy":"Kopiuj","copied":"Skopiowano","link":"Odnośnik","linkTitle":"Skopiuj odnośnik, który otwiera dokładnie tę łamigłówkę","linkPrompt":"Odnośnik do tej łamigłówki","shareLead":"Wyślij komuś dokładnie tę łamigłówkę.","copyLink":"Kopiuj odnośnik","linkCopied":"Odnośnik skopiowany","codes":"Kody łamigłówki","hintAd":{"title":"Jeszcze jedna podpowiedź?","body":"Wykorzystano już wszystkie darmowe podpowiedzi ({n}). Po kolejnej ta łamigłówka nie da gwiazdki — chyba że obejrzysz krótką reklamę.","watch":"Obejrzyj reklamę i zachowaj gwiazdkę","anyway":"Pokaż podpowiedź mimo to"},"badCode":"Ten kod nie otwiera łamigłówki {name}. Sprawdź, czy został skopiowany w całości."},"toast":{"creditEarned":"+1 gwiazdka","tutorialComplete":"Samouczek ukończony. Oto nowa łamigłówka — rozwiąż ją samodzielnie, aby zdobyć gwiazdkę.","tutorialCompleteBack":"Samouczek ukończony. Wracasz do swojej łamigłówki.","tutorialSkipped":"Samouczek pominięty. Możesz do niego wrócić w każdej chwili z Pomocy.","tapModeMark":"Stuknięcie oznacza. Przytrzymaj, aby wykonać główną akcję.","tapModePlace":"Stuknięcie wykonuje główną akcję. Przytrzymaj, aby oznaczyć.","touchHint":"Stuknij, aby grać; przytrzymaj, aby wykonać drugą akcję. Pierwszy okrągły przycisk zamienia je miejscami.","hintNone":"Na tej planszy nie ma już czego odsłaniać.","hintNoCredit":"To więcej niż {n} podpowiedzi, więc za tę łamigłówkę nie będzie gwiazdki — ale wciąż możesz ją dokończyć.","hintAdFailed":"Nie udało się wczytać reklamy, więc nic się nie zmieniło — podpowiedź wciąż na ciebie czeka.","stuck":"Utknąłeś? Podpowiedź odsłoni jedno pole, a łamigłówka i tak da ci gwiazdkę."},"tutorial":{"label":"Samouczek: {name}","step":"Krok {n} z {total}","next":"Dalej","done":"Gotowe","skipStep":"Pomiń krok","skipTutorial":"Pomiń samouczek","nice":"Świetnie!","offScript":"Nie ten: ruch został cofnięty, żeby kroki nadal pasowały do planszy. Spróbuj tego, o co prosi ten krok.","offScriptRead":"To zostało cofnięte, żeby kroki nadal pasowały do planszy. Najpierw przeczytaj ten krok.","pointer":{"drag":"przeciągnij","rightClick":"prawy przycisk","rightDrag":"przeciągnij prawym","middleClick":"środkowy przycisk","longPress":"przytrzymaj","longPressDrag":"przytrzymaj i przeciągnij","twoFingerTap":"dwa palce"}},"splash":{"tagline":"Ręcznie rysowane łamigłówki, gotowe do gry","skip":"Pomiń"},"help":{"keypad":{"heading":"Klawiatura ekranowa","introTouch":"Klawisze na ekranie wpisują za ciebie","introPointer":"**Klawiatura** na pasku narzędzi pokazuje na ekranie klawisze, które wpisują za ciebie","select":": najpierw wybierz pole na planszy, a potem naciśnij klawisz.","clear":"- **⌫** znów opróżnia wybrane pole.","pencil":"- **✎** włącza tryb notatek ołówkiem: klawisze wpisują wtedy małe notatki zamiast\\n  odpowiedzi. Naciśnij go ponownie, aby wrócić do odpowiedzi."}},"endgame":{"won":"Łamigłówka rozwiązana!","lost":"Koniec gry","credit":"★ +1 gwiazdka — tyle, ile trzeba, by odblokować nową łamigłówkę z kolekcji.","wonNote":"Czas na kolejną?","forfeitNote":"Za tę łamigłówkę nie będzie gwiazdki — rozwiązanie zostało po drodze pokazane.","lostNote":"Ta ci uciekła. Spróbujesz jeszcze raz?","next":"Następna łamigłówka","retry":"Spróbuj ponownie","dismiss":"Zamknij i obejrzyj planszę","time":"Czas","moves":"Ruchy","hints":"Podpowiedź","best":"Rekord {time}","newBest":"Nowy rekord!","stars":"{n} z 3 gwiazdek","stepUp":"Spróbuj: {preset} →"},"achievements":{"title":"Osiągnięcia","summary":"zdobyte: {n} z {total}","unlocked":"Odblokowano osiągnięcie","secret":{"name":"Tajne osiągnięcie","description":"Graj dalej, a je odkryjesz."},"earnedOn":"Zdobyto: {date}","progress":"{n} z {goal}","collection":"Kolekcja","tier":{"bronze":"Brąz","silver":"Srebro","gold":"Złoto"},"meta":{"first-solve":{"name":"Pierwsze kroki","description":"Rozwiąż samodzielnie swoją pierwszą łamigłówkę."},"solves-10":{"name":"Rozgrzewka","description":"Rozwiąż 10 łamigłówek."},"solves-50":{"name":"Łamigłówkowy nałóg","description":"Rozwiąż 50 łamigłówek."},"solves-100":{"name":"Setnik","description":"Rozwiąż 100 łamigłówek."},"solves-250":{"name":"Wielki mistrz","description":"Rozwiąż 250 łamigłówek."},"specialist":{"name":"Specjalista","description":"Rozwiąż 10 łamigłówek w tej samej grze."},"variety-3":{"name":"Degustator","description":"Rozwiąż łamigłówkę w 3 różnych grach."},"variety-10":{"name":"Wszechstronny","description":"Rozwiąż łamigłówkę w 10 różnych grach."},"variety-all":{"name":"Całe pudełko","description":"Rozwiąż łamigłówkę w każdej grze z kolekcji."},"unlock-first":{"name":"Nowa półka","description":"Odblokuj swoją pierwszą grę za gwiazdkę."},"unlock-15":{"name":"Rosnąca kolekcja","description":"Miej odblokowanych 15 gier."},"unlock-25":{"name":"Pęk kluczy","description":"Miej odblokowanych 25 gier."},"unlock-all":{"name":"Klucz uniwersalny","description":"Odblokuj każdą grę z kolekcji."},"hardest-1":{"name":"Gotów na wyzwanie","description":"Rozwiąż łamigłówkę w najtrudniejszym ustawieniu gry."},"hardest-10":{"name":"Zdobywca szczytów","description":"Rozwiąż najtrudniejsze ustawienie w 10 różnych grach."},"hardest-all":{"name":"Niezłomny","description":"Rozwiąż najtrudniejsze ustawienie w każdej grze."},"pure-1":{"name":"Czysta karta","description":"Rozwiąż łamigłówkę bez cofania i bez podpowiedzi."},"pure-25":{"name":"Pewna ręka","description":"Rozwiąż 25 łamigłówek bez cofania i bez podpowiedzi."},"quick-draw":{"name":"Szybki strzał","description":"Rozwiąż łamigłówkę w 30 sekund lub szybciej."},"marathon":{"name":"Maraton","description":"Rozwiąż łamigłówkę, nad którą siedzisz ponad 20 minut."},"comeback":{"name":"Nigdy się nie poddawaj","description":"Przegraj łamigłówkę, a potem wróć do niej i ją rozwiąż."},"second-thoughts":{"name":"Po namyśle","description":"Cofnij 100 razy i mimo to rozwiąż łamigłówkę."},"a-little-help":{"name":"Mała pomoc","description":"Skorzystaj z podpowiedzi."},"oops":{"name":"Ups","description":"Przegraj łamigłówkę."},"night-owl":{"name":"Nocny marek","description":"Rozwiąż łamigłówkę między północą a piątą rano."},"on-a-roll":{"name":"Dobra passa","description":"Rozwiąż 5 łamigłówek za jednym posiedzeniem."},"days-3":{"name":"Stały bywalec","description":"Zagraj w 3 różne dni."},"days-7":{"name":"Oddany gracz","description":"Zagraj w 7 różnych dni."},"days-30":{"name":"Element wystroju","description":"Zagraj w 30 różnych dni."},"quick-study":{"name":"Pojętny uczeń","description":"Przejdź samouczek do końca."},"scholar":{"name":"Uczony","description":"Przejdź do końca 10 różnych samouczków."},"collector-25":{"name":"Kolekcjoner odznak","description":"Zdobądź 25 osiągnięć."},"collector-60":{"name":"Gablota z trofeami","description":"Zdobądź 60 osiągnięć."},"legend":{"name":"Legenda łamigłówek","description":"Zdobądź wszystkie pozostałe osiągnięcia."}},"andMore":{"one":"Odblokowano {n} osiągnięcie","few":"Odblokowano {n} osiągnięcia","many":"Odblokowano {n} osiągnięć","other":"Odblokowano {n} osiągnięcia"}},"welcome":{"title":"Wybierz pierwszą łamigłówkę","subtitle":{"one":"{n} łamigłówka na początek. Wybierz ją i graj.","few":"{n} łamigłówki na początek. Wybierz jedną i graj.","many":"{n} łamigłówek na początek. Wybierz jedną i graj.","other":"{n} łamigłówki na początek. Wybierz jedną i graj."},"more":{"one":"…i {n} kolejna do odblokowania","few":"…i {n} kolejne do odblokowania","many":"…i {n} kolejnych do odblokowania","other":"…i {n} kolejnej do odblokowania"},"how":"Każda rozwiązana łamigłówka daje gwiazdkę, a każda gwiazdka odblokowuje nową grę."},"gamepad":{"connected":"Kontroler podłączony"},"settings":{"title":"Ustawienia","done":"Gotowe","sound":"Dźwięk","volume":"Głośność","reduceMotion":"Ogranicz ruch","vibration":"Wibracje","statistics":"Statystyki gry","on":"Wł.","off":"Wył.","portalMuted":"Strona wyłączyła dźwięk."}}`),Y=[[`przeciągnij prawym przyciskiem`,`przytrzymaj i przeciągnij`],[`przeciągnięcie prawym przyciskiem`,`przytrzymanie i przeciągnięcie`],[`przeciągnięciem prawym przyciskiem`,`przytrzymaniem i przeciągnięciem`],[`przeciąganie prawym przyciskiem`,`przytrzymywanie i przeciąganie`],[`przeciągając prawym przyciskiem`,`przytrzymując i przeciągając`],[`kliknij prawym przyciskiem`,`przytrzymaj`],[`klikaj prawym przyciskiem`,`przytrzymuj`],[`klikając prawym przyciskiem`,`przytrzymując`],[`klikniesz prawym przyciskiem`,`przytrzymasz`],[`kliknąć prawym przyciskiem`,`przytrzymać`],[`klikać prawym przyciskiem`,`przytrzymywać`],[`kliknięcie prawym przyciskiem`,`przytrzymanie`],[`kliknięcia prawym przyciskiem`,`przytrzymania`],[`kliknięciem prawym przyciskiem`,`przytrzymaniem`],[`kliknięciu prawym przyciskiem`,`przytrzymaniu`],[`kliknięć prawym przyciskiem`,`przytrzymań`],[`kliknij środkowym przyciskiem`,`stuknij dwoma palcami`],[`klikać środkowym przyciskiem`,`stukać dwoma palcami`],[`kliknięcie środkowym przyciskiem`,`stuknięcie dwoma palcami`],[`kliknięcia środkowym przyciskiem`,`stuknięcia dwoma palcami`],[`kliknięciem środkowym przyciskiem`,`stuknięciem dwoma palcami`],[`kliknij lewym przyciskiem`,`stuknij`],[`klikać lewym przyciskiem`,`stukać`],[`kliknięcie lewym przyciskiem`,`stuknięcie`],[`kliknięcia lewym przyciskiem`,`stuknięcia`],[`kliknięciem lewym przyciskiem`,`stuknięciem`],[`prawym przyciskiem`,`przytrzymaniem`],[`prawego przycisku`,`przytrzymania`],[`prawy przycisk`,`przytrzymanie`],[`środkowym przyciskiem`,`dwoma palcami`],[`środkowego przycisku`,`stuknięcia dwoma palcami`],[`środkowy przycisk`,`stuknięcie dwoma palcami`],[`lewym przyciskiem`,`stuknięciem`],[`lewego przycisku`,`stuknięcia`],[`lewy przycisk`,`stuknięcie`],[`kliknij`,`stuknij`],[`klikaj`,`stukaj`],[`klikasz`,`stukasz`],[`klikniesz`,`stukniesz`],[`kliknąć`,`stuknąć`],[`klikać`,`stukać`],[`klika`,`stuka`],[`klikają`,`stukają`],[`klikam`,`stukam`],[`klikając`,`stukając`],[`klikanie`,`stukanie`],[`klikania`,`stukania`],[`klikaniem`,`stukaniem`],[`kliknięcie`,`stuknięcie`],[`kliknięcia`,`stuknięcia`],[`kliknięciem`,`stuknięciem`],[`kliknięciu`,`stuknięciu`],[`kliknięć`,`stuknięć`],[`kliknięty`,`stuknięty`],[`klikniętego`,`stukniętego`],[`kliknięta`,`stuknięta`],[`kliknięte`,`stuknięte`],[`dwuklik`,`dwukrotne stuknięcie`],[`dwuklikiem`,`dwukrotnym stuknięciem`]],X=JSON.parse(`{"4-way rotational symmetry needs a square grid":"Symetria obrotowa czterokrotna wymaga kwadratowej siatki","A 2×2 grid is too small to make a puzzle from":"Siatka 2×2 jest za mała, aby zrobić z niej łamigłówkę","A cube rolling along a single row can never turn over all six faces":"Sześcian turlający się po jednym wierszu nigdy nie obróci wszystkich sześciu ścian","A given piece leaves the grid":"Zadany element wychodzi poza siatkę","A jigsaw block is too big":"Jeden z bloków jigsaw jest za duży","A jigsaw block is too small":"Jeden z bloków jigsaw jest za mały","A killer cage is too big":"Jedna z klatek jest za duża","A killer cage is too small":"Jedna z klatek jest za mała","A wrapping puzzle needs a width and height of at least 3 to have a unique solution":"Zawijana łamigłówka potrzebuje szerokości i wysokości co najmniej 3, aby mieć jedno rozwiązanie","All parameters must be whole numbers":"Wszystkie parametry muszą być liczbami całkowitymi","Already solved":"Już rozwiązane","An edge cannot join a point to itself":"Krawędź nie może łączyć punktu z nim samym","Angle offset out of bounds.":"Przesunięcie kąta poza zakresem.","At least one grid dimension must be greater than zero":"Co najmniej jeden wymiar siatki musi być większy od zera","At least one of width and height for this grid type must be at least {0}":"Dla tego rodzaju siatki szerokość albo wysokość musi wynosić co najmniej {0}","At least one of width and height must be greater than one":"Szerokość albo wysokość musi być większa niż jeden","Bad character in grid description":"Zły znak w opisie siatki","Bad mine layout in game description":"Zły układ min w opisie gry","Badly formatted move limit after grid description":"Źle sformatowany limit ruchów po opisie siatki","Barrier probability must be a number between 0 and 1":"Prawdopodobieństwo bariery musi być liczbą od 0 do 1","Barrier probability must be between 0 and 1":"Prawdopodobieństwo bariery musi mieścić się między 0 a 1","Blue cells are placed where some faces could never reach them":"Niebieskie pola leżą tam, gdzie niektóre ściany nigdy by do nich nie dotarły","Both dimensions must be at least 2":"Oba wymiary muszą wynosić co najmniej 2","Both grid dimensions must be at least one":"Oba wymiary siatki muszą wynosić co najmniej jeden","Bridges per direction must be between 1 and {0}":"Liczba mostów w jednym kierunku musi mieścić się między 1 a {0}","Can't create {0}×{1} puzzles":"Nie można utworzyć łamigłówek {0}×{1}","Clue did not provide 2 direction flags":"Wskazówka nie podała 2 znaczników kierunku","Clue is larger than the number of sides of its face":"Wskazówka jest większa niż liczba boków jej pola","Clue is missing its number":"Wskazówce brakuje liczby","Clue number out of range":"Liczba wskazówki poza zakresem","Colour out of range":"Kolor poza zakresem","Colour out of range in grid description":"Kolor poza zakresem w opisie siatki","Colours, pegs and guesses must be whole numbers":"Kolory, kołki i próby muszą być liczbami całkowitymi","Column counts inconsistent":"Liczby w kolumnach są niespójne","Could not four-colour the map":"Nie udało się pokolorować mapy czterema kolorami","Count is larger than the line it describes":"Liczba jest większa niż linia, którą opisuje","Description contains a duplicate number":"Opis zawiera powtórzoną liczbę","Description contains a number larger than the grid":"Opis zawiera liczbę większą niż siatka","Description contains a number out of range":"Opis zawiera liczbę spoza zakresu","Description contains a number that is too large":"Opis zawiera zbyt dużą liczbę","Description contains a repeated number":"Opis zawiera powtarzającą się liczbę","Description contains an unexpected character":"Opis zawiera nieoczekiwany znak","Description contains invalid characters":"Opis zawiera nieprawidłowe znaki","Description is corrupted":"Opis jest uszkodzony","Description is longer than expected":"Opis jest dłuższy, niż oczekiwano","Description is shorter than expected":"Opis jest krótszy, niż oczekiwano","Description is too long":"Opis jest za długi","Description is too short":"Opis jest za krótki","Description marks cells beyond the grid as blue":"Opis oznacza jako niebieskie pola spoza siatki","Description may only contain P, H and O":"Opis może zawierać tylko P, H i O","Description must be a comma-separated list of numbers":"Opis musi być listą liczb oddzielonych przecinkami","Description must be exactly {0} characters":"Opis musi składać się dokładnie z {0} znaków","Description must be hex digits, a comma and a cell number":"Opis musi składać się z cyfr szesnastkowych, przecinka i numeru pola","Description must be numbers each followed by an orientation letter (u, l, d or r)":"Opis musi składać się z liczb, z których po każdej następuje litera orientacji (u, l, d albo r)","Description must be two hex strings separated by a comma":"Opis musi składać się z dwóch ciągów szesnastkowych oddzielonych przecinkiem","Description must be {0} hexadecimal digits":"Opis musi składać się z {0} cyfr szesnastkowych","Description must contain at least one edge":"Opis musi zawierać co najmniej jedną krawędź","Description must contain at least one peg":"Opis musi zawierać co najmniej jeden kołek","Description must contain at least two islands":"Opis musi zawierać co najmniej dwie wyspy","Description must contain each number from 1 to {0} exactly once":"Opis musi zawierać każdą liczbę od 1 do {0} dokładnie raz","Description must contain each row number from 1 to {0} exactly {1} times":"Opis musi zawierać każdy numer wiersza od 1 do {0} dokładnie {1} razy","Description must contain only digits":"Opis może zawierać tylko cyfry","Description must contain only numbers":"Opis może zawierać tylko liczby","Description must contain {0} numbers":"Opis musi składać się z {0} liczb","Description must contain {0} tiles":"Opis musi składać się z {0} kafelków","Description must mark exactly {0} cells blue":"Liczba niebieskich pól w opisie musi wynosić dokładnie {0}","Description must start with {0} hex digits":"Opis musi zaczynać się od {0} cyfr szesnastkowych","Description places two islands next to each other":"Opis stawia dwie wyspy obok siebie","Description repeats a colour although duplicates are disallowed":"Opis powtarza kolor, choć powtórzenia są niedozwolone","Description too long":"Opis za długi","Description too long for board size":"Opis za długi jak na rozmiar planszy","Description too short":"Opis za krótki","Description too short for board size":"Opis za krótki jak na rozmiar planszy","Digits in a {0}×{1} puzzle cannot exceed {2}":"Cyfry w łamigłówce {0}×{1} nie mogą przekraczać {2}","Disallowing duplicates requires at least as many colours as pegs":"Zakaz powtórzeń wymaga co najmniej tylu kolorów, ile jest kołków","Domino descriptions inconsistent":"Niespójne opisy kostek domina","Dots too close together":"Kropki za blisko siebie","Duplicate edge in game description":"Powtórzona krawędź w opisie gry","Edge list defines the wrong number of regions":"Lista krawędzi definiuje niewłaściwą liczbę obszarów","Entrance square must contain a piece leaving the left edge":"Pole wjazdu musi zawierać element wychodzący lewą krawędzią","Every killer cage must have exactly one sum":"Każda klatka killer musi mieć dokładnie jedną sumę","Exit square must contain a piece leaving the bottom edge":"Pole wyjazdu musi zawierać element wychodzący dolną krawędzią","Expansion factor must be a number":"Współczynnik rozrostu musi być liczbą","Expansion factor may not be negative":"Współczynnik rozrostu nie może być ujemny","Expansion factor must be from 0 to 100":"Współczynnik rozrostu musi mieścić się od 0 do 100","Expected ',' after block structure description":"Oczekiwano ',' po strukturze bloków","Expected ',' after grid description":"Oczekiwano „,” po opisie siatki","Expected a list of edges like 0-1,1-2 in game description":"Oczekiwano w opisie gry listy krawędzi w rodzaju 0-1,1-2","Expected comma before clue list":"Oczekiwano przecinka przed listą wskazówek","Expected jigsaw block structure in game description":"Oczekiwano w opisie gry struktury bloków jigsaw","Expected killer cage structure in game description":"Oczekiwano w opisie gry struktury klatek killer","Expected killer clue grid in game description":"Oczekiwano w opisie gry siatki wskazówek killer","Expected slashes between clues":"Oczekiwano ukośników między wskazówkami","Expecting number in game description":"Oczekiwano liczby w opisie gry","Extra moves must not be negative":"Dodatkowe ruchy nie mogą być ujemne","Extreme puzzles with more than {0} symbols take too long to generate":"Łamigłówki ekstremalne z więcej niż {0} symbolami generują się zbyt długo","Faulty game description":"Wadliwy opis gry","Flags contradicting each other":"Znaczniki wykluczają się nawzajem","Flags go off grid":"Znaczniki wychodzą poza siatkę","Game ID must include parameters":"Identyfikator gry musi zawierać parametry","Game description contained unexpected characters":"Opis gry zawierał nieoczekiwane znaki","Game description contains an unexpected character":"Opis gry zawiera nieoczekiwany znak","Game description contains no dots":"Opis gry nie zawiera żadnych kropek","Game description contains unexpected characters":"Opis gry zawiera nieoczekiwane znaki","Game description has {0} balls; expected {1}":"Liczba kulek w opisie gry: {0}; oczekiwano: {1}","Game description is corrupted":"Opis gry jest uszkodzony","Game description is longer than expected":"Opis gry jest dłuższy, niż oczekiwano","Game description is shorter than expected":"Opis gry jest krótszy, niż oczekiwano","Game description is the wrong length":"Opis gry ma niewłaściwą długość","Game description is too long":"Opis gry jest za długi","Game description is too short":"Opis gry jest za krótki","Game description is wrong length":"Opis gry ma złą długość","Game description longer than expected":"Opis gry dłuższy, niż oczekiwano","Game description must be hexadecimal":"Opis gry musi być szesnastkowy","Game description shorter than expected":"Opis gry krótszy, niż oczekiwano","Game description too long":"Opis gry za długi","Game is already solved":"Gra jest już rozwiązana","Grid area must be at least six squares":"Siatka musi mieć co najmniej sześć pól","Grid area must be greater than 1":"Siatka musi mieć więcej niż 1 pole","Grid area must be greater than one":"Siatka musi mieć więcej niż jedno pole","Grid description is the wrong length or not hexadecimal":"Opis siatki ma niewłaściwą długość albo nie jest szesnastkowy","Grid description strings not used with this grid type":"Ten typ siatki nie używa opisów siatki","Grid dimensions cannot be negative":"Wymiary siatki nie mogą być ujemne","Grid dimensions must be at most {0}":"Wymiary siatki mogą wynosić najwyżej {0}","Grid dimensions must be whole numbers":"Wymiary siatki muszą być liczbami całkowitymi","Grid is too big":"Siatka jest za duża","Grid must contain at least two squares":"Siatka musi zawierać co najmniej dwa pola","Grid size must be between 3 and 9":"Rozmiar siatki musi mieścić się między 3 a 9","Grid size must be between {0} and {1}":"Rozmiar siatki musi mieścić się między {0} a {1}","Hard and Extreme puzzles are limited to a maximum number of {0}":"Trudne i ekstremalne łamigłówki są ograniczone do liczby maksymalnej {0}","Height must be at least 3":"Wysokość musi wynosić co najmniej 3","Height must be at least five":"Wysokość musi wynosić co najmniej pięć","Height must be at least one":"Wysokość musi wynosić co najmniej jeden","Height must be at least the rotating block size":"Wysokość musi być co najmniej równa rozmiarowi obracanego bloku","Height must be at least two":"Wysokość musi wynosić co najmniej dwa","Illegal grid type":"Niedozwolony rodzaj siatki","Incorrect number balance in game description":"Niepoprawny bilans liczb w opisie gry","Initial x-coordinate was out of range":"Początkowa współrzędna x była poza zakresem","Initial y-coordinate was out of range":"Początkowa współrzędna y była poza zakresem","Internal error: solution is badly formatted":"Błąd wewnętrzny: rozwiązanie ma nieprawidłowy format","Invalid character in block structure specification":"Nieprawidłowy znak w specyfikacji struktury bloków","Invalid character in game description":"Nieprawidłowy znak w opisie gry","Invalid character in grid specification":"Nieprawidłowy znak w specyfikacji siatki","Invalid character in number list":"Nieprawidłowy znak na liście liczb","Invalid characters in game description":"Nieprawidłowe znaki w opisie gry","Invalid format grid description string.":"Nieprawidłowy format ciągu opisu siatki.","Invalid parameters: {0}":"Nieprawidłowe parametry: {0}","Invalid syntax in game description":"Nieprawidłowa składnia w opisie gry","Jigsaw puzzles with more than {0} symbols take too long to generate":"Łamigłówki jigsaw z więcej niż {0} symbolami generują się zbyt długo","Killer puzzle dimensions must be smaller than 10":"Wymiary łamigłówki killer muszą być mniejsze niż 10","Malformed pending game description":"Zniekształcony oczekujący opis gry","Matrix description is the wrong length or not hexadecimal":"Opis macierzy ma niewłaściwą długość albo nie jest szesnastkowy","Maximum face number must be a whole number":"Największa liczba na ściance musi być liczbą całkowitą","Maximum face number must be at least one":"Największa liczba na ściance musi wynosić co najmniej jeden","Maximum face number must be at most {0}":"Największa liczba na ściance może wynosić najwyżej {0}","Maximum of 9 colours":"Najwyżej 9 kolorów","Medium puzzles need more than one bridge per direction, or loops disallowed":"Średnie łamigłówki wymagają więcej niż jednego mostu w kierunku albo zakazu pętli","Mines solver opened a mine: inconsistent knowledge":"Solver min odkrył minę: niespójna wiedza","Minimum number of balls may not be greater than maximum":"Najmniejsza liczba kulek nie może być większa niż największa","Missing grid description string.":"Brak ciągu opisu siatki.","Missing separator":"Brak separatora","Monster numbers do not match grid spaces":"Liczby potworów nie zgadzają się z miejscami w siatce","More than one starting square specified":"Podano więcej niż jedno pole startowe","Multiple solutions exist for this puzzle":"Ta łamigłówka ma wiele rozwiązań","Must have at least five regions":"Musi być co najmniej pięć obszarów","Must have at least one guess":"Musi być co najmniej jedna próba","Must have between {0} and {1} colours":"Liczba kolorów musi mieścić się między {0} a {1}","No game set up to solve":"Nie ma gry do rozwiązania","No gems specified":"Nie podano żadnych klejnotów","No solution exists for this position":"Dla tej pozycji nie istnieje rozwiązanie","No solution exists for this puzzle":"Dla tej łamigłówki nie istnieje rozwiązanie","No solution found":"Nie znaleziono rozwiązania","No starting square specified":"Nie podano pola startowego","Not enough data in block structure specification":"Za mało danych w specyfikacji struktury bloków","Not enough data in grid description":"Za mało danych w opisie siatki","Not enough data to fill grid":"Za mało danych, aby wypełnić siatkę","Not enough grid space to place all blue faces":"Za mało miejsca w siatce, aby rozmieścić wszystkie niebieskie ściany","Not enough jigsaw blocks":"Za mało bloków jigsaw","Not enough killer cages":"Za mało klatek","Not enough numbers given after grid specification":"Za mało liczb podanych po specyfikacji siatki","Not enough space to place the solid on an empty cell":"Za mało miejsca, aby postawić bryłę na pustym polu","Number of colours must be at least three":"Liczba kolorów musi wynosić co najmniej trzy","Number of colours must be at least two":"Liczba kolorów musi wynosić co najmniej dwa","Number of points must be a whole number":"Liczba punktów musi być liczbą całkowitą","Number of points must be at least {0}":"Liczba punktów musi wynosić co najmniej {0}","Number of points must be at most {0}":"Liczba punktów może wynosić najwyżej {0}","Number of shuffling moves cannot be negative":"Liczba ruchów tasujących nie może być ujemna","Number of shuffling moves must be a whole number":"Liczba ruchów tasujących musi być liczbą całkowitą","Number of shuffling moves must be at most 10000":"Liczba ruchów tasujących może wynosić najwyżej 10000","Number of shuffling moves must be at most {0}":"Liczba ruchów tasujących może wynosić najwyżej {0}","Number out of range in game description":"Liczba poza zakresem w opisie gry","Number too large":"Liczba za duża","Out-of-range number in game description":"Liczba spoza zakresu w opisie gry","Out-of-range number in grid description":"Liczba spoza zakresu w opisie siatki","Parameters must be whole numbers":"Parametry muszą być liczbami całkowitymi","Patch coordinates do not identify a usable grid fragment":"Współrzędne łatki nie wskazują użytecznego fragmentu siatki","Patch offset out of bounds.":"Przesunięcie łatki poza zakresem.","Percentage of black squares must be between 5% and 100%":"Odsetek czarnych pól musi mieścić się między 5% a 100%","Percentage of islands must be from 1% to 30%":"Odsetek wysp musi mieścić się od 1% do 30%","Puzzle is inconsistent":"Łamigłówka jest niespójna","Puzzle is too large":"Łamigłówka jest za duża","Puzzle is too long for unique-rows mode":"Łamigłówka jest za długa jak na tryb niepowtarzalnych wierszy","Puzzle is too tall for unique-rows mode":"Łamigłówka jest za wysoka jak na tryb niepowtarzalnych wierszy","Puzzle is unsolvable":"Łamigłówka jest nierozwiązywalna","Puzzle must have one entrance and one exit":"Łamigłówka musi mieć jeden wjazd i jeden wyjazd","Puzzles with more than {0} symbols take too long to generate":"Łamigłówki z więcej niż {0} symbolami generują się zbyt długo","Random seed must not be empty":"Ziarno losowania nie może być puste","Rotating block size must be at least two":"Rozmiar obracanego bloku musi wynosić co najmniej dwa","Row counts inconsistent":"Liczby w wierszach są niespójne","Rows of blocks must be at least 1":"Liczba wierszy bloków musi wynosić co najmniej 1","Scoring system not recognised":"Nierozpoznany system punktacji","Size and difficulty must be whole numbers":"Rozmiar i trudność muszą być liczbami całkowitymi","Size must be at least 5 for Adjacent puzzles of this difficulty":"Rozmiar musi wynosić co najmniej 5 dla łamigłówek Sąsiedztwo o tej trudności","Size must be between {0} and {1}":"Rozmiar musi mieścić się między {0} a {1}","Solution not known for this puzzle":"Rozwiązanie tej łamigłówki nie jest znane","Solve operation failed":"Rozwiązywanie nie powiodło się","Solve operation produced an invalid move":"Rozwiązywanie dało nieprawidłowy ruch","Solver could not finish this grid":"Komputer nie zdołał dokończyć tej siatki","Solving algorithm cannot complete this puzzle":"Algorytm rozwiązujący nie potrafi dokończyć tej łamigłówki","Starting cell is outside the grid":"Pole startowe leży poza siatką","Subtraction and division blocks must have area 2":"Bloki odejmowania i dzielenia muszą mieć pole 2","That grid has too many faces to generate":"Ta siatka ma zbyt wiele pól, aby ją wygenerować","The Cross board is only available at {0}×{1}":"Plansza w kształcie krzyża jest dostępna tylko w rozmiarze {0}×{1}","The Octagon board is only available at {0}×{1}":"Ośmiokątna plansza jest dostępna tylko w rozmiarze {0}×{1}","The ball has hit a mine; undo that move first":"Kulka trafiła na minę; najpierw cofnij ten ruch","The grid can have at most {0} squares":"Liczba pól siatki nie może przekraczać {0}","The grid may have at most {0} squares":"Liczba pól siatki nie może przekraczać {0}","The initial square contains a mine":"Pole początkowe zawiera minę","The solid cannot start on a blue cell":"Bryła nie może zaczynać na niebieskim polu","The solution has already been revealed":"Rozwiązanie zostało już odsłonięte","There must be at least one ball":"Musi być co najmniej jedna kulka","There must be at least one mine":"Musi być co najmniej jedna mina","This arrangement cannot be solved":"Tego układu nie da się rozwiązać","This game does not support the Solve operation":"Ta gra nie obsługuje rozwiązywania","This puzzle has no solution":"Ta łamigłówka nie ma rozwiązania","This puzzle instance contains a contradiction":"Ta instancja łamigłówki zawiera sprzeczność","This puzzle is not self-consistent":"Ta łamigłówka nie jest wewnętrznie spójna","Too few clues for block structure":"Za mało wskazówek jak na strukturę bloków","Too few clues for grid size":"Za mało wskazówek jak na rozmiar siatki","Too little data in clue list":"Za mało danych na liście wskazówek","Too little data in edge list":"Za mało danych na liście krawędzi","Too many balls to fit in the grid":"Zbyt wiele kulek, aby zmieściły się w siatce","Too many clues for block structure":"Zbyt wiele wskazówek jak na strukturę bloków","Too many clues for grid size":"Zbyt wiele wskazówek jak na rozmiar siatki","Too many colours (at most {0})":"Zbyt wiele kolorów (najwyżej {0})","Too many colours makes given grid size impossible":"Zbyt wiele kolorów czyni podany rozmiar siatki niemożliwym","Too many guesses (at most {0})":"Zbyt wiele prób (najwyżej {0})","Too many jigsaw blocks":"Za dużo bloków jigsaw","Too many killer cages":"Za dużo klatek","Too many mines for grid size":"Zbyt wiele min jak na rozmiar siatki","Too many pegs per guess (at most {0})":"Zbyt wiele kołków na próbę (najwyżej {0})","Too many regions to fit in grid":"Zbyt wiele obszarów, aby zmieściły się w siatce","Too much data in block structure specification":"Za dużo danych w specyfikacji struktury bloków","Too much data in clue list":"Za dużo danych na liście wskazówek","Too much data in edge list":"Za dużo danych na liście krawędzi","Too much data to fill grid":"Za dużo danych, aby wypełnić siatkę","Too much data to fit in grid":"Za dużo danych, aby zmieściły się w siatce","Trivial solutions are uninteresting":"Trywialne rozwiązania są nieciekawe","Unable to build a grid for these parameters":"Nie udało się zbudować siatki dla tych parametrów","Unable to build this grid":"Nie udało się zbudować tej siatki","Unable to find a solution for this puzzle":"Nie udało się znaleźć rozwiązania tej łamigłówki","Unable to find a solution from this position":"Nie udało się znaleźć rozwiązania z tej pozycji","Unable to find a solution to this puzzle":"Nie udało się znaleźć rozwiązania tej łamigłówki","Unable to find a unique solution for this puzzle":"Nie udało się znaleźć jednoznacznego rozwiązania tej łamigłówki","Unable to generate a puzzle of this size":"Nie udało się wygenerować łamigłówki tego rozmiaru","Unable to generate a puzzle with these parameters":"Nie udało się wygenerować łamigłówki z tymi parametrami","Unable to solve this puzzle":"Nie udało się rozwiązać tej łamigłówki","Unable to support more than {0} distinct symbols":"Nie da się obsłużyć więcej niż {0} różnych symboli","Unable to work out any more of this puzzle":"Nie da się wywnioskować nic więcej z tej łamigłówki","Unexpected additional character at end of game description":"Nieoczekiwany dodatkowy znak na końcu opisu gry","Unexpected additional data at end of game description":"Nieoczekiwane dodatkowe dane na końcu opisu gry","Unexpected character '{0}' in description":"Nieoczekiwany znak „{0}” w opisie","Unexpected character in clue list":"Nieoczekiwany znak na liście wskazówek","Unexpected character in edge list":"Nieoczekiwany znak na liście krawędzi","Unexpected data at end of game description":"Nieoczekiwane dane na końcu opisu gry","Unknown board type":"Nieznany rodzaj planszy","Unknown character in description":"Nieznany znak w opisie","Unknown difficulty":"Nieznana trudność","Unknown difficulty level":"Nieznany poziom trudności","Unknown difficulty rating":"Nieznana ocena trudności","Unknown shape type":"Nieznany rodzaj kształtu","Unknown symmetry":"Nieznana symetria","Unknown symmetry type":"Nieznany rodzaj symetrii","Unrecognised character in game description":"Nierozpoznany znak w opisie gry","Unrecognised characters in game description":"Nierozpoznane znaki w opisie gry","Unrecognised clue type":"Nierozpoznany rodzaj wskazówki","Unrecognised grid description.":"Nierozpoznany opis siatki.","Unrecognised solid type":"Nierozpoznany rodzaj bryły","Width and height cannot both be two":"Szerokość i wysokość nie mogą obie wynosić dwa","Width and height for this grid type must both be at least {0}":"Dla tego rodzaju siatki szerokość i wysokość muszą wynosić co najmniej {0}","Width and height must be at least two":"Szerokość i wysokość muszą wynosić co najmniej dwa","Width and height must be at least {0}":"Szerokość i wysokość muszą wynosić co najmniej {0}","Width and height must be at most twelve":"Szerokość i wysokość mogą wynosić najwyżej dwanaście","Width and height must be at most {0}":"Szerokość i wysokość mogą wynosić najwyżej {0}","Width and height must be at most {0} to generate a puzzle":"Szerokość i wysokość mogą wynosić najwyżej {0}, aby dało się wygenerować łamigłówkę","Width and height must be positive":"Szerokość i wysokość muszą być dodatnie","Width and height must be whole numbers":"Szerokość i wysokość muszą być liczbami całkowitymi","Width and height must both be at least 3":"Szerokość i wysokość muszą obie wynosić co najmniej 3","Width and height must both be at least four":"Szerokość i wysokość muszą obie wynosić co najmniej cztery","Width and height must both be at least one":"Szerokość i wysokość muszą obie wynosić co najmniej jeden","Width and height must both be at least two":"Szerokość i wysokość muszą obie wynosić co najmniej dwa","Width and height must both be even":"Szerokość i wysokość muszą być obie parzyste","Width and height must both be greater than three":"Szerokość i wysokość muszą być obie większe niż trzy","Width and height must both be greater than two":"Szerokość i wysokość muszą być obie większe niż dwa","Width and height must both be greater than zero":"Szerokość i wysokość muszą być obie większe od zera","Width and height must both be positive":"Szerokość i wysokość muszą być obie dodatnie","With three colours, a solvable grid may have at most {0} squares":"Przy trzech kolorach rozwiązywalna plansza może mieć najwyżej {0} pól","Width must be at least 3":"Szerokość musi wynosić co najmniej 3","Width must be at least five":"Szerokość musi wynosić co najmniej pięć","Width must be at least one":"Szerokość musi wynosić co najmniej jeden","Width must be at least the rotating block size":"Szerokość musi być co najmniej równa rozmiarowi obracanego bloku","Width must be at least two":"Szerokość musi wynosić co najmniej dwa","Width, height and ball counts must be whole numbers":"Szerokość, wysokość i liczby kulek muszą być liczbami całkowitymi","Width, height and difficulty must be whole numbers":"Szerokość, wysokość i trudność muszą być liczbami całkowitymi","Width, height and number of colours must be whole numbers":"Szerokość, wysokość i liczba kolorów muszą być liczbami całkowitymi","Width, height, block size and move count must be whole numbers":"Szerokość, wysokość, rozmiar bloku i liczba ruchów muszą być liczbami całkowitymi","X puzzles need at least four symbols":"Łamigłówki X potrzebują co najmniej czterech symboli","X-diagonal jigsaw puzzles with more than {0} symbols take too long to generate":"Łamigłówki jigsaw z przekątnymi X i więcej niż {0} symbolami generują się zbyt długo","You have hit a mine; undo that move first":"To była mina; najpierw cofnij ten ruch","a cell may be a number position for only one rectangle":"pole może być miejscem liczby tylko dla jednego prostokąta","at least one column contains more numbers than will fit":"co najmniej jedna kolumna zawiera więcej liczb, niż się zmieści","at least one row contains more numbers than will fit":"co najmniej jeden wiersz zawiera więcej liczb, niż się zmieści","cells are not adjacent":"pola nie sąsiadują ze sobą","domino layout: no path between singletons":"układ domina: brak ścieżki między pojedynczymi polami","domino layout: stranded square cannot be paired":"układ domina: osamotnionego pola nie da się sparować","dot touches the outside twice":"kropka dotyka zewnętrza dwa razy","dot with fewer than two edges":"kropka z mniej niż dwiema krawędziami","edge does not follow its face":"krawędź nie podąża za swoim polem","edge shared by three faces":"krawędź wspólna dla trzech pól","expected CxR or Nj":"oczekiwano CxR albo Nj","expected WxH":"oczekiwano WxH","expected WxHnN":"oczekiwano WxHnN","expected a grid size":"oczekiwano rozmiaru siatki","expected a maximum number":"oczekiwano liczby maksymalnej","expected a number of points":"oczekiwano liczby punktów","expected a solid letter followed by WxH":"oczekiwano litery bryły, po której następuje WxH","expected something like c6p4g10Bm":"oczekiwano czegoś w rodzaju c6p4g10Bm","expected w<W>h<H>m<MIN>M<MAX>":"oczekiwano w<W>h<H>m<MIN>M<MAX>","generateKeen: solver disagrees with the square":"generateKeen: solver nie zgadza się z kwadratem","grid inconsistency while walking round a face":"niespójność siatki podczas obchodzenia pola","inconsistent clues while assembling":"niespójne wskazówki podczas składania","inconsistent distance field":"niespójne pole odległości","inconsistent face classes":"niespójne klasy pól","latin rectangle could not be extended":"nie udało się rozszerzyć prostokąta łacińskiego","latinGenerate: no extension found":"latinGenerate: nie znaleziono rozszerzenia","latinSquare: rectangle could not be extended":"latinSquare: nie udało się rozszerzyć prostokąta","line too long for solver":"linia za długa dla solvera","no clue left to place":"nie została żadna wskazówka do umieszczenia","no such laser: {0}":"nie ma takiego lasera: {0}","rolled solid does not fit its destination":"przeturlana bryła nie pasuje do miejsca docelowego","shown":"pokazane","too few row/column specifications":"za mało specyfikacji wierszy/kolumn","too many row/column specifications":"zbyt wiele specyfikacji wierszy/kolumn","unrecognised character in game description":"nierozpoznany znak w opisie gry","yes!":"tak!","9×9 Extreme puzzles take too long to generate; try 8×8 or Expert":"Łamigłówki 9×9 na poziomie Ekstremalny generują się zbyt długo; spróbuj 8×8 albo poziomu Ekspercki"}`),Z={moves:{one:`{n} ruch`,few:`{n} ruchy`,many:`{n} ruchów`,other:`{n} ruchu`},movesCompleted:{one:`Ukończono w {n} ruchu`,few:`Ukończono w {n} ruchach`,many:`Ukończono w {n} ruchach`,other:`Ukończono w {n} ruchu`},movesSinceSolve:`Ruchy od automatycznego rozwiązania: {n}`,completedMoves:`Ukończono! Ruchy: {n}`,solvedByComputer:`Rozwiązane przez komputer`,completed:`Ukończono!`,completedPrefix:`Ukończono! `,autoSolved:`Rozwiązane automatycznie.`,autoSolvedPrefix:`Rozwiązane automatycznie. `,autoSolverUsedPrefix:`Użyto automatycznego rozwiązywania. `,failedPrefix:`Brak ruchów. `,dead:`To była mina!`,target:` (cel: {n})`},Q=JSON.parse(`{"blackbox":{"name":"Czarna skrzynka","description":"Znajdź ukryte kulki, wystrzeliwując lasery do skrzynki i patrząc, którędy wychodzą.","preset":{"5x5_3_balls":"5×5, 3 kulki","8x8_5_balls":"8×8, 5 kulek","8x8_3_6_balls":"8×8, 3-6 kulek","10x10_5_balls":"10×10, 5 kulek","10x10_4_10_balls":"10×10, 4-10 kulek"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"no_of_balls":{"name":"Liczba kulek"}},"status":{"correct":"DOBRZE!","wrong":{"one":"Błędne zaznaczenia: {wrong}, pominięta kulka: {n}.","few":"Błędne zaznaczenia: {wrong}, pominięte kulki: {n}.","many":"Błędne zaznaczenia: {wrong}, pominięte kulki: {n}.","other":"Błędne zaznaczenia: {wrong}, pominięte kulki: {n}."},"marked":"Zaznaczone kulki: {n} / {range}  ·  Wystrzelone lasery: {fired}","tooMany":"  ·  Zaznaczonych kulek jest o {n} za dużo.","check":"  ·  Użyj przycisku w rogu, aby sprawdzić."},"achievement":{"sparing_shots":{"name":"Oszczędne strzały","description":"Znajdź wszystkie kulki, strzelając laserem z najwyżej połowy portów."},"pinpoint":{"name":"W punkt","description":"Znajdź wszystkie kulki w skrzynce 8×8 lub większej, wystrzeliwując najwyżej trzy lasery na każdą kulkę."},"shot_in_the_dark":{"name":"Strzał w ciemno","description":"Oddaj kulki do sprawdzenia, nie wystrzeliwszy ani jednego lasera — i pomyl się."}}},"bridges":{"name":"Mosty","description":"Połącz wyspy mostami tak, aby każda liczba się zgadzała i nic się nie krzyżowało.","preset":{"7x7_easy":"7×7 łatwy","7x7_medium":"7×7 średni","7x7_hard":"7×7 trudny","10x10_easy":"10×10 łatwy","10x10_medium":"10×10 średni","10x10_hard":"10×10 trudny","15x15_easy":"15×15 łatwy","15x15_medium":"15×15 średni","15x15_hard":"15×15 trudny","10x10_medium_no_loops":"10×10 średni, bez pętli"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"difficulty":{"name":"Trudność","choice":{"easy":"Łatwy","medium":"Średni","hard":"Trudny"}},"allow_loops":{"name":"Zezwól na pętle"},"max_bridges_per_direction":{"name":"Maks. mostów w jednym kierunku","choice":{"1":"1","2":"2","3":"3","4":"4"}},"of_island_squares":{"name":"% pól z wyspami","choice":{"5":"5%","10":"10%","15":"15%","20":"20%","25":"25%","30":"30%"}},"expansion_factor":{"name":"Współczynnik rozrostu (%)","choice":{"0":"0%","10":"10%","20":"20%","30":"30%","40":"40%","50":"50%","60":"60%","70":"70%","80":"80%","90":"90%","100":"100%"}}},"action":{"e":{"label":"Gumka","title":"Przeciągnij z wyspy, aby zabrać jej mosty w tę stronę (E)"},"g":{"label":"Prowadnice","title":"Pokaż lub ukryj bladą linię wszędzie tam, gdzie mógłby stanąć most (G)"}},"alsoKnownAs":"Hashiwokakero, Hashi","achievement":{"no_markers":{"name":"Czyste wody","description":"Rozwiąż łamigłówkę 10×10 lub większą, nie stawiając ani jednego znacznika „tu nie ma mostu”."},"sure_footing":{"name":"Pewny grunt","description":"Rozwiąż trudną łamigłówkę 10×10 lub większą, nie usuwając żadnego mostu i bez cofania."}}},"cube":{"name":"Sześcian","description":"Turlaj bryłę po siatce, aby zebrać na jej ściany każde niebieskie pole.","preset":{"cube":"Sześcian","tetrahedron":"Czworościan","octahedron":"Ośmiościan","icosahedron":"Dwudziestościan"},"config":{"type_of_solid":{"name":"Rodzaj bryły","choice":{"tetrahedron":"Czworościan","cube":"Sześcian","octahedron":"Ośmiościan","icosahedron":"Dwudziestościan"}},"width_top":{"name":"Szerokość / góra"},"height_bottom":{"name":"Wysokość / dół"}},"achievement":{"short_haul":{"name":"Krótka trasa","description":"Ukończ Sześcian, barwiąc na niebiesko każdą ścianę, w najwyżej dwudziestu przeturlaniach."},"octahedron_ace":{"name":"Osiem ścian w mig","description":"Ukończ Ośmiościan, barwiąc na niebiesko każdą ścianę, w najwyżej trzydziestu przeturlaniach."},"scenic_route":{"name":"Wielka podróż","description":"Przeturlaj bryłę co najmniej dwieście razy, zanim wszystkie ściany będą niebieskie."}}},"dominosa":{"name":"Dominosa","description":"Znajdź, gdzie w siatce liczb leży rozsypany komplet kostek domina.","preset":{"up_to_double_3":"Do 3-3","up_to_double_4":"Do 4-4","up_to_double_5":"Do 5-5","up_to_double_6":"Do 6-6","up_to_double_7":"Do 7-7","up_to_double_8":"Do 8-8","up_to_double_9":"Do 9-9"},"config":{"maximum_number_on_dominoes":{"name":"Największa liczba na kostkach"},"difficulty":{"name":"Trudność","choice":{"very_easy":"Bardzo łatwy","easy":"Łatwy","hard":"Trudny","extreme":"Ekstremalny","ambiguous":"Niejednoznaczny"}}},"achievement":{"no_lines":{"name":"Ołówek zbędny","description":"Rozwiąż komplet do 6-6 lub większy, nie kreśląc ołówkiem ani jednej kreski."},"one_click_each":{"name":"Kostka na kliknięcie","description":"Rozwiąż komplet do 6-6 lub większy jednym kliknięciem na kostkę i bez cofania."},"doubles_first":{"name":"Najpierw dublety","description":"Połóż wszystkie dublety z kompletu, zanim położysz jakąkolwiek inną kostkę."}}},"fifteen":{"name":"Piętnastka","alsoKnownAs":"Przesuwanka, układanka przesuwna","description":"Przesuwaj kafelki, aby ustawić je po kolei.","preset":{"3x3":"3×3","4x4":"4×4","5x5":"5×5"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"}},"achievement":{"short_shuffle":{"name":"Krótkie tasowanie","description":"Ułóż 4×4 w 100 ruchach lub mniej."},"five_flyer":{"name":"Błyskawica 5×5","description":"Ułóż 5×5 w mniej niż trzy minuty."},"scenic_route":{"name":"Droga naokoło","description":"Zużyj ponad 300 ruchów na ułożenie 3×3."}}},"filling":{"name":"Wypełnianie","description":"Wypełnij siatkę tak, aby każda grupa równych cyfr miała dokładnie tyle pól.","preset":{"9x7":"9×7","13x9":"13×9","17x13":"17×13"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"}},"alsoKnownAs":"Fillomino","achievement":{"in_ink":{"name":"Zapisane atramentem","description":"Rozwiąż Wypełnianie, nie zmieniając ani nie wymazując żadnej cyfry i bez cofania."},"one_stroke":{"name":"Każda za jednym razem","description":"Rozwiąż Wypełnianie 13×9 lub większe, wpisując każdą grupę cyfr jednym ruchem."}},"action":{"f":{"label":"Wypełnij","title":"Przeciągnij od cyfry, aby wpisać ją w każde pole, przez które przejdziesz (F)"}}},"flip":{"name":"Przełączanie","description":"Zapal wszystkie pola — każdy ruch przełącza też pola dookoła.","preset":{"3x3_crosses":"3×3 krzyże","4x4_crosses":"4×4 krzyże","5x5_crosses":"5×5 krzyże","3x3_random":"3×3 losowe","4x4_random":"4×4 losowe","5x5_random":"5×5 losowe"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"shape_type":{"name":"Rodzaj kształtu","choice":{"crosses":"Krzyże","random":"Losowe"}}},"alsoKnownAs":"Lights Out","achievement":{"press_once":{"name":"Tylko raz","description":"Zapal planszę 4×4 lub większą, nie naciskając żadnego pola dwa razy."},"fewest_presses":{"name":"Minimum wysiłku","description":"Zapal planszę 5×5 najmniejszą możliwą liczbą naciśnięć."}}},"flood":{"name":"Zalew","description":"Zalewaj siatkę z narożnika, aż cała będzie w jednym kolorze, mieszcząc się w limicie ruchów.","preset":{"12x12_easy":"12×12 łatwy","12x12_medium":"12×12 średni","12x12_hard":"12×12 trudny","16x16_medium":"16×16 średni","16x16_hard":"16×16 trudny","12x12_3_colours":"12×12, 3 kolory","12x12_4_colours":"12×12, 4 kolory"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"colours":{"name":"Kolory"},"extra_moves_permitted":{"name":"Dodatkowe dozwolone ruchy"}},"status":{"moves":"Ruchy: {n} / {limit}"},"alsoKnownAs":"Flood It","achievement":{"spare_moves":{"name":"Ruchy w zapasie","description":"Zalej siatkę, mając w zapasie co najmniej trzy ruchy."},"beat_the_solver":{"name":"Lepszy od maszyny","description":"Zalej siatkę w mniejszej liczbie ruchów niż rozwiązanie komputera."},"one_colour_short":{"name":"O kolor za mało","description":"Wyczerp ruchy, gdy na siatce zostały już tylko dwa kolory."}}},"galaxies":{"name":"Galaktyki","description":"Podziel siatkę na obszary, z których każdy jest symetryczny względem swojej jedynej kropki.","preset":{"7x7_medium":"7×7 średni","7x7_extreme":"7×7 ekstremalny","10x10_medium":"10×10 średni","15x15_medium":"15×15 średni"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"difficulty":{"name":"Trudność","choice":{"medium":"Średni","extreme":"Ekstremalny"}}},"alsoKnownAs":"Galaktyki spiralne, Tentai Show","achievement":{"no_arrows":{"name":"Bez strzałek","description":"Rozwiąż Galaktyki 10×10 lub większe, nie wyciągając ani jednej strzałki."},"steady_hand":{"name":"Gwiazdy stałe","description":"Rozwiąż Galaktyki 10×10 lub większe, nie usuwając żadnej ściany i bez cofania."}}},"guess":{"name":"Zgadnij","description":"Odgadnij ukryty rząd kolorowych kołków na podstawie ocen swoich prób.","preset":{"standard":"Standardowy","super":"Super"},"config":{"colours":{"name":"Kolory"},"pegs_per_guess":{"name":"Kołki na próbę"},"guesses":{"name":"Próby"},"allow_blanks":{"name":"Zezwól na puste"},"allow_duplicates":{"name":"Zezwól na powtórzenia"}},"action":{"k":{"label":"Zachowaj","title":"Kliknij kołek w swoim rzędzie, aby przenieść go do następnej próby (K)"},"l":{"label":"Litery","title":"Oznacz kołki literami (L)"}},"status":{"revealed":"Rozwiązanie odsłonięte","solved":{"one":"Rozwiązane w {n} próbie","few":"Rozwiązane w {n} próbach","many":"Rozwiązane w {n} próbach","other":"Rozwiązane w {n} próby"},"outOfGuesses":"Koniec prób — oto rozwiązanie","guessN":"Próba {n} z {total}"},"alsoKnownAs":"Mastermind","achievement":{"five_guesses":{"name":"Łamacz kodów","description":"Odgadnij ukryty rząd w pięciu próbach lub mniej."},"super_sleuth":{"name":"Superdetektyw","description":"Odgadnij ukryty rząd pięciu kołków w wariancie Super w sześciu próbach lub mniej."},"so_near":{"name":"Tak blisko","description":"Wyczerp próby, mając na właściwych miejscach wszystkie kołki oprócz jednego."}}},"inertia":{"name":"Bezwładność","description":"Tocz kulkę po planszy, aby zebrać wszystkie klejnoty, nie wpadając na minę.","preset":{"10x8":"10×8","15x12":"15×12","20x16":"20×16"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"}},"status":{"gems":"Klejnoty: {n}","deaths":" · Zgony: {n}"},"achievement":{"hat_trick":{"name":"Trzy za jednym zamachem","description":"Zbierz trzy klejnoty lub więcej jednym toczeniem kulki."},"shortcut":{"name":"Na skróty","description":"Zbierz wszystkie klejnoty na planszy 15×12 lub większej w mniejszej liczbie toczeń, niż potrzebuje Rozwiąż."},"last_gem_mine":{"name":"Pyrrusowe zwycięstwo","description":"Wtocz się na minę tym samym ruchem, którym zbierasz ostatni klejnot."}}},"keen":{"name":"Keen","description":"Wypełnij kwadrat łaciński tak, aby cyfry w każdej klatce zgadzały się z jej wskazówką.","preset":{"4x4_easy":"4×4 łatwy","5x5_easy":"5×5 łatwy","5x5_easy_x_only":"5×5 łatwy, tylko ×","6x6_easy":"6×6 łatwy","6x6_medium":"6×6 średni","6x6_medium_x_only":"6×6 średni, tylko ×","6x6_hard":"6×6 trudny","6x6_expert":"6×6 ekspercki","6x6_extreme":"6×6 ekstremalny","9x9_medium":"9×9 średni"},"config":{"grid_size":{"name":"Rozmiar siatki"},"difficulty":{"name":"Trudność","choice":{"easy":"Łatwy","medium":"Średni","hard":"Trudny","expert":"Ekspercki","extreme":"Ekstremalny"}},"multiplication_only":{"name":"Tylko mnożenie"}},"action":{"m":{"label":"Notatki","title":"Wpisz ołówkiem każdą możliwość w każde puste pole (M)"},"l":{"label":"Wyróżnij","title":"Wyróżnij każde pole z ostatnio dotkniętą cyfrą (L)"}},"alsoKnownAs":"KenKen, Calcudoku","achievement":{"no_pencil":{"name":"Rachunek w pamięci","description":"Rozwiąż Keen 6×6 lub większe bez ani jednej notatki ołówkiem."},"products_only":{"name":"Sam iloczyn","description":"Rozwiąż Keen 6×6 średni, używając wyłącznie mnożenia."}}},"lightup":{"name":"Rozświetl","description":"Rozstaw żarówki tak, aby każde pole było oświetlone i żadna żarówka nie świeciła na inną.","preset":{"7x7_easy":"7×7 łatwy","7x7_medium":"7×7 średni","7x7_hard":"7×7 trudny","10x10_easy":"10×10 łatwy","10x10_medium":"10×10 średni","10x10_hard":"10×10 trudny","14x14_easy":"14×14 łatwy","14x14_medium":"14×14 średni","14x14_hard":"14×14 trudny"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"of_black_squares":{"name":"% czarnych pól"},"symmetry":{"name":"Symetria","choice":{"none":"Brak","2_way_mirror":"Lustrzana dwukrotna","2_way_rotational":"Obrotowa dwukrotna","4_way_mirror":"Lustrzana czterokrotna","4_way_rotational":"Obrotowa czterokrotna"}},"difficulty":{"name":"Trudność","choice":{"easy":"Łatwy","medium":"Średni","hard":"Trudny"}}},"alsoKnownAs":"Akari","achievement":{"no_crosses":{"name":"Same światła","description":"Rozwiąż Rozświetl 10×10 lub większe, nie stawiając ani jednego krzyżyka."},"no_takebacks":{"name":"Świetlany pomysł","description":"Rozwiąż trudne Rozświetl, ani razu nie zabierając żarówki."}},"action":{"x":{"label":"Krzyżyk","title":"Kliknięcia stawiają krzyżyki zamiast żarówek (X)"}}},"loopy":{"name":"Pętla","description":"Narysuj jedną zamkniętą pętlę tak, aby każda liczba mówiła, ile linii ją otacza.","preset":{"7x7_squares_easy":"7×7 kwadratowa, łatwy","10x10_squares_easy":"10×10 kwadratowa, łatwy","7x7_squares_medium":"7×7 kwadratowa, średni","10x10_squares_medium":"10×10 kwadratowa, średni","7x7_squares_expert":"7×7 kwadratowa, ekspercki","10x10_squares_expert":"10×10 kwadratowa, ekspercki","10x10_triangular_expert":"10×10 trójkątna, ekspercki","12x10_honeycomb_expert":"12×10 plaster miodu, ekspercki","7x7_snub_square_expert":"7×7 ścięta kwadratowa, ekspercki","9x9_cairo_expert":"9×9 kairska, ekspercki","5x4_great_hexagonal_expert":"5×4 wielka sześciokątna, ekspercki","7x7_octagonal_expert":"7×7 ośmiokątna, ekspercki","5x5_kites_expert":"5×5 latawce, ekspercki","5x5_floret_expert":"5×5 rozetka, ekspercki","5x4_dodecagonal_expert":"5×4 dwunastokątna, ekspercki","5x4_great_dodecagonal_expert":"5×4 wielka dwunastokątna, ekspercki","10x10_penrose_kite_dart_expert":"10×10 Penrose (latawiec/grot), ekspercki","10x10_penrose_rhombs_expert":"10×10 Penrose (romby), ekspercki"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"grid_type":{"name":"Rodzaj siatki","choice":{"squares":"Kwadratowa","triangular":"Trójkątna","honeycomb":"Plaster miodu","snub_square":"Ścięta kwadratowa","cairo":"Kairska","great_hexagonal":"Wielka sześciokątna","octagonal":"Ośmiokątna","kites":"Latawce","floret":"Rozetka","dodecagonal":"Dwunastokątna","great_dodecagonal":"Wielka dwunastokątna","penrose_kite_dart":"Penrose (latawiec/grot)","penrose_rhombs":"Penrose (romby)"}},"difficulty":{"name":"Trudność","choice":{"easy":"Łatwy","medium":"Średni","hard":"Trudny","expert":"Ekspercki"}}},"alsoKnownAs":"Slitherlink","achievement":{"off_grid":{"name":"Poza kratką","description":"Rozwiąż Pętlę na dowolnej siatce innej niż kwadratowa."},"no_crosses":{"name":"Tylko pętla","description":"Rozwiąż Pętlę 10×10, nie skreślając ani jednej krawędzi."},"aperiodic":{"name":"Aperiodycznie","description":"Rozwiąż Pętlę Penrose'a, ani razu nie usuwając narysowanej linii."}},"action":{"x":{"label":"Krzyżyk","title":"Kliknięcia skreślają krawędzie zamiast rysować linie (X)"}}},"magnets":{"name":"Magnesy","description":"Rozmieść magnesy i puste kostki tak, aby liczby biegunów się zgadzały.","preset":{"6x5_easy":"6×5 łatwy","6x5_hard":"6×5 trudny","6x5_hard_strip_clues":"6×5 trudny, okrojone wskazówki","8x7_easy":"8×7 łatwy","8x7_hard":"8×7 trudny","8x7_hard_strip_clues":"8×7 trudny, okrojone wskazówki","10x9_hard":"10×9 trudny","10x9_hard_strip_clues":"10×9 trudny, okrojone wskazówki"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"difficulty":{"name":"Trudność","choice":{"easy":"Łatwy","hard":"Trudny"}},"strip_clues":{"name":"Okrojone wskazówki"}},"achievement":{"no_flips":{"name":"Właściwą stroną","description":"Rozwiąż Magnesy 8×7 lub większe, ani razu nie odwracając magnesu."},"stripped":{"name":"Gołe przewody","description":"Rozwiąż Magnesy 10×9 trudny z okrojonymi wskazówkami w mniej niż dziesięć minut."}},"action":{"b":{"label":"Pusta","title":"Kliknięcia oznaczają kostki jako puste zamiast stawiać magnesy (B)"}}},"map":{"name":"Mapa","description":"Pokoloruj mapę czterema kolorami tak, aby sąsiednie obszary nigdy nie miały tego samego koloru.","preset":{"20x15_easy_30_regions":"20×15 łatwy, 30 obszarów","20x15_medium_30_regions":"20×15 średni, 30 obszarów","20x15_hard_30_regions":"20×15 trudny, 30 obszarów","20x15_extreme_30_regions":"20×15 ekstremalny, 30 obszarów","30x25_medium_75_regions":"30×25 średni, 75 obszarów","30x25_hard_75_regions":"30×25 trudny, 75 obszarów"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"regions":{"name":"Obszary"},"difficulty":{"name":"Trudność","choice":{"easy":"Łatwy","medium":"Średni","hard":"Trudny","extreme":"Ekstremalny"}}},"achievement":{"no_dots":{"name":"Atlas z wolnej ręki","description":"Rozwiąż Mapę na poziomie trudnym lub wyższym bez ani jednej kropki ołówkiem."},"steady_brush":{"name":"Pewny pędzel","description":"Rozwiąż Mapę na poziomie ekstremalnym, ani razu nie zmieniając koloru obszaru."}},"action":{"l":{"label":"Numery","title":"Pokaż numer w każdym obszarze (L)"}}},"mines":{"name":"Miny","alsoKnownAs":"Saper","description":"Odkryj każde pole, pod którym nie ma miny; nigdy nie musisz zgadywać.","preset":{"9x9_beginner_10_mines":"9×9 Początkujący, 10 min","9x9_35_mines":"9×9, 35 min","16x16_intermediate_40_mines":"16×16 Zaawansowany, 40 min","16x16_99_mines":"16×16, 99 min","30x16_expert_99_mines":"30×16 Ekspert, 99 min","30x16_170_mines":"30×16, 170 min"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"mines":{"name":"Miny"},"ensure_solubility":{"name":"Zapewnij rozwiązywalność"}},"status":{"marked":"Oznaczone: {n} / {total}","deaths":" · Zgony: {n}"},"achievement":{"no_flags":{"name":"Bez flag","description":"Wygraj partię Min, nie stawiając ani jednej flagi."},"expert_sweep":{"name":"Oddział saperów","description":"Wygraj na planszy 30×16 Ekspert w mniej niż pięć minut."},"so_close":{"name":"O włos","description":"Wejdź na minę, gdy do otwarcia zostały najwyżej trzy bezpieczne pola."}}},"net":{"name":"Sieć","description":"Obracaj kafelki, aż każdy z nich będzie podłączony do środka.","preset":{"5x5":"5×5","7x7":"7×7","9x9":"9×9","11x11":"11×11","13x11":"13×11","5x5_wrapping":"5×5 z zawijaniem","7x7_wrapping":"7×7 z zawijaniem","9x9_wrapping":"9×9 z zawijaniem","11x11_wrapping":"11×11 z zawijaniem","13x11_wrapping":"13×11 z zawijaniem"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"walls_wrap_around":{"name":"Zawijanie krawędzi"},"barrier_probability":{"name":"Prawdopodobieństwo bariery"},"ensure_unique_solution":{"name":"Zapewnij jedno rozwiązanie"}},"action":{"k":{"label":"Blokada","title":"Klikaj kafelki, aby je blokować lub odblokowywać zamiast obracać (K)"},"j":{"label":"Zamieszaj","title":"Obróć losowo każdy niezablokowany kafelek (J)"},"scroll_left":{"label":"←","title":"Przewiń widok w lewo (Shift+←)"},"scroll_up":{"label":"↑","title":"Przewiń widok w górę (Shift+↑)"},"scroll_down":{"label":"↓","title":"Przewiń widok w dół (Shift+↓)"},"scroll_right":{"label":"→","title":"Przewiń widok w prawo (Shift+→)"}},"status":{"active":"Aktywne: {n}/{total}"},"alsoKnownAs":"NetWalk","achievement":{"no_locks":{"name":"Nic pod kluczem","description":"Rozwiąż Sieć 9×9 lub większą, nie blokując ani jednego kafelka."},"not_a_turn_wasted":{"name":"Ani jednego zbędnego obrotu","description":"Rozwiąż Sieć 9×9 lub większą, nie obracając żadnego kafelka bardziej, niż trzeba."},"jumbled":{"name":"Totalne zamieszanie","description":"Naciśnij Zamieszaj, a mimo to rozwiąż łamigłówkę."}}},"netslide":{"name":"Przesuwna sieć","description":"Przesuwaj wiersze i kolumny fragmentów sieci, aż wszystko będzie połączone.","preset":{"3x3_easy":"3×3 łatwy","3x3_medium":"3×3 średni","3x3_hard":"3×3 trudny","4x4_easy":"4×4 łatwy","4x4_medium":"4×4 średni","4x4_hard":"4×4 trudny","5x5_easy":"5×5 łatwy","5x5_medium":"5×5 średni","5x5_hard":"5×5 trudny"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"walls_wrap_around":{"name":"Zawijanie krawędzi"},"barrier_probability":{"name":"Prawdopodobieństwo bariery"},"number_of_shuffling_moves":{"name":"Liczba ruchów tasujących"}},"status":{"active":" · Aktywne: {n}/{total}"},"achievement":{"tidy_four":{"name":"Schludne okablowanie","description":"Rozwiąż Przesuwną sieć 4×4 w 18 przesunięciach lub mniej."},"lean_five":{"name":"Monter linii","description":"Rozwiąż Przesuwną sieć 5×5 w 32 przesunięciach lub mniej."},"big_switch":{"name":"Wielkie przełączenie","description":"Zasil całą sieć jednym przesunięciem, gdy aktywna była mniej niż połowa."}}},"pattern":{"name":"Wzór","alsoKnownAs":"Nonogram, japońskie krzyżówki, obrazki logiczne, Picross","description":"Wypełnij siatkę według długości czarnych serii podanych przy każdym wierszu i kolumnie.","preset":{"10x10":"10×10","15x15":"15×15","20x20":"20×20","25x25":"25×25","30x30":"30×30"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"}},"achievement":{"no_dots":{"name":"Ani kropki","description":"Rozwiąż Wzór 15×15 lub większy, nie stawiając ani jednej kropki."},"inked_in":{"name":"Wytuszowane","description":"Rozwiąż Wzór 20×20 lub większy, ani razu nie czyszcząc czarnego pola."}},"action":{"e":{"label":"Gumka","title":"Kliknij lub przeciągnij, aby wymazać pola z powrotem do stanu nieznanego (E)"}}},"pearl":{"name":"Perły","description":"Narysuj jedną zamkniętą pętlę, która biegnie prosto przez białe perły, a przy czarnych skręca.","preset":{"6x6_easy":"6×6 łatwy","6x6_tricky":"6×6 podchwytliwy","8x8_easy":"8×8 łatwy","8x8_tricky":"8×8 podchwytliwy","10x10_easy":"10×10 łatwy","10x10_tricky":"10×10 podchwytliwy","12x8_easy":"12×8 łatwy","12x8_tricky":"12×8 podchwytliwy"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"difficulty":{"name":"Trudność","choice":{"easy":"Łatwy","tricky":"Podchwytliwy"}},"allow_unsoluble":{"name":"Zezwól na nierozwiązywalne"}},"alsoKnownAs":"Masyu","achievement":{"no_crosses":{"name":"Sznur pereł","description":"Rozwiąż Perły 10×10, nie stawiając ani jednego krzyżyka."},"one_stroke":{"name":"Jednym pociągnięciem","description":"Narysuj całą pętlę Pereł 8×8 lub większych jednym przeciągnięciem."}},"action":{"x":{"label":"Krzyżyk","title":"Kliknij lub przeciągnij, aby skreślić krawędzie, których pętla nie może użyć (X)"}}},"pegs":{"name":"Kołki","alsoKnownAs":"Samotnik, solitaire","description":"Przeskakuj kołkiem nad kołkiem, aż zostanie tylko jeden.","preset":{"cross":"Krzyż","octagon":"Ośmiokąt","random_5x5":"Losowa 5×5","random_7x7":"Losowa 7×7","random_9x9":"Losowa 9×9"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"board_type":{"name":"Rodzaj planszy","choice":{"cross":"Krzyż","octagon":"Ośmiokąt","random":"Losowa"}}},"status":{"stuck":"Brak ruchów — zostało kołków: {n}","playing":"Pozostałe kołki: {n}  ·  Ruchy: {moves}"},"achievement":{"dead_centre":{"name":"W sam środek","description":"Ukończ planszę Krzyż z ostatnim kołkiem w środkowym otworze."},"hopscotch":{"name":"Gra w klasy","description":"Wygraj partię Kołków, skacząc jednym kołkiem cztery razy z rzędu."},"pegged_out":{"name":"Zabity ćwiek","description":"Utknij, mając na planszy dziesięć kołków lub więcej."}}},"range":{"name":"Zasięg","description":"Zamaluj pola na czarno tak, aby każda liczba widziała dokładnie tyle białych pól w swoim wierszu i kolumnie.","preset":{"9x6":"9×6","12x8":"12×8","13x9":"13×9","16x11":"16×11"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"}},"alsoKnownAs":"Kurodoko, Kuromasu","achievement":{"no_dots":{"name":"Czysty kontrast","description":"Rozwiąż Zasięg 13×9 lub większy, nie stawiając ani jednej kropki."},"quick_sight":{"name":"Bystre oko","description":"Rozwiąż Zasięg 16×11 w mniej niż pięć minut."}},"action":{"e":{"label":"Gumka","title":"Kliknij lub przeciągnij, aby usunąć czarne pola i kropki (E)"}}},"rect":{"name":"Prostokąty","description":"Podziel siatkę na prostokąty, z których każdy zawiera jedną liczbę równą jego polu.","preset":{"7x7":"7×7","9x9":"9×9","11x11":"11×11","13x13":"13×13","15x15":"15×15","17x17":"17×17","19x19":"19×19"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"expansion_factor":{"name":"Współczynnik rozrostu"},"ensure_unique_solution":{"name":"Zapewnij jedno rozwiązanie"}},"status":{"drag":"{w}×{h} "},"alsoKnownAs":"Shikaku","achievement":{"clean_cuts":{"name":"Czyste cięcia","description":"Rozwiąż Prostokąty 11×11 lub większe w nie większej liczbie ruchów, niż jest liczb."},"quick_carver":{"name":"Szybkie dłuto","description":"Rozwiąż Prostokąty 19×19 w mniej niż dziesięć minut."}},"action":{"e":{"label":"Gumka","title":"Przeciągnij przez obszar, aby wyczyścić linie w środku, albo kliknij linię, aby ją usunąć (E)"}}},"samegame":{"name":"Same Game","description":"Wyczyść planszę, usuwając grupy stykających się pól w tym samym kolorze.","preset":{"5x5_3_colours":"5×5, 3 kolory","10x5_3_colours":"10×5, 3 kolory","15x10_3_colours":"15×10, 3 kolory","15x10_4_colours":"15×10, 4 kolory","20x15_4_colours":"20×15, 4 kolory"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"no_of_colours":{"name":"Liczba kolorów"},"scoring_system":{"name":"System punktacji","choice":{"n_1_2":"(n-1)^2","n_2_2":"(n-2)^2"}},"ensure_solubility":{"name":"Zapewnij rozwiązywalność"}},"status":{"score":"Wynik: {n}","complete":"Plansza wyczyszczona! {score}","stuck":"Brak ruchów. {score}","selected":"{score} · Zaznaczone: {n} (+{points})"},"alsoKnownAs":"Clickomania","achievement":{"avalanche":{"name":"Lawina","description":"Usuń za jednym razem grupę 25 pól lub większą, a potem wyczyść planszę."},"no_pairs":{"name":"Pary zakazane","description":"Wyczyść planszę 15×10 lub większą, ani razu nie usuwając pary."},"last_one":{"name":"Ostatnie pole","description":"Utknij z jednym jedynym polem na planszy."}}},"signpost":{"name":"Drogowskaz","description":"Połącz pola w jedną ponumerowaną ścieżkę, w której każdy krok podąża za strzałką.","preset":{"4x4":"4×4","4x4_free_ends":"4×4, wolne końce","5x5":"5×5","5x5_free_ends":"5×5, wolne końce","6x6":"6×6","7x7":"7×7"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"start_and_end_in_corners":{"name":"Początek i koniec w rogach"}},"achievement":{"unbroken":{"name":"Nieprzerwany łańcuch","description":"Rozwiąż Drogowskaz, ani razu nie usuwając ani nie zastępując połączenia."},"in_order":{"name":"Prosto do celu","description":"Rozwiąż Drogowskaz 6×6 lub większy, łącząc ścieżkę po kolei, od 1 do gwiazdki."},"star_first":{"name":"Pod szczęśliwą gwiazdą","description":"Zrób pierwsze połączenie prosto do gwiazdki, a potem rozwiąż łamigłówkę."}},"action":{"b":{"label":"Rozbij","title":"Kliknij pole, aby rozbić cały jego łańcuch (B)"}}},"singles":{"name":"Jedynacy","description":"Zaczerniaj pola tak, aby żadna liczba nie powtarzała się w wierszu ani kolumnie i aby siatka się nie rozpadła.","preset":{"5x5_easy":"5×5 łatwy","5x5_tricky":"5×5 podchwytliwy","6x6_easy":"6×6 łatwy","6x6_tricky":"6×6 podchwytliwy","8x8_easy":"8×8 łatwy","8x8_tricky":"8×8 podchwytliwy","10x10_easy":"10×10 łatwy","10x10_tricky":"10×10 podchwytliwy","12x12_easy":"12×12 łatwy","12x12_tricky":"12×12 podchwytliwy"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"difficulty":{"name":"Trudność","choice":{"easy":"Łatwy","tricky":"Podchwytliwy"}}},"alsoKnownAs":"Hitori","achievement":{"no_circles":{"name":"Kółka zbędne","description":"Rozwiąż Jedynaków 8×8 lub większych, nie otaczając kółkiem ani jednej liczby."},"sure_hand":{"name":"Nieomylna ręka","description":"Rozwiąż Jedynaków 10×10 lub większych, ani razu nie przywracając zaczernionego pola."}}},"sixteen":{"name":"Szesnastka","description":"Przesuwaj całe wiersze i kolumny w kółko, aby ułożyć kafelki po kolei.","preset":{"3x3":"3×3","4x3":"4×3","4x4":"4×4","5x4":"5×4","5x5":"5×5"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"number_of_shuffling_moves":{"name":"Liczba ruchów tasujących"}},"achievement":{"lean_slides":{"name":"Oszczędne przesuwanie","description":"Ułóż 4×4 w 100 przesunięciach lub mniej."},"five_in_200":{"name":"Wielki porządek","description":"Ułóż 5×5 w 200 przesunięciach lub mniej."},"round_the_doughnut":{"name":"Dookoła obwarzanka","description":"Przesuwaj jedną linię dookoła, aż wróci tam, gdzie zaczęła."}}},"slant":{"name":"Ukośniki","description":"Narysuj przekątną w każdym polu, dopasuj liczby i nie zamykaj żadnej pętli.","preset":{"5x5_easy":"5×5 łatwy","5x5_hard":"5×5 trudny","8x8_easy":"8×8 łatwy","8x8_hard":"8×8 trudny","12x10_easy":"12×10 łatwy","12x10_hard":"12×10 trudny"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"difficulty":{"name":"Trudność","choice":{"easy":"Łatwy","hard":"Trudny"}}},"alsoKnownAs":"Gokigen Naname","achievement":{"no_loops":{"name":"Bez pętli","description":"Rozwiąż Ukośniki 8×8 lub większe, ani razu nie zamykając pętli."},"steady_hand":{"name":"Bez wahania","description":"Rozwiąż Ukośniki 12×10, nie wracając, by zmienić linię."}}},"solo":{"name":"Solo","alsoKnownAs":"Sudoku","description":"Wypełnij siatkę tak, aby w każdym wierszu, kolumnie i bloku każda cyfra wystąpiła dokładnie raz.","preset":{"4x4_very_easy":"4×4 bardzo łatwy","6x6_easy":"6×6 łatwy","9x9_very_easy":"9×9 bardzo łatwy","9x9_easy":"9×9 łatwy","9x9_x_diagonal_easy":"9×9 X, łatwy","9x9_medium":"9×9 średni","9x9_hard":"9×9 trudny","9x9_x_diagonal_hard":"9×9 X, trudny","9x9_expert":"9×9 ekspercki","9x9_extreme":"9×9 ekstremalny","9x9_killer":"9×9 killer","9x9_jigsaw_easy":"9×9 jigsaw, łatwy","9x9_jigsaw_x_diagonal_easy":"9×9 jigsaw X, łatwy","9x9_jigsaw_hard":"9×9 jigsaw, trudny","12x12_easy":"12×12 łatwy","16x16_easy":"16×16 łatwy"},"config":{"columns_of_sub_blocks":{"name":"Kolumny podbloków"},"rows_of_sub_blocks":{"name":"Wiersze podbloków"},"x_require_every_number_in_each_main_diagonal":{"name":"„X” (każda liczba na obu głównych przekątnych)"},"jigsaw_irregularly_shaped_sub_blocks":{"name":"Jigsaw (podbloki o nieregularnych kształtach)"},"killer_digit_sums":{"name":"Killer (sumy cyfr)"},"symmetry":{"name":"Symetria","choice":{"none":"Brak","2_way_rotation":"Obrót dwukrotny","4_way_rotation":"Obrót czterokrotny","2_way_mirror":"Lustrzana dwukrotna","2_way_diagonal_mirror":"Lustrzana dwukrotna po przekątnej","4_way_mirror":"Lustrzana czterokrotna","4_way_diagonal_mirror":"Lustrzana czterokrotna po przekątnej","8_way_mirror":"Lustrzana ośmiokrotna"}},"difficulty":{"name":"Trudność","choice":{"very_easy":"Bardzo łatwy","easy":"Łatwy","medium":"Średni","hard":"Trudny","expert":"Ekspercki","extreme":"Ekstremalny"}}},"action":{"m":{"label":"Notatki","title":"Wpisz ołówkiem każdą możliwość w każde puste pole (M)"},"l":{"label":"Wyróżnij","title":"Wyróżnij każde pole z ostatnio dotkniętą cyfrą (L)"}},"achievement":{"pen_only":{"name":"Długopis, nie ołówek","description":"Rozwiąż Solo 9×9 średni, killer lub trudniejszy bez ani jednej notatki ołówkiem."},"no_second_thoughts":{"name":"Bez poprawek","description":"Rozwiąż 9×9 ekspercki lub trudniejszy, ani razu nie zmieniając ani nie czyszcząc cyfry."}}},"tents":{"name":"Namioty","description":"Rozbij namiot obok każdego drzewa tak, aby żadne dwa namioty się nie stykały.","preset":{"8x8_easy":"8×8 łatwy","8x8_tricky":"8×8 podchwytliwy","10x10_easy":"10×10 łatwy","10x10_tricky":"10×10 podchwytliwy","15x15_easy":"15×15 łatwy","15x15_tricky":"15×15 podchwytliwy"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"difficulty":{"name":"Trudność","choice":{"easy":"Łatwy","tricky":"Podchwytliwy"}}},"alsoKnownAs":"Namioty i drzewa","achievement":{"no_grass":{"name":"Idealny biwak","description":"Rozwiąż Namioty 10×10 lub większe, nie oznaczając ani jednego pola jako trawy."},"no_strikes":{"name":"Szczęśliwi obozowicze","description":"Rozwiąż Namioty 15×15, ani razu nie zwijając namiotu."}}},"towers":{"name":"Wieże","alsoKnownAs":"Drapacze chmur, wieżowce","description":"Buduj wieże tak, aby każda wskazówka na brzegu mówiła, ile wież widać z tego miejsca.","preset":{"4x4_easy":"4×4 łatwy","5x5_easy":"5×5 łatwy","5x5_hard":"5×5 trudny","6x6_easy":"6×6 łatwy","6x6_hard":"6×6 trudny","6x6_expert":"6×6 ekspercki","6x6_extreme":"6×6 ekstremalny"},"config":{"grid_size":{"name":"Rozmiar siatki"},"difficulty":{"name":"Trudność","choice":{"easy":"Łatwy","hard":"Trudny","expert":"Ekspercki","extreme":"Ekstremalny"}}},"action":{"m":{"label":"Notatki","title":"Wpisz ołówkiem każdą możliwość w każde puste pole (M)"},"l":{"label":"Wyróżnij","title":"Wyróżnij każde pole z ostatnio dotkniętą cyfrą (L)"}},"achievement":{"no_pencil":{"name":"Panorama w pamięci","description":"Rozwiąż Wieże 6×6 bez ani jednej notatki ołówkiem."},"clean_build":{"name":"Zbudowane na lata","description":"Rozwiąż Wieże 6×6 ekspercki lub ekstremalny, nie wracając, by zmienić wieżę."},"tallest_first":{"name":"Najpierw najwyższe","description":"Postaw wszystkie najwyższe wieże przed jakimikolwiek innymi, a potem rozwiąż siatkę."}}},"tracks":{"name":"Tory","description":"Ułóż jeden tor od wjazdu do wyjazdu, zgodnie z liczbami przy brzegach.","preset":{"8x8_easy":"8×8 łatwy","8x8_tricky":"8×8 podchwytliwy","10x8_easy":"10×8 łatwy","10x8_tricky":"10×8 podchwytliwy","10x10_easy":"10×10 łatwy","10x10_tricky":"10×10 podchwytliwy","15x10_easy":"15×10 łatwy","15x10_tricky":"15×10 podchwytliwy","15x15_easy":"15×15 łatwy","15x15_tricky":"15×15 podchwytliwy"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"difficulty":{"name":"Trudność","choice":{"easy":"Łatwy","tricky":"Podchwytliwy"}},"disallow_consecutive_1_clues":{"name":"Bez sąsiadujących wskazówek 1"}},"alsoKnownAs":"Tory kolejowe","achievement":{"no_crosses":{"name":"Nic nie skreślone","description":"Rozwiąż Tory 10×10 lub większe, nie skreślając żadnego pola ani boku."},"no_lift":{"name":"Pełną parą","description":"Rozwiąż Tory 15×10 lub większe, ani razu nie zdejmując ułożonej szyny."},"long_haul":{"name":"Daleka trasa","description":"Ułóż szyny przez dziesięć pól jednym przeciągnięciem, a potem dokończ tor."}},"action":{"e":{"label":"Gumka","title":"Kliknij lub przeciągnij, aby wyczyścić pola do czysta (E)"}}},"twiddle":{"name":"Obrotka","description":"Obracaj kwadratowe bloki kafelków, aby ustawić liczby z powrotem po kolei.","preset":{"3x3_rows_only":"3×3 tylko wiersze","3x3_normal":"3×3 normalny","3x3_orientable":"3×3 z orientacją","4x4_normal":"4×4 normalny","4x4_orientable":"4×4 z orientacją","4x4_rotating_3x3_blocks":"4×4, obracane bloki 3×3","5x5_rotating_3x3_blocks":"5×5, obracane bloki 3×3","6x6_rotating_4x4_blocks":"6×6, obracane bloki 4×4"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"rotating_block_size":{"name":"Rozmiar obracanego bloku"},"one_number_per_row":{"name":"Jedna liczba na wiersz"},"orientation_matters":{"name":"Orientacja ma znaczenie"},"number_of_shuffling_moves":{"name":"Liczba ruchów tasujących"}},"achievement":{"few_turns":{"name":"Dwadzieścia obrotów","description":"Rozwiąż Obrotkę 3×3 normalny w 20 obrotach lub mniej."},"perfect_ten":{"name":"Idealna dziesiątka","description":"Rozwiąż Obrotkę 3×3 normalny w 10 obrotach lub mniej."},"dizzy":{"name":"W kółko i w kółko","description":"Obróć jeden blok w tę samą stronę cztery razy z rzędu, a potem rozwiąż łamigłówkę."}},"action":{"t":{"label":"W prawo","title":"Zamień kierunki: kliknięcie obraca zgodnie z ruchem wskazówek zegara, prawy przycisk przeciwnie (T)"}}},"undead":{"name":"Nieumarli","description":"Rozstaw duchy, wampiry i zombie tak, aby zgadzało się to, co widać w lustrach.","preset":{"4x4_easy":"4×4 łatwy","4x4_normal":"4×4 normalny","4x4_tricky":"4×4 podchwytliwy","5x5_easy":"5×5 łatwy","5x5_normal":"5×5 normalny","5x5_tricky":"5×5 podchwytliwy","7x7_easy":"7×7 łatwy","7x7_normal":"7×7 normalny"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"difficulty":{"name":"Trudność","choice":{"easy":"Łatwy","normal":"Normalny","tricky":"Podchwytliwy"}}},"keypad":{"g":"Duch","v":"Wampir","z":"Zombie"},"alsoKnownAs":"Nawiedzony labirynt luster","achievement":{"no_pencil":{"name":"Ufaj oczom","description":"Rozwiąż Nieumarłych 5×5 lub większych bez ani jednej notatki ołówkiem."},"fearless":{"name":"Nieustraszony","description":"Rozwiąż Nieumarłych na poziomie podchwytliwym, nie wracając, by zmienić potwora."}},"action":{"s":{"label":"Wzrok","title":"Prześledź linie wzroku przez pole albo od liczby na krawędzi (S)"}}},"unequal":{"name":"Nierówności","description":"Uzupełnij kwadrat łaciński tak, aby każdy znak nierówności był spełniony.","preset":{"4x4_easy":"4×4 łatwy","5x5_easy":"5×5 łatwy","5x5_medium":"5×5 średni","5x5_medium_adjacent":"5×5 średni (sąsiedztwo)","5x5_hard":"5×5 trudny","6x6_easy":"6×6 łatwy","6x6_medium":"6×6 średni","6x6_medium_adjacent":"6×6 średni (sąsiedztwo)","6x6_hard":"6×6 trudny","7x7_medium":"7×7 średni","7x7_medium_adjacent":"7×7 średni (sąsiedztwo)","7x7_hard":"7×7 trudny"},"config":{"mode":{"name":"Tryb","choice":{"unequal":"Nierówności","adjacent":"Sąsiedztwo"}},"size_s_s":{"name":"Rozmiar (s*s)"},"difficulty":{"name":"Trudność","choice":{"very_easy":"Bardzo łatwy","easy":"Łatwy","medium":"Średni","hard":"Trudny","extreme":"Ekstremalny"}}},"action":{"m":{"label":"Notatki","title":"Wpisz ołówkiem każdą możliwość w każde puste pole (M)"},"h":{"label":"Podpowiedź","title":"Wpisz ołówkiem możliwości, które zostawia proste rozumowanie (H)"},"l":{"label":"Wyróżnij","title":"Wyróżnij każde pole z ostatnio dotkniętą cyfrą (L)"}},"alsoKnownAs":"Futoshiki","achievement":{"adjacent_bare":{"name":"Za ścianą","description":"Rozwiąż Nierówności w trybie sąsiedztwa bez ani jednej notatki ołówkiem."},"extreme_bare":{"name":"Wszystko w głowie","description":"Rozwiąż Nierówności na poziomie ekstremalnym bez ani jednej notatki ołówkiem."}}},"unruly":{"name":"Niesforne","description":"Pokoloruj każde pole na czarno lub biało: po równo w każdym wierszu i kolumnie i nigdy trzy takie same z rzędu.","preset":{"8x8_easy":"8×8 łatwy","8x8_normal":"8×8 normalny","10x10_easy":"10×10 łatwy","10x10_normal":"10×10 normalny","14x14_easy":"14×14 łatwy","14x14_normal":"14×14 normalny"},"config":{"width":{"name":"Szerokość"},"height":{"name":"Wysokość"},"unique_rows_and_columns":{"name":"Niepowtarzalne wiersze i kolumny"},"difficulty":{"name":"Trudność","choice":{"easy":"Łatwy","normal":"Normalny"}}},"alsoKnownAs":"Binairo, Takuzu","achievement":{"no_threes":{"name":"Nigdy trzy","description":"Rozwiąż Niesforne 10×10 lub większe, ani razu nie układając trzech w rzędzie."},"first_time":{"name":"Czarno na białym","description":"Rozwiąż Niesforne 14×14, nie wracając, by zmienić pole."}},"action":{"e":{"label":"Gumka","title":"Kliknij pole, aby je wyczyścić (E)"}}},"untangle":{"name":"Rozplątywanie","description":"Przeciągaj punkty, aż żadne dwie linie nie będą się krzyżować.","preset":{"6_points":"6 punktów","10_points":"10 punktów","15_points":"15 punktów","20_points":"20 punktów","25_points":"25 punktów"},"config":{"number_of_points":{"name":"Liczba punktów"}},"action":{"g":{"label":"Przyciąganie","title":"Przyciągaj upuszczane punkty do siatki (G)"}},"alsoKnownAs":"Planarity","achievement":{"one_touch":{"name":"Lekka ręka","description":"Rozplącz 10 punktów lub więcej, nie podnosząc tego samego punktu dwa razy."},"only_downhill":{"name":"Tylko w dół","description":"Rozplącz 20 punktów lub więcej tak, by żaden ruch nie dodał czerwonych linii."}}}}`),$=JSON.parse('{"blackbox":{"step1":{"text":"W tej skrzynce 4×4 ukrywa się jedna kulka. Wystrzeliwuj lasery z kropek dookoła brzegu, ustal, gdzie musi być, zaznacz ją i naciśnij przycisk w rogu."},"step2":{"text":"Kliknij kropkę na **lewej krawędzi, na wysokości drugiego wiersza**. Wiązka po drodze skręca i wychodzi gdzie indziej; oba końce dostają ten sam numer."},"step3":{"text":"Teraz wystrzel z kropki na **górze drugiej kolumny**. **H** oznacza, że wiązka trafiła prosto w kulkę i już nie wyszła."},"step4":{"text":"Wystrzel też z kropki na **górze pierwszej kolumny**. **R** oznacza, że wiązka odbiła się prosto z powrotem, co zdarza się, gdy kulka stoi po przekątnej obok portu."},"step5":{"text":"R umieszcza kulkę po przekątnej przy pierwszej kolumnie, a H prosto w dół drugiej: tylko to pole spełnia oba warunki."},"step6":{"text":"**Kliknij to pole**, aby zaznaczyć tam swoją kulkę."},"step7":{"text":"Wszystkie kulki są zaznaczone, więc **ptaszek w lewym górnym rogu** jest aktywny. Kliknij go, aby sprawdzić odpowiedź."},"step8":{"text":"Zgadza się. W trakcie gry możesz **kliknąć prawym przyciskiem** pole, aby je zablokować, gdy masz pewność, że jest puste, a **Rozwiąż** zdradza odpowiedź."}},"bridges":{"step1":{"text":"Liczba na wyspie mówi, ile końców mostów ma się w niej zbiegać. Połącz wszystkie wyspy w jedną sieć: między dwiema wyspami mogą być najwyżej dwa mosty, a mosty nie mogą się krzyżować."},"step2":{"text":"**2 na dole** ma w linii tylko jedną wyspę: **4** na górze. **Przeciągnij** od 2 w stronę 4, aby przerzucić most."},"step3":{"text":"Ta wyspa potrzebuje dwóch końców mostów, a oba mogą prowadzić tylko w tę stronę. **Przeciągnij** tak samo jeszcze raz, aby dołożyć drugi, równoległy most."},"step4":{"text":"Ta wyspa jest gotowa. **Kliknij** ją, aby oznaczyć ją jako skończoną: zszarzeje, a jej mosty się zablokują, więc przypadkiem ich nie ruszysz."},"step5":{"text":"Żaden most nie może przecinać innego, więc linia między **dwiema jedynkami** odpada. **Przeciągnij prawym przyciskiem** od lewej jedynki w stronę prawej, aby to zanotować."},"step6":{"text":"Każda jedynka ma teraz tylko jedno wyjście, a z tego wynikają cztery pozostałe mosty. **Rozwiąż** kończy łamigłówkę (a **G** pokazuje każdą linię, którą mógłby biec most).","textTouch":"Każda jedynka ma teraz tylko jedno wyjście, a z tego wynikają cztery pozostałe mosty. **Rozwiąż** kończy łamigłówkę."}},"cube":{"step1":{"text":"Sześcian ma sześć ścian, a sześć pól jest pomalowanych na niebiesko. Turlaj go, aż każda ściana zbierze po jednym niebieskim polu: przy każdym lądowaniu ściana pod spodem i pole zamieniają się kolorami."},"step2":{"text":"Kliknięcie przewraca sześcian przez krawędź w stronę wybranego pola. **Kliknij niebieskie pole tuż pod sześcianem**, aby przenieść jego kolor na ścianę, która wyląduje."},"step3":{"text":"Pole, które opuścił, jest teraz zwykłe — kolory naprawdę się zamieniają. **Kliknij niebieskie pole po prawej**, aby zabarwić drugą ścianę."},"step4":{"text":"Sześcian turlają też **klawisze strzałek**. Naciśnij raz **→**, aby zebrać trzecie niebieskie pole.","textTouch":"Każde sąsiednie pole jest o jedno stuknięcie stąd. **Stuknij kolejne niebieskie pole po prawej**, aby zebrać trzecie niebieskie pole."},"step5":{"text":"Trzy ściany niebieskie, zostały trzy — tę planszę da się skończyć w sześciu ruchach, a pasek stanu je liczy. **Cofnij** cofa ruch, gdy przesadzisz."}},"dominosa":{"step1":{"text":"Rozłożono tu trzy kostki domina — 0-0, 0-1 i 1-1 — a potem je zabrano, zostawiając same liczby. Podziel siatkę na pary, aby ułożyć każdą z nich z powrotem dokładnie raz."},"step2":{"text":"Żadna kostka nie może wystąpić dwa razy. Sparowanie tego **0** z **1** pod nim zrobiłoby z obu skrajnych kolumn 0-1, więc **kliknij prawym przyciskiem** między nimi, aby zanotować, że to nie para."},"step3":{"text":"Jedyne dwa **0**, które się stykają, to para w lewym górnym rogu, więc tam trafia 0-0. **Kliknij granicę między nimi**, aby położyć tam kostkę."},"step4":{"text":"Podobnie jedyne stykające się **1** to te dwie na dole po lewej. Kliknij granicę między nimi, aby ułożyć 1-1."},"step5":{"text":"Zostaje prawa kolumna na 0-1. Kliknij granicę między jej dwiema liczbami, aby skończyć."},"step6":{"text":"Każda kostka użyta raz. Kliknij kostkę ponownie, aby ją zdjąć; powtórzona kostka jest rysowana na czerwono, a **Cofnij** cofa kolejne ruchy."}},"fifteen":{"step1":{"text":"Wsuwaj ponumerowane kafelki w puste miejsce, aż ułożą się **od 1 do 8** po kolei, z luką w prawym dolnym rogu. Ta mała plansza jest dwa ruchy od końca."},"step2":{"text":"Przesunąć może się każdy kafelek w tym samym wierszu lub kolumnie co luka. Kliknij **5**, aby wepchnąć ją w górę do luki."},"step3":{"text":"Jeszcze jeden. Kliknij **8**, aby dokończyć wiersz."},"step4":{"text":"Rozwiązane! **Cofnij** i **Ponów** cofają i przywracają ruchy, a **Nowa** w menu pauzy losuje nową łamigłówkę. Klawisze strzałek też wsuwają kafelek w lukę, w kierunku strzałki.","textTouch":"Rozwiązane! **Cofnij** i **Ponów** cofają i przywracają ruchy, a **Nowa** w menu pauzy losuje nową łamigłówkę. Cały wiersz lub kolumna przesuwa się naraz, więc celuj w dalszy kafelek."}},"filling":{"step1":{"text":"Wpisz cyfrę w każde puste pole tak, aby każdy spójny blok równych cyfr zajmował dokładnie tyle pól, ile mówi cyfra."},"step2":{"text":"**3** na dole środkowej kolumny może rosnąć tylko w górę, więc jej blokiem jest ta kolumna. **Przeciągnij** od jej górnego pola w dół do środkowego, a potem naciśnij **3**.","textTouch":"**3** na dole środkowej kolumny może rosnąć tylko w górę. **Przeciągnij** od jej górnego pola w dół do środkowego, a potem stuknij **3** na klawiaturze."},"step3":{"text":"**2** w lewej kolumnie potrzebuje jednego partnera, a pole nad nią to jedyne wolne. Kliknij to pole i naciśnij **2**.","textTouch":"**2** w lewej kolumnie potrzebuje jednego partnera, a pole nad nią to jedyne wolne. Stuknij to pole, a potem stuknij **2** na klawiaturze."},"step4":{"text":"Zostało jedno pole. Kliknij je i naciśnij **1**, aby zobaczyć, jak wygląda zła cyfra.","textTouch":"Zostało jedno pole. Stuknij je, a potem stuknij **1** na klawiaturze, aby zobaczyć, jak wygląda zła cyfra."},"step5":{"text":"Czerwony oznacza sprzeczność: te dwie **1** się stykają, więc tworzą blok z dwóch pól, a **2** na górze jest zamurowana. To pole jest nadal zaznaczone, więc naciśnij **Backspace**, aby je opróżnić.","textTouch":"Czerwony oznacza sprzeczność: te dwie **1** się stykają, więc tworzą blok z dwóch pól, a **2** na górze jest zamurowana. To pole jest nadal zaznaczone, więc stuknij **⌫** na klawiaturze, aby je opróżnić."},"step6":{"text":"To puste pole łączy się w parę z **2** nad nim. Kliknij je i naciśnij **2**, aby dokończyć siatkę.","textTouch":"To puste pole łączy się w parę z **2** nad nim. Stuknij je, a potem stuknij **2** na klawiaturze, aby dokończyć siatkę."},"step7":{"text":"Wypełnione. Grube linie zamykają każdy gotowy blok; **kliknięcie prawym przyciskiem** dodaje pola do zaznaczenia po jednym, a **Cofnij** wycofuje wypełnienie."}},"flip":{"step1":{"text":"Zapal wszystkie dziewięć pól. Naciśnięcie jednego przełącza je **oraz** pola dookoła, więc zapalone pola mogą znów zgasnąć."},"step2":{"text":"Mały rysunek wewnątrz pola pokazuje, co ono przełącza: pełny kwadracik to samo pole, obrysy to jego sąsiedzi."},"step3":{"text":"Czas je zapalić. Naciśnij pole w **lewym górnym rogu**, to ciemne w narożniku."},"step4":{"text":"Narożnik świeci, ale dwa sąsiednie pola zgasły. Naciśnij teraz **środkowe** pole."},"step5":{"text":"Ciemny jest już tylko prawy dolny narożnik. Naciśnij pole w **prawym dolnym rogu**, aby skończyć."},"step6":{"text":"Wszystko świeci! **Cofnij** wycofuje naciśnięcie, a zamiast klikać, możesz sterować kursorem strzałkami i naciskać Enter.","textTouch":"Wszystko świeci! **Cofnij** wycofuje naciśnięcie, a dwukrotne naciśnięcie tego samego pola zawsze się znosi, więc kolejność nigdy nie ma znaczenia."}},"flood":{"step1":{"text":"Należy do ciebie lewe górne pole i wszystko, co się z nim łączy w tym samym kolorze. Każdy ruch przemalowuje tę plamę, więc dołączają do niej stykające się pola nowego koloru. Zamaluj całą planszę jednym kolorem w limicie **czterech ruchów**."},"step2":{"text":"Twoja plama to na razie tylko ten niebieski narożnik. Kliknij **czerwone** pole obok niego: plama zrobi się czerwona i zabierze ze sobą każde czerwone pole, którego dotyka."},"step3":{"text":"Teraz kliknij **niebieskie** pole na skraju swojej plamy. Dobrze dobrany kolor potrafi w jednym ruchu pociągnąć się daleko przez siatkę."},"step4":{"text":"Poza twoją plamą został tylko **zielony**. Jeszcze jedno kliknięcie zgarnia resztę siatki."},"step5":{"text":"Trzy ruchy z czterech — pasek stanu je liczy. Jeśli ruchy skończą się, zanim siatka będzie jednolita, runda przepada. Nie wiesz, co dalej? **Podpowiedź** zagra za ciebie jeden dobry kolor, a **Rozwiąż** dokończy siatkę automatycznie."}},"galaxies":{"step1":{"text":"Dwie kropki, więc dwie galaktyki. Rysuj ściany po liniach siatki tak, aby każda kropka znalazła się w środku swojego obszaru: obszar obrócony o 180° wokół swojej kropki musi pokryć się sam ze sobą."},"step2":{"text":"Lewa kropka leży na linii między dwoma polami, więc jej galaktyka musi objąć dwie lewe kolumny. **Kliknij** linię siatki tuż na prawo od nich, w **górnym wierszu**."},"step3":{"text":"Kropki służą też za notatnik. **Przeciągnij** od prawej kropki do **prawego górnego pola**, aby zostawić tam strzałkę oznaczającą, że to pole należy do jej galaktyki."},"step4":{"text":"Wracamy do ściany: **kliknij** tę samą linię siatki jeden wiersz niżej, w **środkowym wierszu**."},"step5":{"text":"Został jeden odcinek, w **dolnym wierszu**. **Kliknij** go, aby domknąć obie galaktyki."},"step6":{"text":"Oba obszary są zacieniowane, więc oba są poprawne. **Rozwiąż** rysuje całą odpowiedź, a kliknięcie na ścianie znów ją wymazuje."}},"guess":{"step1":{"text":"Za znakami zapytania kryją się dwa kołki w jakimś układzie trzech kolorów. Ułóż próbny rząd, odczytaj jego ocenę i zawężaj możliwości."},"step2":{"text":"**Przeciągnij** górny kolor z tacki i upuść go w **lewym otworze** rzędu ze strzałką."},"step3":{"text":"Można też najpierw wybrać kolor i klikać nim otwory. Kliknij **drugi kolor** na tacce."},"step4":{"text":"Teraz kliknij **prawy otwór**, aby wrzucić tam ten kolor."},"step5":{"text":"Rząd jest pełny, więc **przerywana ramka** po jego prawej się zapala. Kliknij ją, aby ocenić próbę."},"step6":{"text":"Dwa **puste** znaczniki mówią, że oba kolory są w odpowiedzi, ale żaden nie stoi we właściwym miejscu — pełny znacznik to dobry kolor na dobrym miejscu. Zamień je i sprawdź jeszcze raz."},"step7":{"text":"Rozwiązane. **Rozwiąż** poddaje partię i pokazuje odpowiedź, a klawisz **L** oznacza kołki literami, gdy kolory trudno rozróżnić.","textTouch":"Rozwiązane. **Rozwiąż** poddaje partię i pokazuje odpowiedź, a **Zachowaj** obok Cofnij zostawia kołek, którego jesteś pewien, na miejscu w następnej próbie."}},"inertia":{"step1":{"text":"Jesteś kulką w lewym górnym rogu, a do zebrania są **trzy klejnoty**. Gdy kulka ruszy, zatrzyma się dopiero na ścianie albo na blokadzie — a mina ją zabija."},"step2":{"text":"Kliknij pole na **prawo** od kulki. Poturla się w tę stronę, aż zatrzyma ją krawędź planszy, zgarniając po drodze klejnot."},"step3":{"text":"Teraz kliknij **pod** kulką. Zabierze kolejny klejnot, a przerywany pierścień dwa pola niżej — blokada — ją zatrzyma."},"step4":{"text":"Uwaga: kolczasta rzecz prosto pod kulką to **mina**. Wtoczenie się na nią kończy grę i tylko Cofnij cię z tego wyciągnie."},"step5":{"text":"Jedź **po skosie**: kliknij pole dwa w dół i dwa w lewo, a kulka prześlizgnie się obok miny na ostatni klejnot."},"step6":{"text":"Wszystkie trzy klejnoty — gotowe. **Cofnij** cofa nieudany ruch; strzałki toczą prosto, a Home, Page Up, End i Page Down po skosie.","textTouch":"Wszystkie trzy klejnoty — gotowe. **Cofnij** cofa nieudany ruch, a stukanie poza siatką też działa, co pomaga, gdy kulka stoi przy krawędzi."}},"keen":{"step1":{"text":"Wpisz 1, 2 i 3 tak, aby każda pojawiła się raz w każdym wierszu i kolumnie, a cyfry w każdej grubo obrysowanej klatce spełniały jej wskazówkę arytmetyczną."},"step2":{"text":"Iloczyn w klatce **2×** to 2, więc jej cyfry to 1, 1 i 2. Cyfry w klatce mogą się powtarzać, ale nie w tym samym wierszu ani kolumnie, więc 2 trafia do narożnika: kliknij to pole i wpisz **2**.","textTouch":"Iloczyn w klatce **2×** to 2, więc jej cyfry to 1, 1 i 2. 2 trafia do narożnika: stuknij to pole, a potem stuknij **2** na klawiaturze."},"step3":{"text":"Dwa pozostałe pola klatki to jedynki. Kliknij pole **na prawo od 2** i wpisz **1**.","textTouch":"Dwa pozostałe pola klatki to jedynki. Stuknij pole **na prawo od 2**, a potem stuknij **1** na klawiaturze."},"step4":{"text":"Górny wiersz ma już 2 i 1, więc w ostatnim polu musi być 3. Kliknij **prawe górne pole** i wpisz **3**.","textTouch":"Górny wiersz ma już 2 i 1, więc w ostatnim polu musi być 3. Stuknij **prawe górne pole**, a potem stuknij **3** na klawiaturze."},"step5":{"text":"Nie masz pewności? **Kliknij prawym przyciskiem** środkowe pole i wpisz **3**, aby zanotować tę cyfrę ołówkiem, zamiast wpisywać ją na stałe.","textTouch":"Nie masz pewności? **Przytrzymaj** środkowe pole i stuknij **3**, aby zanotować tę cyfrę, zamiast wpisywać ją na stałe. Klawisz **✎** robi to samo z polem wybranym stuknięciem."},"step6":{"text":"Resztę rozpracuj tak samo; cyfra powtórzona w wierszu lub kolumnie robi się czerwona, tak samo jak pełna klatka, która nie spełnia wskazówki. W menu pauzy **Notatki** wpisują za ciebie ołówkiem każdą możliwość, a **Rozwiąż** zdradza odpowiedź."}},"lightup":{"step1":{"text":"Każde białe pole musi w końcu zostać oświetlone. Żarówka oświetla swój wiersz i kolumnę, dopóki czarne pole nie zatrzyma promienia, i żadna żarówka nie może stać w świetle innej."},"step2":{"text":"Liczba mówi, ile żarówek dotyka tego czarnego pola. Ta **2** ma tylko dwa białe pola obok, więc na obu stoi żarówka: kliknij to **po prawej**."},"step3":{"text":"Zauważ żółtą poświatę rozlewającą się wzdłuż promienia. Teraz kliknij pole tuż **pod** 2, aby postawić jej drugą żarówkę."},"step4":{"text":"**0** nie dotyka żadnej żarówki. **Kliknij prawym przyciskiem** pole nad nim, aby wpisać ołówkiem krzyżyk: to tylko przypomnienie, że nie może tam stanąć żarówka."},"step5":{"text":"**1** potrzebuje dokładnie jednej żarówki. Pole pod nią jest już oświetlone, więc żarówka stałaby w promieniu — kliknij zamiast tego pole na **lewo** od 1."},"step6":{"text":"Dwa pola w górnym wierszu są wciąż ciemne, a jedno z nich jest już skreślone. Kliknij **to drugie**."},"step7":{"text":"Każde pole oświetlone, każda liczba zadowolona. **Cofnij** wycofuje żarówkę, a strzałki z Enterem i spacją stawiają żarówki i krzyżyki bez myszy.","textTouch":"Każde pole oświetlone, każda liczba zadowolona. **Cofnij** wycofuje żarówkę, a przytrzymanie skreśla pole, na którym żarówki na pewno nie ma."}},"loopy":{"step1":{"text":"Narysuj **jedną** zamkniętą pętlę po bladych liniach między kropkami. Każda liczba mówi, ilu z czterech boków swojego pola używa pętla."},"step2":{"text":"Środkowe pole ma **4**, więc wszystkie cztery jego boki należą do pętli. **Kliknij** jego górny bok, aby narysować pierwszą linię."},"step3":{"text":"Teraz jego **lewy bok**. Ponowne kliknięcie linii wymazuje ją."},"step4":{"text":"Każda kropka ma dwie linie albo żadnej, a kropka, w której te dwie się spotykają, jest już pełna. **Kliknij prawym przyciskiem** linię biegnącą z niej w górę, aby ją skreślić."},"step5":{"text":"Zostały dwa boki. **Kliknij** dolny bok środkowego pola."},"step6":{"text":"A **prawy bok** ją domyka. Jedna pętla, żadnych luźnych końców, a cztery **0** trzymają się od niej z daleka."},"step7":{"text":"Rozwiązane. **Cofnij** cofa kolejne linie, a **Rodzaj** w menu pauzy zamienia kwadraty na trójkąty, sześciokąty i jeszcze dziwniejsze siatki."}},"magnets":{"step1":{"text":"Każda kostka jest albo magnesem, z połówką **+** i połówką **−**, albo pustą kostką. Liczby podają, ile biegunów **+** (u góry i po lewej) oraz **−** (u dołu i po prawej) jest w każdej linii, a jednakowe bieguny nigdy nie mogą się stykać."},"step2":{"text":"Dolny wiersz chce trzech biegunów **−**, a sięgają do niego tylko trzy kostki, więc każda musi dać jeden. **Kliknij lewym przyciskiem** górną połówkę stojącej kostki, aby zrobić z niej **+** i zesłać **−** na dół."},"step3":{"text":"Zatem szeroka kostka na dole po prawej też jest magnesem, a **0** nad ostatnią kolumną zabrania tam **+**. **Kliknij lewym przyciskiem** jej lewą połówkę, aby umieścić **+** po tej stronie."},"step4":{"text":"Czwarta kolumna ma już swój jedyny **+** i nie chce żadnego **−**, więc kostka powyżej nie może być ani jednym, ani drugim. **Kliknij prawym przyciskiem** tę kostkę, aby oznaczyć ją jako pustą."},"step5":{"text":"Górny wiersz wciąż potrzebuje jednego **+** i jednego **−** od szerokiej kostki po lewej. Jej prawa połówka dotyka **+**, a jednakowe bieguny nie mogą się stykać — więc **kliknij lewym przyciskiem** jej lewą połówkę."},"step6":{"text":"Została jedna kostka. Pierwsza kolumna zużyła swój **+** na górze, więc tutejszy **+** należy się prawej stronie: **kliknij lewym przyciskiem** prawą połówkę, aby skończyć."},"step7":{"text":"Rozwiązane! Ponowne kliknięcie tej samej połówki obraca magnes, drugie kliknięcie prawym przyciskiem zostawia znaki zapytania jako notatkę „magnes, ale w którą stronę?”, a **Cofnij** cofa ruch."}},"map":{"step1":{"text":"Pokoloruj każdy obszar tak, aby żadne dwa obszary dzielące odcinek granicy nie miały tego samego koloru. Cztery kolory zawsze wystarczą, a trzy obszary są tu wciąż puste."},"step2":{"text":"Najpierw weź kolor: **kliknij** **niebieską próbkę**, drugą w rzędzie pod mapą."},"step3":{"text":"Gdy masz kolor w ręce, **kliknięcie prawym przyciskiem** na pustym obszarze wpisuje jego kropkę ołówkiem — notatkę, że obszar *może* być tego koloru. Spróbuj na wysokim obszarze przy prawej krawędzi."},"step4":{"text":"To więcej niż „może”: ten obszar graniczy już z czerwonym, zielonym i żółtym, więc zostaje tylko niebieski. **Kliknij** go, aby go zamalować."},"step5":{"text":"Kolor można też **przeciągnąć** z jednego obszaru na drugi. Duży obszar u góry dotyka teraz czerwonego, zielonego i niebieskiego, więc **przeciągnij** do niego żółty z małego obszaru na dole."},"step6":{"text":"Został jeden pusty obszar, w **lewym dolnym rogu**: graniczy z zielonym, niebieskim i tym nowym żółtym, więc musi być czerwony. **Przeciągnij** do niego czerwony z obszaru w prawym górnym rogu."},"step7":{"text":"Gotowe — konflikt pokazałby czerwony **!** na granicy między obszarami. **Cofnij** cofa krok, a strzałki z klawiszami **1**–**4** kolorują bez myszy.","textTouch":"Gotowe — konflikt pokazałby czerwony **!** na granicy między obszarami. **Cofnij** cofa ruch, a gumka na końcu rzędu czyści obszar, gdy zmienisz zdanie."}},"mines":{"step1":{"text":"Każda liczba zlicza miny w ośmiu polach, które jej dotykają. Pod zakrytym blokiem chowają się dwie miny; odkryj całą resztę, nie wchodząc na żadną."},"step2":{"text":"Ta **1** dotyka tylko jednego zakrytego pola, więc to pole to mina. **Kliknij prawym przyciskiem**, aby postawić flagę."},"step3":{"text":"**1** pod nią ma już swoją minę oznaczoną flagą, więc pozostałe sąsiednie pola są bezpieczne. **Kliknij lewym przyciskiem tę 1**, aby odkryć je wszystkie naraz."},"step4":{"text":"**2** nad blokiem liczy już jedną flagę i ma jedno zakryte pole. **Kliknij prawym przyciskiem** to pole."},"step5":{"text":"Obie miny mają flagi, więc ostatnie zakryte pole musi być bezpieczne. **Kliknij lewym przyciskiem**, aby dokończyć siatkę."},"step6":{"text":"Rozminowane. Drugie kliknięcie prawym przyciskiem zdejmuje flagę, a **Cofnij** ratuje cię, jeśli kiedyś trafisz na minę."}},"net":{"step1":{"text":"Każdy kafelek niesie kawałek przewodu, a cała sieć została losowo poobracana. Obracaj kafelki, aż wszystkie dziewięć zawiśnie na kafelku oznaczonym pośrodku: **niebieskie** przewody są już pod napięciem, szare nie."},"step2":{"text":"Lewy dolny kafelek celuje przewodem prosto w ścianę. **Kliknij lewym przyciskiem** ten kafelek, aby obrócić go o ćwierć obrotu w lewo, tak by przewód sięgnął sąsiada po prawej."},"step3":{"text":"**Kliknięcie prawym przyciskiem** obraca kafelek w drugą stronę. Obróć prawy dolny kafelek raz w prawo, a jego przewód skieruje się w lewo."},"step4":{"text":"Środkowy kafelek ma przewody ze wszystkich czterech stron, więc nie może być źle ustawiony. **Kliknij go środkowym przyciskiem** albo włącz **kłódkę** obok Cofnij i kliknij go, aby go zablokować: zablokowany kafelek jest zacieniowany i nie daje się obrócić.","textTouch":"Środkowy kafelek ma przewody ze wszystkich czterech stron, więc nie może być źle ustawiony. Włącz **kłódkę** obok Cofnij i stuknij kafelek, aby go zablokować: zablokowany kafelek jest zacieniowany i nie daje się obrócić."},"step5":{"text":"Został jeden kafelek. Wyłącz **kłódkę** i **kliknij lewym przyciskiem** prawy górny narożnik, aby przekręcić jego przewód na lewo i rozświetlić całą sieć.","textTouch":"Został jeden kafelek. Wyłącz **kłódkę** i stuknij prawy górny narożnik, aby przekręcić jego przewód na lewo i rozświetlić całą sieć."},"step6":{"text":"Wszystkie dziewięć kafelków jest pod napięciem. **Cofnij** przechodzi wstecz przez twoje obroty; na klawiaturze strzałki przesuwają kursor, a **A**, **D** i **F** obracają kafelek pod nim.","textTouch":"Wszystkie dziewięć kafelków jest pod napięciem. **Cofnij** przechodzi wstecz przez twoje obroty, zablokowanie pewnego kafelka chroni go przed przypadkowym stuknięciem, a **Zamieszaj** obraca na nowo każdy niezablokowany kafelek."}},"netslide":{"step1":{"text":"Każdy kawałek przewodu musi na koniec łączyć się ze źródłem zasilania. Niebieskie przewody są pod napięciem, szare, ołówkowe nie."},"step2":{"text":"Źródło jest na środkowym kafelku. Ten kafelek nigdy się nie rusza, więc środkowy wiersz i kolumna nie mają strzałek — cała reszta się przesuwa."},"step3":{"text":"Kliknij strzałkę na **lewo od dolnego wiersza**, aby przesunąć ten wiersz o krok w lewo; przewód, który spadnie, pojawi się z powrotem po prawej."},"step4":{"text":"Dolny wiersz już się łączy, ale wciąż jest szary: nic nie wiąże go w górę ze źródłem."},"step5":{"text":"**Kliknij prawym przyciskiem** strzałkę **nad trzecią kolumną**. Kliknięcie prawym przyciskiem odwraca strzałkę, więc ta kolumna przesunie się w dół i ostatnie przewody się zapalą."},"step6":{"text":"Wszystko pod napięciem! **Rozwiąż** pokazuje odpowiedź, gdy utkniesz, a w menu **Rodzaj** są zawijane siatki, w których przewody wychodzą jedną krawędzią i wracają drugą."}},"pattern":{"step1":{"text":"Liczby obok każdego wiersza i kolumny to długości jego czarnych serii, po kolei. Ustal, które pola są czarne, i zamaluj je."},"step2":{"text":"**Trzecia kolumna** ma 1 2: jedno czarne, przerwa, potem dwa czarne. W czterech polach mieści się to tylko na jeden sposób, z parą na dole. **Przeciągnij** w dół po nich."},"step3":{"text":"Pole nad parą musi więc być przerwą. **Kliknij prawym przyciskiem**, aby postawić tam kropkę — tak oznacza się pole, które na pewno jest białe."},"step4":{"text":"A górne pole tej kolumny to samotne czarne ze wskazówki. **Kliknij** je."},"step5":{"text":"**Ostatnia kolumna** ma 3. Gdziekolwiek seria trzech stanie w czterech polach, zawsze pokrywa dwa środkowe, więc **przeciągnij** w dół po nich."},"step6":{"text":"Wskazówka szarzeje, gdy jej linia jest gotowa. Rozwiązuj dalej w ten sposób albo niech **Rozwiąż** dokończy tę planszę; kliknięcie środkowym przyciskiem przywraca pole do stanu nieznanego."}},"pearl":{"step1":{"text":"Narysuj jedną zamkniętą pętlę od środka pola do środka pola. Nie musi odwiedzić każdego pola, ale musi przejść przez każdą perłę."},"step2":{"text":"**Biała perła** oznacza, że pętla biegnie przez nią prosto. W górnym wierszu jedyna prosta to ta na boki, więc **przeciągnij** od pola na lewo od tej perły do pola po jej prawej."},"step3":{"text":"Ta perła ma już oba swoje odcinki, więc nic więcej nie może z niej wyjść. **Kliknij prawym przyciskiem** krawędź pod nią, aby skreślić tamtą stronę."},"step4":{"text":"**Czarna perła** skręca, a pętla biegnie potem prosto przez pole po każdej jej stronie. Ta przy **lewej krawędzi** nie może skręcić w dół — wymagałoby to prostej przez lewy dolny narożnik — więc **kliknij** jej prawą krawędź."},"step5":{"text":"Zatem pole obok biegnie prosto dalej — i tak samo biała perła za nim. **Przeciągnij** od tego pola aż do czwartej kolumny."},"step6":{"text":"Rozpracowuj dalej od pereł; perła dostaje czerwoną aureolę w chwili, gdy jej reguła zostaje złamana. **Rozwiąż** rysuje całą pętlę, jeśli chcesz ją zobaczyć."}},"pegs":{"step1":{"text":"Kołek przeskakuje sąsiada do pustego otworu za nim, a przeskoczony kołek znika. Wyczyść tę małą planszę do **jednego kołka**: trzy skoki."},"step2":{"text":"**Przeciągnij** kołek ze szczytu słupka w dół nad jego sąsiadem, do otworu na dole."},"step3":{"text":"Klikanie też działa. Kliknij **prawy kołek**, aby go podnieść, a potem kliknij otwór dwa pola na lewo od niego."},"step4":{"text":"Ostatni skok: przeciągnij kołek z **lewego dolnego rogu** nad jego sąsiadem do środka."},"step5":{"text":"Jeden kołek — rozwiązane. **Cofnij** wycofuje skok, gdy zapędzisz się w ślepy zaułek, a strzałki też działają: Enter podnosi kołek, a strzałka go popycha.","textTouch":"Jeden kołek — rozwiązane. **Cofnij** wycofuje skok, ilekroć zapędzisz się w ślepy zaułek, i to tak daleko wstecz, jak zechcesz."}},"range":{"step1":{"text":"Zamaluj pola na czarno tak, aby każda liczba zliczała dokładnie te białe pola, które widzi jej własne pole: siebie plus każde pole w linii w górę, w dół, w lewo i w prawo, aż zatrzyma je czarne pole albo krawędź."},"step2":{"text":"**6** widzi teraz sześć pól — cały swój wiersz plus dwa pod sobą. Więc nic w tym wierszu ani w tej kolumnie nie może być czarne."},"step3":{"text":"**2** może widzieć tylko siebie i jedno pole więcej, a pole nad nią musi zostać białe dla 6. Więc **kliknij** pole po jej lewej, aby zamalować je na czarno."},"step4":{"text":"Zostaje prawe górne pole jako to jedno białe, które 2 wciąż widzi. **Kliknij prawym przyciskiem**, aby wpisać ołówkiem kropkę, którą oznacza się pole na pewno białe."},"step5":{"text":"**3** widzi już siebie i dwa pola po swojej lewej, więc pole po jej prawej musi być czarne. **Kliknij** je."},"step6":{"text":"Skończone dwoma czarnymi polami — kropki to tylko notatki. **H** wypełnia jedno pole wynikające z reszty, a **Rozwiąż** wykropkowuje całą siatkę.","textTouch":"Skończone dwoma czarnymi polami — kropki to tylko notatki. **Rozwiąż** wykropkowuje całą siatkę, gdy wolisz zobaczyć odpowiedź."}},"rect":{"step1":{"text":"Potnij tę siatkę na prostokąty tak, aby każdy prostokąt zawierał dokładnie jedną liczbę, a ta liczba mówiła, ile pól prostokąt pokrywa."},"step2":{"text":"Prostokąt może zawierać tylko jedną liczbę, a **3** siedzi tuż pod **4** — więc 4 musi zabrać cały górny wiersz. **Przeciągnij** od 4 aż do prawego końca tego wiersza."},"step3":{"text":"Kliknięcie pojedynczej linii siatki dodaje lub usuwa tylko tę jedną krawędź. **Kliknij** linię po prawej stronie **3**."},"step4":{"text":"9 może być tylko blokiem 3×3, a zostało na niego jedno miejsce. **Przeciągnij** przez podświetlony blok, od jego lewego górnego pola do prawego dolnego rogu: to zamyka też 3."},"step5":{"text":"Każde pole jest w prostokącie właściwego rozmiaru. **Przeciągnięcie prawym przyciskiem** wymazuje linie wewnątrz obszaru, ale zostawia jego obrys, a **Cofnij** cofa ostatni ruch."}},"samegame":{"step1":{"text":"Wyczyść planszę, zabierając grupy dwóch lub więcej stykających się pól w tym samym kolorze. Grupa _n_ pól daje (_n_ − 2)² punktów, więc liczą się te duże."},"step2":{"text":"Kliknij dowolne z czterech **czerwonych** pól u góry. Pierwsze kliknięcie tylko zaznacza grupę: jaśnieje i dostaje gruby obrys."},"step3":{"text":"Kliknij zaznaczoną grupę ponownie, aby zdjąć ją z planszy i zdobyć cztery punkty. Pola nad luką opadają w nią, a pusta kolumna ściąga ku sobie sąsiadów."},"step4":{"text":"To **zielone** pole stoi samo. Nic obok niego nie ma jego koloru, więc nigdy nie da się go zaznaczyć — musi poczekać, aż plansza przesunie mu partnera pod bok."},"step5":{"text":"Teraz **niebieska para** podświetlona tutaj. Kliknij dowolne z tych dwóch pól, aby zaznaczyć oba."},"step6":{"text":"Rozmyślasz się? **Kliknij prawym przyciskiem** zaznaczenie, aby je anulować — nic nie znika, dopóki nie klikniesz po raz drugi."},"step7":{"text":"I to cała gra. Każdą planszę da się wyczyścić, więc graj dalej — **Cofnij** ratuje sytuację, gdy zostawisz samotne pole, a przycisku Rozwiąż tu nie ma."}},"signpost":{"step1":{"text":"Na każdym polu jest strzałka. Połącz wszystkie sześć w jeden łańcuch ponumerowany **od 1 do 6**, w którym po każdym polu następuje pole leżące gdzieś wzdłuż jego strzałki."},"step2":{"text":"**1** wskazuje na wschód. **Przeciągnij** od niej na pole po jej prawej, aby zrobić z niego 2."},"step3":{"text":"**3** doczepiła się sama, jak zawsze robią liczby, które po sobie następują i wskazują we właściwą stronę. Teraz **przeciągnij** prawe dolne pole na pole po jego lewej."},"step4":{"text":"Żadne z tych dwóch nie ma jeszcze numeru, więc para jest oznaczona **a** i **a+1**. **Kliknij prawym przyciskiem** środkowe pole dolnego wiersza, aby je znów rozdzielić."},"step5":{"text":"Prawdziwe liczby są lepsze: **przeciągnij** **3** na pole pod nią, które stanie się 4."},"step6":{"text":"Ostatnie ogniwo: **przeciągnij** tę 4 na pole po jej lewej. Stanie się 5, a 6 zamknie ścieżkę sama."},"step7":{"text":"Rozwiązane. **Przeciągnięcie prawym przyciskiem** łączy w drugą stronę, od pola z powrotem do poprzedniego, a **Rozwiąż** wykłada całą ścieżkę."}},"singles":{"step1":{"text":"Zaczerniaj pola, aż żadna liczba nie będzie się powtarzać wśród białych pól któregokolwiek wiersza czy kolumny. Dwa czarne pola nigdy nie mogą mieć wspólnej krawędzi, a białe pola muszą pozostać jednym spójnym obszarem."},"step2":{"text":"Dwie **4** w tym wierszu mają między sobą jedno pole. Zaczernienie go zostawiłoby obie 4 białe, więc samo musi być białe — **kliknij prawym przyciskiem**, aby je zakółkować."},"step3":{"text":"Ta zakółkowana **3** jest biała na zawsze, a w jej kolumnie jest u góry jeszcze jedna 3. **Kliknij lewym przyciskiem** tę górną, aby ją zaczernić."},"step4":{"text":"Czarne pola nigdy się nie stykają, więc **4** tuż po jej prawej zostaje biała. **Kliknij lewym przyciskiem** drugą 4 w tej ostatniej kolumnie."},"step5":{"text":"Tak samo: **2** prosto nad twoim nowym czarnym polem jest biała, a w jej wierszu jest jeszcze jedna 2 na lewym skraju. **Kliknij lewym przyciskiem** tamtą."},"step6":{"text":"Zostało jedno. **3** nad tym czarnym polem jest biała, więc druga 3 u dołu kolumny musi zniknąć. **Kliknij lewym przyciskiem** tę drugą 3."},"step7":{"text":"Rozwiązane, a białe pola wciąż są ze sobą połączone. Kółka to tylko notatki, a **Cofnij** cofa kolejne ruchy."}},"sixteen":{"step1":{"text":"Ustaw kafelki po kolei, **od 1 do 9**, czytając od lewej do prawej. Strzałki dookoła brzegu przesuwają cały wiersz lub kolumnę o krok, a to, co spadnie, wraca z drugiej strony."},"step2":{"text":"Kliknij strzałkę **nad drugą kolumną**, aby przesunąć tę kolumnę o krok w górę; to domknie środkowy wiersz."},"step3":{"text":"Teraz dolny wiersz musi przesunąć się w prawo. **Kliknij prawym przyciskiem** strzałkę na **lewo od dolnego wiersza**: kliknięcie prawym przyciskiem posyła linię w przeciwną stronę."},"step4":{"text":"Ostatni ruch: kliknij strzałkę na **lewo od górnego wiersza**, aby przesunąć go w lewo i dokończyć siatkę."},"step5":{"text":"Po kolei! **Rodzaj** w menu pauzy oferuje większe siatki, a jego **Własne…** potrafi wymieszać siatkę zadaną liczbą ruchów tasujących, które musisz odkręcić."}},"slant":{"step1":{"text":"Narysuj jedną przekątną w każdym polu. Zakółkowana liczba zlicza linie, które dotykają jej narożnika, a linie nigdy nie mogą zamknąć pętli."},"step2":{"text":"**0** w lewym górnym rogu nie chce, żeby coś go dotykało, więc jego jedyne pole musi przechylić się w drugą stronę. **Kliknij prawym przyciskiem** to pole, aby narysować `/`."},"step3":{"text":"**4** potrzebuje linii ze wszystkich czterech pól dookoła. **Kliknij lewym przyciskiem** to nad nią i na lewo — kliknięcie lewym przyciskiem rysuje `\\\\`."},"step4":{"text":"Pole nad **4** i na prawo musi zamiast tego pochylić się w lewo w dół. **Kliknij prawym przyciskiem**, aby dostać `/`."},"step5":{"text":"**1** przy lewej krawędzi ma już swoją jedyną linię, z pola pod nią. Więc pole powyżej musi przechylić się w drugą stronę: **kliknij lewym przyciskiem**, aby dostać `\\\\`."},"step6":{"text":"Rozwiązuj dalej tak samo. Liczba, której nie da się już spełnić, robi się czerwona, tak samo jak każda linia złapana w zamkniętą pętlę. **Rozwiąż** w menu pauzy wypełnia resztę."}},"solo":{"step1":{"text":"Każdy wiersz, każda kolumna i każdy obrysowany **blok 2×2** musi zawierać 1, 2, 3 i 4 dokładnie raz. W tej małej siatce brakuje trzech pól."},"step2":{"text":"Ten **blok** ma już 2, 3 i 4, więc jego puste pole może być tylko **1**. Kliknij to pole i naciśnij klawisz **1**.","textTouch":"Ten **blok** ma już 2, 3 i 4, więc jego puste pole może być tylko **1**. Stuknij to pole, a potem stuknij **1** na klawiaturze."},"step3":{"text":"Nie masz pewności co do pola? **Kliknij prawym przyciskiem** to puste i naciśnij **2**, aby zanotować tę cyfrę ołówkiem.","textTouch":"Nie masz pewności co do pola? Stuknij to puste, włącz **✎** na klawiaturze i stuknij **2**, aby zanotować tę cyfrę ołówkiem."},"step4":{"text":"Jego wiersz ma już 3, 4 i 1, więc notatka była trafna. **Kliknij lewym przyciskiem** to samo pole i naciśnij **2**, aby wpisać odpowiedź.","textTouch":"Jego wiersz ma już 3, 4 i 1, więc notatka była trafna. Pole jest wciąż wybrane, więc stuknij **✎**, aby wyłączyć notatki, a potem **2**, aby wpisać odpowiedź."},"step5":{"text":"Zostało jedno pole. Jego wiersz ma już 4, 3 i 1 — kliknij je i naciśnij brakującą cyfrę.","textTouch":"Zostało jedno pole. Jego wiersz ma już 4, 3 i 1 — stuknij je, a potem stuknij brakującą cyfrę na klawiaturze."},"step6":{"text":"Rozwiązane! **Cofnij** wycofuje błędną cyfrę, a klawisz **M** wpisuje ołówkiem każdą możliwość we wszystkie puste pola naraz.","textTouch":"Rozwiązane! **Cofnij** wycofuje błędną cyfrę, a **Notatki** w menu pauzy wpisują ołówkiem każdą możliwość we wszystkie puste pola naraz."}},"tents":{"step1":{"text":"Rozbij jeden namiot obok każdego drzewa — nad nim, pod nim, po lewej lub po prawej, nigdy po przekątnej. Żadne dwa namioty nie mogą się stykać, a liczby zliczają namioty w każdym wierszu i kolumnie."},"step2":{"text":"**0** na końcu drugiego wiersza znaczy, że w tym wierszu nie ma namiotów. **Kliknij prawym przyciskiem** pole obok drzewa, aby oznaczyć je jako trawę."},"step3":{"text":"Trzecia kolumna też jest pusta. **Przeciągnij prawym przyciskiem** od jej górnego pola w dół do trzeciego wiersza, aby zatrawić wszystkie trzy naraz."},"step4":{"text":"Drzewo w prawym dolnym rogu stoi w samym narożniku, a obok ma drugie drzewo, więc jego jedyny wolny sąsiad jest nad nim. **Kliknij lewym przyciskiem** to pole, aby rozbić namiot."},"step5":{"text":"Ten namiot zapełnia trzeci wiersz, więc drzewo przy lewej krawędzi też nie może rozbić obozu pod sobą. **Kliknij lewym przyciskiem** lewe górne pole."},"step6":{"text":"Jedno drzewo wciąż nie ma namiotu, a wolne jest tylko pole po jego lewej. **Kliknij lewym przyciskiem**, aby dokończyć obozowisko."},"step7":{"text":"Rozwiązane! Ponowne kliknięcie namiotu lub znaku trawy usuwa go, strzałki z Enterem i spacją robią to samo, a **Cofnij** cofa krok.","textTouch":"Rozwiązane! Ponowne stuknięcie namiotu lub znaku trawy usuwa go, a **Cofnij** cofa krok."}},"towers":{"step1":{"text":"Każdy wiersz i każda kolumna mieści po jednej wieży każdej wysokości, od 1 do 4. Liczba przy brzegu zlicza wieże, które **widać** z tego miejsca: wyższa wieża zasłania każdą niższą za sobą."},"step2":{"text":"**1** po prawej stronie górnego wiersza znaczy, że z tej strony widać tylko jedną wieżę, więc najbliższa musi być najwyższa. Kliknij to pole i naciśnij **4**.","textTouch":"**1** po prawej stronie górnego wiersza znaczy, że z tej strony widać tylko jedną wieżę, więc najbliższa musi być najwyższa. Stuknij to pole, a potem stuknij **4** na klawiaturze."},"step3":{"text":"Zamiast odpowiadać, możesz notować możliwości. **Kliknij prawym przyciskiem** puste pole na lewym końcu górnego wiersza i naciśnij **1**.","textTouch":"Zamiast odpowiadać, możesz notować możliwości. Stuknij puste pole na lewym końcu górnego wiersza, włącz **✎** na klawiaturze i stuknij **1**."},"step4":{"text":"**4** po lewej stronie wiersza mówi, że widać wszystkie cztery wieże, więc od tego końca wspinają się 1-2-3-4. **Kliknij lewym przyciskiem** to pole i naciśnij **1**, aby na nie odpowiedzieć.","textTouch":"**4** po lewej stronie wiersza mówi, że widać wszystkie cztery wieże, więc od tego końca wspinają się 1-2-3-4. Pole jest wciąż wybrane, więc stuknij **✎**, aby wyłączyć notatki, a potem **1**, aby na nie odpowiedzieć."},"step5":{"text":"Zostało jedno pole, a **1** przy jego wierszu znów stawia najwyższą wieżę najbliżej. Kliknij je i naciśnij **4**.","textTouch":"Zostało jedno pole, a **1** przy jego wierszu znów stawia najwyższą wieżę najbliżej. Stuknij je, a potem stuknij **4** na klawiaturze."},"step6":{"text":"Rozwiązane! **Backspace** opróżnia pole z błędną cyfrą, a **Rozwiąż** w menu pauzy kończy łamigłówkę, która cię pokonała.","textTouch":"Rozwiązane! **⌫** na klawiaturze opróżnia pole z błędną cyfrą. W menu pauzy **Notatki** wpisują ołówkiem każdą możliwość, a **Rozwiąż** kończy łamigłówkę, która cię pokonała."}},"tracks":{"step1":{"text":"Jeden tor biegnie od wjazdu po lewej do wyjazdu na dole, a każde pole, przez które przechodzi, ma dokładnie dwie szyny. Liczby mówią, przez ile pól danej kolumny lub wiersza przechodzi tor."},"step2":{"text":"Kawałek wjazdu wchodzi już w **lewe górne pole**, a górny i lewy bok tego pola to krawędź siatki. Więc jego druga szyna musi iść w prawo: **kliknij** tuż na prawo od jego środka."},"step3":{"text":"**Lewa kolumna** ma liczbę **2**, a wjazd zajmuje już oba pola, więc przez dolną jej połowę nic nie przechodzi. **Kliknij prawym przyciskiem** środek pola, aby je skreślić — przeciągnięcie prawym przyciskiem skreśla całą serię."},"step4":{"text":"**Prawa kolumna** ma liczbę **4**, więc linia odwiedza każde jej pole, a pola na jej górze i dole mogą skręcić tylko do środka. **Przeciągnij** od prawego górnego pola aż w dół do prawego dolnego."},"step5":{"text":"**Dolny wiersz** potrzebuje trzech pól, a lewa kolumna jest już gotowa, więc prawy dolny narożnik leży na linii. Nie może opuścić siatki, więc skręca w lewo i w górę: **kliknij** jego lewy bok."},"step6":{"text":"Liczby szarzeją, gdy ich linia się zgadza, i czerwienieją, gdy nie da się ich już spełnić. Prowadź tor dalej od luźnych końców albo niech **Rozwiąż** go dokończy."}},"twiddle":{"step1":{"text":"Ustaw liczby z powrotem po kolei, **od 1 do 9**. Jeden ruch obraca kwadratowy blok czterech kafelków o ćwierć obrotu; tę planszę kończą trzy obroty."},"step2":{"text":"Kliknij w środku **czterech lewych górnych kafelków**. Kliknięcie lewym przyciskiem obraca ten blok w lewo, co ustawia u góry 1, 2, 3."},"step3":{"text":"**Kliknij prawym przyciskiem** środek **czterech prawych dolnych kafelków**, aby obrócić ten blok w prawo."},"step4":{"text":"Zakończ kliknięciem lewym przyciskiem w środku **czterech lewych dolnych kafelków**."},"step5":{"text":"Gotowe! W menu **Rodzaj** są większe bloki i tryb *z orientacją*, w którym każdy kafelek musi też stanąć właściwą stroną do góry."}},"undead":{"step1":{"text":"Wypełnij pięć pustych pól duchami, wampirami i zombie — licznik u góry mówi, ile ma być każdego rodzaju. Każda liczba zlicza potwory widziane wzdłuż tej linii, a lustra zaginają twoje spojrzenie."},"step2":{"text":"Patrząc od **lewej strony górnego wiersza** nie widzisz nic; lustro wygina tę samą linię do góry, gdzie **1** widzi jednego potwora. Tylko duch chowa się na wprost, a pokazuje się w lustrze. **Kliknij** to pole."},"step3":{"text":"**4** w lewym dolnym rogu zygzakuje przez lustra obok trzech pól i widzi każde z nich. Wampiry znikają w lustrze, więc jedynym wampirem musi być środkowe pole lewej kolumny. **Kliknij** je."},"step4":{"text":"Kliknięcie tylko przechodzi po kolei przez potwory. **Naciśnij zamiast tego V**: G, V i Z wrzucają ducha, wampira albo zombie prosto w podświetlone pole.","textTouch":"Stuknięcie tylko przechodzi po kolei przez potwory. Zamiast tego stuknij **Wampir** na klawiaturze: ten potwór trafi od razu do podświetlonego pola."},"step5":{"text":"**Środkowy wiersz** to prosty widok bez luster, a obie **1** widzą jednego potwora — wampira. Więc jego dwaj sąsiedzi muszą być duchami. **Kliknij** środkowe pole."},"step6":{"text":"**Kliknięcie prawym przyciskiem** wpisuje małą notatkę zamiast czegokolwiek stawiać. Spróbuj na prawym polu tego wiersza; każde kliknięcie prawym przyciskiem dokłada kolejnego potwora."},"step7":{"text":"Zostały dwa pola: to z notatką to trzeci duch, a ostatnie to zombie. Liczby szarzeją, gdy ich linia jest już ustalona; **Rozwiąż** kończy ten labirynt, jeśli wolisz popatrzeć."}},"unequal":{"step1":{"text":"Każdy wiersz i każda kolumna potrzebuje 1, 2, 3 i 4, każdej cyfry raz — a każdy znak między dwoma polami musi wskazywać **mniejsze** z pary."},"step2":{"text":"Znak wskazuje tutaj w prawo, więc w **lewym** polu jest większa liczba. Ten wiersz potrzebuje jeszcze 2 i 3: kliknij lewe pole i naciśnij **3**.","textTouch":"Znak wskazuje tutaj w prawo, więc w **lewym** polu jest większa liczba. Ten wiersz potrzebuje jeszcze 2 i 3: stuknij lewe pole, a potem stuknij **3** na klawiaturze."},"step3":{"text":"Pole, na które wskazuje znak, dostaje mniejszą liczbę. Kliknij je i naciśnij **2**.","textTouch":"Pole, na które wskazuje znak, dostaje mniejszą liczbę. Stuknij je, a potem stuknij **2** na klawiaturze."},"step4":{"text":"W jego kolumnie jest już 3, więc w tym polu może być tylko 2. **Kliknij prawym przyciskiem** to pole i naciśnij **2**, aby zanotować to ołówkiem.","textTouch":"W jego kolumnie jest już 3, więc w tym polu może być tylko 2. Stuknij je, włącz **✎** na klawiaturze i stuknij **2**, aby zanotować to ołówkiem."},"step5":{"text":"Notatka to nie odpowiedź. **Kliknij lewym przyciskiem** to samo pole i naciśnij **2**, aby wpisać cyfrę na stałe.","textTouch":"Notatka to nie odpowiedź. Pole jest wciąż wybrane, więc stuknij **✎**, aby wyłączyć notatki, a potem **2**, aby wpisać cyfrę na stałe."},"step6":{"text":"Zostało jedno pole. Kliknij je i naciśnij **3**, aby dokończyć kwadrat.","textTouch":"Zostało jedno pole. Stuknij je, a potem stuknij **3** na klawiaturze, aby dokończyć kwadrat."},"step7":{"text":"Rozwiązane! **Cofnij** wycofuje cyfrę, a **Rozwiąż** wpisuje odpowiedź, gdy łamigłówka cię pokona.","textTouch":"Rozwiązane! **Cofnij** wycofuje cyfrę, **Notatki** i **Podpowiedź** wpisują ołówkiem możliwości, a **Rozwiąż** wpisuje odpowiedź, gdy łamigłówka cię pokona."}},"unruly":{"step1":{"text":"Pokoloruj każde pole na czarno lub biało. Każdy wiersz i każda kolumna potrzebuje **po trzy każdego koloru**, a żaden kolor nie może wystąpić **trzy razy z rzędu**. Trzy pola są wciąż nierozstrzygnięte."},"step2":{"text":"Ten wiersz ma już swoje trzy białe pola, więc to nierozstrzygnięte musi być czarne. **Kliknij lewym przyciskiem**: kliknięcie lewym przyciskiem maluje na czarno."},"step3":{"text":"Ten wiersz ma już trzy czarne, więc jego nierozstrzygnięte pole jest białe. **Kliknij prawym przyciskiem** — kliknięcie prawym przyciskiem idzie w drugą stronę i najpierw maluje na biało."},"step4":{"text":"Ostatnie nierozstrzygnięte pole ma po swojej lewej dwa czarne, a trzecie z rzędu jest zabronione. **Kliknij prawym przyciskiem**, aby pomalować je na biało i dokończyć siatkę."},"step5":{"text":"Rozwiązane! Ponowne kliknięcie pokolorowanego pola przełącza je na drugi kolor, a potem z powrotem na nierozstrzygnięte, a **Cofnij** cofa kolejne ruchy."}},"untangle":{"step1":{"text":"Sześć punktów leży na okręgu, połączonych ośmioma liniami. Dwie ich pary się krzyżują — to te czerwone. Przeciągaj punkty, aż nie zostanie żadna czerwień."},"step2":{"text":"Najpierw kliknij **Przyciąganie**, przycisk z siatką obok Cofnij (albo naciśnij **G**). To włącza siatkę przyciągania, więc upuszczony punkt ląduje na jednej z bladych kropek w środku pola."},"step3":{"text":"**Przeciągnij** punkt ze szczytu okręgu na puste pole w **lewym górnym rogu**.","textTouch":"**Przeciągnij** punkt ze szczytu okręgu w puste miejsce w **lewym górnym rogu** planszy. Nie musi wylądować dokładnie — chodzi tylko o to, żeby skrzyżowanie zniknęło."},"step4":{"text":"Zostało jedno skrzyżowanie, po prawej stronie. **Przeciągnij** najniższy punkt w pusty **prawy dolny róg**.","textTouch":"Zostało jedno skrzyżowanie, po prawej stronie. **Przeciągnij** najniższy punkt w pusty **prawy dolny róg** — ostatnia czerwona linia znika, gdy tylko zrobi się miejsce."},"step5":{"text":"Rozplątane. **Rozwiąż** rozprostowuje za ciebie każdy splot, a strzałki przenoszą kursor od punktu do punktu, przy czym Enter podnosi punkt i go upuszcza.","textTouch":"Rozplątane. Czerwone linie to te, które wciąż się krzyżują, więc przeciągaj dalej, aż nie zostanie żadna — albo pozwól **Rozwiąż** rozprostować splot za ciebie."}}}'),Fe={$locale:`pl`,$name:q,$dir:`ltr`,ui:J,touchPhrases:Y,messages:X,status:Z,games:Q,tutorials:$};export{g as A,ee as B,A as C,S as D,w as E,o as F,i as I,oe as L,f as M,u as N,b as O,c as P,ie as R,M as S,E as T,t as V,H as _,Ee as a,I as b,be as c,me as d,fe as f,W as g,se as h,Oe as i,m as j,v as k,ve as l,ce as m,Me as n,we as o,ue as p,Ae as r,Se as s,Pe as t,ge as u,B as v,O as w,P as x,R as y,ne as z};
//# sourceMappingURL=i18n-pl-Ffm8Gyyf.js.map