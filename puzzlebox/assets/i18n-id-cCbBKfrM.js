import{t as e}from"./index-DIYwYEVR.js";var t=e({default:()=>n}),n="## Kontrol umum\n\n- **Baru** memberimu teka-teki baru dan **Mulai ulang** mengembalikan teka-teki ini ke awal.\n  **Urungkan** dan **Ulangi** menelusuri langkah-langkahmu, dan mulai ulang pun bisa\n  diurungkan.\n- **Pecahkan** menampilkan jawabannya, kalau teka-tekinya menyediakan. Ini dihitung sebagai\n  satu langkah yang bisa kamu urungkan.\n- Di sebagian besar teka-teki, klik kanan adalah tindakan kedua — menandai, memasang bendera,\n  atau memutar ke arah sebaliknya. Klik tengah, kalau dipakai, adalah tindakan ketiga.\n- **Jenis** berganti antara ukuran dan tingkat kesulitan yang tersedia; lewat **Kustom…** kamu\n  bisa mengaturnya sendiri.\n- **Bagikan** menampilkan kode yang bisa kamu kirim supaya orang lain bisa memainkan teka-teki\n  yang sama persis.\n\n### Papan Ketik (Keyboard)\n\n- **Permainan baru**: `N` · **Urungkan**: `U` atau `Ctrl+Z` · **Ulangi**: `R` atau `Ctrl+Y`\n- **Pecahkan**: `Ctrl+S` (kalau tersedia). **Bantuan ini**: `?`, dan `Esc` untuk menutupnya. **Jeda**: `Esc`.\n- Di sebagian besar teka-teki, tombol panah menggerakkan kursor di papan, `Enter` berfungsi\n  sebagai klik kiri dan `Space` sebagai klik kanan.\n- Di menu, tombol panah berpindah dari satu kartu atau tombol ke berikutnya, `Enter`\n  memilih dan `Esc` kembali.\n- Kontroler juga bisa dipakai: tombol arah untuk bergerak, `A` memilih atau mengeklik, `X`\n  sebagai klik kanan, `B` kembali, `Start` menjeda, `LB` dan `RB` mengurungkan dan\n  mengulangi, dan `Y` memberi petunjuk.\n  Di teka-teki yang diisi angka, `RT` membawamu ke tombol di layar dan kembali.\n",ee=e({default:()=>te}),te=`## Di layar sentuh

- **Ketuk** untuk tindakan utama dan **tekan lama** untuk tindakan kedua. Kalau teka-tekinya
  punya tindakan ketiga, ketuk dengan **dua jari**.
- Tombol bulat pertama di bilah alat (titik di dalam kotak) menukar keduanya, jadi tindakan
  yang paling sering kamu pakai cukup dengan satu ketukan; selama keduanya ditukar, tombol
  itu menampilkan bendera yang menyala. Tekan lama akan menjalankan tindakan yang satunya.
- **Cubit** papan untuk memperbesar kotak-kotak di kisi yang besar, lalu **seret dengan dua
  jari** untuk bergeser. Cubit lagi ke dalam untuk melihat seluruh teka-teki. Menu
  **Jeda** juga punya tombol untuk dua ukuran itu.
- **Jeda** berisi sisa kontrol: jenis teka-teki, teka-teki baru, mulai ulang, pecahkan, bagikan,
  dan Pengaturan untuk suara dan bahasa. Jam berhenti selama menu terbuka.
`,ne=e({default:()=>re}),re=`# Kotak Hitam

Beberapa bola disembunyikan di dalam sebuah kotak berarsir. Di sekeliling kotak terbentang
bingkai berisi port laser. Tembakkan laser ke dalam kotak dari port mana pun dan amati apa
yang keluar: dari hasilnya, simpulkan di mana bola-bola itu berada, tandai letaknya, lalu
minta jawabanmu diperiksa.

Berkas laser bergerak lurus kecuali ada bola yang menghalanginya:

- Bola tepat di depan akan **menyerap** berkas. Port itu menampilkan **H** (kena).
- Bola di diagonal depan akan **membelokkan** berkas 90° menjauhi bola. Bila kedua diagonal
  berisi bola, berkas langsung berbalik. Pembelokan bisa terjadi berantai, jadi sebuah
  berkas bisa berbelok-belok dulu sebelum keluar.
- Berkas yang keluar lagi lewat port tempatnya masuk berarti **dipantulkan**, ditampilkan
  sebagai **R**. Begitu pula berkas yang sudah dibelokkan bahkan sebelum sempat masuk,
  karena ada bola di diagonal sebelah pintu masuknya.
- Selain itu berkas muncul di tempat lain, dan kedua port mendapat **angka** yang sama
  (serta warna yang sama), sehingga kamu bisa melihat di mana tiap tembakan masuk dan
  keluar.

Begitu kamu menandai bola dalam jumlah yang tepat, sebuah tombol hijau muncul di sudut kiri
atas. Klik tombol itu untuk memeriksa. Susunanmu dihitung benar bila tidak ada satu pun
laser yang bisa membedakannya dari susunan komputer — dengan beberapa bola, bisa saja ada
lebih dari satu susunan yang berperilaku persis sama, dan semuanya dianggap menang.

Susunan yang salah mengakhiri permainan dan membuka jawabannya, jadi periksalah hanya kalau
kamu sudah yakin: bola yang kamu temukan berwarna hitam, tanda yang keliru dicoret merah,
bola yang terlewat berwarna merah, setiap laser yang kamu tembakkan dan hasilnya keliru
menurut susunanmu diberi lingkaran, dan laser yang tidak pernah kamu tembakkan tetapi bisa
membedakan kedua susunan itu kini ikut ditembakkan dan ditulis merah. Dengan
Urungkan kamu bisa kembali dan terus mencoba. Pecahkan berarti menyerah dan menampilkan bola
yang sebenarnya.

## Kontrol

Baris status menghitung bola yang sudah kamu tandai dan laser yang sudah kamu tembakkan,
dan setelah pemeriksaan ia menyebutkan berapa bolamu yang salah dan berapa yang terlewat.

### Mouse dan sentuh

- **Klik sebuah port** untuk menembakkan laser dari sana. Klik port yang sudah pernah
  ditembakkan untuk menyalakan kedua ujung berkas itu; klik lagi, atau klik di mana saja,
  untuk memadamkannya.
- **Klik di dalam kotak** untuk menandai bola di situ; klik lagi untuk menghapus tandanya.
- **Klik kanan salah satu kotak di dalamnya** untuk **menguncinya** agar tidak berubah tanpa
  sengaja; klik kanan sekali lagi untuk membuka kuncinya. Klik kanan pada sebuah port
  mengunci atau membuka seluruh baris atau kolom di sebelahnya.
- **Klik tombol di sudut** untuk memeriksa tanda-tandamu.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor di dalam kotak dan pada port-portnya.
- **Enter** bekerja seperti klik kiri: menembak, menandai, atau memeriksa saat kursor berada
  di tombol itu.
- **Space** bekerja seperti klik kanan, mengunci atau membuka kunci.

## Parameter

- **Lebar** dan **Tinggi** kotak. Setiap baris dan kolom punya port laser di kedua ujungnya.
- **Jumlah bola**: berapa banyak bola yang disembunyikan. Isi satu angka saja, atau sebuah
  rentang seperti \`3-6\` agar komputer yang memilih; kamu juga harus mencari tahu jumlahnya,
  dan tombol periksa muncul untuk berapa pun jumlah tanda selama masih di dalam rentang itu.
`,ie=e({default:()=>ae}),ae=`# Jembatan

Pulau-pulau, masing-masing membawa sebuah angka, tersebar di atas air. Hubungkan semuanya
dengan jembatan sehingga:

- setiap jembatan membentang lurus mendatar atau lurus menurun di antara dua pulau;
- angka pada sebuah pulau persis sama dengan banyaknya jembatan yang menyentuhnya;
- dua pulau boleh dihubungkan oleh jembatan sejajar, tetapi tidak lebih dari dua (batas ini
  bisa diubah di pengaturan kustom);
- tidak ada jembatan yang menyilang jembatan lain;
- setiap pulau bisa dicapai dari pulau mana pun dengan berjalan melewati jembatan.

Kesalahan tampil merah: pulau dengan terlalu banyak jembatan, pulau yang tidak mungkin lagi
mendapat cukup jembatan (tetangganya yang tersisa sudah penuh, atau satu-satunya jalur
terhalang jembatan lain maupun tanda "tidak ada jembatan" buatanmu sendiri), dan
sekelompok pulau yang sudah lengkap tetapi terputus dari sisanya. Bila lingkaran dilarang,
jembatan yang membentuk lingkaran ikut merah.

## Kontrol

**Pecahkan** mengisi solusinya sekaligus membuang jembatan yang tidak seharusnya ada.

### Mouse dan sentuh

- **Seret** dari sebuah pulau ke arah tetangganya untuk memasang jembatan di antara
  keduanya. Kamu cuma perlu bergerak sejauh yang dibutuhkan agar arahnya jelas; jembatannya
  langsung menempel ke pulau terdekat di arah itu. Seret lagi untuk jembatan sejajar kedua;
  menyeret sekali lagi setelah batasnya tercapai akan menghapus semuanya.
- **Seret dengan tombol kanan** dengan cara yang sama untuk memasang penanda "tidak ada
  jembatan di sini", atau untuk menghapusnya.
- **Klik** sebuah pulau untuk menandainya selesai. Pulau itu menjadi abu-abu dan jembatannya
  terkunci agar tidak berubah tanpa sengaja; klik lagi untuk membuka kuncinya.
- **Hapus** (tombol penghapus di samping Urungkan) mengubah seretan menjadi penghapusan: seret dari
  sebuah pulau ke arah tetangganya untuk menyingkirkan semua jembatan di antara keduanya,
  atau penanda "tidak ada jembatan" di sana. Tekan lagi untuk kembali memasang jembatan.
- **Panduan** memunculkan garis samar di setiap tempat yang mungkin dilewati jembatan, dan
  menyembunyikannya lagi.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor dari pulau ke pulau.
- **Enter** diikuti tombol panah memasang jembatan ke arah itu; **Space** diikuti tombol
  panah memasang penanda. Menekan **Enter** dua kali menandai pulau itu selesai.
- **E** adalah tombol **Hapus** dan **G** tombol **Panduan**.

## Parameter

- **Lebar** dan **Tinggi** kisi, masing-masing minimal 3.
- **Kesulitan**: teka-teki _Mudah_ hanya menuntutmu melihat satu pulau pada satu
  waktu — di mana sisa jembatannya persis mengisi ruang yang tersedia, atau di mana angkanya
  terlalu besar sehingga tak ada tetangga yang boleh dilewatkan. Teka-teki _Sedang_ juga
  membuatmu memikirkan tiap sambungan: jembatan mana yang wajib ada karena tanpanya pulau
  itu tak bisa lengkap, dan (bila lingkaran dilarang) sambungan mana yang akan menutup
  sebuah lingkaran. Teka-teki _Sulit_ memintamu berpikir satu langkah ke depan: apakah
  jembatan ini akan melengkapi sekelompok pulau yang terputus dari sisanya, atau membuat
  suatu pulau tak punya tujuan lagi? Setiap teka-teki punya tepat satu solusi.
- **Izinkan lingkaran**: aktif secara bawaan. Bila dimatikan, jaringan jembatan yang selesai
  harus berupa pohon — tidak ada jalur jembatan yang boleh kembali ke titik awalnya — dan
  teka-tekinya dibuat agar bisa dipecahkan dengan aturan itu.
- **Maks. jembatan per arah**: batas jembatan sejajar, biasanya 2. Makin sedikit, makin
  mudah.
- **% kotak pulau**: kira-kira seberapa banyak bagian kisi yang menjadi pulau. Sebagian tata
  letak tidak sanggup memuat sebanyak itu, jadi ini hanyalah batas atas.
- **Faktor perluasan**: saat peta ditumbuhkan, seberapa besar kemungkinan pulau baru
  ditempatkan sejauh mungkin ketimbang di tempat yang lebih dekat. Nilai tinggi menghasilkan
  teka-teki yang lebih renggang dan mudah; nilai rendah menghasilkan teka-teki yang padat.
`,oe=e({default:()=>r}),r=`# Kubus

Sebuah bangun ruang berdiri di atas kisi, dan sejumlah kotak pada kisi itu dicat biru —
persis sebanyak jumlah sisi yang dimiliki bangun tersebut. Menggulingkan bangun itu berarti
menjungkalkannya melewati salah satu rusuk sisi yang sedang menempel di bawah, sehingga sisi
berikutnya turun ke kotak sebelahnya. Setiap kali mendarat, sisi yang ada di bawah dan kotak
tempatnya mendarat bertukar warna: mendaratkan sisi polos di kotak biru membuat birunya
berpindah ke bangun itu; mendaratkan sisi biru di kotak polos meninggalkan biru di sana.
Teka-teki selesai ketika semua sisi biru sekaligus. Baris status menghitung gulinganmu, jadi
usahakan selesai dalam sesedikit mungkin gulingan.

Versi klasiknya menggulingkan kubus di atas kisi persegi. Di kisi segitiga kamu bisa
menggulingkan tetrahedron, oktahedron, atau ikosahedron. Ingat bahwa setiap sisi tetrahedron
yang berguling hanya bisa menjangkau seperempat dari semua kotak, dan sisi-sisi oktahedron
bergantian antara segitiga yang mengarah ke atas dan ke bawah — kotak biru selalu
ditempatkan sedemikian rupa sehingga teka-tekinya tetap bisa diselesaikan.

## Kontrol

Teka-teki ini tidak punya tombol Pecahkan. Begitu semua sisi biru, kamu boleh terus
menggulingkan bangun itu ke mana-mana tanpa merusak hasilnya.

### Mouse dan sentuh

- **Klik** di mana saja untuk menggulingkan bangun itu satu kotak ke arah penunjuk mouse.
  Di kisi persegi berarti ke atas, ke bawah, ke kiri, atau ke kanan; di kisi segitiga,
  segitiga yang sedang ditempati punya tiga tetangga untuk dipilih. Satu klik menjangkau
  setiap tetangga yang dimiliki bangun itu, jadi cara ini saja sudah cukup untuk memainkan
  semua jenis kisi.

### Papan Ketik (Keyboard)

- **Tombol panah** menggulingkan bangun itu ke empat arah utama. Di kisi segitiga, sebuah
  segitiga hanya punya tetangga di atas atau di bawahnya saja, jadi tombol vertikal yang
  lain tidak melakukan apa-apa.
- **Home**, **Page Up**, **End**, dan **Page Down** (atau tombol sudut pada papan tombol
  angka, 7, 9, 1, dan 3) menggulingkan secara diagonal di kisi segitiga, dengan memilih
  rusuk yang paling dekat ke arah itu.

## Parameter

- **Jenis bangun ruang**: tetrahedron, kubus, oktahedron, atau ikosahedron. Kubus memakai
  kisi persegi; sisanya memakai kisi segitiga.
- **Lebar / atas** dan **Tinggi / bawah**: untuk kubus, ini ukuran kisi perseginya. Untuk
  kisi segitiga, keduanya adalah panjang sisi atas dan sisi bawah arena berbentuk segi enam
  (menyetel salah satunya ke nol menghasilkan segitiga polos). Kisi harus menyisakan ruang
  untuk setiap kotak biru ditambah satu kotak awal yang kosong.
`,i=e({default:()=>a}),a=`# Dominosa

Satu set domino lengkap — satu keping untuk setiap pasangan angka dari 0 sampai angka
maksimum, termasuk yang kembar — pernah disusun rapat memenuhi sebuah persegi panjang. Lalu
angka-angkanya dicatat dan dominonya disingkirkan. Tugasmu adalah mencari tahu di mana
letaknya semula: bagilah kisi menjadi pasangan kotak bertetangga sehingga setiap domino
dalam set itu terpakai tepat sekali.

Domino yang dipasang padahal pasangan angkanya sudah muncul di tempat lain akan tampil
merah, begitu pula kotak kosong yang tidak bisa dijangkau domino mana pun lagi.

## Kontrol

Teka-teki selesai ketika semua kotak tertutup dan tidak ada domino yang merah. **Pecahkan**
memasang setiap domino dari solusinya dan menghapus apa pun yang sudah kamu pasang.

### Mouse dan sentuh

- **Klik** pada batas antara dua angka bertetangga (atau di bagian kotak yang paling dekat
  ke batas itu) untuk memasang domino di atas keduanya. Klik batas yang sama sekali lagi
  untuk mengangkatnya. Domino yang dipasang menimpa sebagian domino lain akan
  menggantikannya.
- **Klik kanan** sebuah batas untuk menggambar garis melintanginya, sebagai catatan bahwa
  kedua angka itu **bukan** satu domino. Klik kanan lagi untuk menghapus garisnya. Garis
  tidak bisa digambar berimpit dengan domino, dan memasang domino akan menghapus semua garis
  yang menyentuhnya.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor mengelilingi kisi, berhenti di pusat kotak dan di
  batas antar kotak. Saat berada di sebuah batas, kursor membingkai domino yang akan
  dipasang.
- **Enter** memasang atau mengangkat domino itu dan **Space** menggambar atau menghapus
  garis di sana.

## Parameter

- **Angka maksimum pada domino**: domino berjalan dari 0-0 sampai N-N, dan kisinya selebar
  (N+2) kotak dan setinggi (N+1) kotak, jadi maksimum 6 memberi kisi 8×7.
- **Kesulitan**: seberapa banyak penalaran yang dituntut teka-teki. Teka-teki **Sangat
  mudah** selalu punya domino dengan satu tempat saja, atau kotak dengan satu domino yang
  bisa menutupinya. **Mudah** menambah dua alasan lagi: setiap cara menutup kotak ini
  memakai domino yang sama, jadi domino itu tidak akan ke mana-mana; dan setiap tempat yang
  mungkin bagi domino ini selalu menutup satu tempat yang sama, jadi tempat itu bisa
  dicoret. **Sulit** menambahkan hitung-hitungan (domino yang akan mengucilkan sejumlah
  ganjil kotak itu mustahil; sekumpulan kotak berangka sama bisa mengklaim domino yang
  mereka bagi bersama) dan teka-teki **Ekstrem** menuntutmu mengikuti akibat sebuah
  penempatan sampai akibat-akibat itu bertabrakan. Semuanya punya tepat satu solusi.
  Teka-teki **Ambigu** sama sekali tidak diperiksa: bisa jadi punya beberapa solusi dan
  mungkin butuh tebak-tebakan — menemukan satu susunan saja sudah menang.
`,o=e({default:()=>s}),s=`# Lima Belas

Teka-teki geser klasik. Kisinya terisi ubin bernomor dan satu ruang kosong. Geser ubin ke
dalam celah itu sampai angkanya terbaca berurutan dari kiri ke kanan dan dari atas ke bawah,
dengan celahnya berada di sudut kanan bawah.

## Kontrol

**Pecahkan** langsung melompat ke susunan yang sudah jadi. Ia tidak memperlihatkan caranya
sampai ke sana, tetapi berguna sebagai penyetelan ulang saat kamu melatih rangkaian langkah
tertentu.

### Mouse dan sentuh

- **Klik** ubin mana pun yang sebaris atau sekolom dengan celah untuk menggesernya (beserta
  semua yang ada di antara ubin itu dan celah) ke tempatnya.

### Papan Ketik (Keyboard)

- **Tombol panah** menggeser sebuah ubin ke dalam celah searah dengan panahnya: **panah atas**
  menggeser ubin di bawah celah naik ke dalamnya.

## Parameter

- **Lebar** dan **Tinggi** kisi (bawaannya adalah 4×4 klasik).
`,c=e({default:()=>l}),l=`# Isian

Sebagian kotak pada kisi sudah berisi angka; sisanya kosong. Tulis satu angka di setiap
kotak kosong sehingga tiap kelompok angka sama yang saling terhubung menutupi kotak persis
sebanyak angka itu: setiap 3 termasuk kelompok berisi tiga buah 3, setiap 1 berdiri sendiri,
dan seterusnya. Kotak hanya terhitung terhubung lewat sisinya, bukan lewat sudutnya.
Akibatnya, tidak ada kotak yang berisi 0, dua buah 1 tidak pernah bersebelahan, dan tidak
ada kelompok yang lebih besar dari sembilan kotak. Angka yang sudah diberikan tidak harus
menjadi awal kelompoknya: beberapa angka 4 yang diberikan bisa saja berakhir dalam satu
kelompok, dan sebuah kelompok bisa saja tidak memuat satu pun angka yang diberikan.

Garis tebal muncul di antara kotak yang angkanya berbeda, dan mengelilingi kelompok yang
ukurannya sudah pas (atau sudah kelewat besar). Sebuah angka berubah merah ketika
kelompoknya tumbuh melebihi angka itu, atau ketika ia terkurung dinding tanpa ruang tersisa
untuk mencapai ukurannya. Inilah teka-teki yang diterbitkan Nikoli dengan nama Fillomino.

## Kontrol

Angka yang sudah diberikan digambar dengan tinta dan tidak bisa diubah; angka buatanmu
sendiri berwarna biru. **Pecahkan** mengisi solusinya.

### Mouse dan sentuh

- **Klik** kotak kosong untuk memilihnya, lalu gunakan tombol di layar untuk
  menuliskan angka ke dalamnya. **⌫** pada papan tombol mengosongkan pilihanmu lagi.
- **Seret** melintasi beberapa kotak untuk memilih semuanya, sehingga satu angka mengisi
  setiap kotak terpilih sekaligus.
- **Klik kanan** menambahkan satu kotak ke pilihan tanpa memulai dari awal; klik kanan kedua
  pada kotak yang sudah terpilih akan mengeluarkannya lagi dari pilihan.
- **Isi** (tombol di samping Urungkan) menyebarkan sebuah angka: seret dari kotak yang berisi angka
  melintasi kotak-kotak di sekitarnya, dan semuanya mendapat angka itu begitu kamu
  melepasnya, tanpa perlu papan tombol. Klik dan seretan yang dimulai di kotak kosong tetap
  memilih. Tekan lagi untuk kembali memilih.

### Papan Ketik (Keyboard)

- Dengan satu kotak atau lebih terpilih, **ketikkan sebuah angka** untuk menuliskannya ke
  semua kotak itu. Angka \`0\`, atau **Backspace**, mengosongkannya kembali.
- **Tombol panah** menggerakkan kursor papan ketik, dan angka yang kamu ketik mengisi kotak
  di bawahnya.
- **Space** atau **Enter** memasukkan atau mengeluarkan kotak di bawah kursor dari pilihan,
  sehingga beberapa kotak bisa diisi dengan sekali tekan.
- **F** adalah tombol **Isi**.

## Parameter

- **Lebar** dan **Tinggi**: ukuran kisi. Kelompok tidak pernah lebih besar dari sisi yang
  lebih panjang (atau 9), jadi kisi kecil hanya memakai angka kecil.
`,u=e({default:()=>d}),d=`# Balik

Sebuah kisi berisi kotak-kotak, sebagian menyala dan sebagian gelap. Tujuanmu adalah
menyalakan semuanya sekaligus. Menekan sebuah kotak membalik keadaannya antara menyala dan
gelap, tetapi juga ikut membalik beberapa tetangganya: diagram kecil yang tergambar di tiap
kotak menunjukkan persis kotak mana saja. Dengan bentuk **Silang** bawaan, setiap tekanan
membalik kotak itu beserta empat tetangga ortogonalnya; dengan bentuk **Acak**, tiap kotak
punya polanya sendiri yang tak beraturan, sehingga teka-tekinya terasa berbeda setiap kali.

Karena menekan sebuah kotak dua kali saling meniadakan, dan urutan tekanan tidak pernah
berpengaruh, sebuah solusi hanyalah sekumpulan kotak yang masing-masing ditekan sekali.

## Kontrol

Baris status menghitung jumlah tekananmu. **Pecahkan** menyalakan seluruh papan dan memberi
garis merah pada kotak-kotak yang ia tekan untuk sampai ke sana. Kalau kamu terus menekan
kotak sesudah itu, garis merah tadi menandai kotak mana saja yang masih perlu ditekan untuk
kembali ke keadaan selesai.

### Mouse dan sentuh

- **Klik** sebuah kotak untuk menekannya.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor mengelilingi kisi; **Enter** atau **Space** menekan
  kotak di bawah kursor.

## Parameter

- **Lebar** dan **Tinggi** kisi, dari 2 sampai 10 kotak per sisi.
- **Jenis bentuk**: _Silang_ membalik tiap kotak bersama tetangga ortogonalnya; _Acak_
  memberi setiap kotak sebuah bentuk yang tumbuh secara acak di dalam blok 3×3 di
  sekelilingnya.
`,f=e({default:()=>p}),p=`# Banjir

Kisi ini adalah tambal sulam kotak-kotak berwarna acak. Kamu menguasai kotak di sudut kiri
atas beserta setiap kotak yang tersambung dengannya lewat jalur berwarna sama. Setiap
langkah mengecat ulang seluruh bidang tersambung itu dengan warna pilihanmu, sehingga kotak
tetangga yang berwarna sama ikut menjadi bagian dari bidangmu. Teruskan sampai seluruh kisi
menjadi satu warna.

Tantangannya ada pada batas langkah. Sebelum kamu mulai, permainan memecahkan kisinya
sendiri lalu memberimu jumlah langkahnya ditambah beberapa langkah cadangan; kalau batas itu
habis sebelum kisinya seragam, ronde ini kalah. Kamu masih boleh terus mengecat untuk
melihat kisinya selesai, tetapi itu tidak lagi terhitung menang.

## Kontrol

Baris status menunjukkan berapa langkah yang sudah kamu pakai dari batas yang ada.
**Pecahkan** membiarkan pemecah menyelesaikan kisinya untukmu; hasilnya terhitung selesai
otomatis, bukan kemenanganmu sendiri.

### Mouse dan sentuh

- **Klik** kotak mana pun yang warnanya berbeda dari bidangmu untuk mengecat ulang bidang
  itu dengan warna tersebut. Mengklik kotak yang warnanya sudah sama tidak melakukan
  apa-apa dan tidak memakan langkah.
- **Petunjuk** memainkan warna berikutnya dari pemecah untukmu, sebagai langkah biasa yang
  bisa kamu urungkan. Dengan beberapa petunjuk, kemenangan dan kreditnya tetap milikmu.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor mengelilingi kisi; **Enter** atau **Space** mengecat
  ulang bidang itu dengan warna yang ada di bawah kursor.

## Parameter

- **Lebar** dan **Tinggi** kisi, sampai 32 kotak per sisi.
- **Warna**: berapa banyak warna yang dipakai kisi, dari 3 sampai 10. Makin sedikit warna,
  makin sedikit pilihan dan makin mudah permainannya.
- **Langkah tambahan yang diizinkan**: jumlah langkah cadangan yang ditambahkan ke panjang
  solusi pemecah untuk membentuk batas langkah. Dengan 0 kamu harus setidaknya seefisien
  pemecah; ia lumayan tetapi tidak sempurna, jadi mengalahkan hitungannya masih mungkin.
`,m=e({default:()=>h}),h=`# Galaksi

Kisi ini bertaburan titik, yang bisa berada di tengah sebuah kotak, di garis antara dua
kotak, atau di sudut tempat empat kotak bertemu. Gambar dinding di sepanjang garis kisi
untuk memotong kisi menjadi wilayah-wilayah sehingga setiap wilayah memuat tepat satu
titik, dan titik itu adalah pusat simetri wilayahnya: putar wilayah itu 180° mengelilingi
titiknya dan ia harus jatuh persis pada dirinya sendiri. Setiap kotak harus berakhir di
suatu wilayah, jadi tidak boleh ada wilayah yang dibiarkan tanpa titik.

Teka-teki dibuat secara acak dengan solusi tunggal. Teka-teki ini adalah "Tentai Show"
milik Nikoli, yang juga dikenal sebagai Spiral Galaxies.

## Kontrol

Wilayah yang sudah tertutup dan benar — satu titik, tepat di pusat simetrinya, tanpa
dinding liar di dalamnya — akan diberi warna. Sebuah titik berubah merah jika ada dinding
yang melewatinya, atau jika ia satu-satunya titik dalam wilayah tertutup yang tidak
simetris terhadapnya; wilayah tertutup yang sama sekali tidak memuat titik akan diarsir.
Teka-teki selesai ketika setiap kotak sudah berwarna. **Pecahkan** menggambar solusi
lengkapnya.

### Mouse dan sentuh

- **Klik** sebuah garis kisi untuk menggambar dinding di sana, atau klik sebuah dinding
  untuk menghapusnya.
- **Seret dari sebuah titik** ke dalam sebuah kotak untuk meninggalkan panah kecil di sana
  yang menunjuk kembali ke titik itu, sebagai pengingat bahwa kotak tersebut milik galaksi
  titik itu.
- **Seret dengan tombol kanan** sebuah panah yang sudah ada untuk memindahkannya.
  Jatuhkan kembali di atas titiknya, atau seret keluar dari kisi, untuk membuangnya; kalau
  dijatuhkan di kotak yang sudah berisi panah, ia menggantikan panah itu.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor melintasi kotak, garis, dan sudut sekaligus.
- **Enter** pada sebuah garis menggambar atau menghapus dindingnya; **Enter** pada sebuah
  titik mengambil sebuah panah, yang mengikuti kursor sampai kamu menekan **Enter** lagi
  untuk menjatuhkannya.

## Parameter

- **Lebar** dan **tinggi** kisi, masing-masing minimal 3. Preset berkisar dari 7×7 sampai
  15×15.
- **Kesulitan** — teka-teki _Sedang_ bisa dipecahkan langkah demi langkah dari apa yang
  sudah dipaksakan oleh aturan simetri; yang _Ekstrem_ mungkin menuntutmu mencoba sebuah
  asumsi dan melihat ke mana arahnya.
`,g=e({default:()=>_}),_=`# Tebakan

Komputer telah menyembunyikan sebaris pasak berwarna di balik perisai di bagian atas
papan. Tugasmu adalah menirunya persis, hanya berbekal tanda yang kamu dapat untuk setiap
tebakan: sebuah pasak **hitam** untuk setiap pasak yang warnanya tepat di tempat yang
tepat, dan sebuah pasak **berongga** untuk setiap pasak lain yang warnanya muncul di
tempat lain pada baris tersembunyi itu. Tanda-tanda itu memberi tahu _berapa banyak_ pasak
yang benar, bukan _yang mana_. Temukan barisnya sebelum tebakanmu habis dan perisainya
akan terangkat; kalau habis, perisainya tetap terangkat, untuk menunjukkan apa yang kamu
lewatkan.

Ini permainan yang dijual Hasbro sebagai _Mastermind_: enam warna, empat pasak, dan
sepuluh tebakan. Semua pengaturannya bisa diubah.

## Kontrol

**Pecahkan** mengangkat perisai dan menampilkan jawabannya; itu mengakhiri permainan sama
seperti kehabisan tebakan.

### Mouse dan sentuh

- **Klik** sebuah warna di baki di sebelah kiri untuk memilihnya (cincinnya menunjukkan
  warna mana yang terpilih), lalu **klik sebuah slot** di baris saat ini untuk menaruh
  pasak berwarna itu. Mengklik pasak di tebakan sebelumnya juga memilih warnanya.
- **Seret** sebuah pasak dari baki, dari tebakan sebelumnya, atau dari baris saat ini ke
  dalam sebuah slot. Menyeret pasak keluar dari baris saat ini dan menjatuhkannya di
  tempat lain akan menghapusnya.
- **Klik kanan** sebuah slot untuk mengosongkannya.
- Ketika barisnya sudah lengkap, area penandaan kecil di sebelah kanannya menyala: **klik
  area itu** untuk mengirimkan tebakan.
- **Klik tengah** sebuah slot untuk _menahan_ pasak itu: pasak yang ditahan dibawa ke
  tebakan berikutnya setelah penandaan, sehingga kamu tak perlu menyusun ulang pasak yang
  sudah kamu percayai. Lakukan lagi untuk melepaskannya.
- **Tahan** (tombol di samping Urungkan) melakukan hal yang sama dengan klik biasa: selama aktif,
  mengklik sebuah slot di baris saat ini menahan atau melepaskan pasaknya alih-alih menaruh
  warna. Klik baki untuk mengganti warna seperti biasa; tekan **Tahan** lagi untuk kembali
  menaruh pasak.
- **Huruf** di menu jeda menuliskan sebuah huruf pada setiap pasak, kalau-kalau beberapa warna
  terlihat mirip bagimu, dan menghapusnya lagi.

### Papan Ketik (Keyboard)

- **Tombol panah**: atas dan bawah memilih warna di baki, kiri dan kanan menggerakkan
  kursor di sepanjang baris saat ini dan, setelah barisnya lengkap, ke area penandaan.
- **Enter** atau **Space** menaruh warna yang terpilih di slot di bawah kursor, atau
  mengirimkan tebakan ketika kursor berada di area penandaan.
- **Backspace** atau \`D\` mengosongkan slot di bawah kursor.
- \`H\` menahan atau melepaskan pasak di bawah kursor.
- \`K\` adalah tombol **Tahan** dan \`L\` tombol **Huruf**.

## Parameter

- **Warna**: berapa banyak warna berbeda yang dipakai untuk menyusun baris tersembunyi,
  dari 2 sampai 10. Semakin banyak warna, semakin sulit barisnya dipastikan.
- **Pasak per tebakan**: panjang baris tersembunyi.
- **Jumlah tebakan**: berapa kali kamu boleh mencoba.
- **Izinkan slot kosong**: membolehkanmu meninggalkan slot kosong dalam sebuah tebakan.
  Slot kosong tidak pernah bisa cocok, jadi ini memudahkanmu menjajaki warna. Baris
  tersembunyinya sendiri tidak pernah punya slot kosong.
- **Izinkan pengulangan**: membolehkan baris tersembunyi (dan tebakanmu) memakai satu
  warna lebih dari sekali. Mematikan ini menyusutkan jumlah baris yang mungkin secara
  drastis.
`,v=e({default:()=>y}),y=`# Inersia

Kamu adalah sebuah bola di atas kisi yang penuh rintangan, dan kamu menginginkan setiap
permata di papan. Jebakannya ada pada namanya: begitu bola mulai menggelinding, ia tidak
berhenti sampai ada sesuatu yang menghentikannya. Ia akan menggelinding lurus menembus
permata (memungutnya sambil lewat) maupun kotak kosong, dan baru berhenti ketika kotak
berikutnya adalah dinding atau ketika ia mendarat di sebuah penghenti. Langkah diagonal
menyelip di antara dua dinding yang hanya bersentuhan di sudut. Menggelinding ke atas
ranjau berakibat fatal, bahkan jika langkah yang sama baru saja memungut permata terakhir.

Setiap teka-teki dibuat sedemikian rupa sehingga semua permatanya bisa dikumpulkan dari
kotak awal, tetapi tidak ada yang mencegahmu menggelinding ke pojok papan yang membuat
sebagian permata tak lagi terjangkau. Tidak ada hukuman untuk mati atau terjebak selain
penghitung "Mati" di baris status: cukup urungkan dan coba jalan lain.

## Kontrol

**Urungkan** setelah menabrak ranjau untuk melanjutkan dari sebelum langkah fatal itu.
**Pecahkan** menghitung rute dari posisimu sekarang yang memungut semua permata yang
tersisa, lalu menggelindingkan bola menyusuri rute itu untukmu; Urungkan membatalkan
seluruh rute sekaligus.

### Mouse dan sentuh

- **Klik** sebuah kotak dan bola meluncur ke arah kotak itu relatif terhadap posisinya
  sendiri, dibulatkan ke arah mata angin terdekat dari delapan arah — termasuk diagonal.
  Mengklik margin di luar kisi juga bisa, praktis ketika bola berada di tepi.

### Papan Ketik (Keyboard)

- **Tombol panah** menggelindingkan bola ke atas, ke bawah, ke kiri, atau ke kanan.
- **Home**, **Page Up**, **End**, dan **Page Down** menggelindingkannya secara diagonal
  (kiri atas, kanan atas, kiri bawah, kanan bawah). Papan tombol angka bekerja persis
  seperti tampilannya: 8 ke atas, 3 ke kanan bawah, dan seterusnya; deretan angka di atas
  juga sama.

## Parameter

- **Lebar** dan **tinggi** kisi. Kira-kira seperlima kotaknya adalah dinding, seperlima
  penghenti, seperlima ranjau, dan seperlima permata.
`,b=e({default:()=>x}),x=`# Keen

Isi kisi dengan angka dari 1 sampai sebesar ukurannya sehingga setiap baris dan setiap
kolom memuat masing-masing angka tepat sekali. Kisi ini juga terbagi menjadi "sangkar"
bergaris tebal, yang masing-masing membawa petunjuk kecil di kotak kiri atasnya: sebuah
total dan sebuah tanda operasi hitung. Angka-angka dalam sangkar harus digabungkan menjadi
total itu dengan operasi tersebut:

- \`7+\` berarti angka-angka dalam sangkar berjumlah 7.
- \`12×\` berarti hasil kalinya 12.
- \`2−\` selalu berada pada sangkar dua kotak dan berarti satu angka lebih besar 2 daripada
  angka yang lain (ke arah mana pun).
- \`3÷\` juga selalu pada dua kotak dan berarti satu angka adalah 3 kali angka yang lain.

Berbeda dengan mode Killer di Solo, sebuah sangkar _boleh_ memuat angka yang sama dua kali,
asalkan kedua salinannya tidak berada di baris atau kolom yang sama. Tidak ada angka yang
diberikan di awal; petunjuk itulah satu-satunya bekalmu, dan setiap teka-teki punya tepat
satu solusi. Teka-teki ini diterbitkan dengan nama KenKen.

## Kontrol

Angka yang muncul dua kali di baris atau kolomnya berubah merah, begitu pula petunjuk
sebuah sangkar yang sudah terisi penuh tetapi tidak menghasilkan totalnya. **Pecahkan**
mengisikan solusinya.

### Mouse dan sentuh

- **Klik** sebuah kotak untuk memilihnya, lalu gunakan papan tombol di layar untuk
  menuliskan sebuah angka. Klik kedua pada kotak yang terpilih membatalkan pilihannya.
- **⌫** pada papan tombol mengosongkan kembali kotak yang terpilih, dan **✎** menyalakan
  mode **tanda pensil**: apa yang kamu pilih setelah itu masuk sebagai catatan kecil, dan angka
  yang sama sekali lagi menghapus catatan itu. Tanda pensil hanya ada untuk membantumu
  berpikir; mengisikan sebuah angka akan menghapusnya.
- **Klik kanan** sebuah kotak kosong untuk langsung memilihnya bagi tanda pensil.
- **Tanda** di menu jeda mengisi setiap kotak kosong dengan satu set tanda pensil lengkap.
- **Sorot** (kaca pembesar di samping Urungkan) menyoroti setiap kotak yang berisi angka yang sama
  dengan kotak yang terakhir kamu klik, dan menebalkan angka itu di antara tanda pensil.
  Tekan lagi untuk mematikannya.

### Papan Ketik (Keyboard)

- **Ketik sebuah angka** untuk mengisi kotak yang terpilih, atau untuk mencatatnya di sana
  ketika kotak itu terpilih untuk tanda pensil.
- **Space** atau **Backspace** mengosongkan kotak yang terpilih (angkanya atau semua tanda
  pensilnya).
- **Tombol panah** menggerakkan kursor papan ketik, dan angka yang kamu ketik masuk ke
  kotak di bawahnya.
- **Enter** menukar kursor antara pengisian biasa dan pengisian tanda pensil.
- **M** adalah tombol **Tanda** dan **L** tombol **Sorot**.

## Parameter

- **Ukuran kisi**: dari 3 sampai 9. Angka di atas 9 akan merepotkan, jadi 9 adalah
  batasnya.
- **Kesulitan**: jenis penalaran tersulit yang dibutuhkan teka-teki. _Mudah_ paling jauh
  hanya menuntutmu mencari tahu angka apa saja yang bisa muncul dalam sebuah sangkar;
  _Sedang_ menuntutmu melacak kotak mana dalam sebuah sangkar yang bisa ditempati tiap
  angka; _Sulit_ menambahkan penalaran lintas sangkar (angka yang harus ditempatkan sebuah
  sangkar dalam satu baris tidak bisa berada di tempat lain pada baris itu) dan kumpulan
  kotak yang memiliki kumpulan angka tertentu; _Ahli_ menambahkan rantai pemaksa; dan
  teka-teki _Ekstrem_ tidak bisa dituntaskan tanpa menebak dan mundur lagi. Teka-teki yang
  lebih sulit butuh waktu lebih lama untuk dibuat, dan kisi 3×3 tidak pernah melampaui
  Sedang.
- **Hanya perkalian**: setiap petunjuk berupa hasil kali, yang menyingkirkan domino-domino
  mudah dan menghasilkan teka-teki yang cukup berbeda.
`,S=e({default:()=>C}),C=`# Nyalakan

Sebuah kisi berisi kotak putih dan kotak hitam. Tempatkan bola lampu di kotak-kotak putih
sehingga setiap kotak putih menjadi terang. Sebuah bola lampu menerangi kotaknya sendiri
dan memancar di sepanjang baris serta kolomnya sampai terhalang kotak hitam atau tepi
papan. Tiga hal harus terpenuhi ketika kamu selesai:

- setiap kotak putih terang;
- tidak ada bola lampu yang diterangi bola lampu lain, artinya tidak ada dua bola lampu
  yang saling melihat di sepanjang satu baris atau kolom;
- kotak hitam yang membawa angka punya persis sebanyak itu bola lampu di kotak yang
  langsung berada di atas, di bawah, di kiri, dan di kanannya. Kotak hitam tanpa angka
  boleh punya berapa pun bola lampu di sebelahnya.

Kotak yang terang disiram warna kuning. Bola lampu yang saling menyinari berubah merah,
begitu pula angka yang tidak mungkin lagi dipenuhi: bola lampu di sekitarnya sudah terlalu
banyak, atau tidak ada lagi ruang untuk memasang sebanyak yang dibutuhkan.

## Kontrol

Teka-teki selesai ketika seluruh kisi bercahaya dan tidak ada yang ditampilkan merah.
**Petunjuk** memasang satu bola lampu — atau mencabut satu yang tidak ada di jawabannya — dan
menyerahkan sisanya kepadamu; teka-tekinya tetap berjalan, dan dengan beberapa petunjuk,
kemenangan dan kreditnya tetap milikmu. **Pecahkan** mengisikan bola lampu dari seluruh
solusi, sambil membiarkan tanda silang yang kamu gambar tetap di tempatnya.

### Mouse dan sentuh

- **Klik** sebuah kotak putih untuk menaruh bola lampu di sana, dan klik lagi untuk
  mengambilnya.
- **Klik kanan** sebuah kotak putih untuk membubuhkan tanda silang yang berarti "tidak ada
  bola lampu yang boleh di sini"; klik kanan lagi untuk menghapusnya. Kotak bersilang tidak
  akan menerima bola lampu sampai silangnya dihapus, dan kotak yang berisi bola lampu tidak
  bisa disilang.
- **Silang** (tombol silang di samping Urungkan) membuat klik biasa membubuhkan atau menghapus
  tanda silang alih-alih bola lampu, praktis saat kamu menyingkirkan banyak kotak sekaligus.
  Tekan lagi untuk kembali ke bola lampu.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor di sekitar kisi.
- **Enter** menaruh atau mengambil bola lampu di bawah kursor, dan **Space** (atau **I**)
  memasang atau menghapus tanda silang di sana.
- **X** adalah tombol **Silang**.

## Parameter

- **Lebar** dan **tinggi** kisi.
- **% kotak hitam**: kira-kira seberapa besar bagian kisi yang hitam. Ini petunjuk, bukan
  janji: jika tidak ada teka-teki yang bisa dibuat pada kerapatan itu, generator memakai
  beberapa kotak hitam tambahan.
- **Simetri**: pola yang diikuti kotak-kotak hitam — tidak ada, cermin atau rotasi 2 arah,
  atau cermin maupun rotasi 4 arah. Rotasi 4 arah butuh kisi persegi.
- **Kesulitan**: teka-teki _Mudah_ tunduk pada penalaran satu kotak demi satu kotak tentang
  kotak mana yang harus atau tidak boleh berisi bola lampu. Yang _Sedang_ menuntutmu
  menimbang kumpulan kotak satu sama lain ("salah satu dari ketiga kotak ini pasti bola
  lampu, dan itu menyingkirkan yang satu ini"). Teka-teki _Sulit_ mungkin menuntutmu mencoba
  menaruh bola lampu di suatu tempat dan mengikuti akibatnya sampai ada yang tidak beres.
  Setiap teka-teki punya tepat satu solusi.
`,w=e({default:()=>T}),T=`# Lingkaran

Sebuah kisi titik, dengan angka pada sebagian ruang di antaranya. Gambar satu lingkaran
tertutup di sepanjang garis-garis samar antar titik sehingga:

- setiap ruang berangka punya persis sebanyak itu sisi yang dilalui lingkaran;
- lingkarannya tidak pernah menyilang atau menyentuh dirinya sendiri — setiap titik punya
  dua garis atau tidak sama sekali — dan hanya ada satu lingkaran, tanpa ujung menggantung
  atau potongan terpisah.

Versi klasiknya memakai persegi, tetapi teka-teki yang sama juga berjalan pada segitiga,
segi enam, dan selusin pengubinan yang lebih aneh, tempat angkanya bisa jauh melewati 4.

Garis yang membentuk lingkaran yang salah, atau yang bertemu bertiga pada satu titik,
berubah merah; angka dengan terlalu banyak garis di sekelilingnya, atau dengan sisa sisi
yang terlalu sedikit, juga berubah merah. Sebuah angka menjadi abu-abu begitu jumlah garis
di sekitarnya sudah tepat.

## Kontrol

**Pecahkan** menggambar seluruh lingkarannya. Teka-teki selesai begitu lingkarannya lengkap
dan setiap angka terpenuhi; mencoret sisi-sisi yang tidak terpakai sifatnya opsional.

### Mouse dan sentuh

- **Klik** sebuah sisi samar untuk menggambar garis di atasnya; klik garisnya lagi untuk
  menghapusnya.
- **Klik kanan** sebuah sisi untuk mencoretnya, menandainya sebagai bagian yang pasti bukan
  lingkaran; klik kanan lagi untuk membersihkan tandanya. Klik maupun klik kanan sama-sama
  membersihkan tanda yang dibuat oleh yang satunya.
- **Silang** (tombol silang di samping Urungkan) membuat klik biasa mencoret sebuah sisi, atau
  membersihkannya, alih-alih menggambar garis. Tekan lagi untuk kembali menggambar garis.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor dari sisi ke sisi; **Enter** menggambar atau
  menghapus garis pada sisi di bawah kursor dan **Space** mencoretnya atau membersihkannya.
- **X** adalah tombol **Silang**.

## Parameter

- **Lebar** dan **tinggi** kisi, dihitung dalam sel pengubinannya. Untuk kisi persegi itu
  sekadar jumlah kotak ke samping dan ke bawah; pengubinan lain menghitung satuan
  berulangnya, jadi jumlah bidang yang sebenarnya bervariasi.
- **Jenis kisi**: _Persegi_, _Segitiga_, dan _Sarang Lebah_ adalah pengubinan beraturan.
  _Persegi Snub_, _Cairo_, _Heksagonal Besar_, _Oktagonal_, _Layang-layang_, _Floret_,
  _Dodekagonal_, dan _Dodekagonal Besar_ mencampur berbagai bentuk, dan dua pengubinan
  _Penrose_ sama sekali tidak berulang.
- **Kesulitan**: teka-teki _Mudah_ hanya butuh aturannya sendiri — menghitung garis di
  sekeliling sebuah angka, mengingat bahwa sebuah titik punya dua garis atau tidak sama
  sekali, dan tidak menutup lingkaran terlalu dini. _Sedang_ menambahkan penalaran tentang
  pasangan sisi yang bertemu di sebuah titik (paling banyak satu, atau paling sedikit satu,
  dari pasangan itu adalah garis). _Sulit_ membuat fakta-fakta itu berantai dari titik ke
  titik, seperti di sepanjang deretan diagonal angka 2. _Ahli_ juga melacak sisi-sisi yang
  diketahui sama atau berlawanan satu sama lain. Menebak tidak pernah diperlukan; setiap
  teka-teki punya tepat satu solusi.
`,E=e({default:()=>D}),D=`# Magnet

Sebuah persegi panjang telah ditutupi domino, yang hanya ditampilkan sebagai garis luar.
Setiap domino berupa magnet — satu paruhnya kutub \`+\`, paruh lainnya kutub \`−\` — atau
berupa domino polos tanpa kutub sama sekali. Angka-angka di sekeliling tepi menyatakan
berapa banyak kutub \`+\` (di atas kolom dan di kiri baris) dan berapa banyak kutub \`−\` (di
bawah kolom dan di kanan baris) yang dimuat setiap jalur; angka yang tidak ada berarti
tidak ada petunjuk untuk jalur itu. Isi setiap domino sehingga semua hitungannya terpenuhi
dan tidak pernah ada dua kutub sejenis yang bersebelahan: \`+\` tidak boleh menyentuh \`+\` dan
\`−\` tidak boleh menyentuh \`−\` melintasi batas domino. Domino polos bersifat pasif dan boleh
berada di sebelah apa pun.

Kutub sejenis yang bersentuhan ditampilkan merah. Sebuah hitungan berubah merah ketika ia
tidak mungkin lagi dipenuhi — kutubnya sudah terlalu banyak, atau terlalu sedikit sementara
tidak ada tempat tersisa untuk menambah — dan menjadi abu-abu begitu terpenuhi dengan
tepat. Teka-teki selesai ketika setiap domino sudah terisi, setiap hitungan terpenuhi, dan
tidak ada yang merah.

## Kontrol

### Mouse dan sentuh

- **Klik** paruh kosong sebuah domino untuk menjadikannya kutub \`+\` (paruh satunya menjadi
  \`−\`). Klik paruh yang sama lagi untuk membalik magnetnya, dan klik sekali lagi untuk
  mengosongkan dominonya. Mengklik domino polos tidak melakukan apa-apa.
- **Klik kanan** sebuah domino kosong untuk menandainya polos. Klik kanan lagi untuk
  mengganti tanda polos itu dengan tanda tanya, catatan bahwa dominonya sudah pasti sebuah
  magnet; klik kanan ketiga mengosongkannya. Mengklik kanan sebuah magnet tidak melakukan
  apa-apa.
- **Polos** (domino berarsir di samping Urungkan) membuat klik biasa bekerja seperti klik kanan:
  menandai domino polos, lalu tanda tanya, lalu kosong lagi. Tekan lagi untuk kembali menaruh
  magnet.
- **Pecahkan** mengisikan seluruh solusinya.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor di sekitar kisi.
- **Enter** memutar paruh di bawah kursor melalui \`+\`, \`−\`, dan kosong, persis seperti
  klik kiri.
- **Space** memutar domino di bawah kursor melalui polos, tanda tanya, dan kosong, persis
  seperti klik kanan.
- **B** adalah tombol **Polos**.

## Parameter

- **Lebar** dan **tinggi** kisi. Ketika luasnya ganjil, satu kotak tersisa dan digambar
  berarsir; kotak itu bukan milik domino mana pun dan dihitung sebagai netral.
- **Kesulitan**: teka-teki _Mudah_ paling jauh hanya menuntutmu melihat satu jalur atau satu
  domino pada satu waktu — sebuah hitungan yang sudah terpenuhi, sebuah hitungan yang
  membutuhkan semua kandidat yang tersisa, atau sebuah domino yang tak satu pun paruhnya
  bisa menerima kutub tertentu. Teka-teki _Sulit_ juga menuntutmu menalar tentang domino
  utuh yang terbaring di sepanjang sebuah jalur: domino yang pasti magnet menyumbang satu
  kutub dari masing-masing jenis bagaimanapun arahnya, jalur yang hanya menyisakan satu
  tempat polos tidak bisa memuat domino polos secara memanjang, dan seterusnya. Setiap
  teka-teki punya tepat satu solusi.
- **Pangkas petunjuk**: menghapus setiap hitungan yang tidak diperlukan untuk memecahkan
  teka-teki pada tingkat kesulitan yang dipilih, yang membuatnya jauh lebih sulit untuk
  melihat dari mana harus mulai.
`,O=e({default:()=>k}),k=`# Peta

Sebuah peta dibagi menjadi wilayah-wilayah. Warnai setiap wilayah dengan salah satu dari
empat warna sehingga tidak ada dua wilayah yang berbagi sepotong perbatasan berwarna sama.
Wilayah yang hanya bersentuhan di sudut boleh sewarna. Beberapa wilayah sudah diwarnai
untukmu, dan wilayah itu dipilih sedemikian rupa sehingga hanya ada satu cara untuk
menuntaskan petanya.

Dua wilayah bertetangga yang berwarna sama ditandai dengan \`!\` merah pada perbatasan di
antara keduanya.

## Kontrol

**Pecahkan** mewarnai solusi lengkapnya. Peta berkedip ketika setiap wilayah sudah
berwarna dan tidak ada yang merah.

### Mouse dan sentuh

- **Seret** sebuah warna: tekan pada sebuah wilayah (atau pada salah satu contoh warna di
  bawah peta) dan lepaskan pada wilayah lain untuk memberinya warna itu. Menyeret dari
  wilayah kosong, dari ruang kosong di sekitar peta, atau dari contoh warna penghapus akan
  mengosongkan wilayah tempat kamu melepasnya.
- **Klik sebuah contoh warna** untuk memilih warna, lalu **klik** wilayah demi wilayah
  untuk mewarnainya; klik lagi contoh warna yang terpilih untuk membatalkan pilihannya.
- **Seret dengan tombol kanan** sebuah warna ke wilayah kosong untuk membubuhkan titik
  kecil berwarna itu, sebagai catatan bahwa wilayah tersebut _mungkin_ berwarna itu. Satu
  wilayah bisa membawa beberapa titik pensil; menyeret warna yang sama lagi akan menghapus
  titiknya. Dengan sebuah contoh warna terpilih, **klik kanan** biasa pada wilayah kosong
  memasang atau menghapus titiknya.
- **Nomor** (di menu jeda) menampilkan sebuah nomor di setiap wilayah, praktis untuk
  membicarakan sebuah teka-teki dengan orang lain, dan menyembunyikannya lagi.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor di sekitar peta; wilayah tempat kursor berada diberi
  garis tepi. Tombol **1**–**4** mewarnai wilayah itu, **Space** mengosongkannya, dan
  **Enter** mengambil warnanya sehingga kamu bisa membawanya dengan tombol panah dan
  menjatuhkannya dengan **Enter** (atau sebagai titik pensil dengan **Space**). Menekan
  **Enter** dua kali tanpa berpindah akan mengosongkan wilayah itu.
- **L** adalah tombol **Nomor**.

## Parameter

- **Lebar** dan **tinggi** kisi tempat peta digambar, dalam satuan kotak.
- **Wilayah**: berapa banyak wilayah hasil pemotongan peta.
- **Kesulitan**: teka-teki _Mudah_ selalu punya wilayah yang hanya menyisakan satu warna
  baginya. _Sedang_ menambahkan penalaran tentang pasangan wilayah bertetangga yang harus
  berbagi dua warna yang sama di antara keduanya. _Sulit_ membutuhkan rantai deduksi semacam
  itu melintasi peta. Semua ini bisa dipecahkan tanpa menebak. _Ekstrem_ hanya menjanjikan
  bahwa solusinya tunggal; kamu mungkin harus mencoba sebuah warna dan mengikutinya sampai
  ada yang tidak beres.
`,A=e({default:()=>j}),j=`# Ranjau

Sebuah kisi berisi kotak-kotak tertutup menyembunyikan sejumlah ranjau. Bukalah setiap kotak
yang _tidak_ berisi ranjau. Setiap kotak yang kamu buka menunjukkan berapa dari delapan
tetangganya yang berisi ranjau; buka satu ranjau dan kamu kalah.

Yang istimewa pada versi ini: kamu tidak pernah perlu menebak. Tidak ada yang ditentukan
sampai klik pertamamu; ranjau baru ditata sesudah itu, sehingga kotak yang kamu klik pasti
kosong dan seluruh kisi bisa dipecahkan murni dengan penalaran dari sana. Kalau kamu merasa
buntu, di suatu tempat selalu ada kotak aman yang sudah dibuktikan oleh angka-angkanya.

Baris status menunjukkan berapa bendera yang sudah kamu tancapkan dibanding jumlah ranjau,
dan jamnya mulai berjalan pada klik pertamamu. Mengenai ranjau akan membongkar sisanya dan
mencoret setiap bendera yang salah; kamu boleh mengurungkan klik fatal itu lalu melanjutkan,
tetapi kematiannya tetap diingat di baris status.

## Kontrol

### Mouse dan sentuh

- **Klik** kotak tertutup untuk membukanya. Membuka kotak kosong (tanpa ranjau di
  sekitarnya) ikut membuka tetangganya, dan begitu seterusnya keluar.
- **Klik kanan** kotak tertutup untuk menancapkan bendera pada ranjau yang kamu curigai, dan
  sekali lagi untuk mencabutnya. Kotak berbendera tidak bisa terbuka tanpa sengaja.
- **Klik sebuah angka** yang sudah dikelilingi bendera sebanyak yang benar untuk membuka
  semua tetangga tertutupnya sekaligus. **Klik tengah** pada angka itu juga bisa.
- **Petunjuk** membuka satu kotak yang aman — atau mencabut bendera yang tidak ada ranjau di
  bawahnya — dan menyerahkan sisa kisi kepadamu. Dengan beberapa petunjuk, kemenangan dan
  kreditnya tetap milikmu.
- **Pecahkan** membongkar seluruh tata letaknya dan memberi bendera pada setiap ranjau. Ini
  tidak dihitung sebagai kemenanganmu sendiri.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor di dalam kisi.
- **Enter** bekerja seperti klik kiri pada kotak di bawah kursor: ia membuka kotak tertutup,
  atau membersihkan sekeliling angka yang benderanya sudah lengkap.
- **Space** menancapkan atau mencabut bendera, sama seperti klik kanan.

## Parameter

- **Lebar** dan **tinggi** kisi.
- **Ranjau**: berapa banyak ranjau yang disembunyikan. Kamu boleh memberi persentase seperti
  \`20%\` alih-alih jumlah. Kepadatan yang sangat tinggi membuat kisi yang dapat dipecahkan
  jadi lama ditemukan.
- **Pastikan bisa dipecahkan**: bila aktif (bawaannya begitu), tata letaknya dijamin bisa
  dipecahkan dari klik pertamamu tanpa menebak. Matikan untuk kisi acak biasa, yang bisa
  meninggalkanmu dengan untung-untungan di akhir.
`,M=e({default:()=>N}),N=`# Jaringan

Sebuah jaringan kabel dibentangkan di atas kisi ubin persegi, lalu setiap ubin diputar
sembarangan. Putar kembali ubin-ubinnya sampai semuanya tergabung menjadi satu jaringan:
setiap ujung kabel harus bertemu kabel di ubin tetangganya, dan tidak boleh ada kabel yang
tertinggal menunjuk ke dinding. Jaringan yang selesai berbentuk pohon, jadi tanpa lingkaran
tertutup.

Ubin yang sudah terhubung ke ubin sumber di tengah kisi digambar biru sebagai penuntun;
sisanya tetap abu-abu. Kabel yang menjadi bagian dari sebuah lingkaran digambar merah. Garis
hitam tebal di antara ubin adalah penghalang: tidak ada kabel yang bisa melintasinya, dan
itu memberimu petunjuk tentang bagaimana ubin di kedua sisinya harus duduk. Baris status
menunjukkan berapa ubin yang sedang teraliri daya.

## Kontrol

### Mouse dan sentuh

- **Klik** sebuah ubin untuk memutarnya berlawanan arah jarum jam, **klik kanan** untuk
  memutarnya searah jarum jam.
- **Klik tengah** sebuah ubin untuk memasang **kunci** padanya begitu kamu yakin. Ubin terkunci diberi
  arsiran dan tidak akan berputar sampai kamu mengklik tengah lagi untuk membuka kuncinya. Klik kanan
  memutar ubinnya alih-alih menguncinya, jadi klik tengah adalah caranya.
- **Kunci** (tombol gembok di samping Urungkan) membuat klik biasa mengunci atau membuka kunci ubin
  alih-alih memutarnya, lebih mudah daripada klik tengah di trackpad. Klik kanan tetap
  memutar ubin searah jarum jam. Tekan lagi untuk kembali memutar.
- **Acak** memutar setiap ubin yang tidak terkunci ke arah acak yang baru, untuk suasana
  segar saat sebuah teka-teki terasa mentok.
- Pada kisi bertepi sambung, empat **tombol panah** menggeser tampilan, sehingga ubin di
  tepi yang berseberangan bisa didekatkan.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor di dalam kisi.
- **Enter** atau **A** memutar ubin di bawah kursor berlawanan arah jarum jam, **D**
  memutarnya searah jarum jam dan **F** memutarnya setengah putaran.
- **Space**, **S** atau **L** mengunci atau membuka kunci ubin di bawah kursor. Dengan
  mouse, **Shift-klik** juga mengunci ubin, persis seperti klik tengah.
- **K** adalah tombol **Kunci** dan **J** tombol **Acak**.
- Pada kisi bertepi sambung, **Shift + tombol panah** menggeser tampilan (sama seperti empat
  tombol panah tadi) sehingga ubin di tepi yang berseberangan bisa dilihat berdampingan.
  **Ctrl + tombol panah** memindahkan ubin sumber tempat sorotan biru menyebar.

## Parameter

- **Lebar** dan **tinggi** kisi dalam satuan ubin.
- **Tepi bersambung**: kabel boleh keluar dari satu tepi kisi dan berlanjut dari tepi
  seberangnya.
- **Peluang penghalang**: angka dari 0 sampai 1 yang menyatakan bagian dari sisi tanpa kabel
  yang mendapat penghalang. Penghalang tidak pernah mengubah tata letak kabelnya: seed acak
  yang sama selalu memberi kisi yang sama, jadi menaikkan peluangnya hanya menambah
  petunjuk.
- **Pastikan solusi unik**: biasanya teka-tekinya disusun supaya tepat satu susunan ubin
  yang cocok. Matikan ini untuk pembuatan yang lebih cepat, dengan sesekali muncul bagian
  yang ambigu.
`,P=e({default:()=>F}),F=`# Geser Jaringan

Setiap ubin membawa sepotong kabel: bentangan lurus, siku, pertigaan, atau ujung buntu
bertitik. Disusun dengan benar, potongan-potongan itu membentuk satu jaringan yang
menjangkau setiap ubin dari sumber daya di ubin tengah yang berarsir, tanpa lingkaran dan
tanpa lengan yang menunjuk ke ruang kosong. Kisinya sudah diacak dengan menggeser seluruh
baris dan kolom, jadi hanya begitu pula cara membetulkannya: tidak ada ubin yang bisa
diputar, hanya dipindahkan.

Ubin yang sedang menerima daya digambar biru; sisanya tetap abu-abu. Dinding hitam tebal di
antara ubin adalah penghalang. Tidak ada yang bisa tersambung melintasi penghalang, jadi
penghalang memberitahumu di mana jaringan yang selesai pasti tidak punya sambungan.

## Kontrol

### Mouse dan sentuh

- **Klik** panah di samping sebuah baris atau kolom untuk menggeser seluruh jalur itu satu
  langkah ke arah yang ditunjuk panahnya. Ubin yang terdorong keluar di satu ujung masuk
  lagi dari ujung lain jalur yang sama. **Klik kanan** panahnya untuk menggeser jalur itu ke
  arah sebaliknya.
- Baris dan kolom tengah tidak punya panah: sumber dayanya tidak pernah berpindah.
- **Pecahkan** langsung melompat ke jaringan yang sudah jadi supaya kamu bisa
  membandingkannya dengan usahamu sendiri.

### Papan Ketik (Keyboard)

- **Tombol panah** menjalankan sorotan mengelilingi cincin panah.
- **Enter** menggeser jalur yang tersorot ke arah panahnya dan **Space** menggesernya ke
  arah sebaliknya.

## Parameter

- **Lebar** dan **tinggi** kisi.
- **Tepi bersambung**: bila aktif, tepi kanan berlanjut di kiri dan tepi bawah di atas,
  sehingga kabel (dan penghalang) bisa melintasi tepi kisi. Bingkai putus-putus menandai
  kisi bertepi sambung; bingkai tebal yang utuh berarti ada dinding di sekelilingnya.
- **Peluang penghalang**: berapa banyak sisi ubin yang tak terpakai mendapat penghalang,
  dari 0 (tidak ada) sampai 1 (setiap sisi yang tidak dipakai jaringan yang sudah jadi). Makin banyak
  penghalang, makin mudah teka-tekinya. Penghalangnya dipilih terlepas dari bagian kisi yang
  lain, jadi seed acak yang sama dengan peluang penghalang lebih tinggi memberi teka-teki
  yang sama dengan lebih banyak petunjuk.
- **Jumlah langkah pengacakan**: biarkan 0 untuk pengacakan menyeluruh, atau isi sebuah
  angka untuk mengacak dengan tepat sebanyak itu geseran. Tujuanmu lalu menemukan dan
  membalikkannya; baris status menunjukkan targetnya.
`,I=e({default:()=>L}),L=`# Pola

Setiap kotak pada kisi diam-diam berwarna hitam atau putih. Angka di samping tiap baris dan
di atas tiap kolom memberitahumu panjang deretan kotak hitam pada jalur itu, berurutan,
dengan sedikitnya satu kotak putih di antara dua deretan yang bersebelahan. Warnai kotak
hitamnya sehingga setiap baris dan setiap kolom cocok dengan angkanya. Teka-teki semacam ini
biasanya disebut nonogram atau picross.

Gambarnya di sini dibuat acak, jadi tidak ada citra yang perlu ditebak: semuanya harus
disimpulkan dari angka. Setiap teka-teki diperiksa lebih dulu untuk memastikan ia bisa
dipecahkan dengan menalar satu baris atau kolom pada satu waktu, jadi kamu tidak pernah
perlu coba-coba.

Angka sebuah jalur berubah abu-abu begitu deretan hitam pada jalur itu cocok dengannya, dan
merah bila deretan yang sudah kamu selesaikan mustahil cocok dengan angkanya. Teka-tekinya
selesai ketika setiap baris dan kolom cocok dengan angkanya; titik hanya ada untuk membantu
ingatanmu.

## Kontrol

### Mouse dan sentuh

- **Klik** sebuah kotak untuk mewarnainya hitam; klik lagi kotak hitam itu untuk
  mengosongkannya.
- **Klik kanan** untuk menandai kotak dengan titik, artinya kotak itu diketahui putih;
  klik kanan kotak bertitik untuk mengosongkannya.
- **Seret** untuk mewarnai satu garis lurus kotak hitam sekaligus, dan
  **seret dengan tombol kanan** untuk memasang sederet titik. Hanya kotak yang keadaannya
  sama dengan kotak tempatmu mulai yang terpengaruh, jadi menyeret sederet titik di atas
  kotak hitammu tidak mengusiknya.
- **Klik tengah** sebuah kotak untuk mengembalikannya ke keadaan tak diketahui. Dengan mouse,
  menyeret sambil menahan roda gulir mengosongkan seluruh persegi panjang, apa pun isinya.
- **Hapus** (tombol penghapus di samping Urungkan) membuat klik biasa melakukan hal yang sama:
  klik sebuah kotak untuk menghapusnya, atau seret untuk mengosongkan seluruh persegi
  panjang. Tekan lagi untuk kembali mewarnai hitam.
- **Petunjuk** mengisi satu kotak, selalu kotak yang bisa dipastikan oleh satu baris atau
  kolom saja — atau membetulkan kotak yang bertentangan dengan jawabannya. Teka-tekinya tetap
  berjalan, dan dengan beberapa petunjuk, kemenangan dan kreditnya tetap milikmu.
- **Pecahkan** mengisikan seluruh gambarnya untukmu.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor.
- **Enter** mewarnai atau menghapus hitam di bawah kursor dan **Space** memasang atau
  melepas titik.
- Tahan **Ctrl** sambil menggerakkan kursor untuk mewarnai hitam sepanjang jalan, **Shift**
  untuk memasang titik, atau keduanya untuk mengosongkan.
- Dengan mouse, **Shift-klik** mengosongkan kotak persis seperti klik tengah.
- **E** adalah tombol **Hapus**.

## Parameter

- **Lebar** dan **tinggi** kisi. Ukuran yang tersedia berkisar dari 10×10 sampai 30×30; kisi yang lebih
  besar butuh waktu sedikit lebih lama untuk dibuat.
`,R=e({default:()=>z}),z=`# Mutiara

Sebuah kisi kotak, sebagian memuat mutiara hitam atau putih. Gambar satu lingkaran tertutup
yang berjalan dari pusat kotak ke pusat kotak, mendatar atau menegak, tanpa pernah
bersilangan atau bercabang. Lingkarannya tidak harus melewati setiap kotak, tetapi harus
melewati setiap mutiara:

- pada **mutiara hitam** lingkarannya berbelok, lalu berjalan lurus melewati kedua kotak di
  sebelah mutiara itu sepanjang lingkaran;
- pada **mutiara putih** lingkarannya berjalan lurus, dan berbelok di sedikitnya satu dari
  dua kotak di sebelah mutiara itu sepanjang lingkaran.

Hanya kotak yang dilewati lingkaran tepat sebelum dan sesudah sebuah mutiara yang dihitung,
bukan setiap kotak yang menyentuhnya di kisi.

Mutiara yang aturannya sudah dilanggar mendapat halo merah. Begitu ada lingkaran tertutup,
setiap ruas di luarnya digambar merah, begitu pula setiap kotak dengan tiga ruas atau lebih.

## Kontrol

**Pecahkan** menggambar seluruh lingkarannya. Teka-tekinya selesai ketika lingkarannya
berupa satu sirkuit tertutup tunggal dan tidak ada yang merah.

### Mouse dan sentuh

- **Klik** sebuah sisi kisi (dekat batas antara dua kotak) untuk menggambar ruas lingkaran
  di situ; klik lagi untuk menghapusnya.
- **Seret** melewati serangkaian kotak untuk menggambar sederet ruas sekaligus. Menyeret di
  sepanjang ruas yang sudah ada akan menghapusnya; seretan yang mulai di atas ruas yang sudah ada
  lalu berlanjut ke kotak kosong akan menghapus dulu, baru menggambar. Kembalilah melewati kotak
  yang tadi kamu lalui untuk memendekkan lintasannya sebelum melepas; kembalilah ke kotak tempat
  kamu mulai untuk menutup lingkarannya.
- **Klik kanan** sebuah sisi kisi untuk menaruh silang kecil yang berarti "tidak ada ruas di
  sini"; ruas tidak bisa digambar melintasi silang sampai silangnya dihapus.
  **Seret dengan tombol kanan** melewati sederet kotak untuk menaruh silang di setiap sisi
  yang dilewati.
- **Silang** (tombol silang di samping Urungkan) membuat klik biasa menaruh atau melepas silang, dan
  seretan menaruh sederet silang: seperti saat menggambar, seretan yang mulai di atas silang
  melepasnya dulu, dan ia melewati sisi mana pun yang sudah punya ruas. Tekan lagi untuk kembali
  menggambar lingkaran.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor. **Ctrl+panah** menggambar atau menghapus ruas di
  sisi kotak kursor itu, **Shift+panah** menaruh atau melepas silang di sana. **Enter**
  memulai seretan papan ketik dari kotak kursor: bergeraklah dengan tombol panah lalu tekan
  Enter lagi untuk menetapkan lintasannya, atau **Space** untuk membatalkannya.
- **X** adalah tombol **Silang**; selama aktif, seretan papan ketik juga menaruh silang.

## Parameter

- **Lebar** dan **tinggi** kisi, dalam satuan kotak (masing-masing minimal lima).
- **Kesulitan**: teka-teki _Mudah_ dipecahkan dengan menalar tiap mutiara dan
  kotak-kotak tepat di sebelahnya. Teka-teki _Rumit_ juga menuntutmu menyadari kapan sebuah
  ruas akan menutup lingkaran kecil terlalu dini sehingga mutiara lain terlantar. (Kisi 5×5
  Rumit dibuat sebagai Mudah, seperti pada aslinya.)
- **Izinkan tak terpecahkan**: pertahankan setiap mutiara yang didukung lingkarannya
  alih-alih memangkasnya menjadi himpunan minimal yang solusinya unik. Opsi pengujian
  warisan dari versi aslinya.
`,B=e({default:()=>V}),V=`# Pasak

Sebuah papan penuh pasak dengan satu lubang kosong, atau beberapa pada papan acak. Sebuah pasak boleh melompat mendatar
atau menegak melewati pasak tetangganya ke lubang kosong tepat di seberangnya; pasak yang
dilompati lalu diambil. Teruslah melompat sampai tinggal satu pasak di papan.

Ini permainan lama peg solitaire. Papan **Silang** adalah tata letak Inggris yang sudah
dikenal, papan **Segi Delapan** adalah versi Eropa (yang mulai dengan lubang kosongnya tidak
di tengah, karena dari tengah papan itu tidak bisa diselesaikan), dan papan **Acak** adalah
bentuk-bentuk ganjil yang ditumbuhkan komputer. Area kosong tanpa lubang memang bukan bagian
dari papan.

Kamu tidak bisa mentok selamanya: kalau tidak ada lompatan tersisa dan pasaknya masih lebih
dari satu, permainannya berakhir, tetapi Urungkan membawamu mundur sejauh yang kamu mau.
Baris status menghitung pasak yang tersisa dan langkah yang sudah dibuat.

## Kontrol

### Mouse dan sentuh

- **Seret** sebuah pasak dan jatuhkan di lubang kosong yang berjarak tepat dua kotak, dalam
  satu garis lurus melewati pasak lain. Jatuhan lain mana pun mengembalikan pasaknya.
- Atau **klik** sebuah pasak untuk mengangkatnya (ia berubah oranye dan lubang pendaratan
  yang mungkin ditandai), lalu klik lubang tujuan lompatannya. Mengklik pasak yang sama lagi
  akan menurunkannya.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor di sekitar papan.
- **Enter** atau **Space** pada sebuah pasak akan mengangkatnya; tombol panah lalu
  melompatkannya ke arah itu, kalau itu langkah yang sah, dan **Enter** lagi menurunkannya
  kembali.

## Parameter

- **Lebar** dan **tinggi** papan, masing-masing minimal 4.
- **Jenis papan**: _Silang_ dan _Segi Delapan_ adalah tata letak tradisional dan hanya
  tersedia pada 7×7. _Acak_ menghasilkan bentuk papan yang berbeda setiap kali, selalu
  bentuk yang bisa disusutkan menjadi satu pasak karena dibangunnya dengan menjalankan
  lompatan secara mundur dari satu pasak.
`,H=e({default:()=>U}),U=`# Jangkauan

Sebagian kotak pada kisi memuat angka. Warnai kotak menjadi hitam sehingga empat hal berlaku
sekaligus:

- tidak ada kotak berangka yang hitam;
- tidak ada dua kotak hitam yang bersentuhan sisi (bersentuhan sudut boleh);
- semua kotak putih membentuk satu wilayah tersambung, menyatu sisi ke sisi;
- setiap angka menghitung kotak putih yang bisa dilihat kotaknya sendiri: dirinya sendiri,
  ditambah semua yang ada dalam garis lurus ke atas, bawah, kiri dan kanan sampai terhalang
  kotak hitam atau tepi kisi.

Ini _Kurodoko_ dari Nikoli, dikenal juga sebagai _Kuromasu_ atau _Where is Black Cells_.
Angka yang sudah melihat cukup banyak kotak pasti punya kotak hitam tepat di ujung setiap
deretan yang dilihatnya; angka yang akan melihat terlalu banyak seandainya satu kotak tak
diketahui itu putih justru punya kotak hitam di sana. Mewarnai kotak yang menjadi
satu-satunya penghubung antara dua kelompok kotak putih tidak pernah benar. Setiap teka-teki
bisa diselesaikan dengan penalaran seperti itu; tidak perlu menebak.

Kesalahan tampak merah: kotak hitam yang bersentuhan mendapat bingkai merah mengelilingi
kelompoknya, kotak putih yang terputus dari wilayah utama mendapat garis luar merah, dan
sebuah angka berubah merah kalau ia tidak mungkin lagi melihat cukup kotak atau sudah pasti
melihat terlalu banyak. Teka-tekinya selesai ketika tidak ada aturan yang dilanggar; kamu
tidak perlu memberi titik pada kotak putih.

## Kontrol

### Mouse dan sentuh

- **Klik** sebuah kotak untuk mewarnainya hitam. Klik lagi untuk mengubahnya jadi titik
  (kotak yang kamu ketahui putih), dan sekali lagi untuk mengosongkannya.
- **Klik kanan** memutar urutannya ke arah sebaliknya: titik, lalu hitam, lalu kosong.
- **Seret** untuk mewarnai beberapa kotak sekaligus, dan
  **seret dengan tombol kanan** untuk menyapunya ke arah sebaliknya. Hanya kotak yang
  keadaan awalnya sama dengan kotak pertama yang terpengaruh, jadi sapuan titik tidak
  mengusik kotak hitammu.
- **Hapus** (tombol penghapus di samping Urungkan) membuat klik justru mengosongkan kotak, dan
  seretan mengosongkan setiap kotak hitam dan titik yang dilewatinya, apa pun isinya.
  Tekan lagi untuk kembali mewarnai.
- **Petunjuk** mengisi satu kotak yang sudah pasti dari apa yang ada di papan — atau
  membetulkan kotak yang bertentangan dengan jawabannya. Teka-tekinya tetap berjalan, dan
  dengan beberapa petunjuk, kemenangan dan kreditnya tetap milikmu.
- **Pecahkan** mengisi seluruh kisi dan memberi titik pada setiap kotak putih.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor di dalam kisi.
- **Enter** bekerja seperti klik kiri pada kotak di bawah kursor dan **Space** seperti
  klik kanan.
- **E** adalah tombol **Hapus** dan **H** tombol **Petunjuk**.

## Parameter

- **Lebar** dan **tinggi** kisi. Ukuran yang tersedia berkisar dari 9×6 sampai 16×11; ukuran sampai
  30×30 masih bisa dibuat, meskipun kisi mungil berisi satu atau dua kotak tidak punya
  teka-teki yang adil.
`,W=e({default:()=>G}),G=`# Persegi Panjang

Sebagian kotak pada kisi memuat angka. Bagilah seluruh kisi menjadi persegi panjang sehingga
setiap persegi panjang memuat tepat satu angka, dan angka itu adalah luas persegi panjangnya
(lebar dikali tinggi). Angka 6, misalnya, duduk dalam blok 1×6, 2×3, 3×2 atau 6×1; yang
mana, dan di mana letak angkanya di dalam blok itu, harus kamu simpulkan dari tetangganya.

Teka-tekinya dibuat secara acak, dan secara bawaan angkanya ditempatkan sehingga hanya satu
pembagian kisi yang cocok. Teka-teki aslinya berasal dari majalah Jepang Nikoli, tempat ia
dikenal sebagai Shikaku.

## Kontrol

### Mouse dan sentuh

- **Seret** melintasi sebuah area untuk menggambar persegi panjang mengelilinginya: garis
  luarnya digambar dan garis apa pun di dalamnya dihapus. Menyeret sepanjang sebuah garis
  kisi hanya menggambar garis itu saja.
- **Klik** sebuah garis kisi untuk menambah atau menghapus satu sisi itu.
- **Seret dengan tombol kanan** di atas sebuah area untuk menghapus garis di dalamnya tanpa
  mengusik garis luarnya. **Klik kanan** pada garis kisi menambah atau menghapusnya persis
  seperti klik biasa.
- **Hapus** (tombol penghapus di samping Urungkan) membuat seretan biasa juga menghapus: seret di atas
  sebuah area untuk menghapus garis di dalamnya, atau klik sebuah garis kisi untuk
  menghapusnya. Selama aktif, klik tidak pernah menambah garis. Tekan lagi untuk kembali
  menggambar.
- **Pecahkan** mengisikan seluruh pembagiannya untukmu.

Selagi kamu menyeret, persegi panjang yang akan kamu gambar ditampilkan garis luarnya dan
ukurannya muncul di baris status. Persegi panjang jadi yang ukurannya tepat diberi arsiran.
Persegi panjang tertutup yang tidak mungkin benar akan ditandai: angkanya berubah merah
kalau ukurannya salah untuknya, dan ia diarsir silang kalau di dalamnya tidak ada angka sama
sekali. Teka-tekinya lengkap ketika setiap kotak berada di dalam persegi panjang yang benar.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor.
- **Enter** mulai menyeret sebuah persegi panjang dari kursor; gerakkan kursor ke sudut
  seberangnya lalu tekan **Enter** lagi untuk menggambarnya.
- **Space** bekerja dengan cara yang sama tetapi justru menghapus bagian dalam persegi
  panjangnya.
- **E** adalah tombol **Hapus**.

## Parameter

- **Lebar** dan **tinggi** kisi. Ukuran yang tersedia berkisar dari 7×7 sampai 19×19.
- **Faktor perluasan** — buat kisi yang lebih kecil lalu regangkan ke ukuran yang diminta,
  sehingga teka-tekinya punya persegi panjang yang lebih sedikit tetapi lebih besar. 0
  (bawaannya) berarti tanpa peregangan; 0.5 membuat kisi awalnya dua pertiga dari ukuran
  akhir di tiap arah. Nilai besar hanya menyisakan segelintir persegi panjang dan membuat
  teka-tekinya sepele.
- **Pastikan solusi unik** — biasanya aktif. Mematikannya menempatkan angka di mana saja di
  dalam persegi panjangnya, yang lebih cepat dan bisa menghasilkan teka-teki dengan beberapa
  jawaban; pembagian sah mana pun lalu dihitung selesai.
`,se=e({default:()=>K}),K=`# Warna Sama

Papan dipenuhi kotak-kotak berwarna. Pilih sekelompok dua kotak atau lebih dengan warna yang
sama dan saling bersentuhan pada sisinya, lalu buang kelompok itu; kotak di atas celahnya
akan jatuh, dan begitu sebuah kolom kosong, kolom-kolom di sebelah kanannya bergeser
menutupnya. Bersihkan seluruh papan untuk menang. Kalau masih ada kotak tersisa tetapi tidak
ada dua kotak bersentuhan yang sewarna, tidak ada lagi yang bisa kamu lakukan — urungkan
langkah dan coba urutan lain.

Kelompok besar jauh lebih berharga daripada kelompok kecil: membuang _n_ kotak menghasilkan
(_n_ − 2)² poin dengan sistem skor bawaan, jadi sepasang kotak tidak bernilai apa pun, tiga
kotak satu poin, sepuluh kotak 64. Baris status menampilkan skormu dan, selama sebuah
kelompok terpilih, berapa kotak isinya dan berapa poin yang akan kamu dapat.

Setiap papan yang dibuat (kecuali kamu mematikan opsinya) dirancang supaya _bisa_
dibersihkan sepenuhnya — meski menemukan urutan yang sekaligus menghasilkan skor bagus
adalah urusanmu sendiri.

Tidak ada tombol Pecahkan: komputer tahu papan ini bisa dibersihkan, tetapi tidak akan
memberitahumu caranya.

## Kontrol

### Mouse dan sentuh

- **Klik** sebuah kotak untuk memilih seluruh kelompok tempat kotak itu berada; kelompoknya
  digambar lebih terang dengan garis tepi tebal. **Klik lagi kelompok yang terpilih** untuk
  membuangnya. Mengklik di tempat lain justru memindahkan pilihanmu.
- **Klik kanan** kelompok yang terpilih untuk membatalkan pilihan.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor di papan (berputar kembali di tepi).
- **Enter** memilih kelompok di bawah kursor, dan menekannya lagi membuang kelompok itu.
- **Space** pada kelompok yang terpilih membatalkan pilihan.

## Parameter

- **Lebar** dan **tinggi** papan.
- **Jumlah warna**, dari 3 sampai 9 (2 boleh dipakai kalau jaminan bisa dipecahkan
  dimatikan). Makin banyak warna, makin kecil kelompoknya dan makin sulit papannya.
- **Sistem skor**: _(n−2)²_, yang bawaan, atau _(n−1)²_, yang juga memberi nilai untuk
  pasangan.
- **Pastikan bisa dipecahkan**: kalau dicentang, papan dibuat mundur dari papan kosong
  sehingga setidaknya ada satu urutan pembersihan yang berhasil. Hilangkan centangnya untuk
  papan acak biasa, yang lebih cepat dibuat dan cenderung punya wilayah lebih besar, tetapi
  mungkin mustahil dibersihkan.
`,ce=e({default:()=>le}),le=`# Penunjuk Arah

Setiap kotak membawa sebuah panah, dan beberapa kotak membawa angka. Sambungkan semua kotak
menjadi satu lintasan bernomor 1 sampai N (N adalah jumlah kotaknya) sehingga penerus setiap
kotak berada di suatu tempat sepanjang arah panahnya: kotak bernomor 1 menunjuk ke arah 2,
yang menunjuk ke arah 3, dan seterusnya. Penerus boleh berjarak berapa pun ke arah panah,
tidak harus tetangga sebelah. Kotak terakhir, yang ditandai bintang, tidak menunjuk ke mana
pun.

Angka pertama dan terakhir selalu ditampilkan, ditambah cukup banyak angka lain agar
lintasannya unik. Setiap teka-teki punya tepat satu solusi dan bisa ditemukan hanya dengan
penalaran.

Kesalahan ditampilkan merah: dua kotak yang diberi nomor sama, sebuah angka yang penerusnya
tidak searah panahnya, atau rantai yang melewati angka yang sudah diberikan. Teka-teki
selesai ketika angka 1 sampai N mengalir melewati setiap kotak tanpa satu pun warna merah.

## Kontrol

### Mouse dan sentuh

- **Seret** dari satu kotak ke kotak lain searah panahnya untuk menjadikan kotak kedua
  penerus kotak pertama. **Seret dengan tombol kanan** bekerja sebaliknya: dari sebuah kotak
  ke kotak yang seharusnya datang sebelum kotak itu.
- Ketika dua kotak yang tersambung memuat sebuah angka, angka itu menyebar ke sepanjang
  rantai dan ditampilkan biru. Rantai yang belum punya angka diberi label huruf beserta
  selisihnya (\`a\`, \`a+1\`, \`a+2\`, ...); begitu rantai itu menyentuh kotak berangka, hurufnya
  berubah menjadi angka. Menyambungkan rantai ke kotak yang sudah tersambung akan
  menggantikan sambungan lamanya.
- Setiap kotak yang masih butuh pendahulu menampilkan titik kecil di sudut kiri bawahnya,
  dan sebuah panah memudar begitu kotaknya punya penerus. Jadi tugasmu selalu menyambungkan
  panah tebal ke kotak bertitik.
- **Klik kanan** sebuah kotak untuk menghapus kedua sambungannya. **Seret** kotak itu keluar
  dari papan untuk hasil yang sama, atau **seret dengan tombol kanan** keluar dari papan
  untuk membongkar seluruh rantainya.
- **Putus** (tombol rantai putus di samping Urungkan) membuat klik pada sebuah kotak membongkar seluruh
  rantainya, setiap sambungannya, dan menyeret kotak keluar dari papan juga begitu. Menyeret
  dari kotak ke kotak tetap menyambungkannya. Tekan lagi untuk mematikannya.
- **Pecahkan** mengisi lintasan lengkapnya.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor.
- **Enter** pada sebuah kotak memulai sambungan dari kotak itu; pindahkan kursor ke
  penerusnya lalu tekan **Enter** lagi untuk membuat sambungannya (tekan di kotak yang sama
  untuk membatalkan).
- **Space** atau **X** menghapus sambungan kotak di bawah kursor; **Shift + X** membongkar
  seluruh rantainya.
- **B** adalah tombol **Putus**.

## Parameter

- **Lebar** dan **tinggi** kisi, dari 2 sampai 12 kotak (2×2 terlalu kecil untuk bisa
  dimainkan).
- **Mulai dan berakhir di sudut**: kalau diaktifkan, 1 selalu berada di kotak kiri atas dan N
  di kanan bawah. Kalau tidak, kedua ujungnya ditempatkan acak, meski keduanya tetap
  ditampilkan.
`,ue=e({default:()=>de}),de=`# Tunggal

Setiap kotak pada kisi berisi sebuah angka. Hitamkan sebagian kotak (sehingga angkanya
tersembunyi) supaya tiga hal berlaku sekaligus:

- tidak ada angka yang muncul lebih dari sekali di antara kotak putih pada baris atau kolom
  mana pun;
- tidak ada dua kotak hitam yang bersentuhan pada sisinya (bersentuhan di sudut tidak
  apa-apa);
- semua kotak putih membentuk satu wilayah tersambung, menyatu sisi demi sisi.

Ini _Hitori_ dari Nikoli. Pembukaan yang bagus adalah mencari dua angka sama yang dipisahkan
satu kotak: salah satu dari pasangan itu pasti hitam, jadi kotak di tengahnya pasti putih.
Dua angka sama yang berdampingan berarti setiap angka sama lainnya yang sebaris atau
sekolom dengan keduanya pasti hitam.

Kesalahan muncul dengan warna merah: kotak hitam yang bersentuhan mendapat bingkai merah di
sekeliling kelompoknya, kotak putih yang terputus dari wilayah utama mendapat garis tepi
merah, dan dua kotak berlingkaran berangka sama yang sebaris atau sekolom juga merah.

Teka-teki selesai ketika tidak ada aturan yang dilanggar; kamu tidak perlu melingkari kotak
putihnya.

## Kontrol

### Mouse dan sentuh

- **Klik** sebuah kotak untuk menghitamkannya; klik lagi untuk mengembalikannya.
- **Klik kanan** menggambar lingkaran di sekeliling sebuah angka untuk mencatat bahwa kotak
  itu pasti putih; klik kanan lagi untuk menghapus lingkarannya. Klik maupun klik kanan sama-sama
  menghapus tanda apa pun yang sudah ada pada sebuah kotak.
- **Pecahkan** mengisi seluruh kisi dan melingkari setiap kotak putih.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor di kisi (berputar kembali di tepi).
- **Enter** menghitamkan atau mengembalikan kotak di bawah kursor, dan **Space** melingkari
  atau menghapus lingkarannya.

## Parameter

- **Lebar** dan **tinggi** kisi, dari 2 sampai 20 untuk teka-teki yang dibuat otomatis.
- **Kesulitan**: teka-teki _Mudah_ hanya butuh penalaran langsung — kotak hitam memaksa
  tetangganya putih, angka berlingkaran memaksa kembarannya hitam, pola
  pasangan-berjarak-satu dan pasangan-berdampingan, kotak putih yang hanya punya satu jalan
  keluar, serta pola-pola kecil di sudut. Teka-teki _Rumit_ juga menuntutmu menyadari kapan
  menghitamkan sebuah kotak akan memotong wilayah putih menjadi dua, dan memakai pola
  dua pasangan yang bergeser satu kotak. Setiap teka-teki punya tepat satu solusi.
`,fe=e({default:()=>pe}),pe=`# Enam Belas

Teka-teki geser tanpa kotak kosong. Setiap kotak berisi ubin bernomor, dan alih-alih menggeser
satu ubin saja, kamu menggeser seluruh baris atau kolom sejauh satu langkah. Ubin yang
terdorong keluar dari tepi langsung masuk lagi di ujung seberang pada barisan yang sama,
seolah-olah kisinya melingkar seperti donat. Urutkan ubinnya supaya menghitung naik dari 1
di sudut kiri atas, dari kiri ke kanan lalu baris demi baris.

## Kontrol

### Mouse dan sentuh

- **Klik** salah satu panah di sekeliling tepi untuk menggeser baris atau kolom itu satu
  langkah ke arah yang ditunjuk panahnya. **Klik kanan** sebuah panah untuk menggeser
  barisan itu ke arah sebaliknya.
- **Pecahkan** cuma mengganti kisinya dengan kisi yang sudah terurut. Ia tidak akan
  menunjukkan jalannya, tetapi memberimu papan bersih untuk mencoba-coba manuver.

### Papan Ketik (Keyboard)

- **Tombol panah** menggeser sorotan mengelilingi cincin panah di tepi.
- **Enter** menggeser barisan yang disorot ke arah panahnya dan **Space** menggesernya ke
  arah sebaliknya.

## Parameter

- **Lebar** dan **tinggi** kisi. Pada kisi yang kedua sisinya ganjil, hanya separuh dari
  semua susunan yang bisa dicapai, jadi generatornya hanya pernah memberikan yang bisa.
- **Jumlah langkah pengacakan**: biarkan di 0 untuk susunan yang sepenuhnya acak, atau isi
  sebuah angka untuk mengacak kisi terurut dengan tepat sebanyak itu geseran tunggal. Tugasmu
  lalu mencari tahu geseran mana saja yang dilakukan dan membatalkannya dalam jumlah
  langkah yang sama; makin banyak langkah pengacakan yang kamu minta, makin besar
  kemungkinan ada solusi yang lebih pendek.
`,me=e({default:()=>he}),he=`# Garis Miring

Sebuah kisi berisi kotak-kotak kosong dengan angka berlingkaran di beberapa sudutnya. Gambar
satu garis diagonal melalui setiap kotak, miring ke arah mana saja, sehingga:

- setiap angka berlingkaran disentuh tepat sebanyak itu garis pada titik sudutnya (angka 4
  duduk di tengah sebuah silang, angka 0 membuat setiap garis di dekatnya condong menjauh
  darinya);
- garis-garisnya tidak pernah menyambung menjadi lingkaran tertutup.

Angka yang sudah kelebihan garis, atau yang tidak mungkin lagi mendapat cukup garis, berubah
merah, begitu pula setiap garis yang menjadi bagian dari sebuah lingkaran tertutup.
Teka-teki selesai ketika setiap kotak punya garis dan tidak ada yang merah.

## Kontrol

### Mouse dan sentuh

- **Klik** sebuah kotak untuk menggambar \`\\\` di dalamnya; klik lagi untuk mengubahnya
  menjadi \`/\`, dan sekali lagi untuk mengosongkannya.
- **Klik kanan** memutar urutannya ke arah sebaliknya: \`/\`, lalu \`\\\`, lalu kosong. Jadi
  sebuah kotak bisa diatur ke arah mana pun cuma dengan satu tombol saja.
- **Pecahkan** mengisi seluruh kisi.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor di kisi.
- **Enter** memutar kotak di bawah kursor seperti klik kiri, dan **Space** memutarnya
  seperti klik kanan.

## Parameter

- **Lebar** dan **tinggi** kisi, dalam satuan kotak.
- **Kesulitan**: teka-teki _Mudah_ bisa dipecahkan satu kotak demi satu kotak — sebuah angka
  yang sudah terpenuhi atau yang membutuhkan semua kotak sisanya, dan kotak-kotak yang salah
  satu dari dua garisnya akan menutup sebuah lingkaran. Teka-teki _Sulit_ juga menuntut
  penalaran tentang pasangan kotak yang pasti miring ke arah yang sama bahkan sebelum kamu
  tahu arahnya yang mana, dan tentang wilayah yang akan tersegel dari tepi kisi oleh sebuah
  garis. Tebakan tidak pernah diperlukan; setiap teka-teki punya tepat satu solusi.
`,ge=e({default:()=>_e}),_e=`# Solo

Isi kisi persegi dengan angka sehingga setiap baris, setiap kolom dan setiap blok bergaris
tepi tebal memuat masing-masing angka tepat sekali. Beberapa kotak sudah diberikan sebagai
petunjuk; sisanya kamu yang mencari tahu. Teka-teki 3×3 yang normal adalah Sudoku yang sudah
kamu kenal, tetapi bloknya juga bisa berbentuk persegi panjang (teka-teki 2×3 punya enam
blok 3×2), dan kisinya bisa sebesar 16×16, di mana huruf a, b, c… mewakili angka di atas 9.

Ada tiga varian yang bisa dinyalakan:

- **X**: kedua diagonal utama, yang diarsir tipis, masing-masing juga harus memuat setiap
  angka.
- **Jigsaw**: bloknya berbentuk tidak beraturan dan berbeda dari satu teka-teki ke teka-teki
  lainnya.
- **Killer**: tidak ada angka petunjuk sama sekali. Sebagai gantinya kisi dibagi menjadi
  "sangkar" bergaris putus-putus, masing-masing ditandai dengan jumlah angka di dalamnya.
  Tidak ada angka yang boleh muncul dua kali dalam satu sangkar.

Setiap teka-teki punya tepat satu solusi, dan solusi itu selalu bisa dicapai dengan
penalaran murni pada tingkat kesulitan yang kamu pilih.

## Kontrol

Angka yang bentrok dengan salinan lain di baris, kolom, blok, diagonal atau sangkarnya
ditampilkan merah, begitu pula sangkar yang angkanya tidak berjumlah sesuai. **Petunjuk**
mengisi satu kotak — yang paling mudah di antara yang masih kosong, atau angka pertama yang
bertentangan dengan jawabannya — dan menyerahkan sisanya kepadamu; teka-tekinya tetap
berjalan, dan dengan beberapa petunjuk, kemenangan dan kreditnya tetap milikmu.
**Pecahkan** mengisikan seluruh solusinya dan mengakhiri teka-teki.

### Mouse dan sentuh

- **Klik kiri** sebuah kotak kosong untuk memilihnya, lalu pakai papan tombol di layar untuk
  menuliskan sebuah angka (tombol huruf adalah angka di atas 9). Mengklik lagi kotak yang
  terpilih akan membatalkan pilihan.
- **⌫** pada papan tombol mengosongkan kembali kotak yang terpilih, dan **✎** menyalakan mode
  tanda pensil, sehingga apa pun yang kamu pilih berikutnya masuk sebagai catatan kecil, bukan
  sebagai jawaban.
- **Klik kanan** sebuah kotak untuk langsung memilihnya buat **tanda pensil**. Tanda pensil
  hanya ada untuk membantumu berpikir; permainan tidak memperhatikannya, dan mengisikan
  sebuah angka akan menghapusnya.
- **Tanda** di menu jeda mengisi setiap kotak kosong dengan satu set lengkap tanda pensil,
  untuk kamu yang suka mulai dari segalanya lalu mencoret kandidatnya satu per satu.
- **Sorot** (kaca pembesar di samping Urungkan) menyoroti setiap kotak yang berisi angka yang sama
  dengan kotak yang terakhir kamu klik, termasuk angka petunjuk, dan menebalkan angka itu
  di antara tanda pensil. Tekan lagi untuk mematikannya.

### Papan Ketik (Keyboard)

- **Ketik sebuah angka** (atau huruf untuk angka di atas 9) untuk mengisi kotak yang
  terpilih.
- **Space** atau **Backspace** mengosongkan kotak yang terpilih (angkanya atau semua tanda
  pensilnya).
- **Tombol panah** menggerakkan kursor papan ketik. **Enter** mengganti kursor antara mode
  isian biasa dan mode tanda pensil, dan angka yang kamu ketik masuk ke kotak di bawahnya.
- **M** adalah tombol **Tanda** dan **L** tombol **Sorot**.

## Parameter

- **Kolom** dan **baris subblok**: kisinya sebesar hasil kali keduanya, dan setiap blok
  selebar jumlah barisnya dan setinggi jumlah kolomnya. Dalam mode jigsaw, hasil kali itu
  sekadar ukuran kisinya.
- **X**, **Jigsaw** dan **Killer** menyalakan varian-varian yang dijelaskan di atas.
  Teka-teki Killer terbatas pada kisi dengan paling banyak sembilan angka.
- **Simetri**: bagaimana pola petunjuknya mencerminkan dirinya sendiri. Simetri yang lebih
  banyak terlihat lebih cantik tetapi cenderung meninggalkan lebih banyak petunjuk daripada
  yang benar-benar dibutuhkan.
- **Kesulitan**: jenis penalaran tersulit yang akan dituntut teka-teki itu. _Sangat mudah_
  dan _Mudah_ selalu punya kotak yang bisa langsung diisi; _Sedang_ menuntutmu menalar
  tentang di mana sebuah angka bisa ditempatkan dalam satu blok dan satu baris; _Sulit_
  menuntut himpunan kotak yang bersama-sama memiliki satu himpunan angka; _Ahli_ menambahkan
  rantai pemaksa; dan teka-teki _Ekstrem_ tidak bisa diselesaikan tanpa menebak lalu mundur
  lagi. Teka-teki yang sulit lebih lama dibuatnya.
`,ve=e({default:()=>ye}),ye=`# Tenda

Kisi ini adalah sebuah bumi perkemahan: beberapa kotak berisi pohon, sisanya tanah kosong.
Dirikan tenda di kotak-kotak kosong sehingga:

- jumlah tendanya persis sama dengan jumlah pohonnya;
- setiap pohon bisa dipasangkan dengan tendanya sendiri di kotak yang tepat bersebelahan
  dengannya (atas, bawah, kiri atau kanan — bukan diagonal). Sebuah tenda boleh saja
  kebetulan berdiri di sebelah pohon lain juga, tetapi setiap tenda milik satu pohon dan
  setiap pohon milik satu tenda;
- tidak ada dua tenda yang bersentuhan, bahkan di sudut sekalipun;
- angka di sepanjang tepi kanan dan tepi bawah memberi tahu jumlah tenda di setiap baris dan
  kolom.

Petunjuknya cuma berupa hitungan itu, jadi seluruh teka-teki ini soal mencari tahu di mana
tenda-tendanya harus berdiri. Setiap teka-teki di sini bisa dipecahkan hanya dengan
penalaran, tanpa menebak.

## Kontrol

Tenda yang saling bersentuhan ditampilkan merah dengan penanda pada sisi atau sudut yang
mereka bagi, begitu pula setiap kelompok tenda yang pohonnya terlalu sedikit, atau setiap
kelompok pohon yang tidak lagi punya ruang untuk semua tendanya. Sebuah hitungan berubah
abu-abu begitu barisnya punya tenda dengan jumlah yang tepat, dan merah begitu hitungan itu
tidak mungkin lagi terpenuhi. **Pecahkan** mendirikan semua tendanya untukmu.

### Mouse dan sentuh

- **Klik** sebuah kotak kosong untuk mendirikan tenda di sana; klik tendanya lagi untuk
  membuangnya.
- **Klik kanan** sebuah kotak kosong untuk menandainya sebagai rumput, artinya kamu yakin
  tidak ada tenda di sana; klik kanan lagi untuk membersihkannya. Klik maupun klik kanan
  sama-sama mengosongkan kotak yang sudah berisi sesuatu.
- **Seret dengan tombol kanan** di sepanjang satu baris atau kolom untuk mengubah setiap
  kotak kosong yang kamu lewati menjadi rumput sekaligus — praktis untuk merampungkan sebuah
  baris begitu semua tendanya sudah berdiri. Tenda dan tanda yang sudah ada tidak diusik.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor.
- **Enter** mendirikan atau membuang tenda di bawah kursor.
- **Space** menandai atau membersihkan rumput di bawah kursor.

## Parameter

- **Lebar** dan **tinggi** kisi, dari 4 sampai 20 kotak.
- **Kesulitan**: teka-teki _Mudah_ bisa ditaklukkan dengan berhitung dan melihat apa yang
  dibutuhkan setiap pohon dan setiap tenda. Teka-teki _Rumit_ juga menuntutmu menimbang
  bagaimana kemungkinan penempatan pada satu baris membatasi baris tetangganya, dan
  memikirkan kotak mana saja yang bisa dipakai bersama oleh pohon-pohonnya.
`,be=e({default:()=>xe}),xe=`# Menara

Setiap kotak pada kisi mendapat sebuah menara, dengan tinggi dari 1 sampai ukuran kisi.
Setiap baris dan setiap kolom harus memuat setiap tinggi tepat satu kali. Angka di
sekeliling tepi memberitahu berapa banyak menara yang akan kamu lihat jika memandang ke
baris atau kolom itu dari sisi tersebut: sebuah menara menyembunyikan semua menara yang
lebih pendek di belakangnya. Petunjuk yang sama besar dengan ukuran kisi berarti tingginya
naik terus di sepanjang garis itu; petunjuk 1 berarti menara tertinggi berdiri tepat di
tepi itu.

Teka-teki yang lebih besar dan lebih sulit dimulai dengan beberapa menara yang sudah
berdiri dan menghilangkan sebagian petunjuk tepi. Angka yang bentrok dengan angka lain di
baris atau kolomnya, dan petunjuk yang tak lagi bisa dipenuhi oleh menara yang sudah
terbangun, ditampilkan merah. Teka-teki ini lebih dikenal dengan nama Skyscrapers.

## Kontrol

Menara yang sudah diberikan tidak bisa diubah, dan **Pecahkan** mengisikan jawabannya.

### Mouse dan sentuh

- **Klik kiri** sebuah kotak untuk memilihnya, lalu pakai tombol di layar untuk
  membangun menara setinggi itu. **⌫** pada papan tombol mengosongkan kotak itu lagi.
- **✎** pada papan tombol menyalakan mode **tanda pensil**: yang kamu pilih lalu masuk sebagai
  catatan kecil, kotaknya tetap terpilih sehingga kamu bisa menambah beberapa, dan angka
  yang sama sekali lagi menghapusnya. Mengisi angka sungguhan menghapus semua tanda pensil
  di kotak itu.
- **Klik kanan** sebuah kotak untuk langsung memilihnya buat tanda pensil.
- **Tanda** di menu jeda mengisi setiap kotak kosong dengan satu set lengkap tanda pensil.
- **Sorot** (kaca pembesar di samping Urungkan) menyoroti setiap kotak yang berisi tinggi yang sama
  dengan kotak yang terakhir kamu klik, dan menebalkan tinggi itu di antara tanda pensil.
  Tekan lagi untuk mematikannya.

### Papan Ketik (Keyboard)

- **Ketik sebuah angka** untuk membangun menara setinggi itu di kotak yang terpilih.
  **Space** atau **Backspace** mengosongkannya.
- **Tombol panah** menggerakkan kursor papan ketik. **Enter** memindahkannya antara mode
  angka dan mode tanda pensil; angka diketik ke kotak yang tersorot dan kursornya tetap di
  tempat.
- **M** adalah tombol **Tanda** dan **L** tombol **Sorot**.

## Parameter

- **Ukuran kisi** — dari 3 sampai 9. Menara dimasukkan sebagai angka tunggal, dan karena
  itulah 9 jadi batasnya.
- **Kesulitan** — Teka-teki Mudah hanya butuh akibat langsung dari setiap petunjuk serta
  dari aturan baris dan kolom. Teka-teki Sulit menuntutmu menimbang setiap susunan yang
  diizinkan sebuah petunjuk dan menemukan sekumpulan kotak yang berbagi beberapa kandidat.
  Ahli menambahkan penalaran himpunan yang lebih berat dan rantai pemaksa, dan teka-teki
  Ekstrem tak bisa diselesaikan tanpa sedikit coba-coba, meski solusinya tetap tunggal.
`,Se=e({default:()=>Ce}),Ce=`# Rel

Sebuah jalur kereta masuk ke kisi dari kiri dan keluar di bagian bawah; kedua ujungnya
digambarkan sebagai rel yang menjulur keluar papan. Lengkapi lintasan di antara keduanya.
Relnya adalah satu jalur tunggal tanpa percabangan, lingkaran tertutup, atau persilangan,
dibangun hanya dari potongan lurus dan tikungan seperempat putaran, jadi setiap kotak yang
dilewatinya punya tepat dua rel yang keluar darinya. Beberapa potongan sudah terpasang di
kotak berarsir dan tidak bisa diubah. Angka di atas setiap kolom dan di samping setiap
baris menyebutkan berapa kotak dari garis itu yang dilalui rel yang sudah jadi.

Angka berubah abu-abu begitu garisnya memuat jumlah kotak rel yang tepat, dan merah kalau
sebuah garis tak mungkin lagi cocok: terlalu banyak kotak rel, atau begitu banyak kotak
yang dicoret sampai ruangnya tak lagi cukup. Kotak tempat rel bertemu dengan keliru (tiga
rel masuk ke satu kotak, lingkaran tertutup, atau rel tersisa setelah pintu masuk dan pintu
keluar tersambung) juga digambar merah.

## Kontrol

**Pecahkan** memasang rel yang lengkap, sekaligus menghapus tanda-tandamu yang bertentangan
dengannya. Teka-teki selesai ketika satu rel utuh menghubungkan pintu masuk ke pintu keluar
dan semua hitungan terpenuhi.

### Mouse dan sentuh

- **Seret** melewati deretan kotak bertetangga untuk memasang rel di antaranya. Lintasannya
  boleh berbelok; seretan yang hanya mengikuti rel yang sudah ada justru mencabutnya lagi.
- **Klik** dekat sisi sebuah kotak untuk menambah atau menghapus satu rel yang melewati sisi
  itu. Klik bagian tengah kotak untuk menandainya sebagai "rel lewat sini" tanpa menyebut
  sisi mana — praktis untuk menghitung — dan klik lagi untuk menghapus tandanya.
- **Klik kanan** dekat sebuah sisi untuk menggambar palang pendek yang berarti "tidak ada
  rel di sini"; klik kanan bagian tengah kotak untuk mencoret seluruh kotak itu.
  **Seret dengan tombol kanan** di sepanjang baris atau kolom untuk mencoret (atau
  membatalkan coretan) sederet kotak sekaligus.
- **Hapus** (tombol penghapus di samping Urungkan) membuat klik atau seretan membersihkan kotak:
  setiap kotak yang disentuhnya kehilangan relnya, palang "tidak ada rel"-nya, dan tanda
  atau coretannya. Potongan yang sudah diberikan tetap ada. Tekan lagi untuk kembali memasang rel.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor yang berhenti di kotak dan di sisi-sisi di antaranya.
  **Enter** berlaku seperti klik pada posisi kursor dan **Space** seperti klik kanan.
- **E** adalah tombol **Hapus**.

## Parameter

- **Lebar** dan **tinggi** kisi, masing-masing minimal empat.
- **Kesulitan**: teka-teki _Mudah_ takluk hanya dengan mengamati satu kotak atau satu garis
  setiap kali. Teka-teki _Rumit_ juga menuntutmu memikirkan di mana kotak rel terakhir
  sebuah garis mungkin berada, dan memikirkan ujung rel menggantung yang harus diteruskan
  sepanjang atau melintasi sebuah garis. Setiap teka-teki punya tepat satu solusi.
- **Larang petunjuk 1 yang berurutan**: kalau diaktifkan (bawaannya begitu), tak ada dua garis
  bertetangga yang sama-sama berpetunjuk 1, begitu pula kolom pintu masuk dan baris pintu
  keluar. Ini mencegah rel berjalan lurus panjang dan membosankan di sepanjang tepi.
`,we=e({default:()=>Te}),Te=`# Putar

Sebuah kisi berisi ubin bernomor telah diacak dengan memutar blok-blok ubin berbentuk
persegi. Putar kembali sampai angkanya terbaca berurutan dari kiri ke kanan dan dari atas
ke bawah. Dalam permainan dasar, setiap langkah memutar satu blok 2×2 sejauh seperempat
putaran mengelilingi titik pertemuan keempat ubinnya; pengaturan yang lebih besar memutar
blok 3×3 atau bahkan yang lebih besar lagi.

Pada varian **dengan arah**, setiap ubin membawa sebuah segitiga, dan teka-teki baru
dianggap selesai kalau semua segitiga menunjuk ke atas. Pada varian **hanya baris**, ubin
justru membawa nomor barisnya sendiri, jadi semua angka 1 cukup sampai di baris pertama,
angka 2 di baris kedua, dan seterusnya.

## Kontrol

**Pecahkan** langsung mengembalikan setiap ubin ke tempatnya. Ini tidak memperlihatkan
rutenya, tapi jadi cara cepat mendapat kisi yang rapi untuk melatih rangkaian putaran.

### Mouse dan sentuh

- **Klik** di pusat sebuah blok untuk memutarnya berlawanan arah jarum jam; **klik kanan**
  untuk memutarnya searah jarum jam. Untuk blok 2×2, pusatnya adalah sudut tempat empat ubin
  bertemu; untuk ukuran blok ganjil, pusatnya adalah ubin di tengah. Klik ke arah tepi kisi
  memutar blok yang menempel pada tepi itu.
- **Searah** (tombol panah berputar di samping Urungkan) menukar kedua arah: klik memutar blok
  searah jarum jam dan klik kanan berlawanan arah jarum jam. Tekan lagi untuk kembali.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan bingkai sebesar satu blok mengelilingi kisi. **Enter**
  memutar blok yang terbingkai berlawanan arah jarum jam dan **Space** memutarnya searah
  jarum jam.
- **A**, **B**, **C** dan **D** memutar blok sudut kiri atas, kanan atas, kiri bawah dan
  kanan bawah berlawanan arah jarum jam; tahan **Shift** untuk searah jarum jam.
- **T** adalah tombol **Searah**.

## Parameter

- **Lebar** dan **tinggi** kisi.
- **Ukuran blok putar**: panjang sisi blok persegi yang diputar oleh satu langkah (minimal
  2, dan tidak lebih besar dari kisinya).
- **Satu angka per baris**: varian yang lebih mudah, yaitu setiap ubin dalam satu baris
  punya angka yang sama.
- **Arah ubin diperhitungkan**: ubin mendapat segitiga dan semuanya harus berakhir menunjuk ke
  atas.
- **Jumlah langkah pengacakan**: biarkan 0 untuk pengacakan menyeluruh, atau isi angka
  kecil untuk mendapat kisi yang jaraknya tepat sebanyak itu putaran dari keadaan
  terpecahkan. Tugasmu lalu menemukan putaran itu dan membatalkannya, jadi pengacakan tiga
  langkah layak dijawab dengan tiga langkah (walau kadang ada rute yang lebih pendek).
`,Ee=e({default:()=>De}),De=`# Mayat Hidup

Kisi ini adalah aula cermin berhantu. Setiap kotak tanpa cermin menyembunyikan satu dari
tiga monster: **hantu**, **vampir**, atau **zombi**. Keterangan di atas kisi memberitahu
berapa banyak lagi yang harus ditempatkan dari tiap jenis, dan angka di setiap posisi tepi
menyebutkan berapa monster yang akan kamu lihat jika memandang ke dalam kisi dari sana,
mengikuti garis pandang saat ia memantul pada cermin-cermin diagonal.

Cermin mengubah apa yang bisa kamu lihat. Vampir tidak punya bayangan, jadi ia hanya
terhitung selama garis pandangmu belum bertemu cermin. Hantu justru sebaliknya: tak terlihat
kalau dipandang langsung, ia baru muncul setelah sebuah pantulan. Zombi selalu terlihat.
Kalau sebuah garis pandang melintasi kotak yang sama dua kali, monster di situ dihitung
setiap kali ia terlihat. Tempatkan semua monster sehingga setiap angka tepi dan setiap total
menjadi benar.

## Kontrol

Angka tepi berubah abu-abu begitu garis pandangnya terpenuhi seluruhnya, dan merah kalau tak
mungkin lagi dipenuhi; hitungan pada keterangan berubah merah kalau monster jenis itu sudah
ditempatkan terlalu banyak. Tanda pensil hanya untuk catatanmu sendiri dan tak pernah
memengaruhi teka-tekinya.

### Mouse dan sentuh

- **Klik kiri** kotak kosong untuk memutarnya melalui hantu, vampir, zombi, lalu kembali
  kosong. Kotak itu tetap tersorot.
- Tombol di layar langsung memilih monster untuk kotak yang tersorot, tanpa
  perlu memutar sampai ke sana; **⌫** mengosongkan kotak itu, termasuk tanda pensilnya.
- **✎** pada papan tombol menyalakan mode **tanda pensil**: monster yang kamu pilih lalu
  ditambahkan ke (atau dikeluarkan dari) daftar kandidat kotak itu.
- **Klik kanan** sebuah kotak untuk menambah tanda pensil satu kandidat setiap kali (hantu,
  lalu vampir, lalu zombi, lalu kosong).
- **Pandangan** (mata di samping Urungkan) menggambar garis pandang yang melewati kotak yang tersorot,
  berbelok di cermin, dan melingkari angka tepi di kedua ujungnya. Selama aktif, mengklik
  sebuah angka tepi menelusuri garis milik angka itu sendiri; klik lagi untuk melepasnya.
  Tekan **Pandangan** lagi untuk mematikannya. Selama aktif, mengklik kotak yang tidak
  tersorot hanya menyorotnya, sehingga kotak kosong bisa ditelusuri tanpa mengisinya; klik
  lagi untuk menggantinya seperti biasa.

### Papan Ketik (Keyboard)

- Tombol panah menggerakkan sorotan. Enter memutar monster di kotak yang tersorot; Space
  memutar tanda pensilnya.
- \`G\`, \`V\`, \`Z\` (atau \`1\`, \`2\`, \`3\`) menaruh monster itu di kotak yang tersorot, atau
  membalik tanda pensilnya kalau sorotan sedang dalam mode pensil. \`E\`, \`0\`, Backspace atau
  Delete mengosongkan kotak itu, termasuk tanda pensilnya.
- \`S\` adalah tombol **Pandangan**.

## Parameter

- **Lebar**, **Tinggi** — ukuran kisi, dari 3×3 sampai 54 kotak seluruhnya.
- **Kesulitan** — teka-teki _Mudah_ takluk dengan menghitung sepanjang satu garis pandang
  setiap kali; yang _Normal_ menuntutmu menimbang kombinasi yang diizinkan oleh satu
  lintasan penuh; teka-teki _Rumit_ tak bisa diselesaikan tanpa mencoba sebuah tebakan.
`,Oe=e({default:()=>ke}),ke=`# Tak Sama

Isi kisinya sehingga setiap baris dan setiap kolom memuat setiap angka dari 1 sampai ukuran
kisi tepat satu kali — sebuah persegi latin — sambil mematuhi tanda-tanda yang digambar di
antara kotak yang bertetangga.

Dalam mode **Tak Sama**, tandanya adalah tanda lebih besar: sisi terbuka sebuah \`>\`
menghadap angka yang lebih besar dan ujung runcingnya menghadap yang lebih kecil. Tidak
setiap pasangan tetangga punya tanda, dan makin sulit teka-tekinya makin sedikit tandanya.

Dalam mode **Bersebelahan**, tandanya berupa palang pendek yang berarti kedua angka
berselisih tepat satu (seperti 3 dan 4). Di sini setiap palang selalu ditampilkan, jadi
**tidak adanya** palang di antara dua kotak juga merupakan petunjuk: kedua angka itu pasti
tidak berurutan.

Teka-teki ini muncul di koran dengan nama Futoshiki.

## Kontrol

Angka yang melanggar aturan — kembar dalam satu baris atau kolom, atau tanda yang tidak
terpenuhi — ditampilkan merah, begitu pula tanda yang dilanggarnya. Teka-teki selesai ketika
setiap kotak sudah terisi dan tak ada yang merah.

### Mouse dan sentuh

- **Klik kiri** sebuah kotak untuk memilihnya, lalu pakai tombol di layar untuk
  mengisikan angka. **⌫** pada papan tombol mengosongkan lagi kotak yang terpilih. Mengklik
  kotak yang terpilih untuk kedua kalinya membatalkan pilihan itu.
- **✎** pada papan tombol menyalakan mode **tanda pensil**: yang kamu pilih lalu ditambahkan ke
  (atau dihapus dari) daftar kecil kemungkinan di kotak itu, bukan mengisi jawabannya.
  Mengisi sebuah kotak menghapus tanda pensilnya.
- **Klik kanan** sebuah kotak untuk langsung memilihnya buat tanda pensil.
- **Tanda** di menu jeda mengisi setiap kotak kosong dengan semua tanda pensil yang
  mungkin, siap kamu coret satu per satu; **Petunjuk** (bola lampu di samping Urungkan) melakukan hal
  yang sama tapi menyisihkan kemungkinan yang sudah bisa dikesampingkan oleh penalaran mudah.
- **Sorot** (kaca pembesar di samping Urungkan) menyoroti setiap kotak yang berisi angka yang sama
  dengan kotak yang terakhir kamu klik, termasuk angka yang sudah diberikan, dan menebalkan
  angka itu di antara tanda pensil. Tekan lagi untuk mematikannya.

### Papan Ketik (Keyboard)

- **Ketik sebuah angka** untuk mengisi kotak yang terpilih; \`0\`, Space atau Backspace
  mengosongkannya.
- Tombol panah menggerakkan kursor mengelilingi kisi; Enter memindahkan kursor antara
  mengisi angka dan membuat tanda pensil.
- \`M\` adalah tombol **Tanda**, \`H\` adalah **Petunjuk** dan \`L\` adalah **Sorot**.

## Parameter

- **Mode** — Tak Sama (tanda lebih besar) atau Bersebelahan (palang di antara angka yang
  berurutan).
- **Ukuran** — jumlah baris dan kolom, dari 3 sampai 9.
- **Kesulitan** — seberapa banyak penalaran yang dituntut teka-tekinya. Teka-teki **Sangat mudah**
  tak pernah butuh tanda: di mode Tak Sama sama sekali tak ada tanda dan teka-tekinya hanyalah
  persegi latin biasa, sedangkan di mode Bersebelahan palangnya tetap digambar, tetapi angka yang
  diberikan saja sudah cukup. Teka-teki **Mudah** hanya butuh arti langsung setiap tanda; yang
  **Sedang** menuntutmu menimbang sekumpulan kotak sekaligus; yang **Sulit** menambahkan penalaran
  himpunan berbasis posisi dan rantai pemaksa; teka-teki **Ekstrem** (tersedia lewat **Kustom…**)
  mungkin butuh coba-coba, meski solusinya tetap tunggal.
`,Ae=e({default:()=>je}),je=`# Semrawut

Warnai setiap kotak pada kisi dengan hitam atau putih. Sebagian kotak sudah diberikan
sebagai petunjuk dan tak bisa diubah; sisanya mulai berwarna abu-abu dan kamulah yang
mengisinya. Setelah selesai, tiga hal harus terpenuhi:

- setiap baris memuat kotak hitam sebanyak kotak putihnya;
- setiap kolom memuat kotak hitam sebanyak kotak putihnya;
- tak ada tiga kotak berurutan dalam satu baris atau kolom yang sewarna.

Kesalahan tampak merah: deretan tiga kotak sewarna atau lebih mendapat bingkai merah, dan
sebuah kotak membawa tanda **!** merah kalau baris atau kolomnya sudah memuat terlalu banyak
warna itu. Pada varian opsional "baris dan kolom unik", tak boleh ada dua baris yang berpola
sama (begitu pula dua kolom); garis yang kembar dicoret dengan warna merah.

## Kontrol

Kotak petunjuk — yang digambar dengan bingkai kecil di dalamnya — tak bisa diubah.
**Pecahkan** mengisi seluruh kisi. Teka-teki selesai ketika setiap kotak sudah berwarna dan
tak ada yang ditampilkan merah.

### Mouse dan sentuh

- **Klik** kotak abu-abu untuk menjadikannya hitam; klik lagi untuk putih, dan sekali lagi
  untuk mengosongkannya.
- **Klik kanan** memutar ke arah sebaliknya: putih, lalu hitam, lalu kosong.
- **Klik tengah** langsung mengosongkan sebuah kotak.
- **Hapus** (tombol penghapus di samping Urungkan) membuat klik mengosongkan kotak alih-alih
  mewarnainya. Tekan lagi untuk kembali mewarnai.

### Papan Ketik (Keyboard)

- **Tombol panah** menggerakkan kursor mengelilingi kisi.
- **Enter** memutar kotak di bawah kursor seperti klik dan **Space** seperti klik kanan.
- **1** memberi hitam, **0** (atau **2**) memberi putih dan **Backspace** mengosongkan.
- **E** adalah tombol **Hapus**.

## Parameter

- **Lebar** dan **tinggi** kisi. Keduanya harus genap, dan minimal 6.
- **Baris dan kolom unik**: kalau diaktifkan, tak boleh ada dua baris yang identik maupun
  dua kolom yang identik (sebuah baris masih boleh sama dengan sebuah kolom). Kisi yang
  sangat tinggi atau sangat lebar ditolak dalam mode ini karena garis yang berbeda-beda tak
  cukup banyak untuk semuanya.
- **Kesulitan**: teka-teki _Mudah_ tak pernah butuh lebih dari dua alasan langsung — dua
  kotak sewarna memaksa kotak di sebelahnya atau di antaranya menjadi warna yang lain, dan
  garis yang sudah penuh jatah satu warna mendapat warna satunya di semua kotak sisanya.
  Teka-teki _Normal_ juga menuntutmu menalar di mana kotak terakhir sebuah warna masih bisa
  ditaruh dalam satu garis tanpa membentuk deretan tiga. Setiap teka-teki punya tepat satu
  solusi.
`,Me=e({default:()=>Ne}),Ne=`# Urai

Beberapa titik dihubungkan oleh garis lurus, dan garis-garis itu kusut. Pindah-pindahkan
titiknya sampai tak ada dua garis yang bersilangan. Setiap teka-teki bisa diurai: komputer
membangun grafnya dari tata letak tanpa persilangan, lalu mengacak titik-titiknya ke atas
sebuah lingkaran.

Garis yang sedang bersilangan dengan garis lain digambar merah, jadi kekusutannya menyusut
secara kasatmata sambil kamu bekerja; teka-teki terpecahkan ketika tak ada merah yang
tersisa. Pecahkan menggeser setiap titik ke tata letak yang sudah diketahui komputer pasti
berhasil.

## Kontrol

Urungkan membatalkan langkah apa pun, termasuk Pecahkan.

### Mouse dan sentuh

- **Seret** sebuah titik dan lepaskan di tempat yang kamu mau. Titik yang kamu pegang
  berubah oranye dan tetangganya biru. Menjatuhkan titik di bagian pinggir menaruhnya di
  tepi papan; melepasnya sama sekali di luar kanvas membatalkan seretan itu.
- **Kisi bantu** (tombol kisi di samping Urungkan) menyalakan atau mematikan kisi penempel: titik yang
  dijatuhkan lalu mendarat di pusat kotak kisi yang ditandai titik-titik samar, dan begitu
  pula tata letak solusinya disusun. Tombolnya tetap menyala selama kisinya aktif.

### Papan Ketik (Keyboard)

- **Tombol panah** memindahkan kursor dari titik ke titik ke arah tersebut. **Enter** atau
  **Space** mengangkat titik itu; tombol panah lalu membawanya (seperdelapan kotak setiap
  kali ditekan, satu kotak penuh dengan Shift, satu langkah tunggal dengan Ctrl) dan
  **Enter** atau **Space** menjatuhkannya.
- \`G\` adalah tombol **Kisi bantu**.

## Parameter

- **Jumlah titik**: berapa banyak titik yang dimiliki graf, minimal 4. Makin banyak titik
  berarti makin banyak garis dan kekusutan yang makin sulit. Papan ikut membesar seiring
  jumlah titik sehingga selalu ada ruang untuk membentangkannya.
`,Pe=e({$dir:()=>`ltr`,$locale:()=>`id`,$name:()=>q,default:()=>Fe,games:()=>Q,messages:()=>X,status:()=>Z,touchPhrases:()=>Y,tutorials:()=>$,ui:()=>J}),q=`Bahasa Indonesia`,J=JSON.parse(`{"appName":"Puzzlebox","menu":{"title":"Puzzlebox","tagline":"{n} teka-teki logika bergaya gambar tangan. Pilih satu, lalu main.","lockedNote":"Setiap teka-teki yang kamu selesaikan tanpa bantuan memberimu satu kredit. Pakai kredit di sini untuk membuka teka-teki baru.","language":"Bahasa","stat":{"credits":{"other":"★ {n} kredit"},"unlocked":"{n} dari {total} terbuka","solved":"{n} terpecahkan","tight":{"credits":"★ {n}","unlocked":"{n}/{total}","solved":"✓ {n}","achievements":"{n}/{total}"},"achievements":"{n} dari {total} pencapaian"},"hint":{"allOpen":"Semuanya sudah terbuka.","complete":"Kamu sudah membuka seluruh koleksinya!","spend":{"other":"Pakai kredit di bawah untuk membuka teka-teki."},"earn":"Selesaikan teka-teki apa saja tanpa bantuan untuk mendapat satu kredit."},"card":{"label":"{name}: {description}","labelLocked":"{name}: {description} (terkunci)","solvedTag":"✓ terpecahkan ×{n}","unlock":"Buka · 1 kredit","unlocked":"{name} terbuka!","labelAlias":"{name} (dikenal juga sebagai {alias}): {description}","labelLockedAlias":"{name} (dikenal juga sebagai {alias}): {description} (terkunci)"},"noCredit":"Selesaikan teka-teki apa saja tanpa bantuan untuk mendapat kredit, lalu kembali ke sini untuk membuka yang ini.","surprise":"Kejutkan aku: buka teka-teki acak","search":{"placeholder":"Cari teka-teki","label":"Cari teka-teki berdasarkan nama","clear":"Hapus pencarian","empty":"Tidak ada teka-teki bernama “{q}”. Coba nama lain."},"privacy":{"note":"Puzzlebox menghitung cara teka-tekinya dimainkan — tidak pernah siapa yang memainkannya — supaya bisa dibuat lebih seru."},"continue":"Lanjutkan","continueLabel":"Lanjutkan {name}","spend":"Pakai"},"notFound":{"title":"Teka-teki tidak ditemukan","body":"Kami tidak punya teka-teki bernama “{slug}”.","back":"Kembali ke semua teka-teki"},"locked":"{name} masih terkunci. Selesaikan sebuah teka-teki untuk mendapat kredit, lalu buka yang ini.","pageTitle":"{name} · Puzzlebox","topbar":{"back":"Semua teka-teki","help":"Bantuan","creditsTitle":"Kredit untuk membuka teka-teki baru. Selesaikan teka-teki tanpa bantuan untuk mendapat satu kredit.","boardLabel":"Papan teka-teki {name}"},"toolbar":{"type":"Jenis","custom":"Kustom…","new":"Baru","newTitle":"Permainan baru (N)","restart":"Mulai ulang","restartTitle":"Mulai ulang teka-teki ini","undo":"Urungkan","undoTitle":"Urungkan (U, Ctrl+Z)","redo":"Ulangi","redoTitle":"Ulangi (R, Ctrl+Y)","solve":"Pecahkan","solveTitle":"Tampilkan solusi (Ctrl+S)","gameId":"Bagikan","gameIdTitle":"Bagikan teka-teki ini, atau mainkan kiriman orang lain","keypad":"Papan tombol","keypadTitle":"Tampilkan tombol di layar","zoomOut":"−","zoomOutTitle":"Perkecil","zoomIn":"+","zoomInTitle":"Perbesar","tapPlace":"Ketuk: taruh","tapMark":"Ketuk: tandai","tapTitle":"Fungsi ketukan biasa","tapPlaceTitle":"Ketuk untuk menaruh; tekan lama untuk menandai. Ketuk tombol ini untuk menukar.","tapMarkTitle":"Ketuk untuk menandai; tekan lama untuk menaruh. Ketuk tombol ini untuk menukar.","hint":"Petunjuk","hintTitle":"Buka satu kotak, lalu lanjut bermain. Sampai {n} petunjuk, kamu tetap dapat kredit.","more":"Lainnya","pause":"Jeda","pauseTitle":"Menu jeda (Esc)"},"pause":{"title":"Dijeda","resume":"Lanjutkan"},"pager":{"label":"Halaman","prev":"Halaman sebelumnya","next":"Halaman berikutnya","page":"Halaman {n} dari {total}"},"badge":{"won":"Terpecahkan!","lost":"Permainan berakhir"},"stage":{"generating":"Menyiapkan teka-teki baru…"},"keypad":{"label":"Papan tombol","clear":"Kosongkan","clearTitle":"Kosongkan kotak yang dipilih (Backspace)","pencil":"Tanda pensil","pencilOnTitle":"Tombol mengisi tanda pensil. Ketuk untuk kembali menulis jawaban.","pencilOffTitle":"Aktifkan agar tombol berikutnya diisi sebagai tanda pensil"},"drawer":{"title":"Cara bermain {name}","close":"Tutup","replay":"▶ Putar ulang tutorial","achievements":"Pencapaian ({n}/{total})"},"dialog":{"ok":"OK","cancel":"Batal","customTitle":"{name}: kustom","gameIdTitle":"Bagikan teka-teki ini","byDescription":"Berdasarkan deskripsi","bySeed":"Berdasarkan seed acak","enterLabel":"Mainkan teka-teki tertentu: tempel kodenya","play":"Mainkan","copy":"Salin","copied":"Tersalin","link":"Tautan","linkTitle":"Salin tautan yang langsung membuka teka-teki ini","linkPrompt":"Tautan ke teka-teki ini","shareLead":"Kirim teka-teki yang sama persis ke orang lain.","copyLink":"Salin tautan","linkCopied":"Tautan tersalin","codes":"Kode teka-teki","hintAd":{"title":"Satu petunjuk lagi?","body":"Kamu sudah memakai {n} petunjuk gratis. Kalau ambil satu lagi, teka-teki ini tidak akan memberi kredit — kecuali kamu menonton iklan singkat supaya kreditnya tetap aman.","watch":"Tonton iklan, kredit tetap aman","anyway":"Tetap ambil petunjuk"},"badCode":"Kode itu tidak membuka teka-teki {name}. Pastikan kodenya tersalin utuh."},"toast":{"creditEarned":"+1 kredit","tutorialComplete":"Tutorial selesai. Ini teka-teki baru; selesaikan tanpa bantuan untuk mendapat satu kredit.","tutorialCompleteBack":"Tutorial selesai. Kembali ke teka-tekimu.","tutorialSkipped":"Tutorial dilewati. Kamu bisa memutarnya ulang kapan saja dari Bantuan.","tapModeMark":"Ketuk untuk menandai. Tekan lama untuk tindakan utama.","tapModePlace":"Ketuk untuk tindakan utama. Tekan lama untuk menandai.","touchHint":"Ketuk untuk bermain, tekan lama untuk tindakan kedua. Tombol bulat pertama menukar keduanya.","hintNone":"Tidak ada lagi yang bisa dibuka di papan ini.","hintNoCredit":"Sudah lebih dari {n} petunjuk, jadi teka-teki ini tidak akan memberi kredit — tapi kamu tetap bisa menyelesaikannya.","hintAdFailed":"Iklan sedang tidak tersedia, jadi tidak ada yang berubah — petunjuknya masih bisa kamu ambil kalau mau.","stuck":"Buntu? Petunjuk membuka satu kotak, dan teka-teki ini tetap memberi kredit."},"tutorial":{"label":"Tutorial {name}","step":"Langkah {n} dari {total}","next":"Lanjut","done":"Selesai","skipStep":"Lewati langkah","skipTutorial":"Lewati tutorial","nice":"Bagus!","offScript":"Bukan itu: langkahnya dikembalikan agar petunjuk tetap cocok dengan papan. Coba yang diminta langkah ini.","offScriptRead":"Itu sudah dikembalikan agar petunjuk tetap cocok dengan papan. Baca langkah ini dulu.","pointer":{"drag":"seret","rightClick":"klik kanan","rightDrag":"seret dengan tombol kanan","middleClick":"klik tengah","longPress":"tekan lama","longPressDrag":"seret sambil menekan lama","twoFingerTap":"ketuk dua jari"}},"splash":{"tagline":"Teka-teki gambar tangan, siap dimainkan","skip":"Lewati"},"help":{"keypad":{"heading":"Papan tombol","introTouch":"Tombol di layar bisa dipakai untuk mengetik","introPointer":"**Papan tombol** di bilah alat memunculkan tombol di layar untuk mengetik","select":": pilih dulu sebuah kotak di papan, lalu tekan sebuah tombol.","clear":"- **⌫** mengosongkan kembali kotak yang dipilih.","pencil":"- **✎** menyalakan mode tanda pensil, jadi tombol masuk sebagai catatan kecil, bukan\\n  jawaban. Tekan lagi untuk kembali ke jawaban."}},"endgame":{"won":"Teka-teki terpecahkan!","lost":"Permainan berakhir","credit":"★ +1 kredit — cukup untuk membuka satu teka-teki baru di koleksi.","wonNote":"Siap untuk yang berikutnya?","forfeitNote":"Teka-teki ini tidak memberi kredit — jawabannya sudah ditampilkan di tengah jalan.","lostNote":"Kali ini belum berhasil. Coba sekali lagi?","next":"Teka-teki berikutnya","retry":"Coba lagi","dismiss":"Tutup dan lihat papannya","time":"Waktu","moves":"Langkah","hints":"Petunjuk","best":"Terbaik {time}","newBest":"Rekor baru!","stars":"{n} dari 3 bintang","stepUp":"Coba {preset} →"},"achievements":{"title":"Pencapaian","summary":"{n} dari {total} diraih","unlocked":"Pencapaian terbuka","secret":{"name":"Pencapaian rahasia","description":"Terus bermain untuk menemukannya."},"earnedOn":"Diraih {date}","progress":"{n} dari {goal}","collection":"Seluruh koleksi","tier":{"bronze":"Perunggu","silver":"Perak","gold":"Emas"},"meta":{"first-solve":{"name":"Langkah Pertama","description":"Selesaikan teka-teki pertamamu tanpa bantuan."},"solves-10":{"name":"Pemanasan","description":"Selesaikan 10 teka-teki."},"solves-50":{"name":"Ketagihan Teka-teki","description":"Selesaikan 50 teka-teki."},"solves-100":{"name":"Seratus Jaya","description":"Selesaikan 100 teka-teki."},"solves-250":{"name":"Mahaguru","description":"Selesaikan 250 teka-teki."},"specialist":{"name":"Spesialis","description":"Selesaikan 10 teka-teki di permainan yang sama."},"variety-3":{"name":"Icip-icip","description":"Selesaikan satu teka-teki di 3 permainan berbeda."},"variety-10":{"name":"Serba Bisa","description":"Selesaikan satu teka-teki di 10 permainan berbeda."},"variety-all":{"name":"Satu Kotak Penuh","description":"Selesaikan satu teka-teki di setiap permainan dalam koleksi."},"unlock-first":{"name":"Rak Baru","description":"Buka permainan pertamamu dengan kredit."},"unlock-15":{"name":"Koleksi Bertambah","description":"Punya 15 permainan yang terbuka."},"unlock-25":{"name":"Serenceng Kunci","description":"Punya 25 permainan yang terbuka."},"unlock-all":{"name":"Kunci Induk","description":"Buka setiap permainan dalam koleksi."},"hardest-1":{"name":"Siap Ditantang","description":"Selesaikan teka-teki di pengaturan tersulit sebuah permainan."},"hardest-10":{"name":"Pemburu Puncak","description":"Selesaikan pengaturan tersulit di 10 permainan berbeda."},"hardest-all":{"name":"Tak Tergoyahkan","description":"Selesaikan pengaturan tersulit di setiap permainan."},"pure-1":{"name":"Lembar Bersih","description":"Selesaikan teka-teki tanpa urungkan dan tanpa petunjuk."},"pure-25":{"name":"Tangan Mantap","description":"Selesaikan 25 teka-teki tanpa urungkan dan tanpa petunjuk."},"quick-draw":{"name":"Secepat Kilat","description":"Selesaikan teka-teki dalam 30 detik atau kurang."},"marathon":{"name":"Maraton","description":"Selesaikan teka-teki setelah lebih dari 20 menit mengerjakannya."},"comeback":{"name":"Pantang Menyerah","description":"Kalah di sebuah teka-teki, lalu kembali dan selesaikan."},"second-thoughts":{"name":"Pikir-pikir Lagi","description":"Urungkan 100 kali dan tetap selesaikan teka-tekinya."},"a-little-help":{"name":"Sedikit Bantuan","description":"Ambil sebuah petunjuk."},"oops":{"name":"Ups","description":"Kalah di sebuah teka-teki."},"night-owl":{"name":"Burung Hantu","description":"Selesaikan teka-teki antara tengah malam dan pukul 5 pagi."},"on-a-roll":{"name":"Lagi Panas","description":"Selesaikan 5 teka-teki dalam satu sesi."},"days-3":{"name":"Pelanggan Tetap","description":"Bermain pada 3 hari berbeda."},"days-7":{"name":"Setia","description":"Bermain pada 7 hari berbeda."},"days-30":{"name":"Penghuni Tetap","description":"Bermain pada 30 hari berbeda."},"quick-study":{"name":"Cepat Tangkap","description":"Mainkan sebuah tutorial sampai selesai."},"scholar":{"name":"Cendekia","description":"Mainkan 10 tutorial berbeda sampai selesai."},"collector-25":{"name":"Pengumpul Lencana","description":"Raih 25 pencapaian."},"collector-60":{"name":"Lemari Piala","description":"Raih 60 pencapaian."},"legend":{"name":"Legenda Teka-teki","description":"Raih semua pencapaian lainnya."}},"andMore":{"other":"{n} pencapaian terbuka"}},"welcome":{"title":"Pilih teka-teki pertamamu","subtitle":{"other":"{n} teka-teki untuk memulai. Pilih satu dan mainkan."},"more":{"other":"…dan {n} lagi untuk dibuka"},"how":"Setiap teka-teki yang kamu selesaikan memberi satu kredit, dan setiap kredit membuka permainan baru."},"gamepad":{"connected":"Kontroler terhubung"},"settings":{"title":"Pengaturan","done":"Selesai","sound":"Suara","volume":"Volume","reduceMotion":"Kurangi gerakan","vibration":"Getar","statistics":"Statistik permainan","on":"Nyala","off":"Mati","portalMuted":"Situs ini mematikan suara."}}`),Y=[[`menyeret dengan tombol kanan`,`menyeret sambil menekan lama`],[`seret dengan tombol kanan`,`seret sambil menekan lama`],[`menyeret dengan tombol kiri`,`menyeret`],[`seret dengan tombol kiri`,`seret`],[`tombol kanan mouse`,`tekan lama`],[`tombol kiri mouse`,`ketuk`],[`tombol tengah mouse`,`ketuk dua jari`],[`penunjuk mouse`,`jari`],[`kursor mouse`,`jari`],[`tombol kanan`,`tekan lama`],[`tombol kiri`,`ketuk`],[`tombol tengah`,`ketuk dua jari`],[`mengeklik kanan`,`menekan lama`],[`mengklik kanan`,`menekan lama`],[`diklik kanan`,`ditekan lama`],[`klik kanan`,`tekan lama`],[`mengeklik kiri`,`mengetuk`],[`mengklik kiri`,`mengetuk`],[`diklik kiri`,`diketuk`],[`sekali klik kiri`,`sekali ketuk`],[`klik kiri`,`ketuk`],[`mengeklik tengah`,`mengetuk dengan dua jari`],[`mengklik tengah`,`mengetuk dengan dua jari`],[`klik tengah`,`ketuk dua jari`],[`mengeklik ganda`,`mengetuk dua kali`],[`mengklik ganda`,`mengetuk dua kali`],[`klik ganda`,`ketuk dua kali`],[`klik pertamamu`,`ketukan pertamamu`],[`klik pertama`,`ketukan pertama`],[`klik kedua`,`ketukan kedua`],[`klik ketiga`,`ketukan ketiga`],[`klik fatal`,`ketukan fatal`],[`klik biasa`,`ketukan biasa`],[`satu klik`,`satu ketukan`],[`sekali klik`,`sekali ketuk`],[`mengkliknya`,`mengetuknya`],[`mengekliknya`,`mengetuknya`],[`mengeklik`,`mengetuk`],[`mengklik`,`mengetuk`],[`diklik`,`diketuk`],[`klik`,`ketuk`]],X=JSON.parse(`{"4-way rotational symmetry needs a square grid":"Simetri rotasi 4 arah membutuhkan kisi berbentuk persegi","A 2×2 grid is too small to make a puzzle from":"Kisi 2×2 terlalu kecil untuk dijadikan teka-teki","A cube rolling along a single row can never turn over all six faces":"Kubus yang menggelinding di satu baris saja tidak akan pernah membalik keenam sisinya","A given piece leaves the grid":"Sebuah potongan yang diberikan keluar dari kisi","A jigsaw block is too big":"Ada blok jigsaw yang terlalu besar","A jigsaw block is too small":"Ada blok jigsaw yang terlalu kecil","A killer cage is too big":"Ada sangkar yang terlalu besar","A killer cage is too small":"Ada sangkar yang terlalu kecil","A wrapping puzzle needs a width and height of at least 3 to have a unique solution":"Teka-teki dengan tepi bersambung butuh lebar dan tinggi minimal 3 agar solusinya unik","All parameters must be whole numbers":"Semua parameter harus bilangan bulat","Already solved":"Sudah terpecahkan","An edge cannot join a point to itself":"Sebuah garis tidak bisa menghubungkan satu titik dengan dirinya sendiri","Angle offset out of bounds.":"Pergeseran sudut di luar batas.","At least one grid dimension must be greater than zero":"Setidaknya satu dimensi kisi harus lebih besar dari nol","At least one of width and height for this grid type must be at least {0}":"Untuk jenis kisi ini, lebar atau tinggi harus minimal {0}","At least one of width and height must be greater than one":"Setidaknya salah satu dari lebar dan tinggi harus lebih besar dari satu","Bad character in grid description":"Karakter keliru dalam deskripsi kisi","Bad mine layout in game description":"Tata letak ranjau keliru dalam deskripsi permainan","Badly formatted move limit after grid description":"Format batas langkah setelah deskripsi kisi keliru","Barrier probability must be a number between 0 and 1":"Peluang penghalang harus berupa angka antara 0 dan 1","Barrier probability must be between 0 and 1":"Peluang penghalang harus antara 0 dan 1","Blue cells are placed where some faces could never reach them":"Kotak biru ditaruh di tempat yang tidak akan pernah dijangkau sebagian sisi","Both dimensions must be at least 2":"Kedua dimensi harus minimal 2","Both grid dimensions must be at least one":"Kedua dimensi kisi harus minimal satu","Bridges per direction must be between 1 and {0}":"Jembatan per arah harus antara 1 dan {0}","Can't create {0}×{1} puzzles":"Tidak bisa membuat teka-teki {0}×{1}","Clue did not provide 2 direction flags":"Petunjuk tidak memberikan 2 penanda arah","Clue is larger than the number of sides of its face":"Petunjuk lebih besar daripada jumlah sisi bidangnya","Clue is missing its number":"Petunjuk kehilangan angkanya","Clue number out of range":"Angka petunjuk di luar jangkauan","Colour out of range":"Warna di luar jangkauan","Colour out of range in grid description":"Warna di luar jangkauan dalam deskripsi kisi","Colours, pegs and guesses must be whole numbers":"Warna, pasak, dan tebakan harus bilangan bulat","Column counts inconsistent":"Angka petunjuk kolom tidak konsisten","Could not four-colour the map":"Tidak bisa mewarnai peta dengan empat warna","Count is larger than the line it describes":"Hitungannya lebih besar daripada garis yang dijelaskannya","Description contains a duplicate number":"Deskripsi memuat angka ganda","Description contains a number larger than the grid":"Deskripsi memuat angka yang lebih besar daripada kisinya","Description contains a number out of range":"Deskripsi memuat angka di luar jangkauan","Description contains a number that is too large":"Deskripsi memuat angka yang terlalu besar","Description contains a repeated number":"Deskripsi memuat angka yang berulang","Description contains an unexpected character":"Deskripsi memuat karakter yang tak terduga","Description contains invalid characters":"Deskripsi memuat karakter yang tidak valid","Description is corrupted":"Deskripsi rusak","Description is longer than expected":"Deskripsi lebih panjang daripada yang diharapkan","Description is shorter than expected":"Deskripsi lebih pendek daripada yang diharapkan","Description is too long":"Deskripsi terlalu panjang","Description is too short":"Deskripsi terlalu pendek","Description marks cells beyond the grid as blue":"Deskripsi menandai kotak di luar kisi sebagai biru","Description may only contain P, H and O":"Deskripsi hanya boleh memuat P, H, dan O","Description must be a comma-separated list of numbers":"Deskripsi harus berupa daftar angka yang dipisahkan koma","Description must be exactly {0} characters":"Deskripsi harus tepat {0} karakter","Description must be hex digits, a comma and a cell number":"Deskripsi harus berupa digit heksadesimal, sebuah koma, dan nomor kotak","Description must be numbers each followed by an orientation letter (u, l, d or r)":"Deskripsi harus berupa angka yang masing-masing diikuti huruf orientasi (u, l, d, atau r)","Description must be two hex strings separated by a comma":"Deskripsi harus berupa dua untai heksadesimal yang dipisahkan koma","Description must be {0} hexadecimal digits":"Deskripsi harus terdiri atas {0} digit heksadesimal","Description must contain at least one edge":"Deskripsi harus memuat setidaknya satu garis","Description must contain at least one peg":"Deskripsi harus memuat setidaknya satu pasak","Description must contain at least two islands":"Deskripsi harus memuat setidaknya dua pulau","Description must contain each number from 1 to {0} exactly once":"Deskripsi harus memuat setiap angka dari 1 sampai {0} tepat satu kali","Description must contain each row number from 1 to {0} exactly {1} times":"Deskripsi harus memuat setiap nomor baris dari 1 sampai {0} tepat {1} kali","Description must contain only digits":"Deskripsi hanya boleh memuat digit","Description must contain only numbers":"Deskripsi hanya boleh memuat angka","Description must contain {0} numbers":"Deskripsi harus memuat {0} angka","Description must contain {0} tiles":"Deskripsi harus memuat {0} ubin","Description must mark exactly {0} cells blue":"Deskripsi harus menandai tepat {0} kotak sebagai biru","Description must start with {0} hex digits":"Deskripsi harus diawali {0} digit heksadesimal","Description places two islands next to each other":"Deskripsi menaruh dua pulau bersebelahan","Description repeats a colour although duplicates are disallowed":"Deskripsi mengulang sebuah warna padahal pengulangan tidak diizinkan","Description too long":"Deskripsi terlalu panjang","Description too long for board size":"Deskripsi terlalu panjang untuk ukuran papannya","Description too short":"Deskripsi terlalu pendek","Description too short for board size":"Deskripsi terlalu pendek untuk ukuran papannya","Digits in a {0}×{1} puzzle cannot exceed {2}":"Angka dalam teka-teki {0}×{1} tidak boleh melebihi {2}","Disallowing duplicates requires at least as many colours as pegs":"Melarang pengulangan menuntut jumlah warna setidaknya sebanyak pasak","Domino descriptions inconsistent":"Deskripsi domino tidak konsisten","Dots too close together":"Titik-titiknya terlalu berdekatan","Duplicate edge in game description":"Garis ganda dalam deskripsi permainan","Edge list defines the wrong number of regions":"Daftar garis mendefinisikan jumlah wilayah yang keliru","Entrance square must contain a piece leaving the left edge":"Kotak pintu masuk harus memuat potongan yang keluar dari tepi kiri","Every killer cage must have exactly one sum":"Setiap sangkar killer harus punya tepat satu jumlah","Exit square must contain a piece leaving the bottom edge":"Kotak pintu keluar harus memuat potongan yang keluar dari tepi bawah","Expansion factor must be a number":"Faktor perluasan harus berupa angka","Expansion factor may not be negative":"Faktor perluasan tidak boleh negatif","Expansion factor must be from 0 to 100":"Faktor perluasan harus dari 0 sampai 100","Expected ',' after block structure description":"Diharapkan ',' setelah struktur blok","Expected ',' after grid description":"Diharapkan ',' setelah deskripsi kisi","Expected a list of edges like 0-1,1-2 in game description":"Diharapkan daftar garis seperti 0-1,1-2 dalam deskripsi permainan","Expected comma before clue list":"Diharapkan koma sebelum daftar petunjuk","Expected jigsaw block structure in game description":"Diharapkan struktur blok jigsaw dalam deskripsi permainan","Expected killer cage structure in game description":"Diharapkan struktur sangkar killer dalam deskripsi permainan","Expected killer clue grid in game description":"Diharapkan kisi petunjuk killer dalam deskripsi permainan","Expected slashes between clues":"Diharapkan garis miring di antara petunjuk","Expecting number in game description":"Mengharapkan angka dalam deskripsi permainan","Extra moves must not be negative":"Langkah tambahan tidak boleh negatif","Extreme puzzles with more than {0} symbols take too long to generate":"Teka-teki Ekstrem dengan lebih dari {0} simbol terlalu lama dibuat","Faulty game description":"Deskripsi permainan cacat","Flags contradicting each other":"Penanda saling bertentangan","Flags go off grid":"Penanda keluar dari kisi","Game ID must include parameters":"Kode teka-teki harus memuat parameter","Game description contained unexpected characters":"Deskripsi permainan memuat karakter yang tak terduga","Game description contains an unexpected character":"Deskripsi permainan memuat karakter yang tak terduga","Game description contains no dots":"Deskripsi permainan tidak memuat titik","Game description contains unexpected characters":"Deskripsi permainan memuat karakter yang tak terduga","Game description has {0} balls; expected {1}":"Deskripsi permainan punya {0} bola; diharapkan {1}","Game description is corrupted":"Deskripsi permainan rusak","Game description is longer than expected":"Deskripsi permainan lebih panjang daripada yang diharapkan","Game description is shorter than expected":"Deskripsi permainan lebih pendek daripada yang diharapkan","Game description is the wrong length":"Panjang deskripsi permainan keliru","Game description is too long":"Deskripsi permainan terlalu panjang","Game description is too short":"Deskripsi permainan terlalu pendek","Game description is wrong length":"Panjang deskripsi permainan keliru","Game description longer than expected":"Deskripsi permainan lebih panjang daripada yang diharapkan","Game description must be hexadecimal":"Deskripsi permainan harus heksadesimal","Game description shorter than expected":"Deskripsi permainan lebih pendek daripada yang diharapkan","Game description too long":"Deskripsi permainan terlalu panjang","Game is already solved":"Permainan sudah terpecahkan","Grid area must be at least six squares":"Luas kisi harus minimal enam kotak","Grid area must be greater than 1":"Luas kisi harus lebih besar dari 1","Grid area must be greater than one":"Luas kisi harus lebih besar dari satu","Grid description is the wrong length or not hexadecimal":"Panjang deskripsi kisi keliru atau bukan heksadesimal","Grid description strings not used with this grid type":"Jenis kisi ini tidak memakai deskripsi kisi","Grid dimensions cannot be negative":"Dimensi kisi tidak boleh negatif","Grid dimensions must be at most {0}":"Dimensi kisi paling banyak {0}","Grid dimensions must be whole numbers":"Dimensi kisi harus bilangan bulat","Grid is too big":"Kisinya terlalu besar","Grid must contain at least two squares":"Kisi harus memuat setidaknya dua kotak","Grid size must be between 3 and 9":"Ukuran kisi harus antara 3 dan 9","Grid size must be between {0} and {1}":"Ukuran kisi harus antara {0} dan {1}","Hard and Extreme puzzles are limited to a maximum number of {0}":"Teka-teki Sulit dan Ekstrem dibatasi sampai angka maksimum {0}","Height must be at least 3":"Tinggi harus minimal 3","Height must be at least five":"Tinggi harus minimal lima","Height must be at least one":"Tinggi harus minimal satu","Height must be at least the rotating block size":"Tinggi harus minimal sebesar ukuran blok putar","Height must be at least two":"Tinggi harus minimal dua","Illegal grid type":"Jenis kisi tidak sah","Incorrect number balance in game description":"Keseimbangan angka dalam deskripsi permainan tidak tepat","Initial x-coordinate was out of range":"Koordinat x awal di luar jangkauan","Initial y-coordinate was out of range":"Koordinat y awal di luar jangkauan","Internal error: solution is badly formatted":"Kesalahan internal: format solusi keliru","Invalid character in block structure specification":"Karakter tidak valid dalam spesifikasi struktur blok","Invalid character in game description":"Karakter tidak valid dalam deskripsi permainan","Invalid character in grid specification":"Karakter tidak valid dalam spesifikasi kisi","Invalid character in number list":"Karakter tidak valid dalam daftar angka","Invalid characters in game description":"Karakter tidak valid dalam deskripsi permainan","Invalid format grid description string.":"Format untai deskripsi kisi tidak valid.","Invalid parameters: {0}":"Parameter tidak valid: {0}","Invalid syntax in game description":"Sintaks tidak valid dalam deskripsi permainan","Jigsaw puzzles with more than {0} symbols take too long to generate":"Teka-teki Jigsaw dengan lebih dari {0} simbol terlalu lama dibuat","Killer puzzle dimensions must be smaller than 10":"Dimensi teka-teki killer harus lebih kecil dari 10","Malformed pending game description":"Deskripsi permainan tertunda salah bentuk","Matrix description is the wrong length or not hexadecimal":"Panjang deskripsi matriks keliru atau bukan heksadesimal","Maximum face number must be a whole number":"Angka sisi maksimum harus bilangan bulat","Maximum face number must be at least one":"Angka sisi maksimum harus minimal satu","Maximum face number must be at most {0}":"Angka sisi maksimum paling banyak {0}","Maximum of 9 colours":"Maksimal 9 warna","Medium puzzles need more than one bridge per direction, or loops disallowed":"Teka-teki Sedang butuh lebih dari satu jembatan per arah, atau lingkaran dilarang","Mines solver opened a mine: inconsistent knowledge":"Pemecah Ranjau membuka sebuah ranjau: pengetahuan tidak konsisten","Minimum number of balls may not be greater than maximum":"Jumlah bola minimum tidak boleh lebih besar daripada maksimum","Missing grid description string.":"Untai deskripsi kisi tidak ada.","Missing separator":"Pemisah tidak ada","Monster numbers do not match grid spaces":"Jumlah monster tidak cocok dengan ruang di kisi","More than one starting square specified":"Lebih dari satu kotak awal ditentukan","Multiple solutions exist for this puzzle":"Teka-teki ini punya lebih dari satu solusi","Must have at least five regions":"Harus ada setidaknya lima wilayah","Must have at least one guess":"Harus ada setidaknya satu tebakan","Must have between {0} and {1} colours":"Jumlah warna harus antara {0} dan {1}","No game set up to solve":"Belum ada permainan untuk dipecahkan","No gems specified":"Tidak ada permata yang ditentukan","No solution exists for this position":"Tidak ada solusi untuk posisi ini","No solution exists for this puzzle":"Tidak ada solusi untuk teka-teki ini","No solution found":"Solusi tidak ditemukan","No starting square specified":"Tidak ada kotak awal yang ditentukan","Not enough data in block structure specification":"Data dalam spesifikasi struktur blok tidak cukup","Not enough data in grid description":"Data dalam deskripsi kisi tidak cukup","Not enough data to fill grid":"Data tidak cukup untuk mengisi kisi","Not enough grid space to place all blue faces":"Ruang kisi tidak cukup untuk menaruh semua sisi biru","Not enough jigsaw blocks":"Jumlah blok jigsaw kurang","Not enough killer cages":"Jumlah sangkar kurang","Not enough numbers given after grid specification":"Angka yang diberikan setelah spesifikasi kisi tidak cukup","Not enough space to place the solid on an empty cell":"Ruang tidak cukup untuk menaruh bangun ruang di kotak kosong","Number of colours must be at least three":"Jumlah warna harus minimal tiga","Number of colours must be at least two":"Jumlah warna harus minimal dua","Number of points must be a whole number":"Jumlah titik harus bilangan bulat","Number of points must be at least {0}":"Jumlah titik harus minimal {0}","Number of points must be at most {0}":"Jumlah titik paling banyak {0}","Number of shuffling moves cannot be negative":"Jumlah langkah pengacakan tidak boleh negatif","Number of shuffling moves must be a whole number":"Jumlah langkah pengacakan harus bilangan bulat","Number of shuffling moves must be at most 10000":"Jumlah langkah pengacakan paling banyak 10000","Number of shuffling moves must be at most {0}":"Jumlah langkah pengacakan paling banyak {0}","Number out of range in game description":"Angka di luar jangkauan dalam deskripsi permainan","Number too large":"Angkanya terlalu besar","Out-of-range number in game description":"Angka di luar jangkauan dalam deskripsi permainan","Out-of-range number in grid description":"Angka di luar jangkauan dalam deskripsi kisi","Parameters must be whole numbers":"Parameter harus bilangan bulat","Patch coordinates do not identify a usable grid fragment":"Koordinat tambalan tidak menunjuk pada potongan kisi yang bisa dipakai","Patch offset out of bounds.":"Pergeseran tambalan di luar batas.","Percentage of black squares must be between 5% and 100%":"Persentase kotak hitam harus antara 5% dan 100%","Percentage of islands must be from 1% to 30%":"Persentase pulau harus dari 1% sampai 30%","Puzzle is inconsistent":"Teka-tekinya tidak konsisten","Puzzle is too large":"Teka-tekinya terlalu besar","Puzzle is too long for unique-rows mode":"Teka-tekinya terlalu panjang untuk mode baris unik","Puzzle is too tall for unique-rows mode":"Teka-tekinya terlalu tinggi untuk mode baris unik","Puzzle is unsolvable":"Teka-tekinya tidak bisa dipecahkan","Puzzle must have one entrance and one exit":"Teka-teki harus punya satu pintu masuk dan satu pintu keluar","Puzzles with more than {0} symbols take too long to generate":"Teka-teki dengan lebih dari {0} simbol terlalu lama dibuat","Random seed must not be empty":"Seed acak tidak boleh kosong","Rotating block size must be at least two":"Ukuran blok putar harus minimal dua","Row counts inconsistent":"Angka petunjuk baris tidak konsisten","Rows of blocks must be at least 1":"Baris blok harus minimal 1","Scoring system not recognised":"Sistem skor tidak dikenali","Size and difficulty must be whole numbers":"Ukuran dan kesulitan harus bilangan bulat","Size must be at least 5 for Adjacent puzzles of this difficulty":"Ukuran harus minimal 5 untuk teka-teki Bersebelahan pada tingkat kesulitan ini","Size must be between {0} and {1}":"Ukuran harus antara {0} dan {1}","Solution not known for this puzzle":"Solusi teka-teki ini belum diketahui","Solve operation failed":"Pemecahan gagal","Solve operation produced an invalid move":"Pemecahan menghasilkan langkah yang tidak valid","Solver could not finish this grid":"Pemecah tidak bisa menuntaskan kisi ini","Solving algorithm cannot complete this puzzle":"Algoritme pemecah tidak bisa menuntaskan teka-teki ini","Starting cell is outside the grid":"Kotak awal berada di luar kisi","Subtraction and division blocks must have area 2":"Blok pengurangan dan pembagian harus berluas 2","That grid has too many faces to generate":"Kisi itu punya terlalu banyak bidang untuk dibuat","The Cross board is only available at {0}×{1}":"Papan Silang hanya tersedia pada ukuran {0}×{1}","The Octagon board is only available at {0}×{1}":"Papan Segi Delapan hanya tersedia pada ukuran {0}×{1}","The ball has hit a mine; undo that move first":"Bolanya mengenai ranjau; urungkan dulu langkah itu","The grid can have at most {0} squares":"Kisi paling banyak boleh punya {0} kotak","The grid may have at most {0} squares":"Kisi paling banyak boleh punya {0} kotak","The initial square contains a mine":"Kotak awal memuat sebuah ranjau","The solid cannot start on a blue cell":"Bangun ruang tidak boleh mulai di kotak biru","The solution has already been revealed":"Solusinya sudah ditampilkan","There must be at least one ball":"Harus ada setidaknya satu bola","There must be at least one mine":"Harus ada setidaknya satu ranjau","This arrangement cannot be solved":"Susunan ini tidak bisa dipecahkan","This game does not support the Solve operation":"Permainan ini tidak mendukung Pecahkan","This puzzle has no solution":"Teka-teki ini tidak punya solusi","This puzzle instance contains a contradiction":"Teka-teki ini memuat kontradiksi","This puzzle is not self-consistent":"Teka-teki ini tidak konsisten dengan dirinya sendiri","Too few clues for block structure":"Petunjuk terlalu sedikit untuk struktur bloknya","Too few clues for grid size":"Petunjuk terlalu sedikit untuk ukuran kisinya","Too little data in clue list":"Data dalam daftar petunjuk terlalu sedikit","Too little data in edge list":"Data dalam daftar garis terlalu sedikit","Too many balls to fit in the grid":"Terlalu banyak bola untuk muat di kisi","Too many clues for block structure":"Petunjuk terlalu banyak untuk struktur bloknya","Too many clues for grid size":"Petunjuk terlalu banyak untuk ukuran kisinya","Too many colours (at most {0})":"Terlalu banyak warna (paling banyak {0})","Too many colours makes given grid size impossible":"Terlalu banyak warna membuat ukuran kisi yang diberikan mustahil","Too many guesses (at most {0})":"Terlalu banyak tebakan (paling banyak {0})","Too many jigsaw blocks":"Terlalu banyak blok jigsaw","Too many killer cages":"Terlalu banyak sangkar","Too many mines for grid size":"Terlalu banyak ranjau untuk ukuran kisinya","Too many pegs per guess (at most {0})":"Terlalu banyak pasak per tebakan (paling banyak {0})","Too many regions to fit in grid":"Terlalu banyak wilayah untuk muat di kisi","Too much data in block structure specification":"Data dalam spesifikasi struktur blok terlalu banyak","Too much data in clue list":"Data dalam daftar petunjuk terlalu banyak","Too much data in edge list":"Data dalam daftar garis terlalu banyak","Too much data to fill grid":"Data terlalu banyak untuk mengisi kisi","Too much data to fit in grid":"Data terlalu banyak untuk muat di kisi","Trivial solutions are uninteresting":"Solusi yang sepele tidak menarik","Unable to build a grid for these parameters":"Tidak bisa membangun kisi untuk parameter ini","Unable to build this grid":"Tidak bisa membangun kisi ini","Unable to find a solution for this puzzle":"Tidak bisa menemukan solusi untuk teka-teki ini","Unable to find a solution from this position":"Tidak bisa menemukan solusi dari posisi ini","Unable to find a solution to this puzzle":"Tidak bisa menemukan solusi bagi teka-teki ini","Unable to find a unique solution for this puzzle":"Tidak bisa menemukan solusi unik untuk teka-teki ini","Unable to generate a puzzle of this size":"Tidak bisa membuat teka-teki seukuran ini","Unable to generate a puzzle with these parameters":"Tidak bisa membuat teka-teki dengan parameter ini","Unable to solve this puzzle":"Tidak bisa memecahkan teka-teki ini","Unable to support more than {0} distinct symbols":"Tidak bisa mendukung lebih dari {0} simbol yang berbeda","Unable to work out any more of this puzzle":"Tidak bisa menyimpulkan apa-apa lagi dari teka-teki ini","Unexpected additional character at end of game description":"Karakter tambahan tak terduga di akhir deskripsi permainan","Unexpected additional data at end of game description":"Data tambahan tak terduga di akhir deskripsi permainan","Unexpected character '{0}' in description":"Karakter '{0}' tak terduga dalam deskripsi","Unexpected character in clue list":"Karakter tak terduga dalam daftar petunjuk","Unexpected character in edge list":"Karakter tak terduga dalam daftar garis","Unexpected data at end of game description":"Data tak terduga di akhir deskripsi permainan","Unknown board type":"Jenis papan tidak dikenal","Unknown character in description":"Karakter tidak dikenal dalam deskripsi","Unknown difficulty":"Tingkat kesulitan tidak dikenal","Unknown difficulty level":"Tingkat kesulitan tidak dikenal","Unknown difficulty rating":"Peringkat kesulitan tidak dikenal","Unknown shape type":"Jenis bentuk tidak dikenal","Unknown symmetry":"Simetri tidak dikenal","Unknown symmetry type":"Jenis simetri tidak dikenal","Unrecognised character in game description":"Karakter tidak dikenali dalam deskripsi permainan","Unrecognised characters in game description":"Karakter tidak dikenali dalam deskripsi permainan","Unrecognised clue type":"Jenis petunjuk tidak dikenali","Unrecognised grid description.":"Deskripsi kisi tidak dikenali.","Unrecognised solid type":"Jenis bangun ruang tidak dikenali","Width and height cannot both be two":"Lebar dan tinggi tidak boleh dua-duanya bernilai dua","Width and height for this grid type must both be at least {0}":"Untuk jenis kisi ini, lebar dan tinggi keduanya harus minimal {0}","Width and height must be at least two":"Lebar dan tinggi harus minimal dua","Width and height must be at least {0}":"Lebar dan tinggi harus minimal {0}","Width and height must be at most twelve":"Lebar dan tinggi paling banyak dua belas","Width and height must be at most {0}":"Lebar dan tinggi paling banyak {0}","Width and height must be at most {0} to generate a puzzle":"Lebar dan tinggi paling banyak {0} agar teka-teki bisa dibuat","Width and height must be positive":"Lebar dan tinggi harus positif","Width and height must be whole numbers":"Lebar dan tinggi harus bilangan bulat","Width and height must both be at least 3":"Lebar dan tinggi keduanya harus minimal 3","Width and height must both be at least four":"Lebar dan tinggi keduanya harus minimal empat","Width and height must both be at least one":"Lebar dan tinggi keduanya harus minimal satu","Width and height must both be at least two":"Lebar dan tinggi keduanya harus minimal dua","Width and height must both be even":"Lebar dan tinggi keduanya harus genap","Width and height must both be greater than three":"Lebar dan tinggi keduanya harus lebih besar dari tiga","Width and height must both be greater than two":"Lebar dan tinggi keduanya harus lebih besar dari dua","Width and height must both be greater than zero":"Lebar dan tinggi keduanya harus lebih besar dari nol","Width and height must both be positive":"Lebar dan tinggi keduanya harus positif","With three colours, a solvable grid may have at most {0} squares":"Dengan tiga warna, kisi yang dapat diselesaikan paling banyak berisi {0} kotak","Width must be at least 3":"Lebar harus minimal 3","Width must be at least five":"Lebar harus minimal lima","Width must be at least one":"Lebar harus minimal satu","Width must be at least the rotating block size":"Lebar harus minimal sebesar ukuran blok putar","Width must be at least two":"Lebar harus minimal dua","Width, height and ball counts must be whole numbers":"Lebar, tinggi, dan jumlah bola harus bilangan bulat","Width, height and difficulty must be whole numbers":"Lebar, tinggi, dan kesulitan harus bilangan bulat","Width, height and number of colours must be whole numbers":"Lebar, tinggi, dan jumlah warna harus bilangan bulat","Width, height, block size and move count must be whole numbers":"Lebar, tinggi, ukuran blok, dan jumlah langkah harus bilangan bulat","X puzzles need at least four symbols":"Teka-teki X butuh setidaknya empat simbol","X-diagonal jigsaw puzzles with more than {0} symbols take too long to generate":"Teka-teki Jigsaw dengan diagonal X dan lebih dari {0} simbol terlalu lama dibuat","You have hit a mine; undo that move first":"Kamu kena ranjau; urungkan dulu langkah itu","a cell may be a number position for only one rectangle":"sebuah kotak hanya boleh menjadi posisi angka bagi satu persegi panjang","at least one column contains more numbers than will fit":"setidaknya satu kolom berisi lebih banyak angka daripada yang muat","at least one row contains more numbers than will fit":"setidaknya satu baris berisi lebih banyak angka daripada yang muat","cells are not adjacent":"kotak-kotaknya tidak bersebelahan","domino layout: no path between singletons":"tata letak domino: tidak ada lintasan antar kotak tunggal","domino layout: stranded square cannot be paired":"tata letak domino: kotak terasing tidak bisa dipasangkan","dot touches the outside twice":"titik menyentuh bagian luar dua kali","dot with fewer than two edges":"titik dengan kurang dari dua garis","edge does not follow its face":"garis tidak mengikuti bidangnya","edge shared by three faces":"garis dipakai bersama oleh tiga bidang","expected CxR or Nj":"diharapkan CxR atau Nj","expected WxH":"diharapkan WxH","expected WxHnN":"diharapkan WxHnN","expected a grid size":"diharapkan sebuah ukuran kisi","expected a maximum number":"diharapkan sebuah angka maksimum","expected a number of points":"diharapkan sebuah jumlah titik","expected a solid letter followed by WxH":"diharapkan huruf bangun ruang yang diikuti WxH","expected something like c6p4g10Bm":"diharapkan sesuatu seperti c6p4g10Bm","expected w<W>h<H>m<MIN>M<MAX>":"diharapkan w<W>h<H>m<MIN>M<MAX>","generateKeen: solver disagrees with the square":"generateKeen: pemecah tidak sepakat dengan perseginya","grid inconsistency while walking round a face":"ketidakkonsistenan kisi saat menelusuri sebuah bidang","inconsistent clues while assembling":"petunjuk tidak konsisten saat merakit","inconsistent distance field":"medan jarak tidak konsisten","inconsistent face classes":"kelas bidang tidak konsisten","latin rectangle could not be extended":"persegi panjang latin tidak bisa diperluas","latinGenerate: no extension found":"latinGenerate: perluasan tidak ditemukan","latinSquare: rectangle could not be extended":"latinSquare: persegi panjang tidak bisa diperluas","line too long for solver":"garisnya terlalu panjang untuk pemecah","no clue left to place":"tidak ada petunjuk tersisa untuk ditaruh","no such laser: {0}":"tidak ada laser seperti itu: {0}","rolled solid does not fit its destination":"bangun ruang yang digulingkan tidak muat di tujuannya","shown":"dibuka","too few row/column specifications":"spesifikasi baris/kolom terlalu sedikit","too many row/column specifications":"spesifikasi baris/kolom terlalu banyak","unrecognised character in game description":"karakter tidak dikenali dalam deskripsi permainan","yes!":"benar!","9×9 Extreme puzzles take too long to generate; try 8×8 or Expert":"Teka-teki 9×9 Ekstrem terlalu lama dibuat; coba 8×8 atau Ahli"}`),Z={moves:`Langkah: {n}`,movesCompleted:{other:`Selesai dalam {n} langkah`},movesSinceSolve:`Langkah sejak dipecahkan otomatis: {n}`,completedMoves:`Selesai! Langkah: {n}`,solvedByComputer:`Dipecahkan oleh komputer`,completed:`Selesai!`,completedPrefix:`Selesai! `,autoSolved:`Dipecahkan otomatis.`,autoSolvedPrefix:`Dipecahkan otomatis. `,autoSolverUsedPrefix:`Pemecah otomatis dipakai. `,failedPrefix:`Langkah habis. `,dead:`Kamu kena ranjau.`,target:` (target {n})`},Q=JSON.parse(`{"blackbox":{"name":"Kotak Hitam","description":"Temukan bola-bola tersembunyi dengan menembakkan laser ke dalam kotak dan mengamati di mana laser keluar.","preset":{"5x5_3_balls":"5×5, 3 bola","8x8_5_balls":"8×8, 5 bola","8x8_3_6_balls":"8×8, 3-6 bola","10x10_5_balls":"10×10, 5 bola","10x10_4_10_balls":"10×10, 4-10 bola"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"no_of_balls":{"name":"Jumlah bola"}},"status":{"correct":"BENAR!","wrong":{"other":"{wrong} salah dan {n} bola terlewat."},"marked":"Bola ditandai: {n} / {range}  ·  Laser ditembakkan: {fired}","tooMany":"  ·  Kelebihan {n} tanda bola.","check":"  ·  Tekan tombol di sudut untuk memeriksa."},"achievement":{"sparing_shots":{"name":"Hemat Tembakan","description":"Temukan semua bola dengan menembakkan laser dari paling banyak separuh lubang."},"pinpoint":{"name":"Tepat Sasaran","description":"Temukan semua bola di kotak 8×8 atau lebih besar, dengan paling banyak tiga laser untuk setiap bola."},"shot_in_the_dark":{"name":"Menembak dalam Gelap","description":"Periksakan bolamu tanpa menembakkan satu laser pun, dan salah."}}},"bridges":{"name":"Jembatan","alsoKnownAs":"Hashiwokakero, Hashi","description":"Hubungkan pulau-pulau dengan jembatan sampai setiap angka terpenuhi dan tidak ada yang bersilangan.","preset":{"7x7_easy":"7×7 Mudah","7x7_medium":"7×7 Sedang","7x7_hard":"7×7 Sulit","10x10_easy":"10×10 Mudah","10x10_medium":"10×10 Sedang","10x10_hard":"10×10 Sulit","15x15_easy":"15×15 Mudah","15x15_medium":"15×15 Sedang","15x15_hard":"15×15 Sulit","10x10_medium_no_loops":"10×10 Sedang, tanpa lingkaran"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"difficulty":{"name":"Kesulitan","choice":{"easy":"Mudah","medium":"Sedang","hard":"Sulit"}},"allow_loops":{"name":"Izinkan lingkaran"},"max_bridges_per_direction":{"name":"Maks. jembatan per arah","choice":{"1":"1","2":"2","3":"3","4":"4"}},"of_island_squares":{"name":"% kotak pulau","choice":{"5":"5%","10":"10%","15":"15%","20":"20%","25":"25%","30":"30%"}},"expansion_factor":{"name":"Faktor perluasan (%)","choice":{"0":"0%","10":"10%","20":"20%","30":"30%","40":"40%","50":"50%","60":"60%","70":"70%","80":"80%","90":"90%","100":"100%"}}},"action":{"g":{"label":"Panduan","title":"Tampilkan atau sembunyikan garis samar di setiap tempat jembatan bisa dibuat (G)"},"e":{"label":"Hapus","title":"Seret dari sebuah pulau untuk menyingkirkan jembatannya ke arah itu (E)"}},"achievement":{"no_markers":{"name":"Perairan Jernih","description":"Selesaikan teka-teki 10×10 atau lebih besar tanpa menggambar satu pun tanda \\"tidak ada jembatan\\"."},"sure_footing":{"name":"Pijakan Mantap","description":"Selesaikan teka-teki 10×10 atau lebih besar tingkat Sulit tanpa menghapus jembatan dan tanpa Urungkan."}}},"cube":{"name":"Kubus","description":"Gulingkan bangun ruang di atas kisi sampai semua kotak biru menempel di sisi-sisinya.","preset":{"cube":"Kubus","tetrahedron":"Tetrahedron","octahedron":"Oktahedron","icosahedron":"Ikosahedron"},"config":{"type_of_solid":{"name":"Jenis bangun ruang","choice":{"tetrahedron":"Tetrahedron","cube":"Kubus","octahedron":"Oktahedron","icosahedron":"Ikosahedron"}},"width_top":{"name":"Lebar / atas"},"height_bottom":{"name":"Tinggi / bawah"}},"achievement":{"short_haul":{"name":"Jarak Dekat","description":"Tuntaskan Kubus dengan semua sisi biru dalam paling banyak dua puluh gulingan."},"octahedron_ace":{"name":"Delapan Sisi Kilat","description":"Tuntaskan Oktahedron dengan semua sisi biru dalam paling banyak tiga puluh gulingan."},"scenic_route":{"name":"Keliling Dunia","description":"Gulingkan bangun ruangnya paling sedikit dua ratus kali sebelum semua sisi biru."}}},"dominosa":{"name":"Dominosa","description":"Temukan letak satu set kartu domino yang diacak di dalam kisi angka.","preset":{"up_to_double_3":"Sampai dobel-3","up_to_double_4":"Sampai dobel-4","up_to_double_5":"Sampai dobel-5","up_to_double_6":"Sampai dobel-6","up_to_double_7":"Sampai dobel-7","up_to_double_8":"Sampai dobel-8","up_to_double_9":"Sampai dobel-9"},"config":{"maximum_number_on_dominoes":{"name":"Angka maksimum pada domino"},"difficulty":{"name":"Kesulitan","choice":{"very_easy":"Sangat mudah","easy":"Mudah","hard":"Sulit","extreme":"Ekstrem","ambiguous":"Ambigu"}}},"achievement":{"no_lines":{"name":"Tanpa Pensil","description":"Selesaikan set dobel-6 atau lebih besar tanpa menggambar satu garis pun."},"one_click_each":{"name":"Satu Klik Saja","description":"Selesaikan set dobel-6 atau lebih besar dengan satu klik per domino dan tanpa Urungkan."},"doubles_first":{"name":"Dobel Duluan","description":"Pasang setiap domino dobel di set itu sebelum memasang domino lainnya."}}},"fifteen":{"name":"Lima Belas","alsoKnownAs":"Puzzle geser, 15 puzzle","description":"Geser ubin-ubin sampai tersusun berurutan.","preset":{"3x3":"3×3","4x4":"4×4","5x5":"5×5"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"}},"achievement":{"short_shuffle":{"name":"Kocokan Singkat","description":"Urutkan papan 4×4 dalam 100 langkah atau kurang."},"five_flyer":{"name":"Kilat Lima Kali Lima","description":"Urutkan papan 5×5 dalam waktu kurang dari tiga menit."},"scenic_route":{"name":"Jalan Memutar","description":"Pakai lebih dari 300 langkah untuk mengurutkan papan 3×3."}}},"filling":{"name":"Isian","alsoKnownAs":"Fillomino","description":"Isi kisi agar setiap kelompok angka yang sama terdiri atas kotak sebanyak angka itu.","preset":{"9x7":"9×7","13x9":"13×9","17x13":"17×13"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"}},"achievement":{"in_ink":{"name":"Ditulis dengan Tinta","description":"Selesaikan Isian tanpa mengganti atau menghapus angka apa pun, dan tanpa Urungkan."},"one_stroke":{"name":"Sekali Jadi","description":"Selesaikan Isian 13×9 atau lebih besar dengan menulis setiap blok angka dalam satu langkah."}},"action":{"f":{"label":"Isi","title":"Seret dari sebuah angka untuk menuliskannya ke setiap kotak yang kamu lewati (F)"}}},"flip":{"name":"Balik","alsoKnownAs":"Lights Out","description":"Nyalakan semua kotak; setiap kali ditekan, kotak di sekitarnya ikut terbalik.","preset":{"3x3_crosses":"3×3 Silang","4x4_crosses":"4×4 Silang","5x5_crosses":"5×5 Silang","3x3_random":"3×3 Acak","4x4_random":"4×4 Acak","5x5_random":"5×5 Acak"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"shape_type":{"name":"Jenis bentuk","choice":{"crosses":"Silang","random":"Acak"}}},"achievement":{"press_once":{"name":"Sekali Tekan","description":"Nyalakan papan 4×4 atau lebih besar tanpa menekan kotak mana pun dua kali."},"fewest_presses":{"name":"Seminim Mungkin","description":"Nyalakan papan 5×5 dengan jumlah tekanan paling sedikit yang mungkin."}}},"flood":{"name":"Banjir","alsoKnownAs":"Flood It","description":"Banjiri kisi dari sudut sampai semuanya satu warna, tanpa melewati batas langkah.","preset":{"12x12_easy":"12×12 Mudah","12x12_medium":"12×12 Sedang","12x12_hard":"12×12 Sulit","16x16_medium":"16×16 Sedang","16x16_hard":"16×16 Sulit","12x12_3_colours":"12×12, 3 warna","12x12_4_colours":"12×12, 4 warna"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"colours":{"name":"Warna"},"extra_moves_permitted":{"name":"Langkah tambahan yang diizinkan"}},"status":{"moves":"{n} / {limit} langkah"},"achievement":{"spare_moves":{"name":"Langkah Berlebih","description":"Banjiri kisi dengan sisa paling sedikit tiga langkah."},"beat_the_solver":{"name":"Kalahkan Mesin","description":"Banjiri kisi dengan langkah lebih sedikit daripada solusi komputer."},"one_colour_short":{"name":"Kurang Satu Warna","description":"Kehabisan langkah dengan hanya dua warna tersisa di kisi."}}},"galaxies":{"name":"Galaksi","alsoKnownAs":"Spiral Galaxies, Tentai Show","description":"Bagi kisi menjadi wilayah-wilayah yang masing-masing simetris terhadap satu titik di dalamnya.","preset":{"7x7_medium":"7×7 Sedang","7x7_extreme":"7×7 Ekstrem","10x10_medium":"10×10 Sedang","15x15_medium":"15×15 Sedang"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"difficulty":{"name":"Kesulitan","choice":{"medium":"Sedang","extreme":"Ekstrem"}}},"achievement":{"no_arrows":{"name":"Tanpa Penunjuk","description":"Selesaikan Galaksi 10×10 atau lebih besar tanpa menyeret satu tanda panah pun."},"steady_hand":{"name":"Bintang Tetap","description":"Selesaikan Galaksi 10×10 atau lebih besar tanpa menghapus dinding dan tanpa Urungkan."}}},"guess":{"name":"Tebakan","alsoKnownAs":"Mastermind","description":"Tebak deretan pasak berwarna yang tersembunyi dari tanda pada tebakan-tebakanmu.","preset":{"standard":"Standar","super":"Super"},"config":{"colours":{"name":"Warna"},"pegs_per_guess":{"name":"Pasak per tebakan"},"guesses":{"name":"Jumlah tebakan"},"allow_blanks":{"name":"Izinkan slot kosong"},"allow_duplicates":{"name":"Izinkan pengulangan"}},"action":{"l":{"label":"Huruf","title":"Beri label huruf pada pasak (L)"},"k":{"label":"Tahan","title":"Klik sebuah pasak di barismu untuk membawanya ke tebakan berikutnya (K)"}},"status":{"revealed":"Solusi ditampilkan","solved":{"other":"Terpecahkan dalam {n} tebakan"},"outOfGuesses":"Tebakan habis: solusinya ditampilkan","guessN":"Tebakan {n} dari {total}"},"achievement":{"five_guesses":{"name":"Pemecah Kode","description":"Temukan baris tersembunyi dalam lima tebakan atau kurang."},"super_sleuth":{"name":"Detektif Super","description":"Temukan baris tersembunyi Super berisi lima pasak dalam enam tebakan atau kurang."},"so_near":{"name":"Nyaris Saja","description":"Kehabisan tebakan dengan semua pasak kecuali satu di tempat yang benar."}}},"inertia":{"name":"Inersia","description":"Luncurkan bola di dalam kisi untuk mengumpulkan setiap permata tanpa mengenai ranjau.","preset":{"10x8":"10×8","15x12":"15×12","20x16":"20×16"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"}},"status":{"gems":"Permata: {n}","deaths":" · Mati: {n}"},"achievement":{"hat_trick":{"name":"Hattrick","description":"Kumpulkan tiga permata atau lebih dengan satu gelindingan bola."},"shortcut":{"name":"Jalan Pintas","description":"Kumpulkan semua permata di papan 15×12 atau lebih besar dengan gelindingan lebih sedikit daripada Pecahkan."},"last_gem_mine":{"name":"Menang Tapi Hancur","description":"Menggelinding ke ranjau dengan gelindingan yang sama yang memungut permata terakhir."}}},"keen":{"name":"Keen","alsoKnownAs":"KenKen, Calcudoku","description":"Isi persegi latin agar setiap sangkar memenuhi petunjuk hitungannya.","preset":{"4x4_easy":"4×4 Mudah","5x5_easy":"5×5 Mudah","5x5_easy_x_only":"5×5 Mudah, hanya ×","6x6_easy":"6×6 Mudah","6x6_medium":"6×6 Sedang","6x6_medium_x_only":"6×6 Sedang, hanya ×","6x6_hard":"6×6 Sulit","6x6_expert":"6×6 Ahli","6x6_extreme":"6×6 Ekstrem","9x9_medium":"9×9 Sedang"},"config":{"grid_size":{"name":"Ukuran kisi"},"difficulty":{"name":"Kesulitan","choice":{"easy":"Mudah","medium":"Sedang","hard":"Sulit","expert":"Ahli","extreme":"Ekstrem"}},"multiplication_only":{"name":"Hanya perkalian"}},"action":{"m":{"label":"Tanda","title":"Tulis setiap kemungkinan sebagai tanda pensil di semua kotak kosong (M)"},"l":{"label":"Sorot","title":"Sorot setiap kotak yang berisi angka yang terakhir kamu sentuh (L)"}},"achievement":{"no_pencil":{"name":"Hitung di Kepala","description":"Selesaikan Keen 6×6 atau lebih besar tanpa menulis satu tanda pensil pun."},"products_only":{"name":"Murni Perkalian","description":"Selesaikan Keen 6×6 Sedang dengan perkalian saja."}}},"lightup":{"name":"Nyalakan","alsoKnownAs":"Akari, Light Up","description":"Pasang lampu agar setiap kotak tersinari dan tidak ada lampu yang saling menyinari.","preset":{"7x7_easy":"7×7 Mudah","7x7_medium":"7×7 Sedang","7x7_hard":"7×7 Sulit","10x10_easy":"10×10 Mudah","10x10_medium":"10×10 Sedang","10x10_hard":"10×10 Sulit","14x14_easy":"14×14 Mudah","14x14_medium":"14×14 Sedang","14x14_hard":"14×14 Sulit"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"of_black_squares":{"name":"% kotak hitam"},"symmetry":{"name":"Simetri","choice":{"none":"Tidak ada","2_way_mirror":"Cermin 2 arah","2_way_rotational":"Rotasi 2 arah","4_way_mirror":"Cermin 4 arah","4_way_rotational":"Rotasi 4 arah"}},"difficulty":{"name":"Kesulitan","choice":{"easy":"Mudah","medium":"Sedang","hard":"Sulit"}}},"achievement":{"no_crosses":{"name":"Hanya Lampu","description":"Selesaikan Nyalakan 10×10 atau lebih besar tanpa menggambar satu tanda silang pun."},"no_takebacks":{"name":"Ide Cemerlang","description":"Selesaikan Nyalakan tingkat Sulit tanpa pernah mengambil kembali lampu."}},"action":{"x":{"label":"Silang","title":"Klik memasang tanda silang alih-alih bola lampu (X)"}}},"loopy":{"name":"Lingkaran","alsoKnownAs":"Slitherlink","description":"Gambar satu lingkaran tertutup; setiap angka menunjukkan jumlah garis di sekelilingnya.","preset":{"7x7_squares_easy":"7×7 Persegi Mudah","10x10_squares_easy":"10×10 Persegi Mudah","7x7_squares_medium":"7×7 Persegi Sedang","10x10_squares_medium":"10×10 Persegi Sedang","7x7_squares_expert":"7×7 Persegi Ahli","10x10_squares_expert":"10×10 Persegi Ahli","10x10_triangular_expert":"10×10 Segitiga Ahli","12x10_honeycomb_expert":"12×10 Sarang Lebah Ahli","7x7_snub_square_expert":"7×7 Persegi Snub Ahli","9x9_cairo_expert":"9×9 Cairo Ahli","5x4_great_hexagonal_expert":"5×4 Heksagonal Besar Ahli","7x7_octagonal_expert":"7×7 Oktagonal Ahli","5x5_kites_expert":"5×5 Layang-layang Ahli","5x5_floret_expert":"5×5 Floret Ahli","5x4_dodecagonal_expert":"5×4 Dodekagonal Ahli","5x4_great_dodecagonal_expert":"5×4 Dodekagonal Besar Ahli","10x10_penrose_kite_dart_expert":"10×10 Penrose (layang-layang/panah) Ahli","10x10_penrose_rhombs_expert":"10×10 Penrose (belah ketupat) Ahli"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"grid_type":{"name":"Jenis kisi","choice":{"squares":"Persegi","triangular":"Segitiga","honeycomb":"Sarang Lebah","snub_square":"Persegi Snub","cairo":"Cairo","great_hexagonal":"Heksagonal Besar","octagonal":"Oktagonal","kites":"Layang-layang","floret":"Floret","dodecagonal":"Dodekagonal","great_dodecagonal":"Dodekagonal Besar","penrose_kite_dart":"Penrose (layang-layang/panah)","penrose_rhombs":"Penrose (belah ketupat)"}},"difficulty":{"name":"Kesulitan","choice":{"easy":"Mudah","medium":"Sedang","hard":"Sulit","expert":"Ahli"}}},"achievement":{"off_grid":{"name":"Keluar Jalur","description":"Selesaikan Lingkaran pada ubinan apa pun selain persegi."},"no_crosses":{"name":"Hanya Lingkarannya","description":"Selesaikan Lingkaran 10×10 tanpa mencoret satu sisi pun."},"aperiodic":{"name":"Aperiodik","description":"Selesaikan Lingkaran Penrose tanpa pernah menghapus garis yang sudah kamu gambar."}},"action":{"x":{"label":"Silang","title":"Klik mencoret sisi alih-alih menggambar garis (X)"}}},"magnets":{"name":"Magnet","description":"Isi domino dengan magnet atau keping kosong agar jumlah kutubnya pas.","preset":{"6x5_easy":"6×5 Mudah","6x5_hard":"6×5 Sulit","6x5_hard_strip_clues":"6×5 Sulit, petunjuk dipangkas","8x7_easy":"8×7 Mudah","8x7_hard":"8×7 Sulit","8x7_hard_strip_clues":"8×7 Sulit, petunjuk dipangkas","10x9_hard":"10×9 Sulit","10x9_hard_strip_clues":"10×9 Sulit, petunjuk dipangkas"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"difficulty":{"name":"Kesulitan","choice":{"easy":"Mudah","hard":"Sulit"}},"strip_clues":{"name":"Pangkas petunjuk"}},"achievement":{"no_flips":{"name":"Arah yang Benar","description":"Selesaikan Magnet 8×7 atau lebih besar tanpa pernah membalik magnet."},"stripped":{"name":"Kabel Telanjang","description":"Selesaikan Magnet 10×9 Sulit dengan petunjuk dipangkas dalam waktu kurang dari sepuluh menit."}},"action":{"b":{"label":"Polos","title":"Klik menandai domino polos alih-alih menaruh magnet (B)"}}},"map":{"name":"Peta","description":"Warnai peta dengan empat warna agar tidak ada dua wilayah bertetangga yang sewarna.","preset":{"20x15_easy_30_regions":"20×15 Mudah, 30 wilayah","20x15_medium_30_regions":"20×15 Sedang, 30 wilayah","20x15_hard_30_regions":"20×15 Sulit, 30 wilayah","20x15_extreme_30_regions":"20×15 Ekstrem, 30 wilayah","30x25_medium_75_regions":"30×25 Sedang, 75 wilayah","30x25_hard_75_regions":"30×25 Sulit, 75 wilayah"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"regions":{"name":"Wilayah"},"difficulty":{"name":"Kesulitan","choice":{"easy":"Mudah","medium":"Sedang","hard":"Sulit","extreme":"Ekstrem"}}},"achievement":{"no_dots":{"name":"Atlas Tangan Bebas","description":"Selesaikan Peta Sulit atau lebih sulit tanpa satu titik pensil pun."},"steady_brush":{"name":"Kuas Mantap","description":"Selesaikan Peta Ekstrem tanpa pernah mengganti warna sebuah wilayah."}},"action":{"l":{"label":"Nomor","title":"Tampilkan sebuah nomor di setiap wilayah (L)"}}},"mines":{"name":"Ranjau","alsoKnownAs":"Minesweeper","description":"Buka setiap kotak yang bukan ranjau; kamu tidak perlu menebak-nebak.","preset":{"9x9_beginner_10_mines":"9×9 Pemula, 10 ranjau","9x9_35_mines":"9×9, 35 ranjau","16x16_intermediate_40_mines":"16×16 Menengah, 40 ranjau","16x16_99_mines":"16×16, 99 ranjau","30x16_expert_99_mines":"30×16 Ahli, 99 ranjau","30x16_170_mines":"30×16, 170 ranjau"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"mines":{"name":"Ranjau"},"ensure_solubility":{"name":"Pastikan bisa dipecahkan"}},"status":{"marked":"Ditandai: {n} / {total}","deaths":" · Mati: {n}"},"achievement":{"no_flags":{"name":"Tanpa Bendera","description":"Menangkan permainan Ranjau tanpa memasang satu bendera pun."},"expert_sweep":{"name":"Regu Penjinak Bom","description":"Menangkan papan Ahli 30×16 dalam waktu kurang dari lima menit."},"so_close":{"name":"Sedikit Lagi","description":"Injak ranjau saat tersisa paling banyak tiga kotak aman untuk dibuka."}}},"net":{"name":"Jaringan","alsoKnownAs":"NetWalk","description":"Putar ubin-ubin sampai semuanya tersambung ke pusat.","preset":{"5x5":"5×5","7x7":"7×7","9x9":"9×9","11x11":"11×11","13x11":"13×11","5x5_wrapping":"5×5 tepi bersambung","7x7_wrapping":"7×7 tepi bersambung","9x9_wrapping":"9×9 tepi bersambung","11x11_wrapping":"11×11 tepi bersambung","13x11_wrapping":"13×11 tepi bersambung"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"walls_wrap_around":{"name":"Tepi bersambung"},"barrier_probability":{"name":"Peluang penghalang"},"ensure_unique_solution":{"name":"Pastikan solusi unik"}},"action":{"j":{"label":"Acak","title":"Putar acak setiap ubin yang tidak terkunci (J)"},"scroll_left":{"label":"←","title":"Geser tampilan ke kiri (Shift+←)"},"scroll_up":{"label":"↑","title":"Geser tampilan ke atas (Shift+↑)"},"scroll_down":{"label":"↓","title":"Geser tampilan ke bawah (Shift+↓)"},"scroll_right":{"label":"→","title":"Geser tampilan ke kanan (Shift+→)"},"k":{"label":"Kunci","title":"Klik ubin untuk mengunci atau membuka kuncinya alih-alih memutarnya (K)"}},"status":{"active":"Aktif: {n}/{total}"},"achievement":{"no_locks":{"name":"Tanpa Gembok","description":"Selesaikan Jaringan 9×9 atau lebih besar tanpa mengunci satu ubin pun."},"not_a_turn_wasted":{"name":"Tak Satu Putaran Sia-sia","description":"Selesaikan Jaringan 9×9 atau lebih besar tanpa memutar ubin mana pun lebih dari yang perlu."},"jumbled":{"name":"Kocar-kacir","description":"Tekan Acak dan tetap selesaikan teka-tekinya."}}},"netslide":{"name":"Geser Jaringan","description":"Geser baris dan kolom potongan jaringan sampai semuanya tersambung.","preset":{"3x3_easy":"3×3 mudah","3x3_medium":"3×3 sedang","3x3_hard":"3×3 sulit","4x4_easy":"4×4 mudah","4x4_medium":"4×4 sedang","4x4_hard":"4×4 sulit","5x5_easy":"5×5 mudah","5x5_medium":"5×5 sedang","5x5_hard":"5×5 sulit"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"walls_wrap_around":{"name":"Tepi bersambung"},"barrier_probability":{"name":"Peluang penghalang"},"number_of_shuffling_moves":{"name":"Jumlah langkah pengacakan"}},"status":{"active":" · Aktif: {n}/{total}"},"achievement":{"tidy_four":{"name":"Kabel Rapi","description":"Selesaikan Geser Jaringan 4×4 dalam 18 geseran atau kurang."},"lean_five":{"name":"Montir Kabel","description":"Selesaikan Geser Jaringan 5×5 dalam 32 geseran atau kurang."},"big_switch":{"name":"Sakelar Besar","description":"Nyalakan seluruh jaringan dengan satu geseran saat kurang dari separuhnya yang menyala."}}},"pattern":{"name":"Pola","alsoKnownAs":"Nonogram, Picross, Griddlers","description":"Isi kisi berdasarkan panjang deretan kotak hitam di setiap baris dan kolom.","preset":{"10x10":"10×10","15x15":"15×15","20x20":"20×20","25x25":"25×25","30x30":"30×30"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"}},"achievement":{"no_dots":{"name":"Tanpa Titik","description":"Selesaikan Pola 15×15 atau lebih besar tanpa membubuhkan satu titik pun."},"inked_in":{"name":"Bertinta","description":"Selesaikan Pola 20×20 atau lebih besar tanpa pernah mengosongkan kotak hitam."}},"action":{"e":{"label":"Hapus","title":"Klik atau seret untuk mengembalikan kotak ke keadaan tak diketahui (E)"}}},"pearl":{"name":"Mutiara","alsoKnownAs":"Masyu","description":"Gambar satu lingkaran tertutup yang lurus melewati mutiara putih dan berbelok di mutiara hitam.","preset":{"6x6_easy":"6×6 Mudah","6x6_tricky":"6×6 Rumit","8x8_easy":"8×8 Mudah","8x8_tricky":"8×8 Rumit","10x10_easy":"10×10 Mudah","10x10_tricky":"10×10 Rumit","12x8_easy":"12×8 Mudah","12x8_tricky":"12×8 Rumit"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"difficulty":{"name":"Kesulitan","choice":{"easy":"Mudah","tricky":"Rumit"}},"allow_unsoluble":{"name":"Izinkan tak terpecahkan"}},"achievement":{"no_crosses":{"name":"Untaian Mutiara","description":"Selesaikan Mutiara 10×10 tanpa membubuhkan satu coretan pun."},"one_stroke":{"name":"Sekali Goresan","description":"Gambar seluruh lingkaran Mutiara 8×8 atau lebih besar dalam satu seretan."}},"action":{"x":{"label":"Silang","title":"Klik atau seret untuk mencoret sisi yang tidak bisa dipakai lingkaran (X)"}}},"pegs":{"name":"Pasak","description":"Lompatkan pasak melewati pasak lain sampai tinggal satu.","preset":{"cross":"Silang","octagon":"Segi Delapan","random_5x5":"Acak 5×5","random_7x7":"Acak 7×7","random_9x9":"Acak 9×9"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"board_type":{"name":"Jenis papan","choice":{"cross":"Silang","octagon":"Segi Delapan","random":"Acak"}}},"status":{"stuck":"Tidak ada langkah lagi — tersisa {n} pasak","playing":"Pasak tersisa: {n}  ·  Langkah: {moves}"},"alsoKnownAs":"Peg Solitaire, Solitaire Pasak","achievement":{"dead_centre":{"name":"Tepat di Tengah","description":"Tuntaskan papan Silang dengan pasak terakhir di lubang tengah."},"hopscotch":{"name":"Engklek","description":"Menangkan permainan Pasak dengan satu pasak melompat empat kali berturut-turut."},"pegged_out":{"name":"Mentok","description":"Buntu dengan sepuluh pasak atau lebih masih di papan."}}},"range":{"name":"Jangkauan","alsoKnownAs":"Kurodoko, Kuromasu","description":"Hitamkan kotak agar setiap angka melihat kotak putih sebanyak angka itu di sepanjang baris dan kolomnya.","preset":{"9x6":"9×6","12x8":"12×8","13x9":"13×9","16x11":"16×11"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"}},"achievement":{"no_dots":{"name":"Kontras Murni","description":"Selesaikan Jangkauan 13×9 atau lebih besar tanpa membubuhkan satu titik pun."},"quick_sight":{"name":"Mata Jeli","description":"Selesaikan Jangkauan 16×11 dalam waktu kurang dari lima menit."}},"action":{"e":{"label":"Hapus","title":"Klik atau seret untuk menghapus kotak hitam dan titik (E)"}}},"rect":{"name":"Persegi Panjang","alsoKnownAs":"Shikaku","description":"Bagi kisi menjadi persegi panjang yang masing-masing memuat satu angka, sama dengan luasnya.","preset":{"7x7":"7×7","9x9":"9×9","11x11":"11×11","13x13":"13×13","15x15":"15×15","17x17":"17×17","19x19":"19×19"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"expansion_factor":{"name":"Faktor perluasan"},"ensure_unique_solution":{"name":"Pastikan solusi unik"}},"status":{"drag":"{w}×{h} "},"achievement":{"clean_cuts":{"name":"Potongan Rapi","description":"Selesaikan Persegi Panjang 11×11 atau lebih besar dengan langkah tidak lebih banyak daripada jumlah angkanya."},"quick_carver":{"name":"Pemotong Kilat","description":"Selesaikan Persegi Panjang 19×19 dalam waktu kurang dari sepuluh menit."}},"action":{"e":{"label":"Hapus","title":"Seret di atas sebuah area untuk menghapus garis di dalamnya, atau klik sebuah garis untuk menghapusnya (E)"}}},"samegame":{"name":"Warna Sama","alsoKnownAs":"Clickomania, SameGame","description":"Kosongkan papan dengan menghapus kelompok kotak sewarna yang bersentuhan.","preset":{"5x5_3_colours":"5×5, 3 warna","10x5_3_colours":"10×5, 3 warna","15x10_3_colours":"15×10, 3 warna","15x10_4_colours":"15×10, 4 warna","20x15_4_colours":"20×15, 4 warna"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"no_of_colours":{"name":"Jumlah warna"},"scoring_system":{"name":"Sistem skor","choice":{"n_1_2":"(n-1)^2","n_2_2":"(n-2)^2"}},"ensure_solubility":{"name":"Pastikan bisa dipecahkan"}},"status":{"score":"Skor: {n}","complete":"Papan bersih! {score}","stuck":"Tidak ada langkah tersisa. {score}","selected":"{score} · Terpilih: {n} (+{points})"},"achievement":{"avalanche":{"name":"Longsor","description":"Buang satu kelompok berisi 25 kotak atau lebih sekaligus, lalu kosongkan papannya."},"no_pairs":{"name":"Dilarang Berpasangan","description":"Kosongkan papan 15×10 atau lebih besar tanpa pernah membuang sepasang kotak."},"last_one":{"name":"Kotak Terakhir","description":"Buntu dengan hanya satu kotak tersisa di papan."}}},"signpost":{"name":"Penunjuk Arah","description":"Rangkai kotak-kotak menjadi satu jalur bernomor; setiap langkah mengikuti arah panah.","preset":{"4x4":"4×4","4x4_free_ends":"4×4, ujung bebas","5x5":"5×5","5x5_free_ends":"5×5, ujung bebas","6x6":"6×6","7x7":"7×7"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"start_and_end_in_corners":{"name":"Mulai dan berakhir di sudut"}},"achievement":{"unbroken":{"name":"Rantai Utuh","description":"Selesaikan Penunjuk Arah tanpa pernah menghapus atau mengganti sambungan."},"in_order":{"name":"Lurus Terus","description":"Selesaikan Penunjuk Arah 6×6 atau lebih besar dengan menyambung lintasannya berurutan, dari 1 sampai bintang."},"star_first":{"name":"Berharap pada Bintang","description":"Buat sambungan pertamamu ke bintang, lalu selesaikan teka-tekinya."}},"action":{"b":{"label":"Putus","title":"Klik sebuah kotak untuk membongkar seluruh rantainya (B)"}}},"singles":{"name":"Tunggal","alsoKnownAs":"Hitori","description":"Hitamkan kotak agar tidak ada angka kembar dalam satu baris atau kolom, tanpa memecah kisi.","preset":{"5x5_easy":"5×5 Mudah","5x5_tricky":"5×5 Rumit","6x6_easy":"6×6 Mudah","6x6_tricky":"6×6 Rumit","8x8_easy":"8×8 Mudah","8x8_tricky":"8×8 Rumit","10x10_easy":"10×10 Mudah","10x10_tricky":"10×10 Rumit","12x12_easy":"12×12 Mudah","12x12_tricky":"12×12 Rumit"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"difficulty":{"name":"Kesulitan","choice":{"easy":"Mudah","tricky":"Rumit"}}},"achievement":{"no_circles":{"name":"Tanpa Lingkaran","description":"Selesaikan Tunggal 8×8 atau lebih besar tanpa melingkari satu angka pun."},"sure_hand":{"name":"Tangan Yakin","description":"Selesaikan Tunggal 10×10 atau lebih besar tanpa memutihkan kembali kotak yang sudah dihitamkan."}}},"sixteen":{"name":"Enam Belas","description":"Geser seluruh baris dan kolom secara memutar untuk menyusun ubin berurutan.","preset":{"3x3":"3×3","4x3":"4×3","4x4":"4×4","5x4":"5×4","5x5":"5×5"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"number_of_shuffling_moves":{"name":"Jumlah langkah pengacakan"}},"achievement":{"lean_slides":{"name":"Penggeser Hemat","description":"Urutkan papan 4×4 dalam 100 geseran atau kurang."},"five_in_200":{"name":"Penyusun Ulung","description":"Urutkan papan 5×5 dalam 200 geseran atau kurang."},"round_the_doughnut":{"name":"Keliling Donat","description":"Geser satu garis sampai berputar penuh dan kembali ke posisi awalnya."}}},"slant":{"name":"Garis Miring","alsoKnownAs":"Gokigen Naname","description":"Gambar satu garis diagonal di setiap kotak, sesuai angkanya dan tanpa membentuk lingkaran.","preset":{"5x5_easy":"5×5 Mudah","5x5_hard":"5×5 Sulit","8x8_easy":"8×8 Mudah","8x8_hard":"8×8 Sulit","12x10_easy":"12×10 Mudah","12x10_hard":"12×10 Sulit"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"difficulty":{"name":"Kesulitan","choice":{"easy":"Mudah","hard":"Sulit"}}},"achievement":{"no_loops":{"name":"Bebas Lingkaran","description":"Selesaikan Garis Miring 8×8 atau lebih besar tanpa pernah menutup lingkaran."},"steady_hand":{"name":"Tanpa Ragu","description":"Selesaikan Garis Miring 12×10 tanpa kembali mengubah sebuah garis."}}},"solo":{"name":"Solo","alsoKnownAs":"Sudoku","description":"Isi kisi agar setiap baris, kolom, dan blok memuat setiap angka tepat sekali.","preset":{"4x4_very_easy":"4×4 Sangat mudah","6x6_easy":"6×6 Mudah","9x9_very_easy":"9×9 Sangat mudah","9x9_easy":"9×9 Mudah","9x9_x_diagonal_easy":"9×9 Mudah X","9x9_medium":"9×9 Sedang","9x9_hard":"9×9 Sulit","9x9_x_diagonal_hard":"9×9 Sulit X","9x9_expert":"9×9 Ahli","9x9_extreme":"9×9 Ekstrem","9x9_killer":"9×9 Killer","9x9_jigsaw_easy":"9×9 Jigsaw Mudah","9x9_jigsaw_x_diagonal_easy":"9×9 Jigsaw Mudah X","9x9_jigsaw_hard":"9×9 Jigsaw Sulit","12x12_easy":"12×12 Mudah","16x16_easy":"16×16 Mudah"},"config":{"columns_of_sub_blocks":{"name":"Kolom subblok"},"rows_of_sub_blocks":{"name":"Baris subblok"},"x_require_every_number_in_each_main_diagonal":{"name":"\\"X\\" (setiap angka harus muncul di tiap diagonal utama)"},"jigsaw_irregularly_shaped_sub_blocks":{"name":"Jigsaw (subblok berbentuk tak beraturan)"},"killer_digit_sums":{"name":"Killer (jumlah angka)"},"symmetry":{"name":"Simetri","choice":{"none":"Tidak ada","2_way_rotation":"Rotasi 2 arah","4_way_rotation":"Rotasi 4 arah","2_way_mirror":"Cermin 2 arah","2_way_diagonal_mirror":"Cermin diagonal 2 arah","4_way_mirror":"Cermin 4 arah","4_way_diagonal_mirror":"Cermin diagonal 4 arah","8_way_mirror":"Cermin 8 arah"}},"difficulty":{"name":"Kesulitan","choice":{"very_easy":"Sangat mudah","easy":"Mudah","medium":"Sedang","hard":"Sulit","expert":"Ahli","extreme":"Ekstrem"}}},"action":{"m":{"label":"Tanda","title":"Tulis setiap kemungkinan sebagai tanda pensil di semua kotak kosong (M)"},"l":{"label":"Sorot","title":"Sorot setiap kotak yang berisi angka yang terakhir kamu sentuh (L)"}},"achievement":{"pen_only":{"name":"Pena, Bukan Pensil","description":"Selesaikan Solo 9×9 Sedang, Killer, atau lebih sulit tanpa satu tanda pensil pun."},"no_second_thoughts":{"name":"Tanpa Pikir Dua Kali","description":"Selesaikan 9×9 Ahli atau lebih sulit tanpa pernah mengganti atau menghapus angka."}}},"tents":{"name":"Tenda","description":"Dirikan satu tenda di samping setiap pohon tanpa ada tenda yang bersentuhan.","preset":{"8x8_easy":"8×8 Mudah","8x8_tricky":"8×8 Rumit","10x10_easy":"10×10 Mudah","10x10_tricky":"10×10 Rumit","15x15_easy":"15×15 Mudah","15x15_tricky":"15×15 Rumit"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"difficulty":{"name":"Kesulitan","choice":{"easy":"Mudah","tricky":"Rumit"}}},"alsoKnownAs":"Tents and Trees, Tenda dan Pohon","achievement":{"no_grass":{"name":"Kemah Sempurna","description":"Selesaikan Tenda 10×10 atau lebih besar tanpa menandai satu kotak pun sebagai rumput."},"no_strikes":{"name":"Perkemahan Ceria","description":"Selesaikan Tenda 15×15 tanpa pernah membongkar tenda."}}},"towers":{"name":"Menara","alsoKnownAs":"Skyscrapers, Pencakar Langit","description":"Bangun menara agar setiap angka di tepi menunjukkan jumlah menara yang terlihat dari sana.","preset":{"4x4_easy":"4×4 Mudah","5x5_easy":"5×5 Mudah","5x5_hard":"5×5 Sulit","6x6_easy":"6×6 Mudah","6x6_hard":"6×6 Sulit","6x6_expert":"6×6 Ahli","6x6_extreme":"6×6 Ekstrem"},"config":{"grid_size":{"name":"Ukuran kisi"},"difficulty":{"name":"Kesulitan","choice":{"easy":"Mudah","hard":"Sulit","expert":"Ahli","extreme":"Ekstrem"}}},"action":{"m":{"label":"Tanda","title":"Tulis setiap kemungkinan sebagai tanda pensil di semua kotak kosong (M)"},"l":{"label":"Sorot","title":"Sorot setiap kotak yang berisi angka yang terakhir kamu sentuh (L)"}},"achievement":{"no_pencil":{"name":"Cakrawala di Kepala","description":"Selesaikan Menara 6×6 tanpa menulis satu tanda pensil pun."},"clean_build":{"name":"Dibangun Kokoh","description":"Selesaikan Menara 6×6 Ahli atau Ekstrem tanpa kembali mengubah sebuah menara."},"tallest_first":{"name":"Tertinggi Duluan","description":"Bangun semua menara tertinggi sebelum menara lainnya, lalu selesaikan kisinya."}}},"tracks":{"name":"Rel","alsoKnownAs":"Train Tracks","description":"Pasang satu jalur rel dari pintu masuk ke pintu keluar, sesuai angka di tepi.","preset":{"8x8_easy":"8×8 Mudah","8x8_tricky":"8×8 Rumit","10x8_easy":"10×8 Mudah","10x8_tricky":"10×8 Rumit","10x10_easy":"10×10 Mudah","10x10_tricky":"10×10 Rumit","15x10_easy":"15×10 Mudah","15x10_tricky":"15×10 Rumit","15x15_easy":"15×15 Mudah","15x15_tricky":"15×15 Rumit"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"difficulty":{"name":"Kesulitan","choice":{"easy":"Mudah","tricky":"Rumit"}},"disallow_consecutive_1_clues":{"name":"Larang petunjuk 1 yang berurutan"}},"achievement":{"no_crosses":{"name":"Tanpa Coretan","description":"Selesaikan Rel 10×10 atau lebih besar tanpa mencoret kotak atau sisi."},"no_lift":{"name":"Tancap Gas","description":"Selesaikan Rel 15×10 atau lebih besar tanpa pernah mengangkat rel yang sudah kamu pasang."},"long_haul":{"name":"Jarak Jauh","description":"Pasang rel melewati sepuluh kotak dalam satu seretan, lalu tuntaskan jalurnya."}},"action":{"e":{"label":"Hapus","title":"Klik atau seret untuk membersihkan kotak (E)"}}},"twiddle":{"name":"Putar","description":"Putar blok-blok ubin untuk mengembalikan angka-angkanya ke urutan semula.","preset":{"3x3_rows_only":"3×3 hanya baris","3x3_normal":"3×3 normal","3x3_orientable":"3×3 dengan arah","4x4_normal":"4×4 normal","4x4_orientable":"4×4 dengan arah","4x4_rotating_3x3_blocks":"4×4, blok putar 3×3","5x5_rotating_3x3_blocks":"5×5, blok putar 3×3","6x6_rotating_4x4_blocks":"6×6, blok putar 4×4"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"rotating_block_size":{"name":"Ukuran blok putar"},"one_number_per_row":{"name":"Satu angka per baris"},"orientation_matters":{"name":"Arah ubin diperhitungkan"},"number_of_shuffling_moves":{"name":"Jumlah langkah pengacakan"}},"achievement":{"few_turns":{"name":"Dua Puluh Putaran","description":"Selesaikan Putar 3×3 normal dalam 20 putaran atau kurang."},"perfect_ten":{"name":"Sepuluh Sempurna","description":"Selesaikan Putar 3×3 normal dalam 10 putaran atau kurang."},"dizzy":{"name":"Putar-putar","description":"Putar satu blok ke arah yang sama empat kali berturut-turut, lalu selesaikan teka-tekinya."}},"action":{"t":{"label":"Searah","title":"Tukar arah: klik memutar searah jarum jam, klik kanan berlawanan arah jarum jam (T)"}}},"undead":{"name":"Mayat Hidup","description":"Tempatkan hantu, vampir, dan zombi sesuai apa yang terlihat lewat cermin.","preset":{"4x4_easy":"4×4 Mudah","4x4_normal":"4×4 Normal","4x4_tricky":"4×4 Rumit","5x5_easy":"5×5 Mudah","5x5_normal":"5×5 Normal","5x5_tricky":"5×5 Rumit","7x7_easy":"7×7 Mudah","7x7_normal":"7×7 Normal"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"difficulty":{"name":"Kesulitan","choice":{"easy":"Mudah","normal":"Normal","tricky":"Rumit"}}},"keypad":{"g":"Hantu","v":"Vampir","z":"Zombi"},"alsoKnownAs":"Haunted Mirror Maze, Labirin Cermin Berhantu","achievement":{"no_pencil":{"name":"Percaya Matamu","description":"Selesaikan Mayat Hidup 5×5 atau lebih besar tanpa membuat satu catatan pun."},"fearless":{"name":"Tanpa Rasa Takut","description":"Selesaikan Mayat Hidup Rumit tanpa kembali mengubah sebuah monster."}},"action":{"s":{"label":"Pandangan","title":"Telusuri garis pandang yang melewati sebuah kotak, atau dari sebuah angka tepi (S)"}}},"unequal":{"name":"Tak Sama","alsoKnownAs":"Futoshiki","description":"Lengkapi persegi latin agar setiap tanda lebih besar/lebih kecil terpenuhi.","preset":{"4x4_easy":"4×4 Mudah","5x5_easy":"5×5 Mudah","5x5_medium":"5×5 Sedang","5x5_medium_adjacent":"5×5 Sedang (Bersebelahan)","5x5_hard":"5×5 Sulit","6x6_easy":"6×6 Mudah","6x6_medium":"6×6 Sedang","6x6_medium_adjacent":"6×6 Sedang (Bersebelahan)","6x6_hard":"6×6 Sulit","7x7_medium":"7×7 Sedang","7x7_medium_adjacent":"7×7 Sedang (Bersebelahan)","7x7_hard":"7×7 Sulit"},"config":{"mode":{"name":"Mode","choice":{"unequal":"Tak Sama","adjacent":"Bersebelahan"}},"size_s_s":{"name":"Ukuran (s*s)"},"difficulty":{"name":"Kesulitan","choice":{"very_easy":"Sangat mudah","easy":"Mudah","medium":"Sedang","hard":"Sulit","extreme":"Ekstrem"}}},"action":{"m":{"label":"Tanda","title":"Tulis setiap kemungkinan sebagai tanda pensil di semua kotak kosong (M)"},"h":{"label":"Petunjuk","title":"Tulis tanda pensil untuk kemungkinan yang tersisa dari penalaran sederhana (H)"},"l":{"label":"Sorot","title":"Sorot setiap kotak yang berisi angka yang terakhir kamu sentuh (L)"}},"achievement":{"adjacent_bare":{"name":"Tetangga Sebelah","description":"Selesaikan Tak Sama mode Bersebelahan tanpa menulis satu tanda pensil pun."},"extreme_bare":{"name":"Semua di Kepala","description":"Selesaikan Tak Sama Ekstrem tanpa menulis satu tanda pensil pun."}}},"unruly":{"name":"Semrawut","alsoKnownAs":"Takuzu, Binairo","description":"Warnai setiap kotak hitam atau putih, sama banyak di tiap baris dan kolom, dan jangan sampai tiga berderet.","preset":{"8x8_easy":"8×8 Mudah","8x8_normal":"8×8 Normal","10x10_easy":"10×10 Mudah","10x10_normal":"10×10 Normal","14x14_easy":"14×14 Mudah","14x14_normal":"14×14 Normal"},"config":{"width":{"name":"Lebar"},"height":{"name":"Tinggi"},"unique_rows_and_columns":{"name":"Baris dan kolom unik"},"difficulty":{"name":"Kesulitan","choice":{"easy":"Mudah","normal":"Normal"}}},"achievement":{"no_threes":{"name":"Tak Pernah Tiga","description":"Selesaikan Semrawut 10×10 atau lebih besar tanpa pernah membuat tiga berderet."},"first_time":{"name":"Hitam dan Putih","description":"Selesaikan Semrawut 14×14 tanpa kembali mengubah sebuah kotak."}},"action":{"e":{"label":"Hapus","title":"Klik sebuah kotak untuk mengosongkannya (E)"}}},"untangle":{"name":"Urai","alsoKnownAs":"Planarity","description":"Seret titik-titiknya sampai tidak ada dua garis yang bersilangan.","preset":{"6_points":"6 titik","10_points":"10 titik","15_points":"15 titik","20_points":"20 titik","25_points":"25 titik"},"config":{"number_of_points":{"name":"Jumlah titik"}},"action":{"g":{"label":"Kisi bantu","title":"Tempelkan titik yang dijatuhkan ke kisi (G)"}},"achievement":{"one_touch":{"name":"Sentuhan Ringan","description":"Urai 10 titik atau lebih tanpa mengangkat titik yang sama dua kali."},"only_downhill":{"name":"Hanya Menurun","description":"Urai 20 titik atau lebih tanpa satu langkah pun yang menambah garis merah."}}}}`),$=JSON.parse('{"blackbox":{"step1":{"text":"Satu bola bersembunyi di dalam kotak 4×4 ini. Tembakkan laser dari titik-titik di sekeliling tepi, simpulkan di mana bolanya, tandai, lalu tekan tombol di sudut."},"step2":{"text":"Klik titik di **tepi kiri, sejajar dengan baris kedua**. Sinarnya dibelokkan di tengah jalan dan keluar di tempat lain; kedua ujungnya diberi angka yang sama."},"step3":{"text":"Sekarang tembakkan titik di **atas kolom kedua**. Huruf **H** berarti sinarnya menabrak bola dan tidak pernah keluar."},"step4":{"text":"Tembakkan juga titik di **atas kolom pertama**. Huruf **R** berarti sinarnya memantul balik keluar, yang terjadi kalau ada bola persis diagonal di samping lubangnya."},"step5":{"text":"R menaruh bola secara diagonal di sebelah kolom pertama, dan H menaruhnya lurus di bawah kolom kedua: hanya kotak ini yang memenuhi keduanya."},"step6":{"text":"**Klik kotak itu** untuk menandai bolamu di sana."},"step7":{"text":"Semua bola sudah ditandai, jadi **tanda centang di sudut kiri atas** kini aktif. Klik untuk memeriksa jawabanmu."},"step8":{"text":"Benar. Selama bermain, **klik kanan** sebuah kotak untuk menguncinya begitu kamu yakin kotak itu kosong, dan **Pecahkan** langsung menunjukkan jawabannya."}},"bridges":{"step1":{"text":"Angka di setiap pulau adalah jumlah ujung jembatan yang diinginkannya. Gabungkan semua pulau menjadi satu jaringan, paling banyak dua jembatan antar sepasang pulau dan tidak ada jembatan yang bersilangan."},"step2":{"text":"**Angka 2 di bawah** hanya punya satu pulau yang segaris dengannya: **angka 4** di atas. **Seret** dari 2 ke arah 4 untuk membentangkan sebuah jembatan."},"step3":{"text":"Pulau itu butuh dua ujung jembatan, dan pasangan itu satu-satunya tempat yang mungkin. **Seret** sekali lagi dengan cara yang sama untuk jembatan kedua yang sejajar."},"step4":{"text":"Pulau itu selesai. **Klik** pulaunya untuk menandainya tuntas: warnanya jadi abu-abu dan jembatannya terkunci, jadi kamu tidak akan mengusiknya tanpa sengaja."},"step5":{"text":"Jembatan tidak boleh bersilangan, jadi garis antara **kedua angka 1** kini tertutup. **Seret dengan tombol kanan** dari 1 di kiri ke arah 1 di kanan untuk menandainya."},"step6":{"text":"Kini masing-masing 1 punya satu jalan keluar, dan empat jembatan sisanya mengikuti dari situ. **Pecahkan** menuntaskan teka-tekinya (dan **G** menampilkan setiap garis yang bisa dilalui jembatan).","textTouch":"Kini masing-masing 1 punya satu jalan keluar, dan empat jembatan sisanya mengikuti dari situ. **Pecahkan** menuntaskan teka-tekinya."}},"cube":{"step1":{"text":"Kubus punya enam sisi dan enam kotak diwarnai biru. Gulingkan kubusnya sampai setiap sisi mengumpulkan satu warna: setiap kali mendarat, sisi yang di bawah dan kotaknya bertukar warna."},"step2":{"text":"Klik untuk menggulingkan kubus ke arah kotak yang kamu pilih. **Klik kotak biru tepat di bawah kubus** untuk memindahkan warnanya ke sisi yang mendarat."},"step3":{"text":"Kotak yang ditinggalkan kini polos — warnanya benar-benar bertukar. **Klik kotak biru di sebelah kanan** untuk membuat sisi kedua menjadi biru."},"step4":{"text":"**Tombol panah** juga menggulingkan kubus. Tekan **→** sekali untuk memungut kotak biru ketiga.","textTouch":"Setiap kotak tetangga hanya berjarak satu ketukan. **Ketuk kotak biru berikutnya di sebelah kanan** untuk memungut kotak biru ketiga."},"step5":{"text":"Tiga sisi biru, tiga lagi — papan ini bisa dituntaskan dalam enam gulingan, dan baris status menghitungnya. **Urungkan** membatalkan satu langkah kalau kamu kebablasan."}},"dominosa":{"step1":{"text":"Tiga kartu domino — 0-0, 0-1, dan 1-1 — pernah disusun di sini lalu diangkat, meninggalkan angka-angkanya. Bagi kisinya menjadi pasangan-pasangan untuk mengembalikan masing-masing tepat sekali."},"step2":{"text":"Tidak ada domino yang boleh dipakai dua kali. Memasangkan **0** ini dengan **1** di bawahnya akan membuat kedua kolom terluar menjadi 0-1, jadi **klik kanan** di antara keduanya untuk mencatat bahwa mereka bukan pasangan."},"step3":{"text":"Satu-satunya pasangan **0** yang bersentuhan ada di sudut kiri atas, jadi di situlah 0-0 berada. **Klik batas di antara keduanya** untuk memasangnya."},"step4":{"text":"Begitu pula, satu-satunya pasangan **1** yang bersentuhan ada di kiri bawah. Klik batas di antara keduanya untuk 1-1."},"step5":{"text":"Sisanya kolom kanan untuk 0-1. Klik batas di antara kedua angkanya untuk menyelesaikannya."},"step6":{"text":"Setiap domino terpakai sekali. Klik lagi sebuah domino untuk mengangkatnya, domino yang berulang digambar merah, dan **Urungkan** membatalkan langkahmu satu per satu."}},"fifteen":{"step1":{"text":"Geser ubin bernomor ke ruang kosong sampai terbaca **1 sampai 8** berurutan, dengan celah di sudut kanan bawah. Papan kecil ini tinggal dua langkah lagi."},"step2":{"text":"Ubin mana pun yang sebaris atau sekolom dengan celah bisa digeser. Klik **5** untuk mendorongnya naik ke celah."},"step3":{"text":"Satu lagi. Klik **8** untuk menuntaskan barisnya."},"step4":{"text":"Terpecahkan! **Urungkan** dan **Ulangi** menelusuri langkah-langkahmu, dan **Baru** di menu jeda memberimu teka-teki baru. Tombol panah juga bisa menggeser ubin ke dalam celah, searah dengan panahnya.","textTouch":"Terpecahkan! **Urungkan** dan **Ulangi** menelusuri langkah-langkahmu, dan **Baru** di menu jeda memberimu teka-teki baru. Satu baris atau kolom bisa bergeser sekaligus, jadi incar ubin yang paling jauh."}},"filling":{"step1":{"text":"Tulis satu angka di setiap kotak kosong sehingga setiap blok angka sama yang tersambung terdiri atas kotak persis sebanyak angkanya."},"step2":{"text":"**Angka 3** di kaki kolom tengah hanya bisa tumbuh ke atas, jadi bloknya adalah kolom itu. **Seret** dari kotak paling atasnya ke kotak tengah, lalu tekan **3**.","textTouch":"**Angka 3** di kaki kolom tengah hanya bisa tumbuh ke atas. **Seret** dari kotak paling atasnya ke kotak tengah, lalu ketuk **3** pada papan tombol."},"step3":{"text":"**Angka 2** di kolom kiri butuh satu pasangan dan kotak di atasnya satu-satunya yang bebas. Klik kotak itu lalu tekan **2**.","textTouch":"**Angka 2** di kolom kiri butuh satu pasangan dan kotak di atasnya satu-satunya yang bebas. Ketuk kotak itu, lalu ketuk **2** pada papan tombol."},"step4":{"text":"Tinggal satu kotak. Klik kotak itu lalu tekan **1** untuk melihat seperti apa angka yang salah.","textTouch":"Tinggal satu kotak. Ketuk kotak itu, lalu ketuk **1** pada papan tombol untuk melihat seperti apa angka yang salah."},"step5":{"text":"Merah berarti mustahil: kedua **1** itu bersentuhan, yang akan membentuk blok berisi dua, dan **2** di atas jadi terkurung. Kotak itu masih terpilih, jadi tekan **Backspace** untuk mengosongkannya.","textTouch":"Merah berarti mustahil: kedua **1** itu bersentuhan, yang akan membentuk blok berisi dua, dan **2** di atas jadi terkurung. Kotak itu masih terpilih, jadi ketuk **⌫** pada papan tombol untuk mengosongkannya."},"step6":{"text":"Kotak kosong itu justru berpasangan dengan **2** di atasnya. Klik kotak itu lalu tekan **2** untuk menuntaskan kisinya.","textTouch":"Kotak kosong itu justru berpasangan dengan **2** di atasnya. Ketuk kotak itu, lalu ketuk **2** pada papan tombol untuk menuntaskan kisinya."},"step7":{"text":"Terisi. Garis tebal mengurung setiap blok yang selesai; **klik kanan** menambahkan kotak ke sebuah pilihan satu per satu, dan **Urungkan** membatalkan isian."}},"flip":{"step1":{"text":"Nyalakan kesembilan kotaknya. Menekan satu kotak membalik kotak itu **dan** kotak-kotak di sekitarnya, jadi kotak yang menyala bisa padam lagi."},"step2":{"text":"Diagram kecil di dalam sebuah kotak menunjukkan apa saja yang dibaliknya: blok pejal adalah kotak itu sendiri, yang bergaris tepi adalah tetangganya."},"step3":{"text":"Saatnya menyalakan yang ini. Tekan kotak **kiri atas**, yang gelap di pojok."},"step4":{"text":"Pojoknya menyala, tapi dua tetangganya jadi gelap. Tekan kotak **tengah** berikutnya."},"step5":{"text":"Sekarang tinggal pojok kanan bawah yang gelap. Tekan kotak **kanan bawah** untuk menuntaskannya."},"step6":{"text":"Semua menyala! **Urungkan** membatalkan satu tekanan, dan kamu juga bisa menggerakkan kursor dengan tombol panah lalu menekan Enter sebagai ganti klik.","textTouch":"Semua menyala! **Urungkan** membatalkan satu tekanan, dan menekan kotak yang sama dua kali selalu saling meniadakan, jadi urutannya tidak berpengaruh."}},"flood":{"step1":{"text":"Kamu menguasai kotak kiri atas dan semua kotak sewarna yang tersambung dengannya. Setiap langkah mengecat ulang bidang itu, jadi kotak bersentuhan yang warnanya sama ikut bergabung. Jadikan seluruh kisi satu warna dalam batas **empat langkah**."},"step2":{"text":"Untuk sekarang bidangmu hanya pojok biru itu. Klik kotak **merah** di sebelahnya: bidangmu berubah merah dan setiap kotak merah yang disentuhnya ikut bergabung."},"step3":{"text":"Sekarang klik kotak **biru** di tepi bidangmu. Warna yang dipilih dengan cermat bisa merambat jauh melintasi kisi dalam satu langkah."},"step4":{"text":"Hanya **hijau** yang tersisa di luar bidangmu. Sekali klik lagi, sisa kisinya ikut tersapu."},"step5":{"text":"Tiga langkah dari empat — baris status mencatat hitungannya. Kalau langkahnya habis sebelum kisinya satu warna, ronde itu kalah. Buntu? **Petunjuk** memainkan satu warna yang tepat untukmu, dan **Pecahkan** menuntaskan kisinya sebagai pemecahan otomatis."}},"galaxies":{"step1":{"text":"Dua titik, berarti dua galaksi. Gambar dinding di sepanjang garis kisi agar setiap titik berakhir di pusat wilayahnya sendiri: putar sebuah wilayah 180° terhadap titiknya dan ia harus jatuh persis pada dirinya sendiri."},"step2":{"text":"Titik kiri berada pada garis di antara dua kotak, jadi galaksinya pasti dua kolom paling kiri. **Klik** garis kisi tepat di kanannya, di **baris paling atas**."},"step3":{"text":"Titik juga berfungsi sebagai kertas catatan. **Seret** dari titik di kanan ke **kotak kanan atas** untuk meninggalkan tanda panah di sana, menandai kotak itu sebagai bagian galaksinya."},"step4":{"text":"Kembali ke dinding: **klik** garis kisi yang sama satu baris ke bawah, di **baris tengah**."},"step5":{"text":"Tinggal satu ruas, di **baris paling bawah**. **Klik** ruas itu untuk menutup kedua galaksinya."},"step6":{"text":"Kedua wilayah terarsir, berarti keduanya benar. **Pecahkan** menggambar seluruh jawabannya, dan mengklik sebuah dinding menghapusnya lagi."}},"guess":{"step1":{"text":"Dua pasak tersembunyi di balik tanda tanya, tersusun dari tiga warna. Tebak satu baris, baca tanda yang kamu dapat, lalu persempit kemungkinannya."},"step2":{"text":"**Seret** warna teratas keluar dari baki dan jatuhkan di **lubang sebelah kiri** pada baris yang bertanda panah."},"step3":{"text":"Kamu juga bisa memilih warna dulu lalu mengklik lubang dengan warna itu. Klik **warna kedua** di baki."},"step4":{"text":"Sekarang klik **lubang sebelah kanan** untuk menjatuhkan warna itu ke sana."},"step5":{"text":"Barisnya penuh, jadi **kotak putus-putus** di sebelah kanannya menyala. Klik kotak itu untuk menilai tebakanmu."},"step6":{"text":"Dua tanda **berongga** berarti kedua warna ada di jawabannya tetapi tak satu pun berada di tempat yang benar — tanda pejal berarti warna benar di tempat yang benar. Tukar keduanya lalu kirim lagi."},"step7":{"text":"Terpecahkan. **Pecahkan** menyerah dan menampilkan jawabannya, dan tombol **L** memberi huruf pada pasak kalau warnanya sulit dibedakan.","textTouch":"Terpecahkan. **Pecahkan** menyerah dan menampilkan jawabannya, dan **Tahan** di samping Urungkan menjaga pasak yang kamu yakini tetap di tempatnya untuk tebakan berikutnya."}},"inertia":{"step1":{"text":"Kamu adalah bola di sudut kiri atas, dan ada **tiga permata** yang harus dikumpulkan. Begitu mulai menggelinding, bola baru berhenti di dinding atau di penahan — dan kena ranjau berarti tamat."},"step2":{"text":"Klik sebuah kotak di **sebelah kanan** bola. Bolanya menggelinding ke arah itu sampai tepi papan menghentikannya, sambil menyapu permata yang dilewatinya."},"step3":{"text":"Sekarang klik **di bawah** bola. Bolanya mengambil permata berikutnya dan cincin retak dua kotak di bawah — sebuah penahan — membuatnya berhenti."},"step4":{"text":"Hati-hati: benda berduri tepat di bawah bola adalah **ranjau**. Menggelinding ke atasnya mengakhiri permainan, dan hanya Urungkan yang bisa menyelamatkanmu."},"step5":{"text":"Ambil arah **diagonal** saja: klik kotak dua ke bawah dan dua ke kiri, dan bolanya meluncur melewati ranjau ke permata terakhir."},"step6":{"text":"Ketiga permata — selesai. **Urungkan** memutar balik gelindingan yang keliru; tombol panah menggelindingkan lurus dan Home, Page Up, End, serta Page Down menggelindingkan diagonal.","textTouch":"Ketiga permata — selesai. **Urungkan** memutar balik gelindingan yang keliru, dan mengetuk di luar kisi juga bisa, yang membantu saat bola merapat ke tepi."}},"keen":{"step1":{"text":"Isi 1, 2, dan 3 agar masing-masing muncul sekali di setiap baris dan kolom, dan agar angka-angka di setiap sangkar bergaris tebal memenuhi petunjuk aritmetikanya."},"step2":{"text":"Sangkar **2×** menghasilkan hasil kali 2, jadi angka-angkanya adalah 1, 1, dan 2. Sebuah sangkar boleh mengulang angka, tetapi tidak dalam satu baris atau kolom, jadi 2 berada di pojok: klik kotak itu lalu ketik **2**.","textTouch":"Sangkar **2×** menghasilkan hasil kali 2, jadi angka-angkanya adalah 1, 1, dan 2. Angka 2 berada di pojok: ketuk kotak itu, lalu ketuk **2** pada papan tombol."},"step3":{"text":"Dua kotak lain di sangkar itu adalah angka 1. Klik kotak **di kanan angka 2** lalu ketik **1**.","textTouch":"Dua kotak lain di sangkar itu adalah angka 1. Ketuk kotak **di kanan angka 2**, lalu ketuk **1** pada papan tombol."},"step4":{"text":"Baris atas sudah punya 2 dan 1-nya, jadi kotak terakhir di baris itu pasti 3. Klik **kotak kanan atas** lalu ketik **3**.","textTouch":"Baris atas sudah punya 2 dan 1-nya, jadi kotak terakhir di baris itu pasti 3. Ketuk **kotak kanan atas**, lalu ketuk **3** pada papan tombol."},"step5":{"text":"Masih menduga-duga? **Klik kanan** kotak tengah lalu ketik **3** untuk mencatat angka itu sebagai tanda pensil tanpa mengisinya.","textTouch":"Masih menduga-duga? **Tekan lama** kotak tengah lalu ketuk **3** untuk mencatat angka itu tanpa mengisinya. Tombol **✎** melakukan hal yang sama untuk kotak yang sudah kamu ketuk."},"step6":{"text":"Kerjakan sisanya dengan cara yang sama; angka yang berulang di baris atau kolomnya berubah merah, begitu pula sangkar penuh yang meleset dari petunjuknya. Di menu jeda, **Tanda** menuliskan semua kemungkinan untukmu, dan **Pecahkan** langsung menunjukkan jawabannya."}},"lightup":{"step1":{"text":"Pada akhirnya semua kotak putih harus tersinari. Bola lampu menyinari baris dan kolomnya sendiri sampai terhalang kotak hitam, dan tidak boleh ada lampu yang terkena sinar lampu lain."},"step2":{"text":"Sebuah angka menyatakan berapa lampu yang menempel pada kotak hitam itu. **Angka 2** ini hanya punya dua tetangga putih, jadi keduanya berisi lampu: klik yang di **kanannya**."},"step3":{"text":"Perhatikan sapuan kuning yang menyebar di sepanjang sinarnya. Sekarang klik kotak tepat **di bawah** angka 2 untuk lampu keduanya."},"step4":{"text":"**Angka 0** tidak bersentuhan dengan lampu apa pun. **Klik kanan** kotak di atasnya untuk mencatat tanda silang: itu sekadar mengingatkanmu bahwa tidak ada lampu yang bisa ditaruh di sana."},"step5":{"text":"**Angka 1** butuh tepat satu lampu. Kotak di bawahnya sudah tersinari, jadi lampu di sana akan terkena sinar — klik kotak di **sebelah kiri** angka 1 saja."},"step6":{"text":"Dua kotak di baris atas masih gelap dan salah satunya sudah kamu coret. Klik kotak yang **satunya**."},"step7":{"text":"Setiap kotak tersinari, setiap angka terpenuhi. **Urungkan** membatalkan satu lampu, dan tombol panah bersama Enter dan Space bisa menaruh lampu serta tanda silang tanpa mouse.","textTouch":"Setiap kotak tersinari, setiap angka terpenuhi. **Urungkan** membatalkan satu lampu, dan tekan lama untuk mencoret kotak yang sudah pasti kosong."}},"loopy":{"step1":{"text":"Gambar **satu** lingkaran tertutup di sepanjang garis samar di antara titik-titik. Setiap angka menyatakan berapa dari empat sisi kotaknya yang dipakai lingkaran itu."},"step2":{"text":"Kotak tengah bertanda **4**, jadi keempat sisinya berada pada lingkaran. **Klik** sisi atasnya untuk menggambar garis pertama."},"step3":{"text":"Sekarang **sisi kirinya**. Mengklik sebuah garis lagi akan menghapusnya."},"step4":{"text":"Setiap titik punya dua garis atau tidak sama sekali, dan titik tempat kedua garis itu bertemu sudah penuh. **Klik kanan** garis yang menanjak dari titik itu untuk mencoretnya sebagai tak terpakai."},"step5":{"text":"Tinggal dua sisi. **Klik** sisi bawah kotak tengah."},"step6":{"text":"Dan **sisi kanan** menutupnya. Satu lingkaran, tanpa ujung menggantung, dan keempat **0** sama sekali tidak tersentuh."},"step7":{"text":"Terpecahkan. **Urungkan** membatalkan garismu satu per satu, dan **Jenis** di menu jeda menukar kotak dengan segitiga, segi enam, dan ubinan yang lebih aneh."}},"magnets":{"step1":{"text":"Setiap domino adalah magnet, dengan separuh **+** dan separuh **−**, atau keping kosong. Angka-angkanya menghitung kutub **+** (atas dan kiri) serta kutub **−** (bawah dan kanan) di tiap garis, dan kutub sejenis tidak boleh bersentuhan."},"step2":{"text":"Baris bawah menginginkan tiga kutub **−** dan hanya tiga domino yang menjangkaunya, jadi masing-masing harus menyumbang satu. **Klik kiri** separuh atas domino yang berdiri untuk menjadikannya **+**, sehingga **−**-nya turun ke bawah."},"step3":{"text":"Berarti domino melintang di kanan bawah juga magnet, dan **0** di atas kolom terakhir melarang **+** di sana. **Klik kiri** separuh kirinya untuk menaruh **+** di sisi itu."},"step4":{"text":"Kolom keempat kini sudah punya satu **+** dan sama sekali tidak menginginkan **−**, jadi domino di atasnya tidak bisa jadi keduanya. **Klik kanan** domino itu untuk menandainya sebagai keping kosong."},"step5":{"text":"Baris atas masih butuh satu **+** dan satu **−** dari domino melintang di sebelah kiri. Separuh kanannya bersentuhan dengan **+**, dan kutub sejenis tidak boleh bersentuhan — jadi **klik kiri** separuh kirinya."},"step6":{"text":"Tinggal satu domino. Kolom pertama sudah memakai **+**-nya di atas, jadi **+** di sini berada di kanan: **klik kiri** separuh kanannya untuk menuntaskan."},"step7":{"text":"Terpecahkan! Mengklik separuh yang sama lagi membalik magnetnya, klik kanan kedua meninggalkan tanda tanya untuk mencatat \\"magnet, tapi ke arah mana?\\", dan **Urungkan** membatalkan langkah."}},"map":{"step1":{"text":"Warnai setiap wilayah agar tidak ada dua wilayah yang berbagi sepenggal perbatasan berwarna sama. Empat warna selalu cukup, dan tiga wilayah di sini masih kosong."},"step2":{"text":"Ambil warnanya dulu: **klik** **contoh warna biru**, yang kedua pada deretan di bawah peta."},"step3":{"text":"Selagi warna itu terpilih, **klik kanan** pada wilayah kosong untuk membubuhkan titik kecil warna itu — catatan bahwa wilayahnya *mungkin* berwarna itu. Coba pada wilayah tinggi di sisi kanan."},"step4":{"text":"Ini lebih dari sekadar mungkin: wilayah itu sudah berbatasan dengan merah, hijau, dan kuning, jadi tinggal biru. **Klik** wilayah itu untuk mewarnainya."},"step5":{"text":"Kamu juga bisa **menyeret** warna dari satu wilayah ke wilayah lain. Wilayah besar di atas kini bersentuhan dengan merah, hijau, dan biru, jadi **seret** kuning ke atas dari wilayah kecil di bawah."},"step6":{"text":"Tinggal satu yang kosong, di **sudut kiri bawah**: ia berbatasan dengan hijau, biru, dan kuning yang baru itu, jadi pasti merah. **Seret** merah turun ke sana dari wilayah di sudut kanan atas."},"step7":{"text":"Selesai — kalau ada bentrokan, tanda **!** merah akan muncul di perbatasan kedua wilayah. **Urungkan** membatalkan langkah, dan tombol panah bersama **1**–**4** bisa mewarnai tanpa mouse.","textTouch":"Selesai — kalau ada bentrokan, tanda **!** merah akan muncul di perbatasan kedua wilayah. **Urungkan** membatalkan langkah, dan contoh warna penghapus di ujung deretan mengosongkan wilayah kalau kamu berubah pikiran."}},"mines":{"step1":{"text":"Setiap angka menghitung ranjau di delapan kotak yang menyentuhnya. Dua ranjau bersembunyi di bawah blok tertutup itu; buka semua yang lain tanpa menginjak satu pun."},"step2":{"text":"**Angka 1** ini hanya menyentuh satu kotak tertutup, jadi kotak itu pasti ranjau. **Klik kanan** kotak itu untuk memasang bendera."},"step3":{"text":"**Angka 1** di bawahnya kini sudah punya satu ranjau berbendera, jadi tetangga selebihnya aman. **Klik kiri angka 1 itu** untuk membukanya sekaligus."},"step4":{"text":"**Angka 2** di atas blok itu sudah menghitung satu bendera dan menyisakan satu kotak tertutup. **Klik kanan** kotak itu."},"step5":{"text":"Kedua ranjau sudah berbendera, jadi kotak tertutup terakhir pasti aman. **Klik kiri** kotak itu untuk menuntaskan kisinya."},"step6":{"text":"Bersih. Klik kanan kedua mencabut kembali benderanya, dan **Urungkan** menyelamatkanmu kalau kamu sempat menginjak ranjau."}},"net":{"step1":{"text":"Setiap ubin membawa sepotong kabel, dan seluruh jaringannya sudah diputar acak. Putar ubin-ubinnya sampai kesembilannya tersambung ke ubin bertanda di tengah: kabel **biru** sudah teraliri, yang abu-abu belum."},"step2":{"text":"Kabel di ubin kiri bawah menunjuk lurus ke dinding. **Klik kiri** ubin itu untuk memutarnya seperempat putaran berlawanan arah jarum jam, agar kabelnya menjangkau tetangga di kanannya."},"step3":{"text":"**Klik kanan** memutar ubin ke arah sebaliknya. Beri ubin kanan bawah satu putaran searah jarum jam dan kabelnya berayun ke kiri."},"step4":{"text":"Ubin tengah punya kabel di keempat sisinya, jadi ia tidak mungkin salah. **Klik tengah** ubin itu untuk menguncinya, atau nyalakan **gembok** di samping Urungkan lalu klik ubin itu: ubin terkunci diberi arsiran dan menolak diputar.","textTouch":"Ubin tengah punya kabel di keempat sisinya, jadi ia tidak mungkin salah. Nyalakan **gembok** di samping Urungkan lalu ketuk ubin itu untuk menguncinya: ubin terkunci diberi arsiran dan menolak diputar."},"step5":{"text":"Tinggal satu ubin. Dengan **gembok** dimatikan, **klik kiri** pojok kanan atas untuk membawa kabelnya berputar ke kiri dan menyalakan seluruh jaringan.","textTouch":"Tinggal satu ubin. Dengan **gembok** dimatikan, ketuk pojok kanan atas untuk membawa kabelnya berputar ke kiri dan menyalakan seluruh jaringan."},"step6":{"text":"Kesembilan ubin teraliri. **Urungkan** membatalkan putaranmu satu per satu; dengan papan ketik, tombol panah menggerakkan kursor dan **A**, **D**, serta **F** memutar ubin di bawahnya.","textTouch":"Kesembilan ubin teraliri. **Urungkan** membatalkan putaranmu satu per satu, ubin yang dikunci aman dari ketukan nyasar, dan **Acak** memutar ulang semua ubin yang tidak terkunci."}},"netslide":{"step1":{"text":"Setiap potong kabel harus tersambung ke sumber listrik. Kabel biru sudah teraliri, kabel abu-abu tipis belum."},"step2":{"text":"Sumbernya berada di ubin tengah. Ubin itu tidak pernah bergerak, jadi baris dan kolom tengah tidak punya panah — selebihnya bisa digeser."},"step3":{"text":"Klik panah di **sebelah kiri baris paling bawah** untuk menggeser baris itu satu langkah ke kiri; kabel yang jatuh di ujung muncul lagi di kanan."},"step4":{"text":"Baris bawah kini tersambung, tapi masih abu-abu: belum ada yang menghubungkannya ke atas menuju sumber."},"step5":{"text":"**Klik kanan** panah **di atas kolom ketiga**. Klik kanan membalik arah panah, jadi kolom itu bergeser turun dan kabel-kabel terakhir menyala."},"step6":{"text":"Semua teraliri! **Pecahkan** menunjukkan jawaban kalau kamu buntu, dan menu **Jenis** punya kisi dengan tepi bersambung, tempat kabel keluar dari satu tepi lalu muncul di tepi seberangnya."}},"pattern":{"step1":{"text":"Angka di samping setiap baris dan kolom adalah panjang deretan hitamnya, secara berurutan. Simpulkan kotak mana yang hitam lalu isi."},"step2":{"text":"**Kolom ketiga** terbaca 1 2: satu hitam, satu celah, lalu dua hitam. Dalam empat kotak, itu hanya muat satu cara, dengan pasangannya di bawah. **Seret** ke bawah melewati keduanya."},"step3":{"text":"Berarti kotak di atas pasangan itu adalah celahnya. **Klik kanan** kotak itu untuk memberinya titik, yang menandai kotak yang kamu tahu berwarna putih."},"step4":{"text":"Dan kotak paling atas kolom itu adalah satu-satunya hitam dari petunjuknya. **Klik** kotak itu."},"step5":{"text":"**Kolom terakhir** terbaca 3. Di mana pun deretan tiga berada dalam empat kotak, ia selalu menutupi dua kotak tengah, jadi **seret** ke bawah melewati keduanya."},"step6":{"text":"Petunjuk berubah abu-abu begitu garisnya selesai. Lanjutkan sedikit demi sedikit seperti itu, atau biarkan **Pecahkan** menuntaskan yang ini; klik tengah mengembalikan kotak ke status belum diketahui."}},"pearl":{"step1":{"text":"Gambar satu lingkaran tertutup dari pusat kotak ke pusat kotak. Ia tidak harus mampir ke setiap kotak, tetapi harus melewati setiap mutiara."},"step2":{"text":"**Mutiara putih** berarti lingkarannya melintas lurus melewatinya. Di baris atas, satu-satunya arah lurus adalah menyamping, jadi **seret** dari kotak di kiri mutiara itu ke kotak di kanannya."},"step3":{"text":"Mutiara itu kini punya kedua ruasnya, jadi tidak ada lagi yang bisa keluar darinya. **Klik kanan** sisi di bawahnya untuk mencoret sisi itu."},"step4":{"text":"**Mutiara hitam** berbelok, dan lingkarannya lalu melintas lurus melewati kotak di kedua sisinya. Yang di **tepi kiri** tidak bisa berbelok ke bawah — itu akan menuntut garis lurus melalui sudut kiri bawah — jadi **klik** sisi kanannya."},"step5":{"text":"Berarti kotak di sebelahnya diteruskan lurus — begitu pula mutiara putih di seberangnya. **Seret** dari kotak itu menyeberang ke kolom keempat."},"step6":{"text":"Teruslah bekerja dari mutiara-mutiaranya; sebuah mutiara mendapat lingkar cahaya merah begitu aturannya dilanggar. **Pecahkan** menggambar seluruh lingkarannya kalau kamu ingin melihatnya."}},"pegs":{"step1":{"text":"Sebuah pasak melompati tetangganya ke lubang kosong di seberangnya, dan pasak yang dilompati diangkat. Kosongkan papan kecil ini sampai tersisa **satu pasak**: tiga lompatan."},"step2":{"text":"**Seret** pasak di ujung atas tangkai itu turun melewati tetangganya, ke lubang di bawah."},"step3":{"text":"Mengklik juga bisa. Klik **pasak sebelah kanan** untuk mengangkatnya, lalu klik lubang dua kotak di kirinya."},"step4":{"text":"Lompatan terakhir: seret pasak di **sudut kiri bawah** melewati tetangganya ke tengah."},"step5":{"text":"Tersisa satu pasak — terpecahkan. **Urungkan** membatalkan satu lompatan kalau kamu terjebak, dan tombol panah juga bisa: Enter mengangkat pasak, lalu panah mendorongnya.","textTouch":"Tersisa satu pasak — terpecahkan. **Urungkan** membatalkan lompatan kapan pun kamu terjebak, mundur sejauh yang kamu mau."}},"range":{"step1":{"text":"Hitamkan kotak agar setiap angka menghitung persis kotak putih yang dilihat kotaknya sendiri: dirinya sendiri, ditambah setiap kotak segaris ke atas, bawah, kiri, dan kanan sampai kotak hitam atau tepi papan menghentikannya."},"step2":{"text":"**Angka 6** saat ini bisa melihat enam kotak — seluruh barisnya ditambah dua kotak di bawahnya. Jadi tidak ada satu pun di baris atau kolom itu yang boleh dihitamkan."},"step3":{"text":"**Angka 2** hanya boleh melihat dirinya sendiri dan satu kotak lagi, dan kotak di atasnya harus tetap putih demi angka 6. Jadi **klik** kotak di kirinya untuk menghitamkannya."},"step4":{"text":"Dengan begitu kotak kanan atas menjadi satu-satunya kotak putih yang masih dilihat angka 2. **Klik kanan** kotak itu untuk membubuhkan titik, cara mencatat kotak yang kamu tahu tetap putih."},"step5":{"text":"**Angka 3** sudah melihat dirinya sendiri dan dua kotak di kirinya, jadi kotak di kanannya pasti hitam. **Klik** kotak itu."},"step6":{"text":"Selesai dengan dua kotak hitam — titik-titiknya hanya catatan. **H** mengisi satu kotak yang sudah pasti dari kotak lainnya, dan **Pecahkan** mengisi seluruh kisi beserta titiknya.","textTouch":"Selesai dengan dua kotak hitam — titik-titiknya hanya catatan. **Pecahkan** mengisi seluruh kisi beserta titiknya kalau kamu lebih suka melihat jawabannya."}},"rect":{"step1":{"text":"Potong kisi ini menjadi persegi panjang sehingga setiap persegi panjang memuat tepat satu angka, dan angka itu adalah banyaknya kotak yang ditutupinya."},"step2":{"text":"Sebuah persegi panjang hanya boleh memuat satu angka, dan **3** berada tepat di bawah **4** — jadi 4 harus mengambil seluruh baris atas. **Seret** dari 4 menyeberang ke ujung kanan baris itu."},"step3":{"text":"Mengklik satu garis kisi menambah atau menghapus tepat satu sisi itu saja. **Klik** garis di sisi kanan **angka 3**."},"step4":{"text":"Angka 9 hanya bisa berupa blok 3×3, dan tinggal satu tempat untuknya. **Seret** melintasi blok yang disorot, dari kotak kiri atasnya ke sudut kanan bawah: itu sekaligus mengurung angka 3."},"step5":{"text":"Setiap kotak berada dalam persegi panjang berukuran tepat. **Klik kanan sambil menyeret** menghapus garis-garis di dalam suatu area tetapi menyisakan tepinya, dan **Urungkan** membatalkan satu goresan."}},"samegame":{"step1":{"text":"Kosongkan papan dengan membuang kelompok berisi dua kotak sewarna atau lebih yang saling bersentuhan. Kelompok berisi _n_ kotak bernilai (_n_ − 2)², jadi incar kelompok yang besar."},"step2":{"text":"Klik salah satu dari empat kotak **merah** di sepanjang atas. Klik pertama hanya memilih kelompoknya: warnanya memudar dan garis tepinya menebal."},"step3":{"text":"Klik lagi kelompok yang terpilih untuk mengangkatnya dari papan dan meraih empat poin. Kotak di atas celah akan jatuh mengisinya, dan kolom kosong menarik tetangganya merapat."},"step4":{"text":"Kotak **hijau** ini berdiri sendiri. Tidak ada yang sewarna di sebelahnya, jadi ia tidak akan pernah bisa dipilih — ia harus menunggu sampai papan menggeser pasangan ke sampingnya."},"step5":{"text":"Sekarang **pasangan biru** yang disorot ini. Klik salah satu dari kedua kotak itu untuk memilih keduanya."},"step6":{"text":"Berubah pikiran? **Klik kanan** pilihannya untuk melepaskannya lagi — tidak ada yang dibuang sampai kamu mengklik kelompok itu untuk kedua kalinya."},"step7":{"text":"Begitulah cara mainnya. Setiap papan bisa dikosongkan, jadi terus lanjutkan — **Urungkan** memutar balik kalau ada kotak yang telanjur terisolasi, dan tidak ada tombol Pecahkan yang bisa menyelamatkanmu."}},"signpost":{"step1":{"text":"Setiap kotak membawa tanda panah. Sambungkan keenamnya menjadi satu rantai bernomor **1 sampai 6**, di mana setiap kotak disusul oleh kotak yang berada di suatu tempat di sepanjang tanda panahnya sendiri."},"step2":{"text":"**Angka 1** menunjuk ke timur. **Seret** dari angka itu ke kotak di kanannya untuk menjadikannya angka 2."},"step3":{"text":"**Angka 3** mengaitkan dirinya sendiri, seperti biasa terjadi pada angka yang berurutan dan menunjuk ke arah yang tepat. Sekarang **seret** kotak kanan bawah ke kotak di kirinya."},"step4":{"text":"Kedua kotak itu belum punya nomor, jadi pasangannya diberi label **a** dan **a+1**. **Klik kanan** kotak tengah di baris bawah untuk memisahkan keduanya lagi."},"step5":{"text":"Nomor sungguhan lebih baik: **seret** **angka 3** ke kotak di bawahnya, yang menjadi angka 4."},"step6":{"text":"Sambungan terakhir: **seret** angka 4 itu ke kotak di kirinya. Ia menjadi angka 5, dan angka 6 menutup lintasannya sendiri."},"step7":{"text":"Terpecahkan. **Klik kanan sambil menyeret** menyambung ke arah sebaliknya, dari sebuah kotak kembali ke kotak sebelumnya, dan **Pecahkan** membentangkan seluruh lintasannya."}},"singles":{"step1":{"text":"Hitamkan kotak sampai tidak ada angka yang berulang di antara kotak putih pada baris atau kolom mana pun. Dua kotak hitam tidak boleh berbagi sisi, dan kotak-kotak putih harus tetap menjadi satu wilayah yang menyatu."},"step2":{"text":"Kedua **angka 4** di baris ini terpisah satu kotak. Menghitamkan kotak itu akan menyisakan kedua angka 4 tetap putih, jadi kotak itu sendiri pasti putih — **klik kanan** untuk melingkarinya."},"step3":{"text":"**Angka 3** yang dilingkari itu putih untuk selamanya, dan kolomnya memuat angka 3 lain di atas. **Klik kiri** yang di atas untuk menghitamkannya."},"step4":{"text":"Kotak hitam tidak pernah bersentuhan, jadi **angka 4** tepat di kanannya tetap putih. **Klik kiri** angka 4 satunya di kolom terakhir itu."},"step5":{"text":"Sama lagi: **angka 2** tepat di atas kotak hitam barumu berwarna putih, dan barisnya punya angka 2 lain jauh di kiri. **Klik kiri** yang itu."},"step6":{"text":"Tinggal satu. **Angka 3** di atas kotak hitam itu berwarna putih, jadi angka 3 satunya di kaki kolom harus dihitamkan. **Klik kiri** angka itu."},"step7":{"text":"Terpecahkan, dan kotak-kotak putihnya masih tersambung semua. Lingkaran hanyalah catatan, dan **Urungkan** membatalkan langkahmu satu per satu."}},"sixteen":{"step1":{"text":"Susun ubinnya berurutan, **1 sampai 9**, dibaca dari kiri ke kanan. Tanda panah di sekeliling tepi menggeser satu baris atau kolom penuh satu langkah, dan apa pun yang jatuh di ujung muncul lagi di sisi seberangnya."},"step2":{"text":"Klik tanda panah **di atas kolom kedua** untuk menggeser kolom itu naik satu langkah; itu menuntaskan baris tengah."},"step3":{"text":"Sekarang baris bawah perlu bergeser ke kanan. **Klik kanan** tanda panah di **sebelah kiri baris bawah**: klik kanan mengirim barisnya ke arah sebaliknya."},"step4":{"text":"Yang terakhir: klik tanda panah di **sebelah kiri baris atas** untuk menggesernya ke kiri dan menuntaskan kisinya."},"step5":{"text":"Berurutan! **Jenis** di menu jeda menawarkan kisi yang lebih besar, dan **Kustom…** di dalamnya bisa mengacak kisi dengan jumlah langkah pengacakan tertentu untuk kamu urai kembali."}},"slant":{"step1":{"text":"Gambar satu diagonal di setiap kotak. Angka berlingkaran menghitung garis yang menyentuh sudutnya, dan garis-garisnya tidak boleh menutup sebuah lingkaran."},"step2":{"text":"**Angka 0** di sudut kiri atas tidak ingin ada yang menyentuhnya, jadi satu kotaknya harus miring ke arah sebaliknya. **Klik kanan** kotak itu untuk menggambar `/`."},"step3":{"text":"**Angka 4** butuh garis dari keempat kotak di sekelilingnya. **Klik kiri** kotak di atas-kirinya — sekali klik kiri menggambar `\\\\`."},"step4":{"text":"Kotak di atas-kanan **angka 4** justru harus miring ke kiri bawah. **Klik kanan** kotak itu untuk `/`."},"step5":{"text":"**Angka 1** di tepi kiri sudah punya satu garisnya, dari kotak di bawahnya. Jadi kotak di atas harus miring menjauh: **klik kiri** kotak itu untuk `\\\\`."},"step6":{"text":"Lanjutkan dengan cara yang sama. Angka yang tidak mungkin lagi terpenuhi berubah merah, begitu pula garis mana pun yang terjebak dalam lingkaran tertutup. **Pecahkan** di menu jeda mengisi sisanya."}},"solo":{"step1":{"text":"Setiap baris, setiap kolom, dan setiap **blok 2×2** bergaris tepi harus memuat 1, 2, 3, dan 4 tepat sekali. Tiga kotak masih kosong di kisi kecil ini."},"step2":{"text":"**Blok** ini sudah punya 2, 3, dan 4, jadi kotak kosongnya hanya bisa berisi **1**. Klik kotak itu lalu tekan tombol **1**.","textTouch":"**Blok** ini sudah punya 2, 3, dan 4, jadi kotak kosongnya hanya bisa berisi **1**. Ketuk kotak itu, lalu ketuk **1** pada papan tombol."},"step3":{"text":"Belum yakin dengan sebuah kotak? **Klik kanan** kotak kosong ini lalu tekan **2** untuk menuliskan angkanya sebagai tanda pensil.","textTouch":"Belum yakin dengan sebuah kotak? Ketuk kotak kosong ini, nyalakan **✎** pada papan tombol, lalu ketuk **2** untuk menuliskan angkanya sebagai tanda pensil."},"step4":{"text":"Barisnya sudah memuat 3, 4, dan 1, jadi catatannya benar. **Klik kiri** kotak yang sama lalu tekan **2** untuk menuliskan jawabannya.","textTouch":"Barisnya sudah memuat 3, 4, dan 1, jadi catatannya benar. Kotaknya masih terpilih, jadi ketuk **✎** untuk berhenti menulis tanda pensil lalu **2** untuk menuliskan jawabannya."},"step5":{"text":"Tinggal satu kotak. Barisnya sudah punya 4, 3, dan 1 — klik kotak itu lalu tekan angka yang hilang.","textTouch":"Tinggal satu kotak. Barisnya sudah punya 4, 3, dan 1 — ketuk kotak itu, lalu ketuk angka yang hilang pada papan tombol."},"step6":{"text":"Terpecahkan! **Urungkan** membatalkan angka yang salah, dan tombol **M** menuliskan setiap kemungkinan sebagai tanda pensil di semua kotak kosong sekaligus.","textTouch":"Terpecahkan! **Urungkan** membatalkan angka yang salah, dan **Tanda** di menu jeda menuliskan setiap kemungkinan sebagai tanda pensil di semua kotak kosong sekaligus."}},"tents":{"step1":{"text":"Dirikan satu tenda di samping setiap pohon — di atas, bawah, kiri, atau kanannya, tidak pernah diagonal. Tidak boleh ada dua tenda yang bersentuhan, dan angka-angkanya menghitung tenda di setiap baris dan kolom."},"step2":{"text":"**Angka 0** di ujung baris kedua berarti baris itu tidak mendapat tenda. **Klik kanan** kotak di sebelah pohon untuk menandainya sebagai rumput."},"step3":{"text":"Kolom ketiga juga kosong. **Seret dengan tombol kanan** dari kotak teratasnya turun ke baris ketiga untuk merumputkan ketiganya sekaligus."},"step4":{"text":"Pohon di kanan bawah ada di pojok dengan pohon lain di sampingnya, jadi satu-satunya tetangga bebasnya ada di atas. **Klik kiri** kotak itu untuk mendirikan tenda."},"step5":{"text":"Tenda itu memenuhi baris ketiga, jadi pohon di tepi kiri juga tidak bisa berkemah di bawahnya. **Klik kiri** kotak kiri atas."},"step6":{"text":"Satu pohon masih belum punya tenda, dan hanya kotak di kirinya yang bebas. **Klik kiri** kotak itu untuk menuntaskan perkemahannya."},"step7":{"text":"Terpecahkan! Mengklik lagi sebuah tenda atau tanda rumput akan menghapusnya, tombol panah dengan Enter dan Space melakukan tugas yang sama, dan **Urungkan** membatalkan langkah.","textTouch":"Terpecahkan! Mengetuk lagi sebuah tenda atau tanda rumput akan menghapusnya, dan **Urungkan** membatalkan langkah."}},"towers":{"step1":{"text":"Setiap baris dan kolom memuat satu menara dari tiap ketinggian, 1 sampai 4. Angka di sekeliling tepi menghitung menara yang bisa kamu **lihat** dari sana: menara yang lebih tinggi menyembunyikan semua yang lebih pendek di belakangnya."},"step2":{"text":"**Angka 1** di kanan baris atas berarti hanya satu menara yang terlihat dari sisi itu, jadi yang terdekat pasti yang tertinggi. Klik kotak itu lalu tekan **4**.","textTouch":"**Angka 1** di kanan baris atas berarti hanya satu menara yang terlihat dari sisi itu, jadi yang terdekat pasti yang tertinggi. Ketuk kotak itu, lalu ketuk **4** pada papan tombol."},"step3":{"text":"Kamu bisa mencatat kemungkinan tanpa langsung menjawab. **Klik kanan** kotak kosong di ujung kiri baris atas lalu tekan **1**.","textTouch":"Kamu bisa mencatat kemungkinan tanpa langsung menjawab. Ketuk kotak kosong di ujung kiri baris atas, nyalakan **✎** pada papan tombol, lalu ketuk **1**."},"step4":{"text":"**Angka 4** di kiri baris itu mengatakan keempat menara terlihat, jadi mereka menanjak 1-2-3-4 dari ujung itu. **Klik kiri** kotaknya lalu tekan **1** untuk menjawabnya.","textTouch":"**Angka 4** di kiri baris itu mengatakan keempat menara terlihat, jadi mereka menanjak 1-2-3-4 dari ujung itu. Kotaknya masih terpilih, jadi ketuk **✎** untuk berhenti menulis tanda pensil lalu **1** untuk menjawabnya."},"step5":{"text":"Tinggal satu kotak, dan **angka 1** di samping barisnya kembali menempatkan menara tertinggi paling dekat. Klik kotak itu lalu tekan **4**.","textTouch":"Tinggal satu kotak, dan **angka 1** di samping barisnya kembali menempatkan menara tertinggi paling dekat. Ketuk kotak itu, lalu ketuk **4** pada papan tombol."},"step6":{"text":"Terpecahkan! **Backspace** mengosongkan kotak yang kamu isi keliru, dan **Pecahkan** di menu jeda menuntaskan teka-teki yang mengalahkanmu.","textTouch":"Terpecahkan! **⌫** pada papan tombol mengosongkan kotak yang kamu isi keliru. Di menu jeda, **Tanda** menuliskan semua kemungkinan dan **Pecahkan** menuntaskan teka-teki yang mengalahkanmu."}},"tracks":{"step1":{"text":"Satu jalur rel membentang dari pintu masuk di kiri ke pintu keluar di bawah, dan setiap kotak yang dilewatinya punya tepat dua rel. Angka-angkanya menyatakan berapa kotak dari kolom atau baris itu yang dilalui jalurnya."},"step2":{"text":"Potongan pintu masuk sudah menanjak ke **kotak kiri atas**, dan sisi atas serta sisi kiri kotak itu adalah tepi kisi. Jadi rel keduanya harus ke kanan: **klik** tepat di kanan tengahnya."},"step3":{"text":"**Kolom kiri** dihitung **2** dan pintu masuk sudah memakai kedua kotaknya, jadi tidak ada apa-apa yang melintasi separuh bawahnya. **Klik kanan** bagian tengah sebuah kotak untuk mencoretnya — menyeret dengan tombol kanan mencoret satu deretan sekaligus."},"step4":{"text":"**Kolom kanan** dihitung **4**, jadi jalurnya mampir ke setiap kotaknya, dan kotak di ujung atas dan bawahnya hanya bisa berbelok ke dalam. **Seret** dari kotak kanan atas terus ke bawah sampai kotak kanan bawah."},"step5":{"text":"**Baris bawah** butuh tiga kotak dan kolom kiri sudah selesai, jadi sudut kanan bawah berada di jalur. Ia tidak bisa keluar dari kisi, jadi ia berbelok ke kiri dan ke atas: **klik** sisi kirinya."},"step6":{"text":"Hitungan berubah abu-abu ketika garisnya benar dan merah ketika tidak mungkin terpenuhi. Lanjutkan dari ujung-ujung yang menggantung, atau biarkan **Pecahkan** menuntaskan relnya."}},"twiddle":{"step1":{"text":"Kembalikan angka-angkanya ke urutan **1 sampai 9**. Satu langkah memutar sebuah blok persegi berisi empat ubin seperempat putaran; tiga putaran menuntaskan papan ini."},"step2":{"text":"Klik di tengah **empat ubin kiri atas**. Sekali klik kiri memutar blok itu berlawanan arah jarum jam, sehingga 1, 2, 3 berjajar di atas."},"step3":{"text":"**Klik kanan** di tengah **empat ubin kanan bawah** untuk memutar blok itu searah jarum jam."},"step4":{"text":"Tuntaskan dengan sekali klik kiri di tengah **empat ubin kiri bawah**."},"step5":{"text":"Selesai! Menu **Jenis** punya blok yang lebih besar dan mode *dengan arah*, di mana setiap ubin juga harus berakhir menghadap ke atas."}},"undead":{"step1":{"text":"Isi kelima kotak kosong dengan hantu, vampir, dan zombi — hitungan di atas menyatakan berapa banyak masing-masingnya. Setiap angka menghitung monster yang terlihat saat memandang sepanjang garis itu, dan cermin membelokkan pandanganmu."},"step2":{"text":"Memandang masuk dari **kiri baris atas** kamu tidak melihat apa pun; cermin membelokkan garis yang sama itu keluar di atas, di mana **angka 1** melihat satu monster. Hanya hantu yang tersembunyi saat dipandang langsung tetapi tampak di cermin. **Klik** kotak itu."},"step3":{"text":"**Angka 4** di sudut kiri bawah berkelok-kelok lewat cermin melewati tiga kotak dan melihat ketiganya. Vampir lenyap di cermin, jadi satu-satunya vampir pasti kotak tengah di kolom kiri. **Klik** kotak itu."},"step4":{"text":"Klik hanya mengganti monsternya satu per satu. **Tekan V** saja: G, V, dan Z langsung menaruh hantu, vampir, atau zombi di kotak yang disorot.","textTouch":"Satu ketukan hanya menelusuri monster satu per satu. Sebagai gantinya, ketuk **Vampir** pada papan tombol: monster itu langsung masuk ke kotak yang disorot."},"step5":{"text":"**Baris tengah** adalah pandangan lurus tanpa cermin dan kedua **angka 1** melihat satu monster — vampirnya. Jadi kedua tetangganya pasti hantu. **Klik** kotak tengah."},"step6":{"text":"**Klik kanan** membubuhkan catatan kecil alih-alih menaruh apa pun. Cobalah pada kotak sebelah kanan di baris itu; setiap klik kanan menambahkan monster berikutnya."},"step7":{"text":"Tinggal dua kotak: yang bercatatan pensil adalah hantu ketiga, dan yang terakhir zombinya. Angka meredup jadi abu-abu begitu garisnya beres; **Pecahkan** menuntaskan labirinnya kalau kamu lebih suka menonton."}},"unequal":{"step1":{"text":"Setiap baris dan kolom butuh 1, 2, 3, dan 4 masing-masing sekali — dan setiap tanda di antara dua kotak harus menunjuk ke kotak yang **lebih kecil** dari pasangan itu."},"step2":{"text":"Tanda di sini menunjuk ke kanan, jadi kotak **kiri** yang lebih besar. Baris ini masih butuh 2 dan 3: klik kotak kiri lalu tekan **3**.","textTouch":"Tanda di sini menunjuk ke kanan, jadi kotak **kiri** yang lebih besar. Baris ini masih butuh 2 dan 3: ketuk kotak kiri, lalu ketuk **3** pada papan tombol."},"step3":{"text":"Kotak yang ditunjuk tanda itu mendapat angka yang lebih kecil. Klik kotak itu lalu tekan **2**.","textTouch":"Kotak yang ditunjuk tanda itu mendapat angka yang lebih kecil. Ketuk kotak itu, lalu ketuk **2** pada papan tombol."},"step4":{"text":"Kolomnya kini punya angka 3, jadi kotak ini hanya bisa berisi 2. **Klik kanan** kotak itu lalu tekan **2** untuk menuliskannya sebagai tanda pensil.","textTouch":"Kolomnya kini punya angka 3, jadi kotak ini hanya bisa berisi 2. Ketuk kotak itu, nyalakan **✎** pada papan tombol, lalu ketuk **2** untuk menuliskannya sebagai tanda pensil."},"step5":{"text":"Catatan bukan jawaban. **Klik kiri** kotak yang sama lalu tekan **2** untuk memastikannya.","textTouch":"Catatan bukan jawaban. Kotaknya masih terpilih, jadi ketuk **✎** untuk berhenti menulis tanda pensil lalu **2** untuk memastikannya."},"step6":{"text":"Tinggal satu kotak. Klik kotak itu lalu tekan **3** untuk menuntaskan perseginya.","textTouch":"Tinggal satu kotak. Ketuk kotak itu, lalu ketuk **3** pada papan tombol untuk menuntaskan perseginya."},"step7":{"text":"Terpecahkan! **Urungkan** membatalkan sebuah angka, dan **Pecahkan** mengisi jawabannya kalau sebuah teka-teki mengalahkanmu.","textTouch":"Terpecahkan! **Urungkan** membatalkan sebuah angka, **Tanda** dan **Petunjuk** menuliskan kemungkinannya, dan **Pecahkan** mengisi jawabannya kalau sebuah teka-teki mengalahkanmu."}},"unruly":{"step1":{"text":"Warnai setiap kotak hitam atau putih. Setiap baris dan kolom butuh **tiga dari masing-masing warna**, dan tidak ada warna yang boleh muncul **tiga kali berderet**. Tiga kotak masih belum ditentukan."},"step2":{"text":"Baris ini sudah punya tiga kotak putih, jadi yang belum ditentukan pasti hitam. **Klik kiri** kotak itu: sekali klik kiri mewarnainya hitam."},"step3":{"text":"Baris ini sudah punya tiga hitam, jadi kotaknya yang belum ditentukan berwarna putih. **Klik kanan** kotak itu — klik kanan bekerja terbalik dan mewarnai putih lebih dulu."},"step4":{"text":"Kotak terakhir yang belum ditentukan punya dua hitam di kirinya, dan tiga berderet tidak diizinkan. **Klik kanan** kotak itu untuk mewarnainya putih dan menuntaskan kisinya."},"step5":{"text":"Terpecahkan! Mengklik lagi kotak berwarna memutarnya ke warna satunya lalu kembali ke belum ditentukan, dan **Urungkan** membatalkan langkahmu satu per satu."}},"untangle":{"step1":{"text":"Enam titik berada di sebuah cincin, dihubungkan oleh delapan garis. Dua pasang di antaranya bersilangan — itulah yang merah. Seret titik-titiknya sampai tidak ada merah yang tersisa."},"step2":{"text":"Pertama klik **Kisi bantu**, tombol kisi di samping Urungkan (atau tekan **G**). Itu menyalakan kisi bantu, sehingga titik yang kamu jatuhkan mendarat di salah satu titik samar di pusat kotak."},"step3":{"text":"**Seret** titik di puncak cincin ke kotak kosong di **sudut kiri atas**.","textTouch":"**Seret** titik di puncak cincin ke ruang kosong di **sudut kiri atas** papan. Tidak harus tepat di titik tertentu — yang penting persilangannya hilang."},"step4":{"text":"Tinggal satu persilangan, di sebelah kanan. **Seret** titik terbawah ke **sudut kanan bawah** yang kosong.","textTouch":"Tinggal satu persilangan, di sebelah kanan. **Seret** titik terbawah ke **sudut kanan bawah** yang kosong — garis merah terakhir lenyap begitu ia bebas."},"step5":{"text":"Terurai. **Pecahkan** membentangkan kekusutan apa pun untukmu, dan tombol panah menggerakkan kursor dari titik ke titik, dengan Enter untuk mengangkat dan menjatuhkannya.","textTouch":"Terurai. Garis merah adalah yang masih bersilangan, jadi teruslah menyeret sampai tidak ada yang tersisa — atau biarkan **Pecahkan** membentangkan kekusutannya untukmu."}}}'),Fe={$locale:`id`,$name:q,$dir:`ltr`,ui:J,touchPhrases:Y,messages:X,status:Z,games:Q,tutorials:$};export{g as A,ee as B,A as C,S as D,w as E,o as F,i as I,oe as L,f as M,u as N,b as O,c as P,ie as R,M as S,E as T,t as V,H as _,Ee as a,I as b,be as c,me as d,fe as f,W as g,se as h,Oe as i,m as j,v as k,ve as l,ce as m,Me as n,we as o,ue as p,Ae as r,Se as s,Pe as t,ge as u,B as v,O as w,P as x,R as y,ne as z};
//# sourceMappingURL=i18n-id-cCbBKfrM.js.map