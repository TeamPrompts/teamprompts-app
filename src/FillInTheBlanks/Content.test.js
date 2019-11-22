import React from 'react';
import { create } from 'react-test-renderer';
import { modes } from '../constants';
import model from '../model';
import Content from './Content';

describe('Content', () => {
  const scenarios = [
    {
      description: modes.blanks,
      props: {
        fitb: model,
        mode: modes.blanks
      }
    },
    {
      description: modes.examples,
      props: {
        fitb: model,
        mode: modes.examples
      }
    },
    {
      description: `${modes.input} w/ prompts`,
      props: {
        fitb: model,
        mode: modes.input
      }
    },
    {
      description: `${modes.input} w/o prompts`,
      props: {
        fitb: (() => {
          const { prompts, ...rest } = model;
          return rest;
        })(),
        mode: modes.input
      }
    },
    {
      description: modes.prompts,
      props: {
        fitb: model,
        mode: modes.prompts
      }
    }
  ];

  scenarios.forEach(({ description, props }) => {
    it(description, () => {
      const tree = create(<Content {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
