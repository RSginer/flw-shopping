import { config } from '../../../config';
import axios from 'axios';
export * from './types';

export async function fetchProducts() {
  return await axios.get(`${config.serverUri}/grocery`, {});
}

export function updateProductStock(productId: string, stock: number) {
  return async () => await axios.patch(`${config.serverUri}/grocery/${productId}`, {stock: stock})
}
