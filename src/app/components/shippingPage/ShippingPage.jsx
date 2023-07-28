import React, { useState } from "react";
import { productlist } from "../../data/ProductList";
import { countries, states } from "../../helper/countries";
import { Button } from "@themesberg/react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../services/actions";
export function ShippingPage() {
  const dispatch = useDispatch();
  const { productInCart } = useSelector((state) => state.cartReducer);
  const [formdata, setformData] = useState();

  function onChangeHandler(event) {
    let { name, value } = event.target;
    console.log(name, event);
    setformData({ ...formdata, [name]: value });
  }

  function onChangeCountry(e) {
   setformData({...formdata,country_id:e.target.value})
  }

  function onSateChange(e) {
    console.log(e.target.value)
    let state = states.find(state=>state.code === e.target.value)
    console.log(state)
    setformData({...formdata,region_id:state.id,region_code:state.code})
  }

  const submitFormData = (e) => {
    e.preventDefault();
    dispatch(cartActions.ADDSHIPPINGSADDRESSREQUEST(formdata));
  };

  return (
    <section className="cart-page">
      <div className="container">
        <div className="progress-bar-sign-in">
          <div className="progress-bar-checkout-wrap">
            <ol className="progress-bar-checkout">
              <li className="step-active">Shipping</li>
              <li className="step">Review & Payments</li>
            </ol>
          </div>

          <div className="estimated-total">
            <div className="estimated-title mb-2">Estimated Total</div>
            <div className="estimated-cost">$568.00</div>
          </div>

          {/* <div className="sign-in-form">
            <div className="mini-cart-icon">
              <a href="#" className="mini-cart-ref">
                <i className="fa fa-bag-shopping"></i>
                <span className="cart-qty">23</span>
              </a>
            </div>

            <div className="sign-in-link-wrap">
              <a href="#" className="checkout-signin mt-3 d-inline-block">
                Sign In
              </a>
            </div>
            <div className="review-form-wrap checkout-sign-in-form">
              <div className="form-heading-wrap">
                <h3 className="mb-4">Sign In</h3>
                <a href="#" className="close-form">
                  <i className="fa fa-times"></i>
                </a>
              </div>
              <form>
                <div className="form-group">
                  <label className="label-txt" htmlFor="Email Address">
                    Email Address
                  </label>
                  <input type="email" className="form-control" placeholder="" />
                </div>
                <div className="form-group">
                  <label className="label-txt" htmlFor="Password">
                    Password
                  </label>
                  <input type="password" className="form-control" placeholder="" />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <a href="#" className="checkout-forgot-password">
                      Forgot Your Password?
                    </a>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-black">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div> */}
        </div>
        <div className="row">
          <div className="col-lg-8 mb-5 checkout-block">
            <div className="checkout-form-head mt-5 mb-4">
              <h2>Shipping Address</h2>
              <hr></hr>
            </div>
            <div className="row">
              <div className="col-lg-9">
                <div className="shipping-address-block">
                  <div className="review-form-wrap shipping-address-form">
                    <form>
                      <div className="form-group">
                        <label className="label-txt" htmlFor="Email Address">
                          Email Address<sup>*</sup>
                        </label>
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder=""
                            name="email"
                            onChange={onChangeHandler}
                          />
                          {/* <div className="input-group-append">
                            <span
                              className="input-group-text"
                              data-toggle="tooltip"
                              data-placement="right"
                              title="We'll send your order confirmation here."
                            >
                              <i className="far fa-question-circle"></i>
                            </span>
                          </div> */}
                        </div>
                        {/* <div className="txt-13">
                          You can create an account after checkout.
                        </div> */}
                      </div>
                      <hr className="my-4"></hr>
                      <div className="form-group">
                        <label className="label-txt" htmlFor="First Name">
                          First Name<sup>*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          name="firstname"
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div className="form-group">
                        <label className="label-txt" htmlFor="Last Name">
                          Last Name<sup>*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          name="lastname"
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div className="form-group">
                        <label className="label-txt" htmlFor="Company">
                          Company<sup>*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          name="company"
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div className="form-group">
                        <label className="label-txt" htmlFor="Street Address">
                          Street Address<sup>*</sup>
                        </label>
                        <div className="txt-13 mb-1">
                          Street Address: Line 1
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          name="street"
                          onChange={onChangeHandler}
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
                          onChange={onChangeCountry}
                        />
                      </div>
                      <div className="form-group">
                        <label className="label-txt" htmlFor="Country">
                          Country<sup>*</sup>
                        </label>
                        <select
                          className="form-control txt-13"
                          id="Country"
                          onChange={onChangeCountry}
                          name="country"
                        >
                          <option value="">Please Select the state</option>
                          {countries.map((country) => (
                            <option value={country.id}>
                              {country.full_name_english}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="label-txt" htmlFor="State/Province">
                          State/Province<sup>*</sup>
                        </label>
                        <select
                          className="form-control txt-13"
                          id="State/Province"
                          name="state"
                          onChange={onSateChange}
                        >
                          <option>
                            Please Select a region, state or province
                          </option>
                          {states.map((state) => (
                            <option value={state.code}>{state.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="label-txt" htmlFor="City">
                          City<sup>*</sup>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder=""
                          name="city"
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div className="form-group">
                        <label className="label-txt" htmlFor="Zip/Postal">
                          Zip/Postal Code<sup>*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="Zip/Postal"
                          name="postcode"
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div className="form-group">
                        <label className="label-txt" htmlFor="Phone Number">
                          Phone Number<sup>*</sup>
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="telephone"
                            onChange={onChangeHandler}
                          />
                          <div className="input-group-append">
                            <span
                              className="input-group-text"
                              data-toggle="tooltip"
                              data-placement="right"
                              title="For delivery questions."
                            >
                              <i className="far fa-question-circle"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout-form-head mt-5 mb-4">
              <h2>Shipping Method</h2>
              <hr></hr>
              <div className="form-group my-4 flat-rate">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="Flat-Rate"
                    value="option1"
                    checked=""
                  />
                  <label className="form-check-label" htmlFor="Flat-Rate">
                    <strong>$15.00</strong> Fixed Flat Rate
                  </label>
                </div>
              </div>
            </div>
            <div className="action-btns-wrap text-right">
              <Button onClick={submitFormData} className="btn btn-black">
                Next
              </Button>
            </div>
          </div>
          <div className="col-lg-4 mini-cart">
            <div className="order-summary-wrap">
              <h3>
                Order Summary{" "}
                <span className="fa fa-times close-order-summary"></span>
              </h3>
              <div
                className="item-count drop-arrow"
                data-toggle="collapse"
                data-target=".checkout-cart-list-wrap"
              >
                {productInCart.length} Items in Cart
              </div>
              <div className="checkout-cart-list-wrap show">
                {productInCart.map((data) => (
                  <div className="checkout-cart-list-item">
                    <div className="product-img">
                      <img src={data.extension_attributes.image_url} alt="productImage" />
                    </div>
                    <div className="product-name-qty">
                      <p>{data.name}</p>
                      <p>Qty: {data.qty}</p>
                    </div>
                    <div className="product-price">
                      ${data.price}
                    </div>
                  </div>
                ))}
                {/* <div className="checkout-cart-list-item">
                  <div className="product-img">
                    <img src="/images/diamond_neclace3.jpg" />
                  </div>
                  <div className="product-name-qty">
                    <p>Diamond Neclace</p>
                    <p>Qty: 7</p>
                  </div>
                  <div className="product-price">$250.00</div>
                </div>
                <div className="checkout-cart-list-item">
                  <div className="product-img">
                    <img src="/images/diamond_neclace3.jpg" />
                  </div>
                  <div className="product-name-qty">
                    <p>Diamond Neclace</p>
                    <p>Qty: 5</p>
                  </div>
                  <div className="product-price">$297.00</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
