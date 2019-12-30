// RESOURCES:
// - https://redd.one/blog/debounce-vs-throttle
// - https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout

function debouce(func, duration) {
  let timeoutId;

  return (...args) => {
    function callback() {
      timeoutId = undefined;
      func.apply(this, args);
    }

    clearTimeout(timeoutId);

    timeoutId = setTimeout(callback, duration);
  };
}

export default debouce;
