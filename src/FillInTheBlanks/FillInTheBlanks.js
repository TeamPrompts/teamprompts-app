import React, { useState } from 'react';
import Content from './Content';
import Checkbox from './Checkbox';
import modes from './modes';

function FillInTheBlanks({ id, model }) {
  const [mode, setMode] = useState(modes.input);

  return (
    <>
      <div className="leading-loose text-lg">
        <Content mode={mode} model={model} />
        <div className="inline-block pl-3">
          {model.examples && (
            <Checkbox
              id={id}
              mode={mode}
              onChange={() =>
                setMode(mode === 'examples' ? modes.inputs : modes.examples)
              }
              value={modes.examples}
            />
          )}
        </div>
      </div>
      <ul className="p-4"></ul>
    </>
  );
}

export default FillInTheBlanks;
