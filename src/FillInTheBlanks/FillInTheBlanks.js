import React, { useState } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import Checkbox, { values } from '../components/Checkbox/Checkbox';
import { modes } from '../constants';
import Content from './Content';
import CopyButton from './CopyButton';

function FillInTheBlanks({ fitb }) {
  const clipboard = useClipboard();
  const [inputs, setInputs] = useState();
  const [mode, setMode] = useState(modes.input);

  return (
    <div className="border-b border-gray-500 leading-loose py-8 text-lg">
      <Content callback={setInputs} fitb={fitb} mode={mode} />
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
      <CopyButton
        fitb={fitb}
        inputs={inputs}
        mode={mode}
        onClick={value => {
          console.log(value);
          clipboard.copy(value);
        }}
      />
    </div>
  );
}

export default FillInTheBlanks;
