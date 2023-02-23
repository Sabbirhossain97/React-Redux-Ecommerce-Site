import { combineReducers } from "redux";
import { productReducer, selectedProductReducer,incrementProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  selectedProducts: selectedProductReducer,
  productCounter: incrementProductReducer
});

export default reducers;