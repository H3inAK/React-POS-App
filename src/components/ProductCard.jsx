import React from "react";
import { BadgeDollarSign, CircleDollarSignIcon, LucideTag, Tag } from "lucide-react";

const ProductCard = ({ data: { id, category, title, price, image } }) => {
  return (
    <div
      id={id}
      className="shadow-xs backdrop-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 rounded-lg overflow-hidden"
    >
      <div className="w-full aspect-[4/3]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
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
            <span className="font-mono">{price}</span> Kyat
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
