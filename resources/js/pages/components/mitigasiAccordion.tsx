import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { MitigasiItem } from "@/types/mitigasi";
import MitigasiCard from "./mitigasiCard";

export default function MitigasiAccordion({
  title,
  data
}: {
  title: string;
  data: MitigasiItem[];
}) {
  return (
    <Accordion type="single" collapsible className="mb-10">
      <AccordionItem value={title}>
        <AccordionTrigger className="text-xl font-semibold text-[#1C398E]">
          {title}
        </AccordionTrigger>

        <AccordionContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {data.map((item, i) => (
              <MitigasiCard key={i} item={item} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
