import React from 'react';
import './ProductPreview.scss';

import { PlusCircle } from 'react-feather';
import { FavoriteHeart } from '../../components';
import { Product } from '../../../../models';

export interface IProductPreview {
  product: Product;
  onAddToCart: Function;
}

export function ProductPreview(props: IProductPreview) {
  return (
    <div className="product-preview col-xs-6 col-sm-4 col-lg-3">
      <div className="product-preview-content">
        <div className="product-image" style={{ backgroundImage: `url('${props.product.image_url}'` }}>
          <FavoriteHeart isFavorite={props.product.favorite !== 0} />
          <span className="stock-label">{props.product.stock} in stock</span>
        </div>
        <div className="product-body">
          <span className="product-name">{props.product.productName}</span>
          <div className="product-body-bottom">
            <span className="product-price">{props.product.price}</span>
            <button className="add-to-cart" disabled={props.product.stock === 0} onClick={() => props.onAddToCart(props.product)}><PlusCircle size={18} /> Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

