import { name, version } from '../../package.json';

const { NODE_ENV } = process.env;

const base = {
  name,
  nodeEnv: NODE_ENV,
  version
};

export const viewCollection = {
  properties: function properties({ counter, tag }) {
    return {
      ...base,
      collectionId: tag.id,
      collectionName: tag.name,
      loadTime: 'TBD',
      promptsDisplayed: 'TBD',
      promptsInCollection: counter
    };
  },
  type: 'view collection'
};
