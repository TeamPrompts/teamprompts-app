import makeRecord from '../mocks/makeRecord';
import makeFitb from './makeFitb';
import { records } from './response';

test('models to match snapshot', () => {
  const models = records.map(makeRecord).map(makeFitb);

  expect(models).toMatchSnapshot();
});
