function reducer(state, action) {
  switch (action.type) {
    case 'change': {
      const copy = { ...state };
      copy[action.value.id] = action.value.value;
      return copy;
    }
    default:
      return state;
  }
}

export default reducer;
