import classnames from 'classnames';
import React, { useReducer } from 'react';
import InputText from '../components/InputText/InputText';
import { BLANK, SEPARATOR, modes } from '../constants';
import makeInitialState from './makeInitialState';
import reducer from './reducer';

function getValues(mode, { examples, prompts, source }) {
  let values = [];
  const blanks = source.match(/__BLANK__/g).map(() => BLANK); // INFO: not sure if I can interpolate inside a regex
  switch (mode) {
    case modes.blanks:
    default:
      values = blanks;
      break;
    case modes.examples:
      values = examples;
      break;
    case modes.input:
      if (prompts) {
        values = prompts;
      } else {
        values = blanks;
      }
      break;
    case modes.prompts:
      values = prompts;
      break;
  }
  return values;
}

function interpolate({ dispatch, mode, source, state, values }) {
  const text = source.slice();
  const parts = text.split(SEPARATOR);
  const result = [];
  parts.forEach((part, index) => {
    result.push(part);
    if (values[index]) {
      let element;
      if (mode === modes.input) {
        const hint = values[index];
        element = (
          <InputText
            dispatch={dispatch}
            hint={hint}
            id={index}
            key={index}
            value={state[index]}
          />
        );
      } else {
        element = (
          <span
            className={classnames({
              'bg-yellow-200': mode === modes.blanks,
              'bg-green-200': mode === modes.examples,
              'bg-blue-200': mode === modes.prompts
            })}
            key={index}
          >
            {values[index]}
          </span>
        );
      }
      result.push(element);
    }
  });
  return result;
}

function Content({ fitb, mode }) {
  const [state, dispatch] = useReducer(reducer, makeInitialState(fitb.source));
  const values = getValues(mode, fitb);
  return interpolate({ dispatch, mode, source: fitb.source, state, values });
}

export default Content;
