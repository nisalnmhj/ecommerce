import { useCart } from '../context/CartContext.js';

export default function Cart() {
  const { cartItems, dispatch } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleIncrease = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };

  const handleDecrease = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  if (cartItems.length === 0) return (
    <div className="flex items-center justify-center h-screen p-4 bg-gray-50">
      <div className="text-center">
        <p className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty.</p>
        <p className="text-gray-500">Add some products to your cart to see them here.</p>
      </div>
    </div>
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
          <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
          <div className="flex-1 ml-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p>${item.price.toFixed(2)}</p>
            <div className="flex items-center mt-2">
              <button onClick={() => handleDecrease(item.id)} className="px-2 bg-gray-300">-</button>
              <span className="px-4">{item.quantity}</span>
              <button onClick={() => handleIncrease(item.id)} className="px-2 bg-gray-300">+</button>
              <button onClick={() => handleRemove(item.id)} className="ml-4 text-red-500">Remove</button>
            </div>
          </div>
        </div>
      ))}
      <div className="text-right text-xl font-bold mt-4">Total: ${totalPrice.toFixed(2)}</div>
    </div>
  );
}

