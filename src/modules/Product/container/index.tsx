import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './index.scss';

import { CartContainer } from '../../Cart';
import { IAppState } from '../../../rootReducer';
import { ProductListEmpty, ProductList } from '../components';
import { types } from '../actions';


export function ProductContainer() {
  const dispatch = useDispatch();
  const products = useSelector((s: IAppState) => s.product.productList)

  useEffect(() => {
    dispatch({type: types.FETCH_PRODUCTS})
  }, [dispatch])

  return (
    <div className="product-container row">
      <div className="col-xs-12 col-sm-12 col-md-8 product-list-wrapper">
        {products.length > 0 &&  <ProductList products={products} />}
        {products.length === 0 && <ProductListEmpty />}
      </div>
      <div className="hidden-xs hidden-sm col-md-4 cart-container-wrapper">
        <CartContainer />
      </div>
    </div>

  );
}
