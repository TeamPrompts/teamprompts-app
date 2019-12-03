import classnames from 'classnames';
import React, { useReducer } from 'react';
import InputText from '../components/InputText/InputText';
import { modes } from '../constants';
import getValues from './getValues';
import interpolate from './interpolate';
import makeInitialState from './makeInitialState';
import reducer from './reducer';

function makeAdd({ dispatch, mode, state, values }) {
  function add({ index, result }) {
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
  return add;
}

function Content({ callback, fitb, mode }) {
  function middleware(state, action) {
    const newState = reducer(state, action);
    callback(newState);
    return newState;
  }

  const [state, dispatch] = useReducer(
    middleware,
    makeInitialState(fitb.source)
  );
  const values = getValues(mode, fitb);
  return interpolate({
    add: makeAdd({ dispatch, mode, state, values }),
    source: fitb.source,
    values
  });
}

export default Content;
