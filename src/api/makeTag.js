import { FITBS, NAME } from './constants';

function makeTag(record) {
  const tag = {
    fitbs: record.get(FITBS),
    id: record.id,
    name: record.get(NAME)
  };
  return tag;
}

export default makeTag;
