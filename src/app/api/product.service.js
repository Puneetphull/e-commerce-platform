import request from "./https.api";

const token = process.env.REACT_APP_ADMIN_TOKEN;

export const productService = {
  getProductDetail,
  getProductList,
  getCategories
};

function getCategories(){
    return request('/rest/V1/categories','','get','',token);
}

function getProductDetail(sku_name) {
  return request(`$rest/V1/products/${sku_name}`, "", "get", "", token);
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
