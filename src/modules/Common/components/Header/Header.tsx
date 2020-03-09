import React from 'react';

import './Header.scss';
import { FavoriteHeart } from '../../../Product';
import { ShoppingCart, ArrowLeft } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { IAppState } from '../../../../rootReducer';

export function Header() {

  const dispatch = useDispatch();
  const backButton = useSelector((s: IAppState) => s.common.backButton)
  const favoritesButton = useSelector((s: IAppState) => s.common.favoritesButton)
  const title = useSelector((s: IAppState) => s.common.title)
  const showCartIcon = useSelector((s: IAppState) => s.common.showCartIcon)

  return (
    <div className="header">
      <div className="container-fluid header-content">
        <div className="left-icons">
          {favoritesButton && <span className="favorite-icon"><FavoriteHeart isFavorite={true} /></span>}
          {backButton && <ArrowLeft onClick={() => dispatch(push('/'))} size={25} />}
        </div>
        <h1 className="app-title">{title}</h1>
        <div className="cart-icon">
          {showCartIcon && <span className="hidden-md hidden-lg" onClick={() => dispatch(push('/cart'))}>
              <ShoppingCart size={25} />
          </span>}
        </div>
      </div>
    </div>
  );
}
