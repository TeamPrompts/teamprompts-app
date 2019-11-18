import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import model from '../model';
import FillInTheBlanks from './FillInTheBlanks';
import modes from './modes';

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

  it('click radios', () => {
    const { getByTestId } = render(<FillInTheBlanks {...props} />);

    function actAssert(mode) {
      const id = `${ID}-${mode}`; // INFO: check src/FillInTheBlanks/Radio.js#4
      fireEvent.click(getByTestId(id));
      expect(getByTestId(id).checked).toEqual(true);
    }

    actAssert(modes.examples);

    actAssert(modes.prompts);

    actAssert(modes.blanks);
  });
});
