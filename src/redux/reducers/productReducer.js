import { ActionTypes } from "../contents/action-types";

const initialState = {
  products: [],
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
