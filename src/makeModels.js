import Airtable from 'airtable';

const API_KEY = 'keybZUBuHX3GWW9EQ';
const APP_ID = 'apphnkOs93OSLlbQ2';
const EXAMPLES = 'Examples';
const FITB = 'FITB';
const ID = 'ID';
const PROMPTS = 'Prompts';
const STATUS = 'Status';
const TABLE_NAME = 'FITBs';

const statuses = {
  active: 'active'
};

const base = new Airtable({ apiKey: API_KEY }).base(APP_ID);

function makeModels(callback) {
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
