"use client";

import { ReactNode } from "react";
interface cardMenuProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function CardMenu({ title, icon, description }: cardMenuProps) {
  return (
    <div className="bg-[#c08b5c00] hover:shadow-xl shadow-xl p-10 rounded-2xl border-gray-700 space-y-5">
      <div className="bg-[#c08b5c18] hover:bg-[#c08b5c33] rounded-full w-15 h-15 flex items-center justify-center">
        {icon}
      </div>
      <p className="text-2xl text-[#47311d] font-semibold">{title}</p>
      <div className="w-15 h-1 bg-[#c08b5c] rounded-full mb-4"></div>
      <p className="text-gray-500 dark:text-[#f2f2f2] text-7">{description}</p>
    </div>
  );
}
