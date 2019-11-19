import React from 'react';

function Checkbox({ id, mode, onChange, value }) {
  const inputId = `${id}-${value}`;
  return (
    <label htmlFor={inputId} className="cursor-pointer">
      <div className="relative">
        <input
          checked={mode === value}
          data-testid={inputId}
          id={inputId}
          name={id}
          onChange={onChange}
          type="checkbox"
          value={value}
          className="hidden"
        />

        <div className="toggle__line w-6 h-3 bg-gray-400 rounded-full shadow-inner" />

        <div className="toggle__dot absolute w-4 h-4 bg-gray-300 rounded-full shadow inset-y-0 left-0" />
      </div>
    </label>
  );
}

export default Checkbox;
