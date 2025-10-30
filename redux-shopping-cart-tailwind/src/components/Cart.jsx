import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';

const Cart = () => {
  const { items, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-4 mt-6 bg-white border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-3">Shopping Cart</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center py-2 border-b">
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="font-semibold">${item.price * item.quantity}</div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-600 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-4 flex justify-between items-center">
            <div className="font-bold text-lg">Total: ${total}</div>
            <div>
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded mr-2"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
