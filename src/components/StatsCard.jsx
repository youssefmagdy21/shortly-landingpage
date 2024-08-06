const StatsCard = ({ icon, title, description, cardPositon }) => {
  return (
    <div
      className={`relative h-auto w-80 rounded-md bg-white px-6 py-10 shadow-sm ${cardPositon}`}
    >
      <div className="absolute -top-12 rounded-full bg-primary-darkViolet px-6 py-6">
        <img src={icon} alt="card-icon" />
      </div>
      <div>
        <h4 className="mb-4 mt-6 font-bold capitalize text-neutral-darkBlue">
          {title}
        </h4>
        <p className="text-[0.875rem] leading-normal text-neutral-grayishViolet">
          {description}
        </p>
      </div>
    </div>
  );
};
export default StatsCard;
