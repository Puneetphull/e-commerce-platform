import { userConstants } from "../../constants";
import { helperService } from "../../helper";

const user = localStorage.getItem("jwtToken");

const customer = helperService.getCustomerDetails();

const initialState = user
  ? { isLoggedIn: true, user: customer,orderList:{
    totalCount:0,
    orders:[],
  } }
  : { isLoggedIn: false, isLoading: false };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        payload: action.payload,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        isLoading: false,
        payload: action.payload,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case userConstants.GETMYORDERSREQUEST:
      return {
        ...state
      }

    case userConstants.GETMYORDERSSUCCESS:
      
      return {
        ...state,
        orderList:{
          orders:action.payload.items,
          totalCount:action.payload.total_count
        } 
      }  
    case userConstants.LOGOUT:
      return { ...state };
    default:
      return { ...state };
  }
}
