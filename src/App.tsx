import React from 'react';

import './App.scss';

import { ConnectedRouter } from 'connected-react-router';
import { history } from './createStore';
import { Route, Switch } from "react-router-dom";

import  { ProductContainer }  from './modules/Product';
import { CartContainer } from './modules/Cart';
import { Header } from './modules/Shared';



function App() {
  return (
    <ConnectedRouter history={history}>
      <Header />
      <main className="App">
        <div className="app-content">
          <Switch>
            <Route path="/" exact component={ProductContainer} />
            <Route path="/cart" exact component={() => <CartContainer setHeader={true} />} />
          </Switch>
        </div>
      </main>
    </ ConnectedRouter>
  );
}

export default App;
