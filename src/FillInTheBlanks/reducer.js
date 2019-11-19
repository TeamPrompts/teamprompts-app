export const CHANGE = 'change';

function reducer(state, action) {
  switch (action.type) {
    case CHANGE: {
      const copy = { ...state };
      copy[action.value.id] = action.value.value;
      return copy;
    }
    default:
      return state;
  }
}

export default reducer;
