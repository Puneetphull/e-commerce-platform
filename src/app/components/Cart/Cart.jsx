import React from "react";
import { cartlist } from "../../data/CartList";
import { Link } from "react-router-dom";

export function Cart() {
    console.log(cartlist)
  return (
    <div>
      <section class="cart-page">
        <div class="container">
          <div class="heading-cart">
            <h3>Shopping Cart</h3>
          </div>
          <div class="row">
            <div class="col-lg-8 cart-item-order">
              <div class="cart-details-table-wrap">
                <div class="custom-table">
                  <table class="table">
                    <thead>
                      <tr>
                        <th class="col">Item</th>
                        <th class="col">Price</th>
                        <th class="col">Qty</th>
                        <th class="col">Subtotal</th>
                      </tr>
                    </thead>
                    {cartlist.map((item, index) => (
                                <tbody key={index} >
                                  <tr>
                                    <td className="col td-cart-image">
                                      <div className="cart-title-image-wrap">
                                        <Link to="#" className="cart-image">
                                          <img src={item.extension_attributes?.image_url} alt="productimage" />
                                        </Link>
                                        <Link to="#" className="cart-title">
                                          {item.name}
                                        </Link>
                                      </div>
                                    </td>
                                    <td className="col td-cart-price"><div className="cart-product-price">{item?.sku}</div></td>
                                    <td className="col td-cart-price"><div className="cart-product-price">${item?.price}</div></td>
                                    <td className="col td-cart-qty">
                                      <div className="cart-product-qty">
                                        <div className="quantity-switcher">
                                          <input  className="quantity-input" value={item.qty} min="1" max="10" />
                                          <div className="increment-decrement-wrap">
                                            <button  className="increment-btn"><i className="fas fa-caret-up"></i></button>
                                            <button  className="decrement-btn"><i className="fas fa-caret-down"></i></button>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="col td-cart-subtotal">
                                      <div className="cart-subtotal-price">${item.price * item.qty}</div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="col" colSpan="5">
                                      <div className="cart-edit-delete">
                                        {/* <a onClick={() => { UPDATESINGLEPRODUCT(item.item_id, item.sku, item.qty) }}><i className="fa fa-pencil-alt"></i></a> */}
                                        <a ><i className="fa fa-times"></i></a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              ))}
                  </table>
                </div>
                <div class="update-cart-btn-wrap mb-5">
                  <a href="#" class="btn btn-white">
                    Update Cart
                  </a>
                </div>
                <div class="cart-gift-block">
                  <div
                    class="gift-card-title"
                    data-toggle="collapse"
                    data-target="#gift-collapse"
                    role="button"
                  >
                    Gift Options <i class="fa fa-chevron-down"></i>
                  </div>
                  <div class="collapse" id="gift-collapse">
                    <h4 class="pick-a-paper my-5">
                      Pick a paper of your choice (optional)
                    </h4>
                    <form class="form">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="gift-receipt"
                        />
                        <label class="form-check-label" for="gift-receipt">
                          Gift Receipt
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="printed-card"
                        />
                        <label class="form-check-label" for="printed-card">
                          Printed card
                        </label>
                      </div>
                    </form>
                    <p class="gift-price">
                      Price: <strong>$0.00</strong>
                    </p>
                    <div class="cancel-update-wrap my-5">
                      <a href="#" class="btn btn-blank">
                        Cancel
                      </a>
                      <a href="#" class="btn btn-white">
                        Update
                      </a>
                    </div>
                  </div>
                </div>
                <div class="apply-discount-block mt-4 mb-5">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="ApplyDiscountCode"
                          id="ApplyDiscountCode"
                          class="discount-label"
                        >
                          Apply Discount Code
                        </label>
                        <div class="mobile-view apply-discount">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Discount Code"
                            />
                            <div class="input-group-append">
                              <button class="btn btn-black" type="button">
                                Apply Discount
                              </button>
                            </div>
                          </div>

                          <div class="my-3"></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="GiftCards"
                          id="GiftCards"
                          class="discount-label"
                        >
                          Gift Cards
                        </label>
                        <div class="mobile-view apply-gift-card">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter the Gift Card Code"
                            />
                            <div class="input-group-append">
                              <button class="btn btn-black" type="button">
                                Add Gift Card
                              </button>
                            </div>
                          </div>

                          <div class="my-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-5"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 cart-summary-order">
              <div class="cart-summary-section mb-3">
                <h3 class="summary-title">Summary</h3>
                <div class="estimate-tax">
                  <div
                    class="estimate-title drop-arrow"
                    data-target="#estimate-collapse"
                    data-toggle="collapse"
                  >
                    Estimate Shipping and Tax
                  </div>
                  <div class="border-bottom">
                    <div class="collapse show" id="estimate-collapse">
                      <form>
                        <div class="form-group">
                          <label for="Country">Country</label>
                          <select class="form-control" id="Country">
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
                          <label for="State/Province">State/Province</label>
                          <select class="form-control" id="State/Province">
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
                          <label for="Zip/Postal">Zip/Postal Code</label>
                          <input
                            type="number"
                            class="form-control"
                            id="Zip/Postal"
                          />
                        </div>
                        <div class="form-group my-4 flat-rate">
                          <label for="Flat-Rate">Flat Rate</label>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="Flat-Rate"
                              value="option1"
                              checked
                            />
                            <label class="form-check-label" for="Flat-Rate">
                              Fixed <strong>$20.00</strong>
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="subtotal-shipping-order">
                  <div class="subtotal-wrap">
                    <div class="subtotal-head">Subtotal</div>
                    <div class="txt-black">$17,865.00</div>
                  </div>
                  <div class="subtotal-wrap pb-3 border-bottom">
                    <div class="subtotal-head">
                      Shipping (Flat Rate - Fixed)
                    </div>
                    <div class="txt-black">$20.00</div>
                  </div>
                  <div class="subtotal-wrap order">
                    <div class="subtotal-head">Order Total</div>
                    <div class="txt-black">$17,885.00</div>
                  </div>
                </div>
                <div class="cart-checkout-btn mt-5">
                  <a href="#" class="btn btn-black btn-block">
                    Go to Checkout
                  </a>
                </div>
                <div class="cart-multiple-address text-center mt-4 mb-2">
                  <a href="#">Check Out with Multiple Addresses</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
