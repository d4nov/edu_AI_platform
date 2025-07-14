import { useContext } from 'react'
import { FavoritesContext } from '@/features/favorites/contexts/FavoritesContext'
import type { FavoritesContext as FavoritesContextType } from '@/features/favorites/types/favorites.type'

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext)
  if (!context) throw new Error('useFavorites must be used within FavoritesProvider')
  return context
}
