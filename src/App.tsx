import React from 'react';

import ProductList from './ProductList/ProductList';

import './App.scss';
import { Product } from './models/Product';
import { Cart } from './models/Cart';
import CartContainer from './Cart/CartContainer';

const products: Product[] = [
  {
    "id": "41fd4fd9-95c7-4809-96db-a147d352fdbb",
    "image_url": "https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair",
    "stock": 8,
    "productName": "Unbranded Metal Chair",
    "price": 43,
    "productDescription": "Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.",
    "favorite": "1"
  },
  {
    "id": "20cc33f1-223b-4cf0-878d-fdedb3f60b56",
    "image_url": "https://dummyimage.com/400x400/2ee9f7/000&text=Handcrafted Metal Towels",
    "stock": 41,
    "productName": "Handcrafted Metal Towels",
    "price": 98,
    "productDescription": "Rerum minima laudantium blanditiis dolorem dolores ut sint ut quidem. Est doloremque repellat excepturi dolor consequatur rerum qui. Facere ut vel et enim accusamus ipsum dolores aut. Eaque quo ut omnis unde quam error voluptas non iure.",
    "favorite": 0
  },
  {
    "id": "ab284424-8e46-4a3e-8e13-e179b0ab8bb5",
    "image_url": "https://dummyimage.com/400x400/4de5d5/000&text=Awesome Cotton Soap",
    "stock": 47,
    "productName": "Awesome Cotton Soap",
    "price": 66,
    "productDescription": "Molestias sunt quia omnis reprehenderit quia. Iste quia et similique voluptate. Et sit molestias.",
    "favorite": 0
  },
  {
    "id": "c34287bf-9cb7-40a7-ad07-6534e45a6868",
    "image_url": "https://dummyimage.com/400x400/bc27b5/000&text=Gorgeous Frozen Chair",
    "stock": 28,
    "productName": "Gorgeous Frozen Chair",
    "price": 47,
    "productDescription": "Harum modi sunt. Voluptatem ut molestiae consequatur. Ea omnis architecto laboriosam accusantium reiciendis corporis exercitationem ad dolor. Fugit autem placeat voluptas sint aut aliquam sed. Totam fuga nesciunt rerum voluptatibus. Voluptatibus voluptates vel ut et temporibus perferendis laboriosam accusamus.",
    "favorite": 0
  }
];

const cart: Cart = new Cart([
  {
    product: products[0],
    quantity: 1
  },
  {
    product: products[1],
    quantity: 1
  }
]);

function App() {
  return (
    <main className="App">
      <div className="row">
        <div className="col-xs-12 col-md-8">
          <ProductList products={products} />
        </div>
        <div className="col-xs-12 col-md-4">
          <CartContainer orders={cart.orders}/>
        </div>
      </div>
    </main>
  );
}

export default App;
