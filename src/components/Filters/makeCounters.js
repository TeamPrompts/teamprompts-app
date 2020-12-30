function makeCounters({ fitbs }) {
  const counters = fitbs.reduce((accumulator, current) => {
    current.tags.forEach(tag => {
      if (accumulator[tag]) {
        accumulator[tag] += 1;
      } else {
        accumulator[tag] = 1;
      }
    });
    return accumulator;
  }, {});

  return counters;
}

export default makeCounters;
