import React from 'react';

function Footer({ version }) {
  return (
    <p className="my-8">
      <small className="font-normal text-gray-700 text-sm">v{version}</small>
    </p>
  );
}

export default Footer;
