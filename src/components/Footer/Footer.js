import React, { useState } from 'react';
import useCookie from '@devhammed/use-cookie';
import {
  MASTER_DETAIL_V1,
  NONE,
  TEAMPROMPTS_APP_EXPERIMENT
} from '../../constants';

const TRY = 'try';
const LEAVE = 'leave';

function Footer({ version }) {
  const [experiment, setExperiment] = useCookie(
    TEAMPROMPTS_APP_EXPERIMENT,
    NONE
  );

  const [toggle, setToggle] = useState(
    experiment === MASTER_DETAIL_V1 ? LEAVE : TRY
  );

  return (
    <p className="my-8">
      <small className="font-normal text-gray-700 text-sm">v{version}</small>
      <button
        className="bg-red-500 focus:outline-none font-bold font-mono hover:bg-red-700 ml-3 px-2 rounded text-sm text-white"
        data-testid="βeta-button"
        onClick={() => {
          if (toggle === TRY) {
            setExperiment(MASTER_DETAIL_V1);
            setToggle(LEAVE);
            window.location.assign('/');
          }
          if (toggle === LEAVE) {
            setExperiment(NONE);
            setToggle(TRY);
            window.location.assign('/');
          }
        }}
        type="button"
      >
        {`${toggle} the βeta`}
      </button>
    </p>
  );
}

export default Footer;
