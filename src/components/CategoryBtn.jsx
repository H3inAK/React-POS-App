import useCategoryStore from "../stores/useCategoryStore";

const CategoryBtn = ({ data: { title } }) => {
  const { selectedCategory, setSelectedCategory } = useCategoryStore();

  const isSelected = selectedCategory === title;

  return (
    <button
      onClick={() => setSelectedCategory(title)}
      className={`w-full px-4 py-1.5 text-sm text-end rounded-xs mb-1 duration-200
        ${
          isSelected
            ? "bg-blue-400 border-blue-300 text-white dark:bg-zinc-600 dark:border-zinc-500 dark:text-zinc-200"
            : " text-zinc-800 hover:text-gray-600 dark:hover:text-zinc-300 dark:text-zinc-100 hover:bg-blue-200 hover:border-blue-500 dark:hover:bg-zinc-800 dark:hover:border-zinc-700"
        }
      `}
    >
      {title}
    </button>
  );
};

export default CategoryBtn;
