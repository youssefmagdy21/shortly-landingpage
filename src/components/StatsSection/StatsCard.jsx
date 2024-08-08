const StatsCard = ({ icon, title, description, cardPositon }) => {
  return (
    <div
      className={`relative w-80 max-w-[96%] rounded-md bg-white px-9 py-10 shadow-sm ${cardPositon} text-center min-[1222px]:px-6 min-[1222px]:text-start`}
    >
      <div className="absolute -top-11 left-[calc(50%-44px)] rounded-full bg-primary-darkViolet px-6 py-6 min-[1222px]:left-6">
        <img src={icon} alt="card-icon" className="h-10 w-10" />
      </div>
      <div>
        <h4 className="mb-4 mt-8 font-bold capitalize text-neutral-darkBlue">
          {title}
        </h4>
        <p className="text-sm leading-6 text-neutral-grayishViolet">
          {description}
        </p>
      </div>
    </div>
  );
};
export default StatsCard;

// className={`relative h-auto w-80 rounded-md bg-white px-6 py-10 shadow-sm ${cardPositon} text-center`}
