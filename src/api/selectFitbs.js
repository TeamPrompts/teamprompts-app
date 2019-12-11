import { ACTIVE, DESC, FITBS, ID, STATUS } from './constants';
import fitbs from '../mocks/fitbs';
import makeFitb from './makeFitb';
import select from './select';

const { REACT_APP_AIRPLAIN_MODE } = process.env;

function selectFitbs(callback) {
  if (REACT_APP_AIRPLAIN_MODE === 'on') {
    callback(null, fitbs);
  } else {
    select({
      callback,
      map: makeFitb,
      options: {
        filterByFormula: `${STATUS}="${ACTIVE}"`,
        sort: [{ field: ID, direction: DESC }]
      },
      tableName: FITBS
    });
  }
}

export default selectFitbs;
