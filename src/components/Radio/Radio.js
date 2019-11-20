import React from 'react';

function Radio({ id, mode, onChange, value }) {
  const inputId = `${id}-${value}`;
  return (
    <>
      <input
        checked={mode === value}
        data-testid={inputId}
        id={inputId}
        name={id}
        onChange={onChange}
        type="radio"
        value={value}
      />
      <label className="ml-2" htmlFor={inputId}>
        {value}
      </label>
    </>
  );
}

export default Radio;
