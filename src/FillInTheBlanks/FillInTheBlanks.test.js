import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import model from '../model';
import FillInTheBlanks from './FillInTheBlanks';

describe('FillInTheBlanks', () => {
  const ID = '1';

  const props = {
    id: ID,
    model
  };

  it('to match snapshot', () => {
    const tree = create(<FillInTheBlanks {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it.skip('click radios', () => {
    const { getByTestId } = render(<FillInTheBlanks {...props} />);

    fireEvent.change(getByTestId(ID), { target: { value: 'on' } });
  });
});
