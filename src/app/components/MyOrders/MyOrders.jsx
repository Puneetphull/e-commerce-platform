import React, { useEffect, useState } from "react";
import { RcTable } from "../../custom-components/Table";
import { Card, Col, Row,Button } from "@themesberg/react-bootstrap";
import { userService } from "../../api";

export const MyOrder = () => {

    const [currentPage,setCurrentPage] = useState(1);
    const [pageSize,setPageSize] = useState(5);
    const [sortOrder,setSortOrder] = useState("ASC");
    const [orderList,setOrders] = useState([]);
    const [totalCount,setTotalCount] = useState(0);

    useEffect(()=>{
     MyOrderList();
    },[pageSize,currentPage,sortOrder])

    async function  MyOrderList(){
       let response =  await userService.customerOrdersList(6,pageSize,currentPage,sortOrder);
       if(response.status === 200){
        setOrders(response.data.items);
        setTotalCount(response.data.total_count)
       }
    }
  const columns = [
    { Header: "Order Number", accessor: "increment_id" },
    { Header: "Order Date", accessor: "created_at" },
    { Header: "Order Total", accessor: "grand_total" },
    { Header: "Order Status", accessor: "state" },
    { Header: "Actions", accessor: "status", Cell: (props) => {
        return (
          <>
            <Button
              variant={ props.value === "completed"
                  ? "success"
                  : "danger"
              }
              size="sm"
              className="m-2"
            >
              {props.value === "completed" ? "Return " : "Cancel Order"}
            </Button>
          </>
        );
      },
    }
  ];

  return (
    <main>
      <div class="d-block mb-4 mb-md-0">
        <h4>My Orders</h4>
        <p class="mb-0">All the Order</p>
      </div>
      {/* <Card className="mb-2">
        <Card.Body>
          <div class="table-settings">
            <div class="justify-content-between align-items-center row">
              <div class="d-md-flex col-lg-8 col-9">
                <div class="me-2 me-lg-3 fmxw-300 input-group">
                  <input
                    placeholder="Search users"
                    type="text"
                    class="form-control"
                    value=""
                  />
                </div>
                <select class="fmxw-200 d-none d-md-inline form-select">
                  <option value="all">All</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
              <div class="d-flex justify-content-end col-lg-4 col-3">
                <div role="group" class="btn-group">
                  <div class="me-1 dropdown">
                    <button
                      id="react-aria2805492218-13"
                      aria-expanded="false"
                      type="button"
                      class="text-dark m-0 p-1 dropdown-toggle dropdown-toggle-split btn btn-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="icon icon-sm"
                      >
                        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="dropdown">
                    <button
                      id="react-aria2805492218-14"
                      aria-expanded="false"
                      type="button"
                      class="text-dark m-0 p-1 dropdown-toggle dropdown-toggle-split btn btn-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="icon icon-sm"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card> */}
      <Row>
        <Col xs={12}>
          <Card className="shadow mb-4 card border-0">
            <Card.Body>
              <RcTable columns={columns} data={orderList} totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} enablePagination={true} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </main>
  );
};
