import { ASC, NAME, TAGS } from './constants';
import makeTag from './makeTag';
import select from './select';

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
