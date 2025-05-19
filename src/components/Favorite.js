import { useFavorites } from '../context/FavoriteContext.js';
import { Link } from 'react-router-dom';

export default function FavoritesPage() {
  const { favorites, dispatch } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600 text-lg">
        You have no favorite items.
      </div>
    );
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {favorites.map(product => (
        <div key={product.id} className="border p-4 rounded shadow relative">
          <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-2" />
          <h2 className="font-semibold">{product.name}</h2>
          <p>${product.price}</p>
          <div className="flex justify-between items-center mt-2">
            <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
            <button
              onClick={() => dispatch({ type: "REMOVE_FAVORITE", payload: product.id })}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
