// src/components/ProductCard.js
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button onClick={addToCart} className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
        Agregar al Carrito
      </button>
    </div>
  );
}
