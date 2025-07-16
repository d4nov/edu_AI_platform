import Modal from '@/ui/Modal.tsx'
import RatingStars from '@/ui/RatingStars.tsx'
import { useState } from 'react'
import type { ProductDetailProps } from '@/features/products/types/product.type.ts'
import toast from 'react-hot-toast'

const ProductDetailModal = ({ product, onClose }: ProductDetailProps) => {
  const [descExpanded, setDescExpanded] = useState(false)
  if (!product) return null

  return (
    <Modal open={!!product} onClose={onClose}>
      <div className="space-y-4">
        <img src={product.image} alt={product.name} className="w-full rounded-lg object-cover" />
        <h2 className="text-xl font-bold md:text-2xl">{product.name}</h2>

        <div className="md:text-md text-sm text-gray-700">
          <p className={`${descExpanded ? '' : 'line-clamp-5'} whitespace-pre-line`}>{product.description}</p>
          {product.description.length > 200 && (
            <button
              onClick={() => setDescExpanded((prev) => !prev)}
              className="md:text-md mt-2 text-sm font-semibold text-gray-600 hover:underline"
            >
              {descExpanded ? 'Thu gọn ▲' : 'Xem thêm ▼'}
            </button>
          )}
        </div>

        <div className="md:text-md flex flex-col gap-2 text-sm text-gray-700 md:flex-row md:items-center md:gap-4">
          <span>Thời lượng: {product.duration}</span>
          <span>Lượt xem: {product.views}</span>
          {product.rating && (
            <span className="flex items-center gap-1">
              Đánh giá: <RatingStars rating={product.rating} />
            </span>
          )}
        </div>

        <div className="text-lg font-semibold text-orange-600 md:text-xl">
          {product.oldPrice && (
            <span className="mr-2 text-base text-gray-400 line-through">{product.oldPrice.toLocaleString()}đ</span>
          )}
          {product.price.toLocaleString()}đ
        </div>

        <button
          onClick={() => {
            toast.success('Mua khoá học thành công!', {
              icon: '🎉',
              duration: 4000,
              position: 'top-center',
              style: {
                background: '#fff',
                color: '#333',
              },
            })
          }}
          className="w-full rounded-lg bg-orange-500 px-5 py-2.5 font-semibold text-white hover:bg-orange-600"
        >
          Mua Khoá Học
        </button>
      </div>
    </Modal>
  )
}

export default ProductDetailModal
