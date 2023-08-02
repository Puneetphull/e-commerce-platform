import { CartConstant, userConstants } from "../../constants"
import { helperService } from "../../helper"

const ADDCARTREQUEST = (Product)=>{
    return {
        type:CartConstant.ADD_CART_REQUEST,
        payload:Product,
    }   
 }
 
 const ADDCARTSUCCESS = (success)=>{
     return {
      type:CartConstant.ADD_CART_SUCCESS,
      payload:success
     }
 }
 
 const ADDCARTFAILURE = (error)=>{
     return {
         type:CartConstant.ADD_CART_FAILURE,
         payload:error
 
     }
 }

 const GETITEMSREQUEST = ()=>{
    return {
        type:CartConstant.GETALL_ITEMS_CART_REQUEST,
    } 
 }
 
 const GETITEMSSUCCESS=(Items)=>{
     return {
         type:CartConstant.GETALL_ITEMS_CART_SUCCESS,
         payload:Items
     }
 }
 
 const GETITEMSFAILURE = (error)=>{
     return {
         type:CartConstant.GETALL_ITEMS_CART_FAILURE,
         payload:error
     }
 }


 const REMOVECARTITEMREQUEST = (itemId)=>{
    return {
        type:CartConstant.REMOVE_CART_REQUEST,
        payload:itemId
    }
}

const REMOVECARTITEMSUCCESS = (success)=>{
    return {
      type:CartConstant.REMOVE_CART_SUCCESS,
      paylaod:success
    }
}

const REMOVECARTITEMFAILURE = (error)=>{
    return {
        type:CartConstant.REMOVE_CART_FAILURE,
    
    }
}


const GETSUBTOTALSUCCESS = (success)=>{
  return {
    type:CartConstant.GETCARTSUBTOTALSUCCESS,
    payload:success
  }
}

const GETSUBTOTALFAILURE = (failure)=>{
    return {
        type:CartConstant.GETCARTSUBTOTALFAILURE,
        payload:failure
    }
}

function ADDSHIPPINGSADDRESSREQUEST(address){
    return {
      type:userConstants.USERS_SHIPPING_ADDRESS_REQUEST,
      payload:helperService.createShippingDataForServer(address)
    }
  }
  
  function ADDSHIPPINGADDRESSSUCCESS(message){
    return {
      type:userConstants.USERS_SHIPPING_ADDRESS_SUCCESS,
      payload:message
    }
  }

  function ADDSHIPPINGADDRESSFAILURE(error){
    return {
      type:userConstants.USERS_SHIPPING_ADDRESS_FAILURE,
      payload:error
    }
  }

  const INCREMENTSINGLEPRODUCTQTY = (item)=>{
    return {
        type:CartConstant.INCREMENT_QTY_SINGLE_PRODUCT,
        payload:item
    }
}

const DECREMENTSINGLEPRODUCTQTY = (item)=>{
    return {
        type:CartConstant.DECREMENT_QTY_SINGLE_PRODUCT,
        payload:item
    }
}


const UPDATE_PRODUCT_CART_REQUEST = (payload)=>{
  return {
      type:CartConstant.UPDATE_PRODUCT_CART_REQUEST,
      payload:payload
  }
}
const UPDATE_PRODUCT_CART_SUCCESS = (success)=>{
  return {
      type:CartConstant.UPDATE_PRODUCT_CART_SUCCESS,
      payload:success
  }
}
const UPDATE_PRODUCT_CART_FAILURE = (failure)=>{
  return {
      type:CartConstant.UPDATE_PRODUCT_CART_FAILURE,
      payload:failure
  }
}









 export const  cartActions = {
    ADDCARTREQUEST,
    ADDCARTSUCCESS,
    ADDCARTFAILURE,
    GETITEMSREQUEST,
    GETITEMSSUCCESS,
    GETITEMSFAILURE,
    REMOVECARTITEMREQUEST,
    REMOVECARTITEMSUCCESS,
    REMOVECARTITEMFAILURE,
    GETSUBTOTALSUCCESS,
    GETSUBTOTALFAILURE,
    ADDSHIPPINGSADDRESSREQUEST,
    ADDSHIPPINGADDRESSSUCCESS,
    ADDSHIPPINGADDRESSFAILURE,
    INCREMENTSINGLEPRODUCTQTY,
    DECREMENTSINGLEPRODUCTQTY,
    UPDATE_PRODUCT_CART_REQUEST,
    UPDATE_PRODUCT_CART_SUCCESS,
    UPDATE_PRODUCT_CART_FAILURE
}