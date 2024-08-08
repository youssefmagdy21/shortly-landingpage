import StatsCard from "./StatsCard";
import brandIcon from "/src/assets/images/icon-brand-recognition.svg";
import detailsIcon from "/src/assets/images/icon-detailed-records.svg";
import customizeIcon from "/src/assets/images/icon-fully-customizable.svg";

const StatsCardsList = () => {
  return (
    <div className="relative flex min-h-80 flex-col items-center justify-center gap-[5.625rem] min-[1222px]:flex-row min-[1222px]:gap-7">
      <div className="absolute top-0 h-full w-2 bg-primary-cyan min-[1222px]:top-[calc(50%-0.5rem)] min-[1222px]:h-2 min-[1222px]:w-full min-[1222px]:max-w-[40%]"></div>
      <StatsCard
        icon={brandIcon}
        title={"Brand Recognition"}
        description={
          "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
        }
        cardPositon={"min-[1222px]:self-start"}
      />
      <StatsCard
        icon={detailsIcon}
        title={"Detailed Records"}
        description={
          "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        }
        cardPositon={"min-[1222px]:self-center"}
      />
      <StatsCard
        icon={customizeIcon}
        title={"Fully Customizable"}
        description={
          "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        }
        cardPositon={"min-[1222px]:self-end"}
      />
    </div>
  );
};
export default StatsCardsList;
