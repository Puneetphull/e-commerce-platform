import React from "react";
import { Link } from "react-router-dom";
import ReactStars from 'react-stars';

export default function ProductCard({props}) {
  console.log(props)
  return (
    <div className="product-info">
      <div className="product-image">
        <Link to={`/product_details/${props?.sku}`}>
          <img src={props?.image?.url} alt="image" className="img-fluid"/>
        </Link>
      </div>
      <div className="star-rating-bg">
        <div className="star-rating mt-2">
          <ReactStars
            className="fa fa"
            count={5}
            size={20}
            value={props?.product_review}
            edit={false}
          />
        </div>
      </div>
      <div className="product-title">
        <Link to={`/product_details/${props?.sku}`}>{props?.name}</Link>
      </div>
      <div className="product-title">
       <div dangerouslySetInnerHTML={{__html:props?.short_description?.html}} />
      </div>
      <div className="product-price">
        {props?.type_id === "configurable" ? (
          "As low as  " +
         "$" +
          props?.price_range?.minimum_price?.regular_price?.value
        ) : props?.type_id === "grouped" ? (
          "Starting at  " +
        "$" +
          props?.price_range?.minimum_price?.regular_price?.value
        ) : props?.type_id === "bundle" ? (
          <div className="product-price-bundle" style={{ fontSize: "0.8rem" }}>
            <p style={{ marginBottom: "5px" }}>
              From :
              <span
                style={{
                  fontFamily: "Oswald,sans-serif",
                  fontWeight: "700",
                  fontSize: "1rem",
                }}
              >
                $
                {props?.price_from}
              </span>
            </p>
            <p style={{ gap: "0.5rem", alignItems: "baseline" }}>
              To :
              <span
                style={{
                  fontFamily: "Oswald,sans-serif",
                  fontWeight: "700",
                  fontSize: "1rem",
                }}
              >
                $ {props?.price_to}
              </span>
            </p>
          </div>
        ) :
          (
         
          "$" + props?.price_range?.minimum_price?.regular_price?.value)}
      </div>
    </div>
  );
}
