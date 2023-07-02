export const helperService = {
  getCustomerJwt,
  getCustomerQuote_Id,
  addProductForServer
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