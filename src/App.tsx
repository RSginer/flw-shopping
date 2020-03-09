import React from 'react';

import './App.scss';

import { ConnectedRouter } from 'connected-react-router';
import { history } from './createStore';
import { Route, Switch } from "react-router-dom";
import ProductContainer from './modules/Product/container';
import CartContainer from './modules/Cart/container';
import Header from './modules/Header/components/Header';



function App() {

  const appTitle = "Shop 🛍"

  return (
    <ConnectedRouter history={history}>
      <Header title={appTitle} />
      <main className="App">
        <div className="app-content">
          <Switch>
            <Route path="/" exact component={ProductContainer} />
            <Route path="/cart" exact component={CartContainer} />
          </Switch>
        </div>
      </main>
    </ ConnectedRouter>
  );
}

export default App;
