import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/features/products/pages/Home.tsx'
import Favorites from '@/features/products/pages/Favorites.tsx'
import ViewHistory from '@/features/products/pages/ViewHistory.tsx'
import Layout from '@/layouts/Layout'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/view-history" element={<ViewHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
