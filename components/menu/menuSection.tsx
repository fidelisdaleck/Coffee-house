"use client";

import { useState } from "react";

import { menuItems } from "@/app/data/menu";

import { CategoryList } from "./categoryList";
import {MenuGrid} from "./menuGrid";

export const MenuSection = () => {

  // catégorie active
  const [activeCategory, setActiveCategory] =
    useState("incontournable");

  // filtre dynamique
  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter(
          (item) =>
            item.category === activeCategory
        );

  return (
    <section className="flex gap-10">

      {/* LEFT */}
      <div className="w-62">

        <div className="mb-10">
            <h2 className="text-4xl mb-2 font-bold text-[#111827]">
            Notre menu
            </h2>
            <div className="w-20 h-1 bg-[#c08b5c] rounded-full mb-4"></div>
        </div>
        <CategoryList
          activeCategory={activeCategory}
          setActiveCategory={
            setActiveCategory
          }
        />

      </div>

      {/* RIGHT */}
      <div className="flex-1">

        <MenuGrid items={filteredItems} />

      </div>

    </section>
  );
};