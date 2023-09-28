import Link from 'next/link';
import React from 'react';

type NavLinkProps = {
  link: string;
  children: React.ReactNode;
};

function NavItem({ link, children }: NavLinkProps) {
  return (
    <Link href={link}>
      <div className="transition hover:text-teal-500 dark:hover:text-teal-400">{children}</div>
    </Link>
  );
}

export default NavItem;
