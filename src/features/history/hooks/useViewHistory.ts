import { useContext } from 'react'
import { ViewHistoryContext } from '@/features/history/contexts/ViewHistoryContext'

export const useViewHistory = () => {
  const context = useContext(ViewHistoryContext)
  if (!context) throw new Error('useViewHistory must be used within ViewHistoryContextProvider')
  return context
}
