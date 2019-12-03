import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import { modes } from '../constants';
import CopyButton from './CopyButton';

describe('CopyButton', () => {
  const mockOnClick = jest.fn();

  const props = {
    fitb: {
      author: 'John Cutler',
      examples: [
        'increasing',
        'speed of onboarding',
        'increases',
        'rate of overall adoption',
        'their ability to see value earlier'
      ],
      id: 'recglWG0JkW6S4z5T',
      prompts: [
        'increasing/decreasing',
        'some activity',
        'increases/decreases',
        'key performance metric, financial metric, etc.',
        'factors, caveats, assumptions'
      ],
      source:
        'We believe that __BLANK__ __BLANK__ causes __BLANK__ in some __BLANK__. There are a number of assumptions/factors underpinning that causal relationship including __BLANK__.',
      tags: ['recmdwXtLaj7hls73', 'rechbGc1FLmwxb9Hg']
    },
    inputs: {
      '0': 'decreasing',
      '1': 'quality control',
      '2': 'an increase',
      '3': '',
      '4': ''
    },
    mode: modes.input,
    onClick: mockOnClick
  };

  it('to match snapshot', () => {
    const tree = create(<CopyButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('input', () => {
    const { getByTestId } = render(<CopyButton {...props} />);

    fireEvent.click(getByTestId('copy-button'));

    expect(mockOnClick.mock.calls[0][0]).toMatchSnapshot();
  });
});
