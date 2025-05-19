import { useCart } from '../context/CartContext.js';
import { useFavorites } from '../context/FavoriteContext.js';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const { cartItems } = useCart();
  const { favorites } = useFavorites();
  const { darkMode, toggleDarkMode } = useTheme();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-bold text-xl hover:text-gray-300">
            DigitalNest Shop
          </Link>

          {/* 🌙 Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-white hover:scale-110 transition"
            title="Toggle Dark Mode"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-white" />
            )}
          </button>

          <Link to="/favorites" className="relative text-white hover:text-gray-300 ml-4">
            ❤️ Favorites
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-xs px-2 py-0.5 rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative text-white hover:text-gray-300 ml-4">
            🛒 Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
