import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">🛍️ Redux Shopping Cart</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
