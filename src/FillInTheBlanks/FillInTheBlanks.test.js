import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import { useClipboard } from 'use-clipboard-copy';
import fitb from '../mocks/fitb';
import FillInTheBlanks from './FillInTheBlanks';

jest.mock('use-clipboard-copy');

describe('FillInTheBlanks', () => {
  const props = {
    fitb
  };

  it('to match snapshot', () => {
    const tree = create(<FillInTheBlanks {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggle', () => {
    const { container, getByTestId } = render(<FillInTheBlanks {...props} />);

    // on
    fireEvent.click(getByTestId(fitb.id));
    expect(container).toMatchSnapshot();

    // off
    fireEvent.click(getByTestId(fitb.id));
    expect(container).toMatchSnapshot();
  });

  it('Ctrl+C', () => {
    const mockCopy = jest.fn();
    useClipboard.mockImplementation(() => ({ copy: mockCopy }));
    const { getByTestId } = render(<FillInTheBlanks {...props} />);

    fireEvent.click(getByTestId('copy-button'));

    expect(mockCopy).toBeCalled();
  });
});
