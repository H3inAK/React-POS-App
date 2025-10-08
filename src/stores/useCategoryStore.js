import { create } from "zustand";

const useCategoryStore = create((set, get) => ({
  categories: [
    { id: 0, title: "All" },
    { id: 1, title: "Bread" },
    { id: 2, title: "Cake" },
    { id: 3, title: "Coffee" },
    { id: 4, title: "Smoothie" },
  ],

  addNewCategory: (newCategoryName) => {
    const { categories } = get();
    const newCategory = {
      id: categories.length + 1,
      title: newCategoryName,
    };
    set((state) => ({
      categories: [...state.categories, newCategory],
    }));
  },

  selectedCategory: "All",

  setSelectedCategory: (selectedCategoryName) => {
    set(() => ({
      selectedCategory: selectedCategoryName,
    }));
  },
}));

export default useCategoryStore;
