import { SEPARATOR } from '../constants';

function interpolate({ add, source, values }) {
  const text = source.slice();
  const parts = text.split(SEPARATOR);
  const result = [];
  parts.forEach((part, index) => {
    result.push(part);
    if (values[index]) {
      add({ index, result });
    }
  });
  return result;
}

export default interpolate;
