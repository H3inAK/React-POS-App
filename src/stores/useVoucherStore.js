import { create } from "zustand";

const useVoucherStore = create((set, get) => ({
  items: [
    {
      id: 1,
      product: {
        id: 1,
        category: "Bread",
        title: "Buttery French Morning Croissant",
        price: 5800,
        image: "/images/1.png",
      },
      quantity: 4,
    },
    {
      id: 2,
      product: {
        id: 2,
        category: "Bread",
        title: "Artisan Crusty Rye Loaf",
        price: 6300,
        image: "/images/2.png",
      },
      quantity: 2,
    },
    {
      id: 3,
      product: {
        id: 3,
        category: "Bread",
        title: "Healthy Sesame Multigrain Loaf",
        price: 5800,
        image: "/images/3.png",
      },
      quantity: 3,
    },
  ],
  addItems: (newItems) => {
    set({ items: [...get().items, newItems] });
  },
}));

export default useVoucherStore;
