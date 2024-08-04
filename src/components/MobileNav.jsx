const MobileNav = () => {
  return (
    <div className="mx-auto w-72 max-w-[90%] rounded-xl bg-primary-darkViolet px-5 py-10 text-center text-base font-bold capitalize text-white">
      <nav className="mb-7 border-b border-neutral-gray border-opacity-20">
        <ul className="">
          <li className="mb-7">
            <a href="/" className="block">
              features
            </a>
          </li>
          <li className="mb-7">
            <a href="/" className="block">
              pricing
            </a>
          </li>
          <li className="mb-7">
            <a href="/" className="block">
              resources
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex w-full flex-col justify-center gap-6">
        <button className="capitalize">
          <a href="/" className="block">
            login
          </a>
        </button>
        <button className="rounded-3xl bg-primary-cyan px-6 py-2 capitalize text-white">
          <a href="/" className="block">
            sign up
          </a>
        </button>
      </div>
    </div>
  );
};
export default MobileNav;
