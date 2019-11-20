import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import { BLANK } from '../../constants';
import InputText from './InputText';

describe('InputText', () => {
  const mockDispatch = jest.fn();

  const props = {
    dispatch: mockDispatch,
    hint: BLANK,
    id: 0,
    value: ''
  };

  it('to match snapshot', () => {
    const tree = create(<InputText {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('on change', () => {
    const { getByTestId } = render(<InputText {...props} />);
    const ID = 'input';
    const LOREM_IPSUM = 'lorem ipsum dolor sit amet';

    fireEvent.change(getByTestId(ID), { target: { value: LOREM_IPSUM } });

    expect(mockDispatch).toBeCalled();
  });
});
