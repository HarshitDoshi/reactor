import React from 'react';

const HamburgerNavItem = (props) => {
  const { hamburgerNavState, title, icon } = props;
  return (
    <>
      {
        hamburgerNavState
          ? <button className="w-full hover:bg-gray-700 flex flex-row items-center justify-start py-2 px-4">
            {icon}
            <span className="text-gray-100 mx-4">{title}</span>
          </button >
          : <button className="w-full hover:bg-gray-700 flex flex-col items-center justify-center py-2">
            {icon}
            <span className="text-gray-100 text-xs">{title}</span>
          </button>
      }
    </>
  );
};

export default HamburgerNavItem;
