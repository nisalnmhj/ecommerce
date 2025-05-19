import { Link } from "react-router-dom";

export default  function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>

      <Link
        to={`/product/${product.id}`}
        className="mt-2 inline-block text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}


