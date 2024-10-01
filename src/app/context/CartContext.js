// src/context/CartContext.js
import { createContext, useContext, useReducer } from 'react';

// Estado inicial del carrito
const initialState = {
  items: [],
};

// Crear contexto
const CartContext = createContext();

// Reducer para manejar acciones del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto
export const useCart = () => {
  return useContext(CartContext);
};
