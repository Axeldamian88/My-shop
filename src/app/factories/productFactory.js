// src/factories/productFactory.js
export const createProduct = (data) => ({
    id: data.id,
    title: data.title,
    price: data.price,
    image: data.image,
    addToCart: () => {
      // Aquí puedes integrar la lógica para agregar el producto al carrito
      console.log(`${data.title} agregado al carrito`);
    }
  });
  