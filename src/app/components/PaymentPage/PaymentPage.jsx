import React, { useEffect, useState } from "react";

import { Button } from "@themesberg/react-bootstrap";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { productService } from "../../api";
import { useDispatch,useSelector } from "react-redux";
import { cartActions, usersActions } from "../../services/actions";
export function PaymentPage() {
  const dispatch = useDispatch();
  const {subTotal } = useSelector((state) => state.cartReducer);
  const [paymentMethods, setPaymentMethod] = useState([]);

  const [selectedPayment, setSelectedPaymentMethod] = useState();

  const [cartTotal,setCartTotal] = useState({});

  const [cartProducts,setCartProducts] = useState([]);

  useEffect(() => {
    getEnablePaymentMethods();
  }, []);

  async function getEnablePaymentMethods() {
    dispatch(cartActions.GETITEMSREQUEST());
    let response = await productService.getPaymentMethods();
    let response2 = await productService.userCartTotal()
    if (response.status === 200) {
      setPaymentMethod(response.data);
    }
    if(response2.status === 200){
      setCartTotal(response2.data);
      setCartProducts(response2.data.items)
    }
  }

  function placeOrder(){
   let paymentMethods  = {
      "paymentMethod": {
        "method": selectedPayment
      }
    }
    dispatch(usersActions.PLACEORDERREQUEST(paymentMethods));
  }

  async function onChangeHanler(e) {
    const {name} = e.target;
    setSelectedPaymentMethod(name);
  }

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
            <div class="estimated-title mb-2">Estimated Total</div>
            <div class="estimated-cost">$568.00</div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-lg-8 mb-5 checkout-block payment-block">
            <div class="checkout-form-head mt-5 mb-4">
              <h2>Payment Method</h2>
            </div>
            <div class="payment-options-block">
              {paymentMethods.map((methods) =>
                methods.code === "checkmo" ? (
                  <div class="payment-option-common check-moneyorder-option">
                    <div class="payment-radio-btn-wrap">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name={methods.code}
                          onChange={onChangeHanler}
                          checked={selectedPayment === methods.code ? true : false}
                        />
                        <label class="form-check-label" for="check-moneyorder">
                          Check / Money order
                        </label>
                      </div>
                    </div>
                    <div class="billing-shipping-address">
                      <div class="mybilling-checkbox mt-4 mb-3 ml-4">
                        <div class="form-check">
                          {/* <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="billingShipping"
                        checked
                      /> */}
                          <label class="form-check-label" for="billingShipping">
                            My billing and shipping address are the same
                          </label>
                        </div>
                      </div>
                      <div class="customer-details-wrap ml-5">
                        <p class="first-last-name">{cartTotal?.billing_address?.firstname} {cartTotal?.billing_address?.lastname}</p>
                        <p class="address">{cartTotal?.billing_address?.street[0]}</p>
                        <p class="state">{cartTotal?.billing_address?.region}</p>
                        <p class="country">{cartTotal?.billing_address?.city} {cartTotal?.billing_address?.country_id} </p>
                        <p class="mobile-no">
                          <a href="tel:+4733378901">{cartTotal?.billing_address?.telephone}</a>
                        </p>
                      </div>
                      {/* <div class="review-form-wrap shipping-address-form payment-address form ml-4">
                    <div class="row">
                      <div class="col-md-9">
                        <form>
                          <div class="form-group">
                            <label class="label-txt" for="First Name">
                              First Name<sup>*</sup>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                            />
                          </div>
                          <div class="form-group">
                            <label class="label-txt" for="Last Name">
                              Last Name<sup>*</sup>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                            />
                          </div>
                          <div class="form-group">
                            <label class="label-txt" for="Company">
                              Company<sup>*</sup>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                            />
                          </div>
                          <div class="form-group">
                            <label class="label-txt" for="Street Address">
                              Street Address<sup>*</sup>
                            </label>
                            <div class="txt-13 mb-1">
                              Street Address: Line 1
                            </div>
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                            />
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                            />
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                            />
                          </div>
                          <div class="form-group">
                            <label class="label-txt" for="Country">
                              Country<sup>*</sup>
                            </label>
                            <select class="form-control txt-13" id="Country">
                              <option value="Afganistan">Afghanistan</option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="American Samoa">
                                American Samoa
                              </option>
                              <option value="Andorra">Andorra</option>
                              <option value="Angola">Angola</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label class="label-txt" for="State/Province">
                              State/Province<sup>*</sup>
                            </label>
                            <select
                              class="form-control txt-13"
                              id="State/Province"
                            >
                              <option>
                                {" "}
                                Please Select a region, state or province
                              </option>
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label class="label-txt" for="City">
                              City<sup>*</sup>
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              placeholder=""
                            />
                          </div>
                          <div class="form-group">
                            <label class="label-txt" for="Zip/Postal">
                              Zip/Postal Code<sup>*</sup>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="Zip/Postal"
                            />
                          </div>
                          <div class="form-group">
                            <label class="label-txt" for="Phone Number">
                              Phone Number<sup>*</sup>
                            </label>
                            <div class="input-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder=""
                              />
                              <div class="input-group-append">
                                <span
                                  class="input-group-text"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title=""
                                  data-original-title="For delivery questions."
                                >
                                  <i class="far fa-question-circle"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="cancel-update-wrap text-right">
                      <a href="#" class="btn btn-blank">
                        Cancel
                      </a>
                      <a href="#" class="btn btn-black">
                        Update
                      </a>
                    </div>
                  </div> */}
                      <div class="cancel-update-wrap text-right mt-4">
                        <Button  class="btn btn-black" onClick={placeOrder} >
                          Place Order
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : methods.code === "cashondelivery" ? (
                  <div class="payment-option-common cash-on-delivery-option">
                    <div class="payment-radio-btn-wrap">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="CashOnDelivery"
                          name={methods.code}
                          checked={selectedPayment === methods.code ? true : false}
                          onChange={onChangeHanler}
                        />
                        <label class="form-check-label" for="CashOnDelivery">
                          Cash On Delivery
                        </label>
                      </div>
                    </div>
                    <div class="billing-shipping-address">
                      <div class="mybilling-checkbox mt-4 mb-3 ml-4">
                        <div class="form-check">
                          {/* <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        checked
                      /> */}
                          <label class="form-check-label" for="">
                            My billing and shipping address are the same
                          </label>
                        </div>
                      </div>
                      <div class="customer-details-wrap ml-5">
                        <p class="first-last-name">{cartTotal?.billing_address?.firstname} {cartTotal?.billing_address?.lastname}</p>
                        <p class="address">{cartTotal?.billing_address?.street[0]}</p>
                        <p class="state">{cartTotal?.billing_address?.region}</p>
                        <p class="country">{cartTotal?.billing_address?.city} {cartTotal?.billing_address?.country_id} </p>
                        <p class="mobile-no">
                          <p >{cartTotal?.billing_address?.telephone}</p>
                        </p>
                      </div>
                      {/* <div class="review-form-wrap shipping-address-form payment-address form ml-4">
                    <div class="row">
                      <div class="col-md-9">
                        <form>
                          <div class="form-group">
                            <label class="label-txt" for="First Name">
                              First Name<sup>*</sup>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                            />
                          </div>
                          <div class="form-group">
                            <label class="label-txt" for="Last Name">
                              Last Name<sup>*</sup>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                            />
                          </div>
                          <div class="form-group">
                            <label class="label-txt" for="Company">
                              Company<sup>*</sup>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                            />
                          </div>
                          <div class="form-group">
                            <label class="label-txt" for="Street Address">
                              Street Address<sup>*</sup>
                            </label>
                            <div class="txt-13 mb-1">
                              Street Address: Line 1
                            </div>
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                            />
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                            />
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                            />
                          </div>
                          <div class="form-group">
                            <label class="label-txt" for="Country">
                              Country<sup>*</sup>
                            </label>
                            <select class="form-control txt-13" id="Country">
                              <option value="Afganistan">Afghanistan</option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="American Samoa">
                                American Samoa
                              </option>
                              <option value="Andorra">Andorra</option>
                              <option value="Angola">Angola</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label class="label-txt" for="State/Province">
                              State/Province<sup>*</sup>
                            </label>
                            <select
                              class="form-control txt-13"
                              id="State/Province"
                            >
                              <option>
                                {" "}
                                Please Select a region, state or province
                              </option>
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label class="label-txt" for="City">
                              City<sup>*</sup>
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              placeholder=""
                            />
                          </div>
                          <div class="form-group">
                            <label class="label-txt" for="Zip/Postal">
                              Zip/Postal Code<sup>*</sup>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="Zip/Postal"
                            />
                          </div>
                          <div class="form-group">
                            <label class="label-txt" for="Phone Number">
                              Phone Number<sup>*</sup>
                            </label>
                            <div class="input-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder=""
                              />
                              <div class="input-group-append">
                                <span
                                  class="input-group-text"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title=""
                                  data-original-title="For delivery questions."
                                >
                                  <i class="far fa-question-circle"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="cancel-update-wrap text-right">
                      <a href="#" class="btn btn-blank">
                        Cancel
                      </a>
                      <a href="#" class="btn btn-black">
                        Update
                      </a>
                    </div>
                  </div>
                  <div class="cc-options review-form-wrap mt-5">
                    <div class="amasty-pay-wrap">
                      <div class="btn-container">
                        <a href="#" class="amasty-pay-btn">
                          Pay Now
                        </a>
                      </div>
                      <div class="amasty-card-details mt-3">
                        <div class="amasty-card-details-left">
                          <p class="label-txt" for="Credit Card Number">
                            Credit Card Number<sup>*</sup>
                          </p>
                          <input
                            type="text"
                            class="cc-card-no"
                            placeholder="Card Number"
                          />
                        </div>
                        <div class="amasty-card-details-right">
                          <input
                            type="text"
                            class="cc-exp-date"
                            placeholder="MM/YY"
                          />
                          <input type="text" placeholder="CVV" />
                        </div>
                      </div>
                    </div>
                  </div> */}
                      <div class="cancel-update-wrap text-right mt-2">
                        <Button href="#" class="btn btn-black" onClick={placeOrder} >
                          Place Order
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
              <div class="payment-option-common apply-discount-option">
                <div
                  class="payment-radio-btn-wrap collapsed"
                  data-target=".apply-discount"
                  data-toggle="collapse"
                >
                  Apply Discount Code <i class="fa fa-chevron-up"></i>
                </div>
                <div class="apply-discount collapse">
                  <div class="my-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Discount Count"
                    />
                  </div>
                  <Button class="btn btn-black">Apply Discount</Button>
                </div>
              </div>
              <div class="payment-option-common apply-gift-card-option">
                <div
                  class="payment-radio-btn-wrap collapsed"
                  data-target=".apply-gift-card"
                  data-toggle="collapse"
                >
                  Apply Gift Card <i class="fa fa-chevron-up"></i>
                </div>
                <div class="apply-gift-card collapse">
                  <div class="my-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter the Gift Card Code"
                    />
                  </div>
                  <Button href="#" class="btn btn-black">
                    Apply
                  </Button>
                  <Button href="#" class="btn btn-black">
                    See Balance
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mini-cart">
            <div class="order-summary-wrap payment-page">
              <h3>
                Order Summary{" "}
                <span class="fa fa-times close-order-summary"></span>
              </h3>
              <div class="cart-subtotal">
                <div class="d-flex justify-content-between">
                  <div>Cart Subtotal</div>
                  <div>${subTotal?.grand_total}</div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>
                    Shipping
                    <p>{cartTotal?.extension_attributes?.shipping_assignments[0]?.shipping.method}</p>
                  </div>
                  <div>${subTotal?.shipping_amount}</div>
                </div>
              </div>
              <div class="summary-order-total">
                <div class="d-flex justify-content-between font-weight-bold summary-order-total mt-3 mb-4">
                  <div>Order Total</div>
                  <div>${subTotal?.subtotal}</div>
                </div>
              </div>
              <div
                class="item-count drop-arrow"
                data-toggle="collapse"
                data-target=".checkout-cart-list-wrap"
              >
                {cartProducts?.length} Items in Cart
              </div>
              <div class="checkout-cart-list-wrap show">
                {cartProducts.map((data, index) => (
                  <div class="checkout-cart-list-item">
                    <div class="product-img">
                      <img
                        src={data.extension_attributes.image_url}
                        alt={data.name}
                      />
                    </div>
                    <div class="product-name-qty">
                      <p>{data.name}</p>
                      <p>Qty: {data.qty}</p>
                    </div>
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
                    <Link>
                      <FontAwesomeIcon icon={faPenAlt} />
                    </Link>
                  </div>
                  <div class="customer-details-wrap">
                  <p class="first-last-name">{cartTotal?.billing_address?.firstname} {cartTotal?.billing_address?.lastname}</p>
                        <p class="address">{cartTotal?.billing_address?.street[0]}</p>
                        <p class="state">{cartTotal?.billing_address?.region}</p>
                        <p class="country">{cartTotal?.billing_address?.city} {cartTotal?.billing_address?.country_id} </p>
                        <p class="mobile-no">
                          <p >{cartTotal?.billing_address?.telephone}</p>
                        </p>
                    <p></p>
                  </div>
                </div>
                <div class="summary-ship-to">
                  <div class="title-wrap d-flex justify-content-between">
                    <h3>Shipping Method:</h3>
                    <a href="#">
                      <i class="fa fa-pencil-alt"></i>
                    </a>
                  </div>
                  <div class="customer-details-wrap">
                  <p>{cartTotal?.extension_attributes?.shipping_assignments[0]?.shipping.method}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
