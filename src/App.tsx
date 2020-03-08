import React from 'react';

import './App.scss';

import { ConnectedRouter } from 'connected-react-router';
import { history } from './createStore';
import { Route } from "react-router-dom";
import ProductContainer from './modules/Product/container';
import { useSelector } from 'react-redux';
import { IAppState } from './rootReducer';
import CartContainer from './modules/Cart/container';



function App() {
  const cart = useSelector((s: IAppState) => s.cart);

  return (
    <ConnectedRouter history={history}>
      <main className="App">
        <div className="app-content">
          <Route path="/" exact component={ProductContainer} />
          <Route path="/cart" exact component={() => <CartContainer {...cart.orders} />} />
        </div>
      </main>
    </ ConnectedRouter>
  );
}

export default App;
