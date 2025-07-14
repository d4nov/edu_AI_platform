import { createContext } from 'react'
import type { ViewHistoryContextType } from '@/features/history/types/history.type'

export const ViewHistoryContext = createContext<ViewHistoryContextType | undefined>(undefined)
