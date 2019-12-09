import { ASC, NAME, TAGS } from './constants';
import tag from '../mocks/tag';
import makeTag from './makeTag';
import select from './select';

const { REACT_APP_FLIGHT_MODE } = process.env;

function selectTags(callback) {
  if (REACT_APP_FLIGHT_MODE === 'on') {
    callback(null, [tag]);
  } else {
    select({
      callback,
      map: makeTag,
      options: {
        sort: [{ field: NAME, direction: ASC }]
      },
      tableName: TAGS
    });
  }
}

export default selectTags;
