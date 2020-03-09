import { put, takeEvery, call } from 'redux-saga/effects';
import { types, fetchProducts, updateProductStock, updateFavorite } from '../actions';

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
    yield put({ type : types.DECREASE_STOCK_SUCCESS, payload: patchedProduct.data})
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
    yield put({ type : types.INCREASE_STOCK_SUCCESS, payload: patchedProduct.data})
  } catch (e) {
    put({type: types.INCREASE_STOCK_ERROR, payload: e})
  }
}

export function* increaseStockSaga() {
  yield takeEvery(CartActions.types.REMOVE_FROM_CART, increaseStock)
}

function* addToFavorites(action: Action) {
  try {
    const favoriteProduct = yield call(updateFavorite(action.payload.id, true))
    console.log(favoriteProduct)
    yield put({ type: types.ADD_TO_FAVORITES_SUCCESS, payload: favoriteProduct.data })
  } catch (error) {
    console.log(error)
    yield put({type: types.ADD_TO_FAVORITES_ERROR, payload: error})
  }
}

export function* addToFavoritesSaga() {
  yield takeEvery(types.ADD_TO_FAVORITES, addToFavorites)
}

function* removeFromFavorites(action: Action) {
  try {
    const favoriteProduct = yield call(updateFavorite(action.payload.id, false))
    yield put({ type: types.REMOVE_FROM_FAVORITES_SUCCESS, payload: favoriteProduct.data })
  } catch (error) {
    console.log(error)
    yield put({type: types.REMOVE_FROM_FAVORITES_ERROR, payload: error})
  }
}

export function* removeFromFavoritesSaga() {
  yield takeEvery(types.REMOVE_FROM_FAVORITES, removeFromFavorites)
}
