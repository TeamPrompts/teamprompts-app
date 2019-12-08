import React from 'react';

function Footer({ version }) {
  return (
    <small className="font-normal my-8 text-gray-700 text-sm">v{version}</small>
  );
}

export default Footer;
