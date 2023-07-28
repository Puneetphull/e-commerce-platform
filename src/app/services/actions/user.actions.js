import { userConstants } from "../../constants";

export const usersActions = {
  REGITSER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  FORGETPASSWORDREQUEST,
  FORGETPASSWORDSUCCESS,
  FORGETPASSWORDFAILURE,
  RESETPASSWORDREQUEST,
  RESETPASSWORDSUCCESS,
  RESTPASSWORDFAILURE,
  UPDATEUSERDETAILREQUEST,
  UPDATEUSERDETAILSUCCESS,
  UPDATEUSERDETAILFAILURE,
  ADDSHIPPINGSADDRESSREQUEST,
  ADDSHIPPINGADDRESSSUCCESS,
  ADDSHIPPINGADDRESSFAILURE,
  ADDPAYMENTMETHODREQUEST,
  ADDPAYMENTMETHODSUCCESS,
  ADDPAYMENTMETHODFAILURE,
  PLACEORDERREQUEST,
  PLACEORDERSUCCESS,
  PLACEORDERFAILURE,
  USERSADDADDRESSREQUEST,
  USERSADDADDRESSSUCCESS,
  USERSADDADDRESSFAILURE,
  UserChangePasswordRequest,
  UserChangePasswordSuccess,
  UserChangePasswordFailure,
  CONATACTUSREQUEST,
  CONTACTUSSUCCESS,
  CONATACTUSFAILURE,
  // SENDINVITATIONREQUEST,
  SENDINVITATIONSUCCESS,
  SENDINVITATIONFAILURE,
  NEWSLETTERSUBSCRIBEREQUEST,
  NEWSLETTERUNSUBSCRIBEREQUEST,
  //   GIFT_CARD_REQUEST,
  //   GIFT_CARD_SUCCESS,
  //   GIFT_CARD_FAILURE,
  //   GIFT_CARD_STATUS_REQUEST,
  //   GIFT_CARD_STATUS_SUCCESS,
  //   GIFT_CARD_STATUS_FAILURE,
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAILURE,
  DELTE_MULTIADDRESS_REQUEST,
  DELTE_MULTIADDRESS_SUCCESS,
  DELTE_MULTIADDRESS_FAILURE,
  EDITUSERADDRESSREQUEST,
  EDITUSERADDRESSSUCCESS,
  EDITMULTIADDRESSEFAILURE,
  REORDERREQUEST,
  REORDERSUCCESS,
  REORDERFAILURE,
  //   REMOVE_GIFT_CARD_REQUEST,
  //   REMOVE_GIFT_CARD_SUCCESS,
  //   REMOVE_GIFT_CARD_FAILURE,
  Add_Billing_address_Request,
  Add_Billing_Address_Success,
  Add_Billing_Address_Failure,
  //   REDEEMGIFTCARDREQUEST,
  //   REDEEMGIFTCARDSUCCESS,
  //   REDEEMGIFTCARDFAILURE,
  GETINVITATIONLISTSUCCESS,
  GETINVITATIONLISTFAILURE,
  //   GIFTCREDITREQUEST,
  //   GIFTCREDITSUCCESS,
  //   GIFTCREDITFAILURE,
  GET_MY_ORDERS_REQUEST,
  GET_MY_ORDERS_SUCCESS,
  GET_MY_ORDERS_FAILURE,
  //   ADDSTORECREDITREQUEST,
  //   ADDSTORECREDITSUCCESS,
  //   ADDSTORECREDITFAILURE,
  //   REMOVESTORECREDITREQUEST,
  //   REMOVESTORECREDITSUCCESS,
  //   REMOVESTORECREDITFAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
};

function LOGIN_REQUEST(loginDetails) {
  return {
    type: userConstants.LOGIN_REQUEST,
    payload: loginDetails,
  };
}

function LOGIN_SUCCESS({ success }) {
  return {
    type: userConstants.LOGIN_SUCCESS,
    payload: success,
  };
}

function LOGIN_FAILURE({ error }) {
  return {
    type: userConstants.LOGIN_FAILURE,
    payload: error,
  };
}

function REGITSER_REQUEST(userDetails) {
  return {
    type: userConstants.REGISTER_REQUEST,
    payload: userDetails,
  };
}

function REGISTER_SUCCESS({ success }) {
  return {
    type: userConstants.REGISTER_SUCCESS,
    payload: success,
  };
}

function REGISTER_FAILURE({ error }) {
  return {
    type: userConstants.REGISTER_FAILURE,
    payload: error,
  };
}


function GET_MY_ORDERS_REQUEST(data) {
  return {
    type: userConstants.GETMYORDERSREQUEST,
    payload: data,
  };
}

function GET_MY_ORDERS_SUCCESS(success) {
  return {
    type: userConstants.GETMYORDERSSUCCESS,
    payload: success,
  };
}
function GET_MY_ORDERS_FAILURE(error) {
  return {
    type: userConstants.GETMYORDERSFAILURE,
    payload: error,
  };
}

function GET_USER_DETAILS_REQUEST(dropvalue, currentPage, sort) {
  return {
    type: userConstants.GETUSERDETAILREQUEST,
    payload: dropvalue,
    currentPage: currentPage,
    sort: sort,
  };
}
function GET_USER_DETAILS_SUCCESS(success, allorders) {
  return {
    type: userConstants.GETUSERDETAILSUCCESS,
    payload: { success, allorders },
  };
}
function GET_USER_DETAILS_FAILURE(error) {
  return {
    type: userConstants.GETUSERDETAILREQUEST,
    payload: error,
  };
}
function FORGETPASSWORDREQUEST(userdetails) {
  return {
    type: userConstants.FORGETPASSWORD_REQUEST,
    payload: userdetails,
  };
}

function FORGETPASSWORDSUCCESS(success_message) {
  return {
    type: userConstants.FORGETPASSWORD_SUCCESS,
    success_message,
  };
}

function FORGETPASSWORDFAILURE(error) {
  return {
    type: userConstants.FORGETPASSWORD_FAILURE,
    error,
  };
}

function RESETPASSWORDREQUEST(userdetails) {
  return {
    type: userConstants.RESETPASSWORD_REQUEST,
    payload: userdetails,
  };
}

function RESETPASSWORDSUCCESS(success_message) {
  return {
    type: userConstants.RESETPASSWORD_SUCCESS,
    success_message,
  };
}

function RESTPASSWORDFAILURE(error) {
  return {
    type: userConstants.RESETPASSWORD_FAILURE,
    error,
  };
}

function filteruserdetails(id, userdetails) {
  const details = {
    customer: {
      id: id,
      email: userdetails.email,
      firstname: userdetails.firstname,
      lastname: userdetails.lastname,

      website_id: 3,
    },
  };
  return details;
}

function UPDATEUSERDETAILREQUEST(id, userdetails) {
  return {
    type: userConstants.UPDATE_USERDETAIL_REQUEST,
    payload: filteruserdetails(id, userdetails),
  };
}

function UPDATEUSERDETAILSUCCESS(userdetails) {
  return {
    type: userConstants.UPDATE_USERDETAIL_SUCCESS,
    userdetails,
  };
}

function UPDATEUSERDETAILFAILURE(error) {
  return {
    type: userConstants.UPDATE_USERDETAIL_FAILURE,
    error,
  };
}

//address api
function userdetailsobject(id, details) {
  const detail = {
    customerId: id.id,
    email: id.email,
    firstName: details.firstname,
    lastName: details.lastname,
    company: details.company,
    regionCode: details.region_code ? details?.region_code : "",
    region: details.region,
    regionId: details.region_id,
    countryId: details.country_id,
    street: details.street,
    telephone: details.telephone,
    postCode: details.postcode,
    city: details.city,
    isDefaultBilling: details.isDefaultBilling,
    isDefaultShipping: details.isDefaultShipping,
  };
  return detail;
}

function USERSADDADDRESSREQUEST(id, details) {
  return {
    type: userConstants.USERS_ADDRESS_REQUEST,
    payload: userdetailsobject(id, details),
  };
}

function USERSADDADDRESSSUCCESS(success) {
  return {
    type: userConstants.USERS_ADDRESS_SUCCESS,
    payload: success,
  };
}
function USERSADDADDRESSFAILURE(error) {
  return {
    type: userConstants.USERS_ADDRESS_FAILURE,
    payload: error,
  };
}
//add shipping address object

function filterbodyshipping(payload) {
  const details = {
    addressInformation: {
      shipping_address: {
        region: payload.country,
        region_id: payload.region_id,
        region_code: payload.region_code,
        country_id: payload.country_id,
        street: payload.street,
        postcode: payload.postcode,
        city: payload.city,
        firstname: payload.firstname,
        lastname: payload.lastname,
        email: payload.email,
        telephone: payload.telephone,
        save_in_address_book: payload.save_in_address_book,
        same_as_billing: payload.same_as_billing,
      },
      billing_address: {
        region: payload.country,
        region_id: payload.region_id,
        region_code: payload.region_code,
        country_id: payload.country_id,
        street: payload.street,
        postcode: payload.postcode,
        city: payload.city,
        firstname: payload.firstname,
        lastname: payload.lastname,
        email: payload.email,
        telephone: payload.telephone,
        save_in_address_book: payload.save_in_address_book,
        same_as_billing: payload.same_as_billing,
      },
      shipping_carrier_code: payload.shipping_carrier_code,
      shipping_method_code: payload.shipping_method_code,
    },
  };
  return details;
}

function ADDSHIPPINGSADDRESSREQUEST(payload, id) {
  return {
    type: userConstants.USERS_SHIPPING_ADDRESS_REQUEST,
    payload: filterbodyshipping(payload),
    id,
  };
}

function ADDSHIPPINGADDRESSSUCCESS(message) {
  return {
    type: userConstants.USERS_SHIPPING_ADDRESS_SUCCESS,
    payload: { ...message },
  };
}

function ADDSHIPPINGADDRESSFAILURE(error) {
  return {
    type: userConstants.USERS_SHIPPING_ADDRESS_FAILURE,
    payload: error,
  };
}

function ADDPAYMENTMETHODREQUEST(details) {
  return {
    type: userConstants.USERS_ADDMETHOD_REQUEST,
    payload: details,
  };
}

function ADDPAYMENTMETHODSUCCESS(success) {
  return {
    type: userConstants.USERS_ADDMETHOD_SUCCESS,
    payload: success,
  };
}

function ADDPAYMENTMETHODFAILURE(error) {
  return {
    type: userConstants.USERS_ADDMETHOD_FAILIURE,
    payload: error,
  };
}

function PLACEORDERREQUEST(method) {
  return {
    type: userConstants.USERS_PLACEORDER_REQUEST,
    payload: method,
  };
}

function PLACEORDERSUCCESS(success) {
  return {
    type: userConstants.USERS_PLACEORDER_SUCCESS,
    payload: success,
  };
}

function PLACEORDERFAILURE(error) {
  return {
    type: userConstants.USERS_PLACEORDER_FAILURE,
    payload: error,
  };
}

function UserChangePasswordRequest(id, payload) {
  return {
    type: userConstants.USERS_CHANGEPASSWORD_REQUEST,
    payload: payload,
    id: id,
  };
}

function UserChangePasswordSuccess(success) {
  return {
    type: userConstants.USERS_CHANGEPASSWORD_SUCCESS,
    payload: success,
  };
}

function UserChangePasswordFailure(error) {
  return {
    type: userConstants.USERS_CHANGEPASSWORD_FAILURE,
    payload: error,
  };
}

function CONATACTUSREQUEST(payload) {
  return {
    type: userConstants.CONTACTUS_REQUEST,
    payload: payload,
  };
}

function CONTACTUSSUCCESS(success) {
  return {
    type: userConstants.CONTACTUS_SUCCESS,
    payload: success,
  };
}

function CONATACTUSFAILURE(failure) {
  return {
    type: userConstants.CONTACTUS_FAILURE,
    payload: failure,
  };
}

function GETINVITATIONLISTSUCCESS(success) {
  return {
    type: userConstants.GETINVITATIONSUCCESS,
    payload: success,
  };
}

function GETINVITATIONLISTFAILURE(error) {
  return {
    type: userConstants.GETINVITATIONFAILURE,
    payload: error,
  };
}

// function SENDINVITATIONREQUEST(details, id) {
//   let emails = [];
//   details?.email?.map(item => {
//     emails.push(item.email);
//   });
//   const invite = {
//     email: emails,
//     message: details.message,
//     customerId: id,
//     storeId: 2,
//   };
//   return {
//     type: userConstants.SENDINVITATIONREQUEST,
//     payload: invite,
//   };
// }

function SENDINVITATIONSUCCESS(success) {
  return {
    type: userConstants.SENDINVITATIONSUCCESS,
    payload: success,
  };
}

function SENDINVITATIONFAILURE(failure) {
  return {
    type: userConstants.SENDINVITATIONFAILURE,
    payload: failure,
  };
}

function NEWSLETTERSUBSCRIBEREQUEST(payload) {
  return {
    type: userConstants.NEWSLETTERSUBSCRIBEREQUEST,
    payload: payload,
  };
}

function NEWSLETTERUNSUBSCRIBEREQUEST(payload) {
  return {
    type: userConstants.NEWSLETTERUNSUBSCRIBEREQUEST,
    payload: payload,
  };
}

// function GIFT_CARD_REQUEST(payload){
// return {
//   type:CartConstant.GIFTCARDREQUEST,
//   payload:payload
// }
// }

// function GIFT_CARD_SUCCESS(success){
//   return {
//     type:CartConstant.GIFTCARDSUCCESS,
//     payload:success
//   }
// }

// function GIFT_CARD_FAILURE(failure){
//   return {
//     type:CartConstant.GIFTCARDFAILURE,
//     payload:failure
//   }
// }
// function REMOVE_GIFT_CARD_REQUEST(code){
//   return {
// type:CartConstant.REMOVEGIFTCARDREQUEST,
// payload:code
//   }
// }
// function REMOVE_GIFT_CARD_FAILURE(error){
//  return{
//    type:CartConstant.REMOVEGIFTCARDFAILURE,
//    payload:error
//  }
// }

// function REMOVE_GIFT_CARD_SUCCESS(success){
//   return {
//     type:CartConstant.REMOVEGIFTCARDSUCCESS,
//     payload:success
//   }
// }
// function GIFT_CARD_STATUS_REQUEST(payload){
//   return {
//     type:CartConstant.CHECKSTATUSGIFTCARDREQUEST,
//     payload:payload
//   }
//   }

//   function GIFT_CARD_STATUS_SUCCESS(success){
//     return {
//       type:CartConstant.CHECKSTATUSGIFTCARDSUCCESS,
//       payload:success
//     }
//   }

//   function GIFT_CARD_STATUS_FAILURE(failure){
//     return {
//       type:CartConstant.CHECKSTATUSGIFTCARDFAILURE,
//       payload:failure
//     }
//   }
// function Billing_Address_Customer_Request(payload){
//   return {
//     type:
//     payload:
//   }
// }

// Delete the address from the multiple address section

function DELTE_MULTIADDRESS_REQUEST(id) {
  return {
    type: userConstants.DELTEMULTIADDRESSREQUEST,
    payload: id,
  };
}

function DELTE_MULTIADDRESS_SUCCESS(success) {
  return {
    type: userConstants.DELTEMULTIADDRESSSUCCESS,
    payload: success,
  };
}

function DELTE_MULTIADDRESS_FAILURE(failure) {
  return {
    type: userConstants.DELTEMULTIADDRESSFALIURE,
    payload: failure,
  };
}

function EditAddressBody(details) {
  let body = {
    addressId: details.id,
    firstName: details.firstname,
    lastName: details.lastname,
    region: details.region,
    regionId: details.region_id,
    regionCode: details.regionCode,
    countryId: details.country_id,
    postCode: details.postcode,
    city: details.city,
    telephone: details.telephone,
    company: details.company,
    street: details.street,
    DefaultBilling: details.defaultBilling,
    DefaultShipping: details.defaultShipping ? details.defaultShipping : "",
  };
  return body;
}

function EDITUSERADDRESSREQUEST(details) {
  return {
    type: userConstants.EDITMULTIADDRESSEREQUEST,
    payload: EditAddressBody(details),
  };
}

function EDITUSERADDRESSSUCCESS(success) {
  return {
    type: userConstants.EDITMULTIADDRESSESUCCESS,
    payload: success,
  };
}

function EDITMULTIADDRESSEFAILURE(failure) {
  return {
    type: userConstants.EDITMULTIADDRESSEFAILURE,
    payload: failure,
  };
}

function Billing_Address_Body(payload) {
  const details = {
    address: {
      region: payload.region.region ? payload.region.region : payload.region,
      country_id: payload.country_id,
      street: payload.street,
      telephone: payload.telephone,
      postcode: payload.postcode,
      city: payload.city,
      firstname: payload.firstname,
      lastname: payload.lastname,
      email: payload.email,
      regionId: payload.region_id
        ? payload.region_id
        : payload.region.region_id,
    },
    useForShipping: false,
  };
  return details;
}

function Add_Billing_address_Request(payload) {
  return {
    type: userConstants.ADDBILLINGADDRESSREQUEST,
    payload: Billing_Address_Body(payload),
  };
}

function Add_Billing_Address_Success(success) {
  return {
    type: userConstants.ADDBILLINGADDRESSSUCCESS,
    payload: success,
  };
}

function Add_Billing_Address_Failure(failure) {
  return {
    type: userConstants.ADDBILLINGADDRESSFAILURE,
    payload: failure,
  };
}

function REORDERREQUEST(details) {
  return {
    type: userConstants.REORDERREQUEST,
    payload: details,
  };
}

function REORDERSUCCESS(success) {
  return {
    type: userConstants.REORDERSUCCESS,
    payload: success,
  };
}

function REORDERFAILURE(failure) {
  return {
    type: userConstants.REORDERFAILURE,
    payload: failure,
  };
}




// function GIFTCREDITREQUEST(request){
//   return {
//     type:CartConstant.GETSTORECREDITREQUEST,
//     payload:request
//   }
// }

// function GIFTCREDITSUCCESS (success){
//   return {
//     type:CartConstant.GETSTORECREDITSUCCESS,
//     payload:success
//   }
// }

// function GIFTCREDITFAILURE (error){
//   return {
//     type:CartConstant.GETSTORECREDITFAILURE,
//     payload:error
//   }
// }
// function REDEEMGIFTCARDREQUEST(code,details){
//   return {
//     type:CartConstant.REDEEMGIFTCARDREQUEST,
//     payload:code,
//     details:details
//   }
// }

// function REDEEMGIFTCARDSUCCESS(success){
//   return {
//     type:CartConstant.REDEEMGIFTCARDSUCCESS,
//     payload:success
//   }
// }

// function REDEEMGIFTCARDFAILURE(error){
//   return {
//     type:CartConstant.REDEEMGIFTCARDFAILURE,
//     payload:error
//   }
// }
// //Billing Address

// function ADDSTORECREDITREQUEST(details){
//   return {
//     type:CartConstant.STORECREDITADDREQUEST,
//     payload:details
//   }
// }

// function ADDSTORECREDITSUCCESS(success){
//   return {
//     type:CartConstant.STORECREDITADDSUCCESS,
//     payload:success
//   }
// }

// function ADDSTORECREDITFAILURE(error){
//   return {
//     type:CartConstant.STORECREDITADDFAILURE,
//     payload:error
//   }
// }

// function REMOVESTORECREDITREQUEST(details){
//   return {
//     type:CartConstant.STORECREDITREMOVEREQUEST,
//     payload:details
//   }
// }

// function REMOVESTORECREDITSUCCESS(success){
//   return {
//     type:CartConstant.STORECREDITREMOVESUCCESS,
//     payload:success
//   }
// }

// function REMOVESTORECREDITFAILURE(error){
//   return {
//     type:CartConstant.STORECREDITREMOVEFAILURE,
//     payload:error
//   }
// }
