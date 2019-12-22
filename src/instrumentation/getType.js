function getType(fitb) {
  const types = ['blanks'];
  if (fitb.prompts) {
    types.push('prompts');
  }
  if (fitb.examples) {
    types.push('examples');
  }
  if (types.length === 1) {
    return `just ${types[0]}`;
  }
  if (types.length === 2) {
    return types.join(' and ');
  }
  if (types.length === 3) {
    return types
      .map((type, index) => (index === 2 ? `and ${type}` : type))
      .join(', ');
  }
}

export default getType;
