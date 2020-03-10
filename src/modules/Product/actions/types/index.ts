export interface IProductTypes {
  FETCH_PRODUCTS: string;
  FETCH_PRODUCTS_SUCCESS: string;
  FETCH_PRODUCTS_ERROR: string;
  DECREASE_STOCK_SUCCESS: string;
  DECREASE_STOCK_ERROR: string;
  INCREASE_STOCK_SUCCESS: string;
  INCREASE_STOCK_ERROR: string;
  ADD_TO_FAVORITES: string;
  ADD_TO_FAVORITES_SUCCESS: string;
  ADD_TO_FAVORITES_ERROR: string;
  REMOVE_FROM_FAVORITES: string;
  REMOVE_FROM_FAVORITES_SUCCESS: string;
  REMOVE_FROM_FAVORITES_ERROR: string;
}

export const types: IProductTypes = {
  FETCH_PRODUCTS: '[Product] fetch start',
  FETCH_PRODUCTS_SUCCESS: '[Product] fetch success',
  FETCH_PRODUCTS_ERROR: '[Product] fetch success',
  DECREASE_STOCK_SUCCESS: '[Product] decrease stock success',
  DECREASE_STOCK_ERROR: '[Product] decrease stock error',
  INCREASE_STOCK_SUCCESS: '[Product] increase stock success',
  INCREASE_STOCK_ERROR: '[Product] increase stock error',
  ADD_TO_FAVORITES: '[Product] add to favorites',
  ADD_TO_FAVORITES_SUCCESS: '[Product] add to favorites success',
  ADD_TO_FAVORITES_ERROR: '[Product] add to favorites error',
  REMOVE_FROM_FAVORITES: '[Product] remove from favorites',
  REMOVE_FROM_FAVORITES_SUCCESS: '[Product] remove from favorites success',
  REMOVE_FROM_FAVORITES_ERROR: '[Product] remove from favorites error',
};
