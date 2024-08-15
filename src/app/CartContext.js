"use client";
import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Store = createContext("");

const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // setCart([...cart, item]);
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        //if the item already exists, do not add it again
        //removeonbuild
        // console.log("item already exists in cart:", item);
        //add snackbar, that says"item already in cart, you can visit your cart to change quantity"
        toast.info("Item already in cart. Visit your cart to change quantity.");
        return prevCart;
      } else {
        toast.success("Item added to cart");
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  //   const removeFromCart = (itemId) => {
  //     setCart(cart.filter((item) => item.id !== itemId));
  //   };

  //   const adjustQuantity = (itemId, amount) => {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === itemId
  //           ? { ...item, quantity: item.quantity + amount }
  //           : item
  //       )
  //     );
  //   };

  return (
    <Store.Provider value={{ cart, addToCart }}>
      {children}
      <ToastContainer />
    </Store.Provider>
  );
};

export { Store, StoreProvider };
