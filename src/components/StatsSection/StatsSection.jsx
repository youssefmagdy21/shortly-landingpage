import StatsCardsList from "./StatsCardsList";

const StatsSection = () => {
  return (
    <section className="bg-neutral-lightGray">
      {/* container */}
      <div className="px-6 py-20 md:px-16 md:py-28 lg:px-32 xl:px-40">
        {/* text area */}
        <div className="mx-auto mb-20 max-w-[300px] text-center sm:mb-24 sm:max-w-[480px]">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-neutral-darkBlue sm:mb-5 sm:text-4xl sm:tracking-tighter">
            Advanced Statistics
          </h2>
          <p className="text-sm leading-6 text-neutral-grayishViolet sm:text-base sm:leading-7">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        {/* cards area */}
        <StatsCardsList />
      </div>
    </section>
  );
};
export default StatsSection;
