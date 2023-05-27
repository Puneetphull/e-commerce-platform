import React from "react";
import CompanyLogo from "../assets/Logo/Company_Logo.png";
export function InvoicePage() {
  return (
    <div class="justify-content-center mt-4 row">
      <div class="col-xl-9 col-12">
        <div class="shadow position-relative p-4 p-md-5 card border-0">
          <div class="d-sm-flex justify-content-between border-bottom border-light pb-4 pb-md-5 mb-4 mb-md-5">
            <img
              src={CompanyLogo}
              width="200"
              height="200"
              class="image-md"
              alt="brand_logo"
            />
            <div>
              <h4>Rcube LLC.</h4>
              <div class="simple-list list-group">
                <div class="fw-normal list-group-item">
                  112 USA Square
                </div>
                <div class="fw-normal list-group-item">New York, USA</div>
                <div class="fw-normal list-group-item">
                  <a class="fw-bold text-primary card-link" href="/" >
                    company@rcube.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-center mb-6">
            <h1 class="mb-0">Invoice #300500</h1>
            <span class="badge-lg ms-4 badge bg-success">Paid</span>
          </div>
          <div class="justify-content-between mb-4 mb-md-5 row">
            <div class="col-sm col">
              <h5>Client Information:</h5>
              <div>
                <div class="list-group simple-list list-group">
                  <div class="fw-normal list-group-item">Riyaz Ali</div>
                  <div class="fw-normal list-group-item">RCube LLC</div>
                  <div class="fw-normal list-group-item">
                    311 West Mechanic Lane Middletown, NY 10940
                  </div>
                  <div class="fw-normal list-group-item">
                    <a class="fw-bold text-primary card-link" href="/" >
                      name@company.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm col-lg-4">
              <div class="text-sm-right row">
                <div class="col-6">
                  {" "}
                  <dt>
                    <strong>Invoice No.</strong>
                  </dt>
                </div>
                <div class="col-6">
                  {" "}
                  <dd>300500</dd>
                </div>
                <div class="col-6">
                  {" "}
                  <dt>
                    <strong>Date issued:</strong>
                  </dt>
                </div>
                <div class="col-6">
                  {" "}
                  <dd>28/04/2023</dd>
                </div>
                <div class="col-6">
                  {" "}
                  <dt>
                    <strong>Due Date:</strong>
                  </dt>
                </div>
                <div class="col-6">
                  {" "}
                  <dd>28/05/2023</dd>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="table-responsive">
                <table class="mb-0 table">
                  <thead class="bg-light border-top">
                    <tr>
                      <th class="border-0 text-left">Item</th>
                      <th class="border-0">Description</th>
                      <th class="border-0">Price</th>
                      <th class="border-0">Qty</th>
                      <th class="border-0">Total</th>
                    </tr>
                  </thead>
                  <tbody class="border-0">
                    <tr class="border-bottom">
                      <th class="h6 text-left fw-bold">Origin License</th>
                      <td>Extended License</td>
                      <td>$999,00</td>
                      <td>1</td>
                      <td>$999.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="d-flex justify-content-end text-end mb-4 py-4">
                <div class="mt-4">
                  <table class="table-clear table">
                    <tbody>
                      <tr>
                        <td class="left">
                          <strong>Subtotal</strong>
                        </td>
                        <td class="right">$8497.00</td>
                      </tr>
                      <tr>
                        <td class="left">
                          <strong>Discount (20%)</strong>
                        </td>
                        <td class="right">$1699.40</td>
                      </tr>
                      <tr>
                        <td class="left">
                          <strong>VAT (10%)</strong>
                        </td>
                        <td class="right">$679.76</td>
                      </tr>
                      <tr>
                        <td class="left">
                          <strong>Total</strong>
                        </td>
                        <td class="right">
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
