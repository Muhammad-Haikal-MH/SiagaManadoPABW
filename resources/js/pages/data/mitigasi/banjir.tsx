import { MitigasiData } from '@/types/mitigasi';
import {
  Droplets,
  AlertTriangle,
  Shield,
  Home,
  FileText,
  Users,
  Zap,
  Mountain,
  Phone,
  CheckCircle2,
  Info,
  Clock,
  MapPin,
  Waves,
  ArrowLeft
} from 'lucide-react';

export const banjir: MitigasiData = {
    slug:"banjir",
    title: "Mitigasi Bencana Banjir",
    description: "Langkah-langkah penting untuk mengurangi risiko dan dampak bencana banjir.",
    sebelum : [
    {
      title: 'Kenali Daerah Rawan Banjir',
      icon: MapPin,
      description: 'Memahami lokasi dan tingkat risiko banjir di area tempat tinggal Anda',
      details: [
        'Pelajari peta rawan banjir dari BPBD setempat atau BNPB',
        'Ketahui sejarah banjir di area Anda dalam 5-10 tahun terakhir',
        'Identifikasi jalur evakuasi terdekat dan lokasi pengungsian',
        'Catat ketinggian air maksimal pada banjir sebelumnya',
        'Pahami sistem peringatan dini banjir di wilayah Anda'
      ],
      tips: 'Simpan peta jalur evakuasi di tempat yang mudah diakses dan pastikan semua anggota keluarga memahaminya.',
    //   color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Siapkan Tas Siaga Bencana',
      icon: FileText,
      description: 'Tas darurat berisi kebutuhan penting untuk bertahan 72 jam',
      details: [
        'Dokumen penting (KTP, KK, sertifikat, polis asuransi) dalam wadah kedap air',
        'Obat-obatan rutin, kotak P3K lengkap, dan masker',
        'Air minum kemasan minimal 3 liter per orang',
        'Makanan kaleng, biskuit, dan makanan tahan lama',
        'Pakaian ganti, handuk, dan selimut darurat',
        'Senter LED dengan baterai cadangan',
        'Radio portable dan power bank terisi penuh',
        'Uang tunai dalam pecahan kecil',
        'Peluit, pisau lipat, dan tali',
        'Perlengkapan kebersihan pribadi'
      ],
      tips: 'Periksa dan perbarui isi tas siaga setiap 6 bulan sekali. Pastikan makanan belum kedaluwarsa dan baterai masih berfungsi.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Pasang Sistem Drainase yang Baik',
      icon: Droplets,
      description: 'Memastikan air hujan dapat mengalir lancar dari area rumah',
      details: [
        'Bersihkan saluran air dan got secara rutin dari sampah dan lumpur',
        'Pasang pompa air otomatis jika rumah di area rendah',
        'Buat sumur resapan untuk mengurangi genangan',
        'Periksa kemiringan halaman agar air tidak menggenang',
        'Pasang teralis di saluran pembuangan untuk mencegah penyumbatan sampah',
        'Tingkatkan lantai rumah jika perlu, minimal 30-50 cm dari jalan',
        'Buat tanggul atau pembatas air di pintu masuk'
      ],
      tips: 'Koordinasikan dengan tetangga untuk membersihkan drainase lingkungan secara berkala, terutama menjelang musim hujan.',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Buat Rencana Evakuasi Keluarga',
      icon: Users,
      description: 'Strategi evakuasi yang jelas dan dipahami semua anggota keluarga',
      details: [
        'Tentukan titik kumpul keluarga jika terpisah saat evakuasi',
        'Tetapkan rute evakuasi utama dan alternatif',
        'Buat daftar kontak darurat keluarga dan tetangga',
        'Latih simulasi evakuasi bersama keluarga minimal 2x setahun',
        'Tentukan siapa yang bertanggung jawab membawa tas siaga',
        'Siapkan rencana khusus untuk anggota keluarga lanjut usia, bayi, atau disabilitas',
        'Ketahui lokasi shelter/pengungsian terdekat',
        'Buat kesepakatan komunikasi jika jaringan telepon terputus'
      ],
      tips: 'Libatkan anak-anak dalam perencanaan agar mereka tidak panik saat bencana terjadi. Gunakan gambar atau diagram sederhana.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Asuransikan Properti Anda',
      icon: Shield,
      description: 'Perlindungan finansial untuk kerugian akibat banjir',
      details: [
        'Pilih asuransi yang mencakup risiko banjir secara spesifik',
        'Pahami detil cakupan, nilai pertanggungan, dan pengecualian',
        'Dokumentasikan aset berharga dengan foto dan video',
        'Simpan bukti kepemilikan dan nota pembelian barang penting',
        'Perbarui polis asuransi secara berkala sesuai nilai aset',
        'Catat nomor kontak klaim darurat perusahaan asuransi'
      ],
      tips: 'Foto seluruh isi rumah dan kondisi bangunan secara berkala sebagai bukti untuk klaim asuransi.',
      color: 'from-amber-500 to-orange-600'
    }
    ],

    saat: [
    {
      title: 'Matikan Listrik dan Gas',
      icon: Zap,
      description: 'Langkah krusial untuk mencegah kebakaran dan korsleting listrik',
      details: [
        'Matikan MCB/sekring utama di panel listrik rumah',
        'Cabut semua colokan peralatan elektronik dari stop kontak',
        'Tutup katup gas utama jika menggunakan gas LPG atau pipa',
        'Jangan menyalakan api atau alat elektronik saat air sudah masuk',
        'Gunakan senter, bukan lilin untuk penerangan',
        'Angkat barang elektronik ke tempat tinggi jika memungkinkan',
        'Matikan pompa air dan sistem kelistrikan otomatis'
      ],
      tips: 'PENTING: Jangan menyentuh saklar atau kabel listrik dengan tangan basah atau saat berdiri di genangan air!',
      warning: 'Risiko tersengat listrik sangat tinggi saat banjir. Keselamatan jiwa lebih penting dari barang elektronik.',
      color: 'from-yellow-500 to-amber-600'
    },
    {
      title: 'Pindah ke Tempat yang Lebih Tinggi',
      icon: Mountain,
      description: 'Evakuasi diri dan keluarga ke lokasi aman',
      details: [
        'Segera naik ke lantai 2 atau 3 jika air mulai memasuki rumah',
        'Bawa tas siaga bencana dan dokumen penting',
        'Jika tidak ada lantai atas, naik ke atap rumah',
        'Gunakan tangga yang kokoh, hindari tangga yang licin',
        'Pastikan semua anggota keluarga berada di tempat aman',
        'Jangan mencoba menyelamatkan barang berharga jika air sudah tinggi',
        'Bergeraklah cepat tapi tetap hati-hati',
        'Jika harus keluar rumah, berjalanlah dengan tongkat untuk mengecek kedalaman'
      ],
      tips: 'Prioritas utama adalah keselamatan jiwa. Barang dapat diganti, nyawa tidak.',
      color: 'from-red-500 to-rose-600'
    },
    {
      title: 'Hindari Arus Air yang Deras',
      icon: Waves,
      description: 'Waspadai bahaya arus air yang dapat menyeret',
      details: [
        'JANGAN mencoba berjalan menembus arus air setinggi lutut atau lebih',
        'Air setinggi 15 cm dengan arus deras sudah bisa menjatuhkan orang dewasa',
        'Air setinggi 60 cm dapat menghanyutkan mobil',
        'Jika terjebak di dalam mobil yang terendam, segera keluar dari jendela',
        'Hindari melewati jembatan saat air sudah melewati batas',
        'Waspadai lubang, selokan terbuka, atau manhole yang terbuka',
        'Gunakan tali atau berpegangan pada benda kokoh saat harus melewati air',
        'Jangan berenang di air banjir yang penuh kontaminan'
      ],
      tips: 'Rumus 6 inci: 6 inci air mengalir = kendaraan kehilangan traksi. Jangan nekat melewati banjir dengan kendaraan.',
      warning: 'Air banjir mengandung kotoran, bakteri, dan benda tajam. Hindari kontak langsung sebisa mungkin.',
      color: 'from-cyan-600 to-blue-700'
    },
    {
      title: 'Hubungi Bantuan Darurat',
      icon: Phone,
      description: 'Komunikasi dengan pihak berwenang dan keluarga',
      details: [
        'Hubungi 112 (nomor darurat nasional) atau 117 (BNPB)',
        'Hubungi 115 untuk SAR (Search and Rescue) Basarnas',
        'Informasikan lokasi, jumlah orang, dan kondisi darurat Anda',
        'Gunakan aplikasi pesan atau media sosial jika jaringan telepon sibuk',
        'Kirim lokasi GPS kepada tim penyelamat',
        'Beritahu keluarga atau teman tentang kondisi Anda',
        'Gunakan peluit atau tanda visual jika terjebak dan tidak ada sinyal',
        'Tetap di lokasi aman sambil menunggu bantuan datang'
      ],
      tips: 'Hemat baterai ponsel. Matikan data seluler dan aplikasi yang tidak perlu. Nyalakan hanya untuk komunikasi darurat.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Tetap Tenang dan Waspada',
      icon: AlertTriangle,
      description: 'Menjaga kondisi mental dan fisik dalam situasi darurat',
      details: [
        'Tarik napas dalam-dalam untuk menenangkan diri',
        'Fokus pada keselamatan, bukan barang berharga',
        'Dengarkan instruksi dari petugas atau relawan',
        'Pantau terus informasi dari radio atau media sosial',
        'Waspadai gelombang susulan atau naiknya permukaan air',
        'Jangan panik dan jangan membuat keputusan terburu-buru',
        'Bantu orang lain jika kondisi Anda sudah aman',
        'Tetap bersama keluarga dan jangan terpisah'
      ],
      tips: 'Anak-anak dan lansia cenderung lebih panik. Berikan perhatian ekstra dan jaga mereka tetap tenang.',
      color: 'from-orange-500 to-red-600'
    }
    ],

    setelah: [
    {
      title: 'Periksa Kondisi Bangunan',
      icon: Home,
      description: 'Evaluasi keamanan struktural sebelum memasuki rumah',
      details: [
        'JANGAN masuk rumah jika ada kerusakan struktural parah',
        'Periksa retakan besar di dinding, pilar, atau fondasi',
        'Waspadai atap yang ambrol atau langit-langit yang kendur',
        'Perhatikan bau gas atau tanda kebocoran pipa',
        'Cek apakah lantai masih stabil dan tidak miring',
        'Pastikan tangga aman untuk dilewati',
        'Tunggu izin dari petugas BPBD jika ada keraguan',
        'Ambil foto kerusakan untuk dokumentasi klaim'
      ],
      tips: 'Jika ragu dengan keamanan bangunan, lebih baik tetap di pengungsian dan minta tim ahli untuk menilai.',
      warning: 'Bangunan yang terlihat kokoh dari luar bisa saja memiliki kerusakan struktural tersembunyi.',
      color: 'from-slate-600 to-gray-700'
    },
    {
      title: 'Bersihkan dan Sterilkan Rumah',
      icon: Droplets,
      description: 'Proses pembersihan menyeluruh untuk mencegah penyakit',
      details: [
        'Gunakan sarung tangan karet tebal dan sepatu boot saat membersihkan',
        'Buang semua makanan yang terendam air banjir',
        'Keringkan rumah dengan membuka semua pintu dan jendela',
        'Gunakan pompa atau ember untuk menyedot air yang tersisa',
        'Bersihkan lumpur dengan air bersih dan sikat',
        'Semprot disinfektan di semua permukaan yang terendam',
        'Cuci bersih semua pakaian, seprai, dan kain dengan air panas',
        'Buang karpet, kasur, atau sofa yang terendam air kotor',
        'Keringkan dinding dan lantai sepenuhnya (3-7 hari)',
        'Gunakan kipas angin atau dehumidifier untuk mempercepat pengeringan'
      ],
      tips: 'Campur 1 gelas pemutih dengan 5 liter air untuk membuat larutan disinfektan sederhana.',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      title: 'Waspadai Risiko Penyakit',
      icon: AlertTriangle,
      description: 'Pencegahan penyakit pasca banjir',
      details: [
        'HINDARI kontak langsung dengan air banjir yang tercemar',
        'Cuci tangan dengan sabun dan air bersih sesering mungkin',
        'Jangan makan atau minum menggunakan peralatan yang terendam',
        'Rebus air minum minimal 10 menit atau gunakan air kemasan',
        'Waspadai gejala diare, demam, leptospirosis, atau infeksi kulit',
        'Segera ke puskesmas jika ada luka yang terpapar air banjir',
        'Gunakan masker saat membersihkan rumah dari lumpur',
        'Vaksinasi tetanus jika diperlukan',
        'Basmi nyamuk untuk mencegah DBD dan malaria',
        'Jaga kebersihan lingkungan untuk mencegah penyakit menular'
      ],
      tips: 'Gejala leptospirosis: demam tinggi, sakit kepala, nyeri otot, mata merah. Segera ke dokter jika mengalami gejala ini!',
      warning: 'Air banjir mengandung bakteri, virus, dan bahan kimia berbahaya. Selalu gunakan pelindung saat kontak.',
      color: 'from-red-600 to-rose-700'
    },
    {
      title: 'Dokumentasi untuk Klaim Asuransi',
      icon: FileText,
      description: 'Mencatat kerugian untuk proses klaim',
      details: [
        'Foto dan video semua kerusakan dari berbagai sudut',
        'Catat daftar barang yang rusak dengan perkiraan harga',
        'Kumpulkan nota pembelian atau bukti kepemilikan jika ada',
        'Jangan membuang barang rusak sebelum adjuster menilai',
        'Hubungi perusahaan asuransi dalam 3x24 jam',
        'Isi formulir klaim dengan lengkap dan akurat',
        'Simpan semua komunikasi dengan pihak asuransi',
        'Minta salinan laporan dari BPBD tentang kejadian banjir',
        'Catat biaya tambahan (hotel, transportasi) selama mengungsi'
      ],
      tips: 'Buat spreadsheet daftar kerugian dengan 3 kolom: nama barang, kondisi kerusakan, dan estimasi nilai.',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Pulihkan Sistem Utilitas',
      icon: Zap,
      description: 'Menghidupkan kembali listrik, air, dan gas dengan aman',
      details: [
        'JANGAN langsung menyalakan listrik sebelum instalasi diperiksa',
        'Panggil teknisi berlisensi untuk memeriksa sistem kelistrikan',
        'Pastikan tidak ada kabel terkelupas atau korsleting',
        'Keringkan semua stop kontak dan saklar sepenuhnya',
        'Cek panel MCB dan ganti yang rusak',
        'Test pompa air dan sistem perpipaan dari kebocoran',
        'Periksa water heater, AC, dan peralatan besar lainnya',
        'Cek meteran listrik, air, dan gas dari kerusakan',
        'Hidupkan MCB secara bertahap, satu per satu',
        'Monitor selama 24 jam pertama untuk memastikan aman'
      ],
      tips: 'Jangan coba-coba memperbaiki instalasi listrik sendiri. Gunakan jasa teknisi profesional untuk keamanan.',
      warning: 'Listrik + air = bahaya mematikan. Pastikan SEMUA sudah kering sebelum menyalakan listrik.',
      color: 'from-yellow-600 to-orange-600'
    },
    {
      title: 'Evaluasi dan Tingkatkan Kesiapsiagaan',
      icon: CheckCircle2,
      description: 'Pembelajaran dari pengalaman untuk persiapan lebih baik',
      details: [
        'Catat apa yang berhasil dan tidak berhasil dalam evakuasi',
        'Evaluasi efektivitas tas siaga dan jalur evakuasi',
        'Perbaiki sistem drainase yang terbukti lemah',
        'Pertimbangkan meninggikan rumah atau membuat tanggul permanen',
        'Perbarui rencana evakuasi berdasarkan pengalaman',
        'Ikuti pelatihan tanggap bencana dari BPBD',
        'Bergabung dengan komunitas siaga bencana di lingkungan',
        'Bantu tetangga yang lebih rentan dalam persiapan',
        'Simpan pembelajaran dalam catatan keluarga'
      ],
      tips: 'Adakan pertemuan keluarga untuk membahas pengalaman dan membuat rencana yang lebih baik untuk masa depan.',
      color: 'from-green-600 to-emerald-700'
    }
    ]
}



