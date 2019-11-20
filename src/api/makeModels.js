import Airtable from 'airtable';
import makeModel, { ID } from './makeModel';

const { REACT_APP_AIRTABLE_API_KEY, REACT_APP_AIRTABLE_APP_ID } = process.env;

const ACTIVE = 'active';
const API_KEY = REACT_APP_AIRTABLE_API_KEY;
const APP_ID = REACT_APP_AIRTABLE_APP_ID;
const DESC = 'desc';
const STATUS = 'Status';
const TABLE_NAME = 'FITBs';

function makeModels(callback) {
  const base = new Airtable({ apiKey: API_KEY }).base(APP_ID);
  let models;
  base(TABLE_NAME)
    .select({
      filterByFormula: `${STATUS}="${ACTIVE}"`,
      sort: [{ field: ID, direction: DESC }]
    })
    .eachPage(
      function page(records, fetchNextPage) {
        models = records.map(makeModel);
        fetchNextPage();
      },
      function done(error) {
        callback(error, models);
      }
    );
}

export default makeModels;
