import{t as e}from"./index-DIYwYEVR.js";var t=e({default:()=>n}),n="## Controles comunes\n\n- **Nuevo** reparte un rompecabezas nuevo y **Reiniciar** vuelve al principio de este;\n  **Deshacer** y **Rehacer** recorren tus movimientos, y un reinicio también se puede\n  deshacer.\n- **Resolver** muestra la respuesta cuando un rompecabezas la ofrece. Añade un paso que\n  puedes deshacer.\n- Un clic derecho es la segunda acción en la mayoría de los rompecabezas: marcar, poner una\n  bandera o girar en sentido contrario. Un clic central, en los rompecabezas que lo usan, es\n  la tercera.\n- **Tipo** cambia entre tamaños y dificultades predefinidos; **Personalizado…** te deja\n  elegir los tuyos.\n- **Compartir** muestra códigos que puedes enviar para que otra persona juegue exactamente\n  este rompecabezas.\n\n### Teclado (Keyboard)\n\n- **Partida nueva**: `N` · **Deshacer**: `U` o `Ctrl+Z` · **Rehacer**: `R` o `Ctrl+Y`\n- **Resolver**: `Ctrl+S` (donde esté disponible). **Esta ayuda**: `?`, y `Esc` la cierra. **Pausa**: `Esc`.\n- En la mayoría de los rompecabezas, las flechas mueven un cursor por el tablero, `Enter`\n  hace un clic izquierdo sobre él y `Space` un clic derecho.\n- En los menús, las flechas pasan de una tarjeta o un botón al siguiente, `Enter` elige\n  y `Esc` vuelve atrás.\n- También se puede jugar con mando: la cruceta mueve, `A` elige o hace clic, `X` es el\n  clic derecho, `B` vuelve atrás, `Start` pausa, `LB` y `RB` deshacen y rehacen, y `Y`\n  da una pista.\n  En los rompecabezas en los que se escriben números, `RT` te lleva a las teclas de la pantalla y de vuelta.\n",ee=e({default:()=>te}),te=`## En una pantalla táctil

- **Toca** para la acción principal y **mantén pulsado** para la segunda. Si un
  rompecabezas tiene una tercera, toca con **dos dedos**.
- El primer botón redondo de la barra de herramientas (un punto dentro de un cuadrado)
  intercambia las dos, para que la acción que más usas esté siempre a un solo toque;
  mientras están intercambiadas, muestra una banderita encendida. Entonces una pulsación
  larga hace la otra.
- **Pellizca** el tablero para agrandar las casillas de una cuadrícula grande y luego
  **arrastra con dos dedos** para moverte por ella. Vuelve a juntar los dedos para ver el
  rompecabezas entero otra vez. En **Pausa** tienes lo mismo en botones: **Más pequeño** y
  **Más grande**.
- **Pausa** reúne el resto de los controles: el tipo de rompecabezas, rompecabezas nuevo,
  reiniciar, resolver, compartir y los Ajustes de sonido e idioma. El reloj se detiene mientras está abierto.
`,ne=e({default:()=>re}),re=`# Caja negra

Hay unas bolas escondidas dentro de una caja sombreada. Alrededor de la caja corre un
marco de puertos láser. Dispara un láser dentro de la caja desde cualquier puerto y mira
qué sale: deduce a partir de los resultados dónde tienen que estar las bolas, márcalas y
luego haz que se compruebe tu respuesta.

Un rayo avanza en línea recta a menos que una bola se interponga:

- Una bola justo delante **absorbe** el rayo. El puerto muestra **H** (un impacto, _hit_).
- Una bola en diagonal por delante **desvía** el rayo 90°, alejándolo de la bola. Si hay
  bolas en ambas diagonales, el rayo da media vuelta. Los desvíos pueden encadenarse, así
  que un rayo puede dar vueltas antes de salir.
- Un rayo que vuelve a salir por el mismo puerto por el que entró está **reflejado**, y se
  muestra como **R**. También lo está un rayo que se desviaría antes siquiera de entrar en
  la caja, porque hay una bola en diagonal junto a su entrada.
- En cualquier otro caso el rayo sale por otro sitio y los dos puertos reciben el mismo
  **número** (y el mismo color), para que veas por dónde entró y salió cada disparo.

Cuando hayas marcado el número correcto de bolas, aparece un botón verde en la esquina
superior izquierda. Haz clic en él para comprobar. Tu disposición cuenta como correcta si
ningún láser podría distinguirla de la del programa: con varias bolas puede haber más de
una disposición que se comporte igual, y cualquiera de ellas gana.

Una disposición incorrecta termina la partida y muestra la respuesta, así que comprueba
solo cuando estés seguro: las bolas que encontraste son negras, las marcas erróneas se
tachan en rojo, las bolas que se te escaparon son rojas, cualquier láser que disparaste y
que tu disposición explica mal aparece rodeado, y los láseres que nunca disparaste y que
habrían distinguido las dos disposiciones se disparan ahora y se escriben en rojo.
Deshacer te lleva de vuelta para seguir intentándolo. Resolver se rinde y coloca las bolas
de verdad.

## Controles

La barra de estado cuenta las bolas que has marcado y los láseres que has disparado, y
tras una comprobación indica cuántas de tus bolas estaban mal y cuántas se te escaparon.

### Ratón y pantalla táctil

- **Haz clic en un puerto** para disparar un láser desde él. Haz clic en un puerto que ya
  se haya disparado para iluminar los dos extremos de ese rayo; otro clic en él, o en cualquier
  otro sitio, apaga la luz.
- **Haz clic dentro de la caja** para marcar una bola ahí; haz clic de nuevo para quitar
  la marca.
- **Haz clic derecho en una casilla** para **bloquearla** y que no puedas cambiarla por
  accidente; haz clic derecho de nuevo para desbloquearla. Un clic derecho en un puerto
  bloquea o desbloquea toda la fila o columna junto a él.
- **Haz clic en el botón de la esquina** para que se comprueben tus marcas.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor por la caja y sus puertos.
- **Enter** actúa como un clic izquierdo: dispara, marca o comprueba cuando el cursor está
  sobre el botón.
- **Space** actúa como un clic derecho: bloquea o desbloquea.

## Parámetros

- **Ancho** y **alto** de la caja. Cada fila y cada columna tiene un puerto láser en ambos
  extremos.
- **Número de bolas**: cuántas bolas hay escondidas. Indica un solo número, o un intervalo
  como \`3-6\` para que elija el programa; entonces también tendrás que deducir cuántas hay,
  y el botón de comprobación aparece con cualquier número de marcas dentro del intervalo.
`,ie=e({default:()=>ae}),ae=`# Puentes

Sobre el agua hay islas repartidas, cada una con un número. Únelas con puentes de modo
que:

- cada puente vaya en línea recta, en horizontal o en vertical, entre dos islas;
- el número de una isla sea exactamente la cantidad de puentes que la tocan;
- dos islas puedan unirse con puentes paralelos, pero con no más de dos (este límite se
  puede cambiar en los ajustes personalizados);
- ningún puente cruce a otro;
- se pueda llegar desde cualquier isla a cualquier otra caminando por los puentes.

Los errores se muestran en rojo: una isla con demasiados puentes, una isla que ya no puede
conseguir suficientes (sus vecinas restantes están llenas, o las únicas rutas están
bloqueadas por otros puentes o por tus propias marcas de “sin puente”), y un grupo de
islas que ya está completo pero aislado del resto. Si los bucles no están permitidos, los
puentes que forman un bucle también se muestran en rojo.

## Controles

**Resolver** rellena la solución y quita los puentes que no corresponden.

### Ratón y pantalla táctil

- **Arrastra** desde una isla hacia una vecina para tender un puente entre ellas. Solo
  tienes que moverte lo suficiente para dejar clara la dirección; el puente se ajusta a la
  isla más cercana en ese sentido. Arrastra otra vez para un segundo puente paralelo;
  arrastrar una vez más cuando se ha alcanzado el límite los quita todos.
- **Arrastra con clic derecho** de la misma manera para anotar una marca de “aquí no hay
  puente”, o para borrarla.
- **Haz clic en** una isla para marcarla como terminada. Se vuelve gris y sus puentes
  quedan bloqueados para que no puedas cambiarlos por accidente; haz clic de nuevo para
  desbloquearla.
- **Borrar** (el botón de la goma junto a Deshacer) hace que arrastrar sirva para quitar:
  arrastra desde una isla hacia una vecina para eliminar todos los puentes entre ellas, o
  la marca de “no hay puente” que haya allí. Púlsalo otra vez para volver a tender puentes.
- **Guías** muestra líneas tenues allí donde podría ir un puente, y las vuelve a ocultar.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor de isla en isla.
- **Enter** seguido de una flecha tiende un puente en esa dirección; **Space** seguido de
  una flecha coloca una marca. Pulsar **Enter** dos veces marca la isla como terminada.
- **E** es el botón **Borrar** y **G** el botón **Guías**.

## Parámetros

- **Ancho** y **alto** de la cuadrícula, al menos 3 cada uno.
- **Dificultad**: los rompecabezas _Fácil_ solo requieren mirar una isla cada vez: cuando
  sus puentes restantes llenan exactamente el espacio que queda, o cuando su número es
  demasiado grande para saltarse alguna vecina. Los de nivel _Medio_ también te hacen
  pensar en conexiones concretas: qué puente tiene que estar porque la isla no se puede
  completar sin él y (con los bucles prohibidos) qué conexiones cerrarían un bucle. Los de
  nivel _Difícil_ te piden anticiparte un paso: ¿completaría este puente un grupo de islas
  aislado del resto, o dejaría alguna isla sin salida? Cada rompecabezas tiene exactamente
  una solución.
- **Permitir bucles**: activado por defecto. Si se desactiva, la red de puentes terminada
  tiene que ser un árbol (ningún camino de puentes puede volver a su punto de partida), y
  el rompecabezas se construye para poder resolverse teniendo esto en cuenta.
- **Máx. de puentes por dirección**: el límite de puentes paralelos, normalmente 2. Menos
  es más fácil.
- **% de casillas con isla**: aproximadamente qué parte de la cuadrícula se convierte en
  islas. Algunas disposiciones no admiten tantas, así que es un límite superior.
- **Factor de expansión**: al hacer crecer el mapa, la probabilidad de que una isla nueva
  se coloque lo más lejos posible en vez de en algún punto más cercano. Los valores altos
  dan rompecabezas más dispersos y fáciles; los bajos, más abarrotados.
`,oe=e({default:()=>r}),r=`# Cubo

Un sólido descansa sobre una cuadrícula, y unas cuantas casillas de la cuadrícula están
pintadas de azul: exactamente tantas como caras tiene el sólido. Al rodar, el sólido se
inclina sobre una arista de la cara en la que se apoya, de modo que la cara siguiente cae
sobre la casilla vecina. Cada vez que aterriza, la cara de abajo y la casilla en la que
cae intercambian colores: si una cara lisa cae sobre una casilla azul, el azul se queda en
el sólido; si una cara azul cae sobre una casilla lisa, el azul se queda en la casilla. El
rompecabezas termina cuando todas las caras son azules a la vez. La barra de estado cuenta
tus movimientos, así que intenta terminar con los menos posibles.

La versión clásica hace rodar un cubo sobre una cuadrícula de cuadrados. En una cuadrícula
triangular puedes hacer rodar en su lugar un tetraedro, un octaedro o un icosaedro. Ten
en cuenta que cada cara de un tetraedro que rueda solo puede llegar a una cuarta parte de
las casillas, y que las caras de un octaedro alternan entre los triángulos que apuntan
hacia arriba y hacia abajo; las casillas azules siempre se colocan de forma que el
rompecabezas se pueda terminar.

## Controles

Este rompecabezas no tiene botón Resolver. Cuando todas las caras son azules, puedes seguir
haciendo rodar el sólido sin estropear nada.

### Ratón y pantalla táctil

- **Haz clic en** cualquier sitio para hacer rodar el sólido una casilla hacia ese
  lado. En una cuadrícula de cuadrados eso significa arriba, abajo, izquierda o
  derecha; en una cuadrícula triangular, el triángulo actual tiene tres vecinos entre los
  que elegir. Un clic llega a todos los vecinos del sólido, así que con esto basta para
  jugar en cualquiera de las cuadrículas.

### Teclado (Keyboard)

- **Las flechas** hacen rodar el sólido en las cuatro direcciones principales. En una
  cuadrícula triangular, un triángulo solo tiene un vecino arriba o abajo, así que la otra
  tecla vertical no hace nada.
- **Home**, **Page Up**, **End** y **Page Down** (o las teclas de las esquinas del teclado
  numérico, 7, 9, 1 y 3) hacen rodar en diagonal en las cuadrículas triangulares, eligiendo
  la arista que quede más cerca en esa dirección.

## Parámetros

- **Tipo de sólido**: tetraedro, cubo, octaedro o icosaedro. El cubo usa una cuadrícula
  de cuadrados; los demás, una cuadrícula de triángulos.
- **Ancho / arriba** y **Alto / abajo**: para el cubo, el tamaño de la cuadrícula de
  cuadrados. Para las cuadrículas triangulares son las longitudes de los bordes superior e
  inferior de un área hexagonal (si pones uno de ellos a cero, sale un triángulo simple).
  La cuadrícula tiene que dejar sitio para todas las casillas azules más una casilla vacía
  de salida.
`,i=e({default:()=>a}),a=`# Dominosa

Un juego completo de fichas de dominó (una por cada pareja de números desde 0 hasta el
máximo, dobles incluidos) se colocó llenando un rectángulo. Después se copiaron los
números y se retiraron las fichas. Tu tarea es averiguar dónde estaban: divide la
cuadrícula en parejas de casillas adyacentes de modo que cada ficha del juego se use
exactamente una vez.

Una ficha colocada donde su pareja de números ya aparece en otro sitio se muestra en rojo,
igual que una casilla vacía a la que ya no puede llegar ninguna ficha.

## Controles

El rompecabezas termina cuando todas las casillas están cubiertas y ninguna ficha está en
rojo. **Resolver** coloca todas las fichas de la solución y borra lo que hubieras puesto.

### Ratón y pantalla táctil

- **Haz clic en** el límite entre dos números adyacentes (también sirve la mitad de casilla
  más cercana a ese límite) para colocar una ficha sobre ellos. Vuelve a hacer clic en el
  mismo límite para quitarla. Una ficha colocada sobre parte de otra la sustituye.
- **Haz clic derecho en** un límite para trazar una línea a lápiz sobre él, como nota de
  que esos dos números **no** forman una ficha. Haz clic derecho de nuevo para borrar la
  línea. No se pueden trazar líneas junto a una ficha, y colocar una ficha borra las líneas
  que la tocan.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor por la cuadrícula, deteniéndose en los centros de las
  casillas y en los límites entre casillas. En un límite, el cursor perfila la ficha que
  colocaría.
- **Enter** coloca o quita esa ficha y **Space** traza o borra una línea ahí.

## Parámetros

- **Número máximo en las fichas**: las fichas van de 0-0 hasta N-N, y la cuadrícula mide
  (N+2) casillas de ancho por (N+1) de alto, así que un máximo de 6 da una cuadrícula
  de 8×7.
- **Dificultad**: cuánto razonamiento exige el rompecabezas. Los rompecabezas **Muy fácil** solo
  tienen alguna ficha con un único sitio posible, o alguna casilla con una única ficha que pueda
  cubrirla. **Fácil** añade dos argumentos más: si todas las formas de cubrir una casilla usan la
  misma ficha, esa ficha no va en ningún otro sitio; y si todos los sitios donde podría ir una
  ficha descartan una posición, esa posición queda descartada. **Difícil** añade el recuento (una
  ficha que dejaría aislado un número impar de casillas es imposible; un conjunto de casillas con
  el mismo número puede reclamar las fichas que comparten) y los rompecabezas **Extremo** te
  obligan a seguir las consecuencias de una colocación hasta que choquen. Todos ellos tienen
  exactamente una solución. Los rompecabezas **Ambiguo** no se comprueban en absoluto: pueden
  tener varias soluciones y requerir tanteo; encontrar cualquier forma de cubrirlo gana.
`,o=e({default:()=>s}),s=`# Quince

El clásico rompecabezas de piezas deslizantes. La cuadrícula está llena de piezas
numeradas y un hueco vacío. Desliza piezas hacia el hueco hasta que los números queden en
orden de izquierda a derecha y de arriba abajo, con el hueco en la esquina inferior
derecha.

## Controles

**Resolver** salta directamente a la disposición terminada. No te muestra cómo llegar a
ella, pero es una forma práctica de reiniciar para practicar secuencias de movimientos.

### Ratón y pantalla táctil

- **Haz clic en** cualquier pieza de la misma fila o columna que el hueco para deslizarla
  (junto con todo lo que haya entre ella y el hueco) a su sitio.

### Teclado (Keyboard)

- **Las flechas** deslizan una pieza hacia el hueco en la dirección de la flecha: la
  **flecha arriba** sube al hueco la pieza que tiene debajo.

## Parámetros

- **Ancho** y **alto** de la cuadrícula (por defecto, el clásico 4×4).
`,c=e({default:()=>l}),l=`# Relleno

Algunas casillas de la cuadrícula ya contienen una cifra; el resto están vacías. Escribe
una cifra en cada casilla vacía de modo que cada grupo conectado de cifras iguales ocupe
exactamente tantas casillas como indica la cifra: cada 3 pertenece a un grupo de tres 3,
cada 1 está solo, y así sucesivamente. Las casillas solo se consideran conectadas por sus
lados, no por sus esquinas. De ahí se deduce que ninguna casilla contiene un 0, que dos 1
nunca están uno al lado del otro y que ningún grupo tiene más de nueve casillas. Una cifra
dada no tiene por qué ser el inicio de su grupo: varios 4 dados pueden acabar en un mismo
grupo, y un grupo puede no contener ninguna cifra dada.

Aparecen líneas gruesas entre casillas cuyas cifras son distintas, y alrededor de cualquier
grupo que ya tiene el tamaño correcto (o que es demasiado grande). Una cifra se vuelve roja
cuando su grupo ha crecido más de lo que indica la cifra, o cuando ha quedado encerrado sin
espacio para alcanzar su tamaño. Es el rompecabezas que Nikoli publica como Fillomino.

## Controles

Las cifras dadas están dibujadas en tinta y no se pueden cambiar; las tuyas son azules.
**Resolver** rellena la solución.

### Ratón y pantalla táctil

- **Haz clic en** una casilla vacía para seleccionarla y luego usa el teclado en pantalla
  para escribir una cifra. **⌫** en el teclado en pantalla vuelve a vaciar
  la selección.
- **Arrastra** por varias casillas para seleccionarlas todas, de modo que una sola cifra
  rellene a la vez todas las casillas seleccionadas.
- **Haz clic derecho** para añadir una casilla a la selección sin empezar de nuevo;
  un segundo clic derecho en una casilla seleccionada la vuelve a sacar de la selección.
- **Rellenar** (el botón junto a Deshacer) extiende una cifra: arrastra desde una casilla
  que tenga una por las casillas de alrededor y todas reciben esa cifra al soltar, sin
  necesidad del teclado en pantalla. Los clics y arrastres que empiezan en una casilla
  vacía siguen seleccionando. Púlsalo otra vez para volver a seleccionar.

### Teclado (Keyboard)

- Con una o más casillas seleccionadas, **escribe una cifra** para ponerla en todas ellas.
  La cifra \`0\`, o **Backspace**, las vuelve a vaciar.
- **Las flechas** mueven un cursor de teclado, y la cifra que escribas rellena la casilla
  que tiene debajo.
- **Space** o **Enter** añade o quita de la selección la casilla bajo el cursor, para poder
  rellenar varias casillas con una sola pulsación.
- **F** es el botón **Rellenar**.

## Parámetros

- **Ancho** y **Alto**: el tamaño de la cuadrícula. Los grupos nunca son mayores que el
  lado más largo (o que 9), así que las cuadrículas pequeñas solo usan cifras pequeñas.
`,u=e({default:()=>d}),d=`# Voltea

Una cuadrícula de casillas, unas encendidas y otras apagadas. Tu objetivo es encenderlas
todas a la vez. Pulsar una casilla la cambia entre encendida y apagada, pero también cambia
algunas de sus vecinas: el pequeño diagrama dibujado en cada casilla muestra exactamente
cuáles. Con las formas **Cruces** por defecto, cada pulsación cambia la casilla y sus
cuatro vecinas ortogonales; con las formas **Aleatorias**, cada casilla tiene su propio
patrón irregular, así que el rompecabezas se juega de forma distinta cada vez.

Como pulsar una casilla dos veces se anula y el orden de las pulsaciones nunca importa,
una solución no es más que un conjunto de casillas que hay que pulsar una vez cada una.

## Controles

La barra de estado cuenta tus pulsaciones. **Resolver** enciende todo el tablero y perfila
en rojo las casillas que pulsó para conseguirlo. Si sigues pulsando casillas después, los
contornos rojos indican qué casillas todavía necesitan una pulsación para volver al estado
terminado.

### Ratón y pantalla táctil

- **Haz clic en** una casilla para pulsarla.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor por la cuadrícula; **Enter** o **Space** pulsa la
  casilla bajo el cursor.

## Parámetros

- **Ancho** y **alto** de la cuadrícula, de 2 a 10 casillas por lado.
- **Tipo de forma**: _Cruces_ cambia cada casilla junto con sus vecinas ortogonales;
  _Aleatorias_ da a cada casilla una forma generada al azar dentro del bloque de 3×3 que la
  rodea.
`,f=e({default:()=>p}),p=`# Inundación

La cuadrícula es un mosaico de casillas de colores al azar. Controlas la casilla de la
esquina superior izquierda junto con todas las casillas unidas a ella por un camino del
mismo color. Cada movimiento vuelve a pintar toda esa zona conectada del color que elijas,
así que las casillas vecinas de ese color pasan también a formar parte de tu zona. Sigue
hasta que toda la cuadrícula sea de un solo color.

La trampa está en el límite de movimientos. Antes de empezar, el juego resuelve la
cuadrícula por sí mismo y te da su propio número de movimientos más unos cuantos de
reserva; si agotas el límite antes de que la cuadrícula sea uniforme, pierdes la ronda.
Aun así puedes seguir rellenando después para ver la cuadrícula terminada, pero ya no
cuenta como victoria.

## Controles

La barra de estado muestra cuántos movimientos has usado del límite. **Resolver** deja que
el solucionador termine la cuadrícula por ti; cuenta como resolución automática y no como
una victoria tuya.

### Ratón y pantalla táctil

- **Haz clic en** cualquier casilla cuyo color sea distinto del de tu zona para volver a
  pintar la zona de ese color. Un clic en una casilla que ya coincide no hace nada y no
  gasta ningún movimiento.
- **Pista** juega por ti el siguiente color del solucionador, como un movimiento normal
  que puedes deshacer. Con unas pocas pistas, la victoria y su crédito siguen siendo tuyos.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor por la cuadrícula; **Enter** o **Space** vuelve a
  pintar la zona del color que hay bajo el cursor.

## Parámetros

- **Ancho** y **alto** de la cuadrícula, hasta 32 casillas por lado.
- **Colores**: cuántos colores usa la cuadrícula, de 3 a 10. Menos colores significan
  menos opciones y un juego más fácil.
- **Movimientos extra permitidos**: el número de movimientos de reserva que se suman a la
  longitud de la solución del solucionador para formar el límite de movimientos. Con 0
  tienes que ser al menos tan eficiente como el solucionador; es bueno pero no perfecto,
  así que es posible superar su marca.
`,m=e({default:()=>h}),h=`# Galaxias

La cuadrícula está salpicada de puntos, que pueden estar en el centro de una casilla, en
una línea entre dos casillas o en una esquina donde se juntan cuatro. Traza paredes a lo
largo de las líneas de la cuadrícula para dividirla en regiones de modo que cada región
contenga exactamente un punto, y que ese punto sea el centro de simetría de la región: si
giras la región 180° alrededor de su punto, tiene que coincidir exactamente consigo misma.
Todas las casillas tienen que acabar en alguna región, así que ninguna región puede quedar
sin punto.

Los rompecabezas se generan al azar con una solución única. Es el rompecabezas “Tentai
Show” de Nikoli, también conocido como Spiral Galaxies.

## Controles

Una región cerrada y correcta (un punto, en su centro de simetría, sin paredes sueltas
dentro) se sombrea. Un punto se vuelve rojo cuando lo atraviesa una pared, o cuando es el
único punto de una región cerrada que no es simétrica respecto a él; una región cerrada
sin ningún punto se raya. El rompecabezas está completo cuando todas las casillas están
sombreadas. **Resolver** dibuja la solución completa.

### Ratón y pantalla táctil

- **Haz clic en** una línea de la cuadrícula para trazar una pared ahí, o haz clic en una
  pared para quitarla.
- **Arrastra desde un punto** hasta una casilla para dejar ahí una pequeña flecha que apunta de
  vuelta al punto, como recordatorio de que la casilla pertenece a la galaxia de ese punto.
- **Arrastra con clic derecho** una flecha existente para moverla. Suéltala de nuevo sobre
  su punto, o arrástrala fuera de la cuadrícula, para descartarla; si la sueltas en una
  casilla que ya tiene una flecha, ocupa el lugar de esa flecha.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor por casillas, líneas y esquinas por igual.
- **Enter** sobre una línea traza o quita su pared; **Enter** sobre un punto recoge una
  flecha, que sigue al cursor hasta que vuelvas a pulsar **Enter** para soltarla.

## Parámetros

- **Ancho** y **alto** de la cuadrícula, al menos 3 cada uno. Los predefinidos van de 7×7
  a 15×15.
- **Dificultad**: los rompecabezas _Medio_ se pueden resolver paso a paso a partir de lo que
  impone la regla de simetría; los _Extremo_ pueden exigir que pruebes una suposición y veas
  adónde lleva.
`,g=e({default:()=>_}),_=`# Adivina

El programa ha escondido una fila de clavijas de colores detrás de la tapa de la
parte superior del tablero. Tu tarea es reproducirla exactamente, usando solo las marcas
que recibes por cada intento: una clavija **negra** por cada clavija del color correcto en
el sitio correcto, y una clavija **hueca** por cada clavija adicional cuyo color aparece en
otro lugar de la fila oculta. Las marcas te dicen _cuántas_ clavijas acertaste, no
_cuáles_. Encuentra la fila antes de quedarte sin intentos y la tapa se levanta; si te
quedas sin ellos, se levanta igualmente para mostrarte lo que no acertaste.

Es el juego que Hasbro vende como _Mastermind_: seis colores, cuatro clavijas y diez
intentos. Todos los ajustes se pueden cambiar.

## Controles

**Resolver** levanta la tapa y muestra la respuesta; eso termina la partida igual que
quedarse sin intentos.

### Ratón y pantalla táctil

- **Haz clic en** un color de la bandeja de la izquierda para seleccionarlo (el anillo
  muestra cuál), y luego **haz clic en un hueco** de la fila actual para colocar una
  clavija de ese color. Un clic en una clavija de un intento anterior también selecciona su
  color.
- **Arrastra** una clavija desde la bandeja, desde un intento anterior o desde la fila
  actual hasta un hueco. Arrastrar una clavija fuera de la fila actual y soltarla en
  cualquier otro sitio la quita.
- **Haz clic derecho en** un hueco para vaciarlo.
- Cuando la fila está completa, se ilumina la pequeña zona de marcas a su derecha:
  **haz clic en ella** para enviar el intento.
- **Haz clic central en** un hueco para _retener_ esa clavija: una clavija retenida pasa al
  siguiente intento después de las marcas, lo que te ahorra volver a colocar las clavijas
  de las que ya estás seguro. Hazlo de nuevo para soltar la clavija.
- **Retener** (el botón junto a Deshacer) hace lo mismo con un clic normal: mientras está
  activado, hacer clic en un hueco de la fila actual retiene o suelta su clavija en lugar
  de colocar un color. Haz clic en la bandeja para cambiar de color como siempre; pulsa
  **Retener** otra vez para volver a colocar clavijas.
- **Letras** en el menú de pausa escribe una letra en cada clavija, por si algunos colores te
  parecen similares, y las vuelve a quitar.

### Teclado (Keyboard)

- **Las flechas**: arriba y abajo eligen un color de la bandeja; izquierda y derecha
  mueven un cursor por la fila actual y, cuando la fila está completa, hasta la zona de
  marcas.
- **Enter** o **Space** coloca el color seleccionado en el hueco bajo el cursor, o envía
  el intento cuando el cursor está en la zona de marcas.
- **Backspace** o \`D\` vacía el hueco bajo el cursor.
- \`H\` retiene o suelta la clavija bajo el cursor.
- \`K\` es el botón **Retener** y \`L\` el botón **Letras**.

## Parámetros

- **Colores**: de cuántos colores distintos se forma la fila oculta, de 2 a 10. Más colores
  hacen que la fila sea más difícil de acotar.
- **Clavijas por intento**: la longitud de la fila oculta.
- **Intentos**: cuántas oportunidades tienes.
- **Permitir huecos vacíos**: te deja dejar huecos vacíos en un intento. Un hueco vacío
  nunca puede acertar, así que esto facilita sondear los colores. La propia fila oculta
  nunca tiene huecos vacíos.
- **Permitir repetidos**: permite que la fila oculta (y tus intentos) usen un color más de
  una vez. Desactivarlo reduce considerablemente el número de filas posibles.
`,v=e({default:()=>y}),y=`# Inercia

Eres una bola sobre una cuadrícula llena de obstáculos y quieres todas las gemas del
tablero. La trampa está en el nombre: cuando la bola empieza a rodar, no para hasta
que algo la frena. Rueda de largo tanto por las gemas (recogiéndolas al pasar) como por
las casillas vacías, y solo se para cuando la casilla siguiente es un muro o cuando cae en
una parada. Los movimientos diagonales se cuelan entre dos muros que solo se tocan por una
esquina. Rodar sobre una mina es mortal, aunque ese mismo movimiento haya recogido la
última gema.

Cada rompecabezas se genera de modo que todas sus gemas se pueden recoger desde la casilla
de salida, pero nada te impide rodar hasta un rincón del tablero desde el que alguna gema
ya no se puede alcanzar. Morir o quedarte atascado no tiene más castigo que un contador de
muertes en la barra de estado: simplemente deshaz y prueba otro camino.

## Controles

**Deshacer** después de caer en una mina te permite seguir desde antes del movimiento
fatal. **Resolver** calcula una ruta desde donde estás que recoge todas las gemas
restantes y luego hace rodar la bola por ella por ti; Deshacer retira toda la ruta de una
vez.

### Ratón y pantalla táctil

- **Haz clic en** una casilla y la bola sale en la dirección de esa casilla respecto a
  ella, redondeada a la más cercana de las ocho direcciones de la rosa de los vientos,
  diagonales incluidas. Un clic en el margen fuera de la cuadrícula también funciona, lo
  que viene bien cuando la bola está en un borde.

### Teclado (Keyboard)

- **Las flechas** hacen rodar la bola hacia arriba, abajo, la izquierda o la derecha.
- **Home**, **Page Up**, **End** y **Page Down** la hacen rodar en diagonal (arriba a la
  izquierda, arriba a la derecha, abajo a la izquierda, abajo a la derecha). El teclado
  numérico funciona como parece: el 8 es arriba, el 3 es abajo a la derecha, etc.; la fila
  de números hace lo mismo.

## Parámetros

- **Ancho** y **alto** de la cuadrícula. Aproximadamente una quinta parte de las casillas
  son muros, una quinta parte paradas, una quinta parte minas y una quinta parte gemas.
`,b=e({default:()=>x}),x=`# Keen

Rellena la cuadrícula con cifras del 1 a su tamaño de modo que cada fila y cada columna
contenga cada cifra exactamente una vez. La cuadrícula también está dividida en “jaulas”
con un contorno grueso, cada una con una pequeña pista en su casilla superior izquierda:
un total y un signo aritmético. Las cifras de la jaula deben dar ese total con esa
operación:

- \`7+\` significa que las cifras de la jaula suman 7.
- \`12×\` significa que su producto es 12.
- \`2−\` siempre está en una jaula de dos casillas y significa que una cifra supera en 2 a la
  otra (en cualquier orden).
- \`3÷\` también está en dos casillas y significa que una cifra es el triple de la otra.

A diferencia del modo Killer de Solo, una jaula _puede_ contener la misma cifra dos veces,
siempre que las dos copias no estén en la misma fila ni en la misma columna. No hay cifras
dadas; las pistas son todo lo que tienes, y cada rompecabezas tiene exactamente una
solución. Es el rompecabezas que se publica como KenKen.

## Controles

Una cifra que aparece dos veces en su fila o columna se vuelve roja, igual que la pista de
una jaula que está completamente rellena pero no da su total. **Resolver** rellena la
solución.

### Ratón y pantalla táctil

- **Haz clic en** una casilla para seleccionarla y luego usa el teclado en pantalla para escribir
  una cifra. Un segundo clic en la casilla seleccionada la deselecciona.
- **⌫** en el teclado en pantalla vuelve a vaciar la casilla seleccionada, y **✎** activa
  las **anotaciones a lápiz**: lo que elijas entonces se escribe como una pequeña nota, y
  la misma cifra otra vez borra esa nota. Las anotaciones a lápiz solo están para ayudarte
  a pensar; al escribir una cifra se borran.
- **Haz clic derecho en** una casilla vacía para seleccionarla directamente para
  anotaciones a lápiz.
- **Marcas** en el menú de pausa rellena cada casilla vacía con un juego completo
  de anotaciones a lápiz.
- **Resaltar** (la lupa junto a Deshacer) destaca todas las casillas que tienen la misma
  cifra que la última casilla en la que hiciste clic, y muestra esa cifra en negrita entre
  las anotaciones a lápiz. Púlsalo otra vez para desactivarlo.

### Teclado (Keyboard)

- **Escribe una cifra** para rellenar la casilla seleccionada, o para anotarla allí si la
  casilla se seleccionó para anotaciones a lápiz.
- **Space** o **Backspace** vacía la casilla seleccionada (su cifra o todas sus
  anotaciones a lápiz).
- **Las flechas** mueven un cursor de teclado, y las cifras que escribas van a la casilla
  que tiene debajo.
- **Enter** cambia el cursor entre la entrada normal y la de anotaciones a lápiz.
- **M** es el botón **Marcas** y **L** el botón **Resaltar**.

## Parámetros

- **Tamaño de la cuadrícula**: de 3 a 9. Las cifras mayores que 9 serían poco manejables,
  así que 9 es el límite.
- **Dificultad**: el tipo de razonamiento más difícil que necesita el rompecabezas. _Fácil_ solo
  te pide averiguar qué cifras pueden aparecer en una jaula; _Medio_ te pide seguir en qué
  casilla de una jaula podría estar cada cifra; _Difícil_ añade razonamientos entre jaulas (las
  cifras que una jaula debe colocar en una fila no pueden estar en otra parte de ella) y
  conjuntos de casillas que se reparten un conjunto de cifras; _Experto_ añade cadenas de
  implicaciones; y los rompecabezas _Extremo_ no se pueden terminar sin adivinar y retroceder.
  Los rompecabezas más difíciles tardan más en generarse, y las cuadrículas de 3×3 nunca pasan de
  Medio.
- **Solo multiplicación**: todas las pistas son productos, lo que elimina las jaulas
  fáciles de dos casillas y da un rompecabezas bastante distinto.
`,S=e({default:()=>C}),C=`# Ilumina

Una cuadrícula de casillas blancas y negras. Coloca bombillas en casillas blancas de modo
que todas las casillas blancas queden iluminadas. Una bombilla ilumina su propia casilla y
brilla a lo largo de su fila y su columna hasta que una casilla negra o el borde se
interpone. Al terminar deben cumplirse tres cosas:

- todas las casillas blancas están iluminadas;
- ninguna bombilla está iluminada por otra, es decir, no hay dos bombillas que se vean a
  lo largo de una fila o columna;
- una casilla negra con un número tiene exactamente ese número de bombillas en las
  casillas situadas justo encima, debajo, a la izquierda y a la derecha. Las casillas
  negras sin número pueden tener cualquier número de bombillas al lado.

Las casillas iluminadas se tiñen de amarillo. Las bombillas que se iluminan entre sí se
vuelven rojas, y también un número que ya no se puede cumplir: ya tiene demasiadas
bombillas al lado o ya no queda sitio para suficientes.

## Controles

El rompecabezas está terminado cuando toda la cuadrícula brilla y no se muestra nada en
rojo. **Pista** coloca una sola bombilla (o quita una que la solución no tiene) y te deja
el resto a ti; el rompecabezas sigue en juego, y con unas pocas pistas la victoria, y su
crédito, siguen siendo tuyos. **Resolver** coloca las bombillas de una solución completa y
deja en su sitio las cruces que hayas dibujado.

### Ratón y pantalla táctil

- **Haz clic en** una casilla blanca para colocar una bombilla, y otra vez para quitarla.
- **Haz clic derecho en** una casilla blanca para anotar una cruz que significa “aquí no
  puede ir ninguna bombilla”; haz clic derecho otra vez para borrarla. Una casilla con
  cruz no admite bombilla hasta que se quita la cruz, y una casilla con bombilla no se
  puede marcar con cruz.
- **Cruz** (el botón de la cruz junto a Deshacer) hace que un clic normal anote o borre
  una cruz en lugar de una bombilla, para cuando estás descartando muchas casillas a la
  vez. Púlsalo otra vez para volver a las bombillas.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor por la cuadrícula.
- **Enter** coloca o quita una bombilla bajo el cursor, y **Space** (o **I**) pone o quita
  una cruz allí.
- **X** es el botón **Cruz**.

## Parámetros

- **Ancho** y **alto** de la cuadrícula.
- **% de casillas negras**: aproximadamente qué parte de la cuadrícula es negra. Es una
  indicación, no una promesa: si no se puede crear ningún rompecabezas con esa densidad,
  el generador usa algunas casillas negras más.
- **Simetría**: el patrón que siguen las casillas negras: ninguno, un reflejo o una
  rotación de dos mitades, o un reflejo o una rotación en cuatro partes. La rotación en
  cuatro partes necesita una cuadrícula cuadrada.
- **Dificultad**: los rompecabezas _Fácil_ se resuelven razonando casilla a casilla sobre qué
  casillas deben tener o no pueden tener una bombilla. Los _Medio_ te obligan a comparar
  conjuntos de casillas entre sí (“una de estas tres tiene que ser una bombilla, y eso descarta
  esta”). Los rompecabezas _Difícil_ pueden requerir probar una bombilla en algún sitio y seguir
  las consecuencias hasta que algo falle. Cada rompecabezas tiene exactamente una solución.
`,w=e({default:()=>T}),T=`# Bucles

Una cuadrícula de puntos, con un número en algunos de los espacios entre ellos. Dibuja un
único bucle cerrado sobre las líneas tenues entre los puntos de modo que:

- cada espacio numerado tenga exactamente ese número de lados en el bucle;
- el bucle nunca se cruce ni se toque a sí mismo (cada punto tiene dos líneas o ninguna)
  y haya un solo bucle, sin cabos sueltos ni trozos separados.

La versión clásica usa cuadrados, pero el mismo rompecabezas funciona con triángulos,
hexágonos y una docena de teselados más raros, en los que los números pueden pasar de 4 de
sobra.

Las líneas que forman un bucle incorrecto, o que se juntan de tres en tres en un punto, se
vuelven rojas; un número con demasiadas líneas alrededor, o con muy pocos lados posibles
restantes, también se vuelve rojo. Un número se vuelve gris cuando tiene exactamente el
número correcto de líneas.

## Controles

**Resolver** dibuja el bucle entero. El rompecabezas está terminado en cuanto el bucle
está completo y todos los números se cumplen; tachar los bordes no usados es opcional.

### Ratón y pantalla táctil

- **Haz clic en** un borde tenue para dibujar una línea en él; vuelve a hacer clic en
  la línea para quitarla.
- **Haz clic derecho en** un borde para tacharlo, es decir, marcar que seguro que no forma
  parte del bucle; haz clic derecho otra vez para borrar la marca. Tanto un clic como
  un clic derecho borran también una marca hecha con el otro.
- **Cruz** (el botón de la cruz junto a Deshacer) hace que un clic normal tache un borde,
  o le quite la marca, en lugar de dibujar una línea. Púlsalo otra vez para volver a
  dibujar líneas.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor de borde en borde; **Enter** dibuja o quita una línea
  en el borde bajo el cursor y **Space** lo tacha o le quita la marca.
- **X** es el botón **Cruz**.

## Parámetros

- **Ancho** y **alto** de la cuadrícula, contados en casillas del teselado. En la cuadrícula
  de cuadrados es simplemente el número de cuadrados a lo ancho y a lo alto; los otros
  teselados cuentan sus unidades repetidas, así que el número real de caras varía.
- **Tipo de cuadrícula**: _Cuadrados_, _Triangular_ y _Panal_ son los teselados regulares.
  _Cuadrado romo_, _Cairo_, _Gran hexagonal_, _Octogonal_, _Cometas_, _Florón_,
  _Dodecagonal_ y _Gran dodecagonal_ mezclan formas, y los dos teselados de _Penrose_ no se
  repiten nunca.
- **Dificultad**: los rompecabezas _Fácil_ solo necesitan las propias reglas: contar las líneas
  alrededor de un número, recordar que un punto tiene dos líneas o ninguna y no cerrar el bucle
  antes de tiempo. _Medio_ añade razonamientos sobre pares de bordes que se juntan en un punto
  (como mucho uno, o al menos uno, del par es una línea). _Difícil_ permite encadenar esos hechos
  de punto en punto, como a lo largo de una diagonal de 2. _Experto_ también sigue los bordes que
  se sabe que son iguales u opuestos entre sí. Nunca hace falta adivinar; cada rompecabezas tiene
  exactamente una solución.
`,E=e({default:()=>D}),D=`# Imanes

Un rectángulo se ha cubierto de dominós, que solo se muestran como contornos. Cada dominó
es o bien un imán (una mitad es un polo \`+\` y la otra un polo \`−\`) o bien una pieza neutra
sin ningún polo. Los números alrededor del borde indican cuántos polos \`+\` (encima de las
columnas y a la izquierda de las filas) y cuántos polos \`−\` (debajo de las columnas y a la
derecha de las filas) tiene cada línea; si falta un número, esa línea no tiene pista.
Rellena todos los dominós de modo que se cumplan todos los recuentos y nunca haya dos
polos iguales uno al lado del otro: un \`+\` nunca debe tocar otro \`+\` ni un \`−\` otro \`−\` a
través del límite de un dominó. Las piezas neutras son inertes y pueden estar al lado de
cualquier cosa.

Los polos iguales que se tocan se muestran en rojo. Un recuento se vuelve rojo cuando ya
no se puede cumplir (ya hay demasiados polos, o muy pocos y ningún sitio donde poner más)
y gris cuando se cumple exactamente. El rompecabezas está terminado cuando todos los
dominós están rellenos, todos los recuentos se cumplen y no hay nada en rojo.

## Controles

### Ratón y pantalla táctil

- **Haz clic en** una mitad vacía de un dominó para convertirla en el polo \`+\` (la otra
  mitad pasa a ser \`−\`). Vuelve a hacer clic en la misma mitad para darle la vuelta al imán,
  y una tercera vez para vaciar el dominó. Hacer clic en un dominó neutro no hace nada.
- **Haz clic derecho en** un dominó vacío para marcarlo como neutro. Haz clic derecho otra
  vez para sustituir la pieza neutra por signos de interrogación, una nota de que el
  dominó seguro que es un imán; un tercer clic derecho lo vacía. Hacer clic derecho en un
  imán no hace nada.
- **Neutro** (el dominó sombreado junto a Deshacer) hace que un clic normal haga lo mismo
  que un clic derecho: marcar un dominó como neutro, luego con signos de interrogación y
  luego vacío otra vez. Púlsalo otra vez para volver a colocar imanes.
- **Resolver** rellena la solución completa.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor por la cuadrícula.
- **Enter** hace pasar la mitad bajo el cursor por \`+\`, \`−\` y vacía, igual que un clic izquierdo.
- **Space** hace pasar el dominó bajo el cursor por neutro, signo de interrogación y
  vacío, igual que un clic derecho.
- **B** es el botón **Neutro**.

## Parámetros

- **Ancho** y **alto** de la cuadrícula. Cuando el área es impar sobra una casilla, que se
  dibuja rayada; no pertenece a ningún dominó y cuenta como neutra.
- **Dificultad**: los rompecabezas _Fácil_ solo te piden mirar una línea o un dominó cada vez: un
  recuento que ya se cumple, un recuento que necesita todos los candidatos restantes o un dominó
  en el que ninguna de las dos mitades puede llevar cierto polo. Los rompecabezas _Difícil_
  también te obligan a razonar sobre dominós enteros a lo largo de una línea: un dominó que tiene
  que ser un imán aporta un polo de cada tipo lo coloques como lo coloques, una línea a la que
  solo le queda un hueco neutro no puede tener un dominó neutro a lo largo, etc. Cada
  rompecabezas tiene exactamente una solución.
- **Quitar pistas sobrantes**: elimina todos los recuentos que no hacen falta para resolver el
  rompecabezas en la dificultad elegida, lo que hace bastante más difícil ver por dónde
  empezar.
`,O=e({default:()=>k}),k=`# Mapa

Un mapa está dividido en regiones. Colorea cada región con uno de cuatro colores de modo
que no haya dos regiones que compartan un tramo de frontera con el mismo color. Las
regiones que solo se tocan por una esquina pueden coincidir. Algunas regiones vienen ya
coloreadas, y se eligen de modo que haya exactamente una forma de terminar el mapa.

Dos regiones vecinas del mismo color se señalan con un \`!\` rojo en la frontera entre
ellas.

## Controles

**Resolver** colorea la solución completa. El mapa destella cuando todas las regiones
están coloreadas y no hay nada en rojo.

### Ratón y pantalla táctil

- **Arrastra** un color: pulsa sobre una región (o sobre una de las muestras bajo el
  mapa) y suelta sobre otra región para darle ese color. Arrastrar desde una región vacía,
  desde el espacio vacío alrededor del mapa o desde la muestra de la goma borra la región
  sobre la que sueltas.
- **Haz clic en una muestra** para seleccionar un color y luego **haz clic en** las
  regiones para pintarlas; vuelve a hacer clic en la muestra seleccionada para
  deseleccionarla.
- **Arrastra con clic derecho** un color sobre una región vacía para anotar un puntito de
  ese color, que indica que la región _podría_ ser de ese color. Una región puede llevar
  varios puntos a lápiz; arrastrar otra vez el mismo color quita su punto. Con una
  muestra seleccionada, **un clic derecho** en una región vacía pone o quita su
  punto.
- **Números** (en el menú de pausa) muestra un número en cada región, útil para hablar de
  un rompecabezas con otra persona, y los vuelve a ocultar.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor por el mapa; la región en la que está se resalta con un
  contorno. Las teclas **1**–**4** colorean esa región, **Space** la borra y **Enter**
  recoge su color para que puedas llevarlo con las flechas y soltarlo con **Enter** (o
  como punto a lápiz con **Space**). Pulsar **Enter** dos veces sin moverte borra la
  región.
- **L** es el botón **Números**.

## Parámetros

- **Ancho** y **alto** de la cuadrícula sobre la que se dibuja el mapa, en casillas.
- **Regiones**: en cuántas regiones se divide el mapa.
- **Dificultad**: los rompecabezas _Fácil_ siempre tienen una región a la que solo le queda un
  color posible. _Medio_ añade razonamientos sobre pares de regiones vecinas que deben repartirse
  los mismos dos colores. _Difícil_ necesita cadenas de esas deducciones por todo el mapa. Todos
  estos se pueden resolver sin adivinar. _Extremo_ solo promete que la solución es única; puede
  que tengas que probar un color y seguirlo hasta que algo falle.
`,A=e({default:()=>j}),j=`# Minas

Una cuadrícula de casillas tapadas esconde cierto número de minas. Destapa todas las
casillas que _no_ contienen una mina. Cada casilla que abres muestra cuántas de sus ocho
vecinas son minas; si abres una mina, pierdes la partida.

Lo especial de esta versión es que nunca tienes que adivinar. No se decide nada hasta tu
primer clic: entonces las minas se colocan de modo que la primera casilla que abras esté
vacía y toda la cuadrícula se pueda deducir desde ahí con pura lógica. Si alguna vez
te sientes atascado, siempre hay en algún sitio una casilla segura que los números ya
demuestran.

La barra de estado muestra cuántas banderas has puesto frente al número de minas, y el
reloj empieza con tu primer clic. Al pisar una mina se revelan todas las demás y se tachan
las banderas que estaban mal; puedes deshacer el clic fatal y seguir, pero la muerte queda
registrada en la barra de estado.

## Controles

### Ratón y pantalla táctil

- **Haz clic en** una casilla tapada para abrirla. Abrir una casilla vacía (sin minas
  vecinas) abre también sus vecinas, y así sucesivamente hacia fuera.
- **Haz clic derecho en** una casilla tapada para poner una bandera sobre una posible
  mina, y otra vez para quitarla. Las casillas con bandera no se pueden abrir por
  accidente.
- **Haz clic en un número** que ya tiene alrededor el número correcto de banderas para
  abrir de una vez todas sus demás vecinas tapadas. Un **clic central** en ese número hace
  lo mismo.
- **Pista** abre una casilla segura (o quita una bandera que no tiene ninguna mina debajo)
  y te deja el resto de la cuadrícula a ti. Con unas pocas pistas, la victoria, y su
  crédito, siguen siendo tuyos.
- **Resolver** revela toda la disposición y pone una bandera en cada mina. No cuenta como
  una victoria tuya.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor por la cuadrícula.
- **Enter** actúa como un clic izquierdo en la casilla bajo el cursor: abre una casilla
  tapada o despeja alrededor de un número cuyas banderas están todas en su sitio.
- **Space** pone o quita una bandera, como hace un clic derecho.

## Parámetros

- **Ancho** y **alto** de la cuadrícula.
- **Minas**: cuántas minas esconder. Puedes indicar un porcentaje como \`20%\` en lugar de
  una cantidad. Con densidades muy altas se tarda en encontrar cuadrículas resolubles.
- **Garantizar que sea resoluble**: cuando está activado (la opción predeterminada),
  se garantiza que la disposición se puede resolver desde tu primer clic sin adivinar.
  Desactívalo para tener cuadrículas aleatorias normales, que pueden dejarte a cara o cruz
  al final.
`,M=e({default:()=>N}),N=`# Red

Se ha tendido una red de cables sobre una cuadrícula de piezas cuadradas y luego cada
pieza se ha girado al azar. Vuelve a girar las piezas para que todas queden unidas en una
sola red: cada extremo de cable debe encontrarse con un cable en la pieza vecina, y ningún
cable puede quedar apuntando a una pared. La red terminada es un árbol, así que no tiene
bucles cerrados.

Las piezas que ya están conectadas a la pieza de origen, en el centro de la cuadrícula, se
dibujan en azul como guía; las demás siguen en gris. Un cable que forma parte de un bucle
se dibuja en rojo. Las líneas negras gruesas entre piezas son barreras: ningún cable puede
cruzarlas, lo que te da una pista sobre cómo deben estar colocadas las piezas de cada
lado. La barra de estado muestra cuántas piezas tienen corriente en ese momento.

## Controles

### Ratón y pantalla táctil

- **Haz clic en** una pieza para girarla en sentido antihorario y **haz clic derecho**
  para girarla en sentido horario.
- **Haz clic central en** una pieza para **bloquearla** cuando estés seguro de ella. Una
  pieza bloqueada aparece sombreada y no gira hasta que otro clic central la desbloquea.
  Un clic derecho gira la pieza en lugar de bloquearla, así que el clic central es la
  forma de hacerlo.
- **Bloquear** (el botón del candado junto a Deshacer) hace que un clic normal bloquee o
  desbloquee una pieza en lugar de girarla, lo que resulta más fácil que un clic central
  en un panel táctil. Un clic derecho sigue girando la pieza en sentido horario. Púlsalo
  otra vez para volver a girar.
- **Mezclar** gira cada pieza no bloqueada hasta una orientación aleatoria nueva, para
  cambiar de aires cuando un rompecabezas se ha estancado.
- En una cuadrícula envolvente, los cuatro **botones de flecha** desplazan la vista,
  de modo que se pueden juntar piezas de bordes opuestos.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor por la cuadrícula.
- **Enter** o **A** gira la pieza bajo el cursor en sentido antihorario, **D** la gira en
  sentido horario y **F** le da media vuelta.
- **Space**, **S** o **L** bloquea o desbloquea la pieza bajo el cursor. Con un ratón,
  **Shift+clic** también bloquea una pieza, exactamente igual que un clic central.
- **K** es el botón **Bloquear** y **J** el botón **Mezclar**.
- En una cuadrícula envolvente, **Shift + las flechas** desplazan la vista (igual que
  los cuatro botones de flecha) para ver una al lado de otra piezas de bordes opuestos.
  **Ctrl + las flechas** mueven la pieza de origen desde la que se extiende el resaltado
  azul.

## Parámetros

- **Ancho** y **alto** de la cuadrícula, en piezas.
- **Bordes envolventes**: los cables pueden salir por un borde de la cuadrícula y
  continuar desde el borde opuesto.
- **Probabilidad de barrera**: un número de 0 a 1 que indica la proporción de bordes sin
  cable que reciben una barrera. Las barreras nunca cambian la disposición de los cables:
  la misma semilla aleatoria siempre da la misma cuadrícula, así que subir la probabilidad
  solo añade pistas.
- **Garantizar solución única**: normalmente el rompecabezas se prepara para que funcione
  exactamente una disposición de las piezas. Desactívalo para generar más rápido a cambio
  de alguna zona ambigua de vez en cuando.
`,P=e({default:()=>F}),F=`# Red deslizante

Cada pieza lleva un trozo de cableado: un tramo recto, una esquina, una unión en T o un
extremo suelto con un punto. Bien colocadas, las piezas forman una sola red que llega a
todas las piezas desde la fuente de corriente de la pieza central sombreada, sin bucles y
sin brazos que apunten al vacío. La cuadrícula se ha desordenado deslizando filas y
columnas enteras, así que esa es la única forma de arreglarla: ninguna pieza se puede
girar, solo mover.

Las piezas que reciben corriente en ese momento se dibujan en azul; las demás siguen en
gris. Las paredes negras gruesas entre piezas son barreras. Nada puede conectarse a través
de una barrera, así que te dicen dónde la red terminada seguro que no tiene conexión.

## Controles

### Ratón y pantalla táctil

- **Haz clic en** una flecha junto a una fila o columna para deslizar esa línea entera un
  paso en la dirección de la flecha. La pieza que sale por un extremo vuelve a entrar por
  el otro extremo de la misma línea. **Haz clic derecho en** una flecha para deslizar la
  línea en sentido contrario.
- La fila y la columna centrales no tienen flechas: la fuente de corriente nunca se mueve.
- **Resolver** salta directamente a la red terminada para que puedas compararla con tu
  propio intento.

### Teclado (Keyboard)

- **Las flechas** mueven un resaltado por el anillo de flechas.
- **Enter** desliza la línea resaltada en la dirección de su flecha y **Space** la desliza
  hacia atrás.

## Parámetros

- **Ancho** y **alto** de la cuadrícula.
- **Bordes envolventes**: cuando está activado, el borde derecho continúa por el
  izquierdo y el inferior por el superior, de modo que el cableado (y las barreras) pueden
  cruzar el borde de la cuadrícula. El marco discontinuo indica una cuadrícula
  envolvente; un marco grueso continuo es una pared por todo el contorno.
- **Probabilidad de barrera**: cuántos de los bordes de pieza no usados reciben una
  barrera, de 0 (ninguno) a 1 (todos los bordes que la red terminada no usa). Más barreras
  hacen el rompecabezas más fácil. Las barreras se eligen independientemente del resto de
  la cuadrícula, así que la misma semilla aleatoria con una probabilidad de barrera más
  alta da el mismo rompecabezas con más pistas.
- **Número de movimientos de mezcla**: déjalo en 0 para un desorden completo, o indica un
  número para desordenar con exactamente esa cantidad de deslizamientos. El objetivo es
  entonces encontrarlos y deshacerlos; la barra de estado muestra el objetivo.
`,I=e({default:()=>L}),L=`# Patrón

Cada casilla de la cuadrícula es en secreto negra o blanca. Los números junto a cada fila
y encima de cada columna indican las longitudes de los tramos de casillas negras de esa
línea, en orden, con al menos una casilla blanca entre tramos consecutivos. Colorea las
casillas negras de modo que cada fila y cada columna coincida con sus números. Los
rompecabezas de este tipo se suelen llamar nonogramas o picross.

Las imágenes de aquí se generan al azar, así que no hay ningún dibujo que adivinar: todo
hay que deducirlo de los números. Cada rompecabezas se comprueba de antemano para
asegurarse de que se puede resolver razonando sobre una fila o columna cada vez, así que
nunca tienes que ir probando.

Los números de una línea se vuelven grises cuando los tramos negros de esa línea
coinciden con ellos, y rojos si los tramos que has completado no pueden encajar de ningún
modo con los números. El rompecabezas está terminado cuando cada fila y cada columna
coincide con sus números; los puntos solo están para ayudarte a recordar.

## Controles

### Ratón y pantalla táctil

- **Haz clic en** una casilla para pintarla de negro; vuelve a hacer clic en una casilla
  negra para borrarla.
- **Haz clic derecho** para marcar una casilla con un punto, que indica que se sabe que es
  blanca; haz clic derecho en una casilla con punto para borrarla.
- **Arrastra** para pintar de una vez una línea recta de casillas negras, y
  **arrastra con clic derecho** para poner una línea de puntos. Solo se ven afectadas las
  casillas que estaban en el mismo estado que aquella en la que empezaste, así que
  arrastrar una fila de puntos sobre tus casillas negras las deja como están.
- **Haz clic central en** una casilla para devolverla a desconocida.
- **Borrar** (el botón de la goma junto a Deshacer) hace que el botón izquierdo haga lo
  mismo: haz clic en una casilla para devolverla a desconocida, o arrastra para borrar un
  rectángulo entero. Púlsalo otra vez para volver a pintar de negro.
- **Pista** rellena una casilla, siempre una que una sola fila o columna decide por sí
  misma, o corrige una casilla que contradice la solución. El rompecabezas sigue en juego,
  y con unas pocas pistas la victoria, y su crédito, siguen siendo tuyos.
- **Resolver** rellena el dibujo entero por ti.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor.
- **Enter** pinta o borra el negro bajo el cursor y **Space** pone o quita un punto.
- Mantén **Ctrl** mientras mueves el cursor para pintar de negro a su paso, **Shift** para
  poner puntos, o ambas para borrar.
- Con un ratón, **Shift+clic** borra casillas igual que un clic central, y arrastrar
  manteniendo pulsada la rueda borra un rectángulo entero, tenga lo que tenga.
- **E** es el botón **Borrar**.

## Parámetros

- **Ancho** y **alto** de la cuadrícula. Los ajustes predefinidos van de 10×10 a 30×30;
  las cuadrículas más grandes tardan un poco más en generarse.
`,R=e({default:()=>z}),z=`# Perlas

Una cuadrícula de casillas, algunas con una perla negra o blanca. Traza un único bucle
cerrado que vaya de centro de casilla a centro de casilla, en horizontal o en vertical,
sin cruzarse ni ramificarse nunca. El bucle no tiene que pasar por todas las casillas,
pero sí por todas las perlas:

- en una **perla negra** el bucle gira, y luego sigue recto por las dos casillas contiguas
  a la perla a lo largo del bucle;
- en una **perla blanca** el bucle pasa recto, y gira en al menos una de las dos casillas
  contiguas a la perla a lo largo del bucle.

Solo cuentan las casillas que el bucle visita justo antes y justo después de una perla, no
todas las que la tocan en la cuadrícula.

Una perla cuya regla ya se ha incumplido recibe un halo rojo. En cuanto existe algún bucle
cerrado, cada segmento que queda fuera de él se dibuja en rojo, igual que cualquier
casilla con tres o más segmentos.

## Controles

**Resolver** traza el bucle completo. El rompecabezas está terminado cuando el bucle es un
único circuito cerrado y no hay nada en rojo.

### Ratón y pantalla táctil

- **Haz clic en** un borde de la cuadrícula (cerca de la frontera entre dos casillas) para
  trazar un segmento del bucle que lo cruce; haz clic de nuevo para quitarlo.
- **Arrastra** a través de una serie de casillas para trazar de una vez todo un tramo de
  segmentos. Arrastrar a lo largo de segmentos existentes los quita; un arrastre que empieza
  sobre segmentos existentes y continúa por casillas vacías primero borra y luego traza. Vuelve
  sobre una casilla por la que ya pasaste para acortar el recorrido antes de soltar; vuelve a la
  casilla desde la que empezaste para cerrar el bucle.
- **Haz clic derecho en** un borde de la cuadrícula para colocar una pequeña cruz que
  significa “aquí no hay segmento”; no se pueden trazar segmentos a través de una cruz
  hasta que se quite.
  **Arrastra con clic derecho** por una serie de casillas para poner una cruz en cada
  borde que atravieses.
- **Cruz** (el botón de la cruz junto a Deshacer) hace que un clic normal ponga o quite una
  cruz, y que un arrastre ponga toda una fila de ellas: igual que al trazar, un arrastre que
  empieza sobre cruces primero las quita, y pasa de largo cualquier borde que ya tenga un
  segmento. Púlsalo otra vez para volver a trazar el bucle.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor. **Ctrl+flecha** traza o quita el segmento de ese lado
  de la casilla del cursor, **Shift+flecha** coloca o quita una cruz ahí. **Enter** inicia
  un arrastre con el teclado desde la casilla del cursor: muévete con las flechas y pulsa
  Enter otra vez para confirmar el recorrido, o **Space** para descartarlo.
- **X** es el botón **Cruz**; con él activado, un arrastre con el teclado también pone cruces.

## Parámetros

- **Ancho** y **alto** de la cuadrícula, en casillas (al menos cinco cada uno).
- **Dificultad**: los rompecabezas _Fácil_ se resuelven razonando sobre cada perla y las
  casillas justo a su lado. Los _Complicado_ también te exigen darte cuenta de cuándo un
  segmento cerraría un bucle pequeño demasiado pronto, dejando otras perlas aisladas. (Una
  cuadrícula 5×5 Complicado se genera como Fácil, igual que en el original.)
- **Permitir insolubles**: conserva todas las perlas que admite el bucle en lugar de
  reducirlas a un conjunto mínimo con solución única. Una opción de depuración heredada
  del original.
`,B=e({default:()=>V}),V=`# Clavijas

Un tablero lleno de clavijas con un agujero vacío, o unos pocos en un tablero aleatorio. Una clavija puede saltar en
horizontal o en vertical por encima de una clavija vecina hasta el agujero vacío que hay
justo detrás; la clavija saltada se retira. Sigue saltando hasta que solo quede una
clavija en el tablero.

Es el clásico senku, o solitario de clavijas. El tablero **Cruz** es la disposición
inglesa de siempre, el tablero **Octógono** la europea (que empieza con el agujero vacío
fuera del centro, porque desde el centro no se puede terminar), y los tableros
**Aleatorio** son formas raras que genera el programa. Las zonas en blanco sin agujero
simplemente no forman parte del tablero.

No puedes quedarte atascado para siempre: si no queda ningún salto y hay más de una
clavija, la partida termina, pero Deshacer te lleva hacia atrás tanto como quieras. La
barra de estado cuenta las clavijas que quedan y los movimientos hechos.

## Controles

### Ratón y pantalla táctil

- **Arrastra** una clavija y suéltala en un agujero vacío que esté exactamente a dos
  casillas, en línea recta y por encima de otra clavija. Si la sueltas en cualquier otro
  sitio, vuelve a su lugar.
- O **haz clic en** una clavija para seleccionarla (se vuelve naranja y se marcan los agujeros
  donde puede caer), y luego haz clic en el agujero al que quieres saltar. Volver a
  hacer clic en la misma clavija la deselecciona.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor por el tablero.
- **Enter** o **Space** sobre una clavija la selecciona; luego una flecha la hace saltar en esa
  dirección, si es un movimiento válido, y **Enter** otra vez la deselecciona.

## Parámetros

- **Ancho** y **alto** del tablero, al menos 4 cada uno.
- **Tipo de tablero**: _Cruz_ y _Octógono_ son las disposiciones tradicionales y solo
  están disponibles en 7×7. _Aleatorio_ produce una forma de tablero distinta cada vez,
  siempre una que se puede reducir a una sola clavija, porque se construyó deshaciendo
  saltos a partir de una.
`,H=e({default:()=>U}),U=`# Alcance

Algunas casillas de la cuadrícula tienen un número. Pinta casillas de negro de modo que se
cumplan cuatro cosas a la vez:

- ninguna casilla numerada es negra;
- no hay dos casillas negras que se toquen por un lado (por las esquinas sí pueden);
- todas las casillas blancas forman una sola región conectada, unidas lado con lado;
- cada número cuenta las casillas blancas que ve su propia casilla: ella misma, más todo
  lo que hay en línea recta hacia arriba, abajo, izquierda y derecha hasta que se
  interpone una casilla negra o el borde de la cuadrícula.

Es el _Kurodoko_ de Nikoli, también conocido como _Kuromasu_ o _Where is Black Cells_. Un
número que ya ve suficientes casillas tiene una casilla negra justo después de cada tramo
que ve; un número que vería demasiadas si una casilla desconocida suelta fuera blanca
tiene ahí una casilla negra. Pintar una casilla que es el único enlace entre dos grupos de
casillas blancas nunca es correcto. Todos los rompecabezas se pueden terminar con este
tipo de razonamiento; no hace falta adivinar.

Los errores aparecen en rojo: las casillas negras que se tocan reciben un marco rojo
alrededor del grupo, las casillas blancas separadas de la región principal reciben un
contorno rojo, y un número se vuelve rojo cuando ya no puede ver suficientes casillas o ya
ve seguro demasiadas. El rompecabezas está terminado cuando no se incumple ninguna regla;
no hace falta marcar con punto las casillas blancas.

## Controles

### Ratón y pantalla táctil

- **Haz clic en** una casilla para pintarla de negro. Haz clic de nuevo para convertirla
  en un punto (una casilla que sabes que es blanca), y una vez más para vaciarla.
- **Haz clic derecho** para recorrer el ciclo al revés: punto, luego negro, luego vacía.
- **Arrastra** para pintar varias casillas de una vez, y **arrastra con clic derecho**
  para recorrerlas en el otro sentido. Solo se ven afectadas las casillas que empezaron
  igual que la primera, así que un barrido de puntos deja en paz tus casillas negras.
- **Borrar** (el botón de la goma junto a Deshacer) hace que un clic vacíe la casilla, y
  que un arrastre borre todas las casillas negras y los puntos por los que pasa, sean lo
  que sean. Púlsalo otra vez para volver a pintar.
- **Pista** rellena una casilla que se deduce de lo que ya hay en el tablero, o corrige una
  casilla que contradice la solución. El rompecabezas sigue en juego, y con unas pocas
  pistas la victoria y su crédito siguen siendo tuyos.
- **Resolver** rellena toda la cuadrícula y pone un punto en cada casilla blanca.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor por la cuadrícula.
- **Enter** actúa como un clic izquierdo sobre la casilla bajo el cursor y **Space** como
  un clic derecho.
- **E** es el botón **Borrar** y **H** el botón **Pista**.

## Parámetros

- **Ancho** y **alto** de la cuadrícula. Los ajustes predefinidos van de 9×6 a 16×11; se
  puede generar cualquier tamaño hasta 30×30, aunque las cuadrículas diminutas de una o
  dos casillas no tienen rompecabezas justos.
`,W=e({default:()=>G}),G=`# Rectángulos

Algunas casillas de la cuadrícula llevan un número. Divide toda la cuadrícula en
rectángulos de modo que cada rectángulo contenga exactamente un número, y que ese número
sea el área del rectángulo (su ancho por su alto). Un 6, por ejemplo, está en un bloque de
1×6, 2×3, 3×2 o 6×1; cuál de ellos, y en qué lugar del bloque está el número, lo tienes
que deducir a partir de los vecinos.

Los rompecabezas se generan al azar y, por defecto, los números se colocan de modo que
solo funcione una división de la cuadrícula. El rompecabezas original viene de la revista
japonesa Nikoli, donde se conoce como Shikaku.

## Controles

### Ratón y pantalla táctil

- **Arrastra** sobre una zona para trazar un rectángulo a su alrededor: se dibuja su
  contorno y se quitan las líneas que haya dentro. Arrastrar a lo largo de una línea de la
  cuadrícula traza solo esa línea.
- **Haz clic en** una línea de la cuadrícula para añadir o quitar ese único borde.
- **Arrastra con clic derecho** sobre una zona para borrar las líneas de su interior sin
  tocar su contorno. **Un clic derecho** en una línea de la cuadrícula la activa o
  desactiva igual que un clic normal.
- **Borrar** (el botón de la goma junto a Deshacer) hace que un arrastre normal también
  borre: arrastra sobre una zona para quitar las líneas de su interior, o haz clic en una
  línea de la cuadrícula para quitarla. Mientras está activado, un clic nunca añade una
  línea. Púlsalo otra vez para volver a trazar.
- **Resolver** rellena toda la división por ti.

Mientras arrastras, el rectángulo que estás a punto de trazar aparece resaltado y su
tamaño se muestra en la barra de estado. Un rectángulo terminado del tamaño correcto se
sombrea. Un rectángulo cerrado que nunca puede ser correcto se señala: su número se vuelve
rojo si el tamaño no le corresponde, y se raya si no contiene ningún número. El
rompecabezas está completo cuando cada casilla está dentro de un rectángulo correcto.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor.
- **Enter** empieza a extender un rectángulo desde el cursor; lleva el cursor a la esquina
  opuesta y pulsa **Enter** otra vez para trazarlo.
- **Space** funciona igual, pero en su lugar borra el interior del rectángulo.
- **E** es el botón **Borrar**.

## Parámetros

- **Ancho** y **alto** de la cuadrícula. Los ajustes predefinidos van de 7×7 a 19×19.
- **Factor de expansión**: genera una cuadrícula más pequeña y la estira hasta el tamaño
  pedido, de modo que el rompecabezas tenga menos rectángulos y más grandes. 0 (el valor
  por defecto) significa que no se estira; 0.5 hace que la cuadrícula inicial mida dos
  tercios del tamaño final en cada dirección. Los valores grandes dejan solo un puñado de
  rectángulos y hacen el rompecabezas trivial.
- **Garantizar solución única**: normalmente activado. Si lo desactivas, los números se
  colocan en cualquier lugar de sus rectángulos, lo que es más rápido y puede dar
  rompecabezas con varias respuestas; entonces cualquier división válida cuenta como
  resuelta.
`,se=e({default:()=>K}),K=`# Same Game

El tablero está lleno de casillas de colores. Elige un grupo de dos o más casillas del
mismo color que se toquen por los lados y quítalo; las casillas que hay encima del hueco
caen, y cuando una columna queda vacía, las columnas de su derecha se desplazan para
cerrarla. Vacía todo el tablero para ganar. Si quedan casillas pero no hay dos casillas
contiguas del mismo color, ya no puedes hacer nada más: deshaz y prueba otro orden.

Los grupos grandes valen mucho más que los pequeños: quitar _n_ casillas da (_n_ − 2)²
puntos con la puntuación por defecto, así que una pareja no vale nada, tres casillas un
punto y diez casillas 64. La barra de estado muestra tu puntuación y, mientras hay un
grupo seleccionado, cuántas casillas tiene y cuánto te daría.

Cada tablero generado (a menos que desactives la opción) está construido de modo que _se
pueda_ vaciar por completo, aunque encontrar un orden que además puntúe bien es cosa tuya.

No hay botón Resolver: el programa sabe que el tablero se puede vaciar, pero no te va a
decir cómo.

## Controles

### Ratón y pantalla táctil

- **Haz clic en** una casilla para seleccionar todo el grupo al que pertenece; el grupo se
  dibuja más claro y con un contorno grueso. **Vuelve a hacer clic en el grupo
  seleccionado** para quitarlo. Hacer clic en otra casilla mueve la selección.
- **Haz clic derecho en** el grupo seleccionado para deseleccionarlo.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor por el tablero (pasando al lado opuesto en los bordes).
- **Enter** selecciona el grupo bajo el cursor, y pulsarlo otra vez quita el grupo.
- **Space** sobre el grupo seleccionado lo deselecciona.

## Parámetros

- **Ancho** y **alto** del tablero.
- **Número de colores**, de 3 a 9 (se permite 2 cuando no se garantiza que tenga solución).
  Más colores significan grupos más pequeños y un tablero más difícil.
- **Sistema de puntuación**: _(n−2)²_, el predeterminado, o _(n−1)²_, que también premia
  las parejas.
- **Garantizar que sea resoluble**: si está marcado, el tablero se genera hacia atrás a partir de
  un tablero vacío, de modo que exista al menos una secuencia que lo vacíe. Desmárcalo
  para obtener un tablero aleatorio sin más, que se genera más rápido y suele tener
  regiones más grandes, pero puede ser imposible de vaciar.
`,ce=e({default:()=>le}),le=`# Señales

Cada casilla lleva una flecha, y unas pocas casillas llevan números. Une las casillas en
un único camino numerado del 1 al N (siendo N el número de casillas) de modo que la
sucesora de cada casilla esté en algún punto a lo largo de su flecha: la casilla con el 1
apunta hacia el 2, que apunta hacia el 3, y así sucesivamente. Una sucesora puede estar a
cualquier distancia en la dirección de la flecha, no solo al lado. La última casilla,
marcada con una estrella, no apunta a ninguna parte.

El primer y el último número se muestran siempre, y suficientes números más para que el
camino sea único. Cada rompecabezas tiene exactamente una solución y se puede encontrar
solo con razonamiento.

Los errores se muestran en rojo: dos casillas con el mismo número, un número cuya sucesora
no está a lo largo de su flecha, o una cadena que se pasa de su número dado. El
rompecabezas está terminado cuando los números del 1 al N recorren todas las casillas sin
nada en rojo.

## Controles

### Ratón y pantalla táctil

- **Arrastra** desde una casilla hasta otra que esté a lo largo de su flecha para que la
  segunda sea la sucesora de la primera. **Arrastra con clic derecho** para ir en el otro
  sentido: desde una casilla hasta la casilla que debería ir antes que ella.
- Cuando dos casillas enlazadas incluyen un número, el número se extiende por toda la
  cadena y se muestra en azul. Una cadena que aún no tiene número se etiqueta con una
  letra y desplazamientos (\`a\`, \`a+1\`, \`a+2\`, ...); en cuanto toca una casilla numerada,
  las letras se convierten en números. Enlazar una cadena con una casilla que ya está
  enlazada sustituye el enlace anterior.
- Cada casilla que todavía necesita una predecesora muestra un puntito en su esquina
  inferior izquierda, y una flecha se atenúa en cuanto su casilla tiene sucesora. Así que
  la tarea siempre consiste en unir una flecha bien visible con una casilla con punto.
- **Haz clic derecho en** una casilla para quitar sus dos enlaces. **Arrastra** una
  casilla fuera del tablero para hacer lo mismo, o **arrastra con clic derecho** fuera del
  tablero para deshacer toda su cadena.
- **Romper** (el botón del eslabón roto junto a Deshacer) hace que un clic en una casilla
  deshaga toda su cadena, hasta el último enlace, y arrastrar una casilla fuera del tablero
  hace lo mismo. Arrastrar de casilla en casilla sigue enlazándolas. Púlsalo otra vez para
  desactivarlo.
- **Resolver** rellena el camino completo.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor.
- **Enter** sobre una casilla empieza un enlace desde ella; lleva el cursor a la sucesora
  y pulsa **Enter** otra vez para crear el enlace (púlsalo sobre la misma casilla para
  cancelar).
- **Space** o **X** quita los enlaces de la casilla bajo el cursor; **Shift + X** deshace
  toda su cadena.
- **B** es el botón **Romper**.

## Parámetros

- **Ancho** y **alto** de la cuadrícula, de 2 a 12 casillas (2×2 es demasiado pequeño para
  funcionar).
- **Empezar y terminar en las esquinas**: si está activado, el 1 está siempre en la
  casilla superior izquierda y el N en la inferior derecha. Si no, ambos extremos se
  colocan al azar, aunque los dos se siguen mostrando.
`,ue=e({default:()=>de}),de=`# Únicos

Cada casilla de la cuadrícula tiene un número. Tapa de negro algunas casillas (ocultando
sus números) de modo que se cumplan tres cosas a la vez:

- ningún número aparece más de una vez entre las casillas blancas de una fila o columna;
- no hay dos casillas negras que se toquen por un lado (por las esquinas sí pueden);
- todas las casillas blancas forman una sola región conectada, unidas lado con lado.

Es el _Hitori_ de Nikoli. Un buen comienzo es buscar dos números iguales con una casilla
entre ellos: uno de los dos tiene que ser negro, así que la casilla del medio debe ser
blanca. Dos números iguales uno al lado del otro significan que todas las demás copias de
ese número en su línea son negras.

Los errores aparecen en rojo: las casillas negras que se tocan reciben un marco rojo
alrededor del grupo, las casillas blancas separadas de la región principal reciben un
contorno rojo, y dos casillas con círculo que comparten línea y número se dibujan en rojo.

El rompecabezas está terminado cuando no se incumple ninguna regla; no hace falta rodear
con círculo las casillas blancas.

## Controles

### Ratón y pantalla táctil

- **Haz clic en** una casilla para taparla de negro; haz clic de nuevo para restaurarla.
- **Haz clic derecho** para dibujar un círculo alrededor de un número y anotar que es
  blanco con seguridad; haz clic derecho de nuevo para quitar el círculo. Tanto un clic
  como un clic derecho borran la marca que ya tenga la casilla.
- **Resolver** rellena toda la cuadrícula y rodea con un círculo cada casilla blanca.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor por la cuadrícula (pasando al lado opuesto en los
  bordes).
- **Enter** tapa de negro o restaura la casilla bajo el cursor y **Space** le pone o le
  quita el círculo.

## Parámetros

- **Ancho** y **alto** de la cuadrícula, de 2 a 20 en los rompecabezas generados.
- **Dificultad**: los rompecabezas _Fácil_ solo requieren los argumentos directos: una
  casilla negra obliga a que sus vecinas sean blancas, un número con círculo obliga a que
  sus gemelos sean negros, los patrones de pareja con hueco y de pareja contigua, una
  casilla blanca con una sola salida, y los pequeños patrones de las esquinas. Los
  _Complicado_ también te exigen darte cuenta de cuándo tapar una casilla partiría en dos
  la región blanca, y usar parejas de parejas desplazadas una casilla. Cada rompecabezas
  tiene exactamente una solución.
`,fe=e({default:()=>pe}),pe=`# Dieciséis

Un rompecabezas deslizante sin casilla vacía. Cada casilla tiene una pieza numerada y, en
lugar de deslizar una sola pieza, deslizas una fila o columna entera un paso. La pieza que
sale por el borde vuelve a entrar enseguida por el extremo opuesto de la misma línea, como
si la cuadrícula estuviera enrollada sobre un donut. Ordena las piezas para que cuenten
desde el 1 en la esquina superior izquierda, de izquierda a derecha y luego fila por fila.

## Controles

### Ratón y pantalla táctil

- **Haz clic en** una de las flechas del borde para deslizar esa fila o columna un paso en
  la dirección a la que apunta la flecha. **Haz clic derecho en** una flecha para deslizar
  la línea en sentido contrario.
- **Resolver** simplemente sustituye la cuadrícula por la ordenada. No te muestra un
  camino, pero te da un tablero limpio para probar maniobras.

### Teclado (Keyboard)

- **Las flechas** mueven un resaltado por el anillo de flechas del borde.
- **Enter** desliza la línea resaltada hacia donde apunta su flecha y **Space** la desliza
  en sentido contrario.

## Parámetros

- **Ancho** y **alto** de la cuadrícula. En las cuadrículas en las que ambos lados son
  impares solo se puede llegar a la mitad de todas las disposiciones, así que el generador
  solo reparte disposiciones alcanzables.
- **Número de movimientos de mezcla**: déjalo en 0 para una disposición completamente
  aleatoria, o pon un número para desordenar la cuadrícula ordenada con exactamente esa
  cantidad de deslizamientos sueltos. La idea es entonces averiguar qué deslizamientos se
  hicieron y deshacerlos en el mismo número de movimientos; cuantos más movimientos de
  mezcla pidas, más probable es que exista una solución más corta.
`,me=e({default:()=>he}),he=`# Diagonales

Una cuadrícula de casillas vacías con números en círculo en algunas de sus esquinas. Traza
una línea diagonal en cada casilla, inclinada hacia un lado o hacia el otro, de modo que:

- cada número en círculo tenga exactamente esa cantidad de líneas tocando su punto de
  esquina (un 4 está en el centro de una cruz, un 0 tiene todas las líneas cercanas
  inclinadas en sentido contrario);
- las líneas nunca se unan formando un bucle cerrado.

Un número que ya tiene demasiadas líneas, o que ya no puede conseguir suficientes, se
vuelve rojo, igual que cada línea que forma parte de un bucle. El rompecabezas está
terminado cuando cada casilla tiene una línea y no hay nada en rojo.

## Controles

### Ratón y pantalla táctil

- **Haz clic en** una casilla para trazar una \`\\\` en ella; haz clic de nuevo para
  convertirla en una \`/\`, y una vez más para vaciarla.
- **Haz clic derecho** para recorrer el ciclo al revés: \`/\`, luego \`\\\`, luego vacía. Así,
  una casilla se puede poner en cualquiera de los dos sentidos usando un solo tipo de clic.
- **Resolver** rellena toda la cuadrícula.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor por la cuadrícula.
- **Enter** cambia la casilla bajo el cursor como un clic izquierdo y **Space** como
  un clic derecho.

## Parámetros

- **Ancho** y **alto** de la cuadrícula, en casillas.
- **Dificultad**: los rompecabezas _Fácil_ se pueden resolver casilla a casilla: un número
  que ya está satisfecho o que necesita todas las casillas que le quedan, y casillas en
  las que una de las dos líneas cerraría un bucle. Los _Difícil_ también requieren razonar
  sobre parejas de casillas que deben inclinarse en el mismo sentido incluso antes de
  saber cuál es, y sobre regiones que una línea aislaría del borde de la cuadrícula. Nunca
  hace falta adivinar; cada rompecabezas tiene exactamente una solución.
`,ge=e({default:()=>_e}),_e=`# Solo

Rellena la cuadrícula cuadrada con cifras de modo que cada fila, cada columna y cada
bloque con contorno grueso contenga cada cifra exactamente una vez. Algunas casillas
vienen dadas como pistas; el resto te toca deducirlo a ti. El rompecabezas normal de 3×3
es el conocido Sudoku, pero los bloques también pueden ser rectángulos (un rompecabezas de
2×3 tiene seis bloques de 3×2), y la cuadrícula puede llegar a 16×16, en cuyo caso las
letras a, b, c… sustituyen a las cifras mayores que 9.

Se pueden activar tres variantes:

- **X**: las dos diagonales principales, ligeramente sombreadas, también deben contener
  cada cifra.
- **Jigsaw**: los bloques son formas irregulares que cambian de un rompecabezas a otro.
- **Killer**: no hay cifras de pista. En su lugar, la cuadrícula está dividida en “jaulas”
  de línea discontinua, cada una marcada con la suma de las cifras que contiene. Ninguna
  cifra puede aparecer dos veces en una jaula.

Cada rompecabezas tiene exactamente una solución, y siempre se puede alcanzar con
razonamiento puro en la dificultad que elegiste.

## Controles

Las cifras que chocan con otra copia en su fila, columna, bloque, diagonal o jaula se
muestran en rojo, igual que una jaula cuyas cifras no suman su total. **Pista** rellena
una casilla (la más fácil que quede abierta, o la primera cifra que contradiga la
respuesta) y te deja el resto; el rompecabezas sigue en juego, y con unas pocas pistas la
victoria, y su crédito, siguen siendo tuyos. **Resolver** rellena toda la solución y
termina el rompecabezas.

### Ratón y pantalla táctil

- **Haz clic izquierdo en** una casilla vacía para seleccionarla, y luego usa el teclado en
  pantalla para escribir una cifra (las teclas de letras son las cifras mayores que 9). Volver a
  hacer clic en la casilla seleccionada la deselecciona.
- **⌫** en el teclado en pantalla vuelve a vaciar la casilla seleccionada, y **✎** deja
  activadas las anotaciones a lápiz, de modo que lo siguiente que elijas entra como una
  nota pequeña en lugar de como respuesta.
- **Haz clic derecho en** una casilla para seleccionarla directamente para **anotaciones a
  lápiz**. Las anotaciones a lápiz solo sirven para ayudarte a pensar; el juego no les
  presta atención, y al escribir una cifra se borran.
- **Marcas** en el menú de pausa llena cada casilla vacía con el juego completo de
  anotaciones a lápiz, para quienes prefieren empezar con todo e ir tachando candidatas.
- **Resaltar** (la lupa junto a Deshacer) destaca todas las casillas que tienen la misma
  cifra que la última casilla en la que hiciste clic, pistas incluidas, y muestra esa cifra
  en negrita entre las anotaciones a lápiz. Púlsalo otra vez para desactivarlo.

### Teclado (Keyboard)

- **Escribe una cifra** (o una letra para las cifras mayores que 9) para rellenar la
  casilla seleccionada.
- **Space** o **Backspace** vacía la casilla seleccionada (su cifra o todas sus
  anotaciones a lápiz).
- **Las flechas** mueven un cursor de teclado. **Enter** cambia el cursor entre la entrada
  normal y la de anotaciones a lápiz, y las cifras que escribes van a la casilla que está
  debajo.
- **M** es el botón **Marcas** y **L** el botón **Resaltar**.

## Parámetros

- **Columnas** y **filas de subbloques**: la cuadrícula es tan grande como su producto, y
  cada bloque es tan ancho como el número de filas y tan alto como el número de columnas.
  En el modo jigsaw, el producto es simplemente el tamaño de la cuadrícula.
- **X**, **Jigsaw** y **Killer** activan las variantes descritas arriba. Los rompecabezas
  Killer están limitados a cuadrículas de nueve cifras como máximo.
- **Simetría**: cómo se refleja el patrón de pistas. Más simetría queda más bonita, pero
  tiende a dejar más pistas de las estrictamente necesarias.
- **Dificultad**: el tipo de razonamiento más difícil que exigirá el rompecabezas. _Muy fácil_ y
  _Fácil_ siempre tienen alguna casilla que se puede rellenar directamente; _Medio_ te exige
  razonar sobre dónde puede ir una cifra a través de un bloque y una línea; _Difícil_ necesita
  conjuntos de casillas que entre todas acaparan un conjunto de cifras; _Experto_ añade cadenas
  de implicaciones; y los rompecabezas _Extremo_ no se pueden terminar sin adivinar y dar marcha
  atrás. Los rompecabezas difíciles tardan más en generarse.
`,ve=e({default:()=>ye}),ye=`# Tiendas

La cuadrícula es un camping: algunas casillas tienen árboles y el resto es terreno vacío.
Monta tiendas en las casillas vacías de modo que:

- haya exactamente tantas tiendas como árboles;
- cada árbol pueda emparejarse con su propia tienda en una casilla justo a su lado (arriba,
  abajo, a la izquierda o a la derecha, nunca en diagonal). Una tienda puede estar también
  junto a otros árboles, pero cada tienda pertenece a un árbol y cada árbol a una tienda;
- ningún par de tiendas se toque, ni siquiera por una esquina;
- los números de los bordes derecho e inferior indiquen cuántas tiendas hay en cada fila y
  en cada columna.

Las pistas son solo los recuentos, así que todo el rompecabezas consiste en deducir dónde
deben ir las tiendas. Cada rompecabezas de aquí se puede resolver solo razonando, sin
adivinar.

## Controles

Las tiendas que se tocan se muestran en rojo con una marca en el lado o la esquina que
comparten, y lo mismo ocurre con cualquier grupo de tiendas con muy pocos árboles
entre ellas, o con cualquier grupo de árboles que ya no tiene sitio para todas sus
tiendas. Un recuento se vuelve gris cuando su línea tiene el número correcto de tiendas y
rojo cuando ya no puede cumplirse. **Resolver** coloca todas las tiendas por ti.

### Ratón y pantalla táctil

- **Haz clic en** una casilla vacía para montar una tienda en ella; vuelve a hacer clic en la
  tienda para quitarla.
- **Haz clic derecho en** una casilla vacía para marcarla como hierba, lo que significa que
  estás seguro de que ahí no va ninguna tienda; haz clic derecho otra vez para borrarla.
  Tanto un clic como un clic derecho vacían una casilla que ya contiene algo.
- **Arrastra con clic derecho** a lo largo de una fila o columna para convertir en hierba de
  una vez cada casilla vacía por la que pases; es útil para terminar una línea cuando ya
  tiene todas sus tiendas. Las tiendas y las marcas existentes no se tocan.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor.
- **Enter** monta o quita una tienda bajo el cursor.
- **Space** pone o quita hierba bajo el cursor.

## Parámetros

- **Ancho** y **alto** de la cuadrícula, de 4 a 20 casillas.
- **Dificultad**: los rompecabezas _Fácil_ ceden contando y mirando lo que necesita cada
  árbol y cada tienda. Los _Complicado_ exigen además sopesar cómo las colocaciones posibles
  en una línea restringen a sus vecinas, y pensar en qué casillas pueden compartir los
  árboles.
`,be=e({default:()=>xe}),xe=`# Torres

Cada casilla de la cuadrícula recibe una torre, con una altura de 1 hasta el tamaño de la
cuadrícula. Cada fila y cada columna debe contener cada altura exactamente una vez. Los
números del borde indican cuántas torres verías mirando hacia esa fila o columna desde ese
lado: una torre oculta todas las torres más bajas que tiene detrás. Una pista igual al
tamaño de la cuadrícula significa que las alturas suben a lo largo de toda la línea; una
pista de 1 significa que la torre más alta está justo en ese borde.

Los rompecabezas más grandes y más difíciles empiezan con algunas torres ya construidas y
omiten algunas pistas del borde. Las cifras que chocan con otra de su fila o columna, y
las pistas que las torres construidas hasta ahora ya no pueden cumplir, se muestran en
rojo. Este rompecabezas se conoce mejor como Rascacielos.

## Controles

Las torres dadas no se pueden cambiar, y **Resolver** rellena la solución.

### Ratón y pantalla táctil

- **Haz clic izquierdo en** una casilla para seleccionarla y luego usa el teclado en
  pantalla para construir una torre de esa altura. **⌫** en el teclado en
  pantalla vuelve a vaciar la casilla.
- **✎** en el teclado en pantalla deja activadas las **anotaciones a lápiz**: lo que elijas
  entonces se añade como una pequeña nota, la casilla sigue seleccionada para que puedas
  añadir varias, y la misma cifra otra vez borra una. Escribir una cifra de verdad borra las
  anotaciones a lápiz de esa casilla.
- **Haz clic derecho en** una casilla para seleccionarla directamente en modo de
  anotaciones a lápiz.
- **Marcas** en el menú de pausa rellena cada casilla vacía con un juego completo de
  anotaciones a lápiz.
- **Resaltar** (la lupa junto a Deshacer) destaca todas las casillas que tienen la misma
  altura que la última casilla en la que hiciste clic, y muestra esa altura en negrita
  entre las anotaciones a lápiz. Púlsalo otra vez para desactivarlo.

### Teclado (Keyboard)

- **Escribe una cifra** para construir una torre de esa altura en la casilla seleccionada.
  **Space** o **Backspace** la vacía.
- **Las flechas** mueven un cursor de teclado. **Enter** lo cambia entre el modo de cifras
  y el de anotaciones a lápiz; las cifras se escriben en la casilla resaltada y el cursor
  no se mueve.
- **M** es el botón **Marcas** y **L** el botón **Resaltar**.

## Parámetros

- **Tamaño de la cuadrícula**: de 3 a 9. Las torres se introducen como cifras sueltas, por
  eso el límite es 9.
- **Dificultad**: los rompecabezas Fácil solo necesitan las consecuencias directas de cada pista
  y de las reglas de filas y columnas. Los Difícil te piden considerar cada disposición que
  permite una pista y detectar grupos de casillas que comparten unos pocos candidatos. Experto
  añade un razonamiento de conjuntos más difícil y cadenas de implicaciones, y los rompecabezas
  Extremo no se pueden terminar sin algo de prueba y error, aunque la solución sigue siendo
  única.
`,Se=e({default:()=>Ce}),Ce=`# Vías

Una vía de tren entra en la cuadrícula por la izquierda y sale por abajo; los dos
extremos se muestran como rieles que salen del tablero. Completa la línea entre ellos. La
vía es un único recorrido sin ramales, bucles ni cruces, hecho solo de piezas rectas y de
curvas de un cuarto de vuelta, así que de cada casilla por la que pasa salen exactamente
dos rieles. Algunas piezas ya están colocadas en casillas sombreadas y no se pueden
cambiar. El número encima de cada columna y junto a cada fila indica por cuántas casillas
de esa línea pasa la vía terminada.

Los números se vuelven grises cuando su línea tiene el número correcto de casillas de vía,
y rojos cuando la línea ya no puede salir bien: demasiadas casillas de vía, o tantas
casillas tachadas que no queda sitio suficiente. Las casillas donde los rieles se unen mal
(tres rieles en una misma casilla, un bucle cerrado, o vía sobrante una vez unidas la
entrada y la salida) también se dibujan en rojo.

## Controles

**Resolver** coloca la vía completa y quita cualquiera de tus marcas que la contradiga. El
rompecabezas está terminado cuando una vía continua une la entrada con la salida y se
cumplen todos los recuentos.

### Ratón y pantalla táctil

- **Arrastra** por una serie de casillas vecinas para colocar rieles entre ellas. El camino
  puede doblar esquinas; si arrastras solo siguiendo rieles que ya están ahí, los quitas.
- **Haz clic** cerca de un lado de una casilla para añadir o quitar un solo riel por ese
  lado. Haz clic en el centro de una casilla para marcarla como “la vía pasa por aquí” sin
  decir por qué lados (útil para contar) y haz clic otra vez para borrar la marca.
- **Haz clic derecho** cerca de un lado para dibujar una barra corta que significa “aquí no
  hay riel”; haz clic derecho en el centro de una casilla para tachar la casilla entera.
  **Arrastra con clic derecho** a lo largo de una fila o columna para tachar de una vez
  una serie de casillas (o quitarles la cruz).
- **Borrar** (el botón de la goma junto a Deshacer) hace que un clic o un arrastre deje las
  casillas limpias: cada casilla que toca pierde sus rieles, sus barras de “no hay riel” y
  su marca o su cruz. Las piezas dadas se quedan. Púlsalo otra vez para volver a colocar vía.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor que se detiene en las casillas y en los lados entre
  ellas. **Enter** actúa como un clic en el cursor y **Space** como un clic derecho.
- **E** es el botón **Borrar**.

## Parámetros

- **Ancho** y **alto** de la cuadrícula, al menos cuatro cada uno.
- **Dificultad**: los rompecabezas _Fácil_ ceden mirando una casilla o una línea cada vez.
  Los _Complicado_ exigen además pensar dónde podría ir la última casilla de vía de una
  línea, y en los extremos sueltos de riel que deben continuar a lo largo de una línea o
  cruzarla. Cada rompecabezas tiene exactamente una solución.
- **Prohibir pistas de 1 consecutivas**: si está activado (el valor por defecto), no hay
  dos líneas vecinas que tengan ambas un 1, y tampoco lo tienen la columna de entrada ni la
  fila de salida. Así se evita que la vía recorra largas rectas aburridas junto al borde.
`,we=e({default:()=>Te}),Te=`# Giros

Una cuadrícula de piezas numeradas se ha desordenado girando bloques cuadrados de piezas.
Gíralos de vuelta hasta que los números se lean en orden de izquierda a derecha y de arriba
abajo. En el juego básico, cada movimiento gira un bloque de 2×2 un cuarto de vuelta
alrededor del punto donde se juntan sus cuatro piezas; los ajustes más grandes giran
bloques de 3×3 o incluso mayores.

En las variantes **orientables**, cada pieza lleva un triángulo, y el rompecabezas
solo cuenta como terminado cuando todos los triángulos apuntan hacia arriba. En la
variante **solo filas**, las piezas llevan en cambio su número de fila, así que basta con
que todos los 1 lleguen a la primera fila, los 2 a la segunda, y así sucesivamente.

## Controles

**Resolver** vuelve a poner cada pieza en su sitio. No te muestra un camino, pero es una
forma rápida de obtener una cuadrícula limpia para practicar una secuencia de giros.

### Ratón y pantalla táctil

- **Haz clic en** el centro de un bloque para girarlo en sentido antihorario;
  **haz clic derecho** para girarlo en sentido horario. En los bloques de 2×2, el centro es una
  esquina donde se juntan cuatro piezas; en los tamaños de bloque impares es la pieza del medio.
  Un clic hacia el borde de la cuadrícula gira el bloque que está pegado a ese borde.
- **Horario** (el botón de la flecha giratoria junto a Deshacer) intercambia los dos sentidos:
  un clic gira los bloques en sentido horario y un clic derecho en sentido antihorario.
  Púlsalo otra vez para volver.

### Teclado (Keyboard)

- **Las flechas** mueven por la cuadrícula un contorno del tamaño de un bloque. **Enter**
  gira el bloque del contorno en sentido antihorario y **Space** en sentido horario.
- **A**, **B**, **C** y **D** giran en sentido antihorario los bloques de las esquinas
  superior izquierda, superior derecha, inferior izquierda e inferior derecha; mantén
  **Shift** para el sentido horario.
- **T** es el botón **Horario**.

## Parámetros

- **Ancho** y **alto** de la cuadrícula.
- **Tamaño del bloque giratorio**: el lado del bloque cuadrado que gira un movimiento (al
  menos 2, y no mayor que la cuadrícula).
- **Un número por fila**: una variante más fácil en la que todas las piezas de una fila
  tienen el mismo número.
- **La orientación importa**: las piezas llevan triángulos y todas deben acabar apuntando
  hacia arriba.
- **Número de movimientos de mezcla**: déjalo en 0 para una mezcla completa, o pon un
  número pequeño para obtener una cuadrícula que esté exactamente a esa cantidad de giros
  de la solución. Tu objetivo es entonces encontrar esos giros y deshacerlos, así que una
  mezcla de tres movimientos merece una respuesta de tres movimientos (aunque a veces
  puede existir un camino más corto).
`,Ee=e({default:()=>De}),De=`# No muertos

La cuadrícula es una sala de espejos encantada. Cada casilla sin espejo esconde uno de
tres monstruos: un **fantasma**, un **vampiro** o un **zombi**. La leyenda encima de la
cuadrícula te dice cuántos de cada uno quedan por colocar, y el número de cada posición del
borde indica cuántos monstruos verías mirando hacia la cuadrícula desde ahí, siguiendo la
línea de visión mientras rebota en los espejos diagonales.

Los espejos cambian lo que puedes ver. Un vampiro no tiene reflejo, así que solo se cuenta
mientras tu línea de visión todavía no ha encontrado un espejo. Un fantasma es lo
contrario: invisible si lo miras directamente, solo aparece tras un reflejo. Un zombi se ve
siempre. Si una línea de visión cruza la misma casilla dos veces, el monstruo de esa
casilla se cuenta cada vez que es visible. Coloca todos los monstruos de modo que cada
número del borde y cada total sean correctos.

## Controles

Un número del borde se vuelve gris cuando su línea de visión está completamente cubierta y
rojo cuando ya no puede cumplirse; un recuento de la leyenda se vuelve rojo cuando se han
colocado demasiados monstruos de ese tipo. Las anotaciones a lápiz son solo para tus
propias notas y nunca afectan al rompecabezas.

### Ratón y pantalla táctil

- **Haz clic izquierdo en** una casilla vacía para pasarla por fantasma, vampiro, zombi y de
  nuevo vacía. La casilla queda resaltada.
- El teclado en pantalla elige directamente un monstruo para la casilla
  resaltada, sin tener que recorrer el ciclo; **⌫** vacía la casilla, anotaciones a lápiz
  incluidas.
- **✎** en el teclado en pantalla deja activadas las **anotaciones a lápiz**: el monstruo
  que elijas se añade entonces a la lista de candidatos de la casilla (o se quita de ella).
- **Haz clic derecho en** una casilla para añadir anotaciones a lápiz de una en una
  (fantasma, luego vampiro, luego zombi, luego borrar).
- **Visión** (el ojo junto a Deshacer) dibuja las líneas de visión que pasan por la casilla
  resaltada, doblando en los espejos, y rodea con un círculo los números del borde en los
  dos extremos de cada una. Mientras está activado, hacer clic en un número del borde
  traza la línea de ese número; haz clic otra vez para soltarla. Pulsa **Visión** otra vez
  para desactivarlo. Mientras está activado, hacer clic en una casilla no resaltada solo
  la resalta, así puedes trazar una casilla vacía sin llenarla; haz clic otra vez para
  cambiarla como siempre.

### Teclado (Keyboard)

- Las flechas mueven el resaltado. Enter cambia el monstruo de la casilla resaltada; Space
  cambia sus anotaciones a lápiz.
- \`G\`, \`V\`, \`Z\` (o \`1\`, \`2\`, \`3\`) ponen ese monstruo en la casilla resaltada, o activan y
  desactivan su anotación a lápiz cuando el resaltado está en modo lápiz. \`E\`, \`0\`,
  Backspace o Delete vacían la casilla, anotaciones a lápiz incluidas.
- \`S\` es el botón **Visión**.

## Parámetros

- **Ancho**, **Alto**: el tamaño de la cuadrícula, desde 3×3 hasta 54 casillas en total.
- **Dificultad**: los rompecabezas _Fácil_ ceden contando a lo largo de una línea de visión
  cada vez; los _Normal_ te exigen sopesar las combinaciones que permite un recorrido
  entero; los _Complicado_ no se pueden terminar sin probar una suposición.
`,Oe=e({default:()=>ke}),ke=`# Desigualdades

Rellena la cuadrícula de modo que cada fila y cada columna contenga cada cifra de 1 hasta
el tamaño de la cuadrícula exactamente una vez (un cuadrado latino), respetando los signos
dibujados entre casillas vecinas.

En el modo **Desigualdad**, los signos son símbolos de mayor que: el lado abierto de un
\`>\` mira hacia la cifra mayor y la punta hacia la menor. No todos los pares de vecinas
llevan un signo, y cuanto más difícil es el rompecabezas, menos signos hay.

En el modo **Adyacente**, los signos son barras cortas que significan que las dos cifras
se diferencian exactamente en uno (como 3 y 4). Aquí todas las barras se muestran siempre,
así que la **ausencia** de una barra entre dos casillas también es una pista: esas dos
cifras seguro que no son consecutivas.

El rompecabezas aparece en los periódicos con el nombre de Futoshiki.

## Controles

Las cifras que rompen una regla (un duplicado en una fila o columna, o un signo que no se
cumple) se muestran en rojo, igual que el signo culpable. El rompecabezas está completo
cuando todas las casillas están llenas y no hay nada en rojo.

### Ratón y pantalla táctil

- **Haz clic izquierdo en** una casilla para seleccionarla y luego usa el teclado en
  pantalla para poner una cifra. **⌫** en el teclado en pantalla vuelve a
  vaciar la casilla seleccionada. Hacer clic en la casilla seleccionada una segunda vez la
  deselecciona.
- **✎** en el teclado en pantalla deja activadas las **anotaciones a lápiz**: lo que elijas
  se añade entonces a una pequeña lista de posibilidades en la casilla (o se quita de ella)
  en lugar de ser la respuesta. Escribir una cifra en una casilla borra sus anotaciones a lápiz.
- **Haz clic derecho en** una casilla para seleccionarla directamente en modo de
  anotaciones a lápiz.
- **Marcas** en el menú de pausa rellena cada casilla vacía con todas las anotaciones a
  lápiz posibles, listas para que las taches; **Pista** (la bombilla junto a Deshacer) hace
  lo mismo pero omite las que un razonamiento sencillo ya descarta.
- **Resaltar** (la lupa junto a Deshacer) destaca todas las casillas que tienen la misma
  cifra que la última casilla en la que hiciste clic, cifras dadas incluidas, y muestra esa
  cifra en negrita entre las anotaciones a lápiz. Púlsalo otra vez para desactivarlo.

### Teclado (Keyboard)

- **Escribe una cifra** para rellenar la casilla seleccionada; \`0\`, Space o Backspace la
  vacían.
- Las flechas mueven un cursor por la cuadrícula; Enter cambia el cursor entre poner cifras
  y hacer anotaciones a lápiz.
- \`M\` es el botón **Marcas**, \`H\` es **Pista** y \`L\` es **Resaltar**.

## Parámetros

- **Modo**: Desigualdad (signos de mayor que) o Adyacente (barras entre cifras
  consecutivas).
- **Tamaño**: el número de filas y columnas, de 3 a 9.
- **Dificultad**: cuánto razonamiento necesita el rompecabezas. Los rompecabezas **Muy fácil** nunca
  necesitan los signos: en el modo Desigualdad no tienen ninguno y son simples cuadrados latinos, y
  en el modo Adyacente las barras se dibujan, pero las cifras dadas bastan por sí solas. Los
  **Fácil** solo necesitan el significado directo de cada signo; los **Medio** te exigen considerar
  grupos de casillas a la vez; los **Difícil** añaden razonamiento de conjuntos basado en posiciones
  y cadenas de implicaciones; los **Extremo** (disponibles desde **Personalizado…**) pueden requerir
  prueba y error, aunque la solución sigue siendo única.
`,Ae=e({default:()=>je}),je=`# Rebelde

Colorea cada casilla de la cuadrícula de negro o de blanco. Algunas casillas vienen dadas
como pistas y no se pueden cambiar; el resto empieza en gris y te toca rellenarlo. Cuando
termines, deben cumplirse tres cosas:

- cada fila contiene tantas casillas negras como blancas;
- cada columna contiene tantas casillas negras como blancas;
- no hay tres casillas consecutivas del mismo color en una fila o columna.

Los errores se muestran en rojo: una serie de tres o más casillas iguales recibe un marco
rojo, y una casilla lleva un **!** rojo cuando su fila o columna ya tiene demasiadas de ese
color. En la variante opcional “filas y columnas únicas”, no puede haber dos filas con el
mismo patrón (ni dos columnas); las líneas coincidentes se tachan en rojo.

## Controles

Las casillas de pista (las que se dibujan con un pequeño marco dentro) no se pueden
cambiar. **Resolver** rellena toda la cuadrícula. El rompecabezas está terminado cuando
todas las casillas están coloreadas y no se muestra nada en rojo.

### Ratón y pantalla táctil

- **Haz clic en** una casilla gris para ponerla negra; haz clic otra vez para blanca, y una
  vez más para vaciarla.
- **Haz clic derecho** para recorrer el ciclo al revés: blanca, luego negra, luego vacía.
- **Haz clic central** para vaciar una casilla directamente.
- **Borrar** (el botón de la goma junto a Deshacer) hace que un clic vacíe la casilla en
  lugar de colorearla. Púlsalo otra vez para volver a colorear.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor por la cuadrícula.
- **Enter** cambia la casilla bajo el cursor como un clic y **Space** como un clic derecho.
- **1** pone negro, **0** (o **2**) pone blanco y **Backspace** vacía.
- **E** es el botón **Borrar**.

## Parámetros

- **Ancho** y **alto** de la cuadrícula. Ambos deben ser pares y como mínimo 6.
- **Filas y columnas únicas**: si está activado, no puede haber dos filas idénticas ni dos
  columnas idénticas (una fila sí puede coincidir con una columna). Las cuadrículas muy
  altas o muy anchas se rechazan en este modo porque no hay suficientes líneas distintas
  para todas.
- **Dificultad**: los rompecabezas _Fácil_ solo necesitan dos argumentos inmediatos: dos
  casillas iguales obligan a que la casilla junto a ellas o entre ellas sea del otro color,
  y una línea que ya tiene su cupo de un color lleva el otro color en todas las demás
  casillas. Los _Normal_ exigen además razonar dónde puede ir todavía la última casilla de
  un color en una línea sin crear una serie de tres. Cada rompecabezas tiene exactamente
  una solución.
`,Me=e({default:()=>Ne}),Ne=`# Desenreda

Unos cuantos puntos están unidos por líneas rectas, y las líneas están enredadas. Mueve
los puntos hasta que no se crucen dos líneas. Todos los rompecabezas se pueden desenredar:
el programa construyó el grafo a partir de una disposición sin cruces y luego repartió
los puntos al azar sobre un círculo.

Las líneas que cruzan otra línea se dibujan en rojo, así que el enredo se va reduciendo a
la vista mientras trabajas; el rompecabezas está resuelto cuando no queda nada en rojo.
Resolver desliza cada punto hasta una disposición que el programa sabe que funciona.

## Controles

Deshacer revierte cualquier movimiento, incluido Resolver.

### Ratón y pantalla táctil

- **Arrastra** un punto y suéltalo donde quieras. El punto que agarras se vuelve naranja y
  sus vecinos azules. Soltar un punto en el margen lo coloca en el borde del tablero;
  soltarlo totalmente fuera del lienzo cancela el arrastre.
- **Ajustar** (el botón de la cuadrícula junto a Deshacer) activa o desactiva una
  cuadrícula de ajuste: los puntos que sueltes caerán en el centro de las casillas marcadas
  con puntos tenues, que es también como está dispuesta la solución. El botón queda
  iluminado mientras la cuadrícula está activada.

### Teclado (Keyboard)

- **Las flechas** mueven un cursor de punto en punto en esa dirección. **Enter** o
  **Space** recoge el punto; las flechas lo llevan entonces (un octavo de casilla por
  pulsación, una casilla entera con Shift, un solo paso con Ctrl) y **Enter** o **Space** lo
  suelta.
- \`G\` es el botón **Ajustar**.

## Parámetros

- **Número de puntos**: cuántos puntos tiene el grafo, al menos 4. Más puntos significa más
  líneas y un enredo más difícil. El tablero crece con el número de puntos para que siempre
  haya espacio para repartirlos.
`,Pe=e({$dir:()=>`ltr`,$locale:()=>`es`,$name:()=>q,default:()=>Fe,games:()=>Q,messages:()=>X,status:()=>Z,touchPhrases:()=>Y,tutorials:()=>$,ui:()=>J}),q=`Español`,J=JSON.parse(`{"appName":"Puzzlebox","menu":{"title":"Puzzlebox","tagline":"{n} rompecabezas de lógica dibujados a mano. Elige uno y juega.","lockedNote":"Cada rompecabezas que terminas a mano te da un crédito. Gasta aquí tus créditos para abrir rompecabezas nuevos.","language":"Idioma","stat":{"credits":{"one":"★ {n} crédito","other":"★ {n} créditos"},"unlocked":"{n} de {total} desbloqueados","solved":{"one":"{n} resuelto","other":"{n} resueltos"},"tight":{"credits":"★ {n}","unlocked":"{n}/{total}","solved":"✓ {n}","achievements":"{n}/{total}"},"achievements":"{n} de {total} logros"},"search":{"placeholder":"Buscar","label":"Busca los rompecabezas por nombre","clear":"Borrar la búsqueda","empty":"Ningún rompecabezas se llama “{q}”. Prueba con otro nombre."},"hint":{"allOpen":"Todo está abierto.","complete":"¡Has desbloqueado la colección entera!","spend":{"one":"Gasta un crédito aquí abajo para desbloquear un rompecabezas.","other":"Gasta un crédito aquí abajo para desbloquear rompecabezas."},"earn":"Termina cualquier rompecabezas a mano para ganar un crédito."},"card":{"label":"{name}: {description}","labelLocked":"{name}: {description} (bloqueado)","labelAlias":"{name} (también conocido como {alias}): {description}","labelLockedAlias":"{name} (también conocido como {alias}): {description} (bloqueado)","solvedTag":"✓ resuelto ×{n}","unlock":"Desbloquear · 1 crédito","unlocked":"¡{name} desbloqueado!"},"noCredit":"Resuelve cualquier rompecabezas a mano para ganar un crédito y vuelve para desbloquear este.","surprise":"Sorpréndeme: abrir un puzle al azar","privacy":{"note":"Puzzlebox cuenta cómo se juegan sus rompecabezas (nunca quién los juega) para mejorarlos."},"continue":"Continuar","continueLabel":"Continuar {name}","spend":"Gastar"},"notFound":{"title":"No existe ese rompecabezas","body":"No tenemos ningún rompecabezas llamado “{slug}”.","back":"Volver a todos los rompecabezas"},"locked":"{name} sigue bloqueado. Gana un crédito terminando un rompecabezas y desbloquéalo.","pageTitle":"{name} · Puzzlebox","topbar":{"back":"Todos los rompecabezas","help":"Ayuda","creditsTitle":"Los créditos desbloquean rompecabezas nuevos. Termina uno a mano para ganar un crédito.","boardLabel":"Tablero de {name}"},"toolbar":{"type":"Tipo","custom":"Personalizado…","new":"Nuevo","newTitle":"Partida nueva (N)","restart":"Reiniciar","restartTitle":"Reinicia este rompecabezas","undo":"Deshacer","undoTitle":"Deshacer (U, Ctrl+Z)","redo":"Rehacer","redoTitle":"Rehacer (R, Ctrl+Y)","hint":"Pista","hintTitle":"Revela una casilla y sigue jugando. Con hasta {n} pistas sigues ganando un crédito.","solve":"Resolver","solveTitle":"Muestra la solución (Ctrl+S)","gameId":"Compartir","gameIdTitle":"Comparte este rompecabezas o juega uno que te hayan enviado","more":"Más","pause":"Pausa","pauseTitle":"Menú de pausa (Esc)","keypad":"Teclado","keypadTitle":"Muestra teclas en pantalla","zoomOut":"−","zoomOutTitle":"Más pequeño","zoomIn":"+","zoomInTitle":"Más grande","tapPlace":"Toque: colocar","tapMark":"Toque: marcar","tapTitle":"Qué hace un toque simple","tapPlaceTitle":"Un toque coloca; mantén pulsado para marcar. Toca para cambiar.","tapMarkTitle":"Un toque marca; mantén pulsado para colocar. Toca para cambiar."},"pause":{"title":"En pausa","resume":"Continuar"},"pager":{"label":"Páginas","prev":"Página anterior","next":"Página siguiente","page":"Página {n} de {total}"},"badge":{"won":"¡Resuelto!","lost":"Fin de la partida"},"stage":{"generating":"Repartiendo un rompecabezas nuevo…"},"endgame":{"won":"¡Rompecabezas resuelto!","lost":"Fin de la partida","credit":"★ +1 crédito: suficiente para desbloquear un rompecabezas nuevo de la colección.","wonNote":"¿Te animas con el siguiente?","forfeitNote":"Este rompecabezas no te da crédito: la solución ya se mostró por el camino.","lostNote":"Este se te escapó. ¿Lo intentas otra vez?","next":"Siguiente rompecabezas","retry":"Reintentar","dismiss":"Cerrar y mirar el tablero","time":"Tiempo","moves":"Movimientos","hints":"Pista","best":"Mejor {time}","newBest":"¡Nuevo récord!","stars":"{n} de 3 estrellas","stepUp":"Prueba {preset} →"},"keypad":{"label":"Teclado en pantalla","clear":"Borrar","clearTitle":"Vacía la casilla seleccionada (Backspace)","pencil":"Anotaciones a lápiz","pencilOnTitle":"Las teclas escriben anotaciones a lápiz. Toca para volver a escribir respuestas.","pencilOffTitle":"Actívalo para que las próximas teclas escriban anotaciones a lápiz"},"drawer":{"title":"Cómo jugar a {name}","close":"Cerrar","replay":"▶ Repetir el tutorial","achievements":"Logros ({n}/{total})"},"dialog":{"ok":"Aceptar","cancel":"Cancelar","customTitle":"{name}: personalizado","gameIdTitle":"Compartir este rompecabezas","shareLead":"Envía este mismo rompecabezas a otra persona.","copyLink":"Copiar enlace","linkCopied":"Enlace copiado","codes":"Códigos del rompecabezas","byDescription":"Por descripción","bySeed":"Por semilla aleatoria","enterLabel":"Juega un rompecabezas concreto: pega un código","play":"Jugar","copy":"Copiar","copied":"Copiado","link":"Enlace","linkTitle":"Copia un enlace que abre este mismo rompecabezas","linkPrompt":"Enlace a este rompecabezas","hintAd":{"title":"¿Una pista más?","body":"Ya has usado tus {n} pistas gratis. Si pides otra, este rompecabezas no te dará crédito, a menos que veas un anuncio corto para conservarlo.","watch":"Ver un anuncio y conservar el crédito","anyway":"Usar la pista igualmente"},"badCode":"Ese código no abre ningún rompecabezas de {name}. Comprueba que se haya copiado entero."},"toast":{"creditEarned":"+1 crédito","tutorialComplete":"Tutorial terminado. Aquí tienes un rompecabezas nuevo; termínalo a mano para ganar un crédito.","tutorialCompleteBack":"Tutorial terminado. De vuelta a tu rompecabezas.","tutorialSkipped":"Tutorial omitido. Puedes repetirlo cuando quieras desde Ayuda.","tapModeMark":"Toca para marcar. Mantén pulsado para la acción principal.","tapModePlace":"Toca para la acción principal. Mantén pulsado para marcar.","touchHint":"Toca para jugar y mantén pulsado para la segunda acción. El primer botón redondo intercambia las dos.","hintNone":"No queda nada que revelar en este tablero.","hintNoCredit":"Son más de {n} pistas, así que este rompecabezas ya no te dará crédito, pero puedes seguir hasta terminarlo.","hintAdFailed":"No había ningún anuncio disponible, así que nada ha cambiado: la pista sigue ahí si la quieres.","stuck":"¿Atascado? Una pista revela una casilla y el puzle sigue dándote su crédito."},"tutorial":{"label":"Tutorial de {name}","step":"Paso {n} de {total}","next":"Siguiente","done":"Hecho","skipStep":"Saltar paso","skipTutorial":"Saltar tutorial","nice":"¡Bien!","offScript":"Ese no: se ha deshecho, para que los pasos sigan cuadrando con el tablero. Prueba lo que pide este paso.","offScriptRead":"Se ha deshecho, para que los pasos sigan cuadrando con el tablero. Lee primero este paso.","pointer":{"drag":"arrastrar","rightClick":"clic derecho","rightDrag":"arrastrar con clic derecho","middleClick":"clic central","longPress":"pulsación larga","longPressDrag":"mantener y arrastrar","twoFingerTap":"toque con dos dedos"}},"splash":{"tagline":"Rompecabezas dibujados a mano, listos para jugar","skip":"Saltar"},"help":{"keypad":{"heading":"El teclado en pantalla","introTouch":"Las teclas en pantalla escriben por ti","introPointer":"**Teclado**, en la barra de herramientas, muestra teclas en pantalla que escriben por ti","select":": elige primero una casilla del tablero y luego pulsa una tecla.","clear":"- **⌫** vuelve a vaciar la casilla elegida.","pencil":"- **✎** deja activadas las anotaciones a lápiz, así que las teclas escriben notas pequeñas en lugar de\\n  respuestas. Púlsalo otra vez para volver a las respuestas."}},"achievements":{"title":"Logros","summary":"{n} de {total} conseguidos","unlocked":"Logro desbloqueado","secret":{"name":"Logro secreto","description":"Sigue jugando para descubrirlo."},"earnedOn":"Conseguido el {date}","progress":"{n} de {goal}","collection":"La colección","tier":{"bronze":"Bronce","silver":"Plata","gold":"Oro"},"meta":{"first-solve":{"name":"Primeros pasos","description":"Resuelve tu primer rompecabezas tú solo."},"solves-10":{"name":"Calentando motores","description":"Resuelve 10 rompecabezas."},"solves-50":{"name":"Pura afición","description":"Resuelve 50 rompecabezas."},"solves-100":{"name":"Centurión","description":"Resuelve 100 rompecabezas."},"solves-250":{"name":"Gran maestro","description":"Resuelve 250 rompecabezas."},"specialist":{"name":"Especialista","description":"Resuelve 10 rompecabezas del mismo juego."},"variety-3":{"name":"Degustación","description":"Resuelve un rompecabezas en 3 juegos distintos."},"variety-10":{"name":"Todoterreno","description":"Resuelve un rompecabezas en 10 juegos distintos."},"variety-all":{"name":"La caja entera","description":"Resuelve un rompecabezas en cada juego de la colección."},"unlock-first":{"name":"Estante nuevo","description":"Desbloquea tu primer juego con un crédito."},"unlock-15":{"name":"Colección creciente","description":"Ten 15 juegos desbloqueados."},"unlock-25":{"name":"Llavero","description":"Ten 25 juegos desbloqueados."},"unlock-all":{"name":"Llave maestra","description":"Desbloquea todos los juegos de la colección."},"hardest-1":{"name":"Reto aceptado","description":"Resuelve un rompecabezas en el nivel más difícil de un juego."},"hardest-10":{"name":"Buscacumbres","description":"Resuelve el nivel más difícil de 10 juegos distintos."},"hardest-all":{"name":"Inquebrantable","description":"Resuelve el nivel más difícil de todos los juegos."},"pure-1":{"name":"Hoja limpia","description":"Resuelve un rompecabezas sin deshacer ni usar pistas."},"pure-25":{"name":"Pulso firme","description":"Resuelve 25 rompecabezas sin deshacer ni usar pistas."},"quick-draw":{"name":"Desenfundado rápido","description":"Resuelve un rompecabezas en 30 segundos o menos."},"marathon":{"name":"Maratón","description":"Resuelve un rompecabezas después de dedicarle más de 20 minutos."},"comeback":{"name":"Nunca te rindas","description":"Pierde un rompecabezas y luego vuelve y resuélvelo."},"second-thoughts":{"name":"Pensándolo mejor","description":"Deshaz 100 veces y aun así resuelve el rompecabezas."},"a-little-help":{"name":"Una ayudita","description":"Usa una pista."},"oops":{"name":"Uy","description":"Pierde un rompecabezas."},"night-owl":{"name":"Ave nocturna","description":"Resuelve un rompecabezas entre medianoche y las 5 de la madrugada."},"on-a-roll":{"name":"En racha","description":"Resuelve 5 rompecabezas en una misma sesión."},"days-3":{"name":"Asiduo","description":"Juega en 3 días distintos."},"days-7":{"name":"Incondicional","description":"Juega en 7 días distintos."},"days-30":{"name":"Parte del mobiliario","description":"Juega en 30 días distintos."},"quick-study":{"name":"Aprendiz veloz","description":"Completa un tutorial hasta el final."},"scholar":{"name":"Erudito","description":"Completa 10 tutoriales distintos hasta el final."},"collector-25":{"name":"Coleccionista de insignias","description":"Consigue 25 logros."},"collector-60":{"name":"Vitrina de trofeos","description":"Consigue 60 logros."},"legend":{"name":"Leyenda del rompecabezas","description":"Consigue todos los demás logros."}},"andMore":{"one":"{n} logro desbloqueado","other":"{n} logros desbloqueados"}},"welcome":{"title":"Elige tu primer rompecabezas","subtitle":{"one":"{n} rompecabezas para empezar. Elígelo y juega.","other":"{n} rompecabezas para empezar. Elige uno y juega."},"more":{"one":"…y {n} más por desbloquear","other":"…y {n} más por desbloquear"},"how":"Cada rompecabezas que resuelves te da un crédito, y cada crédito desbloquea un juego nuevo."},"gamepad":{"connected":"Mando conectado"},"settings":{"title":"Ajustes","done":"Listo","sound":"Sonido","volume":"Volumen","reduceMotion":"Reducir movimiento","vibration":"Vibración","statistics":"Estadísticas de juego","on":"Sí","off":"No","portalMuted":"El sitio tiene el sonido desactivado."}}`),Y=[[`ratón y pantalla táctil`,`pantalla táctil`],[`arrastrando con clic derecho`,`manteniendo pulsado y arrastrando`],[`arrastrar con clic derecho`,`mantener pulsado y arrastrar`],[`arrastras con clic derecho`,`mantienes pulsado y arrastras`],[`arrastra con clic derecho`,`mantén pulsado y arrastra`],[`haz clic central en ellos`,`tócalos con dos dedos`],[`haz clic central en ellas`,`tócalas con dos dedos`],[`haz clic central en él`,`tócalo con dos dedos`],[`haz clic central en ella`,`tócala con dos dedos`],[`un tercer clic derecho`,`una tercera pulsación larga`],[`tercer clic derecho`,`tercera pulsación larga`],[`haz doble clic en`,`toca dos veces`],[`haz doble clic`,`toca dos veces`],[`hacer doble clic`,`tocar dos veces`],[`doble clic`,`doble toque`],[`haz clic en él`,`tócalo`],[`hacer clic en él`,`tocarlo`],[`haciendo clic en él`,`tocándolo`],[`haz clic en ella`,`tócala`],[`hacer clic en ella`,`tocarla`],[`haciendo clic en ella`,`tocándola`],[`haz clic en ellos`,`tócalos`],[`hacer clic en ellos`,`tocarlos`],[`haciendo clic en ellos`,`tocándolos`],[`haz clic en ellas`,`tócalas`],[`hacer clic en ellas`,`tocarlas`],[`haciendo clic en ellas`,`tocándolas`],[`haz clic izquierdo en él`,`tócalo`],[`haces clic en él`,`lo tocas`],[`haz clic izquierdo en ella`,`tócala`],[`haces clic en ella`,`la tocas`],[`haz clic izquierdo en ellos`,`tócalos`],[`haces clic en ellos`,`los tocas`],[`haz clic izquierdo en ellas`,`tócalas`],[`haces clic en ellas`,`las tocas`],[`haz clic derecho en`,`mantén el dedo sobre`],[`hacer clic derecho en`,`mantener el dedo sobre`],[`haciendo clic derecho en`,`manteniendo el dedo sobre`],[`haz clic derecho`,`mantén pulsado`],[`hacer clic derecho`,`mantener pulsado`],[`haciendo clic derecho`,`manteniendo pulsado`],[`haz clic central en`,`toca con dos dedos`],[`hacer clic central en`,`tocar con dos dedos`],[`haz clic central`,`toca con dos dedos`],[`hacer clic central`,`tocar con dos dedos`],[`haciendo clic central`,`tocando con dos dedos`],[`haz clic izquierdo en`,`toca`],[`haz clic izquierdo`,`toca`],[`haz clic en`,`toca`],[`hacer clic en`,`tocar`],[`haciendo clic en`,`tocando`],[`haces clic derecho en`,`mantienes el dedo sobre`],[`haces clic derecho`,`mantienes pulsado`],[`haces clic en`,`tocas`],[`haces clic`,`tocas`],[`haz clic`,`toca`],[`hacer clic`,`tocar`],[`haciendo clic`,`tocando`],[`un segundo clic derecho`,`una segunda pulsación larga`],[`el segundo clic derecho`,`la segunda pulsación larga`],[`un primer clic derecho`,`una primera pulsación larga`],[`el primer clic derecho`,`la primera pulsación larga`],[`un nuevo clic derecho`,`una nueva pulsación larga`],[`segundo clic derecho`,`segunda pulsación larga`],[`otro clic derecho`,`otra pulsación larga`],[`primer clic derecho`,`primera pulsación larga`],[`nuevo clic derecho`,`nueva pulsación larga`],[`un clic derecho`,`una pulsación larga`],[`el clic derecho`,`la pulsación larga`],[`del clic derecho`,`de la pulsación larga`],[`al clic derecho`,`a la pulsación larga`],[`los clics derechos`,`las pulsaciones largas`],[`con el botón derecho`,`con una pulsación larga`],[`el botón derecho`,`la pulsación larga`],[`del botón derecho`,`de la pulsación larga`],[`clics derechos`,`pulsaciones largas`],[`clic derecho`,`pulsación larga`],[`clics centrales`,`toques con dos dedos`],[`clic central`,`toque con dos dedos`],[`clics izquierdos`,`toques`],[`clic izquierdo`,`toque`],[`botón derecho`,`pulsación larga`],[`botón central`,`toque con dos dedos`],[`botón izquierdo`,`toque`],[`clics`,`toques`],[`clic`,`toque`]],X=JSON.parse(`{"4-way rotational symmetry needs a square grid":"La simetría rotacional de orden 4 requiere una cuadrícula cuadrada","A 2×2 grid is too small to make a puzzle from":"Una cuadrícula de 2×2 es demasiado pequeña para crear un rompecabezas","A cube rolling along a single row can never turn over all six faces":"Un cubo que rueda por una sola fila nunca puede voltear sus seis caras","A given piece leaves the grid":"Una pieza dada se sale de la cuadrícula","A jigsaw block is too big":"Un bloque jigsaw es demasiado grande","A jigsaw block is too small":"Un bloque jigsaw es demasiado pequeño","A killer cage is too big":"Una jaula es demasiado grande","A killer cage is too small":"Una jaula es demasiado pequeña","A wrapping puzzle needs a width and height of at least 3 to have a unique solution":"Un rompecabezas envolvente necesita un ancho y un alto de al menos 3 para tener solución única","All parameters must be whole numbers":"Todos los parámetros deben ser números enteros","Already solved":"Ya está resuelto","An edge cannot join a point to itself":"Una arista no puede unir un punto consigo mismo","Angle offset out of bounds.":"Desplazamiento de ángulo fuera de rango.","At least one grid dimension must be greater than zero":"Al menos una dimensión de la cuadrícula debe ser mayor que cero","At least one of width and height for this grid type must be at least {0}":"Para este tipo de cuadrícula, el ancho o el alto debe ser al menos {0}","At least one of width and height must be greater than one":"El ancho o el alto debe ser mayor que uno","Bad character in grid description":"Carácter incorrecto en la descripción de la cuadrícula","Bad mine layout in game description":"Disposición de minas incorrecta en la descripción de la partida","Badly formatted move limit after grid description":"Límite de movimientos mal formado tras la descripción de la cuadrícula","Barrier probability must be a number between 0 and 1":"La probabilidad de barrera debe ser un número entre 0 y 1","Barrier probability must be between 0 and 1":"La probabilidad de barrera debe estar entre 0 y 1","Blue cells are placed where some faces could never reach them":"Hay casillas azules donde algunas caras nunca podrían llegar","Both dimensions must be at least 2":"Ambas dimensiones deben ser al menos 2","Both grid dimensions must be at least one":"Ambas dimensiones de la cuadrícula deben ser al menos uno","Bridges per direction must be between 1 and {0}":"El número de puentes por dirección debe estar entre 1 y {0}","Can't create {0}×{1} puzzles":"No se pueden crear rompecabezas de {0}×{1}","Clue did not provide 2 direction flags":"La pista no indica 2 marcadores de dirección","Clue is larger than the number of sides of its face":"La pista supera el número de lados de su cara","Clue is missing its number":"A la pista le falta su número","Clue number out of range":"Número de pista fuera de rango","Colour out of range":"Color fuera de rango","Colour out of range in grid description":"Color fuera de rango en la descripción de la cuadrícula","Colours, pegs and guesses must be whole numbers":"Los colores, las clavijas y los intentos deben ser números enteros","Column counts inconsistent":"Los recuentos de columnas no coinciden","Could not four-colour the map":"No se pudo colorear el mapa con cuatro colores","Count is larger than the line it describes":"El recuento supera la línea que describe","Description contains a duplicate number":"La descripción contiene un número duplicado","Description contains a number larger than the grid":"La descripción contiene un número mayor que la cuadrícula","Description contains a number out of range":"La descripción contiene un número fuera de rango","Description contains a number that is too large":"La descripción contiene un número demasiado grande","Description contains a repeated number":"La descripción contiene un número repetido","Description contains an unexpected character":"La descripción contiene un carácter inesperado","Description contains invalid characters":"La descripción contiene caracteres no válidos","Description is corrupted":"La descripción está dañada","Description is longer than expected":"La descripción es más larga de lo esperado","Description is shorter than expected":"La descripción es más corta de lo esperado","Description is too long":"La descripción es demasiado larga","Description is too short":"La descripción es demasiado corta","Description marks cells beyond the grid as blue":"La descripción marca en azul casillas fuera de la cuadrícula","Description may only contain P, H and O":"La descripción solo puede contener P, H y O","Description must be a comma-separated list of numbers":"La descripción debe ser una lista de números separados por comas","Description must be exactly {0} characters":"La descripción debe tener exactamente {0} caracteres","Description must be hex digits, a comma and a cell number":"La descripción debe tener cifras hexadecimales, una coma y un número de casilla","Description must be numbers each followed by an orientation letter (u, l, d or r)":"La descripción debe ser números seguidos cada uno de una letra de orientación (u, l, d o r)","Description must be two hex strings separated by a comma":"La descripción debe ser dos cadenas hexadecimales separadas por una coma","Description must be {0} hexadecimal digits":"La descripción debe tener {0} cifras hexadecimales","Description must contain at least one edge":"La descripción debe contener al menos una arista","Description must contain at least one peg":"La descripción debe contener al menos una clavija","Description must contain at least two islands":"La descripción debe contener al menos dos islas","Description must contain each number from 1 to {0} exactly once":"La descripción debe contener cada número del 1 al {0} exactamente una vez","Description must contain each row number from 1 to {0} exactly {1} times":"La descripción debe contener cada número de fila del 1 al {0} exactamente {1} veces","Description must contain only digits":"La descripción solo debe contener cifras","Description must contain only numbers":"La descripción solo debe contener números","Description must contain {0} numbers":"La descripción debe contener {0} números","Description must contain {0} tiles":"La descripción debe contener {0} piezas","Description must mark exactly {0} cells blue":"La descripción debe marcar exactamente {0} casillas en azul","Description must start with {0} hex digits":"La descripción debe empezar con {0} cifras hexadecimales","Description places two islands next to each other":"La descripción coloca dos islas una junto a otra","Description repeats a colour although duplicates are disallowed":"La descripción repite un color aunque los duplicados no están permitidos","Description too long":"Descripción demasiado larga","Description too long for board size":"Descripción demasiado larga para el tamaño del tablero","Description too short":"Descripción demasiado corta","Description too short for board size":"Descripción demasiado corta para el tamaño del tablero","Digits in a {0}×{1} puzzle cannot exceed {2}":"En un rompecabezas de {0}×{1}, las cifras no pueden superar {2}","Disallowing duplicates requires at least as many colours as pegs":"Prohibir duplicados requiere al menos tantos colores como clavijas","Domino descriptions inconsistent":"Descripciones de fichas de dominó incoherentes","Dots too close together":"Puntos demasiado juntos","Duplicate edge in game description":"Arista duplicada en la descripción de la partida","Edge list defines the wrong number of regions":"La lista de aristas define un número incorrecto de regiones","Entrance square must contain a piece leaving the left edge":"La casilla de entrada debe contener un tramo que salga por el borde izquierdo","Every killer cage must have exactly one sum":"Cada jaula killer debe tener exactamente una suma","Exit square must contain a piece leaving the bottom edge":"La casilla de salida debe contener un tramo que salga por el borde inferior","Expansion factor must be a number":"El factor de expansión debe ser un número","Expansion factor may not be negative":"El factor de expansión no puede ser negativo","Expansion factor must be from 0 to 100":"El factor de expansión debe estar entre 0 y 100","Expected ',' after block structure description":"Se esperaba ',' tras la estructura de bloques","Expected ',' after grid description":"Se esperaba ',' tras la descripción de la cuadrícula","Expected a list of edges like 0-1,1-2 in game description":"Se esperaba una lista de aristas como 0-1,1-2 en la descripción de la partida","Expected comma before clue list":"Se esperaba una coma antes de la lista de pistas","Expected jigsaw block structure in game description":"Se esperaba una estructura de bloques jigsaw en la descripción de la partida","Expected killer cage structure in game description":"Se esperaba una estructura de jaulas killer en la descripción de la partida","Expected killer clue grid in game description":"Se esperaba una cuadrícula de pistas killer en la descripción de la partida","Expected slashes between clues":"Se esperaban barras entre las pistas","Expecting number in game description":"Se esperaba un número en la descripción de la partida","Extra moves must not be negative":"Los movimientos adicionales no pueden ser negativos","Extreme puzzles with more than {0} symbols take too long to generate":"Los rompecabezas de nivel Extremo de más de {0} símbolos tardan demasiado en generarse","Faulty game description":"Descripción de la partida defectuosa","Flags contradicting each other":"Marcadores contradictorios entre sí","Flags go off grid":"Los marcadores se salen de la cuadrícula","Game ID must include parameters":"El ID de la partida debe incluir los parámetros","Game description contained unexpected characters":"La descripción de la partida contenía caracteres inesperados","Game description contains an unexpected character":"La descripción de la partida contiene un carácter inesperado","Game description contains no dots":"La descripción de la partida no contiene puntos","Game description contains unexpected characters":"La descripción de la partida contiene caracteres inesperados","Game description has {0} balls; expected {1}":"La descripción de la partida tiene {0} bolas; se esperaban {1}","Game description is corrupted":"La descripción de la partida está dañada","Game description is longer than expected":"La descripción de la partida es más larga de lo esperado","Game description is shorter than expected":"La descripción de la partida es más corta de lo esperado","Game description is the wrong length":"La descripción de la partida no tiene la longitud correcta","Game description is too long":"La descripción de la partida es demasiado larga","Game description is too short":"La descripción de la partida es demasiado corta","Game description is wrong length":"La descripción de la partida no tiene la longitud correcta","Game description longer than expected":"Descripción de la partida más larga de lo esperado","Game description must be hexadecimal":"La descripción de la partida debe ser hexadecimal","Game description shorter than expected":"Descripción de la partida más corta de lo esperado","Game description too long":"Descripción de la partida demasiado larga","Game is already solved":"La partida ya está resuelta","Grid area must be at least six squares":"El área de la cuadrícula debe ser de al menos seis casillas","Grid area must be greater than 1":"El área de la cuadrícula debe ser mayor que 1","Grid area must be greater than one":"El área de la cuadrícula debe ser mayor que uno","Grid description is the wrong length or not hexadecimal":"La descripción de la cuadrícula no tiene la longitud correcta o no es hexadecimal","Grid description strings not used with this grid type":"Este tipo de cuadrícula no usa descripciones de cuadrícula","Grid dimensions cannot be negative":"Las dimensiones de la cuadrícula no pueden ser negativas","Grid dimensions must be at most {0}":"Las dimensiones de la cuadrícula deben ser como máximo {0}","Grid dimensions must be whole numbers":"Las dimensiones de la cuadrícula deben ser números enteros","Grid is too big":"La cuadrícula es demasiado grande","Grid must contain at least two squares":"La cuadrícula debe contener al menos dos casillas","Grid size must be between 3 and 9":"El tamaño de la cuadrícula debe estar entre 3 y 9","Grid size must be between {0} and {1}":"El tamaño de la cuadrícula debe estar entre {0} y {1}","Hard and Extreme puzzles are limited to a maximum number of {0}":"Los rompecabezas Difícil y Extremo están limitados a un número máximo de {0}","Height must be at least 3":"El alto debe ser al menos 3","Height must be at least five":"El alto debe ser al menos cinco","Height must be at least one":"El alto debe ser al menos uno","Height must be at least the rotating block size":"El alto debe ser al menos el tamaño del bloque giratorio","Height must be at least two":"El alto debe ser al menos dos","Illegal grid type":"Tipo de cuadrícula no permitido","Incorrect number balance in game description":"Equilibrio de números incorrecto en la descripción de la partida","Initial x-coordinate was out of range":"La coordenada x inicial estaba fuera de rango","Initial y-coordinate was out of range":"La coordenada y inicial estaba fuera de rango","Internal error: solution is badly formatted":"Error interno: la solución tiene un formato incorrecto","Invalid character in block structure specification":"Carácter no válido en la especificación de la estructura de bloques","Invalid character in game description":"Carácter no válido en la descripción de la partida","Invalid character in grid specification":"Carácter no válido en la especificación de la cuadrícula","Invalid character in number list":"Carácter no válido en la lista de números","Invalid characters in game description":"Caracteres no válidos en la descripción de la partida","Invalid format grid description string.":"Cadena de descripción de la cuadrícula con formato no válido.","Invalid parameters: {0}":"Parámetros no válidos: {0}","Invalid syntax in game description":"Sintaxis no válida en la descripción de la partida","Jigsaw puzzles with more than {0} symbols take too long to generate":"Los rompecabezas Jigsaw de más de {0} símbolos tardan demasiado en generarse","Killer puzzle dimensions must be smaller than 10":"Las dimensiones de un rompecabezas killer deben ser menores que 10","Malformed pending game description":"Descripción de partida pendiente mal formada","Matrix description is the wrong length or not hexadecimal":"La descripción de la matriz no tiene la longitud correcta o no es hexadecimal","Maximum face number must be a whole number":"El número máximo en las fichas debe ser un número entero","Maximum face number must be at least one":"El número máximo en las fichas debe ser al menos uno","Maximum face number must be at most {0}":"El número máximo en las fichas debe ser como máximo {0}","Maximum of 9 colours":"Máximo de 9 colores","Medium puzzles need more than one bridge per direction, or loops disallowed":"Los rompecabezas Medio necesitan más de un puente por dirección o que los bucles estén prohibidos","Mines solver opened a mine: inconsistent knowledge":"El solucionador de Minas abrió una mina: conocimiento incoherente","Minimum number of balls may not be greater than maximum":"El número mínimo de bolas no puede ser mayor que el máximo","Missing grid description string.":"Falta la cadena de descripción de la cuadrícula.","Missing separator":"Falta un separador","Monster numbers do not match grid spaces":"El número de monstruos no coincide con los espacios de la cuadrícula","More than one starting square specified":"Se indicó más de una casilla de inicio","Multiple solutions exist for this puzzle":"Este rompecabezas tiene varias soluciones","Must have at least five regions":"Debe haber al menos cinco regiones","Must have at least one guess":"Debe haber al menos un intento","Must have between {0} and {1} colours":"Debe haber entre {0} y {1} colores","No game set up to solve":"No hay ninguna partida preparada para resolver","No gems specified":"No se indicó ninguna gema","No solution exists for this position":"No existe solución para esta posición","No solution exists for this puzzle":"No existe solución para este rompecabezas","No solution found":"No se encontró ninguna solución","No starting square specified":"No se indicó ninguna casilla de inicio","Not enough data in block structure specification":"Datos insuficientes en la especificación de la estructura de bloques","Not enough data in grid description":"Datos insuficientes en la descripción de la cuadrícula","Not enough data to fill grid":"Datos insuficientes para rellenar la cuadrícula","Not enough grid space to place all blue faces":"No hay espacio suficiente en la cuadrícula para colocar todas las caras azules","Not enough jigsaw blocks":"Faltan bloques jigsaw","Not enough killer cages":"Faltan jaulas","Not enough numbers given after grid specification":"No hay suficientes números tras la especificación de la cuadrícula","Not enough space to place the solid on an empty cell":"No hay espacio suficiente para colocar el sólido en una casilla vacía","Number of colours must be at least three":"El número de colores debe ser al menos tres","Number of colours must be at least two":"El número de colores debe ser al menos dos","Number of points must be a whole number":"El número de puntos debe ser un número entero","Number of points must be at least {0}":"El número de puntos debe ser al menos {0}","Number of points must be at most {0}":"El número de puntos debe ser como máximo {0}","Number of shuffling moves cannot be negative":"El número de movimientos de mezcla no puede ser negativo","Number of shuffling moves must be a whole number":"El número de movimientos de mezcla debe ser un número entero","Number of shuffling moves must be at most 10000":"El número de movimientos de mezcla debe ser como máximo 10000","Number of shuffling moves must be at most {0}":"El número de movimientos de mezcla debe ser como máximo {0}","Number out of range in game description":"Número fuera de rango en la descripción de la partida","Number too large":"Número demasiado grande","Out-of-range number in game description":"Número fuera de rango en la descripción de la partida","Out-of-range number in grid description":"Número fuera de rango en la descripción de la cuadrícula","Parameters must be whole numbers":"Los parámetros deben ser números enteros","Patch coordinates do not identify a usable grid fragment":"Las coordenadas del fragmento no identifican un trozo de cuadrícula utilizable","Patch offset out of bounds.":"Desplazamiento del fragmento fuera de rango.","Percentage of black squares must be between 5% and 100%":"El porcentaje de casillas negras debe estar entre el 5 % y el 100 %","Percentage of islands must be from 1% to 30%":"El porcentaje de islas debe estar entre el 1 % y el 30 %","Puzzle is inconsistent":"El rompecabezas es incoherente","Puzzle is too large":"El rompecabezas es demasiado grande","Puzzle is too long for unique-rows mode":"El rompecabezas es demasiado ancho para el modo de filas únicas","Puzzle is too tall for unique-rows mode":"El rompecabezas es demasiado alto para el modo de filas únicas","Puzzle is unsolvable":"El rompecabezas no tiene solución","Puzzle must have one entrance and one exit":"El rompecabezas debe tener una entrada y una salida","Puzzles with more than {0} symbols take too long to generate":"Los rompecabezas de más de {0} símbolos tardan demasiado en generarse","Random seed must not be empty":"La semilla aleatoria no puede estar vacía","Rotating block size must be at least two":"El tamaño del bloque giratorio debe ser al menos dos","Row counts inconsistent":"Los recuentos de filas no coinciden","Rows of blocks must be at least 1":"El número de filas de bloques debe ser al menos 1","Scoring system not recognised":"Sistema de puntuación no reconocido","Size and difficulty must be whole numbers":"El tamaño y la dificultad deben ser números enteros","Size must be at least 5 for Adjacent puzzles of this difficulty":"El tamaño debe ser al menos 5 para rompecabezas Adyacente de esta dificultad","Size must be between {0} and {1}":"El tamaño debe estar entre {0} y {1}","Solution not known for this puzzle":"No se conoce la solución de este rompecabezas","Solve operation failed":"La operación Resolver ha fallado","Solve operation produced an invalid move":"La operación Resolver ha producido un movimiento no válido","Solver could not finish this grid":"El solucionador no pudo terminar esta cuadrícula","Solving algorithm cannot complete this puzzle":"El algoritmo de resolución no puede completar este rompecabezas","Starting cell is outside the grid":"La casilla de inicio está fuera de la cuadrícula","Subtraction and division blocks must have area 2":"Los bloques de resta y división deben tener área 2","That grid has too many faces to generate":"Esa cuadrícula tiene demasiadas caras para generarse","The Cross board is only available at {0}×{1}":"El tablero en cruz solo está disponible en {0}×{1}","The Octagon board is only available at {0}×{1}":"El tablero octogonal solo está disponible en {0}×{1}","The ball has hit a mine; undo that move first":"La bola ha chocado con una mina; deshaz primero ese movimiento","The grid can have at most {0} squares":"La cuadrícula puede tener como máximo {0} casillas","The grid may have at most {0} squares":"La cuadrícula puede tener como máximo {0} casillas","The initial square contains a mine":"La casilla inicial contiene una mina","The solid cannot start on a blue cell":"El sólido no puede empezar en una casilla azul","The solution has already been revealed":"La solución ya se ha revelado","There must be at least one ball":"Debe haber al menos una bola","There must be at least one mine":"Debe haber al menos una mina","This arrangement cannot be solved":"Esta disposición no se puede resolver","This game does not support the Solve operation":"Este juego no admite la operación Resolver","This puzzle has no solution":"Este rompecabezas no tiene solución","This puzzle instance contains a contradiction":"Este rompecabezas contiene una contradicción","This puzzle is not self-consistent":"Este rompecabezas no es coherente consigo mismo","Too few clues for block structure":"Muy pocas pistas para la estructura de bloques","Too few clues for grid size":"Muy pocas pistas para el tamaño de la cuadrícula","Too little data in clue list":"Faltan datos en la lista de pistas","Too little data in edge list":"Faltan datos en la lista de aristas","Too many balls to fit in the grid":"Demasiadas bolas para caber en la cuadrícula","Too many clues for block structure":"Demasiadas pistas para la estructura de bloques","Too many clues for grid size":"Demasiadas pistas para el tamaño de la cuadrícula","Too many colours (at most {0})":"Demasiados colores (máximo {0})","Too many colours makes given grid size impossible":"Con tantos colores, el tamaño de cuadrícula indicado es imposible","Too many guesses (at most {0})":"Demasiados intentos (máximo {0})","Too many jigsaw blocks":"Demasiados bloques jigsaw","Too many killer cages":"Demasiadas jaulas","Too many mines for grid size":"Demasiadas minas para el tamaño de la cuadrícula","Too many pegs per guess (at most {0})":"Demasiadas clavijas por intento (máximo {0})","Too many regions to fit in grid":"Demasiadas regiones para caber en la cuadrícula","Too much data in block structure specification":"Demasiados datos en la especificación de la estructura de bloques","Too much data in clue list":"Demasiados datos en la lista de pistas","Too much data in edge list":"Demasiados datos en la lista de aristas","Too much data to fill grid":"Demasiados datos para rellenar la cuadrícula","Too much data to fit in grid":"Demasiados datos para caber en la cuadrícula","Trivial solutions are uninteresting":"Las soluciones triviales no tienen interés","Unable to build a grid for these parameters":"No se puede construir una cuadrícula con estos parámetros","Unable to build this grid":"No se puede construir esta cuadrícula","Unable to find a solution for this puzzle":"No se puede encontrar una solución para este rompecabezas","Unable to find a solution from this position":"No se puede encontrar una solución desde esta posición","Unable to find a solution to this puzzle":"No se puede encontrar una solución a este rompecabezas","Unable to find a unique solution for this puzzle":"No se puede encontrar una solución única para este rompecabezas","Unable to generate a puzzle of this size":"No se puede generar un rompecabezas de este tamaño","Unable to generate a puzzle with these parameters":"No se puede generar un rompecabezas con estos parámetros","Unable to solve this puzzle":"No se puede resolver este rompecabezas","Unable to support more than {0} distinct symbols":"No se admiten más de {0} símbolos distintos","Unable to work out any more of this puzzle":"No se puede avanzar más en este rompecabezas","Unexpected additional character at end of game description":"Carácter adicional inesperado al final de la descripción de la partida","Unexpected additional data at end of game description":"Datos adicionales inesperados al final de la descripción de la partida","Unexpected character '{0}' in description":"Carácter “{0}” inesperado en la descripción","Unexpected character in clue list":"Carácter inesperado en la lista de pistas","Unexpected character in edge list":"Carácter inesperado en la lista de aristas","Unexpected data at end of game description":"Datos inesperados al final de la descripción de la partida","Unknown board type":"Tipo de tablero desconocido","Unknown character in description":"Carácter desconocido en la descripción","Unknown difficulty":"Dificultad desconocida","Unknown difficulty level":"Nivel de dificultad desconocido","Unknown difficulty rating":"Nivel de dificultad desconocido","Unknown shape type":"Tipo de forma desconocido","Unknown symmetry":"Simetría desconocida","Unknown symmetry type":"Tipo de simetría desconocido","Unrecognised character in game description":"Carácter no reconocido en la descripción de la partida","Unrecognised characters in game description":"Caracteres no reconocidos en la descripción de la partida","Unrecognised clue type":"Tipo de pista no reconocido","Unrecognised grid description.":"Descripción de cuadrícula no reconocida.","Unrecognised solid type":"Tipo de sólido no reconocido","Width and height cannot both be two":"El ancho y el alto no pueden ser ambos dos","Width and height for this grid type must both be at least {0}":"Para este tipo de cuadrícula, el ancho y el alto deben ser ambos al menos {0}","Width and height must be at least two":"El ancho y el alto deben ser al menos dos","Width and height must be at least {0}":"El ancho y el alto deben ser al menos {0}","Width and height must be at most twelve":"El ancho y el alto deben ser como máximo doce","Width and height must be at most {0}":"El ancho y el alto deben ser como máximo {0}","Width and height must be at most {0} to generate a puzzle":"El ancho y el alto deben ser como máximo {0} para generar un rompecabezas","Width and height must be positive":"El ancho y el alto deben ser positivos","Width and height must be whole numbers":"El ancho y el alto deben ser números enteros","Width and height must both be at least 3":"El ancho y el alto deben ser ambos al menos 3","Width and height must both be at least four":"El ancho y el alto deben ser ambos al menos cuatro","Width and height must both be at least one":"El ancho y el alto deben ser ambos al menos uno","Width and height must both be at least two":"El ancho y el alto deben ser ambos al menos dos","Width and height must both be even":"El ancho y el alto deben ser ambos pares","Width and height must both be greater than three":"El ancho y el alto deben ser ambos mayores que tres","Width and height must both be greater than two":"El ancho y el alto deben ser ambos mayores que dos","Width and height must both be greater than zero":"El ancho y el alto deben ser ambos mayores que cero","Width and height must both be positive":"El ancho y el alto deben ser ambos positivos","With three colours, a solvable grid may have at most {0} squares":"Con tres colores, una cuadrícula resoluble puede tener como máximo {0} casillas","Width must be at least 3":"El ancho debe ser al menos 3","Width must be at least five":"El ancho debe ser al menos cinco","Width must be at least one":"El ancho debe ser al menos uno","Width must be at least the rotating block size":"El ancho debe ser al menos el tamaño del bloque giratorio","Width must be at least two":"El ancho debe ser al menos dos","Width, height and ball counts must be whole numbers":"El ancho, el alto y el número de bolas deben ser números enteros","Width, height and difficulty must be whole numbers":"El ancho, el alto y la dificultad deben ser números enteros","Width, height and number of colours must be whole numbers":"El ancho, el alto y el número de colores deben ser números enteros","Width, height, block size and move count must be whole numbers":"El ancho, el alto, el tamaño de bloque y el número de movimientos deben ser números enteros","X puzzles need at least four symbols":"Los rompecabezas X necesitan al menos cuatro símbolos","X-diagonal jigsaw puzzles with more than {0} symbols take too long to generate":"Los rompecabezas Jigsaw con diagonal X de más de {0} símbolos tardan demasiado en generarse","You have hit a mine; undo that move first":"Has pisado una mina; deshaz primero ese movimiento","a cell may be a number position for only one rectangle":"una casilla solo puede llevar el número de un único rectángulo","at least one column contains more numbers than will fit":"al menos una columna tiene más números de los que caben","at least one row contains more numbers than will fit":"al menos una fila tiene más números de los que caben","cells are not adjacent":"las casillas no son adyacentes","domino layout: no path between singletons":"disposición de dominós: no hay camino entre las casillas aisladas","domino layout: stranded square cannot be paired":"disposición de dominós: una casilla aislada no se puede emparejar","dot touches the outside twice":"el punto toca el exterior dos veces","dot with fewer than two edges":"punto con menos de dos aristas","edge does not follow its face":"la arista no sigue a su cara","edge shared by three faces":"arista compartida por tres caras","expected CxR or Nj":"se esperaba CxR o Nj","expected WxH":"se esperaba WxH","expected WxHnN":"se esperaba WxHnN","expected a grid size":"se esperaba un tamaño de cuadrícula","expected a maximum number":"se esperaba un número máximo","expected a number of points":"se esperaba un número de puntos","expected a solid letter followed by WxH":"se esperaba una letra de sólido seguida de WxH","expected something like c6p4g10Bm":"se esperaba algo como c6p4g10Bm","expected w<W>h<H>m<MIN>M<MAX>":"se esperaba w<W>h<H>m<MIN>M<MAX>","generateKeen: solver disagrees with the square":"generateKeen: el solucionador no coincide con el cuadrado","grid inconsistency while walking round a face":"incoherencia de la cuadrícula al recorrer el contorno de una cara","inconsistent clues while assembling":"pistas incoherentes durante el ensamblaje","inconsistent distance field":"campo de distancias incoherente","inconsistent face classes":"clases de caras incoherentes","latin rectangle could not be extended":"no se pudo ampliar el rectángulo latino","latinGenerate: no extension found":"latinGenerate: no se encontró ninguna ampliación","latinSquare: rectangle could not be extended":"latinSquare: no se pudo ampliar el rectángulo","line too long for solver":"línea demasiado larga para el solucionador","no clue left to place":"no quedan pistas por colocar","no such laser: {0}":"no existe ese láser: {0}","rolled solid does not fit its destination":"el sólido rodado no encaja en su destino","shown":"revelada","too few row/column specifications":"faltan especificaciones de filas/columnas","too many row/column specifications":"demasiadas especificaciones de filas/columnas","unrecognised character in game description":"carácter no reconocido en la descripción de la partida","yes!":"¡sí!","9×9 Extreme puzzles take too long to generate; try 8×8 or Expert":"Los rompecabezas 9×9 Extremo tardan demasiado en generarse; prueba 8×8 o Experto"}`),Z={moves:`Movimientos: {n}`,movesCompleted:{one:`Terminado en {n} movimiento`,other:`Terminado en {n} movimientos`},movesSinceSolve:`Movimientos desde la resolución automática: {n}`,completedMoves:`¡Terminado! Movimientos: {n}`,solvedByComputer:`Resuelto por el programa`,completed:`¡Terminado!`,completedPrefix:`¡Terminado! `,autoSolved:`Resuelto automáticamente.`,autoSolvedPrefix:`Resuelto automáticamente. `,autoSolverUsedPrefix:`Se usó la resolución automática. `,failedPrefix:`Sin movimientos. `,dead:`Has dado con una mina.`,target:` (objetivo {n})`},Q=JSON.parse(`{"blackbox":{"name":"Caja negra","description":"Encuentra las bolas ocultas disparando láseres a la caja y observando por dónde salen.","preset":{"5x5_3_balls":"5×5, 3 bolas","8x8_5_balls":"8×8, 5 bolas","8x8_3_6_balls":"8×8, 3-6 bolas","10x10_5_balls":"10×10, 5 bolas","10x10_4_10_balls":"10×10, 4-10 bolas"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"no_of_balls":{"name":"Número de bolas"}},"achievement":{"sparing_shots":{"name":"Disparos contados","description":"Encuentra todas las bolas disparando láseres desde no más de la mitad de los puertos."},"pinpoint":{"name":"En el blanco","description":"Encuentra todas las bolas en una caja de 8×8 o mayor, disparando como mucho tres láseres por bola."},"shot_in_the_dark":{"name":"Palos de ciego","description":"Comprueba tus bolas sin haber disparado ni un solo láser, y equivócate."}},"status":{"correct":"¡CORRECTO!","wrong":{"one":"Errores: {wrong}; {n} bola sin encontrar.","other":"Errores: {wrong}; {n} bolas sin encontrar."},"marked":"Bolas marcadas: {n} / {range}  ·  Láseres disparados: {fired}","tooMany":"  ·  Marcas de más: {n}.","check":"  ·  Haz clic en el botón de la esquina para comprobar."}},"bridges":{"name":"Puentes","alsoKnownAs":"Hashiwokakero, Hashi","description":"Une las islas con puentes para que se cumpla cada número y nada se cruce.","preset":{"7x7_easy":"7×7 Fácil","7x7_medium":"7×7 Medio","7x7_hard":"7×7 Difícil","10x10_easy":"10×10 Fácil","10x10_medium":"10×10 Medio","10x10_hard":"10×10 Difícil","15x15_easy":"15×15 Fácil","15x15_medium":"15×15 Medio","15x15_hard":"15×15 Difícil","10x10_medium_no_loops":"10×10 Medio, sin bucles"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"difficulty":{"name":"Dificultad","choice":{"easy":"Fácil","medium":"Medio","hard":"Difícil"}},"allow_loops":{"name":"Permitir bucles"},"max_bridges_per_direction":{"name":"Máx. de puentes por dirección","choice":{"1":"1","2":"2","3":"3","4":"4"}},"of_island_squares":{"name":"% de casillas con isla","choice":{"5":"5%","10":"10%","15":"15%","20":"20%","25":"25%","30":"30%"}},"expansion_factor":{"name":"Factor de expansión (%)","choice":{"0":"0%","10":"10%","20":"20%","30":"30%","40":"40%","50":"50%","60":"60%","70":"70%","80":"80%","90":"90%","100":"100%"}}},"action":{"e":{"label":"Borrar","title":"Arrastra desde una isla para quitar sus puentes en esa dirección (E)"},"g":{"label":"Guías","title":"Mostrar u ocultar una línea tenue donde podría ir un puente (G)"}},"achievement":{"no_markers":{"name":"Aguas despejadas","description":"Resuelve un tablero de 10×10 o mayor sin anotar ni una marca de “aquí no hay puente”."},"sure_footing":{"name":"Paso firme","description":"Resuelve un tablero Difícil de 10×10 o mayor sin quitar ningún puente ni usar Deshacer."}}},"cube":{"name":"Cubo","description":"Haz rodar un sólido por la cuadrícula para recoger todas las casillas azules con sus caras.","preset":{"cube":"Cubo","tetrahedron":"Tetraedro","octahedron":"Octaedro","icosahedron":"Icosaedro"},"config":{"type_of_solid":{"name":"Tipo de sólido","choice":{"tetrahedron":"Tetraedro","cube":"Cubo","octahedron":"Octaedro","icosahedron":"Icosaedro"}},"width_top":{"name":"Ancho / arriba"},"height_bottom":{"name":"Alto / abajo"}},"achievement":{"short_haul":{"name":"Trayecto corto","description":"Completa el Cubo con todas las caras azules en veinte movimientos como mucho."},"octahedron_ace":{"name":"Ocho caras al vuelo","description":"Completa el Octaedro con todas las caras azules en treinta movimientos como mucho."},"scenic_route":{"name":"La gran vuelta","description":"Haz rodar el sólido al menos doscientas veces antes de que todas sus caras sean azules."}}},"dominosa":{"name":"Dominosa","description":"Encuentra dónde está cada ficha del dominó barajado en una cuadrícula de números.","preset":{"up_to_double_3":"Hasta el doble 3","up_to_double_4":"Hasta el doble 4","up_to_double_5":"Hasta el doble 5","up_to_double_6":"Hasta el doble 6","up_to_double_7":"Hasta el doble 7","up_to_double_8":"Hasta el doble 8","up_to_double_9":"Hasta el doble 9"},"config":{"maximum_number_on_dominoes":{"name":"Número máximo en las fichas"},"difficulty":{"name":"Dificultad","choice":{"very_easy":"Muy fácil","easy":"Fácil","hard":"Difícil","extreme":"Extremo","ambiguous":"Ambiguo"}}},"achievement":{"no_lines":{"name":"Sin lápiz","description":"Resuelve un juego hasta el doble 6 o mayor sin trazar ni una sola línea a lápiz."},"one_click_each":{"name":"Una pulsación por ficha","description":"Resuelve un juego hasta el doble 6 o mayor con una pulsación por ficha y sin Deshacer."},"doubles_first":{"name":"Primero los dobles","description":"Coloca todos los dobles del juego antes que cualquier otra ficha."}}},"fifteen":{"name":"Quince","alsoKnownAs":"Juego del 15, rompecabezas deslizante","description":"Desliza las piezas para ponerlas en orden.","preset":{"3x3":"3×3","4x4":"4×4","5x5":"5×5"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"}},"achievement":{"short_shuffle":{"name":"Barajado corto","description":"Ordena el 4×4 en 100 movimientos o menos."},"five_flyer":{"name":"Rayo del 5×5","description":"Ordena el 5×5 en menos de tres minutos."},"scenic_route":{"name":"El camino largo","description":"Tarda más de 300 movimientos en ordenar el 3×3."}}},"filling":{"name":"Relleno","alsoKnownAs":"Fillomino","description":"Rellena la cuadrícula para que cada grupo de cifras iguales ocupe exactamente ese número de casillas.","preset":{"9x7":"9×7","13x9":"13×9","17x13":"17×13"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"}},"achievement":{"in_ink":{"name":"Escrito en tinta","description":"Resuelve un Relleno sin cambiar ni borrar ninguna cifra, y sin Deshacer."},"one_stroke":{"name":"Cada uno de una vez","description":"Resuelve un Relleno de 13×9 o mayor escribiendo cada grupo de cifras en un solo movimiento."}},"action":{"f":{"label":"Rellenar","title":"Arrastra desde una cifra para escribirla en cada casilla por la que pases (F)"}}},"flip":{"name":"Voltea","alsoKnownAs":"Lights Out","description":"Enciende todas las casillas; cada pulsación también invierte las casillas de alrededor.","preset":{"3x3_crosses":"3×3 Cruces","4x4_crosses":"4×4 Cruces","5x5_crosses":"5×5 Cruces","3x3_random":"3×3 Aleatorias","4x4_random":"4×4 Aleatorias","5x5_random":"5×5 Aleatorias"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"shape_type":{"name":"Tipo de forma","choice":{"crosses":"Cruces","random":"Aleatorias"}}},"achievement":{"press_once":{"name":"Una sola pulsación","description":"Enciende un tablero de 4×4 o mayor sin pulsar dos veces ninguna casilla."},"fewest_presses":{"name":"Mínimo esfuerzo","description":"Enciende un tablero de 5×5 con el menor número de pulsaciones posible."}}},"flood":{"name":"Inundación","alsoKnownAs":"Flood It","description":"Inunda la cuadrícula desde la esquina hasta que sea de un solo color, sin pasarte del límite de movimientos.","preset":{"12x12_easy":"12×12 Fácil","12x12_medium":"12×12 Medio","12x12_hard":"12×12 Difícil","16x16_medium":"16×16 Medio","16x16_hard":"16×16 Difícil","12x12_3_colours":"12×12, 3 colores","12x12_4_colours":"12×12, 4 colores"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"colours":{"name":"Colores"},"extra_moves_permitted":{"name":"Movimientos extra permitidos"}},"achievement":{"spare_moves":{"name":"Movimientos de sobra","description":"Inunda la cuadrícula con al menos tres movimientos de sobra."},"beat_the_solver":{"name":"Más listo que la máquina","description":"Inunda la cuadrícula en menos movimientos que la solución del ordenador."},"one_colour_short":{"name":"A un color","description":"Quédate sin movimientos con solo dos colores en la cuadrícula."}},"status":{"moves":"{n} / {limit} movimientos"}},"galaxies":{"name":"Galaxias","alsoKnownAs":"Spiral Galaxies, Tentai Show","description":"Divide la cuadrícula en regiones, cada una simétrica respecto al único punto que contiene.","preset":{"7x7_medium":"7×7 Medio","7x7_extreme":"7×7 Extremo","10x10_medium":"10×10 Medio","15x15_medium":"15×15 Medio"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"difficulty":{"name":"Dificultad","choice":{"medium":"Medio","extreme":"Extremo"}}},"achievement":{"no_arrows":{"name":"Sin flechas","description":"Resuelve unas Galaxias de 10×10 o mayores sin arrastrar ni una sola flecha."},"steady_hand":{"name":"Estrellas fijas","description":"Resuelve unas Galaxias de 10×10 o mayores sin quitar ninguna pared ni usar Deshacer."}}},"guess":{"name":"Adivina","alsoKnownAs":"Mastermind","description":"Descubre la fila oculta de clavijas de colores a partir de las marcas de tus intentos.","preset":{"standard":"Estándar","super":"Súper"},"config":{"colours":{"name":"Colores"},"pegs_per_guess":{"name":"Clavijas por intento"},"guesses":{"name":"Intentos"},"allow_blanks":{"name":"Permitir huecos vacíos"},"allow_duplicates":{"name":"Permitir repetidos"}},"action":{"k":{"label":"Retener","title":"Haz clic en una clavija de tu fila para pasarla al siguiente intento (K)"},"l":{"label":"Letras","title":"Etiquetar las clavijas con letras (L)"}},"achievement":{"five_guesses":{"name":"Descifracódigos","description":"Encuentra la fila oculta en cinco intentos o menos."},"super_sleuth":{"name":"Superdetective","description":"Encuentra la fila oculta Súper de cinco clavijas en seis intentos o menos."},"so_near":{"name":"Tan cerca","description":"Quédate sin intentos con todas las clavijas en su sitio salvo una."}},"status":{"revealed":"Solución revelada","solved":{"one":"Resuelto en {n} intento","other":"Resuelto en {n} intentos"},"outOfGuesses":"Sin intentos: se revela la solución","guessN":"Intento {n} de {total}"}},"inertia":{"name":"Inercia","description":"Desliza una bola por la cuadrícula para recoger todas las gemas sin tocar ninguna mina.","preset":{"10x8":"10×8","15x12":"15×12","20x16":"20×16"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"}},"achievement":{"hat_trick":{"name":"Triplete","description":"Recoge tres gemas o más con una sola tirada de la bola."},"shortcut":{"name":"Atajo","description":"Recoge todas las gemas de un tablero de 15×12 o mayor en menos tiradas que Resolver."},"last_gem_mine":{"name":"Victoria pírrica","description":"Cae en una mina con la misma tirada que recoge la última gema."}},"status":{"gems":"Gemas: {n}","deaths":" · Muertes: {n}"}},"keen":{"name":"Keen","alsoKnownAs":"KenKen, Calcudoku","description":"Rellena el cuadrado latino para que cada jaula cumpla su pista aritmética.","preset":{"4x4_easy":"4×4 Fácil","5x5_easy":"5×5 Fácil","5x5_easy_x_only":"5×5 Fácil, solo ×","6x6_easy":"6×6 Fácil","6x6_medium":"6×6 Medio","6x6_medium_x_only":"6×6 Medio, solo ×","6x6_hard":"6×6 Difícil","6x6_expert":"6×6 Experto","6x6_extreme":"6×6 Extremo","9x9_medium":"9×9 Medio"},"config":{"grid_size":{"name":"Tamaño de la cuadrícula"},"difficulty":{"name":"Dificultad","choice":{"easy":"Fácil","medium":"Medio","hard":"Difícil","expert":"Experto","extreme":"Extremo"}},"multiplication_only":{"name":"Solo multiplicación"}},"action":{"m":{"label":"Marcas","title":"Anotar a lápiz todas las posibilidades en cada casilla vacía (M)"},"l":{"label":"Resaltar","title":"Destaca cada casilla que tenga la última cifra que tocaste (L)"}},"achievement":{"no_pencil":{"name":"Cálculo mental","description":"Resuelve un Keen de 6×6 o mayor sin escribir ni una anotación a lápiz."},"products_only":{"name":"Producto puro","description":"Resuelve un Keen 6×6 Medio solo con multiplicaciones."}}},"lightup":{"name":"Ilumina","alsoKnownAs":"Akari, Light Up","description":"Coloca bombillas para que todas las casillas estén iluminadas y ninguna bombilla alumbre a otra.","preset":{"7x7_easy":"7×7 Fácil","7x7_medium":"7×7 Medio","7x7_hard":"7×7 Difícil","10x10_easy":"10×10 Fácil","10x10_medium":"10×10 Medio","10x10_hard":"10×10 Difícil","14x14_easy":"14×14 Fácil","14x14_medium":"14×14 Medio","14x14_hard":"14×14 Difícil"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"of_black_squares":{"name":"% de casillas negras"},"symmetry":{"name":"Simetría","choice":{"none":"Ninguna","2_way_mirror":"Espejo doble","2_way_rotational":"Rotación doble","4_way_mirror":"Espejo cuádruple","4_way_rotational":"Rotación cuádruple"}},"difficulty":{"name":"Dificultad","choice":{"easy":"Fácil","medium":"Medio","hard":"Difícil"}}},"achievement":{"no_crosses":{"name":"Solo luces","description":"Resuelve un Ilumina de 10×10 o mayor sin anotar ni una sola cruz."},"no_takebacks":{"name":"Idea brillante","description":"Resuelve un Ilumina Difícil sin quitar nunca una bombilla."}},"action":{"x":{"label":"Cruz","title":"Los clics ponen cruces en lugar de bombillas (X)"}}},"loopy":{"name":"Bucles","alsoKnownAs":"Slitherlink","description":"Dibuja un único bucle cerrado para que cada número cuente las líneas que lo rodean.","preset":{"7x7_squares_easy":"7×7 Cuadrados Fácil","10x10_squares_easy":"10×10 Cuadrados Fácil","7x7_squares_medium":"7×7 Cuadrados Medio","10x10_squares_medium":"10×10 Cuadrados Medio","7x7_squares_expert":"7×7 Cuadrados Experto","10x10_squares_expert":"10×10 Cuadrados Experto","10x10_triangular_expert":"10×10 Triangular Experto","12x10_honeycomb_expert":"12×10 Panal Experto","7x7_snub_square_expert":"7×7 Cuadrado romo Experto","9x9_cairo_expert":"9×9 Cairo Experto","5x4_great_hexagonal_expert":"5×4 Gran hexagonal Experto","7x7_octagonal_expert":"7×7 Octogonal Experto","5x5_kites_expert":"5×5 Cometas Experto","5x5_floret_expert":"5×5 Florón Experto","5x4_dodecagonal_expert":"5×4 Dodecagonal Experto","5x4_great_dodecagonal_expert":"5×4 Gran dodecagonal Experto","10x10_penrose_kite_dart_expert":"10×10 Penrose (cometa/dardo) Experto","10x10_penrose_rhombs_expert":"10×10 Penrose (rombos) Experto"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"grid_type":{"name":"Tipo de cuadrícula","choice":{"squares":"Cuadrados","triangular":"Triangular","honeycomb":"Panal","snub_square":"Cuadrado romo","cairo":"Cairo","great_hexagonal":"Gran hexagonal","octagonal":"Octogonal","kites":"Cometas","floret":"Florón","dodecagonal":"Dodecagonal","great_dodecagonal":"Gran dodecagonal","penrose_kite_dart":"Penrose (cometa/dardo)","penrose_rhombs":"Penrose (rombos)"}},"difficulty":{"name":"Dificultad","choice":{"easy":"Fácil","medium":"Medio","hard":"Difícil","expert":"Experto"}}},"achievement":{"off_grid":{"name":"Fuera de la cuadrícula","description":"Resuelve unos Bucles en cualquier teselado que no sea de cuadrados."},"no_crosses":{"name":"Solo el bucle","description":"Resuelve unos Bucles de 10×10 sin tachar ni un solo borde."},"aperiodic":{"name":"Aperiódico","description":"Resuelve unos Bucles Penrose sin quitar nunca una línea que hayas dibujado."}},"action":{"x":{"label":"Cruz","title":"Los clics tachan bordes en lugar de dibujar líneas (X)"}}},"magnets":{"name":"Imanes","description":"Coloca imanes y fichas neutras en los dominós para que cuadren los recuentos de polos.","preset":{"6x5_easy":"6×5 Fácil","6x5_hard":"6×5 Difícil","6x5_hard_strip_clues":"6×5 Difícil, sin pistas sobrantes","8x7_easy":"8×7 Fácil","8x7_hard":"8×7 Difícil","8x7_hard_strip_clues":"8×7 Difícil, sin pistas sobrantes","10x9_hard":"10×9 Difícil","10x9_hard_strip_clues":"10×9 Difícil, sin pistas sobrantes"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"difficulty":{"name":"Dificultad","choice":{"easy":"Fácil","hard":"Difícil"}},"strip_clues":{"name":"Quitar pistas sobrantes"}},"achievement":{"no_flips":{"name":"Del derecho","description":"Resuelve unos Imanes de 8×7 o mayores sin darle nunca la vuelta a un imán."},"stripped":{"name":"Cables pelados","description":"Resuelve unos Imanes 10×9 Difícil sin pistas sobrantes en menos de diez minutos."}},"action":{"b":{"label":"Neutro","title":"Los clics marcan dominós como neutros en lugar de colocar imanes (B)"}}},"map":{"name":"Mapa","description":"Colorea el mapa con cuatro colores sin que coincidan dos regiones vecinas.","preset":{"20x15_easy_30_regions":"20×15 Fácil, 30 regiones","20x15_medium_30_regions":"20×15 Medio, 30 regiones","20x15_hard_30_regions":"20×15 Difícil, 30 regiones","20x15_extreme_30_regions":"20×15 Extremo, 30 regiones","30x25_medium_75_regions":"30×25 Medio, 75 regiones","30x25_hard_75_regions":"30×25 Difícil, 75 regiones"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"regions":{"name":"Regiones"},"difficulty":{"name":"Dificultad","choice":{"easy":"Fácil","medium":"Medio","hard":"Difícil","extreme":"Extremo"}}},"achievement":{"no_dots":{"name":"Atlas a mano alzada","description":"Resuelve un Mapa Difícil o más difícil sin un solo punto a lápiz."},"steady_brush":{"name":"Pincel firme","description":"Resuelve un Mapa Extremo sin cambiar nunca el color de una región."}},"action":{"l":{"label":"Números","title":"Muestra un número en cada región (L)"}}},"mines":{"name":"Minas","alsoKnownAs":"Buscaminas","description":"Descubre todas las casillas que no son minas; nunca tendrás que adivinar.","preset":{"9x9_beginner_10_mines":"9×9 Principiante, 10 minas","9x9_35_mines":"9×9, 35 minas","16x16_intermediate_40_mines":"16×16 Intermedio, 40 minas","16x16_99_mines":"16×16, 99 minas","30x16_expert_99_mines":"30×16 Experto, 99 minas","30x16_170_mines":"30×16, 170 minas"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"mines":{"name":"Minas"},"ensure_solubility":{"name":"Garantizar que sea resoluble"}},"achievement":{"no_flags":{"name":"Sin banderas","description":"Gana una partida de Minas sin poner ni una sola bandera."},"expert_sweep":{"name":"Artificiero","description":"Gana el tablero Experto de 30×16 en menos de cinco minutos."},"so_close":{"name":"Por los pelos","description":"Pisa una mina cuando no queden más de tres casillas seguras por abrir."}},"status":{"marked":"Marcadas: {n} / {total}","deaths":" · Muertes: {n}"}},"net":{"name":"Red","alsoKnownAs":"NetWalk","description":"Gira las piezas hasta que todas estén conectadas al centro.","preset":{"5x5":"5×5","7x7":"7×7","9x9":"9×9","11x11":"11×11","13x11":"13×11","5x5_wrapping":"5×5 envolvente","7x7_wrapping":"7×7 envolvente","9x9_wrapping":"9×9 envolvente","11x11_wrapping":"11×11 envolvente","13x11_wrapping":"13×11 envolvente"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"walls_wrap_around":{"name":"Bordes envolventes"},"barrier_probability":{"name":"Probabilidad de barrera"},"ensure_unique_solution":{"name":"Garantizar solución única"}},"action":{"k":{"label":"Bloquear","title":"Haz clic en las piezas para bloquearlas o desbloquearlas en lugar de girarlas (K)"},"j":{"label":"Mezclar","title":"Girar al azar cada pieza no bloqueada (J)"},"scroll_left":{"label":"←","title":"Desplazar la vista a la izquierda (Shift+←)"},"scroll_up":{"label":"↑","title":"Desplazar la vista hacia arriba (Shift+↑)"},"scroll_down":{"label":"↓","title":"Desplazar la vista hacia abajo (Shift+↓)"},"scroll_right":{"label":"→","title":"Desplazar la vista a la derecha (Shift+→)"}},"achievement":{"no_locks":{"name":"Nada bajo llave","description":"Resuelve una Red de 9×9 o mayor sin bloquear ni una sola pieza."},"not_a_turn_wasted":{"name":"Ni un giro de más","description":"Resuelve una Red de 9×9 o mayor sin girar ninguna pieza más de lo necesario."},"jumbled":{"name":"Todo revuelto","description":"Pulsa Mezclar y aun así resuelve el rompecabezas."}},"status":{"active":"Activas: {n}/{total}"}},"netslide":{"name":"Red deslizante","description":"Desliza filas y columnas de piezas de red hasta que todo quede conectado.","preset":{"3x3_easy":"3×3 Fácil","3x3_medium":"3×3 Medio","3x3_hard":"3×3 Difícil","4x4_easy":"4×4 Fácil","4x4_medium":"4×4 Medio","4x4_hard":"4×4 Difícil","5x5_easy":"5×5 Fácil","5x5_medium":"5×5 Medio","5x5_hard":"5×5 Difícil"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"walls_wrap_around":{"name":"Bordes envolventes"},"barrier_probability":{"name":"Probabilidad de barrera"},"number_of_shuffling_moves":{"name":"Número de movimientos de mezcla"}},"achievement":{"tidy_four":{"name":"Recableado limpio","description":"Resuelve una Red deslizante de 4×4 en 18 deslizamientos o menos."},"lean_five":{"name":"Liniero","description":"Resuelve una Red deslizante de 5×5 en 32 deslizamientos o menos."},"big_switch":{"name":"El gran cambio","description":"Enciende toda la red con un deslizamiento cuando estaba encendida menos de la mitad."}},"status":{"active":" · Activas: {n}/{total}"}},"pattern":{"name":"Patrón","alsoKnownAs":"Nonograma, Picross, Hanjie","description":"Rellena la cuadrícula a partir de las longitudes de los tramos de cada fila y columna.","preset":{"10x10":"10×10","15x15":"15×15","20x20":"20×20","25x25":"25×25","30x30":"30×30"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"}},"achievement":{"no_dots":{"name":"Ni un punto","description":"Resuelve un Patrón de 15×15 o mayor sin poner ni un solo punto."},"inked_in":{"name":"Entintado","description":"Resuelve un Patrón de 20×20 o mayor sin borrar nunca una casilla negra."}},"action":{"e":{"label":"Borrar","title":"Haz clic o arrastra para devolver casillas a desconocidas (E)"}}},"pearl":{"name":"Perlas","alsoKnownAs":"Masyu","description":"Dibuja un único bucle cerrado que pase recto por las perlas blancas y gire en las negras.","preset":{"6x6_easy":"6×6 Fácil","6x6_tricky":"6×6 Complicado","8x8_easy":"8×8 Fácil","8x8_tricky":"8×8 Complicado","10x10_easy":"10×10 Fácil","10x10_tricky":"10×10 Complicado","12x8_easy":"12×8 Fácil","12x8_tricky":"12×8 Complicado"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"difficulty":{"name":"Dificultad","choice":{"easy":"Fácil","tricky":"Complicado"}},"allow_unsoluble":{"name":"Permitir insolubles"}},"achievement":{"no_crosses":{"name":"Collar de perlas","description":"Resuelve unas Perlas de 10×10 sin poner ni una sola cruz."},"one_stroke":{"name":"De un trazo","description":"Traza todo el bucle de unas Perlas de 8×8 o mayores en un solo arrastre."}},"action":{"x":{"label":"Cruz","title":"Haz clic o arrastra para tachar bordes que el bucle no puede usar (X)"}}},"pegs":{"name":"Clavijas","alsoKnownAs":"Senku, solitario, comesolo","description":"Salta con las clavijas unas sobre otras hasta que solo quede una.","preset":{"cross":"Cruz","octagon":"Octógono","random_5x5":"Aleatorio 5×5","random_7x7":"Aleatorio 7×7","random_9x9":"Aleatorio 9×9"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"board_type":{"name":"Tipo de tablero","choice":{"cross":"Cruz","octagon":"Octógono","random":"Aleatorio"}}},"achievement":{"dead_centre":{"name":"En pleno centro","description":"Termina el tablero Cruz con la última clavija en el agujero central."},"hopscotch":{"name":"Rayuela","description":"Gana una partida de Clavijas con una clavija que salte cuatro veces seguidas."},"pegged_out":{"name":"Atascado","description":"Quédate bloqueado con diez clavijas o más aún en el tablero."}},"status":{"stuck":"No hay más movimientos — quedan {n} clavijas","playing":"Clavijas restantes: {n}  ·  Movimientos: {moves}"}},"range":{"name":"Alcance","alsoKnownAs":"Kurodoko, Kuromasu","description":"Pinta casillas de negro para que cada número vea exactamente esa cantidad de casillas blancas en su fila y su columna.","preset":{"9x6":"9×6","12x8":"12×8","13x9":"13×9","16x11":"16×11"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"}},"achievement":{"no_dots":{"name":"Contraste puro","description":"Resuelve un Alcance de 13×9 o mayor sin poner ni un solo punto."},"quick_sight":{"name":"Vista rápida","description":"Resuelve un Alcance de 16×11 en menos de cinco minutos."}},"action":{"e":{"label":"Borrar","title":"Haz clic o arrastra para quitar casillas negras y puntos (E)"}}},"rect":{"name":"Rectángulos","alsoKnownAs":"Shikaku","description":"Divide la cuadrícula en rectángulos, cada uno con un solo número igual a su área.","preset":{"7x7":"7×7","9x9":"9×9","11x11":"11×11","13x13":"13×13","15x15":"15×15","17x17":"17×17","19x19":"19×19"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"expansion_factor":{"name":"Factor de expansión"},"ensure_unique_solution":{"name":"Garantizar solución única"}},"achievement":{"clean_cuts":{"name":"Cortes limpios","description":"Resuelve unos Rectángulos de 11×11 o mayores sin hacer más movimientos que números tiene."},"quick_carver":{"name":"Tallador veloz","description":"Resuelve unos Rectángulos de 19×19 en menos de diez minutos."}},"status":{"drag":"{w}×{h} "},"action":{"e":{"label":"Borrar","title":"Arrastra sobre una zona para quitar las líneas de dentro, o haz clic en una línea para quitarla (E)"}}},"samegame":{"name":"Same Game","alsoKnownAs":"Clickomania","description":"Vacía el tablero eliminando grupos de casillas contiguas del mismo color.","preset":{"5x5_3_colours":"5×5, 3 colores","10x5_3_colours":"10×5, 3 colores","15x10_3_colours":"15×10, 3 colores","15x10_4_colours":"15×10, 4 colores","20x15_4_colours":"20×15, 4 colores"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"no_of_colours":{"name":"Número de colores"},"scoring_system":{"name":"Sistema de puntuación","choice":{"n_1_2":"(n-1)^2","n_2_2":"(n-2)^2"}},"ensure_solubility":{"name":"Garantizar que sea resoluble"}},"achievement":{"avalanche":{"name":"Alud","description":"Quita un grupo de 25 casillas o más de una vez y luego despeja el tablero."},"no_pairs":{"name":"Prohibidas las parejas","description":"Despeja un tablero de 15×10 o mayor sin quitar nunca una pareja."},"last_one":{"name":"La última casilla","description":"Quédate bloqueado con una sola casilla en el tablero."}},"status":{"score":"Puntos: {n}","complete":"¡Tablero despejado! {score}","stuck":"No quedan movimientos. {score}","selected":"{score} · Seleccionadas: {n} (+{points})"}},"signpost":{"name":"Señales","description":"Enlaza las casillas en un único camino numerado; cada paso sigue una flecha.","preset":{"4x4":"4×4","4x4_free_ends":"4×4, extremos libres","5x5":"5×5","5x5_free_ends":"5×5, extremos libres","6x6":"6×6","7x7":"7×7"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"start_and_end_in_corners":{"name":"Empezar y terminar en las esquinas"}},"achievement":{"unbroken":{"name":"Cadena intacta","description":"Resuelve unas Señales sin quitar ni sustituir nunca un enlace."},"in_order":{"name":"De corrido","description":"Resuelve unas Señales de 6×6 o mayores enlazando el camino en orden, del 1 a la estrella."},"star_first":{"name":"Pide un deseo","description":"Haz que tu primerísimo enlace llegue a la estrella y luego resuelve el rompecabezas."}},"action":{"b":{"label":"Romper","title":"Haz clic en una casilla para deshacer toda su cadena (B)"}}},"singles":{"name":"Únicos","alsoKnownAs":"Hitori","description":"Oscurece casillas para que ningún número se repita en una fila o columna, sin dividir la cuadrícula.","preset":{"5x5_easy":"5×5 Fácil","5x5_tricky":"5×5 Complicado","6x6_easy":"6×6 Fácil","6x6_tricky":"6×6 Complicado","8x8_easy":"8×8 Fácil","8x8_tricky":"8×8 Complicado","10x10_easy":"10×10 Fácil","10x10_tricky":"10×10 Complicado","12x12_easy":"12×12 Fácil","12x12_tricky":"12×12 Complicado"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"difficulty":{"name":"Dificultad","choice":{"easy":"Fácil","tricky":"Complicado"}}},"achievement":{"no_circles":{"name":"Sin círculos","description":"Resuelve un Únicos de 8×8 o mayor sin rodear con un círculo ni un solo número."},"sure_hand":{"name":"Mano segura","description":"Resuelve un Únicos de 10×10 o mayor sin restaurar ninguna casilla tapada de negro."}}},"sixteen":{"name":"Dieciséis","description":"Desliza filas y columnas enteras por la cuadrícula para poner las piezas en orden.","preset":{"3x3":"3×3","4x3":"4×3","4x4":"4×4","5x4":"5×4","5x5":"5×5"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"number_of_shuffling_moves":{"name":"Número de movimientos de mezcla"}},"achievement":{"lean_slides":{"name":"Deslizador austero","description":"Ordena el 4×4 en 100 deslizamientos o menos."},"five_in_200":{"name":"Gran ordenador","description":"Ordena el 5×5 en 200 deslizamientos o menos."},"round_the_doughnut":{"name":"La vuelta al dónut","description":"Desliza una línea una vuelta entera hasta que vuelva a donde empezó."}}},"slant":{"name":"Diagonales","alsoKnownAs":"Gokigen Naname","description":"Traza una diagonal en cada casilla, respetando los números y sin formar bucles.","preset":{"5x5_easy":"5×5 Fácil","5x5_hard":"5×5 Difícil","8x8_easy":"8×8 Fácil","8x8_hard":"8×8 Difícil","12x10_easy":"12×10 Fácil","12x10_hard":"12×10 Difícil"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"difficulty":{"name":"Dificultad","choice":{"easy":"Fácil","hard":"Difícil"}}},"achievement":{"no_loops":{"name":"Sin bucles","description":"Resuelve unas Diagonales de 8×8 o mayores sin cerrar nunca un bucle."},"steady_hand":{"name":"Sin titubeos","description":"Resuelve unas Diagonales de 12×10 sin volver atrás a cambiar una línea."}}},"solo":{"name":"Solo","alsoKnownAs":"Sudoku","description":"Rellena la cuadrícula para que cada fila, columna y bloque tenga cada cifra una sola vez.","preset":{"4x4_very_easy":"4×4 Muy fácil","6x6_easy":"6×6 Fácil","9x9_very_easy":"9×9 Muy fácil","9x9_easy":"9×9 Fácil","9x9_x_diagonal_easy":"9×9 Diagonal X Fácil","9x9_medium":"9×9 Medio","9x9_hard":"9×9 Difícil","9x9_x_diagonal_hard":"9×9 Diagonal X Difícil","9x9_expert":"9×9 Experto","9x9_extreme":"9×9 Extremo","9x9_killer":"9×9 Killer","9x9_jigsaw_easy":"9×9 Jigsaw Fácil","9x9_jigsaw_x_diagonal_easy":"9×9 Jigsaw Diagonal X Fácil","9x9_jigsaw_hard":"9×9 Jigsaw Difícil","12x12_easy":"12×12 Fácil","16x16_easy":"16×16 Fácil"},"config":{"columns_of_sub_blocks":{"name":"Columnas de subbloques"},"rows_of_sub_blocks":{"name":"Filas de subbloques"},"x_require_every_number_in_each_main_diagonal":{"name":"“X” (todas las cifras en cada diagonal principal)"},"jigsaw_irregularly_shaped_sub_blocks":{"name":"Jigsaw (subbloques de forma irregular)"},"killer_digit_sums":{"name":"Killer (sumas de cifras)"},"symmetry":{"name":"Simetría","choice":{"none":"Ninguna","2_way_rotation":"Rotación doble","4_way_rotation":"Rotación cuádruple","2_way_mirror":"Espejo doble","2_way_diagonal_mirror":"Espejo diagonal doble","4_way_mirror":"Espejo cuádruple","4_way_diagonal_mirror":"Espejo diagonal cuádruple","8_way_mirror":"Espejo óctuple"}},"difficulty":{"name":"Dificultad","choice":{"very_easy":"Muy fácil","easy":"Fácil","medium":"Medio","hard":"Difícil","expert":"Experto","extreme":"Extremo"}}},"action":{"m":{"label":"Marcas","title":"Anotar a lápiz todas las posibilidades en cada casilla vacía (M)"},"l":{"label":"Resaltar","title":"Destaca cada casilla que tenga la última cifra que tocaste (L)"}},"achievement":{"pen_only":{"name":"Bolígrafo, sin lápiz","description":"Resuelve un Solo 9×9 Medio, Killer o más difícil sin una sola anotación a lápiz."},"no_second_thoughts":{"name":"Sin dudarlo","description":"Resuelve un 9×9 Experto o más difícil sin cambiar ni borrar nunca una cifra."}}},"tents":{"name":"Tiendas","alsoKnownAs":"Tiendas y árboles, camping","description":"Monta una tienda junto a cada árbol sin que dos tiendas se toquen.","preset":{"8x8_easy":"8×8 Fácil","8x8_tricky":"8×8 Complicado","10x10_easy":"10×10 Fácil","10x10_tricky":"10×10 Complicado","15x15_easy":"15×15 Fácil","15x15_tricky":"15×15 Complicado"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"difficulty":{"name":"Dificultad","choice":{"easy":"Fácil","tricky":"Complicado"}}},"achievement":{"no_grass":{"name":"Acampada perfecta","description":"Resuelve unas Tiendas de 10×10 o mayores sin marcar ni una casilla como hierba."},"no_strikes":{"name":"Campistas felices","description":"Resuelve unas Tiendas de 15×15 sin desmontar nunca una tienda."}}},"towers":{"name":"Torres","alsoKnownAs":"Rascacielos, Skyscrapers","description":"Construye torres para que cada pista del borde cuente las torres visibles desde allí.","preset":{"4x4_easy":"4×4 Fácil","5x5_easy":"5×5 Fácil","5x5_hard":"5×5 Difícil","6x6_easy":"6×6 Fácil","6x6_hard":"6×6 Difícil","6x6_expert":"6×6 Experto","6x6_extreme":"6×6 Extremo"},"config":{"grid_size":{"name":"Tamaño de la cuadrícula"},"difficulty":{"name":"Dificultad","choice":{"easy":"Fácil","hard":"Difícil","expert":"Experto","extreme":"Extremo"}}},"action":{"m":{"label":"Marcas","title":"Anotar a lápiz todas las posibilidades en cada casilla vacía (M)"},"l":{"label":"Resaltar","title":"Destaca cada casilla que tenga la última cifra que tocaste (L)"}},"achievement":{"no_pencil":{"name":"Horizonte mental","description":"Resuelve unas Torres de 6×6 sin escribir ni una anotación a lápiz."},"clean_build":{"name":"Hecho para durar","description":"Resuelve unas Torres 6×6 Experto o Extremo sin volver atrás a cambiar una torre."},"tallest_first":{"name":"Primero las más altas","description":"Construye todas las torres más altas antes que cualquier otra y luego resuelve la cuadrícula."}}},"tracks":{"name":"Vías","alsoKnownAs":"Train Tracks","description":"Tiende una única vía de tren desde la entrada hasta la salida, respetando los recuentos.","preset":{"8x8_easy":"8×8 Fácil","8x8_tricky":"8×8 Complicado","10x8_easy":"10×8 Fácil","10x8_tricky":"10×8 Complicado","10x10_easy":"10×10 Fácil","10x10_tricky":"10×10 Complicado","15x10_easy":"15×10 Fácil","15x10_tricky":"15×10 Complicado","15x15_easy":"15×15 Fácil","15x15_tricky":"15×15 Complicado"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"difficulty":{"name":"Dificultad","choice":{"easy":"Fácil","tricky":"Complicado"}},"disallow_consecutive_1_clues":{"name":"Prohibir pistas de 1 consecutivas"}},"achievement":{"no_crosses":{"name":"Nada tachado","description":"Resuelve unas Vías de 10×10 o mayores sin tachar ninguna casilla ni ningún lado."},"no_lift":{"name":"A todo vapor","description":"Resuelve unas Vías de 15×10 o mayores sin levantar nunca un riel colocado."},"long_haul":{"name":"Largo recorrido","description":"Coloca rieles por diez casillas en un solo arrastre y luego completa la vía."}},"action":{"e":{"label":"Borrar","title":"Haz clic o arrastra para dejar casillas limpias (E)"}}},"twiddle":{"name":"Giros","description":"Gira bloques cuadrados de piezas para volver a poner los números en orden.","preset":{"3x3_rows_only":"3×3 solo filas","3x3_normal":"3×3 normal","3x3_orientable":"3×3 orientable","4x4_normal":"4×4 normal","4x4_orientable":"4×4 orientable","4x4_rotating_3x3_blocks":"4×4, bloques giratorios de 3×3","5x5_rotating_3x3_blocks":"5×5, bloques giratorios de 3×3","6x6_rotating_4x4_blocks":"6×6, bloques giratorios de 4×4"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"rotating_block_size":{"name":"Tamaño del bloque giratorio"},"one_number_per_row":{"name":"Un número por fila"},"orientation_matters":{"name":"La orientación importa"},"number_of_shuffling_moves":{"name":"Número de movimientos de mezcla"}},"achievement":{"few_turns":{"name":"Veinte giros","description":"Resuelve unos Giros 3×3 normal en 20 giros o menos."},"perfect_ten":{"name":"Un diez perfecto","description":"Resuelve unos Giros 3×3 normal en 10 giros o menos."},"dizzy":{"name":"Vueltas y vueltas","description":"Gira un mismo bloque en el mismo sentido cuatro veces seguidas y luego resuelve el rompecabezas."}},"action":{"t":{"label":"Horario","title":"Intercambia los sentidos: los clics giran en sentido horario y los clics derechos en antihorario (T)"}}},"undead":{"name":"No muertos","alsoKnownAs":"Laberinto de espejos embrujado","description":"Coloca fantasmas, vampiros y zombis según lo que se ve en los espejos.","preset":{"4x4_easy":"4×4 Fácil","4x4_normal":"4×4 Normal","4x4_tricky":"4×4 Complicado","5x5_easy":"5×5 Fácil","5x5_normal":"5×5 Normal","5x5_tricky":"5×5 Complicado","7x7_easy":"7×7 Fácil","7x7_normal":"7×7 Normal"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"difficulty":{"name":"Dificultad","choice":{"easy":"Fácil","normal":"Normal","tricky":"Complicado"}}},"keypad":{"g":"Fantasma","v":"Vampiro","z":"Zombi"},"achievement":{"no_pencil":{"name":"Fíate de tus ojos","description":"Resuelve unos No muertos de 5×5 o mayores sin una sola anotación a lápiz."},"fearless":{"name":"Sin miedo","description":"Resuelve unos No muertos Complicado sin volver atrás a cambiar un monstruo."}},"action":{"s":{"label":"Visión","title":"Traza las líneas de visión que pasan por una casilla o salen de un número del borde (S)"}}},"unequal":{"name":"Desigualdades","alsoKnownAs":"Futoshiki","description":"Completa el cuadrado latino para que se cumplan todos los signos de desigualdad.","preset":{"4x4_easy":"4×4 Fácil","5x5_easy":"5×5 Fácil","5x5_medium":"5×5 Medio","5x5_medium_adjacent":"5×5 Medio (Adyacente)","5x5_hard":"5×5 Difícil","6x6_easy":"6×6 Fácil","6x6_medium":"6×6 Medio","6x6_medium_adjacent":"6×6 Medio (Adyacente)","6x6_hard":"6×6 Difícil","7x7_medium":"7×7 Medio","7x7_medium_adjacent":"7×7 Medio (Adyacente)","7x7_hard":"7×7 Difícil"},"config":{"mode":{"name":"Modo","choice":{"unequal":"Desigualdad","adjacent":"Adyacente"}},"size_s_s":{"name":"Tamaño (s*s)"},"difficulty":{"name":"Dificultad","choice":{"very_easy":"Muy fácil","easy":"Fácil","medium":"Medio","hard":"Difícil","extreme":"Extremo"}}},"action":{"m":{"label":"Marcas","title":"Anotar a lápiz todas las posibilidades en cada casilla vacía (M)"},"h":{"label":"Pista","title":"Anotar a lápiz las posibilidades que deja el razonamiento sencillo (H)"},"l":{"label":"Resaltar","title":"Destaca cada casilla que tenga la última cifra que tocaste (L)"}},"achievement":{"adjacent_bare":{"name":"Puerta con puerta","description":"Resuelve unas Desigualdades en modo Adyacente sin escribir ni una anotación a lápiz."},"extreme_bare":{"name":"Todo de cabeza","description":"Resuelve unas Desigualdades Extremo sin escribir ni una anotación a lápiz."}}},"unruly":{"name":"Rebelde","alsoKnownAs":"Takuzu, Binairo","description":"Colorea cada casilla de negro o blanco, con el mismo número de cada color en cada línea y nunca tres seguidas.","preset":{"8x8_easy":"8×8 Fácil","8x8_normal":"8×8 Normal","10x10_easy":"10×10 Fácil","10x10_normal":"10×10 Normal","14x14_easy":"14×14 Fácil","14x14_normal":"14×14 Normal"},"config":{"width":{"name":"Ancho"},"height":{"name":"Alto"},"unique_rows_and_columns":{"name":"Filas y columnas únicas"},"difficulty":{"name":"Dificultad","choice":{"easy":"Fácil","normal":"Normal"}}},"achievement":{"no_threes":{"name":"Nunca tres","description":"Resuelve un Rebelde de 10×10 o mayor sin formar nunca tres iguales en línea."},"first_time":{"name":"Blanco y negro","description":"Resuelve un Rebelde de 14×14 sin volver atrás a cambiar una casilla."}},"action":{"e":{"label":"Borrar","title":"Haz clic en una casilla para vaciarla (E)"}}},"untangle":{"name":"Desenreda","alsoKnownAs":"Planarity","description":"Arrastra los puntos hasta que ninguna línea se cruce con otra.","preset":{"6_points":"6 puntos","10_points":"10 puntos","15_points":"15 puntos","20_points":"20 puntos","25_points":"25 puntos"},"config":{"number_of_points":{"name":"Número de puntos"}},"action":{"g":{"label":"Ajustar","title":"Ajustar a una cuadrícula los puntos que sueltes (G)"}},"achievement":{"one_touch":{"name":"Toque ligero","description":"Desenreda 10 puntos o más sin coger dos veces el mismo punto."},"only_downhill":{"name":"Siempre cuesta abajo","description":"Desenreda 20 puntos o más sin que ningún movimiento añada líneas rojas."}}}}`),$=JSON.parse('{"blackbox":{"step1":{"text":"Hay una bola escondida en esta caja de 4×4. Dispara láseres desde los puntos del borde, deduce dónde tiene que estar, márcala y pulsa el botón de la esquina."},"step2":{"text":"Haz clic en el punto del **borde izquierdo, a la altura de la segunda fila**. El rayo se desvía por el camino y sale por otro sitio; los dos extremos reciben el mismo número."},"step3":{"text":"Ahora dispara desde el punto de **arriba de la segunda columna**. Una **H** significa que el rayo chocó de frente con una bola y nunca salió."},"step4":{"text":"Dispara también desde el punto de **arriba de la primera columna**. Una **R** significa que el rayo rebotó y volvió a salir por donde entró, lo que ocurre cuando hay una bola en diagonal junto a la entrada."},"step5":{"text":"La R pone una bola en diagonal junto a la primera columna, y la H pone una en línea recta bajando por la segunda: solo esta casilla cumple las dos cosas."},"step6":{"text":"**Haz clic en esa casilla** para marcar tu bola ahí."},"step7":{"text":"Todas las bolas están marcadas, así que el **botón ✓ de la esquina superior izquierda** ya funciona. Haz clic en él para que se compruebe tu respuesta."},"step8":{"text":"¡Correcto! Mientras juegas, **haz clic derecho en** una casilla para ponerle un candado cuando estés seguro de que está vacía, y **Resolver** te revela la respuesta."}},"bridges":{"step1":{"text":"El número de cada isla indica cuántos puentes deben llegar a ella. Une todas las islas en una sola red, con dos puentes como máximo entre cada par y sin que ningún puente cruce otro."},"step2":{"text":"El **2 de abajo** solo tiene una isla en línea con él: el **4** de arriba. **Arrastra** desde el 2 hacia el 4 para tender un puente."},"step3":{"text":"Necesita dos puentes, y solo pueden ir hacia ese 4. **Arrastra** otra vez en la misma dirección para tender un segundo puente paralelo."},"step4":{"text":"Esa isla está completa. **Haz clic en ella** para marcarla como terminada: se vuelve gris y sus puentes se bloquean, para que no los estropees sin querer."},"step5":{"text":"Ningún puente puede cruzar otro, así que la línea entre los **dos 1** ya no sirve. **Arrastra con clic derecho** desde el 1 de la izquierda hacia el de la derecha para anotarlo."},"step6":{"text":"Cada 1 tiene ahora una única salida, y los cuatro puentes que faltan se deducen de ello. **Resolver** termina el rompecabezas (y **G** muestra todas las líneas por las que podría ir un puente).","textTouch":"Cada 1 tiene ahora una única salida, y los cuatro puentes que faltan se deducen de ello. **Resolver** termina el rompecabezas."}},"cube":{"step1":{"text":"El cubo tiene seis caras y hay seis casillas pintadas de azul. Hazlo rodar hasta que cada cara haya recogido una: cada vez que cae, la cara de abajo y la casilla intercambian sus colores."},"step2":{"text":"Un clic vuelca el cubo por el borde hacia la casilla que elijas. **Haz clic en la casilla azul justo debajo del cubo** para pasar su color a la cara que cae sobre ella."},"step3":{"text":"La casilla que dejó ahora está vacía: los colores de verdad se intercambian. **Haz clic en la casilla azul de la derecha** para volver azul una segunda cara."},"step4":{"text":"Las **teclas de flecha** también hacen rodar el cubo. Pulsa **→** una vez para recoger la tercera casilla azul.","textTouch":"Cada casilla vecina está a un toque de distancia. **Toca la siguiente casilla azul a la derecha** para recoger la tercera casilla azul."},"step5":{"text":"Tres caras azules, faltan tres: este tablero se puede terminar en seis movimientos en total, y la barra de estado los cuenta. **Deshacer** anula uno si te pasas."}},"dominosa":{"step1":{"text":"Aquí se colocaron tres fichas de dominó (0-0, 0-1 y 1-1) y luego se retiraron, dejando sus números. Divide la cuadrícula en parejas para volver a poner cada una exactamente una vez."},"step2":{"text":"Ninguna ficha puede usarse dos veces. Emparejar este **0** con el **1** de debajo convertiría ambas columnas exteriores en un 0-1, así que **haz clic derecho** entre ellos para anotar que no forman pareja."},"step3":{"text":"Los únicos dos **0** que se tocan son la pareja de la esquina superior izquierda, así que ahí va el 0-0. **Haz clic en el borde entre ellos** para colocarla."},"step4":{"text":"Del mismo modo, los únicos **1** que se tocan son los dos de abajo a la izquierda. Haz clic en el borde entre ellos para el 1-1."},"step5":{"text":"Eso deja la columna de la derecha para el 0-1. Haz clic en el borde entre sus dos números para terminar."},"step6":{"text":"Cada ficha usada una vez. Vuelve a hacer clic en una ficha para quitarla; una repetida se dibuja en rojo, y **Deshacer** retrocede por tus movimientos."}},"fifteen":{"step1":{"text":"Desliza las piezas numeradas hacia el hueco hasta que queden del **1 al 8** en orden, con el hueco en la esquina inferior derecha. A este tablero pequeño le faltan dos movimientos."},"step2":{"text":"Cualquier pieza de la misma fila o columna que el hueco puede deslizarse. Haz clic en el **5** para subirlo al hueco."},"step3":{"text":"Uno más. Haz clic en el **8** para completar la fila."},"step4":{"text":"¡Resuelto! **Deshacer** y **Rehacer** recorren tus movimientos, y **Nuevo**, en el menú de pausa, reparte un rompecabezas nuevo. Las flechas también deslizan una pieza hacia el hueco, en la dirección de la flecha.","textTouch":"¡Resuelto! **Deshacer** y **Rehacer** recorren tus movimientos, y **Nuevo**, en el menú de pausa, reparte un rompecabezas nuevo. Una fila o columna entera se desliza de una vez, así que apunta a la pieza más lejana."}},"filling":{"step1":{"text":"Escribe una cifra en cada casilla vacía para que cada bloque conectado de cifras iguales ocupe exactamente tantas casillas como indica la cifra."},"step2":{"text":"El **3** al pie de la columna central solo puede crecer hacia arriba, así que su bloque es esa columna. **Arrastra** desde su casilla de arriba hasta la del medio y luego pulsa **3**.","textTouch":"El **3** al pie de la columna central solo puede crecer hacia arriba. **Arrastra** desde su casilla de arriba hasta la del medio y luego toca **3** en el teclado en pantalla."},"step3":{"text":"El **2** de la columna izquierda necesita un compañero y la casilla de encima es la única libre. Haz clic en esa casilla y pulsa **2**.","textTouch":"El **2** de la columna izquierda necesita un compañero y la casilla de encima es la única libre. Toca esa casilla y luego toca **2** en el teclado en pantalla."},"step4":{"text":"Queda una casilla. Haz clic en ella y pulsa **1** para ver cómo se ve una cifra incorrecta.","textTouch":"Queda una casilla. Tócala y luego toca **1** en el teclado en pantalla para ver cómo se ve una cifra incorrecta."},"step5":{"text":"El rojo significa imposible: esos dos **1** se tocan, lo que formaría un bloque de dos, y el **2** de arriba queda encerrado. Esa casilla sigue seleccionada, así que pulsa **Backspace** para vaciarla.","textTouch":"El rojo significa imposible: esos dos **1** se tocan, lo que formaría un bloque de dos, y el **2** de arriba queda encerrado. Esa casilla sigue seleccionada, así que toca **⌫** en el teclado en pantalla para vaciarla."},"step6":{"text":"Esa casilla vacía se empareja con el **2** de encima. Haz clic en ella y pulsa **2** para completar la cuadrícula.","textTouch":"Esa casilla vacía se empareja con el **2** de encima. Tócala y luego toca **2** en el teclado en pantalla para completar la cuadrícula."},"step7":{"text":"¡Completo! Unas líneas gruesas encierran cada bloque terminado; **haz clic derecho** para añadir casillas a una selección de una en una, y **Deshacer** retira un relleno."}},"flip":{"step1":{"text":"Enciende las nueve casillas. Pulsar una casilla la invierte a ella **y** a las casillas de alrededor, así que las casillas encendidas pueden volver a apagarse."},"step2":{"text":"El pequeño diagrama dentro de una casilla muestra lo que invierte: el bloque relleno es la propia casilla, los contornos son sus vecinas."},"step3":{"text":"Es hora de encender esta. Pulsa la casilla de **arriba a la izquierda**, la oscura de la esquina."},"step4":{"text":"La esquina está encendida, pero sus dos vecinas se apagaron. Ahora pulsa la casilla del **centro**."},"step5":{"text":"Ahora solo la esquina inferior derecha está apagada. Pulsa la casilla de **abajo a la derecha** para terminar."},"step6":{"text":"¡Todo encendido! **Deshacer** retira una pulsación, y puedes mover un cursor con las teclas de flecha y pulsar Enter en lugar de hacer clic.","textTouch":"¡Todo encendido! **Deshacer** retira una pulsación, y tocar dos veces la misma casilla siempre se anula, así que el orden nunca importa."}},"flood":{"step1":{"text":"Controlas la casilla de arriba a la izquierda y todo lo que está unido a ella con el mismo color. Cada movimiento repinta esa zona, así que las casillas vecinas del nuevo color se suman. Deja toda la cuadrícula de un solo color sin pasar del límite de **cuatro movimientos**."},"step2":{"text":"Por ahora tu zona es solo esa esquina azul. Haz clic en la casilla **roja** de al lado: la zona se vuelve roja y cada casilla roja que toca se une a ella."},"step3":{"text":"Ahora haz clic en una casilla **azul** del borde de tu zona. Un color bien elegido puede extenderse mucho por la cuadrícula en un solo movimiento."},"step4":{"text":"Solo queda **verde** fuera de tu zona. Un clic más y el resto de la cuadrícula se suma a tu zona."},"step5":{"text":"Tres movimientos de cuatro: la barra de estado lleva la cuenta. Si se acaban antes de que la cuadrícula sea de un solo color, pierdes la ronda. ¿Te has atascado? Una **Pista** juega un buen color por ti, y **Resolver** completa la cuadrícula, aunque cuenta como resolución automática."}},"galaxies":{"step1":{"text":"Dos puntos, así que dos galaxias. Traza paredes sobre las líneas de la cuadrícula para que cada punto quede en el centro de su propia región: si giras una región 180° sobre su punto, debe coincidir exactamente consigo misma."},"step2":{"text":"El punto de la izquierda está sobre una línea entre dos casillas, así que su galaxia tiene que ser las dos columnas de la izquierda. **Haz clic en** la línea justo a su derecha, en la **fila de arriba**."},"step3":{"text":"Los puntos también sirven para tomar notas. **Arrastra** desde el punto de la derecha hasta la **casilla de arriba a la derecha** para dejar ahí una flecha que la marca como parte de su galaxia."},"step4":{"text":"Volvamos a la pared: **haz clic en** la misma línea una fila más abajo, en la **fila del medio**."},"step5":{"text":"Queda un tramo, en la **fila de abajo**. **Haz clic en él** para cerrar las dos galaxias."},"step6":{"text":"Las dos regiones están sombreadas, así que las dos son correctas. **Resolver** dibuja una respuesta completa, y un clic en una pared la borra de nuevo."}},"guess":{"step1":{"text":"Hay dos clavijas escondidas tras los signos de interrogación, en algún orden de tres colores. Prueba una fila, lee las marcas que obtiene y ve descartando."},"step2":{"text":"**Arrastra** el color de arriba fuera de la bandeja y suéltalo en el **hueco de la izquierda** de la fila con la flecha."},"step3":{"text":"También puedes elegir primero un color y hacer clic en los huecos con él. Haz clic en el **segundo color** de la bandeja."},"step4":{"text":"Ahora haz clic en el **hueco de la derecha** para poner ese color."},"step5":{"text":"La fila está llena, así que se ilumina el **recuadro discontinuo** de su derecha. Haz clic en él para que se evalúe el intento."},"step6":{"text":"Dos marcas **huecas** significan que ambos colores están en la respuesta, pero ninguno está en su sitio; una marca rellena sería color correcto en el sitio correcto. Intercámbialos y vuelve a enviar."},"step7":{"text":"¡Resuelto! **Resolver** se rinde y muestra la respuesta, y la tecla **L** pone letras a las clavijas si cuesta distinguir los colores.","textTouch":"¡Resuelto! **Resolver** se rinde y muestra la respuesta, y **Retener**, junto a Deshacer, deja en su sitio una clavija de la que te fías para tu siguiente intento."}},"inertia":{"step1":{"text":"Eres la bola de la esquina superior izquierda y hay **tres gemas** que recoger. Cuando la bola empieza a rodar, solo se detiene en un muro o en una parada, y una mina la destruye."},"step2":{"text":"Haz clic en una casilla a la **derecha** de la bola. Rueda en esa dirección hasta que el borde del tablero la detiene, recogiendo la gema por la que pasa."},"step3":{"text":"Ahora haz clic **debajo** de la bola. Recoge la siguiente gema, y el anillo roto dos casillas más abajo (una parada) la detiene."},"step4":{"text":"Cuidado: la cosa con pinchos justo debajo de la bola es una **mina**. Rodar sobre una termina la partida, y solo Deshacer te saca de ahí."},"step5":{"text":"Ve en **diagonal**: haz clic en la casilla dos abajo y dos a la izquierda, y la bola pasa junto a la mina hasta la última gema."},"step6":{"text":"¡Las tres gemas, listo! **Deshacer** anula un movimiento que salió mal; con las teclas de flecha ruedas en línea recta, y con Home, Page Up, End y Page Down, en diagonal.","textTouch":"¡Las tres gemas, listo! **Deshacer** anula un movimiento que salió mal, y también puedes tocar fuera de la cuadrícula, algo útil cuando la bola está pegada a un borde."}},"keen":{"step1":{"text":"Coloca 1, 2 y 3 para que cada uno aparezca una vez en cada fila y columna, y para que las cifras de cada jaula de contorno grueso cumplan su pista aritmética."},"step2":{"text":"La jaula **2×** da 2 al multiplicar, así que sus cifras son 1, 1 y 2. Una jaula puede repetir una cifra, pero no en la misma fila o columna, así que el 2 va en la esquina: haz clic en esa casilla y escribe **2**.","textTouch":"La jaula **2×** da 2 al multiplicar, así que sus cifras son 1, 1 y 2. El 2 va en la esquina: toca esa casilla y luego toca **2** en el teclado."},"step3":{"text":"Las otras dos casillas de la jaula son los 1. Haz clic en la casilla **a la derecha del 2** y escribe **1**.","textTouch":"Las otras dos casillas de la jaula son los 1. Toca la casilla **a la derecha del 2** y luego toca **1** en el teclado en pantalla."},"step4":{"text":"La fila de arriba ya tiene su 2 y su 1, así que la última casilla debe ser el 3. Haz clic en la **casilla de arriba a la derecha** y escribe **3**.","textTouch":"La fila de arriba ya tiene su 2 y su 1, así que la última casilla debe ser el 3. Toca la **casilla de arriba a la derecha** y luego toca **3** en el teclado en pantalla."},"step5":{"text":"¿No estás seguro de una casilla? **Haz clic derecho en** la casilla del medio y escribe **3** para anotar esa cifra a lápiz en lugar de rellenarla.","textTouch":"¿No estás seguro de una casilla? **Mantén pulsada** la casilla del medio y toca **3** para anotar esa cifra en lugar de rellenarla. La tecla **✎** hace lo mismo con una casilla que hayas tocado."},"step6":{"text":"Resuelve el resto de la misma forma; una cifra repetida en su fila o columna se vuelve roja, igual que una jaula llena que no cumple su pista. En el menú de pausa, **Marcas** anota a lápiz todas las posibilidades por ti, y **Resolver** te revela la respuesta."}},"lightup":{"step1":{"text":"Todas las casillas blancas tienen que acabar iluminadas. Una bombilla ilumina su fila y su columna hasta que una casilla negra corta el rayo, y ninguna bombilla puede estar en la luz de otra."},"step2":{"text":"Un número indica cuántas bombillas tocan esa casilla negra. Este **2** solo tiene dos vecinas blancas, así que ambas llevan bombilla: haz clic en la de su **derecha**."},"step3":{"text":"Fíjate en el tono amarillo que se extiende a lo largo del rayo. Ahora haz clic en la casilla justo **debajo** del 2 para su segunda bombilla."},"step4":{"text":"Un **0** no toca ninguna bombilla. **Haz clic derecho en** la casilla de encima para anotar una cruz: solo te recuerda que ahí no puede ir ninguna bombilla."},"step5":{"text":"El **1** quiere exactamente una bombilla. La casilla de debajo ya está iluminada, así que una bombilla ahí estaría en el rayo: haz clic en la casilla a la **izquierda** del 1."},"step6":{"text":"Dos casillas de la fila de arriba siguen a oscuras y ya has tachado una. Haz clic en la **otra**."},"step7":{"text":"Todas las casillas iluminadas, todos los números contentos. **Deshacer** retira una bombilla, y las teclas de flecha con Enter y la barra espaciadora colocan bombillas y cruces sin ratón.","textTouch":"Todas las casillas iluminadas, todos los números contentos. **Deshacer** retira una bombilla, y una pulsación larga tacha cualquier casilla que hayas descartado."}},"loopy":{"step1":{"text":"Dibuja **un solo** bucle cerrado sobre las líneas tenues entre los puntos. Cada número indica cuántos de los cuatro lados de su casilla usa el bucle."},"step2":{"text":"La casilla del medio tiene un **4**, así que sus cuatro lados están en el bucle. **Haz clic en** su lado de arriba para dibujar la primera línea."},"step3":{"text":"Ahora su **lado izquierdo**. Si vuelves a hacer clic en una línea, la borras."},"step4":{"text":"Cada punto tiene dos líneas o ninguna, y el punto donde se juntan esas dos ya está completo. **Haz clic derecho en** la línea que sube desde él para tacharla como inutilizable."},"step5":{"text":"Quedan dos lados. **Haz clic en** el lado de abajo de la casilla del medio."},"step6":{"text":"Y el **lado derecho** lo cierra. Un bucle, sin cabos sueltos, y los cuatro **0** quedan fuera de él."},"step7":{"text":"¡Resuelto! **Deshacer** recorre tus líneas hacia atrás, y **Tipo**, en el menú de pausa, cambia las casillas por triángulos, hexágonos y teselados más extraños."}},"magnets":{"step1":{"text":"Cada ficha de dominó es o bien un imán, con una mitad **+** y una mitad **−**, o bien una ficha neutra. Los números cuentan los polos **+** (arriba y a la izquierda) y los polos **−** (abajo y a la derecha) de cada línea, y los polos iguales nunca pueden tocarse."},"step2":{"text":"La fila de abajo pide tres polos **−** y solo llegan a ella tres fichas, así que cada una debe aportar uno. **Haz clic izquierdo en** la mitad de arriba de la ficha vertical para hacerla **+**, y su **−** queda abajo."},"step3":{"text":"Así que la ficha ancha de abajo a la derecha también es un imán, y el **0** sobre la última columna prohíbe ahí un **+**. **Haz clic izquierdo en** su mitad izquierda para poner el **+** en ese lado."},"step4":{"text":"La cuarta columna ya tiene su único **+** y no admite ningún **−**, así que la ficha de encima no puede ser ninguna de las dos cosas. **Haz clic derecho en ella** para marcarla como neutra."},"step5":{"text":"La fila de arriba aún necesita un **+** y un **−** de la ficha ancha de la izquierda. Su mitad derecha toca un **+**, y los polos iguales no pueden tocarse, así que **haz clic izquierdo en** su mitad izquierda."},"step6":{"text":"Queda una ficha. La primera columna ya gastó su **+** arriba, así que aquí el **+** va a la derecha: **haz clic izquierdo en** la mitad derecha para terminar."},"step7":{"text":"¡Resuelto! Volver a hacer clic en la misma mitad le da la vuelta a un imán, un segundo clic derecho deja signos de interrogación para anotar \\"imán, pero ¿en qué sentido?\\", y **Deshacer** retrocede."}},"map":{"step1":{"text":"Colorea cada región de modo que dos regiones que comparten un tramo de frontera no tengan el mismo color. Cuatro colores siempre bastan, y aquí quedan tres regiones en blanco."},"step2":{"text":"Primero elige un color: **haz clic en** la **muestra azul**, la segunda de la fila bajo el mapa."},"step3":{"text":"Con un color elegido, **un clic derecho** en una región en blanco anota un punto de ese color: una nota de que la región *podría* ser de ese color. Pruébalo en la región alta del lado derecho."},"step4":{"text":"Es más que una posibilidad: esa región ya limita con rojo, verde y amarillo, así que solo queda el azul. **Haz clic en ella** para pintarla."},"step5":{"text":"También puedes **arrastrar** un color de una región a otra. La región grande de arriba ya toca rojo, verde y azul, así que **arrastra** el amarillo hasta ella desde la región pequeña de abajo."},"step6":{"text":"Queda una región en blanco, en la **esquina inferior izquierda**: limita con verde, azul y ese nuevo amarillo, así que tiene que ser roja. **Arrastra** el rojo hasta ella desde la región de la esquina superior derecha."},"step7":{"text":"¡Hecho! Un choque habría mostrado un **!** rojo en la frontera entre las dos regiones. **Deshacer** retrocede, y las teclas de flecha con **1**–**4** colorean sin ratón.","textTouch":"¡Hecho! Un choque habría mostrado un **!** rojo en la frontera entre las dos regiones. **Deshacer** retrocede, y la goma, la última muestra de la fila, borra una región si cambias de idea."}},"mines":{"step1":{"text":"Cada número cuenta las minas de las ocho casillas que lo rodean. Hay dos minas escondidas bajo el bloque tapado; destapa todo lo demás sin pisar ninguna."},"step2":{"text":"Este **1** solo toca una casilla tapada, así que esa casilla es una mina. **Haz clic derecho en ella** para poner una bandera."},"step3":{"text":"El **1** de debajo ya tiene su mina marcada con bandera, así que el resto de sus vecinas son seguras. **Haz clic izquierdo en ese 1** para abrirlas de una vez."},"step4":{"text":"El **2** encima del bloque ya cuenta una bandera y le queda una sola casilla tapada. **Haz clic derecho en** esa casilla."},"step5":{"text":"Las dos minas tienen bandera, así que la última casilla tapada tiene que ser segura. **Haz clic izquierdo en ella** para completar la cuadrícula."},"step6":{"text":"¡Despejado! Un segundo clic derecho quita una bandera, y **Deshacer** te rescata si alguna vez pisas una mina."}},"net":{"step1":{"text":"Cada pieza lleva un trozo de cable, y toda la red se ha girado al azar. Gira las piezas hasta que las nueve cuelguen de la pieza marcada del medio: los cables **azules** ya tienen corriente, los grises no."},"step2":{"text":"La pieza de abajo a la izquierda apunta su cable directamente a la pared. **Haz clic izquierdo en ella** para darle un cuarto de vuelta en sentido antihorario, de modo que el cable llegue a su vecina de la derecha."},"step3":{"text":"**Un clic derecho** gira una pieza en el otro sentido. Dale un giro en sentido horario a la pieza de abajo a la derecha y su cable se desplaza hacia la izquierda."},"step4":{"text":"La pieza del medio tiene cables en sus cuatro lados, así que no puede estar mal. **Haz clic central en ella** para bloquearla, o activa el **candado** junto a Deshacer y haz clic en ella: una pieza bloqueada aparece sombreada y no gira.","textTouch":"La pieza del medio tiene cables en sus cuatro lados, así que no puede estar mal. Activa el **candado** junto a Deshacer y toca la pieza para bloquearla: una pieza bloqueada aparece sombreada y no gira."},"step5":{"text":"Queda una pieza. Con el **candado** desactivado, **haz clic izquierdo en** la esquina de arriba a la derecha para llevar su cable hacia la izquierda y encender toda la red.","textTouch":"Queda una pieza. Con el **candado** desactivado, toca la esquina de arriba a la derecha para llevar su cable hacia la izquierda y encender toda la red."},"step6":{"text":"Las nueve piezas tienen corriente. **Deshacer** recorre tus giros hacia atrás; con el teclado, las teclas de flecha mueven un cursor y **A**, **D** y **F** giran la pieza que hay debajo.","textTouch":"Las nueve piezas tienen corriente. **Deshacer** recorre tus giros hacia atrás, bloquear una pieza de la que estás seguro la protege de un toque accidental, y **Mezclar** vuelve a girar todas las piezas no bloqueadas."}},"netslide":{"step1":{"text":"Cada trozo de cable tiene que acabar conectado a la fuente de energía. Los cables azules tienen corriente, los grises a lápiz no."},"step2":{"text":"La fuente está en la pieza del medio. Esa pieza nunca se mueve, así que la fila y la columna del medio no tienen flechas; todo lo demás se desliza."},"step3":{"text":"Haz clic en la flecha a la **izquierda de la fila de abajo** para deslizar esa fila un paso a la izquierda; el cable que se cae por un lado reaparece por la derecha."},"step4":{"text":"La fila de abajo ya está unida, pero sigue gris: todavía nada la conecta hacia arriba con la fuente."},"step5":{"text":"**Haz clic derecho en** la flecha **encima de la tercera columna**. Un clic derecho invierte una flecha, así que esa columna se desliza hacia abajo y se encienden los últimos cables."},"step6":{"text":"¡Todo con corriente! **Resolver** muestra una respuesta si te atascas, y el menú **Tipo** tiene cuadrículas envolventes donde los cables salen por un borde y entran por el opuesto."}},"pattern":{"step1":{"text":"Los números junto a cada fila y columna son las longitudes de sus tramos negros, en orden. Averigua qué casillas son negras y rellénalas."},"step2":{"text":"La **tercera columna** dice 1 2: una negra, un hueco y luego dos negras. En cuatro casillas eso solo cabe de una manera, con la pareja abajo. **Arrastra** hacia abajo sobre ellas."},"step3":{"text":"Así, la casilla encima de la pareja es el hueco. **Haz clic derecho en ella** para ponerle un punto, que marca una casilla que sabes que es blanca."},"step4":{"text":"Y la casilla superior de esa columna es la negra suelta de la pista. **Haz clic en ella**."},"step5":{"text":"La **última columna** dice 3. Esté donde esté un tramo de tres en cuatro casillas, siempre cubre las dos del medio, así que **arrastra** hacia abajo sobre esas."},"step6":{"text":"Una pista se vuelve gris cuando su línea está terminada. Sigue avanzando así, o deja que **Resolver** termine este; un clic central devuelve una casilla a desconocida."}},"pearl":{"step1":{"text":"Dibuja un único bucle cerrado de centro de casilla a centro de casilla. No tiene que pasar por todas las casillas, pero sí por todas las perlas."},"step2":{"text":"Una **perla blanca** significa que el bucle la atraviesa en línea recta. En la fila de arriba la única recta posible es horizontal, así que **arrastra** desde la casilla a la izquierda de esa perla hasta la casilla a su derecha."},"step3":{"text":"Esa perla ya tiene sus dos tramos, así que nada más puede salir de ella. **Haz clic derecho en** el borde de debajo para tachar ese lado."},"step4":{"text":"Una **perla negra** gira, y después el bucle sigue recto por la casilla de cada lado. La del **borde izquierdo** no puede girar hacia abajo —eso exigiría una línea recta por la esquina inferior izquierda—, así que **haz clic en** su borde derecho."},"step5":{"text":"Por tanto, la casilla de al lado sigue recta, y también la perla blanca que hay más allá. **Arrastra** desde esa casilla hasta la cuarta columna."},"step6":{"text":"Sigue trabajando a partir de las perlas; una perla recibe un halo rojo en cuanto se incumple su regla. **Resolver** dibuja el bucle entero si quieres verlo."}},"pegs":{"step1":{"text":"Una clavija salta sobre una vecina hasta el agujero vacío de detrás, y la clavija saltada se retira. Deja este pequeño tablero en **una sola clavija**: tres saltos."},"step2":{"text":"**Arrastra** la clavija de arriba del tallo hacia abajo, por encima de su vecina, hasta el agujero de abajo."},"step3":{"text":"También puedes hacer clic. Haz clic en la **clavija de la derecha** para seleccionarla y luego haz clic en el agujero que está dos casillas a su izquierda."},"step4":{"text":"Último salto: arrastra la clavija de la **esquina inferior izquierda** por encima de su vecina hasta el centro."},"step5":{"text":"Queda una clavija: ¡resuelto! **Deshacer** revierte un salto cuando te quedas atascado, y las flechas del teclado también sirven: Enter selecciona una clavija y luego una flecha la empuja.","textTouch":"Queda una clavija: ¡resuelto! **Deshacer** revierte un salto cada vez que te quedas atascado, tan atrás como quieras."}},"range":{"step1":{"text":"Pinta casillas de negro de modo que cada número cuente exactamente las casillas blancas que ve desde la suya: ella misma, más todas las casillas en línea hacia arriba, abajo, izquierda y derecha hasta que una casilla negra o el borde la detenga."},"step2":{"text":"El **6** ve ahora mismo seis casillas: toda su fila más las dos de debajo. Así que nada en esa fila ni en esa columna puede volverse negro."},"step3":{"text":"El **2** solo puede verse a sí mismo y una casilla más, y la casilla de encima tiene que seguir blanca por el 6. Así que **haz clic en** la casilla de su izquierda para pintarla de negro."},"step4":{"text":"Eso deja la casilla de arriba a la derecha como la única casilla blanca que el 2 todavía ve. **Haz clic derecho en ella** para anotar un punto, que es como indicas una casilla que sabes que sigue blanca."},"step5":{"text":"El **3** ya se ve a sí mismo y a las dos casillas de su izquierda, así que la casilla de su derecha debe ser negra. **Haz clic en ella**."},"step6":{"text":"Terminado con dos casillas negras; los puntos son solo notas. **H** rellena una casilla que se deduce del resto, y **Resolver** llena de puntos toda la cuadrícula.","textTouch":"Terminado con dos casillas negras; los puntos son solo notas. **Resolver** llena de puntos toda la cuadrícula cuando prefieras ver la respuesta."}},"rect":{"step1":{"text":"Divide esta cuadrícula en rectángulos de modo que cada rectángulo contenga exactamente un número, y que ese número sea cuántas casillas cubre el rectángulo."},"step2":{"text":"Un rectángulo solo puede contener un número, y el **3** está justo debajo del **4**, así que el 4 tiene que ocupar toda la fila de arriba. **Arrastra** desde el 4 hasta el extremo derecho de esa fila."},"step3":{"text":"Hacer clic en una sola línea de la cuadrícula añade o quita solo ese borde. **Haz clic en** la línea del lado derecho del **3**."},"step4":{"text":"Un 9 solo puede ser un bloque de 3×3, y le queda un único sitio. **Arrastra** por el bloque resaltado, desde su casilla superior izquierda hasta la esquina inferior derecha: eso encierra también al 3."},"step5":{"text":"Cada casilla está en un rectángulo del tamaño correcto. **Arrastra con clic derecho** para borrar las líneas dentro de una zona sin tocar su contorno, y **Deshacer** revierte un trazo."}},"samegame":{"step1":{"text":"Vacía el tablero quitando grupos de dos o más casillas contiguas del mismo color. Un grupo de _n_ casillas da (_n_ − 2)² puntos, así que los grandes son los que cuentan."},"step2":{"text":"Haz clic en cualquiera de las cuatro casillas **rojas** de arriba. El primer clic solo selecciona el grupo: se aclara y recibe un contorno grueso."},"step3":{"text":"Vuelve a hacer clic en el grupo seleccionado para quitarlo del tablero y ganar cuatro puntos. Las casillas que quedan sobre un hueco caen en él, y una columna vacía atrae a sus vecinas."},"step4":{"text":"Esta casilla **verde** está sola. Ninguna de sus vecinas comparte su color, así que nunca se puede seleccionar: tiene que esperar a que el tablero le ponga una compañera al lado."},"step5":{"text":"Ahora la **pareja azul** resaltada aquí. Haz clic en cualquiera de las dos casillas para seleccionar ambas."},"step6":{"text":"¿Has cambiado de opinión? **Haz clic derecho en** la selección para soltarla; no se quita nada hasta que haces clic en ella por segunda vez."},"step7":{"text":"Eso es todo el juego. Todos los tableros se pueden vaciar, así que sigue: **Deshacer** retrocede cuando dejas una casilla aislada, y aquí no hay botón Resolver que te salve."}},"signpost":{"step1":{"text":"Cada casilla lleva una flecha. Une las seis en una sola cadena numerada **del 1 al 6**, donde a cada casilla le sigue otra situada en algún punto de su propia flecha."},"step2":{"text":"El **1** apunta al este. **Arrastra** desde él hasta la casilla de su derecha para que esa sea el 2."},"step3":{"text":"El **3** se ha enganchado solo, como siempre hacen los números consecutivos que apuntan bien. Ahora **arrastra** la casilla inferior derecha hasta la casilla de su izquierda."},"step4":{"text":"Ninguna de esas dos tiene número todavía, así que la pareja se etiqueta **a** y **a+1**. **Haz clic derecho en** la casilla central de la fila de abajo para separarlas de nuevo."},"step5":{"text":"Los números reales son mejores: **arrastra** el **3** hasta la casilla de debajo, que pasa a ser el 4."},"step6":{"text":"Último enlace: **arrastra** ese 4 hasta la casilla de su izquierda. Se convierte en el 5, y el 6 cierra el camino por sí solo."},"step7":{"text":"Resuelto. **Arrastra con clic derecho** para enlazar en sentido contrario, desde una casilla hacia la anterior, y **Resolver** traza el camino completo."}},"singles":{"step1":{"text":"Oscurece casillas hasta que ningún número se repita entre las casillas blancas de ninguna fila o columna. Dos casillas negras nunca pueden compartir un borde, y las casillas blancas deben seguir formando una sola región conectada."},"step2":{"text":"Los dos **4** de esta fila tienen una casilla entre ellos. Oscurecer esa casilla dejaría ambos 4 en blanco, así que ella misma debe ser blanca: **haz clic derecho en ella** para rodearla con un círculo."},"step3":{"text":"Ese **3** con círculo es blanco para siempre, y su columna tiene otro 3 arriba. **Haz clic izquierdo en** el de arriba para oscurecerlo."},"step4":{"text":"Las casillas negras nunca se tocan, así que el **4** justo a su derecha sigue blanco. **Haz clic izquierdo en** el otro 4 de esa última columna."},"step5":{"text":"Otra vez lo mismo: el **2** justo encima de tu nueva casilla negra es blanco, y su fila tiene otro 2 en el extremo izquierdo. **Haz clic izquierdo en** ese."},"step6":{"text":"Queda uno. El **3** encima de esa casilla negra es blanco, así que el otro 3, al pie de la columna, tiene que irse. **Haz clic izquierdo en él**."},"step7":{"text":"Resuelto, y las casillas blancas siguen todas unidas. Los círculos son solo notas, y **Deshacer** recorre tus movimientos hacia atrás."}},"sixteen":{"step1":{"text":"Pon las piezas en orden, **del 1 al 9**, leyendo de izquierda a derecha. Las flechas del borde deslizan una fila o columna entera un paso, y lo que sale por un lado vuelve a entrar por el otro."},"step2":{"text":"Haz clic en la flecha **encima de la segunda columna** para deslizar esa columna un paso hacia arriba; eso completa la fila del medio."},"step3":{"text":"Ahora la fila de abajo tiene que moverse a la derecha. **Haz clic derecho en** la flecha a la **izquierda de la fila de abajo**: un clic derecho envía la línea en sentido contrario."},"step4":{"text":"La última: haz clic en la flecha a la **izquierda de la fila de arriba** para deslizarla a la izquierda y terminar la cuadrícula."},"step5":{"text":"¡En orden! **Tipo**, en el menú de pausa, ofrece cuadrículas más grandes, y desde su opción **Personalizado…** puedes desordenar una con el número de movimientos que quieras para que luego los deshagas."}},"slant":{"step1":{"text":"Dibuja una diagonal en cada casilla. Un número en un círculo cuenta las líneas que tocan su esquina, y las líneas nunca deben cerrar un bucle."},"step2":{"text":"El **0** de la esquina superior izquierda no quiere que nada lo toque, así que su única casilla debe inclinarse hacia el otro lado. **Haz clic derecho en** esa casilla para dibujar una `/`."},"step3":{"text":"El **4** necesita una línea de cada una de las cuatro casillas que lo rodean. **Haz clic izquierdo en** la que está arriba a su izquierda: un clic izquierdo dibuja una `\\\\`."},"step4":{"text":"La casilla de arriba a la derecha del **4** tiene que inclinarse hacia abajo a la izquierda. **Haz clic derecho en ella** para una `/`."},"step5":{"text":"El **1** del borde izquierdo ya tiene su única línea, de la casilla de debajo. Así que la casilla de encima debe inclinarse en sentido contrario: **haz clic izquierdo en ella** para una `\\\\`."},"step6":{"text":"Sigue de la misma manera. Un número que ya no puede cumplirse se vuelve rojo, igual que cualquier línea atrapada en un bucle cerrado. **Resolver**, en el menú de pausa, rellena el resto."}},"solo":{"step1":{"text":"Cada fila, cada columna y cada **bloque 2×2** delimitado debe contener 1, 2, 3 y 4 exactamente una vez. En esta pequeña cuadrícula faltan tres casillas."},"step2":{"text":"Este **bloque** ya tiene un 2, un 3 y un 4, así que su casilla vacía solo puede ser un **1**. Haz clic en esa casilla y pulsa la tecla **1**.","textTouch":"Este **bloque** ya tiene un 2, un 3 y un 4, así que su casilla vacía solo puede ser un **1**. Toca esa casilla y luego toca **1** en el teclado."},"step3":{"text":"¿No estás seguro de una casilla? **Haz clic derecho en** esta vacía y pulsa **2** para anotar la cifra a lápiz.","textTouch":"¿No estás seguro de una casilla? Toca esta vacía, activa **✎** en el teclado en pantalla y toca **2** para anotar la cifra a lápiz."},"step4":{"text":"Su fila ya tiene 3, 4 y 1, así que la nota era correcta. **Haz clic izquierdo en** la misma casilla y pulsa **2** para escribir la respuesta.","textTouch":"Su fila ya tiene 3, 4 y 1, así que la nota era correcta. La casilla sigue elegida, así que toca **✎** para dejar de anotar y luego **2** para escribir la respuesta."},"step5":{"text":"Queda una casilla. Su fila ya tiene 4, 3 y 1: haz clic en ella y pulsa la cifra que falta.","textTouch":"Queda una casilla. Su fila ya tiene 4, 3 y 1: tócala y luego toca la cifra que falta en el teclado en pantalla."},"step6":{"text":"¡Resuelto! **Deshacer** revierte una cifra equivocada, y la tecla **M** anota a lápiz todas las opciones en todas las casillas vacías a la vez.","textTouch":"¡Resuelto! **Deshacer** revierte una cifra equivocada, y **Marcas**, en el menú de pausa, anota a lápiz todas las opciones en todas las casillas vacías a la vez."}},"tents":{"step1":{"text":"Monta una tienda junto a cada árbol: arriba, abajo, a la izquierda o a la derecha, nunca en diagonal. Dos tiendas no pueden tocarse, y los números cuentan las tiendas de cada fila y columna."},"step2":{"text":"El **0** al final de la segunda fila significa que esa fila no lleva tiendas. **Haz clic derecho en** la casilla junto al árbol para marcarla como hierba."},"step3":{"text":"La tercera columna también está vacía. **Arrastra con clic derecho** desde su casilla de arriba hasta la tercera fila para marcar las tres como hierba de una vez."},"step4":{"text":"El árbol de abajo a la derecha está en la esquina con otro árbol al lado, así que su único vecino libre está arriba. **Haz clic izquierdo en** esa casilla para montar una tienda."},"step5":{"text":"Esa tienda completa la tercera fila, así que el árbol del borde izquierdo tampoco puede acampar debajo. **Haz clic izquierdo en** la casilla superior izquierda."},"step6":{"text":"Un árbol sigue sin tienda, y solo la casilla de su izquierda está libre. **Haz clic izquierdo en ella** para terminar el campamento."},"step7":{"text":"¡Resuelto! Volver a hacer clic en una tienda o en una marca de hierba la borra, las flechas con Enter y la barra espaciadora hacen lo mismo, y **Deshacer** retrocede un paso.","textTouch":"¡Resuelto! Volver a tocar una tienda o una marca de hierba la borra, y **Deshacer** retrocede un paso."}},"towers":{"step1":{"text":"Cada fila y columna contiene una torre de cada altura, del 1 al 4. Un número del borde cuenta las torres que puedes **ver** desde allí: una torre más alta oculta todas las más bajas que tiene detrás."},"step2":{"text":"El **1** a la derecha de la fila de arriba significa que desde ese lado solo se ve una torre, así que la más cercana tiene que ser la más alta. Haz clic en esa casilla y pulsa **4**.","textTouch":"El **1** a la derecha de la fila de arriba significa que desde ese lado solo se ve una torre, así que la más cercana tiene que ser la más alta. Toca esa casilla y luego toca **4** en el teclado en pantalla."},"step3":{"text":"Puedes apuntar posibilidades en lugar de responder. **Haz clic derecho en** la casilla vacía del extremo izquierdo de la fila de arriba y pulsa **1**.","textTouch":"Puedes apuntar posibilidades en lugar de responder. Toca la casilla vacía del extremo izquierdo de la fila de arriba, activa **✎** en el teclado en pantalla y toca **1**."},"step4":{"text":"El **4** a la izquierda de la fila dice que se ven las cuatro torres, así que suben 1-2-3-4 desde ese extremo. **Haz clic izquierdo en** la casilla y pulsa **1** para responder.","textTouch":"El **4** a la izquierda de la fila dice que se ven las cuatro torres, así que suben 1-2-3-4 desde ese extremo. La casilla sigue elegida, así que toca **✎** para dejar de anotar y luego **1** para responder."},"step5":{"text":"Queda una casilla, y el **1** junto a su fila vuelve a poner la torre más alta en primer lugar. Haz clic en ella y pulsa **4**.","textTouch":"Queda una casilla, y el **1** junto a su fila vuelve a poner la torre más alta en primer lugar. Tócala y luego toca **4** en el teclado en pantalla."},"step6":{"text":"¡Resuelto! **Backspace** vacía una casilla en la que te equivocaste, y **Resolver**, en el menú de pausa, termina un rompecabezas que se te resiste.","textTouch":"¡Resuelto! **⌫** en el teclado en pantalla vacía una casilla en la que te equivocaste. En el menú de pausa, **Marcas** anota a lápiz todas las posibilidades y **Resolver** termina un rompecabezas que se te resiste."}},"tracks":{"step1":{"text":"Una vía de tren va desde la entrada de la izquierda hasta la salida de abajo, y cada casilla por la que pasa tiene exactamente dos rieles. Los números indican por cuántas casillas de esa columna o fila pasa la línea."},"step2":{"text":"La pieza de entrada ya sube hasta la **casilla superior izquierda**, y los lados superior e izquierdo de esa casilla son el borde de la cuadrícula. Así que su segundo riel debe ir a la derecha: **haz clic** justo a la derecha de su centro."},"step3":{"text":"La **columna izquierda** cuenta **2** y la entrada ya usa ambas casillas, así que nada pasa por su mitad inferior. **Haz clic derecho en** el centro de una casilla para tacharla, o arrastra con clic derecho para tachar un tramo entero."},"step4":{"text":"La **columna derecha** cuenta **4**, así que la línea pasa por todas sus casillas, y las casillas de arriba y de abajo solo pueden girar hacia dentro. **Arrastra** desde la casilla superior derecha hasta la inferior derecha."},"step5":{"text":"La **fila de abajo** necesita tres casillas y la columna izquierda está terminada, así que la esquina inferior derecha está en la línea. No puede salir de la cuadrícula, así que gira a la izquierda y hacia arriba: **haz clic en** su lado izquierdo."},"step6":{"text":"Los números se vuelven grises cuando su línea es correcta y rojos cuando ya no puede cumplirse. Sigue por los cabos sueltos, o deja que **Resolver** termine la vía."}},"twiddle":{"step1":{"text":"Vuelve a poner los números en orden, **del 1 al 9**. Un movimiento gira un cuarto de vuelta un bloque cuadrado de cuatro piezas; tres giros terminan este tablero."},"step2":{"text":"Haz clic en el centro de las **cuatro piezas de arriba a la izquierda**. Un clic izquierdo gira ese bloque en sentido antihorario, lo que pone 1, 2, 3 en la fila de arriba."},"step3":{"text":"**Haz clic derecho en** el centro de las **cuatro piezas de abajo a la derecha** para girar ese bloque en sentido horario."},"step4":{"text":"Termina con un clic izquierdo en el centro de las **cuatro piezas de abajo a la izquierda**."},"step5":{"text":"¡Hecho! El menú **Tipo** tiene bloques más grandes y un modo *orientable*, en el que además cada pieza tiene que quedar del derecho."}},"undead":{"step1":{"text":"Llena las cinco casillas vacías con fantasmas, vampiros y zombis: el recuento de arriba dice cuántos hay de cada uno. Cada número cuenta los monstruos que se ven mirando a lo largo de esa línea, y los espejos desvían la mirada."},"step2":{"text":"Mirando desde la **izquierda de la fila de arriba** no ves nada; el espejo desvía esa misma línea hacia arriba, donde el **1** ve un monstruo. Solo un fantasma se oculta de frente y aparece en un espejo. **Haz clic en** esa casilla."},"step3":{"text":"El **4** de la esquina inferior izquierda zigzaguea entre los espejos pasando por tres casillas y las ve todas. Los vampiros desaparecen en un espejo, así que el único vampiro debe estar en la casilla central de la columna izquierda. **Haz clic en ella**."},"step4":{"text":"Un clic solo va pasando por los monstruos. **Pulsa V** en su lugar: G, V y Z ponen un fantasma, un vampiro o un zombi directamente en la casilla resaltada.","textTouch":"Un toque solo pasa por los monstruos de uno en uno. Mejor toca **Vampiro** en el teclado en pantalla: pone ese monstruo directamente en la casilla resaltada."},"step5":{"text":"La **fila del medio** es una vista recta, sin espejos, y los dos **1** ven un solo monstruo: el vampiro. Así que sus dos vecinos deben ser fantasmas. **Haz clic en** la casilla central."},"step6":{"text":"**Un clic derecho** añade una anotación a lápiz en lugar de colocar nada. Haz la prueba en la casilla derecha de esa fila; cada clic derecho añade el siguiente monstruo."},"step7":{"text":"Quedan dos casillas: la de la nota es el tercer fantasma y la última, el zombi. Los números se vuelven grises cuando su línea está resuelta; **Resolver** termina el laberinto si prefieres mirar."}},"unequal":{"step1":{"text":"Cada fila y columna necesita 1, 2, 3 y 4 una vez cada uno, y cada signo entre dos casillas debe apuntar a la **menor** de las dos."},"step2":{"text":"Aquí el signo apunta a la derecha, así que la casilla de la **izquierda** es la mayor. Esta fila todavía necesita un 2 y un 3: haz clic en la casilla de la izquierda y pulsa **3**.","textTouch":"Aquí el signo apunta a la derecha, así que la casilla de la **izquierda** es la mayor. Esta fila todavía necesita un 2 y un 3: toca la casilla de la izquierda y luego toca **3** en el teclado en pantalla."},"step3":{"text":"La casilla a la que apunta el signo lleva el número menor. Haz clic en ella y pulsa **2**.","textTouch":"La casilla a la que apunta el signo lleva el número menor. Tócala y luego toca **2** en el teclado en pantalla."},"step4":{"text":"Su columna ya tiene un 3, así que esta casilla solo puede ser un 2. **Haz clic derecho en ella** y pulsa **2** para anotarlo a lápiz.","textTouch":"Su columna ya tiene un 3, así que esta casilla solo puede ser un 2. Tócala, activa **✎** en el teclado en pantalla y toca **2** para anotarlo a lápiz."},"step5":{"text":"Una nota no es una respuesta. **Haz clic izquierdo en** la misma casilla y pulsa **2** para confirmarlo.","textTouch":"Una nota no es una respuesta. La casilla sigue elegida, así que toca **✎** para dejar de anotar y luego **2** para confirmarlo."},"step6":{"text":"Queda una casilla. Haz clic en ella y pulsa **3** para terminar el cuadrado.","textTouch":"Queda una casilla. Tócala y luego toca **3** en el teclado en pantalla para terminar el cuadrado."},"step7":{"text":"¡Resuelto! **Deshacer** revierte una cifra, y **Resolver** rellena la respuesta si un rompecabezas se te resiste.","textTouch":"¡Resuelto! **Deshacer** revierte una cifra, **Marcas** y **Pista** anotan a lápiz las posibilidades, y **Resolver** rellena la respuesta si un rompecabezas se te resiste."}},"unruly":{"step1":{"text":"Colorea cada casilla de negro o de blanco. Cada fila y columna necesita **tres de cada**, y ningún color puede aparecer **tres veces seguidas**. Aún quedan tres casillas sin decidir."},"step2":{"text":"Esta fila ya tiene sus tres casillas blancas, así que la que falta debe ser negra. **Haz clic izquierdo en ella**: un clic izquierdo pinta de negro."},"step3":{"text":"Esta fila ya tiene tres negras, así que su casilla sin decidir es blanca. **Haz clic derecho en ella**: el clic derecho va en el orden inverso y pinta primero de blanco."},"step4":{"text":"La última casilla sin decidir tiene dos negras a su izquierda, y no se permite una tercera seguida. **Haz clic derecho en ella** para pintarla de blanco y terminar la cuadrícula."},"step5":{"text":"¡Resuelto! Volver a hacer clic en una casilla coloreada la pasa al otro color y luego de vuelta a sin decidir, y **Deshacer** recorre tus movimientos hacia atrás."}},"untangle":{"step1":{"text":"Seis puntos están en un anillo, unidos por ocho líneas. Dos parejas de líneas se cruzan: son las rojas. Arrastra puntos hasta que no quede nada en rojo."},"step2":{"text":"Primero haz clic en **Ajustar**, el botón de la cuadrícula junto a Deshacer (o pulsa **G**). Eso activa la cuadrícula de ajuste, así que un punto que sueltes cae en uno de los puntitos tenues del centro de una casilla."},"step3":{"text":"**Arrastra** el punto de arriba del anillo hasta la casilla vacía de la **esquina superior izquierda**.","textTouch":"**Arrastra** el punto de arriba del anillo hasta el espacio vacío de la **esquina superior izquierda** del tablero. No tiene que caer en un sitio exacto: basta con que desaparezca el cruce."},"step4":{"text":"Queda un cruce, a la derecha. **Arrastra** el punto más bajo hasta la **esquina inferior derecha**, que está vacía.","textTouch":"Queda un cruce, a la derecha. **Arrastra** el punto más bajo hasta la **esquina inferior derecha**, que está vacía: la última línea roja desaparece en cuanto queda libre."},"step5":{"text":"Desenredado. **Resolver** despliega cualquier enredo por ti, y las flechas del teclado mueven un cursor de punto en punto, con Enter para tomar uno y soltarlo.","textTouch":"Desenredado. Las líneas rojas son las que todavía se cruzan, así que sigue arrastrando hasta que no quede ninguna, o deja que **Resolver** despliegue el enredo por ti."}}}'),Fe={$locale:`es`,$name:q,$dir:`ltr`,ui:J,touchPhrases:Y,messages:X,status:Z,games:Q,tutorials:$};export{g as A,ee as B,A as C,S as D,w as E,o as F,i as I,oe as L,f as M,u as N,b as O,c as P,ie as R,M as S,E as T,t as V,H as _,Ee as a,I as b,be as c,me as d,fe as f,W as g,se as h,Oe as i,m as j,v as k,ve as l,ce as m,Me as n,we as o,ue as p,Ae as r,Se as s,Pe as t,ge as u,B as v,O as w,P as x,R as y,ne as z};
//# sourceMappingURL=i18n-es-DcT5OqVA.js.map