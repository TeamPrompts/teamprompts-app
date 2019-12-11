import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';
import selectFitbs from '../../api/selectFitbs';
import selectTags from '../../api/selectTags';
import fitb from '../../mocks/fitb';
import tag from '../../mocks/tag';

jest.mock('../../api/selectFitbs');
jest.mock('../../api/selectTags');

describe('App', () => {
  beforeEach(() => {
    selectFitbs.mockImplementation(callback => callback(null, [fitb]));
    selectTags.mockImplementation(callback => callback(null, [tag]));
  });

  it('loading', () => {
    const tree = create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('w/ fitbs & tags', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('w/ fitbs error', () => {
    selectFitbs.mockImplementation(callback => callback(new Error('Oh Noes!')));
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('w/ tags error', () => {
    selectTags.mockImplementation(callback => callback(new Error('Oh Noes!')));
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('click retrospectives', () => {
    const { getByTestId } = render(<App />);
    fireEvent.click(getByTestId(tag.name));
    expect(getByTestId(tag.name)).toMatchSnapshot();
  });

  // TODO: test routes
});
