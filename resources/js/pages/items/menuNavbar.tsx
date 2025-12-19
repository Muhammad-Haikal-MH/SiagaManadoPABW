import { berita, homepage } from "@/routes";

interface Menu {
  name: string;
  href: string;
}

export const menus: Menu[] = [
  { name: "Beranda", href: '/homepage'  },
  { name: "Berita", href: '/berita' },
  { name: "Mitigasi", href: "/mitigasi" },
  { name: "Kontak", href: "/#kontak" },
];
