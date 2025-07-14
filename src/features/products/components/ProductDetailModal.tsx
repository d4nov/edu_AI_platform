import { type Product } from '@/features/products/data/products.ts'
import Modal from '@/shared/components/ui/Modal.tsx'
import RatingStars from '@/shared/components/ui/RatingStars.tsx'
import { useState } from 'react'

type Props = {
  product: Product | null
  onClose: () => void
}

const ProductDetailModal = ({ product, onClose }: Props) => {
  const [descExpanded, setDescExpanded] = useState(false)
  if (!product) return null

  return (
    <Modal open={!!product} onClose={onClose}>
      <div className="space-y-4">
        <img src={product.image} alt={product.name} className="w-full rounded-lg object-cover" />
        <h2 className="text-xl font-bold">{product.name}</h2>

        <div className="text-sm text-gray-700">
          <p className={`${descExpanded ? '' : 'line-clamp-5'} whitespace-pre-line`}>
            {product.description}
          </p>
          {product.description.length > 200 && (
            <button
              onClick={() => setDescExpanded((prev) => !prev)}
              className="mt-2 text-sm font-semibold text-gray-600 hover:underline"
            >
              {descExpanded ? 'Thu gọn ▲' : 'Xem thêm ▼'}
            </button>
          )}
        </div>

        <div className="flex gap-4 text-sm text-gray-700">
          {product.rating && (
            <span className="flex items-center gap-1">
              Đánh giá: <RatingStars rating={product.rating} />
            </span>
          )}
          <span>Thời lượng: {product.duration}</span>
          <span>Lượt xem: {product.views}</span>
        </div>

        <div className="text-lg font-semibold text-orange-600">
          {product.oldPrice && (
            <span className="mr-2 text-base text-gray-400 line-through">
              {product.oldPrice.toLocaleString()}đ
            </span>
          )}
          {product.price.toLocaleString()}đ
        </div>

        <button className="w-full rounded-lg bg-orange-500 px-5 py-2.5 font-semibold text-white hover:bg-orange-600">
          Mua khoá học
        </button>
      </div>
    </Modal>
  )
}

export default ProductDetailModal
