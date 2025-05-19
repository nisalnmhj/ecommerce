import { useFavorites } from '../context/FavoriteContext.js';
import { Link } from 'react-router-dom';

export default function FavoritesPage() {
  const { favorites, dispatch } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 text-lg">
        You have no favorite items.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.map(product => (
          <div
            key={product.id}
            className="border border-gray-300 dark:border-gray-700 p-4 rounded shadow bg-white dark:bg-gray-800"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover mb-2 rounded"
            />
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
    </div>
  );
}
