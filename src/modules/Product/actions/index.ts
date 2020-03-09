import { config } from '../../../config';
import axios from 'axios';
import { types } from './types';
import { Product, Action } from '../../../models';
export * from './types';

export async function fetchProducts() {
  return await axios.get(`${config.serverUri}/grocery`, {});
}

export function updateProductStock(productId: string, stock: number) {
  return async () => await axios.patch(`${config.serverUri}/grocery/${productId}`, {stock: stock})
}

export function updateFavorite(productId: string, favorite: boolean) {
  return async () => await axios.patch(`${config.serverUri}/grocery/${productId}`, { favorite: favorite ? "1" : 0})
}

export function getProducts(): Action {
  return {
    type: types.FETCH_PRODUCTS
  }
}

export function toggleFavorites(product: Product): Action {
  return {
    type: (product.favorite === 0 ? types.ADD_TO_FAVORITES : types.REMOVE_FROM_FAVORITES),
    payload: product
  }
}

export function fetchProductsSuccess (products: Product[]): Action {
  return {
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}

export function fetchProductsError (error: any): Action {
  return {
    type: types.FETCH_PRODUCTS_ERROR,
    payload: error
  }
}

export function decreaseStockSuccess(product: Product): Action {
  return {
    type: types.DECREASE_STOCK_SUCCESS,
    payload: product
  }
}

export function decreaseStockError(product: Product): Action {
  return {
    type: types.DECREASE_STOCK_ERROR,
    payload: product
  }
}

export function increaseStockSuccess(product: Product): Action {
  return {
    type: types.INCREASE_STOCK_SUCCESS,
    payload: product
  }
}

export function increaseStockError(product: Product): Action {
  return {
    type: types.INCREASE_STOCK_ERROR,
    payload: product
  }
}

export function addToFavoritesSuccess(product: Product): Action {
  return {
    type: types.ADD_TO_FAVORITES_SUCCESS,
    payload: product
  }
}

export function addToFavoritesError(product: Product): Action {
  return {
    type: types.ADD_TO_FAVORITES_ERROR,
    payload: product
  }
}

export function removeFromFavoritesSuccess(product: Product): Action {
  return {
    type: types.REMOVE_FROM_FAVORITES_SUCCESS,
    payload: product
  }
}

export function removeFromFavoritesError(product: Product): Action {
  return {
    type: types.REMOVE_FROM_FAVORITES_ERROR,
    payload: product
  }
}
