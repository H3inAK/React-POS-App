import React from "react";
import { LucideTag, CheckCircle2 } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useVoucherStore from "../stores/useVoucherStore";
import { toast } from "sonner";

const ProductCard = ({ data: { id, category, title, price, image } }) => {
  const { items, addItem, updateQuantity } = useVoucherStore();

  const existingItem = items.find((el) => el.product.id === id);
  const isInCart = Boolean(existingItem);

  const handleChange = () => {
    if (existingItem) {
      updateQuantity(existingItem.id, 1);
    } else {
      const newItem = {
        id: Date.now(),
        product: { id, title, price },
        quantity: 1,
      };
      addItem(newItem);
      toast.success("Item added to cart", { position: "top-center" });
    }
  };

  return (
    <motion.div
      id={id}
      onClick={handleChange}
      whileTap={{ scale: 0.95 }}
      className={`relative shadow-xs backdrop-lg duration-200 border rounded-lg overflow-hidden cursor-pointer
        ${
          isInCart
            ? "border-blue-500 bg-blue-50 dark:bg-zinc-700"
            : "border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800"
        }`}
    >
      {isInCart && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute top-2 right-2 bg-blue-500 text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full flex items-center gap-1"
        >
          <CheckCircle2 size={12} />
          In Cart
        </motion.div>
      )}

      <div className="w-full h-36 -mt-px overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover block"
        />
      </div>

      <div className="flex flex-col p-4 h-[140px]">
        <div>
          <span className="px-2 py-0.5 rounded text-[10px] md:text-xs bg-blue-50 border border-blue-400 text-blue-600 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-600">
            {category}
          </span>
        </div>

        <h5 className="text-xs md:text-[13px] font-sans my-2 md:line-clamp-2 line-clamp-3 text-gray-800 dark:text-zinc-100">
          {title}
        </h5>

        <div className="flex gap-1.5 items-center text-gray-500 dark:text-zinc-300 mt-auto">
          <LucideTag className="rotate-65 shadow-xs" size={18} />
          <p className="text-sm">
            <span className="font-mono">{price.toLocaleString()}</span> Kyat
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
