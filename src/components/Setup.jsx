import { useEffect } from "react";
import useThemeStore, { ThemeMode } from "../stores/useThemeStore";

const Setup = () => {
  const { setThemeMode } = useThemeStore();

  useEffect(() => {
    const initializeTheme = () => {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const savedTheme = localStorage.getItem("color-theme");
      if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add("dark");
        setThemeMode(ThemeMode.DARK);
      } else {
        document.documentElement.classList.remove("dark");
        setThemeMode(ThemeMode.LIGHT);
      }
    };

    initializeTheme();
  }, [setThemeMode]);

  return null;
};

export default Setup;
