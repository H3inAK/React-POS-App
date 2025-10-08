import React, { useState } from "react";
import CategoryBtn from "./CategoryBtn";
import CategoryAddBtn from "./CategoryAddBtn";
import CategoryCreateDrawer from "./CategoryCreateDrawer";
import useCategoryStore from "../stores/useCategoryStore";

const CategoryList = () => {
  const { categories } = useCategoryStore();

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex-1 flex flex-col min-h-0 overflow-auto">
        {categories.map((el) => (
          <CategoryBtn data={el} key={el.id} />
        ))}
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
