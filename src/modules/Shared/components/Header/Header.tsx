import React from 'react';

import './Header.scss';
import { FavoriteHeart } from '../FavoriteHeart/FavoriteHeart';
import { ShoppingCart, ArrowLeft } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { push, goBack } from 'connected-react-router';
import { IAppState } from '../../../../rootReducer';
import { Order } from '../../../../models';

export function Header() {
  const dispatch = useDispatch();
  const backButton = useSelector((s: IAppState) => s.shared.backButton);
  const favoritesButton = useSelector(
    (s: IAppState) => s.shared.favoritesButton
  );
  const title = useSelector((s: IAppState) => s.shared.title);
  const orders = useSelector((s: IAppState) => s.cart.orders);

  function getTotalQuantity(ordersList: Order[]): number {
    const totalOrder: Order =
      ordersList.length > 0
        ? ordersList.reduce((p: Order, c: Order) => {
            return new Order({}, p.quantity + c.quantity);
          })
        : new Order({}, 0);

    return totalOrder.quantity;
  }

  return (
    <div className="header">
      <div className="container-fluid header-content">
        <div className="left-icons">
          {favoritesButton && (
            <span
              className="favorite-icon"
              onClick={() => dispatch(push('/favorites'))}
            >
              <FavoriteHeart isFavorite={true} />
            </span>
          )}
          {backButton && (
            <ArrowLeft onClick={() => dispatch(goBack())} size={25} />
          )}
        </div>
        <h1 className="app-title">{title}</h1>
        <div className="cart-icon">
          <span onClick={() => dispatch(push('/cart'))}>
            <ShoppingCart size={25} />
            <span className="items-in-cart-count">
              {getTotalQuantity(orders)}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
