import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItem, Product } from "../types/types";
import * as Crypto from 'expo-crypto';


type CartType = {
    items: CartItem[]
    addItem: (product: Product, size: CartItem['size']) => void
    updateQuantity: (itemId: string, amount: -1 | 1) => void
    total: number
}
const CardProviderContext = createContext<CartType>({
    items: [],
    addItem: () => { },
    updateQuantity: () => { },
    total: 0
});

const CardProvider = ({ children }: PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (product: Product, size: CartItem['size']) => {
        // check for already added to cart
        const existingItem = items.find((item) => item.product == product && item.size === size);
        if (existingItem) {
            updateQuantity(existingItem.id, 1);
            return;
        }

        const UUID = Crypto.randomUUID();
        const newCartItem = {
            id: UUID,
            product,
            product_id: product.id,
            size,
            quantity: 1
        }
        setItems([newCartItem, ...items])
    }
    const updateQuantity = (itemId: string, amount: -1 | 1) => {
        const updatedItems = items.map((item) => item.id !== itemId ? item : {
            ...item, quantity: item?.quantity + amount
        }).filter((item) => item.quantity > 0);
        setItems(updatedItems);
    }
    let total = items.reduce((total, item) => (total += item.product.price * item.quantity), 0);
    return (
        <CardProviderContext.Provider value={{
            items,
            addItem,
            updateQuantity,
            total
        }}>
            {children}
        </CardProviderContext.Provider>
    )
}

export default CardProvider;

export const useCart = () => useContext(CardProviderContext);