import { MenuCard } from "@/components/menu/menuCard";

interface MenuGridProps {
  items: {
    id: number;
    name: string;
    price: number;
    image: string;
  }[];
}

export const MenuGrid = ({ items }: MenuGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {items.map((item) => (
        <MenuCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};