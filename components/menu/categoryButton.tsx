interface CategoryButtonProps{
    label: string;
    value: string;
    activeCategory: string;
    onClick: () => void;
}

export const CategoryButton = ({
  label,
  value,
  activeCategory,
  onClick,
}: CategoryButtonProps) => {
  const isActive =
    activeCategory === value;

  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-left

        ${
          isActive
            ? "bg-[#c08b5c] text-white"
            : "bg-gray-100"
        }
      `}
    >
      {label}
    </button>
  );
};