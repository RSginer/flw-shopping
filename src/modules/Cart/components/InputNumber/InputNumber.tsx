import React from 'react';

import { Plus, Minus } from 'react-feather';

import './InputNumber.scss';

export interface IInputNumber {
  value: number;
  max: number;
  onIncrease: Function;
  onDecrease: Function;
}

export function InputNumber(props: IInputNumber) {
  return (
    <div className="input-number">
      <Plus size={15} onClick={() => props.onIncrease()} />
      <input className="input" readOnly type="number" value={props.value} max={props.max} />
      <Minus size={15} onClick={() => props.onDecrease()} />
    </div>
  );
}
