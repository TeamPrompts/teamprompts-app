import { ACTIVE, DESC, FITBS, ID, STATUS } from './constants';
import makeFitb from './makeFitb';
import select from './select';

function selectFitbs(callback) {
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

export default selectFitbs;
