import React from 'react';

function CopyButton({ mode, model }) {
  return (
    <button
      className="bg-blue-500 font-bold font-mono hover:bg-blue-700 ml-3 px-4 rounded-full text-sm text-white"
      onClick={console.log}
      type="button"
    >
      Ctrl+C
    </button>
  );
}

export default CopyButton;
