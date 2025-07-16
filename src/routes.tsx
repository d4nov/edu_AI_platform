import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home.tsx'
import Favorites from '@/features/favorites/components/Favorites.tsx'
import ViewHistory from '@/features/history/components/ViewHistory.tsx'
import Layout from '@/layouts/Layout'
import Cart from '@/features/cart/components/Cart.tsx'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/view-history" element={<ViewHistory />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
