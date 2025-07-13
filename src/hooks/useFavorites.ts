import type { Product } from '@/data/products.ts'
import { useEffect, useState } from 'react'

const FAVORITES_KEY = 'favorites'

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Product[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY)
    if (stored) {
      setFavorites(JSON.parse(stored))
    }
  }, [])

  const isFavorite = (product: Product) => favorites.some((p) => p.id === product.id)
  const toggleFavorite = (product: Product) => {
    let updated: Product[]

    if (isFavorite(product)) {
      updated = favorites.filter((p) => p.id !== product.id)
    } else {
      updated = [...favorites, product]
    }

    setFavorites(updated)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated))
  }

  return { favorites, isFavorite, toggleFavorite }
}
