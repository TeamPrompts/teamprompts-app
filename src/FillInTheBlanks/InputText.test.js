import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import { BLANK } from '../constants';
import InputText from './InputText';

describe('InputText', () => {
  const props = {
    hint: BLANK
  };

  it('to match snapshot', () => {
    const tree = create(<InputText {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('on change', () => {
    const { getByTestId } = render(<InputText {...props} />);
    const ID = 'input';
    const LOREM_IPSUM = 'lorem ipsum dolor sit amet';

    fireEvent.change(getByTestId(ID), { target: { value: 'hello' } });
    expect(getByTestId(ID).size).toEqual(BLANK.length);

    fireEvent.change(getByTestId(ID), { target: { value: LOREM_IPSUM } });
    expect(getByTestId(ID).size).toEqual(LOREM_IPSUM.length);
  });
});
