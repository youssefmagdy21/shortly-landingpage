import { useRef } from "react";
import { easeInOut, motion } from "framer-motion";
import RoundedButton from "../RoundedButton";

const MobileNav = ({ navItems, closeMenu }) => {
  const navMenuRef = useRef(null);
  const closeMenuFromOutside = (e) => {
    if (!navMenuRef.current.contains(e.target)) {
      closeMenu();
    }
  };
  return (
    <div
      className="absolute left-0 right-0 z-50 h-screen w-full bg-opacity-50 md:hidden"
      onClick={closeMenuFromOutside}
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{
          duration: 0.3,
          type: easeInOut,
        }}
        className={`mx-auto block max-w-[88%] rounded-xl bg-primary-darkViolet px-6 py-10 text-center text-base tracking-wide text-white`}
        ref={navMenuRef}
      >
        <nav className="mb-7 border-b border-neutral-grayishViolet border-opacity-20">
          <ul className="">
            {navItems.map((item, idx) => (
              <motion.li
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.3 + 0.1 * idx,
                  duration: 0.3,
                  type: easeInOut,
                }}
                key={item.id}
                className="mb-7"
              >
                <a href={item.link} className="block">
                  {item.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div>
          <span className="mb-7 block">
            <a href="#" className="block">
              login
            </a>
          </span>
          <RoundedButton textValue={"sign up"} link={"#"} />
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
