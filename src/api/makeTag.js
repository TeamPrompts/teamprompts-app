import { FITBS, NAME } from './constants';
import slugify from './slugify';

function makeTag(record) {
  const name = record.get(NAME);

  const tag = {
    fitbs: record.get(FITBS),
    id: record.id,
    name: name,
    slug: slugify(name)
  };
  return tag;
}

export default makeTag;
