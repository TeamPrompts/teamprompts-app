import React from 'react';
import { create } from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import fitb from '../../mocks/fitb';
import tag from '../../mocks/tag';
import CategoryPage from './CategoryPage';

const mockSlug = tag.slug;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    slug: mockSlug
  })
}));

describe('CategoryPage', () => {
  it('to match snapshot', () => {
    const tree = create(
      <Router>
        <CategoryPage fitbs={[fitb]} tags={[tag]} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
