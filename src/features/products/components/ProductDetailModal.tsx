import Modal from '@/ui/Modal.tsx'
import RatingStars from '@/ui/RatingStars.tsx'
import { useState } from 'react'
import type { ProductDetailProps } from '@/features/products/types/product.type.ts'
import { useCart } from '@/features/cart/contexts/CartContext.tsx'
import { useNavigate } from 'react-router-dom'

const ProductDetailModal = ({ product, onClose }: ProductDetailProps) => {
  const [descExpanded, setDescExpanded] = useState(false)
  const { addToCart } = useCart()
  const navigate = useNavigate()

  if (!product) return null

  const handleAddToCart = () => {
    addToCart(product)
    onClose?.()
    navigate('/cart')
  }

  const hasLongDescription = product.description?.length > 200

  return (
    <Modal open={!!product} onClose={onClose}>
      <div className="space-y-4">
        <img
          src={product.image || '/placeholder.jpg'}
          alt={product.name || 'Khoá học'}
          className="w-full rounded-lg object-cover"
        />

        <h2 className="text-xl font-bold">{product.name || 'Không có tên khoá học'}</h2>

        <div className="text-sm text-gray-700">
          <p className={`${descExpanded ? '' : 'line-clamp-5'} whitespace-pre-line`}>
            {product.description || 'Không có mô tả.'}
          </p>
          {hasLongDescription && (
            <button
              onClick={() => setDescExpanded((prev) => !prev)}
              className="mt-2 text-sm font-semibold text-gray-600 hover:underline"
            >
              {descExpanded ? 'Thu gọn ▲' : 'Xem thêm ▼'}
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          {typeof product.rating === 'number' && (
            <span className="flex items-center gap-1">
              Đánh giá: <RatingStars rating={product.rating} />
            </span>
          )}
          {!!product.duration && <span>Thời lượng: {product.duration}</span>}
          <span>Lượt xem: {product.views}</span>
        </div>

        <div className="text-lg font-semibold text-orange-600">
          {typeof product.oldPrice === 'number' && (
            <span className="mr-2 text-base text-gray-400 line-through">{product.oldPrice.toLocaleString()}đ</span>
          )}
          {product.price.toLocaleString()}đ
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full rounded-lg bg-orange-500 px-5 py-2.5 font-semibold text-white hover:bg-orange-600"
        >
          Thêm Vào Giỏ
        </button>
      </div>
    </Modal>
  )
}

export default ProductDetailModal
