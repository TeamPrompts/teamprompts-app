import classname from 'classnames';
import React from 'react';
import { BLANK } from '../constants';

function getSize(hint, value) {
  return Math.max(BLANK.length, hint.length, value.length);
}

function InputText({ dispatch, hint, id, value }) {
  function onChange({ target: { value } }) {
    dispatch({ type: 'change', value: { id, value: value } });
  }

  return (
    <span className="inline-flex flex-col leading-none">
      <input
        className={classname({ 'bg-purple-100': value.length > 0 })}
        data-testid="input"
        onChange={onChange}
        placeholder={BLANK}
        size={getSize(hint, value)}
        type="text"
        value={value}
      />
      {hint !== BLANK && <label className="self-center text-sm">{hint}</label>}
    </span>
  );
}

export default InputText;
