import { Plus } from 'lucide-react';

const CategoryAddBtn = ({ setIsOpenDrawer }) => {
  const handleClick = () => {
    setIsOpenDrawer(true);
  }
  
  return (
    <button
      onClick={handleClick}
      className="w-full flex justify-center my-3 border border-gray-500 dark:zinc-zinc-500 active:border-none items-center gap-2 cursor-pointer active:scale-105 px-4 py-2 text-sm text-zinc-800 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-sm duration-200"
    >
      <Plus size={14} />
      <span className='text-gray-800 dark:text-zinc-200'>Create</span>
    </button>
  );
};

export default CategoryAddBtn;
