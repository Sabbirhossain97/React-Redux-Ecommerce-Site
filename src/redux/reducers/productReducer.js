import { ActionTypes } from "../contents/action-types";

const initialState = {
  products: [],
  totalProducts: 0,
  cart: []
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODCUTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const incrementProductReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.INCREMENT_PRODUCT:
      return {
        ...state,
        totalProducts: state.totalProducts + 1,
      };
    default:
      return state;
  }
};

export const addToCartReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart,payload]
      };
    default:
      return state;
  }
};
