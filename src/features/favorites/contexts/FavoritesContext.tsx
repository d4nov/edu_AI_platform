import { createContext, useEffect, useState } from 'react'
import * as React from 'react'
import type { Product } from '@/features/products/types/product.type.ts'

const FAVORITES_KEY = 'favorites'

export const FavoritesContext = createContext<{
  favorites: Product[]
  toggleFavorite: (product: Product) => void
  isFavorite: (product: Product) => boolean
} | null>(null)

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Product[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY)
    if (stored) {
      setFavorites(JSON.parse(stored))
    }
  }, [])

  const isFavorite = (product: Product) => favorites.some((p) => p.id === product.id)

  const toggleFavorite = (product: Product) => {
    const updated = isFavorite(product) ? favorites.filter((p) => p.id !== product.id) : [...favorites, product]

    setFavorites(updated)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated))
  }
  const clearFavorites = () => {
    setFavorites([])
    localStorage.removeItem(FAVORITES_KEY)
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>{children}</FavoritesContext.Provider>
  )
}
