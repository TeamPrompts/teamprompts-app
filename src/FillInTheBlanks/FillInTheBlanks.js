import React, { useState } from 'react';
import Checkbox, { values } from '../components/Checkbox/Checkbox';
import { modes } from '../constants';
import Content from './Content';

function FillInTheBlanks({ id, model }) {
  const [mode, setMode] = useState(modes.input);

  return (
    <div className="leading-loose text-lg my-5">
      <Content mode={mode} model={model} />
      {model.examples && (
        <Checkbox
          id={id}
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
      <hr className="mt-3" />
    </div>
  );
}

export default FillInTheBlanks;
