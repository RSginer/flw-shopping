import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../Shared';

export const FavoritesContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setRoute(true, false, false, 'Favorites List'))
  }, [dispatch])
  return (
    <div>Favorites</div>
  )
}
