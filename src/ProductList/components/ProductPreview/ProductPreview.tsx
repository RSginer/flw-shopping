import React from 'react';
import './ProductPreview.scss';
import { Product } from '../../../models/Product';

function ProductPreview(props: Product) {
  return (
    <div className="product-preview col-xs-6 col-sm-3 col-md-2">
      <div className="product-preview-content">
        <div className="product-image" style={{ backgroundImage: `url(${props.image_url}` }}>
        </div>
        <div className="product-body">
          <span className="product-name">{props.productName}</span>
          <span className="product-price">{props.price}</span>
        </div>
      </div>
    </div>

  );
}

export default ProductPreview;
