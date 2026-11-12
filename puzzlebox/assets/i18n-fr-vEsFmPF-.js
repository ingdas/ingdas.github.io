import{t as e}from"./index-DIYwYEVR.js";var t=e({default:()=>n}),n="## Commandes communes\n\n- **Nouveau** distribue un casse-tête tout neuf et **Recommencer** te ramène au début de\n  celui-ci ; **Annuler** et **Rétablir** parcourent tes coups, et même un **Recommencer**\n  peut s’annuler.\n- **Résoudre** montre la réponse quand un casse-tête en propose une. Cela ajoute un coup\n  que tu peux annuler.\n- Un clic droit est la seconde action dans la plupart des casse-têtes — marquer, poser un\n  drapeau ou tourner dans l’autre sens. Un clic milieu est la troisième, dans les\n  casse-têtes qui en ont une.\n- **Type** passe d’une taille ou d’une difficulté prédéfinie à une autre ;\n  **Personnalisé…** te laisse tout régler toi-même.\n- **Partager** affiche des codes que tu peux envoyer pour que quelqu’un d’autre joue\n  exactement ce casse-tête.\n\n### Clavier (Keyboard)\n\n- **Nouvelle partie** : `N` · **Annuler** : `U` ou `Ctrl+Z` · **Rétablir** : `R` ou\n  `Ctrl+Y`\n- **Résoudre** : `Ctrl+S` (là où c’est possible). **Cette aide** : `?`, et `Esc` la\n  referme. **Pause**: `Esc`.\n- Dans la plupart des casse-têtes, les flèches déplacent un curseur sur le plateau,\n  `Enter` agit comme un clic gauche dessus et `Space` comme un clic droit.\n- Dans les menus, les flèches passent d’une carte ou d’un bouton au suivant, `Enter`\n  choisit et `Esc` revient en arrière.\n- Une manette marche aussi : la croix directionnelle déplace, `A` choisit ou clique, `X`\n  fait le clic droit, `B` revient en arrière, `Start` met en pause, `LB` et `RB` annulent\n  et rétablissent, et `Y` donne un indice.\n  Dans les casse-tête où l’on écrit des chiffres, `RT` mène aux touches à l’écran et en revient.\n",ee=e({default:()=>te}),te=`## Sur un écran tactile

- **Appuie** pour l’action principale et fais un **appui long** pour la seconde. Quand un
  casse-tête en a une troisième, appuie avec **deux doigts**.
- Le premier bouton rond de la barre d’outils (un point dans un carré) inverse les deux,
  pour que l’action dont tu te sers le plus soit toujours à un simple appui ; tant qu’elles
  sont inversées, il affiche un petit drapeau allumé. L’appui long fait alors l’autre.
- **Écarte deux doigts** sur le plateau pour grossir les cases d’une grande grille, puis
  **fais glisser à deux doigts** pour t’y déplacer. Rapproche les doigts pour revoir tout
  le casse-tête. Le menu **Pause** propose aussi ces deux tailles sous forme de boutons.
- **Pause** regroupe le reste des commandes : le type de casse-tête, nouveau casse-tête,
  recommencer, résoudre, partager et les Réglages du son et de la langue. Le chrono s’arrête tant que le menu est ouvert.
`,ne=e({default:()=>re}),re=`# Boîte noire

Des boules sont cachées dans une boîte ombrée. Autour d’elle court un cadre de ports
laser. Tire un laser dans la boîte depuis n’importe quel port et regarde ce qui en sort :
déduis des résultats où les boules doivent se trouver, marque-les, puis fais vérifier ta
réponse.

Un rayon file en ligne droite tant qu’aucune boule ne se met en travers :

- Une boule droit devant **absorbe** le rayon. Le port affiche **H** (un impact, _hit_).
- Une boule en diagonale devant **dévie** le rayon de 90° en s’en écartant. Des boules sur
  les deux diagonales le renvoient tout droit en arrière. Les déviations s’enchaînent, un
  rayon peut donc vagabonder avant de ressortir.
- Un rayon qui ressort par le port où il est entré est **réfléchi**, ce que montre un
  **R**. Un rayon qui serait dévié avant même d’entrer dans la boîte l’est aussi, parce
  qu’une boule se trouve en diagonale de son entrée.
- Sinon le rayon ressort ailleurs et les deux ports reçoivent le même **numéro** (et la
  même couleur), ce qui te montre par où chaque tir est entré et ressorti.

Quand tu as marqué le bon nombre de boules, un bouton vert apparaît dans le coin en haut
à gauche. Clique dessus pour vérifier. Ta disposition compte comme correcte si aucun
laser ne peut la distinguer de celle de l’ordinateur — avec plusieurs boules, plusieurs
dispositions peuvent se comporter de la même façon, et n’importe laquelle gagne.

Une mauvaise disposition met fin à la partie et montre la réponse, alors ne vérifie que
quand tu es sûr : les boules trouvées sont noires, les marques fausses sont barrées en
rouge, les boules oubliées sont rouges, tout laser que tu as tiré et que ta disposition
rate est entouré, et les lasers que tu n’as jamais tirés et qui auraient distingué les
deux dispositions sont tirés maintenant et écrits en rouge. Annuler te ramène en arrière
pour continuer d’essayer. Résoudre abandonne et met les vraies boules en place.

## Commandes

La barre d’état compte les boules que tu as marquées et les lasers que tu as tirés, et
après une vérification, elle indique combien de tes boules étaient fausses et combien tu en
as manqué.

### Souris et tactile

- **Clique sur un port** pour en tirer un laser. Clique sur un port déjà tiré pour
  éclairer les deux extrémités de ce rayon ; clique de nouveau dessus, ou n’importe où
  ailleurs, pour éteindre la lumière.
- **Clique dans la boîte** pour y marquer une boule ; clique de nouveau pour retirer la
  marque.
- **Clic droit sur une case** pour la **verrouiller**, afin de ne pas la changer par
  accident ; un nouveau clic droit la déverrouille. Un clic droit sur un port verrouille
  ou déverrouille toute la ligne ou la colonne d’à côté.
- **Clique sur le bouton du coin** pour faire vérifier tes marques.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur sur la boîte et ses ports.
- **Enter** agit comme un clic gauche : tirer, marquer, ou vérifier quand le curseur est
  sur le bouton.
- **Space** agit comme un clic droit, et verrouille ou déverrouille.

## Paramètres

- La **largeur** et la **hauteur** de la boîte. Chaque ligne et chaque colonne a un port
  laser à ses deux bouts.
- **Nombre de boules** : combien de boules sont cachées. Donne un seul nombre, ou un
  intervalle comme \`3-6\` pour laisser l’ordinateur choisir ; il te faut alors trouver
  aussi le compte, et le bouton de vérification apparaît pour tout nombre de marques
  compris dans l’intervalle.
`,ie=e({default:()=>ae}),ae=`# Ponts

Des îles, portant chacune un nombre, sont éparpillées sur l’eau. Relie-les par des ponts
de sorte que :

- chaque pont aille tout droit à l’horizontale ou à la verticale entre deux îles ;
- le nombre d’une île soit exactement le nombre de ponts qui la touchent ;
- deux îles puissent être reliées par des ponts parallèles, mais jamais plus de deux
  (cette limite se change dans les réglages personnalisés) ;
- aucun pont n’en croise un autre ;
- chaque île soit accessible depuis toutes les autres en marchant sur les ponts.

Les erreurs apparaissent en rouge : une île avec trop de ponts, une île qui ne peut plus
en recevoir assez (ses voisines restantes sont pleines, ou les seuls trajets sont bloqués
par d’autres ponts ou par tes propres marques « pas de pont »), et un groupe d’îles déjà
complet mais coupé du reste. Si les boucles sont interdites, les ponts qui forment une
boucle sont rouges eux aussi.

## Commandes

**Résoudre** inscrit la solution, en retirant les ponts qui n’en font pas partie.

### Souris et tactile

- **Glisse** d’une île vers une voisine pour poser un pont entre elles. Il suffit d’aller
  assez loin pour que la direction soit claire ; le pont s’accroche à l’île la plus proche
  de ce côté. Glisse de nouveau pour un second pont parallèle ; glisser encore quand la
  limite est atteinte les retire tous.
- **Glisse en clic droit** de la même façon pour noter une marque « pas de pont ici », ou
  pour l’effacer.
- **Clique** sur une île pour la marquer comme finie. Elle devient grise et ses ponts sont
  verrouillés, tu ne peux donc plus les changer par accident ; clique de nouveau pour la
  déverrouiller.
- **Gomme** (le bouton gomme à côté d’Annuler) fait passer le glisser en mode retrait :
  glisse d’une île vers une voisine pour enlever tous les ponts qui les relient, ou la
  marque « pas de pont » placée là. Appuie de nouveau dessus pour revenir à la pose des
  ponts.
- **Repères** affiche des traits légers partout où un pont pourrait passer, et les masque
  de nouveau.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur d’île en île.
- **Enter** suivi d’une flèche pose un pont dans cette direction ; **Space** suivi d’une
  flèche pose une marque. Appuyer deux fois sur **Enter** marque l’île comme finie.
- **E** est le bouton **Gomme** et **G** le bouton **Repères**.

## Paramètres

- La **largeur** et la **hauteur** de la grille, au moins 3 chacune.
- **Difficulté** : les grilles _Facile_ ne demandent de regarder qu’une île à la fois — là
  où ses ponts restants remplissent exactement la place disponible, ou là où son nombre
  est trop grand pour se passer d’une voisine. Les grilles _Moyen_ font aussi réfléchir
  aux liaisons une par une : quel pont est obligatoire parce que l’île ne peut pas être
  complétée sans lui, et (quand les boucles sont interdites) quelles liaisons fermeraient
  une boucle. Les grilles _Difficile_ demandent d’anticiper d’un cran : ce pont
  refermerait-il un groupe d’îles coupé du reste, ou laisserait-il une île sans issue ?
  Chaque casse-tête a exactement une solution.
- **Autoriser les boucles** : actif par défaut. Désactivé, le réseau de ponts terminé doit
  être un arbre — aucun chemin de ponts ne peut ramener à son point de départ — et le
  casse-tête est fabriqué pour se résoudre en tenant compte de cela.
- **Ponts max. par direction** : la limite de ponts parallèles, normalement 2. Moins,
  c’est plus facile.
- **% de cases-îles** : à peu près quelle part de la grille devient des îles. Certaines
  dispositions n’en accueillent pas autant, c’est donc un plafond.
- **Facteur d’expansion (%)** : en faisant grandir la carte, la probabilité qu’une
  nouvelle île soit posée le plus loin possible plutôt que quelque part de plus près. Les
  valeurs élevées donnent des grilles plus clairsemées et plus faciles ; les basses, des
  grilles encombrées.
`,oe=e({default:()=>r}),r=`# Cube

Un solide repose sur une grille, et une poignée de cases de la grille sont peintes en
bleu — exactement autant que le solide a de faces. Faire rouler le solide le bascule
par-dessus une arête de la face sur laquelle il se tient, de sorte que la face suivante
retombe sur la case voisine. À chaque atterrissage, la face du dessous et la case sur
laquelle elle se pose échangent leurs couleurs : pose une face neutre sur une case bleue
et le bleu part avec le solide ; pose une face bleue sur une case neutre et le bleu reste
sur place. Le casse-tête est fini quand toutes les faces sont bleues en même temps. La
barre d’état compte tes coups : essaie de finir en aussi peu que possible.

La version classique fait rouler un cube sur une grille carrée. Sur une grille
triangulaire, tu peux faire rouler un tétraèdre, un octaèdre ou un icosaèdre à la place.
Garde en tête que chaque face d’un tétraèdre qui roule ne peut jamais atteindre qu’un
quart des cases, et que les faces d’un octaèdre alternent entre les triangles pointant
vers le haut et vers le bas — les cases bleues sont toujours placées de façon que le
casse-tête puisse être terminé.

## Commandes

Il n’y a pas de bouton Résoudre pour ce casse-tête. Une fois toutes les faces bleues, tu
peux continuer à promener le solide sans rien déranger.

### Souris et tactile

- **Clique** n’importe où pour faire rouler le solide d’une case dans la direction du
  pointeur. Sur une grille carrée, cela veut dire en haut, en bas, à gauche ou à droite ;
  sur une grille triangulaire, le triangle courant a trois voisins au choix. Un clic
  atteint chaque voisin du solide, cela suffit donc à jouer sur n’importe quelle grille.

### Clavier (Keyboard)

- **Les flèches** font rouler le solide dans les quatre directions principales. Sur une
  grille triangulaire, un triangle n’a de voisin qu’au-dessus ou en dessous de lui, donc
  l’autre touche verticale ne fait rien.
- **Home**, **Page Up**, **End** et **Page Down** (ou les touches des coins du pavé
  numérique, 7, 9, 1 et 3) roulent en diagonale sur les grilles triangulaires, en
  choisissant l’arête la plus proche de ce côté.

## Paramètres

- **Type de solide** : tétraèdre, cube, octaèdre ou icosaèdre. Le cube utilise une grille
  carrée ; les autres une grille de triangles.
- **Largeur / haut** et **Hauteur / bas** : pour le cube, la taille de la grille carrée.
  Pour les grilles triangulaires, ce sont les longueurs des bords haut et bas d’une arène
  hexagonale (mettre l’un des deux à zéro donne un simple triangle). La grille doit
  laisser la place à toutes les cases bleues plus une case de départ vide.
`,i=e({default:()=>a}),a=`# Dominosa

Un jeu complet de dominos — un pour chaque paire de nombres de 0 jusqu’au maximum,
doubles compris — a été étalé de façon à remplir un rectangle. Puis les nombres ont été
recopiés et les dominos retirés. À toi de retrouver où ils étaient : découpe la grille en
paires de cases voisines pour que chaque domino du jeu serve exactement une fois.

Un domino posé là où sa paire de nombres apparaît déjà ailleurs est montré en rouge, tout
comme une case isolée qu’aucun domino ne peut plus atteindre.

## Commandes

Le casse-tête est fini quand chaque case est couverte et qu’aucun domino n’est rouge.
**Résoudre** pose tous les dominos de la solution, en effaçant ce que tu avais placé.

### Souris et tactile

- **Clique** sur la frontière entre deux nombres voisins (ou dans la moitié de case la
  plus proche de cette frontière) pour poser un domino par-dessus. Clique de nouveau sur
  la même frontière pour le retirer. Un domino posé sur une partie d’un autre le remplace.
- **Clic droit** sur une frontière pour y noter un trait, comme rappel que ces deux
  nombres ne forment **pas** un domino. Un nouveau clic droit efface le trait. On ne peut
  pas tracer de trait contre un domino, et poser un domino efface les traits qui le
  touchent.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur dans la grille, en s’arrêtant sur les centres des
  cases et sur les frontières entre elles. Sur une frontière, le curseur dessine le
  contour du domino qu’il poserait.
- **Enter** pose ou retire ce domino et **Space** y trace ou efface un trait.

## Paramètres

- **Nombre maximal sur les dominos** : les dominos vont de 0-0 à N-N, et la grille fait
  (N+2) cases de large sur (N+1) de haut, donc un maximum de 6 donne une grille 8×7.
- **Difficulté** : la quantité de raisonnement demandée. Les grilles **Très facile** n’ont jamais
  qu’un domino avec une seule place possible, ou une case qu’un seul domino peut couvrir.
  **Facile** ajoute deux arguments : toutes les façons de couvrir cette case utilisent le même
  domino, donc ce domino ne va nulle part ailleurs ; et chaque place possible pour ce domino en
  exclut telle autre. **Difficile** ajoute le comptage (un domino qui isolerait un nombre impair
  de cases est impossible ; un ensemble de cases portant le même nombre peut réclamer les dominos
  qu’elles se partagent) et les grilles **Extrême** demandent de suivre les conséquences d’un
  placement jusqu’à ce qu’elles se contredisent. Toutes celles-là ont exactement une solution.
  Les grilles **Ambigu** ne sont pas vérifiées du tout : elles peuvent avoir plusieurs solutions
  et demander de deviner — trouver n’importe quel pavage gagne.
`,o=e({default:()=>s}),s=`# Quinze

Le classique du taquin. La grille est remplie de tuiles numérotées et d’un espace vide.
Fais glisser les tuiles dans le trou jusqu’à ce que les nombres se lisent dans l’ordre, de
gauche à droite et de haut en bas, le trou dans le coin en bas à droite.

## Commandes

**Résoudre** saute directement à la disposition finie. Cela ne te montre pas comment y
arriver, mais c’est une remise à zéro pratique pour travailler des enchaînements.

### Souris et tactile

- **Clique** sur n’importe quelle tuile de la même ligne ou de la même colonne que le trou
  pour la faire glisser (avec tout ce qui la sépare du trou) jusqu’à sa place.

### Clavier (Keyboard)

- **Les flèches** font glisser une tuile dans le trou dans le sens de la flèche : la
  **flèche haut** fait monter dans le trou la tuile qui se trouve juste en dessous.

## Paramètres

- La **largeur** et la **hauteur** de la grille (par défaut, le classique 4×4).
`,c=e({default:()=>l}),l=`# Remplissage

Certaines cases de la grille portent déjà un chiffre ; les autres sont vides. Écris un
chiffre dans chaque case vide pour que chaque groupe connexe de chiffres identiques couvre
exactement autant de cases que le chiffre l’annonce : chaque 3 appartient à un groupe de
trois 3, chaque 1 reste seul, et ainsi de suite. Deux cases ne comptent comme reliées que
par leurs côtés, jamais par leurs coins. Il s’ensuit qu’aucune case ne porte de 0, que
deux 1 ne sont jamais côte à côte, et qu’aucun groupe ne dépasse neuf cases. Un chiffre
donné n’a pas à être le début de son groupe : plusieurs 4 donnés peuvent finir dans le
même groupe, et un groupe peut ne contenir aucun chiffre donné.

Des traits épais apparaissent entre les cases dont les chiffres diffèrent, et autour de
tout groupe déjà de la bonne taille (ou trop grand). Un chiffre devient rouge quand son
groupe a dépassé sa taille, ou quand il est emmuré sans la place d’atteindre sa taille.
C’est le casse-tête publié par Nikoli sous le nom de Fillomino.

## Commandes

Les chiffres donnés sont dessinés à l’encre et ne peuvent pas être changés ; les tiens
sont bleus. **Résoudre** inscrit la solution.

### Souris et tactile

- **Clique** sur une case vide pour la choisir, puis sers-toi des touches à l’écran pour
  y écrire un chiffre. **⌫** sur le pavé vide de nouveau la sélection.
- **Glisse** sur plusieurs cases pour toutes les choisir, afin qu’un seul chiffre remplisse
  d’un coup chaque case sélectionnée.
- **Un clic droit** ajoute une case à la sélection sans repartir de zéro ; un second
  clic droit sur une case sélectionnée l’en retire.
- **Remplir** (le bouton à côté d’Annuler) propage un chiffre : glisse depuis une case qui
  en contient un à travers les cases voisines, et elles reçoivent toutes ce chiffre quand
  tu relâches, sans passer par le pavé. Les clics et les glissés qui partent d’une case
  vide sélectionnent toujours. Appuie de nouveau dessus pour revenir à la sélection.

### Clavier (Keyboard)

- Avec une ou plusieurs cases choisies, **tape un chiffre** pour l’écrire dans toutes. Le
  chiffre \`0\`, ou **Backspace**, les vide de nouveau.
- **Les flèches** déplacent un curseur clavier, et un chiffre que tu tapes remplit la case
  en dessous.
- **Space** ou **Enter** fait entrer ou sortir de la sélection la case sous le curseur,
  pour remplir plusieurs cases d’une seule frappe.
- **F** est le bouton **Remplir**.

## Paramètres

- **Largeur** et **Hauteur** : la taille de la grille. Les groupes ne dépassent jamais le
  plus grand côté (ni 9), donc les petites grilles n’utilisent que de petits chiffres.
`,u=e({default:()=>d}),d=`# Bascule

Une grille de cases, certaines allumées, d’autres sombres. Ton but est de toutes les
allumer en même temps. Appuyer sur une case la fait basculer entre allumée et sombre, mais
retourne aussi certaines de ses voisines : le petit schéma dessiné sur chaque case montre
exactement lesquelles. Avec les figures **Croix** par défaut, chaque pression retourne la
case et ses quatre voisines orthogonales ; avec les figures **Aléatoire**, chaque case a
son propre motif irrégulier, et le casse-tête se joue donc différemment à chaque fois.

Comme appuyer deux fois sur une case s’annule, et que l’ordre des pressions n’a jamais
d’importance, une solution n’est qu’un ensemble de cases sur lesquelles appuyer une fois
chacune.

## Commandes

La barre d’état compte tes pressions. **Résoudre** allume tout le plateau et entoure en
rouge les cases sur lesquelles il a appuyé pour y arriver. Si tu continues d’appuyer
ensuite, les contours rouges suivent les cases qui demandent encore une pression pour
revenir à l’état terminé.

### Souris et tactile

- **Clique** sur une case pour l’actionner.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur dans la grille ; **Enter** ou **Space** appuie sur
  la case sous le curseur.

## Paramètres

- La **largeur** et la **hauteur** de la grille, de 2 à 10 cases de côté.
- **Type de figure** : _Croix_ retourne chaque case avec ses voisines orthogonales ;
  _Aléatoire_ donne à chaque case une forme poussée au hasard dans le bloc 3×3 qui
  l’entoure.
`,f=e({default:()=>p}),p=`# Inondation

La grille est un patchwork de cases coloriées au hasard. Tu contrôles la case du coin en
haut à gauche ainsi que toutes celles qui lui sont reliées par un chemin de la même
couleur. Chaque coup repeint tout ce territoire connexe dans une couleur de ton choix, et
les cases voisines de cette couleur rejoignent donc ton territoire elles aussi. Continue
jusqu’à ce que la grille entière soit d’une seule couleur.

Le piège, c’est la limite de coups. Avant de commencer, le jeu résout la grille lui-même
et te donne son propre nombre de coups plus quelques coups de rab ; épuise la limite avant
que la grille soit unie et la manche est perdue. Tu peux encore continuer à remplir pour
voir la grille terminée, mais cela ne compte plus comme une victoire.

## Commandes

La barre d’état montre combien de coups tu as utilisés sur la limite. **Résoudre** laisse
le solveur terminer la grille à ta place ; cela compte comme une résolution automatique
plutôt que comme une victoire.

### Souris et tactile

- **Clique** sur n’importe quelle case dont la couleur diffère de ton territoire pour
  repeindre le territoire dans cette couleur. Un clic sur une case déjà de la même couleur
  ne fait rien et ne coûte aucun coup.
- **Indice** joue pour toi la prochaine couleur du solveur, comme un coup ordinaire que tu
  peux annuler. Quelques indices te laissent quand même la victoire, et son crédit.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur dans la grille ; **Enter** ou **Space** repeint le
  territoire dans la couleur sous le curseur.

## Paramètres

- La **largeur** et la **hauteur** de la grille, jusqu’à 32 cases de côté.
- **Couleurs** : combien de couleurs la grille utilise, de 3 à 10. Moins de couleurs, moins
  de choix, et une partie plus facile.
- **Coups supplémentaires autorisés** : le nombre de coups de rab ajoutés à la longueur de
  la solution du solveur pour former la limite. Avec 0, il te faut être au moins aussi
  efficace que lui ; il est bon mais pas parfait, il est donc possible de battre son
  compte.
`,m=e({default:()=>h}),h=`# Galaxies

La grille est parsemée de points, qui peuvent se trouver au milieu d’une case, sur un
trait entre deux cases ou sur un coin où quatre se rejoignent. Trace des murs le long des
traits de la grille pour la découper en régions, de sorte que chaque région contienne
exactement un point, et que ce point soit son centre de symétrie : tourne la région de
180° autour de son point et elle doit retomber exactement sur elle-même. Chaque case doit
finir dans une région, aucune région ne peut donc rester sans point.

Les grilles sont engendrées au hasard avec une solution unique. C’est le « Tentai Show »
de Nikoli, aussi connu sous le nom de Spiral Galaxies.

## Commandes

Une région refermée et correcte — un point, à son centre de symétrie, aucun mur égaré à
l’intérieur — est ombrée. Un point devient rouge quand un mur le traverse, ou quand il est
le seul point d’une région fermée qui n’est pas symétrique autour de lui ; une région
fermée ne contenant aucun point est hachurée. Le casse-tête est terminé quand chaque case
est ombrée. **Résoudre** trace la solution complète.

### Souris et tactile

- **Clique** sur un trait de la grille pour y tracer un mur, ou clique sur un mur pour
  l’enlever.
- **Glisse depuis un point** jusque dans une case pour y laisser une petite flèche pointant vers
  le point, comme rappel que la case appartient à la galaxie de ce point.
- **Glisse en clic droit** une flèche existante pour la déplacer. Lâche-la de nouveau sur
  son point, ou fais-la glisser hors de la grille, pour la jeter ; lâchée sur une case qui a
  déjà une flèche, elle prend la place de celle-ci.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur sur les cases, les traits et les coins.
- **Enter** sur un trait y trace ou enlève son mur ; **Enter** sur un point prend une
  flèche, qui suit le curseur jusqu’à ce que tu appuies de nouveau sur **Enter** pour la
  lâcher.

## Paramètres

- La **largeur** et la **hauteur** de la grille, au moins 3 chacune. Les préréglages vont
  de 7×7 à 15×15.
- **Difficulté** — les grilles _Moyen_ se résolvent pas à pas à partir de ce que la règle de
  symétrie impose ; les grilles _Extrême_ peuvent demander d’essayer une hypothèse et de voir où
  elle mène.
`,g=e({default:()=>_}),_=`# Devinette

L’ordinateur a caché une rangée de pions colorés derrière le cache en haut du plateau. À
toi de la reproduire à l’identique, en te servant seulement des marques que rapporte
chaque essai : un pion **noir** pour chaque pion de la bonne couleur à la bonne place, et
un pion **creux** pour chaque pion supplémentaire dont la couleur apparaît ailleurs dans
la rangée cachée. Les marques te disent _combien_ de pions étaient justes, pas _lesquels_.
Trouve la rangée avant d’épuiser tes essais et le cache se lève ; épuise-les et il se lève
quand même, pour te montrer ce que tu as manqué.

C’est le jeu vendu par Hasbro sous le nom de _Mastermind_ : six couleurs, quatre pions et
dix essais. Tous les réglages se changent.

## Commandes

**Résoudre** lève le cache et montre la réponse ; cela met fin à la partie, exactement
comme si tu avais épuisé tes essais.

### Souris et tactile

- **Clique** sur une couleur de la palette de gauche pour la choisir (l’anneau montre
  laquelle), puis **clique sur un trou** de la rangée en cours pour y poser un pion de
  cette couleur. Un clic sur un pion d’un essai précédent en choisit aussi la couleur.
- **Glisse** un pion depuis la palette, depuis un essai précédent ou depuis la
  rangée en cours jusque dans un trou. Faire glisser un pion hors de la rangée en cours et
  le lâcher ailleurs le retire.
- **Clic droit** sur un trou pour le vider.
- Quand la rangée est complète, la petite zone de notation à sa droite s’allume :
  **clique dessus** pour soumettre l’essai.
- **Clic milieu** sur un trou pour _retenir_ ce pion : un pion retenu passe dans l’essai
  suivant après la notation, ce qui évite de reconstruire les pions dont tu es déjà sûr.
  Recommence pour le relâcher.
- **Retenir** (le bouton à côté d’Annuler) fait la même chose avec un simple clic : tant
  qu’il est activé, cliquer sur un trou de la rangée en cours retient ou relâche son pion
  au lieu d’y poser une couleur. Clique sur la palette pour changer de couleur comme
  d’habitude ; appuie de nouveau sur **Retenir** pour revenir à la pose des pions.
- **Lettres** dans le menu pause écrit une lettre sur chaque pion, au cas où certaines
  couleurs se ressembleraient pour toi, et les retire de nouveau.

### Clavier (Keyboard)

- **Les flèches** : haut et bas choisissent une couleur de la palette, gauche et droite
  déplacent un curseur le long de la rangée en cours et, une fois la rangée complète,
  jusqu’à la zone de notation.
- **Enter** ou **Space** pose la couleur choisie dans le trou sous le curseur, ou soumet
  l’essai quand le curseur est sur la zone de notation.
- **Backspace** ou \`D\` vide le trou sous le curseur.
- \`H\` retient ou relâche le pion sous le curseur.
- \`K\` est le bouton **Retenir** et \`L\` le bouton **Lettres**.

## Paramètres

- **Couleurs** : parmi combien de couleurs différentes la rangée cachée est tirée, de 2
  à 10. Plus il y a de couleurs, plus la rangée est difficile à cerner.
- **Pions par essai** : la longueur de la rangée cachée.
- **Essais** : combien de tentatives tu as.
- **Autoriser les trous vides** : te permet de laisser des trous vides dans un essai. Un trou
  vide ne peut jamais correspondre, ce qui facilite le sondage des couleurs. La rangée
  cachée, elle, n’a jamais de vide.
- **Autoriser les doublons** : laisse la rangée cachée (et tes essais) utiliser une couleur
  plus d’une fois. Le désactiver réduit considérablement le nombre de rangées possibles.
`,v=e({default:()=>y}),y=`# Inertie

Tu es une boule sur une grille semée d’obstacles, et tu veux toutes les gemmes du plateau.
Le piège est dans le nom : une fois lancée, la boule ne s’arrête que lorsque quelque
chose l’arrête. Elle file à travers les gemmes (qu’elle ramasse au passage) comme à travers les
cases vides, et elle ne s’immobilise que lorsque la case suivante est un mur ou qu’elle se
pose sur un butoir. Les déplacements en diagonale se faufilent entre deux murs qui ne se
touchent que par un coin. Rouler sur une mine est fatal, même si le même coup a ramassé la
toute dernière gemme.

Chaque casse-tête est fabriqué de façon que toutes ses gemmes puissent être ramassées
depuis la case de départ, mais rien ne t’empêche de rouler dans un coin du plateau d’où
une gemme n’est plus accessible. Mourir ou se coincer n’est pénalisé que par un compteur
de morts sur la barre d’état : annule et essaie autrement.

## Commandes

**Annuler** après avoir heurté une mine pour repartir d’avant le coup fatal. **Résoudre**
calcule depuis ta position un trajet qui ramasse toutes les gemmes restantes, puis y fait
rouler la boule pour toi ; Annuler reprend tout le trajet d’un coup.

### Souris et tactile

- **Clique** sur une case et la boule part dans la direction de cette case par rapport à
  elle, arrondie à la plus proche des huit directions de la boussole — diagonales
  comprises. Un clic dans la marge en dehors de la grille marche aussi, ce qui est
  pratique quand la boule est sur un bord.

### Clavier (Keyboard)

- **Les flèches** font rouler la boule en haut, en bas, à gauche ou à droite.
- **Home**, **Page Up**, **End** et **Page Down** la font rouler en diagonale (haut-gauche,
  haut-droite, bas-gauche, bas-droite). Le pavé numérique fonctionne comme il en a l’air :
  8 pour le haut, 3 pour le bas-droite, et ainsi de suite ; la rangée des chiffres fait de
  même.

## Paramètres

- La **largeur** et la **hauteur** de la grille. Environ un cinquième des cases sont des
  murs, un cinquième des butoirs, un cinquième des mines et un cinquième des gemmes.
`,b=e({default:()=>x}),x=`# Keen

Remplis la grille avec les chiffres de 1 jusqu’à sa taille, de sorte que chaque ligne et
chaque colonne contienne chaque chiffre exactement une fois. La grille est aussi découpée
en « cages » au trait épais, portant chacune un petit indice dans sa case en haut à
gauche : un total et un signe arithmétique. Les chiffres de la cage doivent donner ce
total avec cette opération :

- \`7+\` veut dire que les chiffres de la cage font 7 en les additionnant.
- \`12×\` veut dire qu’ils font 12 en les multipliant.
- \`2−\` est toujours sur une cage de deux cases et veut dire qu’un chiffre vaut 2 de plus
  que l’autre (dans un sens ou dans l’autre).
- \`3÷\` est de même sur deux cases et veut dire qu’un chiffre vaut 3 fois l’autre.

Contrairement au mode Killer de Solo, une cage _peut_ porter deux fois le même chiffre,
tant que les deux exemplaires ne sont pas sur la même ligne ni la même colonne. Il n’y a
aucun chiffre donné ; les indices sont tout ce que tu as, et chaque casse-tête a exactement
une solution. C’est le casse-tête publié sous le nom de KenKen.

## Commandes

Un chiffre qui apparaît deux fois sur sa ligne ou sa colonne devient rouge, tout comme
l’indice d’une cage entièrement remplie qui ne fait pas son total. **Résoudre** inscrit la
solution.

### Souris et tactile

- **Clique** sur une case pour la choisir, puis sers-toi du pavé à l’écran pour y écrire un
  chiffre. Un second clic sur la case choisie la désélectionne.
- **⌫** sur le pavé vide de nouveau la case choisie, et **✎** active les **notes au
  crayon** : ce que tu choisis ensuite s’inscrit comme une petite annotation, et retaper le
  même chiffre efface cette annotation. Les notes au crayon ne sont là que pour
  t’aider à réfléchir ; inscrire un chiffre les efface.
- **Clic droit** sur une case vide pour la choisir directement en mode notes au crayon.
- **Notes** dans le menu pause remplit chaque case vide d’un jeu complet de notes au
  crayon.
- **Surligner** (la loupe à côté d’Annuler) fait ressortir chaque case qui contient le
  même chiffre que la dernière case sur laquelle tu as cliqué, et affiche ce chiffre en
  gras parmi les notes au crayon. Appuie de nouveau dessus pour le désactiver.

### Clavier (Keyboard)

- **Tape un chiffre** pour remplir la case choisie, ou pour l’y noter quand la case a été
  choisie en mode notes au crayon.
- **Space** ou **Backspace** vide la case choisie (son chiffre ou toutes ses notes au
  crayon).
- **Les flèches** déplacent un curseur clavier, et les chiffres que tu tapes vont dans la
  case en dessous.
- **Enter** fait passer le curseur de la saisie normale à la saisie de notes au crayon.
- **M** est le bouton **Notes** et **L** le bouton **Surligner**.

## Paramètres

- **Taille de la grille** : de 3 à 9. Des chiffres au-delà de 9 seraient malcommodes, 9 est
  donc la limite.
- **Difficulté** : le type de raisonnement le plus dur que le casse-tête demande. _Facile_ ne
  demande jamais que de trouver quels chiffres peuvent apparaître dans une cage ; _Moyen_ demande
  de suivre quelle case d’une cage chaque chiffre pourrait occuper ; _Difficile_ ajoute le
  raisonnement d’une cage à l’autre (les chiffres qu’une cage doit placer sur une ligne ne
  peuvent pas être ailleurs dessus) et les ensembles de cases qui s’approprient un ensemble de
  chiffres ; _Expert_ ajoute les chaînes de forçage ; et les grilles _Extrême_ ne se terminent
  pas sans deviner et revenir en arrière. Les grilles plus dures sont plus longues à engendrer,
  et les grilles 3×3 ne dépassent jamais Moyen.
- **Multiplication seule** : chaque indice est un produit, ce qui supprime les dominos
  faciles et donne un casse-tête assez différent.
`,S=e({default:()=>C}),C=`# Éclairage

Une grille de cases blanches et noires. Pose des ampoules sur les cases blanches pour que
chaque case blanche soit éclairée. Une ampoule éclaire sa propre case et rayonne le long
de sa ligne et de sa colonne jusqu’à ce qu’une case noire ou le bord s’y oppose. Trois
choses doivent être vraies à la fin :

- chaque case blanche est éclairée ;
- aucune ampoule n’est éclairée par une autre, autrement dit deux ampoules ne se voient
  jamais le long d’une ligne ou d’une colonne ;
- une case noire portant un nombre a exactement ce nombre d’ampoules dans les cases
  directement au-dessus, en dessous, à gauche et à droite d’elle. Les cases noires sans
  nombre peuvent avoir n’importe quel nombre d’ampoules à côté d’elles.

Les cases éclairées sont baignées de jaune. Les ampoules qui s’éclairent l’une l’autre
deviennent rouges, tout comme un nombre qui ne peut plus être satisfait : il a déjà trop
d’ampoules à côté de lui, ou il n’y a plus la place d’en mettre assez.

## Commandes

Le casse-tête est fini quand toute la grille brille et que rien n’est en rouge.
**Indice** pose une seule ampoule — ou retire une ampoule qui n’est pas dans la réponse —
et te laisse le reste ; le casse-tête continue, et avec quelques indices, la victoire et
son crédit restent à toi. **Résoudre** pose les ampoules d’une solution complète, en
laissant en place les croix que tu as tracées.

### Souris et tactile

- **Clique** sur une case blanche pour y poser une ampoule, et de nouveau pour l’enlever.
- **Clic droit** sur une case blanche pour y noter une croix voulant dire « aucune ampoule
  ne peut aller ici » ; un nouveau clic droit l’efface. Une case barrée n’accepte pas
  d’ampoule tant que la croix n’est pas enlevée, et une case avec une ampoule ne peut pas
  être barrée.
- **Croix** (le bouton croix à côté d’Annuler) fait qu’un simple clic note ou efface une
  croix au lieu d’une ampoule, pratique quand tu écartes beaucoup de cases d’un coup.
  Appuie de nouveau dessus pour revenir aux ampoules.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur dans la grille.
- **Enter** pose ou enlève une ampoule sous le curseur, et **Space** (ou **I**) y met ou
  enlève une croix.
- **X** est le bouton **Croix**.

## Paramètres

- La **largeur** et la **hauteur** de la grille.
- **% de cases noires** : à peu près quelle part de la grille est noire. C’est une
  indication, pas une promesse : si aucune grille n’est faisable à cette densité, le
  générateur utilise quelques cases noires de plus.
- **Symétrie** : le motif que suivent les cases noires — Aucune, Miroir double ou Rotation
  double pour deux moitiés, Miroir quadruple ou Rotation quadruple pour les quatre. La
  Rotation quadruple demande une grille carrée.
- **Difficulté** : les grilles _Facile_ tombent avec un raisonnement case par case sur celles qui
  doivent ou ne peuvent pas porter une ampoule. Les grilles _Moyen_ demandent de peser des
  ensembles de cases les uns contre les autres (« l’une de ces trois est une ampoule, ce qui
  exclut celle-ci »). Les grilles _Difficile_ peuvent demander d’essayer une ampoule quelque part
  et d’en suivre les conséquences jusqu’à ce que quelque chose cloche. Chaque casse-tête a
  exactement une solution.
`,w=e({default:()=>T}),T=`# Boucles

Une grille de points, dont certains espaces intermédiaires portent un nombre. Trace une
seule boucle fermée le long des traits pâles entre les points, de sorte que :

- chaque espace numéroté ait exactement ce nombre de côtés sur la boucle ;
- la boucle ne se croise ni ne se touche jamais — chaque point a soit deux traits, soit
  aucun — et il n’y ait qu’une boucle, sans bout libre ni morceau séparé.

La version classique utilise des carrés, mais le même casse-tête fonctionne sur des
triangles, des hexagones et une douzaine de pavages plus étranges, où les nombres peuvent
dépasser largement 4.

Les traits qui forment une mauvaise boucle, ou qui se rejoignent à trois sur un point,
deviennent rouges ; un nombre avec trop de traits autour de lui, ou avec trop peu de côtés
encore possibles, devient rouge lui aussi. Un nombre passe au gris dès qu’il a exactement
le bon nombre de traits.

## Commandes

**Résoudre** trace toute la boucle. Le casse-tête est fini dès que la boucle est complète
et que chaque nombre est satisfait ; barrer les arêtes inutilisées est facultatif.

### Souris et tactile

- **Clique** sur un trait pâle pour y tracer une ligne ; clique de nouveau sur la ligne
  pour l’enlever.
- **Clic droit** sur une arête pour la barrer, en la marquant comme n’appartenant
  certainement pas à la boucle ; un nouveau clic droit efface la marque. Un clic comme un
  clic droit efface aussi une marque faite par l’autre.
- **Croix** (le bouton croix à côté d’Annuler) fait qu’un simple clic barre une arête, ou
  l’efface, au lieu de tracer une ligne. Appuie de nouveau dessus pour revenir au tracé des
  lignes.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur d’arête en arête ; **Enter** trace ou enlève une
  ligne sur l’arête sous le curseur et **Space** la barre ou l’efface.
- **X** est le bouton **Croix**.

## Paramètres

- La **largeur** et la **hauteur** de la grille, comptées en cellules du pavage. Pour la
  grille carrée, c’est simplement le nombre de carrés en largeur et en hauteur ; les autres
  pavages comptent leurs motifs répétés, et le nombre réel de faces varie donc.
- **Type de grille** : _Carrés_, _Triangulaire_ et _Nid d’abeille_ sont les pavages
  réguliers. _Carré adouci_, _Cairo_, _Grand hexagonal_, _Octogonal_, _Cerfs-volants_,
  _Floral_, _Dodécagonal_ et _Grand dodécagonal_ mêlent les formes, et les deux pavages de
  Penrose — _Penrose (cerf-volant/fléchette)_ et _Penrose (losanges)_ — ne se répètent
  jamais.
- **Difficulté** : les grilles _Facile_ ne demandent que les règles elles-mêmes — compter les
  traits autour d’un nombre, se rappeler qu’un point a deux traits ou aucun, et ne pas refermer
  la boucle trop tôt. _Moyen_ ajoute le raisonnement sur les paires d’arêtes qui se rejoignent en
  un point (au plus une, ou au moins une, des deux est un trait). _Difficile_ laisse ces faits
  s’enchaîner de point en point, comme le long d’une diagonale de 2. _Expert_ suit en plus les
  arêtes que l’on sait égales ou opposées les unes aux autres. Deviner n’est jamais nécessaire ;
  chaque casse-tête a exactement une solution.
`,E=e({default:()=>D}),D=`# Aimants

Un rectangle a été pavé de dominos, montrés seulement par leurs contours. Chaque domino
est soit un aimant — une moitié pôle \`+\`, l’autre pôle \`−\` — soit un domino neutre sans
aucun pôle. Les nombres du pourtour disent combien de pôles \`+\` (au-dessus des colonnes et
à gauche des lignes) et combien de pôles \`−\` (sous les colonnes et à droite des lignes)
chaque ligne contient ; un nombre absent veut dire aucun indice pour cette ligne. Remplis
chaque domino de façon que tous les comptes soient respectés et que deux pôles identiques
ne se retrouvent jamais côte à côte : \`+\` ne doit jamais toucher \`+\` et \`−\` ne doit jamais
toucher \`−\` par-dessus une frontière de dominos. Les dominos neutres sont inertes et
peuvent voisiner avec n’importe quoi.

Les pôles identiques qui se touchent sont montrés en rouge. Un compte devient rouge quand
il ne peut plus être respecté — trop de pôles déjà, ou trop peu sans plus de place pour en
ajouter — et gris dès qu’il est exactement satisfait. Le casse-tête est fini quand chaque
domino est rempli, chaque compte respecté et que rien n’est rouge.

## Commandes

### Souris et tactile

- **Clique** sur une moitié vide de domino pour en faire le pôle \`+\` (l’autre moitié
  devient \`−\`). Clique de nouveau sur la même moitié pour retourner l’aimant, et une
  troisième fois pour vider le domino. Cliquer sur un domino neutre ne fait rien.
- **Clic droit** sur un domino vide pour le marquer neutre. Un nouveau clic droit remplace
  le neutre par des points d’interrogation, une note disant que le domino est
  certainement un aimant ; un troisième clic droit le vide. Un clic droit sur un aimant ne
  fait rien.
- **Neutre** (le domino ombré à côté d’Annuler) fait qu’un simple clic agit comme un
  clic droit : il marque un domino neutre, puis avec des points d’interrogation, puis le
  vide de nouveau. Appuie de nouveau dessus pour revenir à la pose des aimants.
- **Résoudre** inscrit toute la solution.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur dans la grille.
- **Enter** fait passer la moitié sous le curseur par \`+\`, \`−\` et vide, exactement comme un
  clic gauche.
- **Space** fait passer le domino sous le curseur par neutre, point d’interrogation et
  vide, exactement comme un clic droit.
- **B** est le bouton **Neutre**.

## Paramètres

- La **largeur** et la **hauteur** de la grille. Quand l’aire est impaire, une case reste
  en trop et est dessinée hachurée ; elle n’appartient à aucun domino et compte comme
  neutre.
- **Difficulté** : les grilles _Facile_ ne demandent jamais de regarder qu’une ligne ou un domino
  à la fois — un compte déjà respecté, un compte qui a besoin de tous les candidats restants, ou
  un domino dont aucune moitié ne peut prendre un pôle donné. Les grilles _Difficile_ demandent
  aussi de raisonner sur des dominos entiers posés le long d’une ligne : un domino qui doit être
  un aimant fournit un pôle de chaque sorte quel que soit son sens, une ligne à laquelle il ne
  reste qu’un neutre ne peut pas accueillir un domino neutre posé en longueur, et ainsi de suite.
  Chaque casse-tête a exactement une solution.
- **Élaguer les indices** : retire tous les comptes qui ne servent pas à résoudre le
  casse-tête à la difficulté choisie, ce qui rend bien plus difficile de voir par où
  commencer.
`,O=e({default:()=>k}),k=`# Carte

Une carte est découpée en régions. Colorie chaque région avec l’une de quatre couleurs, de
sorte que deux régions partageant un bout de frontière n’aient jamais la même couleur. Des
régions qui ne se touchent que par un coin peuvent se ressembler. Quelques régions sont
coloriées d’avance, et elles sont choisies de façon qu’il n’y ait qu’une seule manière de
terminer la carte.

Deux régions voisines de la même couleur sont signalées par un \`!\` rouge sur la frontière
entre elles.

## Commandes

**Résoudre** colorie la solution complète. La carte clignote quand chaque région est
coloriée et que rien n’est rouge.

### Souris et tactile

- **Glisse** une couleur : appuie sur une région (ou sur l’une des pastilles sous la carte)
  et relâche sur une autre région pour lui donner cette couleur. Glisser depuis une région
  blanche, depuis l’espace vide autour de la carte ou depuis la pastille gomme efface la
  région sur laquelle tu lâches.
- **Clique sur une pastille** pour choisir une couleur, puis **clique** sur les régions
  pour les peindre ; clique de nouveau sur la pastille choisie pour la désélectionner.
- **Glisse en clic droit** une couleur sur une région blanche pour y noter un petit point
  de cette couleur, indiquant que la région _pourrait_ être de cette couleur. Une région
  peut porter plusieurs points au crayon ; glisser de nouveau la même couleur retire son
  point. Avec une pastille choisie, un simple **clic droit** sur une région blanche met ou
  enlève son point.
- **Numéros** (dans le menu pause) affiche un numéro dans chaque région, pratique pour
  parler d’une carte avec quelqu’un d’autre, et les masque de nouveau.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur sur la carte ; la région où il se trouve est
  entourée. Les touches **1**–**4** colorient cette région, **Space** l’efface, et
  **Enter** prend sa couleur pour que tu puisses l’emporter avec les flèches et la lâcher
  avec **Enter** (ou en point au crayon avec **Space**). Appuyer deux fois sur **Enter**
  sans bouger efface la région.
- **L** est le bouton **Numéros**.

## Paramètres

- La **largeur** et la **hauteur**, en cases, de la grille sur laquelle la carte est
  dessinée.
- **Régions** : en combien de régions la carte est découpée.
- **Difficulté** : les grilles _Facile_ ont toujours une région à laquelle il ne reste qu’une
  seule couleur. _Moyen_ ajoute le raisonnement sur les paires de régions voisines qui doivent se
  partager les deux mêmes couleurs. _Difficile_ demande des chaînes de telles déductions à
  travers la carte. Toutes se résolvent sans deviner. _Extrême_ promet seulement que la solution
  est unique ; il te faudra peut-être essayer une couleur et la suivre jusqu’à ce que quelque
  chose cloche.
`,A=e({default:()=>j}),j=`# Mines

Une grille de cases couvertes cache un certain nombre de mines. Découvre chaque case qui ne
contient _pas_ de mine. Chaque case que tu ouvres montre combien de ses huit voisines sont
des mines ; ouvre une mine et la partie est perdue.

La particularité de cette version, c’est que tu n’as jamais à deviner. Rien n’est décidé
avant ton premier clic : les mines sont alors disposées de façon que la case sur laquelle
tu as cliqué soit vide et que toute la grille puisse se déduire de là par pure logique. Si
tu te sens bloqué, il y a toujours quelque part une case sûre que les nombres prouvent
déjà.

La barre d’état montre combien de drapeaux tu as plantés par rapport au nombre de mines, et
l’horloge démarre à ton premier clic. Heurter une mine révèle toutes les autres et barre
les drapeaux qui étaient faux ; tu peux annuler ce coup fatal et continuer, mais la mort
reste inscrite dans la barre d’état.

## Commandes

### Souris et tactile

- **Clique** sur une case couverte pour l’ouvrir. Ouvrir une case vide (aucune mine
  voisine) ouvre aussi ses voisines, et ainsi de suite vers l’extérieur.
- **Clic droit** sur une case couverte pour planter un drapeau sur une mine soupçonnée, et
  de nouveau pour le retirer. Les cases avec un drapeau ne peuvent pas s’ouvrir par
  accident.
- **Clique sur un nombre** qui a déjà le bon nombre de drapeaux autour de lui pour ouvrir
  d’un coup toutes ses autres voisines couvertes. Un **clic milieu** sur ce nombre fait la
  même chose.
- **Indice** ouvre une case sûre — ou retire un drapeau qui ne cache aucune mine — et te
  laisse le reste de la grille. Avec quelques indices, la victoire et son crédit restent à
  toi.
- **Résoudre** révèle toute la disposition et met un drapeau sur chaque mine. Cela ne
  compte pas comme une victoire de ta part.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur dans la grille.
- **Enter** agit comme un clic gauche sur la case sous le curseur : il ouvre une case
  couverte, ou dégage autour d’un nombre dont tous les drapeaux sont en place.
- **Space** plante ou retire un drapeau, comme le fait un clic droit.

## Paramètres

- La **largeur** et la **hauteur** de la grille.
- **Mines** : combien de mines cacher. Tu peux donner un pourcentage comme \`20%\` au lieu
  d’un compte. Les densités très élevées rendent longues à trouver les grilles solubles.
- **Garantir la solubilité** : quand c’est actif (par défaut), la disposition est garantie
  soluble depuis ton premier clic sans deviner. Désactive-le pour des grilles aléatoires
  ordinaires, qui peuvent te laisser à pile ou face à la fin.
`,M=e({default:()=>N}),N=`# Réseau

Un réseau de câbles a été posé sur une grille de tuiles carrées, puis chaque tuile a été
tournée au hasard. Remets les tuiles en place pour que toutes soient réunies en un seul
réseau : chaque bout de câble doit rencontrer un câble sur la tuile voisine, et aucun
câble ne doit rester pointé vers un mur. Le réseau terminé est un arbre, il n’a donc
aucune boucle fermée.

Les tuiles déjà reliées à la tuile source, au milieu de la grille, sont dessinées en bleu
pour te guider ; les autres restent grises. Un câble qui fait partie d’une boucle est
dessiné en rouge. Les traits noirs épais entre les tuiles sont des barrières : aucun câble
ne peut les franchir, ce qui te renseigne sur la façon dont les tuiles de part et d’autre
doivent être placées. La barre d’état montre combien de tuiles sont actuellement
alimentées.

## Commandes

### Souris et tactile

- **Clique** sur une tuile pour la tourner dans le sens antihoraire, **clic droit** pour
  la tourner dans le sens horaire.
- **Clic milieu** sur une tuile pour la **verrouiller** dès que tu en es sûr. Une tuile
  verrouillée est ombrée et ne tourne plus tant qu’un nouveau clic milieu ne l’a pas
  déverrouillée. Un clic droit tourne la tuile au lieu de la verrouiller, un clic milieu
  est donc la bonne façon de faire.
- **Verrou** (le bouton cadenas à côté d’Annuler) fait qu’un simple clic verrouille ou
  déverrouille une tuile au lieu de la tourner, ce qui est plus facile qu’un clic milieu
  sur un pavé tactile. Un clic droit tourne toujours la tuile dans le sens horaire. Appuie
  de nouveau dessus pour revenir à la rotation.
- **Mélanger** relance chaque tuile non verrouillée dans une orientation aléatoire, pour
  changer d’air quand un casse-tête s’enlise.
- Sur une grille cyclique, les quatre **boutons fléchés** font défiler la vue, ce qui
  permet de rapprocher des tuiles situées sur des bords opposés.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur dans la grille.
- **Enter** ou **A** tourne la tuile sous le curseur dans le sens antihoraire, **D** la
  tourne dans le sens horaire et **F** la retourne d’un demi-tour.
- **Space**, **S** ou **L** verrouille ou déverrouille la tuile sous le curseur. À la
  souris, **Maj+clic** verrouille aussi une tuile, exactement comme un clic milieu.
- **K** est le bouton **Verrou** et **J** le bouton **Mélanger**.
- Sur une grille cyclique, **Maj + les flèches** font défiler la vue (comme les quatre
  boutons fléchés) pour voir côte à côte des tuiles de bords opposés. **Ctrl + les
  flèches** déplacent la tuile source d’où part la mise en évidence bleue.

## Paramètres

- La **largeur** et la **hauteur** de la grille, en tuiles.
- **Bords cycliques** : les câbles peuvent sortir par un bord de la grille et continuer
  depuis le bord opposé.
- **Probabilité de barrière** : un nombre de 0 à 1 donnant la part des arêtes sans câble
  qui reçoivent une barrière. Les barrières ne changent jamais la disposition des câbles :
  la même graine aléatoire donne toujours la même grille, donc augmenter la probabilité ne
  fait qu’ajouter des indices.
- **Garantir une solution unique** : normalement le casse-tête est agencé pour qu’une seule
  disposition des tuiles fonctionne. Désactive-le pour une génération plus rapide et
  quelques zones ambiguës de temps en temps.
`,P=e({default:()=>F}),F=`# Réseau coulissant

Chaque tuile porte un morceau de câblage : une ligne droite, un coude, un T ou un bout
libre marqué d’un point. Bien assemblés, les morceaux forment un seul réseau qui atteint
chaque tuile depuis la source d’alimentation posée sur la tuile ombrée du centre, sans
boucle et sans bras pointant dans le vide. La grille a été brouillée en faisant coulisser
des lignes et des colonnes entières, et c’est la seule façon de la remettre d’aplomb :
aucune tuile ne peut être tournée, seulement déplacée.

Les tuiles actuellement alimentées sont dessinées en bleu ; les autres restent grises. Les
murs noirs épais entre les tuiles sont des barrières. Rien ne peut se raccorder à travers
une barrière, elles t’indiquent donc où le réseau terminé n’a certainement aucune liaison.

## Commandes

### Souris et tactile

- **Clique** sur une flèche à côté d’une ligne ou d’une colonne pour faire coulisser toute
  cette ligne d’un cran dans le sens de la flèche. La tuile poussée hors du bout revient
  par l’autre bout de la même ligne. **Clic droit** sur une flèche pour faire coulisser la
  ligne dans l’autre sens.
- La ligne et la colonne centrales n’ont pas de flèches : la source d’alimentation ne bouge
  jamais.
- **Résoudre** saute directement au réseau terminé, pour que tu puisses le comparer à ta
  propre tentative.

### Clavier (Keyboard)

- **Les flèches** promènent une mise en évidence autour de l’anneau de flèches.
- **Enter** fait coulisser la ligne mise en évidence dans le sens de sa flèche et
  **Space** la fait coulisser en sens inverse.

## Paramètres

- La **largeur** et la **hauteur** de la grille.
- **Bords cycliques** : quand c’est actif, le bord droit continue à gauche et le bas en
  haut, le câblage (et les barrières) peuvent donc franchir le bord de la grille. Le cadre
  en pointillés signale une grille cyclique ; un cadre épais et plein est un mur tout
  autour.
- **Probabilité de barrière** : combien des arêtes de tuiles inutilisées reçoivent une
  barrière, de 0 (aucune) à 1 (chaque arête que le réseau terminé n’utilise pas). Plus il y
  a de barrières, plus le casse-tête est facile. Les barrières sont choisies indépendamment
  du reste de la grille, donc la même graine aléatoire avec une probabilité de barrière
  plus élevée donne le même casse-tête avec plus d’indices.
- **Nombre de coups de mélange** : laisse 0 pour un brouillage complet, ou donne un nombre
  pour brouiller avec exactement autant de glissements. Le but est alors de les retrouver
  et de les inverser ; la barre d’état affiche l’objectif.
`,I=e({default:()=>L}),L=`# Motif

Chaque case de la grille est secrètement noire ou blanche. Les nombres à côté de chaque
ligne et au-dessus de chaque colonne te donnent les longueurs des séries de cases noires de
cette ligne, dans l’ordre, avec au moins une case blanche entre deux séries consécutives.
Colorie les cases noires pour que chaque ligne et chaque colonne s’accorde avec ses
nombres. Ce genre de casse-tête s’appelle en général nonogramme ou picross.

Les images sont engendrées au hasard, il n’y a donc pas de dessin à deviner : tout doit se
déduire des nombres. Chaque grille est vérifiée d’avance pour s’assurer qu’elle se résout
en raisonnant sur une ligne ou une colonne à la fois, tu n’as donc jamais à tâtonner.

Les nombres d’une ligne passent au gris dès que ses séries noires leur correspondent, et
au rouge si les séries que tu as terminées ne peuvent plus coller aux nombres. Le
casse-tête est fini quand chaque ligne et chaque colonne correspond à ses nombres ; les
points ne sont là que pour t’aider à te souvenir.

## Commandes

### Souris et tactile

- **Clique** sur une case pour la peindre en noir ; clique de nouveau sur une case noire
  pour l’effacer.
- **Clic droit** pour marquer une case d’un point, voulant dire qu’on la sait blanche ;
  clic droit sur une case pointée pour l’effacer.
- **Glisse** pour peindre d’un coup une ligne droite de cases noires, et
  **glisse en clic droit** pour poser une ligne de points. Seules les cases qui étaient
  dans le même état que celle où tu as commencé sont touchées, faire glisser une rangée de
  points par-dessus tes cases noires les laisse donc tranquilles.
- **Clic milieu** sur une case pour la remettre à l’état inconnu. Avec une souris, glisser en
  maintenant la molette enfoncée vide tout un rectangle, quoi qu’il contienne.
- **Gomme** (le bouton gomme à côté d’Annuler) donne le même effet à un clic simple :
  clique sur une case pour l’effacer, ou glisse pour vider tout un rectangle. Appuie de
  nouveau dessus pour revenir à la peinture en noir.
- **Indice** remplit une case, toujours une qu’une seule ligne ou colonne suffit à
  trancher — ou corrige une case qui contredit la réponse. Le casse-tête continue, et avec
  quelques indices, la victoire et son crédit restent à toi.
- **Résoudre** dessine toute l’image pour toi.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur.
- **Enter** peint ou efface le noir sous le curseur et **Space** pose ou retire un point.
- Maintiens **Ctrl** en déplaçant le curseur pour peindre en noir au passage, **Maj** pour
  poser des points, ou les deux pour effacer.
- À la souris, **Maj+clic** efface les cases exactement comme un clic milieu.
- **E** est le bouton **Gomme**.

## Paramètres

- La **largeur** et la **hauteur** de la grille. Les préréglages vont de 10×10 à 30×30 ;
  les grandes grilles sont un peu plus longues à engendrer.
`,R=e({default:()=>z}),z=`# Perles

Une grille de cases, dont certaines portent une perle noire ou blanche. Trace une seule
boucle fermée qui va de centre de case en centre de case, à l’horizontale ou à la
verticale, sans jamais se croiser ni se ramifier. La boucle n’a pas besoin de passer par
toutes les cases, mais elle doit passer par toutes les perles :

- à une **perle noire**, la boucle tourne, puis file tout droit à travers les deux cases
  qui suivent la perle le long de la boucle ;
- à une **perle blanche**, la boucle passe tout droit, et tourne dans au moins l’une des
  deux cases qui suivent la perle le long de la boucle.

Seules comptent les cases que la boucle visite juste avant et juste après une perle, pas
toutes celles qui la touchent dans la grille.

Une perle dont la règle est déjà enfreinte prend un halo rouge. Dès qu’une boucle fermée
existe, chaque segment en dehors d’elle est dessiné en rouge, tout comme toute case portant
trois segments ou plus.

## Commandes

**Résoudre** trace toute la boucle. Le casse-tête est fini quand la boucle forme un seul
circuit fermé et que rien n’est rouge.

### Souris et tactile

- **Clique** sur une arête de la grille (près de la frontière entre deux cases) pour y
  tracer un segment de boucle ; clique de nouveau pour l’enlever.
- **Glisse** à travers une suite de cases pour tracer d’un coup toute une série de segments.
  Glisser le long de segments existants les efface ; un glissement qui commence sur des segments
  existants et se poursuit dans des cases vides efface d’abord, puis trace. Reviens sur une case
  déjà parcourue pour raccourcir le trajet avant de lâcher ; reviens sur la case de départ pour
  fermer la boucle.
- **Clic droit** sur une arête de la grille pour y poser une petite croix voulant dire
  « aucun segment ici » ; on ne peut pas tracer de segment à travers une croix tant qu’elle
  n’est pas enlevée.
  **Glisse en clic droit** à travers une série de cases pour poser une croix sur chaque
  arête traversée.
- **Croix** (le bouton croix à côté d’Annuler) fait qu’un simple clic pose ou enlève une
  croix, et qu’un glissement en pose toute une rangée : comme pour le tracé, un glissement
  qui commence sur des croix les enlève d’abord, et il passe par-dessus toute arête qui a
  déjà un segment. Appuie de nouveau dessus pour revenir au tracé de la boucle.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur. **Ctrl+flèche** trace ou enlève le segment de ce
  côté de la case du curseur, **Maj+flèche** y pose ou enlève une croix. **Enter** démarre
  un glissement au clavier depuis la case du curseur : déplace-toi avec les flèches et
  appuie de nouveau sur Enter pour valider le trajet, ou sur **Space** pour l’abandonner.
- **X** est le bouton **Croix** ; quand il est activé, un glissement au clavier pose aussi
  des croix.

## Paramètres

- La **largeur** et la **hauteur** de la grille, en cases (au moins cinq chacune).
- **Difficulté** : les grilles _Facile_ se résolvent en raisonnant sur chaque perle et les
  cases juste à côté. Les grilles _Délicat_ demandent aussi de repérer quand un segment
  refermerait une petite boucle trop tôt, en laissant d’autres perles en plan. (Une grille
  5×5 Délicat est engendrée comme une Facile, comme dans l’original.)
- **Autoriser les grilles insolubles** : garde toutes les perles que la boucle supporte au
  lieu de les réduire à un ensemble minimal et de solution unique. Une option de débogage
  héritée de l’original.
`,B=e({default:()=>V}),V=`# Pions

Un plateau plein de pions avec un trou vide, ou quelques-uns sur un plateau aléatoire. Un pion peut sauter à l’horizontale ou à
la verticale par-dessus un pion voisin, jusque dans le trou vide juste derrière ; le pion
sauté est retiré. Continue de sauter jusqu’à ce qu’il ne reste qu’un pion sur le plateau.

C’est le vieux jeu du solitaire. Le plateau **Croix** est la disposition anglaise
familière, le plateau **Octogone** la disposition européenne (qui commence avec le trou
vide décentré, parce qu’on ne peut pas la terminer en partant du centre), et les plateaux
**Aléatoire** sont des formes bizarres que l’ordinateur fait pousser. Les zones vides sans
trou ne font tout simplement pas partie du plateau.

Tu ne peux pas rester coincé pour de bon : s’il ne reste aucun saut et plus d’un pion, la
partie est finie, mais Annuler te ramène aussi loin que tu veux. La barre d’état compte les
pions restants et les coups joués.

## Commandes

### Souris et tactile

- **Glisse** un pion et lâche-le dans un trou vide situé exactement deux cases plus loin,
  en ligne droite par-dessus un autre pion. Tout autre lâcher remet le pion en place.
- Ou bien **clique** sur un pion pour le prendre (il devient orange et ses trous
  d’atterrissage possibles sont marqués), puis clique sur le trou où sauter. Cliquer de
  nouveau sur le même pion le repose.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur sur le plateau.
- **Enter** ou **Space** sur un pion le prend ; une flèche le fait alors sauter dans cette
  direction, si le coup est légal, et **Enter** de nouveau le repose.

## Paramètres

- La **largeur** et la **hauteur** du plateau, au moins 4 chacune.
- **Type de plateau** : _Croix_ et _Octogone_ sont les dispositions traditionnelles et ne
  sont disponibles qu’en 7×7. _Aléatoire_ produit une forme de plateau différente à chaque
  fois, toujours réductible à un seul pion puisqu’elle a été construite en jouant des sauts
  à l’envers depuis un pion unique.
`,H=e({default:()=>U}),U=`# Portée

Certaines cases de la grille portent un nombre. Noircis des cases pour que quatre choses
soient vraies en même temps :

- aucune case numérotée n’est noire ;
- deux cases noires ne se touchent jamais par un côté (les coins sont permis) ;
- les cases blanches forment toutes une seule région connexe, reliée côté contre côté ;
- chaque nombre compte les cases blanches que sa propre case voit : elle-même, plus tout
  ce qui est en ligne droite en haut, en bas, à gauche et à droite jusqu’à ce qu’une case
  noire ou le bord de la grille s’y oppose.

C’est le _Kurodoko_ de Nikoli, aussi appelé _Kuromasu_ ou _Where is Black Cells_. Un nombre
qui voit déjà assez de cases a une case noire juste après chaque série qu’il voit ; un
nombre qui verrait trop si une case inconnue isolée était blanche a au contraire une case
noire à cet endroit. Noircir une case qui est le seul lien entre deux groupes de cases
blanches n’est jamais juste. Chaque casse-tête se termine par ce genre de raisonnement ; il
n’y a jamais besoin de deviner.

Les erreurs apparaissent en rouge : les cases noires qui se touchent reçoivent un cadre
rouge autour du groupe, les cases blanches coupées de la région principale reçoivent un
contour rouge, et un nombre devient rouge quand il ne peut plus voir assez de cases ou
qu’il en voit déjà certainement trop. Le casse-tête est fini quand aucune règle n’est
enfreinte ; il n’est pas nécessaire de pointer les cases blanches.

## Commandes

### Souris et tactile

- **Clique** sur une case pour la noircir. Clique de nouveau pour en faire un point (une
  case que tu sais blanche), et encore une fois pour l’effacer.
- **Un clic droit** parcourt le cycle dans l’autre sens : point, puis noir, puis vide.
- **Glisse** pour peindre plusieurs cases d’un coup, et **glisse en clic droit** pour les
  balayer dans l’autre sens. Seules les cases qui étaient au départ dans le même état que
  la première sont touchées, un balayage de points laisse donc tes cases noires
  tranquilles.
- **Gomme** (le bouton gomme à côté d’Annuler) fait qu’un clic vide une case, et qu’un
  glissement efface chaque case noire et chaque point sur son passage, quels qu’ils soient.
  Appuie de nouveau dessus pour revenir à la peinture.
- **Indice** remplit une case qui découle de ce qui est déjà sur le plateau — ou corrige
  une case qui contredit la solution. Le casse-tête reste en jeu, et quelques indices te
  laissent quand même la victoire, et son crédit.
- **Résoudre** remplit toute la grille et pointille chaque case blanche.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur dans la grille.
- **Enter** agit comme un clic gauche sur la case sous le curseur et **Space** comme un
  clic droit.
- **E** est le bouton **Gomme** et **H** le bouton **Indice**.

## Paramètres

- La **largeur** et la **hauteur** de la grille. Les préréglages vont de 9×6 à 16×11 ; on
  peut engendrer jusqu’à 30×30, mais les grilles minuscules d’une ou deux cases ne donnent pas
  de vrai casse-tête.
`,W=e({default:()=>G}),G=`# Rectangles

Certaines cases de la grille portent un nombre. Découpe toute la grille en rectangles de
sorte que chaque rectangle contienne exactement un nombre, et que ce nombre soit l’aire du
rectangle (sa largeur multipliée par sa hauteur). Un 6, par exemple, tient dans un bloc
1×6, 2×3, 3×2 ou 6×1 ; lequel, et où le nombre se place à l’intérieur, c’est à toi de le
déduire des voisins.

Les grilles sont engendrées au hasard, et par défaut les nombres sont placés de façon
qu’un seul découpage fonctionne. Le casse-tête d’origine vient du magazine japonais Nikoli,
où on l’appelle Shikaku.

## Commandes

### Souris et tactile

- **Glisse** en travers d’une zone pour tracer un rectangle autour d’elle : son contour est
  dessiné et tous les traits à l’intérieur sont retirés. Glisser le long d’un trait de la
  grille ne trace que ce trait.
- **Clique** sur un trait de la grille pour ajouter ou retirer cette seule arête.
- **Glisse en clic droit** sur une zone pour effacer les traits à l’intérieur en laissant
  son contour tranquille. Un **clic droit** sur un trait de la grille l’ajoute ou le retire
  exactement comme un clic ordinaire.
- **Gomme** (le bouton gomme à côté d’Annuler) fait qu’un glissement ordinaire efface lui
  aussi : glisse sur une zone pour en effacer les traits intérieurs, ou clique sur un trait
  de la grille pour le retirer. Tant qu’elle est activée, un clic n’ajoute jamais de trait.
  Appuie de nouveau dessus pour revenir au tracé.
- **Résoudre** dessine tout le découpage pour toi.

Pendant que tu glisses, le rectangle que tu es sur le point de tracer est entouré et sa
taille est affichée dans la barre d’état. Un rectangle terminé de la bonne taille est
ombré. Un rectangle fermé qui ne peut jamais être juste est signalé : son nombre devient
rouge s’il n’a pas la bonne taille pour lui, et il est hachuré s’il ne contient aucun
nombre. Le casse-tête est terminé quand chaque case est dans un rectangle correct.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur.
- **Enter** commence à tirer un rectangle depuis le curseur ; amène le curseur au coin
  opposé et appuie de nouveau sur **Enter** pour le tracer.
- **Space** fonctionne de la même façon, mais efface l’intérieur du rectangle.
- **E** est le bouton **Gomme**.

## Paramètres

- La **largeur** et la **hauteur** de la grille. Les préréglages vont de 7×7 à 19×19.
- **Facteur d’expansion** — engendre une grille plus petite et l’étire jusqu’à la taille
  demandée, pour que le casse-tête ait moins de rectangles, mais plus grands. 0 (par
  défaut) veut dire aucun étirement ; 0,5 fait de la grille initiale les deux tiers de la
  taille finale dans chaque direction. Les grandes valeurs ne laissent qu’une poignée de
  rectangles et rendent le casse-tête trivial.
- **Garantir une solution unique** — actif d’ordinaire. Le désactiver place les nombres
  n’importe où dans leurs rectangles, ce qui est plus rapide et peut donner des grilles à
  plusieurs réponses ; n’importe quel découpage valide compte alors comme résolu.
`,se=e({default:()=>K}),K=`# Same Game

Le plateau est rempli de cases colorées. Repère un groupe d’au moins deux cases de la même
couleur qui se touchent par leurs côtés et retire-le ; les cases au-dessus du vide
tombent, et dès qu’une colonne est vide, les colonnes à sa droite glissent pour la
refermer. Vide tout le plateau pour gagner. S’il reste des cases mais qu’aucune paire de
cases voisines ne partage une couleur, il n’y a plus rien à faire — annule et essaie un
autre ordre.

Les grands groupes valent bien plus que les petits : retirer _n_ cases rapporte
(_n_ − 2)² points avec le score par défaut, une paire ne vaut donc rien, trois cases un
point, dix cases 64. La barre d’état montre ton score et, quand un groupe est sélectionné,
combien il a de cases et ce qu’il rapporterait.

Chaque plateau engendré (sauf si tu désactives l’option) est construit pour _pouvoir_ être
entièrement vidé — même si trouver un ordre qui rapporte aussi beaucoup reste ton affaire.

Il n’y a pas de bouton Résoudre : l’ordinateur sait que le plateau peut être vidé, mais il
ne te dira pas comment.

## Commandes

### Souris et tactile

- **Clique** sur une case pour sélectionner tout le groupe auquel elle appartient ; le
  groupe est dessiné plus clair, avec un contour épais. **Clique de nouveau sur le groupe
  sélectionné** pour le retirer. Cliquer ailleurs déplace la sélection à la place.
- **Clic droit** sur le groupe sélectionné pour le désélectionner.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur sur le plateau (avec passage d’un bord à l’autre).
- **Enter** sélectionne le groupe sous le curseur, et un nouvel appui le retire.
- **Space** sur le groupe sélectionné le désélectionne.

## Paramètres

- La **largeur** et la **hauteur** du plateau.
- **Nombre de couleurs**, de 3 à 9 (2 est permis quand la solubilité n’est pas garantie).
  Plus de couleurs veut dire des groupes plus petits et un plateau plus difficile.
- **Système de score** : _(n−2)²_, par défaut, ou _(n−1)²_, qui récompense aussi les
  paires.
- **Garantir la solubilité** : quand c’est coché, le plateau est engendré à l’envers depuis
  un plateau vide, de sorte qu’au moins une suite de retraits existe. Décoche-le pour un
  plateau purement aléatoire, plus rapide à engendrer et qui a tendance à avoir de plus
  grandes régions, mais qui peut être impossible à vider.
`,ce=e({default:()=>le}),le=`# Panneau

Chaque case porte une flèche, et quelques cases portent un numéro. Relie les cases en un
seul chemin numéroté de 1 à N (N étant le nombre de cases), de sorte que le successeur de
chaque case se trouve quelque part le long de sa flèche : la case numérotée 1 pointe vers
la 2, qui pointe vers la 3, et ainsi de suite. Un successeur peut être à n’importe quelle
distance dans la direction de la flèche, pas seulement juste à côté. La dernière case,
marquée d’une étoile, ne pointe nulle part.

Le premier et le dernier numéro sont toujours montrés, plus assez d’autres pour rendre le
chemin unique. Chaque casse-tête a exactement une solution et se trouve par le seul
raisonnement.

Les erreurs sont montrées en rouge : deux cases portant le même numéro, un numéro dont le
successeur n’est pas le long de sa flèche, ou une chaîne qui dépasse le numéro qu’on lui a
donné. Le casse-tête est fini quand les numéros 1 à N parcourent toutes les cases sans
aucun rouge nulle part.

## Commandes

### Souris et tactile

- **Glisse** d’une case vers une case située le long de sa flèche pour faire de la seconde
  le successeur de la première. **Glisse en clic droit** dans l’autre sens : d’une case
  vers celle qui devrait la précéder.
- Quand deux cases reliées comprennent un numéro, le numéro se propage à toute la chaîne
  et s’affiche en bleu. Une chaîne encore sans numéro est étiquetée avec une lettre et des
  décalages (\`a\`, \`a+1\`, \`a+2\`, …) ; dès qu’elle touche une case numérotée, les lettres
  deviennent des numéros. Relier une chaîne à une case déjà reliée remplace l’ancienne
  liaison.
- Chaque case à laquelle il manque encore un prédécesseur montre un petit point dans son coin en
  bas à gauche, et une flèche s’estompe dès que sa case a un successeur. Le travail
  consiste donc toujours à relier une flèche encore vive à une case marquée d’un point.
- **Clic droit** sur une case pour supprimer ses deux liaisons. **Glisse** une case hors du
  plateau pour faire la même chose, ou **glisse-la en clic droit** hors du plateau pour
  démonter toute sa chaîne.
- **Briser** (le bouton maillon cassé à côté d’Annuler) fait qu’un clic sur une case
  démonte toute sa chaîne, jusqu’à la dernière liaison, et glisser une case hors du plateau
  fait de même. Glisser d’une case à l’autre les relie toujours. Appuie de nouveau dessus
  pour le désactiver.
- **Résoudre** trace le chemin complet.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur.
- **Enter** sur une case y démarre une liaison ; amène le curseur sur le successeur et
  appuie de nouveau sur **Enter** pour créer la liaison (appuie sur la même case pour
  annuler).
- **Space** ou **X** supprime les liaisons de la case sous le curseur ; **Maj + X** démonte
  toute sa chaîne.
- **B** est le bouton **Briser**.

## Paramètres

- La **largeur** et la **hauteur** de la grille, de 2 à 12 cases (2×2 est trop petit pour
  fonctionner).
- **Début et fin dans les coins** : quand c’est réglé, le 1 est toujours dans la case en
  haut à gauche et le N dans celle en bas à droite. Sinon les deux bouts sont placés au
  hasard, tout en restant montrés.
`,ue=e({default:()=>de}),de=`# Singles

Chaque case de la grille porte un nombre. Noircis certaines cases (en cachant leur nombre)
pour que trois choses soient vraies en même temps :

- aucun nombre n’apparaît plus d’une fois parmi les cases blanches d’une ligne ou d’une
  colonne ;
- deux cases noires ne se touchent jamais par un côté (les coins sont permis) ;
- les cases blanches forment toutes une seule région connexe, reliée côté contre côté.

C’est le _Hitori_ de Nikoli. Une bonne entrée en matière consiste à chercher deux nombres
égaux séparés par une case : l’un des deux doit être noir, donc la case du milieu est
forcément blanche. Deux nombres égaux côte à côte veulent dire que tous les autres
exemplaires de ce nombre sur leur ligne sont noirs.

Les erreurs apparaissent en rouge : les cases noires qui se touchent reçoivent un cadre
rouge autour du groupe, les cases blanches coupées de la région principale reçoivent un
contour rouge, et deux cases entourées qui partagent une ligne avec le même nombre sont
dessinées en rouge.

Le casse-tête est fini quand aucune règle n’est enfreinte ; il n’est pas nécessaire
d’entourer les blanches.

## Commandes

### Souris et tactile

- **Clique** sur une case pour la noircir ; clique de nouveau pour la rétablir.
- **Un clic droit** trace un cercle autour d’un nombre pour noter qu’il est certainement
  blanc ; un nouveau clic droit enlève le cercle. L’un ou l’autre bouton efface la marque
  qu’une case porte déjà.
- **Résoudre** remplit toute la grille et entoure chaque case blanche.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur dans la grille (avec passage d’un bord à l’autre).
- **Enter** noircit ou rétablit la case sous le curseur et **Space** l’entoure ou enlève
  son cercle.

## Paramètres

- La **largeur** et la **hauteur** de la grille, de 2 à 20 pour les grilles engendrées.
- **Difficulté** : les grilles _Facile_ ne demandent que les arguments directs — une case
  noire force ses voisines à être blanches, un nombre entouré force ses jumeaux à être
  noirs, les motifs de la paire séparée d’une case et de la paire côte à côte, une case
  blanche avec une seule issue, et les petits motifs des coins. Les grilles _Délicat_
  demandent aussi de repérer quand noircir une case couperait la région blanche en deux, et
  d’utiliser des paires de paires décalées d’une case. Chaque casse-tête a exactement une
  solution.
`,fe=e({default:()=>pe}),pe=`# Seize

Un taquin sans case vide. Chaque cellule porte une tuile numérotée et, au lieu de faire
glisser une seule tuile, tu fais coulisser toute une ligne ou toute une colonne d’un cran.
La tuile poussée hors du bord revient aussitôt par le bout opposé de la même ligne, comme
si la grille était enroulée autour d’un beignet. Range les tuiles pour qu’elles comptent à
partir de 1 dans le coin en haut à gauche, de gauche à droite puis ligne par ligne.

## Commandes

### Souris et tactile

- **Clique** sur l’une des flèches du pourtour pour faire coulisser cette ligne ou cette
  colonne d’un cran dans le sens de la flèche. **Clic droit** sur une flèche pour faire
  coulisser la ligne dans l’autre sens.
- **Résoudre** remplace simplement la grille par la grille rangée. Cela ne te montre pas de
  trajet, mais cela te donne un plateau propre pour essayer des manœuvres.

### Clavier (Keyboard)

- **Les flèches** promènent une mise en évidence autour de l’anneau de flèches du bord.
- **Enter** fait coulisser la ligne mise en évidence dans le sens de sa flèche et **Space**
  la fait coulisser dans l’autre sens.

## Paramètres

- La **largeur** et la **hauteur** de la grille. Sur les grilles dont les deux côtés sont
  impairs, seule la moitié des dispositions est atteignable, le générateur ne distribue
  donc que celles qui le sont.
- **Nombre de coups de mélange** : laisse 0 pour une disposition complètement aléatoire, ou
  donne un nombre pour brouiller la grille rangée avec exactement autant de glissements
  simples. L’idée est alors de trouver quels glissements ont été faits et de les défaire en
  autant de coups ; plus tu demandes de coups de mélange, plus il est probable qu’une
  solution plus courte existe.
`,me=e({default:()=>he}),he=`# Diagonales

Une grille de cases vides, avec des nombres entourés sur certains de ses coins. Trace une
diagonale dans chaque case, penchée dans un sens ou dans l’autre, de sorte que :

- chaque nombre entouré ait exactement ce nombre de traits touchant son coin (un 4 se
  trouve au milieu d’une croix, un 0 a tous les traits voisins penchés à l’écart) ;
- les traits ne se rejoignent jamais en une boucle fermée.

Un nombre qui a déjà trop de traits, ou qui ne peut plus en obtenir assez, devient rouge,
tout comme chaque trait qui fait partie d’une boucle. Le casse-tête est fini quand chaque
case a un trait et que rien n’est rouge.

## Commandes

### Souris et tactile

- **Clique** sur une case pour y tracer un \`\\\` ; clique de nouveau pour en faire un \`/\`, et
  encore une fois pour l’effacer.
- **Un clic droit** parcourt le cycle dans l’autre sens : \`/\`, puis \`\\\`, puis vide. Une case
  peut donc être réglée dans les deux sens avec un seul bouton.
- **Résoudre** remplit toute la grille.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur dans la grille.
- **Enter** fait tourner la case sous le curseur comme un clic gauche et **Space** comme un
  clic droit.

## Paramètres

- La **largeur** et la **hauteur** de la grille, en cases.
- **Difficulté** : les grilles _Facile_ se résolvent case par case — un nombre déjà
  satisfait ou qui a besoin de toutes les cases restantes, et les cases où l’un des deux
  traits refermerait une boucle. Les grilles _Difficile_ demandent aussi de raisonner sur
  des paires de cases qui doivent pencher du même côté avant même de savoir lequel, et sur
  les régions qu’un trait couperait du bord de la grille. Deviner n’est jamais nécessaire ;
  chaque casse-tête a exactement une solution.
`,ge=e({default:()=>_e}),_e=`# Solo

Remplis la grille carrée de chiffres pour que chaque ligne, chaque colonne et chaque bloc
au trait épais contienne chaque chiffre exactement une fois. Certaines cases sont données
comme indices ; à toi de trouver les autres. La grille 3×3 normale est le Sudoku
familier, mais les blocs peuvent aussi être des rectangles (une grille 2×3 a six blocs
3×2), et la grille peut aller jusqu’à 16×16, auquel cas les lettres a, b, c… remplacent les
chiffres au-delà de 9.

Trois variantes peuvent être activées :

- **X** : les deux grandes diagonales, légèrement ombrées, doivent elles aussi contenir
  chaque chiffre.
- **Jigsaw** : les blocs sont des formes irrégulières qui changent d’une grille à l’autre.
- **Killer** : il n’y a aucun chiffre indice. À la place, la grille est découpée en
  « cages » en pointillés, marquées chacune de la somme des chiffres qu’elles contiennent.
  Aucun chiffre ne peut apparaître deux fois dans une cage.

Chaque casse-tête a exactement une solution, et on peut toujours l’atteindre par pur
raisonnement à la difficulté que tu as choisie.

## Commandes

Les chiffres qui entrent en conflit avec un autre exemplaire sur leur ligne, leur colonne,
leur bloc, leur diagonale ou leur cage sont montrés en rouge, tout comme une cage dont les
chiffres ne font pas sa somme. **Indice** inscrit une case — la plus facile encore
ouverte, ou le premier chiffre qui contredit la réponse — et te laisse le reste ; le
casse-tête continue, et avec quelques indices, la victoire et son crédit restent à toi.
**Résoudre** inscrit toute la solution et termine le casse-tête.

### Souris et tactile

- **Clic gauche** sur une case vide pour la choisir, puis sers-toi du pavé à l’écran pour y
  écrire un chiffre (les touches lettres sont les chiffres au-delà de 9). Cliquer de nouveau sur
  la case choisie la désélectionne.
- **⌫** sur le pavé vide de nouveau la case choisie, et **✎** active les notes au
  crayon, si bien que ce que tu choisis ensuite s’inscrit comme une petite annotation
  plutôt que comme une réponse.
- **Clic droit** sur une case pour la choisir directement en mode **notes au crayon**. Les
  notes au crayon ne sont là que pour t’aider à réfléchir ; le jeu n’y prête aucune
  attention, et inscrire un chiffre les efface.
- **Notes** dans le menu pause remplit chaque case vide d’un jeu complet de notes au
  crayon, pour ceux qui aiment partir de tout et barrer les candidats.
- **Surligner** (la loupe à côté d’Annuler) fait ressortir chaque case qui contient le
  même chiffre que la dernière case sur laquelle tu as cliqué, indices compris, et affiche
  ce chiffre en gras parmi les notes au crayon. Appuie de nouveau dessus pour le
  désactiver.

### Clavier (Keyboard)

- **Tape un chiffre** (ou une lettre pour les chiffres au-delà de 9) pour remplir la case
  choisie.
- **Space** ou **Backspace** vide la case choisie (son chiffre ou toutes ses notes au
  crayon).
- **Les flèches** déplacent un curseur clavier. **Enter** fait passer le curseur de la
  saisie normale à la saisie de notes au crayon, et les chiffres tapés vont dans la case en
  dessous.
- **M** est le bouton **Notes** et **L** le bouton **Surligner**.

## Paramètres

- **Colonnes de sous-blocs** et **Lignes de sous-blocs** : la grille est aussi grande que
  leur produit, et chaque bloc est aussi large que le nombre de lignes et aussi haut que
  le nombre de colonnes. En mode jigsaw, le produit est simplement la taille de la grille.
- **« X » (chaque nombre dans chaque grande diagonale)**, **Jigsaw (sous-blocs de forme
  irrégulière)** et **Killer (sommes de chiffres)** activent les variantes décrites plus
  haut. Les grilles Killer sont limitées à neuf chiffres au plus.
- **Symétrie** : la façon dont le motif des indices se reflète — Aucune, Rotation double,
  Rotation quadruple, Miroir double, Miroir diagonal double, Miroir quadruple, Miroir
  diagonal quadruple ou Miroir octuple. Plus de symétrie fait plus joli, mais tend à
  laisser plus d’indices que strictement nécessaire.
- **Difficulté** : le type de raisonnement le plus dur que le casse-tête demandera. _Très facile_
  et _Facile_ ont toujours une case remplissable directement ; _Moyen_ demande de raisonner sur
  les endroits où un chiffre peut aller entre un bloc et une ligne ; _Difficile_ demande des
  ensembles de cases qui, à elles toutes, s’approprient un ensemble de chiffres ; _Expert_ ajoute
  les chaînes de forçage ; et les grilles _Extrême_ ne se terminent pas sans deviner et revenir
  en arrière. Les grilles dures sont plus longues à engendrer.
`,ve=e({default:()=>ye}),ye=`# Tentes

La grille est un terrain de camping : certaines cases portent des arbres, les autres sont
de la terre nue. Plante des tentes sur les cases vides de sorte que :

- il y ait exactement autant de tentes que d’arbres ;
- chaque arbre puisse être apparié à sa propre tente sur une case directement à côté de lui
  (au-dessus, en dessous, à gauche ou à droite — jamais en diagonale). Une tente peut se
  trouver à côté d’autres arbres, mais chaque tente appartient à un arbre et chaque arbre à
  une tente ;
- deux tentes ne se touchent jamais, pas même par un coin ;
- les nombres le long des bords droit et bas donnent le nombre de tentes de chaque ligne et
  de chaque colonne.

Les indices ne sont que les comptes, tout le casse-tête consiste donc à déduire où les
tentes doivent être. Chaque grille ici se résout par le seul raisonnement, sans deviner.

## Commandes

Les tentes qui se touchent sont montrées en rouge avec un marqueur sur le côté ou le coin
partagé, tout comme tout groupe de tentes avec trop peu d’arbres entre elles, ou tout
groupe d’arbres qui n’a plus la place pour toutes leurs tentes. Un compte passe au gris dès
que sa ligne a le bon nombre de tentes, et au rouge dès qu’il ne peut plus être satisfait.
**Résoudre** place toutes les tentes pour toi.

### Souris et tactile

- **Clique** sur une case vide pour y planter une tente ; clique de nouveau sur la tente
  pour la retirer.
- **Clic droit** sur une case vide pour la marquer en herbe, ce qui veut dire que tu es sûr
  qu’aucune tente n’y va ; un nouveau clic droit l’efface. Un clic comme un clic droit
  efface une case qui porte déjà quelque chose.
- **Glisse en clic droit** le long d’une ligne ou d’une colonne pour mettre en herbe d’un
  coup chaque case vide que tu traverses — pratique pour terminer une ligne une fois toutes
  ses tentes placées. Les tentes et les marques existantes ne sont pas touchées.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur.
- **Enter** plante ou retire une tente sous le curseur.
- **Space** met ou enlève de l’herbe sous le curseur.

## Paramètres

- La **largeur** et la **hauteur** de la grille, de 4 à 20 cases.
- **Difficulté** : les grilles _Facile_ cèdent au comptage et à l’examen de ce dont chaque
  arbre et chaque tente a besoin. Les grilles _Délicat_ demandent aussi de peser comment
  les placements possibles d’une ligne contraignent ses voisines, et de réfléchir aux cases
  que les arbres peuvent se partager.
`,be=e({default:()=>xe}),xe=`# Tours

Chaque case de la grille reçoit une tour, d’une hauteur allant de 1 à la taille de la
grille. Chaque ligne et chaque colonne doit contenir chaque hauteur exactement une fois.
Les nombres du pourtour te disent combien de tours tu verrais en regardant dans cette ligne
ou cette colonne depuis ce côté : une tour cache toutes les tours plus courtes derrière
elle. Un indice égal à la taille de la grille veut dire que les hauteurs montent tout le
long de la ligne ; un indice de 1 veut dire que la plus haute tour se dresse juste au bord.

Les grilles plus grandes et plus dures commencent avec quelques tours déjà bâties et
laissent tomber certains indices du bord. Les chiffres en conflit avec un autre sur leur
ligne ou leur colonne, et les indices que les tours déjà bâties ne peuvent plus satisfaire,
sont montrés en rouge. Ce casse-tête est mieux connu sous le nom de Skyscrapers.

## Commandes

Les tours données ne peuvent pas être changées, et **Résoudre** inscrit la réponse.

### Souris et tactile

- **Clic gauche** sur une case pour la choisir, puis sers-toi des touches à l’écran pour
  bâtir une tour de cette hauteur. **⌫** sur le pavé vide de nouveau la case.
- **✎** sur le pavé active les **notes au crayon** : ce que tu choisis ensuite
  s’inscrit comme une petite annotation, la case reste choisie pour que tu puisses en
  ajouter plusieurs, et retaper le même chiffre en efface une. Inscrire un vrai chiffre
  efface les notes au crayon de cette case.
- **Clic droit** sur une case pour la choisir directement en mode notes au crayon.
- **Notes** dans le menu pause remplit chaque case vide d’un jeu complet de notes au
  crayon.
- **Surligner** (la loupe à côté d’Annuler) fait ressortir chaque case qui contient la
  même hauteur que la dernière case sur laquelle tu as cliqué, et affiche cette hauteur en
  gras parmi les notes au crayon. Appuie de nouveau dessus pour le désactiver.

### Clavier (Keyboard)

- **Tape un chiffre** pour bâtir une tour de cette hauteur dans la case choisie. **Space**
  ou **Backspace** la vide.
- **Les flèches** déplacent un curseur clavier. **Enter** le fait passer du mode chiffre au
  mode notes au crayon ; les chiffres s’inscrivent dans la case mise en évidence et le
  curseur reste en place.
- **M** est le bouton **Notes** et **L** le bouton **Surligner**.

## Paramètres

- **Taille de la grille** — de 3 à 9. Les tours se saisissent en un seul chiffre, d’où la
  limite de 9.
- **Difficulté** — les grilles Facile ne demandent que les conséquences directes de chaque indice
  et des règles de ligne et de colonne. Les grilles Difficile veulent que tu envisages toutes les
  dispositions qu’un indice autorise et que tu repères les ensembles de cases qui se partagent
  quelques candidats. Expert ajoute du raisonnement ensembliste plus dur et des chaînes de
  forçage, et les grilles Extrême ne se terminent pas sans quelques tâtonnements, même si la
  solution reste unique.
`,Se=e({default:()=>Ce}),Ce=`# Rails

Une voie ferrée entre dans la grille par la gauche et en sort par le bas ; les deux bouts
sont montrés comme des rails qui filent hors du plateau. Complète la ligne entre eux. La
voie est un trajet unique, sans embranchement, sans boucle et sans croisement, bâti
seulement de morceaux droits et de courbes en quart de tour, si bien que chaque case
qu’elle visite a exactement deux rails qui en partent. Quelques morceaux sont déjà posés
sur des cases ombrées et ne peuvent pas être changés. Le nombre au-dessus de chaque colonne
et à côté de chaque ligne dit par combien de cases de cette ligne la voie terminée passe.

Les nombres passent au gris dès que leur ligne contient le bon nombre de cases de voie, et
au rouge quand une ligne ne peut plus tomber juste : trop de cases de voie, ou tant de
cases barrées qu’il ne reste plus assez de place. Les cases où les rails se rejoignent mal
(trois rails dans une même case, une boucle fermée, ou de la voie en trop une fois
l’entrée et la sortie reliées) sont dessinées en rouge elles aussi.

## Commandes

**Résoudre** pose la voie complète, en retirant celles de tes marques qui la contredisent.
Le casse-tête est fini quand une voie ininterrompue relie l’entrée à la sortie et que
chaque compte est respecté.

### Souris et tactile

- **Glisse** à travers une suite de cases voisines pour poser des rails entre elles. Le
  trajet peut tourner ; un glissement qui ne suit que des rails déjà là les enlève au
  contraire.
- **Clique** près du côté d’une case pour ajouter ou retirer un seul rail par ce côté.
  Clique au milieu d’une case pour la marquer « la voie passe ici » sans dire par quels
  côtés — pratique pour compter — et clique de nouveau pour effacer la marque.
- **Clic droit** près d’un côté pour tracer une petite barre voulant dire « pas de rail
  ici » ; clic droit au milieu d’une case pour barrer toute la case.
  **Glisse en clic droit** le long d’une ligne ou d’une colonne pour barrer (ou débarrer)
  une série de cases d’un coup.
- **Gomme** (le bouton gomme à côté d’Annuler) fait qu’un clic ou un glissement nettoie les
  cases : chaque case touchée perd ses rails, ses barres « pas de rail » et sa marque ou sa
  croix. Les pièces données restent. Appuie de nouveau dessus pour revenir à la pose des
  rails.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur qui s’arrête sur les cases et sur les côtés entre
  elles. **Enter** agit comme un clic à l’endroit du curseur et **Space** comme
  un clic droit.
- **E** est le bouton **Gomme**.

## Paramètres

- La **largeur** et la **hauteur** de la grille, au moins quatre chacune.
- **Difficulté** : les grilles _Facile_ cèdent quand on regarde une case ou une ligne à la
  fois. Les grilles _Délicat_ demandent aussi de réfléchir à l’endroit où la dernière case
  de voie d’une ligne pourrait bien aller, et aux bouts de rails libres qui doivent se
  prolonger le long d’une ligne ou la traverser. Chaque casse-tête a exactement une
  solution.
- **Interdire les indices 1 consécutifs** : quand c’est réglé (par défaut), deux lignes
  voisines ne sont jamais comptées 1 toutes les deux, et ni la colonne d’entrée ni la ligne
  de sortie ne le sont. Cela évite que la voie file en longues lignes droites ennuyeuses le
  long du bord.
`,we=e({default:()=>Te}),Te=`# Rotation

Une grille de tuiles numérotées a été brouillée en faisant tourner des blocs carrés de
tuiles. Fais-les tourner en sens inverse jusqu’à ce que les nombres se lisent dans l’ordre,
de gauche à droite et de haut en bas. Dans le jeu de base, chaque coup fait tourner un bloc
2×2 d’un quart de tour autour du point où ses quatre tuiles se rejoignent ; les réglages
plus grands font tourner des blocs 3×3, voire davantage.

Dans les variantes **orientable**, chaque tuile porte un triangle, et le casse-tête ne
compte comme fini que lorsque tous les triangles pointent vers le haut. Dans la variante
**lignes seules**, les tuiles portent le numéro de leur ligne, il suffit donc que tous les
1 atteignent la première ligne, les 2 la deuxième, et ainsi de suite.

## Commandes

**Résoudre** remet chaque tuile directement à sa place. Cela ne te montre pas de trajet,
mais c’est un moyen rapide d’obtenir une grille propre pour travailler une suite de tours.

### Souris et tactile

- **Clique** au centre d’un bloc pour le tourner dans le sens antihoraire ; **clic droit** pour
  le tourner dans le sens horaire. Pour les blocs 2×2, le centre est un coin où quatre tuiles se
  rejoignent ; pour les tailles de bloc impaires, c’est la tuile du milieu. Un clic vers le bord
  de la grille tourne le bloc qui touche ce bord.
- **Horaire** (le bouton flèche tournante à côté d’Annuler) inverse les deux sens : un clic
  tourne les blocs dans le sens horaire et un clic droit dans le sens antihoraire. Appuie de
  nouveau dessus pour revenir.

### Clavier (Keyboard)

- **Les flèches** promènent dans la grille un contour de la taille d’un bloc. **Enter**
  tourne le bloc entouré dans le sens antihoraire et **Space** le tourne dans le sens
  horaire.
- **A**, **B**, **C** et **D** tournent les blocs des coins en haut à gauche, en haut à
  droite, en bas à gauche et en bas à droite dans le sens antihoraire ; maintiens **Maj**
  pour le sens horaire.
- **T** est le bouton **Horaire**.

## Paramètres

- La **largeur** et la **hauteur** de la grille.
- **Taille du bloc tournant** : le côté du bloc carré qu’un coup fait tourner (au moins 2,
  et pas plus grand que la grille).
- **Un seul nombre par ligne** : une variante plus facile où toutes les tuiles d’une ligne
  portent le même nombre.
- **L’orientation compte** : les tuiles reçoivent des triangles et doivent toutes finir
  pointées vers le haut.
- **Nombre de coups de mélange** : laisse 0 pour un brouillage complet, ou donne un petit
  nombre pour obtenir une grille exactement à ce nombre de tours de la solution. Ton but
  est alors de retrouver ces tours et de les défaire, donc un mélange de trois coups mérite
  une réponse en trois coups (même s’il existe parfois un trajet plus court).
`,Ee=e({default:()=>De}),De=`# Morts-vivants

La grille est un palais des glaces hanté. Chaque case sans miroir cache l’un de trois
monstres : un **fantôme**, un **vampire** ou un **zombie**. La légende au-dessus de la
grille te dit combien il en reste de chaque à placer, et le nombre à chaque position de
bord dit combien de monstres tu verrais en regardant dans la grille depuis là, en suivant
la ligne de vue tandis qu’elle rebondit sur les miroirs en diagonale.

Les miroirs changent ce que l’on voit. Un vampire n’a pas de reflet : il n’est compté que
tant que ta ligne de vue n’a pas encore rencontré de miroir. Le fantôme, c’est l’inverse :
invisible quand on le regarde en face, il n’apparaît qu’après une réflexion. Un zombie est
toujours vu. Si une ligne de vue traverse deux fois la même case, le monstre qui s’y trouve
est compté chaque fois qu’il est visible. Place tous les monstres pour que chaque nombre de
bord et chaque total soient justes.

## Commandes

Un nombre de bord passe au gris dès que sa ligne de vue est entièrement expliquée, et au
rouge quand il ne peut plus être satisfait ; un compte de la légende devient rouge quand
trop d’exemplaires de ce monstre ont été placés. Les notes au crayon ne servent qu’à toi et
n’ont jamais d’effet sur le casse-tête.

### Souris et tactile

- **Clic gauche** sur une case vide pour la faire passer par fantôme, vampire, zombie puis
  de nouveau vide. La case reste mise en évidence.
- Les touches à l’écran choisissent directement un monstre pour la case mise en évidence,
  sans faire défiler le cycle ; **⌫** vide la case, notes au crayon comprises.
- **✎** sur le pavé active les **notes au crayon** : le monstre que tu choisis est
  alors ajouté à la liste de candidats de la case (ou en est retiré).
- **Clic droit** sur une case pour ajouter les notes au crayon un candidat à la fois
  (fantôme, puis vampire, puis zombie, puis rien).
- **Regard** (l’œil à côté d’Annuler) trace les lignes de vue qui passent par la case mise
  en évidence, en rebondissant sur les miroirs, et entoure les nombres du bord aux deux
  bouts de chacune. Tant qu’il est activé, un clic sur un nombre du bord trace sa propre
  ligne ; clique de nouveau dessus pour la relâcher. Appuie de nouveau sur **Regard** pour
  le désactiver. Tant qu’il est activé, un clic sur une case qui n’est pas mise en
  évidence ne fait que la mettre en évidence, pour suivre une case vide sans la remplir ;
  clique de nouveau dessus pour la changer comme d’habitude.

### Clavier (Keyboard)

- Les flèches déplacent la mise en évidence. Enter fait défiler le monstre mis en
  évidence ; Space fait défiler ses notes au crayon.
- \`G\`, \`V\`, \`Z\` (ou \`1\`, \`2\`, \`3\`) mettent ce monstre dans la case mise en évidence, ou
  mettent et enlèvent sa note au crayon quand la case est en mode crayon. \`E\`, \`0\`,
  Backspace ou Delete vident la case, notes au crayon comprises.
- \`S\` est le bouton **Regard**.

## Paramètres

- **Largeur**, **Hauteur** — la taille de la grille, de 3×3 jusqu’à 54 cases en tout.
- **Difficulté** — les grilles _Facile_ cèdent en comptant le long d’une ligne de vue à la
  fois ; les _Normal_ demandent de peser les combinaisons qu’un trajet entier autorise ;
  les grilles _Délicat_ ne se terminent pas sans tenter une hypothèse.
`,Oe=e({default:()=>ke}),ke=`# Inégalités

Remplis la grille pour que chaque ligne et chaque colonne contienne chaque chiffre de 1
jusqu’à la taille de la grille exactement une fois — un carré latin — tout en respectant
les signes dessinés entre les cases voisines.

En mode **Inégalité**, les signes sont des symboles « plus grand que » : le côté ouvert
d’un \`>\` fait face au chiffre le plus grand et la pointe au plus petit. Toutes les paires
de voisines ne portent pas un signe, et plus le casse-tête est dur, moins il y a de signes.

En mode **Adjacent**, les signes sont de courtes barres voulant dire que les deux chiffres
diffèrent d’exactement un (comme 3 et 4). Ici chaque barre est toujours montrée, donc
l’**absence** de barre entre deux cases est aussi un indice : ces deux chiffres ne sont
certainement pas consécutifs.

Le casse-tête paraît dans les journaux sous le nom de Futoshiki.

## Commandes

Les chiffres qui enfreignent une règle — un doublon sur une ligne ou une colonne, ou un
signe qui ne tient pas — sont montrés en rouge, tout comme le signe fautif. Le casse-tête
est terminé quand chaque case est remplie et que rien n’est rouge.

### Souris et tactile

- **Clic gauche** sur une case pour la choisir, puis sers-toi des touches à l’écran pour
  y inscrire un chiffre. **⌫** sur le pavé vide de nouveau la case choisie. Cliquer une
  seconde fois sur la case choisie la désélectionne.
- **✎** sur le pavé active les **notes au crayon** : ce que tu choisis est alors ajouté
  à une petite liste de possibilités dans la case (ou en est retiré) au lieu d’y répondre.
  Remplir une case efface ses notes au crayon.
- **Clic droit** sur une case pour la choisir directement en mode notes au crayon.
- **Notes** dans le menu pause remplit chaque case vide de toutes les notes au crayon
  possibles, prêtes à être barrées ; **Indice** (l’ampoule à côté d’Annuler) fait la même
  chose mais laisse de côté celles qu’un raisonnement simple exclut déjà.
- **Surligner** (la loupe à côté d’Annuler) fait ressortir chaque case qui contient le
  même chiffre que la dernière case sur laquelle tu as cliqué, chiffres donnés compris, et
  affiche ce chiffre en gras parmi les notes au crayon. Appuie de nouveau dessus pour le
  désactiver.

### Clavier (Keyboard)

- **Tape un chiffre** pour remplir la case choisie ; \`0\`, Space ou Backspace la vide.
- Les flèches déplacent un curseur dans la grille ; Enter fait passer le curseur du
  remplissage des chiffres aux notes au crayon.
- \`M\` est le bouton **Notes**, \`H\` le bouton **Indice** et \`L\` le bouton **Surligner**.

## Paramètres

- **Mode** — Inégalité (signes « plus grand que ») ou Adjacent (barres entre chiffres
  consécutifs).
- **Taille (s×s)** — le nombre de lignes et de colonnes, de 3 à 9.
- **Difficulté** — la quantité de raisonnement demandée. Les grilles **Très facile** n’ont jamais
  besoin des signes : en mode Inégalité elles n’en ont aucun et sont de simples carrés latins, et en
  mode Adjacent les barres sont dessinées mais les chiffres donnés suffisent à eux seuls. Les
  grilles **Facile** ne demandent que le sens direct de chaque signe ; les **Moyen** demandent
  d’envisager des ensembles de cases ensemble ; les **Difficile** ajoutent le raisonnement
  ensembliste par position et les chaînes de forçage ; les grilles **Extrême** (disponibles via
  **Personnalisé…**) peuvent demander des tâtonnements, même si la solution reste unique.
`,Ae=e({default:()=>je}),je=`# Indiscipliné

Colorie chaque case de la grille en noir ou en blanc. Certaines cases sont données comme
indices et ne peuvent pas être changées ; les autres commencent en gris, et c’est à toi de
les remplir. À la fin, trois choses doivent être vraies :

- chaque ligne contient autant de cases noires que de blanches ;
- chaque colonne contient autant de cases noires que de blanches ;
- trois cases consécutives d’une ligne ou d’une colonne ne partagent jamais une couleur.

Les erreurs apparaissent en rouge : une série de trois cases identiques ou plus reçoit un
cadre rouge, et une case porte un **!** rouge quand sa ligne ou sa colonne contient déjà
trop de cette couleur. Dans la variante facultative « lignes et colonnes uniques », deux
lignes ne peuvent pas suivre le même motif (ni deux colonnes) ; les lignes identiques sont
barrées en rouge.

## Commandes

Les cases indices — celles dessinées avec un petit cadre à l’intérieur — ne peuvent pas
être changées. **Résoudre** remplit toute la grille. Le casse-tête est fini quand chaque
case est coloriée et que rien n’est en rouge.

### Souris et tactile

- **Clique** sur une case grise pour la rendre noire ; clique de nouveau pour la blanchir,
  et encore une fois pour l’effacer.
- **Un clic droit** parcourt le cycle dans l’autre sens : blanc, puis noir, puis vide.
- **Un clic milieu** efface une case directement.
- **Gomme** (le bouton gomme à côté d’Annuler) fait qu’un clic efface une case au lieu de
  la colorier. Appuie de nouveau dessus pour revenir au coloriage.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur dans la grille.
- **Enter** fait défiler la case sous le curseur comme un clic et **Space** comme
  un clic droit.
- **1** met du noir, **0** (ou **2**) met du blanc et **Backspace** efface.
- **E** est le bouton **Gomme**.

## Paramètres

- La **largeur** et la **hauteur** de la grille. Les deux doivent être paires, et valoir au
  moins 6.
- **Lignes et colonnes uniques** : quand c’est activé, deux lignes ne peuvent pas être
  identiques, ni deux colonnes (une ligne peut encore ressembler à une colonne). Les
  grilles très hautes ou très larges sont refusées dans ce mode, faute d’assez de lignes
  distinctes pour tout le monde.
- **Difficulté** : les grilles _Facile_ ne demandent jamais que deux arguments immédiats —
  deux cases identiques forcent la case à côté ou entre elles à l’autre couleur, et une
  ligne qui a déjà son compte d’une couleur reçoit l’autre couleur partout ailleurs. Les
  grilles _Normal_ demandent aussi de raisonner sur l’endroit où la dernière case d’une
  couleur peut encore aller dans une ligne sans créer une série de trois. Chaque
  casse-tête a exactement une solution.
`,Me=e({default:()=>Ne}),Ne=`# Démêler

Une poignée de points sont reliés par des segments, et les segments sont emmêlés. Déplace
les points jusqu’à ce qu’aucun segment n’en croise un autre. Chaque casse-tête peut être
démêlé : l’ordinateur a construit le graphe à partir d’une disposition sans croisement,
puis a redistribué les points sur un cercle.

Les segments qui en croisent actuellement un autre sont dessinés en rouge, l’enchevêtrement
rétrécit donc à vue d’œil pendant que tu travailles ; le casse-tête est résolu quand il ne
reste plus de rouge. Résoudre fait glisser chaque point vers une disposition dont
l’ordinateur sait qu’elle fonctionne.

## Commandes

Annuler reprend n’importe quel coup, y compris Résoudre.

### Souris et tactile

- **Glisse** un point et lâche-le où tu le veux. Le point que tu attrapes devient orange et
  ses voisins bleus. Lâcher un point dans la marge le pose au bord du plateau ; le lâcher
  entièrement hors du canevas annule le glissement.
- **Aimant** (le bouton grille à côté d’Annuler) active ou désactive une grille
  magnétique : les points lâchés se posent alors au centre des cases marquées de points
  pâles, comme la solution est disposée elle aussi. Le bouton reste allumé tant que la
  grille est active.

### Clavier (Keyboard)

- **Les flèches** déplacent un curseur de point en point dans cette direction. **Enter** ou
  **Space** prend le point ; les flèches le transportent alors (un huitième de case par
  appui, une case entière avec Maj, un seul pas avec Ctrl) et **Enter** ou **Space** le
  lâche.
- \`G\` est le bouton **Aimant**.

## Paramètres

- **Nombre de points** : combien de points a le graphe, au moins 4. Plus de points veut
  dire plus de segments et un enchevêtrement plus difficile. Le plateau grandit avec le
  nombre de points, il y a donc toujours la place de les étaler.
`,Pe=e({$dir:()=>`ltr`,$locale:()=>`fr`,$name:()=>q,default:()=>Fe,games:()=>Q,messages:()=>X,status:()=>Z,touchPhrases:()=>Y,tutorials:()=>$,ui:()=>J}),q=`Français`,J=JSON.parse(`{"appName":"Puzzlebox","menu":{"title":"Puzzlebox","tagline":"{n} casse-têtes de logique dessinés à la main. Choisis-en un et joue.","lockedNote":"Chaque casse-tête que tu termines à la main te rapporte un crédit. Dépense tes crédits ici pour ouvrir de nouveaux casse-têtes.","language":"Langue","stat":{"credits":{"one":"★ {n} crédit","other":"★ {n} crédits"},"unlocked":"Déverrouillés : {n} sur {total}","solved":"Résolus : {n}","tight":{"credits":"★ {n}","unlocked":"{n}/{total}","solved":"✓ {n}","achievements":"{n}/{total}"},"achievements":"Succès : {n} sur {total}"},"hint":{"allOpen":"Tout est ouvert.","complete":"Tu as déverrouillé toute la collection !","spend":{"one":"Dépense un crédit ci-dessous pour déverrouiller un casse-tête.","other":"Dépense tes crédits ci-dessous pour déverrouiller des casse-têtes."},"earn":"Termine n’importe quel casse-tête à la main pour gagner un crédit."},"card":{"label":"{name} : {description}","labelLocked":"{name} : {description} (verrouillé)","solvedTag":"✓ résolu ×{n}","unlock":"Déverrouiller · 1 crédit","unlocked":"{name} déverrouillé !","labelAlias":"{name} (aussi appelé {alias}) : {description}","labelLockedAlias":"{name} (aussi appelé {alias}) : {description} (verrouillé)"},"noCredit":"Résous un casse-tête à la main pour gagner un crédit, puis reviens déverrouiller celui-ci.","surprise":"Surprends-moi : ouvrir un casse-tête au hasard","search":{"placeholder":"Rechercher","label":"Rechercher les casse-têtes par nom","clear":"Effacer la recherche","empty":"Aucun casse-tête ici ne s’appelle « {q} ». Essaie un autre nom."},"privacy":{"note":"Puzzlebox compte comment ses casse-têtes sont joués — jamais qui y joue — pour les rendre meilleurs."},"continue":"Continuer","continueLabel":"Continuer {name}","spend":"Dépenser"},"notFound":{"title":"Ce casse-tête n’existe pas","body":"Nous n’avons pas de casse-tête appelé « {slug} ».","back":"Retour à tous les casse-têtes"},"locked":"{name} est encore verrouillé. Gagne un crédit en terminant un casse-tête, puis déverrouille-le.","pageTitle":"{name} · Puzzlebox","topbar":{"back":"Tous les casse-têtes","help":"Aide","creditsTitle":"Les crédits déverrouillent de nouveaux casse-têtes. Termine un casse-tête à la main pour en gagner un.","boardLabel":"Plateau de {name}"},"toolbar":{"type":"Type","custom":"Personnalisé…","new":"Nouveau","newTitle":"Nouvelle partie (N)","restart":"Recommencer","restartTitle":"Recommencer ce casse-tête","undo":"Annuler","undoTitle":"Annuler (U, Ctrl+Z)","redo":"Rétablir","redoTitle":"Rétablir (R, Ctrl+Y)","solve":"Résoudre","solveTitle":"Afficher la solution (Ctrl+S)","gameId":"Partager","gameIdTitle":"Partage ce casse-tête, ou joue celui qu’on t’a envoyé","keypad":"Pavé","keypadTitle":"Afficher des touches à l’écran","zoomOut":"−","zoomOutTitle":"Plus petit","zoomIn":"+","zoomInTitle":"Plus grand","tapPlace":"Appui : placer","tapMark":"Appui : marquer","tapTitle":"Ce que fait un appui simple","tapPlaceTitle":"Un appui place, un appui long marque. Appuie ici pour inverser.","tapMarkTitle":"Un appui marque, un appui long place. Appuie ici pour inverser.","hint":"Indice","hintTitle":"Révèle une case et continue à jouer. Jusqu’à {n} indices, tu gagnes quand même un crédit.","more":"Plus","pause":"Pause","pauseTitle":"Menu pause (Échap)"},"pause":{"title":"En pause","resume":"Reprendre"},"pager":{"label":"Pages","prev":"Page précédente","next":"Page suivante","page":"Page {n} sur {total}"},"badge":{"won":"Résolu !","lost":"Partie perdue"},"stage":{"generating":"Distribution d’un nouveau casse-tête…"},"keypad":{"label":"Pavé","clear":"Effacer","clearTitle":"Vider la case sélectionnée (Backspace)","pencil":"Notes au crayon","pencilOnTitle":"Les touches écrivent des notes au crayon. Appuie ici pour revenir aux réponses.","pencilOffTitle":"Active ce mode pour que les touches suivantes écrivent des notes au crayon"},"drawer":{"title":"Comment jouer à {name}","close":"Fermer","replay":"▶ Revoir le tutoriel","achievements":"Succès ({n}/{total})"},"dialog":{"ok":"OK","cancel":"Annuler","customTitle":"{name} : personnalisé","gameIdTitle":"Partager ce casse-tête","byDescription":"Par description","bySeed":"Par graine aléatoire","enterLabel":"Jouer un casse-tête précis : colle un code","play":"Jouer","copy":"Copier","copied":"Copié","link":"Lien","linkTitle":"Copier un lien qui ouvre exactement ce casse-tête","linkPrompt":"Lien vers ce casse-tête","shareLead":"Envoie exactement ce casse-tête à quelqu’un d’autre.","copyLink":"Copier le lien","linkCopied":"Lien copié","codes":"Codes du casse-tête","hintAd":{"title":"Encore un indice ?","body":"Tu as utilisé tes {n} indices gratuits. Un de plus et ce casse-tête ne rapportera pas de crédit — à moins de regarder une courte publicité pour le garder.","watch":"Regarder une pub, garder le crédit","anyway":"Prendre l’indice quand même"},"badCode":"Ce code n’ouvre aucun casse-tête {name}. Vérifie qu’il a bien été copié en entier."},"toast":{"creditEarned":"+1 crédit","tutorialComplete":"Tutoriel terminé. Voici un casse-tête tout neuf ; termine-le à la main pour gagner un crédit.","tutorialCompleteBack":"Tutoriel terminé. Retour à ton casse-tête.","tutorialSkipped":"Tutoriel passé. Tu peux le revoir à tout moment depuis l’aide.","tapModeMark":"Appuie pour marquer. Appui long pour l’action principale.","tapModePlace":"Appuie pour l’action principale. Appui long pour marquer.","touchHint":"Appuie pour jouer, appui long pour la seconde action. Le premier bouton rond inverse les deux.","hintNone":"Il n’y a plus rien à révéler sur ce plateau.","hintNoCredit":"Cela fait plus de {n} indices : ce casse-tête ne rapportera pas de crédit, mais tu peux toujours le terminer.","hintAdFailed":"Aucune publicité n’était disponible, donc rien n’a changé — l’indice t’attend toujours.","stuck":"Coincé ? Un indice révèle une case, et la grille te rapporte quand même son crédit."},"tutorial":{"label":"Tutoriel de {name}","step":"Étape {n} sur {total}","next":"Suivant","done":"Terminé","skipStep":"Passer l’étape","skipTutorial":"Passer le tutoriel","nice":"Bravo !","offScript":"Pas celui-là : le coup a été annulé pour que les étapes collent toujours au plateau. Essaie ce que demande cette étape.","offScriptRead":"C’est annulé, pour que les étapes collent toujours au plateau. Lis d’abord celle-ci.","pointer":{"drag":"glisser","rightClick":"clic droit","rightDrag":"glisser en clic droit","middleClick":"clic milieu","longPress":"appui long","longPressDrag":"glisser en appui long","twoFingerTap":"appui à deux doigts"}},"splash":{"tagline":"Des casse-têtes dessinés à la main, prêts à jouer","skip":"Passer"},"help":{"keypad":{"heading":"Le pavé","introTouch":"Les touches à l’écran écrivent pour toi","introPointer":"**Pavé** dans la barre d’outils affiche des touches à l’écran qui écrivent pour toi","select":" : choisis d’abord une case sur le plateau, puis appuie sur une touche.","clear":"- **⌫** vide de nouveau la case choisie.","pencil":"- **✎** active les notes au crayon : les touches écrivent alors de petites\\n  annotations au lieu de réponses. Appuie de nouveau dessus pour revenir aux réponses."}},"achievements":{"title":"Succès","summary":"{n} sur {total} obtenus","unlocked":"Succès débloqué","secret":{"name":"Succès secret","description":"Continue à jouer pour le découvrir."},"earnedOn":"Obtenu le {date}","progress":"{n} sur {goal}","collection":"La collection","tier":{"bronze":"Bronze","silver":"Argent","gold":"Or"},"meta":{"first-solve":{"name":"Premiers pas","description":"Résous ton premier casse-tête par toi-même."},"solves-10":{"name":"Échauffement","description":"Résous 10 casse-têtes."},"solves-50":{"name":"Pris au jeu","description":"Résous 50 casse-têtes."},"solves-100":{"name":"Centenaire","description":"Résous 100 casse-têtes."},"solves-250":{"name":"Grand maître","description":"Résous 250 casse-têtes."},"specialist":{"name":"Spécialiste","description":"Résous 10 casse-têtes dans le même jeu."},"variety-3":{"name":"Dégustation","description":"Résous un casse-tête dans 3 jeux différents."},"variety-10":{"name":"Touche-à-tout","description":"Résous un casse-tête dans 10 jeux différents."},"variety-all":{"name":"Toute la boîte","description":"Résous un casse-tête dans chaque jeu de la collection."},"unlock-first":{"name":"Nouvelle étagère","description":"Déverrouille ton premier jeu avec un crédit."},"unlock-15":{"name":"Collection grandissante","description":"Possède 15 jeux déverrouillés."},"unlock-25":{"name":"Trousseau de clés","description":"Possède 25 jeux déverrouillés."},"unlock-all":{"name":"Passe-partout","description":"Déverrouille tous les jeux de la collection."},"hardest-1":{"name":"Défi accepté","description":"Résous un casse-tête au réglage le plus difficile d’un jeu."},"hardest-10":{"name":"Chasseur de sommets","description":"Résous le réglage le plus difficile de 10 jeux différents."},"hardest-all":{"name":"Inébranlable","description":"Résous le réglage le plus difficile de chaque jeu."},"pure-1":{"name":"Sans rature","description":"Résous un casse-tête sans annulation ni indice."},"pure-25":{"name":"Main sûre","description":"Résous 25 casse-têtes sans annulation ni indice."},"quick-draw":{"name":"Plus vite que son ombre","description":"Résous un casse-tête en 30 secondes ou moins."},"marathon":{"name":"Marathonien","description":"Résous un casse-tête après y avoir passé plus de 20 minutes."},"comeback":{"name":"Jamais abattu","description":"Perds un casse-tête, puis reviens le résoudre."},"second-thoughts":{"name":"Réflexion faite","description":"Annule 100 fois et résous quand même le casse-tête."},"a-little-help":{"name":"Un petit coup de pouce","description":"Prends un indice."},"oops":{"name":"Oups","description":"Perds un casse-tête."},"night-owl":{"name":"Oiseau de nuit","description":"Résous un casse-tête entre minuit et 5 h du matin."},"on-a-roll":{"name":"Sur ta lancée","description":"Résous 5 casse-têtes en une seule séance."},"days-3":{"name":"Habitué","description":"Joue 3 jours différents."},"days-7":{"name":"Fidèle","description":"Joue 7 jours différents."},"days-30":{"name":"Fait partie des meubles","description":"Joue 30 jours différents."},"quick-study":{"name":"Vite appris","description":"Suis un tutoriel jusqu’au bout."},"scholar":{"name":"Érudit","description":"Suis 10 tutoriels différents jusqu’au bout."},"collector-25":{"name":"Collectionneur de badges","description":"Obtiens 25 succès."},"collector-60":{"name":"Vitrine à trophées","description":"Obtiens 60 succès."},"legend":{"name":"Légende du casse-tête","description":"Obtiens tous les autres succès."}},"andMore":{"one":"{n} succès débloqué","other":"{n} succès débloqués"}},"endgame":{"won":"Casse-tête résolu !","lost":"Partie perdue","credit":"★ +1 crédit — de quoi ouvrir un nouveau casse-tête de la collection.","wonNote":"Prêt pour le suivant ?","forfeitNote":"Pas de crédit pour celui-ci : la solution a été montrée en cours de route.","lostNote":"Celui-là t’a échappé. On retente ?","next":"Casse-tête suivant","retry":"Réessayer","dismiss":"Fermer et regarder le plateau","time":"Temps","moves":"Coups","hints":"Indice","best":"Record {time}","newBest":"Nouveau record !","stars":"{n} étoiles sur 3","stepUp":"Essayez {preset} →"},"welcome":{"title":"Choisis ton premier casse-tête","subtitle":{"one":"{n} casse-tête pour commencer. Choisis-le et joue.","other":"{n} casse-têtes pour commencer. Choisis-en un et joue."},"more":{"one":"…et {n} autre à débloquer","other":"…et {n} autres à débloquer"},"how":"Chaque casse-tête résolu te rapporte un crédit, et chaque crédit débloque un nouveau jeu."},"gamepad":{"connected":"Manette connectée"},"settings":{"title":"Réglages","done":"OK","sound":"Son","volume":"Volume","reduceMotion":"Réduire les animations","vibration":"Vibration","statistics":"Statistiques de jeu","on":"Oui","off":"Non","portalMuted":"Le site a coupé le son."}}`),Y=[[`fais un **clic gauche**`,`**Appuie**`],[`nouveau clic droit`,`nouvel appui long`],[`nouveau clic milieu`,`nouvel appui à deux doigts`],[`nouveau clic`,`nouvel appui`],[`double-clics`,`doubles appuis`],[`double-clic`,`double appui`],[`clics droits`,`appuis longs`],[`clic droit`,`appui long`],[`clics gauches`,`appuis`],[`clic gauche`,`appui`],[`clics du milieu`,`appuis à deux doigts`],[`clic du milieu`,`appui à deux doigts`],[`clics milieu`,`appuis à deux doigts`],[`clic milieu`,`appui à deux doigts`],[`cliquer`,`appuyer`],[`cliqués`,`appuyés`],[`cliqué`,`appuyé`],[`cliquant`,`appuyant`],[`cliquez`,`appuyez`],[`cliques`,`appuies`],[`clique`,`appuie`],[`clics`,`appuis`],[`clic`,`appui`]],X=JSON.parse(`{"4-way rotational symmetry needs a square grid":"La symétrie de rotation d’ordre 4 exige une grille carrée","A 2×2 grid is too small to make a puzzle from":"Une grille 2×2 est trop petite pour en faire un casse-tête","A cube rolling along a single row can never turn over all six faces":"Un cube qui roule sur une seule ligne ne peut jamais retourner ses six faces","A given piece leaves the grid":"Une pièce donnée sort de la grille","A jigsaw block is too big":"Un bloc jigsaw est trop grand","A jigsaw block is too small":"Un bloc jigsaw est trop petit","A killer cage is too big":"Une cage est trop grande","A killer cage is too small":"Une cage est trop petite","A wrapping puzzle needs a width and height of at least 3 to have a unique solution":"Une grille cyclique a besoin d’une largeur et d’une hauteur d’au moins 3 pour avoir une solution unique","All parameters must be whole numbers":"Tous les paramètres doivent être des nombres entiers","Already solved":"Déjà résolu","An edge cannot join a point to itself":"Une arête ne peut pas relier un point à lui-même","Angle offset out of bounds.":"Décalage d’angle hors limites.","At least one grid dimension must be greater than zero":"Au moins une dimension de la grille doit être supérieure à zéro","At least one of width and height for this grid type must be at least {0}":"Pour ce type de grille, la largeur ou la hauteur doit valoir au moins {0}","At least one of width and height must be greater than one":"La largeur ou la hauteur doit être supérieure à un","Bad character in grid description":"Caractère incorrect dans la description de la grille","Bad mine layout in game description":"Disposition des mines incorrecte dans la description de partie","Badly formatted move limit after grid description":"Limite de coups mal formée après la description de la grille","Barrier probability must be a number between 0 and 1":"La probabilité de barrière doit être un nombre entre 0 et 1","Barrier probability must be between 0 and 1":"La probabilité de barrière doit être comprise entre 0 et 1","Blue cells are placed where some faces could never reach them":"Des cases bleues sont placées là où certaines faces ne pourraient jamais les atteindre","Both dimensions must be at least 2":"Les deux dimensions doivent valoir au moins 2","Both grid dimensions must be at least one":"Les deux dimensions de la grille doivent valoir au moins un","Bridges per direction must be between 1 and {0}":"Le nombre de ponts par direction doit être compris entre 1 et {0}","Can't create {0}×{1} puzzles":"Impossible de créer des casse-têtes de {0}×{1}","Clue did not provide 2 direction flags":"L’indice ne fournit pas 2 marqueurs de direction","Clue is larger than the number of sides of its face":"L’indice dépasse le nombre de côtés de sa face","Clue is missing its number":"L’indice n’a pas de nombre","Clue number out of range":"Nombre d’indice hors limites","Colour out of range":"Couleur hors limites","Colour out of range in grid description":"Couleur hors limites dans la description de la grille","Colours, pegs and guesses must be whole numbers":"Les couleurs, les pions et les essais doivent être des nombres entiers","Column counts inconsistent":"Décomptes de colonnes incohérents","Could not four-colour the map":"Impossible de colorier la carte avec quatre couleurs","Count is larger than the line it describes":"Le compte dépasse la ligne qu’il décrit","Description contains a duplicate number":"La description contient un nombre en double","Description contains a number larger than the grid":"La description contient un nombre plus grand que la grille","Description contains a number out of range":"La description contient un nombre hors limites","Description contains a number that is too large":"La description contient un nombre trop grand","Description contains a repeated number":"La description contient un nombre répété","Description contains an unexpected character":"La description contient un caractère inattendu","Description contains invalid characters":"La description contient des caractères invalides","Description is corrupted":"La description est corrompue","Description is longer than expected":"La description est plus longue que prévu","Description is shorter than expected":"La description est plus courte que prévu","Description is too long":"La description est trop longue","Description is too short":"La description est trop courte","Description marks cells beyond the grid as blue":"La description marque en bleu des cases situées hors de la grille","Description may only contain P, H and O":"La description ne peut contenir que P, H et O","Description must be a comma-separated list of numbers":"La description doit être une liste de nombres séparés par des virgules","Description must be exactly {0} characters":"La description doit faire exactement {0} caractères","Description must be hex digits, a comma and a cell number":"La description doit contenir des chiffres hexadécimaux, une virgule et un numéro de case","Description must be numbers each followed by an orientation letter (u, l, d or r)":"La description doit être des nombres suivis chacun d’une lettre d’orientation (u, l, d ou r)","Description must be two hex strings separated by a comma":"La description doit être deux chaînes hexadécimales séparées par une virgule","Description must be {0} hexadecimal digits":"La description doit faire {0} chiffres hexadécimaux","Description must contain at least one edge":"La description doit contenir au moins une arête","Description must contain at least one peg":"La description doit contenir au moins un pion","Description must contain at least two islands":"La description doit contenir au moins deux îles","Description must contain each number from 1 to {0} exactly once":"La description doit contenir chaque nombre de 1 à {0} exactement une fois","Description must contain each row number from 1 to {0} exactly {1} times":"La description doit contenir chaque numéro de ligne de 1 à {0} exactement {1} fois","Description must contain only digits":"La description ne doit contenir que des chiffres","Description must contain only numbers":"La description ne doit contenir que des nombres","Description must contain {0} numbers":"La description doit contenir {0} nombres","Description must contain {0} tiles":"La description doit contenir {0} tuiles","Description must mark exactly {0} cells blue":"La description doit marquer exactement {0} cases en bleu","Description must start with {0} hex digits":"La description doit commencer par {0} chiffres hexadécimaux","Description places two islands next to each other":"La description place deux îles côte à côte","Description repeats a colour although duplicates are disallowed":"La description répète une couleur alors que les doublons sont interdits","Description too long":"Description trop longue","Description too long for board size":"Description trop longue pour la taille du plateau","Description too short":"Description trop courte","Description too short for board size":"Description trop courte pour la taille du plateau","Digits in a {0}×{1} puzzle cannot exceed {2}":"Dans une grille {0}×{1}, les chiffres ne peuvent pas dépasser {2}","Disallowing duplicates requires at least as many colours as pegs":"Interdire les doublons demande au moins autant de couleurs que de pions","Domino descriptions inconsistent":"Descriptions de dominos incohérentes","Dots too close together":"Points trop rapprochés","Duplicate edge in game description":"Arête en double dans la description de partie","Edge list defines the wrong number of regions":"La liste d’arêtes définit un nombre de régions incorrect","Entrance square must contain a piece leaving the left edge":"La case d’entrée doit contenir un tronçon qui sort par le bord gauche","Every killer cage must have exactly one sum":"Chaque cage killer doit avoir exactement une somme","Exit square must contain a piece leaving the bottom edge":"La case de sortie doit contenir un tronçon qui sort par le bord inférieur","Expansion factor must be a number":"Le facteur d’expansion doit être un nombre","Expansion factor may not be negative":"Le facteur d’expansion ne peut pas être négatif","Expansion factor must be from 0 to 100":"Le facteur d’expansion doit aller de 0 à 100","Expected ',' after block structure description":"',' attendue après la structure des blocs","Expected ',' after grid description":"Une ',' est attendue après la description de la grille","Expected a list of edges like 0-1,1-2 in game description":"Liste d’arêtes du type 0-1,1-2 attendue dans la description de partie","Expected comma before clue list":"Virgule attendue avant la liste d’indices","Expected jigsaw block structure in game description":"Structure de blocs jigsaw attendue dans la description de partie","Expected killer cage structure in game description":"Structure de cages killer attendue dans la description de partie","Expected killer clue grid in game description":"Grille d’indices killer attendue dans la description de partie","Expected slashes between clues":"Barres obliques attendues entre les indices","Expecting number in game description":"Nombre attendu dans la description de partie","Extra moves must not be negative":"Les coups supplémentaires ne doivent pas être négatifs","Extreme puzzles with more than {0} symbols take too long to generate":"Les grilles de niveau Extrême de plus de {0} symboles sont trop longues à générer","Faulty game description":"Description de partie défectueuse","Flags contradicting each other":"Marqueurs contradictoires","Flags go off grid":"Les marqueurs sortent de la grille","Game ID must include parameters":"Le code du casse-tête doit inclure les paramètres","Game description contained unexpected characters":"La description de partie contenait des caractères inattendus","Game description contains an unexpected character":"La description de partie contient un caractère inattendu","Game description contains no dots":"La description de partie ne contient aucun point","Game description contains unexpected characters":"La description de partie contient des caractères inattendus","Game description has {0} balls; expected {1}":"La description de partie a {0} boules ; il en fallait {1}","Game description is corrupted":"La description de partie est corrompue","Game description is longer than expected":"La description de partie est plus longue que prévu","Game description is shorter than expected":"La description de partie est plus courte que prévu","Game description is the wrong length":"La description de partie n’a pas la bonne longueur","Game description is too long":"La description de partie est trop longue","Game description is too short":"La description de partie est trop courte","Game description is wrong length":"La description de partie n’a pas la bonne longueur","Game description longer than expected":"Description de partie plus longue que prévu","Game description must be hexadecimal":"La description de partie doit être hexadécimale","Game description shorter than expected":"Description de partie plus courte que prévu","Game description too long":"Description de partie trop longue","Game is already solved":"La partie est déjà résolue","Grid area must be at least six squares":"L’aire de la grille doit valoir au moins six cases","Grid area must be greater than 1":"L’aire de la grille doit être supérieure à 1","Grid area must be greater than one":"L’aire de la grille doit être supérieure à un","Grid description is the wrong length or not hexadecimal":"La description de la grille n’a pas la bonne longueur ou n’est pas hexadécimale","Grid description strings not used with this grid type":"Les descriptions de grille ne sont pas utilisées avec ce type de grille","Grid dimensions cannot be negative":"Les dimensions de la grille ne peuvent pas être négatives","Grid dimensions must be at most {0}":"Les dimensions de la grille ne doivent pas dépasser {0}","Grid dimensions must be whole numbers":"Les dimensions de la grille doivent être des nombres entiers","Grid is too big":"La grille est trop grande","Grid must contain at least two squares":"La grille doit contenir au moins deux cases","Grid size must be between 3 and 9":"La taille de la grille doit être comprise entre 3 et 9","Grid size must be between {0} and {1}":"La taille de la grille doit être comprise entre {0} et {1}","Hard and Extreme puzzles are limited to a maximum number of {0}":"Les grilles Difficile et Extrême sont limitées à un maximum de {0}","Height must be at least 3":"La hauteur doit valoir au moins 3","Height must be at least five":"La hauteur doit valoir au moins cinq","Height must be at least one":"La hauteur doit valoir au moins un","Height must be at least the rotating block size":"La hauteur doit valoir au moins la taille du bloc tournant","Height must be at least two":"La hauteur doit valoir au moins deux","Illegal grid type":"Type de grille interdit","Incorrect number balance in game description":"Équilibre des nombres incorrect dans la description de partie","Initial x-coordinate was out of range":"La coordonnée x initiale était hors limites","Initial y-coordinate was out of range":"La coordonnée y initiale était hors limites","Internal error: solution is badly formatted":"Erreur interne : la solution est mal formée","Invalid character in block structure specification":"Caractère invalide dans la spécification de la structure des blocs","Invalid character in game description":"Caractère invalide dans la description de partie","Invalid character in grid specification":"Caractère invalide dans la spécification de la grille","Invalid character in number list":"Caractère invalide dans la liste de nombres","Invalid characters in game description":"Caractères invalides dans la description de partie","Invalid format grid description string.":"Chaîne de description de grille au format invalide.","Invalid parameters: {0}":"Paramètres invalides : {0}","Invalid syntax in game description":"Syntaxe invalide dans la description de partie","Jigsaw puzzles with more than {0} symbols take too long to generate":"Les grilles Jigsaw de plus de {0} symboles sont trop longues à générer","Killer puzzle dimensions must be smaller than 10":"Les dimensions d’une grille killer doivent être inférieures à 10","Malformed pending game description":"Description de partie en attente mal formée","Matrix description is the wrong length or not hexadecimal":"La description de la matrice n’a pas la bonne longueur ou n’est pas hexadécimale","Maximum face number must be a whole number":"Le numéro de face maximal doit être un nombre entier","Maximum face number must be at least one":"Le numéro de face maximal doit valoir au moins un","Maximum face number must be at most {0}":"Le numéro de face maximal ne doit pas dépasser {0}","Maximum of 9 colours":"Neuf couleurs au maximum","Medium puzzles need more than one bridge per direction, or loops disallowed":"Les grilles Moyen demandent plus d’un pont par direction, ou des boucles interdites","Mines solver opened a mine: inconsistent knowledge":"Le solveur du Démineur a ouvert une mine : connaissances incohérentes","Minimum number of balls may not be greater than maximum":"Le nombre minimal de boules ne peut pas dépasser le maximum","Missing grid description string.":"Chaîne de description de grille manquante.","Missing separator":"Séparateur manquant","Monster numbers do not match grid spaces":"Le nombre de monstres ne correspond pas aux places de la grille","More than one starting square specified":"Plus d’une case de départ indiquée","Multiple solutions exist for this puzzle":"Ce casse-tête a plusieurs solutions","Must have at least five regions":"Il faut au moins cinq régions","Must have at least one guess":"Il faut au moins un essai","Must have between {0} and {1} colours":"Il faut entre {0} et {1} couleurs","No game set up to solve":"Aucune partie à résoudre","No gems specified":"Aucune gemme indiquée","No solution exists for this position":"Cette position n’a aucune solution","No solution exists for this puzzle":"Ce casse-tête n’a aucune solution","No solution found":"Aucune solution trouvée","No starting square specified":"Aucune case de départ indiquée","Not enough data in block structure specification":"Données insuffisantes dans la spécification de la structure des blocs","Not enough data in grid description":"Données insuffisantes dans la description de la grille","Not enough data to fill grid":"Données insuffisantes pour remplir la grille","Not enough grid space to place all blue faces":"Pas assez de place dans la grille pour poser toutes les faces bleues","Not enough jigsaw blocks":"Pas assez de blocs jigsaw","Not enough killer cages":"Pas assez de cages","Not enough numbers given after grid specification":"Pas assez de nombres donnés après la spécification de la grille","Not enough space to place the solid on an empty cell":"Pas assez de place pour poser le solide sur une case vide","Number of colours must be at least three":"Le nombre de couleurs doit valoir au moins trois","Number of colours must be at least two":"Le nombre de couleurs doit valoir au moins deux","Number of points must be a whole number":"Le nombre de points doit être un nombre entier","Number of points must be at least {0}":"Le nombre de points doit valoir au moins {0}","Number of points must be at most {0}":"Le nombre de points ne doit pas dépasser {0}","Number of shuffling moves cannot be negative":"Le nombre de coups de mélange ne peut pas être négatif","Number of shuffling moves must be a whole number":"Le nombre de coups de mélange doit être un nombre entier","Number of shuffling moves must be at most 10000":"Le nombre de coups de mélange ne doit pas dépasser 10 000","Number of shuffling moves must be at most {0}":"Le nombre de coups de mélange ne doit pas dépasser {0}","Number out of range in game description":"Nombre hors limites dans la description de partie","Number too large":"Nombre trop grand","Out-of-range number in game description":"Nombre hors limites dans la description de partie","Out-of-range number in grid description":"Nombre hors limites dans la description de la grille","Parameters must be whole numbers":"Les paramètres doivent être des nombres entiers","Patch coordinates do not identify a usable grid fragment":"Les coordonnées du fragment ne désignent pas un morceau de grille utilisable","Patch offset out of bounds.":"Décalage du fragment hors limites.","Percentage of black squares must be between 5% and 100%":"Le pourcentage de cases noires doit être compris entre 5 % et 100 %","Percentage of islands must be from 1% to 30%":"Le pourcentage d’îles doit aller de 1 % à 30 %","Puzzle is inconsistent":"Le casse-tête est incohérent","Puzzle is too large":"Le casse-tête est trop grand","Puzzle is too long for unique-rows mode":"La grille est trop longue pour le mode lignes uniques","Puzzle is too tall for unique-rows mode":"La grille est trop haute pour le mode lignes uniques","Puzzle is unsolvable":"Le casse-tête est insoluble","Puzzle must have one entrance and one exit":"Le casse-tête doit avoir une entrée et une sortie","Puzzles with more than {0} symbols take too long to generate":"Les grilles de plus de {0} symboles sont trop longues à générer","Random seed must not be empty":"La graine aléatoire ne doit pas être vide","Rotating block size must be at least two":"La taille du bloc tournant doit valoir au moins deux","Row counts inconsistent":"Décomptes de lignes incohérents","Rows of blocks must be at least 1":"Le nombre de lignes de blocs doit valoir au moins 1","Scoring system not recognised":"Système de score non reconnu","Size and difficulty must be whole numbers":"La taille et la difficulté doivent être des nombres entiers","Size must be at least 5 for Adjacent puzzles of this difficulty":"La taille doit valoir au moins 5 pour les grilles Adjacent de cette difficulté","Size must be between {0} and {1}":"La taille doit être comprise entre {0} et {1}","Solution not known for this puzzle":"La solution de ce casse-tête n’est pas connue","Solve operation failed":"La résolution a échoué","Solve operation produced an invalid move":"La résolution a produit un coup invalide","Solver could not finish this grid":"Le solveur n’a pas pu terminer cette grille","Solving algorithm cannot complete this puzzle":"L’algorithme de résolution ne peut pas terminer ce casse-tête","Starting cell is outside the grid":"La case de départ est en dehors de la grille","Subtraction and division blocks must have area 2":"Les blocs de soustraction et de division doivent avoir une aire de 2","That grid has too many faces to generate":"Cette grille a trop de faces pour être générée","The Cross board is only available at {0}×{1}":"Le plateau en croix n’existe qu’en {0}×{1}","The Octagon board is only available at {0}×{1}":"Le plateau octogonal n’existe qu’en {0}×{1}","The ball has hit a mine; undo that move first":"La boule a heurté une mine ; annule d’abord ce coup","The grid can have at most {0} squares":"La grille peut avoir au plus {0} cases","The grid may have at most {0} squares":"La grille peut avoir au plus {0} cases","The initial square contains a mine":"La case de départ contient une mine","The solid cannot start on a blue cell":"Le solide ne peut pas démarrer sur une case bleue","The solution has already been revealed":"La solution a déjà été dévoilée","There must be at least one ball":"Il faut au moins une boule","There must be at least one mine":"Il faut au moins une mine","This arrangement cannot be solved":"Cette disposition ne peut pas être résolue","This game does not support the Solve operation":"Ce jeu ne permet pas l’opération Résoudre","This puzzle has no solution":"Ce casse-tête n’a pas de solution","This puzzle instance contains a contradiction":"Cette grille contient une contradiction","This puzzle is not self-consistent":"Ce casse-tête n’est pas cohérent avec lui-même","Too few clues for block structure":"Trop peu d’indices pour la structure des blocs","Too few clues for grid size":"Trop peu d’indices pour la taille de la grille","Too little data in clue list":"Trop peu de données dans la liste d’indices","Too little data in edge list":"Trop peu de données dans la liste d’arêtes","Too many balls to fit in the grid":"Trop de boules pour tenir dans la grille","Too many clues for block structure":"Trop d’indices pour la structure des blocs","Too many clues for grid size":"Trop d’indices pour la taille de la grille","Too many colours (at most {0})":"Trop de couleurs ({0} au maximum)","Too many colours makes given grid size impossible":"Trop de couleurs rend impossible la taille de grille demandée","Too many guesses (at most {0})":"Trop d’essais ({0} au maximum)","Too many jigsaw blocks":"Trop de blocs jigsaw","Too many killer cages":"Trop de cages","Too many mines for grid size":"Trop de mines pour la taille de la grille","Too many pegs per guess (at most {0})":"Trop de pions par essai ({0} au maximum)","Too many regions to fit in grid":"Trop de régions pour tenir dans la grille","Too much data in block structure specification":"Trop de données dans la spécification de la structure des blocs","Too much data in clue list":"Trop de données dans la liste d’indices","Too much data in edge list":"Trop de données dans la liste d’arêtes","Too much data to fill grid":"Trop de données pour remplir la grille","Too much data to fit in grid":"Trop de données pour tenir dans la grille","Trivial solutions are uninteresting":"Les solutions triviales n’ont aucun intérêt","Unable to build a grid for these parameters":"Impossible de construire une grille avec ces paramètres","Unable to build this grid":"Impossible de construire cette grille","Unable to find a solution for this puzzle":"Impossible de trouver une solution à ce casse-tête","Unable to find a solution from this position":"Impossible de trouver une solution depuis cette position","Unable to find a solution to this puzzle":"Impossible de trouver une solution à ce casse-tête","Unable to find a unique solution for this puzzle":"Impossible de trouver une solution unique à ce casse-tête","Unable to generate a puzzle of this size":"Impossible de générer un casse-tête de cette taille","Unable to generate a puzzle with these parameters":"Impossible de générer un casse-tête avec ces paramètres","Unable to solve this puzzle":"Impossible de résoudre ce casse-tête","Unable to support more than {0} distinct symbols":"Impossible de gérer plus de {0} symboles distincts","Unable to work out any more of this puzzle":"Impossible d’avancer davantage sur ce casse-tête","Unexpected additional character at end of game description":"Caractère supplémentaire inattendu à la fin de la description de partie","Unexpected additional data at end of game description":"Données supplémentaires inattendues à la fin de la description de partie","Unexpected character '{0}' in description":"Caractère « {0} » inattendu dans la description","Unexpected character in clue list":"Caractère inattendu dans la liste d’indices","Unexpected character in edge list":"Caractère inattendu dans la liste d’arêtes","Unexpected data at end of game description":"Données inattendues à la fin de la description de partie","Unknown board type":"Type de plateau inconnu","Unknown character in description":"Caractère inconnu dans la description","Unknown difficulty":"Difficulté inconnue","Unknown difficulty level":"Niveau de difficulté inconnu","Unknown difficulty rating":"Cote de difficulté inconnue","Unknown shape type":"Type de forme inconnu","Unknown symmetry":"Symétrie inconnue","Unknown symmetry type":"Type de symétrie inconnu","Unrecognised character in game description":"Caractère non reconnu dans la description de partie","Unrecognised characters in game description":"Caractères non reconnus dans la description de partie","Unrecognised clue type":"Type d’indice non reconnu","Unrecognised grid description.":"Description de grille non reconnue.","Unrecognised solid type":"Type de solide non reconnu","Width and height cannot both be two":"La largeur et la hauteur ne peuvent pas valoir deux toutes les deux","Width and height for this grid type must both be at least {0}":"Pour ce type de grille, la largeur et la hauteur doivent valoir au moins {0}","Width and height must be at least two":"La largeur et la hauteur doivent valoir au moins deux","Width and height must be at least {0}":"La largeur et la hauteur doivent valoir au moins {0}","Width and height must be at most twelve":"La largeur et la hauteur ne doivent pas dépasser douze","Width and height must be at most {0}":"La largeur et la hauteur ne doivent pas dépasser {0}","Width and height must be at most {0} to generate a puzzle":"La largeur et la hauteur ne doivent pas dépasser {0} pour générer un casse-tête","Width and height must be positive":"La largeur et la hauteur doivent être positives","Width and height must be whole numbers":"La largeur et la hauteur doivent être des nombres entiers","Width and height must both be at least 3":"La largeur et la hauteur doivent valoir toutes les deux au moins 3","Width and height must both be at least four":"La largeur et la hauteur doivent valoir toutes les deux au moins quatre","Width and height must both be at least one":"La largeur et la hauteur doivent valoir toutes les deux au moins un","Width and height must both be at least two":"La largeur et la hauteur doivent valoir toutes les deux au moins deux","Width and height must both be even":"La largeur et la hauteur doivent être paires toutes les deux","Width and height must both be greater than three":"La largeur et la hauteur doivent être toutes les deux supérieures à trois","Width and height must both be greater than two":"La largeur et la hauteur doivent être toutes les deux supérieures à deux","Width and height must both be greater than zero":"La largeur et la hauteur doivent être toutes les deux supérieures à zéro","Width and height must both be positive":"La largeur et la hauteur doivent être positives toutes les deux","With three colours, a solvable grid may have at most {0} squares":"Avec trois couleurs, une grille soluble peut avoir au plus {0} cases","Width must be at least 3":"La largeur doit valoir au moins 3","Width must be at least five":"La largeur doit valoir au moins cinq","Width must be at least one":"La largeur doit valoir au moins un","Width must be at least the rotating block size":"La largeur doit valoir au moins la taille du bloc tournant","Width must be at least two":"La largeur doit valoir au moins deux","Width, height and ball counts must be whole numbers":"La largeur, la hauteur et le nombre de boules doivent être des nombres entiers","Width, height and difficulty must be whole numbers":"La largeur, la hauteur et la difficulté doivent être des nombres entiers","Width, height and number of colours must be whole numbers":"La largeur, la hauteur et le nombre de couleurs doivent être des nombres entiers","Width, height, block size and move count must be whole numbers":"La largeur, la hauteur, la taille de bloc et le nombre de coups doivent être des nombres entiers","X puzzles need at least four symbols":"Les grilles X ont besoin d’au moins quatre symboles","X-diagonal jigsaw puzzles with more than {0} symbols take too long to generate":"Les grilles Jigsaw à diagonales X de plus de {0} symboles sont trop longues à générer","You have hit a mine; undo that move first":"Tu as heurté une mine ; annule d’abord ce coup","a cell may be a number position for only one rectangle":"une case ne peut porter le nombre que d’un seul rectangle","at least one column contains more numbers than will fit":"au moins une colonne contient plus de nombres qu'elle ne peut en accueillir","at least one row contains more numbers than will fit":"au moins une ligne contient plus de nombres qu'elle ne peut en accueillir","cells are not adjacent":"les cases ne sont pas voisines","domino layout: no path between singletons":"disposition des dominos : aucun chemin entre les cases isolées","domino layout: stranded square cannot be paired":"disposition des dominos : une case isolée ne peut pas être appariée","dot touches the outside twice":"le point touche deux fois l’extérieur","dot with fewer than two edges":"point avec moins de deux arêtes","edge does not follow its face":"l’arête ne suit pas sa face","edge shared by three faces":"arête partagée par trois faces","expected CxR or Nj":"CxR ou Nj attendu","expected WxH":"WxH attendu","expected WxHnN":"WxHnN attendu","expected a grid size":"une taille de grille était attendue","expected a maximum number":"un nombre maximal était attendu","expected a number of points":"un nombre de points était attendu","expected a solid letter followed by WxH":"une lettre de solide suivie de WxH était attendue","expected something like c6p4g10Bm":"quelque chose comme c6p4g10Bm était attendu","expected w<W>h<H>m<MIN>M<MAX>":"w<W>h<H>m<MIN>M<MAX> attendu","generateKeen: solver disagrees with the square":"generateKeen : le solveur n’est pas d’accord avec le carré","grid inconsistency while walking round a face":"incohérence de la grille en faisant le tour d’une face","inconsistent clues while assembling":"indices incohérents pendant l’assemblage","inconsistent distance field":"champ de distances incohérent","inconsistent face classes":"classes de faces incohérentes","latin rectangle could not be extended":"le rectangle latin n’a pas pu être étendu","latinGenerate: no extension found":"latinGenerate : aucune extension trouvée","latinSquare: rectangle could not be extended":"latinSquare : le rectangle n’a pas pu être étendu","line too long for solver":"ligne trop longue pour le solveur","no clue left to place":"plus aucun indice à placer","no such laser: {0}":"ce laser n’existe pas : {0}","rolled solid does not fit its destination":"le solide roulé ne rentre pas dans sa destination","shown":"dévoilée","too few row/column specifications":"trop peu de spécifications de lignes/colonnes","too many row/column specifications":"trop de spécifications de lignes/colonnes","unrecognised character in game description":"caractère non reconnu dans la description de partie","yes!":"oui !","9×9 Extreme puzzles take too long to generate; try 8×8 or Expert":"Les grilles 9×9 Extrême sont trop longues à générer ; essaie 8×8 ou Expert"}`),Z={moves:`Coups : {n}`,movesCompleted:{one:`Terminé en {n} coup`,other:`Terminé en {n} coups`},movesSinceSolve:`Coups depuis la résolution auto : {n}`,completedMoves:`Terminé ! Coups : {n}`,solvedByComputer:`Résolu par l’ordinateur`,completed:`Terminé !`,completedPrefix:`Terminé ! `,autoSolved:`Résolu automatiquement.`,autoSolvedPrefix:`Résolu automatiquement. `,autoSolverUsedPrefix:`Résolution automatique utilisée. `,failedPrefix:`Coups épuisés. `,dead:`Tu as marché sur une mine.`,target:` (objectif {n})`},Q=JSON.parse(`{"blackbox":{"name":"Boîte noire","description":"Trouve les boules cachées en tirant des lasers dans la boîte et en regardant où ils ressortent.","preset":{"5x5_3_balls":"5×5, 3 boules","8x8_5_balls":"8×8, 5 boules","8x8_3_6_balls":"8×8, 3-6 boules","10x10_5_balls":"10×10, 5 boules","10x10_4_10_balls":"10×10, 4-10 boules"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"no_of_balls":{"name":"Nombre de boules"}},"achievement":{"sparing_shots":{"name":"Tir économe","description":"Trouve toutes les boules en tirant des lasers depuis la moitié des ports au plus."},"pinpoint":{"name":"En plein dans le mille","description":"Trouve toutes les boules dans une boîte de 8×8 ou plus, en tirant au plus trois lasers par boule."},"shot_in_the_dark":{"name":"Au petit bonheur","description":"Fais vérifier tes boules sans avoir tiré un seul laser, et trompe-toi."}},"status":{"correct":"EXACT !","wrong":{"one":"Erreurs : {wrong}, boule manquée : {n}.","other":"Erreurs : {wrong}, boules manquées : {n}."},"marked":"Boules marquées : {n} / {range}  ·  Lasers tirés : {fired}","tooMany":{"one":"  ·  {n} boule marquée en trop.","other":"  ·  {n} boules marquées en trop."},"check":"  ·  Appuie sur le bouton du coin pour vérifier."}},"bridges":{"name":"Ponts","alsoKnownAs":"Hashiwokakero, Hashi","description":"Relie les îles par des ponts pour satisfaire chaque nombre, sans aucun croisement.","preset":{"7x7_easy":"7×7 Facile","7x7_medium":"7×7 Moyen","7x7_hard":"7×7 Difficile","10x10_easy":"10×10 Facile","10x10_medium":"10×10 Moyen","10x10_hard":"10×10 Difficile","15x15_easy":"15×15 Facile","15x15_medium":"15×15 Moyen","15x15_hard":"15×15 Difficile","10x10_medium_no_loops":"10×10 Moyen, sans boucles"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"difficulty":{"name":"Difficulté","choice":{"easy":"Facile","medium":"Moyen","hard":"Difficile"}},"allow_loops":{"name":"Autoriser les boucles"},"max_bridges_per_direction":{"name":"Ponts max. par direction","choice":{"1":"1","2":"2","3":"3","4":"4"}},"of_island_squares":{"name":"% de cases-îles","choice":{"5":"5 %","10":"10 %","15":"15 %","20":"20 %","25":"25 %","30":"30 %"}},"expansion_factor":{"name":"Facteur d’expansion (%)","choice":{"0":"0 %","10":"10 %","20":"20 %","30":"30 %","40":"40 %","50":"50 %","60":"60 %","70":"70 %","80":"80 %","90":"90 %","100":"100 %"}}},"action":{"e":{"label":"Gomme","title":"Faire glisser depuis une île pour retirer ses ponts dans cette direction (E)"},"g":{"label":"Repères","title":"Afficher ou masquer un trait léger partout où un pont pourrait passer (G)"}},"achievement":{"no_markers":{"name":"Eaux claires","description":"Résous une grille de 10×10 ou plus sans noter une seule marque « pas de pont ici »."},"sure_footing":{"name":"Pied sûr","description":"Résous une grille Difficile de 10×10 ou plus sans retirer de pont ni utiliser Annuler."}}},"cube":{"name":"Cube","description":"Fais rouler un solide sur une grille pour ramasser toutes les cases bleues sur ses faces.","preset":{"cube":"Cube","tetrahedron":"Tétraèdre","octahedron":"Octaèdre","icosahedron":"Icosaèdre"},"config":{"type_of_solid":{"name":"Type de solide","choice":{"tetrahedron":"Tétraèdre","cube":"Cube","octahedron":"Octaèdre","icosahedron":"Icosaèdre"}},"width_top":{"name":"Largeur / haut"},"height_bottom":{"name":"Hauteur / bas"}},"achievement":{"short_haul":{"name":"Petit trajet","description":"Termine le Cube, toutes faces bleues, en vingt coups au plus."},"octahedron_ace":{"name":"Huit faces express","description":"Termine l’Octaèdre, toutes faces bleues, en trente coups au plus."},"scenic_route":{"name":"Grand tour","description":"Fais rouler le solide au moins deux cents fois avant que toutes ses faces soient bleues."}}},"dominosa":{"name":"Dominosa","description":"Retrouve où se cachent les dominos mélangés dans une grille de nombres.","preset":{"up_to_double_3":"Jusqu’au double 3","up_to_double_4":"Jusqu’au double 4","up_to_double_5":"Jusqu’au double 5","up_to_double_6":"Jusqu’au double 6","up_to_double_7":"Jusqu’au double 7","up_to_double_8":"Jusqu’au double 8","up_to_double_9":"Jusqu’au double 9"},"config":{"maximum_number_on_dominoes":{"name":"Nombre maximal sur les dominos"},"difficulty":{"name":"Difficulté","choice":{"very_easy":"Très facile","easy":"Facile","hard":"Difficile","extreme":"Extrême","ambiguous":"Ambigu"}}},"achievement":{"no_lines":{"name":"Pas besoin de crayon","description":"Résous un jeu jusqu’au double 6 ou plus sans noter un seul trait."},"one_click_each":{"name":"Un clic chacun","description":"Résous un jeu jusqu’au double 6 ou plus avec un clic par domino et sans Annuler."},"doubles_first":{"name":"Les doubles d’abord","description":"Pose tous les doubles du jeu avant de poser tout autre domino."}}},"fifteen":{"name":"Quinze","alsoKnownAs":"Taquin, jeu de taquin","description":"Fais glisser les tuiles pour les remettre dans l’ordre.","preset":{"3x3":"3×3","4x4":"4×4","5x5":"5×5"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"}},"achievement":{"short_shuffle":{"name":"Petit mélange","description":"Remets le 4×4 en ordre en 100 coups ou moins."},"five_flyer":{"name":"Éclair en 5×5","description":"Remets le 5×5 en ordre en moins de trois minutes."},"scenic_route":{"name":"Le chemin des écoliers","description":"Mets plus de 300 coups à remettre le 3×3 en ordre."}}},"filling":{"name":"Remplissage","alsoKnownAs":"Fillomino","description":"Remplis la grille pour que chaque groupe de chiffres égaux compte exactement autant de cases.","preset":{"9x7":"9×7","13x9":"13×9","17x13":"17×13"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"}},"action":{"f":{"label":"Remplir","title":"Faire glisser depuis un chiffre pour l’écrire dans chaque case traversée (F)"}},"achievement":{"in_ink":{"name":"Écrit à l’encre","description":"Résous un Remplissage sans changer ni effacer aucun chiffre, et sans Annuler."},"one_stroke":{"name":"Chacun d’un coup","description":"Résous un Remplissage de 13×9 ou plus en écrivant chaque groupe de chiffres en un seul coup."}}},"flip":{"name":"Bascule","alsoKnownAs":"Lights Out","description":"Allume toutes les cases ; chaque pression retourne aussi celles qui l’entourent.","preset":{"3x3_crosses":"3×3 Croix","4x4_crosses":"4×4 Croix","5x5_crosses":"5×5 Croix","3x3_random":"3×3 Aléatoire","4x4_random":"4×4 Aléatoire","5x5_random":"5×5 Aléatoire"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"shape_type":{"name":"Type de figure","choice":{"crosses":"Croix","random":"Aléatoire"}}},"achievement":{"press_once":{"name":"Une seule pression","description":"Allume un plateau de 4×4 ou plus sans actionner deux fois la même case."},"fewest_presses":{"name":"Moindre effort","description":"Allume un plateau de 5×5 avec le plus petit nombre de pressions possible."}}},"flood":{"name":"Inondation","alsoKnownAs":"Flood It","description":"Inonde la grille depuis le coin jusqu’à ce qu’elle soit d’une seule couleur, sans dépasser la limite de coups.","preset":{"12x12_easy":"12×12 Facile","12x12_medium":"12×12 Moyen","12x12_hard":"12×12 Difficile","16x16_medium":"16×16 Moyen","16x16_hard":"16×16 Difficile","12x12_3_colours":"12×12, 3 couleurs","12x12_4_colours":"12×12, 4 couleurs"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"colours":{"name":"Couleurs"},"extra_moves_permitted":{"name":"Coups supplémentaires autorisés"}},"achievement":{"spare_moves":{"name":"Coups en réserve","description":"Inonde la grille en gardant au moins trois coups en réserve."},"beat_the_solver":{"name":"Plus fort que la machine","description":"Inonde la grille en moins de coups que la solution de l’ordinateur."},"one_colour_short":{"name":"À une couleur près","description":"Épuise tes coups alors qu’il ne reste que deux couleurs sur la grille."}},"status":{"moves":"{n} / {limit} coups"}},"galaxies":{"name":"Galaxies","alsoKnownAs":"Spiral Galaxies, Tentai Show","description":"Découpe la grille en régions, chacune symétrique autour de l’unique point qu’elle contient.","preset":{"7x7_medium":"7×7 Moyen","7x7_extreme":"7×7 Extrême","10x10_medium":"10×10 Moyen","15x15_medium":"15×15 Moyen"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"difficulty":{"name":"Difficulté","choice":{"medium":"Moyen","extreme":"Extrême"}}},"achievement":{"no_arrows":{"name":"Sans flèches","description":"Résous une grille de Galaxies de 10×10 ou plus sans faire glisser une seule flèche."},"steady_hand":{"name":"Étoiles fixes","description":"Résous une grille de Galaxies de 10×10 ou plus sans enlever de mur ni utiliser Annuler."}}},"guess":{"name":"Devinette","alsoKnownAs":"Mastermind","description":"Devine la rangée cachée de pions colorés à partir des marques de tes essais.","preset":{"standard":"Standard","super":"Super"},"config":{"colours":{"name":"Couleurs"},"pegs_per_guess":{"name":"Pions par essai"},"guesses":{"name":"Essais"},"allow_blanks":{"name":"Autoriser les trous vides"},"allow_duplicates":{"name":"Autoriser les doublons"}},"action":{"k":{"label":"Retenir","title":"Cliquer sur un pion de ta rangée pour le reporter dans l’essai suivant (K)"},"l":{"label":"Lettres","title":"Étiqueter les pions avec des lettres (L)"}},"achievement":{"five_guesses":{"name":"Casseur de code","description":"Trouve la rangée cachée en cinq essais ou moins."},"super_sleuth":{"name":"Super détective","description":"Trouve la rangée cachée Super de cinq pions en six essais ou moins."},"so_near":{"name":"Si près du but","description":"Épuise tes essais avec tous les pions bien placés sauf un."}},"status":{"revealed":"Solution dévoilée","solved":{"one":"Résolu en {n} essai","other":"Résolu en {n} essais"},"outOfGuesses":"Plus d’essais : la solution est dévoilée","guessN":"Essai {n} sur {total}"}},"inertia":{"name":"Inertie","description":"Fais glisser une boule sur une grille pour ramasser toutes les gemmes sans toucher de mine.","preset":{"10x8":"10×8","15x12":"15×12","20x16":"20×16"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"}},"achievement":{"hat_trick":{"name":"Coup du chapeau","description":"Ramasse trois gemmes ou plus en un seul lancer de la boule."},"shortcut":{"name":"Raccourci","description":"Ramasse toutes les gemmes d’un plateau de 15×12 ou plus en moins de lancers que Résoudre."},"last_gem_mine":{"name":"Victoire à la Pyrrhus","description":"Roule sur une mine avec le lancer même qui ramasse la toute dernière gemme."}},"status":{"gems":"Gemmes : {n}","deaths":" · Morts : {n}"}},"keen":{"name":"Keen","alsoKnownAs":"KenKen, Calcudoku","description":"Remplis le carré latin pour que chaque cage respecte son indice arithmétique.","preset":{"4x4_easy":"4×4 Facile","5x5_easy":"5×5 Facile","5x5_easy_x_only":"5×5 Facile, × seul","6x6_easy":"6×6 Facile","6x6_medium":"6×6 Moyen","6x6_medium_x_only":"6×6 Moyen, × seul","6x6_hard":"6×6 Difficile","6x6_expert":"6×6 Expert","6x6_extreme":"6×6 Extrême","9x9_medium":"9×9 Moyen"},"config":{"grid_size":{"name":"Taille de la grille"},"difficulty":{"name":"Difficulté","choice":{"easy":"Facile","medium":"Moyen","hard":"Difficile","expert":"Expert","extreme":"Extrême"}},"multiplication_only":{"name":"Multiplication seule"}},"action":{"m":{"label":"Notes","title":"Noter au crayon toutes les possibilités dans chaque case vide (M)"},"l":{"label":"Surligner","title":"Faire ressortir chaque case qui contient le dernier chiffre touché (L)"}},"achievement":{"no_pencil":{"name":"Calcul mental","description":"Résous un Keen de 6×6 ou plus sans écrire une seule note au crayon."},"products_only":{"name":"Produit pur","description":"Résous un Keen 6×6 Moyen avec des multiplications uniquement."}}},"lightup":{"name":"Éclairage","alsoKnownAs":"Akari, Light Up","description":"Place des ampoules pour éclairer chaque case sans qu’aucune ampoule n’en éclaire une autre.","preset":{"7x7_easy":"7×7 Facile","7x7_medium":"7×7 Moyen","7x7_hard":"7×7 Difficile","10x10_easy":"10×10 Facile","10x10_medium":"10×10 Moyen","10x10_hard":"10×10 Difficile","14x14_easy":"14×14 Facile","14x14_medium":"14×14 Moyen","14x14_hard":"14×14 Difficile"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"of_black_squares":{"name":"% de cases noires"},"symmetry":{"name":"Symétrie","choice":{"none":"Aucune","2_way_mirror":"Miroir double","2_way_rotational":"Rotation double","4_way_mirror":"Miroir quadruple","4_way_rotational":"Rotation quadruple"}},"difficulty":{"name":"Difficulté","choice":{"easy":"Facile","medium":"Moyen","hard":"Difficile"}}},"action":{"x":{"label":"Croix","title":"Les clics posent des croix au lieu d’ampoules (X)"}},"achievement":{"no_crosses":{"name":"Rien que des lumières","description":"Résous un Éclairage de 10×10 ou plus sans noter une seule croix."},"no_takebacks":{"name":"Idée lumineuse","description":"Résous un Éclairage Difficile sans jamais enlever d’ampoule."}}},"loopy":{"name":"Boucles","alsoKnownAs":"Slitherlink","description":"Trace une seule boucle fermée pour que chaque nombre compte les traits autour de lui.","preset":{"7x7_squares_easy":"7×7 Carrés Facile","10x10_squares_easy":"10×10 Carrés Facile","7x7_squares_medium":"7×7 Carrés Moyen","10x10_squares_medium":"10×10 Carrés Moyen","7x7_squares_expert":"7×7 Carrés Expert","10x10_squares_expert":"10×10 Carrés Expert","10x10_triangular_expert":"10×10 Triangulaire Expert","12x10_honeycomb_expert":"12×10 Nid d’abeille Expert","7x7_snub_square_expert":"7×7 Carré adouci Expert","9x9_cairo_expert":"9×9 Cairo Expert","5x4_great_hexagonal_expert":"5×4 Grand hexagonal Expert","7x7_octagonal_expert":"7×7 Octogonal Expert","5x5_kites_expert":"5×5 Cerfs-volants Expert","5x5_floret_expert":"5×5 Floral Expert","5x4_dodecagonal_expert":"5×4 Dodécagonal Expert","5x4_great_dodecagonal_expert":"5×4 Grand dodécagonal Expert","10x10_penrose_kite_dart_expert":"10×10 Penrose (cerf-volant/fléchette) Expert","10x10_penrose_rhombs_expert":"10×10 Penrose (losanges) Expert"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"grid_type":{"name":"Type de grille","choice":{"squares":"Carrés","triangular":"Triangulaire","honeycomb":"Nid d’abeille","snub_square":"Carré adouci","cairo":"Cairo","great_hexagonal":"Grand hexagonal","octagonal":"Octogonal","kites":"Cerfs-volants","floret":"Floral","dodecagonal":"Dodécagonal","great_dodecagonal":"Grand dodécagonal","penrose_kite_dart":"Penrose (cerf-volant/fléchette)","penrose_rhombs":"Penrose (losanges)"}},"difficulty":{"name":"Difficulté","choice":{"easy":"Facile","medium":"Moyen","hard":"Difficile","expert":"Expert"}}},"action":{"x":{"label":"Croix","title":"Les clics barrent les arêtes au lieu de tracer des lignes (X)"}},"achievement":{"off_grid":{"name":"Hors des sentiers battus","description":"Résous une grille de Boucles sur un pavage autre que les carrés."},"no_crosses":{"name":"Rien que la boucle","description":"Résous une grille de Boucles 10×10 sans barrer une seule arête."},"aperiodic":{"name":"Apériodique","description":"Résous une grille de Boucles Penrose sans jamais enlever une ligne tracée."}}},"magnets":{"name":"Aimants","description":"Place aimants et dominos neutres pour que les comptes de pôles tombent juste.","preset":{"6x5_easy":"6×5 Facile","6x5_hard":"6×5 Difficile","6x5_hard_strip_clues":"6×5 Difficile, indices élagués","8x7_easy":"8×7 Facile","8x7_hard":"8×7 Difficile","8x7_hard_strip_clues":"8×7 Difficile, indices élagués","10x9_hard":"10×9 Difficile","10x9_hard_strip_clues":"10×9 Difficile, indices élagués"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"difficulty":{"name":"Difficulté","choice":{"easy":"Facile","hard":"Difficile"}},"strip_clues":{"name":"Élaguer les indices"}},"action":{"b":{"label":"Neutre","title":"Les clics marquent les dominos neutres au lieu de poser des aimants (B)"}},"achievement":{"no_flips":{"name":"Dans le bon sens","description":"Résous une grille d’Aimants de 8×7 ou plus sans jamais retourner un aimant."},"stripped":{"name":"Fils dénudés","description":"Résous une grille d’Aimants 10×9 Difficile, indices élagués, en moins de dix minutes."}}},"map":{"name":"Carte","description":"Colorie la carte avec quatre couleurs sans que deux régions voisines se ressemblent.","preset":{"20x15_easy_30_regions":"20×15 Facile, 30 régions","20x15_medium_30_regions":"20×15 Moyen, 30 régions","20x15_hard_30_regions":"20×15 Difficile, 30 régions","20x15_extreme_30_regions":"20×15 Extrême, 30 régions","30x25_medium_75_regions":"30×25 Moyen, 75 régions","30x25_hard_75_regions":"30×25 Difficile, 75 régions"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"regions":{"name":"Régions"},"difficulty":{"name":"Difficulté","choice":{"easy":"Facile","medium":"Moyen","hard":"Difficile","extreme":"Extrême"}}},"action":{"l":{"label":"Numéros","title":"Afficher un numéro dans chaque région (L)"}},"achievement":{"no_dots":{"name":"Atlas à main levée","description":"Résous une Carte Difficile ou plus dure sans un seul point au crayon."},"steady_brush":{"name":"Pinceau sûr","description":"Résous une Carte Extrême sans jamais changer la couleur d’une région."}}},"mines":{"name":"Mines","alsoKnownAs":"Démineur","description":"Découvre toutes les cases qui ne cachent pas de mine ; tu n’as jamais à deviner.","preset":{"9x9_beginner_10_mines":"9×9 Débutant, 10 mines","9x9_35_mines":"9×9, 35 mines","16x16_intermediate_40_mines":"16×16 Intermédiaire, 40 mines","16x16_99_mines":"16×16, 99 mines","30x16_expert_99_mines":"30×16 Expert, 99 mines","30x16_170_mines":"30×16, 170 mines"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"mines":{"name":"Mines"},"ensure_solubility":{"name":"Garantir la solubilité"}},"achievement":{"no_flags":{"name":"Sans drapeau","description":"Gagne une partie de Mines sans planter un seul drapeau."},"expert_sweep":{"name":"Démineur d’élite","description":"Gagne le plateau Expert 30×16 en moins de cinq minutes."},"so_close":{"name":"À un cheveu","description":"Marche sur une mine alors qu’il ne reste pas plus de trois cases sûres à ouvrir."}},"status":{"marked":"Marquées : {n} / {total}","deaths":" · Morts : {n}"}},"net":{"name":"Réseau","alsoKnownAs":"NetWalk","description":"Fais pivoter les tuiles jusqu’à ce que toutes soient reliées au centre.","preset":{"5x5":"5×5","7x7":"7×7","9x9":"9×9","11x11":"11×11","13x11":"13×11","5x5_wrapping":"5×5 cyclique","7x7_wrapping":"7×7 cyclique","9x9_wrapping":"9×9 cyclique","11x11_wrapping":"11×11 cyclique","13x11_wrapping":"13×11 cyclique"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"walls_wrap_around":{"name":"Bords cycliques"},"barrier_probability":{"name":"Probabilité de barrière"},"ensure_unique_solution":{"name":"Garantir une solution unique"}},"action":{"k":{"label":"Verrou","title":"Cliquer sur les tuiles pour les verrouiller ou les déverrouiller au lieu de les tourner (K)"},"j":{"label":"Mélanger","title":"Faire tourner au hasard chaque tuile non verrouillée (J)"},"scroll_left":{"label":"←","title":"Faire défiler la vue vers la gauche (Maj+←)"},"scroll_up":{"label":"↑","title":"Faire défiler la vue vers le haut (Maj+↑)"},"scroll_down":{"label":"↓","title":"Faire défiler la vue vers le bas (Maj+↓)"},"scroll_right":{"label":"→","title":"Faire défiler la vue vers la droite (Maj+→)"}},"achievement":{"no_locks":{"name":"Rien sous clé","description":"Résous un Réseau de 9×9 ou plus sans verrouiller une seule tuile."},"not_a_turn_wasted":{"name":"Pas un tour de trop","description":"Résous un Réseau de 9×9 ou plus sans tourner une tuile plus que nécessaire."},"jumbled":{"name":"Tout chamboulé","description":"Appuie sur Mélanger et résous quand même le casse-tête."}},"status":{"active":"Actives : {n}/{total}"}},"netslide":{"name":"Réseau coulissant","description":"Fais coulisser lignes et colonnes de tuiles jusqu’à ce que tout soit relié.","preset":{"3x3_easy":"3×3 facile","3x3_medium":"3×3 moyen","3x3_hard":"3×3 difficile","4x4_easy":"4×4 facile","4x4_medium":"4×4 moyen","4x4_hard":"4×4 difficile","5x5_easy":"5×5 facile","5x5_medium":"5×5 moyen","5x5_hard":"5×5 difficile"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"walls_wrap_around":{"name":"Bords cycliques"},"barrier_probability":{"name":"Probabilité de barrière"},"number_of_shuffling_moves":{"name":"Nombre de coups de mélange"}},"achievement":{"tidy_four":{"name":"Recâblage soigné","description":"Résous un Réseau coulissant 4×4 en 18 glissements ou moins."},"lean_five":{"name":"Monteur de lignes","description":"Résous un Réseau coulissant 5×5 en 32 glissements ou moins."},"big_switch":{"name":"Le grand basculement","description":"Allume tout le réseau d’un seul glissement alors que moins de la moitié était allumée."}},"status":{"active":" · Actives : {n}/{total}"}},"pattern":{"name":"Motif","alsoKnownAs":"Picross, logimage, nonogramme","description":"Remplis la grille à partir des longueurs de séries données pour chaque ligne et chaque colonne.","preset":{"10x10":"10×10","15x15":"15×15","20x20":"20×20","25x25":"25×25","30x30":"30×30"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"}},"action":{"e":{"label":"Gomme","title":"Cliquer ou faire glisser pour remettre des cases à l’état inconnu (E)"}},"achievement":{"no_dots":{"name":"Pas un point","description":"Résous un Motif de 15×15 ou plus sans poser un seul point."},"inked_in":{"name":"Encré","description":"Résous un Motif de 20×20 ou plus sans jamais effacer une case noire."}}},"pearl":{"name":"Perles","alsoKnownAs":"Masyu","description":"Trace une seule boucle fermée qui traverse tout droit les perles blanches et tourne sur les noires.","preset":{"6x6_easy":"6×6 Facile","6x6_tricky":"6×6 Délicat","8x8_easy":"8×8 Facile","8x8_tricky":"8×8 Délicat","10x10_easy":"10×10 Facile","10x10_tricky":"10×10 Délicat","12x8_easy":"12×8 Facile","12x8_tricky":"12×8 Délicat"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"difficulty":{"name":"Difficulté","choice":{"easy":"Facile","tricky":"Délicat"}},"allow_unsoluble":{"name":"Autoriser les grilles insolubles"}},"action":{"x":{"label":"Croix","title":"Cliquer ou faire glisser pour barrer les arêtes que la boucle ne peut pas emprunter (X)"}},"achievement":{"no_crosses":{"name":"Collier de perles","description":"Résous une grille de Perles 10×10 sans poser une seule croix."},"one_stroke":{"name":"D’un seul trait","description":"Trace toute la boucle d’une grille de Perles de 8×8 ou plus en un seul glissement."}}},"pegs":{"name":"Pions","alsoKnownAs":"Solitaire","description":"Fais sauter les pions les uns par-dessus les autres jusqu’à n’en laisser qu’un.","preset":{"cross":"Croix","octagon":"Octogone","random_5x5":"Aléatoire 5×5","random_7x7":"Aléatoire 7×7","random_9x9":"Aléatoire 9×9"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"board_type":{"name":"Type de plateau","choice":{"cross":"Croix","octagon":"Octogone","random":"Aléatoire"}}},"achievement":{"dead_centre":{"name":"En plein centre","description":"Termine le plateau Croix avec le dernier pion dans le trou central."},"hopscotch":{"name":"Marelle","description":"Gagne une partie de Pions avec un pion qui saute quatre fois d’affilée."},"pegged_out":{"name":"Coincé","description":"Retrouve-toi bloqué avec dix pions ou plus encore sur le plateau."}},"status":{"stuck":"Plus aucun coup — il reste {n} pions","playing":"Pions restants : {n}  ·  Coups : {moves}"}},"range":{"name":"Portée","alsoKnownAs":"Kurodoko, Kuromasu","description":"Noircis des cases pour que chaque nombre voie exactement autant de cases blanches sur sa ligne et sa colonne.","preset":{"9x6":"9×6","12x8":"12×8","13x9":"13×9","16x11":"16×11"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"}},"action":{"e":{"label":"Gomme","title":"Cliquer ou faire glisser pour effacer les cases noires et les points (E)"}},"achievement":{"no_dots":{"name":"Pur contraste","description":"Résous une Portée de 13×9 ou plus sans poser un seul point."},"quick_sight":{"name":"Coup d’œil","description":"Résous une Portée 16×11 en moins de cinq minutes."}}},"rect":{"name":"Rectangles","alsoKnownAs":"Shikaku","description":"Découpe la grille en rectangles contenant chacun un nombre égal à son aire.","preset":{"7x7":"7×7","9x9":"9×9","11x11":"11×11","13x13":"13×13","15x15":"15×15","17x17":"17×17","19x19":"19×19"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"expansion_factor":{"name":"Facteur d’expansion"},"ensure_unique_solution":{"name":"Garantir une solution unique"}},"action":{"e":{"label":"Gomme","title":"Faire glisser sur une zone pour en effacer les traits intérieurs, ou cliquer sur un trait pour le retirer (E)"}},"achievement":{"clean_cuts":{"name":"Coupes nettes","description":"Résous des Rectangles de 11×11 ou plus en pas plus de coups qu’il n’y a de nombres."},"quick_carver":{"name":"Découpeur express","description":"Résous des Rectangles 19×19 en moins de dix minutes."}},"status":{"drag":"{w}×{h} "}},"samegame":{"name":"Same Game","alsoKnownAs":"Clickomania","description":"Vide le plateau en retirant des groupes de cases voisines de même couleur.","preset":{"5x5_3_colours":"5×5, 3 couleurs","10x5_3_colours":"10×5, 3 couleurs","15x10_3_colours":"15×10, 3 couleurs","15x10_4_colours":"15×10, 4 couleurs","20x15_4_colours":"20×15, 4 couleurs"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"no_of_colours":{"name":"Nombre de couleurs"},"scoring_system":{"name":"Système de score","choice":{"n_1_2":"(n-1)^2","n_2_2":"(n-2)^2"}},"ensure_solubility":{"name":"Garantir la solubilité"}},"achievement":{"avalanche":{"name":"Éboulement","description":"Retire un groupe de 25 cases ou plus d’un coup, puis vide le plateau."},"no_pairs":{"name":"Paires interdites","description":"Vide un plateau de 15×10 ou plus sans jamais retirer une paire."},"last_one":{"name":"La dernière case","description":"Retrouve-toi bloqué avec une seule case restante sur le plateau."}},"status":{"score":"Score : {n}","complete":"Plateau vidé ! {score}","stuck":"Plus aucun coup possible. {score}","selected":"{score} · Sélection : {n} (+{points})"}},"signpost":{"name":"Panneau","description":"Relie les cases en un seul chemin numéroté, chaque pas suivant une flèche.","preset":{"4x4":"4×4","4x4_free_ends":"4×4, extrémités libres","5x5":"5×5","5x5_free_ends":"5×5, extrémités libres","6x6":"6×6","7x7":"7×7"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"start_and_end_in_corners":{"name":"Début et fin dans les coins"}},"action":{"b":{"label":"Briser","title":"Cliquer sur une case pour démonter toute sa chaîne (B)"}},"achievement":{"unbroken":{"name":"Chaîne intacte","description":"Résous un Panneau sans jamais supprimer ni remplacer une liaison."},"in_order":{"name":"Tout droit","description":"Résous un Panneau de 6×6 ou plus en reliant le chemin dans l’ordre, de 1 à l’étoile."},"star_first":{"name":"Fais un vœu","description":"Fais de ta toute première liaison une liaison vers l’étoile, puis résous le casse-tête."}}},"singles":{"name":"Singles","alsoKnownAs":"Hitori","description":"Noircis des cases pour qu’aucun nombre ne se répète sur une ligne ou une colonne, sans couper la grille.","preset":{"5x5_easy":"5×5 Facile","5x5_tricky":"5×5 Délicat","6x6_easy":"6×6 Facile","6x6_tricky":"6×6 Délicat","8x8_easy":"8×8 Facile","8x8_tricky":"8×8 Délicat","10x10_easy":"10×10 Facile","10x10_tricky":"10×10 Délicat","12x12_easy":"12×12 Facile","12x12_tricky":"12×12 Délicat"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"difficulty":{"name":"Difficulté","choice":{"easy":"Facile","tricky":"Délicat"}}},"achievement":{"no_circles":{"name":"Pas besoin de cercles","description":"Résous un Singles de 8×8 ou plus sans entourer un seul nombre."},"sure_hand":{"name":"Main assurée","description":"Résous un Singles de 10×10 ou plus sans rétablir une case noircie."}}},"sixteen":{"name":"Seize","description":"Fais coulisser des lignes et des colonnes entières pour remettre les tuiles dans l’ordre.","preset":{"3x3":"3×3","4x3":"4×3","4x4":"4×4","5x4":"5×4","5x5":"5×5"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"number_of_shuffling_moves":{"name":"Nombre de coups de mélange"}},"achievement":{"lean_slides":{"name":"Glisseur économe","description":"Remets le 4×4 en ordre en 100 glissements ou moins."},"five_in_200":{"name":"Grand trieur","description":"Remets le 5×5 en ordre en 200 glissements ou moins."},"round_the_doughnut":{"name":"Le tour du beignet","description":"Fais coulisser une ligne sur tout un tour, jusqu’à ce qu’elle revienne à son point de départ."}}},"slant":{"name":"Diagonales","alsoKnownAs":"Gokigen Naname","description":"Trace une diagonale dans chaque case, en respectant les nombres et sans former de boucle.","preset":{"5x5_easy":"5×5 Facile","5x5_hard":"5×5 Difficile","8x8_easy":"8×8 Facile","8x8_hard":"8×8 Difficile","12x10_easy":"12×10 Facile","12x10_hard":"12×10 Difficile"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"difficulty":{"name":"Difficulté","choice":{"easy":"Facile","hard":"Difficile"}}},"achievement":{"no_loops":{"name":"Sans boucle","description":"Résous des Diagonales de 8×8 ou plus sans jamais fermer de boucle."},"steady_hand":{"name":"Sans hésitation","description":"Résous des Diagonales 12×10 sans revenir changer un trait."}}},"solo":{"name":"Solo","alsoKnownAs":"Sudoku","description":"Remplis la grille pour que chaque ligne, chaque colonne et chaque bloc contienne chaque chiffre une seule fois.","preset":{"4x4_very_easy":"4×4 Très facile","6x6_easy":"6×6 Facile","9x9_very_easy":"9×9 Très facile","9x9_easy":"9×9 Facile","9x9_x_diagonal_easy":"9×9 Diagonales X, Facile","9x9_medium":"9×9 Moyen","9x9_hard":"9×9 Difficile","9x9_x_diagonal_hard":"9×9 Diagonales X, Difficile","9x9_expert":"9×9 Expert","9x9_extreme":"9×9 Extrême","9x9_killer":"9×9 Killer","9x9_jigsaw_easy":"9×9 Jigsaw, Facile","9x9_jigsaw_x_diagonal_easy":"9×9 Jigsaw, Diagonales X, Facile","9x9_jigsaw_hard":"9×9 Jigsaw, Difficile","12x12_easy":"12×12 Facile","16x16_easy":"16×16 Facile"},"config":{"columns_of_sub_blocks":{"name":"Colonnes de sous-blocs"},"rows_of_sub_blocks":{"name":"Lignes de sous-blocs"},"x_require_every_number_in_each_main_diagonal":{"name":"« X » (chaque nombre dans chaque grande diagonale)"},"jigsaw_irregularly_shaped_sub_blocks":{"name":"Jigsaw (sous-blocs de forme irrégulière)"},"killer_digit_sums":{"name":"Killer (sommes de chiffres)"},"symmetry":{"name":"Symétrie","choice":{"none":"Aucune","2_way_rotation":"Rotation double","4_way_rotation":"Rotation quadruple","2_way_mirror":"Miroir double","2_way_diagonal_mirror":"Miroir diagonal double","4_way_mirror":"Miroir quadruple","4_way_diagonal_mirror":"Miroir diagonal quadruple","8_way_mirror":"Miroir octuple"}},"difficulty":{"name":"Difficulté","choice":{"very_easy":"Très facile","easy":"Facile","medium":"Moyen","hard":"Difficile","expert":"Expert","extreme":"Extrême"}}},"action":{"m":{"label":"Notes","title":"Noter au crayon toutes les possibilités dans chaque case vide (M)"},"l":{"label":"Surligner","title":"Faire ressortir chaque case qui contient le dernier chiffre touché (L)"}},"achievement":{"pen_only":{"name":"Stylo, pas crayon","description":"Résous un Solo 9×9 Moyen, Killer ou plus dur sans une seule note au crayon."},"no_second_thoughts":{"name":"Sans arrière-pensée","description":"Résous un 9×9 Expert ou plus dur sans jamais changer ni effacer un chiffre."}}},"tents":{"name":"Tentes","alsoKnownAs":"Tentes et arbres, camping","description":"Plante une tente à côté de chaque arbre sans qu’aucune tente n’en touche une autre.","preset":{"8x8_easy":"8×8 Facile","8x8_tricky":"8×8 Délicat","10x10_easy":"10×10 Facile","10x10_tricky":"10×10 Délicat","15x15_easy":"15×15 Facile","15x15_tricky":"15×15 Délicat"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"difficulty":{"name":"Difficulté","choice":{"easy":"Facile","tricky":"Délicat"}}},"achievement":{"no_grass":{"name":"Campement parfait","description":"Résous des Tentes de 10×10 ou plus sans marquer une seule case en herbe."},"no_strikes":{"name":"Campeurs heureux","description":"Résous des Tentes 15×15 sans jamais retirer une tente."}}},"towers":{"name":"Tours","alsoKnownAs":"Gratte-ciel, Skyscrapers","description":"Construis des tours pour que chaque indice de bord compte les tours visibles depuis là.","preset":{"4x4_easy":"4×4 Facile","5x5_easy":"5×5 Facile","5x5_hard":"5×5 Difficile","6x6_easy":"6×6 Facile","6x6_hard":"6×6 Difficile","6x6_expert":"6×6 Expert","6x6_extreme":"6×6 Extrême"},"config":{"grid_size":{"name":"Taille de la grille"},"difficulty":{"name":"Difficulté","choice":{"easy":"Facile","hard":"Difficile","expert":"Expert","extreme":"Extrême"}}},"action":{"m":{"label":"Notes","title":"Noter au crayon toutes les possibilités dans chaque case vide (M)"},"l":{"label":"Surligner","title":"Faire ressortir chaque case qui contient le dernier chiffre touché (L)"}},"achievement":{"no_pencil":{"name":"Horizon mental","description":"Résous des Tours 6×6 sans écrire une seule note au crayon."},"clean_build":{"name":"Bâti pour durer","description":"Résous des Tours 6×6 Expert ou Extrême sans revenir changer une tour."},"tallest_first":{"name":"Les plus hautes d’abord","description":"Bâtis toutes les tours les plus hautes avant les autres, puis résous la grille."}}},"tracks":{"name":"Rails","alsoKnownAs":"Train Tracks","description":"Pose une seule voie ferrée de l’entrée à la sortie, en respectant les comptes.","preset":{"8x8_easy":"8×8 Facile","8x8_tricky":"8×8 Délicat","10x8_easy":"10×8 Facile","10x8_tricky":"10×8 Délicat","10x10_easy":"10×10 Facile","10x10_tricky":"10×10 Délicat","15x10_easy":"15×10 Facile","15x10_tricky":"15×10 Délicat","15x15_easy":"15×15 Facile","15x15_tricky":"15×15 Délicat"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"difficulty":{"name":"Difficulté","choice":{"easy":"Facile","tricky":"Délicat"}},"disallow_consecutive_1_clues":{"name":"Interdire les indices 1 consécutifs"}},"action":{"e":{"label":"Gomme","title":"Cliquer ou faire glisser pour nettoyer les cases (E)"}},"achievement":{"no_crosses":{"name":"Rien de barré","description":"Résous des Rails de 10×10 ou plus sans barrer une case ni un côté."},"no_lift":{"name":"À toute vapeur","description":"Résous des Rails de 15×10 ou plus sans jamais enlever un rail posé."},"long_haul":{"name":"Long courrier","description":"Pose des rails à travers dix cases d’un seul glissement, puis termine la voie."}}},"twiddle":{"name":"Rotation","description":"Fais tourner des blocs carrés de tuiles pour remettre les nombres dans l’ordre.","preset":{"3x3_rows_only":"3×3 lignes seules","3x3_normal":"3×3 normal","3x3_orientable":"3×3 orientable","4x4_normal":"4×4 normal","4x4_orientable":"4×4 orientable","4x4_rotating_3x3_blocks":"4×4, blocs tournants 3×3","5x5_rotating_3x3_blocks":"5×5, blocs tournants 3×3","6x6_rotating_4x4_blocks":"6×6, blocs tournants 4×4"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"rotating_block_size":{"name":"Taille du bloc tournant"},"one_number_per_row":{"name":"Un seul nombre par ligne"},"orientation_matters":{"name":"L’orientation compte"},"number_of_shuffling_moves":{"name":"Nombre de coups de mélange"}},"action":{"t":{"label":"Horaire","title":"Inverser les sens : les clics tournent dans le sens horaire, les clics droits dans le sens antihoraire (T)"}},"achievement":{"few_turns":{"name":"Vingt tours","description":"Résous une Rotation 3×3 normal en 20 tours ou moins."},"perfect_ten":{"name":"Le dix parfait","description":"Résous une Rotation 3×3 normal en 10 tours ou moins."},"dizzy":{"name":"Tourner en rond","description":"Tourne le même bloc quatre fois de suite dans le même sens, puis résous le casse-tête."}}},"undead":{"name":"Morts-vivants","description":"Place fantômes, vampires et zombies pour coller à ce que montrent les miroirs.","preset":{"4x4_easy":"4×4 Facile","4x4_normal":"4×4 Normal","4x4_tricky":"4×4 Délicat","5x5_easy":"5×5 Facile","5x5_normal":"5×5 Normal","5x5_tricky":"5×5 Délicat","7x7_easy":"7×7 Facile","7x7_normal":"7×7 Normal"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"difficulty":{"name":"Difficulté","choice":{"easy":"Facile","normal":"Normal","tricky":"Délicat"}}},"action":{"s":{"label":"Regard","title":"Tracer les lignes de vue passant par une case, ou partant d’un nombre du bord (S)"}},"keypad":{"g":"Fantôme","v":"Vampire","z":"Zombie"},"achievement":{"no_pencil":{"name":"Fie-toi à tes yeux","description":"Résous des Morts-vivants de 5×5 ou plus sans une seule note au crayon."},"fearless":{"name":"Sans peur","description":"Résous des Morts-vivants Délicat sans revenir changer un monstre."}},"alsoKnownAs":"Labyrinthe de miroirs hanté"},"unequal":{"name":"Inégalités","alsoKnownAs":"Futoshiki","description":"Complète le carré latin pour que chaque signe d’inégalité soit respecté.","preset":{"4x4_easy":"4×4 Facile","5x5_easy":"5×5 Facile","5x5_medium":"5×5 Moyen","5x5_medium_adjacent":"5×5 Moyen (Adjacent)","5x5_hard":"5×5 Difficile","6x6_easy":"6×6 Facile","6x6_medium":"6×6 Moyen","6x6_medium_adjacent":"6×6 Moyen (Adjacent)","6x6_hard":"6×6 Difficile","7x7_medium":"7×7 Moyen","7x7_medium_adjacent":"7×7 Moyen (Adjacent)","7x7_hard":"7×7 Difficile"},"config":{"mode":{"name":"Mode","choice":{"unequal":"Inégalité","adjacent":"Adjacent"}},"size_s_s":{"name":"Taille (s×s)"},"difficulty":{"name":"Difficulté","choice":{"very_easy":"Très facile","easy":"Facile","medium":"Moyen","hard":"Difficile","extreme":"Extrême"}}},"action":{"m":{"label":"Notes","title":"Noter au crayon toutes les possibilités dans chaque case vide (M)"},"h":{"label":"Indice","title":"Noter au crayon les possibilités que le raisonnement simple laisse (H)"},"l":{"label":"Surligner","title":"Faire ressortir chaque case qui contient le dernier chiffre touché (L)"}},"achievement":{"adjacent_bare":{"name":"Porte à porte","description":"Résous des Inégalités en mode Adjacent sans écrire une seule note au crayon."},"extreme_bare":{"name":"Tout dans la tête","description":"Résous des Inégalités Extrême sans écrire une seule note au crayon."}}},"unruly":{"name":"Indiscipliné","alsoKnownAs":"Takuzu, Binairo, Binero","description":"Colorie chaque case en noir ou blanc, autant de chaque par ligne et jamais trois d’affilée.","preset":{"8x8_easy":"8×8 Facile","8x8_normal":"8×8 Normal","10x10_easy":"10×10 Facile","10x10_normal":"10×10 Normal","14x14_easy":"14×14 Facile","14x14_normal":"14×14 Normal"},"config":{"width":{"name":"Largeur"},"height":{"name":"Hauteur"},"unique_rows_and_columns":{"name":"Lignes et colonnes uniques"},"difficulty":{"name":"Difficulté","choice":{"easy":"Facile","normal":"Normal"}}},"action":{"e":{"label":"Gomme","title":"Cliquer sur une case pour la vider (E)"}},"achievement":{"no_threes":{"name":"Jamais trois","description":"Résous un Indiscipliné de 10×10 ou plus sans jamais aligner trois cases pareilles."},"first_time":{"name":"Noir et blanc","description":"Résous un Indiscipliné 14×14 sans revenir changer une case."}}},"untangle":{"name":"Démêler","alsoKnownAs":"Planarity","description":"Déplace les points jusqu’à ce qu’aucune ligne n’en croise une autre.","preset":{"6_points":"6 points","10_points":"10 points","15_points":"15 points","20_points":"20 points","25_points":"25 points"},"config":{"number_of_points":{"name":"Nombre de points"}},"action":{"g":{"label":"Aimant","title":"Aimanter les points lâchés sur une grille (G)"}},"achievement":{"one_touch":{"name":"Toucher léger","description":"Démêle 10 points ou plus sans prendre deux fois le même point."},"only_downhill":{"name":"Toujours en descente","description":"Démêle 20 points ou plus sans qu’aucun déplacement n’ajoute de lignes rouges."}}}}`),$=JSON.parse('{"blackbox":{"step1":{"text":"Une boule se cache dans cette boîte 4×4. Tire des lasers depuis les points du pourtour, déduis où elle doit être, marque-la et appuie sur le bouton du coin."},"step2":{"text":"Clique sur le point du **bord gauche, au niveau de la deuxième ligne**. Le rayon est dévié en chemin et ressort ailleurs ; les deux extrémités reçoivent le même numéro."},"step3":{"text":"Tire maintenant depuis le point en **haut de la deuxième colonne**. Un **H** signifie que le rayon a percuté une boule de plein fouet et n’est jamais ressorti."},"step4":{"text":"Tire aussi depuis le point en **haut de la première colonne**. Un **R** signifie que le rayon est reparti aussitôt en arrière, ce qui arrive quand une boule se trouve en diagonale du port."},"step5":{"text":"Le R place une boule en diagonale de la première colonne et le H en place une droit sous la deuxième : seule cette case satisfait les deux."},"step6":{"text":"**Clique sur cette case** pour y marquer ta boule."},"step7":{"text":"Toutes les boules sont marquées, donc la **coche en haut à gauche** s’allume. Clique dessus pour faire vérifier ta réponse."},"step8":{"text":"Exact. Pendant que tu cherches, un **clic droit** sur une case la cadenasse quand tu es sûr qu’elle est vide, et **Résoudre** donne la réponse."}},"bridges":{"step1":{"text":"Le nombre de chaque île dit combien d’extrémités de ponts elle réclame. Relie toutes les îles en un seul réseau, avec au plus deux ponts entre deux îles et aucun croisement."},"step2":{"text":"Le **2 du bas** n’a qu’une seule île dans son alignement : le **4** du haut. **Glisse** du 2 vers le 4 pour lancer un pont."},"step3":{"text":"Il lui faut deux extrémités de ponts, et cette paire est le seul endroit possible. **Glisse** de la même façon pour un second pont parallèle."},"step4":{"text":"Cette île est terminée. **Clique** dessus pour la marquer comme finie : elle devient grise et ses ponts se verrouillent, impossible de les déranger par accident."},"step5":{"text":"Aucun pont ne peut en croiser un autre, donc la ligne entre les **deux 1** est morte. **Glisse en clic droit** du 1 de gauche vers celui de droite pour le noter."},"step6":{"text":"Chaque 1 n’a plus qu’une seule issue, et les quatre ponts restants en découlent. **Résoudre** termine le casse-tête (et **G** montre chaque ligne qu’un pont pourrait emprunter).","textTouch":"Chaque 1 n’a plus qu’une seule issue, et les quatre ponts restants en découlent. **Résoudre** termine le casse-tête."}},"cube":{"step1":{"text":"Le cube a six faces et six cases sont peintes en bleu. Fais-le rouler jusqu’à ce que chaque face en ait ramassé une : à chaque atterrissage, la face du dessous et la case échangent leurs couleurs."},"step2":{"text":"Un clic bascule le cube par-dessus l’arête, vers la case que tu choisis. **Clique sur la case bleue juste sous le cube** pour amener sa couleur sur la face qui se pose."},"step3":{"text":"La case qu’il a quittée est redevenue neutre — les couleurs s’échangent vraiment. **Clique sur la case bleue à droite** pour bleuir une deuxième face."},"step4":{"text":"Les **flèches du clavier** font rouler le cube elles aussi. Appuie une fois sur **→** pour ramasser la troisième case bleue.","textTouch":"Chaque case voisine est à un appui. **Appuie sur la case bleue suivante à droite** pour ramasser la troisième case bleue."},"step5":{"text":"Trois faces bleues, trois à faire — ce plateau se termine en six coups en tout, et la barre d’état les compte. **Annuler** en reprend une quand tu vas trop loin."}},"dominosa":{"step1":{"text":"Trois dominos — 0-0, 0-1 et 1-1 — ont été posés ici puis retirés, laissant leurs nombres. Découpe la grille en paires pour remettre chacun d’eux exactement une fois."},"step2":{"text":"Aucun domino ne peut servir deux fois. Apparier ce **0** avec le **1** en dessous ferait des deux colonnes extérieures un 0-1 : fais donc un **clic droit** entre eux pour noter qu’ils ne forment pas une paire."},"step3":{"text":"Les seuls deux **0** qui se touchent sont la paire du coin en haut à gauche : c’est là que va le 0-0. **Clique sur la frontière entre eux** pour le poser."},"step4":{"text":"De même, les seuls **1** qui se touchent sont les deux du bas à gauche. Clique sur la frontière entre eux pour le 1-1."},"step5":{"text":"Il reste la colonne de droite pour le 0-1. Clique sur la frontière entre ses deux nombres pour finir."},"step6":{"text":"Chaque domino utilisé une fois. Clique de nouveau sur un domino pour le soulever, un domino en double est dessiné en rouge, et **Annuler** revient sur tes coups."}},"fifteen":{"step1":{"text":"Fais glisser les tuiles numérotées dans l’espace vide jusqu’à lire **1 à 8** dans l’ordre, le trou dans le coin en bas à droite. Ce petit plateau est à deux coups de la fin."},"step2":{"text":"Toute tuile sur la même ligne ou la même colonne que le trou peut glisser. Clique sur le **5** pour le pousser vers le haut dans le trou."},"step3":{"text":"Encore une. Clique sur le **8** pour terminer la ligne."},"step4":{"text":"Résolu ! **Annuler** et **Rétablir** parcourent tes coups, et **Nouveau**, dans le menu pause, distribue un casse-tête tout neuf. Les flèches du clavier font aussi glisser une tuile dans le trou, dans le sens de la flèche.","textTouch":"Résolu ! **Annuler** et **Rétablir** parcourent tes coups, et **Nouveau**, dans le menu pause, distribue un casse-tête tout neuf. Une ligne ou une colonne entière glisse d’un coup : vise la tuile la plus éloignée."}},"filling":{"step1":{"text":"Écris un chiffre dans chaque case vide pour que chaque bloc connexe de chiffres identiques couvre exactement autant de cases que le chiffre l’annonce."},"step2":{"text":"Le **3** au pied de la colonne du milieu ne peut grandir que vers le haut : son bloc est donc cette colonne. **Glisse** de sa case du haut jusqu’à celle du milieu, puis appuie sur **3**.","textTouch":"Le **3** au pied de la colonne du milieu ne peut grandir que vers le haut. **Glisse** de sa case du haut jusqu’à celle du milieu, puis appuie sur **3** sur le pavé."},"step3":{"text":"Le **2** de la colonne de gauche a besoin d’un partenaire et la case au-dessus est la seule libre. Clique sur cette case et appuie sur **2**.","textTouch":"Le **2** de la colonne de gauche a besoin d’un partenaire et la case au-dessus est la seule libre. Appuie sur cette case, puis sur **2** sur le pavé."},"step4":{"text":"Il reste une case. Clique dessus et appuie sur **1** pour voir à quoi ressemble un mauvais chiffre.","textTouch":"Il reste une case. Appuie dessus, puis sur **1** sur le pavé pour voir à quoi ressemble un mauvais chiffre."},"step5":{"text":"Le rouge veut dire impossible : ces deux **1** se touchent, ce qui ferait un bloc de deux, et le **2** du haut est emmuré. Cette case est toujours sélectionnée : appuie donc sur **Backspace** pour la vider.","textTouch":"Le rouge veut dire impossible : ces deux **1** se touchent, ce qui ferait un bloc de deux, et le **2** du haut est emmuré. Cette case est toujours sélectionnée : appuie donc sur **⌫** sur le pavé pour la vider."},"step6":{"text":"Cette case vide s’associe plutôt avec le **2** au-dessus. Clique dessus et appuie sur **2** pour finir la grille.","textTouch":"Cette case vide s’associe plutôt avec le **2** au-dessus. Appuie dessus, puis sur **2** sur le pavé pour finir la grille."},"step7":{"text":"Rempli. Des traits épais referment chaque bloc terminé ; un **clic droit** ajoute les cases à une sélection une par une, et **Annuler** reprend un remplissage."}},"flip":{"step1":{"text":"Allume les neuf cases. Une pression retourne la case **et** celles qui l’entourent, donc une case allumée peut redevenir sombre."},"step2":{"text":"Le petit schéma dans une case montre ce qu’elle retourne : le bloc plein est la case elle-même, les contours sont ses voisines."},"step3":{"text":"À toi d’allumer celle-ci. Appuie sur la case **en haut à gauche**, la sombre dans le coin."},"step4":{"text":"Le coin est allumé, mais ses deux voisines se sont éteintes. Appuie ensuite sur la case du **centre**."},"step5":{"text":"Seul le coin en bas à droite est encore sombre. Appuie sur la case **en bas à droite** pour finir."},"step6":{"text":"Tout est allumé ! **Annuler** reprend une pression, et tu peux piloter un curseur avec les flèches et valider avec **Enter** plutôt qu’avec un clic.","textTouch":"Tout est allumé ! **Annuler** reprend une pression, et appuyer deux fois sur la même case s’annule toujours : l’ordre n’a donc aucune importance."}},"flood":{"step1":{"text":"Tu possèdes la case en haut à gauche et tout ce qui lui est relié dans la même couleur. Chaque coup repeint ce territoire, et les cases voisines de la nouvelle couleur le rejoignent. Rends toute la grille unie en **quatre coups** au plus."},"step2":{"text":"Ton territoire n’est pour l’instant que ce coin bleu. Clique sur la case **rouge** juste à côté : le territoire devient rouge et toutes les cases rouges qu’il touche le rejoignent."},"step3":{"text":"Clique maintenant sur une case **bleue** au bord de ton territoire. Une couleur bien choisie peut enchaîner très loin en travers de la grille en un seul coup."},"step4":{"text":"Il ne reste que du **vert** en dehors de ton territoire. Un clic de plus balaie le reste de la grille."},"step5":{"text":"Trois coups sur les quatre — la barre d’état tient le compte. Épuiser la limite avant d’unifier la grille fait perdre la manche. Bloqué ? Un **Indice** joue une bonne couleur pour toi, et **Résoudre** finit la grille en résolution automatique."}},"galaxies":{"step1":{"text":"Deux points, donc deux galaxies. Trace des murs le long des traits de la grille pour que chaque point se retrouve au centre de sa propre région : tourne une région de 180° autour de son point et elle doit retomber exactement sur elle-même."},"step2":{"text":"Le point de gauche est posé sur un trait entre deux cases : sa galaxie est donc forcément les deux colonnes de gauche. **Clique** sur le trait juste à leur droite, dans la **ligne du haut**."},"step3":{"text":"Les points servent aussi de bloc-notes. **Glisse** du point de droite jusqu’à la **case en haut à droite** pour y laisser une flèche, qui marque cette case comme membre de sa galaxie."},"step4":{"text":"Retour au mur : **clique** sur le même trait une ligne plus bas, dans la **ligne du milieu**."},"step5":{"text":"Il reste un segment, dans la **ligne du bas**. **Clique** dessus pour refermer les deux galaxies."},"step6":{"text":"Les deux régions sont ombrées, donc les deux sont justes. **Résoudre** trace une réponse complète, et un clic sur un mur l’efface de nouveau."}},"guess":{"step1":{"text":"Deux pions sont cachés derrière les points d’interrogation, dans un certain ordre parmi trois couleurs. Propose une rangée, lis les marques qu’elle rapporte et resserre l’étau."},"step2":{"text":"**Glisse** la couleur du haut hors de la palette et dépose-la dans le **trou de gauche** de la rangée fléchée."},"step3":{"text":"Tu peux aussi prendre une couleur d’abord, puis cliquer sur les trous. Clique sur la **deuxième couleur** de la palette."},"step4":{"text":"Clique maintenant sur le **trou de droite** pour y déposer cette couleur."},"step5":{"text":"La rangée est pleine, donc le **cadre en pointillés** à sa droite s’allume. Clique dessus pour faire noter ton essai."},"step6":{"text":"Deux marques **creuses** veulent dire que les deux couleurs sont dans la réponse mais qu’aucune n’est à la bonne place — une marque pleine serait bonne couleur, bonne place. Échange-les et propose de nouveau."},"step7":{"text":"Résolu. **Résoudre** abandonne et montre la réponse, et la touche **L** met des lettres sur les pions si les couleurs sont difficiles à distinguer.","textTouch":"Résolu. **Résoudre** abandonne et montre la réponse, et **Retenir**, à côté d’Annuler, garde en place un pion dont tu es sûr pour ton essai suivant."}},"inertia":{"step1":{"text":"Tu es la boule du coin en haut à gauche, et il y a **trois gemmes** à ramasser. Une fois lancée, la boule ne s’arrête qu’à un mur ou sur un butoir — et une mine la tue."},"step2":{"text":"Clique sur une case à **droite** de la boule. Elle roule de ce côté jusqu’à ce que le bord du plateau l’arrête, en balayant la gemme sur son passage."},"step3":{"text":"Clique maintenant **sous** la boule. Elle prend la gemme suivante et l’anneau brisé deux cases plus bas — un butoir — la stoppe."},"step4":{"text":"Attention : la chose hérissée juste sous la boule est une **mine**. Rouler dessus met fin à la partie, et seul Annuler t’en sort."},"step5":{"text":"Passe plutôt en **diagonale** : clique sur la case deux plus bas et deux plus à gauche, et la boule file à côté de la mine jusqu’à la dernière gemme."},"step6":{"text":"Les trois gemmes — terminé. **Annuler** reprend un coup raté ; les flèches roulent tout droit et Home, Page Up, End et Page Down roulent en diagonale.","textTouch":"Les trois gemmes — terminé. **Annuler** reprend un coup raté, et appuyer en dehors de la grille marche aussi, ce qui aide quand la boule est collée à un bord."}},"keen":{"step1":{"text":"Place 1, 2 et 3 pour que chacun apparaisse une fois par ligne et par colonne, et pour que les chiffres de chaque cage au trait épais donnent son indice arithmétique."},"step2":{"text":"La cage **2×** a pour produit 2 : ses chiffres sont donc 1, 1 et 2. Une cage peut répéter un chiffre, mais pas sur une même ligne ni une même colonne, donc le 2 va dans le coin : clique sur cette case et tape **2**.","textTouch":"La cage **2×** a pour produit 2 : ses chiffres sont donc 1, 1 et 2. Le 2 va dans le coin : appuie sur cette case, puis sur **2** sur le pavé."},"step3":{"text":"Les deux autres cases de la cage sont les 1. Clique sur la case **à droite du 2** et tape **1**.","textTouch":"Les deux autres cases de la cage sont les 1. Appuie sur la case **à droite du 2**, puis sur **1** sur le pavé."},"step4":{"text":"La ligne du haut a déjà son 2 et son 1 : la dernière case ne peut donc être que le 3. Clique sur la **case en haut à droite** et tape **3**.","textTouch":"La ligne du haut a déjà son 2 et son 1 : la dernière case ne peut donc être que le 3. Appuie sur la **case en haut à droite**, puis sur **3** sur le pavé."},"step5":{"text":"Tu n’as qu’une intuition sur une case ? Fais un **clic droit** sur la case du milieu et tape **3** pour noter ce chiffre au crayon au lieu de l’inscrire.","textTouch":"Tu n’as qu’une intuition sur une case ? Fais un **appui long** sur la case du milieu et appuie sur **3** pour noter ce chiffre au lieu de l’inscrire. La touche **✎** fait de même pour une case sur laquelle tu as appuyé."},"step6":{"text":"Trouve le reste de la même façon ; un chiffre répété sur sa ligne ou sa colonne devient rouge, tout comme une cage pleine qui rate son indice. Dans le menu pause, **Notes** inscrit au crayon toutes les possibilités pour toi, et **Résoudre** donne la réponse."}},"lightup":{"step1":{"text":"Chaque case blanche doit finir éclairée. Une ampoule éclaire sa ligne et sa colonne jusqu’à ce qu’une case noire arrête le faisceau, et aucune ampoule ne doit se trouver dans la lumière d’une autre."},"step2":{"text":"Un nombre dit combien d’ampoules touchent cette case noire. Ce **2** n’a que deux voisines blanches : les deux portent donc une ampoule. Clique sur celle de **droite**."},"step3":{"text":"Remarque le voile jaune qui se répand le long du faisceau. Clique maintenant sur la case juste **sous** le 2 pour sa seconde ampoule."},"step4":{"text":"Un **0** ne touche aucune ampoule. Fais un **clic droit** sur la case au-dessus pour y noter une croix : elle te rappelle simplement qu’aucune ampoule ne peut y aller."},"step5":{"text":"Le **1** veut exactement une ampoule. La case en dessous est déjà éclairée, une ampoule y serait donc dans le faisceau — clique plutôt sur la case **à gauche** du 1."},"step6":{"text":"Deux cases de la ligne du haut sont encore sombres et tu en as barré une. Clique sur l’**autre**."},"step7":{"text":"Chaque case éclairée, chaque nombre satisfait. **Annuler** reprend une ampoule, et les flèches avec Enter et Space posent ampoules et croix sans souris.","textTouch":"Chaque case éclairée, chaque nombre satisfait. **Annuler** reprend une ampoule, et un appui long barre une case que tu as écartée."}},"loopy":{"step1":{"text":"Trace **une seule** boucle fermée le long des traits pâles entre les points. Chaque nombre dit combien des quatre côtés de sa case la boucle emprunte."},"step2":{"text":"La case du milieu porte un **4** : ses quatre côtés sont donc sur la boucle. **Clique** sur son côté haut pour tracer le premier trait."},"step3":{"text":"Maintenant son **côté gauche**. Cliquer de nouveau sur un trait l’efface."},"step4":{"text":"Chaque point a deux traits ou aucun, et celui où ces deux-là se rejoignent est complet. Fais un **clic droit** sur le trait qui en part vers le haut pour le barrer comme inutilisable."},"step5":{"text":"Il reste deux côtés. **Clique** sur le côté bas de la case du milieu."},"step6":{"text":"Et le **côté droit** la referme. Une boucle, aucun bout qui dépasse, et les quatre **0** restent à l’écart."},"step7":{"text":"Résolu. **Annuler** revient sur tes traits, et **Type**, dans le menu pause, échange les carrés contre des triangles, des hexagones et des pavages plus étranges."}},"magnets":{"step1":{"text":"Chaque domino est soit un aimant, avec une moitié **+** et une moitié **−**, soit neutre. Les nombres comptent les pôles **+** (en haut et à gauche) et les pôles **−** (en bas et à droite) de chaque ligne, et deux pôles identiques ne peuvent jamais se toucher."},"step2":{"text":"La ligne du bas veut trois pôles **−** et seuls trois dominos y descendent : chacun doit donc en fournir un. Fais un **clic gauche** sur la moitié haute du domino vertical pour la mettre en **+**, ce qui envoie son **−** en bas."},"step3":{"text":"Le domino large en bas à droite est donc un aimant lui aussi, et le **0** au-dessus de la dernière colonne y interdit un **+**. Fais un **clic gauche** sur sa moitié gauche pour mettre le **+** de ce côté."},"step4":{"text":"La quatrième colonne a maintenant son unique **+** et ne veut aucun **−** : le domino du dessus ne peut donc être ni l’un ni l’autre. Fais un **clic droit** dessus pour le marquer neutre."},"step5":{"text":"La ligne du haut a encore besoin d’un **+** et d’un **−** du domino large de gauche. Sa moitié droite touche un **+**, et deux pôles identiques ne peuvent pas se toucher — donc **clic gauche** sur sa moitié gauche."},"step6":{"text":"Il reste un domino. La première colonne a dépensé son **+** en haut, donc le **+** revient ici à droite : **clic gauche** sur la moitié droite pour finir."},"step7":{"text":"Résolu ! Cliquer de nouveau sur la même moitié retourne l’aimant, un deuxième clic droit laisse des points d’interrogation pour noter « aimant, mais dans quel sens ? », et **Annuler** revient en arrière."}},"map":{"step1":{"text":"Colorie chaque région pour que deux régions partageant un bout de frontière n’aient jamais la même couleur. Quatre couleurs suffisent toujours, et trois régions sont encore blanches ici."},"step2":{"text":"Prends d’abord une couleur : **clique** sur la **pastille bleue**, la deuxième de la rangée sous la carte."},"step3":{"text":"Une couleur en main, un **clic droit** sur une région blanche y note un point de cette couleur — une note disant que la région *pourrait* être de cette couleur. Essaie sur la région allongée du côté droit."},"step4":{"text":"C’est plus qu’un peut-être : cette région borde déjà du rouge, du vert et du jaune, il ne reste donc que le bleu. **Clique** dessus pour la peindre."},"step5":{"text":"Tu peux aussi **glisser** une couleur d’une région à une autre. La grande région du haut touche maintenant du rouge, du vert et du bleu : **glisse** donc le jaune jusqu’à elle depuis la petite région du bas."},"step6":{"text":"Il reste une région blanche, dans le **coin en bas à gauche** : elle borde du vert, du bleu et ce nouveau jaune, elle doit donc être rouge. **Glisse** le rouge jusqu’à elle depuis la région du coin en haut à droite."},"step7":{"text":"Terminé — un conflit aurait affiché un **!** rouge sur la frontière entre les deux régions. **Annuler** revient en arrière, et les flèches avec **1**–**4** colorient sans souris.","textTouch":"Terminé — un conflit aurait affiché un **!** rouge sur la frontière entre les deux régions. **Annuler** revient en arrière, et la gomme au bout de la rangée efface une région dont tu as changé d’avis."}},"mines":{"step1":{"text":"Chaque nombre compte les mines des huit cases qui le touchent. Deux mines se cachent sous le bloc couvert ; découvre tout le reste sans marcher dessus."},"step2":{"text":"Ce **1** ne touche qu’une seule case couverte : cette case est donc une mine. Fais un **clic droit** dessus pour y planter un drapeau."},"step3":{"text":"Le **1** du dessous a maintenant son unique mine marquée d’un drapeau : le reste de ses voisines est donc sûr. **Clic gauche sur ce 1** pour les ouvrir d’un coup."},"step4":{"text":"Le **2** au-dessus du bloc compte déjà un drapeau et n’a plus qu’une case couverte. Fais un **clic droit** sur cette case."},"step5":{"text":"Les deux mines sont marquées, la dernière case couverte est donc forcément sûre. Fais un **clic gauche** dessus pour terminer la grille."},"step6":{"text":"Déminé. Un deuxième clic droit retire un drapeau, et **Annuler** te sauve si tu marches un jour sur une mine."}},"net":{"step1":{"text":"Chaque tuile porte un morceau de câble, et tout le réseau a été tourné au hasard. Fais pivoter les tuiles jusqu’à ce que les neuf soient reliées à la tuile marquée du centre : les câbles **bleus** sont déjà alimentés, les gris non."},"step2":{"text":"La tuile en bas à gauche pointe son câble droit dans le mur. Fais un **clic gauche** dessus pour un quart de tour dans le sens antihoraire, afin que le câble rejoigne sa voisine de droite."},"step3":{"text":"Un **clic droit** tourne une tuile dans l’autre sens. Donne un tour horaire à la tuile en bas à droite et son câble pivote vers la gauche."},"step4":{"text":"La tuile du milieu a des câbles sur ses quatre côtés : elle ne peut donc pas être fausse. Fais un **clic milieu** dessus pour la verrouiller, ou active le **cadenas** à côté d’Annuler et clique dessus : une tuile verrouillée est ombrée et refuse de tourner.","textTouch":"La tuile du milieu a des câbles sur ses quatre côtés : elle ne peut donc pas être fausse. Active le **cadenas** à côté d’Annuler et touche la tuile pour la verrouiller : une tuile verrouillée est ombrée et refuse de tourner."},"step5":{"text":"Il reste une tuile. Avec le **cadenas** désactivé, fais un **clic gauche** sur le coin en haut à droite pour ramener son câble vers la gauche et allumer tout le réseau.","textTouch":"Il reste une tuile. Avec le **cadenas** désactivé, touche le coin en haut à droite pour ramener son câble vers la gauche et allumer tout le réseau."},"step6":{"text":"Les neuf tuiles sont alimentées. **Annuler** revient sur tes rotations ; au clavier, les flèches déplacent un curseur et **A**, **D** et **F** font tourner la tuile en dessous.","textTouch":"Les neuf tuiles sont alimentées. **Annuler** revient sur tes rotations, verrouiller une tuile dont tu es sûr la protège d’un appui malencontreux, et **Mélanger** fait de nouveau tourner au hasard toutes les tuiles non verrouillées."}},"netslide":{"step1":{"text":"Chaque morceau de câble doit finir relié à la source d’alimentation. Les câbles bleus sont alimentés, les gris au crayon ne le sont pas."},"step2":{"text":"La source est sur la tuile du milieu. Cette tuile ne bouge jamais : la ligne et la colonne du milieu n’ont donc pas de flèches — tout le reste coulisse."},"step3":{"text":"Clique sur la flèche **à gauche de la ligne du bas** pour faire coulisser cette ligne d’un cran vers la gauche ; le câble qui tombe réapparaît à droite."},"step4":{"text":"La ligne du bas est raccordée, mais elle reste grise : rien ne la relie encore vers le haut jusqu’à la source."},"step5":{"text":"Fais un **clic droit** sur la flèche **au-dessus de la troisième colonne**. Un clic droit inverse une flèche : cette colonne descend donc et les derniers câbles s’allument."},"step6":{"text":"Tout est alimenté ! **Résoudre** montre une réponse si tu bloques, et le menu **Type** propose des grilles cycliques où les câbles sortent d’un bord pour revenir par l’autre."}},"pattern":{"step1":{"text":"Les nombres à côté de chaque ligne et de chaque colonne sont les longueurs de ses séries noires, dans l’ordre. Trouve les cases noires et remplis-les."},"step2":{"text":"La **troisième colonne** annonce 1 2 : un noir, un blanc, puis deux noirs. Dans quatre cases, cela ne rentre que d’une seule façon, la paire en bas. **Glisse** vers le bas par-dessus elles."},"step3":{"text":"La case au-dessus de la paire est donc le blanc. Fais un **clic droit** dessus pour y mettre un point, qui marque une case dont tu sais qu’elle est blanche."},"step4":{"text":"Et la case du haut de cette colonne est le noir isolé de l’indice. **Clique** dessus."},"step5":{"text":"La **dernière colonne** annonce 3. Où qu’une série de trois se place dans quatre cases, elle couvre toujours les deux du milieu : **glisse** donc vers le bas par-dessus elles."},"step6":{"text":"Un indice devient gris dès que sa ligne est terminée. Continue de grignoter comme ça, ou laisse **Résoudre** finir celle-ci ; un clic milieu remet une case à l’état inconnu."}},"pearl":{"step1":{"text":"Trace une seule boucle fermée, de centre de case en centre de case. Elle n’a pas besoin de passer par toutes les cases, mais elle doit passer par toutes les perles."},"step2":{"text":"Une **perle blanche** veut dire que la boucle la traverse tout droit. Sur la ligne du haut, le seul tout droit est horizontal : **glisse** donc de la case à gauche de cette perle jusqu’à celle de droite."},"step3":{"text":"Cette perle a maintenant ses deux segments, plus rien d’autre ne peut en partir. Fais un **clic droit** sur l’arête en dessous pour barrer ce côté."},"step4":{"text":"Une **perle noire** tourne, et la boucle repart ensuite tout droit dans la case de chaque côté. Celle du **bord gauche** ne peut pas tourner vers le bas — il faudrait une ligne droite passant par le coin en bas à gauche — donc **clique** sur son arête de droite."},"step5":{"text":"La case voisine continue donc tout droit — et la perle blanche au-delà aussi. **Glisse** de cette case jusqu’à la quatrième colonne."},"step6":{"text":"Continue à raisonner depuis les perles ; une perle prend un halo rouge dès que sa règle est enfreinte. **Résoudre** trace toute la boucle si tu veux la voir."}},"pegs":{"step1":{"text":"Un pion saute par-dessus un voisin pour tomber dans le trou vide juste derrière, et le pion sauté est retiré. Vide ce petit plateau jusqu’à **un seul pion** : trois sauts."},"step2":{"text":"**Glisse** le pion du haut de la tige vers le bas par-dessus son voisin, jusque dans le trou du bas."},"step3":{"text":"Cliquer marche aussi. Clique sur le **pion de droite** pour le prendre, puis sur le trou deux cases plus à gauche."},"step4":{"text":"Dernier saut : glisse le pion du **coin en bas à gauche** par-dessus son voisin jusqu’au milieu."},"step5":{"text":"Un seul pion — résolu. **Annuler** reprend un saut quand tu t’enlises, et les flèches marchent aussi : Enter prend un pion, puis une flèche le pousse.","textTouch":"Un seul pion — résolu. **Annuler** reprend un saut dès que tu t’enlises, aussi loin que tu veux."}},"range":{"step1":{"text":"Noircis des cases pour que chaque nombre compte exactement les cases blanches que sa propre case voit : elle-même, plus toutes les cases alignées en haut, en bas, à gauche et à droite jusqu’à ce qu’une case noire ou le bord l’arrête."},"step2":{"text":"Le **6** voit six cases pour l’instant — toute sa ligne plus les deux du dessous. Rien dans cette ligne ni dans cette colonne ne peut donc devenir noir."},"step3":{"text":"Le **2** ne peut voir que lui-même et une case de plus, et la case au-dessus doit rester blanche pour le 6. **Clique** donc sur la case à sa gauche pour la noircir."},"step4":{"text":"Il reste la case en haut à droite comme unique case blanche que le 2 voit encore. Fais un **clic droit** dessus pour y noter un point : c’est ainsi qu’on marque une case dont on sait qu’elle reste blanche."},"step5":{"text":"Le **3** se voit déjà lui-même et les deux cases à sa gauche : la case à sa droite doit donc être noire. **Clique** dessus."},"step6":{"text":"Terminé avec deux cases noires — les points ne sont que des notes. **H** remplit une case qui découle du reste, et **Résoudre** remplit toute la grille de points.","textTouch":"Terminé avec deux cases noires — les points ne sont que des notes. **Résoudre** remplit toute la grille de points quand tu préfères voir la réponse."}},"rect":{"step1":{"text":"Découpe cette grille en rectangles pour que chaque rectangle contienne exactement un nombre, et que ce nombre soit le nombre de cases qu’il couvre."},"step2":{"text":"Un rectangle ne peut contenir qu’un seul nombre, et le **3** est juste sous le **4** — le 4 doit donc prendre toute la ligne du haut. **Glisse** du 4 jusqu’au bout droit de cette ligne."},"step3":{"text":"Cliquer sur un seul trait de la grille ajoute ou retire uniquement cette arête. **Clique** sur le trait à droite du **3**."},"step4":{"text":"Un 9 ne peut être qu’un bloc 3×3, et il ne reste qu’une place pour lui. **Glisse** en travers du bloc mis en lumière, de sa case en haut à gauche jusqu’au coin en bas à droite : cela enferme le 3 du même coup."},"step5":{"text":"Chaque case est dans un rectangle de la bonne taille. Un **clic droit glissé** efface les traits à l’intérieur d’une zone mais garde son contour, et **Annuler** reprend un tracé."}},"samegame":{"step1":{"text":"Vide le plateau en retirant des groupes d’au moins deux cases voisines de même couleur. Un groupe de _n_ cases rapporte (_n_ − 2)², ce sont donc les grands groupes qui comptent."},"step2":{"text":"Clique sur n’importe laquelle des quatre cases **rouges** du haut. Le premier clic ne fait que sélectionner le groupe : il s’éclaircit et prend un contour épais."},"step3":{"text":"Clique de nouveau sur le groupe sélectionné pour le retirer du plateau et marquer quatre points. Les cases au-dessus d’un vide y tombent, et une colonne vide rapproche ses voisines."},"step4":{"text":"Cette case **verte** est toute seule. Rien à côté d’elle ne partage sa couleur, elle ne peut donc jamais être sélectionnée — il faut attendre que le plateau lui amène une partenaire."},"step5":{"text":"Maintenant la **paire bleue** mise en évidence. Clique sur l’une des deux cases pour les sélectionner toutes les deux."},"step6":{"text":"Tu as changé d’avis ? Fais un **clic droit** sur la sélection pour la relâcher — rien n’est retiré tant que tu n’as pas cliqué une deuxième fois."},"step7":{"text":"Voilà tout le jeu. Chaque plateau peut être vidé, alors persévère — **Annuler** rembobine quand tu isoles une case, et il n’y a pas de bouton Résoudre pour te sauver."}},"signpost":{"step1":{"text":"Chaque case porte une flèche. Relie les six en une seule chaîne numérotée de **1 à 6**, où chaque case est suivie d’une case posée quelque part le long de sa propre flèche."},"step2":{"text":"Le **1** pointe vers l’est. **Glisse** de lui jusqu’à la case à sa droite pour en faire le 2."},"step3":{"text":"Le **3** s’est accroché tout seul, comme le font toujours les nombres qui se suivent et pointent dans le bon sens. **Glisse** maintenant la case en bas à droite sur la case à sa gauche."},"step4":{"text":"Aucune de ces deux-là n’a encore de numéro, la paire est donc étiquetée **a** et **a+1**. Fais un **clic droit** sur la case du milieu de la ligne du bas pour les séparer de nouveau."},"step5":{"text":"De vrais numéros valent mieux : **glisse** le **3** sur la case en dessous, qui devient le 4."},"step6":{"text":"Dernier maillon : **glisse** ce 4 sur la case à sa gauche. Elle devient le 5, et le 6 referme le chemin tout seul."},"step7":{"text":"Résolu. Un **clic droit glissé** relie dans l’autre sens, d’une case vers celle qui la précède, et **Résoudre** déroule tout le chemin."}},"singles":{"step1":{"text":"Noircis des cases jusqu’à ce qu’aucun nombre ne se répète parmi les cases blanches d’une ligne ou d’une colonne. Deux cases noires ne peuvent jamais partager une arête, et les cases blanches doivent rester d’un seul tenant."},"step2":{"text":"Les deux **4** de cette ligne ont une case entre eux. Noircir cette case laisserait les deux 4 blancs : elle doit donc rester blanche elle-même — fais un **clic droit** dessus pour l’entourer."},"step3":{"text":"Ce **3** entouré est blanc pour de bon, et sa colonne contient un autre 3 en haut. Fais un **clic gauche** sur celui du haut pour le noircir."},"step4":{"text":"Les cases noires ne se touchent jamais, donc le **4** juste à sa droite reste blanc. Fais un **clic gauche** sur l’autre 4 de cette dernière colonne."},"step5":{"text":"Même chose : le **2** juste au-dessus de ta nouvelle case noire est blanc, et sa ligne contient un autre 2 tout à gauche. Fais un **clic gauche** sur celui-là."},"step6":{"text":"Encore un. Le **3** au-dessus de cette case noire est blanc, donc l’autre 3 au pied de la colonne doit disparaître. Fais un **clic gauche** dessus."},"step7":{"text":"Résolu, et les cases blanches sont toujours toutes reliées. Les cercles ne sont que des notes, et **Annuler** revient sur tes coups."}},"sixteen":{"step1":{"text":"Remets les tuiles dans l’ordre, **1 à 9**, de gauche à droite. Les flèches du pourtour font coulisser toute une ligne ou toute une colonne d’un cran, et ce qui sort revient de l’autre côté."},"step2":{"text":"Clique sur la flèche **au-dessus de la deuxième colonne** pour faire monter cette colonne d’un cran ; cela complète la ligne du milieu."},"step3":{"text":"La ligne du bas doit maintenant se décaler vers la droite. Fais un **clic droit** sur la flèche **à gauche de la ligne du bas** : un clic droit envoie la ligne dans l’autre sens."},"step4":{"text":"La dernière : clique sur la flèche **à gauche de la ligne du haut** pour la faire coulisser vers la gauche et terminer la grille."},"step5":{"text":"Dans l’ordre ! **Type**, dans le menu pause, propose de plus grandes grilles, et son entrée **Personnalisé…** peut en mélanger une avec le nombre de coups de ton choix, à toi ensuite de les défaire."}},"slant":{"step1":{"text":"Trace une diagonale dans chaque case. Un nombre entouré compte les traits qui touchent son coin, et les traits ne doivent jamais refermer une boucle."},"step2":{"text":"Le **0** du coin en haut à gauche ne veut rien qui le touche : son unique case doit donc pencher dans l’autre sens. Fais un **clic droit** sur cette case pour tracer un `/`."},"step3":{"text":"Le **4** a besoin d’un trait depuis les quatre cases qui l’entourent. Fais un **clic gauche** sur celle en haut à gauche — un clic gauche trace un `\\\\`."},"step4":{"text":"La case en haut à droite du **4** doit au contraire pencher vers le bas à gauche. Fais un **clic droit** dessus pour un `/`."},"step5":{"text":"Le **1** du bord gauche a déjà son unique trait, venu de la case en dessous. La case du dessus doit donc pencher à l’écart : **clic gauche** dessus pour un `\\\\`."},"step6":{"text":"Continue de la même façon. Un nombre qui ne peut plus tomber juste devient rouge, tout comme un trait pris dans une boucle fermée. **Résoudre**, dans le menu pause, remplit le reste."}},"solo":{"step1":{"text":"Chaque ligne, chaque colonne et chaque **bloc 2×2** au trait épais doit contenir 1, 2, 3 et 4 exactement une fois. Il manque trois cases sur cette petite grille."},"step2":{"text":"Ce **bloc** a déjà un 2, un 3 et un 4 : sa case vide ne peut donc être qu’un **1**. Clique sur cette case et appuie sur la touche **1**.","textTouch":"Ce **bloc** a déjà un 2, un 3 et un 4 : sa case vide ne peut donc être qu’un **1**. Appuie sur cette case, puis sur **1** sur le pavé."},"step3":{"text":"Pas sûr d’une case ? Fais un **clic droit** sur celle-ci, qui est vide, et appuie sur **2** pour noter le chiffre au crayon.","textTouch":"Pas sûr d’une case ? Appuie sur celle-ci, qui est vide, active **✎** sur le pavé et appuie sur **2** pour noter le chiffre au crayon."},"step4":{"text":"Sa ligne contient déjà 3, 4 et 1 : la note était juste. Fais un **clic gauche** sur la même case et appuie sur **2** pour inscrire la réponse.","textTouch":"Sa ligne contient déjà 3, 4 et 1 : la note était juste. La case est toujours choisie : appuie sur **✎** pour arrêter le crayon, puis sur **2** pour inscrire la réponse."},"step5":{"text":"Il reste une case. Sa ligne a déjà 4, 3 et 1 — clique dessus et appuie sur le chiffre manquant.","textTouch":"Il reste une case. Sa ligne a déjà 4, 3 et 1 — appuie dessus, puis sur le chiffre manquant sur le pavé."},"step6":{"text":"Résolu ! **Annuler** reprend un mauvais chiffre, et la touche **M** note toutes les possibilités dans chaque case vide d’un coup.","textTouch":"Résolu ! **Annuler** reprend un mauvais chiffre, et **Notes**, dans le menu pause, inscrit au crayon toutes les possibilités dans chaque case vide d’un coup."}},"tents":{"step1":{"text":"Plante une tente à côté de chaque arbre — au-dessus, en dessous, à gauche ou à droite, jamais en diagonale. Deux tentes ne peuvent pas se toucher, et les nombres comptent les tentes de chaque ligne et de chaque colonne."},"step2":{"text":"Le **0** au bout de la deuxième ligne veut dire que cette ligne n’a aucune tente. Fais un **clic droit** sur la case à côté de l’arbre pour la marquer en herbe."},"step3":{"text":"La troisième colonne est vide elle aussi. **Glisse en clic droit** de sa case du haut jusqu’à la troisième ligne pour mettre les trois en herbe d’un coup."},"step4":{"text":"L’arbre en bas à droite est dans le coin, avec un autre arbre à côté de lui : sa seule voisine libre est au-dessus. Fais un **clic gauche** sur cette case pour y planter une tente."},"step5":{"text":"Cette tente complète la troisième ligne, donc l’arbre du bord gauche ne peut pas camper en dessous non plus. Fais un **clic gauche** sur la case en haut à gauche."},"step6":{"text":"Un arbre n’a toujours pas de tente, et seule la case à sa gauche est libre. Fais un **clic gauche** dessus pour terminer le campement."},"step7":{"text":"Résolu ! Cliquer de nouveau sur une tente ou une marque d’herbe l’efface, les flèches avec Enter et Space font le même travail, et **Annuler** revient en arrière.","textTouch":"Résolu ! Appuyer de nouveau sur une tente ou une marque d’herbe l’efface, et **Annuler** revient en arrière."}},"towers":{"step1":{"text":"Chaque ligne et chaque colonne porte une tour de chaque hauteur, de 1 à 4. Un nombre du pourtour compte les tours que l’on **voit** depuis là : une tour plus haute cache toutes les plus courtes derrière elle."},"step2":{"text":"Le **1** à droite de la ligne du haut veut dire qu’une seule tour est visible de ce côté : la plus proche doit donc être la plus haute. Clique sur cette case et appuie sur **4**.","textTouch":"Le **1** à droite de la ligne du haut veut dire qu’une seule tour est visible de ce côté : la plus proche doit donc être la plus haute. Appuie sur cette case, puis sur **4** sur le pavé."},"step3":{"text":"Tu peux noter des possibilités au lieu de répondre. Fais un **clic droit** sur la case vide au bout gauche de la ligne du haut et appuie sur **1**.","textTouch":"Tu peux noter des possibilités au lieu de répondre. Appuie sur la case vide au bout gauche de la ligne du haut, active **✎** sur le pavé et appuie sur **1**."},"step4":{"text":"Le **4** à gauche de la ligne dit que les quatre tours sont visibles : elles montent donc 1-2-3-4 depuis ce bout. Fais un **clic gauche** sur la case et appuie sur **1** pour répondre.","textTouch":"Le **4** à gauche de la ligne dit que les quatre tours sont visibles : elles montent donc 1-2-3-4 depuis ce bout. La case est toujours choisie : appuie sur **✎** pour arrêter le crayon, puis sur **1** pour répondre."},"step5":{"text":"Il reste une case, et le **1** au bout de sa ligne remet encore la plus haute tour au plus près. Clique dessus et appuie sur **4**.","textTouch":"Il reste une case, et le **1** au bout de sa ligne remet encore la plus haute tour au plus près. Appuie dessus, puis sur **4** sur le pavé."},"step6":{"text":"Résolu ! **Backspace** vide une case ratée, et **Résoudre**, dans le menu pause, termine un casse-tête qui t’a battu.","textTouch":"Résolu ! **⌫** sur le pavé vide une case ratée. Dans le menu pause, **Notes** inscrit au crayon toutes les possibilités et **Résoudre** termine un casse-tête qui t’a battu."}},"tracks":{"step1":{"text":"Une seule voie ferrée va de l’entrée à gauche à la sortie en bas, et chaque case qu’elle traverse porte exactement deux rails. Les nombres disent par combien de cases de cette colonne ou de cette ligne la voie passe."},"step2":{"text":"Le morceau d’entrée monte déjà dans la **case en haut à gauche**, et les côtés haut et gauche de cette case sont le bord de la grille. Son second rail doit donc partir à droite : **clique** juste à droite de son milieu."},"step3":{"text":"La **colonne de gauche** est comptée **2** et l’entrée en occupe déjà les deux cases : rien ne passe donc dans sa moitié basse. Fais un **clic droit** au milieu d’une case pour la barrer — un **clic droit glissé** en barre toute une série."},"step4":{"text":"La **colonne de droite** est comptée **4** : la voie visite donc chacune de ses cases, et celles du haut et du bas ne peuvent tourner que vers l’intérieur. **Glisse** de la case en haut à droite jusqu’à celle en bas à droite."},"step5":{"text":"La **ligne du bas** a besoin de trois cases et la colonne de gauche est terminée : le coin en bas à droite est donc sur la voie. Elle ne peut pas sortir de la grille, elle tourne donc à gauche puis vers le haut : **clique** sur son côté gauche."},"step6":{"text":"Les comptes passent au gris quand leur ligne est juste et au rouge quand elle ne peut plus tomber juste. Continue autour des bouts libres, ou laisse **Résoudre** terminer la voie."}},"twiddle":{"step1":{"text":"Remets les nombres dans l’ordre, **1 à 9**. Un coup fait pivoter d’un quart de tour un bloc carré de quatre tuiles ; trois tours terminent ce plateau."},"step2":{"text":"Clique au milieu des **quatre tuiles en haut à gauche**. Un clic gauche tourne ce bloc dans le sens antihoraire, ce qui met 1, 2, 3 en haut."},"step3":{"text":"Fais un **clic droit** au milieu des **quatre tuiles en bas à droite** pour tourner ce bloc dans le sens horaire."},"step4":{"text":"Termine par un clic gauche au milieu des **quatre tuiles en bas à gauche**."},"step5":{"text":"Terminé ! Le menu **Type** propose de plus grands blocs et un mode *orientable*, où chaque tuile doit aussi finir dans le bon sens."}},"undead":{"step1":{"text":"Remplis les cinq cases vides avec des fantômes, des vampires et des zombies — le décompte en haut dit combien il en faut de chaque. Chaque nombre compte les monstres vus en regardant le long de cette ligne, et les miroirs dévient ton regard."},"step2":{"text":"En regardant depuis la **gauche de la ligne du haut**, tu ne vois rien ; le miroir renvoie cette même ligne vers le haut, là où le **1** voit un monstre. Seul un fantôme se cache de face et se montre dans un miroir. **Clique** sur cette case."},"step3":{"text":"Le **4** du coin en bas à gauche zigzague entre les miroirs devant trois cases et les voit toutes les trois. Les vampires disparaissent dans un miroir, donc le seul vampire est forcément la case du milieu de la colonne de gauche. **Clique** dessus."},"step4":{"text":"Un clic ne fait que passer d’un monstre au suivant. **Appuie plutôt sur V** : G, V et Z posent directement un fantôme, un vampire ou un zombie dans la case surlignée.","textTouch":"Un appui ne fait que passer d’un monstre au suivant. Appuie plutôt sur **Vampire** sur le pavé : ce monstre va directement dans la case en surbrillance."},"step5":{"text":"La **ligne du milieu** est une vue droite, sans miroir, et les deux **1** voient un seul monstre — le vampire. Ses deux voisines sont donc des fantômes. **Clique** sur la case du centre."},"step6":{"text":"Un **clic droit** note un petit rappel au lieu de poser quoi que ce soit. Essaie sur la case de droite de cette ligne ; chaque clic droit ajoute le monstre suivant."},"step7":{"text":"Il reste deux cases : celle de la note est le troisième fantôme, et la dernière le zombie. Les nombres passent au gris dès que leur ligne est réglée ; **Résoudre** termine le labyrinthe si tu préfères regarder."}},"unequal":{"step1":{"text":"Chaque ligne et chaque colonne veut 1, 2, 3 et 4 une fois chacun — et chaque signe entre deux cases doit pointer vers la **plus petite** des deux."},"step2":{"text":"Le signe pointe ici vers la droite, donc la case de **gauche** est la plus grande. Cette ligne a encore besoin d’un 2 et d’un 3 : clique sur la case de gauche et appuie sur **3**.","textTouch":"Le signe pointe ici vers la droite, donc la case de **gauche** est la plus grande. Cette ligne a encore besoin d’un 2 et d’un 3 : appuie sur la case de gauche, puis sur **3** sur le pavé."},"step3":{"text":"La case que le signe désigne reçoit le plus petit nombre. Clique dessus et appuie sur **2**.","textTouch":"La case que le signe désigne reçoit le plus petit nombre. Appuie dessus, puis sur **2** sur le pavé."},"step4":{"text":"Sa colonne a maintenant un 3, donc cette case ne peut être qu’un 2. Fais un **clic droit** dessus et appuie sur **2** pour le noter au crayon.","textTouch":"Sa colonne a maintenant un 3, donc cette case ne peut être qu’un 2. Appuie dessus, active **✎** sur le pavé et appuie sur **2** pour le noter au crayon."},"step5":{"text":"Une note n’est pas une réponse. Fais un **clic gauche** sur la même case et appuie sur **2** pour la valider.","textTouch":"Une note n’est pas une réponse. La case est toujours choisie : appuie sur **✎** pour arrêter le crayon, puis sur **2** pour la valider."},"step6":{"text":"Il reste une case. Clique dessus et appuie sur **3** pour terminer le carré.","textTouch":"Il reste une case. Appuie dessus, puis sur **3** sur le pavé pour terminer le carré."},"step7":{"text":"Résolu ! **Annuler** reprend un chiffre, et **Résoudre** remplit la réponse si un casse-tête te bat.","textTouch":"Résolu ! **Annuler** reprend un chiffre, **Notes** et **Indice** inscrivent les possibilités au crayon, et **Résoudre** remplit la réponse si un casse-tête te bat."}},"unruly":{"step1":{"text":"Colorie chaque case en noir ou en blanc. Chaque ligne et chaque colonne veut **trois de chaque**, et aucune couleur ne peut apparaître **trois fois d’affilée**. Trois cases sont encore indécises."},"step2":{"text":"Cette ligne a déjà ses trois cases blanches, donc l’indécise doit être noire. Fais un **clic gauche** dessus : un clic gauche peint en noir."},"step3":{"text":"Cette ligne a déjà trois noires, donc sa case indécise est blanche. Fais un **clic droit** dessus — un clic droit va dans l’autre sens et peint d’abord en blanc."},"step4":{"text":"La dernière case indécise a deux noires à sa gauche, et une troisième d’affilée est interdite. Fais un **clic droit** dessus pour la peindre en blanc et terminer la grille."},"step5":{"text":"Résolu ! Cliquer de nouveau sur une case colorée la fait passer à l’autre couleur puis revenir à indécise, et **Annuler** revient sur tes coups."}},"untangle":{"step1":{"text":"Six points sont posés en cercle, reliés par huit segments. Deux paires se croisent — ce sont les rouges. Déplace les points jusqu’à ce qu’il ne reste plus de rouge."},"step2":{"text":"Clique d’abord sur **Aimant**, le bouton en grille à côté d’Annuler (ou appuie sur **G**). Cela active la grille magnétique : un point que tu lâches se pose alors sur l’un des points pâles au centre d’une case."},"step3":{"text":"**Glisse** le point du haut du cercle jusqu’à la case vide du **coin en haut à gauche**.","textTouch":"**Glisse** le point du haut du cercle jusqu’à l’espace vide du **coin en haut à gauche** du plateau. Il n’a pas besoin d’atterrir à un endroit précis — il suffit que le croisement disparaisse."},"step4":{"text":"Il reste un croisement, à droite. **Glisse** le point le plus bas dans le **coin en bas à droite** resté libre.","textTouch":"Il reste un croisement, à droite. **Glisse** le point le plus bas dans le **coin en bas à droite** resté libre — le dernier segment rouge disparaît dès qu’il est dégagé."},"step5":{"text":"Démêlé. **Résoudre** étale n’importe quel enchevêtrement pour toi, et les flèches déplacent un curseur de point en point, avec Enter pour en prendre un et le lâcher.","textTouch":"Démêlé. Les segments rouges sont ceux qui se croisent encore, alors continue de glisser jusqu’à ce qu’il n’en reste aucun — ou laisse **Résoudre** étaler l’enchevêtrement pour toi."}}}'),Fe={$locale:`fr`,$name:q,$dir:`ltr`,ui:J,touchPhrases:Y,messages:X,status:Z,games:Q,tutorials:$};export{g as A,ee as B,A as C,S as D,w as E,o as F,i as I,oe as L,f as M,u as N,b as O,c as P,ie as R,M as S,E as T,t as V,H as _,Ee as a,I as b,be as c,me as d,fe as f,W as g,se as h,Oe as i,m as j,v as k,ve as l,ce as m,Me as n,we as o,ue as p,Ae as r,Se as s,Pe as t,ge as u,B as v,O as w,P as x,R as y,ne as z};
//# sourceMappingURL=i18n-fr-vEsFmPF-.js.map