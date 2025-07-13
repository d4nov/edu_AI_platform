import { Bell, LogIn, LogOut, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-14 max-w-full items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-lg font-bold text-primary">
          Edu<span className="text-gray-800">AI</span>
        </Link>

        <div className="mx-3 flex-1 px-8 md:px-28 lg:px-48 xl:px-80">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full rounded-full border bg-gray-100 py-2 pl-10 pr-4 text-sm focus:outline-primary"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell className="h-5 w-5 text-gray-600 transition hover:text-primary" />
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <button
            onClick={toggleLogin}
            className={`hidden rounded-full px-4 py-1.5 text-sm font-semibold transition sm:inline ${
              isLoggedIn
                ? 'border border-orange-500 bg-white text-orange-500 hover:bg-orange-50'
                : 'bg-orange-500 text-white hover:bg-orange-600'
            }`}
          >
            {isLoggedIn ? 'Đăng xuất' : 'Đăng nhập'}
          </button>

          <button onClick={toggleLogin} className="text-gray-700 hover:text-primary sm:hidden">
            {isLoggedIn ? (
              <LogOut className="h-5 w-5 text-orange-500" />
            ) : (
              <LogIn className="h-5 w-5 text-primary" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
