import tags from './mocks/tags';
import slugify from './slugify';

test('slugify', () => {
  expect(tags.map(tag => slugify(tag.name))).toMatchSnapshot();
});
