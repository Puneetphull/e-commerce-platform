import { userConstants } from "../../constants";

const user = localStorage.getItem("jwtToken");

const initialState = user ? { isLoggedIn: true } : { isLoggedIn: false,isLoading:false };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        isLoading:true,
        payload: action.payload,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        isLoading:false,
        payload: action.payload,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        isLoading:false,
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return false;
  }
}
