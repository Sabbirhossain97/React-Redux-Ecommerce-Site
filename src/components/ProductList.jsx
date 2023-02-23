import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { setProducts,incrementProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Home() {
  const products = useSelector((state) => state.allProducts.products);
  const productCounter= useSelector((state)=> state.productCounter.totalProducts)
  const renderedProducts = products;
  const dispatch = useDispatch();
  const getApidata = async () => {
    try {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => console.log(err));
      dispatch(setProducts(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApidata();
  }, []);
const addToCart = () => {
  dispatch(incrementProducts());
};
console.log(productCounter);
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex ">
            <div className="flex justify-center items-center p-2 border-t border-l border-b border-gray-300 rounded-l-xl">
              {" "}
              <AiOutlineSearch className="ml-2" />
            </div>
            <input
              type="text"
              className="outline-none h-12 rounded-r-xl w-11/12  border-t border-b border-r border-gray-300  shadow-sm"
              placeholder="Search products..."
            />
            <div className="relative flex justify-end items-center w-1/4 ">
              <AiOutlineShoppingCart className="text-2xl text-slate-600 " />
              <div className=" absolute top-1 -right-1 flex justify-center items-center h-[18px] w-[18px] bg-blue-500  rounded-full">
                <p className="text-center text-[10px] text-white ">
                  {productCounter}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {renderedProducts.map((item, key) => (
              <div
                className="p-6 group border rounded-lg shadow-md scale-95 hover:scale-100 hover:shadow-xl transition duration-300 flex flex-col items-center justify-center"
                key={key}
              >
                <div className=" aspect-w-1 aspect-h-1 w-1/2 h-1/2  overflow-hidden rounded-lg bg-white xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={item.image}
                    alt="error"
                    className="h-full w-full object-contain object-center group-hover:opacity-75"
                  />
                </div>
                <hr className="mt-4 bg-gray-300 w-full"></hr>
                <h3 className="mt-4 text-sm text-gray-700 text-center">
                  {item.title}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ${item.price}
                </p>
                <div className="flex flex-row justify-center w-full">
                  <Link to={`/productdetails/${item.id}`}>
                    <button className="mt-4 border border-blue-500 text-blue-500 hover:bg-gray-100 hover:text-blue-700 font-semibold py-2 px-4 rounded-lg">
                      Details
                    </button>
                  </Link>
                  <button
                    onClick={addToCart}
                    className="mt-4 ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
