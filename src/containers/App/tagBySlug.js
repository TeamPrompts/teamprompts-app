import tagAll from '../../api/tagAll';

function tagBySlug({ slug, tags }) {
  const empty = { name: '', slug: '' };
  if (tags.length > 0) {
    const tag = tags.find(tag => tag.slug === slug);
    return tag || tagAll;
  }
  return empty;
}

export default tagBySlug;
