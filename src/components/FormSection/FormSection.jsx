const FormSection = () => {
  // px-6  md:px-16  lg:px-32 xl:px-40

  return (
    <section className="bg-neutral-lightGray">
      {/* container */}
      {/* relative px-6 pt-20 md:px-16 lg:px-32 xl:px-40 */}
      <div className="px-6 md:px-16 lg:px-32 xl:px-40">
        {/* form container */}
        {/* bg-shorten-mobile absolute -top-20 left-0 right-0 mx-auto flex min-h-40 items-center justify-center rounded-lg bg-primary-darkViolet bg-right-top bg-no-repeat p-6 */}
        <div className="bg-shorten-mobile md:bg-shorten-desktop -mb-20 flex -translate-y-20 items-center justify-center rounded-lg bg-primary-darkViolet bg-right-top bg-no-repeat p-6 md:bg-cover md:px-14 md:py-12">
          <form className="flex w-full flex-col gap-3 md:flex-row md:gap-5">
            <div className="relative md:flex-1">
              <input
                type="text"
                placeholder="Shorten a link here..."
                className="w-full rounded-md px-4 py-2 placeholder:text-sm placeholder:text-neutral-grayishViolet placeholder:opacity-70 md:rounded-lg md:px-7 md:py-[0.875rem] md:placeholder:text-base"
              />
              {/* to add validation styles */}
              {/*  ring-2 ring-inset ring-secondary-red placeholder:text-secondary-red placeholder:opacity-50
              outline outline-secondary-red focus-visible
              */}
              {/* <p className="-bottom-7 mt-1 text-xs italic leading-4 text-secondary-red md:absolute md:mt-0 md:text-sm">
                Please add a link
              </p> */}
            </div>
            <button className="rounded-md bg-primary-cyan py-[0.6em] text-base font-bold leading-normal text-white transition-colors duration-300 ease-in-out hover:bg-primary-lightCyan md:rounded-lg md:px-10 md:py-0">
              Shorten It!
            </button>
          </form>
        </div>

        {/* output elements container */}
        <div className="mt-5 space-y-5 text-sm md:max-lg:text-base lg:text-lg">
          {/* element */}
          <div className="block gap-6 rounded-md bg-white shadow-sm md:flex md:items-center md:justify-between md:px-6 md:py-4">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap border-b border-neutral-grayishViolet border-opacity-30 px-4 py-3 text-neutral-darkViolet md:border-none md:p-0">
              https://www.linkedin.com/company/frontend-mentor/
            </p>

            <div className="block px-4 py-3 md:flex md:items-center md:gap-6 md:p-0">
              <a
                href="/"
                className="text-primary-cyan transition-colors duration-300 ease-in-out hover:text-neutral-darkViolet"
              >
                https://rel.ink/k4lKyk
              </a>
              <button className="mt-3 block w-full rounded-md bg-primary-cyan py-[0.5rem] font-bold text-white transition-colors duration-300 ease-in-out hover:bg-primary-lightCyan md:mt-0 md:px-7 md:text-base">
                Copy
              </button>
            </div>
          </div>

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
