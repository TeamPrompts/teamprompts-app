import React from 'react';
import { create } from 'react-test-renderer';
import { modes } from '../constants';
import CopyButton from './CopyButton';

describe('CopyButton', () => {
  const props = {
    mode: modes.input
  };

  it('to match snapshot', () => {
    const tree = create(<CopyButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
