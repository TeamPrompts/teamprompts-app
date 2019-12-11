import tagAll from '../../api/tagAll';
import tag from '../../mocks/tag';
import tagBySlug from './tagBySlug';

describe('tagBySlug', () => {
  it('all', () => {
    expect(tagBySlug({ slug: 'strategy', tags: [tag] })).toEqual(tagAll);
  });

  it('empty', () => {
    expect(tagBySlug({ slug: '', tags: [] })).toEqual({ name: '', slug: '' });
  });
});
