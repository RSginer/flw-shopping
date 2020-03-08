import React from 'react';

import './Header.scss';

export interface IHeader {
  title: string;
}

function Header(props: IHeader) {
  return (
    <div className="header">
      <div className="container-fluid">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default Header;
