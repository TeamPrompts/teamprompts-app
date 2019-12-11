import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { create } from 'react-test-renderer';
import tag from '../../mocks/tag';
import { pageTypes } from '../../constants';
import Breadcrumbs from './Breadcrumbs';

describe('Breadcrumbs', () => {
  const scenarios = [
    {
      description: pageTypes.CategoryPage,
      props: {
        pageType: pageTypes.CategoryPage,
        tag
      }
    },
    {
      description: pageTypes.HomePage,
      props: {
        pageType: pageTypes.HomePage
      }
    },
    {
      description: pageTypes.PromptsPage,
      props: {
        pageType: pageTypes.PromptsPage,
        tag
      }
    },
    {
      description: 'no page type',
      props: {}
    }
  ];

  scenarios.forEach(({ description, props }) => {
    it(description, () => {
      const tree = create(
        <Router>
          <Breadcrumbs {...props} />
        </Router>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
