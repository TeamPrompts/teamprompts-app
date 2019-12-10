import classnames from 'classnames';
import React, { useState } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import Checkbox, { values } from '../components/Checkbox/Checkbox';
import { modes } from '../constants';
import Content from './Content';
import CopyButton from './CopyButton';

function FillInTheBlanks({ fitb, history, tag }) {
  const clipboard = useClipboard();
  const [inputs, setInputs] = useState();
  const [mode, setMode] = useState(modes.input);

  function onClick() {
    if (history) {
      if (tag) {
        history.push(`/${tag.slug}/${fitb.id}`);
      } else {
        history.push(`/all/${fitb.id}`);
      }
    }
  }

  return (
    <div
      className={classnames(
        'border-b border-gray-500 leading-loose mb-2 px-4 py-8 shadow text-lg',
        {
          'hover:bg-gray-100 cursor-pointer': history
        }
      )}
      onClick={onClick}
    >
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
