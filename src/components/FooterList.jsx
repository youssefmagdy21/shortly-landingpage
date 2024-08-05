const FooterList = ({ title, listItems }) => {
  return (
    <div className="text-base capitalize">
      <p className="mb-6 font-bold text-white">{title}</p>
      <ul className="text-neutral-grayishViolet">
        {listItems.map((item) => {
          return (
            <li
              className="mb-3 transition-[color] duration-300 ease-in-out hover:text-primary-cyan"
              key={item}
            >
              <a href="/" className="block">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FooterList;
