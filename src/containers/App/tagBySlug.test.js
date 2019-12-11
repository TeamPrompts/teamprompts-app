import tagAll from '../../api/tagAll';
import tags from '../../mocks/tags';
import tagBySlug from './tagBySlug';

describe('tagBySlug', () => {
  it('all', () => {
    expect(tagBySlug({ slug: 'YOLO', tags })).toEqual(tagAll);
  });

  it('empty', () => {
    expect(tagBySlug({ slug: '', tags: [] })).toEqual({ name: '', slug: '' });
  });
});
