
import { productService } from "../api/product.service";


export const helperService = {
  getCustomerJwt,
  getCustomerQuote_Id,
  addProductForServer,
  getCategoiresProductByName
};

function getCustomerJwt() {
  if (localStorage.getItem("jwtToken")) {
    return JSON.parse(localStorage.getItem("jwtToken"));
  } else {
    return false;
  }
}

function getCustomerQuote_Id(){
    if(localStorage.getItem('jwtToken') && localStorage.getItem('quote_Id')){
        return JSON.parse(localStorage.getItem("quote_id"));
    }
}

function addProductForServer(sku_name,qunatity) {
  return {
    cart_item: {
      quote_id: getCustomerQuote_Id(),
      sku:sku_name ,
      qty: qunatity,
    },
  };
}

function getCategoiresProductByName(category_name,pageSize=12,pageNumber=1,sortBy="position",sidebar,price="",sortOrder="ASC"){
  productService.getCategoyId(category_name).then((categories)=>{
    productService.getProductList(categories[0].id,pageSize,pageNumber,sortBy,sidebar,price,sortOrder).then((productList)=>{
      return productList;
    })
  }) 
}
