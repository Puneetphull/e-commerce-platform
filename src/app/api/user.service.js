import request from "./https.api";
import { helperService } from "../helper";

const token = process.env.REACT_APP_ADMIN_TOKEN;

export const userService = {
  getCustomerDetails,
  regitserCustomer,
  login,
  getCustomerQuoteId,
  addProductCustomerCart,
  deleteItemFromCart,
  _updateItemInCart,
  getCartList,
  addShippingAddress,
  customerOrdersList,
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

function getCartList() {
  return request(
    `rest/V1/carts/${helperService.getCustomerQuote_Id()}/items`,
    "",
    "get",
    "",
    token
  );
}

function deleteItemFromCart(cartProductId) {
  return request(
    `rest/V1/carts/${helperService.getCustomerQuote_Id()}/items/${cartProductId}`,
    "",
    "DELETE",
    "",
    token
  );
}

function _updateItemInCart(productDetails) {
  return request(
    `rest/V1/carts/${helperService.getCustomerQuote_Id()}/items/${productDetails}`,
    "",
    "PUT",
    "",
    token
  );
}

function addShippingAddress(payload) {
  return request(
    `rest/V1/carts/${helperService.getCustomerQuote_Id()}/shipping-information`,
    payload,
    "POST",
    "",
    token
  );
}

function customerOrdersList(customer_id, currentPage, PageSize = 5, sort = "ASC") {
  return request(
    `rest/V1/orders?searchCriteria[filterGroups][0][filters][0][field]=customer_id&searchCriteria[filterGroups][0][filters][0][value]=${customer_id}&searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[page_size]=${PageSize}&searchCriteria[sortOrders][0][field]=updated_at&searchCriteria[sortOrders][0][direction]=${sort}&searchCriteria[currentPage]=${currentPage}`,
    "",
    "get",
    "",
    token
  );
}

function getCustomerDetails(){
  return request(`rest/V1/customers/me`,'','GET','',helperService.getCustomerJwt());
}
