import type { Product } from '@/features/products/types/product.type'

type UserMessage = {
  id: number
  sender: 'user' | 'bot'
  timestamp: string
  text: string
}

type SuggestionMessage = {
  id: number
  sender: 'suggestion'
  timestamp: string
  product: Product
}

export type Message = UserMessage | SuggestionMessage

export interface ChatbotProps {
  onSelectProduct: (product: Product) => void
}
