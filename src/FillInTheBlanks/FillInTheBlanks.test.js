import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import { useClipboard } from 'use-clipboard-copy';
import fitb from '../mocks/fitb';
import tag from '../mocks/tag';
import FillInTheBlanks from './FillInTheBlanks';
import { pageTypes } from '../constants';

jest.mock('use-clipboard-copy');

describe('FillInTheBlanks', () => {
  const mockPush = jest.fn();

  const props = {
    fitb,
    history: { push: mockPush },
    tag
  };

  beforeEach(() => {
    mockPush.mockReset();
  });

  it('to match snapshot', () => {
    const tree = create(<FillInTheBlanks {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggle', () => {
    const { container, getByTestId } = render(<FillInTheBlanks {...props} />);

    // on
    fireEvent.click(getByTestId(fitb.id));
    expect(container).toMatchSnapshot();

    // off
    fireEvent.click(getByTestId(fitb.id));
    expect(container).toMatchSnapshot();
  });

  it('Copy to clipboard', () => {
    const mockCopy = jest.fn();
    useClipboard.mockImplementation(() => ({ copy: mockCopy }));
    const { getByTestId } = render(<FillInTheBlanks {...props} />);

    fireEvent.click(getByTestId('copy-button'));

    expect(mockCopy).toBeCalled();
  });

  it('navigate to details w/ tag', () => {
    const { getByTestId } = render(<FillInTheBlanks {...props} />);

    fireEvent.click(getByTestId('container'));

    expect(mockPush).toBeCalledWith(`/${tag.slug}/${fitb.id}`);
  });

  it('navigate to details w/o tag', () => {
    const { tag, ...rest } = props;
    const { getByTestId } = render(<FillInTheBlanks {...rest} />);

    fireEvent.click(getByTestId('container'));

    expect(mockPush).toBeCalledWith(`/all/${fitb.id}`);
  });

  it('not enable', () => {
    const { history, ...rest } = props;
    const { getByTestId } = render(<FillInTheBlanks {...rest} />);

    fireEvent.click(getByTestId('container'));

    expect(mockPush).not.toBeCalled();
  });

  it('navigate to category w/ tag', () => {
    const { getByTestId } = render(
      <FillInTheBlanks pageType={pageTypes.PromptsPage} {...props} />
    );

    fireEvent.click(getByTestId('go-to-category'));

    expect(mockPush).toBeCalledWith(`/${tag.slug}`);
  });

  it('navigate to category w/ tag', () => {
    const { tag, ...rest } = props;
    const { getByTestId } = render(
      <FillInTheBlanks pageType={pageTypes.PromptsPage} {...rest} />
    );

    fireEvent.click(getByTestId('go-to-category'));

    expect(mockPush).toBeCalledWith(`/all`);
  });

  it('no history', () => {
    const { history, ...rest } = props;
    const { getByTestId } = render(
      <FillInTheBlanks pageType={pageTypes.PromptsPage} {...rest} />
    );

    fireEvent.click(getByTestId('go-to-category'));

    expect(mockPush).not.toBeCalled();
  });
});
