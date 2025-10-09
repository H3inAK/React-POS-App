import ProductCard from "./ProductCard";
import useProductStore from "../stores/useProductStore";
import useCategoryStore from "../stores/useCategoryStore";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const ProductList = () => {
  const { products, filteredProducts } = useProductStore();
  const { selectedCategory } = useCategoryStore();

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
