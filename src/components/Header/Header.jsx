import RoundedButton from "../RoundedButton";
import logo from "/src/assets/images/logo.svg";
import menuIcon from "/src/assets/images/icon-menu.svg";
import MobileNav from "./MobileNav";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navItems = [
    {
      id: 0,
      title: "features",
      link: "#",
    },
    {
      id: 1,
      title: "pricing",
      link: "#",
    },
    {
      id: 2,
      title: "resources",
      link: "#",
    },
  ];
  return (
    <header className="relative bg-white text-sm font-bold capitalize text-neutral-grayishViolet">
      {/* container */}
      <div className="flex items-center px-6 py-8 md:px-16 md:py-11 lg:px-32 xl:px-40">
        {/* logo */}
        <span>
          <a href="/" className="block">
            <img src={logo} alt="logo" />
          </a>
        </span>

        {/* nav menu */}
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

        {/* buttons */}
        <div className="ml-auto hidden items-center gap-8 md:flex">
          <span>
            <a
              href="#"
              className="block transition-colors duration-300 ease-in-out hover:text-neutral-darkViolet"
            >
              login
            </a>
          </span>
          <RoundedButton textValue={"sign up"} link={"#"} />
        </div>

        {/* mobile nav menu icon */}
        <div className="ml-auto block md:hidden">
          <button onClick={() => setOpenMenu(!openMenu)}>
            <img
              src={menuIcon}
              alt="mobile-nav-menu-icon"
              width={32}
              height={32}
            />
          </button>
        </div>
      </div>

      {/* mobile nav menu */}
      {openMenu && <MobileNav navItems={navItems} />}
    </header>
  );
};
export default Header;
