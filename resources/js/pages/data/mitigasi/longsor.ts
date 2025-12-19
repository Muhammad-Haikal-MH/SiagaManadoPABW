import { MitigasiData } from '@/types/mitigasi';
import {
  Mountain,
  AlertTriangle,
  Shield,
  Home,
  FileText,
  Users,
  Phone,
  CheckCircle2,
  MapPin,
  TreePine,
  Waves,
  Clock,
  ArrowLeft
} from 'lucide-react';

export const longsor: MitigasiData = {
  slug: "longsor",
  title: "Mitigasi Bencana Tanah Longsor",
  description:
    "Panduan kesiapsiagaan untuk mengurangi risiko dan dampak bencana tanah longsor, terutama di daerah perbukitan dan lereng curam.",

  sebelum: [
    {
      title: "Kenali Wilayah Rawan Longsor",
      icon: MapPin,
      description: "Memahami potensi longsor di lingkungan sekitar",
      details: [
        "Pelajari peta rawan longsor dari BPBD atau BNPB",
        "Perhatikan tanda-tanda tanah retak atau ambles",
        "Waspadai lereng curam di sekitar rumah",
        "Catat riwayat longsor di wilayah tersebut",
        "Kenali jalur evakuasi aman menjauh dari lereng"
      ],
      tips: "Jika rumah berada di lereng curam, konsultasikan dengan BPBD setempat untuk evaluasi risiko."
    },
    {
      title: "Perkuat Struktur Tanah dan Lingkungan",
      icon: TreePine,
      description: "Mengurangi potensi pergerakan tanah",
      details: [
        "Tanam pohon berakar kuat di sekitar lereng",
        "Hindari penebangan pohon sembarangan",
        "Buat terasering pada lahan miring",
        "Pastikan saluran air tidak mengarah ke lereng",
        "Gunakan tembok penahan tanah (talud)"
      ],
      tips: "Akar pohon membantu mengikat tanah dan mengurangi risiko longsor."
    },
    {
      title: "Siapkan Tas Siaga Bencana",
      icon: FileText,
      description: "Perlengkapan darurat untuk evakuasi cepat",
      details: [
        "Dokumen penting dalam map tahan air",
        "Obat-obatan pribadi dan P3K",
        "Air minum dan makanan tahan lama",
        "Senter dan baterai cadangan",
        "Peluit dan power bank",
        "Pakaian ganti secukupnya"
      ],
      tips: "Simpan tas siaga di tempat mudah dijangkau dan diketahui seluruh anggota keluarga."
    },
    {
      title: "Buat Rencana Evakuasi Keluarga",
      icon: Users,
      description: "Strategi penyelamatan yang jelas dan terlatih",
      details: [
        "Tentukan titik kumpul keluarga",
        "Buat jalur evakuasi menjauh dari lereng",
        "Latih simulasi evakuasi secara berkala",
        "Tentukan siapa yang membantu anak & lansia",
        "Simpan nomor darurat di ponsel"
      ],
      tips: "Latihan evakuasi membantu mengurangi panik saat bencana terjadi."
    }
  ],

  saat: [
    {
      title: "Segera Evakuasi ke Tempat Aman",
      icon: Mountain,
      description: "Menjauh dari area berbahaya",
      details: [
        "Segera tinggalkan rumah jika terdengar suara gemuruh",
        "Menjauh dari lereng, tebing, dan alur sungai",
        "Gunakan jalur evakuasi yang telah direncanakan",
        "Bawa tas siaga jika memungkinkan",
        "Jangan kembali untuk mengambil barang"
      ],
      tips: "Keselamatan jiwa jauh lebih penting daripada harta benda.",
      warning: "Longsor dapat terjadi tiba-tiba dan berulang."
    },
    {
      title: "Hindari Area Longsoran",
      icon: AlertTriangle,
      description: "Mengurangi risiko tertimbun material",
      details: [
        "Jangan berdiri di bawah lereng curam",
        "Hindari jalan yang tertutup tanah atau batu",
        "Waspadai longsor susulan",
        "Ikuti instruksi petugas atau relawan",
        "Tetap tenang dan fokus"
      ],
      tips: "Longsor susulan sering terjadi setelah longsor pertama."
    },
    {
      title: "Hubungi Bantuan Darurat",
      icon: Phone,
      description: "Meminta pertolongan secepat mungkin",
      details: [
        "Hubungi 112 untuk darurat nasional",
        "Laporkan lokasi dan kondisi korban",
        "Gunakan GPS jika memungkinkan",
        "Hemat baterai ponsel",
        "Gunakan peluit jika terjebak"
      ],
      tips: "Simpan nomor darurat sebelum musim hujan tiba."
    }
  ],

  setelah: [
    {
      title: "Periksa Keamanan Rumah",
      icon: Home,
      description: "Pastikan bangunan aman sebelum ditempati",
      details: [
        "Periksa retakan besar di dinding dan fondasi",
        "Waspadai pergeseran tanah di sekitar rumah",
        "Jangan masuk jika struktur tidak stabil",
        "Ikuti arahan petugas BPBD",
        "Dokumentasikan kerusakan"
      ],
      tips: "Bangunan yang tampak aman bisa saja berisiko runtuh."
    },
    {
      title: "Bersihkan Area dengan Aman",
      icon: Waves,
      description: "Pembersihan pasca longsor",
      details: [
        "Gunakan sarung tangan dan sepatu pelindung",
        "Hindari menggali area rawan longsor susulan",
        "Bersihkan material secara bertahap",
        "Buang material longsor ke tempat aman",
        "Jaga kebersihan lingkungan"
      ],
      tips: "Jangan bekerja sendirian saat membersihkan area longsor."
    },
    {
      title: "Laporkan dan Ajukan Bantuan",
      icon: FileText,
      description: "Pendataan dan pemulihan pasca bencana",
      details: [
        "Laporkan kerusakan ke RT/RW atau BPBD",
        "Ajukan bantuan logistik atau tempat tinggal sementara",
        "Simpan bukti foto dan video",
        "Ikuti pendataan korban",
        "Manfaatkan bantuan pemerintah"
      ],
      tips: "Dokumentasi yang lengkap mempercepat proses bantuan."
    },
    {
      title: "Evaluasi dan Tingkatkan Kesiapsiagaan",
      icon: CheckCircle2,
      description: "Belajar dari kejadian untuk masa depan",
      details: [
        "Evaluasi jalur evakuasi yang digunakan",
        "Perbaiki drainase dan talud",
        "Pertimbangkan relokasi jika sangat berisiko",
        "Ikuti pelatihan siaga bencana",
        "Edukasi keluarga dan lingkungan sekitar"
      ],
      tips: "Kesiapsiagaan adalah kunci mengurangi dampak bencana di masa depan."
    }
  ]
};
