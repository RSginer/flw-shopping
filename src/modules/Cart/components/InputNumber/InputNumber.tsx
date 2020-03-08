import React from 'react';

import { Plus, Minus } from 'react-feather';

import './InputNumber.scss';

function InputNumber(props: any) {
  return (
    <div className="input-number">
      <Plus size={15} />
      <input className="input" type="number" value="1" max="100" />
      <Minus size={15} />
    </div>
  );
}

export default InputNumber;