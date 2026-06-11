"use client";

import { useState } from "react";
import {ArrowRight} from "lucide-react";
import Link from "next/link";
import { menuItems } from "@/app/data/menu";
import { CategoryList } from "./categoryList";
import { MenuGrid } from "./menuGrid";

export const MenuSection = () => {
  // catégorie active
  const [activeCategory, setActiveCategory] = useState("incontournable");

  // filtre dynamique
  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="flex md:flex-row flex-col gap-10">
      {/* LEFT */}
      <div className="w-62">
        <div className="mb-10">
          <h2 className="text-4xl mb-2 font-bold text-[#111827]">Notre menu</h2>
          <div className="w-20 h-1 bg-[#c08b5c] rounded-full mb-4"></div>
        </div>
        <CategoryList
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-2">
        <Link href="/menu" className="flex flex-row items-center self-end">
          <button className=" text-[#444444] px-5 py-3 border border-[#c08b5c] rounded-lg cursor-pointer hover:bg-[#753904] hover:text-white transition-all duration-300">
            Voir tout le menu
            {/* <ArrowRight size={20} className=""/> */}
          </button>
        </Link>
        <MenuGrid items={filteredItems} />
      </div>
    </section>
  );
};
