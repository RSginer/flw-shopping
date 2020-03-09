import { config } from '../../../config';
import axios from 'axios';
import { types } from './types';
import { Product } from '../../../models';
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

export function getProducts() {
  return {
    type: types.FETCH_PRODUCTS
  }
}

export function toggleFavorites(product: Product) {
  return {
    type: (product.favorite === 0 ? types.ADD_TO_FAVORITES : types.REMOVE_FROM_FAVORITES),
    payload: product
  }
}