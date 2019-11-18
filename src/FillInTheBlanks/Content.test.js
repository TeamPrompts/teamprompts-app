import React from 'react';
import { create } from 'react-test-renderer';
import model from '../model';
import Content from './Content';
import modes from './modes';

describe('Content', () => {
  const scenarios = [
    {
      description: modes.blanks,
      props: {
        mode: modes.blanks,
        model
      }
    },
    {
      description: modes.examples,
      props: {
        mode: modes.examples,
        model
      }
    },
    {
      description: `${modes.input} w/ prompts`,
      props: {
        mode: modes.input,
        model
      }
    },
    {
      description: `${modes.input} w/o prompts`,
      props: {
        mode: modes.input,
        model: (() => {
          const { prompts, ...rest } = model;
          return rest;
        })()
      }
    },
    {
      description: modes.prompts,
      props: {
        mode: modes.prompts,
        model
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
