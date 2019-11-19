import { SEPARATOR } from './constants';

export const SOURCE = `Do you know the way to ${SEPARATOR}?`;

const model = {
  examples: ['San Jose'],
  prompts: ['[place]'],
  source: SOURCE
};

export default model;
