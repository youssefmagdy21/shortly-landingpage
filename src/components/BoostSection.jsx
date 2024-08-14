import RoundedButton from "./RoundedButton";

const BoostSection = () => {
  return (
    <section
      className="bg-primary-darkViolet bg-boost-mobile leading-6 text-white md:bg-boost-desktop"
      style={{
        backgroundSize: "100% 100%",
      }}
    >
      {/* container */}
      <div className="flex justify-center px-6 py-20 md:px-16 md:py-14 lg:px-32 xl:px-40">
        <div className="flex flex-col items-center gap-5 text-center md:gap-8">
          <h2 className="text-2xl font-bold md:text-4xl">
            Boost your links today
          </h2>
          <RoundedButton
            textValue={"get started"}
            link={"/shortly-landingpage/"}
          />
        </div>
      </div>
    </section>
  );
};

export default BoostSection;
