import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import tag from '../../tag';
import Filters from './Filters';

describe('Filters', () => {
  const mockOnClick = jest.fn();
  const props = {
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
