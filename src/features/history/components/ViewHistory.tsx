import { useState } from 'react'
import { ProductDetailModal, ProductList } from '@/features/products/components'
import type { Product } from '@/features/products/types/product.type.ts'
import { useViewHistory } from '@/features/history/hooks/useViewHistory.ts'
import { Trash2 } from 'lucide-react'

const ViewHistory = () => {
  const { history, clearHistory } = useViewHistory()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div className="py-4 sm:px-2 md:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold lg:text-2xl">Lịch sử xem</h2>
        {history.length > 0 && (
          <button
            className="lg:text-md text-md flex items-center gap-1 font-semibold text-red-500 hover:underline"
            onClick={clearHistory}
          >
            <span className="hidden sm:inline">Xoá toàn bộ</span>
            <Trash2 className="inline h-6 w-6 rounded-md sm:hidden" />
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="text-center text-gray-500">Bạn chưa xem khoá học nào.</p>
      ) : (
        <ProductList title="" products={history} onSelect={setSelectedProduct} />
      )}

      <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}

export default ViewHistory
