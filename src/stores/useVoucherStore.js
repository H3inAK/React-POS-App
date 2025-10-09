import { create } from "zustand";
import dayjs from "dayjs";

const useVoucherStore = create((set, get) => ({
  voucherInfo: {
    id: "VCH-" + Math.floor(Math.random() * 900000),
    date: dayjs().format("DD MMM YYYY"),
    time: dayjs().format("HH:mm:ss A"),
  },

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
  removeAllItems: () =>
    set(() => ({
      items: [],
    })),

  updateTime: () => {
    set((state) => ({
      voucherInfo: {
        ...state.voucherInfo,
        time: dayjs().format("HH:mm:ss A"),
      },
    }));
  },

  summary: () => {
    const total = get().items.reduce(
      (pv, cv) => pv + cv.product.price * cv.quantity,
      0
    );
    const tax = total * 0.05;
    const netTotal = total + tax;

    return {
      total,
      tax,
      netTotal,
    };
  },
}));

export default useVoucherStore;
