import { Action } from "../../../models/Action";
import { types } from "../actions/types";

export interface ICommonState {
  backButton: boolean;
  title: string;
  favoritesButton: boolean;
  showCartIcon: boolean;
}

export const commonReducer = (state: ICommonState = {
  backButton: false,
  title: 'Shop 🛍',
  favoritesButton: true,
  showCartIcon: true,
}, action: Action) => {
  switch(action.type) {
    case types.SET_ROUTE:
      return {...state, ...action.payload}
    default:
      return state;
  }
}