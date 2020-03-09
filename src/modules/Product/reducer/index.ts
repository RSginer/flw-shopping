import { Product, Action } from "../../../models";

export interface IProductState {
  productList: Product[];
}

export default (state: IProductState = {
  productList: []
}, action: Action) => {
  switch (action.type) {
    case '':
      return state;
    default:
      return state
  }
}
