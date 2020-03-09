export interface IProductTypes {
  FETCH_PRODUCTS: string;
  FETCH_PRODUCTS_SUCCESS: string;
  FETCH_PRODUCTS_ERROR: string;
}

export const types: IProductTypes = {
  FETCH_PRODUCTS: '[Product] fetch start',
  FETCH_PRODUCTS_SUCCESS: '[Product] fetch success',
  FETCH_PRODUCTS_ERROR: '[Product] fetch success',
}
