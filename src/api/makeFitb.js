import { AUTHOR, EXAMPLES, FITB, PROMPTS, TAGS } from './constants';

function makeFitb(record) {
  const examples = record.get(EXAMPLES)
    ? JSON.parse(record.get(EXAMPLES))
    : undefined;
  const prompts = record.get(PROMPTS)
    ? JSON.parse(record.get(PROMPTS))
    : undefined;
  return {
    author: record.get(AUTHOR),
    examples: examples,
    id: record.id, // INFO .id and not .get('ID')
    prompts: prompts,
    source: record.get(FITB),
    tags: record.get(TAGS)
  };
}

export default makeFitb;
