import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';


const CartList: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  console.log(cartItems)

  

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartList;