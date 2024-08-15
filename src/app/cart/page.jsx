"use client";
import React, { useContext } from "react";
import { Store } from "../CartContext";

const CartPage = () => {
  const { cart } = useContext(Store);

  return (
    <div>
      <div>Yours items in cart</div>
      {cart.length === 0 ? (
        <div className="flex items-center justify-center font-bold decoration-blue underline">
          Your cart is empty
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="bg-white flex p-4 gap-3">
              <img
                src={item.image}
                alt={item.title}
                className="mix-blend-multiply object-scale-down w-20 h-20"
              />
              <div className="sm:w-4/5">
                <div className="overflow-hidden truncate text-black md:text-wrap font-semibold	text-wrap">
                  {item.title}
                </div>
                <div>
                  <button>-</button>
                  <div>{item.quantity}</div>
                  <button>+</button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CartPage;
