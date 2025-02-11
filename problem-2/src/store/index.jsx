import { create } from "zustand";
import prices from "../data/prices.json";

const useStore = create((set) => ({
  fromAmount: "1",
  fromRate: prices[3].price,
  toAmount: "",
  toRate: prices[4].price,
  setFromAmount: (value) =>
    set(() => ({
      fromAmount: value,
    })),
  setToAmount: (value) =>
    set(() => ({
      toAmount: value,
    })),
  setFromRate: (value) =>
    set(() => ({
      fromRate: value,
    })),
  setToRate: (value) =>
    set(() => ({
      toRate: value,
    })),
}));

export default useStore;
