import { CartConstant } from "../../constants"

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


 export const  cartActions = {
    ADDCARTREQUEST,
    ADDCARTSUCCESS,
    ADDCARTFAILURE
}