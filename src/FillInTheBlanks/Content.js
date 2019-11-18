import classnames from 'classnames';
import React from 'react';
import { BLANK, SEPARATOR } from '../constants';
import InputText from './InputText';
import modes from './modes';

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

function interpolate(mode, source, values) {
  const text = source.slice();
  const parts = text.split(SEPARATOR);
  const result = [];
  parts.forEach((part, index) => {
    result.push(part);
    if (values[index]) {
      let element;
      if (mode === modes.input) {
        const hint = values[index];
        element = <InputText key={index} hint={hint} />;
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
  const values = getValues(mode, model);
  return interpolate(mode, model.source, values);
}

export default Content;
