import request from "./https.api";
import { helperService } from "../helper";

const token = '5b4d2tg1fnxbg7xcrlsmmkoxkd0gthp1';

export const userService = {
  regitserCustomer,
  login,
  getCustomerQuoteId,
  addProductCustomerCart,
  deleteItemFromCart,
  _updateItemInCart,
  getCartList,
  addShippingAddress
};

function regitserCustomer(users) {
  return request("rest/V1/customers", users, "POST", token);
}

async function login(username, password) {
  return request(
    `rest/V1/integration/customer/token`,
    username,
    "post",
    "",
    token
  );
}

function getCustomerQuoteId() {
  return request(
    `rest/V1/carts/mine`,
    "",
    "post",
    "",
    helperService.getCustomerJwt()
  );
}

function addProductCustomerCart(productDetails) {
  return request(
    `rest/V1/carts/${productDetails.quote_id}/items`,
    productDetails,
    "post",
    "",
    token
  );
}

function getCartList(){
  return request(
    `rest/V1/carts/${helperService.getCustomerQuote_Id()}/items`,
    '',
    'get',
    '',
    token
  )
}

function deleteItemFromCart(cartProductId){
  return request(`rest/V1/carts/${helperService.getCustomerQuote_Id()}/items/${cartProductId}`,'','DELETE','',token);
}

function _updateItemInCart(productDetails){
  return request(`rest/V1/carts/${helperService.getCustomerQuote_Id()}/items/${productDetails}`,'','PUT','',token);
}

function addShippingAddress( payload) {
  return request(
    `rest/V1/carts/${helperService.getCustomerQuote_Id()}/shipping-information`,
    payload,
    "POST",
    "",
    token
  );
}
