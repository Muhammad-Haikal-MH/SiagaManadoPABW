import { LucideIcon } from "lucide-react";

export interface MitigasiItem {
  title: string;
  description: string;
  details: string[];
  tips?: string;
  warning?: string;
  icon: LucideIcon;
  color?: string;
}

export interface MitigasiData {
  slug: string;
  title: string;
  description: string;
  sebelum: MitigasiItem[];
  saat: MitigasiItem[];
  setelah: MitigasiItem[];
}

