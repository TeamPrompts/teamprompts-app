import React from 'react';

function Heading({ title }) {
  return (
    <h1 className="font-bold mb-8 mt-2 text-4xl text-gray-900">
      {title} <span className="antialiased text-base text-gray-600">βeta</span>
    </h1>
  );
}

export default Heading;
