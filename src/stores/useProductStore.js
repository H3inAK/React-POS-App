import { mutate } from "swr";
import { create } from "zustand";

export const ProductCreateDrawerStatus = Object.freeze({
  HIDE: "hide",
  SHOW: "show",
});

const useProductStore = create((set, get) => ({
  products: [],
  setProducts: (products) => set({ products: products }),

  addNewProduct: async (title, price, category) => {
    const { products } = get();
    const imageId = products.length + 1;
    const newProduct = {
      category,
      title,
      price,
      image: `/images/${imageId - 7}.png`,
    };

    try {
      const res = await fetch("http://localhost:8000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      const savedProduct = await res.json();

      set((state) => ({
        products: [...state.products, savedProduct],
      }));
      mutate("http://localhost:8000/products");
    } catch (error) {
      console.error(error);
    }
  },

  filteredProducts: (selectedCategory) => {
    const { products, q } = get();
    return products
      .filter(
        (el) => selectedCategory === "All" || el.category === selectedCategory
      )
      .filter((el) => el.title.toLowerCase().search(q.toLowerCase()) != -1);
  },

  q: "",
  setQ: (keyword) => {
    set(() => ({
      q: keyword,
    }));
  },

  openDrawerStatus: ProductCreateDrawerStatus.HIDE,
  setOpenDrawerStatus: (status) => {
    set(() => ({
      openDrawerStatus: status,
    }));
  },
}));

export default useProductStore;
