import { useEffect, useState } from 'react'
import { ProductList, ProductDetailModal } from '@/features/products/components'
import { communicateList, ieltsList, toeicList } from '@/features/products/data/products'
import type { Product } from '@/features/products/types/product.type'
import { useOutletContext } from 'react-router-dom'
import type { PriceRange } from '@/features/filter/types/price-filter.type'
import PriceFilter from '@/features/filter/components/PriceFilter'
import { fetchSuggestedProducts } from '@/mocks/suggestions.ts'

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [priceFilter, setPriceFilter] = useState<PriceRange>('all')
  const [suggestions, setSuggestions] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const { searchTerm, shouldSuggest, setShouldSuggest } = useOutletContext<{
    searchTerm: string
    shouldSuggest: boolean
    setShouldSuggest: (val: boolean) => void
  }>()

  const isSearching = searchTerm.trim().length > 0

  const filterBySearch = (products: Product[]) =>
    products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const filterByPrice = (products: Product[]) =>
    products.filter((product) => {
      if (priceFilter === 'lt500') return product.price < 500_000
      if (priceFilter === '500to1m') return product.price >= 500_000 && product.price <= 1_000_000
      if (priceFilter === 'gt1m') return product.price > 1_000_000
      return true
    })

  const communicate = filterByPrice(filterBySearch(communicateList))
  const toeic = filterByPrice(filterBySearch(toeicList))
  const ielts = filterByPrice(filterBySearch(ieltsList))

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        setIsLoading(true)
        setError('')
        const data = await fetchSuggestedProducts('user123')
        setSuggestions(data)
      } catch {
        setError('Lỗi gợi ý...')
      } finally {
        setIsLoading(false)
      }
    }

    if (shouldSuggest) {
      fetchSuggestions().catch(() => {
        setError('Lỗi gợi ý...')
      })
      setShouldSuggest(false)
    }
  }, [shouldSuggest, setShouldSuggest])

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start md:px-6 lg:px-8">
        <PriceFilter value={priceFilter} onChange={setPriceFilter} />
      </div>

      {isLoading && (
        <div className="flex items-center gap-2 px-4 text-gray-500 md:px-6 lg:px-8">
          <span className="loader h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-t-transparent" />
          Đang tải gợi ý...
        </div>
      )}
      {error && <p className="px-4 text-red-500 md:px-6 lg:px-8">{error}</p>}

      {suggestions.length > 0 && (
        <ProductList title="Gợi ý cho bạn" products={suggestions} onSelect={setSelectedProduct} showAll />
      )}

      {communicate.length > 0 && (
        <ProductList
          title={isSearching ? '' : 'Khoá học giao tiếp'}
          products={communicate}
          onSelect={setSelectedProduct}
        />
      )}
      {toeic.length > 0 && (
        <ProductList title={isSearching ? '' : 'Khoá học TOEIC'} products={toeic} onSelect={setSelectedProduct} />
      )}
      {ielts.length > 0 && (
        <ProductList title={isSearching ? '' : 'Khoá học IELTS'} products={ielts} onSelect={setSelectedProduct} />
      )}

      <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}

export default Home
