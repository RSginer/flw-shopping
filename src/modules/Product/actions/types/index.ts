export interface IProductTypes {
  FETCH_PRODUCTS: string;
  FETCH_PRODUCTS_SUCCESS: string;
  FETCH_PRODUCTS_ERROR: string;
  DECREASE_STOCK_SUCCESS: string;
  DECREASE_STOCK_ERROR: string;
  INCREASE_STOCK_SUCCESS: string;
  INCREASE_STOCK_ERROR: string;
}

export const types: IProductTypes = {
  FETCH_PRODUCTS: '[Product] fetch start',
  FETCH_PRODUCTS_SUCCESS: '[Product] fetch success',
  FETCH_PRODUCTS_ERROR: '[Product] fetch success',
  DECREASE_STOCK_SUCCESS: '[Product] decrease stock success',
  DECREASE_STOCK_ERROR: '[Product] decrease stock error',
  INCREASE_STOCK_SUCCESS: '[Product] increase stock success',
  INCREASE_STOCK_ERROR: '[Product] increase stock error',
}
