import { ASC, FITBS, NAME, TAGS } from './constants';
import select from './select';

function makeTag(record) {
  return {
    fitbs: record.get(FITBS),
    id: record.id,
    name: record.get(NAME)
  };
}

function selectTags(callback) {
  select({
    callback,
    map: makeTag,
    options: {
      sort: [{ field: NAME, direction: ASC }]
    },
    tableName: TAGS
  });
}

export default selectTags;
