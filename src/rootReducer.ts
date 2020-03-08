import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { History } from 'history';
import product, { IProductState } from './modules/Product/reducer';
import { ICartState } from './modules/Cart/reducer';

import cart from './modules/Cart/reducer';

export interface IAppState {
  cart: ICartState;
  product: IProductState;
  router: History;
}

export default (history: History) => combineReducers({
  cart,
  product,
  router: connectRouter(history)
})