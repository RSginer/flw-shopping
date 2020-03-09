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


export interface IProductContainer {
  isFavorites: boolean;
}

export function ProductContainer(props: IProductContainer = { isFavorites: false }) {
  const dispatch = useDispatch();
  const products = useSelector((s: IAppState) => s.product.productList)
  const loading = useSelector((s: IAppState) => s.product.loading)
  const error = useSelector((s: IAppState) => s.product.error)
  const fetched = useSelector((s: IAppState) => s.product.productsFetched)

  useEffect(() => {

    if (!props.isFavorites) {
      dispatch(setRoute(false, true, true, 'Shop 🛍'))
    } else {
      dispatch(setRoute(true, false, true, 'Favorites ❤️'))
    }


    if (!fetched)
      dispatch({ type: types.FETCH_PRODUCTS, payload: props.isFavorites })
  }, [dispatch, fetched, props])

  return (
    <div className="product-container row">
      <div className={`${props.isFavorites ? 'col-xs-12 product-list-wrapper' : 'col-xs-12 col-sm-12 col-md-8 product-list-wrapper'}`}>
        {!loading && !error && products.length > 0 && <ProductList
         onFavoriteClick={(product: Product) => dispatch({ type: (product.favorite === 0 ? types.ADD_TO_FAVORITES : types.REMOVE_FROM_FAVORITES), payload: product })} 
         favorites={props.isFavorites} 
         onAddToCart={(product: Product) => dispatch({ type: CartAction.types.ADD_TO_CART, payload: product })} 
         products={products} />}
        {!loading && !error && products.length === 0 && <ProductListEmpty />}
        {!error && loading && <ProductLoading />}
        {!loading && error && <div>{error.toJSON()}</div>}
      </div>
      {!props.isFavorites && <div className="hidden-xs hidden-sm col-md-4 cart-container-wrapper">
        <CartContainer setHeader={false} />
      </div>}
    </div>

  );
}
