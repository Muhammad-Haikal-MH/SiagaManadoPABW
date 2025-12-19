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

interface MenuItem {
  label: string;
  href: string;
  icon: any;
}

interface Props {
  menus: MenuItem[];
}

export default function AdminSidebar({ menus }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { post } = useForm();
  const { props, url } = usePage<any>();

  const user = props.auth?.user;

  const handleLogout = () => post("/logout");

  const isActive = (href: string) =>
    url.startsWith(href)
      ? "bg-[#CFE6FF] text-[#1C398E] rounded-xl"
      : "text-[#1C398E] hover:bg-blue-300 rounded-xl";

  return (
    <aside
      className={`${sidebarOpen ? "w-64" : "w-20"} border-r border-[#CFE6FF] transition-all duration-300 flex flex-col`}
    >
      {/* HEADER */}
      <div className="p-4 border-b border-[#CFE6FF] flex items-center justify-between">
        {sidebarOpen && (
          <h1 className="text-xl font-bold text-[#1C398E]">Admin Panel</h1>
        )}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-[#CFE6FF] text-[#1C398E] rounded-xl"
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
        <div className="p-4 border-t border-[#CFE6FF]">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                    "w-full flex items-center gap-3 hover:bg-[#CFE6FF] py-6 cursor-pointer rounded-xl",
                    sidebarOpen ? "justify-start" : "justify-center"
                    )}
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-[#1C398E] text-white font-bold">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                {sidebarOpen && (
                  <span className="text-[#1C398E] font-medium">
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
        </div>
      )}
    </aside>
  );
}
