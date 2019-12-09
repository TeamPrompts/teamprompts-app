import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';
import Checkbox, { values } from '../components/Checkbox/Checkbox';
import { modes } from '../constants';
import Content from './Content';
import CopyButton from './CopyButton';

function FillInTheBlanks({ fitb, history, tag }) {
  const clipboard = useClipboard();
  const [inputs, setInputs] = useState();
  const [mode, setMode] = useState(modes.input);

  function onClick() {
    if (history && tag) {
      history.push(`/${tag.slug}/${fitb.id}`);
    }
  }

  return (
    <div
      className={classnames(
        'border-b border-gray-500 leading-loose py-8 text-lg',
        {
          'hover:bg-gray-100 cursor-pointer': history && tag
        }
      )}
      onClick={onClick}
    >
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
      {false && tag && (
        <Link
          className="ml-3 text-indigo-700 underline"
          to={`/${tag.slug}/${fitb.id}`}
        >
          <FontAwesomeIcon icon={faLink} />
        </Link>
      )}
    </div>
  );
}

export default FillInTheBlanks;
