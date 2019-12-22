import { name, version } from '../../package.json';
import getType from './getType';

const { NODE_ENV } = process.env;

const base = {
  appName: name,
  appVersion: version,
  loadTime: 'TBD',
  nodeEnv: NODE_ENV
};

export const viewCollection = {
  properties: function properties({ counter, tag, url }) {
    return {
      ...base,
      collectionId: tag.id,
      collectionName: tag.name,
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
      url
    };
  },
  type: 'view home'
};

export const viewPromptDetail = {
  properties: function properties({ fitb, tag, url }) {
    return {
      ...base,
      collectionId: tag.id,
      collectionName: tag.name,
      promptId: fitb.id,
      promptType: getType(fitb),
      url
    };
  },
  type: 'view prompt detail'
};
