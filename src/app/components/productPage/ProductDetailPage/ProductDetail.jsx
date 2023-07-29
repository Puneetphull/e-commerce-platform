import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useParams, Link } from "react-router-dom";
import { Button } from "@themesberg/react-bootstrap";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { productService } from "../../../api/product.service";
import { productlist } from "../../../data/ProductList";

import { useDispatch } from "react-redux";
import { helperService } from "../../../helper/helperFunction";
import { cartActions } from "../../../services/actions/product.action";

export function ProductDetail() {
  const dispatch = useDispatch();
  const params = useParams();
  const [productdetail, setproductdetail] = useState();
  const [quanity, setquantity] = useState(1);

  useEffect(() => {
    if (params && params.productName) {
      getProductDetails(params.productName);
    }
  }, []);

  const changeQtyHandler = (type) => {
    if (quanity >= 1 && type === "inc") {
      setquantity((prev) => prev + 1);
    }
    if (quanity > 1 && type === "dec") {
      setquantity((prev) => prev - 1);
    }
  };

  function addToCart() {
    dispatch(cartActions.ADDCARTREQUEST(helperService.addProductForServer(productdetail.sku, quanity)));
  }

  function getProductDetails(skuName) {
    productService.getProductDetail(skuName).then((response) => {
      console.log(response.data);
      setproductdetail(response.data);
    });
  }
  return (
    <div>
      <section className="pdp-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="pdp-product-image">
                <img
                  src={productdetail?.media_gallery_entries[0]?.file}
                  alt=""
                  className="img-fluid"
                />
                <div className="magnifying-glass">
                  <i className="fas fa-times"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pdp-product-description">
                <div className="page-title-wrapper">
                  <h1 className="page-title">{productdetail?.name}</h1>
                  <div className="title-right-icon">
                    <div className="hover-product-wrap">
                      <Link to="#" className="icon-link">
                        <i className="fa fa-chevron-left"></i>
                      </Link>
                      <div className="hover-product">
                        <img src="images/tshirt1.jpg" alt="t-shirt" />
                        <p>Left Image</p>
                      </div>
                    </div>
                    <div className="hover-product-wrap">
                      <Link to="#" className="icon-link">
                        <i className="fa fa-chevron-right"></i>
                      </Link>
                      <div className="hover-product">
                        <img alt="t-shirt" src="images/tshirt1.jpg" />
                        <p>Right Image</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pdp-star-review mb-4">
                  <div className="star-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <a href="#" className="review-txt">
                      Be the first to review this product
                    </a>
                  </div>
                </div>

                <div className="pdp-description-txt mb-5">
                <div dangerouslySetInnerHTML={{__html:productdetail?.custom_attributes?.find(data=>data.attribute_code === "short_description")?.value}}/>
                </div>

                <div className="more-information-wrap mb-2">
                  {/* <h4 className="heading-with-border">More Information</h4>
                  <hr></hr> */}
                  <table className="more-info-table">
                    <tbody>
                      <tr>
                        <th>Size</th>
                        <td>XL</td>
                      </tr>
                      <tr>
                        <th>Brands</th>
                        <td>{productdetail?.name}</td>
                      </tr>
                      <tr>
                        <th>Color</th>
                        <td>Black</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="pdp-price-availability mb-4">
                  <div className="product-price">
                    $
                    {
                      productdetail?.price
                    }
                  </div>
                  <div className="product-availability">
                    <p>
                      Availability : <span>In stock</span>
                    </p>
                    <p>
                      SKU : <span>{productdetail?.sku}</span>
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div className="configurable-product-options text-13">
                  {/* <div className="pdp-dropdown-option">
                    <label className="mb-1 font-weight-bold">Material</label>
                    <select className="form-control">
                      <option value="position" selected="selected">
                        Material
                      </option>
                      <option value="Canvas">Canvas</option>
                      <option value="leather">Leather</option>
                    </select>
                  </div>
                  <div className="pdp-radio-option mt-3">
                    <div className="mb-2 font-weight-bold">Color</div>
                    <ul>
                      <li>
                        <span className="circle selected"></span>
                        <span className="title">Red</span>
                      </li>
                      <li>
                        <span className="circle"></span>
                        <span className="title">Red</span>
                      </li>
                      <li>
                        <span className="circle"></span>
                        <span className="title">Red</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pdp-box-options mt-3">
                    <div className="mb-2 font-weight-bold">Size</div>
                    <ul>
                      <li className="selected">L</li>
                      <li>M</li>
                      <li>S</li>
                      <li>XS</li>
                    </ul>
                  </div> */}
                </div>
                <hr></hr>
                <div className="quantity-addtocart-wrap my-4">
                  <div className="quantity-switcher">
                    <input
                      id="product-qty"
                      className="quantity-input"
                      value={quanity}
                      type="number"
                      min="1"
                      max="10"
                    />
                    <div className="increment-decrement-wrap">
                      <FontAwesomeIcon
                        icon={faCaretUp}
                        className="increment-btn"
                        role="button"
                        onClick={()=>{changeQtyHandler('inc')}}
                      />
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        className="decrement-btn"
                        role="button"
                        onClick={()=>{changeQtyHandler('dec')}}
                      />
                    </div>
                    <div className="addtocart-wrap">
                      <Button
                        onClick={addToCart}
                        className="btn btn-primary btn-black"
                      >
                        Add to cart
                      </Button>
                    </div>
                    <div className="pdp-wishlist-compare-outer d-inline">
                      {/* //<FontAwesomeIcon icon={faHeart} className="icon wishlist-btn" /> */}
                      <a href="#" className="icon wishlist-btn">
                        <i className="fa fa-solid fa-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <hr></hr>

                <div className="pdp-social-icons">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </li>
                    <li className="list-inline-item">
                      <FontAwesomeIcon icon={faFacebook} />
                    </li>
                    <li className="list-inline-item">
                      <FontAwesomeIcon icon={faTwitter} />
                    </li>
                    {/* <li className="list-inline-item">
                      <a href="#">
                        <img src="images/print-filled.png" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <img src="images/addition.png" />
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pdp-review-pane-bottom my-5">
            <div className="more-information-wrap mb-5">
              <h4 className="heading-with-border">More Information</h4>
              <hr></hr>
              <table className="more-info-table">
                <tbody>
                  <tr>
                    <th>Description</th>
                    <td>
                    <div dangerouslySetInnerHTML={{__html:productdetail?.custom_attributes?.find(data=>data.attribute_code === "short_description")?.value}}/>
                    </td>
                  </tr>
                  <tr>
                    <th>Size</th>
                    <td>XL</td>
                  </tr>
                  <tr>
                    <th>Brands</th>
                    <td>{productdetail?.name}</td>
                  </tr>
                  <tr>
                    <th>Color</th>
                    <td>Blue</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="review-information-wrap">
              <h4 className="heading-with-border">Reviews</h4>
              <hr></hr>
              <div className="tab-review-heading mt-4">
                <h3>YOU'RE REVIEWING:</h3>
                <h4>Electric Brush</h4>
              </div>
            </div>
            <div className="tab-rating-wrap my-5">
              <div className="your-rating-txt">
                Your Rating<span className="red"> *</span>
              </div>
              <div className="rating-wrap">
                <h4>Value</h4>
                <div className="star-rating">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="far fa-star"></span>
                  <span className="far fa-star"></span>
                </div>
              </div>
            </div>
            <div className="review-form-wrap">
              <div className="row">
                <div className="col-lg-5">
                  <form>
                    <div className="form-group">
                      <label className="label-txt" for="nickname">
                        Nickname
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder=""
                      />
                      <span className="validation-txt">
                        This is a required field.
                      </span>
                    </div>
                    <div className="form-group">
                      <label className="label-txt" for="summary">
                        Summary
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder=""
                      />
                      <span className="validation-txt">
                        This is a required field.
                      </span>
                    </div>
                    <div className="form-group">
                      <label className="label-txt" for="review">
                        Review
                      </label>
                      <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <div className="submit-btn-wrap mt-5">
                      <button
                        type="submit"
                        className="btn btn-primary btn-black"
                      >
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
