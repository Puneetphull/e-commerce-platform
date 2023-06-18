import { userConstants } from "../../constants";

const user = localStorage.getItem("jwtToken");

const initialState = user ? { isLoggedIn: true } : { isLoggedIn: false };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        payload: action.payload,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        payload: action.payload,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return false;
  }
}
