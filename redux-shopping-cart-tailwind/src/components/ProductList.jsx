import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Laptop', price: 800 },
  { id: 2, name: 'Smartphone', price: 500 },
  { id: 3, name: 'Headphones', price: 100 },
  { id: 4, name: 'Smartwatch', price: 150 }
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg shadow-sm bg-white">
            <h3 className="font-medium">{product.name}</h3>
            <p className="mt-2 text-gray-700">${product.price}</p>
            <button
              className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
