import React, { useEffect, useState } from 'react'
import { userService } from '../../api';

export  function ViewOrder({increment_id}) {
    const [state,setState] = useState();
    useEffect(()=>{
     getOrderDetails(); 
    },[increment_id])

   function getOrderDetails(){
      userService.viewOrderDetails(increment_id).then(response=>{
        if(response && response.status === 200){
            setState(response.data);
        }
      })
    }

    // const PrintReciept = () => {
    //   html2canvas(document.querySelector("#divtarget")).then((canvas) => {
    //     const ImgData = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF({
    //       orientation: 'landscape',
    //     });
    //     const imgProps = pdf.getImageProperties(ImgData);
    //     const pdfWidth = pdf.internal.pageSize.getWidth();
    //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    //     pdf.addImage(ImgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    //     pdf.save('inVoice.pdf');
    //   })
    // }

  return (
    <div class="view-order" id='divtarget'  >
    <div class="status-date-block">
      <h3 class="slim-heading">Order # {state?.increment_id} <small class="text-muted border text-uppercase px-2">{state?.status}</small></h3>
      <p class="mb-4"></p>
      <div className='d-flex justify-content-between m-3'>
        {/* <a href="javascript:void(0)">Reorder</a> */}
        {/* <a href="javascript:void(0)">Print</a> */}
      </div>
    </div>
    <div class="view-order-table">
      <table class="table">
        <tr>

          <th>Product Name</th>

          <th>sku </th>

          <th>Price</th>

          <th class="text-right">Quantity</th>

          <th class="text-right">Price</th>

        </tr>
        <tbody>

          {state?.items?.map((item, index) => {
            // if (item.product_type === "bundle") {

            //   return (
            //     <React.Fragment key={index} >
            //       <tr>
            //         <td>{item.name}</td>
            //         <td>{item.sku}	</td>
            //         <td>${item.price}	</td>
            //         <td class="text-right">{item.qty_ordered}</td>
            //         <td class="text-right">${item.price}</td>
            //       </tr>
            //       {item?.extension_attributes?.bundle_option.map((item) => {
            //         return (
            //           <React.Fragment>
            //             <tr class="combo-product-heading">
            //               <td class="font-weight-bold" colspan="5">{JSON.parse(item).option_label}</td>
            //             </tr>

            //             <tr class="combo-product-details">
            //               <td>
            //                 {JSON.parse(item).option_data}
            //               </td>
            //               <td>
            //                 {JSON.parse(item).option_sku}
            //               </td>
            //               <td><span class="sr-only">Blank TD for alignment</span></td>
            //               <td class="text-right">
            //                 Ordered {JSON.parse(item).option_qty}
            //               </td>
            //               <td><span class="sr-only">Blank TD for alignment</span></td>
            //             </tr>
            //           </React.Fragment>
            //         )
            //       })}
            //     </React.Fragment>
            //   )
            // }
            // else if (item.product_type === "configurable") {
            //   return (
            //     <React.Fragment key={index} >
            //       <tr>
            //         <td>{item.name}</td>
            //         <td>{item.sku}	</td>
            //         <td>${item.price}	</td>
            //         <td class="text-right">{item.qty_ordered}</td>
            //         <td class="text-right">${item.price}</td>
            //       </tr>
            //       {item?.extension_attributes?.configurable_option?.map((item) => {
            //         console.log((item), "item")
            //         return (
            //           <React.Fragment>
            //             <tr class="combo-product-heading">
            //               <td class="font-weight-bold" colspan="5">{JSON.parse(item).option_label}</td>
            //             </tr>

            //             <tr class="combo-product-details">
            //               <td>
            //                 {JSON.parse(item).option_data}
            //               </td>
            //             </tr>
            //           </React.Fragment>
            //         )
            //       })}
            //     </React.Fragment>
            //   )
            // }
       
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.sku}</td>
                  <td>${item.price}</td>
                  <td className="text-right">{item.qty_ordered}</td>
                  <td className="text-right">${item.price * item.qty_ordered} </td>
                </tr>
              )
            }

          )}

          <tr>
            <td colspan="4" class="text-right">Subtotal</td>
            <td class="text-right">${state?.base_subtotal}</td>
          </tr>
          <tr>
            <td colspan="4" class="text-right">Shipping &amp; Handling</td>
            <td class="text-right">${state?.base_shipping_amount}</td>
          </tr>
          <tr>
            <td colspan="4" class="text-right font-weight-bold">Estimated Total</td>
            <td class="text-right font-weight-bold">${state?.base_grand_total}</td>
          </tr>

        </tbody>
      </table>
      {/* <div class="my-3">
        <a href='javascript:void(0)' onClick={props?.OpenModal} >Back to my Orders</a>
      </div> */}
      <div>
        <div class="row">
          <div class="col-lg-3 mb-4">
            <div class="card">
              <div class="card-header">
                Shipping Address
              </div>
              <div class="card-body">
                <i className="fas fa-address-book"></i>
                <p>{state?.extension_attributes?.shipping_assignments[0]?.shipping?.address?.firstname}</p>
                <p>{state?.extension_attributes?.shipping_assignments[0]?.shipping?.address?.lastname}</p>
                <p>{state?.extension_attributes?.shipping_assignments[0]?.shipping?.address?.country_id}</p>
                <p>{state?.extension_attributes?.shipping_assignments[0]?.shipping?.address?.region}</p>
                <p>{state?.extension_attributes?.shipping_assignments[0]?.shipping?.address?.city}</p>
                <p>{state?.extension_attributes?.shipping_assignments[0]?.shipping?.address?.street}</p>
                <p>{state?.extension_attributes?.shipping_assignments[0]?.shipping?.address?.postcode}</p>
              </div>
              {/* <div class="card-footer">
                <ul class="list-inline">
                  <li class="list-inline-item"><a href="#" class="list-inline-item" data-target=".edit-account-wrap" data-toggle="collapse">Edit</a></li>
                </ul>
              </div> */}
            </div>
          </div>
          <div class="col-lg-3 mb-4">
            <div class="card">
              <div class="card-header">
                Shipping Method
              </div>
              <div class="card-body">
                <p> <i className="fas fa-shipping-fast"></i> {state?.shipping_description}</p>
              </div>
              {/* <div class="card-footer">
                <ul class="list-inline">
                  <li class="list-inline-item"></li>
                </ul>
              </div> */}
            </div>
          </div>
          <div class="col-lg-3 mb-4">
            <div class="card">
              <div class="card-header">
                Billing Address
              </div>
              <div class="card-body">
                <p>{state?.billing_address?.firstname}</p>
                <p>{state?.billing_address?.lastname}</p>
                <p>{state?.billing_address?.country_id}</p>
                <p>{state?.billing_address?.region}</p>
                <p>{state?.billing_address?.city}</p>
                <p>{state?.billing_address?.street}   {state?.billing_address?.postcode}</p>
              </div>
              {/* <div class="card-footer">
                <ul class="list-inline">
                  <li class="list-inline-item"></li>
                </ul>
              </div> */}
            </div>
          </div>
          <div class="col-lg-3 mb-4">
            <div class="card">
              <div class="card-header">
                Payment Method
              </div>
              <div class="card-body">
                <p><i className="fas fa-money-bill-wave mr-1"></i>{state?.payment?.method}</p>
              </div>
              {/* <div class="card-footer">
                <ul class="list-inline">
                  <li class="list-inline-item"></li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
