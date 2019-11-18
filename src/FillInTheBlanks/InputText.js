import React, { useState } from 'react';

function InputText({ placeholder }) {
  const [size, setSize] = useState(placeholder.length);

  function onChange(value) {
    if (value.length > placeholder.length) {
      setSize(value.length);
    } else {
      setSize(placeholder.length);
    }
  }

  return (
    <input
      data-testid="input"
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      size={size}
      type="text"
    />
  );
}

export default InputText;
