import Form from "./Form";
import ResultCard from "./ResultCard";
const FormSection = () => {
  return (
    <section className="bg-neutral-lightGray">
      <div className="px-6 md:px-16 lg:px-32 xl:px-40">
        <Form />

        {/* output elements container */}
        <div className="mt-5 space-y-5 text-sm md:max-lg:text-base lg:text-lg">
          {/* element */}
          <ResultCard
            inputUrl={"https://www.linkedin.com/company/frontend-mentor/"}
            shortenedUrl={"https://rel.ink/k4lKyk"}
          />
          {/* element */}
          <div className="block gap-6 rounded-md bg-white shadow-sm md:flex md:items-center md:justify-between md:px-6 md:py-4">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap border-b border-neutral-grayishViolet border-opacity-30 px-4 py-3 text-neutral-darkViolet md:border-none md:p-0">
              https://www.frontendmentor.io
            </p>

            <div className="block px-4 py-3 md:flex md:items-center md:gap-6 md:p-0">
              <a
                href="/"
                className="text-primary-cyan transition-colors duration-300 ease-in-out hover:text-neutral-darkViolet"
              >
                https://rel.ink/k4lKyk
              </a>
              <button className="mt-3 block w-full rounded-md bg-primary-darkViolet py-[0.5rem] font-bold text-white transition-colors duration-300 ease-in-out hover:bg-primary-lightCyan md:mt-0 md:px-7 md:text-base">
                Copied!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FormSection;
