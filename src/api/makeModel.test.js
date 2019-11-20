import makeModel from './makeModel';
import { records } from './response';

function makeRecord(element) {
  return {
    get: field => element.fields[field]
  };
}

test('models to match snapshot', () => {
  const models = records.map(makeRecord).map(makeModel);

  expect(models).toMatchSnapshot();
});
