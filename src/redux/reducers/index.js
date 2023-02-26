import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  incrementProductReducer,
  addToCartReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  selectedProducts: selectedProductReducer,
  productCounter: incrementProductReducer,
  cartProducts: addToCartReducer,
});

export default reducers;