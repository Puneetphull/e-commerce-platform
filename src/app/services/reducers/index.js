import { combineReducers } from "redux";
import { authentication } from "./auth.reducer";
import { cartReducer } from "./product.reducer";
import { loaderReducer } from "./loader.reducer";

const rootReducers = combineReducers({
  authentication,
  cartReducer,
  loaderReducer,
});

export default rootReducers;
