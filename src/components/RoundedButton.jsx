const RoundedButton = ({ textValue, link }) => {
  return (
    <span className="text-center">
      <a
        href={link}
        className="block rounded-[2rem] bg-primary-cyan px-[2em] py-[0.7em] font-bold capitalize text-white transition-colors duration-300 ease-in-out hover:bg-primary-lightCyan"
      >
        {textValue}
      </a>
    </span>
  );
};
export default RoundedButton;
