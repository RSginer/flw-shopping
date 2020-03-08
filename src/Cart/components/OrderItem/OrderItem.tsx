import React from 'react';
import { Product } from '../../../models/Product';

import './OrderItem.scss';

export interface IOrderItem {
  product: Product;
  quantity: number;
}

function OrderItem(props: IOrderItem) {
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