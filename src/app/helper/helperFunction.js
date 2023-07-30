import { userService } from "../api";
import { productService } from "../api/product.service";

import { createBrowserHistory } from "history";

export const helperService = {
  getCustomerJwt,
  getCustomerQuote_Id,
  addProductForServer,
  getCategoiresProductByName,
  createShippingDataForServer,
};

function getCustomerJwt() {
  if (localStorage.getItem("jwtToken")) {
    return JSON.parse(localStorage.getItem("jwtToken"));
  } else {
    return false;
  }
}

function getCustomerQuote_Id() {
  if (localStorage.getItem("jwtToken") && localStorage.getItem("quote_Id")) {
    return JSON.parse(localStorage.getItem("quote_Id"));
  } else {
    return userService.getCustomerQuoteId().then((response) => {
      if (response.status === 200) {
        localStorage.setItem("quote_Id", response.data);
        return response.data;
      }
    });
  }
}

function addProductForServer(sku_name, qunatity) {
  return {
    cart_item: {
      quote_id: getCustomerQuote_Id(),
      sku: sku_name,
      qty: qunatity,
    },
  };
}

function updateProductInCart() {}

function getCategoiresProductByName(
  category_name,
  pageSize = 12,
  pageNumber = 1,
  sortBy = "position",
  sidebar,
  price = "",
  sortOrder = "ASC"
) {
  productService.getCategoyId(category_name).then((categories) => {
    productService
      .getProductList(
        categories[0].id,
        pageSize,
        pageNumber,
        sortBy,
        sidebar,
        price,
        sortOrder
      )
      .then((productList) => {
        return productList;
      });
  });
}

function createShippingDataForServer(payload) {
  const details = {
    addressInformation: {
      shipping_address: {
        region: payload.country,
        region_id: payload.region_id,
        region_code: payload.region_code,
        country_id: payload.country_id,
        street: [payload.street],
        postcode: payload.postcode,
        city: payload.city,
        firstname: payload.firstname,
        lastname: payload.lastname,
        email: payload.email,
        telephone: payload.telephone,
        save_in_address_book: 1,
        same_as_billing: 1,
      },
      billing_address: {
        region: payload.country,
        region_id: payload.region_id,
        region_code: payload.region_code,
        country_id: payload.country_id,
        street: [payload.street],
        postcode: payload.postcode,
        city: payload.city,
        firstname: payload.firstname,
        lastname: payload.lastname,
        email: payload.email,
        telephone: payload.telephone,
        save_in_address_book: 1,
        same_as_billing: 1,
      },
      shipping_carrier_code: payload.shipping_carrier_code
        ? payload.shipping_carrier_code
        : "flatrate",
      shipping_method_code: payload.shipping_method_code
        ? payload.shipping_method_code
        : "flatrate",
    },
  };
  return details;
}

export const history = createBrowserHistory({ forceRefresh: true });
