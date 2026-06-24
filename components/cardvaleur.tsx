"use client";

import { ReactNode } from "react";
interface cardValeurProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function CardValeur({ title, icon, description }: cardValeurProps) {
  return (
    <div className="bg-[#c08b5c00]  shadow-xl p-10 rounded-2xl border-gray-700 space-y-5 flex flex-col items-center justify-center text-center">
      <div className="">
        {icon}
      </div>
      <p className="text-2xl text-[#47311d] font-semibold">{title}</p>
      <p className="text-gray-500 dark:text-[#f2f2f2] text-7">{description}</p>
    </div>
  );
}
