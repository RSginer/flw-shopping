import { put, takeEvery, call } from 'redux-saga/effects';
import { types, fetchProducts, updateProductStock } from '../actions';

import * as CartActions from '../../Cart/actions';
import { Action } from '../../../models';

function* getProducts() {
  try {
    const products = yield call(fetchProducts);
    yield put({ type: types.FETCH_PRODUCTS_SUCCESS, payload: products });
  } catch (e) {
    put({ type: types.FETCH_PRODUCTS_ERROR, payload: e });
  }
}

export function* getProductsSaga() {
  yield takeEvery(types.FETCH_PRODUCTS, getProducts);
}

function* decreaseStock(action: Action) {
  try {
    const patchedProduct = yield call(updateProductStock(action.payload.id, action.payload.stock))
    yield put({ type : types.DECREASE_STOCK_SUCCESS, payload: patchedProduct})
  } catch (e) {
    put({type: types.DECREASE_STOCK_ERROR, payload: e})
  }
}

export function* decreaseStockSaga() {
  yield takeEvery(CartActions.types.ADD_TO_CART, decreaseStock)
}


function* increaseStock(action: Action) {
  try {
    const patchedProduct = yield call(updateProductStock(action.payload.id, action.payload.stock))
    yield put({ type : types.INCREASE_STOCK_SUCCESS, payload: patchedProduct})
  } catch (e) {
    put({type: types.INCREASE_STOCK_ERROR, payload: e})
  }
}

export function* increaseStockSaga() {
  yield takeEvery(CartActions.types.REMOVE_FROM_CART, increaseStock)
}
