import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext.js';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { cartItems } = useCart();
  const totalItems  = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-bold text-xl hover:text-gray-300">
            DigitalNest Shop
          </Link>

         <Link to="/cart" className="relative text-white hover:text-gray-300">
            🛒 Cart
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
