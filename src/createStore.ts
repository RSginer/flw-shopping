import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsSaga, decreaseStockSaga, increaseStockSaga } from './modules/Product';

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const enhancers = [
  applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history),
  )
]

if ((window as any).__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(composeWithDevTools())
}


function configureStore() {
  const store = createStore(
    createRootReducer(history),
    compose(
      ...enhancers
    ),
  )

  return store
}

const store = configureStore()

// Sagas
sagaMiddleware.run(getProductsSaga)
sagaMiddleware.run(decreaseStockSaga)
sagaMiddleware.run(increaseStockSaga)

export default store;
