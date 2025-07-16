import AppRoutes from '@/routes.tsx'
import { Toaster } from 'react-hot-toast'
import Chatbot from '@/features/chatbot/components/Chatbot.tsx'
import { ProductDetailModal } from '@/features/products/components'
import { useState } from 'react'
import type { Product } from '@/features/products/types/product.type.ts'

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <AppRoutes />
      <Toaster position="top-center" />
      <Chatbot onSelectProduct={setSelectedProduct} />
      <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}

export default App
