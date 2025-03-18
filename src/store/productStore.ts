import { create } from 'zustand';

type ProductStore = {
    totalProduct : number;
    scrolledProduct : number;
    setTotalProduct : (count : number) => void;
    setScrolledProduct : (count : number) => void;
};


export const useProductStore = create <ProductStore>((set) =>({
    totalProduct :0,
    scrolledProduct :0,
    setTotalProduct : (count : number) => set((_state) => ({totalProduct : count})),
    setScrolledProduct : (count : number) => set((_state) => ({scrolledProduct : count})),
}));
