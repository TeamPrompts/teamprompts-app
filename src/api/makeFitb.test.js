import makeRecord from '../mocks/makeRecord';
import { records } from './fitbsResponse';
import makeFitb from './makeFitb';

test('models to match snapshot', () => {
  const models = records.map(makeRecord).map(makeFitb);

  expect(models).toMatchSnapshot();
});
