"use client";

import { useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Menu, X, User, LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useAppearance } from "@/hooks/use-appearance";

interface MenuItem {
  label: string;
  href: string;
  icon: any;
}

interface Props {
  menus: MenuItem[];
  onToggle?: (open: boolean) => void;
}

export default function AdminSidebar({ menus, onToggle }: Props) {
    const { appearance, updateAppearance } = useAppearance();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { post } = useForm();
  const { props, url } = usePage<any>();

  const user = props.auth?.user;

  const handleLogout = () => post("/logout");

  const isActive = (href: string) =>
    url.startsWith(href)
      ? "bg-[#CFE6FF] text-[#1C398E] dark:text-[#1C398E] rounded-xl"
      : "text-[#1C398E] hover:bg-blue-300 rounded-xl dark:text-[#F1F5F9] dark:hover:bg-white/10";

  return (
    <aside
        className={cn(
    "fixed top-0 left-0 z-40 h-screen",
    "bg-white dark:bg-[#0F172A]",
    "border-r border-[#CFE6FF] dark:border-none",
    "transition-all duration-300 flex flex-col",
    sidebarOpen ? "w-64" : "w-20"
  )}
    >
      {/* HEADER */}
      <div className="p-4 border-b border-[#CFE6FF] dark:border-[#1C398E] flex items-center justify-between">
        {sidebarOpen && (
            <h1 className="text-xl font-bold text-[#1C398E] dark:text-[#F1F5F9]">Admin Panel</h1>
        )}
        <button
            onClick={() => {
                setSidebarOpen(!sidebarOpen);
                onToggle?.(!sidebarOpen);
            }}
            className="p-2 hover:bg-[#CFE6FF] text-[#1C398E] dark:text-[#F1F5F9] dark:hover:text-[#1C398E] rounded-xl"
        >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MENU */}
      <nav className="flex-1 p-4">
        {menus.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`w-full flex items-center gap-3 p-3 mb-2 ${isActive(
              item.href
            )}`}
          >
            <item.icon size={20} />
            {sidebarOpen && <span className="font-medium">{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* PROFILE */}
      {user && (
        <div className="p-4 border-t border-[#CFE6FF] dark:border-[#1C398E] flex items-center justify-between gap-2">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                    "w-full flex items-center gap-3 hover:bg-[#CFE6FF] dark:hover:bg-white/10 py-6 cursor-pointer rounded-xl",
                    sidebarOpen ? "justify-start" : "justify-center"
                    )}
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-[#1C398E]  text-white font-bold">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                {sidebarOpen && (
                  <span className="text-[#1C398E] dark:text-[#F1F5F9] font-medium">
                    {user.name}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-48 rounded-xl">
              <DropdownMenuItem asChild>
                <Link
                  href="/settings/profile"
                  className="flex justify-between items-center w-full cursor-pointer"
                >
                  Profile <User size={16} />
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={handleLogout}
                className="text-red-600 flex justify-between cursor-pointer"
              >
                Logout <LogOut size={16} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

            <button
                    onClick={() =>
                        updateAppearance(
                            appearance === 'dark' ? 'light' : 'dark'
                        )}
                    className={cn("p-2 rounded-xl transition text-[#1C398E] hover:bg-blue-100 dark:text-[#CFE6FF] dark:hover:text-[#1C398E] cursor-pointer flex items-center justify-center",
                        sidebarOpen ? "justify-center" : "hidden"
                    )}

                >
                            {appearance === 'dark' ? (
                                <IoSunnyOutline size={22} />
                            ) : (
                        <IoMoonOutline size={22} />
                    )}
            </button>
        </div>
      )}
    </aside>
  );
}
