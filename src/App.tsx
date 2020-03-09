import React from 'react';

import './App.scss';

import { ConnectedRouter } from 'connected-react-router';
import { history } from './createStore';
import { Route, Switch } from "react-router-dom";

import  { ProductContainer }  from './modules/Product';
import { CartContainer } from './modules/Cart';

import { Header } from './modules/Common';



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
