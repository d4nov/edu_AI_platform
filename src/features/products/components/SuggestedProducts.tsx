import { useState } from 'react'
import { ProductList } from '@/features/products/components'
import type { Product } from '@/features/products/types/product.type'
import { Loader2 } from 'lucide-react'

const fakeSuggestedProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1001,
          name: 'Luyện giao tiếp nâng cao',
          description: 'Khoá học AI gợi ý',
          image: '/images/ai-course.jpg',
          price: 950000,
          duration: '12h',
          views: 1000,
        },
      ])
    }, 2000)
  })
}

const SuggestedProducts = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [suggested, setSuggested] = useState<Product[]>([])

  const handleSuggest = async () => {
    setLoading(true)
    setError('')
    try {
      const result: Product[] = await fakeSuggestedProducts()
      setSuggested(result)
    } catch {
      setError('Không thể lấy gợi ý lúc này.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4 py-4 sm:px-2 md:px-6 lg:px-8">
      <button
        onClick={handleSuggest}
        className="rounded-md bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-orange-600"
      >
        Gợi ý sản phẩm phù hợp
      </button>

      {loading && (
        <div className="flex items-center gap-2 text-gray-600">
          <Loader2 className="animate-spin" />
          Đang tải gợi ý...
        </div>
      )}

      {error && <div className="text-red-500">{error}</div>}

      {suggested.length > 0 && <ProductList title="Gợi ý cho bạn" products={suggested} onSelect={() => {}} showAll />}
    </div>
  )
}

export default SuggestedProducts
