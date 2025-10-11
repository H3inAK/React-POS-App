import { useEffect, useState } from "react";
import CategoryBtn from "./CategoryBtn";
import CategoryAddBtn from "./CategoryAddBtn";
import CategoryCreateDrawer from "./CategoryCreateDrawer";
import useCategoryStore from "../stores/useCategoryStore";
import CategorySkeleton from "./CategorySkeleton";
import useSWR from "swr";
import fetcher from "../utilities/fetcher";


const CategoryList = () => {
  const { categories, setCategories } = useCategoryStore();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/categories",
    fetcher
  );

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data, setCategories]);

  if (error)
    return (
      <div className="w-full h-full flex justify-center text-center">
        <h3 className="text-sm text-zinc-700 dark:text-gray-300">
          Failed to load ❌
        </h3>
      </div>
    );

  console.log(categories);

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex-1 flex flex-col min-h-0 overflow-auto">
        {isLoading ? (
          <CategorySkeleton
            count={categories.length === 0 ? 5 : categories.length}
          />
        ) : (
          categories.map((el) => <CategoryBtn data={el} key={el.id} />)
        )}
      </div>

      <CategoryAddBtn setIsOpenDrawer={setIsOpenDrawer} />

      <CategoryCreateDrawer
        isOpenDrawer={isOpenDrawer}
        setIsOpenDrawer={setIsOpenDrawer}
      />
    </div>
  );
};

export default CategoryList;
