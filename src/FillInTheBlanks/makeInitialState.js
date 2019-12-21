function makeInitialState(source) {
  const blanks = source.match(/__BLANK__/g);
  if (blanks) {
    const initialState = blanks.reduce((accumulator, current, index) => {
      accumulator[index] = '';
      return accumulator;
    }, {});
    return initialState;
  }
  return {};
}

export default makeInitialState;
