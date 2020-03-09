import { put, takeEvery, call } from 'redux-saga/effects';
import { types, fetchProducts } from '../actions';

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
