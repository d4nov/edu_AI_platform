import { Home, CalendarHeart, Clock } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const sidebarItems = [
  { label: 'Trang chủ', icon: <Home />, to: '/' },
  { label: 'Yêu thích', icon: <CalendarHeart />, to: '/favorites' },
  { label: 'Đã xem', icon: <Clock />, to: '/view-history' },
]

const Sidebar = () => {
  return (
    <aside className="sticky top-0 z-20 hidden h-screen w-24 flex-shrink-0 flex-col items-center gap-4 overflow-y-auto px-2 pt-4 md:flex">
      {sidebarItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex w-full flex-col items-center justify-center rounded-md p-2 text-gray-800 transition ${
              isActive ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-100'
            }`
          }
        >
          <div className="h-5 w-5">{item.icon}</div>
          <span className="mt-2 text-[10px] font-semibold">{item.label}</span>
        </NavLink>
      ))}
    </aside>
  )
}

export default Sidebar
