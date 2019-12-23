import { render } from '@testing-library/react';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { useAmplitude } from '../../instrumentation/AmplitudeHookProvider';
import fitb from '../../mocks/fitb';
import fitbs from '../../mocks/fitbs';
import tag from '../../mocks/tag';
import tags from '../../mocks/tags';
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
    const { container } = render(
      <Router>
        <PromptsPage
          fitbs={fitbs}
          match={{ url: `/${tag.slug}` }}
          tags={tags}
        />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it('no fitb', () => {
    const { logEvent } = useAmplitude();

    render(
      <Router>
        <PromptsPage
          fitbs={[fitbs[0]]}
          match={{ url: `/${tag.slug}` }}
          tags={[]}
        />
      </Router>
    );

    expect(logEvent).not.toBeCalled(); // FIXME
  });
});
