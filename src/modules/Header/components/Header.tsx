import React from 'react';

import './Header.scss';
import FavoriteHeart from '../../Product/components/FavoriteHeart/FavoriteHeart';
import { ShoppingCart } from 'react-feather';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';


export interface IHeader {
  title: string;
}

function Header(props: IHeader) {

  const dispatch = useDispatch();


  return (
    <div className="header">
      <div className="container-fluid header-content">
        <div className="favorites">
          <FavoriteHeart isFavorite={true} />
        </div>
        <h1 className="app-title">{props.title}</h1>
        <div className="cart-icon">
          <span className="hidden-md hidden-lg" onClick={() => dispatch(push('/cart'))}>
              <ShoppingCart size={20} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
