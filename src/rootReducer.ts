import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { History } from 'history';

import { productReducer, IProductState } from './modules/Product';
import { cartReducer, ICartState } from './modules/Cart';
import { ISharedState, sharedReducer } from './modules/Shared';

export interface IAppState {
  shared: ISharedState,
  cart: ICartState;
  product: IProductState;
  router: History;
}

export default (history: History) => combineReducers({
  shared: sharedReducer,
  cart: cartReducer,
  product: productReducer,
  router: connectRouter(history)
})