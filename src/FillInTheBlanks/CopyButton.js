import React from 'react';
import { BLANK, SEPARATOR, modes } from '../constants';
import { getValues } from './Content';

function CopyButton({ fitb, inputs, mode, onClick }) {
  function interpolate() {
    const { examples, source } = fitb;
    const result = [];
    const text = source.slice();
    const parts = text.split(SEPARATOR);
    const values = getValues(mode, fitb);
    parts.forEach((part, index) => {
      result.push(part);
      if (values[index]) {
        if (mode === modes.input) {
          if (inputs && inputs[index]) {
            result.push(inputs[index]);
          } else {
            result.push(BLANK);
          }
        }
        if (mode === modes.examples) {
          result.push(examples[index]);
        }
      }
    });
    onClick(result.join(''));
  }

  return (
    <button
      className="bg-blue-500 focus:outline-none font-bold font-mono hover:bg-blue-700 ml-3 px-4 rounded-full text-sm text-white"
      data-testid="copy-button"
      onClick={interpolate}
      type="button"
    >
      Ctrl+C
    </button>
  );
}

export default CopyButton;
