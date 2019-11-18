import classname from 'classnames';
import React, { useState } from 'react';
import { BLANK } from '../constants';

function getSize(hint, value) {
  return Math.max(BLANK.length, hint.length, value.length);
}

function InputText({ hint }) {
  const [dirty, setDirty] = useState(false);
  const [size, setSize] = useState(getSize(hint, ''));

  function onChange(value) {
    setDirty(true);
    setSize(getSize(hint, value));
  }

  return (
    <span className="inline-flex flex-col leading-none">
      <input
        className={classname({ 'bg-purple-100': dirty })}
        data-testid="input"
        onChange={e => onChange(e.target.value)}
        placeholder={BLANK}
        size={size}
        type="text"
      />
      {hint !== BLANK && <label className="self-center text-sm">{hint}</label>}
    </span>
  );
}

export default InputText;
