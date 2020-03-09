export interface ICartTypes {
  ADD_TO_CART: string;
  REMOVE_FROM_CART: string;
}

export const types: ICartTypes = {
  ADD_TO_CART: '[Cart] add to cart',
  REMOVE_FROM_CART: '[Cart] remove form cart'
}