import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { History } from 'history';

import { productReducer, IProductState } from './modules/Product';
import { cartReducer, ICartState } from './modules/Cart';
import { ICommonState, commonReducer } from './modules/Common/reducer';

export interface IAppState {
  common: ICommonState,
  cart: ICartState;
  product: IProductState;
  router: History;
}

export default (history: History) => combineReducers({
  common: commonReducer,
  cart: cartReducer,
  product: productReducer,
  router: connectRouter(history)
})