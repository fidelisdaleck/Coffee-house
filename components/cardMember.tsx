"use client";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
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
    <div className="shadow-xl py-10 px-5 rounded-lg">
      <div className="flex items-center gap-2">
        <Image
          src={image}
          alt={name}
          fill
          className="w-16 h-16 rounded-full object-cover border border-gray-300"
        />
      </div>
      <div>
        <h3 className="font-semibold text-[#111827] text-xl">{name}</h3>
        <div className="flex items-center gap-1">
          <Star className="w-5 h-5 text-yellow-500 fill-current" />
          <Star className="w-5 h-5 text-yellow-500 fill-current" />
          <Star className="w-5 h-5 text-yellow-500 fill-current" />
          <Star className="w-5 h-5 text-yellow-500 fill-current" />
          <Star className="w-5 h-5 text-yellow-500 fill-current" />
        </div>
      </div>

      <div>
        <p className="text-gray-600 mt-2 text-italic">{description}</p>
        <Quote size={30} className="mt-4 text-[#111827]" />
      </div>
    </div>
  );
}
