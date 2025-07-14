import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ViewHistoryContextProvider } from '@/features/history/contexts/ViewHistoryProvider.tsx'
import { FavoritesProvider } from '@/features/favorites/contexts/ FavoritesProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <ViewHistoryContextProvider>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </ViewHistoryContextProvider>
)
