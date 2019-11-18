import classname from 'classnames';
import React, { useState } from 'react';
import { BLANK } from '../constants';

function InputText({ hint }) {
  const [dirty, setDirty] = useState(false);
  const [size, setSize] = useState(hint.length);

  function onChange(value) {
    setDirty(true);
    if (value.length > hint.length) {
      setSize(value.length);
    } else {
      setSize(hint.length);
    }
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
