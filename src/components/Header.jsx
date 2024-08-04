import logo from "../assets/images/logo.svg";
// import menuIcon from "../assets/images/icon-menu.svg";
const Header = () => {
  return (
    <header className="flex h-20 w-full items-center justify-center border border-black px-16 text-base font-bold capitalize text-neutral-grayishViolet">
      <h1 className="mr-10">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </h1>
      <nav>
        <ul className="flex gap-8">
          <li className="transition-colors duration-300 ease-in-out hover:text-neutral-darkViolet">
            <a href="/" className="block">
              features
            </a>
          </li>
          <li className="transition-colors duration-300 ease-in-out hover:text-neutral-darkViolet">
            <a href="/" className="block">
              pricing
            </a>
          </li>
          <li className="transition-colors duration-300 ease-in-out hover:text-neutral-darkViolet">
            <a href="/" className="block">
              resources
            </a>
          </li>
        </ul>
      </nav>
      <div className="ml-auto">
        <button className="mr-8 capitalize transition-colors duration-300 ease-in-out hover:text-neutral-darkViolet">
          <a href="/" className="block">
            login
          </a>
        </button>
        <button className="rounded-3xl bg-primary-cyan px-6 py-2 capitalize text-white transition-opacity duration-300 ease-in-out hover:opacity-60">
          <a href="/" className="block">
            sign up
          </a>
        </button>
      </div>
      {/* mobile nav to be added */}
      {/* <img src={menuIcon} alt="mobile-nav-menu-icon" width={32} height={32} /> */}
    </header>
  );
};
export default Header;
