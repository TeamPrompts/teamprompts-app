import React from 'react';
import { create } from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import fitbs from '../../mocks/fitbs';
import tags from '../../mocks/tags';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('to match snapshot', () => {
    const tree = create(
      <Router>
        <HomePage fitbs={fitbs} tags={tags} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
