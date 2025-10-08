import { useRef } from "react";
import { Search } from "lucide-react";
import useProductStore from "../stores/useProductStore";

const ProductSearchInput = () => {
  const inputRef = useRef();

  const { setQ } = useProductStore();

  const handleChange = () => {
    setQ(inputRef.current.value);
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <Search className="size-4 text-gray-500" />
      </div>
      <input
        type="search"
        className="block w-full px-8 py-2 ps-10 text-sm rounded-lg border border-gray-300 dark:border-zinc-500 outline-none  bg-white dark:bg-zinc-700 dark:text-white"
        placeholder="Search for products..."
        ref={inputRef}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProductSearchInput;
