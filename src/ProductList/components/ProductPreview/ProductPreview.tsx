import React from 'react';
import './ProductPreview.scss';
import { Product } from '../../../models/Product';
import FavoriteHeart from './components/FavoriteHeart/FavoriteHeart';
import { PlusCircle } from 'react-feather';

function ProductPreview(props: Product) {
  return (
    <div className="product-preview col-xs-6 col-sm-3 col-md-2">
      <div className="product-preview-content">
        <div className="product-image" style={{ backgroundImage: `url('${props.image_url}'` }}>
          <FavoriteHeart isFavorite={props.favorite !== 0} />
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

export default ProductPreview;

