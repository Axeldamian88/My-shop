import React from 'react';

const Cart = ({ items }) => {
  return (
    <div className="border p-4 rounded mb-4">
      <h2 className="text-xl font-bold">Carrito</h2>
      {items.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
