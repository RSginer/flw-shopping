import { Product, Action } from '../../../models';
import { types } from '../actions';
import * as CartActions from '../../Cart/actions';

export interface IProductState {
  productList: Product[];
  loading: boolean;
  error: any;
  productsFetched: boolean;
}

export const productReducer = (
  state: IProductState = {
    productList: [],
    loading: false,
    error: null,
    productsFetched: false,
  },
  action: Action
) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state,
        productList: [],
        loading: true,
        error: null,
        productsFetched: false,
      };
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        loading: false,
        error: null,
        productsFetched: true,
      };
    case types.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        productList: [],
        loading: false,
        error: action.payload,
        productsFetched: false,
      };
    case CartActions.types.ADD_TO_CART:
      return decreaseStock(state, action);
    case types.DECREASE_STOCK_ERROR:
      return increaseStock(state, action);
    case types.INCREASE_STOCK_ERROR:
      return decreaseStock(state, action);
    case CartActions.types.REMOVE_FROM_CART:
      return increaseStock(state, action);
    case types.ADD_TO_FAVORITES:
      return toggleFavorite(state, action, true);
    case types.ADD_TO_FAVORITES_ERROR:
      return toggleFavorite(state, action, false);
    case types.REMOVE_FROM_FAVORITES:
      return toggleFavorite(state, action, false);
    case types.REMOVE_FROM_FAVORITES_ERROR:
      return toggleFavorite(state, action, true);
    default:
      return state;
  }
};

function toggleFavorite(
  state: IProductState,
  action: Action,
  isFavorite: boolean
): IProductState {
  const index = state.productList.findIndex(
    (p: Product) => p.id === action.payload.id
  );
  let product = state.productList[index];

  product.favorite = isFavorite ? '1' : 0;

  product = { ...product };

  return { ...state, productList: [...state.productList] };
}

function increaseStock(state: IProductState, action: Action): IProductState {
  const index = state.productList.findIndex(
    (p: Product) => p.id === action.payload.id
  );
  let product = state.productList[index];

  if (product) {
    if (product.stock !== undefined) {
      product.stock++;
    }

    product = { ...product };

    return { ...state, productList: [...state.productList] };
  }

  return state;
}

function decreaseStock(state: IProductState, action: Action): IProductState {
  const index = state.productList.findIndex(
    (p: Product) => p.id === action.payload.id
  );
  let product = state.productList[index];

  if (product) {
    if (product.stock !== undefined) {
      product.stock--;
    }

    product = { ...product };

    return { ...state, productList: [...state.productList] };
  }

  return state;
}
