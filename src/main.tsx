import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FavoritesProvider } from '@/features/favorites/contexts/FavoritesContext.tsx'
import { ViewHistoryContextProvider } from '@/features/history/contexts/ViewHistoryContext.tsx'

createRoot(document.getElementById('root')!).render(
  <ViewHistoryContextProvider>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </ViewHistoryContextProvider>
)
