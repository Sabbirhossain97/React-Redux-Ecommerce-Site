import {ActionTypes} from "../contents/action-types"

export const setProducts= (products)=> {
    return {
      type: ActionTypes.SET_PRODCUTS,
      payload: products,
    };
}
export const selectedProducts = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};
export const removeSelectedProducts = (products) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload: products,
  };
};

export const incrementProducts = (products) => {
  return {
    type: ActionTypes.INCREMENT_PRODUCT,
    payload: products,
  };
};

export const addProductsToCart = (products) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: products,
  };
};

