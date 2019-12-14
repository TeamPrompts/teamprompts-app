import makeInitialState from './makeInitialState';

describe('makeInitialState', () => {
  const scenarios = [
    {
      description: 'good',
      expected: { 0: '', 1: '' },
      source:
        'What I like the most about __BLANK__ as a programming language is that __BLANK__.'
    },
    {
      description: 'bad',
      expected: {},
      source:
        'As a company we are making many implicit and explicit bets. Our biggest implicit (assumed, unspoken) bet is [some version of the future, impact of an intervention, etc.] This bet has major ramifications across the company including [how bet influences various teams].  The impact of this bet being wrong would be [some major, company-wide adverse impact]. The upside of being right would be [some major, company-wide positive impact]. To increase our chance of realizing the upside we will [some activity].'
    }
  ];

  scenarios.forEach(({ description, expected, source }) => {
    it(description, () => {
      const initialState = makeInitialState(source);
      expect(initialState).toEqual(expected);
    });
  });
});
