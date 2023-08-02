import React, { useEffect, useState } from "react";
import "../../../css e-commerce/css/style.css";
import ProductCard from "../../../custom-components/ProductCard";
import { filterArray } from "../../../data/ProductList";
import { Accordion, Form } from "@themesberg/react-bootstrap";
import { productService } from "../../../api/product.service";
import CustomPagination from "../../../custom-components/pagination/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Loader } from "../../../custom-components/Loader";


export function ProductList() {
  const [product, setpouduct] = useState([]);
  const [sortOrder, setOrder] = useState("ASC");
  const [totalCount, setTotalCount] = useState(0);
  const [pageSize, setpageSize] = useState(3);
  const [pageNumber, setPageNumber] = useState(1);

  const [isloading,setloading] = useState(false);

  useEffect(() => {
    getProducts();
  }, [pageSize, pageNumber, sortOrder]);

  const onPageNumberChange = (page) => {
    setPageNumber(page);
  };

  const onPageSizeChange = (e) => {
    setpageSize(e.target.value);
  };


  const OnchangeSortOrder=()=>{
    if(sortOrder === "ASC"){
      setOrder("DESC");
    }
    else{
      setOrder("ASC")
    }
  }

  function getProducts() {
    // console.log(pagination)
   setloading(true);
    productService
      .getAllProductList(pageSize, pageNumber, sortOrder)
      .then((response) => {
        setpouduct(response.data.items);
        setTotalCount(response.data.total_count);
        setloading(false);
      });
  }

  return (
    <>
  
    <section class="plp-content">
    {isloading ? <Loader/> : ''}
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

              <Accordion>
                <div class="filter-title border d-flex justify-content-between p-3 align-items-baseline">
                  <h2 class="text-uppercase">Filters</h2>
                  <a href="#" class="text-uppercase small">
                    Clear All
                  </a>
                </div>
                {/* <div class="selected-filter p-3 border-left border-right">
                  <div class="selected-creteria">selected</div>
                  <div class="selected-creteria">item</div>
                  <div class="selected-creteria">selected item</div>
                  <div class="selected-creteria">selected item</div>
                </div> */}
                {filterArray &&
                  filterArray.map((data, index) => (
                    <Accordion.Item class="card" eventKey={index}>
                      <Accordion.Header class="card-header" eventKey={index}>
                        <h5
                          class="mb-0"
                          data-toggle="collapse"
                          data-target="#Brands"
                        >
                          {data.label}
                        </h5>
                      </Accordion.Header>
                      <Accordion.Body class="card-body">
                        <ul>
                          {data.options.map((children, index) => (
                            <li>
                              <Form.Check
                                label={
                                  children.label + " " + `(${children.count})`
                                }
                                id={`${children.label + index}`}
                                htmlFor="checkbox1"
                              />
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                {/* <div class="card">
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
                </div> */}
              </Accordion>
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
                {sortOrder === "ASC" ? (
                  <FontAwesomeIcon
                    className="ml-2"
                    role="button"
                    icon={faArrowUp}
                    onClick={OnchangeSortOrder}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="ml-2"
                    role="button"
                    onClick={OnchangeSortOrder}
                    icon={faArrowDown}
                  />
                )}
              </div>
              <div class="sortby-out">
                Show
                <select
                  class="sorter-options"
                  value={pageSize}
                  onChange={onPageSizeChange}
                >
                  <option value={3}>3</option>
                  <option value={6}>6</option>
                  <option value={9}>9</option>
                </select>
              </div>
            </div>

            <div class="product-listing">
              {product && product.map((data) => <ProductCard props={data} />)}
            </div>
          </div>
        </div>
        <div class="bottom-pagination-wrapper mb-5">
          <div class="sortby-out mx-2">
            Show
            <select
              class="sorter-options"
              value={pageSize}
              onChange={onPageSizeChange}
            >
              <option value={3}>3</option>
              <option value={6}>6</option>
              <option value={9}>9</option>
            </select>
          </div>
          <div>
            <CustomPagination
              currentPage={pageNumber}
              totalCount={totalCount}
              pageSize={pageSize}
              onPageChange={(page) => onPageNumberChange(page)}
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
