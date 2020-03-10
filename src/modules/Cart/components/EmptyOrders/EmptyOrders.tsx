import React from 'react';

import './EmptyOrders.scss';
import { ShoppingCart } from 'react-feather';

export function EmptyOrders() {
  return (
    <div className="empty-orders">
      <p>
        Empty cart <ShoppingCart size={20} />
      </p>
    </div>
  );
}
