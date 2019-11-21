import React, { useState } from 'react';
import Checkbox, { values } from '../components/Checkbox/Checkbox';
import { modes } from '../constants';
import Content from './Content';

function FillInTheBlanks({ id, model }) {
  const [mode, setMode] = useState(modes.input);

  return (
    <div className="leading-loose text-lg my-5">
      <Content mode={mode} model={model} />
      <div className="inline-block pl-3">
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
      </div>
      <hr className="mt-3" />
    </div>
  );
}

export default FillInTheBlanks;
