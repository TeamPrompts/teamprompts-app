import { SOURCE } from '../mocks/fitb';
import makeInitialState from './makeInitialState';
import reducer, { CHANGE } from './reducer';

describe('reducer', () => {
  const initialState = makeInitialState(SOURCE);

  const scenarios = [
    {
      action: { type: CHANGE, value: { id: 0, value: 'hello' } },
      description: CHANGE,
      state: initialState
    },
    {
      action: { type: 'UNKNOWN', value: { id: 0, value: 'hello' } },
      description: 'UNKNOWN',
      state: initialState
    }
  ];

  scenarios.forEach(({ action, description, state }) => {
    it(description, () => {
      expect(reducer(state, action)).toMatchSnapshot();
    });
  });
});
