import React from "react";
import { Minus, Plus } from "lucide-react";

const VoucherItem = ({ item }) => {
  const { title, quantity, price } = item;
  const cost = quantity * price;

  return (
    <div className="border-b border-gray-300 dark:border-zinc-700 py-3">
      <div className="flex justify-between items-start text-sm mb-2.5">
        <h3 className="text-gray-800 dark:text-zinc-200">{title}</h3>
        <div className="flex gap-1 items-center">
          <button className="rounded bg-blue-50 dark:bg-zinc-700 border-blue-400 dark:border-zinc-600">
            <Minus className="text-blue-600 dark:text-zinc-400 p-1" size={18} />
          </button>
          <p className="w-4 text-end text-gray-800 dark:text-zinc-200 text-sm font-mono">
            {quantity}
          </p>
          <button className="rounded bg-blue-50 dark:bg-zinc-700 border-blue-400 dark:border-zinc-600">
            <Plus className="text-blue-600 dark:text-zinc-400 p-1" size={18} />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 font-mono text-xs text-gray-500 dark:text-zinc-400">
          <p>{price}</p>
          <p>x</p>
          <p>{quantity}</p>
        </div>
        <p className="text-sm font-medium font-mono text-gray-600 dark:text-zinc-300">
          {cost}
        </p>
      </div>
    </div>
  );
};

export default VoucherItem;
