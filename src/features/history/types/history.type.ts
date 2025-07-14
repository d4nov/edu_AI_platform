import type { Product } from '@/features/products/types/product.type'
import type { ReactNode } from 'react'

export type ViewHistoryItem = Product & {
  viewedAt: string
}

export type ViewHistoryContextType = {
  history: ViewHistoryItem[]
  addToHistory: (product: Product) => void
  clearHistory: () => void
}

export type HistoryProps = {
  children: ReactNode
}
