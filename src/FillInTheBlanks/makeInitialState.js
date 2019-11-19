function makeInitialState(source) {
  const initialState = source
    .match(/__BLANK__/g)
    .reduce((accumulator, current, index) => {
      accumulator[index] = '';
      return accumulator;
    }, {});
  return initialState;
}

export default makeInitialState;
