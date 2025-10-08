import React, { useState } from "react";
import { Search } from "lucide-react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import ProductAddBtn from "./ProductAddBtn";
import ProductCreateDrawer from "./ProductCreateDrawer";

const InventorySection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="col-span-5 flex flex-col min-h-0 border-r dark:border-r-0 border-gray-200 dark:border-zinc-600 bg-gray-50 dark:bg-zinc-900">
      <div className="grid grid-cols-6">
        <div className="col-span-5 col-start-2 flex justify-between items-center p-4">
          <h3 className="text-2xl text-zinc-900 dark:text-zinc-200">Instock Products</h3>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className="size-4 text-gray-500" />
            </div>
            <input
              type="search"
              className="block w-full px-8 py-2 ps-10 text-sm rounded-lg border border-gray-300 dark:border-zinc-500 outline-none  bg-white dark:bg-zinc-700 dark:text-white"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-6 gap-4 px-4 overflow-hidden relative">
        <div className="col-span-1 overflow-hidden">
          <CategoryList />
        </div>

        <div className="col-span-5 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <ProductList />
        </div>

        <ProductAddBtn />
        <ProductCreateDrawer />
      </div>
    </section>
  );
};

export default InventorySection;
