"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { X, Menu, ShoppingCart, User } from "lucide-react";

export default function Header() {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  // const { setTheme, resolvedTheme } = useTheme();
  const navLinkClass = (path: string) =>
    `text-lg font-medium px-4 py-2 rounded-xl transition-all duration-300
  ${
    pathname === path
      ? "bg-[#c08b5c20] text-[#c08b5c]"
      : "text-[#333333] hover:bg-[#c08b5c15] hover:text-[#c08b5c] dark:text-gray-300 dark:hover:bg-[#c08b5c20] dark:hover:text-[#c08b5c]"
  }`;

  return (
    <header className="flex items-center justify-between px-2 md:px-10 py-3 shadow-lg sticky top-0 w-full bg-white z-50 dark:bg-[#000000]">
      {/* logo */}
      <div className="flex gap-2">
        <Image src="/icon.png" alt="CoffeeHouse Logo" width={30} height={30} />
        <Link href="/">
          <h1 className="text-xl text-[#c08b5c]">CoffeeHouse</h1>
        </Link>
      </div>
      {/* Menu desktop */}
      <nav className="hidden md:flex gap-10">
        <Link href="/" className={navLinkClass("/")}>
          Acceuil
        </Link>
        <Link href="/menu" className={navLinkClass("/menu")}>
          Menu
        </Link>
        <Link href="/about" className={navLinkClass("/about")}>
          A propos
        </Link>
        <Link href="/contact" className={navLinkClass("/contact")}>
          Contact
        </Link>
      </nav>

      {/* CTA */}
      <div className="flex items-center gap-2 md:gap-4">
        <div className=" md:block">
          <Link href="../panier">
            <button className="bg-[#c08b5c30] rounded-full px-2 py-2 hover:bg-[#c08b5c50]">
              <ShoppingCart size={20} className="text-[#c08b5c]" />
            </button>
          </Link>
        </div>
        <div className="md:block">
          <Link href="../profil">
            <button className="bg-[#c08b5c30] rounded-full px-2 py-2 hover:bg-[#c08b5c50]">
              <User size={20} className="text-[#c08b5c]" />
            </button>
          </Link>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!IsMenuOpen)}
        >
          {IsMenuOpen ? (
            <X className="w-6 h-6 text-[#111827] dark:text-gray-200" />
          ) : (
            <Menu className="w-6 h-6 text-[#111827] dark:text-gray-200" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {IsMenuOpen && (
        <div className="absolute top-full left-0 w-full px-3 py-5 bg-white shadow-md md:hidden dark:bg-[#000000]">
          <nav className="flex flex-col gap-2 ">
            <Link href="/" className={navLinkClass("/")}>
              Acceuil
            </Link>
            <Link href="/menu" className={navLinkClass("/menu")}>
              Menu
            </Link>
            <Link href="/about" className={navLinkClass("/about")}>
              A propos
            </Link>
            <Link href="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
