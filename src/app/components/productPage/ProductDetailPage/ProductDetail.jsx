import React from "react";

export function ProductDetail() {
  return (
    <div>
      <section class="pdp-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div class="pdp-product-image">
                <img src="images/tshirtpdp.jpg" alt="" class="img-fluid" />
                <div class="magnifying-glass">
                  <i class="fas fa-times"></i>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="pdp-product-description">
                <div class="page-title-wrapper">
                  <h1 class="page-title">Tommy Hilfiger</h1>
                  <div class="title-right-icon">
                    <div class="hover-product-wrap">
                      <a href="#" class="icon-link">
                        <i class="fa fa-chevron-left"></i>
                      </a>
                      <div class="hover-product">
                        <img src="images/tshirt1.jpg" />
                        <p>Left Image</p>
                      </div>
                    </div>
                    <div class="hover-product-wrap">
                      <a href="#" class="icon-link">
                        <i class="fa fa-chevron-right"></i>
                      </a>
                      <div class="hover-product">
                        <img src="images/tshirt1.jpg" />
                        <p>Right Image</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pdp-star-review mb-4">
                  <div class="star-rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <a href="#" class="review-txt">
                      Be the first to review this product
                    </a>
                  </div>
                </div>

                <div class="pdp-description-txt mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>

                <div class="pdp-price-availability mb-4">
                  <div class="product-price">$48.00</div>
                  <div class="product-availability">
                    <p>
                      Availability : <span>In stock</span>
                    </p>
                    <p>
                      SKU : <span>TShirt</span>
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div class="configurable-product-options text-13">
                  <div class="pdp-dropdown-option">
                    <label class="mb-1 font-weight-bold">Material</label>
                    <select class="form-control">
                      <option value="position" selected="selected">
                        Material
                      </option>
                      <option value="Canvas">Canvas</option>
                      <option value="leather">Leather</option>
                    </select>
                  </div>
                  <div class="pdp-radio-option mt-3">
                    <div class="mb-2 font-weight-bold">Color</div>
                    <ul>
                      <li>
                        <span class="circle selected"></span>
                        <span class="title">Red</span>
                      </li>
                      <li>
                        <span class="circle"></span>
                        <span class="title">Red</span>
                      </li>
                      <li>
                        <span class="circle"></span>
                        <span class="title">Red</span>
                      </li>
                    </ul>
                  </div>
                  <div class="pdp-box-options mt-3">
                    <div class="mb-2 font-weight-bold">Size</div>
                    <ul>
                      <li class="selected">L</li>
                      <li>M</li>
                      <li>S</li>
                      <li>XS</li>
                    </ul>
                  </div>
                </div>
                <hr></hr>
                <div class="quantity-addtocart-wrap my-4">
                  <div class="quantity-switcher">
                    <input
                      id="product-qty"
                      class="quantity-input"
                      value="1"
                      type="number"
                      min="1"
                      max="10"
                    />
                    <div class="increment-decrement-wrap">
                      <a
                        href="javascript:;"
                        onclick="increment()"
                        class="increment-btn"
                      >
                        <i class="fas fa-caret-up"></i>
                      </a>
                      <a
                        href="javascript:;"
                        onclick="decrement()"
                        class="decrement-btn"
                      >
                        <i class="fas fa-caret-down"></i>
                      </a>
                    </div>
                    <div class="addtocart-wrap">
                      <a href="#" class="btn btn-primary btn-black">
                        Add to cart
                      </a>
                    </div>
                    <div class="pdp-wishlist-compare-outer d-inline">
                      <a href="#" class="icon wishlist-btn">
                        <i class="fa fa-solid fa-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <hr></hr>

                <div class="pdp-social-icons">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="#">
                        <img src="images/linkedin.png" />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <img src="images/facebook.png" />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <img src="images/twitter.png" />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <img src="images/print-filled.png" />
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <img src="images/addition.png" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="pdp-review-pane-bottom my-5">
            <div class="more-information-wrap mb-5">
              <h4 class="heading-with-border">More Information</h4>
              <hr></hr>
              <table class="more-info-table">
                <tbody>
                  <tr>
                    <th>Size</th>
                    <td>XL</td>
                  </tr>
                  <tr>
                    <th>Brands</th>
                    <td>TOMMY HILFIGER</td>
                  </tr>
                  <tr>
                    <th>Color</th>
                    <td>Blue</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="review-information-wrap">
              <h4 class="heading-with-border">Reviews</h4>
              <hr></hr>
              <div class="tab-review-heading mt-4">
                <h3>YOU'RE REVIEWING:</h3>
                <h4>Tommy Hilfiger</h4>
              </div>
            </div>
            <div class="tab-rating-wrap my-5">
              <div class="your-rating-txt">
                Your Rating<span class="red"> *</span>
              </div>
              <div class="rating-wrap">
                <h4>Value</h4>
                <div class="star-rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="far fa-star"></span>
                  <span class="far fa-star"></span>
                </div>
              </div>
            </div>
            <div class="review-form-wrap">
              <div class="row">
                <div class="col-lg-5">
                  <form>
                    <div class="form-group">
                      <label class="label-txt" for="nickname">
                        Nickname
                      </label>
                      <input type="email" class="form-control" placeholder="" />
                      <span class="validation-txt">
                        This is a required field.
                      </span>
                    </div>
                    <div class="form-group">
                      <label class="label-txt" for="summary">
                        Summary
                      </label>
                      <input type="email" class="form-control" placeholder="" />
                      <span class="validation-txt">
                        This is a required field.
                      </span>
                    </div>
                    <div class="form-group">
                      <label class="label-txt" for="review">
                        Review
                      </label>
                      <textarea class="form-control" rows="3"></textarea>
                    </div>
                    <div class="submit-btn-wrap mt-5">
                      <button type="submit" class="btn btn-primary btn-black">
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
