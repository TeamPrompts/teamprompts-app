import fitb from '../mocks/fitb';
import { BLANK_XS, modes } from '../constants';
import getValues from './getValues';

describe('getValues', () => {
  it('BLANK_XS', () => {
    expect(getValues(modes.blanksXS, fitb)).toEqual([BLANK_XS, BLANK_XS]);
  });
});
