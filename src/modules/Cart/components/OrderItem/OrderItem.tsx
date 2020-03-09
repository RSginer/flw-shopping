import React from 'react';
import { Order } from '../../../../models/Order';
import { InputNumber } from '../InputNumber/InputNumber';

import './OrderItem.scss';

export function OrderItem(props: Order) {
  return (
    <div className="order-item">
      <div className="order-product-image" style={{backgroundImage: `url('${props.product.image_url}')`}}></div>
      <div className="order-title-and-quantity">
        <span className="order-title">{props.product.productName}</span>
        <InputNumber value={props.quantity} max={props.product.stock || 1} />
      </div>
      <div className="order-price">{props.product.price}</div>
    </div>
  );
}
