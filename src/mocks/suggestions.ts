import type { Product } from '@/features/products/types/product.type.ts'
import { communicateList, ieltsList, toeicList } from '@/features/products/data/products.ts'

export const fetchSuggestedProducts = async (_userId: string): Promise<Product[]> => {
  await new Promise((res) => setTimeout(res, 1000))

  const all: Product[] = [...communicateList, ...toeicList, ...ieltsList]
  return all.sort(() => 0.5 - Math.random()).slice(0, 4)
}
