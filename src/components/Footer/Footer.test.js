import useCookie from '@devhammed/use-cookie';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { MASTER_DETAIL_V1, NONE } from '../../constants';
import Footer from './Footer';

jest.mock('@devhammed/use-cookie');

describe('Footer', () => {
  const scenarios = [
    {
      description: 'TRY',
      expected: MASTER_DETAIL_V1,
      experiment: NONE
    },
    {
      description: 'LEAVE',
      expected: NONE,
      experiment: MASTER_DETAIL_V1
    }
  ];

  scenarios.forEach(({ description, expected, experiment }) => {
    it(description, () => {
      const mockSetExperiment = jest.fn();
      useCookie.mockImplementation(() => [experiment, mockSetExperiment]);

      const props = { version: '0.16.10' };
      const { getByTestId } = render(<Footer {...props} />);

      fireEvent.click(getByTestId('βeta-button'));

      expect(mockSetExperiment).toBeCalledWith(expected);
    });
  });
});
