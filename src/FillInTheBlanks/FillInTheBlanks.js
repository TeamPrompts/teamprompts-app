import React, { useState } from 'react';
import Checkbox, { values } from '../components/Checkbox/Checkbox';
import { modes } from '../constants';
import Content from './Content';

function FillInTheBlanks({ fitb }) {
  const [mode, setMode] = useState(modes.input);

  return (
    <div className="border-b border-gray-500 leading-loose py-8 text-lg">
      <Content mode={mode} fitb={fitb} />
      {fitb.examples && (
        <Checkbox
          id={fitb.id}
          onChange={value => {
            if (value === values.off) {
              setMode(modes.examples);
            }
            if (value === values.on) {
              setMode(modes.input);
            }
          }}
          value={mode === modes.examples ? values.on : values.off}
        />
      )}
    </div>
  );
}

export default FillInTheBlanks;
