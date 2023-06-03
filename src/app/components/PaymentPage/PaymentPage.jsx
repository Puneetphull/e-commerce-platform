import React from 'react'
import { cartlist } from '../../data/CartList'

export  function PaymentPage() {
  return (
    <section class="payment-page">
    <div class="container">
        <div class="progress-bar-sign-in">
          <div class="progress-bar-checkout-wrap">
              <ol class="progress-bar-checkout">
                  <li class="step-active">Shipping</li>
                  <li class="step-active">Review & Payments</li>
              </ol>    
          </div>
        
          <div class="estimated-total">
            <div class="estimated-title mb-2">
              Estimated Total
            </div>
            <div class="estimated-cost">
              $568.00
            </div>
          </div>
         
          <div class="sign-in-form">
                       
            <div class="mini-cart-icon">
              <a href="#" class="mini-cart-ref">
                <i class="fa fa-bag-shopping"></i>
                <span class="cart-qty">23</span>
              </a>
            </div>
                       
            <div class="sign-in-link-wrap">
                <a href="#" class="checkout-signin mt-3">Sign In</a>
            </div>
            <div class="review-form-wrap checkout-sign-in-form">
              <div class="form-heading-wrap">
                  <h3 class="mb-4">Sign In</h3>
                  <a href="#" class="close-form"><i class="fa fa-times"></i></a>
              </div>
              <form>
                <div class="form-group">
                  <label class="label-txt" for="Email Address">Email Address</label>
                  <input type="email" class="form-control" placeholder=""/>
                </div>
                <div class="form-group">
                  <label class="label-txt" for="Password">Password</label>
                  <input type="password" class="form-control" placeholder=""/>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                      <a href="#" class="checkout-forgot-password">Forgot Your Password?</a>
                  </div>
                  <div>
                      <button type="submit" class="btn btn-primary btn-black">Submit</button>
                  </div>
                </div>
              </form> 
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-lg-8 mb-5 checkout-block payment-block">
              <div class="checkout-form-head mt-5 mb-4">
                  <h2>Payment Method</h2>
              </div>
              <div class="payment-options-block">
                <div class="payment-option-common check-moneyorder-option">
                    <div class="payment-radio-btn-wrap">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="payment-option-radio" id="check-moneyorder"/>
                        <label class="form-check-label" for="check-moneyorder">
                          Check / Money order
                        </label>
                      </div>
                    </div>
                    <div class="billing-shipping-address d-none">
                      <div class="mybilling-checkbox mt-4 mb-3 ml-4">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="billingShipping" checked/>
                          <label class="form-check-label" for="billingShipping">
                            My billing and shipping address are the same
                          </label>
                        </div>
                      </div>
                      <div class="customer-details-wrap ml-5">
                        <p class="first-last-name">First Last</p>
                        <p class="address">sdf, dfjal, dsfals</p>
                        <p class="state">Chandigarh, Chandigarh 160001</p>
                        <p class="country">India</p>
                        <p class="mobile-no"><a href="tel:+4733378901">+47 333 78 901</a></p>
                      </div>
                      <div class="review-form-wrap shipping-address-form payment-address form ml-4">
                        <div class="row">
                          <div class="col-md-9">
                            <form>
                              <div class="form-group">
                                <label class="label-txt" for="First Name">First Name<sup>*</sup></label>
                                <input type="text" class="form-control" placeholder=""/>
                              </div>
                              <div class="form-group">
                                <label class="label-txt" for="Last Name">Last Name<sup>*</sup></label>
                                <input type="text" class="form-control" placeholder=""/>
                              </div>
                              <div class="form-group">
                                <label class="label-txt" for="Company">Company<sup>*</sup></label>
                                <input type="text" class="form-control" placeholder=""/>
                              </div>
                              <div class="form-group">
                                <label class="label-txt" for="Street Address">Street Address<sup>*</sup></label>
                                <div class="txt-13 mb-1">Street Address: Line 1</div>
                                <input type="text" class="form-control" placeholder=""/>
                                <input type="text" class="form-control" placeholder=""/>
                                <input type="text" class="form-control" placeholder=""/>
                              </div>
                              <div class="form-group">
                                <label class="label-txt" for="Country">Country<sup>*</sup></label>
                                <select class="form-control txt-13" id="Country">
                                  <option value="Afganistan">Afghanistan</option>
                                  <option value="Albania">Albania</option>
                                  <option value="Algeria">Algeria</option>
                                  <option value="American Samoa">American Samoa</option>
                                  <option value="Andorra">Andorra</option>
                                  <option value="Angola">Angola</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label class="label-txt" for="State/Province">State/Province<sup>*</sup></label>
                                <select class="form-control txt-13" id="State/Province">
                                  <option> Please Select a region, state or province</option>                
                                  <option value="AL">Alabama</option> 
                                  <option value="AK">Alaska</option> 
                                  <option value="AZ">Arizona</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label class="label-txt" for="City">City<sup>*</sup></label>
                                <input type="email" class="form-control" placeholder=""/>
                              </div>
                              <div class="form-group">
                                <label class="label-txt" for="Zip/Postal">Zip/Postal Code<sup>*</sup></label>
                                <input type="text" class="form-control" id="Zip/Postal"/>
                              </div>
                              <div class="form-group">
                                <label class="label-txt" for="Phone Number">Phone Number<sup>*</sup></label>
                                <div class="input-group">
                                  <input type="text" class="form-control" placeholder=""/>
                                  <div class="input-group-append">
                                    <span class="input-group-text" data-toggle="tooltip" data-placement="right" title="" data-original-title="For delivery questions."><i class="far fa-question-circle"></i></span>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div class="cancel-update-wrap text-right">
                          <a href="#" class="btn btn-blank">Cancel</a>
                          <a href="#" class="btn btn-black">Update</a>
                        </div> 
                      </div>
                      <div class="cancel-update-wrap text-right mt-4">
                        <a href="#" class="btn btn-black">Place Order</a>
                      </div> 
                    </div>
                </div>
                <div class="payment-option-common cc-braintree-option">
                    <div class="payment-radio-btn-wrap">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="payment-option-radio" id="CreditCard-Braintree"/>
                        <label class="form-check-label" for="CreditCard-Braintree">
                          Credit Card (Braintree)
                        </label>
                      </div>
                    </div>
                    <div class="billing-shipping-address d-none">
                      <div class="mybilling-checkbox mt-4 mb-3 ml-4">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="" checked/>
                          <label class="form-check-label" for="">
                            My billing and shipping address are the same
                          </label>
                        </div>
                      </div>
                      <div class="customer-details-wrap ml-5">
                        <p class="first-last-name">First Last</p>
                        <p class="address">sdf, dfjal, dsfals</p>
                        <p class="state">Chandigarh, Chandigarh 160001</p>
                        <p class="country">India</p>
                        <p class="mobile-no"><a href="tel:+4733378901">+47 333 78 901</a></p>
                      </div>
                      <div class="cc-options review-form-wrap mt-5">
                        <div class="form-group">
                          <label class="label-txt" for="Credit Card Number">Credit Card Number<sup>*</sup></label>
                          <input type="text" class="form-control cc-card-no" placeholder="4111 1111 1111 1111"/>
                          <div class="payments-options">
                            <span><img src="images/AE.png"/></span>
                            <span><img src="images/VI.png"/></span>
                            <span><img src="images/MC.png"/></span>
                            <span><img src="images/DI.png"/></span>
                            <span><img src="images/JCB.png"/></span>
                            <span><img src="images/DN.png"/></span>
                            <span><img src="images/MI.png"/></span>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="label-txt" for="Expiration Date">Expiration Date<sup>*</sup></label>
                          <input type="text" class="form-control cc-exp-date" placeholder="MM/YY"/>                        </div>
                        <div class="form-group">
                          <label class="label-txt" for="CVV">CVV<sup>*</sup></label>
                          <input type="text" class="form-control cc-cvv" placeholder="123"/>
                        </div>
                      </div>
                      <div class="review-form-wrap shipping-address-form payment-address form ml-4">
                        <div class="row">
                          <div class="col-md-9">
                            <form>
                              <div class="form-group">
                                <label class="label-txt" for="First Name">First Name<sup>*</sup></label>
                                <input type="text" class="form-control" placeholder=""/>
                              </div>
                              <div class="form-group">
                                <label class="label-txt" for="Last Name">Last Name<sup>*</sup></label>
                                <input type="text" class="form-control" placeholder=""/>
                              </div>
                              <div class="form-group">
                                <label class="label-txt" for="Company">Company<sup>*</sup></label>
                                <input type="text" class="form-control" placeholder=""/>
                              </div>
                              <div class="form-group">
                                <label class="label-txt" for="Street Address">Street Address<sup>*</sup></label>
                                <div class="txt-13 mb-1">Street Address: Line 1</div>
                                <input type="text" class="form-control" placeholder=""/>
                                <input type="text" class="form-control" placeholder=""/>
                                <input type="text" class="form-control" placeholder=""/>
                              </div>
                              <div class="form-group">
                                <label class="label-txt" for="Country">Country<sup>*</sup></label>
                                <select class="form-control txt-13" id="Country">
                                  <option value="Afganistan">Afghanistan</option>
                                  <option value="Albania">Albania</option>
                                  <option value="Algeria">Algeria</option>
                                  <option value="American Samoa">American Samoa</option>
                                  <option value="Andorra">Andorra</option>
                                  <option value="Angola">Angola</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label class="label-txt" for="State/Province">State/Province<sup>*</sup></label>
                                <select class="form-control txt-13" id="State/Province">
                                  <option> Please Select a region, state or province</option>                
                                  <option value="AL">Alabama</option> 
                                  <option value="AK">Alaska</option> 
                                  <option value="AZ">Arizona</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label class="label-txt" for="City">City<sup>*</sup></label>
                                <input type="email" class="form-control" placeholder=""/>
                              </div>
                              <div class="form-group">
                                <label class="label-txt" for="Zip/Postal">Zip/Postal Code<sup>*</sup></label>
                                <input type="text" class="form-control" id="Zip/Postal"/>
                              </div>
                              <div class="form-group">
                                <label class="label-txt" for="Phone Number">Phone Number<sup>*</sup></label>
                                <div class="input-group">
                                  <input type="text" class="form-control" placeholder=""/>
                                  <div class="input-group-append">
                                    <span class="input-group-text" data-toggle="tooltip" data-placement="right" title="" data-original-title="For delivery questions."><i class="far fa-question-circle"></i></span>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div class="cancel-update-wrap text-right">
                          <a href="#" class="btn btn-blank">Cancel</a>
                          <a href="#" class="btn btn-black">Update</a>
                        </div> 
                      </div>
                      <div class="cancel-update-wrap text-right mt-4">
                        <a href="#" class="btn btn-black disabled">Place Order</a>
                      </div>
                    </div>
                </div>
                {/* <div class="payment-option-common cc-amasty-option">
                  <div class="payment-radio-btn-wrap">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="payment-option-radio" id="CreditCard-amasty"/>
                      <label class="form-check-label" for="CreditCard-amasty">
                        Credit Card By Amasty
                      </label>
                    </div>
                  </div>
                  <div class="billing-shipping-address d-none">
                    <div class="mybilling-checkbox mt-4 mb-3 ml-4">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="" checked/>
                        <label class="form-check-label" for="">
                          My billing and shipping address are the same
                        </label>
                      </div>
                    </div>
                    <div class="customer-details-wrap ml-5">
                      <p class="first-last-name">First Last</p>
                      <p class="address">sdf, dfjal, dsfals</p>
                      <p class="state">Chandigarh, Chandigarh 160001</p>
                      <p class="country">India</p>
                      <p class="mobile-no"><a href="tel:+4733378901">+47 333 78 901</a></p>
                    </div>
                    <div class="review-form-wrap shipping-address-form payment-address form ml-4">
                      <div class="row">
                        <div class="col-md-9">
                          <form>
                            <div class="form-group">
                              <label class="label-txt" for="First Name">First Name<sup>*</sup></label>
                              <input type="text" class="form-control" placeholder=""/>
                            </div>
                            <div class="form-group">
                              <label class="label-txt" for="Last Name">Last Name<sup>*</sup></label>
                              <input type="text" class="form-control" placeholder=""/>
                            </div>
                            <div class="form-group">
                              <label class="label-txt" for="Company">Company<sup>*</sup></label>
                              <input type="text" class="form-control" placeholder=""/>
                            </div>
                            <div class="form-group">
                              <label class="label-txt" for="Street Address">Street Address<sup>*</sup></label>
                              <div class="txt-13 mb-1">Street Address: Line 1</div>
                              <input type="text" class="form-control" placeholder=""/>
                              <input type="text" class="form-control" placeholder=""/>
                              <input type="text" class="form-control" placeholder=""/>
                            </div>
                            <div class="form-group">
                              <label class="label-txt" for="Country">Country<sup>*</sup></label>
                              <select class="form-control txt-13" id="Country">
                                <option value="Afganistan">Afghanistan</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label class="label-txt" for="State/Province">State/Province<sup>*</sup></label>
                              <select class="form-control txt-13" id="State/Province">
                                <option> Please Select a region, state or province</option>                
                                <option value="AL">Alabama</option> 
                                <option value="AK">Alaska</option> 
                                <option value="AZ">Arizona</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label class="label-txt" for="City">City<sup>*</sup></label>
                              <input type="email" class="form-control" placeholder=""/>
                            </div>
                            <div class="form-group">
                              <label class="label-txt" for="Zip/Postal">Zip/Postal Code<sup>*</sup></label>
                              <input type="text" class="form-control" id="Zip/Postal"/>
                            </div>
                            <div class="form-group">
                              <label class="label-txt" for="Phone Number">Phone Number<sup>*</sup></label>
                              <div class="input-group">
                                <input type="text" class="form-control" placeholder=""/>
                                <div class="input-group-append">
                                  <span class="input-group-text" data-toggle="tooltip" data-placement="right" title="" data-original-title="For delivery questions."><i class="far fa-question-circle"></i></span>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div class="cancel-update-wrap text-right">
                        <a href="#" class="btn btn-blank">Cancel</a>
                        <a href="#" class="btn btn-black">Update</a>
                      </div> 
                    </div>
                    <div class="cc-options review-form-wrap mt-5">
                      <div class="amasty-pay-wrap">
                        <div class="btn-container">
                          <a href="#" class="amasty-pay-btn">Pay Now</a>
                        </div>
                        <div class="amasty-card-details mt-3">
                          <div class="amasty-card-details-left">
                            <p class="label-txt" for="Credit Card Number">Credit Card Number<sup>*</sup></p>
                            <input type="text" class="cc-card-no" placeholder="Card Number"/>
                          </div>
                          <div class="amasty-card-details-right">
                            <input type="text" class="cc-exp-date" placeholder="MM/YY"/>
                            <input type="text" placeholder="CVV"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="cancel-update-wrap text-right mt-2">
                      <a href="#" class="btn btn-black disabled">Place Order</a>
                    </div>
                  </div>
                </div> */}
                <div class="payment-option-common cash-on-delivery-option">
                  <div class="payment-radio-btn-wrap">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="payment-option-radio" id="CashOnDelivery"/>
                      <label class="form-check-label" for="CashOnDelivery">
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                  <div class="billing-shipping-address d-none">
                    <div class="mybilling-checkbox mt-4 mb-3 ml-4">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="" checked/>
                        <label class="form-check-label" for="">
                          My billing and shipping address are the same
                        </label>
                      </div>
                    </div>
                    <div class="customer-details-wrap ml-5">
                      <p class="first-last-name">First Last</p>
                      <p class="address">sdf, dfjal, dsfals</p>
                      <p class="state">Chandigarh, Chandigarh 160001</p>
                      <p class="country">India</p>
                      <p class="mobile-no"><a href="tel:+4733378901">+47 333 78 901</a></p>
                    </div>
                    <div class="review-form-wrap shipping-address-form payment-address form ml-4">
                      <div class="row">
                        <div class="col-md-9">
                          <form>
                            <div class="form-group">
                              <label class="label-txt" for="First Name">First Name<sup>*</sup></label>
                              <input type="text" class="form-control" placeholder=""/>
                            </div>
                            <div class="form-group">
                              <label class="label-txt" for="Last Name">Last Name<sup>*</sup></label>
                              <input type="text" class="form-control" placeholder=""/>
                            </div>
                            <div class="form-group">
                              <label class="label-txt" for="Company">Company<sup>*</sup></label>
                              <input type="text" class="form-control" placeholder=""/>
                            </div>
                            <div class="form-group">
                              <label class="label-txt" for="Street Address">Street Address<sup>*</sup></label>
                              <div class="txt-13 mb-1">Street Address: Line 1</div>
                              <input type="text" class="form-control" placeholder=""/>
                              <input type="text" class="form-control" placeholder=""/>
                              <input type="text" class="form-control" placeholder=""/>
                            </div>
                            <div class="form-group">
                              <label class="label-txt" for="Country">Country<sup>*</sup></label>
                              <select class="form-control txt-13" id="Country">
                                <option value="Afganistan">Afghanistan</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label class="label-txt" for="State/Province">State/Province<sup>*</sup></label>
                              <select class="form-control txt-13" id="State/Province">
                                <option> Please Select a region, state or province</option>                
                                <option value="AL">Alabama</option> 
                                <option value="AK">Alaska</option> 
                                <option value="AZ">Arizona</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label class="label-txt" for="City">City<sup>*</sup></label>
                              <input type="email" class="form-control" placeholder=""/>
                            </div>
                            <div class="form-group">
                              <label class="label-txt" for="Zip/Postal">Zip/Postal Code<sup>*</sup></label>
                              <input type="text" class="form-control" id="Zip/Postal"/>
                            </div>
                            <div class="form-group">
                              <label class="label-txt" for="Phone Number">Phone Number<sup>*</sup></label>
                              <div class="input-group">
                                <input type="text" class="form-control" placeholder=""/>
                                <div class="input-group-append">
                                  <span class="input-group-text" data-toggle="tooltip" data-placement="right" title="" data-original-title="For delivery questions."><i class="far fa-question-circle"></i></span>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div class="cancel-update-wrap text-right">
                        <a href="#" class="btn btn-blank">Cancel</a>
                        <a href="#" class="btn btn-black">Update</a>
                      </div> 
                    </div>
                    <div class="cc-options review-form-wrap mt-5">
                      <div class="amasty-pay-wrap">
                        <div class="btn-container">
                          <a href="#" class="amasty-pay-btn">Pay Now</a>
                        </div>
                        <div class="amasty-card-details mt-3">
                          <div class="amasty-card-details-left">
                            <p class="label-txt" for="Credit Card Number">Credit Card Number<sup>*</sup></p>
                            <input type="text" class="cc-card-no" placeholder="Card Number"/>
                          </div>
                          <div class="amasty-card-details-right">
                            <input type="text" class="cc-exp-date" placeholder="MM/YY"/>
                            <input type="text" placeholder="CVV"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="cancel-update-wrap text-right mt-2">
                      <a href="#" class="btn btn-black disabled">Place Order</a>
                    </div>
                  </div>
                </div>
                <div class="payment-option-common apply-discount-option">
                  <div class="payment-radio-btn-wrap collapsed" data-target=".apply-discount" data-toggle="collapse">
                    Apply Discount Code <i class="fa fa-chevron-up"></i>
                  </div>
                  <div class="apply-discount collapse">
                    <div class="my-3">
                      <input type="text" class="form-control" placeholder="Enter Discount Count"/>  
                    </div>
                    <a href="#" class="btn btn-black">Apply Discount</a>
                  </div>
                </div>
                <div class="payment-option-common apply-gift-card-option">
                  <div class="payment-radio-btn-wrap collapsed" data-target=".apply-gift-card" data-toggle="collapse">
                    Apply Gift Card <i class="fa fa-chevron-up"></i>
                  </div>
                  <div class="apply-gift-card collapse">
                    <div class="my-3">
                      <input type="text" class="form-control" placeholder="Enter the Gift Card Code"/>  
                    </div>
                    <a href="#" class="btn btn-black">Apply</a>
                    <a href="#" class="btn btn-black">See Balance</a>
                  </div>
                </div>
            </div>
          </div>
          <div class="col-lg-4 mini-cart">
            <div class="order-summary-wrap payment-page">
              <h3>Order Summary <span class="fa fa-times close-order-summary"></span></h3>
              <div class="cart-subtotal">
                <div class="d-flex justify-content-between">
                  <div>Cart Subtotal</div>
                  <div>$1,150.00</div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>Shipping
                    <p>Flat Rate - Fixed</p>
                  </div>
                  <div>$20.00</div>
                </div>
              </div>
              <div class="summary-order-total">
                <div class="d-flex justify-content-between font-weight-bold summary-order-total mt-3 mb-4">
                  <div>Order Total</div>
                  <div>$1,170.00</div>
                </div>
              </div>
              <div class="item-count drop-arrow" data-toggle="collapse" data-target=".checkout-cart-list-wrap">3 Items in Cart</div>
              <div class="checkout-cart-list-wrap show">
              {cartlist.map((data,index)=>(  
                <div class="checkout-cart-list-item">
                  <div class="product-img"><img src={data.extension_attributes.image_url} alt={data.name}/></div>
                  <div class="product-name-qty"><p>Chanel T-Shirt</p><p>Qty: {data.qty}</p></div>
                  <div class="product-price">${data.price}</div>
                </div>
              ))}
                {/* <div class="checkout-cart-list-item">
                  <div class="product-img"><img src="/images/tshirt1.jpg"/></div>
                  <div class="product-name-qty"><p>Chanel T-Shirt</p><p>Qty: 7</p></div>
                  <div class="product-price">$250.00</div>
                </div>
                <div class="checkout-cart-list-item">
                  <div class="product-img"><img src="/images/tshirt1.jpg"/></div>
                  <div class="product-name-qty"><p>Chanel T-Shirt</p><p>Qty: 5</p></div>
                  <div class="product-price">$297.00</div>
                </div> */}
              </div>
              <div class="shipto-block-wrap">
                <div class="summary-ship-to">
                  <div class="title-wrap d-flex justify-content-between">
                    <h3>Ship To:</h3>
                    <a href="#"><i class="fa fa-pencil-alt"></i></a>
                  </div>
                  <div class="customer-details-wrap">
                    <p class="first-last-name">First Last</p>
                    <p class="address">sdf, dfjal, dsfals</p>
                    <p class="state">Chandigarh, Chandigarh 160001</p>
                    <p class="country">India</p>
                    <p class="mobile-no"><a href="tel:+4733378901">+47 333 78 901</a></p><p></p>
                  </div>
                </div>
                <div class="summary-ship-to">
                  <div class="title-wrap d-flex justify-content-between">
                    <h3>Shipping Method:</h3>
                    <a href="#"><i class="fa fa-pencil-alt"></i></a>
                  </div>
                  <div class="customer-details-wrap">
                    <p>Flat Rate - Fixed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
  )
}
