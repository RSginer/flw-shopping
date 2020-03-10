import React from 'react';
import { Order } from '../../../../models/Order';
import { InputNumber } from '../InputNumber/InputNumber';

import './OrderItem.scss';

export interface IOrderItem {
  order: Order;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function OrderItem(props: IOrderItem) {
  return (
    <div className="order-item">
      <div
        className="order-product-image"
        style={{ backgroundImage: `url('${props.order.product.image_url}')` }}
      />
      <div className="order-title-and-quantity">
        <span className="order-title">{props.order.product.productName}</span>
        <InputNumber
          onIncrease={props.onIncrease}
          onDecrease={props.onDecrease}
          value={props.order.quantity}
          max={props.order.product.stock || 1}
        />
      </div>
      <div className="order-price">
        {props.order.product &&
          props.order.product.price &&
          props.order.product.price * props.order.quantity}
      </div>
    </div>
  );
}
