import {userConstants } from "../../constants";

const initialState = {
  isLoading: false,
};
export function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.ISLOADINGTRUE:
      return {
        ...state,
        isLoading: true,
      };

    case userConstants.ISLOADINGFALSE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return {
        ...state
      };
  }
}
