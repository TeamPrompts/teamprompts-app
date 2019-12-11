import React from 'react';
import { create } from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import fitbs from '../../mocks/fitbs';
import tag from '../../mocks/tag';
import tags from '../../mocks/tags';
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
        <CategoryPage fitbs={fitbs} tags={tags} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
