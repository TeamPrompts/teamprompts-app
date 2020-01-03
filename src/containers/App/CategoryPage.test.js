import { render } from '@testing-library/react';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { useAmplitude } from '../../instrumentation/AmplitudeHookProvider';
import fitbs from '../../mocks/fitbs';
import tag from '../../mocks/tag';
import tags from '../../mocks/tags';
import CategoryPage from './CategoryPage';

const mockSlug = tag.slug;

const { logEvent } = useAmplitude();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    slug: mockSlug
  })
}));

describe('CategoryPage', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <Router>
        <CategoryPage
          fitbs={fitbs}
          match={{ url: `/${tag.slug}` }}
          tags={tags}
        />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it('tagEmpty', () => {
    render(
      <Router>
        <CategoryPage fitbs={fitbs} match={{ url: `/${tag.slug}` }} tags={[]} />
      </Router>
    );
    expect(logEvent).not.toBeCalled(); // FIXME
  });
});
