import RoundedButton from "../RoundedButton";

const MobileNav = ({ navItems }) => {
  return (
    <div
      className={`absolute left-0 right-0 z-50 mx-auto block max-w-[85%] rounded-xl bg-primary-darkViolet px-6 py-9 text-center text-base tracking-wide text-white md:hidden`}
    >
      <nav className="mb-7 border-b border-neutral-grayishViolet border-opacity-20">
        <ul className="">
          {navItems.map((item) => (
            <li key={item.id} className="mb-7">
              <a href={item.link} className="block">
                {item.title}
              </a>
            </li>
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
    </div>
  );
};

export default MobileNav;
