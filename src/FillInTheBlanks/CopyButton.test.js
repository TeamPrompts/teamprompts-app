import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import fitb from '../mocks/fitb';
import { modes } from '../constants';
import CopyButton from './CopyButton';

describe('CopyButton', () => {
  const mockOnClick = jest.fn();

  const props = {
    fitb,
    inputs: {
      '0': 'greek yogurt',
      '1': ''
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

  it('examples', () => {
    const copy = { ...props, mode: modes.examples };
    const { getByTestId } = render(<CopyButton {...copy} />);

    fireEvent.click(getByTestId('copy-button'));

    expect(mockOnClick.mock.calls[1][0]).toMatchSnapshot();
  });
});
