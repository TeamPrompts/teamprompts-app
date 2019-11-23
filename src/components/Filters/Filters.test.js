import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import fitb from '../../mocks/fitb';
import tag from '../../mocks/tag';
import { tagAll } from '../../App';
import Filters from './Filters';

describe('Filters', () => {
  const mockOnClick = jest.fn();
  const props = {
    filter: tagAll,
    fitbs: [fitb, { ...fitb, examples: ['Los Angeles'] }],
    onClick: mockOnClick,
    tags: [tag]
  };

  it('to match snapshot', () => {
    const tree = create(<Filters {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('click', () => {
    const { getByTestId } = render(<Filters {...props} />);

    fireEvent.click(getByTestId(tag.name));

    expect(mockOnClick).toBeCalled();
  });
});
