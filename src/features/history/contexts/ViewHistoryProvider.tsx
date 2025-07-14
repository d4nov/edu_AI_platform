import { useEffect, useState } from 'react'
import { ViewHistoryContext } from '@/features/history/contexts/ViewHistoryContext'
import type { ViewHistoryItem, HistoryProps } from '@/features/history/types/history.type'
import type { Product } from '@/features/products/types/product.type'

const HISTORY_KEY = 'view-history'

export const ViewHistoryContextProvider = ({ children }: HistoryProps) => {
  const [history, setHistory] = useState<ViewHistoryItem[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(HISTORY_KEY)
    if (stored) {
      setHistory(JSON.parse(stored))
    }
  }, [])

  const addToHistory = (product: Product) => {
    const exists = history.find((item) => item.id === product.id)
    const updated = exists ? history.filter((item) => item.id !== product.id) : [...history]
    const newEntry: ViewHistoryItem = {
      ...product,
      viewedAt: new Date().toISOString(),
    }
    const newHistory = [newEntry, ...updated].slice(0, 20)

    setHistory(newHistory)
    localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory))
  }

  const clearHistory = () => {
    setHistory([])
    localStorage.removeItem(HISTORY_KEY)
  }

  return (
    <ViewHistoryContext.Provider value={{ history, addToHistory, clearHistory }}>
      {children}
    </ViewHistoryContext.Provider>
  )
}
