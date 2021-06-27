import { useState } from 'react';
import TextLogo from './TextLogo';

const Header = () => {
  const [searchBarState, setSearchBarState] = useState(false);
  return (
    <header className="w-full fixed top-0 z-50 text-gray-900 dark:text-gray-50 body-font shadow-lg border-b-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 dark:shadow-none">
      <div className="flex flex-wrap my-2 flex-col  md:flex-row items-start md:items-center justify-between">
        <div className="flex flex-wrap flex-col md:flex-row items-center md:items-center justify-between w-full">
          <div className="flex flex-row justify-center items-center w-full">
            <TextLogo logoTitle="Vocabulary ⚡ FlashCards" />
          </div>
        </div>
      </div>
    </header >
  );
};

export default Header;