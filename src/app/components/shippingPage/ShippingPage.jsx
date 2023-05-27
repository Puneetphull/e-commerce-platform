import React from 'react'

export  function ShippingPage() {
  return (
    <section class="cart-page">
    <div class="container">
        <div class="progress-bar-sign-in">
          <div class="progress-bar-checkout-wrap">
              <ol class="progress-bar-checkout">
                  <li class="step-active">Shipping</li>
                  <li class="step">Review & Payments</li>
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
                <a href="#" class="checkout-signin mt-3 d-inline-block">Sign In</a>
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
                      <button type="submit" class="btn btn-black">Submit</button>
                  </div>
                </div>
              </form> 
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 mb-5 checkout-block">
              <div class="checkout-form-head mt-5 mb-4">
                  <h2>Shipping Address</h2>
                  <hr></hr>
              </div>
              <div class="row">
                  <div class="col-lg-9">
                      <div class="shipping-address-block">
                          <div class="review-form-wrap shipping-address-form">
                              <form>
                                <div class="form-group">
                                  <label class="label-txt" for="Email Address">Email Address<sup>*</sup></label>
                                  <div class="input-group">
                                    <input type="email" class="form-control" placeholder=""/>
                                    <div class="input-group-append">
                                      <span class="input-group-text" data-toggle="tooltip" data-placement="right" title="We'll send your order confirmation here."><i class="far fa-question-circle"></i></span>
                                    </div>
                                  </div>
                                  <div class="txt-13">You can create an account after checkout.</div>
                                </div>
                                <hr class="my-4"></hr>
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
                                      <span class="input-group-text" data-toggle="tooltip" data-placement="right" title="For delivery questions."><i class="far fa-question-circle"></i></span>
                                    </div>
                                  </div>
                                </div>
                              </form> 
                          </div>
                      </div>
                  </div>
              </div>
              <div class="checkout-form-head mt-5 mb-4">
                <h2>Shipping Method</h2>
                <hr></hr>
                <div class="form-group my-4 flat-rate">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="Flat-Rate" value="option1" checked=""/>
                    <label class="form-check-label" for="Flat-Rate">
                      <strong>$15.00</strong> Fixed Flat Rate
                    </label>
                  </div>
                </div>
              </div>
              <div class="action-btns-wrap text-right">
                  <a href="#" class="btn btn-black">Next</a>
              </div>
          </div>
          <div class="col-lg-4 mini-cart">
            <div class="order-summary-wrap">
              <h3>Order Summary <span class="fa fa-times close-order-summary"></span></h3>
              <div class="item-count drop-arrow" data-toggle="collapse" data-target=".checkout-cart-list-wrap">3 Items in Cart</div>
              <div class="checkout-cart-list-wrap show">
                <div class="checkout-cart-list-item">
                  <div class="product-img"><img src="/images/diamond_neclace3.jpg" /></div>
                  <div class="product-name-qty"><p>Diamond Neclace</p><p>Qty: 1</p></div>
                  <div class="product-price">$25.00</div>
                </div>
                <div class="checkout-cart-list-item">
                  <div class="product-img"><img src="/images/diamond_neclace3.jpg" /></div>
                  <div class="product-name-qty"><p>Diamond Neclace</p><p>Qty: 7</p></div>
                  <div class="product-price">$250.00</div>
                </div>
                <div class="checkout-cart-list-item">
                  <div class="product-img"><img src="/images/diamond_neclace3.jpg" /></div>
                  <div class="product-name-qty"><p>Diamond Neclace</p><p>Qty: 5</p></div>
                  <div class="product-price">$297.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
  )
}
