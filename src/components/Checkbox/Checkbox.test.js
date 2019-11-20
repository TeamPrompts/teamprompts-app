import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  const mockOnChange = jest.fn();
  const props = {
    id: '0',
    onChange: mockOnChange,
    value: 'on'
  };

  it('to match snapshot', () => {
    const tree = create(<Checkbox {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it.skip('toggle', () => {
    const { getByTestId } = render(<Checkbox {...props} />);

    fireEvent.change(getByTestId('0'), { target: { value: 'on' } });

    expect(mockOnChange).toBeCalled();
  });
});
