import { useContext } from 'react'
import { FavoritesContext } from '@/features/favorites/contexts/FavoritesContext.tsx'

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) throw new Error('useFavorites must be used inside FavoritesProvider')
  return context
}
