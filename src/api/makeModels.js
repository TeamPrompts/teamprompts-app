import Airtable from 'airtable';

const { REACT_APP_AIRTABLE_API_KEY, REACT_APP_AIRTABLE_APP_ID } = process.env;

const API_KEY = REACT_APP_AIRTABLE_API_KEY;
const APP_ID = REACT_APP_AIRTABLE_APP_ID;
const EXAMPLES = 'Examples';
const FITB = 'FITB';
const ID = 'ID';
const PROMPTS = 'Prompts';
const STATUS = 'Status';
const TABLE_NAME = 'FITBs';

const statuses = {
  active: 'active'
};

function makeModels(callback) {
  const base = new Airtable({ apiKey: API_KEY }).base(APP_ID);
  const models = [];
  base(TABLE_NAME)
    .select({
      sort: [{ field: ID, direction: 'desc' }]
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function(record) {
          const status = record.get(STATUS);
          if (status === statuses.active) {
            const examples = record.get(EXAMPLES)
              ? JSON.parse(record.get(EXAMPLES))
              : undefined;
            const prompts = record.get(PROMPTS)
              ? JSON.parse(record.get(PROMPTS))
              : undefined;
            models.push({
              examples: examples,
              prompts: prompts,
              source: record.get(FITB)
            });
          }
        });
        fetchNextPage();
      },
      function done(error) {
        callback(error, models);
      }
    );
}

export default makeModels;
