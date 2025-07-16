import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '@/ui/Navbar'
import Sidebar from '@/ui/Sidebar'
import BottomNav from '@/ui/BottomNav'

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [shouldSuggest, setShouldSuggest] = useState(false)

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Navbar onSearch={setSearchTerm} onSuggestClick={() => setShouldSuggest(true)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <Outlet context={{ searchTerm, shouldSuggest, setShouldSuggest }} />
        </main>
      </div>
      <BottomNav />
    </div>
  )
}

export default Layout
