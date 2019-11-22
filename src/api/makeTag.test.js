import makeRecord from '../mocks/makeRecord';
import makeTag from './makeTag';

test('tags to match snapshot', () => {
  const tags = [
    {
      fields: {
        FITBs: [
          'receM4Gus7HH43oLM',
          'rec99C9lxMl6aSedq',
          'rec590aP1VRIE8f23',
          'recNsahDzKCx0IQPk'
        ],
        Name: 'retrospectives'
      },
      id: 'recTqD26ElVvXKVad'
    }
  ]
    .map(makeRecord)
    .map(makeTag);

  expect(tags).toMatchSnapshot();
});
