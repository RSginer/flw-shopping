import React from 'react';

import './ProductList.scss';

import { Product } from '../../../../models';
import { ProductPreview } from '../ProductPreview/ProductPreview';

export interface IProductList {
  products: Product[];
  favorites: boolean;
  onAddToCart: Function;
  onFavoriteClick: Function;
}

export function ProductList(props: IProductList) {
  let products = props.products;

  if (props.favorites) {
    products = props.products.filter((p: Product) => p.favorite && p.favorite > 0)
  }

  return (
    <div className="product-list">
      <div className="list row col-xs-12">
        {products.map((product: Product, i) => <ProductPreview onFavoriteClick={props.onFavoriteClick} favorites={props.favorites} onAddToCart={props.onAddToCart} key={i} product={product} />)}
      </div>
    </div>
  );
}

