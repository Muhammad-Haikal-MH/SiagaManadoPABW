import { Info, AlertTriangle } from "lucide-react";
import { MitigasiItem } from "@/types/mitigasi";

export default function MitigasiCard({ item }: { item: MitigasiItem }) {
  const Icon = item.icon;

  return (
    <div
      className={`rounded-2xl p-6 text-[#1C398E] dark:bg-[#1E293B] dark:text-[#F1F5F9] shadow-lg bg-[#CFE6FF]`}
    >
      <div className="flex gap-4">
        <div className="bg-white/20 p-3 rounded-xl">
          <Icon size={28} />
        </div>

        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm opacity-90">{item.description}</p>
        </div>
      </div>

      <ul className="mt-4 list-disc pl-5 space-y-2 text-sm">
        {item.details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>

      {item.tips && (
        <div className="mt-4 flex gap-2 bg-blue-300 dark:bg-[#94A3B8] p-3 rounded-xl text-sm">
          <Info size={18} />
          {item.tips}
        </div>
      )}

      {item.warning && (
        <div className="mt-4 flex gap-2 bg-red-700/80 p-3 text-white rounded-xl text-sm">
          <AlertTriangle size={18} />
          {item.warning}
        </div>
      )}
    </div>
  );
}
