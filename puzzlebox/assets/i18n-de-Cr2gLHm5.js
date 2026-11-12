import{t as e}from"./index-DIYwYEVR.js";var t=e({default:()=>n}),n="## Allgemeine Bedienung\n\n- **Neu** startet ein neues Rätsel, und **Neustart** stellt dieses hier auf den\n  Anfang zurück; sowohl **Rückgängig** als auch **Wiederherstellen** gehen Schritt für\n  Schritt durch deine Züge, und auch ein Neustart lässt sich rückgängig machen.\n- **Lösen** zeigt die Antwort, wo ein Rätsel eine anbietet. Es fügt einen Schritt hinzu,\n  den du rückgängig machen kannst.\n- **Rechtsklicken** ist in den meisten Rätseln die zweite Aktion – markieren, beflaggen\n  oder andersherum drehen. **Mittelklicken** ist, wo ein Rätsel es benutzt, die dritte.\n- **Typ** wechselt zwischen festen Größen und Schwierigkeiten; **Anpassen…** lässt dich\n  alles selbst einstellen.\n- **Teilen** zeigt Codes, die du teilen kannst, damit jemand anderes genau dieses Rätsel\n  spielen kann.\n\n### Tastatur (Keyboard)\n\n- **Neues Spiel**: `N` · **Rückgängig**: `U` oder `Ctrl+Z` · **Wiederherstellen**: `R`\n  oder `Ctrl+Y`\n- **Lösen**: `Ctrl+S` (wo es das gibt). **Diese Hilfe**: `?`, und `Esc` schließt sie\n  wieder. **Pause**: `Esc`.\n- In den meisten Rätseln bewegen die Pfeiltasten einen Zeiger über das Brett, `Enter`\n  wirkt darauf wie ein Linksklick und `Space` wie ein Rechtsklick.\n- In den Menüs springen die Pfeiltasten von Karte zu Karte und von Knopf zu Knopf,\n  `Enter` wählt aus und `Esc` geht zurück.\n- Ein Controller geht auch: Das Steuerkreuz bewegt, `A` wählt aus oder klickt, `X` ist der\n  Rechtsklick, `B` geht zurück, `Start` pausiert, `LB` und `RB` machen rückgängig und\n  wiederholen, und `Y` gibt einen Tipp.\n  In Rätseln, in die du Zahlen schreibst, bringt dich `RT` zu den Tasten auf dem Bildschirm und zurück.\n",ee=e({default:()=>te}),te=`## Auf einem Touchscreen

- **Tippen** für die Hauptaktion und **langes Drücken** für die zweite. Hat ein Rätsel
  eine dritte, tippe sie mit **zwei Fingern** an.
- Der erste runde Knopf in der Werkzeugleiste (ein Punkt in einem Quadrat) vertauscht die
  beiden, sodass die Aktion, die du am meisten benutzt, immer nur ein Tippen entfernt ist;
  solange sie vertauscht sind, leuchtet darauf ein Fähnchen. Langes Drücken macht dann die
  andere.
- **Zieh zwei Finger auseinander**, um die Felder eines großen Gitters zu vergrößern, und
  **wische mit zwei Fingern**, um dich darauf zu bewegen. Schieb die Finger wieder
  zusammen, um das ganze Rätsel zu sehen. Unter **Pause** gibt es dafür auch die Knöpfe
  **−** und **+**.
- **Pause** enthält den Rest der Steuerung: die Rätselart, neues Rätsel, Neustart, Lösen, Teilen
  und die Einstellungen für Ton und Sprache. Solange das Menü offen ist, steht die Uhr still.
`,ne=e({default:()=>re}),re=`# Blackbox

In einer schattierten Box sind ein paar Kugeln versteckt. Rundherum läuft ein Rahmen aus
Laserports. Schieße von einem beliebigen Port einen Laser in die Box und sieh zu, was
wieder herauskommt: Leite aus den Ergebnissen ab, wo die Kugeln liegen müssen, markiere
sie und lass deine Antwort dann prüfen.

Ein Strahl läuft geradeaus, solange ihm keine Kugel im Weg liegt:

- Eine Kugel direkt voraus **schluckt** den Strahl. Der Port zeigt **H** (ein Treffer).
- Eine Kugel schräg voraus **lenkt** den Strahl um 90° von sich weg. Kugeln auf beiden
  Diagonalen schicken ihn geradewegs zurück. Ablenkungen können aufeinanderfolgen, ein
  Strahl kann also eine Weile umherirren, bevor er wieder hinausfindet.
- Ein Strahl, der aus dem Port wieder herauskommt, in den er hineinging, ist
  **reflektiert** und wird als **R** angezeigt. Ebenso einer, der schon abgelenkt würde,
  bevor er die Box überhaupt betritt, weil schräg neben dem Eingang eine Kugel liegt.
- Sonst kommt der Strahl woanders heraus, und die beiden Ports bekommen dieselbe **Zahl**
  (und dieselbe Farbe), sodass du siehst, wo jeder Schuss hinein- und wieder herausging.

Sobald du die richtige Anzahl Kugeln markiert hast, erscheint oben links ein grüner Knopf.
Klicke ihn an, um zu prüfen. Deine Anordnung gilt als richtig, wenn kein Laser sie von der
des Computers unterscheiden kann – bei mehreren Kugeln kann es mehr als eine Anordnung
geben, die sich genau gleich verhält, und jede davon gewinnt.

Eine falsche Anordnung beendet das Spiel und zeigt die Antwort, prüfe also erst, wenn du
sicher bist: gefundene Kugeln sind schwarz, falsche Markierungen werden rot
durchgestrichen, übersehene Kugeln sind rot, jeder abgefeuerte Laser, den deine Anordnung
falsch wiedergibt, bekommt einen Ring, und Laser, die du nie abgefeuert hast, die aber den
Unterschied verraten hätten, werden jetzt abgefeuert und rot geschrieben. Rückgängig
bringt dich zurück, damit du weiterprobieren kannst. Lösen gibt auf und setzt die echten
Kugeln ein.

## Bedienung

Die Statuszeile zählt die Kugeln, die du markiert hast, und die Laser, die du abgefeuert
hast, und nach einer Prüfung sagt sie, wie viele deiner Kugeln falsch waren und wie viele
du übersehen hast.

### Maus und Touchscreen

- **Klicke auf einen Port**, um von dort einen Laser abzufeuern. Klicke auf einen Port,
  aus dem schon geschossen wurde, um beide Enden dieses Strahls aufleuchten zu lassen;
  klicke noch einmal darauf oder irgendwo anders hin, um das Licht wieder auszumachen.
- **Klicke in die Box**, um dort eine Kugel zu markieren; klicke noch einmal, um die
  Markierung wieder zu entfernen.
- **Rechtsklicke auf ein Feld**, um es zu **sperren**, damit du es nicht aus Versehen
  änderst; rechtsklicke noch einmal, um es freizugeben. Rechtsklicke auf einen Port, und
  die ganze Zeile oder Spalte daneben wird gesperrt oder freigegeben.
- **Klicke auf den Knopf in der Ecke**, um deine Markierungen prüfen zu lassen.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger über die Box und ihre Ports.
- **Enter** tut dasselbe wie linksklicken: abfeuern, markieren oder prüfen, wenn der
  Zeiger auf dem Knopf steht.
- **Leertaste** tut dasselbe wie rechtsklicken und sperrt oder gibt frei.

## Einstellungen

- **Breite** und **Höhe** der Box. Jede Zeile und jede Spalte hat an beiden Enden einen
  Laserport.
- **Anzahl Kugeln**: wie viele Kugeln versteckt sind. Gib eine einzelne Zahl an oder einen
  Bereich wie \`3-6\`, damit der Computer wählt; dann musst du auch die Anzahl herausfinden,
  und der Prüfknopf erscheint bei jeder Zahl von Markierungen innerhalb des Bereichs.
`,ie=e({default:()=>ae}),ae=`# Brücken

Über das Wasser verstreut liegen Inseln, jede mit einer Zahl darauf. Verbinde sie mit
Brücken, sodass:

- jede Brücke schnurgerade waagerecht oder senkrecht zwischen zwei Inseln verläuft;
- die Zahl auf einer Insel genau angibt, wie viele Brücken sie berühren;
- zwei Inseln durch parallele Brücken verbunden sein dürfen, aber durch höchstens zwei
  (diese Grenze kannst du unter **Anpassen…** ändern);
- keine Brücke eine andere kreuzt;
- jede Insel von jeder anderen aus über Brücken zu erreichen ist.

Fehler leuchten rot: eine Insel mit zu vielen Brücken, eine Insel, die nicht mehr genug
bekommen kann (ihre übrigen Nachbarn sind voll, oder die einzigen Wege sind durch andere
Brücken oder deine eigenen „hier keine Brücke“-Markierungen versperrt), und eine Gruppe
von Inseln, die schon fertig, aber vom Rest abgeschnitten ist. Sind Schleifen verboten,
werden auch Brücken rot, die eine Schleife bilden.

## Bedienung

**Lösen** trägt die Lösung ein und entfernt dabei alle Brücken, die nicht dazugehören.

### Maus und Touchscreen

- **Ziehe** von einer Insel in Richtung eines Nachbarn, um eine Brücke dazwischen zu
  legen. Du musst nur weit genug ziehen, damit die Richtung klar ist; die Brücke rastet an
  der nächsten Insel in dieser Richtung ein. Zieh noch einmal für eine zweite parallele
  Brücke; ein weiteres Ziehen, wenn die Grenze erreicht ist, nimmt sie alle wieder weg.
- **Ziehe mit rechts** genauso, um eine „hier keine Brücke“-Markierung einzuzeichnen oder
  wieder wegzuwischen.
- **Klicke** eine Insel an, um sie als erledigt zu markieren. Sie wird grau und ihre
  Brücken werden gesperrt, sodass du sie nicht aus Versehen änderst; klicke noch
  einmal, um sie wieder freizugeben.
- **Radieren** (der Radierknopf neben Rückgängig) lässt das Ziehen entfernen statt legen:
  Ziehe von einer Insel zu einem Nachbarn, um alle Brücken zwischen beiden wegzunehmen,
  oder die „keine Brücke“-Markierung dort. Drücke ihn noch einmal, um wieder Brücken zu
  legen.
- **Hilfslinien** zeigt eine feine Linie überall dort, wo eine Brücke hinpassen würde, und
  blendet sie wieder aus.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger von Insel zu Insel.
- **Enter** und dann eine Pfeiltaste legt eine Brücke in diese Richtung; **Leertaste** und
  dann eine Pfeiltaste setzt eine Markierung. Zweimal **Enter** markiert die Insel als
  erledigt.
- **E** ist der Knopf **Radieren** und **G** der Knopf **Hilfslinien**.

## Einstellungen

- **Breite** und **Höhe** des Gitters, jeweils mindestens 3.
- **Schwierigkeit**: Bei _Leicht_ musst du immer nur eine Insel auf einmal ansehen – wo
  ihre restlichen Brücken genau den verbliebenen Platz füllen, oder wo ihre Zahl zu groß
  ist, um einen Nachbarn auszulassen. _Mittel_ lässt dich auch über einzelne Verbindungen
  nachdenken: welche Brücke da sein muss, weil die Insel sonst nie voll wird, und (bei
  verbotenen Schleifen) welche Verbindungen eine Schleife schließen würden. _Schwer_
  verlangt einen Schritt Vorausdenken: Würde diese Brücke eine Gruppe von Inseln
  abschließen, die vom Rest getrennt ist, oder eine Insel ohne Anschluss zurücklassen?
  Jedes Rätsel hat genau eine Lösung.
- **Schleifen erlauben**: standardmäßig an. Ausgeschaltet muss das fertige Brückennetz ein
  Baum sein – kein Weg aus Brücken darf dorthin zurückführen, wo er angefangen hat – und
  das Rätsel wird so gebaut, dass es sich mit dieser Regel im Kopf lösen lässt.
- **Max. Brücken pro Richtung**: die Grenze für parallele Brücken, normalerweise 2.
  Weniger ist leichter.
- **% Inselfelder**: ungefähr wie viel vom Gitter zu Inseln wird. In manche Anordnungen
  passen nicht so viele, das ist also eine Obergrenze.
- **Ausdehnungsfaktor (%)**: wie wahrscheinlich es beim Wachsen der Karte ist, dass eine
  neue Insel so weit weg wie möglich landet statt irgendwo näher dran. Hohe Werte geben
  lichtere, leichtere Rätsel; niedrige gedrängte.
`,oe=e({default:()=>r}),r=`# Würfel

Ein Körper steht auf einem Gitter, und eine Handvoll Felder des Gitters sind blau gefärbt
– genau so viele, wie der Körper Flächen hat. Beim Rollen kippt der Körper über eine Kante
der Fläche, auf der er steht, sodass die nächste Fläche auf dem Nachbarfeld aufsetzt. Bei
jeder Landung tauschen die Fläche unten und das Feld, auf dem sie gelandet ist, die Farbe:
Landet eine unbemalte Fläche auf einem blauen Feld, kommt das Blau mit auf den Körper;
landet eine blaue Fläche auf einem unbemalten Feld, bleibt das Blau dort zurück. Das
Rätsel ist gelöst, wenn alle Flächen gleichzeitig blau sind. Die Statuszeile zählt deine
Rollbewegungen, versuch also, mit so wenigen wie möglich fertig zu werden.

In der klassischen Variante rollt ein Würfel über ein quadratisches Gitter. Auf einem
Dreiecksgitter kannst du stattdessen einen Tetraeder, einen Oktaeder oder einen Ikosaeder
rollen. Denk daran: Jede Fläche eines rollenden Tetraeders erreicht immer nur ein Viertel
der Felder, und die Flächen eines Oktaeders wechseln zwischen den nach oben und den nach
unten zeigenden Dreiecken – die blauen Felder liegen aber immer so, dass sich das Rätsel
zu Ende bringen lässt.

## Bedienung

Für dieses Rätsel gibt es keinen Lösen-Knopf. Sind erst einmal alle Flächen blau, darfst
du den Körper ruhig weiterrollen, ohne dass es etwas verdirbt.

### Maus und Touchscreen

- **Klicke** irgendwohin, um den Körper ein Feld weit dorthin zu rollen, wo der
  Mauszeiger steht. Auf einem quadratischen Gitter heißt das hoch, runter, links oder
  rechts; auf einem Dreiecksgitter hat das aktuelle Dreieck drei Nachbarn zur Auswahl. Ein
  Klick erreicht jeden Nachbarn, den der Körper hat, das allein genügt also für jedes der
  Gitter.

### Tastatur (Keyboard)

- **Pfeiltasten** rollen den Körper in die vier Hauptrichtungen. Auf einem Dreiecksgitter
  hat ein Dreieck nur entweder über oder unter sich einen Nachbarn, die andere senkrechte
  Taste tut also nichts.
- **Pos1**, **Bild↑**, **Ende** und **Bild↓** (oder die Ecktasten des Ziffernblocks,
  7, 9, 1 und 3) rollen auf den Dreiecksgittern diagonal und nehmen dabei die Kante, die
  in dieser Richtung am nächsten liegt.

## Einstellungen

- **Art des Körpers**: Tetraeder, Würfel, Oktaeder oder Ikosaeder. Der Würfel nutzt ein
  quadratisches Gitter; die anderen ein Gitter aus Dreiecken.
- **Breite / oben** und **Höhe / unten**: beim Würfel die Größe des quadratischen Gitters.
  Bei den Dreiecksgittern sind das die Längen der oberen und der unteren Kante einer
  sechseckigen Arena (setzt du eine davon auf null, bekommst du ein einfaches Dreieck).
  Das Gitter muss Platz für jedes blaue Feld plus ein leeres Startfeld lassen.
`,i=e({default:()=>a}),a=`# Dominosa

Ein vollständiger Satz Dominos – eines für jedes Zahlenpaar von 0 bis zur höchsten Zahl,
die Doppel eingeschlossen – wurde so ausgelegt, dass er ein Rechteck füllte. Dann wurden
die Zahlen abgeschrieben und die Dominos weggenommen. Deine Aufgabe ist herauszufinden, wo
sie lagen: Teile das Gitter in Paare benachbarter Felder, sodass jedes Domino des Satzes
genau einmal vorkommt.

Ein Domino, dessen Zahlenpaar schon woanders liegt, wird rot gezeichnet, und ebenso ein
freies Feld, das kein Domino mehr erreichen kann.

## Bedienung

Das Rätsel ist gelöst, wenn jedes Feld bedeckt ist und kein Domino rot ist. **Lösen** legt
alle Dominos der Lösung und räumt weg, was du selbst gelegt hattest.

### Maus und Touchscreen

- **Klicke** auf die Grenze zwischen zwei benachbarten Zahlen (oder in die Hälfte eines
  Feldes, die dieser Grenze am nächsten liegt), um ein Domino darüberzulegen. Klicke noch
  einmal auf dieselbe Grenze, um es wieder abzuheben. Ein Domino, das über einen Teil
  eines anderen gelegt wird, ersetzt dieses.
- **Rechtsklicke** auf eine Grenze, um eine Bleistiftlinie darüber zu ziehen – als Notiz,
  dass diese beiden Zahlen **nicht** ein Domino sind. Rechtsklicke noch einmal, um die
  Linie zu löschen. An ein Domino lässt sich keine Linie zeichnen, und wenn du ein Domino
  legst, verschwinden alle Linien, die es berühren.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger über das Gitter und halten dabei in den Feldmitten
  und auf den Grenzen zwischen den Feldern. Auf einer Grenze zeichnet der Zeiger den
  Umriss des Dominos, das er legen würde.
- **Enter** legt oder entfernt dieses Domino, und **Leertaste** zieht oder löscht dort eine
  Linie.

## Einstellungen

- **Höchste Zahl auf den Steinen**: die Dominos gehen von 0-0 bis N-N, und das Gitter ist
  (N+2) Felder breit und (N+1) Felder hoch, ein Höchstwert von 6 ergibt also ein 8×7-Gitter.
- **Schwierigkeit**: wie viel Nachdenken das Rätsel verlangt. Bei **Sehr leicht** gibt es immer
  entweder ein Domino mit nur einem möglichen Platz oder ein Feld mit nur einem Domino, das es
  bedecken kann. **Leicht** bringt zwei weitere Schlüsse dazu: Jede Art, dieses Feld zu bedecken,
  benutzt dasselbe Domino, also liegt dieses Domino nirgends sonst; und jeder Platz, an den
  dieses Domino könnte, schließt genau diese Stelle aus. **Schwer** nimmt das Zählen dazu (ein
  Domino, das eine ungerade Zahl von Feldern abschneiden würde, ist unmöglich; eine Gruppe von
  Feldern mit derselben Zahl kann die Dominos für sich beanspruchen, die sie teilen), und bei
  **Extrem** musst du den Folgen einer Platzierung nachgehen, bis sie zusammenstoßen. Alle diese
  haben genau eine Lösung. **Mehrdeutig** wird gar nicht geprüft: Solche Rätsel können mehrere
  Lösungen haben und Raten nötig machen – findest du irgendeine Aufteilung, hast du gewonnen.
`,o=e({default:()=>s}),s=`# Fünfzehn

Das klassische Schiebepuzzle. Das Gitter ist voller nummerierter Steine, dazu kommt eine
leere Lücke. Schiebe Steine in die Lücke, bis die Zahlen von links nach rechts und von
oben nach unten der Reihe nach stehen und die Lücke unten rechts in der Ecke liegt.

## Bedienung

**Lösen** springt direkt zur fertigen Anordnung. Es zeigt dir nicht, wie man dorthin
kommt, ist aber ein praktischer Neuanfang, wenn du feste Zugfolgen üben willst.

### Maus und Touchscreen

- **Klicke** auf einen beliebigen Stein in derselben Zeile oder Spalte wie die Lücke, um
  ihn (und alles zwischen ihm und der Lücke) an seinen Platz zu schieben.

### Tastatur (Keyboard)

- **Pfeiltasten** schieben einen Stein in Pfeilrichtung in die Lücke: **Pfeil nach oben** schiebt den
  Stein unter der Lücke nach oben in sie hinein.

## Einstellungen

- **Breite** und **Höhe** des Gitters (die Voreinstellung ist das klassische 4×4).
`,c=e({default:()=>l}),l=`# Füllen

In manchen Feldern des Gitters steht schon eine Ziffer; der Rest ist leer. Schreibe in
jedes leere Feld eine Ziffer, sodass jede zusammenhängende Gruppe gleicher Ziffern genau
so viele Felder bedeckt, wie die Ziffer sagt: Jede 3 gehört zu einer Gruppe aus drei Dreien,
jede 1 steht allein, und so weiter. Felder gelten nur über ihre Seiten als verbunden,
nicht über die Ecken. Daraus folgt: In keinem Feld steht eine 0, zwei Einsen liegen nie
nebeneinander, und keine Gruppe ist größer als neun Felder. Eine vorgegebene Ziffer muss
nicht der Anfang ihrer Gruppe sein: Mehrere vorgegebene Vieren können in einer Gruppe landen,
und eine Gruppe kann auch gar keine vorgegebene Ziffer enthalten.

Dicke Linien erscheinen zwischen Feldern mit verschiedenen Ziffern und rund um jede
Gruppe, die schon die richtige Größe hat (oder zu groß ist). Eine Ziffer wird rot, wenn
ihre Gruppe größer geworden ist als die Ziffer, oder wenn sie eingemauert ist und keinen
Platz mehr hat, ihre Größe zu erreichen. Das ist das Rätsel, das Nikoli als Fillomino
herausgibt.

## Bedienung

Vorgegebene Ziffern sind in Tinte gezeichnet und lassen sich nicht ändern; deine eigenen
Ziffern sind blau. **Lösen** trägt die Lösung ein.

### Maus und Touchscreen

- **Klicke** ein leeres Feld an, um es auszuwählen, und schreibe dann mit den Tasten auf
  dem Bildschirm eine Ziffer hinein. **⌫** auf dem Tastenfeld leert die Auswahl wieder.
- **Ziehe** über mehrere Felder, um sie alle auszuwählen, sodass eine Ziffer jedes
  gewählte Feld auf einmal füllt.
- **Rechtsklicke**, um ein Feld zur Auswahl hinzuzufügen, ohne von vorn anzufangen;
  rechtsklicke ein zweites Mal auf ein gewähltes Feld, und es fällt wieder aus der Auswahl
  heraus.
- **Füllen** (der Knopf neben Rückgängig) verteilt eine Ziffer: Ziehe von einem Feld, in
  dem eine steht, über die Felder drumherum, und beim Loslassen bekommen sie alle diese
  Ziffer, ganz ohne Tastenfeld. Klicken und Ziehen, das auf einem leeren Feld beginnt,
  wählt weiterhin aus. Drücke ihn noch einmal, um wieder auszuwählen.

### Tastatur (Keyboard)

- Ist ein Feld oder sind mehrere ausgewählt, **gib eine Ziffer ein**, um sie in alle zu
  schreiben. Die Ziffer \`0\` oder **Backspace** leert sie wieder.
- **Pfeiltasten** bewegen einen Tastaturzeiger, und eine Ziffer, die du eingibst, füllt
  das Feld darunter.
- **Leertaste** oder **Enter** nimmt das Feld unter dem Zeiger in die Auswahl auf oder wieder
  heraus, sodass sich mehrere Felder mit einem Tastendruck füllen lassen.
- **F** ist der Knopf **Füllen**.

## Einstellungen

- **Breite** und **Höhe**: die Größe des Gitters. Gruppen sind nie größer als die längere
  Seite (oder 9), kleine Gitter benutzen also nur kleine Ziffern.
`,u=e({default:()=>d}),d=`# Umdrehen

Ein Gitter aus Feldern, manche leuchten, manche sind dunkel. Dein Ziel ist es, alle
gleichzeitig zum Leuchten zu bringen. Ein Druck auf ein Feld dreht es zwischen hell und
dunkel um, dreht aber auch einige seiner Nachbarn mit um: Die kleine Zeichnung auf jedem
Feld zeigt genau, welche. Mit den voreingestellten Formen **Kreuze** dreht jeder Druck das
Feld und seine vier Nachbarn oben, unten, links und rechts um; mit **Zufällig** hat jedes
Feld sein eigenes unregelmäßiges Muster, das Rätsel spielt sich also jedes Mal anders.

Da zweimal dasselbe Feld sich aufhebt und die Reihenfolge nie eine Rolle spielt, ist eine
Lösung einfach eine Auswahl von Feldern, die je einmal gedrückt werden.

## Bedienung

Die Statuszeile zählt, wie oft du gedrückt hast. **Lösen** bringt das ganze Brett zum
Leuchten und umrandet rot die Felder, die es dafür gedrückt hat. Drückst du danach weiter,
zeigen die roten Umrandungen mit, welche Felder noch einen Druck brauchen, um zum fertigen
Zustand zurückzukommen.

### Maus und Touchscreen

- **Klicke** ein Feld an, um es zu drücken.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger über das Gitter; **Enter** oder **Leertaste** drückt
  das Feld unter dem Zeiger.

## Einstellungen

- **Breite** und **Höhe** des Gitters, von 2 bis 10 Felder je Seite.
- **Art der Form**: _Kreuze_ dreht jedes Feld zusammen mit seinen Nachbarn oben, unten,
  links und rechts um; _Zufällig_ gibt jedem Feld eine zufällig gewachsene Form innerhalb
  des 3×3-Blocks um es herum.
`,f=e({default:()=>p}),p=`# Flut

Das Gitter ist ein Flickenteppich aus zufällig gefärbten Feldern. Dir gehört das Feld oben
links in der Ecke, zusammen mit jedem Feld, das über einen Weg gleicher Farbe daran hängt.
Jeder Zug färbt dieses ganze zusammenhängende Gebiet in einer Farbe deiner Wahl, sodass
benachbarte Felder dieser Farbe ebenfalls zu deinem Gebiet werden. Mach weiter, bis das
ganze Gitter eine einzige Farbe hat.

Der Haken ist die Zuggrenze. Bevor du anfängst, löst das Spiel das Gitter selbst und gibt
dir seine eigene Zugzahl plus ein paar Reservezüge; ist die Grenze aufgebraucht, bevor das
Gitter einfarbig ist, ist die Runde verloren. Du kannst danach weiterfüllen, um das Gitter
noch fertig zu sehen, aber als Sieg zählt es nicht mehr.

## Bedienung

Die Statuszeile zeigt, wie viele Züge du von der Grenze verbraucht hast. **Lösen** lässt
den Löser das Gitter für dich fertig machen; das zählt als automatisch gelöst und nicht
als dein eigener Sieg.

### Maus und Touchscreen

- **Klicke** auf ein Feld, dessen Farbe sich von deinem Gebiet unterscheidet, um das Gebiet
  in dieser Farbe zu färben. Ein Klick auf ein Feld, das schon passt, tut nichts und
  kostet keinen Zug.
- **Tipp** spielt die nächste Farbe des Lösers für dich, als ganz normalen Zug, den du
  rückgängig machen kannst. Nach ein paar Tipps gehören der Sieg und sein Stern trotzdem
  dir.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger über das Gitter; **Enter** oder **Leertaste** färbt das
  Gebiet in der Farbe unter dem Zeiger.

## Einstellungen

- **Breite** und **Höhe** des Gitters, bis zu 32 Felder je Seite.
- **Farben**: wie viele Farben das Gitter benutzt, von 3 bis 10. Weniger Farben bedeuten
  weniger Auswahl und ein leichteres Spiel.
- **Erlaubte Extrazüge**: die Zahl der Reservezüge, die zur eigenen Lösungslänge des
  Lösers dazukommen und zusammen die Zuggrenze bilden. Bei 0 musst du mindestens so
  effizient sein wie der Löser; der ist ordentlich, aber nicht perfekt, sein Ergebnis
  lässt sich also schlagen.
`,m=e({default:()=>h}),h=`# Galaxien

Über das Gitter sind Punkte verstreut: mitten in einem Feld, auf einer Linie zwischen zwei
Feldern oder auf einer Ecke, wo vier zusammenstoßen. Zieh Wände entlang der Gitterlinien, um
das Gitter in Bereiche zu zerteilen, sodass jeder Bereich genau einen Punkt enthält und
dieser Punkt sein Symmetriezentrum ist: Dreht man den Bereich um 180° um seinen Punkt, muss
er genau auf sich selbst fallen. Jedes Feld muss am Ende in irgendeinem Bereich liegen, und
kein Bereich darf ohne Punkt bleiben.

Die Rätsel entstehen zufällig und haben immer genau eine Lösung. Das Rätsel ist Nikolis
„Tentai Show“, auch bekannt als Spiral Galaxies.

## Bedienung

Ein Bereich, der geschlossen und richtig ist – ein Punkt, genau in seinem Symmetriezentrum,
keine losen Wände darin –, wird schattiert. Ein Punkt wird rot, wenn eine Wand durch ihn
läuft oder wenn er der einzige Punkt in einem geschlossenen Bereich ist, der nicht
symmetrisch um ihn liegt; ein geschlossener Bereich ganz ohne Punkt wird schraffiert. Das
Rätsel ist fertig, wenn jedes Feld schattiert ist. **Lösen** zeichnet die vollständige
Lösung.

### Maus und Touchscreen

- **Klicke** auf eine Gitterlinie, um dort eine Wand zu ziehen, oder klicke auf eine Wand,
  um sie zu entfernen.
- **Ziehe von einem Punkt** in ein Feld, um dort einen kleinen Pfeil zu hinterlassen, der zurück
  auf den Punkt zeigt: eine Erinnerung, dass das Feld zur Galaxie dieses Punktes gehört.
- **Ziehe mit rechts** an einem vorhandenen Pfeil, um ihn zu verschieben. Lass ihn wieder
  auf seinem Punkt los oder zieh ihn vom Gitter herunter, um ihn wegzuwerfen; lässt du ihn
  auf einem Feld los, das schon einen Pfeil hat, tritt er an dessen Stelle.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger über Felder, Linien und Ecken gleichermaßen.
- **Enter** auf einer Linie zieht oder entfernt dort die Wand; **Enter** auf einem Punkt
  nimmt einen Pfeil auf, der dem Zeiger folgt, bis du noch einmal **Enter** drückst, um ihn
  abzulegen.

## Einstellungen

- **Breite** und **Höhe** des Gitters, jeweils mindestens 3. Die festen Größen reichen von
  7×7 bis 15×15.
- **Schwierigkeit** – _Mittel_-Rätsel lassen sich Schritt für Schritt aus dem lösen, was die
  Symmetrieregel erzwingt; bei _Extrem_ musst du vielleicht eine Annahme ausprobieren und sehen,
  wohin sie führt.
`,g=e({default:()=>_}),_=`# Raten

Der Computer hat hinter der Sichtblende oben am Brett eine Reihe farbiger Stifte versteckt.
Deine Aufgabe ist es, sie genau nachzubauen – nur mit den Markierungen, die dir jeder
Versuch einbringt: ein **schwarzer** Stift für jeden Stift mit der richtigen Farbe am
richtigen Platz und ein **hohler** Stift für jeden weiteren Stift, dessen Farbe irgendwo
sonst in der versteckten Reihe vorkommt. Die Markierungen sagen dir, _wie viele_ Stifte
richtig waren, nicht _welche_. Finde die Reihe, bevor dir die Versuche ausgehen und sich die
Blende hebt; gehen sie dir aus, hebt sie sich trotzdem und zeigt dir, was du verpasst hast.

Das ist das Spiel, das Hasbro als _Mastermind_ verkauft: sechs Farben, vier Stifte und zehn
Versuche. Alles daran lässt sich ändern.

## Bedienung

**Lösen** hebt die Blende und zeigt die Antwort; damit ist das Spiel vorbei, genau so, wie
wenn dir die Versuche ausgehen.

### Maus und Touchscreen

- **Klicke** auf eine Farbe im Fach links, um sie zu wählen (der Ring zeigt, welche), und
  **klicke dann auf ein Loch** in der aktuellen Reihe, um dort einen Stift dieser Farbe zu
  setzen. Klickst du auf einen Stift in einem früheren Versuch, wählst du auch dessen Farbe.
- **Ziehe** einen Stift aus dem Fach, aus einem früheren Versuch oder aus der aktuellen
  Reihe in ein Loch. Ziehst du einen Stift aus der aktuellen Reihe heraus und lässt ihn
  irgendwo anders los, verschwindet er.
- **Rechtsklicke** auf ein Loch, um es zu leeren.
- Ist die Reihe voll, leuchtet der kleine Bewertungskasten rechts daneben auf: **klicke ihn
  an**, um den Versuch abzugeben.
- **Mittelklicke** auf ein Loch, um den Stift dort _festzuhalten_: Ein festgehaltener Stift
  wandert nach der Bewertung in den nächsten Versuch mit, was dir das Neusetzen der Stifte
  erspart, denen du schon traust. Noch einmal, und der Stift ist wieder frei.
- **Halten** (der Knopf neben Rückgängig) macht dasselbe mit einem einfachen Klick:
  Solange er an ist, hält ein Klick auf ein Loch in der aktuellen Reihe dessen Stift fest
  oder lässt ihn los, statt eine Farbe zu setzen. Die Farbe wechselst du wie gewohnt im
  Fach; drücke **Halten** noch einmal, um wieder Stifte zu setzen.
- **Buchstaben** im Pausenmenü schreibt auf jeden Stift einen Buchstaben, falls manche Farben
  für dich gleich aussehen, und nimmt sie auch wieder weg.

### Tastatur (Keyboard)

- **Pfeiltasten**: hoch und runter wählen eine Farbe im Fach, links und rechts bewegen einen
  Zeiger die aktuelle Reihe entlang und, sobald sie voll ist, auf den Bewertungskasten.
- **Enter** oder **Leertaste** setzt die gewählte Farbe in das Loch unter dem Zeiger oder gibt
  den Versuch ab, wenn der Zeiger auf dem Bewertungskasten steht.
- **Backspace** oder \`D\` leert das Loch unter dem Zeiger.
- \`H\` hält den Stift unter dem Zeiger fest oder lässt ihn wieder los.
- \`K\` ist der Knopf **Halten** und \`L\` der Knopf **Buchstaben**.

## Einstellungen

- **Farben**: aus wie vielen verschiedenen Farben die versteckte Reihe gebaut ist, von 2
  bis 10. Mehr Farben machen die Reihe schwerer zu fassen.
- **Stifte pro Versuch**: die Länge der versteckten Reihe.
- **Versuche**: wie viele Anläufe du bekommst.
- **Leerstellen erlauben**: lässt dich in einem Versuch Löcher leer lassen. Ein leeres Loch
  kann nie ein Treffer sein, also wird das Abtasten nach Farben einfacher. Die versteckte
  Reihe selbst hat nie Leerstellen.
- **Wiederholungen erlauben**: lässt die versteckte Reihe (und deine Versuche) eine Farbe
  mehr als einmal benutzen. Schaltest du das aus, schrumpft die Zahl der möglichen Reihen
  erheblich.
`,v=e({default:()=>y}),y=`# Trägheit

Du bist eine Kugel auf einem Gitter voller Hindernisse und willst jeden Edelstein auf dem
Brett haben. Der Haken steckt im Namen: Einmal ins Rollen gekommen, hält die Kugel erst an,
wenn etwas sie anhält. Sie rollt geradewegs durch Edelsteine (die sie im Vorbeirollen
einsammelt) wie durch leere Felder und kommt erst zur Ruhe, wenn das nächste Feld eine Wand
ist oder wenn sie auf einem Stopper landet. Diagonale Züge quetschen sich zwischen zwei
Wände, die sich nur an einer Ecke berühren. Auf eine Mine zu rollen ist tödlich – auch dann,
wenn derselbe Zug gerade den allerletzten Edelstein eingesammelt hat.

Jedes Rätsel entsteht so, dass sich alle seine Edelsteine vom Startfeld aus einsammeln
lassen, aber nichts hindert dich daran, in eine Ecke des Bretts zu rollen, aus der ein
Edelstein nicht mehr zu erreichen ist. Für Sterben oder Feststecken gibt es keine Strafe
außer einem Todeszähler in der Statuszeile: einfach rückgängig machen und einen anderen Weg
versuchen.

## Bedienung

**Rückgängig** nach einer Mine, und du machst von vor dem fatalen Zug an weiter. **Lösen**
sucht von deiner jetzigen Stelle aus einen Weg, der alle übrigen Edelsteine einsammelt, und
rollt die Kugel für dich daran entlang; Rückgängig nimmt den ganzen Weg auf einmal zurück.

### Maus und Touchscreen

- **Klicke** auf ein Feld, und die Kugel setzt sich in dessen Richtung von sich aus in
  Bewegung, gerundet auf die nächste der acht Himmelsrichtungen – Diagonalen eingeschlossen.
  Ein Klick in den Rand außerhalb des Gitters funktioniert auch, was praktisch ist, wenn die
  Kugel am Rand liegt.

### Tastatur (Keyboard)

- **Pfeiltasten** rollen die Kugel nach oben, unten, links oder rechts.
- **Pos1**, **Bild↑**, **Ende** und **Bild↓** rollen sie diagonal (nach links oben,
  rechts oben, links unten, rechts unten). Der Ziffernblock funktioniert so, wie er
  aussieht: 8 ist oben, 3 ist rechts unten, und so weiter; die Zahlenreihe macht dasselbe.

## Einstellungen

- **Breite** und **Höhe** des Gitters. Etwa ein Fünftel der Felder sind Wände, ein Fünftel
  Stopper, ein Fünftel Minen und ein Fünftel Edelsteine.
`,b=e({default:()=>x}),x=`# Keen

Fülle das Gitter mit Ziffern von 1 bis zu seiner Größe, sodass jede Zeile und jede Spalte
jede Ziffer genau einmal enthält. Außerdem ist das Gitter in dick umrandete „Käfige“
aufgeteilt, von denen jeder in seinem linken oberen Feld einen kleinen Hinweis trägt: ein
Ergebnis und ein Rechenzeichen. Die Ziffern im Käfig müssen mit dieser Rechenart genau
dieses Ergebnis liefern:

- \`7+\` heißt, dass die Ziffern im Käfig zusammen 7 ergeben.
- \`12×\` heißt, dass sie multipliziert 12 ergeben.
- \`2−\` steht immer auf einem Käfig aus zwei Feldern und heißt, dass die eine Ziffer um 2
  größer ist als die andere (in beide Richtungen).
- \`3÷\` steht ebenso auf zwei Feldern und heißt, dass die eine Ziffer das 3-Fache der anderen
  ist.

Anders als im Killer-Modus von Solo _darf_ ein Käfig dieselbe Ziffer zweimal enthalten,
solange die beiden nicht in derselben Zeile oder Spalte stehen. Es gibt keine vorgegebenen
Ziffern; die Hinweise sind alles, was du bekommst, und jedes Rätsel hat genau eine Lösung.
Das ist das Rätsel, das als KenKen erscheint.

## Bedienung

Eine Ziffer, die in ihrer Zeile oder Spalte zweimal vorkommt, wird rot – und ebenso der
Hinweis eines Käfigs, der ganz ausgefüllt ist, sein Ergebnis aber verfehlt. **Lösen** trägt
die Lösung ein.

### Maus und Touchscreen

- **Klicke** auf ein Feld, um es zu wählen, und schreibe dann mit dem Tastenfeld eine Ziffer
  hinein. Klickst du das gewählte Feld noch einmal an, hebst du die Wahl wieder auf.
- **⌫** auf dem Tastenfeld leert das gewählte Feld wieder, und **✎** rastet die
  **Bleistiftnotizen** ein: Was du dann wählst, landet als kleine Notiz, und dieselbe Ziffer
  noch einmal radiert die Notiz weg. Bleistiftnotizen sind nur zum Mitdenken da; trägst du
  eine Ziffer ein, verschwinden sie.
- **Rechtsklicke** auf ein leeres Feld, um es gleich für Bleistiftnotizen zu wählen.
- **Notizen** im Pausenmenü füllt jedes leere Feld mit allen Bleistiftnotizen.
- **Hervorheben** (die Lupe neben Rückgängig) hebt jedes Feld hervor, in dem dieselbe
  Ziffer steht wie in dem Feld, das du zuletzt angeklickt hast, und zeigt diese Ziffer
  unter den Bleistiftnotizen fett. Drücke sie noch einmal, um das auszuschalten.

### Tastatur (Keyboard)

- **Gib eine Ziffer ein**, um das gewählte Feld zu füllen, oder um sie dort zu notieren,
  wenn das Feld für Bleistiftnotizen gewählt war.
- **Leertaste** oder **Backspace** leert das gewählte Feld (seine Ziffer oder alle seine
  Bleistiftnotizen).
- **Pfeiltasten** bewegen einen Tastatur-Zeiger, und die Ziffern, die du eingibst, landen im
  Feld darunter.
- **Enter** schaltet den Zeiger zwischen normaler Eingabe und Bleistiftnotizen um.
- **M** ist der Knopf **Notizen** und **L** der Knopf **Hervorheben**.

## Einstellungen

- **Gittergröße**: von 3 bis 9. Ziffern über 9 wären unhandlich, also ist bei 9 Schluss.
- **Schwierigkeit**: die schwerste Art von Schluss, die das Rätsel verlangt. _Leicht_ verlangt
  nur, herauszufinden, welche Ziffern in einem Käfig überhaupt vorkommen können; _Mittel_
  verlangt, im Blick zu behalten, auf welchem Feld eines Käfigs jede Ziffer sitzen könnte;
  _Schwer_ nimmt Schlüsse über Käfige hinweg dazu (Ziffern, die ein Käfig in einer Zeile
  unterbringen muss, können nirgends sonst in dieser Zeile stehen) und Mengen von Feldern, denen
  eine Menge Ziffern gehört; _Experte_ nimmt Zwangsketten dazu; und _Extrem_-Rätsel lassen sich
  ohne Raten und Zurückgehen nicht zu Ende bringen. Schwerere Rätsel brauchen länger zum
  Erzeugen, und 3×3-Gitter gehen nie über Mittel hinaus.
- **Nur Multiplikation**: jeder Hinweis ist ein Produkt, was die einfachen Dominos wegnimmt
  und ein ziemlich anderes Rätsel ergibt.
`,S=e({default:()=>C}),C=`# Licht an

Ein Gitter aus weißen und schwarzen Feldern. Setze Glühbirnen auf weiße Felder, sodass jedes
weiße Feld beleuchtet ist. Eine Birne beleuchtet ihr eigenes Feld und strahlt ihre Zeile und
ihre Spalte entlang, bis ein schwarzes Feld oder der Rand im Weg ist. Am Ende müssen drei
Dinge stimmen:

- jedes weiße Feld ist beleuchtet;
- keine Birne wird von einer anderen beleuchtet, es sehen sich also nie zwei Birnen entlang
  einer Zeile oder Spalte;
- ein schwarzes Feld mit einer Zahl hat genau so viele Birnen in den Feldern direkt darüber,
  darunter, links und rechts davon. Schwarze Felder ohne Zahl dürfen beliebig viele Birnen
  neben sich haben.

Beleuchtete Felder sind in Gelb getaucht. Birnen, die sich gegenseitig anstrahlen, werden
rot, und ebenso eine Zahl, die nicht mehr aufgehen kann: Sie hat schon zu viele Birnen neben
sich, oder es ist kein Platz mehr für genug davon.

## Bedienung

Das Rätsel ist fertig, wenn das ganze Gitter leuchtet und nichts rot zu sehen ist. **Tipp**
setzt eine einzelne Birne – oder nimmt eine weg, die nicht zur Lösung gehört – und
überlässt dir den Rest; das Rätsel läuft weiter, und nach ein paar Tipps gehören der Sieg
und sein Stern trotzdem dir. **Lösen** setzt die Birnen einer Lösung ein und lässt die
Kreuze, die du gezogen hast, stehen.

### Maus und Touchscreen

- **Klicke** auf ein weißes Feld, um dort eine Birne zu setzen, und noch einmal, um sie
  wieder wegzunehmen.
- **Rechtsklicke** auf ein weißes Feld, um mit Bleistift ein Kreuz einzutragen, das „hier
  kann keine Birne hin“ heißt; rechtsklicke noch einmal, um es wegzuradieren. Ein Feld mit
  Kreuz nimmt keine Birne an, solange das Kreuz da ist, und ein Feld mit Birne lässt sich
  nicht ankreuzen.
- **Kreuz** (der Kreuzknopf neben Rückgängig) lässt einen einfachen Klick ein Kreuz statt
  einer Birne eintragen oder wegradieren – praktisch, wenn du viele Felder auf einmal
  ausschließt. Drücke ihn noch einmal, um wieder Birnen zu setzen.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger über das Gitter.
- **Enter** setzt eine Birne unter dem Zeiger oder nimmt sie weg, und **Leertaste** (oder **I**)
  schaltet dort ein Kreuz an und aus.
- **X** ist der Knopf **Kreuz**.

## Einstellungen

- **Breite** und **Höhe** des Gitters.
- **% schwarze Felder**: ungefähr wie viel vom Gitter schwarz ist. Das ist ein Wunsch, kein
  Versprechen: Lässt sich bei dieser Dichte kein Rätsel bauen, nimmt der Erzeuger ein paar
  schwarze Felder mehr.
- **Symmetrie**: das Muster, dem die schwarzen Felder folgen – Keine, 2-fach gespiegelt oder
  2-fach gedreht für zwei Hälften, oder 4-fach gespiegelt oder 4-fach gedreht. 4-fach
  gedreht braucht ein quadratisches Gitter.
- **Schwierigkeit**: _Leicht_-Rätsel fallen schon, wenn du Feld für Feld überlegst, welche Felder
  eine Birne tragen müssen oder keine tragen können. _Mittel_ verlangt, ganze Mengen von Feldern
  gegeneinander abzuwägen („eines von diesen dreien muss eine Birne sein, und das schließt dieses
  hier aus“). _Schwer_-Rätsel können verlangen, dass du irgendwo eine Birne ausprobierst und den
  Folgen nachgehst, bis etwas schiefgeht. Jedes Rätsel hat genau eine Lösung.
`,w=e({default:()=>T}),T=`# Schleifen

Ein Gitter aus Punkten, und in manchen Zwischenräumen steht eine Zahl. Zeichne eine einzige
geschlossene Schleife entlang der feinen Linien zwischen den Punkten, sodass:

- jeder Zwischenraum mit einer Zahl genau so viele seiner Seiten auf der Schleife hat;
- die Schleife sich nie kreuzt und nie selbst berührt – jeder Punkt hat entweder zwei Linien
  oder gar keine – und es nur eine Schleife gibt, ohne lose Enden oder abgetrennte Stücke.

Die klassische Fassung benutzt Quadrate, aber dasselbe Rätsel funktioniert auf Dreiecken,
Sechsecken und einem Dutzend seltsamerer Parkettierungen, wo die Zahlen weit über 4
hinausgehen können.

Linien, die eine falsche Schleife bilden oder zu dritt an einem Punkt zusammentreffen,
werden rot; eine Zahl mit zu vielen Linien um sich herum oder mit zu wenigen möglichen
Seiten übrig wird ebenfalls rot. Eine Zahl wird grau, sobald sie genau die richtige Zahl an
Linien hat.

## Bedienung

**Lösen** zeichnet die ganze Schleife. Das Rätsel ist fertig, sobald die Schleife
geschlossen ist und jede Zahl aufgeht; die ungenutzten Kanten durchzustreichen ist
freiwillig.

### Maus und Touchscreen

- **Klicke** auf eine feine Kante, um eine Linie darauf zu ziehen; klicke die Linie noch
  einmal an, um sie zu entfernen.
- **Rechtsklicke** auf eine Kante, um sie durchzustreichen, also als sicher nicht zur
  Schleife gehörig zu markieren; rechtsklicke noch einmal, um die Markierung zu löschen.
  Klicken oder rechtsklicken: Beides löscht auch eine Markierung, die die jeweils andere
  Aktion hinterlassen hat.
- **Kreuz** (der Kreuzknopf neben Rückgängig) lässt ein einfaches Anklicken eine Kante
  durchstreichen oder das Kreuz wieder löschen, statt eine Linie zu ziehen. Drücke ihn noch
  einmal, um wieder Linien zu ziehen.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger von Kante zu Kante; **Enter** zieht oder entfernt
  eine Linie auf der Kante unter dem Zeiger, und **Leertaste** streicht sie durch oder löscht
  sie wieder.
- **X** ist der Knopf **Kreuz**.

## Einstellungen

- **Breite** und **Höhe** des Gitters, gezählt in Zellen der Parkettierung. Beim
  Quadratgitter ist das schlicht die Zahl der Felder in der Breite und in der Höhe; andere
  Parkettierungen zählen ihre sich wiederholenden Einheiten, sodass die tatsächliche Zahl
  der Flächen schwankt.
- **Gitterart**: _Quadrate_, _Dreiecke_ und _Wabe_ sind die regelmäßigen Parkettierungen.
  _Snub-Quadrat_, _Cairo_, _Groß-Sechseckig_, _Achteckig_, _Drachen_, _Blüte_, _Zwölfeckig_
  und _Groß-Zwölfeckig_ mischen Formen, und die beiden _Penrose_-Parkettierungen wiederholen
  sich überhaupt nie.
- **Schwierigkeit**: _Leicht_-Rätsel brauchen nur die Regeln selbst – die Linien um eine Zahl
  herum zählen, daran denken, dass ein Punkt zwei Linien hat oder keine, und die Schleife nicht
  zu früh schließen. _Mittel_ nimmt Schlüsse über Paare von Kanten dazu, die sich an einem Punkt
  treffen (höchstens eine oder mindestens eine der beiden ist eine Linie). _Schwer_ lässt solche
  Erkenntnisse von Punkt zu Punkt weiterlaufen, etwa an einer diagonalen Reihe von Zweien
  entlang. _Experte_ verfolgt zusätzlich Kanten, von denen bekannt ist, dass sie gleich oder
  entgegengesetzt sind. Geraten werden muss nie; jedes Rätsel hat genau eine Lösung.
`,E=e({default:()=>D}),D=`# Magnete

Ein Rechteck ist mit Dominos ausgelegt, die nur als Umrisse zu sehen sind. Jedes Domino ist
entweder ein Magnet – die eine Hälfte ein \`+\`-Pol, die andere ein \`−\`-Pol – oder ein
Leerstein ganz ohne Pole. Die Zahlen am Rand sagen, wie viele \`+\`-Pole (über den Spalten und
links von den Zeilen) und wie viele \`−\`-Pole (unter den Spalten und rechts von den Zeilen)
jede Linie enthält; fehlt eine Zahl, gibt es für diese Linie keinen Hinweis. Fülle jedes
Domino so aus, dass alle Zahlen aufgehen und nie zwei gleiche Pole nebeneinanderliegen: \`+\`
darf über eine Dominogrenze hinweg nie \`+\` berühren und \`−\` nie \`−\`. Leersteine sind neutral
und dürfen neben allem liegen.

Gleiche Pole, die sich berühren, werden rot gezeigt. Eine Zahl wird rot, wenn sie nicht mehr
aufgehen kann – schon zu viele Pole, oder zu wenige und kein Platz mehr für weitere – und
grau, sobald sie genau stimmt. Das Rätsel ist fertig, wenn jedes Domino ausgefüllt ist, jede
Zahl aufgeht und nichts rot ist.

## Bedienung

### Maus und Touchscreen

- **Klicke** auf eine leere Hälfte eines Dominos, um sie zum \`+\`-Pol zu machen (die andere
  Hälfte wird \`−\`). Klicke dieselbe Hälfte noch einmal an, um den Magneten umzudrehen, und
  ein drittes Mal, um das Domino zu leeren. Klickst du auf einen Leerstein, passiert nichts.
- **Rechtsklicke** auf ein leeres Domino, um es als Leerstein zu markieren. Rechtsklicke
  noch einmal, dann treten an die Stelle des Leersteins Fragezeichen – eine Notiz, dass das
  Domino ganz sicher ein Magnet ist; beim dritten Mal wird es geleert. Bei einem Magneten
  passiert nichts.
- **Leerstein** (das schattierte Domino neben Rückgängig) lässt einen einfachen Klick das
  tun, was ein Rechtsklick tut: ein Domino als Leerstein markieren, dann Fragezeichen, dann
  wieder leer. Drücke ihn noch einmal, um wieder Magnete zu setzen.
- **Lösen** trägt die ganze Lösung ein.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger über das Gitter.
- **Enter** schaltet die Hälfte unter dem Zeiger durch \`+\`, \`−\` und leer. Linksklicken macht
  dasselbe.
- **Leertaste** schaltet das Domino unter dem Zeiger durch Leerstein, Fragezeichen und leer.
  Rechtsklicken macht dasselbe.
- **B** ist der Knopf **Leerstein**.

## Einstellungen

- **Breite** und **Höhe** des Gitters. Ist die Fläche ungerade, bleibt ein Feld übrig und
  wird schraffiert gezeichnet; es gehört zu keinem Domino und zählt als neutral.
- **Schwierigkeit**: _Leicht_-Rätsel verlangen nie mehr, als eine Linie oder ein Domino auf
  einmal anzusehen – eine Zahl, die schon aufgeht, eine Zahl, die jeden verbliebenen Kandidaten
  braucht, oder ein Domino, dessen beide Hälften einen bestimmten Pol nicht nehmen können.
  _Schwer_-Rätsel verlangen außerdem, über ganze Dominos entlang einer Linie nachzudenken: Ein
  Domino, das ein Magnet sein muss, liefert einen Pol jeder Sorte, wie herum es auch liegt; eine
  Linie, in der nur noch ein Feld frei ist, kann keinen Leerstein der Länge nach aufnehmen; und
  so weiter. Jedes Rätsel hat genau eine Lösung.
- **Weniger Hinweise**: entfernt jede Zahl, die zum Lösen auf der gewählten Schwierigkeit
  nicht gebraucht wird, was es deutlich schwerer macht, einen Anfang zu finden.
`,O=e({default:()=>k}),k=`# Landkarte

Eine Landkarte ist in Bereiche geteilt. Färbe jeden Bereich mit einer von vier Farben,
sodass keine zwei Bereiche, die ein Stück Grenze teilen, dieselbe Farbe haben. Bereiche, die
sich nur an einer Ecke berühren, dürfen gleich sein. Ein paar Bereiche sind schon für dich
gefärbt, und sie sind so gewählt, dass es genau einen Weg gibt, die Karte fertigzumachen.

Zwei benachbarte Bereiche in derselben Farbe bekommen ein rotes \`!\` auf die Grenze zwischen
ihnen.

## Bedienung

**Lösen** malt die vollständige Lösung aus. Die Karte blitzt auf, sobald jeder Bereich
gefärbt ist und nichts rot ist.

### Maus und Touchscreen

- **Ziehe** eine Farbe: Drücke auf einen Bereich (oder auf eines der Farbfelder unter der
  Karte) und lass auf einem anderen Bereich los, um ihm diese Farbe zu geben. Ziehst du aus
  einem leeren Bereich, aus dem freien Raum um die Karte herum oder vom Radiergummi-Feld,
  dann leerst du den Bereich, auf dem du loslässt.
- **Klicke auf ein Farbfeld**, um eine Farbe zu wählen, und **klicke** dann auf Bereiche, um
  sie auszumalen; klicke das gewählte Farbfeld noch einmal an, um die Wahl aufzuheben.
- **Ziehe mit rechts** eine Farbe auf einen leeren Bereich, um dort einen kleinen Punkt in
  dieser Farbe einzutragen – eine Notiz, dass der Bereich diese Farbe haben _könnte_. Ein
  Bereich kann mehrere Bleistiftpunkte tragen; ziehst du dieselbe Farbe noch einmal hin,
  verschwindet ihr Punkt wieder. Ist ein Farbfeld gewählt, kannst du auch einfach auf einen
  leeren Bereich **rechtsklicken**, um seinen Punkt an- und auszuschalten.
- **Nummern** (im Pausenmenü) zeigt in jedem Bereich eine Zahl, praktisch, wenn du mit
  jemand anderem über ein Rätsel reden willst, und blendet sie wieder aus.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger über die Karte; der Bereich, in dem er steht, bekommt
  eine Umrandung. Die Tasten **1**–**4** färben diesen Bereich, **Leertaste** leert ihn, und
  **Enter** nimmt seine Farbe auf, sodass du sie mit den Pfeiltasten mitnehmen und mit
  **Enter** wieder ablegen kannst (oder als Bleistiftpunkt mit **Leertaste**). Drückst du
  zweimal **Enter**, ohne dich zu bewegen, wird der Bereich geleert.
- **L** ist der Knopf **Nummern**.

## Einstellungen

- **Breite** und **Höhe** des Gitters, auf dem die Karte gezeichnet ist, in Feldern.
- **Bereiche**: in wie viele Bereiche die Karte zerschnitten wird.
- **Schwierigkeit**: Bei _Leicht_-Rätseln gibt es immer einen Bereich, dem nur noch eine Farbe
  bleibt. _Mittel_ nimmt Schlüsse über Paare benachbarter Bereiche dazu, die sich dieselben zwei
  Farben teilen müssen. _Schwer_ verlangt Ketten solcher Schlüsse quer über die Karte. Das alles
  lässt sich ohne Raten lösen. _Extrem_ verspricht nur, dass die Lösung eindeutig ist; du musst
  vielleicht eine Farbe ausprobieren und ihr folgen, bis etwas schiefgeht.
`,A=e({default:()=>j}),j=`# Minen

Ein Gitter aus verdeckten Feldern verbirgt eine Reihe von Minen. Decke jedes Feld auf,
unter dem _keine_ Mine liegt. Jedes Feld, das du öffnest, zeigt, wie viele seiner acht
Nachbarn Minen sind; öffnest du eine Mine, ist das Spiel verloren.

Der Kniff an dieser Fassung: Du musst nie raten. Bis zu deinem ersten Klick ist nichts
entschieden – die Minen werden dann so verteilt, dass das Feld, auf das du geklickt
hast, leer ist und sich das ganze Gitter von dort aus rein durch Nachdenken erschließen
lässt. Fühlst du dich einmal festgefahren, gibt es immer irgendwo ein sicheres Feld, das die
Zahlen längst beweisen.

Die Statuszeile zeigt, wie viele Flaggen du gesetzt hast, gemessen an der Zahl der Minen,
und die Uhr läuft ab deinem ersten Klick. Triffst du eine Mine, kommen alle übrigen zum
Vorschein, und falsch gesetzte Flaggen werden durchgestrichen; du kannst den tödlichen
Zug rückgängig machen und weiterspielen, aber die Statuszeile merkt sich den Tod.

## Bedienung

### Maus und Touchscreen

- **Klicke** auf ein verdecktes Feld, um es zu öffnen. Öffnest du ein leeres Feld (ohne
  Minen als Nachbarn), gehen auch seine Nachbarn auf, und so weiter nach außen.
- **Rechtsklicke** auf ein verdecktes Feld, um eine Flagge auf eine vermutete Mine zu
  setzen, und noch einmal, um sie wieder wegzunehmen. Felder mit Flagge lassen sich nicht
  aus Versehen öffnen.
- **Klicke auf eine Zahl**, um die herum schon die richtige Anzahl Flaggen steht, und
  alle ihre übrigen verdeckten Nachbarn gehen auf einen Schlag auf. Ein **Mittelklick**
  auf diese Zahl tut dasselbe.
- **Tipp** öffnet ein sicheres Feld – oder nimmt eine Flagge weg, unter der keine Mine
  liegt – und überlässt dir den Rest des Gitters. Nach ein paar Tipps gehören der Sieg und
  sein Stern trotzdem dir.
- **Lösen** deckt die ganze Verteilung auf und setzt auf jede Mine eine Flagge. Das
  zählt nicht als eigener Sieg.

### Tastatur (Keyboard)

- Die **Pfeiltasten** bewegen einen Zeiger über das Gitter.
- **Enter** wirkt wie ein Linksklick auf das Feld unter dem Zeiger: Es öffnet ein
  verdecktes Feld oder räumt rund um eine Zahl auf, deren Flaggen schon alle stehen.
- **Leertaste** setzt eine Flagge oder nimmt sie weg, genau wie ein Rechtsklick.

## Einstellungen

- **Breite** und **Höhe** des Gitters.
- **Minen**: wie viele Minen versteckt werden. Statt einer Anzahl darfst du auch einen
  Prozentwert wie \`20%\` angeben. Bei sehr hoher Dichte dauert es lange, ein lösbares
  Gitter zu finden.
- **Lösbarkeit garantieren**: Ist das an (der Standard), lässt sich die Verteilung ab
  deinem ersten Klick garantiert ohne Raten lösen. Schalte es aus für ganz normale
  Zufallsgitter, bei denen am Ende auch mal ein Münzwurf übrig bleibt.
`,M=e({default:()=>N}),N=`# Netz

Ein Netz aus Drähten wurde über ein Gitter aus quadratischen Kacheln gelegt, und danach
wurde jede Kachel zufällig gedreht. Dreh die Kacheln zurück, bis alle zu einem einzigen
Netz verbunden sind: Jedes Drahtende muss auf einen Draht der Nachbarkachel treffen, und
kein Draht darf gegen eine Wand zeigen. Das fertige Netz ist ein Baum, es hat also keine
geschlossenen Schleifen.

Kacheln, die schon mit der Quellkachel in der Mitte des Gitters verdrahtet sind, werden
blau gezeichnet – als Hilfe; der Rest bleibt grau. Ein Draht, der Teil einer Schleife
ist, wird rot gezeichnet. Dicke schwarze Linien zwischen den Kacheln sind Barrieren: Da
kommt kein Draht durch, was dir einen Hinweis darauf gibt, wie die Kacheln zu beiden
Seiten stehen müssen. Die Statuszeile zeigt, wie viele Kacheln gerade Strom haben.

## Bedienung

### Maus und Touchscreen

- **Klicke** auf eine Kachel, um sie gegen den Uhrzeigersinn zu drehen, **rechtsklicke**
  auf sie, um sie im Uhrzeigersinn zu drehen.
- **Mittelklicke** auf eine Kachel, um sie zu **sperren**, sobald du dir sicher bist.
  Eine gesperrte Kachel ist schattiert und dreht sich nicht mehr, bis du sie mit einem
  weiteren Mittelklick wieder freigibst. Rechtsklicken dreht die Kachel, statt sie zu
  sperren – zum Sperren musst du also mittelklicken.
- **Sperren** (der Schlossknopf neben Rückgängig) lässt einen einfachen Klick eine Kachel
  sperren oder freigeben, statt sie zu drehen – auf einem Trackpad leichter als ein
  Mittelklick. Ein Rechtsklick dreht die Kachel weiterhin im Uhrzeigersinn. Drücke ihn noch
  einmal, um wieder zu drehen.
- **Mischen** dreht jede nicht gesperrte Kachel in eine frische zufällige Lage, für
  einen Tapetenwechsel, wenn ein Rätsel feststeckt.
- Auf einem umlaufenden Gitter schieben die vier **Pfeilknöpfe** die Ansicht, sodass
  Kacheln an gegenüberliegenden Rändern nebeneinander zu liegen kommen.

### Tastatur (Keyboard)

- Die **Pfeiltasten** bewegen einen Zeiger über das Gitter.
- **Enter** oder **A** dreht die Kachel unter dem Zeiger gegen den Uhrzeigersinn, **D**
  dreht sie im Uhrzeigersinn und **F** dreht sie um eine halbe Drehung.
- **Leertaste**, **S** oder **L** sperrt die Kachel unter dem Zeiger oder gibt sie wieder
  frei. Mit einer Maus sperrt auch **Shift-Klick** eine Kachel, genau wie ein
  Mittelklick.
- **K** ist der Knopf **Sperren** und **J** der Knopf **Mischen**.
- Auf einem umlaufenden Gitter schieben **Shift + Pfeiltasten** die Ansicht (genau wie
  die vier Pfeilknöpfe), sodass Kacheln an gegenüberliegenden Rändern nebeneinander zu
  sehen sind. **Ctrl + Pfeiltasten** verschieben die Quellkachel, von der aus sich das
  Blau ausbreitet.

## Einstellungen

- **Breite** und **Höhe** des Gitters in Kacheln.
- **Ränder umlaufend**: Drähte dürfen an einem Rand des Gitters hinauslaufen und am
  gegenüberliegenden weitergehen.
- **Barrieren-Wahrscheinlichkeit**: eine Zahl von 0 bis 1 für den Anteil der drahtfreien
  Kanten, die eine Barriere bekommen. Barrieren ändern nie, wie die Drähte liegen:
  Derselbe Zufallswert ergibt immer dasselbe Gitter, ein höherer Wert fügt also nur
  Hinweise hinzu.
- **Eindeutige Lösung garantieren**: Normalerweise ist das Rätsel so gebaut, dass genau
  eine Stellung der Kacheln passt. Schalte das aus für schnelleres Erzeugen und die eine
  oder andere mehrdeutige Stelle.
`,P=e({default:()=>F}),F=`# Netzschieber

Jede Kachel trägt ein Stück Verdrahtung: ein gerades Stück, eine Ecke, eine T-Kreuzung
oder ein loses Ende mit einem Punkt darauf. Richtig zusammengesetzt bilden die Teile ein
einziges Netz, das von der Stromquelle auf der schattierten Mittelkachel aus jede Kachel
erreicht, ohne Schleifen und ohne Arme, die ins Leere zeigen. Das Gitter wurde durch
Verschieben ganzer Zeilen und Spalten durcheinandergebracht, und nur so bekommst du es
auch wieder in Ordnung: Keine Kachel lässt sich drehen, nur verschieben.

Kacheln, die gerade Strom bekommen, werden blau gezeichnet; der Rest bleibt grau. Dicke
schwarze Wände zwischen den Kacheln sind Barrieren. Über eine Barriere hinweg kann sich
nichts verbinden, sie verraten dir also, wo das fertige Netz ganz sicher keine Verbindung
hat.

## Bedienung

### Maus und Touchscreen

- **Klicke** auf einen Pfeil neben einer Zeile oder Spalte, um diese ganze Linie einen
  Schritt in Pfeilrichtung zu schieben. Die Kachel, die hinten hinausgeschoben wird,
  kommt am anderen Ende derselben Linie wieder herein. **Rechtsklicke** auf einen Pfeil,
  um die Linie andersherum zu schieben.
- Die mittlere Zeile und Spalte haben keine Pfeile: Die Stromquelle bewegt sich nie.
- **Lösen** springt direkt zum fertigen Netz, damit du es mit deinem eigenen Versuch
  vergleichen kannst.

### Tastatur (Keyboard)

- Die **Pfeiltasten** wandern mit einer Markierung um den Ring der Pfeile herum.
- **Enter** schiebt die markierte Linie in Pfeilrichtung und **Leertaste** schiebt sie
  zurück.

## Einstellungen

- **Breite** und **Höhe** des Gitters.
- **Ränder umlaufend**: Ist das an, geht es am rechten Rand links weiter und am unteren
  oben, Verdrahtung (und Barrieren) können also über den Rand des Gitters laufen. Der
  gestrichelte Rahmen kennzeichnet ein umlaufendes Gitter; ein durchgezogener dicker
  Rahmen ist ringsum eine Wand.
- **Barrieren-Wahrscheinlichkeit**: wie viele der ungenutzten Kachelkanten eine Barriere
  bekommen, von 0 (keine) bis 1 (jede Kante, die das fertige Netz nicht benutzt). Mehr
  Barrieren machen das Rätsel leichter. Die Barrieren werden unabhängig vom Rest des
  Gitters gewählt, derselbe Zufallswert mit höherer Barrieren-Wahrscheinlichkeit ergibt
  also dasselbe Rätsel mit mehr Hinweisen.
- **Anzahl Mischzüge**: Lass 0 stehen für ein gründliches Durcheinander, oder gib eine
  Zahl an, um mit genau so vielen Schiebezügen zu mischen. Dann geht es darum, sie zu
  finden und rückgängig zu machen; die Statuszeile zeigt das Ziel.
`,I=e({default:()=>L}),L=`# Muster

Jedes Feld des Gitters ist insgeheim entweder schwarz oder weiß. Die Zahlen neben jeder
Zeile und über jeder Spalte nennen dir die Längen der schwarzen Blöcke in dieser Linie,
der Reihe nach, mit mindestens einem weißen Feld zwischen zwei Blöcken. Male die
schwarzen Felder so aus, dass jede Zeile und jede Spalte zu ihren Zahlen passt. Rätsel
dieser Art heißen meist Nonogramme oder Picross.

Die Bilder hier entstehen zufällig, es gibt also kein Motiv zu erraten: Alles muss sich
aus den Zahlen ergeben. Jedes Rätsel wird vorab geprüft, damit es sich lösen lässt, indem
man immer nur über eine Zeile oder Spalte nachdenkt – du musst also nie etwas
ausprobieren.

Die Zahlen einer Linie werden grau, sobald die schwarzen Blöcke in dieser Linie zu ihnen
passen, und rot, wenn die Blöcke, die du fertig hast, unmöglich zu den Zahlen passen
können. Das Rätsel ist fertig, wenn jede Zeile und jede Spalte zu ihren Zahlen passt; die
Punkte sind nur da, damit du dich besser erinnerst.

## Bedienung

### Maus und Touchscreen

- **Klicke** auf ein Feld, um es schwarz zu malen; klicke ein schwarzes Feld noch einmal
  an, um es zu leeren.
- **Rechtsklicke**, um ein Feld mit einem Punkt zu markieren – das heißt: bekanntlich
  weiß; rechtsklicke auf ein Feld mit Punkt, um es zu leeren.
- **Ziehe**, um eine gerade Linie schwarzer Felder auf einmal zu malen, und
  **ziehe mit rechts**, um eine Linie aus Punkten zu legen. Betroffen sind nur Felder, die im selben
  Zustand waren wie das, auf dem du angefangen hast – eine Reihe Punkte über deine
  schwarzen Felder zu ziehen lässt sie also in Ruhe.
- **Mittelklicke** auf ein Feld, um es wieder auf unbekannt zu setzen. Mit einer Maus wird beim
  Ziehen mit gedrücktem Mausrad ein ganzes Rechteck geleert, was auch immer darin steht.
- **Radieren** (der Radierknopf neben Rückgängig) lässt die linke Maustaste dasselbe tun:
  Klicke auf ein Feld, um es zu leeren, oder ziehe, um ein ganzes Rechteck zu leeren.
  Drücke ihn noch einmal, um wieder schwarz zu malen.
- **Tipp** füllt ein Feld aus, und zwar immer eines, das eine einzelne Zeile oder Spalte
  schon allein festlegt – oder berichtigt ein Feld, das der Lösung widerspricht. Das Rätsel
  läuft weiter, und nach ein paar Tipps gehören der Sieg und sein Stern trotzdem dir.
- **Lösen** malt dir das ganze Bild aus.

### Tastatur (Keyboard)

- Die **Pfeiltasten** bewegen einen Zeiger.
- **Enter** malt oder leert Schwarz unter dem Zeiger und **Leertaste** setzt oder entfernt
  einen Punkt.
- Halte **Ctrl**, während du den Zeiger bewegst, um dabei schwarz zu malen, **Shift**, um
  Punkte zu legen, oder beides, um zu leeren.
- Mit einer Maus leert **Shift-Klick** Felder genau so, wie ein Mittelklick es tut.
- **E** ist der Knopf **Radieren**.

## Einstellungen

- **Breite** und **Höhe** des Gitters. Die festen Größen gehen von 10×10 bis 30×30;
  größere Gitter brauchen etwas länger zum Erzeugen.
`,R=e({default:()=>z}),z=`# Perle

Ein Gitter aus Feldern, in manchen liegt eine schwarze oder weiße Perle. Zeichne eine
einzige geschlossene Schleife, die von Feldmitte zu Feldmitte läuft, waagerecht oder
senkrecht, ohne sich zu kreuzen oder zu verzweigen. Die Schleife muss nicht jedes Feld
besuchen, aber sie muss durch jede Perle führen:

- an einer **schwarzen Perle** biegt die Schleife ab und läuft dann gerade durch beide
  Felder, die entlang der Schleife neben der Perle liegen;
- an einer **weißen Perle** läuft die Schleife gerade hindurch und biegt in mindestens
  einem der beiden Felder ab, die entlang der Schleife neben der Perle liegen.

Es zählen nur die Felder, die die Schleife direkt vor und nach einer Perle besucht, nicht
jedes Feld, das sie im Gitter berührt.

Eine Perle, deren Regel schon verletzt ist, bekommt einen roten Hof. Sobald es irgendeine
geschlossene Schleife gibt, wird jedes Linienstück außerhalb davon rot gezeichnet, und
ebenso jedes Feld mit drei oder mehr Linienstücken.

## Bedienung

**Lösen** zeichnet die ganze Schleife. Das Rätsel ist fertig, wenn die Schleife ein
einziger geschlossener Rundweg ist und nichts rot ist.

### Maus und Touchscreen

- **Klicke** auf eine Gitterkante (nahe der Grenze zwischen zwei Feldern), um ein
  Linienstück darüber zu zeichnen; klicke noch einmal, um es zu entfernen.
- **Ziehe** durch eine Reihe von Feldern, um gleich eine ganze Folge von Linienstücken zu
  zeichnen. Ziehst du an vorhandenen Linienstücken entlang, verschwinden sie; ziehst du von
  vorhandenen Linienstücken aus weiter in leere Felder, wird erst gelöscht und dann gezeichnet.
  Geh über ein Feld, das du schon passiert hast, wieder zurück, um den Weg zu kürzen, bevor du
  loslässt; kehre zu dem Feld zurück, an dem du angefangen hast, um die Schleife zu schließen.
- **Rechtsklicke** auf eine Gitterkante, um ein kleines Kreuz zu setzen, das „hier kein
  Linienstück“ bedeutet; über ein Kreuz hinweg lässt sich nichts zeichnen, solange es
  dort steht.
  **Ziehe mit rechts** durch eine Reihe von Feldern, um jede Kante, über die du kommst,
  auszustreichen.
- **Kreuz** (der Kreuzknopf neben Rückgängig) lässt ein einfaches Anklicken ein Kreuz setzen
  oder wegnehmen und ein Ziehen eine ganze Reihe davon legen: Wie beim Zeichnen nimmt ein
  Ziehen, das auf Kreuzen beginnt, sie zuerst weg, und Kanten, auf denen schon ein
  Linienstück liegt, überspringt es. Drücke ihn noch einmal, um wieder die Schleife zu
  zeichnen.

### Tastatur (Keyboard)

- Die **Pfeiltasten** bewegen einen Zeiger. **Ctrl+Pfeil** zeichnet oder entfernt das
  Linienstück auf dieser Seite des Zeigerfelds, **Shift+Pfeil** setzt oder entfernt dort
  ein Kreuz. **Enter** startet ein Ziehen mit der Tastatur vom Zeigerfeld aus: Beweg dich
  mit den Pfeiltasten und drücke noch einmal Enter, um den Weg festzulegen, oder
  **Leertaste**, um ihn aufzugeben.
- **X** ist der Knopf **Kreuz**; ist er an, legt auch ein Ziehen mit der Tastatur Kreuze.

## Einstellungen

- **Breite** und **Höhe** des Gitters in Feldern (jeweils mindestens fünf).
- **Schwierigkeit**: Rätsel auf _Leicht_ löst du, indem du über jede Perle und die Felder
  direkt daneben nachdenkst. Rätsel auf _Knifflig_ verlangen zusätzlich, dass du merkst,
  wann ein Linienstück eine kleine Schleife zu früh schließen und andere Perlen
  abschneiden würde. (Ein 5×5-Gitter auf Knifflig wird als Leicht erzeugt, wie im Original.)
- **Unlösbare erlauben**: alle Perlen behalten, die die Schleife trägt, statt sie auf
  einen minimalen, eindeutig lösbaren Satz zusammenzustreichen. Eine
  Fehlersuch-Einstellung, aus dem Original übernommen.
`,B=e({default:()=>V}),V=`# Stifte

Ein Brett voller Stifte mit einem leeren Loch, auf einem zufälligen Brett auch mit mehreren. Ein Stift darf waagerecht oder
senkrecht über einen benachbarten Stift in das leere Loch direkt dahinter springen; der
übersprungene Stift wird entfernt. Spring weiter, bis nur noch ein einziger Stift auf dem
Brett steht.

Das ist das alte Brettspiel Solitär, auch Steckhalma genannt. Das Brett **Kreuz** ist die bekannte
englische Form, das Brett **Achteck** die europäische (das mit dem leeren Loch außerhalb
der Mitte beginnt, weil es sich von der Mitte aus nicht zu Ende spielen lässt), und
**Zufällig** liefert eigenwillige Formen, die der Computer wachsen lässt. Leere Flächen
ohne Loch gehören einfach nicht zum Brett.

Endgültig festfahren kannst du dich nicht: Bleibt kein Sprung mehr übrig und steht mehr
als ein Stift, ist das Spiel vorbei – aber mit Rückgängig kommst du so weit zurück, wie
du willst. Die Statuszeile zählt die übrigen Stifte und die gemachten Züge.

## Bedienung

### Maus und Touchscreen

- **Ziehe** einen Stift und lass ihn in einem leeren Loch genau zwei Felder weiter
  fallen, in gerader Linie über einen anderen Stift hinweg. Bei jedem anderen Ziel geht
  der Stift zurück.
- Oder **klicke** auf einen Stift, um ihn aufzunehmen (er wird orange, und die möglichen
  Ziellöcher werden markiert), und klicke dann auf das Loch, in das er springen soll.
  Klickst du noch einmal auf denselben Stift, legst du ihn wieder hin.

### Tastatur (Keyboard)

- Die **Pfeiltasten** bewegen einen Zeiger über das Brett.
- **Enter** oder **Leertaste** auf einem Stift nimmt ihn auf; eine Pfeiltaste lässt ihn dann
  in diese Richtung springen, falls das ein erlaubter Zug ist, und **Enter** legt ihn
  wieder hin.

## Einstellungen

- **Breite** und **Höhe** des Bretts, jeweils mindestens 4.
- **Brettform**: _Kreuz_ und _Achteck_ sind die überlieferten Formen; es gibt sie nur als
  7×7. _Zufällig_ erzeugt jedes Mal eine andere Brettform, immer eine, die sich auf einen
  einzigen Stift zusammenschrumpfen lässt, denn sie ist gebaut worden, indem die Sprünge
  von einem einzelnen Stift aus rückwärts gelaufen sind.
`,H=e({default:()=>U}),U=`# Reichweite

In manchen Feldern des Gitters steht eine Zahl. Male Felder schwarz, sodass vier Dinge
gleichzeitig gelten:

- kein Feld mit einer Zahl ist schwarz;
- keine zwei schwarzen Felder berühren sich an einer Kante (Ecken sind in Ordnung);
- die weißen Felder bilden zusammen einen einzigen zusammenhängenden Bereich, Kante an
  Kante verbunden;
- jede Zahl zählt die weißen Felder, die ihr eigenes Feld sehen kann: sich selbst plus
  alles in gerader Linie nach oben, unten, links und rechts, bis ein schwarzes Feld oder
  der Rand des Gitters im Weg ist.

Das ist Nikolis _Kurodoko_, auch bekannt als _Kuromasu_ oder _Where is Black Cells_. Eine
Zahl, die schon genug Felder sieht, hat hinter jeder Strecke, die sie sehen kann, ein
schwarzes Feld; eine Zahl, die zu viel sähe, wenn ein einzelnes unbekanntes Feld weiß
wäre, hat genau dort ein schwarzes Feld. Ein Feld schwarz zu malen, das die einzige
Verbindung zwischen zwei Gruppen weißer Felder ist, ist nie richtig. Jedes Rätsel lässt
sich mit solchen Überlegungen zu Ende bringen; raten musst du nie.

Fehler zeigen sich in Rot: Berühren sich schwarze Felder, bekommt die Gruppe einen roten
Rahmen, weiße Felder, die vom Hauptbereich abgeschnitten sind, bekommen einen roten
Umriss, und eine Zahl wird rot, wenn sie nicht mehr genug Felder sehen kann oder schon
sicher zu viele sieht. Das Rätsel ist fertig, wenn keine Regel verletzt ist; die weißen
Felder musst du nicht mit Punkten versehen.

## Bedienung

### Maus und Touchscreen

- **Klicke** auf ein Feld, um es schwarz zu malen. Klicke noch einmal, um einen Punkt
  daraus zu machen (ein Feld, von dem du weißt, dass es weiß ist), und noch einmal, um es
  zu leeren.
- **Rechtsklicken** geht andersherum durch: Punkt, dann schwarz, dann leer.
- **Ziehe**, um mehrere Felder auf einmal zu malen, und **ziehe mit rechts**, um sie
  andersherum durchzugehen. Betroffen sind nur Felder, die genauso angefangen haben wie
  das erste – eine Bahn aus Punkten lässt deine schwarzen Felder also in Ruhe.
- **Radieren** (der Radierknopf neben Rückgängig) lässt einen Klick ein Feld stattdessen
  leeren, und ein Ziehen leert jedes schwarze Feld und jeden Punkt, über den es fährt,
  egal was davon. Drücke ihn noch einmal, um wieder zu malen.
- **Tipp** füllt ein Feld aus, das sich aus dem ergibt, was schon auf dem Brett steht –
  oder berichtigt ein Feld, das der Lösung widerspricht. Das Rätsel bleibt im Spiel, und
  nach ein paar Tipps gehören der Sieg und sein Stern trotzdem dir.
- **Lösen** füllt das ganze Gitter aus und setzt in jedes weiße Feld einen Punkt.

### Tastatur (Keyboard)

- Die **Pfeiltasten** bewegen einen Zeiger über das Gitter.
- **Enter** wirkt wie ein Linksklick auf das Feld unter dem Zeiger und **Leertaste** wie
  ein Rechtsklick.
- **E** ist der Knopf **Radieren** und **H** der Knopf **Tipp**.

## Einstellungen

- **Breite** und **Höhe** des Gitters. Die festen Größen reichen von 9×6 bis 16×11; alles
  bis 30×30 lässt sich erzeugen, wobei winzige Gitter aus ein oder zwei Feldern keine
  fairen Rätsel hergeben.
`,W=e({default:()=>G}),G=`# Rechtecke

In manchen Feldern des Gitters steht eine Zahl. Zerschneide das ganze Gitter in
Rechtecke, sodass jedes Rechteck genau eine Zahl enthält und diese Zahl die Fläche des
Rechtecks ist (Breite mal Höhe). Eine 6 sitzt zum Beispiel in einem Block aus 1×6, 2×3,
3×2 oder 6×1; welcher davon, und wo die Zahl darin sitzt, musst du aus den Nachbarn
erschließen.

Die Rätsel entstehen zufällig, und standardmäßig werden die Zahlen so gesetzt, dass nur
eine einzige Aufteilung des Gitters aufgeht. Das ursprüngliche Rätsel stammt aus der
japanischen Zeitschrift Nikoli, wo es Shikaku heißt.

## Bedienung

### Maus und Touchscreen

- **Ziehe** über einen Bereich, um ein Rechteck darum zu zeichnen: Sein Umriss wird
  gezeichnet, und alle Linien darin verschwinden. Ziehst du an einer Gitterlinie entlang,
  wird genau diese Linie gezeichnet.
- **Klicke** auf eine Gitterlinie, um genau diese Kante hinzuzufügen oder zu entfernen.
- **Ziehe mit rechts** über einen Bereich, um die Linien darin zu löschen und den Umriss
  in Ruhe zu lassen. **Rechtsklicken** auf eine Gitterlinie schaltet sie genauso um wie
  gewöhnliches Klicken.
- **Radieren** (der Radierknopf neben Rückgängig) lässt auch gewöhnliches Ziehen löschen:
  Ziehe über einen Bereich, um die Linien darin zu löschen, oder klicke auf eine
  Gitterlinie, um sie zu entfernen. Solange er an ist, fügt ein Klick nie eine Linie hinzu.
  Drücke ihn noch einmal, um wieder zu zeichnen.
- **Lösen** erledigt die ganze Aufteilung für dich.

Während du ziehst, wird das Rechteck, das du gerade zeichnen willst, umrissen, und seine
Größe steht in der Statuszeile. Ein fertiges Rechteck der richtigen Größe wird
schattiert. Ein geschlossenes Rechteck, das nie richtig sein kann, wird gekennzeichnet:
Seine Zahl wird rot, wenn es die falsche Größe dafür hat, und es wird schraffiert, wenn
es überhaupt keine Zahl enthält. Das Rätsel ist fertig, wenn jedes Feld in einem
richtigen Rechteck liegt.

### Tastatur (Keyboard)

- Die **Pfeiltasten** bewegen einen Zeiger.
- **Enter** beginnt, ein Rechteck vom Zeiger aus aufzuziehen; beweg den Zeiger zur
  gegenüberliegenden Ecke und drücke noch einmal **Enter**, um es zu zeichnen.
- **Leertaste** macht dasselbe, löscht aber stattdessen das Innere des Rechtecks.
- **E** ist der Knopf **Radieren**.

## Einstellungen

- **Breite** und **Höhe** des Gitters. Die festen Größen gehen von 7×7 bis 19×19.
- **Ausdehnungsfaktor** – erzeugt ein kleineres Gitter und streckt es auf die gewünschte
  Größe, sodass das Rätsel weniger und größere Rechtecke bekommt. 0 (der Standard) heißt
  kein Strecken; 0.5 macht das anfängliche Gitter in jede Richtung zwei Drittel so groß
  wie das endgültige. Große Werte lassen nur eine Handvoll Rechtecke übrig und machen das
  Rätsel trivial.
- **Eindeutige Lösung garantieren** – normalerweise an. Schaltest du es aus, werden die
  Zahlen irgendwo in ihren Rechtecken platziert, was schneller geht und Rätsel mit
  mehreren Antworten ergeben kann; dann zählt jede gültige Aufteilung als gelöst.
`,se=e({default:()=>K}),K=`# Gleiche Farbe

Das Brett ist voller farbiger Felder. Suche dir eine Gruppe aus zwei oder mehr Feldern
derselben Farbe, die sich an den Seiten berühren, und entferne sie; die Felder über der
Lücke fallen nach unten, und sobald eine Spalte leer ist, rücken die Spalten rechts davon
nach und schließen sie. Räume das ganze Brett leer, um zu gewinnen. Bleiben Felder übrig,
aber haben keine zwei benachbarten dieselbe Farbe, geht nichts mehr – mach rückgängig und
probiere eine andere Reihenfolge.

Große Gruppen sind viel mehr wert als kleine: _n_ Felder zu entfernen bringt mit der
üblichen Wertung (_n_ − 2)² Punkte, ein Paar also gar nichts, drei Felder einen Punkt,
zehn Felder 64. Die Statuszeile zeigt deine Punktzahl und, solange eine Gruppe ausgewählt
ist, wie viele Felder sie hat und was sie einbringen würde.

Jedes erzeugte Brett (außer du schaltest die Einstellung ab) ist so gebaut, dass es sich
vollständig leerräumen _lässt_ – eine Reihenfolge zu finden, die auch noch viele Punkte
bringt, ist allerdings deine Sache.

Es gibt keinen Lösen-Knopf: Der Computer weiß, dass das Brett zu räumen ist, aber er
verrät dir nicht, wie.

## Bedienung

### Maus und Touchscreen

- **Klicke** auf ein Feld, um die ganze Gruppe auszuwählen, zu der es gehört; die Gruppe
  wird heller und mit dickem Rand gezeichnet. **Klicke noch einmal auf die ausgewählte
  Gruppe**, um sie zu entfernen. Klickst du woanders hin, wandert stattdessen die Auswahl.
- **Rechtsklicke** auf die ausgewählte Gruppe, um die Auswahl aufzuheben.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger über das Brett (an den Rändern geht es auf der
  anderen Seite weiter).
- **Enter** wählt die Gruppe unter dem Zeiger aus, und noch einmal gedrückt entfernt es
  die Gruppe.
- **Leertaste** auf der ausgewählten Gruppe hebt die Auswahl auf.

## Einstellungen

- **Breite** und **Höhe** des Bretts.
- **Anzahl Farben**, von 3 bis 9 (2 ist erlaubt, wenn die Lösbarkeit nicht garantiert
  wird). Mehr Farben bedeuten kleinere Gruppen und ein schwereres Brett.
- **Punktesystem**: _(n−2)²_, die Voreinstellung, oder _(n−1)²_, das auch Paare belohnt.
- **Lösbarkeit garantieren**: ist der Haken gesetzt, wird das Brett rückwärts aus einem
  leeren Brett aufgebaut, sodass es mindestens eine Reihenfolge gibt, die es leerräumt.
  Nimm den Haken weg für ein schlicht zufälliges Brett, das schneller erzeugt ist und zu
  größeren Bereichen neigt, dafür aber vielleicht gar nicht zu räumen ist.
`,ce=e({default:()=>le}),le=`# Wegweiser

Jedes Feld trägt einen Pfeil, und ein paar Felder tragen Zahlen. Verbinde die Felder zu
einem einzigen Pfad, nummeriert von 1 bis N (N ist die Anzahl der Felder), sodass der
Nachfolger jedes Feldes irgendwo entlang seines Pfeils liegt: Das Feld mit der 1 zeigt auf
die 2, die auf die 3, und so weiter. Ein Nachfolger darf in Pfeilrichtung beliebig weit
entfernt liegen, nicht nur direkt nebenan. Das letzte Feld, mit einem Stern markiert,
zeigt nirgendwohin.

Die erste und die letzte Zahl stehen immer da, und dazu genug weitere, damit der Pfad
eindeutig ist. Jedes Rätsel hat genau eine Lösung und lässt sich allein durch Nachdenken
finden.

Fehler werden rot gezeigt: zwei Felder mit derselben Zahl, eine Zahl, deren Nachfolger
nicht entlang ihres Pfeils liegt, oder eine Kette, die über ihre vorgegebene Zahl
hinausläuft. Das Rätsel ist fertig, wenn die Zahlen 1 bis N durch jedes Feld laufen und
nirgends etwas rot ist.

## Bedienung

### Maus und Touchscreen

- **Ziehe** von einem Feld zu einem Feld entlang seines Pfeils, um das zweite zum
  Nachfolger des ersten zu machen. **Ziehe mit rechts**, und es geht andersherum: von
  einem Feld zu dem Feld, das davor kommen soll.
- Sobald zwei verbundene Felder eine Zahl enthalten, breitet sich die Zahl über die ganze
  Kette aus und wird blau gezeigt. Eine Kette, die noch keine Zahl hat, wird mit einem
  Buchstaben und Abständen beschriftet (\`a\`, \`a+1\`, \`a+2\`, ...); sobald sie ein
  nummeriertes Feld berührt, werden aus den Buchstaben Zahlen. Hängst du eine Kette an ein
  Feld, das schon verbunden ist, ersetzt das die alte Verbindung.
- Jedes Feld, dem noch ein Vorgänger fehlt, zeigt einen kleinen Punkt in seiner linken
  unteren Ecke, und ein Pfeil verblasst, sobald sein Feld einen Nachfolger hat. Die
  Aufgabe ist also immer, einen kräftigen Pfeil mit einem gepunkteten Feld zu verbinden.
- **Rechtsklicke** auf ein Feld, um beide Verbindungen zu lösen. **Ziehe** ein Feld vom
  Brett herunter, um dasselbe zu tun, oder **ziehe mit rechts** eines vom Brett herunter,
  um seine ganze Kette aufzulösen.
- **Trennen** (der Knopf mit dem gerissenen Kettenglied neben Rückgängig) lässt einen Klick
  auf ein Feld seine ganze Kette auflösen, jede einzelne Verbindung, und ein Feld vom Brett
  zu ziehen tut dasselbe. Von Feld zu Feld zu ziehen verbindet sie weiterhin. Drücke ihn
  noch einmal, um ihn auszuschalten.
- **Lösen** trägt den vollständigen Pfad ein.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger.
- **Enter** auf einem Feld beginnt dort eine Verbindung; bewege den Zeiger zum Nachfolger
  und drücke noch einmal **Enter**, um die Verbindung herzustellen (drücke es auf
  demselben Feld, um abzubrechen).
- **Leertaste** oder **X** löst die Verbindungen des Feldes unter dem Zeiger; **Shift + X**
  löst seine ganze Kette auf.
- **B** ist der Knopf **Trennen**.

## Einstellungen

- **Breite** und **Höhe** des Gitters, von 2 bis 12 Feldern (2×2 ist zu klein, um zu
  funktionieren).
- **Start und Ziel in den Ecken**: ist das gesetzt, liegt die 1 immer im Feld links oben
  und N im Feld rechts unten. Sonst landen beide Enden zufällig, werden aber trotzdem
  beide gezeigt.
`,ue=e({default:()=>de}),de=`# Singles

In jedem Feld des Gitters steht eine Zahl. Schwärze einige Felder (und versteck damit ihre
Zahlen), sodass drei Dinge gleichzeitig gelten:

- unter den weißen Feldern einer Zeile oder Spalte kommt keine Zahl mehr als einmal vor;
- keine zwei schwarzen Felder berühren sich an einer Kante (an den Ecken ist es erlaubt);
- die weißen Felder bilden zusammen einen einzigen Bereich, Kante an Kante verbunden.

Das ist Nikolis _Hitori_. Ein guter Anfang ist, nach zwei gleichen Zahlen mit einem Feld
dazwischen zu suchen: Eine der beiden muss schwarz sein, also muss das Feld in der Mitte
weiß sein. Zwei gleiche Zahlen direkt nebeneinander bedeuten, dass jedes weitere
Vorkommen dieser Zahl in ihrer Linie schwarz ist.

Fehler zeigen sich in Rot: schwarze Felder, die sich berühren, bekommen einen roten Rahmen
um die Gruppe, weiße Felder, die vom Hauptbereich abgeschnitten sind, eine rote Umrandung,
und zwei eingekreiste Felder mit derselben Zahl in einer Linie werden rot gezeichnet.

Das Rätsel ist fertig, wenn keine Regel gebrochen ist; die weißen Felder musst du nicht
einkreisen.

## Bedienung

### Maus und Touchscreen

- **Klicke** auf ein Feld, um es zu schwärzen; klicke noch einmal, um es zurückzuholen.
- **Rechtsklicke**, um einen Kreis um eine Zahl zu ziehen und festzuhalten, dass sie
  sicher weiß ist; noch einmal rechtsklicken entfernt den Kreis. Beides, klicken und
  rechtsklicken, löscht die Markierung, die ein Feld schon trägt.
- **Lösen** füllt das ganze Gitter aus und kreist jedes weiße Feld ein.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger über das Gitter (an den Rändern geht es auf der
  anderen Seite weiter).
- **Enter** schwärzt das Feld unter dem Zeiger oder holt es zurück, und **Leertaste** kreist es
  ein oder wieder aus.

## Einstellungen

- **Breite** und **Höhe** des Gitters, von 2 bis 20 für erzeugte Rätsel.
- **Schwierigkeit**: Rätsel auf _Leicht_ brauchen nur die direkten Schlüsse – ein
  schwarzes Feld macht seine Nachbarn weiß, eine eingekreiste Zahl macht ihre Zwillinge
  schwarz, dazu das Paar mit Lücke, das Paar nebeneinander, ein weißes Feld mit nur einem
  Ausweg und die kleinen Muster in den Ecken. Rätsel auf _Knifflig_ verlangen zusätzlich,
  dass du bemerkst, wann das Schwärzen eines Feldes den weißen Bereich in zwei Teile
  schneiden würde, und dass du Paare von Paaren nutzt, die um ein Feld versetzt sind. Jedes
  Rätsel hat genau eine Lösung.
`,fe=e({default:()=>pe}),pe=`# Sechzehn

Ein Schiebepuzzle ohne leeres Feld. In jedem Feld liegt ein nummerierter Stein, und statt
einen einzelnen Stein zu schieben, schiebst du eine ganze Zeile oder Spalte um einen
Schritt. Der Stein, der über den Rand hinausgeschoben wird, kommt am anderen Ende
derselben Linie gleich wieder herein, als wäre das Gitter um einen Donut gewickelt.
Sortiere die Steine so, dass sie von der linken oberen Ecke an hochzählen, von links nach
rechts und dann Zeile für Zeile.

## Bedienung

### Maus und Touchscreen

- **Klicke** auf einen der Pfeile am Rand, um diese Zeile oder Spalte einen Schritt in
  Pfeilrichtung zu schieben. **Rechtsklicke** auf einen Pfeil, um die Linie andersherum zu
  schieben.
- **Lösen** ersetzt das Gitter einfach durch das geordnete. Es zeigt dir keinen Weg
  dorthin, aber du bekommst ein sauberes Brett, um Manöver auszuprobieren.

### Tastatur (Keyboard)

- **Pfeiltasten** führen eine Hervorhebung um den Ring der Pfeile am Rand.
- **Enter** schiebt die hervorgehobene Linie in Pfeilrichtung und **Leertaste** andersherum.

## Einstellungen

- **Breite** und **Höhe** des Gitters. Auf Gittern, bei denen beide Seiten ungerade sind,
  ist nur die Hälfte aller Anordnungen erreichbar, deshalb liefert der Generator nur
  erreichbare.
- **Anzahl Mischzüge**: Lass sie auf 0 für eine völlig zufällige Anordnung, oder gib eine
  Zahl ein, um das geordnete Gitter mit genau so vielen einzelnen Schiebezügen zu
  verwürfeln. Die Idee ist dann, herauszufinden, welche Züge gemacht wurden, und sie in
  derselben Anzahl Züge rückgängig zu machen; je mehr Mischzüge du verlangst, desto
  wahrscheinlicher gibt es auch eine kürzere Lösung.
`,me=e({default:()=>he}),he=`# Schrägstriche

Ein Gitter aus leeren Feldern, an manchen seiner Ecken stehen eingekreiste Zahlen. Zeichne
durch jedes Feld eine Diagonale, schräg in die eine oder die andere Richtung, sodass:

- an jeder eingekreisten Zahl genau so viele Linien ihren Eckpunkt berühren (eine 4 sitzt
  mitten in einem Kreuz, bei einer 0 lehnt sich jede Linie in der Nähe von ihr weg);
- die Linien nie zu einer geschlossenen Schleife zusammenlaufen.

Eine Zahl, die schon zu viele Linien hat oder nicht mehr genug bekommen kann, wird rot,
und jede Linie, die zu einer Schleife gehört, ebenfalls. Das Rätsel ist fertig, wenn jedes
Feld eine Linie hat und nichts rot ist.

## Bedienung

### Maus und Touchscreen

- **Klicke** auf ein Feld, um ein \`\\\` hineinzuzeichnen; klicke noch einmal, um ein \`/\`
  daraus zu machen, und noch einmal, um es zu leeren.
- **Rechtsklicke**, und es geht andersherum: \`/\`, dann \`\\\`, dann leer. So lässt sich ein
  Feld mit nur einer Taste in beide Richtungen setzen.
- **Lösen** füllt das ganze Gitter aus.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger über das Gitter.
- **Enter** schaltet das Feld unter dem Zeiger weiter, als würdest du klicken, und
  **Leertaste**, als würdest du rechtsklicken.

## Einstellungen

- **Breite** und **Höhe** des Gitters, in Feldern.
- **Schwierigkeit**: Rätsel auf _Leicht_ lassen sich Feld für Feld lösen – eine Zahl, die
  schon erfüllt ist oder die jedes verbleibende Feld braucht, und Felder, bei denen eine
  der beiden Linien eine Schleife schließen würde. Rätsel auf _Schwer_ verlangen
  zusätzlich Überlegungen zu Paaren von Feldern, die gleich geneigt sein müssen, noch bevor
  du weißt, wie herum, und zu Bereichen, die eine Linie vom Rand des Gitters abschneiden
  würde. Raten ist nie nötig; jedes Rätsel hat genau eine Lösung.
`,ge=e({default:()=>_e}),_e=`# Solo

Fülle das quadratische Gitter mit Ziffern, sodass jede Zeile, jede Spalte und jeder dick
umrandete Block jede Ziffer genau einmal enthält. Manche Felder sind als Hinweis
vorgegeben; den Rest darfst du herausfinden. Das normale 3×3-Rätsel ist das vertraute
Sudoku, aber die Blöcke dürfen auch Rechtecke sein (ein 2×3-Rätsel hat sechs Blöcke aus
3×2), und das Gitter kann bis zu 16×16 groß sein – dann stehen die Buchstaben a, b, c…
für die Ziffern über 9.

Drei Varianten lassen sich einschalten:

- **X**: Die beiden Hauptdiagonalen, leicht schattiert, müssen ebenfalls jede Ziffer
  enthalten.
- **Jigsaw**: Die Blöcke sind unregelmäßige Formen, die von Rätsel zu Rätsel wechseln.
- **Killer**: Es gibt keine vorgegebenen Ziffern. Stattdessen ist das Gitter in
  gestrichelte „Käfige“ geteilt, jeder mit der Summe der Ziffern darin. In einem Käfig
  darf keine Ziffer zweimal vorkommen.

Jedes Rätsel hat genau eine Lösung, und die ist auf der Schwierigkeit, die du gewählt
hast, immer durch reines Nachdenken zu erreichen.

## Bedienung

Ziffern, die mit einer anderen in ihrer Zeile, ihrer Spalte, ihrem Block, ihrer Diagonale
oder ihrem Käfig kollidieren, werden rot gezeigt, ebenso ein Käfig, dessen Ziffern nicht
seine Summe ergeben. **Tipp** füllt ein einzelnes Feld aus – das leichteste, das noch offen ist – oder
berichtigt die erste Ziffer, die der Lösung widerspricht, und überlässt dir den Rest;
das Rätsel läuft weiter, und nach ein paar Tipps gehören der Sieg und sein Stern trotzdem
dir. **Lösen** trägt die ganze Lösung ein und beendet das Rätsel.

### Maus und Touchscreen

- **Linksklicke** auf ein leeres Feld, um es auszuwählen, und schreibe dann mit dem Tastenfeld
  eine Ziffer hinein (die Buchstabentasten sind die Ziffern über 9). Klickst du das ausgewählte
  Feld noch einmal an, wird die Auswahl aufgehoben.
- **⌫** auf dem Tastenfeld leert das gewählte Feld wieder, und **✎** hält die
  Bleistiftnotizen fest, sodass das Nächste, was du wählst, als kleine Notiz statt als
  Antwort landet.
- **Rechtsklicke** auf ein Feld, um es gleich für **Bleistiftnotizen** auszuwählen.
  Bleistiftnotizen sind nur da, um dir beim Denken zu helfen; das Spiel kümmert sich nicht
  um sie, und eine eingetragene Ziffer löscht sie.
- **Notizen** im Pausenmenü füllt jedes leere Feld mit allen Bleistiftnotizen –
  für alle, die lieber mit allem anfangen und Kandidaten wegstreichen.
- **Hervorheben** (die Lupe neben Rückgängig) hebt jedes Feld hervor, in dem dieselbe
  Ziffer steht wie in dem Feld, das du zuletzt angeklickt hast (Vorgaben eingeschlossen), und zeigt diese Ziffer
  unter den Bleistiftnotizen fett. Drücke sie noch einmal, um das auszuschalten.

### Tastatur (Keyboard)

- **Gib eine Ziffer ein** (oder einen Buchstaben für Ziffern über 9), um das gewählte Feld
  zu füllen.
- **Leertaste** oder **Backspace** leert das gewählte Feld (die Ziffer oder alle seine
  Bleistiftnotizen).
- **Pfeiltasten** bewegen einen Tastaturzeiger. **Enter** schaltet den Zeiger zwischen
  normaler Eingabe und Bleistiftnotizen um, und eingegebene Ziffern landen im Feld
  darunter.
- **M** ist der Knopf **Notizen** und **L** der Knopf **Hervorheben**.

## Einstellungen

- **Spalten je Unterblock** und **Zeilen je Unterblock**: Das Gitter ist so groß wie ihr
  Produkt, und jeder Block ist so breit wie die Anzahl der Zeilen und so hoch wie die
  Anzahl der Spalten. Im Jigsaw-Modus ist das Produkt einfach die Größe des Gitters.
- **X**, **Jigsaw** und **Killer** schalten die oben beschriebenen Varianten ein.
  Killer-Rätsel sind auf Gitter mit höchstens neun Ziffern beschränkt.
- **Symmetrie**: wie sich das Muster der Hinweise selbst spiegelt. Mehr Symmetrie sieht
  hübscher aus, lässt aber meist mehr Hinweise stehen als unbedingt nötig.
- **Schwierigkeit**: die schwerste Art von Überlegung, die das Rätsel verlangt. Auf _Sehr leicht_
  und _Leicht_ gibt es immer ein Feld, das sich direkt ausfüllen lässt; auf _Mittel_ musst du
  überlegen, wo eine Ziffer über einen Block und eine Linie hinweg stehen kann; _Schwer_ verlangt
  Mengen von Feldern, die zusammen eine Menge von Ziffern besetzen; _Experte_ legt Zwangsketten
  obendrauf; und Rätsel auf _Extrem_ sind ohne Raten und Zurücknehmen nicht zu schaffen. Schwere
  Rätsel brauchen länger, bis sie erzeugt sind.
`,ve=e({default:()=>ye}),ye=`# Zelte

Das Gitter ist ein Campingplatz: In manchen Feldern stehen Bäume, der Rest ist leerer
Boden. Stelle Zelte auf leere Felder, sodass:

- es genau so viele Zelte wie Bäume gibt;
- sich jeder Baum mit seinem eigenen Zelt auf einem Feld direkt daneben paaren lässt
  (darüber, darunter, links oder rechts – nicht diagonal). Ein Zelt darf zufällig auch
  neben anderen Bäumen stehen, aber jedes Zelt gehört zu einem Baum und jeder Baum zu einem
  Zelt;
- sich keine zwei Zelte berühren, nicht einmal an einer Ecke;
- die Zahlen am rechten und am unteren Rand angeben, wie viele Zelte in jeder Zeile und
  Spalte stehen.

Die Hinweise sind nur diese Zahlen, das ganze Rätsel besteht also darin, herauszufinden, wo
die Zelte stehen müssen. Jedes Rätsel hier lässt sich allein durch Nachdenken lösen, ohne
zu raten.

## Bedienung

Zelte, die sich berühren, werden rot gezeigt, mit einer Markierung an der gemeinsamen Kante
oder Ecke, und ebenso jede Gruppe von Zelten mit zu wenigen Bäumen dazwischen und jede
Gruppe von Bäumen, die keinen Platz mehr für all ihre Zelte hat. Eine Zahl wird grau,
sobald ihre Linie die richtige Anzahl Zelte hat, und rot, sobald sie nicht mehr zu erfüllen
ist. **Lösen** stellt alle Zelte für dich auf.

### Maus und Touchscreen

- **Klicke** auf ein leeres Feld, um dort ein Zelt aufzustellen; klicke das Zelt an, um es
  wieder zu entfernen.
- **Rechtsklicke** auf ein leeres Feld, um es als Gras zu markieren – hier kommt sicher
  kein Zelt hin; noch einmal rechtsklicken macht es wieder leer. Beides, klicken und
  rechtsklicken, leert ein Feld, in dem schon etwas steht.
- **Ziehe mit rechts** eine Zeile oder Spalte entlang, um jedes leere Feld, über das du
  kommst, in einem Rutsch zu Gras zu machen – praktisch, um eine Linie fertigzumachen,
  sobald all ihre Zelte stehen. Zelte und schon gesetzte Markierungen bleiben unberührt.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger.
- **Enter** stellt ein Zelt unter dem Zeiger auf oder entfernt es.
- **Leertaste** setzt oder löscht Gras unter dem Zeiger.

## Einstellungen

- **Breite** und **Höhe** des Gitters, von 4 bis 20 Feldern.
- **Schwierigkeit**: Rätsel auf _Leicht_ löst du mit Zählen und dem Blick darauf, was jeder
  Baum und jedes Zelt braucht. Rätsel auf _Knifflig_ verlangen zusätzlich, dass du abwägst,
  wie die möglichen Plätze in einer Linie ihre Nachbarn einschränken, und dass du
  nachdenkst, welche Felder sich die Bäume teilen können.
`,be=e({default:()=>xe}),xe=`# Türme

Auf jedes Feld des Gitters kommt ein Turm, mit einer Höhe von 1 bis zur Größe des Gitters.
Jede Zeile und jede Spalte muss jede Höhe genau einmal enthalten. Die Zahlen rings um den
Rand sagen dir, wie viele Türme du siehst, wenn du von dieser Seite in die Zeile oder
Spalte hineinschaust: Ein Turm verdeckt jeden kleineren Turm hinter sich. Ein Hinweis, der
so groß ist wie das Gitter, bedeutet, dass die Höhen die ganze Linie entlang ansteigen; ein
Hinweis von 1 bedeutet, dass der höchste Turm direkt an diesem Rand steht.

Größere und schwerere Rätsel starten mit ein paar schon gebauten Türmen und lassen einige
Hinweise am Rand weg. Ziffern, die mit einer anderen in ihrer Zeile oder Spalte
kollidieren, und Hinweise, die die bisher gebauten Türme nicht mehr erfüllen können, werden
rot gezeigt. Bekannter ist dieses Rätsel als Skyscrapers.

## Bedienung

Die vorgegebenen Türme lassen sich nicht ändern, und **Lösen** trägt die Antwort ein.

### Maus und Touchscreen

- **Linksklicke** auf ein Feld, um es auszuwählen, und baue dann mit den Tasten auf
  dem Bildschirm einen Turm dieser Höhe. **⌫** auf dem Tastenfeld leert das Feld wieder.
- **✎** auf dem Tastenfeld hält die **Bleistiftnotizen** fest: Was du dann wählst, landet
  als kleine Notiz, das Feld bleibt ausgewählt, sodass du mehrere hinzufügen kannst, und
  dieselbe Ziffer noch einmal radiert eine wieder aus. Eine echte Ziffer einzutragen
  wischt die Bleistiftnotizen in diesem Feld weg.
- **Rechtsklicke** auf ein Feld, um es gleich für Bleistiftnotizen auszuwählen.
- **Notizen** im Pausenmenü füllt jedes leere Feld mit allen Bleistiftnotizen.
- **Hervorheben** (die Lupe neben Rückgängig) hebt jedes Feld hervor, in dem dieselbe
  Höhe steht wie in dem Feld, das du zuletzt angeklickt hast, und zeigt diese Höhe unter
  den Bleistiftnotizen fett. Drücke sie noch einmal, um das auszuschalten.

### Tastatur (Keyboard)

- **Gib eine Ziffer ein**, um im gewählten Feld einen Turm dieser Höhe zu bauen. **Leertaste**
  oder **Backspace** leert es.
- **Pfeiltasten** bewegen einen Tastaturzeiger. **Enter** schaltet ihn zwischen Ziffern und
  Bleistiftnotizen um; eingegebene Ziffern landen im hervorgehobenen Feld, und der Zeiger
  bleibt stehen.
- **M** ist der Knopf **Notizen** und **L** der Knopf **Hervorheben**.

## Einstellungen

- **Gittergröße** – von 3 bis 9. Türme werden als einzelne Ziffern eingegeben, deshalb ist
  bei 9 Schluss.
- **Schwierigkeit** – Auf Leicht reichen die direkten Folgen jedes Hinweises und der Zeilen- und
  Spaltenregel. Auf Schwer sollst du jede Anordnung durchgehen, die ein Hinweis zulässt, und
  Mengen von Feldern erkennen, die sich ein paar Kandidaten teilen. Experte legt schwerere
  Mengenüberlegungen und Zwangsketten obendrauf, und Rätsel auf Extrem sind ohne etwas
  Ausprobieren nicht zu schaffen, auch wenn die Lösung immer noch eindeutig ist.
`,Se=e({default:()=>Ce}),Ce=`# Gleise

Eine Bahnlinie kommt links ins Gitter und verlässt es unten; beide Enden siehst du als
Schienen, die vom Brett laufen. Vervollständige die Strecke dazwischen. Das Gleis ist eine
einzige Route ohne Abzweigungen, Schleifen oder Kreuzungen, gebaut nur aus geraden Stücken
und Viertelkreis-Kurven, also gehen von jedem Feld, das es besucht, genau zwei Schienen ab.
Ein paar Stücke liegen schon auf den grau hinterlegten Feldern und lassen sich nicht ändern.
Die Zahl über jeder Spalte und neben jeder Zeile sagt, durch wie viele Felder dieser Linie
das fertige Gleis läuft.

Zahlen werden grau, sobald ihre Linie die richtige Anzahl Gleisfelder hat, und rot, wenn
eine Linie nicht mehr aufgehen kann: zu viele Gleisfelder, oder so viele ausgekreuzte
Felder, dass nicht genug Platz übrig bleibt. Felder, an denen Schienen falsch
zusammentreffen (drei Schienen in einem Feld, eine geschlossene Schleife, oder Gleis, das
übrig bleibt, sobald Eingang und Ausgang verbunden sind), werden ebenfalls rot gezeichnet.

## Bedienung

**Lösen** legt das ganze Gleis und entfernt dabei alle deine Markierungen, die ihm
widersprechen. Das Rätsel ist fertig, wenn ein durchgehendes Gleis den Eingang mit dem
Ausgang verbindet und jede Zahl aufgeht.

### Maus und Touchscreen

- **Ziehe** durch eine Reihe benachbarter Felder, um Schienen dazwischen zu legen. Der Weg
  darf Ecken nehmen; ein Ziehen, das nur schon vorhandenen Schienen folgt, hebt sie
  stattdessen wieder auf.
- **Klicke** nah an die Seite eines Feldes, um durch diese Seite eine einzelne Schiene
  hinzuzufügen oder wegzunehmen. Klicke in die Mitte eines Feldes, um es als „hier läuft
  Gleis“ zu markieren, ohne zu sagen durch welche Seiten – praktisch beim Zählen – und
  klicke noch einmal, um die Markierung wieder zu löschen.
- **Rechtsklicke** nah an eine Seite, um dort einen kurzen Balken zu zeichnen, der „hier
  keine Schiene“ bedeutet; rechtsklicke in die Mitte eines Feldes, um das ganze Feld
  auszukreuzen. **Ziehe mit rechts** über eine Zeile oder Spalte, um eine Reihe von Feldern
  auf einmal auszukreuzen (oder das Kreuz wieder wegzunehmen).
- **Radieren** (der Radierknopf neben Rückgängig) lässt ein Anklicken oder ein Ziehen Felder
  ganz leeren: Jedes Feld, das es berührt, verliert seine Schienen, seine „keine
  Schiene“-Balken und seine Markierung oder sein Kreuz. Die vorgegebenen Stücke bleiben.
  Drücke ihn noch einmal, um wieder Gleis zu legen.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger, der sowohl auf Feldern als auch auf den Seiten
  dazwischen hält. **Enter** wirkt am Zeiger wie ein Klick und **Leertaste** wie
  ein Rechtsklick.
- **E** ist der Knopf **Radieren**.

## Einstellungen

- **Breite** und **Höhe** des Gitters, jeweils mindestens vier.
- **Schwierigkeit**: Bei _Leicht_ geben sich die Rätsel geschlagen, wenn du dir ein Feld
  oder eine Linie nach der anderen ansiehst. Bei _Knifflig_ musst du außerdem überlegen, wo
  das letzte Gleisfeld einer Linie überhaupt noch liegen kann, und an lose Schienenenden
  denken, die entlang oder quer über eine Linie weitergeführt werden müssen. Jedes Rätsel
  hat genau eine Lösung.
- **Aufeinanderfolgende 1er-Hinweise verbieten**: Ist das gesetzt (Standard), zählen keine
  zwei benachbarten Linien beide 1, und die Eingangsspalte und die Ausgangszeile tun es
  auch nicht. So läuft das Gleis nicht in langen langweiligen Geraden am Rand entlang.
`,we=e({default:()=>Te}),Te=`# Drehen

Ein Gitter aus nummerierten Steinen wurde durcheinandergebracht, indem quadratische Blöcke
von Steinen gedreht wurden. Dreh sie zurück, bis die Zahlen von links nach rechts und von
oben nach unten in der richtigen Reihenfolge stehen. Im Grundspiel dreht jeder Zug einen
2×2-Block um eine Vierteldrehung um den Punkt, an dem seine vier Steine zusammentreffen;
größere Einstellungen drehen 3×3-Blöcke oder noch größere.

In den Varianten **mit Ausrichtung** trägt jeder Stein ein Dreieck, und das Rätsel gilt erst
als fertig, wenn jedes Dreieck nach oben zeigt. In der Variante **nur Zeilen** tragen die
Steine stattdessen ihre Zeilennummer, sodass alle 1er nur in die erste Zeile müssen, die 2er
in die zweite und so weiter.

## Bedienung

**Lösen** setzt jeden Stein auf einen Schlag wieder an seinen Platz. Es zeigt dir keinen
Weg, aber es ist eine schnelle Art, ein sauberes Gitter zu bekommen, um eine Folge von
Drehungen zu üben.

### Maus und Touchscreen

- **Klicke** in die Mitte eines Blocks, um ihn gegen den Uhrzeigersinn zu drehen;
  **rechtsklicke**, um ihn im Uhrzeigersinn zu drehen. Bei 2×2-Blöcken ist die Mitte die Ecke, an
  der vier Steine zusammentreffen; bei ungeraden Blockgrößen ist es der mittlere Stein. Ein Klick
  weiter außen zum Rand des Gitters hin dreht den Block, der an diesem Rand liegt.
- **Uhrzeigersinn** (der Knopf mit dem Drehpfeil neben Rückgängig) tauscht die beiden: Ein
  Klick dreht Blöcke im Uhrzeigersinn und ein Rechtsklick gegen den Uhrzeigersinn. Drücke ihn
  noch einmal, um zurückzuwechseln.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Rahmen von der Größe eines Blocks über das Gitter. **Enter**
  dreht den umrahmten Block gegen den Uhrzeigersinn und **Leertaste** dreht ihn im
  Uhrzeigersinn.
- **A**, **B**, **C** und **D** drehen die Eckblöcke oben links, oben rechts, unten links
  und unten rechts gegen den Uhrzeigersinn; halte **Shift** für im Uhrzeigersinn.
- **T** ist der Knopf **Uhrzeigersinn**.

## Einstellungen

- **Breite** und **Höhe** des Gitters.
- **Größe der Drehblöcke**: die Seite des quadratischen Blocks, den ein Zug dreht
  (mindestens 2 und nicht größer als das Gitter).
- **Eine Zahl pro Zeile**: eine leichtere Variante, in der jeder Stein einer Zeile dieselbe
  Zahl hat.
- **Ausrichtung zählt**: Die Steine bekommen Dreiecke und müssen am Ende alle nach oben
  zeigen.
- **Anzahl Mischzüge**: Lass sie auf 0 für gründliches Mischen, oder gib eine kleine Zahl
  an, um ein Gitter zu bekommen, das genau so viele Drehungen von der Lösung entfernt ist.
  Dein Ziel ist dann, diese Drehungen zu finden und zurückzunehmen, also verdient ein
  Mischen aus drei Zügen auch eine Antwort aus drei Zügen (auch wenn es manchmal einen
  kürzeren Weg gibt).
`,Ee=e({default:()=>De}),De=`# Untote

Das Gitter ist ein spukhaftes Spiegelkabinett. Jedes Feld ohne Spiegel verbirgt eines von
drei Monstern: einen **Geist**, einen **Vampir** oder einen **Zombie**. Die Legende über dem
Gitter sagt dir, wie viele von jedem noch zu setzen sind, und die Zahl an jeder Randposition
sagt, wie viele Monster du von dort aus ins Gitter sehen würdest, wenn du der Sichtlinie
folgst, während sie von den schrägen Spiegeln abprallt.

Spiegel ändern, was du sehen kannst. Ein Vampir hat kein Spiegelbild und zählt deshalb nur,
solange deine Sichtlinie noch auf keinen Spiegel getroffen ist. Bei einem Geist ist es
umgekehrt: direkt angesehen ist er unsichtbar, erst nach einer Spiegelung taucht er auf.
Einen Zombie sieht man immer. Kreuzt eine Sichtlinie dasselbe Feld zweimal, zählt das
Monster dort jedes Mal, wenn es sichtbar ist. Setze alle Monster so, dass jede Randzahl und
jede Gesamtzahl stimmt.

## Bedienung

Eine Randzahl wird grau, sobald ihre Sichtlinie vollständig aufgeht, und rot, wenn sie sich
nicht mehr erfüllen lässt; eine Zahl in der Legende wird rot, wenn zu viele von diesem
Monster gesetzt sind. Bleistiftnotizen sind nur für deine eigenen Notizen und wirken sich
nie auf das Rätsel aus.

### Maus und Touchscreen

- **Linksklicke** auf ein leeres Feld, um es der Reihe nach durch Geist, Vampir, Zombie und
  zurück zu leer zu schalten. Das Feld bleibt hervorgehoben.
- Mit den Tasten auf dem Bildschirm wählst du direkt ein Monster für das hervorgehobene Feld,
  ohne dich dorthin durchschalten zu müssen; **⌫** leert das Feld, samt Bleistiftnotizen.
- **✎** auf den Tasten hält **Bleistiftnotizen** fest: Das Monster, das du wählst, wird dann
  zur Kandidatenliste des Feldes hinzugefügt (oder daraus weggenommen).
- **Rechtsklicke** auf ein Feld, um Bleistiftnotizen einen Kandidaten nach dem anderen zu
  setzen (erst Geist, dann Vampir, dann Zombie, dann leer).
- **Sicht** (das Auge neben Rückgängig) zeichnet die Sichtlinien durch das hervorgehobene
  Feld, an den Spiegeln abgeknickt, und kreist die Randzahlen an beiden Enden jeder Linie
  ein. Solange es an ist, verfolgt ein Klick auf eine Randzahl deren eigene Linie; ein
  zweiter Klick lässt sie wieder los. Drücke **Sicht** noch einmal, um es auszuschalten.
  Solange es an ist, hebt ein Klick auf ein nicht hervorgehobenes Feld es nur hervor,
  sodass du ein leeres Feld verfolgen kannst, ohne es zu füllen; ein zweiter Klick
  schaltet es wie gewohnt weiter.

### Tastatur (Keyboard)

- Die Pfeiltasten bewegen die Hervorhebung. Enter schaltet das hervorgehobene Monster
  weiter; die Leertaste schaltet seine Bleistiftnotizen weiter.
- \`G\`, \`V\`, \`Z\` (oder \`1\`, \`2\`, \`3\`) setzen dieses Monster in das hervorgehobene Feld oder
  schalten seine Bleistiftnotiz um, wenn die Hervorhebung im Notizmodus ist. \`E\`, \`0\`,
  Backspace oder Entf leert das Feld, samt Bleistiftnotizen.
- \`S\` ist der Knopf **Sicht**.

## Einstellungen

- **Breite**, **Höhe** – die Größe des Gitters, von 3×3 bis zu insgesamt 54 Feldern.
- **Schwierigkeit** – bei _Leicht_ fallen die Rätsel schon, wenn du eine Sichtlinie nach der
  anderen abzählst; bei _Normal_ musst du abwägen, welche Kombinationen ein ganzer Weg
  zulässt; bei _Knifflig_ bekommst du das Rätsel nicht fertig, ohne eine Vermutung
  auszuprobieren.
`,Oe=e({default:()=>ke}),ke=`# Ungleich

Fülle das Gitter so, dass jede Zeile und jede Spalte jede Ziffer von 1 bis zur Größe des
Gitters genau einmal enthält – ein lateinisches Quadrat – und halte dich dabei an die
Zeichen zwischen benachbarten Feldern.

Im Modus **Ungleich** sind die Zeichen Größer-als-Zeichen: Die offene Seite eines \`>\` zeigt
zur größeren Ziffer und die Spitze zur kleineren. Nicht jedes Nachbarpaar trägt ein Zeichen,
und je schwerer das Rätsel, desto weniger Zeichen gibt es.

Im Modus **Nachbarn** sind die Zeichen kurze Balken, die bedeuten, dass sich die beiden
Ziffern um genau eins unterscheiden (wie 3 und 4). Hier steht jeder Balken immer da, also
ist auch das **Fehlen** eines Balkens zwischen zwei Feldern ein Hinweis: Diese beiden
Ziffern folgen ganz sicher nicht aufeinander.

In Zeitungen erscheint das Rätsel unter dem Namen Futoshiki.

## Bedienung

Ziffern, die eine Regel brechen – eine Dublette in einer Zeile oder Spalte, oder ein
Zeichen, das nicht aufgeht – werden rot gezeigt, und das verletzte Zeichen ebenso. Das
Rätsel ist fertig, wenn jedes Feld gefüllt ist und nichts mehr rot ist.

### Maus und Touchscreen

- **Linksklicke** auf ein Feld, um es zu wählen, und schreib dann mit den Tasten auf dem
  Bildschirm eine Ziffer hinein. **⌫** auf den Tasten leert das gewählte Feld wieder. Klickst du
  das gewählte Feld noch einmal an, ist es wieder abgewählt.
- **✎** auf den Tasten hält **Bleistiftnotizen** fest: Was du wählst, landet dann in einer
  kleinen Liste von Möglichkeiten im Feld, statt es zu beantworten. Füllst du ein Feld aus,
  werden seine Bleistiftnotizen weggewischt.
- **Rechtsklicke** auf ein Feld, um es gleich für Bleistiftnotizen zu wählen.
- **Notizen** im Pausenmenü füllt jedes leere Feld mit allen möglichen Bleistiftnotizen,
  bereit zum Ausstreichen; **Tipp** (die Glühbirne neben Rückgängig) macht dasselbe, lässt
  aber die weg, die einfaches Schlussfolgern schon ausschließt.
- **Hervorheben** (die Lupe neben Rückgängig) hebt jedes Feld hervor, in dem dieselbe
  Ziffer steht wie in dem Feld, das du zuletzt angeklickt hast (vorgegebene Ziffern
  eingeschlossen), und zeigt diese Ziffer unter den Bleistiftnotizen fett. Drücke sie noch
  einmal, um das auszuschalten.

### Tastatur (Keyboard)

- **Gib eine Ziffer ein**, um das gewählte Feld zu füllen; \`0\`, Leertaste oder Backspace leert
  es.
- Die Pfeiltasten bewegen einen Zeiger über das Gitter; Enter schaltet den Zeiger zwischen
  Ziffern schreiben und Bleistiftnotizen machen um.
- \`M\` ist der Knopf **Notizen**, \`H\` ist **Tipp** und \`L\` ist **Hervorheben**.

## Einstellungen

- **Modus** – Ungleich (Größer-als-Zeichen) oder Nachbarn (Balken zwischen Ziffern, die
  aufeinander folgen).
- **Größe** – die Anzahl der Zeilen und Spalten, von 3 bis 9.
- **Schwierigkeit** – wie viel Schlussfolgern das Rätsel verlangt. **Sehr leicht** braucht die
  Zeichen nie: Im Modus Ungleich gibt es gar keine, und es entstehen schlichte lateinische Quadrate;
  im Modus Nachbarn werden die Balken zwar gezeichnet, aber die vorgegebenen Ziffern allein
  entscheiden. Bei **Leicht** reicht die direkte Bedeutung jedes Zeichens; bei **Mittel** musst du
  Gruppen von Feldern zusammen ansehen; bei **Schwer** kommen positionsbasierte Mengenschlüsse und
  Zwangsketten dazu; **Extrem** (im Dialog Anpassen… zu finden) braucht vielleicht etwas Probieren,
  die Lösung ist aber trotzdem eindeutig.
`,Ae=e({default:()=>je}),je=`# Widerspenstig

Färbe jedes Feld des Gitters entweder schwarz oder weiß. Manche Felder sind als Hinweis
vorgegeben und lassen sich nicht ändern; der Rest beginnt grau und ist deine Sache. Wenn du
fertig bist, müssen drei Dinge stimmen:

- jede Zeile enthält genauso viele schwarze wie weiße Felder;
- jede Spalte enthält genauso viele schwarze wie weiße Felder;
- keine drei Felder nebeneinander in einer Zeile oder Spalte haben dieselbe Farbe.

Fehler zeigen sich in Rot: Eine Folge von drei oder mehr gleichen Feldern bekommt einen
roten Rahmen, und ein Feld trägt ein rotes **!**, wenn seine Zeile oder Spalte schon zu
viele von dieser Farbe hat. In der optionalen Variante „Eindeutige Zeilen und Spalten“
dürfen keine zwei Zeilen demselben Muster folgen (und keine zwei Spalten); gleiche Linien
werden rot durchgestrichen.

## Bedienung

Hinweisfelder – die mit dem kleinen Rahmen darin – lassen sich nicht ändern. **Lösen** füllt
das ganze Gitter aus. Das Rätsel ist fertig, wenn jedes Feld gefärbt ist und nichts rot
angezeigt wird.

### Maus und Touchscreen

- **Klicke** auf ein graues Feld, um es schwarz zu machen; klicke noch einmal für weiß, und
  noch einmal, um es zu leeren.
- **Rechtsklicken** schaltet andersherum weiter: erst weiß, dann schwarz, dann leer.
- **Mittelklicken** leert ein Feld direkt.
- **Radieren** (der Radierknopf neben Rückgängig) lässt einen Klick ein Feld leeren, statt
  es zu färben. Drücke ihn noch einmal, um wieder zu färben.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger über das Gitter.
- **Enter** schaltet das Feld unter dem Zeiger weiter wie ein Klick und **Leertaste** wie
  ein Rechtsklick.
- **1** setzt schwarz, **0** (oder **2**) setzt weiß und **Backspace** leert.
- **E** ist der Knopf **Radieren**.

## Einstellungen

- **Breite** und **Höhe** des Gitters. Beide müssen gerade und mindestens 6 sein.
- **Eindeutige Zeilen und Spalten**: Ist das eingeschaltet, dürfen keine zwei Zeilen gleich
  sein und keine zwei Spalten (eine Zeile darf noch mit einer Spalte übereinstimmen). Sehr
  hohe oder sehr breite Gitter werden in diesem Modus abgelehnt, weil es dann nicht genug
  verschiedene Linien für alle gibt.
- **Schwierigkeit**: Bei _Leicht_ brauchst du nie mehr als zwei unmittelbare Schlüsse –
  zwei gleiche Felder zwingen das Feld daneben oder dazwischen in die andere Farbe, und eine
  Linie, die ihren Anteil einer Farbe schon hat, bekommt überall sonst die andere Farbe. Bei
  _Normal_ musst du außerdem überlegen, wo das letzte Feld einer Farbe in einer Linie noch
  liegen kann, ohne eine Folge von drei zu erzeugen. Jedes Rätsel hat genau eine Lösung.
`,Me=e({default:()=>Ne}),Ne=`# Entwirren

Eine Handvoll Punkte ist durch gerade Linien verbunden, und die Linien sind verheddert.
Schieb die Punkte umher, bis sich keine zwei Linien mehr kreuzen. Jedes Rätsel lässt sich
entwirren: Der Computer hat den Graphen aus einer Anordnung ohne Kreuzungen gebaut und die
Punkte danach auf einen Kreis gemischt.

Linien, die gerade eine andere Linie kreuzen, werden rot gezeichnet, sodass das Gewirr
sichtbar kleiner wird, während du arbeitest; das Rätsel ist gelöst, wenn kein Rot mehr übrig
ist. Lösen schiebt jeden Punkt in eine Anordnung, von der der Computer weiß, dass sie
aufgeht.

## Bedienung

Rückgängig nimmt jeden Zug zurück, auch Lösen.

### Maus und Touchscreen

- **Ziehe** einen Punkt und lass ihn los, wo du ihn haben willst. Der Punkt, den du greifst,
  wird orange und seine Nachbarn blau. Lässt du einen Punkt im Randbereich fallen, kommt er
  auf den Rand des Bretts; lässt du ihn ganz außerhalb der Zeichenfläche los, wird das
  Ziehen abgebrochen.
- **Einrasten** (der Gitterknopf neben Rückgängig) schaltet ein Fanggitter ein und aus:
  Abgelegte Punkte landen dann auf den Mitten der Gitterfelder, die mit blassen Punkten
  markiert sind, und so ist auch die Lösung angelegt. Der Knopf leuchtet, solange das
  Gitter an ist.

### Tastatur (Keyboard)

- **Pfeiltasten** bewegen einen Zeiger in dieser Richtung von Punkt zu Punkt. **Enter** oder
  **Leertaste** hebt den Punkt auf; die Pfeiltasten tragen ihn dann weiter (ein Achtel Feld pro
  Druck, ein ganzes Feld mit Shift, ein einzelner Schritt mit Ctrl) und **Enter** oder
  **Leertaste** legt ihn wieder ab.
- \`G\` ist der Knopf **Einrasten**.

## Einstellungen

- **Anzahl Punkte**: wie viele Punkte der Graph hat, mindestens 4. Mehr Punkte heißt mehr
  Linien und ein schwierigeres Gewirr. Das Brett wächst mit der Anzahl der Punkte mit, damit
  immer Platz ist, sie auseinanderzuziehen.
`,Pe=e({$dir:()=>`ltr`,$locale:()=>`de`,$name:()=>q,default:()=>Fe,games:()=>Q,messages:()=>X,status:()=>Z,touchPhrases:()=>Y,tutorials:()=>$,ui:()=>J}),q=`Deutsch`,J=JSON.parse(`{"appName":"Puzzlebox","menu":{"title":"Puzzlebox","tagline":"{n} handgezeichnete Logikrätsel. Such dir eins aus und leg los.","lockedNote":"Jedes Rätsel, das du selbst löst, bringt dir einen Stern. Gib deine Sterne hier aus, um neue Rätsel freizuschalten.","language":"Sprache","stat":{"credits":{"one":"★ {n} Stern","other":"★ {n} Sterne"},"unlocked":"{n} von {total} freigeschaltet","solved":"{n} gelöst","tight":{"credits":"★ {n}","unlocked":"{n}/{total}","solved":"✓ {n}","achievements":"{n}/{total}"},"achievements":"{n} von {total} Erfolgen"},"hint":{"allOpen":"Alles ist freigeschaltet.","complete":"Du hast die ganze Sammlung freigeschaltet!","spend":{"one":"Gib unten einen Stern aus, um ein Rätsel freizuschalten.","other":"Gib unten deine Sterne aus, um Rätsel freizuschalten."},"earn":"Löse irgendein Rätsel selbst, dann bekommst du einen Stern."},"card":{"label":"{name}: {description}","labelLocked":"{name}: {description} (gesperrt)","solvedTag":"✓ gelöst ×{n}","unlock":"Freischalten · 1 Stern","unlocked":"{name} ist freigeschaltet!","labelAlias":"{name} (auch bekannt als {alias}): {description}","labelLockedAlias":"{name} (auch bekannt als {alias}): {description} (gesperrt)"},"noCredit":"Löse irgendein Rätsel selbst, um einen Stern zu bekommen, und komm dann zurück, um dieses hier freizuschalten.","surprise":"Überrasch mich: ein zufälliges Rätsel öffnen","search":{"placeholder":"Rätsel suchen","label":"Rätsel nach Namen suchen","clear":"Suche löschen","empty":"Hier heißt kein Rätsel „{q}“. Versuch einen anderen Namen."},"privacy":{"note":"Puzzlebox zählt, wie seine Rätsel gespielt werden – nie, wer sie spielt –, damit sie besser werden."},"continue":"Weiter","continueLabel":"{name} fortsetzen","spend":"Einlösen"},"notFound":{"title":"So ein Rätsel gibt es nicht","body":"Wir haben kein Rätsel namens „{slug}“.","back":"Zurück zu allen Rätseln"},"locked":"{name} ist noch gesperrt. Löse ein Rätsel, um einen Stern zu bekommen, und schalte es dann frei.","pageTitle":"{name} · Puzzlebox","topbar":{"back":"Alle Rätsel","help":"Hilfe","creditsTitle":"Mit Sternen schaltest du neue Rätsel frei. Löse ein Rätsel selbst, dann bekommst du einen.","boardLabel":"Spielfeld von {name}"},"toolbar":{"type":"Typ","custom":"Anpassen…","new":"Neu","newTitle":"Neues Spiel (N)","restart":"Neustart","restartTitle":"Dieses Rätsel von vorn beginnen","undo":"Rückgängig","undoTitle":"Rückgängig (U, Ctrl+Z)","redo":"Wiederherstellen","redoTitle":"Wiederherstellen (R, Ctrl+Y)","solve":"Lösen","solveTitle":"Lösung zeigen (Ctrl+S)","gameId":"Teilen","gameIdTitle":"Dieses Rätsel teilen oder eines spielen, das dir jemand geschickt hat","keypad":"Tastenfeld","keypadTitle":"Tasten auf dem Bildschirm einblenden","zoomOut":"−","zoomOutTitle":"Kleiner","zoomIn":"+","zoomInTitle":"Größer","tapPlace":"Tippen: setzen","tapMark":"Tippen: markieren","tapTitle":"Was ein einfaches Tippen macht","tapPlaceTitle":"Tippen setzt; langes Drücken markiert. Zum Umschalten tippen.","tapMarkTitle":"Tippen markiert; langes Drücken setzt. Zum Umschalten tippen.","hint":"Tipp","hintTitle":"Ein Feld aufdecken und weiterspielen. Bis zu {n} Tipps bringen trotzdem noch einen Stern.","more":"Mehr","pause":"Pause","pauseTitle":"Pausenmenü (Esc)"},"pause":{"title":"Pausiert","resume":"Weiter"},"pager":{"label":"Seiten","prev":"Vorherige Seite","next":"Nächste Seite","page":"Seite {n} von {total}"},"badge":{"won":"Gelöst!","lost":"Spiel vorbei"},"stage":{"generating":"Neues Rätsel wird erstellt…"},"keypad":{"label":"Tastenfeld","clear":"Leeren","clearTitle":"Das gewählte Feld leeren (Backspace)","pencil":"Bleistiftnotizen","pencilOnTitle":"Die Tasten schreiben Bleistiftnotizen. Tippe, um wieder Antworten zu schreiben.","pencilOffTitle":"Einschalten, damit die nächsten Tasten Bleistiftnotizen schreiben"},"drawer":{"title":"So spielst du {name}","close":"Schließen","replay":"▶ Anleitung noch einmal ansehen","achievements":"Erfolge ({n}/{total})"},"dialog":{"ok":"OK","cancel":"Abbrechen","customTitle":"{name}: Anpassen","gameIdTitle":"Dieses Rätsel teilen","byDescription":"Als Beschreibung","bySeed":"Als Zufallswert","enterLabel":"Ein bestimmtes Rätsel spielen: Code einfügen","play":"Spielen","copy":"Kopieren","copied":"Kopiert","link":"Link","linkTitle":"Einen Link kopieren, der genau dieses Rätsel öffnet","linkPrompt":"Link zu diesem Rätsel","shareLead":"Schick genau dieses Rätsel an jemand anderen.","copyLink":"Link kopieren","linkCopied":"Link kopiert","codes":"Rätselcodes","hintAd":{"title":"Noch ein Tipp?","body":"Du hast deine {n} kostenlosen Tipps verbraucht. Mit einem weiteren bringt dieses Rätsel keinen Stern mehr – es sei denn, du schaust dir kurz Werbung an.","watch":"Werbung ansehen, Stern behalten","anyway":"Tipp trotzdem nehmen"},"badCode":"Dieser Code öffnet kein {name}-Rätsel. Prüfe, ob er vollständig kopiert wurde."},"toast":{"creditEarned":"+1 Stern","tutorialComplete":"Anleitung fertig. Hier ist ein neues Rätsel; löse es selbst, dann bekommst du einen Stern.","tutorialCompleteBack":"Anleitung fertig. Zurück zu deinem Rätsel.","tutorialSkipped":"Anleitung übersprungen. Du kannst sie jederzeit unter „Hilfe“ noch einmal ansehen.","tapModeMark":"Tippen markiert. Langes Drücken macht die Hauptaktion.","tapModePlace":"Tippen macht die Hauptaktion. Langes Drücken markiert.","touchHint":"Tippen zum Spielen, langes Drücken für die zweite Aktion. Der erste runde Knopf vertauscht die beiden.","hintNone":"Auf diesem Brett gibt es nichts mehr aufzudecken.","hintNoCredit":"Das sind mehr als {n} Tipps, also bringt dieses Rätsel keinen Stern mehr – fertig spielen kannst du es trotzdem.","hintAdFailed":"Es war keine Werbung verfügbar, also hat sich nichts geändert – der Tipp wartet weiter auf dich.","stuck":"Festgefahren? Ein Tipp deckt ein Feld auf, und das Rätsel bringt trotzdem seinen Stern."},"tutorial":{"label":"Anleitung zu {name}","step":"Schritt {n} von {total}","next":"Weiter","done":"Fertig","skipStep":"Schritt überspringen","skipTutorial":"Anleitung überspringen","nice":"Super!","offScript":"Nicht dieser: Der Zug wurde zurückgenommen, damit die Schritte weiter zum Brett passen. Versuch, was dieser Schritt verlangt.","offScriptRead":"Das wurde zurückgenommen, damit die Schritte weiter zum Brett passen. Lies erst diesen Schritt.","pointer":{"drag":"ziehen","rightClick":"rechtsklicken","rightDrag":"mit rechts ziehen","middleClick":"mittelklicken","longPress":"lange drücken","longPressDrag":"lange drücken und ziehen","twoFingerTap":"mit zwei Fingern tippen"}},"splash":{"tagline":"Handgezeichnete Rätsel, sofort spielbar","skip":"Überspringen"},"help":{"keypad":{"heading":"Das Tastenfeld","introTouch":"Die Tasten auf dem Bildschirm schreiben für dich","introPointer":"**Tastenfeld** in der Werkzeugleiste blendet Tasten auf dem Bildschirm ein, die für dich schreiben","select":": Wähle zuerst ein Feld auf dem Brett, dann drücke eine Taste.","clear":"- **⌫** leert das gewählte Feld wieder.","pencil":"- **✎** hält die Bleistiftnotizen fest, sodass die Tasten kleine Notizen statt\\n  Antworten schreiben. Drücke es erneut, um wieder Antworten zu schreiben."}},"achievements":{"title":"Erfolge","summary":"{n} von {total} erreicht","unlocked":"Erfolg freigeschaltet","secret":{"name":"Geheimer Erfolg","description":"Spiel weiter, um ihn zu entdecken."},"earnedOn":"Erreicht am {date}","progress":"{n} von {goal}","collection":"Die Sammlung","tier":{"bronze":"Bronze","silver":"Silber","gold":"Gold"},"meta":{"first-solve":{"name":"Erste Schritte","description":"Löse dein erstes Rätsel eigenhändig."},"solves-10":{"name":"Warmgelaufen","description":"Löse 10 Rätsel."},"solves-50":{"name":"Rätselfieber","description":"Löse 50 Rätsel."},"solves-100":{"name":"Zenturio","description":"Löse 100 Rätsel."},"solves-250":{"name":"Großmeister","description":"Löse 250 Rätsel."},"specialist":{"name":"Spezialist","description":"Löse 10 Rätsel im selben Spiel."},"variety-3":{"name":"Kostprobe","description":"Löse ein Rätsel in 3 verschiedenen Spielen."},"variety-10":{"name":"Vielseitig","description":"Löse ein Rätsel in 10 verschiedenen Spielen."},"variety-all":{"name":"Die ganze Kiste","description":"Löse ein Rätsel in jedem Spiel der Sammlung."},"unlock-first":{"name":"Neues Regal","description":"Schalte dein erstes Spiel mit einem Stern frei."},"unlock-15":{"name":"Wachsende Sammlung","description":"Hab 15 Spiele freigeschaltet."},"unlock-25":{"name":"Schlüsselbund","description":"Hab 25 Spiele freigeschaltet."},"unlock-all":{"name":"Generalschlüssel","description":"Schalte jedes Spiel der Sammlung frei."},"hardest-1":{"name":"Herausforderung angenommen","description":"Löse ein Rätsel auf der schwersten Stufe eines Spiels."},"hardest-10":{"name":"Gipfelstürmer","description":"Löse die schwerste Stufe von 10 verschiedenen Spielen."},"hardest-all":{"name":"Unerschütterlich","description":"Löse die schwerste Stufe jedes Spiels."},"pure-1":{"name":"Weiße Weste","description":"Löse ein Rätsel ohne Rückgängig und ohne Tipp."},"pure-25":{"name":"Ruhige Hand","description":"Löse 25 Rätsel ohne Rückgängig und ohne Tipp."},"quick-draw":{"name":"Schnellzieher","description":"Löse ein Rätsel in höchstens 30 Sekunden."},"marathon":{"name":"Langer Atem","description":"Löse ein Rätsel, an dem du über 20 Minuten gesessen hast."},"comeback":{"name":"Niemals aufgeben","description":"Verliere ein Rätsel, dann komm zurück und löse es."},"second-thoughts":{"name":"Hin und her","description":"Mach 100-mal etwas rückgängig und löse das Rätsel trotzdem."},"a-little-help":{"name":"Kleine Hilfe","description":"Nimm einen Tipp."},"oops":{"name":"Hoppla","description":"Verliere ein Rätsel."},"night-owl":{"name":"Nachteule","description":"Löse ein Rätsel zwischen Mitternacht und 5 Uhr morgens."},"on-a-roll":{"name":"Voll im Lauf","description":"Löse 5 Rätsel in einer Sitzung."},"days-3":{"name":"Stammgast","description":"Spiele an 3 verschiedenen Tagen."},"days-7":{"name":"Treue Seele","description":"Spiele an 7 verschiedenen Tagen."},"days-30":{"name":"Gehört zum Inventar","description":"Spiele an 30 verschiedenen Tagen."},"quick-study":{"name":"Schnell gelernt","description":"Spiele eine Anleitung bis zum Ende."},"scholar":{"name":"Gelehrter","description":"Spiele 10 verschiedene Anleitungen bis zum Ende."},"collector-25":{"name":"Abzeichensammler","description":"Erreiche 25 Erfolge."},"collector-60":{"name":"Trophäenschrank","description":"Erreiche 60 Erfolge."},"legend":{"name":"Rätsellegende","description":"Erreiche alle anderen Erfolge."}},"andMore":{"one":"{n} Erfolg freigeschaltet","other":"{n} Erfolge freigeschaltet"}},"endgame":{"won":"Rätsel gelöst!","lost":"Spiel vorbei","credit":"★ +1 Stern – genug, um ein neues Rätsel der Sammlung freizuschalten.","wonNote":"Bereit für das nächste?","forfeitNote":"Dieses Rätsel bringt keinen Stern – die Lösung wurde unterwegs schon gezeigt.","lostNote":"Diesmal hat es nicht geklappt. Noch ein Versuch?","next":"Nächstes Rätsel","retry":"Nochmal","dismiss":"Schließen und das Brett ansehen","time":"Zeit","moves":"Züge","hints":"Tipp","best":"Bestzeit {time}","newBest":"Neue Bestzeit!","stars":"{n} von 3 Sternen","stepUp":"Probier {preset} →"},"welcome":{"title":"Wähle dein erstes Rätsel","subtitle":{"one":"{n} Rätsel für den Anfang. Wähle es und spiel los.","other":"{n} Rätsel für den Anfang. Wähle eins und spiel los."},"more":{"one":"…und {n} weiteres zum Freischalten","other":"…und {n} weitere zum Freischalten"},"how":"Jedes gelöste Rätsel bringt dir einen Stern, und jeder Stern schaltet ein neues Spiel frei."},"gamepad":{"connected":"Controller verbunden"},"settings":{"title":"Einstellungen","done":"Fertig","sound":"Ton","volume":"Lautstärke","reduceMotion":"Bewegung reduzieren","vibration":"Vibration","statistics":"Spielstatistik","on":"An","off":"Aus","portalMuted":"Die Seite hat den Ton ausgeschaltet."}}`),Y=[[`einen einfachen Klick`,`ein einfaches Tippen`],[`einen Linksklick`,`ein Tippen`],[`einen Rechtsklick`,`ein langes Drücken`],[`einen Mittelklick`,`ein Tippen mit zwei Fingern`],[`einen Doppelklick`,`ein doppeltes Tippen`],[`einen Klick`,`ein Tippen`],[`jeder Klick`,`jedes Tippen`],[`mit rechts gezogen`,`lange gedrückt und gezogen`],[`Ziehen mit rechts`,`langes Drücken und Ziehen`],[`mit rechts ziehen`,`lange drücken und ziehen`],[`ziehe mit rechts`,`drücke lange und ziehe`],[`ziehst mit rechts`,`drückst lange und ziehst`],[`zieht mit rechts`,`drückt lange und zieht`],[`rechte Maustaste`,`langes Drücken`],[`mittlere Maustaste`,`Tippen mit zwei Fingern`],[`linke Maustaste`,`Tippen`],[`rechtsgeklickt`,`lange gedrückt`],[`rechtsklickst`,`drückst lange`],[`rechtsklicken`,`lange drücken`],[`rechtsklickt`,`drückt lange`],[`rechtsklicke`,`drücke lange`],[`einem Rechtsklick`,`einem langen Drücken`],[`ein Rechtsklick`,`ein langes Drücken`],[`Rechtsklick`,`langes Drücken`],[`mittelgeklickt`,`mit zwei Fingern getippt`],[`mittelklicken`,`mit zwei Fingern tippen`],[`mittelklickst`,`tippst mit zwei Fingern`],[`mittelklickt`,`tippt mit zwei Fingern`],[`mittelklicke`,`tippe mit zwei Fingern`],[`Mittelklick`,`Tippen mit zwei Fingern`],[`linksgeklickt`,`getippt`],[`linksklicken`,`tippen`],[`linksklickst`,`tippst`],[`linksklickt`,`tippt`],[`linksklicke`,`tippe`],[`Linksklick`,`Tippen`],[`doppelgeklickt`,`doppelt getippt`],[`doppelklicken`,`doppelt tippen`],[`doppelklickst`,`tippst doppelt`],[`doppelklickt`,`tippt doppelt`],[`doppelklicke`,`tippe doppelt`],[`einem Doppelklick`,`einem doppelten Tippen`],[`ein Doppelklick`,`ein doppeltes Tippen`],[`Doppelklick`,`doppeltes Tippen`],[`egal mit welcher Maustaste`,`egal wie`],[`daraufklickst`,`darauf tippst`],[`angeklickt`,`angetippt`],[`anklicken`,`antippen`],[`geklickt`,`getippt`],[`klicken`,`tippen`],[`klickst`,`tippst`],[`klickt`,`tippt`],[`klicke`,`tippe`],[`Klick`,`Tippen`],[`Mauszeiger`,`Finger`]],X=JSON.parse(`{"4-way rotational symmetry needs a square grid":"4-fache Drehsymmetrie braucht ein quadratisches Gitter","A 2×2 grid is too small to make a puzzle from":"Ein 2×2-Gitter ist zu klein für ein Rätsel","A cube rolling along a single row can never turn over all six faces":"Ein Würfel, der nur eine einzige Zeile entlangrollt, kann nie alle sechs Flächen zeigen","A given piece leaves the grid":"Ein vorgegebenes Stück führt aus dem Gitter heraus","A jigsaw block is too big":"Ein Jigsaw-Block ist zu groß","A jigsaw block is too small":"Ein Jigsaw-Block ist zu klein","A killer cage is too big":"Ein Käfig ist zu groß","A killer cage is too small":"Ein Käfig ist zu klein","A wrapping puzzle needs a width and height of at least 3 to have a unique solution":"Ein umlaufendes Rätsel braucht Breite und Höhe von mindestens 3, damit die Lösung eindeutig ist","All parameters must be whole numbers":"Alle Werte müssen ganze Zahlen sein","Already solved":"Schon gelöst","An edge cannot join a point to itself":"Eine Kante kann einen Punkt nicht mit sich selbst verbinden","Angle offset out of bounds.":"Winkelversatz außerhalb des gültigen Bereichs.","At least one grid dimension must be greater than zero":"Mindestens eine Gitterabmessung muss größer als null sein","At least one of width and height for this grid type must be at least {0}":"Bei dieser Gitterart muss Breite oder Höhe mindestens {0} sein","At least one of width and height must be greater than one":"Breite oder Höhe muss größer als eins sein","Bad character in grid description":"Ungültiges Zeichen in der Gitterbeschreibung","Bad mine layout in game description":"Ungültige Minenanordnung in der Spielbeschreibung","Badly formatted move limit after grid description":"Falsch formatiertes Zuglimit nach der Gitterbeschreibung","Barrier probability must be a number between 0 and 1":"Die Barrieren-Wahrscheinlichkeit muss eine Zahl zwischen 0 und 1 sein","Barrier probability must be between 0 and 1":"Die Barrieren-Wahrscheinlichkeit muss zwischen 0 und 1 liegen","Blue cells are placed where some faces could never reach them":"Blaue Felder liegen dort, wo manche Flächen sie nie erreichen könnten","Both dimensions must be at least 2":"Beide Abmessungen müssen mindestens 2 sein","Both grid dimensions must be at least one":"Beide Gitterabmessungen müssen mindestens eins sein","Bridges per direction must be between 1 and {0}":"Brücken pro Richtung müssen zwischen 1 und {0} liegen","Can't create {0}×{1} puzzles":"Rätsel der Größe {0}×{1} können nicht erstellt werden","Clue did not provide 2 direction flags":"Der Hinweis liefert keine 2 Richtungsangaben","Clue is larger than the number of sides of its face":"Der Hinweis ist größer als die Anzahl der Seiten seiner Fläche","Clue is missing its number":"Dem Hinweis fehlt seine Zahl","Clue number out of range":"Hinweiszahl außerhalb des gültigen Bereichs","Colour out of range":"Farbe außerhalb des gültigen Bereichs","Colour out of range in grid description":"Farbe außerhalb des gültigen Bereichs in der Gitterbeschreibung","Colours, pegs and guesses must be whole numbers":"Farben, Stifte und Versuche müssen ganze Zahlen sein","Column counts inconsistent":"Die Spaltenzahlen passen nicht zusammen","Could not four-colour the map":"Die Karte ließ sich nicht mit vier Farben färben","Count is larger than the line it describes":"Die Zahl ist größer als die Linie, die sie beschreibt","Description contains a duplicate number":"Die Beschreibung enthält eine doppelte Zahl","Description contains a number larger than the grid":"Die Beschreibung enthält eine Zahl, die größer ist als das Gitter","Description contains a number out of range":"Die Beschreibung enthält eine Zahl außerhalb des gültigen Bereichs","Description contains a number that is too large":"Die Beschreibung enthält eine zu große Zahl","Description contains a repeated number":"Die Beschreibung enthält eine wiederholte Zahl","Description contains an unexpected character":"Die Beschreibung enthält ein unerwartetes Zeichen","Description contains invalid characters":"Die Beschreibung enthält ungültige Zeichen","Description is corrupted":"Die Beschreibung ist beschädigt","Description is longer than expected":"Die Beschreibung ist länger als erwartet","Description is shorter than expected":"Die Beschreibung ist kürzer als erwartet","Description is too long":"Die Beschreibung ist zu lang","Description is too short":"Die Beschreibung ist zu kurz","Description marks cells beyond the grid as blue":"Die Beschreibung färbt Felder außerhalb des Gitters blau","Description may only contain P, H and O":"Die Beschreibung darf nur P, H und O enthalten","Description must be a comma-separated list of numbers":"Die Beschreibung muss eine durch Kommas getrennte Zahlenliste sein","Description must be exactly {0} characters":"Die Beschreibung muss genau {0} Zeichen lang sein","Description must be hex digits, a comma and a cell number":"Die Beschreibung muss aus Hex-Ziffern, einem Komma und einer Feldnummer bestehen","Description must be numbers each followed by an orientation letter (u, l, d or r)":"Die Beschreibung muss aus Zahlen bestehen, auf die jeweils ein Richtungsbuchstabe folgt (u, l, d oder r)","Description must be two hex strings separated by a comma":"Die Beschreibung muss aus zwei Hex-Zeichenketten mit einem Komma dazwischen bestehen","Description must be {0} hexadecimal digits":"Die Beschreibung muss aus {0} Hexadezimalziffern bestehen","Description must contain at least one edge":"Die Beschreibung muss mindestens eine Kante enthalten","Description must contain at least one peg":"Die Beschreibung muss mindestens einen Stift enthalten","Description must contain at least two islands":"Die Beschreibung muss mindestens zwei Inseln enthalten","Description must contain each number from 1 to {0} exactly once":"Die Beschreibung muss jede Zahl von 1 bis {0} genau einmal enthalten","Description must contain each row number from 1 to {0} exactly {1} times":"Die Beschreibung muss jede Zeilennummer von 1 bis {0} genau {1}-mal enthalten","Description must contain only digits":"Die Beschreibung darf nur Ziffern enthalten","Description must contain only numbers":"Die Beschreibung darf nur Zahlen enthalten","Description must contain {0} numbers":"Die Beschreibung muss {0} Zahlen enthalten","Description must contain {0} tiles":"Die Beschreibung muss {0} Kacheln enthalten","Description must mark exactly {0} cells blue":"Die Beschreibung muss genau {0} Felder blau färben","Description must start with {0} hex digits":"Die Beschreibung muss mit {0} Hex-Ziffern beginnen","Description places two islands next to each other":"Die Beschreibung legt zwei Inseln direkt nebeneinander","Description repeats a colour although duplicates are disallowed":"Die Beschreibung wiederholt eine Farbe, obwohl Wiederholungen nicht erlaubt sind","Description too long":"Beschreibung zu lang","Description too long for board size":"Beschreibung zu lang für die Brettgröße","Description too short":"Beschreibung zu kurz","Description too short for board size":"Beschreibung zu kurz für die Brettgröße","Digits in a {0}×{1} puzzle cannot exceed {2}":"In einem {0}×{1}-Rätsel dürfen die Ziffern {2} nicht überschreiten","Disallowing duplicates requires at least as many colours as pegs":"Ohne Wiederholungen braucht es mindestens so viele Farben wie Stifte","Domino descriptions inconsistent":"Widersprüchliche Dominobeschreibungen","Dots too close together":"Die Punkte liegen zu dicht beieinander","Duplicate edge in game description":"Doppelte Kante in der Spielbeschreibung","Edge list defines the wrong number of regions":"Die Kantenliste ergibt die falsche Anzahl Bereiche","Entrance square must contain a piece leaving the left edge":"Im Eingangsfeld muss ein Stück liegen, das über den linken Rand hinausführt","Every killer cage must have exactly one sum":"Jeder Killer-Käfig muss genau eine Summe haben","Exit square must contain a piece leaving the bottom edge":"Im Ausgangsfeld muss ein Stück liegen, das über den unteren Rand hinausführt","Expansion factor must be a number":"Der Ausdehnungsfaktor muss eine Zahl sein","Expansion factor may not be negative":"Der Ausdehnungsfaktor darf nicht negativ sein","Expansion factor must be from 0 to 100":"Der Ausdehnungsfaktor muss zwischen 0 und 100 liegen","Expected ',' after block structure description":"',' nach der Blockstruktur erwartet","Expected ',' after grid description":"Nach der Gitterbeschreibung wurde ',' erwartet","Expected a list of edges like 0-1,1-2 in game description":"In der Spielbeschreibung wurde eine Kantenliste wie 0-1,1-2 erwartet","Expected comma before clue list":"Vor der Hinweisliste wurde ein Komma erwartet","Expected jigsaw block structure in game description":"In der Spielbeschreibung wurde eine Jigsaw-Blockstruktur erwartet","Expected killer cage structure in game description":"In der Spielbeschreibung wurde eine Killer-Käfigstruktur erwartet","Expected killer clue grid in game description":"In der Spielbeschreibung wurde ein Killer-Hinweisgitter erwartet","Expected slashes between clues":"Zwischen den Hinweisen wurden Schrägstriche erwartet","Expecting number in game description":"In der Spielbeschreibung wird eine Zahl erwartet","Extra moves must not be negative":"Extrazüge dürfen nicht negativ sein","Extreme puzzles with more than {0} symbols take too long to generate":"Extreme Rätsel mit mehr als {0} Symbolen dauern beim Erzeugen zu lange","Faulty game description":"Fehlerhafte Spielbeschreibung","Flags contradicting each other":"Die Richtungsangaben widersprechen sich","Flags go off grid":"Die Richtungsangaben führen aus dem Gitter heraus","Game ID must include parameters":"Die Spiel-ID muss Parameter enthalten","Game description contained unexpected characters":"Die Spielbeschreibung enthielt unerwartete Zeichen","Game description contains an unexpected character":"Die Spielbeschreibung enthält ein unerwartetes Zeichen","Game description contains no dots":"Die Spielbeschreibung enthält keine Punkte","Game description contains unexpected characters":"Die Spielbeschreibung enthält unerwartete Zeichen","Game description has {0} balls; expected {1}":"Die Spielbeschreibung hat {0} Kugeln; erwartet wurden {1}","Game description is corrupted":"Die Spielbeschreibung ist beschädigt","Game description is longer than expected":"Die Spielbeschreibung ist länger als erwartet","Game description is shorter than expected":"Die Spielbeschreibung ist kürzer als erwartet","Game description is the wrong length":"Die Spielbeschreibung hat die falsche Länge","Game description is too long":"Die Spielbeschreibung ist zu lang","Game description is too short":"Die Spielbeschreibung ist zu kurz","Game description is wrong length":"Die Spielbeschreibung hat eine falsche Länge","Game description longer than expected":"Spielbeschreibung länger als erwartet","Game description must be hexadecimal":"Die Spielbeschreibung muss hexadezimal sein","Game description shorter than expected":"Spielbeschreibung kürzer als erwartet","Game description too long":"Spielbeschreibung zu lang","Game is already solved":"Das Spiel ist schon gelöst","Grid area must be at least six squares":"Die Gitterfläche muss mindestens sechs Felder groß sein","Grid area must be greater than 1":"Die Gitterfläche muss größer als 1 sein","Grid area must be greater than one":"Die Gitterfläche muss größer als eins sein","Grid description is the wrong length or not hexadecimal":"Die Gitterbeschreibung hat die falsche Länge oder ist nicht hexadezimal","Grid description strings not used with this grid type":"Gitterbeschreibungen werden bei diesem Gittertyp nicht verwendet","Grid dimensions cannot be negative":"Gitterabmessungen können nicht negativ sein","Grid dimensions must be at most {0}":"Die Gitterabmessungen dürfen höchstens {0} betragen","Grid dimensions must be whole numbers":"Die Gitterabmessungen müssen ganze Zahlen sein","Grid is too big":"Das Gitter ist zu groß","Grid must contain at least two squares":"Das Gitter muss mindestens zwei Felder enthalten","Grid size must be between 3 and 9":"Die Gittergröße muss zwischen 3 und 9 liegen","Grid size must be between {0} and {1}":"Die Gittergröße muss zwischen {0} und {1} liegen","Hard and Extreme puzzles are limited to a maximum number of {0}":"Rätsel auf Schwer und Extrem sind auf höchstens {0} begrenzt","Height must be at least 3":"Die Höhe muss mindestens 3 sein","Height must be at least five":"Die Höhe muss mindestens fünf sein","Height must be at least one":"Die Höhe muss mindestens eins sein","Height must be at least the rotating block size":"Die Höhe muss mindestens der Größe der Drehblöcke entsprechen","Height must be at least two":"Die Höhe muss mindestens zwei sein","Illegal grid type":"Unzulässige Gitterart","Incorrect number balance in game description":"Falsches Zahlenverhältnis in der Spielbeschreibung","Initial x-coordinate was out of range":"Die x-Startkoordinate lag außerhalb des gültigen Bereichs","Initial y-coordinate was out of range":"Die y-Startkoordinate lag außerhalb des gültigen Bereichs","Internal error: solution is badly formatted":"Interner Fehler: Die Lösung ist falsch formatiert","Invalid character in block structure specification":"Ungültiges Zeichen in der Blockstruktur-Angabe","Invalid character in game description":"Ungültiges Zeichen in der Spielbeschreibung","Invalid character in grid specification":"Ungültiges Zeichen in der Gitterangabe","Invalid character in number list":"Ungültiges Zeichen in der Zahlenliste","Invalid characters in game description":"Ungültige Zeichen in der Spielbeschreibung","Invalid format grid description string.":"Ungültig formatierte Gitterbeschreibung.","Invalid parameters: {0}":"Ungültige Parameter: {0}","Invalid syntax in game description":"Ungültige Syntax in der Spielbeschreibung","Jigsaw puzzles with more than {0} symbols take too long to generate":"Jigsaw-Rätsel mit mehr als {0} Symbolen dauern beim Erzeugen zu lange","Killer puzzle dimensions must be smaller than 10":"Die Abmessungen eines Killer-Rätsels müssen kleiner als 10 sein","Malformed pending game description":"Fehlerhafte ausstehende Spielbeschreibung","Matrix description is the wrong length or not hexadecimal":"Die Matrixbeschreibung hat die falsche Länge oder ist nicht hexadezimal","Maximum face number must be a whole number":"Die höchste Zahl auf den Steinen muss eine ganze Zahl sein","Maximum face number must be at least one":"Die höchste Zahl auf den Steinen muss mindestens eins sein","Maximum face number must be at most {0}":"Die höchste Zahl auf den Steinen darf höchstens {0} sein","Maximum of 9 colours":"Höchstens 9 Farben","Medium puzzles need more than one bridge per direction, or loops disallowed":"Rätsel auf Mittel brauchen mehr als eine Brücke pro Richtung oder verbotene Schleifen","Mines solver opened a mine: inconsistent knowledge":"Der Minen-Löser hat eine Mine geöffnet: widersprüchliches Wissen","Minimum number of balls may not be greater than maximum":"Die Mindestzahl an Kugeln darf nicht größer sein als die Höchstzahl","Missing grid description string.":"Die Gitterbeschreibung fehlt.","Missing separator":"Trennzeichen fehlt","Monster numbers do not match grid spaces":"Die Monsterzahlen passen nicht zu den Plätzen im Gitter","More than one starting square specified":"Mehr als ein Startfeld angegeben","Multiple solutions exist for this puzzle":"Für dieses Rätsel gibt es mehrere Lösungen","Must have at least five regions":"Es müssen mindestens fünf Bereiche sein","Must have at least one guess":"Es muss mindestens einen Versuch geben","Must have between {0} and {1} colours":"Es müssen zwischen {0} und {1} Farben sein","No game set up to solve":"Es ist kein Spiel zum Lösen eingerichtet","No gems specified":"Keine Edelsteine angegeben","No solution exists for this position":"Für diese Stellung gibt es keine Lösung","No solution exists for this puzzle":"Für dieses Rätsel gibt es keine Lösung","No solution found":"Keine Lösung gefunden","No starting square specified":"Kein Startfeld angegeben","Not enough data in block structure specification":"Zu wenige Daten in der Blockstruktur-Angabe","Not enough data in grid description":"Zu wenige Daten in der Gitterbeschreibung","Not enough data to fill grid":"Zu wenige Daten, um das Gitter zu füllen","Not enough grid space to place all blue faces":"Im Gitter ist nicht genug Platz für alle blauen Flächen","Not enough jigsaw blocks":"Zu wenige Jigsaw-Blöcke","Not enough killer cages":"Zu wenige Käfige","Not enough numbers given after grid specification":"Nach der Gitterangabe stehen zu wenige Zahlen","Not enough space to place the solid on an empty cell":"Nicht genug Platz, um den Körper auf ein leeres Feld zu stellen","Number of colours must be at least three":"Es müssen mindestens drei Farben sein","Number of colours must be at least two":"Es müssen mindestens zwei Farben sein","Number of points must be a whole number":"Die Anzahl Punkte muss eine ganze Zahl sein","Number of points must be at least {0}":"Die Anzahl Punkte muss mindestens {0} sein","Number of points must be at most {0}":"Die Anzahl Punkte darf höchstens {0} sein","Number of shuffling moves cannot be negative":"Die Anzahl Mischzüge kann nicht negativ sein","Number of shuffling moves must be a whole number":"Die Anzahl Mischzüge muss eine ganze Zahl sein","Number of shuffling moves must be at most 10000":"Die Anzahl Mischzüge darf höchstens 10000 sein","Number of shuffling moves must be at most {0}":"Die Anzahl Mischzüge darf höchstens {0} sein","Number out of range in game description":"Zahl außerhalb des gültigen Bereichs in der Spielbeschreibung","Number too large":"Zahl zu groß","Out-of-range number in game description":"Zahl außerhalb des gültigen Bereichs in der Spielbeschreibung","Out-of-range number in grid description":"Zahl außerhalb des gültigen Bereichs in der Gitterbeschreibung","Parameters must be whole numbers":"Die Werte müssen ganze Zahlen sein","Patch coordinates do not identify a usable grid fragment":"Die Patch-Koordinaten ergeben kein brauchbares Gitterstück","Patch offset out of bounds.":"Patch-Versatz außerhalb des gültigen Bereichs.","Percentage of black squares must be between 5% and 100%":"Der Anteil schwarzer Felder muss zwischen 5% und 100% liegen","Percentage of islands must be from 1% to 30%":"Der Anteil der Inseln muss zwischen 1% und 30% liegen","Puzzle is inconsistent":"Das Rätsel ist widersprüchlich","Puzzle is too large":"Das Rätsel ist zu groß","Puzzle is too long for unique-rows mode":"Das Rätsel ist zu lang für den Modus mit eindeutigen Zeilen","Puzzle is too tall for unique-rows mode":"Das Rätsel ist zu hoch für den Modus mit eindeutigen Zeilen","Puzzle is unsolvable":"Das Rätsel ist unlösbar","Puzzle must have one entrance and one exit":"Das Rätsel muss genau einen Eingang und einen Ausgang haben","Puzzles with more than {0} symbols take too long to generate":"Rätsel mit mehr als {0} Symbolen dauern beim Erzeugen zu lange","Random seed must not be empty":"Der Zufallswert (Seed) darf nicht leer sein","Rotating block size must be at least two":"Die Größe der Drehblöcke muss mindestens zwei sein","Row counts inconsistent":"Die Zeilenzahlen passen nicht zusammen","Rows of blocks must be at least 1":"Es muss mindestens 1 Blockzeile geben","Scoring system not recognised":"Punktesystem nicht erkannt","Size and difficulty must be whole numbers":"Größe und Schwierigkeit müssen ganze Zahlen sein","Size must be at least 5 for Adjacent puzzles of this difficulty":"Für Nachbarn-Rätsel dieser Schwierigkeit muss die Größe mindestens 5 sein","Size must be between {0} and {1}":"Die Größe muss zwischen {0} und {1} liegen","Solution not known for this puzzle":"Für dieses Rätsel ist keine Lösung bekannt","Solve operation failed":"Lösen ist fehlgeschlagen","Solve operation produced an invalid move":"Lösen hat einen ungültigen Zug erzeugt","Solver could not finish this grid":"Der Löser konnte dieses Gitter nicht zu Ende bringen","Solving algorithm cannot complete this puzzle":"Der Lösungsalgorithmus kann dieses Rätsel nicht zu Ende bringen","Starting cell is outside the grid":"Das Startfeld liegt außerhalb des Gitters","Subtraction and division blocks must have area 2":"Blöcke mit Subtraktion oder Division müssen genau 2 Felder groß sein","That grid has too many faces to generate":"Dieses Gitter hat zu viele Flächen, um erzeugt zu werden","The Cross board is only available at {0}×{1}":"Das Kreuz-Brett gibt es nur in {0}×{1}","The Octagon board is only available at {0}×{1}":"Das Achteck-Brett gibt es nur in {0}×{1}","The ball has hit a mine; undo that move first":"Die Kugel ist in eine Mine gelaufen; mach diesen Zug erst rückgängig","The grid can have at most {0} squares":"Das Gitter darf höchstens {0} Felder haben","The grid may have at most {0} squares":"Das Gitter darf höchstens {0} Felder haben","The initial square contains a mine":"Im Startfeld liegt eine Mine","The solid cannot start on a blue cell":"Der Körper darf nicht auf einem blauen Feld starten","The solution has already been revealed":"Die Lösung wurde bereits aufgedeckt","There must be at least one ball":"Es muss mindestens eine Kugel geben","There must be at least one mine":"Es muss mindestens eine Mine geben","This arrangement cannot be solved":"Diese Anordnung lässt sich nicht lösen","This game does not support the Solve operation":"Dieses Spiel unterstützt Lösen nicht","This puzzle has no solution":"Dieses Rätsel hat keine Lösung","This puzzle instance contains a contradiction":"Dieses Rätsel enthält einen Widerspruch","This puzzle is not self-consistent":"Dieses Rätsel ist in sich widersprüchlich","Too few clues for block structure":"Zu wenige Hinweise für die Blockstruktur","Too few clues for grid size":"Zu wenige Hinweise für die Gittergröße","Too little data in clue list":"Zu wenige Daten in der Hinweisliste","Too little data in edge list":"Zu wenige Daten in der Kantenliste","Too many balls to fit in the grid":"Zu viele Kugeln für das Gitter","Too many clues for block structure":"Zu viele Hinweise für die Blockstruktur","Too many clues for grid size":"Zu viele Hinweise für die Gittergröße","Too many colours (at most {0})":"Zu viele Farben (höchstens {0})","Too many colours makes given grid size impossible":"Bei so vielen Farben ist die angegebene Gittergröße unmöglich","Too many guesses (at most {0})":"Zu viele Versuche (höchstens {0})","Too many jigsaw blocks":"Zu viele Jigsaw-Blöcke","Too many killer cages":"Zu viele Käfige","Too many mines for grid size":"Zu viele Minen für die Gittergröße","Too many pegs per guess (at most {0})":"Zu viele Stifte pro Versuch (höchstens {0})","Too many regions to fit in grid":"Zu viele Bereiche für das Gitter","Too much data in block structure specification":"Zu viele Daten in der Blockstruktur-Angabe","Too much data in clue list":"Zu viele Daten in der Hinweisliste","Too much data in edge list":"Zu viele Daten in der Kantenliste","Too much data to fill grid":"Zu viele Daten, um das Gitter zu füllen","Too much data to fit in grid":"Zu viele Daten für das Gitter","Trivial solutions are uninteresting":"Triviale Lösungen sind langweilig","Unable to build a grid for these parameters":"Mit diesen Werten lässt sich kein Gitter bauen","Unable to build this grid":"Dieses Gitter lässt sich nicht bauen","Unable to find a solution for this puzzle":"Für dieses Rätsel ließ sich keine Lösung finden","Unable to find a solution from this position":"Von dieser Stellung aus ließ sich keine Lösung finden","Unable to find a solution to this puzzle":"Für dieses Rätsel ließ sich keine Lösung finden","Unable to find a unique solution for this puzzle":"Für dieses Rätsel ließ sich keine eindeutige Lösung finden","Unable to generate a puzzle of this size":"In dieser Größe ließ sich kein Rätsel erzeugen","Unable to generate a puzzle with these parameters":"Mit diesen Werten ließ sich kein Rätsel erzeugen","Unable to solve this puzzle":"Dieses Rätsel lässt sich nicht lösen","Unable to support more than {0} distinct symbols":"Mehr als {0} verschiedene Symbole sind nicht möglich","Unable to work out any more of this puzzle":"An diesem Rätsel lässt sich nichts weiter herleiten","Unexpected additional character at end of game description":"Unerwartetes zusätzliches Zeichen am Ende der Spielbeschreibung","Unexpected additional data at end of game description":"Unerwartete zusätzliche Daten am Ende der Spielbeschreibung","Unexpected character '{0}' in description":"Unerwartetes Zeichen „{0}“ in der Beschreibung","Unexpected character in clue list":"Unerwartetes Zeichen in der Hinweisliste","Unexpected character in edge list":"Unerwartetes Zeichen in der Kantenliste","Unexpected data at end of game description":"Unerwartete Daten am Ende der Spielbeschreibung","Unknown board type":"Unbekannte Brettform","Unknown character in description":"Unbekanntes Zeichen in der Beschreibung","Unknown difficulty":"Unbekannte Schwierigkeit","Unknown difficulty level":"Unbekannter Schwierigkeitsgrad","Unknown difficulty rating":"Unbekannte Schwierigkeitsstufe","Unknown shape type":"Unbekannte Art der Form","Unknown symmetry":"Unbekannte Symmetrie","Unknown symmetry type":"Unbekannte Symmetrieart","Unrecognised character in game description":"Unbekanntes Zeichen in der Spielbeschreibung","Unrecognised characters in game description":"Unbekannte Zeichen in der Spielbeschreibung","Unrecognised clue type":"Unbekannte Hinweisart","Unrecognised grid description.":"Unbekannte Gitterbeschreibung.","Unrecognised solid type":"Unbekannte Art des Körpers","Width and height cannot both be two":"Breite und Höhe dürfen nicht beide zwei sein","Width and height for this grid type must both be at least {0}":"Bei dieser Gitterart müssen Breite und Höhe beide mindestens {0} sein","Width and height must be at least two":"Breite und Höhe müssen mindestens zwei sein","Width and height must be at least {0}":"Breite und Höhe müssen mindestens {0} sein","Width and height must be at most twelve":"Breite und Höhe dürfen höchstens zwölf sein","Width and height must be at most {0}":"Breite und Höhe dürfen höchstens {0} sein","Width and height must be at most {0} to generate a puzzle":"Breite und Höhe dürfen höchstens {0} sein, damit sich ein Rätsel erzeugen lässt","Width and height must be positive":"Breite und Höhe müssen positiv sein","Width and height must be whole numbers":"Breite und Höhe müssen ganze Zahlen sein","Width and height must both be at least 3":"Breite und Höhe müssen beide mindestens 3 sein","Width and height must both be at least four":"Breite und Höhe müssen beide mindestens vier sein","Width and height must both be at least one":"Breite und Höhe müssen beide mindestens eins sein","Width and height must both be at least two":"Breite und Höhe müssen beide mindestens zwei sein","Width and height must both be even":"Breite und Höhe müssen beide gerade sein","Width and height must both be greater than three":"Breite und Höhe müssen beide größer als drei sein","Width and height must both be greater than two":"Breite und Höhe müssen beide größer als zwei sein","Width and height must both be greater than zero":"Breite und Höhe müssen beide größer als null sein","Width and height must both be positive":"Breite und Höhe müssen beide positiv sein","With three colours, a solvable grid may have at most {0} squares":"Mit drei Farben darf ein lösbares Gitter höchstens {0} Felder haben","Width must be at least 3":"Die Breite muss mindestens 3 sein","Width must be at least five":"Die Breite muss mindestens fünf sein","Width must be at least one":"Die Breite muss mindestens eins sein","Width must be at least the rotating block size":"Die Breite muss mindestens der Größe der Drehblöcke entsprechen","Width must be at least two":"Die Breite muss mindestens zwei sein","Width, height and ball counts must be whole numbers":"Breite, Höhe und Kugelzahlen müssen ganze Zahlen sein","Width, height and difficulty must be whole numbers":"Breite, Höhe und Schwierigkeit müssen ganze Zahlen sein","Width, height and number of colours must be whole numbers":"Breite, Höhe und Anzahl Farben müssen ganze Zahlen sein","Width, height, block size and move count must be whole numbers":"Breite, Höhe, Blockgröße und Zuganzahl müssen ganze Zahlen sein","X puzzles need at least four symbols":"X-Rätsel brauchen mindestens vier Symbole","X-diagonal jigsaw puzzles with more than {0} symbols take too long to generate":"Jigsaw-Rätsel mit X-Diagonale und mehr als {0} Symbolen dauern beim Erzeugen zu lange","You have hit a mine; undo that move first":"Du bist auf eine Mine getreten; mach diesen Zug erst rückgängig","a cell may be a number position for only one rectangle":"ein Feld kann nur für ein einziges Rechteck die Zahl tragen","at least one column contains more numbers than will fit":"mindestens eine Spalte enthält mehr Zahlen, als hineinpassen","at least one row contains more numbers than will fit":"mindestens eine Zeile enthält mehr Zahlen, als hineinpassen","cells are not adjacent":"die Felder sind keine Nachbarn","domino layout: no path between singletons":"Dominoanordnung: kein Weg zwischen Einzelfeldern","domino layout: stranded square cannot be paired":"Dominoanordnung: gestrandetes Feld lässt sich nicht paaren","dot touches the outside twice":"der Punkt berührt das Äußere zweimal","dot with fewer than two edges":"Punkt mit weniger als zwei Kanten","edge does not follow its face":"die Kante folgt ihrer Fläche nicht","edge shared by three faces":"Kante, die sich drei Flächen teilen","expected CxR or Nj":"CxR oder Nj erwartet","expected WxH":"WxH erwartet","expected WxHnN":"WxHnN erwartet","expected a grid size":"eine Gittergröße erwartet","expected a maximum number":"eine Höchstzahl erwartet","expected a number of points":"eine Anzahl Punkte erwartet","expected a solid letter followed by WxH":"ein Körperbuchstabe gefolgt von WxH erwartet","expected something like c6p4g10Bm":"etwas wie c6p4g10Bm erwartet","expected w<W>h<H>m<MIN>M<MAX>":"w<W>h<H>m<MIN>M<MAX> erwartet","generateKeen: solver disagrees with the square":"generateKeen: Der Löser widerspricht dem Quadrat","grid inconsistency while walking round a face":"Widerspruch im Gitter beim Umrunden einer Fläche","inconsistent clues while assembling":"widersprüchliche Hinweise beim Zusammensetzen","inconsistent distance field":"widersprüchliches Abstandsfeld","inconsistent face classes":"widersprüchliche Flächenklassen","latin rectangle could not be extended":"das lateinische Rechteck ließ sich nicht erweitern","latinGenerate: no extension found":"latinGenerate: keine Erweiterung gefunden","latinSquare: rectangle could not be extended":"latinSquare: Das Rechteck ließ sich nicht erweitern","line too long for solver":"Linie zu lang für den Löser","no clue left to place":"kein Hinweis mehr zu platzieren","no such laser: {0}":"kein solcher Laser: {0}","rolled solid does not fit its destination":"der gerollte Körper passt nicht an sein Ziel","shown":"gezeigt","too few row/column specifications":"zu wenige Zeilen-/Spaltenangaben","too many row/column specifications":"zu viele Zeilen-/Spaltenangaben","unrecognised character in game description":"unbekanntes Zeichen in der Spielbeschreibung","yes!":"ja!","9×9 Extreme puzzles take too long to generate; try 8×8 or Expert":"9×9-Rätsel auf Extrem dauern beim Erzeugen zu lange; probier 8×8 oder Experte"}`),Z={moves:`Züge: {n}`,movesCompleted:{one:`Geschafft in {n} Zug`,other:`Geschafft in {n} Zügen`},movesSinceSolve:`Züge seit dem automatischen Lösen: {n}`,completedMoves:`Geschafft! Züge: {n}`,solvedByComputer:`Vom Computer gelöst`,completed:`Geschafft!`,completedPrefix:`Geschafft! `,autoSolved:`Automatisch gelöst.`,autoSolvedPrefix:`Automatisch gelöst. `,autoSolverUsedPrefix:`Automatischer Löser benutzt. `,failedPrefix:`Keine Züge mehr. `,dead:`Du bist auf eine Mine getreten.`,target:` (Ziel {n})`},Q=JSON.parse(`{"blackbox":{"name":"Blackbox","description":"Finde die versteckten Kugeln, indem du Laser in die Box schießt und zusiehst, wo sie wieder herauskommen.","preset":{"5x5_3_balls":"5×5, 3 Kugeln","8x8_5_balls":"8×8, 5 Kugeln","8x8_3_6_balls":"8×8, 3-6 Kugeln","10x10_5_balls":"10×10, 5 Kugeln","10x10_4_10_balls":"10×10, 4-10 Kugeln"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"no_of_balls":{"name":"Anzahl Kugeln"}},"achievement":{"sparing_shots":{"name":"Sparsam geschossen","description":"Finde alle Kugeln und schieße dabei aus höchstens der Hälfte der Ports."},"pinpoint":{"name":"Punktgenau","description":"Finde alle Kugeln in einer Box ab 8×8 mit höchstens drei Lasern pro Kugel."},"shot_in_the_dark":{"name":"Schuss ins Blaue","description":"Lass deine Kugeln prüfen, ohne einen einzigen Laser abzufeuern – und lieg daneben."}},"status":{"correct":"RICHTIG!","wrong":{"one":"{wrong} falsch, {n} Kugel übersehen.","other":"{wrong} falsch, {n} Kugeln übersehen."},"marked":"Markierte Kugeln: {n} / {range}  ·  Abgefeuerte Laser: {fired}","tooMany":"  ·  {n} Kugeln zu viel markiert.","check":"  ·  Klicke zum Prüfen auf den Knopf in der Ecke."}},"bridges":{"name":"Brücken","alsoKnownAs":"Hashiwokakero, Hashi","description":"Verbinde die Inseln mit Brücken, sodass jede Zahl aufgeht und sich nichts kreuzt.","preset":{"7x7_easy":"7×7 Leicht","7x7_medium":"7×7 Mittel","7x7_hard":"7×7 Schwer","10x10_easy":"10×10 Leicht","10x10_medium":"10×10 Mittel","10x10_hard":"10×10 Schwer","15x15_easy":"15×15 Leicht","15x15_medium":"15×15 Mittel","15x15_hard":"15×15 Schwer","10x10_medium_no_loops":"10×10 Mittel, keine Schleifen"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"difficulty":{"name":"Schwierigkeit","choice":{"easy":"Leicht","medium":"Mittel","hard":"Schwer"}},"allow_loops":{"name":"Schleifen erlauben"},"max_bridges_per_direction":{"name":"Max. Brücken pro Richtung","choice":{"1":"1","2":"2","3":"3","4":"4"}},"of_island_squares":{"name":"% Inselfelder","choice":{"5":"5%","10":"10%","15":"15%","20":"20%","25":"25%","30":"30%"}},"expansion_factor":{"name":"Ausdehnungsfaktor (%)","choice":{"0":"0%","10":"10%","20":"20%","30":"30%","40":"40%","50":"50%","60":"60%","70":"70%","80":"80%","90":"90%","100":"100%"}}},"action":{"g":{"label":"Hilfslinien","title":"Feine Linien überall dort ein- oder ausblenden, wo eine Brücke hinpasst (G)"},"e":{"label":"Radieren","title":"Von einer Insel aus ziehen, um ihre Brücken in diese Richtung zu entfernen (E)"}},"achievement":{"no_markers":{"name":"Klares Wasser","description":"Löse ein Rätsel ab 10×10, ohne eine einzige „hier keine Brücke“-Markierung zu zeichnen."},"sure_footing":{"name":"Trittsicher","description":"Löse ein Rätsel ab 10×10 auf Schwer, ohne eine Brücke zu entfernen oder Rückgängig zu nutzen."}}},"cube":{"name":"Würfel","description":"Rolle einen Körper über ein Gitter und sammle mit seinen Flächen jedes blaue Feld ein.","preset":{"cube":"Würfel","tetrahedron":"Tetraeder","octahedron":"Oktaeder","icosahedron":"Ikosaeder"},"config":{"type_of_solid":{"name":"Art des Körpers","choice":{"tetrahedron":"Tetraeder","cube":"Würfel","octahedron":"Oktaeder","icosahedron":"Ikosaeder"}},"width_top":{"name":"Breite / oben"},"height_bottom":{"name":"Höhe / unten"}},"achievement":{"short_haul":{"name":"Kurzstrecke","description":"Mach beim Würfel mit höchstens zwanzig Rollbewegungen alle Flächen blau."},"octahedron_ace":{"name":"Acht Flächen im Flug","description":"Mach beim Oktaeder mit höchstens dreißig Rollbewegungen alle Flächen blau."},"scenic_route":{"name":"Große Rundreise","description":"Roll den Körper mindestens zweihundertmal, bevor alle Flächen blau sind."}}},"dominosa":{"name":"Dominosa","description":"Finde heraus, wo der gemischte Dominosatz in einem Zahlengitter liegt.","preset":{"up_to_double_3":"Bis Doppel-3","up_to_double_4":"Bis Doppel-4","up_to_double_5":"Bis Doppel-5","up_to_double_6":"Bis Doppel-6","up_to_double_7":"Bis Doppel-7","up_to_double_8":"Bis Doppel-8","up_to_double_9":"Bis Doppel-9"},"config":{"maximum_number_on_dominoes":{"name":"Höchste Zahl auf den Steinen"},"difficulty":{"name":"Schwierigkeit","choice":{"very_easy":"Sehr leicht","easy":"Leicht","hard":"Schwer","extreme":"Extrem","ambiguous":"Mehrdeutig"}}},"achievement":{"no_lines":{"name":"Ohne Bleistift","description":"Löse ein Set ab Doppel-6, ohne eine einzige Bleistiftlinie zu ziehen."},"one_click_each":{"name":"Ein Klick pro Stein","description":"Löse ein Set ab Doppel-6 mit einem Klick pro Domino und ohne Rückgängig."},"doubles_first":{"name":"Pasch zuerst","description":"Lege alle Doppelsteine des Sets, bevor du irgendein anderes Domino legst."}}},"fifteen":{"name":"Fünfzehn","alsoKnownAs":"15-Puzzle, Schiebepuzzle","description":"Schiebe die Steine hin und her, bis sie in der richtigen Reihenfolge liegen.","preset":{"3x3":"3×3","4x4":"4×4","5x5":"5×5"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"}},"achievement":{"short_shuffle":{"name":"Kurz gemischt","description":"Bring das 4×4 in höchstens 100 Zügen in Ordnung."},"five_flyer":{"name":"Fünf-mal-fünf-Flitzer","description":"Bring das 5×5 in unter drei Minuten in Ordnung."},"scenic_route":{"name":"Der Umweg","description":"Brauche mehr als 300 Züge, um das 3×3 in Ordnung zu bringen."}}},"filling":{"name":"Füllen","alsoKnownAs":"Fillomino","description":"Fülle das Gitter so, dass jede Gruppe gleicher Ziffern genau so viele Felder groß ist.","preset":{"9x7":"9×7","13x9":"13×9","17x13":"17×13"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"}},"achievement":{"in_ink":{"name":"Mit Tinte geschrieben","description":"Löse ein Füllen-Rätsel, ohne eine Ziffer zu ändern oder wegzuradieren, und ohne Rückgängig."},"one_stroke":{"name":"Jedes in einem Zug","description":"Löse ein Füllen-Rätsel ab 13×9 und schreibe jede Zifferngruppe in einem einzigen Zug."}},"action":{"f":{"label":"Füllen","title":"Von einer Ziffer aus ziehen, um sie in jedes überstrichene Feld zu schreiben (F)"}}},"flip":{"name":"Umdrehen","alsoKnownAs":"Lights Out","description":"Bring jedes Feld zum Leuchten; jeder Druck dreht auch die Felder ringsherum um.","preset":{"3x3_crosses":"3×3 Kreuze","4x4_crosses":"4×4 Kreuze","5x5_crosses":"5×5 Kreuze","3x3_random":"3×3 Zufällig","4x4_random":"4×4 Zufällig","5x5_random":"5×5 Zufällig"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"shape_type":{"name":"Art der Form","choice":{"crosses":"Kreuze","random":"Zufällig"}}},"achievement":{"press_once":{"name":"Einmal drücken","description":"Bring ein Brett ab 4×4 zum Leuchten, ohne ein Feld zweimal zu drücken."},"fewest_presses":{"name":"Geringster Aufwand","description":"Bring ein 5×5-Brett mit so wenigen Drücken wie überhaupt möglich zum Leuchten."}}},"flood":{"name":"Flut","alsoKnownAs":"Flood It","description":"Überflute das Gitter von der Ecke aus, bis alles eine Farbe hat – und das innerhalb der erlaubten Züge.","preset":{"12x12_easy":"12×12 Leicht","12x12_medium":"12×12 Mittel","12x12_hard":"12×12 Schwer","16x16_medium":"16×16 Mittel","16x16_hard":"16×16 Schwer","12x12_3_colours":"12×12, 3 Farben","12x12_4_colours":"12×12, 4 Farben"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"colours":{"name":"Farben"},"extra_moves_permitted":{"name":"Erlaubte Extrazüge"}},"achievement":{"spare_moves":{"name":"Züge übrig","description":"Färbe das Gitter ein und hab dabei noch mindestens drei Züge übrig."},"beat_the_solver":{"name":"Die Maschine geschlagen","description":"Färbe das Gitter in weniger Zügen ein als die Lösung des Computers."},"one_colour_short":{"name":"Eine Farbe zu viel","description":"Hab keine Züge mehr, während nur noch zwei Farben auf dem Gitter sind."}},"status":{"moves":"{n} / {limit} Züge"}},"galaxies":{"name":"Galaxien","alsoKnownAs":"Spiral Galaxies, Tentai Show","description":"Teile das Gitter in Bereiche, die jeweils symmetrisch zu ihrem einzigen Punkt sind.","preset":{"7x7_medium":"7×7 Mittel","7x7_extreme":"7×7 Extrem","10x10_medium":"10×10 Mittel","15x15_medium":"15×15 Mittel"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"difficulty":{"name":"Schwierigkeit","choice":{"medium":"Mittel","extreme":"Extrem"}}},"achievement":{"no_arrows":{"name":"Ohne Wegweiser","description":"Löse Galaxien ab 10×10, ohne einen einzigen Pfeil zu ziehen."},"steady_hand":{"name":"Fixsterne","description":"Löse Galaxien ab 10×10, ohne eine Wand zu entfernen oder Rückgängig zu nutzen."}}},"guess":{"name":"Raten","alsoKnownAs":"Mastermind, SuperHirn","description":"Errate die versteckte Reihe farbiger Stifte anhand der Wertung deiner Versuche.","preset":{"standard":"Standard","super":"Super"},"config":{"colours":{"name":"Farben"},"pegs_per_guess":{"name":"Stifte pro Versuch"},"guesses":{"name":"Versuche"},"allow_blanks":{"name":"Leerstellen erlauben"},"allow_duplicates":{"name":"Wiederholungen erlauben"}},"action":{"l":{"label":"Buchstaben","title":"Die Stifte mit Buchstaben beschriften (L)"},"k":{"label":"Halten","title":"Einen Stift in deiner Reihe anklicken, um ihn in den nächsten Versuch mitzunehmen (K)"}},"achievement":{"five_guesses":{"name":"Codeknacker","description":"Finde die verborgene Reihe in höchstens fünf Versuchen."},"super_sleuth":{"name":"Meisterdetektiv","description":"Finde bei Super die verborgene Reihe aus fünf Stiften in höchstens sechs Versuchen."},"so_near":{"name":"So nah dran","description":"Hab keine Versuche mehr, während alle Stifte bis auf einen richtig stehen."}},"status":{"revealed":"Lösung aufgedeckt","solved":{"one":"In {n} Versuch gelöst","other":"In {n} Versuchen gelöst"},"outOfGuesses":"Keine Versuche mehr: Die Lösung wird aufgedeckt","guessN":"Versuch {n} von {total}"}},"inertia":{"name":"Trägheit","description":"Lass eine Kugel über ein Gitter gleiten und sammle jeden Edelstein ein, ohne in eine Mine zu laufen.","preset":{"10x8":"10×8","15x12":"15×12","20x16":"20×16"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"}},"achievement":{"hat_trick":{"name":"Hattrick","description":"Sammle mit einem einzigen Rollen der Kugel drei oder mehr Edelsteine ein."},"shortcut":{"name":"Abkürzung","description":"Sammle alle Edelsteine auf einem Brett ab 15×12 in weniger Zügen ein, als Lösen bräuchte."},"last_gem_mine":{"name":"Pyrrhussieg","description":"Roll auf eine Mine, und zwar mit demselben Zug, der den allerletzten Edelstein einsammelt."}},"status":{"gems":"Edelsteine: {n}","deaths":" · Tode: {n}"}},"keen":{"name":"Keen","alsoKnownAs":"KenKen, Calcudoku","description":"Fülle das lateinische Quadrat so, dass jeder Käfig seinen Rechenhinweis erfüllt.","preset":{"4x4_easy":"4×4 Leicht","5x5_easy":"5×5 Leicht","5x5_easy_x_only":"5×5 Leicht, nur ×","6x6_easy":"6×6 Leicht","6x6_medium":"6×6 Mittel","6x6_medium_x_only":"6×6 Mittel, nur ×","6x6_hard":"6×6 Schwer","6x6_expert":"6×6 Experte","6x6_extreme":"6×6 Extrem","9x9_medium":"9×9 Mittel"},"config":{"grid_size":{"name":"Gittergröße"},"difficulty":{"name":"Schwierigkeit","choice":{"easy":"Leicht","medium":"Mittel","hard":"Schwer","expert":"Experte","extreme":"Extrem"}},"multiplication_only":{"name":"Nur Multiplikation"}},"action":{"m":{"label":"Notizen","title":"In jedes leere Feld alle Möglichkeiten als Notiz schreiben (M)"},"l":{"label":"Hervorheben","title":"Jedes Feld mit der zuletzt berührten Ziffer hervorheben (L)"}},"achievement":{"no_pencil":{"name":"Kopfrechnen","description":"Löse ein Keen ab 6×6, ohne eine einzige Bleistiftnotiz zu schreiben."},"products_only":{"name":"Reines Produkt","description":"Löse ein 6×6-Keen auf Mittel nur mit Multiplikation."}}},"lightup":{"name":"Licht an","alsoKnownAs":"Akari, Light Up","description":"Setze Glühbirnen so, dass jedes Feld beleuchtet ist und keine Birne eine andere anstrahlt.","preset":{"7x7_easy":"7×7 Leicht","7x7_medium":"7×7 Mittel","7x7_hard":"7×7 Schwer","10x10_easy":"10×10 Leicht","10x10_medium":"10×10 Mittel","10x10_hard":"10×10 Schwer","14x14_easy":"14×14 Leicht","14x14_medium":"14×14 Mittel","14x14_hard":"14×14 Schwer"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"of_black_squares":{"name":"% schwarze Felder"},"symmetry":{"name":"Symmetrie","choice":{"none":"Keine","2_way_mirror":"2-fach gespiegelt","2_way_rotational":"2-fach gedreht","4_way_mirror":"4-fach gespiegelt","4_way_rotational":"4-fach gedreht"}},"difficulty":{"name":"Schwierigkeit","choice":{"easy":"Leicht","medium":"Mittel","hard":"Schwer"}}},"achievement":{"no_crosses":{"name":"Nur Licht","description":"Löse Licht an ab 10×10, ohne ein einziges Kreuz zu setzen."},"no_takebacks":{"name":"Helle Idee","description":"Löse Licht an auf Schwer, ohne je eine Birne wegzunehmen."}},"action":{"x":{"label":"Kreuz","title":"Klicks setzen Kreuze statt Birnen (X)"}}},"loopy":{"name":"Schleifen","alsoKnownAs":"Slitherlink","description":"Zeichne eine einzige geschlossene Schleife, sodass jede Zahl die Linien um sich herum zählt.","preset":{"7x7_squares_easy":"7×7 Quadrate Leicht","10x10_squares_easy":"10×10 Quadrate Leicht","7x7_squares_medium":"7×7 Quadrate Mittel","10x10_squares_medium":"10×10 Quadrate Mittel","7x7_squares_expert":"7×7 Quadrate Experte","10x10_squares_expert":"10×10 Quadrate Experte","10x10_triangular_expert":"10×10 Dreiecke Experte","12x10_honeycomb_expert":"12×10 Wabe Experte","7x7_snub_square_expert":"7×7 Snub-Quadrat Experte","9x9_cairo_expert":"9×9 Cairo Experte","5x4_great_hexagonal_expert":"5×4 Groß-Sechseckig Experte","7x7_octagonal_expert":"7×7 Achteckig Experte","5x5_kites_expert":"5×5 Drachen Experte","5x5_floret_expert":"5×5 Blüte Experte","5x4_dodecagonal_expert":"5×4 Zwölfeckig Experte","5x4_great_dodecagonal_expert":"5×4 Groß-Zwölfeckig Experte","10x10_penrose_kite_dart_expert":"10×10 Penrose (Drache/Pfeil) Experte","10x10_penrose_rhombs_expert":"10×10 Penrose (Rauten) Experte"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"grid_type":{"name":"Gitterart","choice":{"squares":"Quadrate","triangular":"Dreiecke","honeycomb":"Wabe","snub_square":"Snub-Quadrat","cairo":"Cairo","great_hexagonal":"Groß-Sechseckig","octagonal":"Achteckig","kites":"Drachen","floret":"Blüte","dodecagonal":"Zwölfeckig","great_dodecagonal":"Groß-Zwölfeckig","penrose_kite_dart":"Penrose (Drache/Pfeil)","penrose_rhombs":"Penrose (Rauten)"}},"difficulty":{"name":"Schwierigkeit","choice":{"easy":"Leicht","medium":"Mittel","hard":"Schwer","expert":"Experte"}}},"achievement":{"off_grid":{"name":"Abseits des Gitters","description":"Löse Schleifen auf irgendeinem Gitter außer Quadraten."},"no_crosses":{"name":"Nur die Schleife","description":"Löse Schleifen in 10×10, ohne eine einzige Kante durchzustreichen."},"aperiodic":{"name":"Aperiodisch","description":"Löse Schleifen auf einem Penrose-Gitter, ohne je eine gezogene Linie zu entfernen."}},"action":{"x":{"label":"Kreuz","title":"Klicks streichen Kanten durch, statt Linien zu ziehen (X)"}}},"magnets":{"name":"Magnete","description":"Lege Magnete und Leersteine so in die Dominos, dass die Polzahlen aufgehen.","preset":{"6x5_easy":"6×5 Leicht","6x5_hard":"6×5 Schwer","6x5_hard_strip_clues":"6×5 Schwer, weniger Hinweise","8x7_easy":"8×7 Leicht","8x7_hard":"8×7 Schwer","8x7_hard_strip_clues":"8×7 Schwer, weniger Hinweise","10x9_hard":"10×9 Schwer","10x9_hard_strip_clues":"10×9 Schwer, weniger Hinweise"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"difficulty":{"name":"Schwierigkeit","choice":{"easy":"Leicht","hard":"Schwer"}},"strip_clues":{"name":"Weniger Hinweise"}},"achievement":{"no_flips":{"name":"Richtig herum","description":"Löse Magnete ab 8×7, ohne je einen Magneten umzudrehen."},"stripped":{"name":"Blanke Drähte","description":"Löse Magnete in 10×9 auf Schwer mit weniger Hinweisen in unter zehn Minuten."}},"action":{"b":{"label":"Leerstein","title":"Klicks markieren Dominos als Leerstein, statt Magnete zu setzen (B)"}}},"map":{"name":"Landkarte","description":"Färbe die Karte mit vier Farben, sodass keine zwei benachbarten Bereiche gleich sind.","preset":{"20x15_easy_30_regions":"20×15 Leicht, 30 Bereiche","20x15_medium_30_regions":"20×15 Mittel, 30 Bereiche","20x15_hard_30_regions":"20×15 Schwer, 30 Bereiche","20x15_extreme_30_regions":"20×15 Extrem, 30 Bereiche","30x25_medium_75_regions":"30×25 Mittel, 75 Bereiche","30x25_hard_75_regions":"30×25 Schwer, 75 Bereiche"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"regions":{"name":"Bereiche"},"difficulty":{"name":"Schwierigkeit","choice":{"easy":"Leicht","medium":"Mittel","hard":"Schwer","extreme":"Extrem"}}},"achievement":{"no_dots":{"name":"Freihand-Atlas","description":"Löse eine Landkarte auf Schwer oder schwerer ohne einen einzigen Bleistiftpunkt."},"steady_brush":{"name":"Ruhiger Pinsel","description":"Löse eine Landkarte auf Extrem, ohne je die Farbe eines Bereichs zu ändern."}},"action":{"l":{"label":"Nummern","title":"In jedem Bereich eine Zahl anzeigen (L)"}}},"mines":{"name":"Minen","alsoKnownAs":"Minesweeper","description":"Decke jedes Feld auf, unter dem keine Mine liegt – raten musst du dabei nie.","preset":{"9x9_beginner_10_mines":"9×9 Anfänger, 10 Minen","9x9_35_mines":"9×9, 35 Minen","16x16_intermediate_40_mines":"16×16 Fortgeschritten, 40 Minen","16x16_99_mines":"16×16, 99 Minen","30x16_expert_99_mines":"30×16 Experte, 99 Minen","30x16_170_mines":"30×16, 170 Minen"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"mines":{"name":"Minen"},"ensure_solubility":{"name":"Lösbarkeit garantieren"}},"achievement":{"no_flags":{"name":"Ohne Flagge","description":"Gewinne eine Partie Minen, ohne eine einzige Flagge zu setzen."},"expert_sweep":{"name":"Kampfmittelräumer","description":"Gewinne das 30×16-Brett auf Experte in unter fünf Minuten."},"so_close":{"name":"Knapp daneben","description":"Tritt auf eine Mine, wenn höchstens noch drei sichere Felder zu öffnen sind."}},"status":{"marked":"Markiert: {n} / {total}","deaths":" · Tode: {n}"}},"net":{"name":"Netz","alsoKnownAs":"NetWalk","description":"Drehe die Kacheln, bis jede einzelne mit der Mitte verdrahtet ist.","preset":{"5x5":"5×5","7x7":"7×7","9x9":"9×9","11x11":"11×11","13x11":"13×11","5x5_wrapping":"5×5 umlaufend","7x7_wrapping":"7×7 umlaufend","9x9_wrapping":"9×9 umlaufend","11x11_wrapping":"11×11 umlaufend","13x11_wrapping":"13×11 umlaufend"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"walls_wrap_around":{"name":"Ränder umlaufend"},"barrier_probability":{"name":"Barrieren-Wahrscheinlichkeit"},"ensure_unique_solution":{"name":"Eindeutige Lösung garantieren"}},"action":{"j":{"label":"Mischen","title":"Jede nicht gesperrte Kachel zufällig drehen (J)"},"scroll_left":{"label":"←","title":"Ansicht nach links schieben (Shift+←)"},"scroll_up":{"label":"↑","title":"Ansicht nach oben schieben (Shift+↑)"},"scroll_down":{"label":"↓","title":"Ansicht nach unten schieben (Shift+↓)"},"scroll_right":{"label":"→","title":"Ansicht nach rechts schieben (Shift+→)"},"k":{"label":"Sperren","title":"Kacheln anklicken, um sie zu sperren oder freizugeben, statt sie zu drehen (K)"}},"achievement":{"no_locks":{"name":"Nichts unter Verschluss","description":"Löse ein Netz ab 9×9, ohne eine einzige Kachel zu sperren."},"not_a_turn_wasted":{"name":"Keine Drehung zu viel","description":"Löse ein Netz ab 9×9, ohne eine Kachel öfter zu drehen als nötig."},"jumbled":{"name":"Durchgeschüttelt","description":"Drück Mischen und löse das Rätsel trotzdem."}},"status":{"active":"Aktiv: {n}/{total}"}},"netslide":{"name":"Netzschieber","description":"Schiebe Zeilen und Spalten mit Leitungsstücken hin und her, bis alles verbunden ist.","preset":{"3x3_easy":"3×3 Leicht","3x3_medium":"3×3 Mittel","3x3_hard":"3×3 Schwer","4x4_easy":"4×4 Leicht","4x4_medium":"4×4 Mittel","4x4_hard":"4×4 Schwer","5x5_easy":"5×5 Leicht","5x5_medium":"5×5 Mittel","5x5_hard":"5×5 Schwer"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"walls_wrap_around":{"name":"Ränder umlaufend"},"barrier_probability":{"name":"Barrieren-Wahrscheinlichkeit"},"number_of_shuffling_moves":{"name":"Anzahl Mischzüge"}},"achievement":{"tidy_four":{"name":"Saubere Verkabelung","description":"Löse Netzschieber in 4×4 mit höchstens 18 Schüben."},"lean_five":{"name":"Leitungsmonteur","description":"Löse Netzschieber in 5×5 mit höchstens 32 Schüben."},"big_switch":{"name":"Der große Schalter","description":"Bring mit einem Schub das ganze Netz zum Leuchten, wenn vorher weniger als die Hälfte leuchtete."}},"status":{"active":" · Aktiv: {n}/{total}"}},"pattern":{"name":"Muster","alsoKnownAs":"Nonogramm, Picross, Japanische Rätsel","description":"Fülle das Gitter anhand der Blocklängen, die für jede Zeile und jede Spalte angegeben sind.","preset":{"10x10":"10×10","15x15":"15×15","20x20":"20×20","25x25":"25×25","30x30":"30×30"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"}},"achievement":{"no_dots":{"name":"Kein einziger Punkt","description":"Löse ein Muster ab 15×15, ohne einen einzigen Punkt zu setzen."},"inked_in":{"name":"Tiefschwarz","description":"Löse ein Muster ab 20×20, ohne je ein schwarzes Feld zu leeren."}},"action":{"e":{"label":"Radieren","title":"Klicken oder ziehen, um Felder wieder auf unbekannt zu setzen (E)"}}},"pearl":{"name":"Perle","alsoKnownAs":"Masyu","description":"Zeichne eine einzige geschlossene Schleife, die durch weiße Perlen gerade hindurchläuft und an schwarzen abbiegt.","preset":{"6x6_easy":"6×6 Leicht","6x6_tricky":"6×6 Knifflig","8x8_easy":"8×8 Leicht","8x8_tricky":"8×8 Knifflig","10x10_easy":"10×10 Leicht","10x10_tricky":"10×10 Knifflig","12x8_easy":"12×8 Leicht","12x8_tricky":"12×8 Knifflig"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"difficulty":{"name":"Schwierigkeit","choice":{"easy":"Leicht","tricky":"Knifflig"}},"allow_unsoluble":{"name":"Unlösbare erlauben"}},"achievement":{"no_crosses":{"name":"Perlenkette","description":"Löse eine Perle in 10×10, ohne ein einziges Kreuz zu setzen."},"one_stroke":{"name":"In einem Zug","description":"Zeichne die ganze Schleife einer Perle ab 8×8 mit einem einzigen Ziehen."}},"action":{"x":{"label":"Kreuz","title":"Klicken oder ziehen, um Kanten durchzustreichen, die die Schleife nicht nutzen kann (X)"}}},"pegs":{"name":"Stifte","alsoKnownAs":"Solitär, Steckhalma","description":"Lass Stifte übereinander springen, bis nur noch einer übrig ist.","preset":{"cross":"Kreuz","octagon":"Achteck","random_5x5":"Zufällig 5×5","random_7x7":"Zufällig 7×7","random_9x9":"Zufällig 9×9"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"board_type":{"name":"Brettform","choice":{"cross":"Kreuz","octagon":"Achteck","random":"Zufällig"}}},"achievement":{"dead_centre":{"name":"Mitten ins Schwarze","description":"Beende das Kreuz-Brett mit dem letzten Stift im mittleren Loch."},"hopscotch":{"name":"Himmel und Hölle","description":"Gewinne eine Partie Stifte, in der ein Stift viermal hintereinander springt."},"pegged_out":{"name":"Festgesteckt","description":"Bleib stecken, während noch zehn oder mehr Stifte auf dem Brett sind."}},"status":{"stuck":"Keine Züge mehr – noch {n} Stifte übrig","playing":"Stifte übrig: {n}  ·  Züge: {moves}"}},"range":{"name":"Reichweite","alsoKnownAs":"Kurodoko, Kuromasu","description":"Male Felder schwarz, sodass jede Zahl in ihrer Zeile und Spalte genau so viele weiße Felder sieht.","preset":{"9x6":"9×6","12x8":"12×8","13x9":"13×9","16x11":"16×11"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"}},"achievement":{"no_dots":{"name":"Reiner Kontrast","description":"Löse Reichweite ab 13×9, ohne einen einzigen Punkt zu setzen."},"quick_sight":{"name":"Scharfer Blick","description":"Löse Reichweite in 16×11 in unter fünf Minuten."}},"action":{"e":{"label":"Radieren","title":"Klicken oder ziehen, um schwarze Felder und Punkte zu entfernen (E)"}}},"rect":{"name":"Rechtecke","alsoKnownAs":"Shikaku","description":"Teile das Gitter in Rechtecke, die je eine Zahl enthalten, die genau ihrer Fläche entspricht.","preset":{"7x7":"7×7","9x9":"9×9","11x11":"11×11","13x13":"13×13","15x15":"15×15","17x17":"17×17","19x19":"19×19"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"expansion_factor":{"name":"Ausdehnungsfaktor"},"ensure_unique_solution":{"name":"Eindeutige Lösung garantieren"}},"achievement":{"clean_cuts":{"name":"Saubere Schnitte","description":"Löse Rechtecke ab 11×11 in nicht mehr Zügen, als es Zahlen hat."},"quick_carver":{"name":"Flinkes Messer","description":"Löse Rechtecke in 19×19 in unter zehn Minuten."}},"status":{"drag":"{w}×{h} "},"action":{"e":{"label":"Radieren","title":"Über eine Fläche ziehen, um die Linien darin zu löschen, oder eine Linie anklicken, um sie zu entfernen (E)"}}},"samegame":{"name":"Gleiche Farbe","alsoKnownAs":"Clickomania, SameGame","description":"Räume das Brett leer, indem du Gruppen aneinandergrenzender Felder derselben Farbe entfernst.","preset":{"5x5_3_colours":"5×5, 3 Farben","10x5_3_colours":"10×5, 3 Farben","15x10_3_colours":"15×10, 3 Farben","15x10_4_colours":"15×10, 4 Farben","20x15_4_colours":"20×15, 4 Farben"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"no_of_colours":{"name":"Anzahl Farben"},"scoring_system":{"name":"Punktesystem","choice":{"n_1_2":"(n-1)^2","n_2_2":"(n-2)^2"}},"ensure_solubility":{"name":"Lösbarkeit garantieren"}},"achievement":{"avalanche":{"name":"Lawine","description":"Entferne auf einmal eine Gruppe aus 25 oder mehr Feldern und räume dann das Brett ab."},"no_pairs":{"name":"Keine Paare erlaubt","description":"Räume ein Brett ab 15×10 ab, ohne je ein Paar zu entfernen."},"last_one":{"name":"Das letzte Feld","description":"Bleib stecken, während nur noch ein einziges Feld auf dem Brett ist."}},"status":{"score":"Punktzahl: {n}","complete":"Brett abgeräumt! {score}","stuck":"Keine Züge mehr. {score}","selected":"{score} · Ausgewählt: {n} (+{points})"}},"signpost":{"name":"Wegweiser","description":"Verbinde die Felder zu einem einzigen nummerierten Pfad, bei dem jeder Schritt einem Pfeil folgt.","preset":{"4x4":"4×4","4x4_free_ends":"4×4, freie Enden","5x5":"5×5","5x5_free_ends":"5×5, freie Enden","6x6":"6×6","7x7":"7×7"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"start_and_end_in_corners":{"name":"Start und Ziel in den Ecken"}},"achievement":{"unbroken":{"name":"Ungebrochene Kette","description":"Löse einen Wegweiser, ohne je eine Verbindung zu entfernen oder zu ersetzen."},"in_order":{"name":"Geradewegs durch","description":"Löse einen Wegweiser ab 6×6 und verbinde den Weg der Reihe nach, von 1 bis zum Stern."},"star_first":{"name":"Nach den Sternen greifen","description":"Führe deine allererste Verbindung in den Stern und löse dann das Rätsel."}},"action":{"b":{"label":"Trennen","title":"Ein Feld anklicken, um seine ganze Kette aufzulösen (B)"}}},"singles":{"name":"Singles","alsoKnownAs":"Hitori","description":"Schwärze Felder, sodass sich in keiner Zeile und keiner Spalte eine Zahl wiederholt – ohne das Gitter zu zerteilen.","preset":{"5x5_easy":"5×5 Leicht","5x5_tricky":"5×5 Knifflig","6x6_easy":"6×6 Leicht","6x6_tricky":"6×6 Knifflig","8x8_easy":"8×8 Leicht","8x8_tricky":"8×8 Knifflig","10x10_easy":"10×10 Leicht","10x10_tricky":"10×10 Knifflig","12x12_easy":"12×12 Leicht","12x12_tricky":"12×12 Knifflig"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"difficulty":{"name":"Schwierigkeit","choice":{"easy":"Leicht","tricky":"Knifflig"}}},"achievement":{"no_circles":{"name":"Ohne Kreise","description":"Löse Singles ab 8×8, ohne eine einzige Zahl einzukreisen."},"sure_hand":{"name":"Sichere Hand","description":"Löse Singles ab 10×10, ohne ein geschwärztes Feld zurückzuholen."}}},"sixteen":{"name":"Sechzehn","description":"Schiebe ganze Zeilen und Spalten im Kreis, bis die Steine in der richtigen Reihenfolge liegen.","preset":{"3x3":"3×3","4x3":"4×3","4x4":"4×4","5x4":"5×4","5x5":"5×5"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"number_of_shuffling_moves":{"name":"Anzahl Mischzüge"}},"achievement":{"lean_slides":{"name":"Sparsamer Schieber","description":"Bring das 4×4 in höchstens 100 Schüben in Ordnung."},"five_in_200":{"name":"Großer Sortierer","description":"Bring das 5×5 in höchstens 200 Schüben in Ordnung."},"round_the_doughnut":{"name":"Einmal um den Donut","description":"Schieb eine Linie ganz herum, bis sie wieder am Anfang steht."}}},"slant":{"name":"Schrägstriche","alsoKnownAs":"Gokigen Naname","description":"Zeichne in jedes Feld eine Diagonale, passend zu den Zahlen und ohne dabei Schleifen zu bilden.","preset":{"5x5_easy":"5×5 Leicht","5x5_hard":"5×5 Schwer","8x8_easy":"8×8 Leicht","8x8_hard":"8×8 Schwer","12x10_easy":"12×10 Leicht","12x10_hard":"12×10 Schwer"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"difficulty":{"name":"Schwierigkeit","choice":{"easy":"Leicht","hard":"Schwer"}}},"achievement":{"no_loops":{"name":"Schleifenfrei","description":"Löse Schrägstriche ab 8×8, ohne je eine Schleife zu schließen."},"steady_hand":{"name":"Kein Zurück","description":"Löse Schrägstriche in 12×10, ohne zurückzugehen und einen Strich zu ändern."}}},"solo":{"name":"Solo","alsoKnownAs":"Sudoku","description":"Fülle das Gitter so, dass jede Zeile, jede Spalte und jeder Block jede Ziffer genau einmal enthält.","preset":{"4x4_very_easy":"4×4 Sehr leicht","6x6_easy":"6×6 Leicht","9x9_very_easy":"9×9 Sehr leicht","9x9_easy":"9×9 Leicht","9x9_x_diagonal_easy":"9×9 X-Diagonale Leicht","9x9_medium":"9×9 Mittel","9x9_hard":"9×9 Schwer","9x9_x_diagonal_hard":"9×9 X-Diagonale Schwer","9x9_expert":"9×9 Experte","9x9_extreme":"9×9 Extrem","9x9_killer":"9×9 Killer","9x9_jigsaw_easy":"9×9 Jigsaw Leicht","9x9_jigsaw_x_diagonal_easy":"9×9 Jigsaw X-Diagonale Leicht","9x9_jigsaw_hard":"9×9 Jigsaw Schwer","12x12_easy":"12×12 Leicht","16x16_easy":"16×16 Leicht"},"config":{"columns_of_sub_blocks":{"name":"Spalten je Unterblock"},"rows_of_sub_blocks":{"name":"Zeilen je Unterblock"},"x_require_every_number_in_each_main_diagonal":{"name":"„X“ (jede Zahl muss in jeder Hauptdiagonale stehen)"},"jigsaw_irregularly_shaped_sub_blocks":{"name":"Jigsaw (unregelmäßig geformte Unterblöcke)"},"killer_digit_sums":{"name":"Killer (Ziffernsummen)"},"symmetry":{"name":"Symmetrie","choice":{"none":"Keine","2_way_rotation":"2-fach gedreht","4_way_rotation":"4-fach gedreht","2_way_mirror":"2-fach gespiegelt","2_way_diagonal_mirror":"2-fach diagonal gespiegelt","4_way_mirror":"4-fach gespiegelt","4_way_diagonal_mirror":"4-fach diagonal gespiegelt","8_way_mirror":"8-fach gespiegelt"}},"difficulty":{"name":"Schwierigkeit","choice":{"very_easy":"Sehr leicht","easy":"Leicht","medium":"Mittel","hard":"Schwer","expert":"Experte","extreme":"Extrem"}}},"action":{"m":{"label":"Notizen","title":"In jedes leere Feld alle Möglichkeiten als Notiz schreiben (M)"},"l":{"label":"Hervorheben","title":"Jedes Feld mit der zuletzt berührten Ziffer hervorheben (L)"}},"achievement":{"pen_only":{"name":"Kuli statt Bleistift","description":"Löse ein Solo in 9×9 auf Mittel, Killer oder schwerer ohne eine einzige Bleistiftnotiz."},"no_second_thoughts":{"name":"Ohne Reue","description":"Löse ein 9×9 auf Experte oder schwerer, ohne je eine Ziffer zu ändern oder zu löschen."}}},"tents":{"name":"Zelte","alsoKnownAs":"Zeltlager, Zelte und Bäume","description":"Stelle neben jeden Baum ein Zelt, ohne dass sich zwei Zelte berühren.","preset":{"8x8_easy":"8×8 Leicht","8x8_tricky":"8×8 Knifflig","10x10_easy":"10×10 Leicht","10x10_tricky":"10×10 Knifflig","15x15_easy":"15×15 Leicht","15x15_tricky":"15×15 Knifflig"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"difficulty":{"name":"Schwierigkeit","choice":{"easy":"Leicht","tricky":"Knifflig"}}},"achievement":{"no_grass":{"name":"Perfekt gezeltet","description":"Löse Zelte ab 10×10, ohne ein einziges Feld als Gras zu markieren."},"no_strikes":{"name":"Glückliche Camper","description":"Löse Zelte in 15×15, ohne je ein Zelt abzubauen."}}},"towers":{"name":"Türme","alsoKnownAs":"Wolkenkratzer, Hochhäuser, Skyscrapers","description":"Baue Türme so, dass jeder Hinweis am Rand die von dort aus sichtbaren Türme zählt.","preset":{"4x4_easy":"4×4 Leicht","5x5_easy":"5×5 Leicht","5x5_hard":"5×5 Schwer","6x6_easy":"6×6 Leicht","6x6_hard":"6×6 Schwer","6x6_expert":"6×6 Experte","6x6_extreme":"6×6 Extrem"},"config":{"grid_size":{"name":"Gittergröße"},"difficulty":{"name":"Schwierigkeit","choice":{"easy":"Leicht","hard":"Schwer","expert":"Experte","extreme":"Extrem"}}},"action":{"m":{"label":"Notizen","title":"In jedes leere Feld alle Möglichkeiten als Notiz schreiben (M)"},"l":{"label":"Hervorheben","title":"Jedes Feld mit der zuletzt berührten Ziffer hervorheben (L)"}},"achievement":{"no_pencil":{"name":"Skyline im Kopf","description":"Löse Türme in 6×6, ohne eine einzige Bleistiftnotiz zu schreiben."},"clean_build":{"name":"Für die Ewigkeit gebaut","description":"Löse Türme in 6×6 auf Experte oder Extrem, ohne zurückzugehen und einen Turm zu ändern."},"tallest_first":{"name":"Die Höchsten zuerst","description":"Baue alle höchsten Türme vor allen anderen und löse dann das Gitter."}}},"tracks":{"name":"Gleise","alsoKnownAs":"Train Tracks","description":"Lege eine einzige Bahnstrecke vom Eingang zum Ausgang, passend zu den Zahlen am Rand.","preset":{"8x8_easy":"8×8 Leicht","8x8_tricky":"8×8 Knifflig","10x8_easy":"10×8 Leicht","10x8_tricky":"10×8 Knifflig","10x10_easy":"10×10 Leicht","10x10_tricky":"10×10 Knifflig","15x10_easy":"15×10 Leicht","15x10_tricky":"15×10 Knifflig","15x15_easy":"15×15 Leicht","15x15_tricky":"15×15 Knifflig"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"difficulty":{"name":"Schwierigkeit","choice":{"easy":"Leicht","tricky":"Knifflig"}},"disallow_consecutive_1_clues":{"name":"Aufeinanderfolgende 1er-Hinweise verbieten"}},"achievement":{"no_crosses":{"name":"Nichts gestrichen","description":"Löse Gleise ab 10×10, ohne ein Feld oder eine Seite auszukreuzen."},"no_lift":{"name":"Volldampf voraus","description":"Löse Gleise ab 15×10, ohne je eine gelegte Schiene wieder aufzuheben."},"long_haul":{"name":"Langstrecke","description":"Lege mit einem Ziehen Schienen durch zehn Felder und vervollständige dann die Strecke."}},"action":{"e":{"label":"Radieren","title":"Klicken oder ziehen, um Felder ganz zu leeren (E)"}}},"twiddle":{"name":"Drehen","description":"Drehe quadratische Blöcke von Steinen, bis die Zahlen wieder in der richtigen Reihenfolge liegen.","preset":{"3x3_rows_only":"3×3 nur Zeilen","3x3_normal":"3×3 normal","3x3_orientable":"3×3 mit Ausrichtung","4x4_normal":"4×4 normal","4x4_orientable":"4×4 mit Ausrichtung","4x4_rotating_3x3_blocks":"4×4, drehbare 3×3-Blöcke","5x5_rotating_3x3_blocks":"5×5, drehbare 3×3-Blöcke","6x6_rotating_4x4_blocks":"6×6, drehbare 4×4-Blöcke"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"rotating_block_size":{"name":"Größe der Drehblöcke"},"one_number_per_row":{"name":"Eine Zahl pro Zeile"},"orientation_matters":{"name":"Ausrichtung zählt"},"number_of_shuffling_moves":{"name":"Anzahl Mischzüge"}},"achievement":{"few_turns":{"name":"Zwanzig Drehungen","description":"Löse Drehen in 3×3 normal mit höchstens 20 Drehungen."},"perfect_ten":{"name":"Perfekte Zehn","description":"Löse Drehen in 3×3 normal mit höchstens 10 Drehungen."},"dizzy":{"name":"Immer im Kreis","description":"Dreh einen Block viermal hintereinander in dieselbe Richtung und löse dann das Rätsel."}},"action":{"t":{"label":"Uhrzeigersinn","title":"Richtungen tauschen: Klicks drehen im Uhrzeigersinn, Rechtsklicks dagegen (T)"}}},"undead":{"name":"Untote","description":"Setze Geister, Vampire und Zombies so, dass es zu dem passt, was man in den Spiegeln sieht.","preset":{"4x4_easy":"4×4 Leicht","4x4_normal":"4×4 Normal","4x4_tricky":"4×4 Knifflig","5x5_easy":"5×5 Leicht","5x5_normal":"5×5 Normal","5x5_tricky":"5×5 Knifflig","7x7_easy":"7×7 Leicht","7x7_normal":"7×7 Normal"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"difficulty":{"name":"Schwierigkeit","choice":{"easy":"Leicht","normal":"Normal","tricky":"Knifflig"}}},"keypad":{"g":"Geist","v":"Vampir","z":"Zombie"},"achievement":{"no_pencil":{"name":"Trau deinen Augen","description":"Löse Untote ab 5×5, ohne eine einzige Bleistiftnotiz zu machen."},"fearless":{"name":"Furchtlos","description":"Löse Untote auf Knifflig, ohne zurückzugehen und ein Monster zu ändern."}},"alsoKnownAs":"Haunted Mirror Maze, Spiegellabyrinth","action":{"s":{"label":"Sicht","title":"Die Sichtlinien durch ein Feld oder von einer Randzahl aus verfolgen (S)"}}},"unequal":{"name":"Ungleich","alsoKnownAs":"Futoshiki","description":"Vervollständige das lateinische Quadrat, sodass jedes Größer-als-Zeichen stimmt.","preset":{"4x4_easy":"4×4 Leicht","5x5_easy":"5×5 Leicht","5x5_medium":"5×5 Mittel","5x5_medium_adjacent":"5×5 Mittel (Nachbarn)","5x5_hard":"5×5 Schwer","6x6_easy":"6×6 Leicht","6x6_medium":"6×6 Mittel","6x6_medium_adjacent":"6×6 Mittel (Nachbarn)","6x6_hard":"6×6 Schwer","7x7_medium":"7×7 Mittel","7x7_medium_adjacent":"7×7 Mittel (Nachbarn)","7x7_hard":"7×7 Schwer"},"config":{"mode":{"name":"Modus","choice":{"unequal":"Ungleich","adjacent":"Nachbarn"}},"size_s_s":{"name":"Größe (s*s)"},"difficulty":{"name":"Schwierigkeit","choice":{"very_easy":"Sehr leicht","easy":"Leicht","medium":"Mittel","hard":"Schwer","extreme":"Extrem"}}},"action":{"m":{"label":"Notizen","title":"In jedes leere Feld alle Möglichkeiten als Notiz schreiben (M)"},"h":{"label":"Tipp","title":"Die Möglichkeiten notieren, die einfaches Schlussfolgern übrig lässt (H)"},"l":{"label":"Hervorheben","title":"Jede Zelle mit der zuletzt berührten Ziffer hervorheben (L)"}},"achievement":{"adjacent_bare":{"name":"Nebenan","description":"Löse Ungleich im Nachbarn-Modus, ohne eine einzige Bleistiftnotiz zu schreiben."},"extreme_bare":{"name":"Alles im Kopf","description":"Löse Ungleich auf Extrem, ohne eine einzige Bleistiftnotiz zu schreiben."}}},"unruly":{"name":"Widerspenstig","alsoKnownAs":"Binoxxo, Binairo, Takuzu","description":"Färbe jedes Feld schwarz oder weiß – gleich viele je Zeile und Spalte und nie drei gleiche in Folge.","preset":{"8x8_easy":"8×8 Leicht","8x8_normal":"8×8 Normal","10x10_easy":"10×10 Leicht","10x10_normal":"10×10 Normal","14x14_easy":"14×14 Leicht","14x14_normal":"14×14 Normal"},"config":{"width":{"name":"Breite"},"height":{"name":"Höhe"},"unique_rows_and_columns":{"name":"Eindeutige Zeilen und Spalten"},"difficulty":{"name":"Schwierigkeit","choice":{"easy":"Leicht","normal":"Normal"}}},"achievement":{"no_threes":{"name":"Niemals drei","description":"Löse Widerspenstig ab 10×10, ohne je drei gleiche Felder in einer Reihe zu bilden."},"first_time":{"name":"Schwarz auf Weiß","description":"Löse Widerspenstig in 14×14, ohne zurückzugehen und ein Feld zu ändern."}},"action":{"e":{"label":"Radieren","title":"Ein Feld anklicken, um es zu leeren (E)"}}},"untangle":{"name":"Entwirren","alsoKnownAs":"Planarity","description":"Zieh die Punkte so lange umher, bis sich keine zwei Linien mehr kreuzen.","preset":{"6_points":"6 Punkte","10_points":"10 Punkte","15_points":"15 Punkte","20_points":"20 Punkte","25_points":"25 Punkte"},"config":{"number_of_points":{"name":"Anzahl Punkte"}},"action":{"g":{"label":"Einrasten","title":"Abgelegte Punkte an einem Gitter einrasten lassen (G)"}},"achievement":{"one_touch":{"name":"Leichte Hand","description":"Entwirre 10 oder mehr Punkte, ohne denselben Punkt zweimal anzufassen."},"only_downhill":{"name":"Nur bergab","description":"Entwirre 20 oder mehr Punkte, ohne dass ein Zug je rote Linien hinzufügt."}}}}`),$=JSON.parse('{"blackbox":{"step1":{"text":"In dieser 4×4-Box versteckt sich eine Kugel. Schieße von den Punkten am Rand Laser hinein, überlege dir, wo sie stecken muss, markiere sie und drücke den Knopf in der Ecke."},"step2":{"text":"Klicke den Punkt am **linken Rand auf Höhe der zweiten Zeile** an. Der Strahl wird unterwegs abgelenkt und kommt woanders wieder heraus; beide Enden bekommen dieselbe Zahl."},"step3":{"text":"Schieße jetzt vom Punkt **über der zweiten Spalte**. Ein **H** heißt, dass der Strahl direkt in eine Kugel gelaufen und nie wieder herausgekommen ist."},"step4":{"text":"Schieße auch vom Punkt **über der ersten Spalte**. Ein **R** heißt, dass der Strahl sofort wieder zurückgeprallt ist – das passiert, wenn eine Kugel schräg neben dem Eingang liegt."},"step5":{"text":"Das R setzt eine Kugel schräg neben die erste Spalte, das H eine gerade unter die zweite: Nur dieses eine Feld erfüllt beides."},"step6":{"text":"**Klicke auf dieses Feld**, um deine Kugel dort zu markieren."},"step7":{"text":"Alle Kugeln sind markiert, also ist der **Haken oben links** aktiv. Klicke ihn an, um deine Antwort prüfen zu lassen."},"step8":{"text":"Richtig. Während du knobelst, kannst du ein Feld **mit einem Rechtsklick** abschließen, sobald du sicher bist, dass es leer ist – und **Lösen** verrät die Antwort."}},"bridges":{"step1":{"text":"Die Zahl auf jeder Insel sagt, wie viele Brückenenden sie haben will. Verbinde alle Inseln zu einem einzigen Netz – höchstens zwei Brücken zwischen zwei Inseln, und keine Brücke kreuzt eine andere."},"step2":{"text":"Die **2 unten** hat nur eine Insel in einer Linie mit sich: die **4** oben. **Ziehe** von der 2 in Richtung der 4, um eine Brücke zu schlagen."},"step3":{"text":"Sie will zwei Brückenenden, und dieses Paar ist der einzige Platz dafür. **Ziehe** noch einmal genauso für eine zweite, parallele Brücke."},"step4":{"text":"Diese Insel ist fertig. **Klicke** sie an, um sie als erledigt zu markieren: Sie wird grau und ihre Brücken werden gesperrt, sodass du sie nicht aus Versehen störst."},"step5":{"text":"Keine Brücke darf eine andere kreuzen, also ist die Linie zwischen den **beiden Einsen** jetzt blockiert. **Ziehe mit rechts** von der linken 1 zur rechten, um das zu notieren."},"step6":{"text":"Jede 1 hat jetzt nur noch einen Ausweg, und daraus ergeben sich die vier restlichen Brücken. **Lösen** erledigt den Rest (und **G** zeigt jede Linie, die eine Brücke nehmen könnte).","textTouch":"Jede 1 hat jetzt nur noch einen Ausweg, und daraus ergeben sich die vier restlichen Brücken. **Lösen** erledigt den Rest."}},"cube":{"step1":{"text":"Der Würfel hat sechs Flächen, und sechs Felder sind blau gefärbt. Rolle ihn herum, bis jede Fläche eine davon aufgesammelt hat: Bei jeder Landung tauschen die untere Fläche und das Feld ihre Farben."},"step2":{"text":"Ein Klick kippt den Würfel über die Kante zu dem Feld, das du wählst. **Klicke auf das blaue Feld direkt unter dem Würfel**, um seine Farbe auf die landende Fläche zu holen."},"step3":{"text":"Das Feld, das er verlassen hat, ist jetzt leer – die Farben tauschen wirklich. **Klicke auf das blaue Feld rechts davon**, um eine zweite Fläche blau zu färben."},"step4":{"text":"Die **Pfeiltasten** rollen den Würfel ebenfalls. Drücke einmal **→**, um das dritte blaue Feld aufzusammeln.","textTouch":"Jedes Nachbarfeld ist nur ein Tippen entfernt. **Tippe auf das nächste blaue Feld rechts**, um das dritte blaue Feld aufzusammeln."},"step5":{"text":"Drei Flächen blau, drei fehlen noch – dieses Brett lässt sich in insgesamt sechs Rollbewegungen schaffen, und die Statuszeile zählt mit. **Rückgängig** nimmt eine zurück, wenn du zu weit rollst."}},"dominosa":{"step1":{"text":"Drei Dominos – 0-0, 0-1 und 1-1 – lagen hier und wurden dann weggenommen; nur ihre Zahlen blieben übrig. Teile das Gitter in Paare, um jedes von ihnen genau einmal zurückzulegen."},"step2":{"text":"Kein Domino darf zweimal vorkommen. Würdest du diese **0** mit der **1** darunter paaren, wären beide Außenspalten eine 0-1. Also: **Rechtsklicke** auf die Grenze dazwischen, um zu notieren, dass die beiden kein Paar sind."},"step3":{"text":"Die einzigen zwei **Nullen**, die sich berühren, sind das Paar in der linken oberen Ecke – dorthin gehört also die 0-0. **Klicke auf die Grenze zwischen ihnen**, um sie zu legen."},"step4":{"text":"Genauso sind die einzigen benachbarten **Einsen** die beiden unten links. Klicke auf die Grenze zwischen ihnen für die 1-1."},"step5":{"text":"Damit bleibt die rechte Spalte für die 0-1. Klicke auf die Grenze zwischen ihren beiden Zahlen, um fertig zu werden."},"step6":{"text":"Jedes Domino genau einmal benutzt. Klicke ein Domino noch einmal an, um es wieder abzuheben; ein doppelt verwendetes wird rot gezeichnet, und **Rückgängig** geht deine Züge zurück."}},"fifteen":{"step1":{"text":"Schiebe die nummerierten Steine in die Lücke, bis sie der Reihe nach **1 bis 8** ergeben und die Lücke unten rechts liegt. Dieses kleine Brett ist zwei Züge vom Ziel entfernt."},"step2":{"text":"Jeder Stein in derselben Zeile oder Spalte wie die Lücke kann rutschen. Klicke auf die **5**, um sie nach oben in die Lücke zu schieben."},"step3":{"text":"Noch einer. Klicke auf die **8**, um die Zeile fertig zu machen."},"step4":{"text":"Gelöst! **Rückgängig** und **Wiederherstellen** gehen durch deine Züge, und **Neu** im Pausenmenü startet ein neues Rätsel. Auch die Pfeiltasten schieben einen Stein in die Lücke, und zwar in Pfeilrichtung.","textTouch":"Gelöst! **Rückgängig** und **Wiederherstellen** gehen durch deine Züge, und **Neu** im Pausenmenü startet ein neues Rätsel. Eine ganze Zeile oder Spalte rutscht auf einmal – ziele also auf den äußersten Stein."}},"filling":{"step1":{"text":"Schreibe in jedes leere Feld eine Ziffer, sodass jeder zusammenhängende Block gleicher Ziffern genau so viele Felder umfasst, wie die Ziffer sagt."},"step2":{"text":"Die **3** am Fuß der mittleren Spalte kann nur nach oben wachsen, ihr Block ist also genau diese Spalte. **Ziehe** vom obersten Feld hinunter bis zum mittleren und drücke dann **3**.","textTouch":"Die **3** am Fuß der mittleren Spalte kann nur nach oben wachsen. **Ziehe** vom obersten Feld hinunter bis zum mittleren und tippe dann **3** auf dem Tastenfeld."},"step3":{"text":"Die **2** in der linken Spalte braucht einen Partner, und das Feld darüber ist das einzige freie. Klicke dieses Feld an und drücke **2**.","textTouch":"Die **2** in der linken Spalte braucht einen Partner, und das Feld darüber ist das einzige freie. Tippe dieses Feld an und dann **2** auf dem Tastenfeld."},"step4":{"text":"Ein Feld ist noch übrig. Klicke es an und drücke **1**, um zu sehen, wie eine falsche Ziffer aussieht.","textTouch":"Ein Feld ist noch übrig. Tippe es an und dann **1** auf dem Tastenfeld, um zu sehen, wie eine falsche Ziffer aussieht."},"step5":{"text":"Rot heißt unmöglich: Diese beiden **Einsen** berühren sich, was einen Block aus zwei Feldern ergäbe, und die **2** oben ist eingemauert. Das Feld ist noch ausgewählt, also drücke **Backspace**, um es zu leeren.","textTouch":"Rot heißt unmöglich: Diese beiden **Einsen** berühren sich, was einen Block aus zwei Feldern ergäbe, und die **2** oben ist eingemauert. Das Feld ist noch ausgewählt, also tippe auf dem Tastenfeld auf **⌫**, um es zu leeren."},"step6":{"text":"Dieses leere Feld tut sich stattdessen mit der **2** darüber zusammen. Klicke es an und drücke **2**, um das Gitter fertig zu machen.","textTouch":"Dieses leere Feld tut sich stattdessen mit der **2** darüber zusammen. Tippe es an und dann **2** auf dem Tastenfeld, um das Gitter fertig zu machen."},"step7":{"text":"Gefüllt. Dicke Linien schließen jeden fertigen Block ein; **rechtsklicke**, um Felder einzeln zu einer Auswahl hinzuzufügen, und **Rückgängig** nimmt eine Füllung zurück."}},"flip":{"step1":{"text":"Bring alle neun Felder zum Leuchten. Drückst du eines, dreht es sich **und** die Felder ringsherum um – leuchtende Felder können also wieder dunkel werden."},"step2":{"text":"Das kleine Diagramm in einem Feld zeigt, was es umdreht: Der ausgefüllte Block ist das Feld selbst, die Umrisse sind seine Nachbarn."},"step3":{"text":"Zeit, dieses hier zum Leuchten zu bringen. Drücke das Feld **oben links**, das dunkle in der Ecke."},"step4":{"text":"Die Ecke leuchtet, aber ihre beiden Nachbarn sind dunkel geworden. Drücke als Nächstes das Feld in der **Mitte**."},"step5":{"text":"Jetzt ist nur noch die Ecke unten rechts dunkel. Drücke das Feld **unten rechts**, um es fertig zu machen."},"step6":{"text":"Alles leuchtet! **Rückgängig** nimmt einen Druck zurück, und statt zu klicken kannst du mit den Pfeiltasten auch einen Zeiger steuern und Enter drücken.","textTouch":"Alles leuchtet! **Rückgängig** nimmt einen Druck zurück, und zweimal dasselbe Feld hebt sich immer auf – die Reihenfolge spielt also nie eine Rolle."}},"flood":{"step1":{"text":"Dir gehört das Feld oben links und alles, was in derselben Farbe daran hängt. Jeder Zug färbt dieses Gebiet neu, sodass angrenzende Felder der neuen Farbe dazukommen. Bring das ganze Gitter innerhalb von **vier Zügen** auf eine Farbe."},"step2":{"text":"Dein Gebiet ist vorerst nur diese eine blaue Ecke. Klicke auf das **rote** Feld daneben: Das Gebiet wird rot, und jedes rote Feld, das es berührt, kommt mit."},"step3":{"text":"Klicke jetzt auf ein **blaues** Feld am Rand deines Gebiets. Eine gut gewählte Farbe kann in einem einzigen Zug weit über das Gitter reichen."},"step4":{"text":"Nur noch **Grün** liegt außerhalb deines Gebiets. Ein Klick mehr holt den Rest des Gitters herein."},"step5":{"text":"Drei von vier Zügen – die Statuszeile zählt mit. Gehen dir die Züge aus, bevor das Gitter einfarbig ist, ist die Runde verloren. Du hängst fest? Ein **Tipp** spielt eine gute Farbe für dich, und **Lösen** macht das Gitter automatisch fertig."}},"galaxies":{"step1":{"text":"Zwei Punkte, also zwei Galaxien. Zieh Wände entlang der Gitterlinien, sodass jeder Punkt in der Mitte seines eigenen Bereichs landet: Dreht man einen Bereich um 180° um seinen Punkt, muss er genau auf sich selbst fallen."},"step2":{"text":"Der linke Punkt sitzt auf einer Linie zwischen zwei Feldern, seine Galaxie muss also aus den beiden linken Spalten bestehen. **Klicke** auf die Gitterlinie direkt rechts davon, in der **obersten Zeile**."},"step3":{"text":"Punkte dienen auch als Notizzettel. **Ziehe** vom rechten Punkt in das **Feld oben rechts**, um dort einen Pfeil zu hinterlassen, der dieses Feld seiner Galaxie zuordnet."},"step4":{"text":"Zurück zur Wand: **Klicke** auf dieselbe Gitterlinie eine Zeile tiefer, in der **mittleren Zeile**."},"step5":{"text":"Ein Stück fehlt noch, in der **untersten Zeile**. **Klicke** darauf, um beide Galaxien zu schließen."},"step6":{"text":"Beide Bereiche sind schattiert, also stimmen beide. **Lösen** zeichnet eine ganze Antwort, und ein Klick auf eine Wand radiert sie wieder weg."}},"guess":{"step1":{"text":"Hinter den Fragezeichen stecken zwei Stifte, in irgendeiner Reihenfolge aus drei Farben. Rate eine Reihe, lies die Markierungen ab, die sie einbringt, und grenze es ein."},"step2":{"text":"**Ziehe** die oberste Farbe aus dem Fach und lass sie in das **linke Loch** der Reihe mit dem Pfeil fallen."},"step3":{"text":"Du kannst auch erst eine Farbe wählen und dann Löcher damit anklicken. Klicke auf die **zweite Farbe** im Fach."},"step4":{"text":"Klicke nun auf das **rechte Loch**, um diese Farbe dort einzusetzen."},"step5":{"text":"Die Reihe ist voll, also leuchtet der **gestrichelte Kasten** rechts daneben auf. Klicke ihn an, um den Versuch bewerten zu lassen."},"step6":{"text":"Zwei **hohle** Markierungen heißen: Beide Farben kommen in der Lösung vor, aber keine steht an der richtigen Stelle – eine ausgefüllte Markierung wäre richtige Farbe an richtiger Stelle. Vertausche sie und gib noch einmal ab."},"step7":{"text":"Gelöst. **Lösen** gibt auf und zeigt die Antwort, und die Taste **L** beschriftet die Stifte mit Buchstaben, falls die Farben schwer auseinanderzuhalten sind.","textTouch":"Gelöst. **Lösen** gibt auf und zeigt die Antwort, und **Halten** neben Rückgängig hält einen Stift, dem du traust, für deinen nächsten Versuch an seinem Platz."}},"inertia":{"step1":{"text":"Du bist die Kugel in der oberen linken Ecke, und es gibt **drei Edelsteine** zu sammeln. Einmal ins Rollen gekommen, hält die Kugel nur an einer Wand oder einem Stopper – und eine Mine ist ihr Ende."},"step2":{"text":"Klicke auf ein Feld **rechts** von der Kugel. Sie rollt in diese Richtung, bis der Spielfeldrand sie stoppt, und nimmt den Edelstein unterwegs mit."},"step3":{"text":"Klicke jetzt **unter** die Kugel. Sie holt den nächsten Edelstein, und der gebrochene Ring zwei Felder tiefer – ein Stopper – bringt sie zum Stehen."},"step4":{"text":"Vorsicht: Das stachelige Ding direkt unter der Kugel ist eine **Mine**. Rollst du auf eine, ist das Spiel vorbei, und nur Rückgängig holt dich da wieder heraus."},"step5":{"text":"Geh stattdessen **diagonal**: Klicke auf das Feld zwei nach unten und zwei nach links, dann gleitet die Kugel an der Mine vorbei auf den letzten Edelstein."},"step6":{"text":"Alle drei Edelsteine – geschafft. **Rückgängig** spult eine misslungene Rollbewegung zurück; die Pfeiltasten rollen gerade, und Pos1, Bild↑, Ende und Bild↓ rollen diagonal.","textTouch":"Alle drei Edelsteine – geschafft. **Rückgängig** spult eine misslungene Rollbewegung zurück, und ein Tippen außerhalb des Gitters funktioniert auch, was hilft, wenn die Kugel am Rand klebt."}},"keen":{"step1":{"text":"Trage 1, 2 und 3 so ein, dass jede Zahl in jeder Zeile und jeder Spalte genau einmal vorkommt und die Ziffern in jedem dick umrandeten Käfig seinen Rechenhinweis erfüllen."},"step2":{"text":"Der Käfig **2×** ergibt multipliziert 2, seine Ziffern sind also 1, 1 und 2. Ein Käfig darf eine Ziffer wiederholen, eine Zeile oder Spalte aber nicht – die 2 gehört deshalb in die Ecke: Klicke dieses Feld an und gib **2** ein.","textTouch":"Der Käfig **2×** ergibt multipliziert 2, seine Ziffern sind also 1, 1 und 2. Die 2 gehört in die Ecke: Tippe dieses Feld an und dann **2** auf dem Tastenfeld."},"step3":{"text":"Die anderen beiden Felder des Käfigs sind die Einsen. Klicke auf das Feld **rechts neben der 2** und gib **1** ein.","textTouch":"Die anderen beiden Felder des Käfigs sind die Einsen. Tippe auf das Feld **rechts neben der 2** und dann **1** auf dem Tastenfeld."},"step4":{"text":"Die obere Zeile hat ihre 2 und ihre 1 schon, also muss im letzten Feld die 3 stehen. Klicke auf das **Feld oben rechts** und gib **3** ein.","textTouch":"Die obere Zeile hat ihre 2 und ihre 1 schon, also muss im letzten Feld die 3 stehen. Tippe auf das **Feld oben rechts** und dann **3** auf dem Tastenfeld."},"step5":{"text":"Bei einem Feld nur eine Vermutung? **Rechtsklicke** das mittlere Feld und gib **3** ein, um die Ziffer als Notiz einzutragen, statt sie fest hinzuschreiben.","textTouch":"Bei einem Feld nur eine Vermutung? **Drücke lange** auf das mittlere Feld und tippe **3**, um die Ziffer nur zu notieren. Die Taste **✎** macht dasselbe für ein Feld, das du angetippt hast."},"step6":{"text":"Den Rest löst du genauso; eine Ziffer, die sich in ihrer Zeile oder Spalte wiederholt, wird rot – und ein voller Käfig, der seinen Hinweis verfehlt, ebenfalls. Im Pausenmenü trägt **Notizen** alle Möglichkeiten für dich ein, und **Lösen** verrät die Antwort."}},"lightup":{"step1":{"text":"Am Ende muss jedes weiße Feld beleuchtet sein. Eine Glühbirne beleuchtet ihre Zeile und ihre Spalte, bis ein schwarzes Feld den Strahl blockiert, und keine Birne darf im Licht einer anderen stehen."},"step2":{"text":"Eine Zahl sagt, wie viele Birnen dieses schwarze Feld berühren. Diese **2** hat nur zwei weiße Nachbarn, also steht in beiden eine Birne: Klicke auf die **rechts** davon."},"step3":{"text":"Sieh, wie sich der gelbe Schein am Strahl entlang ausbreitet. Klicke jetzt auf das Feld direkt **unter** der 2 für ihre zweite Birne."},"step4":{"text":"Eine **0** berührt gar keine Birne. **Rechtsklicke** auf das Feld darüber, um ein Kreuz einzutragen: Das erinnert dich nur daran, dass dort keine Birne hin darf."},"step5":{"text":"Die **1** will genau eine Birne. Das Feld darunter ist schon beleuchtet, eine Birne dort stünde also im Strahl – klicke stattdessen auf das Feld **links** von der 1."},"step6":{"text":"In der obersten Zeile sind noch zwei Felder dunkel, und eines davon hast du bereits ausgekreuzt. Klicke auf das **andere**."},"step7":{"text":"Jedes Feld beleuchtet, jede Zahl zufrieden. **Rückgängig** nimmt eine Birne zurück, und mit den Pfeiltasten sowie Enter und Leertaste setzt du Birnen und Kreuze ganz ohne Maus.","textTouch":"Jedes Feld beleuchtet, jede Zahl zufrieden. **Rückgängig** nimmt eine Birne zurück, und mit langem Drücken kreuzt du jedes Feld aus, das du ausgeschlossen hast."}},"loopy":{"step1":{"text":"Zeichne **eine** geschlossene Schleife entlang der feinen Linien zwischen den Punkten. Jede Zahl sagt, wie viele der vier Seiten ihres Feldes die Schleife benutzt."},"step2":{"text":"Das mittlere Feld trägt eine **4**, also liegen alle vier Seiten auf der Schleife. **Klicke** auf seine Oberseite, um die erste Linie zu ziehen."},"step3":{"text":"Jetzt seine **linke Seite**. Klickst du eine Linie noch einmal an, radierst du sie wieder weg."},"step4":{"text":"Jeder Punkt hat zwei Linien oder gar keine, und der Punkt, an dem diese beiden zusammentreffen, ist voll. **Rechtsklicke** auf die Linie, die von ihm nach oben führt, um sie als unbrauchbar durchzustreichen."},"step5":{"text":"Zwei Seiten fehlen noch. **Klicke** auf die Unterseite des mittleren Feldes."},"step6":{"text":"Und die **rechte Seite** schließt sie. Eine Schleife, keine losen Enden, und die vier **Nullen** bleiben frei davon."},"step7":{"text":"Gelöst. **Rückgängig** geht deine Linien zurück, und **Typ** im Pausenmenü tauscht die Quadrate gegen Dreiecke, Sechsecke und noch seltsamere Parkettierungen."}},"magnets":{"step1":{"text":"Jedes Domino ist entweder ein Magnet mit einer **+**-Hälfte und einer **−**-Hälfte oder leer. Die Zahlen zählen die **+**-Pole (oben und links) und die **−**-Pole (unten und rechts) jeder Linie, und gleiche Pole dürfen sich nie berühren."},"step2":{"text":"Die unterste Zeile will drei **−**-Pole, und nur drei Dominos ragen hinein – jedes muss also eins liefern. **Linksklicke** auf die obere Hälfte des senkrechten Dominos, um sie zu **+** zu machen und sein **−** nach unten zu schicken."},"step3":{"text":"Also ist auch das breite Domino unten rechts ein Magnet, und die **0** über der letzten Spalte verbietet dort ein **+**. **Linksklicke** auf seine linke Hälfte, um das **+** auf diese Seite zu legen."},"step4":{"text":"Die vierte Spalte hat jetzt ihr einziges **+** und will überhaupt kein **−**, also kann das Domino darüber keins von beidem sein. **Rechtsklicke** darauf, um es als leer zu markieren."},"step5":{"text":"Die oberste Zeile braucht noch ein **+** und ein **−** vom breiten Domino links. Seine rechte Hälfte berührt ein **+**, und gleiche Pole dürfen sich nicht berühren – also **linksklicke** auf seine linke Hälfte."},"step6":{"text":"Ein Domino fehlt noch. Die erste Spalte hat ihr **+** schon oben verbraucht, hier gehört das **+** also nach rechts: **Linksklicke** auf die rechte Hälfte, um fertig zu werden."},"step7":{"text":"Gelöst! Klickst du dieselbe Hälfte noch einmal an, dreht sich der Magnet um. **Rechtsklicke** ein zweites Mal, dann bleiben Fragezeichen stehen – für „Magnet, aber wie herum?“ –, und **Rückgängig** geht zurück."}},"map":{"step1":{"text":"Färbe jeden Bereich so, dass keine zwei Bereiche, die ein Stück Grenze teilen, dieselbe Farbe haben. Vier Farben reichen immer, und drei Bereiche hier sind noch leer."},"step2":{"text":"Nimm zuerst eine Farbe auf: **Klicke** auf das **blaue Farbfeld**, das zweite in der Reihe unter der Karte."},"step3":{"text":"Mit einer Farbe in der Hand **rechtsklicke** auf einen leeren Bereich: Das trägt einen Punkt in dieser Farbe ein – eine Notiz, dass der Bereich diese Farbe haben *könnte*. Probier es an dem hohen Bereich rechts."},"step4":{"text":"Es ist mehr als ein Vielleicht: Dieser Bereich grenzt schon an Rot, Grün und Gelb, also bleibt nur Blau. **Klicke** ihn an, um ihn auszumalen."},"step5":{"text":"Du kannst eine Farbe auch von einem Bereich zum anderen **ziehen**. Der große Bereich oben berührt jetzt Rot, Grün und Blau – **ziehe** also Gelb vom kleinen Bereich unten zu ihm hinauf."},"step6":{"text":"Ein leerer Bereich bleibt, in der **linken unteren Ecke**: Er grenzt an Grün, Blau und das neue Gelb, muss also Rot sein. **Ziehe** Rot vom Bereich in der rechten oberen Ecke zu ihm hinunter."},"step7":{"text":"Fertig – bei einem Konflikt wäre auf der Grenze zwischen den beiden Bereichen ein rotes **!** erschienen. **Rückgängig** geht zurück, und mit den Pfeiltasten und **1**–**4** färbst du ganz ohne Maus.","textTouch":"Fertig – bei einem Konflikt wäre auf der Grenze zwischen den beiden Bereichen ein rotes **!** erschienen. **Rückgängig** geht zurück, und das Radiergummi-Feld am Ende der Reihe wischt einen Bereich weg, bei dem du es dir anders überlegt hast."}},"mines":{"step1":{"text":"Jede Zahl zählt die Minen in den acht Feldern, die sie berühren. Unter dem zugedeckten Block verstecken sich zwei Minen; decke alles andere auf, ohne auf eine zu treten."},"step2":{"text":"Diese **1** berührt nur ein zugedecktes Feld, dieses Feld ist also eine Mine. **Rechtsklicke** darauf, um eine Fahne zu stecken."},"step3":{"text":"Die **1** darunter hat ihre eine Mine jetzt beflaggt, also sind alle übrigen Nachbarn sicher. **Linksklicke auf diese 1**, um sie alle auf einmal zu öffnen."},"step4":{"text":"Die **2** über dem Block zählt schon eine Fahne und hat nur noch ein zugedecktes Feld. **Rechtsklicke** auf dieses Feld."},"step5":{"text":"Beide Minen sind beflaggt, also muss das letzte zugedeckte Feld sicher sein. **Linksklicke** darauf, um das Gitter fertig zu machen."},"step6":{"text":"Geräumt. **Rechtsklicke** ein zweites Mal, um eine Fahne wieder wegzunehmen, und **Rückgängig** rettet dich, falls du doch einmal auf eine Mine trittst."}},"net":{"step1":{"text":"Jede Kachel trägt ein Stück Draht, und das ganze Netz wurde zufällig verdreht. Dreh die Kacheln, bis alle neun an der markierten Kachel in der Mitte hängen: **Blaue** Drähte sind schon unter Strom, graue nicht."},"step2":{"text":"Die Kachel unten links richtet ihren Draht direkt gegen die Wand. **Linksklicke** auf sie: Sie dreht sich eine Vierteldrehung gegen den Uhrzeigersinn, und der Draht erreicht ihren Nachbarn rechts."},"step3":{"text":"**Ein Rechtsklick** dreht eine Kachel andersherum. Gib der Kachel unten rechts eine Drehung im Uhrzeigersinn, dann schwenkt ihr Draht nach links."},"step4":{"text":"Die mittlere Kachel hat auf allen vier Seiten Drähte, sie kann also nicht falsch stehen. **Mittelklicke** sie, um sie zu sperren, oder schalte das **Schloss** neben „Rückgängig“ ein und klicke sie an: Eine gesperrte Kachel ist schattiert und lässt sich nicht drehen.","textTouch":"Die mittlere Kachel hat auf allen vier Seiten Drähte, sie kann also nicht falsch stehen. Schalte das **Schloss** neben „Rückgängig“ ein und tippe die Kachel an, um sie zu sperren: Eine gesperrte Kachel ist schattiert und lässt sich nicht drehen."},"step5":{"text":"Eine Kachel bleibt übrig. Schalte das **Schloss** wieder aus und **linksklicke** auf die Ecke oben rechts, damit ihr Draht nach links schwenkt und das ganze Netz aufleuchtet.","textTouch":"Eine Kachel bleibt übrig. Schalte das **Schloss** wieder aus und tippe auf die Ecke oben rechts, damit ihr Draht nach links schwenkt und das ganze Netz aufleuchtet."},"step6":{"text":"Alle neun Kacheln sind unter Strom. **Rückgängig** geht deine Drehungen zurück; auf der Tastatur bewegen die Pfeiltasten einen Zeiger, und **A**, **D** und **F** drehen die Kachel darunter.","textTouch":"Alle neun Kacheln sind unter Strom. **Rückgängig** geht deine Drehungen zurück, eine gesperrte Kachel ist vor einem versehentlichen Tippen sicher, und **Mischen** verdreht jede nicht gesperrte Kachel neu."}},"netslide":{"step1":{"text":"Am Ende muss jedes Stück Draht mit der Stromquelle verbunden sein. Blaue Drähte sind unter Strom, graue Bleistiftdrähte nicht."},"step2":{"text":"Die Quelle sitzt auf der mittleren Kachel. Diese Kachel bewegt sich nie, deshalb haben die mittlere Zeile und die mittlere Spalte keine Pfeile – alles andere lässt sich verschieben."},"step3":{"text":"Klicke auf den Pfeil **links neben der untersten Zeile**, um diese Zeile einen Schritt nach links zu schieben; der Draht, der hinausfällt, taucht rechts wieder auf."},"step4":{"text":"Die unterste Zeile passt jetzt zusammen, ist aber immer noch grau: Bisher verbindet sie nichts nach oben mit der Quelle."},"step5":{"text":"**Rechtsklicke** auf den Pfeil **über der dritten Spalte**: Das kehrt den Pfeil um, diese Spalte rutscht also nach unten, und die letzten Drähte leuchten auf."},"step6":{"text":"Alles unter Strom! **Lösen** zeigt eine Antwort, wenn du feststeckst, und im Menü **Typ** gibt es umlaufende Gitter, in denen Drähte über einen Rand hinaus auf der anderen Seite weiterlaufen."}},"pattern":{"step1":{"text":"Die Zahlen neben jeder Zeile und Spalte sind die Längen ihrer schwarzen Blöcke, der Reihe nach. Finde heraus, welche Felder schwarz sind, und male sie aus."},"step2":{"text":"Die **dritte Spalte** zeigt 1 2: ein Schwarz, eine Lücke, dann zwei Schwarz. In vier Feldern passt das nur auf eine Weise, mit dem Paar unten. **Ziehe** darüber nach unten."},"step3":{"text":"Damit ist das Feld über dem Paar die Lücke. **Rechtsklicke** darauf, um einen Punkt zu setzen – so markierst du ein Feld, von dem du weißt, dass es weiß ist."},"step4":{"text":"Und das oberste Feld dieser Spalte ist das einzelne Schwarz des Hinweises. **Klicke** darauf."},"step5":{"text":"Die **letzte Spalte** zeigt 3. Wo auch immer ein Dreierblock in vier Feldern liegt, deckt er die mittleren beiden ab – **ziehe** also über diese nach unten."},"step6":{"text":"Ein Hinweis wird grau, sobald seine Linie fertig ist. Arbeite dich so weiter vor, oder lass **Lösen** dieses hier zu Ende bringen; ein **Mittelklick** setzt ein Feld wieder auf unbekannt zurück."}},"pearl":{"step1":{"text":"Zeichne eine geschlossene Schleife von Feldmitte zu Feldmitte. Sie muss nicht jedes Feld besuchen, aber sie muss durch jede Perle laufen."},"step2":{"text":"Eine **weiße Perle** heißt, dass die Schleife gerade durch sie hindurchläuft. In der obersten Zeile geht gerade nur seitwärts – **ziehe** also vom Feld links neben dieser Perle zum Feld rechts davon."},"step3":{"text":"Diese Perle hat jetzt ihre beiden Segmente, es kann sie also nichts anderes mehr verlassen. **Rechtsklicke** auf die Kante darunter, um diese Seite auszustreichen."},"step4":{"text":"Eine **schwarze Perle** biegt ab, und die Schleife läuft danach durch das Feld auf jeder ihrer Seiten gerade weiter. Die am **linken Rand** kann nicht nach unten abbiegen – dafür bräuchte es eine gerade Linie durch die linke untere Ecke –, also **klicke** auf ihre rechte Kante."},"step5":{"text":"Damit läuft das Feld daneben gerade weiter – und die weiße Perle dahinter ebenso. **Ziehe** von diesem Feld hinüber bis in die vierte Spalte."},"step6":{"text":"Arbeite dich von den Perlen aus weiter vor; eine Perle bekommt einen roten Hof, sobald ihre Regel verletzt ist. **Lösen** zeichnet die ganze Schleife, wenn du sie sehen willst."}},"pegs":{"step1":{"text":"Ein Stift springt über einen Nachbarn in das leere Loch dahinter, und der übersprungene Stift wird weggenommen. Räume dieses kleine Brett bis auf **einen Stift** leer: drei Sprünge."},"step2":{"text":"**Ziehe** den Stift oben am Stiel nach unten über seinen Nachbarn hinweg in das Loch ganz unten."},"step3":{"text":"Klicken geht auch. Klicke auf den **rechten Stift**, um ihn aufzunehmen, und dann auf das Loch zwei Felder weiter links."},"step4":{"text":"Letzter Sprung: Zieh den Stift in der **linken unteren Ecke** über seinen Nachbarn in die Mitte."},"step5":{"text":"Ein Stift übrig – gelöst. **Rückgängig** nimmt einen Sprung zurück, wenn du dich festfährst, und die Pfeiltasten funktionieren auch: Enter nimmt einen Stift auf, dann schiebt ihn ein Pfeil.","textTouch":"Ein Stift übrig – gelöst. **Rückgängig** nimmt einen Sprung zurück, wann immer du dich festfährst – so weit zurück, wie du willst."}},"range":{"step1":{"text":"Male Felder schwarz, sodass jede Zahl genau die weißen Felder zählt, die ihr eigenes Feld sieht: sich selbst und jedes Feld in gerader Linie nach oben, unten, links und rechts, bis ein schwarzes Feld oder der Rand sie stoppt."},"step2":{"text":"Die **6** sieht gerade sechs Felder – ihre ganze Zeile plus die beiden darunter. Also darf in dieser Zeile und dieser Spalte nichts schwarz werden."},"step3":{"text":"Die **2** darf nur sich selbst und ein weiteres Feld sehen, und das Feld über ihr muss wegen der 6 weiß bleiben. **Klicke** also auf das Feld links von ihr, um es schwarz zu malen."},"step4":{"text":"Damit bleibt das Feld oben rechts das eine weiße Feld, das die 2 noch sieht. **Rechtsklicke** darauf, um einen Punkt einzutragen – so notierst du ein Feld, von dem du weißt, dass es weiß bleibt."},"step5":{"text":"Die **3** sieht sich selbst und die beiden Felder links von ihr bereits, also muss das Feld rechts von ihr schwarz sein. **Klicke** darauf."},"step6":{"text":"Fertig mit zwei schwarzen Feldern – die Punkte sind nur Notizen. **H** füllt ein Feld aus, das sich aus dem Rest ergibt, und **Lösen** setzt die Punkte im ganzen Gitter.","textTouch":"Fertig mit zwei schwarzen Feldern – die Punkte sind nur Notizen. **Lösen** setzt die Punkte im ganzen Gitter, wenn du lieber die Antwort sehen willst."}},"rect":{"step1":{"text":"Zerschneide dieses Gitter in Rechtecke, sodass jedes Rechteck genau eine Zahl enthält und diese Zahl angibt, wie viele Felder das Rechteck bedeckt."},"step2":{"text":"Ein Rechteck darf nur eine Zahl enthalten, und die **3** sitzt direkt unter der **4** – die 4 muss also die ganze oberste Zeile nehmen. **Ziehe** von der 4 bis zum rechten Ende dieser Zeile."},"step3":{"text":"Klickst du eine einzelne Gitterlinie an, fügst du genau diese eine Kante hinzu oder entfernst sie. **Klicke** auf die Linie rechts neben der **3**."},"step4":{"text":"Eine 9 kann nur ein 3×3-Block sein, und dafür ist noch genau ein Platz frei. **Ziehe** über den hervorgehobenen Block, vom Feld oben links bis in die rechte untere Ecke: Damit ist auch die 3 eingezäunt."},"step5":{"text":"Jedes Feld liegt in einem Rechteck der richtigen Größe. **Ziehe mit rechts**, um die Linien innerhalb einer Fläche wegzuradieren und nur ihren Umriss stehen zu lassen, und **Rückgängig** nimmt einen Strich zurück."}},"samegame":{"step1":{"text":"Räume das Brett leer, indem du Gruppen von zwei oder mehr aneinandergrenzenden Feldern derselben Farbe wegnimmst. Eine Gruppe aus _n_ Feldern bringt (_n_ − 2)² Punkte, es kommt also auf die großen an."},"step2":{"text":"Klicke auf eines der vier **roten** Felder oben. Klickst du zum ersten Mal, wird die Gruppe nur ausgewählt: Sie wird heller und bekommt einen dicken Rand."},"step3":{"text":"Klicke die ausgewählte Gruppe noch einmal an, um sie vom Brett zu heben und vier Punkte zu holen. Felder über einer Lücke fallen hinein, und eine leere Spalte zieht ihre Nachbarn heran."},"step4":{"text":"Dieses **grüne** Feld steht ganz allein. Nichts daneben hat seine Farbe, es lässt sich also nie auswählen – es muss warten, bis das Brett ihm einen Partner heranschiebt."},"step5":{"text":"Jetzt das hervorgehobene **blaue Paar**. Klicke auf eines der beiden Felder, um beide auszuwählen."},"step6":{"text":"Anders überlegt? **Rechtsklicke** auf die Auswahl, um sie wieder loszulassen – entfernt wird erst etwas, wenn du ein zweites Mal daraufklickst."},"step7":{"text":"Das ist das ganze Spiel. Jedes Brett lässt sich leer räumen, also bleib dran – **Rückgängig** spult zurück, wenn ein Feld allein übrig bleibt, und es gibt keinen Lösen-Knopf, der dich rettet."}},"signpost":{"step1":{"text":"Jedes Feld trägt einen Pfeil. Verbinde alle sechs zu einer einzigen Kette, nummeriert von **1 bis 6**, in der auf jedes Feld ein Feld irgendwo entlang seines eigenen Pfeils folgt."},"step2":{"text":"Die **1** zeigt nach Osten. **Ziehe** von ihr auf das Feld rechts daneben, um dieses zur 2 zu machen."},"step3":{"text":"Die **3** hat sich von selbst angehängt, wie es Zahlen immer tun, die aufeinanderfolgen und in die richtige Richtung zeigen. **Ziehe** jetzt das Feld unten rechts auf das Feld links davon."},"step4":{"text":"Keines der beiden hat schon eine Nummer, deshalb ist das Paar mit **a** und **a+1** beschriftet. **Rechtsklicke** auf das mittlere Feld der untersten Zeile, um sie wieder auseinanderzuziehen."},"step5":{"text":"Echte Zahlen sind besser: **Ziehe** die **3** auf das Feld darunter, das damit zur 4 wird."},"step6":{"text":"Letztes Glied: **Ziehe** diese 4 auf das Feld links davon. Sie wird zur 5, und die 6 schließt den Pfad von selbst."},"step7":{"text":"Gelöst. **Ziehe mit rechts**, um andersherum zu verbinden – von einem Feld zurück zu dem davor –, und **Lösen** legt den ganzen Pfad aus."}},"singles":{"step1":{"text":"Schwärze Felder, bis sich unter den weißen Feldern keiner Zeile und keiner Spalte eine Zahl wiederholt. Zwei schwarze Felder dürfen nie eine Kante teilen, und die weißen Felder müssen ein zusammenhängender Bereich bleiben."},"step2":{"text":"Die beiden **Vieren** in dieser Zeile haben ein Feld zwischen sich. Würdest du dieses Feld schwärzen, blieben beide Vieren weiß – es muss also selbst weiß sein. **Rechtsklicke** darauf, um es einzukreisen."},"step3":{"text":"Diese eingekreiste **3** bleibt für immer weiß, und in ihrer Spalte steht oben noch eine 3. **Linksklicke** auf die obere, um sie zu schwärzen."},"step4":{"text":"Schwarze Felder berühren sich nie, also bleibt die **4** direkt rechts davon weiß. **Linksklicke** auf die andere 4 in dieser letzten Spalte."},"step5":{"text":"Dasselbe noch einmal: Die **2** direkt über deinem neuen schwarzen Feld ist weiß, und in ihrer Zeile steht ganz links noch eine 2. **Linksklicke** auf diese."},"step6":{"text":"Noch eine. Die **3** über diesem schwarzen Feld ist weiß, also muss die andere 3 am Fuß der Spalte weg. **Linksklicke** darauf."},"step7":{"text":"Gelöst, und die weißen Felder hängen immer noch alle zusammen. Kreise sind nur Notizen, und **Rückgängig** geht deine Züge zurück."}},"sixteen":{"step1":{"text":"Bring die Steine in die Reihenfolge **1 bis 9**, von links nach rechts gelesen. Die Pfeile am Rand schieben eine ganze Zeile oder Spalte einen Schritt weiter, und was hinausfällt, kommt auf der anderen Seite wieder herein."},"step2":{"text":"Klicke auf den Pfeil **über der zweiten Spalte**, um diese Spalte einen Schritt nach oben zu schieben; damit ist die mittlere Zeile fertig."},"step3":{"text":"Jetzt muss die unterste Zeile nach rechts. **Rechtsklicke** auf den Pfeil **links neben der untersten Zeile**: Das schiebt die Zeile in die Gegenrichtung."},"step4":{"text":"Der letzte: Klicke auf den Pfeil **links neben der obersten Zeile**, um sie nach links zu schieben und das Gitter fertig zu machen."},"step5":{"text":"In der richtigen Reihenfolge! **Typ** im Pausenmenü bietet größere Gitter, und über **Anpassen…** darin lässt sich eines mit einer festen Zahl von Mischzügen durcheinanderwürfeln, die du dann wieder rückgängig machst."}},"slant":{"step1":{"text":"Zeichne durch jedes Feld eine Diagonale. Eine eingekreiste Zahl zählt die Linien, die ihre Ecke berühren, und die Linien dürfen nie eine Schleife schließen."},"step2":{"text":"Die **0** in der linken oberen Ecke will gar nichts berühren, ihr eines Feld muss sich also andersherum neigen. **Rechtsklicke** auf dieses Feld, um ein `/` zu zeichnen."},"step3":{"text":"Die **4** braucht eine Linie aus allen vier Feldern um sie herum. **Linksklicke** auf das oben links von ihr – ein **Linksklick** zeichnet ein `\\\\`."},"step4":{"text":"Das Feld oben rechts von der **4** muss sich stattdessen nach unten links neigen. **Rechtsklicke** darauf für ein `/`."},"step5":{"text":"Die **1** am linken Rand hat ihre eine Linie schon, aus dem Feld darunter. Das Feld darüber muss sich also wegneigen: **Linksklicke** darauf für ein `\\\\`."},"step6":{"text":"Mach genauso weiter. Eine Zahl, die nicht mehr aufgehen kann, wird rot – und jede Linie, die in einer geschlossenen Schleife gefangen ist, ebenfalls. **Lösen** im Pausenmenü füllt den Rest aus."}},"solo":{"step1":{"text":"Jede Zeile, jede Spalte und jeder umrandete **2×2-Block** muss 1, 2, 3 und 4 genau einmal enthalten. Auf diesem kleinen Gitter fehlen drei Felder."},"step2":{"text":"Dieser **Block** hat schon eine 2, eine 3 und eine 4, sein leeres Feld kann also nur eine **1** sein. Klicke dieses Feld an und drücke die Taste **1**.","textTouch":"Dieser **Block** hat schon eine 2, eine 3 und eine 4, sein leeres Feld kann also nur eine **1** sein. Tippe dieses Feld an und dann **1** auf dem Tastenfeld."},"step3":{"text":"Bei einem Feld unsicher? **Rechtsklicke** dieses leere Feld und drücke **2**, um die Ziffer als Notiz einzutragen.","textTouch":"Bei einem Feld unsicher? Tippe dieses leere Feld an, raste **✎** auf dem Tastenfeld ein und tippe **2**, um die Ziffer als Notiz einzutragen."},"step4":{"text":"Seine Zeile enthält schon 3, 4 und 1, die Notiz war also richtig. **Linksklicke** dasselbe Feld und drücke **2**, um die Antwort einzutragen.","textTouch":"Seine Zeile enthält schon 3, 4 und 1, die Notiz war also richtig. Das Feld ist noch gewählt: Tippe **✎**, um das Notieren zu beenden, und dann **2**, um die Antwort einzutragen."},"step5":{"text":"Ein Feld ist noch übrig. Seine Zeile hat schon 4, 3 und 1 – klicke es an und drücke die fehlende Ziffer.","textTouch":"Ein Feld ist noch übrig. Seine Zeile hat schon 4, 3 und 1 – tippe es an und dann die fehlende Ziffer auf dem Tastenfeld."},"step6":{"text":"Gelöst! **Rückgängig** nimmt eine falsche Ziffer zurück, und die Taste **M** notiert alle Möglichkeiten auf einmal in jedes leere Feld.","textTouch":"Gelöst! **Rückgängig** nimmt eine falsche Ziffer zurück, und **Notizen** im Pausenmenü trägt alle Möglichkeiten auf einmal in jedes leere Feld ein."}},"tents":{"step1":{"text":"Stell neben jeden Baum ein Zelt – darüber, darunter, links oder rechts davon, nie diagonal. Keine zwei Zelte dürfen sich berühren, und die Zahlen zählen die Zelte in jeder Zeile und Spalte."},"step2":{"text":"Die **0** am Ende der zweiten Zeile heißt, dass diese Zeile keine Zelte bekommt. **Rechtsklicke** auf das Feld neben dem Baum, um es als Gras zu markieren."},"step3":{"text":"Die dritte Spalte ist ebenfalls leer. **Ziehe mit rechts** von ihrem obersten Feld hinunter bis in die dritte Zeile, um alle drei auf einmal zu Gras zu machen."},"step4":{"text":"Der Baum unten rechts steht in der Ecke und hat einen weiteren Baum neben sich, sein einziger freier Nachbar liegt also darüber. **Linksklicke** auf dieses Feld, um ein Zelt aufzuschlagen."},"step5":{"text":"Dieses Zelt füllt die dritte Zeile, also kann auch der Baum am linken Rand nicht darunter campen. **Linksklicke** auf das Feld oben links."},"step6":{"text":"Ein Baum hat noch kein Zelt, und nur das Feld links von ihm ist frei. **Linksklicke** darauf, um den Zeltplatz fertig zu machen."},"step7":{"text":"Gelöst! Klickst du ein Zelt oder eine Grasmarkierung noch einmal an, verschwindet sie wieder; die Pfeiltasten mit Enter und Leertaste tun dasselbe, und **Rückgängig** geht zurück.","textTouch":"Gelöst! Tippst du ein Zelt oder eine Grasmarkierung noch einmal an, verschwindet sie wieder, und **Rückgängig** geht zurück."}},"towers":{"step1":{"text":"Jede Zeile und jede Spalte enthält je einen Turm der Höhen 1 bis 4. Eine Zahl am Rand zählt die Türme, die du von dort aus **siehst**: Ein höherer Turm verdeckt jeden niedrigeren dahinter."},"step2":{"text":"Die **1** rechts neben der obersten Zeile heißt, dass von dieser Seite nur ein Turm zu sehen ist – der nächste muss also der höchste sein. Klicke dieses Feld an und drücke **4**.","textTouch":"Die **1** rechts neben der obersten Zeile heißt, dass von dieser Seite nur ein Turm zu sehen ist – der nächste muss also der höchste sein. Tippe dieses Feld an und dann **4** auf dem Tastenfeld."},"step3":{"text":"Du kannst dir Möglichkeiten auch nur notieren, statt zu antworten. **Rechtsklicke** das leere Feld am linken Ende der obersten Zeile und drücke **1**.","textTouch":"Du kannst dir Möglichkeiten auch nur notieren, statt zu antworten. Tippe das leere Feld am linken Ende der obersten Zeile an, raste **✎** auf dem Tastenfeld ein und tippe **1**."},"step4":{"text":"Die **4** links neben der Zeile sagt, dass alle vier Türme zu sehen sind – von dieser Seite steigen sie also 1-2-3-4 an. **Linksklicke** das Feld und drücke **1**, um es zu beantworten.","textTouch":"Die **4** links neben der Zeile sagt, dass alle vier Türme zu sehen sind – von dieser Seite steigen sie also 1-2-3-4 an. Das Feld ist noch gewählt: Tippe **✎**, um das Notieren zu beenden, und dann **1** als Antwort."},"step5":{"text":"Ein Feld ist noch übrig, und die **1** neben seiner Zeile stellt wieder den höchsten Turm nach vorn. Klicke es an und drücke **4**.","textTouch":"Ein Feld ist noch übrig, und die **1** neben seiner Zeile stellt wieder den höchsten Turm nach vorn. Tippe es an und dann **4** auf dem Tastenfeld."},"step6":{"text":"Gelöst! **Backspace** leert ein Feld, bei dem du danebenlagst, und **Lösen** im Pausenmenü bringt ein Rätsel zu Ende, das dich besiegt hat.","textTouch":"Gelöst! **⌫** auf dem Tastenfeld leert ein Feld, bei dem du danebenlagst. Im Pausenmenü trägt **Notizen** jede Möglichkeit ein, und **Lösen** bringt ein Rätsel zu Ende, das dich besiegt hat."}},"tracks":{"step1":{"text":"Eine Bahnstrecke läuft vom Eingang links zum Ausgang unten, und jedes Feld, das sie besucht, hat genau zwei Schienen. Die Zahlen sagen, durch wie viele Felder dieser Spalte oder Zeile die Strecke läuft."},"step2":{"text":"Das Eingangsstück läuft schon nach oben in das **Feld oben links**, und dessen obere und linke Seite sind der Gitterrand. Seine zweite Schiene muss also nach rechts: **Klicke** direkt rechts von seiner Mitte."},"step3":{"text":"Die **linke Spalte** ist mit **2** beziffert, und der Eingang belegt beide Felder schon, also läuft durch ihre untere Hälfte nichts. **Rechtsklicke** in die Mitte eines Feldes, um es auszukreuzen – **mit rechts ziehen** kreuzt eine ganze Reihe auf einmal aus."},"step4":{"text":"Die **rechte Spalte** ist mit **4** beziffert, die Strecke besucht also jedes ihrer Felder, und die Felder ganz oben und ganz unten können nur nach innen abbiegen. **Ziehe** vom Feld oben rechts ganz hinunter bis zu dem unten rechts."},"step5":{"text":"Die **unterste Zeile** braucht drei Felder, und die linke Spalte ist fertig – also liegt die rechte untere Ecke auf der Strecke. Sie kann das Gitter nicht verlassen, biegt also nach links und oben ab: **Klicke** auf ihre linke Seite."},"step6":{"text":"Zahlen werden grau, wenn ihre Linie stimmt, und rot, wenn sie nicht mehr aufgehen kann. Arbeite dich an den losen Enden weiter, oder lass **Lösen** die Bahnstrecke fertigstellen."}},"twiddle":{"step1":{"text":"Bring die Zahlen wieder in die Reihenfolge **1 bis 9**. Ein Zug dreht einen quadratischen Block aus vier Steinen um eine Vierteldrehung; drei Drehungen bringen dieses Brett ins Ziel."},"step2":{"text":"Klicke in die Mitte der **vier Steine oben links**. Ein **Linksklick** dreht diesen Block gegen den Uhrzeigersinn, wodurch 1, 2, 3 oben stehen."},"step3":{"text":"**Rechtsklicke** in die Mitte der **vier Steine unten rechts**, um diesen Block stattdessen im Uhrzeigersinn zu drehen."},"step4":{"text":"Zum Schluss ein **Linksklick** in die Mitte der **vier Steine unten links**."},"step5":{"text":"Fertig! Im Menü **Typ** gibt es größere Blöcke und einen Modus *mit Ausrichtung*, in dem am Ende auch jeder Stein richtig herum stehen muss."}},"undead":{"step1":{"text":"Fülle die fünf leeren Felder mit Geistern, Vampiren und Zombies – die Strichliste oben sagt, wie viele es von jedem gibt. Jede Zahl zählt die Monster, die man entlang dieser Linie sieht, und die Spiegel lenken deinen Blick um."},"step2":{"text":"Von **links in die oberste Zeile** geschaut siehst du nichts; der Spiegel lenkt genau diese Linie nach oben hinaus, wo die **1** ein Monster sieht. Nur ein Geist ist von vorn unsichtbar und im Spiegel zu sehen. **Klicke** auf dieses Feld."},"step3":{"text":"Die **4** in der linken unteren Ecke zickzackt durch die Spiegel an drei Feldern vorbei und sieht jedes einzelne davon. Vampire verschwinden im Spiegel, der einzige Vampir muss also das mittlere Feld der linken Spalte sein. **Klicke** darauf."},"step4":{"text":"Ein Klick schaltet nur durch die Monster weiter. Drücke stattdessen **V**: G, V und Z setzen einen Geist, Vampir oder Zombie direkt in das hervorgehobene Feld.","textTouch":"Ein Tippen schaltet die Monster nur eines nach dem anderen weiter. Tippe stattdessen auf **Vampir** auf dem Tastenfeld: Damit landet dieses Monster direkt im markierten Feld."},"step5":{"text":"Die **mittlere Zeile** ist eine gerade, spiegelfreie Sicht, und beide **Einsen** sehen ein einziges Monster – den Vampir. Seine beiden Nachbarn müssen also Geister sein. **Klicke** auf das mittlere Feld."},"step6":{"text":"**Rechtsklicke** stattdessen, um eine kleine Notiz einzutragen, ohne etwas zu setzen. Probier es am rechten Feld dieser Zeile; **rechtsklicke** noch einmal, dann kommt das nächste Monster dazu."},"step7":{"text":"Zwei Felder fehlen noch: Das mit der Notiz ist der dritte Geist, und das letzte ist der Zombie. Zahlen werden grau, sobald ihre Linie geklärt ist; **Lösen** bringt das Labyrinth zu Ende, wenn du lieber zuschaust."}},"unequal":{"step1":{"text":"Jede Zeile und jede Spalte braucht 1, 2, 3 und 4 je einmal – und jedes Zeichen zwischen zwei Feldern muss auf das **kleinere** der beiden zeigen."},"step2":{"text":"Das Zeichen hier zeigt nach rechts, das **linke** Feld ist also das größere. In dieser Zeile fehlen noch eine 2 und eine 3: Klicke das linke Feld an und drücke **3**.","textTouch":"Das Zeichen hier zeigt nach rechts, das **linke** Feld ist also das größere. In dieser Zeile fehlen noch eine 2 und eine 3: Tippe das linke Feld an und dann **3** auf dem Tastenfeld."},"step3":{"text":"Das Feld, auf das das Zeichen zeigt, bekommt die kleinere Zahl. Klicke es an und drücke **2**.","textTouch":"Das Feld, auf das das Zeichen zeigt, bekommt die kleinere Zahl. Tippe es an und dann **2** auf dem Tastenfeld."},"step4":{"text":"In seiner Spalte steht jetzt eine 3, dieses Feld kann also nur eine 2 sein. **Rechtsklicke** darauf und drücke **2**, um das als Notiz einzutragen.","textTouch":"In seiner Spalte steht jetzt eine 3, dieses Feld kann also nur eine 2 sein. Tippe es an, raste **✎** auf dem Tastenfeld ein und tippe **2**, um das als Notiz einzutragen."},"step5":{"text":"Eine Notiz ist noch keine Antwort. **Linksklicke** dasselbe Feld und drücke **2**, um dich festzulegen.","textTouch":"Eine Notiz ist noch keine Antwort. Das Feld ist noch gewählt: Tippe **✎**, um das Notieren zu beenden, und dann **2**, um dich festzulegen."},"step6":{"text":"Ein Feld ist noch übrig. Klicke es an und drücke **3**, um das Quadrat fertig zu machen.","textTouch":"Ein Feld ist noch übrig. Tippe es an und dann **3** auf dem Tastenfeld, um das Quadrat fertig zu machen."},"step7":{"text":"Gelöst! **Rückgängig** nimmt eine Ziffer zurück, und **Lösen** trägt die Antwort ein, wenn dich ein Rätsel besiegt.","textTouch":"Gelöst! **Rückgängig** nimmt eine Ziffer zurück, **Notizen** und **Tipp** tragen die Möglichkeiten ein, und **Lösen** trägt die Antwort ein, wenn dich ein Rätsel besiegt."}},"unruly":{"step1":{"text":"Färbe jedes Feld schwarz oder weiß. Jede Zeile und jede Spalte braucht **drei von jeder Farbe**, und keine Farbe darf **dreimal hintereinander** vorkommen. Drei Felder sind noch unentschieden."},"step2":{"text":"Diese Zeile hat ihre drei weißen Felder schon, das unentschiedene muss also schwarz sein. **Linksklicke** darauf: Ein **Linksklick** malt schwarz."},"step3":{"text":"Diese Zeile hat schon drei schwarze Felder, ihr unentschiedenes ist also weiß. **Rechtsklicke** darauf: Das geht andersherum und malt zuerst weiß."},"step4":{"text":"Das letzte unentschiedene Feld hat zwei schwarze links von sich, und ein drittes in Folge ist nicht erlaubt. **Rechtsklicke** darauf, um es weiß zu malen und das Gitter fertig zu machen."},"step5":{"text":"Gelöst! Klickst du ein gefärbtes Feld noch einmal an, wechselt es zur anderen Farbe und dann zurück auf unentschieden, und **Rückgängig** geht deine Züge zurück."}},"untangle":{"step1":{"text":"Sechs Punkte liegen auf einem Ring, verbunden durch acht Linien. Zwei Paare davon kreuzen sich – das sind die roten. Zieh Punkte herum, bis kein Rot mehr übrig ist."},"step2":{"text":"Klicke zuerst auf **Einrasten**, den Gitterknopf neben Rückgängig (oder drücke **G**). Das schaltet das Fanggitter ein, sodass ein losgelassener Punkt auf einem der feinen Pünktchen in der Mitte eines Gitterfelds landet."},"step3":{"text":"**Ziehe** den Punkt oben am Ring in das leere Feld in der **linken oberen Ecke**.","textTouch":"**Ziehe** den Punkt oben am Ring in den leeren Platz in der **linken oberen Ecke** des Bretts. Er muss nirgends genau landen – die Kreuzung muss nur weg."},"step4":{"text":"Eine Kreuzung fehlt noch, drüben rechts. **Ziehe** den untersten Punkt in die leere **rechte untere Ecke**.","textTouch":"Eine Kreuzung fehlt noch, drüben rechts. **Ziehe** den untersten Punkt in die leere **rechte untere Ecke** – die letzte rote Linie verschwindet, sobald sie frei ist."},"step5":{"text":"Entwirrt. **Lösen** entwirrt jedes Knäuel für dich, und mit den Pfeiltasten wanderst du mit einem Zeiger von Punkt zu Punkt, mit Enter zum Aufnehmen und Ablegen.","textTouch":"Entwirrt. Rote Linien sind die, die sich noch kreuzen – zieh also weiter, bis keine mehr übrig ist, oder lass **Lösen** das Knäuel für dich entwirren."}}}'),Fe={$locale:`de`,$name:q,$dir:`ltr`,ui:J,touchPhrases:Y,messages:X,status:Z,games:Q,tutorials:$};export{g as A,ee as B,A as C,S as D,w as E,o as F,i as I,oe as L,f as M,u as N,b as O,c as P,ie as R,M as S,E as T,t as V,H as _,Ee as a,I as b,be as c,me as d,fe as f,W as g,se as h,Oe as i,m as j,v as k,ve as l,ce as m,Me as n,we as o,ue as p,Ae as r,Se as s,Pe as t,ge as u,B as v,O as w,P as x,R as y,ne as z};
//# sourceMappingURL=i18n-de-Cr2gLHm5.js.map