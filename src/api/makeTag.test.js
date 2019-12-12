import makeRecord from '../mocks/makeRecord';
import makeTag from './makeTag';
import { records } from './tagsResponse';

test('tags to match snapshot', () => {
  const tags = records.map(makeRecord).map(makeTag);

  expect(tags).toMatchSnapshot();
});
