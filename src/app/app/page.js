import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Productos</h2>
      <Cart /> {/* El carrito se maneja a través del contexto */}
      <ProductList products={products} /> {/* Pasar productos a ProductList */}
    </div>
  );
};

export default Home;
