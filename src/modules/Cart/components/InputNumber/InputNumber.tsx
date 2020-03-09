import React from 'react';

import { Plus, Minus } from 'react-feather';

import './InputNumber.scss';

export interface IInputNumber {
  value: number;
  max: number;
}

export function InputNumber(props: IInputNumber) {
  return (
    <div className="input-number">
      <Plus size={15} />
      <input className="input" type="number" value={props.value} max={props.max} />
      <Minus size={15} />
    </div>
  );
}
