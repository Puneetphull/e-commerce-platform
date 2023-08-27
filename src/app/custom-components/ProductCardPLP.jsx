import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCardPLP({props}) {
  return (
      <div className="product-info">
    <div className="product-image">
        <Link to={`/productdetail/${props.sku}`}><img src={props.image.url} alt="image" className="img-fluid" /></Link>
    </div>
    <div className="star-rating-bg">
        <div className="star-rating mt-2">
        {/* <StarRating starClassName='fa fa' count={5} unit={"float"} size={18} initialRating={props.product_review} isReadOnly={true} /> */}
        </div>
    </div>
    <div className="product-title">
        <Link to={`/productdetail/${props.sku}`}>
            {props.name}
        </Link>
    </div>
    <div className="product-title">
       <div dangerouslySetInnerHTML={{__html:props.short_description?.html}} />
      </div>
    <div className="product-price">${props.price_range.minimum_price.regular_price.value}</div>  
</div>
  )
}
