import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';
import ProductList from '../components/ProductList/ProductList';
import { CartContainer } from '../../Cart';
import { IAppState } from '../../../rootReducer';
import ProductListEmpty from '../components/ProductListEmpty/ProductListEmpty';


function ProductContainer() {

  const products = useSelector((s: IAppState) => s.product.productList)

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

export default ProductContainer;