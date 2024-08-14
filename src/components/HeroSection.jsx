import RoundedButton from "./RoundedButton";
import heroImage from "../assets/images/illustration-working.svg";

const MainSection = () => {
  return (
    <main>
      <div className="grid grid-cols-1 overflow-x-hidden pb-40 md:grid-cols-[1fr,minmax(0,1fr)] md:pb-20 lg:pb-28 xl:pb-40">
        <div className="self-center px-6 md:order-2 md:px-12 lg:px-20 xl:px-24">
          <img
            src={heroImage}
            alt="figure of a man working on a pc"
            className="mx-auto w-[500px] max-w-max md:w-[540px] lg:w-[620px] xl:w-auto"
          />
        </div>

        <article className="px-6 pt-11 md:py-24 md:pl-16 md:pr-0 lg:pl-32 lg:pr-0 xl:pl-40 xl:pr-0">
          <div className="flex flex-col items-center gap-8 md:items-start">
            <div className="text-center md:text-start">
              <h1 className="mb-4 text-4xl font-bold tracking-[-0.035em] text-neutral-darkBlue md:mb-0 md:text-[2.875rem] lg:text-[54px] xl:text-[4.3125rem]">
                <span className="inline-block md:leading-[1.1]">
                  More than just
                </span>{" "}
                <span className="inline-block md:leading-[1.1]">
                  shorter links
                </span>
              </h1>
              <p className="text-neutral-grayishViolet">
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
              </p>
            </div>
            <RoundedButton
              textValue={"get started"}
              link={"/shortly-landingpage/"}
            />
          </div>
        </article>
      </div>
    </main>
  );
};

export default MainSection;
