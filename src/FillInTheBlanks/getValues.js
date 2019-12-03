import { BLANK, modes } from '../constants';

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

export default getValues;
