import classnames from 'classnames';
import React, { useEffect, useReducer } from 'react';
import InputText from '../components/InputText/InputText';
import useLocalStorage from '../hooks/useLocalStorage';
import { modes } from '../constants';
import compose from './compose';
import getValues from './getValues';
import makeInitialState from './makeInitialState';
import reducer from './reducer';

function makeBuild({ dispatch, mode, state, values }) {
  function build(index) {
    let element;
    if (mode === modes.input) {
      element = (
        <InputText
          dispatch={dispatch}
          hint={values[index]}
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
    return element;
  }
  return build;
}

// TODO: move reducer to FillInTheBlanks component
function Content({ callback, fitb, mode }) {
  const [initialState, setinitialState] = useLocalStorage(
    fitb.id,
    makeInitialState(fitb.source)
  );

  function middleware(state, action) {
    const newState = reducer(state, action);
    setinitialState(newState);
    return newState;
  }

  const [state, dispatch] = useReducer(middleware, initialState);

  useEffect(() => {
    callback(state)
  }, [callback, state])

  const values = getValues(mode, fitb);
  return compose({
    build: makeBuild({ dispatch, mode, state, values }),
    source: fitb.source,
    values
  });
}

export default Content;
