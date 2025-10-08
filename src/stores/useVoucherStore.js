import { create } from "zustand";

const useVoucherStore = create((set, get) => ({
  items: [],

  addItem: (newItem) => {
    set({ items: [...get().items, newItem] });
  },
  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((el) => el.id !== id),
    }));
  },

  updateQuantity: (id, amount) => {
    set((state) => ({
      items: state.items.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity + amount } : el
      ),
    }));
  },
}));

export default useVoucherStore;
