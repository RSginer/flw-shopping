import { Product, Action } from "../../../models";
import { types } from "../actions";
import * as CartActions from '../../Cart/actions';
import { ProductList } from "../components";
export interface IProductState {
  productList: Product[];
  loading: boolean;
  error: any;
  productsFetched: boolean
}

export const productReducer = (state: IProductState = {
  productList: [],
  loading: false,
  error: null,
  productsFetched: false
}, action: Action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return { ...state, productList: [], loading: true, error: null, productsFetched: false };
    case types.FETCH_PRODUCTS_SUCCESS:
      return { ...state, productList: action.payload.data, loading: false, error: null, productsFetched: true };
    case types.FETCH_PRODUCTS_ERROR:
      return { ...state, productList: [], loading: false, error: action.payload, productsFetched: false };
    case CartActions.types.ADD_TO_CART:
      return decreaseStock(state, action)
    case types.DECREASE_STOCK_ERROR:
      return increaseStock(state, action)
    case types.INCREASE_STOCK_ERROR:
      return decreaseStock(state, action)
    case CartActions.types.REMOVE_FROM_CART:
      return increaseStock(state, action)
    default:
      return state
  }
}

function increaseStock(state: IProductState, action: Action): IProductState {
  const product = state.productList.find((p: Product) => p.id === action.payload.id);

  if (product) {
    if (product.stock !== undefined) {
      product.stock++;
    }

    return { ...state, productList: [...state.productList, product] }
  }

  return state;
}

function decreaseStock(state: IProductState, action: Action): IProductState {
  const product = state.productList.find((p: Product) => p.id === action.payload.id);

  if (product) {
    if (product.stock !== undefined) {
      product.stock--;
    }

    return { ...state, productList: [...state.productList, product] }
  }

  return state;
}