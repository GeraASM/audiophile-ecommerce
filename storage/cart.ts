import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartProduct } from "@/types/types";

interface Cart {
    cart: Record<string, CartProduct>;
    addToCart: (product: CartProduct) => void;
    removeCart: () => void;
    removeDevice: (slug: string) => void;
}

export const useCart = create(
    persist<Cart>((set) => ({
        cart: {},
        addToCart: (product: CartProduct) => set((state) => ({
            cart: {
                ...state.cart,
                [product.slug]: product
            }
        })),
        removeCart: () => set({cart: {}}),
        removeDevice: (slug) => set((state) => {
            const {[slug]: _, ...rest} = state.cart;
            return {cart: rest}
            
        })
    }),
    {
      name: 'cart', 
    },
)
)