import makeFitb from './makeFitb';
import { records } from './response';

function makeRecord(element) {
  return {
    get: field => element.fields[field],
    id: element.id
  };
}

test('models to match snapshot', () => {
  const models = records.map(makeRecord).map(makeFitb);

  expect(models).toMatchSnapshot();
});
