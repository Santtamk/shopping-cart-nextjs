import React, { useContext } from "react";
import { Store, StoreProvider } from "../CartContext";

const CartPage = () => {
  const { cart } = useContext(Store);
  return (
    <div>
      <div>Yours items in cart</div>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default CartPage;
