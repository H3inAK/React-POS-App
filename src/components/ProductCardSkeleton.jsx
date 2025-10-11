const ProductCardSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-3 pr-0.5 gap-3 pb-5 xl:grid-cols-4 xl:gap-3 xl:pb-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="relative shadow-xs border border-gray-300 dark:border-zinc-700 rounded-lg overflow-hidden bg-gray-100 dark:bg-zinc-800 animate-pulse"
        >
          {/* image placeholder */}
          <div className="w-full h-36 bg-gray-300 dark:bg-zinc-700" />

          <div className="flex flex-col p-4 h-[140px]">
            {/* category badge placeholder */}
            <div className="w-16 h-4 bg-gray-300 dark:bg-zinc-700 rounded mb-3" />

            {/* title lines */}
            <div className="w-3/4 h-3 bg-gray-300 dark:bg-zinc-700 rounded mb-2" />
            <div className="w-1/2 h-3 bg-gray-300 dark:bg-zinc-700 rounded mb-2" />

            {/* price placeholder */}
            <div className="mt-auto flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-300 dark:bg-zinc-700 rounded" />
              <div className="w-20 h-4 bg-gray-300 dark:bg-zinc-700 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCardSkeleton;
