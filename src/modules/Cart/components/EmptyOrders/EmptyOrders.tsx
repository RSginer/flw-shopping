import React from 'react';

import './EmptyOrders.scss';
import { ShoppingCart } from 'react-feather';

function EmpryOrders() {
  return (
    <div className="empty-orders">
      <p>Empty cart <ShoppingCart size={20} /></p>
    </div>
  );
}

export default EmpryOrders;