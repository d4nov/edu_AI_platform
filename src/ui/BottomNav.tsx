import { Home, Clock, CalendarHeart } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const items = [
  { label: 'Trang chủ', icon: <Home size={20} />, to: '/' },
  { label: 'Yêu thích', icon: <CalendarHeart size={20} />, to: '/favorites' },
  { label: 'Đã xem', icon: <Clock size={20} />, to: '/view-history' },
]

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full justify-around border-t bg-white shadow-md md:hidden">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center py-2 text-xs ${isActive ? 'text-primary' : 'text-gray-600'}`
          }
        >
          {item.icon}
          <span className="mt-1 font-semibold">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export default BottomNav
