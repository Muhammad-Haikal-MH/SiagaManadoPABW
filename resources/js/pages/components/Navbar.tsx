import { useEffect, useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { login, register, logout } from "@/routes";
import {
  IoMenu,
  IoClose,
  IoPersonOutline,
  IoLogOutOutline,
  IoMoonOutline, IoSunnyOutline, IoDesktopOutline
} from "react-icons/io5";



import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { menus } from "../items/menuNavbar";
import { useAppearance } from "@/hooks/use-appearance";

interface Props {
    auth: {
        user: any | null;
    };
}

export default function Navbar({ auth }: Props) {
const { appearance, updateAppearance } = useAppearance();
  const user = auth.user;
  const { post } = useForm();
  const { url } = usePage();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLogout = () => post(logout().url);

  // ACTIVE MENU
  const isActive = (path: string) => {
    if (path === "/") {
        return url === "/"
        ? "text-[#1C398E] dark:text-[#F1F5F9]  font-semibold border-[#1C398E]"
        : "text-[#1C398E] dark:text-[#F1F5F9] dark:hover:text-[#3B82F6] hover:text-blue-300";
    }

    return url.startsWith(path)
        ? "text-[#1C398E] dark:text-[#F1F5F9] font-semibold border-[#1C398E]"
        : "text-[#1C398E] dark:text-[#F1F5F9] dark:hover:text-[#3B82F6] hover:text-blue-300";
    };

  // SCROLL BLUR EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "backdrop-blur-md bg-white/50 dark:bg-white/10 " : "bg-transparent"}
      `}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* LOGO */}
          <img
            src="/images/SiagamanadoDark.png"
            alt="Siaga Manado"
            className="w-44 dark:hidden"
          />

          <img
            src="/images/SiagamanadoLight.png"
            alt="Siaga Manado"
            className="w-44 hidden dark:block"
          />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                className={isActive(`${menu.href}`)}
              >
                {menu.name}
              </Link>
            ))}

            <button
                onClick={() =>
                    updateAppearance(
                    appearance === 'dark' ? 'light' : 'dark'
                    )
                }
                className="p-2 rounded-xl transition
                    text-[#1C398E]
                    hover:bg-blue-100
                    dark:text-[#F1F5F9]
                    dark:hover:bg-gray-700 cursor-pointer"
                >
                {appearance === 'dark' ? (
                    <IoSunnyOutline size={22} />
                ) : (
                    <IoMoonOutline size={22} />
                )}
            </button>

            {!user ? (
              <>
                <Link
                  href={login()}
                  className="border px-4 py-1 rounded-2xl text-[#1C398E] hover:bg-[#1C398E] hover:text-white dark:text-[#F1F5F9] dark:hover:bg-[#3B82F6]"
                >
                  Login
                </Link>
                <Link
                  href={register()}
                  className="bg-[#1C398E] text-white px-4 py-1 rounded-2xl dark:bg-[#0A84FF] dark:hover:bg-[#1E293B]"
                >
                  Register
                </Link>
              </>
            ) : (
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    className="h-10 w-10 rounded-full p-0 cursor-pointer"
                  >
                    <Avatar>
                      <AvatarFallback className="bg-[#1C398E] text-white font-bold">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-40 rounded-xl bg-white/20 backdrop-blur-md">
                  <DropdownMenuItem asChild>
                    <Link
                      href="settings/profile"
                      className="flex text-[#1C398E] dark:hover:text-[#94A3B8] dark:text-[#F1F5F9] justify-between items-center w-full cursor-pointer"
                    >
                      Profile <IoPersonOutline />
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-red-600 dark:hover:text-[#94A3B8] flex justify-between cursor-pointer"
                  >
                    Logout <IoLogOutOutline />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* BURGER BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl text-[#1C398E] dark:text-[#F1F5F9] cursor-pointer"
          >
            <IoMenu />
          </button>
        </div>
      </nav>

      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
        onClick={() => setOpen(false)}
      />

      {/* SIDEBAR MOBILE */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white/70 dark:bg-gray-900/50 backdrop-blur-md z-50 p-6 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex justify-between items-center mb-6">
          <span className="font-semibold text-lg">Menu</span>
          <div className="flex gap-2 items-center">
            <button
                onClick={() =>
                    updateAppearance(
                    appearance === 'dark' ? 'light' : 'dark'
                    )
                }
                className="p-2 rounded-xl transition
                    text-[#1C398E]
                    hover:bg-blue-100
                    dark:text-[#F1F5F9]
                    dark:hover:bg-gray-700 cursor-pointer"
                >
                {appearance === 'dark' ? (
                    <IoSunnyOutline size={22} />
                ) : (
                    <IoMoonOutline size={22} />
                )}
            </button>
            <button onClick={() => setOpen(false)} className="text-2xl">
                <IoClose />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              className={isActive(`${menu.href}`)}
              onClick={() => setOpen(false)}
            >
              {menu.name}
            </Link>
          ))}

          {!user ? (
            <>
              <Link href={login()} className="bg-[#1C398E] text-white text-center py-2 rounded-xl">
                Login
              </Link>
              <Link
                href={register()}
                className="bg-[#1C398E] text-white text-center py-2 rounded-xl"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link href="/settings/profile" className="flex justify-between ">
                Profile <IoPersonOutline />
              </Link>
              <button
                onClick={handleLogout}
                className="flex justify-between bg-red-500 hover:bg-red-600 px-4 py-2 cursor-pointer rounded-xl text-white items-center"
              >
                Logout <IoLogOutOutline />
              </button>
            </>
          )}
        </div>
      </aside>

      {/* SPACER */}
      <div className="h-20" />
    </>
  );
}
