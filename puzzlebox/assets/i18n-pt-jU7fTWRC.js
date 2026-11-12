import{t as e}from"./index-DIYwYEVR.js";var t=e({default:()=>n}),n="## Comandos comuns\n\n- **Novo** traz um quebra-cabeça novo e **Reiniciar** volta ao início deste; **Desfazer** e\n  **Refazer** percorrem as suas jogadas, e até um reinício pode ser desfeito.\n- **Resolver** mostra a resposta, quando o quebra-cabeça tem essa opção. Isso conta como uma\n  jogada, que você pode desfazer.\n- Na maioria dos quebra-cabeças, o clique direito faz a segunda ação — marcar, pôr uma\n  bandeira ou girar no sentido contrário. O clique do meio, nos quebra-cabeças que o usam, faz\n  a terceira.\n- **Tipo** alterna entre tamanhos e dificuldades prontos; **Personalizado…** deixa você\n  escolher os seus.\n- **Compartilhar** mostra códigos que você pode enviar para outra pessoa jogar exatamente\n  este quebra-cabeça.\n\n### Teclado (Keyboard)\n\n- **Novo jogo**: `N` · **Desfazer**: `U` ou `Ctrl+Z` · **Refazer**: `R` ou `Ctrl+Y`\n- **Resolver**: `Ctrl+S` (quando disponível). **Esta ajuda**: `?`, e `Esc` fecha. **Pausa**: `Esc`.\n- Na maioria dos quebra-cabeças, as setas movem um cursor pelo tabuleiro, `Enter` funciona\n  como um clique esquerdo nele e `Space` como um clique direito.\n- Nos menus, as setas passam de um cartão ou botão para o próximo, `Enter` escolhe e\n  `Esc` volta.\n- Um controle também funciona: o direcional move, `A` escolhe ou clica, `X` é o clique\n  direito, `B` volta, `Start` pausa, `LB` e `RB` desfazem e refazem, e `Y` dá uma dica.\n  Nos quebra-cabeças em que se escrevem números, `RT` leva às teclas da tela e de volta.\n",ee=e({default:()=>te}),te=`## Em uma tela sensível ao toque

- **Toque** para a ação principal e use o **toque longo** para a segunda. Quando um
  quebra-cabeça tem uma terceira, toque com **dois dedos**.
- O primeiro botão redondo da barra de ferramentas (um ponto dentro de um quadrado) troca as
  duas, para que a ação que você mais usa fique sempre a um toque simples; enquanto estão
  trocadas, ele mostra uma bandeirinha acesa. O toque longo passa a fazer a outra.
- **Faça o movimento de pinça** no tabuleiro para aumentar as casas de uma grade grande e
  depois **arraste com dois dedos** para se mover por ela. Junte os dedos de novo para ver o
  quebra-cabeça inteiro. O menu **Pausa** também oferece esses dois tamanhos como botões.
- **Pausa** guarda o resto dos controles: o tipo de quebra-cabeça, novo quebra-cabeça, reiniciar,
  resolver, compartilhar e as Definições de som e idioma. O relógio para enquanto o menu está aberto.
`,ne=e({default:()=>re}),re=`# Caixa Preta

Algumas bolas estão escondidas dentro de uma caixa sombreada. Em volta da caixa há uma moldura
de entradas de laser. Dispare um laser para dentro da caixa a partir de qualquer entrada e veja o
que sai: descubra pelos resultados onde as bolas têm que estar, marque-as e depois peça para
conferir a sua resposta.

Um feixe segue em linha reta, a não ser que uma bola esteja no caminho:

- Uma bola bem à frente **absorve** o feixe. A entrada mostra **H** (de "hit", acerto).
- Uma bola na diagonal à frente **desvia** o feixe em 90°, para longe da bola. Bolas nas duas
  diagonais fazem o feixe voltar pelo mesmo caminho. Os desvios podem se encadear, então um feixe
  pode dar voltas antes de sair.
- Um feixe que sai pela mesma entrada por onde entrou é **refletido**, e aparece como **R**. O
  mesmo vale para um feixe que seria desviado antes mesmo de entrar na caixa, porque há uma bola
  na diagonal, ao lado da entrada.
- Caso contrário, o feixe sai em outro lugar e as duas entradas recebem o mesmo **número** (e a
  mesma cor), para você ver por onde cada disparo entrou e saiu.

Quando o número certo de bolas estiver marcado, um botão verde aparece no canto superior
esquerdo. Clique nele para conferir. A sua disposição conta como correta se nenhum laser
conseguir diferenciá-la da disposição do computador — com várias bolas, pode haver mais de uma
disposição que se comporta do mesmo jeito, e qualquer uma delas vence.

Uma disposição errada encerra o jogo e mostra a resposta, então só confira quando tiver certeza:
as bolas encontradas ficam pretas, as marcas erradas ficam riscadas em vermelho, as bolas que
faltaram ficam vermelhas, cada laser disparado que a sua disposição erra fica circulado, e os
lasers nunca disparados que teriam diferenciado as duas disposições são disparados agora e
escritos em vermelho. **Desfazer** leva você de volta para continuar tentando. **Resolver**
desiste e coloca as bolas verdadeiras.

## Comandos

A barra de status conta as bolas marcadas e os lasers disparados e, depois de uma conferência,
diz quantas das suas bolas estavam erradas e quantas faltaram.

### Mouse e toque

- **Clique numa entrada** para disparar um laser por ela. Clique numa entrada já disparada para
  acender as duas pontas desse feixe; clique nela de novo, ou em qualquer outro lugar, para
  apagar a luz.
- **Clique dentro da caixa** para marcar uma bola ali; clique de novo para tirar a marca.
- **Clique com o botão direito** numa casa para **travá-la**, para não alterá-la sem querer;
  faça de novo para destravar. Um clique direito numa entrada trava ou destrava a linha ou a
  coluna inteira ao lado dela.
- **Clique no botão do canto** para conferir as suas marcas.

### Teclado (Keyboard)

- **As setas** movem um cursor sobre a caixa e as entradas.
- **Enter** funciona como um clique esquerdo: dispara, marca ou confere, quando o cursor está no
  botão.
- **Espaço** funciona como um clique direito: trava ou destrava.

## Parâmetros

- **Largura** e **altura** da caixa. Cada linha e cada coluna tem uma entrada de laser em cada
  ponta.
- **Nº de bolas**: quantas bolas estão escondidas. Dê um único número, ou um intervalo como
  \`3-6\` para deixar o computador escolher; nesse caso você também precisa descobrir a quantidade,
  e o botão de conferir aparece para qualquer número de marcas dentro do intervalo.
`,ie=e({default:()=>ae}),ae=`# Pontes

Ilhas, cada uma com um número, estão espalhadas pela água. Ligue as ilhas com pontes de modo
que:

- cada ponte vá em linha reta, na horizontal ou na vertical, entre duas ilhas;
- o número de uma ilha seja exatamente a quantidade de pontes que chegam nela;
- duas ilhas possam ser ligadas por pontes paralelas, mas nunca por mais de duas (esse limite
  pode ser mudado em **Personalizado…**);
- nenhuma ponte cruze outra;
- dê para chegar de qualquer ilha a qualquer outra andando pelas pontes.

Os erros aparecem em vermelho: uma ilha com pontes demais, uma ilha que não tem mais como
receber pontes suficientes (as vizinhas que restam estão completas, ou os únicos caminhos estão
bloqueados por outras pontes ou pelas suas próprias marcas de "sem ponte"), e um grupo de ilhas
que já está completo mas isolado do resto. Se os ciclos não forem permitidos, as pontes que
formam um ciclo também ficam vermelhas.

## Comandos

**Resolver** preenche a solução e remove as pontes que não fazem parte dela.

### Mouse e toque

- **Arraste** de uma ilha em direção a uma vizinha para colocar uma ponte entre elas. Basta
  mover o suficiente para deixar a direção clara; a ponte se encaixa na ilha mais próxima
  naquela direção. Arraste de novo para uma segunda ponte paralela; arrastar mais uma vez quando
  o limite já foi atingido remove todas.
- **Arraste com o botão direito** do mesmo jeito para anotar uma marca de "sem ponte aqui", ou
  para apagá-la.
- **Clique** numa ilha para marcá-la como terminada. Ela fica cinza e as pontes dela ficam
  travadas, para você não mexer nelas sem querer; clique de novo para destravar.
- **Apagar** (o botão da borracha ao lado de Desfazer) faz o arrasto remover em vez de
  colocar: arraste de uma ilha em direção a uma vizinha para tirar todas as pontes entre
  elas, ou a marca de "sem ponte" que estiver ali. Aperte de novo para voltar a colocar
  pontes.
- **Guias** mostra linhas claras em todos os lugares por onde uma ponte poderia passar, e as
  esconde de novo.

### Teclado (Keyboard)

- **As setas** movem um cursor de ilha em ilha.
- **Enter** seguido de uma seta coloca uma ponte naquela direção; **Espaço** seguido de uma seta
  coloca uma marca. Apertar **Enter** duas vezes marca a ilha como terminada.
- **E** é o botão **Apagar** e **G** o botão **Guias**.

## Parâmetros

- **Largura** e **altura** da grade, no mínimo 3 cada.
- **Dificuldade**: os quebra-cabeças _Fácil_ só pedem que você olhe uma ilha de cada vez —
  quando as pontes que faltam preenchem exatamente o espaço que sobra, ou quando o número dela é
  grande demais para deixar alguma vizinha de fora. Os _Médio_ também fazem você pensar em
  ligações individuais: qual ponte precisa existir porque a ilha não pode ser completada sem
  ela e, com os ciclos proibidos, quais ligações fechariam um ciclo. Os _Difícil_ pedem que você
  pense um passo à frente: esta ponte completaria um grupo de ilhas isolado do resto, ou
  deixaria alguma ilha sem saída? Todo quebra-cabeça tem exatamente uma solução.
- **Permitir ciclos**: ligado por padrão. Desligado, a rede final de pontes tem que ser uma
  árvore — nenhum caminho de pontes pode voltar ao ponto de partida — e o quebra-cabeça é criado
  para ser resolvido levando isso em conta.
- **Máx. de pontes por direção**: o limite de pontes paralelas, normalmente 2. Menos é mais
  fácil.
- **% de casas com ilhas**: mais ou menos quanto da grade vira ilha. Algumas disposições não
  comportam tantas, então esse é um limite máximo.
- **Fator de expansão (%)**: ao montar o mapa, qual a chance de uma ilha nova ser colocada o
  mais longe possível em vez de mais perto. Valores altos dão quebra-cabeças mais espaçados e
  fáceis; valores baixos dão quebra-cabeças mais apertados.
`,oe=e({default:()=>r}),r=`# Cubo

Um sólido está parado sobre uma grade, e algumas casas da grade estão pintadas de azul —
exatamente tantas quanto o número de faces do sólido. Rolar o sólido faz ele tombar por uma
aresta da face em que está apoiado, e a face seguinte desce sobre a casa vizinha. Sempre que
ele para, a face de baixo e a casa onde caiu trocam de cor: uma face lisa que cai numa casa
azul leva o azul consigo; uma face azul que cai numa casa lisa deixa o azul para trás. O
quebra-cabeça termina quando todas as faces estão azuis ao mesmo tempo. A barra de status
conta as rolagens, então tente terminar com o menor número possível.

A versão clássica rola um cubo numa grade quadrada. Numa grade triangular, dá para rolar um
tetraedro, um octaedro ou um icosaedro. Lembre-se de que cada face de um tetraedro só
consegue alcançar um quarto das casas, e que as faces de um octaedro alternam entre os
triângulos que apontam para cima e os que apontam para baixo — as casas azuis são sempre
colocadas de um jeito que o quebra-cabeça possa ser terminado.

## Comandos

Não há botão Resolver neste quebra-cabeça. Depois que todas as faces estiverem azuis, você
pode continuar rolando o sólido à vontade, sem estragar nada.

### Mouse e toque

- **Clique** em qualquer lugar para rolar o sólido uma casa na direção do ponteiro. Numa
  grade quadrada, isso quer dizer para cima, para baixo, para a esquerda ou para a direita;
  numa grade triangular, o triângulo atual tem três vizinhos para escolher. Um clique
  alcança qualquer vizinho do sólido, então só isso já basta para jogar em qualquer grade.

### Teclado (Keyboard)

- **As setas** rolam o sólido nas quatro direções principais. Numa grade triangular, um
  triângulo só tem vizinho acima ou abaixo, então a outra seta vertical não faz nada.
- **Home**, **Page Up**, **End** e **Page Down** (ou as teclas dos cantos do teclado
  numérico, 7, 9, 1 e 3) rolam na diagonal nas grades triangulares, escolhendo a aresta
  mais próxima daquele lado.

## Parâmetros

- **Tipo de sólido**: tetraedro, cubo, octaedro ou icosaedro. O cubo usa uma grade
  quadrada; os outros usam uma grade de triângulos.
- **Largura / topo** e **Altura / base**: para o cubo, o tamanho da grade quadrada. Nas
  grades triangulares, são os comprimentos dos lados de cima e de baixo de uma arena
  hexagonal (pôr um deles em zero dá um triângulo simples). A grade precisa ter espaço
  para todas as casas azuis e mais uma casa inicial vazia.
`,i=e({default:()=>a}),a=`# Dominosa

Um jogo completo de dominós — um para cada par de números de 0 até o máximo, incluindo as
duplas — foi arrumado para preencher um retângulo. Depois os números foram copiados e os
dominós, retirados. Sua tarefa é descobrir onde eles estavam: divida a grade em pares de
casas vizinhas de modo que cada dominó do jogo seja usado exatamente uma vez.

Um dominó colocado num lugar onde o seu par de números já aparece em outra parte fica
vermelho, e o mesmo acontece com uma casa solta que nenhum dominó consegue mais alcançar.

## Comandos

O quebra-cabeça termina quando todas as casas estão cobertas e nenhum dominó está vermelho.
**Resolver** coloca todos os dominós da solução e apaga o que você tinha colocado.

### Mouse e toque

- **Clique** na divisa entre dois números vizinhos (ou na metade da casa mais perto dessa
  divisa) para colocar um dominó sobre eles. Clique na mesma divisa de novo para tirá-lo.
  Um dominó colocado por cima de parte de outro o substitui.
- **Clique com o botão direito** numa divisa para riscar um traço a lápis sobre ela, como
  lembrete de que esses dois números **não** formam um dominó. Faça um novo clique direito
  para apagar o traço. Não dá para riscar traços encostados num dominó, e colocar um dominó
  apaga os traços que encostam nele.

### Teclado (Keyboard)

- **As setas** movem um cursor pela grade, que para no centro das casas e nas divisas entre
  elas. Numa divisa, o cursor mostra o contorno do dominó que seria colocado ali.
- **Enter** coloca ou tira esse dominó e **Espaço** risca ou apaga um traço ali.

## Parâmetros

- **Número máximo nos dominós**: os dominós vão de 0-0 até N-N, e a grade tem (N+2) casas
  de largura por (N+1) de altura, então um máximo de 6 dá uma grade 8×7.
- **Dificuldade**: quanto raciocínio o quebra-cabeça exige. Os **Muito fácil** só têm dominós com
  um único lugar possível, ou casas que só um dominó consegue cobrir. **Fácil** acrescenta mais
  dois raciocínios: se todas as maneiras de cobrir uma casa usam o mesmo dominó, esse dominó não
  vai para nenhum outro lugar; e se todos os lugares onde um dominó poderia ir excluem certo
  ponto, esse ponto fica descartado. **Difícil** acrescenta contagem (um dominó que isolaria um
  número ímpar de casas é impossível; um grupo de casas com o mesmo número pode reservar os
  dominós que compartilham) e os **Extremo** pedem que você siga as consequências de uma
  colocação até elas entrarem em conflito. Todos esses têm exatamente uma solução. Os **Ambíguo**
  não passam por nenhuma verificação: podem ter várias soluções e exigir chute — qualquer arranjo
  válido já vence.
`,o=e({default:()=>s}),s=`# Quinze

O clássico quebra-cabeça de peças deslizantes. A grade está cheia de peças numeradas e tem
um espaço vazio. Deslize as peças para o espaço até que os números fiquem em ordem, da
esquerda para a direita e de cima para baixo, com o espaço vazio no canto inferior direito.

## Comandos

**Resolver** pula direto para a arrumação final. Não mostra como chegar lá, mas é um jeito
prático de recomeçar do zero para treinar sequências de jogadas.

### Mouse e toque

- **Clique** em qualquer peça na mesma linha ou coluna do espaço vazio para deslizá-la (junto
  com tudo o que estiver entre ela e o espaço) até lá.

### Teclado (Keyboard)

- **As setas** deslizam uma peça para o espaço vazio no sentido da seta: a **seta para cima** faz a peça
  abaixo do espaço subir para ele.

## Parâmetros

- **Largura** e **altura** da grade (o padrão é o clássico 4×4).
`,c=e({default:()=>l}),l=`# Preenchimento

Algumas casas da grade já têm um algarismo; as outras estão vazias. Escreva um algarismo
em cada casa vazia de modo que cada grupo ligado de algarismos iguais cubra exatamente
tantas casas quanto o algarismo diz: todo 3 faz parte de um grupo de três 3, todo 1 fica
sozinho, e assim por diante. As casas só contam como ligadas pelos lados, não pelos
cantos. Por isso nenhuma casa tem 0, dois 1 nunca ficam lado a lado e nenhum grupo passa de
nove casas. Um algarismo dado não precisa ser o começo do seu grupo: vários 4 dados podem
acabar no mesmo grupo, e um grupo pode não ter nenhum algarismo dado.

Linhas grossas aparecem entre casas com algarismos diferentes e ao redor de qualquer grupo
que já tenha o tamanho certo (ou que tenha passado dele). Um algarismo fica vermelho quando
o seu grupo cresce mais do que ele, ou quando fica cercado sem espaço para chegar ao
tamanho certo. Este é o quebra-cabeça publicado pela Nikoli como Fillomino.

## Comandos

Os algarismos dados são desenhados a tinta e não podem ser mudados; os seus aparecem em
azul. **Resolver** preenche a solução.

### Mouse e toque

- **Clique** em uma casa vazia para selecioná-la e depois use o teclado na
  tela para escrever um algarismo nela. **⌫** no teclado na tela esvazia a seleção.
- **Arraste** por várias casas para selecionar todas, e um só algarismo preenche todas as
  casas selecionadas de uma vez.
- Um **clique direito** acrescenta uma casa à seleção sem recomeçar; um segundo
  clique direito numa casa selecionada a tira da seleção.
- **Preencher** (o botão ao lado de Desfazer) espalha um algarismo: arraste de uma casa que
  já tem um pelas casas em volta, e todas recebem esse algarismo quando você soltar, sem
  precisar do teclado na tela. Cliques e arrastos que começam numa casa vazia continuam
  selecionando. Aperte de novo para voltar a selecionar.

### Teclado (Keyboard)

- Com uma ou mais casas selecionadas, **digite um algarismo** para escrevê-lo em todas. O
  \`0\`, ou **Backspace**, esvazia todas de novo.
- **As setas** movem um cursor, e um algarismo digitado preenche a casa sob ele.
- **Espaço** ou **Enter** põe ou tira da seleção a casa sob o cursor, para que várias
  casas possam ser preenchidas com uma só tecla.
- **F** é o botão **Preencher**.

## Parâmetros

- **Largura** e **Altura**: o tamanho da grade. Os grupos nunca são maiores que o lado
  mais comprido (ou 9), então grades pequenas usam só algarismos pequenos.
`,u=e({default:()=>d}),d=`# Inverter

Uma grade de casas, algumas acesas e outras apagadas. O objetivo é acender todas ao mesmo
tempo. Apertar uma casa a inverte entre acesa e apagada, mas também inverte algumas das
vizinhas: o pequeno diagrama desenhado em cada casa mostra exatamente quais. Com as formas
**Cruzes** (o padrão), cada toque inverte a casa e as suas quatro vizinhas de lado; com as
formas **Aleatório**, cada casa tem o seu próprio padrão irregular, então o quebra-cabeça
muda a cada partida.

Como apertar a mesma casa duas vezes anula o efeito, e a ordem nunca importa, uma solução é
só um conjunto de casas para apertar uma vez cada.

## Comandos

A barra de status conta quantas casas você apertou. **Resolver** acende o tabuleiro inteiro
e contorna em vermelho as casas que apertou para chegar lá. Se você continuar apertando
casas depois disso, os contornos vermelhos mostram quais casas ainda precisam ser apertadas
para voltar à solução.

### Mouse e toque

- **Clique** em uma casa para apertá-la.

### Teclado (Keyboard)

- **As setas** movem um cursor pela grade; **Enter** ou **Espaço** aperta a casa sob o
  cursor.

## Parâmetros

- **Largura** e **altura** da grade, de 2 a 10 casas por lado.
- **Tipo de forma**: _Cruzes_ inverte cada casa junto com as vizinhas de lado;
  _Aleatório_ dá a cada casa uma forma sorteada dentro do bloco 3×3 ao redor dela.
`,f=e({default:()=>p}),p=`# Inundação

A grade é uma colcha de retalhos de casas coloridas ao acaso. Você controla a casa do
canto superior esquerdo, junto com todas as casas ligadas a ela por um caminho da mesma
cor. Cada jogada repinta essa mancha inteira com a cor que você escolher, e as casas
vizinhas dessa cor passam a fazer parte da mancha também. Continue até a grade inteira
ficar de uma cor só.

O desafio é o limite de jogadas. Antes de você começar, o jogo resolve a grade sozinho e
te dá a contagem de jogadas dele mais algumas de sobra; se o limite acabar antes de a grade
ficar de uma cor só, a rodada está perdida. Você ainda pode continuar pintando para ver a
grade completa, mas isso não conta mais como vitória.

## Comandos

A barra de status mostra quantas jogadas você já usou do limite. **Resolver** deixa o
computador terminar a grade por você; isso conta como resolução automática, não como
vitória sua.

### Mouse e toque

- **Clique** em qualquer casa de cor diferente da sua mancha para repintar a mancha com
  essa cor. Um clique em uma casa da mesma cor não faz nada e não gasta jogada.
- **Dica** joga por você a próxima cor escolhida pelo computador, como uma jogada comum que
  você pode desfazer. Algumas dicas não tiram de você a vitória nem o crédito por ela.

### Teclado (Keyboard)

- **As setas** movem um cursor pela grade; **Enter** ou **Espaço** repinta a mancha com a
  cor sob o cursor.

## Parâmetros

- **Largura** e **altura** da grade, até 32 casas por lado.
- **Cores**: quantas cores a grade usa, de 3 a 10. Menos cores significam menos opções e
  um jogo mais fácil.
- **Jogadas extras permitidas**: quantas jogadas de sobra são somadas à solução do
  computador para formar o limite. Com 0, você precisa ser pelo menos tão eficiente quanto
  ele; ele é bom, mas não perfeito, então dá para bater a contagem dele.
`,m=e({default:()=>h}),h=`# Galáxias

A grade está salpicada de pontos, que podem ficar no meio de uma casa, sobre a linha entre
duas casas ou num canto onde quatro casas se encontram. Desenhe paredes ao longo das linhas
da grade para dividi-la em regiões, de modo que cada região tenha exatamente um ponto e que
esse ponto seja o centro de simetria da região: girando a região 180° em torno do ponto,
ela precisa cair exatamente sobre si mesma. Toda casa tem que acabar em alguma região,
então nenhuma região pode ficar sem ponto.

Os quebra-cabeças são gerados ao acaso e têm solução única. É o "Tentai Show" da Nikoli,
também conhecido como Spiral Galaxies.

## Comandos

Uma região fechada e correta — um ponto, no seu centro de simetria, sem paredes soltas
dentro — fica sombreada. Um ponto fica vermelho quando uma parede passa por cima dele, ou
quando ele é o único ponto de uma região fechada que não é simétrica em relação a ele; uma
região fechada sem nenhum ponto fica hachurada. O quebra-cabeça está completo quando todas
as casas estão sombreadas. **Resolver** desenha a solução completa.

### Mouse e toque

- **Clique** em uma linha da grade para desenhar uma parede ali, ou clique em uma parede
  para apagá-la.
- **Arraste a partir de um ponto** até uma casa para deixar ali uma setinha apontando de volta
  para o ponto, como lembrete de que a casa pertence à galáxia daquele ponto.
- **Arraste com o botão direito** uma seta que já existe para movê-la. Solte-a de volta
  sobre o ponto dela, ou arraste-a para fora da grade, para descartá-la; solta numa casa que
  já tem uma seta, ela toma o lugar dessa seta.

### Teclado (Keyboard)

- **As setas** movem um cursor por casas, linhas e cantos.
- **Enter** sobre uma linha desenha ou apaga a parede; **Enter** sobre um ponto pega uma
  seta, que segue o cursor até você apertar **Enter** de novo para soltá-la.

## Parâmetros

- **Largura** e **altura** da grade, no mínimo 3 cada. As predefinições vão de 7×7 a
  15×15.
- **Dificuldade** — os quebra-cabeças _Médio_ podem ser resolvidos passo a passo a partir do que
  a regra da simetria obriga; os _Extremo_ podem exigir que você teste uma suposição e veja aonde
  ela leva.
`,g=e({default:()=>_}),_=`# Palpite

O computador escondeu uma fileira de pinos coloridos atrás do escudo no topo do tabuleiro. Sua
missão é reproduzi-la exatamente, usando só as marcas que cada palpite recebe: um pino **preto**
para cada pino da cor certa no lugar certo, e um pino **vazado** para cada pino a mais cuja cor
aparece em outro lugar da fileira escondida. As marcas dizem _quantos_ pinos estavam certos, não
_quais_. Descubra a fileira antes de os palpites acabarem e o escudo se levanta; se eles
acabarem, o escudo se levanta mesmo assim, para mostrar o que faltou.

É o jogo vendido pela Hasbro como _Mastermind_ (no Brasil, também conhecido como _Senha_): seis
cores, quatro pinos e dez palpites. Todas as opções podem ser alteradas.

## Comandos

**Resolver** levanta o escudo e mostra a resposta; isso encerra o jogo, como acontece quando os
palpites acabam.

### Mouse e toque

- **Clique** numa cor na bandeja à esquerda para selecioná-la (o anel mostra qual) e depois
  **clique num buraco** da fileira atual para colocar ali um pino dessa cor. Um clique num pino
  de um palpite anterior também seleciona a cor dele.
- **Arraste** um pino da bandeja, de um palpite anterior ou da fileira atual até um buraco.
  Arrastar um pino para fora da fileira atual e soltá-lo em qualquer outro lugar o remove.
- **Clique com o botão direito** num buraco para esvaziá-lo.
- Quando a fileira estiver completa, a pequena área de marcação à direita dela acende: **clique
  nela** para enviar o palpite.
- **Clique com o botão do meio** num buraco para _fixar_ aquele pino: um pino fixado passa para o
  próximo palpite depois da avaliação, o que poupa você de remontar os pinos em que já confia.
  Faça de novo para soltar o pino.
- **Fixar** (o botão ao lado de Desfazer) faz o mesmo com um clique simples: enquanto ele
  estiver ligado, clicar num buraco da fileira atual fixa ou solta o pino dele em vez de
  colocar uma cor. Clique na bandeja para trocar de cor como sempre; aperte **Fixar** de
  novo para voltar a colocar pinos.
- **Letras**, no menu de pausa, escreve uma letra em cada pino, caso algumas cores pareçam
  iguais para você, e apaga as letras de novo.

### Teclado (Keyboard)

- **Setas**: para cima e para baixo escolhem uma cor na bandeja; para a esquerda e para a
  direita movem um cursor pela fileira atual e, quando ela está completa, até a área de
  marcação.
- **Enter** ou **Espaço** coloca a cor selecionada no buraco sob o cursor, ou envia o palpite
  quando o cursor está na área de marcação.
- **Backspace** ou \`D\` esvazia o buraco sob o cursor.
- \`H\` fixa ou solta o pino sob o cursor.
- \`K\` é o botão **Fixar** e \`L\` o botão **Letras**.

## Parâmetros

- **Cores**: de quantas cores diferentes a fileira escondida pode ser feita, de 2 a 10. Mais
  cores deixam a fileira mais difícil de descobrir.
- **Pinos por palpite**: o tamanho da fileira escondida.
- **Palpites**: quantas tentativas você tem.
- **Permitir vazios**: deixa você deixar buracos vazios num palpite. Um buraco vazio nunca
  acerta, então isso facilita sondar as cores. A fileira escondida nunca tem vazios.
- **Permitir repetições**: deixa a fileira escondida (e os seus palpites) usar uma cor mais de
  uma vez. Desligar essa opção reduz bastante o número de fileiras possíveis.
`,v=e({default:()=>y}),y=`# Inércia

Você é uma bola numa grade cheia de obstáculos e quer pegar todas as gemas do tabuleiro.
O nome já entrega o truque: depois que a bola começa a rolar, ela não para até que algo a
pare. Ela passa direto pelas gemas (coletando-as no caminho) e pelas casas vazias, e só
para quando a próxima casa é uma parede ou quando cai em uma parada. As jogadas na
diagonal passam espremidas entre duas paredes que só se tocam pelo canto. Rolar para cima
de uma mina é fatal, mesmo que a mesma jogada tenha coletado a última gema.

Todo quebra-cabeça é gerado de modo que todas as gemas possam ser coletadas a partir da
casa inicial, mas nada impede que você role para um canto do tabuleiro de onde alguma gema
não pode mais ser alcançada. Morrer ou ficar preso não tem outra penalidade além de um
contador de mortes na barra de status: é só desfazer e tentar outro caminho.

## Comandos

Use **Desfazer** depois de bater numa mina para continuar de antes da jogada fatal.
**Resolver** calcula, a partir de onde você está, um trajeto que coleta todas as gemas que
faltam e depois rola a bola por ele para você; **Desfazer** volta o trajeto inteiro de uma
vez.

### Mouse e toque

- **Clique** em uma casa e a bola sai na direção dessa casa em relação a ela, arredondada
  para a mais próxima das oito direções da rosa dos ventos — diagonais incluídas. Um clique
  na margem, fora da grade, também funciona, o que ajuda quando a bola está numa borda.

### Teclado (Keyboard)

- **As setas** rolam a bola para cima, para baixo, para a esquerda ou para a direita.
- **Home**, **Page Up**, **End** e **Page Down** a rolam na diagonal (cima-esquerda,
  cima-direita, baixo-esquerda, baixo-direita). O teclado numérico funciona do jeito que
  parece: 8 é para cima, 3 é baixo-direita, e assim por diante; a fileira de números em
  cima das letras faz o mesmo.

## Parâmetros

- **Largura** e **altura** da grade. Cerca de um quinto das casas são paredes, um quinto
  paradas, um quinto minas e um quinto gemas.
`,b=e({default:()=>x}),x=`# Keen

Preencha a grade com algarismos de 1 até o tamanho dela, de modo que cada linha e cada coluna
tenha cada algarismo exatamente uma vez. A grade também é dividida em "gaiolas" de contorno
grosso, cada uma com uma pequena pista na casa do canto superior esquerdo: um resultado e um
sinal de operação. Os algarismos da gaiola precisam dar esse resultado com essa operação:

- \`7+\` quer dizer que os algarismos da gaiola somam 7.
- \`12×\` quer dizer que, multiplicados, eles dão 12.
- \`2−\` aparece sempre numa gaiola de duas casas e quer dizer que um algarismo é 2 a mais que o
  outro (em qualquer ordem).
- \`3÷\` também aparece sempre em duas casas e quer dizer que um algarismo é 3 vezes o outro.

Ao contrário do modo Killer do Solo, uma gaiola _pode_ ter o mesmo algarismo duas vezes, desde
que os dois não estejam na mesma linha ou coluna. Não há algarismos dados; as pistas são tudo o
que você tem, e todo quebra-cabeça tem exatamente uma solução. É o quebra-cabeça publicado como
KenKen.

## Comandos

Um algarismo que aparece duas vezes na mesma linha ou coluna fica vermelho, assim como a pista de
uma gaiola totalmente preenchida que não dá o resultado certo. **Resolver** preenche a solução.

### Mouse e toque

- **Clique** numa casa para selecioná-la e use o teclado na tela para escrever um algarismo. Um
  segundo clique na casa selecionada tira a seleção.
- **⌫** no teclado na tela esvazia de novo a casa selecionada, e **✎** ativa as **anotações a
  lápis**: o que você escolher entra como uma pequena nota, e o mesmo algarismo de novo apaga
  essa nota. As anotações a lápis servem só para ajudar a pensar; preencher um algarismo apaga
  todas.
- **Clique com o botão direito** numa casa vazia para selecioná-la direto para anotações a
  lápis.
- **Marcas**, no menu de pausa, preenche cada casa vazia com todas as anotações a lápis
  possíveis.
- **Destacar** (a lupa ao lado de Desfazer) destaca todas as casas com o mesmo algarismo da
  última casa em que você clicou, e mostra esse algarismo em negrito entre as anotações a
  lápis. Aperte de novo para desligar.

### Teclado (Keyboard)

- **Digite um algarismo** para preencher a casa selecionada, ou para anotá-lo ali quando a casa
  estiver selecionada para anotações a lápis.
- **Espaço** ou **Backspace** limpa a casa selecionada (o algarismo ou todas as anotações).
- **As setas** movem um cursor, e os algarismos digitados vão para a casa sob ele.
- **Enter** alterna o cursor entre a entrada normal e a de anotações a lápis.
- **M** é o botão **Marcas** e **L** o botão **Destacar**.

## Parâmetros

- **Tamanho do tabuleiro**: de 3 a 9. Algarismos acima de 9 seriam pouco práticos, por isso 9 é
  o limite.
- **Dificuldade**: o tipo de raciocínio mais difícil que o quebra-cabeça exige. _Fácil_ só pede
  que você descubra quais algarismos podem aparecer numa gaiola; _Médio_ pede que você acompanhe
  em que casa da gaiola cada algarismo poderia ficar; _Difícil_ acrescenta raciocínio entre
  gaiolas (os algarismos que uma gaiola obriga a colocar numa linha não podem aparecer em outro
  ponto dessa linha) e grupos de casas que ficam com um grupo de algarismos só para si;
  _Especialista_ acrescenta cadeias de dedução; e os _Extremo_ não podem ser terminados sem
  chutar e voltar atrás. Quebra-cabeças mais difíceis demoram mais para gerar, e as grades 3×3
  nunca passam de Médio.
- **Só multiplicação**: toda pista é um produto, o que elimina as gaiolas fáceis de duas casas e
  dá um quebra-cabeça bem diferente.
`,S=e({default:()=>C}),C=`# Luzes

Uma grade de casas brancas e pretas. Coloque lâmpadas nas casas brancas de modo que todas as
casas brancas fiquem iluminadas. Uma lâmpada ilumina a própria casa e brilha ao longo da linha e
da coluna dela até uma casa preta ou a borda bloquear a luz. No fim, três coisas precisam valer:

- todas as casas brancas estão iluminadas;
- nenhuma lâmpada é iluminada por outra, ou seja, duas lâmpadas nunca se veem ao longo de uma
  linha ou coluna;
- uma casa preta com número tem exatamente essa quantidade de lâmpadas nas casas logo acima,
  abaixo, à esquerda e à direita dela. As casas pretas sem número podem ter qualquer quantidade
  de lâmpadas ao lado.

As casas iluminadas ficam amarelas. Lâmpadas que iluminam umas às outras ficam vermelhas, e o
mesmo acontece com um número que não tem mais como ser satisfeito: ou já tem lâmpadas demais ao
lado, ou não sobra mais espaço para as que faltam.

## Comandos

O quebra-cabeça termina quando a grade inteira brilha e nada aparece em vermelho. **Dica**
coloca uma única lâmpada — ou retira uma que não faz parte da resposta — e deixa o resto com
você; o quebra-cabeça continua em jogo, e com poucas dicas a vitória, e o crédito, continuam
seus. **Resolver** coloca as lâmpadas de uma solução completa e mantém os X que você desenhou.

### Mouse e toque

- **Clique** numa casa branca para colocar uma lâmpada, e de novo para tirá-la.
- **Clique com o botão direito** numa casa branca para marcar com um X, que quer dizer "aqui não
  pode ter lâmpada"; faça isso de novo para apagar o X. Uma casa com X não aceita lâmpada até o X
  sair, e uma casa com lâmpada não pode ser marcada com X.
- **Marcar** (o botão do X ao lado de Desfazer) faz um clique simples pôr ou apagar um X em
  vez de uma lâmpada, para quando você estiver descartando muitas casas de uma vez. Aperte
  de novo para voltar às lâmpadas.

### Teclado (Keyboard)

- **As setas** movem um cursor pela grade.
- **Enter** coloca ou tira uma lâmpada sob o cursor, e **Espaço** (ou **I**) coloca ou tira um
  X ali.
- **X** é o botão **Marcar**.

## Parâmetros

- **Largura** e **altura** da grade.
- **% de casas pretas**: mais ou menos quanto da grade é preto. É uma indicação, não uma
  garantia: se não der para criar um quebra-cabeça com essa densidade, o gerador usa algumas
  casas pretas a mais.
- **Simetria**: o padrão que as casas pretas seguem — nenhum, espelho ou rotação entre duas
  metades, ou espelho ou rotação em quatro partes. A rotação em 4 direções exige uma grade
  quadrada.
- **Dificuldade**: os quebra-cabeças _Fácil_ saem com raciocínio sobre uma casa de cada vez,
  decidindo quais casas precisam ou não podem ter lâmpada. Os _Médio_ pedem que você compare
  grupos de casas entre si ("uma destas três tem que ser lâmpada, e isso descarta esta aqui"). Os
  _Difícil_ podem exigir testar uma lâmpada em algum lugar e seguir as consequências até algo dar
  errado. Todo quebra-cabeça tem exatamente uma solução.
`,w=e({default:()=>T}),T=`# Laços

Uma grade de pontos, com um número em alguns dos espaços entre eles. Desenhe um único laço
fechado sobre as linhas claras entre os pontos, de modo que:

- cada espaço numerado tenha exatamente essa quantidade de lados no laço;
- o laço nunca se cruze nem encoste em si mesmo — cada ponto tem duas linhas ou nenhuma —
  e exista um só laço, sem pontas soltas nem pedaços separados.

A versão clássica usa quadrados, mas o mesmo quebra-cabeça funciona com triângulos,
hexágonos e uma dúzia de mosaicos mais estranhos, onde os números podem passar bem de 4.

Linhas que formam um laço errado, ou que se encontram em três num mesmo ponto, ficam
vermelhas; um número com linhas demais em volta, ou com poucos lados possíveis sobrando,
também fica vermelho. Um número fica cinza assim que tem exatamente a quantidade certa de
linhas.

## Comandos

**Resolver** desenha o laço inteiro. O quebra-cabeça termina assim que o laço está completo
e todos os números estão cumpridos; riscar os lados não usados é opcional.

### Mouse e toque

- **Clique** numa linha clara para desenhar um traço nela; clique no traço de novo para
  apagá-lo.
- **Clique com o botão direito** num lado para riscá-lo, marcando que ele com certeza não
  faz parte do laço; faça outro clique direito para limpar a marca. Tanto o clique quanto o
  clique direito também limpam a marca feita pelo outro.
- **Riscar** (o botão do X ao lado de Desfazer) faz um clique simples riscar um lado, ou
  limpar o risco, em vez de desenhar um traço. Aperte de novo para voltar a desenhar traços.

### Teclado (Keyboard)

- **As setas** movem um cursor de lado em lado; **Enter** desenha ou apaga um traço no lado
  sob o cursor e **Espaço** risca o lado ou limpa o risco.
- **X** é o botão **Riscar**.

## Parâmetros

- **Largura** e **altura** da grade, contadas em unidades do mosaico. Na grade de
  quadrados, é simplesmente o número de casas na horizontal e na vertical; os outros
  mosaicos contam as unidades que se repetem, então o número real de faces varia.
- **Tipo de tabuleiro**: _Quadrados_, _Triangular_ e _Favo de mel_ são os mosaicos
  regulares. _Quadrado romo_, _Cairo_, _Grande hexagonal_, _Octogonal_, _Papagaios_,
  _Floral_, _Dodecagonal_ e _Grande dodecagonal_ misturam formas, e os dois mosaicos de
  _Penrose_ nunca se repetem.
- **Dificuldade**: os quebra-cabeças _Fácil_ só exigem as próprias regras — contar as linhas em
  volta de um número, lembrar que um ponto tem duas linhas ou nenhuma e não fechar o laço antes
  da hora. _Médio_ acrescenta raciocínios sobre pares de lados que se encontram num ponto (no
  máximo um, ou pelo menos um, do par é linha). _Difícil_ deixa essas conclusões se encadearem de
  ponto em ponto, como numa sequência diagonal de 2. _Especialista_ também acompanha lados que se
  sabe serem iguais ou opostos entre si. Nunca é preciso chutar; cada quebra-cabeça tem
  exatamente uma solução.
`,E=e({default:()=>D}),D=`# Ímãs

Um retângulo foi coberto por dominós, mostrados só pelo contorno. Cada dominó é um ímã — uma
metade é o polo \`+\`, a outra o polo \`−\` — ou é vazio, sem polo nenhum. Os números em volta da
borda dizem quantos polos \`+\` (acima das colunas e à esquerda das linhas) e quantos polos \`−\`
(abaixo das colunas e à direita das linhas) há em cada linha e coluna; sem número, não há pista
para aquela linha ou coluna. Preencha todos os dominós de modo que todas as contagens batam e
dois polos iguais nunca fiquem lado a lado: \`+\` nunca pode tocar \`+\` e \`−\` nunca pode tocar \`−\`
na divisa entre dois dominós. Os dominós vazios são neutros e podem ficar ao lado de qualquer
coisa.

Polos iguais que se tocam aparecem em vermelho. Uma contagem fica vermelha quando não tem mais
como ser atendida — polos demais, ou de menos e sem lugar para pôr mais — e fica cinza assim que
é atendida exatamente. O quebra-cabeça termina quando todos os dominós estão preenchidos, todas
as contagens batem e nada está em vermelho.

## Comandos

### Mouse e toque

- **Clique** numa metade vazia de um dominó para torná-la o polo \`+\` (a outra metade vira \`−\`).
  Clique de novo na mesma metade para inverter o ímã, e uma terceira vez para esvaziar o dominó.
  Clicar num dominó vazio não faz nada.
- **Clique com o botão direito** num dominó sem marcação para marcá-lo como vazio. Faça isso de
  novo para trocar a marca por pontos de interrogação, um lembrete de que o dominó com certeza é
  um ímã; uma terceira vez tira a marcação. Um clique direito num ímã não faz nada.
- **Vazio** (o dominó sombreado ao lado de Desfazer) faz um clique simples fazer o mesmo que
  o clique direito: marcar um dominó como vazio, depois com pontos de interrogação, depois
  sem marcação de novo. Aperte de novo para voltar a colocar ímãs.
- **Resolver** preenche a solução inteira.

### Teclado (Keyboard)

- **As setas** movem um cursor pela grade.
- **Enter** faz a metade sob o cursor passar por \`+\`, \`−\` e sem marcação, como um
  clique esquerdo.
- **Espaço** faz o dominó sob o cursor passar por vazio, ponto de interrogação e sem marcação,
  como um clique direito.
- **B** é o botão **Vazio**.

## Parâmetros

- **Largura** e **altura** da grade. Quando a área é ímpar, sobra uma casa, desenhada com
  hachuras; ela não pertence a nenhum dominó e conta como neutra.
- **Dificuldade**: os quebra-cabeças _Fácil_ só pedem que você olhe para uma linha ou um dominó
  de cada vez — uma contagem que já foi atendida, uma contagem que precisa de todos os candidatos
  que restam, ou um dominó em que nenhuma das metades aceita um certo polo. Os _Difícil_ também
  pedem raciocinar sobre dominós inteiros deitados ao longo de uma linha: um dominó que precisa
  ser ímã fornece um polo de cada tipo, seja qual for o sentido; uma linha que só pode ter mais
  uma casa vazia não comporta um dominó vazio deitado ao longo dela; e assim por diante. Todo
  quebra-cabeça tem exatamente uma solução.
- **Retirar pistas**: remove todas as contagens que não são necessárias para resolver o
  quebra-cabeça na dificuldade escolhida, o que deixa bem mais difícil saber por onde começar.
`,O=e({default:()=>k}),k=`# Mapa

Um mapa está dividido em regiões. Pinte cada região com uma de quatro cores, de modo que duas
regiões que compartilham um trecho de fronteira nunca tenham a mesma cor. Regiões que só se
tocam pelo canto podem ser iguais. Algumas regiões já vêm pintadas, escolhidas para que exista
exatamente uma maneira de terminar o mapa.

Duas regiões vizinhas da mesma cor ganham um \`!\` vermelho na fronteira entre elas.

## Comandos

**Resolver** pinta a solução completa. O mapa pisca quando todas as regiões estão pintadas e
nada está em vermelho.

### Mouse e toque

- **Arraste** uma cor: pressione sobre uma região (ou sobre uma das amostras abaixo do mapa) e
  solte sobre outra região para dar essa cor a ela. Arrastar a partir de uma região em branco,
  do espaço vazio em volta do mapa ou da amostra da borracha limpa a região onde você soltar.
- **Clique em uma amostra** para escolher uma cor e depois **clique** nas regiões para
  pintá-las; clique de novo na amostra escolhida para cancelar a escolha.
- **Arraste com o botão direito** uma cor até uma região em branco para anotar a lápis um pontinho dessa cor,
  indicando que a região _pode_ ser dessa cor. Uma região pode ter vários pontinhos; arrastar
  a mesma cor de novo remove o pontinho dela. Com uma amostra escolhida, um simples
  **clique direito** em uma região em branco põe ou tira o pontinho.
- **Números** (no menu de pausa) mostra um número em cada região, prático para conversar
  sobre um quebra-cabeça com outra pessoa, e os esconde de novo.

### Teclado (Keyboard)

- **As setas** movem um cursor pelo mapa; a região em que ele está fica contornada. As teclas
  **1**–**4** pintam essa região, **Espaço** a limpa e **Enter** pega a cor dela, para você
  levá-la com as setas e soltá-la com **Enter** (ou como pontinho, com **Espaço**).
  Pressionar **Enter** duas vezes sem se mover limpa a região.
- **L** é o botão **Números**.

## Parâmetros

- **Largura** e **altura** da grade sobre a qual o mapa é desenhado, em casas.
- **Regiões**: em quantas regiões o mapa é dividido.
- **Dificuldade**: nos quebra-cabeças _Fácil_ sempre há uma região que só tem uma cor possível.
  _Médio_ acrescenta raciocínio sobre pares de regiões vizinhas que precisam dividir entre si as
  mesmas duas cores. _Difícil_ pede cadeias dessas deduções pelo mapa todo. Todos esses podem ser
  resolvidos sem chutar. _Extremo_ só garante que a solução é única; pode ser preciso testar uma
  cor e seguir com ela até algo dar errado.
`,A=e({default:()=>j}),j=`# Campo Minado

Uma grade de casas cobertas esconde uma certa quantidade de minas. Descubra todas as casas que
_não_ têm mina. Cada casa aberta mostra quantas das suas oito vizinhas são minas; abra uma
mina e você perde.

A graça desta versão é que você nunca precisa chutar. Nada é decidido antes do seu primeiro
clique: só então as minas são distribuídas, de modo que a casa clicada fique vazia e a grade
inteira possa ser resolvida dali em diante por pura dedução. Se em algum momento parecer que
não há saída, sempre existe em algum lugar uma casa segura que os números já provam.

A barra de status mostra quantas bandeiras você colocou em relação ao número de minas, e o
relógio começa no seu primeiro clique. Pisar numa mina revela todas as outras e risca as
bandeiras que estavam erradas; dá para **Desfazer** o clique fatal e continuar, mas a morte
fica registrada na barra de status.

## Comandos

### Mouse e toque

- **Clique** em uma casa coberta para abri-la. Abrir uma casa vazia (sem minas vizinhas) abre
  também as vizinhas dela, e assim por diante.
- **Clique com o botão direito** em uma casa coberta para pôr uma bandeira em uma mina suspeita, e de novo para
  tirá-la. Casas com bandeira não podem ser abertas sem querer.
- **Clique em um número** que já tenha em volta a quantidade certa de bandeiras para abrir de
  uma vez todas as outras vizinhas cobertas. Um **clique do meio** nesse número faz o mesmo.
- **Dica** abre uma casa segura — ou tira uma bandeira que não tem mina embaixo — e deixa o
  resto da grade com você. Com poucas dicas, a vitória, e o seu crédito, continuam seus.
- **Resolver** revela todas as minas e põe uma bandeira em cada uma. Isso não conta como uma
  vitória sua.

### Teclado (Keyboard)

- **As setas** movem um cursor pela grade.
- **Enter** funciona como um clique esquerdo na casa sob o cursor: abre uma casa coberta, ou
  abre as vizinhas de um número cujas bandeiras já estão todas no lugar.
- **Espaço** põe ou tira uma bandeira, como um clique direito.

## Parâmetros

- **Largura** e **altura** da grade.
- **Minas**: quantas minas esconder. Em vez de uma quantidade, você pode dar uma porcentagem,
  como \`20%\`. Densidades muito altas deixam lenta a busca por grades com solução.
- **Garantir solução**: quando ligado (o padrão), a disposição tem solução garantida a
  partir do primeiro clique, sem chutar. Desligue para ter grades aleatórias comuns, que
  podem deixar você num cara ou coroa no final.
`,M=e({default:()=>N}),N=`# Rede

Uma rede de fios foi estendida sobre uma grade de peças quadradas e depois cada peça foi
girada ao acaso. Gire as peças de volta até que todas formem uma única rede: cada ponta de
fio precisa encontrar um fio na peça vizinha, e nenhum fio pode ficar apontando para uma
parede. A rede pronta é uma árvore, então não tem laços fechados.

As peças já ligadas à peça central, a fonte, aparecem em azul, como guia; as outras ficam
cinza. Um fio que faz parte de um laço aparece em vermelho. As linhas pretas grossas entre
as peças são barreiras: nenhum fio passa por elas, o que dá uma pista de como as peças dos
dois lados precisam ficar. A barra de status mostra quantas peças estão com energia no
momento.

## Comandos

### Mouse e toque

- **Clique** numa peça para girá-la no sentido anti-horário; **clique com o botão direito**
  para girá-la no sentido horário.
- **Clique com o botão do meio** numa peça para **travá-la** quando tiver certeza dela. Uma
  peça travada fica sombreada e não gira até outro clique do meio destravá-la. O
  clique direito gira a peça em vez de travá-la, então o clique do meio é o jeito de travar.
- **Travar** (o botão do cadeado ao lado de Desfazer) faz um clique simples travar ou
  destravar uma peça em vez de girá-la, o que é mais fácil que um clique do meio num
  trackpad. O clique direito continua girando a peça no sentido horário. Aperte de novo para
  voltar a girar.
- **Misturar** gira todas as peças destravadas para uma nova posição ao acaso, para mudar
  de ares quando você empacar.
- Numa grade contínua, os quatro **botões de seta** deslocam a vista, para que peças de
  bordas opostas fiquem lado a lado.

### Teclado (Keyboard)

- **As setas** movem um cursor pela grade.
- **Enter** ou **A** gira a peça sob o cursor no sentido anti-horário, **D** gira no
  sentido horário e **F** dá meia-volta.
- **Espaço**, **S** ou **L** trava ou destrava a peça sob o cursor. Com o mouse,
  **Shift+clique** também trava uma peça, igual ao clique do meio.
- **K** é o botão **Travar** e **J** o botão **Misturar**.
- Numa grade contínua, **Shift + setas** deslocam a vista (igual aos quatro botões de
  seta), para que peças de bordas opostas apareçam lado a lado. **Ctrl + setas** movem a
  peça-fonte, a partir da qual o destaque azul se espalha.

## Parâmetros

- **Largura** e **altura** da grade, em peças.
- **Bordas contínuas**: os fios podem sair por uma borda da grade e continuar pela borda
  oposta.
- **Probabilidade de barreiras**: um número de 0 a 1 que indica a fração das divisas sem
  fio que recebem uma barreira. As barreiras nunca mudam o traçado dos fios: a mesma
  semente aleatória sempre gera a mesma grade, então aumentar a probabilidade só
  acrescenta pistas.
- **Garantir solução única**: normalmente o quebra-cabeça é montado de modo que só uma
  disposição das peças funcione. Desligue para gerar mais rápido, com um ou outro trecho
  ambíguo de vez em quando.
`,P=e({default:()=>F}),F=`# Rede Deslizante

Cada peça tem um pedaço de fiação: um trecho reto, uma curva, uma junção em T ou uma ponta
solta com um ponto. Bem montadas, as peças formam uma única rede que, a partir da fonte de
energia na peça central sombreada, chega a todas as peças, sem laços e sem braços apontando
para o nada. A grade foi embaralhada deslizando linhas e colunas inteiras, e só assim dá para
arrumá-la: nenhuma peça gira, só se move.

As peças que estão recebendo energia aparecem em azul; as outras ficam cinza. As paredes
pretas grossas entre as peças são barreiras. Nada se liga através de uma barreira, então elas
mostram onde a rede final com certeza não tem ligação.

## Comandos

### Mouse e toque

- **Clique** em uma seta ao lado de uma linha ou coluna para deslizar essa linha inteira uma
  casa no sentido da seta. A peça empurrada para fora de uma ponta volta a entrar pela outra
  ponta. **Clique com o botão direito** em uma seta para deslizar no sentido contrário.
- A linha e a coluna centrais não têm setas: a fonte de energia nunca se move.
- **Resolver** pula direto para a rede pronta, para você comparar com a sua tentativa.

### Teclado (Keyboard)

- **As setas** movem um destaque pelo anel de setas.
- **Enter** desliza a linha destacada no sentido da seta dela e **Espaço** desliza no sentido
  contrário.

## Parâmetros

- **Largura** e **altura** da grade.
- **Bordas contínuas**: quando ligado, a borda direita continua na esquerda e a de baixo na de
  cima, então a fiação (e as barreiras) pode atravessar a borda da grade. A moldura tracejada
  indica uma grade contínua; uma moldura grossa e sólida é uma parede em toda a volta.
- **Probabilidade de barreiras**: quantos dos lados de peça não usados recebem uma barreira,
  de 0 (nenhum) a 1 (todos os lados que a rede final não usa). Mais barreiras deixam o
  quebra-cabeça mais fácil. As barreiras são escolhidas independentemente do resto da grade,
  então a mesma semente aleatória com uma probabilidade de barreiras maior dá o mesmo
  quebra-cabeça com mais pistas.
- **Número de jogadas de mistura**: deixe em 0 para uma mistura completa, ou escolha um número
  para misturar com exatamente essa quantidade de deslizes. O desafio passa a ser
  encontrá-los e desfazê-los; a barra de status mostra a meta.
`,I=e({default:()=>L}),L=`# Padrão

Cada casa da grade é, em segredo, preta ou branca. Os números ao lado de cada linha e acima de
cada coluna indicam os comprimentos das sequências de casas pretas naquela linha ou coluna, em
ordem, com pelo menos uma casa branca entre uma sequência e a próxima. Pinte de preto as casas
certas para que todas as linhas e colunas batam com os seus números. Quebra-cabeças desse tipo
costumam ser chamados de nonogramas ou picross.

As figuras aqui são geradas ao acaso, então não há desenho para adivinhar: tudo tem que sair
dos números. Cada quebra-cabeça é verificado antes para garantir que pode ser resolvido
analisando uma linha ou coluna de cada vez, então você nunca precisa sair testando.

Os números de uma linha ou coluna ficam cinza assim que as sequências pretas dela batem com
eles, e ficam vermelhos se as sequências já completas não tiverem como caber nos números. O
quebra-cabeça termina quando todas as linhas e colunas batem com os seus números; os pontos
servem só para ajudar a lembrar.

## Comandos

### Mouse e toque

- **Clique** em uma casa para pintá-la de preto; clique de novo em uma casa preta para
  limpá-la.
- **Clique com o botão direito** para marcar uma casa com um ponto, indicando que ela é branca; clique com o botão direito
  em uma casa com ponto para limpá-la.
- **Arraste** para pintar de preto uma linha reta de casas de uma só vez, e
  **arraste com o botão direito** para deixar uma linha de pontos. Só são afetadas as casas
  que estavam no mesmo estado da casa onde você começou, então arrastar uma linha de pontos
  por cima das suas casas pretas não mexe nelas.
- **Clique com o botão do meio** em uma casa para devolvê-la ao estado desconhecido. Com o
  mouse, arrastar com a rodinha de rolagem pressionada limpa um retângulo inteiro, seja lá o
  que houver dentro.
- **Apagar** (o botão da borracha ao lado de Desfazer) faz o botão esquerdo fazer o mesmo:
  clique numa casa para devolvê-la ao estado desconhecido, ou arraste para limpar um
  retângulo inteiro. Aperte de novo para voltar a pintar de preto.
- **Dica** preenche uma casa, sempre uma que uma única linha ou coluna já decide sozinha — ou
  corrige uma casa que contradiz a resposta. O quebra-cabeça continua em jogo, e com poucas
  dicas a vitória, e o seu crédito, continuam seus.
- **Resolver** preenche a figura inteira para você.

### Teclado (Keyboard)

- **As setas** movem um cursor.
- **Enter** pinta ou limpa o preto sob o cursor e **Espaço** põe ou tira um ponto.
- Segure **Ctrl** enquanto move o cursor para pintar de preto pelo caminho, **Shift** para
  deixar pontos, ou os dois para limpar.
- Com o mouse, **Shift+clique** limpa casas do mesmo jeito que o clique do meio.
- **E** é o botão **Apagar**.

## Parâmetros

- **Largura** e **altura** da grade. As predefinições vão de 10×10 a 30×30; grades maiores
  demoram um pouco mais para ser geradas.
`,R=e({default:()=>z}),z=`# Pérolas

Uma grade de casas, algumas com uma pérola preta ou branca. Desenhe um único laço fechado
que vai do centro de uma casa ao centro de outra, na horizontal ou na vertical, sem nunca
se cruzar nem se ramificar. O laço não precisa passar por todas as casas, mas precisa
passar por todas as pérolas:

- numa **pérola preta**, o laço faz uma curva e depois segue reto pelas duas casas
  seguintes, dos dois lados da pérola ao longo do laço;
- numa **pérola branca**, o laço passa reto e faz uma curva em pelo menos uma das duas casas
  vizinhas da pérola ao longo do laço.

Só contam as casas por onde o laço passa logo antes e logo depois da pérola, não todas as
casas que encostam nela na grade.

Uma pérola cuja regra já foi quebrada ganha um halo vermelho. Assim que existe algum laço
fechado, todo segmento fora dele fica em vermelho, e o mesmo vale para qualquer casa com
três ou mais segmentos.

## Comandos

**Resolver** desenha o laço inteiro. O quebra-cabeça termina quando o laço é um único
circuito fechado e não há nada em vermelho.

### Mouse e toque

- **Clique** numa aresta da grade (perto da divisa entre duas casas) para desenhar ali um
  segmento do laço; clique de novo para apagá-lo.
- **Arraste** por uma sequência de casas para desenhar vários segmentos de uma vez. Arrastar
  sobre segmentos que já existem apaga esses segmentos; um arrasto que começa em segmentos
  existentes e continua por casas vazias primeiro apaga e depois desenha. Volte por uma casa
  por onde já passou para encurtar o caminho antes de soltar; volte à casa onde começou para
  fechar o laço.
- **Clique com o botão direito** numa aresta da grade para pôr um xizinho que quer dizer
  "nenhum segmento aqui"; não dá para desenhar um segmento por cima de um x até ele ser
  removido.
  **Arraste com o botão direito** por uma fileira de casas para pôr um x em cada aresta
  por onde passar.
- **Riscar** (o botão do X ao lado de Desfazer) faz um clique simples pôr ou tirar um x, e
  um arrasto pôr uma fileira inteira deles: como no desenho, um arrasto que começa em x
  primeiro os tira, e ele pula qualquer aresta que já tenha um segmento. Aperte de novo para
  voltar a desenhar o laço.

### Teclado (Keyboard)

- **As setas** movem um cursor. **Ctrl+seta** desenha ou apaga o segmento daquele lado da
  casa do cursor, e **Shift+seta** põe ou tira um x ali. **Enter** começa um arrasto pelo
  teclado a partir da casa do cursor: ande com as setas e pressione Enter de novo para
  confirmar o caminho, ou **Espaço** para desistir dele.
- **X** é o botão **Riscar**; com ele ligado, um arrasto pelo teclado também põe x.

## Parâmetros

- **Largura** e **altura** da grade, em casas (pelo menos cinco cada).
- **Dificuldade**: os quebra-cabeças _Fácil_ se resolvem raciocinando sobre cada pérola e
  as casas logo ao lado dela. Os _Complicado_ também exigem perceber quando um segmento
  fecharia um laço pequeno cedo demais, deixando outras pérolas isoladas. (Uma grade 5×5
  Complicado é gerada como Fácil, como no original.)
- **Permitir quebra-cabeças sem solução**: mantém todas as pérolas que o laço admite, em
  vez de reduzi-las a um conjunto mínimo com solução única. Uma opção de depuração herdada
  do original.
`,B=e({default:()=>V}),V=`# Resta Um

Um tabuleiro cheio de pinos com um buraco vazio, ou alguns num tabuleiro aleatório. Um pino pode pular na horizontal
ou na vertical por cima de um pino vizinho e cair no buraco vazio logo depois dele; o pino
pulado sai do tabuleiro. Continue pulando até sobrar um só pino.

Este é o velho jogo do Resta Um. O tabuleiro **Cruz** é o formato inglês clássico, o
**Octógono** é o europeu (que começa com o buraco vazio fora do centro, porque a partir do
centro não dá para terminar) e os tabuleiros **Aleatório** têm formas esquisitas criadas
pelo computador. As áreas em branco, sem buraco, simplesmente não fazem parte do tabuleiro.

Você nunca fica preso de vez: se não houver mais pulos e restar mais de um pino, a partida
acaba, mas **Desfazer** volta quantas jogadas você quiser. A barra de status conta os pinos
que restam e as jogadas feitas.

## Comandos

### Mouse e toque

- **Arraste** um pino e solte-o em um buraco vazio a exatamente duas casas de distância,
  em linha reta por cima de outro pino. Soltar em qualquer outro lugar devolve o pino.
- Ou **clique** em um pino para pegá-lo (ele fica laranja e os buracos onde ele pode cair
  ficam marcados) e depois clique no buraco de destino. Clicar no mesmo pino de novo o
  solta.

### Teclado (Keyboard)

- **As setas** movem um cursor pelo tabuleiro.
- **Enter** ou **Espaço** em cima de um pino o pega; aí uma seta o faz pular naquela
  direção, se a jogada for válida, e **Enter** de novo o solta no lugar.

## Parâmetros

- **Largura** e **altura** do tabuleiro, no mínimo 4 cada.
- **Tipo de tabuleiro**: _Cruz_ e _Octógono_ são os formatos tradicionais e só existem em
  7×7. _Aleatório_ cria uma forma diferente a cada vez, sempre uma que pode ser reduzida a
  um único pino, porque foi montada fazendo pulos de trás para frente a partir de um.
`,H=e({default:()=>U}),U=`# Alcance

Algumas casas da grade têm um número. Pinte casas de preto de modo que quatro regras valham ao
mesmo tempo:

- nenhuma casa com número fica preta;
- duas casas pretas nunca se tocam pelo lado (pelos cantos pode);
- todas as casas brancas formam uma única região conectada, ligadas lado a lado;
- cada número conta as casas brancas que a sua própria casa enxerga: ela mesma, mais tudo em
  linha reta para cima, para baixo, para a esquerda e para a direita, até uma casa preta ou a
  borda da grade bloquear a visão.

Este é o _Kurodoko_ da Nikoli, também conhecido como _Kuromasu_ ou _Where is Black Cells_. Um
número que já enxerga casas suficientes tem uma casa preta logo depois de cada sequência que
vê; um número que enxergaria demais se uma única casa indefinida fosse branca tem uma casa
preta ali. Pintar uma casa que é a única ligação entre dois grupos de casas brancas nunca está
certo. Todo quebra-cabeça pode ser terminado com esse tipo de raciocínio; não é preciso chutar.

Os erros aparecem em vermelho: casas pretas que se tocam ganham uma moldura vermelha em volta
do grupo, casas brancas isoladas da região principal ganham um contorno vermelho, e um número
fica vermelho quando já não consegue enxergar casas suficientes ou com certeza já enxerga
demais. O quebra-cabeça termina quando nenhuma regra está sendo quebrada; não é preciso pôr
pontos nas casas brancas.

## Comandos

### Mouse e toque

- **Clique** em uma casa para pintá-la de preto. Clique de novo para transformá-la em um ponto
  (uma casa que você sabe que é branca) e mais uma vez para limpá-la.
- **Clique com o botão direito** para percorrer o ciclo ao contrário: ponto, depois preto, depois vazio.
- **Arraste** para pintar várias casas de uma vez, e **arraste com o botão direito** para
  percorrê-las no ciclo ao contrário. Só as casas que começaram iguais à primeira são
  afetadas, então uma passada de pontos não mexe nas suas casas pretas.
- **Apagar** (o botão da borracha ao lado de Desfazer) faz um clique limpar a casa, e um
  arrasto limpar todas as casas pretas e pontos por onde passar, sejam quais forem. Aperte
  de novo para voltar a pintar.
- **Dica** preenche uma casa que já se deduz do que está no tabuleiro — ou corrige uma casa
  que contradiz a resposta. O quebra-cabeça continua em jogo, e algumas dicas não tiram de
  você a vitória nem o crédito por ela.
- **Resolver** preenche a grade inteira e põe um ponto em cada casa branca.

### Teclado (Keyboard)

- **As setas** movem um cursor pela grade.
- **Enter** funciona como um clique esquerdo na casa sob o cursor e **Espaço** como um
  clique direito.
- **E** é o botão **Apagar** e **H** o botão **Dica**.

## Parâmetros

- **Largura** e **altura** da grade. As predefinições vão de 9×6 a 16×11; dá para gerar até
  30×30, mas grades minúsculas, de uma ou duas casas, não têm quebra-cabeças justos.
`,W=e({default:()=>G}),G=`# Retângulos

Algumas casas da grade têm um número. Divida a grade inteira em retângulos de modo que
cada retângulo contenha exatamente um número, e que esse número seja a área do retângulo
(a largura vezes a altura). Um 6, por exemplo, fica num bloco 1×6, 2×3, 3×2 ou 6×1; qual
deles, e em que posição o número fica dentro dele, você descobre pelos vizinhos.

Os quebra-cabeças são gerados ao acaso e, por padrão, os números são colocados de modo que
só uma divisão da grade funcione. O quebra-cabeça original vem da revista japonesa Nikoli,
onde é conhecido como Shikaku.

## Comandos

### Mouse e toque

- **Arraste** por uma área para desenhar um retângulo em volta dela: o contorno é
  desenhado e as linhas de dentro são apagadas. Arrastar ao longo de uma linha da grade
  desenha só aquela linha.
- **Clique** numa linha da grade para colocar ou tirar só aquele traço.
- **Arraste com o botão direito** sobre uma área para apagar as linhas de dentro sem mexer
  no contorno. Um **clique direito** numa linha da grade liga e desliga o traço, igual a
  um clique comum.
- **Apagar** (o botão da borracha ao lado de Desfazer) faz um arrasto comum apagar também:
  arraste sobre uma área para apagar as linhas de dentro, ou clique numa linha da grade para
  removê-la. Enquanto ele estiver ligado, um clique nunca acrescenta uma linha. Aperte de
  novo para voltar a desenhar.
- **Resolver** faz a divisão inteira para você.

Enquanto você arrasta, o retângulo que vai ser desenhado aparece contornado e o tamanho dele
aparece na barra de status. Um retângulo pronto e do tamanho certo fica sombreado. Um
retângulo fechado que nunca vai poder estar certo é sinalizado: o número fica vermelho se o
tamanho estiver errado para ele, e o retângulo fica hachurado se não tiver nenhum número. O
quebra-cabeça está completo quando todas as casas estão dentro de um retângulo correto.

### Teclado (Keyboard)

- **As setas** movem um cursor.
- **Enter** começa a puxar um retângulo a partir do cursor; leve o cursor até o canto
  oposto e pressione **Enter** de novo para desenhá-lo.
- **Espaço** funciona do mesmo jeito, mas apaga o interior do retângulo.
- **E** é o botão **Apagar**.

## Parâmetros

- **Largura** e **altura** da grade. As opções prontas vão de 7×7 até 19×19.
- **Fator de expansão** — gera uma grade menor e a estica até o tamanho pedido, para que o
  quebra-cabeça tenha menos retângulos, e maiores. 0 (o padrão) significa não esticar; 0,5
  faz a grade inicial ter dois terços do tamanho final em cada direção. Valores altos
  deixam só um punhado de retângulos e tornam o quebra-cabeça trivial.
- **Garantir solução única** — normalmente ligado. Desligado, os números podem ficar em
  qualquer lugar dos seus retângulos, o que é mais rápido e pode gerar quebra-cabeças com
  várias respostas; aí qualquer divisão válida conta como resolvida.
`,se=e({default:()=>K}),K=`# Cores Iguais

O tabuleiro está cheio de casas coloridas. Escolha um grupo de duas ou mais casas da mesma
cor que se toquem pelos lados e remova-o: as casas acima do buraco caem, e quando uma coluna
fica vazia, as colunas à direita dela deslizam para fechar o espaço. Limpe o tabuleiro inteiro
para vencer. Se sobrarem casas, mas nenhuma casa tiver uma vizinha da mesma cor, não há mais
nada a fazer — desfaça e tente outra ordem.

Grupos grandes valem muito mais que os pequenos: remover _n_ casas dá (_n_ − 2)² pontos na
pontuação padrão, então um par não vale nada, três casas valem um ponto e dez casas valem 64.
A barra de status mostra a sua pontuação e, enquanto um grupo está selecionado, quantas casas
ele tem e quanto ele renderia.

Todo tabuleiro gerado (a não ser que você desligue a opção) é montado para que _possa_ ser
limpo por completo — mas achar uma ordem que também renda muitos pontos fica por sua conta.

Não há botão **Resolver**: o computador sabe que o tabuleiro pode ser limpo, mas não vai
contar como.

## Comandos

### Mouse e toque

- **Clique** em uma casa para selecionar o grupo inteiro dela; o grupo fica mais claro e com
  um contorno grosso. **Clique de novo no grupo selecionado** para removê-lo. Clicar em outro
  lugar muda a seleção.
- **Clique com o botão direito** no grupo selecionado para cancelar a seleção.

### Teclado (Keyboard)

- **As setas** movem um cursor pelo tabuleiro (dando a volta nas bordas).
- **Enter** seleciona o grupo sob o cursor e, pressionado de novo, remove o grupo.
- **Espaço** sobre o grupo selecionado cancela a seleção.

## Parâmetros

- **Largura** e **altura** do tabuleiro.
- **Nº de cores**, de 3 a 9 (2 é permitido quando a solução não é garantida). Mais cores
  significam grupos menores e um tabuleiro mais difícil.
- **Sistema de pontuação**: _(n−2)²_, o padrão, ou _(n−1)²_, que também premia os pares.
- **Garantir solução**: quando marcado, o tabuleiro é gerado de trás para frente a
  partir de um tabuleiro vazio, para que exista pelo menos uma sequência que o limpe.
  Desmarque para ter um tabuleiro simplesmente aleatório, que é gerado mais rápido e costuma
  ter regiões maiores, mas pode ser impossível de limpar.
`,ce=e({default:()=>le}),le=`# Setas

Cada casa tem uma seta, e algumas casas têm números. Junte as casas num único caminho
numerado de 1 a N (N é o número de casas), de modo que a próxima casa de cada uma fique em
algum lugar na direção da sua seta: a casa 1 aponta para a 2, que aponta para a 3, e assim
por diante. A próxima casa pode estar a qualquer distância na direção da seta, não só ao
lado. A última casa, marcada com uma estrela, não aponta para lugar nenhum.

O primeiro e o último número sempre aparecem, junto com outros suficientes para o caminho
ser único. Todo quebra-cabeça tem exatamente uma solução, e dá para chegar nela só com
raciocínio.

Os erros aparecem em vermelho: duas casas com o mesmo número, um número cuja próxima casa
não está na direção da sua seta, ou uma cadeia que passa do número dado. O quebra-cabeça
termina quando os números de 1 a N passam por todas as casas sem nada em vermelho.

## Comandos

### Mouse e toque

- **Arraste** de uma casa até outra na direção da sua seta para fazer da segunda a próxima
  casa da primeira. **Arraste com o botão direito** para ligar no sentido contrário: de uma
  casa até a casa que deve vir antes dela.
- Quando duas casas ligadas incluem um número, o número se espalha pela cadeia inteira e
  aparece em azul. Uma cadeia ainda sem número recebe uma letra e deslocamentos (\`a\`,
  \`a+1\`, \`a+2\`, ...); assim que ela encosta numa casa numerada, as letras viram números.
  Ligar uma cadeia a uma casa que já está ligada substitui a ligação antiga.
- Cada casa que ainda precisa de uma anterior mostra um pontinho no canto inferior
  esquerdo, e a seta fica apagada quando a casa já tem uma próxima. Então a tarefa é sempre
  ligar uma seta forte a uma casa com ponto.
- **Clique com o botão direito** numa casa para desfazer as duas ligações dela. **Arraste**
  uma casa para fora do tabuleiro para fazer o mesmo, ou **arraste com o botão direito**
  para fora do tabuleiro para desmanchar a cadeia inteira dela.
- **Desmanchar** (o botão do elo partido ao lado de Desfazer) faz um clique numa casa
  desmanchar a cadeia inteira dela, com todas as ligações, e arrastar uma casa para fora do
  tabuleiro faz o mesmo. Arrastar de casa em casa continua ligando. Aperte de novo para
  desligar.
- **Resolver** preenche o caminho completo.

### Teclado (Keyboard)

- **As setas** movem um cursor.
- **Enter** numa casa começa uma ligação a partir dela; leve o cursor até a próxima casa e
  pressione **Enter** de novo para ligar (pressione na mesma casa para cancelar).
- **Espaço** ou **X** desfaz as ligações da casa sob o cursor; **Shift + X** desmancha a
  cadeia inteira dela.
- **B** é o botão **Desmanchar**.

## Parâmetros

- **Largura** e **altura** da grade, de 2 até 12 casas (2×2 é pequeno demais para
  funcionar).
- **Início e fim nos cantos**: quando ligado, o 1 fica sempre na casa do canto superior
  esquerdo e o N na do canto inferior direito. Se não, as duas pontas são colocadas ao
  acaso, mas continuam aparecendo.
`,ue=e({default:()=>de}),de=`# Únicos

Cada casa da grade tem um número. Pinte de preto algumas casas (escondendo os números delas)
de modo que três regras valham ao mesmo tempo:

- nenhum número aparece mais de uma vez entre as casas brancas de uma mesma linha ou
  coluna;
- duas casas pretas nunca se tocam pelo lado (pelos cantos pode);
- todas as casas brancas formam uma única região conectada, ligadas lado a lado.

Este é o _Hitori_ da Nikoli. Um bom começo é procurar dois números iguais com uma casa entre
eles: um dos dois precisa ser preto, então a casa do meio tem que ser branca. Dois números
iguais lado a lado significam que todas as outras cópias desse número na mesma linha ou
coluna são pretas.

Os erros aparecem em vermelho: casas pretas que se tocam ganham uma moldura vermelha em volta
do grupo, casas brancas isoladas da região principal ganham um contorno vermelho, e duas
casas com círculo que têm o mesmo número na mesma linha ou coluna ficam em vermelho.

O quebra-cabeça termina quando nenhuma regra está sendo quebrada; não é preciso pôr círculo
nas brancas.

## Comandos

### Mouse e toque

- **Clique** em uma casa para pintá-la de preto; clique de novo para voltar ao normal.
- **Clique com o botão direito** para desenhar um círculo em volta de um número e anotar que
  ele com certeza é branco; repita para tirar o círculo. Qualquer um dos dois gestos apaga a
  marca que a casa já tiver.
- **Resolver** preenche a grade inteira e põe um círculo em cada casa branca.

### Teclado (Keyboard)

- **As setas** movem um cursor pela grade (dando a volta nas bordas).
- **Enter** pinta de preto ou restaura a casa sob o cursor e **Espaço** põe ou tira o
  círculo.

## Parâmetros

- **Largura** e **altura** da grade, de 2 a 20 nos quebra-cabeças gerados.
- **Dificuldade**: os quebra-cabeças _Fácil_ só exigem deduções diretas — uma casa preta
  obriga as vizinhas a serem brancas, um número com círculo obriga os gêmeos dele a serem
  pretos, os padrões do par com uma casa no meio e do par lado a lado, uma casa branca com uma
  única saída e os padrõezinhos dos cantos. Os _Complicado_ também exigem perceber quando
  pintar uma casa de preto cortaria a região branca em duas, e usar pares de pares deslocados
  por uma casa. Todo quebra-cabeça tem exatamente uma solução.
`,fe=e({default:()=>pe}),pe=`# Dezesseis

Um quebra-cabeça deslizante sem casa vazia. Toda casa tem uma peça numerada e, em vez de
deslizar uma peça sozinha, você desliza uma linha ou coluna inteira um passo. A peça que sai
pela borda volta na hora pela outra ponta da mesma linha, como se a grade estivesse enrolada
numa rosquinha. Ordene as peças para que contem a partir do 1 no canto superior esquerdo, da
esquerda para a direita e depois linha por linha.

## Comandos

### Mouse e toque

- **Clique** em uma das setas ao redor da borda para deslizar aquela linha ou coluna um
  passo na direção da seta.
  **Clique com o botão direito** em uma seta para deslizar a linha no sentido contrário.
- **Resolver** simplesmente troca a grade pela grade em ordem. Não mostra o caminho, mas
  deixa um tabuleiro limpo para você testar manobras.

### Teclado (Keyboard)

- **As setas** movem um destaque pelo anel de setas da borda.
- **Enter** desliza a linha destacada para onde a seta dela aponta e **Espaço** a desliza no
  sentido contrário.

## Parâmetros

- **Largura** e **altura** da grade. Em grades com os dois lados ímpares, só metade de todas
  as arrumações é alcançável, então o gerador só entrega as que são.
- **Número de jogadas de mistura**: deixe em 0 para uma arrumação totalmente aleatória, ou
  escolha um número para misturar a grade em ordem com exatamente essa quantidade de
  deslizes. A ideia então é descobrir quais deslizes foram feitos e desfazê-los no mesmo
  número de jogadas; quanto mais jogadas de mistura você pedir, maior a chance de existir
  uma solução mais curta.
`,me=e({default:()=>he}),he=`# Diagonais

Uma grade de casas vazias com números em círculos em alguns dos cantos. Trace uma linha
diagonal em cada casa, inclinada para um lado ou para o outro, de modo que:

- cada número em círculo tenha exatamente essa quantidade de linhas tocando o seu canto (um
  4 fica no meio de um X, um 0 tem todas as linhas próximas inclinadas para longe dele);
- as linhas nunca formem um laço fechado.

Um número que já tem linhas demais, ou que não consegue mais ter o bastante, fica vermelho,
assim como toda linha que faz parte de um laço. O quebra-cabeça termina quando toda casa
tem uma linha e nada está vermelho.

## Comandos

### Mouse e toque

- **Clique** em uma casa para traçar uma \`\\\`; clique de novo para transformá-la em \`/\` e
  mais uma vez para apagá-la.
- Um **clique direito** faz o ciclo ao contrário: \`/\`, depois \`\\\`, depois vazio. Assim dá
  para pôr uma casa em qualquer sentido usando um botão só.
- **Resolver** preenche a grade inteira.

### Teclado (Keyboard)

- **As setas** movem um cursor pela grade.
- **Enter** muda a casa sob o cursor como um clique esquerdo e **Espaço** como um
  clique direito.

## Parâmetros

- **Largura** e **altura** da grade, em casas.
- **Dificuldade**: os quebra-cabeças _Fácil_ podem ser resolvidos uma casa por vez — um
  número que já está satisfeito ou que precisa de todas as casas que restam, e casas em que
  uma das duas linhas fecharia um laço. Os _Difícil_ também exigem raciocinar sobre pares de
  casas que precisam se inclinar para o mesmo lado antes mesmo de você saber qual, e sobre
  regiões que uma linha isolaria da borda da grade. Nunca é preciso chutar; todo
  quebra-cabeça tem exatamente uma solução.
`,ge=e({default:()=>_e}),_e=`# Solo

Preencha a grade quadrada com algarismos de modo que cada linha, cada coluna e cada bloco de
contorno grosso tenha cada algarismo exatamente uma vez. Algumas casas já vêm preenchidas como
pistas; o resto é com você. O quebra-cabeça 3×3 normal é o conhecido Sudoku, mas os blocos
também podem ser retângulos (um quebra-cabeça 2×3 tem seis blocos 3×2), e a grade pode chegar a
16×16; nesse caso, as letras a, b, c… fazem o papel dos algarismos acima de 9.

Três variantes podem ser ativadas:

- **X**: as duas diagonais principais, levemente sombreadas, também precisam ter todos os
  algarismos.
- **Jigsaw**: os blocos têm formas irregulares, que mudam de um quebra-cabeça para outro.
- **Killer**: não há algarismos dados. Em vez disso, a grade é dividida em "gaiolas"
  tracejadas, cada uma marcada com a soma dos algarismos que estão dentro dela. Nenhum algarismo
  pode aparecer duas vezes numa gaiola.

Todo quebra-cabeça tem exatamente uma solução, e sempre dá para chegar nela só com raciocínio,
na dificuldade escolhida.

## Comandos

Algarismos que se repetem na mesma linha, coluna, bloco, diagonal ou gaiola aparecem em
vermelho, assim como uma gaiola cujos algarismos não dão a soma indicada. **Dica** preenche uma
casa — a mais fácil ainda em aberto, ou o primeiro algarismo que contradiz a resposta — e deixa o
resto com você; o quebra-cabeça continua em jogo, e com poucas dicas a vitória, e o crédito,
continuam seus. **Resolver** preenche a solução inteira e encerra o quebra-cabeça.

### Mouse e toque

- **Clique com o botão esquerdo** numa casa vazia para selecioná-la e depois use o teclado na
  tela para escrever um algarismo (as teclas de letra são os algarismos acima de 9). Clicar de
  novo na casa selecionada tira a seleção.
- **⌫** no teclado na tela esvazia de novo a casa selecionada, e **✎** ativa as anotações a
  lápis, para que o que você escolher em seguida entre como uma pequena nota em vez de resposta.
- **Clique com o botão direito** numa casa para selecioná-la direto para **anotações a lápis**.
  As anotações a lápis servem só para ajudar a pensar; o jogo não leva elas em conta, e
  preencher um algarismo as apaga.
- **Marcas**, no menu de pausa, preenche cada casa vazia com todas as anotações a lápis
  possíveis, para quem gosta de começar com tudo e ir riscando os candidatos.
- **Destacar** (a lupa ao lado de Desfazer) destaca todas as casas com o mesmo algarismo da
  última casa em que você clicou, inclusive as pistas, e mostra esse algarismo em negrito
  entre as anotações a lápis. Aperte de novo para desligar.

### Teclado (Keyboard)

- **Digite um algarismo** (ou uma letra, para os algarismos acima de 9) para preencher a casa
  selecionada.
- **Espaço** ou **Backspace** limpa a casa selecionada (o algarismo ou todas as anotações).
- **As setas** movem um cursor. **Enter** alterna o cursor entre a entrada normal e a de
  anotações a lápis, e os algarismos digitados vão para a casa sob ele.
- **M** é o botão **Marcas** e **L** o botão **Destacar**.

## Parâmetros

- **Colunas de sub-blocos** e **Linhas de sub-blocos**: a grade tem o tamanho do produto dos
  dois, e cada bloco é tão largo quanto o número de linhas e tão alto quanto o número de
  colunas. No modo Jigsaw, o produto é simplesmente o tamanho da grade.
- **X**, **Jigsaw** e **Killer** ativam as variantes descritas acima. Os quebra-cabeças Killer
  são limitados a grades de no máximo nove algarismos.
- **Simetria**: como o padrão das pistas se espelha. Mais simetria fica mais bonito, mas tende a
  deixar mais pistas do que o estritamente necessário.
- **Dificuldade**: o tipo de raciocínio mais difícil que o quebra-cabeça vai exigir. _Muito
  fácil_ e _Fácil_ sempre têm alguma casa que dá para preencher direto; _Médio_ exige pensar em
  onde um algarismo pode ficar cruzando um bloco com uma linha; _Difícil_ exige grupos de casas
  que, juntas, ficam com um grupo de algarismos só para si; _Especialista_ acrescenta cadeias de
  dedução; e os _Extremo_ não podem ser terminados sem chutar e voltar atrás. Quebra-cabeças
  difíceis demoram mais para gerar.
`,ve=e({default:()=>ye}),ye=`# Tendas

A grade é um acampamento: algumas casas têm árvores e o resto é terreno vazio. Monte tendas nas
casas vazias de modo que:

- haja exatamente tantas tendas quanto árvores;
- cada árvore possa formar par com a sua própria tenda em uma casa bem ao lado dela (acima,
  abaixo, à esquerda ou à direita — nunca na diagonal). Uma tenda pode até ficar ao lado de
  outras árvores, mas cada tenda pertence a uma árvore e cada árvore a uma tenda;
- nenhuma tenda toque outra, nem mesmo pelo canto;
- os números nas bordas direita e de baixo indiquem quantas tendas há em cada linha e em cada
  coluna.

As pistas são só as contagens, então o quebra-cabeça todo consiste em descobrir onde as tendas
precisam ficar. Todos os quebra-cabeças aqui podem ser resolvidos só com raciocínio, sem
chutar.

## Comandos

Tendas que se tocam aparecem em vermelho, com um marcador no lado ou no canto em comum; o mesmo
vale para qualquer grupo de tendas com árvores de menos entre elas, ou qualquer grupo de
árvores que já não tenha espaço para todas as suas tendas. Uma contagem fica cinza quando a sua
linha tem o número certo de tendas e vermelha quando já não pode mais ser cumprida.
**Resolver** coloca todas as tendas para você.

### Mouse e toque

- **Clique** em uma casa vazia para montar uma tenda ali; clique na tenda de novo para
  removê-la.
- **Clique com o botão direito** em uma casa vazia para marcá-la como grama, ou seja, que ali com certeza não
  vai tenda; repita para limpar a marca. Tanto um clique quanto um clique direito esvaziam uma
  casa que já tem alguma coisa.
- **Arraste com o botão direito** ao longo de uma linha ou coluna para transformar em grama, de uma só vez,
  todas as casas vazias por onde passar — prático para fechar uma linha depois que todas as
  tendas dela já estão no lugar. Tendas e marcas que já existem não são alteradas.

### Teclado (Keyboard)

- **As setas** movem um cursor.
- **Enter** monta ou remove uma tenda sob o cursor.
- **Espaço** marca ou limpa a grama sob o cursor.

## Parâmetros

- **Largura** e **altura** da grade, de 4 a 20 casas.
- **Dificuldade**: os quebra-cabeças _Fácil_ saem contando e vendo do que cada árvore e cada
  tenda precisa. Os _Complicado_ também exigem avaliar como as posições possíveis em uma linha
  limitam as vizinhas, e pensar em quais casas as árvores podem compartilhar.
`,be=e({default:()=>xe}),xe=`# Torres

Cada casa da grade recebe uma torre, com altura de 1 até o tamanho da grade. Cada linha e
cada coluna precisa ter cada altura exatamente uma vez. Os números em volta da borda dizem
quantas torres você veria olhando para aquela linha ou coluna daquele lado: uma torre
esconde todas as torres mais baixas atrás dela. Uma pista igual ao tamanho da grade
significa que as alturas sobem ao longo da linha inteira; uma pista 1 significa que a torre
mais alta está bem na borda.

Os quebra-cabeças maiores e mais difíceis começam com algumas torres já construídas e sem
algumas das pistas da borda. Algarismos que se repetem na mesma linha ou coluna, e pistas
que as torres construídas até agora já não conseguem cumprir, aparecem em vermelho. Este
quebra-cabeça também é conhecido como Arranha-céus (Skyscrapers).

## Comandos

As torres dadas não podem ser alteradas, e **Resolver** preenche a resposta.

### Mouse e toque

- **Clique** numa casa para selecioná-la e depois use o teclado na
  tela para construir uma torre daquela altura. **⌫** no teclado na tela esvazia a
  casa de novo.
- **✎** no teclado na tela deixa as **marcas a lápis** ligadas: o que você escolher entra
  como uma notinha, a casa continua selecionada para você pôr várias, e o mesmo algarismo
  de novo apaga a nota. Preencher um algarismo de verdade limpa as marcas a lápis da casa.
- **Clique com o botão direito** numa casa para selecioná-la já para marcas a lápis.
- **Marcas**, no menu de pausa, preenche cada casa vazia com todas as marcas a lápis
  possíveis.
- **Destacar** (a lupa ao lado de Desfazer) destaca todas as casas com a mesma altura da
  última casa em que você clicou, e mostra essa altura em negrito entre as marcas a lápis.
  Aperte de novo para desligar.

### Teclado (Keyboard)

- **Digite um algarismo** para construir uma torre daquela altura na casa selecionada.
  **Espaço** ou **Backspace** a esvaziam.
- **As setas** movem um cursor de teclado. **Enter** alterna entre o modo de algarismo e o
  de marcas a lápis; os algarismos entram na casa destacada e o cursor fica onde está.
- **M** é o botão **Marcas** e **L** o botão **Destacar**.

## Parâmetros

- **Tamanho do tabuleiro** — de 3 a 9. As torres são digitadas com um único algarismo, por
  isso o limite é 9.
- **Dificuldade** — os quebra-cabeças Fácil só exigem as consequências diretas de cada pista e
  das regras de linha e coluna. Os Difícil pedem que você considere cada arranjo que uma pista
  permite e encontre grupos de casas que compartilham poucos candidatos. Especialista acrescenta
  raciocínios de grupos mais difíceis e cadeias de implicação, e os Extremo não podem ser
  terminados sem alguma tentativa e erro, embora a solução continue sendo única.
`,Se=e({default:()=>Ce}),Ce=`# Trilhos

Uma ferrovia entra na grade pela esquerda e sai por baixo; as duas pontas aparecem como trilhos
saindo do tabuleiro. Complete a ferrovia entre elas. Ela é um único percurso, sem ramificações,
laços ou cruzamentos, feito só de trechos retos e curvas de um quarto de volta, então cada casa
por onde ela passa tem exatamente dois trilhos saindo dela. Alguns trechos já estão colocados em
casas sombreadas e não podem ser alterados. O número acima de cada coluna e ao lado de cada
linha diz por quantas casas daquela coluna ou linha a ferrovia completa passa.

Os números ficam cinza quando a linha ou coluna tem a quantidade certa de casas com trilho, e
vermelhos quando ela não tem mais como dar certo: casas com trilho demais, ou tantas casas
marcadas com X que não sobra espaço suficiente. Casas onde os trilhos se encontram de forma
errada (três trilhos numa mesma casa, um laço fechado, ou trilho sobrando depois que a entrada e
a saída estão ligadas) também aparecem em vermelho.

## Comandos

**Resolver** coloca a ferrovia completa e remove qualquer marca sua que a contradiga. O
quebra-cabeça está terminado quando uma ferrovia contínua liga a entrada à saída e todas as
contagens são atendidas.

### Mouse e toque

- **Arraste** por uma sequência de casas vizinhas para colocar trilhos entre elas. O caminho
  pode fazer curvas; um arrasto que só segue trilhos que já existem os retira.
- **Clique** perto do lado de uma casa para adicionar ou remover um único trilho por aquele
  lado. Clique no meio de uma casa para marcá-la como "a ferrovia passa aqui" sem dizer por quais
  lados — útil para contar — e clique de novo para limpar a marca.
- **Clique com o botão direito** perto de um lado para desenhar uma barrinha que quer dizer
  "nenhum trilho aqui"; faça isso no meio de uma casa para marcar a casa inteira com um X.
  **Arraste com o botão direito** ao longo de uma linha ou coluna para marcar (ou desmarcar)
  várias casas seguidas de uma vez.
- **Apagar** (o botão da borracha ao lado de Desfazer) faz um clique ou um arrasto limpar as
  casas por completo: cada casa tocada perde os trilhos, as barrinhas de "nenhum trilho" e a
  marca ou o X. As peças dadas ficam. Aperte de novo para voltar a colocar trilhos.

### Teclado (Keyboard)

- **As setas** movem um cursor que para nas casas e nos lados entre elas. **Enter** funciona
  como um clique na posição do cursor e **Espaço** como um clique direito.
- **E** é o botão **Apagar**.

## Parâmetros

- **Largura** e **altura** da grade, no mínimo quatro cada.
- **Dificuldade**: os quebra-cabeças _Fácil_ saem olhando uma casa ou uma linha de cada vez. Os
  _Complicado_ também exigem pensar onde a última casa com trilho de uma linha poderia ficar, e
  nas pontas soltas de trilho que precisam continuar ao longo de uma linha ou atravessá-la. Todo
  quebra-cabeça tem exatamente uma solução.
- **Proibir pistas 1 consecutivas**: quando ligado (o padrão), duas linhas ou colunas vizinhas
  nunca têm as duas a contagem 1, e nem a coluna da entrada nem a linha da saída têm 1. Isso
  evita que a ferrovia corra em longas retas sem graça junto à borda.
`,we=e({default:()=>Te}),Te=`# Rotação

Uma grade de peças numeradas foi embaralhada girando blocos quadrados de peças. Gire-os de
volta até os números ficarem em ordem, da esquerda para a direita e de cima para baixo. No
jogo básico, cada jogada gira um bloco 2×2 um quarto de volta em torno do ponto onde as quatro
peças se encontram; em configurações maiores, os blocos são 3×3 ou ainda maiores.

Nas variantes **orientáveis**, cada peça tem um triângulo, e o quebra-cabeça só termina quando
todos os triângulos apontam para cima. Na variante **só linhas**, cada peça mostra o número da
sua linha, então todos os 1 só precisam chegar à primeira linha, os 2 à segunda, e assim por
diante.

## Comandos

**Resolver** põe todas as peças de volta no lugar. Não mostra o caminho, mas é um jeito rápido
de ter uma grade arrumada para treinar uma sequência de giros.

### Mouse e toque

- **Clique** no centro de um bloco para girá-lo no sentido anti-horário;
  **clique com o botão direito** para girá-lo no sentido horário. Em blocos 2×2, o centro é o
  canto onde quatro peças se encontram; em blocos de tamanho ímpar, é a peça do meio. Um clique
  perto da borda da grade gira o bloco encostado nessa borda.
- **Horário** (o botão da seta giratória ao lado de Desfazer) troca os dois sentidos: um
  clique gira os blocos no sentido horário e um clique direito no anti-horário. Aperte de novo
  para voltar.

### Teclado (Keyboard)

- **As setas** movem pela grade um contorno do tamanho de um bloco. **Enter** gira o bloco
  contornado no sentido anti-horário e **Espaço** o gira no sentido horário.
- **A**, **B**, **C** e **D** giram no sentido anti-horário os blocos dos cantos superior
  esquerdo, superior direito, inferior esquerdo e inferior direito; segure **Shift** para o
  sentido horário.
- **T** é o botão **Horário**.

## Parâmetros

- **Largura** e **altura** da grade.
- **Tamanho do bloco giratório**: o lado do bloco quadrado que cada jogada gira (no mínimo 2 e
  no máximo o tamanho da grade).
- **Um número por linha**: uma variante mais fácil em que todas as peças de uma linha têm o
  mesmo número.
- **A orientação conta**: as peças ganham triângulos e todas precisam terminar apontando para
  cima.
- **Número de jogadas de mistura**: deixe em 0 para uma mistura completa, ou escolha um número
  pequeno para ter uma grade que está exatamente a esse número de giros da solução. O desafio
  passa a ser encontrar esses giros e desfazê-los: uma mistura de três jogadas merece uma
  resposta de três jogadas (embora às vezes exista um caminho mais curto).
`,Ee=e({default:()=>De}),De=`# Mortos-Vivos

A grade é um salão de espelhos assombrado. Cada casa sem espelho esconde um de três
monstros: um **fantasma**, um **vampiro** ou um **zumbi**. A legenda acima da grade mostra
quantos de cada ainda faltam colocar, e o número em cada posição da borda diz quantos
monstros você veria olhando para dentro da grade dali, seguindo a linha de visão enquanto
ela ricocheteia nos espelhos diagonais.

Os espelhos mudam o que dá para ver. Um vampiro não tem reflexo, então só é contado enquanto
a linha de visão ainda não bateu num espelho. O fantasma é o contrário: invisível quando
visto de frente, ele só aparece depois de um reflexo. O zumbi é sempre visto. Se uma linha
de visão passa duas vezes pela mesma casa, o monstro dali é contado cada vez que estiver
visível. Coloque todos os monstros de modo que todos os números da borda e todos os totais
fiquem certos.

## Comandos

Um número da borda fica cinza quando a sua linha de visão está totalmente resolvida e
vermelho quando já não tem como ser cumprido; uma contagem da legenda fica vermelha quando
há monstros demais daquele tipo. As marcas a lápis são só anotações suas e nunca afetam o
quebra-cabeça.

### Mouse e toque

- **Clique** numa casa vazia para alternar entre fantasma, vampiro, zumbi e vazia de novo.
  A casa continua destacada.
- O teclado na tela coloca um monstro direto na casa destacada, sem
  precisar passar pelos outros; **⌫** esvazia a casa, inclusive as marcas a lápis.
- **✎** no teclado na tela deixa as **marcas a lápis** ligadas: o monstro escolhido passa a
  ser adicionado à lista de candidatos da casa (ou retirado dela).
- **Clique com o botão direito** numa casa para adicionar marcas a lápis, um candidato de
  cada vez (fantasma, depois vampiro, depois zumbi, depois limpar).
- **Visão** (o olho ao lado de Desfazer) desenha as linhas de visão que passam pela casa
  destacada, dobrando nos espelhos, e circula os números da borda nas duas pontas de cada
  uma. Enquanto ele estiver ligado, clicar num número da borda traça a linha desse próprio
  número; clique de novo para soltá-la. Aperte **Visão** de novo para desligar. Enquanto
  ele estiver ligado, clicar numa casa que não está destacada só a destaca, para você
  traçar uma casa vazia sem preenchê-la; clique de novo para trocá-la como de costume.

### Teclado (Keyboard)

- As setas movem o destaque. Enter alterna o monstro da casa destacada; Espaço alterna as
  marcas a lápis dela.
- \`G\`, \`V\`, \`Z\` (ou \`1\`, \`2\`, \`3\`) põem esse monstro na casa destacada, ou ligam e desligam
  a marca a lápis dele quando o destaque está no modo lápis. \`E\`, \`0\`, Backspace ou Delete
  limpam a casa, inclusive as marcas a lápis.
- \`S\` é o botão **Visão**.

## Parâmetros

- **Largura**, **Altura** — o tamanho da grade, de 3×3 até 54 casas no total.
- **Dificuldade** — os quebra-cabeças _Fácil_ se resolvem contando ao longo de uma linha de
  visão por vez; os _Normal_ exigem pesar as combinações que um caminho inteiro permite; os
  _Complicado_ não podem ser terminados sem arriscar um palpite.
`,Oe=e({default:()=>ke}),ke=`# Desigualdades

Preencha a grade de modo que cada linha e cada coluna tenha cada algarismo de 1 até o tamanho da
grade exatamente uma vez — um quadrado latino — respeitando os sinais desenhados entre casas
vizinhas.

No modo **Desigual**, os sinais são de maior que: o lado aberto do \`>\` fica virado para o
algarismo maior, e a ponta para o menor. Nem todo par de vizinhas tem sinal, e quanto mais
difícil o quebra-cabeça, menos sinais há.

No modo **Adjacente**, os sinais são barrinhas que indicam que os dois algarismos diferem em
exatamente um (como 3 e 4). Aqui todas as barras sempre aparecem, então a **ausência** de barra
entre duas casas também é uma pista: esses dois algarismos com certeza não são consecutivos.

O quebra-cabeça aparece em jornais e revistas com o nome Futoshiki.

## Comandos

Algarismos que quebram uma regra — uma repetição na linha ou coluna, ou um sinal que não é
respeitado — aparecem em vermelho, assim como o sinal em questão. O quebra-cabeça está completo
quando todas as casas estão preenchidas e nada está em vermelho.

### Mouse e toque

- **Clique com o botão esquerdo** numa casa para selecioná-la e depois use o teclado na tela
  para colocar um algarismo. **⌫** no teclado na tela limpa de novo a casa
  selecionada. Clicar uma segunda vez na casa selecionada tira a seleção.
- **✎** no teclado na tela ativa as **anotações a lápis**: o que você escolher passa a ser
  adicionado a (ou removido de) uma pequena lista de possibilidades na casa, em vez de virar a
  resposta. Preencher uma casa apaga as anotações dela.
- **Clique com o botão direito** numa casa para selecioná-la direto para anotações a lápis.
- **Marcas**, no menu de pausa, preenche cada casa vazia com todas as anotações possíveis,
  prontas para você ir riscando; **Dica** (a lâmpada ao lado de Desfazer) faz o mesmo, mas
  deixa de fora as que um raciocínio simples já descarta.
- **Destacar** (a lupa ao lado de Desfazer) destaca todas as casas com o mesmo algarismo da
  última casa em que você clicou, inclusive os algarismos dados, e mostra esse algarismo em
  negrito entre as anotações a lápis. Aperte de novo para desligar.

### Teclado (Keyboard)

- **Digite um algarismo** para preencher a casa selecionada; \`0\`, Espaço ou Backspace a limpam.
- As setas movem um cursor pela grade; Enter alterna o cursor entre preencher algarismos e fazer
  anotações a lápis.
- \`M\` é o botão **Marcas**, \`H\` é **Dica** e \`L\` é **Destacar**.

## Parâmetros

- **Modo** — Desigual (sinais de maior que) ou Adjacente (barras entre algarismos
  consecutivos).
- **Tamanho** — o número de linhas e colunas, de 3 a 9.
- **Dificuldade** — quanto raciocínio o quebra-cabeça exige. Os **Muito fácil** nunca precisam dos
  sinais: no modo Desigual não têm nenhum e são simples quadrados latinos, e no modo Adjacente as
  barras aparecem, mas os algarismos dados bastam sozinhos. Os **Fácil** precisam só do significado
  direto de cada sinal; os **Médio** pedem que você considere grupos de casas juntos; os **Difícil**
  acrescentam raciocínio de grupos baseado em posição e cadeias de dedução; os **Extremo**
  (disponíveis em **Personalizado…**) podem exigir tentativa e erro, embora a solução continue
  única.
`,Ae=e({default:()=>je}),je=`# Indisciplinado

Pinte cada casa da grade de preto ou de branco. Algumas casas já vêm como pistas e não podem
ser alteradas; as outras começam cinza e são suas para preencher. No final, três regras
precisam valer:

- cada linha tem tantas casas pretas quanto brancas;
- cada coluna tem tantas casas pretas quanto brancas;
- nunca há três casas seguidas da mesma cor em uma linha ou coluna.

Os erros aparecem em vermelho: uma sequência de três ou mais casas iguais ganha uma moldura
vermelha, e uma casa recebe um **!** vermelho quando a linha ou coluna dela já tem casas demais
daquela cor. Na variante opcional "linhas e colunas únicas", duas linhas não podem ter o mesmo
padrão (nem duas colunas); as linhas repetidas aparecem riscadas em vermelho.

## Comandos

As casas de pista — as que têm uma pequena moldura por dentro — não podem ser alteradas.
**Resolver** preenche a grade inteira. O quebra-cabeça termina quando todas as casas estão
pintadas e nada aparece em vermelho.

### Mouse e toque

- **Clique** em uma casa cinza para deixá-la preta; clique de novo para branca, e mais uma vez
  para limpá-la.
- **Clique com o botão direito** para percorrer o ciclo ao contrário: branca, depois preta, depois vazia.
- **Clique com o botão do meio** para limpar uma casa na hora.
- **Apagar** (o botão da borracha ao lado de Desfazer) faz um clique limpar a casa em vez de
  colori-la. Aperte de novo para voltar a colorir.

### Teclado (Keyboard)

- **As setas** movem um cursor pela grade.
- **Enter** muda a casa sob o cursor como um clique, e **Espaço** como um clique direito.
- **1** pinta de preto, **0** (ou **2**) pinta de branco e **Backspace** limpa.
- **E** é o botão **Apagar**.

## Parâmetros

- **Largura** e **altura** da grade. As duas precisam ser pares e ter pelo menos 6.
- **Linhas e colunas únicas**: quando ativado, não pode haver duas linhas iguais nem duas
  colunas iguais (uma linha ainda pode ser igual a uma coluna). Grades muito altas ou muito
  largas são recusadas nesse modo, porque não existem linhas diferentes suficientes para
  todas.
- **Dificuldade**: os quebra-cabeças _Fácil_ só exigem duas deduções imediatas — duas casas
  iguais obrigam a casa ao lado ou entre elas a ter a outra cor, e uma linha que já tem a sua
  cota de uma cor recebe a outra cor em todo o resto. Os _Normal_ também exigem pensar em onde
  a última casa de uma cor ainda pode ficar em uma linha sem formar uma sequência de três.
  Todo quebra-cabeça tem exatamente uma solução.
`,Me=e({default:()=>Ne}),Ne=`# Desembaraçar

Alguns pontos estão ligados por linhas retas, e as linhas estão todas embaraçadas. Mova os
pontos até que nenhuma linha cruze outra. Todo quebra-cabeça tem solução: o computador montou
o grafo a partir de um desenho sem cruzamentos e depois espalhou os pontos em um círculo.

As linhas que estão cruzando outra aparecem em vermelho, então dá para ver o emaranhado
diminuindo enquanto você joga; o quebra-cabeça está resolvido quando não sobra nada em
vermelho. **Resolver** leva cada ponto para uma posição que o computador sabe que funciona.

## Comandos

**Desfazer** volta qualquer jogada, inclusive **Resolver**.

### Mouse e toque

- **Arraste** um ponto e solte onde quiser. O ponto que você pegou fica laranja e os
  vizinhos dele, azuis. Soltar um ponto na margem o coloca na borda do tabuleiro; soltar
  totalmente fora da área de jogo cancela o arrasto.
- **Encaixar** (o botão da grade ao lado de Desfazer) liga e desliga uma grade de encaixe:
  os pontos soltos passam a cair no centro das casas marcadas com pontinhos claros, que é
  também como a solução é montada. O botão fica aceso enquanto a grade estiver ligada.

### Teclado (Keyboard)

- **As setas** movem um cursor de ponto em ponto naquela direção. **Enter** ou **Espaço**
  pega o ponto; aí as setas o carregam (um oitavo de casa por toque na tecla, uma casa
  inteira com Shift, um único passo com Ctrl) e **Enter** ou **Espaço** o solta.
- \`G\` é o botão **Encaixar**.

## Parâmetros

- **Número de pontos**: quantos pontos o grafo tem, no mínimo 4. Mais pontos significam
  mais linhas e um emaranhado mais difícil. O tabuleiro cresce com o número de pontos, então
  sempre há espaço para espalhá-los.
`,Pe=e({$dir:()=>`ltr`,$locale:()=>`pt`,$name:()=>q,default:()=>Fe,games:()=>Q,messages:()=>X,status:()=>Z,touchPhrases:()=>Y,tutorials:()=>$,ui:()=>J}),q=`Português`,J=JSON.parse(`{"appName":"Puzzlebox","menu":{"title":"Puzzlebox","tagline":"{n} quebra-cabeças de lógica desenhados à mão. Escolha um e jogue.","lockedNote":"Cada quebra-cabeça que você termina por conta própria vale um crédito. Use os créditos aqui para desbloquear novos quebra-cabeças.","language":"Idioma","stat":{"credits":{"one":"★ {n} crédito","other":"★ {n} créditos"},"unlocked":"{n} de {total} desbloqueados","solved":"{n} resolvidos","tight":{"credits":"★ {n}","unlocked":"{n}/{total}","solved":"✓ {n}","achievements":"{n}/{total}"},"achievements":"{n} de {total} conquistas"},"search":{"placeholder":"Buscar","label":"Buscar quebra-cabeças pelo nome","clear":"Limpar a busca","empty":"Nenhum quebra-cabeça se chama “{q}”. Tente outro nome."},"hint":{"allOpen":"Está tudo liberado.","complete":"Você desbloqueou a coleção inteira!","spend":{"one":"Use um crédito abaixo para desbloquear um quebra-cabeça.","other":"Use os créditos abaixo para desbloquear quebra-cabeças."},"earn":"Termine qualquer quebra-cabeça por conta própria para ganhar um crédito."},"card":{"label":"{name}: {description}","labelLocked":"{name}: {description} (bloqueado)","labelAlias":"{name} (também conhecido como {alias}): {description}","labelLockedAlias":"{name} (também conhecido como {alias}): {description} (bloqueado)","solvedTag":"✓ resolvido ×{n}","unlock":"Desbloquear · 1 crédito","unlocked":"{name} desbloqueado!"},"noCredit":"Resolva qualquer quebra-cabeça por conta própria para ganhar um crédito e depois volte para desbloquear este.","surprise":"Me surpreenda: abrir um quebra-cabeça aleatório","privacy":{"note":"O Puzzlebox conta como os quebra-cabeças são jogados — nunca quem joga — para deixá-los melhores."},"continue":"Continuar","continueLabel":"Continuar {name}","spend":"Gastar"},"notFound":{"title":"Quebra-cabeça não encontrado","body":"Não temos nenhum quebra-cabeça chamado “{slug}”.","back":"Voltar para todos os quebra-cabeças"},"locked":"{name} ainda está bloqueado. Termine um quebra-cabeça para ganhar um crédito e depois desbloqueie este.","pageTitle":"{name} · Puzzlebox","topbar":{"back":"Quebra-cabeças","help":"Ajuda","creditsTitle":"Os créditos desbloqueiam novos quebra-cabeças. Termine um por conta própria para ganhar um.","boardLabel":"Tabuleiro de {name}"},"toolbar":{"type":"Tipo","custom":"Personalizado…","new":"Novo","newTitle":"Novo jogo (N)","restart":"Reiniciar","restartTitle":"Reiniciar este quebra-cabeça","undo":"Desfazer","undoTitle":"Desfazer (U, Ctrl+Z)","redo":"Refazer","redoTitle":"Refazer (R, Ctrl+Y)","hint":"Dica","hintTitle":"Revela uma casa para você continuar jogando. Com até {n} dicas, você ainda ganha o crédito.","solve":"Resolver","solveTitle":"Mostrar a solução (Ctrl+S)","gameId":"Compartilhar","gameIdTitle":"Compartilhe este quebra-cabeça ou jogue um que enviaram para você","more":"Mais","pause":"Pausa","pauseTitle":"Menu de pausa (Esc)","keypad":"Teclado","keypadTitle":"Mostrar teclas na tela","zoomOut":"−","zoomOutTitle":"Diminuir","zoomIn":"+","zoomInTitle":"Aumentar","tapPlace":"Toque: colocar","tapMark":"Toque: marcar","tapTitle":"O que um toque simples faz","tapPlaceTitle":"O toque coloca; o toque longo marca. Toque para alternar.","tapMarkTitle":"O toque marca; o toque longo coloca. Toque para alternar."},"pause":{"title":"Em pausa","resume":"Continuar"},"pager":{"label":"Páginas","prev":"Página anterior","next":"Próxima página","page":"Página {n} de {total}"},"badge":{"won":"Resolvido!","lost":"Fim do jogo"},"stage":{"generating":"Preparando um novo quebra-cabeça…"},"endgame":{"won":"Quebra-cabeça resolvido!","lost":"Fim do jogo","credit":"★ +1 crédito — o suficiente para desbloquear um novo quebra-cabeça da coleção.","wonNote":"Pronto para o próximo?","forfeitNote":"Este quebra-cabeça não rende crédito — a solução foi mostrada pelo caminho.","lostNote":"Esse escapou. Que tal tentar de novo?","next":"Próximo quebra-cabeça","retry":"Tentar de novo","dismiss":"Fechar e ver o tabuleiro","time":"Tempo","moves":"Jogadas","hints":"Dica","best":"Melhor {time}","newBest":"Novo recorde!","stars":"{n} de 3 estrelas","stepUp":"Experimente {preset} →"},"keypad":{"label":"Teclado","clear":"Limpar","clearTitle":"Limpar a casa selecionada (Backspace)","pencil":"Anotações a lápis","pencilOnTitle":"As teclas entram como anotações a lápis. Toque para voltar a escrever respostas.","pencilOffTitle":"Ative para que as próximas teclas entrem como anotações a lápis"},"drawer":{"title":"Como jogar {name}","close":"Fechar","replay":"▶ Ver o tutorial de novo","achievements":"Conquistas ({n}/{total})"},"dialog":{"ok":"OK","cancel":"Cancelar","customTitle":"{name}: personalizado","gameIdTitle":"Compartilhar este quebra-cabeça","shareLead":"Envie exatamente este quebra-cabeça para outra pessoa.","copyLink":"Copiar link","linkCopied":"Link copiado","codes":"Códigos do quebra-cabeça","byDescription":"Por descrição","bySeed":"Por semente aleatória","enterLabel":"Jogar um quebra-cabeça específico: cole um código","play":"Jogar","copy":"Copiar","copied":"Copiado","link":"Link","linkTitle":"Copiar um link que abre exatamente este quebra-cabeça","linkPrompt":"Link para este quebra-cabeça","hintAd":{"title":"Mais uma dica?","body":"Você já usou as suas {n} dicas grátis. Com mais uma, este quebra-cabeça não vai render crédito — a não ser que você assista a um anúncio curto para mantê-lo.","watch":"Assistir a um anúncio e manter o crédito","anyway":"Usar a dica mesmo assim"},"badCode":"Esse código não abre um quebra-cabeça de {name}. Confira se ele foi copiado por inteiro."},"toast":{"creditEarned":"+1 crédito","tutorialComplete":"Tutorial concluído. Aqui está um quebra-cabeça novo; termine por conta própria para ganhar um crédito.","tutorialCompleteBack":"Tutorial concluído. De volta ao seu quebra-cabeça.","tutorialSkipped":"Tutorial pulado. Você pode vê-lo de novo quando quiser, na Ajuda.","tapModeMark":"Toque para marcar. Toque longo para a ação principal.","tapModePlace":"Toque para a ação principal. Toque longo para marcar.","touchHint":"Toque para jogar e use o toque longo para a segunda ação. O primeiro botão redondo troca as duas.","hintNone":"Não há mais nada para revelar neste tabuleiro.","hintNoCredit":"Já são mais de {n} dicas, então este quebra-cabeça não vai render crédito — mas o tabuleiro continua seu para terminar.","hintAdFailed":"Nenhum anúncio disponível, então nada mudou — a dica continua aqui se você quiser.","stuck":"Travou? Uma dica revela uma casa, e o quebra-cabeça ainda rende o crédito."},"tutorial":{"label":"Tutorial de {name}","step":"Passo {n} de {total}","next":"Próximo","done":"Pronto","skipStep":"Pular passo","skipTutorial":"Pular tutorial","nice":"Muito bem!","offScript":"Essa não: a jogada foi desfeita para que os passos continuem batendo com o tabuleiro. Tente o que este passo pede.","offScriptRead":"Isso foi desfeito para que os passos continuem batendo com o tabuleiro. Leia este passo primeiro.","pointer":{"drag":"arrastar","rightClick":"clique direito","rightDrag":"arrastar com o direito","middleClick":"clique do meio","longPress":"toque longo","longPressDrag":"toque longo e arrastar","twoFingerTap":"toque com dois dedos"}},"splash":{"tagline":"Quebra-cabeças desenhados à mão, prontos para jogar","skip":"Pular"},"help":{"keypad":{"heading":"O teclado na tela","introTouch":"As teclas na tela digitam por você","introPointer":"**Teclado**, na barra de ferramentas, mostra na tela teclas que digitam por você","select":": primeiro escolha uma casa no tabuleiro e depois aperte uma tecla.","clear":"- **⌫** esvazia de novo a casa escolhida.","pencil":"- **✎** ativa as anotações a lápis, para que as teclas escrevam notas pequenas em vez\\n  de respostas. Aperte de novo para voltar a escrever respostas."}},"achievements":{"title":"Conquistas","summary":"{n} de {total} conquistadas","unlocked":"Conquista desbloqueada","secret":{"name":"Conquista secreta","description":"Continue jogando para descobrir."},"earnedOn":"Conquistada em {date}","progress":"{n} de {goal}","collection":"A coleção","tier":{"bronze":"Bronze","silver":"Prata","gold":"Ouro"},"meta":{"first-solve":{"name":"Primeiros passos","description":"Resolva seu primeiro quebra-cabeça sozinho."},"solves-10":{"name":"Aquecendo","description":"Resolva 10 quebra-cabeças."},"solves-50":{"name":"Pegou o jeito","description":"Resolva 50 quebra-cabeças."},"solves-100":{"name":"Centurião","description":"Resolva 100 quebra-cabeças."},"solves-250":{"name":"Grão-mestre","description":"Resolva 250 quebra-cabeças."},"specialist":{"name":"Especialista","description":"Resolva 10 quebra-cabeças do mesmo jogo."},"variety-3":{"name":"Degustação","description":"Resolva um quebra-cabeça em 3 jogos diferentes."},"variety-10":{"name":"Versátil","description":"Resolva um quebra-cabeça em 10 jogos diferentes."},"variety-all":{"name":"A caixa inteira","description":"Resolva um quebra-cabeça em cada jogo da coleção."},"unlock-first":{"name":"Prateleira nova","description":"Desbloqueie seu primeiro jogo com um crédito."},"unlock-15":{"name":"Coleção crescendo","description":"Tenha 15 jogos desbloqueados."},"unlock-25":{"name":"Chaveiro","description":"Tenha 25 jogos desbloqueados."},"unlock-all":{"name":"Chave-mestra","description":"Desbloqueie todos os jogos da coleção."},"hardest-1":{"name":"Desafio aceito","description":"Resolva um quebra-cabeça na configuração mais difícil de um jogo."},"hardest-10":{"name":"Caçador de cumes","description":"Resolva a configuração mais difícil de 10 jogos diferentes."},"hardest-all":{"name":"Inabalável","description":"Resolva a configuração mais difícil de todos os jogos."},"pure-1":{"name":"Ficha limpa","description":"Resolva um quebra-cabeça sem desfazer nem usar dica."},"pure-25":{"name":"Mão firme","description":"Resolva 25 quebra-cabeças sem desfazer nem usar dica."},"quick-draw":{"name":"Gatilho rápido","description":"Resolva um quebra-cabeça em 30 segundos ou menos."},"marathon":{"name":"Maratona","description":"Resolva um quebra-cabeça depois de passar mais de 20 minutos nele."},"comeback":{"name":"Nunca desista","description":"Perca um quebra-cabeça, depois volte e resolva."},"second-thoughts":{"name":"Pensando melhor","description":"Desfaça 100 vezes e mesmo assim resolva o quebra-cabeça."},"a-little-help":{"name":"Uma ajudinha","description":"Use uma dica."},"oops":{"name":"Ops","description":"Perca um quebra-cabeça."},"night-owl":{"name":"Coruja","description":"Resolva um quebra-cabeça entre meia-noite e 5 da manhã."},"on-a-roll":{"name":"Embalado","description":"Resolva 5 quebra-cabeças numa só sessão."},"days-3":{"name":"Frequentador","description":"Jogue em 3 dias diferentes."},"days-7":{"name":"Dedicado","description":"Jogue em 7 dias diferentes."},"days-30":{"name":"Parte da mobília","description":"Jogue em 30 dias diferentes."},"quick-study":{"name":"Aprende rápido","description":"Siga um tutorial até o fim."},"scholar":{"name":"Estudioso","description":"Siga 10 tutoriais diferentes até o fim."},"collector-25":{"name":"Colecionador de medalhas","description":"Ganhe 25 conquistas."},"collector-60":{"name":"Estante de troféus","description":"Ganhe 60 conquistas."},"legend":{"name":"Lenda dos quebra-cabeças","description":"Ganhe todas as outras conquistas."}},"andMore":{"one":"{n} conquista desbloqueada","other":"{n} conquistas desbloqueadas"}},"welcome":{"title":"Escolha seu primeiro quebra-cabeça","subtitle":{"one":"{n} quebra-cabeça para começar. Escolha-o e jogue.","other":"{n} quebra-cabeças para começar. Escolha um e jogue."},"more":{"one":"…e mais {n} para desbloquear","other":"…e mais {n} para desbloquear"},"how":"Cada quebra-cabeça que você resolve rende um crédito, e cada crédito desbloqueia um jogo novo."},"gamepad":{"connected":"Controle conectado"},"settings":{"title":"Definições","done":"Concluído","sound":"Som","volume":"Volume","reduceMotion":"Reduzir movimento","vibration":"Vibração","statistics":"Estatísticas de jogo","on":"Sim","off":"Não","portalMuted":"O site desligou o som."}}`),Y=[[`arrastando com o botão direito`,`arrastando após um toque longo`],[`arrastar com o botão direito`,`arrastar após um toque longo`],[`arraste com o botão direito`,`faça um toque longo e arraste`],[`arrastos com o botão direito`,`arrastos após um toque longo`],[`arrasto com o botão direito`,`arrasto após um toque longo`],[`clicando com o botão do meio`,`tocando com dois dedos`],[`clicar com o botão do meio`,`tocar com dois dedos`],[`clique com o botão do meio`,`toque com dois dedos`],[`clicando com o botão direito`,`fazendo um toque longo`],[`clicar com o botão direito`,`fazer um toque longo`],[`clique com o botão direito`,`faça um toque longo`],[`clicando com o botão esquerdo`,`tocando`],[`clicar com o botão esquerdo`,`tocar`],[`clique com o botão esquerdo`,`toque`],[`cliques do meio`,`toques com dois dedos`],[`clique do meio`,`toque com dois dedos`],[`cliques direitos`,`toques longos`],[`clique direito`,`toque longo`],[`cliques esquerdos`,`toques`],[`clique esquerdo`,`toque`],[`duplo clique`,`toque duplo`],[`clique duplo`,`toque duplo`],[`botão do meio`,`toque com dois dedos`],[`botão direito`,`toque longo`],[`botão esquerdo`,`toque`],[`clicando`,`tocando`],[`clicados`,`tocados`],[`clicadas`,`tocadas`],[`clicado`,`tocado`],[`clicada`,`tocada`],[`clicar`,`tocar`],[`clicou`,`tocou`],[`clicam`,`tocam`],[`clica`,`toca`],[`cliques`,`toques`],[`clique`,`toque`]],X=JSON.parse(`{"4-way rotational symmetry needs a square grid":"A simetria rotacional de 4 direções exige uma grade quadrada","A 2×2 grid is too small to make a puzzle from":"Uma grade 2×2 é pequena demais para criar um quebra-cabeça","A cube rolling along a single row can never turn over all six faces":"Um cubo que rola ao longo de uma única fila nunca consegue virar as seis faces","A given piece leaves the grid":"Uma peça dada sai da grade","A jigsaw block is too big":"Um bloco jigsaw é grande demais","A jigsaw block is too small":"Um bloco jigsaw é pequeno demais","A killer cage is too big":"Uma gaiola é grande demais","A killer cage is too small":"Uma gaiola é pequena demais","A wrapping puzzle needs a width and height of at least 3 to have a unique solution":"Um quebra-cabeça contínuo precisa de largura e altura de pelo menos 3 para ter solução única","All parameters must be whole numbers":"Todos os parâmetros devem ser números inteiros","Already solved":"Já resolvido","An edge cannot join a point to itself":"Uma aresta não pode ligar um ponto a si mesmo","Angle offset out of bounds.":"Deslocamento de ângulo fora dos limites.","At least one grid dimension must be greater than zero":"Pelo menos uma dimensão da grade deve ser maior que zero","At least one of width and height for this grid type must be at least {0}":"Neste tipo de grade, a largura ou a altura deve ser pelo menos {0}","At least one of width and height must be greater than one":"A largura ou a altura deve ser maior que um","Bad character in grid description":"Caractere inválido na descrição da grade","Bad mine layout in game description":"Disposição de minas inválida na descrição do jogo","Badly formatted move limit after grid description":"Limite de jogadas mal formatado após a descrição da grade","Barrier probability must be a number between 0 and 1":"A probabilidade de barreira deve ser um número entre 0 e 1","Barrier probability must be between 0 and 1":"A probabilidade de barreira deve estar entre 0 e 1","Blue cells are placed where some faces could never reach them":"Há casas azuis em posições que algumas faces nunca poderiam alcançar","Both dimensions must be at least 2":"As duas dimensões devem ser pelo menos 2","Both grid dimensions must be at least one":"As duas dimensões da grade devem ser pelo menos um","Bridges per direction must be between 1 and {0}":"As pontes por direção devem estar entre 1 e {0}","Can't create {0}×{1} puzzles":"Não é possível criar quebra-cabeças {0}×{1}","Clue did not provide 2 direction flags":"A pista não indicou 2 marcadores de direção","Clue is larger than the number of sides of its face":"A pista é maior que o número de lados da sua face","Clue is missing its number":"Falta o número da pista","Clue number out of range":"Número da pista fora do intervalo","Colour out of range":"Cor fora do intervalo","Colour out of range in grid description":"Cor fora do intervalo na descrição da grade","Colours, pegs and guesses must be whole numbers":"Cores, pinos e palpites devem ser números inteiros","Column counts inconsistent":"As contagens das colunas são inconsistentes","Could not four-colour the map":"Não foi possível colorir o mapa com quatro cores","Count is larger than the line it describes":"A contagem é maior que a linha que descreve","Description contains a duplicate number":"A descrição contém um número duplicado","Description contains a number larger than the grid":"A descrição contém um número maior que a grade","Description contains a number out of range":"A descrição contém um número fora do intervalo","Description contains a number that is too large":"A descrição contém um número grande demais","Description contains a repeated number":"A descrição contém um número repetido","Description contains an unexpected character":"A descrição contém um caractere inesperado","Description contains invalid characters":"A descrição contém caracteres inválidos","Description is corrupted":"A descrição está corrompida","Description is longer than expected":"A descrição é mais longa que o esperado","Description is shorter than expected":"A descrição é mais curta que o esperado","Description is too long":"A descrição é longa demais","Description is too short":"A descrição é curta demais","Description marks cells beyond the grid as blue":"A descrição marca como azuis casas fora da grade","Description may only contain P, H and O":"A descrição só pode conter P, H e O","Description must be a comma-separated list of numbers":"A descrição deve ser uma lista de números separados por vírgulas","Description must be exactly {0} characters":"A descrição deve ter exatamente {0} caracteres","Description must be hex digits, a comma and a cell number":"A descrição deve ter dígitos hexadecimais, uma vírgula e um número de casa","Description must be numbers each followed by an orientation letter (u, l, d or r)":"A descrição deve ter números, cada um seguido de uma letra de orientação (u, l, d ou r)","Description must be two hex strings separated by a comma":"A descrição deve ter duas sequências hexadecimais separadas por uma vírgula","Description must be {0} hexadecimal digits":"A descrição deve ter {0} dígitos hexadecimais","Description must contain at least one edge":"A descrição deve conter pelo menos uma aresta","Description must contain at least one peg":"A descrição deve conter pelo menos um pino","Description must contain at least two islands":"A descrição deve conter pelo menos duas ilhas","Description must contain each number from 1 to {0} exactly once":"A descrição deve conter cada número de 1 a {0} exatamente uma vez","Description must contain each row number from 1 to {0} exactly {1} times":"A descrição deve conter cada número de linha de 1 a {0} exatamente {1} vezes","Description must contain only digits":"A descrição deve conter apenas algarismos","Description must contain only numbers":"A descrição deve conter apenas números","Description must contain {0} numbers":"A descrição deve conter {0} números","Description must contain {0} tiles":"A descrição deve conter {0} peças","Description must mark exactly {0} cells blue":"A descrição deve marcar exatamente {0} casas como azuis","Description must start with {0} hex digits":"A descrição deve começar com {0} dígitos hexadecimais","Description places two islands next to each other":"A descrição coloca duas ilhas lado a lado","Description repeats a colour although duplicates are disallowed":"A descrição repete uma cor, embora as repetições não sejam permitidas","Description too long":"Descrição longa demais","Description too long for board size":"Descrição longa demais para o tamanho do tabuleiro","Description too short":"Descrição curta demais","Description too short for board size":"Descrição curta demais para o tamanho do tabuleiro","Digits in a {0}×{1} puzzle cannot exceed {2}":"Os algarismos num quebra-cabeça {0}×{1} não podem passar de {2}","Disallowing duplicates requires at least as many colours as pegs":"Proibir repetições exige pelo menos tantas cores quanto pinos","Domino descriptions inconsistent":"Descrições de dominós inconsistentes","Dots too close together":"Pontos próximos demais uns dos outros","Duplicate edge in game description":"Aresta duplicada na descrição do jogo","Edge list defines the wrong number of regions":"A lista de arestas define um número errado de regiões","Entrance square must contain a piece leaving the left edge":"A casa de entrada deve conter uma peça que saia pela borda esquerda","Every killer cage must have exactly one sum":"Cada gaiola do Killer deve ter exatamente uma soma","Exit square must contain a piece leaving the bottom edge":"A casa de saída deve conter uma peça que saia pela borda inferior","Expansion factor must be a number":"O fator de expansão deve ser um número","Expansion factor may not be negative":"O fator de expansão não pode ser negativo","Expansion factor must be from 0 to 100":"O fator de expansão deve estar entre 0 e 100","Expected ',' after block structure description":"Esperava-se ',' após a estrutura de blocos","Expected ',' after grid description":"Esperava-se ',' após a descrição da grade","Expected a list of edges like 0-1,1-2 in game description":"Esperava-se uma lista de arestas como 0-1,1-2 na descrição do jogo","Expected comma before clue list":"Esperava-se uma vírgula antes da lista de pistas","Expected jigsaw block structure in game description":"Esperava-se a estrutura de blocos Jigsaw na descrição do jogo","Expected killer cage structure in game description":"Esperava-se a estrutura de gaiolas do Killer na descrição do jogo","Expected killer clue grid in game description":"Esperava-se a grade de pistas do Killer na descrição do jogo","Expected slashes between clues":"Esperavam-se barras entre as pistas","Expecting number in game description":"Esperava-se um número na descrição do jogo","Extra moves must not be negative":"As jogadas extras não podem ser negativas","Extreme puzzles with more than {0} symbols take too long to generate":"Quebra-cabeças de nível Extremo com mais de {0} símbolos demoram demais para gerar","Faulty game description":"Descrição do jogo com erros","Flags contradicting each other":"Marcadores que se contradizem","Flags go off grid":"Os marcadores saem da grade","Game ID must include parameters":"O ID do jogo deve incluir os parâmetros","Game description contained unexpected characters":"A descrição do jogo continha caracteres inesperados","Game description contains an unexpected character":"A descrição do jogo contém um caractere inesperado","Game description contains no dots":"A descrição do jogo não contém nenhum ponto","Game description contains unexpected characters":"A descrição do jogo contém caracteres inesperados","Game description has {0} balls; expected {1}":"A descrição do jogo tem {0} bolas; esperavam-se {1}","Game description is corrupted":"A descrição do jogo está corrompida","Game description is longer than expected":"A descrição do jogo é mais longa que o esperado","Game description is shorter than expected":"A descrição do jogo é mais curta que o esperado","Game description is the wrong length":"A descrição do jogo tem o comprimento errado","Game description is too long":"A descrição do jogo é longa demais","Game description is too short":"A descrição do jogo é curta demais","Game description is wrong length":"A descrição do jogo tem o comprimento errado","Game description longer than expected":"Descrição do jogo mais longa que o esperado","Game description must be hexadecimal":"A descrição do jogo deve ser hexadecimal","Game description shorter than expected":"Descrição do jogo mais curta que o esperado","Game description too long":"Descrição do jogo longa demais","Game is already solved":"O jogo já está resolvido","Grid area must be at least six squares":"A área da grade deve ter pelo menos seis casas","Grid area must be greater than 1":"A área da grade deve ser maior que 1","Grid area must be greater than one":"A área da grade deve ser maior que um","Grid description is the wrong length or not hexadecimal":"A descrição da grade tem o comprimento errado ou não é hexadecimal","Grid description strings not used with this grid type":"Este tipo de grelha não usa descrições de grelha","Grid dimensions cannot be negative":"As dimensões da grade não podem ser negativas","Grid dimensions must be at most {0}":"As dimensões da grade devem ser no máximo {0}","Grid dimensions must be whole numbers":"As dimensões da grade devem ser números inteiros","Grid is too big":"A grade é grande demais","Grid must contain at least two squares":"A grade deve conter pelo menos duas casas","Grid size must be between 3 and 9":"O tamanho da grade deve estar entre 3 e 9","Grid size must be between {0} and {1}":"O tamanho da grade deve estar entre {0} e {1}","Hard and Extreme puzzles are limited to a maximum number of {0}":"Os quebra-cabeças Difíceis e Extremos estão limitados a um número máximo de {0}","Height must be at least 3":"A altura deve ser pelo menos 3","Height must be at least five":"A altura deve ser pelo menos cinco","Height must be at least one":"A altura deve ser pelo menos um","Height must be at least the rotating block size":"A altura deve ser pelo menos o tamanho do bloco giratório","Height must be at least two":"A altura deve ser pelo menos dois","Illegal grid type":"Tipo de grade inválido","Incorrect number balance in game description":"Contagem de números incorreta na descrição do jogo","Initial x-coordinate was out of range":"A coordenada x inicial estava fora do intervalo","Initial y-coordinate was out of range":"A coordenada y inicial estava fora do intervalo","Internal error: solution is badly formatted":"Erro interno: a solução está mal formatada","Invalid character in block structure specification":"Caractere inválido na especificação da estrutura de blocos","Invalid character in game description":"Caractere inválido na descrição do jogo","Invalid character in grid specification":"Caractere inválido na especificação da grade","Invalid character in number list":"Caractere inválido na lista de números","Invalid characters in game description":"Caracteres inválidos na descrição do jogo","Invalid format grid description string.":"Formato inválido na descrição da grade.","Invalid parameters: {0}":"Parâmetros inválidos: {0}","Invalid syntax in game description":"Sintaxe inválida na descrição do jogo","Jigsaw puzzles with more than {0} symbols take too long to generate":"Quebra-cabeças Jigsaw com mais de {0} símbolos demoram demais para gerar","Killer puzzle dimensions must be smaller than 10":"As dimensões de um quebra-cabeça Killer devem ser menores que 10","Malformed pending game description":"Descrição do jogo pendente mal formada","Matrix description is the wrong length or not hexadecimal":"A descrição da matriz tem o comprimento errado ou não é hexadecimal","Maximum face number must be a whole number":"O número máximo da face deve ser um número inteiro","Maximum face number must be at least one":"O número máximo da face deve ser pelo menos um","Maximum face number must be at most {0}":"O número máximo da face deve ser no máximo {0}","Maximum of 9 colours":"No máximo 9 cores","Medium puzzles need more than one bridge per direction, or loops disallowed":"Os quebra-cabeças Médios precisam de mais de uma ponte por direção, ou de ciclos proibidos","Mines solver opened a mine: inconsistent knowledge":"O solucionador do Campo Minado abriu uma mina: conhecimento inconsistente","Minimum number of balls may not be greater than maximum":"O número mínimo de bolas não pode ser maior que o máximo","Missing grid description string.":"Falta a descrição da grade.","Missing separator":"Falta um separador","Monster numbers do not match grid spaces":"Os números de monstros não correspondem aos espaços da grade","More than one starting square specified":"Foi indicada mais de uma casa inicial","Multiple solutions exist for this puzzle":"Este quebra-cabeça tem várias soluções","Must have at least five regions":"Deve haver pelo menos cinco regiões","Must have at least one guess":"Deve haver pelo menos um palpite","Must have between {0} and {1} colours":"Deve haver entre {0} e {1} cores","No game set up to solve":"Não há jogo preparado para resolver","No gems specified":"Nenhuma gema indicada","No solution exists for this position":"Não existe solução para esta posição","No solution exists for this puzzle":"Não existe solução para este quebra-cabeça","No solution found":"Nenhuma solução encontrada","No starting square specified":"Nenhuma casa inicial indicada","Not enough data in block structure specification":"Dados insuficientes na especificação da estrutura de blocos","Not enough data in grid description":"Dados insuficientes na descrição da grade","Not enough data to fill grid":"Dados insuficientes para preencher a grade","Not enough grid space to place all blue faces":"Não há espaço na grade para colocar todas as faces azuis","Not enough jigsaw blocks":"Faltam blocos jigsaw","Not enough killer cages":"Faltam gaiolas","Not enough numbers given after grid specification":"Não foram dados números suficientes após a especificação da grade","Not enough space to place the solid on an empty cell":"Não há espaço para colocar o sólido numa casa vazia","Number of colours must be at least three":"O número de cores deve ser pelo menos três","Number of colours must be at least two":"O número de cores deve ser pelo menos dois","Number of points must be a whole number":"O número de pontos deve ser um número inteiro","Number of points must be at least {0}":"O número de pontos deve ser pelo menos {0}","Number of points must be at most {0}":"O número de pontos deve ser no máximo {0}","Number of shuffling moves cannot be negative":"O número de jogadas de mistura não pode ser negativo","Number of shuffling moves must be a whole number":"O número de jogadas de mistura deve ser um número inteiro","Number of shuffling moves must be at most 10000":"O número de jogadas de mistura deve ser no máximo 10000","Number of shuffling moves must be at most {0}":"O número de jogadas de mistura deve ser no máximo {0}","Number out of range in game description":"Número fora do intervalo na descrição do jogo","Number too large":"Número grande demais","Out-of-range number in game description":"Número fora do intervalo na descrição do jogo","Out-of-range number in grid description":"Número fora do intervalo na descrição da grade","Parameters must be whole numbers":"Os parâmetros devem ser números inteiros","Patch coordinates do not identify a usable grid fragment":"As coordenadas do recorte não identificam um fragmento de grade utilizável","Patch offset out of bounds.":"Deslocamento do recorte fora dos limites.","Percentage of black squares must be between 5% and 100%":"A porcentagem de casas pretas deve estar entre 5% e 100%","Percentage of islands must be from 1% to 30%":"A porcentagem de ilhas deve estar entre 1% e 30%","Puzzle is inconsistent":"O quebra-cabeça é inconsistente","Puzzle is too large":"O quebra-cabeça é grande demais","Puzzle is too long for unique-rows mode":"O quebra-cabeça é largo demais para o modo de linhas únicas","Puzzle is too tall for unique-rows mode":"O quebra-cabeça é alto demais para o modo de linhas únicas","Puzzle is unsolvable":"O quebra-cabeça não tem solução","Puzzle must have one entrance and one exit":"O quebra-cabeça deve ter uma entrada e uma saída","Puzzles with more than {0} symbols take too long to generate":"Quebra-cabeças com mais de {0} símbolos demoram demais para gerar","Random seed must not be empty":"A semente aleatória não pode ficar vazia","Rotating block size must be at least two":"O tamanho do bloco giratório deve ser pelo menos dois","Row counts inconsistent":"As contagens das linhas são inconsistentes","Rows of blocks must be at least 1":"As linhas de blocos devem ser pelo menos 1","Scoring system not recognised":"Sistema de pontuação não reconhecido","Size and difficulty must be whole numbers":"O tamanho e a dificuldade devem ser números inteiros","Size must be at least 5 for Adjacent puzzles of this difficulty":"O tamanho deve ser pelo menos 5 para quebra-cabeças Adjacentes desta dificuldade","Size must be between {0} and {1}":"O tamanho deve estar entre {0} e {1}","Solution not known for this puzzle":"A solução deste quebra-cabeça não é conhecida","Solve operation failed":"A resolução falhou","Solve operation produced an invalid move":"A resolução produziu uma jogada inválida","Solver could not finish this grid":"O solucionador não conseguiu terminar esta grade","Solving algorithm cannot complete this puzzle":"O algoritmo de resolução não consegue completar este quebra-cabeça","Starting cell is outside the grid":"A casa inicial está fora da grade","Subtraction and division blocks must have area 2":"Os blocos de subtração e divisão devem ter área 2","That grid has too many faces to generate":"Essa grade tem faces demais para ser gerada","The Cross board is only available at {0}×{1}":"O tabuleiro em cruz só existe em {0}×{1}","The Octagon board is only available at {0}×{1}":"O tabuleiro octogonal só existe em {0}×{1}","The ball has hit a mine; undo that move first":"A bola bateu numa mina; desfaça essa jogada primeiro","The grid can have at most {0} squares":"A grade pode ter no máximo {0} casas","The grid may have at most {0} squares":"A grade pode ter no máximo {0} casas","The initial square contains a mine":"A casa inicial contém uma mina","The solid cannot start on a blue cell":"O sólido não pode começar numa casa azul","The solution has already been revealed":"A solução já foi revelada","There must be at least one ball":"Deve haver pelo menos uma bola","There must be at least one mine":"Deve haver pelo menos uma mina","This arrangement cannot be solved":"Esta disposição não tem solução","This game does not support the Solve operation":"Este jogo não permite resolver automaticamente","This puzzle has no solution":"Este quebra-cabeça não tem solução","This puzzle instance contains a contradiction":"Esta instância do quebra-cabeça contém uma contradição","This puzzle is not self-consistent":"Este quebra-cabeça não é coerente consigo mesmo","Too few clues for block structure":"Poucas pistas para a estrutura de blocos","Too few clues for grid size":"Poucas pistas para o tamanho da grade","Too little data in clue list":"Dados insuficientes na lista de pistas","Too little data in edge list":"Dados insuficientes na lista de arestas","Too many balls to fit in the grid":"Bolas demais para caber na grade","Too many clues for block structure":"Pistas demais para a estrutura de blocos","Too many clues for grid size":"Pistas demais para o tamanho da grade","Too many colours (at most {0})":"Cores demais (no máximo {0})","Too many colours makes given grid size impossible":"Com tantas cores, o tamanho de grade indicado fica impossível","Too many guesses (at most {0})":"Palpites demais (no máximo {0})","Too many jigsaw blocks":"Blocos jigsaw demais","Too many killer cages":"Gaiolas demais","Too many mines for grid size":"Minas demais para o tamanho da grade","Too many pegs per guess (at most {0})":"Pinos demais por palpite (no máximo {0})","Too many regions to fit in grid":"Regiões demais para caber na grade","Too much data in block structure specification":"Dados demais na especificação da estrutura de blocos","Too much data in clue list":"Dados demais na lista de pistas","Too much data in edge list":"Dados demais na lista de arestas","Too much data to fill grid":"Dados demais para preencher a grade","Too much data to fit in grid":"Dados demais para caber na grade","Trivial solutions are uninteresting":"Soluções triviais não têm graça","Unable to build a grid for these parameters":"Não foi possível construir uma grade com estes parâmetros","Unable to build this grid":"Não foi possível construir esta grade","Unable to find a solution for this puzzle":"Não foi possível encontrar uma solução para este quebra-cabeça","Unable to find a solution from this position":"Não foi possível encontrar uma solução a partir desta posição","Unable to find a solution to this puzzle":"Não foi possível encontrar uma solução para este quebra-cabeça","Unable to find a unique solution for this puzzle":"Não foi possível encontrar uma solução única para este quebra-cabeça","Unable to generate a puzzle of this size":"Não foi possível gerar um quebra-cabeça deste tamanho","Unable to generate a puzzle with these parameters":"Não foi possível gerar um quebra-cabeça com estes parâmetros","Unable to solve this puzzle":"Não foi possível resolver este quebra-cabeça","Unable to support more than {0} distinct symbols":"Não é possível usar mais de {0} símbolos distintos","Unable to work out any more of this puzzle":"Não é possível deduzir mais nada deste quebra-cabeça","Unexpected additional character at end of game description":"Caractere adicional inesperado no fim da descrição do jogo","Unexpected additional data at end of game description":"Dados adicionais inesperados no fim da descrição do jogo","Unexpected character '{0}' in description":"Caractere inesperado '{0}' na descrição","Unexpected character in clue list":"Caractere inesperado na lista de pistas","Unexpected character in edge list":"Caractere inesperado na lista de arestas","Unexpected data at end of game description":"Dados inesperados no fim da descrição do jogo","Unknown board type":"Tipo de tabuleiro desconhecido","Unknown character in description":"Caractere desconhecido na descrição","Unknown difficulty":"Dificuldade desconhecida","Unknown difficulty level":"Nível de dificuldade desconhecido","Unknown difficulty rating":"Classificação de dificuldade desconhecida","Unknown shape type":"Tipo de forma desconhecido","Unknown symmetry":"Simetria desconhecida","Unknown symmetry type":"Tipo de simetria desconhecido","Unrecognised character in game description":"Caractere não reconhecido na descrição do jogo","Unrecognised characters in game description":"Caracteres não reconhecidos na descrição do jogo","Unrecognised clue type":"Tipo de pista não reconhecido","Unrecognised grid description.":"Descrição de grelha não reconhecida.","Unrecognised solid type":"Tipo de sólido não reconhecido","Width and height cannot both be two":"A largura e a altura não podem ser ambas dois","Width and height for this grid type must both be at least {0}":"Neste tipo de grade, a largura e a altura devem ser ambas pelo menos {0}","Width and height must be at least two":"A largura e a altura devem ser pelo menos dois","Width and height must be at least {0}":"A largura e a altura devem ser pelo menos {0}","Width and height must be at most twelve":"A largura e a altura devem ser no máximo doze","Width and height must be at most {0}":"A largura e a altura devem ser no máximo {0}","Width and height must be at most {0} to generate a puzzle":"A largura e a altura devem ser no máximo {0} para gerar um quebra-cabeça","Width and height must be positive":"A largura e a altura devem ser positivas","Width and height must be whole numbers":"A largura e a altura devem ser números inteiros","Width and height must both be at least 3":"A largura e a altura devem ser ambas pelo menos 3","Width and height must both be at least four":"A largura e a altura devem ser ambas pelo menos quatro","Width and height must both be at least one":"A largura e a altura devem ser ambas pelo menos um","Width and height must both be at least two":"A largura e a altura devem ser ambas pelo menos dois","Width and height must both be even":"A largura e a altura devem ser ambas pares","Width and height must both be greater than three":"A largura e a altura devem ser ambas maiores que três","Width and height must both be greater than two":"A largura e a altura devem ser ambas maiores que dois","Width and height must both be greater than zero":"A largura e a altura devem ser ambas maiores que zero","Width and height must both be positive":"A largura e a altura devem ser ambas positivas","With three colours, a solvable grid may have at most {0} squares":"Com três cores, uma grelha resolúvel pode ter no máximo {0} casas","Width must be at least 3":"A largura deve ser pelo menos 3","Width must be at least five":"A largura deve ser pelo menos cinco","Width must be at least one":"A largura deve ser pelo menos um","Width must be at least the rotating block size":"A largura deve ser pelo menos o tamanho do bloco giratório","Width must be at least two":"A largura deve ser pelo menos dois","Width, height and ball counts must be whole numbers":"A largura, a altura e o número de bolas devem ser números inteiros","Width, height and difficulty must be whole numbers":"A largura, a altura e a dificuldade devem ser números inteiros","Width, height and number of colours must be whole numbers":"A largura, a altura e o número de cores devem ser números inteiros","Width, height, block size and move count must be whole numbers":"A largura, a altura, o tamanho do bloco e o número de jogadas devem ser números inteiros","X puzzles need at least four symbols":"Os quebra-cabeças X precisam de pelo menos quatro símbolos","X-diagonal jigsaw puzzles with more than {0} symbols take too long to generate":"Quebra-cabeças Jigsaw com diagonal X e mais de {0} símbolos demoram demais para gerar","You have hit a mine; undo that move first":"Você pisou numa mina; desfaça essa jogada primeiro","a cell may be a number position for only one rectangle":"uma casa só pode ser a posição do número de um retângulo","at least one column contains more numbers than will fit":"pelo menos uma coluna tem mais números do que cabem","at least one row contains more numbers than will fit":"pelo menos uma linha tem mais números do que cabem","cells are not adjacent":"as casas não são adjacentes","domino layout: no path between singletons":"disposição dos dominós: não há caminho entre casas isoladas","domino layout: stranded square cannot be paired":"disposição dos dominós: uma casa isolada não pode ser emparelhada","dot touches the outside twice":"o ponto toca o exterior duas vezes","dot with fewer than two edges":"ponto com menos de duas arestas","edge does not follow its face":"a aresta não acompanha a sua face","edge shared by three faces":"aresta compartilhada por três faces","expected CxR or Nj":"esperava-se CxR ou Nj","expected WxH":"esperava-se WxH","expected WxHnN":"esperava-se WxHnN","expected a grid size":"esperava-se um tamanho de grade","expected a maximum number":"esperava-se um número máximo","expected a number of points":"esperava-se um número de pontos","expected a solid letter followed by WxH":"esperava-se a letra de um sólido seguida de WxH","expected something like c6p4g10Bm":"esperava-se algo como c6p4g10Bm","expected w<W>h<H>m<MIN>M<MAX>":"esperava-se w<W>h<H>m<MIN>M<MAX>","generateKeen: solver disagrees with the square":"generateKeen: o solucionador discorda do quadrado","grid inconsistency while walking round a face":"inconsistência na grade ao percorrer uma face","inconsistent clues while assembling":"pistas inconsistentes durante a montagem","inconsistent distance field":"campo de distâncias inconsistente","inconsistent face classes":"classes de faces inconsistentes","latin rectangle could not be extended":"não foi possível estender o retângulo latino","latinGenerate: no extension found":"latinGenerate: nenhuma extensão encontrada","latinSquare: rectangle could not be extended":"latinSquare: não foi possível estender o retângulo","line too long for solver":"linha longa demais para o solucionador","no clue left to place":"não resta nenhuma pista para colocar","no such laser: {0}":"laser inexistente: {0}","rolled solid does not fit its destination":"o sólido rolado não cabe no destino","shown":"revelado","too few row/column specifications":"especificações de linha/coluna insuficientes","too many row/column specifications":"especificações de linha/coluna demais","unrecognised character in game description":"caractere não reconhecido na descrição do jogo","yes!":"sim!","9×9 Extreme puzzles take too long to generate; try 8×8 or Expert":"Quebra-cabeças 9×9 Extremo demoram demais para gerar; tente 8×8 ou Especialista"}`),Z={moves:`Jogadas: {n}`,movesCompleted:{one:`Concluído em {n} jogada`,other:`Concluído em {n} jogadas`},movesSinceSolve:`Jogadas após a resolução automática: {n}`,completedMoves:`Concluído! Jogadas: {n}`,solvedByComputer:`Resolvido pelo computador`,completed:`Concluído!`,completedPrefix:`Concluído! `,autoSolved:`Resolvido automaticamente.`,autoSolvedPrefix:`Resolvido automaticamente. `,autoSolverUsedPrefix:`Resolução automática usada. `,failedPrefix:`Sem jogadas. `,dead:`Você pisou numa mina.`,target:` (meta: {n})`},Q=JSON.parse(`{"blackbox":{"name":"Caixa Preta","description":"Descubra as bolas escondidas disparando lasers para dentro da caixa e vendo por onde eles saem.","preset":{"5x5_3_balls":"5×5, 3 bolas","8x8_5_balls":"8×8, 5 bolas","8x8_3_6_balls":"8×8, 3-6 bolas","10x10_5_balls":"10×10, 5 bolas","10x10_4_10_balls":"10×10, 4-10 bolas"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"no_of_balls":{"name":"Nº de bolas"}},"achievement":{"sparing_shots":{"name":"Tiros contados","description":"Encontre todas as bolas disparando lasers por no máximo metade das entradas."},"pinpoint":{"name":"Na mosca","description":"Encontre todas as bolas numa caixa de 8×8 ou maior, disparando no máximo três lasers por bola."},"shot_in_the_dark":{"name":"Tiro no escuro","description":"Mande conferir suas bolas sem disparar um único laser, e erre."}},"status":{"correct":"CORRETO!","wrong":{"one":"{wrong} erradas e {n} bola não encontrada.","other":"{wrong} erradas e {n} bolas não encontradas."},"marked":"Bolas marcadas: {n} / {range}  ·  Lasers disparados: {fired}","tooMany":"  ·  {n} bolas marcadas a mais.","check":"  ·  Use o botão do canto para verificar."}},"bridges":{"name":"Pontes","alsoKnownAs":"Hashiwokakero, Hashi","description":"Ligue as ilhas com pontes para que cada número seja atendido e nada se cruze.","preset":{"7x7_easy":"7×7 Fácil","7x7_medium":"7×7 Médio","7x7_hard":"7×7 Difícil","10x10_easy":"10×10 Fácil","10x10_medium":"10×10 Médio","10x10_hard":"10×10 Difícil","15x15_easy":"15×15 Fácil","15x15_medium":"15×15 Médio","15x15_hard":"15×15 Difícil","10x10_medium_no_loops":"10×10 Médio, sem ciclos"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"difficulty":{"name":"Dificuldade","choice":{"easy":"Fácil","medium":"Médio","hard":"Difícil"}},"allow_loops":{"name":"Permitir ciclos"},"max_bridges_per_direction":{"name":"Máx. de pontes por direção","choice":{"1":"1","2":"2","3":"3","4":"4"}},"of_island_squares":{"name":"% de casas com ilhas","choice":{"5":"5%","10":"10%","15":"15%","20":"20%","25":"25%","30":"30%"}},"expansion_factor":{"name":"Fator de expansão (%)","choice":{"0":"0%","10":"10%","20":"20%","30":"30%","40":"40%","50":"50%","60":"60%","70":"70%","80":"80%","90":"90%","100":"100%"}}},"action":{"g":{"label":"Guias","title":"Mostrar ou esconder uma linha clara onde uma ponte poderia passar (G)"},"e":{"label":"Apagar","title":"Arrastar de uma ilha para tirar as pontes naquela direção (E)"}},"achievement":{"no_markers":{"name":"Águas limpas","description":"Resolva um Pontes de 10×10 ou maior sem anotar uma única marca de \\"sem ponte aqui\\"."},"sure_footing":{"name":"Pisada firme","description":"Resolva um Pontes Difícil de 10×10 ou maior sem remover uma ponte nem usar Desfazer."}}},"cube":{"name":"Cubo","description":"Role um sólido pelo tabuleiro para pegar todas as casas azuis com as faces dele.","preset":{"cube":"Cubo","tetrahedron":"Tetraedro","octahedron":"Octaedro","icosahedron":"Icosaedro"},"config":{"type_of_solid":{"name":"Tipo de sólido","choice":{"tetrahedron":"Tetraedro","cube":"Cubo","octahedron":"Octaedro","icosahedron":"Icosaedro"}},"width_top":{"name":"Largura / topo"},"height_bottom":{"name":"Altura / base"}},"achievement":{"short_haul":{"name":"Trajeto curto","description":"Termine o Cubo com todas as faces azuis em no máximo vinte jogadas."},"octahedron_ace":{"name":"Oito faces num piscar","description":"Termine o Octaedro com todas as faces azuis em no máximo trinta jogadas."},"scenic_route":{"name":"Grande volta","description":"Role o sólido pelo menos duzentas vezes antes de todas as faces ficarem azuis."}}},"dominosa":{"name":"Dominosa","description":"Descubra onde está cada dominó do conjunto embaralhado numa grade de números.","preset":{"up_to_double_3":"Até duplo-3","up_to_double_4":"Até duplo-4","up_to_double_5":"Até duplo-5","up_to_double_6":"Até duplo-6","up_to_double_7":"Até duplo-7","up_to_double_8":"Até duplo-8","up_to_double_9":"Até duplo-9"},"config":{"maximum_number_on_dominoes":{"name":"Número máximo nos dominós"},"difficulty":{"name":"Dificuldade","choice":{"very_easy":"Muito fácil","easy":"Fácil","hard":"Difícil","extreme":"Extremo","ambiguous":"Ambíguo"}}},"achievement":{"no_lines":{"name":"Sem lápis","description":"Resolva um jogo até duplo-6 ou maior sem riscar um único traço a lápis."},"one_click_each":{"name":"Um clique cada","description":"Resolva um jogo até duplo-6 ou maior com um clique por dominó e sem Desfazer."},"doubles_first":{"name":"Duplos primeiro","description":"Coloque todos os duplos do jogo antes de qualquer outro dominó."}}},"fifteen":{"name":"Quinze","alsoKnownAs":"Jogo do 15, quebra-cabeça deslizante","description":"Deslize as peças pelo tabuleiro até deixá-las em ordem.","preset":{"3x3":"3×3","4x4":"4×4","5x5":"5×5"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"}},"achievement":{"short_shuffle":{"name":"Embaralhada curta","description":"Ponha o 4×4 em ordem em 100 jogadas ou menos."},"five_flyer":{"name":"Voando no 5×5","description":"Ponha o 5×5 em ordem em menos de três minutos."},"scenic_route":{"name":"Caminho turístico","description":"Leve mais de 300 jogadas para pôr o 3×3 em ordem."}}},"filling":{"name":"Preenchimento","alsoKnownAs":"Fillomino","description":"Preencha o tabuleiro para que cada grupo de algarismos iguais tenha exatamente esse tamanho.","preset":{"9x7":"9×7","13x9":"13×9","17x13":"17×13"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"}},"action":{"f":{"label":"Preencher","title":"Arrastar a partir de um algarismo para escrevê-lo em cada casa por onde passar (F)"}},"achievement":{"in_ink":{"name":"Escrito à caneta","description":"Resolva um Preenchimento sem trocar nem apagar nenhum algarismo, e sem Desfazer."},"one_stroke":{"name":"Cada um de uma vez","description":"Resolva um Preenchimento de 13×9 ou maior escrevendo cada grupo de algarismos numa só jogada."}}},"flip":{"name":"Inverter","alsoKnownAs":"Lights Out","description":"Acenda todas as casas; cada jogada também inverte as casas em volta.","preset":{"3x3_crosses":"3×3 Cruzes","4x4_crosses":"4×4 Cruzes","5x5_crosses":"5×5 Cruzes","3x3_random":"3×3 Aleatório","4x4_random":"4×4 Aleatório","5x5_random":"5×5 Aleatório"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"shape_type":{"name":"Tipo de forma","choice":{"crosses":"Cruzes","random":"Aleatório"}}},"achievement":{"press_once":{"name":"Um aperto só","description":"Acenda um tabuleiro de 4×4 ou maior sem apertar nenhuma casa duas vezes."},"fewest_presses":{"name":"Esforço mínimo","description":"Acenda um tabuleiro de 5×5 com o menor número possível de apertos."}}},"flood":{"name":"Inundação","alsoKnownAs":"Flood It","description":"Inunde o tabuleiro a partir do canto até ficar todo de uma cor, dentro do limite de jogadas.","preset":{"12x12_easy":"12×12 Fácil","12x12_medium":"12×12 Médio","12x12_hard":"12×12 Difícil","16x16_medium":"16×16 Médio","16x16_hard":"16×16 Difícil","12x12_3_colours":"12×12, 3 cores","12x12_4_colours":"12×12, 4 cores"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"colours":{"name":"Cores"},"extra_moves_permitted":{"name":"Jogadas extras permitidas"}},"achievement":{"spare_moves":{"name":"Jogadas de sobra","description":"Inunde a grade com pelo menos três jogadas de sobra."},"beat_the_solver":{"name":"Vença a máquina","description":"Inunde a grade em menos jogadas que a solução do computador."},"one_colour_short":{"name":"Por uma cor","description":"Fique sem jogadas com só duas cores restantes na grade."}},"status":{"moves":"{n} / {limit} jogadas"}},"galaxies":{"name":"Galáxias","alsoKnownAs":"Spiral Galaxies, Tentai Show","description":"Divida o tabuleiro em regiões, cada uma simétrica em torno do único ponto que contém.","preset":{"7x7_medium":"7×7 Médio","7x7_extreme":"7×7 Extremo","10x10_medium":"10×10 Médio","15x15_medium":"15×15 Médio"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"difficulty":{"name":"Dificuldade","choice":{"medium":"Médio","extreme":"Extremo"}}},"achievement":{"no_arrows":{"name":"Sem setas","description":"Resolva um Galáxias de 10×10 ou maior sem arrastar uma única seta."},"steady_hand":{"name":"Estrelas fixas","description":"Resolva um Galáxias de 10×10 ou maior sem apagar uma parede nem usar Desfazer."}}},"guess":{"name":"Palpite","alsoKnownAs":"Mastermind, Senha","description":"Descubra a fileira escondida de pinos coloridos pelas marcas que seus palpites recebem.","preset":{"standard":"Padrão","super":"Super"},"config":{"colours":{"name":"Cores"},"pegs_per_guess":{"name":"Pinos por palpite"},"guesses":{"name":"Palpites"},"allow_blanks":{"name":"Permitir vazios"},"allow_duplicates":{"name":"Permitir repetições"}},"action":{"l":{"label":"Letras","title":"Identificar os pinos com letras (L)"},"k":{"label":"Fixar","title":"Clicar num pino da sua fileira para levá-lo para o próximo palpite (K)"}},"achievement":{"five_guesses":{"name":"Decifrador","description":"Descubra a fileira escondida em cinco palpites ou menos."},"super_sleuth":{"name":"Superdetetive","description":"Descubra a fileira escondida Super de cinco pinos em seis palpites ou menos."},"so_near":{"name":"Tão perto","description":"Fique sem palpites com todos os pinos no lugar certo menos um."}},"status":{"revealed":"Solução revelada","solved":{"one":"Resolvido em {n} palpite","other":"Resolvido em {n} palpites"},"outOfGuesses":"Sem palpites: a solução foi revelada","guessN":"Palpite {n} de {total}"}},"inertia":{"name":"Inércia","description":"Deslize uma bola pelo tabuleiro para pegar todas as gemas sem bater numa mina.","preset":{"10x8":"10×8","15x12":"15×12","20x16":"20×16"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"}},"achievement":{"hat_trick":{"name":"Três de uma vez","description":"Pegue três gemas ou mais com uma única rolada da bola."},"shortcut":{"name":"Atalho","description":"Pegue todas as gemas de um tabuleiro de 15×12 ou maior em menos roladas que o Resolver."},"last_gem_mine":{"name":"Vitória de Pirro","description":"Caia numa mina com a mesma rolada que pega a última gema."}},"status":{"gems":"Gemas: {n}","deaths":" · Mortes: {n}"}},"keen":{"name":"Keen","alsoKnownAs":"KenKen, Calcudoku","description":"Preencha o quadrado latino para que cada gaiola dê o resultado da sua conta.","preset":{"4x4_easy":"4×4 Fácil","5x5_easy":"5×5 Fácil","5x5_easy_x_only":"5×5 Fácil, só ×","6x6_easy":"6×6 Fácil","6x6_medium":"6×6 Médio","6x6_medium_x_only":"6×6 Médio, só ×","6x6_hard":"6×6 Difícil","6x6_expert":"6×6 Especialista","6x6_extreme":"6×6 Extremo","9x9_medium":"9×9 Médio"},"config":{"grid_size":{"name":"Tamanho do tabuleiro"},"difficulty":{"name":"Dificuldade","choice":{"easy":"Fácil","medium":"Médio","hard":"Difícil","expert":"Especialista","extreme":"Extremo"}},"multiplication_only":{"name":"Só multiplicação"}},"action":{"m":{"label":"Marcas","title":"Anotar a lápis todas as possibilidades em cada casa vazia (M)"},"l":{"label":"Destacar","title":"Destacar todas as casas com o algarismo que você tocou por último (L)"}},"achievement":{"no_pencil":{"name":"Cálculo mental","description":"Resolva um Keen de 6×6 ou maior sem escrever uma única anotação a lápis."},"products_only":{"name":"Produto puro","description":"Resolva um Keen 6×6 Médio só com multiplicação."}}},"lightup":{"name":"Luzes","alsoKnownAs":"Akari, Light Up","description":"Coloque lâmpadas para que todas as casas fiquem iluminadas e nenhuma lâmpada ilumine outra.","preset":{"7x7_easy":"7×7 Fácil","7x7_medium":"7×7 Médio","7x7_hard":"7×7 Difícil","10x10_easy":"10×10 Fácil","10x10_medium":"10×10 Médio","10x10_hard":"10×10 Difícil","14x14_easy":"14×14 Fácil","14x14_medium":"14×14 Médio","14x14_hard":"14×14 Difícil"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"of_black_squares":{"name":"% de casas pretas"},"symmetry":{"name":"Simetria","choice":{"none":"Nenhuma","2_way_mirror":"Espelho em 2 direções","2_way_rotational":"Rotação em 2 direções","4_way_mirror":"Espelho em 4 direções","4_way_rotational":"Rotação em 4 direções"}},"difficulty":{"name":"Dificuldade","choice":{"easy":"Fácil","medium":"Médio","hard":"Difícil"}}},"action":{"x":{"label":"Marcar","title":"Os cliques põem X em vez de lâmpadas (X)"}},"achievement":{"no_crosses":{"name":"Só luzes","description":"Resolva um Luzes de 10×10 ou maior sem marcar um único X."},"no_takebacks":{"name":"Ideia brilhante","description":"Resolva um Luzes Difícil sem nunca tirar uma lâmpada."}}},"loopy":{"name":"Laços","alsoKnownAs":"Slitherlink","description":"Desenhe um único laço fechado para que cada número conte as linhas à sua volta.","preset":{"7x7_squares_easy":"7×7 Quadrados, Fácil","10x10_squares_easy":"10×10 Quadrados, Fácil","7x7_squares_medium":"7×7 Quadrados, Médio","10x10_squares_medium":"10×10 Quadrados, Médio","7x7_squares_expert":"7×7 Quadrados, Especialista","10x10_squares_expert":"10×10 Quadrados, Especialista","10x10_triangular_expert":"10×10 Triangular, Especialista","12x10_honeycomb_expert":"12×10 Favo de mel, Especialista","7x7_snub_square_expert":"7×7 Quadrado romo, Especialista","9x9_cairo_expert":"9×9 Cairo, Especialista","5x4_great_hexagonal_expert":"5×4 Grande hexagonal, Especialista","7x7_octagonal_expert":"7×7 Octogonal, Especialista","5x5_kites_expert":"5×5 Papagaios, Especialista","5x5_floret_expert":"5×5 Floral, Especialista","5x4_dodecagonal_expert":"5×4 Dodecagonal, Especialista","5x4_great_dodecagonal_expert":"5×4 Grande dodecagonal, Especialista","10x10_penrose_kite_dart_expert":"10×10 Penrose (papagaio/dardo), Especialista","10x10_penrose_rhombs_expert":"10×10 Penrose (rombos), Especialista"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"grid_type":{"name":"Tipo de tabuleiro","choice":{"squares":"Quadrados","triangular":"Triangular","honeycomb":"Favo de mel","snub_square":"Quadrado romo","cairo":"Cairo","great_hexagonal":"Grande hexagonal","octagonal":"Octogonal","kites":"Papagaios","floret":"Floral","dodecagonal":"Dodecagonal","great_dodecagonal":"Grande dodecagonal","penrose_kite_dart":"Penrose (papagaio/dardo)","penrose_rhombs":"Penrose (rombos)"}},"difficulty":{"name":"Dificuldade","choice":{"easy":"Fácil","medium":"Médio","hard":"Difícil","expert":"Especialista"}}},"action":{"x":{"label":"Riscar","title":"Os cliques riscam lados em vez de desenhar traços (X)"}},"achievement":{"off_grid":{"name":"Fora do quadrado","description":"Resolva um Laços em qualquer ladrilhamento que não seja de quadrados."},"no_crosses":{"name":"Só o laço","description":"Resolva um Laços de 10×10 sem riscar um único lado."},"aperiodic":{"name":"Aperiódico","description":"Resolva um Laços Penrose sem nunca apagar um traço que você desenhou."}}},"magnets":{"name":"Ímãs","description":"Coloque ímãs e dominós vazios para que as contagens de polos batam.","preset":{"6x5_easy":"6×5 Fácil","6x5_hard":"6×5 Difícil","6x5_hard_strip_clues":"6×5 Difícil, com pistas retiradas","8x7_easy":"8×7 Fácil","8x7_hard":"8×7 Difícil","8x7_hard_strip_clues":"8×7 Difícil, com pistas retiradas","10x9_hard":"10×9 Difícil","10x9_hard_strip_clues":"10×9 Difícil, com pistas retiradas"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"difficulty":{"name":"Dificuldade","choice":{"easy":"Fácil","hard":"Difícil"}},"strip_clues":{"name":"Retirar pistas"}},"action":{"b":{"label":"Vazio","title":"Os cliques marcam dominós como vazios em vez de colocar ímãs (B)"}},"achievement":{"no_flips":{"name":"Do lado certo","description":"Resolva um Ímãs de 8×7 ou maior sem nunca inverter um ímã."},"stripped":{"name":"Fios desencapados","description":"Resolva um Ímãs 10×9 Difícil com pistas retiradas em menos de dez minutos."}}},"map":{"name":"Mapa","description":"Pinte o mapa com quatro cores sem que duas regiões vizinhas fiquem iguais.","preset":{"20x15_easy_30_regions":"20×15 Fácil, 30 regiões","20x15_medium_30_regions":"20×15 Médio, 30 regiões","20x15_hard_30_regions":"20×15 Difícil, 30 regiões","20x15_extreme_30_regions":"20×15 Extremo, 30 regiões","30x25_medium_75_regions":"30×25 Médio, 75 regiões","30x25_hard_75_regions":"30×25 Difícil, 75 regiões"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"regions":{"name":"Regiões"},"difficulty":{"name":"Dificuldade","choice":{"easy":"Fácil","medium":"Médio","hard":"Difícil","extreme":"Extremo"}}},"action":{"l":{"label":"Números","title":"Mostrar um número em cada região (L)"}},"achievement":{"no_dots":{"name":"Atlas à mão livre","description":"Resolva um Mapa Difícil ou mais difícil sem um único pontinho a lápis."},"steady_brush":{"name":"Pincel firme","description":"Resolva um Mapa Extremo sem nunca trocar a cor de uma região."}}},"mines":{"name":"Campo Minado","alsoKnownAs":"Minesweeper, Minas","description":"Descubra todas as casas que não têm mina; nunca é preciso adivinhar.","preset":{"9x9_beginner_10_mines":"9×9 Iniciante, 10 minas","9x9_35_mines":"9×9, 35 minas","16x16_intermediate_40_mines":"16×16 Intermediário, 40 minas","16x16_99_mines":"16×16, 99 minas","30x16_expert_99_mines":"30×16 Especialista, 99 minas","30x16_170_mines":"30×16, 170 minas"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"mines":{"name":"Minas"},"ensure_solubility":{"name":"Garantir solução"}},"achievement":{"no_flags":{"name":"Sem bandeiras","description":"Vença uma partida de Campo Minado sem pôr uma única bandeira."},"expert_sweep":{"name":"Esquadrão antibombas","description":"Vença o tabuleiro Especialista de 30×16 em menos de cinco minutos."},"so_close":{"name":"Por um triz","description":"Pise numa mina com no máximo três casas seguras ainda por abrir."}},"status":{"marked":"Marcadas: {n} / {total}","deaths":" · Mortes: {n}"}},"net":{"name":"Rede","alsoKnownAs":"NetWalk","description":"Gire as peças até todas ficarem ligadas ao centro.","preset":{"5x5":"5×5","7x7":"7×7","9x9":"9×9","11x11":"11×11","13x11":"13×11","5x5_wrapping":"5×5 contínuo","7x7_wrapping":"7×7 contínuo","9x9_wrapping":"9×9 contínuo","11x11_wrapping":"11×11 contínuo","13x11_wrapping":"13×11 contínuo"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"walls_wrap_around":{"name":"Bordas contínuas"},"barrier_probability":{"name":"Probabilidade de barreiras"},"ensure_unique_solution":{"name":"Garantir solução única"}},"action":{"j":{"label":"Misturar","title":"Girar ao acaso todas as peças não travadas (J)"},"scroll_left":{"label":"←","title":"Rolar a visão para a esquerda (Shift+←)"},"scroll_up":{"label":"↑","title":"Rolar a visão para cima (Shift+↑)"},"scroll_down":{"label":"↓","title":"Rolar a visão para baixo (Shift+↓)"},"scroll_right":{"label":"→","title":"Rolar a visão para a direita (Shift+→)"},"k":{"label":"Travar","title":"Clicar nas peças para travá-las ou destravá-las em vez de girá-las (K)"}},"achievement":{"no_locks":{"name":"Nada travado","description":"Resolva uma Rede de 9×9 ou maior sem travar uma única peça."},"not_a_turn_wasted":{"name":"Nenhum giro à toa","description":"Resolva uma Rede de 9×9 ou maior sem girar nenhuma peça mais que o necessário."},"jumbled":{"name":"Tudo misturado","description":"Aperte Misturar e mesmo assim resolva o quebra-cabeça."}},"status":{"active":"Ativas: {n}/{total}"}},"netslide":{"name":"Rede Deslizante","description":"Deslize linhas e colunas de peças de rede até tudo ficar ligado.","preset":{"3x3_easy":"3×3 Fácil","3x3_medium":"3×3 Médio","3x3_hard":"3×3 Difícil","4x4_easy":"4×4 Fácil","4x4_medium":"4×4 Médio","4x4_hard":"4×4 Difícil","5x5_easy":"5×5 Fácil","5x5_medium":"5×5 Médio","5x5_hard":"5×5 Difícil"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"walls_wrap_around":{"name":"Bordas contínuas"},"barrier_probability":{"name":"Probabilidade de barreiras"},"number_of_shuffling_moves":{"name":"Número de jogadas de mistura"}},"achievement":{"tidy_four":{"name":"Religação caprichada","description":"Resolva uma Rede Deslizante 4×4 em 18 deslizes ou menos."},"lean_five":{"name":"Eletricista","description":"Resolva uma Rede Deslizante 5×5 em 32 deslizes ou menos."},"big_switch":{"name":"A grande virada","description":"Acenda a rede inteira com um só deslize quando menos da metade estava acesa."}},"status":{"active":" · Ativas: {n}/{total}"}},"pattern":{"name":"Padrão","alsoKnownAs":"Nonograma, Picross, Griddlers","description":"Preencha a grade a partir dos tamanhos dos blocos indicados em cada linha e coluna.","preset":{"10x10":"10×10","15x15":"15×15","20x20":"20×20","25x25":"25×25","30x30":"30×30"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"}},"action":{"e":{"label":"Apagar","title":"Clicar ou arrastar para devolver casas ao estado desconhecido (E)"}},"achievement":{"no_dots":{"name":"Nem um ponto","description":"Resolva um Padrão de 15×15 ou maior sem pôr um único ponto."},"inked_in":{"name":"Passado a nanquim","description":"Resolva um Padrão de 20×20 ou maior sem nunca limpar uma casa preta."}}},"pearl":{"name":"Pérolas","alsoKnownAs":"Masyu","description":"Desenhe um único laço fechado que passe em linha reta pelas pérolas brancas e vire nas pretas.","preset":{"6x6_easy":"6×6 Fácil","6x6_tricky":"6×6 Complicado","8x8_easy":"8×8 Fácil","8x8_tricky":"8×8 Complicado","10x10_easy":"10×10 Fácil","10x10_tricky":"10×10 Complicado","12x8_easy":"12×8 Fácil","12x8_tricky":"12×8 Complicado"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"difficulty":{"name":"Dificuldade","choice":{"easy":"Fácil","tricky":"Complicado"}},"allow_unsoluble":{"name":"Permitir quebra-cabeças sem solução"}},"action":{"x":{"label":"Riscar","title":"Clicar ou arrastar para marcar com x as arestas que o laço não pode usar (X)"}},"achievement":{"no_crosses":{"name":"Colar de pérolas","description":"Resolva um Pérolas de 10×10 sem pôr um único x."},"one_stroke":{"name":"Num traço só","description":"Desenhe o laço inteiro de um Pérolas de 8×8 ou maior num único arrasto."}}},"pegs":{"name":"Resta Um","alsoKnownAs":"Pinos, Solitário","description":"Salte pinos por cima uns dos outros até sobrar só um.","preset":{"cross":"Cruz","octagon":"Octógono","random_5x5":"Aleatório 5×5","random_7x7":"Aleatório 7×7","random_9x9":"Aleatório 9×9"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"board_type":{"name":"Tipo de tabuleiro","choice":{"cross":"Cruz","octagon":"Octógono","random":"Aleatório"}}},"achievement":{"dead_centre":{"name":"Bem no centro","description":"Termine o tabuleiro Cruz com o último pino no buraco central."},"hopscotch":{"name":"Amarelinha","description":"Vença uma partida de Resta Um com um pino pulando quatro vezes seguidas."},"pegged_out":{"name":"Empacado","description":"Fique sem jogadas com dez pinos ou mais ainda no tabuleiro."}},"status":{"stuck":{"one":"Não há mais jogadas — resta {n} pino","other":"Não há mais jogadas — restam {n} pinos"},"playing":"Pinos restantes: {n}  ·  Jogadas: {moves}"}},"range":{"name":"Alcance","alsoKnownAs":"Kurodoko, Kuromasu","description":"Pinte casas de preto para que cada número veja exatamente essa quantidade de casas brancas na sua linha e coluna.","preset":{"9x6":"9×6","12x8":"12×8","13x9":"13×9","16x11":"16×11"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"}},"action":{"e":{"label":"Apagar","title":"Clicar ou arrastar para limpar casas pretas e pontos (E)"}},"achievement":{"no_dots":{"name":"Contraste puro","description":"Resolva um Alcance de 13×9 ou maior sem pôr um único ponto."},"quick_sight":{"name":"Olho rápido","description":"Resolva um Alcance de 16×11 em menos de cinco minutos."}}},"rect":{"name":"Retângulos","alsoKnownAs":"Shikaku","description":"Divida o tabuleiro em retângulos, cada um com um número igual à sua área.","preset":{"7x7":"7×7","9x9":"9×9","11x11":"11×11","13x13":"13×13","15x15":"15×15","17x17":"17×17","19x19":"19×19"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"expansion_factor":{"name":"Fator de expansão"},"ensure_unique_solution":{"name":"Garantir solução única"}},"action":{"e":{"label":"Apagar","title":"Arrastar sobre uma área para apagar as linhas de dentro, ou clicar numa linha para removê-la (E)"}},"achievement":{"clean_cuts":{"name":"Cortes limpos","description":"Resolva um Retângulos de 11×11 ou maior sem usar mais jogadas do que ele tem números."},"quick_carver":{"name":"Entalhador veloz","description":"Resolva um Retângulos de 19×19 em menos de dez minutos."}},"status":{"drag":"{w}×{h} "}},"samegame":{"name":"Cores Iguais","alsoKnownAs":"SameGame, Clickomania","description":"Limpe o tabuleiro removendo grupos de casas vizinhas da mesma cor.","preset":{"5x5_3_colours":"5×5, 3 cores","10x5_3_colours":"10×5, 3 cores","15x10_3_colours":"15×10, 3 cores","15x10_4_colours":"15×10, 4 cores","20x15_4_colours":"20×15, 4 cores"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"no_of_colours":{"name":"Nº de cores"},"scoring_system":{"name":"Sistema de pontuação","choice":{"n_1_2":"(n-1)^2","n_2_2":"(n-2)^2"}},"ensure_solubility":{"name":"Garantir solução"}},"achievement":{"avalanche":{"name":"Efeito avalanche","description":"Remova um grupo de 25 casas ou mais de uma vez e depois limpe o tabuleiro."},"no_pairs":{"name":"Pares proibidos","description":"Limpe um tabuleiro de 15×10 ou maior sem nunca remover um par."},"last_one":{"name":"A última casa","description":"Fique sem jogadas com só uma casa restante no tabuleiro."}},"status":{"score":"Pontos: {n}","complete":"Tabuleiro limpo! {score}","stuck":"Não há mais jogadas. {score}","selected":"{score} · Selecionadas: {n} (+{points})"}},"signpost":{"name":"Setas","description":"Ligue as casas num único caminho numerado, com cada passo seguindo uma seta.","preset":{"4x4":"4×4","4x4_free_ends":"4×4, pontas livres","5x5":"5×5","5x5_free_ends":"5×5, pontas livres","6x6":"6×6","7x7":"7×7"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"start_and_end_in_corners":{"name":"Início e fim nos cantos"}},"action":{"b":{"label":"Desmanchar","title":"Clicar numa casa para desmanchar a cadeia inteira dela (B)"}},"achievement":{"unbroken":{"name":"Corrente intacta","description":"Resolva um Setas sem nunca desfazer ou substituir uma ligação."},"in_order":{"name":"Direto ao ponto","description":"Resolva um Setas de 6×6 ou maior ligando o caminho em ordem, do 1 até a estrela."},"star_first":{"name":"Faça um pedido","description":"Faça sua primeiríssima ligação até a estrela e depois resolva o quebra-cabeça."}}},"singles":{"name":"Únicos","alsoKnownAs":"Hitori","description":"Escureça casas para que nenhum número se repita numa linha ou coluna, sem dividir o tabuleiro.","preset":{"5x5_easy":"5×5 Fácil","5x5_tricky":"5×5 Complicado","6x6_easy":"6×6 Fácil","6x6_tricky":"6×6 Complicado","8x8_easy":"8×8 Fácil","8x8_tricky":"8×8 Complicado","10x10_easy":"10×10 Fácil","10x10_tricky":"10×10 Complicado","12x12_easy":"12×12 Fácil","12x12_tricky":"12×12 Complicado"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"difficulty":{"name":"Dificuldade","choice":{"easy":"Fácil","tricky":"Complicado"}}},"achievement":{"no_circles":{"name":"Sem círculos","description":"Resolva um Únicos de 8×8 ou maior sem circular um único número."},"sure_hand":{"name":"Mão segura","description":"Resolva um Únicos de 10×10 ou maior sem voltar ao normal uma casa pintada de preto."}}},"sixteen":{"name":"Dezesseis","description":"Deslize linhas e colunas inteiras pelo tabuleiro para pôr as peças em ordem.","preset":{"3x3":"3×3","4x3":"4×3","4x4":"4×4","5x4":"5×4","5x5":"5×5"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"number_of_shuffling_moves":{"name":"Número de jogadas de mistura"}},"achievement":{"lean_slides":{"name":"Deslize enxuto","description":"Ponha o 4×4 em ordem em 100 deslizes ou menos."},"five_in_200":{"name":"Grande organizador","description":"Ponha o 5×5 em ordem em 200 deslizes ou menos."},"round_the_doughnut":{"name":"Volta na rosquinha","description":"Deslize uma linha uma volta inteira até ela voltar ao ponto de partida."}}},"slant":{"name":"Diagonais","alsoKnownAs":"Gokigen Naname","description":"Desenhe uma diagonal em cada casa, respeitando os números e sem formar laços.","preset":{"5x5_easy":"5×5 Fácil","5x5_hard":"5×5 Difícil","8x8_easy":"8×8 Fácil","8x8_hard":"8×8 Difícil","12x10_easy":"12×10 Fácil","12x10_hard":"12×10 Difícil"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"difficulty":{"name":"Dificuldade","choice":{"easy":"Fácil","hard":"Difícil"}}},"achievement":{"no_loops":{"name":"Sem laços","description":"Resolva um Diagonais de 8×8 ou maior sem nunca fechar um laço."},"steady_hand":{"name":"Sem hesitar","description":"Resolva um Diagonais de 12×10 sem voltar para trocar uma linha."}}},"solo":{"name":"Solo","alsoKnownAs":"Sudoku","description":"Preencha o tabuleiro para que cada linha, coluna e bloco tenha cada algarismo uma só vez.","preset":{"4x4_very_easy":"4×4 Muito fácil","6x6_easy":"6×6 Fácil","9x9_very_easy":"9×9 Muito fácil","9x9_easy":"9×9 Fácil","9x9_x_diagonal_easy":"9×9 Diagonal X, Fácil","9x9_medium":"9×9 Médio","9x9_hard":"9×9 Difícil","9x9_x_diagonal_hard":"9×9 Diagonal X, Difícil","9x9_expert":"9×9 Especialista","9x9_extreme":"9×9 Extremo","9x9_killer":"9×9 Killer","9x9_jigsaw_easy":"9×9 Jigsaw, Fácil","9x9_jigsaw_x_diagonal_easy":"9×9 Jigsaw Diagonal X, Fácil","9x9_jigsaw_hard":"9×9 Jigsaw, Difícil","12x12_easy":"12×12 Fácil","16x16_easy":"16×16 Fácil"},"config":{"columns_of_sub_blocks":{"name":"Colunas de sub-blocos"},"rows_of_sub_blocks":{"name":"Linhas de sub-blocos"},"x_require_every_number_in_each_main_diagonal":{"name":"\\"X\\" (exigir cada número em cada diagonal principal)"},"jigsaw_irregularly_shaped_sub_blocks":{"name":"Jigsaw (sub-blocos de forma irregular)"},"killer_digit_sums":{"name":"Killer (somas de algarismos)"},"symmetry":{"name":"Simetria","choice":{"none":"Nenhuma","2_way_rotation":"Rotação em 2 direções","4_way_rotation":"Rotação em 4 direções","2_way_mirror":"Espelho em 2 direções","2_way_diagonal_mirror":"Espelho diagonal em 2 direções","4_way_mirror":"Espelho em 4 direções","4_way_diagonal_mirror":"Espelho diagonal em 4 direções","8_way_mirror":"Espelho em 8 direções"}},"difficulty":{"name":"Dificuldade","choice":{"very_easy":"Muito fácil","easy":"Fácil","medium":"Médio","hard":"Difícil","expert":"Especialista","extreme":"Extremo"}}},"action":{"m":{"label":"Marcas","title":"Anotar a lápis todas as possibilidades em cada casa vazia (M)"},"l":{"label":"Destacar","title":"Destacar todas as casas com o algarismo que você tocou por último (L)"}},"achievement":{"pen_only":{"name":"Caneta, sem lápis","description":"Resolva um Solo 9×9 Médio, Killer ou mais difícil sem uma única anotação a lápis."},"no_second_thoughts":{"name":"Sem pensar duas vezes","description":"Resolva um 9×9 Especialista ou mais difícil sem nunca trocar ou apagar um algarismo."}}},"tents":{"name":"Tendas","alsoKnownAs":"Tendas e árvores, Tents and Trees","description":"Monte uma tenda ao lado de cada árvore sem que duas tendas se toquem.","preset":{"8x8_easy":"8×8 Fácil","8x8_tricky":"8×8 Complicado","10x10_easy":"10×10 Fácil","10x10_tricky":"10×10 Complicado","15x15_easy":"15×15 Fácil","15x15_tricky":"15×15 Complicado"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"difficulty":{"name":"Dificuldade","choice":{"easy":"Fácil","tricky":"Complicado"}}},"achievement":{"no_grass":{"name":"Acampamento perfeito","description":"Resolva um Tendas de 10×10 ou maior sem marcar uma única casa como grama."},"no_strikes":{"name":"Campistas felizes","description":"Resolva um Tendas de 15×15 sem nunca desmontar uma tenda."}}},"towers":{"name":"Torres","alsoKnownAs":"Arranha-céus, Skyscrapers","description":"Construa torres de modo que cada pista na borda conte as torres visíveis dali.","preset":{"4x4_easy":"4×4 Fácil","5x5_easy":"5×5 Fácil","5x5_hard":"5×5 Difícil","6x6_easy":"6×6 Fácil","6x6_hard":"6×6 Difícil","6x6_expert":"6×6 Especialista","6x6_extreme":"6×6 Extremo"},"config":{"grid_size":{"name":"Tamanho do tabuleiro"},"difficulty":{"name":"Dificuldade","choice":{"easy":"Fácil","hard":"Difícil","expert":"Especialista","extreme":"Extremo"}}},"action":{"m":{"label":"Marcas","title":"Anotar a lápis todas as possibilidades em cada casa vazia (M)"},"l":{"label":"Destacar","title":"Destacar todas as casas com o algarismo que você tocou por último (L)"}},"achievement":{"no_pencil":{"name":"Horizonte mental","description":"Resolva um Torres de 6×6 sem escrever uma única marca a lápis."},"clean_build":{"name":"Feito para durar","description":"Resolva um Torres 6×6 Especialista ou Extremo sem voltar para trocar uma torre."},"tallest_first":{"name":"As mais altas primeiro","description":"Construa todas as torres mais altas antes de qualquer outra e depois resolva a grade."}}},"tracks":{"name":"Trilhos","alsoKnownAs":"Train Tracks","description":"Construa uma única ferrovia da entrada até a saída, respeitando as contagens.","preset":{"8x8_easy":"8×8 Fácil","8x8_tricky":"8×8 Complicado","10x8_easy":"10×8 Fácil","10x8_tricky":"10×8 Complicado","10x10_easy":"10×10 Fácil","10x10_tricky":"10×10 Complicado","15x10_easy":"15×10 Fácil","15x10_tricky":"15×10 Complicado","15x15_easy":"15×15 Fácil","15x15_tricky":"15×15 Complicado"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"difficulty":{"name":"Dificuldade","choice":{"easy":"Fácil","tricky":"Complicado"}},"disallow_consecutive_1_clues":{"name":"Proibir pistas 1 consecutivas"}},"action":{"e":{"label":"Apagar","title":"Clicar ou arrastar para limpar as casas por completo (E)"}},"achievement":{"no_crosses":{"name":"Nada marcado com X","description":"Resolva um Trilhos de 10×10 ou maior sem marcar com X uma casa ou um lado."},"no_lift":{"name":"A todo vapor","description":"Resolva um Trilhos de 15×10 ou maior sem nunca retirar um trilho colocado."},"long_haul":{"name":"Longa viagem","description":"Coloque trilhos por dez casas num único arrasto e depois complete a linha."}}},"twiddle":{"name":"Rotação","description":"Gire blocos quadrados de peças para pôr os números novamente em ordem.","preset":{"3x3_rows_only":"3×3, só linhas","3x3_normal":"3×3 Normal","3x3_orientable":"3×3 Orientável","4x4_normal":"4×4 Normal","4x4_orientable":"4×4 Orientável","4x4_rotating_3x3_blocks":"4×4, blocos giratórios 3×3","5x5_rotating_3x3_blocks":"5×5, blocos giratórios 3×3","6x6_rotating_4x4_blocks":"6×6, blocos giratórios 4×4"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"rotating_block_size":{"name":"Tamanho do bloco giratório"},"one_number_per_row":{"name":"Um número por linha"},"orientation_matters":{"name":"A orientação conta"},"number_of_shuffling_moves":{"name":"Número de jogadas de mistura"}},"action":{"t":{"label":"Horário","title":"Trocar os sentidos: cliques giram no sentido horário, cliques direitos no anti-horário (T)"}},"achievement":{"few_turns":{"name":"Vinte giros","description":"Resolva um Rotação 3×3 Normal em 20 giros ou menos."},"perfect_ten":{"name":"Nota dez","description":"Resolva um Rotação 3×3 Normal em 10 giros ou menos."},"dizzy":{"name":"Roda, roda","description":"Gire o mesmo bloco no mesmo sentido quatro vezes seguidas e depois resolva o quebra-cabeça."}}},"undead":{"name":"Mortos-Vivos","alsoKnownAs":"Labirinto de espelhos assombrado","description":"Coloque fantasmas, vampiros e zumbis de acordo com o que se vê nos espelhos.","preset":{"4x4_easy":"4×4 Fácil","4x4_normal":"4×4 Normal","4x4_tricky":"4×4 Complicado","5x5_easy":"5×5 Fácil","5x5_normal":"5×5 Normal","5x5_tricky":"5×5 Complicado","7x7_easy":"7×7 Fácil","7x7_normal":"7×7 Normal"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"difficulty":{"name":"Dificuldade","choice":{"easy":"Fácil","normal":"Normal","tricky":"Complicado"}}},"keypad":{"g":"Fantasma","v":"Vampiro","z":"Zumbi"},"action":{"s":{"label":"Visão","title":"Traçar as linhas de visão por uma casa, ou a partir de um número da borda (S)"}},"achievement":{"no_pencil":{"name":"Confie nos seus olhos","description":"Resolva um Mortos-Vivos de 5×5 ou maior sem uma única marca a lápis."},"fearless":{"name":"Destemido","description":"Resolva um Mortos-Vivos Complicado sem voltar para trocar um monstro."}}},"unequal":{"name":"Desigualdades","alsoKnownAs":"Futoshiki","description":"Complete o quadrado latino respeitando todos os sinais de maior que.","preset":{"4x4_easy":"4×4 Fácil","5x5_easy":"5×5 Fácil","5x5_medium":"5×5 Médio","5x5_medium_adjacent":"5×5 Médio (Adjacente)","5x5_hard":"5×5 Difícil","6x6_easy":"6×6 Fácil","6x6_medium":"6×6 Médio","6x6_medium_adjacent":"6×6 Médio (Adjacente)","6x6_hard":"6×6 Difícil","7x7_medium":"7×7 Médio","7x7_medium_adjacent":"7×7 Médio (Adjacente)","7x7_hard":"7×7 Difícil"},"config":{"mode":{"name":"Modo","choice":{"unequal":"Desigual","adjacent":"Adjacente"}},"size_s_s":{"name":"Tamanho (s*s)"},"difficulty":{"name":"Dificuldade","choice":{"very_easy":"Muito fácil","easy":"Fácil","medium":"Médio","hard":"Difícil","extreme":"Extremo"}}},"action":{"m":{"label":"Marcas","title":"Anotar a lápis todas as possibilidades em cada casa vazia (M)"},"h":{"label":"Dica","title":"Anotar a lápis as possibilidades que o raciocínio simples deixa (H)"},"l":{"label":"Destacar","title":"Destacar todas as casas com o algarismo que você tocou por último (L)"}},"achievement":{"adjacent_bare":{"name":"Porta ao lado","description":"Resolva um Desigualdades no modo Adjacente sem escrever uma única anotação a lápis."},"extreme_bare":{"name":"Tudo de cabeça","description":"Resolva um Desigualdades Extremo sem escrever uma única anotação a lápis."}}},"unruly":{"name":"Indisciplinado","alsoKnownAs":"Binairo, Takuzu","description":"Pinte cada casa de preto ou branco, com a mesma quantidade de cada cor por linha e coluna e nunca três iguais seguidas.","preset":{"8x8_easy":"8×8 Fácil","8x8_normal":"8×8 Normal","10x10_easy":"10×10 Fácil","10x10_normal":"10×10 Normal","14x14_easy":"14×14 Fácil","14x14_normal":"14×14 Normal"},"config":{"width":{"name":"Largura"},"height":{"name":"Altura"},"unique_rows_and_columns":{"name":"Linhas e colunas únicas"},"difficulty":{"name":"Dificuldade","choice":{"easy":"Fácil","normal":"Normal"}}},"action":{"e":{"label":"Apagar","title":"Clicar numa casa para limpá-la (E)"}},"achievement":{"no_threes":{"name":"Nunca três","description":"Resolva um Indisciplinado de 10×10 ou maior sem nunca formar três iguais em linha."},"first_time":{"name":"Preto no branco","description":"Resolva um Indisciplinado de 14×14 sem voltar para trocar uma casa."}}},"untangle":{"name":"Desembaraçar","alsoKnownAs":"Planarity","description":"Arraste os pontos até que nenhuma linha cruze outra.","preset":{"6_points":"6 pontos","10_points":"10 pontos","15_points":"15 pontos","20_points":"20 pontos","25_points":"25 pontos"},"config":{"number_of_points":{"name":"Número de pontos"}},"action":{"g":{"label":"Encaixar","title":"Encaixar numa grade os pontos que você soltar (G)"}},"achievement":{"one_touch":{"name":"Toque leve","description":"Desembarace 10 pontos ou mais sem pegar o mesmo ponto duas vezes."},"only_downhill":{"name":"Só ladeira abaixo","description":"Desembarace 20 pontos ou mais sem que nenhuma jogada acrescente linhas vermelhas."}}}}`),$=JSON.parse('{"blackbox":{"step1":{"text":"Uma bola está escondida nesta caixa 4×4. Dispare lasers a partir dos pontos em volta da borda, descubra onde ela tem que estar, marque-a e aperte o botão do canto."},"step2":{"text":"Clique no ponto da **borda esquerda, na altura da segunda linha**. O feixe é desviado no caminho e sai em outro lugar; as duas pontas recebem o mesmo número."},"step3":{"text":"Agora dispare pelo ponto no **topo da segunda coluna**. Um **H** significa que o feixe bateu direto numa bola e nunca saiu."},"step4":{"text":"Dispare também pelo ponto no **topo da primeira coluna**. Um **R** significa que o feixe voltou direto por onde entrou, o que acontece quando há uma bola na diagonal, ao lado da entrada."},"step5":{"text":"O R põe uma bola na diagonal ao lado da primeira coluna, e o H põe uma bola logo abaixo, na segunda: só esta casa satisfaz as duas coisas."},"step6":{"text":"**Clique nessa casa** para marcar ali a sua bola."},"step7":{"text":"Todas as bolas estão marcadas, então o **visto no canto superior esquerdo** está ativo. Clique nele para conferir a sua resposta."},"step8":{"text":"Correto. Enquanto joga, **clique com o botão direito** numa casa para travá-la quando tiver certeza de que está vazia, e **Resolver** entrega a resposta."}},"bridges":{"step1":{"text":"O número de cada ilha diz quantas pontas de ponte ela quer. Ligue todas as ilhas numa só rede, com no máximo duas pontes entre cada par e sem nenhuma ponte cruzando outra."},"step2":{"text":"O **2 de baixo** só tem uma ilha alinhada com ele: o **4** lá em cima. **Arraste** do 2 em direção ao 4 para lançar uma ponte."},"step3":{"text":"Ele quer duas pontas de ponte, e esse par é o único lugar onde elas cabem. **Arraste** de novo do mesmo jeito para uma segunda ponte, paralela."},"step4":{"text":"Essa ilha está completa. **Clique** nela para marcá-la como terminada: ela fica cinza e as pontes dela ficam travadas, para você não mexer nelas sem querer."},"step5":{"text":"Nenhuma ponte pode cruzar outra, então a ligação entre os **dois 1** está descartada. **Arraste com o botão direito** do 1 da esquerda em direção ao da direita para anotar isso."},"step6":{"text":"Cada 1 agora só tem uma saída, e as quatro pontes que faltam vêm daí. **Resolver** termina o quebra-cabeça (e **G** mostra todas as linhas por onde uma ponte poderia passar).","textTouch":"Cada 1 agora só tem uma saída, e as quatro pontes que faltam vêm daí. **Resolver** termina o quebra-cabeça."}},"cube":{"step1":{"text":"O cubo tem seis faces e seis casas estão pintadas de azul. Role o cubo até cada face ter pegado uma: cada vez que ele pousa, a face de baixo e a casa trocam de cor."},"step2":{"text":"Um clique tomba o cubo por cima da aresta, na direção da casa escolhida. **Clique na casa azul logo abaixo do cubo** para passar a cor dela para a face que pousa."},"step3":{"text":"A casa que ele deixou agora está sem cor — as cores trocam mesmo. **Clique na casa azul à direita** para deixar uma segunda face azul."},"step4":{"text":"As **setas do teclado** também rolam o cubo. Aperte **→** uma vez para pegar a terceira casa azul.","textTouch":"Cada casa vizinha está a um toque de distância. **Toque na próxima casa azul à direita** para pegar a terceira casa azul."},"step5":{"text":"Três faces azuis, faltam três — dá para terminar este tabuleiro em seis rolagens no total, e a barra de status conta cada uma. **Desfazer** volta uma quando você passar do ponto."}},"dominosa":{"step1":{"text":"Três dominós — 0-0, 0-1 e 1-1 — foram colocados aqui e depois retirados, deixando só os números. Divida a grade em pares para devolver cada um deles exatamente uma vez."},"step2":{"text":"Nenhum dominó pode ser usado duas vezes. Juntar este **0** com o **1** abaixo dele faria das duas colunas de fora um 0-1, então **clique com o botão direito** entre eles para anotar que não formam par."},"step3":{"text":"Os únicos dois **0** vizinhos são o par do canto superior esquerdo, então é ali que fica o 0-0. **Clique na linha entre eles** para colocá-lo."},"step4":{"text":"Do mesmo jeito, os únicos **1** vizinhos são os dois embaixo, à esquerda. Clique na linha entre eles para o 1-1."},"step5":{"text":"Sobra a coluna da direita para o 0-1. Clique na linha entre os dois números dela para terminar."},"step6":{"text":"Cada dominó usado uma vez. Clique de novo num dominó para retirá-lo; um dominó repetido aparece em vermelho, e **Desfazer** volta pelas suas jogadas."}},"fifteen":{"step1":{"text":"Deslize as peças numeradas para o espaço vazio até ficarem em ordem, de **1 a 8**, com o espaço no canto inferior direito. Este tabuleiro pequeno está a duas jogadas do fim."},"step2":{"text":"Qualquer peça na mesma linha ou coluna do espaço pode deslizar. Clique no **5** para empurrá-lo para cima, até o espaço."},"step3":{"text":"Falta uma. Clique no **8** para completar a linha."},"step4":{"text":"Resolvido! **Desfazer** e **Refazer** percorrem as suas jogadas, e **Novo**, no menu de pausa, traz um quebra-cabeça novo. As setas do teclado também deslizam uma peça para o espaço, no sentido da seta.","textTouch":"Resolvido! **Desfazer** e **Refazer** percorrem as suas jogadas, e **Novo**, no menu de pausa, traz um quebra-cabeça novo. Uma linha ou coluna inteira desliza de uma vez, então mire na peça mais distante."}},"filling":{"step1":{"text":"Escreva um algarismo em cada casa vazia para que cada bloco de algarismos iguais ligados cubra exatamente tantas casas quanto o algarismo indica."},"step2":{"text":"O **3** no pé da coluna do meio só pode crescer para cima, então o bloco dele é essa coluna. **Arraste** da casa de cima até a do meio e depois aperte **3**.","textTouch":"O **3** no pé da coluna do meio só pode crescer para cima. **Arraste** da casa de cima até a do meio e depois toque em **3** no teclado."},"step3":{"text":"O **2** na coluna da esquerda precisa de um parceiro, e a casa acima dele é a única livre. Clique nessa casa e aperte **2**.","textTouch":"O **2** na coluna da esquerda precisa de um parceiro, e a casa acima dele é a única livre. Toque nessa casa e depois em **2** no teclado."},"step4":{"text":"Falta uma casa. Clique nela e aperte **1** para ver como fica um algarismo errado.","textTouch":"Falta uma casa. Toque nela e depois em **1** no teclado para ver como fica um algarismo errado."},"step5":{"text":"Vermelho significa impossível: esses dois **1** se tocam, o que formaria um bloco de dois, e o **2** de cima fica isolado. Essa casa continua selecionada, então aperte **Backspace** para esvaziá-la.","textTouch":"Vermelho significa impossível: esses dois **1** se tocam, o que formaria um bloco de dois, e o **2** de cima fica isolado. Essa casa continua selecionada, então toque em **⌫** no teclado para esvaziá-la."},"step6":{"text":"Então essa casa vazia se junta ao **2** acima dela. Clique nela e aperte **2** para completar a grade.","textTouch":"Então essa casa vazia se junta ao **2** acima dela. Toque nela e depois em **2** no teclado para completar a grade."},"step7":{"text":"Preenchido. Linhas grossas fecham cada bloco terminado; um **clique direito** adiciona casas a uma seleção, uma de cada vez, e **Desfazer** anula um preenchimento."}},"flip":{"step1":{"text":"Acenda as nove casas. Clicar numa casa inverte o estado dela **e** o das casas em volta, então casas acesas podem se apagar de novo."},"step2":{"text":"O desenho pequeno dentro de cada casa mostra o que ela inverte: o quadrado cheio é a própria casa, os contornos são as vizinhas."},"step3":{"text":"Hora de acender esta. Clique na casa do **canto superior esquerdo**, a escura no canto."},"step4":{"text":"O canto acendeu, mas as duas vizinhas dele se apagaram. Agora clique na casa do **centro**."},"step5":{"text":"Agora só o canto inferior direito está apagado. Clique na casa do **canto inferior direito** para terminar."},"step6":{"text":"Tudo aceso! **Desfazer** anula uma jogada, e você também pode mover um cursor com as setas do teclado e apertar Enter em vez de clicar.","textTouch":"Tudo aceso! **Desfazer** anula uma jogada, e tocar duas vezes na mesma casa sempre cancela o efeito, então a ordem nunca importa."}},"flood":{"step1":{"text":"A casa do canto superior esquerdo é sua, junto com tudo o que está ligado a ela na mesma cor. Cada jogada repinta essa mancha, e as casas vizinhas da nova cor se juntam a ela. Deixe a grade inteira de uma só cor dentro do limite de **quatro jogadas**."},"step2":{"text":"Por enquanto, a sua mancha é só aquele canto azul. Clique na casa **vermelha** ao lado: a mancha fica vermelha e todas as casas vermelhas que ela toca vêm junto."},"step3":{"text":"Agora clique numa casa **azul** na borda da sua mancha. Uma cor bem escolhida pode se espalhar para longe numa só jogada."},"step4":{"text":"Só falta o **verde** fora da sua mancha. Mais um clique leva o resto da grade."},"step5":{"text":"Três jogadas de quatro — a barra de status mantém a contagem. Se as jogadas acabarem antes de a grade ficar de uma cor só, a partida está perdida. Travou? Uma **Dica** joga uma boa cor por você, e **Resolver** termina a grade numa resolução automática."}},"galaxies":{"step1":{"text":"Dois pontos, então duas galáxias. Desenhe paredes sobre os traços da grade para que cada ponto fique no centro da sua própria região: se você girar uma região 180° em torno do ponto, ela tem que cair exatamente sobre si mesma."},"step2":{"text":"O ponto da esquerda está sobre o traço entre duas casas, então a galáxia dele tem que ser as duas colunas da esquerda. **Clique** no traço logo à direita delas, na **linha de cima**."},"step3":{"text":"Os pontos também servem de bloco de notas. **Arraste** do ponto da direita até a **casa do canto superior direito** para deixar uma seta ali, marcando essa casa como parte da galáxia dele."},"step4":{"text":"De volta à parede: **clique** no mesmo traço, uma linha abaixo, na **linha do meio**."},"step5":{"text":"Falta um segmento, na **linha de baixo**. **Clique** nele para fechar as duas galáxias."},"step6":{"text":"As duas regiões ficaram sombreadas, então as duas estão certas. **Resolver** desenha a resposta completa, e um clique numa parede a apaga de novo."}},"guess":{"step1":{"text":"Dois pinos estão escondidos atrás dos pontos de interrogação, numa ordem qualquer de três cores. Dê um palpite, veja as marcas que ele recebe e vá eliminando possibilidades."},"step2":{"text":"**Arraste** a cor de cima da bandeja e solte no **buraco da esquerda** da linha com a seta."},"step3":{"text":"Você também pode escolher uma cor primeiro e clicar nos buracos com ela. Clique na **segunda cor** da bandeja."},"step4":{"text":"Agora clique no **buraco da direita** para colocar essa cor."},"step5":{"text":"A linha está cheia, então a **caixa tracejada** à direita dela acende. Clique nela para o palpite ser avaliado."},"step6":{"text":"Duas marcas **vazadas** significam que as duas cores estão na resposta, mas nenhuma no lugar certo — uma marca cheia seria cor certa no lugar certo. Troque as duas de lugar e envie de novo."},"step7":{"text":"Resolvido. **Resolver** desiste e mostra a resposta, e a tecla **L** põe letras nos pinos se for difícil distinguir as cores.","textTouch":"Resolvido. **Resolver** desiste e mostra a resposta, e **Fixar**, ao lado de Desfazer, mantém no lugar um pino em que você confia para o próximo palpite."}},"inertia":{"step1":{"text":"Você é a bola no canto superior esquerdo e há **três gemas** para pegar. Depois que começa a rolar, a bola só para numa parede ou num ponto de parada — e uma mina acaba com ela."},"step2":{"text":"Clique numa casa à **direita** da bola. Ela rola nessa direção até a borda do tabuleiro pará-la, pegando a gema pelo caminho."},"step3":{"text":"Agora clique **abaixo** da bola. Ela pega a próxima gema, e o anel quebrado duas casas abaixo — um ponto de parada — faz ela parar."},"step4":{"text":"Cuidado: a coisa pontuda logo abaixo da bola é uma **mina**. Rolar em cima de uma acaba com o jogo, e só Desfazer tira você dessa."},"step5":{"text":"Vá na **diagonal**: clique na casa duas abaixo e duas à esquerda, e a bola passa ao lado da mina até a última gema."},"step6":{"text":"As três gemas — pronto. **Desfazer** volta uma rolada que deu errado; as setas do teclado rolam em linha reta e Home, Page Up, End e Page Down rolam na diagonal.","textTouch":"As três gemas — pronto. **Desfazer** volta uma rolada que deu errado, e tocar fora da grade também funciona, o que ajuda quando a bola está encostada numa borda."}},"keen":{"step1":{"text":"Preencha com 1, 2 e 3 para que cada um apareça uma vez em cada linha e coluna, e para que os algarismos de cada gaiola de contorno grosso deem o resultado da sua pista."},"step2":{"text":"A gaiola **2×** tem produto 2, então os algarismos dela são 1, 1 e 2. Uma gaiola pode repetir um algarismo, mas não na mesma linha ou coluna, então o 2 fica no canto: clique nessa casa e digite **2**.","textTouch":"A gaiola **2×** tem produto 2, então os algarismos dela são 1, 1 e 2. O 2 fica no canto: toque nessa casa e depois em **2** no teclado."},"step3":{"text":"As outras duas casas da gaiola são os 1. Clique na casa **à direita do 2** e digite **1**.","textTouch":"As outras duas casas da gaiola são os 1. Toque na casa **à direita do 2** e depois em **1** no teclado."},"step4":{"text":"A linha de cima já tem o 2 e o 1, então a última casa dela tem que ser o 3. Clique na **casa do canto superior direito** e digite **3**.","textTouch":"A linha de cima já tem o 2 e o 1, então a última casa dela tem que ser o 3. Toque na **casa do canto superior direito** e depois em **3** no teclado."},"step5":{"text":"Está só chutando uma casa? **Clique com o botão direito** na casa do meio e digite **3** para anotar esse algarismo a lápis, em vez de preenchê-lo.","textTouch":"Está só chutando uma casa? **Faça um toque longo** na casa do meio e toque em **3** para anotar esse algarismo em vez de preenchê-lo. A tecla **✎** faz o mesmo numa casa que você já tocou."},"step6":{"text":"Resolva o resto do mesmo jeito; um algarismo repetido na linha ou coluna fica vermelho, assim como uma gaiola cheia que não bate com a pista. No menu de pausa, **Marcas** anota todas as possibilidades para você, e **Resolver** entrega a resposta."}},"lightup":{"step1":{"text":"Todas as casas brancas precisam terminar iluminadas. Uma lâmpada ilumina a própria linha e coluna até uma casa preta bloquear o feixe, e nenhuma lâmpada pode ficar na luz de outra."},"step2":{"text":"Um número diz quantas lâmpadas tocam aquela casa preta. Este **2** só tem duas vizinhas brancas, então as duas levam lâmpada: clique na que está à **direita** dele."},"step3":{"text":"Repare na luz amarela se espalhando ao longo do feixe. Agora clique na casa logo **abaixo** do 2 para a segunda lâmpada."},"step4":{"text":"Um **0** não toca nenhuma lâmpada. **Clique com o botão direito** na casa acima dele para anotar um X: é só um lembrete de que ali não pode ter lâmpada."},"step5":{"text":"O **1** quer exatamente uma lâmpada. A casa abaixo dele já está iluminada, então uma lâmpada ali ficaria no feixe — clique na casa à **esquerda** do 1."},"step6":{"text":"Duas casas na linha de cima continuam escuras, e você já descartou uma delas. Clique na **outra**."},"step7":{"text":"Todas as casas iluminadas, todos os números satisfeitos. **Desfazer** retira uma lâmpada, e as setas do teclado com Enter e Espaço colocam lâmpadas e X sem usar o mouse.","textTouch":"Todas as casas iluminadas, todos os números satisfeitos. **Desfazer** retira uma lâmpada, e um toque longo marca com X qualquer casa que você já descartou."}},"loopy":{"step1":{"text":"Desenhe **um** laço fechado sobre os traços claros entre os pontos. Cada número diz quantos dos quatro lados da sua casa o laço usa."},"step2":{"text":"A casa do meio tem um **4**, então os quatro lados dela fazem parte do laço. **Clique** no lado de cima para desenhar a primeira linha."},"step3":{"text":"Agora o **lado esquerdo**. Clicar de novo numa linha a apaga."},"step4":{"text":"Cada ponto tem duas linhas ou nenhuma, e o ponto onde essas duas se encontram está completo. **Clique com o botão direito** no traço que sobe dele para marcá-lo com um X, como inutilizável."},"step5":{"text":"Faltam dois lados. **Clique** no lado de baixo da casa do meio."},"step6":{"text":"E o **lado direito** fecha o laço. Um só laço, sem pontas soltas, e os quatro **0** ficam de fora."},"step7":{"text":"Resolvido. **Desfazer** volta pelas suas linhas, e **Tipo**, no menu de pausa, troca os quadrados por triângulos, hexágonos e padrões mais estranhos."}},"magnets":{"step1":{"text":"Cada dominó é um ímã, com uma metade **+** e uma metade **−**, ou então é vazio. Os números contam os polos **+** (em cima e à esquerda) e os polos **−** (embaixo e à direita) de cada linha e coluna, e polos iguais nunca podem se tocar."},"step2":{"text":"A linha de baixo quer três polos **−** e só três dominós chegam até ela, então cada um tem que dar um. **Clique com o botão esquerdo** na metade de cima do dominó em pé para deixá-la **+**, mandando o **−** para baixo."},"step3":{"text":"Então o dominó deitado embaixo, à direita, também é um ímã, e o **0** acima da última coluna proíbe um **+** ali. **Clique com o botão esquerdo** na metade esquerda dele para pôr o **+** desse lado."},"step4":{"text":"A quarta coluna já tem o seu único **+** e não quer nenhum **−**, então o dominó acima não pode ser nem uma coisa nem outra. **Clique com o botão direito** nele para marcá-lo como vazio."},"step5":{"text":"A linha de cima ainda precisa de um **+** e de um **−** do dominó deitado à esquerda. A metade direita dele toca um **+**, e polos iguais não podem se tocar — então **clique com o botão esquerdo** na metade esquerda."},"step6":{"text":"Falta um dominó. A primeira coluna já usou o seu **+** lá em cima, então o **+** aqui fica à direita: **clique com o botão esquerdo** na metade direita para terminar."},"step7":{"text":"Resolvido! Clicar de novo na mesma metade inverte o ímã, um segundo clique direito deixa pontos de interrogação para anotar \\"é ímã, mas em que sentido?\\", e **Desfazer** volta."}},"map":{"step1":{"text":"Pinte todas as regiões de modo que duas regiões com um trecho de fronteira em comum nunca tenham a mesma cor. Quatro cores sempre bastam, e aqui ainda faltam três regiões."},"step2":{"text":"Primeiro pegue uma cor: **clique** na **amostra azul**, a segunda da fileira abaixo do mapa."},"step3":{"text":"Com uma cor na mão, um **clique direito** numa região vazia anota um ponto dessa cor — um lembrete de que a região *poderia* ser dessa cor. Experimente na região alta do lado direito."},"step4":{"text":"É mais do que um talvez: essa região já faz fronteira com vermelho, verde e amarelo, então só sobra o azul. **Clique** nela para pintá-la."},"step5":{"text":"Você também pode **arrastar** uma cor de uma região para outra. A região grande do topo agora toca vermelho, verde e azul, então **arraste** o amarelo até ela a partir da região pequena de baixo."},"step6":{"text":"Falta uma região vazia, no **canto inferior esquerdo**: ela faz fronteira com verde, azul e esse novo amarelo, então tem que ser vermelha. **Arraste** o vermelho até ela a partir da região do canto superior direito."},"step7":{"text":"Pronto — um conflito teria mostrado um **!** vermelho na fronteira entre as duas regiões. **Desfazer** volta, e as setas do teclado com **1**–**4** pintam sem usar o mouse.","textTouch":"Pronto — um conflito teria mostrado um **!** vermelho na fronteira entre as duas regiões. **Desfazer** volta, e a amostra com a borracha, no fim da fileira, limpa uma região sobre a qual você mudou de ideia."}},"mines":{"step1":{"text":"Cada número conta as minas nas oito casas em volta dele. Duas minas estão escondidas sob o bloco coberto; descubra todo o resto sem pisar em nenhuma."},"step2":{"text":"Este **1** só toca uma casa coberta, então essa casa é uma mina. **Clique com o botão direito** nela para colocar uma bandeira."},"step3":{"text":"O **1** abaixo dele já tem a sua única mina marcada com bandeira, então as outras vizinhas são seguras. **Clique com o botão esquerdo nesse 1** para abrir todas de uma vez."},"step4":{"text":"O **2** acima do bloco já conta uma bandeira e só tem uma casa coberta. **Clique com o botão direito** nessa casa."},"step5":{"text":"As duas minas estão marcadas, então a última casa coberta tem que ser segura. **Clique com o botão esquerdo** nela para terminar a grade."},"step6":{"text":"Limpo. Um segundo clique direito tira a bandeira, e **Desfazer** te salva se você pisar numa mina."}},"net":{"step1":{"text":"Cada peça tem um pedaço de fio, e a rede inteira foi girada ao acaso. Gire as peças até todas as nove estarem ligadas à peça marcada no meio: os fios **azuis** já têm energia, os cinza não."},"step2":{"text":"A peça do canto inferior esquerdo aponta o fio direto para a parede. **Clique com o botão esquerdo** nela para dar um quarto de volta no sentido anti-horário, para o fio chegar à vizinha da direita."},"step3":{"text":"O **clique direito** gira a peça no outro sentido. Dê à peça do canto inferior direito um quarto de volta no sentido horário, e o fio dela vira para a esquerda."},"step4":{"text":"A peça do meio tem fios nos quatro lados, então não tem como estar errada. **Clique com o botão do meio** nela para travá-la, ou ative o **cadeado** ao lado de Desfazer e clique nela: uma peça travada fica sombreada e não gira mais.","textTouch":"A peça do meio tem fios nos quatro lados, então não tem como estar errada. Ative o **cadeado** ao lado de Desfazer e toque na peça para travá-la: uma peça travada fica sombreada e não gira mais."},"step5":{"text":"Sobra uma peça. Com o **cadeado** desativado, **clique com o botão esquerdo** no canto superior direito para virar o fio dela para a esquerda e acender a rede inteira.","textTouch":"Sobra uma peça. Com o **cadeado** desativado, toque no canto superior direito para virar o fio dela para a esquerda e acender a rede inteira."},"step6":{"text":"As nove peças têm energia. **Desfazer** volta pelas suas jogadas; com o teclado, as setas movem um cursor e **A**, **D** e **F** giram a peça sob ele.","textTouch":"As nove peças têm energia. **Desfazer** volta pelas suas jogadas, travar uma peça de que você tem certeza a protege de um toque acidental, e **Misturar** gira de novo todas as peças não travadas."}},"netslide":{"step1":{"text":"Cada pedaço de fio precisa terminar ligado à fonte de energia. Os fios azuis têm energia; os cinza, desenhados a lápis, não."},"step2":{"text":"A fonte fica na peça do meio. Essa peça nunca se move, por isso a linha e a coluna do meio não têm setas — todo o resto desliza."},"step3":{"text":"Clique na seta à **esquerda da linha de baixo** para deslizar essa linha uma casa para a esquerda; o fio que sai por um lado reaparece do lado direito."},"step4":{"text":"A linha de baixo agora está toda ligada, mas continua cinza: nada a liga para cima, até a fonte."},"step5":{"text":"**Clique com o botão direito** na seta **acima da terceira coluna**. Um clique direito inverte a seta, então essa coluna desliza para baixo e os últimos fios acendem."},"step6":{"text":"Tudo com energia! **Resolver** mostra uma resposta se você ficar preso, e o menu **Tipo** tem grades contínuas, em que os fios saem por uma borda e entram pela outra."}},"pattern":{"step1":{"text":"Os números ao lado de cada linha e coluna são os tamanhos dos seus blocos de casas pretas, em ordem. Descubra quais casas são pretas e pinte-as."},"step2":{"text":"A **terceira coluna** diz 1 2: uma preta, um espaço, depois duas pretas. Em quatro casas isso só cabe de um jeito, com o par embaixo. **Arraste** para baixo sobre elas."},"step3":{"text":"Então a casa acima do par é o espaço. **Clique com o botão direito** nela para marcar um ponto, que indica uma casa que você sabe que é branca."},"step4":{"text":"E a casa de cima dessa coluna é a preta solitária da pista. **Clique** nela."},"step5":{"text":"A **última coluna** diz 3. Não importa onde um bloco de três fique em quatro casas: ele sempre cobre as duas do meio, então **arraste** para baixo sobre elas."},"step6":{"text":"Uma pista fica cinza quando a linha dela está completa. Continue avançando assim, ou deixe **Resolver** terminar este; um clique do meio devolve uma casa ao estado desconhecido."}},"pearl":{"step1":{"text":"Desenhe um laço fechado de centro de casa em centro de casa. Ele não precisa passar por todas as casas, mas tem que passar por todas as pérolas."},"step2":{"text":"Uma **pérola branca** significa que o laço passa reto por ela. Na linha de cima, o único caminho reto é na horizontal, então **arraste** da casa à esquerda dessa pérola até a casa à direita dela."},"step3":{"text":"Essa pérola já tem os dois segmentos, então mais nada pode sair dela. **Clique com o botão direito** na aresta abaixo dela para marcar esse lado com um X."},"step4":{"text":"Uma **pérola preta** faz uma curva, e depois o laço segue reto pela casa de cada lado dela. A da **borda esquerda** não pode virar para baixo — isso exigiria uma linha reta passando pelo canto inferior esquerdo — então **clique** na aresta direita dela."},"step5":{"text":"Então a casa ao lado dela segue reto — e a pérola branca logo depois também. **Arraste** dessa casa até a quarta coluna."},"step6":{"text":"Continue trabalhando a partir das pérolas; uma pérola ganha um halo vermelho assim que a regra dela é quebrada. **Resolver** desenha o laço completo se você quiser vê-lo."}},"pegs":{"step1":{"text":"Um pino salta por cima de um vizinho até o buraco vazio logo depois, e o pino saltado sai do tabuleiro. Limpe este tabuleiro pequeno até sobrar **um pino**: três saltos."},"step2":{"text":"**Arraste** o pino do alto da haste para baixo, por cima do vizinho, até o buraco de baixo."},"step3":{"text":"Clicar também funciona. Clique no **pino da direita** para pegá-lo e depois clique no buraco duas casas à esquerda dele."},"step4":{"text":"Último salto: arraste o pino do **canto inferior esquerdo** por cima do vizinho até o meio."},"step5":{"text":"Sobrou um pino — resolvido. **Desfazer** volta um salto quando você fica sem saída, e as setas do teclado também funcionam: Enter pega um pino e depois uma seta o empurra.","textTouch":"Sobrou um pino — resolvido. **Desfazer** volta um salto sempre que você ficar sem saída, até onde você quiser."}},"range":{"step1":{"text":"Pinte casas de preto para que cada número conte exatamente as casas brancas que a sua própria casa vê: ela mesma, mais todas as casas em linha reta para cima, para baixo, para a esquerda e para a direita, até uma casa preta ou a borda bloquear a visão."},"step2":{"text":"O **6** vê seis casas agora — a linha inteira mais as duas abaixo dele. Então nada nessa linha ou coluna pode ficar preto."},"step3":{"text":"O **2** só pode ver a si mesmo e mais uma casa, e a casa acima dele tem que continuar branca por causa do 6. Então **clique** na casa à esquerda dele para pintá-la de preto."},"step4":{"text":"Isso deixa a casa do canto superior direito como a única casa branca que o 2 ainda vê. **Clique com o botão direito** nela para anotar um ponto, que é como você marca uma casa que sabe que continua branca."},"step5":{"text":"O **3** já vê a si mesmo e as duas casas à esquerda dele, então a casa à direita tem que ser preta. **Clique** nela."},"step6":{"text":"Terminado com duas casas pretas — os pontos são só anotações. **H** preenche uma casa que se deduz do resto, e **Resolver** marca a grade inteira.","textTouch":"Terminado com duas casas pretas — os pontos são só anotações. **Resolver** marca a grade inteira quando você preferir ver a resposta."}},"rect":{"step1":{"text":"Divida esta grade em retângulos de modo que cada retângulo tenha exatamente um número, e esse número seja a quantidade de casas que ele cobre."},"step2":{"text":"Um retângulo só pode ter um número, e o **3** está logo abaixo do **4** — então o 4 tem que ficar com a linha de cima inteira. **Arraste** do 4 até o fim da linha, à direita."},"step3":{"text":"Clicar num único traço da grade adiciona ou remove só essa aresta. **Clique** no traço do lado direito do **3**."},"step4":{"text":"Um 9 só pode ser um bloco 3×3, e só sobra um lugar para ele. **Arraste** pelo bloco destacado, da casa do canto superior esquerdo até o canto inferior direito: isso também fecha o 3 lá dentro."},"step5":{"text":"Todas as casas estão num retângulo do tamanho certo. Um **arrasto com o botão direito** apaga as linhas dentro de uma área, mas mantém o contorno, e **Desfazer** anula um traço."}},"samegame":{"step1":{"text":"Limpe o tabuleiro removendo grupos de duas ou mais casas vizinhas da mesma cor. Um grupo de _n_ casas vale (_n_ − 2)² pontos, então são os grupos grandes que contam."},"step2":{"text":"Clique em qualquer uma das quatro casas **vermelhas** do topo. O primeiro clique só seleciona o grupo: ele fica mais claro e ganha um contorno grosso."},"step3":{"text":"Clique de novo no grupo selecionado para tirá-lo do tabuleiro e ganhar quatro pontos. As casas acima de um buraco caem nele, e uma coluna vazia puxa as vizinhas para o lado."},"step4":{"text":"Esta casa **verde** está sozinha. Nada ao lado dela tem a mesma cor, então ela nunca pode ser selecionada — tem que esperar o tabuleiro trazer um parceiro para o lado dela."},"step5":{"text":"Agora o **par azul** destacado aqui. Clique em qualquer uma das duas casas para selecionar as duas."},"step6":{"text":"Mudou de ideia? **Clique com o botão direito** na seleção para desfazê-la — nada é removido até você clicar nela uma segunda vez."},"step7":{"text":"O jogo é só isso. Todo tabuleiro pode ser limpo, então continue — **Desfazer** volta atrás quando você deixa uma casa isolada, e não tem botão Resolver para te salvar."}},"signpost":{"step1":{"text":"Cada casa tem uma seta. Junte as seis numa só corrente numerada de **1 a 6**, em que cada casa é seguida por uma casa em algum ponto na direção da sua própria seta."},"step2":{"text":"O **1** aponta para a direita. **Arraste** dele até a casa à direita para fazer dela o 2."},"step3":{"text":"O **3** se encaixou sozinho, como sempre acontece com números seguidos que apontam na direção certa. Agora **arraste** da casa do canto inferior direito até a casa à esquerda dela."},"step4":{"text":"Nenhuma dessas duas tem número ainda, então o par recebe os rótulos **a** e **a+1**. **Clique com o botão direito** na casa do meio da linha de baixo para separá-las de novo."},"step5":{"text":"Números de verdade são melhores: **arraste** o **3** até a casa abaixo dele, que vira o 4."},"step6":{"text":"Última ligação: **arraste** esse 4 até a casa à esquerda dele. Ela vira o 5, e o 6 fecha o caminho sozinho."},"step7":{"text":"Resolvido. Um **arrasto com o botão direito** liga no sentido inverso, de uma casa para a anterior, e **Resolver** mostra o caminho completo."}},"singles":{"step1":{"text":"Escureça casas até nenhum número se repetir entre as casas brancas de qualquer linha ou coluna. Duas casas escuras nunca podem ter um lado em comum, e as casas brancas precisam continuar formando uma única região ligada."},"step2":{"text":"Os dois **4** desta linha têm uma casa entre eles. Escurecer essa casa deixaria os dois 4 brancos, então ela mesma tem que ser branca — **clique com o botão direito** nela para marcá-la com um círculo."},"step3":{"text":"Esse **3** com círculo é branco com certeza, e a coluna dele tem outro 3 no topo. **Clique com o botão esquerdo** no de cima para escurecê-lo."},"step4":{"text":"Casas escuras nunca se tocam, então o **4** logo à direita fica branco. **Clique com o botão esquerdo** no outro 4 dessa última coluna."},"step5":{"text":"De novo o mesmo: o **2** logo acima da sua nova casa escura é branco, e a linha dele tem outro 2 na ponta esquerda. **Clique com o botão esquerdo** nesse."},"step6":{"text":"Falta um. O **3** acima dessa casa escura é branco, então o outro 3, no pé da coluna, tem que sair. **Clique com o botão esquerdo** nele."},"step7":{"text":"Resolvido, e as casas brancas continuam todas ligadas. Os círculos são só anotações, e **Desfazer** volta pelas suas jogadas."}},"sixteen":{"step1":{"text":"Coloque as peças em ordem, de **1 a 9**, da esquerda para a direita. As setas em volta da borda deslizam uma linha ou coluna inteira uma casa, e o que sai por um lado volta pelo outro."},"step2":{"text":"Clique na seta **acima da segunda coluna** para deslizar essa coluna uma casa para cima; isso completa a linha do meio."},"step3":{"text":"Agora a linha de baixo precisa ir para a direita. **Clique com o botão direito** na seta à **esquerda da linha de baixo**: um clique direito manda a linha no sentido oposto."},"step4":{"text":"A última: clique na seta à **esquerda da linha de cima** para deslizá-la para a esquerda e terminar a grade."},"step5":{"text":"Em ordem! **Tipo**, no menu de pausa, oferece grades maiores, e a opção **Personalizado…** dele pode embaralhar uma com o número de jogadas que você escolher, para você desfazer."}},"slant":{"step1":{"text":"Desenhe uma diagonal em cada casa. Um número num círculo conta as linhas que tocam aquele canto, e as linhas nunca podem fechar um laço."},"step2":{"text":"O **0** no canto superior esquerdo não quer nada tocando nele, então a única casa dele tem que inclinar para o outro lado. **Clique com o botão direito** nessa casa para desenhar uma `/`."},"step3":{"text":"O **4** precisa de uma linha de cada uma das quatro casas em volta. **Clique com o botão esquerdo** na que está acima e à esquerda dele — um clique esquerdo desenha uma `\\\\`."},"step4":{"text":"A casa acima e à direita do **4** tem que inclinar para baixo e para a esquerda. **Clique com o botão direito** nela para uma `/`."},"step5":{"text":"O **1** na borda esquerda já tem a sua única linha, vinda da casa abaixo dele. Então a casa acima tem que inclinar para o lado contrário: **clique com o botão esquerdo** nela para uma `\\\\`."},"step6":{"text":"Continue do mesmo jeito. Um número que já não tem como dar certo fica vermelho, assim como qualquer linha presa num laço fechado. **Resolver**, no menu de pausa, preenche o resto."}},"solo":{"step1":{"text":"Cada linha, cada coluna e cada **bloco 2×2** com contorno tem que ter 1, 2, 3 e 4 exatamente uma vez. Faltam três casas nesta grade pequena."},"step2":{"text":"Este **bloco** já tem um 2, um 3 e um 4, então a casa vazia dele só pode ser **1**. Clique nessa casa e aperte a tecla **1**.","textTouch":"Este **bloco** já tem um 2, um 3 e um 4, então a casa vazia dele só pode ser **1**. Toque nessa casa e depois em **1** no teclado."},"step3":{"text":"Na dúvida sobre uma casa? **Clique com o botão direito** nesta casa vazia e aperte **2** para anotar o algarismo a lápis.","textTouch":"Na dúvida sobre uma casa? Toque nesta casa vazia, ative o **✎** no teclado e toque em **2** para anotar o algarismo a lápis."},"step4":{"text":"A linha dela já tem 3, 4 e 1, então a anotação estava certa. **Clique com o botão esquerdo** na mesma casa e aperte **2** para escrever a resposta.","textTouch":"A linha dela já tem 3, 4 e 1, então a anotação estava certa. A casa continua selecionada, então toque em **✎** para parar de anotar e depois em **2** para escrever a resposta."},"step5":{"text":"Falta uma casa. A linha dela já tem 4, 3 e 1 — clique nela e aperte o algarismo que falta.","textTouch":"Falta uma casa. A linha dela já tem 4, 3 e 1 — toque nela e depois no algarismo que falta, no teclado."},"step6":{"text":"Resolvido! **Desfazer** anula um algarismo errado, e a tecla **M** anota todas as opções em todas as casas vazias de uma vez.","textTouch":"Resolvido! **Desfazer** anula um algarismo errado, e **Marcas**, no menu de pausa, anota todas as opções em todas as casas vazias de uma vez."}},"tents":{"step1":{"text":"Monte uma tenda ao lado de cada árvore — acima, abaixo, à esquerda ou à direita dela, nunca na diagonal. Duas tendas não podem se tocar, e os números contam as tendas de cada linha e coluna."},"step2":{"text":"O **0** no fim da segunda linha significa que essa linha não tem tendas. **Clique com o botão direito** na casa ao lado da árvore para marcá-la como grama."},"step3":{"text":"A terceira coluna também está vazia. **Arraste com o botão direito** da casa de cima até a terceira linha para marcar as três como grama de uma vez."},"step4":{"text":"A árvore de baixo à direita fica no canto, com outra árvore ao lado, então a única vizinha livre é a de cima. **Clique com o botão esquerdo** nessa casa para montar uma tenda."},"step5":{"text":"Essa tenda completa a terceira linha, então a árvore da borda esquerda também não pode ter a tenda embaixo. **Clique com o botão esquerdo** na casa do canto superior esquerdo."},"step6":{"text":"Uma árvore continua sem tenda, e só a casa à esquerda dela está livre. **Clique com o botão esquerdo** nela para completar o acampamento."},"step7":{"text":"Resolvido! Clicar de novo numa tenda ou numa marca de grama a apaga, as setas do teclado com Enter e Espaço fazem o mesmo, e **Desfazer** volta.","textTouch":"Resolvido! Tocar de novo numa tenda ou numa marca de grama a apaga, e **Desfazer** volta."}},"towers":{"step1":{"text":"Cada linha e cada coluna tem uma torre de cada altura, de 1 a 4. Um número na borda conta as torres que dá para **ver** dali: uma torre mais alta esconde todas as mais baixas atrás dela."},"step2":{"text":"O **1** à direita da linha de cima significa que só se vê uma torre daquele lado, então a mais próxima tem que ser a mais alta. Clique nessa casa e aperte **4**.","textTouch":"O **1** à direita da linha de cima significa que só se vê uma torre daquele lado, então a mais próxima tem que ser a mais alta. Toque nessa casa e depois em **4** no teclado."},"step3":{"text":"Você pode anotar possibilidades em vez de responder. **Clique com o botão direito** na casa vazia da ponta esquerda da linha de cima e aperte **1**.","textTouch":"Você pode anotar possibilidades em vez de responder. Toque na casa vazia da ponta esquerda da linha de cima, ative o **✎** no teclado e toque em **1**."},"step4":{"text":"O **4** à esquerda da linha diz que as quatro torres são visíveis, então elas sobem 1-2-3-4 a partir desse lado. **Clique com o botão esquerdo** na casa e aperte **1** para responder.","textTouch":"O **4** à esquerda da linha diz que as quatro torres são visíveis, então elas sobem 1-2-3-4 a partir desse lado. A casa continua selecionada, então toque em **✎** para parar de anotar e depois em **1** para responder."},"step5":{"text":"Falta uma casa, e o **1** ao lado da linha dela de novo põe a torre mais alta mais perto. Clique nela e aperte **4**.","textTouch":"Falta uma casa, e o **1** ao lado da linha dela de novo põe a torre mais alta mais perto. Toque nela e depois em **4** no teclado."},"step6":{"text":"Resolvido! **Backspace** esvazia uma casa que você errou, e **Resolver**, no menu de pausa, termina um quebra-cabeça que te venceu.","textTouch":"Resolvido! **⌫** no teclado esvazia uma casa que você errou. No menu de pausa, **Marcas** anota todas as possibilidades e **Resolver** termina um quebra-cabeça que te venceu."}},"tracks":{"step1":{"text":"Uma ferrovia vai da entrada, à esquerda, até a saída, embaixo, e cada casa por onde ela passa tem exatamente dois trechos de trilho. Os números dizem por quantas casas daquela coluna ou linha a ferrovia passa."},"step2":{"text":"A peça da entrada já sobe até a **casa do canto superior esquerdo**, e os lados de cima e da esquerda dessa casa são a borda da grade. Então o segundo trecho dela tem que ir para a direita: **clique** logo à direita do meio da casa."},"step3":{"text":"A **coluna da esquerda** tem contagem **2**, e a entrada já usa as duas casas, então nada passa pela metade de baixo dela. **Clique com o botão direito** no meio de uma casa para marcá-la com um X — um arrasto com o botão direito marca uma sequência inteira."},"step4":{"text":"A **coluna da direita** tem contagem **4**, então a ferrovia passa por todas as casas dela, e as casas do topo e do fundo só podem virar para dentro. **Arraste** da casa do canto superior direito até a do canto inferior direito."},"step5":{"text":"A **linha de baixo** precisa de três casas e a coluna da esquerda está terminada, então o canto inferior direito faz parte da ferrovia. Ela não pode sair da grade, então vira para a esquerda e para cima: **clique** no lado esquerdo dessa casa."},"step6":{"text":"As contagens ficam cinza quando a linha delas está certa e vermelhas quando não tem mais como dar certo. Continue seguindo as pontas soltas, ou deixe **Resolver** terminar a ferrovia."}},"twiddle":{"step1":{"text":"Coloque os números de volta em ordem, de **1 a 9**. Uma jogada gira um bloco quadrado de quatro peças um quarto de volta; três giros terminam este tabuleiro."},"step2":{"text":"Clique no meio das **quatro peças do canto superior esquerdo**. Um clique esquerdo gira esse bloco no sentido anti-horário, o que põe 1, 2, 3 no topo."},"step3":{"text":"**Clique com o botão direito** no meio das **quatro peças do canto inferior direito** para girar esse bloco no sentido horário."},"step4":{"text":"Termine com um clique esquerdo no meio das **quatro peças do canto inferior esquerdo**."},"step5":{"text":"Pronto! O menu **Tipo** tem blocos maiores e um modo *orientável*, em que cada peça também precisa terminar na posição certa."}},"undead":{"step1":{"text":"Preencha as cinco casas vazias com fantasmas, vampiros e zumbis — a contagem no topo diz quantos há de cada. Cada número conta os monstros vistos ao olhar ao longo daquela linha, e os espelhos desviam o olhar."},"step2":{"text":"Olhando da **esquerda da linha de cima**, não se vê nada; o espelho desvia essa mesma linha de visão para o topo, onde o **1** vê um monstro. Só um fantasma fica invisível de frente e aparece num espelho. **Clique** nessa casa."},"step3":{"text":"O **4** do canto inferior esquerdo ziguezagueia pelos espelhos, passando por três casas, e vê todas elas. Vampiros não aparecem em espelhos, então o único vampiro tem que ser a casa do meio da coluna da esquerda. **Clique** nela."},"step4":{"text":"Um clique só alterna entre os monstros. **Aperte V**: G, V e Z colocam um fantasma, um vampiro ou um zumbi direto na casa destacada.","textTouch":"Um toque só alterna entre os monstros, um de cada vez. Em vez disso, toque em **Vampiro** no teclado: ele coloca esse monstro direto na casa destacada."},"step5":{"text":"A **linha do meio** é uma visão reta, sem espelhos, e os dois **1** veem um único monstro — o vampiro. Então as duas vizinhas dele têm que ser fantasmas. **Clique** na casa central."},"step6":{"text":"Um **clique direito** anota um lembrete pequeno em vez de colocar alguma coisa. Experimente na casa da direita dessa linha; cada clique direito adiciona o próximo monstro."},"step7":{"text":"Faltam duas casas: a do lembrete é o terceiro fantasma, e a última é o zumbi. Os números ficam cinza quando a linha deles está resolvida; **Resolver** termina o labirinto se você preferir só assistir."}},"unequal":{"step1":{"text":"Cada linha e cada coluna precisa de 1, 2, 3 e 4, uma vez cada — e cada sinal entre duas casas tem que apontar para a **menor** do par."},"step2":{"text":"O sinal aqui aponta para a direita, então a casa da **esquerda** é a maior. Esta linha ainda precisa de um 2 e de um 3: clique na casa da esquerda e aperte **3**.","textTouch":"O sinal aqui aponta para a direita, então a casa da **esquerda** é a maior. Esta linha ainda precisa de um 2 e de um 3: toque na casa da esquerda e depois em **3** no teclado."},"step3":{"text":"A casa para onde o sinal aponta recebe o número menor. Clique nela e aperte **2**.","textTouch":"A casa para onde o sinal aponta recebe o número menor. Toque nela e depois em **2** no teclado."},"step4":{"text":"A coluna dela agora tem um 3, então esta casa só pode ser 2. **Clique com o botão direito** nela e aperte **2** para anotar isso a lápis.","textTouch":"A coluna dela agora tem um 3, então esta casa só pode ser 2. Toque nela, ative o **✎** no teclado e toque em **2** para anotar isso a lápis."},"step5":{"text":"Uma anotação não é uma resposta. **Clique com o botão esquerdo** na mesma casa e aperte **2** para confirmar.","textTouch":"Uma anotação não é uma resposta. A casa continua selecionada, então toque em **✎** para parar de anotar e depois em **2** para confirmar."},"step6":{"text":"Falta uma casa. Clique nela e aperte **3** para completar o quadrado.","textTouch":"Falta uma casa. Toque nela e depois em **3** no teclado para completar o quadrado."},"step7":{"text":"Resolvido! **Desfazer** anula um algarismo, e **Resolver** preenche a resposta se um quebra-cabeça te vencer.","textTouch":"Resolvido! **Desfazer** anula um algarismo, **Marcas** e **Dica** anotam as possibilidades, e **Resolver** preenche a resposta se um quebra-cabeça te vencer."}},"unruly":{"step1":{"text":"Pinte cada casa de preto ou branco. Cada linha e cada coluna precisa de **três de cada**, e nenhuma cor pode aparecer **três vezes seguidas**. Três casas ainda estão indefinidas."},"step2":{"text":"Esta linha já tem as três casas brancas, então a indefinida tem que ser preta. **Clique com o botão esquerdo** nela: um clique esquerdo pinta de preto."},"step3":{"text":"Esta linha já tem três pretas, então a casa indefinida é branca. **Clique com o botão direito** nela — o clique direito vai no sentido contrário e pinta de branco primeiro."},"step4":{"text":"A última casa indefinida tem duas pretas à esquerda, e uma terceira seguida não é permitida. **Clique com o botão direito** nela para pintá-la de branco e terminar a grade."},"step5":{"text":"Resolvido! Clicar de novo numa casa pintada passa para a outra cor e depois de volta para indefinida, e **Desfazer** volta pelas suas jogadas."}},"untangle":{"step1":{"text":"Seis pontos estão num anel, ligados por oito linhas. Dois pares delas se cruzam — são as vermelhas. Arraste os pontos até não sobrar nenhuma vermelha."},"step2":{"text":"Primeiro clique em **Encaixar**, o botão de grade ao lado de Desfazer (ou aperte **G**). Isso liga a grade de encaixe, para que um ponto solto caia num dos pontinhos claros no centro de uma casa."},"step3":{"text":"**Arraste** o ponto do topo do anel para a casa vazia do **canto superior esquerdo**.","textTouch":"**Arraste** o ponto do topo do anel para o espaço vazio no **canto superior esquerdo** do tabuleiro. Não precisa cair num lugar exato — basta o cruzamento sumir."},"step4":{"text":"Falta um cruzamento, ali à direita. **Arraste** o ponto mais baixo para o **canto inferior direito**, que está vazio.","textTouch":"Falta um cruzamento, ali à direita. **Arraste** o ponto mais baixo para o **canto inferior direito**, que está vazio — a última linha vermelha some assim que o cruzamento se desfaz."},"step5":{"text":"Desembaraçado. **Resolver** desfaz qualquer emaranhado para você, e as setas do teclado movem um cursor de ponto em ponto, com Enter para pegar e soltar.","textTouch":"Desembaraçado. As linhas vermelhas são as que ainda se cruzam, então continue arrastando até não sobrar nenhuma — ou deixe **Resolver** desfazer o emaranhado para você."}}}'),Fe={$locale:`pt`,$name:q,$dir:`ltr`,ui:J,touchPhrases:Y,messages:X,status:Z,games:Q,tutorials:$};export{g as A,ee as B,A as C,S as D,w as E,o as F,i as I,oe as L,f as M,u as N,b as O,c as P,ie as R,M as S,E as T,t as V,H as _,Ee as a,I as b,be as c,me as d,fe as f,W as g,se as h,Oe as i,m as j,v as k,ve as l,ce as m,Me as n,we as o,ue as p,Ae as r,Se as s,Pe as t,ge as u,B as v,O as w,P as x,R as y,ne as z};
//# sourceMappingURL=i18n-pt-jU7fTWRC.js.map