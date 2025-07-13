import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home.tsx';
import Favorites from '@/pages/Favorites.tsx';
import ViewHistory from '@/pages/ViewHistory.tsx';
import Layout from '@/layouts/Layout';

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
  );
}
