import React from 'react';

import ProductList from './ProductList/ProductList';

import './App.scss';

function App() {
  return (
    <main className="App">
      <div className="row">
        <div className="col-xs-12 col-md-8">
          <div className="product-list-header">
            <h2>Product List</h2>
          </div>
          <ProductList />
        </div>
      </div>
    </main>
  );
}

export default App;
