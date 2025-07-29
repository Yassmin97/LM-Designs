import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Button from './Button';

const CartItems = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <p className="p-4 text-center">Varukorgen är tom.</p>;
  }

  return (
    <div className="p-4 space-y-4">
      {cart.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b pb-2"
        >
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600">Pris: {item.price} kr</p>
          </div>
          <Button
            onClick={() => removeFromCart(index)}
            className="bg-red-500 hover:bg-red-600"
          >
            Ta bort
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
