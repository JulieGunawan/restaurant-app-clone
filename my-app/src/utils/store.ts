import { persist } from "zustand/middleware";
import {  CartItem, CartStore } from "./type";
import { create } from "zustand";
import _ from "lodash";

const INITIAL_STATE={
    products: [] as CartItem[],
    totalItems: 0,
    totalPrice: 0
}

export const useCartStore = create(persist<CartStore>((set, get) => ({
    //Initial state
    products:INITIAL_STATE.products,
    totalItems:INITIAL_STATE.totalItems,
    totalPrice:INITIAL_STATE.totalPrice,

    //ACTIONS
    addToCart(item:CartItem) {
        const products = get().products;
        const productInState = products.find((product) => 
            (product.id === item.id && product.options===item.options ));

        if (productInState) {
            const updatedProducts = products.map((product)=>
                (product.id === productInState.id) ? {
                    ...item,
                    options: product.options,
                    quantity: item.quantity + product.quantity
                } : item
            );
            set((state)=>({
                products: updatedProducts,
                totalItems: state.totalItems + item.quantity,
                totalPrice: state.totalPrice + item.price
            }))
        } else {
            set((state)=>({
                products:[...state.products,item],
                totalItems: state.totalItems + item.quantity,
                totalPrice: state.totalPrice + item.price
            }))
        }
    },
    removeFromCart(item: CartItem) {
        console.log("item: ", item);
        const products = get().products;
        console.log("products: ", products);
        const productToRemove = products.find((product) => 
            (product.id === item.id && _.isEqual(product.options,item.options)));
        console.log("product to remove: ", productToRemove); 

        set((state)=>({
            products:state.products.filter((product) => (product.id !== item.id && !(_.isEqual(product.options, item.options)))),
            totalItems:state.totalItems - item.quantity,
            totalPrice: state.totalPrice - item.price
        }));
    },
    resetCart(){
        set(()=> ({...INITIAL_STATE}));
    }
})
,{name:"cart", skipHydration: true}));