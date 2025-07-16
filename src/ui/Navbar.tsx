import { Search, ShoppingBag, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as React from 'react'

type NavbarProps = {
  onSearch: (value: string) => void
  onSuggestClick: () => void
}

const Navbar = ({ onSearch, onSuggestClick }: NavbarProps) => {
  const [search, setSearch] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    onSearch(value)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-14 max-w-full items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-lg font-bold text-primary">
          Edu<span className="text-gray-800">AI</span>
        </Link>

        <div className="mx-3 flex-1 px-8 md:px-28 lg:px-48 xl:px-96">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="Tìm kiếm..."
              className="w-full rounded-full border bg-gray-100 py-2 pl-10 pr-4 text-sm focus:outline-primary"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative">
            <ShoppingBag className="h-6 w-6 text-gray-600 transition hover:text-primary" />
          </button>

          <button
            onClick={onSuggestClick}
            className="text-md hidden rounded-full bg-orange-500 px-5 py-2 font-semibold text-white hover:bg-orange-600 md:inline"
          >
            Gợi ý sản phẩm phù hợp
          </button>

          <button onClick={onSuggestClick} className="rounded-full text-gray-700 hover:text-orange-500 md:hidden">
            <Sparkles className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
