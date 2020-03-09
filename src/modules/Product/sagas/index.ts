import { put, takeEvery, call } from 'redux-saga/effects';
import { types, fetchProducts } from '../actions';
import { Action } from '../../../models';

function* getProducts() {
  try {
    const products = yield call(fetchProducts);
    yield put({ type: types.FETCH_PRODUCTS_SUCCESS, payload: products });
  } catch (e) {
    put(new Action(types.FETCH_PRODUCTS_ERROR, e));
  }
}

export function* getProductsSaga() {
  yield takeEvery(types.FETCH_PRODUCTS, getProducts);
}
