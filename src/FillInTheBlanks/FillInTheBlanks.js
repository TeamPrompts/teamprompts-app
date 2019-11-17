import React, { useState } from 'react';
import Content from './Content';
import Radio from './Radio';
import modes from './modes';

function FillInTheBlanks({ id, model }) {
  const [mode, setMode] = useState(modes.blanks);

  return (
    <>
      <p>
        <Content mode={mode} model={model} />
      </p>
      <ul className="p-4">
        <li>
          <Radio
            id={id}
            mode={mode}
            onChange={() => setMode(modes.blanks)}
            value={modes.blanks}
          />
        </li>
        <li>
          <Radio
            id={id}
            mode={mode}
            onChange={() => setMode(modes.examples)}
            value={modes.examples}
          />
        </li>
        <li>
          <Radio
            id={id}
            mode={mode}
            onChange={() => setMode(modes.prompts)}
            value={modes.prompts}
          />
        </li>
      </ul>
    </>
  );
}

export default FillInTheBlanks;
