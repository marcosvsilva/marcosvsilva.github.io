import React from 'react';

import NavItem from './NavItem';

function DesktopNavigation({ ...props }) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem link="/about">About</NavItem>
        {/* <NavItem link="/articles">Articles</NavItem>
        <NavItem link="/projects">Projects</NavItem>
        <NavItem link="/speaking">Speaking</NavItem>
        <NavItem link="/uses">Uses</NavItem> */}
      </ul>
    </nav>
  );
}

export default DesktopNavigation;
