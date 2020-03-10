import { put, takeEvery, call } from 'redux-saga/effects';
import {
  types,
  fetchProducts,
  updateProductStock,
  updateFavorite,
  fetchProductsSuccess,
  fetchProductsError,
  decreaseStockError,
  decreaseStockSuccess,
  increaseStockSuccess,
  increaseStockError,
  addToFavoritesSuccess,
  addToFavoritesError,
  removeFromFavoritesSuccess,
  removeFromFavoritesError,
} from '../actions';

import * as CartActions from '../../Cart/actions';
import { Action } from '../../../models';

function* getProducts() {
  try {
    const products = yield call(fetchProducts);
    yield put(fetchProductsSuccess(products.data));
  } catch (e) {
    yield put(fetchProductsError(e));
  }
}

export function* getProductsSaga() {
  yield takeEvery(types.FETCH_PRODUCTS, getProducts);
}

function* decreaseStock(action: Action) {
  try {
    const patchedProduct = yield call(
      updateProductStock(action.payload.id, action.payload.stock)
    );
    yield put(decreaseStockSuccess(patchedProduct.data));
  } catch (e) {
    yield put(decreaseStockError(action.payload));
  }
}

export function* decreaseStockSaga() {
  yield takeEvery(CartActions.types.ADD_TO_CART, decreaseStock);
}

function* increaseStock(action: Action) {
  try {
    const patchedProduct = yield call(
      updateProductStock(action.payload.id, action.payload.stock)
    );
    yield put(increaseStockSuccess(patchedProduct.data));
  } catch (e) {
    yield put(increaseStockError(action.payload));
  }
}

export function* increaseStockSaga() {
  yield takeEvery(CartActions.types.REMOVE_FROM_CART, increaseStock);
}

function* addToFavorites(action: Action) {
  try {
    const favoriteProduct = yield call(updateFavorite(action.payload.id, true));
    yield put(addToFavoritesSuccess(favoriteProduct.data));
  } catch (error) {
    yield put(addToFavoritesError(action.payload));
  }
}

export function* addToFavoritesSaga() {
  yield takeEvery(types.ADD_TO_FAVORITES, addToFavorites);
}

function* removeFromFavorites(action: Action) {
  try {
    const favoriteProduct = yield call(
      updateFavorite(action.payload.id, false)
    );
    yield put(removeFromFavoritesSuccess(favoriteProduct.data));
  } catch (error) {
    yield put(removeFromFavoritesError(action.payload));
  }
}

export function* removeFromFavoritesSaga() {
  yield takeEvery(types.REMOVE_FROM_FAVORITES, removeFromFavorites);
}
