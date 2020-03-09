import { types } from './types';
import { Product } from '../../../models';

export * from './types';

export function addToCart(product: Product) {
  return {
    type: types.ADD_TO_CART,
    payload: product
  }
}
