import React, { useContext } from "react";
import { Store } from "../CartContext";

const Card = ({ item }) => {
  const { addToCart } = useContext(Store);

  return (
    <div
      className="bg-white sm:max-w-[24rem] md:max-w-full
       flex flex-col md:flex-row md:mb-2 sm:mx-0 lg:mx-10 md:mx-10 md:rounded-sm shadow-xl"
    >
      <img
        src={item.image}
        alt={item.title}
        className="mix-blend-multiply object-scale-down w-full h-full sm:w-96 sm:h-96  md:w-1/2 md:h-96
        "
      />
      <div className="px-2 pb-4 flex flex-col gap-2 md:w-1/2">
        <div>
          <div className="text-sm flex gap-3">
            <div>
              <span className="text-blue">X</span>
              <span className="underline decoration-blue text-black">
                clusive
              </span>
            </div>
            <div className="text-gray"> || </div>
            <div className="text-gray text-xs	flex items-center">
              {item.category}
            </div>
          </div>
        </div>
        <div className="overflow-hidden truncate text-black md:text-wrap font-semibold	">
          {item.title}
        </div>
        <div className="overflow-hidden truncate text-black md:text-wrap sm:hidden md:block lg:block">
          {item.description}
        </div>
        <div className="flex gap-2">
          <div className="line-through text-gray">
            ${Math.floor(item.price) + 10}
          </div>
          <div className="text-black font-semibold	">${item.price}</div>
        </div>
        <button
          className="bg-blue text-white rounded-md p-2 m-2 shadow-xl cursor-pointer hover:text-blue hover:bg-black md:w-fit md:m-0"
          onClick={() => addToCart(item)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
