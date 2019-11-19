import classnames from 'classnames';
import React, { useReducer } from 'react';
import { BLANK, SEPARATOR } from '../constants';
import InputText from './InputText';
import makeInitialState from './makeInitialState';
import modes from './modes';
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

function Content({ mode, model }) {
  const [state, dispatch] = useReducer(reducer, makeInitialState(model.source));
  const values = getValues(mode, model);
  return interpolate({ dispatch, mode, source: model.source, state, values });
}

export default Content;
