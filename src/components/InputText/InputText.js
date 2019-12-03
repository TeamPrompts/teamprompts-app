import classname from 'classnames';
import React from 'react';
import AutosizeInput from 'react-input-autosize';
import { BLANK } from '../../constants';
import { CHANGE } from '../../FillInTheBlanks/reducer';

function InputText({ dispatch, hint, id, value }) {
  function onChange({ target: { value } }) {
    dispatch({ type: CHANGE, value: { id, value: value } });
  }

  return (
    <span className="inline-flex flex-col leading-none">
      <AutosizeInput
        className="self-center"
        data-testid="input"
        inputClassName={classname({ 'bg-purple-100': value.length > 0 })}
        onChange={onChange}
        placeholder={BLANK}
        placeholderIsMinWidth={true}
        value={value}
      />
      {hint !== BLANK && <label className="self-center text-sm">{hint}</label>}
    </span>
  );
}

export default InputText;
