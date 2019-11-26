import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import fitb from '../../mocks/fitb';
import tag from '../../mocks/tag';
import tagAll from '../../api/tagAll';
import FiltersWithRouter from './FiltersWithRouter';

describe('FiltersWithRouter', () => {
  const mockOnClick = jest.fn();
  const props = {
    filter: tagAll,
    fitbs: [fitb, { ...fitb, examples: ['Los Angeles'] }],
    onClick: mockOnClick,
    tags: [tag]
  };

  it('to match snapshot', () => {
    const tree = create(<FiltersWithRouter {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('click', () => {
    const { getByTestId } = render(<FiltersWithRouter {...props} />);

    fireEvent.click(getByTestId(tag.name));

    expect(mockOnClick).toBeCalled();
  });
});
