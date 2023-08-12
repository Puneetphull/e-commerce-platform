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
  
    <section className="plp-content">
    {isloading ? <Loader/> : ''}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="mobile-filter-btn">
              <i className="fas fa-filter"></i>
            </div>
            <div className="plp-filter">
              <div className="filter-heading-mobile">
                <div className="d-flex justify-content-between">
                  <div className="mob-heading-text">Shopping Options</div>
                  <div className="mob-heading-close-btn">
                    <i className="far fa-window-close"></i>
                  </div>
                </div>
              </div>

              <Accordion>
                <div className="filter-title border d-flex justify-content-between p-3 align-items-baseline">
                  <h2 className="text-uppercase">Filters</h2>
                  <a href="#" className="text-uppercase small">
                    Clear All
                  </a>
                </div>
                {/* <div className="selected-filter p-3 border-left border-right">
                  <div className="selected-creteria">selected</div>
                  <div className="selected-creteria">item</div>
                  <div className="selected-creteria">selected item</div>
                  <div className="selected-creteria">selected item</div>
                </div> */}
                {filterArray &&
                  filterArray.map((data, index) => (
                    <Accordion.Item className="card" eventKey={index}>
                      <Accordion.Header className="card-header" eventKey={index}>
                        <h5
                          className="mb-0"
                          data-toggle="collapse"
                          data-target="#Brands"
                        >
                          {data.label}
                        </h5>
                      </Accordion.Header>
                      <Accordion.Body className="card-body">
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
                {/* <div className="card">
                  <div className="card-header">
                    <h5
                      className="mb-0"
                      data-toggle="collapse"
                      data-target="#Color"
                    >
                      Color
                    </h5>
                  </div>
                  <div id="Color" className="collapse">
                    <div className="card-body">
                      <ul>
                        <li>
                          <a href="#">
                            White<span className="filter-qty">2</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Red<span className="filter-qty">3</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Green<span className="filter-qty">5</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Blue<span className="filter-qty">4</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5
                      className="mb-0"
                      data-toggle="collapse"
                      data-target="#Price"
                    >
                      Price
                    </h5>
                  </div>
                  <div id="Price" className="collapse">
                    <div className="card-body">
                      <ul>
                        <li>
                          <a href="#">
                            $0.00 - $99.99<span className="filter-qty">2</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            $100.00 - $199.99<span className="filter-qty">3</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            $200.00 and above<span className="filter-qty">5</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0" data-toggle="collapse" data-target="#Size">
                      Size
                    </h5>
                  </div>
                  <div id="Size" className="collapse">
                    <div className="card-body">
                      <ul>
                        <li>
                          <a href="#">
                            M<span className="filter-qty">2</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            L<span className="filter-qty">3</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            XL<span className="filter-qty">5</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </Accordion>
            </div>
          </div>
          <div className="col-md-9">
            <div className="sorting-bar">
              <div className="sortby-left">
                Sort By
                <select className="sorter-options">
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
              <div className="sortby-out">
                Show
                <select
                  className="sorter-options"
                  value={pageSize}
                  onChange={onPageSizeChange}
                >
                  <option value={3}>3</option>
                  <option value={6}>6</option>
                  <option value={9}>9</option>
                </select>
              </div>
            </div>

            <div className="product-listing">
              {product && product.map((data) => <ProductCard props={data} />)}
            </div>
          </div>
        </div>
        <div className="bottom-pagination-wrapper mb-5">
          <div className="sortby-out mx-2">
            Show
            <select
              className="sorter-options"
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
