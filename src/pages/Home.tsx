import { useState } from 'react'
import { ProductList, ProductDetailModal } from '@/features/products/components'

import { communicateList, ieltsList, toeicList } from '@/features/products/data/products.ts'
import type { Product } from '@/features/products/types/product.type.ts'

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div className="space-y-6">
      <ProductList title="Khoá học giao tiếp" products={communicateList} onSelect={setSelectedProduct} />
      <ProductList title="Khoá học TOEIC" products={toeicList} onSelect={setSelectedProduct} />
      <ProductList title="Khoá học IELTS" products={ieltsList} onSelect={setSelectedProduct} />

      <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}

export default Home
