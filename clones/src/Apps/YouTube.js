import React, { useState } from 'react';
import Header from '../Components/YouTube/Header';
import Main from '../Components/YouTube/Main';

const YouTube = () => {
  const [hamburgerNavState, setHamburgerNavState] = useState(true);
  return (
    <div className="flex flex-col h-screen w-full">
      <Header hamburgerNavState={hamburgerNavState} setHamburgerNavState={setHamburgerNavState} />
      <Main hamburgerNavState={hamburgerNavState} />
    </div>
  );
};

export default YouTube;
