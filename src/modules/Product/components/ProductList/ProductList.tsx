import React from 'react';

import './ProductList.scss';

import { ProductPreview } from '../../../Shared';
import { Product } from '../../../../models';

export interface IProductList {
  products: Product[];
  favorites: boolean;
  onAddToCart: Function;
}

export function ProductList(props: IProductList) {
  let products = props.products;

  if (props.favorites) {
    products = props.products.filter((p: Product) => p.favorite && p.favorite > 0)
  }

  return (
    <div className="product-list">
      <div className="list row col-xs-12">
        {products.map((product: Product, i) => <ProductPreview onAddToCart={props.onAddToCart} key={i} product={product} />)}
      </div>
    </div>
  );
}

