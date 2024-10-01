// src/components/ProductList.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { adaptProduct } from '../adapters/productAdapter';  // Importar el adaptador
import { createProduct } from '../factories/productFactory'; // Importar la fábrica

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        
        // Adaptar los datos de la API
        const adaptedProducts = response.data.map(adaptProduct);
        
        // Crear productos usando la fábrica
        const factoryProducts = adaptedProducts.map(createProduct);
        
        // Guardar los productos en el estado
        setProducts(factoryProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
