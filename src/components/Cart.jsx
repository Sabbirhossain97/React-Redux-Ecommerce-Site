import React from "react";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
export default function Checkout() {
  const getCart = useSelector((state) => state.cartProducts.cart);
  console.log(getCart);
  return (
    <div>
      <div className="p-6 min-h-screen w-11/12 mx-auto">
        <h1 className="text-center text-2xl mt-8 font-bold text-slate-800">
          Shopping Cart
        </h1>
        <div className="p-6 mt-8 font-semibold text-slate-600">
          {getCart.map((item, key) => (
            <div
              key={key}
              className="border-b border-t border-gray-200 p-6 flex flex-row justify-around w-full"
            >
              <div className="w-1/4 flex flex-row items-center justify-start">
                <img
                  src={item.image}
                  alt="error"
                  width="200px"
                  height="200px"
                  className="border border-gray-200 p-4 mt-12 rounded-md"
                />
                <div className="text-left flex flex-col">
                  <p className="ml-4 text-[16px] text-slate-800">
                    {item.title}
                  </p>
                  <p className="ml-4 text-left">
                    <span className="text-gray-500 text-[13px] ">
                      Category:{" "}
                    </span>
                    <span className="text-slate-800 text-[13px] font-bold">
                      {item.category}
                    </span>
                  </p>
                  <p className="text-gray-500 ml-4 text-left text-[13px]">
                    Rating:{" "}
                    <span className="text-blue-500">{item.rating?.rate}</span>
                  </p>
                </div>
              </div>
              <div className="w-1/6 flex flex-col items-center">
                <p>Quantity</p>
                <hr className="mt-4 text-gray-200  w-1/5 "></hr>
                <div className="flex justify-center items-center h-full w-full text-xl">
                  <div className="flex flex-row border border-gray-200 p-2 rounded-md">
                    <IoMdAdd className="cursor-pointer mr-2 text-sm text-blue-500 h-8  w-4 rounded-md hover:bg-gray-200" />
                    <p>1</p>
                    <AiOutlineMinus className="cursor-pointer ml-2 text-sm text-blue-500 h-8  w-4 rounded-md hover:bg-gray-200" />
                  </div>
                </div>
              </div>
              <div className="w-1/6 flex flex-col items-center">
                <p>Remove</p>
                <hr className="mt-4  text-gray-200  w-1/5 "></hr>
                <div className="flex justify-center items-center h-full w-full text-md">
                  <p className="text-red-500 text-2xl">
                    <BsTrash />
                  </p>
                </div>
              </div>
              <div className="w-1/6 flex flex-col items-center">
                <p>Total</p>
                <hr className="mt-4  text-gray-200  w-1/5 "></hr>
                <div className="flex justify-center items-center h-full w-full text-xl">
                  <p>${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-44 flex justify-end text-3xl font-semibold text-gray-700">
          Total $1000
        </div>
        <div className="text-xl p-12  h-44 flex flex-row justify-between items-center">
          <h2 className="border p-2">Continue Shopping</h2>
          <h2 className="border p-2">Proceed to Checkout</h2>
        </div>
      </div>
    </div>
  );
}
