import { useEffect, useState } from 'react'
import type { Product } from '@/features/products/types/product.type'
import { FavoritesContext } from './FavoritesContext'

const FAVORITES_KEY = 'favorites'

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
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}
