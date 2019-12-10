import classnames from 'classnames';
import React, { useState } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import Checkbox, { values } from '../components/Checkbox/Checkbox';
import { modes, pageTypes } from '../constants';
import Content from './Content';
import CopyButton from './CopyButton';

function FillInTheBlanks({ fitb, history, pageType, tag }) {
  const clipboard = useClipboard();
  const [inputs, setInputs] = useState();
  const [mode, setMode] = useState(modes.input);

  function enable() {
    return pageType !== pageTypes.PromptsPage && history;
  }

  function onClick() {
    if (enable()) {
      if (tag) {
        history.push(`/${tag.slug}/${fitb.id}`);
      } else {
        history.push(`/all/${fitb.id}`);
      }
    }
  }

  return (
    <div
      className={classnames(
        'border-b border-gray-500 leading-loose mb-2 px-4',
        {
          'hover:bg-gray-100 cursor-pointer': enable(),
          ' py-8 shadow text-lg': pageType !== pageTypes.PromptsPage,
          'bg-pink-100  pb-8 shadow-xl text-xl':
            pageType === pageTypes.PromptsPage
        }
      )}
      onClick={onClick}
    >
      {pageType === pageTypes.PromptsPage && (
        <div className="text-right">
          <button
            className="text-right"
            onClick={() => {
              if (history) {
                history.goBack();
              }
            }}
          >
            &times;
          </button>
        </div>
      )}
      <Content callback={setInputs} fitb={fitb} mode={mode} />
      {fitb.examples && (
        <Checkbox
          id={fitb.id}
          onChange={value => {
            if (value === values.off) {
              setMode(modes.examples);
            }
            if (value === values.on) {
              setMode(modes.input);
            }
          }}
          value={mode === modes.examples ? values.on : values.off}
        />
      )}
      <CopyButton
        fitb={fitb}
        inputs={inputs}
        mode={mode}
        onClick={value => {
          console.log(value);
          clipboard.copy(value);
        }}
      />
    </div>
  );
}

export default FillInTheBlanks;
