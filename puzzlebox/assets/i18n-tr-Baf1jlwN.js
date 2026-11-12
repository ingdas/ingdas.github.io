import{t as e}from"./index-DIYwYEVR.js";var t=e({default:()=>n}),n="## Genel kontroller\n\n- **Yeni** yepyeni bir bulmaca verir, **Baştan** ise bu bulmacayı başlangıcına döndürür;\n  **Geri al** ve **Yinele** hamlelerinde gezinir, baştan başlamak da geri alınabilir.\n- **Çöz**, bulmacanın bir cevabı varsa onu gösterir. Bu da geri alabileceğin bir adım ekler.\n- Çoğu bulmacada sağ tıklama ikinci eylemdir — işaretleme, bayrak koyma ya da ters yöne\n  çevirme. Bir bulmaca kullanıyorsa orta tıklama da üçüncüsüdür.\n- **Tür** hazır boyutlar ve zorluklar arasında geçiş yapar; **Özel…** kendi ayarlarını\n  yapmanı sağlar.\n- **Paylaş**, başka birinin tam olarak bu bulmacayı oynayabilmesi için paylaşabileceğin\n  kodları gösterir.\n\n### Klavye (Keyboard)\n\n- **Yeni oyun**: `N` · **Geri al**: `U` ya da `Ctrl+Z` · **Yinele**: `R` ya da `Ctrl+Y`\n- **Çöz**: `Ctrl+S` (varsa). **Bu yardım**: `?`, `Esc` de onu kapatır. **Duraklat**: `Esc`.\n- Çoğu bulmacada ok tuşları tahtada bir imleç gezdirir; `Enter` imlecin üzerinde\n  sol tıklama gibi, `Space` de sağ tıklama gibi davranır.\n- Menülerde ok tuşları bir karttan ya da düğmeden ötekine geçer; `Enter` seçer, `Esc`\n  geri döner.\n- Oyun kumandası da olur: yön tuşları hareket ettirir, `A` seçer ya da tıklar, `X` sağ\n  tıklamadır, `B` geri döner, `Start` duraklatır, `LB` ve `RB` geri alır ve yineler, `Y`\n  de ipucu verir.\n  Sayı yazdığın bulmacalarda `RT` seni ekrandaki tuşlara götürür ve geri getirir.\n",ee=e({default:()=>te}),te=`## Dokunmatik ekranda

- Ana eylem için **dokun**, ikincisi için **uzun dokun**. Bir bulmacanın üçüncü eylemi
  varsa ona **iki parmakla** dokun.
- Araç çubuğundaki ilk yuvarlak düğme (kare içinde bir nokta) ikisinin yerini değiştirir;
  böylece en çok kullandığın eylem her zaman tek dokunuş uzağında olur. Yerleri
  değiştirildiği sürece düğmede yanan bir bayrak görünür. Uzun dokunuş o zaman diğerini
  yapar.
- Büyük bir ızgaranın karelerini büyütmek için tahtayı **iki parmakla aç**, sonra üzerinde
  gezinmek için **iki parmakla sürükle**. Bulmacanın tamamını yeniden görmek için parmaklarını
  birbirine yaklaştır. **Duraklat** menüsünde aynı iki boyut düğme olarak da var.
- **Duraklat** kontrollerin geri kalanını barındırır: bulmaca türü, yeni bulmaca, baştan başla,
  çöz, paylaş ve ses ile dil Ayarları. Menü açıkken saat durur.
`,ne=e({default:()=>re}),re=`# Kara Kutu

Gölgeli bir kutunun içinde birkaç top saklı. Kutunun çevresinde lazer girişlerinden oluşan
bir çerçeve var. Herhangi bir girişten kutuya lazer ateşle ve neyin çıktığına bak:
sonuçlardan topların nerede olması gerektiğini çıkar, onları işaretle ve cevabını kontrol
ettir.

Bir ışın, yoluna bir top çıkmadıkça düz bir çizgide ilerler:

- Tam önündeki bir top ışını **yutar**. Giriş **H** (isabet) gösterir.
- Çaprazda önündeki bir top ışını kendisinden uzağa 90° **saptırır**. İki çaprazda da top
  varsa ışın dosdoğru geri döner. Sapmalar art arda gelebilir, yani bir ışın çıkmadan önce
  epey dolaşabilir.
- Girdiği girişten geri çıkan ışın **yansımıştır** ve **R** ile gösterilir. Kutuya daha
  girmeden sapacak bir ışın da öyledir; bu, girişinin çaprazında bir top durduğunda olur.
- Aksi hâlde ışın başka bir yerden çıkar ve iki giriş aynı **numarayı** (ve aynı rengi)
  alır; böylece her atışın nereden girip nereden çıktığını görebilirsin.

Doğru sayıda top işaretlediğinde sol üst köşede yeşil bir düğme belirir. Kontrol etmek
için ona tıkla. Hiçbir lazer senin yerleşimini bilgisayarınkinden ayırt edemiyorsa
yerleşimin doğru sayılır — birkaç topla aynı şekilde davranan birden fazla yerleşim
olabilir ve hangisini bulsan kazanırsın.

Yanlış bir yerleşim oyunu bitirir ve cevabı gösterir, bu yüzden yalnızca emin olduğunda
kontrol et: bulduğun toplar siyahtır, yanlış işaretlerin üstü kırmızıyla çizilir,
kaçırdığın toplar kırmızıdır, ateşlediğin ve yerleşiminin yanlış açıkladığı her lazer
halkayla çevrilir, hiç ateşlemediğin ama iki yerleşimi birbirinden ayırt edecek lazerler
de şimdi ateşlenip kırmızıyla yazılır. Geri al, denemeye devam etmen için seni geri
götürür. Çöz ise pes eder ve gerçek topları yerleştirir.

## Kontroller

Durum satırı işaretlediğin topları ve ateşlediğin lazerleri sayar; bir kontrolden sonra
da toplarından kaçının yanlış olduğunu ve kaçını kaçırdığını söyler.

### Fare ve dokunmatik

- Oradan bir lazer ateşlemek için **bir girişe tıkla**. Işının iki ucunu birden yakmak için
  daha önce ateşlenmiş bir girişe tıkla; ışığı söndürmek için ona yeniden ya da başka
  herhangi bir yere tıkla.
- Oraya bir top işaretlemek için **kutunun içine tıkla**; işareti kaldırmak için yeniden
  tıkla.
- Yanlışlıkla değiştirmemek için bir kareyi **kilitlemek** üzere **ona sağ tıkla**; kilidi
  açmak için yeniden sağ tıkla. Bir girişe sağ tıklamak, yanındaki bütün satırı ya da
  sütunu kilitler veya kilidini açar.
- İşaretlerini kontrol ettirmek için **köşedeki düğmeye tıkla**.

### Klavye (Keyboard)

- **Ok tuşları** kutunun ve girişlerinin üzerinde bir imleç gezdirir.
- **Enter** sol tıklama gibi davranır: ateşler, işaretler ya da imleç düğmenin üzerindeyse
  kontrol eder.
- **Space** sağ tıklama gibi davranır; kilitler ya da kilidi açar.

## Parametreler

- Kutunun **Genişlik** ve **Yükseklik** değerleri. Her satır ve sütunun iki ucunda da bir
  lazer girişi vardır.
- **Top sayısı**: kaç top saklandığı. Tek bir sayı ya da bilgisayarın seçmesi için \`3-6\`
  gibi bir aralık ver; bu durumda top sayısını da bulman gerekir ve kontrol düğmesi,
  aralık içindeki her işaret sayısında belirir.
`,ie=e({default:()=>ae}),ae=`# Köprüler

Suyun üzerine, her birinde bir sayı olan adalar dağılmış. Onları köprülerle öyle bağla ki:

- her köprü iki ada arasında dümdüz yatay ya da dikey gitsin;
- bir adanın sayısı, ona değen köprülerin tam sayısı olsun;
- iki ada paralel köprülerle bağlanabilsin ama en fazla iki köprüyle (bu sınır özel
  ayarlarda değiştirilebilir);
- hiçbir köprü bir başkasını kesmesin;
- köprülerin üzerinden yürüyerek her adadan diğer her adaya ulaşılabilsin.

Hatalar kırmızıyla gösterilir: çok fazla köprüsü olan bir ada, artık yeterince köprü
alamayacak bir ada (kalan komşuları dolu ya da tek yolları başka köprülerle veya kendi
koyduğun "köprü yok" işaretleriyle kapalı) ve zaten tamamlanmış ama geri kalanlardan kopuk
bir ada grubu. Döngüler yasaksa döngü oluşturan köprüler de kırmızı olur.

## Kontroller

**Çöz** çözümü doldurur ve oraya ait olmayan köprüleri kaldırır.

### Fare ve dokunmatik

- Aralarına köprü kurmak için bir adadan bir komşusuna doğru **sürükle**. Yalnızca yönü
  belli edecek kadar hareket etmen yeter; köprü o yöndeki en yakın adaya oturur. İkinci bir
  paralel köprü için yeniden sürükle; sınıra ulaşıldıktan sonra bir kez daha sürüklemek
  hepsini kaldırır.
- "Burada köprü yok" işareti koymak ya da birini silmek için aynı şekilde
  **sağ tuşla sürükle**.
- Bitti diye işaretlemek için bir adaya **tıkla**. Ada griye döner ve köprüleri kilitlenir,
  böylece onları yanlışlıkla değiştiremezsin; kilidi açmak için yeniden tıkla.
- **Sil** (Geri al'ın yanındaki silgi düğmesi) sürüklemeyi kaldırmaya çevirir: iki ada arasındaki bütün köprüleri ya da oradaki "köprü yok" işaretini kaldırmak için bir adadan bir komşusuna doğru sürükle. Yeniden köprü kurmaya dönmek için düğmeye yeniden bas.
- **Kılavuzlar**, bir köprünün geçebileceği her yerde soluk çizgiler gösterir ve onları
  yeniden gizler.

### Klavye (Keyboard)

- **Ok tuşları** bir imleci adadan adaya götürür.
- **Enter** ve ardından bir ok o yönde bir köprü kurar; **Space** ve ardından bir ok bir
  işaret koyar. **Enter**'a iki kez basmak adayı bitti olarak işaretler.
- **E**, **Sil** düğmesi, **G** de **Kılavuzlar** düğmesidir.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri; her biri en az 3.
- **Zorluk**: _Kolay_ bulmacalarda bir seferde yalnızca tek bir adaya bakman yeter — kalan
  köprülerinin kalan yeri tam doldurduğu ya da sayısının hiçbir komşuyu atlamaya izin
  vermeyecek kadar büyük olduğu durumlar. _Orta_ bulmacalar tek tek bağlantıları da
  düşündürür: ada onsuz tamamlanamayacağı için hangi köprünün orada olması gerektiğini ve
  (döngüler yasaksa) hangi bağlantıların bir döngü kapatacağını. _Zor_ bulmacalar bir adım
  ileriyi görmeni ister: bu köprü, geri kalanlardan kopuk bir ada grubunu tamamlar mı, ya
  da bir adayı gidecek yeri olmadan bırakır mı? Her bulmacanın tam bir çözümü vardır.
- **Döngülere izin ver**: varsayılan olarak açık. Kapatılırsa bitmiş köprü ağı bir ağaç
  olmalıdır — hiçbir köprü yolu başladığı yere geri dönemez — ve bulmaca bu göz önünde
  tutularak çözülebilecek şekilde üretilir.
- **Yön başına en fazla köprü**: paralel köprü sınırı, normalde 2. Daha azı daha kolaydır.
- **Ada karelerinin oranı (%)**: ızgaranın kabaca ne kadarının ada olacağı. Bazı
  yerleşimlere o kadarı sığmaz, bu yüzden bu bir üst sınırdır.
- **Genişleme katsayısı (%)**: harita büyütülürken yeni bir adanın daha yakın bir yer yerine
  olabildiğince uzağa konma olasılığı. Yüksek değerler daha seyrek, daha kolay bulmacalar;
  düşük değerler kalabalık bulmacalar verir.
`,oe=e({default:()=>r}),r=`# Küp

Bir ızgaranın üzerinde bir cisim duruyor ve ızgaranın bir avuç karesi maviye boyanmış —
cismin yüzü kadar. Cismi yuvarlamak, onu üzerinde durduğu yüzün bir kenarından devirir;
böylece sıradaki yüz komşu karenin üzerine iner. Cisim her yere indiğinde alttaki yüz ile
indiği kare renklerini değiş tokuş eder: düz bir yüzü mavi bir kareye indirirsen mavi
cisme geçer; mavi bir yüzü düz bir kareye indirirsen mavi orada kalır. Bütün yüzler aynı
anda mavi olduğunda bulmaca biter. Durum satırı yuvarlamalarını sayar, o yüzden
olabildiğince az hamlede bitirmeye çalış.

Klasik sürümde kare bir ızgarada bir küp yuvarlanır. Üçgen bir ızgarada bunun yerine bir
dörtyüzlü, bir sekizyüzlü ya da bir yirmiyüzlü yuvarlayabilirsin. Unutma: yuvarlanan bir
dörtyüzlünün her yüzü karelerin yalnızca dörtte birine ulaşabilir, bir sekizyüzlünün
yüzleri de yukarı ve aşağı bakan üçgenler arasında sırayla değişir — mavi kareler her
zaman bulmaca bitirilebilecek şekilde yerleştirilir.

## Kontroller

Bu bulmacanın Çöz düğmesi yok. Bütün yüzler mavi olduktan sonra cismi bozmadan
yuvarlamaya devam edebilirsin.

### Fare ve dokunmatik

- Cismi imlecin yönünde bir kare yuvarlamak için herhangi bir yere **tıkla**. Kare bir
  ızgarada bu yukarı, aşağı, sola ya da sağa demektir; üçgen bir ızgarada o anki üçgenin
  seçilebilecek üç komşusu vardır. Bir tıklama cismin her komşusuna ulaşır, yani bütün
  ızgaraları oynamak için bu tek başına yeter.

### Klavye (Keyboard)

- **Ok tuşları** cismi dört ana yönde yuvarlar. Üçgen bir ızgarada bir üçgenin yalnızca
  üstünde ya da altında bir komşusu vardır, bu yüzden diğer dikey tuş hiçbir şey yapmaz.
- **Home**, **Page Up**, **End** ve **Page Down** (ya da sayısal tuş takımının köşe
  tuşları 7, 9, 1 ve 3) üçgen ızgaralarda çapraz yuvarlar ve o yönde en yakındaki kenarı
  seçer.

## Parametreler

- **Cisim türü**: dörtyüzlü, küp, sekizyüzlü ya da yirmiyüzlü. Küp kare bir ızgara
  kullanır; diğerleri üçgenlerden oluşan bir ızgara.
- **Genişlik / üst** ve **Yükseklik / alt**: küp için kare ızgaranın boyutu. Üçgen
  ızgaralarda bunlar altıgen bir alanın üst ve alt kenarlarının uzunluklarıdır (birini
  sıfır yapmak düz bir üçgen verir). Izgarada her mavi kare ve bir de boş başlangıç karesi
  için yer kalmalı.
`,i=e({default:()=>a}),a=`# Dominosa

Tam bir domino takımı — 0'dan en büyük sayıya kadar her sayı çifti için bir domino, çiftler
dahil — bir dikdörtgeni dolduracak şekilde dizilmiş. Sonra sayılar kopyalanmış ve dominolar
kaldırılmış. Senin görevin nerede durduklarını bulmak: ızgarayı komşu kare çiftlerine
ayır; takımdaki her domino tam bir kez kullanılsın.

Sayı çifti başka bir yerde zaten görünen bir domino kırmızıyla gösterilir; artık hiçbir
dominonun ulaşamayacağı boş bir kare de öyle.

## Kontroller

Her kare kaplandığında ve hiçbir domino kırmızı olmadığında bulmaca biter. **Çöz**,
yerleştirdiğin her şeyi temizleyip çözümün bütün dominolarını dizer.

### Fare ve dokunmatik

- Üzerlerine bir domino koymak için iki komşu sayı arasındaki sınıra (ya da bir karenin o
  sınıra en yakın yarısına) **tıkla**. Kaldırmak için aynı sınıra yeniden tıkla. Başka bir
  dominonun bir kısmının üzerine konan domino onun yerini alır.
- Bu iki sayının bir domino **olmadığını** not etmek için bir sınıra **sağ tıkla**; üzerine
  bir çizgi çizilir. Çizgiyi silmek için yeniden sağ tıkla. Bir dominoya bitişik çizgi
  çizilemez ve bir domino koymak ona değen bütün çizgileri siler.

### Klavye (Keyboard)

- **Ok tuşları** ızgarada bir imleç gezdirir; imleç kare merkezlerinde ve kareler
  arasındaki sınırlarda durur. Bir sınırdayken imleç koyacağı dominonun çerçevesini çizer.
- **Enter** o dominoyu koyar ya da kaldırır, **Space** de oraya bir çizgi çizer ya da onu
  siler.

## Parametreler

- **Dominolardaki en büyük sayı**: dominolar 0-0'dan N-N'ye kadar gider ve ızgara (N+2)
  kare genişliğinde, (N+1) kare yüksekliğindedir, yani en büyük sayı 6 iken ızgara
  8×7'lik olur.
- **Zorluk**: bulmacanın ne kadar akıl yürütme gerektirdiği. **Çok kolay** bulmacalarda her
  zaman ya gidecek tek bir yeri olan bir domino ya da onu kaplayabilecek tek bir dominosu
  olan bir kare vardır. **Kolay** iki gerekçe daha ekler: bu kareyi kaplamanın her yolu aynı
  dominoyu kullanıyorsa o domino başka yere gitmez; bu dominonun gidebileceği her yer o
  noktayı dışarıda bırakıyorsa o nokta elenir. **Zor** saymayı ekler (tek sayıda kareyi
  kesip ayıracak bir domino imkânsızdır; aynı sayıyı gösteren bir kare kümesi paylaştıkları
  dominoları sahiplenebilir), **Aşırı zor** bulmacalar da bir yerleştirmenin sonuçlarını
  çelişene kadar izlemeni gerektirir. Bunların hepsinin tam bir çözümü vardır. **Belirsiz**
  bulmacalar hiç denetlenmez: birden fazla çözümleri olabilir ve tahmin gerektirebilirler —
  herhangi bir döşemeyi bulmak kazandırır.
`,o=e({default:()=>s}),s=`# On Beş

Klasik kaydırmalı bulmaca. Izgara numaralı karolarla ve tek bir boşlukla dolu. Sayılar
soldan sağa ve yukarıdan aşağıya sırayla okunana ve boşluk sağ alt köşede kalana kadar
karoları boşluğa kaydır.

## Kontroller

**Çöz** doğrudan bitmiş düzene atlar. Oraya nasıl gidileceğini göstermez ama kalıp
hamleleri çalışmak için kullanışlı bir sıfırlamadır.

### Fare ve dokunmatik

- Boşlukla aynı satırda ya da sütunda olan herhangi bir karoyu (ve onunla boşluk
  arasındaki her şeyi) yerine kaydırmak için ona **tıkla**.

### Klavye (Keyboard)

- **Ok tuşları** bir karoyu okun yönünde boşluğa kaydırır: **yukarı ok**, boşluğun altındaki karoyu
  yukarı, boşluğa taşır.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri (varsayılan klasik 4×4'tür).
`,c=e({default:()=>l}),l=`# Doldurma

Izgaranın bazı karelerinde zaten bir rakam var; geri kalanlar boş. Her boş kareye bir
rakam yaz; eşit rakamlardan oluşan her bağlı grup, rakamın söylediği kadar kareyi kaplasın:
her 3, üç tane 3'ten oluşan bir gruba aittir, her 1 tek başına durur ve bu böyle gider.
Kareler köşelerinden değil, yalnızca kenarlarından bağlı sayılır. Bundan şu çıkar: hiçbir
karede 0 olmaz, iki 1 asla yan yana gelmez ve hiçbir grup dokuz kareden büyük olmaz.
Verilen bir rakamın grubunun başlangıcı olması gerekmez: verilen birkaç 4 aynı grupta
toplanabilir, bir grupta da hiç verilen rakam olmayabilir.

Rakamları farklı olan kareler arasında ve zaten doğru boyuta ulaşmış (ya da fazla büyümüş)
her grubun çevresinde kalın çizgiler belirir. Bir rakam, grubu rakamdan büyük olduğunda ya
da boyutuna ulaşacak yeri kalmadan dört yandan kapatıldığında kırmızıya döner. Bu, Nikoli'nin
Fillomino adıyla yayımladığı bulmacadır.

## Kontroller

Verilen rakamlar mürekkeple çizilir ve değiştirilemez; senin rakamların mavidir. **Çöz**
çözümü doldurur.

### Fare ve dokunmatik

- Seçmek için boş bir kareye **tıkla**, sonra bir rakam yazmak için ekrandaki
  tuşları kullan. Tuş takımındaki **⌫** seçimi yeniden boşaltır.
- Birkaç kareyi birden seçmek için üzerlerinden **sürükle**; böylece tek bir rakam bütün
  seçili kareleri aynı anda doldurur.
- **Sağ tıklama** baştan başlamadan seçime bir kare ekler; seçili bir kareye ikinci bir
  sağ tıklama onu yeniden seçimden çıkarır.
- **Doldur** (Geri al'ın yanındaki düğme) bir rakamı yayar: rakam içeren bir kareden çevresindeki karelerin üzerinden sürükle; bıraktığında hepsi o rakamı alır, tuş takımına gerek kalmaz. Boş bir karede başlayan tıklamalar ve sürüklemeler yine seçim yapar. Seçmeye dönmek için düğmeye yeniden bas.

### Klavye (Keyboard)

- Bir ya da daha fazla kare seçiliyken hepsine yazmak için **bir rakam yaz**. \`0\` rakamı ya
  da **Backspace** onları yeniden boşaltır.
- **Ok tuşları** bir klavye imlecini hareket ettirir ve yazdığın rakam altındaki kareyi
  doldurur.
- **Space** ya da **Enter** imlecin altındaki kareyi seçime ekler ya da seçimden çıkarır;
  böylece birkaç kare tek tuşla doldurulabilir.
- **F**, **Doldur** düğmesidir.

## Parametreler

- **Genişlik** ve **Yükseklik**: ızgaranın boyutu. Gruplar hiçbir zaman uzun kenardan (ya
  da 9'dan) büyük olmaz, bu yüzden küçük ızgaralarda yalnızca küçük rakamlar kullanılır.
`,u=e({default:()=>d}),d=`# Çevir

Bazıları yanan, bazıları sönük karelerden oluşan bir ızgara. Amacın hepsini aynı anda
yakmak. Bir kareye basmak onu yanık ile sönük arasında çevirir ama bazı komşularını da
çevirir: her karenin üzerine çizilmiş küçük şema tam olarak hangilerini gösterir.
Varsayılan **Artılar** şekillerinde her basış kareyi ve dört dik komşusunu çevirir;
**Rastgele** şekillerde her karenin kendine özgü düzensiz bir deseni vardır, yani bulmaca
her seferinde farklı oynanır.

Bir kareye iki kez basmak birbirini götürdüğü ve basışların sırası hiç önemli olmadığı
için çözüm, her birine bir kez basılacak karelerden oluşan bir kümedir.

## Kontroller

Durum satırı basışlarını sayar. **Çöz** bütün tahtayı yakar ve oraya ulaşmak için bastığı
kareleri kırmızıyla çerçeveler. Sonrasında karelere basmaya devam edersen kırmızı
çerçeveler, bitmiş duruma dönmek için hâlâ hangi karelere basılması gerektiğini izler.

### Fare ve dokunmatik

- Bir kareye basmak için ona **tıkla**.

### Klavye (Keyboard)

- **Ok tuşları** ızgarada bir imleç gezdirir; **Enter** ya da **Space** imlecin altındaki
  kareye basar.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri; bir kenarda 2'den 10 kareye kadar.
- **Şekil türü**: _Artılar_ her kareyi dik komşularıyla birlikte çevirir; _Rastgele_ her
  kareye çevresindeki 3×3'lük blok içinde rastgele büyütülmüş bir şekil verir.
`,f=e({default:()=>p}),p=`# Sel

Izgara, rastgele renklendirilmiş karelerden oluşan bir yama işi. Sol üst köşedeki kare ve
ona aynı renkten bir yolla bağlı her kare senin kontrolünde. Her hamle bu bağlı alanın
tamamını seçtiğin bir renge boyar; böylece o renkteki komşu kareler de alanına katılır.
Bütün ızgara tek renk olana kadar devam et.

İşin püf noktası hamle sınırı. Sen başlamadan önce oyun ızgarayı kendisi çözer ve sana
kendi hamle sayısını ve birkaç yedek hamleyi verir; ızgara tek renk olmadan sınırı
doldurursan tur kaybedilir. Izgaranın bittiğini görmek için sonrasında da doldurmaya devam
edebilirsin ama bu artık kazanç sayılmaz.

## Kontroller

Durum satırı sınırın ne kadarını kullandığını gösterir. **Çöz** ızgarayı çözücünün senin
yerine bitirmesini sağlar; bu, kendi kazancın değil, otomatik çözüm sayılır.

### Fare ve dokunmatik

- Alanını o renge boyamak için rengi alanından farklı olan herhangi bir kareye **tıkla**.
  Zaten aynı renkte olan bir kareye tıklamak hiçbir şey yapmaz ve hamle harcamaz.
- **İpucu**, çözücünün sıradaki rengini senin yerine oynar; bu, geri alabileceğin sıradan
  bir hamledir. Birkaç ipucu almak kazancı ve kredisini yine sende bırakır.

### Klavye (Keyboard)

- **Ok tuşları** ızgarada bir imleç gezdirir; **Enter** ya da **Space** alanı imlecin
  altındaki renge boyar.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri; bir kenarda en fazla 32 kare.
- **Renkler**: ızgarada kaç renk kullanıldığı, 3'ten 10'a kadar. Daha az renk daha az
  seçenek ve daha kolay bir oyun demektir.
- **İzin verilen ek hamle**: hamle sınırını oluşturmak için çözücünün kendi çözüm
  uzunluğuna eklenen yedek hamle sayısı. 0 ile en az çözücü kadar verimli olman gerekir;
  çözücü iyidir ama kusursuz değildir, yani onun sayısını geçmek mümkündür.
`,m=e({default:()=>h}),h=`# Galaksiler

Izgaraya noktalar serpiştirilmiş; bir nokta bir karenin ortasında, iki kare arasındaki bir
çizginin üzerinde ya da dört karenin buluştuğu bir köşede olabilir. Izgarayı bölgelere
ayırmak için ızgara çizgileri boyunca duvarlar çiz; her bölgede tam bir nokta olsun ve o
nokta bölgenin simetri merkezi olsun: bölgeyi noktası etrafında 180° döndürdüğünde tam
kendi üstüne gelmeli. Her kare sonunda bir bölgeye ait olmalı, yani noktasız bölge
kalamaz.

Bulmacalar tek çözümlü olarak rastgele üretilir. Bu, Nikoli'nin "Tentai Show" bulmacasıdır;
Spiral Galaxies adıyla da bilinir.

## Kontroller

Kapatılmış ve doğru bir bölge — tek nokta, simetri merkezinde, içinde başıboş duvar yok —
gölgelenir. İçinden bir duvar geçen ya da kendisine göre simetrik olmayan kapalı bir
bölgedeki tek nokta olan nokta kırmızıya döner; hiç nokta içermeyen kapalı bir bölge
taranır. Her kare gölgelendiğinde bulmaca tamamlanır. **Çöz** çözümün tamamını çizer.

### Fare ve dokunmatik

- Oraya bir duvar çizmek için bir ızgara çizgisine **tıkla**; kaldırmak için duvara tıkla.
- O karenin o noktanın galaksisine ait olduğunu hatırlatmak için **bir noktadan** bir kareye
  doğru **sürükle**; oraya noktayı gösteren küçük bir ok bırakılır.
- Var olan bir oku taşımak için onu **sağ tuşla sürükle**. Atmak için noktasının üzerine
  geri bırak ya da ızgaranın dışına sürükle; zaten ok olan bir kareye bırakılırsa o okun
  yerini alır.

### Klavye (Keyboard)

- **Ok tuşları** bir imleci karelerin, çizgilerin ve köşelerin üzerinde gezdirir.
- Bir çizgi üzerinde **Enter** duvarını çizer ya da kaldırır; bir nokta üzerinde **Enter**
  bir ok alır; ok, bırakmak için yeniden **Enter**'a basana kadar imleci izler.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri; her biri en az 3. Hazır ayarlar
  7×7'den 15×15'e kadar gider.
- **Zorluk** — _Orta_ bulmacalar simetri kuralının zorunlu kıldıklarından adım adım
  çözülebilir; _Aşırı zor_ olanlar bir varsayımı deneyip nereye vardığını görmeni
  gerektirebilir.
`,g=e({default:()=>_}),_=`# Tahmin

Bilgisayar, tahtanın tepesindeki kalkanın arkasına bir sıra renkli pim gizledi. Görevin,
yalnızca her tahmin için aldığın işaretleri kullanarak onu tam olarak yeniden kurmak: doğru
yerdeki doğru renkli her pim için bir **siyah** pim, rengi gizli sıranın başka bir yerinde
bulunan diğer her pim için bir **içi boş** pim. İşaretler _kaç_ pimin doğru olduğunu söyler,
_hangilerinin_ doğru olduğunu değil. Tahmin hakkın bitmeden sırayı bulursan kalkan
kalkar; hakkın biterse de kalkar ve neyi kaçırdığını gösterir.

Bu, Hasbro'nun _Mastermind_ adıyla sattığı oyundur: altı renk, dört pim ve on tahmin. Her
ayar değiştirilebilir.

## Kontroller

**Çöz** kalkanı kaldırır ve cevabı gösterir; bu, tıpkı tahmin hakkının bitmesi gibi oyunu
sona erdirir.

### Fare ve dokunmatik

- Seçmek için soldaki tepside bir renge **tıkla** (halka hangisi olduğunu gösterir), sonra
  o renkte bir pim koymak için o anki sırada **bir deliğe tıkla**. Önceki bir tahmindeki
  bir pime tıklamak da onun rengini seçer.
- Tepsiden, önceki bir tahminden ya da o anki sıradan bir pimi bir deliğe **sürükle**. O anki
  sıradan bir pimi dışarı sürükleyip başka herhangi bir yere bırakmak onu kaldırır.
- Bir deliği boşaltmak için ona **sağ tıkla**.
- Sıra tamamlandığında sağındaki küçük değerlendirme alanı yanar: tahmini göndermek için
  **ona tıkla**.
- O pimi _tutmak_ için bir deliğe **orta tıkla**: tutulan pim, değerlendirmeden sonra bir
  sonraki tahmine taşınır; bu da güvendiğin pimleri yeniden dizme zahmetinden kurtarır.
  Pimi bırakmak için aynısını yeniden yap.
- **Tut** (Geri al'ın yanındaki düğme) aynı şeyi düz bir tıklamayla yapar: açıkken o anki sıradaki bir deliğe tıklamak, renk koymak yerine oradaki pimi tutar ya da bırakır. Rengi değiştirmek için her zamanki gibi tepsiye tıkla; pim koymaya dönmek için **Tut**'a yeniden bas.
- Duraklatma menüsündeki **Harfler**, renklerden bazıları sana birbirine benziyorsa diye her
  pimin üzerine bir harf yazar ve onları yeniden kaldırır.

### Klavye (Keyboard)

- **Ok tuşları**: yukarı ve aşağı tepside bir renk seçer, sola ve sağa bir imleci o anki
  sıra boyunca ve sıra tamamlanınca değerlendirme alanına götürür.
- **Enter** ya da **Space** seçili rengi imlecin altındaki deliğe koyar ya da imleç
  değerlendirme alanındayken tahmini gönderir.
- **Backspace** ya da \`D\` imlecin altındaki deliği boşaltır.
- \`H\` imlecin altındaki pimi tutar ya da bırakır.
- \`K\`, **Tut** düğmesi, \`L\` de **Harfler** düğmesidir.

## Parametreler

- **Renkler**: gizli sıranın kaç farklı renkten seçildiği, 2'den 10'a kadar. Daha çok renk
  sırayı bulmayı zorlaştırır.
- **Tahmin başına pim**: gizli sıranın uzunluğu.
- **Tahmin hakkı**: kaç deneme hakkın olduğu.
- **Boşluğa izin ver**: bir tahminde delikleri boş bırakmana izin verir. Boş bir delik asla
  eşleşmez, bu yüzden renkleri yoklamak kolaylaşır. Gizli sıranın kendisinde asla boşluk
  olmaz.
- **Tekrara izin ver**: gizli sıranın (ve tahminlerinin) bir rengi birden fazla kez
  kullanmasına izin verir. Bunu kapatmak olası sıraların sayısını epey azaltır.
`,v=e({default:()=>y}),y=`# Eylemsizlik

Engellerle dolu bir ızgaradaki bir topsun ve tahtadaki bütün mücevherleri istiyorsun. İşin
püf noktası adında saklı: top bir kez yuvarlanmaya başladı mı, bir şey onu durdurana kadar
durmaz. Mücevherlerin (geçerken onları toplayarak) ve boş karelerin içinden aynı şekilde
dümdüz geçer; yalnızca bir sonraki kare duvar olduğunda ya da bir durağa indiğinde durur.
Çapraz hamleler, yalnızca köşeden birbirine değen iki duvarın arasından sıyrılıp geçer. Bir
mayının üzerine yuvarlanmak ölümcüldür, aynı hamle en son mücevheri toplamış olsa bile.

Her bulmaca, bütün mücevherleri başlangıç karesinden toplanabilecek şekilde üretilir ama
tahtanın, bazı mücevherlere artık ulaşılamayan bir köşesine yuvarlanmanı hiçbir şey
engellemez. Ölmenin ya da sıkışmanın, durum satırındaki ölüm sayacından başka bir cezası
yoktur: geri al ve başka bir yol dene.

## Kontroller

Bir mayına çarptıktan sonra ölümcül hamleden öncesinden devam etmek için **Geri al**.
**Çöz**, bulunduğun yerden kalan bütün mücevherleri toplayan bir rota bulur ve topu senin
yerine o rota boyunca yuvarlar; Geri al bütün rotayı tek seferde geri alır.

### Fare ve dokunmatik

- Bir kareye **tıkla**; top o karenin kendisine göre bulunduğu yöne, sekiz pusula yönünden
  en yakınına yuvarlanarak — çaprazlar dahil — yola çıkar. Izgaranın dışındaki kenar
  boşluğuna tıklamak da işe yarar; bu, top bir kenardayken kullanışlıdır.

### Klavye (Keyboard)

- **Ok tuşları** topu yukarı, aşağı, sola ya da sağa yuvarlar.
- **Home**, **Page Up**, **End** ve **Page Down** onu çapraz yuvarlar (sol yukarı, sağ
  yukarı, sol aşağı, sağ aşağı). Sayısal tuş takımı göründüğü gibi çalışır: 8 yukarı, 3 sağ
  aşağıdır ve bu böyle gider; üstteki rakam sırası da aynısını yapar.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri. Karelerin kabaca beşte biri duvar,
  beşte biri durak, beşte biri mayın ve beşte biri mücevherdir.
`,b=e({default:()=>x}),x=`# Keen

Izgarayı 1'den ızgaranın boyutuna kadar rakamlarla doldur; her satır ve her sütun her
rakamı tam bir kez içersin. Izgara ayrıca kalın çerçeveli "kafeslere" bölünmüştür; her
kafesin sol üst karesinde küçük bir ipucu vardır: bir sonuç ve bir aritmetik işaret.
Kafesteki rakamlar o işlemle o sonucu vermeli:

- \`7+\`, kafesteki rakamların toplamının 7 olduğu anlamına gelir.
- \`12×\`, çarpımlarının 12 olduğu anlamına gelir.
- \`2−\` her zaman iki karelik bir kafeste bulunur ve bir rakamın diğerinden 2 fazla
  olduğu anlamına gelir (hangisi olursa olsun).
- \`3÷\` de aynı şekilde iki karede bulunur ve bir rakamın diğerinin 3 katı olduğu anlamına
  gelir.

Sudoku'nun Killer modundan farklı olarak bir kafeste aynı rakam iki kez _bulunabilir_; yeter
ki iki kopya aynı satırda ya da sütunda olmasın. Verilen rakam yoktur; elindeki her şey
ipuçlarıdır ve her bulmacanın tam bir çözümü vardır. Bu, KenKen adıyla yayımlanan
bulmacadır.

## Kontroller

Satırında ya da sütununda iki kez görünen bir rakam kırmızıya döner; tamamen doldurulmuş
ama sonucunu tutturamayan bir kafesin ipucu da öyle. **Çöz** çözümü doldurur.

### Fare ve dokunmatik

- Seçmek için bir kareye **tıkla**, sonra bir rakam yazmak için ekrandaki tuş takımını
  kullan. Seçili kareye ikinci bir tıklama seçimi kaldırır.
- Tuş takımındaki **⌫** seçili kareyi yeniden boşaltır, **✎** de **kalem notlarını** açık
  tutar: seçtiğin şey bundan sonra küçük bir not olarak girilir, aynı rakam yeniden
  seçilirse o not silinir. Kalem notları yalnızca düşünmene yardım etmek içindir; bir rakam
  yazmak onları temizler.
- Boş bir kareyi doğrudan kalem notları için seçmek üzere ona **sağ tıkla**.
- Duraklatma menüsündeki **Notlar**, her boş kareyi eksiksiz bir kalem notu takımıyla doldurur.
- **Vurgula** (Geri al'ın yanındaki büyüteç) son tıkladığın karedeki rakamı içeren her kareyi öne çıkarır ve o rakamı kalem notları arasında kalın gösterir. Kapatmak için yeniden bas.

### Klavye (Keyboard)

- Seçili kareyi doldurmak ya da kare kalem notları için seçildiyse oraya not almak için
  **bir rakam yaz**.
- **Space** ya da **Backspace** seçili kareyi temizler (rakamını ya da bütün kalem
  notlarını).
- **Ok tuşları** bir klavye imlecini hareket ettirir ve yazdığın rakamlar altındaki kareye
  girer.
- **Enter** imleci normal giriş ile kalem notu girişi arasında değiştirir.
- **M**, **Notlar** düğmesi, **L** de **Vurgula** düğmesidir.

## Parametreler

- **Izgara boyutu**: 3'ten 9'a kadar. 9'dan büyük rakamlar hantal olurdu, bu yüzden sınır 9.
- **Zorluk**: bulmacanın gerektirdiği en zor akıl yürütme türü. _Kolay_, yalnızca bir
  kafeste hangi rakamların bulunabileceğini çıkarmanı gerektirir; _Orta_, her rakamın bir
  kafesin hangi karesinde olabileceğini izlemeni gerektirir; _Zor_, kafesler arası akıl
  yürütmeyi (bir kafesin bir satıra koymak zorunda olduğu rakamlar o satırda başka yerde
  olamaz) ve bir rakam kümesine sahip kare kümelerini ekler; _Uzman_ zorlama zincirlerini
  ekler; _Aşırı zor_ bulmacalar da tahmin edip geri dönmeden bitirilemez. Zor bulmacaların
  üretilmesi daha uzun sürer ve 3×3'lük ızgaralar hiçbir zaman Orta'nın ötesine geçmez.
- **Yalnızca çarpma**: her ipucu bir çarpımdır; bu, kolay ikilileri ortadan kaldırır ve
  oldukça farklı bir bulmaca ortaya çıkarır.
`,S=e({default:()=>C}),C=`# Aydınlat

Beyaz ve siyah karelerden oluşan bir ızgara. Her beyaz kare aydınlanacak şekilde beyaz
karelere ampul yerleştir. Bir ampul kendi karesini aydınlatır ve bir siyah kare ya da
kenar araya girene kadar satırı ve sütunu boyunca ışık saçar. Bitirdiğinde üç şey doğru
olmalı:

- her beyaz kare aydınlık;
- hiçbir ampul başka bir ampul tarafından aydınlatılmıyor, yani hiçbir iki ampul bir satır
  ya da sütun boyunca birbirini görmüyor;
- sayı taşıyan bir siyah karenin hemen üstündeki, altındaki, solundaki ve sağındaki
  karelerde tam o kadar ampul var. Sayısız siyah karelerin yanında istenen sayıda ampul
  olabilir.

Aydınlık kareler sarıya boyanır. Birbirini aydınlatan ampuller kırmızıya döner; artık
karşılanamayacak bir sayı da öyle: yanında zaten çok fazla ampul vardır ya da yeterince
ampul için artık yer yoktur.

## Kontroller

Bütün ızgara ışıl ışıl olduğunda ve hiçbir şey kırmızı görünmediğinde bulmaca biter.
**İpucu** tek bir ampul yerleştirir — ya da cevapta olmayan birini kaldırır — ve gerisini
sana bırakır; bulmaca oyunda kalır, birkaç ipucu almak da kazancı ve kredisini yine sende
bırakır. **Çöz** bütün bir çözümün ampullerini doldurur ve çizdiğin çarpıları yerinde
bırakır.

### Fare ve dokunmatik

- Oraya bir ampul koymak için bir beyaz kareye **tıkla**; kaldırmak için yeniden tıkla.
- "Buraya ampul konamaz" anlamında bir çarpı koymak için bir beyaz kareye **sağ tıkla**;
  silmek için yeniden sağ tıkla. Çarpılı bir kareye çarpı kaldırılana kadar ampul konamaz,
  ampullü bir kareye de çarpı konamaz.
- **Çarpı** (Geri al'ın yanındaki çarpı düğmesi) açıkken düz bir tıklama ampul yerine çarpı koyar ya da siler; bir seferde birçok kareyi elerken işe yarar. Ampullere dönmek için yeniden bas.

### Klavye (Keyboard)

- **Ok tuşları** ızgarada bir imleç gezdirir.
- **Enter** imlecin altına bir ampul koyar ya da kaldırır, **Space** (ya da **I**) de oraya
  çarpı koyar ya da kaldırır.
- **X**, **Çarpı** düğmesidir.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri.
- **Siyah karelerin oranı (%)**: ızgaranın kabaca ne kadarının siyah olduğu. Bu bir söz
  değil, bir öneridir: o yoğunlukta bulmaca yapılamazsa üretici birkaç siyah kare daha
  kullanır.
- **Simetri**: siyah karelerin izlediği desen — yok, iki yarının aynası ya da dönmesi, veya
  dört yönlü ayna ya da dönme. Dört yönlü dönme kare bir ızgara gerektirir.
- **Zorluk**: _Kolay_ bulmacalar, hangi karelerde ampul olması ya da olamaması gerektiğine
  dair tek karelik akıl yürütmeyle çözülür. _Orta_ olanlar kare kümelerini birbirleriyle
  tartmanı gerektirir ("bu üçünden biri ampul olmalı, bu da şunu eler"). _Zor_ bulmacalar
  bir yere ampul koymayı deneyip bir şey ters gidene kadar sonuçlarını izlemeni
  gerektirebilir. Her bulmacanın tam bir çözümü vardır.
`,w=e({default:()=>T}),T=`# Döngü

Noktalardan oluşan bir ızgara; aralarındaki bazı boşluklarda bir sayı var. Noktaların
arasındaki soluk çizgiler boyunca tek bir kapalı döngü çiz; öyle ki:

- numaralı her boşluğun tam o kadar kenarı döngünün üzerinde olsun;
- döngü asla kendini kesmesin ya da kendine değmesin — her noktada ya iki çizgi olur ya
  hiç olmaz — ve açık uçları ya da ayrı parçaları olmayan tek bir döngü olsun.

Klasik sürüm kareler kullanır ama aynı bulmaca üçgenlerde, altıgenlerde ve sayıların 4'ü
epey aşabildiği bir düzine daha tuhaf döşemede de işler.

Yanlış bir döngü oluşturan ya da bir noktada üçü buluşan çizgiler kırmızıya döner;
çevresinde çok fazla çizgi olan ya da geriye çok az olası kenarı kalan bir sayı da
kırmızıya döner. Tam doğru sayıda çizgisi olan bir sayı griye döner.

## Kontroller

**Çöz** bütün döngüyü çizer. Döngü tamamlanıp her sayı karşılandığı anda bulmaca biter;
kullanılmayan kenarları çarpıyla elemek isteğe bağlıdır.

### Fare ve dokunmatik

- Üzerine bir çizgi çizmek için soluk bir kenara **tıkla**; kaldırmak için çizgiye yeniden
  tıkla.
- Kesinlikle döngünün parçası olmadığını işaretlemek üzere bir kenarı çarpıyla elemek için
  ona **sağ tıkla**; işareti temizlemek için yeniden sağ tıkla. Tıklama da sağ tıklama da
  diğeriyle konan işareti temizler.
- **Çarpı** (Geri al'ın yanındaki çarpı düğmesi) açıkken düz bir tıklama çizgi çizmek yerine kenarı çarpıyla eler ya da temizler. Çizgi çizmeye dönmek için yeniden bas.

### Klavye (Keyboard)

- **Ok tuşları** bir imleci kenardan kenara götürür; **Enter** imlecin altındaki kenara bir
  çizgi çizer ya da onu kaldırır, **Space** de kenarı çarpıyla eler ya da temizler.
- **X**, **Çarpı** düğmesidir.

## Parametreler

- Izgaranın döşemenin hücreleriyle sayılan **Genişlik** ve **Yükseklik** değerleri. Kare
  ızgarada bu yalnızca yatayda ve dikeyde kare sayısıdır; diğer döşemeler kendini
  tekrarlayan birimlerini sayar, bu yüzden gerçek yüz sayısı değişir.
- **Izgara türü**: _Kareler_, _Üçgenler_ ve _Petek_ düzenli döşemelerdir. _Kırpık Kare_,
  _Kahire_, _Büyük Altıgen_, _Sekizgen_, _Uçurtmalar_, _Çiçek_, _Onikigen_ ve _Büyük
  Onikigen_ şekilleri karıştırır, iki _Penrose_ döşemesi de hiç tekrar etmez.
- **Zorluk**: _Kolay_ bulmacalar yalnızca kuralların kendisini gerektirir — bir sayının
  çevresindeki çizgileri saymak, bir noktada iki çizgi olduğunu ya da hiç olmadığını
  hatırlamak ve döngüyü erkenden kapatmamak. _Orta_, bir noktada buluşan kenar çiftleri
  hakkında akıl yürütmeyi ekler (çiftin en fazla biri ya da en az biri çizgidir). _Zor_, bu
  bilgilerin çapraz bir 2 dizisinde olduğu gibi noktadan noktaya zincir oluşturmasına izin
  verir. _Uzman_, birbirine eşit ya da zıt olduğu bilinen kenarları da izler. Hiçbir zaman
  tahmin gerekmez; her bulmacanın tam bir çözümü vardır.
`,E=e({default:()=>D}),D=`# Mıknatıslar

Bir dikdörtgen, yalnızca çerçeveleri görünen dominolarla döşenmiş. Her domino ya bir
mıknatıstır — bir yarısı \`+\`, diğer yarısı \`−\` kutbu — ya da hiç kutbu olmayan boş bir
taştır. Kenardaki sayılar her satır ve sütunun kaç \`+\` kutbu (sütunların üstünde ve
satırların solunda) ve kaç \`−\` kutbu (sütunların altında ve satırların sağında) içerdiğini
söyler; eksik bir sayı o satır ya da sütun için ipucu olmadığı anlamına gelir. Her dominoyu
doldur; bütün sayılar tutsun ve aynı iki kutup asla yan yana gelmesin: bir domino sınırı
boyunca \`+\` asla \`+\`'ya, \`−\` de asla \`−\`'ye değmemeli. Boş taşlar etkisizdir ve her şeyin
yanında durabilir.

Birbirine değen aynı kutuplar kırmızıyla gösterilir. Bir sayı, artık tutturulamayacağı
zaman kırmızıya — zaten çok fazla kutup vardır ya da çok az vardır ve daha fazlasını
koyacak yer kalmamıştır — tam karşılandığında da griye döner. Her domino doldurulduğunda,
her sayı tuttuğunda ve hiçbir şey kırmızı olmadığında bulmaca biter.

## Kontroller

### Fare ve dokunmatik

- Bir dominonun boş bir yarısını \`+\` kutbu yapmak için ona **tıkla** (diğer yarı \`−\` olur).
  Mıknatısı ters çevirmek için aynı yarıya yeniden, dominoyu boşaltmak için üçüncü kez
  tıkla. Boş taş olarak işaretli bir dominoya tıklamak hiçbir şey yapmaz.
- Boş bir dominoyu boş taş olarak işaretlemek için ona **sağ tıkla**. Boş taşı, dominonun
  kesinlikle bir mıknatıs olduğunu not eden soru işaretleriyle değiştirmek için yeniden
  sağ tıkla; üçüncü bir sağ tıklama onu boşaltır. Bir mıknatısa sağ tıklamak hiçbir şey yapmaz.
- **Boş** (Geri al'ın yanındaki gölgeli domino) açıkken düz bir tıklama tıpkı sağ tıklama gibi çalışır: dominoyu boş taş, sonra soru işareti, sonra yeniden boş yapar. Mıknatıs koymaya dönmek için yeniden bas.
- **Çöz** çözümün tamamını doldurur.

### Klavye (Keyboard)

- **Ok tuşları** ızgarada bir imleç gezdirir.
- **Enter**, tıpkı bir sol tıklama gibi, imlecin altındaki yarıyı \`+\`, \`−\` ve boş arasında
  döndürür.
- **Space**, tıpkı bir sağ tıklama gibi, imlecin altındaki dominoyu boş taş, soru işareti
  ve boş arasında döndürür.
- **B**, **Boş** düğmesidir.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri. Alan tek sayı olduğunda bir kare artar
  ve taralı çizilir; hiçbir dominoya ait değildir ve nötr sayılır.
- **Zorluk**: _Kolay_ bulmacalarda bir seferde yalnızca tek bir satıra, sütuna ya da
  dominoya bakman gerekir — zaten tutmuş bir sayı, kalan her adayı gerektiren bir sayı ya da
  iki yarısı da belirli bir kutbu alamayan bir domino. _Zor_ bulmacalar bir satır ya da
  sütun boyunca uzanan bütün dominolar hakkında da akıl yürütmeni gerektirir: mıknatıs
  olması gereken bir domino, nasıl çevrilirse çevrilsin her türden bir kutup sağlar; tek bir
  boş yeri kalmış bir satır, uzunlamasına yatan boş bir taşı alamaz ve bu böyle gider. Her
  bulmacanın tam bir çözümü vardır.
- **İpuçlarını ayıkla**: bulmacayı seçilen zorlukta çözmek için gerekmeyen her sayıyı
  kaldırır; bu da nereden başlayacağını görmeyi epey zorlaştırır.
`,O=e({default:()=>k}),k=`# Harita

Bir harita bölgelere ayrılmış. Her bölgeyi dört renkten biriyle boya; sınırlarının bir
parçasını paylaşan iki bölge aynı renkte olmasın. Yalnızca köşeden değen bölgeler aynı
renkte olabilir. Birkaç bölge senin için boyanmıştır ve bunlar haritayı bitirmenin tam bir
yolu kalacak şekilde seçilmiştir.

Aynı renkteki iki komşu bölge, aralarındaki sınırda kırmızı bir \`!\` ile işaretlenir.

## Kontroller

**Çöz** çözümün tamamını boyar. Her bölge boyandığında ve hiçbir şey kırmızı olmadığında
harita yanıp söner.

### Fare ve dokunmatik

- Bir rengi **sürükle**: bir bölgeye (ya da haritanın altındaki renk kutularından birine)
  bas ve başka bir bölgenin üzerinde bırakarak ona o rengi ver. Boş bir bölgeden,
  haritanın çevresindeki boş alandan ya da silgi kutusundan sürüklemek, bıraktığın bölgeyi
  temizler.
- Bir renk seçmek için **bir renk kutusuna tıkla**, sonra bölgeleri boyamak için onlara
  **tıkla**; seçimi kaldırmak için seçili kutuya yeniden tıkla.
- Bölgenin o renk _olabileceğini_ not etmek için bir rengi boş bir bölgeye
  **sağ tuşla sürükle**; oraya o renkten küçük bir nokta konur. Bir bölgede birkaç nokta
  olabilir; aynı rengi yeniden sürüklemek noktasını kaldırır. Bir renk kutusu seçiliyken boş bir bölgeye
  düz bir **sağ tıklama** onun noktasını koyar ya da kaldırır.
- **Numaralar** (duraklatma menüsünde) her bölgede bir numara gösterir ve onları yeniden gizler; bir bulmaca hakkında başka biriyle konuşurken kullanışlıdır.

### Klavye (Keyboard)

- **Ok tuşları** haritada bir imleç gezdirir; imlecin bulunduğu bölgenin çerçevesi çizilir.
  **1**–**4** tuşları o bölgeyi boyar, **Space** onu temizler, **Enter** de rengini alır;
  böylece onu ok tuşlarıyla taşıyıp **Enter** ile (ya da **Space** ile nokta olarak)
  bırakabilirsin. Hareket etmeden **Enter**'a iki kez basmak bölgeyi temizler.
- **L**, **Numaralar** düğmesidir.

## Parametreler

- Haritanın üzerine çizildiği ızgaranın kare cinsinden **Genişlik** ve **Yükseklik**
  değerleri.
- **Bölgeler**: haritanın kaç bölgeye ayrıldığı.
- **Zorluk**: _Kolay_ bulmacalarda her zaman yalnızca bir rengi kalmış bir bölge vardır.
  _Orta_, aynı iki rengi aralarında paylaşmak zorunda olan komşu bölge çiftleri hakkında
  akıl yürütmeyi ekler. _Zor_, harita boyunca bu tür çıkarımlardan oluşan zincirler
  gerektirir. Bunların hepsi tahmin etmeden çözülebilir. _Aşırı zor_ yalnızca çözümün tek
  olduğunu garanti eder; bir rengi deneyip bir şey ters gidene kadar izlemen gerekebilir.
`,A=e({default:()=>j}),j=`# Mayın Tarlası

Kapalı karelerden oluşan bir ızgara bir miktar mayın saklıyor. Mayın _olmayan_ her kareyi
aç. Açtığın her kare, sekiz komşusundan kaçının mayın olduğunu gösterir; bir mayın açarsan
oyunu kaybedersin.

Bu sürümün farkı, hiçbir zaman tahmin etmek zorunda kalmaman. İlk tıklamana kadar hiçbir
şey belli değildir: mayınlar ondan sonra, tıkladığın kare boş olacak ve bütün ızgara
oradan saf mantıkla çıkarılabilecek şekilde yerleştirilir. Kendini sıkışmış hissedersen,
sayıların zaten kanıtladığı güvenli bir kare her zaman bir yerlerde vardır.

Durum satırı, diktiğin bayrakları mayın sayısıyla karşılaştırarak gösterir; saat de ilk
tıklamanla başlar. Bir mayına basmak geri kalan mayınları gösterir ve yanlış bayrakların
üstünü çizer; ölümcül tıklamayı Geri al ile geri alıp devam edebilirsin ama ölüm durum
satırında hatırlanır.

## Kontroller

### Fare ve dokunmatik

- Kapalı bir kareyi açmak için ona **tıkla**. Boş bir kareyi (komşusunda mayın olmayan)
  açmak komşularını da açar ve bu dışa doğru böyle sürer.
- Şüphelendiğin bir mayına bayrak dikmek için kapalı bir kareye **sağ tıkla**; kaldırmak
  için yeniden sağ tıkla. Bayraklı kareler yanlışlıkla açılamaz.
- Diğer bütün kapalı komşularını tek seferde açmak için çevresinde zaten doğru sayıda
  bayrak olan **bir sayıya tıkla**. O sayıya **orta tıklama** da aynı işi görür.
- **İpucu** güvenli bir kareyi açar — ya da altında mayın olmayan bir bayrağı kaldırır — ve
  ızgaranın geri kalanını sana bırakır. Birkaç ipucu almak kazancı ve kredisini yine sende
  bırakır.
- **Çöz** bütün mayınlara bayrak dikerek yerleşimin tamamını gösterir. Bu, kendi kazancın
  sayılmaz.

### Klavye (Keyboard)

- **Ok tuşları** ızgarada bir imleç gezdirir.
- **Enter**, imlecin altındaki kareye sol tıklama gibi davranır: kapalı bir kareyi açar ya
  da bayrakları yerinde olan bir sayının çevresini temizler.
- **Space**, sağ tıklama gibi bayrak diker ya da kaldırır.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri.
- **Mayınlar**: kaç mayın saklanacağı. Sayı yerine \`20%\` gibi bir yüzde de verebilirsin. Çok
  yüksek yoğunluklarda çözülebilir ızgara bulmak yavaşlar.
- **Çözülebilirliği garanti et**: açıkken (varsayılan), yerleşimin ilk tıklamandan itibaren
  tahmin etmeden çözülebileceği garanti edilir. Sonunda seni yazı turayla baş başa
  bırakabilecek sıradan rastgele ızgaralar için bunu kapat.
`,M=e({default:()=>N}),N=`# Ağ

Kare karolardan oluşan bir ızgaraya bir kablo ağı döşenmiş, sonra her karo rastgele
döndürülmüş. Karoları hepsi tek bir ağda birleşecek şekilde geri çevir: her kablo ucu komşu
karodaki bir kabloyla buluşmalı ve hiçbir kablo bir duvara bakar hâlde kalmamalı. Bitmiş ağ
bir ağaçtır, yani kapalı döngüsü yoktur.

Izgaranın ortasındaki kaynak karoya zaten bağlı olan karolar yol göstermesi için maviyle
çizilir; geri kalanlar gri kalır. Bir döngünün parçası olan kablo kırmızıyla çizilir.
Karolar arasındaki kalın siyah çizgiler duvardır: hiçbir kablo onları geçemez, bu da iki
yanlarındaki karoların nasıl durması gerektiği konusunda ipucu verir. Durum satırı o anda
kaç karoya güç geldiğini gösterir.

## Kontroller

### Fare ve dokunmatik

- Bir karoyu saat yönünün tersine çevirmek için ona **tıkla**, saat yönünde çevirmek için
  **sağ tıkla**.
- Emin olduğun bir karoyu **kilitlemek** için ona **orta tıkla**. Kilitli karo gölgelenir ve
  başka bir orta tıklama kilidini açana kadar dönmez. Sağ tıklama karoyu kilitlemek yerine
  çevirir, bu yüzden bunu yapmanın yolu orta tıklamadır.
- **Kilit** (Geri al'ın yanındaki asma kilit düğmesi) açıkken düz bir tıklama karoyu çevirmek yerine kilitler ya da kilidini açar; dokunmatik yüzeyde bu, orta tıklamayla uğraşmaktan daha kolaydır. Sağ tıklama karoyu yine saat yönünde çevirir. Çevirmeye dönmek için yeniden bas.
- **Karıştır**, bir bulmaca tıkandığında hava değişikliği için kilitli olmayan her karoyu
  yeni, rastgele bir yöne döndürür.
- Sarmalı bir ızgarada dört **ok düğmesi** görünümü kaydırır; böylece karşı kenarlardaki
  karolar yan yana getirilebilir.

### Klavye (Keyboard)

- **Ok tuşları** ızgarada bir imleç gezdirir.
- **Enter** ya da **A** imlecin altındaki karoyu saat yönünün tersine çevirir, **D** saat
  yönünde çevirir, **F** de yarım tur döndürür.
- **Space**, **S** ya da **L** imlecin altındaki karoyu kilitler ya da kilidini açar. Fareyle
  **Shift ile tıklama** da, tıpkı orta tıklama gibi, bir karoyu kilitler.
- **K**, **Kilit** düğmesi, **J** de **Karıştır** düğmesidir.
- Sarmalı bir ızgarada **Shift + ok tuşları** görünümü kaydırır (dört ok düğmesiyle aynı);
  böylece karşı kenarlardaki karolar yan yana görülebilir. **Ctrl + ok tuşları** mavi
  vurgunun yayıldığı kaynak karoyu taşır.

## Parametreler

- Izgaranın karo cinsinden **Genişlik** ve **Yükseklik** değerleri.
- **Kenarlar karşıya sarar**: kablolar ızgaranın bir kenarından çıkıp karşı kenarından
  devam edebilir.
- **Duvar olasılığı**: kablosuz kenarların ne kadarının duvar alacağını veren, 0 ile 1
  arasında bir sayı. Duvarlar kabloların yerleşimini asla değiştirmez: aynı rastgele tohum
  her zaman aynı ızgarayı verir, yani olasılığı artırmak yalnızca ipucu ekler.
- **Tek çözümü garanti et**: normalde bulmaca, karoların yalnızca tek bir dizilimi işe
  yarayacak şekilde kurulur. Daha hızlı üretim ve arada bir belirsiz kalan bölümler için
  bunu kapat.
`,P=e({default:()=>F}),F=`# Ağ Kaydır

Her karonun üzerinde bir kablo parçası var: düz bir hat, bir köşe, bir T bağlantısı ya da
üzerinde nokta olan açık bir uç. Parçalar doğru birleştirildiğinde, gölgeli orta karodaki
güç kaynağından her karoya ulaşan, döngüsüz ve boşluğa bakan kolu olmayan tek bir ağ
oluşturur. Izgara bütün satır ve sütunlar kaydırılarak karıştırılmış, yani onu düzeltmenin
tek yolu da bu: hiçbir karo döndürülemez, yalnızca taşınabilir.

O anda güç alan karolar maviyle çizilir; geri kalanlar gri kalır. Karolar arasındaki kalın
siyah duvarlar engeldir. Hiçbir şey bir duvarın üzerinden bağlanamaz, bu yüzden duvarlar
bitmiş ağın kesinlikle bağlantı içermediği yerleri söyler.

## Kontroller

### Fare ve dokunmatik

- Bir satırın ya da sütunun yanındaki bir oka **tıkla**; o bütün hat okun gösterdiği yöne
  bir adım kayar. Uçtan dışarı itilen karo aynı hattın öbür ucundan geri girer. Hattı öbür
  yöne kaydırmak için bir oka **sağ tıkla**.
- Orta satırda ve sütunda ok yoktur: güç kaynağı hiç hareket etmez.
- **Çöz**, kendi denemenle karşılaştırabilmen için doğrudan bitmiş ağa atlar.

### Klavye (Keyboard)

- **Ok tuşları** okların oluşturduğu halka boyunca bir vurguyu gezdirir.
- **Enter** vurgulanan hattı okunun gösterdiği yöne kaydırır, **Space** de geriye kaydırır.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri.
- **Kenarlar karşıya sarar**: açıkken sağ kenar solda, alt kenar da üstte devam eder; böylece
  kablolar (ve duvarlar) ızgaranın kenarını geçebilir. Kesik çizgili çerçeve sarmalı bir
  ızgarayı gösterir; düz, kalın bir çerçeve dört bir yanı çeviren bir duvardır.
- **Duvar olasılığı**: kullanılmayan karo kenarlarının ne kadarının duvar alacağı, 0'dan
  (hiçbiri) 1'e (bitmiş ağın kullanmadığı her kenar) kadar. Daha çok duvar bulmacayı
  kolaylaştırır. Duvarlar ızgaranın geri kalanından bağımsız seçilir, yani aynı rastgele
  tohum daha yüksek bir duvar olasılığıyla aynı bulmacayı daha çok ipucuyla verir.
- **Karıştırma hamlesi sayısı**: iyice karıştırmak için 0'da bırak ya da tam o kadar
  kaydırmayla karıştırmak için bir sayı gir. O zaman amaç bu hamleleri bulup tersine
  çevirmektir; durum çubuğu hedefi gösterir.
`,I=e({default:()=>L}),L=`# Desen

Izgaranın her karesi gizlice ya siyah ya beyaz. Her satırın yanındaki ve her sütunun
üstündeki sayılar, o çizgideki siyah kare bloklarının uzunluklarını sırasıyla söyler;
ardışık bloklar arasında en az bir beyaz kare vardır. Siyah kareleri boya; her satır ve her
sütun kendi sayılarıyla uyuşsun. Bu tür bulmacalara genellikle nonogram ya da picross
denir.

Buradaki resimler rastgele üretilir, yani tahmin edilecek bir görüntü yoktur: her şeyin
sayılardan çıkarılması gerekir. Her bulmaca, bir seferde tek bir satır ya da sütun
hakkında akıl yürüterek çözülebildiğinden emin olmak için önceden denetlenir; böylece
hiçbir zaman deneme yapmak zorunda kalmazsın.

Bir çizginin sayıları, o çizgideki siyah bloklar onlarla uyuştuğunda griye, tamamladığın
bloklar sayılara asla uyamayacaksa kırmızıya döner. Her satır ve sütun kendi sayılarıyla
uyuştuğunda bulmaca biter; noktalar yalnızca hatırlamana yardım etmek içindir.

## Kontroller

### Fare ve dokunmatik

- Bir kareyi siyaha boyamak için ona **tıkla**; temizlemek için siyah kareye yeniden tıkla.
- Bir kareyi beyaz olduğu bilindiği anlamında bir noktayla işaretlemek için **sağ tıkla**;
  temizlemek için noktalı kareye sağ tıkla.
- Tek seferde düz bir sıra siyah kare boyamak için **sürükle**, bir sıra nokta koymak için
  de **sağ tuşla sürükle**. Yalnızca başladığın kareyle aynı durumda olan kareler etkilenir,
  yani siyah karelerinin üzerinden bir sıra nokta sürüklemek onlara dokunmaz.
- Bir kareyi yeniden bilinmeyene çevirmek için ona **orta tıkla**. Fare kullanıyorsan,
  tekerleği basılı tutarak sürüklemek içinde ne olursa olsun bütün bir dikdörtgeni temizler.
- **Sil** (Geri al'ın yanındaki silgi düğmesi) aynısını normal tıklamayla yapmanı sağlar: bir kareyi silmek için ona tıkla ya da bütün bir dikdörtgeni temizlemek için sürükle. Siyaha boyamaya dönmek için yeniden bas.
- **İpucu** bir kareyi doldurur; bu her zaman tek bir satırın ya da sütunun kendi başına
  belirlediği bir karedir — ya da cevapla çelişen bir kareyi düzeltir. Bulmaca oyunda kalır,
  birkaç ipucu almak da kazancı ve kredisini yine sende bırakır.
- **Çöz** resmin tamamını senin yerine doldurur.

### Klavye (Keyboard)

- **Ok tuşları** bir imleç gezdirir.
- **Enter** imlecin altını siyaha boyar ya da temizler, **Space** de nokta koyar ya da
  kaldırır.
- İmleci hareket ettirirken yol boyunca siyaha boyamak için **Ctrl**'yi, nokta koymak için
  **Shift**'i, temizlemek için ikisini birden basılı tut.
- Fareyle **Shift ile tıklama**, tıpkı orta tıklama gibi kareleri temizler.
- **E**, **Sil** düğmesidir.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri. Hazır ayarlar 10×10'dan 30×30'a kadar
  gider; büyük ızgaraların üretilmesi biraz daha uzun sürer.
`,R=e({default:()=>z}),z=`# İnci

Bazılarında siyah ya da beyaz bir inci bulunan karelerden oluşan bir ızgara. Kare
merkezinden kare merkezine, yatay ya da dikey giden, asla kendini kesmeyen ya da dallanmayan
tek bir kapalı döngü çiz. Döngünün her kareye uğraması gerekmez ama her inciden geçmesi
gerekir:

- **siyah bir incide** döngü döner, sonra döngü boyunca incinin yanındaki iki kareden de
  dümdüz geçer;
- **beyaz bir incide** döngü dümdüz geçer ve döngü boyunca incinin yanındaki iki kareden en
  az birinde döner.

Izgarada inciye değen her kare değil, yalnızca döngünün bir inciden hemen önce ve hemen
sonra uğradığı kareler sayılır.

Kuralı zaten bozulmuş bir incinin çevresinde kırmızı bir hale belirir. Herhangi bir kapalı
döngü oluştuğu anda onun dışındaki her parça kırmızıyla çizilir; üç ya da daha fazla
parçası olan her kare de öyle.

## Kontroller

**Çöz** bütün döngüyü çizer. Döngü tek bir kapalı devre olduğunda ve hiçbir şey kırmızı
olmadığında bulmaca biter.

### Fare ve dokunmatik

- Üzerinden bir döngü parçası çizmek için bir ızgara kenarına (iki kare arasındaki sınırın
  yakınına) **tıkla**; kaldırmak için yeniden tıkla.
- Bütün bir parça dizisini tek seferde çizmek için bir dizi karenin üzerinden **sürükle**.
  Var olan parçalar boyunca sürüklemek onları kaldırır; var olan parçalarda başlayıp boş
  karelere devam eden bir sürükleme önce siler, sonra çizer. Bırakmadan önce yolu kısaltmak
  için geçtiğin bir karenin üzerine geri dön; döngüyü kapatmak için başladığın kareye geri
  gel.
- "Burada parça yok" anlamında küçük bir çarpı koymak için bir ızgara kenarına
  **sağ tıkla**; çarpı kaldırılana kadar onun üzerinden parça çizilemez.
  Geçtiğin her kenara çarpı koymak için bir dizi karenin üzerinden **sağ tuşla sürükle**.
- **Çarpı** (Geri al'ın yanındaki çarpı düğmesi) açıkken düz bir tıklama çarpı koyar ya da kaldırır, bir sürükleme de bütün bir sıra çarpı koyar: çizerken olduğu gibi, çarpıların üzerinde başlayan bir sürükleme önce onları kaldırır ve zaten parçası olan kenarları atlar. Döngüyü çizmeye dönmek için yeniden bas.

### Klavye (Keyboard)

- **Ok tuşları** bir imleç gezdirir. **Ctrl+ok** imlecin bulunduğu karenin o tarafındaki
  parçayı çizer ya da kaldırır, **Shift+ok** oraya çarpı koyar ya da kaldırır. **Enter**
  imlecin karesinden bir klavye sürüklemesi başlatır: oklarla hareket et ve yolu onaylamak
  için yeniden Enter'a, vazgeçmek için **Space**'e bas.
- **X**, **Çarpı** düğmesidir; açıkken klavye sürüklemesi de çarpı koyar.

## Parametreler

- Izgaranın kare cinsinden **Genişlik** ve **Yükseklik** değerleri (her biri en az beş).
- **Zorluk**: _Kolay_ bulmacalar her inci ve hemen yanındaki kareler hakkında akıl
  yürüterek çözülür. _Çetrefilli_ bulmacalar, bir parçanın küçük bir döngüyü erkenden
  kapatıp diğer incileri yalnız bırakacağı durumları fark etmeni de gerektirir. (5×5'lik bir
  Çetrefilli ızgara, orijinalde olduğu gibi Kolay olarak üretilir.)
- **Çözümsüze izin ver**: incileri en küçük, tek çözümlü bir kümeye indirmek yerine döngünün
  desteklediği her inciyi tut. Orijinalden kalma bir hata ayıklama seçeneği.
`,B=e({default:()=>V}),V=`# Tek Taş

Taşlarla dolu ve bir boş deliği olan bir tahta (rastgele tahtalarda birkaç boş delik olur). Bir taş, komşu bir taşın üzerinden
yatay ya da dikey atlayarak hemen ötesindeki boş deliğe geçebilir; üzerinden atlanan taş
kaldırılır. Tahtada tek bir taş kalana kadar atlamaya devam et.

Bu, eski tek taş oyunudur. **Artı** tahtası bilinen İngiliz düzeni, **Sekizgen** tahtası
Avrupa düzenidir (boş delik merkezin dışında başlar, çünkü merkezden başlayınca
bitirilemez); **Rastgele** tahtalar ise bilgisayarın büyüttüğü tuhaf şekillerdir. Deliği
olmayan boş alanlar tahtanın parçası değildir.

Kalıcı olarak sıkışamazsın: hiç atlama kalmamışsa ve birden fazla taş duruyorsa oyun biter
ama Geri al seni istediğin kadar geriye götürür. Durum satırı kalan taşları ve yapılan
hamleleri sayar.

## Kontroller

### Fare ve dokunmatik

- Bir taşı **sürükle** ve onu, dümdüz bir hatta başka bir taşın üzerinden tam iki kare
  ötedeki boş bir deliğe bırak. Başka her bırakış taşı yerine geri koyar.
- Ya da almak için bir taşa **tıkla** (taş turuncuya döner ve inebileceği delikler
  işaretlenir), sonra atlayacağı deliğe tıkla. Aynı taşa yeniden tıklamak onu yere bırakır.

### Klavye (Keyboard)

- **Ok tuşları** tahtada bir imleç gezdirir.
- Bir taşın üzerinde **Enter** ya da **Space** onu alır; ardından bir ok tuşu, geçerli bir
  hamleyse onu o yönde atlatır, yeniden **Enter** de onu geri bırakır.

## Parametreler

- Tahtanın **Genişlik** ve **Yükseklik** değerleri; her biri en az 4.
- **Tahta türü**: _Artı_ ve _Sekizgen_ geleneksel düzenlerdir ve yalnızca 7×7'de
  kullanılabilir. _Rastgele_ her seferinde farklı bir tahta şekli üretir; bu her zaman tek
  bir taşa indirilebilir, çünkü tek bir taştan başlanıp atlamalar tersine oynanarak
  kurulmuştur.
`,H=e({default:()=>U}),U=`# Menzil

Izgaranın bazı karelerinde bir sayı var. Kareleri siyaha boya; öyle ki dört şey aynı anda
doğru olsun:

- numaralı hiçbir kare siyah değil;
- iki siyah kare bir kenar boyunca birbirine değmiyor (köşeden değmeleri sorun değil);
- beyaz karelerin hepsi, kenardan kenara birleşmiş tek bir bağlı bölge oluşturuyor;
- her sayı, kendi karesinin görebildiği beyaz kareleri sayıyor: kendisi ve bir siyah kare
  ya da ızgaranın kenarı araya girene kadar yukarı, aşağı, sola ve sağa dümdüz hizadaki her
  şey.

Bu, Nikoli'nin _Kurodoko_ bulmacasıdır; _Kuromasu_ ya da _Where is Black Cells_ adlarıyla
da bilinir. Zaten yeterince kare gören bir sayının, görebildiği her dizinin hemen ötesinde
bir siyah kare vardır; yalnız kalmış bilinmeyen bir kare beyaz olsaydı çok fazla görecek bir
sayının ise orada bir siyah karesi vardır. İki beyaz kare grubu arasındaki tek bağlantı olan
bir kareyi boyamak asla doğru değildir. Her bulmaca bu tür akıl yürütmeyle bitirilebilir;
tahmin etmeye gerek yoktur.

Hatalar kırmızıyla görünür: birbirine değen siyah karelerin grubunun çevresinde kırmızı bir
çerçeve olur, ana bölgeden kopmuş beyaz kareler kırmızı bir çerçeve alır, bir sayı da artık
yeterince kare göremediğinde ya da kesin olarak çok fazla gördüğünde kırmızıya döner. Hiçbir
kural bozulmadığında bulmaca biter; beyaz karelere nokta koymaya gerek yoktur.

## Kontroller

### Fare ve dokunmatik

- Bir kareyi siyaha boyamak için ona **tıkla**. Onu bir noktaya (beyaz olduğunu bildiğin
  bir kareye) çevirmek için yeniden, temizlemek için bir kez daha tıkla.
- **Sağ tıklama** ters sırayla döner: nokta, sonra siyah, sonra temiz.
- Birkaç kareyi tek seferde boyamak için **sürükle**, onları ters sırayla taramak için de
  **sağ tuşla sürükle**. Yalnızca ilk kareyle aynı durumda başlayan kareler etkilenir,
  yani bir nokta taraması siyah karelerine dokunmaz.
- **Sil** (Geri al'ın yanındaki silgi düğmesi) açıkken bir tıklama kareyi bunun yerine temizler, bir sürükleme de üzerinden geçtiği her siyah kareyi ve noktayı, hangisi olursa olsun, temizler. Boyamaya dönmek için yeniden bas.
- **İpucu**, tahtada zaten olanlardan çıkan bir kareyi doldurur — ya da cevapla çelişen bir
  kareyi düzeltir. Bulmaca oyunda kalır, birkaç ipucu almak da kazancı ve kredisini yine
  sende bırakır.
- **Çöz** bütün ızgarayı doldurur ve her beyaz kareye nokta koyar.

### Klavye (Keyboard)

- **Ok tuşları** ızgarada bir imleç gezdirir.
- **Enter** imlecin altındaki kareye sol tıklama gibi, **Space** de sağ tıklama gibi
  davranır.
- **E**, **Sil** düğmesi, **H** de **İpucu** düğmesidir.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri. Hazır ayarlar 9×6'dan 16×11'e kadar
  gider; 30×30'a kadar her şey üretilebilir ama bir ya da iki karelik minik ızgaraların adil
  bulmacası olmaz.
`,W=e({default:()=>G}),G=`# Dikdörtgenler

Izgaranın bazı karelerinde bir sayı var. Bütün ızgarayı dikdörtgenlere böl; her dikdörtgende
tam bir sayı olsun ve o sayı dikdörtgenin alanı (genişliği çarpı yüksekliği) olsun. Örneğin
bir 6, 1×6, 2×3, 3×2 ya da 6×1'lik bir blokta durur; hangisinde olduğunu ve sayının içinde
nerede durduğunu komşularından çıkarmak sana kalmış.

Bulmacalar rastgele üretilir ve varsayılan olarak sayılar, ızgaranın yalnızca tek bir
bölünüşü işe yarayacak şekilde yerleştirilir. Orijinal bulmaca Japon dergisi Nikoli'den
gelir; orada Shikaku olarak bilinir.

## Kontroller

### Fare ve dokunmatik

- Bir alanın çevresine dikdörtgen çizmek için onun üzerinden **sürükle**: dış çizgisi çizilir
  ve içindeki çizgiler kaldırılır. Bir ızgara çizgisi boyunca sürüklemek yalnızca o çizgiyi
  çizer.
- O tek kenarı eklemek ya da kaldırmak için bir ızgara çizgisine **tıkla**.
- Bir alanın dış çizgisine dokunmadan içindeki çizgileri silmek için onun üzerinden
  **sağ tuşla sürükle**. Bir ızgara çizgisine **sağ tıklama** da, tıpkı normal bir tıklama gibi,
  onu ekler ya da kaldırır.
- **Sil** (Geri al'ın yanındaki silgi düğmesi) normal bir sürüklemenin de silmesini sağlar: içindeki çizgileri temizlemek için bir alanın üzerinden sürükle ya da kaldırmak için bir ızgara çizgisine tıkla. Açıkken tıklama asla çizgi eklemez. Çizmeye dönmek için yeniden bas.
- **Çöz** bütün bölünüşü senin yerine doldurur.

Sürüklerken çizmek üzere olduğun dikdörtgenin çerçevesi çizilir ve boyutu durum satırında
gösterilir. Doğru boyutta bitmiş bir dikdörtgen gölgelenir. Asla doğru olamayacak kapalı bir
dikdörtgen işaretlenir: sayısı için yanlış boyuttaysa sayısı kırmızıya döner, hiç sayı
içermiyorsa taranır. Her kare doğru bir dikdörtgenin içinde olduğunda bulmaca tamamlanır.

### Klavye (Keyboard)

- **Ok tuşları** bir imleç gezdirir.
- **Enter** imleçten bir dikdörtgen sürüklemeye başlar; imleci karşı köşeye götür ve onu
  çizmek için yeniden **Enter**'a bas.
- **Space** aynı şekilde çalışır ama bunun yerine dikdörtgenin içini siler.
- **E**, **Sil** düğmesidir.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri. Hazır ayarlar 7×7'den 19×19'a kadar
  gider.
- **Genişleme katsayısı** — daha küçük bir ızgara üretip istenen boyuta esnet; böylece
  bulmacada daha az ama daha büyük dikdörtgen olur. 0 (varsayılan) esnetme yok demektir;
  0,5 ilk ızgarayı her yönde son boyutun üçte ikisi yapar. Büyük değerler yalnızca bir avuç
  dikdörtgen bırakır ve bulmacayı çok kolaylaştırır.
- **Tek çözümü garanti et** — normalde açık. Kapatmak sayıları dikdörtgenlerinin herhangi bir
  yerine koyar; bu daha hızlıdır ve birden fazla cevabı olan bulmacalar verebilir; o zaman
  her geçerli bölünüş çözülmüş sayılır.
`,se=e({default:()=>K}),K=`# Aynı Renk

Tahta renkli karelerle dolu. Kenarları boyunca birbirine değen, aynı renkte iki ya da daha
fazla kareden oluşan bir grup seç ve onu kaldır; boşluğun üstündeki kareler aşağı düşer,
bir sütun boşaldığında da sağındaki sütunlar onu kapatmak için kayar. Kazanmak için bütün
tahtayı temizle. Kareler kalmışsa ama birbirine değen hiçbir iki kare aynı renkte değilse
yapabileceğin bir şey kalmamıştır — geri al ve başka bir sıra dene.

Büyük gruplar küçüklerden çok daha değerlidir: varsayılan puanlamayla _n_ kareyi kaldırmak
(_n_ − 2)² puan getirir; yani bir ikili hiçbir şey, üç kare bir puan, on kare 64 puan eder.
Durum satırı puanını ve bir grup seçiliyken kaç karesi olduğunu ve ne kazandıracağını
gösterir.

Üretilen her tahta (seçeneği kapatmadıkça) tamamen temizlenebilecek şekilde kurulur — ama
iyi puan da getiren bir sıra bulmak sana kalmış.

Çöz düğmesi yok: bilgisayar tahtanın temizlenebileceğini bilir ama nasıl olacağını sana
söylemez.

## Kontroller

### Fare ve dokunmatik

- Bir kareye **tıkla**; ait olduğu bütün grup seçilir ve grup daha açık renkte, kalın bir
  çerçeveyle çizilir. Kaldırmak için **seçili gruba yeniden tıkla**. Başka bir yere tıklamak
  bunun yerine seçimi oraya taşır.
- Seçimi kaldırmak için seçili gruba **sağ tıkla**.

### Klavye (Keyboard)

- **Ok tuşları** tahtada bir imleç gezdirir (kenarlarda karşı tarafa geçer).
- **Enter** imlecin altındaki grubu seçer, yeniden basmak da grubu kaldırır.
- Seçili grup üzerinde **Space** seçimi kaldırır.

## Parametreler

- Tahtanın **Genişlik** ve **Yükseklik** değerleri.
- **Renk sayısı**, 3'ten 9'a kadar (çözülebilirlik garanti edilmediğinde 2'ye izin verilir).
  Daha çok renk daha küçük gruplar ve daha zor bir tahta demektir.
- **Puanlama sistemi**: varsayılan _(n−2)²_ ya da ikilileri de ödüllendiren _(n−1)²_.
- **Çözülebilirliği garanti et**: işaretliyken tahta, en az bir temizleme sırası olacak
  şekilde boş bir tahtadan geriye doğru üretilir. Daha hızlı üretilen ve daha büyük bölgeleri
  olma eğiliminde olan ama temizlenmesi imkânsız olabilecek düz rastgele bir tahta için
  işaretini kaldır.
`,ce=e({default:()=>le}),le=`# Yön Tabelası

Her karenin üzerinde bir ok, birkaç karenin üzerinde de sayılar var. Kareleri 1'den N'ye
(N kare sayısıdır) numaralı tek bir yolda birleştir; her karenin ardılı, okunun
doğrultusunda bir yerde olsun: 1 numaralı kare 2'yi, o da 3'ü gösterir ve bu böyle gider.
Ardıl, yalnızca hemen yanda değil, okun yönünde herhangi bir uzaklıkta olabilir. Yıldızla
işaretli son kare hiçbir yeri göstermez.

İlk ve son sayılar her zaman gösterilir; yolu tek kılacak kadar başka sayı da. Her
bulmacanın tam bir çözümü vardır ve yalnızca akıl yürüterek bulunabilir.

Hatalar kırmızıyla gösterilir: aynı sayıyı almış iki kare, ardılı okunun doğrultusunda
olmayan bir sayı ya da verilen sayısını aşan bir zincir. 1'den N'ye kadar sayılar hiçbir
yerde kırmızı olmadan her kareden geçtiğinde bulmaca biter.

## Kontroller

### Fare ve dokunmatik

- İkinciyi birincinin ardılı yapmak için bir kareden okunun doğrultusundaki bir kareye
  **sürükle**. **Sağ tuşla sürüklemek** ters yöne gider: bir kareden, ondan önce gelmesi
  gereken kareye.
- Bağlanan iki kareden birinde sayı varsa sayı bütün zincire yayılır ve maviyle gösterilir.
  Henüz sayısı olmayan bir zincir bir harf ve farklarla etiketlenir (\`a\`, \`a+1\`, \`a+2\`, ...);
  numaralı bir kareye değdiği anda harfler sayıya dönüşür. Bir zinciri zaten bağlı olan bir
  kareye bağlamak eski bağlantının yerini alır.
- Hâlâ bir öncüle ihtiyacı olan her karenin sol alt köşesinde küçük bir nokta görünür;
  karesinin bir ardılı olduğunda da ok soluklaşır. Yani iş her zaman koyu bir oku noktalı bir
  kareye bağlamaktır.
- İki bağlantısını da kaldırmak için bir kareye **sağ tıkla**. Aynısını yapmak için bir
  kareyi tahtanın dışına **sürükle**; bütün zincirini dağıtmak için de onu tahtanın dışına
  **sağ tuşla sürükle**.
- **Kopar** (Geri al'ın yanındaki kopuk bağlantı düğmesi) açıkken bir kareye tıklayınca onun bütün zinciri, her bağlantısıyla birlikte dağılır; bir kareyi tahtanın dışına sürüklemek de aynısını yapar. Kareden kareye sürüklemek onları yine bağlar. Kapatmak için yeniden bas.
- **Çöz** yolun tamamını doldurur.

### Klavye (Keyboard)

- **Ok tuşları** bir imleç gezdirir.
- Bir karenin üzerinde **Enter** ondan bir bağlantı başlatır; imleci ardıla götür ve
  bağlantıyı kurmak için yeniden **Enter**'a bas (iptal etmek için aynı karede bas).
- **Space** ya da **X** imlecin altındaki karenin bağlantılarını kaldırır; **Shift + X**
  bütün zincirini dağıtır.
- **B**, **Kopar** düğmesidir.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri; 2'den 12 kareye kadar (2×2 işe
  yaramayacak kadar küçüktür).
- **Köşelerde başla ve bitir**: açıkken 1 her zaman sol üst karede, N de sağ alt karededir.
  Aksi hâlde iki uç da rastgele yerleştirilir ama ikisi de yine gösterilir.
`,ue=e({default:()=>de}),de=`# Tekler

Izgaranın her karesinde bir sayı var. Karelerin bazılarını (sayılarını gizleyerek) karart;
öyle ki üç şey aynı anda doğru olsun:

- hiçbir satır ya da sütunun beyaz karelerinde bir sayı birden fazla kez görünmüyor;
- iki siyah kare bir kenar boyunca birbirine değmiyor (köşeden değmeleri sorun değil);
- beyaz karelerin hepsi, kenardan kenara birleşmiş tek bir bağlı bölge oluşturuyor.

Bu, Nikoli'nin _Hitori_ bulmacasıdır. İyi bir başlangıç, aralarında bir kare olan iki eşit
sayı aramaktır: ikisinden biri siyah olmalı, yani ortadaki kare beyaz olmalı. Yan yana iki
eşit sayı, o sayının kendi satır ya da sütunlarındaki diğer her kopyasının siyah olduğu
anlamına gelir.

Hatalar kırmızıyla görünür: birbirine değen siyah karelerin grubunun çevresinde kırmızı bir
çerçeve olur, ana bölgeden kopmuş beyaz kareler kırmızı bir çerçeve alır, aynı sayıyla aynı
satırı ya da sütunu paylaşan daire içine alınmış iki kare de kırmızıyla çizilir.

Hiçbir kural bozulmadığında bulmaca biter; beyazları daire içine almaya gerek yoktur.

## Kontroller

### Fare ve dokunmatik

- Bir kareyi karartmak için ona **tıkla**; geri getirmek için yeniden tıkla.
- **Sağ tıklama**, bir sayının kesin olarak beyaz olduğunu kaydetmek için çevresine bir
  daire çizer; daireyi kaldırmak için yeniden sağ tıkla. Tıklama da sağ tıklama da bir
  karede zaten olan işareti temizler.
- **Çöz** bütün ızgarayı doldurur ve her beyaz kareyi daire içine alır.

### Klavye (Keyboard)

- **Ok tuşları** ızgarada bir imleç gezdirir (kenarlarda karşı tarafa geçer).
- **Enter** imlecin altındaki kareyi karartır ya da geri getirir, **Space** de onu daire
  içine alır ya da daireyi kaldırır.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri; üretilen bulmacalar için 2'den 20'ye
  kadar.
- **Zorluk**: _Kolay_ bulmacalar yalnızca doğrudan gerekçeler gerektirir — siyah bir kare
  komşularını beyaz olmaya zorlar, daire içindeki bir sayı ikizlerini siyah olmaya zorlar,
  arada boşluklu çift ve yan yana çift desenleri, tek çıkış yolu olan beyaz bir kare ve
  köşelerdeki küçük desenler. _Çetrefilli_ bulmacalar, bir kareyi karartmanın beyaz bölgeyi
  ikiye böleceği durumları fark etmeni ve bir kare kaydırılmış çift çiftlerini kullanmanı da
  gerektirir. Her bulmacanın tam bir çözümü vardır.
`,fe=e({default:()=>pe}),pe=`# On Altı

Boş karesi olmayan bir kaydırmalı bulmaca. Her karede numaralı bir karo var; tek bir karoyu
kaydırmak yerine bütün bir satırı ya da sütunu bir adım kaydırırsın. Kenardan dışarı itilen
karo, ızgara bir simidin çevresine sarılmış gibi, aynı hattın karşı ucundan hemen geri girer.
Karoları sol üst köşedeki 1'den başlayıp soldan sağa, sonra satır satır artacak şekilde
sırala.

## Kontroller

### Fare ve dokunmatik

- O satırı ya da sütunu okun gösterdiği yönde bir adım kaydırmak için kenardaki oklardan
  birine **tıkla**. Hattı ters yöne kaydırmak için bir oka **sağ tıkla**.
- **Çöz** ızgarayı yalnızca sıralı olanla değiştirir. Sana bir yol göstermez ama manevraları
  denemek için temiz bir tahta verir.

### Klavye (Keyboard)

- **Ok tuşları** kenar oklarının oluşturduğu halka boyunca bir vurguyu gezdirir.
- **Enter** vurgulanan hattı okunun gösterdiği yöne kaydırır, **Space** de öbür yöne kaydırır.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri. İki kenarı da tek sayı olan
  ızgaralarda bütün dizilimlerin yalnızca yarısına ulaşılabilir, bu yüzden üretici yalnızca
  ulaşılabilir olanları verir.
- **Karıştırma hamlesi sayısı**: tamamen rastgele bir dizilim için 0'da bırak ya da sıralı
  ızgarayı tam o kadar tekli kaydırmayla karıştırmak için bir sayı gir. O zaman fikir, hangi
  kaydırmaların yapıldığını bulup onları aynı sayıda hamlede geri almaktır; ne kadar çok
  karıştırma hamlesi istersen daha kısa bir çözümün olma olasılığı o kadar artar.
`,me=e({default:()=>he}),he=`# Eğik

Bazı köşelerinde daire içinde sayılar olan boş karelerden oluşan bir ızgara. Her kareden,
iki yönden birine eğik tek bir köşegen çizgi geçir; öyle ki:

- daire içindeki her sayının köşe noktasına tam o kadar çizgi değsin (bir 4 bir çarpının
  ortasında durur, bir 0'ın yakınındaki her çizgi ondan uzağa eğilir);
- çizgiler asla birleşip kapalı bir döngü oluşturmasın.

Zaten çok fazla çizgisi olan ya da artık yeterince çizgi alamayacak bir sayı kırmızıya
döner; bir döngünün parçası olan her çizgi de öyle. Her karede bir çizgi olduğunda ve hiçbir
şey kırmızı olmadığında bulmaca biter.

## Kontroller

### Fare ve dokunmatik

- Bir kareye \`\\\` çizmek için ona **tıkla**; \`/\`'ye çevirmek için yeniden, temizlemek için bir
  kez daha tıkla.
- **Sağ tıklama** ters sırayla döner: \`/\`, sonra \`\\\`, sonra boş. Yani bir kare yalnızca
  tıklayarak da, yalnızca sağ tıklayarak da iki yöne ayarlanabilir.
- **Çöz** bütün ızgarayı doldurur.

### Klavye (Keyboard)

- **Ok tuşları** ızgarada bir imleç gezdirir.
- **Enter** imlecin altındaki kareyi sol tıklama gibi, **Space** de sağ tıklama gibi
  döndürür.

## Parametreler

- Izgaranın kare cinsinden **Genişlik** ve **Yükseklik** değerleri.
- **Zorluk**: _Kolay_ bulmacalar her seferinde tek bir kareyle çözülebilir — zaten karşılanmış
  ya da kalan her kareyi gerektiren bir sayı ve iki çizgiden birinin döngü kapatacağı
  kareler. _Zor_ bulmacalar, hangi yöne olduğunu bilmeden önce bile aynı yöne eğilmesi
  gereken kare çiftleri ve bir çizginin ızgaranın kenarından ayıracağı bölgeler hakkında akıl
  yürütmeyi de gerektirir. Hiçbir zaman tahmin gerekmez; her bulmacanın tam bir çözümü vardır.
`,ge=e({default:()=>_e}),_e=`# Sudoku

Kare ızgarayı rakamlarla doldur; her satır, her sütun ve kalın çerçeveli her blok her
rakamı tam bir kez içersin. Bazı kareler ipucu olarak verilmiştir; gerisini çıkarmak sana
kalmış. Normal 3×3 bulmaca bildiğimiz Sudoku'dur ama bloklar dikdörtgen de olabilir (2×3'lük
bir bulmacada altı tane 3×2'lik blok vardır) ve ızgara 16×16'ya kadar büyüyebilir; bu durumda
9'dan büyük rakamların yerini a, b, c… harfleri alır.

Üç çeşit açılabilir:

- **X**: hafifçe gölgelenmiş iki ana köşegenin her biri de her rakamı içermeli.
- **Yapboz**: bloklar, bulmacadan bulmacaya değişen düzensiz şekillerdir.
- **Killer**: ipucu rakamı yoktur. Bunun yerine ızgara kesik çizgili "kafeslere" bölünür;
  her kafeste içindeki rakamların toplamı yazar. Bir kafeste hiçbir rakam iki kez
  bulunamaz.

Her bulmacanın tam bir çözümü vardır ve seçtiğin zorlukta her zaman saf akıl yürütmeyle
ulaşılabilir.

## Kontroller

Satırındaki, sütunundaki, bloğundaki, köşegenindeki ya da kafesindeki başka bir kopyayla
çakışan rakamlar kırmızıyla gösterilir; rakamlarının toplamı tutmayan bir kafes de öyle.
**İpucu** bir kareyi doldurur — hâlâ açık olan en kolay kareyi ya da cevapla çelişen ilk
rakamı — ve gerisini sana bırakır; bulmaca oyunda kalır, birkaç ipucu almak da kazancı ve
kredisini yine sende bırakır. **Çöz** çözümün tamamını doldurur ve bulmacayı bitirir.

### Fare ve dokunmatik

- Seçmek için boş bir kareye **sol tıkla**, sonra bir rakam yazmak için ekrandaki tuş
  takımını kullan (harf tuşları 9'dan büyük rakamlardır). Seçili kareye yeniden tıklamak
  seçimi kaldırır.
- Tuş takımındaki **⌫** seçili kareyi yeniden boşaltır, **✎** de kalem notlarını açık
  tutar; böylece sonra seçtiğin şey cevap yerine küçük bir not olarak girilir.
- Bir kareyi doğrudan **kalem notları** için seçmek üzere ona **sağ tıkla**. Kalem notları
  yalnızca düşünmene yardım etmek içindir; oyun onlara hiç bakmaz ve bir rakam yazmak onları
  temizler.
- Duraklatma menüsündeki **Notlar**, her şeyle başlayıp adayları elemeyi sevenler için her boş
  kareyi eksiksiz bir kalem notu takımıyla doldurur.
- **Vurgula** (Geri al'ın yanındaki büyüteç) son tıkladığın karedeki rakamı içeren her kareyi, ipuçları dahil, öne çıkarır ve o rakamı kalem notları arasında kalın gösterir. Kapatmak için yeniden bas.

### Klavye (Keyboard)

- Seçili kareyi doldurmak için **bir rakam yaz** (9'dan büyük rakamlar için bir harf).
- **Space** ya da **Backspace** seçili kareyi temizler (rakamını ya da bütün kalem
  notlarını).
- **Ok tuşları** bir klavye imlecini hareket ettirir. **Enter** imleci normal giriş ile kalem
  notu girişi arasında değiştirir; yazılan rakamlar imlecin altındaki kareye girer.
- **M**, **Notlar** düğmesi, **L** de **Vurgula** düğmesidir.

## Parametreler

- **Alt blok sütunları** ve **Alt blok satırları**: ızgara bunların çarpımı kadar büyüktür;
  her blok satır sayısı kadar geniş, sütun sayısı kadar yüksektir. Yapboz modunda çarpım
  doğrudan ızgara boyutudur.
- **X**, **Yapboz** ve **Killer** yukarıda anlatılan çeşitleri açar. Killer bulmacaları en
  fazla dokuz rakamlı ızgaralarla sınırlıdır.
- **Simetri**: ipucu deseninin kendini nasıl yansıttığı. Daha çok simetri daha güzel görünür
  ama kesinlikle gerekenden fazla ipucu bırakma eğilimindedir.
- **Zorluk**: bulmacanın gerektireceği en zor akıl yürütme türü. _Çok kolay_ ve _Kolay_
  bulmacalarda her zaman doğrudan doldurulabilecek bir kare vardır; _Orta_, bir rakamın bir
  blok ve bir satır ya da sütun boyunca nereye gidebileceği hakkında akıl yürütmeni
  gerektirir; _Zor_, aralarında bir rakam kümesine sahip kare kümeleri gerektirir; _Uzman_
  zorlama zincirlerini ekler; _Aşırı zor_ bulmacalar da tahmin edip geri dönmeden
  bitirilemez. Zor bulmacaların üretilmesi daha uzun sürer.
`,ve=e({default:()=>ye}),ye=`# Çadırlar

Izgara bir kamp alanı: bazı karelerde ağaç var, geri kalanlar boş arazi. Boş karelere çadır
kur; öyle ki:

- tam olarak ağaç sayısı kadar çadır olsun;
- her ağaç, hemen yanındaki (üstündeki, altındaki, solundaki ya da sağındaki — çaprazdaki
  değil) bir karede kendi çadırıyla eşleşebilsin. Bir çadır başka ağaçların yanında da
  durabilir ama her çadır bir ağaca, her ağaç da bir çadıra aittir;
- hiçbir iki çadır, köşeden bile birbirine değmesin;
- sağ ve alt kenar boyunca duran sayılar her satır ve sütundaki çadır sayısını versin.

İpuçları yalnızca sayılardır, yani bütün bulmaca çadırların nerede olması gerektiğini
çıkarmaktan ibarettir. Buradaki her bulmaca tahmin etmeden, yalnızca akıl yürüterek
çözülebilir.

## Kontroller

Birbirine değen çadırlar, paylaştıkları kenar ya da köşede bir işaretle kırmızı gösterilir;
aralarında çok az ağaç olan her çadır grubu ya da artık bütün çadırlarına yer kalmamış her
ağaç grubu da öyle. Bir sayı, çizgisinde doğru sayıda çadır olduğunda griye, artık
karşılanamayacağında kırmızıya döner. **Çöz** bütün çadırları senin yerine kurar.

### Fare ve dokunmatik

- Oraya çadır kurmak için boş bir kareye **tıkla**; kaldırmak için çadıra yeniden tıkla.
- Oraya çadır gelmeyeceğinden emin olduğunu göstermek üzere boş bir kareyi çimen olarak
  işaretlemek için ona **sağ tıkla**; temizlemek için yeniden sağ tıkla. Tıklama da
  sağ tıklama da içinde zaten bir şey olan kareyi temizler.
- Üzerinden geçtiğin her boş kareyi tek seferde çimene çevirmek için bir satır ya da sütun
  boyunca **sağ tuşla sürükle** — bütün çadırları yerleştirilmiş bir çizgiyi bitirmek için
  kullanışlıdır. Çadırlara ve var olan işaretlere dokunulmaz.

### Klavye (Keyboard)

- **Ok tuşları** bir imleç gezdirir.
- **Enter** imlecin altına çadır kurar ya da kaldırır.
- **Space** imlecin altını çimen olarak işaretler ya da temizler.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri; 4'ten 20 kareye kadar.
- **Zorluk**: _Kolay_ bulmacalar saymaya ve her ağacın ve çadırın neye ihtiyacı olduğuna
  bakmaya boyun eğer. _Çetrefilli_ bulmacalar bir çizgideki olası yerleşimlerin komşularını
  nasıl kısıtladığını tartmanı ve ağaçların hangi kareleri paylaşabileceğini düşünmeni de
  gerektirir.
`,be=e({default:()=>xe}),xe=`# Kuleler

Izgaranın her karesine, yüksekliği 1'den ızgaranın boyutuna kadar olan bir kule gelir. Her
satır ve her sütun her yüksekliği tam bir kez içermeli. Kenardaki sayılar, o taraftan o
satıra ya da sütuna bakınca kaç kule göreceğini söyler: bir kule arkasındaki bütün kısa
kuleleri gizler. Izgara boyutuna eşit bir ipucu, yüksekliklerin çizgi boyunca sürekli
arttığı anlamına gelir; 1 ipucu da en uzun kulenin tam o kenarda durduğu anlamına gelir.

Daha büyük ve daha zor bulmacalar bazı kuleler zaten kurulmuş olarak başlar ve kenar
ipuçlarının bazılarını dışarıda bırakır. Satırında ya da sütununda başka biriyle çakışan
rakamlar ve o ana kadar kurulan kulelerin artık karşılayamayacağı ipuçları kırmızıyla
gösterilir. Bu bulmaca daha çok Gökdelenler (Skyscrapers) adıyla bilinir.

## Kontroller

Verilen kuleler değiştirilemez, **Çöz** de cevabı doldurur.

### Fare ve dokunmatik

- Seçmek için bir kareye **sol tıkla**, sonra o yükseklikte bir kule kurmak için ekrandaki
  tuşları kullan. Tuş takımındaki **⌫** kareyi yeniden boşaltır.
- Tuş takımındaki **✎** **kalem notlarını** açık tutar: seçtiğin şey bundan sonra küçük bir
  not olarak girilir, kare seçili kalır ki birkaç not ekleyebilesin, aynı rakam yeniden
  seçilirse de o not silinir. Gerçek bir rakam yazmak o karedeki kalem notlarını siler.
- Bir kareyi doğrudan kalem notları için seçmek üzere ona **sağ tıkla**.
- Duraklatma menüsündeki **Notlar**, her boş kareyi eksiksiz bir kalem notu takımıyla doldurur.
- **Vurgula** (Geri al'ın yanındaki büyüteç) son tıkladığın karedeki yüksekliği taşıyan her kareyi öne çıkarır ve o yüksekliği kalem notları arasında kalın gösterir. Kapatmak için yeniden bas.

### Klavye (Keyboard)

- Seçili karede o yükseklikte bir kule kurmak için **bir rakam yaz**. **Space** ya da
  **Backspace** onu temizler.
- **Ok tuşları** bir klavye imlecini hareket ettirir. **Enter** onu rakam ve kalem notu modu
  arasında değiştirir; rakamlar vurgulanan kareye yazılır ve imleç yerinde kalır.
- **M**, **Notlar** düğmesi, **L** de **Vurgula** düğmesidir.

## Parametreler

- **Izgara boyutu** — 3'ten 9'a kadar. Kuleler tek rakam olarak girilir; sınırın 9 olmasının
  nedeni bu.
- **Zorluk** — Kolay bulmacalar yalnızca her ipucunun ve satır ile sütun kurallarının
  doğrudan sonuçlarını gerektirir. Zor bulmacalar bir ipucunun izin verdiği her dizilimi
  düşünmeni ve birkaç adayı paylaşan kare kümelerini fark etmeni ister. Uzman, daha zor küme
  akıl yürütmesi ve zorlama zincirleri ekler; Aşırı zor bulmacalar da biraz deneme yanılma
  olmadan bitirilemez ama çözüm yine tektir.
`,Se=e({default:()=>Ce}),Ce=`# Raylar

Bir demiryolu ızgaraya soldan girer ve alttan çıkar; iki uç da tahtanın dışına uzanan raylar
olarak gösterilir. Aradaki hattı tamamla. Hat dalı, döngüsü ya da kesişmesi olmayan tek bir
güzergâhtır ve yalnızca düz parçalardan ve çeyrek dönüşlü virajlardan kurulur; yani uğradığı
her kareden tam iki ray çıkar. Birkaç parça gölgeli karelere zaten döşenmiştir ve
değiştirilemez. Her sütunun üstündeki ve her satırın yanındaki sayı, bitmiş hattın o
çizginin kaç karesinden geçtiğini söyler.

Sayılar, çizgilerinde doğru sayıda ray karesi olduğunda griye, bir çizgi artık tutamayacağında
kırmızıya döner: çok fazla ray karesi ya da yeterli yer bırakmayacak kadar çok çarpılı kare.
Rayların hatalı buluştuğu kareler (bir kareye üç ray, kapalı bir döngü ya da giriş ve çıkış
birleştikten sonra artan ray) de kırmızıyla çizilir.

## Kontroller

**Çöz** hattın tamamını döşer ve onunla çelişen işaretlerini kaldırır. Kesintisiz tek bir
hat girişi çıkışa bağladığında ve her sayı tuttuğunda bulmaca biter.

### Fare ve dokunmatik

- Aralarına ray döşemek için bir dizi komşu karenin üzerinden **sürükle**. Yol köşe
  dönebilir; yalnızca zaten var olan rayları izleyen bir sürükleme bunun yerine onları
  yeniden kaldırır.
- O kenardan geçen tek bir rayı eklemek ya da kaldırmak için bir karenin kenarının yakınına
  **tıkla**. Hangi kenarlar olduğunu söylemeden bir kareyi "hat buradan geçiyor" diye
  işaretlemek için karenin ortasına tıkla — saymak için kullanışlıdır — işareti temizlemek
  için yeniden tıkla.
- "Burada ray yok" anlamında kısa bir çubuk çizmek için bir kenarın yakınına **sağ tıkla**;
  bütün kareyi çarpıyla elemek için karenin ortasına sağ tıkla. Bir dizi kareyi tek seferde
  çarpıyla elemek (ya da çarpıyı kaldırmak) için bir satır ya da sütun boyunca
  **sağ tuşla sürükle**.
- **Sil** (Geri al'ın yanındaki silgi düğmesi) açıkken bir tıklama ya da sürükleme kareleri tamamen temizler: dokunduğu her kare raylarını, "ray yok" çubuklarını ve işaretini ya da çarpısını kaybeder. Verilen parçalar yerinde kalır. Ray döşemeye dönmek için yeniden bas.

### Klavye (Keyboard)

- **Ok tuşları** karelerde ve aralarındaki kenarlarda duran bir imleç gezdirir. **Enter**
  imleçte bir tıklama gibi, **Space** de bir sağ tıklama gibi davranır.
- **E**, **Sil** düğmesidir.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri; her biri en az dört.
- **Zorluk**: _Kolay_ bulmacalar bir seferde tek bir kareye ya da tek bir çizgiye bakarak
  çözülür. _Çetrefilli_ bulmacalar bir çizginin son ray karesinin nereye gidebileceğini ve bir
  çizgi boyunca ya da onun üzerinden devam ettirilmesi gereken açık ray uçlarını da
  düşünmeni gerektirir. Her bulmacanın tam bir çözümü vardır.
- **Art arda 1 ipuçlarını engelle**: açıkken (varsayılan) iki komşu çizginin ikisinin de
  sayısı 1 olmaz; giriş sütununun ve çıkış satırının da olmaz. Bu, hattın kenar boyunca uzun,
  sıkıcı düzlüklerde ilerlemesini önler.
`,we=e({default:()=>Te}),Te=`# Döndür

Numaralı karolardan oluşan bir ızgara, kare karo blokları döndürülerek karıştırılmış.
Sayılar soldan sağa ve yukarıdan aşağıya sırayla okunana kadar onları geri döndür. Temel
oyunda her hamle 2×2'lik bir bloğu dört karosunun buluştuğu nokta etrafında çeyrek tur
döndürür; büyük ayarlar 3×3'lük ya da daha büyük blokları döndürür.

**Yönlü** çeşitlerde her karonun üzerinde bir üçgen vardır ve bulmaca yalnızca her üçgen
yukarıyı gösterdiğinde bitmiş sayılır. **Yalnızca satırlar** çeşidinde karolar bunun yerine
satır numaralarını taşır; yani bütün 1'lerin yalnızca birinci satıra, 2'lerin ikinci satıra
ulaşması gerekir ve bu böyle gider.

## Kontroller

**Çöz** her karoyu doğrudan yerine koyar. Sana bir yol göstermez ama bir döndürme dizisini
çalışmak için hızlıca temiz bir ızgara elde etmenin yoludur.

### Fare ve dokunmatik

- Bir bloğu saat yönünün tersine döndürmek için merkezine **tıkla**; saat yönünde döndürmek
  için **sağ tıkla**. 2×2'lik bloklarda merkez, dört karonun buluştuğu bir köşedir; tek
  boyutlu bloklarda ortadaki karodur. Izgaranın kenarına doğru bir tıklama, o kenara dayanan
  bloğu döndürür.
- **Saat yönü** (Geri al'ın yanındaki dönen ok düğmesi) iki yönün yerini değiştirir: bir tıklama blokları saat yönünde, bir sağ tıklama saat yönünün tersine döndürür. Geri dönmek için yeniden bas.

### Klavye (Keyboard)

- **Ok tuşları** ızgarada bir blok büyüklüğünde bir çerçeve gezdirir. **Enter** çerçeveli
  bloğu saat yönünün tersine, **Space** de saat yönünde döndürür.
- **A**, **B**, **C** ve **D** sol üst, sağ üst, sol alt ve sağ alt köşe bloklarını saat
  yönünün tersine döndürür; saat yönü için **Shift**'i basılı tut.
- **T**, **Saat yönü** düğmesidir.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri.
- **Dönen blok boyutu**: bir hamlenin döndürdüğü kare bloğun kenarı (en az 2 ve ızgaradan
  büyük değil).
- **Satır başına tek sayı**: bir satırdaki her karonun aynı numarayı taşıdığı daha kolay
  bir çeşit.
- **Yön önemli**: karolar üçgen alır ve sonunda hepsi yukarıyı göstermelidir.
- **Karıştırma hamlesi sayısı**: iyice karıştırmak için 0'da bırak ya da çözümden tam o
  kadar döndürme uzakta bir ızgara elde etmek için küçük bir sayı ver. O zaman amacın bu
  döndürmeleri bulup geri almaktır; yani üç hamlelik bir karıştırma üç hamlelik bir cevabı
  hak eder (gerçi bazen daha kısa bir yol da olabilir).
`,Ee=e({default:()=>De}),De=`# Hortlaklar

Izgara, perili bir aynalar salonu. Aynası olmayan her kare üç canavardan birini saklar: bir
**hayalet**, bir **vampir** ya da bir **zombi**. Izgaranın üstündeki açıklama her birinden
kaç tane yerleştirilmesi gerektiğini söyler; kenardaki her konumda duran sayı da, bakış
çizgisini çapraz aynalardan sekerken izleyerek oradan ızgaraya bakınca kaç canavar
göreceğini söyler.

Aynalar görebildiklerini değiştirir. Vampirin yansıması yoktur, bu yüzden yalnızca bakış
çizgin henüz bir aynaya rastlamamışken sayılır. Hayalet tam tersidir: doğrudan bakınca
görünmez, yalnızca bir yansımadan sonra ortaya çıkar. Zombi her zaman görünür. Bir bakış
çizgisi aynı kareden iki kez geçerse oradaki canavar her görünüşünde sayılır. Bütün
canavarları, her kenar sayısı ve her toplam doğru olacak şekilde yerleştir.

## Kontroller

Bir kenar sayısı, bakış çizgisi tamamen hesaba katıldığında griye, artık karşılanamayacağında
kırmızıya döner; bir açıklama sayısı da o canavardan çok fazla yerleştirildiğinde kırmızıya
döner. Kalem notları yalnızca kendi notların içindir ve bulmacayı asla etkilemez.

### Fare ve dokunmatik

- Boş bir kareyi hayalet, vampir, zombi ve yeniden boş arasında döndürmek için ona
  **sol tıkla**. Kare vurgulu kalır.
- Ekrandaki tuşlar, sırayla dönmeden vurgulanan kare için doğrudan bir canavar
  seçer; **⌫** kalem notları dahil kareyi boşaltır.
- Tuş takımındaki **✎** **kalem notlarını** açık tutar: seçtiğin canavar bundan sonra
  karenin aday listesine eklenir (ya da listeden çıkarılır).
- Kalem notlarını birer aday olarak (hayalet, sonra vampir, sonra zombi, sonra temiz)
  eklemek için bir kareye **sağ tıkla**.
- **Görüş** (Geri al'ın yanındaki göz) vurgulanan kareden geçen görüş hatlarını aynalarda kırarak çizer ve her birinin iki ucundaki kenar sayılarını halkayla işaretler. Açıkken bir kenar sayısına tıklamak o sayının kendi hattını izler; bırakmak için ona yeniden tıkla. Kapatmak için **Görüş**'e yeniden bas. Açıkken vurgulanmamış bir kareye tıklamak onu yalnızca vurgular; böylece boş bir kareyi doldurmadan izleyebilirsin. Her zamanki gibi değiştirmek için ona yeniden tıkla.

### Klavye (Keyboard)

- Ok tuşları vurguyu hareket ettirir. Enter vurgulanan canavarı, Space de kalem notlarını
  sırayla döndürür.
- \`G\`, \`V\`, \`Z\` (ya da \`1\`, \`2\`, \`3\`) o canavarı vurgulanan kareye koyar ya da vurgu kalem
  modundayken kalem notunu açar veya kapatır. \`E\`, \`0\`, Backspace ya da Delete kalem notları
  dahil kareyi temizler.
- \`S\`, **Görüş** düğmesidir.

## Parametreler

- **Genişlik**, **Yükseklik** — ızgaranın boyutu; 3×3'ten toplam 54 kareye kadar.
- **Zorluk** — _Kolay_ bulmacalar bir seferde tek bir bakış çizgisi boyunca saymaya boyun
  eğer; _Normal_ olanlar bütün bir yolun izin verdiği kombinasyonları tartmanı gerektirir;
  _Çetrefilli_ bulmacalar bir tahmini denemeden bitirilemez.
`,Oe=e({default:()=>ke}),ke=`# Eşitsiz

Izgarayı doldur; her satır ve her sütun, 1'den ızgaranın boyutuna kadar her rakamı tam bir
kez içersin — bir Latin karesi — ve komşu kareler arasına çizilmiş işaretlere uyulsun.

**Eşitsiz** modunda işaretler büyüktür simgeleridir: \`>\` işaretinin açık tarafı büyük
rakama, sivri ucu küçük rakama bakar. Her komşu çiftinde işaret yoktur ve bulmaca ne kadar
zorsa işaret o kadar azdır.

**Komşu** modunda işaretler, iki rakamın tam bir farklı olduğu (3 ile 4 gibi) anlamına gelen
kısa çubuklardır. Burada her çubuk her zaman gösterilir, yani iki kare arasında çubuk
**olmaması** da bir ipucudur: o iki rakam kesinlikle ardışık değildir.

Bulmaca gazetelerde Futoshiki adıyla yayımlanır.

## Kontroller

Bir kuralı bozan rakamlar — bir satırda ya da sütunda bir tekrar ya da tutmayan bir işaret
— kırmızıyla gösterilir; kuralı bozan işaret de öyle. Her kare doldurulduğunda ve hiçbir şey
kırmızı olmadığında bulmaca tamamlanır.

### Fare ve dokunmatik

- Seçmek için bir kareye **sol tıkla**, sonra bir rakam yazmak için ekrandaki
  tuşları kullan. Tuş takımındaki **⌫** seçili kareyi yeniden temizler. Seçili kareye ikinci
  kez tıklamak seçimi kaldırır.
- Tuş takımındaki **✎** **kalem notlarını** açık tutar: seçtiğin şey bundan sonra kareyi
  cevaplamak yerine karedeki küçük bir olasılıklar listesine eklenir (ya da listeden
  çıkarılır). Bir kareyi doldurmak onun kalem notlarını siler.
- Bir kareyi doğrudan kalem notları için seçmek üzere ona **sağ tıkla**.
- Duraklatma menüsündeki **Notlar**, her boş kareyi senin elemen için olası bütün kalem notlarıyla doldurur; **İpucu** (Geri al'ın yanındaki ampul) da aynısını yapar ama basit akıl yürütmenin zaten elediklerini dışarıda bırakır.
- **Vurgula** (Geri al'ın yanındaki büyüteç) son tıkladığın karedeki rakamı içeren her kareyi, verilen rakamlar dahil, öne çıkarır ve o rakamı kalem notları arasında kalın gösterir. Kapatmak için yeniden bas.

### Klavye (Keyboard)

- Seçili kareyi doldurmak için **bir rakam yaz**; \`0\`, Space ya da Backspace onu temizler.
- Ok tuşları ızgarada bir imleç gezdirir; Enter imleci rakam yazma ile kalem notu alma
  arasında değiştirir.
- \`M\`, **Notlar** düğmesi, \`H\` **İpucu**, \`L\` de **Vurgula** düğmesidir.

## Parametreler

- **Mod** — Eşitsiz (büyüktür işaretleri) ya da Komşu (ardışık rakamlar arasında çubuklar).
- **Boyut** — satır ve sütun sayısı; 3'ten 9'a kadar.
- **Zorluk** — bulmacanın ne kadar akıl yürütme gerektirdiği. **Çok kolay** bulmacalarda işaretlere
  hiç gerek kalmaz: Eşitsiz modda hiç işaret yoktur ve bunlar düz Latin kareleridir; Komşu modda
  çubuklar çizilir ama verilen rakamlar tek başına yeter. **Kolay** bulmacalar yalnızca her işaretin
  doğrudan anlamını gerektirir; **Orta** olanlar kare kümelerini birlikte düşünmeni gerektirir;
  **Zor** olanlar konuma dayalı küme akıl yürütmesini ve zorlama zincirlerini ekler; **Aşırı zor**
  bulmacalar (özel ayarlar penceresinden seçilebilir) deneme yanılma gerektirebilir ama çözüm yine
  tektir.
`,Ae=e({default:()=>je}),je=`# Asi

Izgaranın her karesini ya siyaha ya beyaza boya. Bazı kareler ipucu olarak verilmiştir ve
değiştirilemez; geri kalanlar gri başlar ve doldurmak sana kalır. Bitirdiğinde üç şey doğru
olmalı:

- her satırda beyaz kadar siyah kare var;
- her sütunda beyaz kadar siyah kare var;
- bir satırda ya da sütunda art arda gelen hiçbir üç kare aynı renkte değil.

Hatalar kırmızıyla görünür: üç ya da daha fazla eşit kareden oluşan bir dizi kırmızı bir
çerçeve alır; satırında ya da sütununda o renkten zaten çok fazla olan bir karenin üzerinde
kırmızı bir **!** belirir. İsteğe bağlı "satır ve sütunlar birbirinden farklı" çeşidinde
hiçbir iki satır (ve hiçbir iki sütun) aynı deseni izleyemez; eşleşen çizgilerin üstü
kırmızıyla çizilir.

## Kontroller

İpucu kareleri — içinde küçük bir çerçeve çizili olanlar — değiştirilemez. **Çöz** bütün
ızgarayı doldurur. Her kare boyandığında ve hiçbir şey kırmızı görünmediğinde bulmaca biter.

### Fare ve dokunmatik

- Gri bir kareyi siyah yapmak için ona **tıkla**; beyaz için yeniden, temizlemek için bir
  kez daha tıkla.
- **Sağ tıklama** ters sırayla döner: beyaz, sonra siyah, sonra temiz.
- **Orta tıklama** bir kareyi doğrudan temizler.
- **Sil** (Geri al'ın yanındaki silgi düğmesi) açıkken bir tıklama kareyi boyamak yerine temizler. Boyamaya dönmek için yeniden bas.

### Klavye (Keyboard)

- **Ok tuşları** ızgarada bir imleç gezdirir.
- **Enter** imlecin altındaki kareyi bir tıklama gibi, **Space** de bir sağ tıklama gibi
  döndürür.
- **1** siyah, **0** (ya da **2**) beyaz yapar, **Backspace** de temizler.
- **E**, **Sil** düğmesidir.

## Parametreler

- Izgaranın **Genişlik** ve **Yükseklik** değerleri. İkisi de çift sayı ve en az 6 olmalı.
- **Satır ve sütunlar birbirinden farklı**: açıkken hiçbir iki satır aynı olamaz, hiçbir iki
  sütun da aynı olamaz (bir satır yine de bir sütunla eşleşebilir). Bu modda çok yüksek ya da
  çok geniş ızgaralar reddedilir, çünkü herkese yetecek kadar farklı çizgi yoktur.
- **Zorluk**: _Kolay_ bulmacalar yalnızca iki doğrudan gerekçe gerektirir — iki eşit kare
  yanlarındaki ya da aralarındaki kareyi öbür renge zorlar, bir renkten payını zaten almış
  bir çizgi de başka her yerde öbür rengi alır. _Normal_ bulmacalar, bir rengin son karesinin
  bir çizgide üçlü dizi oluşturmadan hâlâ nereye gidebileceği hakkında akıl yürütmeni de
  gerektirir. Her bulmacanın tam bir çözümü vardır.
`,Me=e({default:()=>Ne}),Ne=`# Dolaşık

Bir avuç nokta düz çizgilerle birbirine bağlanmış ve çizgiler birbirine dolanmış. Hiçbir iki
çizgi kesişmeyene kadar noktaları hareket ettir. Her bulmaca çözülebilir: bilgisayar grafiği
kesişmesiz bir yerleşimden kurdu, sonra noktaları bir çemberin üzerine karıştırdı.

O anda başka bir çizgiyi kesen çizgiler kırmızıyla çizilir, böylece sen çalıştıkça karmaşa
gözle görülür biçimde küçülür; hiç kırmızı kalmadığında bulmaca çözülmüştür. Çöz, her noktayı
bilgisayarın işe yaradığını bildiği bir yerleşime kaydırır.

## Kontroller

Geri al, Çöz dahil her hamleyi geri alır.

### Fare ve dokunmatik

- Bir noktayı **sürükle** ve istediğin yerde bırak. Tuttuğun nokta turuncuya, komşuları da
  maviye döner. Bir noktayı kenar boşluğuna bırakmak onu tahtanın kenarına koyar; tuvalin
  tamamen dışında bırakmak sürüklemeyi iptal eder.
- **Hizala** (Geri al'ın yanındaki ızgara düğmesi) bir hizalama ızgarasını açıp kapatır: bırakılan noktalar o zaman soluk noktalarla işaretli ızgara karelerinin merkezlerine oturur; çözüm de böyle yerleştirilir. Izgara açık olduğu sürece düğme yanık kalır.

### Klavye (Keyboard)

- **Ok tuşları** bir imleci o yöndeki noktaya götürür. **Enter** ya da **Space** noktayı
  alır; ardından ok tuşları onu taşır (her basışta bir karenin sekizde biri, Shift ile bütün
  bir kare, Ctrl ile tek bir adım), **Enter** ya da **Space** de onu bırakır.
- \`G\`, **Hizala** düğmesidir.

## Parametreler

- **Nokta sayısı**: grafiğin kaç noktası olduğu; en az 4. Daha çok nokta daha çok çizgi ve
  daha zor bir karmaşa demektir. Tahta nokta sayısıyla birlikte büyür, böylece onları yaymak
  için her zaman yer olur.
`,Pe=e({$dir:()=>`ltr`,$locale:()=>`tr`,$name:()=>q,default:()=>Fe,games:()=>Q,messages:()=>X,status:()=>Z,touchPhrases:()=>Y,tutorials:()=>$,ui:()=>J}),q=`Türkçe`,J=JSON.parse(`{"appName":"Puzzlebox","menu":{"title":"Puzzlebox","tagline":"Elle çizilmiş {n} mantık bulmacası. Birini seç ve oyna.","lockedNote":"Kendi başına bitirdiğin her bulmaca sana bir kredi kazandırır. Yeni bulmacaların kilidini açmak için kredilerini burada harca.","language":"Dil","stat":{"credits":{"one":"★ {n} kredi","other":"★ {n} kredi"},"unlocked":"{total} bulmacadan {n} tanesi açık","solved":"{n} çözüldü","tight":{"credits":"★ {n}","unlocked":"{n}/{total}","solved":"✓ {n}","achievements":"{n}/{total}"},"achievements":"{total} başarımdan {n} tanesi"},"search":{"placeholder":"Bulmaca ara","label":"Bulmacaları adına göre ara","clear":"Aramayı temizle","empty":"“{q}” adında bir bulmaca yok. Başka bir ad dene."},"hint":{"allOpen":"Her şey açık.","complete":"Koleksiyonun tamamının kilidini açtın!","spend":{"one":"Bir bulmacanın kilidini açmak için aşağıda kredi harca.","other":"Bulmacaların kilidini açmak için aşağıda kredi harca."},"earn":"Kredi kazanmak için herhangi bir bulmacayı kendi başına bitir."},"card":{"label":"{name}: {description}","labelLocked":"{name}: {description} (kilitli)","labelAlias":"{name} (diğer adıyla {alias}): {description}","labelLockedAlias":"{name} (diğer adıyla {alias}): {description} (kilitli)","solvedTag":"✓ ×{n} çözüldü","unlock":"Kilidi aç · 1 kredi","unlocked":"Kilit açıldı: {name}!"},"noCredit":"Kredi kazanmak için herhangi bir bulmacayı kendi başına çöz, sonra bunun kilidini açmak için geri gel.","surprise":"Şaşırt beni: rastgele bir bulmaca aç","privacy":{"note":"Puzzlebox, bulmacaları daha iyi hâle getirmek için nasıl oynandıklarını sayar — kimin oynadığını asla."},"continue":"Devam et","continueLabel":"{name} ile devam et","spend":"Harca"},"notFound":{"title":"Böyle bir bulmaca yok","body":"“{slug}” adında bir bulmacamız yok.","back":"Tüm bulmacalara dön"},"locked":"{name} hâlâ kilitli. Bir bulmaca bitirip kredi kazan, sonra kilidini aç.","pageTitle":"{name} · Puzzlebox","topbar":{"back":"Tüm bulmacalar","help":"Yardım","creditsTitle":"Krediler yeni bulmacaların kilidini açar. Kredi kazanmak için bir bulmacayı kendi başına bitir.","boardLabel":"Bulmaca tahtası: {name}"},"toolbar":{"type":"Tür","custom":"Özel…","new":"Yeni","newTitle":"Yeni oyun (N)","restart":"Baştan","restartTitle":"Bu bulmacaya baştan başla","undo":"Geri al","undoTitle":"Geri al (U, Ctrl+Z)","redo":"Yinele","redoTitle":"Yinele (R, Ctrl+Y)","hint":"İpucu","hintTitle":"Bir kareyi açığa çıkar ve oynamaya devam et. {n} ipucuna kadar yine kredi kazanırsın.","solve":"Çöz","solveTitle":"Çözümü göster (Ctrl+S)","gameId":"Paylaş","gameIdTitle":"Bu bulmacayı paylaş ya da sana gönderilen bir bulmacayı oyna","more":"Diğer","pause":"Duraklat","pauseTitle":"Duraklatma menüsü (Esc)","keypad":"Tuş takımı","keypadTitle":"Ekran tuşlarını göster","zoomOut":"−","zoomOutTitle":"Küçült","zoomIn":"+","zoomInTitle":"Büyüt","tapPlace":"Dokunuş: yerleştir","tapMark":"Dokunuş: işaretle","tapTitle":"Normal bir dokunuşun yaptığı iş","tapPlaceTitle":"Dokunuş yerleştirir, uzun dokunuş işaretler. Değiştirmek için dokun.","tapMarkTitle":"Dokunuş işaretler, uzun dokunuş yerleştirir. Değiştirmek için dokun."},"pause":{"title":"Duraklatıldı","resume":"Devam et"},"pager":{"label":"Sayfalar","prev":"Önceki sayfa","next":"Sonraki sayfa","page":"Sayfa {n}/{total}"},"badge":{"won":"Çözüldü!","lost":"Oyun bitti"},"stage":{"generating":"Yeni bulmaca hazırlanıyor…"},"endgame":{"won":"Bulmaca çözüldü!","lost":"Oyun bitti","credit":"★ +1 kredi — koleksiyondaki yeni bir bulmacanın kilidini açmaya yeter.","wonNote":"Sıradakine hazır mısın?","forfeitNote":"Bu bulmaca kredi kazandırmaz — çözüm oyun sırasında gösterildi.","lostNote":"Bu sefer olmadı. Bir daha denemek ister misin?","next":"Sonraki bulmaca","retry":"Tekrar dene","dismiss":"Kapat ve tahtaya bak","time":"Süre","moves":"Hamle","hints":"İpucu","best":"En iyi {time}","newBest":"Yeni rekor!","stars":"3 yıldızdan {n}","stepUp":"{preset} dene →"},"keypad":{"label":"Tuş takımı","clear":"Sil","clearTitle":"Seçili kareyi temizle (Backspace)","pencil":"Kalem notları","pencilOnTitle":"Tuşlar kalem notu olarak girilir. Yeniden cevap yazmak için dokun.","pencilOffTitle":"Sonraki tuşları kalem notu olarak girmek için bunu açık bırak"},"drawer":{"title":"Nasıl oynanır: {name}","close":"Kapat","replay":"▶ Eğitimi yeniden oynat","achievements":"Başarımlar ({n}/{total})"},"dialog":{"ok":"Tamam","cancel":"İptal","customTitle":"{name}: özel","gameIdTitle":"Bu bulmacayı paylaş","shareLead":"Tam olarak bu bulmacayı başka birine gönder.","copyLink":"Bağlantıyı kopyala","linkCopied":"Bağlantı kopyalandı","codes":"Bulmaca kodları","byDescription":"Tanıma göre","bySeed":"Rastgele tohuma göre","enterLabel":"Belirli bir bulmacayı oyna: bir kod yapıştır","play":"Oyna","copy":"Kopyala","copied":"Kopyalandı","link":"Bağlantı","linkTitle":"Tam olarak bu bulmacayı açan bir bağlantı kopyala","linkPrompt":"Bu bulmacanın bağlantısı","hintAd":{"title":"Bir ipucu daha?","body":"{n} ücretsiz ipucunu kullandın. Bir tane daha alırsan bu bulmaca kredi kazandırmaz — krediyi korumak için kısa bir reklam izlemezsen.","watch":"Reklam izle, krediyi koru","anyway":"Yine de ipucunu al"},"badCode":"Bu kod bir {name} bulmacası açmıyor. Tamamının kopyalandığından emin ol."},"toast":{"creditEarned":"+1 kredi","tutorialComplete":"Eğitim tamamlandı. İşte yepyeni bir bulmaca; kredi kazanmak için onu kendi başına bitir.","tutorialCompleteBack":"Eğitim tamamlandı. Bulmacana geri dönüyorsun.","tutorialSkipped":"Eğitim atlandı. İstediğin zaman Yardım'dan yeniden oynatabilirsin.","tapModeMark":"Dokunuş işaretler. Ana eylem için uzun dokun.","tapModePlace":"Ana eylem için dokun. İşaretlemek için uzun dokun.","touchHint":"Oynamak için dokun, ikinci eylem için uzun dokun. İlk yuvarlak düğme ikisinin yerini değiştirir.","hintNone":"Bu tahtada açığa çıkarılacak bir şey kalmadı.","hintNoCredit":"Bu, {n} ipucundan fazla; bu yüzden bu bulmaca kredi kazandırmayacak — ama tahtayı bitirmek yine senin elinde.","hintAdFailed":"Reklam bulunamadı, o yüzden hiçbir şey değişmedi — istersen ipucu hâlâ orada.","stuck":"Takıldın mı? İpucu bir kareyi açar ve bulmaca yine de kredisini verir."},"tutorial":{"label":"Eğitim: {name}","step":"Adım {n}/{total}","next":"İleri","done":"Bitti","skipStep":"Adımı atla","skipTutorial":"Eğitimi atla","nice":"Harika!","offScript":"O değil: hamle geri alındı, böylece adımlar tahtayla hâlâ uyuşuyor. Bu adımın istediğini dene.","offScriptRead":"Bu geri alındı, böylece adımlar tahtayla hâlâ uyuşuyor. Önce bu adımı oku.","pointer":{"drag":"sürükle","rightClick":"sağ tıkla","rightDrag":"sağ tuşla sürükle","middleClick":"orta tıkla","longPress":"uzun dokun","longPressDrag":"uzun basıp sürükle","twoFingerTap":"iki parmakla dokun"}},"splash":{"tagline":"Elle çizilmiş bulmacalar, oynamaya hazır","skip":"Geç"},"help":{"keypad":{"heading":"Tuş takımı","introTouch":"Ekrandaki tuşlar senin yerine yazar","introPointer":"Araç çubuğundaki **Tuş takımı**, ekrana senin yerine yazan tuşlar ekler","select":": önce tahtada bir kare seç, sonra bir tuşa bas.","clear":"- **⌫** seçili kareyi yeniden boşaltır.","pencil":"- **✎** kalem notlarını açık tutar; böylece tuşlar cevap yerine küçük notlar olarak\\n  girilir. Cevaplara dönmek için ona yeniden bas."}},"achievements":{"title":"Başarımlar","summary":"{total} başarımdan {n} tanesi kazanıldı","unlocked":"Başarım açıldı","secret":{"name":"Gizli başarım","description":"Keşfetmek için oynamaya devam et."},"earnedOn":"Kazanıldı: {date}","progress":"{n}/{goal}","collection":"Koleksiyon","tier":{"bronze":"Bronz","silver":"Gümüş","gold":"Altın"},"meta":{"first-solve":{"name":"İlk adımlar","description":"İlk bulmacanı kendi başına çöz."},"solves-10":{"name":"Isınma turu","description":"10 bulmaca çöz."},"solves-50":{"name":"Bulmaca tutkunu","description":"50 bulmaca çöz."},"solves-100":{"name":"Yüzbaşı","description":"100 bulmaca çöz."},"solves-250":{"name":"Büyükusta","description":"250 bulmaca çöz."},"specialist":{"name":"Uzmanlık alanı","description":"Aynı oyunda 10 bulmaca çöz."},"variety-3":{"name":"Tadımlık","description":"3 farklı oyunda birer bulmaca çöz."},"variety-10":{"name":"Her telden","description":"10 farklı oyunda birer bulmaca çöz."},"variety-all":{"name":"Bütün kutu","description":"Koleksiyondaki her oyunda birer bulmaca çöz."},"unlock-first":{"name":"Yeni raf","description":"İlk oyununu bir krediyle aç."},"unlock-15":{"name":"Büyüyen koleksiyon","description":"15 oyunu açık hâle getir."},"unlock-25":{"name":"Anahtarlık","description":"25 oyunu açık hâle getir."},"unlock-all":{"name":"Maymuncuk","description":"Koleksiyondaki her oyunu aç."},"hardest-1":{"name":"Meydan okumaya hazır","description":"Bir oyunun en zor ayarında bir bulmaca çöz."},"hardest-10":{"name":"Zirve avcısı","description":"10 farklı oyunun en zor ayarını çöz."},"hardest-all":{"name":"Sarsılmaz","description":"Her oyunun en zor ayarını çöz."},"pure-1":{"name":"Tertemiz","description":"Bir bulmacayı geri almadan ve ipucu kullanmadan çöz."},"pure-25":{"name":"Sağlam el","description":"25 bulmacayı geri almadan ve ipucu kullanmadan çöz."},"quick-draw":{"name":"Silahşor","description":"Bir bulmacayı 30 saniye veya daha kısa sürede çöz."},"marathon":{"name":"Maraton","description":"Bir bulmacayı üzerinde 20 dakikadan fazla uğraştıktan sonra çöz."},"comeback":{"name":"Asla pes etme","description":"Bir bulmacayı kaybet, sonra geri dönüp çöz."},"second-thoughts":{"name":"Bir daha düşündüm de","description":"100 kez geri al ve yine de bulmacayı çöz."},"a-little-help":{"name":"Ufak bir yardım","description":"Bir ipucu al."},"oops":{"name":"Hay aksi","description":"Bir bulmacayı kaybet."},"night-owl":{"name":"Gece kuşu","description":"Gece yarısı ile sabah 5 arasında bir bulmaca çöz."},"on-a-roll":{"name":"Seri hâlinde","description":"Tek oturumda 5 bulmaca çöz."},"days-3":{"name":"Müdavim","description":"3 farklı günde oyna."},"days-7":{"name":"Sadık oyuncu","description":"7 farklı günde oyna."},"days-30":{"name":"Evin demirbaşı","description":"30 farklı günde oyna."},"quick-study":{"name":"Çabuk kavrayan","description":"Bir eğitimi sonuna kadar oyna."},"scholar":{"name":"Âlim","description":"10 farklı eğitimi sonuna kadar oyna."},"collector-25":{"name":"Rozet koleksiyoncusu","description":"25 başarım kazan."},"collector-60":{"name":"Kupa dolabı","description":"60 başarım kazan."},"legend":{"name":"Bulmaca efsanesi","description":"Diğer bütün başarımları kazan."}},"andMore":{"one":"{n} başarım açıldı","other":"{n} başarım açıldı"}},"welcome":{"title":"İlk bulmacanı seç","subtitle":{"one":"Başlamak için {n} bulmaca. Onu seç ve oyna.","other":"Başlamak için {n} bulmaca. Birini seç ve oyna."},"more":{"one":"…ve kilidi açılacak {n} tane daha","other":"…ve kilidi açılacak {n} tane daha"},"how":"Çözdüğün her bulmaca sana bir kredi kazandırır, her kredi de yeni bir oyunun kilidini açar."},"gamepad":{"connected":"Oyun kumandası bağlandı"},"settings":{"title":"Ayarlar","done":"Tamam","sound":"Ses","volume":"Ses düzeyi","reduceMotion":"Hareketi azalt","vibration":"Titreşim","statistics":"Oyun istatistikleri","on":"Açık","off":"Kapalı","portalMuted":"Site sesi kapattı."}}`),Y=[[`herhangi bir tuşla`,`normal ya da uzun dokunuşla`],[`sağ tuşla`,`uzun basıp`],[`sağ tıklayarak`,`uzun dokunarak`],[`sağ tıklamayla`,`uzun dokunuşla`],[`sağ tıklamak`,`uzun dokunmak`],[`sağ tıklama`,`uzun dokunuş`],[`sağ tıkla`,`uzun dokun`],[`orta tıklamadır`,`iki parmak dokunuşudur`],[`orta tıklamayla`,`iki parmak dokunuşuyla`],[`orta tıklamak`,`iki parmakla dokunmak`],[`orta tıklama`,`iki parmak dokunuşu`],[`orta tıkla`,`iki parmakla dokun`],[`sol tıklayarak`,`dokunarak`],[`sol tıklama`,`dokunuş`],[`sol tıkla`,`dokun`],[`çift tıkla`,`çift dokun`],[`tıklamadıkça`,`dokunmadıkça`],[`tıklamandan`,`dokunuşundan`],[`tıklamanla`,`dokunuşunla`],[`tıklamana`,`dokunuşuna`],[`tıklamayla`,`dokunuşla`],[`tıklamayı`,`dokunuşu`],[`tıklaması`,`dokunuşu`],[`tıklamalar`,`dokunuşlar`],[`tıklamak`,`dokunmak`],[`tıklama`,`dokunuş`],[`tıkladığında`,`dokunduğunda`],[`tıkladığın`,`dokunduğun`],[`tıklayabilirsin`,`dokunabilirsin`],[`tıklayarak`,`dokunarak`],[`tıklayınca`,`dokununca`],[`tıklarsan`,`dokunursan`],[`tıklayıp`,`dokunup`],[`tıkla`,`dokun`]],X=JSON.parse(`{"4-way rotational symmetry needs a square grid":"4 yönlü dönme simetrisi kare bir ızgara gerektirir","A 2×2 grid is too small to make a puzzle from":"2×2'lik bir ızgara bulmaca yapmak için çok küçük","A cube rolling along a single row can never turn over all six faces":"Tek bir satır boyunca yuvarlanan bir küp altı yüzünün hepsini asla çeviremez","A given piece leaves the grid":"Verilen bir parça ızgaranın dışına çıkıyor","A jigsaw block is too big":"Bir yapboz bloğu çok büyük","A jigsaw block is too small":"Bir yapboz bloğu çok küçük","A killer cage is too big":"Bir killer kafesi çok büyük","A killer cage is too small":"Bir killer kafesi çok küçük","A wrapping puzzle needs a width and height of at least 3 to have a unique solution":"Sarmalı bir bulmacanın tek çözümü olması için genişliği ve yüksekliği en az 3 olmalı","All parameters must be whole numbers":"Bütün parametreler tam sayı olmalı","Already solved":"Zaten çözüldü","An edge cannot join a point to itself":"Bir kenar bir noktayı kendisine bağlayamaz","Angle offset out of bounds.":"Açı kayması sınırların dışında.","At least one grid dimension must be greater than zero":"Izgara boyutlarından en az biri sıfırdan büyük olmalı","At least one of width and height for this grid type must be at least {0}":"Bu ızgara türünde genişlik ya da yükseklikten en az biri en az {0} olmalı","At least one of width and height must be greater than one":"Genişlik ya da yükseklikten en az biri birden büyük olmalı","Bad character in grid description":"Izgara tanımında hatalı karakter","Bad mine layout in game description":"Oyun tanımında hatalı mayın yerleşimi","Badly formatted move limit after grid description":"Izgara tanımından sonraki hamle sınırı hatalı biçimlendirilmiş","Barrier probability must be a number between 0 and 1":"Duvar olasılığı 0 ile 1 arasında bir sayı olmalı","Barrier probability must be between 0 and 1":"Duvar olasılığı 0 ile 1 arasında olmalı","Blue cells are placed where some faces could never reach them":"Mavi kareler, bazı yüzlerin asla ulaşamayacağı yerlere konmuş","Both dimensions must be at least 2":"İki boyut da en az 2 olmalı","Both grid dimensions must be at least one":"İki ızgara boyutu da en az bir olmalı","Bridges per direction must be between 1 and {0}":"Yön başına köprü sayısı 1 ile {0} arasında olmalı","Can't create {0}×{1} puzzles":"{0}×{1} boyutunda bulmaca oluşturulamaz","Clue did not provide 2 direction flags":"İpucu 2 yön bayrağı vermedi","Clue is larger than the number of sides of its face":"İpucu, yüzünün kenar sayısından büyük","Clue is missing its number":"İpucunun sayısı eksik","Clue number out of range":"İpucu sayısı aralığın dışında","Colour out of range":"Renk aralığın dışında","Colour out of range in grid description":"Izgara tanımında renk aralığın dışında","Colours, pegs and guesses must be whole numbers":"Renk, pim ve tahmin sayıları tam sayı olmalı","Column counts inconsistent":"Sütun sayıları tutarsız","Could not four-colour the map":"Harita dört renkle boyanamadı","Count is larger than the line it describes":"Sayı, tanımladığı çizgiden büyük","Description contains a duplicate number":"Tanımda yinelenen bir sayı var","Description contains a number larger than the grid":"Tanımda ızgaradan büyük bir sayı var","Description contains a number out of range":"Tanımda aralık dışı bir sayı var","Description contains a number that is too large":"Tanımda çok büyük bir sayı var","Description contains a repeated number":"Tanımda tekrar eden bir sayı var","Description contains an unexpected character":"Tanımda beklenmeyen bir karakter var","Description contains invalid characters":"Tanımda geçersiz karakterler var","Description is corrupted":"Tanım bozuk","Description is longer than expected":"Tanım beklenenden uzun","Description is shorter than expected":"Tanım beklenenden kısa","Description is too long":"Tanım çok uzun","Description is too short":"Tanım çok kısa","Description marks cells beyond the grid as blue":"Tanım ızgaranın dışındaki kareleri mavi olarak işaretliyor","Description may only contain P, H and O":"Tanım yalnızca P, H ve O içerebilir","Description must be a comma-separated list of numbers":"Tanım, virgülle ayrılmış bir sayı listesi olmalı","Description must be exactly {0} characters":"Tanım tam olarak {0} karakter olmalı","Description must be hex digits, a comma and a cell number":"Tanım onaltılık rakamlar, bir virgül ve bir kare numarasından oluşmalı","Description must be numbers each followed by an orientation letter (u, l, d or r)":"Tanım, her birinin ardından bir yön harfi (u, l, d ya da r) gelen sayılardan oluşmalı","Description must be two hex strings separated by a comma":"Tanım, virgülle ayrılmış iki onaltılık dizi olmalı","Description must be {0} hexadecimal digits":"Tanım {0} onaltılık rakamdan oluşmalı","Description must contain at least one edge":"Tanımda en az bir kenar olmalı","Description must contain at least one peg":"Tanımda en az bir taş olmalı","Description must contain at least two islands":"Tanımda en az iki ada olmalı","Description must contain each number from 1 to {0} exactly once":"Tanımda 1'den {0} sayısına kadar her sayı tam bir kez bulunmalı","Description must contain each row number from 1 to {0} exactly {1} times":"Tanımda 1'den {0} sayısına kadar her satır numarası tam {1} kez bulunmalı","Description must contain only digits":"Tanım yalnızca rakam içermeli","Description must contain only numbers":"Tanım yalnızca sayı içermeli","Description must contain {0} numbers":"Tanımda {0} sayı bulunmalı","Description must contain {0} tiles":"Tanımda {0} karo bulunmalı","Description must mark exactly {0} cells blue":"Tanım tam olarak {0} kareyi mavi olarak işaretlemeli","Description must start with {0} hex digits":"Tanım {0} onaltılık rakamla başlamalı","Description places two islands next to each other":"Tanım iki adayı yan yana koyuyor","Description repeats a colour although duplicates are disallowed":"Tekrara izin verilmediği hâlde tanımda bir renk tekrar ediyor","Description too long":"Tanım çok uzun","Description too long for board size":"Tanım tahta boyutu için çok uzun","Description too short":"Tanım çok kısa","Description too short for board size":"Tanım tahta boyutu için çok kısa","Digits in a {0}×{1} puzzle cannot exceed {2}":"{0}×{1} boyutundaki bir bulmacada rakamlar {2} sayısını geçemez","Disallowing duplicates requires at least as many colours as pegs":"Tekrarı yasaklamak için en az pim sayısı kadar renk gerekir","Domino descriptions inconsistent":"Domino tanımları tutarsız","Dots too close together":"Noktalar birbirine çok yakın","Duplicate edge in game description":"Oyun tanımında yinelenen kenar","Edge list defines the wrong number of regions":"Kenar listesi yanlış sayıda bölge tanımlıyor","Entrance square must contain a piece leaving the left edge":"Giriş karesinde sol kenardan çıkan bir parça bulunmalı","Every killer cage must have exactly one sum":"Her killer kafesinin tam bir toplamı olmalı","Exit square must contain a piece leaving the bottom edge":"Çıkış karesinde alt kenardan çıkan bir parça bulunmalı","Expansion factor must be a number":"Genişleme katsayısı bir sayı olmalıdır","Expansion factor may not be negative":"Genişleme katsayısı negatif olamaz","Expansion factor must be from 0 to 100":"Genişleme katsayısı 0 ile 100 arasında olmalı","Expected ',' after block structure description":"Blok yapısından sonra ',' bekleniyordu","Expected ',' after grid description":"Izgara tanımından sonra ',' bekleniyordu","Expected a list of edges like 0-1,1-2 in game description":"Oyun tanımında 0-1,1-2 gibi bir kenar listesi bekleniyordu","Expected comma before clue list":"İpucu listesinden önce virgül bekleniyordu","Expected jigsaw block structure in game description":"Oyun tanımında yapboz blok yapısı bekleniyordu","Expected killer cage structure in game description":"Oyun tanımında killer kafes yapısı bekleniyordu","Expected killer clue grid in game description":"Oyun tanımında killer ipucu ızgarası bekleniyordu","Expected slashes between clues":"İpuçları arasında eğik çizgi bekleniyordu","Expecting number in game description":"Oyun tanımında sayı bekleniyor","Extra moves must not be negative":"Ek hamle sayısı negatif olmamalı","Extreme puzzles with more than {0} symbols take too long to generate":"{0} simgeden fazlasını içeren aşırı zor bulmacaların üretilmesi çok uzun sürer","Faulty game description":"Hatalı oyun tanımı","Flags contradicting each other":"Bayraklar birbiriyle çelişiyor","Flags go off grid":"Bayraklar ızgaranın dışına taşıyor","Game ID must include parameters":"Oyun kimliği parametreleri içermeli","Game description contained unexpected characters":"Oyun tanımında beklenmeyen karakterler vardı","Game description contains an unexpected character":"Oyun tanımında beklenmeyen bir karakter var","Game description contains no dots":"Oyun tanımında hiç nokta yok","Game description contains unexpected characters":"Oyun tanımında beklenmeyen karakterler var","Game description has {0} balls; expected {1}":"Oyun tanımında {0} top var; beklenen: {1}","Game description is corrupted":"Oyun tanımı bozuk","Game description is longer than expected":"Oyun tanımı beklenenden uzun","Game description is shorter than expected":"Oyun tanımı beklenenden kısa","Game description is the wrong length":"Oyun tanımının uzunluğu yanlış","Game description is too long":"Oyun tanımı çok uzun","Game description is too short":"Oyun tanımı çok kısa","Game description is wrong length":"Oyun tanımının uzunluğu yanlış","Game description longer than expected":"Oyun tanımı beklenenden uzun","Game description must be hexadecimal":"Oyun tanımı onaltılık olmalı","Game description shorter than expected":"Oyun tanımı beklenenden kısa","Game description too long":"Oyun tanımı çok uzun","Game is already solved":"Oyun zaten çözüldü","Grid area must be at least six squares":"Izgara alanı en az altı kare olmalı","Grid area must be greater than 1":"Izgara alanı 1'den büyük olmalı","Grid area must be greater than one":"Izgara alanı birden büyük olmalı","Grid description is the wrong length or not hexadecimal":"Izgara tanımının uzunluğu yanlış ya da tanım onaltılık değil","Grid description strings not used with this grid type":"Bu ızgara türü ızgara açıklaması kullanmaz","Grid dimensions cannot be negative":"Izgara boyutları negatif olamaz","Grid dimensions must be at most {0}":"Izgara boyutları en fazla {0} olmalı","Grid dimensions must be whole numbers":"Izgara boyutları tam sayı olmalı","Grid is too big":"Izgara çok büyük","Grid must contain at least two squares":"Izgarada en az iki kare olmalı","Grid size must be between 3 and 9":"Izgara boyutu 3 ile 9 arasında olmalı","Grid size must be between {0} and {1}":"Izgara boyutu {0} ile {1} arasında olmalı","Hard and Extreme puzzles are limited to a maximum number of {0}":"Zor ve Aşırı zor bulmacalarda en büyük sayı en fazla {0} olabilir","Height must be at least 3":"Yükseklik en az 3 olmalı","Height must be at least five":"Yükseklik en az beş olmalı","Height must be at least one":"Yükseklik en az bir olmalı","Height must be at least the rotating block size":"Yükseklik en az dönen blok boyutu kadar olmalı","Height must be at least two":"Yükseklik en az iki olmalı","Illegal grid type":"Geçersiz ızgara türü","Incorrect number balance in game description":"Oyun tanımında sayı dengesi hatalı","Initial x-coordinate was out of range":"Başlangıç x koordinatı aralığın dışındaydı","Initial y-coordinate was out of range":"Başlangıç y koordinatı aralığın dışındaydı","Internal error: solution is badly formatted":"İç hata: çözüm hatalı biçimlendirilmiş","Invalid character in block structure specification":"Blok yapısı belirtiminde geçersiz karakter","Invalid character in game description":"Oyun tanımında geçersiz karakter","Invalid character in grid specification":"Izgara belirtiminde geçersiz karakter","Invalid character in number list":"Sayı listesinde geçersiz karakter","Invalid characters in game description":"Oyun tanımında geçersiz karakterler","Invalid format grid description string.":"Izgara tanım dizesinin biçimi geçersiz.","Invalid parameters: {0}":"Geçersiz parametreler: {0}","Invalid syntax in game description":"Oyun tanımında geçersiz sözdizimi","Jigsaw puzzles with more than {0} symbols take too long to generate":"{0} simgeden fazlasını içeren yapboz bulmacaların üretilmesi çok uzun sürer","Killer puzzle dimensions must be smaller than 10":"Killer bulmacalarının boyutları 10'dan küçük olmalı","Malformed pending game description":"Bekleyen oyun tanımı bozuk","Matrix description is the wrong length or not hexadecimal":"Matris tanımının uzunluğu yanlış ya da tanım onaltılık değil","Maximum face number must be a whole number":"En büyük yüz sayısı tam sayı olmalı","Maximum face number must be at least one":"En büyük yüz sayısı en az bir olmalı","Maximum face number must be at most {0}":"En büyük yüz sayısı en fazla {0} olmalı","Maximum of 9 colours":"En fazla 9 renk","Medium puzzles need more than one bridge per direction, or loops disallowed":"Orta bulmacalar için yön başına birden fazla köprü gerekir ya da döngüler yasaklanmalı","Mines solver opened a mine: inconsistent knowledge":"Mayın çözücüsü bir mayın açtı: tutarsız bilgi","Minimum number of balls may not be greater than maximum":"En az top sayısı en fazla top sayısından büyük olamaz","Missing grid description string.":"Izgara tanım dizesi eksik.","Missing separator":"Ayırıcı eksik","Monster numbers do not match grid spaces":"Canavar sayıları ızgaradaki boş yerlerle uyuşmuyor","More than one starting square specified":"Birden fazla başlangıç karesi belirtilmiş","Multiple solutions exist for this puzzle":"Bu bulmacanın birden fazla çözümü var","Must have at least five regions":"En az beş bölge olmalı","Must have at least one guess":"En az bir tahmin hakkı olmalı","Must have between {0} and {1} colours":"Renk sayısı {0} ile {1} arasında olmalı","No game set up to solve":"Çözülecek bir oyun kurulmadı","No gems specified":"Hiç mücevher belirtilmemiş","No solution exists for this position":"Bu konum için çözüm yok","No solution exists for this puzzle":"Bu bulmacanın çözümü yok","No solution found":"Çözüm bulunamadı","No starting square specified":"Başlangıç karesi belirtilmemiş","Not enough data in block structure specification":"Blok yapısı belirtiminde yeterli veri yok","Not enough data in grid description":"Izgara tanımında yeterli veri yok","Not enough data to fill grid":"Izgarayı dolduracak kadar veri yok","Not enough grid space to place all blue faces":"Bütün mavi yüzleri yerleştirecek kadar ızgara alanı yok","Not enough jigsaw blocks":"Yeterince yapboz bloğu yok","Not enough killer cages":"Yeterince killer kafesi yok","Not enough numbers given after grid specification":"Izgara belirtiminden sonra yeterince sayı verilmemiş","Not enough space to place the solid on an empty cell":"Cismi boş bir kareye yerleştirecek kadar yer yok","Number of colours must be at least three":"Renk sayısı en az üç olmalı","Number of colours must be at least two":"Renk sayısı en az iki olmalı","Number of points must be a whole number":"Nokta sayısı tam sayı olmalı","Number of points must be at least {0}":"Nokta sayısı en az {0} olmalı","Number of points must be at most {0}":"Nokta sayısı en fazla {0} olmalı","Number of shuffling moves cannot be negative":"Karıştırma hamlesi sayısı negatif olamaz","Number of shuffling moves must be a whole number":"Karıştırma hamlesi sayısı tam sayı olmalı","Number of shuffling moves must be at most 10000":"Karıştırma hamlesi sayısı en fazla 10000 olmalı","Number of shuffling moves must be at most {0}":"Karıştırma hamlesi sayısı en fazla {0} olmalı","Number out of range in game description":"Oyun tanımında aralık dışı sayı","Number too large":"Sayı çok büyük","Out-of-range number in game description":"Oyun tanımında aralık dışı sayı","Out-of-range number in grid description":"Izgara tanımında aralık dışı sayı","Parameters must be whole numbers":"Parametreler tam sayı olmalı","Patch coordinates do not identify a usable grid fragment":"Yama koordinatları kullanılabilir bir ızgara parçası belirtmiyor","Patch offset out of bounds.":"Yama kayması sınırların dışında.","Percentage of black squares must be between 5% and 100%":"Siyah karelerin oranı %5 ile %100 arasında olmalı","Percentage of islands must be from 1% to 30%":"Adaların oranı %1 ile %30 arasında olmalı","Puzzle is inconsistent":"Bulmaca tutarsız","Puzzle is too large":"Bulmaca çok büyük","Puzzle is too long for unique-rows mode":"Bulmaca, farklı satırlar modu için çok uzun","Puzzle is too tall for unique-rows mode":"Bulmaca, farklı satırlar modu için çok yüksek","Puzzle is unsolvable":"Bulmaca çözülemez","Puzzle must have one entrance and one exit":"Bulmacanın bir girişi ve bir çıkışı olmalı","Puzzles with more than {0} symbols take too long to generate":"{0} simgeden fazlasını içeren bulmacaların üretilmesi çok uzun sürer","Random seed must not be empty":"Rastgele tohum boş olmamalı","Rotating block size must be at least two":"Dönen blok boyutu en az iki olmalı","Row counts inconsistent":"Satır sayıları tutarsız","Rows of blocks must be at least 1":"Blok satırları en az 1 olmalı","Scoring system not recognised":"Puanlama sistemi tanınmadı","Size and difficulty must be whole numbers":"Boyut ve zorluk tam sayı olmalı","Size must be at least 5 for Adjacent puzzles of this difficulty":"Bu zorluktaki Komşu bulmacalarında boyut en az 5 olmalı","Size must be between {0} and {1}":"Boyut {0} ile {1} arasında olmalı","Solution not known for this puzzle":"Bu bulmacanın çözümü bilinmiyor","Solve operation failed":"Çözme işlemi başarısız oldu","Solve operation produced an invalid move":"Çözme işlemi geçersiz bir hamle üretti","Solver could not finish this grid":"Çözücü bu ızgarayı bitiremedi","Solving algorithm cannot complete this puzzle":"Çözme algoritması bu bulmacayı tamamlayamıyor","Starting cell is outside the grid":"Başlangıç karesi ızgaranın dışında","Subtraction and division blocks must have area 2":"Çıkarma ve bölme bloklarının alanı 2 olmalı","That grid has too many faces to generate":"Bu ızgarada üretilemeyecek kadar çok yüz var","The Cross board is only available at {0}×{1}":"Artı tahtası yalnızca {0}×{1} boyutunda kullanılabilir","The Octagon board is only available at {0}×{1}":"Sekizgen tahtası yalnızca {0}×{1} boyutunda kullanılabilir","The ball has hit a mine; undo that move first":"Top bir mayına çarptı; önce o hamleyi geri al","The grid can have at most {0} squares":"Izgarada en fazla {0} kare olabilir","The grid may have at most {0} squares":"Izgarada en fazla {0} kare olabilir","The initial square contains a mine":"Başlangıç karesinde bir mayın var","The solid cannot start on a blue cell":"Cisim mavi bir karede başlayamaz","The solution has already been revealed":"Çözüm zaten gösterildi","There must be at least one ball":"En az bir top olmalı","There must be at least one mine":"En az bir mayın olmalı","This arrangement cannot be solved":"Bu dizilim çözülemez","This game does not support the Solve operation":"Bu oyun Çöz işlemini desteklemiyor","This puzzle has no solution":"Bu bulmacanın çözümü yok","This puzzle instance contains a contradiction":"Bu bulmaca örneğinde bir çelişki var","This puzzle is not self-consistent":"Bu bulmaca kendi içinde tutarlı değil","Too few clues for block structure":"Blok yapısı için çok az ipucu","Too few clues for grid size":"Izgara boyutu için çok az ipucu","Too little data in clue list":"İpucu listesinde çok az veri","Too little data in edge list":"Kenar listesinde çok az veri","Too many balls to fit in the grid":"Izgaraya sığmayacak kadar çok top","Too many clues for block structure":"Blok yapısı için çok fazla ipucu","Too many clues for grid size":"Izgara boyutu için çok fazla ipucu","Too many colours (at most {0})":"Çok fazla renk (en fazla {0})","Too many colours makes given grid size impossible":"Bu kadar çok renkle verilen ızgara boyutu imkânsız olur","Too many guesses (at most {0})":"Çok fazla tahmin hakkı (en fazla {0})","Too many jigsaw blocks":"Çok fazla yapboz bloğu","Too many killer cages":"Çok fazla killer kafesi","Too many mines for grid size":"Izgara boyutu için çok fazla mayın","Too many pegs per guess (at most {0})":"Tahmin başına çok fazla pim (en fazla {0})","Too many regions to fit in grid":"Izgaraya sığmayacak kadar çok bölge","Too much data in block structure specification":"Blok yapısı belirtiminde çok fazla veri","Too much data in clue list":"İpucu listesinde çok fazla veri","Too much data in edge list":"Kenar listesinde çok fazla veri","Too much data to fill grid":"Izgarayı dolduracak veriden fazlası var","Too much data to fit in grid":"Izgaraya sığmayacak kadar çok veri","Trivial solutions are uninteresting":"Basit çözümler ilgi çekici değil","Unable to build a grid for these parameters":"Bu parametrelerle bir ızgara oluşturulamadı","Unable to build this grid":"Bu ızgara oluşturulamadı","Unable to find a solution for this puzzle":"Bu bulmaca için çözüm bulunamadı","Unable to find a solution from this position":"Bu konumdan bir çözüm bulunamadı","Unable to find a solution to this puzzle":"Bu bulmacanın çözümü bulunamadı","Unable to find a unique solution for this puzzle":"Bu bulmaca için tek bir çözüm bulunamadı","Unable to generate a puzzle of this size":"Bu boyutta bir bulmaca üretilemedi","Unable to generate a puzzle with these parameters":"Bu parametrelerle bir bulmaca üretilemedi","Unable to solve this puzzle":"Bu bulmaca çözülemedi","Unable to support more than {0} distinct symbols":"{0} farklı simgeden fazlası desteklenemiyor","Unable to work out any more of this puzzle":"Bu bulmacanın daha fazlası çıkarılamıyor","Unexpected additional character at end of game description":"Oyun tanımının sonunda beklenmeyen ek karakter","Unexpected additional data at end of game description":"Oyun tanımının sonunda beklenmeyen ek veri","Unexpected character '{0}' in description":"Tanımda beklenmeyen karakter: '{0}'","Unexpected character in clue list":"İpucu listesinde beklenmeyen karakter","Unexpected character in edge list":"Kenar listesinde beklenmeyen karakter","Unexpected data at end of game description":"Oyun tanımının sonunda beklenmeyen veri","Unknown board type":"Bilinmeyen tahta türü","Unknown character in description":"Tanımda bilinmeyen karakter","Unknown difficulty":"Bilinmeyen zorluk","Unknown difficulty level":"Bilinmeyen zorluk seviyesi","Unknown difficulty rating":"Bilinmeyen zorluk derecesi","Unknown shape type":"Bilinmeyen şekil türü","Unknown symmetry":"Bilinmeyen simetri","Unknown symmetry type":"Bilinmeyen simetri türü","Unrecognised character in game description":"Oyun tanımında tanınmayan karakter","Unrecognised characters in game description":"Oyun tanımında tanınmayan karakterler","Unrecognised clue type":"Tanınmayan ipucu türü","Unrecognised grid description.":"Tanınmayan ızgara açıklaması.","Unrecognised solid type":"Tanınmayan cisim türü","Width and height cannot both be two":"Genişlik ve yükseklik ikisi birden iki olamaz","Width and height for this grid type must both be at least {0}":"Bu ızgara türünde genişlik ve yükseklik en az {0} olmalı","Width and height must be at least two":"Genişlik ve yükseklik en az iki olmalı","Width and height must be at least {0}":"Genişlik ve yükseklik en az {0} olmalı","Width and height must be at most twelve":"Genişlik ve yükseklik en fazla on iki olmalı","Width and height must be at most {0}":"Genişlik ve yükseklik en fazla {0} olmalı","Width and height must be at most {0} to generate a puzzle":"Bulmaca üretmek için genişlik ve yükseklik en fazla {0} olmalı","Width and height must be positive":"Genişlik ve yükseklik pozitif olmalı","Width and height must be whole numbers":"Genişlik ve yükseklik tam sayı olmalı","Width and height must both be at least 3":"Genişlik ve yükseklik en az 3 olmalı","Width and height must both be at least four":"Genişlik ve yükseklik en az dört olmalı","Width and height must both be at least one":"Genişlik ve yükseklik en az bir olmalı","Width and height must both be at least two":"Genişlik ve yükseklik en az iki olmalı","Width and height must both be even":"Genişlik ve yükseklik çift sayı olmalı","Width and height must both be greater than three":"Genişlik ve yükseklik üçten büyük olmalı","Width and height must both be greater than two":"Genişlik ve yükseklik ikiden büyük olmalı","Width and height must both be greater than zero":"Genişlik ve yükseklik sıfırdan büyük olmalı","Width and height must both be positive":"Genişlik ve yükseklik pozitif olmalı","With three colours, a solvable grid may have at most {0} squares":"Üç renkle çözülebilir bir ızgara en fazla {0} kare içerebilir","Width must be at least 3":"Genişlik en az 3 olmalı","Width must be at least five":"Genişlik en az beş olmalı","Width must be at least one":"Genişlik en az bir olmalı","Width must be at least the rotating block size":"Genişlik en az dönen blok boyutu kadar olmalı","Width must be at least two":"Genişlik en az iki olmalı","Width, height and ball counts must be whole numbers":"Genişlik, yükseklik ve top sayıları tam sayı olmalı","Width, height and difficulty must be whole numbers":"Genişlik, yükseklik ve zorluk tam sayı olmalı","Width, height and number of colours must be whole numbers":"Genişlik, yükseklik ve renk sayısı tam sayı olmalı","Width, height, block size and move count must be whole numbers":"Genişlik, yükseklik, blok boyutu ve hamle sayısı tam sayı olmalı","X puzzles need at least four symbols":"X bulmacaları en az dört simge gerektirir","X-diagonal jigsaw puzzles with more than {0} symbols take too long to generate":"{0} simgeden fazlasını içeren X-köşegenli yapboz bulmacaların üretilmesi çok uzun sürer","You have hit a mine; undo that move first":"Bir mayına bastın; önce o hamleyi geri al","a cell may be a number position for only one rectangle":"bir kare yalnızca tek bir dikdörtgenin sayı konumu olabilir","at least one column contains more numbers than will fit":"en az bir sütunda sığabilecekten fazla sayı var","at least one row contains more numbers than will fit":"en az bir satırda sığabilecekten fazla sayı var","cells are not adjacent":"kareler bitişik değil","domino layout: no path between singletons":"domino yerleşimi: tekil kareler arasında yol yok","domino layout: stranded square cannot be paired":"domino yerleşimi: yalnız kalan kare eşlenemiyor","dot touches the outside twice":"nokta dışarıya iki kez değiyor","dot with fewer than two edges":"ikiden az kenarı olan nokta","edge does not follow its face":"kenar kendi yüzünü izlemiyor","edge shared by three faces":"üç yüzün paylaştığı kenar","expected CxR or Nj":"CxR ya da Nj bekleniyordu","expected WxH":"WxH bekleniyordu","expected WxHnN":"WxHnN bekleniyordu","expected a grid size":"bir ızgara boyutu bekleniyordu","expected a maximum number":"bir en büyük sayı bekleniyordu","expected a number of points":"bir nokta sayısı bekleniyordu","expected a solid letter followed by WxH":"ardından WxH gelen bir cisim harfi bekleniyordu","expected something like c6p4g10Bm":"c6p4g10Bm gibi bir şey bekleniyordu","expected w<W>h<H>m<MIN>M<MAX>":"w<W>h<H>m<MIN>M<MAX> bekleniyordu","generateKeen: solver disagrees with the square":"generateKeen: çözücü kareyle uyuşmuyor","grid inconsistency while walking round a face":"bir yüzün çevresinde dolaşırken ızgara tutarsızlığı","inconsistent clues while assembling":"birleştirme sırasında tutarsız ipuçları","inconsistent distance field":"tutarsız uzaklık alanı","inconsistent face classes":"tutarsız yüz sınıfları","latin rectangle could not be extended":"Latin dikdörtgeni genişletilemedi","latinGenerate: no extension found":"latinGenerate: genişletme bulunamadı","latinSquare: rectangle could not be extended":"latinSquare: dikdörtgen genişletilemedi","line too long for solver":"çizgi çözücü için çok uzun","no clue left to place":"yerleştirilecek ipucu kalmadı","no such laser: {0}":"böyle bir lazer yok: {0}","rolled solid does not fit its destination":"yuvarlanan cisim hedefine uymuyor","shown":"gösterildi","too few row/column specifications":"çok az satır/sütun belirtimi","too many row/column specifications":"çok fazla satır/sütun belirtimi","unrecognised character in game description":"oyun tanımında tanınmayan karakter","yes!":"doğru!","9×9 Extreme puzzles take too long to generate; try 8×8 or Expert":"9×9 Aşırı zor bulmacaların üretilmesi çok uzun sürer; 8×8 ya da Uzman dene"}`),Z={moves:`Hamle: {n}`,movesCompleted:{one:`{n} hamlede tamamlandı`,other:`{n} hamlede tamamlandı`},movesSinceSolve:`Otomatik çözümden sonraki hamle: {n}`,completedMoves:`Tamamlandı! Hamle: {n}`,solvedByComputer:`Bilgisayar tarafından çözüldü`,completed:`Tamamlandı!`,completedPrefix:`Tamamlandı! `,autoSolved:`Otomatik çözüldü.`,autoSolvedPrefix:`Otomatik çözüldü. `,autoSolverUsedPrefix:`Otomatik çözücü kullanıldı. `,failedPrefix:`Hamle kalmadı. `,dead:`Bir mayına bastın.`,target:` (hedef {n})`},Q=JSON.parse(`{"blackbox":{"name":"Kara Kutu","description":"Kutuya lazer ateşle, nereden çıktıklarına bak ve gizli topları bul.","preset":{"5x5_3_balls":"5×5, 3 top","8x8_5_balls":"8×8, 5 top","8x8_3_6_balls":"8×8, 3-6 top","10x10_5_balls":"10×10, 5 top","10x10_4_10_balls":"10×10, 4-10 top"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"no_of_balls":{"name":"Top sayısı"}},"achievement":{"sparing_shots":{"name":"Tutumlu atışlar","description":"Girişlerin en fazla yarısından lazer ateşleyerek bütün topları bul."},"pinpoint":{"name":"Tam isabet","description":"8×8 veya daha büyük bir kutuda, top başına en fazla üç lazer ateşleyerek bütün topları bul."},"shot_in_the_dark":{"name":"Karanlıkta atış","description":"Tek bir lazer ateşlemeden toplarını kontrol ettir ve yanıl."}},"status":{"correct":"DOĞRU!","wrong":{"one":"{wrong} yanlış ve {n} kaçırılmış top.","other":"{wrong} yanlış ve {n} kaçırılmış top."},"marked":"İşaretli top: {n} / {range}  ·  Ateşlenen lazer: {fired}","tooMany":"  ·  {n} top fazladan işaretli.","check":"  ·  Kontrol etmek için köşedeki düğmeye tıkla."}},"bridges":{"name":"Köprüler","alsoKnownAs":"Hashiwokakero, Hashi","description":"Adaları köprülerle bağla; her sayı tutsun, hiçbir köprü kesişmesin.","preset":{"7x7_easy":"7×7 Kolay","7x7_medium":"7×7 Orta","7x7_hard":"7×7 Zor","10x10_easy":"10×10 Kolay","10x10_medium":"10×10 Orta","10x10_hard":"10×10 Zor","15x15_easy":"15×15 Kolay","15x15_medium":"15×15 Orta","15x15_hard":"15×15 Zor","10x10_medium_no_loops":"10×10 Orta, döngüsüz"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"difficulty":{"name":"Zorluk","choice":{"easy":"Kolay","medium":"Orta","hard":"Zor"}},"allow_loops":{"name":"Döngülere izin ver"},"max_bridges_per_direction":{"name":"Yön başına en fazla köprü","choice":{"1":"1","2":"2","3":"3","4":"4"}},"of_island_squares":{"name":"Ada karelerinin oranı (%)","choice":{"5":"%5","10":"%10","15":"%15","20":"%20","25":"%25","30":"%30"}},"expansion_factor":{"name":"Genişleme katsayısı (%)","choice":{"0":"%0","10":"%10","20":"%20","30":"%30","40":"%40","50":"%50","60":"%60","70":"%70","80":"%80","90":"%90","100":"%100"}}},"action":{"e":{"label":"Sil","title":"Bir adadan sürükleyerek o yöndeki köprülerini kaldır (E)"},"g":{"label":"Kılavuzlar","title":"Köprü kurulabilecek her yerde soluk bir çizgi göster ya da gizle (G)"}},"achievement":{"no_markers":{"name":"Açık sular","description":"10×10 veya daha büyük bir Köprüler bulmacasını tek bir \\"burada köprü yok\\" işareti koymadan çöz."},"sure_footing":{"name":"Sağlam adımlar","description":"10×10 veya daha büyük Zor bir Köprüler bulmacasını köprü kaldırmadan ve Geri al kullanmadan çöz."}}},"cube":{"name":"Küp","description":"Bir cismi ızgarada yuvarla ve yüzleriyle bütün mavi kareleri topla.","preset":{"cube":"Küp","tetrahedron":"Dörtyüzlü","octahedron":"Sekizyüzlü","icosahedron":"Yirmiyüzlü"},"config":{"type_of_solid":{"name":"Cisim türü","choice":{"tetrahedron":"Dörtyüzlü","cube":"Küp","octahedron":"Sekizyüzlü","icosahedron":"Yirmiyüzlü"}},"width_top":{"name":"Genişlik / üst"},"height_bottom":{"name":"Yükseklik / alt"}},"achievement":{"short_haul":{"name":"Kısa yol","description":"Küp'ü en fazla yirmi yuvarlamada bütün yüzleri mavi olacak şekilde bitir."},"octahedron_ace":{"name":"Sekiz yüz, bir çırpıda","description":"Sekizyüzlü'yü en fazla otuz yuvarlamada bütün yüzleri mavi olacak şekilde bitir."},"scenic_route":{"name":"Büyük tur","description":"Bütün yüzler mavi olmadan önce cismi en az iki yüz kez yuvarla."}}},"dominosa":{"name":"Dominosa","description":"Karıştırılmış domino takımının sayı ızgarasında nerede durduğunu bul.","preset":{"up_to_double_3":"Çift 3'e kadar","up_to_double_4":"Çift 4'e kadar","up_to_double_5":"Çift 5'e kadar","up_to_double_6":"Çift 6'ya kadar","up_to_double_7":"Çift 7'ye kadar","up_to_double_8":"Çift 8'e kadar","up_to_double_9":"Çift 9'a kadar"},"config":{"maximum_number_on_dominoes":{"name":"Dominolardaki en büyük sayı"},"difficulty":{"name":"Zorluk","choice":{"very_easy":"Çok kolay","easy":"Kolay","hard":"Zor","extreme":"Aşırı zor","ambiguous":"Belirsiz"}}},"achievement":{"no_lines":{"name":"Kaleme gerek yok","description":"Çift 6'ya kadar veya daha büyük bir takımı tek bir çizgi çizmeden çöz."},"one_click_each":{"name":"Her birine bir tıklama","description":"Çift 6'ya kadar veya daha büyük bir takımı domino başına bir tıklamayla ve Geri al kullanmadan çöz."},"doubles_first":{"name":"Önce çiftler","description":"Takımdaki bütün çiftleri başka herhangi bir dominodan önce yerleştir."}}},"fifteen":{"name":"On Beş","alsoKnownAs":"15 bulmacası, kaydırmalı bulmaca","description":"Karoları kaydırarak sıraya diz.","preset":{"3x3":"3×3","4x4":"4×4","5x5":"5×5"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"}},"achievement":{"short_shuffle":{"name":"Kısa karıştırma","description":"4×4'ü 100 veya daha az hamlede sıraya diz."},"five_flyer":{"name":"5×5 şimşeği","description":"5×5'i üç dakikadan kısa sürede sıraya diz."},"scenic_route":{"name":"Manzaralı yol","description":"3×3'ü sıraya dizmek için 300'den fazla hamle harca."}}},"filling":{"name":"Doldurma","alsoKnownAs":"Fillomino","description":"Izgarayı doldur; aynı rakamlardan oluşan her grup tam o rakam kadar kare olsun.","preset":{"9x7":"9×7","13x9":"13×9","17x13":"17×13"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"}},"action":{"f":{"label":"Doldur","title":"Bir rakamdan sürükleyerek onu geçtiğin her kareye yaz (F)"}},"achievement":{"in_ink":{"name":"Mürekkeple yazılmış","description":"Bir Doldurma bulmacasını hiçbir rakamı değiştirmeden ya da silmeden ve Geri al kullanmadan çöz."},"one_stroke":{"name":"Her biri tek seferde","description":"13×9 veya daha büyük bir Doldurma bulmacasını her rakam grubunu tek hamlede yazarak çöz."}}},"flip":{"name":"Çevir","alsoKnownAs":"Lights Out","description":"Bütün kareleri yak; her basış çevresindeki kareleri de çevirir.","preset":{"3x3_crosses":"3×3 Artılar","4x4_crosses":"4×4 Artılar","5x5_crosses":"5×5 Artılar","3x3_random":"3×3 Rastgele","4x4_random":"4×4 Rastgele","5x5_random":"5×5 Rastgele"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"shape_type":{"name":"Şekil türü","choice":{"crosses":"Artılar","random":"Rastgele"}}},"achievement":{"press_once":{"name":"Tek basış","description":"4×4 veya daha büyük bir tahtayı hiçbir kareye iki kez basmadan yak."},"fewest_presses":{"name":"En az çaba","description":"5×5'lik bir tahtayı mümkün olan en az basışla yak."}}},"flood":{"name":"Sel","alsoKnownAs":"Flood It","description":"Izgarayı köşeden başlayarak boya ve hamle sınırı dolmadan hepsini tek renk yap.","preset":{"12x12_easy":"12×12 Kolay","12x12_medium":"12×12 Orta","12x12_hard":"12×12 Zor","16x16_medium":"16×16 Orta","16x16_hard":"16×16 Zor","12x12_3_colours":"12×12, 3 renk","12x12_4_colours":"12×12, 4 renk"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"colours":{"name":"Renkler"},"extra_moves_permitted":{"name":"İzin verilen ek hamle"}},"achievement":{"spare_moves":{"name":"Yedek hamleler","description":"Izgarayı en az üç hamle artırarak sele boğ."},"beat_the_solver":{"name":"Makineyi yen","description":"Izgarayı bilgisayarın kendi çözümünden daha az hamlede sele boğ."},"one_colour_short":{"name":"Bir renk eksik","description":"Izgarada yalnızca iki renk kalmışken hamlelerin bitsin."}},"status":{"moves":"{n} / {limit} hamle"}},"galaxies":{"name":"Galaksiler","alsoKnownAs":"Spiral Galaxies, Tentai Show","description":"Izgarayı bölgelere ayır; her bölge içindeki tek noktaya göre simetrik olsun.","preset":{"7x7_medium":"7×7 Orta","7x7_extreme":"7×7 Aşırı zor","10x10_medium":"10×10 Orta","15x15_medium":"15×15 Orta"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"difficulty":{"name":"Zorluk","choice":{"medium":"Orta","extreme":"Aşırı zor"}}},"achievement":{"no_arrows":{"name":"Oksuz","description":"10×10 veya daha büyük bir Galaksiler bulmacasını tek bir ok sürüklemeden çöz."},"steady_hand":{"name":"Sabit yıldızlar","description":"10×10 veya daha büyük bir Galaksiler bulmacasını duvar kaldırmadan ve Geri al kullanmadan çöz."}}},"guess":{"name":"Tahmin","alsoKnownAs":"Mastermind","description":"Tahminlerindeki işaretlere bakarak gizli renkli pim dizisini bul.","preset":{"standard":"Standart","super":"Süper"},"config":{"colours":{"name":"Renkler"},"pegs_per_guess":{"name":"Tahmin başına pim"},"guesses":{"name":"Tahmin hakkı"},"allow_blanks":{"name":"Boşluğa izin ver"},"allow_duplicates":{"name":"Tekrara izin ver"}},"action":{"k":{"label":"Tut","title":"Sırandaki bir pime tıklayarak onu bir sonraki tahmine taşı (K)"},"l":{"label":"Harfler","title":"Pimleri harflerle etiketle (L)"}},"achievement":{"five_guesses":{"name":"Şifre kırıcı","description":"Gizli sırayı beş veya daha az tahminde bul."},"super_sleuth":{"name":"Süper dedektif","description":"Beş pimli Süper gizli sırayı altı veya daha az tahminde bul."},"so_near":{"name":"Kıl payı","description":"Biri hariç bütün pimler doğru yerdeyken tahmin hakkın bitsin."}},"status":{"revealed":"Çözüm gösterildi","solved":{"one":"{n} tahminde çözüldü","other":"{n} tahminde çözüldü"},"outOfGuesses":"Tahmin hakkın bitti: çözüm gösterildi","guessN":"Tahmin {n}/{total}"}},"inertia":{"name":"Eylemsizlik","description":"Bir topu ızgarada kaydır, mayınlara çarpmadan bütün mücevherleri topla.","preset":{"10x8":"10×8","15x12":"15×12","20x16":"20×16"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"}},"achievement":{"hat_trick":{"name":"Üçü bir arada","description":"Topun tek bir yuvarlanışıyla üç veya daha fazla mücevher topla."},"shortcut":{"name":"Kestirme","description":"15×12 veya daha büyük bir tahtadaki bütün mücevherleri Çöz'den daha az yuvarlanışla topla."},"last_gem_mine":{"name":"Pirus zaferi","description":"En son mücevheri aldığın yuvarlanışla bir mayına çarp."}},"status":{"gems":"Mücevher: {n}","deaths":" · Ölüm: {n}"}},"keen":{"name":"Keen","alsoKnownAs":"KenKen, Calcudoku","description":"Latin karesini doldur; her kafes kendi aritmetik ipucunu tutsun.","preset":{"4x4_easy":"4×4 Kolay","5x5_easy":"5×5 Kolay","5x5_easy_x_only":"5×5 Kolay, yalnızca ×","6x6_easy":"6×6 Kolay","6x6_medium":"6×6 Orta","6x6_medium_x_only":"6×6 Orta, yalnızca ×","6x6_hard":"6×6 Zor","6x6_expert":"6×6 Uzman","6x6_extreme":"6×6 Aşırı zor","9x9_medium":"9×9 Orta"},"config":{"grid_size":{"name":"Izgara boyutu"},"difficulty":{"name":"Zorluk","choice":{"easy":"Kolay","medium":"Orta","hard":"Zor","expert":"Uzman","extreme":"Aşırı zor"}},"multiplication_only":{"name":"Yalnızca çarpma"}},"action":{"m":{"label":"Notlar","title":"Her boş kareye bütün olasılıkları kalemle not al (M)"},"l":{"label":"Vurgula","title":"Son dokunduğun rakamı içeren her kareyi öne çıkar (L)"}},"achievement":{"no_pencil":{"name":"Zihinden hesap","description":"6×6 veya daha büyük bir Keen bulmacasını tek bir kalem notu yazmadan çöz."},"products_only":{"name":"Saf çarpım","description":"6×6 Orta bir Keen bulmacasını yalnızca çarpmayla çöz."}}},"lightup":{"name":"Aydınlat","alsoKnownAs":"Akari","description":"Ampulleri yerleştir; her kare aydınlansın ve hiçbir ampul başka bir ampulü aydınlatmasın.","preset":{"7x7_easy":"7×7 Kolay","7x7_medium":"7×7 Orta","7x7_hard":"7×7 Zor","10x10_easy":"10×10 Kolay","10x10_medium":"10×10 Orta","10x10_hard":"10×10 Zor","14x14_easy":"14×14 Kolay","14x14_medium":"14×14 Orta","14x14_hard":"14×14 Zor"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"of_black_squares":{"name":"Siyah karelerin oranı (%)"},"symmetry":{"name":"Simetri","choice":{"none":"Yok","2_way_mirror":"2 yönlü ayna","2_way_rotational":"2 yönlü dönme","4_way_mirror":"4 yönlü ayna","4_way_rotational":"4 yönlü dönme"}},"difficulty":{"name":"Zorluk","choice":{"easy":"Kolay","medium":"Orta","hard":"Zor"}}},"action":{"x":{"label":"Çarpı","title":"Tıklamalar ampul yerine çarpı koyar (X)"}},"achievement":{"no_crosses":{"name":"Yalnızca ışıklar","description":"10×10 veya daha büyük bir Aydınlat bulmacasını tek bir çarpı koymadan çöz."},"no_takebacks":{"name":"Parlak fikir","description":"Zor bir Aydınlat bulmacasını hiç ampul kaldırmadan çöz."}}},"loopy":{"name":"Döngü","alsoKnownAs":"Slitherlink","description":"Tek bir kapalı döngü çiz; her sayı çevresindeki çizgileri saysın.","preset":{"7x7_squares_easy":"7×7 Kareler Kolay","10x10_squares_easy":"10×10 Kareler Kolay","7x7_squares_medium":"7×7 Kareler Orta","10x10_squares_medium":"10×10 Kareler Orta","7x7_squares_expert":"7×7 Kareler Uzman","10x10_squares_expert":"10×10 Kareler Uzman","10x10_triangular_expert":"10×10 Üçgenler Uzman","12x10_honeycomb_expert":"12×10 Petek Uzman","7x7_snub_square_expert":"7×7 Kırpık Kare Uzman","9x9_cairo_expert":"9×9 Kahire Uzman","5x4_great_hexagonal_expert":"5×4 Büyük Altıgen Uzman","7x7_octagonal_expert":"7×7 Sekizgen Uzman","5x5_kites_expert":"5×5 Uçurtmalar Uzman","5x5_floret_expert":"5×5 Çiçek Uzman","5x4_dodecagonal_expert":"5×4 Onikigen Uzman","5x4_great_dodecagonal_expert":"5×4 Büyük Onikigen Uzman","10x10_penrose_kite_dart_expert":"10×10 Penrose (uçurtma/ok) Uzman","10x10_penrose_rhombs_expert":"10×10 Penrose (eşkenar dörtgen) Uzman"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"grid_type":{"name":"Izgara türü","choice":{"squares":"Kareler","triangular":"Üçgenler","honeycomb":"Petek","snub_square":"Kırpık Kare","cairo":"Kahire","great_hexagonal":"Büyük Altıgen","octagonal":"Sekizgen","kites":"Uçurtmalar","floret":"Çiçek","dodecagonal":"Onikigen","great_dodecagonal":"Büyük Onikigen","penrose_kite_dart":"Penrose (uçurtma/ok)","penrose_rhombs":"Penrose (eşkenar dörtgen)"}},"difficulty":{"name":"Zorluk","choice":{"easy":"Kolay","medium":"Orta","hard":"Zor","expert":"Uzman"}}},"action":{"x":{"label":"Çarpı","title":"Tıklamalar çizgi çizmek yerine kenarları çarpıyla eler (X)"}},"achievement":{"off_grid":{"name":"Kare dışı","description":"Bir Döngü bulmacasını kareler dışında herhangi bir döşemede çöz."},"no_crosses":{"name":"Yalnızca döngü","description":"10×10 bir Döngü bulmacasını tek bir kenarı çarpıyla elemeden çöz."},"aperiodic":{"name":"Periyotsuz","description":"Penrose bir Döngü bulmacasını çizdiğin hiçbir çizgiyi kaldırmadan çöz."}}},"magnets":{"name":"Mıknatıslar","description":"Dominolara mıknatıs ve boşluk yerleştir; kutup sayıları tutsun.","preset":{"6x5_easy":"6×5 Kolay","6x5_hard":"6×5 Zor","6x5_hard_strip_clues":"6×5 Zor, eksik ipuçları","8x7_easy":"8×7 Kolay","8x7_hard":"8×7 Zor","8x7_hard_strip_clues":"8×7 Zor, eksik ipuçları","10x9_hard":"10×9 Zor","10x9_hard_strip_clues":"10×9 Zor, eksik ipuçları"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"difficulty":{"name":"Zorluk","choice":{"easy":"Kolay","hard":"Zor"}},"strip_clues":{"name":"İpuçlarını ayıkla"}},"action":{"b":{"label":"Boş","title":"Tıklamalar mıknatıs koymak yerine dominoları boş taş olarak işaretler (B)"}},"achievement":{"no_flips":{"name":"Doğru yönde","description":"8×7 veya daha büyük bir Mıknatıslar bulmacasını hiç mıknatıs ters çevirmeden çöz."},"stripped":{"name":"Çıplak kablolar","description":"Eksik ipuçlarıyla 10×9 Zor bir Mıknatıslar bulmacasını on dakikadan kısa sürede çöz."}}},"map":{"name":"Harita","description":"Haritayı dört renkle boya; komşu iki bölge aynı renkte olmasın.","preset":{"20x15_easy_30_regions":"20×15 Kolay, 30 bölge","20x15_medium_30_regions":"20×15 Orta, 30 bölge","20x15_hard_30_regions":"20×15 Zor, 30 bölge","20x15_extreme_30_regions":"20×15 Aşırı zor, 30 bölge","30x25_medium_75_regions":"30×25 Orta, 75 bölge","30x25_hard_75_regions":"30×25 Zor, 75 bölge"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"regions":{"name":"Bölgeler"},"difficulty":{"name":"Zorluk","choice":{"easy":"Kolay","medium":"Orta","hard":"Zor","extreme":"Aşırı zor"}}},"action":{"l":{"label":"Numaralar","title":"Her bölgede bir numara göster (L)"}},"achievement":{"no_dots":{"name":"Serbest el atlası","description":"Zor veya daha zor bir Harita bulmacasını tek bir kalem noktası koymadan çöz."},"steady_brush":{"name":"Sağlam fırça","description":"Aşırı zor bir Harita bulmacasını hiçbir bölgenin rengini değiştirmeden çöz."}}},"mines":{"name":"Mayın Tarlası","alsoKnownAs":"Minesweeper","description":"Mayın olmayan bütün kareleri aç; hiçbir zaman tahmin etmen gerekmez.","preset":{"9x9_beginner_10_mines":"9×9 Başlangıç, 10 mayın","9x9_35_mines":"9×9, 35 mayın","16x16_intermediate_40_mines":"16×16 Orta seviye, 40 mayın","16x16_99_mines":"16×16, 99 mayın","30x16_expert_99_mines":"30×16 Uzman, 99 mayın","30x16_170_mines":"30×16, 170 mayın"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"mines":{"name":"Mayınlar"},"ensure_solubility":{"name":"Çözülebilirliği garanti et"}},"achievement":{"no_flags":{"name":"Bayraksız","description":"Bir Mayın Tarlası oyununu tek bir bayrak dikmeden kazan."},"expert_sweep":{"name":"Bomba imha ekibi","description":"30×16 Uzman tahtasını beş dakikadan kısa sürede kazan."},"so_close":{"name":"Az kalsın","description":"Açılacak en fazla üç güvenli kare kalmışken bir mayına bas."}},"status":{"marked":"İşaretli: {n} / {total}","deaths":" · Ölüm: {n}"}},"net":{"name":"Ağ","alsoKnownAs":"NetWalk","description":"Karoları döndür; hepsi merkeze bağlansın.","preset":{"5x5":"5×5","7x7":"7×7","9x9":"9×9","11x11":"11×11","13x11":"13×11","5x5_wrapping":"5×5 sarmalı","7x7_wrapping":"7×7 sarmalı","9x9_wrapping":"9×9 sarmalı","11x11_wrapping":"11×11 sarmalı","13x11_wrapping":"13×11 sarmalı"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"walls_wrap_around":{"name":"Kenarlar karşıya sarar"},"barrier_probability":{"name":"Duvar olasılığı"},"ensure_unique_solution":{"name":"Tek çözümü garanti et"}},"action":{"k":{"label":"Kilit","title":"Karolara tıklayınca çevirmek yerine kilitle ya da kilidini aç (K)"},"j":{"label":"Karıştır","title":"Kilitli olmayan her karoyu rastgele döndür (J)"},"scroll_left":{"label":"←","title":"Görünümü sola kaydır (Shift+←)"},"scroll_up":{"label":"↑","title":"Görünümü yukarı kaydır (Shift+↑)"},"scroll_down":{"label":"↓","title":"Görünümü aşağı kaydır (Shift+↓)"},"scroll_right":{"label":"→","title":"Görünümü sağa kaydır (Shift+→)"}},"achievement":{"no_locks":{"name":"Kilit yok","description":"9×9 veya daha büyük bir Ağ bulmacasını tek bir karoyu kilitlemeden çöz."},"not_a_turn_wasted":{"name":"Boşa dönüş yok","description":"9×9 veya daha büyük bir Ağ bulmacasını hiçbir karoyu gerekenden fazla çevirmeden çöz."},"jumbled":{"name":"Karmakarışık","description":"Karıştır'a bas ve yine de bulmacayı çöz."}},"status":{"active":"Etkin: {n}/{total}"}},"netslide":{"name":"Ağ Kaydır","description":"Ağ parçalarından oluşan satır ve sütunları kaydır; her şey birbirine bağlansın.","preset":{"3x3_easy":"3×3 kolay","3x3_medium":"3×3 orta","3x3_hard":"3×3 zor","4x4_easy":"4×4 kolay","4x4_medium":"4×4 orta","4x4_hard":"4×4 zor","5x5_easy":"5×5 kolay","5x5_medium":"5×5 orta","5x5_hard":"5×5 zor"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"walls_wrap_around":{"name":"Kenarlar karşıya sarar"},"barrier_probability":{"name":"Duvar olasılığı"},"number_of_shuffling_moves":{"name":"Karıştırma hamlesi sayısı"}},"achievement":{"tidy_four":{"name":"Derli toplu kablolama","description":"4×4 bir Ağ Kaydır bulmacasını 18 veya daha az kaydırmada çöz."},"lean_five":{"name":"Hat ustası","description":"5×5 bir Ağ Kaydır bulmacasını 32 veya daha az kaydırmada çöz."},"big_switch":{"name":"Büyük şalter","description":"Ağın yarısından azı yanıyorken tek bir kaydırmayla bütün ağı yak."}},"status":{"active":" · Etkin: {n}/{total}"}},"pattern":{"name":"Desen","alsoKnownAs":"Nonogram, Picross, Griddlers","description":"Her satır ve sütun için verilen blok uzunluklarına göre ızgarayı doldur.","preset":{"10x10":"10×10","15x15":"15×15","20x20":"20×20","25x25":"25×25","30x30":"30×30"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"}},"action":{"e":{"label":"Sil","title":"Kareleri yeniden bilinmeyene çevirmek için tıkla ya da sürükle (E)"}},"achievement":{"no_dots":{"name":"Tek nokta yok","description":"15×15 veya daha büyük bir Desen bulmacasını tek bir nokta koymadan çöz."},"inked_in":{"name":"Mürekkeple işlenmiş","description":"20×20 veya daha büyük bir Desen bulmacasını hiç siyah kare temizlemeden çöz."}}},"pearl":{"name":"İnci","alsoKnownAs":"Masyu","description":"Beyaz incilerin içinden dümdüz geçen, siyah incilerde dönen tek bir kapalı döngü çiz.","preset":{"6x6_easy":"6×6 Kolay","6x6_tricky":"6×6 Çetrefilli","8x8_easy":"8×8 Kolay","8x8_tricky":"8×8 Çetrefilli","10x10_easy":"10×10 Kolay","10x10_tricky":"10×10 Çetrefilli","12x8_easy":"12×8 Kolay","12x8_tricky":"12×8 Çetrefilli"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"difficulty":{"name":"Zorluk","choice":{"easy":"Kolay","tricky":"Çetrefilli"}},"allow_unsoluble":{"name":"Çözümsüze izin ver"}},"action":{"x":{"label":"Çarpı","title":"Döngünün kullanamayacağı kenarları çarpıyla elemek için tıkla ya da sürükle (X)"}},"achievement":{"no_crosses":{"name":"İnci dizisi","description":"10×10 bir İnci bulmacasını tek bir çarpı koymadan çöz."},"one_stroke":{"name":"Tek çizgide","description":"8×8 veya daha büyük bir İnci bulmacasının bütün döngüsünü tek bir sürüklemede çiz."}}},"pegs":{"name":"Tek Taş","alsoKnownAs":"Peg solitaire","description":"Taşları birbirinin üzerinden atlat; geriye yalnızca bir taş kalsın.","preset":{"cross":"Artı","octagon":"Sekizgen","random_5x5":"Rastgele 5×5","random_7x7":"Rastgele 7×7","random_9x9":"Rastgele 9×9"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"board_type":{"name":"Tahta türü","choice":{"cross":"Artı","octagon":"Sekizgen","random":"Rastgele"}}},"achievement":{"dead_centre":{"name":"Tam ortada","description":"Artı tahtasını son taş ortadaki delikte kalacak şekilde bitir."},"hopscotch":{"name":"Seksek","description":"Bir taşın art arda dört kez atladığı bir Tek Taş oyunu kazan."},"pegged_out":{"name":"Çıkmaz","description":"Tahtada hâlâ on veya daha fazla taş varken takıl kal."}},"status":{"stuck":"Hamle kalmadı — {n} taş kaldı","playing":"Kalan taş: {n}  ·  Hamle: {moves}"}},"range":{"name":"Menzil","alsoKnownAs":"Kurodoko, Kuromasu","description":"Kareleri siyaha boya; her sayı, satırı ve sütunu boyunca tam o kadar beyaz kare görsün.","preset":{"9x6":"9×6","12x8":"12×8","13x9":"13×9","16x11":"16×11"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"}},"action":{"e":{"label":"Sil","title":"Siyah kareleri ve noktaları temizlemek için tıkla ya da sürükle (E)"}},"achievement":{"no_dots":{"name":"Saf karşıtlık","description":"13×9 veya daha büyük bir Menzil bulmacasını tek bir nokta koymadan çöz."},"quick_sight":{"name":"Keskin göz","description":"16×11 bir Menzil bulmacasını beş dakikadan kısa sürede çöz."}}},"rect":{"name":"Dikdörtgenler","alsoKnownAs":"Shikaku","description":"Izgarayı dikdörtgenlere böl; her birinde alanına eşit tek bir sayı olsun.","preset":{"7x7":"7×7","9x9":"9×9","11x11":"11×11","13x13":"13×13","15x15":"15×15","17x17":"17×17","19x19":"19×19"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"expansion_factor":{"name":"Genişleme katsayısı"},"ensure_unique_solution":{"name":"Tek çözümü garanti et"}},"action":{"e":{"label":"Sil","title":"İçindeki çizgileri temizlemek için bir alanın üzerinden sürükle ya da kaldırmak için bir çizgiye tıkla (E)"}},"achievement":{"clean_cuts":{"name":"Temiz kesimler","description":"11×11 veya daha büyük bir Dikdörtgenler bulmacasını içindeki sayı adedinden fazla hamle yapmadan çöz."},"quick_carver":{"name":"Hızlı oymacı","description":"19×19 bir Dikdörtgenler bulmacasını on dakikadan kısa sürede çöz."}},"status":{"drag":"{w}×{h} "}},"samegame":{"name":"Aynı Renk","alsoKnownAs":"SameGame, Clickomania","description":"Birbirine değen aynı renkli kare gruplarını kaldırarak tahtayı temizle.","preset":{"5x5_3_colours":"5×5, 3 renk","10x5_3_colours":"10×5, 3 renk","15x10_3_colours":"15×10, 3 renk","15x10_4_colours":"15×10, 4 renk","20x15_4_colours":"20×15, 4 renk"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"no_of_colours":{"name":"Renk sayısı"},"scoring_system":{"name":"Puanlama sistemi","choice":{"n_1_2":"(n-1)^2","n_2_2":"(n-2)^2"}},"ensure_solubility":{"name":"Çözülebilirliği garanti et"}},"achievement":{"avalanche":{"name":"Çığ","description":"Tek seferde 25 veya daha fazla karelik bir grubu kaldır, sonra tahtayı temizle."},"no_pairs":{"name":"İkililer yasak","description":"15×10 veya daha büyük bir tahtayı hiç ikili grup kaldırmadan temizle."},"last_one":{"name":"Son kare","description":"Tahtada yalnızca bir kare kalmışken takıl kal."}},"status":{"score":"Puan: {n}","complete":"Tahta temizlendi! {score}","stuck":"Hamle kalmadı. {score}","selected":"{score} · Seçili: {n} (+{points})"}},"signpost":{"name":"Yön Tabelası","description":"Kareleri numaralı tek bir yolda birleştir; her adım bir oku izlesin.","preset":{"4x4":"4×4","4x4_free_ends":"4×4, serbest uçlar","5x5":"5×5","5x5_free_ends":"5×5, serbest uçlar","6x6":"6×6","7x7":"7×7"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"start_and_end_in_corners":{"name":"Köşelerde başla ve bitir"}},"action":{"b":{"label":"Kopar","title":"Bütün zincirini dağıtmak için bir kareye tıkla (B)"}},"achievement":{"unbroken":{"name":"Kopmayan zincir","description":"Bir Yön Tabelası bulmacasını hiçbir bağlantıyı kaldırmadan ya da değiştirmeden çöz."},"in_order":{"name":"Dosdoğru","description":"6×6 veya daha büyük bir Yön Tabelası bulmacasını yolu 1'den yıldıza sırayla bağlayarak çöz."},"star_first":{"name":"Bir dilek tut","description":"İlk bağlantını yıldıza yap, sonra bulmacayı çöz."}}},"singles":{"name":"Tekler","alsoKnownAs":"Hitori","description":"Kareleri karart; hiçbir satır ya da sütunda bir sayı tekrarlanmasın ve ızgara bölünmesin.","preset":{"5x5_easy":"5×5 Kolay","5x5_tricky":"5×5 Çetrefilli","6x6_easy":"6×6 Kolay","6x6_tricky":"6×6 Çetrefilli","8x8_easy":"8×8 Kolay","8x8_tricky":"8×8 Çetrefilli","10x10_easy":"10×10 Kolay","10x10_tricky":"10×10 Çetrefilli","12x12_easy":"12×12 Kolay","12x12_tricky":"12×12 Çetrefilli"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"difficulty":{"name":"Zorluk","choice":{"easy":"Kolay","tricky":"Çetrefilli"}}},"achievement":{"no_circles":{"name":"Daireye gerek yok","description":"8×8 veya daha büyük bir Tekler bulmacasını tek bir sayıyı daire içine almadan çöz."},"sure_hand":{"name":"Emin el","description":"10×10 veya daha büyük bir Tekler bulmacasını karartılmış hiçbir kareyi geri getirmeden çöz."}}},"sixteen":{"name":"On Altı","description":"Satır ve sütunları bütün hâlinde ızgarada döndürerek karoları sıraya diz.","preset":{"3x3":"3×3","4x3":"4×3","4x4":"4×4","5x4":"5×4","5x5":"5×5"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"number_of_shuffling_moves":{"name":"Karıştırma hamlesi sayısı"}},"achievement":{"lean_slides":{"name":"Tutumlu kaydırıcı","description":"4×4'ü 100 veya daha az kaydırmada sıraya diz."},"five_in_200":{"name":"Büyük sıralayıcı","description":"5×5'i 200 veya daha az kaydırmada sıraya diz."},"round_the_doughnut":{"name":"Simidin etrafında","description":"Bir hattı başladığı yere dönene kadar tam tur kaydır."}}},"slant":{"name":"Eğik","alsoKnownAs":"Gokigen Naname","description":"Her kareye bir köşegen çiz; sayılar tutsun ve hiç döngü oluşmasın.","preset":{"5x5_easy":"5×5 Kolay","5x5_hard":"5×5 Zor","8x8_easy":"8×8 Kolay","8x8_hard":"8×8 Zor","12x10_easy":"12×10 Kolay","12x10_hard":"12×10 Zor"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"difficulty":{"name":"Zorluk","choice":{"easy":"Kolay","hard":"Zor"}}},"achievement":{"no_loops":{"name":"Döngüsüz","description":"8×8 veya daha büyük bir Eğik bulmacasını hiç döngü kapatmadan çöz."},"steady_hand":{"name":"İkinci düşünce yok","description":"12×10 bir Eğik bulmacasını geri dönüp hiçbir çizgiyi değiştirmeden çöz."}}},"solo":{"name":"Sudoku","alsoKnownAs":"Solo","description":"Izgarayı doldur; her satır, sütun ve blokta her rakam bir kez bulunsun.","preset":{"4x4_very_easy":"4×4 Çok kolay","6x6_easy":"6×6 Kolay","9x9_very_easy":"9×9 Çok kolay","9x9_easy":"9×9 Kolay","9x9_x_diagonal_easy":"9×9 X-Köşegen Kolay","9x9_medium":"9×9 Orta","9x9_hard":"9×9 Zor","9x9_x_diagonal_hard":"9×9 X-Köşegen Zor","9x9_expert":"9×9 Uzman","9x9_extreme":"9×9 Aşırı zor","9x9_killer":"9×9 Killer","9x9_jigsaw_easy":"9×9 Yapboz Kolay","9x9_jigsaw_x_diagonal_easy":"9×9 Yapboz X-Köşegen Kolay","9x9_jigsaw_hard":"9×9 Yapboz Zor","12x12_easy":"12×12 Kolay","16x16_easy":"16×16 Kolay"},"config":{"columns_of_sub_blocks":{"name":"Alt blok sütunları"},"rows_of_sub_blocks":{"name":"Alt blok satırları"},"x_require_every_number_in_each_main_diagonal":{"name":"\\"X\\" (her ana köşegende her sayı bulunsun)"},"jigsaw_irregularly_shaped_sub_blocks":{"name":"Yapboz (düzensiz şekilli alt bloklar)"},"killer_digit_sums":{"name":"Killer (rakam toplamları)"},"symmetry":{"name":"Simetri","choice":{"none":"Yok","2_way_rotation":"2 yönlü dönme","4_way_rotation":"4 yönlü dönme","2_way_mirror":"2 yönlü ayna","2_way_diagonal_mirror":"2 yönlü çapraz ayna","4_way_mirror":"4 yönlü ayna","4_way_diagonal_mirror":"4 yönlü çapraz ayna","8_way_mirror":"8 yönlü ayna"}},"difficulty":{"name":"Zorluk","choice":{"very_easy":"Çok kolay","easy":"Kolay","medium":"Orta","hard":"Zor","expert":"Uzman","extreme":"Aşırı zor"}}},"action":{"m":{"label":"Notlar","title":"Her boş kareye bütün olasılıkları kalemle not al (M)"},"l":{"label":"Vurgula","title":"Son dokunduğun rakamı içeren her kareyi öne çıkar (L)"}},"achievement":{"pen_only":{"name":"Kalem yok, tükenmez var","description":"9×9 Orta, Killer veya daha zor bir Sudoku'yu tek bir kalem notu yazmadan çöz."},"no_second_thoughts":{"name":"Tereddüt yok","description":"9×9 Uzman veya daha zor bir bulmacayı hiçbir rakamı değiştirmeden ya da silmeden çöz."}}},"tents":{"name":"Çadırlar","alsoKnownAs":"Tents and Trees","description":"Her ağacın yanına bir çadır kur; hiçbir iki çadır birbirine değmesin.","preset":{"8x8_easy":"8×8 Kolay","8x8_tricky":"8×8 Çetrefilli","10x10_easy":"10×10 Kolay","10x10_tricky":"10×10 Çetrefilli","15x15_easy":"15×15 Kolay","15x15_tricky":"15×15 Çetrefilli"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"difficulty":{"name":"Zorluk","choice":{"easy":"Kolay","tricky":"Çetrefilli"}}},"achievement":{"no_grass":{"name":"Kusursuz kamp","description":"10×10 veya daha büyük bir Çadırlar bulmacasını tek bir kareyi çimen olarak işaretlemeden çöz."},"no_strikes":{"name":"Mutlu kampçılar","description":"15×15 bir Çadırlar bulmacasını hiç çadır sökmeden çöz."}}},"towers":{"name":"Kuleler","alsoKnownAs":"Gökdelenler, Skyscrapers","description":"Kuleleri inşa et; kenardaki her ipucu oradan görünen kuleleri saysın.","preset":{"4x4_easy":"4×4 Kolay","5x5_easy":"5×5 Kolay","5x5_hard":"5×5 Zor","6x6_easy":"6×6 Kolay","6x6_hard":"6×6 Zor","6x6_expert":"6×6 Uzman","6x6_extreme":"6×6 Aşırı zor"},"config":{"grid_size":{"name":"Izgara boyutu"},"difficulty":{"name":"Zorluk","choice":{"easy":"Kolay","hard":"Zor","expert":"Uzman","extreme":"Aşırı zor"}}},"action":{"m":{"label":"Notlar","title":"Her boş kareye bütün olasılıkları kalemle not al (M)"},"l":{"label":"Vurgula","title":"Son dokunduğun rakamı içeren her kareyi öne çıkar (L)"}},"achievement":{"no_pencil":{"name":"Zihindeki silüet","description":"6×6 bir Kuleler bulmacasını tek bir kalem notu yazmadan çöz."},"clean_build":{"name":"Sağlam yapı","description":"6×6 Uzman veya Aşırı zor bir Kuleler bulmacasını geri dönüp hiçbir kuleyi değiştirmeden çöz."},"tallest_first":{"name":"Önce en yüksekler","description":"En yüksek kulelerin hepsini diğerlerinden önce kur, sonra ızgarayı çöz."}}},"tracks":{"name":"Raylar","alsoKnownAs":"Train Tracks","description":"Girişten çıkışa, sayılara uyan tek bir demiryolu döşe.","preset":{"8x8_easy":"8×8 Kolay","8x8_tricky":"8×8 Çetrefilli","10x8_easy":"10×8 Kolay","10x8_tricky":"10×8 Çetrefilli","10x10_easy":"10×10 Kolay","10x10_tricky":"10×10 Çetrefilli","15x10_easy":"15×10 Kolay","15x10_tricky":"15×10 Çetrefilli","15x15_easy":"15×15 Kolay","15x15_tricky":"15×15 Çetrefilli"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"difficulty":{"name":"Zorluk","choice":{"easy":"Kolay","tricky":"Çetrefilli"}},"disallow_consecutive_1_clues":{"name":"Art arda 1 ipuçlarını engelle"}},"action":{"e":{"label":"Sil","title":"Kareleri tamamen temizlemek için tıkla ya da sürükle (E)"}},"achievement":{"no_crosses":{"name":"Hiç çarpı yok","description":"10×10 veya daha büyük bir Raylar bulmacasını hiçbir kareyi ya da kenarı çarpıyla elemeden çöz."},"no_lift":{"name":"Tam yol ileri","description":"15×10 veya daha büyük bir Raylar bulmacasını döşediğin hiçbir rayı kaldırmadan çöz."},"long_haul":{"name":"Uzun yol","description":"Tek bir sürüklemede on kareden ray döşe, sonra hattı tamamla."}}},"twiddle":{"name":"Döndür","description":"Kare karo bloklarını döndürerek sayıları yeniden sıraya diz.","preset":{"3x3_rows_only":"3×3 yalnızca satırlar","3x3_normal":"3×3 normal","3x3_orientable":"3×3 yönlü","4x4_normal":"4×4 normal","4x4_orientable":"4×4 yönlü","4x4_rotating_3x3_blocks":"4×4, dönen 3×3 bloklar","5x5_rotating_3x3_blocks":"5×5, dönen 3×3 bloklar","6x6_rotating_4x4_blocks":"6×6, dönen 4×4 bloklar"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"rotating_block_size":{"name":"Dönen blok boyutu"},"one_number_per_row":{"name":"Satır başına tek sayı"},"orientation_matters":{"name":"Yön önemli"},"number_of_shuffling_moves":{"name":"Karıştırma hamlesi sayısı"}},"action":{"t":{"label":"Saat yönü","title":"Yönleri değiştir: tıklama saat yönünde, sağ tıklama saat yönünün tersine döndürür (T)"}},"achievement":{"few_turns":{"name":"Yirmi dönüş","description":"3×3 normal bir Döndür bulmacasını 20 veya daha az dönüşte çöz."},"perfect_ten":{"name":"Tam on","description":"3×3 normal bir Döndür bulmacasını 10 veya daha az dönüşte çöz."},"dizzy":{"name":"Fırıl fırıl","description":"Aynı bloğu art arda dört kez aynı yöne döndür, sonra bulmacayı çöz."}}},"undead":{"name":"Hortlaklar","alsoKnownAs":"Haunted Mirror Maze","description":"Hayaletleri, vampirleri ve zombileri aynalarda görülenlere uyacak şekilde yerleştir.","preset":{"4x4_easy":"4×4 Kolay","4x4_normal":"4×4 Normal","4x4_tricky":"4×4 Çetrefilli","5x5_easy":"5×5 Kolay","5x5_normal":"5×5 Normal","5x5_tricky":"5×5 Çetrefilli","7x7_easy":"7×7 Kolay","7x7_normal":"7×7 Normal"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"difficulty":{"name":"Zorluk","choice":{"easy":"Kolay","normal":"Normal","tricky":"Çetrefilli"}}},"action":{"s":{"label":"Görüş","title":"Bir kareden ya da bir kenar sayısından geçen görüş hatlarını izle (S)"}},"keypad":{"g":"Hayalet","v":"Vampir","z":"Zombi"},"achievement":{"no_pencil":{"name":"Gözlerine güven","description":"5×5 veya daha büyük bir Hortlaklar bulmacasını tek bir kalem notu yazmadan çöz."},"fearless":{"name":"Korkusuz","description":"Çetrefilli bir Hortlaklar bulmacasını geri dönüp hiçbir canavarı değiştirmeden çöz."}}},"unequal":{"name":"Eşitsiz","alsoKnownAs":"Futoshiki","description":"Latin karesini tamamla; her büyüktür işareti doğru olsun.","preset":{"4x4_easy":"4×4 Kolay","5x5_easy":"5×5 Kolay","5x5_medium":"5×5 Orta","5x5_medium_adjacent":"5×5 Orta (Komşu)","5x5_hard":"5×5 Zor","6x6_easy":"6×6 Kolay","6x6_medium":"6×6 Orta","6x6_medium_adjacent":"6×6 Orta (Komşu)","6x6_hard":"6×6 Zor","7x7_medium":"7×7 Orta","7x7_medium_adjacent":"7×7 Orta (Komşu)","7x7_hard":"7×7 Zor"},"config":{"mode":{"name":"Mod","choice":{"unequal":"Eşitsiz","adjacent":"Komşu"}},"size_s_s":{"name":"Boyut (s*s)"},"difficulty":{"name":"Zorluk","choice":{"very_easy":"Çok kolay","easy":"Kolay","medium":"Orta","hard":"Zor","extreme":"Aşırı zor"}}},"action":{"m":{"label":"Notlar","title":"Her boş kareye bütün olasılıkları kalemle not al (M)"},"h":{"label":"İpucu","title":"Basit akıl yürütmenin bıraktığı olasılıkları kalemle not al (H)"},"l":{"label":"Vurgula","title":"Son dokunduğun rakamı içeren her kareyi öne çıkar (L)"}},"achievement":{"adjacent_bare":{"name":"Kapı komşusu","description":"Komşu modunda bir Eşitsiz bulmacasını tek bir kalem notu yazmadan çöz."},"extreme_bare":{"name":"Hepsi kafada","description":"Aşırı zor bir Eşitsiz bulmacasını tek bir kalem notu yazmadan çöz."}}},"unruly":{"name":"Asi","alsoKnownAs":"Binairo, Takuzu","description":"Her kareyi siyah ya da beyaza boya; her satır ve sütunda eşit sayıda olsun, asla üçü yan yana gelmesin.","preset":{"8x8_easy":"8×8 Kolay","8x8_normal":"8×8 Normal","10x10_easy":"10×10 Kolay","10x10_normal":"10×10 Normal","14x14_easy":"14×14 Kolay","14x14_normal":"14×14 Normal"},"config":{"width":{"name":"Genişlik"},"height":{"name":"Yükseklik"},"unique_rows_and_columns":{"name":"Satır ve sütunlar birbirinden farklı"},"difficulty":{"name":"Zorluk","choice":{"easy":"Kolay","normal":"Normal"}}},"action":{"e":{"label":"Sil","title":"Bir kareyi temizlemek için ona tıkla (E)"}},"achievement":{"no_threes":{"name":"Asla üç","description":"10×10 veya daha büyük bir Asi bulmacasını hiç yan yana üç aynı renk yapmadan çöz."},"first_time":{"name":"Siyah beyaz","description":"14×14 bir Asi bulmacasını geri dönüp hiçbir kareyi değiştirmeden çöz."}}},"untangle":{"name":"Dolaşık","alsoKnownAs":"Planarity","description":"Noktaları sürükle; hiçbir iki çizgi kesişmesin.","preset":{"6_points":"6 nokta","10_points":"10 nokta","15_points":"15 nokta","20_points":"20 nokta","25_points":"25 nokta"},"config":{"number_of_points":{"name":"Nokta sayısı"}},"action":{"g":{"label":"Hizala","title":"Bırakılan noktaları ızgaraya hizala (G)"}},"achievement":{"one_touch":{"name":"Hafif dokunuş","description":"10 veya daha fazla noktalı bir Dolaşık bulmacasını aynı noktayı iki kez tutmadan çöz."},"only_downhill":{"name":"Hep yokuş aşağı","description":"20 veya daha fazla noktalı bir Dolaşık bulmacasını hiçbir hamle kırmızı çizgi eklemeden çöz."}}}}`),$=JSON.parse(`{"blackbox":{"step1":{"text":"Bu 4×4 kutuda bir top saklanıyor. Kenardaki noktalardan içeri lazer ateşle, topun nerede olması gerektiğini bul, işaretle ve köşedeki düğmeye bas."},"step2":{"text":"**Sol kenarda, ikinci satır hizasındaki** noktaya tıkla. Işın içeride bükülür ve başka bir yerden çıkar; iki ucu da aynı numarayı alır."},"step3":{"text":"Şimdi **ikinci sütunun tepesindeki** noktadan ateşle. **H**, ışının doğrudan bir topa çarptığı ve hiç çıkmadığı anlamına gelir."},"step4":{"text":"**Birinci sütunun tepesindeki** noktadan da ateşle. **R**, ışının dosdoğru geri sektiği anlamına gelir; bu, bir top girişin çaprazında durduğunda olur."},"step5":{"text":"R, birinci sütunun çaprazına bir top koyar; H ise ikinci sütunun dümdüz aşağısına. İkisini birden yalnızca bu kare karşılar."},"step6":{"text":"Topunu oraya işaretlemek için **o kareye tıkla**."},"step7":{"text":"Bütün toplar işaretlendi, bu yüzden **sol üst köşedeki onay işareti** artık etkin. Cevabını kontrol ettirmek için ona tıkla."},"step8":{"text":"Doğru. Oynarken boş olduğundan emin olduğun bir kareyi kilitlemek için ona **sağ tıkla**; **Çöz** ise cevabı verir."}},"bridges":{"step1":{"text":"Her adanın sayısı, kaç köprü ucu istediğini gösterir. Bütün adaları tek bir ağda birleştir; iki ada arasında en fazla iki köprü olsun ve hiçbir köprü bir başkasını kesmesin."},"step2":{"text":"**Alttaki 2** ile aynı hizada yalnızca bir ada var: tepedeki **4**. Bir köprü kurmak için 2'den 4'e doğru **sürükle**."},"step3":{"text":"Bu ada iki köprü ucu istiyor ve bunların gidebileceği tek yer bu çift. İkinci, paralel bir köprü için aynı yönde yeniden **sürükle**."},"step4":{"text":"Bu ada tamam. Bitti diye işaretlemek için ona **tıkla**: ada griye döner ve köprüleri kilitlenir, böylece yanlışlıkla bozamazsın."},"step5":{"text":"Hiçbir köprü bir başkasını kesemez, bu yüzden **iki 1** arasındaki hat artık kullanılamaz. Bunu not etmek için soldaki 1'den sağdakine doğru **sağ tuşla sürükle**."},"step6":{"text":"Artık her 1'in tek bir çıkış yolu var ve kalan dört köprü buradan çıkıyor. **Çöz** bulmacayı bitirir (**G** de bir köprünün geçebileceği her hattı gösterir).","textTouch":"Artık her 1'in tek bir çıkış yolu var ve kalan dört köprü buradan çıkıyor. **Çöz** bulmacayı bitirir."}},"cube":{"step1":{"text":"Küpün altı yüzü var ve altı kare maviye boyalı. Her yüz bir mavi toplayana kadar küpü yuvarla: küp her yere indiğinde alttaki yüz ile kare renklerini değiş tokuş eder."},"step2":{"text":"Bir tıklama küpü, seçtiğin kareye doğru kenarının üzerinden devirir. Rengini yere inen yüze almak için **küpün hemen altındaki mavi kareye tıkla**."},"step3":{"text":"Küpün bıraktığı kare artık düz — renkler gerçekten yer değiştiriyor. İkinci bir yüzü maviye çevirmek için **sağdaki mavi kareye tıkla**."},"step4":{"text":"Küpü **ok tuşları** da yuvarlar. Üçüncü mavi kareyi almak için **→** tuşuna bir kez bas.","textTouch":"Komşu her kare bir dokunuş uzağında. Üçüncü mavi kareyi almak için **sağdaki bir sonraki mavi kareye dokun**."},"step5":{"text":"Üç yüz mavi, üçü kaldı — bu tahta toplam altı yuvarlamada bitirilebilir ve durum satırı bunları sayar. Fazla gidersen **Geri al** bir hamleyi geri alır."}},"dominosa":{"step1":{"text":"Buraya üç domino — 0-0, 0-1 ve 1-1 — dizilmiş, sonra kaldırılmış ve geride sayıları kalmış. Her birini tam bir kez geri koymak için ızgarayı çiftlere ayır."},"step2":{"text":"Hiçbir domino iki kez kullanılamaz. Bu **0**'ı altındaki **1** ile eşlemek, iki dış sütunu da 0-1 yapardı; bu yüzden çift olmadıklarını not etmek için aralarına **sağ tıkla**."},"step3":{"text":"Birbirine değen tek **0** çifti sol üst köşedeki ikili, yani 0-0 oraya gider. Onu yerleştirmek için **aralarındaki sınıra tıkla**."},"step4":{"text":"Aynı şekilde birbirine değen tek **1**'ler sol alttaki ikili. 1-1 için aralarındaki sınıra tıkla."},"step5":{"text":"Böylece 0-1 için sağdaki sütun kalıyor. Bitirmek için iki sayısı arasındaki sınıra tıkla."},"step6":{"text":"Her domino bir kez kullanıldı. Bir dominoyu kaldırmak için ona yeniden tıkla; tekrar eden domino kırmızı çizilir, **Geri al** da hamlelerinde geri gider."}},"fifteen":{"step1":{"text":"Numaralı karoları boşluğa kaydırarak **1'den 8'e** sıraya diz; boşluk sağ alt köşede kalsın. Bu küçük tahtanın bitmesine iki hamle var."},"step2":{"text":"Boşlukla aynı satırda ya da sütunda olan her karo kayabilir. Yukarıdaki boşluğa itmek için **5**'e tıkla."},"step3":{"text":"Bir tane daha. Satırı tamamlamak için **8**'e tıkla."},"step4":{"text":"Çözüldü! **Geri al** ve **Yinele** hamlelerinde gezinir, duraklatma menüsündeki **Yeni** de yepyeni bir bulmaca verir. Ok tuşları da bir karoyu okun yönünde boşluğa kaydırır.","textTouch":"Çözüldü! **Geri al** ve **Yinele** hamlelerinde gezinir, duraklatma menüsündeki **Yeni** de yepyeni bir bulmaca verir. Bütün bir satır ya da sütun tek seferde kayar, bu yüzden en uzaktaki karoyu hedefle."}},"filling":{"step1":{"text":"Her boş kareye bir rakam yaz; eşit rakamlardan oluşan her bağlı blok, rakamın söylediği kadar kareyi kaplasın."},"step2":{"text":"Orta sütunun dibindeki **3** yalnızca yukarı doğru büyüyebilir, yani bloğu o sütundur. Sütunun en üst karesinden ortadakine doğru **sürükle**, sonra **3** tuşuna bas.","textTouch":"Orta sütunun dibindeki **3** yalnızca yukarı doğru büyüyebilir. Sütunun en üst karesinden ortadakine doğru **sürükle**, sonra tuş takımında **3**'e dokun."},"step3":{"text":"Sol sütundaki **2**'nin bir eşe ihtiyacı var ve boş olan tek kare hemen üstündeki. O kareye tıkla ve **2** tuşuna bas.","textTouch":"Sol sütundaki **2**'nin bir eşe ihtiyacı var ve boş olan tek kare hemen üstündeki. O kareye dokun, sonra tuş takımında **2**'ye dokun."},"step4":{"text":"Bir kare kaldı. Yanlış bir rakamın nasıl göründüğünü görmek için ona tıkla ve **1** tuşuna bas.","textTouch":"Bir kare kaldı. Yanlış bir rakamın nasıl göründüğünü görmek için ona dokun, sonra tuş takımında **1**'e dokun."},"step5":{"text":"Kırmızı imkânsız demek: bu iki **1** birbirine değiyor ve iki karelik bir blok oluşturuyor, tepedeki **2** de dört yandan kapalı kalıyor. O kare hâlâ seçili, o yüzden boşaltmak için **Backspace** tuşuna bas.","textTouch":"Kırmızı imkânsız demek: bu iki **1** birbirine değiyor ve iki karelik bir blok oluşturuyor, tepedeki **2** de dört yandan kapalı kalıyor. O kare hâlâ seçili, o yüzden boşaltmak için tuş takımında **⌫**'e dokun."},"step6":{"text":"Bu boş kare onun yerine üstündeki **2** ile eşleşir. Izgarayı bitirmek için ona tıkla ve **2** tuşuna bas.","textTouch":"Bu boş kare onun yerine üstündeki **2** ile eşleşir. Izgarayı bitirmek için ona dokun, sonra tuş takımında **2**'ye dokun."},"step7":{"text":"Doldu. Kalın çizgiler biten her bloğu çevreler; **sağ tıklama** seçime kareleri teker teker ekler, **Geri al** da bir doldurmayı geri alır."}},"flip":{"step1":{"text":"Dokuz karenin hepsini yak. Birine basmak onu **ve** çevresindeki kareleri çevirir, yani yanan kareler yeniden sönebilir."},"step2":{"text":"Bir karenin içindeki küçük şema neleri çevirdiğini gösterir: dolu blok karenin kendisi, çerçeveler de komşularıdır."},"step3":{"text":"Bunu yakma zamanı. Köşedeki sönük kareye, **sol üstteki** kareye bas."},"step4":{"text":"Köşe yandı ama iki komşusu söndü. Şimdi **ortadaki** kareye bas."},"step5":{"text":"Artık yalnızca sağ alt köşe sönük. Bitirmek için **sağ alttaki** kareye bas."},"step6":{"text":"Hepsi yandı! **Geri al** bir basışı geri alır; tıklamak yerine ok tuşlarıyla bir imleci yönetip Enter'a da basabilirsin.","textTouch":"Hepsi yandı! **Geri al** bir basışı geri alır; aynı kareye iki kez basmak her zaman birbirini götürür, yani sıra hiç önemli değildir."}},"flood":{"step1":{"text":"Sol üst kare ve ona bağlı aynı renkteki her şey senin. Her hamle bu alanı yeniden boyar, böylece yeni renkteki komşu kareler de katılır. **Dört hamle** sınırı içinde bütün ızgarayı tek renk yap."},"step2":{"text":"Alanın şimdilik yalnızca o mavi köşe. Yanındaki **kırmızı** kareye tıkla: alan kırmızıya döner ve değdiği her kırmızı kare de ona katılır."},"step3":{"text":"Şimdi alanının kenarındaki bir **mavi** kareye tıkla. İyi seçilmiş bir renk tek hamlede ızgarada uzun bir zincir oluşturabilir."},"step4":{"text":"Alanının dışında yalnızca **yeşil** kaldı. Bir tıklama daha ızgaranın geri kalanını da içine alır."},"step5":{"text":"Dörtten üç hamle — durum satırı sayıyı tutar. Izgara tek renk olmadan hamlelerin biterse tur kaybedilir. Takıldın mı? Bir **İpucu** senin yerine iyi bir renk oynar, **Çöz** de ızgarayı otomatik çözümle bitirir."}},"galaxies":{"step1":{"text":"İki nokta, yani iki galaksi. Izgara çizgileri boyunca duvarlar çiz; her nokta kendi bölgesinin merkezinde kalsın: bir bölgeyi noktası etrafında 180° döndürdüğünde tam kendi üstüne gelmeli."},"step2":{"text":"Soldaki nokta iki karenin arasındaki bir çizginin üzerinde, yani galaksisi soldaki iki sütun olmalı. **Üst satırda**, bu sütunların hemen sağındaki ızgara çizgisine **tıkla**."},"step3":{"text":"Noktalar not kâğıdı işi de görür. Oraya bir ok bırakıp o kareyi galaksinin parçası olarak işaretlemek için sağdaki noktadan **sağ üst kareye** doğru **sürükle**."},"step4":{"text":"Duvara dönelim: **orta satırda**, aynı ızgara çizgisinin bir satır aşağısına **tıkla**."},"step5":{"text":"**Alt satırda** bir parça kaldı. İki galaksiyi de kapatmak için ona **tıkla**."},"step6":{"text":"İki bölge de gölgelendi, yani ikisi de doğru. **Çöz** cevabın tamamını çizer, bir duvara tıklamak da onu yeniden siler."}},"guess":{"step1":{"text":"Soru işaretlerinin arkasında, üç renkten oluşan bir sırayla iki pim gizli. Bir satır tahmin et, aldığı işaretleri oku ve olasılıkları daralt."},"step2":{"text":"En üstteki rengi tepsiden **sürükle** ve oklu satırın **soldaki deliğine** bırak."},"step3":{"text":"Önce bir renk seçip sonra deliklere tıklayabilirsin de. Tepsideki **ikinci renge** tıkla."},"step4":{"text":"Şimdi o rengi bırakmak için **sağdaki deliğe** tıkla."},"step5":{"text":"Satır doldu, bu yüzden sağındaki **kesik çizgili kutu** yanar. Tahmini değerlendirtmek için ona tıkla."},"step6":{"text":"İki **içi boş** işaret, iki rengin de cevapta olduğunu ama hiçbirinin doğru yerde olmadığını gösterir — dolu bir işaret doğru renk, doğru yer demektir. Yerlerini değiştir ve yeniden gönder."},"step7":{"text":"Çözüldü. **Çöz** pes eder ve cevabı gösterir; renkleri ayırt etmek zorsa **L** tuşu pimlere harf koyar.","textTouch":"Çözüldü. **Çöz** pes eder ve cevabı gösterir; Geri al'ın yanındaki **Tut** ise emin olduğun bir pimi sonraki tahminin için yerinde bırakır."}},"inertia":{"step1":{"text":"Sol üst köşedeki top sensin ve toplanacak **üç mücevher** var. Top bir kez yuvarlanmaya başladı mı yalnızca bir duvarda ya da bir durakta durur — mayın ise onu öldürür."},"step2":{"text":"Topun **sağındaki** bir kareye tıkla. Top, tahtanın kenarı onu durdurana kadar o yöne yuvarlanır ve yolundaki mücevheri toplar."},"step3":{"text":"Şimdi topun **altına** tıkla. Top bir sonraki mücevheri alır ve iki kare aşağıdaki kırık halka — bir durak — onu durdurur."},"step4":{"text":"Dikkat: topun hemen altındaki dikenli şey bir **mayın**. Üzerine yuvarlanmak oyunu bitirir ve seni ancak Geri al kurtarır."},"step5":{"text":"Bunun yerine **çapraz** git: iki aşağı ve iki soldaki kareye tıkla; top mayının yanından kayıp son mücevhere ulaşır."},"step6":{"text":"Üç mücevher de toplandı — bitti. **Geri al** ters giden bir yuvarlanmayı geri sarar; ok tuşları düz, Home, Page Up, End ve Page Down ise çapraz yuvarlar.","textTouch":"Üç mücevher de toplandı — bitti. **Geri al** ters giden bir yuvarlanmayı geri sarar; ızgaranın dışına dokunmak da işe yarar, bu da top bir kenara dayandığında kolaylık sağlar."}},"keen":{"step1":{"text":"1, 2 ve 3'ü yerleştir; her biri her satır ve sütunda bir kez bulunsun, kalın çerçeveli her kafesteki rakamlar da kafesin aritmetik ipucunu versin."},"step2":{"text":"**2×** kafesinin çarpımı 2, yani rakamları 1, 1 ve 2. Bir kafeste rakam tekrar edebilir ama aynı satır ya da sütunda edemez; bu yüzden 2 köşeye gider: o kareye tıkla ve **2** yaz.","textTouch":"**2×** kafesinin çarpımı 2, yani rakamları 1, 1 ve 2. 2 köşeye gider: o kareye dokun, sonra tuş takımında **2**'ye dokun."},"step3":{"text":"Kafesin diğer iki karesi 1'ler. **2'nin sağındaki** kareye tıkla ve **1** yaz.","textTouch":"Kafesin diğer iki karesi 1'ler. **2'nin sağındaki** kareye dokun, sonra tuş takımında **1**'e dokun."},"step4":{"text":"Üst satırda 2 ve 1 zaten var, yani son karesi 3 olmalı. **Sağ üst kareye** tıkla ve **3** yaz.","textTouch":"Üst satırda 2 ve 1 zaten var, yani son karesi 3 olmalı. **Sağ üst kareye** dokun, sonra tuş takımında **3**'e dokun."},"step5":{"text":"Bir kare için yalnızca tahmin mi yürütüyorsun? Orta kareye **sağ tıkla** ve **3** yaz; rakam, kareyi doldurmak yerine kalemle not olarak girilir.","textTouch":"Bir kare için yalnızca tahmin mi yürütüyorsun? Orta kareye **uzun dokun** ve **3**'e dokun; rakam, kareyi doldurmak yerine not olarak girilir. **✎** tuşu da dokunduğun bir kare için aynı işi yapar."},"step6":{"text":"Gerisini de aynı şekilde çöz; satırında ya da sütununda tekrar eden bir rakam kırmızıya döner, ipucunu tutturamayan dolu bir kafes de öyle. Duraklatma menüsündeki **Notlar** bütün olasılıkları senin yerine not alır, **Çöz** de cevabı verir."}},"lightup":{"step1":{"text":"Her beyaz kare sonunda aydınlanmalı. Bir ampul, bir siyah kare ışığı kesene kadar kendi satırını ve sütununu aydınlatır; hiçbir ampul başka bir ampulün ışığında duramaz."},"step2":{"text":"Bir sayı, o siyah kareye kaç ampulün değdiğini söyler. Bu **2**'nin yalnızca iki beyaz komşusu var, yani ikisinde de ampul var: **sağındakine** tıkla."},"step3":{"text":"Işın boyunca yayılan sarı ışığa dikkat et. Şimdi ikinci ampulü için 2'nin hemen **altındaki** kareye tıkla."},"step4":{"text":"**0**, hiçbir ampule değmez. Bir çarpı koymak için hemen üstündeki kareye **sağ tıkla**: bu sana yalnızca oraya ampul konamayacağını hatırlatır."},"step5":{"text":"**1** tam olarak bir ampul istiyor. Altındaki kare zaten aydınlık, oraya konan bir ampul ışığın içinde kalırdı — bunun yerine 1'in **solundaki** kareye tıkla."},"step6":{"text":"Üst satırda iki kare hâlâ karanlık ve birini çarpıyla eledin. **Diğerine** tıkla."},"step7":{"text":"Her kare aydınlık, her sayı memnun. **Geri al** bir ampulü geri alır; ok tuşları, Enter ve Space ile fare olmadan ampul ve çarpı koyabilirsin.","textTouch":"Her kare aydınlık, her sayı memnun. **Geri al** bir ampulü geri alır; uzun dokunuş da elediğin herhangi bir kareye çarpı koyar."}},"loopy":{"step1":{"text":"Noktaların arasındaki soluk çizgiler boyunca **tek** bir kapalı döngü çiz. Her sayı, karesinin dört kenarından kaçının döngüde olduğunu söyler."},"step2":{"text":"Ortadaki karede **4** yazıyor, yani dört kenarı da döngüde. İlk çizgiyi çizmek için üst kenarına **tıkla**."},"step3":{"text":"Şimdi **sol kenarına**. Bir çizgiye yeniden tıklamak onu siler."},"step4":{"text":"Her noktada ya iki çizgi olur ya hiç olmaz; bu ikisinin buluştuğu nokta doldu. Kullanılamaz diye çarpıyla işaretlemek için oradan yukarı çıkan çizgiye **sağ tıkla**."},"step5":{"text":"İki kenar kaldı. Ortadaki karenin alt kenarına **tıkla**."},"step6":{"text":"**Sağ kenar** da döngüyü kapatır. Tek döngü, açık uç yok ve dört **0** ondan uzak kalıyor."},"step7":{"text":"Çözüldü. **Geri al** çizgilerinde geri gider, duraklatma menüsündeki **Tür** de kareleri üçgenlerle, altıgenlerle ve daha tuhaf döşemelerle değiştirir."}},"magnets":{"step1":{"text":"Her domino ya **+** ve **−** yarıları olan bir mıknatıs ya da boştur. Sayılar her satır ve sütundaki **+** kutupları (üstte ve solda) ve **−** kutupları (altta ve sağda) sayar; aynı kutuplar asla birbirine değemez."},"step2":{"text":"Alt satır üç **−** kutbu istiyor ve oraya yalnızca üç domino uzanıyor, yani her biri bir tane vermeli. Dik dominonun üst yarısını **+** yapmak için ona **sol tıkla**; böylece **−** aşağı iner."},"step3":{"text":"Demek ki sağ alttaki yatay domino da bir mıknatıs ve son sütunun üstündeki **0** orada **+** olmasını yasaklıyor. **+**'yı o tarafa koymak için sol yarısına **sol tıkla**."},"step4":{"text":"Dördüncü sütunda artık bir **+** var ve hiç **−** istemiyor, yani üstteki domino ikisi de olamaz. Boş olarak işaretlemek için ona **sağ tıkla**."},"step5":{"text":"Üst satır hâlâ soldaki yatay dominodan bir **+** ve bir **−** istiyor. Dominonun sağ yarısı bir **+**'ya değiyor ve aynı kutuplar değemez — bu yüzden sol yarısına **sol tıkla**."},"step6":{"text":"Bir domino kaldı. Birinci sütun **+**'sını yukarıda harcadı, yani buradaki **+** sağa gider: bitirmek için sağ yarıya **sol tıkla**."},"step7":{"text":"Çözüldü! Aynı yarıya yeniden tıklamak mıknatısı ters çevirir, ikinci bir sağ tıklama \\"mıknatıs ama hangi yönde?\\" notu için soru işaretleri bırakır, **Geri al** da geri gider."}},"map":{"step1":{"text":"Her bölgeyi boya; sınırlarının bir parçasını paylaşan iki bölge aynı renkte olmasın. Dört renk her zaman yeter ve burada üç bölge hâlâ boş."},"step2":{"text":"Önce bir renk al: haritanın altındaki sırada ikinci olan **mavi renk kutusuna** **tıkla**."},"step3":{"text":"Elinde bir renk varken boş bir bölgeye **sağ tıklamak** o renkten bir nokta koyar — bölgenin o renk *olabileceğine* dair bir not. Sağ kenar boyunca uzanan uzun bölgede dene."},"step4":{"text":"Bu bir olasılıktan fazlası: bu bölge zaten kırmızı, yeşil ve sarıya komşu, geriye yalnızca mavi kalıyor. Boyamak için ona **tıkla**."},"step5":{"text":"Bir rengi bir bölgeden başkasına **sürükleyebilirsin** de. Üstteki büyük bölge artık kırmızı, yeşil ve maviye değiyor; bu yüzden alttaki küçük bölgeden sarıyı ona **sürükle**."},"step6":{"text":"**Sol alt köşede** bir boş bölge kaldı: yeşil, mavi ve o yeni sarıya komşu, yani kırmızı olmalı. Sağ üst köşedeki bölgeden kırmızıyı ona **sürükle**."},"step7":{"text":"Bitti — bir çakışma olsaydı iki bölge arasındaki sınırda kırmızı bir **!** görünürdü. **Geri al** geri gider; ok tuşları ve **1**–**4** ile fare olmadan boyayabilirsin.","textTouch":"Bitti — bir çakışma olsaydı iki bölge arasındaki sınırda kırmızı bir **!** görünürdü. **Geri al** geri gider; sıranın sonundaki silgi kutusu da fikrini değiştirdiğin bir bölgeyi temizler."}},"mines":{"step1":{"text":"Her sayı, ona değen sekiz karedeki mayınları sayar. Kapalı bloğun altında iki mayın saklı; hiçbirine basmadan geri kalan her şeyi aç."},"step2":{"text":"Bu **1** yalnızca bir kapalı kareye değiyor, yani o kare mayın. Bayrak dikmek için ona **sağ tıkla**."},"step3":{"text":"Altındaki **1**'in tek mayını artık bayraklı, yani diğer komşuları güvenli. Hepsini birden açmak için **o 1'e sol tıkla**."},"step4":{"text":"Bloğun üstündeki **2** zaten bir bayrak sayıyor ve geriye tek bir kapalı karesi kaldı. O kareye **sağ tıkla**."},"step5":{"text":"İki mayın da bayraklı, yani son kapalı kare güvenli olmalı. Izgarayı bitirmek için ona **sol tıkla**."},"step6":{"text":"Temizlendi. İkinci bir sağ tıklama bayrağı yeniden kaldırır; bir gün bir mayına basarsan **Geri al** seni kurtarır."}},"net":{"step1":{"text":"Her karonun üzerinde bir kablo parçası var ve bütün ağ rastgele döndürülmüş. Dokuz karonun hepsi ortadaki işaretli karoya bağlanana kadar karoları çevir: **mavi** kablolar zaten canlı, griler değil."},"step2":{"text":"Sol alttaki karonun kablosu dosdoğru duvara bakıyor. Onu saat yönünün tersine çeyrek tur çevirmek için **sol tıkla**; böylece kablo sağdaki komşusuna ulaşır."},"step3":{"text":"**Sağ tıklama** bir karoyu öbür yöne çevirir. Sağ alttaki karoyu saat yönünde bir kez çevir, kablosu sola dönsün."},"step4":{"text":"Ortadaki karonun dört yanında da kablo var, yani yanlış olamaz. Kilitlemek için ona **orta tıkla** ya da Geri al'ın yanındaki **asma kilidi** açıp ona tıkla: kilitli karo gölgelenir ve dönmez.","textTouch":"Ortadaki karonun dört yanında da kablo var, yani yanlış olamaz. Geri al'ın yanındaki **asma kilidi** aç ve kilitlemek için karoya dokun: kilitli karo gölgelenir ve dönmez."},"step5":{"text":"Bir karo kaldı. **Asma kilit** kapalıyken, kablosunu sola çevirip bütün ağı canlandırmak için sağ üst köşeye **sol tıkla**.","textTouch":"Bir karo kaldı. **Asma kilit** kapalıyken, kablosunu sola çevirip bütün ağı canlandırmak için sağ üst köşeye dokun."},"step6":{"text":"Dokuz karo da canlı. **Geri al** çevirmelerinde geri gider; klavyede ok tuşları bir imleci hareket ettirir, **A**, **D** ve **F** de altındaki karoyu çevirir.","textTouch":"Dokuz karo da canlı. **Geri al** çevirmelerinde geri gider; emin olduğun bir karoyu kilitlemek onu yanlışlıkla yapılan bir dokunuştan korur, **Karıştır** da kilitli olmayan her karoyu yeniden döndürür."}},"netslide":{"step1":{"text":"Her kablo parçası sonunda güç kaynağına bağlanmalı. Mavi kablolar canlı, gri kurşun kalem olanlar değil."},"step2":{"text":"Kaynak ortadaki karoda duruyor. O karo hiç hareket etmez, bu yüzden orta satırda ve sütunda ok yok — geri kalan her şey kayar."},"step3":{"text":"Alt satırı bir adım sola kaydırmak için **alt satırın solundaki** oka tıkla; dışarı düşen kablo sağda yeniden belirir."},"step4":{"text":"Alt satır artık birleşti ama hâlâ gri: henüz onu yukarıdaki kaynağa bağlayan bir şey yok."},"step5":{"text":"**Üçüncü sütunun üstündeki** oka **sağ tıkla**. Sağ tıklama bir oku tersine çevirir, bu yüzden o sütun aşağı kayar ve son kablolar da canlanır."},"step6":{"text":"Hepsi canlı! Takılırsan **Çöz** bir cevap gösterir; **Tür** menüsünde de kabloların bir kenardan çıkıp karşı kenardan girdiği sarmalı ızgaralar var."}},"pattern":{"step1":{"text":"Her satır ve sütunun yanındaki sayılar, sırasıyla siyah bloklarının uzunluklarıdır. Hangi karelerin siyah olduğunu bul ve onları doldur."},"step2":{"text":"**Üçüncü sütunda** 1 2 yazıyor: bir siyah, bir boşluk, sonra iki siyah. Dört kareye bu yalnızca tek şekilde sığar; ikili en altta olur. Onların üzerinden aşağı doğru **sürükle**."},"step3":{"text":"Böylece ikilinin üstündeki kare boşluk olur. Beyaz olduğunu bildiğin bir kareyi işaretlemek için ona **sağ tıkla** ve nokta koy."},"step4":{"text":"O sütunun en üst karesi de ipucundaki tek siyah. Ona **tıkla**."},"step5":{"text":"**Son sütunda** 3 yazıyor. Üçlü bir blok dört kareye nereye konursa konsun ortadaki ikisini her zaman kaplar; bu yüzden onların üzerinden aşağı doğru **sürükle**."},"step6":{"text":"Bir ipucu, çizgisi bittiğinde griye döner. Böyle azar azar ilerlemeye devam et ya da bunu **Çöz** bitirsin; orta tıklama bir kareyi yeniden bilinmeyene çevirir."}},"pearl":{"step1":{"text":"Kare merkezinden kare merkezine giden tek bir kapalı döngü çiz. Döngünün her kareye uğraması gerekmez ama her inciden geçmesi gerekir."},"step2":{"text":"**Beyaz inci**, döngünün içinden dümdüz geçtiği anlamına gelir. Üst satırda düz gidebileceği tek yön yatay; bu yüzden o incinin solundaki kareden sağındaki kareye **sürükle**."},"step3":{"text":"Bu incinin iki parçası da tamam, yani ondan başka bir şey çıkamaz. O kenarı elemek için altındaki kenara **sağ tıkla**."},"step4":{"text":"**Siyah inci** dönüş yapar; döngü sonra iki yanındaki karelerden dümdüz geçer. **Sol kenardaki** inci aşağı dönemez — bunun için sol alt köşeden düz bir çizgi geçmesi gerekirdi — bu yüzden sağ kenarına **tıkla**."},"step5":{"text":"Demek ki yanındaki kare dümdüz devam ediyor — onun ötesindeki beyaz inci de öyle. O kareden dördüncü sütuna kadar **sürükle**."},"step6":{"text":"İncilerden yola çıkarak ilerlemeye devam et; bir incinin kuralı bozulduğu anda çevresinde kırmızı bir hale belirir. Döngünün tamamını görmek istersen **Çöz** onu çizer."}},"pegs":{"step1":{"text":"Bir taş, komşusunun üzerinden atlayıp ötesindeki boş deliğe geçer ve üzerinden atladığı taş kaldırılır. Bu küçük tahtada **tek taş** kalana kadar temizle: üç atlama."},"step2":{"text":"Sapın tepesindeki taşı komşusunun üzerinden aşağıya, en alttaki deliğe **sürükle**."},"step3":{"text":"Tıklamak da işe yarar. Almak için **sağdaki taşa** tıkla, sonra onun iki kare solundaki deliğe tıkla."},"step4":{"text":"Son atlama: **sol alt köşedeki** taşı komşusunun üzerinden ortaya sürükle."},"step5":{"text":"Tek taş kaldı — çözüldü. Kendini çıkmaza soktuğunda **Geri al** bir atlamayı geri alır; ok tuşları da çalışır: Enter bir taşı alır, sonra bir ok onu iter.","textTouch":"Tek taş kaldı — çözüldü. Kendini çıkmaza soktuğunda **Geri al** atlamaları istediğin kadar geriye alır."}},"range":{"step1":{"text":"Kareleri siyaha boya; her sayı, kendi karesinin gördüğü beyaz kareleri tam olarak saysın: kendisi ve bir siyah kare ya da kenar durdurana kadar yukarı, aşağı, sola ve sağa doğru hizasındaki her kare."},"step2":{"text":"**6** şu anda altı kare görüyor — bütün satırı ve altındaki iki kare. Yani o satırda ve sütunda hiçbir şey siyah olamaz."},"step3":{"text":"**2** yalnızca kendini ve bir kare daha görebilir, üstündeki kare de 6 için beyaz kalmak zorunda. Bu yüzden siyaha boyamak için solundaki kareye **tıkla**."},"step4":{"text":"Böylece 2'nin hâlâ gördüğü tek beyaz kare sağ üst kare olur. Ona nokta koymak için **sağ tıkla**; beyaz kalacağını bildiğin bir kareyi böyle not edersin."},"step5":{"text":"**3** zaten kendini ve solundaki iki kareyi görüyor, yani sağındaki kare siyah olmalı. Ona **tıkla**."},"step6":{"text":"İki siyah kareyle bitti — noktalar yalnızca not. **H** diğerlerinden çıkan bir kareyi doldurur, **Çöz** de bütün ızgarayı noktalarla doldurur.","textTouch":"İki siyah kareyle bitti — noktalar yalnızca not. Cevabı görmeyi tercih edersen **Çöz** bütün ızgarayı noktalarla doldurur."}},"rect":{"step1":{"text":"Bu ızgarayı dikdörtgenlere böl; her dikdörtgende tam bir sayı olsun ve o sayı dikdörtgenin kaç kare kapladığını göstersin."},"step2":{"text":"Bir dikdörtgende yalnızca bir sayı olabilir ve **3**, **4**'ün hemen altında — bu yüzden 4 üst satırın tamamını almalı. 4'ten o satırın sağ ucuna kadar **sürükle**."},"step3":{"text":"Tek bir ızgara çizgisine tıklamak yalnızca o kenarı ekler ya da kaldırır. **3**'ün sağ tarafındaki çizgiye **tıkla**."},"step4":{"text":"Bir 9 yalnızca 3×3'lük bir blok olabilir ve onun için tek bir yer kaldı. Vurgulanan bloğun sol üst karesinden sağ alt köşesine kadar **sürükle**: bu, 3'ü de kapatır."},"step5":{"text":"Her kare doğru boyutta bir dikdörtgenin içinde. **Sağ tuşla sürüklemek** bir alanın içindeki çizgileri siler ama dış çizgisini bırakır; **Geri al** da bir çizimi geri alır."}},"samegame":{"step1":{"text":"Aynı renkte ve birbirine değen iki ya da daha fazla kareden oluşan grupları kaldırarak tahtayı temizle. _n_ karelik bir grup (_n_ − 2)² puan getirir, yani asıl önemli olanlar büyük gruplardır."},"step2":{"text":"Üst sıradaki dört **kırmızı** kareden herhangi birine tıkla. İlk tıklama grubu yalnızca seçer: grup açılır ve kalın bir çerçeve alır."},"step3":{"text":"Tahtadan kaldırıp dört puan almak için seçili gruba yeniden tıkla. Boşluğun üstündeki kareler aşağı düşer, boş kalan bir sütun da komşularını yanına çeker."},"step4":{"text":"Bu **yeşil** kare tek başına duruyor. Yanında aynı renkte hiçbir şey yok, bu yüzden asla seçilemez — tahta yanına bir eş getirene kadar beklemesi gerekir."},"step5":{"text":"Şimdi burada vurgulanan **mavi ikili**. İkisini birden seçmek için karelerden birine tıkla."},"step6":{"text":"Fikrini mi değiştirdin? Seçimi bırakmak için ona **sağ tıkla** — ikinci kez tıklamadıkça hiçbir şey kaldırılmaz."},"step7":{"text":"Oyunun hepsi bu. Her tahta temizlenebilir, o yüzden devam et — bir kareyi yalnız bıraktığında **Geri al** geri sarar; seni kurtaracak bir Çöz düğmesi yok."}},"signpost":{"step1":{"text":"Her karenin üzerinde bir ok var. Altısını da **1'den 6'ya** numaralı tek bir zincirde birleştir; her kareyi, kendi okunun doğrultusunda bir yerdeki kare izlesin."},"step2":{"text":"**1** doğuyu gösteriyor. Sağındaki kareyi 2 yapmak için 1'den o kareye **sürükle**."},"step3":{"text":"**3** kendiliğinden bağlandı; birbirini izleyen ve doğru yönü gösteren sayılar hep böyle yapar. Şimdi sağ alttaki kareyi solundaki kareye **sürükle**."},"step4":{"text":"Bu ikisinin henüz numarası yok, bu yüzden çift **a** ve **a+1** olarak etiketlendi. Onları yeniden ayırmak için alt satırın ortadaki karesine **sağ tıkla**."},"step5":{"text":"Gerçek sayılar daha iyi: **3**'ü altındaki kareye **sürükle**; o kare 4 olur."},"step6":{"text":"Son bağlantı: o 4'ü solundaki kareye **sürükle**. Kare 5 olur, 6 da yolu kendiliğinden kapatır."},"step7":{"text":"Çözüldü. **Sağ tuşla sürüklemek** ters yönde, bir kareden bir önceki kareye bağlar; **Çöz** de bütün yolu serer."}},"singles":{"step1":{"text":"Hiçbir satır ya da sütunun beyaz karelerinde bir sayı tekrar etmeyene kadar kareleri karart. İki siyah kare asla bir kenarı paylaşamaz ve beyaz kareler tek bir bağlı bölge olarak kalmalı."},"step2":{"text":"Bu satırdaki iki **4**'ün arasında bir kare var. O kareyi karartmak iki 4'ü de beyaz bırakırdı, yani kendisi beyaz olmalı — daire içine almak için ona **sağ tıkla**."},"step3":{"text":"Daire içindeki **3** kesin olarak beyaz ve sütununun tepesinde bir 3 daha var. Karartmak için üsttekine **sol tıkla**."},"step4":{"text":"Siyah kareler asla birbirine değmez, bu yüzden hemen sağındaki **4** beyaz kalır. O son sütundaki diğer 4'e **sol tıkla**."},"step5":{"text":"Yine aynısı: yeni siyah karenin hemen üstündeki **2** beyaz ve satırında en solda bir 2 daha var. Ona **sol tıkla**."},"step6":{"text":"Bir tane kaldı. O siyah karenin üstündeki **3** beyaz, yani sütunun dibindeki diğer 3 gitmeli. Ona **sol tıkla**."},"step7":{"text":"Çözüldü ve beyaz karelerin hepsi hâlâ birbirine bağlı. Daireler yalnızca not; **Geri al** da hamlelerinde geri gider."}},"sixteen":{"step1":{"text":"Karoları soldan sağa okunacak şekilde **1'den 9'a** sıraya diz. Kenardaki oklar bütün bir satırı ya da sütunu bir adım kaydırır; dışarı düşen karşı taraftan geri gelir."},"step2":{"text":"O sütunu bir adım yukarı kaydırmak için **ikinci sütunun üstündeki** oka tıkla; bu, orta satırı tamamlar."},"step3":{"text":"Şimdi alt satırın sağa kayması gerekiyor. **Alt satırın solundaki** oka **sağ tıkla**: sağ tıklama çizgiyi ters yöne gönderir."},"step4":{"text":"Son hamle: sola kaydırıp ızgarayı bitirmek için **üst satırın solundaki** oka tıkla."},"step5":{"text":"Sıralandı! Duraklatma menüsündeki **Tür** daha büyük ızgaralar sunar; oradaki **Özel…** de bir tahtayı belirlediğin sayıda hamleyle karıştırır, sen de geri toplarsın."}},"slant":{"step1":{"text":"Her kareye bir köşegen çiz. Daire içindeki bir sayı köşesine değen çizgileri sayar ve çizgiler asla bir döngü kapatmamalı."},"step2":{"text":"Sol üst köşedeki **0** kendisine hiçbir şeyin değmesini istemiyor, bu yüzden tek karesi öbür yöne yatmalı. Bir \`/\` çizmek için o kareye **sağ tıkla**."},"step3":{"text":"**4**, çevresindeki dört karenin hepsinden bir çizgi istiyor. Sol üstündeki kareye **sol tıkla** — sol tıklama bir \`\\\\\` çizer."},"step4":{"text":"**4**'ün sağ üstündeki kare ise sol aşağı doğru eğilmeli. Bir \`/\` için ona **sağ tıkla**."},"step5":{"text":"Sol kenardaki **1** tek çizgisini zaten altındaki kareden aldı. Yani üstündeki kare ters yöne yatmalı: bir \`\\\\\` için ona **sol tıkla**."},"step6":{"text":"Aynı şekilde devam et. Artık tutamayacak bir sayı kırmızıya döner, kapalı bir döngüye yakalanan her çizgi de öyle. Duraklatma menüsündeki **Çöz** gerisini doldurur."}},"solo":{"step1":{"text":"Her satır, her sütun ve çerçeveli her **2×2 blok** 1, 2, 3 ve 4'ü tam birer kez içermeli. Bu küçük ızgarada üç kare eksik."},"step2":{"text":"Bu **blokta** zaten 2, 3 ve 4 var, yani boş karesi yalnızca **1** olabilir. O kareye tıkla ve **1** tuşuna bas.","textTouch":"Bu **blokta** zaten 2, 3 ve 4 var, yani boş karesi yalnızca **1** olabilir. O kareye dokun, sonra tuş takımında **1**'e dokun."},"step3":{"text":"Bir kareden emin değil misin? Rakamı not olarak kalemle girmek için bu boş kareye **sağ tıkla** ve **2** tuşuna bas.","textTouch":"Bir kareden emin değil misin? Bu boş kareye dokun, tuş takımında **✎**'yi aç ve rakamı not olarak girmek için **2**'ye dokun."},"step4":{"text":"Satırında zaten 3, 4 ve 1 var, yani not doğruymuş. Cevabı yazmak için aynı kareye **sol tıkla** ve **2** tuşuna bas.","textTouch":"Satırında zaten 3, 4 ve 1 var, yani not doğruymuş. Kare hâlâ seçili; not almayı bırakmak için **✎**'ye, sonra cevabı yazmak için **2**'ye dokun."},"step5":{"text":"Bir kare kaldı. Satırında zaten 4, 3 ve 1 var — ona tıkla ve eksik rakamın tuşuna bas.","textTouch":"Bir kare kaldı. Satırında zaten 4, 3 ve 1 var — ona dokun, sonra tuş takımında eksik rakama dokun."},"step6":{"text":"Çözüldü! **Geri al** yanlış bir rakamı geri alır, **M** tuşu da her boş kareye bütün seçenekleri tek seferde not alır.","textTouch":"Çözüldü! **Geri al** yanlış bir rakamı geri alır, duraklatma menüsündeki **Notlar** da her boş kareye bütün seçenekleri tek seferde not alır."}},"tents":{"step1":{"text":"Her ağacın yanına bir çadır kur — üstüne, altına, soluna ya da sağına, asla çaprazına değil. İki çadır birbirine değemez; sayılar her satır ve sütundaki çadırları sayar."},"step2":{"text":"İkinci satırın sonundaki **0**, o satıra hiç çadır kurulmayacağı anlamına gelir. Çimen olarak işaretlemek için ağacın yanındaki kareye **sağ tıkla**."},"step3":{"text":"Üçüncü sütun da boş. Üçünü birden çimen yapmak için en üst karesinden üçüncü satıra kadar **sağ tuşla sürükle**."},"step4":{"text":"Sağ alttaki ağaç köşede duruyor ve yanında başka bir ağaç var; yani tek boş komşusu üstündeki. Çadır kurmak için o kareye **sol tıkla**."},"step5":{"text":"O çadır üçüncü satırı dolduruyor, bu yüzden sol kenardaki ağaç da altına kamp kuramaz. Sol üst kareye **sol tıkla**."},"step6":{"text":"Bir ağacın hâlâ çadırı yok ve yalnızca solundaki kare boş. Kamp alanını bitirmek için ona **sol tıkla**."},"step7":{"text":"Çözüldü! Bir çadıra ya da çimen işaretine yeniden tıklamak onu siler; ok tuşları, Enter ve Space de aynı işi görür, **Geri al** da geri gider.","textTouch":"Çözüldü! Bir çadıra ya da çimen işaretine yeniden dokunmak onu siler, **Geri al** da geri gider."}},"towers":{"step1":{"text":"Her satır ve sütunda 1'den 4'e kadar her yükseklikten bir kule var. Kenardaki bir sayı, oradan **görebildiğin** kuleleri sayar: daha uzun bir kule arkasındaki bütün kısa kuleleri gizler."},"step2":{"text":"Üst satırın sağındaki **1**, o taraftan yalnızca bir kulenin göründüğünü söylüyor; yani en yakındaki en uzunu olmalı. O kareye tıkla ve **4** tuşuna bas.","textTouch":"Üst satırın sağındaki **1**, o taraftan yalnızca bir kulenin göründüğünü söylüyor; yani en yakındaki en uzunu olmalı. O kareye dokun, sonra tuş takımında **4**'e dokun."},"step3":{"text":"Cevap vermek yerine olasılıkları not alabilirsin. Üst satırın sol ucundaki boş kareye **sağ tıkla** ve **1** tuşuna bas.","textTouch":"Cevap vermek yerine olasılıkları not alabilirsin. Üst satırın sol ucundaki boş kareye dokun, tuş takımında **✎**'yi aç ve **1**'e dokun."},"step4":{"text":"Satırın solundaki **4**, dört kulenin de göründüğünü söylüyor; yani o uçtan 1-2-3-4 diye yükselirler. Cevaplamak için kareye **sol tıkla** ve **1** tuşuna bas.","textTouch":"Satırın solundaki **4**, dört kulenin de göründüğünü söylüyor; yani o uçtan 1-2-3-4 diye yükselirler. Kare hâlâ seçili; not almayı bırakmak için **✎**'ye, sonra cevaplamak için **1**'e dokun."},"step5":{"text":"Bir kare kaldı ve satırının yanındaki **1** yine en uzun kuleyi en yakına koyuyor. Ona tıkla ve **4** tuşuna bas.","textTouch":"Bir kare kaldı ve satırının yanındaki **1** yine en uzun kuleyi en yakına koyuyor. Ona dokun, sonra tuş takımında **4**'e dokun."},"step6":{"text":"Çözüldü! **Backspace** yanlış yaptığın bir kareyi boşaltır, duraklatma menüsündeki **Çöz** de seni yenen bir bulmacayı bitirir.","textTouch":"Çözüldü! Tuş takımındaki **⌫** yanlış yaptığın bir kareyi boşaltır. Duraklatma menüsündeki **Notlar** bütün olasılıkları not alır, **Çöz** de seni yenen bir bulmacayı bitirir."}},"tracks":{"step1":{"text":"Tek bir demiryolu soldaki girişten alttaki çıkışa gider ve uğradığı her karede tam iki ray olur. Sayılar, hattın o sütun ya da satırın kaç karesinden geçtiğini söyler."},"step2":{"text":"Giriş parçası zaten **sol üst kareye** çıkıyor ve o karenin üst ve sol kenarları ızgaranın sınırı. Yani ikinci rayı sağa gitmeli: ortasının hemen sağına **tıkla**."},"step3":{"text":"**Sol sütunun** sayısı **2** ve giriş iki kareyi de zaten kullanıyor, yani sütunun alt yarısından hiçbir şey geçmez. Bir kareyi çarpıyla elemek için ortasına **sağ tıkla** — sağ tuşla sürüklemek bütün bir diziyi eler."},"step4":{"text":"**Sağ sütunun** sayısı **4**, yani hat onun her karesine uğrar; en üst ve en alttaki kareler de yalnızca içeri dönebilir. Sağ üst kareden sağ alt kareye kadar **sürükle**."},"step5":{"text":"**Alt satır** üç kare istiyor ve sol sütun bitti, yani sağ alt köşe hattın üzerinde. Izgaradan çıkamayacağı için sola ve yukarı döner: sol kenarına **tıkla**."},"step6":{"text":"Sayılar, çizgileri doğru olduğunda griye, tutamayacağında kırmızıya döner. Açık uçların çevresinden devam et ya da demiryolunu **Çöz** bitirsin."}},"twiddle":{"step1":{"text":"Sayıları yeniden **1'den 9'a** sıraya diz. Bir hamle, dört karodan oluşan kare bir bloğu çeyrek tur döndürür; bu tahtayı üç çevirme bitirir."},"step2":{"text":"**Sol üstteki dört karonun** ortasına tıkla. Sol tıklama o bloğu saat yönünün tersine çevirir; böylece üst sıraya 1, 2, 3 gelir."},"step3":{"text":"O bloğu bu kez saat yönünde çevirmek için **sağ alttaki dört karonun** ortasına **sağ tıkla**."},"step4":{"text":"**Sol alttaki dört karonun** ortasına sol tıklayarak bitir."},"step5":{"text":"Bitti! **Tür** menüsünde daha büyük bloklar ve her karonun ayrıca doğru yöne bakması gereken *yönlü* bir mod var."}},"undead":{"step1":{"text":"Beş boş kareyi hayaletler, vampirler ve zombilerle doldur — üstteki çetele her birinden kaç tane olduğunu söyler. Her sayı o hat boyunca bakınca görülen canavarları sayar; aynalar da bakışını büker."},"step2":{"text":"**Üst satırın solundan** içeri bakınca hiçbir şey görmüyorsun; ayna aynı hattı tepeye doğru büker ve oradaki **1** bir canavar görüyor. Karşıdan bakınca gizlenip aynada görünen tek canavar hayalettir. O kareye **tıkla**."},"step3":{"text":"Sol alt köşedeki **4** aynalarda zikzak çizerek üç kareden geçiyor ve hepsini görüyor. Vampirler aynada görünmez, yani tek vampir sol sütunun orta karesinde olmalı. Ona **tıkla**."},"step4":{"text":"Bir tıklama canavarlar arasında yalnızca sırayla ilerler. Bunun yerine **V tuşuna bas**: G, V ve Z vurgulanan kareye doğrudan bir hayalet, vampir ya da zombi koyar.","textTouch":"Bir dokunuş canavarlar arasında yalnızca teker teker ilerler. Bunun yerine tuş takımında **Vampir**'e dokun: o canavarı doğrudan vurgulanan kareye yerleştirir."},"step5":{"text":"**Orta satır** aynasız, düz bir görüş ve iki **1** de tek bir canavar görüyor — vampiri. Yani iki komşusu hayalet olmalı. Ortadaki kareye **tıkla**."},"step6":{"text":"**Sağ tıklama** bir şey yerleştirmek yerine küçük bir not alır. O satırın sağdaki karesinde dene; her sağ tıklama bir sonraki canavarı ekler."},"step7":{"text":"İki kare kaldı: not aldığın kare üçüncü hayalet, sonuncusu da zombi. Sayılar, hatları kesinleşince griye döner; izlemeyi tercih edersen **Çöz** labirenti bitirir."}},"unequal":{"step1":{"text":"Her satır ve sütunda 1, 2, 3 ve 4 birer kez bulunmalı — ve iki kare arasındaki her işaret, ikisinden **küçük** olanı göstermeli."},"step2":{"text":"Buradaki işaret sağı gösteriyor, yani **soldaki** kare büyük olan. Bu satırda hâlâ bir 2 ve bir 3 eksik: soldaki kareye tıkla ve **3** tuşuna bas.","textTouch":"Buradaki işaret sağı gösteriyor, yani **soldaki** kare büyük olan. Bu satırda hâlâ bir 2 ve bir 3 eksik: soldaki kareye dokun, sonra tuş takımında **3**'e dokun."},"step3":{"text":"İşaretin gösterdiği kare küçük sayıyı alır. Ona tıkla ve **2** tuşuna bas.","textTouch":"İşaretin gösterdiği kare küçük sayıyı alır. Ona dokun, sonra tuş takımında **2**'ye dokun."},"step4":{"text":"Sütununda artık bir 3 var, yani bu kare yalnızca 2 olabilir. Bunu not olarak kalemle girmek için ona **sağ tıkla** ve **2** tuşuna bas.","textTouch":"Sütununda artık bir 3 var, yani bu kare yalnızca 2 olabilir. Ona dokun, tuş takımında **✎**'yi aç ve bunu not olarak girmek için **2**'ye dokun."},"step5":{"text":"Not, cevap değildir. Kesinleştirmek için aynı kareye **sol tıkla** ve **2** tuşuna bas.","textTouch":"Not, cevap değildir. Kare hâlâ seçili; not almayı bırakmak için **✎**'ye, sonra kesinleştirmek için **2**'ye dokun."},"step6":{"text":"Bir kare kaldı. Latin karesini bitirmek için ona tıkla ve **3** tuşuna bas.","textTouch":"Bir kare kaldı. Latin karesini bitirmek için ona dokun, sonra tuş takımında **3**'e dokun."},"step7":{"text":"Çözüldü! **Geri al** bir rakamı geri alır; bir bulmaca seni yenerse **Çöz** cevabı doldurur.","textTouch":"Çözüldü! **Geri al** bir rakamı geri alır, **Notlar** ve **İpucu** olasılıkları not alır; bir bulmaca seni yenerse **Çöz** cevabı doldurur."}},"unruly":{"step1":{"text":"Her kareyi siyah ya da beyaza boya. Her satır ve sütunda **her renkten üç** kare olmalı ve hiçbir renk **üç kez yan yana** gelmemeli. Üç kare hâlâ belirsiz."},"step2":{"text":"Bu satırda üç beyaz kare zaten var, yani belirsiz olan siyah olmalı. Ona **sol tıkla**: sol tıklama siyaha boyar."},"step3":{"text":"Bu satırda zaten üç siyah var, yani belirsiz karesi beyaz. Ona **sağ tıkla** — sağ tıklama ters sırayla gider ve önce beyaza boyar."},"step4":{"text":"Son belirsiz karenin solunda iki siyah var ve üçüncüsünün yan yana gelmesine izin yok. Beyaza boyayıp ızgarayı bitirmek için ona **sağ tıkla**."},"step5":{"text":"Çözüldü! Boyalı bir kareye yeniden tıklamak onu önce öbür renge, sonra yeniden belirsize çevirir; **Geri al** da hamlelerinde geri gider."}},"untangle":{"step1":{"text":"Bir halkanın üzerinde altı nokta var ve sekiz çizgiyle birbirine bağlı. İki çizgi çifti kesişiyor — kırmızı olanlar bunlar. Hiç kırmızı kalmayana kadar noktaları sürükle."},"step2":{"text":"Önce Geri al düğmesinin yanındaki ızgara düğmesi **Hizala**’ya tıkla (ya da **G** tuşuna bas). Bu, hizalama ızgarasını açar; böylece bıraktığın nokta bir karenin ortasındaki soluk noktalardan birine oturur."},"step3":{"text":"Halkanın tepesindeki noktayı **sol üst köşedeki** boş kareye **sürükle**.","textTouch":"Halkanın tepesindeki noktayı tahtanın **sol üst köşesindeki** boş alana **sürükle**. Tam bir yere oturması gerekmez — yeter ki kesişme ortadan kalksın."},"step4":{"text":"Sağ tarafta bir kesişme kaldı. En alttaki noktayı boş **sağ alt köşeye** **sürükle**.","textTouch":"Sağ tarafta bir kesişme kaldı. En alttaki noktayı boş **sağ alt köşeye** **sürükle** — yol açılır açılmaz son kırmızı çizgi de kaybolur."},"step5":{"text":"Çözüldü. **Çöz** her karmaşayı senin için açar; ok tuşları da bir imleci noktadan noktaya götürür, Enter ile bir noktayı alıp bırakırsın.","textTouch":"Çözüldü. Kırmızı çizgiler hâlâ kesişenlerdir, o yüzden hiç kalmayana kadar sürüklemeye devam et — ya da karmaşayı senin için **Çöz** açsın."}}}`),Fe={$locale:`tr`,$name:q,$dir:`ltr`,ui:J,touchPhrases:Y,messages:X,status:Z,games:Q,tutorials:$};export{g as A,ee as B,A as C,S as D,w as E,o as F,i as I,oe as L,f as M,u as N,b as O,c as P,ie as R,M as S,E as T,t as V,H as _,Ee as a,I as b,be as c,me as d,fe as f,W as g,se as h,Oe as i,m as j,v as k,ve as l,ce as m,Me as n,we as o,ue as p,Ae as r,Se as s,Pe as t,ge as u,B as v,O as w,P as x,R as y,ne as z};
//# sourceMappingURL=i18n-tr-Baf1jlwN.js.map