const RoundedButton = ({ textValue }) => {
  return (
    <button className="hover:bg-primary-lightCyan rounded-3xl bg-primary-cyan px-6 py-2 font-bold capitalize text-white transition-colors duration-300 ease-in-out">
      {textValue}
    </button>
  );
};
export default RoundedButton;
