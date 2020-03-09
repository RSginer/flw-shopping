import React from 'react';
import './ProductPreview.scss';

import { PlusCircle } from 'react-feather';
import { FavoriteHeart } from '../../components';
import { Product } from '../../../../models';

export function ProductPreview(props: Product) {
  return (
    <div className="product-preview col-xs-6 col-sm-4 col-lg-3">
      <div className="product-preview-content">
        <div className="product-image" style={{ backgroundImage: `url('${props.image_url}'` }}>
          <FavoriteHeart isFavorite={props.favorite !== 0} />
          <span className="stock-label">{props.stock} in stock</span>
        </div>
        <div className="product-body">
          <span className="product-name">{props.productName}</span>
          <div className="product-body-bottom">
            <span className="product-price">{props.price}</span>
            <button className="add-to-cart"><PlusCircle size={18} /> Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

