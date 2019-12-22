import { name, version } from '../../package.json';

const { NODE_ENV } = process.env;

const base = {
  appName: name,
  appVersion: version,
  nodeEnv: NODE_ENV
};

export const viewCollection = {
  properties: function properties({ counter, tag, url }) {
    return {
      ...base,
      collectionId: tag.id,
      collectionName: tag.name,
      loadTime: 'TBD',
      promptsDisplayed: 'TBD',
      promptsInCollection: counter,
      url
    };
  },
  type: 'view collection'
};

export const viewHome = {
  properties: function properties({ url }) {
    return {
      ...base,
      loadTime: 'TBD',
      url
    };
  },
  type: 'view home'
};
