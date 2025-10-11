import { mutate } from "swr";
import { create } from "zustand";

const useCategoryStore = create((set) => ({
  categories: [],
  setCategories: (categories) => set({ categories: categories }),

  addNewCategory: async (newCategoryName) => {
    const newCategory = {
      id: Date.now(),
      title: newCategoryName,
    };
    set((state) => ({
      categories: [...state.categories, newCategory],
    }));

    try {
      const { id, ...payload } = newCategory;
      const res = await fetch("http://localhost:8000/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const savedCategory = await res.json();
      set((state) => ({
        categories: state.categories.map((cat) =>
          cat.id === id ? savedCategory : cat
        ),
      }));

      mutate("http://localhost:8000/categories");
    } catch (error) {
      console.error(error);
      set((state) => ({
        categories: state.categories.filter((cat) => cat.id !== newCategory.id),
      }));
    }
  },

  selectedCategory: "All",

  setSelectedCategory: (selectedCategoryName) => {
    set(() => ({
      selectedCategory: selectedCategoryName,
    }));
  },
}));

export default useCategoryStore;
