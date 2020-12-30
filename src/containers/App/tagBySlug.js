import tagAll from '../../api/tagAll';

export const tagEmpty = { name: '', slug: '' };

function tagBySlug({ slug, tags }) {
  if (tags.length > 0) {
    const tag = tags.find(tag => tag.slug === slug);
    return tag || tagAll;
  }
  return tagEmpty;
}

export default tagBySlug;
