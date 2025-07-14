import { createContext } from 'react'
import type { FavoritesContext as FavoritesContextType } from '@/features/favorites/types/favorites.type'

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)
