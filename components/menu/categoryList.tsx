import { categories } from "@/app/data/menu";
import {CategoryButton} from "./categoryButton";

interface CategoryListProps {
    activeCategory: string;

    setActiveCategory: (
        value: string
    ) => void;
}

export const  CategoryList = ({
    activeCategory,
    setActiveCategory,
}: CategoryListProps) => {
    return (
        <div className="flex flex-col gap-3">
            {categories.map((category) => (
                <CategoryButton 
                    key={category.value}
                    label={category.label}
                    value={category.value}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory(category.value)}
                />  
            ))}
        </div>
    );
};