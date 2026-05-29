import Image from "next/image";
import {ReactNode} from "react";
import {Plus} from "lucide-react";

interface MenuCardProps{
    item:{
        name: string;
        price: number;
        image: string;
        icone?: ReactNode;
    };
}

export const MenuCard = ({item}: MenuCardProps) => {
    return(
        <div className="rounded-2xl overflow-hidden shadow-xl">
            <div className="relative w-full h-48">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>

            <div className="flex items-center justify-between p-4">
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#333333]">{item.name}</h3>
                    <p className="text-gray-600">{item.price} Fcfa</p>
                </div>

                <div className="border border-gray-300 rounded-full p-2 cursor-pointer hover:bg-[#c08b5c] hover:border-[#c08b5c] hover:text-white transition-all duration-200">
                    <Plus size={20} />
                </div>
            </div>
        </div>
    )
}