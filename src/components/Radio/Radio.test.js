import React from 'react';
import { create } from 'react-test-renderer';
import { modes } from '../../constants';
import Radio from './Radio';

describe('Radio', () => {
  const mockOnChange = jest.fn();

  const scenarios = [
    {
      description: 'blanks',
      props: {
        id: 0,
        mode: modes.blanks,
        onChange: mockOnChange,
        value: modes.blanks
      }
    }
  ];

  scenarios.forEach(({ description, props }) => {
    it(description, () => {
      const tree = create(<Radio {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
