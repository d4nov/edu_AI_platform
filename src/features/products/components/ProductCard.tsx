import { Eye, Clock, Bookmark } from 'lucide-react'
import { useFavorites } from '@/features/favorites/hooks/useFavorites.ts'
import type { ProductCardProps } from '@/features/products/types/product.type.ts'

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const { isFavorite, toggleFavorite } = useFavorites()

  return (
    <div
      onClick={onClick}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow transition hover:shadow-md"
    >
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover xl:h-56" />

      <button
        onClick={(e) => {
          e.stopPropagation()
          toggleFavorite(product)
        }}
        className="absolute right-2 top-2 z-10 text-white/70 hover:text-yellow-500"
      >
        {isFavorite(product) ? (
          <Bookmark className="h-6 w-5 fill-yellow-500 text-yellow-500 md:h-7 md:w-7" />
        ) : (
          <Bookmark className="h-6 w-5 hover:fill-yellow-500 md:h-7 md:w-7" />
        )}
      </button>

      <div className="flex flex-1 flex-col justify-between gap-2 p-3">
        <div>
          <h3 className="line-clamp-1 text-base font-semibold text-gray-900">{product.name}</h3>
          <p className="line-clamp-1 text-sm text-gray-500">{product.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3">
          {product.oldPrice && (
            <p className="text-md text-gray-400 line-through">{product.oldPrice.toLocaleString()}đ</p>
          )}
          <p className="font-bold text-orange-500 sm:ml-2">{product.price.toLocaleString()}đ</p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 text-xs text-gray-500 md:text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {product.duration}
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {product.views}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
