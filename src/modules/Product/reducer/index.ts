import { Product, Action } from "../../../models";
import { types } from "../actions";

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
    default:
      return state
  }
}
