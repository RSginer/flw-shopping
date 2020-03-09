import { Product, Action } from "../../../models";
import { types } from "../actions";
import * as CartActions from '../../Cart/actions';
import { ProductList } from "../components";
export interface IProductState {
  productList: Product[];
  loading: boolean;
  error: any;
}

export const productReducer = (state: IProductState = {
  productList: [],
  loading: false,
  error: null
}, action: Action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return { ...state, productList: [], loading: true, error: null };
    case types.FETCH_PRODUCTS_SUCCESS:
      return { ...state, productList: action.payload.data, loading: false, error: null };
    case types.FETCH_PRODUCTS_ERROR:
      return { ...state, productList: [], loading: false, error: action.payload };
    case CartActions.types.ADD_TO_CART:
      return addProductToCart(state, action)
    case CartActions.types.REMOVE_FROM_CART:
      return removeProductFromCart(state, action)
    default:
      return state
  }
}

function addProductToCart(state: IProductState, action: Action): IProductState {
  const product = state.productList.find((p: Product) => p.id === action.payload.id);

  if (product) {
    if (product.stock && product?.stock > 0) {
      product.stock--;
    }

    return { ...state, productList: [...state.productList, product] }
  }

  return state;
}

function removeProductFromCart(state: IProductState, action: Action): IProductState {
  const product = state.productList.find((p: Product) => p.id === action.payload.id);

  if (product) {
    if (product.stock !== undefined) {
      product.stock++;
    }

    return { ...state, productList: [...state.productList, product] }
  }

  return state;
}