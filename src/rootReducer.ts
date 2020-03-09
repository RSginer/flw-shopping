import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { History } from 'history';
import product, { IProductState } from './modules/Product/reducer';
import { ICartState } from './modules/Cart/reducer';

import { cartReducer } from './modules/Cart';

export interface IAppState {
  cart: ICartState;
  product: IProductState;
  router: History;
}

export default (history: History) => combineReducers({
  cart: cartReducer,
  product,
  router: connectRouter(history)
})