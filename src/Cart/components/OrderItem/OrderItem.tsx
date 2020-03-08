import React from 'react';
import { Order } from '../../../models/Order';


import './OrderItem.scss';

function OrderItem(props: Order) {
  return (
    <div className="order-item">
      <div className="order-product-image" style={{backgroundImage: `url('${props.product.image_url}')`}}></div>
      <div className="order-title-and-quantity">
        <span className="order-title">{props.product.productName}</span>
        <input type="number" value={props.quantity} />
      </div>
      <div className="order-price">{props.product.price}</div>
    </div>
  );
}

export default OrderItem;