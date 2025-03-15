import { persist } from "zustand/middleware";
import {  CartItem, CartStore } from "./type";
import { create } from "zustand";

const INITIAL_STATE={
    products: [] as CartItem[],
    totalItems: 0,
    totalPrice: 0
}

export const useCartStore = create(persist<CartStore>((set) => ({
    //Initial state
    products:INITIAL_STATE.products,
    totalItems:INITIAL_STATE.totalItems,
    totalPrice:INITIAL_STATE.totalPrice,

    //ACTIONS
    addToCart(item:CartItem) {
        set((state) =>({
            products: [...state.products, item],
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price,
        }))
    },
    removeFromCart(item: CartItem) {
        set((state)=>({
            products:state.products.filter((product) => product.id !== item.id),
            totalItems:state.totalItems - item.quantity,
            totalPrice: state.totalPrice - item.price
        }));
    }
})
,{name:"cart", skipHydration: true}));