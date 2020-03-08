import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './rootReducer';

import { composeWithDevTools } from 'redux-devtools-extension';
export const history = createBrowserHistory()


const enhancers = [
  applyMiddleware(
    routerMiddleware(history),
  )
]

if ((window as any).__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(composeWithDevTools())
}



export default function configureStore() {
  const store = createStore(
    createRootReducer(history),
    compose(
      ...enhancers
    ),
  )

  return store
}