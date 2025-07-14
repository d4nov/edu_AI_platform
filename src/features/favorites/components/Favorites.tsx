import { useFavorites } from '@/features/favorites/hooks/useFavorites.ts'
import { useState } from 'react'
import { ProductList, ProductDetailModal } from '@/features/products/components'
import type { Product } from '@/features/products/types/product.type.ts'
import { Trash2 } from 'lucide-react'

const Favorites = () => {
  const { favorites, clearFavorites } = useFavorites()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div className="py-4 sm:px-2 md:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold lg:text-2xl">Khoá học đã yêu thích</h2>
        {favorites.length > 0 && (
          <button
            className="lg:text-md text-md flex items-center gap-1 font-semibold text-red-500 hover:underline"
            onClick={clearFavorites}
          >
            <span className="hidden sm:inline">Xoá toàn bộ</span>
            <Trash2 className="inline h-6 w-6 rounded-md sm:hidden" />
          </button>
        )}
      </div>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">Bạn chưa yêu thích khoá học nào.</p>
      ) : (
        <ProductList title="" products={favorites} onSelect={setSelectedProduct} />
      )}

      <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}

export default Favorites
