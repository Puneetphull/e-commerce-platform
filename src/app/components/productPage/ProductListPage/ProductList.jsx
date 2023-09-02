import React, { useEffect, useState } from "react";
 import "../../../css e-commerce/css/style.css";
// import ProductCard from "../../../custom-components/ProductCard";
// import { filterArray } from "../../../data/ProductList";
import { Accordion, Form } from "@themesberg/react-bootstrap";
import { productService } from "../../../api/product.service";
import CustomPagination from "../../../custom-components/pagination/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Loader } from "../../../custom-components/Loader";
import ProductCardPLP from "../../../custom-components/ProductCardPLP";



export function ProductList() {
  const [product, setpouduct] = useState([]);
  const [sortOrder, setOrder] = useState("ASC");
  const [totalCount, setTotalCount] = useState(0);
  const [pageSize, setpageSize] = useState(3);
  const [pageNumber, setPageNumber] = useState(1);

  const [filterOptins,setFilterOptions] = useState([]);

  const [selectedSortBy,setselectedSortBy] = useState("position");

  const [selectedFilter,setselectedFilter] = useState(null);

  const [isloading,setloading] = useState(false);

  const [categoryId,setCtegoryId] = useState(9);

  const [price,setPrice] = useState({from:'',to:''});

  useEffect(() => {
    getProducts();
  }, [pageSize, pageNumber, sortOrder,selectedSortBy,price,categoryId]);

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

  const changeFilterOptins = (selectedParentOption,selectedChildOption)=>{
   if(selectedParentOption.attribute_code === "price"){
    let priceRange = selectedChildOption.value.split('_')
    setPrice(JSON.parse(JSON.stringify({...price,from:priceRange[0],to:priceRange[1]})))
  }
  else if(selectedParentOption.attribute_code === "category_uid"){
      setCtegoryId(selectedChildOption.value);
  }
  // setselectedFilter(selectedChildOption.value)
   console.log(selectedFilter)
  }


  const onClearFilter = ()=>{
    setCtegoryId(9);
    setPrice({...price,from:'',to:''});
  }



  const onChangeSortBy = (e)=>{
   setselectedSortBy(e.target.value)
  }

  function getProducts() {
   setloading(true);
    productService.getProductList(categoryId,pageSize,pageNumber,selectedFilter,price,selectedSortBy,sortOrder)
      .then((response) => {
        setpouduct(response.data[0].data.products.items);
        setTotalCount(response.data[0].data.products.total_count);
        setFilterOptions(response.data[0].data.products.aggregations)
        setloading(false);
      });
  }

  return (
    <>
  
    <section className="plp-content">
    {isloading ? <Loader loading={isloading} /> : ''}
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
                  <div onClick={onClearFilter} className="text-uppercase small link-click">
                    Clear All
                  </div>
                </div>
                {/* <div className="selected-filter p-3 border-left border-right">
                  <div className="selected-creteria">selected</div>
                  <div className="selected-creteria">item</div>
                  <div className="selected-creteria">selected item</div>
                  <div className="selected-creteria">selected item</div>
                </div> */}
                {filterOptins &&
                  filterOptins.map((data, index) => (
                    <Accordion.Item className="card" eventKey={index}>
                      <Accordion.Header className="card-header" eventKey={index}>
                          {data.label}
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
                                onChange={()=>changeFilterOptins(data,children)}
                                htmlFor="checkbox1"
                              />
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
              </Accordion>
            </div>
          </div>
          <div className="col-md-9">
            <div className="sorting-bar">
              <div className="sortby-left">
                Sort By
                <select className="sorter-options" onChange={onChangeSortBy}>
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
              {product && product.map((data) => <ProductCardPLP props={data} />)}
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
