import React from 'react';
import HamburgerNavItem from './HamburgerNavItem';
import { HomeIcon, GlobeAltIcon, CollectionIcon, LibraryIcon, ClockIcon, FilmIcon, FolderOpenIcon } from '@heroicons/react/solid';

const HamburgerNav = (props) => {
  const { hamburgerNavState } = props;
  const homeIcon = <HomeIcon className="h-6 w-auto text-gray-400 mx-4" />;
  const globeIcon = <GlobeAltIcon className="h-6 w-auto text-gray-400 mx-4" />;
  const collectionIcon = <CollectionIcon className="h-6 w-auto text-gray-400 mx-4" />;
  const libraryIcon = <LibraryIcon className="h-6 w-auto text-gray-400 mx-4" />;
  const yourVideosIcon = <FolderOpenIcon className="h-6 w-auto text-gray-400 mx-4" />;
  const historyIcon = <ClockIcon className="h-6 w-auto text-gray-400 mx-4" />;
  const moviesIcon = <FilmIcon className="h-6 w-auto text-gray-400 mx-4" />;
  return (
    <nav className="flex flex-wrap items-center text-base justify-center pt-4 pb-4">
      <HamburgerNavItem title="Home" icon={homeIcon} hamburgerNavState={hamburgerNavState} />
      <HamburgerNavItem title="Explore" icon={globeIcon} hamburgerNavState={hamburgerNavState} />
      <HamburgerNavItem title="Subscriptions" icon={collectionIcon} hamburgerNavState={hamburgerNavState} />
      <HamburgerNavItem title="Library" icon={libraryIcon} hamburgerNavState={hamburgerNavState} />
      <HamburgerNavItem title="History" icon={historyIcon} hamburgerNavState={hamburgerNavState} />
      <HamburgerNavItem title="Your Videos" icon={yourVideosIcon} hamburgerNavState={hamburgerNavState} />
      <HamburgerNavItem title="Your Movies" icon={moviesIcon} hamburgerNavState={hamburgerNavState} />
    </nav>
  );
};

export default HamburgerNav;
