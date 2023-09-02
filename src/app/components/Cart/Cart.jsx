import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../services/actions";
import { Button } from "@themesberg/react-bootstrap";
import { Loader } from "../../custom-components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import { helperService } from "../../helper";

export function Cart() {
  const dispatch = useDispatch();
  const { productInCart, subTotal } = useSelector((state) => state.cartReducer);
  const { isLoading } = useSelector((state) => state.loaderReducer);

  const [updatedisable,setUpdatedisable] = useState(true);

  useEffect(() => {
    dispatch(cartActions.GETITEMSREQUEST());
  }, []);

  const updateProductQty = (type, item) => {
    setUpdatedisable(false);
    if (type === "inc") {
      dispatch(cartActions.INCREMENTSINGLEPRODUCTQTY(item));
    } else {
      dispatch(cartActions.DECREMENTSINGLEPRODUCTQTY(item));
    }
  };

  const upDateCart =()=>{
   dispatch(cartActions.UPDATE_PRODUCT_CART_REQUEST(helperService.updateProductInCart(productInCart)))
  }

  return (
    <>
      <Loader loading={isLoading} />
      <div>
        <section className="cart-page">
          <div className="container">
            <div className="heading-cart">
              <h3>Shopping Cart</h3>
            </div>
            {productInCart?.length > 0 ? (
              <div className="row">
                <div className="col-lg-8 cart-item-order">
                  <div className="cart-details-table-wrap">
                    <div className="custom-table">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="col">Item</th>
                            <th className="col">Price</th>
                            <th className="col">Qty</th>
                            <th className="col">Subtotal</th>
                            <th className="col">Delete</th>

                          </tr>
                        </thead>
                        {productInCart &&
                          productInCart.map((item, index) => (
                            <tbody key={index}>
                              <tr>
                                <td className="col td-cart-image">
                                  <div className="cart-title-image-wrap">
                                    <Link to="#" className="cart-image">
                                      <img
                                        src={
                                          item.extension_attributes?.image_url
                                        }
                                        alt="productimage"
                                      />
                                    </Link>
                                    <Link to="#" className="cart-title">
                                      {item.name}
                                    </Link>
                                  </div>
                                </td>

                                <td className="col td-cart-price">
                                  <div className="cart-product-price">
                                    ${item?.price}
                                  </div>
                                </td>
                                <td className="col td-cart-qty">
                                  <div className="cart-product-qty">
                                    <div className="quantity-switcher">
                                      <input
                                        className="quantity-input"
                                        value={item.qty}
                                        min="1"
                                        max="10"
                                      />
                                      <div className="increment-decrement-wrap">
                                        <button className="increment-btn">
                                          <FontAwesomeIcon
                                            role="button"
                                            icon={faCaretUp}
                                            onClick={() =>
                                              updateProductQty("inc", item)
                                            }
                                          />
                                        </button>
                                        <button className="decrement-btn">
                                          <FontAwesomeIcon
                                            role="button"
                                            icon={faCaretDown}
                                            onClick={() =>
                                              updateProductQty("dsec", item)
                                            }
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="col td-cart-subtotal">
                                  <div className="cart-subtotal-price">
                                    ${item.price * item.qty}
                                  </div>
                                </td>
                                <td className="col" colSpan="5">
                                  <div className="cart-edit-delete">
                                    {/* <a onClick={() => { UPDATESINGLEPRODUCT(item.item_id, item.sku, item.qty) }}><i className="fa fa-pencil-alt"></i></a> */}
                                    <Tooltip title="delete">
                                      <FontAwesomeIcon
                                        onClick={() =>
                                          dispatch(
                                            cartActions.REMOVECARTITEMREQUEST(
                                              item.item_id
                                            )
                                          )
                                        }
                                        role="button"
                                        icon={faTimes}
                                      />
                                    </Tooltip>
                                  </div>
                                </td>
                              </tr>
                            
                            </tbody>
                          ))}
                      </table>
                    </div>
                    {!updatedisable &&
                    <div className="update-cart-btn-wrap mb-5">
                      <Button disabled={updatedisable} onClick={upDateCart} className="btn btn-white">
                        Update Cart
                      </Button>
                    </div>
                    }
                    <div className="cart-gift-block">
                      <div
                        className="gift-card-title"
                        data-toggle="collapse"
                        data-target="#gift-collapse"
                        role="button"
                      >
                        Gift Options <i className="fa fa-chevron-down"></i>
                      </div>
                      <div className="collapse" id="gift-collapse">
                        <h4 className="pick-a-paper my-5">
                          Pick a paper of your choice (optional)
                        </h4>
                        <form className="form">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="gift-receipt"
                            />
                            <label
                              className="form-check-label"
                              for="gift-receipt"
                            >
                              Gift Receipt
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="printed-card"
                            />
                            <label
                              className="form-check-label"
                              for="printed-card"
                            >
                              Printed card
                            </label>
                          </div>
                        </form>
                        <p className="gift-price">
                          Price: <strong>$0.00</strong>
                        </p>
                        <div className="cancel-update-wrap my-5">
                          <Button className="btn btn-blank">Cancel</Button>
                          <Button disabled={true} className="btn btn-white">
                            Update
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="apply-discount-block mt-4 mb-5">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              for="ApplyDiscountCode"
                              id="ApplyDiscountCode"
                              className="discount-label"
                            >
                              Apply Discount Code
                            </label>
                            <div className="mobile-view apply-discount">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Discount Code"
                                />
                                <div className="input-group-append">
                                  <button
                                    className="btn btn-black"
                                    type="button"
                                  >
                                    Apply Discount
                                  </button>
                                </div>
                              </div>

                              <div className="my-3"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              for="GiftCards"
                              id="GiftCards"
                              className="discount-label"
                            >
                              Gift Cards
                            </label>
                            <div className="mobile-view apply-gift-card">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter the Gift Card Code"
                                />
                                <div className="input-group-append">
                                  <button
                                    className="btn btn-black"
                                    type="button"
                                  >
                                    Add Gift Card
                                  </button>
                                </div>
                              </div>

                              <div className="my-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-5"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 cart-summary-order">
                  <div className="cart-summary-section mb-3">
                    <h3 className="summary-title">Summary</h3>
                    {/* <div className="estimate-tax">
                    <div
                      className="estimate-title drop-arrow"
                      data-target="#estimate-collapse"
                      data-toggle="collapse"
                    >
                      Estimate Shipping and Tax
                    </div>
                    <div className="border-bottom">
                      <div className="collapse show" id="estimate-collapse">
                        <form>
                          <div className="form-group">
                            <label for="Country">Country</label>
                            <select className="form-control" id="Country">
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
                            <label for="State/Province">State/Province</label>
                            <select
                              className="form-control"
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
                            <label for="Zip/Postal">Zip/Postal Code</label>
                            <input
                              type="number"
                              className="form-control"
                              id="Zip/Postal"
                            />
                          </div>
                          <div className="form-group my-4 flat-rate">
                            <label for="Flat-Rate">Flat Rate</label>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="Flat-Rate"
                                value="option1"
                                checked
                              />
                              <label
                                className="form-check-label"
                                for="Flat-Rate"
                              >
                                Fixed <strong>$20.00</strong>
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div> */}
                    <div className="subtotal-shipping-order">
                      <div className="subtotal-wrap">
                        <div className="subtotal-head">Subtotal</div>
                        <div className="txt-black">
                          ${subTotal.base_subtotal}
                        </div>
                      </div>
                      <div className="subtotal-wrap pb-3 border-bottom">
                        <div className="subtotal-head">
                          Shipping (Flat Rate - Fixed)
                        </div>
                        <div className="txt-black">$20.00</div>
                      </div>
                      <div className="subtotal-wrap order">
                        <div className="subtotal-head">Order Total</div>
                        <div className="txt-black">${subTotal.grand_total}</div>
                      </div>
                    </div>
                    <div className="cart-checkout-btn mt-5">
                      <Link to="/shipping" className="btn btn-black btn-block">
                        Go to Checkout
                      </Link>
                    </div>
                    {/* <div className="cart-multiple-address text-center mt-4 mb-2">
                    <a href="#">Check Out with Multiple Addresses</a>
                  </div> */}
                  </div>
                </div>
              </div>
            ) : (
              <p>There is No Product in your cart</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
