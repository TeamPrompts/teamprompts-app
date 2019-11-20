const AUTHOR = 'Author';
const EXAMPLES = 'Examples';
const FITB = 'FITB';
export const ID = 'ID';
const PROMPTS = 'Prompts';

function makeModel(record) {
  const examples = record.get(EXAMPLES)
    ? JSON.parse(record.get(EXAMPLES))
    : undefined;
  const prompts = record.get(PROMPTS)
    ? JSON.parse(record.get(PROMPTS))
    : undefined;
  return {
    author: record.get(AUTHOR),
    examples: examples,
    id: record.get(ID),
    prompts: prompts,
    source: record.get(FITB)
  };
}

export default makeModel;
