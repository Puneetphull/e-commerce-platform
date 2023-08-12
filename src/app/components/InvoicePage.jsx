import React from "react";
import CompanyLogo from "../assets/Logo/Company_Logo.png";
export function InvoicePage() {
  return (
    <div className="justify-content-center mt-4 row">
      <div className="col-xl-9 col-12">
        <div className="shadow position-relative p-4 p-md-5 card border-0">
          <div className="d-sm-flex justify-content-between border-bottom border-light pb-4 pb-md-5 mb-4 mb-md-5">
            <img
              src={CompanyLogo}
              width="200"
              height="200"
              className="image-md"
              alt="brand_logo"
            />
            <div>
              <h4>Rcube LLC.</h4>
              <div className="simple-list list-group">
                <div className="fw-normal list-group-item">
                  112 USA Square
                </div>
                <div className="fw-normal list-group-item">New York, USA</div>
                <div className="fw-normal list-group-item">
                  <a className="fw-bold text-primary card-link" href="/" >
                    company@rcube.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-6">
            <h1 className="mb-0">Invoice #300500</h1>
            <span className="badge-lg ms-4 badge bg-success">Paid</span>
          </div>
          <div className="justify-content-between mb-4 mb-md-5 row">
            <div className="col-sm col">
              <h5>Client Information:</h5>
              <div>
                <div className="list-group simple-list list-group">
                  <div className="fw-normal list-group-item">Riyaz Ali</div>
                  <div className="fw-normal list-group-item">RCube LLC</div>
                  <div className="fw-normal list-group-item">
                    311 West Mechanic Lane Middletown, NY 10940
                  </div>
                  <div className="fw-normal list-group-item">
                    <a className="fw-bold text-primary card-link" href="/" >
                      name@company.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm col-lg-4">
              <div className="text-sm-right row">
                <div className="col-6">
                  {" "}
                  <dt>
                    <strong>Invoice No.</strong>
                  </dt>
                </div>
                <div className="col-6">
                  {" "}
                  <dd>300500</dd>
                </div>
                <div className="col-6">
                  {" "}
                  <dt>
                    <strong>Date issued:</strong>
                  </dt>
                </div>
                <div className="col-6">
                  {" "}
                  <dd>28/04/2023</dd>
                </div>
                <div className="col-6">
                  {" "}
                  <dt>
                    <strong>Due Date:</strong>
                  </dt>
                </div>
                <div className="col-6">
                  {" "}
                  <dd>28/05/2023</dd>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="mb-0 table">
                  <thead className="bg-light border-top">
                    <tr>
                      <th className="border-0 text-left">Item</th>
                      <th className="border-0">Description</th>
                      <th className="border-0">Price</th>
                      <th className="border-0">Qty</th>
                      <th className="border-0">Total</th>
                    </tr>
                  </thead>
                  <tbody className="border-0">
                    <tr className="border-bottom">
                      <th className="h6 text-left fw-bold">Origin License</th>
                      <td>Extended License</td>
                      <td>$999,00</td>
                      <td>1</td>
                      <td>$999.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-end text-end mb-4 py-4">
                <div className="mt-4">
                  <table className="table-clear table">
                    <tbody>
                      <tr>
                        <td className="left">
                          <strong>Subtotal</strong>
                        </td>
                        <td className="right">$8497.00</td>
                      </tr>
                      <tr>
                        <td className="left">
                          <strong>Discount (20%)</strong>
                        </td>
                        <td className="right">$1699.40</td>
                      </tr>
                      <tr>
                        <td className="left">
                          <strong>VAT (10%)</strong>
                        </td>
                        <td className="right">$679.76</td>
                      </tr>
                      <tr>
                        <td className="left">
                          <strong>Total</strong>
                        </td>
                        <td className="right">
                          <strong>$7477.36</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h4>Payments to:</h4>
              <span>payment@RCube.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
