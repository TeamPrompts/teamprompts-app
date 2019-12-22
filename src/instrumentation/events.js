import { name, version } from '../../package.json';

const { NODE_ENV } = process.env;

const base = {
  appName: name,
  appVersion: version,
  nodeEnv: NODE_ENV
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

export const viewHome = {
  properties: function properties() {
    return {
      ...base,
      loadTime: 'TBD'
    };
  },
  type: 'view home'
};
