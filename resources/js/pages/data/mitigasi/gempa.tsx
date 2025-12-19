 import { MitigasiData } from '@/types/mitigasi';
import {
  Mountain,
  AlertTriangle,
  Shield,
  Home,
  FileText,
  Users,
  Zap,
  Phone,
  CheckCircle2,
  Info,
  Clock,
  Building2,
  Hammer,
  ArrowLeft,
  Activity
} from 'lucide-react';

export const gempa: MitigasiData = {
    slug:"gempa",
    title: "Mitigasi Bencana Gempa Bumi",
    description: "Langkah-langkah penting untuk mengurangi risiko dan dampak bencana gempa bumi.",

    sebelum: [
       {
         title: 'Amankan Barang Berat dan Furnitur',
         icon: Home,
         description: 'Mencegah jatuhnya benda yang dapat melukai saat gempa',
         details: [
           'Pasang pengaman L-bracket pada lemari tinggi ke dinding',
           'Gunakan museum putty atau velcro untuk mengamankan barang pecah belah',
           'Letakkan barang berat di rak bagian bawah, bukan atas',
           'Pasang pengunci otomatis pada pintu lemari',
           'Amankan TV dan monitor dengan strap anti-jatuh',
           'Hindari menempatkan cermin besar di atas tempat tidur',
           'Pindahkan pot berat atau akuarium dari tempat tinggi',
           'Pasang stopper pada roda lemari yang beroda',
           'Gunakan pembatas buku di rak perpustakaan'
         ],
         tips: 'Setiap 10 cm ketinggian jatuh dapat menyebabkan cedera serius. Amankan semua benda di atas kepala!',
         color: 'from-orange-500 to-amber-600'
       },
       {
         title: 'Identifikasi Zona Aman di Rumah',
         icon: Shield,
         description: 'Menentukan tempat berlindung yang aman saat gempa',
         details: [
           'Cari meja kokoh untuk berlindung (bukan meja kaca)',
           'Identifikasi segitiga kehidupan di samping furnitur besar',
           'Hindari area dekat jendela, cermin, dan rak tinggi',
           'Tandai dinding struktural (biasanya lebih tebal)',
           'Pastikan jalur keluar tidak terhalang barang',
           'Catat lokasi katup gas, MCB listrik, dan kran air utama',
           'Letakkan senter dan sepatu di dekat tempat tidur',
           'Hindari area dengan lampu gantung besar',
           'Buat peta zona aman dan tempel di tempat terlihat'
         ],
         tips: 'Zona aman terbaik: di bawah meja kokoh yang jauh dari jendela, atau di samping dinding struktural.',
         color: 'from-blue-500 to-cyan-600'
       },
       {
         title: 'Perkuat Struktur Bangunan',
         icon: Building2,
         description: 'Meningkatkan ketahanan bangunan terhadap guncangan',
         details: [
           'Lakukan retrofitting seismik pada bangunan tua',
           'Perkuat sambungan antara fondasi dan struktur utama',
           'Periksa dan perbaiki retakan pada dinding dan pilar',
           'Gunakan bahan bangunan yang fleksibel dan tahan gempa',
           'Pasang base isolator atau peredam getaran (untuk bangunan baru)',
           'Konsultasi dengan engineer struktural untuk evaluasi',
           'Hindari perubahan struktur yang melemahkan bangunan',
           'Periksa kondisi atap dan pastikan terpasang kuat',
           'Perkuat balkon dan overstek yang menjorok'
         ],
         tips: 'Investasi retrofitting seismik dapat menyelamatkan nyawa dan menghemat biaya perbaikan pasca gempa.',
         color: 'from-slate-600 to-gray-700'
       },
       {
         title: 'Latihan Drop, Cover, Hold On',
         icon: Users,
         description: 'Simulasi gempa untuk meningkatkan kesiapsiagaan keluarga',
         details: [
           'Lakukan drill gempa bersama keluarga setiap 3-6 bulan',
           'Praktikkan gerakan DROP (jatuhkan tubuh), COVER (lindungi kepala), HOLD ON (pegang)',
           'Latih skenario gempa di berbagai lokasi (kamar tidur, dapur, ruang tamu)',
           'Ajarkan anak-anak cara melindungi kepala dengan tangan',
           'Simulasikan evakuasi setelah gempa berhenti',
           'Latih komunikasi saat terjadi gempa (peluit, ketukan)',
           'Test alarm gempa atau sistem peringatan dini',
           'Diskusikan rencana untuk anggota keluarga di lokasi berbeda',
           'Evaluasi dan perbaiki setelah setiap latihan'
         ],
         tips: 'Muscle memory menyelamatkan nyawa. Saat gempa, tubuh akan otomatis melakukan apa yang sudah dilatih.',
         color: 'from-purple-500 to-pink-600'
       },
       {
         title: 'Siapkan Emergency Kit Gempa',
         icon: FileText,
         description: 'Perlengkapan darurat khusus untuk pasca gempa',
         details: [
           'Tas tahan air berisi dokumen penting (KTP, sertifikat, asuransi)',
           'Kotak P3K lengkap dengan antiseptik dan perban',
           'Air minum 3 liter per orang untuk 3 hari',
           'Makanan non-perishable (kaleng, energi bar)',
           'Senter LED dengan baterai cadangan',
           'Radio bertenaga baterai atau hand-crank',
           'Peluit darurat untuk memberi sinyal',
           'Multi-tool atau pisau Swiss Army',
           'Masker N95 dan sarung tangan kerja',
           'Tenda darurat atau sleeping bag',
           'Sepatu kerja dengan sol tebal',
           'Power bank terisi penuh',
           'Uang tunai secukupnya',
           'Obat-obatan rutin keluarga',
           'Perlengkapan bayi jika ada'
         ],
         tips: 'Simpan emergency kit di tempat mudah dijangkau. Periksa dan refresh setiap 6 bulan.',
         color: 'from-emerald-500 to-teal-600'
       }
     ],

     saat: [
       {
         title: 'DROP, COVER, HOLD ON!',
         icon: Activity,
         description: 'Protokol standar internasional saat gempa terjadi',
         details: [
           'DROP: Langsung jatuhkan tubuh ke lantai dengan posisi merangkak',
           'COVER: Berlindung di bawah meja kokoh, lindungi kepala dan leher dengan tangan',
           'HOLD ON: Pegang kaki meja dengan satu tangan, siap bergerak jika meja bergeser',
           'Jika tidak ada meja: berlindung di samping dinding interior yang kokoh',
           'Lindungi kepala dengan bantal, tas, atau tangan',
           'JANGAN berlari keluar saat masih ada guncangan',
           'Bertahan di posisi aman sampai guncangan benar-benar berhenti',
           'Jika di tempat tidur, tetap di tempat dan lindungi kepala dengan bantal',
           'Bersiap untuk aftershock (gempa susulan)'
         ],
         tips: 'Golden Rule: Jangan panik dan jangan lari! Posisi merangkak + lindungi kepala = kunci selamat.',
         warning: 'Paling banyak korban terluka karena BERLARI saat gempa, bukan karena reruntuhan!',
         color: 'from-red-600 to-rose-700'
       },
       {
         title: 'Jauhi Bahaya dan Zona Berisiko',
         icon: AlertTriangle,
         description: 'Area yang harus dihindari saat terjadi gempa',
         details: [
           'JAUHI jendela, kaca, dan cermin yang bisa pecah',
           'JAUHI lemari tinggi, rak buku, dan TV yang bisa jatuh',
           'JAUHI area dengan lampu gantung besar',
           'JAUHI pintu (engsel bisa lepas dan pintu membentur kepala)',
           'Jika di dapur, matikan kompor dan jauhi area tersebut',
           'Jika di kamar mandi, lindungi kepala dan jauhi cermin',
           'Hindari berdiri di bawah plafon atau langit-langit yang retak',
           'Jangan berdiri di dekat barang pecah belah atau benda tajam',
           'Waspadai perabotan beroda yang bisa bergerak tak terkendali'
         ],
         tips: 'Zona paling berbahaya: di bawah rak buku tinggi, dekat jendela kaca, dan di bawah lampu gantung.',
         color: 'from-yellow-500 to-amber-600'
       },
       {
         title: 'Jika Berada di Luar Ruangan',
         icon: Mountain,
         description: 'Tindakan aman saat gempa terjadi di area terbuka',
         details: [
           'Segera menjauh dari bangunan, tiang listrik, dan pohon besar',
           'Cari area terbuka yang jauh dari struktur yang bisa roboh',
           'Duduk atau berbaring untuk menghindari terjatuh',
           'Lindungi kepala dengan tas atau tangan',
           'JANGAN masuk ke dalam bangunan saat gempa masih berlangsung',
           'Jauhi jembatan layang atau flyover',
           'Hindari area dekat tebing atau lereng yang bisa longsor',
           'Waspadai kabel listrik yang putus dan tergantung',
           'Tetap di tempat terbuka sampai guncangan berhenti total'
         ],
         tips: 'Aturan 2x tinggi: jauhi bangunan minimal 2x tinggi bangunan tersebut untuk menghindari reruntuhan.',
         color: 'from-green-600 to-emerald-700'
       },
       {
         title: 'Jika Berada di Dalam Kendaraan',
         icon: Zap,
         description: 'Prosedur keselamatan untuk pengemudi dan penumpang',
         details: [
           'Perlambat kendaraan secara bertahap dan HATI-HATI',
           'Berhenti di tempat aman jauh dari bangunan, jembatan, pohon besar',
           'Hindari berhenti di bawah jembatan layang atau flyover',
           'Nyalakan lampu hazard sebagai tanda',
           'TETAP DI DALAM MOBIL sampai guncangan berhenti',
           'Hindari keluar jika ada kabel listrik jatuh di sekitar',
           'Dengarkan radio untuk informasi',
           'Setelah guncangan berhenti, periksa kondisi jalan sebelum melanjutkan',
           'Waspadai retakan jalan, jembatan rusak, atau longsor',
           'Jika terjebak di terowongan, tetap di mobil dan lindungi kepala'
         ],
         tips: 'Mobil adalah "sangkar Faraday" yang melindungi dari kabel listrik. Lebih aman di dalam daripada keluar.',
         color: 'from-indigo-600 to-purple-700'
       },
       {
         title: 'Situasi Khusus dan Respons Cepat',
         icon: Phone,
         description: 'Tindakan untuk kondisi darurat spesifik',
         details: [
           'Jika di gedung tinggi: JANGAN gunakan lift! Gunakan tangga darurat',
           'Jika di bioskop/mall: berlindung di bawah kursi, lindungi kepala',
           'Jika di sekolah: berlindung di bawah meja, ikuti instruksi guru',
           'Jika di pantai dan gempa >1 menit: SEGERA ke dataran tinggi (waspadai tsunami)',
           'Jika di gunung: waspadai longsor, menjauh dari tebing',
           'Jika terperangkap reruntuhan: tenang, atur napas, ketuk pipa atau dinding',
           'Gunakan peluit untuk memberi sinyal lokasi',
           'Lindungi mulut dari debu dengan kain',
           'Jangan berteriak (hemat energi), gunakan ketukan berirama',
           'Jika ada celah cahaya, bergerak ke arah sana perlahan'
         ],
         tips: 'Untuk tsunami: "Felt it? Flee it!" - Jika merasakan gempa di pantai, langsung evakuasi!',
         warning: 'Gempa besar di laut bisa memicu tsunami 15-20 menit kemudian. Jangan menunggu peringatan!',
         color: 'from-cyan-600 to-blue-700'
       }
     ],

     setelah: [
       {
         title: 'Evakuasi dengan Aman',
         icon: Users,
         description: 'Prosedur keluar dari bangunan pasca gempa',
         details: [
           'Tunggu 1-2 menit setelah guncangan berhenti untuk memastikan aman',
           'Periksa kondisi diri dan anggota keluarga dari cedera',
           'Kenakan sepatu tertutup untuk melindungi kaki dari pecahan',
           'Gunakan tangga, BUKAN lift (risiko aftershock)',
           'Bawa tas darurat dan dokumen penting',
           'Bantu orang tua, anak-anak, dan disabilitas',
           'Jangan menyalakan korek atau lighter (risiko kebocoran gas)',
           'Tutup pintu saat keluar tapi JANGAN dikunci',
           'Perhatikan retakan dinding, plafon yang kendur, atau kerusakan struktural',
           'Jika ada asap atau api, merangkaklah di bawah asap',
           'Kumpul di titik evakuasi yang sudah ditentukan'
         ],
         tips: 'Setelah keluar, JANGAN masuk kembali ke bangunan sampai dinyatakan aman oleh petugas.',
         warning: 'Aftershock bisa setara dengan gempa utama. Bangunan yang sudah retak bisa roboh saat aftershock.',
         color: 'from-orange-600 to-red-700'
       },
       {
         title: 'Matikan Utilitas untuk Cegah Kebakaran',
         icon: Zap,
         description: 'Mencegah kebakaran dan ledakan pasca gempa',
         details: [
           'Matikan saklar MCB listrik utama di panel',
           'Tutup katup gas LPG atau gas pipa',
           'Tutup kran air utama jika ada kerusakan pipa',
           'Cium bau gas? Buka jendela, JANGAN nyalakan listrik, segera keluar',
           'Jika ada kabel listrik putus, jauhi dan laporkan ke PLN',
           'Jangan menyalakan listrik sampai diperiksa teknisi',
           'Cabut semua colokan peralatan elektronik',
           'Periksa selang gas dari kebocoran dengan air sabun',
           'Matikan genset atau sumber listrik alternatif',
           'Tunggu 24-48 jam sebelum menghidupkan utilitas kembali'
         ],
         tips: 'Deteksi kebocoran gas: bau khas, suara mendesis, atau tanaman mati tiba-tiba di sekitar pipa.',
         warning: 'Kebakaran pasca gempa bisa lebih mematikan daripada gempa itu sendiri. Prioritaskan keamanan utilitas!',
         color: 'from-yellow-600 to-orange-600'
       },
       {
         title: 'Periksa Kerusakan Bangunan',
         icon: Building2,
         description: 'Evaluasi keamanan struktural sebelum menghuni',
         details: [
           'Cek retakan pada pilar, balok, dan dinding penahan',
           'Perhatikan perubahan kemiringan lantai atau dinding',
           'Periksa fondasi dari perpindahan atau penurunan',
           'Cek sambungan antara dinding dan atap',
           'Waspadai plafon yang kendur atau langit-langit retak',
           'Periksa tangga dari kerusakan atau kemiringan tidak normal',
           'Foto semua kerusakan untuk dokumentasi asuransi',
           'Tandai area berbahaya dengan garis polisi atau tali',
           'Hubungi engineer struktural untuk inspeksi profesional',
           'JANGAN masuk jika ada tanda-tanda kerusakan serius',
           'Laporkan bangunan rusak berat ke BPBD atau Dinas PU'
         ],
         tips: 'Tanda bangunan tidak aman: retakan diagonal lebar, pilar retak, dinding miring, pintu/jendela macet.',
         color: 'from-slate-600 to-gray-700'
       },
       {
         title: 'Bersiap untuk Aftershock',
         icon: Activity,
         description: 'Kewaspadaan terhadap gempa susulan',
         details: [
           'Aftershock bisa terjadi dalam hitungan menit hingga berbulan-bulan',
           'Gempa susulan bisa sebesar 1-2 magnitudo lebih rendah dari gempa utama',
           'Tetap waspada dan siap berlindung sewaktu-waktu',
           'Jangan berada di dalam bangunan rusak saat aftershock',
           'Simpan sepatu dan senter di dekat Anda saat tidur',
           'Siapkan jalur evakuasi yang tidak terhalang',
           'Pantau informasi dari BMKG tentang potensi aftershock',
           'Ajarkan keluarga untuk tetap tenang saat aftershock',
           'Tetap di area terbuka jika bangunan mengalami kerusakan',
           'Catat waktu dan intensitas setiap aftershock yang dirasakan'
         ],
         tips: 'Aturan 1-2-3: dalam 1 hari bisa ada belasan aftershock, dalam 2-3 hari bisa lebih dari 100 gempa susulan kecil.',
         color: 'from-purple-600 to-pink-700'
       },
       {
         title: 'Berikan Pertolongan Pertama',
         icon: Shield,
         description: 'Penanganan cedera dan trauma pasca gempa',
         details: [
           'Periksa korban dari cedera ABC: Airway, Breathing, Circulation',
           'Hentikan pendarahan dengan penekanan dan perban',
           'Imobilisasi patah tulang sebelum memindahkan korban',
           'Jangan pindahkan korban cedera kepala/tulang belakang kecuali darurat',
           'Berikan pertolongan psikologis: tenangkan dan beri rasa aman',
           'Prioritaskan korban dengan cedera parah (triage)',
           'Panggil bantuan medis: 118 (ambulans) atau 119 (damkar)',
           'Catat identitas dan jenis cedera untuk petugas medis',
           'Jaga korban tetap hangat dengan selimut darurat',
           'Berikan air minum jika korban sadar dan tidak cedera perut',
           'Dokumentasi untuk keperluan evakuasi medis'
         ],
         tips: 'Prinsip RICE untuk cedera: Rest (istirahatkan), Ice (kompres dingin), Compression (tekan), Elevation (tinggikan).',
         color: 'from-red-500 to-rose-600'
       },
       {
         title: 'Koordinasi dan Komunikasi',
         icon: Phone,
         description: 'Tetap terhubung dan terkoordinasi pasca gempa',
         details: [
           'Hubungi keluarga untuk mengabarkan kondisi Anda',
           'Gunakan SMS atau pesan teks (lebih hemat baterai dan bandwidth)',
           'Aktifkan "I\'m Safe" di Facebook atau Google Person Finder',
           'Dengarkan radio lokal untuk informasi dan instruksi',
           'Ikuti akun media sosial resmi BMKG, BNPB, BPBD',
           'Jangan sebarkan hoax atau informasi tidak terverifikasi',
           'Hemat baterai ponsel untuk komunikasi darurat',
           'Gunakan aplikasi pesan offline seperti Bridgefy jika jaringan down',
           'Catat lokasi Anda jika meminta bantuan',
           'Koordinasi dengan RT/RW untuk data warga dan kebutuhan bantuan'
         ],
         tips: 'Prioritas komunikasi: 1) Beri tahu keluarga Anda aman, 2) Hubungi bantuan jika perlu, 3) Update status.',
         color: 'from-blue-600 to-indigo-700'
       },
       {
         title: 'Akses Layanan Bantuan',
         icon: Home,
         description: 'Memanfaatkan bantuan pemerintah dan relawan',
         details: [
           'Menuju posko pengungsian terdekat jika rumah tidak aman',
           'Daftarkan diri dan keluarga di posko untuk pendataan',
           'Akses bantuan makanan, air bersih, dan tempat tinggal',
           'Manfaatkan layanan kesehatan gratis di posko medis',
           'Laporkan kerusakan rumah untuk bantuan rehabilitasi',
           'Ajukan bantuan trauma healing dan konseling',
           'Koordinasikan kebutuhan khusus (bayi, lansia, disabilitas)',
           'Ikuti penyuluhan kesehatan dan sanitasi',
           'Terima bantuan logistik dari BNPB, PMI, atau NGO',
           'Dokumentasikan bantuan yang diterima untuk transparansi'
         ],
         tips: 'Jangan ragu meminta bantuan. Ini situasi darurat dan semua orang berhak mendapat dukungan.',
         color: 'from-green-500 to-emerald-600'
       }
   ],

}

