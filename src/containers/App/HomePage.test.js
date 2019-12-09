import React from 'react';
import { create } from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import fitb from '../../mocks/fitb';
import tag from '../../mocks/tag';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('to match snapshot', () => {
    const tree = create(
      <Router>
        <HomePage fitbs={[fitb]} tags={[tag]} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
