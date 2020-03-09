import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './index.scss';

import { CartContainer } from '../../Cart';
import { IAppState } from '../../../rootReducer';
import { ProductListEmpty, ProductList, ProductLoading } from '../components';
import { types } from '../actions';
import * as CartAction from '../../Cart/actions'
import { setRoute } from '../../Shared/actions';
import { Product } from '../../../models';


export function ProductContainer() {
  const dispatch = useDispatch();
  const products = useSelector((s: IAppState) => s.product.productList)
  const loading = useSelector((s: IAppState) => s.product.loading)
  const error = useSelector((s: IAppState) => s.product.error)

  useEffect(() => {
    dispatch(setRoute(false, true, true, 'Shop 🛍'))
    dispatch({ type: types.FETCH_PRODUCTS })
  }, [dispatch])

  return (
    <div className="product-container row">
      <div className="col-xs-12 col-sm-12 col-md-8 product-list-wrapper">
        {!loading && !error && products.length > 0 && <ProductList onAddToCart={(product: Product) => dispatch({type: CartAction.types.ADD_TO_CART, payload: product})} products={products} />}
        {!loading && !error && products.length === 0 && <ProductListEmpty />}
        {!error && loading && <ProductLoading />}
        {!loading && error && <div>{error.toJSON()}</div>}
      </div>
      <div className="hidden-xs hidden-sm col-md-4 cart-container-wrapper">
        <CartContainer setHeader={false} />
      </div>
    </div>

  );
}
