import fitb from '../mocks/fitb';
import { BLANK_XS, modes } from '../constants';
import getValues from './getValues';

describe('getValues', () => {
  it('BLANK_XS', () => {
    expect(getValues(modes.blanksXS, fitb)).toEqual([BLANK_XS, BLANK_XS]);
  });

  it('no blanks', () => {
    expect(
      getValues(modes.blanks, {
        ...fitb,
        source: fitb.source.replace(/__BLANK__/g, '')
      })
    ).toEqual([]);
  });
});
