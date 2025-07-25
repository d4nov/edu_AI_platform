import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { ProductCard } from '@/features/products/components'
import type { Product, ProductListProps } from '@/features/products/types/product.type.ts'
import { useViewHistory } from '@/features/history/hooks/useViewHistory.ts'

const INITIAL_COUNT = 4

const ProductList = ({ title, products, onSelect, showAll = false }: ProductListProps) => {
  const [expanded, setExpanded] = useState(false)

  const visibleProducts = showAll ? products : expanded ? products : products.slice(0, INITIAL_COUNT)

  const hasMore = !showAll && products.length > INITIAL_COUNT
  const toggleExpanded = () => setExpanded((prev) => !prev)
  const { addToHistory } = useViewHistory()

  const handleClick = (product: Product) => {
    addToHistory(product)
    onSelect(product)
  }

  return (
    <div className="py-4 sm:px-2 md:px-6 lg:px-8">
      {title && (
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
      )}

      {visibleProducts.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} onClick={() => handleClick(product)} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
