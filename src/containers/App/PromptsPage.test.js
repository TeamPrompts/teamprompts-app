import React from 'react';
import { create } from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import fitb from '../../mocks/fitb';
import tag from '../../mocks/tag';
import PromptsPage from './PromptsPage';

const mockId = fitb.id;
const mockSlug = tag.slug;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockId,
    slug: mockSlug
  })
}));

describe('PromptsPage', () => {
  it('to match snapshot', () => {
    const tree = create(
      <Router>
        <PromptsPage fitbs={[fitb]} tags={[tag]} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
