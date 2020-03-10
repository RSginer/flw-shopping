import { types } from './types';

export * from './types';

export function setRoute(
  backButton: boolean,
  favoritesButton: boolean,
  showCartIcon: boolean,
  title: string
) {
  return {
    type: types.SET_ROUTE,
    payload: {
      favoritesButton,
      backButton,
      title,
      showCartIcon,
    },
  };
}
