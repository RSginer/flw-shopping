import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { History } from 'history';

import { productReducer, IProductState } from './modules/Product';
import { cartReducer, ICartState } from './modules/Cart';

export interface IAppState {
  cart: ICartState;
  product: IProductState;
  router: History;
}

export default (history: History) => combineReducers({
  cart: cartReducer,
  product: productReducer,
  router: connectRouter(history)
})