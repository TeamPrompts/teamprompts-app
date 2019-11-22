import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import model from '../model';
import FillInTheBlanks from './FillInTheBlanks';

describe('FillInTheBlanks', () => {
  const props = {
    fitb: model
  };

  it('to match snapshot', () => {
    const tree = create(<FillInTheBlanks {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggle', () => {
    const { container, getByTestId } = render(<FillInTheBlanks {...props} />);

    // on
    fireEvent.click(getByTestId(model.id));
    expect(container).toMatchSnapshot();

    // off
    fireEvent.click(getByTestId(model.id));
    expect(container).toMatchSnapshot();
  });
});
