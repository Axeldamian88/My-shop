// src/adapters/productAdapter.js
export const adaptProduct = (apiProduct) => ({
    id: apiProduct.id,
    title: apiProduct.title,
    price: apiProduct.price,
    image: apiProduct.image,
    // Puedes agregar más adaptaciones si necesitas
  });
  