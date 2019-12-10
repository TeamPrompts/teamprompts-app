import tagAll from '../../api/tagAll';
import tag from '../../mocks/tag';
import tagBySlug from './tagBySlug';

describe('tagBySlug', () => {
  it('empty', () => {
    expect(tagBySlug({ slug: '', tags: [] })).toEqual({ name: '', slug: '' });
  });

  it('Unknown', () => {
    expect(tagBySlug({ slug: 'strategy', tags: [tag] })).toEqual(tagAll);
  });
});
