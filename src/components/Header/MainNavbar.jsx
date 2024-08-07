const MainNavbar = ({ navItems }) => {
  return (
    <nav className="ml-11 hidden md:block">
      <ul className="flex items-center gap-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              className="inline-block transition-colors duration-300 ease-in-out hover:text-neutral-darkViolet"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default MainNavbar;
