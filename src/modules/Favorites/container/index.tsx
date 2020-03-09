import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../Shared';

import './index.scss';

export const FavoritesContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setRoute(true, false, false, 'Favorites ❤️'))
  }, [dispatch])
  return (
    <div className="favorites-container">
      Favorites (not implemented yet)
    </div>
  )
}
