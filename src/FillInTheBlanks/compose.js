import { SEPARATOR } from '../constants';

function compose({ add, source, values }) {
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

export default compose;
