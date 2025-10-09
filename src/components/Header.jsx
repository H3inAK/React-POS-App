import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Sun, Moon, Bell, User, RefreshCcw } from "lucide-react";
import useThemeStore, { ThemeMode } from "../stores/useThemeStore";
import useVoucherStore from "../stores/useVoucherStore";

const Header = () => {
  const { removeAllItems } = useVoucherStore();
  const { themeMode, setThemeMode } = useThemeStore();
  const [isRotating, setIsRotating] = useState(false);

  const isDarkMode = themeMode === ThemeMode.DARK;

  const handleThemeToggle = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      setThemeMode(ThemeMode.LIGHT);
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      setThemeMode(ThemeMode.DARK);
      localStorage.setItem("color-theme", "dark");
    }
  };

  const handleRefresh = () => {
    setIsRotating(true);
    removeAllItems();

    setInterval(() => setIsRotating(false), 600);
  };

  return (
    <header className="flex justify-between items-center dark:shadow-xs dark:backdrop-blur-md px-4 py-3 bg-white dark:bg-zinc-800 border-b dark:border-b-0 border-zinc-200 dark:border-zinc-700">
      <h1 className="font-heading font-bold text-xl text-zinc-700 dark:text-zinc-200">
        Tzo' Barkery
      </h1>
      <div className="flex items-center gap-2 md:gap-4">
        <button
          type="button"
          onClick={handleThemeToggle}
          className="text-zinc-500 shadow-xs dark:shadow-sm bg-gray-100 dark:bg-zinc-700 p-2.5 rounded-full duration-300 hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:hover:text-zinc-300 hover:text-zinc-600 hover:cursor-pointer dark:text-zinc-400"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button
          type="button"
          onClick={handleRefresh}
          className="text-zinc-500 shadow-xs dark:shadow-sm bg-gray-100 dark:bg-zinc-700 p-2.5 rounded-full duration-300 hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:hover:text-zinc-300 hover:text-zinc-600 hover:cursor-pointer dark:text-zinc-400"
        >
          <motion.div
            animate={isRotating ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <RefreshCcw size={20} />
          </motion.div>
        </button>
        <button
          type="button"
          className="text-zinc-500 shadow-xs dark:shadow-sm bg-gray-100 dark:bg-zinc-700 p-2.5 rounded-full duration-300 hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:hover:text-zinc-300 hover:text-zinc-600 hover:cursor-pointer dark:text-zinc-400"
        >
          <Bell size={20} />
        </button>
        <button
          type="button"
          className="text-zinc-500 shadow-xs dark:shadow-sm bg-gray-100 dark:bg-zinc-700 p-2.5 rounded-full duration-300 hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:hover:text-zinc-300 hover:text-zinc-600 hover:cursor-pointer dark:text-zinc-400"
        >
          <User size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
