import { create } from "zustand";

export const ThemeMode = Object.freeze({ LIGHT: "light", DARK: "dark" });

const useThemeStore = create((set) => ({
  themeMode: ThemeMode.LIGHT,
  setThemeMode: (themeMode) => {
    set(() => ({
        themeMode: themeMode
    }));
  },
}));

export default useThemeStore;
