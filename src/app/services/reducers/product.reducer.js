import { CartConstant } from "../../constants";

const initialState = {
  productInCart: [],
  subTotal:{},
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CartConstant.ADD_CART_REQUEST:
      return {
        ...state,
      };
    case CartConstant.ADD_CART_SUCCESS:
      return {
        ...state,
      };

    case CartConstant.ADD_CART_FAILURE:
      return {
        ...state,
      };
    case CartConstant.GETALL_ITEMS_CART_REQUEST:
      return {
        ...state,
      };
    case CartConstant.GETALL_ITEMS_CART_SUCCESS:
      return {
        ...state,
        productInCart: action.payload,
      };
    case CartConstant.GETALL_ITEMS_CART_FAILURE:
      return {
        ...state,
      };
      case CartConstant.GETCARTSUBTOTALSUCCESS:
        return {
          ...state,
          subTotal:action.payload
        };
    default:
      return {
        ...state
      }
  }
}
