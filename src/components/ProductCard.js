import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoriteContext.js";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ProductCard({ product }) {
  const { favorites, dispatch } = useFavorites();
  const isFavorite = favorites.some(item => item.id === product.id);
  const [animate, setAnimate] = useState(false);

  const toggleFavorite = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300); // Reset animation

    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: product.id });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: product });
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>

      <div className="mt-2 flex items-center justify-between">
        <Link
          to={`/product/${product.id}`}
          className="text-blue-500 hover:underline"
        >
          View Details
        </Link>

        <button
          onClick={toggleFavorite}
          className={`text-red-500 transition-transform ${animate ? "animate-pop" : ""}`}
          aria-label="Toggle Favorite"
        >
          {isFavorite ? (
            <SolidHeartIcon className="w-5 h-5" />
          ) : (
            <OutlineHeartIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}
