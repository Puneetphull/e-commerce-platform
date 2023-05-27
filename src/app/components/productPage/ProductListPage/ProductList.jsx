import React from "react";
import "../../../css e-commerce/css/style.css";
import ProductCard from "../../../custom-components/ProductCard";
import { productlist } from "../../../data/ProductList";

export function ProductList() {
    console.log(productlist)
  return (
    <section class="plp-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <div class="mobile-filter-btn">
              <i class="fas fa-filter"></i>
            </div>
            <div class="plp-filter">
              <div class="filter-heading-mobile">
                <div class="d-flex justify-content-between">
                  <div class="mob-heading-text">Shopping Options</div>
                  <div class="mob-heading-close-btn">
                    <i class="far fa-window-close"></i>
                  </div>
                </div>
              </div>

              <div id="accordion">
                <div class="filter-title border d-flex justify-content-between p-3 align-items-baseline">
                  <h2 class="text-uppercase">Filters</h2>
                  <a href="#" class="text-uppercase small">
                    Clear All
                  </a>
                </div>
                <div class="selected-filter p-3 border-left border-right">
                  <div class="selected-creteria">selected</div>
                  <div class="selected-creteria">item</div>
                  <div class="selected-creteria">selected item</div>
                  <div class="selected-creteria">selected item</div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <h5
                      class="mb-0"
                      data-toggle="collapse"
                      data-target="#Brands"
                    >
                      Brands
                    </h5>
                  </div>
                  <div id="Brands" class="collapse show">
                    <div class="card-body">
                      <ul>
                        <li>
                          <a href="#">PUMA</a>
                        </li>
                        <li>
                          <a href="#">GUCCI</a>
                        </li>
                        <li>
                          <a href="#">CHANEL</a>
                        </li>
                        <li>
                          <a href="#">TOMY HILFIGER</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <h5
                      class="mb-0"
                      data-toggle="collapse"
                      data-target="#Color"
                    >
                      Color
                    </h5>
                  </div>
                  <div id="Color" class="collapse">
                    <div class="card-body">
                      <ul>
                        <li>
                          <a href="#">
                            White<span class="filter-qty">2</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Red<span class="filter-qty">3</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Green<span class="filter-qty">5</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Blue<span class="filter-qty">4</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <h5
                      class="mb-0"
                      data-toggle="collapse"
                      data-target="#Price"
                    >
                      Price
                    </h5>
                  </div>
                  <div id="Price" class="collapse">
                    <div class="card-body">
                      <ul>
                        <li>
                          <a href="#">
                            $0.00 - $99.99<span class="filter-qty">2</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            $100.00 - $199.99<span class="filter-qty">3</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            $200.00 and above<span class="filter-qty">5</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <h5 class="mb-0" data-toggle="collapse" data-target="#Size">
                      Size
                    </h5>
                  </div>
                  <div id="Size" class="collapse">
                    <div class="card-body">
                      <ul>
                        <li>
                          <a href="#">
                            M<span class="filter-qty">2</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            L<span class="filter-qty">3</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            XL<span class="filter-qty">5</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="sorting-bar">
              <div class="sortby-left">
                Sort By
                <select class="sorter-options">
                  <option value="position" selected="selected">
                    Position
                  </option>
                  <option value="name">Product Name</option>
                  <option value="price">Price</option>
                  <option value="brand">Brand</option>
                </select>
                <a href="#">
                  <i class="fa fas fa-arrow-up"></i>
                </a>
              </div>
              <div class="sortby-out">
                Show
                <select class="sorter-options">
                  <option value="12" selected="selected">
                    12
                  </option>
                  <option value="24">24</option>
                  <option value="36">36</option>
                </select>
              </div>
            </div>

            <div class="product-listing">
              {productlist.map((data) => (
                <ProductCard props={data} />
              ))}
            </div>
          </div>
        </div>
        <div class="bottom-pagination-wrapper mb-5">
          <div class="sortby-out mx-2">
            Show
            <select class="sorter-options">
              <option value="12" selected="selected">
                12
              </option>
              <option value="24">24</option>
              <option value="36">36</option>
            </select>
          </div>
          <div>
            <nav class="pagination-nav">
              <ul class="pagination pagination-sm">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span>&laquo;</span>
                  </a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
