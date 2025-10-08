import { Toaster } from "sonner";
import Header from "./components/Header";
import InventorySection from "./components/InventorySection";
import Setup from "./components/Setup";
import VoucherSection from "./components/VoucherSection";
import useThemeStore, { ThemeMode } from "./stores/useThemeStore";

const App = () => {
  const { themeMode } = useThemeStore();
  const isDarkMode = themeMode == ThemeMode.DARK;
  console.log(isDarkMode);

  return (
    <main className="h-screen flex flex-col bg-gray-50 dark:bg-zinc-800">
      <Setup />
      <Toaster richColors={!isDarkMode} />
      <Header />
      <div className="flex-1 grid grid-cols-7 overflow-hidden">
        <InventorySection />
        <VoucherSection />
      </div>
    </main>
  );
};

export default App;
