import { takeEvery, call, put } from "redux-saga/effects";
import { CartConstant, userConstants } from "../../constants";
import { productService, userService } from "../../api";
import { cartActions, loaderAction, usersActions } from "../actions";
import { customRoutes } from "../../routes/routes";
import { Notification } from "../../helper/toaster.service";
import { history } from "../../helper";

function* login(users) {
  try {
    const response = yield call(() => userService.login(users.payload));
    if (response.status === 200) {
      localStorage.setItem("jwtToken", JSON.stringify(response.data));
      const cart_Id = yield call(() => userService.getCustomerQuoteId());
      localStorage.setItem("quote_Id", JSON.stringify(cart_Id.data));
      yield put(usersActions.LOGIN_SUCCESS(response.data));
      Notification("success", "Logged in Successfully");
      history.push(customRoutes.adminHome.path);
    }
  } catch (error) {
    yield put(usersActions.LOGIN_FAILURE(error));
  }
}

function* register(user) {
  try {
    const response = yield call(() =>
      userService.regitserCustomer(user.payload)
    );
    if (response.status === 200) {
      yield put(usersActions.REGISTER_SUCCESS(response));
      Notification("success", "Account is Created Successfully");
      history.push(customRoutes.adminLogin.path);
    }
  } catch (err) {
    Notification("warning", "Please try aftersome Time");
    yield put(usersActions.REGISTER_FAILURE(err));
  }
}

function* addproduct(productDetail) {
  try {
    const response = yield call(() =>
      userService.addProductCustomerCart(productDetail.payload)
    );
    if (response.status === 200) {
      Notification("success", "Product is Add to cart");
    }
  } catch (err) {
    Notification("warning", "There is some problem");
    yield put(cartActions.ADDCARTFAILURE(err));
  }
}

function* getUserCartItems() {
  try {
    yield put(loaderAction.isLoadingTrue());
    const response = yield call(() => userService.getCartList());
    if (response.status === 200) {
      const res = yield call(() => productService.subTotalApi());
      if (res.status === 200) {
        yield put(loaderAction.isLoadingFalse());
        yield put(cartActions.GETSUBTOTALSUCCESS(res.data));
        yield put(cartActions.GETITEMSSUCCESS(response.data));
      }
    }
  } catch (err) {
    yield put(cartActions.GETITEMSFAILURE(err));
  }
}

function* deleteItemFromCart(ItemId) {
  try {
    yield put(loaderAction.isLoadingTrue());
    const response = yield call(() =>
      userService.deleteItemFromCart(ItemId.payload)
    );
    if (response.status === 200) {
      const response = yield call(() => userService.getCartList());
      if (response.status === 200) {
        yield put(loaderAction.isLoadingFalse());
        yield put(cartActions.GETITEMSSUCCESS(response.data));
        yield put(cartActions.REMOVECARTITEMSUCCESS(response.data));
        Notification("success", "Product is Removed SuccessFully");
      }
    }
  } catch (err) {
    yield put(cartActions.REMOVECARTITEMFAILURE(err));
  }
}

function* Addshippingaddress(payload) {
  const result = yield call(() => {
    return userService.addShippingAddress(payload.payload);
  });
  if (result.status === 200) {
    Notification("success", "Address is Added Successflully");
    history.push('/payment');
  } else {
    yield put(usersActions.ADDSHIPPINGADDRESSFAILURE(result.data));
    Notification("warning", "there is some problem");
  }
}

function* placeOrder(paymentMethod) {
  let response = yield call(() =>
    productService.placeorder(paymentMethod.payload)
  );
  if (response.status === 200) {
    const res = yield call(() => userService.getCustomerQuoteId());
    if (res.status === 200) {
      localStorage.setItem("quote_Id", JSON.stringify(res.data));
      Notification("success", "Order is Placed");
      history.push('/success');
    }
    yield put(usersActions.PLACEORDERSUCCESS(response.data));
  } else {
    yield put(usersActions.PLACEORDERFAILURE(response.data));
  }
}
export function* fetchUser() {
  yield takeEvery(userConstants.LOGIN_REQUEST, login);
  yield takeEvery(userConstants.REGISTER_REQUEST, register);
  yield takeEvery(CartConstant.ADD_CART_REQUEST, addproduct);
  yield takeEvery(CartConstant.GETALL_ITEMS_CART_REQUEST, getUserCartItems);
  yield takeEvery(CartConstant.REMOVE_CART_REQUEST, deleteItemFromCart);
  yield takeEvery(
    userConstants.USERS_SHIPPING_ADDRESS_REQUEST,
    Addshippingaddress
  );
  yield takeEvery(userConstants.USERS_PLACEORDER_REQUEST, placeOrder);
}
