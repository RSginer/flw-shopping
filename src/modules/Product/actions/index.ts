import { config } from '../../../config';
import axios from 'axios';
export * from './types';

export async function fetchProducts() {
  return await axios.get(`${config.serverUri}/grocery`, {});
}

export function updateProductStock(productId: string, stock: number) {
  return async () => await axios.patch(`${config.serverUri}/grocery/${productId}`, {stock: stock})
}

export function updateFavorite(productId: string, favorite: boolean) {
  return async () => await axios.patch(`${config.serverUri}/grocary/${productId}`, { favorite: favorite ? "1" : 0})
}
