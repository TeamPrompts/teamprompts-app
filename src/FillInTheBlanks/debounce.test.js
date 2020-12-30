import debounce from './debounce';

describe('debounce', () => {
  const mockFunc = jest.fn();

  afterAll(() => {
    // jest.useRealTimers(); // VERIFY
  });

  beforeEach(() => {
    jest.useFakeTimers(); // OK
    mockFunc.mockReset();
  });

  it('debouces', () => {
    debounce(mockFunc, 1000)();

    jest.advanceTimersByTime(2000);

    expect(mockFunc).toBeCalledTimes(1);
  });

  it('w/ args', () => {
    let result;
    const sum = (a, b) => {
      result = a + b;
    };

    debounce(sum, 1000)(3, 5);

    jest.advanceTimersByTime(2000);

    expect(result).toBe(8);
  });
});
