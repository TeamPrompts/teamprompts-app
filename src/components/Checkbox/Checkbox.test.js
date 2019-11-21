import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import Checkbox, { values } from './Checkbox';

describe('Checkbox', () => {
  const ID = '0';
  const mockOnChange = jest.fn();
  const props = {
    id: ID,
    onChange: mockOnChange,
    value: values.on
  };

  it('to match snapshot', () => {
    const tree = create(<Checkbox {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('click', () => {
    const { getByTestId } = render(<Checkbox {...props} />);

    fireEvent.click(getByTestId(ID));

    expect(mockOnChange).toBeCalledWith(values.on);
  });
});
