import React from 'react';
import { BLANK, modes } from '../constants';
import compose from './compose';
import getValues from './getValues';

function makeBuild({ inputs, mode, values }) {
  function build({ index }) {
    let element;
    if (mode === modes.input) {
      if (inputs && inputs[index]) {
        element = inputs[index];
      } else {
        element = BLANK;
      }
    } else {
      element = values[index];
    }
    return element;
  }
  return build;
}

// TODO: read inputs from the local storage
function CopyButton({ fitb, inputs, mode, onClick }) {
  return (
    <button
      className="bg-blue-500 focus:outline-none font-bold font-mono hover:bg-blue-700 ml-3 px-4 rounded-full text-xs text-white"
      data-testid="copy-button"
      onClick={event => {
        event.stopPropagation();
        const values = getValues(mode, fitb);
        const result = compose({
          build: makeBuild({ inputs, mode, values }),
          source: fitb.source,
          values
        });
        onClick(result.join(''));
      }}
      type="button"
    >
      Copy to clipboard
    </button>
  );
}

export default CopyButton;
