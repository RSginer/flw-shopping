import React from 'react';
import './ProductLoading.scss';

export function ProductLoading() {
  return (
    <div className="product-preview-loading">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
      <p>Loading...</p>
    </div>
  );
}
