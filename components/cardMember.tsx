"use client";

import Image from "next/image";

interface CardMemberProps {
  name: string;
  description: string;
  image: string;
}

export default function CardMember({
  name,
  description,
  image,
}: CardMemberProps) {
  return (
    <div className="shadow-xl rounded-xl p-5 bg-white">
      <div className="flex items-center gap-4">
        <div className="relative w-15 h-15">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover border border-gray-300"
          />
        </div>

        <h3 className="font-semibold text-[#111827] text-xl">{name}</h3>
      </div>

      <p className="text-gray-600 mt-4 italic">{description}</p>
    </div>
  );
}
