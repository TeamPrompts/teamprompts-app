const UNKNOWN = 'Unknown';

function tagBySlug({ slug, tags }) {
  const empty = { name: '', slug: '' };
  if (tags.length > 0) {
    const tag = tags.find(tag => tag.slug === slug);
    return tag || { ...empty, name: UNKNOWN };
  }
  return empty;
}

export default tagBySlug;
