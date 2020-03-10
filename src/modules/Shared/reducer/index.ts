import { Action } from '../../../models/Action';
import { types } from '../actions/types';

export interface ISharedState {
  backButton: boolean;
  title: string;
  favoritesButton: boolean;
}

export const sharedReducer = (
  state: ISharedState = {
    backButton: false,
    title: 'Shop 🛍',
    favoritesButton: true,
  },
  action: Action
) => {
  switch (action.type) {
    case types.SET_ROUTE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
