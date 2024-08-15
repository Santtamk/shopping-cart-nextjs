"use client";
import React, { useContext } from "react";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { Store } from "../CartContext";
import Link from "next/link";

const NavBar = () => {
  //try to change font for the logo
  const { cart } = useContext(Store);

  return (
    <nav className="mx-6 mt-2 py-2 flex justify-between lg:mx-10 bg-white rounded-md px-4 shadow-xl">
      <div className="text-3xl ">
        <span className="text-blue">M</span>
        <span className="underline decoration-blue text-black">y</span>
        <span className="text-blue">S</span>
        <span className="underline decoration-blue text-black">tore</span>
      </div>
      <div className="flex justify-center items-center gap-2 text-black">
        <Link href="/cart">
          <PiShoppingCartSimpleDuotone />
          <span>{cart.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
