import request from "./https.api";
import { helperService } from "../helper/helperFunction";
const token = "5b4d2tg1fnxbg7xcrlsmmkoxkd0gthp1";

export const productService = {
  getProductDetail,
  getProductList,
  getCategories,
  getCategoyId,
  getAllProductList,
  subTotalApi,
  getShippingMethod,
  getPaymentMethods,
  placeorder,
  userCartTotal,
  updateCartMultipleItem,
  getBanner,
  CMSPageContent,
  productWithCategoryId,
  cancelOrder
};

function getBanner() {
  return request(
    "rest/all/V1/codilar/bannerslider/slider/loadById/1",
    "",
    "GET",
    "",
    token
  );
}

function getCategories() {
  return request("/rest/V1/categories", "", "get", "", token);
}

function getProductDetail(sku_name) {
  return request(`rest/V1/products/${sku_name}`, "", "get", "", token);
}

function getProductList(
  category_id,
  pageSize,
  currentPage,
  SortBY,
  sidebar,
  price,
  SortAD
) {
  let data;
  if (
    sidebar.brand !== "" ||
    sidebar.colors !== "" ||
    SortBY.sort !== "" ||
    price.to !== "" ||
    price.from !== "" ||
    sidebar.size !== ""
  ) {
    data =
      '{products(filter:{category_id:{ eq:"' +
      category_id +
      '" },brand : { eq:"' +
      sidebar.brand +
      '" }, colors: { eq:"' +
      sidebar.colors +
      '" } , size : { eq:"' +
      sidebar.size +
      '" }, price:{from: "' +
      price.from +
      '", to: "' +
      price.to +
      '" }}, pageSize:' +
      pageSize +
      "  ,currentPage: " +
      currentPage +
      ", sort: {" +
      SortBY.sort +
      SortAD +
      "}) {aggregations{attribute_code count label options{ count label value }}total_count page_info {page_size current_page} items { id brand name sku short_description { html } image { url } price_range { minimum_price { regular_price { value currency } final_price { value currency } fixed_product_taxes { label amount {value currency }}}maximum_price { discount { amount_off percent_off } fixed_product_taxes { label amount { value currency } } } } }}}";
  }

  let query = {
    query: data,
    //   storeCode: `${store_view}`,
    catId: category_id,
  };
  return request(
    `/rest/V1/product/filtersCollection`,
    query,
    "POST",
    "",
    token
  );
}

function getCategoyId(category_name) {
  return request(
    `/rest/V1/categories/list?searchCriteria[filterGroups][0][filters][0][field]=url_path&searchCriteria[filterGroups][0][filters][0][value]=${category_name}&searchCriteria[filterGroups][0][filters][0][conditionType]=eq&fields=items[name,id]`,
    "",
    "get",
    "",
    token
  );
}

function getAllProductList(pageSize, currentPage, sortOrder) {
  return request(
    `rest/V1/products/?searchCriteria[filter_groups][0][filters][0][field]=website_id&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&searchCriteria[sortOrders][0][field]=created_at&searchCriteria[currentPage]=${currentPage}&searchCriteria[sortOrders][0][direction]=${sortOrder}&store_id=1&searchCriteria[pageSize]=${pageSize}`,
    "",
    "get",
    "",
    token
  );
}

function subTotalApi() {
  return request(
    `/rest/V1/carts/${helperService.getCustomerQuote_Id()}/totals`,
    "",
    "get",
    "",
    token
  );
}

function getShippingMethod() {
  return request(
    `rest/V1/carts/${helperService.getCustomerQuote_Id()}/shipping-methods`,
    "",
    "GET",
    "",
    token
  );
}

function getPaymentMethods() {
  return request(
    `rest/V1/carts/${helperService.getCustomerQuote_Id()}/payment-methods`,
    "",
    "get",
    "",
    token
  );
}

function CMSPageContent(store_id = 1, identifier_Name) {
  return request(
    `rest/V1/cmsBlock/search?searchCriteria[filterGroups][0][filters][0][field]=store_id&searchCriteria[filterGroups][0][filters][0][value]=${store_id}&searchCriteria[filterGroups][0][filters][0][condition_type]==&searchCriteria[filterGroups][1][filters][0][field]=identifier&searchCriteria[filterGroups][1][filters][0][value]=${identifier_Name}&searchCriteria[filterGroups][1][filters][0][condition_type]==`,
    "",
    "get",
    "",
    token
  );
}

function placeorder(method) {
  return request(
    `rest/V1/carts/${helperService.getCustomerQuote_Id()}/order`,
    method,
    "put",
    "",
    token
  );
}

function userCartTotal() {
  return request(
    `/rest/V1/carts/${helperService.getCustomerQuote_Id()}`,
    "",
    "get",
    "",
    token
  );
}

function updateCartMultipleItem(updateDetails) {
  return request(
    "rest/all/V1/netsmartz/multipleupdate",
    updateDetails,
    "put",
    "",
    token
  );
}

function productWithCategoryId(categoryId) {
  return request(
    `rest/V1/products/?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=${categoryId}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&fields=items[sku,name,id,price,custom_attributes]&searchCriteria[pageSize]=20&searchCriteria[sortOrders][0][field]=created_at`,
    "",
    "GET",
    "",
    token
  );
}

function cancelOrder(orderId){
  return  request(`/rest/V1/orders/${orderId}/cancel`,'','post','',token)
}
