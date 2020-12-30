import fitb from '../mocks/fitb';
import fitbs from '../mocks/fitbs';
import getType from './getType';

describe('getType', () => {
  const { examples, prompts, ...justBlanks } = fitb;
  fitbs.push(justBlanks);

  fitbs.forEach((fitb) => {
    it('type', () => {
      expect(getType(fitb)).toMatchSnapshot();
    });
  });
});
