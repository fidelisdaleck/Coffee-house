import Image from "next/image";
import { ReactNode } from "react";
import { Plus } from "lucide-react";

interface MenuItemProps {
  name: string;
  price: number;
  image: string;
  icone?: ReactNode;
}

export const MenuItem = ({ name, price, image }: MenuItemProps) => {
  return (
    <div className="rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="relative w-full h-50 overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="flex items-center justify-between p-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[#333333]">{name}</h3>
          <p className="text-gray-600">{price} Fcfa</p>
        </div>

        <div className="border border-gray-300 rounded-full p-2 cursor-pointer hover:bg-[#c08b5c] hover:border-[#c08b5c] hover:text-white transition-all duration-200">
          <Plus size={20} />
        </div>
      </div>
    </div>
  );
};
