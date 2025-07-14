import { type Dispatch, type SetStateAction, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import type { Product } from '@/features/products/data/products.ts'
import { ProductCard } from '@/features/products/components'

type ProductListProps = {
  title: string
  products: Product[]
  onSelect: Dispatch<SetStateAction<Product | null>>
  showAll?: boolean
}

const INITIAL_COUNT = 4

const ProductList = ({ title, products, onSelect, showAll = false }: ProductListProps) => {
  const [expanded, setExpanded] = useState(false)

  const visibleProducts = showAll
    ? products
    : expanded
      ? products
      : products.slice(0, INITIAL_COUNT)

  const hasMore = !showAll && products.length > INITIAL_COUNT
  const toggleExpanded = () => setExpanded((prev) => !prev)

  return (
    <div className="py-4 sm:px-2 md:px-6 lg:px-8">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold lg:text-2xl">{title}</h2>

        {hasMore && (
          <button
            onClick={toggleExpanded}
            className="lg:text-md text-md flex items-center font-semibold text-orange-600 hover:underline"
          >
            <span className="hidden sm:inline">{expanded ? 'Thu gọn' : 'Xem thêm'}</span>
            <span className="rounded-full border bg-gray-100 px-2 py-1 sm:hidden">
              {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
            <span className="hidden sm:inline">{expanded ? '‹' : '›'}</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} onClick={() => onSelect(product)} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
