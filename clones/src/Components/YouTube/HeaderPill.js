import React from 'react';

const HeaderPill = (props) => {
  const { pillText } = props;
  return (
    <p className="bg-gray-700 rounded-full my-2 mx-2 px-4 py-1 text-base items-center justify-center self-center text-center text-gray-200">{pillText}</p>
  );
};

export default HeaderPill;
