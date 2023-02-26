import React from "react";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
export default function Checkout() {
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="text-center text-2xl mt-8 font-bold text-slate-800">
          Shopping Cart
        </h1>
        <div className=" p-6 mt-8  font-semibold text-slate-600">
          <div className="border-b border-t border-gray-200 p-6 flex flex-row justify-around w-11/12 mx-auto">
            <div className=" w-1/4 flex flex-col justify-center items-center">
              <p className="">Product</p>
              <hr className="mt-4  w-1/5 h-0.5"></hr>
              <img
                src="https://i.imgur.com/ykw3qHK.png "
                alt="error"
                width="100px"
                height="100px"
                className="mt-12"
              />
            </div>
            <div className="w-1/6 flex flex-col items-center">
              <p>Quantity</p>
              <hr className="mt-4 text-gray-200  w-1/5 "></hr>
              <div className="flex justify-center items-center h-full w-full text-xl">
                <IoMdAdd className="mr-2 text-sm text-blue-500 h-8  w-5 rounded-md hover:bg-gray-200" />
                <p>1</p>
                <AiOutlineMinus className="ml-2 text-sm text-blue-500 h-8  w-5 rounded-md hover:bg-gray-200" />
              </div>
            </div>
            <div className="w-1/6 flex flex-col items-center">
              <p>Remove</p>
              <hr className="mt-4  text-gray-200  w-1/5 "></hr>
              <div className="flex justify-center items-center h-full w-full text-xl">
                <p className="text-red-500">Remove</p>
              </div>
            </div>
            <div className="w-1/6 flex flex-col items-center">
              <p>Total</p>
              <hr className="mt-4  text-gray-200  w-1/5 "></hr>
              <div className="flex justify-center items-center h-full w-full text-xl">
                <p>$350</p>
              </div>
            </div>
          </div>
          {/* <div className="border-b border-t border-gray-200 p-6 flex flex-row justify-around w-11/12 mx-auto">
            <div className=" w-1/4 flex flex-col justify-center items-center">
              <p className="">Product</p>
              <hr className="mt-4  w-1/5 h-0.5"></hr>
              <img
                src="https://i.imgur.com/ykw3qHK.png "
                alt="error"
                width="100px"
                height="100px"
                className="mt-12"
              />
            </div>
            <div className="w-1/6 flex flex-col items-center">
              <p>Quantity</p>
              <hr className="mt-4 text-gray-200  w-1/5 "></hr>
              <div className="flex justify-center items-center h-full w-full text-xl">
                <IoMdAdd className="mr-2 text-sm text-blue-500 h-8  w-5 rounded-md hover:bg-gray-200" />
                <p>1</p>
                <AiOutlineMinus className="ml-2 text-sm text-blue-500 h-8  w-5 rounded-md hover:bg-gray-200" />
              </div>
            </div>
            <div className="w-1/6 flex flex-col items-center">
              <p>Remove</p>
              <hr className="mt-4  text-gray-200  w-1/5 "></hr>
              <div className="flex justify-center items-center h-full w-full text-xl">
                <p className="text-red-500">Remove</p>
              </div>
            </div>
            <div className="w-1/6 flex flex-col items-center">
              <p>Total</p>
              <hr className="mt-4  text-gray-200  w-1/5 "></hr>
              <div className="flex justify-center items-center h-full w-full text-xl">
                <p>$350</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
