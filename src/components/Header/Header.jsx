import { useState } from "react";
import MainNavbar from "./MainNavbar";
import MobileNav from "./MobileNav";
import RoundedButton from "../RoundedButton";
import logo from "/src/assets/images/logo.svg";
import menuIcon from "/src/assets/images/icon-menu.svg";
import { AnimatePresence } from "framer-motion";

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
          <a href="/shortly-landingpage/" className="block">
            <img src={logo} alt="logo" />
          </a>
        </span>

        {/* nav menu */}
        <MainNavbar navItems={navItems} />

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
        <div className="ml-auto md:hidden">
          <button className="block" onClick={() => setOpenMenu(!openMenu)}>
            <img
              src={menuIcon}
              alt="mobile-nav-menu-icon"
              width={32}
              height={32}
            />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {openMenu && (
          <MobileNav navItems={navItems} closeMenu={() => setOpenMenu(false)} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
