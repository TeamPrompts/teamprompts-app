import { SEPARATOR } from '../constants';

function compose({ build, source, values }) {
  const text = source.slice();
  const parts = text.split(SEPARATOR);
  const result = [];
  parts.forEach((part, index) => {
    result.push(part);
    if (values[index]) {
      result.push(build({ index }));
    }
  });
  return result;
}

export default compose;
