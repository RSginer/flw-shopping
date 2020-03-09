import React from 'react';

import './ProductList.scss';

import { ProductPreview } from '../../components';
import { Product } from '../../../../models';

export interface IProductList {
  products: Product[]
  onAddToCart: Function;
}

export function ProductList(props: IProductList) {
  return (
    <div className="product-list">
      <div className="list row col-xs-12">
        {props.products.map((product: Product) => <ProductPreview onAddToCart={props.onAddToCart} key={product.id} product={product} />)}
      </div>
    </div>
  );
}

