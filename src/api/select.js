import Airtable from 'airtable';

const {
  REACT_APP_AIRTABLE_API_KEY: API_KEY,
  REACT_APP_AIRTABLE_APP_ID: APP_ID
} = process.env;

function select({ callback, map, options, tableName }) {
  const base = new Airtable({ apiKey: API_KEY }).base(APP_ID);
  let result;
  base(tableName)
    .select(options)
    .eachPage(
      function page(records, fetchNextPage) {
        result = records.map(map);
        fetchNextPage();
      },
      function done(error) {
        callback(error, result);
      }
    );
}

export default select;
