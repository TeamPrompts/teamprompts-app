import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import fitb from '../mocks/fitb';
import { modes } from '../constants';
import Content from './Content';

describe('Content', () => {
  const scenarios = [
    {
      description: modes.blanks,
      props: {
        fitb,
        mode: modes.blanks
      }
    },
    {
      description: modes.examples,
      props: {
        fitb,
        mode: modes.examples
      }
    },
    {
      description: `${modes.input} w/ prompts`,
      props: {
        fitb,
        mode: modes.input
      }
    },
    {
      description: `${modes.input} w/o prompts`,
      props: {
        fitb: (() => {
          const { prompts, ...rest } = fitb;
          return rest;
        })(),
        mode: modes.input
      }
    },
    {
      description: modes.prompts,
      props: {
        fitb,
        mode: modes.prompts
      }
    }
  ];

  scenarios.forEach(({ description, props }) => {
    it(description, () => {
      const mockCallback = jest.fn();
      const tree = create(<Content callback={mockCallback} {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  it('callback', () => {
    const mockCallback = jest.fn();
    const props = { callback: mockCallback, fitb, mode: modes.input };
    const { getAllByTestId } = render(<Content {...props} />);

    fireEvent.change(getAllByTestId('input')[0], { target: { value: 'fear' } });

    expect(mockCallback).toBeCalledWith({ 0: 'fear', 1: '' });
  });
});
