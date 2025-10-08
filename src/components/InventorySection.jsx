import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import ProductAddBtn from "./ProductAddBtn";
import ProductCreateDrawer from "./ProductCreateDrawer";
import useProductStore from "../stores/useProductStore";
import useCategoryStore from "../stores/useCategoryStore";
import ProductSearchInput from "./ProductSearchInput";

const InventorySection = () => {
  const { filteredProducts } = useProductStore();
  const { selectedCategory } = useCategoryStore();

  return (
    <section className="col-span-5 flex flex-col min-h-0 border-r dark:border-r-0 border-gray-200 dark:border-zinc-600 bg-gray-50 dark:bg-zinc-900">
      <div className="grid grid-cols-6">
        <div className="col-span-5 col-start-2 flex justify-between items-center p-4">
          <h3 className="text-2xl text-zinc-900 dark:text-zinc-200">
            Instock - {filteredProducts(selectedCategory).length} Products
          </h3>
          <ProductSearchInput />
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
