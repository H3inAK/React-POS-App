const CategorySkeleton = ({ count }) => {
  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-auto animate-pulse">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="h-7 w-full rounded-xs mb-1 bg-gray-300 dark:bg-zinc-700 "
        ></div>
      ))}
    </div>
  );
};

export default CategorySkeleton;
