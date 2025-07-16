// src/features/cart/contexts/CartContext.tsx
import { createContext, useContext, useState } from 'react'
import type { Product } from '@/features/products/types/product.type'
import * as React from 'react'

interface CartContextType {
  cart: Product[]
  addToCart: (product: Product) => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product])
  }

  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
