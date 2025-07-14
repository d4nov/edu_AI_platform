import type { Dispatch, SetStateAction } from 'react'

export type Product = {
  id: number
  name: string
  description: string
  image: string
  price: number
  oldPrice?: number
  rating?: number
  duration: string
  views: number
}
export type ProductCardProps = {
  product: Product
  onClick?: () => void
}

export type ProductDetailProps = {
  product: Product | null
  onClose: () => void
}

export type ProductListProps = {
  title: string
  products: Product[]
  onSelect: Dispatch<SetStateAction<Product | null>>
  showAll?: boolean
}
