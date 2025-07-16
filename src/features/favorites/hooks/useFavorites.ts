import { useContext } from 'react'
import { FavoritesContext } from '@/features/favorites/contexts/FavoritesContext'
import type { FavoritesContext as FavoritesContextType } from '@/features/favorites/types/favorites.type'
import toast from 'react-hot-toast'
import type { Product } from '@/features/products/types/product.type.ts'

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext)
  if (!context) throw new Error('useFavorites must be used within FavoritesProvider')

  const wrappedToggleFavorite = (product: Product) => {
    const exists = context.favorites.some((item) => item.id === product.id)

    context.toggleFavorite(product)

    if (exists) {
      toast.error('Đã xoá khỏi yêu thích!')
    } else {
      toast.success('Đã thêm vào yêu thích!')
    }
  }

  return {
    ...context,
    toggleFavorite: wrappedToggleFavorite,
  }
}
