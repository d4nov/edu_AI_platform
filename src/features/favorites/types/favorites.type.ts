import type { Product } from '@/features/products/types/product.type.ts'

export type FavoritesContext = {
  favorites: Product[]
  toggleFavorite: (product: Product) => void
  isFavorite: (product: Product) => boolean
  clearFavorites: () => void
}
