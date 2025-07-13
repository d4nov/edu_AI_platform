import { type Product } from '@/data/products.ts'
import ProductCard from '@/components/product/ProductCard.tsx'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Modal from '@/components/ui/Modal.tsx'
import RatingStars from '@/components/ui/RatingStars.tsx'

type ProductListProps = {
  title: string
  products: Product[]
}

const INITIAL_COUNT = 4

const ProductList = ({ title, products }: ProductListProps) => {
  const [expanded, setExpanded] = useState(false)

  const visibleProducts = expanded ? products : products.slice(0, INITIAL_COUNT)
  const hasMore = products.length > INITIAL_COUNT

  const toggleExpanded = () => setExpanded((prev) => !prev)

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const [descExpanded, setDescExpanded] = useState(false)

  return (
    <div className="py-4 sm:px-2 md:px-6 lg:px-8">
      <div className="mb-3 flex items-center justify-between">
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
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>
      <Modal open={!!selectedProduct} onClose={() => setSelectedProduct(null)}>
        {selectedProduct && (
          <div className="space-y-4">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full rounded-lg object-cover"
            />
            <div className="space-y-2">
              <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
              <div className="relative whitespace-pre-line break-words text-sm leading-relaxed text-gray-700">
                <p
                  className={`${descExpanded ? '' : 'line-clamp-5'} whitespace-normal break-words`}
                >
                  {selectedProduct.description}
                </p>
                {selectedProduct.description.length > 200 && (
                  <button
                    onClick={() => setDescExpanded((prev) => !prev)}
                    className="mt-2 text-sm font-semibold text-gray-600 hover:underline"
                  >
                    {descExpanded ? 'Thu gọn ▲' : 'Xem thêm ▼'}
                  </button>
                )}
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-700">
                {selectedProduct.rating && (
                  <div className="flex items-center gap-1 leading-none">
                    <span className="text-gray-500">Đánh giá:</span>
                    <RatingStars rating={selectedProduct.rating} />
                  </div>
                )}
                <span>Thời lượng: {selectedProduct.duration}</span>
                <span>Lượt xem: {selectedProduct.views}</span>
              </div>

              <div className="flex items-center gap-2 text-lg font-semibold">
                {selectedProduct.oldPrice && (
                  <span className="text-base text-gray-400 line-through">
                    {selectedProduct.oldPrice.toLocaleString()}đ
                  </span>
                )}
                <span className="text-orange-600">{selectedProduct.price.toLocaleString()}đ</span>
              </div>

              <button className="mt-4 w-full rounded-lg bg-orange-500 px-5 py-2.5 text-base font-semibold text-white shadow transition hover:bg-orange-600 hover:shadow-md">
                Mua khoá học
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default ProductList
