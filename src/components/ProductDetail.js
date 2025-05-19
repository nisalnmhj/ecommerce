import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext.js'; 

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    axios
      .get(`https://cart-api.alexrodriguez.workers.dev/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        title: product.name,
        price: product.price,
        image: product.image,
      },
    });
  };

  if (!product) return (<p className="text-xl font-semibold text-gray-700 mb-2 text-center">Loading...</p>);

  return (
  <div className="p-4 ">
    <Link
        to="/"
        className="absolute top-4 left-4 px-3 py-1 bg-gray-200 rounded shadow hover:bg-gray-300 text-gray-700 font-semibold"
      >
        ← Home
      </Link>

    <img
      src={product.image}
      alt={product.name}
      className="w-full max-w-md mx-auto"
    />
    <div className="max-w-md mx-auto text-center mt-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg mt-2">${product.price}</p>
      <p className="mt-2">{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  </div>
);
}


