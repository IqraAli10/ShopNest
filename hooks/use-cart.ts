'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem } from '@/types/cart';

interface CartStore {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === item.id);

        if (existingItem) {
          const updatedItems = currentItems.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          );
          set({
            items: updatedItems,
            total: calculateTotal(updatedItems),
          });
        } else {
          const updatedItems = [...currentItems, { ...item, quantity: 1 }];
          set({
            items: updatedItems,
            total: calculateTotal(updatedItems),
          });
        }
      },
      removeItem: (id) => {
        const updatedItems = get().items.filter((item) => item.id !== id);
        set({
          items: updatedItems,
          total: calculateTotal(updatedItems),
        });
      },
      updateQuantity: (id, quantity) => {
        if (quantity < 1) return;
        const updatedItems = get().items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
        set({
          items: updatedItems,
          total: calculateTotal(updatedItems),
        });
      },
      clearCart: () => {
        set({ items: [], total: 0 });
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};