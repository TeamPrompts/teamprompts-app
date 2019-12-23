import classnames from 'classnames';
import React, { useState } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import Checkbox, { values } from '../components/Checkbox/Checkbox';
import { useAmplitude } from '../instrumentation/AmplitudeHookProvider';
import {
  navigateToPromptDetail,
  toggleExample
} from '../instrumentation/events';
import { modes, pageTypes } from '../constants';
import Content from './Content';
import CopyButton from './CopyButton';

function FillInTheBlanks({ fitb, history, pageType, tag, viewPosition }) {
  const clipboard = useClipboard();
  const [inputs, setInputs] = useState();
  const [mode, setMode] = useState(modes.input);

  const { logEvent } = useAmplitude();

  function enable() {
    return pageType !== pageTypes.PromptsPage && history;
  }

  function onClick() {
    if (enable()) {
      const { properties, type } = navigateToPromptDetail;
      logEvent(type, properties({ fitb, viewPosition }));
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
          'py-8 shadow text-lg': pageType !== pageTypes.PromptsPage,
          'bg-gray-100 pb-8 shadow-xl text-xl':
            pageType === pageTypes.PromptsPage
        }
      )}
      data-testid="container"
      onClick={onClick}
    >
      {pageType === pageTypes.PromptsPage && (
        <div className="text-right">
          <button
            className="focus:outline-none text-right"
            data-testid="go-to-category"
            onClick={() => {
              if (history) {
                if (tag) {
                  history.push(`/${tag.slug}`);
                } else {
                  history.push(`/all`);
                }
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
            const { properties, type } = toggleExample;
            if (value === values.off) {
              logEvent(type(values.on), properties({ fitb, viewPosition }));
              setMode(modes.examples);
            }
            if (value === values.on) {
              logEvent(type(values.off), properties({ fitb, viewPosition }));
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
        viewPosition={viewPosition}
      />
      {fitb.author && (
        <div className="italic text-indigo-700 text-right text-sm underline">
          <a
            href={`https://twitter.com/${fitb.author.twitter}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {`@${fitb.author.twitter}`}
          </a>
        </div>
      )}
    </div>
  );
}

export default FillInTheBlanks;
