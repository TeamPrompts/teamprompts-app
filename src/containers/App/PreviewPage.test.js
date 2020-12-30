import { render } from '@testing-library/react';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import selectFitbs from '../../api/selectFitbs';
import fitb from '../../mocks/fitb';
import PreviewPage from './PreviewPage';

jest.mock('../../api/selectFitbs');

const mockId = fitb.id;
// const mockSlug = tag.slug;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockId
  })
}));

describe('PreviewPage', () => {
  beforeEach(() => {
    selectFitbs.mockImplementation((options, callback) =>
      callback(null, [fitb])
    );
  });

  it('w/ fitb', () => {
    const { container } = render(
      <Router>
        <PreviewPage />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it('w/ fitb not found', () => {
    selectFitbs.mockImplementation((options, callback) => callback(null, []));

    const { container } = render(
      <Router>
        <PreviewPage />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it('w/ error', () => {
    selectFitbs.mockImplementation((options, callback) =>
      callback(new Error('Oh Noes!'))
    );

    const { container } = render(
      <Router>
        <PreviewPage />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
