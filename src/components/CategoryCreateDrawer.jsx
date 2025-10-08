import { X } from "lucide-react";
import CategoryCreateForm from "./CategoryCreateForm";

const CategoryCreateDrawer = ({ isOpenDrawer, setIsOpenDrawer }) => {
  const handleClick = () => {
    setIsOpenDrawer(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 bg-white dark:bg-zinc-700 ${
        isOpenDrawer ? "translate-0 shadow-lg" : "-translate-x-full"
      } duration-200 z-40 h-full w-[300px]`}
    >
      <div className="flex flex-col px-6 py-4 h-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-zinc-800 text-lg dark:text-zinc-200 font-semibold">
            Create New Category
          </h3>
          <button onClick={handleClick} className="p-1.5 rounded-full translate-x-2 text-zinc-800 hover:text-zinc-700 bg-gray-200 hover:bg-gray-300 dark:bg-zinc-500 duration-200 hover:dark:bg-zinc-600">
            <X
              size={24}
              className="text-zinc-600 dark:text-zinc-200 cursor-pointer"
            />
          </button>
        </div>

        <CategoryCreateForm
          className="flex-1"
          setIsOpenDrawer={setIsOpenDrawer}
        />
      </div>
    </div>
  );
};

export default CategoryCreateDrawer;
