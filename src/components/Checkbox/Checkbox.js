import React from 'react';

export const values = {
  off: 'off',
  on: 'on'
};

// TODO: check the html
function Checkbox({ id, onChange, value }) {
  return (
    <label className="cursor-pointer" htmlFor={id}>
      <div className="relative">
        <input
          checked={value === values.on}
          className="hidden"
          data-testid={id}
          id={id}
          onChange={() => onChange(value)}
          type="checkbox"
        />
        <div className="toggle__line w-6 h-3 bg-gray-400 rounded-full shadow-inner" />
        <div className="toggle__dot absolute w-4 h-4 bg-gray-300 rounded-full shadow inset-y-0 left-0" />
      </div>
    </label>
  );
}

export default Checkbox;
