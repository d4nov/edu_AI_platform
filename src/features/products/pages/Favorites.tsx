import { useFavorites } from '@/features/products/hooks/useFavorites.ts'
import { useState } from 'react'
import type { Product } from '@/features/products/data/products.ts'
import { ProductList, ProductDetailModal } from '@/features/products/components'

const Favorites = () => {
  const { favorites } = useFavorites()

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div className="py-4 sm:px-2 md:px-6 lg:px-8">
      {favorites.length === 0 ? (
        <div className="text-center text-gray-500">Bạn chưa yêu thích khoá học nào.</div>
      ) : (
        <ProductList
          title="Khoá học đã yêu thích"
          products={favorites}
          onSelect={setSelectedProduct}
        />
      )}

      <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}

export default Favorites
