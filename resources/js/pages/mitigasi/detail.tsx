import { ArrowLeft } from "lucide-react";
import { Link } from "@inertiajs/react";
import MitigasiAccordion from "@/pages/components/mitigasiAccordion";
import { mitigasiList } from "@/pages/mitigasi/mitigasi.constant";
import { mitigasiMap } from "../data/mitigasi";

export default function MitigasiDetail({ slug }: { slug: string }) {
  const data = mitigasiMap[slug];

  if (!data) {
    return <div className="p-10">Data mitigasi tidak ditemukan</div>;
  }

  return (
    <div className="px-6 md:px-14 py-10 max-w-7xl mx-auto">
      <Link
        href="/mitigasi"
        className="flex items-center gap-2 text-[#1C398E] mb-6"
      >
        <ArrowLeft size={18} />
        Kembali
      </Link>

      <h1 className="text-3xl font-bold text-[#1C398E] mb-2">
        {data.title}
      </h1>

      <p className="text-[#1C398E]/80 mb-10">
        {data.description}
      </p>
    
      <MitigasiAccordion title="Sebelum Bencana" data={data.sebelum} />
      <MitigasiAccordion title="Saat Bencana" data={data.saat} />
      <MitigasiAccordion title="Setelah Bencana" data={data.setelah} />
    </div>
  );
}
