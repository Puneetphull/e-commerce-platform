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
    <section className="payment-page">
      <div className="container">
        <div className="progress-bar-sign-in">
          <div className="progress-bar-checkout-wrap">
            <ol className="progress-bar-checkout">
              <li className="step-active">Shipping</li>
              <li className="step-active">Review & Payments</li>
            </ol>
          </div>
          <div className="estimated-total">
            <div className="estimated-title mb-2">Estimated Total</div>
            <div className="estimated-cost">$568.00</div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-8 mb-5 checkout-block payment-block">
            <div className="checkout-form-head mt-5 mb-4">
              <h2>Payment Method</h2>
            </div>
            <div className="payment-options-block">
              {paymentMethods.map((methods) =>
                methods.code === "checkmo" ? (
                  <div className="payment-option-common check-moneyorder-option">
                    <div className="payment-radio-btn-wrap">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name={methods.code}
                          onChange={onChangeHanler}
                          checked={selectedPayment === methods.code ? true : false}
                        />
                        <label className="form-check-label" for="check-moneyorder">
                          Check / Money order
                        </label>
                      </div>
                    </div>
                    <div className="billing-shipping-address">
                      <div className="mybilling-checkbox mt-4 mb-3 ml-4">
                        <div className="form-check">
                          {/* <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="billingShipping"
                        checked
                      /> */}
                          <label className="form-check-label" for="billingShipping">
                            My billing and shipping address are the same
                          </label>
                        </div>
                      </div>
                      <div className="customer-details-wrap ml-5">
                        <p className="first-last-name">{cartTotal?.billing_address?.firstname} {cartTotal?.billing_address?.lastname}</p>
                        <p className="address">{cartTotal?.billing_address?.street[0]}</p>
                        <p className="state">{cartTotal?.billing_address?.region}</p>
                        <p className="country">{cartTotal?.billing_address?.city} {cartTotal?.billing_address?.country_id} </p>
                        <p className="mobile-no">
                          <a href="tel:+4733378901">{cartTotal?.billing_address?.telephone}</a>
                        </p>
                      </div>
                      {/* <div className="review-form-wrap shipping-address-form payment-address form ml-4">
                    <div className="row">
                      <div className="col-md-9">
                        <form>
                          <div className="form-group">
                            <label className="label-txt" for="First Name">
                              First Name<sup>*</sup>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Last Name">
                              Last Name<sup>*</sup>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Company">
                              Company<sup>*</sup>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Street Address">
                              Street Address<sup>*</sup>
                            </label>
                            <div className="txt-13 mb-1">
                              Street Address: Line 1
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Country">
                              Country<sup>*</sup>
                            </label>
                            <select className="form-control txt-13" id="Country">
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
                          <div className="form-group">
                            <label className="label-txt" for="State/Province">
                              State/Province<sup>*</sup>
                            </label>
                            <select
                              className="form-control txt-13"
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
                          <div className="form-group">
                            <label className="label-txt" for="City">
                              City<sup>*</sup>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Zip/Postal">
                              Zip/Postal Code<sup>*</sup>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="Zip/Postal"
                            />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Phone Number">
                              Phone Number<sup>*</sup>
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                              />
                              <div className="input-group-append">
                                <span
                                  className="input-group-text"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title=""
                                  data-original-title="For delivery questions."
                                >
                                  <i className="far fa-question-circle"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="cancel-update-wrap text-right">
                      <a href="#" className="btn btn-blank">
                        Cancel
                      </a>
                      <a href="#" className="btn btn-black">
                        Update
                      </a>
                    </div>
                  </div> */}
                      <div className="cancel-update-wrap text-right mt-4">
                        <Button  className="btn btn-black" onClick={placeOrder} >
                          Place Order
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : methods.code === "cashondelivery" ? (
                  <div className="payment-option-common cash-on-delivery-option">
                    <div className="payment-radio-btn-wrap">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="CashOnDelivery"
                          name={methods.code}
                          checked={selectedPayment === methods.code ? true : false}
                          onChange={onChangeHanler}
                        />
                        <label className="form-check-label" for="CashOnDelivery">
                          Cash On Delivery
                        </label>
                      </div>
                    </div>
                    <div className="billing-shipping-address">
                      <div className="mybilling-checkbox mt-4 mb-3 ml-4">
                        <div className="form-check">
                          {/* <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        checked
                      /> */}
                          <label className="form-check-label" for="">
                            My billing and shipping address are the same
                          </label>
                        </div>
                      </div>
                      <div className="customer-details-wrap ml-5">
                        <p className="first-last-name">{cartTotal?.billing_address?.firstname} {cartTotal?.billing_address?.lastname}</p>
                        <p className="address">{cartTotal?.billing_address?.street[0]}</p>
                        <p className="state">{cartTotal?.billing_address?.region}</p>
                        <p className="country">{cartTotal?.billing_address?.city} {cartTotal?.billing_address?.country_id} </p>
                        <p className="mobile-no">
                          <p >{cartTotal?.billing_address?.telephone}</p>
                        </p>
                      </div>
                      {/* <div className="review-form-wrap shipping-address-form payment-address form ml-4">
                    <div className="row">
                      <div className="col-md-9">
                        <form>
                          <div className="form-group">
                            <label className="label-txt" for="First Name">
                              First Name<sup>*</sup>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Last Name">
                              Last Name<sup>*</sup>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Company">
                              Company<sup>*</sup>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Street Address">
                              Street Address<sup>*</sup>
                            </label>
                            <div className="txt-13 mb-1">
                              Street Address: Line 1
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Country">
                              Country<sup>*</sup>
                            </label>
                            <select className="form-control txt-13" id="Country">
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
                          <div className="form-group">
                            <label className="label-txt" for="State/Province">
                              State/Province<sup>*</sup>
                            </label>
                            <select
                              className="form-control txt-13"
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
                          <div className="form-group">
                            <label className="label-txt" for="City">
                              City<sup>*</sup>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Zip/Postal">
                              Zip/Postal Code<sup>*</sup>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="Zip/Postal"
                            />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Phone Number">
                              Phone Number<sup>*</sup>
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                              />
                              <div className="input-group-append">
                                <span
                                  className="input-group-text"
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title=""
                                  data-original-title="For delivery questions."
                                >
                                  <i className="far fa-question-circle"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="cancel-update-wrap text-right">
                      <a href="#" className="btn btn-blank">
                        Cancel
                      </a>
                      <a href="#" className="btn btn-black">
                        Update
                      </a>
                    </div>
                  </div>
                  <div className="cc-options review-form-wrap mt-5">
                    <div className="amasty-pay-wrap">
                      <div className="btn-container">
                        <a href="#" className="amasty-pay-btn">
                          Pay Now
                        </a>
                      </div>
                      <div className="amasty-card-details mt-3">
                        <div className="amasty-card-details-left">
                          <p className="label-txt" for="Credit Card Number">
                            Credit Card Number<sup>*</sup>
                          </p>
                          <input
                            type="text"
                            className="cc-card-no"
                            placeholder="Card Number"
                          />
                        </div>
                        <div className="amasty-card-details-right">
                          <input
                            type="text"
                            className="cc-exp-date"
                            placeholder="MM/YY"
                          />
                          <input type="text" placeholder="CVV" />
                        </div>
                      </div>
                    </div>
                  </div> */}
                      <div className="cancel-update-wrap text-right mt-2">
                        <Button href="#" className="btn btn-black" onClick={placeOrder} >
                          Place Order
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
              <div className="payment-option-common apply-discount-option">
                <div
                  className="payment-radio-btn-wrap collapsed"
                  data-target=".apply-discount"
                  data-toggle="collapse"
                >
                  Apply Discount Code <i className="fa fa-chevron-up"></i>
                </div>
                <div className="apply-discount collapse">
                  <div className="my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Discount Count"
                    />
                  </div>
                  <Button className="btn btn-black">Apply Discount</Button>
                </div>
              </div>
              <div className="payment-option-common apply-gift-card-option">
                <div
                  className="payment-radio-btn-wrap collapsed"
                  data-target=".apply-gift-card"
                  data-toggle="collapse"
                >
                  Apply Gift Card <i className="fa fa-chevron-up"></i>
                </div>
                <div className="apply-gift-card collapse">
                  <div className="my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the Gift Card Code"
                    />
                  </div>
                  <Button href="#" className="btn btn-black">
                    Apply
                  </Button>
                  <Button href="#" className="btn btn-black">
                    See Balance
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mini-cart">
            <div className="order-summary-wrap payment-page">
              <h3>
                Order Summary{" "}
                <span className="fa fa-times close-order-summary"></span>
              </h3>
              <div className="cart-subtotal">
                <div className="d-flex justify-content-between">
                  <div>Cart Subtotal</div>
                  <div>${subTotal?.grand_total}</div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    Shipping
                    <p>{cartTotal?.extension_attributes?.shipping_assignments[0]?.shipping.method}</p>
                  </div>
                  <div>${subTotal?.shipping_amount}</div>
                </div>
              </div>
              <div className="summary-order-total">
                <div className="d-flex justify-content-between font-weight-bold summary-order-total mt-3 mb-4">
                  <div>Order Total</div>
                  <div>${subTotal?.subtotal}</div>
                </div>
              </div>
              <div
                className="item-count drop-arrow"
                data-toggle="collapse"
                data-target=".checkout-cart-list-wrap"
              >
                {cartProducts?.length} Items in Cart
              </div>
              <div className="checkout-cart-list-wrap show">
                {cartProducts.map((data, index) => (
                  <div className="checkout-cart-list-item">
                    <div className="product-img">
                      <img
                        src={data.extension_attributes.image_url}
                        alt={data.name}
                      />
                    </div>
                    <div className="product-name-qty">
                      <p>{data.name}</p>
                      <p>Qty: {data.qty}</p>
                    </div>
                    <div className="product-price">${data.price}</div>
                  </div>
                ))}
                {/* <div className="checkout-cart-list-item">
                  <div className="product-img"><img src="/images/tshirt1.jpg"/></div>
                  <div className="product-name-qty"><p>Chanel T-Shirt</p><p>Qty: 7</p></div>
                  <div className="product-price">$250.00</div>
                </div>
                <div className="checkout-cart-list-item">
                  <div className="product-img"><img src="/images/tshirt1.jpg"/></div>
                  <div className="product-name-qty"><p>Chanel T-Shirt</p><p>Qty: 5</p></div>
                  <div className="product-price">$297.00</div>
                </div> */}
              </div>
              <div className="shipto-block-wrap">
                <div className="summary-ship-to">
                  <div className="title-wrap d-flex justify-content-between">
                    <h3>Ship To:</h3>
                    <Link>
                      <FontAwesomeIcon icon={faPenAlt} />
                    </Link>
                  </div>
                  <div className="customer-details-wrap">
                  <p className="first-last-name">{cartTotal?.billing_address?.firstname} {cartTotal?.billing_address?.lastname}</p>
                        <p className="address">{cartTotal?.billing_address?.street[0]}</p>
                        <p className="state">{cartTotal?.billing_address?.region}</p>
                        <p className="country">{cartTotal?.billing_address?.city} {cartTotal?.billing_address?.country_id} </p>
                        <p className="mobile-no">
                          <p >{cartTotal?.billing_address?.telephone}</p>
                        </p>
                    <p></p>
                  </div>
                </div>
                <div className="summary-ship-to">
                  <div className="title-wrap d-flex justify-content-between">
                    <h3>Shipping Method:</h3>
                    <a href="#">
                      <i className="fa fa-pencil-alt"></i>
                    </a>
                  </div>
                  <div className="customer-details-wrap">
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
