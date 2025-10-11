import { useEffect } from "react";
import useSWR from "swr";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./ProductCard";
import useProductStore from "../stores/useProductStore";
import useCategoryStore from "../stores/useCategoryStore";
import fetcher from "../utilities/fetcher";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductList = () => {
  const { products, setProducts, filteredProducts } = useProductStore();
  const { selectedCategory } = useCategoryStore();

  const { data, isLoading, error } = useSWR(
    "http://localhost:8000/products",
    fetcher
  );

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data, setProducts]);

  if (error)
    return (
      <div className="w-full h-full flex justify-center text-center">
        <h3 className="text-sm text-zinc-700 dark:text-gray-300">
          Failed to load ❌
        </h3>
      </div>
    );

  if (isLoading) {
    return <ProductCardSkeleton count={8} />;
  }

  return products.length == 0 ? (
    <div className="h-full flex flex-col items-center justify-center">
      <img
        src="empty.svg"
        className="h-[120px] object-cover mb-3 -translate-x-1"
      />
      <p className="text-md text-zinc-200 dark:text-gray-300 mb-2">
        There is no product yet!
      </p>
      <p className="text-sm text-zinc-300 dark:text-gray-400">
        Tap(+) to add new product
      </p>
      <p className="mt-4"></p>
    </div>
  ) : (
    <div className="grid grid-cols-3 pr-0.5 gap-3 pb-5 xl:grid-cols-4 xl:gap-3 xl:pb-3">
      <AnimatePresence>
        {filteredProducts(selectedCategory).map((el) => (
          <motion.div
            key={el.id}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ProductCard data={el} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ProductList;
