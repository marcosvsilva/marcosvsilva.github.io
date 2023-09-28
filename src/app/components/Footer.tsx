import Container from './Container';
// import NavLink from './navigation/NavItem';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {/* 
                <NavLink link="/about">About</NavLink>
                <NavItem link="/articles">Articles</NavItem>
                <NavItem link="/projects">Projects</NavItem>
                <NavItem link="/speaking">Speaking</NavItem>
                <NavItem link="/uses">Uses</NavItem>
                */}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">&copy; {currentYear} Marcos Silva. All rights reserved.</p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
}

export default Footer;
