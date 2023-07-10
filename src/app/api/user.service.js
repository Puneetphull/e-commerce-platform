import request from "./https.api";
import { helperService } from "../helper";

const token = process.env.REACT_APP_ADMIN_TOKEN;


export const userService = {
  login,
  getCustomerQuoteId,
  addProductCustomerCart

};

function login(username, password) {
  return request(
    `index.php/rest/V1/integration/customer/token`,
    JSON.stringify({ username, password }),
    "post",
    "",
    token
  );
}


function getCustomerQuoteId(){
    return request(
        `rest/V1/carts/mine`,
        '',
        'post',
        '',
        helperService.getCustomerJwt(),
    )
}

function addProductCustomerCart(productDetails){
  return request(
    `rest/V1/carts/${productDetails.quote_id}/items`,
    productDetails,
    'post',
    '',
    token,
  )
}
