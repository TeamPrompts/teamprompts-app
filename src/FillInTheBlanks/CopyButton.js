import React from 'react';
import { BLANK, modes } from '../constants';
import getValues from './getValues';
import interpolate from './interpolate';

function makeAdd({ examples, inputs, mode }) {
  function add({ index, result }) {
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
  return add;
}

function CopyButton({ fitb, inputs, mode, onClick }) {
  return (
    <button
      className="bg-blue-500 focus:outline-none font-bold font-mono hover:bg-blue-700 ml-3 px-4 rounded-full text-sm text-white"
      data-testid="copy-button"
      onClick={() => {
        const values = getValues(mode, fitb);
        const result = interpolate({
          add: makeAdd({ examples: fitb.examples, inputs, mode }),
          source: fitb.source,
          values
        });
        onClick(result.join(''));
      }}
      type="button"
    >
      Ctrl+C
    </button>
  );
}

export default CopyButton;
