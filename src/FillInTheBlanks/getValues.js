import { BLANK, BLANK_XS, modes } from '../constants';

function makeBlanks({ blank, source }) {
  return source.match(/__BLANK__/g).map(() => blank); // INFO: not sure if I can interpolate inside a regex
}

function getValues(mode, { examples, prompts, source }) {
  let values = [];
  const blanks = makeBlanks({ blank: BLANK, source });
  switch (mode) {
    case modes.blanks:
    default:
      values = blanks;
      break;
    case modes.blanksXS:
      values = makeBlanks({ blank: BLANK_XS, source });
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

export default getValues;
