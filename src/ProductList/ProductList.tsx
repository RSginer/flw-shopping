import React from 'react';
import './ProductList.scss';
import ProductPreview from './components/ProductPreview/ProductPreview';
import { Product } from '../models/Product';

const products: Array<Product> = [
  new Product({
    id: '1',
    productName: 'Patatas',
    image_url: 'https://s3.eestatic.com/2019/02/06/ciencia/nutricion/Nutricion_374224791_114083296_1706x960.jpg',
    price: 100
  }),
  new Product({
    id: '1',
    productName: 'Patatas',
    image_url: 'https://s3.eestatic.com/2019/02/06/ciencia/nutricion/Nutricion_374224791_114083296_1706x960.jpg',
    price: 100
  }),
  new Product({
    id: '1',
    productName: 'Patatas',
    image_url: 'https://s3.eestatic.com/2019/02/06/ciencia/nutricion/Nutricion_374224791_114083296_1706x960.jpg',
    price: 100
  }),
  new Product({
    id: '1',
    productName: 'Patatas',
    image_url: 'https://s3.eestatic.com/2019/02/06/ciencia/nutricion/Nutricion_374224791_114083296_1706x960.jpg',
    price: 100
  }),
  new Product({
    id: '1',
    productName: 'Patatas',
    image_url: 'https://s3.eestatic.com/2019/02/06/ciencia/nutricion/Nutricion_374224791_114083296_1706x960.jpg',
    price: 100
  }),
  new Product({
    id: '1',
    productName: 'Patatas',
    image_url: 'https://s3.eestatic.com/2019/02/06/ciencia/nutricion/Nutricion_374224791_114083296_1706x960.jpg',
    price: 100
  }),
  new Product({
    id: '1',
    productName: 'Patatas',
    image_url: 'https://s3.eestatic.com/2019/02/06/ciencia/nutricion/Nutricion_374224791_114083296_1706x960.jpg',
    price: 100
  }),
  new Product({
    id: '1',
    productName: 'Patatas',
    image_url: 'https://s3.eestatic.com/2019/02/06/ciencia/nutricion/Nutricion_374224791_114083296_1706x960.jpg',
    price: 100
  }),
  new Product({
    id: '1',
    productName: 'Patatas',
    image_url: 'https://s3.eestatic.com/2019/02/06/ciencia/nutricion/Nutricion_374224791_114083296_1706x960.jpg',
    price: 100
  }),
  new Product({
    id: '1',
    productName: 'Patatas',
    image_url: 'https://s3.eestatic.com/2019/02/06/ciencia/nutricion/Nutricion_374224791_114083296_1706x960.jpg',
    price: 100
  }),
  new Product({
    id: '1',
    productName: 'Patatas',
    image_url: 'https://s3.eestatic.com/2019/02/06/ciencia/nutricion/Nutricion_374224791_114083296_1706x960.jpg',
    price: 100
  }),
  new Product({
    id: '1',
    productName: 'Patatas',
    image_url: 'https://s3.eestatic.com/2019/02/06/ciencia/nutricion/Nutricion_374224791_114083296_1706x960.jpg',
    price: 100
  })
];


function ProductList() {
  return (
    <div className="product-list row col-xs-12">
      {products.map((product: Product) => <ProductPreview key={product.id} {...product}  />)}
    </div>
  );
}

export default ProductList;

