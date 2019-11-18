import classnames from 'classnames';
import React from 'react';
import modes from './modes';

const BLANK = '________________';
const SEPARATOR = '__BLANK__';

function getValues(mode, { examples, prompts, source }) {
  let values = [];
  const blanks = source.match(/__BLANK__/g).map(() => BLANK);
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
        element = <input key={index} placeholder={values[index]} type="text" />;
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
