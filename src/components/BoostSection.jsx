import RoundedButton from "./RoundedButton";
import bgBoostDesktop from "../assets/images/bg-boost-desktop.svg";
import bgBoostMobile from "../assets/images/bg-boost-mobile.svg";

const BoostSection = () => {
  return (
    <section
      className="mx-auto w-full bg-primary-darkViolet py-10 text-center"
      style={{
        backgroundImage: `url(${bgBoostDesktop})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <h3 className="mb-5 text-3xl font-bold text-white">
          Boost your links today
        </h3>
        <RoundedButton textValue={"get started"} />
      </div>
    </section>
  );
};
export default BoostSection;
