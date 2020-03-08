import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';
import ProductList from '../components/ProductList/ProductList';
import CartContainer from '../../Cart/container';
import { IAppState } from '../../../rootReducer';


function ProductContainer() {

  const products = useSelector((s: IAppState) => s.product.productList)
  const cart = useSelector((s: IAppState) => s.cart)

  return (
    <div className="product-container row">
      <div className="col-xs-12 col-sm-12 col-md-8 product-list-wrapper">
        <ProductList products={products} />
      </div>
      <div className="hidden-xs col-md-4 cart-container-wrapper">
        <CartContainer orders={cart.orders} />
      </div>
    </div>

  );
}

export default ProductContainer;