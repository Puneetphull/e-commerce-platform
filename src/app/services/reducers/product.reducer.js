import { CartConstant } from "../../constants";

const initialState = {
  productInCart: [],
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CartConstant.ADD_CART_REQUEST:
      return {
        ...state,
        productInCart: state.productInCart.push(action.payload),
      };
    case CartConstant.ADD_CART_SUCCESS:
      return {
        ...state,
        productInCart: state.productInCart.push(action.payload),
      };

    case CartConstant.ADD_CART_FAILURE:
      return {
        ...state,
        productInCart: state.productInCart.push(action.payload),
      };
    default:
      return {};
  }
}
