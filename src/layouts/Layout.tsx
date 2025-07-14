import Header from '@/shared/components/ui/Navbar.tsx'
import Sidebar from '@/shared/components/ui/Sidebar.tsx'
import { Outlet } from 'react-router-dom'
import BottomNav from '@/shared/components/ui/BottomNav.tsx'

const Layout = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 pb-20 md:pb-6">
          <Outlet />
        </main>
      </div>
      <BottomNav />
    </div>
  )
}

export default Layout
